<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.RelationshipRoleEditor" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">

Sys.Application.add_load(AppOnLoad);


function AppOnLoad()
{
<%
if (CurrentForm.Disabled)
{
%>

var tblRoleMaps=document.getElementById("roleMaps");
var aoImgs = tblRoleMaps.getElementsByTagName("IMG");

var iLength = aoImgs.length;


for (var i = 0; i < iLength; i++)
{
var oImg = aoImgs[i];
if (oImg.className == "radio")
{
oImg.setAttribute("Disabled") = true;
}
}
<%
}
else
{
%>
Mscrm.FormControlInputBehavior.GetBehavior("name").setFocus();
<%
}
%>
}






function ToggleRow(oCell)
{
<%
if (!CurrentForm.ReadOnly)
{
%>
var oRow = oCell.parentNode;
var aoCheckBoxes = oRow.getElementsByTagName("INPUT");

var iLength = aoCheckBoxes.length;


for (var i = 0; i < iLength; i++)
{
var oCheckBox = aoCheckBoxes[i];
if (oCheckBox.className == "relchk")
{
ToggleCheckBox(oCheckBox);
}
}

<%
}
%>
}


function ToggleColumn(oCell)
{
<%
if (!CurrentForm.ReadOnly)
{
%>
var iIndex	= oCell.cellIndex;


var tblRoleMaps=document.getElementById("roleMaps");
var iLength = tblRoleMaps.rows.length;

for (var i = 1; i < iLength; i++)
{
var oCheckBox = XUI.Html.DomUtils.GetFirstChild(tblRoleMaps.rows[i].cells[iIndex]);

if (!IsNull(oCheckBox) && oCheckBox.className == "relchk")
{
ToggleCheckBox(oCheckBox);
}
}
<%
}
%>
}
function ToggleCheckBox(o)
{
if(!o.getAttribute("Disabled"))
{
o.checked = !o.checked;
}
}





</script>
<style type="text/css">
.gridContent
{
position:absolute;
left:10px;
right:10px;
top:108px;
bottom:35px;
}
.divStatusBar
{
width:100%;
position:absolute;
bottom:0px
}
td.header
{
<%
if (!CurrentForm.Disabled)
{
%>
cursor:	pointer;
<%
}
%>
}


tr.on
{
background-color:#eaeaff;
}

table.queue
{
width: 100%;
border-bottom: 1px solid #dddddd;
table-layout: fixed;
}

input.relchk
{
border:	0px;
<%
if (!CurrentForm.Disabled)
{
%>
cursor:	pointer;
<%
}
%>
}
</style>
</head>
<body style="overflow:hidden">
<frm:RelationshipRoleForm id="crmForm" SupportsDefaultData="true" runat="server">
<div style="width:100%;height:100%">
<div style="width:100%;height:98px">
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</div>
<div class="ms-crm-Form-Background gridContent">
<div id="areaForm" class="ms-crm-Form-Area" style="position:absolute;width:100%">
<cnt:AppNotifications id="Notifications" runat="server" />
<div class="ms-crm-TabBar-Cell">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="width:100%;height:94%">
<div id="tab0" class="ms-crm-Tab" style="display:inline;padding:10px;height:95%">
<table width="100%" height="100%" cellspacing="3" cellpadding="0" style="table-layout:fixed;">
<col width="115"><col/><col width="135"><col/>
<tr>
<td id="name_c" class="ms-crm-Field-Required" >
<label for="name"><loc:Text ResourceId="RelationshipRoleEditor_Name_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td colspan="3"><sdk:TextBoxControl id="name" runat="Server"/></td>
</tr>
<tr height="5px"></tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4"><loc:Text ResourceId="RelationshipRoleEditor_Section_Title" runat="server"/></td>
</tr>
<tr height="5px"></tr>
<tr>
<td colspan="4">
<table class="ms-crm-Form-Layout">
<tr>
<td valign="top" width="20px;"><img alt="" src="/_imgs/error/notif_icn_info16.png"></td>
<td style="color:#555555;">
<loc:Text ResourceId="RelationshipRoleEditor_Table_Information" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr height="5px"></tr>
<tr>
<td colspan="3" valign="top">
<table id="roleMaps" class="queue" cellspacing="0" cellpadding="2" >
<col width="125"><col width="70"><col width="70"><col width="70">
<tr style="text-align:center;background-color:#dddddd;" title="Title">
<td class="relRoleEdit_edit_td_HeadSpacer" title=""></td>
<td class="header" onclick="ToggleColumn(this)"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Account, NameFormatStyle.Singular))%></td>
<td class="header" onclick="ToggleColumn(this)"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Contact, NameFormatStyle.Singular))%></td>
<td class="header" onclick="ToggleColumn(this)"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Opportunity, NameFormatStyle.Singular))%></td>
</tr>
<tr>
<td class="header" onclick="ToggleRow(this)"><loc:Text ResourceId="RelationshipRoleEditor_Row_Title_Mask" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Account, NameFormatStyle.Singular))%></loc:Argument></loc:Text></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Account, Util.Account)%></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Account, Util.Contact)%></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Account, Util.Opportunity)%></td>
</tr>
<tr class="on">
<td class="header" onclick="ToggleRow(this)">
<loc:Text ResourceId="RelationshipRoleEditor_Row_Title_Mask" runat="server">
<loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Contact, NameFormatStyle.Singular))%></loc:Argument>
</loc:Text></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Contact, Util.Account)%></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Contact, Util.Contact)%></td>
<td class="relationshiproleeditor_edit_td_item"><%= GenerateMappingUI(Util.Contact, Util.Opportunity)%></td>
</tr>
</table>
</td>
</tr>
<tr height="50%"><td></td></tr>
</table>
</div>
</div>
</div>
</div>
<div class="ms-crm-Form-StatusBar divStatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</div>
</frm:RelationshipRoleForm>
</body>
</html>
