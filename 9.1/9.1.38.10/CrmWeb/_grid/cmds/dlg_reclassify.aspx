<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ReclassifyDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">


var _sAction = "reclassify";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;

function applychanges()
{
var dataValue = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup').get_dataValue();
if (IsNull(dataValue))
{
alert(LOCID_NOONE_SELECTED);
}
else
{
_custParams += "&sId=" + dataValue[0].id;
go();
}
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table style="width:100%">
<colgroup>
<col width="70">
<col>
</colgroup>
<tr>
<td valign="top" style="padding-top:5px;"><label for="crmOwnerLookup">
<loc:Text ResourceId="Web._grid.cmds.dlg_reclassify.aspx_94" runat="server"/>
</label></td>
<td valign="top">
<sdk:LookupControl id="crmOwnerLookup" AccessibilityLabelResourceId="Web._grid.cmds.dlg_reclassify.aspx_94" Lookupbrowse="false" LookupStyle="subject" runat="server"/>
</td>
</tr>
</table>
</frm:DialogForm>

<script type="text/javascript" >
setTimeout(function () {
if (document.getElementById("dvEmptyTitle") != null) {
document.getElementById("dvEmptyTitle").focus();
}
}, 100);
</script>
</body>
</html>
