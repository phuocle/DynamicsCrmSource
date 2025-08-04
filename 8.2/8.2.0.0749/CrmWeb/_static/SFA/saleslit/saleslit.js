
function locAssocObj(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateSalesLitAction", this, parameters),
        lookupItems = LookupObjectsWithCallback(callbackRef, null, "multi", iType, 0);
    Mscrm.Utilities.isModalDialogSupported() &&
        associateSalesLitAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent);
    var callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateSalesLitAction", this, parameters, false);
    LookupObjectsWithCallback(callbackRef, null, "multi", iType, 0, false)
}

function associateSalesLitAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
    if (lookupItems)
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