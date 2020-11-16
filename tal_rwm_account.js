// JavaScript source code

function UpdateLastAddressDate(context) {

    'use strict';
	
	// Used to trigger workflows that don't trigger on Address 2 changes

    var formContext = context.getFormContext(); // get formContext
    var LastDate = formContext.getAttribute("tal_lastaddressupdate");
	
	var d = new Date();

    if (LastDate !== null) {
        LastDate.setValue(d);
    }
    else {
        return;
    }
}