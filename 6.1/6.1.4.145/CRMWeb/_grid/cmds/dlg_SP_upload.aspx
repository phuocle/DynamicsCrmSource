<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.SPFileUpload" CodeBehind="Microsoft.Crm.Common.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Web" %>
<html>
<head>
<title><loc:Text id="dialogTitle" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
DIV.ms-crm-Dialog-Header-Title{
color:#262626  !important ;
font-size:<%= WebUtility.GetFontResourceForStyle("General.27px.font_size") %>  !important ;
font-family:Segoe UI Light  !important ;
font-weight: Lighter;
margin-left: 30px;
margin-right: 30px;
}
.ms-crm-RefreshDialog-Header
{
top: 0px;
position: absolute;
width: 100%;
height: 75px;
padding-top: 10px;
}
DIV.ms-crm-Dialog-Header
{
top:			20px  !important ;
bottom:			30px  !important ;
padding-left:	30px  !important ;
padding-right:	30px  !important ;
border: none  !important ;
}
.ms-crm-AttachmentContainer
{
top:  68.8px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-right:	30px;
<% }else{ %>
padding-left:	30px;
<% } %>
position:absolute;
bottom:0px;
width:90%;
}

.ms-crm-RefreshDialog-Button_ok
{
height:				24px;
font-family:		Segoe UI,Tahoma,Arial;
font-size:12px;
border: 1px solid #C6C6C6;
background-image:	none;
margin-top:			10px;
width:				auto;
min-width:			80px;
white-space:        nowrap;
text-align: center;
cursor: pointer;
border-width: 1px;
border-style: solid;
background-repeat: repeat-x;
padding-left: 5px;
padding-right: 5px;
color: #444444;
background-color: white;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
margin-left:	30px;
<% }else{ %>
margin-left:8px;margin-right:30px
<% } %>


}

.ms-crm-RefreshDialog-Footer
{
position:			absolute;
bottom:				0px;
width:				100%;
min-width:			288px;

height:				44px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
text-align:			left;
<% } else { %>
text-align:			right;
<% } %>
}


td.AppAttachment_Render_td5
{
display:	none;
}
.ms-crm-WhiteBackground
{
border-color:#D6D6D6;
border-width:1px;
}
.ms-crm-uploadCommentsText
{
font-size:12px;
font-family:Segoe UI;
color:#666666;
}
div.ms-crm-field-normal
{
padding-top: 2px;
vertical-align: middle;
}
input[type="checkbox"]
{
margin: 0px;
width: 5%;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-right:0px;
<% } else { %>
padding-left:0px;
<% } %>

}
.contentUploadFileTable
{
height:auto;
}
.ms-crm-overwrite
{
vertical-align:top;
font-family:Segoe UI;
color:#444444;
font-size:12px;
}
</style>
<script language="JavaScript">


Sys.Application.add_load(PageLoad);


$addHandler(document, 'keydown', document_onkeydown);

function document_onkeydown(eventObj)
{
if (eventObj.keyCode == KEY_ESC)
{
enablecommandbar();
}
}

function PageLoad() {
$get('Attachments').IsSPDocument.value = "true";
$get('userFile').removeAttribute("style");
$get('userfile_c').removeAttribute("noWrap");
var Url = Mscrm.CrmUri.create(window.location.href);
$get('Attachments').LocationId.value = Url.get_query()["locationId"];

if (window.location.search.indexOf("rg=1") != -1 && window.location.search.indexOf("refreshGrid") == -1) {
try { window.opener.auto($get('crmFormSubmitObjectType').value); }
catch (e)
{ }
}
if (window.location.search.indexOf("cw=True") != -1)
{
if (IsOutlookClient())
{
window.returnValue = true;
}
else
{
var regObjId = Url.get_query()["pId"];
Mscrm.CommandBarActions.refreshParentGridSPForUpload(regObjId);
}
if (window.top != null && window.top.opener != null)
{
window.top.opener["UploadSharePointDocumentEnd"] = (new Date).getTime();
}

$removeHandler(document, 'keydown', document_onkeydown);
closeWindow();
return;
}
}

window.onload = function()
{

if (window.location.search.indexOf("cw=True") == -1)
{
if (IsOutlookClient() == false)
{
var associatedGridRibbon = window.opener.document.getElementById("associatedGridRibbon");
if (associatedGridRibbon != null)
{
var commandBar = associatedGridRibbon.children[0];
associatedGridRibbon.style.cursor = "wait";
commandBar.style.visibility = "hidden";
}
}
}
}

window.onunload = function ()
{
enablecommandbar();
$removeHandler(document, 'keydown', document_onkeydown);
}


function enablecommandbar()
{
if (IsOutlookClient() == false)
{
var associatedGridRibbon = window.opener.document.getElementById("associatedGridRibbon");
if (associatedGridRibbon != null)
{
var commandBar = associatedGridRibbon.children[0];
associatedGridRibbon.style.cursor = "default";
commandBar.style.visibility = "visible";
}
}
};

</script>
</head>
<body>
<frm:HardcodedForm id="crmForm" runat="server">
<sdk:HiddenInputControl id="objectid" runat="server" />
<sdk:HiddenInputControl id="objecttypecode" runat="server" />
</frm:HardcodedForm>
<div class="ms-crm-RefreshDialog-Header" id="tdRefreshDialogHeader">
<div class="ms-crm-Dialog-Header-Title" id="tdDialogHeader">
<loc:text resourceid="DocumentManagement.AddDocument.Title" runat="server" />
</div>
</div>
<div class="ms-crm-AttachmentContainer" id="tdRefreshDialogBody">
<cnt:appattachment id="crmAttachment" isspdocument="true" runat="server" />
<div class="AppAttachment_Render_td2">
<table style="width: 100%; table-layout: fixed;" cellspacing="0" cellpadding="0">
<colgroup>
<col width="25%">
<col width="75%">
</colgroup>
<tbody>
<tr style="height: 7.5px">
</tr>
<tr>
<td>
</td>
<td class="ms-crm-uploadCommentsText">
<%=LargeFileLabel%>
</td>
</tr>
<tr style="height: 9.5px">
</tr>
<tr>
<td>
</td>
<td>
<input class="checkbox" type="checkbox" name="to" checked="checked" id="OverWriteExisting" />
<label for="OverWriteExisting" class="ms-crm-overwrite">
<loc:text resourceid="Web._grid.cmds.dlg_sp_upload.aspx_1" runat="server" />
</label>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="ms-crm-RefreshDialog-Footer" id="tdDialogFooter">
<button id="butBegin" onclick="document.getElementById('butAttach').click();" type="button"
class="ms-crm-RefreshDialog-Button_ok" lasttabelement="true">
<loc:text resourceid="Button_Label_OK" runat="server" />
</button>
</div>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display:none;height:100%;width:100%;">
<div id="progressInner" style="height: 100%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<loc:Text ResourceId="UploadNotification" runat="server"/>
</div>
</div>
</div>
</body>
</html>
