Type.registerNamespace("Mscrm");
Mscrm.ImportEntityProcessCode = function() {};
Mscrm.ImportEntityProcessCode.prototype = { ignore: 0, unmapped: 1, process: 2, create: 3, "internal": 4, none: 5 };
Mscrm.ImportEntityProcessCode.registerEnum("Mscrm.ImportEntityProcessCode", false);
Mscrm.LookupTypeCode = function() {};
Mscrm.LookupTypeCode.prototype = { source: 0, system: 1 };
Mscrm.LookupTypeCode.registerEnum("Mscrm.LookupTypeCode", false);
Mscrm.AttributeMapView = function() {};
Mscrm.AttributeMapView.prototype = { unmapped: 0, mapped: 1, all: 2 };
Mscrm.AttributeMapView.registerEnum("Mscrm.AttributeMapView", false);
Mscrm.ImportType = function() {};
Mscrm.ImportType.prototype = {
    createWithoutTemplate: 0,
    createWithTemplate: 1,
    update: 2,
    zippedCreate: 3,
    xlsxCreateUpdate: 4,
    xlsxZip: 5
};
Mscrm.ImportType.registerEnum("Mscrm.ImportType", false);
Mscrm.PopupMode = function() {};
Mscrm.PopupMode.prototype = { none: -1, createAttribute: 0, lookup: 1, picklist: 2 };
Mscrm.PopupMode.registerEnum("Mscrm.PopupMode", false);
Mscrm.AttributeMappingActions = function() {};
Mscrm.EnumConverterImportEntityProcessCode = function() {};
Mscrm.EnumConverterImportEntityProcessCode.toString = function(e) {
    switch (e) {
    case 0:
        return "Ignore";
    case 1:
        return "Unmapped";
    case 2:
        return "Process";
    case 3:
        return "Create";
    case 4:
        return "Internal";
    case 5:
    default:
        return "None"
    }
};
Mscrm.EnumConverterImportEntityProcessCode.toEnum = function(s) {
    switch (s) {
    case "Ignore":
        return 0;
    case "Unmapped":
        return 1;
    case "Process":
        return 2;
    case "Create":
        return 3;
    case "Internal":
        return 4;
    case "None":
    default:
        return 5
    }
};
Mscrm.EnumConverterAttributeMapView = function() {};
Mscrm.EnumConverterAttributeMapView.toString = function(e) {
    switch (e) {
    case 0:
        return "Unmapped";
    case 1:
        return "Mapped";
    case 2:
    default:
        return "All"
    }
};
Mscrm.EnumConverterAttributeMapView.toEnum = function(s) {
    switch (s) {
    case "Unmapped":
        return 0;
    case "Mapped":
        return 1;
    case "All":
    default:
        return 2
    }
};
Mscrm.PopupState = function() {
    this.currentPopupMode = -1;
    this.currentRow = null
};
Mscrm.PopupState.prototype = { currentPopupMode: 0, currentRow: null };
Mscrm.AttributeMapPageState = function() {
    this.cancelClicked = false;
    this.hasMapChanged = false;
    this.mapXmlDoc = null;
    this.bDisableControls = false;
    this.selectedAttributeMapView = 2;
    this.currentEntityMap = null;
    this.selectedListItem = null
};
Mscrm.AttributeMapPageState.prototype = {
    cancelClicked: false,
    hasMapChanged: false,
    mapXmlDoc: null,
    bDisableControls: false,
    selectedAttributeMapView: 0,
    currentEntityMap: null,
    selectedListItem: null,
    g_oldAttributeMap: null,
    g_isReopen: false,
    lookupAttributeMultiSelect: null,
    $A_0: function($p0, $p1, $p2) {
        var $v_0 = this.mapXmlDoc.createElement($p1);
        !IsNull($p2) && $v_0.appendChild(this.mapXmlDoc.createTextNode($p2));
        $p0.appendChild($v_0);
        return $v_0
    },
    getCustomizationXml: function(entityId) {
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild(this.mapXmlDoc),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "Customizations/Entities/Entity[@Id= '" + entityId + "']", null);
        if (IsNull($v_1))
            $v_1 = XUI.Xml.SelectSingleNode($v_0,
                "Customizations/Entities/Entity[LogicalName='" + entityId + "']",
                null);
        return $v_1
    },
    $1o_0: function() {
        var $v_0 = XUI.Xml.SelectNodes(this.mapXmlDoc,
            "/Map/Customizations/Entities/Entity/Attributes/Attribute[@Tmp_ToDelete='true']",
            null);
        if (!$v_0.length) return;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) $v_0[$v_1].attributes.removeNamedItem("Tmp_ToDelete")
    },
    $1g_0: function() {
        var $v_0 = XUI.Xml.SelectNodes(this.mapXmlDoc, "/Map/Customizations/Entities/Entity", null);
        if (!$v_0.length) return;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = XUI.Xml.SelectSingleNode($v_0[$v_1], "LogicalName", null);
            if (IsNull($v_2)) $v_2 = $v_0[$v_1].attributes.getNamedItem("Id");
            for (var $v_3 = XUI.Xml.GetText($v_2),
                $v_4 = XUI.Xml.SelectNodes($v_0[$v_1], "Attributes/Attribute", null),
                $v_5 = {},
                $v_6 = XUI.Xml.SelectNodes(this.mapXmlDoc,
                    "/Map/EntityMaps/EntityMap[(@TargetEntityRef='" +
                    $v_3 +
                    "' and @ProcessCode='" +
                    Mscrm.EnumConverterImportEntityProcessCode.toString(3) +
                    "') or (@TargetEntityName='" +
                    $v_3 +
                    "' and @ProcessCode='" +
                    Mscrm.EnumConverterImportEntityProcessCode.toString(2) +
                    "')]/AttributeMaps/AttributeMap/TargetAttributeRef",
                    null),
                $v_7 = 0;
                $v_7 < $v_6.length;
                $v_7++) $v_5[XUI.Xml.GetText($v_6[$v_7])] = true;
            for (var $v_8 = 0; $v_8 < $v_4.length; $v_8++) {
                var $v_9 = $v_4[$v_8], $v_A = $v_9.attributes.getNamedItem("Id");
                if (IsNull($v_A) || IsNull($v_5[XUI.Xml.GetText($v_A)])) {
                    var $v_B = this.mapXmlDoc.createAttribute("Tmp_ToDelete");
                    $v_B.value = "true";
                    $v_9.attributes.setNamedItem($v_B)
                }
            }
        }
    },
    validateWizardState: function() {
        this.$1g_0();
        var $v_0 = this.$1q_0();
        !$v_0 && this.$1o_0();
        return $v_0
    },
    $1q_0: function() {
        var $v_0 = XUI.Xml.SelectNodes(this.mapXmlDoc,
            "/Map/EntityMaps/EntityMap/AttributeMaps/AttributeMap/LookupMaps/LookupMap",
            null);
        if (!$v_0.length) return true;
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0[$v_1], "LookupType", null)),
                $v_3 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0[$v_1], "LookupEntityName", null)),
                $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0[$v_1], "LookupAttributeName", null));
            if ($v_2 === "System" && this.$1d_0($v_3, $v_4)) {
                var $v_5 = this.getCustomizationXml($v_3), $v_6 = null;
                if (!IsNull($v_5))
                    $v_6 = XUI.Xml.SelectSingleNode($v_5, "Attributes/Attribute[@Id='" + $v_4 + "']", null);
                if (!IsNull($v_6))
                    if (!IsNull($v_6.attributes.getNamedItem("Tmp_ToDelete"))) {
                        var $v_7 = $v_0[$v_1].parentNode.parentNode,
                            $v_8 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_7, "SourceAttributeName", null)),
                            $v_9 = XUI.Xml.GetText($v_0[$v_1].parentNode.parentNode.parentNode.parentNode.attributes
                                .getNamedItem("SourceEntityName")),
                            $v_A = String.format(window.LOCID_IW_LOOKUP_REFER_ERROR, $v_8, $v_9);
                        alert($v_A);
                        return false
                    }
            }
        }
        return true
    },
    $1d_0: function($p0, $p1) {
        var $v_0 = this.getCustomizationXml($p0);
        if (IsNull($v_0)) return false;
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "Attributes/Attribute[@Id='" + $p1 + "']", null);
        if (!IsNull($v_1)) return true;
        if (this.$18_0($p0)) {
            var $v_2 = XUI.Xml.SelectSingleNode($v_0, "CustomizationXml/PrimaryKey", null);
            if (!IsNull($v_2)) if (XUI.Xml.GetText($v_2) === $p1) return true
        }
        return false
    },
    $18_0: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode(XUI.Xml.DomUtils.GetFirstChild(this.mapXmlDoc),
            "Customizations/Entities/Entity[@Id= '" + $p0 + "']/CustomizationXml",
            null);
        if (IsNull($v_0)) return false;
        return true
    },
    $1W_0: function($p0) {
        var $v_0 = this.getCustomizationXml($p0),
            $v_1 = XUI.Xml.SelectNodes($v_0, "Attributes/Attribute", null),
            $v_2 = XUI.Xml.CreateDocument(),
            $v_3 = $v_2.createElement("attributes");
        $v_2.appendChild($v_3);
        var $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "CustomizationXml/PrimaryKeyDisplayName", null)),
            $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "CustomizationXml/PrimaryKey", null)),
            $v_6 = $v_2.createElement("attribute");
        $v_6.appendChild($v_2.createTextNode($v_4));
        $v_3.appendChild($v_6);
        var $v_7 = $v_2.createAttribute("name");
        $v_7.value = $v_5;
        $v_6.attributes.setNamedItem($v_7);
        var $v_8 = $v_2.createAttribute("primaryfield");
        $v_8.value = "true";
        $v_6.attributes.setNamedItem($v_8);
        return $v_2
    }
};

function OnBodyLoad() {
    WizardSetProperty("JumpBackToAttributeMappingPage", false);
    var $v_0 = WizardGetProperty("ImportType");
    $P_CRM(document.body).addClass($v_0);
    Mscrm.AttributeMapPage.pageState.mapXmlDoc = XUI.Xml.LoadXml(WizardGetProperty("MapXml"));
    Mscrm.AttributeMapPage.$7.$1M_1(Mscrm.AttributeMapPage.pageState.mapXmlDoc);
    var $v_1 = $get("buttonCancel");
    $addHandler($v_1, "click", OnCancelClicked);
    if (!WantToSkip()) {
        var $v_2 = $get("entityList");
        $v_2.childNodes.length === 1 && Mscrm.AttributeMapPage.selectEntity($v_2.childNodes[0]);
        attachWindowOnBeforeUnload(OnBeforeWindowUnload, window.parent);
        attachWindowOnUnload(OnWizardUnload, window.parent)
    }
}

function OnBeforeWindowUnload(eventObject) {
    if (Mscrm.AttributeMapPage.pageState.cancelClicked) {
        if (WizardGetProperty("MapChanged") || Mscrm.AttributeMapPage.pageState.hasMapChanged) {
            eventObject.rawEvent.returnValue = window.LOCID_MAPPING_WILLBE_LOST;
            return LOCID_MAPPING_WILLBE_LOST
        }
    } else {
        eventObject.rawEvent.returnValue = "";
        return
    }
}

function GetNextPageDefinition() {
    var $v_0 = GetNextWizardPageUrl("AttributeMapPage"),
        $v_1 = ["ImportId", "ImportMapId", "MapXml"],
        $v_2 = ConstructPostData($v_1);
    return new NextPageDefinition($v_0, $v_2)
}

function OnCancelClicked(domEvent) {
    Mscrm.AttributeMapPage.pageState.cancelClicked = true;
    detachWindowOnBeforeUnload(OnBeforeWindowUnload, window.parent);
    WizardNavigate(_WizardNavigateEnum.CANCEL)
}

function OnAttributeMapPageResize() { Mscrm.AttributeMapPage.resizePopup() }

function moveNext() { Mscrm.AttributeMapPage.moveNext() }

function moveBack() { Mscrm.AttributeMapPage.moveBack() }

function WantToSkip() { return Mscrm.AttributeMapPage.wantToSkip() }

function onMouseOverEntity(entityListItem) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls || IsNull(entityListItem)) return;
    if (Mscrm.AttributeMapPage.pageState.selectedListItem !== entityListItem) {
        entityListItem.style.cursor = "pointer";
        entityListItem.style.backgroundColor = "#FFEAA7";
        entityListItem.style.borderStyle = "solid";
        entityListItem.style.borderWidth = "1px"
    }
}

function onMouseOutEntity(entityListItem) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls || IsNull(entityListItem)) return;
    if (Mscrm.AttributeMapPage.pageState.selectedListItem !== entityListItem) {
        entityListItem.style.cursor = "default";
        entityListItem.style.backgroundColor = "";
        entityListItem.style.borderStyle = "none";
        entityListItem.style.borderTopWidth = "";
        entityListItem.style.borderBottomWidth = ""
    }
}

function handleKeyPressOnEntity(entityListItem, eventObject) {
    switch (Mscrm.Utilities.getDomEventKeyCode(eventObject)) {
    case 13:
        selectEntity(entityListItem);
        break
    }
    return
}

function selectEntity(listElement) { Mscrm.AttributeMapPage.selectEntity(listElement) }

function newAttributeTypeChanged() { Mscrm.AttributeMapPage.newAttributeTypeChanged() }

Mscrm.AttributeMapPage = function() {};
Mscrm.AttributeMapPage.$$cctor = function() {
    Mscrm.AttributeMapPage.pageState = new Mscrm.AttributeMapPageState;
    Mscrm.AttributeMapPage.popupState = new Mscrm.PopupState;
    Mscrm.AttributeMapPage.$7 = new Mscrm.PicklistMapEditor;
    Mscrm.AttributeMapPage.$C = new Mscrm.LookupMapEditor
};
Mscrm.AttributeMapPage.moveBack = function() {
    if (Mscrm.AttributeMapPage.pageState.validateWizardState()) {
        Mscrm.AttributeMapPage.$1A();
        Mscrm.AttributeMapPage.$1C();
        detachWindowOnBeforeUnload(OnBeforeWindowUnload, window.parent);
        WizardNavigate(_WizardNavigateEnum.BACK)
    }
};
Mscrm.AttributeMapPage.moveNext = function() {
    var $v_0 = Mscrm.AttributeMapPage.$15(), $v_1 = false;
    if (window.unmappedEntityCount) {
        var $v_2 = window.LOCID_SKIP_UNMAPPED_ATTRIB1;
        if ($v_0) $v_2 = $v_2 + "\n" + window.LOCID_WARN_MANDATORY_ATTRIB;
        $v_2 = $v_2 + "\n\n" + window.LOCID_SKIP_UNMAPPED_ATTRIB2;
        $v_1 = true;
        if (!confirm($v_2)) return
    }
    if (!$v_0 || $v_1 || $v_0 && confirm(window.LOCID_UNMAPPED_MANDATORY_ATTRIB))
        if (Mscrm.AttributeMapPage.pageState.validateWizardState()) {
            Mscrm.AttributeMapPage.$1A();
            Mscrm.AttributeMapPage.$1C();
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, window.parent);
            WizardNavigate(_WizardNavigateEnum.NEXT)
        }
};
Mscrm.AttributeMapPage.wantToSkip = function() {
    if (WizardGetProperty("JumpBackToEntityMappingPage") || WizardGetProperty("JumpBackToDataSourcePage")) return true;
    else {
        Mscrm.UIHelper.updateMappingStatusUI();
        if (!WizardGetProperty("WizardMode") && !window.unmappedEntityCount && !Mscrm.AttributeMapPage.$15()
        ) return true;
        else {
            WizardSetProperty("WizardMode", 1);
            return false
        }
    }
};
Mscrm.AttributeMapPage.$17 = function($p0) {
    var $v_0 = Mscrm.AttributeMapPage.pageState.selectedListItem.id,
        $v_1 = window.unmappedMandatoryAttributesCountMap[$v_0];
    window.unmappedMandatoryAttributesCountMap[$v_0] = $v_1 + $p0
};
Mscrm.AttributeMapPage.$15 = function() {
    var $v_0 = 0,
        $v_1 = XUI.Xml.SelectNodes(Mscrm.AttributeMapPage.pageState.mapXmlDoc,
            '/Map/EntityMaps/EntityMap[@ProcessCode="Process" and not(@Unused)]',
            null);
    if (!IsNull($v_1) && $v_1.length > 0)
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("InputFileId"));
            $v_0 = $v_0 + window.unmappedMandatoryAttributesCountMap[$v_3]
        }
    return $v_0
};
Mscrm.AttributeMapPage.$1C = function() {
    if (Mscrm.AttributeMapPage.pageState.hasMapChanged) {
        WizardSetProperty("MapXml",
            XUI.Xml.XMLSerializer.serializeToString(Mscrm.AttributeMapPage.pageState
                .mapXmlDoc));
        WizardSetProperty("MapChanged", true)
    }
};
Mscrm.AttributeMapPage.$1A = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.AttributeMapPage.pageState.mapXmlDoc,
        "/Map/Customizations/Entities/Entity/Attributes/Attribute[@Tmp_ToDelete='true']",
        null);
    if (!$v_0.length) return;
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2], $v_4 = $v_3.parentNode;
        if ($v_4.childNodes.length === 1) $v_4.parentNode.removeChild($v_4);
        else $v_3.parentNode.removeChild($v_3)
    }
    for (var $v_1 = XUI.Xml.SelectNodes(Mscrm.AttributeMapPage.pageState.mapXmlDoc,
                 "/Map/Customizations/Entities/Entity",
                 null),
        $v_5 = 0;
        $v_5 < $v_1.length;
        $v_5++) {
        var $v_6 = $v_1[$v_5];
        IsNull(XUI.Xml.SelectSingleNode($v_6, "CustomizationXml", null)) &&
            IsNull(XUI.Xml.SelectSingleNode($v_6, "Attributes", null)) &&
            $v_6.parentNode.removeChild($v_6)
    }
    $v_1 = XUI.Xml.SelectNodes(Mscrm.AttributeMapPage.pageState.mapXmlDoc, "/Map/Customizations/Entities/Entity", null);
    if (!$v_1.length) {
        var $v_7 = XUI.Xml.SelectSingleNode(Mscrm.AttributeMapPage.pageState.mapXmlDoc, "/Map/Customizations", null);
        $v_7.parentNode.removeChild($v_7)
    }
};
Mscrm.AttributeMapPage
    .handleKeyPressOnPicklistMappingIcon = function(eventObject) {
        Mscrm.Utilities.getDomEventKeyCode(eventObject) === 13 &&
            Mscrm.AttributeMapPage.showPicklistMappingDivAlt(eventObject)
    };
Mscrm.AttributeMapPage.handleKeyPressOnLookupMappingIcon = function(eventObject) {
    Mscrm.Utilities.getDomEventKeyCode(eventObject) === 13 &&
        Mscrm.AttributeMapPage.showLookupMappingDivAlt(eventObject)
};
Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon = function(eventObject) {
    Mscrm.Utilities.getDomEventKeyCode(eventObject) === 13 &&
        Mscrm.AttributeMapPage.showCreateAttributeDivAlt(eventObject)
};
Mscrm.AttributeMapPage.selectEntity = function(listElement) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls) return;
    if (IsNull(listElement)) return;
    if (Mscrm.AttributeMapPage.pageState.selectedListItem === listElement) return;
    Mscrm.UIHelper.selectEntityUI(listElement, Mscrm.AttributeMapPage.pageState);
    var $v_0 = new Mscrm.EntityMap(Mscrm.AttributeMapPage.pageState.mapXmlDoc, listElement.id),
        $v_1 = new Mscrm.AttributeMapSectionHandler(listElement, $v_0);
    $v_1.showAttributeMap(Mscrm.UIHelper.deSelectEntityUI);
    Mscrm.AttributeMapPage.pageState.currentEntityMap = $v_0
};
Mscrm.AttributeMapPage.onAttributeMapViewChanged = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("fieldView");
    if (IsNull($v_0)) return;
    Mscrm.AttributeMapPage.pageState.selectedAttributeMapView = Mscrm.EnumConverterAttributeMapView
        .toEnum($v_0.get_dataValue());
    var $v_1 = new Mscrm.AttributeMapSectionHandler(Mscrm.AttributeMapPage.pageState.selectedListItem,
        Mscrm.AttributeMapPage.pageState.currentEntityMap);
    $v_1.showAttributeMap()
};
Mscrm.AttributeMapPage.onMapChangedAlt = function(e, isInMandatorySection) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior(e.target);
    Mscrm.AttributeMapPage.$1i($v_0, isInMandatorySection)
};
Mscrm.AttributeMapPage.resizePopup = function() {
    if (IsNull(Mscrm.AttributeMapPage.popupState) ||
        Mscrm.AttributeMapPage.popupState.currentPopupMode === -1 ||
        !Mscrm.AttributeMapPage.popupState.currentRow) return;
    Mscrm.AttributeMapPage.$d()
};
Mscrm.AttributeMapPage.$1i = function($p0, $p1) {
    if (IsNull($p0) ||
        IsNull(Mscrm.AttributeMapPage.pageState.selectedListItem) ||
        IsNull(Mscrm.AttributeMapPage.pageState.currentEntityMap)) return;
    var $v_0 = $p0.get_dataValue();
    switch (Mscrm.AttributeMapPage.popupState.currentPopupMode) {
    case 0:
        Mscrm.AttributeMapPage.createNewOnCancel();
        break;
    case 1:
        Mscrm.AttributeMapPage.$C.$s_0();
        break;
    case 2:
        Mscrm.AttributeMapPage.$7.$s_0();
        break
    }
    $p0.set_dataValue($v_0);
    Mscrm.AttributeMapPage.pageState.hasMapChanged = true;
    var $v_1, $v_2;
    if ($p1) {
        $v_1 = new Mscrm.AttributeMap($p0.get_dataValue(), $p0.get_element().id);
        $v_2 = new Mscrm.AttributeMap(Mscrm.AttributeMapPage.pageState.currentEntityMap.getSourceAttributeFromMap($v_1),
            $v_1.$0_0)
    } else {
        var $v_3 = $p0.get_element().id,
            $v_4 = new Mscrm.CustomAttribute($p0.get_dataValue(),
                null,
                Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributesCustomizationNode());
        if (!$v_4.$D_0) $v_4 = $p0.get_dataValue();
        $v_1 = new Mscrm.AttributeMap($v_3, $v_4);
        $v_2 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForSource($v_3)
    }
    if ($p1) {
        if ($v_1.$1_0 === 2) {
            var $v_5 = $get("attribute_type_" + $v_1.$0_0);
            if (!IsNull($v_5) && $v_5.value === "picklist") Mscrm.AttributeMapPage.$w($v_1, false);
            else if (!IsNull($v_5) && $v_5.value === "lookup") Mscrm.AttributeMapPage.$v($v_1, false);
            else Mscrm.AttributeMapPage.$16($v_1, $v_2)
        } else if ($v_1.$1_0 === 1) {
            var $v_6 = new Mscrm.AttributeMap($v_1.$2_0, $v_2.$0_0, $v_1.$1_0);
            Mscrm.AttributeMapPage.$f($v_6);
            Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_6);
            Mscrm.AttributeMapPage.$u($v_2.$2_0, true);
            Mscrm.AttributeMapPage.$17(1)
        }
    } else {
        var $v_7 = $v_1.$1_0 === 3 && !isNullOrEmptyString($v_1.$0_0);
        if ($v_7 || $v_1.$1_0 === 2) {
            var $v_8 = $get("attribute_type_" + $v_1.$0_0);
            if (!IsNull($v_8) && $v_8.value === "picklist") Mscrm.AttributeMapPage.$w($v_1, false);
            else if (!IsNull($v_8) && $v_8.value === "lookup") Mscrm.AttributeMapPage.$v($v_1, false);
            else {
                Mscrm.AttributeMapPage.$U($v_1);
                Mscrm.AttributeMapPage.$g($v_1, $v_2);
                Mscrm.AttributeMapPage.$f($v_1);
                Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_1)
            }
        } else ($v_1.$1_0 === 3 || !$v_1.$1_0 || $v_1.$1_0 === 1) && Mscrm.AttributeMapPage.$1Y($v_1, $v_2)
    }
    Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id)
};
Mscrm.AttributeMapPage.$1Y = function($p0, $p1) {
    if ($p0.$1_0 === 3) {
        Mscrm.AttributeMapPage.$1H($p1, false);
        if ($p1.$1_0 === 3) return;
        else $p0.markAsUnmapped()
    }
    var $v_0 = new Mscrm.AttributeMap($p1.$2_0, $p0.$0_0, $p0.$1_0);
    Mscrm.AttributeMapPage.$f($v_0);
    Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_0);
    Mscrm.AttributeMapPage.$U($p0);
    Mscrm.AttributeMapPage.$g($p0, $p1)
};
Mscrm.AttributeMapPage.$16 = function($p0, $p1) {
    var $v_0 = Mscrm.AttributeMapPage.pageState.currentEntityMap
            .getTargetAttributeFromMap($p0.$2_0),
        $v_1,
        $v_2 = false;
    if (!IsNull($v_0))
        if ($v_0 !== $p0.$0_0) {
            var $v_3 = Mscrm.AttributeMapPage.$3($v_0);
            if (!IsNull($v_3)) {
                $v_3.set_dataValue("1-Select");
                $v_1 = 0
            } else {
                var $v_4 = new Mscrm.AttributeMap($p0.$2_0, $v_0);
                Mscrm.AttributeMapPage.$g($p0, $v_4);
                $v_1 = -1
            }
        } else {
            $v_2 = true;
            $v_1 = -1
        }
    else $v_1 = -1;
    if ($p1.$1_0 === 2) $v_1 = $v_1 + 1;
    if (!isNullOrEmptyString($p1.$2_0)) {
        var $v_5 = new Mscrm.AttributeMap($p1.$2_0, "");
        Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_5)
    }
    Mscrm.AttributeMapPage.$u($p1.$2_0, true);
    Mscrm.AttributeMapPage.$u($p0.$2_0, false);
    Mscrm.AttributeMapPage.$f($p0);
    Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($p0);
    !$v_2 && Mscrm.AttributeMapPage.$17($v_1)
};
Mscrm.AttributeMapPage.$f = function($p0) {
    var $v_0 = Mscrm.AttributeMapPage.pageState.selectedListItem.id, $v_1;
    if ($p0.$2_0 === "") $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeNodeByTarget($p0.$0_0);
    else $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeNodeBySource($p0.$2_0);
    var $v_2 = XUI.Xml.SelectSingleNode($v_1, "ProcessCode", null);
    if (!IsNull($v_2) && XUI.Xml.GetText($v_2) !== Mscrm.EnumConverterImportEntityProcessCode.toString($p0.$1_0)) {
        var $v_3 = Mscrm.UIHelper.getEntityDiv($v_0);
        if (!IsNull($v_3)) {
            var $v_4 = document.createAttribute("RefreshMapPaneRequired");
            $v_4.value = "true";
            $v_3.attributes.setNamedItem($v_4)
        }
    }
};
Mscrm.AttributeMapPage.$g = function($p0, $p1) {
    var $v_0 = Mscrm.AttributeMapPage.$3($p0.$2_0), $v_1;
    if ($p1.$1_0 === 3) {
        var $v_7 = Mscrm.CustomAttribute.isValidCustomAttribute($p1.$0_0);
        if ($v_7) $v_1 = $p1.$0_0.$8_0;
        else $v_1 = null
    } else $v_1 = $p1.$0_0;
    var $v_2 = null;
    if (!isNullOrEmptyString($v_1)) {
        var $v_8 = $v_0.get_dataValue();
        $v_0.set_dataValue($v_1);
        $v_2 = $v_0.get_innerText();
        $v_0.set_dataValue($v_8)
    }
    var $v_3;
    if ($p0.$1_0 === 3) {
        var $v_9 = Mscrm.CustomAttribute.isValidCustomAttribute($p0.$0_0);
        if ($v_9) $v_3 = $p0.$0_0.$8_0;
        else $v_3 = null
    } else $v_3 = $p0.$0_0;
    if (isNullOrEmptyString($v_1) && isNullOrEmptyString($v_3)) return;
    for (var $v_4 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id),
        $v_5 = $v_4.getElementsByTagName("SELECT"),
        $v_6 = $v_5.length,
        $v_A = 0;
        $v_A < $v_6;
        $v_A++) {
        var $v_B = Mscrm.FormControlInputBehavior.GetElementBehavior($v_5[$v_A]);
        if (IsNull($v_B) ||
            Mscrm.AttributeMapPage.$q($v_B) ||
            $v_0 === $v_B ||
            !IsNull($v_B.get_element().className.match(new RegExp("DisabledControl")))) continue;
        if (!isNullOrEmptyString($v_1))
            if ($p1.$1_0 === 3) {
                Mscrm.UIHelper.checkAndAddNewFieldsOptionGroupUI($v_B);
                $v_B.AddOption($v_2, $v_1, "newFieldsOptionGroup")
            } else $v_B.AddOption($v_2, $v_1, "fieldsOptionGroup");
        if (!isNullOrEmptyString($v_3)) {
            $v_B.RemoveOption($v_3);
            Mscrm.UIHelper.checkAndDeleteNewFieldsOptionGroupUI($v_B)
        }
    }
};
Mscrm.AttributeMapPage.$u = function($p0, $p1) {
    if (isNullOrEmptyString($p0)) return;
    var $v_0 = Mscrm.AttributeMapPage.$3($p0);
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.AttributeMapPage.getRowForNonMandatorySelectControl($v_0);
        if (!IsNull($v_1)) {
            var $v_2 = "none";
            if ($p1) {
                $v_0.set_dataValue("1-Select");
                Mscrm.AttributeMapPage.$U(new Mscrm.AttributeMap($p0, ""));
                $v_2 = ""
            }
            $v_1.style.display = $v_2
        }
    }
};
Mscrm.AttributeMapPage.$U = function($p0) {
    var $v_0 = Mscrm.AttributeMapPage.$3($p0.$2_0);
    if (IsNull($v_0)) return;
    var $v_1 = XUI.Html.DomUtils.GetPrevSibling($v_0.get_element()),
        $v_2,
        $v_3 = $v_1.src.endsWith("/_imgs/importwizard_newentity.gif") ||
            $v_1.src.endsWith("/_imgs/importwizard_fielddetails.gif") ||
            $v_1.src.endsWith("/_imgs/importwizard_picklist_detail.gif");
    if ($v_3) {
        try {
            $removeHandler($v_1, "click", Mscrm.AttributeMapPage.showCreateAttributeDivAlt)
        } catch ($$e_5) {
        }
        try {
            $removeHandler($v_1, "click", Mscrm.AttributeMapPage.showLookupMappingDivAlt)
        } catch ($$e_6) {
        }
        try {
            $removeHandler($v_1, "click", Mscrm.AttributeMapPage.showPicklistMappingDivAlt)
        } catch ($$e_7) {
        }
        try {
            $removeHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon)
        } catch ($$e_8) {
        }
        try {
            $removeHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon)
        } catch ($$e_9) {
        }
        try {
            $removeHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon)
        } catch ($$e_A) {
        }
    }
    switch ($p0.$1_0) {
    case 1:
        $v_1.src = "/_imgs/importwizard_yellowwarning.gif";
        $v_1.alt = window.LOCID_IW_WARNINGLEGEND;
        $v_1.title = $v_1.alt;
        $v_1.style.cursor = "default";
        $v_1.tabIndex = -1;
        $v_2 = true;
        break;
    case 3:
        $v_1.src = "/_imgs/importwizard_newentity.gif";
        $v_1.alt = window.LOCID_IW_CREATENEWLEGEND;
        $v_1.title = $v_1.alt;
        $addHandler($v_1, "click", Mscrm.AttributeMapPage.showCreateAttributeDivAlt);
        $addHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon);
        $v_1.style.cursor = "hand";
        $v_1.tabIndex = 0;
        $v_2 = true;
        break;
    case 2:
        var $v_4 = $get("attribute_type_" + $p0.$0_0);
        if (!IsNull($v_4) && $v_4.value === "lookup") {
            $v_1.src = "/_imgs/importwizard_fielddetails.gif";
            $v_1.alt = window.LOCID_IW_LOOKUPLEGEND;
            $v_1.title = $v_1.alt;
            $addHandler($v_1, "click", Mscrm.AttributeMapPage.showLookupMappingDivAlt);
            $addHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnLookupMappingIcon);
            $v_1.style.cursor = "hand";
            $v_1.tabIndex = 0;
            $v_2 = true
        } else if (!IsNull($v_4) && $v_4.value === "picklist") {
            $v_1.src = "/_imgs/importwizard_picklist_detail.gif";
            $v_1.alt = window.LOCID_IW_PICKLISTLEGEND;
            $v_1.title = $v_1.alt;
            $addHandler($v_1, "click", Mscrm.AttributeMapPage.showPicklistMappingDivAlt);
            $addHandler($v_1, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnPicklistMappingIcon);
            $v_1.style.cursor = "hand";
            $v_1.tabIndex = 0;
            $v_2 = true
        } else {
            $v_1.src = null;
            $v_1.style.cursor = "default";
            $v_1.tabIndex = -1;
            $v_2 = false
        }
        break;
    default:
        $v_1.src = null;
        $v_1.style.cursor = "default";
        $v_1.tabIndex = -1;
        $v_2 = false;
        break
    }
    if ($v_2) {
        $v_1.style.display = "inline";
        Mscrm.AttributeMapPage.$1B("mscrm-iw-AMP-TargetSelectWith.*Image",
            "mscrm-iw-AMP-TargetSelectWithImage",
            $v_0.get_element())
    } else {
        $v_1.style.display = "none";
        Mscrm.AttributeMapPage.$1B("mscrm-iw-AMP-TargetSelectWith.*Image",
            "mscrm-iw-AMP-TargetSelectWithoutImage",
            $v_0.get_element())
    }
};
Mscrm.AttributeMapPage.$1B = function($p0, $p1, $p2) {
    for (var $v_0 = $p2.className.split(" "), $v_1 = "", $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2];
        if (!IsNull($v_3.match(new RegExp($p0)))) $v_0[$v_2] = $p1;
        $v_1 = $v_1 + " " + $v_0[$v_2]
    }
    $p2.className = $v_1;
    return
};
Mscrm.AttributeMapPage.$w = function($p0, $p1) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls) return;
    Mscrm.AttributeMapPage.popupState.currentPopupMode = 2;
    var $v_0 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id),
        $v_1 = $get("picklistMappingDiv");
    $v_0.appendChild($v_1);
    var $v_2 = $get("picklistMappingDivTitle"),
        $v_3 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeNodeBySource($p0.$2_0),
        $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_3, "SourceAttributeName", null));
    XUI.Html.SetText($v_2, String.format(window.LOCID_IW_PICKLIST_POPUP_TITLE, $v_4));
    $v_2.title = XUI.Html.GetText($v_2);
    var $v_5 = null;
    if (Mscrm.AttributeMapPage.$T($p0.$0_0)) {
        $v_5 = Mscrm.AttributeMapPage.$3($p0.$0_0);
        Mscrm.AttributeMapPage.popupState.currentRow = Mscrm.AttributeMapPage.getRowForMandatorySelectControl($v_5)
    } else {
        $v_5 = Mscrm.AttributeMapPage.$3($p0.$2_0);
        Mscrm.AttributeMapPage.popupState.currentRow = Mscrm.AttributeMapPage.getRowForNonMandatorySelectControl($v_5)
    }
    Mscrm.UIHelper.$H("picklistMappingDiv", true, $v_5);
    Mscrm.AttributeMapPage.$7.$1E_0($p0);
    var $v_6 = false, $v_7 = false, $v_8 = $get("attribute_type_" + $p0.$0_0);
    if (!IsNull($v_8) && $v_8.value === "picklist") {
        if ($v_8.attributes.getNamedItem("customizable"))
            $v_6 = $v_8.attributes.getNamedItem("customizable").value === "true";
        if ($v_8.attributes.getNamedItem("nullable")) $v_7 = $v_8.attributes.getNamedItem("nullable").value === "true"
    }
    Mscrm.AttributeMapPage.$7.$1R_1(Mscrm.AttributeMapPage.pageState.currentEntityMap.$P_0,
        $v_4,
        Mscrm.AttributeMapPage.pageState.currentEntityMap.$9_0,
        $p0.$0_0,
        $v_6,
        $v_7);
    Mscrm.PicklistMapEditor.setOKButtonState();
    Mscrm.AttributeMapPage.$d();
    if ($p1 && Mscrm.AttributeMapPage.popupState.currentPopupMode === 2) {
        var $v_A = $get("picklistDivPicklistValues_0");
        !IsNull($v_A) && $v_A.focus()
    }
    var $v_9 = $get("closePicklistDivLink");
    $addHandler($v_9, "keypress", Mscrm.AttributeMapPage.$7.$$d_$1a_0)
};
Mscrm.AttributeMapPage.showPicklistMappingDivAlt = function(eventObject) {
    var $v_0 = eventObject.target.id.replace("_image", ""), $v_1 = null;
    if (Mscrm.AttributeMapPage.$T($v_0)) {
        $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForTarget($v_0);
        if (!$v_1) {
            alert(window.LOCID_IW_PICKLIST_NO_SOURCE);
            return
        }
    } else $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForSource($v_0);
    Mscrm.AttributeMapPage.$w($v_1, true)
};
Mscrm.AttributeMapPage.showLookupMappingDivAlt = function(eventObject) {
    var $v_0 = eventObject.target.id.replace("_image", ""), $v_1 = null;
    if (Mscrm.AttributeMapPage.$T($v_0)) {
        $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForTarget($v_0);
        if (!$v_1) {
            alert(window.LOCID_IW_LOOKUP_NO_SOURCE);
            return
        }
    } else $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForSource($v_0);
    Mscrm.AttributeMapPage.$v($v_1, true)
};
Mscrm.AttributeMapPage.$v = function($p0, $p1) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls) return;
    Mscrm.AttributeMapPage.popupState.currentPopupMode = 1;
    var $v_0 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id),
        $v_1 = $get("lookupMappingDiv");
    $v_0.appendChild($v_1);
    var $v_2 = $get("lookupMappingDivTitle"),
        $v_3 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeNodeBySource($p0.$2_0),
        $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_3, "SourceAttributeName", null));
    XUI.Html.SetText($v_2, String.format(window.LOCID_IW_LOOKUP_POPUP_TITLE, $v_4));
    $v_2.title = XUI.Html.GetText($v_2);
    var $v_5 = null;
    if (Mscrm.AttributeMapPage.$T($p0.$0_0)) {
        $v_5 = Mscrm.AttributeMapPage.$3($p0.$0_0);
        Mscrm.AttributeMapPage.popupState.currentRow = Mscrm.AttributeMapPage.getRowForMandatorySelectControl($v_5)
    } else {
        $v_5 = Mscrm.AttributeMapPage.$3($p0.$2_0);
        Mscrm.AttributeMapPage.popupState.currentRow = Mscrm.AttributeMapPage.getRowForNonMandatorySelectControl($v_5)
    }
    Mscrm.UIHelper.$H("lookupMappingDiv", true, $v_5);
    Mscrm.AttributeMapPage.$C.$1E_0($p0);
    var $v_6 = false, $v_7 = $get("attribute_type_" + $p0.$0_0);
    if (!IsNull($v_7) && $v_7.value === "lookup")
        if ($v_7.attributes.getNamedItem("owner")) $v_6 = $v_7.attributes.getNamedItem("owner").value === "true";
    Mscrm.LookupMapEditor.$1Q(Mscrm.AttributeMapPage.pageState.currentEntityMap.$9_0,
        $p0.$2_0,
        $p0.$0_0,
        $p1,
        Mscrm.AttributeMapPage.pageState.currentEntityMap.$1_0 === 3,
        $v_6);
    Mscrm.LookupMapEditor.$t();
    Mscrm.AttributeMapPage.$d();
    var $v_8 = $get("closeLookupDivLink");
    if ($p1 && Mscrm.AttributeMapPage.popupState.currentPopupMode === 1) !IsNull($v_8) && $v_8.focus();
    $addHandler($v_8, "keypress", Mscrm.AttributeMapPage.$C.$$d_$1a_0)
};
Mscrm.AttributeMapPage.showCreateAttributeDivAlt = function(eventObject) {
    var $v_0 = eventObject.target.id.replace("_image", ""),
        $v_1 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeMapForSource($v_0);
    Mscrm.AttributeMapPage.$1H($v_1, true)
};
Mscrm.AttributeMapPage.$1H = function($p0, $p1) {
    if (Mscrm.AttributeMapPage.pageState.bDisableControls) return;
    Mscrm.AttributeMapPage.popupState.currentPopupMode = 0;
    var $v_0 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id),
        $v_1 = $get("createAttributeDiv"),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("attributeDisplayName"),
        $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("attributeType"),
        $v_4 = Mscrm.FormControlInputBehavior.GetBehavior("lookupEntities"),
        $v_5 = $get("buttonCreateOK"),
        $v_6 = $get("buttonCreateCancel");
    $v_0.appendChild($v_1);
    var $v_7 = $get("createAttributeDivTitle"),
        $v_8 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributeNodeBySource($p0.$2_0),
        $v_9 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_8, "SourceAttributeName", null));
    XUI.Html.SetText($v_7, String.format(window.LOCID_IW_NEWATTRIB_POPUP_TITLE, $v_9));
    $v_7.title = XUI.Html.GetText($v_7);
    if ($p0.$1_0 === 3 && $p1) {
        var $v_B = Mscrm.CustomAttribute.isValidCustomAttribute($p0.$0_0);
        if ($v_B) {
            $v_2.set_dataValue($p0.$0_0.$M_0.substring(0, 45));
            $v_3.set_dataValue($p0.$0_0.$R_0);
            $v_4.set_dataValue($p0.$0_0.$K_0);
            $v_3.set_defaultValue($v_3.get_dataValue());
            $v_4.set_defaultValue($v_4.get_dataValue())
        } else return
    } else {
        $v_2.set_dataValue($v_9.substring(0, 45));
        $v_3.set_dataValue("nvarchar");
        $v_4.set_dataValue("")
    }
    Mscrm.AttributeMapPage.pageState.g_oldAttributeMap = $p0;
    Mscrm.AttributeMapPage.pageState.g_isReopen = $p1;
    var $v_A = Mscrm.AttributeMapPage.$3($p0.$2_0);
    Mscrm.UIHelper.$H("createAttributeDiv", true, $v_A);
    Mscrm.AttributeMapPage.newAttributeTypeChanged();
    Mscrm.AttributeMapPage.popupState.currentRow = Mscrm.AttributeMapPage.getRowForNonMandatorySelectControl($v_A);
    Mscrm.AttributeMapPage.$d();
    if ($p1) {
        var $v_C = $p0.$0_0.$R_0;
        if ($v_C === "lookup")
            $p0.$E_0 &&
                $p0.$E_0.length > 0 &&
                Mscrm.AttributeMapPage.$1f(Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect, $p0.$E_0);
        else if ($v_C === "picklist" || $v_C === "bit")
            $p0.$F_0 && $p0.$F_0.length > 0 && Mscrm.PicklistMapEditor.$1F("newDivPicklistSourceFieldList", $p0.$F_0);
        !IsNull($v_2) && $v_2.setFocus()
    }
    Mscrm.AttributeMapPage.$d()
};
Mscrm.AttributeMapPage.$1f = function($p0, $p1) {
    if ($p1.length > 0) {
        $p0.selectAll(false);
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) $p0.selectItem($p1[$v_0].$J_0, true)
    }
};
Mscrm.AttributeMapPage.$1U = function($p0, $p1) {
    for (var $v_0 = new Array(0), $v_1 = $p0.getSelectedItems(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = new Mscrm.LookupMap($p1, $v_1[$v_2].get_value(), "System");
        $v_0[$v_2] = $v_3
    }
    return $v_0
};
Mscrm.AttributeMapPage.$d = function() {
    var $v_0 = null;
    switch (Mscrm.AttributeMapPage.popupState.currentPopupMode) {
    case 0:
        $v_0 = $get("createAttributeDiv");
        break;
    case 1:
        $v_0 = $get("lookupMappingDiv");
        break;
    case 2:
        $v_0 = $get("picklistMappingDiv");
        break;
    case -1:
    default:
        return
    }
    var $v_1 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id),
        $v_2 = Mscrm.AttributeMapPage.popupState.currentRow;
    if (window.LOCID_UI_DIR === "RTL") $v_0.style.right = "0px";
    else $v_0.style.left = "0px";
    for (var $v_3 = $v_2.parentNode.parentNode.getElementsByTagName("TR"), $v_4 = 0, $v_A = 0;
        $v_A < $v_2.rowIndex;
        $v_A++) {
        var $v_B = $v_3[$v_A];
        if (XUI.Html.GetComputedStyle($v_B, "display") !== "none") $v_4 += $v_B.offsetHeight
    }
    var $v_5 = 0, $v_6 = $v_1.parentNode.getClientRects()[0], $v_7 = $v_2.getClientRects()[0];
    $v_5 = $v_7.bottom - $v_6.top;
    var $v_8 = $v_0.scrollHeight, $v_9 = 0;
    if ($v_1.parentNode.offsetHeight <= $v_8) $v_9 = $v_4 + $v_2.offsetHeight;
    else if ($v_8 + $v_5 > $v_1.parentNode.offsetHeight && $v_5 - $v_8 - $v_2.offsetHeight > 0) $v_9 = $v_4 - $v_8;
    else $v_9 = $v_4 + $v_2.offsetHeight;
    $v_0.style.top = $v_9.toString() + "px";
    $v_0.style.width = $v_2.scrollWidth.toString() + "px"
};
Mscrm.AttributeMapPage.$1e = function($p0) {
    return !Sys.UI.DomElement.containsCssClass($p0, "OtherFieldsSelectControl")
};
Mscrm.AttributeMapPage.$q = function($p0) {
    return IsNull($p0.get_element().className.match(new RegExp("OtherFieldsSelectControl")))
};
Mscrm.AttributeMapPage.$T = function($p0) {
    var $v_0 = false;
    if (!IsNull($p0)) {
        var $v_1 = Mscrm.AttributeMapPage.$3($p0);
        if (!IsNull($v_1)) $v_0 = Mscrm.AttributeMapPage.$q($v_1)
    }
    return $v_0
};
Mscrm.AttributeMapPage.processLookupMappingOnOk = function() { Mscrm.AttributeMapPage.$C.$19_0() };
Mscrm.AttributeMapPage.$p = function($p0, $p1, $p2) {
    switch ($p0) {
    case 2:
        return $p2 ? $p1.$2_0 : $p1.$0_0;
    case 0:
        return "3-Ignore";
    case 1:
        return "1-Select";
    case 3:
        var $v_0 = Mscrm.CustomAttribute.isValidCustomAttribute($p1.$0_0);
        if ($v_0) return $p1.$0_0.$8_0;
        else return "1-Select";
    default:
        return "1-Select"
    }
};
Mscrm.AttributeMapPage.processLookupMappingOnCancel = function() { Mscrm.AttributeMapPage.$C.$s_0() };
Mscrm.AttributeMapPage.processPicklistMappingOnCancel = function() { Mscrm.AttributeMapPage.$7.$s_0() };
Mscrm.AttributeMapPage.processPicklistMappingOnOk = function() { Mscrm.AttributeMapPage.$7.$19_0() };
Mscrm.AttributeMapPage.createNewOnOk = function() {
    var $v_0 = Mscrm.AttributeMapPage.pageState.g_oldAttributeMap;
    Mscrm.AttributeMapPage.pageState.g_oldAttributeMap = null;
    var $v_1 = Mscrm.AttributeMapPage.pageState.g_isReopen;
    if (IsNull($v_0)) return;
    var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("attributeDisplayName"),
        $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("attributeType"),
        $v_4 = Mscrm.FormControlInputBehavior.GetBehavior("lookupEntities"),
        $v_5 = Mscrm.AttributeMapPage.$3($v_0.$2_0);
    if (!$v_2.get_isDirty() &&
        !$v_3.get_isDirty() &&
        !$v_4.get_isDirty() &&
        !Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect.get_isDirty()) {
        Mscrm.UIHelper.$H("createAttributeDiv", false, null);
        Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
        $v_5.get_element().focus();
        return
    }
    if ($v_2.get_isDirty())
        if (isNullOrEmptyString($v_2.get_dataValue().toString())) {
            alert(window.LOCID_IW_EMPTYDISPLAYNAME);
            return
        }
    var $v_6;
    if ($v_1) {
        var $v_9 = Mscrm.CustomAttribute.isValidCustomAttribute($v_0.$0_0);
        if ($v_9) $v_6 = $v_0.$0_0.$8_0;
        else $v_6 = null
    } else
        $v_6 = Mscrm.CustomAttribute
            .getUniqueIdForCustomAttribute($v_0.$2_0,
                Mscrm.AttributeMapPage.pageState.currentEntityMap.getAttributesCustomizationNode(false));
    var $v_7 = new Mscrm.CustomAttribute($v_6,
            $v_3.get_dataValue(),
            null,
            $v_2.get_dataValue().toString(),
            $v_4.get_dataValue()),
        $v_8;
    if ($v_3.get_dataValue() === "lookup") {
        var $v_A = Mscrm.AttributeMapPage.$1U(Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect,
            $v_4.get_dataValue());
        $v_8 = new Mscrm.AttributeMap($v_0.$2_0, $v_7, 3, $v_A)
    } else if ($v_3.get_dataValue() === "picklist" || $v_3.get_dataValue() === "bit") {
        var $v_B = Mscrm.PicklistMapEditor.$14("newDivPicklistSourceFieldList");
        $v_8 = new Mscrm.AttributeMap($v_0.$2_0, $v_7, 3, null, $v_B)
    } else $v_8 = new Mscrm.AttributeMap($v_0.$2_0, $v_7);
    Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_8);
    Mscrm.AttributeMapPage.pageState.hasMapChanged = true;
    if ($v_2.get_isDirty()) {
        if (Mscrm.CustomAttribute.isValidCustomAttribute($v_0.$0_0) && $v_0.$0_0.$D_0)
            if ($v_1) $v_5.RemoveOption($v_0.$0_0.$8_0);
            else Mscrm.AttributeMapPage.$g($v_8, $v_0);
        Mscrm.UIHelper.checkAndAddNewFieldsOptionGroupUI($v_5);
        $v_5.AddOption($v_2.get_dataValue().toString(), $v_6, "newFieldsOptionGroup");
        $v_5.set_dataValue($v_6)
    }
    Mscrm.UIHelper.$H("createAttributeDiv", false, null);
    Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
    Mscrm.AttributeMapPage.$U($v_8);
    $v_5.get_element().focus();
    Mscrm.PicklistMapEditor.$i("newDivPicklistSourceFieldList")
};
Mscrm.AttributeMapPage.handleKeyPressOnCloseCreateIcon = function(eventObject) {
    Mscrm.Utilities.getDomEventKeyCode(eventObject) === 13 && Mscrm.AttributeMapPage.createNewOnCancel()
};
Mscrm.AttributeMapPage.createNewOnCancel = function() {
    var $v_0 = Mscrm.AttributeMapPage.pageState.g_oldAttributeMap;
    Mscrm.AttributeMapPage.pageState.g_oldAttributeMap = null;
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.$1_0;
    $get("buttonCreateOK").disabled = false;
    var $v_2 = Mscrm.AttributeMapPage.$p($v_1, $v_0, false), $v_3 = Mscrm.AttributeMapPage.$3($v_0.$2_0);
    $v_3.set_dataValue($v_2);
    Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap($v_0);
    Mscrm.AttributeMapPage.$U($v_0);
    Mscrm.UIHelper.$H("createAttributeDiv", false, null);
    Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
    $v_3.get_element().focus();
    Mscrm.PicklistMapEditor.$i("newDivPicklistSourceFieldList")
};
Mscrm.AttributeMapPage.newAttributeTypeChanged = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("attributeType"),
        $v_1 = $get("lookupEntityAttributeList"),
        $v_2 = $get("lookupLabels"),
        $v_3 = $get("lookupEntities"),
        $v_4 = $get("newDivPicklistMappings"),
        $v_5 = $get("buttonCreateOK"),
        $v_6 = $get("newAttributeErrorRow");
    $v_6.style.display = "none";
    if ($v_0.get_dataValue() === "lookup") {
        $v_4.style.display = "none";
        $v_1.style.display = "";
        $v_2.style.display = "";
        $v_3.disabled = false;
        var $v_7 = $get("lookupAttributes");
        if (IsNull(Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect)) {
            Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect = Mscrm.AttributeMapPage.$10($v_7);
            Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect.set_okCallback(Mscrm.AttributeMapPage.$1k)
        }
        Mscrm.AttributeMapPage.lookupEntityChanged()
    } else if ($v_0.get_dataValue() === "picklist" || $v_0.get_dataValue() === "bit") {
        $v_1.style.display = "none";
        $v_2.style.display = "none";
        $v_4.style.display = "";
        var $v_8 = Mscrm.AttributeMapPage.pageState.currentEntityMap
                .getAttributeNodeBySource(Mscrm.AttributeMapPage.pageState.g_oldAttributeMap.$2_0),
            $v_9 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_8, "SourceAttributeName", null));
        Mscrm.PicklistMapEditor.$1L(Mscrm.AttributeMapPage.pageState.currentEntityMap.$P_0,
            $v_9,
            $v_0.get_dataValue(),
            "newDivPicklistSourceFieldList")
    } else {
        $v_4.style.display = "none";
        $v_1.style.display = "none";
        $v_2.style.display = "none";
        $v_5.disabled = false
    }
};
Mscrm.AttributeMapPage.$10 = function($p0) {
    var $v_0 = new Mscrm.MultiSelect($p0);
    $v_0.set_headerText(window.LOCID_IW_LKUPATTR_SLCT_TITLE);
    $v_0.set_iconToolTip(window.LOCID_IW_LKUPATTR_SLCT_TOOLTIP);
    $v_0.set_selectedItemsDisplayDefault(window.LOCID_IW_LKUPATTR_SLCT_TITLE);
    $v_0.setFloat();
    return $v_0
};
Mscrm.AttributeMapPage.$1k = function($p0) {
    var $v_0 = $p0.getSelectedItems(), $v_1 = $get("buttonCreateOK");
    $v_1.disabled = $v_0.length < 1
};
Mscrm.AttributeMapPage.lookupEntityChanged = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("lookupEntities"), $v_1 = $get("buttonCreateOK");
    if (isNullOrEmptyString($v_0.get_dataValue())) {
        Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect.clear();
        Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect.set_disabled(true);
        $v_1.disabled = true;
        return
    } else {
        Mscrm.AttributeMapPage.$1S($v_0.get_dataValue());
        Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect.set_disabled(false);
        $v_1.disabled = false
    }
};
Mscrm.AttributeMapPage.$1S = function($p0) {
    if (Mscrm.AttributeMapPage.pageState.$18_0($p0)) {
        var $v_0 = Mscrm.AttributeMapPage.pageState.$1W_0($p0);
        Mscrm.LookupMapEditor.$r(Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect, $v_0, $p0, null)
    } else {
        var $v_1 = new RemoteCommand("ImportWebService", "GetAttributeMetadataXmlForLookup");
        $v_1.SetParameter("entityName", $p0);
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) {
            var $v_3 = $v_2.ReturnValue;
            if (isNullOrEmptyString($v_3));
            var $v_4 = XUI.Xml.LoadXml($v_3);
            Mscrm.LookupMapEditor.$r(Mscrm.AttributeMapPage.pageState.lookupAttributeMultiSelect, $v_4, $p0, null)
        }
    }
};
Mscrm.AttributeMapPage.lookupDivAttributeChanged = function(lookupEntryIndex) {};
Mscrm.AttributeMapPage.lookupDivEntityCheckBoxClicked = function(lookupEntryIndex) {
    Mscrm.LookupMapEditor.$1P(lookupEntryIndex)
};
Mscrm.AttributeMapPage.$3 = function($p0) {
    var $v_0 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
    return Mscrm.AttributeMapPage.getSelectControlForGivenEntity($v_0, $p0)
};
Mscrm.AttributeMapPage.getSelectControlForGivenEntity = function(entityDiv, id) {
    for (var $v_0 = entityDiv.getElementsByTagName("SELECT"), $v_1 = $v_0.length, $v_2 = null, $v_3 = 0;
        $v_3 < $v_1;
        $v_3++) {
        $v_2 = $v_0[$v_3];
        if ($v_2.id === id) return Mscrm.FormControlInputBehavior.GetElementBehavior($v_2)
    }
    return null
};
Mscrm.AttributeMapPage.getRowForNonMandatorySelectControl = function(selectControl) {
    if (IsNull(selectControl)) return null;
    return selectControl.get_element().parentNode.parentNode.parentNode
};
Mscrm.AttributeMapPage.getRowForMandatorySelectControl = function(selectControl) {
    if (IsNull(selectControl)) return null;
    return selectControl.get_element().parentNode.parentNode
};
Mscrm.AttributeMapSectionHandler = function(newListItem, newEntityMap) {
    this.$$d_$1h_0 = Function.createDelegate(this, this.$1h_0);
    this.$I_0 = newListItem.id;
    this.$5_0 = Mscrm.UIHelper.getEntityDiv(this.$I_0);
    this.$m_0 = Mscrm.UIHelper.getEntityDivName(this.$I_0);
    this.$W_0 = newEntityMap;
    this.$X_0 = newListItem
};
Mscrm.AttributeMapSectionHandler.prototype = {
    $I_0: null,
    $m_0: null,
    $5_0: null,
    $X_0: null,
    $W_0: null,
    $n_0: null,
    showAttributeMap: function(funcErrorHandler) {
        this.$n_0 = funcErrorHandler;
        this.$1D_0(true);
        if (!IsNull(Mscrm.AttributeMapPage.pageState
            .selectedListItem))
            Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id).style.display = "none";
        else {
            $get("selectEntityMessage").style.display = "none";
            $get("attributeMapArea").style.height = "100%";
            $get("attributeMapArea").style.display = "block"
        }
        this.$1b_0();
        if (IsNull(this.$5_0)) {
            var $$t_1 = this;
            window.setTimeout(function() { $$t_1.$1T_0() }, 3)
        } else this.$1G_0()
    },
    $1D_0: function($p0) {
        var $v_0 = "none";
        if ($p0) $v_0 = "block";
        $get("progressDiv").style.display = $v_0;
        if ($v_0 === "none") $get("attributeMapArea").style.display = "block";
        else $get("attributeMapArea").style.display = "none";
        Mscrm.AttributeMapPage.pageState.bDisableControls = $p0;
        !$p0 && Mscrm.UIHelper.updateMappingStatusUI();
        $get("fieldView").disabled = $p0;
        var $v_1 = $P_CRM(document.body);
        if ($p0) $v_1.addClass("mscrm-iw-AMP-wait");
        else $v_1.removeClass("mscrm-iw-AMP-wait")
    },
    $1b_0: function() {
        if (!IsNull(this.$5_0)) {
            var $v_0 = this.$5_0.attributes.getNamedItem("view"),
                $v_1 = this.$5_0.attributes.getNamedItem("RefreshMapPaneRequired");
            if (!IsNull($v_0) &&
                $v_0.value !==
                Mscrm.EnumConverterAttributeMapView
                .toString(Mscrm.AttributeMapPage.pageState.selectedAttributeMapView) ||
                !IsNull($v_1) && $v_1.value === "true") {
                this.$5_0.parentNode.appendChild($get("createAttributeDiv"));
                this.$5_0.parentNode.removeChild(this.$5_0);
                this.$5_0 = null
            }
        }
    },
    $1T_0: function() {
        var $v_0 = new RemoteCommand("ImportWebService", "GetAttributeMapSectionHtml");
        $v_0.SetParameter("inputFileId", this.$I_0);
        $v_0.SetParameter("attributeMapView",
            Mscrm.EnumConverterAttributeMapView.toString(Mscrm.AttributeMapPage.pageState.selectedAttributeMapView));
        $v_0.SetParameter("mapXml", this.$W_0.getReducedMapXmlForEntity());
        $v_0.Execute(this.$$d_$1h_0)
    },
    $1h_0: function($p0, $p1) {
        if (!$p0.Success) {
            this.$5_0 = null;
            this.$n_0(this.$X_0)
        } else {
            var $v_0 = document.createElement("div"), $v_1 = document.createAttribute("view");
            $v_1.value = Mscrm.EnumConverterAttributeMapView
                .toString(Mscrm.AttributeMapPage.pageState.selectedAttributeMapView);
            $v_0.attributes.setNamedItem($v_1);
            $v_0.id = this.$m_0;
            $v_0.style.overflow = "visible";
            $v_0.style.height = "100%";
            $v_0.style.position = "static";
            $v_0.innerHTML = $p0.ReturnValue;
            $get("attributeMapCell").appendChild($v_0);
            this.$1l_0($v_0);
            this.$5_0 = $get($v_0.id)
        }
        this.$1G_0()
    },
    $1N_0: function($p0, $p1) { Mscrm.CrmUIComponent.crmCreate($p1, null, null, null, $p0) },
    $1l_0: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("SELECT"), $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            this.$1N_0($v_3, Mscrm.FormInputControl.SelectInputBehavior);
            if (!Mscrm.AttributeMapPage.$1e($v_3)) {
                var $$t_A = this;
                $P_CRM($v_3).change(function($p1_0) { Mscrm.AttributeMapPage.onMapChangedAlt($p1_0, false) })
            } else if (!$v_3.id.startsWith("referencing_")) {
                var $$t_B = this;
                $P_CRM($v_3).change(function($p1_0) { Mscrm.AttributeMapPage.onMapChangedAlt($p1_0, true) })
            }
        }
        for (var $v_1 = $p0.getElementsByTagName("IMG"), $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
            var $v_5 = $v_1[$v_4];
            if ($v_5.src.endsWith("/_imgs/importwizard_newentity.gif")) {
                $addHandler($v_5, "click", Mscrm.AttributeMapPage.showCreateAttributeDivAlt);
                $addHandler($v_5, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnAttributeIcon)
            } else {
                var $v_6 = false;
                if ($v_5.attributes
                    .getNamedItem("InternalMapping"))
                    $v_6 = $v_5.attributes.getNamedItem("InternalMapping").value === "true";
                if ($v_6) $v_5.tabIndex = -1;
                else if ($v_5.src.endsWith("/_imgs/importwizard_fielddetails.gif")) {
                    $addHandler($v_5, "click", Mscrm.AttributeMapPage.showLookupMappingDivAlt);
                    $addHandler($v_5, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnLookupMappingIcon)
                } else if ($v_5.src.endsWith("/_imgs/importwizard_picklist_detail.gif")) {
                    $addHandler($v_5, "click", Mscrm.AttributeMapPage.showPicklistMappingDivAlt);
                    $addHandler($v_5, "keypress", Mscrm.AttributeMapPage.handleKeyPressOnPicklistMappingIcon)
                }
            }
        }
    },
    $1G_0: function() {
        if (!IsNull(this.$5_0)) {
            $get("referencing_" + this.$I_0).style.display = "none";
            this.$1Z_0();
            Mscrm.FormControlInputBehavior.GetBehavior("lookupEntities")
                .set_options(Mscrm.FormControlInputBehavior.GetBehavior("referencing_" + this.$I_0).get_options());
            this.$1K_0();
            this.$5_0.style.display = "block";
            Mscrm.AttributeMapPage.pageState.selectedListItem = this.$X_0
        } else {
            $get("selectEntityMessage").style.display = "block";
            if (!IsNull(Mscrm.AttributeMapPage.pageState.selectedListItem)) {
                var $v_0 = Mscrm.UIHelper.getEntityDiv(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
                if (!IsNull($v_0)) $v_0.style.display = "none";
                Mscrm.AttributeMapPage.pageState.selectedListItem = null
            }
            $get("attributeMapArea").style.display = "none"
        }
        this.$1D_0(false)
    },
    $1K_0: function() {
        var $v_0 = XUI.Xml.SelectNodes(Mscrm.AttributeMapPage.pageState.mapXmlDoc,
                "Map/Customizations/Entities/Entity[CustomizationXml]",
                null),
            $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("lookupEntities");
        if (IsNull($v_0) || !$v_0.length) return;
        $v_0.length > 0 && $v_1.AddOptionGroup(window.LOCID_OPTGROUP_NEWENTITIES, "newEntityGroup", "ascending");
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2], $v_4 = null, $v_5 = $v_3.attributes.getNamedItem("Id");
            if (!IsNull($v_5)) $v_4 = XUI.Xml.GetText($v_5);
            var $v_6 = XUI.Xml.SelectSingleNode($v_3, "CustomizationXml/DisplayName", null);
            !IsNull($v_6) && $v_1.AddOption(XUI.Xml.GetText($v_6), $v_4, "newEntityGroup")
        }
    },
    $1Z_0: function() {
        var $v_0 = this.$W_0.getAttributesCustomizationNode();
        if (!IsNull($v_0)) {
            for (var $v_1 = XUI.Xml.SelectNodes($v_0, "Attribute", null),
                $v_2 = {},
                $v_3 = XUI.Xml.SelectNodes(this.$W_0.$4_0, "AttributeMaps/AttributeMap/TargetAttributeRef", null),
                $v_5 = 0;
                $v_5 < $v_3.length;
                $v_5++) {
                var $v_6 = $v_3[$v_5], $v_7 = XUI.Xml.SelectSingleNode($v_6, "../SourceAttributeId", null);
                if (!IsNull($v_7)) $v_2[XUI.Xml.GetText($v_6)] = XUI.Xml.GetText($v_7)
            }
            for (var $v_4 = Mscrm.UIHelper.getEntityDiv(this.$X_0.id), $v_8 = 0; $v_8 < $v_1.length; $v_8++) {
                var $v_9 = $v_1[$v_8], $v_A = null, $v_B = $v_9.attributes.getNamedItem("Id");
                if (!IsNull($v_B)) $v_A = XUI.Xml.GetText($v_B);
                var $v_C = null,
                    $v_D = XUI.Xml.SelectSingleNode($v_9,
                        "CustomizationXml/" + _oTags.attribute + "/" + _oTags.displayname,
                        null);
                if (!IsNull($v_D)) $v_C = XUI.Xml.GetText($v_D);
                if (!IsNull($v_A) && !IsNull($v_2[$v_A])) {
                    var $v_E = $v_2[$v_A], $v_F = Mscrm.AttributeMapPage.getSelectControlForGivenEntity($v_4, $v_E);
                    !IsNull($v_F) && this.$1I_0($v_F, $v_C, $v_A)
                } else
                    for (var $v_G = $v_4.getElementsByTagName("SELECT"), $v_H = $v_G.length, $v_I = 0;
                        $v_I < $v_H;
                        $v_I++) {
                        var $v_J = Mscrm.FormControlInputBehavior.GetElementBehavior($v_G[$v_I]);
                        if (IsNull($v_J) || Mscrm.AttributeMapPage.$q($v_J)) continue;
                        this.$1I_0($v_J, $v_C, $v_A)
                    }
            }
        }
    },
    $1I_0: function($p0, $p1, $p2) {
        if (!IsNull($p0) && !isNullOrEmptyString($p1) && !isNullOrEmptyString($p2)) {
            var $v_0 = $p0.get_dataValue();
            $v_0 !== $p2 && $p0.set_dataValue($p2);
            if ($p1 !== $p0.get_innerText()) {
                $p0.RemoveOption($p2);
                Mscrm.UIHelper.checkAndAddNewFieldsOptionGroupUI($p0);
                $p0.AddOption($p1, $p2, "newFieldsOptionGroup")
            }
            $p0.set_dataValue($v_0)
        }
    }
};
Mscrm.UIHelper = function() {};
Mscrm.UIHelper.updateMappingStatusUI = function(inputFileId) {
    var $v_0 = Mscrm.AttributeMapPage.pageState;
    if (!IsNull(inputFileId)) {
        var $v_4 = XUI.Xml.SelectNodes($v_0.currentEntityMap.$4_0,
                "AttributeMaps/AttributeMap[(ProcessCode='" +
                Mscrm.EnumConverterImportEntityProcessCode.toString(1) +
                "') and not(@Unused)]",
                null),
            $v_5 = XUI.Xml.SelectNodes($v_0.currentEntityMap.$4_0,
                "AttributeMaps/AttributeMap[(ProcessCode='" +
                Mscrm.EnumConverterImportEntityProcessCode.toString(2) +
                "' or ProcessCode='" +
                Mscrm.EnumConverterImportEntityProcessCode.toString(3) +
                "') and not(@Unused)]",
                null),
            $v_6 = XUI.Xml.SelectNodes($v_0.currentEntityMap.$4_0,
                "TransformationMaps/TransformationMap/InputParameterMaps/SingletonInputParameterMaps/SingletonInputParameterMap[DataTypeCode='Reference']/Data",
                null),
            $v_7 = window.isEntityFullyMapped[inputFileId],
            $v_8 = $get(inputFileId + "_image");
        if ($v_4.length > 0 || $v_5.length < 1 && $v_6.length < 1) {
            if ($v_7) {
                if ($v_0.currentEntityMap.$1_0 === 2) {
                    $v_8.src = "/_imgs/importwizard_yellowwarning.gif";
                    $v_8.alt = window.LOCID_IW_UNMAPPEDIMAGE_ALTTEXT
                } else {
                    $v_8.src = "/_imgs/importwizard_newentityalert.gif";
                    $v_8.alt = window.LOCID_IW_UNMAPPEDIMAGE_ALTTEXT
                }
                $v_8.title = $v_8.alt;
                window.unmappedEntityCount++;
                window.isEntityFullyMapped[$v_0.selectedListItem.id] = false
            }
        } else if (!$v_7) {
            if ($v_0.currentEntityMap.$1_0 === 2) {
                $v_8.src = "/_imgs/importwizard_greentick.gif";
                $v_8.alt = window.LOCID_IW_MAPPEDIMAGE_ALTTEXT
            } else {
                $v_8.src = "/_imgs/importwizard_newentitymapped.gif";
                $v_8.alt = window.LOCID_IW_MAPPEDIMAGE_ALTTEXT
            }
            $v_8.title = $v_8.alt;
            window.unmappedEntityCount--;
            window.isEntityFullyMapped[$v_0.selectedListItem.id] = true
        }
    }
    var $v_1 = $get("InfoBalloonImage"), $v_2 = $get("InfoBalloonText"), $v_3 = $get("InfoBalloon");
    if (!window.unmappedEntityCount) {
        $v_1.alt = window.LOCID_IW_TICKIMAGE_ALTTEXT;
        $v_1.title = $v_1.alt;
        $v_1.src = "/_imgs/importwizard_solidgreentick.gif";
        XUI.Html.SetText($v_2, window.LOCID_IW_INFO_COMPLETE);
        $v_3.className = "mscrm-iw-InfoBarGreen"
    } else {
        $v_1.alt = window.LOCID_IW_WARNINGIMAGE_ALTTEXT;
        $v_1.title = $v_1.alt;
        $v_1.src = "/_imgs/importwizard_yellowwarning.gif";
        XUI.Html.SetText($v_2, window.LOCID_IW_INFO_WARNING);
        $v_3.className = "mscrm-iw-InfoBarYellow"
    }
    WizardSetButtonEnabled(!$v_0.bDisableControls, _WizardButtonsEnum.NEXTBUTTON)
};
Mscrm.UIHelper.deSelectEntityUI = function(listElement) {
    if (!IsNull(listElement)) {
        listElement.style.backgroundColor = "";
        listElement.style.borderStyle = "none"
    }
};
Mscrm.UIHelper.selectEntityUI = function(listElement, pageState) {
    if (IsNull(listElement)) return;
    if (!IsNull(pageState.selectedListItem)) {
        pageState.selectedListItem.style.backgroundColor = "";
        pageState.selectedListItem.style.borderStyle = "none"
    }
    listElement.style.cursor = "default";
    listElement.style.backgroundColor = "#FFDC6D";
    listElement.style.borderTopWidth = "1px";
    listElement.style.borderBottomWidth = "1px"
};
Mscrm.UIHelper.$H = function($p0, $p1, $p2) {
    var $v_0 = $get($p0);
    if ($p1) $v_0.style.display = "inline";
    else {
        $v_0.style.display = "none";
        Mscrm.AttributeMapPage.popupState.currentPopupMode = -1;
        Mscrm.AttributeMapPage.popupState.currentRow = null
    }
    Mscrm.UIHelper.$1O($p1, $p2 ? $p2.get_element() : null)
};
Mscrm.UIHelper.$1O = function($p0, $p1) {
    for (var $v_0 = document.getElementsByTagName("SELECT"), $v_1 = $p0 && !IsNull($p1), $v_2 = 0;
        $v_2 < $v_0.length;
        $v_2++) {
        var $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_0[$v_2]);
        if (IsNull($v_3) || !IsNull($v_3.get_element().className.match(new RegExp("DisabledControl")))) continue;
        if ($v_1 && $v_3.get_element().id === $p1.id) continue;
        $v_3.set_disabled($p0);
        var $v_4 = XUI.Html.DomUtils.GetPrevSibling($v_3.get_element());
        if (!IsNull($v_4) && $v_4.tagName === "IMG") {
            var $v_5 = $v_4.src.endsWith("/_imgs/importwizard_newentity.gif") ||
                $v_4.src.endsWith("/_imgs/importwizard_fielddetails.gif") ||
                $v_4.src.endsWith("/_imgs/importwizard_picklist_detail.gif");
            if (!$p0 && $v_5) $v_4.style.cursor = "pointer";
            else $v_4.style.cursor = "default"
        }
    }
    $get("attributeType").disabled = false;
    Mscrm.AttributeMapPage.pageState.bDisableControls = $p0;
    WizardSetButtonEnabled(!$p0, _WizardButtonsEnum.BACKBUTTON);
    $p0 && WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON)
};
Mscrm.UIHelper.checkAndAddNewFieldsOptionGroupUI = function(selectControl) {
    if (IsNull(selectControl)) return;
    var $v_0 = selectControl.get_element().getElementsByTagName("OPTGROUP");
    if ($v_0.length === 2) {
        var $v_1 = document.createElement("OPTGROUP");
        selectControl.get_element().insertBefore($v_1, $v_0[1]);
        $v_1.setAttribute("label", window.LOCID_OPTGROUP_NEWATTRIBUTES);
        $v_1.id = "newFieldsOptionGroup";
        $v_1.setAttribute("Sort", "ascending")
    }
};
Mscrm.UIHelper.checkAndDeleteNewFieldsOptionGroupUI = function(selectControl) {
    if (IsNull(selectControl)) return;
    var $v_0 = selectControl.get_element().getElementsByTagName("OPTGROUP");
    if ($v_0.length === 3) {
        var $v_1 = $v_0[1];
        !$v_1.children.length && $v_1.parentNode.removeChild($v_1)
    }
};
Mscrm.UIHelper.getEntityDiv = function(inputFileId) { return $get(Mscrm.UIHelper.getEntityDivName(inputFileId)) };
Mscrm.UIHelper.getEntityDivName = function(inputFileId) { return inputFileId + "AttributeMapSection" };
Mscrm
    .CustomAttribute =
    function(attributeId, attributeType, attributesCustomizationNode, displayName, lookupEntityName) {
        this.$K_0 = lookupEntityName;
        this.$D_0 = true;
        if (IsNull(attributesCustomizationNode)) {
            if (isNullOrEmptyString(attributeType) || isNullOrEmptyString(displayName)) this.$D_0 = false
        } else {
            if (isNullOrEmptyString(attributeType)) {
                var $v_0 = "Attribute[@Id='" +
                        attributeId +
                        "']/CustomizationXml/" +
                        _oTags.attribute +
                        "/" +
                        _oTags.type +
                        "/" +
                        _oTags.name,
                    $v_1 = XUI.Xml.SelectNodes(attributesCustomizationNode, $v_0, null);
                if ($v_1.length) {
                    attributeType = XUI.Xml.GetText($v_1[0]);
                    if (attributeType === "lookup") {
                        var $v_2 = $v_1[0].parentNode;
                        this.$K_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, _oTags.entity, null))
                    }
                } else this.$D_0 = false
            }
            if (isNullOrEmptyString(displayName)) {
                var $v_3 = "Attribute[@Id='" + attributeId + "']/" + Mscrm.CustomAttribute.get_attribDisplayNameXPath(),
                    $v_4 = XUI.Xml.SelectNodes(attributesCustomizationNode, $v_3, null);
                if ($v_4.length) displayName = XUI.Xml.GetText($v_4[0]);
                else this.$D_0 = false
            }
        }
        this.$8_0 = attributeId;
        this.$M_0 = displayName;
        this.$R_0 = attributeType
    };
Mscrm.CustomAttribute.get_attribDisplayNameXPath = function() {
    return "CustomizationXml/" + _oTags.attribute + "/" + _oTags.displayname
};
Mscrm.CustomAttribute.getUniqueIdForCustomAttribute = function(seed, customizationNode) {
    if (Mscrm.CustomAttribute.$y(seed, customizationNode)) return seed;
    var $v_0 = 0;
    while (true) {
        if (Mscrm.CustomAttribute.$y(seed + $v_0.toString(), customizationNode)) return seed + $v_0.toString();
        $v_0++
    }
};
Mscrm.CustomAttribute.$y = function($p0, $p1) {
    if (IsNull($p1)) return true;
    var $v_0 = XUI.Xml.SelectNodes($p1, "Attribute[@Id='" + $p0 + "']", null);
    return !$v_0.length
};
Mscrm.CustomAttribute.isValidCustomAttribute = function(attribute) {
    return isInstanceOfTypeAcrossFrames(attribute, Mscrm.CustomAttribute)
};
Mscrm.CustomAttribute.prototype = {
    $D_0: false,
    $8_0: null,
    $M_0: null,
    $R_0: null,
    $K_0: null,
    get_isCustomAttribute: function() { return this.$D_0 },
    get_id: function() { return this.$8_0 },
    get_displayName: function() { return this.$M_0 },
    get_type: function() { return this.$R_0 },
    get_lookupEntityName: function() { return this.$K_0 },
    getCustomizationNode: function(xmlDocument) {
        var $v_0 = xmlDocument.createElement("CustomizationXml"),
            $v_1 = xmlDocument.createElement(_oTags.attribute),
            $v_2 = xmlDocument.createElement(_oTags.displayname);
        $v_2.appendChild(xmlDocument.createTextNode(this.$M_0));
        var $v_3 = xmlDocument.createElement(_oTags.type), $v_4 = xmlDocument.createElement(_oTags.name);
        $v_4.appendChild(xmlDocument.createTextNode(this.$R_0));
        $v_3.appendChild($v_4);
        if (!IsNull(this.$K_0)) {
            var $v_5 = xmlDocument.createElement(_oTags.entity);
            $v_5.appendChild(xmlDocument.createTextNode(this.$K_0));
            $v_3.appendChild($v_5)
        }
        $v_1.appendChild($v_3);
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        return $v_0
    }
};
Mscrm.LookupMap = function(lookupEntity, lookupAttribute, lookupType, processCode) {
    this.$O_0 = lookupType;
    this.$N_0 = lookupEntity;
    this.$J_0 = lookupAttribute;
    if (IsNull(processCode)) processCode = 2;
    this.$1_0 = processCode
};
Mscrm.LookupMap.prototype = {
    $O_0: null,
    $N_0: null,
    $J_0: null,
    $1_0: 0,
    get_lookupType: function() { return this.$O_0 },
    get_lookupEntity: function() { return this.$N_0 },
    get_lookupAttribute: function() { return this.$J_0 },
    get_processCode: function() { return this.$1_0 }
};
Mscrm.PicklistMap = function(sourceValue, targetValue, targetValueName, processCode) {
    this.$Q_0 = sourceValue;
    this.$a_0 = targetValue;
    this.$b_0 = targetValueName;
    if (IsNull(processCode)) this.$1_0 = this.$z_0(targetValue);
    else this.$1_0 = processCode
};
Mscrm.PicklistMap.prototype = {
    $Q_0: null,
    $a_0: null,
    $b_0: null,
    $1_0: 0,
    get_sourceValue: function() { return this.$Q_0 },
    get_targetValue: function() { return this.$a_0 },
    get_targetValueName: function() { return this.$b_0 },
    get_processCode: function() { return this.$1_0 },
    $z_0: function($p0) {
        if ($p0 === "3-Ignore") return 0;
        else if ($p0.startsWith("source_value_")) return 3;
        else return 2
    }
};
Mscrm.AttributeMap = function(sourceAttribute, targetAttribute, processCode, lookupMaps, picklistMaps) {
    this.$2_0 = sourceAttribute;
    this.$0_0 = targetAttribute;
    this.$1_0 = this.$z_0(sourceAttribute, targetAttribute, processCode);
    this.$E_0 = lookupMaps;
    this.$F_0 = picklistMaps
};
Mscrm.AttributeMap.prototype = {
    $2_0: null,
    $0_0: null,
    $1_0: 0,
    $E_0: null,
    $F_0: null,
    get_sourceAttribute: function() { return this.$2_0 },
    get_targetAttribute: function() { return this.$0_0 },
    get_processCode: function() { return this.$1_0 },
    get_lookupMaps: function() { return this.$E_0 },
    get_picklistMaps: function() { return this.$F_0 },
    $z_0: function($p0, $p1, $p2) {
        if (IsNull($p2))
            if (isNullOrEmptyString($p0) || $p0 === "1-Select") {
                $p2 = 1;
                this.$2_0 = ""
            } else if (isNullOrEmptyString($p1) || $p1 === "1-Select") {
                $p2 = 1;
                this.$0_0 = ""
            } else if ($p1 === "3-Ignore") {
                $p2 = 0;
                this.$0_0 = ""
            } else if ($p1 === "2-Create" || Mscrm.CustomAttribute.isValidCustomAttribute($p1) && !IsNull($p1.$M_0)) {
                if ($p1 === "2-Create") this.$0_0 = "";
                $p2 = 3
            } else $p2 = 2;
        return $p2
    },
    $1n_0: function($p0) { this.$F_0 = $p0 },
    $1m_0: function($p0) { this.$E_0 = $p0 },
    markAsUnmapped: function() { this.$1_0 = 1 }
};
Mscrm.EntityMap = function(mapXmlDoc, inputFileId) {
    this.$L_0 = null;
    var $v_0 = XUI.Xml.SelectNodes(mapXmlDoc, "//EntityMap[@InputFileId='" + inputFileId + "']", null);
    this.$4_0 = $v_0[0];
    this.$1_0 = 1;
    var $v_1 = this.$4_0.attributes.getNamedItem("ProcessCode");
    if (!IsNull($v_1)) this.$1_0 = Mscrm.EnumConverterImportEntityProcessCode.toEnum(XUI.Xml.GetText($v_1));
    this.$Z_0 = null;
    var $v_2 = this.$4_0.attributes.getNamedItem("TargetEntityRef");
    if (!IsNull($v_2)) this.$Z_0 = XUI.Xml.GetText($v_2);
    this.$9_0 = null;
    var $v_3 = this.$4_0.attributes.getNamedItem("TargetEntityName");
    if (!IsNull($v_3)) this.$9_0 = XUI.Xml.GetText($v_3);
    this.$P_0 = null;
    var $v_4 = this.$4_0.attributes.getNamedItem("SourceEntityName");
    if (!IsNull($v_4)) this.$P_0 = XUI.Xml.GetText($v_4);
    this.$S_0 = "Customizations/Entities/Entity";
    if (this.$1_0 === 3) this.$S_0 += "[@Id= '" + this.$Z_0 + "']";
    else this.$S_0 += "[LogicalName='" + this.$9_0 + "']";
    this.$L_0 = XUI.Xml.SelectSingleNode(XUI.Xml.DomUtils.GetFirstChild(mapXmlDoc), this.$S_0 + "/Attributes", null)
};
Mscrm.EntityMap.prototype = {
    $4_0: null,
    $1_0: 0,
    $L_0: null,
    $P_0: null,
    $Z_0: null,
    $9_0: null,
    $S_0: null,
    get_entityMapNode: function() { return this.$4_0 },
    get_processCode: function() { return this.$1_0 },
    get_targetEntityName: function() { return this.$9_0 },
    get_sourceEntityName: function() { return this.$P_0 },
    getAttributesCustomizationNode: function(bCreateNodeIfMissing) {
        if (IsNull(this.$L_0) && bCreateNodeIfMissing) {
            var $v_0 = this.$11_0(XUI.Xml.DomUtils.GetFirstChild(Mscrm.AttributeMapPage.pageState.mapXmlDoc),
                    "Customizations"),
                $v_1 = this.$11_0($v_0, "Entities"),
                $v_2;
            if (this.$1_0 === 3) $v_2 = this.$11_0($v_1, "Entity", this.$Z_0);
            else {
                $v_2 = XUI.Xml.SelectSingleNode($v_1, "Entity[LogicalName='" + this.$9_0 + "']", null);
                if (IsNull($v_2)) {
                    $v_2 = Mscrm.AttributeMapPage.pageState.$A_0($v_1, "Entity");
                    Mscrm.AttributeMapPage.pageState.$A_0($v_2, "LogicalName", this.$9_0)
                }
            }
            this.$L_0 = this.$11_0($v_2, "Attributes")
        }
        return this.$L_0
    },
    $11_0: function($p0, $p1, $p2) {
        var $v_0 = $p1;
        if (!IsNull($p2)) $v_0 += "[@Id='" + $p2 + "']";
        var $v_1 = null, $v_2 = XUI.Xml.SelectNodes($p0, $v_0, null);
        if (!$v_2.length) {
            $v_1 = Mscrm.AttributeMapPage.pageState.$A_0($p0, $p1);
            if (!IsNull($p2)) {
                var $v_3 = Mscrm.AttributeMapPage.pageState.mapXmlDoc.createAttribute("Id");
                $v_3.value = $p2;
                $v_1.attributes.setNamedItem($v_3)
            }
        } else $v_1 = $v_2[0];
        return $v_1
    },
    getReducedMapXmlForEntity: function() {
        var $v_0 =
                '<Map Name="Single Entity Map" Source="Import Wizard"><EntityMaps></EntityMaps><Customizations><Entities></Entities></Customizations></Map>',
            $v_1 = XUI.Xml.LoadXml($v_0),
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "Map/EntityMaps", null);
        $v_2.appendChild(this.$4_0.cloneNode(true));
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, "Map/Customizations/Entities", null),
            $v_4 = XUI.Xml.SelectSingleNode(XUI.Xml.DomUtils.GetFirstChild(Mscrm.AttributeMapPage.pageState.mapXmlDoc),
                this.$S_0,
                null);
        !IsNull($v_4) && !IsNull($v_3) && $v_3.appendChild($v_4.cloneNode(true));
        return XUI.Xml.XMLSerializer.serializeToString($v_1)
    },
    getLookupMappingFromMap: function(sourceAttribute) {
        var $v_0 = this.getAttributeNodeBySource(sourceAttribute),
            $v_1 = XUI.Xml.SelectNodes($v_0, "./LookupMaps/LookupMap", null);
        if (!$v_1) return null;
        for (var $v_2 = new Array($v_1.length), $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./LookupEntityName", null)),
                $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./LookupAttributeName", null)),
                $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./LookupType", null)),
                $v_7 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./ProcessCode", null)),
                $v_8 = new Mscrm.LookupMap($v_4, $v_5, $v_6, Mscrm.EnumConverterImportEntityProcessCode.toEnum($v_7));
            $v_2[$v_3] = $v_8
        }
        return $v_2
    },
    $13_0: function($p0) {
        var $v_0 = this.getAttributeNodeBySource($p0),
            $v_1 = XUI.Xml.SelectNodes($v_0, "./PicklistMaps/PicklistMap[not(@Unused)]", null);
        if (!$v_1) return null;
        for (var $v_2 = new Array($v_1.length), $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./SourceValue", null)),
                $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./TargetValue", null)),
                $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./TargetValueName", null)),
                $v_7 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1[$v_3], "./ProcessCode", null)),
                $v_8 = new Mscrm.PicklistMap($v_4, $v_5, $v_6, Mscrm.EnumConverterImportEntityProcessCode.toEnum($v_7));
            $v_2[$v_3] = $v_8
        }
        return $v_2
    },
    getAttributeMapForSource: function(sourceAttribute) {
        var $v_0 = this.getTargetAttributeFromMap(sourceAttribute);
        if (!$v_0) return new Mscrm.AttributeMap(sourceAttribute);
        var $v_1 = this.getAttributeNodeBySource(sourceAttribute),
            $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1, "./ProcessCode", null)),
            $v_3 = this.getLookupMappingFromMap(sourceAttribute),
            $v_4 = this.$13_0(sourceAttribute);
        return new Mscrm.AttributeMap(sourceAttribute,
            $v_0,
            Mscrm.EnumConverterImportEntityProcessCode.toEnum($v_2),
            $v_3,
            $v_4)
    },
    getAttributeMapForTarget: function(targetAttribute) {
        var $v_0 = this.getAttributeNodeByTarget(targetAttribute);
        if (!$v_0) return null;
        var $v_1 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "./ProcessCode", null)),
            $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "./SourceAttributeId", null)),
            $v_3 = this.getLookupMappingFromMap($v_2);
        return new Mscrm.AttributeMap($v_2,
            targetAttribute,
            Mscrm.EnumConverterImportEntityProcessCode.toEnum($v_1),
            $v_3)
    },
    getTargetAttributeFromMap: function(sourceAttribute) {
        var $v_0 = this.getAttributeNodeBySource(sourceAttribute);
        if (IsNull($v_0)) return null;
        var $v_1 = Mscrm.EnumConverterImportEntityProcessCode
                .toEnum(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "ProcessCode", null))),
            $v_2 = null;
        if ($v_1 === 3) {
            var $v_3 = XUI.Xml.SelectSingleNode($v_0, "TargetAttributeRef", null);
            if (!IsNull($v_3))
                $v_2 = new Mscrm.CustomAttribute(XUI.Xml.GetText($v_3), null, this.getAttributesCustomizationNode())
        } else if ($v_1 === 2) {
            var $v_4 = XUI.Xml.SelectSingleNode($v_0, "TargetAttributeName", null);
            if (!IsNull($v_4)) $v_2 = XUI.Xml.GetText($v_4)
        } else if (!$v_1) $v_2 = null;
        return $v_2
    },
    getSourceAttributeFromMap: function(attributeMapObject) {
        var $v_0 = this.getAttributeNodeByTarget(attributeMapObject.$0_0);
        if (IsNull($v_0)) return null;
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "SourceAttributeId", null);
        if (IsNull($v_1)) return null;
        return XUI.Xml.GetText($v_1)
    },
    getAttributeNodeBySource: function(sourceAttribute) {
        var $v_0 = XUI.Xml.SelectNodes(this.$4_0,
            "AttributeMaps/AttributeMap[SourceAttributeId='" + sourceAttribute + "']",
            null);
        if (!$v_0.length) return null;
        return $v_0[0]
    },
    getAttributeNodeByTarget: function(targetAttributeName) {
        var $v_0 = XUI.Xml.SelectNodes(this.$4_0,
            "AttributeMaps/AttributeMap[not(@Unused) and (TargetAttributeName='" + targetAttributeName + "')]",
            null);
        if (!$v_0.length) return null;
        return $v_0[0]
    },
    updateAttributeMap: function(attributeMapObject) {
        var $v_0, $v_1, $v_2, $v_3 = this.$4_0.ownerDocument;
        if (attributeMapObject.$2_0 === "") {
            if (attributeMapObject.$0_0 === "") return;
            $v_0 = this.getAttributeNodeByTarget(attributeMapObject.$0_0);
            if (!IsNull($v_0)) {
                $v_1 = XUI.Xml.SelectSingleNode($v_0, "TargetAttributeName", null);
                if (!IsNull($v_1)) {
                    $v_1.hasChildNodes() && $v_1.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_1));
                    $v_1.appendChild($v_3.createTextNode(""))
                }
                $v_2 = XUI.Xml.SelectSingleNode($v_0, "ProcessCode", null);
                if (!IsNull($v_2)) {
                    $v_2.hasChildNodes() && $v_2.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_2));
                    $v_2.appendChild($v_3.createTextNode(Mscrm.EnumConverterImportEntityProcessCode
                        .toString(attributeMapObject.$1_0)))
                }
                return
            }
        }
        if (attributeMapObject.$1_0 === 3) {
            var $v_8 = Mscrm.CustomAttribute.isValidCustomAttribute(attributeMapObject.$0_0);
            if (!$v_8) return
        }
        if (isNullOrEmptyString(attributeMapObject.$2_0)) return;
        $v_0 = this.getAttributeNodeBySource(attributeMapObject.$2_0);
        var $v_4, $v_5;
        if (attributeMapObject.$1_0 === 3) {
            var $v_9 = attributeMapObject.$0_0;
            this.$1J_0($v_9.$8_0,
                $v_9.getCustomizationNode(Mscrm.AttributeMapPage.pageState.mapXmlDoc),
                this.getAttributesCustomizationNode(true));
            $v_4 = $v_9.$8_0;
            $v_5 = ""
        } else {
            $v_4 = "";
            $v_5 = attributeMapObject.$0_0
        }
        var $v_6 = XUI.Xml.SelectNodes($v_0, "TargetAttributeRef", null), $v_7;
        if (!$v_6.length && !isNullOrEmptyString($v_4)) {
            $v_7 = Mscrm.AttributeMapPage.pageState.mapXmlDoc.createElement("TargetAttributeRef");
            $v_0.appendChild($v_7)
        } else $v_7 = $v_6[0];
        if (isNullOrEmptyString($v_4)) !IsNull($v_7) && $v_7.parentNode.removeChild($v_7);
        else {
            $v_7.hasChildNodes() && $v_7.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_7));
            $v_7.appendChild($v_3.createTextNode($v_4))
        }
        $v_1 = XUI.Xml.SelectSingleNode($v_0, "TargetAttributeName", null);
        $v_1.hasChildNodes() &&
            !IsNull(XUI.Xml.DomUtils.GetFirstChild($v_1)) &&
            $v_1.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_1));
        $v_1.appendChild($v_3.createTextNode($v_5));
        $v_2 = XUI.Xml.SelectSingleNode($v_0, "ProcessCode", null);
        $v_2.hasChildNodes() && $v_2.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_2));
        $v_2.appendChild($v_3.createTextNode(Mscrm.EnumConverterImportEntityProcessCode
            .toString(attributeMapObject.$1_0)));
        this.updateLookupInAttributeMap(attributeMapObject.$E_0, $v_0);
        this.$1p_0(attributeMapObject.$F_0, $v_0)
    },
    updateLookupInAttributeMap: function(lookupMaps, attributeNodeToUpdate) {
        var $v_0 = XUI.Xml.SelectSingleNode(attributeNodeToUpdate, "./LookupMaps", null);
        $v_0 && attributeNodeToUpdate.removeChild($v_0);
        if (lookupMaps && lookupMaps.length > 0) {
            $v_0 = Mscrm.AttributeMapPage.pageState.$A_0(attributeNodeToUpdate, "LookupMaps");
            for (var $v_1 = 0; $v_1 < lookupMaps.length; $v_1++) {
                if (IsNull(lookupMaps[$v_1])) continue;
                var $v_2 = Mscrm.AttributeMapPage.pageState.$A_0($v_0, "LookupMap");
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "LookupEntityName", lookupMaps[$v_1].$N_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "LookupAttributeName", lookupMaps[$v_1].$J_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "LookupType", lookupMaps[$v_1].$O_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2,
                    "ProcessCode",
                    Mscrm.EnumConverterImportEntityProcessCode.toString(lookupMaps[$v_1].$1_0))
            }
        }
    },
    $1p_0: function($p0, $p1) {
        var $v_0 = XUI.Xml.SelectSingleNode($p1, "./PicklistMaps", null);
        $v_0 && $p1.removeChild($v_0);
        if ($p0 && $p0.length > 0) {
            $v_0 = Mscrm.AttributeMapPage.pageState.$A_0($p1, "PicklistMaps");
            for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
                if (IsNull($p0[$v_1])) continue;
                var $v_2 = Mscrm.AttributeMapPage.pageState.$A_0($v_0, "PicklistMap");
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "SourceValue", $p0[$v_1].$Q_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "TargetValue", $p0[$v_1].$a_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2, "TargetValueName", $p0[$v_1].$b_0);
                Mscrm.AttributeMapPage.pageState.$A_0($v_2,
                    "ProcessCode",
                    Mscrm.EnumConverterImportEntityProcessCode.toString($p0[$v_1].$1_0))
            }
        }
    },
    $1J_0: function($p0, $p1, $p2) {
        var $v_0 = this.$11_0($p2, "Attribute", $p0), $v_1 = XUI.Xml.SelectNodes($v_0, "CustomizationXml", null);
        $v_1.length && $v_1[0].parentNode.removeChild($v_1[0]);
        $v_0.appendChild($p1)
    }
};
Mscrm.PicklistMapEditor = function() { Mscrm.PicklistMapEditor.initializeBase(this) };
Mscrm.PicklistMapEditor.$k = function($p0, $p1, $p2, $p3) {
    var $v_0 = new RemoteCommand("ImportWebService", "GetPicklistMappingDetails");
    $v_0.SetParameter("importId", WizardGetProperty("ImportId"));
    $v_0.SetParameter("targetEntityName", $p2);
    $v_0.SetParameter("targetAttributeName", $p3);
    $v_0.SetParameter("sourceEntityName", $p0);
    $v_0.SetParameter("sourceFieldName", $p1);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) {
        var $v_2 = $v_1.ReturnValue;
        if (isNullOrEmptyString($v_2)) return 2;
        var $v_3 = XUI.Xml.LoadXml($v_2);
        if (XUI.Xml.SelectSingleNode($v_3, "/Output/Error", null)) return 1;
        if (!isNullOrEmptyString($p0) && !isNullOrEmptyString($p1)) {
            var $v_4 = XUI.Xml.SelectNodes($v_3, "/Output/SourceValues/SourceValue", null),
                $v_5 = Mscrm.PicklistMapEditor.$h($v_4, false);
            Mscrm.PicklistMapEditor.$G[Mscrm.PicklistMapEditor.$B($p0, $p1)] = $v_5
        }
        if (!isNullOrEmptyString($p2) && !isNullOrEmptyString($p3)) {
            var $v_6 = XUI.Xml.SelectNodes($v_3, "/Output/PickListValues/PickListValue", null),
                $v_7 = Mscrm.PicklistMapEditor.$h($v_6, false);
            Mscrm.PicklistMapEditor.$Y[Mscrm.PicklistMapEditor.$B($p2, $p3)] = $v_7;
            var $v_8 = XUI.Xml.SelectNodes($v_3, "/Output/DuplicatePickListValues/DuplicatePickListValue", null),
                $v_9 = Mscrm.PicklistMapEditor.$h($v_8, true);
            Mscrm.PicklistMapEditor.$V[Mscrm.PicklistMapEditor.$B($p2, $p3)] = $v_9;
            var $v_A = XUI.Xml.SelectNodes($v_3, "/Output/UniquePickListValues/UniquePickListValue", null),
                $v_B = Mscrm.PicklistMapEditor.$h($v_A, true);
            Mscrm.PicklistMapEditor.$c[Mscrm.PicklistMapEditor.$B($p2, $p3)] = $v_B
        }
    } else return 2;
    return 0
};
Mscrm.PicklistMapEditor.$h = function($p0, $p1) {
    for (var $v_0 = {}, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1], $v_3 = $v_2.attributes.getNamedItem("value"), $v_4 = "0";
        if (!IsNull($v_3)) $v_4 = XUI.Xml.GetText($v_3);
        if ($p1) $v_0[XUI.Xml.GetText($v_2).toLowerCase()] = $v_4;
        else $v_0[XUI.Xml.GetText($v_2)] = $v_4
    }
    return $v_0
};
Mscrm.PicklistMapEditor.$o = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = $get("picklistErrorRow");
    $v_0.style.display = "none";
    var $v_1 = $get("newAttributeErrorRow");
    $v_1.style.display = "none";
    var $v_2 = $get($p4);
    $v_2.style.display = "block";
    for (var $v_3 = $v_2.rows.length, $v_7 = $v_3 - 1; $v_7 > 0; $v_7--) $v_2.deleteRow($v_7);
    var $v_4 = Mscrm.PicklistMapEditor.$1X($p0, $p1, $p5, $p6),
        $v_5 = Mscrm.PicklistMapEditor.$1c($p0, $p1, $p2, $p3, $v_4, $p5, $p6),
        $v_6 = 0,
        $$dict_R = $p0;
    for (var $$key_S in $$dict_R) {
        var $v_8 = { key: $$key_S, value: $$dict_R[$$key_S] }, $v_9 = $v_8.key;
        $v_3 = $v_2.rows.length;
        var $v_A = $v_2.insertRow($v_3), $v_B = "picklistDivPicklistValues_" + $v_6, $v_C = $v_A.insertCell(0);
        if (!$v_9 || $v_9 === "")
            $v_C.innerHTML = '<span id="picklistSourceValues_' +
                $v_6 +
                '" title="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_IW_PICKLIST_EMPTY_SRC) +
                '" empty="true" class="mscrm-iw-PopupDivElement"><label for="' +
                $v_B +
                '"><nobr>' +
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_IW_PICKLIST_EMPTY_SRC) +
                "</nobr></label></span>";
        else
            $v_C.innerHTML = '<span id="picklistSourceValues_' +
                $v_6 +
                '" title="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_9) +
                '" class="mscrm-iw-PopupDivElement"><label for="' +
                $v_B +
                '"><nobr>' +
                CrmEncodeDecode.CrmHtmlEncode($v_9) +
                "</nobr></label></span>";
        var $v_D = $v_A.insertCell(1);
        $v_D.innerHTML = '<span class="mscrm-iw-PopupDivElement">' +
            $v_4.outerHTML.replace("picklistDivPicklistValues_Template", "picklistDivPicklistValues_" + $v_6) +
            "</span>";
        var $v_E = $get($v_B);
        if ($v_5[$v_9]) {
            var $v_F = $v_5[$v_9];
            if ($v_F === "source_value_create_internal")
                for (var $v_G = 0; $v_G < $v_E.options.length; $v_G++) {
                    var $v_H = $v_E.options[$v_G];
                    if ($v_H.text === $v_9) {
                        $v_H.selected = true;
                        break
                    }
                }
            else
                for (var $v_I = 0; $v_I < $v_E.options.length; $v_I++) {
                    var $v_J = $v_E.options[$v_I];
                    if ($v_J.value === $v_5[$v_9]) {
                        $v_J.selected = true;
                        break
                    }
                }
        }
        $v_6++
    }
};
Mscrm.PicklistMapEditor.$1X = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Select(true, true);
    $v_0.ID = "picklistDivPicklistValues_Template";
    $v_0.AddAttribute("class", "ms-crm-SelectBox");
    $v_0.Disabled = false;
    var $v_1 = new OptionGroup(window.LOCID_IW_PICKLIST_ACTIONS, true, true, true);
    $v_1.ID = "actionsGroup";
    $v_0.AddOptionGroup($v_1);
    $p3 && $v_1.AddOption(window.LOCID_IW_PICKLIST_IGNORE, "3-Ignore");
    $v_1.AddOption(window.LOCID_IW_PICKLIST_SELECT, "1-Select");
    $v_0.AddAttribute("onchange", "Mscrm.PicklistMapEditor.setOKButtonState();");
    if (!IsNull($p1)) {
        var $v_2 = new OptionGroup(window.LOCID_IW_PICKLIST_CRM_VALS, true, true, true);
        $v_2.ID = "crmPicklistValuesGroup";
        $v_0.AddOptionGroup($v_2);
        var $$dict_8 = $p1;
        for (var $$key_9 in $$dict_8) {
            var $v_3 = { key: $$key_9, value: $$dict_8[$$key_9] };
            $v_2.AddOption($v_3.key, $v_3.value)
        }
    }
    if (!IsNull($p0) && $p2) {
        var $v_4 = new OptionGroup(window.LOCID_IW_PICKLIST_SOURCE_VALS, true, true, true);
        $v_4.ID = "sourceValuesGroup";
        var $v_5 = false, $v_6 = 0, $$dict_G = $p0;
        for (var $$key_H in $$dict_G) {
            var $v_7 = { key: $$key_H, value: $$dict_G[$$key_H] }, $v_8 = $v_7.key;
            if (IsNull($p1) || IsNull($p1[$v_8])) {
                if (!$v_5) {
                    $v_0.AddOptionGroup($v_4);
                    $v_5 = true
                }
                var $v_9 = "source_value_" + $v_6;
                $v_6++;
                !isNullOrEmptyString($v_8) && $v_4.AddOption($v_8, $v_9)
            }
        }
    }
    $v_0.Render();
    return $v_0
};
Mscrm.PicklistMapEditor.$1c = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = {}, $$dict_C = $p0;
    for (var $$key_D in $$dict_C) {
        var $v_1 = { key: $$key_D, value: $$dict_C[$$key_D] }, $v_2 = $v_1.key, $v_3, $v_4 = $v_2.toLowerCase();
        if (isNullOrEmptyString($v_2)) $v_3 = $p6 ? "3-Ignore" : "1-Select";
        else if (!IsNull($p2) && !IsNull($p2[$v_4])) $v_3 = $p2[$v_4];
        else if (!IsNull($p3) && !IsNull($p3[$v_4])) $v_3 = "1-Select";
        else $v_3 = $p5 ? "source_value_create_internal" : "1-Select";
        $v_0[$v_2] = $v_3
    }
    return $v_0
};
Mscrm.PicklistMapEditor.$l = function($p0, $p1) {
    $get($p0).style.display = "none";
    var $v_0 = "", $v_1 = "", $v_2 = "";
    if (!Mscrm.AttributeMapPage.popupState.currentPopupMode) {
        $v_0 = "newAttributeErrorRow";
        $v_1 = "newAttributeErrorMessage";
        $v_2 = "buttonCreateOK"
    } else if (Mscrm.AttributeMapPage.popupState.currentPopupMode === 2) {
        $v_0 = "picklistErrorRow";
        $v_1 = "picklistErrorMessage";
        $v_2 = "buttonPicklistDivOK"
    }
    var $v_3 = $get($v_2);
    $v_3.disabled = true;
    var $v_4 = $get($v_0);
    $v_4.style.display = "block";
    var $v_5 = $get($v_1);
    if ($p1 === 1) XUI.Html.SetText($v_5, window.LOCID_IW_PICKLIST_ERR_LARGE_VAL);
    else XUI.Html.SetText($v_5, window.LOCID_IW_ERR_FETCH)
};
Mscrm.PicklistMapEditor.$B = function($p0, $p1) { return $p0 + "_" + $p1 };
Mscrm.PicklistMapEditor.$1L = function($p0, $p1, $p2, $p3) {
    var $v_0 = Mscrm.PicklistMapEditor.$G[Mscrm.PicklistMapEditor.$B($p0, $p1)];
    if (IsNull($v_0)) {
        var $v_1 = Mscrm.PicklistMapEditor.$k($p0, $p1, null, null);
        if ($v_1) {
            Mscrm.PicklistMapEditor.$l($p3, $v_1);
            return
        }
        $v_0 = Mscrm.PicklistMapEditor.$G[Mscrm.PicklistMapEditor.$B($p0, $p1)]
    }
    if (IsNull($v_0));
    if ($p2 === "picklist") Mscrm.PicklistMapEditor.$o($v_0, null, null, null, $p3, true, true);
    else {
        var $v_2 = {};
        $v_2[window.LOCID_IW_PICKLIST_BIT_YES] = "1";
        $v_2[window.LOCID_IW_PICKLIST_BIT_NO] = "0";
        var $v_3 = {};
        $v_3[window.LOCID_IW_PICKLIST_BIT_YES.toLowerCase()] = "1";
        $v_3[window.LOCID_IW_PICKLIST_BIT_NO.toLowerCase()] = "0";
        Mscrm.PicklistMapEditor.$o($v_0, $v_2, $v_3, null, $p3, false, true)
    }
};
Mscrm.PicklistMapEditor.$i = function($p0) {
    for (var $v_0 = $get($p0), $v_1 = $v_0.rows.length, $v_2 = $v_1 - 1; $v_2 > 0; $v_2--) $v_0.deleteRow($v_2)
};
Mscrm.PicklistMapEditor.$1F = function($p0, $p1) {
    for (var $v_0 = $get($p0), $v_1 = $v_0.rows.length, $v_2 = 0; $v_2 < $v_1 - 1; $v_2++) {
        var $v_3 = $get("picklistSourceValues_" + $v_2);
        if (IsNull($v_3)) continue;
        var $v_4 = $get("picklistDivPicklistValues_" + $v_2);
        if ($p1)
            for (var $v_5 = 0; $v_5 < $p1.length; $v_5++) {
                var $v_6 = $p1[$v_5], $v_7 = $v_6.$1_0;
                if ($v_6.$Q_0 === "" && !IsNull($v_3.attributes.getNamedItem("empty")) ||
                    $v_6.$Q_0.toLowerCase() === XUI.Html.GetText($v_3).toLowerCase())
                    if ($v_7 === 3) {
                        for (var $v_8 = 0; $v_8 < $v_4.options.length; $v_8++) {
                            var $v_9 = $v_4.options[$v_8];
                            if ($v_9.text === $v_6.$b_0) {
                                $v_9.selected = true;
                                break
                            }
                        }
                        break
                    } else if ($v_7 === 2) {
                        for (var $v_A = 0; $v_A < $v_4.options.length; $v_A++) {
                            var $v_B = $v_4.options[$v_A];
                            if ($v_B.value === $v_6.$a_0) {
                                $v_B.selected = true;
                                break
                            }
                        }
                        break
                    } else if (!$v_7) {
                        for (var $v_C = 0; $v_C < $v_4.options.length; $v_C++) {
                            var $v_D = $v_4.options[$v_C];
                            if ($v_D.value === "3-Ignore") {
                                $v_D.selected = true;
                                break
                            }
                        }
                        break
                    }
            }
    }
};
Mscrm.PicklistMapEditor.$14 = function($p0) {
    for (var $v_0 = $get($p0), $v_1 = $v_0.rows.length, $v_2 = new Array(0), $v_3 = 0, $v_4 = 0;
        $v_4 < $v_1 - 1;
        $v_4++) {
        var $v_5 = $get("picklistSourceValues_" + $v_4);
        if (IsNull($v_5)) continue;
        var $v_6 = $get("picklistDivPicklistValues_" + $v_4);
        if (XUI.Html.GetText($v_5) === window.LOCID_IW_PICKLIST_EMPTY_SRC &&
            !IsNull($v_5.attributes
                .getNamedItem("empty")))
            $v_2[$v_3] = new Mscrm.PicklistMap("", $v_6.value, XUI.Html.GetText($v_6.options[$v_6.selectedIndex]));
        else
            $v_2[$v_3] = new Mscrm.PicklistMap(XUI.Html.GetText($v_5),
                $v_6.value,
                XUI.Html.GetText($v_6.options[$v_6.selectedIndex]));
        $v_3++
    }
    return $v_2
};
Mscrm.PicklistMapEditor.setOKButtonState = function() {
    if (!Mscrm.AttributeMapPage.popupState.currentPopupMode) {
        var $v_0 = $get("buttonCreateOK"), $v_1 = $get("newAttributeErrorRow");
        if ($v_1.style.display === "block") $v_0.disabled = true;
        else $v_0.disabled = !Mscrm.PicklistMapEditor.$x("newDivPicklistSourceFieldList")
    } else if (Mscrm.AttributeMapPage.popupState.currentPopupMode === 2) {
        var $v_2 = $get("buttonPicklistDivOK"), $v_3 = $get("picklistErrorRow");
        if ($v_3.style.display === "block") $v_2.disabled = true;
        else $v_2.disabled = !Mscrm.PicklistMapEditor.$x("picklistDivSourceFieldList")
    }
};
Mscrm.PicklistMapEditor.$x = function($p0) {
    for (var $v_0 = $get($p0), $v_1 = $v_0.rows.length, $v_2 = 0; $v_2 < $v_1 - 1; $v_2++) {
        var $v_3 = $get("picklistDivPicklistValues_" + $v_2);
        if (!IsNull($v_3) && $v_3.value === "1-Select") return false
    }
    return true
};
Mscrm.PicklistMapEditor.prototype = {
    get__divId: function() { return "picklistMappingDiv" },
    $1M_1: function($p0) {
        for (var $v_0 = "/Map/EntityMaps/EntityMap[not(@Unused)]/AttributeMaps/AttributeMap[not(@Unused)]/PicklistMaps",
            $v_1 = XUI.Xml.SelectNodes($p0, $v_0, null),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            for (var $v_3 = $v_1[$v_2],
                $v_4 = $v_3.parentNode,
                $v_5 = $v_4.parentNode.parentNode,
                $v_6 = false,
                $v_7 = {},
                $v_8 = XUI.Xml.GetText($v_5.attributes.getNamedItem("SourceEntityName")),
                $v_9 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "SourceAttributeName", null)),
                $v_A = 0;
                $v_A < $v_3.childNodes.length;
                $v_A++) {
                var $v_B = $v_3.childNodes[$v_A], $v_C = $v_B.attributes.getNamedItem("Unused");
                if ($v_C) continue;
                var $v_D = XUI.Xml.SelectSingleNode($v_B, "SourceValue", null);
                if (!$v_D) continue;
                $v_7[XUI.Xml.GetText($v_D)] = "0";
                $v_6 = true
            }
            if ($v_6) {
                var $v_E = Mscrm.PicklistMapEditor.$B($v_8, $v_9);
                Mscrm.PicklistMapEditor.$G[$v_E] = $v_7
            }
        }
    },
    $1R_1: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = Mscrm.PicklistMapEditor.$B($p0, $p1),
            $v_1 = Mscrm.PicklistMapEditor.$B($p2, $p3),
            $v_2 = Mscrm.PicklistMapEditor.$G[$v_0],
            $v_3 = Mscrm.PicklistMapEditor.$Y[$v_1],
            $v_4 = Mscrm.PicklistMapEditor.$c[$v_1],
            $v_5 = Mscrm.PicklistMapEditor.$V[$v_1];
        if (IsNull($v_2) && (IsNull($v_3) || IsNull($v_4) || IsNull($v_5))) {
            var $v_7 = Mscrm.PicklistMapEditor.$k($p0, $p1, $p2, $p3);
            if ($v_7) {
                Mscrm.PicklistMapEditor.$l("picklistDivSourceFieldList", $v_7);
                return
            }
            $v_2 = Mscrm.PicklistMapEditor.$G[$v_0];
            $v_3 = Mscrm.PicklistMapEditor.$Y[$v_1];
            $v_4 = Mscrm.PicklistMapEditor.$c[$v_1];
            $v_5 = Mscrm.PicklistMapEditor.$V[$v_1]
        } else if (IsNull($v_2)) {
            var $v_8 = Mscrm.PicklistMapEditor.$k($p0, $p1, null, null);
            if ($v_8) {
                Mscrm.PicklistMapEditor.$l("picklistDivSourceFieldList", $v_8);
                return
            }
            $v_2 = Mscrm.PicklistMapEditor.$G[$v_0]
        } else if (IsNull($v_3) || IsNull($v_4) || IsNull($v_5)) {
            var $v_9 = Mscrm.PicklistMapEditor.$k(null, null, $p2, $p3);
            if ($v_9) {
                Mscrm.PicklistMapEditor.$l("picklistDivSourceFieldList", $v_9);
                return
            }
            $v_3 = Mscrm.PicklistMapEditor.$Y[$v_1];
            $v_4 = Mscrm.PicklistMapEditor.$c[$v_1];
            $v_5 = Mscrm.PicklistMapEditor.$V[$v_1]
        }
        if (IsNull($v_2)) return;
        Mscrm.PicklistMapEditor.$o($v_2, $v_3, $v_4, $v_5, "picklistDivSourceFieldList", $p4, $p5);
        var $v_6 = Mscrm.AttributeMapPage.pageState.currentEntityMap.$13_0(this._currentAttributeMap.$2_0);
        Mscrm.PicklistMapEditor.$1F("picklistDivSourceFieldList", $v_6);
        return
    },
    $s_0: function() {
        Mscrm.PopupEditor.prototype.$s_0.call(this);
        Mscrm.PicklistMapEditor.$i("picklistDivSourceFieldList");
        var $v_0 = $get("closePicklistDivLink");
        $removeHandler($v_0, "keypress", Mscrm.AttributeMapPage.$7.$$d_$1a_0)
    },
    $19_0: function() {
        var $v_0 = Mscrm.PicklistMapEditor.$14("picklistDivSourceFieldList");
        this._currentAttributeMap.$1n_0($v_0);
        Mscrm.PopupEditor.prototype.$19_0.call(this);
        Mscrm.PicklistMapEditor.$i("picklistDivSourceFieldList");
        var $v_1 = $get("closePicklistDivLink");
        $removeHandler($v_1, "keypress", Mscrm.AttributeMapPage.$7.$$d_$1a_0)
    }
};
Mscrm.PopupEditor = function() { this.$$d_$1a_0 = Function.createDelegate(this, this.$1a_0) };
Mscrm.PopupEditor.prototype = {
    _currentAttributeMap: null,
    $1E_0: function($p0) { this._currentAttributeMap = $p0 },
    $1a_0: function($p0) { Mscrm.Utilities.getDomEventKeyCode($p0) === 13 && this.$s_0() },
    $19_0: function() {
        var $v_0 = null, $v_1 = Mscrm.AttributeMapPage.$T(this._currentAttributeMap.$0_0);
        if ($v_1) {
            var $v_2 = new Mscrm.AttributeMap(Mscrm.AttributeMapPage.pageState.currentEntityMap
                .getSourceAttributeFromMap(this._currentAttributeMap),
                this._currentAttributeMap.$0_0);
            Mscrm.AttributeMapPage.$16(this._currentAttributeMap, $v_2);
            $v_0 = Mscrm.AttributeMapPage.$3(this._currentAttributeMap.$0_0)
        } else {
            var $v_3 = Mscrm.AttributeMapPage.pageState.currentEntityMap
                .getAttributeMapForSource(this._currentAttributeMap.$2_0);
            $v_0 = Mscrm.AttributeMapPage.$3(this._currentAttributeMap.$2_0);
            Mscrm.AttributeMapPage.$U(this._currentAttributeMap);
            Mscrm.AttributeMapPage.$g(this._currentAttributeMap, $v_3);
            Mscrm.AttributeMapPage.$f(this._currentAttributeMap);
            Mscrm.AttributeMapPage.pageState.currentEntityMap.updateAttributeMap(this._currentAttributeMap)
        }
        Mscrm.AttributeMapPage.pageState.hasMapChanged = true;
        Mscrm.UIHelper.$H(this.get__divId(), false, null);
        Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
        $v_0.get_element().focus()
    },
    $s_0: function() {
        var $v_0 = Mscrm.AttributeMapPage.$T(this._currentAttributeMap.$0_0), $v_1;
        if ($v_0) {
            var $v_2 = new Mscrm.AttributeMap(Mscrm.AttributeMapPage.pageState.currentEntityMap
                    .getSourceAttributeFromMap(this._currentAttributeMap),
                    this._currentAttributeMap.$0_0),
                $v_3 = $v_2.$1_0,
                $v_4 = Mscrm.AttributeMapPage.$p($v_3, $v_2, true);
            $v_1 = Mscrm.AttributeMapPage.$3($v_2.$0_0);
            $v_1.set_dataValue($v_4)
        } else {
            var $v_5 = Mscrm.AttributeMapPage.pageState.currentEntityMap
                    .getAttributeMapForSource(this._currentAttributeMap.$2_0),
                $v_6 = $v_5.$1_0,
                $v_7 = Mscrm.AttributeMapPage.$p($v_6, $v_5, false);
            $v_1 = Mscrm.AttributeMapPage.$3(this._currentAttributeMap.$2_0);
            $v_1.set_dataValue($v_7)
        }
        Mscrm.UIHelper.$H(this.get__divId(), false, null);
        Mscrm.UIHelper.updateMappingStatusUI(Mscrm.AttributeMapPage.pageState.selectedListItem.id);
        $v_1.get_element().focus()
    }
};
Mscrm.LookupMapEditor = function() { Mscrm.LookupMapEditor.initializeBase(this) };
Mscrm.LookupMapEditor.$$cctor = function() { Mscrm.LookupMapEditor.$6 = new Array(0) };
Mscrm.LookupMapEditor.$1j = function($p0) { Mscrm.LookupMapEditor.$t() };
Mscrm.LookupMapEditor.$1Q = function($p0, $p1, $p2, $p3, $p4, $p5) {
    for (var $v_0 = $get("lookupDivEntityAttributeList"), $v_1 = $v_0.rows.length, $v_5 = $v_1 - 1;
        $v_5 > 0;
        $v_5--
    ) $v_0.deleteRow($v_5);
    if ($p5) {
        var $v_6 = Mscrm.AttributeMapPage.pageState.mapXmlDoc,
            $v_7 = XUI.Xml.SelectSingleNode($v_6,
                "/Map/UserIdentifier/SourceUserIdentifierForSourceDataSourceUserLink[not(@Invalid)]",
                null);
        if (!IsNull($v_7)) {
            Mscrm.LookupMapEditor.$12($v_0);
            Mscrm.LookupMapEditor.$j = false;
            return 0
        }
    }
    var $v_2 = Mscrm.AttributeMapPage.pageState.currentEntityMap.getLookupMappingFromMap($p1);
    if (!IsNull($v_2)) {
        for (var $v_8 = true, $v_9 = 0; $v_9 < $v_2.length; $v_9++)
            if ($v_2[$v_9].$O_0 === "System") {
                $v_8 = false;
                break
            }
        if ($p3 && $v_2.length > 0 && $v_8) {
            Mscrm.LookupMapEditor.$12($v_0);
            Mscrm.LookupMapEditor.$j = true;
            return 0
        }
    }
    $v_0.rows[0].style.display = "inline";
    var $v_3 = new RemoteCommand("ImportWebService", "GetReferredEntityListForLookupAttribute");
    $v_3.SetParameter("entityName", $p0);
    $v_3.SetParameter("attributeName", $p2);
    $v_3.SetParameter("isNewEntity", $p4);
    var $v_4 = $v_3.Execute();
    if ($v_4.Success) {
        var $v_A = $v_4.ReturnValue;
        if (isNullOrEmptyString($v_A));
        var $v_B = XUI.Xml.LoadXml($v_A), $v_C = XUI.Xml.SelectNodes($v_B, "entities/entity", null);
        if ($v_C) {
            for (var $v_D = 0; $v_D < $v_C.length; $v_D++) {
                var $v_E = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_C[$v_D], "displayname", null)),
                    $v_F = XUI.Xml.GetText($v_C[$v_D].attributes.getNamedItem("name"));
                $v_1 = $v_0.rows.length;
                var $v_G = $v_0.insertRow($v_1), $v_H = $v_G.insertCell(0), $v_I = document.createElement("span");
                $v_I.className = "mscrm-iw-PopupDivElement";
                $v_I.style.width = "85%";
                var $v_J = "lookupDivEntityUsed" + $v_D,
                    $v_K = '<input type="checkbox" id="' +
                        $v_J +
                        '" class="ms-crm-CheckBox" onclick="Mscrm.AttributeMapPage.lookupDivEntityCheckBoxClicked(' +
                        $v_D +
                        ');" />&nbsp;<input type="hidden" id="lookupDivEntity' +
                        $v_D +
                        '" value="' +
                        $v_F +
                        '"/><label for="' +
                        $v_J +
                        '" style="white-space: nowrap"><nobr title="' +
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_E) +
                        '">' +
                        CrmEncodeDecode.CrmHtmlEncode($v_E) +
                        "</nobr></label>";
                $v_I.innerHTML = $v_K;
                $v_H.appendChild($v_I);
                $create(Mscrm.FormInputControl.CheckBoxInputBehavior, null, null, null, $get($v_J));
                var $v_L = $v_G.insertCell(1), $v_M = document.createElement("span");
                $v_M.className = "mscrm-iw-PopupDivElement";
                $v_M.style.width = "100%";
                $v_L.appendChild($v_M);
                Mscrm.LookupMapEditor.$6[$v_D] = Mscrm.AttributeMapPage.$10($v_M);
                Mscrm.LookupMapEditor.$6[$v_D].set_okCallback(Mscrm.LookupMapEditor.$1j);
                Mscrm.LookupMapEditor.$r(Mscrm.LookupMapEditor.$6[$v_D], $v_C[$v_D], $v_F, $v_2);
                var $v_N = XUI.Xml.GetText($v_C[$v_D].attributes.getNamedItem("name")),
                    $v_O = $get("lookupDivEntityUsed" + $v_D);
                $v_O.checked = false;
                Mscrm.LookupMapEditor.$6[$v_D].set_disabled(true);
                if ($v_2)
                    for (var $v_P = 0; $v_P < $v_2.length; $v_P++)
                        if ($v_N === $v_2[$v_P].$N_0) {
                            if (!$v_O.checked) {
                                $v_O.checked = true;
                                Mscrm.LookupMapEditor.$6[$v_D].selectAll(false);
                                Mscrm.LookupMapEditor.$6[$v_D].set_disabled(false)
                            }
                            Mscrm.LookupMapEditor.$6[$v_D].selectItem($v_2[$v_P].$J_0, true)
                        }
            }
            return $v_C.length
        } else return -1
    }
    return -1
};
Mscrm.LookupMapEditor.$12 = function($p0) {
    var $v_0 = $p0.insertRow(1), $v_1 = $v_0.insertCell(0);
    $v_1.colSpan = 2;
    $v_1.innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_IW_LOOKUP_INTERNALMAPPING);
    $p0.rows[0].style.display = "none";
    Mscrm.LookupMapEditor.$e = true
};
Mscrm.LookupMapEditor.$t = function() {
    for (var $v_0 = true, $v_1 = $get("lookupDivEntityAttributeList"), $v_2 = $v_1.rows.length, $v_4 = 0;
        $v_4 < $v_2 - 1;
        $v_4++) {
        var $v_5 = $get("lookupDivEntityUsed" + $v_4);
        if (IsNull($v_5)) continue;
        if ($v_5.checked) {
            $v_0 = false;
            var $v_6 = Mscrm.LookupMapEditor.$6[$v_4].getSelectedItems();
            if (!$v_6.length) {
                $v_0 = true;
                break
            }
        }
    }
    var $v_3 = $get("buttonLookupDivOK");
    if (Mscrm.LookupMapEditor.$e) $v_3.disabled = Mscrm.LookupMapEditor.$j;
    else $v_3.disabled = $v_0
};
Mscrm.LookupMapEditor.$r = function($p0, $p1, $p2, $p3) {
    $p0.clear();
    var $v_0 = XUI.Xml.SelectNodes($p1, "attributes/attribute", null);
    if ($v_0) {
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = false,
                $v_4 = false,
                $v_5 = false,
                $v_6 = XUI.Xml.GetText($v_0[$v_2].attributes.getNamedItem("name")),
                $v_7 = $v_0[$v_2].attributes.getNamedItem("primaryfield");
            if (!IsNull($v_7)) $v_3 = XUI.Xml.GetText($v_7) === "true";
            var $v_8 = $v_0[$v_2].attributes.getNamedItem("MissingDisplayName");
            if (!IsNull($v_8)) $v_4 = XUI.Xml.GetText($v_8) === "true";
            if ($p3)
                for (var $v_9 = 0; $v_9 < $p3.length; $v_9++) {
                    var $v_A = $p3[$v_9];
                    if ($v_A.$J_0 === $v_6 && $v_A.$N_0 === $p2 && $v_A.$O_0 === "System") {
                        $v_5 = true;
                        break
                    }
                }
            if (!$v_4 || $v_4 && $v_5) {
                var $v_B = new Mscrm.MultiSelectOption(XUI.Xml.GetText($v_0[$v_2]), $v_6, $v_3);
                $p0.addMultiSelectOption($v_B)
            }
        }
        var $v_1 = Mscrm.AttributeMapPage.pageState.getCustomizationXml($p2);
        if (!IsNull($v_1)) {
            var $v_C = XUI.Xml.SelectNodes($v_1, "Attributes/Attribute", null);
            if ($v_C.length > 0) {
                var $v_D = new Mscrm.MultiSelectOptionGroup(window.LOCID_OPTGROUP_NEWATTRIBUTES, "customfields");
                $p0.addOptionGroup($v_D)
            }
            for (var $v_E = 0; $v_E < $v_C.length; $v_E++) {
                var $v_F = XUI.Xml.GetText($v_C[$v_E].attributes.getNamedItem("Id")),
                    $v_G = XUI.Xml.GetText(XUI.Xml
                        .SelectSingleNode($v_C[$v_E], Mscrm.CustomAttribute.get_attribDisplayNameXPath(), null)),
                    $v_H = new Mscrm.MultiSelectOption($v_G, $v_F, false, "customfields");
                $p0.addMultiSelectOption($v_H)
            }
        }
    }
};
Mscrm.LookupMapEditor.$1V = function() {
    for (var $v_0 = $get("lookupDivEntityAttributeList"),
        $v_1 = $v_0.rows.length,
        $v_2 = new Array(0),
        $v_3 = 0,
        $v_4 = 0;
        $v_4 < $v_1 - 1;
        $v_4++) {
        var $v_5 = $get("lookupDivEntityUsed" + $v_4);
        if (IsNull($v_5)) continue;
        if ($v_5.checked)
            for (var $v_6 = $get("lookupDivEntity" + $v_4),
                $v_7 = Mscrm.LookupMapEditor.$6[$v_4].getSelectedItems(),
                $v_8 = 0;
                $v_8 < $v_7.length;
                $v_8++) {
                $v_2[$v_3] = new Mscrm.LookupMap($v_6.value, $v_7[$v_8].get_value(), "System");
                $v_3++
            }
    }
    return $v_2
};
Mscrm.LookupMapEditor.$1P = function($p0) {
    var $v_0 = Mscrm.LookupMapEditor.$6[$p0], $v_1 = $get("lookupDivEntityUsed" + $p0);
    $v_0.set_disabled(!$v_1.checked);
    Mscrm.LookupMapEditor.$t()
};
Mscrm.LookupMapEditor.prototype = {
    get__divId: function() { return "lookupMappingDiv" },
    $s_0: function() {
        Mscrm.PopupEditor.prototype.$s_0.call(this);
        Mscrm.LookupMapEditor.$e = false;
        var $v_0 = $get("lookupDivEntityAttributeList");
        $v_0.rows[0].style.display = "inline";
        var $v_1 = $get("closeLookupDivLink");
        $removeHandler($v_1, "keypress", Mscrm.AttributeMapPage.$C.$$d_$1a_0)
    },
    $19_0: function() {
        var $v_0 = Mscrm.LookupMapEditor.$1V();
        this._currentAttributeMap.$1m_0($v_0);
        Mscrm.PopupEditor.prototype.$19_0.call(this);
        Mscrm.LookupMapEditor.$e = false;
        var $v_1 = $get("lookupDivEntityAttributeList");
        $v_1.rows[0].style.display = "inline";
        var $v_2 = $get("closeLookupDivLink");
        $removeHandler($v_2, "keypress", Mscrm.AttributeMapPage.$C.$$d_$1a_0)
    }
};
Mscrm.AttributeMappingActions.registerClass("Mscrm.AttributeMappingActions");
Mscrm.EnumConverterImportEntityProcessCode.registerClass("Mscrm.EnumConverterImportEntityProcessCode");
Mscrm.EnumConverterAttributeMapView.registerClass("Mscrm.EnumConverterAttributeMapView");
Mscrm.PopupState.registerClass("Mscrm.PopupState");
Mscrm.AttributeMapPageState.registerClass("Mscrm.AttributeMapPageState");
Mscrm.AttributeMapPage.registerClass("Mscrm.AttributeMapPage");
Mscrm.AttributeMapSectionHandler.registerClass("Mscrm.AttributeMapSectionHandler");
Mscrm.UIHelper.registerClass("Mscrm.UIHelper");
Mscrm.CustomAttribute.registerClass("Mscrm.CustomAttribute");
Mscrm.LookupMap.registerClass("Mscrm.LookupMap");
Mscrm.PicklistMap.registerClass("Mscrm.PicklistMap");
Mscrm.AttributeMap.registerClass("Mscrm.AttributeMap");
Mscrm.EntityMap.registerClass("Mscrm.EntityMap");
Mscrm.PopupEditor.registerClass("Mscrm.PopupEditor");
Mscrm.PicklistMapEditor.registerClass("Mscrm.PicklistMapEditor", Mscrm.PopupEditor);
Mscrm.LookupMapEditor.registerClass("Mscrm.LookupMapEditor", Mscrm.PopupEditor);
Mscrm.AttributeMappingActions.select = "1-Select";
Mscrm.AttributeMappingActions.create = "2-Create";
Mscrm.AttributeMappingActions.ignore = "3-Ignore";
Mscrm.AttributeMappingActions.internalMapping = "4-Internal";
Mscrm.AttributeMapPageState.entityPrimaryKeyDisplayNameXPath = "CustomizationXml/PrimaryKeyDisplayName";
Mscrm.AttributeMapPageState.entityPrimaryKeyXPath = "CustomizationXml/PrimaryKey";
Mscrm.AttributeMapPage.pageState = null;
Mscrm.AttributeMapPage.popupState = null;
Mscrm.AttributeMapPage.$7 = null;
Mscrm.AttributeMapPage.$C = null;
Mscrm.AttributeMapPage.$$cctor();
Mscrm.PicklistMapEditor.$Y = {};
Mscrm.PicklistMapEditor.$c = {};
Mscrm.PicklistMapEditor.$V = {};
Mscrm.PicklistMapEditor.$G = {};
Mscrm.LookupMapEditor.$e = false;
Mscrm.LookupMapEditor.$j = false;
Mscrm.LookupMapEditor.$6 = null;
Mscrm.LookupMapEditor.$$cctor()