<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Reporting.RemoteSrsReportViewer" AutoEventWireup="true" EnableViewState="true" EnableEventValidation="false" %>
<%@ Register TagPrefix="rsweb" Namespace="Microsoft.Reporting.WebForms" Assembly="Microsoft.ReportViewer.WebForms" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>CRM Report Viewer</title>
    <style type="text/css">
	body
	{
		background-color: #FFFFFF;
		margin:0px 0px 0px 0px;
		padding:0px 0px 0px 0px;
		scroll=none;
		<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
		direction:rtl;
		<% } %>
		
	}
	</style>
	<script type="text/javascript" language="javascript">
		if (window.getComputedStyle != null)
		{
			//Work around bug in ReportViewer control where it calls getComputedStyle() on the document instead of the documentElement.(CRM 254659)
			var baseGetComputedStyle = window.getComputedStyle;
			window.getComputedStyle = function (elt, pseudoElt)
			{
				try
				{
					return baseGetComputedStyle(elt, pseudoElt);
				}
				catch (e)
				{
					if (elt.documentElement)
					{
						return baseGetComputedStyle(elt.documentElement, pseudoElt);
					}
					else
					{
						throw e;
					}
				}
			}
		}
		//CRM 261784: When exporting a report, the ReportViewer calls window.open() with a url to download.
		//In Outlook, we're in an Outlook Inspector window, and the new window opens a Web Browser. This creates a new session, 
		// forcing the user to sign in again, and the load balancer may pick a different Server, which causes the download to fail because of the new session.
		//Currently the only call to window.open() on this page is from the ReportViewer export button. So overriding it to make sure we open URL within the same window.
		// download URL from the ReportViewer:
		// "/Reserved.ReportViewerWebControl.axd?ReportSession=repl51vgqoms4g3fjynorp45&Culture=1033&CultureOverrides=True&UICulture=1033&UICultureOverrides=True&ReportStack=1&ControlID=e440105867d249ce8a45696677d42bcb&OpType=Export&FileName=Report1&ContentDisposition=OnlyHtmlInline&Format=XML"
		if (window.open != null)
		{
			var baseOpen = window.open;
			window.open = function (URL, name, specs, replace)
			{
				//Only want to use this new open() method if we're in Outlook and we're exporting something from the ReportViewer.
				if (window.parent.shouldLaunchPageInOutlookHostedWindow(URL)
					&& URL.toUpperCase().indexOf("RESERVED.REPORTVIEWERWEBCONTROL.AXD") != -1
					&& URL.toUpperCase().indexOf("OPTYPE=EXPORT") != -1)
				{
					//true = relative path
					window.parent.openUrl(URL, true);
				}
				else
				{
					baseOpen(URL, name, specs, replace);
				}
			} 
		}
	</script>
</head>
<body style="<%if (doNotShowBorder) { %> border-style:none;<% } %>">
<div style="height:100%; width:100%; position:absolute">
	<form id="form1" runat="server" style="height:100%">
		<asp:ScriptManager id="scriptManager"  runat="server" />
		<rsweb:ReportViewer id="reportViewer"  runat="server" width="100%" height="100%"/>
	</form>
</div>
	
</body>
</html>
