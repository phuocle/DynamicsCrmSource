Type.registerNamespace("Mscrm");
Mscrm.HierarchySettingsGrid = function() {};
Mscrm.HierarchySettingsGrid.get_gridHierarchySettings = function() {
    if (!Mscrm.HierarchySettingsGrid.$2) {
        Mscrm.HierarchySettingsGrid.$2 = $find("gridHierarchyRules");
        if (!Mscrm.HierarchySettingsGrid.$2) throw Error.argumentNull("gridControl is null")
    }
    return Mscrm.HierarchySettingsGrid.$2
};
Mscrm.HierarchySettingsGrid.createNewHierarchyRule = function() {
    var $v_0 = !Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().GetParameter("entityId")
            ? ""
            : Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().GetParameter("entityId"),
        $v_1 = Mscrm.CrmUri.create(String
            .format("/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?entityId={0}", $v_0));
    openStdWin($v_1, "HierarchyRuleEditor", 1024, 768, null)
};
Mscrm.HierarchySettingsGrid.managePropertiesFromGridCommand = function() {
    if (Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEHIERARCHYRULE);
        return
    }
    var $v_0 = Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds()[0];
    Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(8840, $v_0)
};
Mscrm.HierarchySettingsGrid.viewDependenciesFromGridCommand = function() {
    if (Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEHIERARCHYRULE);
        return
    }
    var $v_0 = Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds()[0];
    Mscrm.Dependency.launchDependencyDlg(8840, $v_0)
};
Mscrm.HierarchySettingsGrid.deleteRuleFromGridCommand = function() {
    if (Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds().length < 1) {
        alert(window.LOCID_ACTION_SELECTONEHIERARCHYRULE);
        return
    }
    Mscrm.GridRibbonActions.deleteRecords(Mscrm.HierarchySettingsGrid.get_gridHierarchySettings(),
        Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedRecords(),
        Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_entityTypeCode())
};
Mscrm.HierarchySettingsGrid.onHierarchySettingsGridClick = function(sender, args) {
    if (sender) {
        args.objectTypeCode = Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_entityTypeCode();
        Mscrm.HierarchySettingsGrid.editExistingHierarchyRule(sender, args);
        args.breakEvent = true
    }
};
Mscrm.HierarchySettingsGrid.editExistingRuleFromGridCommand = function() {
    if (Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEHIERARCHYRULE);
        return
    }
    var $v_0 = Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().get_selectedIds()[0];
    Mscrm.HierarchySettingsGrid.$7($v_0)
};
Mscrm.HierarchySettingsGrid.editExistingHierarchyRule = function(sender, args) {
    if (sender) {
        Mscrm.HierarchySettingsGrid.$7(args.objectID);
        args.breakEvent = true
    }
};
Mscrm.HierarchySettingsGrid.$7 = function($p0) {
    var $v_0 = !Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().GetParameter("entityId")
            ? ""
            : Mscrm.HierarchySettingsGrid.get_gridHierarchySettings().GetParameter("entityId"),
        $v_1 = Mscrm.CrmUri.create(String
            .format("/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?entityId={0}&_bEdit={1}&hierarchySettingId={2}", $v_0, true, $p0));
    openStdWin($v_1, buildWinName($p0), 1024, 768, null)
};
Mscrm.HierarchySettings = function() {};
Mscrm.HierarchySettings.saveHierarchySettingAction = function(close) {
    if (Mscrm.HierarchySettings.$D()) {
        var $v_0 = _bCreate, $v_1 = _sEntityId;
        Mscrm.HierarchySettings.$0 = _sEntityTypeCode;
        Mscrm.HierarchySettings.$A();
        if ($v_0) {
            var $v_2 = newHierarchySettingSolutionPrefix,
                $v_3 = Mscrm.HierarchySettings.$9($v_2 + Mscrm.HierarchySettings.$5,
                    Mscrm.HierarchySettings.$4,
                    Mscrm.HierarchySettings.$3,
                    Mscrm.HierarchySettings.$0);
            if ($v_3 && !close) {
                window.opener.location.reload();
                var $v_4 = Mscrm.CrmUri.create(String
                        .format("/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?entityId={0}&_bEdit={1}&hierarchySettingId={2}", $v_1, true, Mscrm.HierarchySettings.$1)),
                    $v_5 = $P_CRM(document).find("#frmReloadId");
                $v_5.attr("action", $v_4.toString());
                $v_5.submit();
                return
            }
        } else if (Mscrm.HierarchySettings.$C()) {
            Mscrm.HierarchySettings.$1 = _sHierachySettingId;
            Mscrm.HierarchySettings.$B(Mscrm.HierarchySettings.$1,
                Mscrm.HierarchySettings.$5,
                Mscrm.HierarchySettings.$4,
                Mscrm.HierarchySettings.$3)
        }
        if (close) {
            if (window.IS_OUTLOOK_CLIENT) {
                var $v_6 = window.opener.frames[1].$find("gridHierarchyRules");
                $v_6.Refresh()
            } else window.opener.$find("gridHierarchyRules").Refresh();
            Mscrm.HierarchySettings.$8();
            return
        }
    }
};
Mscrm.HierarchySettings.disableInformationNav = function() {
    $P_CRM(document).find("#navInformationPage").attr("onclick", "")
};
Mscrm.HierarchySettings.openFormEditorWindow = function() {
    if (!Mscrm.HierarchySettings.$0) Mscrm.HierarchySettings.$0 = _sEntityTypeCode;
    Mscrm.FormEditor.OpenFormEditor(Mscrm.HierarchySettings.$0, "quick", null, 0)
};
Mscrm.HierarchySettings.openHierarchyRelationshipWindow = function() {
    if (isNullOrEmptyString(Mscrm.HierarchySettings.$6))
        Mscrm.HierarchySettings.$6 = "/_grid/cmds/dlg_hierarchyrelationship.aspx?entityId=" +
            _sEntityId.toString().replace("{", "").replace("}", "");
    var $v_0 = Mscrm.CrmUri.create(String.format(Mscrm.HierarchySettings.$6, Mscrm.HierarchySettings.$0));
    openStdWin($v_0, "HierarcyRelationship", 1e3, 400, null)
};
Mscrm.HierarchySettings.$D = function() {
    var $v_0 = true;
    $v_0 = $v_0 && validateRequiredValue($P_CRM("#txtHierarchySettingName").get(0));
    if (!$v_0) return false;
    var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("selectQuickForm");
    if (IsNull($v_1.get_dataValue()) ||
        isNullOrEmptyString($v_1.get_dataValue().toString()) ||
        window.LOCID_QUICKFORM_DEFAULTSELECT === $v_1.get_dataValue().toString()) {
        alert(String.format(window.LOCID_SELECT_QUICKFORM,
            XUI.Html.GetText($P_CRM("#" + $v_1.get_element().id + "Label").get(0))));
        return false
    }
    $v_0 = $v_0 && validateRequiredValue($P_CRM("#selectQuickForm").get(0));
    isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior("txtRelationship").get_dataValue()) &&
        alert(window.LOCID_WARNING_NOHIERARCHY);
    return $v_0
};
Mscrm.HierarchySettings.$C = function() {
    var $v_0 = false;
    $v_0 = $v_0 || Mscrm.FormControlInputBehavior.GetBehavior("txtHierarchySettingName").get_isDirty();
    $v_0 = $v_0 || Mscrm.FormControlInputBehavior.GetBehavior("txtRelationship").get_isDirty();
    $v_0 = $v_0 || Mscrm.FormControlInputBehavior.GetBehavior("selectQuickForm").get_isDirty();
    $v_0 = $v_0 || Mscrm.FormControlInputBehavior.GetBehavior("txtHierarchySettingDescription").get_isDirty();
    return $v_0
};
Mscrm.HierarchySettings.$8 = function() {
    window.opener.location.reload();
    window.close()
};
Mscrm.HierarchySettings.$9 = function($p0, $p1, $p2, $p3) {
    var $v_0 = new RemoteCommand("HierarchySettingWebService", "CreateHierarchySetting", null);
    $v_0.SetParameter("name", $p0);
    $v_0.SetParameter("description", $p1);
    $v_0.SetParameter("entityFormId", $p2);
    $v_0.SetParameter("rootEntityTypeCode", $p3);
    var $v_1 = $v_0.Execute(null);
    if ($v_1.Success) {
        Mscrm.HierarchySettings.$1 = $v_1.ReturnValue;
        _bCreate = false;
        _sHierachySettingId = Mscrm.HierarchySettings.$1;
        return true
    }
    return false
};
Mscrm.HierarchySettings.$B = function($p0, $p1, $p2, $p3) {
    var $v_0 = new RemoteCommand("HierarchySettingWebService", "UpdateHierarchySetting", null);
    $v_0.SetParameter("hierarchySettingId", $p0);
    $v_0.SetParameter("name", $p1);
    $v_0.SetParameter("description", $p2);
    $v_0.SetParameter("entityFormId", $p3);
    $v_0.Execute()
};
Mscrm.HierarchySettings.$A = function() {
    Mscrm.HierarchySettings.$5 = Mscrm.FormControlInputBehavior.GetBehavior("txtHierarchySettingName").get_dataValue()
        .toString();
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("txtHierarchySettingDescription").get_dataValue();
    Mscrm.HierarchySettings.$4 = !IsNull($v_0) ? $v_0.toString() : "";
    Mscrm.HierarchySettings.$3 = Mscrm.FormControlInputBehavior.GetBehavior("selectQuickForm").get_dataValue()
        .toString()
};
Mscrm.HierarchySettingsGrid.registerClass("Mscrm.HierarchySettingsGrid");
Mscrm.HierarchySettings.registerClass("Mscrm.HierarchySettings");
Mscrm.HierarchySettingsGrid
    .createHierarchySettingUrl = "/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?entityId={0}";
Mscrm.HierarchySettingsGrid
    .updateHierarchySettingUrl =
    "/tools/systemcustomization/HierarchyRules/manageHierarchyRule.aspx?entityId={0}&_bEdit={1}&hierarchySettingId={2}";
Mscrm.HierarchySettingsGrid.$2 = null;
Mscrm.HierarchySettings.$5 = "";
Mscrm.HierarchySettings.$4 = "";
Mscrm.HierarchySettings.$3 = "";
Mscrm.HierarchySettings.$0 = 0;
Mscrm.HierarchySettings.$1 = "";
Mscrm.HierarchySettings.$6 = ""