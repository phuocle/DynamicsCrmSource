Type.registerNamespace("Mscrm");

function locConvert(toKit) {
    if (!Xrm.Page.data.getIsValid()) return;
    showConvertDialog(toKit)
}

function showConvertDialog(toKit) {
    var $v_0 = [toKit], $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 520;
    var $v_2 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_convert.aspx?toKit=" +
            CrmEncodeDecode.CrmUrlEncode(toKit.toString())),
        $v_3 = Mscrm.CommandBarActions.createCallbackFunctionFactory(performRefreshedActionAfterConvert, $v_0);
    Xrm.Internal.openDialog($v_2.toString(), $v_1, null, null, $v_3)
}

function performRefreshedActionAfterConvert(result, parameters) {
    var $v_0 = 1, $v_1 = Number.parseInvariant(parameters.toString());
    if (result)
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm())
            if ($v_1 === $v_0)
                Xrm.Internal.messages.convertProductToKit(Xrm.Page.data.entity.getId()).then(function($p1_0) {
                        Xrm.Utility.openEntityForm("product", Xrm.Page.data.entity.getId());
                        Xrm.Internal.refreshParentGrid(1024, null, Xrm.Page.data.entity.getId())
                    },
                    function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) });
            else
                Xrm.Internal.messages.convertKitToProduct(Xrm.Page.data.entity.getId()).then(function($p1_0) {
                        Xrm.Utility.openEntityForm("product", Xrm.Page.data.entity.getId());
                        Xrm.Internal.refreshParentGrid(1024, null, Xrm.Page.data.entity.getId())
                    },
                    function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) });
        else if (parameters[0] === $v_0) locConvert(1);
        else locConvert(0)
}

function locAssocObjProduct(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateProductAction", this, parameters, false);
    switch (iType) {
    case Product:
        LookupObjectsWithCallback(callbackRef,
            null,
            "multi",
            "1024",
            0,
            null,
            "&currentid=" + CrmEncodeDecode.CrmUrlEncode(parent.id));
        break;
    default:
        LookupObjectsWithCallback(callbackRef, "multi", iType, 0);
        break
    }
}

function associateProductAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
    if (lookupItems && lookupItems.items.length > 0) {
        iRoleOrdinal = IsNull(iRoleOrdinal) ? -1 : iRoleOrdinal;
        AssociateObjects(parent.objectTypeCode,
            parent.id,
            iType,
            lookupItems,
            iRoleOrdinal == -1 ? false : iRoleOrdinal == 2,
            sSubType,
            sAssociationName)
    }
}