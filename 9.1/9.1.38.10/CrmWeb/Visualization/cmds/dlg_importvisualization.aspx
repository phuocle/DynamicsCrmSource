<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ImportVisualizationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
<style type="text/css">
.ms-crm-Dialog-Header
{
border-bottom-style:none !important;
height:			10px !important;
}
.ms-crm-VizDialog-Footer
{
height:50px;
bottom:0px;
position:absolute;
width:100%;
}
.ms-crm-VizDialog-Header-Mssg
{
height:60px;
top:0px;
}
.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static !important;
}
.divFooterButton
{
position: absolute;
top: 4px;
right: 8px;
left: 8px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
}




.ms-crm-Content
{
position:absolute;
bottom:50px;
top:60px;
overflow:hidden;
left:0px;
right:0px;
}

.ms-crm-ContentFrame
{
position:absolute;
width:100%;
height:100%;
}
</style>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Visualization.Designer.Import.DialogTitle" runat="server"/></title>
<script type ="text/javascript">

$addHandler(window, "load", windowOnLoad)
function windowOnLoad() {
Mscrm.ImportVisualizationDialog.set_visualizationType(_visualizationType);
if(!IsNull(window) && !IsNull(window.frameElement))
{
window.frameElement.setAttribute("title",'<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogTitle")%>');
}
}

function applychanges() {
if (Mscrm.ImportVisualizationDialog.checkRequiredParamForImport() == false) {
alert(LOCID_VPD_MSG_VALUEREQUIRED);
return false;
}
Mscrm.ImportVisualizationDialog.importChart(true);
}

function ReplaceChart() {
Mscrm.ImportVisualizationDialog.importChart(false);
}

function keyDownUploadDialog(e) {
var firstFocusableElement = document.getElementById("uploadDialogCloseBtn");
var lastFocusableElement = document.getElementById("btn_id_Cancel");
setFocusOnElement(e, firstFocusableElement, lastFocusableElement);
}

function keyDownDuplicateDialog(e) {
var firstFocusableElement = document.getElementById("duplicateDialogCloseBtn");
var lastFocusableElement = document.getElementById("btn_Cancel");
setFocusOnElement(e, firstFocusableElement, lastFocusableElement);
}

function keyDownNameAndDescDialog(e) {
var firstFocusableElement = document.getElementById("nameAndDescDialogCloseBtn");
var lastFocusableElement = document.getElementById("btn_id_Cancel_import");
setFocusOnElement(e, firstFocusableElement, lastFocusableElement);
}

function keyDownSuccessDialog(e) {
var firstFocusableElement = document.getElementById("successDialogCloseBtn");
var lastFocusableElement = document.getElementById("btn_success_close");
setFocusOnElement(e, firstFocusableElement, lastFocusableElement);
}

function setFocusOnElement(e, firstFocusableElement, lastFocusableElement) {
if (!firstFocusableElement || !lastFocusableElement)
return;
if (e.target == firstFocusableElement && e.keyCode == Mscrm.KeyCode.KEY_TAB && e.shiftKey) {
e.preventDefault();
!IsNull(lastFocusableElement) && lastFocusableElement.focus()
}
else if (e.target == lastFocusableElement && e.keyCode == Mscrm.KeyCode.KEY_TAB && !e.shiftKey) {
e.preventDefault();
!IsNull(firstFocusableElement) && firstFocusableElement.focus()
}
}

</script>
</head>
<body style="overflow:hidden" class="ms-crm-absolutePosition">
<div id="importWizardBody" style ="display:none">
<div>
<div class="main ms-crm-VizDialog-Header-Mssg">
<div id="uploadFileHeaderSpan" class="ms-crm-RefreshDialog-Header">
<button class="ms-crm-RefreshDialog-FirstTopButton ms-crm-RefreshDialog-closeButton" aria-label='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>' id="uploadDialogCloseBtn" onkeydown="keyDownUploadDialog(event)" onclick="Mscrm.ImportVisualizationDialog.closeDialog();"><img src="/_imgs/CloseDialog.png" style="height:16px;width:16px;" alt='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>'/></button>
<div class="ms-crm-RefreshDialog-Header-Title"><loc:Text ResourceId="Web.Visualization.Designer.Import.DialogTitle" runat="server"/></div>
<div class="ms-crm-RefreshDialog-Header-Desc"><loc:Text ResourceId="Web.Visualization.Designer.Import.DialogTitleDescription" runat="server"/></div>
</div>
<div id="duplicateHeaderSpan" style="display:none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-Header ms-crm-RefreshDialog-Error-Title" style="border-bottom-color:#FFFFFF;padding-left: 30px;">
<loc:Text ResourceId="Web.Visualization.Designer.Import.DuplicateFoundTitle" runat="server"/>
</td>
<td>
<button class="ms-crm-RefreshDialog-FirstTopButton ms-crm-RefreshDialog-closeButton" aria-label='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>' id="duplicateDialogCloseBtn" onkeydown="keyDownDuplicateDialog(event)" onclick="Mscrm.ImportVisualizationDialog.closeDialog();"><img src="/_imgs/CloseDialog.png" style="height:16px;width:16px;" alt='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>'/></button>
</td>
</tr>
</table>
</div>
<div id="errorHeaderSpan" style="display:none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-Header ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="Web.Visualization.Designer.Import.ErrorTitle" runat="server"/>
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Header">
<loc:Text ResourceId="Web.Visualization.Designer.Import.ErrorDescription" runat="server"/>
</td>
</tr>
</table>
</div>
<div id="nameAndDescSelectionHeader" style="display:none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-Header ms-crm-RefreshDialog-Error-Title" style="border-bottom-color:#FFFFFF;padding-left: 30px;">
<loc:Text ResourceId="Web.Visualization.Designer.Import.DialogTitle" runat="server"/>
</td>

<td>
<button class="ms-crm-RefreshDialog-FirstTopButton ms-crm-RefreshDialog-closeButton" aria-label='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>' id="nameAndDescDialogCloseBtn" onkeydown="keyDownNameAndDescDialog(event)" onclick="Mscrm.ImportVisualizationDialog.closeDialog();"><img src="/_imgs/CloseDialog.png" style="height:16px;width:16px;" alt='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>'/></button>
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Header" style="border-bottom-color:#FFFFFF">
&nbsp;
</td>
</tr>
</table>
</div>
<div id="successHeaderSpan" style="display:none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-Header ms-crm-RefreshDialog-Error-Title" style="border-bottom-color:#FFFFFF;padding-left: 30px;">
<loc:Text ResourceId="Web.Visualization.Designer.Import.DialogTitle" runat="server"/>
</td>
<td>
<button class="ms-crm-RefreshDialog-FirstTopButton ms-crm-RefreshDialog-closeButton" aria-label='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>' id="successDialogCloseBtn" onkeydown="keyDownSuccessDialog(event)" onclick="Mscrm.ImportVisualizationDialog.closeDialog();"><img src="/_imgs/CloseDialog.png" style="height:16px;width:16px;" alt='<%=CurrentResourceManager.GetString("Web.Visualization.Designer.Import.DialogCloseBtn")%>'/></button>
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Header" style="border-bottom-color:#FFFFFF">
&nbsp;
</td>
</tr>
</table>
</div>
</div>
<div id="contentDiv">
<div style="padding-top:0px;">
<div id="uploadFileBodySpan">
<div>
<div class="ms-crm-RefreshDialog-Main" style = "margin-left:15px;overflow:hidden">
<iframe id="uploadFileFrame" class="ms-crm-ContentFrame" title='<%=CurrentResourceManager.GetString("WebResource_Edit_aspx_UpdateFile")%>' name="uploadFileFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Visualization/cmds/ImportVisualizationFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" width="100%" scrolling="no" frameborder="0">
</iframe>
</div>
<div class="ms-crm-RefreshDialog-Footer" style="bottom:5px">
<div class="ms-crm-Dialog-Buttons ms-crm-Bottom-Border" style="padding-left:30px;padding-right:30px">
<ui:Button ID="btn_id_Ok" CssClass="ms-crm-RefreshDialog-Button" accesskey="O" OnClick="Mscrm.ImportVisualizationDialog.uploadChartXml();" ResourceId="Web.Visualization.Designer.Import.ImportText" runat="server"></ui:Button>
&nbsp;
<ui:Button ID="btn_id_Cancel" CssClass="ms-crm-RefreshDialog-Button" accesskey="C" onkeydown="keyDownUploadDialog(event)" OnClick="Mscrm.ImportVisualizationDialog.closeDialog();" ResourceId="UploadFile_Dialog_Button_Cancel" runat="server"></ui:Button>
</div>
</div>
</div>
</div>
</div>
<div id="duplicateBodySpan" style="display:none">
<div>
<div style="height:10px;">&nbsp;</div>
<div style="padding-left:30px;padding-top:15px;padding-right:15px">
<label id = "duplicateMessageLabel"></label>
</div>
<div style="height:10px;">&nbsp;</div>

<div style="height:60%;valign:top"  >
<div style="padding-left:30px;padding-right:15px">
<label id = "duplicateMessageOption"></label>
</div>
</div>
<div class="ms-crm-VizDialog-Footer">

<div class="divFooterButton" style="padding-right: 20px;" >
<ui:Button ID="btn_Replace" CssClass="ms-crm-RefreshDialog-Button" width="100" accesskey="R" OnClick="ReplaceChart();" ResourceId="Web.Visualization.Designer.Import.ReplaceText" runat="server"></ui:Button>
<ui:Button ID="btn_KeepBoth" CssClass="ms-crm-RefreshDialog-Button" accesskey="K" OnClick="Mscrm.ImportVisualizationDialog.btnKeepBoth();" ResourceId="Web.Visualization.Designer.Import.KeepBothText" runat="server"></ui:Button>
<ui:Button ID="btn_Cancel" CssClass="ms-crm-RefreshDialog-Button" width="100" accesskey="C" onkeydown="keyDownDuplicateDialog(event)" OnClick="Mscrm.ImportVisualizationDialog.closeDialog();" ResourceId="UploadFile_Dialog_Button_Cancel" runat="server"></ui:Button>
</div>
</div>
</div>
</div>
<div id="errorBodySpan" style="display:none">
<div>
<div style="padding-left:15px;padding-right:15px;height:20px;vAlign:bottom;">
<label for="visualizationErrorArea"><loc:Text ResourceId="Web.Visualization.Designer.Import.ErrorText" runat="server"/></label>
</div>
<div style="height:10px;">&nbsp;</div>
<div style="padding-right:15px;padding-left:15px">
<ui:TextArea id="visualizationErrorArea" scroll="auto" Height="110px" maxlength="2000" runat="server"/>
</div>
<div style="height:10px;">&nbsp;</div>
<div class="ms-crm-VizDialog-Footer">

<table cellpadding="2" cellspacing="3" width="100%">
<col width="80%"><col>
<tr align="right" valign="middle">
<td>
<ui:Button ID="btn_error_close" width="100" accesskey="O" OnClick="Mscrm.ImportVisualizationDialog.closeDialog();" ResourceId="Button_Label_Close" runat="server"></ui:Button>			</td>
</tr>
</table>
</div>

</div>
</div>
<div id="nameAndDescSelectionBody" style="display:none">
<div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout:fixed">
<tr style="height:20px">
<td class="ms-crm-Field-Required" valign="bottom" style="padding-left:15px;padding-right:15px"><label for="visualizationNameControl"><loc:Text ResourceId="Web.Visualization.Designer.SaveAs.Name" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
</tr>
<tr>
<td valign="top" style="padding-left:15px;padding-right:15px"><sdk:TextBoxControl id="visualizationNameControl" MaxLength="100" runat="server"/></td>
</tr>
<tr>
<td valign="bottom" style="padding-left:15px;padding-right:15px"><label for="visualizationDescriptionControl"><loc:Text ResourceId="Web.Visualization.Designer.Import.DescriptionLabel" runat="server"/></label></td>
</tr>
<tr>
<td valign="top" style="padding-left:15px;padding-right:15px">
<sdk:TextAreaControl id="visualizationDescriptionControl" Height="80px" maxlength="2000" runat="server"/>
</td>
</tr>
</table>
<div class="ms-crm-VizDialog-Footer">
<table cellpadding=2 cellspacing=3 width="100%" style="padding-right:30px">
<col width="80%"><col><col>
<tr align="right" valign="middle">
<td></td>
<td><ui:Button ID="btn_id_Import" CssClass="ms-crm-RefreshDialog-Button" width="100" accesskey="I" OnClick="applychanges();" ResourceId="Web.Visualization.Designer.Import.ImportText" runat="server"></ui:Button></td>
<td><ui:Button ID="btn_id_Cancel_import" CssClass="ms-crm-RefreshDialog-Button" width="100" accesskey="C" onkeydown="keyDownNameAndDescDialog(event)" OnClick="Mscrm.ImportVisualizationDialog.closeDialog();" ResourceId="UploadFile_Dialog_Button_Cancel" runat="server"></ui:Button></td>
</tr>
</table>
</div>
</div>
</div>
<div id="successBodySpan" style="display:none">
<div style="height:60%">
<div style="padding-left:15px;padding-right:15px">
<table width="100%" height="100%" cellpadding=0 cellspacing=0 style="table-layout:fixed">
<tr>
<td style="padding-left:15px;padding-right:15px;padding-top:15px">
<label id="successMessageLabel"/>
</td>
</tr>
</table>
</div>
<div class="ms-crm-VizDialog-Footer">

<table cellpadding="2" cellspacing="3" width="100%">
<col width="80%"><col>
<tr align="right" valign="middle">
<td style="padding-right:30px">
<ui:Button ID="btn_success_close" CssClass="ms-crm-RefreshDialog-Button" width="100" accesskey="C" onkeydown="keyDownSuccessDialog(event)" ResourceId="Button_Label_Close" runat="server"></ui:Button>
</td>
</tr>
</table>
</div>

</div>
</div>
</div>
</div>
</div>

</div>
<div id="importWaitingSpan" style ="display:inline">
<table style="height:100%;width:100%;background-color:#FFFFFF">
<tr>
<td style='vertical-align: middle' align='center'>
<img id='loadingImg' alt="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.Visualization.Loading.Text"))%>" src='/_imgs/AdvFind/progress.gif'/>
</td>
</tr>
</table>
</div>
</body>
</html>
