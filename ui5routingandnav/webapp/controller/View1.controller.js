sap.ui.define(['sap/ui/core/mvc/Controller'], (Controller) => {
  'use strict';

  return Controller.extend('ui5routingandnav.controller.View1', {
    onInit() {
      //get the router from Component.js
      this.oRouter = this.getOwnerComponent().getRouter();
    },

    onGoToSecondView: function () {
      //logic to go to view2
      this.oRouter.navTo('route_name_view2');
    },
  });
});
