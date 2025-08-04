
function locAssocObjGoal(iType,sRelationshipName,parentId,parentObjectTypeCode)
{
    var parent = GetParentObject(parentId,parentObjectTypeCode),
        showNewButton = iType == ActivityPointer ? "0" : "1",
        showPropButton = iType == ActivityPointer ? "0" : "1",
        additionalParams = "currentid=" + CrmEncodeDecode.CrmUrlEncode(parent.id),
        parameters = [iType,sRelationshipName,parent],
        callbackRef = Mscrm.Utilities.createCallbackFunctionObject("associateGoalAction",this,parameters,false);
    LookupObjectsWithCallback(callbackRef,null,"multi",iType,0,"metricid",additionalParams + "&ObjectId=" + parent.id,showNewButton,showPropButton,"0","","","","F0A20746-0FE7-4EDC-9889-569776B2D76A")
}
function associateGoalAction(lookupItems,iType,sRelationshipName,parent)
{
    if(lookupItems)
    {
        if(lookupItems.items.length > 0)
            for(var commandAssociate = new RemoteCommand("AssociateRecords","AssociateOneToMany"),
                i = 0,
                objs = lookupItems.items,
                iLength = objs.length,
                i = 0; i < iLength; ++i)
            {
                commandAssociate.SetParameter("childType",iType);
                commandAssociate.SetParameter("childId",objs[i].id);
                commandAssociate.SetParameter("parentType",parent.objectTypeCode);
                commandAssociate.SetParameter("parentId",parent.id);
                commandAssociate.SetParameter("relationshipName",sRelationshipName);
                if(!commandAssociate.Execute().Success)
                    break
            }
        try
        {
            auto(iType)
        }
        catch(e)
        {
            var msg = "An error occurred in the file 'goal.js' in the function 'locAssocObjGoal'.\n\n";
            msg += "Name: " + e.name + "\n\n";
            msg += "Description: " + e.description + "\n\n";
            msg += "Message: " + e.message;
            +"\n\n";
            msg += "Date: " + (new Date).toLocaleString();
            alert(msg)
        }
    }
}
