CREATE TABLE `t_demo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `t_demo` (`id`, `name`, `description`)
VALUES
	(1,'名称1','描述1'),
	(2,'名称2','描述2');

