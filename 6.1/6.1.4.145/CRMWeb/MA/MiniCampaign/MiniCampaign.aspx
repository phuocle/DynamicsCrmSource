<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.MiniCampaignPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
<title>
<loc:text id="Text1" resourceid="Title_Create_MiniCampaign_Wizard" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<% if(Util.IsForOutlookClient()) { %>
<object id="_oMailMerge" classid='clsid:E19EA63A-8B6F-4AA3-9013-3DE5EBAFD7BF' style='display: none'>
</object>
<% } %>

<style type="text/css">
.divHeader
{
border-bottom: 1px solid #CCCCCC;
height:40px;
left:0px;
right:0px;
position:absolute;
}
.divContent
{
padding-bottom: 10px;
padding-top: 5px;
top:40px;
bottom:5px;
left:0px;
right:0px;
position:absolute;
vertical-align:top;
}
.ms-crm-RefreshDialog-Main
{
top:50px;
bottom:40px;
}
.ms-crm-RefreshDialog-Warning
{
bottom:5px;
}

</style>

<script language="javascript" type="text/javascript">












var _iObjectTypeCode;
var _iMCOption;
var _iMCOptionTitle;
var _iTotalRecords;
var _iSelectedRecords;
var _aIds;
var _oTemplate;
var _oGridXml;
var _lastTemplateInnerHTML = "";
var _lastSub = "";
var _lastDesc = "";



var _totalPages = 5;
var _currentPageIndex = 1;
var btn_id_Next;
var btn_id_Back;
var btn_id_Cancel;


var _welcomePageIndex = 1;
var _miniCampaignPageIndex = 2;
var _typeOwnerPageIndex = 3;
var _activityPageIndex = 4;
var _summaryPageIndex = 5;


var mc_MiniCampaignFor_int;
var mc_EmailTemplateId_str;
var mc_TargetOption_int;
var mc_TargetIds_str;
var mc_FetchXml_str;
var mc_MiniCampaignType_str;
var mc_LeafActivitiesOwner_int;
var mc_ActivityXml_str;
var mc_MiniCampaignName_str;
var mc_MailMerge_int;
var mc_MailMergeDocType_int;
var mc_Owner_int = SystemUser;
var mc_OwnerId_str="";
var mc_SendEmail_bool;
var mc_QueueId="";

var _done = false;
var _iLastOwnerOption = 1;

var _currentSelectedItem = -1;
var _currentSelectedItemId;

var _sendEmail;
var _templateCheckBox;
var _chk_queue;
var _selectedItem;
var _id;
var _selectedText;

var _activityTypes = new Array( <% =Util.PhoneCall %> , <% =Util.Letter  %> , <% =Util.Fax %> , <% =Util.Email %> , <% =Util.Appointment %> );

var _activityLookup = null;
var _queueLookup = null;
var _activityFormFrame = null;
var isActivityFocus = false;


var _emailIsFromCreator = null;

function isMailMergeOption(item)
{
if(item && item.id && item.id.length >= 5)
return ( item.id.substring(0, 5) == "mm_id" );
else
return false;
}


Sys.Application.add_load(function(){
attachWindowOnBeforeUnload(btnCancel);

_activityLookup = Mscrm.FormControlInputBehavior.GetBehavior('ActivityLookup');
_queueLookup = Mscrm.FormControlInputBehavior.GetBehavior('QueueLookup');
_sendEmail = $get('SendEmail');
_templateCheckBox = $get('templateCheckBox');
_chk_queue = $get('chk_queue');

<% if(Util.IsForOutlookClient()) { %>
try
{
_oMailMerge.Initialize();
}
catch(e)
{
}
<% } %>


mcInit.style.display = "none";
mcInit.style.display = "none";


window.focus();


mcPageBody1.style.display = "";
mcPageBody1.style.display = "";


btn_id_Next = $get('butNext');
btn_id_Back = $get('butBack');
btn_id_Cancel = $get('butCancel');
btn_id_Next.disabled = false;
btn_id_Back.disabled = true;
btn_id_Cancel.disabled = false;


var oArgs = getDialogArguments();
with (oArgs)
{
_iObjectTypeCode = ObjectTypeCode;
_iMCOption = MCOption;
_iMCOptionTitle = MCOptionTitle;
_iTotalRecords = TotalRecords;
_iSelectedRecords = SelectedRecords;
_aIds = Ids;
_oGridXml = GridXml;
_oMCCreatedFrom = CreatedFromOtc;
}


btn_id_Back.disabled = true;

<% if(Util.IsForOutlookClient()) { %>

var queryString = Mscrm.CrmUri.create("/MA/MiniCampaign/iframes/mailmergeForm.aspx?objectTypeCode=" + CrmEncodeDecode.CrmUrlEncode(_iObjectTypeCode)).toString();
if (_iObjectTypeCode == List && _aIds != null && _aIds != "" && _aIds.length > 0)
{
queryString += "&objectId=" + CrmEncodeDecode.CrmUrlEncode(_aIds[0]);
}

$get('postToIframe').target = "mailMergeFormFrame";
$get('postToIframe').action = queryString;
$get('postToIframe').submit();

<% } %>
});

function ActivityControlFocus()
{
isActivityFocus = true;
}

function ActivityControlBlur()
{
isActivityFocus = false;
}

function On(e)
{
if(_selectedItem && e != _selectedItem)
{
e.style.backgroundColor = "#c6dfff";
}
}

function Off(e)
{
if(_selectedItem && e != _selectedItem)
{
e.style.backgroundColor = "";
}
}

function SelectItem(e)
{
if(_currentPageIndex == _typeOwnerPageIndex)
{
tblItems.focus();
}

GetSrc(e);

if( e != _selectedItem )
{

XUI.Html.DomUtils.GetFirstChild(e).checked = true;

e.style.backgroundColor = "#a7cdf0";

if( _selectedItem ) _selectedItem.style.backgroundColor = "";
_selectedItem = e;
_selectedText = _selectedItem.getAttribute("item")

if (_onSelectFunc)
{
_onSelectFunc(e);
}
}
}


function closeWizard(bCompleted)
{

this.document.body.innerHTML = "<table height='100%' width='100%' style='cursor:wait'><tr><td valign='middle' align='center'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + LOCID_MC_PROGRESS_CLOSE + "</td></tr></table>";
window.returnValue = bCompleted;
Mscrm.Utilities.setReturnValue(bCompleted);
detachWindowOnBeforeUnload(btnCancel);
closeWindow();
}


function btnCancel(oEvent)
{

overrideClose();


var answer = confirm(LOCID_MC_ALERT_CLOSE);


if(answer == true)
{

btn_id_Next.disabled = true;
btn_id_Back.disabled = true;
btn_id_Cancel.disabled = true;


closeWizard(false);
}
return answer;
}


function cancel()
{
btnCancel();
}


function _onSelectFunc(oArg)
{
if( isMailMergeOption(oArg))
{


_iLastOwnerOption = (rad_Myself.checked == true)? 1 : _iLastOwnerOption;
_iLastOwnerOption = (rad_Record.checked == true)? 2 : _iLastOwnerOption;
_iLastOwnerOption = (rad_user_queue.checked == true)? 3 : _iLastOwnerOption;

rad_Myself.checked = true;
rad_Myself.disabled = true;
rad_Record.checked = false;
rad_Record.disabled = true;
rad_user_queue.disabled = true;
rad_user_queue.checked = false;

_sendEmail.disabled = true;
_sendEmail.checked = false;
}
else
{


if(rad_Myself.disabled == true)
{
rad_Myself.checked = (_iLastOwnerOption == 1);
rad_Myself.disabled = false;
rad_Record.checked = (_iLastOwnerOption == 2);
rad_Record.disabled = false;
rad_user_queue.disabled = false;
rad_user_queue.checked = (_iLastOwnerOption == 3);
}
$get('SendEmail').disabled = !(_selectedText == <% =Util.Email %>);
$get('SendEmail').checked = (_selectedText == <% =Util.Email %>);
}
}


function overrideClose()
{
if($get('activityFormFrame') && !IsNull($get('activityFormFrame').contentWindow.$find) && $get('activityFormFrame').contentWindow.$find("crmForm"))
{
$get('activityFormFrame').contentWindow.$find("crmForm").set_saving(true);
}
}


function finish()
{

btn_id_Next.disabled = true;


overrideClose();

<% if(Util.IsForOutlookClient()) { %>

if(_currentPageIndex == _activityPageIndex && isMailMergeOption(_selectedItem))
{

btn_id_Back.disabled = true;
btn_id_Cancel.disabled = true;


GetWizardData();

var objectType = mc_MiniCampaignFor_int;
var objectId = "";
if(mc_MiniCampaignFor_int == List)
{
objectId = IsNull(_aIds[0]) ? "" : _aIds[0];
}
var lookupObjectType = mailMergeFormFrame.getLookupType();
var languageId = mailMergeFormFrame.getLanguage();
var templateId = mailMergeFormFrame.getTemplateId();
var currentPage = false;
var ids = IsNull(mc_TargetIds_str)? "" : mc_TargetIds_str;
var gridXml = IsNull(mc_FetchXml_str) ? "" : mc_FetchXml_str;
var tempLayoutXml = mailMergeFormFrame.getLayoutXml(false);
var layoutXml = IsNull(tempLayoutXml) ? "" : tempLayoutXml;
var mergeType = mc_MailMergeDocType_int;
var quickCampaignName = IsNull(mc_MiniCampaignName_str)? "" : mc_MiniCampaignName_str;

try
{

var runMailMergeInCurrentProcess;
try
{
runMailMergeInCurrentProcess = getOutlookHostedWindow().DoMailMerge(objectType, objectId, lookupObjectType, languageId, templateId, currentPage, ids, gridXml, layoutXml, mergeType, quickCampaignName);
}
catch (e)
{


runMailMergeInCurrentProcess = true;
}

if(runMailMergeInCurrentProcess)
{

_oMailMerge.DoMailMerge(objectType, objectId, lookupObjectType, languageId, templateId, currentPage, ids, gridXml, layoutXml, mergeType, quickCampaignName);
}
}
catch(e)
{
alert( <% =Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentResourceManager.GetString("MailMerge_ErrorInAddin")) %> );
closeWindow();
}

}
<% } %>


closeWizard(true);
}



function updateSummary()
{
this.focus();

btn_id_Next.innerHTML = LOCID_MC_BTN_CREATE;


var ele = document.getElementById("td_MC_Name");
XUI.Html.SetText(td_MC_Name, Trim(MC_Name.value));
td_MC_Name.title = XUI.Html.GetText(td_MC_Name);

ele = document.getElementById("td_MC_Type");
ele.innerHTML = document.getElementById("id_" + _id).innerHTML;


ele = document.getElementById("td_MC_Scope");
ele.innerHTML = _iMCOptionTitle;

switch(_iMCOption)
{
case 1:
ele.innerHTML += " ( " + _iSelectedRecords + " )";
break;

case 2:
ele.innerHTML += " ( " + _iTotalRecords + " )";
break;
}


ele = document.getElementById("td_MC_Owner");
if(rad_Myself.checked == true)
{
ele.innerHTML = document.getElementById("id_owner_myself").innerHTML;
}
else if(rad_Record.checked == true)
{
ele.innerHTML = document.getElementById("id_owner_record").innerHTML;
}
else if(rad_user_queue.checked == true)
{
ele.innerHTML = XUI.Html.DomUtils.GetPrevSibling($get('ActivityLookup').parentNode).children[0].innerHTML;
}
btn_id_Next.focus();
}


function GetWizardData()
{

mc_MiniCampaignFor_int = _iObjectTypeCode;


mc_TargetOption_int = _iMCOption;


mc_TargetIds_str = "";
if(_aIds != null && _aIds != "" && _aIds.length > 0)
{
mc_TargetIds_str += _aIds[0];
for(var i=1; i<_aIds.length; i++)
{
mc_TargetIds_str += "," + _aIds[i];
}
}


mc_FetchXml_str = _oGridXml;


mc_MiniCampaignType_str = _id;


if(isMailMergeOption(_selectedItem))
{
mc_MailMerge_int = 1;
}
else
{
mc_MailMerge_int = 0;
}


mc_LeafActivitiesOwner_int = 0;

if(rad_Myself.checked == true)
{
mc_LeafActivitiesOwner_int = 2;
}
else if(rad_Record.checked == true)
{
mc_LeafActivitiesOwner_int = 1;
}
else if(rad_user_queue.checked == true)
{
mc_LeafActivitiesOwner_int = 0;
var dataValue = _activityLookup.get_dataValue();
mc_Owner_int = dataValue[0].type;
mc_OwnerId_str = dataValue[0].id;
}
if(_chk_queue.checked == true)
{
mc_QueueId= _queueLookup.get_dataValue()[0].id;
}
mc_SendEmail_bool=(_sendEmail.checked);


mc_ActivityXml_str = "";




if(!isMailMergeOption(_selectedItem))
{
_activityFormFrame.$find("crmForm").BuildXml(false, false);
mc_ActivityXml_str = _activityFormFrame.document.getElementById('crmFormSubmit').crmFormSubmitXml.value;
}


mc_MiniCampaignName_str = Trim(MC_Name.value);


mc_MailMergeDocType_int = 0;
if(mc_MiniCampaignType_str == Letter)
{
mc_MailMergeDocType_int = 0;
}
else if(mc_MiniCampaignType_str == Email)
{
mc_MailMergeDocType_int = 4;
}
else if(mc_MiniCampaignType_str == Fax)
{
mc_MailMergeDocType_int = 5;
}
}


function btnNext(domEvent)
{

if(_done == true)
{

finish();
return;
}


if(_currentPageIndex == _totalPages)
{

btn_id_Back.disabled = true;
btn_id_Cancel.disabled = true;
btn_id_Next.disabled = true;


var oldInnerHTML = mcPageBody5.innerHTML;
mcPageBody5.innerHTML = "<table height='100%' width='100%' style='cursor:wait'><tr><td valign='middle' align='center'><img alt='' src='/_imgs/AdvFind/progress.gif'/><br>" + LOCID_MC_PROGRESS_CREATE + "</td></tr></table>";


GetWizardData();


if(mc_MiniCampaignType_str != Email)
{
mc_EmailTemplateId_str="";
}

try
{

var command = new RemoteCommand("MarketingAutomation", "CreateMiniCampaign");


command.SetParameter("mc_MiniCampaignFor_int", mc_MiniCampaignFor_int);
command.SetParameter("mc_EmailTemplateId_str", mc_EmailTemplateId_str);
command.SetParameter("mc_TargetOption_int", mc_TargetOption_int);
command.SetParameter("mc_TargetIds_str", mc_TargetIds_str);
command.SetParameter("mc_FetchXml_str", mc_FetchXml_str);
command.SetParameter("mc_MiniCampaignType_str", mc_MiniCampaignType_str);
command.SetParameter("mc_LeafActivitiesOwner_int", mc_LeafActivitiesOwner_int);
command.SetParameter("mc_ActivityXml_str", mc_ActivityXml_str);
command.SetParameter("mc_MiniCampaignName_str", mc_MiniCampaignName_str);
command.SetParameter("mc_PostWorkflowEvent_bool", true);
command.SetParameter("ownerType", mc_Owner_int);
command.SetParameter("ownerIdUser", mc_OwnerId_str);
command.SetParameter("sendEmail", mc_SendEmail_bool);
command.SetParameter("mc_QueueId", mc_QueueId);

var result = command.Execute();
}
catch(e)
{
}


_done = true;


finish();

return;
}
else
{

btn_id_Back.disabled = false;


switch(_currentPageIndex)
{

case _typeOwnerPageIndex :


if(isMailMergeOption(_selectedItem))
{
XUI.Html.SetText(mcHeader, LOCID_MC_MSG_DETAILS_MM);
}
else
{
XUI.Html.SetText(mcHeader, LOCID_MC_MSG_DETAILS);
}


if(!_selectedItem)
{
alert(LOCID_MC_TYPE_MANDATORY);


return;
}

if((!rad_Myself.checked && !rad_Record.checked && !rad_user_queue.checked)||
(rad_user_queue.checked && IsNull(_activityLookup.get_dataValue())))
{
alert(LOCID_MC_OWNER_MANDATORY);


return;
}
if(_chk_queue.checked && IsNull(_queueLookup.get_dataValue()))
{
alert(LOCID_MC_QUEUE_MANDATORY);
return;
}


if(_selectedText == <% =Util.Email %> && !(IsNull(_activityFormFrame) || _activityFormFrame.document.readyState != "complete" || IsNull(_activityFormFrame.Mscrm)))
{
initializeEmailFromField();
}

break;


case _activityPageIndex :

var isValid = true;
if(isMailMergeOption(_selectedItem))
{
if (mailMergeFormFrame.validateInputs())
{

_done = true;
finish();
return;
}
else
{

return;
}
}
else
{

if (IsNull(_activityFormFrame) || _activityFormFrame.document.readyState != "complete" || IsNull(_activityFormFrame.Mscrm))
{
domEvent.preventDefault();
return;
}


if(_selectedText == <% =Util.Email %>)
{


if(_templateCheckBox.checked)
{
if(XUI.Html.GetText(templateName) == "")
{
alert(LOCID_MC_TEMPLATE_MANDATORY);
return;
}
isValid = _activityFormFrame.Xrm.Page.data.getIsValid();
}
isValid = _activityFormFrame.$find("crmForm").IsValid();
}
else if(!isMailMergeOption(_selectedItem))
{
if(_selectedText == <% =Util.PhoneCall %>)
{
_activityFormFrame.$find("subject").handleDataValueChange();
}
isValid = _activityFormFrame.Xrm.Page.data.getIsValid();
}
}


if(isValid == false)
{

return;
}

break;


case _miniCampaignPageIndex :

if(Trim(MC_Name.value) == "")
{
alert(LOCID_MC_NAME_MANDATORY);
MC_Name.focus();
return;
}

break;
}


_currentPageIndex++;
}


enableDisplayForPage(_currentPageIndex);
}

function enable()
{
_activityLookup.set_disabled(!rad_user_queue.checked);
_queueLookup.set_disabled(!_chk_queue.checked);
}


function btnBack()
{

btn_id_Next.innerHTML = LOCID_MC_BUTTON_NEXT;
_done = false;


if(_currentPageIndex == _welcomePageIndex)
{

return;
}
else
{

_currentPageIndex--;
}


enableDisplayForPage(_currentPageIndex);
}


function initializeEmailFromField()
{
if (null == _emailIsFromCreator)
{
_emailIsFromCreator = _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('from').get_dataValue();
}
var defaultFrom = null;
if (rad_Myself.checked)
{
defaultFrom = _emailIsFromCreator;
}
else if (rad_user_queue.checked)
{
defaultFrom = _activityLookup.get_dataValue();
}
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('from').set_dataValue(defaultFrom);
}

function onActivityFormLoad()
{

overrideClose();
toggleProgressIndicator(false);
_activityFormFrame = $get('activityFormFrame').contentWindow;
if(!IsNull(_activityFormFrame.$get) && !IsNull(_activityFormFrame.$get('subject')))
{
var subjectField = _activityFormFrame.$get('subject');


if(!IsNull(subjectField))
{

window.setTimeout(function (){try{subjectField.focus();}catch(e){}},10);
}
}


_activityFormFrame.isInlined = true;

_emailIsFromCreator = null;


if(_selectedText == <% =Util.Email %>)
{
initializeEmailFromField();
}
}

function toggleProgressIndicator(bShowProgress)
{
progressIndicator.style.display = (bShowProgress) ? "block" : "none";
progressInner.style.cursor = (bShowProgress) ? "wait" : "default";
$get('activityFormFrame').style.display = (bShowProgress) ? "none" : "";
}


function enableDisplayForPage(pageIndex)
{

if(pageIndex == _welcomePageIndex)
{
btn_id_Back.disabled = true;
}
else
{
btn_id_Back.disabled = false;
}


var pageHeader = "";
var pageBody = "";



for(var i=1; i<=_totalPages; i++)
{
pageHeader = $get("mcPageHeader" + i);
pageBody = $get("mcPageBody" + i);

pageHeader.style.display = "none";
pageBody.style.display = "none";
}

pageHeader = $get("mcPageHeader" + pageIndex);
pageBody = $get("mcPageBody" + pageIndex);

pageHeader.style.display = "";
pageBody.style.display = "";


if(pageIndex == _activityPageIndex)
{
if(_currentSelectedItem == -1 || _currentSelectedItem != _selectedItem.getAttribute("item") || _currentSelectedItemId != _selectedItem.getAttribute("id"))
{

activityHeader = $get("ActivityHeaderLabel");
activityHeader.innerHTML = LOCID_MC_ACTIVITYHEADER;

var activityIframe = "";
var _startindex;
var _endindex;


activityIframe = $get("mcPageBody3_activity");
activityIframe.style.display = "none";


activityIframe = $get("mcPageBody3_MailMerge");
activityIframe.style.display = "none";

containerIframe = $get("iframeContainer");

if(isMailMergeOption(_selectedItem))
{
activityHeader.innerHTML = LOCID_MC_MM_HEADER;


activityIframe = $get("mcPageBody3_MailMerge");
activityIframe.style.display = "";
activityIframe.style.top = "29px";
containerIframe.style.top = "29px";


btn_id_Next.innerHTML = LOCID_MC_BTN_LAUNCHWORD;
templateTable.style.display = "none";

_startindex = 6;
_endindex = 10;
_id = _selectedItem.id.substring(_startindex, _endindex);
}
else
{
_startindex = 3;
_endindex = 7;
_id = _selectedItem.id.substring(_startindex, _endindex);
var queryString = Mscrm.CrmUri.create("/MA/MiniCampaign/iframes/activityForm.aspx?objectTypeCode=" + CrmEncodeDecode.CrmUrlEncode(_id)).toString();

toggleProgressIndicator(true);


activityIframe = $get("mcPageBody3_activity");
activityIframe.style.display = "";

$get('postToIframe').target = "activityFormFrame";
$get('postToIframe').action = queryString;
$get('postToIframe').submit();

_currentSelectedItem =  _selectedItem.getAttribute("item");
_currentSelectedItemId =  _selectedItem.getAttribute("id");

if(_selectedText == <% =Util.Email %>)
{
templateTable.style.display = "";
activityIframe.style.top = "69px";
containerIframe.style.top = "69px";
}
else
{
templateTable.style.display = "none";
activityIframe.style.top = "29px";
containerIframe.style.top = "29px";
}
}
}
}

if(pageIndex == _miniCampaignPageIndex)
{
MC_Name.focus();
}


if(pageIndex == _summaryPageIndex)
{
updateSummary();
}

if(_currentPageIndex == _typeOwnerPageIndex && !isActivityFocus)
{
if (tblItems.getElementsByTagName("li") != null)
{

SelectItem(tblItems.getElementsByTagName("li")[0]);
}
}
}

function selectEmailTemplate()
{
if(_templateCheckBox.checked)
{
var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=false" + "&objectTypeCode=" +_oMCCreatedFrom+ "&targetType=4406" );
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 600, 380, null);
crmDialog.setCallbackInfo("performActionAfterBulkEmail", this, null);
crmDialog.show();
}
}

function performActionAfterBulkEmail(sResponse)
{
if (sResponse != null)
{
templateName.innerHTML = sResponse.innerHTML + CrmEncodeDecode.CrmHtmlEncode(sResponse.tmplTitle);
_lastTemplateInnerHTML = templateName.innerHTML;
mc_EmailTemplateId_str = sResponse.tmplId;
}
}

function enableTemplate(domEvent)
{

if (IsNull(_activityFormFrame) || _activityFormFrame.document.readyState != "complete" || IsNull(_activityFormFrame.Mscrm))
{
domEvent.preventDefault();
return;
}
if (_templateCheckBox.checked)
{
selectTemplate.disabled= false;
useTemplateLblDiv.disabled = false;
templateNameDiv.disabled = false;
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_disabled(true);
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').useTemplate(true);
templateName.innerHTML = _lastTemplateInnerHTML;
_lastSub = _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').get_value();
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_dataValue("");
_lastDesc = _activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').get_dataValue();
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').set_dataValue("");
}
else
{
selectTemplate.disabled= true;
useTemplateLblDiv.disabled = true;
templateNameDiv.disabled = true;
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_disabled(false);
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').useTemplate(false);
templateName.innerHTML = "";
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('subject').set_dataValue(_lastSub);
_activityFormFrame.Mscrm.FormControlInputBehavior.GetBehavior('description').set_dataValue(_lastDesc);

mc_EmailTemplateId_str = "";
_lastTemplateInnerHTML = "";
}
}
function openTemplate()
{
if (XUI.Html.GetText(templateName) != "")
{
var oUrl = Mscrm.CrmUri.create("/tools/emailtemplateeditor/emailtemplateeditor.aspx?id=" + mc_EmailTemplateId_str);
openStdDlg(oUrl, null, 800, 600);
}
}

</script>
</head>
<body scroll="no">
<form method='post' action='' target='' id='postToIframe'></form>
<frm:DialogForm id="crmForm" runat="server">
<div style="width:100%;height:100%;position:absolute">
<div class="divHeader">
<table cellpadding="0" cellspacing="5" class="ms-crm-MiniCampaign-Header" style="table-layout: fixed;width:100%;height:100%">
<tr style="vertical-align:top;">
<td width="100%" class="MiniCampaign_td_PageHeader1">
<div id="mcPageHeader1" style="display: inline">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td width="100%" >
<loc:text id="Text2" resourceid="MC_MSG_Header_Welcome" runat="server" />
</td>
</tr>
</table>
</div>
<div id="mcPageHeader2" style="display: none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td width="100%">
<loc:text id="Text3" resourceid="MC_MSG_Header_SpecifyName" runat="server" />
</td>
</tr>
</table>
</div>
<div id="mcPageHeader3" style="display: none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td width="100%">
<loc:text id="Text4" resourceid="MC_MSG_Header_ActivityAndAssignment" runat="server" />
</td>
</tr>
</table>
</div>
<div id="mcPageHeader4" style="display: none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td width="100%">
<label id="ActivityHeaderLabel" />

</td>
</tr>
</table>
</div>
<div id="mcPageHeader5" style="display: none">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td width="100%">
<loc:text id="Text5" resourceid="MC_MSG_Header_Complete" runat="server" />
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</div>
<div class="divContent">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<div id="mcInit">
<table height='100%' width='100%' cellspacing="0" cellpadding="0" style='cursor: wait'>
<tr>
<td valign='middle' align='center'>
<img alt='' src='/_imgs/AdvFind/progress.gif' />
<br>
<loc:text id="Text6" resourceid="MC_MSG_Progress_Init" runat="server" />
</td>
</tr>
</table>
</div>
<div id="mcPageBody1" style="display: none">
<table width="100%" cellpadding="0" cellspacing="0">
<tr valign="top">
<td class="MiniCampaign_td_PageBody1">
<table width="100%" cellpadding="0" cellspacing="0">
<tr valign="top">
<td>
<loc:text id="Text7" resourceid="MC_MSG_WizardPurpose" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<loc:text id="Text8" resourceid="MC_MSG_WizardUsage" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<span style="color: #333333;">
<loc:text id="Text9" resourceid="MC_MSG_WizardSteps" runat="server" />
</span>
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<ul>
<li>
<loc:text id="Text10" resourceid="MC_MSG_WizardSteps_ChooseActivity" runat="server" />
<li>
<loc:text id="Text11" resourceid="MC_MSG_WizardSteps_AssignActivity" runat="server" />
<li>
<loc:text id="Text12" resourceid="MC_MSG_WizardSteps_SupplyContent" runat="server" />
</ul>
</td>
</tr>
<tr valign="top">
<td>
<loc:text id="Text13" resourceid="MC_MSG_WizardSteps_Continue" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id="mcPageBody2" style="display: none;">
<table height="100%" width="100%" border="0" bordercolor="red" cellpadding="0" cellspacing="0">
<tr valign="top">
<td class="MiniCampaign_td_PageBody2">
<table width="100%" cellpadding="0" cellspacing="0">
<tr valign="top">
<td>
<loc:text id="Text14" resourceid="MC_MSG_Response" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<label for="MC_Name">
<loc:text id="Text15" resourceid="MC_MSG_EnterTheName" runat="server" />
</label>
</td>
</tr>
<tr valign="top">
<td class="MiniCampaign_td_MCNameBody1">
<input class="text" type="text" size="83" id="MC_Name" maxlength="200" name="minicampname">
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id="mcPageBody3" style="display: none;">
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
<ul onfocus="ActivityControlFocus();" id="tblItems"
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
<table width="100%" height="100%" border="0" style="padding-top: 4px" cellspacing="0" cellpadding="0">
<colgroup>


<col width="26px">
<col />
</colgroup>
<tr>
<td class="MiniCampaign_td_OwnerGroup" valign="middle">
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
<td class="MiniCampaign_td_OwnerGroup" valign="middle">
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
<td align="left" valign="top">
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
<td align="right" valign="top">
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
<tr style="height:35px;">
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
</div>
<div id="mcPageBody4" style="display: none; height:100%;">
<div style="height: 100%; position:relative;">
<div id="mcHeader" style="height:28px;">
<loc:text id="Text25" resourceid="MC_MSG_Details" runat="server" />
</div>
<div id="templateTable" style="display:none" >
<table style="width:100%;height:40px" cellspacing="0" cellpadding="0">
<colgroup>
<col />
<col width="auto" />
<col />
<col width="50%" />
</colgroup>
<tr height="20" style="padding: 10px 10px 4px 10px">
<td>
<cui:CheckBox tabindex="0" id="templateCheckBox" name="chkEnableTemplate" onclick="enableTemplate(new Sys.UI.DomEvent(event))" runat="server"/>
</td>
<td style="padding-left: 0px; padding-right: 0px;">
<div id="useTemplateLblDiv" style="padding: 0px 0px 0px 0px" disabled="true">
<nobr>
<label for="templateCheckBox" width="100%"><loc:Text ID="useTemplateLbl" ResourceId="MA_UseTemplate" runat="server" /></label>
</nobr>
</div>
</td>
<td>
<table style="table-layout: auto;">
<tr id="templateSelection">
<td>
<table id="templateLookupTable" class="ms-crm-Lookup" cellpadding="0" cellspacing="0"
style="table-layout: fixed;">
<tr>
<td>
<div id="templateNameDiv" ime-mode="auto" class="ms-crm-Lookup" disabled="true" onkeypress="if(event.keyCode == 32) openTemplate()" style="min-width:180px" >
<ul style="float: left">
<li style="display: inline"><span id="templateName" contenteditable="false" class="ms-crm-Lookup-Item"
onclick="openTemplate()"></span></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
<td>
<div id="temp1" ime-mode="auto" tabindex="2" onkeypress="if(event.keyCode == 32) selectEmailTemplate()">
<a id="selectTemplate" href="#" onclick="selectEmailTemplate()" disabled="true">
<img id="insertTemplateImg" src="/_imgs/htmlbar/cmd-insertField.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_BulkEmail_Template_SubTitle' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Dialog_BulkEmail_Template_SubTitle' runat='server'/>" /></a>
</div>
</td>
</tr>
</table>
</td>
<td>
</td>
</tr>
</table>
</div>
<div id="iframeContainer" style="width:100%; top:29px; bottom:0px; position:absolute;">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<div id="mcPageBody3_activity" style="display: none; height: 100%;">
<div id="progressIndicator" style="height: 100%; width: 100%; background-color: #ffffff;">
<table id="progressInner" height="100%" width="100%">
<col />
<tr>
<td valign="middle" align="center">
<img alt="" src="/_imgs/AdvFind/progress.gif" /><br />
<loc:text resourceid="PageLoadingMessage" runat="server" />
</td>
</tr>
</table>
</div>
<iframe name="activityFormFrame" id="activityFormFrame" onload="onActivityFormLoad();"
width="100%" height="100%" scrolling="auto" src='/_static/blank.htm' frameborder="0">
</iframe>
</div>
<div id="mcPageBody3_MailMerge" style="display: none; height: 100%;">
<iframe name="mailMergeFormFrame" id="mailMergeFormFrame" width="100%" height="100%"
scrolling="auto" src='/_static/blank.htm' frameborder="0"></iframe>
</div>
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</div>
</div>
<div id="mcPageBody5" style="display: none">
<table height="100%" width="100%" cellpadding="0" cellspacing="0">
<tr class="MiniCampaign_tr_SummaryTop" valign="top">
<td>
<table width="100%" cellpadding="0" cellspacing="0">
<tr valign="top">
<td id="id_summary_top">
<loc:text id="Text27" resourceid="MC_MSG_StepsCompleted" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<table style="table-layout: fixed">
<col width="140">
<col>
<tr>
<td>
<loc:text id="Text28" resourceid="MC_Summary_Name" runat="server" />
</td>
<td class="MiniCampaign_td_MCName">
<nobr id="td_MC_Name">&nbsp;</nobr>
</td>
</tr>
<tr>
<td>
<loc:text id="Text29" resourceid="MC_Summary_Type" runat="server" />
</td>
<td id="td_MC_Type" class="MiniCampaign_td_MCType">
</td>
</tr>
<tr>
<td>
<loc:text id="Text30" resourceid="MC_Summary_Scope" runat="server" />
</td>
<td id="td_MC_Scope" class="MiniCampaign_td_MCScope">
</td>
</tr>
<tr>
<td>
<loc:text id="Text31" resourceid="MC_Summary_Owner" runat="server" />
</td>
<td id="td_MC_Owner" class="MiniCampaign_td_MCOwner">
</td>
</tr>
</table>
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td id="id_summary_intermed">
<loc:text id="Text32" resourceid="MC_MSG_Info" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td id="id_summarys_bottom">
<loc:text id="Text33" resourceid="MC_MSG_CreateMC" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</div>--%>--%>
</frm:DialogForm>
</body>
</html>
