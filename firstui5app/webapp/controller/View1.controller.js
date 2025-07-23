sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageBox',
  ],
  (Controller, MessageToast, JSONModel, MessageBox) => {
    'use strict';

    return Controller.extend('com.test.firstui5app.controller.View1', {
      onInit() {
        //this will be utilized when we want to initialize some data or some config before starting our app

        //step1: lets first create some demo data - employee data
        let jsonEmployeeData = {
          employee: {
            id: '100123',
            name: 'Krishna from Model changed',
            designation: 'Architect',
            department: 'IT',
          },
          Manager: {},
        };

        //step2: lets create a JSON Model which will hold the employee data
        let jEmpModel = new JSONModel(jsonEmployeeData);

        //step3: lets connect this json model to our view - View1 ==> data binding
        this.getView().setModel(jEmpModel, 'empmodel');
        //this.getView().setModel(jEmpModel);

        //-******************************** Aggregation Binding ************************************** --//
        //lets creare employee List data first
        let empListJSONData = {
          employees: [
            {
              id: 1001,
              name: 'Tom Demyut',
              salary: 10000,
              department: 'IT',
            },
            {
              id: 1002,
              name: 'John Doe',
              salary: 20000,
              department: 'IT',
            },
            {
              id: 1003,
              name: 'Krishna',
              salary: 30000,
              department: 'HR',
            },
            {
              id: 1004,
              name: 'James Smith',
              salary: 40000,
              department: 'Admin',
            },
          ],
        };
        //lets create emp list model
        let jEmpListModel = new JSONModel(empListJSONData);
        //set this model to view
        //this.getView().setModel(jEmpListModel, 'emplistmodel'); //named model
        this.getView().setModel(jEmpListModel); //default model
      },

      onPressSubmit: function (oEvent) {
        let inputControl = this.getView().byId('idInput');

        let name = inputControl.getValue();

        MessageToast.show(name);
      },
    });
  }
);
