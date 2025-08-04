<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Web.Commands.LookupAddressPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        var _oAddress;
        var _lookupAddress = null;

        Sys.Application.add_load(function() {
            _lookupAddress = Mscrm.FormControlInputBehavior.GetBehavior('LookupAddress');
            _lookupAddress.add_setAdditionalParams(SetAddressParams);
            _lookupAddress.add_change(AddressChanged);


            _lookupAddress.AddBindingColumn("line1");
            _lookupAddress.AddBindingColumn("postalcode");


            var lookupTable = $get("LookupAddress_lookupTable");
            if (!IsNull(lookupTable)) {
                var lookupDiv = lookupTable.getElementsByClassName("ms-crm-Lookup")[0];
                if (!IsNull(lookupDiv)) {
                    lookupDiv.setAttribute("tabindex", "3");
                }
            }


        });

        $addHandler(document,
            'keydown',
            function(eventObject) {
                if (eventObject.target.id != "cmdDialogCancel" && eventObject.keyCode == KEY_ENTER) {
                    eventObject.preventDefault();
                    Ok();
                }
            });

        function SetAddressParams() {

            _lookupAddress
                .AddParam("parentType", <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_parentType) %>);
            _lookupAddress.AddParam("parentId", <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_parentId) %>);
        }

        function AddressChanged() {
            var datavalue = _lookupAddress.get_dataValue();
            if (!IsNull(datavalue)) {
                _oAddress = new Object();

                var li = datavalue[0];

                _oAddress.Name = li.name;
                _oAddress.Line1 = GetKeyValue(li.keyValues, "line1");
                _oAddress.PostalCode = GetKeyValue(li.keyValues, "postalcode");
                _oAddress.City = GetKeyValue(li.keyValues, "city");
                _oAddress.StateOrProvince = GetKeyValue(li.keyValues, "stateorprovince");
                _oAddress.Country = GetKeyValue(li.keyValues, "country");
                _oAddress.Line2 = GetKeyValue(li.keyValues, "line2");
                _oAddress.Line3 = GetKeyValue(li.keyValues, "line3");
                _oAddress.Telephone = GetKeyValue(li.keyValues, "telephone1");
                _oAddress.Fax = GetKeyValue(li.keyValues, "fax");
                _oAddress.FreightTerms = GetKeyValue(li.keyValues, "freighttermscode");
                _oAddress.ShippingMethod = GetKeyValue(li.keyValues, "shippingmethodcode");
                _oAddress.AddressId = GetKeyValue(li.keyValues, "customeraddressid");
                _oAddress.ContactName = GetKeyValue(li.keyValues, "primarycontactname");
            } else {
                _oAddress = null;
            }
            toggleBtnOk();
        }

        function GetKeyValue(oKeyValues, sKey) {
            if (!IsNull(oKeyValues[sKey])) {
                return oKeyValues[sKey].value;
            }
            return "";
        }

        function toggleBtnOk() {
            $get("butBegin").disabled = !(<% if (_headerForm)
                                             { %> ($get("BillTo").checked || $get("ShipTo").checked) && <% } %> _oAddress);
        }


        function applychanges() {
            var oReturn = new Object();

            <%
                                             if (_headerForm)
                                             {
            %>
            oReturn.BillTo = $get("BillTo").checked;
            oReturn.ShipTo = $get("ShipTo").checked;
            <%
                                             }
                                             else
                                             {
            %>
            oReturn.ShipTo = true;
            <%
                                             }
            %>
            oReturn.Address = _oAddress;
            Mscrm.Utilities.setReturnValue(oReturn);
            closeWindow();
        }


        function cancel() {
            closeWindow(true);
        }


    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <%
        if (_headerForm)
        {
    %>
        <div id="billToShipToHeaderDiv" runat="server">
            <table cellspacing="0" cellpadding="0" style="table-layout: fixed; margin: 2%;">
                <tr>
                    <td valign="top">
                        <input class="checkbox" type="checkbox" id="BillTo" tabIndex="1" onclick="toggleBtnOk();">
                    </td>
                    <td valign="top">
                        <label class="ms-crm-Bold-Header" for="BillTo">
                            <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_155" runat="server"/>
                        </label>
                        <br>
                        <div style="padding-top: 5px; color: #444444;">
                            <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_157" runat="server"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
                <tr>
                    <td valign="top">
                        <input class="checkbox" type="checkbox" id="ShipTo" tabIndex="2" onclick="toggleBtnOk();" <%= (_willCall) ? " disabled" : "" %>>
                    </td>
                    <td valign="top">
                        <label class="ms-crm-Bold-Header" for="ShipTo">
                            <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_166" runat="server"/>
                        </label>
                        <br>
                        <div style="padding-top: 5px; color: #444444;">
                            <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_168" runat="server"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">&nbsp;</td>
                </tr>
            </table>
        </div>
    <%
        }
    %>
    <div>
        <table cellpadding="0" cellspacing="0" width="96%" style="table-layout: fixed; margin: 2%;">
            <col/>
            <tr>
                <td>
                    <div class="ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_180" runat="server"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div style="padding-top: 5px; color: #444444;">
                        <loc:Text ResourceId="Web.SFA.quotes.dlg_lookupaddress.aspx_185" runat="server"/>
                    </div>
                </td>
            </tr>
            <tr style="padding-top: 5px;">
                <td>
                    <sdk:LookupControl id="LookupAddress" LookupTypesText="1071" DefaultType="1071" LookupStyle="single"
                                       lookupbrowse="False" tabIndex="3" runat="server"/>
                </td>
            </tr>
        </table>
    </div>
</frm:dialogform>
</body>
</html>