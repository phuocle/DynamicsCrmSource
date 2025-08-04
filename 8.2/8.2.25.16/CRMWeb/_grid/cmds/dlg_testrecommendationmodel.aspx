<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.TestRecommendationModelDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<title>
<loc:text resourceid="Web._grid.cmds.dlg_testrecommendationmodel.aspx_Title" runat="server" />
</title>
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery1.7.2.min.js"></script>
<script language="JavaScript">
var _productLookup = null;
var _lookupModelVersion1 = null,
_lookupModelVersion2 = null,
_lookupModelVersion3 = null;
var recommendationModelGrid1 = null,
recommendationModelGrid2 = null,
recommendationModelGrid3 = null;
var productIds = '',
prvProductIds = '',
prvNumberOfResults = '';
var emptyGuid = '{00000000-0000-0000-0000-000000000000}';
var versionId1 = emptyGuid,
versionId2 = emptyGuid,
versionId3 = emptyGuid,
prvVersionId1 = emptyGuid,
prvVersionId2 = emptyGuid,
prvVersionId3 = emptyGuid;
var recommendationModelGrid1Id = 'recommendationModelGrid1',
recommendationModelGrid2Id = 'recommendationModelGrid2',
recommendationModelGrid3Id = 'recommendationModelGrid3';

Sys.Application.add_load(function () {

_productLookup = Mscrm.FormControlInputBehavior.GetBehavior('productLookup');
_lookupModelVersion1 = Mscrm.FormControlInputBehavior.GetBehavior('lookupModelVersion1');
_lookupModelVersion2 = Mscrm.FormControlInputBehavior.GetBehavior('lookupModelVersion2');
_lookupModelVersion3 = Mscrm.FormControlInputBehavior.GetBehavior('lookupModelVersion3');


_productLookup.add_change(GetProductList);
_lookupModelVersion1.add_change(GetVersionStatistics);
_lookupModelVersion2.add_change(GetVersionStatistics);
_lookupModelVersion3.add_change(GetVersionStatistics);


_recommendationModelGrid1 = $find(recommendationModelGrid1Id);
_recommendationModelGrid2 = $find(recommendationModelGrid2Id);
_recommendationModelGrid3 = $find(recommendationModelGrid3Id);


_recommendationModelGrid1.SetParameter("disableDblClick", "1");
_recommendationModelGrid2.SetParameter("disableDblClick", "1");
_recommendationModelGrid3.SetParameter("disableDblClick", "1");


$get('butBegin').disabled = IsNull(_productLookup.get_dataValue());


$('#recommendationModelGrid1_divDataArea').css('overflow-x', 'hidden');
$('#recommendationModelGrid2_divDataArea').css('overflow-x', 'hidden');
$('#recommendationModelGrid3_divDataArea').css('overflow-x', 'hidden');


EnableDisableGrid(recommendationModelGrid1Id, true);
EnableDisableGrid(recommendationModelGrid2Id, true);
EnableDisableGrid(recommendationModelGrid3Id, true);


var elements = $('a[title="Sort by Rating" ]');
elements.each(function () {
$('img', this).attr('style', 'visibility: visible');
});
});


function GetProductList() {
var items = _productLookup.Items();
productIds = '';
var count;
for (count = 0; count < _productLookup.Items().length; count++) {
productIds += _productLookup.Items()[count].id + ',';
}
productIds = productIds.substring(0, productIds.length - 1);
$get('butBegin').disabled = IsNull(_productLookup.get_dataValue());
if ($get('butBegin').disabled == false) {
$get('butBegin').disabled = IsNull(_lookupModelVersion1.get_dataValue() || _lookupModelVersion2.get_dataValue() || _lookupModelVersion3.get_dataValue());
}
}


function GetVersionStatistics(sender, args) {
var dataValue = sender.get_dataValue();
if (!IsNull(dataValue)) {
switch (sender.get_element().id) {
case "lookupModelVersion1":
versionId1 = dataValue[0].id;
RetrieveVersionDetails(versionId1, $("#CatalogCoverage1Value"), $("#VersionRank1Value"));
break;
case "lookupModelVersion2":
versionId2 = dataValue[0].id;
RetrieveVersionDetails(versionId2, $("#CatalogCoverage2Value"), $("#VersionRank2Value"));
break;
case "lookupModelVersion3":
versionId3 = dataValue[0].id;
RetrieveVersionDetails(versionId3, $("#CatalogCoverage3Value"), $("#VersionRank3Value"));
break;
default:
break;
}
}
else {
ClearVersionDetails(sender, args);
}

$get('butBegin').disabled = IsNull(_lookupModelVersion1.get_dataValue() || _lookupModelVersion2.get_dataValue() || _lookupModelVersion3.get_dataValue());
if ($get('butBegin').disabled == false) {
$get('butBegin').disabled = IsNull(_productLookup.get_dataValue());
}
}


function RetrieveVersionDetails(versionId, catalogLabel, rankLabel) {
var columns = ["catalogcoverage", "percentilerank"];
Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.RecommendationModelVersion, versionId, columns).then(function (retrieveResponse) {
if (!Mscrm.InternalUtilities.JSTypes.isNull(retrieveResponse)) {
var responseEntity = retrieveResponse.entity;
if (!Mscrm.InternalUtilities.JSTypes.isNull(responseEntity)) {
var catalogLabelValue = responseEntity.getValue("catalogcoverage"),
rankLabelValue = responseEntity.getValue("percentilerank");
catalogLabel.text(catalogLabelValue);
rankLabel.text(rankLabelValue);
}
}
}, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
}


function applychanges() {
if ($('#txtTopN').val().trim() == "") {
$('#txtTopN').val("10");
}

var numberOfResults = $('#txtTopN').val();

if (versionId1 != emptyGuid && (prvProductIds != productIds || prvVersionId1 != versionId1 || prvNumberOfResults != numberOfResults)) {
_recommendationModelGrid1.SetParameter("numberOfResults", numberOfResults);
_recommendationModelGrid1.SetParameter("versionId", versionId1);
_recommendationModelGrid1.SetParameter("itemIds", productIds);
EnableDisableGrid(recommendationModelGrid1Id, false);
_recommendationModelGrid1.Refresh();

prvVersionId1 = versionId1;
}

if (versionId2 != emptyGuid && (prvProductIds != productIds || prvVersionId2 != versionId2 || prvNumberOfResults != numberOfResults)) {
_recommendationModelGrid2.SetParameter("numberOfResults", numberOfResults);
_recommendationModelGrid2.SetParameter("versionId", versionId2);
_recommendationModelGrid2.SetParameter("itemIds", productIds);
EnableDisableGrid(recommendationModelGrid2Id, false);
_recommendationModelGrid2.Refresh();

prvVersionId2 = versionId2;
}

if (versionId3 != emptyGuid && (prvProductIds != productIds || prvVersionId3 != versionId3 || prvNumberOfResults != numberOfResults)) {
_recommendationModelGrid3.SetParameter("numberOfResults", numberOfResults);
_recommendationModelGrid3.SetParameter("versionId", versionId3);
_recommendationModelGrid3.SetParameter("itemIds", productIds);
EnableDisableGrid(recommendationModelGrid3Id, false);
_recommendationModelGrid3.Refresh();

prvVersionId3 = versionId3;
}


prvProductIds = productIds;

prvNumberOfResults = numberOfResults;
}


function ClearVersionDetails(sender, args) {
switch (sender.get_element().id) {
case "lookupModelVersion1":
versionId1 = emptyGuid;
prvVersionId1 = emptyGuid;
$("#CatalogCoverage1Value").text("");
$("#VersionRank1Value").text("");
_recommendationModelGrid1.SetParameter("versionId", "");
_recommendationModelGrid1.Refresh();
EnableDisableGrid(recommendationModelGrid1Id, true);
break;
case "lookupModelVersion2":
versionId2 = emptyGuid;
prvVersionId2 = emptyGuid;
$("#CatalogCoverage2Value").text("");
$("#VersionRank2Value").text("");
_recommendationModelGrid2.SetParameter("versionId", "");
_recommendationModelGrid2.Refresh();
EnableDisableGrid(recommendationModelGrid2Id, true);
break;
case "lookupModelVersion3":
versionId3 = emptyGuid;
prvVersionId3 = emptyGuid;
$("#CatalogCoverage3Value").text("");
$("#VersionRank3Value").text("");
_recommendationModelGrid3.SetParameter("versionId", "");
_recommendationModelGrid3.Refresh();
EnableDisableGrid(recommendationModelGrid3Id, true);
break;
}
}


function EnableDisableGrid(gridControl, disable) {
Mscrm.Utilities.enableDisableDomElement($get(gridControl), disable);
}


function cancel() {
closeWindow();
}

parent.document.documentElement.style.overflow = "auto";
</script>
<style type="text/css">
#loadingContainer {
height: 100%;
width: 100%;
position: relative;
background-color: white;
opacity: 0.9;
}

#loadingContainer td {
vertical-align: middle;
text-align: center;
}

.bold {
font-weight: bold;
}

.padding10 {
padding-top: 10px;
}

.padding18 {
padding-top: 18px;
}

.padding30 {
padding-top: 30px;
}

.width15Per {
width: 15%;
}
</style>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
<table width="100%">
<tr>
<td colspan="6">
<table>
<tr>
<td style="width: 10%;">
<loc:Text ID="Product" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_Product" runat="server" />
</td>
<td style="width: 50%;">
<sdk:LookupControl id="productLookup" LookupStyle="multi" runat="server" />
</td>
<td style="width: 15%; text-align: right;">
<loc:Text ID="TopN" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_TopN" runat="server" />
</td>
<td style="width: 5%;">
<ui:Number id="txtTopN" Precision="0" MinValue="1" MaxValue="100" Required="1" Value="10" runat="server" />
</td>
<td colspan="2"></td>
</tr>
</table>
</td>
</tr>
<tr>
<br />
<td style="width: 12.5%;" class="padding30">
<loc:Text ID="ModelVersion1" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_ModelVersion1" runat="server" />
</td>
<td style="width: 20.6%;" class="padding30">
<sdk:LookupControl Required="true" id="lookupModelVersion1" runat="server" LookupStyle="single" />
</td>
<td style="width: 12.5%;" class="padding30">
<loc:Text ID="ModelVersion2" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_ModelVersion2" runat="server" />
</td>
<td style="width: 20.6%;" class="padding30">
<sdk:LookupControl Required="true" id="lookupModelVersion2" runat="server" LookupStyle="single" />
</td>
<td style="width: 12.5%;" class="padding30">
<loc:Text ID="ModelVersion3" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_ModelVersion3" runat="server" />
</td>
<td style="width: 20.6%;" class="padding30">
<sdk:LookupControl Required="true" id="lookupModelVersion3" runat="server" LookupStyle="single" />
</td>
</tr>
<tr>
<td colspan="6">
<table id="result" width="100%">
<tr>
<td colspan="2" class="bold padding18">
<loc:Text ID="Version1Title" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_Version1Title" runat="server" />
</td>
<td colspan="2" class="bold padding18">
<loc:Text ID="Version2Title" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_Version2Title" runat="server" />
</td>
<td colspan="2" class="bold padding18">
<loc:Text ID="Version3Title" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_Version3Title" runat="server" />
</td>
</tr>
<tr>
<td class="padding10 width15Per">
<loc:Text ID="CatalogCoverage1" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_CatalogCoverage" runat="server" />
</td>
<td style="text-align: left;" class="padding10 bold">
<label aria-atomic="true" aria-live="polite"  id="CatalogCoverage1Value" runat="server" />
</td>
<td class="padding10 width15Per">
<loc:Text ID="CatalogCoverage2" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_CatalogCoverage" runat="server" />
</td>
<td style="text-align: left;" class="bold padding10">
<label aria-atomic="true" aria-live="polite" id="CatalogCoverage2Value" runat="server" />
</td>
<td class="padding10 width15Per">
<loc:Text ID="CatalogCoverage3" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_CatalogCoverage" runat="server" />
</td>
<td style="text-align: left;" class="bold padding10">
<label aria-atomic="true" aria-live="polite" id="CatalogCoverage3Value" runat="server" />
</td>
</tr>
<tr>
<td class="padding10">
<loc:Text ID="VersionRank1" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_PercentileRank" runat="server" />
</td>
<td style="text-align: left;" class="bold padding10">
<label aria-atomic="true" aria-live="polite" id="VersionRank1Value" runat="server" />
</td>
<td class="padding10">
<loc:Text ID="VersionRank2" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_PercentileRank" runat="server" />
</td>
<td style="text-align: left;" class="bold padding10">
<label aria-atomic="true" aria-live="polite" id="VersionRank2Value" runat="server" />
</td>
<td class="padding10">
<loc:Text ID="VersionRank3" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_PercentileRank" runat="server" />
</td>
<td style="text-align: left;" class="bold padding10">
<label aria-atomic="true" aria-live="polite" id="VersionRank3Value" runat="server" />
</td>
</tr>
<tr>
<td colspan="2" class="bold padding10">
<loc:Text ID="RecommendationTitle1" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_RecommendationTitle" runat="server" />
</td>
<td colspan="2" class="bold padding10">
<loc:Text ID="RecommendationTitle2" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_RecommendationTitle" runat="server" />
</td>
<td colspan="2" class="bold padding10">
<loc:Text ID="RecommendationTitle3" ResourceId="Web._grid.cmds.dlg_testrecommendationmodel.aspx_RecommendationTitle" runat="server" />
</td>
</tr>
<tr>
<td colspan="2" style="height: 150px; width: 33%">
<cnt:AppGrid id="recommendationModelGrid1" runat="server" />
</td>
<td colspan="2" style="height: 150px; width: 33%">
<cnt:AppGrid id="recommendationModelGrid2" runat="server" />
</td>
<td colspan="2" style="height: 150px; width: 33%">
<cnt:AppGrid id="recommendationModelGrid3" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:dialogform>
</body>
</html>
