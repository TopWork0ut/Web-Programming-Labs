use NodeJS;
DROP TABLE IF EXISTS `hotels` ;

CREATE TABLE IF NOT EXISTS `NodeJS`.`hotels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `description` VARCHAR(300) NULL DEFAULT NULL,
  `cost` INT NOT NULL,
  `count_of_stars` INT NOT NULL,
  `place` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB

COLLATE = utf8mb4_0900_ai_ci;

insert into hotels(name, image, description,cost,count_of_stars, place) values('Oliveriaa','hotel1.jpg','Excellent hotel with excellent location at the center, 
extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.',1231,4,'Beach');
insert into hotels(name, image, description,cost,count_of_stars, place) values('Victoria la pice','hotel2.jpg','Hotel Clark is perfectly situated in downtown Budapest,
looking onto the Chain Bridge; one of the most emblematic historic sights of the city', 972, 2, 'Mountains');
insert into hotels(name, image, description,cost,count_of_stars, place) values('Line-quine','hotel3.jpg','The newly renovated Hotel Victoria is located in the heart of 
historical downtown of Budapest, on the Buda side.', 1799, 5, 'Beach');
insert into hotels(name, image, description,cost,count_of_stars, place) values('MonoBahm','hotel4.jpeg','Great hotel with excellent location at the center, extremely comfortable. 
Upon arrival we were welcomed by the friendly reception staff.', 829, 3, 'Beach');
 