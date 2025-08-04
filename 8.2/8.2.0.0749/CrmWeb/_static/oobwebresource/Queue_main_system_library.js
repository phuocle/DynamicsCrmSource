Type.registerNamespace("Mscrm");
Mscrm.QueueMainSystemLibraryWebResource = function() {};
Mscrm.QueueMainSystemLibraryWebResource.form_onsave = function() {};
Mscrm.QueueMainSystemLibraryWebResource.form_OnLoad = function() {
    Mscrm.QueueMainSystemLibraryWebResource.queueviewtype_OnChange()
};
Mscrm.QueueMainSystemLibraryWebResource.queueviewtype_OnChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("queueviewtype"),
        $v_1 = Xrm.Page.ui.tabs.get("general"),
        $v_2 = $v_1.sections,
        $v_3 = $v_2.get("QueueMembers"),
        $v_4 = $v_2.get("QueueMembersNoRecord");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.tabs.get("general")))
        if (!$v_0.getValue() &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            $v_3.setVisible(false);
            $v_4.setVisible(true)
        } else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) && !Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            $v_3.setVisible(true);
            $v_4.setVisible(false)
        }
};
Mscrm.QueueCommandActions = function() {};
Mscrm.QueueCommandActions.launchMailboxFromForm = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("defaultmailbox");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Object.getType($v_0).toString() === "undefined") return;
    Mscrm.QueueCommandActions.$0($v_0.getValue()[0].id)
};
Mscrm.QueueCommandActions.$0 = function($p0) { Xrm.Utility.openEntityForm("mailbox", $p0, null) };
Mscrm.QueueCommandActions.openConvertRule = function(sourceTypeCode) {
    var $v_0 = null,
        $v_1 = Xrm.Page.data.entity.getId(),
        $v_2 = 0,
        $v_3 = Xrm.Internal.isFeatureEnabled("FCB.AnyChanelToAnyEntityRecordCreation");
    if ($v_1) {
        var $v_4;
        if ($v_3) {
            if (sourceTypeCode === 1) $v_2 = 4216;
            else $v_2 = 4202;
            $v_4 =
                "<fetch version='1.0' mapping='logical'><entity name='convertrule'><attribute name='convertruleid' /><order attribute='modifiedon' descending='true' /><filter type='and'><condition attribute='queueid' operator='eq' value='" + $v_1 + "' /><condition attribute='sourcechanneltypecode' operator='eq' value='" + $v_2 + "' /></filter></entity></fetch>"
        } else
            $v_4 =
                "<fetch version='1.0' mapping='logical'><entity name='convertrule'><attribute name='convertruleid' /><filter type='and'><condition attribute='queueid' operator='eq' value='" + $v_1 + "' /><condition attribute='sourcetypecode' operator='eq' value='" + sourceTypeCode + "' /></filter></entity></fetch>";
        var $v_5 = null;
        Xrm.Internal.messages.retrieveMultiple($v_4).then(function($p1_0) {
                $v_5 = $p1_0.entityCollection;
                if ($v_5 && $v_5.get_entities().length > 0)
                    $v_0 = $v_5.get_entities()[0].getValue("convertruleid").toString();
                var $v_6 = new Xrm.DialogOptions;
                $v_6.openInNewWindow = true;
                var $v_7 = {};
                if ($v_0 && $v_0.length > 1) $v_7["id"] = $v_0;
                else {
                    $v_7["_CreateFromId"] = $v_1;
                    $v_7["_CreateFromType"] = 2020
                }
                if ($v_3) $v_7["sourcechanneltypecode"] = $v_2;
                else $v_7["sourcetypecode"] = sourceTypeCode;
                Xrm.Utility.openEntityForm("convertrule", "", $v_7, $v_6)
            },
            function($p1_0) { return })
    }
};
Mscrm.QueueCommandActions.approveOrRejectEmail = function(action, objectType) {
    return Mscrm.QueueCommandActions.handleApproveOrRejectEmail(action, objectType)
};
Mscrm.QueueCommandActions.handleApproveOrRejectEmail = function(action, objectType) {
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    var $v_0 = 400,
        $v_1 = 200,
        $v_2 = false,
        $v_3 = false,
        $v_4 = true,
        $v_5 = null,
        $v_6 = null,
        $v_7 = null,
        $v_8 = false,
        $v_9 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) $v_9 = Xrm.Page.data.entity.getId();
    var $v_A = [$v_9],
        $v_B = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode(action) + ".aspx");
    $v_B.get_query()["iObjType"] = objectType;
    $v_B.get_query()["iTotal"] = "1";
    $v_B.get_query()["sIds"] = $v_9;
    switch (action) {
    case "approve_emailaddress":
        Xrm.Page.data.entity.save();
        $v_B = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
            CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") +
            ".aspx");
        $v_B.get_query()["iObjType"] = objectType;
        $v_B.get_query()["iTotal"] = "1";
        $v_B.get_query()["sIds"] = $v_9;
        $v_B.get_query()["customAction"] = "approveemail";
        $v_8 = true;
        $v_3 = true;
        $v_0 = 500;
        $v_1 = 250;
        break;
    case "reject_emailaddress":
        Xrm.Page.data.entity.save();
        $v_B = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
            CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") +
            ".aspx");
        $v_B.get_query()["iObjType"] = objectType;
        $v_B.get_query()["iTotal"] = "1";
        $v_B.get_query()["sIds"] = $v_9;
        $v_B.get_query()["customAction"] = "rejectemail";
        $v_8 = true;
        $v_3 = true;
        $v_0 = 450;
        $v_1 = 200;
        break
    }
    if (Xrm.Internal.isModalDialogSupported() || !$v_7)
        $v_6 = Mscrm.QueueCommandActions.callbackFunction($v_5,
            $v_B,
            action,
            objectType,
            $v_A,
            $v_0,
            $v_1,
            $v_2,
            $v_3,
            $v_4,
            $v_9,
            $v_8);
    return $v_6
};
Mscrm.QueueCommandActions.callbackFunction = function(result,
    url,
    action,
    objectType,
    ids,
    width,
    height,
    close,
    reload,
    resize,
    id,
    isDialogInline) {
    var $v_0 = null;
    $v_0 = [action, objectType, close, reload, id];
    isDialogInline = !Mscrm.InternalUtilities.JSTypes.isNull(isDialogInline) && isDialogInline;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = height;
    $v_1.width = width;
    if (isDialogInline) {
        var $v_2 = Mscrm.QueueCommandActions.performActionAfterSwitch,
            $v_3 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_2, $v_0);
        Xrm.Internal.openDialog(url.toString(), $v_1, ids, null, $v_3)
    }
    return result
};
Mscrm.QueueCommandActions.performActionAfterSwitch = function(result, action, objectType, close, reload, id) {
    if (result && close) {
        !Mscrm.InternalUtilities.Utilities.isIosDevice() && Xrm.Internal.refreshParentGrid(objectType, "", id);
        Xrm.Page.ui.close();
        Mscrm.InternalUtilities.Utilities.isIosDevice() && Xrm.Internal.refreshParentGrid(objectType, "", id)
    }
    result && reload && Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), id, null);
    return result
};
Mscrm.QueueMainSystemLibraryWebResource.registerClass("Mscrm.QueueMainSystemLibraryWebResource");
Mscrm.QueueCommandActions.registerClass("Mscrm.QueueCommandActions");
Type.registerNamespace("Mscrm");
Mscrm.queueviewtype_onchange = Mscrm.QueueMainSystemLibraryWebResource.queueviewtype_OnChange;
Mscrm.Form_onsave = Mscrm.QueueMainSystemLibraryWebResource.form_onsave;
Mscrm.Form_onload = Mscrm.QueueMainSystemLibraryWebResource.form_OnLoad