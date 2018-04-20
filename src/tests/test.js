const test = require('tape');
const request = require('supertest');
const app = require('../app');
const runDbBuild = require('/home/nicos/FAC13/crypt-os/src/model/database/db_build.js');
const getAllCoins = require('../model/queries/get_all_coins.js');
const getCoin = require('../model/queries/get_coin_details.js');

test('Test tape is running', t => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.equal(1, 1, 'Tape is running');
      t.end();
    });
});

test('Test status code of landing page', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Returns status 200');
      t.end();
    });
});

test('Test status code for valid coin symbol', t => {
  request(app)
    .get('/btc')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Returns status 200');
      t.end();
    });
});

test('Test status for error 404', t => {
  request(app)
    .get('/blah')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, 'Returns error 404');
      t.end();
    });
});

test('Test for the first row of all coins query', t => {
  const expected = { name: 'Bitcoin', symbol: 'btc' };
  runDbBuild((err, res) => {
    getAllCoins().then(res => {
      t.deepEqual(
        res[0],
        expected,
        'getAllCoins return the first row of the coins table'
      );
      t.end();
    });
  });
});

test('Test for getting the details of one coin', t => {
  const expected = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'btc',
    rank: 1,
    supply: '21000000.0'
  };
  runDbBuild((err, res) => {
    getCoin('btc').then(res => {
      t.deepEqual(
        res[0],
        expected,
        'getCoin returns all database details of Bitcoin'
      );
      t.end();
    });
  });
});
