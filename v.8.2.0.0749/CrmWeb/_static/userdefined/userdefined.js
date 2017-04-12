
function locAssocObj(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateUserDefAction", this, parameters, false);
    LookupObjectsWithCallback(callbackRef, null, "multi", iType, 0)
}

function associateUserDefAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
    if (lookupItems)
        if (lookupItems.items.length > 0) {
            iRoleOrdinal = IsNull(iRoleOrdinal) ? -1 : iRoleOrdinal;
            AssociateObjects(parent.objectTypeCode,
                parent.id,
                iType,
                lookupItems,
                iRoleOrdinal == -1 ? true : iRoleOrdinal == 2,
                sSubType,
                sAssociationName)
        }
}