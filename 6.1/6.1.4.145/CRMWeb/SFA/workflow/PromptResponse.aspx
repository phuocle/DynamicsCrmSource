<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.PromptResponsePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
	Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
	<title>
		<loc:text resourceid="Title_PromptResponse" runat="server" />
	</title>
	<cnt:appheader id="crmHeader" runat="server" />
    
    <style>
		.ms-crm-checkboxoverride
		{
			margin: 5px 0px 0px 1px;
			padding: 0px         
		}
    </style>
	<script language="Javascript" type="text/javascript">
		var _columnSeparator = null;
		var _dataTypeSelectorDisabled = false;
		Pair = function(_key, _value)
		{
			this.key =_key;
			this.value = _value;
		};
		Pair.prototype = { key : null, value : null };
		Sys.Application.add_load(PageLoad);
		Sys.Application.add_load(PageOnLoad);
		var initialReturnXml = "";
		var saveAndClose = false;
		var IsOnload = false;
		var isCrmType = false;
		// This contains the list of all data types and their corresponding values
		// This is populated onload of the page
		var dataTypeMap = [];
		// DateTimeControl.cs
		var _responseTextDefault4 = null;
		var _responseTextDefault3 = null;
		function PageLoad() {
			_responseTextDefault3 = Mscrm.FormControlInputBehavior.GetBehavior("responseTextDefault3");
			_responseTextDefault4 = Mscrm.FormControlInputBehavior.GetBehavior("responseTextDefault4");
			//this is to bring the already opened condition window to the foreground
			window.focus();
			//Enable response controls on the basis of selected container type
			IsOnload = true;
			populateDataTypeMap();
			bindingChanged();
			responseTypeChanged();
			enableDisableDataTypeSelectorOnLoad();
			showHideDefaultResponseTextboxes();
			queryVariableChanged();
			modifyPreview();
			var responsePicklist = $find("responsePicklistValues");
			if ((typeof (LOCID_STATIC_VALUE_XML) != "undefined") && (LOCID_STATIC_VALUE_XML != null)) {
				responsePicklist.set_dataXml(LOCID_STATIC_VALUE_XML);
			}
			var menuBar = $find('menuBarmnuBar');
			var saveCloseButton = $get('_MBSave');
			if (!IsNull(menuBar) && !IsNull(saveCloseButton))
			{
				menuBar.disableItem(saveCloseButton, true);
			}
			$get('queryPreview').disabled = true;
			$get('crmForm').style.height = "100%";
			var crmFormCtrl = $find("crmForm");
			crmFormCtrl.detachCloseAlert();
			crmFormCtrl.add_onSave(save);
			crmFormCtrl.set_bypassValidation(true);
			document.getElementById("entityDescription").focus();
			//set IsOnload to false
			IsOnload = false;
		}
		// Populates the dataTypeMap dictionary by mapping the option value to the corresponding text
		function populateDataTypeMap() {
			var dataTypeSelector = document.getElementById("dataTypeSelector");
			if(!IsNull(dataTypeSelector)) {
				for(var index = 0; index < dataTypeSelector.options.length; index++) {
					var option = dataTypeSelector.options[index];
					dataTypeMap.push(new Pair(option.value.toString(), option.text));
				}
			}
		}
		function Window_OnBeforeUnload(oEvent) {
			oEvent = oEvent.rawEvent;
			
			if ((!saveAndClose) && GetValueForTag('readonlymode=') != "true") {
				var returnXml = GenerateXml(null);
				if (compareReturnXmlInitialReturnXml(returnXml)) {
					oEvent.returnValue = (LOCID_FORMS_SAVE_CONFIRM_TITLE);
					return (LOCID_FORMS_SAVE_CONFIRM_TITLE);
				}
			}
		}
		function compareReturnXmlInitialReturnXml(returnXML)
		{
			var returnValue = true;
			var decodeInitialReturnXml = CrmEncodeDecode.CrmXmlDecode(initialReturnXml);
			var decodeReturnXML = CrmEncodeDecode.CrmXmlDecode(returnXML);
			returnValue = returnValue && (returnXML != initialReturnXml);
			//The following two conditions are added due to the current functionality suppressing the carriage return. Once the bug is fixed, have to delete these two conditons 
			returnValue = returnValue && (decodeInitialReturnXml.replace("</slugelement><slugelement type=\"primitive\" value=\"&#13;&#10;\"/>","</slugelement>") != decodeReturnXML);
			returnValue = returnValue && (decodeInitialReturnXml.replace("</slugelement><slugelement type=\"primitive\" value=\"&#13;&#10;&#13;&#10;\"/>","</slugelement>") != decodeReturnXML);
			return returnValue;
		}
		function addHyperlinkPrompt() {
			addHyperlink("promptText");
		}
		function addHyperlinkCue() {	
			addHyperlink("cueText");
		}
		function save(sender, args)
		{
			// event can be null when triggered from file Menu
			if (args)
			{
				//suppress form submit event	
				args.preventDefault();
			}//window.event can be null when triggered from file Menu
			var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
			if (stepLabel.get_dataValue() == null) {
				alert(LOCID_REQUIRED_FIELD);
				return;
			}
			// LATER: replace this when slugsupport.htc in converted.
			if ((Mscrm.FormControlInputBehavior.GetBehavior("promptText").get_dataValue() == null) && !IsDataSlugSpecified($get("promptText"))) {
				alert(LOCID_REQUIRED_FIELD);
				return;
			}
			if(isCrmType)
			{
				var entity =  Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_EntitySelector").get_dataValue();
				var attribute = Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_AttributeSelector").get_dataValue();
				if (isNullOrEmptyString(entity) || isNullOrEmptyString(attribute)) 
				{
					alert(LOCID_REQUIRED_FIELD)
					return;
				}
			}
			Mscrm.Utilities.setReturnValue(GenerateXml(null));
			saveAndClose = true;
			closeWindow();
		}
		function PageOnLoad() {
			attachWindowOnBeforeUnload(Window_OnBeforeUnload);
			GeneratePromptResponseTypeMapping();
			AttachPromptPageAttributes();
			SetTrimValuesTxtBoxes();
			var readOnlyForm = GetValueForTag('readonlymode=');
			if (readOnlyForm == 'true') {
				disableAllFields();
			}
			// Retrieve the stored slug information and populate the controls
			PopulateSlugControls($get('hidSlugInfo').value);
			initialReturnXml = GenerateXml("Initial");
			var menuBar = $find('menuBarmnuBar');
			var saveCloseButton = $get('_MBSave');
			if (!IsNull(menuBar) && !IsNull(saveCloseButton))
			{
				menuBar.disableItem(saveCloseButton, false);
			}
		}
		function AttachPromptPageAttributes()
		{
			AttachAttribute("promptText");
			AttachAttribute("cueText");
			AttachAttribute("responseTextDefault0");
			AttachAttribute("responseTextDefault1");
			AttachAttribute("responseTextDefault2");
			_responseTextDefault3.add_focus(OnAttributeFocus);
			_responseTextDefault4.add_focus(OnAttributeFocus);
		}
		function AttachAttribute(attribute) {
			var attrControl = window.document.getElementById(attribute);
			$addHandler(attrControl, "focus", OnAttributeFocus);
		}
		function SetTrimValuesTxtBoxes()
		{
			// "responsePicklistValues_txtItemVal2" is id for the text box. If it is changed at the server side it has to be changed here also. 
			$find("responsePicklistValues").SetTrimValuesTxtBoxes();
		}
		// The content of the form is not disabled with ID of the form, so using all control ids to disable
		function disableAllFields() {
			SetReadOnlyForm(true);
			$find("responsePicklistValues").set_disabled(true);
			document.getElementById("responseTypeSelector").disabled = true;
			document.getElementById("dataTypeSelector").disabled = true;
			document.getElementById("entityDescription").disabled = true;
			document.getElementById("promptText").disabled = true;
			document.getElementById("cueText").disabled = true;
			document.getElementById("responseTextDefault0").disabled = true;
			document.getElementById("responseTextDefault1").disabled = true;
			document.getElementById("responseTextDefault2").disabled = true;
			Mscrm.Utilities.enableDisableDomElement(document.getElementById('labelDefault2'), true);
			_responseTextDefault4.set_disabled(true);
			_responseTextDefault3.set_disabled(true);
			document.getElementById("radioLogResponseYes").disabled = true;
			document.getElementById("radioLogResponseNo").disabled = true;
			document.getElementById("radioBindingStatic").disabled = true;
			document.getElementById("radioBindingQuery").disabled = true;
			document.getElementById("dataQuerySelector").disabled = true;
			_columnSeparator = Mscrm.FormControlInputBehavior.GetBehavior("columnSeparator");
			_columnSeparator.set_disabled(true);
		}
		//////////////////////////////////////////////////////////////
		////SECTION: Helper function//////////////////////////
		/////////////////////////////////////////////////////////////
		function GetSeparator() {
			_columnSeparator = Mscrm.FormControlInputBehavior.GetBehavior("columnSeparator");
			if (_columnSeparator.get_dataValue() == null)
				return "";
			return CrmEncodeDecode.CrmXmlEncode(_columnSeparator.get_dataValue());
		}
		//get semicolon separated selected column list to send to the server
		function GetColumnList() {
			var list = "";;
			var tableAttributes = $get('tableAttributes');
			if ((typeof (tableAttributes) != "undefined") && (tableAttributes != null)) {
				// Keep track of original role set
				var nLength = tableAttributes.rows.length;
				for (var i = 0; i < nLength; i++) {
					var oRow = tableAttributes.rows[i];
					if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked) {
						list += XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).id + ";";
					}
				}
				if (list != "") {
					list = list.slice(0, list.length - 1);
				}
			}
			return list;
		}
		function modifyPreview() {
			var list = "";
			_columnSeparator = Mscrm.FormControlInputBehavior.GetBehavior("columnSeparator");
			var separator = (_columnSeparator.get_dataValue() == null) ? "" : _columnSeparator.get_dataValue();
			var tableAttributes = $get('tableAttributes');
			if ((typeof (tableAttributes) != "undefined") && (tableAttributes != null)) {
				// Keep track of original role set
				var nLength = tableAttributes.rows.length;
				for (var i = 0; i < nLength; i++) {
					var oRow = tableAttributes.rows[i];
					if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[0]).checked) {
						if (list != "") {
							list += separator;
						}
						list += XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(oRow.cells[1]));
					}
				}
			}
			var queryPreviewControl = Mscrm.FormControlInputBehavior.GetBehavior("queryPreview");
			queryPreviewControl.set_dataValue(list);
			$get('queryPreview').title = list;
		}
		//////////////////////////////////////////////////////////////
		////SECTION: Xml Generation on dialog saving/////////////////
		/////////////////////////////////////////////////////////////
		//Funtion to generate XML returned by the dialog
		function GenerateXml(sVal) {
			var sXml = "";
			sXml += "<interactionactivity>";
			sXml += GenerateStepLabelXml();
			sXml += GeneratePromptXml(sVal);
			sXml += GenerateResponseXml(sVal);
			sXml += "</interactionactivity>";
			return sXml;
		}
		function GenerateStepLabelXml() {
			var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
			var sXml = "<steplabel>" + CrmEncodeDecode.CrmXmlEncode(stepLabel.get_dataValue()) + "</steplabel>";
			return sXml;
		}
		//Function to add Prompt node in interaction XML returned by the dialog
		function GeneratePromptXml(sVal) {
			var sXml = "<prompt>";
			var prompt = document.getElementById("promptText");
			var cue = document.getElementById("cueText");
			sXml += GetXmlForSlugifiedControl(prompt, "promptText", sVal);
			sXml += GetXmlForSlugifiedControl(cue, "cueText", sVal);
			sXml += "</prompt>";
			return sXml;
		}
		
		function GetXmlForSlugifiedControl(control, controlId, sVal)
		{
			var sXml = "";			
			if (IsDataSlugSpecified(control)) {
				if (sVal != "Initial")
				{
					var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control));
					sXml += slugBehavior.get_slugValue();
				}
				else
					sXml += "<" + controlId + ">" + CrmEncodeDecode.CrmXmlEncode(GetDefaultSlugValue(controlId)) + "</" + controlId + ">";
			}
			else {
				var ajaxCtrl = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
				var dataValue = ajaxCtrl.get_dataValue();
				if(IsDateControl(control))
					sXml += "<" + controlId + ">" + (dataValue != null ? CrmEncodeDecode.CrmXmlEncode(FormatDateTime(dataValue)) : "") + "</" + controlId + ">";
				else
					sXml += "<" + controlId + ">" + (dataValue != null ? CrmEncodeDecode.CrmXmlEncode(dataValue) : "") + "</" + controlId + ">";
			}
			return sXml;
		}
		
		function GenerateResponseXml(sVal) {
			var sXml = "<response>";
			var responseType = Mscrm.FormControlInputBehavior.GetBehavior("responseTypeSelector").get_dataValue();
			switch (responseType) {
				case LOCID_CONTAINER_NONE:
					sXml += "<responsecontainer name=\"None\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_TEXT:
					sXml += "<responsecontainer name=\"Textbox\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateDefaultValueXml(sVal);
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_RADIO:
					sXml += "<responsecontainer name=\"Radio\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateOptionSetXml();
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_PICKLIST:
					sXml += "<responsecontainer name=\"Picklist\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateOptionSetXml();
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_MULTILINETEXT:
					sXml += "<responsecontainer name=\"MultilineText\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateDefaultValueXml(sVal);
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_DATEONLY:
					sXml += "<responsecontainer name=\"DateOnly\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateDefaultValueXml(sVal);
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_DATETIME:
					sXml += "<responsecontainer name=\"DateTime\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += GenerateResponseDetailsXml();
					sXml += GenerateDefaultValueXml(sVal);
					sXml += GenerateResponseMetadataBound();
					break;
				case LOCID_CONTAINER_LOOKUP:
					sXml += "<responsecontainer name=\"Lookup\">" + CrmEncodeDecode.CrmXmlEncode(responseType) + "</responsecontainer>";
					sXml += "<responsetype name=\"Lookup\">" + CrmEncodeDecode.CrmXmlEncode(LOCID_RESPONSE_TYPE_LOOKUP) + "</responsetype>";
					sXml+= GenerateResponseLoggingXml();
					sXml += "<responseTextDefault5></responseTextDefault5>"
					sXml += GenerateResponseMetadataBound();
					break;
			}
			sXml += "</response>";
			return sXml;
		}
		function GenerateResponseMetadataBound(){
			var sXml="<responseMetadataBound>";
			if(isCrmType){
				sXml+="1"
				sXml+="</responseMetadataBound>";
				sXml+=GenerateResponseMetadataDetails();
			}
			else{
				sXml+="0";
				sXml+="</responseMetadataBound>";
			}
			return sXml;
		}
		function GenerateResponseMetadataDetails(){
			var sXml = "<responseMetadataBinding><entity>"
			sXml += CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_EntitySelector").get_dataValue());
			sXml += "</entity><attribute>";
			sXml += CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior("prEntityAttribute_AttributeSelector").get_dataValue());
			sXml +="</attribute></responseMetadataBinding>";
			return sXml;
		}
		function GenerateResponseDetailsXml() {
			var sXml = "";
			//insert data type selector
			var dataType = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector").get_dataValue();
			switch (dataType) {
				case LOCID_RESPONSE_TYPE_TEXT:
					sXml += "<responsetype name=\"String\">";
					break;
				case LOCID_RESPONSE_TYPE_INTEGER:
					sXml += "<responsetype name=\"Integer\">";
					break;
				case LOCID_RESPONSE_TYPE_FLOAT:
					sXml += "<responsetype name=\"Decimal\">";
					break;
				case LOCID_RESPONSE_TYPE_DATEONLY:
					sXml += "<responsetype name=\"DateOnly\">";
					break;
				case LOCID_RESPONSE_TYPE_DATETIME:
					sXml += "<responsetype name=\"DateTime\">";
					break;
			}
			sXml += CrmEncodeDecode.CrmXmlEncode(dataType) + "</responsetype>";
			//insert loggiing option
			sXml += GenerateResponseLoggingXml();
			return sXml;
		}
		function GenerateResponseLoggingXml(){
			return "<responselogging>" + CrmEncodeDecode.CrmXmlEncode($get('radioLogResponseYes').checked ? 1 : 0) + "</responselogging>";
		}
		function GenerateDefaultValueXml(sVal) {
			var sXml = "";
			//insert default value
			var dataType = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector").get_dataValue();
			var currentControlId = "responseTextDefault" + dataType;
			var disabled = true;
			var defaultValue = document.getElementById(currentControlId);
			var component = Mscrm.FormControlInputBehavior.GetBehavior(currentControlId);
			if (component && component.get_disabled) {
				disabled = component.get_disabled();	
			} else {
				disabled = defaultValue.disabled;
			}
			
			if (disabled != true) {
				sXml += GetXmlForSlugifiedControl(defaultValue, currentControlId, sVal);
			}
			return sXml;
		}
		
		function GenerateOptionSetXml() {
			var sXml = "";
			sXml += "<binding ";
			if ($get('radioBindingStatic').checked) {
				//default picklist
				sXml += "name = \"defaultvalues\">1</binding>";
				sXml += $find("responsePicklistValues").get_dataXml();
			}
			else {
				//data from query
				sXml += "name = \"querydata\">0</binding>";
				sXml += GenerateQueryResponseXml();
			}
			return sXml;
		}
		function GenerateQueryResponseXml() {
			var sXml = "";
			var oQueryCtrl =  Mscrm.FormControlInputBehavior.GetBehavior('dataQuerySelector');
			if (!IsNull(oQueryCtrl.get_dataValue())) {
				//todo(devandi): encode this and corresponding decode on client side
				sXml += "<querystepid>" + oQueryCtrl.get_dataValue() + "</querystepid>";
				sXml += "<columnList>" + GetColumnList() + "</columnList>";
			}
			sXml += "<separator>" + GetSeparator() + "</separator>";
			return sXml;
		}
		//////////////////////////////////////////////////////////////
		////SECTION: Onchange Event Handlers//////////////////////////
		/////////////////////////////////////////////////////////////
		//Handler for response type selector
		function responseTypeChanged() {
			var responseType = Mscrm.FormControlInputBehavior.GetBehavior("responseTypeSelector").get_dataValue();
			var oDataTypeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector");
			var oDataTypeElement = $get('dataTypeSelector');
			showEntityAttributeControl(false);
			setIfCrmType(responseType);
			showHideResponseTypeControl();
			switch (responseType) {
				case LOCID_CONTAINER_NONE:
					disableAllResponseControls();
					//Need to flush all default response textboxes o/w disabled text might be visible
					flushDefaultResponseTextboxes();
					showHideDefaultResponseTextboxes();
					break;
				case LOCID_CONTAINER_TEXT:
					enableTextResponseControls();
					hideDateAndLookupOptions();
					showHideDefaultResponseTextboxes();
					break;
				case LOCID_CONTAINER_MULTILINETEXT:
					enableTextResponseControls();
					//Disable data type selector for multiline control if not already disabled
					if (!$get('dataTypeSelector').disabled) {
						oDataTypeCtrl.set_dataValue(LOCID_RESPONSE_TYPE_TEXT);
						oDataTypeCtrl.set_disabled(true);
					}
					hideDateAndLookupOptions();
					showHideDefaultResponseTextboxes();
					break;
				case LOCID_CONTAINER_RADIO:
				case LOCID_CONTAINER_PICKLIST:
					enableOptionsResponseControls();
					flushDefaultResponseTextboxes();
					hideDateAndLookupOptions();
					showHideDefaultResponseTextboxes();
					break;
				case LOCID_CONTAINER_DATETIME:
				case LOCID_CONTAINER_DATEONLY:
					handleResponseTypeChangeForDateTime(responseType);
					break;
				case LOCID_CONTAINER_LOOKUP:
					enableTextResponseControls();
					populateDateAndLookupOptions();
					oDataTypeCtrl.set_dataValue(LOCID_RESPONSE_TYPE_LOOKUP);
					showHideDefaultResponseTextboxes();
					showEntityAttributeControl(true);
					break;
			}
		}
		function enableDisableDataTypeSelectorOnLoad() {
			var responseType = Mscrm.FormControlInputBehavior.GetBehavior("responseTypeSelector").get_dataValue();
			var oDataTypeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector");
			switch (responseType) {
				case LOCID_CONTAINER_TEXT:
				case LOCID_CONTAINER_RADIO:
				case LOCID_CONTAINER_PICKLIST:
				case LOCID_CONTAINER_MULTILINETEXT:
					oDataTypeCtrl.set_disabled(true);
					_dataTypeSelectorDisabled = true;
					break;
				default:
					break;
			}
		}
		function handleResponseTypeChangeForDateTime(responseType) {
			enableTextResponseControls();
			populateDateAndLookupOptions();
			var oDataTypeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector");
			oDataTypeCtrl.set_dataValue((responseType == LOCID_CONTAINER_DATETIME) ? LOCID_RESPONSE_TYPE_DATETIME : LOCID_RESPONSE_TYPE_DATEONLY);
			//Disable data type selector for dateOnly control if not already disabled
			if(!oDataTypeCtrl.get_disabled())
			{
				oDataTypeCtrl.set_disabled(true);
			}
			showHideDefaultResponseTextboxes();
		}
		function setIfCrmType(ResponseType){
			switch(ResponseType){
				case LOCID_CONTAINER_LOOKUP:
					isCrmType =true;
					break;
				default:
					isCrmType = false;
			}
		}
		function showHideResponseTypeControl(){
			if(isCrmType){
				$get('selectDataTypeSelector').style.display="none";
			}
			else{
				$get('selectDataTypeSelector').style.display="";
			}
		}
		function showEntityAttributeControl(toShow){
			var entityAttribute = document.getElementById("prEntityAttribute")
			if(toShow){
				$get('DataTypeDefaultRow').style.display = "none";
				$get('responseTextDefault2_container').style.display = "none";
				entityAttribute.style.display = "";
			}
			else{
				$get('DataTypeDefaultRow').style.display = "";
				$get('responseTextDefault2_container').style.display = "";
				entityAttribute.style.display = "none";
			}
		}
		function dataTypeChanged() {
			flushDefaultResponseTextboxes();
			_currentValueControl = null;
			showHideDefaultResponseTextboxes();
		}
		//Flush all default response text boxes
		function flushDefaultResponseTextboxes() {
			clearControl($get('responseTextDefault0'));
			clearControl($get('responseTextDefault1'));
			clearControl($get('responseTextDefault2'));
			clearControl($get('responseTextDefault4'));
			clearControl($get('responseTextDefault3'));
		}
		function clearControl(control) {
			if (IsDataSlugSpecified(control)) {
				Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control)).DeleteDataSlug();
			}
			var ajaxCtrl = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
			ajaxCtrl.set_dataValue(null);
		}
		//hide 2 default response textboxes on the basis of data type selected
		function showHideDefaultResponseTextboxes() {
			var dataType = Mscrm.FormControlInputBehavior.GetBehavior("dataTypeSelector").get_dataValue();
			// For lookup/date/datetime responses, the CurrentValueFormat will be set to LOCID_RESPONSE_TYPE_INTEGER in multivalueformatlistedit.htc
			// This is because the behavior of Value/Label text boxes of this control should be the same for date/datetime/lookup and integer responses
			$find("responsePicklistValues").set_currentValueFormat(dataType);
			//need to maintain 3 labels for accessibility and hide them as well
			switch (dataType) {
				case LOCID_RESPONSE_TYPE_INTEGER:
					showHideLabelsAndTextBoxes(0);
					break;
				case LOCID_RESPONSE_TYPE_FLOAT:
					showHideLabelsAndTextBoxes(1);
					break;
				case LOCID_RESPONSE_TYPE_TEXT:
					showHideLabelsAndTextBoxes(2);
					break;
				case LOCID_RESPONSE_TYPE_DATETIME:
					showHideLabelsAndTextBoxes(3);
					break;
				case LOCID_RESPONSE_TYPE_DATEONLY:
					showHideLabelsAndTextBoxes(4);
					break;
			}
		}
		function showHideLabelsAndTextBoxes(i) {
			for (var j = 0; j <= 4; j++) {
				if (j == i) {
					$get("labelDefault" + j).style.display = "";
					Mscrm.FormControlInputBehavior.GetBehavior("responseTextDefault" + j).setDisplay(true);
				}
				else {
					$get("labelDefault" + j).style.display = "none";
					Mscrm.FormControlInputBehavior.GetBehavior("responseTextDefault" + j).setDisplay(false);
				}
			}
		}
		// Populates all options in the datatype option from the dataTypeMap list.
		// This function is called when we need to show date/lookup in the data type selector
		function populateDateAndLookupOptions() {
			var dataTypeSelector = document.getElementById("dataTypeSelector");
			$get('responseTextDefault2_container').style.display = "none";
			$get('labelDefault2').style.display = "none";
			if(!IsNull(dataTypeSelector)) {
				// Clear the dataTypeSelector option list
				dataTypeSelector.options.length = 0;
				// Add all options
				for(var i = 0; i < dataTypeMap.length; i++) {
					var key = dataTypeMap[i].key;
					var value = dataTypeMap[i].value;
					if(!IsNull(value) && value.length > 0) {
						var optionElement = window.document.createElement("OPTION");
						dataTypeSelector.options.add(optionElement);
						optionElement.title = value;
						optionElement.value = key;
						XUI.Html.SetText(optionElement, value);
					}
				}
			}
		}
		// Populates all options from dataTypeMap except datetime and lookup options.
		// To add more datatypes that behave the same way as datetime/lookup, just insert an OR condition inside the for loop
		// to exclude that datatype from being shown
		function hideDateAndLookupOptions() {
			$get('responseTextDefault2_container').style.display = "";
			$get('labelDefault2').style.display = "";
			var dataTypeSelector = document.getElementById("dataTypeSelector");
			if(!IsNull(dataTypeSelector)) {
				// Store the selected option before clearing the dataTypeSelector list
				var selectedValue = dataTypeSelector.value;
				// Clear the dataTypeSelector option list
				dataTypeSelector.options.length = 0;
				// Add all options except date time and lookup related options
				for(var i = 0; i < dataTypeMap.length; i++) {
					var key = dataTypeMap[i].key;
					if(key == LOCID_RESPONSE_TYPE_DATEONLY || key == LOCID_RESPONSE_TYPE_DATETIME || key == LOCID_RESPONSE_TYPE_LOOKUP) {
						continue;
					}
					else {
						var value = dataTypeMap[i].value;
						if(!IsNull(value) && value.length > 0) {
							var optionElement = window.document.createElement("OPTION");
							dataTypeSelector.options.add(optionElement);
							optionElement.value = key;
							optionElement.title = value;
							XUI.Html.SetText(optionElement, value);
							// make the proper element as the selected element in dataTypeSelector
							optionElement.selected = (key == selectedValue);
						}
					}
				}
			}
		}
		function bindingChanged() {
			if ($get('radioBindingStatic').checked) {
				toggleOptionSetControlVisibility(true);
			}
			else {
				toggleOptionSetControlVisibility(false);
			}
		}
		//Handler for query selector
		function queryVariableChanged() {
			var oQuerySelectCtrl = Mscrm.FormControlInputBehavior.GetBehavior("dataQuerySelector");
			if (oQuerySelectCtrl.get_dataValue() != null) {
				var attributeXml = window[("LOCID_ATTRIBUTES_" + oQuerySelectCtrl.get_dataValue().toString().toUpperCase())];
				var oXmlDoc = XUI.Xml.LoadXml(attributeXml);
				var oXsl = null;
				XUI.Xml.Load(Mscrm.CrmUri.create("/SFA/workflow/queryAttribute.xsl").toString(), false, function(xmlDoc){oXsl = xmlDoc}, function(statusCode, xmlDoc){oXsl = null;});
				
				var oXslt = CreateXslTemplate();
				oXslt.stylesheet = oXsl;
				
				oXslProc = oXslt.createProcessor();
				oXslProc.input = oXmlDoc;
				oXslProc.transform();
				$get('divAttributes').innerHTML = oXslProc.output;
				//display a message if there are no attributes
				if ($get('tableAttributes').rows.length == 0) {
					//todo(devandi): insert message for case when no attribute exists
					$get('divAttributes').innerHTML = "<table class='ms-crm-ListArea' style='text-align:center'><tr><td class='ms-crm-List-Disabled' style='valign:middle'></td></tr></table>";
				}
			}
			modifyPreview();
		}
		/////////////////////////////////////////////////////////////////////////////////////////
		////SECTION: Enable/Visible property changing logic for various scenarios/////////////////
		/////////////////////////////////////////////////////////////////////////////////////////
		function disableResponseControls(isBasicResponseDisabled, isDefaultValueDisabled, isOptionResponseDisabled) {
			//basic response controls and their labels
			$get('radioLogResponseYes').disabled = isBasicResponseDisabled;
			$get('radioLogResponseNo').disabled = isBasicResponseDisabled;
			if (_dataTypeSelectorDisabled && !isBasicResponseDisabled) {
				// Whenever dataTypeSelector is disabled at the server and we do not enable it
				Mscrm.FormControlInputBehavior.GetBehavior('dataTypeSelector').set_disabled(!isBasicResponseDisabled);
			}
			else {
				Mscrm.FormControlInputBehavior.GetBehavior('dataTypeSelector').set_disabled(isBasicResponseDisabled);
			}
			//all three textboxes/numberboxes corresponding to default value
			$get('responseTextDefault0').disabled = isDefaultValueDisabled;
			$get('responseTextDefault1').disabled = isDefaultValueDisabled;
			$get('responseTextDefault2').disabled = isDefaultValueDisabled;
			Mscrm.Utilities.enableDisableDomElement(document.getElementById('labelDefault2'), isDefaultValueDisabled);
			_responseTextDefault4.set_disabled(isDefaultValueDisabled);
			_responseTextDefault3.set_disabled(isDefaultValueDisabled);
			if(!IsOnload)
			{
				flushDefaultResponseTextboxes();
				_currentValueControl = null;
			}
			
			//optionset response controls and their labels
			Mscrm.Utilities.enableDisableDomElement($get('responseDiv'), isOptionResponseDisabled);
			// In IE, still these radio buttons are accessible by tab navgation
			//making these disabled 
			if (isOptionResponseDisabled) 
			{
				$get("radioBindingStatic").setAttribute("disabled", true);
				$get("radioBindingQuery").setAttribute("disabled", true);
			}
			else
			{
				$get("radioBindingStatic").removeAttribute("disabled");
				$get("radioBindingQuery").removeAttribute("disabled");
			}
			$find("responsePicklistValues").set_disabled(isOptionResponseDisabled);
			_columnSeparator = Mscrm.FormControlInputBehavior.GetBehavior("columnSeparator");
			_columnSeparator.set_disabled(isOptionResponseDisabled);
		}
		function disableAllResponseControls() {
			disableResponseControls(true, true, true);
		}
		function enableTextResponseControls() {
			disableResponseControls(false, false, true);
		}
		function enableOptionsResponseControls() {
			disableResponseControls(false, true, false);
		}
		function toggleOptionSetControlVisibility(staticOption) {
			$get('rowResponsePicklistValues').className = (staticOption ? "ms-crm-TableRow-Visible" : "ms-crm-TableRow-Hidden");
			$get('rowDataQueryTextBox').className = (staticOption ? "ms-crm-TableRow-Hidden" : "ms-crm-TableRow-Visible");
			$get('selectDataTypeSelector').disabled = !staticOption;
		}
	</script>
</head>
<body scroll="no">
	<form id="resultRender" action="" method="post" target="resultFrame">
	<input type="hidden" name="interactionXml" value="">
	</form>
	<table cellspacing="0" width="100%" cellpadding="0">
		<tr>
			<td style="padding-bottom: 5px" colspan="2">
				<mnu:appgenericmenubar id="menuBar" runat="server" />
			</td>
		</tr>
	</table>
	<!-- Top of this div is 54px because menu bar has a height 44px and padding 10px, and this div should start after that -->
	<!-- Bottom of this div is 25px because we need to accomodate the RelatedInformationPane -->
	<div style="position: absolute; width: 100%; top: 54px; bottom: 25px;" class="ms-crm-FormAndRIContainer">
		<div class="prDesigner ms-crm-FormBodyContainer ms-crm-FormBodyRIExpanded" id="formBodyContainer">
			<table width="100%" cellspacing="0" cellpadding="5">
							<tr>
								<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
									<h4 class="ms-crm-Form">
										<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.GeneralSection" runat="server" />
									</h4>
								</td>
							</tr>
						</table>
			<table width="100%" cellspacing="0" cellpadding="5">
							<col width="100px">
							<col>
							<tr class="param">
								<td id="Td2" class="ms-crm-Field-Required" style="white-space:nowrap">
									<label for="entityDescription" >
										<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.StatementLabel" runat="server" />
										<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
								</td>
								<td>
									<ui:textbox id="entityDescription" tabindex="1" runat="server" />
								</td>
							</tr>
						</table>
			<table width="100%" cellspacing="0" cellpadding="5">
							<tr>
								<!-- Prompt Details Section title -->
								<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
									<h4 class="ms-crm-Form">
										<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.DetailsSection" runat="server" />
									</h4>
								</td>
							</tr>
						</table>
			<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
							<tr>
								<td>
									<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
										<col width="100px">
										<col>
										<tr class="param">
											<td id="Td5" valign="top">
												<label for="promptText" >
													<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.PromptText" runat="server" />
													<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
												</label>
											</td>
											<td>
												<table class="hyperlinkInserter" cellspacing="0" cellpadding="0" style="height:85px">
													<tr height="25">
														<td>
															<mnu:appgridmenubar id="promptTextMenuBar" runat="server" />
														</td>
													</tr>
													<tr style="height: 100%">
														<td valign="top" style="height: 100%">
															<ui:textarea id="promptText" tabindex="2" TrimValue="false" runat="server" />
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
										<col width="100px">
										<col>
										<tr class="param">
											<td id="Td7" valign="top">
												<label for="cueText" >
													<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.CueText" runat="server" />
												</label>
											</td>
											<td>
												<table class="hyperlinkInserter" cellspacing="0" cellpadding="0" style="height:85px">
													<tr height="25">
														<td>
															<mnu:appgridmenubar id="cueTextMenuBar" runat="server" />
														</td>
													</tr>
													<tr style="height:100%">
														<td valign="top" style="height:100%">
															<ui:textarea id="cueText" tabindex="3" TrimValue="false" runat="server" />
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
			<table width="100%" cellspacing="0" cellpadding="5">
							<tr>
								<!-- Response Details Section title -->
								<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
									<h4 class="ms-crm-Form">
										<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseDetails" runat="server" />
									</h4>
								</td>
							</tr>
						</table>
			<table width="100%" cellspacing="0" cellpadding="5">
									<col width="48%">
									<col>
									<col width="48%">
									<tr>
										<!-- Left column -->
										<td>
											<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<!-- Ownership type -->
												<tr class="param">
													<td id="Td9">
														<label for="responseTypeSelector">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseType" runat="server" />
														</label>
													</td>
													<td>
														<ui:select id="responseTypeSelector" tabindex="4" onchange="responseTypeChanged();"
															runat="server" />
													</td>
												</tr>
											</table>
										</td>
										<!-- Spacer -->
										<td>
											&nbsp;
										</td>
										<!-- Right column -->
										<td>
											<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<tr class="param" id="radioLogging">
													<td id="Td3">
														<label for="radioLogResponse">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.LogResponse" runat="server" />
														</label>
													</td>
													<td>
														<input class="ms-crm-RadioButton" tabindex="5" name="radioLogResponse" runat="server"
															id="radioLogResponseYes" type="radio" value="1" checked>
														<label for="radioLogResponseYes" id="label5">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.LogResponseYes" runat="server" />
														</label>
													</td>
													<td>
														<input class="ms-crm-RadioButton" tabindex="5" name="radioLogResponse" runat="server"
															id="radioLogResponseNo" type="radio" value="0">
														<label for="radioLogResponseNo" id="label6">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.LogResponseNo" runat="server" />
														</label>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr id="DataTypeDefaultRow">
										<!-- Left column -->
										<td>
											<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<!-- Ownership type -->
												<tr id="selectDataTypeSelector" class="param">
													<td id="Td4">
														<label for="dataTypeSelector">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.DataType" runat="server" />
														</label>
													</td>
													<td>
														<ui:select id="dataTypeSelector" tabindex="7" onchange="dataTypeChanged();" runat="server" />
													</td>
												</tr>
											</table>
										</td>
										<!-- Spacer -->
										<td>
											&nbsp;
										</td>
										<!-- Right column -->
										<td>
											<table width="100%" height="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<!-- Plural name -->
												<tr id="rowResponseTextDefault" class="param">
													<td id="Td1">
														<label for="responseTextDefault0" id="labelDefault0">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseTypeDefaultValues"
																runat="server" />
														</label>
														<label for="responseTextDefault1" id="labelDefault1" style="display:none">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseTypeDefaultValues"
																runat="server" />
														</label>
														<label for="responseTextDefault2" id="labelDefault2" style="display:none">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseTypeDefaultValues"
																runat="server" />
														</label>
														<label for="responseTextDefault4" id="labelDefault3" style="display:none">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseTypeDefaultValues"
																runat="server" />
														</label>
														<label for="responseTextDefault3" id="labelDefault4" style="display:none">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseTypeDefaultValues"
																runat="server" />
														</label>
													</td>
													<td>
														<ui:number id="responseTextDefault0" tabindex="8" runat="server" />
														<ui:number id="responseTextDefault1" tabindex="8" runat="server" />
														<ui:textbox id="responseTextDefault2" tabindex="8" runat="server" />
														<ui:DateTimeUI id="responseTextDefault4" tabindex="8" runat="server" />
														<ui:DateTimeUI id="responseTextDefault3" tabindex="8" runat="server" />
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<cnt:entityattributeselectioncontrol id="prEntityAttribute" runat="server" />
								</table>
			<!-- Response Section (Picklist options editor)-->
			<div id="responseDiv">
								<table id="responseTable" class="responseTable" width="100%" cellspacing="0" cellpadding="5">
									<col width="48%">
									<col>
									<col width="48%">
									<tr>
										<td>
											<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<!-- Ownership type -->
												<tr id="rowRadioBinding">
													<td>
														<table width="100%" cellspacing="0" cellpadding="3">
															<tr>
																<td>
																	<label for="radioBinding">
																		<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.BindingType" runat="server" />
																	</label>
																</td>
												</tr>
												<tr>
													<td>
														&nbsp;
													</td>
												</tr>
											</table>
										</td>
										<td>
											<table width="100%" cellspacing="0" cellpadding="0">
												<tr>
													<td>
														<input class="ms-crm-RadioButton" tabindex="9" name="radioBinding" runat="server"
															id="radioBindingStatic" type="radio" value="1" onclick="bindingChanged()" checked />
														<label for="radioBindingStatic" id="label3">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.BindingTypeDefault" runat="server" />
														</label>
													</td>
												</tr>
												<tr>
													<td>
														<input class="ms-crm-RadioButton" tabindex="10" name="radioBinding" runat="server"
															id="radioBindingQuery" type="radio" value="0" onclick="bindingChanged()">
														<label for="radioBindingQuery" id="label4">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.BindingTypeQuery" runat="server" />
														</label>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</td>
							<td colspan="2">
								&nbsp;
							</td>
						</tr>
						<tr id="rowOptionValues" class="param">
							<td class="picklistSection" colspan="3">
								<table id="responseValueSelector" width="100%" cellspacing="0" cellpadding="0" style="table-layout: fixed">
									<col width="48%">
									<col>
									<col width="47%">
									<tr id="rowDataQueryTextBox" class="ms-crm-TableRow-Hidden">
										<td class="picklistSection">
											<table width="100%" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<tr>
													<td valign="top">
														<label for="responseValueSelector">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.QueryVariable" runat="server" />
														</label>
													</td>
													<td>
														<ui:select id="dataQuerySelector" tabindex="100" runat="server" onchange="queryVariableChanged();" />
													</td>
												</tr>
												<tr>
													<td valign="top">
														<label for="columnSeparator">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.Separator" runat="server" />
														</label>
													</td>
													<td>
														<ui:textbox id="columnSeparator" tabindex="120" runat="server" TrimValue="false" onchange="modifyPreview();" />
													</td>
												</tr>
												<tr>
													<td valign="top">
														<label for="queryPreview" id="labelQueryPreview">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.Preview" runat="server" />
														</label>
													</td>
													<td>
														<ui:textbox id="queryPreview" tabindex="125" runat="server" />
													</td>
												</tr>
											</table>
										</td>
										<td>
											&nbsp;
										</td>
										<td class="picklistSection">
											<table width="100%" cellspacing="0" cellpadding="5">
												<col width="80px">
												<col>
												<tr>
													<td valign="top">
														<label for="responseValueSelector">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.Columns" runat="server" />
														</label>
													</td>
													<td class="picklistSection">
														<div id="divAttributes" style="background-color: #ffffff; height: 100%; width: 100%;
															overflow-y: scroll; border: 1px solid #999999;">
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr id="rowResponsePicklistValues" class="ms-crm-TableRow-Visible">
										<td colspan="3">
											<table width="100%" cellspacing="0" cellpadding="5">
												<col width="100px">
												<col>
												<tr>
													<td id="Td6" valign="top">
														<label for="responseValueSelector">
															<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.ResponseValues" runat="server" />
														</label>
													</td>
												</tr>
												<tr>
													<td valign="top">
														<cnt:multiplevalueformatapppicklistedit tabindex="140" id="responsePicklistValues" runat="server" />
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					</div>
		</div>
		<div id="tdRelatedInformationPane" class="RelatedInformationPaneContainer RelatedInformationPaneExpandedContainer">
			<frm:promptform id="crmForm" runat="server">
			</frm:promptform>
		</div>
	</div>
	<input type="hidden" id="hidSlugInfo" value="<%=SlugInfo%>" />
</body>
</html>
