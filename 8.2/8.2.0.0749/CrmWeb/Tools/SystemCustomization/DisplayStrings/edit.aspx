<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.CustomDisplayStringDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>

<body>
<div class="ms-crm-Form-Layout">
    <div style="height: 40px">
        <div>
            <mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
        </div>
    </div>
    <div id="areaForm" class="ms-crm-absolutePosition" style="top: 40px">
        <frm:CrudForm id="crmForm" runat="server"/>
    </div>
</div>
</body>
</html>