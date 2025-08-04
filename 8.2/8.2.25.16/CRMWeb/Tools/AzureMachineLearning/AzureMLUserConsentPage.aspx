<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.AzureMachineLearning.AzureMLUserConsentPage" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Platform.Sdk.Caching.CacheData" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Analytics.AzureMachineLearning.Connection" %>

<!DOCTYPE html>
<html>
<head>
<title>
<%= PageTitle %>
</title>
<cnt:appheader runat="server" id="crmHeader" />
<script type="text/javascript">
function continueButtonClickHandler() {

var actionUri = Mscrm.CrmUri.create(postBackUri);
actionUri.get_query()["continueButtonClicked"] = true;
actionUri.get_query()["connectionType"] = <%=ConnectionType%>;


var options = new jQueryAjaxOptions;
options.url = actionUri.toString();
options.type = "POST";
options.contentType = false;
$P_CRM.ajax(options).success(openConnectionEntityForm);


return false;
}

function openConnectionEntityForm(response) {
if (!Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty(response.toString())) {

var connectionId = response.toString();
var parameters = {};



parameters["replace"] = "true";

openObj(<%=Util.AzureServiceConnection%>, connectionId, null, null, null, parameters);


if(IsOutlookClient() == true)
displayAdminPage();
}
}

function displayAdminPage(){

var uri = Mscrm.CrmUri.create(adminUrl);

window.location.replace(uri.toString());
}

<%
if(AnalyticsUtility.ConnectionExists((AnalyticsUtility.AzureServiceConnectionType)ConnectionType))
{
%>
var parameters = {};



parameters["replace"] = "true";


openObj(<%=Util.AzureServiceConnection%>, '<%= AnalyticsUtility.GetAzureServiceConnectionId((AnalyticsUtility.AzureServiceConnectionType)ConnectionType)%>', null, null, null, parameters);
if(IsOutlookClient() == true)
displayAdminPage();
<%
}
%>

</script>
</head>
<body>
<%

if(! AnalyticsUtility.ConnectionExists((AnalyticsUtility.AzureServiceConnectionType)ConnectionType))
{
%>
<div id="scrollContainer">
<div class="textBlock configTitle">
<div id="disclaimerTitle" tabindex="0">
<p>
<%= DisclaimerTitle %>
</p>
</div>
</div>

<div id="disclaimerPart" class='content'>
<p>
<%= DisclaimerConsent %>
<a target="_blank" href="<%= TechnicalDocumentationLink %>"><%= TechnicalDocumentation %> </a>
<%= ConsentMoreInfo %>
<br/><%= DisclaimerText %>
</p>

<div class="buttonsDiv">
<%= RenderButtons() %>
</div>
</div>
</div>
<%
}
%>
</body>
</html>
