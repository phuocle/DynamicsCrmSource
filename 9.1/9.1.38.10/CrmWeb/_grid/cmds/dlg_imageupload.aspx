<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ImageUploadDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="System.Globalization" %>
<script type="text/javascript">
function cancel()
{
closeWindow(true);
}

function applychanges()
{
Mscrm.ImageUploadControl.SubmitChanges();
}

Sys.Application.add_load(Mscrm.ImageUploadControl.InitializeUploadDialog);
</script>

<div>
<form id="ImageUploadForm" name="ImageUploadForm" method="post" enctype="multipart/form-data" />
<div id="LoadingDiv" style="display:none" class="ms-crm-ImageLoadingDiv">
<IFRAME id="LoadingFrame" name="LoadingFrame" src='/_static/loading.htm' class="ms-crm-ImageLoadingFrame" frameborder="0" scrolling="no"></IFRAME>
</div>
<div id="UserInputDiv">
<div>
<IFRAME id="PreviewFrame" class="ms-crm-ImagePreviewFrame" name="PreviewFrame" src='/_imgs/ContactPhoto.png' frameborder="0" scrolling="no"></IFRAME>
</div>
<div class="ms-crm-ImageSelectionDiv">
<input class="radio ms-crm-ImageSelectOption" id="UploadPictureOption" type="radio" name="OptionGroup" value="UploadPicture" tabindex ="2" CHECKED/>
<label class="ms-crm-Bold-Header ms-crm-ImageSelectOption" for="UploadPictureOption"><loc:Text ResourceId="Web._grid.cmds.dlg_imageupload.aspx_UploadOptionLabel" runat="server"/></label>
<div class="ms-crm-ImageUploadLabel">
<loc:Text ResourceId="Web._grid.cmds.dlg_imageupload.aspx_UploadOptionDescription" runat="server">
<loc:Argument runat="server">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(FileSizeInMB)%>
</loc:Argument>
</loc:Text>
</div>
<input class="ms-crm-ImageFileInput" type="file" name="ImageFileInput" id="ImageFileInput"/>
<div>
<input class="radio ms-crm-ImageSelectOption" id="RemovePictureOption" type="radio" name="OptionGroup" value="RemovePicture"/>
<label class="ms-crm-Bold-Header ms-crm-ImageSelectOption" for="RemovePictureOption">
<loc:Text ResourceId="Web._grid.cmds.dlg_imageupload.aspx_RemoveOptionLabel" runat="server"/>
</label>
</div>
</div>
<div id="ErrorDiv" class="ms-crm-ImageErrorDiv" style="display:none">
<span class="ms-crm-ImageErrorText" id="ErrorMessageHolder"></span>
</div>
<div id="FileTypeErrorDiv" class="ms-crm-ImageErrorDiv" style="display:none">
<span class="ms-crm-ImageErrorText"><loc:Text ResourceId="Web._grid.cmds.dlg_imageupload.aspx_FileExtensionError" runat="server"/></span>
</div>
<div id="FileSizeErrorDiv" class="ms-crm-ImageErrorDiv" style="display:none">
<span class="ms-crm-ImageErrorText">
<loc:Text ResourceId="Web._grid.cmds.dlg_imageupload.aspx_FileSizeError" runat="server">
<loc:Argument runat="server">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(FileSizeInMB)%>
</loc:Argument>
</loc:Text>
</span>
</div>
</div>
<%=CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/_grid/cmds/dlg_imageupload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</form>
</div>