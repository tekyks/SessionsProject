sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  (Controller, MessageToast) => {
    'use strict';

    return Controller.extend('com.test.firstapp.controller.View1', {
      onInit() {},

      onPressClickClear: function (oEvent) {
        let objName = this.getView().byId('idName');
        let objDepartment = this.getView().byId('idDepartment');
        //lets clear both the controls
        objName.setValue('');
        objDepartment.setValue('');
      },

      onPressClickSubmit: function (oEvent) {
        let objName = this.getView().byId('idName');
        let objDepartment = this.getView().byId('idDepartment');
        let enteredName = objName.getValue();
        let eneterdDept = objDepartment.getValue();
        MessageToast.show(
          'Entered name - ' + enteredName + ' Department name - ' + eneterdDept
        );
      },

      // onPressClickMeButton: function (oEvent) {
      //   let objInput = this.getView().byId('idName');
      //   let name = objInput.getValue();
      //   MessageToast.show('Your entered name is - ' + name);
      // },
    });
  }
);
