Type.registerNamespace("Mscrm");
Mscrm.Lead = function() {};
Mscrm.Lead.convertLead = function() { Mscrm.LeadCommandActions.qualifyLeadQuick() };
Mscrm.Lead.qualifyLead = function(showNew,
    account,
    contact,
    opportunity,
    parentType,
    parentTypeId,
    oppCurrencyId,
    qualifyStatus,
    suppressDuplicateDetection) {
    Mscrm.LeadCommandActions.qualifyLeadQuick()
};
Mscrm.Lead.registerClass("Mscrm.Lead");

function locAssocObjLead(iType, sSubType, sAssociationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var parent = GetParentObject(parentId, parentObjectTypeCode),
        parameters = [iType, sSubType, sAssociationName, iRoleOrdinal, parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateLeadAction", this, parameters, false);
    switch (iType) {
    case List:
        LookupObjectsWithCallback(callbackRef,
            null,
            "multi",
            "4300",
            0,
            null,
            "membertypecode=4&listType=" + CrmEncodeDecode.CrmUrlEncode("static"),
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

function associateLeadAction(lookupItems, iType, sSubType, sAssociationName, iRoleOrdinal, parent) {
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

convertLead = Mscrm.Lead.convertLead;
qualifyLead = Mscrm.Lead.qualifyLead