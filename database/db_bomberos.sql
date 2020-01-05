-- MySQL Script generated by MySQL Workbench
-- vie 03 ene 2020 20:07:14 -05
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_bomberos
-- -----------------------------------------------------
-- Base de datos para los partes

-- -----------------------------------------------------
-- Schema db_bomberos
--
-- Base de datos para los partes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_bomberos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci ;
USE `db_bomberos` ;

-- -----------------------------------------------------
-- Table `db_bomberos`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Provincia` (
  `idProvincia` INT NOT NULL AUTO_INCREMENT,
  `Provincia` TEXT(20) NULL,
  PRIMARY KEY (`idProvincia`))
ENGINE = InnoDB
COMMENT = 'Tabla donde se registraran las provincias';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Canton`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Canton` (
  `idCanton` INT NOT NULL AUTO_INCREMENT,
  `Canton` TEXT(20) NOT NULL,
  `idProvincia` INT NOT NULL,
  PRIMARY KEY (`idCanton`),
  INDEX `fk_Canton_Provincia_idx` (`idProvincia` ASC),
  CONSTRAINT `fk_Canton_Provincia`
    FOREIGN KEY (`idProvincia`)
    REFERENCES `db_bomberos`.`Provincia` (`idProvincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se ingresan los cantones';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Parroquia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Parroquia` (
  `idParroquia` INT NOT NULL AUTO_INCREMENT,
  `Parroquia` TEXT(20) NOT NULL,
  `idCanton` INT NOT NULL,
  PRIMARY KEY (`idParroquia`),
  INDEX `fk_Parroquia_Canton1_idx` (`idCanton` ASC),
  CONSTRAINT `fk_Parroquia_Canton1`
    FOREIGN KEY (`idCanton`)
    REFERENCES `db_bomberos`.`Canton` (`idCanton`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se ingresan las parroquias';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Roles` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `Rol` TEXT(20) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB
COMMENT = 'Tabla donde se registra el cargo que tiene una persona dentro del cuerpo de bomberos';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Rango`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Rango` (
  `idRango` INT NOT NULL AUTO_INCREMENT,
  `Rango` TEXT(20) NOT NULL,
  `Insignia` TEXT(20) NOT NULL,
  PRIMARY KEY (`idRango`))
ENGINE = InnoDB
COMMENT = 'Tabla donde se registra los rangos que se asignaran a cada integrante del cuerpo de bomberos';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Personal` (
  `idPersonal` INT NOT NULL AUTO_INCREMENT,
  `Nombres` TEXT(20) NOT NULL,
  `Apellidos` TEXT(20) NOT NULL,
  `idRango` INT NOT NULL,
  `Cedula` VARCHAR(10) NOT NULL,
  `idRol` INT NOT NULL,
  `Contrasenia` TEXT(50) NOT NULL,
  PRIMARY KEY (`idPersonal`),
  INDEX `fk_Personal_Rango1_idx` (`idRango` ASC),
  INDEX `fk_Personal_Roles1_idx` (`idRol` ASC),
  CONSTRAINT `fk_Personal_Rango1`
    FOREIGN KEY (`idRango`)
    REFERENCES `db_bomberos`.`Rango` (`idRango`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Personal_Roles1`
    FOREIGN KEY (`idRol`)
    REFERENCES `db_bomberos`.`Roles` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se registra el personal que trabaja en la unidad';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Afectado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Afectado` (
  `idAfectado` INT NOT NULL AUTO_INCREMENT,
  `Cedula` VARCHAR(10) NOT NULL,
  `Nombres` TEXT(20) NOT NULL,
  `Apellidos` TEXT(20) NULL,
  PRIMARY KEY (`idAfectado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`Telefono`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Telefono` (
  `idTelefono` INT NOT NULL AUTO_INCREMENT,
  `Telefono` TEXT(20) NOT NULL,
  `idAfectado` INT NOT NULL,
  `idPersonal` INT NOT NULL,
  PRIMARY KEY (`idTelefono`),
  INDEX `fk_Telefono_Afectado1_idx` (`idAfectado` ASC),
  INDEX `fk_Telefono_Personal1_idx` (`idPersonal` ASC),
  CONSTRAINT `fk_Telefono_Afectado1`
    FOREIGN KEY (`idAfectado`)
    REFERENCES `db_bomberos`.`Afectado` (`idAfectado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Telefono_Personal1`
    FOREIGN KEY (`idPersonal`)
    REFERENCES `db_bomberos`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`TEmergencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`TEmergencia` (
  `idTEmergencia` INT NOT NULL AUTO_INCREMENT,
  `TEmergencia` TEXT(20) NOT NULL,
  PRIMARY KEY (`idTEmergencia`))
ENGINE = InnoDB
COMMENT = 'Tabla donde se registran los tipos de emergcia que pueden ser atendidos';


-- -----------------------------------------------------
-- Table `db_bomberos`.`CDia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`CDia` (
  `idCDia` INT NOT NULL AUTO_INCREMENT,
  `CDia` TEXT(20) NULL,
  PRIMARY KEY (`idCDia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`FAviso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`FAviso` (
  `idFAviso` INT NOT NULL AUTO_INCREMENT,
  `FAviso` TEXT(20) NOT NULL,
  PRIMARY KEY (`idFAviso`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`TVehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`TVehiculo` (
  `idTVehiculo` INT NOT NULL AUTO_INCREMENT,
  `TVehiculo` TEXT(20) NOT NULL,
  PRIMARY KEY (`idTVehiculo`))
ENGINE = InnoDB
COMMENT = 'Tabla donde contiene los tipos de vehiculos exitentes';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Vehiculo` (
  `idVehiculo` INT NOT NULL AUTO_INCREMENT,
  `Placa` TEXT(20) NOT NULL,
  `Color` TEXT(20) NOT NULL,
  `idTVehiculo` INT NOT NULL,
  PRIMARY KEY (`idVehiculo`),
  INDEX `fk_Vehiculo_TVehiculo1_idx` (`idTVehiculo` ASC),
  CONSTRAINT `fk_Vehiculo_TVehiculo1`
    FOREIGN KEY (`idTVehiculo`)
    REFERENCES `db_bomberos`.`TVehiculo` (`idTVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se registrana los vehiculos exixtentes en la unidad';


-- -----------------------------------------------------
-- Table `db_bomberos`.`Locacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Locacion` (
  `idLocacion` INT NOT NULL AUTO_INCREMENT,
  `idParroquia` INT NOT NULL,
  `idSector` INT NOT NULL,
  `Calle Principal` TEXT(20) NOT NULL,
  `Calle Secundaria` TEXT(20) NULL,
  `Sector` TEXT(20) NULL,
  PRIMARY KEY (`idLocacion`),
  INDEX `fk_Locacion_Parroquia1_idx` (`idParroquia` ASC),
  CONSTRAINT `fk_Locacion_Parroquia1`
    FOREIGN KEY (`idParroquia`)
    REFERENCES `db_bomberos`.`Parroquia` (`idParroquia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se registra la direccion de la emergencia';


-- -----------------------------------------------------
-- Table `db_bomberos`.`TLocal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`TLocal` (
  `idTLocal` INT NOT NULL AUTO_INCREMENT,
  `TLocal` TEXT(20) NOT NULL,
  PRIMARY KEY (`idTLocal`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`LInicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`LInicio` (
  `idLInicio` INT NOT NULL AUTO_INCREMENT,
  `LInicio` TEXT(20) NOT NULL,
  PRIMARY KEY (`idLInicio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`Causa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Causa` (
  `idCausa` INT NOT NULL AUTO_INCREMENT,
  `Causa` TEXT(20) NOT NULL,
  PRIMARY KEY (`idCausa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`CMuerte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`CMuerte` (
  `idCMuerte` INT NOT NULL AUTO_INCREMENT,
  `CMuerte` TEXT(20) NOT NULL,
  PRIMARY KEY (`idCMuerte`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`TLesion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`TLesion` (
  `idTLesion` INT NOT NULL AUTO_INCREMENT,
  `TLesion` TEXT(20) NOT NULL,
  PRIMARY KEY (`idTLesion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`Lesion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Lesion` (
  `idLesion` INT NOT NULL AUTO_INCREMENT,
  `Nombres` TEXT(20) NOT NULL,
  `Apellidos` TEXT(20) NOT NULL,
  `idCMuerte` INT NOT NULL,
  `idTLesion` INT NOT NULL,
  INDEX `fk_Lesion_CMuerte1_idx` (`idCMuerte` ASC),
  INDEX `fk_Lesion_TLesion1_idx` (`idTLesion` ASC),
  PRIMARY KEY (`idLesion`),
  CONSTRAINT `fk_Lesion_CMuerte1`
    FOREIGN KEY (`idCMuerte`)
    REFERENCES `db_bomberos`.`CMuerte` (`idCMuerte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Lesion_TLesion1`
    FOREIGN KEY (`idTLesion`)
    REFERENCES `db_bomberos`.`TLesion` (`idTLesion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`Parte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`Parte` (
  `idParte` INT NOT NULL AUTO_INCREMENT,
  `idTEmergencia` INT NOT NULL,
  `idCDia` INT NOT NULL,
  `Fecha` DATE NOT NULL,
  `idFAviso` INT NOT NULL,
  `HAviso` TIME NOT NULL,
  `HSalida` TIME NOT NULL,
  `HLugar` TIME NOT NULL,
  `HFin` TIME NOT NULL,
  `HCuartel` TIME NOT NULL,
  `idLocacion` INT NOT NULL,
  `idTLocal` INT NOT NULL,
  `idLInicio` INT NOT NULL,
  `idCausa` INT NOT NULL,
  `idAfectado` INT NOT NULL,
  `idLesion` INT NOT NULL,
  INDEX `fk_Parte_TEmergencia1_idx` (`idTEmergencia` ASC),
  INDEX `fk_Parte_CDia1_idx` (`idCDia` ASC),
  INDEX `fk_Parte_FAviso1_idx` (`idFAviso` ASC),
  INDEX `fk_Parte_Locacion1_idx` (`idLocacion` ASC),
  INDEX `fk_Parte_TLocal1_idx` (`idTLocal` ASC),
  INDEX `fk_Parte_LInicio1_idx` (`idLInicio` ASC),
  INDEX `fk_Parte_Causa1_idx` (`idCausa` ASC),
  INDEX `fk_Parte_Afectado1_idx` (`idAfectado` ASC),
  INDEX `fk_Parte_Lesion1_idx` (`idLesion` ASC),
  PRIMARY KEY (`idParte`),
  CONSTRAINT `fk_Parte_TEmergencia1`
    FOREIGN KEY (`idTEmergencia`)
    REFERENCES `db_bomberos`.`TEmergencia` (`idTEmergencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_CDia1`
    FOREIGN KEY (`idCDia`)
    REFERENCES `db_bomberos`.`CDia` (`idCDia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_FAviso1`
    FOREIGN KEY (`idFAviso`)
    REFERENCES `db_bomberos`.`FAviso` (`idFAviso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_Locacion1`
    FOREIGN KEY (`idLocacion`)
    REFERENCES `db_bomberos`.`Locacion` (`idLocacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_TLocal1`
    FOREIGN KEY (`idTLocal`)
    REFERENCES `db_bomberos`.`TLocal` (`idTLocal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_LInicio1`
    FOREIGN KEY (`idLInicio`)
    REFERENCES `db_bomberos`.`LInicio` (`idLInicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_Causa1`
    FOREIGN KEY (`idCausa`)
    REFERENCES `db_bomberos`.`Causa` (`idCausa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_Afectado1`
    FOREIGN KEY (`idAfectado`)
    REFERENCES `db_bomberos`.`Afectado` (`idAfectado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Parte_Lesion1`
    FOREIGN KEY (`idLesion`)
    REFERENCES `db_bomberos`.`Lesion` (`idLesion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`UApoyo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`UApoyo` (
  `idUApoyo` INT NOT NULL AUTO_INCREMENT,
  `UApoyo` TEXT(20) NOT NULL,
  PRIMARY KEY (`idUApoyo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`ApoyoA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`ApoyoA` (
  `idApoyoA` INT NOT NULL AUTO_INCREMENT,
  `idParte` INT NOT NULL,
  `idUApoyo` INT NOT NULL,
  PRIMARY KEY (`idApoyoA`),
  INDEX `fk_ApoyoA_Parte1_idx` (`idParte` ASC),
  INDEX `fk_ApoyoA_UApoyo1_idx` (`idUApoyo` ASC),
  CONSTRAINT `fk_ApoyoA_Parte1`
    FOREIGN KEY (`idParte`)
    REFERENCES `db_bomberos`.`Parte` (`idParte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ApoyoA_UApoyo1`
    FOREIGN KEY (`idUApoyo`)
    REFERENCES `db_bomberos`.`UApoyo` (`idUApoyo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_bomberos`.`PAtencion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`PAtencion` (
  `idPAtencion` INT NOT NULL AUTO_INCREMENT,
  `idPersonal` INT NOT NULL,
  `idParte` INT NOT NULL,
  PRIMARY KEY (`idPAtencion`),
  INDEX `fk_PAtencion_Personal1_idx` (`idPersonal` ASC),
  INDEX `fk_PAtencion_Parte1_idx` (`idParte` ASC),
  CONSTRAINT `fk_PAtencion_Personal1`
    FOREIGN KEY (`idPersonal`)
    REFERENCES `db_bomberos`.`Personal` (`idPersonal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PAtencion_Parte1`
    FOREIGN KEY (`idParte`)
    REFERENCES `db_bomberos`.`Parte` (`idParte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se registra el personal que acudio a esa emergencia';


-- -----------------------------------------------------
-- Table `db_bomberos`.`VAtencion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_bomberos`.`VAtencion` (
  `idVAtencion` INT NOT NULL AUTO_INCREMENT,
  `idVehiculo` INT NOT NULL,
  `idParte` INT NOT NULL,
  PRIMARY KEY (`idVAtencion`, `idVehiculo`),
  INDEX `fk_VAtencion_Vehiculo1_idx` (`idVehiculo` ASC),
  INDEX `fk_VAtencion_Parte1_idx` (`idParte` ASC),
  CONSTRAINT `fk_VAtencion_Vehiculo1`
    FOREIGN KEY (`idVehiculo`)
    REFERENCES `db_bomberos`.`Vehiculo` (`idVehiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_VAtencion_Parte1`
    FOREIGN KEY (`idParte`)
    REFERENCES `db_bomberos`.`Parte` (`idParte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'Tabla donde se registran los vehiculos que acuideron a esa emergencia';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
