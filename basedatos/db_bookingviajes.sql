-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_bookingviajes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_bookingviajes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_bookingviajes` DEFAULT CHARACTER SET utf8 ;
USE `db_bookingviajes` ;

-- -----------------------------------------------------
-- Table `db_bookingviajes`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`category` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`country`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`country` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`country` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `abbreviation` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`city`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`city` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`city` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `country_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `country_city_idx` (`country_id` ASC) VISIBLE,
  CONSTRAINT `country_city`
    FOREIGN KEY (`country_id`)
    REFERENCES `db_bookingviajes`.`country` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`product` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `short_description` VARCHAR(120) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  `address` VARCHAR(255) NOT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  `longitude` VARCHAR(45) NOT NULL,
  `area` VARCHAR(45) NULL,
  `average_score` DOUBLE NULL,
  `category_id` INT NOT NULL,
  `city_id` INT NOT NULL,
  `site_policies` MEDIUMTEXT NULL,
  `hse_policies` MEDIUMTEXT NULL,
  `cancellation_policies` MEDIUMTEXT NULL,
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  INDEX `city_id_idx` (`city_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `prod_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `db_bookingviajes`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `prod_city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `db_bookingviajes`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`image` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `url` VARCHAR(255) NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `img_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_bookingviajes`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`role` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` enum('SUPERUSER', 'ADMIN', 'USER') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`user` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `enabled` TINYINT NOT NULL DEFAULT 1,
  `city_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_city_idx` (`city_id` ASC) VISIBLE,
  INDEX `user_role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `user_city`
    FOREIGN KEY (`city_id`)
    REFERENCES `db_bookingviajes`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_bookingviajes`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`favorite_product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`favorite_product` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`favorite_product` (
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  PRIMARY KEY (`user_id`, `product_id`),
  CONSTRAINT `fp_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_bookingviajes`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fp_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_bookingviajes`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`reservation` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`reservation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `arrival_time` TIME NOT NULL,
  `check_in_date` DATE NOT NULL,
  `checkout_date` DATE NOT NULL,
  `comments` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `res_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_bookingviajes`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `res_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_bookingviajes`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`spec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`spec` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`spec` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `icon` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bookingviajes`.`product_spec`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_bookingviajes`.`product_spec` ;

CREATE TABLE IF NOT EXISTS `db_bookingviajes`.`product_spec` (
  `id_product` INT NOT NULL,
  `id_spec` INT NOT NULL,
  INDEX `id_spec_idx` (`id_spec` ASC) VISIBLE,
  PRIMARY KEY (`id_product`, `id_spec`),
  CONSTRAINT `ps_product_id`
    FOREIGN KEY (`id_product`)
    REFERENCES `db_bookingviajes`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ps_spec_id`
    FOREIGN KEY (`id_spec`)
    REFERENCES `db_bookingviajes`.`spec` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
