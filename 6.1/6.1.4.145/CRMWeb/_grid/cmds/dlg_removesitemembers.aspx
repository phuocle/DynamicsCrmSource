<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RemoveSiteMembersDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<title><loc:Text ResourceId="Dialog_RemoveSiteMembers_Title" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">

var _sAction = "removesitemembers";
var _iObjType = Site;

function applychanges()
{
go();
Mscrm.Utilities.setReturnValue(true);
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Remove_Site_Members_Confirmation" runat="server"/>
</frm:DialogForm>
</body>
</html>
