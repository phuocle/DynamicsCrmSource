<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionUpgradeDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">

        $addHandler(window, "load", applychanges);

        function applychanges() {
            $get("btnCross").style.display = "none";
            window.closeParent = true;
            var parameter = new Mscrm.AsyncJobCommandParameter();
            var oCommand = new RemoteCommand("Solution", "PromoteSolution");
            oCommand.SetParameter("parentSolutionUniqueName",
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["solutionName"]) %>);
            parameter.cmd = oCommand;
            parameter.preAction = hideButtons;
            parameter.postAction = postDeletion;
            new Mscrm.AsyncJobCommand(parameter).executeCommand();
        }

        function cancel() {
            closeWindow();
        }

        function hideButtons() {
            $get("butBegin").style.display = "none";
            $get("cmdDialogCancel").style.display = "none";
            $get("progressTbl").style.display = "";
        }

        function postDeletion(result) {
            if (result) {
                Mscrm.Utilities.setReturnValue(true);
                closeWindow();
            }
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <table id="progressTbl" style="display: none; cursor: wait; height: 100%; width: 100%">
        <tr>
            <td valign="middle" align="center">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/>
                <br/>
                <nobr>
                    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(SpinCaption) %>
                </nobr>
            </td>
        </tr>
    </table>
</frm:DialogForm>

</body>
</html>