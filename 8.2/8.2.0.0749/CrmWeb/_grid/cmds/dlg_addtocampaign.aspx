<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Dialogs.AddToCampaignDialogPage" CodeBehind="Microsoft.Crm.Marketing.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <style type="text/css">
        .myclass { border: 0; }
    </style>
    <script language="JavaScript">
        var _sAction = "addtocampaign";
        var _iObjType = <%= ObjectType.ToString("D", CultureInfo.InvariantCulture) %>;

        $addHandler(window, "load", windowOnLoad)

        function windowOnLoad() {
            $get("butBegin").focus();
        }

        function confirmMode(b) {
            Mscrm.Utilities.setReturnValue(b);
            closeWindow();
        }

        function applychanges() {
            _custParams += "&itemObjectId=" +
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["itemObjectId"])) %>;
            _custParams += "&itemObjectTypeCode=" +
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["itemObjectTypeCode"])) %>;

            if ($get("RadAddMLToCampAndActs").checked) {
                _custParams += "&subtype=AddtoCA";
            }

            <%= DialogActionOk %>
        }

        <%


            if (DialogActionCancel != String.Empty)
            {
        %>
        function cancel() {
            <%= DialogActionCancel %>
        }
        <%
            }
        %>
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>
    <table border="0" style="width: 100%">
        <colgroup span="2">
            <col width="26"/>
        </colgroup>
        <tr>
            <td>
                <input class="radio" type="radio" id="RadAddMLToCampOnly" name="AddMLRadioGroup"/>
            </td>
            <td>
                <label for="RadAddMLToCampOnly">
                    <loc:Text ResourceId="MA.Campaign.Dialogs.ListAssoc.AddToCampaignOnly" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <input class="radio" type="radio" id="RadAddMLToCampAndActs" name="AddMLRadioGroup" checked="checked"/>
            </td>
            <td>
                <label for="RadAddMLToCampAndActs">
                    <loc:Text ResourceId="MA.Campaign.Dialogs.ListAssoc.AddToCampaignAndActivities" runat="server"/>
                </label>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>