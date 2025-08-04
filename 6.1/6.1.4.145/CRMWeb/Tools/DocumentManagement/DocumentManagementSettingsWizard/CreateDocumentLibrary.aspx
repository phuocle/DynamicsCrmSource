<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.CreateDocumentLibrary" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
Sys.Application.add_load(windowOnLoad);

function moveBack() {
Mscrm.EnableDocumentManagementPageHelper.userClickedBackOrCancelButton(_WizardNavigateEnum.BACK);
}


function moveNext() {
WizardNavigate(_WizardNavigateEnum.CLOSE);
}

function OnUserCancel() {
Mscrm.EnableDocumentManagementPageHelper.userClickedBackOrCancelButton(_WizardNavigateEnum.CANCEL);
}

function windowOnLoad() {
<%
if (FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current))
{
%>
Mscrm.EnableDocumentManagementPageHelper.createDocumentLibraryUsingS2SForSelectedEntities();
<%
}
else
{
%>
Mscrm.EnableDocumentManagementPageHelper.createDocumentLibraryForSelectedEntities();
<%
}
%>
$get('buttonNext').disbled = true;
$get('buttonCancel').onclick = OnUserCancel;
$get('buttonBack').onclick = moveBack;
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table id="DocumentLibraryCreationStatus" width="50%" cellpadding="2" cellspacing="2" runat="server">
<colgroup>
<col width="70%" />
<col />
</colgroup>
<tr>
<td colspan="2"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Summary.Header" runat="server"/></b></td>
</tr>
<tr>
<td><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Summary.ToCreate" runat="server"/></td>
<td><label id="ToCreate"></label></td>
</tr>
<tr>
<td ><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Summary.NewCreate" runat="server"/></td>
<td><label id="NewCreate"></label></td>
</tr>
<tr>
<td ><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Summary.Failed" runat="server"/></td>
<td><label id="Failed"></label></td>
</tr>
<tr>
<td ><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Summary.AlreadyExist" runat="server"/></td>
<td><label id="AlreadyExist"></label></td>
</tr>
</table>
<br />
<table style="height:5%" id="StatusReportSectionHeader" width="100%" cellpadding="1" cellspacing="1">
<tr>
<td width="10%"><b><loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.Header" runat="server"/></b></td>
</tr>
</table>

<table class="mscrm-docmgmt-TableEntities" border="1" cellpadding="0" cellspacing="0">
<colgroup>
<col width="20%"/>
<col width="45%"/>
<col width="15%"/>
<col width="20%"/>
</colgroup>
<tr>
<td class="mscrm-createDL-HeaderColumn"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.DocumentLibrary' runat='server'/>" >
<loc:Text ResourceId="Object_Plural_Entity" runat="server"/>
</td>
<td class="mscrm-createDL-HeaderColumn"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.DocumentLibrary' runat='server'/>" >
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.DocumentLibrary" runat="server"/>
</td>
<td class="mscrm-createDL-HeaderColumn" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.Status' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.Status" runat="server"/>
</td>
<td class="mscrm-createDL-HeaderColumn" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.FailureReason' runat='server'/>">
<loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.CreateDL.Report.FailureReason" runat="server"/>
</td>
</tr>
<tr>
<td colspan="4" width="100%">
<div id="statusDiv" class="mscrm-docmgmt-OverflowDiv">
<table width="100%" id="StatusReportTable" class="mscrm-docmgmt-TableGeneric" cellpadding="0" cellspacing="0">
<colgroup>
<col width="20%"/>
<col width="45%"/>
<col width="15%"/>
<col width="20%"/>
</colgroup>
</table>
</div>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
