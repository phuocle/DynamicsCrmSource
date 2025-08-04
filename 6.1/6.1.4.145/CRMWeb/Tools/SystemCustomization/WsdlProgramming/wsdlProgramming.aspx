<!DOCTYPE HTML >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.WsdlProgrammingPage" %>

<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<app:appheader runat="server" id="crmHeader" />
<script type="text/javascript">
function PageLoad()
{
<%if (!showAppFabricIssuer) { %>

var ele = document.getElementById("AppFabricIssuerSpan");
ele.style.display = "none";
<%} %>
resize();
$addHandler(window, "resize", resize);
}

Sys.Application.add_load(PageLoad)
Sys.Application.add_unload(function(){
$removeHandler(window, "resize", resize);
Sys.Application.remove_load(PageLoad);
});



function resize()
{
var framecontainer = $get("framecontainer");
framecontainer.style.height = document.body.clientHeight;
}

</script>
</head>
<body style="background-color: #FFFFFF; margin-left: 10px; margin-right: 10px;">
<div id="framecontainer" style="height: 100%; width: 100%; overflow: auto">



<table cellspacing="0" cellpadding="0" width="98%">
<tr>
<td class="wsdlTitle ms-crm-Form-SectionBar">
<loc:text resourceid="SystemCustomization.WsdlProgramming.OrganizationInformation"
runat="server" />
</td>
</tr>
</table>



<table class="wsdlMargin" cellspacing="0" cellpadding="0">
<tr>
<td class="wsdlSubTitle">
<loc:text resourceid="SystemCustomization.WsdlProgramming.CrmOrganizationUniqueName"
runat="server" />
</td>
</tr>
<tr>
<td class="wsdlData">
<input id="orgname" type="text" value="<%= organizationUniqueName %>" style="border:0px; width: 100%;" readonly="true"></input>
</td>
</tr>
</table>



<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<span id="AppFabricIssuerSpan">
<table class="wsdlMargin" cellspacing="0" cellpadding="0">
<tr>
<td class="wsdlSubTitle">
<loc:text resourceid="SystemCustomization.WsdlProgramming.CrmAppFabricIssuerCertificate"
runat="server" />
</td>
</tr>
<tr>
<td class="wsdlData">
<input id="issuername" type="text" value="<%= appFabricIssuerName %>" style="border:0px; width: 100%;" readonly="true"></input>
</td>
</tr>
<tr>
<td>
<a class="wsdlLink" id="linkAppFabricIssuer" runat="server">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle"><loc:text
resourceid="SystemCustomization.WsdlProgramming.DownloadCertificate" runat="server" /></a>
</td>
</tr>
</table>
</span>
<%
}
%>




<table class="wsdlMargin" cellspacing="0" cellpadding="0">
<tr>
<td class="wsdlSubTitle">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DeveloperCenter" runat="server" />
</td>
</tr>
<tr>
<td>
<a class="wsdlLink" id="linkDeveloperCenter" runat="server" target="wsdl">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle"><loc:text
resourceid="SystemCustomization.WsdlProgramming.DownloadDocumentation" runat="server" /></a>
</td>
</tr>
</table>



<table cellspacing="0" cellpadding="0" width="98%">
<tr>
<td class="wsdlTitle ms-crm-Form-SectionBar">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ServiceEndpoints" runat="server" />
</td>
</tr>
</table>



<table class="wsdlMargin" cellspacing="0" cellpadding="0">
<tr>
<td class="wsdlSubTitle">
<%= this.discoveryServiceName %>
</td>
</tr>
<tr>
<td class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.SoapProtocol" runat="server" />
</td>
</tr>
<tr>
<td>
<a class="wsdlLink" href="<%= this.DiscoveryServiceUrl.ToString() %>" title="<%= this.discoveryServiceName %>"
target="wsdl">
<asp:label id="discoveryServiceUrlLabel" runat="server"></asp:label>
</a>
</td>
</tr>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<tr>
<td>
<a class="wsdlLink" href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.DiscoveryService) %>"
title="<%= this.downloadWsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadWsdl %>
</a>
</td>
</tr>
<%
}
%>



<tr>
<td class="wsdlSubTitle">
<%= this.organizationServiceName %>
</td>
</tr>
<tr>
<td class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.SoapProtocol" runat="server" />
</td>
</tr>
<tr>
<td>
<a class="wsdlLink" href="<%= this.OrganizationServiceUrl.ToString() %>" title="<%= this.organizationServiceName %>"
target="wsdl">
<asp:label id="organizationServiceUrlLabel" runat="server"></asp:label>
</a>
</td>
</tr>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<tr>
<td>
<a class="wsdlLink" href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.OrganizationService) %>"
title="<%= this.downloadWsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadWsdl %>
</a>
</td>
</tr>
<%
}
%>



<tr>
<td class="wsdlSubTitle">
<%= this.organizationDataServiceName %>
</td>
</tr>
<tr>
<td class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ODataProtocol" runat="server" />
</td>
</tr>
<tr>
<td>
<a class="wsdlLink" href="<%= this.OpenDataServiceUrl %>" title="<%= this.organizationDataServiceName %>"
target="wsdl">
<asp:label id="openDataServiceUrlLabel" runat="server"></asp:label>
</a>
</td>
</tr>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<tr>
<td>
<a class="wsdlLink" href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.OrganizationDataService) %>"
title="<%= this.downloadCsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadCsdl %>
</a>
</td>
</tr>
<%
}
%>
</table>
</div>
</body>
</html>
