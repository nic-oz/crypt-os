DROP TABLE IF EXISTS users, coins
CASCADE;
CREATE TABLE users
(
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  member_since TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE coins
(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  symbol VARCHAR(5) NOT NULL,
  rank INT NOT NULL,
  supply DECIMAL(20,1)
);
CREATE UNIQUE INDEX username_unique_idx ON users(username);
CREATE INDEX password_idx ON users(password);
INSERT INTO coins
  (name, symbol, rank, supply)
VALUES
  ('Bitcoin', 'btc', 1, 21000000.0),
  ('Ethereum', 'eth', 2, NULL),
  ('Ripple', 'xrp', 3, 100000000000),
  ('Bitcoin Cash', 'bch', 4, 21000000.0),
  ('Litecoin', 'ltc', 5, 84000000.0),
  ('EOS', 'eos', 6, 1000000000.0),
  ('Cardano', 'ada', 7, 45000000000.0),
  ('Stellar', 'xlm', 8, NULL),
  ('NEO', 'neo', 9, 100000000.0),
  ('IOTA', 'miota', 10, 2779530283.0)
