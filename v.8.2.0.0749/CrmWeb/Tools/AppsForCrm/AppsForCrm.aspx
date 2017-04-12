<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.AppsForCrm.AppsForCrmPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">
        var appForCrm = null;
        window.onload = function() {
            window.parent.$get("crmContentPanel").style.top = "50px";
            window.parent.$get("crmTopBar").style.display = "none";
            appForCrm = new Mscrm.AppsForCrm.AppsForCrm();
            appForCrm.Initialize();
            appForCrm.ApplicationOnLoad();
        };

        $(window).unload(function() {
            window.parent.$get("crmContentPanel").style.top = "146px";
            window.parent.$get("crmTopBar").style.display = "";
        });
    </script>
    <title>
        <loc:Text resourceid="Dialog.AppsForCrm.Title" runat="server"/>
    </title>
</head>
<body tabindex="-1">
<div class="ms-crm-appsForDynamicsCrm-bodyContainer">

<div id="headerTitle">
    <div id="crmAppsIcon">
        <img id="appsIcon" alt="" src="/_imgs/appsforcrm/crm_apps_icon_80x80.png"/>
    </div>
    <div id="crmAppsTitle">
        <span tabindex="0" class="ms-crm-appsForDynamicsCrm-title">
            <loc:text ResourceId="Dialog.AppsForCrm.Title" runat="server"/>
        </span>
        <br/>
        <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
            <loc:text ResourceId="Dialog.AppsForCrm.Description" runat="server"/>
        </span>
    </div>

</div>
<div class="ms-crm-appsForDynamicsCrm-sectionHeader">
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
        <loc:text ResourceId="Dialog.AppsForCrm.SubTitle" runat="server"/>
    </span>
    <br/>
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-link-bold">
        <asp:Label ID="orgUrl" runat="server"></asp:Label>
    </span>
</div>


<div id="subHeaderTitle" runat="server">
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-subTitle">
        <loc:text ResourceId="Dialog.AppsForCrm.MoCA_Phone.Title" runat="server"/>
    </span>
    <br/>
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
        <loc:text ResourceId="Dialog.AppsForCrm.MoCA_Phone.Description" runat="server"/>
        <a id="learnMoreLink" href="https://go.microsoft.com/fwlink/p/?LinkId=296267" target="_blank" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
            <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
        </a>
    </span>
    <div id="phoneFooter" class="ms-crm-appsForDynamicsCrm-Footer" runat="server">
        <ul id="horizontalButtons">
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=519212" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.Windows.ButtonText' runat='server' />">

                    <img id="imgForWindowsPhone" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.Windows.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
                </a>
            </li>
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=519213" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.IOS.ButtonText' runat='server' />">

                    <img id="imgForIPhone" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.IOS.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
                </a>
            </li>
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=519214" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.Android.ButtonText' runat='server' />">
                    <img id="imgForAndroid" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Phone.Android.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
            </li>
        </ul>
    </div>
</div>


<div class="ms-crm-appsForDynamicsCrm-sectionHeader" runat="server">
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-subTitle">
        <loc:text ResourceId="Dialog.AppsForCrm.MoCA_Tablet.Title" runat="server"/>
    </span>
    <br/>
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
        <loc:text ResourceId="Dialog.AppsForCrm.MoCA_Tablet.Description" runat="server"/>
        <a id="learnMoreLink" href="https://go.microsoft.com/fwlink/p/?LinkId=296267" target="_blank" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
            <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
        </a>
    </span>
    <div id="tabletFooter" class="ms-crm-appsForDynamicsCrm-Footer" runat="server">
        <ul id="horizontalButtons">
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=392776" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.Windows.ButtonText' runat='server' />">

                    <img id="imgForWindowsTablet" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.Windows.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
                </a>
            </li>
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=313645" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.IOS.ButtonText' runat='server' />">

                    <img id="imgForIPhoneTablet" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.IOS.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
                </a>
            </li>
            <li>
                <a href="https://go.microsoft.com/fwlink/p/?LinkID=392774" target="_blank" title="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.Android.ButtonText' runat='server' />">
                    <img id="imgForAndroidTablet" runat="server" alt="<loc:text ResourceId='Dialog.AppsForCrm.MoCA_Tablet.Android.ButtonText' runat='server' />" style="height: 40px"/>
                </a>
            </li>
        </ul>
    </div>
</div>


<div id="mailAppSection" class="ms-crm-appsForDynamicsCrm-sectionHeader" runat="server">
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-subTitle">
        <loc:text ResourceId="Dialog.AppsForCrm.MailApp.Title" runat="server"/>
    </span>
    <br/>
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
        <loc:text ResourceId="Dialog.AppsForCrm.MailApp.Description" runat="server"/>
        <a id="learnMoreLink" href="https://go.microsoft.com/fwlink/p/?LinkId=532714" target="_blank" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
            <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
        </a>
    </span>
    <div id="mailAppFooter" class="ms-crm-appsForDynamicsCrm-Footer" runat="server">
        <ul id="horizontalButtons">
            <li>
                <input id="cmdMailApp" title="<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Title' runat='server' />" type="button" class="ms-crm-appsForDynamicsCrm-Button" value="<loc:text ResourceId='Dialog.AppsForCrm.MailApp.Title' runat='server' />" "/>
            </li>
        </ul>
    </div>

    <div id="mailAppValidationMessages" runat="server">

        <div id="mailAppErrorServerNotIFDEnabled" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconError" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.IFDSettings' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.IFDSettings" runat="server"/>
                    <a id="detailsLink" tabindex="0" href="#" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.IFDSettings.Details' runat='server'/>">
                        <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.IFDSettings.Details" runat="server"/>
                    </a>
                </span>
            </div>
        </div>
        <div id="detailsExpand" class="ms-crm-appsForDynamicsCrm-messages-text" style="visibility: hidden; display: none" runat="server">
            <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled' runat='server'/>">
                <loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled" runat="server"/>
            </span>
            <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.IFDSettings.Details.Description' runat='server'/>">
                <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.IFDSettings.Details.Description" runat="server"/>
            </span>
            <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
                <a id="learnMoreIFD" href="https://go.microsoft.com/fwlink/p/?LinkID=723354" target="_blank" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink' runat='server'/>">
                    <loc:Text ResourceId="MailApp.RootPage.Settings.IFDEnabled.LearnMoreLink" runat="server"/>
                </a>
            </span>
        </div>

        <div id="mailAppErrorOrgServerSideSyncSetup" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconError" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.OrgEmailSettings' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.OrgEmailSettings" runat="server"/>
                    <a id="learnMoreSSSOrgLink" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
                        <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
                    </a>
                </span>
            </div>
        </div>

        <div id="mailAppErrorUserServerSideSyncSetup" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconError" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.UserEmailSettings' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.UserEmailSettings" runat="server"/>
                    <a id="learnMoreSSSUserLink" tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-links-text" href="#" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
                        <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
                    </a>
                </span>
            </div>
        </div>

        <div id="mailAppErrorUserPrivilege" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconError" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.UserPrivilege' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.UserPrivilege" runat="server"/>
                    <a id="learnMoreUserPrivLink" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
                        <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
                    </a>
                </span>
            </div>
        </div>

        <div id="mailAppErrorAlreadyAdded" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconSuccess" alt="" src="/_imgs/appsforcrm/apps_message_icon_confirmed_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.AlreadyAdded' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.AlreadyAdded" runat="server"/>
                    <a tabindex="0" href="#" id="readdLink" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.ReAdd' runat='server'/>">
                        <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.ReAdd" runat="server"/>
                    </a>
                </span>
            </div>
        </div>

        <div id="mailAppSuccessMessage" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconSuccess" alt="" src="/_imgs/appsforcrm/apps_message_icon_confirmed_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-title" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.PendingAdd' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.PendingAdd" runat="server"/>
                </span>
                <br/>
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.PendingAdd.Details' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.PendingAdd.Details" runat="server"/>
                </span>
            </div>
        </div>

        <div id="mailAppErrorPending" class="ms-crm-appsForDynamicsCrm-messages" runat="server">
            <div class="ms-crm-icon">
                <img id="iconError" alt="" src="/_imgs/appsforcrm/apps_message_icon_error_16x16.png"/>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-messages-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog.AppsForCrm.MailApp.Info.ErrorAdding' runat='server'/>">
                    <loc:Text ResourceId="Dialog.AppsForCrm.MailApp.Info.ErrorAdding" runat="server"/>
                    <div id="installErrorMessage" style="display: inline-block;"></div>
                    <a id="tryAgainLink" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.TryAgain' runat='server'/>">
                        <loc:Text ResourceId="MailApp.Generic.TryAgain" runat="server"/>
                    </a>
                </span>
            </div>
        </div>
        <div id="detailMessagePopup" class="ms-crm-appsForDynamicsCrm-detail-message" runat="server">
            <div class="ms-crm-popup-icon">
                <a tabindex="0" id="closePopupMessage" href="#">
                    <img id="iconClose" alt="" src="/_imgs/appsforcrm/close_icon_tooltip_hover_12x12.png"/>
                </a>
            </div>
            <div class="ms-crm-appsForDynamicsCrm-detail-message-text">
                <span tabindex="0" class="ms-crm-appsForDynamicsCrm-messages-text-regular" id="popupMessage">
                </span>
            </div>
        </div>

    </div>
</div>


<div id="outlookClientSection" class="ms-crm-appsForDynamicsCrm-sectionHeader" runat="server">
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-subTitle">
        <loc:text ResourceId="Dialog.AppsForCrm.OutlookClient.Title" runat="server"/>
    </span>
    <br/>
    <span tabindex="0" class="ms-crm-appsForDynamicsCrm-text-regular">
        <loc:text ResourceId="Dialog.AppsForCrm.OutlookClient.Description" runat="server"/>
        <a id="learnMoreLink" target="_blank" href="https://go.microsoft.com/fwlink/p/?LinkId=395156" class="ms-crm-appsForDynamicsCrm-messages-links-text" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
            <loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server"/>
        </a>
    </span>
    <div id="outlookClientFooter" class="ms-crm-appsForDynamicsCrm-Footer" runat="server">
        <ul id="horizontalButtons">
            <li>
                <input id="cmdOutlookClient" title="<loc:text ResourceId='Dialog.AppsForCrm.OutlookClient.ButtonText' runat='server'/>" type="button" class="ms-crm-appsForDynamicsCrm-Button" value="<loc:text ResourceId='Dialog.AppsForCrm.OutlookClient.ButtonText' runat='server' />" "/>
            </li>
        </ul>
    </div>
</div>

</div>
<input type="hidden" id="SignupOutlookDownloadFWLink" runat="server"/>
</body>
</html>