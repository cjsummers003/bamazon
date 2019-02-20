# BAMazon

<h3>What is BAMazon?</h3>
* BAMazon is an Amazon-like store front using Node.js and MySQL.

<h3>Getting Started</h3>
* Clone repo.
<br>
* Run command in Terminal or Gitbash 'npm install'
<br>
* Run command: 'npm bamazonCustomer.js'
<br>
* Run 'ctrl + c' to exit each mode

<h3>BamazonCustomer.js will ...</h3>
<br>
* Prints a list of products available in the store.
<br>
* Prompts customer which product they would like to purchase by ID number.
<br>
<img src = "images/bamazonCustomerview1.PNG">
<br>
<br>
* Asks for the quantity.
<br>
* If there is a sufficient amount of the product in stock, it will return the total for that purchase.
<img src = "images/bamazonCustomerview2.PNG">
<br>
<br>
* However, if there is not enough of the product in stock, it will tell the user that there is an Insufficent Quantity. 
<br>
* It will then ask the user if they would like to purchase another item.
* if 'Y' (yes) is chosen then it will repeat the prompts
<br>
* If "n" (no) is chosen then it will give the user a 'See You Soon!" response.
<br>
<img src ="images/bamazonCustomerview3.PNG">
<br>
<br>
* If the purchase goes through, it updates the stock quantity to reflect the purchase.
<br>

<h3>Technology</h3>
* Node.js
<br>
* Inquire NPM Package (https://www.npmjs.com/package/inquirer)
<br>
* MYSQL NPM Package (https://www.npmjs.com/package/mysql)

<br>Prerequisites<br>
* Node.js 
<br>
* Create a MYSQL database called 'Bamazon', reference schema.sql

<h3>Built With<h3>
* MySQLWorkbench
<br>
* Terminal/Gitbash

<h3>Authors<h3>
<br>
* CJ Summers
