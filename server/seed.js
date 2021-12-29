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
        `drop table if exists products;
        drop table if exists product_category;

        create table product_category (
            product_category_id serial primary key, 
            category_name varchar(30)
        );

        create table products (
            product_id serial primary key,
            product_name varchar(60),
            product_description varchar(500),
            product_price varchar(10),
            image_url varchar(200),
            product_category_id integer references product_category(product_category_id) 
        );

        insert into product_category (category_name)
        values ('Mens Shirts'),
        ('Womens Shirts'),
        ('Acccessories');
        

        insert into products (product_name, product_description, product_price, image_url, product_category_id)
        values 
        ('PHP T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/php-carolina.png?raw=true', '1'),
        ('HTML T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/html-black.png?raw=true', '1'),
        ('CSS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/css-heather.png?raw=true', '1'),
        ('PostgreSQL T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/postgres-white.png?raw=true', '1'),
        ('Black Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-black.png?raw=true', '1'),
        ('Cherry Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-cherry.png?raw=true', '1'),
        ('Graphite Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-graphite.png?raw=true', '1'),
        ('Heather Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-heather.png?raw=true', '1'),
        ('Red Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-red.png?raw=true', '1'),
        ('Gray Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-sport.png?raw=true', '1'),
        ('White Angular T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/angular-white.png?raw=true', '1'),
        ('Black JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-black.png?raw=true', '1'),
        ('Gold JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-gold.png?raw=true', '1'),
        ('Graphite JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-graphite.png?raw=true', '1'),
        ('Heather JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-heather.png?raw=true', '1'),
        ('Royal JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-royalh.png?raw=true', '1'),
        ('Gray JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-sport.png?raw=true', '1'),
        ('White JS T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/js-white.png?raw=true', '1'),
        ('Black Node T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-black.png?raw=true', '1'),
        ('Graphite Node T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-graphite.png?raw=true', '1'),
        ('Heather Node T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-heather.png?raw=true', '1'),
        ('Gray Node T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-heather.png?raw=true', '1'),
        ('White Node T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/node-white.png?raw=true', '1'),
        ('Black React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-black.png?raw=true', '1'),
        ('Graphite React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-graphite.png?raw=true', '1'),
        ('Heather React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-heather.png?raw=true', '1'),
        ('Blue React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-royalh.png?raw=true', '1'),
        ('Saphire React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-saphire.png?raw=true', '1'),
        ('Gray React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-sport.png?raw=true', '1'),
        ('White React T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/react-white.png?raw=true', '1'),
        ('Black Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-black.png?raw=true', '1'),
        ('Graphite Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-graphite.png?raw=true', '1'),
        ('Heather Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-heather.png?raw=true', '1'),
        ('Orange Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-orange.png?raw=true', '1'),
        ('Blue Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-royalh.png?raw=true', '1'),
        ('Gray Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-sport.png?raw=true', '1'),
        ('White Svelte T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/svelte-white.png?raw=true', '1'),
        ('Black Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-black.png?raw=true', '1'),
        ('Graphite Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-graphite.png?raw=true', '1'),
        ('Green Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-green.png?raw=true', '1'),
        ('Heather Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-heather.png?raw=true', '1'),
        ('Blue Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-royalh.png?raw=true', '1'),
        ('Gray Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-sport.png?raw=true', '1'),
        ('White Vue T-Shirt', 'You know React is your favorite', '27.99', 'https://github.com/SenciZ/devduds/blob/main/resources/Products/vue-white.png?raw=true', '1')








        ;`)
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
        return
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};





