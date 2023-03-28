CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE employe(
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    salary INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employe;

/*CREAR DATOS, HACER INSERCIONES*/
INSERT INTO employe VALUES 
(1,'Joe', 1000),
(2,'Henry',200),
(3,'Sam',2500),
(4,'Max',1500);

