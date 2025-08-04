<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SUpgradeSettingPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>


<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">

Sys.Application.add_load(pageLoad);
Sys.Application.add_unload(pageUnload);

var bGrayTextOn = false;
var oldFontStyle;
var oldColor;

function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Tools/DocumentManagement/S2SUpgardeSettingsWizard/S2SValidateSites.aspx");
return new NextPageDefinition(oUrl, WizardGetProperty("DefaultSiteUrl"));
}

function moveNext()
{
if (Mscrm.S2SUpgradePageHelper.savePageProperties())
{
Mscrm.S2SUpgradePageHelper.migrateToS2S();
}
}

function OnUserCancel()
{
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

function pageLoad()
{
var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
$get('buttonCancel').onclick = OnUserCancel;
$addHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxOnBlur);
Mscrm.S2SUpgradePageHelper.initializeControls();
if (isNullOrEmptyString(txtSiteCollectionUrl.value))
{
enableGrayTextOnSiteUrlTextBox();
}
}

function enableGrayTextOnSiteUrlTextBox()
{
var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
bGrayTextOn = true;
oldFontStyle = txtSiteCollectionUrl.style.fontStyle;
oldColor = txtSiteCollectionUrl.style.color;
txtSiteCollectionUrl.value = LOCID_DOCM_SITEURL_GRAYTEXT;
txtSiteCollectionUrl.style.fontStyle = "italic";
txtSiteCollectionUrl.style.color = "Gray";
$addHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
}

function disableGrayTextOnSiteUrlTextBox()
{
var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");
bGrayTextOn = false;
txtSiteCollectionUrl.value = "";
txtSiteCollectionUrl.style.fontStyle = oldFontStyle;
txtSiteCollectionUrl.style.color = oldColor;
$removeHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
}

function OnSiteUrlTextBoxFocus()
{
disableGrayTextOnSiteUrlTextBox();
}

function OnSiteUrlTextBoxOnBlur()
{
if (isNullOrEmptyString($get("txtSiteCollectionUrl").value)) {
enableGrayTextOnSiteUrlTextBox();
}
}

function pageUnload()
{
var txtSiteCollectionUrl = $get("txtSiteCollectionUrl");

$removeHandler(txtSiteCollectionUrl, 'focus', OnSiteUrlTextBoxFocus);
$removeHandler(txtSiteCollectionUrl, 'blur', OnSiteUrlTextBoxOnBlur);

}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div id="descriptionHeader" style="width:100%; margin-top:5px" class = "mscrm-text-semiBold mscrm-enableS2SMessage"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description" runat="server"/></div>
<div id="S2SChangesMessage" >
<div>
<div style="display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div><div style="display:inline" class = "mscrm-text-regular"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description1" runat="server"/></div>
</div>
<div>
<div style= "display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div><div style="display:inline" class = "mscrm-text-regular"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description2" runat="server"/></div>
</div>
<div>
<div style="display:inline"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.DescriptionStart" runat="server"/></div><div style="display:inline" class = "mscrm-text-regular"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description3" runat="server"/></div>
</div>
</div>
<div id="S2SSitesMessage" style="width:100%; margin-bottom:21px" >
<div class="mscrm-Disclaimer" style="margin-top:11px"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description4" runat="server"/></div>
<div class="mscrm-Disclaimer" style="margin-top:18px"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description5" runat="server"/></div>
<div class="mscrm-Disclaimer" style="margin-top:18px"><loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.Description6" runat="server"/></div>
</div>
<table id="siteUrlTable" width="100%" cellpadding="1" cellspacing="1" style="margin-bottom:25px">
<tr>
<td width="10%"><label for="txtSiteCollectionUrl" ><b><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SiteCollectionUrl.Label" runat="server"/></b></label></td>
<td width="90%"><ui:TextBox class="mscrm-docmgmt-SiteUrl" id="txtSiteCollectionUrl" MaxLength="255" runat="Server" /></td>
</tr>
</table>
<div id="noteSummaryLabel" style="width:100%; margin-bottom:30px" runat="server"> <ui:LabelUI  runat="server"/></div>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display:none;">
<div id="progressInner" style="height: 80%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.Validating" runat="server"/>
</div>
</div>
</div>
</frm:WizardForm>
</body>
</html>
