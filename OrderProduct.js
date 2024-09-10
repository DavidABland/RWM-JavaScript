// JavaScript source code

function ShowHideonBalerChange(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext

    var BALER = 805430000;

    try {

        var ProductCategory = formContext.getAttribute("tal_productclassification");

        formContext.getControl("tal_saletype").setVisible(false);
        formContext.getControl("tal_warrantyperiod").setVisible(false);
        formContext.getControl("tal_newexistingmachine").setVisible(false);
        formContext.getControl("tal_sitecontact").setVisible(false);

        formContext.getAttribute("tal_saletype").setRequiredLevel("none");
        formContext.getAttribute("tal_warrantyperiod").setRequiredLevel("none");
        formContext.getAttribute("tal_newexistingmachine").setRequiredLevel("none");

        if (ProductCategory === null) {
            return;
        }

        var ProductCategoryValue = ProductCategory.getValue();

        if (ProductCategoryValue !== null) {
            if (ProductCategoryValue === BALER) {
                formContext.getControl("tal_saletype").setVisible(true);
                formContext.getControl("tal_warrantyperiod").setVisible(true);
                formContext.getControl("tal_newexistingmachine").setVisible(true);
                formContext.getControl("tal_sitecontact").setVisible(true);

                formContext.getAttribute("tal_saletype").setRequiredLevel("required");
                formContext.getAttribute("tal_warrantyperiod").setRequiredLevel("required");
                formContext.getAttribute("tal_newexistingmachine").setRequiredLevel("required");
            }
            else {
                formContext.getControl("tal_saletype").setVisible(false);
                formContext.getControl("tal_warrantyperiod").setVisible(false);
                formContext.getControl("tal_newexistingmachine").setVisible(false);
                formContext.getControl("tal_sitecontact").setVisible(false);

                formContext.getAttribute("tal_saletype").setRequiredLevel("none");
                formContext.getAttribute("tal_warrantyperiod").setRequiredLevel("none");
                formContext.getAttribute("tal_newexistingmachine").setRequiredLevel("none");
            }
        }
    }
    catch (err) {
            var alertStrings = { confirmButtonLabel: "OK", text: err, title: "An error occured: GetProductCategory." };
            var alertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
            return;
        }
    }


function GetProductCategoryFromProduct(context) {

    'use strict';

    var formContext = context.getFormContext(); // get formContext

    var formType = formContext.ui.getFormType();

    var FORM_TYPE_CREATE = 1;
    var FORM_TYPE_UPDATE = 2;
    var FORM_TYPE_READ_ONLY = 3;
    var FORM_TYPE_DISABLED = 4;
    var FORM_TYPE_QUICK_CREATE = 5;
    var FORM_TYPE_BULK_EDIT = 6;

    var BALER = 805430000;

    var isWriteIn = true;

    try {

        var WriteInProduct = formContext.getAttribute("isproductoverridden");
        var Product = formContext.getAttribute("productid");
        var ProductCategory = formContext.getAttribute("tal_productclassification");

        if (Product === null || ProductCategory === null) {
            return;
        }

        var WriteInProductValue = WriteInProduct.getValue();

        if (WriteInProductValue !== isWriteIn) {

            if (formType === FORM_TYPE_CREATE || formType === FORM_TYPE_UPDATE || formType === FORM_TYPE_QUICK_CREATE) {

                var ProductValue = Product.getValue();

                // Check Product is entered

                if (ProductValue !== null) {

                    var ProductID = ProductValue[0].id

                    // Retrieve category from Product

                    Xrm.WebApi.retrieveRecord("product", ProductID, "?$select=tal_productclassification,name").then(
                        function success(result) {
                            if (result.tal_productclassification !== null) {
                                //alert(result.tal_productclassification);
                                ProductCategory.setValue(result.tal_productclassification);
                                ShowHideonBalerChange(context);
                            }
                            else {
                                ProductCategory.setValue(null);
                                ShowHideonBalerChange(context);
                            }
                        },
                        function (error) {
                            // handle error conditions
                            var alertStrings = { confirmButtonLabel: "OK", text: error.message, title: "Error retrieving Product" };
                            var alertOptions = { height: 120, width: 260 };
                            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
                        }
                    );
                }
                else {
                    // If no product entered then set category to blank.
                    ProductCategory.setValue(null);
                    ShowHideonBalerChange(context);
                }

            }
        }
        ShowHideonBalerChange(context);
    }

    catch (err) {
        var alertStrings = { confirmButtonLabel: "OK", text: err, title: "An error occured: GetProductCategory." };
        var alertOptions = { height: 120, width: 260 };
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
        return;
    }
}
