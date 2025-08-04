<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Charts.SaveVisualization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" 	Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<html>
<head>
<title><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_sTitle) %></title>
<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-RefreshDialog-Warning
{
right: 5px !important;
left: 5px !important;
}
</style>

<script language="Javascript">

var oldName = null;
var rc = null;
var notificationObj = null;
var duplicateNotification = null;
var visualizationName = null;
var visualizationDescription = null;
var loadingCell = null;

Sys.Application.add_load(PageLoad);

function PageLoad()
{
notificationObj = $find("Notifications");
visualizationName =$get("visualizationName");
visualizationDescription = $get("visualizationDescription");
loadingCell = $get("loadingCell");

var oArgs = getDialogArguments();

if (!IsNull(oArgs) && !IsNull(oArgs.rc) && !IsNull(oArgs.visInfo))
{
rc = oArgs.rc;
var visualizationNameControl = Mscrm.FormControlInputBehavior.GetBehavior("visualizationName");
visualizationNameControl.set_dataValue(oArgs.visInfo.SuggestedName);



visualizationName.defaultValue = Mscrm.FormControlInputBehavior.GetBehavior("visualizationName").get_dataValue();
Mscrm.FormControlInputBehavior.GetBehavior("visualizationDescription").set_dataValue(CrmEncodeDecode.CrmXmlDecode(rc.GetParameter("description").Value));

oldName = CrmEncodeDecode.CrmXmlDecode(rc.GetParameter("name").Value);
var saveAs = CrmEncodeDecode.CrmXmlDecode(rc.GetParameter("saveAs").Value);
if (!Mscrm.Utilities.parseBoolean(saveAs))
{
duplicateNotification = notificationObj.CreateNotification("duplicateName", 2, "visualization", String.format(LOCID_DUPE_OF_SUGGNAME, oldName));
var aNot = new Array(duplicateNotification);
notificationObj.SetNotifications(aNot, "visualization");
notificationObj.SetVisible(true);
}
}
visualizationNameControl.setFocus();
}

function cancel()
{
closeWindow();
}

function applychanges()
{
var visualizationNameControl = Mscrm.FormControlInputBehavior.GetBehavior("visualizationName");

if(IsNull(visualizationName))
{
return false;
}

if(!IsNull(notificationObj))
{
notificationObj.SetVisible(false);
}

if(IsNull(visualizationNameControl.get_dataValue()))
{
alert(LOCID_VPD_MSG_VALUEREQUIRED);
visualizationNameControl.setFocus();
return false;
}


$get("butBegin").disabled = true;
visualizationName.disabled = true;
visualizationDescription.disabled = true;
loadingCell.style.display = "inline";

window.setTimeout(TrySaveChart, 0);
}

function TrySaveChart()
{
var visName = Mscrm.FormControlInputBehavior.GetBehavior("visualizationName").get_dataValue();
var visDesc = Mscrm.FormControlInputBehavior.GetBehavior("visualizationDescription").get_dataValue();
visDesc = IsNull(visDesc) ? "" : visDesc;
rc.SetParameter("checkDuplicate", "true");

rc.SetParameter("name", visName);
rc.SetParameter("description", visDesc);




var result = rc.Execute(null);





result.RawResponse = null;
result.Xml = null;

result.description = visDesc;
if (result.Success)
{
var visualizationInfo = Sys.Serialization.JavaScriptSerializer.deserialize(result.ReturnValue);
if (!visualizationInfo.DuplicateFound)
{

if(visualizationName.defaultValue != visName)
{
result.autoFillTitle = "false";
}
Mscrm.Utilities.setReturnValue(result);
closeWindow();
}
else
{
oldName = visName;
Mscrm.FormControlInputBehavior.GetBehavior("visualizationName").set_dataValue(visualizationInfo.SuggestedName);
$get("butBegin").disabled = false;
visualizationName.disabled = false;
visualizationDescription.disabled = false;
loadingCell.style.display = "none";
if(IsNull(duplicateNotification))
{
duplicateNotification = notificationObj.CreateNotification("duplicateName", 2, "visualization", String.format(LOCID_DUPE_OF_USERNAME, oldName));
}
else
{
duplicateNotification.Text = String.format(LOCID_DUPE_OF_USERNAME, oldName);
}
var aNot = new Array(duplicateNotification);
notificationObj.SetNotifications(aNot, "visualization");
notificationObj.SetVisible(true);
}
}
else
{
Mscrm.Utilities.setReturnValue(result);
closeWindow();
}
}

</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="2" width="100%" height="100%" style=" table-layout:fixed">
<col width="22px" /> <col width="98%" /><col width="22px" />
<tr style="height:20px">
<td style="width:22px"></td>
<td class="ms-crm-Field-Required" valign="bottom"><label for="visualizationName"><loc:Text ResourceId="Web.Visualization.Designer.SaveAs.Name" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td style="width:22px"></td>
</tr>
<tr style="height:25px">
<td style="width:22px"></td>
<td valign="top"><sdk:TextBoxControl id="visualizationName" MaxLength="100" runat="server"/></td>
<td style="width:20px;" valign="top">&nbsp<img style = "display:none" alt="" src="/_imgs/ico/16_progress.gif" id = "loadingCell"/></td>
</tr>
<tr style="height:20px">
<td style="width:22px"></td>
<td valign="bottom" colspan="3"><label for="visualizationDescription"><loc:Text ResourceId="Web.Visualization.Designer.Description" runat="server"/></label></td>
<td style="width:22px"></td>
</tr>
<tr style="height:70px">
<td style="width:22px"></td>
<td valign="top" style="height:70px"><sdk:TextAreaControl id="visualizationDescription" MaxLength="200" runat="server"/></td>
<td style="width:22px"></td>
</tr>
<tr >
<td valign="top" colspan="3" style="padding-left:22px">
<cnt:AppNotifications id="Notifications" runat="server"/>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
