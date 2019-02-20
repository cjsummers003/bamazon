CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from Products;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Roller Skates","Toys",49.95,150),
    ("Fast Times At Ridgemont High","ENTERTAINMENT",9.99,200),
    ("Crate of Spam","GROCERY",24.50,50),
    ("Cool Shades","CLOTHING",75.00,5),
    ("Baseball Cap","CLOTHING",54.25,35),
    ("wrist Tape","SPORTS",42.42,42),
    ("Bill and Ted's Excellent Adventure","ENTERTAINMENT",15.00,25),
    ("Monster","Grocery",25.50,57),
    ("Monopoly","ENTERTAINMENT",30.50,35),
    ("Yahtzee","ENTERTAINMENT",19.95,23);

