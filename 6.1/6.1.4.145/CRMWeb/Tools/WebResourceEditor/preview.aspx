<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.WebResourcePreview" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>

<!DOCTYPE html>
<html>
<head>
<style type="text/css">
html,
body
{
height: 100%;
margin:0px;
}


</style>
</head>
<body>
<div id="qwe" class="ms-crm-Form-Layout" style="width:100%;height:100%">
<div id="silverLightContainer" style="width:100%;height:100%" class="ms-crm-Form-Background">
<% =BuildSilverlightControl() %>
</div>
</div>
</body>
</html>
