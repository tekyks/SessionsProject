sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
  ],
  (Controller, JSONModel, BindingMode) => {
    ('use strict');

    return Controller.extend('ui5modelproject.controller.View1', {
      onInit() {
        //step 1 - lets first create some dummy/demo data - employee data // {key:value} // [{},{},{}]
        let jsonEmployeeData = {
          employee: {
            id: '1001',
            name: 'Krishna',
            designation: 'Manager',
            department: 'IT',
          },
        };

        //step 2- lets create a JSON Model which will hold employee data
        let jEmpModel = new JSONModel(jsonEmployeeData);

        //Going to change the default behaviour of JSONModel from 2 Way to 1 way binding
        //jEmpModel.setDefaultBindingMode(BindingMode.OneWay);

        //step 3- lets connect json model to our view - View1
        this.getView().setModel(jEmpModel); //default model

        //-------------------------

        let jsonStudentData = {
          student: {
            address: {
              street: 100,
              zipcode: '456789',
            },
            id: '1001',
            name: 'David Goggins',
            class: '3',
            section: 'A',
          },
        };

        let jStudentModel = new JSONModel(jsonStudentData);

        this.getView().setModel(jStudentModel, 'studentmodel'); //named model

        //-----------------------------------
        //lets create json object which holds more than 1 employee - demo data  // [{},{},{}]
        let empListJSONData = {
          employees: [
            {
              id: '1001',
              name: 'Patrick Sjoman',
              designation: 'Manager',
              department: 'IT',
              salary: 10000,
            },
            {
              id: '1002',
              name: 'Steven Smith',
              designation: 'Developer',
              department: 'IT',
              salary: 20000,
            },
            {
              id: '1003',
              name: 'Patrick Kelly',
              designation: 'Admin',
              department: 'Admin',
              salary: 25000,
            },
            {
              id: '1004',
              name: 'Tony Richman',
              designation: 'Senior Manager',
              department: 'HR',
              salary: 30000,
            },
            {
              id: '1005',
              name: 'Ajanta Mendis',
              designation: 'Developer',
              department: 'IT',
              salary: 40000,
            },
            {
              id: '1006',
              name: 'Krishna',
              designation: 'Developer',
              department: 'IT',
              salary: 50000,
            },
          ],
        };

        //let jEmpListModel = new JSONModel(empListJSONData);

        //this.getView().setModel(jEmpListModel, 'emplistmodel'); //named model
      },
    });
  }
);

// if (salary <= 25000){
//   console.log("Less Salary employee");
// }else{
//   console.log('High Salary employee');
// }
//ternary operator
// let message = salary <= 25000 ? 'Less Salary employee' : 'High Salary employee';
// console.log(message);
