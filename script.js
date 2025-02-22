/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  employees
          .filter(employee => employee.profession === "developer") // Filter developers
          .map(dev => console.log(dev));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  employees.forEach(employee => {
          if (employee.profession === "developer") {
              console.log(employee);
  }
});
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
      employees.push(newEmployee);
      console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  employees = employees.filter(employee => employee.profession !== "admin");
      console.log(employees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
          { id: 5, name: "alice", age: "22", profession: "designer" },
          { id: 6, name: "bob", age: "25", profession: "manager" },
          { id: 7, name: "charlie", age: "28", profession: "developer" }
      ];

      let combinedArray = employees.concat(newEmployees);
      console.log(combinedArray);
  }

  // Calling the functions to check the output
  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  ConcatenateArray();

