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
function PageLoad() {
resize();
$addHandler(window, "resize", resize);
}

Sys.Application.add_load(PageLoad)
Sys.Application.add_unload(function () {
$removeHandler(window, "resize", resize);
Sys.Application.remove_load(PageLoad);
});

function resize() {
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
<loc:text resourceid="SystemCustomization.WsdlProgramming.GettingStarted"
runat="server" />
</td>
</tr>
</table>


<table class="wsdlMargin devresourcepage-link-container">
<tr>
<td class="devresourcepage-link">
<a href="<%= this.developerCenterLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.developerCenterLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DeveloperCenter" runat="server" />
</a>
</td>
<td class="devresourcepage-link">
<a href="<%= this.developerForumsLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.developerForumsLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DeveloperForums" runat="server" />
</a>
</td>
<td class="devresourcepage-link">
<a href="<%= this.sdkNugetPackagesLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.sdkNugetPackagesLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.SDKNugetPackages" runat="server" />
</a>
</td>
</tr>
<tr>
<td class="devresourcepage-link">
<a href="<%= this.sdkDownloadLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.sdkDownloadLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.SDKDownload" runat="server" />
</a>
</td>
<td class="devresourcepage-link">
<a href="<%= this.sampleCodeLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.sampleCodeLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.SampleCode" runat="server" />
</a>
</td>
<td class="devresourcepage-link">
<a href="<%= this.developerOverviewLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.developerOverviewLinkTitle.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DeveloperOverview" runat="server" />
</a>
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


<div class="wsdlMargin" cellspacing="0" cellpadding="0">
<div>
<div class="wsdlSubTitle">
<%= this.odataV4ServiceName %>
</div>
</div>
<div>
<div class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ODataV4EndpointDescription" runat="server" />
<a href="<%= this.oDataV4EndpointDescriptionSeeMoreLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.oDataV4EndpointDescriptionSeeMoreLinkText.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ODataV4EndpointDescriptionSeeMoreLinkText" runat="server" />
</a>
</div>
</div>
<div>
<div class="mscrm-link-container">
<span class="mscrm-link-title ms-crm-TextAutoEllipsis" style="vertical-align: middle;" title="<%= this.odataV4ServiceRootUrl.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ServiceRootUrl" runat="server" />
</span>
<input class="wsdlLink" value="<%= this.ODataV4ServiceUrl.ToString() %>" title="<%= this.odataV4ServiceName %>" disabled="disabled" />
</div>
</div>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<div>
<div>
<a class="wsdlLink" href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.ODataV4Metadata) %>"
title="<%= this.downloadODataV4Metadata %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadODataV4Metadata %>
</a>
</div>
</div>
<%
}
%>
</div>


<div class="wsdlMargin" cellspacing="0" cellpadding="0">
<div>
<div class="wsdlSubTitle">
<%= this.organizationServiceName %>
</div>
</div>
<div>
<div class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.OrganizationServiceEndpointDescription" runat="server" />
<a href="<%= this.organizationServiceEndpointDescriptionSeeMoreLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.organizationServiceEndpointDescriptionSeeMoreLinkText.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.OrganizationServiceEndpointDescriptionSeeMoreLinkText" runat="server" />
</a>
</div>
</div>
<div>
<div class="mscrm-link-container">
<span class="mscrm-link-title">
<loc:text resourceid="SystemCustomization.WsdlProgramming.EndpointAddress" runat="server" />
</span>
<input class="wsdlLink" value="<%= this.OrganizationServiceUrl.ToString() %>" title="<%= this.organizationServiceName %>" disabled="disabled" />
</div>
</div>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<div>
<div>
<a class="wsdlLink"  href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.OrganizationService) %>"
title="<%= this.downloadWsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadWsdl %>
</a>
</div>
</div>
<%
}
%>
</div>


<div class="wsdlMargin" cellspacing="0" cellpadding="0">
<div>
<div class="wsdlSubTitle">
<loc:text resourceid="SystemCustomization.WsdlProgramming.InstanceReferenceInformation" runat="server" />
</div>
</div>
<div>
<div class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.InstanceReferenceInformationDescription" runat="server" />
<a href="<%= this.instanceReferenceInformationSeeMoreLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.instanceReferenceInformationSeeMoreLinkText.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.InstanceReferenceInformationDescriptionSeeMoreLinkText" runat="server" />
</a>
</div>
</div>
<div>
<div class="mscrm-link-container">
<span class="mscrm-link-title">ID</span>
<input class="wsdlLink" value="<%= organizationId %>" title="<%= organizationId %>" disabled="disabled" />
</div>
<div class="mscrm-link-container">
<span class="mscrm-link-title">
<loc:text resourceid="SystemCustomization.WsdlProgramming.UniqueNameOfOrganization" runat="server" />
</span>
<input class="wsdlLink" value="<%= organizationUniqueName %>" title="<%= organizationUniqueName %>" disabled="disabled" />
</div>
</div>

</div>




<table cellspacing="0" cellpadding="0" width="98%">
<tr>
<td class="wsdlTitle ms-crm-Form-SectionBar">
<loc:text resourceid="SystemCustomization.WsdlProgramming.CRMDiscoveryServiceHeader" runat="server" />
</td>
</tr>
</table>



<div class="wsdlMargin" cellspacing="0" cellpadding="0">
<div>
<div class="wsdlSubTitle">
<%= this.discoveryServiceWebAPIName %>
</div>
</div>
<div>
<div class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DiscoveryServiceWebAPIDescription" runat="server" />
<a href="<%= this.discoveryServiceWebAPISeeMoreLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.discoveryServiceWebAPISeeMoreLinkText.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DiscoveryServiceWebAPIDescriptionSeeMoreLinkText" runat="server" class="wsdlLink" />
</a>
</div>
</div>
<div>
<div class="mscrm-link-container">
<span class="mscrm-link-title">
<loc:text resourceid="SystemCustomization.WsdlProgramming.EndpointAddress" runat="server" />
</span>
<input class="wsdlLink" value="<%= this.DiscoveryServiceWebAPIUrl.ToString() %>" title="<%= this.discoveryServiceWebAPIName %>" disabled="disabled" />
</div>
</div>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<div>
<div>
<a class="wsdlLink"  href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.DiscoveryServiceWebAPI) %>"
title="<%= this.downloadODataV4Metadata %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadODataV4Metadata %>
</a>
</div>
</div>
<%
}
%>
</div>


<div class="wsdlMargin" cellspacing="0" cellpadding="0">
<div>
<div class="wsdlSubTitle">
<%= this.discoveryServiceName %>
</div>
</div>
<div>
<div class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DiscoveryServiceDescription" runat="server" />
<a href="<%= this.discoveryServiceSeeMoreLink.ToString() %>" class="wsdlLink" target="_blank" rel="noopener noreferrer" title="<%= this.discoveryServiceSeeMoreLinkText.ToString() %>">
<loc:text resourceid="SystemCustomization.WsdlProgramming.DiscoveryServiceDescriptionSeeMoreLinkText" runat="server" class="wsdlLink" />
</a>
</div>
</div>
<div>
<div class="mscrm-link-container">
<span class="mscrm-link-title">
<loc:text resourceid="SystemCustomization.WsdlProgramming.EndpointAddress" runat="server" />
</span>
<input class="wsdlLink" value="<%= this.DiscoveryServiceUrl.ToString() %>" title="<%= this.discoveryServiceName %>" disabled="disabled" />
</div>
</div>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<div>
<div>
<a class="wsdlLink"  href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.DiscoveryService) %>"
title="<%= this.downloadWsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadWsdl %>
</a>
</div>
</div>
<%
}
%>
</div>




<div class="wsdlMargin" cellspacing="0" cellpadding="0" style="display: none">
<div>
<div class="wsdlSubTitle">
<%= this.organizationDataServiceName %>
</div>
</div>
<div>
<td class="wsdlData">
<loc:text resourceid="SystemCustomization.WsdlProgramming.ODataProtocol" runat="server" />
</td>
</div>
<div>
<div class="mscrm-link-container">
<input class="wsdlLink" value="<%= this.OpenDataServiceUrl %>" title="<%= this.organizationDataServiceName %>" disabled="disabled" />
</div>
</div>
<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<div>
<div>
<a class="wsdlLink" href="<%= this.CreateDownloadLink(Microsoft.Crm.Web.Tools.SystemCustomization.WsdlPageDownloadType.OrganizationDataService) %>"
title="<%= this.downloadCsdl %>">
<img class="wsdlIcon" src="/_imgs/DownloadDocument_16.png" align="absmiddle">
<%= this.downloadCsdl %>
</a>
</div>
</div>
<%
}
%>
</div>
</div>
</body>
</html>
