## Crypt-os

A web app for users to search information related the current crypto-currencies. So you can get more information about the crypto-currencies you are interested in.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Local setup

1.  Clone the repo:

    - `git clone https://github.com/nic-oz/crypt-os.git`

2.  Run npm install to install all dependencies:

    - `npm install`

3.  Open either pgcli/psql, and create a database:

    - `createdb [database name]`

4.  Create a user for your database using:

    - `CREATE USER [the new username] WITH SUPERUSER PASSWORD '[the password of the database]';`

5.  exit pgcli/psql and run the build the database locally using:

    - `\q` (exits pgcli/psql)
    - `psql -d [database name] -f [full file path to db build];`

6.  Select data from coins table:
    - `SELECT * FROM coins`

### Running the test

To see the tests used to build the app run:

`npm test`
