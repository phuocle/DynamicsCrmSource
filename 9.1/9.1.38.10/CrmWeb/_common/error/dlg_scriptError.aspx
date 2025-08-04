
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ScriptErrorDialogPage" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
	Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
	<script language="javascript" type="text/javascript">
var SUPPRESS_SCRIPT_ERRORS = true;

function PageOnLoad()
{
	$addHandler(window, "error", OnError);
	try
	{
		// Collect server data for crash report
		var serverData = "  <ServerInformation>\r\n" +
			"    <OrgLanguage>" + CrmEncodeDecode.CrmXmlEncode(OrgLanguage) + "</OrgLanguage>\r\n" +
			"    <OrgCulture>" + CrmEncodeDecode.CrmXmlEncode(OrgCulture) + "</OrgCulture>\r\n" +
			"    <UserLanguage>" + CrmEncodeDecode.CrmXmlEncode(UserLanguage) + "</UserLanguage>\r\n" +
			"    <UserCulture>" + CrmEncodeDecode.CrmXmlEncode(UserCulture) + "</UserCulture>\r\n" +
			"    <OrgID>" + CrmEncodeDecode.CrmXmlEncode(OrgID) + "</OrgID>\r\n" +
			<%
			




			%>
			"    <UserID>" + CrmEncodeDecode.CrmXmlEncode(UserID) + "</UserID>\r\n" +
			"    <CRMVersion>" + CrmEncodeDecode.CrmXmlEncode(CRMVersion) + "</CRMVersion>\r\n" +
			"  </ServerInformation>\r\n";
		
		// Insert server data into each crash report
		var oArgs = getDialogArguments();
		if (!IsNull(oArgs))
		{
			for(var i = 0; i < oArgs.length; i++)
			{
				// Find position to insert
				var insertPos = oArgs[i].report.indexOf("</CrmScriptErrorReport>");
			
				// Insert data
				if(insertPos != -1)
				{
					oArgs[i].report = oArgs[i].report.substring(0, insertPos) + serverData + oArgs[i].report.substring(insertPos);
				}
			}
		}
	}
	catch(e)
	{

	}
	$addHandler(window, 'unload', PageOnUnLoad);
}

$addHandler(window, "load", PageOnLoad);

function OnError()
{
	try
	{
		// Set window's status bar
		window.status = ScriptErrorStatusBar;
		
		// Disable IE's error handling
		return true;
	}
	catch(e)
	{
	}
}

function ReportAllErrors()
{
	try
	{
		var oArgs = getDialogArguments();
		if (!IsNull(oArgs))
		{
			for(var i = 0; i < oArgs.length; i++)
			{
				// Report error synchronously, without adding extra server information
				reportScriptError(oArgs[i], false, true);
			}
		}
	}
	catch(e)
	{
	}
}
function PageOnUnLoad()
{
	$removeHandler(window, 'load', PageOnLoad);
	$removeHandler(window, "error", OnError);
}
function OpenErrorDetails(e)
{
	var oWindowInfo = GetWindowInformation(ScriptErrorDetailsDialog);
	openStdDlg(Mscrm.CrmUri.create("/_common/error/dlg_scriptErrorDetails.aspx"), getDialogArguments(), oWindowInfo.Width, oWindowInfo.Height, true);
	e.preventDefault();
	e.stopPropagation();
}
function ChangeNotificationSettings(e)
{
	var parameters = new Array(e);

	//create the callback function object
	var callbackFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(changeNotificationSettingsCallback, parameters);

	var retValue = openStdDlgWithCallback(Mscrm.CrmUri.create("/tools/personalsettings/dialogs/personalsettings.aspx?privacy=1"), null, 900, 600, callbackFunction, true);

	if (Mscrm.Utilities.isModalDialogSupported()) {
		changeNotificationSettingsCallback(retValue, e);
	}
}

function changeNotificationSettingsCallback(retValue, e)
{
	e.preventDefault();
	e.stopPropagation();
}

	</script>
</head>
<body scroll="no">
	<table cellpadding="8" cellspacing="0" width="100%" height="100%" style="table-layout: fixed;">
		<col width="75">
		<col>
		<tr>
			<td valign="middle">
				<img alt="" id="ErrorImage" runat="server">
			</td>
			<td valign="top">
				<b>
					<loc:text resourceid="Web__common_error_scriptError_aspx_Text0" runat="server" />
					<br />
					<br />
					<loc:text resourceid="Web__common_error_scriptError_aspx_Text1" runat="server" />
				</b>
				<br />
				<loc:text resourceid="Web__common_error_scriptError_aspx_Message" runat="server" />
				<br />
				<br />
				<a id='privacyLink' class='ms-crm-Dialog-Error-Link' target='_blank' href='http://go.microsoft.com/fwlink/?LinkId=101172'>
					<loc:text resourceid="Web_Tools_personalsettings_dialogs_personalsettings_PrivacyTab_ViewPrivacy"
						runat="server" />
				</a>
				<br />
				<br />
				<a id='errorDetailsLink' class='ms-crm-Dialog-Error-Link' href='' onclick='OpenErrorDetails(new Sys.UI.DomEvent(event))'>
					<loc:text resourceid="Web__common_error_scriptError_aspx_ViewDetails" runat="server" />
				</a>
				<br />
				<br />
				<%if (showChangeErrorNotification) { %>
				<a id='personalSettingsLink' class='ms-crm-Dialog-Error-Link' href='' onclick='ChangeNotificationSettings(new Sys.UI.DomEvent(event))'>
					<loc:text resourceid="Web__common_error_scriptError_aspx_ChangeSettings" runat="server" />
				</a>
				<%} %>
			</td>
		</tr>
	</table>
</body>
</html>
