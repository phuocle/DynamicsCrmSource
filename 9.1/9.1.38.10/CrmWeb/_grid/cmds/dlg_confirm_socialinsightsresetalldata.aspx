<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmSocialInsightsResetAllDataDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>
<style type="text/css">
.ms-crm-RefreshDialog-Header
{
top: 0px;
position: absolute;
width: 100%;
height: 75px;
}

DIV.ms-crm-RefreshDialog-Header-Title
{
top:20px;
font-size: 36px;
}

.ms-crm-RefreshDialog-Header-Desc
{
padding-top: 18px;
margin-left: 30px;
margin-right: 30px;
font-size: 14px;
color:#262626;
}

.ms-crm-RefreshDialog-Main
{
top:136px;
color:#262626;
}

.ms-crm-RefreshDialog-Footer
{
position: absolute;
bottom: 0px;
width: 100%;
min-width: 288px;
height: 44px;
text-align: right;
}
</style>

<script language="JavaScript">
function applychanges( )
{
CallBackAndCloseWindow(true);
}

function cancel( )
{
CallBackAndCloseWindow(false);
}

function CallBackAndCloseWindow(returnValue)
{
window.returnValue = returnValue;
executeDialogCloseCallback(returnValue);
closeWindow();
}
</script>
</head>

<body>
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody1)%>
<br /><br />
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody2)%>
</td>
</tr>
</table>
</body>
</html>