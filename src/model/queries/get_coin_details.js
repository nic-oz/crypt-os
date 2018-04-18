const db = require('../databases/db_connection');

const getCoinDetails = coinSym => {
  return db.query(
    `
    SELECT * FROM coins WHERE symbol= $1
`,
    [coinSym]
  );
};

module.exports = getCoinDetails;
