<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.CustomActivityPage"  %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<html xmlns:Crm>
<head>
<title><loc:Text ResourceId="Web.SFA.Workflow.CustomActivityForm.Title" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
Sys.Application.add_load(PageOnLoad);
function PageOnLoad() {
	var crmForm = $get("crmForm");
	crmForm.style.height = '100%';
	var crmFormCtrl = $find("crmForm");
	crmFormCtrl.detachCloseAlert();
	crmFormCtrl.add_onSave('onsave', saveAndClose);
	attachWindowOnBeforeUnload(OnClose);
	attachWindowOnUnload(OnPageUnload);
	var activityName = GetValueForTag("activityname=");
	var workflowId = GetValueForTag("workflowId=");
	var readOnlyForm = GetValueForTag('readonlymode=');
	if (readOnlyForm == 'true')
	{
		SetReadOnlyForm(true);
	}
	
	GenerateCustomActivityTypeMapping (workflowId, activityName);
	$addHandler($get('ShowHideImage'), "click", ToggleGridWidth);
	// Retrieve the stored slug information and populate the controls
	PopulateSlugControls($get("hidSlugInfo").value);
	if (readOnlyForm != 'true')
	{
		SetFocusOnFirstControl();
		SetFieldFocusAtOnLoad(document.activeElement);	  
	}
}
//Adjust the width of grid dynamically as Form assistant is expanded or collapsed. '208px'/'25px' are taken from the width of relatedInformationPane in relatedInformation.css.aspx.
function ToggleGridWidth() {
	var gridContainer = $get("gridContainer");
	if (LOCID_UI_DIR === "RTL")
		if (gridContainer.style.left == "208px" || gridContainer.style.left == "")
			gridContainer.style.left = "27px";
		else
			gridContainer.style.left = "208px";
	else
		if (gridContainer.style.right == "208px" || gridContainer.style.right == "")
			gridContainer.style.right = "27px";
		else
			gridContainer.style.right = "208px";
}
function saveAndClose(rawEvent) {
	var e = new Sys.UI.DomEvent(rawEvent);
	e.preventDefault();
	$find("crmForm").set_bypassValidation(true);
	SaveAndCloseCustomStepConfiguration();
}
function SetFocusOnFirstControl()
{
	var parameterContainer = $get("crmGrid_divDataBody");
	var i;
	if(IsNull(parameterContainer))
	{
		return;
	}
	
	var childNodes = parameterContainer.getElementsByTagName('*');
	for (i = 0; i < childNodes.length; i++) 
	{
		var element = childNodes[i];
		if(!IsNull(element.id) && element.id.indexOf("ParameterValue") ==0 && element.tagName!="TD")     
		{
			if(element.style.display!="none" && element.style.visibility!="hidden" && !element.getAttribute("isDisabled"))
			{
				SetFieldFocus(element);
			}
			break;
		}
	}
}
function OnClose(oEvent)
{
	oEvent = oEvent.rawEvent;
	
	if ($find("crmForm").get_bypassValidation() || CheckParameters()) {
		return;
	}
	oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
	return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}
function OnPageUnload() {
	$removeHandler($get('ShowHideImage'), "click", ToggleGridWidth);
}
</script>
<style>
.gridContainer
{
	position:absolute;
	top:104px;
	bottom:0px;
	<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
			right: 0px;
			left: 208px;
		<% } else { %>
			left:0px;
			right:208px;
		<% } %>
}
.ms-crm-Form-Area
{
	<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
		float:left;
	<% } else { %>
		float:right;
	<% } %>
}
</style>
</head>
<body>
<div class="ms-crm-Form-Layout">
		<div >
			<mnu:AppGenericMenuBar id="crmMenuBar" runat="server" />
		</div>
		<div class="ms-crm-Form-Background">
				<div id="areaForm">
						<div id="gridContainer" class="gridContainer" >
						<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
						<cnt:AppGrid id="crmGrid" runat="server" name="crmGrid" supressfetch="true"/></div>
						</div>
						<div class="ms-crm-Form-Area" id="formContainer" style="height:auto">
								<frm:CustomActivityForm id="crmForm" class="ms-crm-Form" runat="server">
								</frm:CustomActivityForm>
						</div>
				</div>
		</div>
</div>
<input type="hidden" id="hidSlugInfo" value="<%=SlugInfo%>" />
<span style="display:none">
	<ui:Select id="sourceHiddenPicklist" name="sourceHiddenPicklist" runat="server" />
</span>
</body>
</html>
