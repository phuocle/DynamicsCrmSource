<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.FinishPage" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="Javascript" type="text/javascript">

var cancelClicked = false;
function OnBeforeWindowUnload(oEvent)
{
oEvent = oEvent.rawEvent;

if (!cancelClicked)
{
oEvent.returnValue = " ";
return " ";
}
}

function moveNext()
{
cancelClicked = true;
WizardSetDialogReturnValue(true);
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}

Sys.Application.add_load(OnLoad);
function OnLoad()
{
attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);

var customizationLevel = WizardGetProperty("CustomizationLevel");
if (customizationLevel == Mscrm.CustomizationLevel.customizationAttribute
|| customizationLevel == Mscrm.CustomizationLevel.customizationEntity)
{
document.getElementById("customAttributeText").style.display = "";
}
}
</script>
</head>
<body onload="OnLoad();">
<frm:WizardForm id="crmForm" runat="server">
<br />
<div id="infoBalloon" class="mscrm-iw-InfoBarBlue" style="width:100%">
<table>
<tr>
<td rowspan="3" style="vertical-align:top"><img alt="" class="mscrm-iw-InfoBarBalloon" src="/_imgs/importwizardinfo.gif"></td>
<td width="1px"/>
<td><span id="infoBalloonText1" class="mscrm-iw-InfoBarText" runat="server"></span></td>
</tr>
<tr>
<td width="1px"/>
<td><span id="infoBalloonText2" class="mscrm-iw-InfoBarText" runat="server"></span></td>
</tr>
<tr id="customAttributeText" style="display:none">
<td width="1px" />
<td><span id="infoBalloonText3" class="mscrm-iw-InfoBarText" runat="server"></span></td>
</tr>
</table>
</div>
</frm:WizardForm>
</body>
</html>
