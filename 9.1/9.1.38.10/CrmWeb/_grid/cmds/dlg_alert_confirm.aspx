<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.AlertAndConfirmPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">
window.parent.IS_ESCAPE_KEY_HANDLED = true;
var isAlertDialog = true;
var butOk = "#" + Mscrm.InlineDialogUtility.okButton;
var butCancel = "#" + Mscrm.InlineDialogUtility.cancelButton;
var whiteSpaceCss = "";

function applychanges() {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel() {

if (isOutlookHostedWindow()) {
Mscrm.Utilities.setReturnValue(false);
}
else {
executeDialogCancelCallback();
}
closeWindow();
}

function Init() {
var oArgs = getDialogArguments();

var div = $P_CRM("#dvMain");


if (IsNull(oArgs) || Object.getType(oArgs).getName() == Xrm.AlertDialogStrings.getName()) {
isAlertDialog = true;


var alertText = oArgs["text"];

if (!IsNull(alertText) && alertText.indexOf('\n') != -1) {
whiteSpaceCss = "white-space: pre";
}

div.html($P_CRM('#alertDialog').tmpl(oArgs));
$P_CRM(butOk).click(function () { applychanges(); });
}
else if (Object.getType(oArgs).getName() == Xrm.ConfirmDialogStrings.getName()) {
isAlertDialog = false;
div.html($P_CRM('#confirmDialog').tmpl(oArgs));
$P_CRM(butOk).click(function () { applychanges(); });
$P_CRM(butCancel).click(function () { cancel(); });
}
}

$P_CRM(document).keydown(function (e) {
if (e.keyCode == Mscrm.KeyCode.KEY_ESC) {
if (isAlertDialog) {
applychanges();
}
else {
cancel();
}
}
});
Sys.Application.add_load(Init);


setTimeout(function () {
if (!IsNull($P_CRM("#dvMain2")))
{
$P_CRM("#dvMain2").focus()
}
}, 100);

window.addEventListener("load", function (e) {


if (typeof (window.frameElement) != "undefined" &&  window.frameElement != null && typeof (window.frameElement.nextSibling) != "undefined" && window.frameElement.nextSibling != null) {
var loadingDiv = window.frameElement.nextSibling;
if (loadingDiv.id == "DialogLoadingDiv" && loadingDiv.style.display != "none") {
loadingDiv.style.display = "none";
}
}
}, false);
</script>
</head>
<body>
<div id="dvMain" class="ms-crm-RefreshDialog-Main-Container">
</div>
<script id="alertDialog" type="text/html">
<div id="dvImg" class="ms-crm-Alert-Img"><img src="/_imgs/error/warning_52.gif"/ title="<loc:Text Encoding='HtmlAttribute' ResourceId='SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Severity.Warning' runat='server'/>" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Severity.Warning' runat='server'/>" /></div>

{{if whiteSpaceCss != null && whiteSpaceCss != ""}}
<div id="dvText" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(text)}" style="white-space: pre" class="ms-crm-RefreshDialog-Header-Desc ms-crm-Alert-Text">
{{else}}
<div id="dvText" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(text)}" class="ms-crm-RefreshDialog-Header-Desc ms-crm-Alert-Text">
{{/if}}
${CrmEncodeDecode.CrmHtmlEncode(text)}
</div>
<div id="dvFooter" class="ms-crm-RefreshDialog-Footer">
<button id="{{html Mscrm.InlineDialogUtility.okButton}}" class="ms-crm-RefreshDialog-Button ms-crm-Cancel-Button ms-crm-RefreshDialog-HighlightButton" type="button" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(confirmButtonLabel)}">
<div class="ms-crm-Button-Text">
${CrmEncodeDecode.CrmHtmlEncode(confirmButtonLabel)}
</div>
</button>
</div>
</script>
<script id="confirmDialog" type="text/html">

<div overriddenfirstfocusableonloadelementid="" overriddenfirstfocusableelementid="" overridedefaultfocus="False" id="tdDialogHeader" class="ms-crm-RefreshDialog-Header">

<div tabindex="0" id="dvMain2"  title="${CrmEncodeDecode.CrmHtmlAttributeEncode(title)} ${CrmEncodeDecode.CrmHtmlAttributeEncode(subtitle)} ${CrmEncodeDecode.CrmHtmlAttributeEncode(text)}" >
<div class="ms-crm-div-NotVisible">${CrmEncodeDecode.CrmHtmlEncode(title)} ${CrmEncodeDecode.CrmHtmlEncode(subtitle)} ${CrmEncodeDecode.CrmHtmlEncode(text)}</div>
</div>
<div id="dvTitle" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(title)}" class="ms-crm-RefreshDialog-Header-Title ms-crm-TextAutoEllipsis" style="width:calc(100% - 95px)">
${CrmEncodeDecode.CrmHtmlEncode(title)}
</div>
{{if subtitle != null && subtitle != ""}}
<div id="dvSubTitle" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(subtitle)}" class="ms-crm-RefreshDialog-Header-Desc ms-crm-TextAutoEllipsis-Multiline">
${CrmEncodeDecode.CrmHtmlEncode(subtitle)}
</div>
{{else}}
<div id="dvSubTitle" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(subtitle)}" class="ms-crm-RefreshDialog-Header-Desc">
${CrmEncodeDecode.CrmHtmlEncode(subtitle)}
</div>
{{/if}}
<div id="dvCross">
<a href="#" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_Button_Cancel' runat='server'/>" class="ms-crm-RefreshDialog-FirstTopButton" id="btnCross" onclick="if(!Mscrm.Utilities.resetValidationFailedElement()) {{cancel(); return false;}}">
<img src="/_imgs/Close.png"/ alt="" style="height:16px;width:16px;"/>
</a>
</div>
</div>
<div class="ms-crm-RefreshDialog-Main ms-crm-RefreshDialog-Main-Top" id="DlgHdBodyContainer" tabindex="0">
<div id="dvDescription" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(text)}" class="ms-crm-RefreshDialog-Warning">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container" id="dummyDivforIE7">
${CrmEncodeDecode.CrmHtmlEncode(text)}
</div>
</div>
</div>
<div id="dvFooter" class="ms-crm-RefreshDialog-Footer">
<button id="{{html Mscrm.InlineDialogUtility.okButton}}" class="ms-crm-RefreshDialog-Button ms-crm-Confirm-Button ms-crm-RefreshDialog-HighlightButton" type="button" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(confirmButtonLabel)}">
<div class="ms-crm-Button-Text">
${CrmEncodeDecode.CrmHtmlEncode(confirmButtonLabel)}
</div>
</button>
<button id="{{html Mscrm.InlineDialogUtility.cancelButton}}" class="ms-crm-RefreshDialog-Button ms-crm-Cancel-Button" type="button" title="${CrmEncodeDecode.CrmHtmlAttributeEncode(cancelButtonLabel)}">
<div class="ms-crm-Button-Text">
${CrmEncodeDecode.CrmHtmlEncode(cancelButtonLabel)}
</div>
</button>
</div>
</script>
</body>
</html>
