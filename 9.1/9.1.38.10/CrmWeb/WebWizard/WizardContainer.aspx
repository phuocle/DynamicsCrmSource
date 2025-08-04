<%@ Page language="c#" Inherits="Microsoft.Crm.Web.WebWizard.WizardContainerPage"    %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<style type="text/css">
.ms-crm-Wizard-Progress { height: 100%; width: 100%; background-color: #ffffff; top: 0px; bottom: 0px}
</style>


<base target="_self" />

<cnt:AppHeader id="crmHeader" runat="server" />

<script language=javascript>



var _aoWizardResultBag = new Array();
var _aoBbackButtonPages = new Array();
var _iBackButtonCurrentIndex = 0;
var _bBackMode = false;
var _loadWizardPage = false;


function initialize()
{
var xmlStr = XUI.Html.GetText(document.getElementById("pageDefinitions"));
var xmlDoc = XUI.Xml.LoadXml(xmlStr);

var oPageDefinitionNode = XUI.Xml.SelectSingleNode(xmlDoc, "/Pages/Page[@pagesequencenumber='" + iWizardPageSequenceNumber + "']", null);

var oPageDefinition = new Object();
oPageDefinition["PageNumber"] = oPageDefinitionNode.attributes.getNamedItem("pagesequencenumber").nodeValue;
oPageDefinition["Url"] = Mscrm.CrmUri.create(oPageDefinitionNode.attributes.getNamedItem("pageurl").nodeValue).toString();
oPageDefinition["DataToPost"] = oPageDefinitionNode.attributes.getNamedItem("pagedatatopost").nodeValue;
toggleProgressIndicator(true);
postWizardPage(oPageDefinition);
_loadWizardPage = true;
}




function postWizardPage(oPageDefinition)
{
document.getElementById("wizardPagePostData").value = oPageDefinition["DataToPost"];
document.getElementById("wizardpagepostform").action = oPageDefinition["Url"];
window.setTimeout("document.getElementById('wizardpagepostform').submit();", 10);


var sBackUrlId = "Url" + _iBackButtonCurrentIndex;
_aoBbackButtonPages[sBackUrlId] = oPageDefinition;
}


function onBackButtonClick(showProgressIndicator)
{
if( !(_iBackButtonCurrentIndex > 0) )
{
return;
}

toggleProgressIndicator(showProgressIndicator);

_bBackMode = true;
_iBackButtonCurrentIndex--;
var sBackUrlId = "Url" + _iBackButtonCurrentIndex;


var oPageDefinition  = _aoBbackButtonPages[sBackUrlId];;


var oFrame = window.wizardpageframe;
if(!IsNull(oFrame.GetPreviousPageDefinition))
{
oPageDefinition = oFrame.GetPreviousPageDefinition(oPageDefinition);
}

postWizardPage(oPageDefinition);
}


function onCancelButtonClick()
{
Mscrm.Utilities.setReturnValue(null);
if (ConfirmWizardClose())
wizardClose();
}
function ConfirmWizardClose() {
return confirm(LOCID_CANCEL_PROMPT);
}
function onRestartButtonClick()
{
$get("reloader").href = location.href;
Mscrm.Utilities.click($get("reloader"));
}


function staticNavigate()
{

var sBackUrlId = "Url" + _iBackButtonCurrentIndex;
var oPageDefinition  = _aoBbackButtonPages[sBackUrlId];
var oPageDefinitionNode = XUI.Xml.SelectSingleNode(pageDefinitions, "/Pages/Page[@pagesequencenumber='" + oPageDefinition["PageNumber"] + "']", null);


var oNextPageDefinitionNode = XUI.Html.DomUtils.GetNextSibling(oPageDefinitionNode);
if( oNextPageDefinitionNode == null )
{
return;
}

_iBackButtonCurrentIndex++;
var oPageDefinition = new Object();
oPageDefinition["PageNumber"] = oNextPageDefinitionNode.attributes.getNamedItem("pagesequencenumber").nodeValue;
oPageDefinition["Url"] = Mscrm.CrmUri.create(oNextPageDefinitionNode.attributes.getNamedItem("pageurl").nodeValue).toString();
oPageDefinition["DataToPost"] = oNextPageDefinitionNode.attributes.getNamedItem("pagedatatopost").nodeValue;
postWizardPage(oPageDefinition);
}


function dynamicNavigate()
{

var oNextPageDefinition = window.wizardpageframe.GetNextPageDefinition();





oNextPageDefinition["Url"] = oNextPageDefinition["Url"].toString();

_iBackButtonCurrentIndex++;
postWizardPage(oNextPageDefinition);
}


function wizardPageNavigateClicked(iNavigateEnum, showProgressIndicator)
{
switch(iNavigateEnum)
{
case _WizardNavigateEnum.BACK:
onBackButtonClick(showProgressIndicator);
break;

case _WizardNavigateEnum.CANCEL:
onCancelButtonClick();
break;

case _WizardNavigateEnum.CLOSE:
wizardClose();
break;

case _WizardNavigateEnum.NEXT:
toggleProgressIndicator(showProgressIndicator);
_bBackMode = false;
if( bIsStaticPageSequence )
{
staticNavigate();
}
else
{
dynamicNavigate();
}
break;

case _WizardNavigateEnum.RESTART:
onRestartButtonClick();
break;
}
}

function onWizardPageLoad(element)
{
if(_loadWizardPage)
{
var oFrame = window.wizardpageframe;


if (!IsNull(oFrame.WizardSetButtonEnabled) && _iBackButtonCurrentIndex == 0)
{
oFrame.WizardSetButtonEnabled(false, _WizardNavigateEnum.BACK);
}


if (bIsStaticPageSequence && !IsNull(oFrame.$get("spanPageNumber")))
{
var iPageNumber = _iBackButtonCurrentIndex + 1;
var iPageCount = XUI.Xml.SelectNodes(pageDefinitions, "/Pages/Page", null).length;

XUI.Html.SetText(oFrame.$get("spanPageNumber"), formatString(LOCID_STATIC_PAGE_NUMBER, iPageNumber, iPageCount));
}


if (typeof (oFrame.WantToSkip) == "undefined" ||
oFrame.WantToSkip == null) {
toggleProgressIndicator(false);
focusOnPageElement();
return;
}

var bWantToSkip = oFrame.WantToSkip();
var bWantToSkipAndRetainBackStack = false;
if (!IsNull( oFrame.WantToSkipAndRetainBackStack))
bWantToSkipAndRetainBackStack = oFrame.WantToSkipAndRetainBackStack();


if( (bWantToSkip || bWantToSkipAndRetainBackStack ) &&  !_bBackMode)
{

if( _iBackButtonCurrentIndex == 0 && !bWantToSkipAndRetainBackStack )
{
_iBackButtonCurrentIndex = -1;
}
wizardPageNavigateClicked(_WizardNavigateEnum.NEXT, true)
}
else if( (bWantToSkip || bWantToSkipAndRetainBackStack ) && _bBackMode)
{

onBackButtonClick(true);
}
else
{


toggleProgressIndicator(false);
focusOnPageElement();
}
}
}



function focusOnPageElement() {
var buttonNext = window.wizardpageframe.document.getElementById("buttonNext");
$addHandler(window.top.document, 'keydown', function (event) {
handleEscapeKey(event);
});
$addHandler(window.wizardpageframe.document, 'keydown', function (event) {
handleEscapeKey(event);
});

var wizardPageFrames = $(window.wizardpageframe.document).find("iframe");


for (i = 0; i < wizardPageFrames.length; i++) {
var frames = wizardPageFrames[i];
var childFrame = (frames.contentDocument || frames.contentWindow);
$addHandler(childFrame, 'keydown', function (event) {
handleEscapeKey(event);
});
}
if (!IsNull(buttonNext) && buttonNext.disabled == false) {
$(buttonNext).attr("aria-labelledby", "spanTitle");
buttonNext.focus();
}
else if (!IsNull(window.wizardpageframe)) {
if (!IsNull(window.wizardpageframe.document.getElementById("helpLink"))) {
window.wizardpageframe.document.getElementById("helpLink").focus();
}
else {
window.wizardpageframe.focus();
}
}
}

function handleEscapeKey(event) {
if (event.keyCode == 27)
{

wizardClose();
}
}

function wizardClose( )
{
if (parent.WizardClose)
{
parent.WizardClose(window);
}
else
{
closeWindow();
}

if (window.returnFocustoElementSelector != null) {
$(window.returnFocustoElementSelector).focus();
}
}

function toggleProgressIndicator(bShowProgress)
{
$get("progressIndicator").style.display = (bShowProgress) ? "" : "none";
$get("progressInner").style.cursor = (bShowProgress) ? "wait" : "default";
$get("wizardpageframe").parentNode.style.display = (bShowProgress) ? "none" : "";
}

</script>
</head>

<body onload='initialize();' <% if (_dialogType == 1) { %>style="overflow: hidden"<% } %> <% if (Request.Browser.Browser == "IE") { %> class="ms-crm-absolutePosition" <% } %> >


<a id="reloader" href="" tabindex="-1" aria-hidden="true" aria-label="reloader"></a>


<div id="pageDefinitions"  style="display: none;"><%RenderPageDefinitionsXml(Response.Output);%></div>


<form method='post' action='' target='wizardpageframe' id='wizardpagepostform'>
<input type="hidden" name="wizardPagePostData" id="wizardPagePostData" value='' runat="server" />
</form>


<div id="progressIndicator" class="ms-crm-Wizard-Progress">
<div id="progressInner" style="height: 100%; width: 100%">
<div style="top: 45%; text-align: center; position: relative;">
<img alt="" src="/_imgs/AdvFind/progress.gif" /><br />
<loc:Text ResourceId="PageLoadingMessage" runat="server"/>
</div>
</div>
</div>
<% if (Request.Browser.Browser == "IE") { %>
<div style="width:100%;height:100%;position:absolute; display:none;">
<% } %>

<iframe onload='onWizardPageLoad(this );' name='wizardpageframe' id='wizardpageframe' role='none'
<% if (_dialogType == 1) { %> height="100%" <% } else { %> height="99%" <% } %> width="100%" scrolling="no" src='/_static/blank.htm' frameborder="0"></iframe>
<% if (Request.Browser.Browser == "IE") { %>
</div>
<% } %>

<wizardContainer id="wizardcontainerpage" />

</body>
</html>
