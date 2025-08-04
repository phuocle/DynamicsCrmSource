<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.DashboardLayoutDialog" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!Doctype html>
<html>
<head>
<title><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="Javascript" type="text/javascript">
var selectedLayout = -1;
var _dashboardHover="ms-crm-FixedMenuHover liFloat";
var _dashboardSelect="ms-crm-FixedMenuSelect liFloat";
var _itemClassName = "ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat";
var _itemHoverClassName = "ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Hover";
var	_itemSelectedClassName = "ms-crm-RV-MenuItemL ms-crmRV-MenuItem-Selected";

var _anchorClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest";
var	_anchorHoverClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-MenuItem-Hover";
var _anchorSelectedClassName = "ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Selected";

var _iconClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest";
var _iconHoverClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Hover";
var	_iconSelectedClassName = "ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Selected";
var listLayouts;


$addHandler(window, "load", OnLoad);
function OnLoad(domEvent)
{
var anchor1=document.getElementById("1");
SetSelected(domEvent, anchor1);

var mainContainer = document.getElementsByClassName("ms-crm-RefreshDialog-Main-Container");
if (mainContainer && mainContainer.length > 0) {

mainContainer[0].setAttribute("role", "dialog");
mainContainer[0].setAttribute("aria-labelledby", "dialogHeaderTitle");
mainContainer[0].setAttribute("aria-hidden", "false");
if (!IsRequestFromAppDesigner()) {
SetAriaHidden("true");
}
}

var createButton=document.getElementById("butBegin");
if(createButton)
{
createButton.addEventListener("keydown", HandleKeyDownOnCreateButton);
}

var crossButton=document.getElementById("btnCross");
if(crossButton)
{
crossButton.setAttribute("href","javascript:cancel();");
crossButton.addEventListener("keydown", HandleKeyDownOnCross);
}


listLayouts=document.getElementsByClassName("ms-crm-RV-MenuItem-Anchor");
if(listLayouts && (listLayouts.length>0))
{
listLayouts[listLayouts.length-1].addEventListener("keydown", function(e){
if (e.which === 9 && !e.shiftKey)
{
e.preventDefault();
document.getElementById("butBegin").focus();
}
});
}
}

function HandleKeyDownOnCross(e)
{
if (e.which === 9 && e.shiftKey)
{
e.preventDefault();
document.getElementById("butBegin").focus();
}
}

function HandleKeyDownOnCreateButton(e)
{
if (e.which === 9 && !e.shiftKey)
{
e.preventDefault();
document.getElementById("btnCross").focus();
}
else if (e.which === 9 && e.shiftKey)
{

if(listLayouts && (listLayouts.length>0))
{
e.preventDefault();
listLayouts[listLayouts.length-1].focus();
}
}
}

function SetAriaHidden(value) {
if(window.parent.$P_CRM) {
var divLayoutControl = window.parent.$P_CRM("#crmMasthead");
CheckAndSetAriaHiddenValue(divLayoutControl, value);

var frame = window.parent.$P_CRM("#crmTopBar");
CheckAndSetAriaHiddenValue(frame, value);

var background = window.parent.$P_CRM("#crmContentPanel");
CheckAndSetAriaHiddenValue(background, value);
}
}

function CheckAndSetAriaHiddenValue(element, value) {
if (element && element.length > 0) {
if (value == "remove") {
element.removeAttr("aria-hidden");
}
else {
element.attr("aria-hidden", value);
}
}
}

function IsRequestFromAppDesigner()
{
return !IsNull(window.parent) && !IsNull(window.parent.AppDesignerOpenNewEditorCallback);
}

function cancel()
{
if(IsRequestFromAppDesigner()){
window.parent.AppDesignerOpenNewEditorCallback(null);
}
else
{
SetAriaHidden("remove");
closeWindow();
}
}

function SetSelected(domEvent, anchor)
{
selectedLayout = anchor.id;


if(IsNull(XUI.Html.DomUtils.HasChildElements(anchor)))
{
return;
}
DisplayHoverSelected(anchor);
var liID=anchor.parentNode.id+"1";
document.getElementById("li11").style.display="none";
document.getElementById("li21").style.display="none";
document.getElementById("li31").style.display="none";
document.getElementById("li41").style.display="none";
document.getElementById("li61").style.display="none";
document.getElementById("li71").style.display="none";
document.getElementById("li81").style.display="none";

document.getElementById(liID).style.display="block";

if ((domEvent!=null) && (Mscrm.Utilities.getDomEventKeyCode(domEvent) == "13"))
{
applychanges();
}
}
function DisplayHoverSelected(anchor)
{


if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 9)
{
if(!IsNull(window.frameElement) && !IsNull(window.frameElement.parentNode) && window.frameElement.parentNode.style.display == "none")
{
return;
}
}

if(!IsNull(anchor) && !IsNull(XUI.Html.DomUtils.HasChildElements(anchor)))
{
anchor.parentNode.className = _dashboardSelect;
XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconHoverClassName;
var childNodes = document.getElementsByTagName("a");
for(i=0; i < childNodes.length; i++)
{
if(childNodes[i].id != selectedLayout)
{
DisplayHoverOff(childNodes[i]);
}
else
{
childNodes[i].focus();
}
}
}
}
function DisplayHover(anchor)
{
if(!IsNull(anchor) && selectedLayout != anchor.id && !IsNull(XUI.Html.DomUtils.HasChildElements(anchor)))
{
anchor.parentNode.className = _dashboardHover;
XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconHoverClassName;
}

}

function DisplayHoverOff(anchor)
{
if(selectedLayout != anchor.id && anchor.parentNode.id != "tdDialogHeader" && !IsNull(XUI.Html.DomUtils.HasChildElements(anchor)))
{
anchor.parentNode.className = _itemClassName;
XUI.Html.DomUtils.GetFirstChild(anchor).className = _iconClassName;
}
}
function applychanges()
{

if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.AppDesigner) && IsRequestFromAppDesigner()){
var editorModel = { 'layoutId' : selectedLayout, 'componentType' : 60, 'pageType': 'dashboardeditor' };
window.parent.AppDesignerOpenNewEditorCallback(editorModel);
}
else
{
window.returnValue = selectedLayout;
Mscrm.Utilities.setReturnValue(window.returnValue);
var dialogArgs = getDialogArguments();
var uciCallback;
if(dialogArgs && dialogArgs["uciCallback"])
{
uciCallback = dialogArgs["uciCallback"];
}
if(uciCallback)
{
uciCallback(selectedLayout);
}
closeWindow();
}
}
function OK(domEvent, anchor)
{
SetSelected(domEvent, anchor);
applychanges();
}

function CreateTemplate(domEvent,anchor,itemID)
{
var keyCode = Mscrm.Utilities.getDomEventKeyCode(domEvent);
if(keyCode =="13")
{
SetSelected(domEvent, anchor);
domEvent.preventDefault();
}
else
{
var liID;
var nextliID;
var selectionID;
var tValues;
var tNextID;


var keyDownEntries=new Array ("1:4","2:5","3:6","4:15","5:0","6:0","15:0");
var keyUpEntries=new Array ("1:0","2:0","3:0","4:1","5:2","6:3","15:4");
var keyRightEntries=new Array ("1:2","2:3","3:4","4:5","5:6","6:15","15:0");
var keyLeftEntries=new Array ("1:0","2:1","3:2","4:3","5:4","6:5","15:6");

selectionID=keyCode;
liID=anchor.parentNode.id;

switch(selectionID)
{
case 37:

tValues=keyLeftEntries[itemID].split(":");
tNextID=tValues[1];

if (tNextID=="0")
{
return;
}
document.getElementById(tNextID).focus();
break;
case 38:
tValues=keyUpEntries[itemID].split(":");
tNextID=tValues[1];

if (tNextID=="0")
{
return;
}
document.getElementById(tNextID).focus();
break;
case 39:
tValues=keyRightEntries[itemID].split(":");
tNextID=tValues[1];

if (tNextID=="0")
{
return;
}
document.getElementById(tNextID).focus();
break;
case 40:
tValues=keyDownEntries[itemID].split(":");
tNextID=tValues[1];

if (tNextID=="0")
{
return;
}
document.getElementById(tNextID).focus();
break;
}
}
}
</script>
<style>
.container
{
position:relative;
height:100%;
}
.selectcontainer
{
position:absolute;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:0px;
left:40%;
<% } else { %>
left:0px;
right:40%;
<% } %>
}
.previewcontainer
{
position:absolute;

<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:60%;
left:0px;
margin-right:5px;
<% } else { %>
left:60%;
right:0px;
margin-left:5px;
<% } %>
}
.selectcontainer,
.previewcontainer
{
top:0px;
bottom:0px;
height:100%;
}
.ms-crm-RV-MenuItem-Anchor
{
width:auto;
text-align:center;
}
.liFloat
{
width:131px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.ms-crm-div-dashboard-type
{
text-overflow:ellipsis;
color:#3b3b3b;
overflow: hidden;
white-space:nowrap;
}
.ms-crm-div-description-hidden
{
position: absolute;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border: 0;
}
</style>
</head>
<body onkeydown="if((new Sys.UI.DomEvent(event)).keyCode == 27){cancel();}">
<frm:dialogform id="crmForm" runat="server">
<div class="container">
<div class="selectcontainer">
<div style="overflow:auto;width:auto" class="ms-crm-RV-Menu">

<ul class="ms-crm-RV-Menu">
<li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="0">

<ul class="ms-crm-in-RV-Menu">
<li id="li1" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemIndex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_3Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Regular' runat='server' />" >
<A id="1"  tabindex="1" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);"  onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,0);" >
<span>
<span>
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L1.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Onetooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
<li id="li2" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_3Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_MFocused' runat='server' />">
<A id="2"  tabindex="2" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,1);" >
<span>
<span >
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L2.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_MFocused" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Secondtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
<li id="li3" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="2" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_4Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Overview' runat='server' /> " >
<A id="3"  tabindex="3" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#"  onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,2);">
<span>
<span >
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L3.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_4Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Overview" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Thirdtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
</ul>

</li>

<li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="1">

<ul class="ms-crm-in-RV-Menu">
<li id="li4" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_2Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Regular' runat='server' /> " >
<A id="4"  tabindex="4" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,3);" >
<span>
<span >
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L4.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_2Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Fourthtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
<li id="li6" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="1"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_3Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Overview' runat='server' />" >
<A id="5" tabindex="5" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,4);">
<span>
<span >
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L5.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Overview" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Fifthtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
<li id="li7" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="2"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_3Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Focused' runat='server' />" >
<A id="6" tabindex="6" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,5);"  >
<span><span >
<%if (isRTL) { %>

<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L6rtl.png">
<% } else { %>

<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L6.png">

<%} %>
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Focused" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Sixthtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
</ul>
</li>
<li class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest" itemindex="2">
<ul class="ms-crm-in-RV-Menu">
<li id="li8" class="ms-crm-RV-MenuItemL ms-crm-RV-MenuItem-Rest liFloat" itemindex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_4Col_Title' runat='server' /> <loc:Text Encoding='HtmlAttribute' ResourceId='DashboardLayout_Sub_Title_Regular' runat='server' /> " >
<A id="15"  tabindex="7" style="cursor:pointer;width:auto;padding:10px" class="ms-crm-RV-MenuItem-Anchor ms-crm-RV-MenuItem-Anchor-Rest" onfocus="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)"  onclick="SetSelected(Mscrm.Utilities.eventToDomEvent(event), this)" ondblclick="OK(Mscrm.Utilities.eventToDomEvent(event), this);" onmouseover="DisplayHover(this)" onmouseout="DisplayHoverOff(this)" href="#" onkeydown="CreateTemplate(Mscrm.Utilities.eventToDomEvent(event),this,6);" >
<span>
<span >
<IMG class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L19.png">
</span>
<br />
<center style="padding-top:5px">
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_4Col_Title" runat="server"/>
</div>
<div class="ms-crm-div-dashboard-type">
<loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/>
</div>
<div class="ms-crm-div-description-hidden">
<loc:Text ResourceId="DashboardLayout_Title_Seventhtooltip" runat="server"/>
</div>
</center>
</span>
</A>
</li>
</ul>
</li>
</ul>
</div>
</div>
<div class="previewcontainer">
<div style="overflow:auto" class="ms-crm-RV-Menu">
<ul class="ms-crm-in-RV-Menu" style="padding:10px">
<li style="FLOAT: none;display:block;" id="li11" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="preview" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L1_large.png" />
</div>
<div class="ms-crm-db-padding">
<br />
<span style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/></span><br /><br />
<span  style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Onetooltip" runat="server"/></span>
</div>
</li>

<li style="FLOAT: none;display:none;" id="li21" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="Img1" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L2_large.png" />
</div>
<div class="ms-crm-db-padding">
<br />
<span  style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_MFocused" runat="server"/></span><br /><br />
<span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Secondtooltip" runat="server"/></span>
</div>
</li>

<li style="FLOAT: none;display:none;" id="li31" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="Img2" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L3_large.png" />
</div>
<div class="ms-crm-db-padding">
<br />
<span  style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_4Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Overview" runat="server"/></span><br /><br />
<span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Thirdtooltip" runat="server"/></span>
</div>
</li>

<li style="FLOAT: none;display:none;" id="li41" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="Img3" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L4_large.png" />
</div>
<div class="ms-crm-db-padding">
<br />
<span  style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_2Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/></span><br /><br />
<span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Fourthtooltip" runat="server"/></span>
</div>
</li>

<li style="FLOAT: none;display:none;" id="li61" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="Img4" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L5_large.png" />
</div>
<div class="ms-crm-db-padding">
<span><br />
<span  style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Overview" runat="server"/></span><br /><br />
<span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Fifthtooltip" runat="server"/></span>
</div>
</li>

<li style="FLOAT: none;display:none;" id="li71" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<%if (isRTL) { %>

<img id="Img5" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" style="<%= Microsoft.Crm.Application.Utility.WebUtility.FlipImage("h") %>" alt="" src="/_imgs/dashboard/L6_large.png" />
<% } else { %>

<img id="Img6" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L6_large.png" />

<%} %>
</div>
<div class="ms-crm-db-padding">
<br />
<span  style="text-overflow:ellipse;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_3Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Focused" runat="server"/></span><br /><br />
<span class="ms-crm-RV-MenuItem-Title-Rest" style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Sixthtooltip" runat="server"/></span>
</div>
</li>
<li style="FLOAT: none;display:block;" id="li81" class="ms-crm-RV-view-item-MenuItemL ms-crm-RV-view-item-MenuItem-Rest" itemIndex="0" >
<div style="text-align:center">
<img id="preview" class="ms-crm-RV-MenuItem-IconL ms-crm-RV-MenuItem-Icon-Rest" alt="" src="/_imgs/dashboard/L19_large.png" />
</div>
<div class="ms-crm-db-padding">
<br />
<span style="text-overflow:ellipsis;font-weight:bold;font-size:12px"><loc:Text ResourceId="DashboardLayout_4Col_Title" runat="server"/><br /><loc:Text ResourceId="DashboardLayout_Sub_Title_Regular" runat="server"/></span><br /><br />
<span  style="text-overflow:ellipsis;color:#3b3b3b;"><loc:Text ResourceId="DashboardLayout_Title_Seventhtooltip" runat="server"/></span>
</div>
</li>

</ul>
</div>
</div>
</div>
</frm:dialogform>
</body>
</html>
