<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.SetStateAsyncOperationDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">

function applychanges()
{
var newState = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(this.Request.QueryString["sNewState"])%>;

if (newState == "Suspended")
{
var dateValue = Mscrm.FormControlInputBehavior.GetBehavior('postponeDate').get_dataValue();

if(dateValue != null)
{
_custParams = "&sNewState=" + newState + "&postponeUntil=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(dateValue));
}
else
{
alert(LOCID_DTM_BLANK_DATE_ERROR);
return;
}
}
else
{
_custParams = "&sNewState=" + newState;
}

go();
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<loc:Text Id="DialogBodyText" runat="server"><loc:EntityNameArgument id="EntityNameArgumentID" runat="server" EntityType="asyncoperation" EntityNameFormatStyle="Plural" /></loc:Text>
<br><br>
<table id="postponeTable" cellpadding="0" style="table-layout:fixed;width:100%" border=0 bordercolor=red cellspacing="0" width="100%" runat="server">
<col /><col width="25%" />
<tr>
<td nowrap class="dlg_setstate_asyncoperation_td" style="width:25%;white-space:nowrap"><span class="dlg_setstate_asyncoperation_span"/><label for="postponeDate"><loc:Text ResourceId="Web._grid.cmds.dlg_setstate_asyncoperation.aspx_1" runat="server"/></label></td>
<td>
<sdk:DateTimeControl id="postponeDate" runat="server" DisplayFormat="datetime"/>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
