sap.ui.define(['sap/ui/core/mvc/Controller'], (Controller) => {
  'use strict';

  return Controller.extend('ui5routingandnav.controller.View2', {
    onInit() {
      //get the router from Component.js
      this.oRouter = this.getOwnerComponent().getRouter();
    },

    onGoToFirstView: function () {
      //logic to go to view1
      this.oRouter.navTo('route_name_view1');
    },
  });
});
