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
        ('Favorite Framework Shirt', 'You know React is your favorite', '12.99', 'https://github.com/SenciZ/devduds/blob/main/resources/reactShirt.png?raw=true', '1'),
        ('T-shirt React', 'Only true devs use react, this shirt proves that you are a true dev', '19.99', 'https://github.com/SenciZ/devduds/blob/main/resources/reactShirt.png?raw=true', '1'),
        ('React T-Shirt', 'A soft wonderful shirt with your favorite framework logo.. React!', '16.99', 'https://github.com/SenciZ/devduds/blob/main/resources/reactShirt.png?raw=true', '1'),
        ('Another React T-Shirt', 'This shirt is better than the other React Shirt, get it', '12.99', 'https://github.com/SenciZ/devduds/blob/main/resources/reactShirt.png?raw=true', '1')
        ;`)
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
        return
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};





