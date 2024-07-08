// JavaScript source code

function isInWarranty(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext
    var lookupObject = formContext.getAttribute("splash_custmachineid");
    var WarrantyStatus = formContext.getAttribute("msa_machineinwarranty");


    // Check if Installation Case and if it is don't calculate Warranty Status

    var caseType = formContext.getAttribute("msa_typeofcase");
    var installationValue = 805430001;

    if (caseType !== null && caseType !== undefined) {
        var caseTypeValue = caseType.getValue();
        if (caseTypeValue === installationValue) {
            return;
        }
    }

    if (WarrantyStatus === null) {
        return;
    }

    var formType = formContext.ui.getFormType();

    var FORM_TYPE_CREATE = 1;
    var FORM_TYPE_UPDATE = 2;
    var FORM_TYPE_READ_ONLY = 3;
    var FORM_TYPE_DISABLED = 4;
    var FORM_TYPE_QUICK_CREATE = 5;
    var FORM_TYPE_BULK_EDIT = 6;

    if (formType === FORM_TYPE_CREATE || formType === FORM_TYPE_UPDATE) {

        var CompareDateVal = new Date();

        var CreatedOn = formContext.getAttribute("createdon");
        var DateLogged = formContext.getAttribute("msa_date");

        var CreatedOnVal = CreatedOn.getValue();
        var DateLoggedVal = DateLogged.getValue();

        if (DateLoggedVal !== null) {
            CompareDateVal = DateLoggedVal; // If available use Date Logged
        }
        else if (CreatedOnVal !== null) {
            CompareDateVal = CreatedOnVal; // else use the Created On Date - Note that createdon is null (new record) then we use the value from when CompareDateVal was declared i.e. Now
        }

        CompareDateVal.setHours(0, 0, 0, 0);

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

        Xrm.WebApi.retrieveRecord("msa_customermachine", lookupid, "").then(
            function success(result) {

                try {

                    var startDate = new Date(result.msa_startdate);
                    var endDate = new Date(result.msa_enddate);

                    startDate.setHours(0, 0, 0, 0);
                    endDate.setHours(0, 0, 0, 0);

                    //alert(startDate);
                    //alert(CompareDateVal);

                    var CurrentStatus = WarrantyStatus.getValue();
                    //alert(WarrantyStatus);

                    if (CompareDateVal >= startDate && CompareDateVal <= endDate) {
                        if (CurrentStatus === false || CurrentStatus === null) {
                            //alert("In Warranty");
                            WarrantyStatus.setValue(true);
                        }
                    }
                    else if (CurrentStatus === true || CurrentStatus === null){
                        //alert("Out of Warranty");
                        WarrantyStatus.setValue(false);
                    }
                }
                catch (err) {
                    Xrm.Navigation.openAlertDialog("An error occured. Function - isInWarranty.\n\nError Details:\n\n" + err);
                    return;
                }

            },
            function (error) {
                Xrm.Navigation.openAlertDialog("An error occured. Function - isInWarranty.\n\nError Details:\n\n" + error.message);
                // handle error conditions
            });
    }
}	


// JavaScript source code


function GetCustomer(context, fromEvent) {

    'use strict';

    //alert(fromEvent);

    var formContext = context.getFormContext(); // get formContext
    var formType = formContext.ui.getFormType();

    var FORM_TYPE_CREATE = 1;
    var FORM_TYPE_UPDATE = 2;

    var customerBlank = false;

    // Only run code on creation of the form or Update

    var customerField = formContext.getAttribute("customerid");
    var customerValue = customerField.getValue();

    if (customerValue === null) {
        customerBlank = true; // No Customer exists
    }

    if (formType === FORM_TYPE_CREATE || formType === FORM_TYPE_UPDATE) {
        if ((customerBlank && fromEvent === "onLoad") || fromEvent == "onChange") {

            // See if Customer Machine has a Value
            var lookupObject = formContext.getAttribute("splash_custmachineid");

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

            Xrm.WebApi.retrieveRecord("msa_customermachine", lookupid, "?$select=_msa_accountid_value").then(function success(result) {

                try {
                    var lookupValue = new Array();

                    // Create Customer Lookup

                    var Customer = result._msa_accountid_value;

                    if (Customer !== null) {
                        //alert("GUID: " + result._lss_school_value);
                        //alert("Logical Name: " + result['_lss_school_value@Microsoft.Dynamics.CRM.lookuplogicalname']);
                        //alert("Text: " + result['_lss_school_value@OData.Community.Display.V1.FormattedValue']);

                        lookupValue[0] = new Object();
                        lookupValue[0].id = result._msa_accountid_value;
                        lookupValue[0].name = result['_msa_accountid_value@OData.Community.Display.V1.FormattedValue'];
                        lookupValue[0].entityType = result['_msa_accountid_value@Microsoft.Dynamics.CRM.lookuplogicalname'];

                        customerField.setValue(lookupValue);

                    }
                }
                catch (err) {
                    Xrm.Navigation.openAlertDialog("An error occured. Function - getCustomer.\n\nError Details:\n\n" + err);
                    return;
                }
            },
                function (error) {
                    Xrm.Navigation.openAlertDialog("An error occured. Function - getCustomer.\n\nError Details:\n\n" + error.message);
                    // handle error conditions
                });
        }
    }
}

