// JavaScript source code

function isInWarranty(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext
    var lookupObject = formContext.getAttribute("splash_custmachineid");
    var WarrantyStatus = formContext.getAttribute("msa_machineinwarranty");

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
