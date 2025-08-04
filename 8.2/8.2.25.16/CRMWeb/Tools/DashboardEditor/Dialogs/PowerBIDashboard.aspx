<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DashboardEditor.PowerBIDashboard" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!Doctype html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">
var powerBIDashboard =
new Mscrm.PowerBI.PowerBIDashboard(
<%= CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.ObjectModel.PowerBIUtility.FirstPartyIntegrationUrl) %>,
<%= CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.ObjectModel.PowerBIUtility.EnvironmentType) %>,
<%= CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.Application.Utility.Util.TextDirection) %>,
'dashboard');
function onLoad() {
powerBIDashboard.onLoad();
}
function applychanges() {
powerBIDashboard.applyChanges();
}
function cancel() {
closeWindow();
}
Sys.Application.add_load(onLoad);
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div id="Container" style="width:100%;height:100%;">
<div id="errorContainer" class="error-container" style="display: none">
<div class="error-badge" dir="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.Util.TextDirection) %>">
<img src="/_imgs/error/notif_icn_crit16.png" />
</div>
<div id="errorMessage" class="error-message"></div>
</div>
<div id="warningContainer" class="warning-container" style="display: none">
<div class="error-badge" dir="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.Util.TextDirection) %>">
<img src="/_imgs/error/notif_icn_warn16.png" />
</div>
<div id="warningMessage" class="error-message"></div>
</div>
<div id="infoContainer" class="info-container" style="display: none">
<div class="error-badge" dir="<%= CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.Util.TextDirection) %>">
<img src="/_imgs/error/notif_icn_info16.png" />
</div>
<div id="infoMessage" class="error-message"></div>
</div>
<div>
<iframe id="formeditor" name="formeditor" style="width: 100%;height:100%" scrolling="no" frameborder="0"></iframe>
<input type="checkbox" class="ms-crm-CheckBox" id="ShowOnMobileClient" name="ShowOnMobileClient" tabindex="0" style="display: inline;"/>
<label id="chkShowOnMobileClientLabel" for="ShowOnMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClient" runat="server"/></label>
</div>
</div>
</frm:DialogForm>
</body>
</html>