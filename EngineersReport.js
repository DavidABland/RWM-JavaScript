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