
<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Workflow.FetchQuery.FetchQueryPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Workflow.FetchQuery" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
	Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>
<html xmlns:crm>
<head>
	<title>
		<loc:text resourceid="Title_FetchQuery" runat="server" />
	</title>
	<cnt:appheader id="crmHeader" runat="server" />
	<style type="text/css">
		
		<%--The page renders in quirks mode and we will modify the css used in the quirks mode--%>
		.ms-crm-AFContainer
		{
			<% if(!advFind.Disabled) { %>
				bottom:30px;
			<% } %>
		}
		
		div.ms-crm-Tab
		{
			padding:0px !important;
		}
	
	</style>
	<script language="javascript" type="text/javascript">
var mode = "advancedfind";	// 2 types of modes: advancedfind, fetchquery
var initialReturnXml = "";
var saveAndClose = false;
var isdirtyvar = false;
Sys.Application.add_load(PageLoad);
function PageLoad() {
	attachWindowOnBeforeUnload(Window_OnBeforeUnload);

	<%
	//Attach events to the adv find control only if it is not disabled
	if(!advFind.Disabled)
	{
	%>	
		//Set the URL to the results page
		var resultRender = $get("resultRender");
		resultRender.action = Mscrm.CrmUri.create("/AdvancedFind/fetchData.aspx?dispActions=false&dispMenuBar=false").toString();
		
	<%
	} 
	%>
	var firsttab = document.getElementById("tab0Tab");

	$addHandler(firsttab, "click", FirstTabCheck);
	if(document.readyState == "complete"){
		performQueryOperationsOnload();
	}
	else {
		//Attach the readystatechange handler if document is still in interactive state.
		$addHandler(document, "readystatechange", AfterPageLoad);
		attachWindowOnUnload(OnPageUnload);
	}

	$get("crmForm").style.height = "100%";
	var fetchQryQueryDetails = $get("fetchQryQueryDetails");
	$get("rowDesign").style.top = (fetchQryQueryDetails.offsetTop + fetchQryQueryDetails.offsetHeight) + "px";
	var crmFormCtrl = $find("crmForm");
	crmFormCtrl.detachCloseAlert();
	crmFormCtrl.add_onSave(save);
	crmFormCtrl.set_bypassValidation(true);
	initialReturnXml = GenerateInitialReturnXML();

	$addHandler(document.getElementById("divAttributes"), "scroll", scrollConditions);
	var readOnlyForm = GetValueForTag('readonlymode=');
	if (readOnlyForm == 'true') {
		disableAllFields();
	}
	$addHandler(window, "unload", function(){
		$removeHandler($get("tab0Tab"), "click", FirstTabCheck);
		$removeHandler($get("tab1Tab"), "click", putFetchInTextArea);
		$removeHandler($get("divAttributes"), "scroll", scrollConditions);

	});
}

function OnPageUnload() {
		$removeHandler(document, 'readystatechange', AfterPageLoad);
	}

//Execute performQueryOperationsOnload() for IE9 Standard mode if document.readyState is complete.
function AfterPageLoad()
{
	if(document.readyState == "complete"){
		performQueryOperationsOnload();
	}
}

// The content of the form is not disabled with ID of the form, so using all control ids to disable
function disableAllFields()
{
	SetReadOnlyForm(true);
	var disable = Mscrm.Utilities.enableDisableDomElement;
	disable($get("fetchQryQueryDetails"), true);
	disable($get("fetchQryStatementLabel"), true);
	disable($get("fetchQryGeneralSection"), true);
	disable($get("advFind"), true);
	disable($get("buttonBack"), true);
	disable($get("buttonRun"), true);
	disable($get("entityDescription"), true);
	disable($get("crmForm"), true);
	disable($get("crmTabBar"), true);
	disable($get("resultFrame"), true);
}

function performQueryOperationsOnload()
{
	var advanceTab = $get("tab1Tab");
	var loadXml = "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXml)%>";
	var advFind = $find("advFind");
	advFind.set_fetchXml(CrmEncodeDecode.CrmXmlDecode(loadXml));
	var loadLayout = "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchLayout)%>";
	if ((typeof (loadLayout) != "undefined") && (null != loadLayout) && (loadLayout != ""))
	{
		advFind.set_layoutXml(CrmEncodeDecode.CrmXmlDecode(loadLayout));
	}
	var advanceXml =  "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(tableXml)%>";
	if(advanceXml != "")
	{
		//show advanced mode tab
		Mscrm.Utilities.click(advanceTab);
		setupConditionTable(CrmEncodeDecode.CrmXmlDecode(advanceXml));
		//we need to clear the table as values are all loaded by slugs
		var tableAttributes = $get("tableAttributes");
		var nLength = !IsNull(tableAttributes)? tableAttributes.rows.length : 0;
		var readOnlyForm = GetValueForTag('readonlymode=');
		if(nLength > 0)
		{
			var oSlug = $get("hidSlugInfo");
			var sluginfo =  oSlug.value.split("<;>");
			oSlug.value = "";
			for (var i = 0; i < nLength; i++) 
			{
				var info = sluginfo[i+1];
				//Evaluate each cell box whether it contains a slug element or not. If it doesnt it should be treated as a normal editable textbox
				var infoList = info.split("<:>");
				
				//Retrieve the id of the textbox from the first Part of the split
				//This is necessary as it is possible that Ids are not in sequential order
				var variableIndex = infoList[0].split("Variable")[1];
				
				var oRow = tableAttributes.rows[variableIndex - 1];
				var varValue = document.getElementById(XUI.Html.DomUtils.GetFirstChild(oRow.cells[1]).id);
				var ctrlValue = Mscrm.FormControlInputBehavior.GetElementBehavior(varValue);
				Mscrm.CrmDebug.assert(!IsNull(ctrlValue), "varValue Element Behavior must exist.");

				var slugPosition = infoList[1].search("<slugelement type=\"slug\">");
				if (slugPosition >= 0)
				{
					//Slug is present. Treat it as a slug
					ctrlValue.set_dataValue("");
					//If default value(picklist) slug is prensent replace the querynode name to controlID
                    var slugValueNode = sluginfo[i + 1];
                    var slugValue = slugValueNode.replace(/queryNode/gi, infoList[0]);
                    oSlug.value += "<;>" + slugValue;
				}
				else
				{
					var primitiveSlugTemplate = "<slugelement type=\"primitive\" value=\"";
					var primitiveSlugPosition = infoList[1].search(primitiveSlugTemplate);
					if(primitiveSlugPosition >= 0)
					{// each variable value needs to be first Html decode to decode special characters like &, < etc and then xml decoded twice since slug info is encoded twice
						ctrlValue.set_dataValue(CrmEncodeDecode.CrmXmlDecode(CrmEncodeDecode.CrmXmlDecode(CrmEncodeDecode.CrmHtmlDecode(infoList[1].substring(primitiveSlugPosition + primitiveSlugTemplate.length).split("\"")[0]))));
					}
				}
				if (readOnlyForm == 'true')
				{
					//If readonly mode. Disable the text box
					varValue.setAttribute("disabled", true);
				}
			}
		}
		if(readOnlyForm == 'true' )
		{
			//If read only. Set the slugs to read only form.
			SetReadOnlyForm(true);
		}
		PopulateSlugControls(oSlug.value);
	}
	
	$addHandler(advanceTab, "click", putFetchInTextArea);
}

function Window_OnBeforeUnload(oEvent)
{
	oEvent = oEvent.rawEvent;
	
	if ((!saveAndClose) && GetValueForTag('readonlymode=') != "true")
	{
		var returnXml = GenerateReturnXML();
		if (returnXml != initialReturnXml)
		{
			oEvent.returnValue = (LOCID_FORMS_SAVE_CONFIRM_TITLE);
			return (LOCID_FORMS_SAVE_CONFIRM_TITLE);
		}
	}
}

function save(sender, args)
{
	// event can be null when triggered from file Menu
	if (args)
	{
		args.preventDefault();
	}


	var stepLabelControl = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
	if (stepLabelControl.get_dataValue() == null) {

		alert(LOCID_REQUIRED_FIELD);
		return;
	}

	var windowReturnVal = GenerateReturnXML()
	Mscrm.Utilities.setReturnValue(windowReturnVal);
	if (null == windowReturnVal)
	{
		return;
	}
	saveAndClose = true;
	closeWindow();
}

function GenerateReturnXML()
{
	var sXml = "";
	var TXml = "";
	sXml += "<queryactivity>";
	sXml += GenerateStepLabelXml();
	TXml = GenerateFetchQueryXml();
	if(null == TXml)
	{
		return null;
	}
	sXml += TXml;
	sXml += GenerateModifiedFetchQueryXml(false);
	sXml += "</queryactivity>";
	return sXml;
}

function GenerateInitialReturnXML()
{
	var sXml = "";
	sXml += "<queryactivity>";
	sXml += GenerateStepLabelXml();
	sXml += GenerateInitialFetchQueryXml();
	sXml += GenerateModifiedFetchQueryXml(true);
	sXml += "</queryactivity>";
	return sXml;
}

function GenerateStepLabelXml() {
	var stepLabelControl = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
	var sXml = "<steplabel>" + CrmEncodeDecode.CrmXmlEncode(stepLabelControl.get_dataValue()) + "</steplabel>";

	return sXml;
}
function GenerateFetchQueryXml(){
	var sXml = "";
	var TXml = "";
	
	//we will always send original fetch xml so that it can be used on server side to extract the fetchXml structure etc
	sXml += "<originalFetch>";
	// if any of the fields is empty then no data is returned back
	var advFind = $find("advFind");
	TXml = CrmEncodeDecode.CrmXmlEncode(advFind.get_fetchXml());
	if( null == TXml )
	{
		return null;
	}
	sXml += TXml;
	sXml += "</originalFetch>";
	//We need to store the original Layout for display refer bug 91343.
	sXml += "<originalLayout>";
	sXml += CrmEncodeDecode.CrmXmlEncode(advFind.get_layoutXml());
	sXml += "</originalLayout>";
		
	return sXml;
}

function GenerateModifiedFetchQueryXml(onInitialLoad){
	var sXml = "";
	var advancedFind = document.getElementById("tab0");
	if("none" == advancedFind.style.display.toString())
	{
		//add nodes specific to query advaced mode
		var fetchQuery = document.getElementById("fetchQuery");
		sXml += "<modifiedFetch>" + CrmEncodeDecode.CrmXmlEncode(fetchQuery.getAttribute("defaultValue")) + "</modifiedFetch>";
		var tableAttributes = $get("tableAttributes");
		var nLength = !IsNull(tableAttributes) ? tableAttributes.rows.length : 0;
		if(nLength > 0)
		{
		   //at least one editable condition was defined
		   sXml += "<conditions>";
		   for (var i = 0; i < nLength; i++) 
		   {
			   var oRow = tableAttributes.rows[i];
			   sXml += "<condition>";
			   var controlId=XUI.Html.DomUtils.GetFirstChild(oRow.cells[1]).id;
			   var varValue = document.getElementById(controlId);
			   if (IsDataSlugSpecified(varValue)) 
			   {
					if (onInitialLoad)
					{
						sXml += "<" + controlId + ">" + CrmEncodeDecode.CrmXmlEncode(GetDefaultSlugValue(controlId)) + "</" + controlId + ">";
					}
					else
					{
						var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(varValue));
						Mscrm.CrmDebug.assert(!IsNull(slugBehavior), "SlugBehavior must be defined for varValue.");

						sXml += slugBehavior.get_slugValue();
					}
			   }
			   else
			   {	// The extra Html encode is to handle special characters which needs to be saved in Encoded format to be handled during runtime
					var varValueCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(varValue);
					if (!IsNull(varValueCtrl))
					{
						var data = varValueCtrl.get_dataValue();
						if (!IsNull(data))
						{
							sXml += CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmHtmlEncode(data));
						}
					}
			   }
			   sXml += "</condition>";
		   }
			sXml += "</conditions>";
		}
	}
	
	return sXml;
}

function GenerateInitialFetchQueryXml(){
	var sXml = "";
	sXml += "<originalFetch>";
	sXml += "<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(fetchXml)%>";
	sXml += "</originalFetch>";
	//We need to store the original Layout for display refer bug 91343.
	sXml += "<originalLayout>";
	var advFind = $find("advFind");
	sXml += CrmEncodeDecode.CrmXmlEncode(advFind.get_layoutXml());
	sXml += "</originalLayout>";
	return sXml;
}

// determine if a control has slugs
function IsDataSlugSpecified(dataControl)
{
	var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(dataControl));

	if(slugBehavior)
	{
		return slugBehavior.get_isDataSlug();
	}
	return false;
}

function putFetchInTextArea(oEvent)
{
	if(document.getElementById("tab1").style.display == "block")
	{
		oEvent.stopPropagation();
		return;
	}
	var advFind = $find("advFind");
	if ((advFind.get_fetchXml() != null)) {
		var command = new RemoteCommand("Workflow", "PrepareQueryAdvancedMode");
		command.SetParameter("fetchXml", advFind.get_fetchXml());
		
		var oResult = command.Execute();
		if(oResult.Success)
		{
			var resultXml = oResult.ReturnValue;
			setupConditionTable(resultXml);
		}
	}
	else{
		//dont go to the advanced mode and cancel going to the next tab
		oEvent.stopPropagation();
		return;
	}
}
function setupConditionTable(modifiedFetch)
{
	var oXmlRootDoc = XUI.Xml.LoadXml(modifiedFetch);
	
	//load the attribute table from the conditions node
	var oXmlConditionDoc = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(oXmlRootDoc.documentElement, "conditions", null)));
	var oXsl = null;
	XUI.Xml.Load(Mscrm.CrmUri.create("/SFA/workflow/queryConditions.xsl").toString(), false, function(xmlDoc){oXsl = xmlDoc;}, function(statusCode, xmlDoc){oXsl = null;});
	var divAttributes = $get("divAttributes");
	var oXslt = CreateXslTemplate();
		oXslt.stylesheet = oXsl;
		oXslProc = oXslt.createProcessor();
		oXslProc.input = oXmlConditionDoc;
		oXslProc.transform();
		divAttributes.innerHTML = oXslProc.output;
    //For Picklist datatype, populate options to dropdown from tab0
    var selectElements = divAttributes.getElementsByTagName("SELECT");
    var picklistElements = $get("rowDesign").querySelectorAll(".multipicklist");
    var picklistOptions = [];
    for (var i = 0, length = picklistElements.length; i < length; i++) 
    {
        if (picklistElements[i].hasAttribute("optionsxml")) {
             picklistOptions.push(picklistElements[i]);
        }
    }
    for (var i = 0, length = selectElements.length; i < length; i++) {
        var dataType = selectElements[i].getAttribute("datatype");
        if (dataType == "Picklist") {
             if (picklistOptions[i].hasAttribute("optionsxml")) 
             {
                var selectTag = picklistOptions[i].getAttribute("optionsxml");
                var divTagElement = document.createElement("div");
                divTagElement.id = "divSelectTage";
                divTagElement.innerHTML = selectTag;
                for (var j = 0; j < divTagElement.getElementsByTagName("OPTION").length; j++) {
                    var oOption = document.createElement("OPTION");
                    oOption.text = divTagElement.getElementsByTagName("OPTION")[j].text;
                    oOption.value = divTagElement.getElementsByTagName("OPTION")[j].value;
                    selectElements[i].add(oOption);
                    }
                selectElements[i].value = selectElements[i].getAttribute("value");
             }
         }
     }

	var inputElements = divAttributes.getElementsByTagName("INPUT");
	for(var i = 0, length = inputElements.length; i < length; i++)
	{
		crmCreate(Mscrm.FormInputControl.TextBoxInputBehavior,{},null,null,inputElements[i]);
	}
    for(var i = 0, length = selectElements.length; i < length; i++)
    {
        crmCreate(Mscrm.FormInputControl.SelectInputBehavior,{},null,null,selectElements[i]);
    }

	var nameLabel = document.getElementById("nameLabel");
	var typeLabel = document.getElementById("typeLabel");
	var operatorLabel = document.getElementById("operatorLabel");
	var readOnlyForm = GetValueForTag('readonlymode=');
	if (readOnlyForm != 'true')
	{ //Does not show the text when activated.
		XUI.Html.SetText(nameLabel, LOCID_NAME_LABEL);
		XUI.Html.SetText(typeLabel, LOCID_TYPE_LABEL);
		XUI.Html.SetText(operatorLabel, LOCID_OPERATOR_LABEL);
	}

	enableSlugsForAttributeTable();
	
	//load the modified fetchxml in the display
	var fetchQuery = document.getElementById("fetchQuery");
	if(null != fetchQuery)
	{
		fetchQuery.value = CrmEncodeDecode.CrmXmlDecode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXmlRootDoc.documentElement, "modifiedDisplayFetch", null)));
		fetchQuery.setAttribute("defaultValue", XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXmlRootDoc.documentElement, "modifiedFetch", null)));
	}
}

function modifyPreview(domEvent)  {
	customOnFocusEventModifyPreview(domEvent.target);
}
function scrollConditions() {
	var detailsControl = document.getElementById("detailsControl");
	var tableConditions = document.getElementById("divAttributes");
	if (detailsControl != null && tableConditions != null) {
		detailsControl.style.top = (tableConditions.scrollTop + 14) + "px";
	}
}


function customOnFocusEventModifyPreview(srcElement)
{
	var nameValue = document.getElementById("nameValue");
	var typeValue = document.getElementById("typeValue");
	var operatorValue = document.getElementById("operatorValue");
	XUI.Html.SetText(nameValue, srcElement.getAttribute("attrName"));
	XUI.Html.SetText(typeValue, srcElement.getAttribute("dataType"));
	XUI.Html.SetText(operatorValue, srcElement.getAttribute("attrOperator"));
}
function enableSlugsForAttributeTable()
{
	var tableAttributes = $get("tableAttributes");
	if ((typeof (tableAttributes) != "undefined") && (tableAttributes != null)) {
		var nLength = tableAttributes.rows.length;
		//reset first
		 ResetForQueryAdvacedMode();	
		for (var i = 0; i < nLength; i++) {
		   var oRow = tableAttributes.rows[i];
		   //we get id of the textbox and datatype from the dynamic table
		   var oCell = XUI.Html.DomUtils.GetFirstChild(oRow.cells[1]);
		   var oCellId = oCell.id;
		   AddAttributeTypeMapping(oCellId, oCell.getAttribute("datatype"));
		   AttachAttribute(oCellId);
		   $addHandler(oCell, "change", CellDirty);
		}
	}
}

function AttachAttribute(attribute) {
	var attrControl = window.document.getElementById(attribute);
	$addHandler(attrControl, "focus", OnAttributeFocus);
}
function CellDirty()
{
	isdirtyvar = true;
}

function FirstTabCheck(oEvent)
{
	// If it's coming on Tab click and tab is already visible, then we don't need to go through this function.
	if($get('tab0').style.display !== "none")
	{
		return;
	}
	var readOnlyForm = GetValueForTag('readonlymode=');
	if (readOnlyForm == 'true') 
	{
		oEvent.stopPropagation();
		return;
	}
	if(isdirtyvar == true )
	{
		if(ConfirmTabSwitch())
		{
			oEvent.stopPropagation();
		}
	}
	else
	{
		var tableAttributes = $get("tableAttributes");
		var nLength = !IsNull(tableAttributes) ? tableAttributes.rows.length : 0;
		if(nLength > 0)
		{
		  //at least one editable condition was defined
			for (var i = 0; i < nLength; i++)
			{
				var oRow = tableAttributes.rows[i];
				var controlId=XUI.Html.DomUtils.GetFirstChild(oRow.cells[1]).id;
				var varValue = document.getElementById(controlId);
				if (IsDataSlugSpecified(varValue)) 
				{
				    if(ConfirmTabSwitch())
					{
						oEvent.stopPropagation();
					}
				     break;
				}
			}
		}
	}
}

function ConfirmTabSwitch()
{
	var answer = confirm(LOCID_WARNING_TEXT);
	if (answer)
	{
	  isdirtyvar = false;
	  return false;
	}
	else
	{
	  return true;
	}
}



//The following code is adapted from advFind.aspx
<% 
//render out the functions that work with the adv find control only if adv find is not disabled
if(!advFind.Disabled)
{
%>
	var _oXmlDom;
	
	function ExecuteQuery()
	{
		//check if there is valid fetch xml
		var advFind = $find("advFind");
		var sFetchXml = advFind.get_fetchXml();
		if(sFetchXml==null)
		{
			return;
		}
				
		// Set form inputs to be passed to the results grid and submit them
		var resultRender = $get("resultRender");
			resultRender.FetchXml.value		= sFetchXml;
			resultRender.LayoutXml.value		= advFind.get_layoutXml();
			resultRender.EntityName.value	= advFind.get_entityName();
			resultRender.DefaultAdvFindViewId.value = advFind.get_defaultAdvancedFindViewId();
			resultRender.ViewId.value		= advFind.get_queryId();
			resultRender.ViewType.value		= advFind.get_queryObjectType();
			
			//get the sort attribute and direction from the set the sorting
			_oXmlDom = XUI.Xml.LoadXml(sFetchXml);
			if(!IsNull(_oXmlDom))
			{
				resultRender.SortCol.value = GetOrderNodeAttrAndDirection(_oXmlDom);
			}

		//Show a message to the user while the search is executing
		var resultFrame = window.frames["resultFrame"];
		resultFrame.document.body.innerHTML = "<div style='height:100%;width:100%;position:absolute;'><table height='100%' width='100%' style='cursor:wait'><tr><td valign='middle' align='center'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + LOCID_AF_EXECUTINGSEARCH + "</td></tr></table></div>";
		switchTo("SEARCH");

		window.setTimeout(function(){$get("resultRender").submit();}, 10);
	}
	
	function switchTo(sMode)
	{
		//TODO: once the tabbar supports setting visible we can clean up this code.
		if(sMode=="AF")
		{
			$get("crmTabBar").style.display = "block";
			$get("advancedFind").style.display = "block";
			$get("searchResults").style.display = "none";
		}
		else
		{
			$get("crmTabBar").style.display = "none";
			$get("advancedFind").style.display = "none";
			$get("searchResults").style.display = "block";
		}
	}
	
	
<%
}
%>	
	</script>
</head>
<body scroll="no">
	<form id="resultRender" action="" method="post" target="resultFrame">
	<input type="hidden" name="FetchXml" value="">
	<input type="hidden" name="LayoutXml" value="">
	<input type="hidden" name="EntityName" value="">
	<input type="hidden" name="DefaultAdvFindViewId" value="">
	<input type="hidden" name="ViewId" value="">
	<input type="hidden" name="ViewType" value="">
	<input type="hidden" name="SortCol" value="">
	</form>

	<div class="stdTable">
		<div style="height:49px">
			<mnu:appgenericmenubar id="crmMenuBar" runat="server" />
		</div>
		<div class="outerTable ms-crm-absolutePosition" style="top:49px">
			<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
			<div style="width:100%;height:100%">
				<div id="fetchQryGeneralSection" style="padding:5px;">
					<table width="100%" cellspacing="0" cellpadding="0">
						<tr>
							<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
								<h4 class="ms-crm-Form">
									<loc:text resourceid="Web.SFA.Workflow.FetchQuery.GeneralSection" runat="server" />
								</h4>
							</td>
						</tr>
					</table>
				</div>
				<div id="fetchQryStatementLabel" style="padding:5px">
					<table width="100%" cellspacing="0" cellpadding="0">
					<colgroup>
						<col width="100px" />
						<col />
					</colgroup>
						<tr class="param">
							<td id="Td2" class="ms-crm-Field-Required">
								<label for="entityDescription">
									<loc:text resourceid="Web.SFA.Workflow.FetchQuery.StatementLabel" runat="server" />
									<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
								</label>
							</td>
							<td>
								<ui:textbox id="entityDescription" tabindex="1" runat="server" />
							</td>
						</tr>
					</table>
				</div>
				<div id="fetchQryQueryDetails" style="padding:5px;">
					<table width="100%" cellspacing="0" cellpadding="0">
						<tr>
							<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
								<h4 class="ms-crm-Form">
									<loc:text resourceid="Web.SFA.Workflow.FetchQuery.QueryDetails" runat="server" />
								</h4>
							</td>
						</tr>
					</table>
				</div>
				<%--top is calculated from the height of above divs--%>
				<div id="rowDesign" class="ms-crm-absolutePosition" style="top:90px;left:5px;right:5px;bottom:10px"> 
					<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
						<div style="height:100%;width:100%">
							<div style="height:22px">
								<div class="ms-crm-TabBar-Cell">
									<cnt:apptabbar id="crmTabBar" runat="server" />
								</div>
							</div>
								<%--top is calculated from the height of above divs--%>
							<div class="ms-crm-absolutePosition" style="top:22px">
									<div id="dummyDiv1" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
										<div class="AdvFind_td_FindBody" style="height:100%">
											<div id="advancedFind" style="height:100%">
												<div class="ms-crm-Tab" id="tab0">
													<div class="ms-crm-absolutePosition" style="top:10px;left:10px;right:10px;bottom:10px">
														<div class="ms-crm-absolutePosition ms-crm-AFContainer" style="padding: 10px;">
															<div id="dummyDiv2" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
																<cnt:appadvancedfind id="advFind" querylistvisible="true" titlevisible="false" includeapiquery="false"
													runat="Server" />
															</div>
														</div>
										<% 
								//Show the Run Search button only if the adv find control is not disabled
								if(!advFind.Disabled)
								{
										%>
														<div class="ms-crm-absolutePosition" style="height:25px;top:auto">
															<div class="AdvFind_td_RunQuery">
																<ui:button id="buttonRun" onclick="ExecuteQuery()" runat="server"></ui:button>
															</div>
														</div>
										<%
								}
										%>
													</div>
												</div>
												<div class="ms-crm-Tab" id="tab1">
													<div class="ms-crm-absolutePosition" style="height:100%;left:0px;right:4px">
														<div class="ms-crm-FormAndRIContainer">
															<div class="ms-crm-FormBodyRIExpanded" style="position:absolute; top:0px; bottom:0px; margin:10px; overflow: hidden;" id="formBodyContainer">
																<div id="dummyDiv3" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
																	<div class="ms-crm-absolutePosition" style="left:10px;right:10px;top:10px;bottom:10px">
																		<div id="dummyDiv4" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
																			<div style="height: 50%;position:relative">
																				<textarea id="fetchQuery" readonly dir="ltr" style="height: 100%; width: 100%" class="ms-crm-absolutePosition">
																				</textarea>
																			</div>
																			<div style="height:10px;"> </div>
																			<div style="height:20px;">
																				<loc:text resourceid="Web.SFA.Workflow.FetchQuery.XMLValues" runat="server" />
																			</div>
																			<div class="picklistSection" style="height: 190px; width: 100%;">
																				<div id="divAttributes" style="background-color: #F3F4F8; height: 100%; width: 100%;
																					border: 1px solid #A5AEB5; overflow: hidden;">
																				</div>
																			</div>
																		</div>
																	</div>
																</div>															
															</div>
															<div id="tdRelatedInformationPane" class="RelatedInformationPaneContainer RelatedInformationPaneExpandedContainer">
																<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
																	<div id="areaForm" style="height: 99%; width: 100%;">
																		<frm:conditionform id="crmForm" runat="server">
																		</frm:conditionform>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
							<%
			//Show the search results tab only if the adv find control is not disabled.
			if(!advFind.Disabled)
			{
							%>
											<div id="searchResults" style="height:100%;display: none">
												<div style="height:100%;width:100%">
													<div class="ms-crm-absolutePosition" style="bottom:30px">
														<div id="dummtDiv2" class="ms-crm-IE7-Height-Fix-Dummy-Container"> 
															<iframe name="resultFrame" id="resultFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>"
																width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
														</div>
													</div>
													<div style="height:25px;top:auto" class="ms-crm-absolutePosition">
														<div class="AdvFind_td_Back">
															<ui:button id="buttonBack" onclick="switchTo('AF')" runat="server"></ui:button>
														</div>
													</div>
												</div>
											</div>
							<%
			}
							%>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
		
			</div>
		</div>

	</div>
		</div>
	<input type="hidden" id="hidSlugInfo" value="<%=SlugInfo%>" />
</body>
</html>

