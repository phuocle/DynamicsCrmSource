<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RemoveUsersDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_removeusers.aspx_34" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">


        var _sAction = "removeusers";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;

        function applychanges() {
            _custParams +=
                "&teamid=<%= new Guid(Request.QueryString["teamid"]).ToString("B", CultureInfo.InvariantCulture) %>";
            go();
        }

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <loc:Text ResourceId="Web._grid.cmds.dlg_removeusers.aspx_68" runat="server">
        <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(TargetName.ToLower(CrmCultureInfo.CurrentUICulture)) %></loc:Argument><loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjName.ToLower(CrmCultureInfo.CurrentCulture)) %></loc:Argument>
    </loc:Text>
</frm:DialogForm>
</body>
</html>