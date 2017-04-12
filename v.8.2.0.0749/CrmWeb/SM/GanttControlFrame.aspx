<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.GanttControlFrame" enableViewState="False"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Service.Application.Controls" Assembly="Microsoft.Crm.Service.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
</head>
<body class="ganttFrame">
<form id="CrmGanttForm" style="height: 100%;">
    <div id="gantt" style="width: 100%; height: 100%">
        <div id="crmGridTd" class="crmGridColumn">
            <div id="grid" class="GanttControlFrame_div_AppGrid">
                <div class="gridSpacer">&nbsp;</div>
                <div class="gridContainer">
                    <div style="height: 100%; width: 100%; position: absolute;">
                        <cnt:AppGrid id="crmGrid" runat="server"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="separator" class="abVSep" onmousedown="MouseDown(new Sys.UI.DomEvent(event))" onmouseup="MouseUp(new Sys.UI.DomEvent(event))"></div>
        <div id="crmGanttTd" class="crmGanttColumn">
            <div id="ganttSheet" class="ganttContainer">
                <div class="ganttWrapper" id="ganttWrapper">
                    <cnt:AppGantt id="crmGantt" runat="server"/>
                </div>
                <div class="bottomSpacerBar" id="bottomSpacerBar">
                    <table id="extraControls" style="width: 100%" cellspacing="0" cellpadding="0" runat="server">
                        <tr>
                            <td class="GanttControlFrame_td_FromDateSec">
                                <table>
                                    <tr>
                                        <td>
                                            <asp:Label runat="server" ID="FromLabel" AssociatedControlID="DateRangeStart" CssClass="GanttControlFrame_label"/>
                                        </td>
                                        <td style="width: 120px">
                                            <ui:DateTimeUI id="DateRangeStart" runat="server" TabIndex="8" AllowBlankDate="False" DisplayFormat="date"/>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>&nbsp;</td>
                            <td class="GanttControlFrame_td_EndDateSec">
                                <table style="width: 100%;">
                                    <tr>
                                        <td>
                                            <asp:Label runat="server" ID="ToLabel" AssociatedControlID="DateRangeEnd" CssClass="GanttControlFrame_label"/>
                                        </td>
                                        <td style="width: 120px">
                                            <ui:DateTimeUI id="DateRangeEnd" runat="server" TabIndex="9" AllowBlankDate="False" DisplayFormat="date"/>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <ui:Zoom id="zoom" runat="server" onselectchange="ZoomChanged();"/>
                                <table id="progressDiv" border="0" cellpadding="0" cellspacing="0" style="display: none; width: 100%">
                                    <tr>
                                        <td align="center" class="progressCell">
                                            <table style="margin: 0px; padding: 0px;" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td class="ms-crm-Gantt-Progress-Label"><loc:Text ResourceId="SM_Label_Progress" runat="server"/>&nbsp;</td>
                                                    <td>
                                                        <ui:ProgressBar id="validationProgress" runat="server"/>
                                                    </td>
                                                    <td class="ms-crm-Gantt-Progress-Cancel">
                                                        &nbsp;
                                                        <ui:Button ID="cancelValidationButton" OnClick="javascript:SetShowHideConflicts(false);" ResourceId="SM_Button_CancelValidation" runat="server"></ui:Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</form>
</body>
</html>