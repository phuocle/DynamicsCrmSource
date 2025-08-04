<%@ Page Inherits="Microsoft.Crm.Common.Application.Pages.Dialogs.FaxDetailPage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<script type="text/javascript">

var _sAction	= "listfax";

function tryClearFormField(fieldName) {
field = Mscrm.FormControlInputBehavior.GetBehavior(fieldName);
if (!IsNull(field)) {
field.set_dataValue(null);
}
}

Sys.Application.add_load(function () {
SetPrevDirectionCode();
if (Mscrm && Mscrm.FormControlInputBehavior) {
tryClearFormField('header_tab_ownerid');
tryClearFormField('ownerid');
tryClearFormField('from');
tryClearFormField('to');
}
});
</script>
<frm:ActivityForm id="crmForm" runat="server" />