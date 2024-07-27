import inquirer from "inquirer";
do {
    let getnum = Math.floor(Math.random() * 10);
    const ans = await inquirer.prompt([
        {
            type: "number",
            name: "guessNumber",
            message: "Write Your guessing Number Between 1 to 10 "
        }
    ]);
    const { guessNumber } = ans;
    const game = () => {
        console.log(guessNumber, "guess number", getnum, "get Number");
        if (guessNumber === getnum) {
            console.log("You win");
            return true;
        }
        else {
            console.log("please try again");
        }
        return false;
    };
    game();
} while (true);
// let guess:any = false
// let attempt = 0
// while (!guess) {
//     attempt++
//      console.log("your Attempt number is ", attempt )
//     guess = game()
// }
// console.log("you Attempt", attempt )
