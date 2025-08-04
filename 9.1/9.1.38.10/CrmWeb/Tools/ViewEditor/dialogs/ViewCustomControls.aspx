<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.ViewCustomControlsDialog" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">
var _viewName;
var _viewDesc;
var dialogArgs = getDialogArguments();

window.onload = function () {
Mscrm.CustomControls.CustomControlManager.get_instance().initiateFromViewConfig(dialogArgs[4], dialogArgs[5]);
}

function applychanges() {
var validationCheck = Mscrm.CustomControls.CustomControlManager.get_instance().validateFieldCustomControls();
if (!validationCheck) {
return;
}

var _oCustomControlSnippet = Mscrm.CustomControls.CustomControlManager.get_instance().generateGridSnippet();
Mscrm.Utilities.setReturnValue([dialogArgs[0], dialogArgs[1], _oCustomControlSnippet]);
closeWindow();
}
function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

function updateUI() {
$get('butBegin').disabled = (!_viewName.readOnly && (_viewName.value == ""));
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="height: 100%">
<div id="viewCustomcontrols" style="border: 1px solid #DDDDDD; padding: 10px; height: 450px; display: block">
<div id="secCustomcontrol">

<fieldset style="height: 140px; border: thin; border-style: none; border-collapse: collapse">

<div id="subgridTopDiv" style="margin-bottom: 10px; width: 100%; align: center; overflow-y: auto; height: 138px">
<table class="customcontrol-tablestyle" id="tblCustomControl" rtl="<%=rtlValue%>">

<tr class="customcontrol-bottomline" style="height: 28px">
<th class="customcontrol-text-ellipses customcontrols_configuration_control_name" rtl="<%=rtlValue%>" title="<loc:Text ResourceId='CustomControls_Configuration_Control' runat='server'/>"><b>
<loc:Text ResourceId="CustomControls_Configuration_Control" runat="server" />
</b></th>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.DataSetControl.Name, Microsoft.Crm.Application.Security.UserInformation.Current)){ %>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Web' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Web" runat="server" /></b></th>
<% } %>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Phone' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Phone" runat="server" /></b></th>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Tablet' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Tablet" runat="server" /></b></th>
<th style="width: 15%"></th>
</tr>
</table>
<div style="padding-top: 5px;" id="addControlDiv">
<a href="#" id="addcontrolid"><span class="customcontrol-subject customcontrol-fontfamily" style="cursor: pointer"><u><loc:Text ResourceId="CustomControls_Configuration_AddControl" runat="server" /></u></span></a>
</div>
</div>
</fieldset>
</div>

<div id="divPropertyTableContainer" width="100%" style="border: 1px solid #DDDDDD; height: 295px">
<div id="selectionRemindBoxId" class="selectionremindbox">
<span><loc:Text ResourceId="CustomControls_Configuration_PlaceHolderText1" runat="server" /></span>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
