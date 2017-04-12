<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Connections.ConnectionRoleDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">
        Sys.Application.add_load(crmFormOnLoadHandler);

        function crmFormOnLoadHandler() {
            var oPrimaryEntity = Xrm.Page.data ? Xrm.Page.data.entity : null;
            if (oPrimaryEntity) {
                oPrimaryEntity.addOnSave(OnSave, true);
            }
        }

        function OnSave(src, args) {
            if (!$find("connectionroleobjecttypecodelist").IsValid()) {
                alert(LOCID_INVALID_CONNECTIONROLE);
                args.preventDefault();
            }
        }


        function RefreshParentGrid() {
            try {
                if (!IsNull(window.opener.RefreshParentGrid)) {
                    window.opener.RefreshParentGrid();
                } else {
                    window.opener.auto(ConnectionRole);
                }
            } catch (e) {
            }
        }

    </script>
    <style>
        .ms-crm-Form-Nav-Container {
            padding-top: 4px;
            width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
        }

        .ms-crm-NRForm-Main-Container {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            right: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% }
               else
               { %>
            left: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>;
            <% } %>
        }

        #description { width: 99%; }

    </style>
</head>
<body>
<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div class="ms-crm-Form-Nav-Container">
            <cnt:AppNavigationBar id="crmNavBar" runat="server"/>
        </div>
        <div id="mainContainer">
            <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
                <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <div id="areaForm">
                        <frm:CrudForm id="crmForm" runat="server"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>