<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.ResourceUsagePage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
</head>
<body style="background-color: #FFFFFF; margin-left: 10px; margin-right: 10px;">
<div id="framecontainer" style="height: 100%; width: 100%; overflow: auto">
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <div class="ms-crm-LeftSideBox">
        <span class="ms-crm-label">
            <loc:text resourceid="SubscriptionManagement.Header.OrganizationName" runat="server"/>
        </span>
    </div>
    <div>
        <span class="ms-crm-name">
            <% RenderOrganizationFriendlyName(); %>
        </span>
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>

    <div class="ms-crm-LeftSideBox">
        <span class="ms-crm-label">
            <loc:Text ResourceId="SubscriptionManagement.Header.OrganizationUrlName" runat="server"/>
        </span>
    </div>
    <div>
        <span class="ms-crm-name">
            <% RenderOrganizationUrlName(); %>
        </span>
    </div>

    <div class="ms-crm-Syshealth-Spacer">
    </div>

    <div>
        <% RenderUpgradeNotice(); %>
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <% RenderUsage(); %>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <% RenderViewLicenseText(); %>
    <div class="ms-crm-Syshealth-Spacer">
    </div>
    <% RenderModifyLicensesText(); %>

    <% RenderAssociatedOrganizations(); %>
</div>
</body>
</html>