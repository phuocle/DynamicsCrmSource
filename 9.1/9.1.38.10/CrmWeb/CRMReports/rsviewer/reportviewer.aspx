
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

	/* Make report viewer loading message have full screen width so it doesnt get cut off */
	div.MSRS-RVC .WaitControlBackground {
		width: 100%;
		text-align: center;
	}
	div.MSRS-RVC .WaitControlBackground table {
		margin: auto;
	}
	</style>
	<script type="text/javascript" language="javascript">
		//Bug 1056166: Report with Fixed headers not displaying correctly - To set the Iframe body height to the content document height for resolving the duplicate fixed header issue in Report
		window.addEventListener('DOMContentLoaded', function () {
			var bodyHeight = window.parent.document.body.clientHeight;
			document.querySelector("body").style.height = bodyHeight + "px";

		//Bug 1314234 & 1156107 : Workaround provided by SSRS team to recalculate ReportViewer control height  on report window resize.
		window.addEventListener('resize', function () {
			var reportViewerId = "#reportViewer";
			try
			{
				var reportViewer = document.querySelector(reportViewerId);
				if (reportViewer) {
					reportViewer.style.height = "100%";
					//Bug 1056166: Report with Fixed headers not displaying correctly - For chrome browser there are two headers showing on browser window resize.
					window.setTimeout(function () {
						var element = document.querySelector(reportViewerId + " span");
						if (element && element.control) {
							element.control.OnWindowResize();
						}
					},1000);
				}
			}
			catch (e)
			{
				throw e
			}
		});

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
					if (_isIE())
					{
						// IE does not set the referrer property for window.open(). In order for IE to set the referrer, instead it will simulate
						// clicking an anchor tag.
						var id = "ie-window-open-substitute";
						var anchor = document.getElementById(id);
						if (!anchor)
						{
							anchor = document.createElement("a");
							anchor.id = id;
							anchor.style.display = "none";
							document.body.appendChild(anchor);
						}
						anchor.href = URL;
						anchor.target = name;
						anchor.click();
					}
					else
					{
						baseOpen(URL, name, specs, replace);
					}
				}
			}

			/**
			 * Returns whether the browser is IE
			 */
			function _isIE()
			{
				return window.navigator.userAgent.indexOf("Trident") !== -1;
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

