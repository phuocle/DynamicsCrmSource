<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicatesListPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<% if (Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnline == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrm == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookGoOnlineXrm == source
|| Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OutlookTrackInCrmXrm == source)
{ %>
<style type="text/css">
body
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
dir:rtl;
<%} %>
background-color: threedface;
}
</style>
<%} else if (source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate) {%>
<style type="text/css">
body
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
dir:rtl;
<%} %>

}
</style>
<%} %>
<script language=javascript>

var isDuplicatesFound = <%=_isDuplicatesFound.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
Sys.Application.add_load(PageOnLoad);
function PageOnLoad()
{
parent.duplicatesListIframeStatus = 1;
if(isDuplicatesFound)
{
fetchDuplicateRecords();
}
else
{
parent.document.getElementById("progress").style.display="none";
parent.document.getElementById("duplicatespage").style.display="inline";

var duplicatesIframe = parent.document.getElementById("duplicateRecordsIframe");
duplicatesIframe.style.display = "none";
duplicatesIframe.src = "";
}
}
function fetchDuplicateRecords()
{
var selectedValue = Mscrm.FormControlInputBehavior.GetBehavior('DuplicatesCountPicklist').get_dataValue();
var baseRecordId = "";
var baseEntityName = "";

<% if(source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.SystemWide) {%>
baseRecordId = <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(objectId) %>;
baseEntityName = <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_entityName) %>;
<% } %>

parent.fetchDuplicateRecords(selectedValue, baseRecordId, baseEntityName);
}
</script>
</head>
<body scroll="no">
<% if (source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate) {%>
<table class="ms-crm-Dialog-DuplcateRecordsTable">
<%} %>
<% else {%>
<table>
<%} %>
<col width="50%" />
<col />
<tr>
<% if(source == Util.DuplicatesSource.OutlookGoOnline || source == Util.DuplicatesSource.OutlookGoOnlineXrm) { %>
<td><label for="DuplicatesCountPicklist"><loc:Text ResourceId='Outlook_Total_Duplicates_Found_DuplicatesList_aspx' runat='server'/></label></td>
<%} else if(source == Util.DuplicatesSource.OutlookTrackInCrm || source == Util.DuplicatesSource.OutlookTrackInCrmXrm){%>
<td><label for="DuplicatesCountPicklist"><loc:Text ResourceId='Outlook_Total_Duplicates_FoundInMIcrosoftCRM_DuplicatesList_aspx' runat='server'/></label></td>
<%}
else if (source == Microsoft.Crm.Application.Utility.Util.DuplicatesSource.OnlineCreateUpdate)
{%>
<td><label for="DuplicatesCountPicklist" class="UpperCaseDialogLabel"><loc:Text ResourceId='Total_Duplicates_Found_DuplicatesList_aspx' runat='server'/></label></td>
<% } else { %>
<td><label for="DuplicatesCountPicklist"><loc:Text ResourceId='Total_Duplicates_Found_DuplicatesList_aspx' runat='server'/></label></td>
<%} %>

<%if(_isDuplicatesFound==1) {%>
<td width="250">
<ui:Select id="DuplicatesCountPicklist" OnChange="fetchDuplicateRecords()" runat="server" />
</td>
<%} else { %>
<td><loc:Text ResourceId='NoDuplicates_Found_ViewDuplicates_aspx' runat='server'/></td>
<%} %>
</tr>
</table>
</body>
</html>