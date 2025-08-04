<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ConvertLeadDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">


        var _sAction = "convertlead";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;


        _custParams +=
            "&qualify=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(qualify)) %>";
        _custParams +=
            "&qlShowNew=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(qualifyShowNew)) %>";
        _custParams +=
            "&ulNewStatus=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ulNewStatus)) %>";

        function confirmMode(b) {
            Mscrm.Utilities.setReturnValue(b);
            closeWindow();
        }

        function applychanges() {
            <%= dialogActionOk %>
        }

        $addHandler(window, "load", window_onload_ConvertLead);

        function window_onload_ConvertLead() {
            applychanges();
        }

        <%


            if (dialogActionCancel != String.Empty)
            {
        %>
        function cancel() {
            <%= dialogActionCancel %>
        }
        <%
            }
        %>

    </script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">

    <loc:Text ResourceId="Web._grid.cmds.dlg_convertlead.aspx_55" runat="server"></loc:Text>

</frm:DialogForm>

</body>
</html>