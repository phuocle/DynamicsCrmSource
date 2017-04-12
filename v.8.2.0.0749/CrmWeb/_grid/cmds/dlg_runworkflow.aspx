<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RunWorkflowDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var _sAction = "runworkflow";
        var _iObjType = <%= ObjType %>;
        var mode = true;

        function confirmMode(b) {
            window.returnValue = b;
        }

        $addHandler(window, "load", windowOnLoad)

        function windowOnLoad() {
            _custParams = "&wfId=" +
                CrmEncodeDecode.CrmUrlEncode("<%= Request.QueryString["wfId"] %>") +
                "&sIds=" +
                CrmEncodeDecode.CrmUrlEncode("<%= Request.QueryString["sIds"] %>");
        }

        function applychanges() {
            go();
        }


        function cancel() {
            closeWindow();
        }

    </script>
</head>
<body scroll="no">

<frm:DialogForm id="crmForm" runat="server">
    <table>
        <tr style="padding-top: 10px">
            <td style="padding-left: 5px; padding-right: 5px;">
                <loc:Text ResourceId="Dialog_RunWorkflow_Body" runat="server">
                    <loc:Argument runat="server">
                        <%= entityDisplayName %>
                    </loc:Argument>
                </loc:Text>
            </td>
        </tr>
        <tr style="padding-top: 20px">
            <td style="padding-left: 10px; padding-right: 10px;">
                <b>
                    <loc:Text ResourceId="Dialog_RunWorkflow_Body_Confirm" runat="server"/>
                </b>
            </td>
        </tr>

    </table>
</frm:DialogForm>

</body>
</html>