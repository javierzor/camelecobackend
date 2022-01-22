-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-01-2022 a las 22:44:52
-- Versión del servidor: 5.7.37
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cameleco_cablesapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodegas`
--

CREATE TABLE `bodegas` (
  `id_inutilizado` int(3) NOT NULL,
  `nombre_bodega` varchar(222) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bodegas`
--

INSERT INTO `bodegas` (`id_inutilizado`, `nombre_bodega`) VALUES
(1, 'Bodega Principal'),
(2, 'Bodega Nro dos'),
(3, 'Bodega Nro tres');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega_detalles`
--

CREATE TABLE `bodega_detalles` (
  `id_inutilizado` int(222) NOT NULL,
  `id_bodega` int(222) DEFAULT NULL,
  `bodega_nombre` varchar(222) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso_material`
--

CREATE TABLE `ingreso_material` (
  `id` int(8) UNSIGNED ZEROFILL NOT NULL,
  `bloqueado` varchar(111) NOT NULL DEFAULT 'no',
  `referencia` varchar(111) DEFAULT NULL,
  `producto` varchar(111) DEFAULT NULL,
  `descripcion` varchar(111) DEFAULT NULL,
  `carreteorrollo` varchar(111) DEFAULT NULL,
  `numerodenotadeentrada` varchar(111) DEFAULT NULL,
  `metrosencarrete` varchar(111) DEFAULT NULL,
  `bodega` varchar(111) DEFAULT 'No Definida',
  `fecha_autogenerada` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre_user` varchar(111) DEFAULT NULL,
  `id_user` varchar(111) DEFAULT NULL,
  `observacion` varchar(111) DEFAULT 'Sin Observacion'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingreso_material`
--

INSERT INTO `ingreso_material` (`id`, `bloqueado`, `referencia`, `producto`, `descripcion`, `carreteorrollo`, `numerodenotadeentrada`, `metrosencarrete`, `bodega`, `fecha_autogenerada`, `nombre_user`, `id_user`, `observacion`) VALUES
(00000012, 'si', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '23', '12', 'Bodega Principal', '2021-11-26 23:03:43', 'Javier A. Progr.', '32', 'prueba 0105'),
(00000013, 'si', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '23', '323', 'Bodega Principal', '2021-11-26 23:06:00', 'Javier A. Progr.', '32', NULL),
(00000014, 'no', 'CAS80004', '003-0207-000102', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave', 'Carrete', '343', '323', 'Bodega Principal', '2021-11-26 23:10:07', 'Javier A. Progr.', '32', 'Sin Observacion'),
(00000015, 'si', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '2323', '231', 'Bodega Nro dos', '2021-11-26 23:11:22', 'Javier A. Progr.', '32', NULL),
(00000016, 'si', 'CAS80002-0', '003-0207-000105', 'Cable aluminio THHW 2/0 AWG S 8000 Apar/Alcave', 'Carrete', '1', '23', 'Bodega Principal', '2021-11-27 05:35:08', 'Javier Aguilarte', '32', 'asdfghjkl'),
(00000017, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-28 13:21:47', NULL, NULL, 'Sin Observacion'),
(00000018, 'no', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '111', '11111', 'Bodega Principal', '2021-11-28 13:23:16', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000019, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 22:12:27', NULL, NULL, 'Sin Observacion'),
(00000020, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 22:12:55', NULL, NULL, 'Sin Observacion'),
(00000021, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 22:14:31', NULL, NULL, 'Sin Observacion'),
(00000022, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '45645', '4576', 'Bodega Principal', '2021-11-29 22:17:45', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000023, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '20450', '200', 'Bodega Principal', '2021-12-08 17:19:08', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000024, 'no', 'REF-5876', '003-0209-000414', 'Cable Ecologico Aluminio 2/0 35KV Certificado', 'Rollo', '17388', '173', 'Bodega Principal', '2021-12-08 17:19:28', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000025, 'no', 'REF-713', '003-0209-000404', 'Cable Ecologico Aluminio 2/0 15KV Certificado', 'Carrete', '04052021', '400', 'Bodega Principal', '2021-12-08 21:21:39', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000026, 'no', '32352320101C', '003-0214-000397', 'Cable aluminio THW 2 AWG S 8000 Nexans', 'Carrete', '123', '13', 'Bodega Principal', '2021-12-09 05:22:08', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000027, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Rollo', '258', '20', 'Bodega Principal', '2021-12-20 16:01:41', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000028, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-20 16:07:46', NULL, NULL, 'Sin Observacion'),
(00000029, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '22222', '1000', 'Bodega Principal', '2021-12-20 16:08:35', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000030, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '777', '777', 'Bodega Principal', '2021-12-21 15:07:06', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000031, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '888', '888', 'Bodega Principal', '2021-12-21 15:10:12', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000032, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 22:49:03', NULL, NULL, 'Sin Observacion'),
(00000033, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 22:49:26', NULL, NULL, 'Sin Observacion'),
(00000034, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 22:49:41', NULL, NULL, 'Sin Observacion'),
(00000035, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 22:49:42', NULL, NULL, 'Sin Observacion'),
(00000036, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 22:55:34', NULL, NULL, 'Sin Observacion'),
(00000037, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-30 23:02:14', NULL, NULL, 'Sin Observacion'),
(00000038, 'no', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '33', '33', 'Bodega Principal', '2021-12-30 23:09:10', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000039, 'no', 'REF-5758', '003-0710-000132', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Carrete', '232', '23', 'Bodega Principal', '2021-12-30 23:11:16', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000040, 'no', 'REF-2581', '003-0801-000022', 'Cable acometida aluminio 2x6+6 Apar', 'Carrete', '232', '34', 'Bodega Principal', '2022-01-04 02:20:46', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000041, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '23', '3', 'Bodega Principal', '2022-01-04 02:22:31', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000042, 'no', 'CAS80004', '003-0207-000102', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave', 'Carrete', '23', '23', 'Bodega Principal', '2022-01-04 04:39:39', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000043, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '7878', '7878', 'Bodega Principal', '2022-01-04 14:45:37', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000044, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '2022', '2022', 'Bodega Principal', '2022-01-05 16:02:04', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000045, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Rollo', '9876', '9876', 'Bodega Principal', '2022-01-05 20:53:54', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000046, 'si', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '6677', '6677', 'Bodega Principal', '2022-01-05 21:42:35', 'Javier Aguilarte', '32', NULL),
(00000047, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '1', '1', 'Bodega Principal', '2022-01-05 23:31:47', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000048, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '4458509485', '4444', 'Bodega Principal', '2022-01-06 02:18:29', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000049, 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-01-06 02:19:07', NULL, NULL, 'Sin Observacion'),
(00000050, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '345435', '7643', 'Bodega Principal', '2022-01-06 02:23:36', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000051, 'no', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '234', '234', 'Bodega Principal', '2022-01-06 14:39:44', 'Javier Aguilarte', '32', 'Sin Observacion'),
(00000052, 'si', 'REF-5757', '003-0710-000131', 'Cable MT 120 mm aluminio 15 kv Condumex', 'Carrete', '888', '888', 'Bodega Principal', '2022-01-06 16:03:36', 'Javier Aguilarte', '32', 'fff');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_detalles`
--

CREATE TABLE `permisos_detalles` (
  `id_permiso` int(1) NOT NULL,
  `permiso_nombre` varchar(111) DEFAULT NULL,
  `permiso_descripcion` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `permisos_detalles`
--

INSERT INTO `permisos_detalles` (`id_permiso`, `permiso_nombre`, `permiso_descripcion`) VALUES
(1, 'Ingreso de material', 'Para ingresar los carretes e imprimir las etiquetas de código de barra'),
(2, 'Consulta de materiales', 'Para ver la disponibilidad de referencias en su carrete y que metraje tiene ese carrete (solo consulta)'),
(3, 'Ordenar Fraccionamientos', 'Para realizar la orden de corte.'),
(4, 'Bloqueo de ordenes de Fraccionamiento', 'Para que un supervisor el cual puede bloquear/suspender una orden de fraccionamiento'),
(5, 'Bloqueo Ingreso de material', 'Puede bloquear/suspender una orden de fraccionamiento'),
(6, 'Fraccionamiento de material', 'Persona que realiza el corte en bodega'),
(7, 'Consulta de Auditoria', 'Persona que puede ver todas las operaciones realizadas por los que ordenan corte y cortan el cable conductor de energía'),
(8, 'Creacion de usuarios', 'Se crean nuevos usuarios'),
(9, 'Creación de referencias', 'Se pueden crear nuevas referencias de productos por archivo plano'),
(10, 'Cambio de Carrete a chipa', 'Cuando un carrete contiene poco material, un operario de fraccionamiento determina vaciarlo y colocarlo en un tramo /rollo/chipa'),
(11, 'Entrega de material', 'Opción del operraio de entregas que alista y/o entrega los carretes o chipas a los clientes'),
(12, 'Colocar Novedades', 'Opcion en que el operario de entraga o supervisor coloca una novedad y bloquea temporalmente la entrega de un producto'),
(13, 'Atender Novedades', 'El supervisor ve y da solución a la novedad reportada'),
(14, 'Creacion de roles', 'Se crean los roles que serán asignados a los usuarios del sistema.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_inutilizado` int(11) NOT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `referencia` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_inutilizado`, `producto`, `referencia`, `descripcion`) VALUES
(1, '003-0710-000131', 'REF-5757', 'Cable MT 120 mm aluminio 15 kv Condumex'),
(2, '003-0710-000132', 'REF-5758', 'Cable MT 185 mm aluminio 15 kv 100% Condumex'),
(3, '003-0207-000101', 'CAS80006', 'Cable aluminio THHW 6 AWG S 8000 Apar/Alcave'),
(4, '003-0207-000102', 'CAS80004', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave'),
(5, '003-0207-000103', 'CAS80002', 'Cable aluminio THHW 2 AWG S 8000 Apar/Alcave'),
(6, '003-0207-000104', 'CAS80001-0', 'Cable aluminio THHW 1/0 AWG S 8000 Apar/Alcave'),
(7, '003-0207-000105', 'CAS80002-0', 'Cable aluminio THHW 2/0 AWG S 8000 Apar/Alcave'),
(8, '003-0207-000107', 'CAS80004-0', 'Cable aluminio THHW 4/0 AWG S 8000 Apar/Alcave'),
(9, '003-0207-000108', 'CAS8000250', 'Cable aluminio THHW 250 Kcmil S 8000 Apar/Alcave'),
(10, '003-0207-000109', 'CAS8000350', 'Cable aluminio THHW 350 Kcmil S 8000 Apar/Alcave'),
(11, '003-0207-000111', 'CAS8000500', 'Cable aluminio THHW 500 Kcmil S 8000 Apar/Alcave'),
(12, '003-0209-000402', 'REF-711', 'Cable Ecologico Aluminio 2 15KV Certificado'),
(13, '003-0209-000403', 'REF-712', 'Cable Ecologico Aluminio 1/0 15KV Certificado'),
(14, '003-0209-000404', 'REF-713', 'Cable Ecologico Aluminio 2/0 15KV Certificado'),
(15, '003-0209-000405', 'REF-714', 'Cable Ecologico Aluminio 4/0 15 kV certificado'),
(16, '003-0209-000413', 'REF-5875', 'Cable Ecologico Aluminio 1/0 35KV Certificado'),
(17, '003-0209-000414', 'REF-5876', 'Cable Ecologico Aluminio 2/0 35KV Certificado'),
(18, '003-0209-000415', 'REF-5877', 'Cable Ecologico Aluminio 4/0 35KV Certificado'),
(19, '003-0209-000416', 'REF-5878', 'Cable Ecologico Aluminio 266.8KCMIL 35KV Certificado'),
(20, '003-0710-000029', 'REF-5665', 'Cable MT 70 mm aluminio 15 kv 100% Apar'),
(21, '003-0710-000030', 'REF-4312', 'Cable MT 95 mm aluminio 15 kv 100% Apar '),
(22, '003-0710-000031', 'REF-4313', 'Cable MT 120 mm aluminio 15 kv Apar'),
(23, '003-0710-000032', 'REF-4465', 'Cable MT 185 mm aluminio 15 kv 100% Apar'),
(24, '003-0710-000033', 'REF-4466', 'Cable MT 240mm aluminio 15 kv 100% Apar'),
(25, '003-0801-000020', 'REF-2580', 'Cable acometida Aluminio 6+6 Apar'),
(26, '003-0801-000022', 'REF-2581', 'Cable acometida aluminio 2x6+6 Apar'),
(27, '003-0803-000001', 'REF-2784', 'Cable Triplex aluminio 2x4+4 AAAC Neutro desnudo Apar'),
(28, '003-0803-000002', 'REF-2785', 'Cable Triplex aluminio 2x2+2 AAAC Neutro desnudo Apar'),
(29, '003-0803-000003', 'REF-2786', 'Cable Triplex  aluminio 2x1/0+1/0 AAAC Neutro desnudo Apar'),
(30, '003-0803-000004', 'REF-5659', 'Cable Triplex aluminio 2x2/0+2/0 AAAC Neutro desnudo Apar'),
(31, '003-0803-000005', 'REF-5660', 'Cable Triplex  aluminio 2x4/0+4/0 AAAC Neutro desnudo Apar'),
(32, '003-0803-000010', 'REF-5661', 'Cable cuadruplex aluminio 3x35+50 mm Apar'),
(33, '003-0803-000011', 'REF-5662', 'Cable cuadruplex aluminio 3x70+50 mm Apar'),
(34, '003-0803-000012', 'REF-5663', 'Cable cuadruplex aluminio 3x95+50 mm Apar'),
(35, '003-0712-000004', 'REF-4519', 'Cable MT 185 mm aluminio 15 kv 100% Centelsa'),
(36, '003-0712-000005', '----.----', 'Cable MT 240 mm aluminio 15 kv 100% Centelsa'),
(37, '003-0414-000117', 'C312FREEHAL TRIPLEX B/R/V', 'Cable CU Triplex FREEHAL 3x12 AWG F. Roja Conalcables'),
(38, '003-0414-000118', 'C312FREEHAL TRIPLEXB/A/V ', 'Cable CU Triplex FREEHAL 3x12 AWG F. Azul Conalcables'),
(39, '003-0601-000249', 'CS6PENG', 'Cable soldador 6 AWG Negro Conalcables'),
(40, '003-0601-000250', 'CS4PENG', 'Cable soldador 4 AWG Negro Conalcables'),
(41, '003-0601-000251', 'CS2PENG', 'Cable soldador 2 AWG Negro Conalcables'),
(42, '003-0601-000252', 'CS1/0PENG', 'Cable soldador 1/0 AWG Negro Conalcables'),
(43, '003-0601-000253', 'CS2/0PENG', 'Cable soldador 2/0 AWG Negro Conalcables'),
(44, '003-0601-000254', 'CS3/0PENG', 'Cable soldador 3/0 AWG Negro Conalcables'),
(45, '003-0601-000255', 'CS4/0PENG', 'Cable soldador 4/0 AWG Negro Conalcables'),
(46, '003-0601-000256', 'CS6PEVA', 'Cable soldador 6 AWG Verde/Amarillo Conalcables'),
(47, '003-0601-000257', 'CS4PEVA', 'Cable soldador 4 AWG Verde/Amarillo Conalcables'),
(48, '003-0601-000258', 'CS2PEVA', 'Cable soldador 2 AWG Verde/Amarillo Conalcables'),
(49, '003-0601-000259', 'CS1/0PEVA', 'Cable soldador 1/0 AWG Verde/Amarillo Conalcables'),
(50, '003-0601-000260', 'CS2/0PEVA', 'Cable soldador 2/0 AWG Verde/Amarillo Conalcables'),
(51, '003-0601-000263', 'CS250PENG', 'Cable soldador 250 kcmil AWG Negro Conalcables'),
(52, '003-0601-000265', 'REF-4314', 'Cable soldador 500 kcmil AWG Negro Conalcables'),
(53, '003-0601-000314', 'CE218ST', 'Cable encauchetado 2x18 AWG conalcables'),
(54, '003-0601-000315', 'CE216ST', 'Cable encauchetado 2x16 AWG conalcables'),
(55, '003-0601-000316', 'CE214ST', 'Cable encauchetado 2x14 AWG conalcables'),
(56, '003-0601-000317', 'CE212ST', 'Cable encauchetado 2x12 AWG conalcables'),
(57, '003-0601-000318', 'CE210ST', 'Cable encauchetado 2x10 AWG conalcables'),
(58, '003-0601-000319', 'CE28ST', 'Cable encauchetado 2x8 AWG conalcables'),
(59, '003-0601-000320', 'CE318ST', 'Cable encauchetado 3x18 AWG conalcables'),
(60, '003-0601-000321', 'CE316ST', 'Cable encauchetado 3x16 AWG Conalcables'),
(61, '003-0601-000322', 'CE314ST', 'Cable encauchetado 3x14 AWG Conalcables '),
(62, '003-0601-000323', 'CE312ST', 'Cable encauchetado 3x12 AWG Conalcables'),
(63, '003-0601-000324', 'CE310ST', 'Cable encauchetado 3x10 AWG Conalcables'),
(64, '003-0601-000325', 'CE38ST', 'Cable encauchetado 3x8 AWG conalcables'),
(65, '003-0601-000329', 'CE418ST', 'Cable encauchetado 4x18 AWG Conalcables'),
(66, '003-0601-000330', 'CE416ST', 'Cable encauchetado 4x16 AWG conalcables/Viakon'),
(67, '003-0601-000331', 'CE414ST', 'Cable encauchetado 4x14 AWG Conalcables/Procables'),
(68, '003-0601-000332', 'CE412ST', 'Cable encauchetado 4x12 AWG conalcables'),
(69, '003-0601-000333', 'CE410ST', 'Cable encauchetado 4x10 AWG conalcables'),
(70, '003-0601-000334', 'CE48ST', 'Cable encauchetado 4x8 AWG conalcables'),
(71, '003-0601-000338', 'CE518ST', 'Cable Encauchetado 5x18 Conalcables'),
(72, '003-0601-000339', 'CE516ST', 'Cable Encauchetado 5x16 Conalcables'),
(73, '003-0601-000340', 'CE514ST', 'Cable Encauchetado 5x14 Conalcables'),
(74, '003-0601-000341', 'CE512ST', 'Cable Encauchetado 5x12 Conalcables '),
(75, '003-0601-000342', 'CE510ST', 'Cable Encauchetado 5x10 Conalcables '),
(76, '003-0601-000343', 'CE58ST', 'Cable Encauchetado 5x8 Conalcables '),
(77, '003-0601-000370', 'CS6PEAZ', 'Cable soldador 6 AWG Azul Conalcables'),
(78, '003-0114-000350', '32404161601C', 'Cable acometida Aluminio 6+6 Conducol'),
(79, '003-0114-000351', '32403283201C', 'Cable acometida Aluminio 2x6+6 Conducol'),
(80, '003-0309-000381', '32480010000C', 'Cable ACSR 4 AWG Certificado Retie'),
(81, '003-0309-000382', '32480025000C', 'Cable ACSR 2 AWG Nexans / Conducol'),
(82, '003-0309-000383', '32480035000C', 'Cable ACSR 1/0 AWG Certificado Retie'),
(83, '003-0309-000384', '32480040000C', 'Cable ACSR 2/0 AWG Certificado Retie'),
(84, '003-0309-000386', '32480055000C', 'Cable ACSR 4/0 AWG Certificado Retie'),
(85, '003-0309-000387', '32480070000C', 'Cable ACSR 266.8 kcmil '),
(86, '003-0312-000100', 'REF-5657', 'Alambron de aluminio 8 mm '),
(87, '003-0814-000415', '32432584100C', 'Cable cuadruplex Al 3x1/0+123.3kcmil Facelec / Procables'),
(88, '003-0814-000416', '32436802400C', 'Cable cuadruplex Al 3x35+50 mm Procables'),
(89, '003-0814-000417', '10011293', 'Cable cuadruplex Al 3x70+50 mm Nexans '),
(90, '003-0814-000418', '32436832400C', 'Cable cuadruplex Al 3x95+50 mm Nexans '),
(91, '003-0814-000422', '32431589100C', 'Cable triplex 2x4+4 AWG ACSR aislado Nexans'),
(92, '003-0814-000424', '32431690000C', 'Cable triplex 2x2+2 AWG ACSR aislado Nexans/Conducol '),
(93, '003-0814-000425', '32431691000C', 'Cable triplex 2x1/0+1/0 ACSR aislado Nexans/Conducol'),
(94, '003-0814-000427', '32431745100C', 'Cable triplex 2x2/0+2/0 ACSR aislado Conducol '),
(95, '003-0814-000429', 'REF-738', 'Cable triplex  2x4/0+4/0 ACSR aislado Conducol'),
(96, '003-0110-000100', '10012108', 'Cable Acometida 8+8 Antifraude Nexans'),
(97, '003-0110-000101', '10013378', 'Cable Acometida 2x8+8 Antifraude Nexans'),
(98, '003-0110-000102', '10012289', 'Cable Acometida 3x8+10 Trebol Nexans/Centelsa'),
(99, '003-0110-000103', '10011221', 'Cable Acometida 3x8+8 Antifraude Nexans'),
(100, '003-0110-000104', '10011189', 'Cable Acometida 3x6+8 Trebol Nexans/Centelsa '),
(101, '003-0110-000105', '10011188', 'Cable Acometida 3x4+6 Trebol Nexans/Centelsa '),
(102, '003-0110-000106', '10011187', 'Cable Acometida 3x2+4 Trebol Nexans'),
(103, '003-0214-000395', 'REF-704', 'Cable aluminio THW 6 AWG S 8000 Nexans / Conducol'),
(104, '003-0214-000396', 'REF-705', 'Cable aluminio THW 4 AWG S 8000 Nexans/Conducol'),
(105, '003-0214-000397', '32352320101C', 'Cable aluminio THW 2 AWG S 8000 Nexans '),
(106, '003-0214-000398', '32352340101C', 'Cable aluminio THHW 1/0 AWG S 8000 Nexans/Cd'),
(107, '003-0214-000399', '32352350101C', 'Cable aluminio THHW 2/0 AWG S 8000 Nexans/Conducol'),
(108, '003-0214-000401', '32352370101C', 'Cable aluminio THW 4/0 AWG S 8000 Nexans/Conducol'),
(109, '003-0214-000402', '32352380101C', 'Cable aluminio THHW 250 Kcmil S 8000 Nexans'),
(110, '003-0214-000403', '32352400101C', 'Cable aluminio THHW 350 Kcmil S 8000 Condumex '),
(111, '003-0214-000405', '32352430101C', 'Cable aluminio THHW 500 kcmil S 8000 Nexans'),
(112, '003-0214-000428', 'REF-4342', 'Cable Aluminio FREETOX 6 AWG Nexans'),
(113, '003-0214-000429', 'REF-4343', 'Cable Aluminio FREETOX 4 AWG Nexans '),
(114, '003-0214-000430', 'REF-4415', 'Cable Aluminio FREETOX 2 AWG Nexans '),
(115, '003-0214-000432', 'REF-4417', 'Cable Aluminio FREETOX 2/0 AWG Nexans'),
(116, '003-0214-000433', 'REF-4418', 'Cable Aluminio FREETOX 1/0 AWG Nexans'),
(117, '003-0214-000434', 'REF-4419', 'Cable Aluminio FREETOX 4/0 AWG Nexans'),
(118, '003-0214-000435', 'REF-4420', 'Cable Aluminio FREETOX 250 Kcmil Nexans'),
(119, '003-0214-000437', 'REF-4422', 'Cable Aluminio FREETOX 350 Kcmil Nexans'),
(120, '003-0214-000439', 'REF-4424', 'Cable Aluminio FREETOX 500 Kcmil Nexans'),
(121, '003-0410-000118', 'REF-4046', 'Cable CU THHN triplex 3x12 AWG f. Roja Nexans'),
(122, '003-0410-000119', 'REF-4047', 'Cable CU THHN triplex 3x12 AWG f. Azul Nexans'),
(123, '003-0410-000126', 'REF-4086', 'Cable CU THHN 8 AWG Amarillo Nexans'),
(124, '003-0410-000127', 'REF-4085', 'Cable CU THHN 8 AWG Azul Nexans'),
(125, '003-0410-000128', 'REF-4084', 'Cable CU THHN 8 AWG Rojo Nexans'),
(126, '003-0410-000129', 'REF-4083', 'Cable CU THHN 8 AWG Blanco Nexans'),
(127, '003-0410-000130', 'REF-4049', 'Cable CU THHN 8 AWG Verde Nexans'),
(128, '003-0410-000131', 'REF-440', 'Cable CU THHN 8 AWG Negro Nexans'),
(129, '003-0410-000132', 'REF-441', 'Cable CU THHN 6 AWG Amarillo Nexans'),
(130, '003-0410-000133', 'REF-442', 'Cable CU THHN 6 AWG Azul Nexans'),
(131, '003-0410-000134', 'REF-443', 'Cable CU THHN 6 AWG Rojo Nexans'),
(132, '003-0410-000135', 'REF-444', 'Cable CU THHN 6 AWG Blanco Nexans'),
(133, '003-0410-000136', 'REF-445', 'Cable CU THHN 6 AWG Verde Nexans'),
(134, '003-0410-000137', 'REF-446', 'Cable CU THHN 6 AWG Negro Nexans'),
(135, '003-0410-000138', 'REF-447', 'Cable CU THHN 4 AWG Negro  Nexans'),
(136, '003-0410-000139', 'REF-448', 'Cable CU THHN 2 AWG Negro Nexans'),
(137, '003-0410-000140', 'REF-449', 'Cable CU THHN 1/0 AWG Negro Nexans'),
(138, '003-0410-000141', 'REF-450', 'Cable CU THHN 2/0 AWG Negro Nexans'),
(139, '003-0410-000142', 'REF-451', 'Cable CU THHN 3/0 AWG Negro Nexans'),
(140, '003-0410-000143', 'REF-4039', 'Cable CU THHN 4/0 AWG Negro Nexans/Pro'),
(141, '003-0410-000144', 'REF-4040', 'Cable CU THHN 250 Kcmil Negro Nexans'),
(142, '003-0410-000145', 'REF-4041', 'Cable CU THHN 300 Kcmil Negro Nexans'),
(143, '003-0410-000146', 'REF-4042', 'Cable CU THHN 350 Kcmil Negro Nexans'),
(144, '003-0410-000147', 'REF-4043', 'Cable CU THHN 400 Kcmil Negro Nexans'),
(145, '003-0410-000148', 'REF-4044', 'Cable CU THHN 500 Kcmil Negro Nexans'),
(146, '003-0410-000218', 'REF-5578', 'Cable CU triplex FREETOX 3x12 AWG f. Azul Nexans'),
(147, '003-0410-000219', 'REF-5579', 'Cable CU triplex  FREETOX 3x12 AWG f. roja Nexans'),
(148, '003-0410-000226', 'REF-5586', 'Cable CU FREETOX 8 AWG Amarillo Nexans'),
(149, '003-0410-000227', 'REF-5587', 'Cable CU FREETOX 8 AWG Azul Nexans'),
(150, '003-0410-000228', 'REF-5588', 'Cable CU FREETOX 8 AWG Rojo Nexans'),
(151, '003-0410-000229', 'REF-5589', 'Cable CU FREETOX 8 AWG Blanco Nexans'),
(152, '003-0410-000230', 'REF-5590', 'Cable CU FREETOX 8 AWG Verde Nexans'),
(153, '003-0410-000231', '10033629', 'Cable CU FREETOX 8 AWG Negro Nexans'),
(154, '003-0410-000232', 'REF-5592', 'Cable CU FREETOX 6 AWG Amarillo Nexans'),
(155, '003-0410-000233', 'REF-5593', 'Cable CU FREETOX 6 AWG Azul Nexans'),
(156, '003-0410-000234', 'REF-5594', 'Cable CU FREETOX 6 AWG Rojo Nexans'),
(157, '003-0410-000235', 'REF-5595', 'Cable CU FREETOX 6 AWG Blanco Nexans'),
(158, '003-0410-000236', 'REF-5596', 'Cable CU FREETOX 6 AWG Verde Nexans'),
(159, '003-0410-000237', 'REF-5597', 'Cable CU FREETOX 6 AWG Negro Nexans'),
(160, '003-0410-000238', '10034359', 'Cable CU FREETOX 4 Negro AWG Nexans'),
(161, '003-0410-000239', '10034360', 'Cable CU FREETOX 2 Negro AWG Nexans'),
(162, '003-0410-000240', '10033628', 'Cable CU FREETOX 1/0 Negro AWG Nexans'),
(163, '003-0410-000241', '10034361', 'Cable CU FREETOX 2/0 Negro AWG Nexans'),
(164, '003-0410-000242', '10034362', 'Cable CU FREETOX 3/0 AWG Negro Nexans'),
(165, '003-0410-000243', '10034393', 'Cable CU FREETOX 4/0 AWG Negro Nexans'),
(166, '003-0410-000244', '10034398', 'Cable CU FREETOX 250 MCM AWG Nexans'),
(167, '003-0410-000245', '10034394', 'Cable CU FREETOX 300 MCM AWG Negro Nexans'),
(168, '003-0410-000246', '10033627', 'Cable CU FREETOX 350 MCM AWG Negro Nexans/Pro'),
(169, '003-0410-000247', '10034368', 'Cable CU FREETOX 400 MCM AWG Negro Nexans'),
(170, '003-0410-000248', '10034395', 'Cable CU FREETOX 500 MCM AWG Negro Nexans'),
(171, '003-0510-000200', '31321018000C', 'Cable Cobre Desnudo 8 AWG Nexans '),
(172, '003-0510-000201', '31321020000C', 'Cable Cobre Desnudo 6 AWG Nexans '),
(173, '003-0510-000202', 'REF-5762', 'Cable Cobre Desnudo 4 AWG Nexans '),
(174, '003-0510-000203', '31321024000C', 'Cable Cobre Desnudo 2 AWG Nexans '),
(175, '003-0510-000204', '31321026000C', 'Cable Cobre Desnudo 1/0 AWG Nexans '),
(176, '003-0510-000205', '31321028000C', 'Cable Cobre Desnudo 2/0 AWG Nexans'),
(177, '003-0510-000206', 'REF-5766', 'Cable Cobre Desnudo 3/0 AWG Nexans'),
(178, '003-0510-000207', '31319011000C', 'Cable cobre desnudo 4/0 AWG Nexans '),
(179, '003-0610-000200', 'REF-5768', 'Cable ExtraFlex CU 2/0 AWG Nexans'),
(180, '003-0610-000202', 'REF-5769', 'Cable ExtraFlex CU 4/0 AWG Nexans '),
(181, '003-0610-000203', 'REF-5770', 'Cable Extraflex CU 250 Kcmil Nexans '),
(182, '003-0610-000205', 'REF-5771', 'Cable ExtraFlex CU 350 Kcmil Nexans '),
(183, '003-0610-000207', 'REF-5772', 'Cable ExtraFlex CU 500 Kcmil Nexans '),
(184, '003-0610-000298', 'REF-5882', 'Cable encauchetado 2x16 AWG Nexans'),
(185, '003-0610-000299', 'REF-5881', 'Cable encauchetado 2x14 AWG Nexans'),
(186, '003-0610-000300', 'REF-5880', 'Cable encauchetado 2x12 AWG Nexans'),
(187, '003-0610-000307', 'REF-5885', 'Cable encauchetado 3x16 AWG Nexans'),
(188, '003-0610-000308', 'REF-5884', 'Cable encauchetado 3x14 AWG Nexans'),
(189, '003-0610-000309', 'REF-5883', 'Cable encauchetado 3x12 AWG Nexans'),
(190, '003-0610-000312', 'REF-5773', 'Cable encauchetado 3x6 AWG Nexans'),
(191, '003-0610-000322', 'REF-5774', 'Cable encauchetado 4x6 AWG Nexans'),
(192, '003-0610-000323', 'REF-5775', 'Cable encauchetado 4x4 AWG Nexans'),
(193, '003-0610-000324', 'REF-5776', 'Cable encauchetado 4x2 AWG Nexans/Centelsa'),
(194, '003-0714-000440', 'REF-749', 'Cable xlpe 2/0 AWG CU 15kv 133% p/cinta procables'),
(195, '003-0916-000457', 'REF-1617', '\"Cable acero 1/2\"\" SGX\"'),
(196, '003-0917-000458', '5406400043', '\"Cable acero 1/4\"\" SGX \"'),
(197, '003-0917-000459', '5406400034', '\"Cable acero 5/16\"\" SGX \"'),
(198, '003-0917-000460', '5406400035', '\"Cable acero 3/8\"\" SGX\"'),
(199, '003-0917-000461', '5406300026', '\"Cable Acero 7/16\"\" SGX\"');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id_de_pruebas` int(111) NOT NULL,
  `prueba` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id_de_pruebas`, `prueba`) VALUES
(1, 'paso'),
(2, 'bien');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_detalles`
--

CREATE TABLE `rol_detalles` (
  `id_rol` int(111) NOT NULL,
  `nombre_rol` varchar(200) DEFAULT NULL,
  `rol_descripcion` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol_detalles`
--

INSERT INTO `rol_detalles` (`id_rol`, `nombre_rol`, `rol_descripcion`) VALUES
(19, 'Ingreso de Material', 'Persona de almacen'),
(2, 'Consulta Comercial', 'Ejecutivo Comercial'),
(3, 'Ordenador de fraccionamiento', 'Ordeneadr de fraccionamiento'),
(4, 'Auditor-Supervisor', 'Auditor-Supervisor'),
(5, 'Administrador', 'Administrador'),
(6, 'Entregas', 'Entregas'),
(7, 'Fraccionador', 'Fraccionador'),
(20, 'Comercial Completo', 'puede consultar y solicitar fraccionar'),
(11, 'Desarrollo  Temporal', 'Cuenta Temporal con todos los permisos, con intenciones de creación de interfaces');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_permisos`
--

CREATE TABLE `rol_permisos` (
  `id_inutilizado` int(111) NOT NULL,
  `id_rol` int(111) DEFAULT NULL,
  `id_permiso` int(111) DEFAULT NULL,
  `nombre_permiso` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol_permisos`
--

INSERT INTO `rol_permisos` (`id_inutilizado`, `id_rol`, `id_permiso`, `nombre_permiso`) VALUES
(4441, 1, 1, 'Ingreso de material'),
(4516, 2, 2, 'Consulta de materiales'),
(4519, 3, 3, 'Ordenar Fraccionamientos'),
(4523, 4, 4, 'Bloqueo de ordenes de Fraccionamiento'),
(4524, 4, 5, 'Bloqueo Ingreso de material'),
(4525, 4, 7, 'Consulta de Auditoria'),
(4520, 5, 8, 'Creacion de usuarios'),
(4521, 5, 9, 'Creación de referencias'),
(4522, 5, 13, 'Atender Novedades'),
(4542, 6, 11, 'Entrega de material'),
(4540, 7, 6, 'Fraccionamiento de material'),
(4529, 11, 4, 'Bloqueo de ordenes de Fraccionamiento'),
(4528, 11, 3, 'Ordenar Fraccionamientos'),
(4527, 11, 2, 'Consulta de materiales'),
(4526, 11, 1, 'Ingreso de material'),
(4499, 14, 2, 'Consulta de materiales'),
(4498, 12, 2, 'Consulta de materiales'),
(4518, 2, 5, 'Bloqueo Ingreso de material'),
(4507, 15, 2, 'Consulta de materiales'),
(4508, 15, 3, 'Ordenar Fraccionamientos'),
(4509, 15, 4, 'Bloqueo de ordenes de Fraccionamiento'),
(4510, 15, 5, 'Bloqueo Ingreso de material'),
(4511, 15, 9, 'Creación de referencias'),
(4517, 19, 1, 'Ingreso de material'),
(4530, 11, 5, 'Bloqueo Ingreso de material'),
(4531, 11, 6, 'Fraccionamiento de material'),
(4532, 11, 7, 'Consulta de Auditoria'),
(4533, 11, 8, 'Creacion de usuarios'),
(4534, 11, 9, 'Creación de referencias'),
(4535, 11, 10, 'Cambio de Carrete a chipa'),
(4536, 11, 11, 'Entrega de material'),
(4537, 11, 12, 'Colocar Novedades'),
(4538, 11, 13, 'Atender Novedades'),
(4539, 11, 14, 'Creacion de roles'),
(4541, 7, 10, 'Cambio de Carrete a chipa'),
(4543, 6, 12, 'Colocar Novedades'),
(4544, 20, 2, 'Consulta de materiales'),
(4546, 20, 3, 'Ordenar Fraccionamientos'),
(4547, 23, 2, 'Consulta de materiales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud_fraccionamiento`
--

CREATE TABLE `solicitud_fraccionamiento` (
  `id_inutilizado` int(111) NOT NULL,
  `fraccionado` varchar(111) NOT NULL DEFAULT 'no',
  `bloqueado` varchar(111) NOT NULL DEFAULT 'no',
  `descripcion` varchar(111) DEFAULT NULL,
  `documento` varchar(111) DEFAULT NULL,
  `metrosafraccionar` varchar(111) DEFAULT NULL,
  `bloqueo_observacion` varchar(222) NOT NULL DEFAULT 'Sin Observacion',
  `observacion` varchar(111) DEFAULT NULL,
  `nombre_ordenador` varchar(111) DEFAULT NULL,
  `user_id_ordenador` varchar(111) DEFAULT NULL,
  `id_material` varchar(111) DEFAULT NULL,
  `bodega` varchar(111) DEFAULT NULL,
  `carreteorrollo` varchar(111) DEFAULT NULL,
  `numero_fraccionado` varchar(111) NOT NULL DEFAULT 'No Ha sido Fraccionado aun',
  `operario_fraccionado` varchar(222) DEFAULT 'No Fracc Aun',
  `fecha_fraccionado` varchar(111) DEFAULT NULL,
  `hora_fraccionado` varchar(111) DEFAULT NULL,
  `fecha_ingreso_material` varchar(111) DEFAULT NULL,
  `fecha_orden` varchar(111) DEFAULT NULL,
  `metrosencarrete` varchar(111) DEFAULT NULL,
  `numerodenotadeentrada` varchar(111) DEFAULT NULL,
  `producto` varchar(111) DEFAULT NULL,
  `referencia` varchar(111) DEFAULT NULL,
  `user_nombre_bloqueador` varchar(111) DEFAULT NULL,
  `hora_orden` varchar(111) DEFAULT NULL,
  `estado` varchar(111) DEFAULT 'solicitado',
  `operario_entrega` varchar(22) DEFAULT NULL,
  `operario_entrega_con_novedad` varchar(22) DEFAULT NULL,
  `tipo_novedad` varchar(111) DEFAULT 'ninguna',
  `observa_entrega_con_novedad` varchar(122) DEFAULT 'Sin Observacion',
  `observacion_atencion_novedad` varchar(222) DEFAULT NULL,
  `nombre_solicitador` varchar(111) DEFAULT NULL,
  `user_id_solicitador` varchar(111) DEFAULT NULL,
  `cambiado` varchar(11) DEFAULT 'no',
  `cambiado_observacion` varchar(111) DEFAULT 'Sin observacion',
  `nombre_cambio_almacenaje` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `solicitud_fraccionamiento`
--

INSERT INTO `solicitud_fraccionamiento` (`id_inutilizado`, `fraccionado`, `bloqueado`, `descripcion`, `documento`, `metrosafraccionar`, `bloqueo_observacion`, `observacion`, `nombre_ordenador`, `user_id_ordenador`, `id_material`, `bodega`, `carreteorrollo`, `numero_fraccionado`, `operario_fraccionado`, `fecha_fraccionado`, `hora_fraccionado`, `fecha_ingreso_material`, `fecha_orden`, `metrosencarrete`, `numerodenotadeentrada`, `producto`, `referencia`, `user_nombre_bloqueador`, `hora_orden`, `estado`, `operario_entrega`, `operario_entrega_con_novedad`, `tipo_novedad`, `observa_entrega_con_novedad`, `observacion_atencion_novedad`, `nombre_solicitador`, `user_id_solicitador`, `cambiado`, `cambiado_observacion`, `nombre_cambio_almacenaje`) VALUES
(21, 'si', 'si', 'Cable MT 120 mm aluminio 15 kv Condumex', '12312', '23', 'test', '213123', 'Javier Aguilarte', NULL, '22', 'Bodega Principal', 'Chipa', '6112967', 'Javier Aguilarte', '2021-12-21', '10:43', '2021-11-29 17:17:45', '2021-12-08', '4576', '45645', '003-0710-000131', 'REF-5757', 'Javier Aguilarte', '04:40', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(20, 'si', 'si', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '34234', '12', 'ss', 'papapapapa', 'Javier Aguilarte', NULL, '18', 'Bodega Principal', 'Chipa', '4848567', 'Javier Aguilarte', '2021-12-08', '04:38', '2021-11-28 08:23:16', '2021-12-08', '11111', '111', '003-0710-000132', 'REF-5758', 'Javier Aguilarte', '04:37', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(19, 'no', 'si', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'Fac-20304', '2313', '213456789', '12312', 'Javier Aguilarte', NULL, '15', 'Bodega Principal', 'Chipa', '4426108', 'Javier Aguilarte', '2021-12-09', '12:35', '2021-11-26 18:11:22', '2021-12-08', '231', '2323', '003-0710-000132', 'REF-5758', 'Javier Aguilarte', '04:34', 'Entregado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(18, 'si', 'no', 'Cable Ecologico Aluminio 2/0 15KV Certificado', '2323', '200', 'Sin Observacion', 'mas observas', 'Javier Aguilarte', NULL, '25', 'Bodega Principal', 'Chipa', '2104022', 'Javier Aguilarte', '2021-12-08', '04:22', '2021-12-08 16:21:39', '2021-12-08', '400', '04052021', '003-0209-000404', 'REF-713', NULL, '04:22', 'Entregado', NULL, NULL, 'Diferencia en Cantidad(Comercial)', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(17, 'si', 'no', 'Cable aluminio THHW 2/0 AWG S 8000 Apar/Alcave', '324324', '200', 'Sin Observacion', 'una observacion mas', 'Javier Aguilarte', NULL, '16', 'Bodega Principal', 'Carrete', '5049369', 'Javier Aguilarte', '2021-12-08', '04:19', '2021-11-27 00:35:08', '2021-12-08', '23', '1', '003-0207-000105', 'CAS80002-0', NULL, '03:33', 'solicitado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(16, 'si', 'no', 'Cable aluminio THHW 2/0 AWG S 8000 Apar/Alcave', '123', '200', 'Sin Observacion', 'hay una observacion', 'Javier Aguilarte', NULL, '16', 'Bodega Principal', 'Carrete', '6708919', 'Javier Aguilarte', '2021-12-08', '02:35', '2021-11-27 00:35:08', '2021-12-08', '23', '1', '003-0207-000105', 'CAS80002-0', NULL, '02:35', 'solicitado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(15, 'si', 'no', 'Cable aluminio THHW 2/0 AWG S 8000 Apar/Alcave', '123', '200', 'Sin Observacion', 'hay una observacion', 'Javier Aguilarte', NULL, '16', 'Bodega Principal', 'Carrete', '1373486', 'Javier Aguilarte', '2021-12-08', '03:32', '2021-11-27 00:35:08', '2021-12-08', '23', '1', '003-0207-000105', 'CAS80002-0', NULL, '02:35', 'solicitado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(22, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '324324', '23', 'Sin Observacion', 'una observacion', 'Javier Aguilarte', NULL, '18', 'Bodega Principal', 'Carrete', '2952273', 'Javier Aguilarte', '2021-12-21', '11:13', '2021-11-28 08:23:16', '2021-12-08', '11111', '111', '003-0710-000132', 'REF-5758', NULL, '11:39', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(23, 'si', 'no', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave', '132434', '2323', 'Sin Observacion', 'nungunaahoraaa', 'Javier Aguilarte', NULL, '14', 'Bodega Principal', 'Carrete', '1824395', 'Javier Aguilarte', '2021-12-21', '12:04', '2021-11-26 18:10:07', '2021-12-09', '323', '343', '003-0207-000102', 'CAS80004', NULL, '12:22', 'Entregado', 'Javier Aguilarte', 'Javier Aguilarte', 'Diferencia en Producto(Logística)', 'se debe entregar por aceleracion de departamento', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(24, 'si', 'no', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave', '132434', '2323', 'Sin Observacion', 'nungunaahoraaa', 'Javier Aguilarte', NULL, '14', 'Bodega Principal', 'Carrete', '1368599', 'Javier Aguilarte', '2022-01-03', '08:03', '2021-11-26 18:10:07', '2021-12-09', '323', '343', '003-0207-000102', 'CAS80004', NULL, '12:22', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(34, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '55', '555', 'Sin Observacion', '555', 'Javier Aguilarte', NULL, '12', 'Bodega Principal', 'Carrete', '1919861', 'Javier Aguilarte', '2021-12-21', '11:00', '2021-11-26 18:03:43', '2021-12-21', '12', '23', '003-0710-000132', 'REF-5758', NULL, '10:55', 'Entregado', NULL, NULL, 'Diferencia en Producto(Logística)', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(25, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '136000', '200', 'Sin Observacion', 'Fac-2238238', 'Javier Aguilarte', NULL, '23', 'Bodega Principal', 'Carrete', '7821513', 'Javier Aguilarte', '2021-12-20', '11:27', '2021-12-08 12:19:08', '2021-12-20', '200', '20450', '003-0710-000131', 'REF-5757', NULL, '11:14', 'Entregado', NULL, 'Javier Aguilarte', 'Diferencia en Producto(Comercial)', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(26, 'no', 'si', 'Cable MT 120 mm aluminio 15 kv Condumex', '11111', '100', 'estabna mal', 'cortas ya', NULL, NULL, '23', 'Bodega Principal', 'Carrete', '3736463', 'No Fracc Aun', NULL, NULL, '2021-12-08 12:19:08', '2021-12-20', '200', '20450', '003-0710-000131', 'REF-5757', 'Javier Aguilarte', '11:17', 'solicitado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(27, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '9999999', '100', 'Sin Observacion', 'Urgente', 'Javier Aguilarte', NULL, '23', 'Bodega Principal', 'Carrete', '1925099', 'Javier Aguilarte', '2021-12-20', '11:35', '2021-12-08 12:19:08', '2021-12-20', '200', '20450', '003-0710-000131', 'REF-5757', NULL, '11:28', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(28, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '123123123', '454', 'Sin Observacion', 'ads', 'Javier Aguilarte', NULL, '22', 'Bodega Principal', 'Carrete', '1737562', 'Javier Aguilarte', '2021-12-20', '11:34', '2021-11-29 17:17:45', '2021-12-20', '4576', '45645', '003-0710-000131', 'REF-5757', NULL, '11:31', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(29, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '1', '1', 'Sin Observacion', '1', 'Javier Aguilarte', NULL, '22', 'Bodega Principal', 'Carrete', '3549210', 'Javier Aguilarte', '2021-12-20', '11:37', '2021-11-29 17:17:45', '2021-12-20', '4576', '45645', '003-0710-000131', 'REF-5757', NULL, '11:35', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(30, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '999', '999', 'Sin Observacion', '999', 'Javier Aguilarte', NULL, '29', 'Bodega Principal', 'Carrete', '8791509', 'Javier Aguilarte', '2021-12-20', '11:41', '2021-12-20 11:08:35', '2021-12-20', '1000', '22222', '003-0710-000131', 'REF-5757', NULL, '11:41', 'Entregado', NULL, 'Javier Aguilarte', 'Diferencia en cantidad(Logística)', 'se debe entregar por codigo mayor', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(31, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '888', '887', 'Sin Observacion', 'ninguna', 'Javier Aguilarte', NULL, '12', 'Bodega Principal', 'Carrete', '1994618', 'Javier Aguilarte', '2022-01-05', '03:04', '2021-11-26 18:03:43', '2021-12-21', '12', '23', '003-0710-000132', 'REF-5758', NULL, '10:11', 'Entregado', 'Javier Aguilarte', 'Javier Aguilarte', 'Diferencia en Cantidad(Comercial)', 's/n', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(32, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '34', '100', 'Sin Observacion', 'ninguna', 'Javier Aguilarte', NULL, '31', 'Bodega Principal', 'Chipa', '8710221', 'Javier Aguilarte', '2022-01-05', '03:16', '2021-12-21 10:10:12', '2021-12-21', '888', '888', '003-0710-000131', 'REF-5757', NULL, '10:22', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(33, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '4343', '333', 'Sin Observacion', NULL, 'Javier Aguilarte', NULL, '12', 'Bodega Principal', 'Chipa', '9917027', 'Javier Aguilarte', '2022-01-05', '04:01', '2021-11-26 18:03:43', '2021-12-21', '12', '23', '003-0710-000132', 'REF-5758', NULL, '10:24', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(35, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '5454', '5454', 'Sin Observacion', '5454', 'Javier Aguilarte', NULL, '15', 'Bodega Principal', 'Carrete', '7133436', 'Javier Aguilarte', '2022-01-05', '03:57', '2021-11-26 18:11:22', '2021-12-21', '231', '2323', '003-0710-000132', 'REF-5758', NULL, '11:10', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(36, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '55', '55', 'Sin Observacion', '55', 'Javier Aguilarte', NULL, '31', 'Bodega Principal', 'Carrete', '5274567', 'Javier Aguilarte', '2022-01-05', '12:36', '2021-12-21 10:10:12', '2021-12-21', '888', '888', '003-0710-000131', 'REF-5757', NULL, '02:06', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(37, 'si', 'no', 'Cable aluminio THHW 4 AWG S 8000 Apar/Alcave', '23213', '122', 'Sin Observacion', 'sin ninguna ob, ya que es prueba', 'Javier Aguilarte', NULL, '14', 'Bodega Principal', 'Carrete', '7047336', 'Javier Aguilarte', '2022-01-03', '08:08', '2021-11-26 18:10:07', '2021-12-30', '323', '343', '003-0207-000102', 'CAS80004', NULL, '07:39', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(38, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '2323', '23', 'Sin Observacion', '23', 'Javier Aguilarte', NULL, '15', 'Bodega Principal', 'Carrete', '5362183', 'Javier Aguilarte', '2022-01-05', '10:11', '2021-11-26 18:11:22', '2022-01-03', '231', '2323', '003-0710-000132', 'REF-5758', NULL, '08:01', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(39, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '67', '78', 'Sin Observacion', 'll', 'Javier Aguilarte', NULL, '12', 'Bodega Principal', 'Carrete', '8492959', 'Javier Aguilarte', '2022-01-04', '09:54', '2021-11-26 18:03:43', '2022-01-04', '12', '23', '003-0710-000132', 'REF-5758', NULL, '09:48', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(40, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '2022', '2021', 'Sin Observacion', NULL, 'Javier Aguilarte', NULL, '44', 'Bodega Principal', 'Carrete', '9039800', 'Javier Aguilarte', '2022-01-05', '11:17', '2022-01-05 11:02:04', '2022-01-05', '2022', '2022', '003-0710-000131', 'REF-5757', NULL, '11:03', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(41, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '345', '345', 'Sin Observacion', NULL, 'Javier Aguilarte', NULL, '45', 'Bodega Principal', 'Rollo', '3015170', 'Javier Aguilarte', '2022-01-05', '03:56', '2022-01-05 15:53:54', '2022-01-05', '9876', '9876', '003-0710-000131', 'REF-5757', NULL, '03:55', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(42, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '234', '500', 'Sin Observacion', 'na', 'Javier Aguilarte', NULL, '45', 'Bodega Principal', 'Rollo', '1695403', 'Javier Aguilarte', '2022-01-05', '10:35', '2022-01-05 15:53:54', '2022-01-05', '9876', '9876', '003-0710-000131', 'REF-5757', NULL, '04:03', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(43, 'tomada', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '44', '444', 'Sin Observacion', 'dd', 'Javier Aguilarte', NULL, '45', 'Bodega Principal', 'Rollo', '2441220', 'Javier Aguilarte', '2022-01-06', '09:49', '2022-01-05 15:53:54', '2022-01-05', '9876', '9876', '003-0710-000131', 'REF-5757', NULL, '04:06', 'En alistamiento', 'Javier Aguilarte', 'Javier Aguilarte', 'ninguna', NULL, NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(44, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '765', '765', 'Sin Observacion', 'df', 'Javier Aguilarte', NULL, '45', 'Bodega Principal', 'Chipa', '8649484', 'Javier Aguilarte', '2022-01-05', '04:17', '2022-01-05 15:53:54', '2022-01-05', '9876', '9876', '003-0710-000131', 'REF-5757', NULL, '04:14', 'Entregado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(45, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '9876', '9877', 'Sin Observacion', '9876', 'Javier Aguilarte', NULL, '44', 'Bodega Principal', 'Carrete', '9129676', 'Javier Aguilarte', '2022-01-05', '04:29', '2022-01-05 11:02:04', '2022-01-05', '2022', '2022', '003-0710-000131', 'REF-5757', NULL, '04:28', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(46, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '555', '555', 'Sin Observacion', '555', 'Javier Aguilarte', NULL, '15', 'Bodega Principal', 'Carrete', '3267177', 'Javier Aguilarte', '2022-01-05', '04:37', '2021-11-26 18:11:22', '2022-01-05', '231', '2323', '003-0710-000132', 'REF-5758', NULL, '04:35', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(47, 'tomada', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '10000', '10000', 'Sin Observacion', '10000', 'Javier Aguilarte', NULL, '46', 'Bodega Principal', 'Carrete', '3450038', 'No Fracc Aun', '2022-01-05', '06:33', '2022-01-05 16:42:35', '2022-01-05', '6677', '6677', '003-0710-000131', 'REF-5757', NULL, '04:44', 'En alistamiento', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(48, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '5', '2', 'Sin Observacion', '44', 'Javier Aguilarte', NULL, '47', 'Bodega Principal', 'Carrete', '9585571', 'Javier Aguilarte', '2022-01-05', '06:33', '2022-01-05 18:31:47', '2022-01-05', '1', '1', '003-0710-000131', 'REF-5757', NULL, '06:32', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(49, 'tomada', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'dd333', '98765', 'Sin Observacion', 'sin', 'Javier Aguilarte', NULL, '15', 'Bodega Principal', 'Carrete', '1923214', 'No Fracc Aun', '2022-01-05', '09:46', '2021-11-26 18:11:22', '2022-01-05', '231', '2323', '003-0710-000132', 'REF-5758', NULL, '09:33', 'En alistamiento', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(50, 'si', 'si', 'Cable MT 120 mm aluminio 15 kv Condumex', '6567', '456765', 'ff', 'dsaf', 'Javier Aguilarte', NULL, '50', 'Bodega Principal', 'Carrete', '9321238', 'Javier Aguilarte', '2022-01-05', '09:50', '2022-01-05 21:23:36', '2022-01-05', '7643', '345435', '003-0710-000131', 'REF-5757', 'Javier Aguilarte', '09:47', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(51, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '345', '7777', 'Sin Observacion', 'sin', 'Javier Aguilarte', NULL, '51', 'Bodega Principal', 'Chipa', '9701562', 'Javier Aguilarte', '2022-01-06', '09:43', '2022-01-06 09:39:44', '2022-01-06', '234', '234', '003-0710-000131', 'REF-5757', NULL, '09:40', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(52, 'no', 'si', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '44', '444', 'adfadsf', 'zsdgf', NULL, NULL, '18', 'Bodega Principal', 'Carrete', '1466098', 'No Fracc Aun', NULL, NULL, '2021-11-28 08:23:16', '2022-01-06', '11111', '111', '003-0710-000132', 'REF-5758', 'Javier Aguilarte', '11:05', 'solicitado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(53, 'si', 'no', 'Cable MT 120 mm aluminio 15 kv Condumex', '876', '456', 'Sin Observacion', 'dsg', 'Javier Aguilarte', NULL, '22', 'Bodega Principal', 'Carrete', '9490779', 'Javier Aguilarte', '2022-01-06', '11:13', '2021-11-29 17:17:45', '2022-01-06', '4576', '45645', '003-0710-000131', 'REF-5757', NULL, '11:09', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(54, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '94678', '3465', 'Sin Observacion', 'afdgdafg', 'Javier Aguilarte', NULL, '18', 'Bodega Principal', 'Carrete', '6228069', 'Javier Aguilarte', '2022-01-06', '11:12', '2021-11-28 08:23:16', '2022-01-06', '11111', '111', '003-0710-000132', 'REF-5758', NULL, '11:10', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL),
(55, 'tomada', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', '55', '5555', 'Sin Observacion', NULL, 'Javier Aguilarte', NULL, '18', 'Bodega Principal', 'Chipa', '5490039', 'No Fracc Aun', '2022-01-06', '11:34', '2021-11-28 08:23:16', '2022-01-06', '11111', '111', '003-0710-000132', 'REF-5758', NULL, '11:34', 'Entregado', NULL, 'Javier Aguilarte', 'Diferencia en cantidad(Logística)', 'solucionado', NULL, 'Javier Aguilarte', '32', 'si', 'Sin observacion', 'Javier Aguilarte'),
(56, 'si', 'no', 'Cable MT 185 mm aluminio 15 kv 100% Condumex', 'fewrwq', '3443', 'Sin Observacion', '4343', 'Javier Aguilarte', NULL, '18', 'Bodega Principal', 'Carrete', '2588953', 'Javier Aguilarte', '2022-01-06', '04:04', '2021-11-28 08:23:16', '2022-01-06', '11111', '111', '003-0710-000132', 'REF-5758', NULL, '04:04', 'fraccionado', NULL, NULL, 'ninguna', 'Sin Observacion', NULL, 'Javier Aguilarte', '32', 'no', 'Sin observacion', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(111) NOT NULL,
  `codigo_empleado` int(111) NOT NULL,
  `identificacion` varchar(111) DEFAULT NULL,
  `nombre` varchar(111) DEFAULT NULL,
  `dependencia` varchar(111) DEFAULT NULL,
  `activo` int(111) DEFAULT NULL,
  `id_rol` varchar(111) NOT NULL,
  `qr` varchar(111) DEFAULT NULL,
  `codigo_qr_acceso` varchar(111) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creado_por` varchar(111) DEFAULT NULL,
  `modificado_por` varchar(111) DEFAULT NULL,
  `activado_o_desactivado_por` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `codigo_empleado`, `identificacion`, `nombre`, `dependencia`, `activo`, `id_rol`, `qr`, `codigo_qr_acceso`, `fecha_creacion`, `creado_por`, `modificado_por`, `activado_o_desactivado_por`) VALUES
(34, 20450, '20450702', 'juansito perez', 'Prueba Login', 1, '4', NULL, '20450000', '2021-11-14 05:01:37', 'Javier Aguilarte', 'juansito perez', NULL),
(36, 79455700, '79455700', 'carlos diaz', 'Almacen', 1, '4', NULL, '79455700', '2021-11-16 21:47:19', 'Javier Aguilarte', NULL, 'carlos diaz'),
(32, 1, '1', 'Javier Aguilarte', 'Programadores', 1, '11', NULL, '20450702', '2021-10-30 03:36:47', 'Javier Aguilarte', 'Javier Aguilarte', NULL),
(38, 1023939340, '1023939340', 'Juan Macea', 'Asesor Comercial', 1, '20', NULL, '1023939340', '2021-12-20 16:54:45', 'Javier Aguilarte', 'Javier Aguilarte', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  ADD PRIMARY KEY (`id_inutilizado`);

--
-- Indices de la tabla `bodega_detalles`
--
ALTER TABLE `bodega_detalles`
  ADD PRIMARY KEY (`id_inutilizado`);

--
-- Indices de la tabla `ingreso_material`
--
ALTER TABLE `ingreso_material`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos_detalles`
--
ALTER TABLE `permisos_detalles`
  ADD PRIMARY KEY (`id_permiso`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_inutilizado`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id_de_pruebas`);

--
-- Indices de la tabla `rol_detalles`
--
ALTER TABLE `rol_detalles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  ADD PRIMARY KEY (`id_inutilizado`);

--
-- Indices de la tabla `solicitud_fraccionamiento`
--
ALTER TABLE `solicitud_fraccionamiento`
  ADD PRIMARY KEY (`id_inutilizado`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_empleado` (`codigo_empleado`),
  ADD UNIQUE KEY `codigo_qr_acceso` (`codigo_qr_acceso`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  MODIFY `id_inutilizado` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `bodega_detalles`
--
ALTER TABLE `bodega_detalles`
  MODIFY `id_inutilizado` int(222) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ingreso_material`
--
ALTER TABLE `ingreso_material`
  MODIFY `id` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos_detalles`
--
ALTER TABLE `permisos_detalles`
  MODIFY `id_permiso` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_inutilizado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT de la tabla `prueba`
--
ALTER TABLE `prueba`
  MODIFY `id_de_pruebas` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rol_detalles`
--
ALTER TABLE `rol_detalles`
  MODIFY `id_rol` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `rol_permisos`
--
ALTER TABLE `rol_permisos`
  MODIFY `id_inutilizado` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4549;

--
-- AUTO_INCREMENT de la tabla `solicitud_fraccionamiento`
--
ALTER TABLE `solicitud_fraccionamiento`
  MODIFY `id_inutilizado` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
