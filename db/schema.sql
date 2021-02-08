CREATE DATABASE netflixmovies_db;
USE netflixmovies_db;
DROP TABLE IF EXISTS moviesntvshows;
CREATE TABLE moviesntvshows(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
show_id VARCHAR(255),
type VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
director VARCHAR (255) DEFAULT '',
cast TEXT(1024) NOT NULL,
country VARCHAR(255) NOT NULL,
date_added VARCHAR(255) DEFAULT '',
release_year VARCHAR(255),
rating VARCHAR (255),
duration VARCHAR(255),
listed_in VARCHAR(255),
description TEXT(1024),
watched VARCHAR(255),
personal_rating VARCHAR(255)
);