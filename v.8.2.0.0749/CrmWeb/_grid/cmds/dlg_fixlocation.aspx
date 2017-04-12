<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.FixLocationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript">
        function cancel() {
            closeWindow();
        }

        function fixUrl() {
            window.returnValue = true;
            closeWindow();
        }
    </script>
    <style type="text/css">
        html { overflow: auto; }
    </style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed">
        <col width="20%"/> <col/>
        <tr>
            <td align="center" rowspan="4">
                <img src="/_imgs/error/err_48_2.gif"/>
            </td>
            <td>
                <table cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed">
                    <col width="25%"/> <col/>
                    <tr>
                        <td>
                            <loc:Text ResourceId="DocumentManagement.FixLocation.LocationNameLabel" runat="server"/>
                        </td>
                        <td style="padding-left: 10">
                            <label><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(locationName) %></label>
                        </td>
                    </tr>
                    <tr style="height: 10px">
                        <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <loc:Text ResourceId="DocumentManagement.FixLocation.LocationUrlLabel" runat="server"/>
                        </td>
                        <td style="padding-left: 10">
                            <label><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(locationUrl) %></label>
                        </td>
                    </tr>
                    <tr style="height: 10px">
                        <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <loc:Text ResourceId="DocumentManagement.FixLocation.Description1" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <loc:Text ResourceId="DocumentManagement.FixLocation.Description2" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>