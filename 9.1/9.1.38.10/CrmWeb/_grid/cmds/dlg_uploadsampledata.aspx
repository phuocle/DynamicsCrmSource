<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.UploadSampleDataDialogForm" %>

<script type="text/javascript" language="javascript">

function UploadSuccessfulCallBack(dataXml)
{
Mscrm.Utilities.setReturnValue(dataXml);
closeWindow();
}

function btnOk()
{
var uploadFileFrame = $get("uploadFileFrame");
var fileUpload = uploadFileFrame.contentWindow.$get("fileUpload");
if (fileUpload.value == "")
{
alert(LOCID_UPLOADMAP_MISSINGFILE_ERR);
return;
}

if (fileUpload.value != "")
{

var shortName = fileUpload.value;
shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);
var fileExtension = shortName.slice(shortName.lastIndexOf(".") + 1).toLowerCase();

if (fileExtension != "csv" && fileExtension != "txt")
{
alert(LOCID_IW_UNSUPPORTED_FILETYPE);
return;
}

try
{
uploadFileFrame.contentWindow.$get("fileUploadForm").submit();
}
catch(e)
{
alert(LOCID_UPLOADMAP_INVALIDFILE_ERR);
}
}
}

function CloseDialog()
{
Mscrm.Utilities.setReturnValue("");
closeWindow();
}

</script>

<iframe id="uploadFileFrame" name="uploadFileFrame" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/ManageMaps/SampleDataFileUpload.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" style="width:100%" scrolling="no" frameborder="0">
</iframe>
