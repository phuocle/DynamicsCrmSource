<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteRecommendationModelDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader ID="crmHeader" runat="server" />
<script language="JavaScript">
var _sAction = "deleterecommendationmodel";
var _iObjType = <%=ObjType.ToString(CultureInfo.InvariantCulture)%>;

function applychanges() {
var obutBegin = document.getElementById("butBegin");
obutBegin.disabled = true;
PrepareFillBar();
window.setTimeout(performDeleteRecommendationAction, 100);
}

function performDeleteRecommendationAction(){
var ids = getDialogArguments();
if (ids === null || ids == "")
{
return;
}

sIds = ids[0];
iLen = ids.length;
for(var i=1; i< iLen; i++)
{
sIds += ";" + ids[i];
}

var xmlhttp = new XMLHttpRequest();
var oDoc = XUI.Xml.LoadXml("<ids>" + CrmEncodeDecode.CrmXmlEncode( sIds ) + "</ids>" );
var submitUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_deleterecommendationmodel.aspx?iObjType=" + _iObjType + "&iTotal=" + iLen + "&iId=" + ids[0]);

var boSuccess = true;
var _isAsynch = isAsynchOperation();
xmlhttp.open("POST", submitUrl.toString(), _isAsynch);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, submitUrl);

boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, oDoc);

if(boSuccess)
{
var oResult = xmlhttp.responseText;
Mscrm.Utilities.setReturnValue(oResult.toLowerCase());

closeWindow();
}
}

function cancel() {
closeWindow();
}

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
</style>
</head>
<body>
<frm:DialogForm ID="crmForm" runat="server">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription)%>
</frm:DialogForm>
</body>
</html>
