<%@ Page language="c#" Inherits="Microsoft.Crm.Web.MailboxDashboardGrid" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div style="width: 98%; height: 100%; position: absolute;">
        <div id="gridContainer" class="ms-crm-absolutePosition" style="min-height: 169px; width: 100%">
            <div class="ms-crm-absolutePosition" style="width: 100%; bottom: 10px">
                <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
                    <cnt:AppGrid id="crmGrid" runat="server"/>
                </div>
            </div>
        </div>
    </div>
</frm:DialogForm>
</body>