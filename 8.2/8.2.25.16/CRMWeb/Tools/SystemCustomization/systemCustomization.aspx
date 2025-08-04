<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.SystemCustomizationPage"    %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<cnt:AppHeader id="crmHeader" runat="server" />
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<cnt:IFrameControl runat="server" id="crmIFrameControl"></cnt:IFrameControl>