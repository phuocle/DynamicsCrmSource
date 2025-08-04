<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Tools.EmailTemplateEditor.DataFieldProperties" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_22" runat="server"/></title>

<script language="javascript">

var _oXml;
Sys.Application.add_load(ApplicationLoad);

function ApplicationLoad()
{
$addHandler(document, 'keydown', document_onkeydown);
var oArgs = getDialogArguments();
_oXml = oArgs.Xml;
AddDataValues(oArgs.Text);
}


function document_onkeydown(eventObj)
{
if (eventObj.target.tagName != "BUTTON" && eventObj.keyCode == KEY_ENTER && eventObj.target.tagName == "INPUT")
{
eventObj.preventDefault();

applychanges();
}
if (eventObj.target.tagName != "BUTTON" && eventObj.target.tagName != "INPUT")
{
switch (eventObj.keyCode)
{
case KEY_DOWN:
SelectNextRow();
break;
case KEY_UP:
SelectPreviousRow();
break;
case KEY_DELETE:
case KEY_DEL:
Delete();
break;
case KEY_ENTER:
Edit();
break;
}
}
}

function cancel()
{
closeWindow();
}

function applychanges()
{
var sDataSlug = "{!";
var sDataSlugDisplay = "{!";

var oRows = XUI.Html.DomUtils.GetFirstChild($get('DataFields')).rows;

var iLen = oRows.length;
var DefaultText = $get("DefaultTextId");
if (oRows.length > 1)
{
var i;

for (i = 1; i < iLen; i++)
{
sDataSlug += oRows[i].value + ";";
sDataSlugDisplay += XUI.Html.GetText(oRows[i].cells[0]) + ";";
}

if ((DefaultText.value.search(/[;&<>{}]/g) != -1))
{
alert ( formatString(LOCID_EMAILED_INVALIDCHARS, "\n\n ; & < > { }\n\n") );
DefaultText.select();
}
else
{
sDataSlug += DefaultText.value + "}";
sDataSlugDisplay += DefaultText.value + "}";

var oReturn = new Array();
oReturn[0] = sDataSlug;
oReturn[1] = sDataSlugDisplay;

Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
}
}
else
{
alert(LOCID_EMAILED_NODATAFIELDS);
}
}

</script>
</head>
<body>
<form name="crmDialog" style="height:100%; width:100%">
<frm:DialogForm id="crmForm" runat="server" >
<div class="ms-crm-TabBar-Cell">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_102" runat="server"/>&nbsp;</legend>
<div class="desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_104" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col><col width="100">
<tr>
<td valign="top">
<div id="DataFields" class="ms-crm-DataField" >
<table cellpadding="2" cellspacing="0" width="100%">
<tr style="display: none;">
<td class="hand"></td>
</tr>
</table>
</div>
</td>
<td valign="top">
<ui:Button CssClass="ms-crm-RefreshDialog-Button" OnClick="MoveUp();" ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_119" runat="server"></ui:Button>
<ui:Button CssClass="ms-crm-RefreshDialog-Button" OnClick="MoveDown();" ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_120" runat="server"></ui:Button>
<ui:Button CssClass="ms-crm-RefreshDialog-Button" OnClick="Edit();" ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_121" runat="server"></ui:Button>
<ui:Button CssClass="ms-crm-RefreshDialog-Button" ID="btnAdd" OnClick="Add();" ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_122" runat="server"></ui:Button>
<ui:Button CssClass="ms-crm-RefreshDialog-Button" OnClick="Delete();" ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_123" runat="server"></ui:Button>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="80"><col>
<tr>
<td><label for="DefaultTextId"><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.datafieldproperties.aspx_130" runat="server"/></label></td>
<td>
<input id="DefaultTextId" name="DefaultText" type="text" maxlength="500"/>
</td>
</tr>
</table>
</fieldset>
</div>
</div>
</frm:DialogForm>
</form>
</body>
</html>
