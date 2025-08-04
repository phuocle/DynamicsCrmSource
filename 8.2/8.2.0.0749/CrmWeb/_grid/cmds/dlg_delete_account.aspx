<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteAccountConfirmationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">


        var _sAction = "delete";
        var _iObjType = "<%= ObjType.ToString("D", CultureInfo.InvariantCulture) %>";

        function button_delete() {

            var confirmDialogHeight = 200;
            var confirmDialogWidth = 350;
            if (window.parent.UseTabletExperience) {

                confirmDialogHeight = 240;
                confirmDialogWidth = 470;
            }

            oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_confirm_delete.aspx?ObjectTypeId=" +
                CrmEncodeDecode.CrmUrlEncode(_iObjType) +
                "&iTotal=" +
                <%= Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(iTotal.ToString("D", CultureInfo.InvariantCulture)) %>);
            var crmDialog = new Mscrm.CrmDialog(oUrl, null, confirmDialogWidth, confirmDialogHeight, null);
            crmDialog.setCallbackInfo("performDialogAction", this, null);
            crmDialog.show();
        }

        function performDialogAction(oResult) {
            if (oResult) {
                if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
                    document.body.addEventListener("touchmove",
                        function(event) {
                            event.preventDefault();
                            event.stopPropagation()
                        },
                        false);
                }
                prepUI();
                _bActionStarted = true;
                _sAction = "delete";
                window.setTimeout("performAction()", 10);
            }
        }

        function button_deactivate() {
            prepUI();

            _bActionStarted = true;
            _sAction = "deactivate";
            window.setTimeout("performAction()", 10);
        }

        function prepUI() {
            $get("cmdDialogDelete").disabled = true;
            $get("cmdDialogDeactivate").disabled = true;


            PrepareFillBar();
        }

        Sys.Application.add_load(function() {
            Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
        });
    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <loc:Text ResourceId="Web._grid.cmds.dlg_delete_account.aspx_54" runat="server">
        <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjNamePlural) %></loc:Argument>
    </loc:Text>
    <span id="sharePointDocumentsWarning" runat="server">
        <loc:Text ResourceId="Delete_Account_Dialog_RelatedDocumentsWarning" runat="server"/>
    </span>
    <br>
    <br>
    <loc:Text ResourceId="Delete_Customer_Dialog_Deactivate_Instruction" runat="server">
        <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjNamePlural) %></loc:Argument>
    </loc:Text>
    <br>
    <loc:Text ResourceId="Delete_Customer_Dialog_Delete_Instruction" runat="server">
        <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjNamePlural) %></loc:Argument>
    </loc:Text>
</frm:DialogForm>

</body>
</html>