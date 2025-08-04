
<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Condition.ConditionPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Condition" Assembly="Microsoft.Crm.Application.Pages" %>

<html xmlns:Crm>
<head>
<title><loc:Text ResourceId="Title_Condition" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="Javascript">

Sys.Application.add_load(PageLoad);
var initialXml;
function PageLoad()
{

window.focus();
LoadConditionXml();
}

function LoadConditionXml()
{
var oArgs = getDialogArguments();
$find("appConditionBuilder").set_expressionType("<%=Microsoft.Crm.CrmEncodeDecode.CrmNameValueEncode(ExpressionType)%>");
if (oArgs.Xml != null)
{
$find("appConditionBuilder").LoadXml(oArgs.Xml);
initialXml = oArgs.Xml;
}


var crmFormCtrl = $find("crmForm");
crmFormCtrl.detachCloseAlert();
crmFormCtrl.add_onSave(save);
crmFormCtrl.set_bypassValidation(true);
GetWindowContext().attachWindowOnBeforeUnload(formClose);
}


function OnPopulateFieldList()
{
$find("appConditionBuilder").OnPopulateFieldListForWorkflow(oArgs);
}


function formClose(oEvent)
{
oEvent = oEvent.rawEvent;

var conditionBuilder = $find("appConditionBuilder");
if (conditionBuilder.get_isDirty())
{
oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;

if (Mscrm.Utilities.isChrome())
{
return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}
}
if (Mscrm.Utilities.isFirefox() && initialXml != null)
{
GetWindowContext().Mscrm.Utilities.setReturnValue(initialXml);
}
}

function save()
{
var conditionBuilder = $find("appConditionBuilder");

if (conditionBuilder.ParseXml())
{
GetWindowContext().Mscrm.Utilities.setReturnValue(conditionBuilder.GetXml());
GetWindowContext().detachWindowOnBeforeUnload(formClose);
GetWindowContext().closeWindow();
}

if(!IsNull(window.event))
{
GetWindowContext().window.event.returnValue = false;
}
}



function GetWindowContext()
{
if (getDialogArguments()["hostedInIframe"])
{
return window.parent;
}
return window;
}



</script>
<style type="text/css">
SPAN.ms-crm-AdvFind-FieldList,
SPAN.ms-crm-AdvFind-OperatorList
{
width:150px;
}

.cndCondition>div
{
min-width:770px;
}
</style>
</head>

<body >
<FORM id="resultRender" action="" method="post" target="resultFrame">
<INPUT type="hidden" name="ConditionXml" value="">
</FORM>
<div class="ms-crm-absolutePosition">
<div class="ms-crm-MenuBlock">
<mnu:appgenericmenubar id="menuBar" runat="server" />
</div>
<div class="ms-crm-absolutePosition" style="top:49px">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<div class="Condition_td_AppCondition ms-crm-FormBodyRIExpanded" id="formBodyContainer">
<cnt:appcondition id="appCondition" runat="Server" />
</div>
<div id="tdRelatedInformationPane" class="RelatedInformationPaneContainer" style="vertical-align: top;">
<div id="areaForm" class="ms-crm-areaForm">
<frm:conditionform id="crmForm" runat="server"></frm:conditionform>
</div>
</div>
</div>
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</body>
</html>
