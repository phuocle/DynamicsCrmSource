<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.AppsForCrm.AppForOutlookAdminSettingsPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        window.onload = function() {
            if (!isOutlookHostedWindow()) {
                window.parent.$get("crmContentPanel").className = "crmapp-top";
                window.parent.$get("crmTopBar").style.display = "none";
            }
            var appForCrm = new Mscrm.AppsForCrm.AppsForCrmAdminSettings();
            appForCrm.ApplicationOnLoad();
        };

        $(document).ready(function() {
            $('body').click(function() {
                Mscrm.AppsForCrm.AppsForCrmAdminSettings.SetQuickFindViewId();
            });
        });

        $(window).unload(function() {
            window.parent.$get("crmContentPanel").className = "crmContentPanel";
            window.parent.$get("crmContentPanel").style.top = "146px";
            window.parent.$get("crmTopBar").style.display = "";
        });

    </script>
</head>
<body id="crmappBody" style="overflow: auto;" tabindex="-1">
<div class="ms-crm-crmAppForOutlook-bodyContainer">
    <div style="width: 765px;">
        <div id="headerTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-title" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Title' runat='server'/>">
            <loc:Text ResourceId="MailApp.RootPage.Title" runat="server"/>
        </div>
        <div style="padding-top: 20px;">
            <span id="headerSubTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-subtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Subtitle' runat='server'/>">
                <loc:Text ID="subtitle" runat="server"/>
            </span>
            <a id="LearnMoreLink" href="http://go.microsoft.com/fwlink/p/?LinkID=532714" target="_blank" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
                <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
            </a>
        </div>
        <div style="padding-top: 20px;">
            <span id="headerSubTitle" tabindex="0" class="ms-crm-CrmAppForOutlook-subtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Subtitle' runat='server'/>">
                <div id="divExternalSearch" runat="server">
                <loc:Text ID="ExternalSearchSubtitle" ResourceId="MailApp.RootPage.OnlineOrg.RelevanceSearch" runat="server"/>
            </span>
            <a class="ms-crm-CrmAppForOutlook-learnMoreLink" id="LearnMoreLink" onclick='var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = 950;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx").toString(), dialogOptions, {}, null, null);' href="#">
                <loc:Text ResourceId="MailApp.Generic.LookHere" runat="server"/>
            </a>
        </div>
    </div>
    <div id="orgEmailSettingsError" runat="server" style="padding-top: 30px;">
        <div style="margin-left: 30px; padding-right: 50px;">
            <img id="erroricon" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            <span tabindex="0" style="padding-left: 6px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Info.OrgEmailSettings' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Info.OrgEmailSettings" runat="server"/>
            </span>
        </div>
    </div>
    <div id="ifdServerSettingsError" runat="server" style="padding-top: 30px;">
        <div style="margin-left: 30px; padding-right: 50px;">
            <img id="erroriconServr" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            <span tabindex="0" style="padding-left: 6px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled" runat="server"/>
            </span>
            <a id="learMoreIFD" href="https://go.microsoft.com/fwlink/p/?LinkID=723354" target="_blank" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink" runat="server"/>
            </a>
        </div>
    </div>
</div>
<div id="crmAppbodyContent" name="crmAppbodyContent" style="width: 710px;" runat="server">
    <div>
        <div id="setupHeader" runat="server" style="padding-top: 30px;">
            <span tabindex="0" class="ms-crm-CrmAppForOutlook-settings" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Header' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Setup.Header" runat="server"/>
            </span>&nbsp;
            <span id="showSpan" runat="server">
                [&nbsp<a id="showLink" tabindex="0" href="#" class="ms-crm-CrmAppForOutlook-editLink" runat="server">
                    <loc:Text ResourceId="MailApp.Setup.Show" runat="server"/>
                </a>&nbsp]
            </span>
        </div>
        <div id="setupBody" runat="server" style="padding-top: 12px; margin-left: -2px;">
            <span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Configuration.Header' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Setup.Configuration.Header" runat="server"/>
            </span><br/>
            <span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Configuration.Description' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Setup.Configuration.Description" runat="server"/>
            </span>
            <a id="learnMore" href="http://go.microsoft.com/fwlink/p/?LinkID=723355" target="_blank" class="ms-crm-CrmAppForOutlook-learnMoreLink" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.Configuration.LearnMore' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Setup.Configuration.LearnMore" runat="server"/>
            </a><br/>
            <span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Setup.RegisterApp.Description' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Setup.RegisterApp.Description" runat="server"/>
            </span>
            <div id="appCommand" runat="server">
            </div>
            <span>
                [&nbsp<a id="doneLink" tabindex="0" href="#" class="ms-crm-CrmAppForOutlook-editLink" runat="server">
                    <loc:Text ResourceId="MailApp.Setup.Done" runat="server"/>
                </a>&nbsp]
            </span>
        </div>
    </div>
    <div>
        <div id="settingsHeader" style="padding-top: 30px;">
            <span tabindex="0" class="ms-crm-CrmAppForOutlook-settings" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.Header' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Settings.Header" runat="server"/>
            </span>&nbsp;
            <span>
                [&nbsp<a id="editLink" tabindex="0" href="#" class="ms-crm-CrmAppForOutlook-editLink" runat="server">
                    <loc:Text ResourceId="MailApp.Generic.Edit" runat="server"/>
                </a>&nbsp]
            </span>
        </div>
        <div id="settingBody" runat="server" style="padding-top: 12px; margin-left: -2px;">
            <table id="bodyContainer">
                <tr>
                    <td style="width: 340px;">
                        <span tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddTitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.AutoAdd.Title' runat='server'/>">
                            <loc:Text ResourceId="MailApp.RootPage.Settings.AutoAdd.Title" runat="server"/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="width: 340px;">
                        <label tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddSubtitle" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.AutoAdd.Subtitle' runat='server'/>">
                            <loc:Text ResourceId="MailApp.RootPage.Settings.AutoAdd.Subtitle" runat="server"/>
                        </label>
                    </td>
                    <td style="vertical-align: top;">
                        <input type="checkbox" id="autoAddCheckbox" name="autoAddCheckbox" class="ms-crm-CrmAppForOutlook-autoAddCheckbox" runat="server"/>
                        <label tabindex="0" class="ms-crm-CrmAppForOutlook-autoAddDescription" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.AutoAdd.Description' runat='server'/>">
                            <loc:Text ResourceId="MailApp.RootPage.Settings.AutoAdd.Description" runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td style="width: 340px; padding-top: 30px;">
                        <div tabindex="0" class="ms-crm-CrmAppForOutlook-save ms-crm-CrmAppForOutlook-savehover" id="save" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.Save.ButtonText' runat='server'/>">
                            <span class="ms-crm-CrmAppForOutlook-savetext">
                                <loc:Text ResourceId="MailApp.RootPage.Settings.Save.ButtonText" runat="server"/>
                            </span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div >
        <div>
            <div >
                <div style="padding-top: 15px;">
                    <table width="100%" height="50%" cellpadding="0" cellspacing="0">
                        <col width="70%">
                        <col width="30%">
                        <tr>
                            <td>
                                <cnt:appviewselector id="crmViewSelector" runat="server"/>
                            </td>
                            <td>
                                <cnt:appquickfind id="crmQuickFind" runat="server"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div style="padding-top: 12px;">
                    <mnu:appgridmenubar id="crmMenuBar" runat="server"/>
                </div>
            </div>
            <div>
                <div id="gridContainer" class="ms-crm-crmgrid-Container" style="padding-top: 10px;" runat="server">
                    <cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="true"/>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</body>
</html>