<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemPickDialogForm"
CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <style type="text/css">
        div.Desc {
            padding-top: 5px;
            color: #444444;
        }

        .ms-crm-RefreshDialog-Main { top: 75px; }
    </style>
    <script type="text/javascript">


        var _sAction = "queueitempick";

        function applychanges() {
            _custParams += "&workerid=" + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.context.getUserId());
            if ($get("chkBoxRemove").checked) {
                _custParams += "&isQueueItemRemove=1";
                go();
            } else {
                _custParams += "&isQueueItemRemove=0";
                go();
            }
        }
    </script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <col width="26"><col>
        <tr>
            <td valign="top" colspan="2">
                <div class="Desc">
                    <loc:Text ResourceId="Dialog_QueueItemWorkOn_Me_Description" runat="server"></loc:Text>
                </div>
            </td>
        </tr>
        <br/>
        <tr>
            <td valign="top" style="padding-bottom: 8px;">
                <input tabindex="1" class="checkbox" type="checkbox" name="type" id="chkBoxRemove">
            </td>
            <td valign="top" style="padding-bottom: 8px;">
                <label for="chkBoxRemove">
                    <loc:Text ResourceId="Dialog_QueueItemWorkOn_Remove_Check_Label" runat="server"/>
                </label>
            </td>
        </tr>
    </table>
</frm:dialogform>
</body>
</html>