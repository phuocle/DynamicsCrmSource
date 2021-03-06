Type.registerNamespace("Mscrm");
Mscrm.Account = function() {};
Mscrm.Account.registerClass("Mscrm.Account");

function locAssocObjAccount(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateAccountAction", this, parameters, false);
    switch (iType) {
    case List:
        LookupObjectsWithCallback(callbackRef,
            null,
            "multi",
            "4300",
            0,
            null,
            "membertypecode=1&listType=" + CrmEncodeDecode.CrmUrlEncode("static"),
            "1",
            "1",
            "0",
            "",
            "",
            "",
            "577EA96E-B1F6-499b-98A7-ABB5BE8233F9");
        break;
    default:
        LookupObjectsWithCallback(callbackRef, null, "multi", iType, 0);
        break
    }
}

function associateAccountAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
    if (IsNull(lookupItems) == false)
        if (lookupItems.items.length > 0) {
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