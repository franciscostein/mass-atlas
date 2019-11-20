-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema crud-estabelecimentos-test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema crud-estabelecimentos-test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `crud-estabelecimentos-test` DEFAULT CHARACTER SET utf8 ;
USE `crud-estabelecimentos-test` ;

-- -----------------------------------------------------
-- Table `crud-estabelecimentos-test`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud-estabelecimentos-test`.`categorias` (
  `id` INT NOT NULL,
  `categoria` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`categoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `crud-estabelecimentos-test`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud-estabelecimentos-test`.`enderecos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cep` INT NULL,
  `logradouro` VARCHAR(45) NULL,
  `numero` INT NULL,
  `bairro` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `estado` VARCHAR(2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `crud-estabelecimentos-test`.`estabelecimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud-estabelecimentos-test`.`estabelecimentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `razao_social` VARCHAR(80) NOT NULL,
  `nome_fantasia` VARCHAR(60) NULL,
  `cnpj` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  `telefone` VARCHAR(15) NULL,
  `endereco` INT NULL,
  `data_cadastro` DATETIME NULL,
  `categoria` INT NULL,
  `status` TINYINT NULL,
  `agencia` INT NULL,
  `conta` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `razao_social_UNIQUE` (`razao_social` ASC) VISIBLE,
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) VISIBLE,
  INDEX `categoria_pk_idx` (`categoria` ASC) VISIBLE,
  INDEX `endereco_pk_idx` (`endereco` ASC) VISIBLE,
  CONSTRAINT `categoria_pk`
    FOREIGN KEY (`categoria`)
    REFERENCES `crud-estabelecimentos-test`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `endereco_pk`
    FOREIGN KEY (`endereco`)
    REFERENCES `crud-estabelecimentos-test`.`enderecos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `crud-estabelecimentos-test`.`categorias`
(`id`,
`categoria`)
VALUES
(1, 'Supermercado'),
(2, 'Restaurante'),
(3, 'Borracharia'),
(4, 'Posto'),
(5, 'Oficina');
