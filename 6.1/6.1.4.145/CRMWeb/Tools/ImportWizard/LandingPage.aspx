





<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Import.LandingPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html xmlns:crm>
<head>
<title>
<loc:text resourceid="DataManagement.DownloadTemplate.Title" runat="server" />
</title>

<script language="javascript">
Sys.Application.add_load(PageOnLoad);
function PageOnLoad()
{
if (entityNameIsValid == true)
{

crmRecordType.DataValue = '<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(entityName) %>';

btnDownload();

<% if (Util.IsForOutlookClient()) {%>
var exportFrame = document.getElementById('exportFrame');
exportFrame.attachEvent('onreadystatechange', OnIframeReady);
<%} else {%>
closeWindow();
<%} %>
}
}


function btnDownload()
{
var url = Mscrm.CrmUri.create("/tools/importwizard/createtemplate.aspx?entityName=" + CrmEncodeDecode.CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior("crmRecordType").get_dataValue()));

var oForm = document.getElementById('submitEntity');
oForm.action = url.toString();

<% if (Util.IsForOutlookClient()) {%>
oForm.target = 'exportFrame';
<%} else {%>
oForm.target = '_self';
<%} %>

oForm.submit();
}

<% if (Util.IsForOutlookClient()) {%>
function OnIframeReady()
{
var exportFrame = document.getElementById('exportFrame');
if(exportFrame.readyState == 'complete')
closeWindow();
}
<%} %>

function handleKeyPress(eventObject)
{
if(eventObject.keyCode == 27)
{
return closeWindow();
}
}
</script>
</head>
<body scroll="yes" onkeypress="handleKeyPress(new Sys.UI.DomEvent(event))" class="DownloadPage_body">
<div style="padding:10px">
<label for="crmRecordType">
<loc:text resourceid="IW_LandingPage_RecordType" runat="server" />
</label>
<div style="width: 200px; padding-top:10px">
<cui:select id="crmRecordType" runat="server" />
</div>
</div>

<form id="submitEntity" method="post">
</form>
<% if (Util.IsForOutlookClient()) {%>
<iframe id="exportFrame" name="exportFrame" style="display:none" src="/_static/blank.htm"> </iframe>
<%} %>
</body>
</html>
