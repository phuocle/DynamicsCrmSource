<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.CalculatedFields.ManageCalculatedFieldsPage"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head runat="server">
<title runat="server"></title>
<app:AppHeader runat="server" id="crmHeader"/>
<script language="javascript" type="text/javascript">
Sys.Application.add_load(PblEditorOnLoad);
var resizeTimer;
function PblEditorOnLoad() {
var crmFormSubmit = $get("crmFormSubmit");
$addHandler(crmFormSubmit, "submit", OnPblEditorFormSubmit);
var body = $get("BodyViewContainer");
$addHandler(body, "scroll", CloseAutocomplete);
$addHandler(window, "resize", HandleResize);
}

function OnPblEditorFormSubmit(domEvent) {
var oCrmFormSubmit = $get('crmFormSubmit');
oCrmFormSubmit.crmFormSubmitXml.value = "";
}
function GetCaretPosition(ctrl) {
var caretPos = 0;


if (ctrl.selectionStart || ctrl.selectionStart == '0') {
caretPos = ctrl.selectionStart;
}

else if (document.selection) {
ctrl.focus();
var sel = document.selection.createRange();
var selCtrl = ctrl.createTextRange();
var selCtrlDup = selCtrl.duplicate();
selCtrl.moveToBookmark(sel.getBookmark());
selCtrlDup.setEndPoint('EndToStart', selCtrl);
caretPos = selCtrlDup.text.length;
}

return caretPos;
}

function SetCaretPosition(ctrl, pos) {
if (ctrl.setSelectionRange) {
ctrl.focus();
ctrl.setSelectionRange(pos, pos);
}
else if (ctrl.createTextRange) {
var range = ctrl.createTextRange();
range.collapse(true);
range.moveEnd('character', pos);
range.moveStart('character', pos);
range.select();
}
}



function CloseAutocomplete() {
var controlOnFocus = $("*:focus").attr("id");
var controlName = "#" + controlOnFocus;
$(controlName).autocomplete("close");
}

function HandleResize(domEvent) {
clearTimeout(resizeTimer);
resizeTimer = setTimeout(CloseAutocomplete, 100);
}
</script>
</head>
<body class="mscrm-pbleditor-Body">
<div class="mscrm-pbleditor">
<div runat="server" id="HeaderViewContainer" class="mscrm-pbleditor-HeaderViewContainer calcfield">
</div>
<div runat="server" id="BodyViewContainer" class="mscrm-pbleditor-BodyViewContainer calcfield">
</div>
</div>

<frm:hardcodedform id="crmForm" runat="server">
</frm:hardcodedform>
</body>
</html>
