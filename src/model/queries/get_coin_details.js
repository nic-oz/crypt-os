const db = require('../database/db_connection');

const getCoinDetails = coinSym => {
  return db.query(
    `
    SELECT * FROM coins WHERE symbol= $1
`,
    [coinSym]
  );
};

module.exports = getCoinDetails;
