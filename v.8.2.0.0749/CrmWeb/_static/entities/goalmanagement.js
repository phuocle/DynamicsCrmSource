Type.registerNamespace("Mscrm");
Mscrm.GoalForm = function() {};
Mscrm.GoalForm.goalFormOnLoad = function() {
    var $v_0 = 0, $v_1 = -1, $v_2 = 0;
    if (!(window.VAR_METRIC_TYPE === undefined ||
        window.VAR_METRIC_TYPE === undefined ||
        window.VAR_TRACK_STRETCHED === undefined)) {
        $v_0 = VAR_METRIC_TYPE;
        $v_1 = VAR_METRIC_DATA_TYPE;
        $v_2 = VAR_TRACK_STRETCHED
    }
    Mscrm.GoalForm.onChangeRollupOnlyFromChildGoals();
    Mscrm.GoalForm.handleSections($v_0, $v_1, $v_2);
    Mscrm.GoalForm.$x();
    Mscrm.GoalForm.handleParentGoalDependents(false);
    var $v_3 = $find("crmForm");
    $v_3.add_onSave(Mscrm.GoalForm.$17);
    Mscrm.GoalForm.$J = Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").get_dataValue();
    Mscrm.GoalForm.$I = Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").get_dataValue();
    Mscrm.GoalForm.$X = Mscrm.FormControlInputBehavior.GetBehavior("fiscalperiod").get_dataValue();
    Mscrm.GoalForm.$Y = Mscrm.FormControlInputBehavior.GetBehavior("fiscalyear").get_dataValue();
    Mscrm.GoalForm.$Q = Mscrm.FormInputControl.RadioGroupBehavior
        .getRadioDataValue(Mscrm.FormControlInputBehavior.GetBehavior("isfiscalperiodgoal").get_dataValue())
};
Mscrm.GoalForm.$17 = function($p0, $p1) {
    var $v_0 = Xrm.Page.getAttribute("isfiscalperiodgoal"), $v_1 = Xrm.Page.getAttribute("fiscalperiod");
    if ($v_0.getValue() && !$v_1.getValue()) {
        Xrm.Internal.openErrorDialog(-2147202813, "");
        !IsNull($p1) && $p1.preventDefault();
        return
    }
    var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("rolluponlyfromchildgoals");
    if (!IsNull($v_2) && !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_2.get_dataValue())) {
        var $v_6 = Mscrm.FormControlInputBehavior.GetBehavior("consideronlygoalownersrecords");
        if (!IsNull($v_6) && !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_6.get_dataValue())) {
            for (var $v_7 = false, $v_8 = 0; $v_8 < Mscrm.GoalForm.$1.length; $v_8++) {
                var $v_9 = Xrm.Page.getControl(Mscrm.GoalForm.$1[$v_8]);
                if ($v_9 && $v_9.getVisible()) {
                    var $v_A = Mscrm.FormControlInputBehavior.GetBehavior(Mscrm.GoalForm.$1[$v_8]);
                    if (!$v_A.get_dataValue()) {
                        $v_7 = true;
                        break
                    }
                }
            }
            if ($v_7) {
                var $v_B = "";
                if (!(window.GOAL_QUERY_NOT_SPECIFIED === undefined)) $v_B = GOAL_QUERY_NOT_SPECIFIED;
                else if (Mscrm.SessionInfo
                    .isOutlookClient())
                    $v_B = getOutlookHostedWindow().getResourceString("GoalRollupCriteriaNotSpecifiedErrorMessage");
                alert($v_B);
                !IsNull($p1) && $p1.preventDefault();
                return
            }
        }
    }
    var $v_3 = $get("parentgoalid"), $v_4 = null;
    if (!IsNull($v_3)) $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id);
    var $v_5 = true;
    if (!(window.IS_NEW_FORM === undefined)) $v_5 = IS_NEW_FORM == true;
    if (Mscrm.GoalForm.$H && !$v_5 && !$v_4.get_dataValue()) {
        var $v_C = Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").get_dataValue(),
            $v_D = Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").get_dataValue(),
            $v_E = Mscrm.FormControlInputBehavior.GetBehavior("isfiscalperiodgoal"),
            $v_F = Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_E.get_dataValue());
        if (Mscrm.DateTimeUtility.getDateOnly($v_C) - Mscrm.DateTimeUtility.getDateOnly(Mscrm.GoalForm.$J) ||
            Mscrm.DateTimeUtility.getDateOnly($v_D) - Mscrm.DateTimeUtility.getDateOnly(Mscrm.GoalForm.$I) ||
            $v_F !== Mscrm.GoalForm.$Q)
            if (!confirm(window.LOCID_DATE_CHANGE_WARNING)) {
                !IsNull($p1) && $p1.preventDefault();
                Mscrm.FormControlInputBehavior.GetBehavior("isfiscalperiodgoal").set_dataValue(Mscrm.GoalForm.$Q);
                Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").set_dataValue(Mscrm.GoalForm.$J);
                Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").set_dataValue(Mscrm.GoalForm.$I);
                Mscrm.FormControlInputBehavior.GetBehavior("fiscalperiod").set_dataValue(Mscrm.GoalForm.$X);
                Mscrm.FormControlInputBehavior.GetBehavior("fiscalyear").set_dataValue(Mscrm.GoalForm.$Y);
                Mscrm.GoalForm.onChangePeriodFields();
                $p1.preventDefault()
            }
    }
};
Mscrm.GoalForm.showStretchedTarget = function(stretchedtargetField, isStretchedTracked) {
    var $v_0 = false;
    if (isStretchedTracked === 1) $v_0 = true;
    Mscrm.GoalForm.$M(stretchedtargetField, $v_0)
};
Mscrm.GoalForm.handleSections = function(metricType, dataType, isStretchedTracked) {
    if (metricType === -1) Mscrm.GoalForm.showHideSections(true, true, true);
    else if (!metricType) {
        Mscrm.GoalForm.showHideSections(true, true, false);
        Mscrm.GoalForm.showStretchedTarget(Mscrm.GoalForm.$S, isStretchedTracked)
    } else
        switch (dataType) {
        case 0:
            Mscrm.GoalForm.showHideSections(false, true, true);
            Mscrm.GoalForm.showStretchedTarget(Mscrm.GoalForm.$b, isStretchedTracked);
            break;
        case 1:
            Mscrm.GoalForm.showHideSections(true, false, true);
            Mscrm.GoalForm.showStretchedTarget(Mscrm.GoalForm.$a, isStretchedTracked);
            break;
        case 2:
            Mscrm.GoalForm.showHideSections(true, true, false);
            Mscrm.GoalForm.showStretchedTarget(Mscrm.GoalForm.$S, isStretchedTracked);
            break
        }
};
Mscrm.GoalForm.showHideSections = function(hideMoneySections, hideDecimalSections, hideIntSections) {
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$v, hideMoneySections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$w, hideIntSections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$u, hideDecimalSections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$o, hideMoneySections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$p, hideIntSections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$n, hideDecimalSections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$s, hideMoneySections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$t, hideIntSections);
    Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$r, hideDecimalSections)
};
Mscrm.GoalForm.showHideSection = function(sectionId, hide) {
    var $v_0 = $get(sectionId);
    if (!IsNull($v_0)) $v_0.style.display = hide ? "none" : ""
};
Mscrm.GoalForm.onChangeGoalDate = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").get_dataValue(),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").get_dataValue();
    if ($v_0 && $v_1) {
        if ($v_1 < $v_0) {
            var $v_2 = "";
            if (!(window.GOAL_INVALID_START_DATE === undefined)) $v_2 = GOAL_INVALID_START_DATE;
            else if (Mscrm.SessionInfo.isOutlookClient())
                $v_2 = getOutlookHostedWindow().getResourceString("GoalDateValidationErrorMessage");
            alert($v_2);
            if (Mscrm.GoalForm.$L)
                Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").set_dataValue(Mscrm.GoalForm.$L);
            else Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").set_dataValue(null);
            if (Mscrm.GoalForm.$Z)
                Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").set_dataValue(Mscrm.GoalForm.$L);
            else Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").set_dataValue(null);
            return
        }
        Mscrm.GoalForm.$H = true
    }
    Mscrm.GoalForm.$L = $v_0;
    Mscrm.GoalForm.$Z = $v_1
};
Mscrm.GoalForm.handleParentGoalDependents = function(populateDependents) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("parentgoalid"), $v_1 = false;
    if (!$v_0.get_dataValue()) $v_1 = true;
    else if (populateDependents) {
        var $v_2 = $v_0.get_typedDataValue()[0];
        Mscrm.GoalForm.$19($v_2.id)
    }
    Mscrm.GoalForm.$15(!$v_1)
};
Mscrm.GoalForm.parentgoalsetadditionalparams = function(elementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(elementId), $v_1 = $get("crmFormSubmit");
    if (!IsNull($v_1))
        !IsNull($v_1.crmFormSubmitId.value) &&
            $v_1.crmFormSubmitId.value !== "" &&
            $v_0.AddParam("ObjectId", $v_1.crmFormSubmitId.value);
    $v_0.AddBindingColumn("metricid")
};
Mscrm.GoalForm.metricsetadditionalparams = function(elementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(elementId);
    $v_0.AddBindingColumn("amountdatatype");
    $v_0.AddBindingColumn("isamount");
    $v_0.AddBindingColumn("isstretchtracked")
};
Mscrm.GoalForm.queryLookupsetadditionalparams = function(elementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("metricid"), $v_1 = "";
    if (!$v_0.get_dataValue()) return;
    else {
        var $v_8 = $v_0.get_typedDataValue()[0];
        $v_1 = $v_8.id
    }
    var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior(elementId), $v_3 = $v_2.get_element().id, $v_4 = new Array(1);
    $v_4[0] = "sourceentity";
    $v_4.type = "string";
    var $v_5 = new RemoteCommand("GoalManagement", "RetrieveMetricLineItem", null);
    $v_5.SetParameter("metricId", $v_1);
    $v_5.SetParameter("rollupQueryField", $v_3);
    $v_5.SetParameter("columns", $v_4);
    var $v_6 = $v_5.Execute(), $v_7 = 0;
    if ($v_6.Success) {
        var $v_9 = $v_6.ReturnValue,
            $v_A = XUI.Xml.LoadXml($v_9),
            $v_B = XUI.Xml.SelectSingleNode($v_A, "/rollupfield", null);
        if ($v_B) $v_7 = parseInt(Mscrm.XmlUtil.getNodeText($v_B, "sourceentity", "0"), 10)
    }
    $v_7 && $v_2.AddParam("membertypecode", $v_7)
};
Mscrm.GoalForm.onChangePeriodFields = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("isfiscalperiodgoal");
    if (!IsNull($v_0) && !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_0.get_dataValue())) {
        Mscrm.GoalForm.$h(false);
        Xrm.Page.getAttribute("fiscalyear").setValue(null);
        Xrm.Page.getAttribute("fiscalperiod").setValue(null)
    } else Mscrm.GoalForm.$h(true);
    Mscrm.GoalForm.$H = true
};
Mscrm.GoalForm.enableDisableNavPaneItems = function(disable) {
    var $v_0 = $get("navActual"), $v_1 = $get("navCustomRollupField"), $v_2 = $get("navInProgress");
    if (disable) {
        if (!IsNull($v_0)) $v_0.disabled = true;
        if (!IsNull($v_1)) $v_1.disabled = true;
        if (!IsNull($v_2)) $v_2.disabled = true
    } else {
        if (!IsNull($v_0)) $v_0.disabled = false;
        if (!IsNull($v_1)) $v_1.disabled = false;
        if (!IsNull($v_2)) $v_2.disabled = false
    }
};
Mscrm.GoalForm.onChangeRollupOnlyFromChildGoals = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("rolluponlyfromchildgoals");
    if (!IsNull($v_0) && Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_0.get_dataValue())) {
        Mscrm.GoalForm.$e();
        Mscrm.GoalForm.$g(true);
        Mscrm.GoalForm.enableDisableNavPaneItems(true)
    } else {
        Mscrm.GoalForm.$g(false);
        Mscrm.GoalForm.enableDisableNavPaneItems(false)
    }
};
Mscrm.GoalForm.$e = function() {
    for (var $v_0 = 0; $v_0 < Mscrm.GoalForm.$1.length; $v_0++) Mscrm.GoalForm.$13(Mscrm.GoalForm.$1[$v_0])
};
Mscrm.GoalForm.$h = function($p0) {
    if (window.VAR_IS_FORM_DISABLED === undefined || VAR_IS_FORM_DISABLED === "0")
        if ($p0) {
            Mscrm.GoalForm.$0("fiscalyear", false);
            Mscrm.GoalForm.$0("fiscalperiod", false);
            Mscrm.GoalForm.$0("goalstartdate", true);
            Mscrm.GoalForm.$0("goalenddate", true);
            Xrm.Page.getAttribute("fiscalyear").setRequiredLevel("required");
            Xrm.Page.getAttribute("fiscalperiod").setRequiredLevel("required");
            Xrm.Page.getAttribute("goalstartdate").setRequiredLevel("none");
            Xrm.Page.getAttribute("goalenddate").setRequiredLevel("none")
        } else {
            Mscrm.GoalForm.$0("fiscalyear", true);
            Mscrm.GoalForm.$0("fiscalperiod", true);
            Mscrm.GoalForm.$0("goalstartdate", false);
            Mscrm.GoalForm.$0("goalenddate", false);
            Xrm.Page.getAttribute("fiscalyear").setRequiredLevel("none");
            Xrm.Page.getAttribute("fiscalperiod").setRequiredLevel("none");
            Xrm.Page.getAttribute("goalstartdate").setRequiredLevel("required");
            Xrm.Page.getAttribute("goalenddate").setRequiredLevel("required")
        }
};
Mscrm.GoalForm.onQueryLookupChange = function() {};
Mscrm.GoalForm.onMetricChange = function(elementId) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(elementId), $v_1 = "", $v_2 = null, $v_3 = null, $v_4 = "0";
    if ($v_0.get_dataValue()) {
        var $v_5 = $v_0.Items(false, false, false, false, false);
        if ($v_5.length > 0) {
            var $v_6 = "isamount";
            if (!IsNull($v_5[0].keyValues[$v_6])) {
                $v_2 = $v_5[0].keyValues["amountdatatype"].value;
                $v_3 = $v_5[0].keyValues["isamount"].value;
                $v_4 = $v_5[0].keyValues["isstretchtracked"].value;
                $v_1 = $v_5[0].id;
                if ($v_3 === "Amount") $v_3 = "1";
                else if ($v_3 === "Count") $v_3 = "0";
                switch ($v_2) {
                case "Money":
                    $v_2 = "0";
                    break;
                case "Decimal":
                    $v_2 = "1";
                    break;
                case "Integer":
                    $v_2 = "2";
                    break
                }
                if ($v_4 === "1") $v_4 = "1";
                else $v_4 = "0"
            }
        }
    }
    Mscrm.GoalForm.$j($v_1, $v_3, $v_2, $v_4);
    Mscrm.GoalForm.enableDisableNavPaneItems(true)
};
Mscrm.GoalForm.onParentGoalChange = function() {
    Mscrm.GoalForm.handleParentGoalDependents(true);
    Mscrm.GoalForm.enableDisableNavPaneItems(true)
};
Mscrm.GoalForm.$1A = function($p0, $p1, $p2, $p3) {
    var $v_0 = $find("crmForm"),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior($v_0.GetControl($p0).id),
        $v_2 = new LookupControlItem;
    $v_2.id = $p1;
    $v_2.type = $p2;
    $v_2.name = $p3;
    var $v_3 = [$v_2];
    $v_1.set_dataValue($v_3)
};
Mscrm.GoalForm.$15 = function($p0) {
    if (window.VAR_IS_FORM_DISABLED === undefined || VAR_IS_FORM_DISABLED === "0")
        if ($p0) {
            Mscrm.GoalForm.$0("metricid", true);
            for (var $v_0 = 0; $v_0 < Mscrm.GoalForm.$K.length; $v_0++) Mscrm.GoalForm.$0(Mscrm.GoalForm.$K[$v_0], true)
        } else {
            var $v_1 = Xrm.Page.getAttribute("metricid");
            window.HAS_METRIC_READ_APPTO && $v_1.getUserPrivilege().canUpdate && Mscrm.GoalForm.$0("metricid", false);
            for (var $v_2 = 0;
                $v_2 < Mscrm.GoalForm.$K.length;
                $v_2++
            ) Mscrm.GoalForm.$0(Mscrm.GoalForm.$K[$v_2], false);
            Mscrm.GoalForm.onChangePeriodFields()
        }
};
Mscrm.GoalForm.$19 = function($p0) {
    var $v_0 = new Array(6);
    $v_0[0] = "metricid";
    $v_0[1] = "isfiscalperiodgoal";
    $v_0[2] = "fiscalyear";
    $v_0[3] = "fiscalperiod";
    $v_0[4] = "goalstartdate";
    $v_0[5] = "goalenddate";
    $v_0.type = "string";
    var $v_1 = new RemoteCommand("GoalManagement", "RetrieveGoal", null);
    $v_1.SetParameter("id", $p0);
    $v_1.SetParameter("columns", $v_0);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        var $v_3 = $v_2.ReturnValue,
            $v_4 = XUI.Xml.LoadXml($v_3),
            $v_5 = XUI.Xml.SelectSingleNode($v_4, "/goal", null),
            $v_6 = Mscrm.XmlUtil.getNodeText($v_5, "isfiscalperiodgoal", "true"),
            $v_7 = Mscrm.XmlUtil.getNodeText($v_5, "fiscalyear", null),
            $v_8 = Mscrm.XmlUtil.getNodeText($v_5, "fiscalperiod", null),
            $v_9 = Mscrm.XmlUtil.getNodeText($v_5, "goalstartdate/@date", null),
            $v_A = Mscrm.XmlUtil.getNodeText($v_5, "goalenddate/@date", null);
        Mscrm.FormControlInputBehavior.GetBehavior("isfiscalperiodgoal")
            .set_dataValue(Mscrm.Utilities.parseBoolean($v_6));
        Mscrm.FormControlInputBehavior.GetBehavior("fiscalyear").set_dataValue($v_7);
        Mscrm.FormControlInputBehavior.GetBehavior("fiscalperiod").set_dataValue($v_8);
        Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate")
            .set_dataValue(Mscrm.DateTimeUtility.parseDate($v_9));
        Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").set_dataValue(Mscrm.DateTimeUtility.parseDate($v_A));
        var $v_B = XUI.Xml.SelectSingleNode($v_4, "/goal/metricid", null)
                ? XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/goal/metricid", null))
                : "",
            $v_C = XUI.Xml.SelectSingleNode($v_4, "/goal/metricid/@name", null)
                ? XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "/goal/metricid/@name", null))
                : "",
            $v_D = $get("metricid"),
            $v_E = null;
        if (!IsNull($v_D)) {
            var $v_F = Mscrm.FormControlInputBehavior.GetBehavior($v_D.id);
            if (!IsNull($v_F.get_dataValue())) {
                var $v_G = $v_F.get_typedDataValue()[0];
                $v_E = $v_G.id
            }
        }
        Mscrm.GoalForm.$1A("metricid", $v_B, "9603", $v_C);
        $v_B !== $v_E && Mscrm.GoalForm.$j($v_B, null, null, null)
    }
};
Mscrm.GoalForm.onChangeFiscalFields = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("fiscalyear");
    if ($v_0.get_dataValue()) {
        var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("fiscalperiod");
        if ($v_1.get_dataValue()) {
            var $v_2 = new RemoteCommand("GoalManagement", "GetFiscalPeriodDates", null);
            $v_2.SetParameter("fiscalYear", parseInt($v_0.get_dataValue(), 10));
            $v_2.SetParameter("goalFiscalPeriod", parseInt($v_1.get_dataValue(), 10));
            var $v_3 = $v_2.Execute();
            if ($v_3.Success) {
                var $v_4 = $v_3.ReturnValue;
                if ($v_4 === "<Fail/>") {
                    Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate").set_dataValue(Mscrm.GoalForm.$J);
                    Mscrm.FormControlInputBehavior.GetBehavior("goalenddate").set_dataValue(Mscrm.GoalForm.$I)
                } else {
                    var $v_5 = XUI.Xml.LoadXml($v_4),
                        $v_6 = XUI.Xml.SelectSingleNode($v_5, "dates", null),
                        $v_7 = Mscrm.XmlUtil.getNodeText($v_6, "startdate", null),
                        $v_8 = Mscrm.XmlUtil.getNodeText($v_6, "enddate", null),
                        $v_9 = Mscrm.FormControlInputBehavior.GetBehavior("goalstartdate"),
                        $v_A = Mscrm.FormControlInputBehavior.GetBehavior("goalenddate");
                    $v_9.set_dataValue(new Date($v_7));
                    $v_A.set_dataValue(new Date($v_8));
                    $v_9.set_forceSubmit(true);
                    $v_A.set_forceSubmit(true);
                    Mscrm.GoalForm.$H = true
                }
            }
        }
    }
};
Mscrm.GoalForm.$d = function() {
    Mscrm.GoalForm.$e();
    Mscrm.GoalForm.$14()
};
Mscrm.GoalForm.$E = function($p0) {
    var $v_0 = $get($p0);
    !IsNull($v_0) && Mscrm.FormControlInputBehavior.GetElementBehavior($v_0).set_dataValue(0)
};
Mscrm.GoalForm.$13 = function($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0);
    !IsNull($v_0) && $v_0.set_dataValue(null)
};
Mscrm.GoalForm.$14 = function() {
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$10);
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$b);
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$y);
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$a);
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$z);
    Mscrm.GoalForm.$E(Mscrm.GoalForm.$S)
};
Mscrm.GoalForm.$j = function($p0, $p1, $p2, $p3) {
    if (IsNull($p0) || $p0 === "") {
        Mscrm.GoalForm.handleSections(-1, -1, -1);
        Mscrm.GoalForm.$d();
        return
    }
    if (IsNull($p1) || $p1 === "") {
        var $v_0 = new Array(4);
        $v_0[0] = "metricid";
        $v_0[1] = "amountdatatype";
        $v_0[2] = "isamount";
        $v_0[3] = "isstretchtracked";
        $v_0.type = "string";
        var $v_1 = new RemoteCommand("GoalManagement", "RetrieveMetric", null);
        $v_1.SetParameter("id", $p0);
        $v_1.SetParameter("columns", $v_0);
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) {
            var $v_3 = $v_2.ReturnValue,
                $v_4 = XUI.Xml.LoadXml($v_3),
                $v_5 = XUI.Xml.SelectSingleNode($v_4, "/metric", null);
            $p2 = Mscrm.XmlUtil.getNodeText($v_5, "amountdatatype", "1");
            $p1 = Mscrm.XmlUtil.getNodeText($v_5, "isamount", "1");
            $p3 = Mscrm.XmlUtil.getNodeText($v_5, "isstretchtracked", "0");
            if ($p1 === "true") $p1 = "1";
            else $p1 = "0";
            if ($p3 === "true") $p3 = "1";
            else $p3 = "0"
        }
    }
    Mscrm.GoalForm.$d();
    Mscrm.GoalForm.handleSections(parseInt($p1, 10), parseInt($p2, 10), parseInt($p3, 10));
    Mscrm.GoalForm.$x()
};
Mscrm.GoalForm.$x = function() {
    var $v_0 = "", $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("metricid");
    if (!$v_1.get_dataValue()) return;
    var $v_2 = $v_1.get_typedDataValue()[0];
    $v_0 = $v_2.id;
    var $v_3 = new RemoteCommand("GoalManagement", "GetAttributesToShow", null);
    $v_3.SetParameter("metricId", $v_0);
    var $v_4 = $v_3.Execute();
    if ($v_4.Success) {
        var $v_6 = $v_4.ReturnValue.string;
        if ($v_6) {
            for (var $v_7 = 0;
                $v_7 < Mscrm.GoalForm.$1.length;
                $v_7++
            ) Mscrm.GoalForm.$M(Mscrm.GoalForm.$1[$v_7], false);
            for (var $v_8 = 0;
                $v_8 < Mscrm.GoalForm.$1.length;
                $v_8++
            ) Mscrm.GoalForm.$M(Mscrm.GoalForm.$l[$v_8], false);
            for (var $v_9 = 0; $v_9 < $v_6.length; $v_9++) Mscrm.GoalForm.$M($v_6[$v_9], true)
        }
    }
    var $v_5 = false;
    if (!(window.GOAL_ISOVERRIDDEN === undefined)) $v_5 = GOAL_ISOVERRIDDEN;
    if ($v_5) {
        Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$m, true);
        Mscrm.GoalForm.showHideSection(Mscrm.GoalForm.$q, true);
        for (var $v_A = 0; $v_A < Mscrm.GoalForm.$1.length; $v_A++) Mscrm.GoalForm.$M(Mscrm.GoalForm.$1[$v_A], false)
    }
};
Mscrm.GoalForm.$M = function($p0, $p1) {
    var $v_0 = Xrm.Page.getControl($p0);
    $v_0 && $v_0.setVisible($p1)
};
Mscrm.GoalForm.$0 = function($p0, $p1) {
    var $v_0 = Xrm.Page.getControl($p0);
    $v_0 && $v_0.setDisabled($p1)
};
Mscrm.GoalForm.$g = function($p0) {
    for (var $v_0 = 0; $v_0 < Mscrm.GoalForm.$1.length; $v_0++)
        if (window.VAR_IS_FORM_DISABLED === undefined || VAR_IS_FORM_DISABLED === "0")
            if ($p0) Mscrm.GoalForm.$0(Mscrm.GoalForm.$1[$v_0], true);
            else window.HAS_ROLLUP_QUERY_READ_APPTO && Mscrm.GoalForm.$0(Mscrm.GoalForm.$1[$v_0], false)
};
Mscrm.MetricDetail = function() {};
Mscrm.MetricDetail.$$cctor = function() {
    Mscrm.MetricDetail.$B = ["goalattribute", "sourceattribute", "dateattribute", "entityfordateattribute"]
};
Mscrm.MetricDetail.metricDetailFormOnLoad = function() {
    var $v_0 = $find("crmForm");
    $v_0.add_onSave(Mscrm.MetricDetail.$W);
    if ($v_0.get_formType() === 3 || $v_0.get_formType() === 4) Mscrm.MetricDetail.$V = true;
    Mscrm.MetricDetail.$5 = $get("sourceentity");
    !IsNull(Mscrm.MetricDetail.$5) && $addHandler(Mscrm.MetricDetail.$5, "change", Mscrm.MetricDetail.$k);
    Mscrm.MetricDetail.$9 = $get("sourceattribute");
    Mscrm.MetricDetail.$7 = $get("dateattribute");
    Mscrm.MetricDetail.$F = $get("goalattribute");
    Mscrm.MetricDetail.$2 = $get("sourcestate");
    !IsNull(Mscrm.MetricDetail.$2) && $addHandler(Mscrm.MetricDetail.$2, "change", Mscrm.MetricDetail.$18);
    Mscrm.MetricDetail.$6 = $get("sourcestatus");
    Mscrm.MetricDetail.$3 = $get("entityfordateattribute");
    !IsNull(Mscrm.MetricDetail.$3) && $addHandler(Mscrm.MetricDetail.$3, "change", Mscrm.MetricDetail.$16);
    for (var $v_1 = 0;
        $v_1 < Mscrm.MetricDetail.$B.length;
        $v_1++
    ) $v_0.SetFieldReqLevel(Mscrm.MetricDetail.$B[$v_1], true);
    if ($v_0.get_formType() === 1) {
        Mscrm.MetricDetail.$5.selectedIndex = -1;
        Mscrm.MetricDetail.$F.selectedIndex = -1
    }
    Mscrm.MetricDetail.$1B();
    if ($v_0.get_formType() !== 1 && SOURCE_ENTITY_DELETED) {
        Mscrm.MetricDetail.$5.value = "";
        if (!isNullOrEmptyString(window.GOALATTRIB_VAL)) Mscrm.MetricDetail.$F.value = window.GOALATTRIB_VAL
    } else Mscrm.MetricDetail.$k(null)
};
Mscrm.MetricDetail.$W = function($p0, $p1) {
    var $v_0 = $find("crmForm");
    $v_0.remove_onSave(Mscrm.MetricDetail.$W);
    if (Mscrm.MetricDetail.$12()) {
        Mscrm.MetricDetail.$11();
        var $v_1 = $p1.getSaveMode(), $v_2 = $v_1 === 2;
        $v_0.SubmitCrmForm($v_1, true, true, $v_2, false)
    } else {
        $v_0.add_onSave(Mscrm.MetricDetail.$W);
        alert(window.LOCID_REQD_FIELDS)
    }
    $p1.preventDefault()
};
Mscrm.MetricDetail.$12 = function() {
    for (var $v_0 = 0; $v_0 < Mscrm.MetricDetail.$B.length; $v_0++) {
        if (Mscrm.MetricDetail.$B[$v_0] === "sourceattribute" && !METRICTYPE) continue;
        if (isNullOrEmptyString($get(Mscrm.MetricDetail.$B[$v_0]).value)) return false
    }
    return true
};
Mscrm.MetricDetail.$11 = function() {
    !isNullOrEmptyString(Mscrm.MetricDetail.$9.value) &&
        Mscrm.PostBackUtil.createHiddenInput("srcAttrib", Mscrm.MetricDetail.$9.value);
    Mscrm.PostBackUtil.createHiddenInput("dateAttrib", Mscrm.MetricDetail.$7.value);
    Mscrm.PostBackUtil.createHiddenInput("goalAttrib", Mscrm.MetricDetail.$F.value);
    !IsNull(Mscrm.MetricDetail.$2) && Mscrm.PostBackUtil.createHiddenInput("stateAttrib", Mscrm.MetricDetail.$2.value);
    !IsNull(Mscrm.MetricDetail.$6) && Mscrm.PostBackUtil.createHiddenInput("statusAttrib", Mscrm.MetricDetail.$6.value);
    Mscrm.PostBackUtil.createHiddenInput("dateentity", Mscrm.MetricDetail.$3.value)
};
Mscrm.MetricDetail.$k = function($p0) {
    if (!isNullOrEmptyString(Mscrm.MetricDetail.$5.value)) {
        var $v_0 = METRICTYPE;
        if (!isNullOrEmptyString(window.STATEATTRIB_VAL)) Mscrm.MetricDetail.$N = window.STATEATTRIB_VAL;
        if ($v_0) {
            Mscrm.MetricDetail.$i(true);
            Mscrm.MetricDetail.$9.disabled = false;
            if (!isNullOrEmptyString(window.SRC_ATTRIB_VAL)) Mscrm.MetricDetail.$9.value = window.SRC_ATTRIB_VAL
        } else Mscrm.MetricDetail.$i(false);
        if (!IsNull(Mscrm.MetricDetail.$2)) Mscrm.MetricDetail.$2.value = window.STATEATTRIB_VAL;
        if (!IsNull(Mscrm.MetricDetail.$6)) Mscrm.MetricDetail.$6.value = window.STATUSATTRIB_VAL;
        if (DATEENTITY !== -1) {
            var $v_1 = DATEENTITY;
            Mscrm.MetricDetail.$3.value = $v_1.toString()
        } else Mscrm.MetricDetail.$3.value = Mscrm.MetricDetail.$5.value;
        if (Mscrm.MetricDetail.$3.value !== Mscrm.MetricDetail.$5.value) {
            var $v_2 = "/select/parentdateattribute/option";
            Mscrm.MetricDetail.$A($v_2, Mscrm.MetricDetail.$7, Mscrm.MetricDetail.$4)
        }
        if (!isNullOrEmptyString(window.DATEATTRIB_VAL)) Mscrm.MetricDetail.$7.value = window.DATEATTRIB_VAL;
        if (!isNullOrEmptyString(window.GOALATTRIB_VAL)) Mscrm.MetricDetail.$F.value = window.GOALATTRIB_VAL;
        if (Mscrm.MetricDetail.$V) Mscrm.MetricDetail.$f(true);
        else Mscrm.MetricDetail.$f(false)
    }
};
Mscrm.MetricDetail.$f = function($p0) {
    if (METRICTYPE) Mscrm.MetricDetail.$9.disabled = $p0;
    Mscrm.MetricDetail.$7.disabled = $p0;
    if (!IsNull(Mscrm.MetricDetail.$2)) Mscrm.MetricDetail.$2.disabled = $p0;
    if (!IsNull(Mscrm.MetricDetail.$6)) Mscrm.MetricDetail.$6.disabled = $p0;
    Mscrm.MetricDetail.$3.disabled = $p0
};
Mscrm.MetricDetail.$18 = function($p0) {
    Mscrm.MetricDetail.$N = Mscrm.MetricDetail.$2.value;
    Mscrm.MetricDetail.$c("/select/statusattribute/option", Mscrm.MetricDetail.$6, Mscrm.MetricDetail.$4)
};
Mscrm.MetricDetail.$16 = function($p0) {
    var $v_0;
    if (Mscrm.MetricDetail.$3.value !== Mscrm.MetricDetail.$5.value) {
        $v_0 = "/select/parentdateattribute/option";
        Mscrm.MetricDetail.$A($v_0, Mscrm.MetricDetail.$7, Mscrm.MetricDetail.$4)
    } else {
        $v_0 = "/select/dateattribute/option";
        Mscrm.MetricDetail.$A($v_0, Mscrm.MetricDetail.$7, Mscrm.MetricDetail.$4)
    }
};
Mscrm.MetricDetail.$1B = function() {
    var $v_0 = METRICTYPE, $v_1 = $get("sourceattribute_c"), $v_2 = $get("sourceattribute_d");
    if ($v_0) {
        if (!IsNull($v_1) && !IsNull($v_2)) {
            $v_1.style.display = "";
            $v_2.style.display = ""
        }
    } else if (!IsNull($v_1) && !IsNull($v_2)) {
        $v_1.style.display = "none";
        $v_2.style.display = "none"
    }
};
Mscrm.MetricDetail.$i = function($p0) {
    var $v_0 = new RemoteCommand("GoalManagement", "GetEntityFieldList", null);
    $v_0.SetParameter("entityTypeCode", Mscrm.MetricDetail.$5.value);
    $v_0.SetParameter("metricType", window.METRICTYPE);
    $v_0.SetParameter("goalType", window.GOALTYPE);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) {
        var $v_2 = $v_1.ReturnValue;
        Mscrm.MetricDetail.$4 = XUI.Xml.LoadXml($v_2);
        var $v_3 = null;
        if ($p0) {
            $v_3 = "/select/sourceattribute/option";
            Mscrm.MetricDetail.$A($v_3, Mscrm.MetricDetail.$9, Mscrm.MetricDetail.$4)
        }
        $v_3 = "/select/dateattribute/option";
        Mscrm.MetricDetail.$A($v_3, Mscrm.MetricDetail.$7, Mscrm.MetricDetail.$4);
        $v_3 = "/select/stateattribute/option";
        Mscrm.MetricDetail.$A($v_3, Mscrm.MetricDetail.$2, Mscrm.MetricDetail.$4);
        $v_3 = "/select/statusattribute/option";
        Mscrm.MetricDetail.$c($v_3, Mscrm.MetricDetail.$6, Mscrm.MetricDetail.$4);
        $v_3 = "/select/dateentity/option";
        Mscrm.MetricDetail.$A($v_3, Mscrm.MetricDetail.$3, Mscrm.MetricDetail.$4)
    }
};
Mscrm.MetricDetail.$A = function($p0, $p1, $p2) {
    if (!IsNull($p1)) {
        for (var $v_1 = $p1.options.length, $v_0 = $v_1; $v_0 > 0; $v_0--) $p1.remove($v_0 - 1);
        var $v_2 = XUI.Xml.SelectNodes($p2, $p0, null);
        for ($v_0 = 0; $v_0 < $v_2.length; $v_0++) {
            var $v_3 = document.createElement("OPTION");
            $v_3.value = $v_2[$v_0].attributes.getNamedItem("value").value;
            $v_3.text = $v_2[$v_0].attributes.getNamedItem("title").value;
            Mscrm.FormControlInputBehavior.GetElementBehavior($p1).AddOption($v_3.text, $v_3.value)
        }
        $p1.value = "";
        $p1.title = "";
        $p1.selectedIndex = -1
    }
};
Mscrm.MetricDetail.$c = function($p0, $p1, $p2) {
    if (!IsNull($p1)) {
        for (var $v_1 = $p1.options.length, $v_0 = $v_1; $v_0 > 0; $v_0--) $p1.remove($v_0 - 1);
        var $v_2 = XUI.Xml.SelectNodes($p2, $p0, null);
        for ($v_0 = 0; $v_0 < $v_2.length; $v_0++) {
            var $v_3 = document.createElement("OPTION");
            if (!isNullOrEmptyString(Mscrm.MetricDetail.$N)) {
                var $v_4 = $v_2[$v_0].attributes.getNamedItem("state").value;
                if ($v_4 === Mscrm.MetricDetail.$N || $v_4 === "") {
                    $v_3.value = $v_2[$v_0].attributes.getNamedItem("value").value;
                    $v_3.text = $v_2[$v_0].attributes.getNamedItem("title").value;
                    Mscrm.FormControlInputBehavior.GetElementBehavior($p1).AddOption($v_3.text, $v_3.value)
                }
            }
        }
    }
};
Mscrm.Metric = function() {};
Mscrm.Metric.enableDisableGoalType = function() {
    if (!Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue(Mscrm.Metric.$P.get_dataValue())) {
        Mscrm.Metric.$R = Mscrm.Metric.$8.get_dataValue();
        Mscrm.Metric.$8.set_dataValue(null);
        Mscrm.Metric.$8.set_disabled(true);
        Mscrm.Metric.$G.setRequiredLevel("none")
    } else {
        Mscrm.Metric.$O.get_isNew() && Mscrm.Metric.$8.set_disabled(false);
        Mscrm.Metric.$8.set_dataValue(Mscrm.Metric.$R);
        Mscrm.Metric.$G.setRequiredLevel("required")
    }
};
Mscrm.Metric.defaultAmountDataType = function() {
    Mscrm.Metric.$O = $find("crmForm");
    Mscrm.Metric.$P = Mscrm.FormControlInputBehavior.GetBehavior("isamount");
    Mscrm.Metric.$8 = Mscrm.FormControlInputBehavior.GetBehavior("amountdatatype");
    Mscrm.Metric.$G = Xrm.Page.getAttribute("amountdatatype");
    if (Mscrm.Metric.$O.get_isNew()) {
        if (Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue(Mscrm.Metric.$P.get_dataValue())) {
            Mscrm.Metric.$8.set_dataValue("0");
            Mscrm.Metric.$G.setRequiredLevel("required")
        }
    } else {
        Mscrm.Metric.$R = Mscrm.Metric.$8.get_dataValue();
        Mscrm.Metric.enableDisableGoalType()
    }
};
Mscrm.GoalRollupQueryForm = function() {};
Mscrm.GoalRollupQueryForm.queryFormOnLoad = function() {
    Mscrm.GoalRollupQueryForm.$T = Mscrm.GoalRollupQueryForm.queryEntityTypeOnChange;
    Mscrm.GoalRollupQueryForm.$U = Mscrm.GoalRollupQueryForm.queryOnSubmit;
    Mscrm.GoalRollupQueryForm.$C = Mscrm.GoalRollupQueryForm.queryOnSave;
    var $v_0 = $get("crmFormSubmit");
    $addHandler($v_0, "submit", Mscrm.GoalRollupQueryForm.$U);
    var $v_1 = $find("crmForm");
    $v_1.add_onSave(Mscrm.GoalRollupQueryForm.$C);
    var $v_2 = $get("queryentitytype");
    $addHandler($v_2, "change", Mscrm.GoalRollupQueryForm.$T);
    if (!isNullOrEmptyString($v_2.value)) {
        Mscrm.GoalRollupQueryForm.$D = $v_2.value;
        Mscrm.GoalRollupQueryForm.setQueryControlDisplayStyle("inline")
    } else {
        Mscrm.GoalRollupQueryForm.$D = -1;
        Mscrm.GoalRollupQueryForm.setQueryControlDisplayStyle("none")
    }
};
Mscrm.GoalRollupQueryForm.setQueryControlDisplayStyle = function(style) {
    $get("ruleconditioncontrol").style.display = style;
    $get("{4300818d-944f-497a-abd5-a403094f63fe}").style.display = style
};
Mscrm.GoalRollupQueryForm.queryOnSave = function(sender, $sn_arguments) {
    var $v_0 = sender;
    $v_0.remove_onSave(Mscrm.GoalRollupQueryForm.$C);
    var $v_1 = false, $v_2 = $sn_arguments.getSaveMode();
    if ($v_2 === 2) $v_1 = true;
    var $v_3 = Mscrm.GoalRollupQueryForm.isConditionControlDirty(), $v_4 = true;
    if ($v_4)
        if ($v_0.get_isDirty() || $v_3) $v_0.SubmitCrmForm($v_2, true, true, $v_1, false);
        else return true;
    else $v_0.add_onSave(Mscrm.GoalRollupQueryForm.$C);
    $sn_arguments.preventDefault()
};
Mscrm.GoalRollupQueryForm.queryEntityTypeOnChange = function(args) {
    var $v_0 = $get("ruleconditioncontrol"), $v_1 = null, $v_2 = $get("queryentitytype"), $v_3;
    if (!isNullOrEmptyString($v_2.value)) $v_3 = $v_2.value;
    else $v_3 = -1;
    var $v_4 = $get("ruleconditioncontrol").contentWindow.$find("advFind"), $v_5 = "";
    if ($v_4) $v_5 = $v_4.get_fetchXml();
    if (Mscrm.GoalRollupQueryForm.isConditionControlDirty() && Mscrm.GoalRollupQueryForm.$D !== -1) {
        var $v_6 = confirm(LOCID_ENTITY_CHANGE);
        if (!$v_6) {
            $v_2.value = Mscrm.GoalRollupQueryForm.$D;
            return
        }
    }
    if ($v_3 !== -1) {
        $v_1 = Mscrm.CrmUri.create("/SFA/goal/ParticipatingQueryCondition.aspx");
        $v_1.appendToQuery("entitytypecode=" + $v_3);
        $v_0.src = $v_1.toString();
        Mscrm.GoalRollupQueryForm.setQueryControlDisplayStyle("inline")
    } else Mscrm.GoalRollupQueryForm.setQueryControlDisplayStyle("none");
    Mscrm.GoalRollupQueryForm.$D = $v_3
};
Mscrm.GoalRollupQueryForm.queryOnSubmit = function(domEvent) {
    var $v_0 = $get("ruleconditioncontrol").contentWindow.$find("advFind"), $v_1 = "";
    if ($v_0) {
        $v_1 = $v_0.get_fetchXml();
        if (!$v_1) {
            var $v_3 = $find("crmForm");
            $v_3.add_onSave(Mscrm.GoalRollupQueryForm.$C);
            domEvent.preventDefault();
            return
        }
    }
    Mscrm.PostBackUtil.createHiddenInput("fetchXml", $v_1);
    var $v_2 = Mscrm.GoalRollupQueryForm.isConditionControlDirty();
    Mscrm.PostBackUtil.createHiddenInput("isConditionControlDirty", $v_2.toString())
};
Mscrm.GoalRollupQueryForm.isConditionControlDirty = function() {
    var $v_0 = $get("ruleconditioncontrol").contentWindow.$find("advFind"), $v_1 = false;
    if ($v_0) $v_1 = $v_0.get_isDirty();
    return $v_1
};
Mscrm.GoalForm.registerClass("Mscrm.GoalForm");
Mscrm.MetricDetail.registerClass("Mscrm.MetricDetail");
Mscrm.Metric.registerClass("Mscrm.Metric");
Mscrm.GoalRollupQueryForm.registerClass("Mscrm.GoalRollupQueryForm");
Mscrm.GoalForm.$L = null;
Mscrm.GoalForm.$Z = null;
Mscrm.GoalForm.$H = false;
Mscrm.GoalForm.$J = null;
Mscrm.GoalForm.$I = null;
Mscrm.GoalForm.$X = null;
Mscrm.GoalForm.$Y = null;
Mscrm.GoalForm.$Q = false;
Mscrm.GoalForm.$v = "{48707907-e91e-1590-1cd1-a9ddb71476d7}";
Mscrm.GoalForm.$w = "{adadc153-6be6-448b-7b31-64c39637829b}";
Mscrm.GoalForm.$u = "{a7c72450-609e-c738-4557-781b2088c473}";
Mscrm.GoalForm.$o = "{1d7eac24-348a-75b1-8a7b-c1dbbc2d7930}";
Mscrm.GoalForm.$p = "{7c93d1dd-bcb6-8994-06ba-b913cab6bdb4}";
Mscrm.GoalForm.$n = "{86aa59b3-d012-bd70-488b-6d2767ea858d}";
Mscrm.GoalForm.$s = "{16152234-8617-bee9-5eeb-069b4472173d}";
Mscrm.GoalForm.$t = "{649d4e80-5014-8c90-2abe-c39b137dc761}";
Mscrm.GoalForm.$r = "{009e75c7-d9c6-e460-98b7-4278be07024b}";
Mscrm.GoalForm.$m = "{44a9787d-4ab1-9a27-8c84-978e41c2d832}";
Mscrm.GoalForm.$q = "{16152234-8617-bee9-5eeb-069b4472173d}";
Mscrm.GoalForm.$b = "stretchtargetmoney";
Mscrm.GoalForm.$a = "stretchtargetdecimal";
Mscrm.GoalForm.$S = "stretchtargetinteger";
Mscrm.GoalForm.$10 = "targetmoney";
Mscrm.GoalForm.$y = "targetdecimal";
Mscrm.GoalForm.$z = "targetinteger";
Mscrm.GoalForm.$1 = [
    "rollupqueryactualmoneyid", "rollupqueryinprogressmoneyid", "rollupquerycustommoneyid",
    "rollupqueryactualintegerid", "rollupqueryinprogressintegerid", "rollupquerycustomintegerid",
    "rollupqueryactualdecimalid", "rollupqueryinprogressdecimalid", "rollupquerycustomdecimalid"
];
Mscrm.GoalForm.$l = [
    "actualmoney", "inprogressmoney", "customrollupfieldmoney", "actualinteger", "inprogressinteger",
    "customrollupfieldinteger", "actualdecimal", "inprogressdecimal", "customrollupfielddecimal"
];
Mscrm.GoalForm.$K = ["fiscalyear", "fiscalperiod", "isfiscalperiodgoal", "goalstartdate", "goalenddate"];
Mscrm.MetricDetail.$B = null;
Mscrm.MetricDetail.$5 = null;
Mscrm.MetricDetail.$9 = null;
Mscrm.MetricDetail.$7 = null;
Mscrm.MetricDetail.$F = null;
Mscrm.MetricDetail.$2 = null;
Mscrm.MetricDetail.$6 = null;
Mscrm.MetricDetail.$3 = null;
Mscrm.MetricDetail.$4 = null;
Mscrm.MetricDetail.$N = "";
Mscrm.MetricDetail.$V = false;
Mscrm.MetricDetail.$$cctor();
Mscrm.Metric.$R = null;
Mscrm.Metric.$P = null;
Mscrm.Metric.$8 = null;
Mscrm.Metric.$O = null;
Mscrm.Metric.$G = null;
Mscrm.GoalRollupQueryForm.$D = 0;
Mscrm.GoalRollupQueryForm.$T = null;
Mscrm.GoalRollupQueryForm.$U = null;
Mscrm.GoalRollupQueryForm.$C = null