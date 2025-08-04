<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Business.Role" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

<script type="text/javascript" language="javascript">

Sys.Application.add_load(WindowOnLoad);
function WindowOnLoad() {
var activityFeedsGUID = "{CB269F84-E19D-E011-B66C-00155DB528B6}";
HandleBackButtonIssues(null);
var activityFeedsNode = document.getElementById("gridBodyTable_primaryField_"+activityFeedsGUID+"_0");
if (activityFeedsNode)
{
activityFeedsNode.innerHTML = <%=CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Activity_Feeds_Role"))%>;
activityFeedsNode.title = <%=CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("Activity_Feeds_Role"))%>;
}
}

function handleView(o)
{

var crmGrid = $find("crmGrid");
crmGrid.SetParameter("oId", o.value);
crmGrid.Reset();
}

</script>
<style type="text/css">
td.home_role_td_SelBusinessUnit
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
text-align: right !important;
padding-right: 10px;
<% } else { %>
text-align: left !important;
padding-left: 10px;
<% } %>
}
</style>
</head>
<body class="stage">
<div style="position:relative" class="stdTable">
<div class="ms-crm-home-querycontainer" style = "height:68px">
<table class="stdTable" style = "height:50%" cellpadding="0" cellspacing="0">
<col width = "70%"/><col width = "30%" />
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="Web.Tools.map_xml.aspx_79" runat="server"/></label></td>
<td>
<span class="homepage_span">&nbsp;</span>
</td>
</tr>
</table>
<table class="stdTable" style = "height:50%" cellpadding="0" cellspacing="0">
<col width = "15%"/><col width = "15%"/><col width = "70%" />
<tr>
<td class="home_role_td_SelBusinessUnit"><label for="selBusinessUnit"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.Tools.business.home_role.aspx_74" runat="server"/></span></label></td>
<td><ui:Select id="selBusinessUnit" runat="server" onchange="handleView(this);"/></td>
<td>
<span class="homepage_span">&nbsp;</span>
</td>
</tr>
</table>
</div>
<div class="ms-crm-home-menucontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-home-staticgridcontainer" style = "top:94px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
</div>
</div>
</div>
</body>
</html>
