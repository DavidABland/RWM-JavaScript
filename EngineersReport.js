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

		if (formContext.getAttribute("tal_inspectbalerfordamage").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed02").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted02").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed02").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted02").setVisible(false);
		}

		if (formContext.getAttribute("tal_tapehook").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed03").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted03").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed03").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted03").setVisible(false);
		}

		if (formContext.getAttribute("tal_balertrolleybalerhook").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed04").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted04").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed04").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted04").setVisible(false);
		}

		if (formContext.getAttribute("tal_testrunmachineonallcycles").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed05").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted05").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed05").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted05").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkcompletemechanicalmovementoperation").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed06").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted06").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed06").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted06").setVisible(false);
		}

		if (formContext.getAttribute("tal_testallsafetylocks").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed07").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted07").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed07").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted07").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkalllimitswitchesareserviceableandmakin").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed08").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted08").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed08").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted08").setVisible(false);
		}

		if (formContext.getAttribute("tal_areallsafetycoversintactandsecure").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed09").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted09").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed09").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted09").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkdoorlockingmechanism").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed10").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted10").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed10").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted10").setVisible(false);
		}

		if (formContext.getAttribute("tal_lubricatedoorhingesandmechanicalparts").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed11").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted11").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed11").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted11").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkoperationofloadingandejectingdoors").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed12").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted12").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed12").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted12").setVisible(false);
		}

		if (formContext.getAttribute("tal_lubricateejectorfixings").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed13").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted13").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed13").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted13").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkramcylinders").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed14").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted14").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed14").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted14").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkcompactionplate").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed15").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted15").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed15").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted15").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkturretvalvepressureswitches").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed16").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted16").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed16").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted16").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkstartstopbuttons").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed17").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted17").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed17").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted17").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkpowerpackconditionleaks").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed18").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted18").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed18").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted18").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkhoses").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed19").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted19").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed19").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted19").setVisible(false);
		}

		if (formContext.getAttribute("tal_hydraulichydraulicoillevelcondition").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed20").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted20").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed20").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted20").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkelectricalcontrolbox").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed21").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted21").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed21").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted21").setVisible(false);
		}

		if (formContext.getAttribute("tal_checkconditionofallelectricalwiringcables").getValue() === 805430002) { // Fail from Pass / Fail /N/A
			formContext.getControl("tal_completed22").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted22").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed22").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted22").setVisible(false);
		}

		if (formContext.getAttribute("tal_checksafetywarningdecalsrequired").getValue() === 805430001) { // No from Yes/ NO /N/A
			formContext.getControl("tal_completed23").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted23").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed23").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted23").setVisible(false);
		}

		if (formContext.getAttribute("tal_replacementboltsneeded2").getValue() === 805430001) { // No from Yes/ NO /N/A
			formContext.getControl("tal_completed24").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted24").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed24").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted24").setVisible(false);
		}

		if (formContext.getAttribute("tal_machinetogoforshotblastandpainting").getValue() === 805430001) { // No from Yes/ NO /N/A
			formContext.getControl("tal_completed25").setVisible(true);
			formContext.getControl("tal_engineerwhocompleted25").setVisible(true);
		}
		else {
			formContext.getControl("tal_completed25").setVisible(false);
			formContext.getControl("tal_engineerwhocompleted25").setVisible(false);
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

