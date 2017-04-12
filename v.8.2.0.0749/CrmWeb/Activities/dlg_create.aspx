<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.CreateDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script language="JavaScript" type="text/javascript">
        function applychanges() {


            var arguments = getDialogArguments();


            var oArgs = arguments["window"];

            var form = null;
            var activity = "<%= activityRegardingObjectId %>";
            window.setTimeout(function() { closeWindow(true); }, 5);
            if (!IsNull(oArgs) && !IsNull(oArgs.parent)) {
                try {
                    form = oArgs.parent.document.getElementById("crmFormSubmit");
                    if (IsNull(activity)) {
                        activity = form.crmFormSubmitId.value;
                    }
                } catch (e) {
                    form = null;
                }
                if (!IsNull(form) && !isNullOrEmptyString(activity)) {
                    oArgs.parent.Mscrm.AddActivity.addActivityToForm(parseInt(_selectedItem.getAttribute("item"), 10));
                    return;
                }
            }
            if (!IsNull(oArgs)) {
                try {
                    form = oArgs.document.getElementById("crmFormSubmit");
                    activity = form.crmFormSubmitId.value;
                } catch (e) {
                    form = null;
                }
                if (!IsNull(form) && !isNullOrEmptyString(activity)) {

                    oArgs.Mscrm.AddActivity.addActivityToForm(parseInt(_selectedItem.getAttribute("item"), 10));
                } else {
                    oArgs.openObj(_selectedItem.getAttribute("item"));
                }
            }
        }

        function cancel() {
            closeWindow(true);
        }
    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" cellpadding="0">
        <tr class="main">
            <td>
                <div class="ms-crm-Dialog-List" style="overflow: auto;">
                    <asp:PlaceHolder id="activitiesList" runat="server"/>
                </div>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>