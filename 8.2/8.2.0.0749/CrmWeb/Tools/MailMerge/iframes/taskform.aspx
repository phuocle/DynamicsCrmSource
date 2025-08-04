<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.MailMerge.TaskFormPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<cnt:AppHeader id="crmHeader" runat="server"/>
<head>
    <style type="text/css">
        TABLE.ms-crm-Form-Area { border-left: none; }

        body { background-color: #eef0f6; }
    </style>
</head>
<body>
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td>
            <frm:ActivityForm id="crmForm" runat="server"/>
        </td>
    </tr>
</table>
</body>
</html>