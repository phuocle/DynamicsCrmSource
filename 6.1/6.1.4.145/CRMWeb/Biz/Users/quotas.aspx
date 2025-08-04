<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.Quotas" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">


#crmQuotaPeriods,#crmQuotaYears
{
height: 400px;
vertical-align: top;
}
</style>
<script language="javascript" type="text/javascript">

var _oId = new Array(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(oId) %>);
var _oPop = "";
var	_oLastGlow;

function openFormObj(sAction, sGrid)
{
var iX, iY, oUrl;
var bRefresh = true;

switch (sAction)
{
case "addquota":
oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_addquota.aspx?iObjType=<%= Util.SystemUser.ToString("D", CultureInfo.InvariantCulture) %>&iTotal=1&uid=" + _oId[0]);
iX = 600;
iY = 425;
bRefresh = false;
break;
}

if (openStdDlg(oUrl, _oId, iX, iY))
{
if (bRefresh)
{
document.frames[sGrid].location.reload();
}
else
{

document.location.reload();
}
}
return;
}

</script>
</head>

<body style="margin: 10px;">

<div width="100%" height="100%" cellspacing="0" cellpadding="0">
<cnt:AppNotifications id="notifications" runat="server" />
<div class="ms-crm-TabBar-Cell"><cnt:AppTabBar id="crmTabBar" runat="server"/></div>
<div style="vertical-align: top;">
<div id="tab1" class="ms-crm-Tab" style="display:inline; padding:10px; overflow: hidden;">
<div width="100%" height="100%" cellspacing="0" cellpadding="0">
<div style="margin:0px;padding:0px; vertical-align: top;"><cnt:AppQuotaGrid id="crmQuotaGrid" Disabled='true' ShowHeader='true' runat="server"/></div>
</div>
</div>

<div id="tab2" class="ms-crm-Tab" style="padding:10px; overflow: hidden;">
<div width="100%" height="100%" cellspacing="0" cellpadding="0">
<div height="23"><ui:MenuBar id="crmMenuBar2" runat="server"/></div>
<div style="margin:0px;padding:0px; vertical-align: top;"><cnt:AppQuotaGrid id="crmQuotaGrid2" ShowHeader='true' runat="server"/></div>
</div>
</div>
</div>
</div>
</body>
</html>