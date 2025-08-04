<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ActivateAzureServiceConnection" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">
        var _sAction = "activate_azureserviceconnection";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;
        var cascadeModelState;

        function applychanges() {
            go();
        }

        function cancel() {
            closeWindow();
        }


        function getCustParamsForItem(i) {
            cascadeModelState = getControlValue("cbCascadeModelState");
            var sCustParamsForItem = "&cascadeModelState=" + cascadeModelState;
            return sCustParamsForItem;
        }

        function getControlValue(controlId) {
            var control = $get(controlId);
            var controlBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
            return controlBehavior.get_dataValue();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="1" cellspacing="1">
        <tr>
            <td style="padding-left: 10px">
                <loc:Argument runat="server"><%= ActivateModelAnalyticsMessage %></loc:Argument>
            </td>
        </tr>
        <tr>
            <td style="padding-left: 10px">
                <sdk:CheckBoxControl Required="true" id="cbCascadeModelState" runat="server"/>
                <loc:Argument runat="server"><%= ActivateModelConfirmationMessage %></loc:Argument>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>