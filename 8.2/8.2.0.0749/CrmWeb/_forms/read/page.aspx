<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.ReadFormPage"
CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
</head>
<body class="read-optimised-form refresh-form">
<div id="containerLoadingProgress" style="text-align: center; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; z-index: 100; background-color: White;">
    <img id="loading" alt="<loc:Text ResourceId='PageLoadingMessage' runat='server'/>"
         src="/_imgs/AdvFind/progress.gif" style="text-align: center; position: absolute; top: 50%; left: 50%; right: 0px;"/>
</div>
<div id="crmForm">
    <div id="rofContainer">
    </div>
</div>


<input id="_inputFormDirtyFlag" type="hidden" value="0"/>
<ui:eventmanager runat="server" id="crmEventManager"></ui:eventmanager>
</body>
<cnt:appheader id="crmHeader" runat="server"/>
</html>