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
  getAllProducts: (req, res) => {
    sequelize
      .query(`SELECT * FROM products ORDER BY RANDOM();`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  getFeaturedProducts: (req, res) => {
    sequelize
      .query(`SELECT * FROM featured ORDER BY RANDOM();`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  getAllMenProducts: (req, res) => {
    sequelize
      .query(
        `SELECT * FROM products WHERE product_category_id=1 ORDER BY RANDOM();`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  getClickedProduct: (req, res) => {
    const { id } = req.params;
    sequelize
      .query(`SELECT * FROM products WHERE product_id=${id};`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  getAllWomensProducts: (req, res) => {
    sequelize
      .query(
        `SELECT * FROM products WHERE product_category_id=2 ORDER BY RANDOM();`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },

  subscribe: (req, res) => {
    let newSubscriber = req.body.email;
    console.log(req.body.email);
    sequelize
      .query(
        `INSERT INTO subscribe_list(subscriber_email) VALUES('${newSubscriber}');`
      )
      .then((dbRes) => res.status(200).send(dbRes))
      .catch((err) => console.log(err));
  },
};
