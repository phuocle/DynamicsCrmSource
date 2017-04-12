<!DOCTYPE HTML>
<%@ Page Language="C#" Inherits="Microsoft.Crm.Common.Application.Web.Pages.MobileErrorHandlerPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Mobile.Application.Controls" Assembly="Microsoft.Crm.Mobile.Application.Components" %>
<%@ Register TagPrefix="appcnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
    <cnt:MobileHeader runat="server" id="MobileHeader"/>
</head>
<body class="main">
<div id="LogoArea" runat="server"></div>
<div class="errBanner">
    <loc:text resourceid="Error_Title_NotFound" runat="server"/>
</div>
<div id="Content" class="errContent" runat="server">
    <table>
        <tbody>
        <tr>
            <td class="imgCell">
                <img runat="server" id="ImageErrorIcon"/>
            </td>
            <td>
                <div runat="server" id="ErrorTitle" class="errTtl">
                </div>
                <br/>
                <div runat="server" id="ErrorText">
                </div>
                <br/>
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <form id="crmFormBack" method="get" action="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(goBackLink) %>">
                                <div id="GoBack" runat="server"/>
                            </form>
                        </td>
                        <td>
                            <form id="crmFormHome" method="get" action="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(goHomeLink) %>">
                                <div id="GoHome" runat="server"/>
                            </form>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>