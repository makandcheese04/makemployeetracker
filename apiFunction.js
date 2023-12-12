const inquirer = require("inquirer");

// Working
function viewAllDepartments(db, promptUser) {
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    promptUser();
  });
}
// Working
function viewAllRoles(db, showPrompt) {
  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    showPrompt();
  });
}
// Working
function viewAllEmployees(db, showPrompt) {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    showPrompt();
  });
}

// working
function addADepartment(db, showPrompt) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Enter the name of the department to Add.",
        validate: (input) => {
          if (input.trim() === "") {
            return "You need to input something for department name.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const { department } = answers;

      db.query(
        `INSERT INTO department(department)
          VALUES(?)`,
        [department], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment:", result);
          console.table(result);
          showPrompt();
        }
      );
    });
}
// working
function addARole(db, showPrompt) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Choose a job role/title.",
        choices: [
          "Engineer",
          "Developer",
          "Operations Manager",
          "CSR",
          "Analyst",
          "Accountant",
          "Sales Manager",
          "Sales Person",
        ],
      },
      {
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Operations", "Finance"],
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary.",
        validate: (input) => {
          const deptId = parseInt(input);
          if (isNaN(deptId) || deptId <= 0) {
            return "Please enter a valid positive integer for the Salary";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const { title, department, salary } = answers;
      db.query(
        `INSERT INTO role(title, department, salary)
        VALUES(?, ?, ?)`,
        [title, department, salary],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addARole success:");
          console.table(result);
        }
      );
      showPrompt();
    });
}
// working
function addEmployee(db, showPrompt) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "f_name",
        message: "Enter Employee's first name.",
      },
      {
        type: "input",
        name: "l_name",
        message: "Enter Employee's last name",
      },
      {
        type: "list",
        name: "title",
        message: "Enter Employee's role/title",
        choices: [
          "Engineer",
          "Developer",
          "Operations Manager",
          "CSR",
          "Analyst",
          "Accountant",
          "Sales Manager",
          "Sales Person",
          "Owner",
        ],
      },
      {
        type: "list",
        name: "department",
        message: "Enter Employee's department",
        choices: [
          "Engineering",
          "Operations",
          "Finance",
          "Sales",
          "Marketing",
          "Service",
        ],
      },
      {
        type: "input",
        name: "salary",
        message: "Add Employee's salary.",
      },
      {
        type: "list",
        name: "manager",
        message: "Direct manager.",
        choices: ["none", "Sal", "Jen", "Blue"],
      },
    ])
    .then((answers) => {
      const { f_name, l_name, title, salary, department, manager } = answers;
      db.query(
        `INSERT INTO employee(f_name, l_name, title, salary, department, manager )
          VALUES(?, ?, ?, ?, ?, ?)`,
        [f_name, l_name, title, salary, department, manager], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addEmployee success:");
          console.table(result);
        }
      );
      showPrompt();
    });
}
//
function updateEmployeeRole(db, showPrompt) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Enter the employee Id.",
      },
      {
        type: "list",
        name: "title",
        message: "Select the employee's New role/title.",
        choices: [
          "Engineer",
          "Developer",
          "Operations Manager",
          "CSR",
          "Analyst",
          "Accountant",
          "Sales Manager",
          "Sales Person",
          "Owner",
        ],
      },
    ])
    .then((answers) => {
      const { id, title } = answers;

      db.query(
        `UPDATE employee SET title=? WHERE id=?`,
        [title, id], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("\u{1F680} updateEmployeeRole success: \u{1F680}");
          console.table(result);
        }
      );
      showPrompt();
    });
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployeeRole,
};