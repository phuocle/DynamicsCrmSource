<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.SystemAddOnPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-2.1.1.min.js"></script>
    <script language="javascript" type="text/javascript">
        function locationReload() {
            location.reload(true)
        }


        function openAddStorageWizard() {
            var options = new Xrm.DialogOptions();
            options.width = 800;
            options.height = 650;
            var url = Mscrm.CrmUri
                .create('/WebWizard/WizardContainer.aspx?WizardId=59345E49-6BF3-464c-BCF3-8FA44151EDE9');
            Xrm.Internal.openDialog(url.toString(), options, null, null, locationReload);
        }


        function openRemoveStorageWizard() {
            var options = new Xrm.DialogOptions();
            options.width = 800;
            options.height = 650;
            var url = Mscrm.CrmUri
                .create('/WebWizard/WizardContainer.aspx?WizardId=F2F5B4A7-000B-4483-88AD-267DA3322DC9');
            Xrm.Internal.openDialog(url.toString(), options, null, null, locationReload);
        }


        function openAddLicenseWizard() {
            var options = new Xrm.DialogOptions();
            options.width = 800;
            options.height = 650;
            var url = Mscrm.CrmUri
                .create('/WebWizard/WizardContainer.aspx?WizardId=BC3DEC10-1396-4cb3-BEDA-EEDB991F796C');
            Xrm.Internal.openDialog(url.toString(), options, null, null, locationReload);
        }


        function confirmNewWindow(msg, url, openNew) {
            if (confirm(msg)) {
                try {
                    window.top.Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
                } catch (err) {
                }
                if (openNew) {
                    openStdWin(url, null, 900, 600, "status=1,resizable=1,scrollbars=1");
                } else {
                    window.top.location.href = url;
                }
            }
        }

        function OpenNewWindow(url) {
            openStdWin(url, null, 900, 600, "status=1,resizable=1,scrollbars=1,toolbar=1,menubar=1");
        }

        function AdjustWarningDiv() {
            var WarningDiv = document.getElementById("orgstatuswarningdiv")
            if (!IsNull(WarningDiv)) {
                WarningDiv.style.width = (document.body.clientWidth > 850 ? "800px" : "auto");
            }
        }


        function overlay() {
            var wizardContainer = $("#overlay .area");
            var wizardFrame = wizardContainer.find("iframe");
            if (wizardFrame.length <= 0) {
                var wizardSource = wizardContainer.find("input");

                wizardContainer.append($('<iframe id="wzframe" src="' +
                    htmlEncode(wizardSource.val()) +
                    '"height="538" width="822"></iframe>'));
            }
            el = document.getElementById("overlay");
            el.style.display = (el.style.display == "block") ? "none" : "block";
        }

        function htmlEncode(value) {


            return $('<div/>').text(value).html();
        }

        $(document).ready(function() {
            $("#twlink a").click(function() {
                overlay();
            });
        });
    </script>
</head>

<body class="stage" onload="AdjustWarningDiv();" onresize="AdjustWarningDiv();">
<div id="overlay">
    <div class="area">
        <input type="hidden" name="TransitionWizardUrl" value="<% RenderTransitionWizardUrl(); %>"/>
    </div>
</div>
<div class="ms-crm-SettingsPage ms-crm-subscription-control">
    <div class="ms-crm-addonpage" style="padding-top: 18px; padding-bottom: 18px;">
        <div class="ms-crm-LeftSideBox">
            <span class="ms-crm-label">
                <loc:Text ResourceId="SubscriptionManagement.Header.OrganizationName" runat="server"/>
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
            <%
                if (Microsoft.Crm.Application.Utility.Util.IsLive())
                {
                    RenderUpgradeNotice();
                }
            %>
        </div>

        <div class="ms-crm-Syshealth-Spacer">
        </div>

        <h2 class="ms-crm-subheader">
            <loc:Text ResourceId="Syshealth.ResourceManagement.Header" runat="server"/>
        </h2>


        <div class="ms-crm-storagearea ms-crm-shadedbox">
            <%
                if (Microsoft.Crm.Application.Utility.Util.IsLive())
                {
                    if (!Microsoft.Crm.Application.Utility.SecurityUtility.IsCurrentUserLiveBillingAdmin())
                    {
            %>
                    <div class="ms-crm-Syshealth-Spacer">
                    </div>
                    <span class="ms-crm-Group">
                        <loc:Text ResourceId="Syshealth.ResourceManagement.SubHeader" runat="server"/>
                    </span>
                <%
                    }
                    else
                    {
                %>
                    <% RenderWarningMessage(); %>
            <%
                    }
                }
            %>
            <div class="ms-crm-Syshealth-Spacer">
            </div>
            <% RenderResourceManagement(); %>
        </div>
        <div class="ms-crm-Syshealth-Spacer">
        </div>

        <h2 class="ms-crm-subheader">
            <loc:Text ResourceId="Syshealth.ApplicationUsage.Header" runat="server"/>
        </h2>
        <div class="ms-crm-storagearea ms-crm-shadedbox">
            <% RenderApplicationUsage(); %>
        </div>
        <div class="ms-crm-Syshealth-Spacer">
        </div>
        <%
            if (Microsoft.Crm.Application.Utility.Util.IsLive())
            {
        %>
            <h2 class="ms-crm-subheader">
                <loc:Text ResourceId="Syshealth.OfferManagement.Title" runat="server"/>
            </h2>
            <div class="ms-crm-storagearea ms-crm-shadedbox">
                <% RenderOfferManagement(); %>
            </div>
            <div id="tclink" class="transwizclass">
                <% RenderTransitionCenterIcon(); %>
            </div>
            <div id="twlink" class="transwizclass">
                <% RenderTransitionWizardIcon(); %>
            </div>
        <% } %>
    </div>
</div>
</body>
</html>