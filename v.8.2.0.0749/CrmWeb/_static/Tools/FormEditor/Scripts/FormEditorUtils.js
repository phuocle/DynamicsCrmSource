Type.registerNamespace("Mscrm");
Mscrm.EventType = function() {};
Mscrm.EventType.prototype = { none: -1, data: 0, UI: 1 };
Mscrm.EventType.registerEnum("Mscrm.EventType", false);
Mscrm.FormControlTypes = function() {};
Mscrm.FormControlTypes.prototype = {
    none: -1,
    iframe: 0,
    field: 1,
    subGrid: 2,
    webResource: 3,
    form: 4,
    tab: 5,
    notes: 6,
    searchWidget: 7,
    emailRecipientActivityControl: 8,
    emailEngagementActionsControl: 9
};
Mscrm.FormControlTypes.registerEnum("Mscrm.FormControlTypes", false);
Mscrm.FormCrudAction = function() {};
Mscrm.FormCrudAction.prototype = { create: 0, update: 1, saveAs: 2 };
Mscrm.FormCrudAction.registerEnum("Mscrm.FormCrudAction", false);
Mscrm.EditNavRelationship = function() {};
Mscrm.EditNavRelationship.populateNavRelationshipDialog = function() {
    var $v_0 = "", $v_1 = "", $v_2 = "";
    try {
        var $v_3 = new RemoteCommand("FormEditorWebService", "GetRelationshipInfo");
        $v_3.SetParameter("relationSchemaName", Mscrm.EditNavRelationship.relationName.toString());
        $v_3.SetParameter("entityObjectTypeCode", Mscrm.EditNavRelationship.objectTypeCode);
        var $v_4 = $v_3.Execute();
        if ($v_4.Success) {
            var $v_5 = $v_4.ReturnValue.toString();
            if ($v_5.length > 0) {
                var $v_6 = XUI.Xml.LoadXml($v_5), $v_7 = XUI.Xml.SelectSingleNode($v_6, "relationship", null);
                if (!IsNull($v_7)) {
                    $v_0 = $v_7.attributes.getNamedItem("relatedEntity").nodeValue;
                    $v_2 = $v_7.attributes.getNamedItem("customLabel").nodeValue;
                    Mscrm.EditNavRelationship.relationType = $v_7.attributes.getNamedItem("type").nodeValue;
                    Mscrm.EditNavRelationship.entityId = $v_7.attributes.getNamedItem("entityId").nodeValue;
                    Mscrm.EditNavRelationship.entityRelationId = $v_7.attributes.getNamedItem("relationshipId")
                        .nodeValue;
                    $v_1 = $v_7.attributes.getNamedItem("displayOption").nodeValue;
                    switch ($v_1) {
                    case "2":
                        $v_1 = window.LOCID_DONOT_DISPLAY;
                        break;
                    case "0":
                        $v_1 = window.LOCID_DISPLAY_COLLECTION;
                        break;
                    case "1":
                        $v_1 = window.LOCID_DISPLAY_CUSTOM_LABEL;
                        break
                    }
                    if (Mscrm.EditNavRelationship.relationType === "referenced") {
                        $get("oneToManyTD").style.display = "inline";
                        $get("manyToManyTD").style.display = "none"
                    } else {
                        $get("oneToManyTD").style.display = "none";
                        $get("manyToManyTD").style.display = "inline"
                    }
                }
            }
        }
    } catch ($$e_8) {
    }
    $get("txtLabel").value = Mscrm.EditNavRelationship.displayName;
    $get("txtRelationshipDisplayName").value = $v_2;
    $get("txtRelationshipSchemaName").value = Mscrm.EditNavRelationship.relationName;
    $get("txtRelationshipEntityName").value = $v_0;
    $get("txtRelationshipDisplayOption").value = $v_1
};
Mscrm.EditNavRelationship.editRelationshipSchema = function() {
    var $v_0 = "/tools/systemcustomization/relationships/manageRelationship.aspx?";
    $v_0 += "appSolutionId=" + window.APP_SOLUTION_ID;
    $v_0 += "&entityId=" + Mscrm.EditNavRelationship.entityId;
    $v_0 += "&entityRelationshipId=" + Mscrm.EditNavRelationship.entityRelationId;
    $v_0 += "&entityRole=" + Mscrm.EditNavRelationship.relationType;
    var $v_1 = Mscrm.CrmUri.create($v_0),
        $v_2 = Mscrm.WindowInformation.getWindowInformation(9803),
        $v_3 = openStdDlg($v_1, null, $v_2.Width, $v_2.Height);
    Mscrm.EditNavRelationship.populateNavRelationshipDialog()
};
Mscrm.FormPropertiesUtils = function() {};
Mscrm.FormPropertiesUtils.setUpdatedParameterXml = function(parameterXmlString, formXml) {
    var $v_0 = null;
    if (!isNullOrEmptyString(parameterXmlString)) {
        var $v_1 = XUI.Xml.LoadXml(parameterXmlString);
        if (!IsNull($v_1)) {
            var $v_4 = XUI.Xml.SelectNodes($v_1, "/values/value[@description != '']", null);
            if (!IsNull($v_4) && $v_4.length > 0) {
                var $v_5 = null, $v_6 = null;
                $v_0 = formXml.createElement("formparameters");
                for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                    $v_5 = $v_4[$v_7].attributes.getNamedItem("label");
                    $v_6 = $v_4[$v_7].attributes.getNamedItem("description");
                    if (!IsNull($v_5) && !IsNull($v_6)) {
                        var $v_8 = formXml
                                .createElement("querystringparameter"),
                            $v_9 = formXml.createAttribute("name");
                        $v_9.value = $v_5.nodeValue;
                        var $v_A = formXml.createAttribute("type");
                        $v_A.value = $v_6.nodeValue;
                        $v_8.attributes.setNamedItem($v_9);
                        $v_8.attributes.setNamedItem($v_A);
                        $v_0.appendChild($v_8)
                    }
                }
            }
        }
        var $v_2 = XUI.Xml.SelectSingleNode(formXml, "/entity/form", null),
            $v_3 = XUI.Xml.SelectSingleNode(formXml, "/entity/form/formparameters", null);
        Mscrm.FormPropertiesUtils.$1X($v_2, $v_3, $v_0)
    }
};
Mscrm.FormPropertiesUtils.$1X = function($p0, $p1, $p2) {
    if (!IsNull($p0) && !(IsNull($p1) && IsNull($p2)))
        if (IsNull($p2)) $p0.removeChild($p1);
        else if (IsNull($p1)) $p0.appendChild($p2);
        else $p0.replaceChild($p2, $p1)
};
Mscrm.NavigationGroup = function(displayName) { this.displayName = displayName };
Mscrm.NavigationGroup.prototype = { displayName: "" };
Mscrm.NavigationRelationship = function(displayName) {
    Mscrm.NavigationRelationship.initializeBase(this, [displayName])
};
Mscrm.NavigationLink = function(icon, url, displayName) {
    Mscrm.NavigationLink.initializeBase(this, [displayName]);
    this.icon = icon;
    this.url = url
};
Mscrm.NavigationLink.prototype = { icon: "", url: "" };
Mscrm.EventHandler = function(functionName, libraryName, handlerUniqueId, enabled, passExecutionContext, parameters) {
    this.functionName = functionName;
    this.libraryName = libraryName;
    this.handlerUniqueId = handlerUniqueId;
    this.enabled = enabled;
    this.passExecutionContext = passExecutionContext;
    this.parameters = parameters
};
Mscrm.EventHandler.prototype = {
    functionName: "",
    libraryName: "",
    handlerUniqueId: "",
    enabled: false,
    passExecutionContext: false,
    parameters: ""
};
Mscrm.FormLibrary = function(name, description, displayName, libraryUniqueId) {
    this.name = name;
    this.description = description;
    this.displayName = displayName;
    this.libraryUniqieId = libraryUniqueId
};
Mscrm.FormLibrary.prototype = { name: "", displayName: "", description: "", libraryUniqieId: "" };
Mscrm.FormDetails = function() {
    this.formType = -1;
    this.targetFormtype = -1;
    this.objectTypeCode = -1
};
Mscrm.FormDetails.prototype = {
    name: "",
    description: "",
    formXml: null,
    isUserForm: false,
    formId: "{00000000-0000-0000-0000-000000000000}",
    parentFormId: "{00000000-0000-0000-0000-000000000000}",
    isAirMerged: false,
    formPresentation: 0
};
Mscrm.EventHandlerEditor = function() {};
Mscrm.EventHandlerEditor.populateLibrarySelector = function(libraryNodes) {
    var $v_0 = $get("librarySelector");
    if (!IsNull($v_0) && !IsNull(libraryNodes))
        for (var $v_1 = 0; $v_1 < libraryNodes.length; $v_1++) {
            var $v_2 = document.createElement("OPTION");
            $v_2.text = libraryNodes[$v_1].attributes.getNamedItem("name").nodeValue;
            $v_2.value = libraryNodes[$v_1].attributes.getNamedItem("name").nodeValue;
            $v_2.title = $v_2.text;
            $v_0.add($v_2)
        }
};
Mscrm.EventHandlerEditor.onLoadHandlerEditor = function() {
    var $v_0 = getDialogArguments();
    Mscrm.EventHandlerEditor.$g = $v_0["libraryNodes"];
    Mscrm.EventHandlerEditor.$C = $v_0["formXml"];
    Mscrm.EventHandlerEditor.$Z = $v_0["fieldsXml"];
    Mscrm.EventHandlerEditor.$i = $v_0["propertiesXml"];
    Mscrm.EventHandlerEditor.$5 = $v_0["handlerObj"];
    Mscrm.EventHandlerEditor.$2 = $v_0["handlerEventNode"];
    Mscrm.EventHandlerEditor.$8 = $v_0["handlerDependencies"];
    Mscrm.EventHandlerEditor.populateLibrarySelector(Mscrm.EventHandlerEditor.$g);
    if (!isNullOrEmptyString(Mscrm.EventHandlerEditor.$5.handlerUniqueId)) {
        $get("librarySelector").value = Mscrm.EventHandlerEditor.$5.libraryName;
        $get("functionName").value = Mscrm.EventHandlerEditor.$5.functionName;
        $get("enabledCheckBox").checked = Mscrm.EventHandlerEditor.$5.enabled;
        $get("passExecContextCheckBox").checked = Mscrm.EventHandlerEditor.$5.passExecutionContext;
        $get("functionParameters").value = Mscrm.EventHandlerEditor.$5.parameters;
        Mscrm.EventHandlerEditor.$V = Mscrm.EventHandlerEditor.$5.handlerUniqueId;
        Mscrm.EventHandlerEditor.$k = true
    } else Mscrm.EventHandlerEditor.$V = Mscrm.Utilities.createGuid();
    DrawDependencyListControl(Mscrm.EventHandlerEditor.$1J(),
        Mscrm.EventHandlerEditor.$C,
        Mscrm.EventHandlerEditor.$Z,
        Mscrm.EventHandlerEditor.$i,
        window.USER_LANGUAGE_CODE.toString())
};
Mscrm.EventHandlerEditor.handleOkPress = function() {
    var $v_0 = new Mscrm.EventHandler($get("functionName").value,
        $get("librarySelector").value,
        Mscrm.EventHandlerEditor.$V,
        $get("enabledCheckBox").checked,
        $get("passExecContextCheckBox").checked,
        $get("functionParameters").value);
    if (Mscrm.EventHandlerEditor.$k) Mscrm.EventHandlerEditor.$1O($v_0);
    else Mscrm.EventHandlerEditor.$1N($v_0);
    return $v_0
};
Mscrm.EventHandlerEditor.$1J = function() {
    var $v_0 = [], $v_1 = Mscrm.EventHandlerEditor.$8;
    if (!IsNull($v_1))
        for (var $v_2 = XUI.Xml
                     .SelectNodes($v_1, "dependency", null),
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) $v_0[$v_3] = Mscrm.FormXmlUtils.getAttributeValue($v_2[$v_3], "id").toString();
    return $v_0
};
Mscrm.EventHandlerEditor.$10 = function() {
    var $v_0 = null, $v_1 = GetReturnList();
    if (!IsNull($v_1) && $v_1.length > 0) {
        $v_0 = Mscrm.EventHandlerEditor.$C.createElement("dependencies");
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = Mscrm.EventHandlerEditor.$C.createElement("dependency");
            Mscrm.FormXmlUtils.addAttribute($v_3, "id", $v_1[$v_2].toString());
            $v_0.appendChild($v_3)
        }
    }
    return $v_0
};
Mscrm.EventHandlerEditor.$1O = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.EventHandlerEditor.$2, "Handlers", null),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "Handler[@handlerUniqueId='" + $p0.handlerUniqueId + "']", null);
        Mscrm.FormXmlUtils.addAttribute($v_1, "handlerUniqueId", $p0.handlerUniqueId);
        Mscrm.FormXmlUtils.addAttribute($v_1, "functionName", $p0.functionName);
        Mscrm.FormXmlUtils.addAttribute($v_1, "libraryName", $p0.libraryName);
        Mscrm.FormXmlUtils.addAttribute($v_1, "enabled", $p0.enabled.toString().toLowerCase());
        Mscrm.FormXmlUtils
            .addAttribute($v_1, "passExecutionContext", $p0.passExecutionContext.toString().toLowerCase());
        Mscrm.FormXmlUtils.addAttribute($v_1, "parameters", $p0.parameters);
        var $v_2 = Mscrm.EventHandlerEditor.$10();
        if (Mscrm.DependenciesUtils.dependenciesChanged(Mscrm.DependenciesUtils
            .getDependenciesArray(Mscrm.EventHandlerEditor.$8),
            Mscrm.DependenciesUtils.getDependenciesArray($v_2))) {
            Mscrm.DependenciesUtils.updateLockLevelForDependencies(Mscrm.EventHandlerEditor.$8, $v_2);
            if (!IsNull(Mscrm.EventHandlerEditor.$8)) {
                !IsNull($v_2) && Mscrm.EventHandlerEditor.$2.insertBefore($v_2, Mscrm.EventHandlerEditor.$8);
                Mscrm.EventHandlerEditor.$2.removeChild(Mscrm.EventHandlerEditor.$8)
            } else
                !IsNull($v_2) &&
                    Mscrm.EventHandlerEditor.$2
                    .insertBefore($v_2, XUI.Xml.DomUtils.GetFirstChild(Mscrm.EventHandlerEditor.$2))
        }
    }
};
Mscrm.EventHandlerEditor.$1N = function($p0) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.EventHandlerEditor.$2, "Handlers", null);
    if (IsNull($v_0)) {
        $v_0 = Mscrm.EventHandlerEditor.$C.createElement("Handlers");
        Mscrm.EventHandlerEditor.$2.appendChild($v_0)
    }
    if (XUI.Xml.SelectNodes($v_0, "Handler", null).length >= 50) {
        alert(String.format(window.LOCID_MAX_HANDLERS_MESSAGE, "50"));
        return
    }
    var $v_1 = Mscrm.FormXmlUtils.createHandlerNode(Mscrm.EventHandlerEditor.$C, $p0);
    !IsNull($v_1) && $v_0.appendChild($v_1);
    var $v_2 = Mscrm.EventHandlerEditor.$10();
    if (!IsNull($v_2)) {
        if (Mscrm.DependenciesUtils.hasDependenciesNode(Mscrm.EventHandlerEditor.$2)) {
            var $v_3 = XUI.Xml.SelectSingleNode(Mscrm.EventHandlerEditor.$2, "dependencies", null);
            Mscrm.EventHandlerEditor.$1C($v_3, $v_2)
        } else
            Mscrm.EventHandlerEditor.$2.insertBefore($v_2, XUI.Xml.DomUtils.GetFirstChild(Mscrm.EventHandlerEditor.$2));
        Mscrm.DependenciesUtils.updateLockLevelForDependencies(null, $v_2)
    }
};
Mscrm.EventHandlerEditor.$1C = function($p0, $p1) {
    for (var $v_0 = XUI.Xml
                 .SelectNodes($p1, "dependency", null),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) $p0.appendChild($v_0[$v_1])
};
Mscrm.SaveAs = function() {};
Mscrm.SaveAs.onLoadSaveAs = function() {
    var $v_0 = getDialogArguments();
    Mscrm.SaveAs.$7 = $v_0["formId"] ? $v_0["formId"] : "{00000000-0000-0000-0000-000000000000}";
    if (isNullOrEmptyString(Mscrm.SaveAs.$7)) Mscrm.SaveAs.$7 = "{00000000-0000-0000-0000-000000000000}";
    Mscrm.SaveAs.$d = $v_0["formXml"] ? $v_0["formXml"] : "";
    Mscrm.SaveAs.$D = $v_0["objectTypeCode"] ? $v_0["objectTypeCode"] : -1;
    Mscrm.SaveAs.$c = $v_0["formType"] ? $v_0["formType"] : 100;
    Mscrm.SaveAs.$f = $v_0["isUserForm"] ? $v_0["isUserForm"] : false;
    Mscrm.SaveAs.$j = $v_0["targetFormType"] ? $v_0["targetFormType"] : -1;
    Mscrm.SaveAs.$h = $v_0["name"] ? $v_0["name"] : "";
    Mscrm.SaveAs.$Y = $v_0["description"] ? $v_0["description"] : "";
    Mscrm.SaveAs.$e = $v_0["isMergeButtonClicked"] ? $v_0["isMergeButtonClicked"] : false;
    Mscrm.SaveAs.$a = $v_0["formPresentation"] ? $v_0["formPresentation"] : false;
    XUI.Html.SetText($get("formDescription"), Mscrm.SaveAs.$Y);
    $get("formName").value = Mscrm.SaveAs.$h
};
Mscrm.SaveAs.onOkPress = function(name, description) {
    var $v_0 = new Mscrm.FormDetails;
    $v_0.description = description;
    $v_0.name = name;
    $v_0.parentFormId = Mscrm.SaveAs.$7;
    $v_0.formXml = XUI.Xml.LoadXml(Mscrm.SaveAs.$d);
    $v_0.isUserForm = Mscrm.SaveAs.$f;
    $v_0.objectTypeCode = Mscrm.SaveAs.$D;
    $v_0.formType = Mscrm.SaveAs.$c;
    $v_0.targetFormtype = Mscrm.SaveAs.$j;
    $v_0.isAirMerged = Mscrm.SaveAs.$e;
    $v_0.formPresentation = Mscrm.SaveAs.$a ? 1 : 0;
    return Mscrm.FormCrudUtils.executeAction(2, $v_0, true)
};
Mscrm.FormRoleAssignment = function() {};
Mscrm.FormRoleAssignment.onLoadDialog = function() {
    Mscrm.FormRoleAssignment.$Q = $find("crmGrid");
    Mscrm.FormRoleAssignment.$7 = XUI.Html.GetText($get("preObjectId"));
    Mscrm.RoleAssignmentHelper.unselectAllRoles();
    Mscrm.FormRoleAssignment.$r = Mscrm.RoleAssignmentHelper.getTotalRoleCount();
    Mscrm.FormRoleAssignment.displayConditionsXml = Mscrm.RoleAssignmentHelper.loadDisplayConditionsXml();
    Mscrm.FormRoleAssignment.$T = Mscrm.RoleAssignmentHelper
        .updateGridFromDisplayConditions(Mscrm.FormRoleAssignment.displayConditionsXml);
    if (Mscrm.FormRoleAssignment.isFallbackForm) {
        $get("fallBackCheckBox").checked = true;
        if (Mscrm.FormRoleAssignment.totalFallbackForms === 1) $get("fallBackCheckBox").disabled = true
    } else $get("fallBackFormInfoRow").style.display = "none";
    Mscrm.RoleAssignmentHelper.updateGridForPermissions(Mscrm.FormRoleAssignment.$Q,
        Mscrm.FormRoleAssignment.canAssignRoles)
};
Mscrm.FormRoleAssignment.onOkPress = function() {
    Mscrm.FormRoleAssignment.$T = Mscrm.RoleAssignmentHelper.setSelectedRoles();
    var $v_0 = Mscrm.RoleAssignmentHelper
            .extractDisplayConditionsFromGrid(Mscrm.FormRoleAssignment.displayConditionsXml,
                Mscrm.FormRoleAssignment.$T,
                false),
        $v_1 = new RemoteCommand("FormEditorWebService", "SetFormDisplayConditions");
    $v_1.SetParameter("formId", Mscrm.FormRoleAssignment.$7);
    $v_1.SetParameter("displayConditionsXml", $v_0);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) return $v_0;
    else return ""
};
Mscrm.FormRoleAssignment.onClickVisibleToEveryone = function() {
    Mscrm.RoleAssignmentHelper.onClickVisibleToEveryone(Mscrm.FormRoleAssignment.$Q)
};
Mscrm.FormRoleAssignment.onClickVisibleToSelectedRoles = function() {
    Mscrm.RoleAssignmentHelper.onClickVisibleToSelectedRoles(Mscrm.FormRoleAssignment.$Q)
};
Mscrm.FormRoleAssignment.onClickFallbackCheckBox = function() { Mscrm.RoleAssignmentHelper.onClickFallbackCheckBox() };
Mscrm.FormRoleAssignment.persistRoleChangesInFormXml = function(formXml, displayConditionsXmlString) {
    var $v_0 = XUI.Xml.LoadXml(displayConditionsXmlString),
        $v_1 = XUI.Xml.SelectSingleNode($v_0, "DisplayConditions", null),
        $v_2 = XUI.Xml.SelectSingleNode(formXml, "/entity/form/DisplayConditions", null);
    if (!IsNull($v_2)) XUI.Xml.SelectSingleNode(formXml, "/entity/form", null).replaceChild($v_1, $v_2);
    else XUI.Xml.SelectSingleNode(formXml, "/entity/form", null).appendChild($v_1)
};
Mscrm.FormsOrder = function() {};
Mscrm.FormsOrder.onLoadFormsOrderPage = function() {
    var $v_0 = getDialogArguments(),
        $v_1 = $v_0["type"] ? $v_0["type"] : 100,
        $v_2 = $v_0["objectTypeCode"] ? $v_0["objectTypeCode"] : -1;
    Mscrm.FormsOrder.$0 = [];
    var $v_3 = new RemoteCommand("FormEditorWebService", "GetFormsOrderInfo");
    $v_3.SetParameter("type", $v_1);
    $v_3.SetParameter("objectTypeCode", $v_2);
    var $v_4 = $v_3.Execute();
    if ($v_4.Success) {
        var $v_5 = $v_4.ReturnValue.toString();
        if (!isNullOrEmptyString($v_5)) {
            Mscrm.FormsOrder.$b = XUI.Xml.LoadXml($v_5);
            for (var $v_6 = XUI.Xml.SelectNodes(Mscrm.FormsOrder.$b, "/formsOrderInfo/form", null), $v_7 = 0;
                $v_7 < $v_6.length;
                $v_7++) {
                var $v_8 = $v_6[$v_7].attributes.getNamedItem("displayOrder").nodeValue,
                    $v_9 = $v_6[$v_7].attributes.getNamedItem("name").nodeValue,
                    $v_A = $v_6[$v_7].attributes.getNamedItem("formId").nodeValue,
                    $v_B = $v_6[$v_7].attributes.getNamedItem("canCustomize").nodeValue;
                Mscrm.FormsOrder.$0[$v_7] = $v_A + ":" + $v_8 + ":" + $v_B;
                addValueInFormControl($v_9, Mscrm.FormsOrder.$0[$v_7])
            }
        }
    }
};
Mscrm.FormsOrder.onOkPress = function(formsOrderDataXml) {
    Mscrm.FormsOrder.$1E(formsOrderDataXml);
    Mscrm.FormsOrder.resolveTies();
    var $v_0 = Mscrm.FormsOrder.getUpdatedFormsOrderXml(formsOrderDataXml),
        $v_1 = new RemoteCommand("FormEditorWebService", "SetFormsOrderInfo");
    $v_1.SetParameter("formsOrderInfoXml", $v_0);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        Mscrm.CrmLocalStorage.clear();
        return $v_0
    } else return ""
};
Mscrm.FormsOrder.getUpdatedFormsOrderXml = function(formsOrderDataXml) {
    var $v_0 = "";
    if (!isNullOrEmptyString(formsOrderDataXml)) {
        for (var $v_1 = XUI.Xml.LoadXml("<formsOrderInfo/>"),
            $v_2 = XUI.Xml.LoadXml(formsOrderDataXml),
            $v_3 = XUI.Xml.SelectNodes($v_2, "/values/value[@description != '']", null),
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            var $v_5 = $v_3[$v_4].attributes.getNamedItem("description").nodeValue;
            if ($v_5 !== Mscrm.FormsOrder.$0[$v_4]) {
                var $v_6 = $v_5.split(":")[0],
                    $v_7 = Mscrm.FormsOrder.$0[$v_4].split(":")[1],
                    $v_8 = Mscrm.FormsOrder.$0[$v_4].split(":")[2];
                if ($v_8 === "1") {
                    var $v_9 = $v_1.createElement("form");
                    Mscrm.FormXmlUtils.addAttribute($v_9, "formId", $v_6);
                    Mscrm.FormXmlUtils.addAttribute($v_9, "displayOrder", $v_7);
                    XUI.Xml.DomUtils.GetFirstChild($v_1).appendChild($v_9)
                }
            }
        }
        $v_0 = XUI.Xml.XMLSerializer.serializeToString($v_1)
    }
    return $v_0
};
Mscrm.FormsOrder.resolveTies = function() {
    for (var $v_0 = 0; $v_0 < Mscrm.FormsOrder.$0.length - 1; $v_0++)
        for (var $v_1 = Mscrm.FormsOrder.$0[$v_0].split(":")[1], $v_2 = 1, $v_3 = $v_0 + 1;
            $v_3 < Mscrm.FormsOrder.$0.length;
            $v_3++) {
            var $v_4 = Mscrm.FormsOrder.$0[$v_3].split(":")[1];
            if (!isNullOrEmptyString($v_1) && $v_1 === $v_4) {
                var $v_5 = 2147483647;
                if (parseInt($v_4, 10) < 2147483647 && 2147483647 - parseInt($v_4, 10) >= $v_2
                ) $v_5 = parseInt($v_4, 10) + $v_2;
                $v_4 = $v_5.toString();
                Mscrm.FormsOrder.$0[$v_3] = Mscrm.FormsOrder.$0[$v_3].split(":")[0] +
                    ":" +
                    $v_4 +
                    ":" +
                    Mscrm.FormsOrder.$0[$v_3].split(":")[2];
                $v_2++
            }
        }
    for (var $v_6 = Mscrm.FormsOrder.$0.length - 1; $v_6 > 0; $v_6--)
        for (var $v_7 = Mscrm.FormsOrder.$0[$v_6].split(":")[1], $v_8 = 1, $v_9 = $v_6 - 1; $v_9 >= 0; $v_9--) {
            var $v_A = Mscrm.FormsOrder.$0[$v_9].split(":")[1];
            if (!isNullOrEmptyString($v_7) && $v_7 === $v_A) {
                var $v_B = parseInt($v_A, 10) - $v_8;
                $v_A = $v_B.toString();
                Mscrm.FormsOrder.$0[$v_9] = Mscrm.FormsOrder.$0[$v_9].split(":")[0] +
                    ":" +
                    $v_A +
                    ":" +
                    Mscrm.FormsOrder.$0[$v_9].split(":")[0];
                $v_8++
            }
        }
};
Mscrm.FormsOrder.$1E = function($p0) {
    if (!isNullOrEmptyString($p0))
        for (var $v_0 = XUI.Xml.LoadXml("<formsOrderInfo/>"),
            $v_1 = XUI.Xml.LoadXml($p0),
            $v_2 = XUI.Xml.SelectNodes($v_1, "/values/value[@description != '']", null),
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) {
            var $v_4 = $v_2[$v_3].attributes.getNamedItem("description").nodeValue;
            if ($v_4 !== Mscrm.FormsOrder.$0[$v_3]) {
                var $v_5 = Mscrm.FormsOrder.$0[$v_3].split(":")[2];
                if ($v_5 === "0") {
                    alert(window.LOCID_FORMS_ORDER_INFO_MESSAGE);
                    break
                }
            }
        }
};
Mscrm.EntityDescriptor = function() {};
Mscrm.EntityDescriptor.prototype = {
    $O_0: null,
    get_localizedName: function() { return this.$O_0 },
    set_localizedName: function(value) {
        this.$O_0 = value;
        return value
    },
    $I_0: null,
    get_logicalName: function() { return this.$I_0 },
    set_logicalName: function(value) {
        this.$I_0 = value;
        return value
    },
    $N_0: null,
    get_entityCode: function() { return this.$N_0 },
    set_entityCode: function(value) {
        this.$N_0 = value;
        return value
    },
    $H_0: false,
    get_isPrimary: function() { return this.$H_0 },
    set_isPrimary: function(value) {
        this.$H_0 = value;
        return value
    }
};
Mscrm.FieldDescriptor = function() {};
Mscrm.FieldDescriptor.prototype = {
    $G_0: null,
    get_entityObjectCode: function() { return this.$G_0 },
    set_entityObjectCode: function(value) {
        this.$G_0 = value;
        return value
    },
    $A_0: null,
    get_name: function() { return this.$A_0 },
    set_name: function(value) {
        this.$A_0 = value;
        return value
    },
    $6_0: null,
    get_displayName: function() { return this.$6_0 },
    set_displayName: function(value) {
        this.$6_0 = value;
        return value
    }
};
Mscrm.FormLibraryAndEventHandlerUtils = function() {};
Mscrm.FormLibraryAndEventHandlerUtils
    .get_libraryXslDoc = function() { return Mscrm.FormLibraryAndEventHandlerUtils.$L };
Mscrm.FormLibraryAndEventHandlerUtils.get_eventXslDoc = function() { return Mscrm.FormLibraryAndEventHandlerUtils.$K };
Mscrm.FormLibraryAndEventHandlerUtils
    .onLoadControl = function(disableControlSelector, controlType, controlToSelect, objectTypeCode) {
        if (!Mscrm.FormLibraryAndEventHandlerUtils.$P) {
            Mscrm.FormLibraryAndEventHandlerUtils.$D = objectTypeCode;
            Mscrm.FormLibraryAndEventHandlerUtils.renderFormLibrarycontrol();
            Mscrm.FormLibraryAndEventHandlerUtils.$1T(disableControlSelector, controlToSelect);
            Mscrm.FormLibraryAndEventHandlerUtils.populateEventsCombo(controlType);
            Mscrm.FormLibraryAndEventHandlerUtils.$17(controlType);
            Mscrm.FormLibraryAndEventHandlerUtils.$P = true
        }
    };
Mscrm.FormLibraryAndEventHandlerUtils.onLoadFromEntityPage = function(entities) {
    if (!Mscrm.FormLibraryAndEventHandlerUtils.$P) {
        Mscrm.FormLibraryAndEventHandlerUtils.renderFormLibrarycontrol();
        Mscrm.FormLibraryAndEventHandlerUtils.populateEventsCombo(2);
        Mscrm.FormLibraryAndEventHandlerUtils.$1U();
        var $v_0 = $get("formEventHandlerDescriptionLabel");
        if (!IsNull($v_0)) $v_0.innerText = window.LOCID_HOMEGRID_EVENTS_LABEL;
        var $v_1 = $get("formLibrariesDescriptionLabel");
        if (!IsNull($v_1)) $v_1.innerText = window.LOCID_HOMEGRID_LIBRARIES_LABEL;
        Mscrm.FormLibraryAndEventHandlerUtils.$P = true
    }
    Mscrm.FormLibraryAndEventHandlerUtils.$11(entities);
    Mscrm.FormLibraryAndEventHandlerUtils.onChangeEntityCombo()
};
Mscrm.FormLibraryAndEventHandlerUtils.onEntitiesListChanged = function(entities) {
    Mscrm.FormLibraryAndEventHandlerUtils.$11(entities);
    Mscrm.FormLibraryAndEventHandlerUtils.onChangeEntityCombo()
};
Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.FormLibraryAndEventHandlerUtils.formXml)) return;
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
        "/entity/form/formLibraries/Library",
        null);
    if (!IsNull($v_0) && $v_0.length > 0)
        for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            !IsNull($v_0[$v_3].attributes.getNamedItem("displayName")) &&
                $v_0[$v_3].attributes.removeNamedItem("displayName");
            !IsNull($v_0[$v_3].attributes.getNamedItem("description")) &&
                $v_0[$v_3].attributes.removeNamedItem("description")
        }
    var $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events",
        null);
    Mscrm.FormLibraryAndEventHandlerUtils.$l($v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form/tabs/tab/events", null);
    Mscrm.FormLibraryAndEventHandlerUtils.$l($v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form/events", null);
    Mscrm.FormLibraryAndEventHandlerUtils.$l($v_1);
    var $v_2 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
        "/entity/form/formLibraries",
        null);
    !IsNull($v_2) && !XUI.Xml.DomUtils.HasChildElements($v_2) && $v_2.parentNode.removeChild($v_2)
};
Mscrm.FormLibraryAndEventHandlerUtils.removeGridControlEvents = function(controlName) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.FormLibraryAndEventHandlerUtils.formXml)) return;
    for (var $v_0 = String.format('{0}[@control = "{1}"]', "/entity/form/events/event", controlName),
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_0, null),
        $v_2 = 0;
        $v_2 < $v_1.length;
        ++$v_2) {
        var $v_3 = $v_1[$v_2];
        $v_3.parentNode.removeChild($v_3)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.removeRelatedEntityGridControlEvents = function(relatedEntityTypeCode) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.FormLibraryAndEventHandlerUtils.formXml)) return;
    var $v_0 = Xrm.Internal.getEntityName(relatedEntityTypeCode);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
        for (var $v_1 = $get("controlTypeCombo"),
            $v_2 = Mscrm.InternalUtilities.JSTypes.isNull($v_1) ? "" : (new Mscrm.ControlInfo($v_1.value)).$4_0,
            $v_3 = String.format('{0}[@control = "{1}" and @relationship = "{2}"]',
                "/entity/form/events/event",
                $v_2,
                $v_0),
            $v_4 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_3, null),
            $v_5 = 0;
            $v_5 < $v_4.length;
            ++$v_5) {
            var $v_6 = $v_4[$v_5];
            $v_6.parentNode.removeChild($v_6)
        }
};
Mscrm.FormLibraryAndEventHandlerUtils.updateControlForGridEvents = function(oldControlName, newControlName) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.FormLibraryAndEventHandlerUtils.formXml)) return;
    for (var $v_0 = String.format('{0}[@control = "{1}"]', "/entity/form/events/event", oldControlName),
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_0, null),
        $v_2 = 0;
        $v_2 < $v_1.length;
        ++$v_2) {
        var $v_3 = $v_1[$v_2];
        Mscrm.FormXmlUtils.setAttributeValue($v_3, "control", newControlName)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.expandCollapseLibrarySection = function() {
    var $v_0 = $get("librarySection");
    Mscrm.FormLibraryAndEventHandlerUtils.$v($v_0);
    var $v_1 = $get("librarySectionImage"), $v_2 = $get("libraryGrid"), $v_3 = $get("handlerGrid");
    if ($v_0.style.display === "none") {
        $v_1.setAttribute("src", window.CDNURL + "/_imgs/tab_section_right.png");
        $v_3.style.height = "230px"
    } else {
        $v_1.setAttribute("src", window.CDNURL + "/_imgs/tab_section_down.png");
        var $v_4 = $get("handlerSection");
        if ($v_4.style.display === "none") $v_2.style.height = "230px";
        else {
            $v_2.style.height = "115px";
            $v_3.style.height = "115px"
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.expandCollapseHandlerSection = function() {
    var $v_0 = $get("handlerSection");
    Mscrm.FormLibraryAndEventHandlerUtils.$v($v_0);
    var $v_1 = $get("handlerSectionImage"), $v_2 = $get("libraryGrid"), $v_3 = $get("handlerGrid");
    if ($v_0.style.display === "none") {
        $v_1.setAttribute("src", window.CDNURL + "/_imgs/tab_section_right.png");
        $v_2.style.height = "230px"
    } else {
        $v_1.setAttribute("src", window.CDNURL + "/_imgs/tab_section_down.png");
        var $v_4 = $get("librarySection");
        if ($v_4.style.display === "none") $v_3.style.height = "230px";
        else {
            $v_2.style.height = "115px";
            $v_3.style.height = "115px"
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.setLibraryActive = function(domEvent) {
    Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary = Mscrm.FormLibraryAndEventHandlerUtils
        .$w(domEvent, Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)
};
Mscrm.FormLibraryAndEventHandlerUtils.setHandlerActive = function(domEvent) {
    Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler = Mscrm.FormLibraryAndEventHandlerUtils
        .$w(domEvent, Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)
};
Mscrm.FormLibraryAndEventHandlerUtils.renderFormLibrarycontrol = function() {
    Mscrm.FormLibraryAndEventHandlerUtils.$W = {};
    var $v_0 = "",
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            "/entity/form/formLibraries/Library",
            null);
    if (!IsNull($v_1) && $v_1.length > 0) $v_0 = $v_1[0].attributes.getNamedItem("libraryUniqueId").nodeValue;
    var $v_2 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
        "/entity/form/formLibraries",
        null);
    Mscrm.FormLibraryAndEventHandlerUtils.$1H($v_2);
    Mscrm.FormLibraryAndEventHandlerUtils.$M($v_0)
};
Mscrm.FormLibraryAndEventHandlerUtils.renderWebResourceLibrarycontrol = function() {
    Mscrm.FormLibraryAndEventHandlerUtils.$W = {};
    var $v_0 = "",
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml,
            "/Dependencies/Dependency/Library",
            null);
    if (!IsNull($v_1) && $v_1.length > 0) $v_0 = $v_1[0].attributes.getNamedItem("libraryUniqueId").nodeValue;
    Mscrm.FormLibraryAndEventHandlerUtils.$3 = true;
    Mscrm.FormLibraryAndEventHandlerUtils.$M($v_0)
};
Mscrm.FormLibraryAndEventHandlerUtils
    .renderEventHandlerControl = function() { Mscrm.FormLibraryAndEventHandlerUtils.onChangeEventCombo() };
Mscrm.FormLibraryAndEventHandlerUtils.onChangeControlCombo = function() {
    var $v_0 = $get("controlTypeCombo"), $v_1 = new Mscrm.ControlInfo($v_0.value), $v_2 = $v_1.$1_0;
    Mscrm.FormLibraryAndEventHandlerUtils.$17($v_2);
    Mscrm.FormLibraryAndEventHandlerUtils.populateEventsCombo($v_2)
};
Mscrm.FormLibraryAndEventHandlerUtils.onChangeEventCombo = function() {
    Mscrm.FormLibraryAndEventHandlerUtils.$o();
    if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
        var $v_0 = $get("eventTypeCombo"), $v_1 = $v_0.value.split(":")[0], $v_2 = $get("columnCombo");
        $v_2.disabled = "onchange" !== $v_1
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.onChangeEntityCombo = function() {
    window.setTimeout(function() {
            var $v_0 = $get("entityCombo"), $v_1 = $v_0.value.split(":")[1];
            Mscrm.FormLibraryAndEventHandlerUtils.populateColumnCombo($v_1);
            Mscrm.FormLibraryAndEventHandlerUtils.$o()
        },
        50)
};
Mscrm.FormLibraryAndEventHandlerUtils.onChangeColumnCombo = function() { Mscrm.FormLibraryAndEventHandlerUtils.$o() };
Mscrm.FormLibraryAndEventHandlerUtils.$1F = function($p0) {
    var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("cell");
    Mscrm.FormXmlUtils.addAttribute($v_0, "id", Mscrm.Utilities.createGuid());
    Mscrm.FormXmlUtils.addAttribute($v_0, "showlabel", $p0.attributes.getNamedItem("name").nodeValue.toString());
    var $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("labels"),
        $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("label"),
        $v_3 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($p0)),
        $v_4 = XUI.Xml.SelectNodes($v_3, "/field/displaynames/displayname", null);
    Mscrm.FormXmlUtils.addAttribute($v_2,
        "description",
        $v_4[0].attributes.getNamedItem("description").nodeValue.toString());
    Mscrm.FormXmlUtils.addAttribute($v_2,
        "languagecode",
        $v_4[0].attributes.getNamedItem("languagecode").nodeValue.toString());
    $v_1.appendChild($v_2);
    $v_0.appendChild($v_1);
    var $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("control");
    Mscrm.FormXmlUtils.addAttribute($v_5, "id", $p0.attributes.getNamedItem("name").nodeValue.toString());
    Mscrm.FormXmlUtils.addAttribute($v_5, "classid", "{4273EDBD-AC1D-40d3-9FB2-095C621B552D}");
    Mscrm.FormXmlUtils.addAttribute($v_5, "datafieldname", $p0.attributes.getNamedItem("name").nodeValue.toString());
    $v_0.appendChild($v_5);
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$1D = function($p0) {
    var $v_0 = [], $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.getConstituentFields($p0);
    if ($v_1)
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++)
            $v_0[$v_2] = Mscrm.FormLibraryAndEventHandlerUtils
                .$1F(XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml,
                    "entity/fields/field[@name = '" + $v_1[$v_2] + "']",
                    null));
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.getConstituentFields = function(compositeField) {
    switch (compositeField) {
    case "fullname":
        return ["firstname", "middlename", "lastname"];
    case "yomifullname":
        return ["yomifirstname", "yomimiddlename", "yomilastname"];
    case "address1_composite":
        return [
            "address1_line1", "address1_line2", "address1_line3", "address1_city", "address1_stateorprovince",
            "address1_postalcode", "address1_country"
        ];
    case "address2_composite":
        return [
            "address2_line1", "address2_line2", "address2_line3", "address2_city", "address2_stateorprovince",
            "address2_postalcode", "address2_country"
        ];
    case "billto_composite":
        return [
            "billto_line1", "billto_line2", "billto_line3", "billto_city", "billto_stateorprovince",
            "billto_postalcode", "billto_country"
        ];
    case "shipto_composite":
        return [
            "shipto_line1", "shipto_line2", "shipto_line3", "shipto_city", "shipto_stateorprovince",
            "shipto_postalcode", "shipto_country"
        ];
    default:
        return null
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$19 = function($p0, $p1) {
    var $v_0 = "", $v_1 = "", $v_2 = 1, $v_3 = null, $v_4 = null, $v_5 = null;
    $v_3 = XUI.Xml.SelectSingleNode($p0,
        "labels/label[@languagecode='" + window.USER_LANGUAGE_CODE + "']/@description",
        null);
    $v_4 = XUI.Xml.SelectSingleNode($p0, "control/@id", null);
    $v_5 = XUI.Xml.SelectSingleNode($p0, "control/@classid", null);
    if (!IsNull($v_3) && !IsNull($v_4) && !IsNull($v_5)) {
        if (!Mscrm.FormLibraryAndEventHandlerUtils
            .canElementBeAdded($v_4.nodeValue, $v_5.nodeValue, Mscrm.FormLibraryAndEventHandlerUtils.$D)) return;
        $v_0 = $v_3.nodeValue;
        if ($v_5.nodeValue.toUpperCase() === "{FD2A7985-3187-444e-908D-6624B21F69C0}".toUpperCase()) $v_2 = 0;
        else $v_2 = 1;
        $v_1 = $p0.attributes.getNamedItem("id").nodeValue + ":" + $v_2 + ":" + $v_4.nodeValue;
        var $v_6 = document.createElement("OPTION");
        XUI.Html.SetText($v_6, $v_0);
        $v_6.setAttribute("value", $v_1);
        $v_6.title = XUI.Html.GetText($v_6);
        var $v_7 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
            $v_4.nodeValue +
            "']",
            null);
        !$v_7 && $p1.appendChild($v_6)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1U = function() {
    var $v_0 = $get("controlTypeCombo"), $v_1 = document.createElement("OPTION"), $v_2 = "Grids";
    XUI.Html.SetText($v_1, window.LOCID_EGC_CONTROL_LABEL);
    $v_1.setAttribute("value", String.format("{0}:{1}:{2}", "", 2, $v_2));
    $v_1.title = XUI.Html.GetText($v_1);
    $v_0.appendChild($v_1);
    Mscrm.FormLibraryAndEventHandlerUtils.$15($v_0, $v_2);
    $v_0.disabled = true
};
Mscrm.FormLibraryAndEventHandlerUtils.$1T = function($p0, $p1) {
    var $v_0 = $get("controlTypeCombo"), $v_1 = document.createElement("OPTION");
    $v_1.text = window.LOCID_FORM_CAPTION;
    $v_1.value = Mscrm.FormControlTypes.toString(4) + ":" + 4 + ":" + Mscrm.FormControlTypes.toString(4);
    $v_1.title = $v_1.text;
    $v_0.add($v_1);
    var $v_2 = document.createElement("OPTGROUP");
    $v_2.setAttribute("label", window.LOCID_TABS_GROUP_CAPTION);
    var $v_3 = document.createElement("OPTGROUP");
    $v_3.setAttribute("label", window.LOCID_FIELDS_GROUP_CAPTION);
    var $v_4 = document.createElement("OPTGROUP");
    $v_4.setAttribute("label", window.LOCID_GRIDS_GROUP_CAPTION);
    var $v_5 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form/tabs/tab", null);
    Mscrm.FormLibraryAndEventHandlerUtils.$s($v_5, $v_2, 5, $v_4);
    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
        var $v_7 = Mscrm.FormXmlUtils.getAttributeValue($v_5[$v_6], "locklevel");
        if ($v_7 === "1") continue;
        for (var $v_8 = Mscrm.FormXmlUtils.getAttributeValue($v_5[$v_6], "id"),
            $v_9 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                String.format("/entity/form/tabs/tab[@id = '{0}']/columns/column/sections/section", $v_8),
                null),
            $v_A = 0;
            $v_A < $v_9.length;
            $v_A++) {
            var $v_B = Mscrm.FormXmlUtils.getAttributeValue($v_9[$v_A], "locklevel");
            if ($v_B === "1") continue;
            var $v_C = Mscrm.FormXmlUtils.getAttributeValue($v_9[$v_A], "id"),
                $v_D = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                    String
                    .format("/entity/form/tabs/tab[@id = '{0}']/columns/column/sections/section[@id = '{1}']/rows/row/cell", $v_8, $v_C),
                    null);
            Mscrm.FormLibraryAndEventHandlerUtils.$s($v_D, $v_3, 1, $v_4)
        }
    }
    $v_2.hasChildNodes() && $v_0.appendChild($v_2);
    $v_3.hasChildNodes() && $v_0.appendChild($v_3);
    $p0 && $v_4.hasChildNodes() && $v_0.appendChild($v_4);
    Mscrm.FormLibraryAndEventHandlerUtils.$15($v_0, $p1);
    if ($p0) $v_0.disabled = true
};
Mscrm.FormLibraryAndEventHandlerUtils.populateEventsCombo = function(controlType) {
    var $v_0 = $get("eventTypeCombo");
    $v_0.innerHTML = "";
    var $v_1 = Mscrm.ControlEventInfo
            .getDataEvents(controlType),
        $v_2 = Mscrm.ControlEventInfo.getUIEvents(controlType);
    Mscrm.FormLibraryAndEventHandlerUtils.$t($v_1, window.LOCID_DATAEVENTS_LABEL, $v_0);
    Mscrm.FormLibraryAndEventHandlerUtils.$t($v_2, window.LOCID_UIEVENTS_LABEL, $v_0);
    var $v_3 = $v_0.value;
    if (!isNullOrEmptyString($v_3)) {
        $v_3 = $v_3.split(":")[0];
        var $v_4 = $get("controlTypeCombo"),
            $v_5 = new Mscrm.ControlInfo($v_4.value),
            $v_6 = Mscrm.FormXmlUtils.getEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                $v_3,
                $v_5,
                Mscrm.FormLibraryAndEventHandlerUtils.$S(),
                Mscrm.FormLibraryAndEventHandlerUtils.$R());
        Mscrm.FormLibraryAndEventHandlerUtils.$F($v_6, "")
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.populateColumnCombo = function(objectTypeCode) {
    var $v_0 = $get("columnCombo");
    if (IsNull($v_0)) return;
    var $v_1 = new Array(0);
    if (objectTypeCode in Mscrm.FormLibraryAndEventHandlerUtils.$U
    ) $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.$U[objectTypeCode];
    else $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.$1K(objectTypeCode);
    $v_0.innerHTML = "";
    for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5], $v_3 = document.createElement("OPTION");
        XUI.Html.SetText($v_3, $v_2.$6_0);
        $v_3.setAttribute("value", $v_2.$A_0);
        $v_3.title = $v_2.$6_0;
        $v_0.appendChild($v_3)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.loadEventTabXml = function(oFormXml, oFieldsXml, oPropertiesXml) {
    if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
        var $v_0 = XUI.Xml.XMLSerializer.serializeToString(oFormXml);
        Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml($v_0);
        Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = oFieldsXml;
        Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = oPropertiesXml
    }
};
Mscrm.FormLibraryAndEventHandlerUtils
    .loadEventsTab = function(oFormXml, oFieldsXml, oPropertiesXml, cellId, objectCode) {
        if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
            Mscrm.FormLibraryAndEventHandlerUtils.loadEventTabXml(oFormXml, oFieldsXml, oPropertiesXml);
            Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(true, 2, cellId, objectCode)
        }
    };
Mscrm.FormLibraryAndEventHandlerUtils.addLibrary = function(isWebResourcesDependentLibraries) {
    Mscrm.FormLibraryAndEventHandlerUtils.$3 = isWebResourcesDependentLibraries;
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("libraryLookup");
    $v_0.set_disableInlineLookup(true);
    if (Mscrm.FormLibraryAndEventHandlerUtils.$3) {
        $v_0.AddParam("filterSavedSelectorQuery", "true");
        $v_0.set_disableNewButton(true)
    }
    $v_0.add_change(Mscrm.FormLibraryAndEventHandlerUtils.addLibraryCallback);
    Mscrm.Utilities.click($v_0.get_element())
};
Mscrm.FormLibraryAndEventHandlerUtils.addLibraryCallback = function(sender, args) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("libraryLookup");
    if (!IsNull($v_0.get_dataValue())) {
        var $v_1 = null, $v_2 = null, $v_3 = $v_0.get_dataValue()[0], $v_4 = $v_3.keyValues.name.value;
        if (Mscrm.FormLibraryAndEventHandlerUtils.$3) {
            $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml,
                "/Dependencies/Dependency",
                null);
            $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml.createElement("Library")
        } else {
            $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                "/entity/form/formLibraries",
                null);
            if (IsNull($v_1)) {
                $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("formLibraries");
                XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form", null)
                    .appendChild($v_1)
            }
            if (XUI.Xml.SelectNodes($v_1, "Library", null).length >= 50) {
                alert(String.format(window.LOCID_MAX_LIBRARIES_MESSAGE, "50"));
                return
            }
            $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.formXml.createElement("Library")
        }
        Mscrm.FormXmlUtils.addAttribute($v_2, "name", $v_4);
        var $v_5 = Mscrm.Utilities.createGuid();
        Mscrm.FormXmlUtils.addAttribute($v_2, "libraryUniqueId", $v_5);
        $v_1.appendChild($v_2);
        Mscrm.FormLibraryAndEventHandlerUtils.$M($v_5);
        $v_0.Clear(false)
    }
    $v_0.remove_change(Mscrm.FormLibraryAndEventHandlerUtils.addLibraryCallback)
};
Mscrm.FormLibraryAndEventHandlerUtils.removeLibrary = function(isWebResourcesDependentLibraries) {
    Mscrm.FormLibraryAndEventHandlerUtils.$3 = isWebResourcesDependentLibraries;
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)) {
        var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary.id, $v_1 = null;
        if (Mscrm.FormLibraryAndEventHandlerUtils.$3)
            $v_1 = Mscrm.FormXmlUtils
                .getWebResourcesLibraryNode($v_0, Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml);
        else $v_1 = Mscrm.FormXmlUtils.getLibraryNode($v_0, Mscrm.FormLibraryAndEventHandlerUtils.formXml);
        if (!IsNull($v_1) && Mscrm.FormLibraryAndEventHandlerUtils.$1R()) {
            !Mscrm.FormLibraryAndEventHandlerUtils.$3 &&
                Mscrm.FormLibraryAndEventHandlerUtils.$1W(Mscrm.FormLibraryAndEventHandlerUtils.$1M($v_1));
            var $v_2 = XUI.Html.DomUtils.GetPrevSibling($v_1), $v_3 = "";
            if (IsNull($v_2)) $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
            if (!IsNull($v_2)) $v_3 = $v_2.attributes.getNamedItem("libraryUniqueId").nodeValue;
            $v_1.parentNode.removeChild($v_1);
            Mscrm.FormLibraryAndEventHandlerUtils.$M($v_3);
            !Mscrm.FormLibraryAndEventHandlerUtils.$3 &&
                Mscrm.FormLibraryAndEventHandlerUtils.$F(Mscrm.FormLibraryAndEventHandlerUtils.$X(), "")
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1R = function() {
    return !Mscrm.FormLibraryAndEventHandlerUtils.$3 && confirm(window.LOCID_REMOVE_LIBRARY_WARNING) ||
        Mscrm.FormLibraryAndEventHandlerUtils.$3 && confirm(window.LOCID_WR_REMOVE_LIBRARY_WARNING)
};
Mscrm.FormLibraryAndEventHandlerUtils.moveLibraryUp = function() {
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)) {
        var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary.id,
            $v_1 = Mscrm.FormXmlUtils.getLibraryNode($v_0, Mscrm.FormLibraryAndEventHandlerUtils.formXml);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetPrevSibling($v_1);
            if (!IsNull($v_2)) {
                $v_1.parentNode.insertBefore($v_1, $v_2);
                Mscrm.FormLibraryAndEventHandlerUtils.$M($v_0)
            }
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.moveLibraryDown = function() {
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)) {
        var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary.id,
            $v_1 = Mscrm.FormXmlUtils.getLibraryNode($v_0, Mscrm.FormLibraryAndEventHandlerUtils.formXml);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
            if (!IsNull($v_2)) {
                $v_2 = XUI.Html.DomUtils.GetNextSibling($v_2);
                $v_1.parentNode.insertBefore($v_1, $v_2);
                Mscrm.FormLibraryAndEventHandlerUtils.$M($v_0)
            }
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.editLibrary = function() {
    Mscrm.FormLibraryAndEventHandlerUtils.$u(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)
};
Mscrm.FormLibraryAndEventHandlerUtils.handleLibraryKeyPress = function(domEvent) {
    if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 13) {
        Mscrm.FormLibraryAndEventHandlerUtils.setLibraryActive(domEvent);
        Mscrm.FormLibraryAndEventHandlerUtils.editLibrary()
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.addHandler = function() {
    var $v_0 = Mscrm.CrmUri.create("/tools/formeditor/dialogs/handlereditor.aspx"),
        $v_1 = {},
        $v_2 = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            "/entity/form/formLibraries/Library",
            null);
    if (!IsNull($v_2) && $v_2.length > 0) {
        $v_1["libraryNodes"] = $v_2;
        $v_1["formXml"] = Mscrm.FormLibraryAndEventHandlerUtils.formXml;
        $v_1["fieldsXml"] = Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml;
        $v_1["propertiesXml"] = Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml;
        $v_1["handlerObj"] = new Mscrm.EventHandler("", "", "", false, true, "");
        var $v_3 = $get("eventTypeCombo"),
            $v_4 = $get("controlTypeCombo"),
            $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.$S(),
            $v_6 = Mscrm.FormLibraryAndEventHandlerUtils.$R(),
            $v_7 = $v_3.value.split(":")[0],
            $v_8 = Mscrm.ControlEventInfo.getEventType($v_7),
            $v_9 = new Mscrm.ControlInfo($v_4.value),
            $v_A = Mscrm.FormXmlUtils.getEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                $v_7,
                $v_9,
                $v_5,
                $v_6);
        if (IsNull($v_A))
            $v_A = Mscrm.FormXmlUtils.addEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                $v_7,
                $v_9,
                $v_5,
                $v_6);
        $v_1["handlerEventNode"] = $v_A;
        var $v_B = new Xrm.DialogOptions;
        $v_B.height = 480;
        $v_B.width = 620;
        var $v_C = [$v_A],
            $v_D = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(Mscrm.FormLibraryAndEventHandlerUtils.refreshEventHandler, $v_C);
        Xrm.Internal.openDialog($v_0.toString(), $v_B, $v_1, null, $v_D)
    } else alert(window.LOCID_ADD_HANDLER_MESSAGE)
};
Mscrm.FormLibraryAndEventHandlerUtils.removeHandler = function() {
    var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.$X();
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "Handlers", null);
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.id,
                $v_3 = XUI.Xml.SelectSingleNode($v_0, "Handlers/Handler[@handlerUniqueId='" + $v_2 + "']", null);
            if (!IsNull($v_3) && confirm(window.LOCID_REMOVE_HANDLER_WARNING)) {
                var $v_4 = "", $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.$z($v_3);
                if (IsNull($v_5)) $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.$y($v_3);
                if (!IsNull($v_5)) $v_4 = $v_5.attributes.getNamedItem("handlerUniqueId").nodeValue;
                $v_1.removeChild($v_3);
                Mscrm.FormLibraryAndEventHandlerUtils.$F($v_0, $v_4)
            }
        }
        Mscrm.FormLibraryAndEventHandlerUtils.$12($v_0)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.moveHandlerUp = function() {
    var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.$X();
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "Handlers", null);
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.id,
                $v_3 = XUI.Xml.SelectSingleNode($v_1, "Handler[@handlerUniqueId='" + $v_2 + "']", null);
            if (!IsNull($v_3)) {
                var $v_4 = Mscrm.FormLibraryAndEventHandlerUtils.$z($v_3);
                if (!IsNull($v_4)) {
                    $v_1.insertBefore($v_3, $v_4);
                    Mscrm.FormLibraryAndEventHandlerUtils.$F($v_0, $v_2)
                }
            }
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.moveHandlerDown = function() {
    var $v_0 = Mscrm.FormLibraryAndEventHandlerUtils.$X();
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Xml.SelectSingleNode($v_0, "Handlers", null);
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.id,
                $v_3 = XUI.Xml.SelectSingleNode($v_1, "Handler[@handlerUniqueId='" + $v_2 + "']", null);
            if (!IsNull($v_3)) {
                var $v_4 = Mscrm.FormLibraryAndEventHandlerUtils.$y($v_3);
                if (!IsNull($v_4)) {
                    $v_4 = XUI.Html.DomUtils.GetNextSibling($v_4);
                    $v_1.insertBefore($v_3, $v_4);
                    Mscrm.FormLibraryAndEventHandlerUtils.$F($v_0, $v_2)
                }
            }
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.editHandler = function() {
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)) {
        var $v_0 = Mscrm.CrmUri.create("/tools/formeditor/dialogs/handlereditor.aspx"), $v_1 = {};
        $v_1["libraryNodes"] = XUI.Xml.SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            "/entity/form/formLibraries/Library",
            null);
        $v_1["formXml"] = Mscrm.FormLibraryAndEventHandlerUtils.formXml;
        $v_1["fieldsXml"] = Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml;
        $v_1["propertiesXml"] = Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml;
        var $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.$1L();
        $v_1["handlerObj"] = $v_2;
        var $v_3 = Mscrm.FormLibraryAndEventHandlerUtils.$1I();
        $v_1["handlerEventNode"] = $v_3;
        if (!IsNull($v_3)) $v_1["handlerDependencies"] = XUI.Xml.SelectSingleNode($v_3, "dependencies", null);
        var $v_4 = new Xrm.DialogOptions;
        $v_4.height = 480;
        $v_4.width = 620;
        var $v_5 = [$v_3],
            $v_6 = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(Mscrm.FormLibraryAndEventHandlerUtils.refreshEventHandler, $v_5);
        Xrm.Internal.openDialog($v_0.toString(), $v_4, $v_1, null, $v_6)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.refreshEventHandler = function(result, eventNode) {
    var $v_0 = result;
    !IsNull($v_0) && Mscrm.FormLibraryAndEventHandlerUtils.$F(eventNode, $v_0.handlerUniqueId)
};
Mscrm.FormLibraryAndEventHandlerUtils.handlerKeyPress = function(domEvent) {
    if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 13) {
        Mscrm.FormLibraryAndEventHandlerUtils.setHandlerActive(domEvent);
        Mscrm.FormLibraryAndEventHandlerUtils.editHandler()
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.editHandlerLibrary = function() {
    Mscrm.FormLibraryAndEventHandlerUtils.$u(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)
};
Mscrm.FormLibraryAndEventHandlerUtils.clearEvents = function() {
    if (!Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) return;
    var $v_0 = $get("controlTypeCombo"),
        $v_1 = new Mscrm.ControlInfo($v_0.value),
        $v_2 = Mscrm.FormXmlUtils.getEventsNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_1, -1);
    if (!IsNull($v_2))
        for (var $v_3 = Array.clone($v_2.childNodes), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4];
            if ($v_5.nodeType !== 1) continue;
            var $v_6 = $v_5.attributes.getNamedItem("control");
            !IsNull($v_6) && $v_6.nodeValue === $v_1.$4_0 && $v_2.removeChild($v_5)
        }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1K = function($p0) {
    var $v_0 = new Array(0), $v_1 = new RemoteCommand("FormEditorWebService", "GetPropAndFieldXml");
    $v_1.SetParameter("objectTypeCode", $p0);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        for (var $v_3 = $v_2.ReturnValue,
            $v_4 = XUI.Xml.LoadXml($v_3.anyType[0]),
            $v_5 = XUI.Xml.LoadXml($v_3.anyType[1]),
            $v_6 = XUI.Xml.SelectNodes($v_4, "entity/fields/field[@validforgrid = 'true']", null),
            $v_7 = "entity/fields/field[@name = '{0}']/displaynames/displayname[@languagecode='{1}']",
            $$arr_9 = $v_6,
            $$len_A = $$arr_9.length,
            $$idx_B = 0;
            $$idx_B < $$len_A;
            ++$$idx_B) {
            var $v_8 = $$arr_9[$$idx_B],
                $v_9 = Mscrm.FormXmlUtils.getAttributeValue($v_8, "name"),
                $v_A = XUI.Xml.SelectSingleNode($v_5, String.format($v_7, $v_9, window.USER_LANGUAGE_CODE), null),
                $v_B = $v_9;
            if (!IsNull($v_A)) {
                var $v_D = $v_A.attributes.getNamedItem("description");
                if (!IsNull($v_D)) $v_B = $v_D.nodeValue
            }
            var $v_C = new Mscrm.FieldDescriptor;
            $v_C.$G_0 = $p0;
            $v_C.$A_0 = $v_9;
            $v_C.$6_0 = $v_B;
            !Mscrm.FormLibraryAndEventHandlerUtils.$1Q($v_0, $v_C) && $v_0.push($v_C)
        }
        Mscrm.FormLibraryAndEventHandlerUtils.$U[$p0] = $v_0
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$1Q = function($p0, $p1) {
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        if ($v_0.$G_0 === $p1.$G_0 && $v_0.$A_0 === $p1.$A_0 && $v_0.$6_0 === $p1.$6_0) return true
    }
    return false
};
Mscrm.FormLibraryAndEventHandlerUtils.$17 = function($p0) {
    if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
        var $v_0 = $get("entityComboRow"), $v_1 = $get("columnComboRow"), $v_2 = $p0 !== 2;
        Mscrm.FormLibraryAndEventHandlerUtils.$16($v_0, $v_2);
        Mscrm.FormLibraryAndEventHandlerUtils.$16($v_1, $v_2)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$16 = function($p0, $p1) {
    if (!IsNull($p0) && $p1) $p0.setAttribute("hidden", "");
    else $p0.removeAttribute("hidden")
};
Mscrm.FormLibraryAndEventHandlerUtils.$11 = function($p0) {
    var $v_0 = $get("entityCombo");
    $v_0.innerHTML = "";
    for (var $v_1 = 0; $v_1 < $p0.length; ++$v_1) {
        var $v_2 = $p0[$v_1], $v_3 = document.createElement("OPTION");
        XUI.Html.SetText($v_3, $v_2.$O_0);
        $v_3.setAttribute("value", String.format("{0}:{1}:{2}", $v_2.$I_0, $v_2.$N_0, $v_2.$H_0));
        $v_3.title = XUI.Html.GetText($v_3);
        $v_0.appendChild($v_3)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$o = function() {
    var $v_0 = $get("eventTypeCombo"),
        $v_1 = $get("controlTypeCombo"),
        $v_2 = $v_0.value.split(":")[0],
        $v_3 = new Mscrm.ControlInfo($v_1.value),
        $v_4 = Mscrm.FormLibraryAndEventHandlerUtils.$S(),
        $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.$R(),
        $v_6 = Mscrm.FormXmlUtils.getEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_2, $v_3, $v_4, $v_5);
    Mscrm.FormLibraryAndEventHandlerUtils.$F($v_6, "")
};
Mscrm.FormLibraryAndEventHandlerUtils.$1P = function($p0) {
    var $v_0 = false;
    if (!IsNull($p0)) {
        var $v_1 = XUI.Xml.SelectNodes($p0, "Handlers/Handler", null);
        if (!IsNull($v_1) && $v_1.length > 0) $v_0 = true
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$u = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = CrmEncodeDecode.CrmUrlEncode($p0.getAttribute("libraryName").toString()),
            $v_1 = Mscrm.CrmUri.create(String.format("/tools/webresourceeditor/webresourceeditor.aspx?name={0}", $v_0)),
            $v_2 = new Xrm.DialogOptions;
        $v_2.height = 520;
        $v_2.width = 750;
        Xrm.Internal.openDialog($v_1.toString(), $v_2, null, null, null)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$z = function($p0) {
    var $v_0 = null;
    if (!IsNull($p0)) {
        $v_0 = XUI.Html.DomUtils.GetPrevSibling($p0);
        while (!IsNull($v_0) &&
        ($v_0
            .nodeName ===
            "dependencies" ||
            $v_0.nodeName === "script" ||
            $v_0.nodeName === "InternalHandlers")) $v_0 = XUI.Html.DomUtils.GetPrevSibling($v_0)
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$y = function($p0) {
    var $v_0 = null;
    $v_0 = XUI.Html.DomUtils.GetNextSibling($p0);
    while (!IsNull($v_0) &&
    ($v_0
        .nodeName ===
        "dependencies" ||
        $v_0.nodeName === "script" ||
        $v_0.nodeName === "InternalHandlers")) $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0);
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$l = function($p0) {
    if (!IsNull($p0) && $p0.length > 0)
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            for (var $v_1 = XUI.Xml.SelectNodes($p0[$v_0], "event", null), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = XUI.Xml.SelectSingleNode($v_1[$v_2], "Handlers", null);
                !IsNull($v_3) && !XUI.Xml.DomUtils.HasChildElements($v_3) && $v_1[$v_2].removeChild($v_3);
                !XUI.Xml.DomUtils.HasChildElements($v_1[$v_2]) && $p0[$v_0].removeChild($v_1[$v_2])
            }
            !XUI.Xml.DomUtils.HasChildElements($p0[$v_0]) && $p0[$v_0].parentNode.removeChild($p0[$v_0])
        }
};
Mscrm.FormLibraryAndEventHandlerUtils.$15 = function($p0, $p1) {
    if (!IsNull($p0) && !isNullOrEmptyString($p1))
        for (var $v_0 = 0;
            $v_0 < $p0.options.length;
            $v_0++
        ) if (!$p0.options[$v_0].getAttribute("value").toString().search(new RegExp($p1))) $p0.selectedIndex = $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$1H = function($p0) {
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.$W) && !IsNull($p0))
        try {
            var $v_0 = new RemoteCommand("FormEditorWebService", "GetWebResourceInfoForFormXmlLibrariesNode");
            $v_0.SetParameter("librariesNodeText", XUI.Xml.XMLSerializer.serializeToString($p0));
            var $v_1 = $v_0.Execute();
            if ($v_1.Success) {
                var $v_2 = $v_1.ReturnValue,
                    $v_3 = XUI.Xml.LoadXml($v_2),
                    $v_4 = XUI.Xml.SelectSingleNode($v_3, "formLibraries", null);
                XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form", null)
                    .replaceChild($v_4, $p0)
            }
        } catch ($$e_6) {
        }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1L = function() {
    var $v_0 = null;
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)) {
        var $v_1 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.getAttribute("functionName").toString(),
            $v_2 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.getAttribute("libraryName").toString(),
            $v_3 = Mscrm.Utilities.parseBoolean(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler
                .getAttribute("enabled").toString()),
            $v_4 = Mscrm.Utilities.parseBoolean(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler
                .getAttribute("passExecutionContext").toString()),
            $v_5 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.getAttribute("handlerUniqueId")
                .toString(),
            $v_6 = Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler.getAttribute("parameters").toString();
        $v_0 = new Mscrm.EventHandler($v_1, $v_2, $v_5, $v_3, $v_4, $v_6)
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$1I = function() {
    var $v_0 = null,
        $v_1 = $get("eventTypeCombo"),
        $v_2 = $get("controlTypeCombo"),
        $v_3 = Mscrm.FormLibraryAndEventHandlerUtils.$S(),
        $v_4 = Mscrm.FormLibraryAndEventHandlerUtils.$R(),
        $v_5 = $v_1.value.split(":")[0],
        $v_6 = Mscrm.ControlEventInfo.getEventType($v_5),
        $v_7 = new Mscrm.ControlInfo($v_2.value);
    $v_0 = Mscrm.FormXmlUtils.getEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml, $v_5, $v_7, $v_3, $v_4);
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$v = function($p0) {
    if (!IsNull($p0))
        if ($p0.style.display === "none") $p0.style.display = "";
        else $p0.style.display = "none"
};
Mscrm.FormLibraryAndEventHandlerUtils.$w = function($p0, $p1) {
    if (!IsNull($p1)) $p1.style.background = "#ffffff";
    var $v_0 = $p0.target;
    switch ($v_0.tagName) {
    case "TD":
        $v_0 = $v_0.parentNode;
        break;
    case "A":
        $v_0 = $v_0.parentNode.parentNode;
        break
    }
    if (!IsNull($v_0)) $v_0.style.background = "#c4ddff";
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$X = function() {
    var $v_0 = null;
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)) {
        var $v_1 = $get("eventTypeCombo"),
            $v_2 = $get("controlTypeCombo"),
            $v_3 = $v_1.value.split(":")[0],
            $v_4 = new Mscrm.ControlInfo($v_2.value);
        $v_0 = Mscrm.FormXmlUtils.getEventNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            $v_3,
            $v_4,
            Mscrm.FormLibraryAndEventHandlerUtils.$S(),
            Mscrm.FormLibraryAndEventHandlerUtils.$R())
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$t = function($p0, $p1, $p2) {
    if (!IsNull($p0)) {
        var $v_0 = document.createElement("OPTGROUP");
        $v_0.setAttribute("label", $p1);
        var $$dict_6 = $p0;
        for (var $$key_7 in $$dict_6) {
            var $v_1 = { key: $$key_7, value: $$dict_6[$$key_7] }, $v_2 = document.createElement("OPTION");
            XUI.Html.SetText($v_2, $v_1.value.toString());
            $v_2.setAttribute("value", $v_1.key + ":" + $p1);
            $v_2.title = XUI.Html.GetText($v_2);
            $v_0.appendChild($v_2)
        }
        $p2.appendChild($v_0)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1B = function($p0, $p1) {
    for (var $v_0 = "", $v_1 = "", $v_2 = 5, $v_3 = null, $v_4 = 0; $v_4 < $p0.length; $v_4++) {
        $v_3 = XUI.Xml.SelectSingleNode($p0[$v_4],
            "labels/label[@languagecode='" + window.USER_LANGUAGE_CODE + "']/@description",
            null);
        if (!IsNull($v_3)) {
            $v_0 = $v_3.nodeValue;
            $v_1 = $p0[$v_4].attributes.getNamedItem("id").nodeValue +
                ":" +
                $v_2 +
                ":" +
                Mscrm.FormControlTypes.toString($v_2);
            var $v_5 = document.createElement("OPTION");
            XUI.Html.SetText($v_5, $v_0);
            $v_5.setAttribute("value", $v_1);
            $p1.appendChild($v_5)
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1A = function($p0, $p1, $p2) {
    for (var $v_0 = "", $v_1 = "", $v_2 = 1, $v_3 = null, $v_4 = null, $v_5 = null, $v_6 = null, $v_7, $v_8 = 0;
        $v_8 < $p0.length;
        $v_8++) {
        $v_3 = XUI.Xml.SelectSingleNode($p0[$v_8],
            "labels/label[@languagecode='" + window.USER_LANGUAGE_CODE + "']/@description",
            null);
        $v_6 = XUI.Xml.SelectSingleNode($p0[$v_8], "control", null);
        $v_4 = XUI.Xml.SelectSingleNode($p0[$v_8], "control/@id", null);
        $v_5 = XUI.Xml.SelectSingleNode($p0[$v_8], "control/@classid", null);
        $v_7 = Mscrm.FormLibraryAndEventHandlerUtils.$1D($v_4.nodeValue);
        if (!IsNull($v_3) && !IsNull($v_4) && !IsNull($v_5)) {
            if (!Mscrm.FormLibraryAndEventHandlerUtils
                .canElementBeAdded($v_4.nodeValue, $v_5.nodeValue, Mscrm.FormLibraryAndEventHandlerUtils.$D)) continue;
            $v_0 = $v_3.nodeValue;
            if (Mscrm.FormLibraryAndEventHandlerUtils.$1S($v_6)) $v_2 = 2;
            else if ($v_5.nodeValue.toUpperCase() === "{FD2A7985-3187-444e-908D-6624B21F69C0}".toUpperCase()) $v_2 = 0;
            else $v_2 = 1;
            $v_1 = $p0[$v_8].attributes.getNamedItem("id").nodeValue + ":" + $v_2 + ":" + $v_4.nodeValue;
            var $v_9 = document.createElement("OPTION");
            XUI.Html.SetText($v_9, $v_0);
            $v_9.setAttribute("value", $v_1);
            $v_9.title = XUI.Html.GetText($v_9);
            if ($v_2 === 2) $p2.appendChild($v_9);
            else $v_2 !== 2 && $p1.appendChild($v_9);
            if ($v_7)
                for (var $v_A = 0;
                    $v_A < $v_7.length;
                    $v_A++
                ) Mscrm.FormLibraryAndEventHandlerUtils.$19($v_7[$v_A], $p1)
        }
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1S = function($p0) {
    if (IsNull($p0)) return false;
    var $v_0 = $p0.attributes.getNamedItem("classid"), $v_1 = $p0.attributes.getNamedItem("indicationOfSubgrid");
    return !IsNull($v_1) && Boolean.parse($v_1.nodeValue) ||
        !IsNull($v_0) && $v_0.nodeValue.toUpperCase() === "{E7A81278-8635-4d9e-8D4D-59480B391C5B}".toUpperCase()
};
Mscrm.FormLibraryAndEventHandlerUtils.$S = function() {
    var $v_0 = null;
    if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
        var $v_1 = $get("entityCombo");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.value, $v_3 = $v_2.split(":");
            if ($v_3.length === 3) {
                $v_0 = new Mscrm.EntityDescriptor;
                $v_0.$I_0 = $v_3[0];
                $v_0.$N_0 = $v_3[1];
                $v_0.$H_0 = Boolean.parse($v_3[2]);
                var $v_4 = $v_1.options[$v_1.selectedIndex];
                $v_0.$O_0 = IsNull($v_4) ? "" : $v_4.innerText
            }
        }
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$R = function() {
    var $v_0 = "";
    if (Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) {
        var $v_1 = $get("columnCombo");
        if (!IsNull($v_1)) $v_0 = $v_1.value
    }
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils.$s = function($p0, $p1, $p2, $p3) {
    switch ($p2) {
    case 1:
        Mscrm.FormLibraryAndEventHandlerUtils.$1A($p0, $p1, $p3);
        break;
    case 5:
        Mscrm.FormLibraryAndEventHandlerUtils.$1B($p0, $p1);
        break
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$M = function($p0) {
    var $v_0 = null;
    if (Mscrm.FormLibraryAndEventHandlerUtils.$3)
        $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml,
            "/Dependencies/Dependency",
            null);
    else
        $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
            "/entity/form/formLibraries",
            null);
    var $v_1 = null;
    if (!IsNull($v_0)) $v_1 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($v_0));
    else $v_1 = XUI.Xml.LoadXml("<formLibraries/>");
    if (IsNull(Mscrm.FormLibraryAndEventHandlerUtils.$L)) {
        var $v_4 = function($p1_0) { Mscrm.FormLibraryAndEventHandlerUtils.$L = $p1_0 },
            $v_5 = function($p1_0, $p1_1) { Mscrm.FormLibraryAndEventHandlerUtils.$L = null };
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/libraryAndEventHandler.xsl").toString(), false, $v_4, $v_5)
    }
    var $v_2 = Mscrm.XmlUtil.createXslTemplateByXml(XUI.Xml.XMLSerializer
            .serializeToString(Mscrm.FormLibraryAndEventHandlerUtils.$L)),
        $v_3 = $v_2.createProcessor();
    $v_3.input = $v_1;
    $v_3.addParameter("Label_Name", window.LOCID_NAME_PARAM);
    $v_3.addParameter("Label_DisplayName", window.LOCID_DISPLAY_NAME_PARAM);
    $v_3.addParameter("Label_Description", window.LOCID_DESCRIPTION_PARAM);
    $v_3.addParameter("Alignment", window.LOCID_UI_DIR === "RTL" ? "right" : "left");
    $v_3.addParameter("Label_True", window.LOCID_HANDLER_ENABLED_TRUE);
    $v_3.addParameter("Label_False", window.LOCID_HANDLER_ENABLED_FALSE);
    $v_3.transform();
    $get("libraryGrid").innerHTML = $v_3.output;
    Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary = $get($p0);
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)) {
        var $v_6 = XUI.Html.DomUtils.GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary),
            $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6);
        if (!IsNull($v_6) && !IsNull($v_7)) {
            Mscrm.Utilities.click($v_7);
            try {
                $v_7.setActive()
            } catch ($$e_C) {
                $v_7.focus()
            }
        } else Mscrm.Utilities.click(Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$F = function($p0, $p1) {
    var $v_0 = null;
    if (!IsNull($p0)) {
        $v_0 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($p0));
        var $v_3 = XUI.Xml.SelectSingleNode($p0, "Handlers", null);
        if (!IsNull($v_3)) {
            var $v_4 = XUI.Xml.SelectNodes($v_3, "Handler", null);
            if ($v_4.length > 0 && !$p1.length) $p1 = $v_4[0].attributes.getNamedItem("handlerUniqueId").nodeValue
        }
    } else $v_0 = XUI.Xml.LoadXml("<event/>");
    if (IsNull(Mscrm.FormLibraryAndEventHandlerUtils.$K)) {
        var $v_5 = function($p1_0) { Mscrm.FormLibraryAndEventHandlerUtils.$K = $p1_0 },
            $v_6 = function($p1_0, $p1_1) { Mscrm.FormLibraryAndEventHandlerUtils.$K = null };
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/libraryAndEventHandler.xsl").toString(), false, $v_5, $v_6)
    }
    var $v_1 = Mscrm.XmlUtil.createXslTemplateByXml(XUI.Xml.XMLSerializer
            .serializeToString(Mscrm.FormLibraryAndEventHandlerUtils.$K)),
        $v_2 = $v_1.createProcessor();
    $v_2.input = $v_0;
    $v_2.addParameter("Label_LibraryName", window.LOCID_LIBRARY_NAME_PARAM);
    $v_2.addParameter("Label_FunctionName", window.LOCID_FUNCTION_NAME_PARAM);
    $v_2.addParameter("Label_Enabled", window.LOCID_ENABLED_PARAM);
    $v_2.addParameter("Alignment", window.LOCID_UI_DIR === "RTL" ? "right" : "left");
    $v_2.addParameter("Label_True", window.LOCID_HANDLER_ENABLED_TRUE);
    $v_2.addParameter("Label_False", window.LOCID_HANDLER_ENABLED_FALSE);
    $v_2.transform();
    $get("handlerGrid").innerHTML = $v_2.output;
    Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler = $get($p1);
    if (!IsNull(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler))
        if (!IsNull(XUI.Html.DomUtils.GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)) &&
            !IsNull(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)))) {
            Mscrm.Utilities.click(XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)));
            try {
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)).setActive()
            } catch ($$e_C) {
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)).focus()
            }
        } else Mscrm.Utilities.click(Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler)
};
Mscrm.FormLibraryAndEventHandlerUtils.$1W = function($p0) {
    if (!isNullOrEmptyString($p0)) {
        Mscrm.FormLibraryAndEventHandlerUtils.$m(XUI.Xml
            .SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form/events/event", null),
            $p0);
        Mscrm.FormLibraryAndEventHandlerUtils.$m(XUI.Xml
            .SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml, "/entity/form/tabs/tab/events/event", null),
            $p0);
        Mscrm.FormLibraryAndEventHandlerUtils.$m(XUI.Xml
            .SelectNodes(Mscrm.FormLibraryAndEventHandlerUtils.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event",
                null),
            $p0)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$m = function($p0, $p1) {
    if (!IsNull($p0) && $p0.length > 0)
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = XUI.Xml.SelectNodes($p0[$v_0], "Handlers/Handler[@libraryName='" + $p1 + "']", null);
            Mscrm.FormLibraryAndEventHandlerUtils.$1V($v_1);
            Mscrm.FormLibraryAndEventHandlerUtils.$12($p0[$v_0])
        }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1V = function($p0) {
    if (!IsNull($p0) && $p0.length > 0)
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) $p0[$v_0].parentNode.removeChild($p0[$v_0])
};
Mscrm.FormLibraryAndEventHandlerUtils.$12 = function($p0) {
    if (!Mscrm.FormLibraryAndEventHandlerUtils.$1P($p0) && Mscrm.DependenciesUtils.hasDependenciesNode($p0)) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "dependencies", null);
        Mscrm.DependenciesUtils.updateLockLevelForDependencies($v_0, null);
        $p0.removeChild($v_0)
    }
};
Mscrm.FormLibraryAndEventHandlerUtils.$1M = function($p0) {
    var $v_0 = "", $v_1 = Mscrm.FormXmlUtils.getAttributeValue($p0, "name");
    if (!IsNull($v_1)) $v_0 = $v_1.toString();
    return $v_0
};
Mscrm.FormLibraryAndEventHandlerUtils
    .canElementBeAdded = function(controlIdNodeValue, controlClassIdNodeValue, objectTypeCode) {
        var $v_0 = Mscrm.UnsupportedControlsInfo.$E[objectTypeCode];
        if (!IsNull($v_0))
            for (var $v_1 = $v_0, $v_2 = 0;
                $v_2 < $v_1.length;
                $v_2++
            ) if (controlIdNodeValue.toUpperCase() === $v_1[$v_2].toString().toUpperCase()) return false;
        if (controlClassIdNodeValue.toUpperCase() === "{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}".toUpperCase() ||
            controlClassIdNodeValue.toUpperCase() === "{587CDF98-C1D5-4bde-8473-14A0BC7644A7}".toUpperCase() ||
            controlClassIdNodeValue.toUpperCase() === "{080677DB-86EC-4544-AC42-F927E74B491F}".toUpperCase() ||
            controlClassIdNodeValue.toUpperCase() === "{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}".toUpperCase() ||
            controlClassIdNodeValue.toUpperCase() === "{a62b6fa9-169e-406c-b1aa-eab828cb6026}".toUpperCase() ||
            controlClassIdNodeValue.toUpperCase() === "{F02EF977-2564-4b9a-B2F0-DF083D8A019B}".toUpperCase() ||
            controlClassIdNodeValue
            .toUpperCase() ===
            "{06375649-c143-495e-a496-c962e5b4488e}".toUpperCase()) return false;
        if (controlClassIdNodeValue.toUpperCase() === "{E7A81278-8635-4d9e-8D4D-59480B391C5B}".toUpperCase() &&
            !Mscrm.FormXmlUtils.isEditableGridControlJsEventsFeatureEnabled()) return false;
        return true
    };
Mscrm.ControlInfo = function(controlInfoString) {
    if (!isNullOrEmptyString(controlInfoString)) {
        var $v_0 = controlInfoString.split(":");
        if ($v_0.length === 3) {
            this.$B_0 = $v_0[0];
            this.$1_0 = parseInt($v_0[1]);
            this.$4_0 = $v_0[2]
        }
    }
};
Mscrm.ControlInfo.prototype = {
    $4_0: "",
    $1_0: -1,
    $B_0: "",
    get_cellId: function() { return this.$B_0 },
    get_controlName: function() { return this.$4_0 },
    get_controlType: function() { return this.$1_0 }
};
Mscrm.Events = function() {};
Mscrm.ControlEventInfo = function() {};
Mscrm.ControlEventInfo.getEventType = function(name) {
    var $v_0 = -1;
    switch (name) {
    case "onchange":
        $v_0 = 0;
        break;
    case "onreadystatecomplete":
    case "tabstatechange":
    case "onload":
    case "onrecordselect":
    case "onsave":
        $v_0 = 1;
        break
    }
    return $v_0
};
Mscrm.ControlEventInfo.getDataEvents = function(controlType) {
    if (IsNull(Mscrm.ControlEventInfo.$J)) {
        Mscrm.ControlEventInfo.$J = {};
        var $v_0 = {};
        $v_0["onchange"] = window.LOCID_ONCHANGE_EVENT_LABEL;
        Mscrm.ControlEventInfo.$J[Mscrm.FormControlTypes.toString(1)] = $v_0;
        var $v_1 = {};
        $v_1["onchange"] = window.LOCID_ONCHANGE_EVENT_LABEL;
        Mscrm.ControlEventInfo.$J[Mscrm.FormControlTypes.toString(2)] = $v_1
    }
    return Mscrm.ControlEventInfo.$J[Mscrm.FormControlTypes.toString(controlType)]
};
Mscrm.ControlEventInfo.getUIEvents = function(controlType) {
    if (IsNull(Mscrm.ControlEventInfo.$9)) {
        Mscrm.ControlEventInfo.$9 = {};
        var $v_0 = {};
        $v_0["onreadystatecomplete"] = window.LOCID_ONSTATE_COMPLETE_EVENT;
        Mscrm.ControlEventInfo.$9[Mscrm.FormControlTypes.toString(0)] = $v_0;
        var $v_1 = {};
        $v_1["tabstatechange"] = window.LOCID_ONTAB_STATE_CHANGE;
        Mscrm.ControlEventInfo.$9[Mscrm.FormControlTypes.toString(5)] = $v_1;
        var $v_2 = {};
        $v_2["onload"] = window.LOCID_ONLOAD_EVENT_LABEL;
        $v_2["onsave"] = window.LOCID_ONSAVE_EVENT_LABEL;
        Mscrm.ControlEventInfo.$9[Mscrm.FormControlTypes.toString(4)] = $v_2;
        var $v_3 = {};
        $v_3["onrecordselect"] = window.LOCID_ONRECORDSELECT_EVENT_LABEL;
        $v_3["onsave"] = window.LOCID_ONSAVE_EVENT_LABEL;
        Mscrm.ControlEventInfo.$9[Mscrm.FormControlTypes.toString(2)] = $v_3
    }
    return Mscrm.ControlEventInfo.$9[Mscrm.FormControlTypes.toString(controlType)]
};
Mscrm.ControlEventInfo.getControlEvents = function(controlType) {
    var $v_0 = [];
    switch (controlType) {
    case 5:
        $v_0[0] = "tabstatechange";
        break;
    case 0:
        $v_0[0] = "onreadystatecomplete";
        break;
    case 1:
        $v_0[0] = "onchange";
        break;
    case 4:
        $v_0[0] = "onload";
        $v_0[1] = "onsave";
        break;
    case 2:
        $v_0[0] = "onchange";
        $v_0[1] = "onsave";
        $v_0[2] = "onrecordselect";
        break
    }
    return $v_0
};
Mscrm.FormXmlNodes = function() {};
Mscrm.FormXmlAttributes = function() {};
Mscrm.NavPaneDisplayOption = function() {};
Mscrm.FormTypes = function() {};
Mscrm.FormXmlUtils = function() {};
Mscrm.FormXmlUtils.processFormNavigationBeforePreview = function(previewXml) {
    var $v_0 = XUI.Xml.SelectNodes(previewXml,
        "/entity/form/Navigation/NavBar/NavBarByRelationshipItem[@isNavSpacer='true' or not(@dirty)]",
        null);
    Mscrm.FormXmlUtils.$14($v_0);
    $v_0 = XUI.Xml.SelectNodes(previewXml, "/entity/form/Navigation/NavBarAreas/NavBarArea[not(@dirty)]", null);
    Mscrm.FormXmlUtils.$14($v_0);
    var $v_1 = XUI.Xml.SelectNodes(previewXml,
        "/entity/form/Navigation/NavBar/NavBarByRelationshipItem[@dirty='true']",
        null);
    Mscrm.FormXmlUtils.$13($v_1, "dirty");
    $v_1 = XUI.Xml.SelectNodes(previewXml, "/entity/form/Navigation/NavBarAreas/NavBarArea[@dirty='true']", null);
    Mscrm.FormXmlUtils.$13($v_1, "dirty");
    Mscrm.FormXmlUtils.$1Y(XUI.Xml.SelectNodes(previewXml,
        "/entity/form/Navigation/NavBar/NavBarByRelationshipItem",
        null));
    Mscrm.FormXmlUtils.$n(XUI.Xml.SelectSingleNode(previewXml, "/entity/form/Navigation/NavBarAreas", null));
    Mscrm.FormXmlUtils.$n(XUI.Xml.SelectSingleNode(previewXml, "/entity/form/Navigation/NavBar", null));
    Mscrm.FormXmlUtils.$n(XUI.Xml.SelectSingleNode(previewXml, "/entity/form/Navigation", null))
};
Mscrm.FormXmlUtils.hasAttribute = function(node, attributeName) {
    var $v_0 = false;
    if (node)
        if (node.attributes.getNamedItem(attributeName)) $v_0 = true;
        else $v_0 = false;
    return $v_0
};
Mscrm.FormXmlUtils.getAttributeValue = function(node, attributeName) {
    var $v_0 = null;
    if (!IsNull(node))
        if (node.attributes.getNamedItem(attributeName)) $v_0 = node.attributes.getNamedItem(attributeName).nodeValue;
    return $v_0
};
Mscrm.FormXmlUtils.setAttributeValue = function(node, attributeName, attributeValue) {
    if (!IsNull(node)) {
        var $v_0 = node.attributes.getNamedItem(attributeName);
        if (!IsNull($v_0)) $v_0.nodeValue = attributeValue
    }
};
Mscrm.FormXmlUtils.removeAttribute = function(node, attributeName) {
    if (!IsNull(node)) {
        var $v_0 = node.attributes.getNamedItem(attributeName);
        !IsNull($v_0) && node.attributes.removeNamedItem(attributeName)
    }
};
Mscrm.FormXmlUtils.getNodeValue = function(node) {
    var $v_0 = null;
    if (!IsNull(node)) $v_0 = node.nodeValue;
    return $v_0
};
Mscrm.FormXmlUtils.removeChildren = function(parentNode, typeofChild) {
    if (!IsNull(parentNode))
        for (var $v_0 = XUI.Xml
                     .SelectNodes(parentNode, typeofChild, null),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) parentNode.removeChild($v_0[$v_1])
};
Mscrm.FormXmlUtils.processFormXmlBeforeSaveAs = function(formXml, formName) {
    var $v_0 = XUI.Xml.SelectSingleNode(formXml, "/entity/form", null),
        $v_1 = XUI.Xml.SelectSingleNode(formXml, "/entity/form/DisplayConditions", null);
    if (!IsNull($v_1)) while ($v_1.hasChildNodes()) $v_1.removeChild($v_1.childNodes[0]);
    else {
        $v_1 = formXml.createElement("DisplayConditions");
        $v_0.appendChild($v_1)
    }
};
Mscrm.FormXmlUtils.addAttribute = function(cell, attrName, attrVal) {
    if (!IsNull(cell)) {
        var $v_0 = cell.ownerDocument.createAttribute(attrName);
        $v_0.value = attrVal;
        cell.attributes.setNamedItem($v_0)
    }
};
Mscrm.FormXmlUtils.getLibraryNode = function(id, formXml) {
    return XUI.Xml.SelectSingleNode(formXml, "/entity/form/formLibraries/Library[@libraryUniqueId='" + id + "']", null)
};
Mscrm.FormXmlUtils.getWebResourcesLibraryNode = function(id, dependencyXML) {
    return XUI.Xml.SelectSingleNode(dependencyXML,
        "/Dependencies/Dependency/Library[@libraryUniqueId='" + id + "']",
        null)
};
Mscrm.FormXmlUtils.getEventsNode = function(formXml, controlInfo, eventType) {
    if (Mscrm.FormXmlUtils
        .isEditableGridControlJsEventsFeatureEnabled() &&
        controlInfo.$1_0 === 2) return XUI.Xml.SelectSingleNode(formXml, "/entity/form/events", null);
    if (eventType === 1 && controlInfo.$1_0 !== 4) {
        var $v_0 = Mscrm.FormXmlUtils.getFormXmlPathForControlType(controlInfo.$1_0);
        if (!isNullOrEmptyString($v_0))
            return XUI.Xml.SelectSingleNode(formXml, $v_0 + "[@id='" + controlInfo.$B_0 + "']/events", null);
        else return null
    } else return XUI.Xml.SelectSingleNode(formXml, "/entity/form/events", null)
};
Mscrm.FormXmlUtils.getEventNode = function(formXml, eventName, controlInfo, entityDescriptor, columnName) {
    var $v_0 = null, $v_1 = Mscrm.FormXmlUtils.$x(entityDescriptor);
    switch (Mscrm.ControlEventInfo.getEventType(eventName)) {
    case 0:
        if (controlInfo.$1_0 === 2) {
            var $v_2 = String.format("{0}[@name='{1}' and @control='{2}' and @relationship='{3}' and @attribute='{4}']",
                "/entity/form/events/event",
                eventName,
                controlInfo.$4_0,
                $v_1,
                columnName);
            $v_0 = XUI.Xml.SelectSingleNode(formXml, $v_2, null)
        } else if (controlInfo.$1_0 !== 4 && controlInfo.$1_0 !== 5) {
            var $v_3 = String.format("{0}[@name='{1}' and @attribute='{2}' and not(@control)]",
                "/entity/form/events/event",
                eventName,
                controlInfo.$4_0);
            $v_0 = XUI.Xml.SelectSingleNode(formXml, $v_3, null)
        } else
            $v_0 = XUI.Xml.SelectSingleNode(formXml,
                "/entity/form/events/event[@name='" + eventName + "' and not(@attribute)]",
                null);
        break;
    case 1:
        if (controlInfo.$1_0 === 2) {
            var $v_4 = Mscrm.FormXmlUtils.getFormXmlPathForControlType(controlInfo.$1_0),
                $v_5 = String.format("{0}[@name='{1}' and @control='{2}' and @relationship='{3}' and not(@attribute)]",
                    "/entity/form/events/event",
                    eventName,
                    controlInfo.$4_0,
                    $v_1);
            $v_0 = XUI.Xml.SelectSingleNode(formXml, $v_5, null)
        } else if (controlInfo.$1_0 === 4)
            $v_0 = XUI.Xml.SelectSingleNode(formXml,
                "/entity/form/events/event[@name='" + eventName + "' and not(@control) and not(@attribute)]",
                null);
        else {
            var $v_6 = Mscrm.FormXmlUtils.getFormXmlPathForControlType(controlInfo.$1_0);
            $v_0 = XUI.Xml.SelectSingleNode(formXml,
                $v_6 + "[@id='" + controlInfo.$B_0 + "']/events/event[@name='" + eventName + "']",
                null)
        }
        break
    }
    return $v_0
};
Mscrm.FormXmlUtils.addEventNode = function(formXml, eventName, controlInfo, entityDescriptor, fieldName) {
    var $v_0 = null;
    if (controlInfo.$1_0 === 2)
        $v_0 = Mscrm.FormXmlUtils.$1G(formXml, eventName, controlInfo.$4_0, entityDescriptor, fieldName);
    else $v_0 = Mscrm.FormXmlUtils.createEventNode(formXml, eventName, controlInfo.$4_0);
    var $v_1 = Mscrm.FormXmlUtils.getEventsNode(formXml, controlInfo, Mscrm.ControlEventInfo.getEventType(eventName));
    if (IsNull($v_1)) {
        $v_1 = formXml.createElement("events");
        Mscrm.FormXmlUtils.getEventsNodeParent(formXml, controlInfo, eventName).appendChild($v_1)
    }
    $v_1.appendChild($v_0);
    return $v_0
};
Mscrm.FormXmlUtils.getEventsNodeParent = function(formXml, controlInfo, selectedEvent) {
    if (controlInfo.$1_0 === 2 ||
        !Mscrm.ControlEventInfo.getEventType(selectedEvent) ||
        controlInfo
        .$B_0 ===
        Mscrm.FormControlTypes.toString(4)) return XUI.Xml.SelectSingleNode(formXml, "/entity/form", null);
    else {
        var $v_0 = Mscrm.FormXmlUtils.getFormXmlPathForControlType(controlInfo.$1_0);
        if (!isNullOrEmptyString($v_0))
            return XUI.Xml.SelectSingleNode(formXml, $v_0 + "[@id='" + controlInfo.$B_0 + "']", null);
        else return null
    }
};
Mscrm.FormXmlUtils.createEventNode = function(formXml, name, attribute) {
    var $v_0 = formXml.createElement("event");
    Mscrm.FormXmlUtils.addAttribute($v_0, "name", name);
    Mscrm.FormXmlUtils.addAttribute($v_0, "application", "false");
    Mscrm.FormXmlUtils.addAttribute($v_0, "active", "false");
    !Mscrm.ControlEventInfo.getEventType(name) &&
        attribute !== Mscrm.FormControlTypes.toString(4) &&
        Mscrm.FormXmlUtils.addAttribute($v_0, "attribute", attribute);
    return $v_0
};
Mscrm.FormXmlUtils.createHandlerNode = function(formXml, handlerInfo) {
    var $v_0 = formXml.createElement("Handler");
    Mscrm.FormXmlUtils.addAttribute($v_0, "functionName", handlerInfo.functionName);
    Mscrm.FormXmlUtils.addAttribute($v_0, "libraryName", handlerInfo.libraryName);
    Mscrm.FormXmlUtils.addAttribute($v_0, "handlerUniqueId", handlerInfo.handlerUniqueId);
    Mscrm.FormXmlUtils.addAttribute($v_0, "enabled", handlerInfo.enabled.toString().toLowerCase());
    Mscrm.FormXmlUtils.addAttribute($v_0, "parameters", handlerInfo.parameters);
    Mscrm.FormXmlUtils.addAttribute($v_0,
        "passExecutionContext",
        handlerInfo.passExecutionContext.toString().toLowerCase());
    return $v_0
};
Mscrm.FormXmlUtils.getFormXmlPathForControlType = function(controlType) {
    var $v_0 = "";
    switch (controlType) {
    case 5:
        $v_0 = "/entity/form/tabs/tab";
        break;
    case 1:
    case 0:
        $v_0 = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell";
        break;
    case 4:
        $v_0 = "/entity/form";
        break
    }
    if (Mscrm.FormXmlUtils
        .isEditableGridControlJsEventsFeatureEnabled() &&
        controlType === 2) $v_0 = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell";
    return $v_0
};
Mscrm.FormXmlUtils.getResourceValue = function(resourceName, formXml) {
    var $v_0 = "",
        $v_1 = XUI.Xml.SelectSingleNode(formXml, "/entity/form/resources/resource[@id='" + resourceName + "']", null);
    if (!IsNull($v_1)) $v_0 = XUI.Xml.GetText($v_1);
    return $v_0
};
Mscrm.FormXmlUtils.rowContainsOnlySpacers = function(rowNode, secColumns) {
    var $v_0 = false, $v_1 = 0;
    if (!IsNull(rowNode))
        for (var $v_2 = 0;
            $v_2 < rowNode.childNodes.length;
            $v_2++
        ) if (Mscrm.FormXmlUtils.isSystemSpacer(rowNode.childNodes[$v_2])) $v_1++;
    if ($v_1 === secColumns) $v_0 = true;
    return $v_0
};
Mscrm.FormXmlUtils.removeAllCellsInRow = function(rowNode) {
    if (!IsNull(rowNode)) while (rowNode.childNodes.length > 0) rowNode.removeChild(rowNode.childNodes[0])
};
Mscrm.FormXmlUtils.isSystemSpacer = function(cellNode) {
    var $v_0 = false;
    if (cellNode) {
        var $v_1 = XUI.Xml.SelectSingleNode(cellNode, "control/@id", null);
        if ($v_1 && XUI.Xml.GetText($v_1).startsWith("spacer_System")) $v_0 = true
    }
    return $v_0
};
Mscrm.FormXmlUtils.addSequenceToRequiredNodes = function(startNode, sequence, area) {
    if (!IsNull(startNode)) {
        Mscrm.FormXmlUtils.removeAttribute(startNode, "Sequence");
        var $v_0 = -1;
        if (!isNullOrEmptyString(sequence)) {
            $v_0 = parseInt(sequence, 10);
            try {
                $v_0 += 1
            } catch ($$e_4) {
                $v_0 = -1
            }
        }
        var $v_1 = startNode;
        if ($v_0 === -1)
            while (true) {
                Mscrm.FormXmlUtils.addAttribute($v_1, "Sequence", sequence);
                Mscrm.FormXmlUtils.addAttribute($v_1, "dirty", "true");
                $v_1 = $v_1.previousSibling;
                if (!IsNull($v_1)) {
                    var $v_2 = Mscrm.FormXmlUtils.getAttributeValue($v_1, "Area"),
                        $v_3 = Mscrm.FormXmlUtils.getAttributeValue($v_1, "Sequence");
                    if ($v_2 !== area || parseInt($v_3, 10) <= parseInt(sequence, 10)) break
                } else break
            }
        else
            while (true) {
                Mscrm.FormXmlUtils.addAttribute($v_1, "Sequence", $v_0.toString());
                Mscrm.FormXmlUtils.addAttribute($v_1, "dirty", "true");
                $v_1 = $v_1.nextSibling;
                if (!IsNull($v_1)) {
                    var $v_4 = Mscrm.FormXmlUtils.getAttributeValue($v_1, "Area"),
                        $v_5 = Mscrm.FormXmlUtils.getAttributeValue($v_1, "Sequence");
                    if ($v_4 !== area || parseInt($v_5, 10) > $v_0) break;
                    else {
                        var $v_6 = $v_0;
                        try {
                            $v_0++
                        } catch ($$e_B) {
                            $v_0 = $v_6
                        }
                    }
                } else break
            }
    }
};
Mscrm.FormXmlUtils.setDomAttribute = function(element, attribute, value) {
    !IsNull(element) && element.setAttribute(attribute, value)
};
Mscrm.FormXmlUtils.getControlType = function(controlNode) {
    var $v_0 = -1;
    if (!IsNull(controlNode))
        switch (controlNode.nodeName.toUpperCase()) {
        case "TAB":
            $v_0 = 5;
            break;
        case "CELL":
            var $v_1 = XUI.Xml.SelectSingleNode(controlNode, "control/@classid", null);
            if (!IsNull($v_1)) {
                var $v_2 = $v_1.nodeValue;
                switch ($v_2) {
                case "{FD2A7985-3187-444e-908D-6624B21F69C0}":
                    $v_0 = 0;
                    break;
                case "{E7A81278-8635-4d9e-8D4D-59480B391C5B}":
                    $v_0 = 2;
                    break;
                case "{06375649-c143-495e-a496-c962e5b4488e}":
                    $v_0 = 6;
                    break;
                case "{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}":
                case "{587CDF98-C1D5-4bde-8473-14A0BC7644A7}":
                case "{080677DB-86EC-4544-AC42-F927E74B491F}":
                    $v_0 = 3;
                    break;
                default:
                    $v_0 = 1;
                    break
                }
            }
            break
        }
    return $v_0
};
Mscrm.FormXmlUtils.updateFieldXmlForInternalDependencies = function(fieldXml, formXml) {
    var $v_0 = XUI.Xml.SelectNodes(formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/InternalHandlers/Handler/dependencies/dependency",
        null);
    Mscrm.FormXmlUtils.$p($v_0, fieldXml);
    var $v_1 = XUI.Xml.SelectNodes(formXml,
        "/entity/form/tabs/tab/events/event/InternalHandlers/Handler/dependencies/dependency",
        null);
    Mscrm.FormXmlUtils.$p($v_1, fieldXml);
    var $v_2 = XUI.Xml.SelectNodes(formXml,
        "/entity/form/events/event/InternalHandlers/Handler/dependencies/dependency",
        null);
    Mscrm.FormXmlUtils.$p($v_2, fieldXml)
};
Mscrm.FormXmlUtils
    .isEditableGridControlJsEventsFeatureEnabled = function() {
        return Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.EditableGridControlJsEvents")
    };
Mscrm.FormXmlUtils.$x = function($p0) { return IsNull($p0) || $p0.$H_0 ? "" : $p0.$I_0 };
Mscrm.FormXmlUtils.$1G = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Mscrm.FormXmlUtils.createEventNode($p0, $p1, $p4), $v_1 = Mscrm.FormXmlUtils.$x($p3);
    Mscrm.FormXmlUtils.addAttribute($v_0, "relationship", $v_1);
    Mscrm.FormXmlUtils.addAttribute($v_0, "control", $p2);
    return $v_0
};
Mscrm.FormXmlUtils.$p = function($p0, $p1) {
    if (!IsNull($p0) && $p0.length > 0)
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = XUI.Xml.SelectSingleNode($p1,
                "/entity/fields/field[@name='" +
                Mscrm.FormXmlUtils.getAttributeValue($p0[$v_0], "id")
                .toString() +
                "']",
                null);
            Mscrm.FormXmlUtils.addAttribute($v_1, "requiredforform", "true")
        }
};
Mscrm.FormXmlUtils.$14 = function($p0) {
    if ($p0.length > 0)
        for (var $v_0 = null, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_0 = $p0[$v_1];
            $v_0 && $v_0.parentNode.removeChild($v_0)
        }
};
Mscrm.FormXmlUtils.$13 = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) $p0[$v_0].attributes.removeNamedItem($p1)
};
Mscrm.FormXmlUtils.$1Y = function($p0) {
    for (var $v_0 = null, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        $v_0 = $p0[$v_1].attributes.getNamedItem("navPaneId");
        if ($v_0) {
            if ($v_0.nodeValue.length > 0) $p0[$v_1].attributes.getNamedItem("Id").nodeValue = $v_0.nodeValue;
            Mscrm.FormXmlUtils.removeAttribute($p0[$v_1], "navPaneId")
        }
    }
};
Mscrm.FormXmlUtils.$n = function($p0) {
    if (!IsNull($p0))
        if (!IsNull($p0.attributes.getNamedItem("added")) && !$p0.childNodes.length) $p0.parentNode.removeChild($p0);
        else Mscrm.FormXmlUtils.removeAttribute($p0, "added")
};
Mscrm.EditorType = function() {};
Mscrm.ControlIds = function() {};
Mscrm.UnsupportedControlsInfo = function() {};
Mscrm.UnsupportedControlsInfo.$$cctor = function() {
    var $v_0 = [];
    $v_0[0] = "urloption";
    Mscrm.UnsupportedControlsInfo.$E["9508"] = $v_0;
    var $v_1 = [];
    $v_1[0] = "urloption";
    Mscrm.UnsupportedControlsInfo.$E["9502"] = $v_1;
    var $v_2 = [];
    $v_2[0] = "currencytype";
    Mscrm.UnsupportedControlsInfo.$E["9105"] = $v_2;
    var $v_3 = [];
    $v_3[0] = "emailpasswordretype";
    Mscrm.UnsupportedControlsInfo.$E["2020"] = $v_3
};
Mscrm.UnsupportedControlsInfo
    .get_unSupportedControlsDictionary = function() { return Mscrm.UnsupportedControlsInfo.$E };
Mscrm.ControlClassIds = function() {};
Mscrm.FormXmlPaths = function() {};
Mscrm.FormUrlUtils = function() {};
Mscrm.FormUrlUtils.getUpdatedUrl = function(urlString, formId) {
    formId = formId.replace("{", "");
    formId = formId.replace("}", "");
    var $v_0 = "formId%3d[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
        $v_1 = new RegExp($v_0);
    if (urlString.search($v_1) !== -1)
        urlString = urlString.replace($v_1, "formId%3d" + CrmEncodeDecode.CrmNameValueEncode(formId));
    else
        urlString = urlString.replace("extraqs=",
            "extraqs=formId%3d" + CrmEncodeDecode.CrmNameValueEncode(formId) + "%26");
    $v_0 = "action%3d[0-2]{1}";
    $v_1 = new RegExp($v_0);
    if (urlString.search($v_1) !== -1) urlString = urlString.replace($v_1, "");
    return urlString
};
Mscrm.DependenciesUtils = function() {};
Mscrm.DependenciesUtils.updateLockLevelForDependencies = function(oldDepNode, newDepNode) {
    var $v_0 = null;
    if (!IsNull(oldDepNode) && XUI.Xml.SelectNodes(oldDepNode, "dependency", null).length > 0) {
        var $v_1 = XUI.Xml.SelectNodes(oldDepNode, "dependency", null);
        $v_0 = $v_1[0].ownerDocument;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = Mscrm.FormXmlUtils.getAttributeValue($v_1[$v_2], "id");
            if (!IsNull($v_3) &&
                Mscrm.DependenciesUtils
                .getControlDependencyReferences($v_3.toString(), oldDepNode.ownerDocument) <=
                1) {
                var $v_4 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@datafieldname= '" +
                    $v_3 +
                    "']",
                    null);
                Mscrm.FormXmlUtils.removeAttribute($v_4, "locklevel");
                $v_4 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/header/rows/row/cell[control/@datafieldname= '" + $v_3 + "']",
                    null);
                Mscrm.FormXmlUtils.removeAttribute($v_4, "locklevel");
                $v_4 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/footer/rows/row/cell[control/@datafieldname= '" + $v_3 + "']",
                    null);
                Mscrm.FormXmlUtils.removeAttribute($v_4, "locklevel")
            }
        }
    }
    if (!IsNull(newDepNode) && XUI.Xml.SelectNodes(newDepNode, "dependency", null).length > 0) {
        var $v_5 = XUI.Xml.SelectNodes(newDepNode, "dependency", null);
        $v_0 = $v_5[0].ownerDocument;
        for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
            var $v_7 = Mscrm.FormXmlUtils.getAttributeValue($v_5[$v_6], "id");
            if (!IsNull($v_7)) {
                var $v_8 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@datafieldname= '" +
                    $v_7 +
                    "']",
                    null);
                Mscrm.FormXmlUtils.addAttribute($v_8, "locklevel", "1");
                $v_8 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/header/rows/row/cell[control/@datafieldname= '" + $v_7 + "']",
                    null);
                Mscrm.FormXmlUtils.addAttribute($v_8, "locklevel", "1");
                $v_8 = XUI.Xml.SelectSingleNode($v_0,
                    "/entity/form/footer/rows/row/cell[control/@datafieldname= '" + $v_7 + "']",
                    null);
                Mscrm.FormXmlUtils.addAttribute($v_8, "locklevel", "1")
            }
        }
    }
};
Mscrm.DependenciesUtils.getDependenciesArray = function(dependenciesNode) {
    var $v_0 = [];
    if (!IsNull(dependenciesNode))
        for (var $v_1 = XUI.Xml
                     .SelectNodes(dependenciesNode, "dependency", null),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) $v_0[$v_2] = Mscrm.FormXmlUtils.getAttributeValue($v_1[$v_2], "id").toString();
    return $v_0
};
Mscrm.DependenciesUtils.dependenciesChanged = function(oldDepList, newDepList) {
    var $v_0 = true, $v_1 = 0;
    if (!IsNull(oldDepList) && !IsNull(newDepList) && oldDepList.length === newDepList.length) {
        for (var $v_2 = 0;
            $v_2 < oldDepList.length;
            $v_2++
        ) for (var $v_3 = 0; $v_3 < newDepList.length; $v_3++) if (oldDepList[$v_2] === newDepList[$v_3]) $v_1++;
        if ($v_1 !== oldDepList.length) $v_0 = true;
        else $v_0 = false
    }
    return $v_0
};
Mscrm.DependenciesUtils.removeLockLevelForEventDependencies = function(controlNode, controlType) {
    if (!IsNull(controlNode)) {
        var $v_0 = Mscrm.ControlEventInfo.getControlEvents(controlType), $v_1 = controlNode.ownerDocument;
        switch (controlType) {
        case 1:
            if ($v_0.length > 0)
                for (var $v_2 = XUI.Xml.SelectSingleNode(controlNode, "control/@id", null).nodeValue, $v_3 = 0;
                    $v_3 < $v_0.length;
                    $v_3++) {
                    var $v_4 = XUI.Xml.SelectSingleNode($v_1,
                        "/entity/form/events/event[@name='" +
                        $v_0[$v_3] +
                        "' and @attribute ='" +
                        $v_2 +
                        "']/dependencies",
                        null);
                    Mscrm.DependenciesUtils.updateLockLevelForDependencies($v_4, null)
                }
            break;
        case 0:
        case 5:
            if ($v_0.length > 0)
                for (var $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
                    var $v_6 = XUI.Xml.SelectSingleNode(controlNode,
                        "events/event[@name='" + $v_0[$v_5] + "']/dependencies",
                        null);
                    Mscrm.DependenciesUtils.updateLockLevelForDependencies($v_6, null)
                }
            break
        }
    }
};
Mscrm.DependenciesUtils.hasDependencies = function(controlNode, controlType) {
    var $v_0 = false;
    if (!IsNull(controlNode)) {
        var $v_1 = Mscrm.ControlEventInfo.getControlEvents(controlType), $v_2 = controlNode.ownerDocument;
        switch (controlType) {
        case 1:
            if ($v_1.length > 0)
                for (var $v_3 = XUI.Xml.SelectSingleNode(controlNode, "control/@id", null).nodeValue, $v_4 = 0;
                    $v_4 < $v_1.length;
                    $v_4++) {
                    var $v_5 = XUI.Xml.SelectSingleNode($v_2,
                        "/entity/form/events/event[@name='" +
                        $v_1[$v_4] +
                        "' and @attribute ='" +
                        $v_3 +
                        "']/dependencies",
                        null);
                    if (!IsNull($v_5) && $v_5.childNodes.length > 0) $v_0 = true
                }
            break;
        case 0:
        case 5:
            if ($v_1.length > 0)
                for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
                    var $v_7 = XUI.Xml.SelectSingleNode(controlNode,
                        "events/event[@name='" + $v_1[$v_6] + "']/dependencies",
                        null);
                    if (!IsNull($v_7) && $v_7.childNodes.length > 0) $v_0 = true
                }
            break
        }
    }
    return $v_0
};
Mscrm.DependenciesUtils.isControlDependent = function(controlId, formXml) {
    var $v_0 = false,
        $v_1 = XUI.Xml.SelectSingleNode(formXml,
            "/entity/form/events/event/dependencies/dependency[@id='" + controlId + "']",
            null),
        $v_2 = XUI.Xml.SelectSingleNode(formXml,
            "/entity/form/tabs/tab/events/event/dependencies/dependency[@id='" + controlId + "']",
            null),
        $v_3 = XUI.Xml.SelectSingleNode(formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id='" + controlId + "']",
            null);
    if (!IsNull($v_1) || !IsNull($v_2) || !IsNull($v_3)) $v_0 = true;
    return $v_0
};
Mscrm.DependenciesUtils.getControlDependencyReferences = function(controlId, formXml) {
    var $v_0 = 0,
        $v_1 = XUI.Xml.SelectNodes(formXml,
            "/entity/form/events/event/dependencies/dependency[@id='" + controlId + "']",
            null);
    if (!IsNull($v_1)) $v_0 += $v_1.length;
    var $v_2 = XUI.Xml.SelectNodes(formXml,
        "/entity/form/tabs/tab/events/event/dependencies/dependency[@id='" + controlId + "']",
        null);
    if (!IsNull($v_2)) $v_0 += $v_2.length;
    var $v_3 = XUI.Xml.SelectNodes(formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency[@id='" + controlId + "']",
        null);
    if (!IsNull($v_3)) $v_0 += $v_3.length;
    return $v_0
};
Mscrm.DependenciesUtils.hasDependenciesNode = function(eventNode) {
    var $v_0 = false;
    if (!IsNull(eventNode)) {
        var $v_1 = XUI.Xml.SelectSingleNode(eventNode, "dependencies", null);
        if (!IsNull($v_1)) $v_0 = true
    }
    return $v_0
};
Mscrm.ActionResult = function() {};
Mscrm.ActionResult.prototype = {
    success: true,
    id: "{00000000-0000-0000-0000-000000000000}",
    name: "",
    description: ""
};
Mscrm.FormCrudUtils = function() {};
Mscrm.FormCrudUtils.executeAction = function(action, formDetails, isMerged) {
    Mscrm.FormCrudUtils.$q = isMerged;
    var $v_0 = null;
    switch (action) {
    case 1:
        $v_0 = Mscrm.FormCrudUtils.$18(formDetails);
        break;
    case 2:
        Mscrm.FormXmlUtils.processFormXmlBeforeSaveAs(formDetails.formXml, formDetails.name);
        $v_0 = Mscrm.FormCrudUtils.$18(formDetails);
        break
    }
    return $v_0
};
Mscrm.FormCrudUtils.$18 = function($p0) {
    var $v_0 = null, $v_1 = new RemoteCommand("FormEditorWebService", "SaveFormWithParentId");
    $v_1.SetParameter("formId", $p0.formId);
    $v_1.SetParameter("formXml", XUI.Xml.XMLSerializer.serializeToString($p0.formXml));
    $v_1.SetParameter("formType", $p0.formType);
    $v_1.SetParameter("objectTypeCode", $p0.objectTypeCode);
    $v_1.SetParameter("name", $p0.name);
    $v_1.SetParameter("description", $p0.description);
    $v_1.SetParameter("isUserForm", $p0.isUserForm);
    $v_1.SetParameter("parentFormId", $p0.parentFormId);
    $v_1.SetParameter("saveAfterMerge", Mscrm.FormCrudUtils.$q);
    $v_1.SetParameter("formPresentation", $p0.formPresentation);
    $v_1.SetParameter("isAirMerged", $p0.isAirMerged);
    try {
        var $v_2 = $v_1.Execute();
        if ($p0.formType !== 11) !$v_2.Success && alert($v_2.RawResponse.toLocaleString());
        $v_0 = new Mscrm.ActionResult;
        $v_0.success = $v_2.Success;
        $v_0.id = $v_2.ReturnValue.toString();
        $v_0.name = $p0.name;
        $v_0.description = $p0.description
    } catch ($v_3) {
        alert($v_3.message)
    }
    return $v_0
};
Mscrm.EditNavRelationship.registerClass("Mscrm.EditNavRelationship");
Mscrm.FormPropertiesUtils.registerClass("Mscrm.FormPropertiesUtils");
Mscrm.NavigationGroup.registerClass("Mscrm.NavigationGroup");
Mscrm.NavigationRelationship.registerClass("Mscrm.NavigationRelationship", Mscrm.NavigationGroup);
Mscrm.NavigationLink.registerClass("Mscrm.NavigationLink", Mscrm.NavigationGroup);
Mscrm.EventHandler.registerClass("Mscrm.EventHandler");
Mscrm.FormLibrary.registerClass("Mscrm.FormLibrary");
Mscrm.FormDetails.registerClass("Mscrm.FormDetails");
Mscrm.EventHandlerEditor.registerClass("Mscrm.EventHandlerEditor");
Mscrm.SaveAs.registerClass("Mscrm.SaveAs");
Mscrm.FormRoleAssignment.registerClass("Mscrm.FormRoleAssignment");
Mscrm.FormsOrder.registerClass("Mscrm.FormsOrder");
Mscrm.EntityDescriptor.registerClass("Mscrm.EntityDescriptor");
Mscrm.FieldDescriptor.registerClass("Mscrm.FieldDescriptor");
Mscrm.FormLibraryAndEventHandlerUtils.registerClass("Mscrm.FormLibraryAndEventHandlerUtils");
Mscrm.ControlInfo.registerClass("Mscrm.ControlInfo");
Mscrm.Events.registerClass("Mscrm.Events");
Mscrm.ControlEventInfo.registerClass("Mscrm.ControlEventInfo");
Mscrm.FormXmlNodes.registerClass("Mscrm.FormXmlNodes");
Mscrm.FormXmlAttributes.registerClass("Mscrm.FormXmlAttributes");
Mscrm.NavPaneDisplayOption.registerClass("Mscrm.NavPaneDisplayOption");
Mscrm.FormTypes.registerClass("Mscrm.FormTypes");
Mscrm.FormXmlUtils.registerClass("Mscrm.FormXmlUtils");
Mscrm.EditorType.registerClass("Mscrm.EditorType");
Mscrm.ControlIds.registerClass("Mscrm.ControlIds");
Mscrm.UnsupportedControlsInfo.registerClass("Mscrm.UnsupportedControlsInfo");
Mscrm.ControlClassIds.registerClass("Mscrm.ControlClassIds");
Mscrm.FormXmlPaths.registerClass("Mscrm.FormXmlPaths");
Mscrm.FormUrlUtils.registerClass("Mscrm.FormUrlUtils");
Mscrm.DependenciesUtils.registerClass("Mscrm.DependenciesUtils");
Mscrm.ActionResult.registerClass("Mscrm.ActionResult");
Mscrm.FormCrudUtils.registerClass("Mscrm.FormCrudUtils");
Mscrm.EditNavRelationship.customLabelControl = "txtRelationshipDisplayName";
Mscrm.EditNavRelationship.relationNameControl = "txtRelationshipSchemaName";
Mscrm.EditNavRelationship.entityNameControl = "txtRelationshipEntityName";
Mscrm.EditNavRelationship.displayAreaControl = "txtRelationshipDisplayOption";
Mscrm.EditNavRelationship.displayNameControl = "txtLabel";
Mscrm.EditNavRelationship.oneToManyTDLabel = "oneToManyTD";
Mscrm.EditNavRelationship.manyToManyTDLabel = "manyToManyTD";
Mscrm.EditNavRelationship.displayName = "";
Mscrm.EditNavRelationship.relationName = "";
Mscrm.EditNavRelationship.entityRelationId = "";
Mscrm.EditNavRelationship.entityId = "";
Mscrm.EditNavRelationship.relationType = "";
Mscrm.EditNavRelationship.originalDisplayName = "";
Mscrm.EditNavRelationship.objectTypeCode = -1;
Mscrm.EventHandlerEditor.librarySelectorId = "librarySelector";
Mscrm.EventHandlerEditor.enabledCheckBoxId = "enabledCheckBox";
Mscrm.EventHandlerEditor.functionNameTextBoxId = "functionName";
Mscrm.EventHandlerEditor.passExecutionContextCheckBocId = "passExecContextCheckBox";
Mscrm.EventHandlerEditor.parametersTextAreaId = "functionParameters";
Mscrm.EventHandlerEditor.dialogWidth = 620;
Mscrm.EventHandlerEditor.dialogHeight = 450;
Mscrm.EventHandlerEditor.$g = null;
Mscrm.EventHandlerEditor.$C = null;
Mscrm.EventHandlerEditor.$Z = null;
Mscrm.EventHandlerEditor.$i = null;
Mscrm.EventHandlerEditor.$2 = null;
Mscrm.EventHandlerEditor.$8 = null;
Mscrm.EventHandlerEditor.$5 = null;
Mscrm.EventHandlerEditor.$V = "";
Mscrm.EventHandlerEditor.$k = false;
Mscrm.SaveAs.$7 = "{00000000-0000-0000-0000-000000000000}";
Mscrm.SaveAs.$d = null;
Mscrm.SaveAs.$D = -1;
Mscrm.SaveAs.$c = 100;
Mscrm.SaveAs.$f = false;
Mscrm.SaveAs.$j = -1;
Mscrm.SaveAs.$h = "";
Mscrm.SaveAs.$Y = "";
Mscrm.SaveAs.$e = false;
Mscrm.SaveAs.$a = false;
Mscrm.FormRoleAssignment.displayConditionsXml = null;
Mscrm.FormRoleAssignment.totalFallbackForms = 0;
Mscrm.FormRoleAssignment.isFallbackForm = true;
Mscrm.FormRoleAssignment.canAssignRoles = true;
Mscrm.FormRoleAssignment.$7 = "";
Mscrm.FormRoleAssignment.$r = -1;
Mscrm.FormRoleAssignment.$T = [];
Mscrm.FormRoleAssignment.$Q = null;
Mscrm.FormsOrder.$0 = null;
Mscrm.FormsOrder.$b = null;
Mscrm.FormLibraryAndEventHandlerUtils.$L = null;
Mscrm.FormLibraryAndEventHandlerUtils.$K = null;
Mscrm.FormLibraryAndEventHandlerUtils.$W = null;
Mscrm.FormLibraryAndEventHandlerUtils.$D = "";
Mscrm.FormLibraryAndEventHandlerUtils.$P = false;
Mscrm.FormLibraryAndEventHandlerUtils.$3 = false;
Mscrm.FormLibraryAndEventHandlerUtils.$U = {};
Mscrm.FormLibraryAndEventHandlerUtils.selectedLibrary = null;
Mscrm.FormLibraryAndEventHandlerUtils.selectedEventHandler = null;
Mscrm.FormLibraryAndEventHandlerUtils.formXml = null;
Mscrm.FormLibraryAndEventHandlerUtils.dependencyXml = null;
Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = null;
Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = null;
Mscrm.FormLibraryAndEventHandlerUtils.formLibraryGridlId = "libraryGrid";
Mscrm.FormLibraryAndEventHandlerUtils.eventHandlerGridId = "handlerGrid";
Mscrm.FormLibraryAndEventHandlerUtils.librarySectionId = "librarySection";
Mscrm.FormLibraryAndEventHandlerUtils.handlerSectionId = "handlerSection";
Mscrm.FormLibraryAndEventHandlerUtils.handlerSectionImageId = "handlerSectionImage";
Mscrm.FormLibraryAndEventHandlerUtils.librarySectionImageId = "librarySectionImage";
Mscrm.FormLibraryAndEventHandlerUtils.controlTypeComboId = "controlTypeCombo";
Mscrm.FormLibraryAndEventHandlerUtils.columnComboRowId = "columnComboRow";
Mscrm.FormLibraryAndEventHandlerUtils.entityComboRowId = "entityComboRow";
Mscrm.FormLibraryAndEventHandlerUtils.entityComboId = "entityCombo";
Mscrm.FormLibraryAndEventHandlerUtils.columnComboId = "columnCombo";
Mscrm.FormLibraryAndEventHandlerUtils.eventHandlersLabel = "formEventHandlerDescriptionLabel";
Mscrm.FormLibraryAndEventHandlerUtils.librariesLabel = "formLibrariesDescriptionLabel";
Mscrm.FormLibraryAndEventHandlerUtils.eventTypeComboId = "eventTypeCombo";
Mscrm.FormLibraryAndEventHandlerUtils.libraryLookupId = "libraryLookup";
Mscrm.FormLibraryAndEventHandlerUtils.libraryHandlerXslPath = "/Tools/FormEditor/libraryAndEventHandler.xsl";
Mscrm.FormLibraryAndEventHandlerUtils.webResourceEditorUrl = "/tools/webresourceeditor/webresourceeditor.aspx?name={0}";
Mscrm.FormLibraryAndEventHandlerUtils.handlerEditorUrl = "/tools/formeditor/dialogs/handlereditor.aspx";
Mscrm.FormLibraryAndEventHandlerUtils.selectedColor = "#c4ddff";
Mscrm.FormLibraryAndEventHandlerUtils.unSelectedColor = "#ffffff";
Mscrm.FormLibraryAndEventHandlerUtils.webResourceEditorWidth = 750;
Mscrm.FormLibraryAndEventHandlerUtils.webResourceEditorHeight = 520;
Mscrm.FormLibraryAndEventHandlerUtils.singleGridHeight = 230;
Mscrm.FormLibraryAndEventHandlerUtils.twoGridHeight = 115;
Mscrm.FormLibraryAndEventHandlerUtils.maxLibraries = 50;
Mscrm.Events.onLoad = "onload";
Mscrm.Events.onSave = "onsave";
Mscrm.Events.onChange = "onchange";
Mscrm.Events.onRecordSelect = "onrecordselect";
Mscrm.Events.onReadyStateComplete = "onreadystatecomplete";
Mscrm.Events.tabStateChange = "tabstatechange";
Mscrm.ControlEventInfo.$J = null;
Mscrm.ControlEventInfo.$9 = null;
Mscrm.FormXmlNodes.navBarByRelationship = "NavBarByRelationshipItem";
Mscrm.FormXmlNodes.titles = "Titles";
Mscrm.FormXmlNodes.title = "Title";
Mscrm.FormXmlNodes.navBarItem = "NavBarItem";
Mscrm.FormXmlNodes.library = "Library";
Mscrm.FormXmlNodes.formLibraries = "formLibraries";
Mscrm.FormXmlNodes.handler = "Handler";
Mscrm.FormXmlNodes.internalHandlers = "InternalHandlers";
Mscrm.FormXmlNodes.handlers = "Handlers";
Mscrm.FormXmlNodes.events = "events";
Mscrm.FormXmlNodes.event = "event";
Mscrm.FormXmlNodes.queryStringParameter = "querystringparameter";
Mscrm.FormXmlNodes.formParameters = "formparameters";
Mscrm.FormXmlNodes.dependencies = "dependencies";
Mscrm.FormXmlNodes.dependency = "dependency";
Mscrm.FormXmlNodes.script = "script";
Mscrm.FormXmlNodes.displayConditions = "DisplayConditions";
Mscrm.FormXmlNodes.role = "Role";
Mscrm.FormXmlNodes.labels = "labels";
Mscrm.FormXmlNodes.label = "label";
Mscrm.FormXmlNodes.everyone = "Everyone";
Mscrm.FormXmlNodes.chartGridMode = "ChartGridMode";
Mscrm.FormXmlNodes.enableJumpBar = "EnableJumpBar";
Mscrm.FormXmlNodes.enableQuickFind = "EnableQuickFind";
Mscrm.FormXmlNodes.enableViewPicker = "EnableViewPicker";
Mscrm.FormXmlNodes.component = "Library";
Mscrm.FormXmlAttributes.active = "active";
Mscrm.FormXmlAttributes.added = "added";
Mscrm.FormXmlAttributes.application = "application";
Mscrm.FormXmlAttributes.attribute = "attribute";
Mscrm.FormXmlAttributes.area = "Area";
Mscrm.FormXmlAttributes.auto = "auto";
Mscrm.FormXmlAttributes.colSpan = "colspan";
Mscrm.FormXmlAttributes.classId = "classid";
Mscrm.FormXmlAttributes.description = "description";
Mscrm.FormXmlAttributes.designerAddedColumnsAttribute = "designerAddedColumnsAttribute";
Mscrm.FormXmlAttributes.designerAddedNameAttribute = "designerAddedNameAttribute";
Mscrm.FormXmlAttributes.dirty = "dirty";
Mscrm.FormXmlAttributes.displayName = "displayName";
Mscrm.FormXmlAttributes.enabled = "enabled";
Mscrm.FormXmlAttributes.expanded = "expanded";
Mscrm.FormXmlAttributes.fallBackForm = "FallbackForm";
Mscrm.FormXmlAttributes.functionName = "functionName";
Mscrm.FormXmlAttributes.handlerUniqueId = "handlerUniqueId";
Mscrm.FormXmlAttributes.icon = "Icon";
Mscrm.FormXmlAttributes.dataFieldName = "datafieldname";
Mscrm.FormXmlAttributes.Id = "Id";
Mscrm.FormXmlAttributes.id = "id";
Mscrm.FormXmlAttributes.isNavSpacer = "isNavSpacer";
Mscrm.FormXmlAttributes.languageCode = "languagecode";
Mscrm.FormXmlAttributes.lcid = "LCID";
Mscrm.FormXmlAttributes.libraryName = "libraryName";
Mscrm.FormXmlAttributes.libraryUniqueId = "libraryUniqueId";
Mscrm.FormXmlAttributes.lockLevel = "locklevel";
Mscrm.FormXmlAttributes.nameAttribute = "name";
Mscrm.FormXmlAttributes.relationshipAttribute = "relationship";
Mscrm.FormXmlAttributes.controlAttribute = "control";
Mscrm.FormXmlAttributes.navPaneId = "navPaneId";
Mscrm.FormXmlAttributes.parameters = "parameters";
Mscrm.FormXmlAttributes.passExecutionContext = "passExecutionContext";
Mscrm.FormXmlAttributes.relationshipName = "RelationshipName";
Mscrm.FormXmlAttributes.rowSpan = "rowspan";
Mscrm.FormXmlAttributes.sequence = "Sequence";
Mscrm.FormXmlAttributes.show = "Show";
Mscrm.FormXmlAttributes.showLabel = "showlabel";
Mscrm.FormXmlAttributes.status = "status";
Mscrm.FormXmlAttributes.tabIndex = "tabIndex";
Mscrm.FormXmlAttributes.text = "Text";
Mscrm.FormXmlAttributes.type = "type";
Mscrm.FormXmlAttributes.url = "Url";
Mscrm.FormXmlAttributes.visible = "visible";
Mscrm.NavPaneDisplayOption.useCollectionName = "0";
Mscrm.NavPaneDisplayOption.useLabel = "1";
Mscrm.NavPaneDisplayOption.doNotDisplay = "2";
Mscrm.FormTypes.dashboard = 0;
Mscrm.FormTypes.appointmentBook = 1;
Mscrm.FormTypes.main = 2;
Mscrm.FormTypes.miniCampaignBO = 3;
Mscrm.FormTypes.preview = 4;
Mscrm.FormTypes.mobile = 5;
Mscrm.FormTypes.quick = 6;
Mscrm.FormTypes.quickCreate = 7;
Mscrm.FormTypes.dialog = 8;
Mscrm.FormTypes.taskBasedForm = 9;
Mscrm.FormTypes.interactionCentricDashboard = 10;
Mscrm.FormTypes.card = 11;
Mscrm.FormTypes.mainInteractionCentric = 12;
Mscrm.FormTypes.other = 100;
Mscrm.FormTypes.mainBackup = 101;
Mscrm.FormTypes.appointmentBookBackup = 102;
Mscrm.FormXmlUtils.emptyGuid = "{00000000-0000-0000-0000-000000000000}";
Mscrm.FormXmlUtils.hardCodedRelationNamePrefix = "hardcoded_{B7196B13-6B9D-42CD-BD58-B19A3953126F}";
Mscrm.FormXmlUtils.maxSequenceValue = 2147483647;
Mscrm.FormXmlUtils.minSequenceValue = 1;
Mscrm.FormXmlUtils.maxOrderValue = 2147483647;
Mscrm.FormXmlUtils.selectedElementBorder = "1px solid #0076a3";
Mscrm.FormXmlUtils.unSelectedElementBorder = "1px dashed #6d6e70";
Mscrm.FormXmlUtils.sectionEnabledBackGroudColor = "f6f8fa";
Mscrm.FormXmlUtils.webResourcePrefix = "$webresource:";
Mscrm.EditorType.formEditor = "formEditor";
Mscrm.EditorType.dashboardEditor = "dashboardEditor";
Mscrm.ControlIds.emailPasswordRetype = "emailpasswordretype";
Mscrm.ControlIds.urlType = "urloption";
Mscrm.ControlIds.currencyType = "currencytype";
Mscrm.UnsupportedControlsInfo.$E = {};
Mscrm.UnsupportedControlsInfo.$$cctor();
Mscrm.ControlClassIds.iframe = "{FD2A7985-3187-444e-908D-6624B21F69C0}";
Mscrm.ControlClassIds.lookup = "{270BD3DB-D9AF-4782-9025-509E298DEC0A}";
Mscrm.ControlClassIds.regarding = "{F3015350-44A2-4aa0-97B5-00166532B5E9}";
Mscrm.ControlClassIds.partyList = "{CBFB742C-14E7-4a17-96BB-1A13F7F64AA2}";
Mscrm.ControlClassIds.duration = "{AA987274-CE4E-4271-A803-66164311A958}";
Mscrm.ControlClassIds.integer = "{C6D124CA-7EDA-4a60-AEA9-7FB8D318B68F}";
Mscrm.ControlClassIds.real = "{0D2C745A-E5A8-4c8f-BA63-C6D3BB604660}";
Mscrm.ControlClassIds.money = "{533B9E00-756B-4312-95A0-DC888637AC78}";
Mscrm.ControlClassIds.decimalType = "{C3EFE0C3-0EC6-42be-8349-CBD9079DFD8E}";
Mscrm.ControlClassIds.email = "{ADA2203E-B4CD-49be-9DDF-234642B43B52}";
Mscrm.ControlClassIds.emailBody = "{6F3FB987-393B-4d2d-859F-9D0F0349B6AD}";
Mscrm.ControlClassIds.text = "{4273EDBD-AC1D-40d3-9FB2-095C621B552D}";
Mscrm.ControlClassIds.textArea = "{E0DECE4B-6FC8-4a8f-A065-082708572369}";
Mscrm.ControlClassIds.url = "{71716B6C-711E-476c-8AB8-5D11542BFB47}";
Mscrm.ControlClassIds.tickersSymbol = "{1E1FC551-F7A8-43af-AC34-A8DC35C7B6D4}";
Mscrm.ControlClassIds.memo = "{E0DECE4B-6FC8-4a8f-A065-082708572369}";
Mscrm.ControlClassIds.pickList = "{3EF39988-22BB-4f0b-BBBE-64B5A3748AEE}";
Mscrm.ControlClassIds.status = "{5D68B988-0661-4db2-BC3E-17598AD3BE6C}";
Mscrm.ControlClassIds.dateTime = "{5B773807-9FB2-42db-97C3-7A91EFF8ADFF}";
Mscrm.ControlClassIds.boolean_Radio = "{67FAC785-CD58-4f9f-ABB3-4B7DDC6ED5ED}";
Mscrm.ControlClassIds.boolean_CheckBox = "{B0C6723A-8503-4fd7-BB28-C8A06AC933C2}";
Mscrm.ControlClassIds.language = "{671A9387-CA5A-4d1e-8AB7-06E39DDCF6B5}";
Mscrm.ControlClassIds.subGrid = "{E7A81278-8635-4d9e-8D4D-59480B391C5B}";
Mscrm.ControlClassIds.timeZone = "{7C624A0B-F59E-493d-9583-638D34759266}";
Mscrm.ControlClassIds.connection = "{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}";
Mscrm.ControlClassIds.connectionRole = "{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}";
Mscrm.ControlClassIds.webResourceHtml = "{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}";
Mscrm.ControlClassIds.webResourceImage = "{587CDF98-C1D5-4bde-8473-14A0BC7644A7}";
Mscrm.ControlClassIds.webResourceSilverlight = "{080677DB-86EC-4544-AC42-F927E74B491F}";
Mscrm.ControlClassIds.notes = "{06375649-c143-495e-a496-c962e5b4488e}";
Mscrm.ControlClassIds.kbViewer = "{a62b6fa9-169e-406c-b1aa-eab828cb6026}";
Mscrm.ControlClassIds.articleXML = "{F02EF977-2564-4b9a-B2F0-DF083D8A019B}";
Mscrm.ControlClassIds.accessTeamEntityPicker = "{3F4E2A56-F102-4B4D-AB9C-F1574CA5BFDA}";
Mscrm.ControlClassIds.processControl = "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}";
Mscrm.ControlClassIds.searchWidget = "{E616A57F-20E0-4534-8662-A101B5DDF4E0}";
Mscrm.ControlClassIds.customControl = "{F9A8A302-114E-466A-B582-6771B2AE0D92}";
Mscrm.FormXmlPaths.cellsPathInMainCanvas = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell";
Mscrm.FormXmlPaths.cellsPathInHeader = "/entity/form/header/rows/row/cell";
Mscrm.FormXmlPaths.cellsPathInFooter = "/entity/form/footer/rows/row/cell";
Mscrm.FormXmlPaths.formLibrariesPath = "/entity/form/formLibraries";
Mscrm.FormXmlPaths.formLibraryPath = "/entity/form/formLibraries/Library";
Mscrm.FormXmlPaths.formPath = "/entity/form";
Mscrm.FormXmlPaths.formParameters = "/entity/form/formparameters";
Mscrm.FormXmlPaths.formEventsPath = "/entity/form/events";
Mscrm.FormXmlPaths.formEventPath = "/entity/form/events/event";
Mscrm.FormXmlPaths.formEventHandlerPath = "/entity/form/events/event/Handlers/Handler";
Mscrm.FormXmlPaths.formInternalEventHandlerPath = "/entity/form/events/event/InternalHandlers/Handler";
Mscrm.FormXmlPaths
    .cellInternalEventHandlerPath =
    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/InternalHandlers/Handler";
Mscrm.FormXmlPaths
    .cellEventHandlerPath =
    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/Handlers/Handler";
Mscrm.FormXmlPaths.cellEventPath = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event";
Mscrm.FormXmlPaths.tabInternalEventHandlerPath = "/entity/form/tabs/tab/events/event/InternalHandlers/Handler";
Mscrm.FormXmlPaths.tabEventHandlerPath = "/entity/form/tabs/tab/events/event/Handlers/Handler";
Mscrm.FormXmlPaths
    .mainBodyCellEventPath = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event";
Mscrm.FormXmlPaths
    .mainBodyCellEventsPath = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events";
Mscrm.FormXmlPaths.tabPath = "/entity/form/tabs/tab";
Mscrm.FormXmlPaths.tabEventPath = "/entity/form/tabs/tab/events/event";
Mscrm.FormXmlPaths.tabEventsPath = "/entity/form/tabs/tab/events";
Mscrm.FormXmlPaths.displayConditions = "/entity/form/DisplayConditions";
Mscrm.FormXmlPaths.navBarByRelationshipItem = "/entity/form/Navigation/NavBar/NavBarByRelationshipItem";
Mscrm.FormXmlPaths.navBarArea = "/entity/form/Navigation/NavBarAreas/NavBarArea";
Mscrm.FormXmlPaths.resourcesPath = "/entity/form/resources";
Mscrm.FormXmlPaths.header = "/entity/form/header";
Mscrm.FormXmlPaths.footer = "/entity/form/footer";
Mscrm.FormXmlPaths.navigation = "/entity/form/Navigation";
Mscrm.FormXmlPaths.navBarAreas = "/entity/form/Navigation/NavBarAreas";
Mscrm.FormXmlPaths.navBar = "/entity/form/Navigation/NavBar";
Mscrm.FormXmlPaths.sectionsPathInTab = "/entity/form/tabs/tab[@id = '{0}']/columns/column/sections/section";
Mscrm.FormXmlPaths
    .cellsPathInSection =
    "/entity/form/tabs/tab[@id = '{0}']/columns/column/sections/section[@id = '{1}']/rows/row/cell";
Mscrm.FormXmlPaths
    .customControlDescriptionInSection =
    "/entity/form/controlDescriptions/controlDescription[@forControl = '{0}']/customControl[@id='{1}']";
Mscrm.FormXmlPaths
    .controlByCellId = "/entity/form/tabs/tab/columns/column/sections//section/rows/row/cell[@id='{0}']/control";
Mscrm.FormXmlPaths.webResourceLibrariesPath = "/Dependencies/Dependency";
Mscrm.FormXmlPaths.webResourceLibraryPath = "/Dependencies/Dependency/Library";
Mscrm.FormCrudUtils.$q = false