const getAllCoins = require('./../model/queries/get_all_coins')

exports.get = (req, res) => {
    // return getAllCoins().then((allCoins) => {
        res.render('coinlist', {allCoins});
    // })
    
}