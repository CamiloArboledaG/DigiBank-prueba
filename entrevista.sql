-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2022 a las 18:41:16
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `entrevista`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(200) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'Casa'),
(2, 'Apartamento'),
(3, 'Campo'),
(4, 'Autos'),
(5, 'Camionetas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deposito`
--

CREATE TABLE `deposito` (
  `id` int(200) NOT NULL,
  `moneda` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `deposito`
--

INSERT INTO `deposito` (`id`, `moneda`) VALUES
(1, 'Euro'),
(2, 'Dólar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `id` int(11) NOT NULL,
  `cuota_min` int(11) NOT NULL,
  `cuota_max` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prestamo`
--

INSERT INTO `prestamo` (`id`, `cuota_min`, `cuota_max`) VALUES
(1, 12, 240);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(200) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `monto_max` float NOT NULL,
  `id_tipo_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `monto_max`, `id_tipo_producto`) VALUES
(4, 'Tu casa', 10000000, 3),
(5, 'Tu apartamento', 7000000, 3),
(6, 'Tu auto YA!', 150000, 2),
(7, 'Tu camioneta hoy mismo !!!', 200000, 2),
(8, 'Caja de ahorro simple', 15000000, 1),
(9, 'Cuenta Corriente', 20000000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_categoria`
--

CREATE TABLE `producto_categoria` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_categoria`
--

INSERT INTO `producto_categoria` (`id`, `id_producto`, `id_categoria`) VALUES
(1, 4, 1),
(2, 4, 3),
(3, 7, 5),
(4, 6, 4),
(5, 5, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_deposito`
--

CREATE TABLE `producto_deposito` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_deposito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_deposito`
--

INSERT INTO `producto_deposito` (`id`, `id_producto`, `id_deposito`) VALUES
(1, 8, 2),
(2, 8, 1),
(3, 9, 2),
(4, 9, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_prestamo`
--

CREATE TABLE `producto_prestamo` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_prestamo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_prestamo`
--

INSERT INTO `producto_prestamo` (`id`, `id_producto`, `id_prestamo`) VALUES
(1, 4, 1),
(2, 7, 1),
(3, 6, 1),
(4, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_segmento`
--

CREATE TABLE `producto_segmento` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_segmento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_segmento`
--

INSERT INTO `producto_segmento` (`id`, `id_producto`, `id_segmento`) VALUES
(1, 6, 1),
(2, 6, 3),
(3, 6, 2),
(4, 7, 3),
(5, 5, 1),
(6, 4, 3),
(7, 4, 2),
(8, 9, 3),
(9, 8, 1),
(10, 8, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `segmento`
--

CREATE TABLE `segmento` (
  `id` int(200) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `segmento`
--

INSERT INTO `segmento` (`id`, `nombre`) VALUES
(1, 'Jóvenes'),
(2, 'Standard'),
(3, 'Premium');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `id` int(200) NOT NULL,
  `nombre_tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`id`, `nombre_tipo`) VALUES
(1, 'Cuentas Vista'),
(2, 'Préstamo Automotor'),
(3, 'Préstamo Hipotecario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `deposito`
--
ALTER TABLE `deposito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `id_tipo_producto` (`id_tipo_producto`);

--
-- Indices de la tabla `producto_categoria`
--
ALTER TABLE `producto_categoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_deposito` (`id_deposito`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prestamo` (`id_prestamo`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_segmento` (`id_segmento`);

--
-- Indices de la tabla `segmento`
--
ALTER TABLE `segmento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `deposito`
--
ALTER TABLE `deposito`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `producto_categoria`
--
ALTER TABLE `producto_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `segmento`
--
ALTER TABLE `segmento`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_tipo_producto`) REFERENCES `tipo_producto` (`id`);

--
-- Filtros para la tabla `producto_categoria`
--
ALTER TABLE `producto_categoria`
  ADD CONSTRAINT `producto_categoria_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `producto_categoria_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

--
-- Filtros para la tabla `producto_deposito`
--
ALTER TABLE `producto_deposito`
  ADD CONSTRAINT `producto_deposito_ibfk_1` FOREIGN KEY (`id_deposito`) REFERENCES `deposito` (`id`),
  ADD CONSTRAINT `producto_deposito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `producto_prestamo`
--
ALTER TABLE `producto_prestamo`
  ADD CONSTRAINT `producto_prestamo_ibfk_1` FOREIGN KEY (`id_prestamo`) REFERENCES `prestamo` (`id`),
  ADD CONSTRAINT `producto_prestamo_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `producto_segmento`
--
ALTER TABLE `producto_segmento`
  ADD CONSTRAINT `producto_segmento_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `producto_segmento_ibfk_2` FOREIGN KEY (`id_segmento`) REFERENCES `segmento` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
