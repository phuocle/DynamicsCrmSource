<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ChangeFormStateDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var _sAction = "changeformstate";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;
        var _formRenderState = <%= formRenderState %>;

        if (_formRenderState == 1) {
            document.title = LOCID_CONFIRM_ACTIVATE;
        } else {
            document.title = LOCID_CONFIRM_DEACTIVATE;
        }


        _custParams =
            "&formRenderState=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(formRenderState.ToString(CultureInfo.InvariantCulture))) %>";

        function applychanges() {
            go();
        }
    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="height: auto">
        <cnt:AppNotifications id="Notifications" runat="server"/>
    </div>
    <div style="height: auto; padding-top: 2%">
        <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>
    </div>
</frm:DialogForm>
</body>
</html>