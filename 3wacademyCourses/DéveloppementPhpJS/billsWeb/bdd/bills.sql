-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 13 Septembre 2016 à 17:32
-- Version du serveur :  5.7.13-0ubuntu0.16.04.2-log
-- Version de PHP :  7.0.8-0ubuntu0.16.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bills`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `msrp` float NOT NULL,
  `buyprice` float NOT NULL,
  `saleprice` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `article`
--

INSERT INTO `article` (`id`, `name`, `description`, `photo`, `quantity`, `msrp`, `buyprice`, `saleprice`) VALUES
(1, 'bacon cheeseburger', 'Miam miam', 'bacon_cheeseburger.jpg', 6, 8, 2, 10),
(2, 'Bagel thon', 'Bagel avec du thon', 'bagel_thon.jpg', 1, 6, 3, 8),
(7, 'Carrot Cake', 'Carrot Cake', 'carrot_cake.jpg', 1, 5, 2, 5),
(8, 'Chocolate Donut', 'Chocolate Donut', 'chocolate_donut.jpg', 1, 5, 2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `bill`
--

INSERT INTO `bill` (`id`, `creationdate`, `payment_date`, `client_id`) VALUES
(39, '2016-09-13 14:20:14', '2016-09-13 14:20:14', 2),
(40, '2016-09-13 14:24:45', '2016-09-13 14:24:45', 18),
(41, '2016-09-13 15:04:19', '2016-09-13 15:04:19', 2),
(42, '2016-09-13 15:57:41', '2016-09-13 15:57:41', 2),
(43, '2016-09-13 15:58:18', '2016-09-13 15:58:18', 2),
(44, '2016-09-13 15:59:01', '2016-09-13 15:59:01', 2),
(45, '2016-09-13 16:00:05', '2016-09-13 16:00:05', 2),
(46, '2016-09-13 16:00:58', '2016-09-13 16:00:58', 2),
(47, '2016-09-13 16:01:24', '2016-09-13 16:01:24', 2),
(48, '2016-09-13 16:01:45', '2016-09-13 16:01:45', 2),
(49, '2016-09-13 16:02:30', '2016-09-13 16:02:30', 2),
(50, '2016-09-13 16:06:08', '2016-09-13 16:06:08', 2),
(51, '2016-09-13 16:06:21', '2016-09-13 16:06:21', 2),
(52, '2016-09-13 16:09:10', '2016-09-13 16:09:10', 2),
(53, '2016-09-13 16:09:40', '2016-09-13 16:09:40', 2),
(54, '2016-09-13 16:09:55', '2016-09-13 16:09:55', 2),
(55, '2016-09-13 16:10:56', '2016-09-13 16:10:56', 2),
(56, '2016-09-13 16:11:50', '2016-09-13 16:11:50', 2),
(57, '2016-09-13 16:12:21', '2016-09-13 16:12:21', 2),
(58, '2016-09-13 16:13:31', '2016-09-13 16:13:31', 2),
(59, '2016-09-13 16:15:34', '2016-09-13 16:15:34', 2),
(60, '2016-09-13 16:19:35', '2016-09-13 16:19:35', 2),
(61, '2016-09-13 16:20:29', '2016-09-13 16:20:29', 2),
(62, '2016-09-13 16:20:41', '2016-09-13 16:20:41', 2),
(63, '2016-09-13 16:20:54', '2016-09-13 16:20:54', 2),
(64, '2016-09-13 16:21:36', '2016-09-13 16:21:36', 2),
(65, '2016-09-13 16:21:59', '2016-09-13 16:21:59', 2),
(66, '2016-09-13 16:22:02', '2016-09-13 16:22:02', 2),
(67, '2016-09-13 16:22:13', '2016-09-13 16:22:13', 2),
(68, '2016-09-13 16:23:15', '2016-09-13 16:23:15', 2),
(69, '2016-09-13 16:23:24', '2016-09-13 16:23:24', 2),
(70, '2016-09-13 16:23:40', '2016-09-13 16:23:40', 2),
(71, '2016-09-13 16:24:06', '2016-09-13 16:24:06', 2);

-- --------------------------------------------------------

--
-- Structure de la table `billDetails`
--

CREATE TABLE `billDetails` (
  `article_id_fk` int(11) NOT NULL,
  `bill_id_fk` int(11) NOT NULL,
  `ordered_quantity` int(11) NOT NULL,
  `vat` float NOT NULL,
  `unit_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `billDetails`
--

INSERT INTO `billDetails` (`article_id_fk`, `bill_id_fk`, `ordered_quantity`, `vat`, `unit_price`) VALUES
(1, 39, 2, 20, 8),
(1, 40, 10, 20, 8),
(1, 49, 1, 20, 8),
(1, 50, 2, 20, 8),
(1, 51, 2, 20, 8),
(1, 52, 2, 20, 8),
(1, 53, 2, 20, 8),
(1, 54, 2, 20, 8),
(1, 55, 2, 20, 8),
(1, 56, 2, 20, 8),
(1, 57, 2, 20, 8),
(1, 58, 2, 20, 8),
(1, 59, 2, 20, 8),
(1, 60, 2, 20, 8),
(1, 61, 2, 20, 8),
(1, 62, 2, 20, 8),
(1, 63, 2, 20, 8),
(1, 64, 2, 20, 8),
(1, 65, 2, 20, 8),
(1, 66, 2, 20, 8),
(1, 67, 2, 20, 8),
(1, 68, 2, 20, 8),
(1, 69, 2, 20, 8),
(1, 70, 2, 20, 8),
(1, 71, 3, 20, 8),
(2, 39, 1, 20, 6),
(2, 49, 1, 20, 6),
(7, 38, 2, 20, 5),
(7, 39, 1, 20, 5),
(7, 41, 2, 20, 5),
(7, 46, 1, 20, 5),
(7, 47, 1, 20, 5),
(7, 48, 1, 20, 5),
(7, 49, 1, 20, 5),
(8, 39, 1, 20, 5),
(8, 41, 2, 20, 5),
(8, 49, 1, 20, 5);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `siret` varchar(15) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id`, `lastname`, `firstname`, `address`, `siret`, `phone`, `mail`, `password`, `roles`) VALUES
(1, 'pasdenom', 'Amaury', 'Nantes', '12345678965423', '0987451230', 'amaury@mail.com', '2118c37356b669d52c22510c0287642551fcdc1b9b27517999e040ad56d1ad678cb71496eb4da19832143ae14ef1ceabf1824349bd608176a91f22f7088a5427', 'a:1:{i:0;i:0;}'),
(2, 'azerty', 'julien', 'Rennes', '98765432145697', '0365895420', 'julien@mail.com', '2118c37356b669d52c22510c0287642551fcdc1b9b27517999e040ad56d1ad678cb71496eb4da19832143ae14ef1ceabf1824349bd608176a91f22f7088a5427', 'a:1:{i:0;i:1;}'),
(4, 'azerty', 'useradmin', 'Rennes', '98765434545698', '0365895420', 'useradmin@mail.com', '2118c37356b669d52c22510c0287642551fcdc1b9b27517999e040ad56d1ad678cb71496eb4da19832143ae14ef1ceabf1824349bd608176a91f22f7088a5427', 'a:2:{i:0;i:0;i:1;i:1;}'),
(18, 'Vincent', 'Robert', NULL, '12345678912345', NULL, 'robert.vincent@mail.com', '2118c37356b669d52c22510c0287642551fcdc1b9b27517999e040ad56d1ad678cb71496eb4da19832143ae14ef1ceabf1824349bd608176a91f22f7088a5427', 'a:1:{i:0;i:1;}');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_fk` (`client_id`);

--
-- Index pour la table `billDetails`
--
ALTER TABLE `billDetails`
  ADD PRIMARY KEY (`article_id_fk`,`bill_id_fk`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `siret` (`siret`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `client_fk` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
