<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Reporting.DrillOpenPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript" type="text/javascript">

function drillOpen_onload()
{
var qsParm = new Array();
qsParm['ID'] = '';
qsParm['OTC'] = '';
qsParm['LogicalName'] = '';
qsParm['ServerUrl'] = '';
var query = window.location.search.substring(1);
var parms = query.split('&');
for (var i=0; i<parms.length; i++)
{
var pos = parms[i].indexOf('=');
if (pos > 0)
{
var key = parms[i].substring(0,pos);
var val = parms[i].substring(pos+1);
qsParm[key] = val;
}
}

if( qsParm['ID'] != '')
{
var otc = null;
if (qsParm['LogicalName'] != '')
{
otc = '<% = this.ObjectTypeCode %>';
if (otc == '0')
{
openErrorDlg("0x80040e00");
return;
}
}
else if (qsParm['OTC'] != '')
{
otc = qsParm['OTC'];
}

if (!IsNull(otc))
{
var appid = null;
if (window && window.opener && window.opener.parent && window.opener.parent.APP_MODULE_APPID) {
appid = "appid=" + window.opener.parent.APP_MODULE_APPID;
}

var isAppMode = null;
isAppMode = '<% = this.IsAppMode %>';
if (IsNull(isAppMode) || 'False' == isAppMode)
{
var newHistKey = Math.floor(Math.random() * 1000000000).toString();
var extraParams = { "newWindow": "true", "histKey": newHistKey };


openObj(otc, unescape(qsParm['ID']), appid, null, 1, extraParams);
}
else
{


openObj(otc, unescape(qsParm['ID']));


if (window.top == window.self)
{



openStdWin('about:blank', '_self');
closeWindow();
}
}
}
}
}

Sys.Application.add_load(drillOpen_onload);

</script>
</head>
<body>
</body>
</html>
