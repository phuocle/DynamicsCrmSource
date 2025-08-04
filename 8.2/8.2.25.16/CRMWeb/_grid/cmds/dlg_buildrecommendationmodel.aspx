<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.BuildRecommendationModelDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />
<title>
<loc:text resourceid="Web._grid.cmds.dlg_buildrecommendationmodel.aspx_Title" runat="server" />
</title>
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery1.7.2.min.js"></script>
<script language="JavaScript">
var _sAction = "buildrecommendationmodel";
var _iObjType = <%=ObjType.ToString(CultureInfo.InvariantCulture)%>;
var recommendationVersionName = "";
var description = "";

function applychanges() {
if (!validateAndShowError())
{
return;
}

go();
}

function cancel() {
closeWindow();
}



function getCustParamsForItem(i) {
recommendationVersionName = getControlValue("txtVersionName");
description = getControlValue("txtVersionDesc");
if(IsNull(description))
{
description = "";
}
var sCustParamsForItem = "&recommendationVersionName=" + recommendationVersionName + "&description=" + description;
return sCustParamsForItem;
}

function getControlValue(controlId) {
var control = $get(controlId);
var controlBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(control);
return controlBehavior.get_dataValue();
}

function validateAndShowError()
{
hideErrors();
if (isNullOrEmptyString($get("txtVersionName").value))
{
$get("error_name").style.display = "inline";
return false;
}
else {
return true;
}
}

function hideErrors()
{
$get("error_name").style.display = "none";
}
</script>

<style type="text/css">
.ms-crm-RefreshDialog-Header {
padding-top: 0px;
height: 155px;
}

#btnCross {
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
left: 16px;
<% } else { %>
right: 16px;
<% } %>
top: 16px;
}

#dialogHeaderTitle {
margin-top: 30px;
font-size: 30px;
color: #000000;
}

.ms-crm-RefreshDialog-Header-Desc {
padding-top: 10px;
padding-bottom: 10px;
color: #000000;
overflow-y: auto;
height:65px;
}

.ms-crm-RefreshDialog-Main {
margin-top: 42px;
}

.ms-crm-Input-Container {
overflow: hidden;
}

#divWarning {
top: 0px;
}

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
</style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">
<table cellpadding="0" cellspacing="0">
<br/>
<tr>
<td width="1%"  style="padding-top: 2px; vertical-align: top">
<asp:Image id="AlertMessageIcon" runat="server" />
</td>
<td width="20%" style="color: #ff0000; font-size: 12px; line-height: 18px;">
<label for="ErrorMessage">
<asp:Label id="ErrorMessageLabel" runat="server" />
</label>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0">
<br/>
<tr>
<td width="3%">
<br />
<label for="txtVersionName">
<loc:Text ResourceId="RecommendationModelVersionName_Label_Text" runat="server" />
</label>
<img class="ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel" alt="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Forms.Required.AltTag"))%>" src="/_imgs/frm_required.gif" />
</td>
<td style="padding-left: 10" width="10%">
<br />
<sdk:TextBoxControl Required="true" id="txtVersionName" runat="server" />
</td>
</tr>
<tr>
<td>
<br />
<label for="txtVersionDesc">
<loc:Text ResourceId="RecommendationModelVersionDesc_Label_Text" runat="server" />
</label>
</td>
<td style="padding-left: 10">
<br />
<sdk:TextAreaControl Required="true" id="txtVersionDesc" runat="server" Height="45px" />
</td>
</tr>
<tr>
<td colspan="2">
<div id="error_name" style="display: none;" tabindex="0">
<table>
<tr>
<td>
<img style="margin-right: 10px" src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='buildModel_Dlg_Error_Msg_Name' runat='server'/>" /></td>
<td>
<div style="color: #D80303">
<loc:text resourceid="buildModel_Dlg_Error_Msg_Name" runat="server" />
</div>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
