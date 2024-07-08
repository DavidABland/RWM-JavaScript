// JavaScript source code

function ClearResellerForNew(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext
    var resellerAccountObject = formContext.getAttribute("tal_resellerscustomer");

    var formType = formContext.ui.getFormType();

    var FORM_TYPE_CREATE = 1;
    var FORM_TYPE_UPDATE = 2;
    var FORM_TYPE_READ_ONLY = 3;
    var FORM_TYPE_DISABLED = 4;
    var FORM_TYPE_QUICK_CREATE = 5;
    var FORM_TYPE_BULK_EDIT = 6;

    try {

        if (formType === FORM_TYPE_CREATE) {
            if (resellerAccountObject !== null && resellerAccountObject !== undefined) {

                //alert("Clear");
                resellerAccountObject.setValue(null);

            }
        }
    }
    catch (err) {
        var alertStrings = { confirmButtonLabel: "OK", text: err.message, title: "Error in function: ClearResellerForNew" };
        var alertOptions = { height: 120, width: 260 };
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
    }
}