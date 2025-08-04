<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteSharePointSite" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="JavaScript">

var _sAction		= "delete";
var _iObjType	= <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;
var _iTotal		= <%=iTotal.ToString("D", CultureInfo.InvariantCulture)%>;
var _defaultSiteId	= "{<%=defaultSiteId.ToString("D", CultureInfo.InvariantCulture)%>}";
var _descriptionDelete = <%=CrmEncodeDecode.CrmJavaScriptEncode(BodyDescription_Delete)%>;
for(i=0;i<_iTotal;i++)
{
if(dialogArguments!=null && dialogArguments[i]!=null && dialogArguments[i].toUpperCase() == _defaultSiteId.toUpperCase())
{

_descriptionDelete = (_iTotal == 1) ? <%=CrmEncodeDecode.CrmJavaScriptEncode(BodyDescription_DeleteDefault) %> : <%=CrmEncodeDecode.CrmJavaScriptEncode(BodyDescription_DeleteIncludesDefault)%>;
}
}


function applychanges()
{
go();
}

function setBodyDescription()
{
XUI.Html.SetText(document.getElementById("spDeleteDescription"), _descriptionDelete);
}

</script>
</head>

<body onload="setBodyDescription();">

<frm:DialogForm id="crmForm" runat="server">
<div class="ms-crm-Dialog-Header-Desc" id="spDeleteDescription"></div>
</frm:DialogForm>

</body>
</html>
