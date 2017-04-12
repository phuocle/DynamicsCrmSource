<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Publisher.PublisherDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<div class="ms-crm-Form-Layout">

    <div style="height: 98px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" runat="server"/>
        </div>
    </div>
    <div class="ms-crm-NRForm-Background">
        <div id="tdAreas" class="ms-crm-NRForm-Main-Container">
            <div id="areaForm" style="height: 100%">
                <frm:CrudForm id="crmForm" runat="server"/>
            </div>
        </div>
    </div>
</div>
</body>
</html>