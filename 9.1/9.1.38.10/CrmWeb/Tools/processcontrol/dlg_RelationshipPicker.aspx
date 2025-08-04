<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.ProcessControl.RelationshipPickerPage"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"

Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"

Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">


Sys.Application.add_load(function() {
ProcessControl.Configuration.RelationshipPickerDialogInitializer.initialize();
});

$addHandler(document, 'keydown', function(eventObject)
{
if (eventObject.target.id != "cmdDialogCancel" && eventObject.keyCode == KEY_ENTER)
{
eventObject.preventDefault();
applychanges();
}
});



function applychanges()
{
var oReturn = ProcessControl.Configuration.RelationshipPickerDialogInitializer.applyChanges();

Mscrm.Utilities.setReturnValue(oReturn);
closeWindow(true);
}


function cancel()
{
closeWindow(true);
}


</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div id="relationshippickerdialogcontainer">
</div>
</frm:dialogform>
</body>
</html>