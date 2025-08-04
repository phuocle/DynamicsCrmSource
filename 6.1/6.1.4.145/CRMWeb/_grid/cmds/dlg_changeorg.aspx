<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ChangeOrgDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web._grid.cmds.dlg_changeorg.aspx_37" runat="server"/></title>

<script type="text/javascript"  language="javascript">


var _sAction = "changeorg";

function applychanges() {
var dataValue = Mscrm.FormControlInputBehavior.GetBehavior('crmLookup').get_dataValue();
if (IsNull(dataValue))
{
alert(LOCID_NO_BUSINEESS_UNIT_SELECTED);
}
else
{
_custParams = "&ownerId=";


with (dataValue[0])
{
_custParams += id;
_custParams += "&ownerType=" + type;
}

go();
}
}
</script>
<style type="text/css">
.ms-crm-changeParentLookup
{
padding-top:5px;
padding-bottom:10px;
color: #444444;
}

.ms-crm-innerDiv
{
min-width:288px;
width:100%;
height:100%;
position:absolute;
}

.ms-crm-outerScrollDiv
{
overflow-x:auto;
}
</style>
</head>
<body>
<div class="ms-crm-absolutePosition ms-crm-outerScrollDiv">
<div class="ms-crm-innerDiv">
<frm:DialogForm id="crmForm" runat="server">

<table width="100%" style="height:100%;" cellspacing="0" cellpadding="0">
<col width="26" /><col />
<tr>
<td valign="top">
<div class="ms-crm-changeParentLookup">
<%
if (userWarning != String.Empty)
{
%>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(userWarning)%><br /><br />
<%
}
%>
<label for="crmLookup"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.BusinessUnit, NameFormatStyle.Singular) + ":")%></label>

</div>

<sdk:LookupControl id="crmLookup" LookupStyle="single" runat="server"/>

</td>
</tr>
</table>

</frm:DialogForm>
</div>
</div>
</body>
</html>
