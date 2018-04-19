const db = require('./../database/db_connection');

const getAllCoins = () => {
  return db.query(`
    SELECT name, symbol FROM coins
`)
};

module.exports = getAllCoins;
