<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.ActivityFormPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
TABLE.ms-crm-Form-Area
{
padding-top:	10px;
border-right:   none;
border-left:    none;
}
body
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
dir: rtl;
<% } %>
background-color: #ffffff;
}

#directioncode table
{
min-width:120px;
}
</style>
<script type="text/javascript">


$addHandler(document, 'keydown', function(event)
{
if (event.keyCode == KEY_S) {
if (event.ctrlKey || event.altKey) {
event.keyCode = 0;
event.returnValue = false;
}
}
});
</script>
</head>
<body>
<div style="width:100%;height:100%">

<div id="formDiv" style="width:98%; height:100%" runat="server">
</div>
</div>
</body>
</html>