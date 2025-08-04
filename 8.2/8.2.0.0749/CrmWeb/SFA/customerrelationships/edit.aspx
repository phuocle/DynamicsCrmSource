<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Sfa.CustomerRelationshipDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<div class="ms-crm-Form-Layout">
    <div style="height: 98px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div id="areaForm">
                <frm:CrudForm id="crmForm" runat="server"/>
            </div>
        </div>
    </div>
    <div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
        <sdk:RenderStatusControl id="crmRenderStatus" runat="server"/>
    </div>
</div>
</body>
</html>