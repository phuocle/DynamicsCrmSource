<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Root.TopBar" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <object id="_crmRcUtil" classid='clsid:DB6B56B9-28E7-459C-9978-DC853F1D5C2E' style='display: none'>
    </object>
    <script type="text/javascript">

        function DownloadClient() {
            var sUrl = "/_root/ClientInstaller.exe";

            var oFrame = window.document.frames.frmDownloadOlk;
            if (IsNull(oFrame)) {
                var srcValue = Mscrm.CrmUri.create('/_root/Blank.aspx').ToString();
                oFrame = window.document
                    .createElement("<iframe style='display:none' id='frmDownloadOlk' name='frmDownloadOlk' src='" +
                        CrmEncodeDecode.CrmHtmlAttributeEncode(srcValue) +
                        "'></iframe>");
                oFrame = window.document.body.insertBefore(oFrame);

                window.setTimeout("window.document.frames.frmDownloadOlk.location = \"" + sUrl + "\"", 10);
            } else {
                oFrame.location = sUrl;
            }
        }

        window.attachEvent("onload", CheckAddin);

        function CheckAddin() {
            window.setTimeout("CheckAddinAsync()", 0);
        }

        function CheckAddinAsync() {
            if (!IsNull(document.getElementById("btn_download_olk"))) {
                try {
                    var sUrl;
                    var srvrUrl = _crmRcUtil.ServerUrl;
                    if (srvrUrl == null) {

                    } else {
                        hideSpan();
                    }
                } catch (err) {


                    if (err.number == -2146827837) {
                        hideSpan();
                    }
                    if (err.number == -2146827850) {
                        hideSpan();
                    }
                }
            }
        }

        function hideSpan() {
            document.getElementById("btn_download_olk").style.visibility = "hidden";
        }
    </script>
</head>
<body>
<table id="barTopTable" cellpadding="0" cellspacing="0">
    <tr>
        <td colspan="2">
            <table class="ms-crm-MastHead" cellpadding="0" cellspacing="0">
                <tr>
                    <% if (this.IsCrmLive)
                       { %>
                    <td class="ms-crm-MastHead-Logo-Live ms-crm-MastHead-SignIn" id="tdLogoMastHeadBar">
                    <% }
                       else
                       { %>
                        <td class="ms-crm-MastHead-Logo ms-crm-MastHead-SignIn" id="tdLogoMastHeadBar">
                            <% } %>
                            <%= RenderUserInfo() %>
                            <% if (ShouldRenderSignOutLink())
                               { %>
                                <span class="ms-crm-MastHead-SignOut" id="tdSignOut">
                                    <%= signOutHtml %>
                                </span>
                            <% } %>
                        </td>
                    </tr>
            </table>
        </td>
    </tr>
    <tr>

        <td width="<loc:Text Encoding='HtmlAttribute' ResourceId='HomePage_Left_Navigation_Frame_Width' runat='server'/>" id="leftContextTD">
            <table class="ms-crm-NavHeader stdTable" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="ms-crm-NavHeader-Title">
                        <nobr id="tdLeftContextBar"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(leftContextBarTitle) %></nobr>
                    </td>

                </tr>
            </table>
        </td>
        <td>
            <table class="ms-crm-ContextHeader stdTable" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="ms-crm-ContextHeader-Title">
                        <nobr id="tdStageContextBar"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(stageContextBarTitle) %></nobr>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>