<%@ Page Language="C#" Inherits="Microsoft.Crm.Service.Web.Tools.SystemCustomization.Attributes.SelectStatusReasonDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:Text ResourceId="Web.Tools.ViewEditor.Dialogs.SelectValues.aspx_5" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">


        var dialogArguments = getDialogArguments();
        var _oStatusTransitionXml = dialogArguments.stateXml;
        var _oSrcStatusValue = dialogArguments.sourceStatusValue.toString();
        Mscrm.SetStatusTransition.entityTypeCode = parseInt(dialogArguments.entityTypeCode.toString(), 10);


        dialogArguments["valuesXml"] = Mscrm.SelectStatusTransition
            .createAvailableFieldsXml(_oStatusTransitionXml, _oSrcStatusValue);

        var allowedStatusTransitions = Mscrm.SelectStatusTransition
            .getAllowedTransitionsForSelectedState(_oStatusTransitionXml,
                "states/state/values/value[@value='" +
                CrmEncodeDecode.CrmXmlAttributeEncode(_oSrcStatusValue) +
                "']/*[local-name() = 'allowedtransitions']/*[local-name() = 'allowedtransition']");
        dialogArguments["sSelectedValues"] = allowedStatusTransitions.join(';');

        function cancel() {
            <% if (Util.IsForOutlookClient())
               { %>
            window.parent.focus();
            <% }
               else
               { %>
            window.opener.focus();
            <% } %>
            closeWindow();
        }


        function applychanges() {
            var _oResult = {};
            var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows, iLen = oRows.length, sDependsAry = [];
            var _oAllowedTransitions = [];
            for (var i = 0; i < oRows.length; i++) {
                _oAllowedTransitions[i] = XUI.Html.DomUtils.GetFirstChild(oRows[i]).id;
            }
            _oResult["srcStatusValue"] = _oSrcStatusValue;
            _oResult["dstStatusValues"] = _oAllowedTransitions;
            Mscrm.Utilities.setReturnValue(_oResult);
            window.parent.focus();
            closeWindow(true);
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
        <tr>
            <td>
                <div id="divFieldSelect" width="100%">
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>