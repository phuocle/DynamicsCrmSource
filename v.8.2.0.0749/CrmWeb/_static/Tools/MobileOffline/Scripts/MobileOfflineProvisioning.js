Type.registerNamespace("Mscrm");
Mscrm.MobileOfflineProvisioningHelper = function() {};
Mscrm.MobileOfflineProvisioningHelper.get_$3 = function() {
    return Mscrm.CrmUri.create("/Tools/MobileOffline/cmds/cmd_update.aspx")
};
Mscrm.MobileOfflineProvisioningHelper.alertOnDisable = function() {
    var $v_0 = $get("mobileOfflineEnable"),
        $v_1 = Mscrm.MobileOfflineProvisioningHelper.$0(),
        $v_2 = new Xrm.ConfirmDialogStrings;
    $v_2.text = Xrm.Internal.getResourceString("LOCID_MOP_DISABLE_ALERT_MSG");
    $v_2.title = Xrm.Internal.getResourceString("LOCID_MOP_DISABLE_ALERT_TITLE");
    Xrm.Dialog.openConfirmDialog($v_2,
        $v_1,
        function() {
            var $v_3 = $get("mobileOfflineConfigurationSave");
            if ($v_3) $v_3.disabled = false
        },
        function() {
            $v_0.checked = true;
            var $v_4 = $get("mobileOfflineConfigurationSave");
            if ($v_4) $v_4.disabled = true
        })
};
Mscrm.MobileOfflineProvisioningHelper.alertForDeprovisioning = function() {
    var $v_0 = Mscrm.MobileOfflineProvisioningHelper.$0(), $v_1 = new Xrm.ConfirmDialogStrings;
    $v_1.text = Xrm.Internal.getResourceString("LOCID_MOP_DISABLE_ALERT_MSG");
    $v_1.title = Xrm.Internal.getResourceString("LOCID_MOP_DISABLE_ALERT_TITLE");
    Xrm.Dialog.openConfirmDialog($v_1,
        $v_0,
        function() { Mscrm.MobileOfflineProvisioningHelper.$2() },
        function() { $get("buttonConfigure").disabled = false })
};
Mscrm.MobileOfflineProvisioningHelper.alertForStopProvisioning = function() {
    var $v_0 = Mscrm.MobileOfflineProvisioningHelper.$0(), $v_1 = new Xrm.ConfirmDialogStrings;
    $v_1.text = Xrm.Internal.getResourceString("LOCID_MOP_STOP_PROVI_ALERT_MSG");
    $v_1.title = Xrm.Internal.getResourceString("LOCID_MOP_STOP_PROVI_ALERT_TITLE");
    Xrm.Dialog.openConfirmDialog($v_1,
        $v_0,
        function() { Mscrm.MobileOfflineProvisioningHelper.$2() },
        function() { $get("buttonConfigure").disabled = false })
};
Mscrm.MobileOfflineProvisioningHelper.switchMobileOfflineForOrganization = function(isEnabled, newUI) {
    var $v_0, $v_1 = false;
    if (newUI) {
        $v_0 = $get("buttonConfigure");
        $v_1 = isEnabled
    } else {
        var $v_4 = $get("mobileOfflineEnable"),
            $v_5 = $get("mobileOfflineDisable"),
            $v_6 = $get("enableStatusLabel"),
            $v_7 = $get("disableStatusLabel");
        if (isEnabled === $v_4.checked) return false;
        $v_4.disabled = true;
        $v_5.disabled = true;
        Sys.UI.DomElement.addCssClass($get("MobileOfflineEnableDiv"), "hide");
        Sys.UI.DomElement.addCssClass($get("MobileOfflineDisableDiv"), "hide");
        if ($v_4.checked) {
            $v_7.innerHTML = "";
            $v_6.innerHTML = Xrm.Internal.getResourceString("LOCID_MOP_STATUS_INPROCESS")
        }
        if ($v_5.checked) {
            $v_6.innerHTML = "";
            $v_7.innerHTML = Xrm.Internal.getResourceString("LOCID_MOP_STATUS_INPROCESS")
        }
        $v_0 = $get("mobileOfflineConfigurationSave");
        $v_1 = $v_4.checked
    }
    var $v_2 = true, $v_3 = Mscrm.MobileOfflineProvisioningHelper.$4($v_1);
    $v_3.done(function() {
        if ($v_0) $v_0.disabled = true;
        window.location.reload()
    });
    $v_3.fail(function() {
        if ($v_0) {
            $v_0.disabled = false;
            $v_2 = false
        }
    });
    return $v_2
};
Mscrm.MobileOfflineProvisioningHelper.$4 = function($p0) {
    var $v_0 =
            "<ProvisioningRequest>\r\n\t\t\t\t\t<ismobileofflineenabled>{0}</ismobileofflineenabled>\r\n\t\t\t\t</ProvisioningRequest>",
        $v_1 = String.format($v_0, $p0 ? "enabled" : "disabled");
    return Mscrm.MobileOfflineProvisioningHelper.$5($v_1)
};
Mscrm.MobileOfflineProvisioningHelper.$5 = function($p0) {
    var $v_0 = new jQueryAjaxOptions;
    $v_0.beforeSend = function($p1_0) {
        Mscrm.WrpcTokenFuncs.setTokenInHeader($p1_0, Mscrm.MobileOfflineProvisioningHelper.get_$3())
    };
    $v_0.url = Mscrm.MobileOfflineProvisioningHelper.get_$3().toString();
    $v_0.type = "POST";
    $v_0.data = $p0;
    return $P_CRM.ajax($v_0)
};
Mscrm.MobileOfflineProvisioningHelper.$2 = function() {
    var $v_0 = $get("sendStatus");
    $v_0.click()
};
Mscrm.MobileOfflineProvisioningHelper.$0 = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 500;
    return $v_0
};
Mscrm.MobileOfflineProvisioningHelper.updateUI = function(response) {
    var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(response);
    if (!$v_0["ShowProgressBlock"]) {
        $get("progressBlock").className = "nodisplay";
        return true
    }
    $get("progressState").innerHTML = $v_0["ProgressState"].toString();
    $get("progressStatus").innerHTML = $v_0["ProgressStatus"].toString();
    $get("lastUpdate").innerHTML = $v_0["LastUpdateString"].toString();
    var $v_1 = $v_0["ProgressBar"], $v_2 = "", $v_3 = false;
    switch ($v_1) {
    case 0:
        $v_2 = "orange";
        break;
    case 1:
        $v_2 = "red";
        $v_3 = true;
        break;
    case 2:
        $v_2 = "green";
        $v_3 = true;
        break
    }
    $get("progressBar").className = $v_2;
    var $v_4 = $get("buttonConfigure"), $v_5 = CrmEncodeDecode.CrmHtmlDecode($v_0["ConfigureButtonLabel"].toString());
    $v_4.accessKey = Mscrm.Utilities.getAccessKey($v_5);
    $v_4.innerHTML = Mscrm.Utilities.decorateAccessKey($v_5);
    $v_4.title = $v_5;
    $v_4.disabled = $v_0["DisableConfigButton"];
    $v_4.setAttribute("requestType", $v_0["RequestType"].toString());
    return $v_3
};
Mscrm.MobileOfflineProvisioningHelper.ProgressColor = function() {};
Mscrm.MobileOfflineProvisioningHelper.ProgressColor.prototype = { orange: 0, red: 1, green: 2 };
Mscrm.MobileOfflineProvisioningHelper.ProgressColor
    .registerEnum("Mscrm.MobileOfflineProvisioningHelper.ProgressColor", false);
Mscrm.MobileOfflineProvisioningHelper.RequestType = function() {};
Mscrm.MobileOfflineProvisioningHelper.RequestType
    .prototype = { none: 0, provision: 1, stopProvisioning: 2, deprovision: 3 };
Mscrm.MobileOfflineProvisioningHelper.RequestType
    .registerEnum("Mscrm.MobileOfflineProvisioningHelper.RequestType", false);
Mscrm.MobileOfflineProvisioningHelper.registerClass("Mscrm.MobileOfflineProvisioningHelper")