<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.ArticleCommentPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>

<style>
.articleComment_Dialog
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:120px;
left:0px;
<% } else { %>
left:120px;
right:0px;
<% } %>
height: 100%;
}

#DlgHdBodyContainer
{
bottom: 56px;
}
</style>

<script language="javascript">

function applychanges()
{
var title = $get('title');
title.value = Trim(title.value);

if (title.value.length > 0)
{
$find("crmForm").BuildXml(false, false);
}
else
{
title.focus();
alert(LOCID_KBCOMMENT_TITLEREQUIRED);
return false;
}
var oCrmFormSubmit = $get('crmFormSubmit');
var commentXml = oCrmFormSubmit.crmFormSubmitXml.value;
if (commentXml == "")
{
closeWindow();
}

var command = new RemoteCommand("CustomerService", "SaveArticleComment");
command.SetXmlParameter("commentXml", oCrmFormSubmit.crmFormSubmitXml.value);
command.SetParameter("commentId", <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_comment.Id)%>);

var result = command.Execute();
window.returnValue = result.Success;

if (result.Success)
{
try
{
getDialogArguments().auto(KbArticleComment);
}
catch(e)
{}


window.setTimeout(cancel, 300);
return false;
}
}

function cancel()
{
Mscrm.Utilities.setReturnValue(window.returnValue);
closeWindow();
}

Sys.Application.add_load(PageLoad);
function PageLoad()
{
$find("crmForm").set_saving(true);


$addHandler($get("crmForm"), "submit", applychanges);
window.setTimeout(setFocus,300);
}

function setFocus()
{
if(_bRejectMode)
{
$get('commenttext').focus();
}
else
{
$get('title').focus();
}
}

</script>

<div style="height:100%;width:100%;position:relative">
<frm:HardcodedForm id="crmForm" SupportsDefaultData="false" runat="server">
<sdk:HiddenInputControl id="kbarticleid" runat="server"/>

<div style="height:32px;position:relative" >
<div style="display:inline-block;width:120px" class="ms-crm-Field-Required">
<label for="title"><loc:Text ResourceId="Web.CS.articles.Comment.edit.aspx_69" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</div>
<div class="ms-crm-absolutePosition articleComment_Dialog" >
<sdk:TextBoxControl id="title" runat="Server" MaxLength="50"/>
</div>
</div>
<div class="ms-crm-absolutePosition" style="top:32px;width:99%;">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<sdk:TextAreaControl id="commenttext" runat="Server" MaxLength="1000" TitleResource="Web.Notes.textarea.title"/>
</div>
</div>
</frm:HardcodedForm>
</div>