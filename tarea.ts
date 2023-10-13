interface Employee {
    employeeID: number;
    age: number;
  }
  
  
  interface Manager extends Employee {
    stockPlan: boolean;
  }
  
  type ManagementEmployee = Employee;
  let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
  };
  
  // Creación de un nuevo Manager
  let manager: Manager = {
    employeeID: 67890,
    age: 45,
    stockPlan: true,

  }
  console.log(manager);
  
  