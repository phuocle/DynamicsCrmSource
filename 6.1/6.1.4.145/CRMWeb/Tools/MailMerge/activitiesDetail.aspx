<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.MailMerge.ActivitiesDetailPage"  %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
<title>
<loc:Text ResourceId="MenuItem_Label_WebMailMerge" runat="server" /></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
body
{
background-color: #E3EFFF;
}
.header
{
background-color:#6693CF;
}
.divHeader
{
border-bottom: 1px solid #CCCCCC;
height:63px;
left:0px;
right:0px;
position:absolute;
}
.divContent
{
padding-bottom: 10px;
padding-top: 10px;
top:63px;
bottom:47px;
left:0px;
right:0px;
position:absolute;
vertical-align:top;
}
.divFooter
{
border-top: 1px solid #CCCCCC;
height:47px;
left:0px;
right:0px;
bottom:0px;
position:absolute;
}
</style>

<script type="text/javascript" language="Javascript">


var sActivityXml = "";
var activityFrame = null;


Sys.Application.add_load(function()
{
var oArgs = getDialogArguments();
if (!IsNull(oArgs))
{
sActivityXml = oArgs;
}

var activityForm = $get("activityForm");

<% if (objectTypeCode == Util.Fax) { %>
activityForm.setAttribute("action", Mscrm.CrmUri.create("/Tools/MailMerge/iframes/faxForm.aspx").toString());
<% } else if (objectTypeCode == Util.Task) { %>
activityForm.setAttribute("action", Mscrm.CrmUri.create("/Tools/MailMerge/iframes/taskForm.aspx").toString());
<% } else { %>
activityForm.setAttribute("action", Mscrm.CrmUri.create("/Tools/MailMerge/iframes/letterForm.aspx").toString());
<% } %>

activityForm.activityxml.value = sActivityXml;
activityForm.submit();
activityFrame = $get("activityFrame").contentWindow;
});


function btnOK(bCompleted)
{
overrideClose();
GetFrameData();
window.returnValue = sActivityXml;
closeWindow();
}


function btnCancel()
{

overrideClose();
closeWindow();
}


function overrideClose()
{
if (activityFrame)
{
var crmForm = activityFrame.$find("crmForm");
if (crmForm)
{
crmForm.set_saving(true);
}
}
}


function GetFrameData()
{

var crmForm = activityFrame.$find("crmForm");
crmForm.BuildXml(false, false);
sActivityXml = activityFrame.$get("crmFormSubmit").crmFormSubmitXml.value;
}
</script>

</head>
<body scroll="no">
<div style="width:100%;height:100%;position:absolute">
<div class="divHeader">
<table cellpadding="0" cellspacing="5" class="header" width="100%" style="table-layout: fixed;">
<tr style="vertical-align:top;">
<td width="100%" class="MiniCampaign_td_PageHeader1">
<span id="mcPageHeader1" style="display: inline">
<table width="100%" cellpadding="5" cellspacing="0">
<tr>
<td class="ms-crm-Dialog-Title-Reversed">
<loc:Text ResourceId="Web.Tools.MailMerge.activitiesDetail.aspx_Header" runat="server" />
</td>
</tr>
<tr>
<td class="ms-crm-Dialog-Description-Reversed">
<loc:Text ResourceId="Web.Tools.MailMerge.activitiesDetail.aspx_Header_details" runat="server" />
</td>
</tr>
</table>
</span>
</td>
</tr>
</table>
</div>
<div class="divContent">
<iframe name="activityFrame" id="activityFrame" frameborder="0" style="width:100%;height:100%;position:absolute;border:0px none;" scrolling="auto"></iframe>
</div>
<div class="divFooter">
<table cellpadding="0" cellspacing="0" width="100%">
<tr class="MiniCampaign_tr_MCButtons" valign="center">
<td class="ms-crm-Dialog-Buttons MiniCampaign_td_Buttons">
<cui:Button ID="btn_id_OK" OnClick="btnOK();" ResourceId="Web.Tools.MailMerge.activitiesDetail.aspx_OkButton_Lable"	runat="server">
</cui:Button>
&nbsp;
<cui:Button ID="btn_id_Cancel" OnClick="btnCancel();" ResourceId="Web.Tools.MailMerge.activitiesDetail.aspx_CancelButton_Lable" runat="server">
</cui:Button>
</td>
</tr>
</table>
</div>
<div style="height:0px; display:none;">
<form id="activityForm" name="activityForm" action="" target="activityFrame" method="post">
<input type="hidden" id="activityxml" name="activityxml" />
</form>
</div>
</div>
</body>
</html>
