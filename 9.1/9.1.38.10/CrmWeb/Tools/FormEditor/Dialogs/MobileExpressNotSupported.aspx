<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MobileExpressNotSupported" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">

applychanges = function() {
closeWindow();
};

</script>
<style>
.ms-crm-RefreshDialog-Header{
visibility: hidden;
}

.ms-crm-RefreshDialog-Main{
top: 15px;
}
</style>
</head>
<body>
<body>
<frm:dialogform id="crmForm" runat="server">
<div id="Container">
<span id="label" unselectable="on"><loc:Text ResourceId="Mobile_Express_Not_Supported_Label" runat="server"/></span>
</div>
</frm:dialogform>
</body>
</html>