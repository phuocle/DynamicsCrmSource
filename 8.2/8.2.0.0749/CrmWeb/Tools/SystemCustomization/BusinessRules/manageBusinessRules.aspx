<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.BusinessRules.ManageBusinessRulesPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <title runat="server"></title>
    <app:AppHeader runat="server" id="crmHeader"/>
    <script language="javascript" type="text/javascript">
        Sys.Application.add_load(PblEditorOnLoad);

        function PblEditorOnLoad() {
            var crmFormSubmit = $get("crmFormSubmit");
            $addHandler(crmFormSubmit, "submit", OnPblEditorFormSubmit);
        }

        function OnPblEditorFormSubmit(domEvent) {
            var oCrmFormSubmit = $get('crmFormSubmit');
            oCrmFormSubmit.crmFormSubmitXml.value = "";
        }
    </script>
</head>
<body class="mscrm-pbleditor-Body">
<div class="mscrm-pbleditor">
    <div runat="server" id="HeaderViewContainer" class="mscrm-pbleditor-HeaderViewContainer">
    </div>
    <div runat="server" id="BodyViewContainer" class="mscrm-pbleditor-BodyViewContainer">
    </div>
    <div runat="server" id="FooterViewContainer" class="mscrm-pbleditor-FooterViewContainer">
    </div>
</div>

<frm:hardcodedform id="crmForm" runat="server">
</frm:hardcodedform>
</body>
</html>