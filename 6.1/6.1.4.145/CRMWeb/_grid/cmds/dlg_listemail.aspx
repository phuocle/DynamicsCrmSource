<!DOCTYPE html >
<%@ Page Inherits="Microsoft.Crm.Common.Application.Pages.Dialogs.EmailDetailPage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<script language="javascript">









var _sAction = "listemail";
var _sTemplateId;
var _lastTemplateInnerHTML = "";
var _lastSub = "";
var _lastDesc = "";
var templateCheckBox;
var subject;
var templateName;

Sys.Application.add_load(function () {


Mscrm.FormControlInputBehavior.GetBehavior("from").set_dataValue(null);

templateCheckBox = $get("templateCheckBox");
subject = $get("subject");
templateName = $get("templateName");
SetPrevDirectionCode();


});

function applyChangesOnDistribute(typeCode) {
if (templateCheckBox.checked && XUI.Html.GetText(templateName) == "") {
alert(LOCID_MC_TEMPLATE_MANDATORY);
return;
}

applychanges(typeCode, _sTemplateId);
}

function window_onbeforeunload(oEvent)
{
oEvent = oEvent.rawEvent;



if (!((templateCheckBox.checked && XUI.Html.GetText(templateName) != "") || subject.value != ""))
{
oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}
}

function selectTemplate() {
if (templateCheckBox.checked) {
var qsUrl = Mscrm.CrmUri.create(window.location.search);
var campActId = qsUrl.get_query()["sIds"];
var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=false" + "&objectTypeCode=4402" + "&objectId=" + campActId + "&targetType=4402");

var crmDialog = new Mscrm.CrmDialog(oUrl, null, 600, 350, null);
crmDialog.setCallbackInfo("performActionAfterBulkEmail", this, null);
crmDialog.show();
}
}

function performActionAfterBulkEmail(sResponse) {
if (sResponse != null) {
templateName.innerHTML = sResponse.innerHTML + CrmEncodeDecode.CrmHtmlEncode(sResponse.tmplTitle);
_lastTemplateInnerHTML = templateName.innerHTML;
_sTemplateId = sResponse.tmplId;
}
}

function enableTemplate() {
var description = Mscrm.FormControlInputBehavior.GetBehavior("description");
var selectTemplate = $get("selectTemplate");
var useTemplateLblDiv = $get("useTemplateLblDiv");
var templateNameDiv = $get("templateNameDiv");
if (templateCheckBox.checked) {
selectTemplate.disabled = false;
useTemplateLblDiv.disabled = false;
templateNameDiv.disabled = false;
subject.disabled = true;
description.useTemplate(true);
templateName.innerHTML = _lastTemplateInnerHTML;
_lastSub = subject.value;
subject.value = "";
_lastDesc = description.get_dataValue();
description.set_dataValue("");
}
else {
selectTemplate.disabled = true;
useTemplateLblDiv.disabled = true;
templateNameDiv.disabled = true;
subject.disabled = false;
description.useTemplate(false);
templateName.innerHTML = "";
subject.value = _lastSub;
description.set_dataValue(_lastDesc);

_sTemplateId = null;
_lastTemplateInnerHTML = "";
}
}
function openTemplate() {
if (XUI.Html.GetText(templateName) != "") {
var oUrl = Mscrm.CrmUri.create("/tools/emailtemplateeditor/emailtemplateeditor.aspx?id=" + _sTemplateId);
openStdDlg(oUrl, null, 800, 600);
}
}


</script>
<html>
<body>
<div style="width:100%; height:100%;">
<div style="padding:0px 10px 4px 10px; display:inline-block; ">
<div class="ms-crm-float-leadingedge" style="width:2%; padding-bottom:10px;">
<input type="checkbox" id="templateCheckBox" name="chkEnableTemplate" onclick="enableTemplate()" class="checkbox" tabindex="1" />
</div>
<div class="ms-crm-float-leadingedge" style="padding-left:10px; padding-bottom:10px; padding-right:0px; width:15%;">
<div id="useTemplateLblDiv" class="ms-crm-TextAutoEllipsis" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MA_UseTemplate' runat='server' />" disabled="true">
<NOBR>
<label for="templateCheckBox" width="100%"><loc:Text ID="useTemplateLbl" ResourceId="MA_UseTemplate" runat="server" /></label>
</NOBR>
</div>
</div>
<div class="ms-crm-float-leadingedge" style="width:80%;">
<table style="table-layout:auto; position: relative; width:100%;">
<tr id="templateSelection">
<td width="99%">
<table id="templateLookupTable" class="ms-crm-Lookup" cellpadding="0" cellspacing="0" style="table-layout:fixed; width:100%;">
<tr>
<td>
<div id="templateNameDiv" ime-mode="auto" class="ms-crm-Lookup" disabled="true" onkeypress="openTemplate()">
<ul style="float:left">
<li style="display:inline">
<span id="templateName" contentEditable="false" class="ms-crm-Lookup-Item" onclick="openTemplate()"></span>
</li>
</ul>
</div>
</td>
</tr>
</table>
</td>
<td width="1%">
<div id="temp1" ime-mode="auto" tabindex="2" onkeypress="selectTemplate()">
<a id="selectTemplate" href="#" onclick="selectTemplate()" disabled="true"><img id="insertTemplateImg" src="/_imgs/htmlbar/cmd-insertField.gif"  alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_BulkEmail_Template_SubTitle' runat='server'/>"/></a>
</div>
</td>
</tr>
</table>
</div>
</div>
<div style="position:absolute; top:40px; bottom:0px; width:99%;">
<frm:EmailActivityForm id="crmForm" runat="server" />
</div>
</div>
</body>
</html>
