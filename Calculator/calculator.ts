import inquirer from "inquirer";

const ans : {
  numberOne : number,
  numberTwo : number,
  operator : string

} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "enter your first number"
},
    {
      type: "number",
      name: "numberTwo",
    message: "enter your second number"
    },
    
  {
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
    message: "enter your operator"
    },

]);


const {numberOne,numberTwo,operator} = ans;

if (numberOne && numberTwo && operator){
    let result:  number = 0;
    
    if(operator === "+"){
      result = numberOne + numberTwo
    }
    else if(operator === "-"){
      result = numberOne - numberTwo
    }else if(operator === "*"){
      result = numberOne * numberTwo
    }else if(operator === "/"){
      result = numberOne / numberTwo 
    }
   console.log("Your Answer is" , result)

}else {
  console.log("Please Enter Your Number")
}






