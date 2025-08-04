<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.RunReportDialog" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Web" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="ContextReportDialog_Label_Title" runat="server"/>
    </title>

    <script type="text/javascript" language="javascript">


        var RESULT_CANCEL = -1;
        var RESULT_SELECTED = 0;
        var RESULT_VIEW = 1;
        var RESULT_DEFAULT = 2;

        function Ok() {
            if (!IsNull($get("reportSelected")) && $get("reportSelected").checked) {
                window.returnValue = RESULT_SELECTED;
            } else if ($get("reportView").checked) {
                window.returnValue = RESULT_VIEW;
            } else if ($get("reportDefault").checked) {
                window.returnValue = RESULT_DEFAULT;
            }
            Mscrm.Utilities.setReturnValue(window.returnValue);
            closeWindow(true);
        }

        function Close() {
            Mscrm.Utilities.setReturnValue(RESULT_CANCEL);
            closeWindow(true);
        }

    </script>
</head>
<body>
<form name="crmDialog" style="height: 100%">
    <div class="ms-crm-RefreshDialog-Main-Container">
        <div class="ms-crm-RefreshDialog-Header">
            <a href="#" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_Button_Cancel' runat='server'/>" class="ms-crm-RefreshDialog-FirstTopButton" id="btnCross" tabIndex="1">
                <img src="/_imgs/CloseDialog.png" style="height: 16px; width: 16px;" onclick="Close(new Sys.UI.DomEvent(event));"/>
            </a>
            <div class="ms-crm-RefreshDialog-Header-Title">
                <loc:Text ResourceId="ContextReportDialog_Label_Title" runat="server"/>
            </div>
            <div class="ms-crm-RefreshDialog-Header-Desc">
                <loc:Text ResourceId="ContextReportDialog_Label_Description" runat="server"/>
            </div>
        </div>
        <div class="ms-crm-RefreshDialog-Main">
            <div style="margin-left: 30px; margin-right: 30px">
                <table width="100%" cellpadding="0" cellspacing="5" style="table-layout: fixed;">
                    <col style="width: 20px"/>
                    <col style="width: 100%"/>
                    <tr>
                        <td colspan="2">
                            <b>
                                <loc:Text ResourceId="Label_ReportColon" runat="server"/> <% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(reportName) %>
                            </b>
                        </td>
                    </tr>
                    <% if ((reportDescription != null) && (reportDescription.Length > 0))
                       { %>
                        <tr>
                            <td colspan="2" class="ms-crm-Field-Normal">
                                <nobr>
                                    <loc:Text ResourceId="ReportViewer_Label_BeforeReportDescription" runat="server"/> <% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(reportDescription) %>
                                </nobr>
                            </td>
                        </tr>
                    <% } %>

                    <tr>
                        <td colspan="2">
                            <hr>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <b>
                                <loc:Text ResourceId="ContextReportDialog_Label_Prompt" runat="server"/>
                            </b>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <cnt:AppNotifications id="Notifications" runat="server"/>
                        </td>
                    </tr>

                    <tr style="vertical-align: top">
                        <td>
                            <input type="radio" name="recordOptions" id="reportDefault" tabIndex="1" style="border: 0px; width: 20px; cursor: pointer;" checked="true">
                        </td>
                        <td>
                            <label for="reportDefault" style="cursor: pointer;"><loc:Text ResourceId="ContextReportDialog_Label_OptionDefault" runat="server"/>
                        </td>
                    </tr>

                    <% if (showSelectedRadio)
                       { %>
                        <tr style="vertical-align: top"<% if (!enableSelectedRadio)
                                                          { %> disabled<% } %>>
                            <td>
                                <input type="radio" name="recordOptions" id="reportSelected" tabIndex="1" style="border: 0px; width: 20px; cursor: pointer;">
                            </td>
                            <td>
                                <label for="reportSelected" style="cursor: pointer;">
                                    <loc:Text ResourceId="ContextReportDialog_Label_OptionSelected" runat="server"/>
                                </label>
                            </td>
                        </tr>
                    <% } %>

                    <tr style="vertical-align: top"<% if (!enableViewRadio)
                                                      { %> disabled <% } %>>
                        <td>
                            <input type="radio" name="recordOptions" id="reportView" tabIndex="1" style="border: 0px; width: 20px; cursor: pointer;"<% if (!enableViewRadio)
                                                                                                                                                       { %> disabled<% } %>>
                        </td>
                        <td>
                            <label for="reportView" style="cursor: pointer;">
                                <loc:Text ResourceId="ContextReportDialog_Label_OptionView" runat="server"/>
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="ms-crm-Dialog-Buttons">
            <ui:Button ID="butBegin" OnClick="Ok();" ResourceId="Label_RunReport" runat="server" CssClass="ms-crm-RefreshDialog-Button"></ui:Button>
            &nbsp;
            <ui:Button ID="cmdDialogCancel" OnClick="Close();" ResourceId="ContextReportDialog_Button_Cancel" runat="server" CssClass="ms-crm-RefreshDialog-Button"></ui:Button>
        </div>
    </div>
</form>
</body>
</html>