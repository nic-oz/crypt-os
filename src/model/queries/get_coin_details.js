const db = require('../databases/db_connection');

const getCoinDetails = symbol => {
  return db.query(
    `
    SELECT * FROM coins WHERE symbol= $1
`,
    [symbol]
  );
};

module.exports = getCoinDetails;
