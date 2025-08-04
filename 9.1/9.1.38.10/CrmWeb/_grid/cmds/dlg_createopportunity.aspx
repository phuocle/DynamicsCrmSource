<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.CreateOpportunity" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<!Doctype html>
<html>
<head>
<script language="JavaScript">


var _sAction	= "createopportunity";
var _iObjType	= <%=EntityTypeCode.ToString("D", CultureInfo.InvariantCulture)%>;


_custParams	= "&sParentId=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ParentId))%>";
Sys.Application.add_load(function () {

if (typeof (Mscrm.isrevenuesystemcalculated_onchange) !== "undefined")
{
Mscrm.isrevenuesystemcalculated_onchange();
}
});

function applychanges()
{




var crmForm = $find('crmForm');
var result = crmForm.BuildXml(true, false);
if (result == 1)
{
crmForm.set_saving(true);
__dialogXml = $get('crmFormSubmit').crmFormSubmitXml.value;
go();
}
else if (result == 2)
{
return;
}
else
{
closeWindow();
}
}

</script>
</head>
<body>
<div>
<frm:CrudForm id="crmForm" runat="server"/>
</div>
</body>
</html>