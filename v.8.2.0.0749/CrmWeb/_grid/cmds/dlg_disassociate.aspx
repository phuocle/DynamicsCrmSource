<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DisassociateDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var _sAction = "disassociate";
        var _iObjType =
            <%= int.Parse(Request.QueryString["iObjType"], NumberStyles.Integer, CultureInfo.InvariantCulture) %>;

        function applychanges() {
            _custParams = CustParams;
            <%
                switch (ParentType)
                {
                    case Util.Invoice:
                    case Util.Opportunity:
                    case Util.Product:
                    case Util.Quote:
                    case Util.SalesLiterature:
                    case Util.SalesOrder:
                    case Util.Campaign:
                    case Util.CampaignActivity:
                    case Util.List:
            %>
            var sRoleOrd = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["roleOrd"]) %>;
            sRoleOrd = (IsNull(sRoleOrd) || sRoleOrd.length == 0) ? -1 : sRoleOrd;
            var iRoleOrd = parseInt(sRoleOrd, 10);
            if (iRoleOrd != -1) {
                _custParams += "&bReverse=" + ((iRoleOrd == 2) ? 1 : 0);
            }
            <%
                        break;
                    default:
            %>
            var sRoleOrd = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["roleOrd"]) %>;
            sRoleOrd = (IsNull(sRoleOrd) || sRoleOrd.length == 0) ? -1 : sRoleOrd;
            var iRoleOrd = parseInt(sRoleOrd, 10);
            _custParams += "&bReverse=" + ((iRoleOrd == -1 || iRoleOrd == 2) ? 1 : 0);
            <%
                        break;
                }
            %>

            go();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription) %>

</frm:DialogForm>

</body>
</html>