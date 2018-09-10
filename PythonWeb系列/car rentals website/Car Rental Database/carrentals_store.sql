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
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store` (
  `Store_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Store_Name` varchar(50) DEFAULT NULL,
  `Store_Address` varchar(100) DEFAULT NULL,
  `Store_Phone` varchar(20) DEFAULT NULL,
  `Store_City` text,
  `Store_State_Name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Store_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (1,'Alexandria_stroe','3761 N. 14th St','1 (11) 543 535-0162','Alexandria                    ','New South Wales'),(2,'Bendigo_store','6465 Detroit Ave.','1 (11) 543 535-0195','Bendigo                       ','Victoria'),(3,'Brisbane_store','7832 Landing Dr','262-535-0112','Brisbane                      ','Queensland'),(4,'Caloundra_store','7156 Rose Dr.','550-535-0163','Caloundra                     ','Queensland'),(5,'Cloverdale_store','213 Valencia Place','1 (11) 543 535-0184','Cloverdale                    ','South Australia'),(6,'Coffs Harbour_store','2243 W St.','1 (11) 543 535-0110','Coffs Harbour                 ','New South Wales'),(7,'Cranbourne_store','626 Bentley Street','1 (11) 543 535-0169','Cranbourne                    ','Victoria'),(8,'Darlinghurst_store','5844 Linden Land','1 (11) 543 535-0184','Darlinghurst                  ','New South Wales'),(9,'East Brisbane_store','8148 W. Lake Dr.','622-535-0158','East Brisbane                 ','Queensland'),(10,'Findon_store','9111 Rose Ann Ave','1 (11) 543 535-0116','Findon                        ','South Australia'),(11,'Geelong_store','5927 Rainbow Dr','1 (11) 543 535-0137','Geelong                       ','Victoria'),(12,'Gold Coast_store','1769 Nicholas Drive','589-535-0185','Gold Coast                    ','Queensland'),(13,'Goulburn_store','1825 Village Pl.','1 (11) 543 535-0162','Goulburn                      ','New South Wales'),(14,'Hawthorne_store','4499 Valley Crest','452-535-0188','Hawthorne                     ','Queensland'),(15,'Hervey Bay_store','8734 Oxford Place','746-535-0186','Hervey Bay                    ','Queensland'),(16,'Hobart_store','636 Vine Hill Way','1 (11) 543 535-0182','Hobart                        ','Tasmania'),(17,'Lane Cove_store','7553 Harness Circle','1 (11) 543 535-0131','Lane Cove                     ','New South Wales'),(18,'Lavender Bay_store','7305 Humphrey Drive','1 (11) 543 535-0151','Lavender Bay                  ','New South Wales'),(19,'Malabar_store','2612 Berry Dr','1 (11) 543 535-0184','Malabar                       ','New South Wales'),(20,'Matraville_store','942 Brook Street','1 (11) 543 535-0126','Matraville                    ','New South Wales'),(21,'Melbourne_store','5167 Condor Place','1 (11) 543 535-0136','Melbourne                     ','Victoria'),(22,'Melton_store','1873 Mt. Whitney Dr','1 (11) 543 535-0177','Melton                        ','Victoria'),(23,'Milsons Point_store','624 Peabody Road','1 (11) 543 535-0164','Milsons Point                 ','New South Wales'),(24,'Newcastle_store','3839 Northgate Road','1 (11) 543 535-0110','Newcastle                     ','New South Wales'),(25,'North Ryde_store','7800 Corrinne Court','1 (11) 543 535-0169','North Ryde                    ','New South Wales'),(26,'North Sydney_store','1224 Shoenic','1 (11) 543 535-0117','North Sydney                  ','New South Wales'),(27,'Townsville_store','8211 Leeds Ct.','1 (11) 543 535-0131','Townsville                    ','Queensland'),(28,'Perth_store','6385 Mark Twain','1 (11) 543 535-0146','Perth                         ','South Australia'),(29,'Port Macquarie_store','4785 Scott Street','717-535-0164','Port Macquarie                ','New South Wales'),(30,'Rhodes_store','7902 Hudson Ave.','817-535-0185','Rhodes                        ','New South Wales'),(31,'Rockhampton_store','2596 Franklin Canyon Road','1 (11) 543 535-0178','Rockhampton                   ','Queensland'),(32,'Seaford_store','3981 Augustine Drive','115-535-0183','Seaford                       ','Victoria'),(33,'Silverwater_store','9011 Tank Drive','431-535-0156','Silverwater                   ','New South Wales'),(34,'South Melbourne_store','8915 Woodside Way','229-535-0112','South Melbourne               ','Victoria'),(35,'Springwood_store','244 Willow Pass Road','208-535-0142','Springwood                    ','New South Wales'),(36,'St. Leonards_store','9666 Northridge Ct.','135-535-0171','St. Leonards                  ','New South Wales'),(37,'Sunbury_store','8357 Sandy Cove Lane','1 (11) 543 535-0114','Sunbury                       ','Victoria'),(38,'Sydney_store','7330 Saddlehill Lane','1 (11) 543 535-0195','Sydney                        ','New South Wales'),(39,'Townsville_store','8211 Leeds Ct.','1 (11) 543 535-0131','Townsville                    ','Queensland'),(40,'Warrnambool_store','9353 Creekside Dr.','1 (11) 543 535-0183','Warrnambool                   ','Victoria'),(41,'Wollongong_store','244 Rivewview','1 (11) 543 535-0137','Wollongong                    ','New South Wales');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-23 14:42:12
