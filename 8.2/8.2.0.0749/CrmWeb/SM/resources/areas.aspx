<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.Resources.Areas" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<cnt:AppHeader runat="server" id="crmHeader">
    <script language="javascript" type="text/javascript">
        var _oId = new Array(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentObjectId) %>);
    </script>

</cnt:AppHeader>