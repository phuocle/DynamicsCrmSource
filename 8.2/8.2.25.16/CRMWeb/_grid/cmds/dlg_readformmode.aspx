<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ReadFormModeDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html />
<html>
<head>
<title><loc:Text ResourceId="Web_grid_cmds_dlg_readformmode_title" runat="server"/></title>
<script language="JavaScript">


var _sAction = "readformmode";
var _iObjType = <%=ObjType%>;

function applychanges()
{
go();
}

function getCustParamsForItem(index)
{
var qsUrl = Mscrm.CrmUri.create(window.location.search);
return "&readform=" + CrmEncodeDecode.CrmUrlEncode(qsUrl.get_query()["readform"]);
}

</script>
</head>

<body>
<loc:Text ResourceId="Web_grid_cmds_dlg_readformmode_description_2" runat="server"/>

</body>
</html>
