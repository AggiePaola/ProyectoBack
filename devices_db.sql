-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2025 a las 05:06:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `devices_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `reviews` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '\'[]\''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `devices`
--

INSERT INTO `devices` (`id`, `nombre`, `marca`, `descripcion`, `imagen`, `precio`, `reviews`) VALUES
(1, 'iPhone 21 pro max', 'Apple', 'El ultimo modelo apple', 'iPhone_20.jpg', 6000.00, '[\"qwe\",\"Iphone muy bueno\",\"Super iphone\",\"ooo\",\"987\\n\"]'),
(2, 'Galaxy S23', 'Samsung', 'Alta gama Samsung', 'Galaxy_23.jpg', 1000.00, '\"[\\\"Galaxy un muy buen celular\\\"]\"'),
(3, 'Galaxy Ultra', 'Galaxy', 'El ultimo modelo Galaxy', 'Galaxy.jpg', 6000.00, '[\"Galaxy ultra es un muy buen celular.\",\"ooooo\"]'),
(4, 'Galaxy S23', 'Samsung', 'Alta gama Samsung', 'Samsung.jpg', 1000.00, '\"[\\\"qwe\\\"]\"'),
(5, 'iPhone 199', 'Apple', 'Último modelo Apple', 'iPhone_16.jpg', 5000.00, '\"[]\"'),
(6, 'Alcatel 6', 'Alcatel', 'Modelo 2023', 'Alcatel_Pro_6.jpg', 500.00, '\"[]\"'),
(7, 'Xiaomi pro 8', 'Xiami', 'Modelo 2029', 'Xiaomi_Pro_8.jpg', 1300.00, '[]'),
(8, 'oppo', 'Xiaomi', 'Penultimo modelo de Oppo', 'oppo.jpg', 900.00, '\"[]\"'),
(9, 'Galaxy S24 Ultra', 'Galaxy', 'Último modelo de Galaxy', 'Galaxy_S24_ultra.jpg', 1500.00, '[]'),
(10, 'iPhone 21', 'Apple', 'Último modelo Apple pro max', 'iPhone_20.jpg', 5000.00, '[\"qwe\",\"Es un super iphone\"]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login_db`
--

CREATE TABLE `login_db` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Contrasena` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login_db`
--

INSERT INTO `login_db` (`Id`, `Usuario`, `Contrasena`) VALUES
(1, '', ''),
(2, 'angie@gmail.com', '12345'),
(3, '', ''),
(4, 'angie@gmail.com', '12345'),
(5, '', ''),
(7, '', ''),
(8, 'rocha@gmail.com', '12345'),
(9, '', ''),
(10, 'william@hotmail.com', '12345'),
(11, '', ''),
(12, 'paola@gmail.com', 'angie'),
(13, '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `login_db`
--
ALTER TABLE `login_db`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `login_db`
--
ALTER TABLE `login_db`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
