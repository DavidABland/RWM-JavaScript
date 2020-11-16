// JavaScript source code

function setOpportunityPotential(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext
    var lookupObject = formContext.getAttribute("opportunityid");

    var consumableValue = formContext.getAttribute("tal_potentialconsumablesales").getValue();
    var serviceValue = formContext.getAttribute("tal_potentialservicesales").getValue();

    if (lookupObject !== null) {
        var lookUpObjectValue = lookupObject.getValue();
        if ((lookUpObjectValue !== null)) {
            var lookupid = lookUpObjectValue[0].id;
        }
        else {
            return;
        }
    }
    else {
        return;
    }

    if (consumableValue === true) {
        var ConsumableData =
        {
            "tal_potentialconsumablesales": true
        }
    }
    else {
        var ConsumableData =
        {
            "tal_potentialconsumablesales": false
        }
    }
	
    if (serviceValue === true) {
        var ServiceData =
        {
            "tal_potentialservicesales": true
        }
    }
    else {

        var ServiceData =
        {
            "tal_potentialservicesales": false
        }
    }

    // Update the record
    Xrm.WebApi.updateRecord("opportunity", lookupid, ConsumableData).then(
        function success(result) {
        },
        function (error) {
            Xrm.Navigation.openAlertDialog("An error occured. Function - setOpportunityPotential.\n\nError Details:\n\n" + error.message);
            // handle error conditions
        }
    );

    // Update the record
    Xrm.WebApi.updateRecord("opportunity", lookupid, ServiceData).then(
        function success(result) {
        },
        function (error) {
            Xrm.Navigation.openAlertDialog("An error occured. Function - setOpportunityPotential.\n\nError Details:\n\n" + error.message);
            // handle error conditions
        }
    );

}


function LoadDefaults(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext
    var lookupObject = formContext.getAttribute("opportunityid");

    if (lookupObject !== null) {
        var lookUpObjectValue = lookupObject.getValue();
        if ((lookUpObjectValue !== null)) {
            var lookupid = lookUpObjectValue[0].id;
        }
        else {
            return;
        }
    }
    else {
        return;
    }

    Xrm.WebApi.retrieveRecord("opportunity", lookupid, "").then(function success(result) {
        try {
            if (typeof (result.tal_potentialconsumablesales) === "boolean") {
                formContext.getAttribute("tal_potentialconsumablesales").setValue(result.tal_potentialconsumablesales);
            }
            if (typeof (result.tal_potentialservicesales) === "boolean") {
                formContext.getAttribute("tal_potentialservicesales").setValue(result.tal_potentialservicesales);
            }
        }
        catch (err) {
            Xrm.Navigation.openAlertDialog("An error occured. Function - LoadDefaults.\n\nError Details:\n\n" + err);
        }
    },
        function (error) {
            var alertOptionsError = { height: 120, width: 240 };
            var alertStringsError = { confirmButtonLabel: "OK", text: error.message, title: "Error - Check Parent Data" };
            Xrm.Navigation.openAlertDialog(alertStringsError, alertOptionsError);
            //alert(error.message);
        });
}

