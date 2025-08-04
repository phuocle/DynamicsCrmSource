<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.ActivityPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var isActivityFocus = false;
var _activityLookup = null;
var _queueLookup = null;
var _chk_queue = null;
var _sendEmail = null;
var _iLastOwnerOption = 1;
var _rad_Myself = null;
var _rad_Record = null;
var _rad_user_queue = null;
var _selectedItem;
var _tblItems = null;

function ActivityControlFocus()
{
isActivityFocus = true;
}

function ActivityControlBlur()
{
isActivityFocus = false;
}

Sys.Application.add_load(function ()
{
_tblItems = $get('tblItems');
_rad_Myself = $get('rad_Myself');
_rad_Record = $get('rad_Record');
_rad_user_queue = $get('rad_user_queue');
_activityLookup = Mscrm.FormControlInputBehavior.GetBehavior('ActivityLookup');
_queueLookup = Mscrm.FormControlInputBehavior.GetBehavior('QueueLookup');
_chk_queue = $get('chk_queue');
_sendEmail = $get('SendEmail');
if (_tblItems.getElementsByTagName("li") != null) {

SelectItem(_tblItems.getElementsByTagName("li")[0]);
}
InitializePage();
});

function enable()
{
_activityLookup.set_disabled(!$get('rad_user_queue').checked);
_queueLookup.set_disabled(!_chk_queue.checked);
}

function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}


function InitializePage()
{
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
document.getElementById("buttonBack").onclick = moveBack;
var _prefix1;
var _prefix2;
if(WizardHasProperty("SelectedItem"))
{
if(isMailMergeOption(WizardGetProperty("MailMergeSelect")))
{
_prefix1 = 'type_mm_id_';
_prefix2 = 'mm_id_';
}
else
{
_prefix1 = 'type_id_';
_prefix2 = 'id_';
}

$get(_prefix1 + WizardGetProperty("SelectedItem")).checked = true;
SelectItem($get(_prefix2 + WizardGetProperty('SelectedItem')));
}

if(WizardHasProperty("OwnerOption"))
{
switch(WizardGetProperty("OwnerOption"))
{
case 0:
_activityLookup.set_disabled(false);
_rad_user_queue.checked = true;
break;
case 1:
_rad_Record.checked = true;
break;
case 2:
_rad_Myself.checked = true;
break;
}
}

if(WizardHasProperty("Activity"))
{
_activityLookup.AddItems(WizardGetProperty("Activity"));
}

if(WizardHasProperty('QueueLookup'))
{
_chk_queue.checked = true;
_queueLookup.AddItems(WizardGetProperty("Queue"));
}

if(WizardHasProperty('SendEmail'))
{
_sendEmail.checked = WizardGetProperty("SendEmail");
}
}




function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/MA/minicampaign/FormActivity.aspx");
<% if(Util.IsForOutlookClient()) { %>
if(isMailMergeOption(WizardGetProperty("MailMergeSelect")))
{
oUrl = Mscrm.CrmUri.create("/MA/minicampaign/MailMergeCampaign.aspx");
}
<% } %>
return new NextPageDefinition(oUrl);
}

function isMailMergeOption(item)
{
if (item && item.length >= 5)
return (item == "mm_id");
else
return false;
}

function On(e)
{
if (_selectedItem && e != _selectedItem) {
e.style.backgroundColor = "#c6dfff";
}
}

function Off(e)
{
if (_selectedItem && e != _selectedItem) {
e.style.backgroundColor = "";
}
}

function NameFocus()
{
_tblItems.focus();
}

function SelectItem(e)
{
window.setTimeout("NameFocus();", 10);

GetSrc(e);

if (e != _selectedItem) {

XUI.Html.DomUtils.GetFirstChild(e).checked = true;

e.style.backgroundColor = "#a7cdf0";

if (_selectedItem) _selectedItem.style.backgroundColor = "";
_selectedItem = e;



if (_onSelectFunc) {
_onSelectFunc(e);
}
}
}


function _onSelectFunc(oArg)
{
if (isMailMergeOption(oArg.id)) {


_iLastOwnerOption = (_rad_Myself.checked == true) ? 1 : _iLastOwnerOption;
_iLastOwnerOption = (_rad_Record.checked == true) ? 2 : _iLastOwnerOption;
_iLastOwnerOption = (_rad_user_queue.checked == true) ? 3 : _iLastOwnerOption;

_rad_Myself.checked = true;
_rad_Myself.disabled = true;
_rad_Record.checked = false;
_rad_Record.disabled = true;
_rad_user_queue.disabled = true;
_rad_user_queue.checked = false;

_sendEmail.disabled = true;
_sendEmail.checked = false;
}
else
{


if (_rad_Myself.disabled == true) {
_rad_Myself.checked = (_iLastOwnerOption == 1);
_rad_Myself.disabled = false;
_rad_Record.checked = (_iLastOwnerOption == 2);
_rad_Record.disabled = false;
_rad_user_queue.disabled = false;
_rad_user_queue.checked = (_iLastOwnerOption == 3);
}
var currItemIsEmail = (_selectedItem.getAttribute('item') == Email);
_sendEmail.disabled = !(currItemIsEmail);
_sendEmail.checked = currItemIsEmail;
}
}


function GetSrc(e)
{
if(e.tagName != "LI")
e = e.parentNode;
}

$addHandler(document, 'keydown', function(event)
{
if (isActivityFocus == true) {
try {
switch (event.keyCode) {
case KEY_UP:
if (XUI.Html.DomUtils.GetPrevSibling(_selectedItem).getAttribute("item") != undefined) {
SelectItem(XUI.Html.DomUtils.GetPrevSibling(_selectedItem));
}
break;

case KEY_DOWN:
if (XUI.Html.DomUtils.GetNextSibling(_selectedItem).getAttribute("item") != undefined) {
SelectItem(XUI.Html.DomUtils.GetNextSibling(_selectedItem));
}
break;
}
}
catch (e) {
}
}
});

function GetOwner()
{
var _owner = 0;
if (_rad_Myself.checked == true)
{
_owner = 2;
return _owner;
}
else if (_rad_Record.checked == true)
{
_owner = 1;
return _owner;
}
else if (_rad_user_queue.checked == true)
{
_owner = 0;
var dataValue = _activityLookup.get_dataValue();
WizardSetProperty("Owner_Int", dataValue[0].type);
WizardSetProperty("OwnerId_str", dataValue[0].id);
return _owner;
}
}

function moveBack()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
savePageData();
WizardNavigate(_WizardNavigateEnum.BACK);
}

function savePageData()
{
var _startindex;
var _endindex;
var oOwner = GetOwner();
if(isMailMergeOption(WizardGetProperty("MailMergeSelect")))
{
_startindex = 6;
_endindex = 10;
}
else
{
_startindex = 3;
_endindex = 7;
}
WizardSetProperty("SelectedItem", _selectedItem.id.substring(_startindex, _endindex));
WizardSetProperty("OwnerOption", oOwner);
WizardSetProperty("Activity", _activityLookup.Items(false, true, undefined, undefined, true));
if (_chk_queue.checked == true)
{
WizardSetProperty("QueueLookup", _queueLookup);
WizardSetProperty("Queue", _queueLookup.Items(false, true, undefined, undefined, true));
}
}

function moveNext()
{


if (!_selectedItem) {
alert(LOCID_MC_TYPE_MANDATORY);


return;
}

if ((!_rad_Myself.checked && !_rad_Record.checked && !_rad_user_queue.checked) ||
(_rad_user_queue.checked && IsNull(_activityLookup.get_dataValue())))
{
alert(LOCID_MC_OWNER_MANDATORY);


return;
}
if (_chk_queue.checked && IsNull(_queueLookup.get_dataValue()))
{
alert(LOCID_MC_QUEUE_MANDATORY);
return;
}
WizardSetProperty("InnerHTML", document.getElementById(_selectedItem.id).innerHTML);
WizardSetProperty("MailMergeSelect", _selectedItem.id.substring(0, 5));
savePageData();
WizardSetProperty("SendEmail", $get('SendEmail').checked);
WizardSetProperty("Owner_Myself", $get('id_owner_myself').innerHTML);
WizardSetProperty("Owner_Record", $get('id_owner_record').innerHTML);
WizardSetProperty("ActivityLookup", XUI.Html.DomUtils.GetPrevSibling($get('ActivityLookup').parentNode).children[0].innerHTML);
if (_chk_queue.checked == true)
{
WizardSetProperty("CheckQueue", _queueLookup.get_dataValue()[0].id);
}

detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr valign="top" height="40%">
<td class="MiniCampaign_td_ChooseActivity">
<table width="100%" cellpadding="0" cellspacing="4">
<tr valign="bottom">
<td>
<loc:text id="Text17" resourceid="MC_MSG_ActivityType" runat="server" />
</td>
</tr>
<tr class="main">
<td>
<table width="100%" border="0" bordercolor="green" cellspacing="0" cellpadding="0">
<tr>
<td style="padding-top: 6px; height: 130px">
<div class="ms-crm-Dialog-List">
<ul onfocus="ActivityControlFocus();" onblur="ActivityControlBlur();" id="tblItems"
class="ms-crm-Dialog-List" style="border: 1px solid #CCCCCC;" tabindex="3">
<%
RenderListItem( Util.PhoneCall, Privileges.CreateActivity,"ms-crm-Dialog-ListItemRadio" );
RenderListItem( Util.Appointment, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
RenderListItem( Util.Letter, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
RenderMailMergeListItem( Util.Letter, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
RenderListItem( Util.Fax, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
RenderMailMergeListItem( Util.Fax, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
RenderListItem( Util.Email, Privileges.CreateActivity, "ms-crm-Dialog-ListItemRadio");
RenderMailMergeListItem( Util.Email, Privileges.CreateActivity , "ms-crm-Dialog-ListItemRadio");
%>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr height="15px">
<td>
&nbsp;
</td>
</tr>
<tr height="60%">
<td valign="top" class="MiniCampaign_td_ActivitiesOwn">
<table cellpadding="0" cellspacing="0" border="0" bordercolor="red" width="100%">
<tr valign="top">
<td>
<table height="100%" cellpadding="0" cellspacing="0" width="100%">
<tr valign="top">
<td>
<span class="ms-crm-Emphasis-Strong" style="color: #333333;">
<loc:text id="Text18" resourceid="MC_MSG_ActivitiesOwn" runat="server" />
</span>
</td>
</tr>
<tr valign="top">
<td style="padding-top: 4px">
<loc:text id="Text19" resourceid="MC_MSG_AssignActivitiesTo" runat="server" />
</td>
</tr>
<tr>
<td>
<table width="100%" height="100%" border="0" style="padding-top: 4px" cellspacing="0"
cellpadding="0">
<tr>
<td class="MiniCampaign_td_OwnerGroup" valign="top">
<input class="ms-crm-RadioButton" type="radio" id="rad_Myself" name="radOwnerGroup"
editable checked onclick="enable();">
</td>
<td id="id_owner_myself">
<label for="rad_Myself">
<loc:text id="Text20" resourceid="MC_MSG_Owner_Myself" runat="server" />
</label>
</td>
</tr>
<tr>
<td class="MiniCampaign_td_OwnerGroup" valign="top">
<input class="ms-crm-RadioButton" type="radio" id="rad_Record" name="radOwnerGroup"
editable onclick="enable();">
</td>
<td id="id_owner_record">
<label for="rad_Record">
<loc:text id="Text21" resourceid="MC_MSG_Owner_Leaf" runat="server" />
</label>
</td>
</tr>
<tr>
<td class="MiniCampaign_td_OwnerGroup" valign="top">
<input class="ms-crm-RadioButton" type="radio" id="rad_user_queue" name="radOwnerGroup"
editable onclick="enable();">
</td>
<td id="id_owner_user">
<label class="ms-crm-MiniCampaign-LabelAbove" for="rad_user_queue">
<loc:text id="Text22" resourceid="Dialog_AssignQueue_Assign_Label" runat="server" />
</label>
<sdk:lookupcontrol id="ActivityLookup" runat="server" />
</td>
</tr>
<tr>
<td>
<cui:CheckBox id="chk_queue" onclick="enable();" runat="server" />
</td>
<td id="TdQueue">
<label for="chk_queue">
<loc:text resourceid="Dialog_AddToQueue_Label" runat="server" />
</label>
<sdk:lookupcontrol id="QueueLookup" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr height="35px">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<span class="ms-crm-Emphasis-Strong" style="color: #333333;">
<loc:text id="Text23" resourceid="MC_MSG_Email_Close" runat="server" />
</span>
</td>
</tr>
<tr valign="top">
<td>
<input class="checkbox" type="checkbox" id="SendEmail" runat="server" disabled />
<label for="SendEmail">
<loc:text id="Text24" resourceid="MC_MSG_Email_check" runat="server" />
</label>
</td>
</tr>
<tr height="10%">
<td>
&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>