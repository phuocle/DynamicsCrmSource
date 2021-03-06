Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    Mscrm.setupAdvFind();
    var isFeatureEnabled = Mscrm.FeatureControl.get_Current()
        .isFeatureEnabled(Mscrm.FeatureNames.AnyChanelToAnyEntityRecordCreation);
    if (!isFeatureEnabled) {
        ShowFormSection("general", "CaseProperties");
        var filterXml = document.getElementById("PropertiesXml").value,
            fetchXml = String
                .format('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="incident"><attribute name="title"/>{0}</entity></fetch>', filterXml);
        $find("advFind").set_fetchXml(fetchXml)
    } else {
        SetSectionLabel("general", "primaryactionsection");
        ShowFormSection("general", "RegardingSettingsection");
        ShowFormSection("general", "primaryactionsection");
        ShowFormSection("general", "secondaryactionsection");
        SetSectionEmptyMessageAndHelpLink("general")
    }
    var conditionXml = document.getElementById("ConditionXml").value;
    if (conditionXml) conditionXml = conditionXml.replace(/dataslugs=""/g, "");
    $find("appConditionBuilder").LoadXml(conditionXml);
    var convertRuleId = Xrm.Page.data.entity.attributes.get("convertruleid");
    if (!IsNull(convertRuleId))
        if (IsNull(convertRuleId.getValue())) {
            var _convertRuleId = window.top.opener.Xrm.Page.data.entity.getId();
            Xrm.Page.getAttribute("convertruleid").setValue(_convertRuleId)
        }
    var crmFormCtrl = $find("crmForm");
    crmFormCtrl.add_onSave(Mscrm.Form_onsave);
    attachWindowOnBeforeUnload(formClose);
    ShowNotifications()
};

function formClose(oEvent) {
    oEvent = oEvent.rawEvent;
    var conditionBuilder = $find("appConditionBuilder"),
        fetchXml = $find("advFind"),
        isFeatureEnabled = Mscrm.FeatureControl.get_Current()
            .isFeatureEnabled(Mscrm.FeatureNames.AnyChanelToAnyEntityRecordCreation);
    if (conditionBuilder
        .get_isDirty() ||
        !isFeatureEnabled && fetchXml.get_isDirty()) oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE
}

Mscrm.Form_onsave = function() {
    var isFeatureEnabled = Mscrm.FeatureControl.get_Current()
            .isFeatureEnabled(Mscrm.FeatureNames.AnyChanelToAnyEntityRecordCreation),
        conditionBuilder = $find("appConditionBuilder");
    !conditionBuilder.ParseXml() && context.getEventArgs().preventDefault();
    var conditionXml = $find("appConditionBuilder").GetXml();
    Xrm.Page.getAttribute("conditionxml").setValue(conditionXml);
    if (!isFeatureEnabled) {
        var fetchXml = $find("advFind").get_fetchXml(),
            fetchXmlDoc = XUI.Xml.LoadXml(fetchXml),
            filterXml = XUI.Xml.SelectSingleNode(fetchXmlDoc, "/fetch/entity/filter", null);
        if (!IsNull(filterXml)) {
            var propertiesXml = convertXmlDocToString(filterXml);
            Xrm.Page.getAttribute("propertiesxml").setValue(propertiesXml)
        }
    }
    detachWindowOnBeforeUnload(formClose);
    if (!IsNull(window.event)) window.event.returnValue = false
};
Mscrm.setupAdvFind = function() { crmCreate(Mscrm.AdvancedFind, {}, null, {}, $get("advFind")) };

function ShowNotifications() {
    var isCreate = Xrm.Page.ui.getFormType() == Xrm.FormType.create,
        isValid = isCreate ? true : IsEntityRecordValid(Xrm.Page.data.entity.getId()),
        showNotification = !isCreate && !isValid;
    if (showNotification) {
        var notificationText = LOCID_ERROR_MISSING_CRI;
        Xrm.Page.ui.setFormNotification(notificationText, "WARNING", "ConvertRuleItemErrorNotofication")
    } else Xrm.Page.ui.clearFormNotification("ConvertRuleItemErrorNotofication")
}

function ShowFormSection(tabName, sectionName) {
    var tab = Xrm.Page.ui.tabs.get(tabName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(tab)) {
        var section = tab.sections.get(sectionName);
        !Mscrm.InternalUtilities.JSTypes.isNull(section) && section.setVisible(true)
    }
}

function SetSectionLabel(tabName, sectionName) {
    var tab = Xrm.Page.ui.tabs.get(tabName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(tab)) {
        var section = tab.sections.get(sectionName);
        !Mscrm.InternalUtilities.JSTypes.isNull(section) &&
            section.setLabel(Xrm.Internal.getResourceString("LOCID_SECTION_LABEL"))
    }
}

function SetSectionEmptyMessageAndHelpLink(tabName) {
    var tab = Xrm.Page.ui.tabs.get(tabName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(tab)) {
        var sections = tab.sections.getAll();
        if (!Mscrm.InternalUtilities.JSTypes.isNull(sections))
            for (var formSections = $P_CRM(".ms-crm-FormSection"), index = 0;
                index < sections.length && !Mscrm.InternalUtilities.JSTypes.isNull(formSections);
                index++) {
                var section = $P_CRM(formSections[index]);
                if (!Mscrm.InternalUtilities.JSTypes.isNull(section) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull(section.find("tr"))) {
                    var sectionRow = section.find("tr").first();
                    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                        (sections[index].getKey() == "secondaryactionsection" ||
                                sections[index].getKey() == "primaryactionsection") &&
                            GenerateLink(sectionRow, false, sections[index].getKey());
                        if (sections[index].getKey() == "ConditionControl")
                            if (!Mscrm.InternalUtilities.JSTypes.isNull(sectionRow)) {
                                GenerateLink(sectionRow, false, sections[index].getKey());
                                $get("appConditionBuilder").style.display = "none"
                            }
                    }
                    sections[index].getKey() == "RegardingSettingsection" &&
                        GenerateLink(sectionRow, true, sections[index].getKey())
                }
            }
    }
}

function GenerateLink(sectionRow, isHelpLink, sectionName) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(sectionRow)) return;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(sectionRow.find("td")) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(sectionRow.find("td").first()))
        if (isHelpLink) {
            sectionRow.append(String
                .format('<td><img id="helplinkimage_id" src ="/_imgs/error/notif_icn_warn16.png" class="ms-crm-warningimage-help-link"></img><span class="ms-crm-link-description">{0}</span><a id="helplinkanchor_id" target="_blank" href={1} tabindex="0" title="{2}" class="ms-crm-propertybag-help-link  ms-crm-helplink-alignment">{3}</a></td>', CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("LOCID_LINK_DESCRIPTION")), "http://go.microsoft.com/fwlink/?LinkId=529001", CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("LOCID_HELPLINK_TEXT")), CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("LOCID_HELPLINK_TEXT"))));
            sectionRow.find("td").first().addClass("ms-crm-Container-TD")
        } else {
            var messageHolder = '<h3 class="ms-crm-Form ms-crm-SectionEmptyMessage">{0}</h3>', emptyMessageHtml = "";
            if (sectionName == "ConditionControl")
                emptyMessageHtml = String.format(messageHolder,
                    CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("LOCID_CONDITION_EMPTY_MESSAGE")));
            else
                emptyMessageHtml = String.format(messageHolder,
                    CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("LOCID_SECTION_EMPTY_MESSAGE")));
            sectionRow.find("td").first().append(emptyMessageHtml)
        }
}