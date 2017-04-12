<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.DashboardEditorPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>

<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript">
    var _bSaving = false;
    var _oActive;
    var _iTabs = <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
    var _formXmlId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formXmlId.ToString()) %>;
    Mscrm.FormEditorVariables.supportNotes = '<%= supportNotes.ToString() %>';
    Mscrm.FormEditorVariables
        .FormType = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formTypeName.ToString()) %>;
    var _iNextTabId = <%= totalTabs.ToString("D", System.Globalization.CultureInfo.InvariantCulture) %>;
    var _objectTypeCode = 0;
    var _iMaxTabs = 100;
    var _sMode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_mode.ToString()) %>;
    var _bPreviewMode = <%= _mode == Mode.Preview ? "true" : "false" %>;
    var _draggedItem = null;
    var _dropItem = null;
    var ROW_HEIGHT = "25";
    var _dashboardUpdated = false;
    var _refreshDashboard = false;
    var oFieldsXml;
    var oPropertiesXml;
    var previewerForm
    var dashName;
    var dashDesc;

    var originalOpener;

    function InitializeDefaults() {
        previewerForm.formXml.defaultValue = previewerForm.formXml.value;
        Mscrm.FormEditorVariables.initialFormXmlText = XUI.Xml.XMLSerializer
            .serializeToString(Mscrm.FormEditorVariables.formXml);
        dashName.get_element().defaultValue = dashName.get_element().value;
        dashDesc.get_element().defaultValue = dashDesc.get_element().value;
        Mscrm.FormEditorVariables.initialIsTabletEnabled = Mscrm.FormEditorVariables.isTabletEnabled;
    }

    $addHandler(window, "load", OnLoad);

    function OnLoad() {

        if (!IsNull(window.top) && !IsNull(window.top.document))
            window.top.document.title = window.document.title;

        previewerForm = $get('Previewer');
        dashName = Mscrm.FormControlInputBehavior.GetBehavior("dashboardNameInput");
        dashDesc = Mscrm.FormControlInputBehavior.GetBehavior('dashboardDescriptionInput');

        Mscrm.FormEditorVariables.editorType = Mscrm.EditorType.dashboardEditor;
        Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('preFormXml')));
        Mscrm.FormEditorVariables.formId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(formId.ToString()) %>;
        Mscrm.FormEditorVariables
            .formAccessType =
            parseInt(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(((int) dashboardType).ToString()) %>, 10);
        Mscrm.FormEditorVariables.supportSocialInsights = '<%= supportSocialInsights.ToString() %>';
        Mscrm.FormEditorVariables.supportOrgInsights = '<%= supportOrgInsights.ToString() %>';
        Mscrm.FormEditorVariables.supportPowerBITile = '<%= SupportPowerBITile.ToString() %>';

        Mscrm.FormEditorVariables.isTabletEnabled = '<%= isTabletEnabled.ToString() %>';
        Mscrm.FormEditorVariables.supportDelve = '<%= supportDelve.ToString() %>';
        _langCode = GetLanguageCode();
        RefreshFormEditor(Mscrm.Render.wholeCanvas);
        Mscrm.TabUtils.clickFirstTab();
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.TabUtils.enableDisableFormParts();
        focus();
        Mscrm.FormEditorVariables.addColumnsMessage = ADD_COL_MESSAGE;
        Mscrm.FormUndoRedo.initialize();
        SetPreviewXml();
        InitializeDefaults();
        $addHandler(document, "mouseup", OnDocumentMouseUp);
        dashName.setFocus();

        if (IsNull(window.top.opener)) {
            originalOpener = window.top;
        } else {
            originalOpener = window.top.opener;

            attachWindowOnBeforeUnload(window_onbeforeunload);
        }
    }

    function window_onbeforeunload(oEvent) {
        oEvent = oEvent.rawEvent;

        if (!_bSaving) {
            if (Mscrm.FormUtils.isFormDirty() || IsInputFieldDirty()) {
                oEvent.returnValue = LOCID_FORMED_SAVECHANGES;
                return LOCID_FORMED_SAVECHANGES;
            } else if ((oEvent.keyCode && oEvent.keyCode != 0) || _refreshDashboard) {
                CloseForm();
            }
        }
    }

    function Save(bClose) {
        if (IsNull(dashName.get_dataValue())) {
            alert(LOCID_UI_DIR == 'LTR' ? LOCID_MISSING_NAME : '\u200f\u200f' + LOCID_MISSING_NAME);
            return;
        }
        if (Mscrm.FormUtils.isFormDirty() || IsInputFieldDirty()) {
            if (!_bSaving) {
                _bSaving = true;

                var success = Mscrm.FormUtils.saveForm(0,
                    0,
                    dashName.get_dataValue(),
                    dashDesc.get_dataValue(),
                    Mscrm.FormEditorVariables.isTabletEnabled);
                if (success) {

                    _dashboardUpdated = true;
                    InitializeDefaults();
                    Mscrm.TabUtils.setTabStatesCookie();

                    if (Mscrm.FeatureControl.get_Current()
                        .areFeaturesEnabled([
                            Mscrm.FeatureNames.AppModuleForOrganization, Mscrm.FeatureNames.AppDesigner
                        ])) {

                        var id = Mscrm.FormEditorVariables.formId.replace(/{|}/g, '').toLowerCase();
                        var resultobj = {
                            "id": id,
                            "displayName": dashName.get_dataValue(),
                            "description": dashDesc.get_value()
                        }
                        if (!IsNull(window.parent) &&
                            !IsNull(window.parent.opener) &&
                            !IsNull(window.parent.opener.AppDesignerCallback)) {
                            window.parent.opener.AppDesignerCallback(resultobj, "Dashboard");
                        }
                    }
                }
                _bSaving = false;
            }
            if (!bClose) {
                _refreshDashboard = true;
            }
        }
        if (bClose) {

            Mscrm.FormUndoRedo.dispose();
            CloseForm();
        }
    }

    function CloseForm() {
        if (!_bSaving) {
            if (Mscrm.FormUtils.isFormDirty() || IsInputFieldDirty()) {
                if (!window.confirm(LOCID_FORMED_SAVECHANGES)) {
                    return;
                }
            }
        }

        detachWindowOnBeforeUnload(window_onbeforeunload);
        if (_dashboardUpdated) {
            _refreshDashboard = false;
            try {
                if (!IsNull(originalOpener)) {
                    switch (Mscrm.FormEditorVariables.formAccessType) {
                    case Mscrm.EntityTypeCode.UserForm:
                        var selector = originalOpener.Mscrm.DashboardRibbonActions.getDashboardSelector();
                        if (selector) {
                            selector.set_reloadNeeded(true);
                        }
                        originalOpener.Mscrm.DashboardRibbonActions
                            .refreshDashboardSelector(Mscrm.FormEditorVariables.formId);

                        if (!IS_OUTLOOK_CLIENT) {
                            return;
                        }
                        break;
                    case Mscrm.EntityTypeCode.SystemForm:
                        originalOpener.auto(Mscrm.EntityTypeCode.SystemForm);
                        break;
                    }
                }
            } catch (e) {
            };
        }
        Mscrm.Utilities.closeCurrentWindow();
    }

    function IsInputFieldDirty() {
        return dashName.get_isDirty() || dashDesc.get_isDirty() || Mscrm.FormUtils.isTabletDirty();
    }

</script>
<style type="text/css">

    td.actions {
        background-color: #ffffff;
        border: 1px solid #889dc2;
        padding: 10px;
        vertical-align: top;
        filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#EAF1FF, EndColorStr=#ffffff);
    }

    .editorcontainer {
        background-color: rgb(255, 255, 255);
        overflow: auto;
        bottom: 25px !important;
    }

    #dashboardNameContainer {
        <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
           { %>
        float: right;
        <% }
           else
           { %>
        float: left;
        <% } %>
        display: inline-block;
    }
</style>
</head>
<body class="stage" style="overflow: hidden">
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<pre id="preFormXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_formXml.OuterXml) %></pre>
<form name="Previewer" action="preview.aspx" id="Previewer" method="post">
    <input name="title" type="hidden">
    <input name="previewType" type="hidden">
    <input name="formXml" type="hidden">
</form>
<div style="width: 100%; height: 100%; position: relative;">
<% if (dashboardType == DashboardType.SystemDashboard)
   { %>
    <div id="menuHeader" style="width: 100%; height: 56px">
        <asp:placeholder id="phCrmMenuBar" runat="server"/>
    </div>
<% } %>
<div style="height: 30px; width: 50%; padding-top: 10px" class="ViewDuplicates_tr_MyRecRsrcStr">
    <div class="ms-crm-Emphasis-Strong" id="selectorLabel" style="white-space: nowrap; width: 100%">
        <div id="dashboardNameContainer" class="ms-crm-DE-NoUserSelect">
            <label for="dashboardNameInput" id="dashboardNameHintText" class="ms-crm-Bold-Header">
                <loc:Text ResourceId="Web.Visualization.Designer.SaveAs.Name" runat="server"/>
            </label>
            <img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
        </div>
        <ui:TextBox id="dashboardNameInput" CssClass="DashboardName" maxlength="100" tabindex="1" runat="server"/>
        <ui:TextArea id="dashboardDescriptionInput" ClassName="ms-crm-DisplayNone" Height="0" maxlength="2000" runat="server"/>
    </div>
</div>
<% if (dashboardType == DashboardType.SystemDashboard)
   { %>
<div class="ms-crm-absolutePosition editorcontainer ms-crm-DE-NoUserSelect" style="top: 96px;" id="editorcontainer">
    <% }
   else
   { %>
    <div class="ms-crm-absolutePosition editorcontainer ms-crm-DE-NoUserSelect" style="top: 42px;" id="editorcontainer">
        <% } %>
        <div id="formDesigner" class="ms-crm-absolutePosition"></div>
    </div>
        <div class="ms-crm-absolutePosition" style="top: auto; height: 25px">
            <div class="ms-crm-Form-StatusBar">&nbsp;</div>
        </div>
    </div>
</body>
</html>