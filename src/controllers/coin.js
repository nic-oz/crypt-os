const request = require('request');
const coinDetial = require('./../model/queries/get_coin_details');

function appendApiData(url, callback) {
  request(url, function(error, response, body) {
    if (error) callback(error);
    else {
      callback(null, body);
    }
  })
}

function addHyphen(thing) {
  return thing.replace(' ', '-');
}

exports.get = (req, res, next) => {
  const { coinSym } = req.params;
  coinDetial(coinSym)
    .then(coinRecord => {
      if (coinRecord && coinRecord.length > 0) {
        coinRecord = coinRecord[0];
        appendApiData(`https://api.coinmarketcap.com/v1/ticker/${addHyphen(coinRecord.name)}/?convert=GBP`, function(err, result) {
          if (err) next();
          else {
            try {
              result = JSON.parse(result);
              result = result[0];
              coinRecord.price_gbp = result.price_gbp;
              coinRecord.percent_change_1h = result.percent_change_1h;
              coinRecord.percent_change_24h = result.percent_change_24h;
              coinRecord.percent_change_7d = result.percent_change_7d;
              return res.render('coindetail', { coinRecord });
            } catch (e) {
                console.log(e);
            }
          }
        });
      } else {
        next();
      }
    })
    .catch(console.log);
};
