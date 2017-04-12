<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ChangeParentDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_changeparent.aspx_46" runat="server">
            <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(parentObjName) %></loc:Argument>
        </loc:Text>
    </title>

    <script type="text/javascript" language="javascript">


        var _sAction = "changeparent";

        var _crmOwnerLookup = null;

        Sys.Application.add_load(function() {
            _crmOwnerLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmOwnerLookup');


            if (!IsNull(_a) && _a.length === 1) {
                _crmOwnerLookup.AddParam("currentid", _a[0]);
            }


            var dlgHdBodyContainerElement = document.getElementById("DlgHdBodyContainer");
            dlgHdBodyContainerElement.style.top = "100px";
        });

        function applychanges() {
            if (IsNull(_crmOwnerLookup.get_dataValue())) {
                if (_iObjType != SystemUser) {
                    alert(LOCID_NO_ITEM_SELECTED);
                } else {
                    go();
                }
            } else {
                _custParams = "&ownerId=";


                with (_crmOwnerLookup.get_dataValue()[0]) {
                    _custParams += id;
                    _custParams += "&ownerType=" + type;
                }
                go();
            }
        }
    </script>
    <style type="text/css">
        .ms-crm-changeParentLookup {
            padding-top: 5px;
            padding-bottom: 10px;
            color: #444444;
        }
    </style>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

    <table width="100%" style="height: 100%;" cellspacing="0" cellpadding="0">
        <col width="26"/><col/>
        <tr>
            <td valign="top">
                <div class="ms-crm-changeParentLookup">
                    <label id="OwnerLookupLabel" for="crmOwnerLookup" runat="server"></label>
                </div>
                <sdk:LookupControl id="crmOwnerLookup" LookupStyle="single" runat="server"/>
            </td>
        </tr>
    </table>

</frm:DialogForm>

</body>
</html>