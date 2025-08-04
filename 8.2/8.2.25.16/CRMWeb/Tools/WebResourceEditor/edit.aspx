<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.WebResourceEditPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<!DOCTYPE html>
<html style="overflow:auto">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">

var _url = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(webResourceUrl) %>;
var _id = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(id) %>;
var _solPrefix = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(solutionPrefix) %>;
var _refreshGrid = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(refreshGrid.ToString()) %>;
var _dependencyXml = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(dependencyXml) %>;
var _formDirty = false;
var _isCustomizabe = '<%= canCustomize.ToString().ToLower() %>';
var _crmFormSubmit;
var _xmlDoc = null;

Sys.Application.add_load(function () {
attachWindowOnBeforeUnload(window_onbeforeunload);
if(!IsNull(window.top) && !IsNull(window.top.document))
window.top.document.title = window.document.title + " - "+window.top.document.title;
_crmFormSubmit = $get('crmFormSubmit');
_crmFormSubmit.wrURL.value = _url;
if (isNullOrEmptyString(_dependencyXml))
{
createWebResourceDependencyXml();
}
else
{
_dependencyXml = XUI.Xml.LoadXml(_dependencyXml);
Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml = _dependencyXml;
Mscrm.FormLibraryAndEventHandlerUtils.renderWebResourceLibrarycontrol();
}
_crmFormSubmit.pathAndFileName.select();
try
{

_crmFormSubmit.pathAndFileName.focus();
}
catch(e){}
if(_id.length > 0)
{
enableDisableFormParts();
}
$get('solPrefix').innerHTML = CrmEncodeDecode.CrmHtmlEncode(_solPrefix);
PickListValueChanged();

if (_refreshGrid.toLowerCase() === 'true')
{
refreshWebResourceGrid();
}
MakeEditorReadOnly();
refreshRibbon();
});

function window_onbeforeunload(oEvent)
{
oEvent = oEvent.rawEvent;

validate = false;
if (_formDirty)
{
oEvent.returnValue =  LOCID_WREDIT_SAVECHANGES;
return LOCID_WREDIT_SAVECHANGES;
}
}

function createWebResourceDependencyXml()
{
_xmlDoc = XUI.Xml.CreateDocument();

var dependenciesElementNode = _xmlDoc.createElement("Dependencies");

var dependencyElementNode = _xmlDoc.createElement("Dependency");

var attrib = _xmlDoc.createAttribute("componentType")
attrib.nodeValue = "WebResource";
dependencyElementNode.attributes.setNamedItem(attrib);

dependenciesElementNode.appendChild(dependencyElementNode);
_xmlDoc.appendChild(dependenciesElementNode);
Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml = _xmlDoc;
_dependencyXml = _xmlDoc;
}

function setAndEditDependencies()
{
_crmFormSubmit.webResourceDependencyXML.value = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(_dependencyXml, '/Dependencies'));
editWR();
}

function Focus()
{
validate = true;
}

</script>
<style type="text/css">
TD.rofield
{
background:		#eaf3ff;
color:			#000000;
border:			1px solid #c5c5c5;
padding-top:	0px;
padding-bottom:	0px;

}
</style>
</head>

<body style="overflow:auto">

<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<form name="Submitter" id="crmFormSubmit" enctype="multipart/form-data" method="post" target="_self" >
<input name="crmFormSubmitId"	id="crmFormSubmitId"	type="hidden" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(id) %>"/>
<input name="update"    type="hidden" value="" />
<input name="crmCmdID"			type="hidden" value="">
<input	type="hidden" id="appSolutionId" name="appSolutionId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId)%>" />
<input name="id"		type="hidden" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(id) %>"/>
<input name="webResourceDependencyXML"		type="hidden" />
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/Tools/webresourceeditor/edit.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
<input name="close"				type="hidden" value="false"/>
<input	type="hidden"
name="action"
value="upload-parse"/>
<input	type="hidden"
name="fileName"
value=""/>

<div id="editorDiv" style="min-width:500px;">
<div style="height:56px" id="menuHeader">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server" />
</div>
<div>
<table cellspacing="0" cellpadding="0"  style="width:99%;table-layout:fixed;">
<col width="2%" ><col width="1%"/><col width="15%"><col width="10%"><col width="23%"><col width="15%"><col width="20%"/><col width="5%" /><col width="10%">
<tr>
<td />
<td colspan="7" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<A class="ms-crm-InlineTabHeaderText" >
<H3 class="ms-crm-Form">
<label><loc:Text ResourceId="WebResource_Edit_aspx_General" runat="server"/></label>
</H3>
</A>
</td>
<td />
</tr>
<tr>
<td colspan="2"/>
<td class="ms-crm-Field-Required" id="name_c">
<label  id="pathAndFileNameLabel"  for="pathandfilename"><loc:Text ResourceId="WebResource_Edit_aspx_PathandFileName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td colspan="4" >
<table style="width:100%">
<col width="15%"/><col width="85%"/>
<tr>
<td id="solPrefix" style="text-align:center;" class="rofield"></td>
<td>
<input id="pathAndFileName" name="pathAndFileName" type="text" class="ms-crm-Text" maxlength="100" onfocus="Focus();"  onblur="CheckPathName();" onkeypress="setFormDirty();" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td colspan="2"/>
<td><label><loc:Text ResourceId="WebResource_Edit_aspx_DisplayName" runat="server"/></label></td>
<td colspan="4" >
<table style="width:100%">
<tr>
<td>
<input id="displayName" name="displayName" onkeypress="setFormDirty();" type="text" class="ms-crm-Text" maxlength="100" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td colspan="2"/>
<td style="vertical-align:top;"><label><loc:Text ResourceId="WebResource_Edit_aspx_Description" runat="server"/></label></td>
<td colspan="4" >
<table style="width:100%" style="table-layout:fixed;">
<tr>
<td>
<textarea rows="7" cols="20" id="description" name="description" onkeypress="setFormDirty();" runat="server"></textarea>
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td />
<td colspan="7" class="ms-crm-Form-Section ms-crm-Form-SectionBar"/>
<A class="ms-crm-InlineTabHeaderText" >
<H3 class="ms-crm-Form">
<loc:Text ResourceId="WebResource_Edit_aspx_Content" runat="server"/>
</H3>
</A>

</td>
</tr>
<tr>
<td colspan="2"/>
<td class="ms-crm-Field-Required" id="type_c"><label for="webResourceType" id="labelType"><loc:Text ResourceId="WebResource_Edit_aspx_Type" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td colspan="3">
<table style="width:100%">
<col width="75%"/><col width="25%"/>
<tr>
<td>
<sdk:PicklistControl id="webResourceType" onchange="PickListValueChanged();setFormDirty();" name="webResourceType" runat="server"/>
</td>
<td >
<ui:Button id="editwr" onclick="setAndEditDependencies();" ResourceId="Edit_WebResource_Content" runat="server" />
</td>
</tr>
</table>
</td>

</tr>
<tr>
<td colspan="2"/>
<td ><label for="languagecode" id="labelLanguageCode"><loc:Text ResourceId="WebResource_Edit_aspx_LanguageCode" runat="server"/></label></td>
<td colspan="3">
<table style="width:100%">
<tr>
<td>
<sdk:LanguagePicker id="languagecode" name="languagecode" onchange="setFormDirty();" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2"/>
<td><loc:Text ResourceId="WebResource_Edit_aspx_UpdateFile" runat="server"/></td>
<td  colspan="3" >
<table style="width:100%">
<col width="79%"/><col width="1%"/><col width="20%"/>
<tr>
<td>
<input	type="file"
onchange="setFormDirty();" id="userFileId"
name="userFile"
onkeypress="if(event.keyCode == 13){return false;}"
class="ms-crm-WhiteBackground">
</td>
</tr>
</table>
</td>
<td/>
</tr>
<tr>
<td colspan="2"/>
<td><label id="silverLightVersionLabel"><loc:Text ResourceId="WebResource_Edit_aspx_SilverLifhtVersion_Text" runat="server"/></label></td>
<td colspan="3" >
<table style="width:100%">
<tr>
<td>
<input id="silverlightVersion" name="silverlightVersion" onblur="validateSLVersion();" onkeypress="setFormDirty();" type="text" class="ms-crm-Text" maxlength="100" runat="server" />
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td />
<td colspan="7" class="ms-crm-Form-Section ms-crm-Form-SectionBar"/>
<A class="ms-crm-InlineTabHeaderText" >
<H3 class="ms-crm-Form">
<loc:Text ResourceId="WebResource_Edit_aspx_Url" runat="server"/>
</H3>
</A>
</td>
</tr>

<tr>
<td colspan="2"/>
<td >
<label><loc:Text ResourceId="WebResource_Edit_aspx_Url" runat="server"/>
</label>
</td>
<td colspan="4">
<table style="width:100%">
<tr>
<td>
<input class="ms-crm-Url" style="background-color:#d9d9d9" id="wrURL" onclick="Preview(this);" type="text" maxlength="100" readonly/>
</td>
</tr>
</table>
</td>
</tr>



<tr>
<td />
<td colspan="7" class="ms-crm-Form-Section ms-crm-Form-SectionBar">
<A id="mobiledependencynavigationanchorid" class="ms-crm-InlineTabHeaderText" >
<H3 class="ms-crm-Form">
<loc:Text ResourceId="MoCA_OWA_Mobile_Label" runat="server"/>
</H3>
</A>
</td>
</tr>
<tr>
<td colspan="2"/>
<td ><label/></td>
<td colspan="4" style="padding-top:8px">
<ui:CheckBox id="IsEnabledForMobileClient" name="IsEnabledForMobileClient" onclick="HideOrShowMobileOfflineCheckBox(this);" onchange="setFormDirty();" runat="server"/>
<label id="IsEnabledForMobileClientLabel" for="IsEnabledForMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.TabletClient" runat="server"/></label>
</td>
</tr>
<tr>
<td colspan="2"/>
<td ><label/></td>
<td colspan="4" class="ms-crm-availableForMobileOffline-Control-TD" style="padding-top:8px">
<ui:CheckBox id="IsAvailableForMobileOffline" name="IsAvailableForMobileOffline" onchange="setFormDirty();" runat="server"/>
<label id="IsAvailableForMobileOfflineLabel" for="IsAvailableForMobileOffline"><loc:Text ResourceId="SystemCustomization_Webresource_field_Label" runat="server"/></label>
</td>
</tr>
<tr style="height:10px" />
<tr>
<td colspan="2"/>
<td ><label/></td>
<td colspan="4" class="ms-crm-Form-Section ms-crm-Form-SectionBar"/>
<A id="mobiledependencysectionmessage" class="ms-crm-InlineTabHeaderText" >
<H3 class="ms-crm-Form">
<loc:Text ResourceId="WebResource_MobileOffline_Dependency_Section_Label" runat="server"/>
</H3>
</A>
</td>
</tr>
<tr>
<td colspan="2"/>
<td ><label/></td>
<td colspan="4">
<table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; table-layout: fixed; border-spacing: 0;">
<tr>
<td>
<cnt:WebResourceDependencyControl id="formLibraryControl" runat="server"/>
</td>
</tr>
<tr>
<td style="display:none"><sdk:LookupControl id="libraryLookup" DefaultViewId="125A31CE-0F5E-4957-8AA3-7A10C0713886" LookupBrowse="false" LookupStyle="single" runat="server" />
</td>
</tr>
<tr />
</table>
</td>
</tr>
<tr>
<td><br/></td>
</tr>
<tr>
<td><br/></td>
</tr>
</table>
</div>
</div>

</form>

</body>
</html>
