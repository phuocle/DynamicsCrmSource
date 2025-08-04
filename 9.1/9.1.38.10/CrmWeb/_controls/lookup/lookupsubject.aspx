<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Controls.Lookup.LookupSubjectPage"    %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Web.Controls.Lookup"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<script language="javascript">

<%= fetchArray %>
<%= xslArray %>

var _oXml = XUI.Xml.CreateDocument();
var _oXsl = XUI.Xml.CreateDocument();

var sReturnData	= null;
var currentSubject = null;

Sys.Application.add_load(function () {
$addHandler($get('TreeSubject'), "dblclick", applychanges);
});

function getSubject(sender, subject)
{
currentSubject = subject;
$get('trNone').style.backgroundColor = "";
}

function applychanges()
{
if (currentSubject != null)
{
var lookupItems = new LookupItems();

if (currentSubject != "")
{
var oLookupItem = new LookupItem();

oLookupItem.id			= currentSubject.get_id();
oLookupItem.name		= currentSubject.get_name();
oLookupItem.html		= "<img alt=\"\" class=\"ms-crm-Lookup-Item\" src=\"/_imgs/ico_16_129.gif\">" + CrmEncodeDecode.CrmHtmlEncode(currentSubject.Name);
oLookupItem.type		= 129;
oLookupItem.values		= null;
oLookupItem.keyValues	= null;

lookupItems.items.push(oLookupItem);
}

Mscrm.Utilities.setReturnValue(lookupItems);
closeWindow();
}
else
{
alert(LOCID_SELECT_SUBJECT);
}
}

function cancel()
{
closeWindow();
}

function handleNone()
{
$find(String.format("{0}-Cell", TreeSubject.id)).Clear();
currentSubject = "";
$get('trNone').style.backgroundColor = "#a7cdf0";
}

function handleNoneDblClick()
{
handleNone();
applychanges();
}

</script>
<div style="width:100%;height:100%;position:relative">
<div class="ms-crm-Dialog-Lookup-ListHeaderBar">
<div class="ms-crm-Dialog-Lookup-ListColumn"><loc:Text ResourceId="Web._controls.lookup.lookupsubject.aspx_105" runat="server"/></div>
</div>
<div class="ms-crm-Dialog-Lookup-Objects ms-crm-absolutePosition" style="top:20px">
<table height="100%" width="100%" cellspacing="0" cellpadding="0">
<tr height="20" onclick="handleNone();" ondblclick="handleNoneDblClick();" id="trNone">
<td nowrap class="sel" id="none_c" style="padding:3px;padding-top:5px;border-bottom:1px solid #cccccc;">
<img alt="" src="/_imgs/ico_18_role_x.gif" align="absmiddle" class="lookupsubject_img_role"><loc:Text ResourceId="Web._controls.lookup.lookupsubject.aspx_None" runat="server"/>
</td>
</tr>
<tr style="vertical-align:top">
<td><cnt:AppTree id="crmTree" runat="server"/></td>
</tr>
</table>

</div>
</div>