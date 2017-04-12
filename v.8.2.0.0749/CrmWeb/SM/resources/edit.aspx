<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.Resources.DetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        Sys.Application.add_load(WindowOnLoad);

        function WindowOnLoad() {
            $addHandler($get("crmForm"), "submit", SubmitOverride);
        }


        function SubmitOverride() {
            return false;
        }
    </script>
    <style type="text/css">
        div.ms-crm-Form-Area {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
        }

        #navBarContainer {
            margin-top: 4px;
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: 0px;
            <% }
               else
               { %>
            left: 0px;
            <% } %>
            width: <loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;
        }

        #tdAreas {
            position: absolute;
            top: 0px;
            bottom: 0px;

            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            left: 0px;
            right: <loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;
            <% }
               else
               { %>
            right: 0px;
            left: <loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;
            <% } %>
        }

    </style>

</head>
<body>
<div class="ms-crm-Form-Layout">
    <div style="height: 92px; position: absolute; top: 0px; left: 0px; right: 0px;">
        <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div id="navBarContainer" class="ms-crm-Form-Nav-Container">
            <cnt:appnavigationbar id="crmNavBar" runat="server"/>
        </div>
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div id="areaForm" class="ms-crm-Form-Area ms-crm-absolutePosition">
                <frm:crudform id="crmForm" runat="server"/>
            </div>
        </div>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>