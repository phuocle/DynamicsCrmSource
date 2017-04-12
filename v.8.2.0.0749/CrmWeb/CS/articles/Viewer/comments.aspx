<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.CommentViewer" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<div class="comments_XMLRender">
    <div>
        <ui:XmlRenderer id="xmlRenderer" runat="server"/>
    </div>
</div>
</body>
</html>