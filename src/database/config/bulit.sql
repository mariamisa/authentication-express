BEGIN;

DROP TABLE IF EXISTS users , posts CASCADE;

CREATE TABLE users(
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  password     VARCHAR(255) NOT NULL           
);

CREATE TABLE posts(
  id           SERIAL       PRIMARY KEY ,
  id_user    INTEGER      REFERENCES users(id),
  description  VARCHAR(255) NOT NULL
);

COMMIT;