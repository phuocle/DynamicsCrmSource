<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.MergeRecordConfirmationDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">
var isInlineDialog = window != top;

function applychanges( )
{
if (isInlineDialog)
executeDialogCloseCallback(true);
closeWindow();
}

function cancel( )
{
closeWindow();
}

</script>
<style type="text/css">
.ms-crm-dialogMessage
{
overflow: auto;
word-wrap: break-word;
color: #505050;
padding-top: 2px;
font-family: Segoe UI,Tahoma,Arial;
font-size:14px;
margin-left: 30px;
margin-right: 30px;
display:block;
}
.ms-crm-linkstyle
{
text-decoration:underline !important;
font-weight:bold !important;
color:#0000EE !important;
cursor:pointer;
}
</style>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<div class="ms-crm-dialogMessage"><span id="dialogMessage" runat="server"></span></div>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
