# This line specifies that the Docker image to be built will start from a PHP 8.2.0 image with Apache already installed.
FROM php:8.2.0-apache

# This line runs a command that updates the list of available packages and installs the packages necessary to use the PHP PDO (PHP Data Objects) extension with MySQL.
RUN apt-get update && apt-get install -y \
  && docker-php-ext-install pdo_mysql
