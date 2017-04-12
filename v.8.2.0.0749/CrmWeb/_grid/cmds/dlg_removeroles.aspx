<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RemoveRolesDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_removeroles.aspx_34" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">


        var _sAction = "removeroles";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;

        function applychanges() {
            <%
                if (this.RemovingOwnRole)
                {
            %>
            if (!confirm(LOCID_MODIFYING_OWN_ROLE)) {
                return;
            }
            <%
                }
            %>
            _custParams +=
                "&iAllRoles=<%= iAllRoles %>&userid=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["userid"])) %>";
            go();
        }

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(message) %>
</frm:DialogForm>
</body>
</html>