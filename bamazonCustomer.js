//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

//create connection to db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mynewempire@2016",
    database: "bamazonDB"
})

function start() {
    //prints the items for sale and their details
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.log('~Welcome to BAMazon~')

        var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock Quantity'],
            style: {
                head:['blue'],
                compact: false,
                colAligns: ['center'],
            }
        });

        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].ItemID, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]
            );
       }

        console.log(table.toString());
        
       // Gather information from the user
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the ID of the product you would like to purchase?",
                validate: function (value) {
                    if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "qty",
                message: "How much would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ]).then(function (ans) {
            var whatToBuy = (ans.id) -1;
            var howMuchToBuy = parseInt(ans.qty);
            var grandTotal = parseFloat(((res[whatToBuy].Price) * howMuchToBuy).toFixed(2));

            //check if quantity is sufficient
            if (res[whatToBuy].StockQuantity >= howMuchToBuy) {
                //after purchase, updates quantity in Products
                connection.query("UPDATE Products SET ? WHERE ?", [
                    { StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy) },
                    { ItemID: ans.id }
                ], function (err, result) {
                    if (err) throw err;
                    console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
                });

                connection.query("SELECT * FROM Departments", function (err, deptRes) {
                    if (err) throw err;
                    var index;
                    for (var i = 0; i < deptRes.length; i++) {
                        if (deptRes[i].DepartmentName === res[whatToBuy].DepartmentName) {
                            index = i;
                        }
                    }

                    //updates total Sales in departments table
                    connection.query("UPDATE Departments SET ? WHERE ?", [
                        { TotalSales: deptRes[index].TotalSales + grandTotal },
                        { DepartmentName: res[whatToBuy].DepartmentName }
                    ], function (err, deptRes) {
                        if (err) throw err;
                    });
                });

            } else {
                console.log("Insufficient quantity!");
            }

            reprompt();
        })
    })
}

//asks if they would like to purchase another item
function reprompt() {
    inquirer.prompt([{
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
    }]).then(function (ans) {
        if (ans.reply) {
            start();
        } else {
            console.log("See you soon!");
            
        }
    });
}

start();