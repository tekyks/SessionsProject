sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  (Controller, MessageToast) => {
    'use strict';
    return Controller.extend('newfirstui5app.controller.View1', {
      //this is the area, you have to put your logic

      //Life cycle event - 1
      onInit() {
        //this will always be called first time, when application gets loaded.
        //the use of this life cycle event is to initialize the data
        alert('I am inside init event');
      },

      //Life cycle event - 2
      onBeforeRendering() {
        //just before loading of UI element this life cycle event will be called.
        //the use if this event is to change the behaviour of some of the UI element based on customer need.
        alert('I am inside onBeforeRendering');
      },

      //Life cycle event - 3
      onAfterRendering() {
        //just After loading of UI element this life cycle event will be called.
        //the use if this event is to change the some logic which are depenedent on UI element.
        alert('I am inside onAfterRendering');
      },

      //Life cycle event - 4
      onExit() {
        //whenever you are going to comeout of your application, this will be called
        //the use if this event is clear some data or close somen database connection.
        alert('I am inside on exit');
      },

      onButtonClick: function () {
        //get the user eneterd data
        let userInput = this.getView().byId('idName');
        let enteredName = userInput.getValue();
        if (enteredName === '') {
          MessageToast.show('Please eneter your name first bedore submitting');
        } else {
          MessageToast.show(`Your eneterd name is ${enteredName}`);
        }
      },

      onSecondButtonClick: function (event) {
        console.log(event.getSource().getText());

        let buttonName = event.getSource().getText();
        if (buttonName === 'First Button') {
          MessageToast.show('First Button is clicked !');
        } else if (buttonName === 'Second Button') {
          MessageToast.show('Second Button is clicked !');
        }
      },
    });
  }
);
