
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.SM.AppointmentBook.DetailsPane" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sm" Namespace="Microsoft.Crm.Common.Application.Pages.SM" Assembly="Microsoft.Crm.Common.Application.Pages" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript">

var isExpanded = false;
var justCollapsed = false;

function SetDateRange(startDate, endDate)
{

}

function onClickTab(tab, tabContent)
{
var idArr = tabContent.get_tab().id.split("_");

if (idArr.length > 1)
{
ShowFrame(idArr[0]);
}
}

Sys.Application.add_load(function () {
var crmTabBarComponent = $find("crmTabBar");
if (!IsNull(crmTabBarComponent))
{
crmTabBarComponent.add_afterChange(onClickTab);
}
var o = $get("0_Tab");
if (!IsNull(o))
{
ShowFrame(0);
}
});

function ShowFrame(index)
{
var frmDetailedPane = $get("frmDetailedPane");
if (frmDetailedPane.src != pagesNames[index])
{
frmDetailedPane.style.display = "block";
frmDetailedPane.src = pagesNames[index];
var o = document.getElementById(index + "_")
o.appendChild(frmDetailedPane);
}
}

</script>
</head>
<body class="gradient" style="overflow:hidden;">
<div class="ms-crm-TabBar-Cell">
<div><cnt:AppTabBar id="crmTabBar" runat="server" /></div>
</div>
<div style="position: absolute; top: 25px; bottom: 0px; left: 0px; right: 0px;">
<div id="divGenerator" style="margin-top:-4px;height: 100%;" runat="server"/>
<iframe id="frmDetailedPane" name="frmDetailedPane" style="display:block;width:100%;height:100%;border:none;" frameborder="0" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>"></iframe>
</div>
</body>
</html>
