<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.AddItem" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script type="text/javascript" language="javascript">
        var _itemType = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(itemType) %>;
        var _wrUrl = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(webResourceUrl) %>;
        var _webResources = null;
        var lblAltText;
        var alternativeText;
        var externalUrl;

        Sys.Application.add_load(function() {

            _webResources = Mscrm.FormControlInputBehavior.GetBehavior('webResources');
            lblAltText = $get("lblAltText");
            alternativeText = Mscrm.FormControlInputBehavior.GetBehavior("alternativeText");
            externalUrl = Mscrm.FormControlInputBehavior.GetBehavior("externalUrl");
            switch (_itemType) {
            case "hyperlink":
                lblAltText.style.display = "None";
                alternativeText.setDisplay(false);
                break;
            case "image":
                lblAltText.style.display = "Inline";
                alternativeText.setDisplay(true);
                break;
            }
            $get("rdWebResource").checked = true;
            externalUrl.set_disabled(true);
            _webResources.set_disabled(false);
        });

        function applychanges() {
            var itemObj = new Mscrm.ItemObject();
            itemObj.type = _itemType;
            if (!_webResources.get_disabled()) {
                var dataValue = _webResources.get_dataValue();
                if (dataValue != null) {
                    itemObj.name = dataValue[0].name;
                    itemObj.serverUrl = _wrUrl;
                }
            } else {
                itemObj.name = externalUrl.get_dataValue();
                itemObj.serverUrl = "";
            }
            if (isNullOrEmptyString(itemObj.name)) {
                alert(LOCID_NO_SELECTION_TEXT);
                _webResources.setFocus();
                return;
            }
            itemObj.altText = alternativeText.get_dataValue();
            Mscrm.Utilities.setReturnValue(itemObj);
            closeWindow();
        }

        function cancel() {
            closeWindow(true);
        }

        function onWrRadioClick() {
            $get("rdExternalUrl").checked = false;
            externalUrl.set_disabled(true);
            _webResources.set_disabled(false);
        }

        function onExtUrlRadioClick() {
            $get("rdWebResource").checked = false;
            _webResources.set_disabled(true);
            externalUrl.set_disabled(false);
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <div>
        <table width="100%" height="100%" cellpadding="0" cellspacing="0">
            <col width=5%/><col width=2%/><col width=70%/><col width=20%/>


            <tr height="1">
                <td/>
                <td>
                    <input name="rdWebResource" id="rdWebResource" type="radio" onclick="onWrRadioClick();" class="radio">
                </td>
                <td>
                    <label for="rdWebResource" id="labelwebResource">
                        <loc:Text ResourceId="Dlg_Add_Item_WebResource_Label" runat="server"/>
                    </label>
                </td>
                <td/>
            </tr>
            <tr height="1">
                <td/>
                <td/>
                <td>
                    <sdk:LookupControl id="webResources" LookupBrowse="false" LookupStyle="single" runat="server"/>
                </td>
                <td/>
            </tr>

            <tr height="1">
                <td/>
                <td>
                    <input name="rdExternalUrl" id="rdExternalUrl" type="radio" onclick="onExtUrlRadioClick();" class="radio">
                </td>
                <td>
                    <label for="rdExternalUrl" id="labelExtUrl">
                        <loc:Text ResourceId="Dlg_Add_Item_ExternalURL_Label" runat="server"/>
                    </label>
                </td>
                <td/>
            </tr>
            <tr height="1">
                <td/>
                <td/>
                <td>
                    <ui:TextBox id="externalUrl" MaxLength="255" runat="server"/>
                </td>
                <td/>
            </tr>


            <tr height="1">
                <td/>
                <td/>
                <td>
                    <label id="lblAltText">
                        <loc:Text ResourceId="Dlg_Add_Item_AltText_Label" runat="server"/>
                    </label>
                </td>
                <td/>
            </tr>
            <tr height="1">
                <td/>
                <td/>
                <td>
                    <ui:TextBox id="alternativeText" MaxLength="255" runat="server"/>
                </td>
                <td/>
            </tr>
        </table>
    </div>
</frm:DialogForm>
</body>
</html>