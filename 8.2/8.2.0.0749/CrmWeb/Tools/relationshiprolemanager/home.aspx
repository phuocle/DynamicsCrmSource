<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.RelationshipRole.Home" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script type="text/javascript" language="javascript">

        Sys.Application.add_load(WindowOnLoad);

        function WindowOnLoad() {
            HandleBackButtonIssues(null);
        }

    </script>
    <style type="text/css">
        .RelRoleMgr_home_table { height: 100%; }
    </style>
</head>
<body class="stage">
<div class="stdTable">
    <div class="ms-crm-home-querycontainer" style="height: 68px">
        <table width="100%" height="50%" cellpadding="0" cellspacing="0">
            <col width="70%"><col width="30%">
            <tr>
                <td>
                    <label class="ms-crm-Setting-ContextHeader-Title">
                        <loc:Text ResourceId="RelationshipRole_Title" runat="server"/>
                    </label>
                </td>
                <td>
                    <cnt:AppQuickFind id="crmQuickFind" runat="server"/>
                </td>
            </tr>
        </table>
        <table width="100%" height="50%" cellpadding="0" cellspacing="0">
            <col><col><col width="80%">
            <tr>
                <td nowrap class="RelRoleMgr_home_td_Value">
                    <label for="crmGrid_SavedQuerySelector">
                        <span class="ms-crm-Bold-Header">
                            <loc:text resourceid="Web.View_Label_70" runat="server" id="Text1"/>
                        </span>
                    </label>
                </td>
                <td>
                    <cnt:AppViewSelector runat="server" id="crmViewSelector"/>
                </td>
                <td align="center">
                    <span class="RelRoleMgr_home_span_spacer">&nbsp;</span>
                </td>
            </tr>
        </table>
    </div>
    <div class="ms-crm-home-menucontainer">
        <mnu:appgridmenubar id="crmMenuBar" runat="server"/>
    </div>
    <div class="ms-crm-absolutePosition" style="top: 94px">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="false"/>
        </div>
    </div>
</div>
</body>
</html>