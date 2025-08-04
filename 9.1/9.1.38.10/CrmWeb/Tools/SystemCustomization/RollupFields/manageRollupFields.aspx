<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.RollupFields.ManageRollupFieldsPage"   %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head runat="server">
<title runat="server"></title>
<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">
Sys.Application.add_load(RollupEditorOnLoad);
function RollupEditorOnLoad()
{
var body = $get("BodyViewContainer");
$addHandler(body, "scroll", bodyScroll);
}





function bodyScroll() {
var controlOnFocus = $("*:focus").attr("id");
var controlName = "#" + controlOnFocus;
$(controlName).autocomplete("close");
}

</script>
</head>
<body class="mscrm-pbleditor-Body">
<div class="mscrm-pbleditor">
<div runat="server" id="HeaderViewContainer" class="mscrm-pbleditor-HeaderViewContainer rollupfield">
</div>
<div runat="server" id="BodyViewContainer" class="mscrm-pbleditor-BodyViewContainer rollupfield">
</div>
<div runat="server" id="FooterViewContainer" class="mscrm-pbleditor-FooterViewContainer rollupfield">
</div>
</div>
</body>
</html>
