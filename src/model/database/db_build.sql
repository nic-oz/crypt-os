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
COMMIT;
