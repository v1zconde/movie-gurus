CREATE netflixmovies_db;
USE netflixmovies_db;
DROP TABLE IF EXISTS moviesntvshows;
CREATE TABLE moviesntvshows(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
show_id VARCHAR(255),
media VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
director VARCHAR (255) NOT NULL,
actors TEXT(1024) NOT NULL,
country VARCHAR(255) NOT NULL,
date_added VARCHAR(255) DEFAULT '',
date_release VARCHAR(255),
duration VARCHAR(255)
);
