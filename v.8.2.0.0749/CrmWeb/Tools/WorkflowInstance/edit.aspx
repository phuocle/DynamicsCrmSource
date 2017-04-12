<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Web.Pages.WorkflowInstancePage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style type="text/css">
        .ms-crm-Form-Nav-Container { padding-top: 4px; }

        .ms-crm-Form-Nav-Container { width: <%= AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width") + "px" %>; }

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
    </style>
    <script language="JavaScript" type="text/javascript">

        function refreshWorkflow(workflowId) {
            var command = new RemoteCommand("Workflow", "RefreshWorkflow");
            command.SetParameter("entityId", workflowId);
            command.SetParameter("sessionId", $get('crmFormSubmit').crmFormSubmitId.value);
            command.SetParameter("isUIScript", false);
            var oResult = command.Execute();

            if (oResult.Success) {
                var elContainer = window.document.getElementById("gridDefinitionContainer");
                var elContainerFirstChild = XUI.Html.DomUtils.GetFirstChild(elContainer);
                elContainer.removeChild(elContainerFirstChild);
                elContainer.innerHTML = oResult.ReturnValue;
            }
        }

    </script>

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
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                <div id="areaForm">
                    <frm:CrudForm id="crmForm" runat="server"/>
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