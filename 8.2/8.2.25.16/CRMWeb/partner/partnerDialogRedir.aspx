<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Partner.PartnerRedirectDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
function window.onload()
{
var oUrl = Mscrm.CrmUri.create('/partner/partnerredir.aspx');
oUrl.get_query()["Name"] = "olm";
oUrl.get_query()["redirId"] = "6";
openStdWin(oUrl, null, 800, 600);
closeWindow();
}
</script>
</head>
</html>