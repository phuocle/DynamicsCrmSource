<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DepartGroupsDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var _sAction = "departgroups";
        var _iObjType = <%= objType.ToString("D", CultureInfo.InvariantCulture) %>;

        function applychanges() {
            _custParams +=
                "&targetid=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["targetid"])) %>";
            go();
        }
    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <loc:Text ResourceId="Depart_Groups_Confirmation" runat="server"/>
</frm:DialogForm>
</body>
</html>