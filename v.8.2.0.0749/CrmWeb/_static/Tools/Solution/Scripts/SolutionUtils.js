Type.registerNamespace("Mscrm");
Mscrm.ComponentOrderHelper = function() {};
Mscrm.ComponentOrderHelper.parseDisplayOrder = function(componentProperties) {
    return Mscrm.ComponentOrderHelper.$0(componentProperties, 1)
};
Mscrm.ComponentOrderHelper.parseComponentId = function(componentProperties) {
    return Mscrm.ComponentOrderHelper.$0(componentProperties, 0)
};
Mscrm.ComponentOrderHelper.parseComponentManagedProperty = function(componentProperties) {
    return Mscrm.ComponentOrderHelper.$0(componentProperties, 2)
};
Mscrm.ComponentOrderHelper.$0 = function($p0, $p1) {
    var $v_0 = $p0.split(":");
    if ($v_0.length > $p1) return $v_0[$p1];
    else return ""
};
Mscrm.RoleAssignmentHelper = function() {};
Mscrm.RoleAssignmentHelper.updateGridFromDisplayConditions = function(displayConditionsXml) {
    var $v_0 = [], $v_1 = null;
    if (!IsNull(displayConditionsXml)) $v_1 = XUI.Xml.SelectSingleNode(displayConditionsXml, "DisplayConditions", null);
    if (!IsNull($v_1)) {
        var $v_2 = XUI.Xml.SelectNodes($v_1, "Role", null);
        if (!IsNull($v_2) && $v_2.length > 0) {
            $v_0 = [];
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3].attributes.getNamedItem("Id").nodeValue,
                    $v_5 = $get("checkBox_" + $v_4.toUpperCase());
                if (!IsNull($v_5)) {
                    Mscrm.Utilities.click($v_5);
                    $v_0[$v_3] = $v_4
                }
            }
            $get("visibleToSelectedRoles").checked = true
        } else {
            var $v_6 = null;
            if (!IsNull($v_1)) $v_6 = XUI.Xml.SelectSingleNode($v_1, "Everyone", null);
            if (!IsNull($v_6)) {
                $v_0 = Mscrm.RoleAssignmentHelper.storeAllRolesAsSelected();
                Mscrm.Utilities.click($get("visibleToEveryone"))
            } else Mscrm.Utilities.click($get("visibleToSelectedRoles"))
        }
    } else {
        $v_0 = Mscrm.RoleAssignmentHelper.storeAllRolesAsSelected();
        Mscrm.Utilities.click($get("visibleToEveryone"))
    }
    return $v_0
};
Mscrm.RoleAssignmentHelper.loadDisplayConditionsXml = function() {
    var $v_0 = XUI.Html.GetText($get("preDisplayConditionsXml"));
    if (isNullOrEmptyString($v_0)) return null;
    else return XUI.Xml.LoadXml($v_0)
};
Mscrm.RoleAssignmentHelper
    .extractDisplayConditionsFromGrid = function(displayConditionsXml, checkedRoles, ignoreFallback) {
        if (IsNull(displayConditionsXml)) displayConditionsXml = XUI.Xml.LoadXml("<DisplayConditions/>");
        var $v_0 = XUI.Xml.SelectSingleNode(displayConditionsXml, "DisplayConditions", null);
        if (!ignoreFallback && $get("fallBackCheckBox").checked
        ) Mscrm.SolutionComponentXmlUtils.addAttribute($v_0, "FallbackForm", "true");
        else !ignoreFallback && Mscrm.SolutionComponentXmlUtils.removeAttribute($v_0, "FallbackForm");
        Mscrm.SolutionComponentXmlUtils.removeChildren($v_0, "Role");
        Mscrm.SolutionComponentXmlUtils.removeChildren($v_0, "Everyone");
        if ($get("visibleToEveryone").checked) $v_0.appendChild(displayConditionsXml.createElement("Everyone"));
        else if (!IsNull(checkedRoles))
            for (var $v_1 = 0; $v_1 < checkedRoles.length; $v_1++) {
                var $v_2 = displayConditionsXml.createElement("Role");
                Mscrm.SolutionComponentXmlUtils.addAttribute($v_2, "Id", checkedRoles[$v_1].toString());
                $v_0.appendChild($v_2)
            }
        return XUI.Xml.XMLSerializer.serializeToString(displayConditionsXml)
    };
Mscrm.RoleAssignmentHelper.unselectAllRoles = function() {
    for (var $v_0 = document.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        $v_2.id.startsWith("checkBox_") && $v_2.checked && Mscrm.Utilities.click($v_2)
    }
};
Mscrm.RoleAssignmentHelper.updateGridForPermissions = function(crmGridControl, canAssignRoles) {
    if (!canAssignRoles) {
        $get("visibleToEveryone").disabled = true;
        $get("visibleToSelectedRoles").disabled = true;
        $get("fallBackCheckBox").disabled = true;
        crmGridControl.get_innerGrid().get_element().disabled = true;
        $get("butBegin").disabled = true;
        $get("chkAll").disabled = true;
        crmGridControl.disableOrEnableAllGridCheckBoxes(true)
    }
};
Mscrm.RoleAssignmentHelper.getTotalRoleCount = function() {
    for (var $v_0 = 0, $v_1 = document.getElementsByTagName("INPUT"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2];
        if ($v_3.id.startsWith("checkBox_")) $v_0++
    }
    return $v_0
};
Mscrm.RoleAssignmentHelper.onClickVisibleToEveryone = function(crmGrid) {
    var $v_0 = $get("chkAll");
    !$v_0.checked && Mscrm.Utilities.click($v_0);
    $v_0.disabled = true;
    $get("visibleToSelectedRoles").checked = false;
    crmGrid.get_innerGrid().get_element().disabled = true;
    $get("selBusinessUnit").disabled = true;
    crmGrid.disableOrEnableAllGridCheckBoxes(true)
};
Mscrm.RoleAssignmentHelper.onClickVisibleToSelectedRoles = function(crmGrid) {
    $get("visibleToEveryone").checked = false;
    crmGrid.get_innerGrid().get_element().disabled = false;
    $get("selBusinessUnit").disabled = false;
    $get("chkAll").disabled = false;
    crmGrid.disableOrEnableAllGridCheckBoxes(false)
};
Mscrm.RoleAssignmentHelper.onClickFallbackCheckBox = function() {
    var $v_0 = $get("fallBackCheckBox");
    if ($v_0.checked) $get("fallBackFormInfoRow").style.display = "";
    else $get("fallBackFormInfoRow").style.display = "none"
};
Mscrm.RoleAssignmentHelper.storeAllRolesAsSelected = function() {
    for (var $v_0 = [], $v_1 = 0, $v_2 = document.getElementsByTagName("INPUT"), $v_3 = 0;
        $v_3 < $v_2.length;
        $v_3++
    ) if ($v_2[$v_3].id.startsWith("checkBox_")) $v_0[$v_1++] = $v_2[$v_3].id.substr(9);
    return $v_0
};
Mscrm.RoleAssignmentHelper.setSelectedRoles = function() {
    for (var $v_0 = [], $v_1 = 0, $v_2 = document.getElementsByTagName("INPUT"), $v_3 = null, $v_4 = 0;
        $v_4 < $v_2.length;
        $v_4++) {
        $v_3 = $v_2[$v_4];
        if ($v_3.id.startsWith("checkBox_") && $v_3.checked) $v_0[$v_1++] = $v_2[$v_4].id.substr(9)
    }
    return $v_0
};
Mscrm.SolutionXmlNodes = function() {};
Mscrm.SolutionXmlAttributes = function() {};
Mscrm.SolutionComponentXmlUtils = function() {};
Mscrm.SolutionComponentXmlUtils.removeAttribute = function(node, attributeName) {
    if (!IsNull(node)) {
        var $v_0 = node.attributes.getNamedItem(attributeName);
        !IsNull($v_0) && node.attributes.removeNamedItem(attributeName)
    }
};
Mscrm.SolutionComponentXmlUtils.removeChildren = function(parentNode, typeOfChild) {
    if (!IsNull(parentNode))
        for (var $v_0 = XUI.Xml
                     .SelectNodes(parentNode, typeOfChild, null),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) parentNode.removeChild($v_0[$v_1])
};
Mscrm.SolutionComponentXmlUtils.addAttribute = function(cell, attributeName, attributeValue) {
    if (!IsNull(cell)) {
        var $v_0 = cell.ownerDocument.createAttribute(attributeName);
        $v_0.value = attributeValue;
        cell.attributes.setNamedItem($v_0)
    }
};
Mscrm.ComponentOrderHelper.registerClass("Mscrm.ComponentOrderHelper");
Mscrm.RoleAssignmentHelper.registerClass("Mscrm.RoleAssignmentHelper");
Mscrm.SolutionXmlNodes.registerClass("Mscrm.SolutionXmlNodes");
Mscrm.SolutionXmlAttributes.registerClass("Mscrm.SolutionXmlAttributes");
Mscrm.SolutionComponentXmlUtils.registerClass("Mscrm.SolutionComponentXmlUtils");
Mscrm.ComponentOrderHelper.objectIdIndex = 0;
Mscrm.ComponentOrderHelper.componentOrderIndex = 1;
Mscrm.ComponentOrderHelper.componentManagedPropertyIndex = 2;
Mscrm.RoleAssignmentHelper.checkAllId = "chkAll";
Mscrm.RoleAssignmentHelper.rowCheckBoxPrefixId = "checkBox_";
Mscrm.RoleAssignmentHelper.fallbackCheckBoxId = "fallBackCheckBox";
Mscrm.RoleAssignmentHelper.visibleToEveryoneRadioId = "visibleToEveryone";
Mscrm.RoleAssignmentHelper.visibleToSelectedRolesId = "visibleToSelectedRoles";
Mscrm.RoleAssignmentHelper.checkBoxPrefixId = "checkBox_";
Mscrm.RoleAssignmentHelper.fallbackFormInfoRowId = "fallBackFormInfoRow";
Mscrm.RoleAssignmentHelper.preDisplayConditionsNodeId = "preDisplayConditionsXml";
Mscrm.RoleAssignmentHelper.objectIdentifierId = "preObjectId";
Mscrm.RoleAssignmentHelper.selectBusinessUnitId = "selBusinessUnit";
Mscrm.RoleAssignmentHelper.butBeginId = "butBegin";
Mscrm.RoleAssignmentHelper.crmGridId = "crmGrid";
Mscrm.RoleAssignmentHelper.entityName = "preEntityName";
Mscrm.SolutionXmlNodes.navBarByRelationship = "NavBarByRelationshipItem";
Mscrm.SolutionXmlNodes.titles = "Titles";
Mscrm.SolutionXmlNodes.title = "Title";
Mscrm.SolutionXmlNodes.navBarItem = "NavBarItem";
Mscrm.SolutionXmlNodes.library = "Library";
Mscrm.SolutionXmlNodes.formLibraries = "formLibraries";
Mscrm.SolutionXmlNodes.handler = "Handler";
Mscrm.SolutionXmlNodes.internalHandlers = "InternalHandlers";
Mscrm.SolutionXmlNodes.handlers = "Handlers";
Mscrm.SolutionXmlNodes.events = "events";
Mscrm.SolutionXmlNodes.event = "event";
Mscrm.SolutionXmlNodes.queryStringParameter = "querystringparameter";
Mscrm.SolutionXmlNodes.formParameters = "formparameters";
Mscrm.SolutionXmlNodes.dependencies = "dependencies";
Mscrm.SolutionXmlNodes.dependency = "dependency";
Mscrm.SolutionXmlNodes.script = "script";
Mscrm.SolutionXmlNodes.displayConditions = "DisplayConditions";
Mscrm.SolutionXmlNodes.role = "Role";
Mscrm.SolutionXmlNodes.labels = "labels";
Mscrm.SolutionXmlNodes.label = "label";
Mscrm.SolutionXmlNodes.everyone = "Everyone";
Mscrm.SolutionXmlNodes.chartGridMode = "ChartGridMode";
Mscrm.SolutionXmlNodes.enableJumpBar = "EnableJumpBar";
Mscrm.SolutionXmlNodes.enableQuickFind = "EnableQuickFind";
Mscrm.SolutionXmlNodes.enableViewPicker = "EnableViewPicker";
Mscrm.SolutionXmlAttributes.active = "active";
Mscrm.SolutionXmlAttributes.added = "added";
Mscrm.SolutionXmlAttributes.application = "application";
Mscrm.SolutionXmlAttributes.attribute = "attribute";
Mscrm.SolutionXmlAttributes.area = "Area";
Mscrm.SolutionXmlAttributes.auto = "auto";
Mscrm.SolutionXmlAttributes.colSpan = "colspan";
Mscrm.SolutionXmlAttributes.classId = "classid";
Mscrm.SolutionXmlAttributes.description = "description";
Mscrm.SolutionXmlAttributes.designerAddedColumnsAttribute = "designerAddedColumnsAttribute";
Mscrm.SolutionXmlAttributes.designerAddedNameAttribute = "designerAddedNameAttribute";
Mscrm.SolutionXmlAttributes.dirty = "dirty";
Mscrm.SolutionXmlAttributes.displayName = "displayName";
Mscrm.SolutionXmlAttributes.enabled = "enabled";
Mscrm.SolutionXmlAttributes.expanded = "expanded";
Mscrm.SolutionXmlAttributes.fallBackForm = "FallbackForm";
Mscrm.SolutionXmlAttributes.functionName = "functionName";
Mscrm.SolutionXmlAttributes.handlerUniqueId = "handlerUniqueId";
Mscrm.SolutionXmlAttributes.icon = "Icon";
Mscrm.SolutionXmlAttributes.Id = "Id";
Mscrm.SolutionXmlAttributes.id = "id";
Mscrm.SolutionXmlAttributes.isNavSpacer = "isNavSpacer";
Mscrm.SolutionXmlAttributes.languageCode = "languagecode";
Mscrm.SolutionXmlAttributes.lcid = "LCID";
Mscrm.SolutionXmlAttributes.libraryName = "libraryName";
Mscrm.SolutionXmlAttributes.libraryUniqueId = "libraryUniqueId";
Mscrm.SolutionXmlAttributes.lockLevel = "locklevel";
Mscrm.SolutionXmlAttributes.nameAttribute = "name";
Mscrm.SolutionXmlAttributes.navPaneId = "navPaneId";
Mscrm.SolutionXmlAttributes.parameters = "parameters";
Mscrm.SolutionXmlAttributes.passExecutionContext = "passExecutionContext";
Mscrm.SolutionXmlAttributes.relationshipName = "RelationshipName";
Mscrm.SolutionXmlAttributes.rowSpan = "rowspan";
Mscrm.SolutionXmlAttributes.sequence = "Sequence";
Mscrm.SolutionXmlAttributes.show = "Show";
Mscrm.SolutionXmlAttributes.showLabel = "showlabel";
Mscrm.SolutionXmlAttributes.status = "status";
Mscrm.SolutionXmlAttributes.tabIndex = "tabIndex";
Mscrm.SolutionXmlAttributes.text = "Text";
Mscrm.SolutionXmlAttributes.type = "type";
Mscrm.SolutionXmlAttributes.url = "Url";
Mscrm.SolutionXmlAttributes.visible = "visible"