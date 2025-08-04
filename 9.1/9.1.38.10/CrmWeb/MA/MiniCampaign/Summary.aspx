<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.SummaryPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

var _iObjectTypeCode = null;
var _iMCOption = null;
var _iMCOptionTitle = null;
var _iTotalRecords = null;
var _iSelectedRecords = null;
var _aIds = null;
var _oGridXml = null;
var _oMCCreatedFrom = null;
var mc_MiniCampaignFor_int;
var mc_EmailTemplateId_str;
var mc_TargetOption_int;
var mc_TargetIds_str;
var mc_FetchXml_str;
var mc_MiniCampaignType_str;
var mc_LeafActivitiesOwner_int;
var mc_ActivityXml_str;
var mc_MiniCampaignName_str;
var mc_MailMerge_int;
var mc_MailMergeDocType_int;
var mc_Owner_int = SystemUser;
var mc_OwnerId_str = "";
var mc_SendEmail_bool;
var mc_QueueId = "";

var CreateMiniCampaignRequest = (function () {
function CreateMiniCampaignRequest() {
}
CreateMiniCampaignRequest.prototype.getMetadata = function () {
var metadata = {
boundParameter: null,
operationName: "CreateMiniCampaign",
operationType: 0 ,
parameterTypes: {
"MiniCampaignForTypeCode": {
"typeName": "Edm.Int32",
"structuralProperty": 1 ,
},
"TemplateId": {
"typeName": "Edm.Guid",
"structuralProperty": 1 ,
},
"TargetOption": {
"typeName": "Edm.Int32",
"structuralProperty": 1 ,
},
"TargetIds": {
"typeName": "Edm.String",
"structuralProperty": 1 ,
},
"FetchXml": {
"typeName": "Edm.String",
"structuralProperty": 1 ,
},
"MiniCampaignType": {
"typeName": "Edm.String",
"structuralProperty": 1 ,
},
"ActivitiesOwnerOption": {
"typeName": "Edm.Int32",
"structuralProperty": 1 ,
},
"ActivityXml": {
"typeName": "Edm.String",
"structuralProperty": 1 ,
},
"MiniCampaignName": {
"typeName": "Edm.String",
"structuralProperty": 1 ,
},
"PostWorkflowEvent": {
"typeName": "Edm.Boolean",
"structuralProperty": 1 ,
},
"OwnerId": {
"typeName": "Edm.Guid",
"structuralProperty": 1 ,
},
"OwnerTypeCode": {
"typeName": "Edm.Int32",
"structuralProperty": 1 ,
},
"sendEmail": {
"typeName": "Edm.Boolean",
"structuralProperty": 1 ,
},
"QueueId": {
"typeName": "Edm.Guid",
"structuralProperty": 1 ,
},
},
};
return metadata;
};
return CreateMiniCampaignRequest;
}());

Sys.Application.add_load(function () {
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
var oArgs = parent.getDialogArguments();
with (oArgs) {
_iObjectTypeCode = ObjectTypeCode;
_iMCOption = MCOption;
_iMCOptionTitle = MCOptionTitle;
_iTotalRecords = TotalRecords;
_iSelectedRecords = SelectedRecords;
_aIds = Ids;
_oGridXml = GridXml;
_oMCCreatedFrom = CreatedFromOtc;
}
WizardSetButtonText(LOCID_MC_BTN_CREATE, LOCID_MC_BTN_CREATE, _WizardButtonsEnum.NEXTBUTTON);

var oCampaignName = document.getElementById("td_MC_Name");
XUI.Html.SetText(oCampaignName, WizardGetProperty('CampaignName'));
oCampaignName.title = XUI.Html.GetText(oCampaignName);

var ele = document.getElementById("td_MC_Type");
ele.innerHTML = WizardGetProperty("InnerHTML");


ele = document.getElementById("td_MC_Scope");
ele.innerHTML = _iMCOptionTitle;

switch (_iMCOption) {
case 1:
ele.innerHTML += " ( " + _iSelectedRecords + " )";
break;

case 2:
ele.innerHTML += " ( " + _iTotalRecords + " )";
break;
}


ele = document.getElementById("td_MC_Owner");
var _owner = WizardGetProperty("OwnerOption");
if (_owner == 2) {
ele.innerHTML = WizardGetProperty("Owner_Myself");
}
else if (_owner == 1) {
ele.innerHTML = WizardGetProperty("Owner_Record");
}
else if (_owner == 0) {
ele.innerHTML = WizardGetProperty("ActivityLookup");
}
});

function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}

function isMailMergeOption(item) {
if (item && item.length >= 5)
return (item == "mm_id");
else
return false;
}


function GetWizardData() {

mc_MiniCampaignFor_int = _iObjectTypeCode;


if (WizardGetProperty("SelectedItem") != Email) {
mc_EmailTemplateId_str = "";
}
else if (WizardHasProperty("EmailTemplate")) {
mc_EmailTemplateId_str = WizardGetProperty("EmailTemplate");
}


mc_TargetOption_int = _iMCOption;


mc_TargetIds_str = "";
if (_aIds != null && _aIds != "" && _aIds.length > 0) {
mc_TargetIds_str += _aIds[0];
for (var i = 1; i < _aIds.length; i++) {
mc_TargetIds_str += "," + _aIds[i];
}
}


mc_FetchXml_str = _oGridXml;


mc_MiniCampaignType_str = WizardGetProperty("SelectedItem");


mc_LeafActivitiesOwner_int = WizardGetProperty("OwnerOption");


mc_ActivityXml_str = "";

if (WizardHasProperty('ActivityXml')) {
mc_ActivityXml_str = WizardGetProperty('ActivityXml');
}


mc_MiniCampaignName_str = WizardGetProperty("CampaignName");

mc_Owner_int = SystemUser;
if (WizardHasProperty("Owner_Int")) {
mc_Owner_int = WizardGetProperty("Owner_Int");
}

mc_OwnerId_str = "";
if (WizardHasProperty("OwnerId_str")) {
mc_OwnerId_str = WizardGetProperty("OwnerId_str");
}

mc_SendEmail_bool = WizardGetProperty("SendEmail");

mc_QueueId = "";
if (WizardHasProperty("CheckQueue")) {
mc_QueueId = WizardGetProperty("CheckQueue");
}
}

function moveBack()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.BACK);
}

function moveNext() {

GetWizardData();
try {
var command = new CreateMiniCampaignRequest();


command.MiniCampaignForTypeCode = mc_MiniCampaignFor_int;
command.TemplateId = {};
command.TemplateId["guid"] = mc_EmailTemplateId_str !== undefined && mc_EmailTemplateId_str !== 'undefined' && mc_EmailTemplateId_str !== null && mc_EmailTemplateId_str !== "" ? mc_EmailTemplateId_str : "00000000-0000-0000-0000-000000000000";
command.TargetOption = mc_TargetOption_int;
command.TargetIds = mc_TargetIds_str;
command.FetchXml = CrmEncodeDecode.CrmHtmlEncode(mc_FetchXml_str);
command.MiniCampaignType = mc_MiniCampaignType_str;
command.ActivitiesOwnerOption = mc_LeafActivitiesOwner_int;
command.ActivityXml = CrmEncodeDecode.CrmHtmlEncode(mc_ActivityXml_str);
command.MiniCampaignName = mc_MiniCampaignName_str;
command.PostWorkflowEvent = true;
command.OwnerTypeCode = mc_Owner_int;
command.OwnerId = {};
command.OwnerId["guid"] = mc_OwnerId_str !== undefined && mc_OwnerId_str !== 'undefined' && mc_OwnerId_str !== null && mc_OwnerId_str !== "" ? mc_OwnerId_str : "00000000-0000-0000-0000-000000000000";
command.sendEmail = mc_SendEmail_bool;
command.QueueId = {};
command.QueueId["guid"] = mc_QueueId !== undefined && mc_QueueId !== 'undefined' && mc_QueueId !== null && mc_QueueId !== "" ? mc_QueueId : "00000000-0000-0000-0000-000000000000";


var doneCallback = function(r) {

if (!Mscrm.Utilities.isModalDialogSupported()) {
try { window.top.opener.auto(BulkOperation); } catch (e) { }
}
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.CLOSE);
};

Xrm.WebApi.execute(command).then(doneCallback, doneCallback);
}
catch (e) {
}
}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table height="100%" width="100%" cellpadding="0" cellspacing="0">
<tr class="MiniCampaign_tr_SummaryTop" valign="top">
<td>
<table width="100%" cellpadding="0" cellspacing="0">
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<table style="table-layout: fixed">
<col width="140">
<col>
<tr>
<td>
<loc:text id="Text28" resourceid="MC_Summary_Name" runat="server" />
</td>
<td class="MiniCampaign_td_MCName">
<nobr id="td_MC_Name">&nbsp;</nobr>
</td>
</tr>
<tr>
<td>
<loc:text id="Text29" resourceid="MC_Summary_Type" runat="server" />
</td>
<td id="td_MC_Type" class="MiniCampaign_td_MCType">
</td>
</tr>
<tr>
<td>
<loc:text id="Text30" resourceid="MC_Summary_Scope" runat="server" />
</td>
<td id="td_MC_Scope" class="MiniCampaign_td_MCScope">
</td>
</tr>
<tr>
<td>
<loc:text id="Text31" resourceid="MC_Summary_Owner" runat="server" />
</td>
<td id="td_MC_Owner" class="MiniCampaign_td_MCOwner">
</td>
</tr>
</table>
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td id="id_summary_intermed">
<loc:text id="Text32" resourceid="MC_MSG_Info" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td id="id_summarys_bottom">
<loc:text id="Text33" resourceid="MC_MSG_CreateMC" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
