-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: carrentals
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--
CREATE DATABASE carrentals_customer;
USE carrentals_customer;
DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `Customer_ID` int(5) NOT NULL,
  `Customer_Name` varchar(50) DEFAULT NULL,
  `Customer_Address` varchar(100) DEFAULT NULL,
  `Customer_Birthday` date DEFAULT NULL,
  `Customer_Occupation` varchar(10) DEFAULT NULL,
  `Customer_Gender` char(1) DEFAULT NULL,
  PRIMARY KEY (`Customer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (11010,'Jacquelyn S','800 Corrinne Court','1968-02-16','Labour','M'),(11011,'Curtis L','224 Shoenic','1967-11-14','Labour','M'),(11012,'Lauren W','785 Scott Street','1972-01-07','Labour','F'),(11013,'Ian J','902 Hudson Ave.','1972-08-16','Labour','M'),(11014,'Sydney B','7011 Tank Drive','1972-05-08','Labour','M'),(11015,'Chloe Y','44 Willow Pass Road','1983-02-27','Labour','F'),(11016,'Wyatt H','666 Northridge Ct.','1983-04-07','Labour','M'),(11017,'Shannon W','330 Saddlehill Lane','1948-06-26','Labour','M'),(11018,'Clarence R','44 Rivewview','1948-10-19','Labour','F'),(11019,'Luke L','832 Landing Dr','1982-03-17','Labour','M'),(11050,'Alan Z','741 Gainborough Dr.','1955-09-17','Labour','F'),(11051,'Daniel J','85 Sunnyvale Avenue','1955-08-14','Labour','F'),(11052,'Heidi L','514 Via Cordona','1955-08-17','Labour','F'),(11053,'Ana P','660 Stonyhill Circle','1984-08-20','Labour','M'),(11054,'Deanna M','825 B Way','1956-03-20','Labour','M'),(11055,'Gilbert R','811 The Trees Dr.','1956-03-15','Labour','F'),(11056,'Michele N','464 Janin Pl.','1957-04-13','Labour','M'),(11057,'Carl A','930 Lake Nadine Place','1957-10-22','Labour','F'),(11058,'Marc D','645 Sinaloa','1958-04-27','Labour','F'),(11059,'Ashlee A','255 Highland Road','1958-04-11','Labour','F'),(11111,'Meredith G','610 Northridge Ct.','1966-02-23','Labour','M'),(11112,'Crystal W','773 Kirkwood Dr','1966-09-19','Labour','F'),(11113,'Micheal B','96 Marfargoa Drive','1966-02-21','Labour','M'),(11114,'Leslie M','941 Cristobal','1966-05-07','Labour','M'),(11115,'Alvin C','759 Azalea Avenue','1966-02-22','Labour','M'),(11116,'Clinton C','943 Cunha Ct.','1966-10-17','Labour','M'),(11117,'April D','85 Ash Lane','1965-02-21','Labour','F'),(11119,'Evan J','157 Sierra Ridge','1939-04-20','Retiree','F'),(11150,'Russell S','755 Easley Drive','1945-03-25','Retiree','F'),(11151,'Melinda G','05 Rainier Dr.','1946-02-25','Labour','F'),(11152,'James W','827 Seagull Court','1980-01-20','Labour','F'),(11153,'Angela J','877 Weatherly Drive','1980-06-23','Labour','F'),(11154,'Megan W','898 Holiday Hills','1980-08-21','Labour','F'),(11155,'Hunter R','356 Mori Court','1980-01-26','Labour','F'),(11156,'Maria R','452 Mariposa Ct.','1980-02-17','Labour','M'),(11157,'Hannah L','832 Preston Ct.','1979-06-21','Labour','M'),(11158,'Jason W','771 Bundros Court','1979-10-18','Labour','F'),(11159,'Brianna H','793 Bonifacio St.','1979-09-27','Labour','F'),(11210,'Edward W','039 Adelaide St.','1952-06-18','Researcher','M'),(11213,'Stephanie M','514 Grant Street','1953-05-24','Researcher','M'),(11214,'Charles M','719 Little Dr','1953-11-17','Researcher','F'),(11215,'Ana P','114 Arlington Way','1954-06-21','Researcher','M'),(11216,'Jasmine T','328 San Francisco','1954-05-20','Researcher','F'),(11217,'Natalie A','592 Bent Tree Lane','1954-02-21','Researcher','F'),(11218,'Olivia B','964 Stony Hill Circle','1954-09-21','Researcher','M'),(11219,'Charles C','871 Bel Air Dr.','1954-12-12','Researcher','F'),(11250,'Shannon L','185 Keywood Ct.','1959-03-22','Manager','F'),(11251,'Xavier L','245 Dantley Way','1936-07-14','Retiree','M'),(11252,'Nicholas T','04 O St.','1936-06-17','Retiree','M'),(11253,'José H','703 Donald Dr.','1937-02-07','Retiree','M'),(11254,'Johnathan V','430 Versailles Pl','1937-03-13','Retiree','M'),(11255,'Colin L','083 San Jose','1937-04-14','Retiree','F'),(11256,'Katelyn H','496 Deerfield Dr.','1937-09-20','Retiree','M'),(11257,'Jacqueline P','076 Northwood Dr','1937-01-16','Retiree','F'),(11258,'Xavier H','707 Virgil Street','1937-06-07','Retiree','F'),(11259,'Victoria S','623 Barquentine Court','1969-03-27','Manager','M'),(11310,'Erin S','541 Black Point Pl','1957-07-19','Manager','M'),(11311,'Gabrielle L','619 Parkside Dr.','1957-08-24','Manager','F'),(11312,'Sara R','375 Kipling Court','1957-04-13','Manager','M'),(11313,'Trevor J','697 Yosemite Dr.','1957-02-27','Manager','F'),(11314,'Mya F','439 Rio Grande Drive','1957-12-21','Manager','F'),(11315,'Hailey W','321 Maya','1957-10-11','Manager','F'),(11316,'Luke A','19 Deermeadow Way','1957-11-27','Manager','F'),(11317,'Victoria R','268 Keller Ridge','1956-09-27','Manager','M'),(11318,'Jessica W','652 Willcrest Circle','1956-10-26','Manager','M'),(11319,'Jade B','119 Northridge Ct','1941-04-27','Retiree','F'),(11350,'Cara Z','280 Greendell Pl','1941-01-24','Retiree','M'),(11351,'Anne R','113 Eastgate Ave.','1943-04-16','Retiree','M'),(11352,'Raymond R','4, impasse Ste-Madeleine','1944-03-17','Retiree','F'),(11353,'Carrie O','883 Cowell Rd.','1945-06-21','Retiree','M'),(11354,'Deanna S','unckerstr 22525','1946-02-23','Manager','M'),(11355,'Roberto G','545 Chickpea Ct.','1946-12-07','Manager','M'),(11356,'Terrence C','613 Thornhill Place','1984-05-27','Manager','F'),(11357,'Ramon Y','245 Vista Oak Dr.','1983-03-23','Manager','M'),(11358,'Cynthia M','757 Pamplona Ct.','1982-11-21','Manager','F'),(11359,'Jarrod P','657 H St.','1982-09-14','Manager','M'),(11410,'Maurice G','5, avenue de la Gare','1972-08-25','Manager','M'),(11411,'Devin R','ostenweg 2428','1958-02-22','Manager','M'),(11412,'Sydney B','ostfach 99 92 92','1958-04-19','Manager','M'),(11413,'Megan S','192 Seagull Court','1958-04-25','Manager','F'),(11414,'Ian R','26 W. Buchanan Rd.','1958-03-07','Manager','M'),(11415,'Randy S','o?str 5538','1948-06-15','Manager','M'),(11416,'Katrina B','205, rue Malar','1949-03-29','Manager','F'),(11417,'Lacey Z',', rue de Linois','1949-02-26','Manager','F'),(11418,'Rafael H','eiter Weg 7765','1949-02-19','Manager','M'),(11419,'Kyle S','381 Alpine Rd.','1949-02-07','Manager','M'),(11459,'Tasha D','627 Kendall Rd','1976-10-23','Nurse','M'),(11510,'Seth R','989 Concord Ave','1957-07-23','Nurse','M'),(11511,'Caleb P','324 Cherry Street','1957-06-24','Nurse','F'),(11512,'Natalie C','481 Broadmoor Drive','1958-08-23','Nurse','M'),(11513,'Alyssa H','780 Conifer Terrace','1958-09-27','Nurse','M'),(11514,'Dalton D','033 Danesta Dr.','1958-04-20','Nurse','F'),(11515,'Shannon H','679 Duke Way','1958-02-25','Nurse','F'),(11516,'Mya G','826 Fine Drive','1958-10-21','Nurse','F'),(11517,'Katherine B','761 Dancing Court','1958-06-20','Nurse','F'),(11518,'Edward W','747 Carmel Dr.','1959-05-20','Nurse','F'),(11519,'Jerome N','537 Ridgewood Drive','1959-03-27','Nurse','M'),(11535,'Alexandria H','1, rue de la Cavalerie','1930-07-18','Retiree','M'),(11550,'Deb T','553 Harness Circle','1972-08-18','Nurse','M'),(11551,'Shannon A','68, avenue de l?Europe','1971-05-25','Nurse','F'),(11552,'Eddie R','eiderplatz 662','1971-05-27','Nurse','M'),(11553,'Sharon L','804 Coldwater Drive','1971-09-19','Nurse','F'),(11554,'Sydney S','8, avenue de l? Union Centrale','1930-09-07','Retiree','F'),(11556,'Lucas E','663 A St.','1971-05-24','Nurse','M'),(11557,'Felicia R','557 Steven Circle','1971-01-25','Nurse','M'),(11558,'Ivan M','086 Nottingham Place','1971-08-22','Nurse','M'),(11559,'Frederick S','otth?user Weg 636','1971-12-26','Nurse','M');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-23 14:42:11
SELECT * FROM 