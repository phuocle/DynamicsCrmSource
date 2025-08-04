<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Pages.ExternalSearchPage" EnableEventValidation="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ctr" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<html xmlns:crm  style="background-color: white;">
<head>
<meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8" />
<title></title>
<style>
#searchDiagolue li.selected {
background-color: #B1D6F0 !important;
border-color: #B1D6F0 !important;
}

#searchDiagolue li:hover {
background-color: #eaf4fb;
border-color: #eaf4fb;
;
}


crmntfcoverride {
width: 100%;
height: 24px;
display: inline-block;
cursor: default;
}
</style>

<link rel="stylesheet" href="/nga/resources/styles/bootstrap.min.css?v=<REPLACEWITHVERSIONINBUILD>" />
<link rel="stylesheet" href="/_common/styles/menucore.css.aspx" />

<cnt:appheader id="crmHeader" runat="server" />
<script id="contentTemplate" type="text/x-jquery-tmpl">
${ ResetTrackRecordCounter(_records) }
{{each _records}}
${ TrackRecordCounter(_records) }
{{if _shouldReplaceDummy == false && _isalreadytraversed == false }}
<span style="display: none;" id="highlightDisplayStyle">$("em").css({"font-weight": "bold"})
</span>
<span style="display: none;" id="entityLogicalName">${_entityLogicalName}
</span>
<span style="display: none;" id="entityRecordTypeCode">${_entityTypeCode}
</span>
<span style="display: none;" id="entityId">${_id}
</span>
<span style="display: none;" id="entityColor">${_entityColor}
</span>
<div class="listItem listItemMargin" tabindex="0" id="Record_${_entityTypeCode}_${_id}" title="${_title}">
<div class="section listItem_section image_enabled_meqf listItemMargin listItemMarginDisplay">
<div class="section_control noLabel section_controlMargin">
<div class="control_value">
{{if _entityImage != ""}}
<img style="width: 46px; height: 46px;" src="${_entityImage}" alt="Profile Picture" />
{{else}}
<div class="meqfTile" style="background-color: ${_entityTheme};">
<div></div>
<img src="${_entitySymbol}" alt="Entity Picture"></img>
</div>
{{/if}}
</div>
</div>
<div class="attributeMargins">
<div class="section_control_meqf noLabel">
<div class="control_value entityName">
<div id="entityDisplayName" class="entityDisplayName">${_entityDisplayName}</div>
</div>
</div>
<div class="section_control_meqf noLabel">
<div class="control_value attributePrimary" style="max-height: 48px;">
<div id="attribone" class="attribone">{{html _attribute1}}</div>
</div>
</div>
<div style="max-height: 6.9em;line-height:1.3em;overflow:hidden;">
<div class="section_control_meqf noLabel attributeOther" style="width: 732px;">
<div class="control_value">
<div id="attribtwo" style="max-width: 732px; max-height: 72px; word-break: break-word;">{{html _attribute2}}</div>
</div>
</div>
<div class="section_control_meqf noLabel attributeOther" style="width: 732px;">
<div class="control_value">
<div id="attribthree" style="max-width: 732px; max-height: 72px; word-break: break-word;">{{html _attribute3}}</div>
</div>
</div>
<div class="section_control_meqf noLabel attributeOther" style="width: 732px;">
<div class="control_value">
<div id="attribfour" style="max-width: 732px; max-height: 72px; word-break: break-word;">{{html _attribute4}}</div>
</div>
</div>
<div class="section_control_meqf noLabel attributeOther" style="width: 732px;">
<div class="control_value">
<div id="attribfive" style="max-width: 732px; max-height: 72px; word-break: break-word;">{{html _attribute5}}</div>
</div>
</div>
</div>
{{if _entityTypeCode == "4202"}}
${ PlaceChildElementsAsAnAttachments(_records) }
{{html attachHtml}}
{{/if}}

{{if _entityTypeCode == "4201"}}
${ PlaceChildElementsAsAnAttachments(_records) }
{{html attachHtml}}
{{/if}}
</div>
<div style="clear: both;"></div>
</div>
</div>
{{/if}}
{{/each}}
</script>
<script id="headerTemplate" type="text/x-jquery-tmpl">
<span style="display: none;" id="pageCount">${_pageCount}
</span>
<span style="display: none;" id="pageNumber">${_pageNumber}
</span>
</script>



<script language="javascript">
var queryPageSize = <%=pageSize%>;
var ExternalSearchType = 1;
var filterList = "";
var filterQuery = "&$filter=";
var searchEntity = 0;
var sourceObjectId = 0;
var recordCounter = -1;
var attachHtml;

var masterJSONResponse = {};
var counter = 1;

var sliderControlLeftBucketTracker = [];


var openDialogId = "";
var resetzIndex = "";


var currentId;


var focusElement;
var elementToFocus;
var logoText


var clientHeight;
var heightOfContentRecords;

var storeFirstRecordId = null;
var storeCurrentRecordId = null;


function ResetTrackRecordCounter(obj)
{
if(obj.length > 0)
{
if(storeFirstRecordId == null)
{
storeFirstRecordId = "Record_"+obj[0]._entityTypeCode+"_"+obj[0]._id;
}
}
recordCounter = -1;
return "";
}


function TrackRecordCounter(obj)
{
recordCounter = recordCounter+1;
if(obj[recordCounter]._shouldReplaceDummy == true || obj[recordCounter]._isalreadytraversed == true)
{
ProcessAllExistingTraversedData(obj[recordCounter]);
}
return "";
}


function PlaceChildElementsAsAnAttachments(iterationRecords)
{
attachHtml = "";
var attachmentFileName = "";

var isAlreadyTraversedAttachment = ProcessAllExistingTraversedData(iterationRecords[recordCounter]);
if(isAlreadyTraversedAttachment) return "";

if(iterationRecords[recordCounter]._haschild)
{
var sourceObjectId = iterationRecords[recordCounter]._id;
var currentAttachmentId;
var highlightedBody;
var highlightedFilename;
var parentIs = "attachments_"+sourceObjectId;
var totalAttachmentCountShow = iterationRecords[recordCounter]._attachments.length - 1;
var styleToDisplay = "block";

for(var i=0; i<iterationRecords[recordCounter]._attachments.length; i++)
{
if(i>0) styleToDisplay = "none";

currentAttachmentId = iterationRecords[recordCounter]._attachments[i]['@search.objectid'];
if(!(typeof iterationRecords[recordCounter]._attachments[i]['filename'] === "undefined"))
{
attachmentFileName =  iterationRecords[recordCounter]._attachments[i]['filename'];
}
highlightedFilename  =  iterationRecords[recordCounter]._attachments[i]["@search.highlights"]["filename"];
highlightedBody  =  iterationRecords[recordCounter]._attachments[i]["@search.highlights"]["body"];
attachHtml += CreateAttachmentTemplate(iterationRecords[recordCounter], totalAttachmentCountShow, sourceObjectId, styleToDisplay, currentAttachmentId,i, attachmentFileName, highlightedFilename, highlightedBody);
}
}
return "";
}



function ProcessAllExistingTraversedData(currRecord)
{
var attachHtmlToOldEntity = "";


if(currRecord._shouldReplaceDummy == true || currRecord._isalreadytraversed == true)
{
var sourceObjectId = currRecord._id;
attachHtmlToOldEntity += "<div class='section listItem_section image_enabled_meqf listItemMargin listItemMarginDisplay RE'>";
attachHtmlToOldEntity += "<div class='section_control noLabel section_controlMargin'>";
attachHtmlToOldEntity += "<div class='control_value'>";
if(currRecord._entityImage != '')
{
attachHtmlToOldEntity += "<img style='width: 46px; height: 46px;' src='"+currRecord._entityImage+"' alt='Profile Picture' />";
}
else{
attachHtmlToOldEntity += "<div class='meqfTile' style='background-color: "+currRecord._entityTheme+";'>";
attachHtmlToOldEntity += "<div></div>";
attachHtmlToOldEntity += "<img src='"+currRecord._entitySymbol+"'></img>";
attachHtmlToOldEntity += "</div>";
}

attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='attributeMargins'>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel'>";
attachHtmlToOldEntity += "<div class='control_value entityName' style='max-height: 19px;'>";
attachHtmlToOldEntity += "<span id='entityDisplayName' class='entityDisplayName'>"+currRecord._entityDisplayName+" </span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel'>";
attachHtmlToOldEntity += "<div class='control_value attributePrimary' style='max-height: 48px; height: 22px;'>";
attachHtmlToOldEntity += "<span id='attribone' class='attribone'>"+currRecord._attribute1+"</span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel attributeOther' style='width: 732px;'>";
attachHtmlToOldEntity += "<div class='control_value'>";
attachHtmlToOldEntity += "<span id='attribtwo' style='max-width: 732px; height: 21px;'>"+currRecord._attribute2+"</span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel attributeOther' style='width: 732px;'>";
attachHtmlToOldEntity += "<div class='control_value'>";
attachHtmlToOldEntity += "<span id='attribthree' style='max-width: 732px; height: 21px;'>"+currRecord._attribute3+"</span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel attributeOther' style='width: 732px;'>";
attachHtmlToOldEntity += "<div class='control_value'>";
attachHtmlToOldEntity += "<span id='attribfour' style='max-width: 732px; height: 21px;'>"+currRecord._attribute4+"</span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div class='section_control_meqf noLabel attributeOther' style='width: 732px;'>";
attachHtmlToOldEntity += "<div class='control_value'>";
attachHtmlToOldEntity += "<span id='attribfive' style='max-width: 732px; height: 21px;'>"+currRecord._attribute5+"</span>";
attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "</div>";


attachHtmlToOldEntity += RestructureAllAttachmentOFEntityEmail(currRecord);

attachHtmlToOldEntity += "</div>";
attachHtmlToOldEntity += "<div style='clear: both;'></div>";
attachHtmlToOldEntity += "</div>";

var id = 'Record_'+currRecord._entityTypeCode+'_'+sourceObjectId;
var e = document.getElementById(id);
if(e != null)
{
e.innerHTML = attachHtmlToOldEntity;
return true;
}
}
return false;
}

function RestructureAllAttachmentOFEntityEmail(currRecord)
{
var reformAttachments = "";
var attachmentFileName = "";

if(currRecord._haschild)
{
var sourceObjectId = currRecord._id;
var currentAttachmentId;
var highlightedFilename;
var highlightedBody;
var parentIs = "attachments_"+sourceObjectId;
var totalAttachmentCountShow = currRecord._attachments.length - 1;
var styleToDisplay = "block";

for(var i=0; i<currRecord._attachments.length; i++)
{
if(i>0) styleToDisplay = "none";

currentAttachmentId = currRecord._attachments[i]['@search.objectid'];
if(!(typeof currRecord._attachments[i]['filename'] === "undefined"))
{
attachmentFileName  = currRecord._attachments[i]['filename'];
}
highlightedFilename  =  currRecord._attachments[i]["@search.highlights"]["filename"];
highlightedBody = currRecord._attachments[i]["@search.highlights"]["body"];
reformAttachments += CreateAttachmentTemplate(currRecord, totalAttachmentCountShow, sourceObjectId, styleToDisplay, currentAttachmentId,i, attachmentFileName, highlightedFilename, highlightedBody);
}
}
return reformAttachments;
}

function mouseOver(id,curId)
{
currentId = document.getElementById(curId);
if(currentId != null) {
if(openDialogId != "")
{
resetHeightOfContentRecords(id);
document.getElementById(openDialogId).style.display = "none";
resetzIndex.style.zIndex = "";
}
clientHeight = document.getElementById('contentRecords').clientHeight;
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.zIndex = 10;
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "visible";
id.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "visible";
if(id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("tmp_title") == null || "")
{
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("tmp_title",id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.title);
}
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("title","");

document.getElementById(id.childNodes.item(3).id).style.display = "block";
openDialogId = id.childNodes.item(3).id;
resetzIndex = id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
heightOfContentRecords = clientHeight + $("#"+curId).height();
document.getElementById('contentRecords').style.height = heightOfContentRecords + "px";
window.document.documentElement.onclick = function() { closePopupOnDocumentclick(id, curId); };
window.parent.document.documentElement.onclick = function() { closePopupOnDocumentclick(id, curId);};
}
}

function resetHeightOfContentRecords(id){
document.getElementById('contentRecords').style.height = clientHeight + "px";
}
function closePopupOnDocumentclick(id, curId){
document.getElementById('contentRecords').style.height = clientHeight + "px";
document.getElementById(curId).style.display = "none";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.zIndex = "";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "hidden";
id.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "hidden";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("title",id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("tmp_title"));
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.zIndex = "";
window.document.documentElement.onclick = function() { };
window.parent.document.documentElement.onclick = function() { };
}

function closePopup(id){
document.getElementById('contentRecords').style.height = clientHeight + "px";
document.getElementById(id.parentNode.id).style.display = "none";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "hidden";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.overflow = "hidden";
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("title",id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("tmp_title"));
id.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.zIndex = "";
window.document.documentElement.onclick = function() { };
window.parent.document.documentElement.onclick = function() { };
}

function CreateAttachmentTemplate(recordObj, totalAttachmentCountShow, sourceObjectId, styleToDisplay, currentAttachmentId,i, attachmentFileName, highlightedFilename, highlightedBody)
{
var template = "";
template += "<div class='section_control_meqf noLabel attributeOther RA "+sourceObjectId+"' style='width: 525px;display:"+styleToDisplay+"' id='attachments_"+currentAttachmentId+"'>";
template += "<div class='control_value'>";
template += "<div class='attachments'>";
var curId = "arrowbox_attachments_"+currentAttachmentId;
if(highlightedFilename != null)
{
var name = highlightedFilename.toString().replace(/{crmhit}/g,'<em>').toString().replace(/{\/crmhit}/g,'</em>');
name = name.toString().replace(/{\/crmhit}/g,'</em>');
template += "<span onmouseover='mouseOver(this,\""+curId+"\")'><b><img src='/_imgs/ico_16_attach.gif' title='"+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+"' alt='"+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+"'/> &nbsp; "+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+" : </b>"+highlightedFilename.toString().replace(/{crmhit}/g,'<em>').toString().replace(/{\/crmhit}/g,'</em>');
}
else
{
template += "<span onmouseover='mouseOver(this,\""+curId+"\")'><b><img src='/_imgs/ico_16_attach.gif' title='"+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+"' alt='"+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+"'/> &nbsp;  "+Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay()+" :</b><em></em> "+attachmentFileName;
}

if(highlightedBody != null)
{

template += "<div id='arrowbox_attachments_"+currentAttachmentId+"' style='max-width:800px;' class='arrow_box'>";
template += "<a href='javascript:void(0)' id='cross_"+currentAttachmentId+"' class='cross' onclick='event.stopPropagation(); closePopup(this)'>";
template += "</a>";
template += "<div class='popupContent' style='max-width:800px;'>";
if(highlightedFilename != null)
{
var fileName = highlightedFilename.toString().replace(/{crmhit}/g,'<em>');
template += "<span>"+fileName.toString().replace(/{\/crmhit}/g,'</em>');
template += "</span>";
}
else
{
template += "<span>"+attachmentFileName+"</span>";
}
template += "<div style='margin-top:10px;'>";
template += "<span>";
for(var j=0 ; j< highlightedBody.length;j++)
{
var body = highlightedBody[j].toString().replace(/{crmhit}/g,'<em>');
template += body.toString().replace(/{\/crmhit}/g,'</em>')+ "...";
}
template += "</span>";
template += "</div>";
template += "</div>";
template += "</div>";

}

template += "</span> ";

if(i==0 && totalAttachmentCountShow > 0)
{
template += "<a id='showmore_"+sourceObjectId+"' tabindex='0' href='javascript:void(0)' style='color:#0072C6;z-index:9999;padding-top: 2px;' onclick='event.stopPropagation();ToggleAttachmentsSection(\""+sourceObjectId+"\");'> "+totalAttachmentCountShow+" "+Mscrm.ExternalSearch.getAttachmentShowMoreTextToDisplay()+"</a> ";
}
else if(totalAttachmentCountShow > 0 && i==totalAttachmentCountShow)
{
template += "<a id='showless_"+sourceObjectId+"' tabindex='0'  href='javascript:void(0)' style='color:#0072C6;z-index:9999;display:none;padding-top: 2px;' onclick='event.stopPropagation();ToggleAttachmentsSection(\""+sourceObjectId+"\");'> "+Mscrm.ExternalSearch.getAttachmentShowLessTextToDisplay()+"</a> ";
}

template += "</div>";
template += "</div>";
template += "</div>";

return template;
}


function ToggleAttachmentsSection(sourceObjId)
{
var e = document.getElementsByClassName(sourceObjId);
var isToggle = 0;
var sl = document.getElementById("showless_"+sourceObjId);
if(sl.style.display == "" || sl.style.display == "none")
{
isToggle = 1;
}

if(isToggle)
{
for(var i=0;i<e.length;i++)
{
document.getElementById(e[i].id).style.display = "inline-block";
}
document.getElementById("showless_"+sourceObjId).style.display = "inline-block";
document.getElementById("showmore_"+sourceObjId).style.display = "none";
$("#showless_"+sourceObjId).focus();
}
else
{
for(var i=1;i<e.length;i++)
{
document.getElementById(e[i].id).style.display = "none";
}
document.getElementById("showless_"+sourceObjId).style.display = "none";
document.getElementById("showmore_"+sourceObjId).style.display = "inline-block";
$("#showmore_"+sourceObjId).focus();
}
}

function getCurrentExecutionSourceObjectId(objId)
{
objId = objId.getObjectData();
sourceObjectId = objId.rawguid;
return "";
}

function getCurrentExecutionObjectId(objId)
{
objId = objId.getObjectData();
objectId = objId.rawguid;
return "";
}



function ProcessJsonResponse(jsonparam)
{
var parsedJSON = JSON.parse(jsonparam);
Mscrm.ExternalSearch.unProcessedJsonValueLength = parsedJSON.value.length;

parsedJSON["value"] = MapEntityChildsToMasterJSON(parsedJSON.value);

if(counter > 1)
{
masterJSONResponse =  masterJSONResponse.concat(parsedJSON["value"]);
}
else
{
masterJSONResponse =  parsedJSON["value"];
}

Mscrm.ExternalSearch.receiveprocessedJson(JSON.stringify(parsedJSON));
counter++;
}


function MapEntityChildsToMasterJSON(nodes)
{
var childrens = [], entitiesToDelete = [], entitiesToRetain = [];
for (var i = 0; i < nodes.length; i += 1)
{
nodes[i].attachments = [];
nodes[i].notes = [];
nodes[i].activities = [];
nodes[i].isalreadytraversed = false;
nodes[i].isdummyentity = false;
nodes[i].haschild = false;
nodes[i].shouldreplacedummy = false;

var objectid = nodes[i].objectid;
var entityName = nodes[i]["@search.entityname"];


if(entityName != "activitymimeattachment")
{
entitiesToRetain.push(nodes[i]["@search.objectid"]);
continue;
}

if (objectid != null && entityName == "activitymimeattachment")
{
childrens.push(nodes[i]);
entitiesToDelete.push(nodes[i]["@search.objectid"]);
}
}


for (var i = 0; i < childrens.length; i += 1)
{
var isEligibleForMasterJson = true;
for (var j = 0; j < nodes.length; j += 1)
{
if(childrens[i].objectid == nodes[j]["@search.objectid"])
{
isEligibleForMasterJson = false;
nodes[j].haschild = true;
nodes[j].shouldreplacedummy = checkEntityIspresentInMasterJson(nodes[j]);

switch (childrens[i]["@search.entityname"])
{
case "activitymimeattachment":
nodes[j].attachments.push(childrens[i]);
break;
}

}

if(j==nodes.length-1 && isEligibleForMasterJson)
{

var isEligibleForDummyCreation = true;
for (var k = 0; k < masterJSONResponse.length; k += 1)
{
if(childrens[i].objectid == masterJSONResponse[k]["@search.objectid"])
{
isEligibleForDummyCreation = false;
nodes[j+1] = masterJSONResponse[k];
nodes[j+1].attachments.push(childrens[i]);
nodes[j+1].isalreadytraversed = true;
nodes[j+1].haschild = true;
entitiesToRetain.push(nodes[j+1]["@search.objectid"]);
break;
}
}



if((k == masterJSONResponse.length || typeof masterJSONResponse.length  === "undefined") && isEligibleForDummyCreation)
{
nodes[j+1] = {"@search.objectid" : childrens[i]["objectid"], "@search.entityname": childrens[i]["objecttypecode"], "@search.objecttypecode" : childrens[i]["objecttypecode"], "subject" : childrens[i]["activitysubject"]};
nodes[j+1].attachments = []
nodes[j+1].attachments.push(childrens[i]);
nodes[j+1].isalreadytraversed = false;
nodes[j+1].isdummyentity = true;
nodes[j+1].haschild = true;
entitiesToRetain.push(nodes[j+1]["@search.objectid"]);
}

if(isEligibleForDummyCreation || isEligibleForMasterJson) break;
}
}
}

nodes = $.grep(nodes, function(item){
return entitiesToRetain.indexOf(item["@search.objectid"]) > -1;
});

return nodes;
}

function checkEntityIspresentInMasterJson(node)
{
var response = false;
if(typeof masterJSONResponse.length  === "undefined") return response;

for (var i = 0; i < masterJSONResponse.length; i += 1)
{
if(masterJSONResponse[i]["@search.objectid"] == node["@search.objectid"])
{
masterJSONResponse[i] = node;
response = true;
break;
}
}
return response;
}

$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() > $(document).height() -100 && Mscrm.ExternalSearch.unProcessedJsonValueLength == queryPageSize) {
Mscrm.ExternalSearch.autoMoreRecordsClick();
}
});

function keyDownHandler(e) {
if (window.event) {
e = window.event;
}
if (e.keyCode == 13) {
document.getElementById("SearchButton").click();
return false;
}
}

function SetupAndExecuteSearch()
{

Mscrm.Utilities.setCookie("persistentSearchTypeCookie", ExternalSearchType, 60 * 24 * 365 * 100);
ExecuteSearch();

}


function ExecuteSearch() {
document.getElementById("entityCombo").value = 0;
document.getElementById('contentRecords').removeAttribute("style");
window.document.documentElement.onclick = function() { };
window.parent.document.documentElement.onclick = function() { };
ResetDecisionVariables();
if(document.getElementById("searchCheckBox") != null)
{
document.getElementById("searchCheckBox").checked= false;
}
Mscrm.ExternalSearch.executeSearchSdkCall(queryPageSize, 0);
Mscrm.ExternalSearch.setFilterDropDownHeight();
}


function onCheckBoxClick(ID) {
if(Mscrm.ExternalSearch.get_searchText().length > 0)
{
document.getElementById("entityCombo").value = ID;
ResetDecisionVariables();
Mscrm.ExternalSearch.metricsReportingForIncludeNotesAndActivites();
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0, ID, "IncludeNotes", false,"");
}
}



function onSearchChangeClicked() {
var linkElement = document.getElementById("ExternalSearchFullPrivacyDisclaimer");
if (linkElement){
var href = linkElement.getAttribute("href");
var hrefAttributes = "?pagemode=iframe";
if(href) {
var searchText = document.getElementById("searchTextBox").value;
if (searchText != '')
{
hrefAttributes = hrefAttributes + "&text=" + searchText;
}

linkElement.setAttribute("href", href + hrefAttributes);
}
}
}

function record_onclick(ID)
{
Mscrm.ExternalSearch._objectTypeCode$p = ID;
if(ID == "0")
{
document.getElementById("entityCombo").value = 0;
searchEntity = ID;
ResetDecisionVariables();
Mscrm.ExternalSearch.externalSearchDateTimeRecords = [];
Mscrm.ExternalSearch.executeSearchSdkCall(queryPageSize, 0);
if(document.getElementById("searchCheckBox") != null)
{
document.getElementById("searchCheckBox").checked= false;
}
}
else
{
searchEntity = ID;
document.getElementById("entityCombo").style.display="none"
document.getElementById("entityCombo").value = ID;
ResetDecisionVariables();
Mscrm.ExternalSearch.externalSearchDateTimeRecords = [];
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0, ID, "", false,"");
Mscrm.ExternalSearch.showHideCheckBox();
}
}

function ownerName_onclick(filter)
{
var entityName= null;
var filterToAdd = "";
if(entityName != null)
{
filterToAdd = +entityName+":ownerid eq '"+ filter + "'";
}
else
{
filterToAdd = "ownerid eq '"+ filter + "'";
}
filterList = filterToAdd;
ResetDecisionVariables();
Mscrm.ExternalSearch.metricsReportingForFiltersAdded(filterToAdd,"ownerid","lookup");
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0, searchEntity, filterToAdd, false,"");
}

function lookup_onclick(value,entityTypeCode,columnName,type)
{
var filter;
if(type=="Picklist")
{
filter =columnName +" eq "+ parseInt(value);
Mscrm.ExternalSearch.metricsReportingForFiltersAdded(filter,columnName,"Picklist");
}
else
{
filter = columnName +" eq '"+ value + "'";
Mscrm.ExternalSearch.metricsReportingForFiltersAdded(filter,columnName,"lookup");
}
var entityCode = parseInt(entityTypeCode)
ResetDecisionVariables();
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0,entityCode, filter, false,"");
}

function show_more(type)
{
document.getElementById("showMore"+type).style.display = "none";
document.getElementById("morerecordUL"+type).style.display = "inline";
document.getElementById("showLess"+type).style.display = "inline-block";

var value = document.getElementById("recordTypeJson").value;
if(document.getElementById("autompleteRecordType"+type) != null)
{
document.getElementById("autompleteRecordType"+type).style.display = "inline";

var recordTyperesults = JSON.parse(value);
var parsedRecordType = [];
if(type == "entity")
{

for (var i=0; i<recordTyperesults["facets"]["@search.entityname"].length && i < 100; i++) {
var obj;
obj = {
id: recordTyperesults["facets"]["@search.entityname"][i].Value,
value: Mscrm.ExternalSearch.getEntityDisplayName(recordTyperesults["facets"]["@search.entityname"][i].Value),
type: "Entity",
};

parsedRecordType.push(obj);
}
}
else
{

for (var i=0; i<recordTyperesults["facets"]["ownerid"].length && i < 20; i++) {
var obj;
obj = {
id: recordTyperesults["facets"]["ownerid"][i].Value,
value:recordTyperesults["facets"]["ownerid"][i].OptionalValue,
type: "Owner",
};

parsedRecordType.push(obj);
}
}

$( "#autompleteRecordType"+type ).autocomplete({
source: parsedRecordType,
appendTo: $("#autompleteRecordType"+type).next(),
focus: function( event, ui ) {
$( "#autompleteRecordType"+type ).val( ui.item.label );
$("li.ui-menu-item").removeAttr( "aria-label" );
$("li.ui-menu-item").removeAttr( "aria-selected" );
$( ".ui-state-hover" ).parent().attr( "aria-label",ui.item.label );
$( ".ui-state-hover" ).parent().attr( "aria-selected","true");
return false;
},
open: function(event, ui) {
var lisItem = $("li.ui-menu-item");
lisItem.attr("role","option");
var linkItem = $("a.ui-corner-all");

linkItem.removeAttr("tabindex");
$("ul.ui-autocomplete").attr("id", "sw_Ul");
$("ul.ui-autocomplete").removeAttr("aria-activedescendant");
$("ul.ui-autocomplete").removeAttr("role");
},
select: function( event, ui ) {

if(ui.item.type == "Entity")
{
searchEntity = Mscrm.ExternalSearch.getEntityTypeCode(ui.item.id);
document.getElementById("entityCombo").value = searchEntity;
ResetDecisionVariables();
Mscrm.ExternalSearch.externalSearchDateTimeRecords = [];
Mscrm.ExternalSearch.metricsReportingForFiltersAdded("","RecordType",type);
Mscrm.ExternalSearch.executeRecordSearchEntityNameCall(queryPageSize, 0, ui.item.id,"");
}
else
{
ownerName_onclick(ui.item.id);
}
return false;
}
});
}

GetFocusForShowLess(type);
}

function show_less(type)
{
document.getElementById("showMore"+type).style.display = "inline-block";
document.getElementById("morerecordUL"+type).style.display = "none";
document.getElementById("showLess"+type).style.display = "none";
document.getElementById("autompleteRecordType"+type).style.display = "none";
GetFocusForShowMore(type);

}

function show_lessrecord(parameter1,parameter2)
{
document.getElementById(parameter2+"_showMore").style.display = "inline";
document.getElementById(parameter2).style.display = "none";
document.getElementById(parameter2+"_showLess").style.display = "none";
document.getElementById("autompleteRecordType_"+ parameter2).style.display = "none";
getfocus(0,parameter1);

}

function show_morerecord(parameter1,parameter2,code,columnName,type)
{
document.getElementById(parameter2+"_showMore").style.display = "none";
document.getElementById(parameter2).style.display = "inline";
document.getElementById(parameter2+"_showLess").style.display = "inline-block";

if(document.getElementById("autompleteRecordType_"+parameter2) != null)
{
var value = document.getElementById("recordTypeJson").value;
document.getElementById("autompleteRecordType_"+parameter2).style.display = "inline";
var entityCode = parseInt(code);
var recordTyperesults = JSON.parse(value);
var parsedRecordType = [];



for (var i=0; i<recordTyperesults["facets"][parameter1].length && i < 20; i++) {

var obj;
if(type=="Lookup")
{
var name = recordTyperesults["facets"][parameter1][i].OptionalValue;
var val = recordTyperesults["facets"][parameter1][i].Value;
obj = {
id: val,
value: name,
entityTypeCode:entityCode,
columnname:columnName
};
}
else if(type=="Picklist")
{
var val = recordTyperesults["facets"][parameter1][i].Value;
var displayName =Mscrm.ExternalSearch.getOptionDisplayName(entityCode,columnName,val);
if(displayName != "")
{
obj = {
id: parseInt(val),
value:displayName,
entityTypeCode:entityCode,
columnname:columnName
};
}
}
parsedRecordType.push(obj);
}
if(type=="Lookup")
{

$("#autompleteRecordType_"+ parameter2).autocomplete({
source: parsedRecordType,
appendTo: $("#autompleteRecordType_"+ parameter2).next(),
focus: function( event, ui ) {
$("#autompleteRecordType_"+ parameter2).val( ui.item.label );
$("li.ui-menu-item").removeAttr( "aria-label" );
$("li.ui-menu-item").removeAttr( "aria-selected" );
$( ".ui-state-hover" ).parent().attr( "aria-label",ui.item.label );
$( ".ui-state-hover" ).parent().attr( "aria-selected","true");
return false;
},
open: function(event, ui) {
var lisItem = $("li.ui-menu-item");
lisItem.attr("role","option");
var linkItem = $("a.ui-corner-all");

linkItem.removeAttr("tabindex");
$("ul.ui-autocomplete").attr("id", "sw_Ul1");
$("ul.ui-autocomplete").removeAttr("aria-activedescendant");
$("ul.ui-autocomplete").removeAttr("role");
},
select: function( event, ui ) {
var filter = ui.item.columnname +" eq '"+ ui.item.id + "'";
ResetDecisionVariables();
Mscrm.ExternalSearch.metricsReportingForFiltersAdded(filter,ui.item.columnname,"Lookup");
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0,ui.item.entityTypeCode, filter, false,"");
return false;
}
});
}
else if(type=="Picklist")
{
$( "#autompleteRecordType_"+ parameter2).autocomplete({
source: parsedRecordType,
appendTo: $("#autompleteRecordType_"+ parameter2).next(),
focus: function( event, ui ) {
$("#autompleteRecordType_"+ parameter2).val( ui.item.label );
$("li.ui-menu-item").removeAttr( "aria-label" );
$("li.ui-menu-item").removeAttr( "aria-selected" );
$( ".ui-state-hover" ).parent().attr( "aria-label",ui.item.label );
$( ".ui-state-hover" ).parent().attr( "aria-selected","true");
return false;
},
open: function(event, ui) {
var lisItem = $("li.ui-menu-item");
lisItem.attr("role","option");
var linkItem = $("a.ui-corner-all");

linkItem.removeAttr("tabindex");
$("ul.ui-autocomplete").attr("id", "sw_Ul1");
$("ul.ui-autocomplete").removeAttr("aria-activedescendant");
$("ul.ui-autocomplete").removeAttr("role");
},
select: function( event, ui ) {
var filter = ui.item.columnname +" eq "+ ui.item.id;
ResetDecisionVariables();
Mscrm.ExternalSearch.metricsReportingForFiltersAdded(filter,ui.item.columnname,"Picklist");
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0,ui.item.entityTypeCode, filter, false,"");
return false;
}
});
}
}
getfocus(1,parameter1);
}

function reset_onclick(filterText, entityCode)
{
ResetDecisionVariables();
Mscrm.ExternalSearch.executeRecordSearchSdkCall(queryPageSize, 0,parseInt(entityCode), filterText, true,"");
}

function MsCrmRelevanceSearchBarChartRecieveBarPointData(recieveBarResponseData)
{
Mscrm.ExternalSearch.skipBarChartColumnName = recieveBarResponseData[0][4];
if(recieveBarResponseData[0][3] == true)
{
Mscrm.ExternalSearch.filterDatetimeFieldsData(recieveBarResponseData);
}
else{
document.getElementById('panoramaContainer').style.display = 'none';
document.getElementById('searchCriteria').style.display = 'block';
document.getElementById('searchCriteria').innerHTML = LOCID_MEQF_MIN_CHARACTER_SEARCH;
}
}

function createDateTimeControl(container, chartdata, guid, columnName, otc,column,startPoint,endPoint,setpointenable,count,category,barchartEnable,sliderwidth,maxNumbers)
{
var max = Math.max.apply(Math, maxNumbers);
var options = {
chart: {
type: 'barchart',
uniqueid : '',
callback : "",
objecttypecode : "",
columnname : "",
},
setpoints : {
enable : false,
start : 1,
end : 4,
},
title: {
text: ''
},
subtitle: {
text: ''
},
xAxis: {
categories: [],
start : "",
end : "",
appendtextdisplay : "Less than ",
barChartTextToDisplay : [],
slidermovement : {
x : 63,
y : 73,
},
},
yAxis: {
title: {
text: false
}
},
tooltip: {
enable  : true,
useHTML : true
},
series: [{
name: 'bar',
data: [6926, 2962, 1990, 916, 2267],
}],
features : {
barchart : true,
slider : true,
sliderwidthfixed : false,
direction : "LTR",
IsReturnTypeAsIndex : true,
overridebarchartarraymaxnumber : max,
isNextVersionOfSlider : false,
},
};

if(sliderwidth == null || typeof sliderwidth === "undefined") sliderwidth = true;

options.chart.uniqueid=guid;
options.chart.objecttypecode = otc;
options.chart.columnname = column;
options.title.text = columnName;
options.setpoints.start=startPoint;
options.setpoints.end=endPoint;
options.setpoints.enable=setpointenable;
options.series[0].data = chartdata;
options.features.barchart = barchartEnable;
options.features.sliderwidthfixed = sliderwidth;
options.chart.callback = "k"+count;
options.xAxis.categories = Mscrm.ExternalSearch.getBarChartCategories();
options.xAxis.start = Mscrm.ExternalSearch.getBarChartStartTextToDisplay();
options.xAxis.end = Mscrm.ExternalSearch.getBarChartEndTextToDisplay();
options.xAxis.barChartTextToDisplay = Mscrm.ExternalSearch.getBarChartTextToDisplay();
if (LOCID_UI_DIR == "RTL")
{
options.features.direction = "RTL"
}
else
{
options.features.direction = "LTR"
}
eval("window.k" + count + "=$('#"+container+"').barChart(options);");

}

function createFutureDateTimeControl(container, chartdata, guid, columnName, otc,column,startPoint,endPoint,setpointenable,count,category,barchartEnable,sliderwidth,maxNumbers)
{
var max = Math.max.apply(Math, maxNumbers);
var options = {
chart: {
type: 'barchart',
uniqueid : '',
callback : "",
objecttypecode : "",
columnname : "",
},
setpoints : {
enable : false,
start : 1,
end : 4,
},
title: {
text: ''
},
subtitle: {
text: ''
},
xAxis: {
categories: [],
start : "",
end : "",
appendtextdisplay : "Less than ",
barChartTextToDisplay : [],
slidermovement : {
x : 63,
y : 73,
},
},
yAxis: {
title: {
text: false
}
},
tooltip: {
enable  : true,
useHTML : true
},
series: [{
name: 'bar',
data: [6926, 2962, 1990, 916, 2267],
}],
features : {
barchart : true,
slider : true,
sliderwidthfixed : false,
direction : "LTR",
IsReturnTypeAsIndex : true,
overridebarchartarraymaxnumber : max,
isNextVersionOfSlider : false,
},
};

if(sliderwidth == null || typeof sliderwidth === "undefined") sliderwidth = true;

options.chart.uniqueid=guid;
options.chart.objecttypecode = otc;
options.chart.columnname = column;
options.title.text = columnName;
options.setpoints.start=startPoint;
options.setpoints.end=endPoint;
options.setpoints.enable=setpointenable;
options.series[0].data = chartdata;
options.features.barchart = barchartEnable;
options.features.sliderwidthfixed = sliderwidth;
options.chart.callback = "k"+count;
options.xAxis.categories = Mscrm.ExternalSearch.getFutureBarChartCategories();
options.xAxis.start = Mscrm.ExternalSearch.getFutureBarChartStartTextToDisplay();
options.xAxis.end = Mscrm.ExternalSearch.getFutureBarChartEndTextToDisplay();
options.xAxis.barChartTextToDisplay = Mscrm.ExternalSearch.getFutureBarChartTextToDisplay();
if (LOCID_UI_DIR == "RTL")
{
options.features.direction = "RTL"
}
else
{
options.features.direction = "LTR"
}
eval("window.k" + count + "=$('#"+container+"').barChart(options);");

}

function createSliderControl(container, chartdata, guid, columnName, otc,column,startPoint,endPoint,count,category,displayNumbers)
{
var options = {
chart: {
type: 'barchart',
uniqueid : '',
callback : "",
objecttypecode : "",
columnname : "",
},
setpoints : {
enable : true,
start : 1,
end : 4,
},
title: {
text: ''
},
subtitle: {
text: ''
},
xAxis: {
categories: [

],
start : "",
end : "",
appendtextdisplay : "",
barChartTextToDisplay : [ ],
slidermovement : {
x : 63,
y : 73,
},
},
yAxis: {
title: {
text: false
}
},
tooltip: {
enable  : true,
useHTML : true
},
series: [{
name: 'bar',
data: []

}],
features : {
barchart : false,
slider : true,
sliderwidthfixed : true,
direction : "LTR",
IsReturnTypeAsIndex : false,
overridebarchartarraymaxnumber : null,
isNextVersionOfSlider : true,

}
};

options.chart.uniqueid=guid;
options.chart.objecttypecode = otc;
options.chart.columnname = column;
options.title.text = columnName;
options.setpoints.start=chartdata.indexOf(startPoint);
options.setpoints.end=chartdata.indexOf(endPoint);
options.setpoints.enable=true;
options.series[0].data = category;
options.chart.callback = "k"+count;
options.xAxis.categories = category;
options.features.barchart = false;
options.features.slider = true;
options.features.sliderwidthfixed = true;
options.features.IsReturnTypeAsIndex = false;

options.xAxis.start = startPoint;
options.xAxis.end = endPoint;
options.xAxis.barChartTextToDisplay = displayNumbers;


if (LOCID_UI_DIR == "RTL")
{
options.features.direction = "RTL"
}
else
{
options.features.direction = "LTR"
}

eval("window.k" + count + "=$('#"+container+"').barChart(options);");

}


function EnableMoreRecordTypeResults()
{
Mscrm.ExternalSearch._EnableMoreRecordTypeResults();
}

function DisableMoreRecordTypeResults()
{
Mscrm.ExternalSearch._DisableMoreRecordTypeResults();
}

function HideRibbon()
{
var ribboncommand = window.top.document.getElementById("crmRibbonManager");
if(ribboncommand !=null)
{
ribboncommand.style.visibility = "hidden";
}
var selected = document.getElementById("filterCombo");
if(selected != null)
{
selected.selectedIndex = "1";
}
}
function getfocus(id, type) {
var y;
if(id==0)
{
y = "RTSF"+type;

}
else if(id==1)
{
y = "RTSM"+type;
}

document.getElementById(y).focus();
$("#"+y).focus();
}

function GetFocusForShowMore(type)
{
getfocus(1,type);
}

function GetFocusForShowLess(type)
{
getfocus(0,type);
}

function ResetDecisionVariables()
{
storeFirstRecordId = null;
Mscrm.ExternalSearch.skipBarChartColumnName = "";
counter = 1;
masterJSONResponse = {};
}

function OpenDialogue()
{
if(document.getElementById("searchDiagolue").style.display == 'none')
{
document.getElementById("searchDiagolue").style.display = "block";
}
else
{
document.getElementById("searchDiagolue").style.display = "none";
}
}

function onSelectionBoxChange(value) {
var searchtxt = document.getElementById("searchTextBox").value;
if(value == "2")
{
Mscrm.ExternalSearch.metricsReportingForSearchDropDown("CategorizedSearch");
window.open(Mscrm.CrmUri.create("/MultiEntityQuickFind/MultiEntityQuickFind.aspx?option=0&pagemode=iframe&text="+searchtxt),'_self');
}
else
{
OpenDialogue();
}
}

function GenerateRandomNumber() {
return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function NewGuid() {
var guid = (GenerateRandomNumber() + GenerateRandomNumber() + "-" + GenerateRandomNumber() + "-4" + GenerateRandomNumber().substr(0,3) + "-" + GenerateRandomNumber() + "-" + GenerateRandomNumber() + GenerateRandomNumber() + GenerateRandomNumber()).toLowerCase();
return guid;
}

function KeyBoardEventIntialize()
{
$("#searchSelectionView").keydown(function(e) {
if(e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 27)
{
if (e.keyCode == 13 || e.keyCode == 32)
{
var x = $(".selected");
if(x != null)
if(x[0].id == "categorizedSearchLi") { onSelectionBoxChange('2'); }
if ($("#searchDiagolue").is(":visible")) {
selectOption();
}
else {
OpenDialogue();
$("#searchDiagolue").show();
}
if(e.keyCode == 32)
{
e.preventDefault();
}
}
if(e.keyCode == 27 && $("#searchDiagolue").is(":visible"))
{
selectOption();
}
if($("#searchDiagolue").is(":visible"))
{
if (e.keyCode == 38) {
var selected = $("#searchDiagolue ul li");
$("#searchDiagolue li").removeClass("selected");
$("#searchDiagolue li").attr( "aria-selected", "false" );
if (selected.prev().length == 0) {
selected.siblings().last().addClass("selected");
selected.siblings().last().attr( "aria-selected", "true" );
} else {
selected.prev().addClass("selected");
selected.prev().attr( "aria-selected", "true" );
}
}
if (e.keyCode == 40) {
var selected = $("#searchDiagolue ul li");
$("#searchDiagolue li").removeClass("selected");
$("#searchDiagolue li").attr( "aria-selected", "false" );
if (selected.next().length == 0) {
selected.siblings().first().addClass("selected");
selected.siblings().first().attr( "aria-selected", "true" );
} else {
selected.next().addClass("selected");
selected.next().attr( "aria-selected", "true" );
}
}
e.preventDefault();
}
}
});

$( "#searchSelectionView" ).focusout(function() {
$("#categorizedSearchLi").removeClass("selected");
$("#relevanceSearchLi").addClass("selected");
selectOption();
});

$( "#categorizedSearchLi" ).mousedown(function() {
onSelectionBoxChange('2');
});

}

function selectOption() {
$("#searchDiagolue").hide();
}

function ReInitializeClickEvents()
{
$( "#categorizedSearchLi" ).click(function() {
onSelectionBoxChange('2');
});
}


$(document).ready(function () {
KeyBoardEventIntialize();
SearchResultTabbingSequenceChange();
});

function SearchResultTabbingSequenceChange()
{
logoText = window.top.document.getElementById("navTabLogoTextId");
if(logoText=== "" || typeof logoText === "undefined" || logoText === null)
{
focusElement = window.document.getElementById("crmGrid_Selector");
}
else
{
focusElement = window.top.document.getElementById("navTabLogoTextId").parentElement;
if(focusElement!="" || typeof focusElement === "undefined") focusElement.setAttribute("id","adynamics365");
}

$(".listItem, .listItemMargin").keydown(function(e) {
var rID = this.id.split("_")[2];
storeCurrentRecordId = this.id;
var ad = document.getElementsByClassName(rID);
var isFocusOnREListBox = true;
var sm = "showmore_"+rID;
var sl = "showless_"+rID;
if(ad.length > 0)
{
isFocusOnREListBox = false;
if(ad.length>1)
{
$("#"+sm).keydown(function(e) {
e.stopPropagation();
e.preventdefault();
});

$("#"+sl).keydown(function(e) {
e.stopPropagation();
e.preventdefault();
});
}
}

if (e.keyCode == 9 && isFocusOnREListBox && !e.shiftKey)
{
if(logoText=== "" || typeof logoText === "undefined" || logoText === null)
{
window.document.getElementById("crmGrid_Selector").focus();
e.preventDefault();
}
else
{
window.top.document.getElementById("navTabLogoTextId").parentElement.focus();
e.preventDefault();
}
}

});

if(logoText=== "" || typeof logoText === "undefined" || logoText === null)
{
elementToFocus = window.document.getElementById("crmGrid_Selector");
}
else
{
elementToFocus = window.top.document.getElementById("adynamics365");
}
elementToFocus.onkeydown = function(evt) {
evt = evt || window.event;

if (evt.keyCode == 9)
{
if(evt.shiftKey)
{
if(storeCurrentRecordId != null)
{
$("#"+storeCurrentRecordId).focus();
}
else
{
$("#"+storeFirstRecordId).focus();
}
evt.preventDefault();
}

}
};

var e2 = document.getElementById("SearchButton");
e2.onkeydown = function(e){
e = e || window.event;
if(e.keyCode== 40)
{
$("#"+storeFirstRecordId).focus();
e.preventDefault();
}
};


if(window.parent.document.getElementById('crmContentPanel') != null)
{
if(!IS_OUTLOOK_CLIENT)
{
window.parent.document.getElementById('crmContentPanel').style.top = '84px';
}
else if(IS_OUTLOOK_CLIENT)
{
window.parent.document.getElementById('crmContentPanel').style.top = '0px'
}
}
}

function HideRecordPanel(isHide)
{
if(isHide)
{
$("#RecordTypeEntityTitleDisplay").hide();
$("#globalRecordType").hide();
$("#ownerfacet").hide();
$("#ownerNameTitleDisplay").hide();
$("#recordType").hide();
$("#globalModifiedOn").hide();
$("#globalCreatedOn").hide();
}
else{
$("#RecordTypeEntityTitleDisplay").show();
$("#globalRecordType").show();
$("#ownerfacet").show();
$("#ownerNameTitleDisplay").show();
$("#recordType").show();
$("#globalModifiedOn").show();
$("#globalCreatedOn").show();
}
}

</script>
</head>
<body onload="SetupAndExecuteSearch()" tabindex="-1" class="stage">
<form id="resultRender" runat="server" onloadeddata="HideRibbon()">
<input type="hidden" id="entityObjectTypeCode" name="entityObjectTypeCode" value=""
runat="server" />
<div id="result1" aria-live="assertive" role="alert" aria-atomic="true" style="position:absolute;right:-1px;top:-20px;"></div>
<ui:select id="entityCombo" name="entityCombo" runat="server" type="hidden" style="display: none;">
</ui:select>
<div class="mainContainer meqfmainContainer" id="mainContainer" tabindex="-1" style="background-color: white;">
<div class="primaryConductor" id="contentContainer" style="background-color: white;">
<input type="hidden" runat="server" id="recordTypeJson" />
<div class="rootViewControl_content conductorContent RootView-searchPage" style="">
<div class="loadingdiv" id="loadingdiv" style="vertical-align: middle;">
<img alt='' src='/_imgs/AdvFind/progress.gif'><br />
<div id="InviteProgress">
</div>
</div>
<div class="row dropdownbox_searchboxcontainer">




<div class="col-md-2 removingdefaultpadding" id="searchSelectionView">
<a
role="combobox"
aria-haspopup="true"
aria-autocomplete="none"
aria-readonly="true"

aria-controls="searchDiagolueUL"
aria-label="<%=CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>"
tabindex="0"
id="crmGrid_Selector" class="ms-crm-View-Name ms-crm-View-Name-View-Lite" style="position: relative;text-decoration: none; height: 37px;" href="#" onclick="OpenDialogue();" title="<%=CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>" id="crmGrid_SavedNewQuerySelector" gridid="crmGrid"><span style="line-height: 35px;" class="ms-crm-View-Name ms-crm-ViewSelector-title-associated-lite ms-crm-TextAutoEllipsis" ><%=CurrentResourceManager.GetString("ExternalSearch_Relevance_Search")%></span><span style="top: 8px;" class="ms-crm-View-icon ms-crm-ViewSelector-dropdown-icon-associated-lite"><img class="ms-crm-View-icon-associated-lite ms-crm-ImageStrip-Dropdown_Arrow" alt="Select a view" src="/_imgs/grid/dropdown_arrow.png" /></span></a>
<div id="searchDiagolue"  class="ms-crm-VS-Menu" style="width: 220px;display:none;margin-top:0px; position: absolute; z-index: 1000;">
<ul class="ms-crm-VS-Menu" id="searchDiagolueUL" role="listbox">
<li id="relevanceSearchLi" role="option" aria-selected="true" aria-label="<%=CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest selected" style="float: none;" >
<a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;">
<span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">
<img title="" alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest">

</span>

</a>
<a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;background-color: none;" onclick="onSelectionBoxChange('1')">
<span>
<span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest">
<img src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"/>
</span>
<span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span>
<nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width:120px !important;">
<span style="font-weight: normal;" title="<%=CurrentResourceManager.GetString("ExternalSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest">
<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("ExternalSearch_Relevance_Search"))%>
</span>
</nobr>
</span>
</a>

</li>
<li id="categorizedSearchLi" role="option" aria-selected="false"  aria-label="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" class="ms-crm-MenuItem-NoOutline ms-crm-VS-header-MenuItem ms-crm-VS-header-MenuItem-Rest" style="float: none;" ><a href="#" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest" style="float: right; display: none;"><span class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest"><img title="" alt="" class="ms-crm-VS-header-MenuItem-Aux ms-crm-VS-header-MenuItem-Aux-Rest"></span></a><a class="crmntfcoverride ms-crm-VS-header-MenuItem-Anchor-Rest" style="cursor: default;" onclick="onSelectionBoxChange('2')" style="background-color: none;"><span><span class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"><img src="/_imgs/DashboardSelector/crm_dashboard.png" class="ms-crm-VS-header-MenuItem-Icon ms-crm-VS-header-MenuItem-Icon-Rest"></span><span class="ms-crm-VS-header-MenuItem-Sep ms-crm-VS-header-MenuItem-Sep-Rest"></span><nobr class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest" style="width:120px !important;"><span style="font-weight: normal;" title="<%=CurrentResourceManager.GetString("CategorizedSearch_Label_Tooltip")%>" class="ms-crm-VS-header-MenuItem-Title ms-crm-VS-header-MenuItem-Title-Rest"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CategorizedSearch_Relevance_Search"))%></span></nobr></span></a></li>
</ul>
</div>
</div>
<div class="col-md-6 removingpadding_addingmargin searchbox">
<div class="form_header meqfformHeader"">
<div id="searchBoxHeader" class="searchbox searchBoxHeader meqfsearchBoxHeader" role="search">
<div class="searchboxrow" role="search">
<div class="searchboxiconcontainer meqfsearchboxiconcontainer" id="searchboxiconcontainer">
<input class="textbox allowTextSelection searchText meqfsearchTextMargin meqfSearchTextBoxWidth"
maxlength="200" id="searchTextBox" aria-label="Search Box" runat="server" onkeydown="return keyDownHandler(event);"
enableviewstate="true" style="border-color: #cd9835;" />
<button id="SearchButton" class="button meqfSearchButton meqfsearchTextMargin" type="button" runat="server" onclick="return ExecuteSearch();" style="background-image: none;" aria-label="Search, Please Press down arrow to Jump to Search Results">
<span>
<img title="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>"
id="findCriteriaImg" style="vertical-align: middle; padding-bottom: 2px" alt="<%=CurrentResourceManager.GetString("NavBarSearchButtonAltImgText")%>"
src="/_imgs/Search_White_16.png" />
</span>
</button>
</div>
</div>
</div>
</div>
</div>


</div>



<div class="row facets_searchresultcontainer">
<div class="col-md-2 removingdefaultpadding globalfacets" style="width:220px !important">
<div id="allrecordType" role="Facets">
<div name="facet">
<div class="facetsname_RecordOwnerCreatedModified">
<span title="<%=CurrentResourceManager.GetString("ExternalSearch_Relevance_Search_RecordType")%>" id="RecordTypeEntityTitleDisplay"><loc:text resourceid="ExternalSearch_Relevance_Search_RecordType" runat="server" /></span>
</div>
<div id="globalRecordType" class="commonmarginforfacetslist">
</div>
</div>
<div id="recordType" style="width: 250px; height: 400px;" name="facet">
<div id="entityType">
</div>
<div id="datetime1" style="display: none;">

</div>
<div id="datetime2" style="display: none;">

</div>
<div id="datetime3" style="display: none;"">

</div>
<div id="datetime4" style="display: none;">

</div>
</div>
<div id="ownerfacet">
<div class="facetsname_RecordOwnerCreatedModified">
<span title="<%=CurrentResourceManager.GetString("ExternalSearch_Relevance_Search_OwnerName")%>" id="ownerNameTitleDisplay"><loc:text resourceid="ExternalSearch_Relevance_Search_OwnerName" runat="server" /></span>
</div>
<div id="globalOwnerId" class="commonmarginforfacetslist">

</div>
</div>
<div id="globalModifiedOn" name="facet" style="display: none;">
</div>

<div id="globalCreatedOn" name="facet" style="display: none;">
</div>

</div>
</div>

<div class="col-md-6 removingpadding_addingmargin searchResult">
<div id="searchResultContainer" class="searchResultContainer">
<div id="searchCriteria" runat="server" style="display: none;" tabindex="0"  class="searchboxiconcontainer meqfsearchCriteria"  />
<div id="panoramaContainer" >
<div id="contentResult" tabindex="-1">
<div id="entityDiv_All">
<div tabindex="-1"  class="panoramaItem-content panoramaItem-contentMargin">
<div>
<div id="entitypic" class="listRoot All panoramaItem-control">
<div class="listHeader" id="listHeader">
</div>
<div id="scrollbarRegion_All" class="searchResultRegion_All">
<div class="group" role="Search Result">
<div class="listView" id="69_ListView">
<div class="SimpleListView" id="contentRecords">
</div>
<div id="moreRecords" style="display: none;">
<div id="moreRecordsText" class="moreRecordsText">
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
{%>
<img alt='' src='/_imgs/AdvFind/progress.gif' id="progressImage"  style="padding-right: 150px;visibility: hidden">
<% }
else
{ %>
<img alt='' src='/_imgs/AdvFind/progress.gif' id="progressImage"  style="padding-left: 150px;visibility: hidden">
<% } %>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


</div>

</div>
</div>
</form>
</body>
</html>
