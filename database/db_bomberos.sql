-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-01-2020 a las 16:05:32
-- Versión del servidor: 5.7.28-0ubuntu0.19.04.2
-- Versión de PHP: 7.2.26-1+ubuntu19.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_bomberos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Afectado`
--

CREATE TABLE `Afectado` (
  `idAfectado` int(11) NOT NULL,
  `Cedula` varchar(10) COLLATE utf8_general_mysql500_ci NOT NULL,
  `Nombres` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `Apellidos` tinytext COLLATE utf8_general_mysql500_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ApoyoA`
--

CREATE TABLE `ApoyoA` (
  `idApoyoA` int(11) NOT NULL,
  `idParte` int(11) NOT NULL,
  `idUApoyo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Canton`
--

CREATE TABLE `Canton` (
  `idCanton` int(11) NOT NULL,
  `Canton` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idProvincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se ingresan los cantones';

--
-- Volcado de datos para la tabla `Canton`
--

INSERT INTO `Canton` (`idCanton`, `Canton`, `idProvincia`) VALUES
(3, 'Chordeleg', 1),
(4, 'El Pan', 1),
(5, 'Girón', 1),
(6, 'Guachapala', 1),
(7, 'Gualaceo', 1),
(8, 'Nabón', 1),
(9, 'Oña', 1),
(10, 'Paute', 1),
(11, 'Pucará', 1),
(12, 'San Fernando', 1),
(13, 'Santa Isabel', 1),
(14, 'Sevilla de Oro', 1),
(15, 'Sígsig', 1),
(16, 'San Pedro de Guaranda', 2),
(19, 'San José de Chimbo', 2),
(20, 'Espejo', 4),
(21, 'Lago Agrio', 14),
(23, 'Napito', 17),
(24, 'Cascales', 14),
(25, 'Cuyabeno', 14),
(27, 'Putumayo', 14),
(28, 'Shushufinde', 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Causa`
--

CREATE TABLE `Causa` (
  `idCausa` int(11) NOT NULL,
  `Causa` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CDia`
--

CREATE TABLE `CDia` (
  `idCDia` int(11) NOT NULL,
  `CDia` tinytext COLLATE utf8_general_mysql500_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CMuerte`
--

CREATE TABLE `CMuerte` (
  `idCMuerte` int(11) NOT NULL,
  `CMuerte` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `FAviso`
--

CREATE TABLE `FAviso` (
  `idFAviso` int(11) NOT NULL,
  `FAviso` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Lesion`
--

CREATE TABLE `Lesion` (
  `idLesion` int(11) NOT NULL,
  `Nombres` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `Apellidos` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idCMuerte` int(11) NOT NULL,
  `idTLesion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `LInicio`
--

CREATE TABLE `LInicio` (
  `idLInicio` int(11) NOT NULL,
  `LInicio` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `links`
--

INSERT INTO `links` (`id`, `title`, `url`, `description`, `user_id`, `created_at`) VALUES
(7, 'Facebook', 'http://www.facebook.com', 'Facebook 1', NULL, '2019-12-15 22:56:32'),
(8, 'Youtube', 'http://www.youtube.com', 'Sitio web de videos', NULL, '2019-12-16 01:12:05'),
(9, 'Facebook', 'http://www.facebook.com', 'Sitio web de facebook', NULL, '2019-12-16 01:15:35'),
(14, 'WhatsApp', 'http://web.whatsapp.com', 'Sitio web de WhtasApp', NULL, '2019-12-16 01:51:57'),
(15, 'Youtube', 'http://www.youtube.com', 'Sitio web de videos', 8, '2019-12-16 04:47:34'),
(22, 'Youtube', 'http://www.youtube.com', 'asdasas', 8, '2019-12-16 07:56:05'),
(23, 'Facebook', 'http://www.facebook.com', 'asdasd', 8, '2019-12-16 07:56:17'),
(24, 'Facebook', 'http://www.facebook.com', 'asdasdasd', 8, '2019-12-16 07:56:29'),
(25, 'Youtube', 'http://www.youtube.com', 'asdasda', 8, '2019-12-17 00:27:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Locacion`
--

CREATE TABLE `Locacion` (
  `idLocacion` int(11) NOT NULL,
  `idParroquia` int(11) NOT NULL,
  `idSector` int(11) NOT NULL,
  `Calle Principal` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `Calle Secundaria` tinytext COLLATE utf8_general_mysql500_ci,
  `Sector` tinytext COLLATE utf8_general_mysql500_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registra la direccion de la emergencia';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Parroquia`
--

CREATE TABLE `Parroquia` (
  `idParroquia` int(11) NOT NULL,
  `Parroquia` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idCanton` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se ingresan las parroquias';

--
-- Volcado de datos para la tabla `Parroquia`
--

INSERT INTO `Parroquia` (`idParroquia`, `Parroquia`, `idCanton`) VALUES
(1, 'El Ángel', 20),
(2, '27 de Septiembre', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Parte`
--

CREATE TABLE `Parte` (
  `idParte` int(11) NOT NULL,
  `idTEmergencia` int(11) NOT NULL,
  `idCDia` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `idFAviso` int(11) NOT NULL,
  `HAviso` time NOT NULL,
  `HSalida` time NOT NULL,
  `HLugar` time NOT NULL,
  `HFin` time NOT NULL,
  `HCuartel` time NOT NULL,
  `idLocacion` int(11) NOT NULL,
  `idTLocal` int(11) NOT NULL,
  `idLInicio` int(11) NOT NULL,
  `idCausa` int(11) NOT NULL,
  `idAfectado` int(11) NOT NULL,
  `idLesion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PAtencion`
--

CREATE TABLE `PAtencion` (
  `idPAtencion` int(11) NOT NULL,
  `idPersonal` int(11) NOT NULL,
  `idParte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registra el personal que acudio a esa emergencia';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Personal`
--

CREATE TABLE `Personal` (
  `idPersonal` int(11) NOT NULL,
  `Nombres` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `Apellidos` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idRango` int(11) DEFAULT NULL,
  `Cedula` varchar(10) COLLATE utf8_general_mysql500_ci NOT NULL,
  `idRol` int(11) DEFAULT NULL,
  `Contrasenia` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `image` text COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registra el personal que trabaja en la unidad';

--
-- Volcado de datos para la tabla `Personal`
--

INSERT INTO `Personal` (`idPersonal`, `Nombres`, `Apellidos`, `idRango`, `Cedula`, `idRol`, `Contrasenia`, `image`) VALUES
(7, 'Juan Gabriel', 'Soto Peñafiel', 1, '0401862388', 1, '$2a$10$zkAwNN451IKt.n3IdA1.XOMVgQMAh/UbqRtSsaNi447qFv5XPXfyy', 'descarga.jpeg'),
(18, 'Lizbeth Estefania', 'Yanez Magno', 1, '2100655865', 1, '$2a$10$7xiQCBqMWi5DJtkl4ejg1OGecm0Mv1nqfoBbbjZ2cAUsOPBowDduu', '1542810064559.jpg'),
(19, 'Alan', 'Morillo', 1, '1718520362', 1, '$2a$10$.XvJ0v4vmC5r27cM9pKmGeWwRGpBwzpv9SIQlAc70JKeuf2TCTgSu', 'logo.png'),
(21, 'REY', 'REYES', 1, '0844046001', 1, '$2a$10$mKaQzzsOeUPaeFxdIP5jBeu27oN4jMIbrF3cph9ztqdfLcyYlTidO', 'placa.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Provincia`
--

CREATE TABLE `Provincia` (
  `idProvincia` int(11) NOT NULL,
  `Provincia` tinytext COLLATE utf8_general_mysql500_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registraran las provincias';

--
-- Volcado de datos para la tabla `Provincia`
--

INSERT INTO `Provincia` (`idProvincia`, `Provincia`) VALUES
(1, 'Azuay'),
(2, 'Bolívar'),
(3, 'Cañar'),
(4, 'Carchi'),
(5, 'Chimborazo'),
(6, 'Cotopaxi'),
(7, 'El Oro'),
(8, 'Esmeraldas'),
(9, 'Galápagos'),
(10, 'Guayas'),
(11, 'Imbabura'),
(13, 'Loja'),
(14, 'Sucumbios'),
(15, 'El Oro'),
(17, 'Napo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Rango`
--

CREATE TABLE `Rango` (
  `idRango` int(11) NOT NULL,
  `Rango` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `image` text COLLATE utf8_general_mysql500_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registra los rangos que se asignaran a cada integrante del cuerpo de bomberos';

--
-- Volcado de datos para la tabla `Rango`
--

INSERT INTO `Rango` (`idRango`, `Rango`, `image`) VALUES
(1, 'Bombero', ''),
(2, 'Cabo Segundo', '3889586017_501ae5996c_b.jpg'),
(3, 'Cabo Primero ', '3889585667_db679b8e28_b.jpg'),
(4, 'Sargento Segundo ', '3889585667_db679b8e28_b.jpg'),
(5, 'Sargento Primero', ''),
(7, 'Sub. Teniente de Bomberos', 'subteniente.jpg'),
(8, 'Teniente de Bomberos', 'major_general.svg'),
(9, 'Capitán de Bomberos', '1280px-US-O9_insignia.svg.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

CREATE TABLE `Roles` (
  `idRol` int(11) NOT NULL,
  `Rol` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registra el cargo que tiene una persona dentro del cuerpo de bomberos';

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`idRol`, `Rol`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('11EDBlqSBYlAHtSv7kIqbFcODYrfTv5l', 1579640234, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":19}}'),
('A7_qHTHyhytKEgX810xTkXghxxsWzX4-', 1579612819, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":7}}'),
('Q9LFptnjXT5ZNgZ3WZHg3gvLaeX22RVd', 1579640206, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":18}}'),
('elcORqBrTkEeD0hHnN-wZ41Sg2KtdPnk', 1579638477, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":21}}'),
('mDlVJGweRy4qxeSj9g08Npv_SZKV82QA', 1579644284, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":7}}'),
('o8UWbBnGyUR_OCBmY2uU9AWAVV-66BGe', 1579584104, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}'),
('rSeTIRD5LU_EAKIp_5y3gugN0R9G-yK9', 1579642664, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":7}}'),
('yWJVaWH1d4j6rVs-JiIo5ZY6CVN2SYxI', 1579637162, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Telefono`
--

CREATE TABLE `Telefono` (
  `idTelefono` int(11) NOT NULL,
  `Telefono` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idAfectado` int(11) NOT NULL,
  `idPersonal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TEmergencia`
--

CREATE TABLE `TEmergencia` (
  `idTEmergencia` int(11) NOT NULL,
  `TEmergencia` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registran los tipos de emergcia que pueden ser atendidos';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TLesion`
--

CREATE TABLE `TLesion` (
  `idTLesion` int(11) NOT NULL,
  `TLesion` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TLocal`
--

CREATE TABLE `TLocal` (
  `idTLocal` int(11) NOT NULL,
  `TLocal` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TVehiculo`
--

CREATE TABLE `TVehiculo` (
  `idTVehiculo` int(11) NOT NULL,
  `TVehiculo` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde contiene los tipos de vehiculos exitentes';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `UApoyo`
--

CREATE TABLE `UApoyo` (
  `idUApoyo` int(11) NOT NULL,
  `UApoyo` tinytext COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `VAtencion`
--

CREATE TABLE `VAtencion` (
  `idVAtencion` int(11) NOT NULL,
  `idVehiculo` int(11) NOT NULL,
  `idParte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registran los vehiculos que acuideron a esa emergencia';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Vehiculo`
--

CREATE TABLE `Vehiculo` (
  `idVehiculo` int(11) NOT NULL,
  `Placa` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `Color` tinytext COLLATE utf8_general_mysql500_ci NOT NULL,
  `idTVehiculo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci COMMENT='Tabla donde se registrana los vehiculos exixtentes en la unidad';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Afectado`
--
ALTER TABLE `Afectado`
  ADD PRIMARY KEY (`idAfectado`);

--
-- Indices de la tabla `ApoyoA`
--
ALTER TABLE `ApoyoA`
  ADD PRIMARY KEY (`idApoyoA`),
  ADD KEY `fk_ApoyoA_Parte1_idx` (`idParte`),
  ADD KEY `fk_ApoyoA_UApoyo1_idx` (`idUApoyo`);

--
-- Indices de la tabla `Canton`
--
ALTER TABLE `Canton`
  ADD PRIMARY KEY (`idCanton`),
  ADD KEY `fk_Canton_Provincia_idx` (`idProvincia`);

--
-- Indices de la tabla `Causa`
--
ALTER TABLE `Causa`
  ADD PRIMARY KEY (`idCausa`);

--
-- Indices de la tabla `CDia`
--
ALTER TABLE `CDia`
  ADD PRIMARY KEY (`idCDia`);

--
-- Indices de la tabla `CMuerte`
--
ALTER TABLE `CMuerte`
  ADD PRIMARY KEY (`idCMuerte`);

--
-- Indices de la tabla `FAviso`
--
ALTER TABLE `FAviso`
  ADD PRIMARY KEY (`idFAviso`);

--
-- Indices de la tabla `Lesion`
--
ALTER TABLE `Lesion`
  ADD PRIMARY KEY (`idLesion`),
  ADD KEY `fk_Lesion_CMuerte1_idx` (`idCMuerte`),
  ADD KEY `fk_Lesion_TLesion1_idx` (`idTLesion`);

--
-- Indices de la tabla `LInicio`
--
ALTER TABLE `LInicio`
  ADD PRIMARY KEY (`idLInicio`);

--
-- Indices de la tabla `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Locacion`
--
ALTER TABLE `Locacion`
  ADD PRIMARY KEY (`idLocacion`),
  ADD KEY `fk_Locacion_Parroquia1_idx` (`idParroquia`);

--
-- Indices de la tabla `Parroquia`
--
ALTER TABLE `Parroquia`
  ADD PRIMARY KEY (`idParroquia`),
  ADD KEY `fk_Parroquia_Canton1_idx` (`idCanton`);

--
-- Indices de la tabla `Parte`
--
ALTER TABLE `Parte`
  ADD PRIMARY KEY (`idParte`),
  ADD KEY `fk_Parte_TEmergencia1_idx` (`idTEmergencia`),
  ADD KEY `fk_Parte_CDia1_idx` (`idCDia`),
  ADD KEY `fk_Parte_FAviso1_idx` (`idFAviso`),
  ADD KEY `fk_Parte_Locacion1_idx` (`idLocacion`),
  ADD KEY `fk_Parte_TLocal1_idx` (`idTLocal`),
  ADD KEY `fk_Parte_LInicio1_idx` (`idLInicio`),
  ADD KEY `fk_Parte_Causa1_idx` (`idCausa`),
  ADD KEY `fk_Parte_Afectado1_idx` (`idAfectado`),
  ADD KEY `fk_Parte_Lesion1_idx` (`idLesion`);

--
-- Indices de la tabla `PAtencion`
--
ALTER TABLE `PAtencion`
  ADD PRIMARY KEY (`idPAtencion`),
  ADD KEY `fk_PAtencion_Personal1_idx` (`idPersonal`),
  ADD KEY `fk_PAtencion_Parte1_idx` (`idParte`);

--
-- Indices de la tabla `Personal`
--
ALTER TABLE `Personal`
  ADD PRIMARY KEY (`idPersonal`),
  ADD KEY `fk_Personal_Rango1_idx` (`idRango`),
  ADD KEY `fk_Personal_Roles1_idx` (`idRol`);

--
-- Indices de la tabla `Provincia`
--
ALTER TABLE `Provincia`
  ADD PRIMARY KEY (`idProvincia`);

--
-- Indices de la tabla `Rango`
--
ALTER TABLE `Rango`
  ADD PRIMARY KEY (`idRango`);

--
-- Indices de la tabla `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `Telefono`
--
ALTER TABLE `Telefono`
  ADD PRIMARY KEY (`idTelefono`),
  ADD KEY `fk_Telefono_Afectado1_idx` (`idAfectado`),
  ADD KEY `fk_Telefono_Personal1_idx` (`idPersonal`);

--
-- Indices de la tabla `TEmergencia`
--
ALTER TABLE `TEmergencia`
  ADD PRIMARY KEY (`idTEmergencia`);

--
-- Indices de la tabla `TLesion`
--
ALTER TABLE `TLesion`
  ADD PRIMARY KEY (`idTLesion`);

--
-- Indices de la tabla `TLocal`
--
ALTER TABLE `TLocal`
  ADD PRIMARY KEY (`idTLocal`);

--
-- Indices de la tabla `TVehiculo`
--
ALTER TABLE `TVehiculo`
  ADD PRIMARY KEY (`idTVehiculo`);

--
-- Indices de la tabla `UApoyo`
--
ALTER TABLE `UApoyo`
  ADD PRIMARY KEY (`idUApoyo`);

--
-- Indices de la tabla `VAtencion`
--
ALTER TABLE `VAtencion`
  ADD PRIMARY KEY (`idVAtencion`,`idVehiculo`),
  ADD KEY `fk_VAtencion_Vehiculo1_idx` (`idVehiculo`),
  ADD KEY `fk_VAtencion_Parte1_idx` (`idParte`);

--
-- Indices de la tabla `Vehiculo`
--
ALTER TABLE `Vehiculo`
  ADD PRIMARY KEY (`idVehiculo`),
  ADD KEY `fk_Vehiculo_TVehiculo1_idx` (`idTVehiculo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Afectado`
--
ALTER TABLE `Afectado`
  MODIFY `idAfectado` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `ApoyoA`
--
ALTER TABLE `ApoyoA`
  MODIFY `idApoyoA` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Canton`
--
ALTER TABLE `Canton`
  MODIFY `idCanton` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT de la tabla `Causa`
--
ALTER TABLE `Causa`
  MODIFY `idCausa` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `CDia`
--
ALTER TABLE `CDia`
  MODIFY `idCDia` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `CMuerte`
--
ALTER TABLE `CMuerte`
  MODIFY `idCMuerte` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `FAviso`
--
ALTER TABLE `FAviso`
  MODIFY `idFAviso` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Lesion`
--
ALTER TABLE `Lesion`
  MODIFY `idLesion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `LInicio`
--
ALTER TABLE `LInicio`
  MODIFY `idLInicio` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Locacion`
--
ALTER TABLE `Locacion`
  MODIFY `idLocacion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Parroquia`
--
ALTER TABLE `Parroquia`
  MODIFY `idParroquia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `Parte`
--
ALTER TABLE `Parte`
  MODIFY `idParte` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `PAtencion`
--
ALTER TABLE `PAtencion`
  MODIFY `idPAtencion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Personal`
--
ALTER TABLE `Personal`
  MODIFY `idPersonal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `Provincia`
--
ALTER TABLE `Provincia`
  MODIFY `idProvincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `Rango`
--
ALTER TABLE `Rango`
  MODIFY `idRango` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `Roles`
--
ALTER TABLE `Roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `Telefono`
--
ALTER TABLE `Telefono`
  MODIFY `idTelefono` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `TEmergencia`
--
ALTER TABLE `TEmergencia`
  MODIFY `idTEmergencia` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `TLesion`
--
ALTER TABLE `TLesion`
  MODIFY `idTLesion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `TLocal`
--
ALTER TABLE `TLocal`
  MODIFY `idTLocal` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `TVehiculo`
--
ALTER TABLE `TVehiculo`
  MODIFY `idTVehiculo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `UApoyo`
--
ALTER TABLE `UApoyo`
  MODIFY `idUApoyo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `VAtencion`
--
ALTER TABLE `VAtencion`
  MODIFY `idVAtencion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `Vehiculo`
--
ALTER TABLE `Vehiculo`
  MODIFY `idVehiculo` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ApoyoA`
--
ALTER TABLE `ApoyoA`
  ADD CONSTRAINT `fk_ApoyoA_Parte1` FOREIGN KEY (`idParte`) REFERENCES `Parte` (`idParte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ApoyoA_UApoyo1` FOREIGN KEY (`idUApoyo`) REFERENCES `UApoyo` (`idUApoyo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Canton`
--
ALTER TABLE `Canton`
  ADD CONSTRAINT `fk_Canton_Provincia` FOREIGN KEY (`idProvincia`) REFERENCES `Provincia` (`idProvincia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Lesion`
--
ALTER TABLE `Lesion`
  ADD CONSTRAINT `fk_Lesion_CMuerte1` FOREIGN KEY (`idCMuerte`) REFERENCES `CMuerte` (`idCMuerte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Lesion_TLesion1` FOREIGN KEY (`idTLesion`) REFERENCES `TLesion` (`idTLesion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Locacion`
--
ALTER TABLE `Locacion`
  ADD CONSTRAINT `fk_Locacion_Parroquia1` FOREIGN KEY (`idParroquia`) REFERENCES `Parroquia` (`idParroquia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Parroquia`
--
ALTER TABLE `Parroquia`
  ADD CONSTRAINT `fk_Parroquia_Canton1` FOREIGN KEY (`idCanton`) REFERENCES `Canton` (`idCanton`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Parte`
--
ALTER TABLE `Parte`
  ADD CONSTRAINT `fk_Parte_Afectado1` FOREIGN KEY (`idAfectado`) REFERENCES `Afectado` (`idAfectado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_CDia1` FOREIGN KEY (`idCDia`) REFERENCES `CDia` (`idCDia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_Causa1` FOREIGN KEY (`idCausa`) REFERENCES `Causa` (`idCausa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_FAviso1` FOREIGN KEY (`idFAviso`) REFERENCES `FAviso` (`idFAviso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_LInicio1` FOREIGN KEY (`idLInicio`) REFERENCES `LInicio` (`idLInicio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_Lesion1` FOREIGN KEY (`idLesion`) REFERENCES `Lesion` (`idLesion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_Locacion1` FOREIGN KEY (`idLocacion`) REFERENCES `Locacion` (`idLocacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_TEmergencia1` FOREIGN KEY (`idTEmergencia`) REFERENCES `TEmergencia` (`idTEmergencia`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Parte_TLocal1` FOREIGN KEY (`idTLocal`) REFERENCES `TLocal` (`idTLocal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `PAtencion`
--
ALTER TABLE `PAtencion`
  ADD CONSTRAINT `fk_PAtencion_Parte1` FOREIGN KEY (`idParte`) REFERENCES `Parte` (`idParte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PAtencion_Personal1` FOREIGN KEY (`idPersonal`) REFERENCES `Personal` (`idPersonal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Personal`
--
ALTER TABLE `Personal`
  ADD CONSTRAINT `fk_Personal_Rango1` FOREIGN KEY (`idRango`) REFERENCES `Rango` (`idRango`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Personal_Roles1` FOREIGN KEY (`idRol`) REFERENCES `Roles` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Telefono`
--
ALTER TABLE `Telefono`
  ADD CONSTRAINT `fk_Telefono_Afectado1` FOREIGN KEY (`idAfectado`) REFERENCES `Afectado` (`idAfectado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Telefono_Personal1` FOREIGN KEY (`idPersonal`) REFERENCES `Personal` (`idPersonal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `VAtencion`
--
ALTER TABLE `VAtencion`
  ADD CONSTRAINT `fk_VAtencion_Parte1` FOREIGN KEY (`idParte`) REFERENCES `Parte` (`idParte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_VAtencion_Vehiculo1` FOREIGN KEY (`idVehiculo`) REFERENCES `Vehiculo` (`idVehiculo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `Vehiculo`
--
ALTER TABLE `Vehiculo`
  ADD CONSTRAINT `fk_Vehiculo_TVehiculo1` FOREIGN KEY (`idTVehiculo`) REFERENCES `TVehiculo` (`idTVehiculo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
