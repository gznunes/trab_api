CREATE TABLE users(
ID BIGSERIAL PRIMARY KEY  NOT NULL,
name VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
password VARCHAR(200) NOT NULL,
UNIQUE (email));

CREATE TABLE reservas (
ID SERIAL PRIMARY KEY  NOT NULL,
NOME VARCHAR(30) NOT NULL,
IDLIVRO INT NOT NULL);

CREATE TABLE livros (
ID SERIAL PRIMARY KEY  NOT NULL,
NOME VARCHAR(30) NOT NULL,
RESERVADO VARCHAR(30) NOT NULL);

CREATE TABLE chamada (
ID SERIAL PRIMARY KEY  NOT NULL,
SALA VARCHAR(30) NOT NULL,
NOME VARCHAR(30) NOT NULL);

CREATE TABLE chamada (
ID SERIAL PRIMARY KEY  NOT NULL,
SALA VARCHAR(30) NOT NULL,
NOME VARCHAR(30) NOT NULL,
DIA timestamp with time zone);

CREATE TABLE chamada (
ID SERIAL PRIMARY KEY  NOT NULL,
SALA VARCHAR(30) NOT NULL,
NOME VARCHAR(30) NOT NULL,
DIA DATE DEFAULT CURRENT_DATE);

CREATE TABLE chamada (
ID SERIAL PRIMARY KEY  NOT NULL,
SALA VARCHAR(30) NOT NULL,
NOME VARCHAR(30) NOT NULL,
DIA DATE DEFAULT NOW());

CREATE TABLE chamada (
ID SERIAL PRIMARY KEY  NOT NULL,
SALA VARCHAR(30) NOT NULL,
NOME VARCHAR(30) NOT NULL,
DIA timestamptz);

SELECT * FROM CHAMADA where dia between '2018-01-01' and '2024-01-31';

INSERT INTO CHAMADA(sala,nome,dia) VALUES ('1200','gabriel','2018-07-02 20:00:00.000') RETURNING *

SELECT * FROM CHAMADA WHERE DATE(dia) = '2023-07-02'
