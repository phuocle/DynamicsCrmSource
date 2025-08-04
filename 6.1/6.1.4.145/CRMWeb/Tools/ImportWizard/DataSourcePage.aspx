<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.WebImport.DataSourcePage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript" type="text/javascript">

var importMapIdForAutoMap = "<% =Guid.Empty.ToString("B") %>"

var selectedImportMapId;
var cancelClicked = false;
var errorInMapping = false;
var dataSourceCtrl = null;

function OnBeforeWindowUnload(oEvent)
{
oEvent = oEvent.rawEvent;

if (cancelClicked)
{
if (WizardGetProperty("MapChanged") == true)
{
oEvent.returnValue = LOCID_MAPPING_WILLBE_LOST;
return LOCID_MAPPING_WILLBE_LOST;
}
}
else
{
oEvent.returnValue = " ";
return " ";
}
}

function GetNextPageDefinition()
{
var nextPageUrl = GetNextWizardPageUrl("DataSourcePage");
var propertiesList = new Array("ImportId", "ImportMapId", "OriginalImportFileId", "MapXml");
var postData = ConstructPostData(propertiesList);
return new NextPageDefinition(nextPageUrl, postData);
}

function WantToSkip()
{
var importType = WizardGetProperty("ImportType");

if (importType == ImportType_CreateWithTemplate
&& WizardGetProperty("WizardMode") == 0)
{
handlePageChange(true);
if(errorInMapping == false)
{
return true;
}
}
else
{
return false;
}
}

function UpdateDataSourceSettings()
{
if (dataSourceCtrl.get_isDirty())
{
WizardSetProperty("ImportMapId", selectedImportMapId);
}
}


function handlePageChange(bWaitForCompletion)
{
UpdateDataSourceSettings();
if (dataSourceCtrl.get_isDirty() ||
IsNull(WizardGetProperty("MapXml")) ||
WizardGetProperty("MapXmlImportId") != WizardGetProperty("ImportMapId") ||
WizardGetProperty("DelimitersUpdated") == true )
{
SetProgressMessageDisplayState(true);
var propertiesToPost = new Array("ImportId", "ImportMapId", "OriginalImportFileId", "ImportType");

WizardSetProperty("MapXml", null);
if(bWaitForCompletion)
{
disableAllButtons();
var oResult = CallImportWebService("GetImportMapXml", propertiesToPost);
autoMappingDone(oResult, false);
return false;
}
else
{
CallImportWebService("GetImportMapXml", propertiesToPost, function(oResult) {autoMappingDone(oResult, true);} );
disableAllButtons();
return true;
}
}
else
{
return false;
}
}


function moveNext()
{
if(handlePageChange(false) == false)
{
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}


function moveBack()
{
UpdateDataSourceSettings();
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.BACK);
}


function autoMappingDone(oResult, bMoveNext)
{
if(oResult.Success == true)
{
errorInMapping = false;
WizardSetProperty("DelimitersUpdated", false);
WizardSetProperty("MapXml", oResult.ReturnValue);
WizardSetProperty("MapXmlImportId", WizardGetProperty("ImportMapId"));
if(bMoveNext)
{
detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}
else
{
errorInMapping = true;
SetProgressMessageDisplayState(false);
enableAllButtons();

}
}

function OnCancelClicked()
{
cancelClicked = true;
WizardNavigate(_WizardNavigateEnum.CANCEL);
}

Sys.Application.add_load(PageOnLoad);
function PageOnLoad()
{
dataSourceCtrl = Mscrm.FormControlInputBehavior.GetBehavior('crmDataSource');

var cancelBtn = document.getElementById("buttonCancel");
cancelBtn.onclick = OnCancelClicked;






if (IsNull(WizardGetProperty("WizardMode")))
{
WizardSetProperty("WizardMode", 0);
}

WizardSetProperty("JumpBackToDataSourcePage", false);

var importMapId = WizardGetProperty("ImportMapId");
if (!IsNull(importMapId))
{
dataSourceCtrl.set_dataValue(importMapId);
dataSourceCtrl.set_defaultValue(importMapId);
}
else
{
dataSourceCtrl.set_dataValue(importMapIdForAutoMap);
dataSourceCtrl.set_defaultValue(importMapIdForAutoMap);
}

OnDataSourceChange();
OnDataSourcePageResize();

if (!WantToSkip())
{
attachWindowOnUnload(OnWizardUnload, parent.window);
attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
}
}

function OnDataSourceChange()
{
var enableNextButton = true;


if (IsNull(dataSourceCtrl.get_dataValue()))
{
enableNextButton = false;
}

selectedImportMapId = dataSourceCtrl.get_dataValue();

WizardSetButtonEnabled(enableNextButton, _WizardButtonsEnum.NEXTBUTTON);
}

function OnDataSourcePageResize()
{
var crmDataSource = document.getElementById("crmDataSource");

crmDataSource.size = crmDataSource.children.length + crmDataSource.options.length;

var mainBody = $get("mainBody");
var wizardFormMain = $get ("wizardFormMain");
var resizingDone = false;

while( mainBody.offsetHeight < wizardFormMain.offsetHeight
&& crmDataSource.size > 0)
{
resizingDone = true;
crmDataSource.size = crmDataSource.size + 1;
}

while( mainBody.offsetHeight > wizardFormMain.offsetHeight
&& crmDataSource.size > 1)
{
resizingDone = true;
crmDataSource.size = crmDataSource.size - 1;
}


if(resizingDone && crmDataSource.size > 1)
{
crmDataSource.size = crmDataSource.size - 1;
}
}

</script>
</head>
<body onresize="OnDataSourcePageResize();">
<frm:WizardForm id="crmForm" runat="server">
<div id="mainBody">
<loc:Text ResourceId="ImportWizard.DataSourcePage.Description2" runat="server" />
<br />
<br />
<div class="mscrm-iw-Border" style="width:100%">
<cui:select id="crmDataSource" runat="server"/>
</div>
</div>
<div id="progressDiv" class="mscrm-iw-ProgressDiv">
<table class="mscrm-iw-ProgressTable">
<tr>
<td valign='middle' align='center'>
<img alt='' src='/_imgs/AdvFind/progress.gif' />
<br />
<label id="progressMessage">
<nobr>
<loc:Text ResourceId="ImportWizard.DataSourcePage.ProgressMessage" runat="server"/>
</nobr>
</label>
</td>
</tr>
</table>
</div>
</frm:WizardForm>
</body>
</html>
