<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ExportFieldTranslationDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript">

        function doExport() {
            $get("mainBodyDiv").style.display = "none";
            $get("progressDiv").style.display = "block";
            $get("butExport").style.display = "none";
            $get("butExport").style.visibility = "hidden";
            $get("cmdDialogCancel").innerHTML = LOCID_CLOSE_BUTTON_LABEL;
            $get("cmdDialogCancel").style.visibility = "visible";

            var oUrl = Mscrm.CrmUri.create(location.href);
            location.href = oUrl.toString() + "?command=exportfieldtranslation";
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        Sys.Application.add_load(function() {
            Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
            if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
                document.body.addEventListener("touchmove",
                    function(event) {
                        event.preventDefault();
                        event.stopPropagation()
                    },
                    false);
            }
        });

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <div id="progressDiv" style="display: none; width: 100%;" scrolling="no" runat="server">
    </div>
    <div id="mainBodyDiv" runat="server">
    </div>
</frm:DialogForm>
</body>
</html>