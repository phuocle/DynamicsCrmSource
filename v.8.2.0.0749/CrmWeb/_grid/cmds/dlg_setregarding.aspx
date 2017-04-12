<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.SetRegardingDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">
        _custParams = "&sSubTypes=" + CrmEncodeDecode.CrmUrlEncode(_subTypes);
        Sys.Application.add_load(PageLoad);

        function applychanges() {

            var regardingValue = Mscrm.FormControlInputBehavior.GetBehavior("regardingobjectid");
            var regVal = regardingValue.get_dataValue();
            if (!IsNull(regVal) && !IsNull(regVal[0])) {
                _custParams += "&regId=" + CrmEncodeDecode.CrmUrlEncode(regVal[0].id);
                _custParams += "&rtypecode=" + CrmEncodeDecode.CrmUrlEncode(regVal[0].type);
                go();
            } else {
                closeWindow();
            }
        }

        function activateButton() {
            var regardingValue = Mscrm.FormControlInputBehavior.GetBehavior("regardingobjectid");
            var regVal = regardingValue.get_dataValue();
            if (!IsNull(regVal) && !IsNull(regVal[0])) {
                document.getElementById("butBegin").removeAttribute('disabled');
            } else {
                document.getElementById("butBegin").setAttribute('disabled', true);
            }
        }

        function PageLoad() {
            var lookup = Mscrm.FormControlInputBehavior.GetBehavior("regardingobjectid");
            lookup.add_afterSelect(activateButton);
            activateButton();
        }
    </script>
</head>
<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
    <table cellspacing="0" cellpadding="0" width="100%" style="height: 100%" border="0" class="stdtable">
        <colgroup>
            <col width="20px"/>
            <col width="140px"/>
            <col/>
        </colgroup>
        <tr>
            <td/>
            <td>

            </td>
            <td/>
        </tr>
        <tr>
            <td/>
            <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_SetRegarding_RegardingLabel' runat='server'/>">
                <label for="regardingobjectid">
                    <loc:Text ResourceId="Dialog_SetRegarding_RegardingLabel" runat="server"/>
                </label>
            </td>
            <td align="left">
                <sdk:RegardingControl id="regardingobjectid" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>