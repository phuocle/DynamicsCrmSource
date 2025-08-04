<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.MergeDialogForm"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">







var _commandMerge		 = new Mscrm.RemoteCommandXml("MergeRecords", "Merge");
_commandMerge.ErrorHandler = MergeErrorHandler;
var _commandGenerateForm = new Mscrm.RemoteCommandXml("MergeRecords", "GenerateMergeForm");
_commandGenerateForm.ErrorHandler = MergeErrorHandler;
var _lookupOneItems;
var _lookupTwoItems;
var _sDataXml			 = "";
var _iObjectTypeCode	 = <%=ObjectTypeCode.ToString("D", CultureInfo.InvariantCulture)%>;
var _bMergeFieldData	 = false;
var _flsError = false;

var _mergeRecordOne = null;
var _mergeRecordTwo = null;

var radio1;
var radio2;

Sys.Application.add_load(function() {

_mergeRecordOne = Mscrm.FormControlInputBehavior.GetBehavior('MergeRecordOne');
_mergeRecordTwo = Mscrm.FormControlInputBehavior.GetBehavior('MergeRecordTwo');
radio1 = $get("radio1");
radio2 = $get("radio2");
disableOkButton();
_mergeRecordOne.add_setAdditionalParams(filterLookupBy);
_mergeRecordTwo.add_setAdditionalParams(filterLookupBy);
_mergeRecordOne.add_change(disableOkButton);
_mergeRecordTwo.add_change(disableOkButton);
});



function disableOkButton(sender, args)
{
_flsError = false;
radio1.disabled = false;
radio2.disabled = false;

_lookupOneItems	  = _mergeRecordOne.Items();
_lookupTwoItems   = _mergeRecordTwo.Items();

var item;

if (_lookupOneItems.length == 1)
{
item			= _lookupOneItems[0];
item.onclick	= "openAsReadOnlyForm(" + item.type + ",\"" + item.id + "\")"
_mergeRecordOne.UpdateItem(item.id, item);
}

if (_lookupTwoItems.length == 1)
{
item			= _lookupTwoItems[0];
item.onclick	= "openAsReadOnlyForm(" + item.type + ",\"" + item.id + "\")"
_mergeRecordTwo.UpdateItem(item.id, item);
}

$get("butBegin").disabled = (_lookupTwoItems.length == 0 || _lookupOneItems.length == 0);


displayFields();
_bMergeFieldData = false;
}



function filterLookupBy(sender, args)
{
var oLookup = sender;
var oFilter = (oLookup.get_element().id == "MergeRecordOne")? _mergeRecordTwo : _mergeRecordOne;

var oaLookupItems = oFilter.Items();


if (oaLookupItems.length == 1)
{

oLookup.AddParam("customerid", oaLookupItems[0].id);
}
else
{


oLookup.AddParam("customerid", "");
}
}

function applychanges()
{

if (_lookupOneItems[0].id == _lookupTwoItems[0].id)
{
alert(LOCID_DUPLICATE_RECORDS_MESSAGE);
return;
}


DisplayActionMsg(LOCID_MERGING_RECORDS_MESSAGE, 350, 150);


window.setTimeout("doMerge()", 100);
}


function doMerge()
{
var sMasterId;
var sSubordinateId;


if (radio1.checked)
{
sMasterId		= _lookupOneItems[0].id;
sSubordinateId	= _lookupTwoItems[0].id;
}
else
{
sMasterId		= _lookupTwoItems[0].id;
sSubordinateId	= _lookupOneItems[0].id;
}




var result = callMerge(sMasterId, sSubordinateId, 1);





if (result.get_success())
{
var iWarningStart	= result.get_returnValue().indexOf("<warning>");
if (iWarningStart != -1)
{

iWarningStart += 9;

var sWarning = CrmEncodeDecode.CrmXmlDecode(result.get_returnValue().substring(iWarningStart, result.get_returnValue().indexOf("</warning>")));



if (!window.confirm(sWarning))
{

HideActionMsg();
return false;
}
else
{



result = callMerge(sMasterId, sSubordinateId, 0);
}
}
}



_sDataXml = "";





if (result.get_success())
{
alert(LOCID_MERGE_SUCCESS_MESSAGE);
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}
else
{

HideActionMsg();
return false;
}
}




function callMerge(sMasterId, sSubordinateId, sParentingCheck)
{
var sUpdate = "false";

var dataXml = "";


if (_bMergeFieldData)
{
sUpdate	= "true";
if (_sDataXml == "")
{
_sDataXml = saveFieldData();
}
dataXml = _sDataXml;
}
else
{

dataXml = "";
}
_commandMerge.setParameter("masterId", sMasterId);
_commandMerge.setParameter("subordinateId", sSubordinateId);
_commandMerge.setParameter("update", sUpdate);
_commandMerge.setParameter("parentingCheck", sParentingCheck);
_commandMerge.setParameter("objectTypeCode", _iObjectTypeCode);



_commandMerge.setContent(dataXml);

return _commandMerge.execute();
}



function generateMergeForm(sRecordOne, sRecordTwo, bFirstIsMaster)
{
_commandGenerateForm.setParameter("recordOne", sRecordOne);
_commandGenerateForm.setParameter("recordTwo", sRecordTwo);
_commandGenerateForm.setParameter("objectTypeCode", _iObjectTypeCode);
_commandGenerateForm.setParameter("masterRecord", (bFirstIsMaster) ? "1" : "2");

var result = _commandGenerateForm.execute();

if (result.get_success())
{
return result.get_returnValue();
}
else
{


return "";
}
}




function displayFields()
{
var recordOneId = (_lookupOneItems.length == 0) ? "" : _lookupOneItems[0].id;
var recordTwoId = (_lookupTwoItems.length == 0) ? "" : _lookupTwoItems[0].id;





$get("mergeFields").innerHTML = generateMergeForm(recordOneId, recordTwoId, radio1.checked);
if(_flsError == true)
{
radio1.disabled = true;
radio2.disabled = true;
$get("butBegin").disabled = true;
return;
}




var crmMergeForm =  $get('crmMergeForm')
var iRows		= crmMergeForm.rows.length;
var oSectionRow = crmMergeForm.rows[1];
var iFields		= 0;
var iSectionOne = 1;
var iSectionTwo = 3;



for (var i = 2; i <= iRows; i++)
{
if (i == iRows || crmMergeForm.rows[i].className == "mergesection")
{
if (iFields == 0)
{


oSectionRow.style.display = "none";
}
else
{



var oCheckOne = XUI.Html.DomUtils.GetFirstChild(oSectionRow.cells[iSectionOne]);
var oCheckTwo = XUI.Html.DomUtils.GetFirstChild(oSectionRow.cells[iSectionTwo]);

oCheckOne.fields = iFields;
oCheckTwo.fields = iFields;

if (oCheckOne.checked)
{
oCheckOne.selectedFields = iFields;
oCheckTwo.selectedFields = 0;
}
else
{
oCheckOne.selectedFields = 0;
oCheckTwo.selectedFields = iFields;
}




iFields = 0;
}



oSectionRow = crmMergeForm.rows[i];
}
else
{


XUI.Html.DomUtils.GetFirstChild(crmMergeForm.rows[i].cells[iSectionOne]).section = XUI.Html.DomUtils.GetFirstChild(oSectionRow.cells[iSectionOne]);
XUI.Html.DomUtils.GetFirstChild(crmMergeForm.rows[i].cells[iSectionTwo]).section = XUI.Html.DomUtils.GetFirstChild(oSectionRow.cells[iSectionTwo]);

iFields++;
}

}
}

function MergeErrorHandler(sHResult, oXmlNode)
{
if(sHResult == "0x8004F504")
{
_flsError = true;
alert(LOCID_MERGE_FLSREADERROR);
}
else if(sHResult == "0x8004F503")
{
_flsError = true;
alert(LOCID_MERGE_FLSUPDATEERROR);
}
else
{
RemoteCommandDefaultErrorHandler(sHResult, oXmlNode);
}
}




function updateCell(o)
{
if (o.className != "mergecell selected")
{
var iFieldOne		= 1;
var iFieldTwo		= 3;
var oRadioOne		= XUI.Html.DomUtils.GetFirstChild(o);
var oRow			= o.parentNode;
oRadioOne.checked	= true;




var oRadioTwo = (o.cellIndex == iFieldOne) ? XUI.Html.DomUtils.GetFirstChild(oRow.cells[iFieldTwo]) : XUI.Html.DomUtils.GetFirstChild(oRow.cells[iFieldOne]);



o.className											= "mergecell selected";
XUI.Html.DomUtils.GetNextSibling(o).className		= "mergecell selected";



oRadioTwo.parentNode.className				= "mergecell";
XUI.Html.DomUtils.GetNextSibling(oRadioTwo.parentNode).className	= "mergecell";



var oCurrentSectionName = oRadioOne.parentNode.getAttribute("section");
var oOtherSectionName	= oRadioTwo.parentNode.getAttribute("section");

var oCurrentSection = $get(oCurrentSectionName);
var oOtherSection = $get(oOtherSectionName);

var oCurrentSectionSelectedFields = oCurrentSection.getAttribute('selectedFields');
var oOtherSectionSelectedFields = oOtherSection.getAttribute('selectedFields');

oCurrentSection.setAttribute('selectedFields',++oCurrentSectionSelectedFields);

if(oOtherSectionSelectedFields > 0)
oOtherSection.setAttribute('selectedFields',--oOtherSectionSelectedFields);

oCurrentSection.checked = (oCurrentSection.getAttribute('selectedFields') == oCurrentSection.fields);
oOtherSection.checked = false;




$get("dataCheckBox").checked = false;



_bMergeFieldData = true;
}
}



function selectRecord(o)
{
var crmMergeForm = $get("crmMergeForm");
if (!IsNull(crmMergeForm) && !IsNull(crmMergeForm.rows[1]))
{


var iRecordColumn = (o.id == "record1") ? "1" : "3";
var iNextSection  = selectSection(XUI.Html.DomUtils.GetFirstChild(crmMergeForm.rows[1].cells[iRecordColumn]));

while (iNextSection != -1)
{
iNextSection  = selectSection(XUI.Html.DomUtils.GetFirstChild(crmMergeForm.rows[iNextSection].cells[iRecordColumn]));
}
}
}



function selectSection(o)
{
var currentCell;

var index	= o.parentNode.cellIndex;



var oRow	= XUI.Html.DomUtils.GetNextSibling(o.parentNode.parentNode);



while (oRow != null && oRow.getAttribute('name') == "data")
{
currentCell = oRow.cells[index];

if (!XUI.Html.DomUtils.GetFirstChild(currentCell).checked)
{
updateCell(currentCell);
}
oRow = XUI.Html.DomUtils.GetNextSibling(oRow);
}



return (oRow != null) ? oRow.rowIndex : -1;
}



function selectData(o)
{

var crmMergeForm = document.getElementById("crmMergeForm");
if(IsNull(crmMergeForm))
{
return;
}

if (o.checked)
{




var master		= (radio1.checked) ? "1" : "3";
var subordinate = (radio1.checked) ? "3" : "1";
var oRow		= crmMergeForm.rows[1];



while (oRow != null)
{


if (oRow.getAttribute('name') == "data")
{
if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[master]).getAttribute("returnValue") != "")
{


updateCell(oRow.cells[master]);
}
else if (XUI.Html.DomUtils.GetFirstChild(oRow.cells[subordinate]).getAttribute("returnValue") != "")
{


updateCell(oRow.cells[subordinate]);
}
else
{


updateCell(oRow.cells[master]);
}
}

oRow = XUI.Html.DomUtils.GetNextSibling(oRow);
}



o.checked = true;
}
else
{



radio1.checked ? selectRecord(record1) : selectRecord(record2);
}
}



function changeRecord(o)
{

if (o.getAttribute('wasChecked') == 0)
{


var oRadio = (o.id == "radio1") ? radio2 : radio1;



o.setAttribute('wasChecked',1);
oRadio.setAttribute('wasChecked',0);



var record1 = $get('record1');
var record2 = $get('record2');

o.id == "radio1" ? selectRecord(record1) : selectRecord(record2);
}
}



function saveFieldData()
{
var crmMergeForm = $get("crmMergeForm");


var fieldOne = 1;
var fieldTwo = 3;



var oData1;
var oData2;
var xml1;
var xml2;


var leftMasterEntity = radio1.checked;



var oRow = crmMergeForm.rows[1];

var updateXml = "<" + crmMergeForm.rootElement + ">";



while (oRow != null)
{


if (oRow.getAttribute('name') == "data")
{



if( (leftMasterEntity && XUI.Html.DomUtils.GetFirstChild(oRow.cells[fieldTwo]).checked) || (!leftMasterEntity && XUI.Html.DomUtils.GetFirstChild(oRow.cells[fieldOne]).checked))
{
oData1 = XUI.Html.DomUtils.GetFirstChild(oRow.cells[fieldOne]);
oData2 = XUI.Html.DomUtils.GetFirstChild(oRow.cells[fieldTwo]);

xml1 = addXmlNode( oData1 );
xml2 = addXmlNode( oData2 );

if( xml1 != xml2 )
{


updateXml += leftMasterEntity ? xml2 : xml1;
}
}

}



oRow = XUI.Html.DomUtils.GetNextSibling(oRow);
}

updateXml += "</" + crmMergeForm.rootElement + ">";

return updateXml;
}



function addXmlNode(oData)
{
var typeAttribute = "";




if (!IsNull(oData.getAttribute("objectTypeCode")))
{
typeAttribute = " type='" + CrmEncodeDecode.CrmXmlEncode(Trim(oData.getAttribute("objectTypeCode"))) + "'";
}
return "<" + CrmEncodeDecode.CrmXmlEncode(oData.getAttribute("name")) + typeAttribute + ">" + CrmEncodeDecode.CrmXmlEncode(Trim(oData.getAttribute("returnValue")))  + "</" + CrmEncodeDecode.CrmXmlEncode(oData.getAttribute("name")) + ">";
}



function cancel()
{
closeWindow();
}



function openAsReadOnlyForm(oType, oId)
{
var oUrl;

switch (Number(oType))
{
case Service:
oUrl = Mscrm.CrmUri.create("/sm/services/readonly.aspx");
oUrl.get_query()["objTypeCode"] = oType;
oUrl.get_query()["id"] = oId;

openStdWin(oUrl, "readonly" + buildWinName(oId), 560, 525);
break;
default:


openObj(oType,oId);
break;
}
}

</script>
<style type="text/css">
DIV.ms-crm-POPUP-Menu
{
display:none;
}
</style>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

<table width="100%" cellspacing="0" cellpadding="0" class="dlg_merge_MainTable">
<col width="135" />
<col width="20" />
<col />
<tr height="20">
<td colspan="3">
<table cellspacing="0" cellpadding="0" class="stdTable dlg_merge_HeaderTable">
<col width="16"/><col />
<tr class="ms-crm-Bold-Header">
<td class="dlg_merge_td_Title"></td>
<td class="dlg_merge_td_Title"><loc:Text ResourceId="Merge_Fields_Title" runat="server"/></td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="3">
<table width="100%" cellspacing="0" cellpadding="0" style="table-layout:fixed;">
<tr height="30px">
<td colspan="5" class="dlg_merge_Main_td">
<table cellspacing="0" cellpadding="0" class="stdTable">
<col width="186" />
<col width="20" />
<col />
<col width="20" />
<col />
<col width="20" />
<tr height="2px"><td></td></tr>
<tr height="30px">
<td class="ms-crm-Bold-Header" style="text-indent:5px;"><loc:Text ResourceId="Merge_Master_Record_Field" runat="server"/></td>
<td class="dlg_merge_td_MasterRecord">
<input tabindex="1" class="radio" type="radio" name="type" onclick="changeRecord(this);" id="radio1" checked hidefocus="true" wasChecked="1" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MergeRecords.SelectMaster.Title' runat='server'/>"/>
</td>

<td class="dlg_merge_td_RecordOne" id="MergeRecordOne_d">
<sdk:LookupControl tabindex="1" id="MergeRecordOne" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
<td class="dlg_merge_td_SubRecord">
<input tabindex="1" class="radio" type="radio" name="type" onclick="changeRecord(this);" id="radio2" hidefocus="true" wasChecked="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='MergeRecords.SelectSubordinate.Title' runat='server'/>"/>
</td>

<td class="dlg_merge_td_MergeRecordTwo" id="MergeRecordTwo_d">
<sdk:LookupControl tabindex="1" id="MergeRecordTwo" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
<td  />
</tr>
<tr height="2px"><td></td></tr>
</table>
</td>
</tr>
<tr>



<td colspan="5" ><div id="mergeFields" class="merge"></div></td>
</tr>
</table>
</td>
</tr>
<tr height="5px"><td></td></tr>
<tr>
<td></td>
<td>
<input type="checkbox" tabindex="1" id="dataCheckBox" onclick="selectData(this)" class="checkbox" />
</td>
<td class="dlg_merge_td_SelectData"><label for="dataCheckBox"><loc:Text ResourceId="Merge_Select_All_Form_Data_Label" runat="server"/></label></td>
</tr>
<tr height="10px"><td></td></tr>
<tr>
<td colspan="3" valign="top" style="color:#555555;">
<cnt:AppNotifications id="FormNotifications" runat="server" />
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
