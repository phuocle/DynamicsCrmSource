
function locAssocObjCompetitor(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateCompAction", this, parameters, false);
    switch (iType) {
    case Opportunity:
        LookupObjectsWithCallback(callbackRef,
            null,
            "multi",
            iType,
            0,
            null,
            "",
            "0",
            "1",
            "0",
            "",
            "",
            "",
            "5cfca9b8-2d7c-e211-bb35-00155d882402",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "1",
            null);
        break;
    default:
        LookupObjectsWithCallback(callbackRef, null, "multi", iType, 0);
        break
    }
}

function associateCompAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
    if (lookupItems)
        lookupItems.items.length > 0 &&
            AssociateObjects(parent.objectTypeCode,
                parent.id,
                iType,
                lookupItems,
                iRoleOrdinal == -1 ? true : iRoleOrdinal == 2,
                sSubType,
                sAssociationName)
}