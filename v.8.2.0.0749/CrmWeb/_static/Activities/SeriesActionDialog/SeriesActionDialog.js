Type.registerNamespace("Mscrm");
Mscrm.SeriesActionDialog = function() {};
Mscrm.SeriesActionDialog.performAction = function(actType) {
    var $v_0 = actType;
    if ($v_0 === 2 || $v_0 === 3 || ($v_0 < 1 || $v_0 > 6)) Mscrm.SeriesActionDialog.$9();
    else {
        var $v_1 = 2;
        if ($v_0 === 5 || $v_0 === 1) $v_1 = 3;
        Mscrm.SeriesActionDialog.$H($v_0, $v_1)
    }
};
Mscrm.SeriesActionDialog.cancelAction = function(actionType) {
    var $v_0 = Mscrm.SeriesActionDialog.$0.length - Mscrm.SeriesActionDialog.$2;
    if (actionType === 4 && $v_0 > 0) {
        var $v_1 = window.LOCID_CONFIRM_MULTI_CANCEL;
        if (confirm(String.format($v_1, $v_0))) Mscrm.SeriesActionDialog.$3(false);
        else return
    } else Mscrm.SeriesActionDialog.$3(false)
};
Mscrm.SeriesActionDialog.$9 = function() { Mscrm.SeriesActionDialog.$3(true) };
Mscrm.SeriesActionDialog.$H = function($p0, $p1) {
    for (var $v_0 = -1, $v_3 = 2; $v_3 <= $p1 + 1; $v_3++) {
        var $v_4 = $get("rad_option" + $v_3.toString());
        if ($v_4.checked) {
            $v_0 = $v_3;
            break
        }
    }
    if ($v_0 === -1) return;
    switch ($p0) {
    case 1:
        Mscrm.SeriesActionDialog.$F($v_0);
        break;
    case 4:
        var $v_1 = $v_0 === 3;
        Mscrm.SeriesActionDialog.$G($v_1);
        break;
    case 5:
        Mscrm.SeriesActionDialog.$C($v_0);
        break;
    case 6:
        var $v_2 = $v_0 === 2;
        Mscrm.SeriesActionDialog.$E($v_2);
        break;
    default:
        Mscrm.SeriesActionDialog.$9();
        break
    }
};
Mscrm.SeriesActionDialog.$G = function($p0) {
    var $v_0 = {};
    if ($p0) {
        var $v_1 = window._seriesId, $v_2 = window._seriesTypeCode;
        $v_0["objectId"] = $v_1;
        $v_0["objectTypeCode"] = $v_2
    } else {
        var $v_3 = window._entityId, $v_4 = window._entityTypeCode;
        $v_0["objectId"] = $v_3;
        $v_0["objectTypeCode"] = $v_4
    }
    window.returnValue = $v_0;
    Mscrm.SeriesActionDialog.$3($v_0)
};
Mscrm.SeriesActionDialog.$F = function($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("endSeriesDate"), $v_1 = {};
    $v_1["EndSeriesDate"] = $v_0.get_dataValue().toString();
    var $v_2 = "Open";
    if ($p0 === 2) $v_2 = "Canceled";
    else if ($p0 === 3) $v_2 = "Completed";
    $v_1["StateOfPastInstances"] = $v_2;
    Mscrm.SeriesActionDialog.$3($v_1)
};
Mscrm.SeriesActionDialog.$C = function($p0) {
    var $v_0 = {};
    if ($p0 === 2) {
        var $v_1 = window._entityId, $v_2 = window._entityTypeCode;
        $v_0["entityid"] = $v_1;
        $v_0["entitytypecode"] = $v_2;
        Mscrm.SeriesActionDialog.$8(Mscrm.SeriesActionDialog.$D, $v_0, 1)
    } else {
        var $v_3 = window._seriesId, $v_4 = window._seriesTypeCode, $v_5 = $p0 === 3;
        Mscrm.SeriesActionDialog.$0 = [];
        Array.add(Mscrm.SeriesActionDialog.$0, $v_3);
        $v_0 = {};
        $v_0["seriestypecode"] = $v_4;
        $v_0["keeppastcompleted"] = $v_5;
        Mscrm.SeriesActionDialog.$8(Mscrm.SeriesActionDialog.$A, $v_0, 1)
    }
};
Mscrm.SeriesActionDialog.$D = function($p0) {
    var $v_0 = $p0["entityid"],
        $v_1 = $p0["entitytypecode"],
        $v_2 = new RemoteCommand("ActivitiesWebService", "DeleteActivity", null);
    $v_2.SetParameter("id", $v_0);
    $v_2.SetParameter("objectTypeCode", $v_1.toString());
    $v_2.Execute(null)
};
Mscrm.SeriesActionDialog.$E = function($p0) {
    Mscrm.SeriesActionDialog.$0 = getDialogArguments();
    var $v_0 = Mscrm.SeriesActionDialog.$0.length, $v_1 = window._seriesTypeCode, $v_2 = {};
    $v_2["seriestypecode"] = $v_1;
    $v_2["keeppastcompleted"] = $p0;
    Mscrm.SeriesActionDialog.$8(Mscrm.SeriesActionDialog.$A, $v_2, $v_0)
};
Mscrm.SeriesActionDialog.$A = function($p0) {
    var $v_0 = null,
        $v_1 = Mscrm.SeriesActionDialog.$0[Mscrm.SeriesActionDialog.$2],
        $v_2 = $p0["seriestypecode"],
        $v_3 = $p0["keeppastcompleted"];
    if ($v_3) {
        $v_0 = new RemoteCommand("ActivitiesWebService", "EndSeries", null);
        $v_0.SetParameter("objectId", $v_1);
        var $v_4 = Mscrm.DateTimeUtility.localDateTimeNow(), $v_5 = "Open";
        $v_0.SetParameter("seriesEndDate", FormatDateTime($v_4));
        $v_0.SetParameter("stateOfPastInstances", $v_5);
        $v_0.SetParameter("objectTypeCode", $v_2.toString())
    } else {
        $v_0 = new RemoteCommand("ActivitiesWebService", "DeleteActivity", null);
        $v_0.SetParameter("id", $v_1)
    }
    $v_0.SetParameter("objectTypeCode", $v_2.toString());
    $v_0.Execute(null)
};
Mscrm.SeriesActionDialog.$8 = function($p0, $p1, $p2) {
    Mscrm.SeriesActionDialog.$6 = new Mscrm.ProgressBar;
    Mscrm.SeriesActionDialog.$6.setup($p2);
    Mscrm.SeriesActionDialog.$2 = 0;
    var $v_0 = $get("button_ok");
    $v_0.disabled = true;
    window.setTimeout(function() { Mscrm.SeriesActionDialog.$B($p0, $p1, $p2) }, 10)
};
Mscrm.SeriesActionDialog.$B = function($p0, $p1, $p2) {
    if (Mscrm.SeriesActionDialog.$2 < $p2) {
        $p0($p1);
        Mscrm.SeriesActionDialog.$6.incrementStatus();
        Mscrm.SeriesActionDialog.$2++;
        window.setTimeout(function() { Mscrm.SeriesActionDialog.$B($p0, $p1, $p2) }, 10)
    } else Mscrm.SeriesActionDialog.$3(true)
};
Mscrm.SeriesActionDialog.$3 = function($p0) {
    Mscrm.Utilities.setReturnValue($p0);
    closeWindow()
};
Mscrm.ProgressBar = function() {};
Mscrm.ProgressBar.prototype = {
    $7_0: 0,
    $1_0: 0,
    $5_0: 0,
    $4_0: null,
    setup: function(totalSteps) {
        var $v_0 = $get("divWarning"), $v_1 = $get("divFillBg"), $v_2 = $get("divStatus");
        this.$4_0 = $get("divFill");
        var $v_3 = $get("tdDialogHeader"),
            $v_4 = $get("tdDialogFooter"),
            $v_5 = !$v_3 ? 0 : parseInt($v_3.scrollHeight),
            $v_6 = !$v_4 ? 0 : parseInt($v_4.scrollHeight),
            $v_7 = 23,
            $v_8 = parseInt(document.body.clientHeight, 10),
            $v_9 = parseInt(document.body.clientWidth, 10),
            $v_A = ($v_8 - ($v_5 + $v_6)) / 2 + $v_5 - $v_7 / 2,
            $v_B = $v_9 - 40;
        $v_1.style.top = $v_A.toString() + "px";
        this.$4_0.style.top = $v_A.toString() + "px";
        $v_2.style.top = $v_A.toString() + "px";
        var $v_C = XUI.Html.DomUtils.GetFirstChild($v_2);
        $v_C.style.top = "0px";
        $v_1.style.width = $v_B.toString() + "px";
        this.$4_0.style.width = "0px";
        $v_2.style.width = $v_B.toString() + "px";
        $v_C.style.width = $v_B.toString() + "px";
        $v_0.style.display = "none";
        $v_1.style.display = "inline";
        this.$4_0.style.display = "inline";
        $v_2.style.display = "inline";
        this.$7_0 = $v_B;
        if (totalSteps < 1) this.$5_0 = 1;
        else this.$5_0 = $v_B / totalSteps;
        this.$1_0 = 0
    },
    incrementStatus: function() {
        if (this.$1_0 + this.$5_0 <= this.$7_0) {
            this.$1_0 = this.$1_0 + this.$5_0;
            this.$4_0.style.width = this.$1_0.toString() + "px"
        }
    }
};
Mscrm.SeriesActionDialog.registerClass("Mscrm.SeriesActionDialog");
Mscrm.ProgressBar.registerClass("Mscrm.ProgressBar");
Mscrm.SeriesActionDialog.$6 = null;
Mscrm.SeriesActionDialog.$0 = null;
Mscrm.SeriesActionDialog.$2 = 0