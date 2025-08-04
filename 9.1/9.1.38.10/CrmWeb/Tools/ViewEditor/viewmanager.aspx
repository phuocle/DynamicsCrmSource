<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.ViewManagerPage"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>

<link rel="shortcut icon" href="/pa_favicon.ico" />

<cnt:AppHeader runat="server" id="crmHeader"/>

<script language="javascript">

var _bSaving = false;
var _oActive;
var _requiredColumn	= <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_requiredColumn) %>;
var _islookupview;

var _bInitialized = false;
var _bIsSystemView = false;

var oFieldsXml;
var oPropertiesXml;
var oGridXml;
var oFetchXml;
var oEntitiesXml;
var _cellsRow;

function loadXmls()
{
oFieldsXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preFieldsXml")));
oPropertiesXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("prePropertiesXml")));
oGridXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preGridXml")));
oFetchXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preFetchXml")));
oEntitiesXml = XUI.Xml.LoadXml(XUI.Html.GetText($get("preEntitiesXml")));
}

Sys.Application.add_load(function ()
{




$addHandler(window, 'resize', AdjustTaskBoxHeight);
$addHandler(window, 'unload', PageOnUnLoad);
_cellsRow = $get('cellsRow');
try
{
_islookupview = $get("querytype").value == <%= Microsoft.Crm.Sdk.SavedQueryType.LookupView %>

loadXmls();

Init();

focus();

_bInitialized = true;

<%


if ( _isSystemView)
{
%>
_bIsSystemView = true;
<%
if ( crmForm.State == FormState.New)
{
%>

function launchViewProperties() {
if (!document || !document.body || document.readyState !== 'complete')
setTimeout(launchViewProperties, 5);
else
ViewProperties('new');
}

setTimeout(launchViewProperties, 0);
<%			}
}
else
{

%>
$find("crmForm").detachCloseAlert();
<%
}
%>
}
finally
{
showPage();
AdjustTaskBoxHeight();
}
});

function showPage()
{
document.getElementById("progressSpan").style.display="none";
document.getElementById("viewEditorSpan").style.display = "inline";
}
function AdjustTaskBoxHeight()
{
var paddingBottom=20;
document.getElementById("tdTaskBoxCont").style.height = ($get("tdTaskBoxCont").offsetHeight - paddingBottom) + "px";

}
function PageOnUnLoad()
{
$removeHandler(window, 'resize', AdjustTaskBoxHeight);
}
</script>

<style type="text/css">

div.tblEditor
{
width: 97%;
height: <%= (_isCustomizable) ? "230" : "180" %>px;
}

.ms-crm-Form
{
height:100%;
width:100%;
}

h1.ms-crm-Form
{
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
}
td.viewmanager_td_NotSysView
{
padding-top: 0px !important;
padding-bottom: 0px !important;
height: 230px !important;
}
div.ms-crm-ViewManager
{
height:207px !important;
border-bottom: 1px solid #999999
}
td.viewmanager_td_Editor
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-left:0px !important;
<% } else { %>
padding-right:0px !important;
<% } %>
padding-bottom:0px !important;
}
td.viewmanager_td_SysView
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
padding-right:0px !important;
<% } else { %>
padding-left:0px !important;
<% } %>
padding-bottom:0px !important;
height:230px !important;
}

div.ms-crm-MenuBar UL.ms-crm-menubar-left
{
margin-left:0px;
}

</style>

</head>

<body>

<pre id="preFieldsXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_fieldXmlDoc.OuterXml) %></pre>
<pre id="prePropertiesXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_propertiesXmlDoc.OuterXml) %></pre>
<pre id="preGridXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_gridXmlDoc.OuterXml) %></pre>
<pre id="preFetchXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_fetchXml) %></pre>
<pre id="preEntitiesXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_entitiesXml) %></pre>
<div id="progressSpan" style="display:inline">
<table height="100%" width="100%" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif"/>
</td>
</tr>
</table>
</div>

<%
if (!(IsFromTemplateEditor || IsFromExportToExcelEditor || IsFromAdvancedFind))
{
%>
<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
<div id="viewEditorSpan" class="ms-crm-absolutePosition" style="top:48px;display:none;height:calc(100% - 48px);width:100%">
<%
}
else
{
%>
<div id="viewEditorSpan" class="ms-crm-absolutePosition" style="display:none;height:100%; width:100%">
<%
}
%>

<frm:HardcodedForm id="crmForm" runat="server">


<sdk:HiddenInputControl id="name" runat="server"/>
<sdk:HiddenInputControl id="description" runat="server"/>
<sdk:HiddenInputControl id="querytype" runat="server"/>
<sdk:HiddenInputControl id="layoutxml" runat="server"/>
<sdk:HiddenInputControl id="queryapi" runat="server" Visible="false" />

<%
RenderInputs();
%>



<table cellspacing="0" cellpadding="0" width="100%" height="100%" style="table-layout:fixed; position:absolute;top:0px;left:0px;bottom:0px;right:0px;">
<col/><col width="153"/>
<%
if (_isSystemView)
{
%>		<tr>
<td colspan="2" height="98">
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</td>
</tr>
<%
}
%>
<tr>
<%
if (_isSystemView)
{
%>
<td id="editor" class="viewmanager_td_Editor">
<%
}
else
{
%>
<td id="editor" style="vertical-align:top;">
<%
}
%>

<div class="tblEditor">
<div class="ms-crm-ColumnEditor-Header" id="divGridCols" style="overflow-x:hidden;">
<table cellspacing="0" cellpadding="0" class="cell" style="table-layout:fixed;width:100%;height:100%;">
<tr id="cellsRow">
</tr>
</table>
</div>
<div id="viewEditorGridArea" onscroll="HandleScroll(new Sys.UI.DomEvent(event));" class="ms-crm-ViewManager">
<br/><br/><br/><br/><br/><br/>
<loc:Text ResourceId="Web.ViewEditor.Grid.xsl_67" runat="server"/>
<span id="tblDataAreaStretcher" style="width:1px;height:1px;display:block"></span>
</div>
</div>

</td>
<%
if (_isSystemView)
{
%>
<td class="viewmanager_td_SysView"  id="tdTaskBoxCont">
<%
}
else
{
%>
<td class="viewmanager_td_NotSysView " id="tdTaskBoxCont">
<%
}
%>
<crm:TaskBox runat="server" id="crmTaskBox"  />
</td>
</tr>
<tr>
<td colspan=2 style="padding-top: 20px">
<cnt:AppNotifications id="FormNotifications" runat="server" />
</td>
</tr>
<%
if (_isSystemView)
{
%>
<tr>
<td class="ms-crm-Form-StatusBar" colspan="2"></td>
</tr>
<%
}
%>
</table>

</frm:HardcodedForm>
</div>
</body>
</html>
