<%@ Page Inherits="Microsoft.Crm.Common.Application.Pages.Dialogs.AppointmentDetailPage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<!DOCTYPE html>
<script type="text/javascript">

var _sAction	= "listappointment";
Sys.Application.add_load(function () {
if (Mscrm && Mscrm.FormControlInputBehavior) {
var headerTabOwnerid = Mscrm.FormControlInputBehavior.GetBehavior('header_tab_ownerid');
if (headerTabOwnerid) {
headerTabOwnerid.set_dataValue(null);
}

var from = Mscrm.FormControlInputBehavior.GetBehavior('from');
if (from) {
from.set_dataValue(null);
}
}
});
</script>
<frm:ActivityForm id="crmForm" runat="server" />
