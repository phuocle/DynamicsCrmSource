
function AddRelatedAddress(iType,parentType,parentId)
{
    var parameters = {};
    if(iType == Mscrm.InternalUtilities.EntityTypeCode.CustomerAddress)
    {
        if(!IsNull(parentId) && !IsNull(parentType))
        {
            parameters["objecttypecode"] = parentType;
            parameters["addressnumber"] = 0;
            parameters["parentid"] = parentId
        }
    }
    else
    {
        parameters["pId"] = parentId;
        parameters["pType"] = parentType
    }
    Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(iType),null,parameters)
}
