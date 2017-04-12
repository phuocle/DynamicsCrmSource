<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.LicensingPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm"%>

<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var _oaAccessModes = null;
        var _multiUserForm = null;
        var _claimsEnabled = '<%= claimsEnabled.ToString() %>';
        var _accessMode0 = null;
        var _accessMode1 = null;
        var _accessMode2 = null;
        var _calType = null;
        var _incomingEmailAccessType = null;
        var _outgoingEmailAccessType = null;

        Sys.Application.add_load(licensingPage_onload);


        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/DomainsAndGroupsPage.aspx");

            if (_claimsEnabled === "True")
                oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/SelectProviderPage.aspx");
            return new NextPageDefinition(oUrl);
        }


        function licensingPage_onload() {
            _accessMode0 = $get("accessMode0");
            _accessMode1 = $get("accessMode1");
            _accessMode2 = $get("accessMode2");
            _calType = Mscrm.FormControlInputBehavior.GetBehavior("calType");
            _incomingEmailAccessType = Mscrm.FormControlInputBehavior.GetBehavior('incomingEmailAccessType');
            _outgoingEmailAccessType = Mscrm.FormControlInputBehavior.GetBehavior('outgoingEmailAccessType');
            _oaAccessModes = new Array(_accessMode0, _accessMode1, _accessMode2);
            createDynamicSelect();

            if (WizardHasProperty("AccessMode")) {
                var sAccessMode = WizardGetProperty("AccessMode");
                for (var i = 0; i < _oaAccessModes.length; i++) {
                    var oAccessMode = _oaAccessModes[i];
                    if (oAccessMode.value == sAccessMode) {
                        oAccessMode.checked = true;
                        filterChildField(oAccessMode.id, 'calType');
                        _calType.set_selectedIndex(WizardGetProperty("SelectedCal"));
                        break;
                    }
                }
            } else {
                filterChildField(_accessMode0.id, 'calType');
            }
        }


        function moveNext() {
            for (var i = 0; i < _oaAccessModes.length; i++) {
                var oAccessMode = _oaAccessModes[i];
                if (oAccessMode.checked) {
                    WizardSetProperty("AccessMode", oAccessMode.value);
                    break;
                }
            }
            WizardSetProperty("SelectedCal", _calType.get_selectedIndex());
            WizardSetProperty("SelectedCalValue", _calType.get_options()[_calType.get_selectedIndex()].DataValue);

            WizardSetProperty("SelectedIncomingEAType", _incomingEmailAccessType.get_selectedIndex());
            WizardSetProperty("SelectedIncomingEATypeValue",
                _incomingEmailAccessType.get_options()[_incomingEmailAccessType.get_selectedIndex()].DataValue);

            WizardSetProperty("SelectedOutgoingEAType", _outgoingEmailAccessType.get_selectedIndex());
            WizardSetProperty("SelectedOutgoingEATypeValue",
                _outgoingEmailAccessType.get_options()[_outgoingEmailAccessType.get_selectedIndex()].DataValue);

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }

        function createDynamicSelect() {
            _multiUserForm = new Object();

            var gArrDependentPicklists =
            [
                {
                    "ParentFieldId": "accessMode0",
                    "ChildFieldId": "calType",
                    "ChildOptionValues": [
                        "<%= Microsoft.Crm.SystemUserLicenseType.EssentialCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.DeviceEssentialCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.BasicCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.DeviceBasicCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.ProfessionalCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.DeviceProfessionalCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.EnterpriseCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.DeviceEnterpriseCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.SalesCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.ServiceCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.FieldServiceCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.ProjectServiceCAL %>"
                    ]
                },
                {
                    "ParentFieldId": "accessMode1",
                    "ChildFieldId": "calType",
                    "ChildOptionValues": ["<%= Microsoft.Crm.SystemUserLicenseType.AdministrativeCAL %>"]
                },
                {
                    "ParentFieldId": "accessMode2",
                    "ChildFieldId": "calType",
                    "ChildOptionValues": [
                        "<%= Microsoft.Crm.SystemUserLicenseType.BasicCAL %>",
                        "<%= Microsoft.Crm.SystemUserLicenseType.DeviceBasicCAL %>",
                    ]
                }
            ];


            for (var depPickList in gArrDependentPicklists) {
                var DependentPicklist = gArrDependentPicklists[depPickList];

                var ChildField = Mscrm.FormControlInputBehavior.GetBehavior(DependentPicklist.ChildFieldId);


                var aValidOptions = new Array();


                for (var value in DependentPicklist.ChildOptionValues) {
                    for (var opt in ChildField.get_options()) {
                        if (DependentPicklist.ChildOptionValues[value] == ChildField.get_options()[opt].DataValue) {
                            aValidOptions.push(ChildField.get_options()[opt]);
                        }
                    }

                    DependentPicklist.Options = aValidOptions;
                }
            }


            _multiUserForm.gArrDependentPicklists = gArrDependentPicklists;
        }


        function filterChildField(paramParentFieldId, paramChildFieldId) {
            var multiUserForm = _multiUserForm.gArrDependentPicklists;

            for (var depPickList in multiUserForm) {
                var DependentPicklist = multiUserForm[depPickList];
                if ((DependentPicklist.ParentFieldId == paramParentFieldId) &&
                    (DependentPicklist.ChildFieldId == paramChildFieldId)) {
                    var ChildField = Mscrm.FormControlInputBehavior.GetBehavior(DependentPicklist.ChildFieldId);


                    ChildField.set_options(DependentPicklist.Options);
                    ChildField.set_selectedIndex(0);

                    if (ChildField.get_options().length == 1) {
                        ChildField.set_disabled(true);
                    } else {
                        ChildField.set_disabled(false);
                    }
                    break;
                }
            }

        }

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" class="ms-crm-AddUsers-Licensing">
        <col width="22"/><col/>
        <tr>
            <td colspan="2" class="ms-crm-AddUsers-TitleDescription-Spacing" style="padding-bottom: 10px;">
                <div class="ms-crm-Bold-Header">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.AccessType.Title" runat="server"/>
                </div>
                <div colspan="2">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.AccessType.Description" runat="server"/>
                </div>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <input type="radio" class="ms-crm-RadioButton" name="accessMode" id="accessMode0" onclick="filterChildField(this.id, 'calType');" value="0" checked="checked"/>
            </td>
            <td class="ms-crm-AddUsers-Licensing-AccessMode" style="padding-bottom: 10px;">
                <label for="accessMode0">
                    <div id="accessModeLabel0" class="ms-crm-AddUsers-Licensing-AccessModeLabel" runat="server"/>
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.AccessMode.0.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <input type="radio" class="ms-crm-RadioButton" name="accessMode" id="accessMode1" onclick="filterChildField(this.id, 'calType');" value="1"/>
            </td>
            <td class="ms-crm-AddUsers-Licensing-AccessMode" style="padding-bottom: 10px;">
                <label for="accessMode1">
                    <div id="accessModeLabel1" class="ms-crm-AddUsers-Licensing-AccessModeLabel" runat="server"/>
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.AccessMode.1.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr id="accessMode2Row" runat="server">
            <td valign="top">
                <input type="radio" class="ms-crm-RadioButton" name="accessMode" id="accessMode2" onclick="filterChildField(this.id, 'calType');" value="2" runat="server"/>
            </td>
            <td class="ms-crm-AddUsers-Licensing-AccessMode" style="padding-bottom: 10px;">
                <label for="accessMode2">
                    <div id="accessModeLabel2" class="ms-crm-AddUsers-Licensing-AccessModeLabel" runat="server"/>
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.AccessMode.2.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="ms-crm-AddUsers-TitleDescription-Spacing" style="padding-bottom: 10px;">
                <div class="ms-crm-Bold-Header">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.LicenseType.Title" runat="server"/>
                </div>
                <label for="calType" colspan="2">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.LicenseType.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="ms-crm-AddUsers-CalType-Select" style="padding-bottom: 10px;">
                <sdk:PicklistControl id="calType" runat="server"/>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="ms-crm-AddUsers-TitleDescription-Spacing" style="padding-bottom: 10px;">
                <div class="ms-crm-Bold-Header">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.EmailAccessConfig.Title" runat="server"/>
                </div>
                <label for="incomingEmailAccessType" colspan="2">
                    <loc:Text ResourceId="AddUsersWizard.LicensingPage.EmailAccessConfig.Description" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <table class="stdTable">
                    <col width="200"/>
                    <tr>
                        <td>
                            <label for="incomingEmailAccessType">
                                <loc:Text ResourceId="AddUsersWizard.LicensingPage.EmailAccessConfig.IncomingAccessTypeLabel" runat="server"/>
                            </label>
                        </td>
                        <td>
                            <sdk:PicklistControl id="incomingEmailAccessType" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="outgoingEmailAccessType">
                                <loc:Text ResourceId="AddUsersWizard.LicensingPage.EmailAccessConfig.OutgoingAccessTypeLabel" runat="server"/>
                            </label>
                        </td>
                        <td>
                            <sdk:PicklistControl id="outgoingEmailAccessType" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>