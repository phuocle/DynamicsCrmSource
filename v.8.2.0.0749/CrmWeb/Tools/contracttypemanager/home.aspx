<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.ContractTypeManager.Home" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
</head>

<body class="stage" style="padding-top: 20px;">
<div class="stdTable" style="position: relative">
    <div class="ms-crm-absolutePosition">
        <div>
            <label class="ms-crm-Setting-ContextHeader-Title">
                <loc:Text ResourceId="NamePlural_ContractTempl" runat="server"/>
            </label>
        </div>
        <div class="ms-crm-home-menucontainer">
            <mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
        </div>

        <div class="ms-crm-absolutePosition" style="top: 61px">
            <!--[if IE 7]>
                <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <![endif]-->
            <cnt:AppGrid id="crmGrid" runat="server" IsGridFilteringEnabled="true"/>
            <!--[if IE 7]>
                </div>
            <![endif]-->
        </div>
    </div>
</div>
</body>
</html>