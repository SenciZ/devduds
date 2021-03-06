require("dotenv").config();

const { CONNECTION_STRING } = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  seed: (req, res) => {
    sequelize
      .query(
        `
        drop table if exists featured;
        drop table if exists products;
        drop table if exists subscribe_list;
        drop table if exists product_category;


        create table product_category (
            product_category_id serial primary key, 
            category_name varchar(30)
        );

        create table subscribe_list (
          subscriber_id serial primary key, 
          subscriber_email varchar(100)
      );

        create table products (
            product_id serial primary key,
            product_name varchar(60),
            product_description varchar(500),
            product_price varchar(10),
            image_url varchar(200),
            product_category_id integer references product_category(product_category_id) 
        );

        create table featured (
          featured_id serial primary key,
          featured_name varchar(60),
          product_id integer references products(product_id), 
          featured_description varchar(500),
          featured_price varchar(10),
          image_url varchar(200),
          featured_category_id integer references product_category(product_category_id) 
    );

        insert into product_category (category_name)
        values ('Mens Shirts'),
        ('Womens Shirts'),
        ('Acccessories');
        
        insert into subscribe_list (subscriber_email)
        values ('senad@gmail.com');

        

        insert into products (product_name, product_description, product_price, image_url, product_category_id)
        values 
        ('PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-carolina.png?raw=true', '1'),
        ('HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-black.png?raw=true', '1'),
        ('CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-heather.png?raw=true', '1'),
        ('PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-white.png?raw=true', '1'),
        ('Black Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-black.png?raw=true', '1'),
        ('Cherry Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-cherry.png?raw=true', '1'),
        ('Graphite Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-graphite.png?raw=true', '1'),
        ('Heather Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-heather.png?raw=true', '1'),
        ('Red Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-red.png?raw=true', '1'),
        ('Gray Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-sport.png?raw=true', '1'),
        ('White Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-white.png?raw=true', '1'),
        ('Black JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-black.png?raw=true', '1'),
        ('Gold JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-gold.png?raw=true', '1'),
        ('Graphite JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-graphite.png?raw=true', '1'),
        ('Heather JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-heather.png?raw=true', '1'),
        ('Royal JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-royalh.png?raw=true', '1'),
        ('Gray JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-sport.png?raw=true', '1'),
        ('White JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-white.png?raw=true', '1'),
        ('Black Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-black.png?raw=true', '1'),
        ('Graphite Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-graphite.png?raw=true', '1'),
        ('Heather Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-heather.png?raw=true', '1'),
        ('Gray Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-heather.png?raw=true', '1'),
        ('White Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-white.png?raw=true', '1'),
        ('Black React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-black.png?raw=true', '1'),
        ('Graphite React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-graphite.png?raw=true', '1'),
        ('Heather React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-heather.png?raw=true', '1'),
        ('Blue React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-royalh.png?raw=true', '1'),
        ('Saphire React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-saphire.png?raw=true', '1'),
        ('Gray React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-sport.png?raw=true', '1'),
        ('White React T-Shirt', 'Show your React.js pride by wearing this extremely soft t-shirt with the React.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-white.png?raw=true', '1'),
        ('Black Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-black.png?raw=true', '1'),
        ('Graphite Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-graphite.png?raw=true', '1'),
        ('Heather Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-heather.png?raw=true', '1'),
        ('Orange Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-orange.png?raw=true', '1'),
        ('Blue Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-royalh.png?raw=true', '1'),
        ('Gray Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-sport.png?raw=true', '1'),
        ('White Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-white.png?raw=true', '1'),
        ('Black Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-black.png?raw=true', '1'),
        ('Graphite Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-graphite.png?raw=true', '1'),
        ('Green Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-green.png?raw=true', '1'),
        ('Heather Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-heather.png?raw=true', '1'),
        ('Blue Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-royalh.png?raw=true', '1'),
        ('Gray Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-sport.png?raw=true', '1'),
        ('White Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-white.png?raw=true', '1'),
        ('Red Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-red-wm.png?raw=true', '2'),
        ('White Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-white-wm.png?raw=true', '2'),
        ('Gray Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-gray-wm.png?raw=true', '2'),
        ('Saphire Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-saphire-wm.png?raw=true', '2'),
        ('Heather Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-heather-wm.png?raw=true', '2'),
        ('Royal Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-royal-wm.png?raw=true', '2'),
        ('Lime Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-lime-wm.png?raw=true', '2'),
        ('Black Angular T-Shirt', 'Show your Angular pride by wearing this extremely soft t-shirt with the Angular logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-black-wm.png?raw=true', '2'),

        ('Red Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-red-wm.png?raw=true', '2'),
        ('White Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-white-wm.png?raw=true', '2'),
        ('Gray Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-gray-wm.png?raw=true', '2'),
        ('Saphire Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-saphire-wm.png?raw=true', '2'),
        ('Heather Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-heather-wm.png?raw=true', '2'),
        ('Royal Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-royal-wm.png?raw=true', '2'),
        ('Lime Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-lime-wm.png?raw=true', '2'),
        ('Black Vue T-Shirt', 'Show your Vue.js pride by wearing this extremely soft t-shirt with the Vue.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-black-wm.png?raw=true', '2'),

        ('Red Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-red-wm.png?raw=true', '2'),
        ('White Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-white-wm.png?raw=true', '2'),
        ('Gray Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-gray-wm.png?raw=true', '2'),
        ('Saphire Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-saphire-wm.png?raw=true', '2'),
        ('Heather Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-heather-wm.png?raw=true', '2'),
        ('Royal Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-royal-wm.png?raw=true', '2'),
        ('Lime Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-lime-wm.png?raw=true', '2'),
        ('Black Svelte T-Shirt', 'Show your Svelte pride by wearing this extremely soft t-shirt with the Svelte logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-black-wm.png?raw=true', '2'),

        ('Red CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-red-wm.png?raw=true', '2'),
        ('White CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-white-wm.png?raw=true', '2'),
        ('Gray CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-gray-wm.png?raw=true', '2'),
        ('Saphire CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-saphire-wm.png?raw=true', '2'),
        ('Heather CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-heather-wm.png?raw=true', '2'),
        ('Royal CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-royal-wm.png?raw=true', '2'),
        ('Lime CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-lime-wm.png?raw=true', '2'),
        ('Black CSS T-Shirt', 'Show your CSS pride by wearing this extremely soft t-shirt with the CSS logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-black-wm.png?raw=true', '2'),

        ('Red HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-red-wm.png?raw=true', '2'),
        ('White HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-white-wm.png?raw=true', '2'),
        ('Gray HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-gray-wm.png?raw=true', '2'),
        ('Saphire HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-saphire-wm.png?raw=true', '2'),
        ('Heather HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-heather-wm.png?raw=true', '2'),
        ('Royal HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-royal-wm.png?raw=true', '2'),
        ('Lime HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-lime-wm.png?raw=true', '2'),
        ('Black HTML T-Shirt', 'Show your HTML pride by wearing this extremely soft t-shirt with the HTML logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-black-wm.png?raw=true', '2'),

        ('Red PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-red-wm.png?raw=true', '2'),
        ('White PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-white-wm.png?raw=true', '2'),
        ('Gray PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-gray-wm.png?raw=true', '2'),
        ('Saphire PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-saphire-wm.png?raw=true', '2'),
        ('Heather PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-heather-wm.png?raw=true', '2'),
        ('Royal PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-royal-wm.png?raw=true', '2'),
        ('Lime PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-lime-wm.png?raw=true', '2'),
        ('Black PHP T-Shirt', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-black-wm.png?raw=true', '2'),

        ('Red Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-red-wm.png?raw=true', '2'),
        ('White Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-white-wm.png?raw=true', '2'),
        ('Gray Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-gray-wm.png?raw=true', '2'),
        ('Saphire Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-saphire-wm.png?raw=true', '2'),
        ('Heather Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-heather-wm.png?raw=true', '2'),
        ('Royal Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-royal-wm.png?raw=true', '2'),
        ('Lime Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-lime-wm.png?raw=true', '2'),
        ('Black Node T-Shirt', 'Show your Node.js pride by wearing this extremely soft t-shirt with the Node.js logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-black-wm.png?raw=true', '2'),

        ('Red JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-red-wm.png?raw=true', '2'),
        ('White JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-white-wm.png?raw=true', '2'),
        ('Gray JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-gray-wm.png?raw=true', '2'),
        ('Saphire JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-saphire-wm.png?raw=true', '2'),
        ('Heather JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-heather-wm.png?raw=true', '2'),
        ('Royal JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-royal-wm.png?raw=true', '2'),
        ('Lime JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-lime-wm.png?raw=true', '2'),
        ('Black JS T-Shirt', 'Show your JavaScript pride by wearing this extremely soft t-shirt with the JavaScript logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-black-wm.png?raw=true', '2'),

        ('Red PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-red-wm.png?raw=true', '2'),
        ('White PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-white-wm.png?raw=true', '2'),
        ('Gray PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-gray-wm.png?raw=true', '2'),
        ('Saphire PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-saphire-wm.png?raw=true', '2'),
        ('Heather PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-heather-wm.png?raw=true', '2'),
        ('Royal PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-royal-wm.png?raw=true', '2'),
        ('Lime PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-lime-wm.png?raw=true', '2'),
        ('Black PostgreSQL T-Shirt', 'Show your PostgreSQL pride by wearing this extremely soft t-shirt with the PostgreSQL logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-black-wm.png?raw=true', '2')
        ;


        
        insert into featured (featured_name, product_id, featured_description, featured_price, image_url, featured_category_id)
        values 
        ('PHP T-Shirt', '1', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-carolina.png?raw=true', '1'),
        ('HTML T-Shirt', '2', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-black.png?raw=true', '1'),
        ('CSS T-Shirt', '3', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-heather.png?raw=true', '1'),
        ('Gold JS T-Shirt', '13', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-gold.png?raw=true', '1'),

        ('Gray PostgreSQL T-Shirt', '111', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-gray-wm.png?raw=true', '2'),
        ('Black JS T-Shirt','108', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-black-wm.png?raw=true', '2'),
        ('Black Node T-Shirt','100', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '26.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-black-wm.png?raw=true', '2'),
        ('Saphire React T-Shirt','28', 'Show your PHP pride by wearing this extremely soft t-shirt with the PHP logo. Made from 4.5 oz 100% preshrunk ring spun cotton', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-saphire.png?raw=true', '1')



        ;`)
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
        return
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};





