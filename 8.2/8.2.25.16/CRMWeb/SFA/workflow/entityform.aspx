
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Sfa.EntityForm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
p {margin:0px;}
</style>

<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(formTitle)%></title>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript" type="text/javascript">

var _bIsCreateMode = true;
var oldTemplateId=null;
var _firstElement = null;
var _pricefield = null;
var _defaultuomid = null;
var _transactioncurrencyid = null;
var _hidMode = null;
var _hidEntityName = null;
var _hidTemplateId = null;
Sys.Application.add_load(function()
{




HookupEventsForUOMFields();



_pricefield = GetCurrencyField();
_stageIdField = GetStageIdField();
_processId = null;
_defaultuomid = Mscrm.FormControlInputBehavior.GetBehavior('defaultuomid');
_transactioncurrencyid = Mscrm.FormControlInputBehavior.GetBehavior('transactioncurrencyid');
if (!IsNull(_pricefield))
{
$addHandler(_pricefield.get_element(), 'click', CurrencyChange);
}

<%
RenderInitCalendar();

%>
_hidMode = $get('hidMode');
_hidEntityName = $get('hidEntityName');
_hidTemplateId = $get('hidTemplateId');
var crmFormCtrl = $find("crmForm");
crmFormCtrl.add_onSave(CallOnSave);



crmFormCtrl.SetViewportTabSection("section", "{C57EC4C8-F4BE-4bd5-9F80-BC22211058EB}",false);


if(_hidMode.value == "1")
{
_bIsCreateMode = false;
}

var setOwnerAsNotRequired = false;
if (_bIsCreateMode)
{
setOwnerAsNotRequired = true;
}

if(_hidEntityName.value == "email" && _hidMode.value != "3")
{

LoadEmailBody();
setOwnerAsNotRequired = true;
}


if(_hidMode.value == "3")
{

SelectGrid();
AttachTemplateTypeListHandlers();
SetOldTemplateId();
crmFormCtrl.add_onClose(EmailTemplateOnClose);
}


if (setOwnerAsNotRequired)
{

crmFormCtrl.SetFieldReqLevel("ownerid", false);
}
else
{





}

var notificationString = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(LoadWorkflowCurrencyNotification())%>;

if (notificationString.length > 0)
{
if (!IsNull(_transactioncurrencyid))
{
var transCurrencyItems = _transactioncurrencyid.Items();
if (transCurrencyItems.length == 1)
{
transCurrencyItems[0].category = LookupItemCategories.UNKNOWN;
transCurrencyItems[0].displayClass = "ms-crm-Lookup-Unresolved";
_transactioncurrencyid.UpdateItem(transCurrencyItems[0].id, transCurrencyItems[0], false);
}
}
$find("WorkflowNotifications").AddNotification("invalidCurrency", Mscrm.Severity.SEVERITYERROR, "", notificationString);
}


crmFormCtrl.set_bypassValidation(true);

PageOnLoad();

});


function HookupEventsForUOMFields()
{
var entityName = GetValueForTag('entityname=');
if (!IsNull(entityName) && entityName == "product")
{
EnableDisableUOMField();
var defaultuomscheduleid = $get('defaultuomscheduleid');
if (!IsNull(defaultuomscheduleid) && !IsNull(_defaultuomid))
{
$addHandler(defaultuomscheduleid, "change", EnableDisableUOMField);
_defaultuomid.add_setAdditionalParams(SetAdditionalParamsForUOMField);
}
}
}

function EnableDisableUOMField()
{
var defaultuomscheduleid =  Mscrm.FormControlInputBehavior.GetBehavior('defaultuomscheduleid');
if (!IsNull(_defaultuomid) && !IsNull(defaultuomscheduleid))
{
_defaultuomid.set_disabled(defaultuomscheduleid.get_dataValue() == null);
if (_defaultuomid.get_disabled())
{
_defaultuomid.Clear();
}
}
}

function SetAdditionalParamsForUOMField(sender, args)
{
sender.AddDependantParameters("defaultuomscheduleid");
}


function EmailTemplateOnClose(sender, args)
{
if(_hidMode.value != "3")
{
return;
}
if(!$find("crmForm").get_bypassValidation())
{
if(oldTemplateId != ValidateSendEmailTemplate(true))
{
args.preventDefault();
}
}
return;
}

function SetOldTemplateId()
{
oldTemplateId = _hidTemplateId.value;
if( IsNull(oldTemplateId) || oldTemplateId == "" )
{
oldTemplateId = ValidateSendEmailTemplate(true);
}

if( !IsNull(oldTemplateId))
{
oldTemplateId = oldTemplateId.toUpperCase();
}
}


function SetCurrency()
{
if (!IsNull(_pricefield))
{
AddTransactionCurrencyParam(_pricefield);
}
}

function FilterStageLookup()
{
if (!IsNull(_stageIdField))
{
var command = new RemoteCommand("Workflow", "GetProcessIdForEntity");
command.SetParameter("entityName", GetValueForTag('entityname='));
var oResult = command.Execute();
if (oResult.Success && !IsNull(oResult.ReturnValue))
{
_processId = oResult.ReturnValue;
_stageIdField.add_setAdditionalParams(AddStageFilter);
}
}
}

function GetStageIdField()
{
var stageId = Mscrm.FormControlInputBehavior.GetBehavior('activestageid');
if (!IsNull(stageId))
{
return stageId;
}
return null;
}

function AddStageFilter(sender, args)
{
if (!IsNull(_processId))
{
var fetchXml = '<filter type="and"><condition attribute="processid" operator="eq" value="' + _processId + '"/></filter>';
sender.addCustomFilter(fetchXml);
}
}

function GetCurrencyField()
{
var entityName = GetValueForTag('entityname=');
switch(entityName)
{
case "opportunity":
case "quote":
case "salesorder":
case "invoice":
var pricelevelid = Mscrm.FormControlInputBehavior.GetBehavior('pricelevelid');
if (!IsNull(pricelevelid))
{
return pricelevelid;
}
break;
case "account":
case "contact":
var defaultpricelevelid = Mscrm.FormControlInputBehavior.GetBehavior('defaultpricelevelid');
if (!IsNull(defaultpricelevelid))
{
return defaultpricelevelid;
}
break;
case "campaign":
var pricelistid = Mscrm.FormControlInputBehavior.GetBehavior('pricelistid');
if (!IsNull(pricelistid))
{
return pricelistid;
}
break;
default:
return null;
}
}

function CurrencyChange()
{
if (!IsNull(_pricefield))
{
if (!IsNull(_transactioncurrencyid) && !IsNull(_transactioncurrencyid.get_dataValue()))
{
SetCurrency();
}
else
{
_pricefield.AddParam("transactioncurrencyid", "");
}
}
}


function CallOnSave(sender, args)
{
try
{

var templateId = null;

if(_hidMode.value == "3")
{
templateId = ValidateSendEmailTemplate();

if(IsNull(templateId))
{
return;
}
}

var ret = 0;
var crmFormCtrl = $find("crmForm");



ret = crmFormCtrl.BuildXml(true, false, false, true);




if ((ret == 1) ||
(!_bIsCreateMode && (ret == 3))  ||
(_hidMode.value == "3"  )
)
{


var retVal = $get('crmFormSubmit').crmFormSubmitXml.value;
if(_hidMode.value == "1")
{
retVal  = filterCheckbox(retVal);

}
Mscrm.Utilities.setReturnValue(retVal);

if(!IsNull(templateId))
{
Mscrm.Utilities.setReturnValue(retVal + "<templateid>" + templateId + "</templateid>");
}




crmFormCtrl.set_saving(true);
closeWindow();
}



args.preventDefault();

}
catch (e)
{}
}



function filterCheckbox(buildXml)
{
var checkBoxControlList = document.getElementById("checkBoxControlList");
var checkboxFields = checkBoxControlList.value;

if(IsNull(checkboxFields) || checkboxFields == "")
{
return buildXml;
}
var fieldLists = checkboxFields.split(";");
var i;
var newBuildXml = buildXml;

for(i=0;i<fieldLists.length -1; i++)
{
var fieldName = fieldLists[i];
if(fieldName.length>0)
{
newBuildXml = newBuildXml.replace("<"+fieldName+">0"+"</" + fieldName+">", "");
}
}

return newBuildXml;
}

function PageOnLoad()
{
var entityName = GetValueForTag('entityname=');
var primaryEntityName = GetValueForTag('primaryentity=');
var relatedAttributeName = GetValueForTag('relatedattributename=');
var readOnlyForm = GetValueForTag('readonlymode=');
if (readOnlyForm == 'true')
{
SetReadOnlyForm(true);
}

if(_hidMode.value == "3")
{
entityName = "email";
}

GenerateAttributeTypeMapping (entityName, primaryEntityName, relatedAttributeName, _bIsCreateMode);
_firstElement = document.activeElement;


PopulateSlugControls($get('hidSlugInfo').value);


SetFieldFocusAtOnLoad(_firstElement);


CurrencyChange();

FilterStageLookup();


var readOnlyForm = GetValueForTag('readonlymode=');
if (readOnlyForm == 'true') {
var elem = $get("attachmentsGrid_gridMenuBar");
if(!IsNull(elem)) Mscrm.Utilities.enableDisableDomElement(elem, true);
}
}
</script>
</head>
<body style="overflow:hidden">
<div style="padding-bottom: 5px">
<mnu:appgenericmenubar id="crmMenuBar" runat="server" />
</div>


<div style="position: absolute; width: 100%; top: 108px; bottom: 25px;" class="ms-crm-FormAndRIContainer">
<div class="ms-crm-Dialog-Notification-Bar">
<cnt:appnotifications id="WorkflowNotifications" runat="server" />
</div>
<div id="tdAreas" class="ms-crm-Form-Background">
<div id="areaForm" class="ms-crm-Form-Area ms-crm-Form-AreaContainer">
<frm:workflowentityform id="crmForm" runat="server" />
</div>
</div>
</div>
<input type="hidden" id="hidEntityName" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString["entityname"])%>" />
<input type="hidden" id="hidMode" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString["mode"])%>" />
<input type="hidden" id="hidTemplateId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncodeForFormatString(Request.QueryString["templateId"])%>" />
<input type="hidden" id="hidStepId" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString["stepId"])%>" />
<input type="hidden" id="hidCurrentEntityPath" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString["entityFullName"])%>" />
<input type="hidden" id="checkBoxControlList" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(checkBoxControlList)%>" />
<input type="hidden" id="hidSlugInfo" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmXmlEncode(SlugInfo)%>" />
</body>
</html>


