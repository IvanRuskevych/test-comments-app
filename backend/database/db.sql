CREATE DATABASE IF NOT EXISTS `test-comments-app`

USE `test-comments-app`;

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `head_id` int DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `home_page` varchar(500) DEFAULT NULL,
  `text` varchar(5000) NOT NULL,
  `filename` varchar(500) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,

  PRIMARY KEY (`id`),
  KEY `FK0_comments_idx` (`head_id`),
  CONSTRAINT `FK0_comments` FOREIGN KEY (`head_id`) REFERENCES `comments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


