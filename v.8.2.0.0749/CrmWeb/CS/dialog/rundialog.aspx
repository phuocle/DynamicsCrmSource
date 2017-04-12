<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.CS.Dialog.RunDialogPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>

<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <style type="text/css">
        DIV.ms-crm-WizardForm-Main {
            position: absolute;
            top: 65px;
            bottom: 121px;
            width: 100%;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 0px;
            padding-left: 0px;
            overflow-x: hidden;
        }

        DIV.ms-crm-WizardForm-Footer {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 120px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 0px;
            padding-left: 0px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            text-align: left;
            <% }
               else
               { %>
            text-align: right;
            <% } %>
        }

        DIV.ms-crm-WizardForm-Body {
            width: 100%;
            top: 0px;
        }

        DIV.ms-crm-WizardForm-Body-Inner {
            width: 100%;
            top: 0px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 0px;
            <% }
               else
               { %>
            right: 0px;
            <% } %>
            bottom: 0px;
            height: auto;
            margin-left: 0px;
            margin-right: 0px;
        }

        .ms-crm-IE7-td-Texarea-Container,
        .ms-crm-IE7-Texarea { position: static; }

        #scriptHintControl {
            display: block;
            position: absolute;
            width: 28%;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-right: 10px;
            <% }
               else
               { %>
            padding-left: 10px;
            <% } %>
        }

        .RowTable { overflow: hidden; }
    </style>
    <script type="text/javascript">

        function CallNext() {
            if ($find('scriptSessionStage') != null &&
                $find('scriptGroupControl') != null &&
                $find('scriptHintControl') != null) {
                ($find('scriptSessionStage')).Next();
            } else {
                window.setTimeout(CallNext, 100);
            }
        }

        function PageLoad() {

            _UI_TEXT_SELECTABLE = "1";
            $addHandler(document.getElementById("wizardFormMain"), 'scroll', scrollHint);
        }

        $addHandler(window, 'load', PageLoad);
        $addHandler(window, 'load', CallNext);
        $addHandler(window, 'resize', callScrollHint);
        $addHandler(document, 'keydown', HandleKeyDown);

        function HandleKeyDown(eventObj) {

            if (eventObj.keyCode == 116) {
                eventObj.keyCode = 0;
                eventObj.stopPropagation();
                return false;
            } else if (eventObj.keyCode == 27) {
                eventObj.keyCode = 0;
                eventObj.stopPropagation();
                closeWindow();
                return false;
            }
        }

        function callScrollHint() {
            window.setTimeout(scrollHint, 1);
        }

        function scrollHint() {
            try {
                var hintDiv = document.getElementById("scriptHintControl");
                var boundaryDiv = document.getElementById("boundary");
                var paneStripDiv = document.getElementById("paneStripDiv");
                var collapseHintDiv = document.getElementById("collapseHint");
                var wizardFormMainDiv = document.getElementById("wizardFormMain");
                if (hintDiv != null && wizardFormMainDiv != null) {
                    hintDiv.style.top = (wizardFormMainDiv.scrollTop + 14) + "px";
                }
                if (boundaryDiv != null && wizardFormMainDiv != null) {
                    boundaryDiv.style.top = (wizardFormMainDiv.scrollTop) + "px";
                }
                if (paneStripDiv != null) {
                    paneStripDiv.style.top = (wizardFormMainDiv.scrollTop - 1) + "px";
                }
                if (collapseHintDiv != null) {
                    collapseHintDiv.style.top = (wizardFormMainDiv.scrollTop + 3) + "px";
                }
                ($find('scriptSessionStage')).ResizeHint();
            } catch (ex) {

            }
        }
    </script>

</head>
<body>
<div id="scriptWaiting" style="position: absolute; height: 100%; width: 100%; background: white; z-index: 1;">
    <table height='100%' width='100%' cellspacing="0" cellpadding="0" style='cursor: wait' id='waitLayout'>
        <tr>
            <td valign='middle' align='center'>
                <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.UIScripts.RunScriptForm.PageLoadingAltTag' runat='server'/>" src='/_imgs/AdvFind/progress.gif'/>
            </td>
        </tr>
    </table>
</div>
<div id="runScriptForm" style="position: absolute; width: 100%; height: 100%; z-index: -1;">
    <frm:UIScriptWizardForm id="crmForm" runat="server">
        <cnt:ScriptSessionStage runat="server"/>
        <div id="scriptRun">
            <table class="stdTable" height="100%" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td id="promptResponseColumn" valign="top" style="padding-bottom: 14px; width: auto">
                        <cnt:AppNotifications id="notificationWarning" runat="server"/>
                        <div style="padding-top: 14px; display: block">
                            <span id="scriptGroupControl"></span>
                        </div>
                    </td>
                    <td width="28%" valign="top" id="hintColumn">
                        <div id="boundary" class="boundary"></div>
                        <div id="scriptHintControl"></div>
                        <div id="collapseHint" class="collapseHint">
                            <a onclick="$find('scriptSessionStage').ShowSideStrip(true);" href="#">
                                <img src="/_imgs/navRight.png" class="ms-crm-RTL-Flip" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Collapsed_View' runat='server'/>"/>
                            </a>
                        </div>
                    </td>
                    <td class="ms-crm-control-SideStrip-LeftRight" id="expandHintColumn" style="width: 22px; display: none">
                        <div class="ms-crm-control-SideStrip sideStrip" id="paneStripDiv" style="height: 100%; width: 22px;" onmouseover="this.className = 'ms-crm-control-SideStrip-Hovered sideStrip'" onmouseout="this.className = 'ms-crm-control-SideStrip sideStrip'">
                            <a onclick="$find('scriptSessionStage').ShowSideStrip(false);" href="#">
                                <table width="100%" height="100%" class="ms-crm-control-strip-table visualizationImageTable" style="border-bottom: 1px solid;" cellSpacing="0" cellPadding="0">
                                    <tr height="20">
                                        <td align="center">
                                            <span id="navLeftSpan">
                                                <img src="/_imgs/navLeft.png" class="ms-crm-RTL-Flip" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Normal_View' runat='server'/>"/>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" valign="top">
                                            <span id="stripDividerSpan">
                                                <img alt="" src="/_imgs/grid/stripDivider.gif"/>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="100%" align="center" vAlign="top">
                                            <label title="Tip" class="ms-crm-stripLeftRight ms-crm-stripChartLabelLeftRight">
                                                <loc:Text ResourceId="Web.UIScripts.RunScriptForm.Suggestion" runat="server"/>
                                            </label>
                                        </td>
                                    </tr>
                                </table>
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="finishScriptText">
            <table class="stdTable" height="100%" width="100%">
                <tr>
                    <td class="FinishText">
                        <loc:Text ResourceId="Web.UIScripts.RunScriptForm.FinishScriptText" runat="server"/>
                    </td>
                </tr>
            </table>
        </div>
        <div style="display: none">
            <ui:DateTimeUI id="hiddenDateTime" runat="server"/>
            <sdk:LookupControl id="webResources_lookup" LookupBrowse="false" LookupStyle="single" runat="server"/>
        </div>
    </frm:UIScriptWizardForm>
</div>
</body>
</html>