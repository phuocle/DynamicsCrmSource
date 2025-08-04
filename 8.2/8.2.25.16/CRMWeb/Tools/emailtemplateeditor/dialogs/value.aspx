<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Tools.EmailTemplateEditor.ValueDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript" type="text/javascript">

var _oXml;

var _sEntLogName	= null;
var _sEntDispName	= null;
var _sAttrLogName	= null;
var _sAttrDispName	= null;
var _sDataType		= null;

Sys.Application.add_load(ApplicationLoad);

function ApplicationLoad()
{
var oArgs = getDialogArguments();
with (oArgs)
{
_oXml = Xml;
_sEntLogName = Ent;
_sAttrLogName = Attr;
}
BuildEntity();
BuildAttribute(_sEntLogName);
}

function cancel()
{
closeWindow();
}

function applychanges()
{
Mscrm.Utilities.setReturnValue(new ValueObj(_sEntLogName, _sEntDispName, _sAttrLogName, _sAttrDispName, _sDataType));
closeWindow();
}


function BuildEntity()
{
var oEntities = XUI.Xml.SelectNodes(_oXml, "/entities/entity", null);

var SelectEntity = new Select();
SelectEntity.Selected	= _sEntLogName;
SelectEntity.ID			= "ObjectTypeCode";
SelectEntity.OnChange	= "UpdateAttribute(this)";

var i;
var iLen = oEntities.length;

for (i = 0; i < iLen; i++)
{
SelectEntity.AddOption(oEntities[i].getAttribute("desc"),oEntities[i].getAttribute("name"));
}

var Entity = document.getElementById("Entity");
SelectEntity.AddToControl(Entity);
_sEntDispName = XUI.Xml.SelectSingleNode(_oXml, "/entities/entity[@name = '" + _sEntLogName + "']", null).getAttribute("desc");
}


function BuildAttribute(s)
{
var Attribute = document.getElementById("Attribute");
Attribute.innerHTML = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(_oXml, "/entities/entity[@name = '" + s + "']/select", null));

var oSelect = XUI.Html.DomUtils.GetFirstChild(Attribute);

if (_sAttrLogName != null)
{
oSelect.value = _sAttrLogName;
}
else
{
oSelect.value = oSelect.options[0].value;
}


XUI.Html.DispatchDomEvent(oSelect, XUI.Html.CreateDomEvent("change"));
}



function UpdateAttribute(o)
{

var selectElement = Mscrm.FormControlInputBehavior.GetBehavior(o.id);
_sEntLogName	= selectElement.get_dataValue();
_sEntDispName = selectElement.get_innerText();

_sAttrLogName	= null;
_sAttrDispName	= null;
_sDataType		= null;

BuildAttribute(_sEntLogName);
}



function onFieldChange(o)
{



_sAttrLogName = o.value;
var selectedOption = o.options[o.selectedIndex];
_sAttrDispName = XUI.Html.GetText(selectedOption);
_sDataType = selectedOption.getAttribute("DataType");
}
</script>
</head>
<body>
<form name="crmDialog" style="height:100%; width:100%">
<frm:DialogForm id="crmForm" runat="server" >
<table cellpadding="0" cellspacing="5">
<col><col width="100%">
<tr>
<td nowrap><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.value.aspx_173" runat="server"/></td>
<td id="Entity"></td>
</tr>
<tr>
<td nowrap><loc:Text ResourceId="Web.Tools.emailtemplateeditor.dialogs.value.aspx_177" runat="server"/></td>
<td id="Attribute"></td>
</tr>
</table>
</frm:DialogForm>
</form>
</body>
</html>
