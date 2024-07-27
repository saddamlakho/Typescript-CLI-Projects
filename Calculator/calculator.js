import inquirer from "inquirer";
const ans = await inquirer.prompt([
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
const { numberOne, numberTwo, operator } = ans;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("Your Answer is", result);
}
else {
    console.log("Please Enter Your Number");
}
