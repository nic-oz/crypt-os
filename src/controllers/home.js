const getAllCoins = require('./../model/queries/get_all_coins')

exports.get = (req, res) => {
    getAllCoins().then(allCoins => {
        res.render('coinlist', {allCoins});
    }).catch(console.log)
        
}