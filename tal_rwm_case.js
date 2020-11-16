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

        var CreatedOn = formContext.getAttribute("createdon");

        alert(CreatedOn.getvalue());


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

                    var nowDate = new Date();
                    var startDate = new Date(result.msa_startdate);
                    var endDate = new Date(result.msa_enddate);

                    nowDate.setHours(0, 0, 0, 0);
                    startDate.setHours(0, 0, 0, 0);
                    endDate.setHours(0, 0, 0, 0);

                    if (nowDate >= startDate && nowDate <= endDate) {
                        //alert("In Warranty");
                        WarrantyStatus.setValue(true);
                    }
                    else {
                        //alert("Out of Warranty");
                        WarrantyStatus.setValue(false);
                    }
                }
                catch (err) {
                    Xrm.Utility.alertDialog("An error occured. Function - isInWarranty.\n\nError Details:\n\n" + err);
                    return;
                }

            },
            function (error) {
                Xrm.Navigation.openAlertDialog("An error occured. Function - isInWarranty.\n\nError Details:\n\n" + error.message);
                // handle error conditions
            });
    }
}	
