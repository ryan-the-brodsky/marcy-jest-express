# Testing Express Applications with Jest

## Starter Code
We'll start with a simple express application that uses sequelize to manage a Postgres Database and has CRUD routes around a Post model.

This app also relies on the `dotenv` pacakage for environment variables, a best practice when using connection strings to databases. You'll need to create a file named `.env` at the root level of this project on your machine. It should have the following environment variables declared:

```
PG_USER = <your-postgres-superuser>
PG_PASSWORD = <your-postgres-superuser-password>
PG_SERVER = "localhost"
PG_DB_NAME = "jestdemo"
PG_TEST_DB_NAME = "jestdemotest"
```

## Necessary Setup
As always, run `npm install` once you've cloned this repo onto your machine.
Then, you'll need postgres databases set up: create one called "jestdemo" and another called "jestdemotest"
    - You can create new postgresql databases through the command line or a GUI app like pgAdmin.
    - You'll need to recall your superuser account username and password to include in your connection strings