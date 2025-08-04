<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.RecalculateOpportunitiesConfirmationPage"    CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<title><loc:Text ResourceId="Dialog_RecalcOpp_Title" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">


var _sAction		= "recalc_opps";
var _iObjType	= <%=ObjType%>;

function applychanges()
{

var sIds = _a[0];

for(var i=1; i<_a.length; i++)
{
sIds += ";" + _a[i];
}
__dialogXml = "<sIds>" + CrmEncodeDecode.CrmHtmlEncode(sIds) + "</sIds>";


_a = new Array(1);
go();
}
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(BodyDescription)%>

</frm:DialogForm>

</body>
</html>
