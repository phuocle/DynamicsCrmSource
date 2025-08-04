<%@ Page Language="c#" MasterPageFile="~/AppPortal/common/appportal.master"
Inherits="Microsoft.Crm.Application.Web.Pages.NotificationPage"
CodeBehind="Microsoft.Crm.Application.Web.Pages.dll" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<asp:content id="PageScript" contentplaceholderid="globalPageScript" runat="server">

function live (eventType, elementId, cb) {
document.addEventListener(eventType, function (event) {
var el = event.target
, found;

while (el && !(found = el.id === elementId)) {
el = el.parentElement;
}

if (found) {
cb.call(el, event);
}
});
}


function isParentWindowAccessible(wInstance) {
if (!wInstance) {
wInstance = window;
}
try {
return !!wInstance.parent.location && !!wInstance.parent.location.href;
}
catch (error) {
return false;
}
}

function getTopAccessibleParentWindow() {
var main = window;
while (main.self !== main.top && isParentWindowAccessible(main)) {
main = main.parent;
}

return main;
}

function canShowNotificationInParentWindow() {

var titleSpan = document.getElementById('title_locationcapolicyfailed');
if (titleSpan == undefined || titleSpan === null)
return false;

return true;
}

function showNotificationInParentWindow(parentWin) {
var href = parentWin.location.protocol.replace(/\:/g, '') + '://' + parentWin.location.host + "/appportal/sg/notification.aspx";
parentWin.location.href = href;
}

function ToggleTechnicalDetails() {
var technicalDetailsList = document.getElementById("technicalDetails");
var toggleTechnicalDetailsButton = document.getElementById("toggleTechnicalDetailsButton");
if (technicalDetailsList.style.display === "block") {
technicalDetailsList.style.display = "none";
toggleTechnicalDetailsButton.innerHTML = '<loc:Text ResourceId="TechnicalDetails.ShowLabel" runat="server" />';
}
else {
technicalDetailsList.style.display = "block";
toggleTechnicalDetailsButton.innerHTML = '<loc:Text ResourceId="TechnicalDetails.HideLabel" runat="server" />';
}
}

window.onload = function() {
var topAccessibleParentWindow = getTopAccessibleParentWindow();
if (topAccessibleParentWindow != window && canShowNotificationInParentWindow()) {
showNotificationInParentWindow(topAccessibleParentWindow);
}
};
</asp:content>

<asp:Content ID="notificationContent" ContentPlaceHolderID="globalPageContent" runat="server">
<form id="frmFeatureNotification" runat="server">
<div class="AppPortalContentDiv" id ="notificationBlock" runat ="server">
<h1>
<loc:Text ResourceId="NotificationPage.Title" runat="server" />
</h1>
<div class="padb30"></div>
<div id="divNotifications" runat="server" class="NotificationDiv">
</div>
<%
if (Microsoft.Crm.Application.Utility.Util.IsLive())
{
%>
<div class="NotificationDetailsDiv" id = "detailsBlock">
<ul class="GeneralDetailsList" id = "generalDetails">
<li>
<loc:Text ResourceId="GeneralDetails.ErrorCodeLabel" runat="server" /> <%=RequestDetails.ErrorCode %>
</li>
<li>
<loc:Text ResourceId="GeneralDetails.TimestampLabel" runat="server" /> <%=RequestDetails.Timestamp %> <loc:Text ResourceId="GeneralDetails.UTCTimeZone" runat="server" />
</li>
<li>
<loc:Text ResourceId="GeneralDetails.ServiceRequestIdLabel" runat="Server" /> <%=RequestDetails.ServiceRequestId %>
</li>
</ul>
<button type="button" onclick="ToggleTechnicalDetails()" class="TechnicalDetailsButton" id="toggleTechnicalDetailsButton"> <loc:Text ResourceId="TechnicalDetails.ShowLabel" runat="server" /> </button>
<ul class="TechnicalDetailsList" id="technicalDetails">
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationTenantIdLabel" runat="server" /> <%=RequestDetails.OrganizationTenantId %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationUrlLabel" runat="server" /> <%=RequestDetails.OrganizationUrl %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationIdLabel" runat="server" /> <%=RequestDetails.OrganizationId %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationTypeLabel" runat="server" /> <%=RequestDetails.OrganizationType %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationUniqueNameLabel" runat="server" /> <%=RequestDetails.OrganizationUniqueName %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationCreatedOnLabel" runat="server" /> <%=RequestDetails.OrganizationCreatedOn %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.OrganizationStateLabel" runat="server" /> <%=RequestDetails.OrganizationState %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.SecurityGroupIdLabel" runat="server" /> <%=RequestDetails.SecurityGroupId %>
</li>
<br />
<li>
<loc:Text ResourceId="TechnicalDetails.UserObjectIdLabel" runat="server" /> <%=RequestDetails.UserObjectId %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.SystemUserIdLabel" runat="server" /> <%=RequestDetails.SystemUserId %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.UserTenantIdLabel" runat="server" /> <%=RequestDetails.UserTenantId %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.UserPrincipalNameLabel" runat="server" /> <%=RequestDetails.UserPrincipalName %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.IsUserMemberOfSecurityGroupLabel" runat="server" /> <%=RequestDetails.IsUserMemberOfSecurityGroup %>
</li>
<li>
<loc:Text ResourceId="TechnicalDetails.IsUserLicensedLabel" runat="server" /> <%=RequestDetails.IsUserLicensed %>
</li>
</ul>
</div>
<%
}
%>
</div>
</form>
</asp:Content>
