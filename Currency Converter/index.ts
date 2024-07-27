import inquirer from "inquirer";

let exchangeRate:any = {
    "PKR" : 1,
    "USD" : 250,
    "EURO": 150,
    "JYP" : 70,
    "CAD" : 200,
    "AUD" : 80

}

 let userName = await inquirer.prompt([
  {
     name : "from_currency",
     type : "list",
     message : "select the currency to convert from",
     choices : [ "PKR","USD","EURO","JYP","CAD","AUD"]
  },

  {
    name : "to_currency",
    type : "list",
    message : "select the currency to convert into",
    choices : [ "PKR","USD","EURO","JYP","CAD","AUD"]
 },

 {
    name : "amount",
    type : "input",
    message : "enter the amount to convert"
 }

]);

let from_amount = exchangeRate[userName.from_currency]
let to_amount = exchangeRate[userName.to_currency]
let amount = userName.amount

//formula of conversion
let base_amont = amount / from_amount
let convet_amount = base_amont * to_amount

//display convert amount
console.log(`Converted Amount ${convet_amount.toFixed(2)}` )