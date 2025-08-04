<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.ViewEditor.Dialogs.SetFilters"   %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<title><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetFilters.aspx_4" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">

DIV.ms-crm-AdvFind-Filter
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-right: 0px solid #A6BADA;
width: 100%;
<% } else { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-left: 0px solid #A6BADA;
width: 100%;
<% } %>
}
DIV.ms-crm-AdvFind-EmptyField
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-bottom: 1px solid #A6BADA;
border-right: 0px solid #A6BADA;
width: 100%;
<% } else { %>
margin: 0px 0px 0px 5px;
padding: 0px 0px 0px 0px;
border-bottom: 1px solid #A6BADA;
border-left: 0px solid #A6BADA;
width: 100%;
<% } %>
}
</style>
<script language="Javascript">
Sys.Application.add_load(SetFiltersPageOnLoad);
function SetFiltersPageOnLoad()
{
var oArgs = getDialogArguments();
var advFind = $find("advFind");
if(!isNullOrEmptyString(oArgs.sFetchXml))
{
advFind.ResetControl();
advFind.set_fetchXml(oArgs.sFetchXml);
}
advFind.set_layoutXml(oArgs.sLayoutXml);
}

function applychanges()
{
var advFind = $find("advFind");
var sFetchXml = advFind.get_fetchXml();

if(IsNull(sFetchXml)) { return; }

var oReturn = new Object();

oReturn.sFetchXml = sFetchXml;
oReturn.bIsDirty = advFind.get_isDirty();
Mscrm.Utilities.setReturnValue(oReturn);
closeWindow();
}

function cancel()
{
closeWindow();
}
</script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
<cnt:AppAdvancedFind id="advFind" SaveChangesAlert=false runat="Server"/>
</frm:DialogForm>
</body>
</html>