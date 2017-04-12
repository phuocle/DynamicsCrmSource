<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.GrantDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>

<!DOCTYPE html >
<html>
<head>
    <title>
        <loc:Text ResourceId="Dialog_Grant_DialogTitle" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <style type="text/css">

        td.gridRecord { border-bottom: 1px solid #DDDDDD; }

        .Principals_Container {
            width: 24%;
            right: 75%;
        }

        .Permissions_Container {
            width: 75%;
            left: 25%;
        }

        .Principals_MenuBar, .Permissions_MenuBar {
            top: 0px;
            height: 27px;
        }

        .Principals_Grid, .Permissions_Grid {
            top: 27px;
            bottom: 0px;
        }

        div.ms-crm-appgridmenubar { border-color: #DDDDDD !important; }

        div.ms-crm-ListControl { border-color: #DDDDDD !important; }
    </style>

    <!--[if IE 7]>
        <style>
            Div.Principals_Grid, Div.Permissions_Grid { height: 90%; }
        </style>
    <![endif]-->
    <script type="text/javascript">
        Sys.Application.add_load(Mscrm.PrincipalObjectAttributeAccess.applicationLoad);
    </script>

    <xml id="returnXML"/>
</head>
<body style="height: 100%;">
<frm:DialogForm ID="crmForm" runat="server" style="height: 100%;">
    <div class="stdTable">
        <div class="Principals_Container  ms-crm-absolutePosition">
            <div class=" Principals_MenuBar ms-crm-absolutePosition">
                <mnu:AppGridMenuBar ID="principalsMenuBar" style="height: 27px;" runat="server"/>
            </div>
            <div class="Principals_Grid ms-crm-absolutePosition">
                <app:AppGrid ID="principalsGrid" style="height: 100%; width: 100%; position: absolute" runat="server"/>
            </div>
        </div>
        <div class="Permissions_Container ms-crm-absolutePosition">
            <div class="Permissions_MenuBar ms-crm-absolutePosition">
                <mnu:AppGridMenuBar ID="permissionsMenuBar" style="height: 27px;" runat="server"/>
            </div>
            <div class="Permissions_Grid ms-crm-absolutePosition" style="top: 27px; bottom: 0px">
                <app:AppGrid ID="permissionsGrid" style="height: 100%; width: 100%; position: absolute" runat="server"/>
            </div>
        </div>
    </div>
</frm:DialogForm>
</body>
</html>