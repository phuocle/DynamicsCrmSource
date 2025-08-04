<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.ResourceGroups.DetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"    Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"    Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<cnt:AppHeader id="crmHeader" runat="server">
</cnt:AppHeader>

<script type="text/javascript" language="javascript">
Sys.Application.add_load(WindowOnLoad);
function WindowOnLoad() {
$addHandler($get("crmForm"), "submit", SubmitOverride);
}


function SubmitOverride() {
return false;
}
</script>

<style type="text/css">
#navContainer
{
margin-top: 4px;
width: <loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;
}
#tdAreas
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right:<loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;;
<% } else { %>
left:<loc:Text ResourceId='DetailForm_Left_Navigation_Width' runat='server'/>px;;
<% } %>
}
</style>
</head>
<body>
<div class="ms-crm-Form-Layout">
<div style="height: 92px">
<mnu:AppFormMenuBar id="crmMenuBar" runat="server" />
</div>
<div class="ms-crm-NRForm-Background">
<div id="navContainer" class="ms-crm-Form-Nav-Container">
<cnt:AppNavigationBar id="crmNavBar" runat="server" />
</div>
<div id="tdAreas" class="ms-crm-NRForm-Main-Container" style="height:100%">
<div id="areaForm" class="ms-crm-absolutePosition">
<frm:CrudForm id="crmForm" runat="server" />
</div>
</div>
</div>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</body>
</html>
