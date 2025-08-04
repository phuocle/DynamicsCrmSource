<%@ Page language="c#" Inherits="Microsoft.Crm.Web.AdvancedFind.QueryProperties" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<!DOCTYPE html>
<html>
<head>
<title><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="Javascript">

Sys.Application.add_load(QueryPropertiesOnload);
var queryNameControl = null;
var descriptionControl = null;
var queryTabEnableControl = null;
function QueryPropertiesOnload()
{
var oArgs = getDialogArguments();
queryNameControl = Mscrm.FormControlInputBehavior.GetBehavior("queryName");
queryNameControl.set_dataValue(oArgs.sName);
descriptionControl = Mscrm.FormControlInputBehavior.GetBehavior("queryDesc");
descriptionControl.set_dataValue(oArgs.sDescription);
queryTabEnableControl = $get("queryTabEnable");

if (IsNull(oArgs.sIsTabletEnabled))
{
$get("queryTabEnableDiv").style.display = 'none';
}
else
{
queryTabEnableControl.checked = (oArgs.sIsTabletEnabled.toString() == "True" || oArgs.sIsTabletEnabled.toString() == "true");
if (!IsNull(oArgs.sFormId))
{

if (oArgs.sFormId.toLowerCase() == "d1f511a8-1ead-e211-bb72-00155da9a201" || oArgs.sFormId.toLowerCase() == "{d1f511a8-1ead-e211-bb72-00155da9a201}")
{
queryTabEnableControl.disabled = true;
}
}
}
queryNameControl.setFocus();
}

function cancel()
{
closeWindow();
}

function applychanges()
{
var queryNameValue = queryNameControl.get_dataValue();
if(IsNull(queryNameValue))
{
alert(formatString(LOCID_AF_MSG_VALUEREQUIRED, LOCID_AF_LABEL_NAME));
queryNameControl.setFocus();
return false;
}

var oRet = new Object();
oRet.sName = queryNameValue;
var queryDescValue = descriptionControl.get_dataValue();
oRet.sDescription = IsNull(queryDescValue) ? "" : queryDescValue;
oRet.sIsTabletEnabled = queryTabEnableControl.checked;

Mscrm.Utilities.setReturnValue(oRet);

closeWindow();
}

</script>
<style>
.propertycontainer
{
left:10px;
right:10px;
top:10px;
bottom:10px;
}

.namecontainer
{
height:47px;
bottom:auto !important;
}

.descriptioncontainer
{
top:47px !important;
}

.textAreaContainer
{
top:20px;
}

.tabletcontainer
{
top: 90px !important;
}
.ms-crm-CheckBox
{
margin-top: 3px;
width: 16px;
margin-right: -1px;
margin-left: 0;
}

.tabletText
{
margin-top: -11px;
color: Black;
}

.ms-crm-IE7-Height-Fix-Dummy-Container
{
height: 93%;
}

DIV.ms-crm-RefreshDialog-Header-Title
{
font-size: 36px !important;
}
</style>
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="ms-crm-absolutePosition propertycontainer">
<div class="ms-crm-absolutePosition namecontainer">
<span  class="ms-crm-Field-Required">
<label for="queryName">
<loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ViewProperties.aspx_54" runat="server"/>
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
</label>
</span>
<span>
<sdk:TextBoxControl id="queryName" MaxLength="100" runat="server" tabindex="0"/>
</span>
</div>

<div class="ms-crm-absolutePosition descriptioncontainer">
<div class = "ms-crm-absolutePosition" style="bottom:auto; height:20px;">
<div class = "ms-crm-absolutePosition" style="top:auto;">
<loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.ViewProperties.aspx_57" runat="server"/>
</div>
</div>
<div class="ms-crm-absolutePosition textAreaContainer">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<sdk:TextAreaControl id="queryDesc" MaxLength="200" runat="server" tabindex="0"/>
</div>
</div>
<div class="ms-crm-absolutePosition tabletcontainer" id="queryTabEnableDiv">
<div class="ms-crm-absolutePosition tabletText">
<sdk:CheckBoxControl id="queryTabEnable" runat="Server" class="ms-crm-CheckBox" tabindex="0"/>
<label for="queryTabEnable" id="Label1">
<loc:Text id="queryTabEnableText" ResourceId="LabelDashboardEditorFormPropertiesEnableForTablets" runat="server" />
</label>
</div>
</div>

</div>
</div>
</frm:DialogForm>
</body>
</html>