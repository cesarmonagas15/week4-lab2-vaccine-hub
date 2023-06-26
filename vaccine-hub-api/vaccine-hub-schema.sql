CREATE TABLE users(
    id          VARCHAR(20) PRIMARY KEY,
    password    VARCHAR(20) NOT NULL,
    email       VARCHAR(40) NOT NULL UNIQUE,
    location    VARCHAR(20) NOT NULL,
    date        TIMESTAMP   NOT NULL
);