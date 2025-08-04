<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.EditFieldPermissionDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_editfieldpermission.aspx_34" runat="server"/>
    </title>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        Sys.Application.add_load(OnLoad);

        function OnLoad() {

            window.setTimeout(function() {
                    document.getElementById("readSelect").focus();
                },
                20);
        }

        function applychanges() {

            Mscrm.FieldPermission.applychanges();
        }

        function getCustParamsForItem(i) {


            return Mscrm.FieldPermission.getCustParamsForItem(i);
        }

    </script>
</head>

<body>


<frm:DialogForm id="crmForm" runat="server">
    <table class="stdTable" cellspacing="0" cellpadding="0">
        <col style="width: 5px"/><col style="width: 70%"/><col style="width: 25px"/><col style="width: 30%"/><col style="width: 5px"/>
        <tr style="height: 9px">
            <td colspan="5"> </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <b>
                    <label for="readSelect">
                        <loc:Text ResourceId="Dialog_EditFieldPermission_Read" runat="server"/>
                    </label>
                </b>
            </td>
            <td></td>
            <td>
                <ui:select id="readSelect" TabIndex="0" runat="Server"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="height: 19px">
                <label>
                    <loc:Text ResourceId="Dialog_EditFieldPermission_ReadDescription" runat="server"/>
                </label>
            </td>
            <td colspan="3"></td>
        </tr>
        <tr style="height: 10px">
            <td colspan="5"> </td>
        </tr>
        <tr style="height: 1px">
            <td></td>
            <td colspan="3" style="border-top: 1px solid #CCCCCC"></td>
            <td></td>
        </tr>
        <tr style="height: 10px">
            <td colspan="5"> </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <b>
                    <label for="updateSelect">
                        <loc:Text ResourceId="Dialog_EditFieldPermission_Update" runat="server"/>
                    </label>
                </b>
            </td>
            <td></td>
            <td>
                <ui:select id="updateSelect" TabIndex="0" runat="Server"/>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="height: 10px">
                <label>
                    <loc:Text ResourceId="Dialog_EditFieldPermission_UpdateDescription" runat="server"/>
                </label>
            </td>
            <td colspan="3"></td>
        </tr>
        <tr style="height: 10px">
            <td colspan="5"> </td>
        </tr>
        <tr style="height: 1px">
            <td></td>
            <td colspan="3">
                <div id="divCreateSeparationLine" style="border-top: 1px solid #ccc" runat="server"></div>
            </td>
            <td></td>
        </tr>
        <tr style="height: 10px">
            <td colspan="5"> </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <div id="divCreateLabel" runat="server">
                    <b>
                        <label for="createSelect">
                            <loc:Text ResourceId="Dialog_EditFieldPermission_Create" runat="server"/>
                        </label>
                    </b>
                </div>
            </td>
            <td></td>
            <td>
                <div id="divCreateSelect" runat="server">
                    <ui:select id="createSelect" TabIndex="0" runat="Server"/>
                </div>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="height: 19px">
                <div id="divCreateDescription" runat="server">
                    <label>
                        <loc:Text ResourceId="Dialog_EditFieldPermission_CreateDescription" runat="server"/>
                    </label>
                </div>
            </td>
            <td colspan="3"></td>
        </tr>
    </table>
</frm:DialogForm>

</body>
</html>