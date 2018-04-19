const getAllCoins = require('./../model/queries/get_all_coins');

exports.get = (req, res) => {
  getAllCoins()
    .then(allCoins => {
      res.render('home', { activePage: { home: true }, allCoins });
    })
    .catch(console.log);
};
