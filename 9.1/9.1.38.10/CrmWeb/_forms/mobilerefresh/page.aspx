<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.MobileRefreshFormPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mcnt" Namespace="Microsoft.Crm.Mobile.Application.Controls" Assembly="Microsoft.Crm.Mobile.Application.Components" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="rbn" Namespace="Microsoft.Crm.Application.Ribbon" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<% =HtmlToSetupNativeBridge %>
<script type="text/javascript">

function simulateClickOnCommandBar(commandType)
{
if (IsNull(commandType))
{
return;
}

var mobileCommandBar = $get('MobileCommandBar');
if (IsNull(mobileCommandBar))
{
return;
}

var mobileCommandBarControl = mobileCommandBar.control;
if (IsNull(mobileCommandBarControl))
{
return;
}

mobileCommandBarControl.simulateClickBehaviorOnCommandIcon(commandType);
}
</script>
</head>
<body class="read-optimised-form mobile-refresh-form">
<div id="LogoArea" runat="server"></div>
<div id="containerLoadingProgress" style="text-align: center; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; z-index: 100; background-color: White;">
<img id="loading" alt="<loc:Text ResourceId='PageLoadingMessage' runat='server'/>" src="/_imgs/progressbar.gif" style="text-align: center; position: absolute; top: 50%; left: 50%; right: 0px;" />
</div>
<div id="EntityTitleArea" runat="server"></div>
<div id="crmForm">
<% if (MobileUtility.HideMasthead()) { %>
<div id="rofContainer" class="mastheadHidden">
<% } else { %>
<div id="rofContainer">
<% } %>
</div>
</div>
<mcnt:CommandBar runat="server" id="MobileCommandBar" />





<input id="_inputFormDirtyFlag" type="hidden" value="0" />
<ui:eventmanager runat="server" id="crmEventManager"></ui:eventmanager>
<% =HtmlToSetupCookieWhenHostedInNativeApp %>
</body>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">window.onload = function ()
{
function attachFlyoutBehavior()
{
var flyOutControl = document.getElementById('mnuctrldiv');
if (flyOutControl == null)
{
flyOutControl = document.getElementById('smmnuctrldiv');
}


if (flyOutControl != null)
{
flyOutControl.onclick = showHideFlyout;
}
}

function showHideFlyout()
{
var flyout = document.getElementById('mnu');
var showButton = document.getElementsByClassName('mnuctrlinvis');
var hideButton = document.getElementsByClassName('mnuctrlvis');

if (flyout.style.display == '' || flyout.style.display == 'none')
{
flyout.style.display = 'block';
showButton[0].style.display = 'none'; hideButton[0].style.display = 'block';
var smallHeader = document.getElementById('smmnuctrldiv');

if (smallHeader != null)
{
flyout.style.top = '44px';
}
}
else
{
flyout.style.display = 'none';
showButton[0].style.display = 'block';
hideButton[0].style.display = 'none';
}
}

Mscrm.MobileUtility.PreparePageForWindowsPhoneApp();
attachFlyoutBehavior();

var userAgent = navigator.userAgent;
if(userAgent.indexOf(" Android ") > -1)
{
document.documentElement.className += ' android';

if(userAgent.indexOf(" Android 2.") > -1 || Mscrm.MobileUtility.isMastheadHidden())
document.body.className += ' androidStatic';
}
}
</script>
</html>
