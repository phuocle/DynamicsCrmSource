<%@ Page Inherits="Microsoft.Crm.Common.Application.Pages.Dialogs.FaxDetailPage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<script type="text/javascript">

    var _sAction = "listfax";
    Sys.Application.add_load(function() {
        SetPrevDirectionCode();
    });
</script>
<frm:ActivityForm id="crmForm" runat="server"/>