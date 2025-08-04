
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.InsertHyperlinkDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="dia" Namespace="Microsoft.Crm.Dialogs" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<title>
<loc:text resourceid="Web.SFA.Workflow.InsertHyperlinkDialog.Title" runat="server" />
</title>
<style type="text/css">
.RelatedInformationPane
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float:left;
<% } else { %>
float:right;
<% } %>
}
.prDesignerCulture
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left:0px !important;
<% } else { %>
right:0px !important;
<% } %>
}
</style>
<script language="javascript" type = "text/javascript">
var initialReturnXml = "";
var savedChanges = false;

Sys.Application.add_load(PageLoad);
function PageLoad() {
initialReturnXml = GenerateXml();
attachWindowOnBeforeUnload(window_onbeforeunload);

$get("crmForm").style.height = "100%";
var crmFormCtrl = $find("crmForm");
crmFormCtrl.detachCloseAlert();

crmFormCtrl.set_bypassValidation(true);


_isConditionMode = true;


GenerateHyperLinkTypeMapping();


AttachHyperlinkPageAttributes();

var textControl = window.document.getElementById("DisplayText");


if (!IsNull(textControl))
{
textControl.focus();
SetDatatypeAttributeListAtFocus(textControl);
}

}


function AttachHyperlinkPageAttributes()
{
AttachAttribute("DisplayText");
AttachAttribute("staticUrlTextbox");
}


function AttachAttribute(attribute)
{
var attrControl = window.document.getElementById(attribute);
if (!IsNull(attrControl))
{
$addHandler(attrControl, "focus", OnAttributeFocus);
$addHandler(window, "unload", function () {
$removeHandler(attrControl, "focus", OnAttributeFocus);
});
}
}


function applychanges()
{
Mscrm.Utilities.setReturnValue(GenerateXml());
savedChanges = true;
closeWindow();
}


function cancel()
{
Mscrm.Utilities.setReturnValue("");
closeWindow();
}


function GenerateXml()
{
var sXml = "<hyperlink>";
sXml += GenerateNameXml();
sXml += GenerateUrlXml();
sXml += "</hyperlink>";
return sXml;
}


function GenerateUrlXml()
{
var url = document.getElementById("staticUrlTextbox");
var URLXml = "";
if (!IsNull(url))
{
if (IsDataSlugSpecified(url))
{
URLXml = GetXmlForSlugifiedControl(url, "staticUrlTextbox");
}
else
{
var urlCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(url);
Mscrm.CrmDebug.assert(!IsNull(urlCtrl), "url Element Behavior must exist.");

URLXml = "<staticUrlTextbox>" + GetValue(urlCtrl.get_dataValue()) + "</staticUrlTextbox>";
}
}

return URLXml;
}


function GenerateNameXml()
{
var name = document.getElementById("DisplayText");
var nameXML = "";
if (!IsNull(name))
{
if (IsDataSlugSpecified(name))
{
nameXML = GetXmlForSlugifiedControl(name, "DisplayText");
}
else
{
var nameCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(name);
Mscrm.CrmDebug.assert(!IsNull(nameCtrl), "name Element Behavior must exist.");

nameXML = "<DisplayText>" + GetValue(nameCtrl.get_dataValue()) + "</DisplayText>";
}
}
return nameXML;
}


function GetValue(value)
{
return (value == null) ? "" : CrmEncodeDecode.CrmXmlEncode(value);
}


function window_onbeforeunload(oEvent)
{
if (!savedChanges)
{
var returnXml = GenerateXml();
if (initialReturnXml != returnXml)
{
oEvent.rawEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}
}
}



function GetXmlForSlugifiedControl(control, controlId)
{
var sXml = "";
if (IsDataSlugSpecified(control))
{
var valueControlWithSlug = GetValueControlWithSlug(control);
var slugBehavior = Mscrm.FormUtility.getSlugBehavior(valueControlWithSlug);
var slugText = XUI.Html.GetText(valueControlWithSlug);
sXml = CrmEncodeDecode.CrmXmlDecode(slugBehavior.get_slugValue()) + '<slugtext>' + CrmEncodeDecode.CrmXmlEncode(slugText) + '</slugtext>';
}
else
{
var ctrl = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
Mscrm.CrmDebug.assert(!IsNull(ctrl), "Element Behavior for control must exist.");
return GetValue(ctrl.get_dataValue());
}
return sXml;
}


</script>
</head>
<body>
<div id="rowDesign">
<frm:DialogForm id="hyperlinkDialog" showheader="false" runat="server">
<div class="prDesignerCulture prDesigner">
<table cellspacing="0" width="100%" cellpadding="3" style="table-layout:fixed;">
<col width="25" />
<col width="25" />
<col>
<tr style="display:none;">
<td colspan="3">
<H4 class="ms-crm-Form">
<loc:Text ResourceId="Web.SFA.Workflow.InsertHyperlinkDialog.Title" runat="server"/>
</H4>
</td>
</tr>
<tr>
<td class="TextBoxHyperlink" colspan="3"><loc:Text ResourceId="Web.SFA.Workflow.InsertHyperlinkDialog.DisplayText" runat="server"/></td>
</tr>
<tr>
<tr>
<td class="TextBoxHyperlink" colspan="3"><ui:TextBox id="DisplayText" TabIndex="1" runat="server" /></td>
</tr>
</tr>
<tr>
<td class="TextBoxHyperlink" colspan="3"><loc:Text ResourceId="Web.SFA.Workflow.InsertHyperlinkDialog.Url" runat="server"/></td>
</tr>
<tr>
<td class="TextBoxHyperlink" colspan="3"><ui:TextBox id="staticUrlTextbox" TabIndex="1" runat="server" /></td>
</tr>
</table>
</div>
<div class="FormAssistant">
<div id="areaForm">
<dia:hyperlinkform id="crmForm" runat="server">
</dia:hyperlinkform>
</div>
</div>
</frm:DialogForm>
</body>
</html>
