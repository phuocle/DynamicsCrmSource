Type.registerNamespace("Mscrm");
Mscrm.ListAction = function() {};
Mscrm.ListAction.openManageMembersWizard = function(listMemberType, gridId, listId, width, height) {
    listId = Xrm.Page.data.entity.getId().toString();
    var $v_0 = [];
    $v_0[0] = listMemberType;
    $v_0[1] = gridId;
    $v_0[2] = listId;
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/ListQualificationDlg/dlg_manage_members.aspx"),
        $v_2 = new Xrm.DialogOptions;
    $v_2.height = height;
    $v_2.width = width;
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.ListAction.openManageMembersWizardCallback, $v_0);
    Xrm.Internal.openDialog($v_1.toString(), $v_2, "Search", null, $v_3)
};
Mscrm.ListAction.openManageMembersWizardCallback = function(result, listMemberType, gridId, listId) {
    if (Mscrm.InternalUtilities._Script.isNullOrUndefined(result)) result = "0";
    switch (result.toString()) {
    case "0":
        break;
    case "1":
        Mscrm.ListAction.launchAddToListSimple(listId, gridId);
        break;
    case "2":
        Mscrm.ListAction.launchListQualification("lqAdd", listMemberType, gridId, listId);
        break;
    case "3":
        Mscrm.ListAction.launchListQualification("lqRemove", listMemberType, gridId, listId);
        break;
    case "4":
        Mscrm.ListAction.launchListQualification("lqKeep", listMemberType, gridId, listId);
        break
    }
};
Mscrm.ListAction.launchListQualification = function(launchQualificationAction, listMemberType, listId) {
    listId = Xrm.Page.data.entity.getId().toString();
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/ListQualificationDlg/dlg_query_build.aspx");
    $v_0.get_query()["ListMemberType"] = listMemberType.toString();
    $v_0.get_query()["ListId"] = listId;
    $v_0.get_query()["InvokeType"] = launchQualificationAction;
    var $v_1 = null;
    $v_1 = [listMemberType];
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 615;
    $v_2.width = 820;
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.ListAction.performGridRefresh, $v_1);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, ["Search"], null, $v_3)
};
Mscrm.ListAction.performGridRefresh = function(result, entityTypeCode) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(entityTypeCode))
        if (isOutlookHostedWindow()) Xrm.Page.data.refresh(true);
        else Xrm.Internal.refreshParentGrid(entityTypeCode, "", "")
};
Mscrm.ListAction.openDynamicListQuery = function(listMemberType, gridId, listId) {
    listId = Xrm.Page.data.entity.getId().toString();
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/ListQualificationDlg/dlg_query_build.aspx");
    $v_0.get_query()["ListMemberType"] = CrmEncodeDecode.CrmUrlEncode(listMemberType.toString());
    $v_0.get_query()["ListId"] = listId;
    $v_0.get_query()["InvokeType"] = CrmEncodeDecode.CrmUrlEncode("lqUseQuery");
    var $v_1 = new Array(1);
    $v_1[0] = listMemberType;
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 615;
    $v_2.width = 820;
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.ListAction.performGridRefresh, $v_1);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, "Search", null, $v_3)
};
Mscrm.ListAction.processLQAdd = function(sFetchXml, sParams, iSelected, iOption) {
    if (iOption === Mscrm.ListAction.$E) {
        sParams += "&autoTrigger=1";
        var $v_0 = "/_grid/cmds/dlg_addtolist.aspx?";
        $v_0 += sParams;
        var $v_1 = new Xrm.DialogOptions;
        $v_1.height = 200;
        $v_1.width = 400;
        var $v_2 = [Xrm.Page.context], $v_3 = Mscrm.ListAction.$J(Mscrm.ListAction.performAfterAddtoList, $v_2);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, iSelected, null, $v_3)
    } else if (iOption === Mscrm.ListAction.$F) {
        if (sFetchXml) Mscrm.ListAction.$5 = sFetchXml;
        Mscrm.ListAction.$A = sParams + "&iOption=" + CrmEncodeDecode.CrmUrlEncode(iOption.toString());
        Mscrm.ListAction.$4 = Mscrm.ListAction.$D;
        Mscrm.ListAction.$2 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/ListQualificationdlg/dlg_List_add.aspx?")
            .toString();
        Mscrm.ListAction.$2 += "?";
        Xrm.Internal.progress(Xrm.Internal.getResourceString("LOCID_BI_PROCESSING"), 0, 350, 150);
        window.setTimeout(Mscrm.ListAction.postBackFetch, 50);
        Mscrm.ListAction.$0 = true
    } else Mscrm.ListAction.$0 = false
};
Mscrm.ListAction.performAfterAddtoList = function(result) {
    if (result) Mscrm.ListAction.$0 = true;
    else Mscrm.ListAction.$0 = false;
    Mscrm.Utilities.setReturnValue(Mscrm.ListAction.$0);
    setTimeout(setTimeout(closeWindow, 0), 0)
};
Mscrm.ListAction.processLQUseQuery = function(fetchXml, paramValue) {
    if (fetchXml) {
        Mscrm.ListAction.$5 = fetchXml;
        Mscrm.ListAction.$A = paramValue;
        Mscrm.ListAction.$4 = Mscrm.ListAction.$D;
        Mscrm.ListAction.$2 = Mscrm.GlobalImported.CrmUri
            .create("/MA/Lists/ListQualificationDlg/dlg_dynamicList_query.aspx").toString();
        Mscrm.ListAction.$2 += "?";
        Xrm.Internal.progress(Xrm.Internal.getResourceString("LOCID_BI_PROCESSING"), 0, 350, 150);
        window.setTimeout(Mscrm.ListAction.postBackFetch, 50);
        Mscrm.ListAction.$0 = true
    } else Mscrm.ListAction.$0 = false
};
Mscrm.ListAction.refreshMemberCount = function() {
    var $v_0 = "", $v_1 = Xrm.Page.ui.controls.get("MemberCount");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        Mscrm.ListAction.$H = Xrm.Page.data.entity.getId();
        var $v_2 = new Array(1);
        $v_2[0] = "membercount";
        Xrm.Internal.messages.retrieve("list", Mscrm.ListAction.$H, $v_2).then(function($p1_0) {
                if ($p1_0) {
                    Mscrm.ListAction.$3 = $p1_0.entity;
                    if (Mscrm.ListAction.$3
                        .hasValue("membercount")) $v_0 = Mscrm.ListAction.$3.getValue("membercount").toString();
                    $v_1.setLabel($v_0)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.ListAction.launchAddToListSimple = function(listId, gridId) {
    listId = Xrm.Page.data.entity.getId().toString();
    var $v_0 = -1;
    Xrm.Internal.messages.retrieve("list", Xrm.Page.data.entity.getId(), ["createdfromcode"]).then(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                Mscrm.ListAction.$3 = $p1_0.entity;
                if (Mscrm.ListAction.$3
                    .hasValue("createdfromcode"))
                    $v_0 = parseInt(Mscrm.ListAction.$3.getValue("createdfromcode").getValue("value").toString());
                var $v_1 = new Xrm.LookupOptions, $v_2, $v_3 = Xrm.Internal.getEntityName($v_0);
                $v_2 = [$v_3];
                $v_1.lookupStyle = "multi";
                $v_1.lookupTypes = $v_2;
                $v_1.showNew = true;
                Xrm.Internal.lookupObjects($v_1,
                    function($p2_0) {
                        Mscrm.ListAction.launchAddToListAction($p2_0, listId, $v_0.toString(), [], gridId)
                    })
            }
        },
        function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
};
Mscrm.ListAction.launchAddToListAction = function(lookupItems, listId, member, arrayLength, gridId) {
    listId = Xrm.Page.data.entity.getId().toString();
    var $v_0 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
        if (lookupItems.length > 0) {
            for (var $v_1 = 0; $v_1 < lookupItems.length; $v_1++) arrayLength[$v_1] = lookupItems[$v_1].id;
            $v_0 = true
        }
        if ($v_0) {
            var $v_2 = [];
            $v_2[0] = member;
            var $v_3 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_addtolist.aspx");
            $v_3.get_query()["autoTrigger"] = 1;
            $v_3.get_query()["iObjType"] = Number.parseInvariant(member);
            $v_3.get_query()["iTotal"] = arrayLength.length.toString();
            $v_3.get_query()["sIds"] = "";
            $v_3.get_query()["itemObjectId"] = listId;
            $v_3.get_query()["itemObjectTypeCode"] = "";
            var $v_4 = new Xrm.DialogOptions;
            $v_4.height = 200;
            $v_4.width = 400;
            var $v_5 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.ListAction.performGridRefresh, $v_2);
            Xrm.Internal.openDialog($v_3.toString(), $v_4, arrayLength, null, $v_5)
        }
    }
};
Mscrm.ListAction.processLQRemove = function(xml, parameters, selected, option) {
    if (option === Mscrm.ListAction.$E || option === Mscrm.ListAction.$F) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(xml)) Mscrm.ListAction.$5 = xml;
        if (option === Mscrm.ListAction.$E) Mscrm.ListAction.$6[0] = selected.toString();
        Mscrm.ListAction.$A = parameters + "&iOption=" + CrmEncodeDecode.CrmUrlEncode(option.toString());
        Mscrm.ListAction.$4 = Mscrm.ListAction.$D;
        Mscrm.ListAction.$8 = 0;
        Mscrm.ListAction.$C = "";
        Mscrm.ListAction.$2 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/ListQualificationdlg/dlg_List_qualify.aspx")
            .toString();
        Mscrm.ListAction.$2 += "?";
        Xrm.Internal.progress(Xrm.Internal.getResourceString("LOCID_BI_PROCESSING"), 0, 350, 150);
        window.setTimeout(Mscrm.ListAction.postBackFetch, 50);
        Mscrm.ListAction.$0 = true
    } else Mscrm.ListAction.$0 = false
};
Mscrm.ListAction.processLQKeep = function(fetchxml, param, selected, option) {
    Mscrm.ListAction.processLQRemove(fetchxml, param, selected, option)
};
Mscrm.ListAction.yesCallback = function() {
    Mscrm.ListAction.$0 = true;
    Xrm.Page.ui.close()
};
Mscrm.ListAction.postBackFetch = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.ListAction.$5)) Mscrm.ListAction.$1 = "<node/>";
    else Mscrm.ListAction.$1 = Mscrm.ListAction.$5;
    Mscrm.ListAction.$1 = "<root>" + Mscrm.ListAction.$1 + "<Ids>";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ListAction
            .$6) &&
        Mscrm.ListAction.$6.length)
        for (var $v_1 = Mscrm.ListAction.$6
                     .length,
            $v_2 = 0;
            $v_2 < $v_1;
            $v_2++) Mscrm.ListAction.$1 = Mscrm.ListAction.$1 + "<Id>" + Mscrm.ListAction.$6[$v_2] + "</Id>";
    Mscrm.ListAction.$1 = Mscrm.ListAction.$1 + "</Ids></root>";
    Mscrm.ListAction.$I = Mscrm.ListAction.$2 + Mscrm.ListAction.$A;
    var $v_0 = Mscrm.GlobalImported.CrmUri.create(Mscrm.ListAction.$I);
    Mscrm.ListAction.$7.open("POST", $v_0.toString(), false);
    Mscrm.Utilities.setResponseTypeToMSXml(Mscrm.ListAction.$7);
    SetTokenInHeader(Mscrm.ListAction.$7, $v_0);
    Mscrm.ListAction.$7.send(Mscrm.ListAction.$1);
    Mscrm.ListAction.$9 = Mscrm.ListAction.$7.responseXML;
    Mscrm.ListAction.wait()
};
Mscrm.ListAction.wait = function() {
    var $v_0 = Number.parseLocale(handleXMLErr(Mscrm.ListAction.$9, true).toString());
    if ($v_0.toString() === Mscrm.ListAction.$G.toString()) {
        if (!Mscrm.ListAction.$8) {
            Mscrm.ListAction.$4 = $v_0;
            var $v_1 = XUI.Xml.SelectSingleNode(Mscrm.ListAction.$9, "/error/code", null);
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) Mscrm.ListAction.$C = "0x80004005";
            else Mscrm.ListAction.$C = $v_1.text;
            var $v_2 = XUI.Xml.SelectSingleNode(Mscrm.ListAction.$9, "/error/description", null);
            Mscrm.ListAction.$B = Mscrm.InternalUtilities.JSTypes.isNull($v_2) ? "" : $v_2.text;
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) Mscrm.ListAction.$B = "";
            else Mscrm.ListAction.$B = $v_2.text
        }
        Mscrm.ListAction.$8++
    }
    if (Mscrm.ListAction.$4.toString() === Mscrm.ListAction.$G.toString())
        if (Mscrm.ListAction.$8 === 1)
            Xrm.Internal.openErrorDialog(Number.parseLocale(Mscrm.ListAction.$C), Mscrm.ListAction.$B);
        else Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_LISTACTION_MULTIPLEERRORS"), null);
    else Mscrm.ListAction.$0 = true;
    Mscrm.Utilities.setReturnValue(Mscrm.ListAction.$0);
    setTimeout(setTimeout(closeWindow, 0), 0)
};
Mscrm.ListAction.$J = function($p0, $p1) {
    return function(retValue) {
        $p1.unshift(retValue);
        return $p0.apply(null, $p1)
    }
};
Mscrm.ListAction.registerClass("Mscrm.ListAction");
Mscrm.ListAction.$H = "";
Mscrm.ListAction.$3 = null;
Mscrm.ListAction.$5 = null;
Mscrm.ListAction.$9 = null;
Mscrm.ListAction.$2 = "";
Mscrm.ListAction.$A = "";
Mscrm.ListAction.$C = "";
Mscrm.ListAction.$B = "";
Mscrm.ListAction.$I = "";
Mscrm.ListAction.$1 = "";
Mscrm.ListAction.$6 = [];
Mscrm.ListAction.$7 = new XMLHttpRequest;
Mscrm.ListAction.$4 = 0;
Mscrm.ListAction.$8 = 0;
Mscrm.ListAction.$E = 1;
Mscrm.ListAction.$F = 2;
Mscrm.ListAction.$0 = false;
Mscrm.ListAction.$D = 1;
Mscrm.ListAction.$G = 2;
Type.registerNamespace("Mscrm");
RefreshMemberCount = Mscrm.ListAction.refreshMemberCount;
OpenManageMembersWizard = Mscrm.ListAction.openManageMembersWizard;
OpenManageMembersWizardCallback = Mscrm.ListAction.openManageMembersWizardCallback;
OpenDynamicListQuery = Mscrm.ListAction.openDynamicListQuery;
ProcessLQRemove = Mscrm.ListAction.processLQRemove;
GetListMemberType = Mscrm.ListAction.getListMemberType;
LaunchAddToListSimple = Mscrm.ListAction.launchAddToListSimple;
launchAddToListAction = Mscrm.ListAction.launchAddToListAction;
ProcessLQAdd = Mscrm.ListAction.processLQAdd;
performAfterAddtoList = Mscrm.ListAction.performAfterAddtoList;
ProcessLQUseQuery = Mscrm.ListAction.processLQUseQuery;
ProcessLQKeep = Mscrm.ListAction.processLQKeep;
PerformGridRefresh = Mscrm.ListAction.performGridRefresh;
postBackFetch = Mscrm.ListAction.postBackFetch;
LaunchListQualification = Mscrm.ListAction.launchListQualification