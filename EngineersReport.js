function ShowHideChecklist(executionContext) {
	
	var formContext = executionContext.getFormContext();
	
	var ChecklistType = formContext.getAttribute("tal_checklisttype").getValue();
	
   if(ChecklistType === 805430000) {
       formContext.ui.tabs.get("Horizontal").setVisible(true);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
   else if(ChecklistType === 805430001) {
       formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(true);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
   else if(ChecklistType === 805430002) {
       formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(true);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
   else if (ChecklistType === 805430004) {
	   formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(true);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
   else if (ChecklistType === 805430005) {
	   formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(true);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
   else if (ChecklistType === 805430006) {
	   formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(true);
   }
   else {
	   formContext.ui.tabs.get("Horizontal").setVisible(false);
	   formContext.ui.tabs.get("Vertical").setVisible(false);
	   formContext.ui.tabs.get("RefurbAssess").setVisible(false);
	   formContext.ui.tabs.get("RefurbInspect").setVisible(false);
	   formContext.ui.tabs.get("Compactor").setVisible(false);
	   formContext.ui.tabs.get("RefurbCombined").setVisible(false);
   }
}


function ShowHideActionComplete(executionContext) {

	//alert("ShowHideActionComplete");

	var formContext = executionContext.getFormContext();

	var ChecklistType = formContext.getAttribute("tal_checklisttype").getValue();

	if (ChecklistType === 805430006) {

		if (formContext.getAttribute("tal_preusedpicturestaken").getValue() === 805430001) { // No from Yes/ NO /N/A
			formContext.getControl("tal_completed01").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted01").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed01").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted01").setVisible(false);
		}
	}

	if (ChecklistType === 805430006) {

		if (formContext.getAttribute("tal_preusedpicturestaken").getValue() === 805430001) { // No from Yes/ NO /N/A
			formContext.getControl("tal_completed02").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted02").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed02").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted02").setVisible(false);
		}
	}
}

function SetEngineer(executionContext, Number) {

	//alert("ShowHideActionComplete");

	var formContext = executionContext.getFormContext();

	var userSettings = Xrm.Utility.getGlobalContext().userSettings;

	var currentuserid = userSettings.userId;
	var username = userSettings.userName;

	var FieldValue = formContext.getAttribute("tal_completed" + Number).getValue();

	//alert(FieldValue);

	if (FieldValue === true) {
		formContext.getAttribute("tal_engineerwhocompleted" + Number).setValue(username);
	}
	else {
		formContext.getAttribute("tal_engineerwhocompleted" + Number).setValue("");
	}
}

