<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicateRecordsGridPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm == source)
{ %>
<% } else {%>

<style type="text/css">
body
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
dir:rtl;
<%} %>
<% if ( source != Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate ){ %>

background-color: #eef0f6;
<%} %>
}

.gridContainer
{
position:absolute;
bottom:0px;

<% if ( dialogType != DialogTypes.MocaInlineDialog ){ %>
top:26px;
<%} %>
<% else { %>

top:0px;
<%} %>

}
</style>
<%} %>
<script language=javascript>
Sys.Application.add_load(windowOnLoad);
function windowOnLoad()
{
parent.duplicateRecordsIframeStatus = 1;
<% if (dialogType == DialogTypes.MocaInlineDialog){ %>
var grid = $find("duplicateRecordsGrid");
if (IsNull(grid))
{
return;
}
grid.add_onSelectionChange(function ()
{
parent.DuplicateGridSelectionChanged();
});
<%} %>
}
</script>
</head>
<body scroll="no">
<% if ( source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate ){ %>
<div border=0 style="position:absolute; top:0px; bottom:0px; width:100%">
<%} %>
<% else{ %>
<div border=0 bordercolor=blue style="position:absolute; top:0px; bottom:0px; width:100%">
<%} %>
<% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline != source
&& Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm != source
&& Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm != source
&& Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm != source)
{
%>

<%
if (dialogType != DialogTypes.MocaInlineDialog && !Microsoft.Crm.Application.Utility.Util.UseTabletExperience(UserInformation.Current))
{ %>
<div style="height:26px;">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<%} %>
<%} %>
<div style="width:100%" class="gridContainer">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="duplicateRecordsGrid" />
</div>
</div>
</div>
</body>
</html>
