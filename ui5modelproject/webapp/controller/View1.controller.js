sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
  (Controller, JSONModel) => {
    ('use strict');

    return Controller.extend('ui5modelproject.controller.View1', {
      onInit() {
        //step 1 - lets first create some dummy/demo data - employee data
        let jsonEmployeeData = {
          employee: {
            id: '1001',
            name: 'Patrick Sjoman',
            designation: 'Manager',
            department: 'IT',
          },
        };

        //step 2- lets create a JSON Model which will hold employee data
        let jEmpModel = new JSONModel(jsonEmployeeData);

        //step 3- lets connect json model to our view - View1
        this.getView().setModel(jEmpModel); //default model

        //-------------------------

        let jsonStudentData = {
          student: {
            address: {
              street: 100,
            },
            id: '1001',
            name: 'David Goggins',
            class: '3',
            section: 'A',
          },
        };

        let jStudentModel = new JSONModel(jsonStudentData);

        this.getView().setModel(jStudentModel, 'studentmodel'); //named model
      },
    });
  }
);
