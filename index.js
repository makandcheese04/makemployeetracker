const mysql = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");

const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployeeRole,
} = require("./apiFunction");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Helifino",
    database: "business_db",
  },
  console.log(`\u{1F680} Connected to the business_db database. \u{1F680} \n`)
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "what do you want to do? \n",
    choices: [
      "View all Departments",
      "View all Roles",
      "View all Employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role/title",
      "Quit",
    ],
  },
];

function promptUser() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers); // once the user finishes every single question, we will get a promise (.then) with the answers obj.

    switch (answers.action) {
      case "View all Departments":
        viewAllDepartments(db, promptUser); // not sure why db is an argument here.
        break;
      case "View all Roles":
        viewAllRoles(db, promptUser);
        break;
      case "View all Employees":
        viewAllEmployees(db, promptUser);
        break;
      //
      case "Add a department":
        addADepartment(db, promptUser);
        break;
      case "Add a role":
        addARole(db, promptUser);
        break;
      case "Add an employee":
        addEmployee(db, promptUser);
        break;
      case "Update an employee role/title":
        updateEmployeeRole(db, promptUser);
        break;
      case "Quit":
        console.log("You have terminated the appliation!");
        db.end();
        process.exit(); // kills the node app.
        break;
      //
      default:
        console.log("You didnt enter the correct response!");
        promptUser();
        break;
    }
  });
}

promptUser();