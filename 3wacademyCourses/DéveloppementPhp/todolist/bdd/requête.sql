SELECT * FROM `task` WHERE id = 1;

INSERT INTO `task` (title`, `goal`, `end_date`)
VALUE('Manger', 'miam miam', '2016-08-17'),
('Meeting with Jerry', 'Discuss various projects', '2016-08-12'),
('Sport', 'Vélo', '2016-08-12');

SELECT * FROM `task` WHERE goal like '%pro%';

UPDATE `task` SET `title`='eat' WHERE id = 1;

DELETE FROM `task` WHERE id = 1;
