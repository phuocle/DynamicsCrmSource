<%@ Page Inherits="Microsoft.Crm.Web.Pages.About" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.About.default.aspx_07" CheckForLive="false" runat="server" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</title>
<style type="text/css">
	
	div.release
	{
		width: 120px;
		color: #ffff00;
		z-index: 1;
	}
	span.copy
	{
		color:#555555;
		display:block;
		position:absolute;
		bottom:0px;
		margin-bottom:20px;
	}
	
	a
	{
		color: #0000ff;
	}
	a:hover
	{
		color: #000000;
	}
	
	.ms-crm-AboutDialog-Header,
	tr.ms-crm-AboutDialog-Header td
	{
		background: #002050 !important;
		height: 80px !important;
	}
	
	td.ms-crm-AboutDialog-HeaderLogo
	{
		<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
		padding-right: 20px;
		<% } else { %>
		padding-left: 20px;
		<%} %>
		padding-top: 11px !important;
	}
	Div.ms-crm-AboutDialog-HeaderTitle b
	{
		font-weight: normal;
		font-size:20px !important;
		display:block;
		margin-bottom: 5px;
	}
	
	Div.ms-crm-AboutDialog-HeaderTitle
	{
		font-size: 14px !important;
		width: auto;
		padding-top: 11px;
		<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
		padding-right: 6px;
		<% } else { %>
		padding-left: 6px;
		<%} %>
	}
	Div.ms-crm-AboutDialog-HeaderOutlookTitle
	{
		width: auto;
		padding-bottom: 20px;
	}
	.ms-crm-AboutDialog-HeaderLogo img
	{
		height: 30px;
		padding-top: 1px;
	}
	
	.ms-crm-AboutDialog-HeaderLogo div
	{
		height: 27px;
		<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
		float: left;
		margin-right: 17px;
		<% } else { %>
		float: right;
		margin-left: 17px;
		<%} %>
		width: 27px;
	}
	
	.ms-crm-AboutDialog-HeaderTitle span
	{
		font-size: 20px;
		<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
		float: right;
		<% } else { %>
		float: left;
		<%} %>
	}
</style>
</head>
<body onload="window.focus();" class="aboutdefault_body">
	<div runat="server" id="PageBody">
		<table width="100%" height="100%" cellpadding="0" cellspacing="0">
		<col width="65px"><col>
			<tr class="ms-crm-AboutDialog-Header">
				<td valign="top" align="right" class="ms-crm-AboutDialog-HeaderLogo">
					<div><img alt="" src="/_imgs/AboutBox.png"></div>
				</td>
				<td valign="top">
					<div class="ms-crm-AboutDialog-HeaderTitle">
						<%=RenderCrmTitle()%>
					</div>
					<%=RenderCrmTitleForOutlook()%>
				</td>
			</tr>
			<tr>
				<td valign="top">
				</td>
				<td valign="top">
					<div id="info" class="info ms-crm-AboutDialog-Info">
						<span class="norm">
							<span id="USCanadaText"  runat="server">
								<!-- Encode / in the <a> tag below (3 instances) or else the server treats it as a comment -->
								<loc:Text ResourceId="AboutBox_US_Support_Message" runat="server">
									<loc:Argument runat="server">
										<a runat="server" class="ms-crm-Link" id="DynamicsCustomerSourceSupportLink" target="_blank" href="http://go.microsoft.com/fwlink/?LinkId=52446"><loc:Text ResourceId="AboutBox_US_Support_Message_MBS_CustomerSource" runat="server" /></a>
									</loc:Argument>								
									<loc:Argument runat="server"><a runat="server" class="ms-crm-Link" id="DynamicsSupportLink" target="_blank" href="http://go.microsoft.com/fwlink/?LinkId=50896&amp;clcid=0x409"><loc:Text ResourceId="AboutBox_US_Support_Message_MS_HelpSupport" runat="server" /></a></loc:Argument>
								</loc:Text>
								<br>
								<br>
							</span>
							<loc:Text ResourceId="AboutBox_International_Support_Message" runat="server">
								<loc:Argument runat="server"><a runat="server" class="ms-crm-Link" id="InternationalSupportLink" target="_blank" href="http://go.microsoft.com/fwlink/?LinkId=52443"><loc:Text ResourceId="AboutBox_International_Support_Message_MS_HelpSupport" runat="server" /></a></loc:Argument>
							</loc:Text>
							<br>
							<br>
							<loc:Text ResourceId="Web.About.default.aspx_88" runat="server"><loc:Argument runat="server"><a runat="server" class="ms-crm-Link" id="CrmLink" target="_blank" href="http://go.microsoft.com/fwlink/?LinkId=52444"><loc:Text ResourceId="AboutBox_AdditionInformation_Microsoft_CRM" runat="server" /></a></loc:Argument></loc:Text>
							<br>
							<span id="crmLiveText"  runat="server">
							<a class="ms-crm-Link" runat="server" id="PrivacyLinkLive" target="_blank"><loc:Text ResourceId="AboutBox_Privacy_CrmLive" runat="server" /></a>
							</span>
							<br><br>
							<loc:Text ResourceId="Web.About.default.RegTo" Encoding="None" runat="server"/>
							<br>
							<span id="OrganizationName" runat="server"/>
						</span>
						<br>
						<br>
						<div id="warnings" class="aboutdefault_div_warnings">
							<loc:Text ResourceId="Web.About.default.aspx_72" runat="server"/>
						</div>
						<div id="release" class="release">
							<!-- No Release Message -->
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td></td>
				<td><span class="copy norm"><loc:Text ResourceId="Web.About.default.aspx_98" runat="server"/></span></td>
			</tr>
			<tr><td colspan="2">&nbsp;</td></tr>
		</table>
	</div>
	
</body>
</html>
