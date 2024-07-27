import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "Add Your Item",
                choices: ["Add", "Update", "View", "Remove"]
            }
        ]);
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt([
                {
                    type: "input",
                    name: "todo",
                    message: "Add Your Todo",
                }
            ]);
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "Update") {
            let UpdateTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Update Your Todo",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let AddTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Add Update Item",
                    name: "todo"
                }
            ]);
            let newTodo = todos.filter(val => val !== UpdateTodo.todo);
            todos = [...newTodo, AddTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(todos);
        }
        if (ans.select == "Remove") {
            let DeleteTodo = await inquirer.prompt([
                {
                    type: "input",
                    message: "Remove Your Todo",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newTodo = todos.filter(val => val !== DeleteTodo.todo);
            todos = [...newTodo];
        }
    } while (true);
}
createTodo(todos);
