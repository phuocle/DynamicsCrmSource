<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.EmailSignatureEditor.EmailSignatureEditorPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Xml.Xsl" %>
<%@ Import Namespace="System.Xml.XPath" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
.editPage > ul
{
margin-top:0px;
margin-left:28px;
padding-top:0px;
padding-left:10px;
list-style:disc;
}

.hide
{
display : none;
}
.disabled {
pointer-events : none;
opacity : 0.6 !important;
}

div.editPage
{
background-color: #FFFFFF;
height: 100%;
border: 0px;
min-height:30px;
display:block;
overflow-x:	auto;
overflow-y: auto;
cursor: text;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Msgbody_Default_fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
border: 1px solid #808080;
}

div.editPage[contentEditable=true] P, td.ms-crm-Email-Body[contentEditable=true] P, div.editor[contentEditable=true] P,
div.editPage[contentEditable=true] DIV, td.ms-crm-Email-Body[contentEditable=true] DIV, div.editor[contentEditable=true] DIV
{
margin:12px 0px;
}

div.ms-crm-ReadOnly
{
border:	1px solid;
width: 100%;
height: 19px;
overflow-y: auto;
}

div.bodyro
{
padding: 10px;
height: 100%;
width: 100%;
overflow-x:auto;
}

.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}

#TemplateEditor a,
#TemplateEditor a:link,
#TemplateEditor a:visited,
#TemplateEditor a:active,
#TemplateEditor a:hover
{
color:#00008B;
text-decoration: underline;
}

span.ms-crm-Form-NoNav-Title
{
vertical-align:	middle;
}
</style>
<script type="text/javascript">
function SetAsDefaultSignature() {
Xrm.Page.getAttribute("isdefault").setValue("1");
SetOrRemoveDefaultSignature(true);
}

function RemoveDefaultSignature() {
Xrm.Page.getAttribute("isdefault").setValue("0");
SetOrRemoveDefaultSignature(false);
}

function SetOrRemoveDefaultSignature(value) {
var entity = Xrm.Page.data.entity;
if (entity != null) {
var command = new RemoteCommand("EmailSignatureService", "SetOrRemoveDefaultSignature");
command.SetParameter("id", entity.getId());
command.SetParameter("isdefault", value);
var callback = AfterSetDefault,
result = command.Execute(callback);
}
}

function AfterSetDefault() {
toggleButton();
var crmForm = $find("crmForm");
!IsNull(crmForm) &&
crmForm.SubmitCrmForm(Xrm.SaveMode.load, false, true, false, false)
}
Sys.Application.add_load(EmailSignatureOnLoad);
function EmailSignatureOnLoad()
{
var language = $get("languagecode");
var title = $get("title");
var owner = document.querySelector('#ownerid_lookupTable tr td DIV.ms-crm-Lookup')
var ownerName = document.querySelector('#ownerid_lookupTable tr td DIV.ms-crm-Lookup span.ms-crm-Lookup-Item span')
var deleteButton = $get('_MBDeleteEmailSignature');
var setAsDefaultButton = $get('_MBSetAsDefaultSignature');
var deleteAnchorTag = document.querySelector('#_MBDeleteEmailSignature span a');
var setAsDefaultAnchorTag = document.querySelector('#_MBSetAsDefaultSignature span a');

if(language != null && language.getAttribute("tabindex") != null)
{
language.setAttribute("tabindex","0");
}
if(title != null &&  title.getAttribute("tabindex") != null)
{
title.setAttribute("tabindex","0");
}
if(owner != null && owner.getAttribute("tabindex") != null)
{
owner.setAttribute("tabindex","0");
}
if(ownerName != null && ownerName.getAttribute("tabindex") != null)
{
ownerName.removeAttribute("tabindex");
}
if(deleteButton != null && deleteButton.getAttribute('class') != null && deleteButton.getAttribute('class').indexOf('disabled') != "-1"  &&
deleteAnchorTag != null && deleteAnchorTag.getAttribute("tabindex") != null)
{
deleteAnchorTag.setAttribute("tabindex","-1");
}
if(setAsDefaultButton != null && setAsDefaultButton.getAttribute('class') != null && setAsDefaultButton.getAttribute('class').indexOf('disabled') != "-1" &&
setAsDefaultAnchorTag != null && setAsDefaultAnchorTag.getAttribute("tabindex") != null  )
{
setAsDefaultAnchorTag.setAttribute("tabindex","-1");
}
}

</script>
</head>
<body>
<div id="TemplateEditorHtml" style="display:none;"></div>
<div style="top: 0px; position: absolute; width:100%; bottom:0px;">
<div style="top: 0px; position: absolute; width:100%; height:98px">
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</div>
<div style="top: 98px; bottom: 24px; position: absolute; width: 100%;">
<div class="ms-crm-TabBar-Cell" style="padding-top:10px;margin-left:10px;margin-right:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="position: absolute; top: 31px; bottom: 0px; width: 100%;">

<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="top:0px;bottom:0px;left:10px;right:10px;height:auto;width:auto" >
<div id="contentWrapper" style="position:absolute;top:10px;left:10px;right:10px;bottom:10px;min-width:550px">
<div id="tdAreas" class="ms-crm-Form-Background" style="width: 100%;height:100%">
<div id="areaForm" class="ms-crm-Form-Area">
<frm:CrudForm id="crmForm" runat="server" />
</div>
<div>
<cnt:AppNotifications id="notifications" runat="server" AutoRegister="true" />
</div>


<div style="padding-right:4px">
<%
if(!(crmForm.Disabled || crmForm.ReadOnly))
{
%>						<div id="htmlBarWrapper" style="max-height:26px">
<cnt:AppHtmlBarControl id="crmHtmlBar" type="TemplateEditor" runat="server"/>
</div>
<%
}
%>
<div id="TemplateEditor" applyformat="true" class="editPage" contenteditable="<%=(crmForm.Disabled || crmForm.ReadOnly) ? "false" : "true"%>" onfocus="HandleFocus(new Sys.UI.DomEvent(event))" onselectstart="new Sys.UI.DomEvent(event).stopPropagation();return true;"  onblur="saveEditorSelection();"><%= _presentationHtml %></div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
