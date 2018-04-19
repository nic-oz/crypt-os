const coinDetial = require('./../model/queries/get_coin_details');

exports.get = (req, res, next) => {
  const { coinSym } = req.params;
  coinDetial(coinSym)
    .then(coinRecord => {
      if (coinRecord && coinRecord.length > 0) {
        coinRecord = coinRecord[0];
        console.log(coinRecord);
        return res.render('coindetail', { coinRecord });
      } else {
        next();
      }
    })
    .catch(console.log);
};
