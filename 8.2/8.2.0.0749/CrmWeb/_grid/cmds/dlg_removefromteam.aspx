<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RemoveFromTeamDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">


        var _sAction = "removefromteam";
        var _iObjType = <%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>;

        function applychanges() {
            go();
        }

        function handleLookup(sender, args) {
            processLookupIds(args.get_result(), $get("butBegin"));
        }

        Sys.Application.add_load(function() {
            Mscrm.FormControlInputBehavior.GetBehavior('crmUserLookup').add_afterSelect(handleLookup);
            $get("butBegin").disabled = true;
        });
    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <col width="70"><col>
        <tr>
            <td valign="top" style="padding-top: 10px;">
                <label for="crmUserLookup">
                    <loc:Text ResourceId="Web._grid.cmds.dlg_removefromteam.aspx_45" runat="server"/>
                </label>
            </td>
            <td valign="top">
                <sdk:LookupControl id="crmUserLookup" AccessibilityLabelResourceId="Web._grid.cmds.dlg_removefromteam.aspx_45" Lookupbrowse="false" LookupStyle="multi" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>

</body>
</html>