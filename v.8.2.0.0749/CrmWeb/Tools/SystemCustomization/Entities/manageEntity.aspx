<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.Entities.ManageEntityPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>

<!DOCTYPE html>
<html>


<head>


<cnt:AppHeader id="crmHeader" runat="server"/>


<script type="text/javascript" language="javascript">

    var _bCreate = <%= _mode == Mode.Create ? "true" : "false" %>;
    var _sEntityId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_entityId) %>;
    var _siteMapId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(siteMapId) %>;
    var _divPreviewEntityColor = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_divEntityColor) %>;
    var _mobileOfflineFilters = null;
    var _isMobileOfflineFiltersFeatureAvailable = <%= (IsMobileOfflineFiltersFeatureAvailable) ? "true" : "false" %>;
    <% if (IsMobileOfflineFiltersFeatureAvailable && _entityMD != null && _entityMD.EntityInfo != null)
       { %>
    _mobileOfflineFilters =
        <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_entityMD.EntityInfo.MobileOfflineFilters) %>;
    <% } %>

    Sys.Application.add_load(settingsOnLoad);

    function settingsOnLoad() {
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.Theme)) {
            var divPreviewEntityColor = $get('divPreviewEntityColor');
            divPreviewEntityColor.style.backgroundColor = _divPreviewEntityColor;
        }
    }

    function getEntityId() {

        var currentUri = Mscrm.GlobalImported.CrmUri.create(window.location.href);
        var entityId = currentUri.get_query()['id'];
        if (isNullOrEmptyString(entityId)) {
            entityId = currentUri.get_query()['entityId'];
        }

        return entityId;
    }

    function getEntityGridFormXml(entityId) {

        if (!isNullOrEmptyString(entityId)) {

            var command = new RemoteCommand("SystemCustomization", "GetEntityHomeGridEventsXml", null);
            command.SetParameter("entityId", entityId);
            var result = command.Execute(null);
            var formXml = result.ReturnValue;
        }

        return formXml;
    }

    function initializeEntityEventsXml() {

        var entityId = getEntityId();

        if (!isNullOrEmptyString(entityId)) {

            var formXml = getEntityGridFormXml(entityId);

            if (isNullOrEmptyString(formXml)) {
                Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml("<entity><form></form></entity>");
                Mscrm.FormLibraryAndEventHandlerUtils.existingFormXml = null;
            } else {
                Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(formXml);
                Mscrm.FormLibraryAndEventHandlerUtils.existingFormXml = XUI.Xml.LoadXml(formXml);
            }
        }
    }

    function updateTabEvents() {
        var containsEditableGrid = Mscrm.CustomControls.CustomControlManager.get_instance().containsEditableGrid();

        var tabEvents = $get('tabEventsTab');

        if (IsNull(tabEvents)) {
            return;
        }

        if (containsEditableGrid) {
            tabEvents.hidden = false;
            tabEvents.style.visibility = "visible";

            if (IsNull(Mscrm.FormLibraryAndEventHandlerUtils.formXml)) {
                initializeEntityEventsXml();
            }

            var entities = Mscrm.CustomControls.CustomControlManager.get_instance().getEditableGridViewEntities();

            Mscrm.FormLibraryAndEventHandlerUtils.onLoadFromEntityPage(entities);
        } else {
            Mscrm.FormLibraryAndEventHandlerUtils.removeGridControlEvents();
            tabEvents.hidden = true;
            tabEvents.style.visibility = "hidden";
        }
    }

    function onClickEnableDupCheck() {
        <% if (_entityMD != null && _InitialValueEnableDupCheck == true)
           { %>
        var chkEnableDupCheck = $get('chkEnableDupCheck');
        if (chkEnableDupCheck.checked == false) {
            var confirmation = confirm(LOCID_CONFIRM_DISABLE_DEDUP);
            if (confirmation == false) {
                chkEnableDupCheck.checked = true;
            }
        }

        <% } %>
    }

    function onClickEnableAuditCheck() {
        <% if (_entityMD != null)
           { %>
        var chkIsAuditingEnabled = $get('chkIsAuditingEnabled');
        if (Mscrm.FormUtility.isControlDirty(chkIsAuditingEnabled)) {
            if (chkIsAuditingEnabled.checked == false) {
                var confirmation = confirm(LOCID_CONFIRM_AUDIT_DISABLE);
                if (confirmation == false) {
                    chkIsAuditingEnabled.checked = true;
                }
            }
        }
        if (chkIsAuditingEnabled.checked == false) {
            $get('labelWarningMessageForAudit').style.display = "none";
        } else {
            $get('labelWarningMessageForAudit').style.display = "inline";
        }

        <% } %>
    }

    function enableDisableAutoRoute() {
        var _chkAutoRoute = $get('chkAutoRoute');
        if ((Mscrm.FormControlInputBehavior.GetBehavior('selOwnershipType')
                .get_dataValue() ==
                _ownershipTypeUserOwned) &&
            $get('chkCollaboration').checked == true) {
            _chkAutoRoute.disabled = false;
        } else {
            _chkAutoRoute.disabled = true;
            _chkAutoRoute.checked = false;
        }

    }

    function enableDisableInteractiveExperience() {
        var _chkAEActivities = $get('chkAEActivities');
        var _chkAENotes = $get('chkAENotes');
        if ($get('chkIsInteractionCentricEnabled').checked == true) {
            _chkAEActivities.checked = true;
            _chkAEActivities.disabled = true;
            _chkAENotes.checked = true;
            _chkAENotes.disabled = true;
        } else {
            if (_bCreate) {
                _chkAEActivities.checked = false;
                _chkAEActivities.disabled = false;
                _chkAENotes.checked = false;
                _chkAENotes.disabled = false;
            } else {
                <% if (_entityMD != null && _entityMD.HasActivities == false)
                   { %>
                _chkAEActivities.checked = false;
                _chkAEActivities.disabled = false;
                <% } %>
                <% if (_entityMD != null && _entityMD.HasNotes == false)
                   { %>
                _chkAENotes.checked = false;
                _chkAENotes.disabled = false;
                <% } %>
            }

        }

    }

    function enableDisableMobileClientOptions() {
        var _chkMobileClientEnabled = $get('chkIsEnabledForMobileClient');
        var _chkMobileClientReadOnly = $get('chkIsReadOnlyForMobileClient');
        <% if (IsMocaOfflineFeatureAvailable)
           { %>
        var _chkMobileClientOffline = $get('chkIsOfflineForMobileClient');
        <% if (!IsMobileOfflineFiltersFeatureAvailable)
           { %>
        var _numDaysSinceRecordLastModified = $get('numDaysSinceRecordLastModified');
        <% } %>
        <% } %>

        if (_chkMobileClientEnabled.checked == true) {
            _chkMobileClientReadOnly.disabled = <%= _defaultIsReadOnlyForMobileClientDisabled ? "true" : "false" %>;
            _chkMobileClientReadOnly.checked = <%= _defaultIsReadOnlyForMobileClientChecked ? "true" : "false" %>;

            <% if (IsMocaOfflineFeatureAvailable)
               { %>
            _chkMobileClientOffline.disabled = <%= _defaultIsOfflineForMobileClientDisabled ? "true" : "false" %>;
            _chkMobileClientOffline.checked = <%= _defaultIsOfflineForMobileClientChecked ? "true" : "false" %>;
            <% } %>
        } else {
            <% if (IsMocaOfflineFeatureAvailable)
               { %>
            var _isDisable = true;

            if (_chkMobileClientOffline.checked) {

                <% if (_entityMD != null && Microsoft.Crm.Application.Utility.Util.IsEntityLinkedToMobileOfflineProfile(Microsoft.Crm.Application.Security.UserInformation.Current, _entityMD.LogicalName))
                   {
                %>
                _chkMobileClientEnabled.checked = true;
                Mscrm.InternalUtilities._Script.alert(LOCID_SYSCUST_UNCHECK_OFFLINE);
                _isDisable = false;
                <%
                   }
                %>
            }


            if (_isDisable) {
                _chkMobileClientReadOnly.disabled = true;
                _chkMobileClientReadOnly.checked = false;

                _chkMobileClientOffline.disabled = true;
                _chkMobileClientOffline.checked = false;
                <% if (!IsMobileOfflineFiltersFeatureAvailable)
                   { %>
                _numDaysSinceRecordLastModified.disabled = !_chkMobileClientOffline.checked;
                <% } %>
            }
            <% }
               else
               { %>
            _chkMobileClientReadOnly.disabled = true;
            _chkMobileClientReadOnly.checked = false;
            <% } %>
        }
    }

    function onClickChangeTrackingCheck() {
        <% if (IsMocaOfflineFeatureAvailable)
           { %>
        var _chkChangeTracking = $get('chkChangeTrackingEnabled');
        var _chkMobileClientOffline = $get('chkIsOfflineForMobileClient');


        if (!_chkChangeTracking.checked && _chkMobileClientOffline.checked) {
            _chkChangeTracking.checked = true;
            Mscrm.InternalUtilities._Script.alert(LOCID_SYSCUST_CHANGETRACKING);
        }
        <% } %>
    }


    function onClickEnableForMobileOfflineCheck() {
        var _chkMobileClientOffline = $get('chkIsOfflineForMobileClient');
        var _chkChangeTracking = $get('chkChangeTrackingEnabled');
        <% if (!IsMobileOfflineFiltersFeatureAvailable)
           { %>
        var _numDaysSinceRecordLastModified = $get('numDaysSinceRecordLastModified');
        <% } %>


        if (!_chkMobileClientOffline.checked) {

            <% if (_entityMD != null && Microsoft.Crm.Application.Utility.Util.IsEntityLinkedToMobileOfflineProfile(Microsoft.Crm.Application.Security.UserInformation.Current, _entityMD.LogicalName))
               {
            %>
            _chkMobileClientOffline.checked = true;
            Mscrm.InternalUtilities._Script.alert(LOCID_SYSCUST_UNCHECK_OFFLINE);
            <%
               }
            %>
        } else {
            _chkChangeTracking.checked = true;
        }

        <% if (!IsMobileOfflineFiltersFeatureAvailable)
           { %>
        _numDaysSinceRecordLastModified.disabled = !_chkMobileClientOffline.checked;
        <% } %>
    }


    function onClickMobileOfflineFilters() {
        <% if (IsMobileOfflineFiltersFeatureAvailable && _entityMD != null && _entityMD.EntityInfo != null)
           { %>


        var _chkMobileClientOffline = $get('chkIsOfflineForMobileClient');
        if (_chkMobileClientOffline != null && _chkMobileClientOffline.checked) {
            var oUrl = Mscrm.CrmUri.create("/tools/systemcustomization/entities/mobileofflinefilters.aspx");
            oUrl.get_query()["entityCode"] = <%= _entityMD.EntityInfo.ObjectTypeCode %>;
            oUrl.get_query()["parentFormObjectTypeCode"] = <%= Microsoft.Crm.Util.None %>;


            var oDialog = new Object();
            oDialog.sFetchXml = _mobileOfflineFilters;

            var options = new Xrm.DialogOptions();
            options.width = 600;
            options.height = 500;

            Xrm.Internal.openDialog(oUrl.toString(),
                options,
                oDialog,
                null,
                function(oReturned) { setMobileOfflineFiltersCallbackFunction(oReturned); });
        }
        <% } %>
    }

    function setMobileOfflineFiltersCallbackFunction(oReturned) {
        _mobileOfflineFilters = oReturned == null ? null : oReturned.sFetchXml;
    }


    <% if (IsCustomHelpDefined)
       { %>
    function enableDisableHelpURL() {
        var txtURL = Mscrm.FormControlInputBehavior.GetBehavior('txtHelpURL');
        if (Mscrm.FormControlInputBehavior.GetBehavior("checkCustomizedHelp").get_dataValue()) {
            txtURL.set_disabled(false);
        } else {
            txtURL.set_disabled(true);
        }
    }
    <% } %>

    function onhelpkeydown(e) {
        var srcElement = e.target;
        if (e.keyCode == 13 && !IsNull(srcElement)) {
            e.preventDefault();
            XUI.Html.DispatchDomEvent(srcElement, XUI.Html.CreateDomEvent("onclick"));
        }
    }

    <% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.CustomControlMobile.Name, Microsoft.Crm.Application.Security.UserInformation.Current) && _mode != Mode.Create && _mode != Mode.View)
       { %>
    window.onload = function() {
        var tabEvents = $get('tabEventsTab');

        if (!IsNull(tabEvents)) {
            tabEvents.style.visibility = "hidden";
            tabEvents.hidden = true;
        }

        Mscrm.CustomControls.CustomControlManager.get_instance().initiateFromEntityConfig();
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents)) {
            if (!IsNull(Mscrm.CustomControls)) {
                Mscrm.CustomControls.CustomControlManager.get_instance()
                    .set_onExistingControlsAddedOrRemoved(updateTabEvents);
                updateTabEvents();
            }
        }
    }
    <% } %>

</script>

<style type="text/css">

    #navBarContainer {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        float: right;
        <% }
           else
           { %>
        float: left;
        <% } %>
        width: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width) %>px;
    }

    div.page {
        position: absolute;
        top: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(formHeaderHeight) %>px;
        bottom: 24px;
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        right: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width) %>px;
        left: 0px;
        <% }
           else
           { %>
        right: 0px;
        left: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(detailForm_Left_Navigation_Width) %>px;
        <% } %>
        margin: 0px 7px 0px 10px;
    }

    #tabsContent {
        position: absolute;
        top: 21px;
        left: 0px;
        right: 0px;
        bottom: 24px;
    }

    div.tabContent {
        position: absolute;
        overflow-y: auto;
        overflow-x: hidden;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .globalAuditWarningTD {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        padding-right: 23px;
        <% }
           else
           { %>
        padding-left: 23px;
        <% } %>
        padding-top: 0px !important;
        padding-bottom: 3px;
    }

    .enhancedFiltersLink {
        padding-left: 25px;
        width: 20%;
    }

</style>
</head>


<body style="overflow: hidden;">
<form name="frmReload" id="frmReloadId" action="" method="post">
    <input type="hidden" name="appSolutionId" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentSolutionContext.SolutionId) %>"/>
    <input type="hidden" id="pagemode" name="pagemode" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_pageMode) %>"/>
</form>

<div class="ms-crm-Form-Layout">


<div id="tr_crmMenuBar" style="height: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(formHeaderHeight) %>px">
    <div id="div_crmMenuBar" style="display: <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(formHeaderDisplay) %>">
        <mnu:AppCustomizationMenuBar id="crmEntityMenuBar" runat="server"/>
    </div>
</div>

<div class="ms-crm-Form-Background" style="height: 100%">


<div id="navBarContainer" class="ms-crm-Form-LeftBar">
    <cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>


<div id="tdAreas">
<div id="areaForm">


<div id="divInformation" class="page" style="display: inline;">
<div id="informationArea">
<div class="ms-crm-TabBar-Cell">


    <cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>

<div id="tabsContent">


<div id="tabGeneral" class="ms-crm-Tab tabContent">
<table width="99%" cellspacing="0" cellpadding="0" style="margin-bottom: 10px">


    <tr>

        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Title" runat="server"/>
        </td>
    </tr>


    <tr style="height: 20px">
        <td></td>
    </tr>

    <tr>

        <td>
            <table width="100%" cellspacing="0" cellpadding="0">
                <col style="width: 48%"/><col/><col style="width: 48%"/>
                <tr>

                    <td>
                        <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                        <col style="width: 140px"/><col/>

                        <tr class="param">
                            <td id="txtSingularNameLabel" class="ms-crm-Field-Required">
                                <label for="txtSingularName">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.SingularName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <ui:TextBox id="txtSingularName" OnChange="onSingularNameChange();" TabIndex="1" runat="server"/>
                            </td>
                        </tr>

                        <tr class="param">
                            <td id="txtPluralNameLabel" class="ms-crm-Field-Required">
                                <label for="txtPluralName">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.PluralName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <ui:TextBox id="txtPluralName" TabIndex="2" runat="server"/>
                            </td>
                        </tr>

                        <tr class="param">
                            <td id="txtSchemaNameLabel" class="ms-crm-Field-Required">
                                <label for="txtSchemaName">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td>
                                <table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
                                    <tr>
                                        <%
                                            if (_mode == Mode.Create)
                                            {
                                        %>
                                            <td>
                                                <div class="manageAttribute_div_SchemaName"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant()) %></div>
                                            </td>
                                        <%
                                            }
                                        %>
                                        <td width="100%">
                                            <ui:TextBox id="txtSchemaName" TabIndex="3" runat="server"/>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr class="param">
                            <td id="selPrimaryImageLabel">
                                <label for="selPrimaryImage">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.PrimaryImage" runat="server"/>
                                </label>
                            </td>
                            <td>
                                <ui:Select id="selPrimaryImage" TabIndex="5" runat="server"/>
                            </td>
                        </tr>

                        <% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Theme, Microsoft.Crm.Application.Security.UserInformation.Current) == true)
                           { %>
                            <tr class="param">
                            <td id="txtentityColor">
                                <label for="entityColor">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.Color" runat="server"/>
                                </label>
                            </td>
                    </td>
                    <td>
                        <table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
                            <tr>
                                <td>
                                    <ui:textbox id="entityColor" OnChange="onEntityColorChange();" tabindex="5" runat="server"/>
                                </td>
                                <td style="width: 15%;">
                                    <div id="divPreviewEntityColor" class="ms-crm-Input-Container" style="margin-left: 15%;">
                                        &nbsp;
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <% } %>
            </table>
        </td>

        <td>&nbsp;</td>

        <td>
            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                <col style="width: 140px"/><col/>

                <tr class="param">
                    <td>&nbsp;</td>
                </tr>

                <tr class="param">
                    <td id="selOwnershipTypeLabel" class="ms-crm-Field-Required">
                        <label for="selOwnershipType">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.OwnershipType" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                        </label>
                    </td>
                    <td>
                        <ui:Select id="selOwnershipType" TabIndex="4" onchange="enableDisableAutoRoute();" runat="server"/>
                    </td>
                </tr>

                <tr class="param">
                    <td colspan="2">
                        <ui:CheckBox id="checkIsActivity" OnClick="Mscrm.CustomActivity.onIsActivityCheckBoxClick(this);" TabIndex="5" runat="server"/>
                        <label id="checkIsActivityLabel" for="checkIsActivity">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.IsActivity" runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr class="param">
                    <td colspan="2">
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="width: 5%">
                                </td>
                                <td>
                                    <ui:CheckBox id="checkIsCommunicationActivity" OnClick="Mscrm.CustomActivity.onSurfaceActivityCheckBoxClick(this);" TabIndex="6" runat="server"/>
                                    <label id="checkIsCommunicationActivityLabel" for="checkIsCommunicationActivity">
                                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.IsCommunicationActivity" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="param">
                    <td>&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td colspan="3">
            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                <col style="width: 140px"/>
                <col/>
                <tr class="param" style="height: 50px;">
                    <td id="txtDescriptionLabel" style="vertical-align: top">
                        <label for="txtDescription">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.Description" runat="server"/>
                        </label>
                    </td>
                    <td>
                        <ui:TextArea id="txtDescription" Height="50px" TabIndex="7" runat="server"/>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</td>
</tr>


<tr style="height: 20px">
    <td></td>
</tr>


<tr>

    <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.DisplayAreaSection.Title" runat="server"/>
    </td>
</tr>
<tr class="param">

    <td>
        <table id="tblDisplayAreas" width="100%" cellspacing="0" cellpadding="0" runat="server">
        </table>
    </td>
</tr>


<tr style="height: 20px">
    <td></td>
</tr>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Theme, Microsoft.Crm.Application.Security.UserInformation.Current) == true)
   { %>
    <tr style="height: 10px">
        <td></td>
    </tr>
<% } %>


<tr>

    <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Title" runat="server"/>
    </td>
</tr>

<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.InteractionCentricDashboard, Microsoft.Crm.Application.Security.UserInformation.Current) == true)
   { %>


    <tr style="height: 10px">
        <td></td>
    </tr>
    <tr>

        <td style="vertical-align: bottom">
            <ui:CheckBox id="chkIsInteractionCentricEnabled" TabIndex="21" onclick="enableDisableInteractiveExperience();" runat="server"/>
            <label id="chkIsInteractionCentricEnabledLabel" for="chkIsInteractionCentricEnabled">
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.ICSection.EnableOnly.Labels.EnableEntity" runat="server"/>
            </label>
        </td>

    </tr>
<% } %>

<tr style="height: 10px">
    <td></td>
</tr>


<tr>

    <td class="ms-crm-Form-Section" style="vertical-align: bottom">
        <nobr>
            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Processes.Title" runat="server"/>
        </nobr>
    </td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>


<td>
    <table width="100%" cellspacing="0" cellpadding="0">

        <tr>
            <td>
                <ui:CheckBox id="chkIsBusinessProcessEnabled" TabIndex="22" runat="server"/>
                <label id="chkIsBusinessProcessEnabledLabel" for="chkIsBusinessProcessEnabled">
                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableBusinessProcess" runat="server"/>
                </label>
            </td>
        </tr>
    </table>
</td>
<tr style="height: 10px">
    <td></td>
</tr>
<tr>

    <td class="ms-crm-Form-Section" style="vertical-align: bottom">
        <nobr>
            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.CommunicationCollaboration.Title" runat="server"/>
        </nobr>
    </td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>

<tr class="param">

    <td>
        <table width="100%" cellspacing="0" cellpadding="0">

            <% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Feedback, Microsoft.Crm.Application.Security.UserInformation.Current) == true)
               { %>
                <tr>
                    <td>
                        <ui:CheckBox id="chkAEFeedback" TabIndex="24" runat="server"/>
                        <label id="chkAEFeedbackLabel" for="chkAEFeedback">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Feedback" runat="server"/>
                        </label>
                    </td>
                </tr>
            <% } %>

            <tr>
                <td>
                    <ui:CheckBox id="chkAENotes" TabIndex="25" runat="server"/>
                    <label id="chkAENotesLabel" for="chkAENotes">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Notes" runat="server"/>
                    </label>
                </td>
            </tr>

            <tr>
                <td>
                    <ui:CheckBox id="chkAEActivities" TabIndex="26" runat="server"/>
                    <label id="chkAEActivitiesLabel" for="chkAEActivities">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Activities" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="chkCConnections" TabIndex="27" runat="server"/>
                    <label id="chkCConnectionsLabel" for="chkCConnections">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Connections" runat="server"/>
                    </label>
                </td>
            </tr>

            <tr>
                <td>
                    <ui:CheckBox id="chkAEEnableEmail" TabIndex="28" runat="server"/>
                    <label id="chkAEEnableEmailLabel" for="chkAEEnableEmail">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableEmail" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="EnableMailMergeCheck" TabIndex="30" runat="server"/>
                    <label id="Label1" for="EnableMailMergeCheck">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MailMerge" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="enableDocumentMgmt" TabIndex="31" runat="server"/>
                    <label id="enableDocumentMgmtLabel" for="enableDocumentMgmt">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.DocumentMgmt" runat="server"/>
                    </label>
                </td>
            </tr>


            <% if (Microsoft.Crm.Application.Utility.Util.IsOneNoteIntegrationEnabled(Microsoft.Crm.Application.Security.UserInformation.Current))
               {
            %>
                <tr>
                    <td>
                        <ui:CheckBox id="enableOneNoteIntegration" TabIndex="32" runat="server"/>
                        <label id="enableOneNoteIntegrationLabel" for="enableOneNoteIntegration">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.OneNoteIntegration" runat="server"/>
                        </label>
                    </td>
                </tr>
            <%
               }
            %>


            <tr>
                <td>
                    <ui:CheckBox id="enableAutoCreateAccessTeams" TabIndex="34" runat="server"/>
                    <label id="enableAutoCreateAccessTeamsLabel" for="enableAutoCreateAccessTeams">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.AutoCreateAccessTeams" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="chkCollaboration" TabIndex="35" onclick="enableDisableAutoRoute();" runat="server"/>
                    <label id="chkCollaborationLabel" for="chkCollaboration">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.Callaboration" runat="server"/>
                    </label>
                </td>
            </tr>

            <tr>
                <td>
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="width: 5%">
                            </td>
                            <td>
                                <ui:CheckBox id="chkAutoRoute" TabIndex="36" runat="server"/>
                                <label id="chkAutoRouteLabel" for="chkAutoRoute">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableOnly.Labels.EnableAutoRoute" runat="server"/>
                                </label>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>


            <% if (Microsoft.Crm.Application.Utility.Util.IsKnowledgebaseFeatureAvailable(Microsoft.Crm.Application.Security.UserInformation.Current))
               {
            %>
                <tr>
                    <td>
                        <ui:CheckBox id="enableKnowledgeMgmt" TabIndex="37" runat="server"/>
                        <label id="enableKnowledgeMgmtLabel" for="enableKnowledgeMgmt">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.KnowledgeMgmt" runat="server"/>
                        </label>
                    </td>
                </tr>
            <%
               }
            %>




            <% if (Microsoft.Crm.Application.Utility.Util.IsSLAFeatureAvailable(Microsoft.Crm.Application.Security.UserInformation.Current))
               {
            %>
                <tr>
                    <td>
                        <ui:CheckBox id="enableSla" TabIndex="37" runat="server"/>
                        <ui:LabelUI id="enableSlaLabel" runat="server"/>
                    </td>
                </tr>
            <%
               }
            %>
        </table>
    </td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>
<tr>

    <td class="ms-crm-Form-Section" style="vertical-align: bottom">
        <nobr>
            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.DataServices.Title" runat="server"/>
        </nobr>
    </td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>
<tr >

    <td>
    <table width="100%" cellspacing="0" cellpadding="0">


    <tr>
        <td>
            <ui:CheckBox id="chkIsQuickCreateEnabled" TabIndex="40" runat="server"/>
            <label id="chkIsQuickCreateEnabledLabel" for="chkIsQuickCreateEnabled">
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.QuickCreate" runat="server"/>
            </label>
        </td>
    </tr>


    <tr>
        <td>
            <ui:CheckBox id="chkEnableDupCheck" TabIndex="41" onclick="onClickEnableDupCheck();" runat="server"/>
            <label id="chkEnableDupCheckLabel" for="chkEnableDupCheck">
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.DuplicateDetection" runat="server"/>
            </label>
        </td>
    </tr>


    <tr>
        <td>
            <ui:CheckBox id="chkIsAuditingEnabled" TabIndex="42" onclick="onClickEnableAuditCheck();" runat="server"/>
            <label id="chkIsAuditingEnabledLabel" for="chkIsAuditingEnabled">
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.Auditing" runat="server"/>
            </label>
        </td>
    </tr>
    <tr>
        <td>
            <ui:LabelUI id="labelWarningMessageForAudit" runat="server"/>
        </td>
    </tr>
    <tr class="param" id="labelWarningMessageForGlobalAudit" runat="server">
        <td class="globalAuditWarningTD">
            <img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>"/>
            <loc:text resourceid="SystemCustomization.ManageEntityPage.Audit.Labels.EnableGlobal"
                      runat="server"/>
        </td>
    </tr>


    <% Version version = OrganizationBuildVersionCache.Instance().LookupEntry(Microsoft.Crm.Application.Security.UserInformation.Current.OrganizationId, Microsoft.Crm.Application.Security.UserInformation.Current).CrmVersion;
       if (Microsoft.Crm.VersionUtility.IsCarinaVersion(version))
       {
    %>
        <tr>
            <td>
                <ui:CheckBox id="chkChangeTrackingEnabled" TabIndex="43" runat="server" onclick="onClickChangeTrackingCheck();"/>
                <label id="chkChangeTrackingEnabledLabel" for="chkChangeTrackingEnabled">
                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.ChangeTracking" runat="server"/>
                </label>
            </td>
        </tr>
        <tr class="param" id="labelNotificationMessageForChangeTracking" runat="server">
            <td class="globalAuditWarningTD">
                <img src="/_imgs/securityinfo_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>"/>
                <loc:text resourceid="SystemCustomization.ManageEntityPage.ChangeTracking.Labels.InfoChangeTracking"
                          runat="server"/>
            </td>
        </tr>
    <%
       }
    %>



    <% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.OnePartyModel.Name, Microsoft.Crm.Application.Security.UserInformation.Current) == true)
       {
    %>
        <tr>
            <td>
                <ui:CheckBox id="chkExternalChannelsEnabled" TabIndex="44" runat="server"/>
                <label id="chkExternalChannelsEnabledLabel" for="chkExternalChannelsEnabled">
                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.ExternalChannelsEnabled" runat="server"/>
                </label>
            </td>
        </tr>
    <%
       }
    %>
</tr>
</table>
</td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>
<tr>

    <td class="ms-crm-Form-Section" style="vertical-align: bottom">
        <nobr>
            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.OutlookMobile.Title" runat="server"/>
        </nobr>
    </td>
</tr>
<tr style="height: 10px">
    <td></td>
</tr>
<tr >

    <td>
        <table width="100%" cellspacing="0" cellpadding="0">


            <tr>
                <td>
                    <ui:CheckBox id="chkIsEnabledForMobile" TabIndex="50" runat="server"/>
                    <label id="chkIsEnabledForMobileLabel" for="chkIsEnabledForMobile">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileExpress" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="chkIsEnabledForMobileClient" onclick="enableDisableMobileClientOptions();" TabIndex="51" runat="server"/>
                    <label id="chkIsEnabledForMobileClientLabel" for="chkIsEnabledForMobileClient">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClient" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" cellspacing="0" cellpadding="1">
                        <tr>
                            <td style="width: 5%">
                            </td>
                            <td colspan="3">
                                <ui:CheckBox id="chkIsReadOnlyForMobileClient" TabIndex="52" runat="server"/>
                                <label id="chkIsReadOnlyForMobileClientLabel" for="chkIsReadOnlyForMobileClient">
                                    <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClientReadOnly" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <%
                            if (Microsoft.Crm.VersionUtility.IsAraVersion(version) && IsMocaOfflineFeatureAvailable)
                            {
                        %>
                            <tr>
                                <td style="width: 5%">
                                </td>
                                <td colspan="3">
                                    <ui:CheckBox id="chkIsOfflineForMobileClient" TabIndex="53" runat="server" onclick="onClickEnableForMobileOfflineCheck();"/>
                                    <label id="chkIsOfflineForMobileClientLabel" for="chkIsOfflineForMobileClient">
                                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.MobileClientOffline" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5%">
                                </td>
                                <%
                                    if (!IsMobileOfflineFiltersFeatureAvailable)
                                    {
                                %>
                                    <td style="width: 20%">
                                        <label for="numDaysSinceRecordLastModified">
                                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Number.Labels.DaysSinceRecordLastModified" runat="server"/>
                                        </label>
                                    </td>
                                    <td style="width: 10%">
                                        <ui:Number id="numDaysSinceRecordLastModified" runat="server" TabIndex="54"/>
                                    </td>
                                <%
                                    }
                                    else
                                    {
                                %>
                                    <td class="enhancedFiltersLink">
                                        <a id="mobileOfflineFilters" href="#" style="cursor: pointer" onclick="onClickMobileOfflineFilters();" TabIndex="54">
                                            <u>
                                                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Button.Labels.MobileOfflineFilters_ButtonName" runat="server"/>
                                            </u>
                                        </a>
                                    </td>
                                <%
                                    }
                                %>
                                <td></td>
                            </tr>
                        <%
                            }
                        %>
                    </table>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="chkIsReadingPaneEnabled" TabIndex="55" runat="server"/>
                    <label id="chkIsReadingPaneEnabledLabel" for="chkIsReadingPaneEnabled">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.ReadingPaneEnable" runat="server"/>
                    </label>
                </td>
            </tr>


            <tr>
                <td>
                    <ui:CheckBox id="chkRCOffline" TabIndex="56" runat="server"/>
                    <label id="chkRCOfflineLabel" for="chkRCOffline">
                        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.Offline" runat="server"/>
                    </label>
                </td>
            </tr>
        </table>
    </td>
</tr>


<% if (IsCustomHelpDefined)
   { %>
    <tr style="height: 10px">
        <td></td>
    </tr>
    <tr>

        <td class="ms-crm-Form-Section" style="vertical-align: bottom">
            <nobr>
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.Title" runat="server"/>
            </nobr>
        </td>
    </tr>
    <tr>
        <td>

            <ui:CheckBox id="checkCustomizedHelp" OnClick="enableDisableHelpURL();" TabIndex="57" runat="server"/>
            <label id="checkCustomizedHelpLabel" for="checkCustomizedHelp">
                <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.RHelpEnabled" runat="server"/>
            </label>
        </td>
    </tr>
    <tr>
        <td colspan="3">
            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                <col width="23%"><col>
                <tr class="param">
                    <td id="txtHelpURLLabel" valign="top">
                        <label for="txtHelpURL">
                            <loc:Text ResourceId="SystemCustomization.ManageEntityPage.EntitySection.Labels.HelpEnabledBox" runat="server"/>
                        </label>
                    </td>

                    <td >
                        <ui:TextBox id="txtHelpURL" Height="50px" TabIndex="58" runat="server"/>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr class="param" id="labelWarningMessageForHelpUrl">
        <td>
            <img src="/_imgs/ico/16_alert.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='DocumentManagement.SharePoint.Properties.AlertIcon.AltTag' runat='server'/>"/>
            <loc:text resourceid="SystemCustomization.ManageEntityPage.Audit.Labels.EnableCustomHelp" runat="server"/>
        </td>
    </tr>
<% } %>


<tr style="height: 20px">
    <td></td>
</tr>


<tr>
    <td>
        <loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.Legend.Title" runat="server"/>
    </td>
</tr>


<tr style="height: 20px">
    <td></td>
</tr>


<tr>
    <td>
        <span>
            <loc:Text ResourceId="SystemCustomization.HelpContent.Link.Title" runat="server"/>
            <a target="_blank" TabIndex="61" href="<%= CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address") %>" class="help_link">
                <loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
            </a>
        </span>
    </td>
</tr>
</table>
</div>


<div id="tabAttribute" class="ms-crm-Tab tabContent">
    <table width="100%" cellspacing="0" cellpadding="0">
        <col style="width: 50%"/><col/>
        <tr>


            <td style="vertical-align: top" class="manageEntity_td_LeftColumn">
                <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">


                    <tr>

                        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Title" runat="server"/>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                                <col style="width: 160px"/><col/>

                                <tr class="param">
                                    <td id="txtAttributeDisplayNameLabel" class="ms-crm-Field-Required">
                                        <label for="txtAttributeDisplayName">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.DisplayName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td>
                                        <ui:TextBox id="txtAttributeDisplayName" OnChange="onAttributeSchemaNameChange();" runat="server"/>
                                    </td>
                                </tr>

                                <tr class="param">
                                    <td id="txtAttributeSchemaNameLabel" class="ms-crm-Field-Required">
                                        <label for="txtAttributeSchemaName">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.SchemaName" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td>
                                        <table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
                                            <tr>
                                                <%
                                                    if (_mode == Mode.Create)
                                                    {
                                                %>
                                                    <td>
                                                        <div id="schemaNamePrefix" class="manageAttribute_div_SchemaName"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.LowercaseSchemaName) %></div>
                                                    </td>
                                                <%
                                                    }
                                                %>
                                                <td width="100%">
                                                    <ui:TextBox id="txtAttributeSchemaName" runat="server"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr class="param">
                                    <td id="selAttributeReqLevelLabel" class="ms-crm-Field-Required">
                                        <label for="selAttributeReqLevel">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.SchemaSection.Labels.RequirementLevel" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td>
                                        <ui:Select id="selAttributeReqLevel" runat="server"/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <tr style="height: 20px">
                        <td></td>
                    </tr>


                    <tr>

                        <td id="txtAttributeDescriptionLabel" class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
                            <label for="txtAttributeDescription">
                                <loc:Text ResourceId="SystemCustomization.ManageAttributePage.DescriptionSection.Title" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr class="param" style="height: 120px">

                        <td>
                            <ui:TextArea id="txtAttributeDescription" Height="120px" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>


            <td style="vertical-align: top" class="manageEntity_td_RightColumn">
                <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">


                    <tr>

                        <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" style="vertical-align: bottom">
                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Title" runat="server"/>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
                                <col style="width: 160px"/><col/>

                                <tr class="param">
                                    <td id="selAttributeTypeLabel" class="ms-crm-Field-Required">
                                        <label for="selAttributeType">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.Type" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td width="100%">
                                        <ui:Select id="selAttributeType" runat="server"/>
                                    </td>
                                </tr>

                                <tr class="param">
                                    <td id="selAttributeFormatLabel" class="ms-crm-Field-Required">
                                        <label for="selAttributeFormat">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.Format" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td width="100%">
                                        <ui:Select id="selAttributeFormat" runat="server"/>
                                    </td>
                                </tr>

                                <tr class="param">
                                    <td id="numMaxAttributeLenLabel" class="ms-crm-Field-Required">
                                        <label for="numMaxAttributeLen">
                                            <loc:Text ResourceId="SystemCustomization.ManageAttributePage.TypeSection.Labels.MaxLen" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                        </label>
                                    </td>
                                    <td>
                                        <ui:Number id="numMaxAttributeLen" runat="server"/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>

<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.CustomControlMobile.Name, Microsoft.Crm.Application.Security.UserInformation.Current))
   { %>


    <div id="tabCustomControl" class="ms-crm-Tab tabContent">


        <div id="secCustomcontrol">


            <fieldset style="border: none; height: 160px">
                <div style="margin-bottom: 10px; width: 100%; align: center; overflow-y: auto; height: 160px;">
                    <table class="customcontrol-tablestyle" id="tblCustomControl" rtl="<%= rtlValue %>">

                        <tr class="customcontrol-bottomline">
                            <th class="customcontrol-text-ellipses customcontrols_configuration_control_name" rtl="<%= rtlValue %>" title="<loc:Text ResourceId='CustomControls_Configuration_Control' runat='server'/>">
                                <b>
                                    <loc:Text ResourceId="CustomControls_Configuration_Control" runat="server"/>
                                </b>
                            </th>
                            <% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.DataSetControl.Name, Microsoft.Crm.Application.Security.UserInformation.Current))
                               { %>
                                <th style="width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Web' runat='server'/>">
                                    <b>
                                        <loc:Text ResourceId="CustomControls_Configuration_Web" runat="server"/>
                                    </b>
                                </th>
                            <% } %>
                            <th style="width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Phone' runat='server'/>">
                                <b>
                                    <loc:Text ResourceId="CustomControls_Configuration_Phone" runat="server"/>
                                </b>
                            </th>
                            <th style="width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Tablet' runat='server'/>">
                                <b>
                                    <loc:Text ResourceId="CustomControls_Configuration_Tablet" runat="server"/>
                                </b>
                            </th>
                            <th style="width: 15%"></th>
                        </tr>
                    </table>
                    <div style="padding-top: 5px;">
                        <a href="#" id="addcontrolid">
                            <span class="customcontrol-subject customcontrol-fontfamily" style="cursor: pointer">
                                <u>
                                    <loc:Text ResourceId="CustomControls_Configuration_AddControl" runat="server"/>
                                </u>
                            </span>
                        </a>
                    </div>
                </div>
            </fieldset>
        </div>

        <div id="divPropertyTableContainer" width="100%" style="border: 1px solid #b7b4b4; height: 260px">
            <div id="selectionRemindBoxId" class="selectionremindbox">
                <span>
                    <loc:Text ResourceId="CustomControls_Configuration_PlaceHolderText1" runat="server"/>
                </span>
            </div>
        </div>
    </div>

<% } %>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.EditableGridControlJsEvents.Name, Microsoft.Crm.Application.Security.UserInformation.Current))
   { %>


    <div id="tabEvents" class="ms-crm-Tab">


        <div id="divEventListSection" style="display: inline;">
            <fieldset>

                <legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-picklist.aspx_315" runat="server"/>&nbsp;</legend>

                <table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
                    <tr>
                        <td >
                            <cnt:FormLibraryAndEventHandlerControl CollapseFormLibrarySection="true" id="formLibraryControl" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="display: inline">
                            <sdk:LookupControl id="libraryLookup" DisableViewPicker="true" DefaultViewId="125A31CE-0F5E-4957-8AA3-7A10C0713886" LookupBrowse="false" LookupStyle="single" runat="server"/>
                        </td>
                    </tr>
                </table>
            </fieldset>
        </div>
    </div>
<% } %>
</div>
</div>
</div>


<div id="divForms" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmForm" name="ifrmForm" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/Forms.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divViews" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmView" name="ifrmView" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/uiElements.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divUIElements" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmUI" name="ifrmUI" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/uiElements.aspx?includeForms=1&entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divVisualizations" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmVisualizations" name="ifrmVisualizations" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../UIElements/Visualizations.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divAttributes" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmAttributes" name="ifrmAttributes" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Attributes/attributeList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divRelationships1ToN" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmRelationships1ToN" name="ifrmRelationships1ToN" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=0" + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>
<div id="divRelationshipsNTo1" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmRelationshipsNTo1" name="ifrmRelationshipsNTo1" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=1" + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>
<div id="divRelationshipsNToN" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmRelationshipsNToN" name="ifrmRelationshipsNToN" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Relationships/relationshipList.aspx?entityId=" + _entityId + "&relationshipRole=2" + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divMappings" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmMappings" name="ifrmMappings" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../Mappings/mappingList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>
<%

    if ((_mode != Mode.Create) && _entityMD != null && _entityMD.IsRenameable && !_entityMD.IsCustomEntity)
    {
%>


    <div id="divMessages" class="page">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="ifrmMessages" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../DisplayStrings/displayStringList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
<%
    }
%>


<div id="divBusinessRules" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="Iframe1" name="ifrmMappings" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../BusinessRules/businessRulesList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divHierarchyRules" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="IframeHierarchyRule" name="ifrmHierarchy" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../HierarchyRules/hierarchyRulesList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>


<div id="divSimilarityRules" class="page">
    <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
        <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="IframedivSimilarityRule" name="ifrmSimilarity" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../SimilarityRules/similarityRulesList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
    </div>
</div>

<% if (Microsoft.Crm.VersionUtility.IsCarinaVersion(version))
   { %>


    <div id="divAlternateKeys" class="page">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="IframeAlternateKeys" name="ifrmAlternateKey" class="container" url="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode("../AlternateKeys/alternateKeysList.aspx?entityId=" + _entityId + solutionParameter) %>" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
<% } %>

<% if (FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.InteractionCentricDashboard.Name, Microsoft.Crm.Application.Security.UserInformation.Current))
   { %>


    <div id="divDashboards" class="page">
        <div class="ms-crm-IE7-Height-Fix-Dummy-Container">
            <iframe src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" id="IframeDashboards" name="ifrmDashboard" class="container" url="" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
<% } %>
</div>
</div>


<div class="ms-crm-Form-StatusBar" style="position: absolute; bottom: 0px; left: 0px; right: 0px;"></div>
</div>

</div>

</body>
</html>