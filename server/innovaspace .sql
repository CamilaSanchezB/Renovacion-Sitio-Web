-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2023 a las 15:53:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `innovaspace`
--
CREATE DATABASE IF NOT EXISTS `innovaspace` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `innovaspace`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contador`
--

CREATE TABLE `contador` (
  `id` int(11) NOT NULL,
  `svg` text NOT NULL,
  `cantContador` int(11) NOT NULL,
  `moneda` varchar(3) DEFAULT NULL,
  `textoContador` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contador`
--

INSERT INTO `contador` (`id`, `svg`, `cantContador`, `moneda`, `textoContador`) VALUES
(2, 'M13.6012 11.2703L15.3646 9.50684L24.4175 18.5597V19.1668L23.031 20.5533H22.8842L13.6012 11.2703ZM13.2433 7.38552L11.4799 9.14898C10.3083 10.3206 10.3083 12.22 11.4799 13.3916L20.7629 22.6746C21.3255 23.2372 22.0885 23.5533 22.8842 23.5533H23.031C23.8266 23.5533 24.5897 23.2372 25.1523 22.6746L26.5388 21.2881C27.1014 20.7255 27.4175 19.9625 27.4175 19.1668V18.5597C27.4175 17.764 27.1014 17.001 26.5388 16.4384L17.486 7.38552C16.3144 6.21394 14.4149 6.21394 13.2433 7.38552ZM38.2304 27.601L33.7087 23.0794C32.9277 22.2983 31.6614 22.2983 30.8803 23.0794L26.3587 27.601C25.5776 28.3821 25.5776 29.6484 26.3587 30.4294L30.8803 34.9511C31.6614 35.7321 32.9277 35.7321 33.7087 34.9511L38.2304 30.4294C39.0114 29.6484 39.0114 28.3821 38.2304 27.601ZM35.83 20.9581C33.8774 19.0054 30.7116 19.0054 28.759 20.9581L24.2374 25.4797C22.2847 27.4323 22.2847 30.5981 24.2374 32.5507L28.759 37.0724C30.7116 39.025 33.8774 39.025 35.83 37.0724L40.3517 32.5507C42.3043 30.5981 42.3043 27.4323 40.3517 25.4797L35.83 20.9581ZM49.4869 47.971L51.2503 46.2076L41.9673 36.9245H41.8205L40.434 38.311V38.9182L49.4869 47.971ZM53.3716 48.3289L51.6082 50.0923C50.4366 51.2639 48.5371 51.2639 47.3655 50.0923L38.3127 41.0395C37.7501 40.4769 37.434 39.7138 37.434 38.9182V38.311C37.434 37.5154 37.7501 36.7523 38.3127 36.1897L39.6992 34.8032C40.2618 34.2406 41.0249 33.9245 41.8205 33.9245H41.9673C42.763 33.9245 43.526 34.2406 44.0886 34.8032L53.3716 44.0862C54.5432 45.2578 54.5432 47.1573 53.3716 48.3289ZM16.3774 33.5944C17.2058 33.5944 17.8774 34.2659 17.8774 35.0944C17.8774 40.4036 22.1814 44.7076 27.4906 44.7076C28.319 44.7076 28.9906 45.3791 28.9906 46.2076C28.9906 47.036 28.319 47.7076 27.4906 47.7076C20.5245 47.7076 14.8774 42.0604 14.8774 35.0944C14.8774 34.2659 15.549 33.5944 16.3774 33.5944ZM9.68872 35.0944C9.68872 34.2659 9.01715 33.5944 8.18872 33.5944C7.36029 33.5944 6.68872 34.2659 6.68872 35.0944C6.68872 46.5829 16.002 55.8962 27.4906 55.8962C28.319 55.8962 28.9906 55.2247 28.9906 54.3962C28.9906 53.5678 28.319 52.8962 27.4906 52.8962C17.6589 52.8962 9.68872 44.9261 9.68872 35.0944Z', 5, NULL, 'Satellites launched'),
(3, 'M38.6646 9.37492C38.8282 9.28402 39.0289 9.29215 39.1847 9.39597L40.2465 10.1037C41.422 10.8873 42.9534 10.8873 44.1289 10.1037L45.1471 9.42503C45.3085 9.31744 45.5176 9.31293 45.6835 9.41346L46.2982 9.78591C46.5431 9.93431 46.6135 10.2577 46.4526 10.4946L44.4784 13.3998C44.473 13.4077 44.4676 13.4157 44.4623 13.4237C44.4579 13.4302 44.4536 13.4367 44.4493 13.4433H39.8958C39.8693 13.4043 39.8419 13.3658 39.8138 13.3278L37.7425 10.5337C37.5626 10.2911 37.6373 9.94553 37.9013 9.79886L38.6646 9.37492ZM46.9597 15.0859C46.9541 15.0942 46.9487 15.1026 46.9436 15.1112C46.9315 15.2204 46.9076 15.326 46.8733 15.4268V17.8032C52.7791 17.8967 57.5378 22.7133 57.5378 28.6414C57.5378 29.4698 56.8663 30.1414 56.0378 30.1414C55.2094 30.1414 54.5378 29.4698 54.5378 28.6414C54.5378 24.3117 51.0279 20.8018 46.6982 20.8018H45.3733H42.651C36.0862 20.8018 30.7643 26.1237 30.7643 32.6886V36.742L40.266 39.7113C42.6229 40.4479 43.9165 42.9752 43.1357 45.3178C42.36 47.6447 39.8354 48.8923 37.5158 48.095L35.3144 47.3382L30.3332 45.626L31.3085 42.7889L36.2896 44.5012L38.491 45.2579C39.2334 45.5131 40.0414 45.1138 40.2896 44.3691C40.5395 43.6193 40.1255 42.8105 39.3712 42.5748L29.079 39.3585C28.259 39.1022 27.3734 39.1565 26.5909 39.511L19.36 42.7865L21.6727 48.1423C21.8349 48.5178 21.959 48.9009 22.0465 49.2869L24.6745 48.4109C26.2879 47.8731 28.0478 47.9891 29.5767 48.7339L37.7543 52.7179C38.6977 53.1775 39.7975 53.1895 40.7507 52.7508L55.2131 46.0935C55.9831 45.739 56.2669 44.7891 55.8177 44.0703C55.4411 43.4677 54.6741 43.2407 54.0301 43.5412L47.0212 46.812C46.2705 47.1623 45.378 46.8377 45.0276 46.087C44.6773 45.3363 45.0019 44.4438 45.7526 44.0934L52.7615 40.8226C54.7789 39.8811 57.1817 40.5924 58.3617 42.4803C59.7691 44.7322 58.8798 47.7082 56.4675 48.8186L42.0051 55.4759C40.2349 56.2908 38.1924 56.2684 36.4404 55.4149L28.2628 51.4309C27.4396 51.0298 26.4919 50.9674 25.6231 51.257L21.9632 52.477C21.504 54.1099 20.4105 55.5567 18.8179 56.4254L16.5183 57.6797C12.1869 60.0423 6.90576 56.9073 6.90576 51.9734V45.5423C6.90576 42.8014 8.62515 40.355 11.2041 39.4265L12.8092 38.8487C14.6684 38.1794 16.6851 38.7404 17.9431 40.1349L25.353 36.7783C26.1189 36.4313 26.9379 36.2392 27.7643 36.2048V32.6886C27.7643 26.2767 31.8178 20.8117 37.5021 18.7163V15.4122C37.5021 15.3049 37.4676 15.2005 37.4037 15.1144L35.3324 12.3203C34.0733 10.6217 34.5962 8.20299 36.4446 7.17628L37.2078 6.75234C38.3533 6.11607 39.7583 6.17293 40.8486 6.89968L41.9104 7.60742C42.0783 7.71936 42.2971 7.71936 42.465 7.60742L43.4832 6.92875C44.6132 6.17557 46.0768 6.14399 47.2382 6.84775L47.8529 7.2202C49.5672 8.25903 50.0606 10.5227 48.9339 12.1807L46.9597 15.0859ZM40.5021 16.4433H43.8733V17.8018H42.651C41.9213 17.8018 41.2038 17.8543 40.5021 17.9557V16.4433ZM44.151 23.0376C44.151 22.2092 43.4795 21.5376 42.651 21.5376C41.8226 21.5376 41.151 22.2092 41.151 23.0376V24.5195C39.5276 25.0254 38.3492 26.5401 38.3492 28.3301C38.3492 30.534 40.1358 32.3206 42.3397 32.3206H42.8067C43.4397 32.3206 43.9529 32.8338 43.9529 33.4669C43.9529 34.0999 43.4397 34.6131 42.8067 34.6131H42.651C41.932 34.6131 41.3492 34.0302 41.3492 33.3112C41.3492 32.4828 40.6776 31.8112 39.8492 31.8112C39.0207 31.8112 38.3492 32.4828 38.3492 33.3112C38.3492 35.2747 39.6646 36.931 41.4624 37.4468V38.6037C41.4624 39.4321 42.1339 40.1037 42.9624 40.1037C43.7908 40.1037 44.4624 39.4321 44.4624 38.6037V37.2693C45.9282 36.6302 46.9529 35.1682 46.9529 33.4669C46.9529 31.177 45.0966 29.3206 42.8067 29.3206H42.3397C41.7926 29.3206 41.3492 28.8771 41.3492 28.3301C41.3492 27.783 41.7926 27.3395 42.3397 27.3395H43.2737C43.6488 27.3395 43.9529 27.6436 43.9529 28.0187C43.9529 28.8472 44.6245 29.5187 45.4529 29.5187C46.2814 29.5187 46.9529 28.8472 46.9529 28.0187C46.9529 26.2891 45.7594 24.8382 44.151 24.4448V23.0376ZM55.7265 33.3678C56.5549 33.3678 57.2265 34.0394 57.2265 34.8678V37.3584C57.2265 38.1868 56.5549 38.8584 55.7265 38.8584C54.8981 38.8584 54.2265 38.1868 54.2265 37.3584V34.8678C54.2265 34.0394 54.8981 33.3678 55.7265 33.3678ZM13.8253 41.6714C14.6938 41.3587 15.6557 41.7754 16.0216 42.6228L18.9185 49.3316C19.6356 50.9922 18.9692 52.9256 17.3813 53.7917L15.0817 55.046C13.5698 55.8707 11.843 55.4514 10.8153 54.3307L15.9256 51.7755C16.6666 51.405 16.9669 50.504 16.5965 49.763C16.226 49.0221 15.325 48.7217 14.584 49.0922L9.90576 51.4313V45.5423C9.90576 44.0664 10.8316 42.7491 12.2202 42.2492L13.8253 41.6714Z', 750000, 'USD', 'invested\n'),
(4, 'M30.5 51.6698C32.0357 51.6698 33.5333 51.5063 34.9762 51.1957C33.1933 50.6535 31.5168 50.0266 29.9412 49.3287C29.3916 49.789 28.6834 50.066 27.9104 50.066C27.6082 50.066 27.316 50.0237 27.0392 49.9446C26.6047 50.367 26.1785 50.7651 25.7641 51.1381C27.2868 51.486 28.8719 51.6698 30.5 51.6698ZM40.0682 49.3892C36.7231 48.7083 33.7291 47.7304 31.0545 46.5345C31.0238 46.2678 30.9599 46.0112 30.867 45.769C31.279 45.2648 31.6887 44.7431 32.0932 44.2047C35.118 40.1794 37.9091 35.1486 39.1546 29.469C39.9731 31.4866 40.6666 33.6774 41.1922 36.0488C40.63 36.6201 40.283 37.404 40.283 38.2689C40.283 39.5002 40.9862 40.5673 42.0129 41.0906C42.2482 43.2926 42.3444 45.626 42.2757 48.0951C41.5689 48.5691 40.8319 49.0016 40.0682 49.3892ZM29.6949 42.4025C29.3311 42.8867 28.9632 43.356 28.5937 43.8098C28.3736 43.7614 28.145 43.7359 27.9104 43.7359C27.3867 43.7359 26.8928 43.863 26.4577 44.0882C21.6413 41.0724 18.1501 37.3089 15.6923 33.5301L23.7676 35.2761C24.1966 36.5156 25.3741 37.4057 26.7594 37.4057C28.5075 37.4057 29.9245 35.9886 29.9245 34.2406C29.9245 33.281 29.4975 32.4211 28.823 31.8406C28.8309 31.7785 28.8349 31.7152 28.8349 31.651C28.8349 29.868 29.685 24.8914 33.0931 19.3884C34.1342 20.619 35.143 21.9802 36.0873 23.4774C35.8275 23.9368 35.6793 24.4676 35.6793 25.033C35.6793 25.8732 36.0066 26.6369 36.5407 27.2036C36.524 27.2612 36.5106 27.3204 36.5007 27.3811C35.5686 33.0931 32.8153 38.2498 29.6949 42.4025ZM13.0805 35.0089C15.7475 39.1602 19.5386 43.282 24.7619 46.5743C24.7509 46.6817 24.7453 46.7907 24.7453 46.901C24.7453 47.2316 24.796 47.5503 24.89 47.8499C24.006 48.7061 23.1651 49.4491 22.4069 50.0677C20.0658 49.0984 17.9365 47.7212 16.1074 46.0248C14.826 43.6905 13.4827 40.0455 13.0805 35.0089ZM24.2502 32.3111C24.649 31.7934 25.2044 31.4025 25.8455 31.2095C25.9536 28.8243 26.9178 24.133 29.8553 18.9667C24.6411 20.8397 19.3404 24.292 15.0248 30.2308C15.0065 30.256 14.9875 30.2805 14.968 30.3042L24.2502 32.3111ZM41.3511 26.9657C41.7639 26.431 42.0094 25.7607 42.0094 25.033C42.0094 23.285 40.5924 21.8679 38.8444 21.8679C38.7706 21.8679 38.6975 21.8705 38.625 21.8754C37.6199 20.2836 36.5449 18.8303 35.4321 17.5106C40.0995 16.7201 44.3554 17.0147 47.3337 17.6613C49.1048 19.9799 50.4077 22.6752 51.1013 25.6062C49.8966 30.0996 47.0266 33.795 45.1829 35.6211C44.8506 35.403 44.4749 35.2457 44.0714 35.1652C43.3925 32.1722 42.4609 29.4429 41.3511 26.9657ZM46.6108 38.3944C46.567 39.5165 45.9391 40.4886 45.0227 41.0152C45.1742 42.504 45.2658 44.0473 45.2907 45.6459C48.8759 42.1442 51.2227 37.3801 51.6123 32.0722C49.9265 35.0091 47.9158 37.2371 46.6108 38.3944ZM18.1472 51.279C18.8649 51.7066 19.6067 52.0981 20.37 52.451C20.3849 52.7239 20.4745 52.9961 20.6443 53.2356C21.1235 53.9114 22.0598 54.0707 22.7356 53.5915C22.7969 53.548 22.859 53.5035 22.922 53.458C25.3055 54.2443 27.8531 54.6698 30.5 54.6698C34.0559 54.6698 37.4324 53.9019 40.4728 52.5229C40.8054 52.5838 41.141 52.642 41.4797 52.6973C42.2973 52.831 43.0684 52.2766 43.2021 51.459C43.2242 51.3237 43.2274 51.1897 43.2138 51.0597C50.09 46.7985 54.6698 39.1841 54.6698 30.5C54.6698 28.8374 54.502 27.214 54.1822 25.6459C54.2752 25.2396 54.3562 24.8276 54.424 24.4103C54.5449 23.6659 54.0956 22.9605 53.3971 22.7399C52.6717 20.5987 51.6544 18.5923 50.3925 16.7678C50.5254 16.0175 50.0697 15.2742 49.3206 15.0639C49.2267 15.0375 49.1312 15.0114 49.0341 14.9857C44.6004 9.69464 37.9431 6.3302 30.5 6.3302C21.3426 6.3302 13.3747 11.4229 9.2739 18.9305C9.20299 18.9275 9.13099 18.9294 9.0583 18.9367C8.23399 19.0191 7.63257 19.7542 7.715 20.5785C7.75803 21.0088 7.81697 21.4608 7.89282 21.932C6.88299 24.5951 6.3302 27.483 6.3302 30.5C6.3302 37.3287 9.16213 43.496 13.7156 47.8915C14.6292 49.4678 15.5529 50.5717 16.2851 51.2025C16.8234 51.6662 17.5968 51.6804 18.1472 51.279ZM10.222 36.5992C10.1268 35.7751 10.0553 34.9177 10.0113 34.0268C10.0014 33.8267 10.0312 33.6339 10.0938 33.4558C9.86315 33.3083 9.65293 33.1317 9.46828 32.9311C9.61229 34.1907 9.86686 35.4167 10.222 36.5992ZM9.40431 28.716C9.49784 28.608 9.59856 28.5065 9.70571 28.4121C9.63289 28.2261 9.56219 28.0411 9.49359 27.857C9.45814 28.1416 9.42834 28.428 9.40431 28.716ZM12.662 27.7423C11.8557 25.7618 11.3167 23.8917 10.9962 22.2541C13.1412 17.1869 17.2032 13.1285 22.2729 10.9883C24.1845 11.822 26.489 13.1922 28.8441 15.1582C28.7979 15.3734 28.7736 15.5966 28.7736 15.8255C28.7736 15.9374 28.7794 16.0479 28.7907 16.1568C23.2704 18.1426 17.6686 21.7489 13.0371 27.8747C12.9158 27.823 12.7906 27.7787 12.662 27.7423ZM26.3679 9.73327C27.7847 10.5732 29.2814 11.6172 30.7872 12.8764C31.1441 12.7369 31.5325 12.6604 31.9387 12.6604C33.2407 12.6604 34.3592 13.4466 34.8451 14.5702C38.1469 14.0065 41.2669 13.9394 43.9528 14.1535C40.2953 11.14 35.609 9.3302 30.5 9.3302C29.086 9.3302 27.7043 9.46884 26.3679 9.73327Z', 2025, NULL, 'Start of services goal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editores`
--

CREATE TABLE `editores` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `contrasena` text NOT NULL,
  `accessToken` text NOT NULL,
  `superUsuario` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `editores`
--

INSERT INTO `editores` (`id`, `usuario`, `contrasena`, `accessToken`, `superUsuario`) VALUES
(1, 'admin', 'U2FsdGVkX1+Fdi9MFECmrVYpqBLGeCj3TRoDEXpODiQ=\r\n', 'U2FsdGVkX1/KklawdjMiXoikCuL5vCC+0m7YlVRYI2E=', 1),
(18, 'nacho', 'U2FsdGVkX1/ICUOLdMnDErwcHjiKBwMKN3ji812KOuA=', 'U2FsdGVkX19Vscpm+4TtIea1imwK7Af7xNzI+JtwI2c=', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimedia`
--

CREATE TABLE `multimedia` (
  `id` int(11) NOT NULL,
  `ruta` text NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `multimedia`
--

INSERT INTO `multimedia` (`id`, `ruta`, `nombre`) VALUES
(5, '../../assets/18.webp', '18.webp'),
(6, '../../assets/20.webp', '20.webp'),
(7, '../../assets/10.webp', '10.webp'),
(10, '../../assets/09.webp', '09.webp'),
(11, '../../assets/19.webp', '19.webp'),
(14, '../../assets/21.webp', '21.webp'),
(15, '../../assets/22.webp', '22.webp'),
(16, '../../assets/24.webp', '24.webp'),
(17, '../../assets/23.webp', '23.webp'),
(18, '../../assets/25.webp', '25.webp'),
(19, '../../assets/26.webp', '26.webp'),
(20, '../../assets/27.webp', '27.webp'),
(21, '../../assets/28.webp', '28.webp'),
(27, '../../assets/images.webp', 'images.webp'),
(28, '../../assets/imageRoadmap1.webp', 'imageRoadmap1.webp'),
(29, '../../assets/imageRoadmap2.webp', 'imageRoadmap2.webp'),
(30, '../../assets/imageRoadmap3.webp', 'imageRoadmap3.webp'),
(31, '../../assets/imageRoadmap5.webp', 'imageRoadmap5.webp'),
(32, '../../assets/imageRoadmap4.webp', 'imageRoadmap4.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimediainnovaweb`
--

CREATE TABLE `multimediainnovaweb` (
  `id` int(11) NOT NULL,
  `ruta` text NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `multimediainnovaweb`
--

INSERT INTO `multimediainnovaweb` (`id`, `ruta`, `nombre`) VALUES
(6, '../../assets/image_360.webp', 'image_360.webp'),
(7, '../../assets/imageTemplate.webp', 'imageTemplate.webp'),
(8, '../../assets/logo.webp', 'logo.webp'),
(9, '../../assets/1.webp', '1.webp'),
(10, '../../assets/2.webp', '2.webp'),
(11, '../../assets/model.gltf', 'model.gltf'),
(12, '../../assets/model.glb', 'model.glb'),
(13, '../../assets/3.webp', '3.webp'),
(18, '../../assets/sat.webp', 'sat.webp'),
(29, '../../assets/carouselHome1.webp', 'carouselHome1.webp'),
(30, '../../assets/agriculture.webp', 'agriculture.webp'),
(31, '../../assets/defense.webp', 'defense.webp'),
(32, '../../assets/enviromental.webp', 'enviromental.webp'),
(33, '../../assets/livestock.webp', 'livestock.webp'),
(34, '../../assets/logistics.webp', 'logistics.webp'),
(35, '../../assets/maritime1.webp', 'maritime1.webp'),
(36, '../../assets/mining.webp', 'mining.webp'),
(37, '../../assets/round.webp', 'round.webp'),
(39, '../../assets/rocketIcon.webp', 'rocketIcon.webp'),
(40, '../../assets/targetIcon.webp', 'targetIcon.webp'),
(41, '../../assets/LazurriIcon.webp', 'LazurriIcon.webp'),
(43, '../../assets/Works1.webp', 'Works1.webp'),
(44, '../../assets/Works2.webp', 'Works2.webp'),
(45, '../../assets/Works3.webp', 'Works3.webp'),
(46, '../../assets/Works4.webp', 'Works4.webp'),
(50, '../../assets/footer.webp', 'footer.webp'),
(51, '../../assets/Works.webp', 'Works.webp'),
(53, '../../assets/image (1).webp', 'image (1).webp'),
(54, '../../assets/image (2).webp', 'image (2).webp'),
(55, '../../assets/image (3).webp', 'image (3).webp'),
(57, '../../assets/image (4).webp', 'image (4).webp'),
(58, '../../assets/unicorn.png', 'unicorn.png'),
(59, '../../assets/latam100.png', 'latam100.png'),
(60, '../../assets/naves.webp', 'naves.webp'),
(61, '../../assets/hellotomorrow.webp', 'hellotomorrow.webp'),
(62, '../../assets/foundationfuture.webp', 'foundationfuture.webp'),
(63, '../../assets/santander.webp', 'santander.webp'),
(64, '../../assets/imgGrid2.webp', 'imgGrid2.webp'),
(65, '../../assets/imgGrid1.webp', 'imgGrid1.webp'),
(66, '../../assets/image 21.webp', 'image 21.webp'),
(67, '../../assets/image 20.webp', 'image 20.webp'),
(68, '../../assets/Partner1.webp', 'Partner1.webp'),
(69, '../../assets/Partner2.webp', 'Partner2.webp'),
(70, '../../assets/Partner3.webp', 'Partner3.webp'),
(71, '../../assets/Partner4.webp', 'Partner4.webp'),
(75, '../../assets/fondoAboutUs.webp', 'fondoAboutUs.webp'),
(77, '../../assets/aerospace.webp', 'aerospace.webp'),
(78, '../../assets/design.webp', 'design.webp'),
(79, '../../assets/consulting.webp', 'consulting.webp'),
(80, '../../assets/iot.webp', 'iot.webp'),
(84, '../../assets/fondo.webp', 'fondo.webp'),
(86, '../../assets/fondo2.webp', 'fondo2.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text DEFAULT NULL,
  `multimediaId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `descripcion`, `multimediaId`, `fecha`, `link`) VALUES
(789797, 'Mar del Plata lanzará al espacio el picosatélite “Dibu” Martínez', 'Será otro hito de “Innova Space”. Se lanzará en enero a través de SpaceX, la compañía fundada por Elon Musk. \'Esto simboliza para nosotros llevar a lo más alto la pasión, la dedicación y el reconocimiento de Mar del Plata hacia el infinito y más allá\', explicaron los desarrolladores.', 6, '2023-05-29', 'https://www.lacapitalmdp.com/mar-del-plata-lanzara-al-espacio-el-picosatelite-dibu-martinez/'),
(789798, 'Innova Space firmó contrato para lanzar dos nuevos satélites', 'La empresa anunció un convenio con Launcher Inc. De esta manera el segundo y tercer satélite se lanzarán en octubre de 2022.\n\n', 5, '2023-05-29', 'https://www.lacapitalmdp.com/iinnova-space-firmo-contrato-para-lanzar-dos-nuevos-satelites/'),
(789801, 'Cafiero recibió a los marplatenses que crearon el primer “picosatélite” argentino', 'El jefe de Gabinete recibió en su despacho a los creadores del primer “picosatélite” argentino, el marplatense Maximiliano González Kunz y a Alejandro Cortero. ´´Tenemos la decisión política de apostar por la ciencia y la tecnología´´, dijo Cafiero', 10, '2023-05-29', 'https://www.lacapitalmdp.com/cafiero-recibio-a-los-marplatenses-que-crearon-el-primer-picosatelite-argentino/'),
(789808, 'Innova Space construye su primer telepuerto satelital en la provincia de Catamarca', 'El lugar brindará información útil para la mejora de la producción agropecuaria y minera, entre otros proyectos.', 11, '2023-05-30', 'https://www.telam.com.ar/notas/202204/590101-innova-space-catamarca.html'),
(789839, 'El presidente elogió a Innova Space y destacó la producción nacional de satélites', 'Durante el acto oficial, tras el recorrido por las instalaciones del Centro Espacial Punta Indio, el mandatario citó el ejemplo de los lanzamientos exitosos que protagoniza desde principios del año pasado Innova Space, la empresa que nació en Mar del Plata tras un proyecto que coordinó Cordero con alumnos de la Técnica N°5', 14, '2023-06-29', 'https://www.0223.com.ar/nota/2023-6-15-13-36-0-el-presidente-reivindico-el-ejemplo-de-la-marplatense-innova-space-y-alento-la-produccion-de-satelites'),
(789840, 'Dos nuevos mini satélites marplatenses fueron lanzados al espacio', 'Los nanosatélites, llamados Juana Azurduy y Simón Bolívar, fueron construidos por la startup marplatense “Innova Space”. “A 36 horas del lanzamiento estamos controlando que todo salga bien. Estamos trabajando mucho”', 15, '2023-06-29', 'https://www.lacapitalmdp.com/dos-nuevos-mini-satelites-marplatenses-fueron-lanzados-al-espacio/'),
(789841, 'Cinco escuelas de Cataluña se unen a Innova Space para otro lanzamiento espacial histórico', 'En el último trimestre del año, la startup de Mar del Plata lanzará un pico satélite que tendrá una \"carga útil\" fabricada por estudiantes secundarios de la ciudad y de España. \"Nunca se hizo algo así y estamos muy orgullos del desafío\", dijo Alejandro Cordero, a 0223.', 17, '2023-06-29', 'https://www.0223.com.ar/nota/2023-4-16-19-50-0-cinco-escuelas-de-cataluna-se-unen-a-innova-space-para-otro-lanzamiento-espacial-historico'),
(789842, 'Innova Space proyecta construir 16 nuevos picosatélites en el 2023', 'Para fin de año, la startup de Mar del Plata pretende tener lista la plataforma definitiva de los satélites en miniatura para empezar a venderlos en el mundo en 2024. \"Nuestro sueño es convertirnos en unicornios tecnológicos en los próximos 7 años\", adelantó Alejandro Cordero, su CEO.  ', 16, '2023-06-29', 'https://www.0223.com.ar/nota/2023-1-1-8-9-0-innova-space-proyecta-construir-16-nuevos-picosatelites-en-el-2023'),
(789843, 'Empresa marplatense logra un acuerdo con India para lanzar satélites al espacio', 'Innova Space firmó un memorando de entendimiento con el país asiático después de participar en la feria de satélites más importante del mundo que se celebra en Washington, Estados Unidos.', 18, '2023-06-29', 'https://www.0223.com.ar/nota/2022-3-26-11-33-0-empresa-marplatense-logra-un-acuerdo-con-india-para-lanzar-satelites-al-espacio'),
(789844, 'Alberto Fernández definió el lanzamiento del picosatélite como un hito de \"soberanía\"', 'Al participar del despegue en Estados Unidos de manera virtual, el presidente ponderó la \"inteligencia argentina\" que existe en Mar del Plata para concebir proyectos espaciales de esta dimensión.', 19, '2023-06-29', 'https://www.0223.com.ar/nota/2022-1-13-14-35-0-alberto-fernandez-definio-el-lanzamiento-del-picosatelite-como-un-hito-de-soberania'),
(789845, 'Innova Space recibió las \"Palmas Sanmartinianas\" por el picosatélite que lanzó al espacio', 'Junto a directivos del Grupo Núcleo, el Instituto Nacional Sanmartiniano reconoció a la startup marplatense por el novedoso avance científico para el país que se bautizó con el nombre de \"General San Martín. \"Esto es símbolo de unidad nacional\", resaltaron.  ', 20, '2023-06-29', 'https://www.0223.com.ar/nota/2022-1-28-17-39-0-innova-space-recibio-las-palmas-sanmartinianas-por-el-picosatelite-que-lanzo-al-espacio'),
(789846, 'Innova Space presentó su plan de negocios en Emiratos Árabes Unidos', 'La empresa marplatense que lanzó el primer picosatélite al espacio participó de ruedas de negocios multisectoriales con fondos de inversión y autoridades del país de la península de Arabia.', 21, '2023-06-29', 'https://www.0223.com.ar/nota/2022-3-17-16-59-0-innova-space-presento-su-plan-de-negocios-en-emiratos-arabes-unidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roadmap`
--

CREATE TABLE `roadmap` (
  `id` int(11) NOT NULL,
  `idMultimedia` int(11) NOT NULL,
  `anio` int(11) NOT NULL,
  `contenido` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roadmap`
--

INSERT INTO `roadmap` (`id`, `idMultimedia`, `anio`, `contenido`) VALUES
(86, 31, 2023, 'Launch of 4 more satellites under the Cubesat platform. Commissioning of the earth station. Beginning of development of the next satell'),
(88, 28, 2019, 'A high school teacher with his students. That is how our history began back in 2019. They dream was to demonstrate that they could develop a low-cost small sat.'),
(89, 29, 2020, 'The wide dissemination of this ambitious educational project made it possible to connect and generate synergy with Neutron, a startup accelerator in Mar del Plata'),
(90, 30, 2021, 'Beginning of the development of the first mission. It consisted of a picosatellite from the pocketqube platform. In addition, Innova Space was awarded several technological innovation awards'),
(92, 32, 2022, 'Launch of our first mission \"San Martín\" on Space X\'s Falcon 9. And start of development of a new Cubesat platform');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscriptores`
--

CREATE TABLE `suscriptores` (
  `idSus` int(11) NOT NULL,
  `emailSus` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `suscriptores`
--

INSERT INTO `suscriptores` (`idSus`, `emailSus`) VALUES
(1, 'camilasanchezbonaldo@gmail.com'),
(2, 'sotomayornachi05@gmail.com'),
(5, 'nahuelmartinez390@gmail.com'),
(6, 'thomaspierresteguy@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contador`
--
ALTER TABLE `contador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `editores`
--
ALTER TABLE `editores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`) USING HASH;

--
-- Indices de la tabla `multimediainnovaweb`
--
ALTER TABLE `multimediainnovaweb`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`,`multimediaId`) USING BTREE,
  ADD UNIQUE KEY `titulo` (`titulo`) USING HASH,
  ADD UNIQUE KEY `link` (`link`) USING HASH,
  ADD KEY `FK_MultimediaId` (`multimediaId`);

--
-- Indices de la tabla `roadmap`
--
ALTER TABLE `roadmap`
  ADD PRIMARY KEY (`id`,`idMultimedia`),
  ADD KEY `idMultimedia` (`idMultimedia`);

--
-- Indices de la tabla `suscriptores`
--
ALTER TABLE `suscriptores`
  ADD PRIMARY KEY (`idSus`),
  ADD UNIQUE KEY `emailSus` (`emailSus`) USING HASH;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contador`
--
ALTER TABLE `contador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `editores`
--
ALTER TABLE `editores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `multimediainnovaweb`
--
ALTER TABLE `multimediainnovaweb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=789848;

--
-- AUTO_INCREMENT de la tabla `roadmap`
--
ALTER TABLE `roadmap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de la tabla `suscriptores`
--
ALTER TABLE `suscriptores`
  MODIFY `idSus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `FK_MultimediaId` FOREIGN KEY (`multimediaId`) REFERENCES `multimedia` (`id`);

--
-- Filtros para la tabla `roadmap`
--
ALTER TABLE `roadmap`
  ADD CONSTRAINT `roadmap_ibfk_1` FOREIGN KEY (`idMultimedia`) REFERENCES `multimedia` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
