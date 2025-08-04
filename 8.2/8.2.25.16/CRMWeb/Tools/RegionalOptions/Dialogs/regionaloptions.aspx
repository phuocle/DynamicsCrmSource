<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.RegionalOptions.RegionalOptionsDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">

td.settingsCol
{
padding:0 10px 0 10px;
}
DIV.ms-crm-Form-SectionBar
{
border-bottom-width: 1px;
border-bottom-style: solid;
font-weight:bold;
color:#000000;
}

Div.ms-crm-Dialog-BackgroundEx
{
overflow:hidden;border:0px
}
Div.TabContent
{
height:95%;
width:auto;
position:absolute;
overflow-y:auto;
overflow-x:hidden;
vertical-align:top;
top:0px;
bottom:-20px;
left:0px;
right:0px;
border:0px;
}

Div.ContentArea
{
vertical-align:top;
position:absolute;
top:19px;
bottom:0px;
left:0px;
right:0px;
display:block;
border:1px solid #a5acb5;
overflow-y:hidden;
overflow-x:hidden;
}

Div.Tab
{
position:absolute;
height:20px;
top:0px;
left:0px;
right:0px;
border:0px;
}

DIV.outerContainer
{
width:90%;
height:98%;
padding-top:10px;
padding-bottom:10px;
margin-left:30px;
margin-right:30px;
border:0px solid black;
overflow:hidden;
display:block;
}
DIV.ms-crm-Form-Area
{
position:relative;
overflow-x:hidden;
overflow-y:hidden;
}
</style>

<script type="text/javascript" language="javascript">

var _userSettings = "<%=UserSettings%>";
var _lcid = <%=Lcid %>;

var _dataChanged = false ;
var _dataXmlArray ;
var _applyButtonStatusArray ;
var _sampleDataXml ;
var _dataIndexXml ;

var selectDecimalSymbolElement;
var selectDigitGroupingSymbolElement;
var selectDigitGroupElement;
var selectNegativeNumberFormatElement;
var selectCurrencyFormatElement;
var selectNegativeCurrencyElement;
var selectTimeFormatElement;
var selectTimeSeparatorElement;
var selectAMSymbolElement;
var selectPMSymbolElement;
var selectCalendarTypeElement;
var selectShortDateFormatElement;
var selectLongDateFormatElement;
var selectFirstDayOfWeekElement;
var selectFirstWeekOfYearElement;
var selectDigitGroupElement;
var selectDecimalSymbolElement;
var selectDigitGroupingSymbolElement;
var selectShortDateSeparatorElement;
var selectDigitGroupControl;
var selectNegativeNumberFormatControl;
var selectCurrencyFormatControl;
var selectNegativeCurrencyFormatControl;
var selectTimeFormatControl;
var selectTimeSeparatorControl;
var selectAMSymbolControl;
var selectPMSymbolControl;
var selectCalendarTypeControl;
var selectShortDateFormatControl;
var selectLongDateFormatControl;
var selectFirstDayOfWeekControl;
var selectFirstWeekOfYearControl;
var selectDigitGroupControl;
var selectDecimalSymbolControl;
var selectDigitGroupingSymbolControl;
var selectShortDateSeparatorControl;

var checkShowWeekNumberElement;

Sys.Application.add_load(RegionalOptionsOnLoad);

var _oAttrUtlConst =
{

sCustomizationCommandObject:		"RegionalOptions",
sCommandLangCodeParameterName:		"langCode",
sCommandCalenderTypeParameterName:	"calendarType",
sCommandFormatParameterName:        "formatType",
sGetDateFormatsCommand:             "GetDateFormats"
};

function RegionalOptionsOnLoad()
{
selectDecimalSymbolElement = $get('selectDecimalSymbol');
selectDigitGroupingSymbolElement = $get('selectDigitGroupingSymbol');
selectDigitGroupElement = $get('selectDigitGroup');
selectNegativeNumberFormatElement = $get('selectNegativeNumberFormat');
selectCurrencyFormatElement = $get('selectCurrencyFormat');
selectTimeFormatElement = $get('selectTimeFormat');
selectTimeSeparatorElement = $get('selectTimeSeparator');
selectAMSymbolElement = $get('selectAMSymbol');
selectPMSymbolElement = $get('selectPMSymbol');
selectCalendarTypeElement = $get('selectCalendarType');
selectShortDateFormatElement = $get('selectShortDateFormat');
selectLongDateFormatElement = $get('selectLongDateFormat');
selectFirstDayOfWeekElement = $get('selectFirstDayOfWeek');
selectFirstWeekOfYearElement = $get('selectFirstWeekOfYear');

checkShowWeekNumberElement = $get('checkShowWeekNumber');

selectNegativeNumberFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectNegativeNumberFormat');
selectCurrencyFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectCurrencyFormat');
selectNegativeCurrencyFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectNegativeCurrencyFormat');
selectTimeFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectTimeFormat');
selectTimeSeparatorControl = Mscrm.FormControlInputBehavior.GetBehavior('selectTimeSeparator');
selectAMSymbolControl = Mscrm.FormControlInputBehavior.GetBehavior('selectAMSymbol');
selectPMSymbolControl = Mscrm.FormControlInputBehavior.GetBehavior('selectPMSymbol');
selectCalendarTypeControl = Mscrm.FormControlInputBehavior.GetBehavior('selectCalendarType');
selectShortDateFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectShortDateFormat');
selectLongDateFormatControl = Mscrm.FormControlInputBehavior.GetBehavior('selectLongDateFormat');
selectFirstDayOfWeekControl = Mscrm.FormControlInputBehavior.GetBehavior('selectFirstDayOfWeek');
selectFirstWeekOfYearControl = Mscrm.FormControlInputBehavior.GetBehavior('selectFirstWeekOfYear');
selectDigitGroupControl = Mscrm.FormControlInputBehavior.GetBehavior('selectDigitGroup');
selectDecimalSymbolControl = Mscrm.FormControlInputBehavior.GetBehavior('selectDecimalSymbol');
selectDigitGroupingSymbolControl = Mscrm.FormControlInputBehavior.GetBehavior('selectDigitGroupingSymbol');
selectShortDateSeparatorControl = Mscrm.FormControlInputBehavior.GetBehavior('selectShortDateSeparator');

initializeDataXml();

setSelectedLocaleSettings();
setUpdatedSampleStandards();


$get("cmdDialogApply").disabled = true ;
_applyButtonStatusArray = {};


updateReadingOrderFormatCodeBox() ;
UpdateReadingOrder() ;


if (selectCalendarTypeElement.options.length == 1 )
{
var oElement = document.getElementById("calendarTypeRow");
if (!IsNull(oElement))
{

oElement.style.display = "none" ;
}
}
AdjustTabAndContentWidth();
}

function initializeDataXml()
{
_dataXmlArray = {};
_dataXmlArray["tab0Tab"] = "";
_dataXmlArray["tab1Tab"] = "";
_dataXmlArray["tab2Tab"] = "";
_dataXmlArray["tab3Tab"] = "";
}

function setUpdatedSampleStandards()
{
var oArgs = getDialogArguments();
_sampleDataXml = oArgs.sSampleDataXml ;

if (!IsNull(_sampleDataXml))
{
UpdatedSampleStandards(_sampleDataXml);
}
else
{
_sampleDataXml = "" ;
}
}

function UpdatedSampleStandards(sampleStandards)
{
if ( !IsNull(sampleStandards))
{
var node ;
var oXmlDoc = XUI.Xml.LoadXml(sampleStandards);

if (IsNull(XUI.Xml.GetParserError(oXmlDoc)))
{
node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/number", null);
if (!IsNull(node))
{
$get("textPositiveNumberPreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/negativenumber", null);
if (!IsNull(node))
{
$get("textNegativeNumberPreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/currency", null);
if (!IsNull(node))
{
$get("textPositiveCurrencyPreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/negativecurrency", null);
if (!IsNull(node))
{
$get("textNegativeCurrencyPreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/time", null);
if (!IsNull(node))
{
$get("textTimeFormatPreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/shortdate", null);
if (!IsNull(node))
{
$get("textShortDatePreview").value = XUI.Xml.GetText(node) ;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "sampledata/lcid_"+_lcid+"/longdate", null);
if (!IsNull(node))
{
$get("textLongDatePreview").value = XUI.Xml.GetText(node) ;
}
}
}
}


function setSelectedLocaleSettings()
{
var oArgs = getDialogArguments();
_dataIndexXml = oArgs.sLocaleSettingsXml ;

if (IsNull(_dataIndexXml))
{
_dataIndexXml = "" ;
return ;
}

var _localeSettingsXml = _dataIndexXml ;

if ( !IsNull(_localeSettingsXml))
{
var node ;
var oXmlDoc = XUI.Xml.LoadXml(_localeSettingsXml);

if (IsNull(XUI.Xml.GetParserError(oXmlDoc)))
{
setSelectedNumberSettings(oXmlDoc);
setSelectedCurrencySettings(oXmlDoc);
setSelectedTimeSettings(oXmlDoc);
setSelectedDateSettings(oXmlDoc);
}
}
}

function setSelectedNumberSettings(oXmlDoc)
{
var node ;

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/decimalsymbolindex", null);
if (!IsNull(node))
{
selectDecimalSymbolControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/numberseparatorindex", null);
if (!IsNull(node))
{
selectDigitGroupingSymbolControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/numbergroupformatcodeindex", null);
if (!IsNull(node))
{
selectDigitGroupControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/negativeformatindex", null);
if (!IsNull(node))
{
selectNegativeNumberFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

updateRegionalOptionsDataXml("tab0Tab");
}

function setSelectedCurrencySettings(oXmlDoc)
{
var node ;

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/currencyformatcodeindex", null);
if (!IsNull(node))
{
selectCurrencyFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/negativecurrencyformatcodeindex", null);
if (!IsNull(node))
{
selectNegativeCurrencyFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

updateRegionalOptionsDataXml("tab1Tab");
}

function setSelectedTimeSettings(oXmlDoc)
{
var node ;

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/timeformatcodeindex", null);
if (!IsNull(node))
{
selectTimeFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/timeseparatorindex", null);
if (!IsNull(node))
{
selectTimeSeparatorControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/amdesignatorindex", null);
if (!IsNull(node))
{
selectAMSymbolControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/pmdesignatorindex", null);
if (!IsNull(node))
{
selectPMSymbolControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

updateRegionalOptionsDataXml("tab2Tab");
}

function CalendarEnabled()
{
return !(selectCalendarTypeElement.options.length == 1);
}

function setSelectedDateSettings(oXmlDoc)
{
var node;

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/calendartypeindex", null);
if (!IsNull(node))
{
selectCalendarTypeControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/showweeknumber", null);
if (!IsNull(node))
{
$get("checkShowWeekNumberElement").checked = parseInt(XUI.Xml.GetText(node),10) ? true : false;
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/dateformatcodeindex", null);
if (!IsNull(node))
{
selectShortDateFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/dateseparatorindex", null);
if (!IsNull(node))
{
selectShortDateSeparatorControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/longdateformatcodeindex", null);
if (!IsNull(node))
{
selectLongDateFormatControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

if ( _userSettings.toLowerCase() != "true" )
{
node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/weekstartdaycodeindex", null);
if (!IsNull(node))
{
selectFirstDayOfWeekControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}

node = XUI.Xml.SelectSingleNode(oXmlDoc, "localesettings/yearstartweekcodeindex", null);
if (!IsNull(node))
{
selectFirstWeekOfYearControl.set_selectedIndex(parseInt(XUI.Xml.GetText(node),10));
}
}

updateRegionalOptionsDataXml("tab3Tab");
}

function getRegionalOptionsIndexXml()
{
var sNumberTabXml = getNumberFormatIndexes() ;
var sCurrencyTabXml = getCurrencyFormatIndexes() ;
var sTimeTabXml = getTimeFormatIndexes() ;
var sDateTabXml = getDateFormatIndexes() ;
var sXml = "<localesettings>" + sNumberTabXml + sCurrencyTabXml + sTimeTabXml + sDateTabXml + "</localesettings>";
return sXml ;
}

function GetUpdatedSampleStandards()
{
if (_dataChanged == false )
{

return _sampleDataXml ;
}

var sNumberTabXml = getNumberFormatOptions(true) ;
var sCurrencyTabXml = getCurrencyFormatOptions(true) ;
var sTimeTabXml = getTimeFormatOptions(true) ;
var sDateTabXml = getDateFormatOptions(true) ;
var sXml = "<localesettings>" + sNumberTabXml + sCurrencyTabXml + sTimeTabXml + sDateTabXml + "</localesettings>";

var oRemoteCmd = new RemoteCommand("RegionalOptions","GetSampleDataForLocale");
oRemoteCmd.SetParameter("lcid",_lcid);
oRemoteCmd.SetParameter("customizationXml", sXml);

var oResult = oRemoteCmd.Execute();
if(oResult.Success == ERROR_NONE)
{
return XUI.Xml.GetText(oResult.Xml);
}

return _sampleDataXml ;
}

function setApplyButtonStatus(sTabId)
{
$get("cmdDialogApply").disabled = (_applyButtonStatusArray[sTabId] != true);
}


function regionalOptionDataChangeHandler(oEvent)
{
_dataChanged = true ;
$get("cmdDialogApply").disabled = false;
}

function calendarTypeOptionDataChangeHandler(oEvent)
{
_dataChanged = true ;
$get("cmdDialogApply").disabled = false;
UpdateShortDateFormats();
UpdateLongDateFormats();
}

function UpdateLongDateFormats()
{

if (!CalendarEnabled())
{
return ;
}

var formats;
var oCommand = new RemoteCommand(_oAttrUtlConst.sCustomizationCommandObject, _oAttrUtlConst.sGetDateFormatsCommand);
oCommand.SetParameter(_oAttrUtlConst.sCommandLangCodeParameterName, _lcid);
oCommand.SetParameter(_oAttrUtlConst.sCommandCalenderTypeParameterName, $get("selectCalendarType").value);
oCommand.SetParameter(_oAttrUtlConst.sCommandFormatParameterName, "LongDate");

var oResult = oCommand.Execute();
if(oResult.Success == ERROR_NONE)
{
formats = oResult.ReturnValue;
selectLongDateFormatElement.length = 0;
if(isArray(formats["string"]))
{
for(var i=0; i<formats.string.length; i++)
{
var anOption = window.document.createElement("OPTION");
selectLongDateFormatElement.options.add(anOption);
XUI.Html.SetText(anOption, formats.string[i]);
anOption.value = i;
}
}
else
{
var anOption = window.document.createElement("OPTION");
selectLongDateFormatElement.options.add(anOption);
XUI.Html.SetText(anOption, formats.string);
anOption.value = 0;
}
}

if(selectCalendarTypeElement.value == DFT_CALENDARTYPE_IDX)
{
selectLongDateFormatElement.selectedIndex = selectLongDateFormatElement.defaultSelected;
}
}

function UpdateShortDateFormats()
{

if (!CalendarEnabled())
{
return ;
}

var formats;
var oCommand = new RemoteCommand(_oAttrUtlConst.sCustomizationCommandObject, _oAttrUtlConst.sGetDateFormatsCommand);
oCommand.SetParameter(_oAttrUtlConst.sCommandLangCodeParameterName, _lcid);
oCommand.SetParameter(_oAttrUtlConst.sCommandCalenderTypeParameterName, $get("selectCalendarType").value);
oCommand.SetParameter(_oAttrUtlConst.sCommandFormatParameterName, "ShortDate");

var oResult = oCommand.Execute();
if(oResult.Success == ERROR_NONE)
{
formats = oResult.ReturnValue;
selectShortDateFormatElement.length = 0;
if(isArray(formats["string"]))
{
for(var i=0; i<formats.string.length; i++)
{
var anOption = window.document.createElement("OPTION");
selectShortDateFormatElement.options.add(anOption);
XUI.Html.SetText(anOption, formats.string[i]);
anOption.value = i;
}
}
else
{
var anOption = window.document.createElement("OPTION");
selectShortDateFormatElement.options.add(anOption);
XUI.Html.SetText(anOption, formats.string);
anOption.value = 0;
}
}

if(selectCalendarTypeElement.value == DFT_CALENDARTYPE_IDX)
{
selectShortDateFormatElement.selectedIndex = $get("selectShortDateFormat").defaultSelected;
}
}


function buildNode(node,value,attributes)
{
if (IsNull(attributes))
{
attributes="";
}
return "<" + node + " " + attributes+">" + value + "</" + node + ">";
}

function resetNumberTab()
{
selectDecimalSymbolControl.set_selectedIndex(DFT_DECIMALSYMBOL_IDX);
selectDigitGroupingSymbolControl.set_selectedIndex(DFT_NUMBERSEPARATOR_IDX);
selectDigitGroupControl.set_selectedIndex(DFT_NUMBERGROUPFMTCODE_IDX);
selectNegativeNumberFormatControl.set_selectedIndex(DFT_NEGFMTCODE_IDX);
}

function getNumberFormatOptions(bGetInnerText)
{
var retval = "";

retval += buildNode("decimalsymbol",selectDecimalSymbolControl.get_selectedText(),"xml:space=\"preserve\"");

retval += buildNode("numberseparator",selectDigitGroupingSymbolControl.get_selectedText().replace(/\x20/g, String.fromCharCode(160)),"xml:space=\"preserve\"");
retval += buildNode("numbergroupformat",selectDigitGroupElement.value);
retval += buildNode("negativeformatcode" , selectNegativeNumberFormatElement.value);

return retval;
}

function getNumberFormatIndexes()
{
var retval = "" ;

retval += buildNode("numbergroupformatcodeindex",selectDigitGroupControl.get_selectedIndex());
retval += buildNode("negativeformatindex" , selectNegativeNumberFormatControl.get_selectedIndex());
retval += buildNode("decimalsymbolindex", selectDecimalSymbolControl.get_selectedIndex());
retval += buildNode("numberseparatorindex", selectDigitGroupingSymbolControl.get_selectedIndex());

return retval ;
}

function resetCurrencyTab()
{
selectCurrencyFormatControl.set_selectedIndex(DFT_CURRENCYFMTCODE_IDX);
selectNegativeCurrencyFormatControl.set_selectedIndex(DFT_NEGCURRENCYFMTCODE_IDX);
}

function getCurrencyFormatOptions(bGetInnerText)
{
var retval = "" ;

retval += buildNode("currencyformatcode",selectCurrencyFormatElement.value);
retval += buildNode("negativecurrencyformatcode" , $get('selectNegativeCurrencyFormat').value);

return retval ;
}

function getCurrencyFormatIndexes()
{
var retval = "" ;

retval += buildNode("currencyformatcodeindex",selectCurrencyFormatControl.get_selectedIndex());
retval += buildNode("negativecurrencyformatcodeindex" , selectNegativeCurrencyFormatControl.get_selectedIndex());

return retval ;
}

function resetTimeTab()
{
selectTimeFormatControl.set_selectedIndex(DFT_TIMEFMTCODE_IDX);
selectTimeSeparatorControl.set_selectedIndex(DFT_TIMESEPARATOR_IDX);
selectAMSymbolControl.set_selectedIndex(DFT_AMSYMBOL_IDX);
selectPMSymbolControl.set_selectedIndex(DFT_PMSYMBOL_IDX);
}

function getTimeFormatOptions(bGetInnerText)
{
var retval = "" ;

retval += buildNode("timeformatcode", bGetInnerText ? selectTimeFormatControl.get_selectedText() : selectTimeFormatControl.get_dataValue());
retval += buildNode("timeseparator", selectTimeSeparatorControl.get_selectedText(),"xml:space=\"preserve\"");
retval += buildNode("amdesignator", selectAMSymbolControl.get_selectedText());
retval += buildNode("pmdesignator", selectPMSymbolControl.get_selectedText());

return retval ;
}

function getTimeFormatIndexes()
{
var retval = "" ;

retval += buildNode("timeformatcodeindex",selectTimeFormatControl.get_selectedIndex());
retval += buildNode("timeseparatorindex",selectTimeSeparatorControl.get_selectedIndex());
retval += buildNode("amdesignatorindex",selectAMSymbolControl.get_selectedIndex());
retval += buildNode("pmdesignatorindex",selectPMSymbolControl.get_selectedIndex());

return retval ;
}

function resetDateTab()
{
if (CalendarEnabled())
{
selectCalendarTypeControl.set_selectedIndex(DFT_CALENDARTYPE_IDX);



UpdateShortDateFormats();
UpdateLongDateFormats();
}

selectShortDateFormatControl.set_selectedIndex(DFT_DATEFMTCODE_IDX);
selectShortDateSeparatorControl.set_selectedIndex(DFT_DATESEPARATOR_IDX);
selectLongDateFormatControl.set_selectedIndex(DFT_LONGDATEFMTCODE_IDX);

if ( _userSettings.toLowerCase() != "true")
{
selectFirstDayOfWeekControl.set_selectedIndex(DFT_FIRSTDAY_IDX);
selectFirstWeekOfYearControl.set_selectedIndex(DFT_FIRSTWEEK_IDX);
}
}

function getDateFormatOptions(bGetInnerText)
{
var retval = "";

retval += buildNode("calendartype",selectCalendarTypeElement.value);
retval += buildNode("showweeknumber",checkShowWeekNumberElement.checked ? "1" : "0" );
retval += buildNode("dateformatcode",bGetInnerText ? selectShortDateFormatControl.get_selectedText() : selectShortDateFormatControl.get_dataValue());
retval += buildNode("dateseparator",selectShortDateSeparatorControl.get_selectedText(),"xml:space=\"preserve\"");
retval += buildNode("longdateformatcode",bGetInnerText ? selectLongDateFormatControl.get_selectedText() : selectLongDateFormatControl.get_dataValue());

if ( _userSettings.toLowerCase() != "true")
{
retval += buildNode("weekstartdaycode",selectFirstDayOfWeekElement.value);
retval += buildNode("yearstartweekcode",selectFirstWeekOfYearElement.value);
}

return retval ;
}

function getDateFormatIndexes()
{
var retval = "";

if ( _userSettings.toLowerCase() != "true")
{
retval += buildNode("weekstartdaycodeindex",selectFirstDayOfWeekControl.get_selectedIndex());
retval += buildNode("yearstartweekcodeindex",selectFirstWeekOfYearControl.get_selectedIndex());
}

retval += buildNode("calendartypeindex",selectCalendarTypeControl.get_selectedIndex());
retval += buildNode("dateformatcodeindex",selectShortDateFormatControl.get_selectedIndex());
retval += buildNode("dateseparatorindex",selectShortDateSeparatorControl.get_selectedIndex());
retval += buildNode("longdateformatcodeindex",selectLongDateFormatControl.get_selectedIndex());

return retval ;
}

function getRegionalOptionsDataXml(bCheckUpdates)
{
var retval = "";

for (var tabId in _dataXmlArray)
{
if ( bCheckUpdates )
{

if ($get("cmdDialogApply").disabled == false)
{
updateRegionalOptionsDataXml(tabId);
}
}
retval += _dataXmlArray[tabId];
}

return retval ;
}

function resetRegionalOptionsDataXml(sTabId)
{
_dataXmlArray[sTabId] = "";
}

function updateRegionalOptionsDataXml(sTabId)
{
switch (sTabId)
{
case "tab0Tab" :
_dataXmlArray[sTabId] = getNumberFormatOptions();
break;
case "tab1Tab" :
_dataXmlArray[sTabId] = getCurrencyFormatOptions();
break;
case "tab2Tab" :
_dataXmlArray[sTabId] = getTimeFormatOptions();
break;
case "tab3Tab" :
_dataXmlArray[sTabId] = getDateFormatOptions();
break;
}
}

function updateApplyButtonStatus(sTabId,bValue)
{
_applyButtonStatusArray[sTabId] = bValue ;
setApplyButtonStatus(sTabId);
}


function button_reset()
{

var bConfirm = confirm(LOC_ID_CONFIRM_RESET_ACTION);

if (bConfirm )
{
_dataChanged = true ;


resetNumberTab();
resetCurrencyTab();
resetTimeTab();
resetDateTab();


for (var tabId in _dataXmlArray)
{
updateApplyButtonStatus(tabId,true);
resetRegionalOptionsDataXml(tabId);
}
}
}


function button_apply()
{
getRegionalOptionsDataXml(true);
$get("cmdDialogApply").disabled = true ;


_sampleDataXml = GetUpdatedSampleStandards() ;
UpdatedSampleStandards(_sampleDataXml);


_dataIndexXml = getRegionalOptionsIndexXml();
}


function applychanges()
{
if (!_dataChanged)
{
closeWindow();
}
else
{
var retval = {};

retval["localesettings"] = getRegionalOptionsDataXml(true);
retval["localesettingsindex"] = getRegionalOptionsIndexXml();
retval["sampledata"] = GetUpdatedSampleStandards();

Mscrm.Utilities.setReturnValue(retval) ;
closeWindow();
}
}


function cancel()
{
if (!_dataChanged)
{
closeWindow();
}
else
{
var retval = {};


retval["localesettings"] = getRegionalOptionsDataXml(false);


retval["localesettingsindex"] = _dataIndexXml ;


retval["sampledata"] = _sampleDataXml;

Mscrm.Utilities.setReturnValue(retval);
closeWindow();
}
}




function updateReadingOrderFormatCodeBox()
{
var bRTL = LOCID_UI_DIR == "RTL" ;
for (var i=0 ; i<selectDigitGroupElement.options.length ; i++ )
{
setOptionText(selectDigitGroupElement, i, XUI.Html.GetText(selectDigitGroupElement.options[i]), bRTL);
}
for (var i=0 ; i<selectNegativeNumberFormatElement.options.length ; i++ )
{
setOptionText($get('selectNegativeNumberFormat'), i, XUI.Html.GetText($get('selectNegativeNumberFormat').options[i]), bRTL);
}
}

function setOptionText(selBox, index, sText, bForceLTR)
{


if (index != -1)
{
if(typeof(bForceLTR) != "undefined" && bForceLTR == true)
{

selBox.options[index].innerHTML = "&#x202A;" + CrmEncodeDecode.CrmHtmlEncode(sText) + "&#x202C;";
}
else
{
XUI.Html.SetText(selBox.options[index], sText);
}
}
}
function UpdateReadingOrder()
{
if ( LOCID_UI_DIR == "RTL" )
{
$get("textPositiveNumberPreview").style.direction = "ltr";
$get("textPositiveNumberPreview").style.textAlign = "right";
$get("textNegativeNumberPreview").style.direction = "ltr";
$get("textNegativeNumberPreview").style.textAlign = "right";

$get("textPositiveCurrencyPreview").style.direction = "ltr";
$get("textPositiveCurrencyPreview").style.textAlign = "right";
$get("textNegativeCurrencyPreview").style.direction = "ltr";
$get("textNegativeCurrencyPreview").style.textAlign = "right";
}
}

function AdjustTabAndContentWidth()
{
var tabWidth = $get("crmTabBar").offsetWidth;
var tabBlockWidth = document.getElementById("divTabBlock").offsetWidth;
var curWidth = (((tabWidth > tabBlockWidth) ? tabWidth : tabBlockWidth) - 3);

curWidth = curWidth - 5;
document.getElementById("divContentArea").style.width = curWidth + "px"
document.getElementById("divTab").style.width = curWidth + "px"
}
</script>

</head>
<body>
<form name="crmForm" style="height:100%; width:100%;">
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<input type="hidden" name="DataType">
<input type="hidden" name="Required">
<input type="hidden" name="OrgRequired">
<div class="outerContainer">
<div id="divTabBlock" class="ms-crm-Form-Area">
<div  id="divTab"  class="ms-crm-TabBar-Cell Tab">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="divContentArea" class="ContentArea">

<div id="tab0" class="ms-crm-Tab TabContent">
<table width="100%" style="table-layout:fixed;">
<col width="250" /><col width="200" /><col />
<tr>
<td nowrap valign="center"><label for="selectDecimalSymbol"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_DecimalSymbol" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectDecimalSymbol" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectDigitGroupingSymbol"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_DigitGroupingSymbol" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectDigitGroupingSymbol" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectDigitGroup"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_DigitGroup" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectDigitGroup" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectNegativeNumberFormat"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_NegativeNumberFormat" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectNegativeNumberFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
<td></td>
</tr>
<tr>
<td colspan="3">
<fieldset style="margin-top:40px;padding-bottom:10px;">
<legend><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_NumberFormatPreview" runat="server"/></legend>
<table id="x" style="width: 100%;">
<tr>
<td style="padding:0 10px 0 10px"><label for="textPositiveNumberPreview"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_NumberFormatPreview_Positive" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:TextBox id="textPositiveNumberPreview" runat="server"/></td>
<td style="padding:0 10px 0 10px"><label for="textNegativeNumberPreview"><loc:Text ResourceId="Regional_Option_Dlg_Number_Tab_NumberFormatPreview_Negative" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:TextBox id="textNegativeNumberPreview" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
</table>
</div>

<div id="tab1" class="ms-crm-Tab TabContent">
<table width="100%" style="table-layout:fixed;">
<col width="250" /><col width="200" /><col />
<tr>
<td nowrap valign="center"><label for="selectCurrencyFormat"><loc:Text ResourceId="Regional_Option_Dlg_Currency_Tab_CurrencyFormat" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectCurrencyFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectNegativeCurrencyFormat"><loc:Text ResourceId="Regional_Option_Dlg_Currency_Tab_NegativeCurrencyFormat" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectNegativeCurrencyFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td colspan="3">
<fieldset style="margin-top:63px;margin-bottom:10px;">
<legend><loc:Text ResourceId="Regional_Option_Dlg_Currency_Tab_CurrencyFormatPreview" runat="server"/></legend>
<table id="Table1" width="100%">
<tr>
<td style="padding:0 10px 0 10px"><label for="textPositiveCurrencyPreview"><loc:Text ResourceId="Regional_Option_Dlg_Currency_Tab_CurrencyFormatPreview_Positive" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:TextBox id="textPositiveCurrencyPreview" runat="server"/></td>
<td style="padding:0 10px 0 10px"><label for="textNegativeCurrencyPreview"><loc:Text ResourceId="Regional_Option_Dlg_Currency_Tab_CurrencyFormatPreview_Negative" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:TextBox id="textNegativeCurrencyPreview" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
</table>
</div>

<div id="tab2" class="ms-crm-Tab TabContent">
<table width="100%" style="table-layout:fixed;">
<col width="250" /><col width="200" /><col />
<tr>
<td nowrap valign="center"><label for="selectTimeFormat"><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_TimeFormat" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectTimeFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectTimeSeparator"><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_TimeSeparator" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectTimeSeparator" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectAMSymbol"><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_AMSymbol" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectAMSymbol" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectPMSymbol"><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_PMSymbol" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectPMSymbol" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
<td></td>
</tr>
<tr style="padding-top:10px;padding-bottom:5px;">
<td colspan="3">
<fieldset>
<table id="Table2" width="100%" style="padding:10px 0 10px 0;">
<tr>
<td style="padding:0 10px 0 10px">
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_Desc" runat="server"/><br/>
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_Symbol_Desc" runat="server"/><br/>
<br/>
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_Symbol_12Hr_Desc" runat="server"/><br/>
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_Symbol_24Hr_Desc" runat="server"/><br />
<br/>
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_LeadingZero_Desc" runat="server"/><br/>
<loc:Text ResourceId="Regional_Option_Tab_Time_Format_NoLeadingZero_Desc" runat="server"/><br/>
</td>
</tr>
</table>
</fieldset>
</td>
</tr>
<tr>
<td colspan="3">
<fieldset style="padding-top:5px;padding-bottom:10px;">
<legend><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_TimeFormatPreview" runat="server"/></legend>
<table id="Table3" width="100%">
<tr>
<td class="settingsCol"><label for="textTimeFormatPreview"><loc:Text ResourceId="Regional_Option_Dlg_Time_Tab_TimeFormat" runat="server"/></label></td>
<td class="settingsCol"><crm:TextBox id="textTimeFormatPreview" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
</table>
</div>

<div id="tab3" class="ms-crm-Tab TabContent">
<table width="100%" style="table-layout:fixed;">
<col width="250" /><col width="200" /><col />
<tr id="calendarTypeRow">
<td nowrap valign="center"><label for="selectCalendarType"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_CalendarType" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectCalendarType" OnChange="calendarTypeOptionDataChangeHandler(this);" runat="server"/>
</td>
</tr>
<%if(!UserSettings){ %>
<tr>
<td nowrap valign="center"><label for="selectFirstDayOfWeek"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_FirstDayOfWeek" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectFirstDayOfWeek" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/>
</td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectFirstWeekOfYear"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_FirstWeekOfYear" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectFirstWeekOfYear" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
</tr>
<% } %>
<tr>
<td valign="center"><crm:CheckBox id="checkShowWeekNumber" OnClick="regionalOptionDataChangeHandler(this);" runat="server"/><label for="checkShowWeekNumber"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_ShowWeekNumber" runat="server"/></label></td>
</tr>
<tr style="padding-top:10px;padding-bottom:5px;">
<td colspan="3">
<fieldset style="padding-top:5px;padding-bottom:10px;">
<legend><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_ShortDate" runat="server"/></legend>
<table id="short_date_table" width="100%">
<col width="250" /><col width="200" /><col />
<tr>
<td style="padding:0 10px 0 10px"><label for="selectShortDateFormat"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_ShortDateFormat" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:Select id="selectShortDateFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
</tr>
<tr>
<td style="padding:0 10px 0 10px"><label for="selectShortDateSeparator"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_ShortDateSeparator" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:Select id="selectShortDateSeparator" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
</tr>
<tr>
<td style="padding:0 10px 0 10px"><label for="textShortDatePreview"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_ShortDatePreview" runat="server"/></label></td>
<td style="padding:0 10px 0 10px"><crm:TextBox id="textShortDatePreview" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
<tr style="padding-top:10px;padding-bottom:5px;">
<td colspan="3">
<fieldset style="padding-top:5px;padding-bottom:10px;">
<legend><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_LongDate" runat="server"/></legend>
<table id="long_date_table" width="100%">
<col width="250" /><col width="200" /><col />
<tr>
<td class="settingsCol"><label for="selectLongDateFormat"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_LongDateFormat" runat="server"/></label></td>
<td class="settingsCol"><crm:Select id="selectLongDateFormat" OnChange="regionalOptionDataChangeHandler(this);" runat="server"/></td>
</tr>
<tr>
<td class="settingsCol"><label for="textLongDatePreview"><loc:Text ResourceId="Regional_Option_Dlg_Date_Tab_LongDatePreview" runat="server"/></label></td>
<td class="settingsCol"><crm:TextBox id="textLongDatePreview" runat="server"/></td>
</tr>
</table>
</fieldset>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</form>
</body>
</html>
