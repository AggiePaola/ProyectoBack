-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-09-2025 a las 06:05:51
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
(1, 'iPhone 21 pro max', 'Apple', 'El ultimo modelo apple', 'iPhone_20.jpg', 6000.00, '[\"qwe\",\"Iphone muy bueno\",\"Super iphone\"]'),
(2, 'Galaxy S23', 'Samsung', 'Alta gama Samsung', 'Galaxy_23.jpg', 1000.00, '\"[\\\"Galaxy un muy buen celular\\\"]\"'),
(3, 'Galaxy Ultra', 'Galaxy', 'El ultimo modelo apple', 'Galaxy.jpg', 6000.00, '[\"Galaxy ultra es un muy buen celular.\"]'),
(4, 'Galaxy S23', 'Samsung', 'Alta gama Samsung', 'Samsung.jpg', 1000.00, '\"[\\\"qwe\\\"]\"'),
(5, 'iPhone 16', 'Apple', 'Último modelo Apple', 'iPhone_16.jpg', 5000.00, '\"[]\"'),
(6, 'Alcatel 6', 'Alcatel', 'Modelo 2023', 'Alcatel_Pro_6.jpg', 500.00, '\"[]\"'),
(7, 'Xiaomi pro 8', 'Xiami', 'Modelo 2029', 'Xiaomi_Pro_8.jpg', 1300.00, '[]'),
(8, 'oppo', 'Xiaomi', 'Penultimo modelo de Oppo', 'oppo.jpg', 900.00, '\"[]\"'),
(9, 'Galaxy S24 Ultra', 'Galaxy', 'Último modelo de Galaxy', 'Galaxy_S24_ultra.jpg', 1500.00, '[]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
