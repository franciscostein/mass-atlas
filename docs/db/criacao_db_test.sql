-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
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
  `id` INT(11) NOT NULL,
  `categoria` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`categoria` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `crud-estabelecimentos-test`.`estabelecimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud-estabelecimentos-test`.`estabelecimentos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `razao_social` VARCHAR(80) NOT NULL,
  `nome_fantasia` VARCHAR(60) NULL DEFAULT NULL,
  `cnpj` VARCHAR(14) NOT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `endereco` VARCHAR(60) NULL DEFAULT NULL,
  `cidade` VARCHAR(32) NULL,
  `estado` VARCHAR(2) NULL,
  `telefone` VARCHAR(11) NULL DEFAULT NULL,
  `data_cadastro` DATETIME NULL DEFAULT NULL,
  `categoria` INT(11) NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `agencia` VARCHAR(4) NULL DEFAULT NULL,
  `conta` VARCHAR(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `razao_social_UNIQUE` (`razao_social` ASC) VISIBLE,
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) VISIBLE,
  INDEX `categoria_pk_idx` (`categoria` ASC) VISIBLE,
  CONSTRAINT `categoria_pk`
    FOREIGN KEY (`categoria`)
    REFERENCES `crud-estabelecimentos-test`.`categorias` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


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
