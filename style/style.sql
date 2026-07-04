CREATE DATABASE watch_store;

USE watch_store;

CREATE TABLE watches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    image VARCHAR(255)
);

INSERT INTO watches(name,price,image)
VALUES
('Classic Black',4999,'watch1.jpg'),
('Silver Premium',6999,'watch2.jpg'),
('Luxury Gold',9999,'watch3.jpg'),
('Sport Edition',7999,'watch4.jpg');