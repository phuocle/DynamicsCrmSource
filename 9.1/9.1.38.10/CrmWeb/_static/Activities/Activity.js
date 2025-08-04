
function SaveAsCompleted()
{
    Mscrm.CommandBarActions.saveAsCompleted()
}
function assignRecurringInstance(iObjType)
{
    var parameters = [];
    parameters[0] = iObjType;
    var callbackFunctionObject = Mscrm.Utilities.createCallbackFunctionObject("assignSeriesAction",this,parameters),
        oUrl = Mscrm.CrmUri.create("/activities/act_dlgs/dlg_seriesaction.aspx?actionType=3"),
        oReturnValue = openStdDlgWithCallback(oUrl,null,500,220,callbackFunctionObject);
    isOutlookHostedWindow() && 
        assignSeriesAction(oReturnValue,iObjType)
}
function assignSeriesAction(oReturnValue,iObjType)
{
    oReturnValue && 
        Mscrm.CommandBarActions.assignObject(iObjType)
}
function assignSpecificActivity(iObjType,sSrcQueueId)
{
    if(!Xrm.Page.data.getIsValid())
        return;
    var sEntityId = new Array($get("crmFormSubmit").crmFormSubmitId.value),
        oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_assignqueue.aspx?iObjType=" + CrmEncodeDecode.CrmUrlEncode(iObjType) + "&iTotal=1&sQType=1&srcQueueId=" + CrmEncodeDecode.CrmUrlEncode(sSrcQueueId)),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 310;
    dialogOptions.width = 500;
    var parameters = [iObjType,crmFormCtrl],
        refreshFormAndGridCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(refreshFormAndGrid,parameters);
    Xrm.Internal.openDialog(url.toString(),dialogOptions,parameters,null,refreshFormAndGridCallBack)
}
function refreshFormAndGrid(oReturnValue,iObjType,crmFormCtrl)
{
    crmFormCtrl.SubmitCrmForm(4,true,true,false);
    RefreshParentGrid(iObjType)
}
function RefreshParentGrid(iObjType)
{
    Xrm.Internal.refreshParentGrid(iObjType,Xrm.Internal.getEntityName(iObjType))
}
function RefreshParentCampaignResponseGrid()
{
    try
    {
        window.opener.parent != null && 
            window.opener.parent.RefreshCampaignResponse()
    }
    catch(e)
    {
    }
}
function SwapLookups(oLookupA,oLookupB)
{
    var swapStyle = "single",
        aoLookupAItems = oLookupA.getValue(),
        aoLookupBItems = oLookupB.getValue(),
        isTrimRequired = false,
        result = true;
    if(!IsNull(aoLookupAItems) && aoLookupAItems.length > 1 && (!IsNull(aoLookupBItems) && aoLookupBItems.length > 1))
        swapStyle = "multi";
    if(swapStyle == "single" && (!IsNull(aoLookupAItems) && aoLookupAItems.length > 1 || !IsNull(aoLookupBItems) && aoLookupBItems.length > 1))
    {
        var oUrl = Mscrm.CrmUri.create("/Activities/dlg_confirm_swap.aspx"),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 250;
        dialogOptions.width = 350;
        var parameters,
            swapLookupValuesCallBack;
        if(Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile)
        {
            parameters = [true,oLookupA.getName(),oLookupB.getName()];
            swapLookupValuesCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(swapLookupValuesForMobile,parameters)
        }
        else
        {
            parameters = [true,oLookupA,oLookupB];
            swapLookupValuesCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(swapLookupValues,parameters)
        }
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,parameters,null,swapLookupValuesCallBack);
        return
    }
    swapLookupValues(result,isTrimRequired,oLookupA,oLookupB)
}
function swapLookupValuesForMobile(result,isTrimRequired,oLookupAName,oLookupBName)
{
    swapLookupValues(result,isTrimRequired,Xrm.Page.data.entity.attributes.get(oLookupAName),Xrm.Page.data.entity.attributes.get(oLookupBName))
}
function swapLookupValues(result,isTrimRequired,oLookupA,oLookupB)
{
    if(!result || !IsNull(result) && result == "false")
    {
        if(Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile)
            resetDirectionValuesForMobile();
        else
            resetDirectionValues();
        return false
    }
    var a = oLookupA,
        b = oLookupB,
        aoLookupAItems = oLookupA.getValue(),
        aoLookupBItems = oLookupB.getValue();
    if(isTrimRequired)
    {
        aoLookupAItems = TrimLookup(aoLookupAItems);
        aoLookupBItems = TrimLookup(aoLookupBItems);
        a.setValue(aoLookupAItems);
        b.setValue(aoLookupBItems)
    }
    var tmp = a.getValue();
    a.setValue(b.getValue());
    b.setValue(tmp)
}
function resetDirectionValues()
{
    var attr_directioncode = Xrm.Page.getAttribute("directioncode");
    !IsNull(attr_directioncode) && 
        attr_directioncode.removeOnChange(directioncode_onchange_handler);
    var directioncodeCtrl = Xrm.Page.data.entity.attributes.get("directioncode");
    !IsNull(directioncodeCtrl) && 
        directioncodeCtrl.setValue(directioncodeCtrl.getValue() == 0 ? 1 : 0);
    !IsNull(attr_directioncode) && 
        attr_directioncode.addOnChange(directioncode_onchange_handler,true)
}
function resetDirectionValuesForMobile()
{
    var attr_directioncode = Xrm.Page.data.entity.attributes.get("directioncode");
    if(!IsNull(attr_directioncode))
    {
        attr_directioncode.removeOnChange(Mscrm.directioncode_onchange);
        attr_directioncode.setValue(attr_directioncode.getValue() == 0);
        attr_directioncode.addOnChange(Mscrm.directioncode_onchange)
    }
}
function TrimLookup(aoLookupItems)
{
    if(aoLookupItems.length > 1)
    {
        var aoReturnItem = [];
        aoReturnItem.push(aoLookupItems[0]);
        return aoReturnItem
    }
    else
        return aoLookupItems
}
function promoteToResponse(iObjType)
{
    if(Xrm.Page.data.getIsValid())
    {
        var parameters = {};
        parameters["_CreateFromType"] = iObjType;
        parameters["_CreateFromId"] = Xrm.Page.data.entity.getId();
        Xrm.Utility.openEntityForm(Mscrm.InternalUtilities.EntityNames.CampaignResponse,Mscrm.InternalUtilities._String.Empty,parameters)
    }
}
function interactionCentricConvertToCase(records,iObjType)
{
    !IsNull(Mscrm.InlineEditUtilities) && 
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    var columns,
        entityLogicalName = Xrm.Internal.getEntityName(iObjType);
    if(entityLogicalName == "email")
        columns = ["directioncode","subject","to","cc","bcc","from"];
    else
        if(entityLogicalName == "phonecall")
            columns = ["from","subject","to"];
        else
            if(entityLogicalName == "appointment")
                columns = ["requiredattendees","optionalattendees","subject"];
            else
                columns = ["subject"];
    var directioncode = null,
        subject = null,
        from = null,
        to = null,
        cc = null,
        bcc = null,
        requiredattendees = null,
        optionalattendees = null,
        entityId = records[0].Id;
    Xrm.Internal.messages.retrieve(entityLogicalName,entityId,columns).then(function(response)
    {
        if(!Mscrm.InternalUtilities.JSTypes.isNull(response))
            if(typeof response.entity != "undefined" && typeof response.entity.getObjectData != "undefined" && typeof response.entity.getObjectData().fields != "undefined")
            {
                if(typeof response.entity.getObjectData().fields.directioncode != "undefined")
                    directioncode = response.entity.getObjectData().fields.directioncode;
                if(typeof response.entity.getObjectData().fields.subject != "undefined")
                    subject = response.entity.getObjectData().fields.subject;
                if(typeof response.entity.getObjectData().fields.from != "undefined")
                    from = response.entity.getObjectData().fields.from;
                if(typeof response.entity.getObjectData().fields.to != "undefined")
                    to = response.entity.getObjectData().fields.to;
                if(typeof response.entity.getObjectData().fields.cc != "undefined")
                    cc = response.entity.getObjectData().fields.cc;
                if(typeof response.entity.getObjectData().fields.bcc != "undefined")
                    bcc = response.entity.getObjectData().fields.bcc;
                if(typeof response.entity.getObjectData().fields.requiredattendees != "undefined")
                    requiredattendees = response.entity.getObjectData().fields.requiredattendees;
                if(typeof response.entity.getObjectData().fields.optionalattendees != "undefined")
                    optionalattendees = response.entity.getObjectData().fields.optionalattendees
            }
        var directionCodeVal = true;
        if(!IsNull(directioncode))
            directionCodeVal = directioncode == "0" ? false : true;
        var sUrlElement = "",
            subjectField = "";
        if(!IsNull(subject))
            subjectField = subject;
        sUrlElement += "subject=" + CrmEncodeDecode.CrmUrlEncode(subjectField);
        var customerItems = null,
            secondaryCust = null;
        sUrlElement += "&activityType=" + CrmEncodeDecode.CrmUrlEncode(iObjType);
        if(directionCodeVal == true)
        {
            if(!IsNull(to))
                customerItems = to;
            if(IsNull(customerItems))
                customerItems = [];
            if(!IsNull(cc))
                secondaryCust = cc;
            if(!IsNull(secondaryCust))
                for(var i = 0; i < secondaryCust.length; i++)
                    customerItems[customerItems.length] = secondaryCust[i];
            if(!IsNull(bcc))
                secondaryCust = bcc;
            if(!IsNull(secondaryCust))
                for(var i = 0; i < secondaryCust.length; i++)
                    customerItems[customerItems.length] = secondaryCust[i]
        }
        else
            if(directionCodeVal == false)
                if(!IsNull(from))
                    customerItems = from;
        if(iObjType == Mscrm.InternalUtilities.EntityTypeCode.Appointment || iObjType == Mscrm.InternalUtilities.EntityTypeCode.RecurringAppointmentMaster)
        {
            if(!IsNull(requiredattendees))
                customerItems = requiredattendees;
            if(IsNull(customerItems))
                customerItems = [];
            if(!IsNull(optionalattendees))
                secondaryCust = optionalattendees;
            if(!IsNull(secondaryCust))
                for(var i = 0; i < secondaryCust.length; i++)
                    customerItems[customerItems.length] = secondaryCust[i]
        }
        GetValidCustomerSuccess(sUrlElement,iObjType,customerItems,Mscrm.InternalUtilities.EntityNames.Incident,entityId)
    })
}
function convertToCase(iObjType)
{
    !IsNull(Mscrm.InlineEditUtilities) && 
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    if(Xrm.Page.data.entity.getIsDirty())
    {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("LOCID_CONV_ACT_SAVE_WARNING"));
        return false
    }
    if(Xrm.Page.data.getIsValid())
    {
        var directionCodeCtrl = Xrm.Page.data.entity.attributes.get("directioncode"),
            directionCodeVal = true;
        if(!IsNull(directionCodeCtrl))
        {
            directionCodeVal = directionCodeCtrl.getValue();
            directionCodeVal = directionCodeVal == "0" ? false : true
        }
        var sUrlElement = "",
            subjectField = "",
            _subject = Xrm.Page.data.entity.attributes.get("subject");
        if(!IsNull(_subject) && !IsNull(_subject.getValue()))
            subjectField = _subject.getValue();
        sUrlElement += "subject=" + CrmEncodeDecode.CrmUrlEncode(subjectField);
        var customerItems = null,
            secondaryCust = null;
        sUrlElement += "&activityType=" + CrmEncodeDecode.CrmUrlEncode(iObjType);
        if(directionCodeVal == true)
        {
            var toBehavior = Xrm.Page.data.entity.attributes.get("to");
            if(!IsNull(toBehavior))
                customerItems = toBehavior.getValue();
            if(IsNull(customerItems))
                customerItems = [];
            var ccBehavior = Xrm.Page.data.entity.attributes.get("cc");
            if(!IsNull(ccBehavior))
            {
                secondaryCust = ccBehavior.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
            var bccBehavior = Xrm.Page.data.entity.attributes.get("bcc");
            if(!IsNull(bccBehavior))
            {
                secondaryCust = bccBehavior.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
        }
        else
            if(directionCodeVal == false)
            {
                var fromBehavior = Xrm.Page.data.entity.attributes.get("from");
                if(!IsNull(fromBehavior))
                    customerItems = fromBehavior.getValue()
            }
        if(iObjType == Mscrm.InternalUtilities.EntityTypeCode.Appointment || iObjType == Mscrm.InternalUtilities.EntityTypeCode.RecurringAppointmentMaster)
        {
            var requiredattendees = Xrm.Page.data.entity.attributes.get("requiredattendees");
            if(!IsNull(requiredattendees))
                customerItems = requiredattendees.getValue();
            if(IsNull(customerItems))
                customerItems = [];
            var optionalattendees = Xrm.Page.data.entity.attributes.get("optionalattendees");
            if(!IsNull(optionalattendees))
            {
                secondaryCust = optionalattendees.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
        }
        if(!IsNull(customerItems))
            GetValidCustomer(customerItems,sUrlElement,iObjType,0,Mscrm.InternalUtilities.EntityNames.Incident);
        else
        {
            GetValidCustomerSuccess(sUrlElement,iObjType,customerItems);
            RefreshParentGrid(iObjType)
        }
    }
}
function GetValidCustomer(customerItems,sUrlElement,iObjType,customerNo,customerType)
{
    if(customerNo == customerItems.length)
        return GetValidCustomerSuccess(sUrlElement,iObjType,customerItems,customerType);
    try
    {
        var isValidCustomer = true;
        if(!IsNull(customerType) && customerType == "lead" && customerItems[customerNo].type.toString() != Mscrm.InternalUtilities.EntityTypeCode.Lead.toString())
            isValidCustomer = false;
        if(!IsNull(customerType) && customerType != "lead" && (customerItems[customerNo].type.toString() != Mscrm.InternalUtilities.EntityTypeCode.Account.toString() && customerItems[customerNo].type.toString() != Mscrm.InternalUtilities.EntityTypeCode.Contact.toString()))
            isValidCustomer = false;
        if(!isValidCustomer)
            return GetValidCustomer(customerItems,sUrlElement,iObjType,customerNo + 1,customerType);
        if(Xrm.Utility.isMocaOffline())
        {
            sUrlElement += AppendValidCustomerAttributes(customerItems,customerNo,customerType);
            return GetValidCustomerSuccess(sUrlElement,iObjType,customerItems,customerType)
        }
        else
        {
            var columns = [];
            columns[0] = "statecode";
            Xrm.Internal.messages.retrieve(Xrm.Internal.getEntityName(typeof customerItems[customerNo].type != "number" ? Number.parseInvariant(customerItems[customerNo].type) : customerItems[customerNo].type),customerItems[customerNo].id,columns).then(function(response)
            {
                if(typeof response.entity != "undefined" && typeof response.entity.getObjectData != "undefined" && typeof response.entity.getObjectData().fields != "undefined" && typeof response.entity.getObjectData().fields.statecode != "undefined" && typeof response.entity.getObjectData().fields.statecode.value != "undefined" && response.entity.getObjectData().fields.statecode.value.toString() == "0" && typeof response.entity.get_key != "undefined")
                {
                    for(var id = response.entity.get_key().toString(),
                        k = 0; k < customerItems.length; k++)
                        if(!IsNull(customerItems[k].id) && customerItems[k].id.toLowerCase().indexOf(id.toLowerCase()) != -1)
                        {
                            sUrlElement += AppendValidCustomerAttributes(customerItems,k,customerType);
                            return GetValidCustomerSuccess(sUrlElement,iObjType,customerItems,customerType)
                        }
                    try
                    {
                        Mscrm.CrmDebug.assert(true,"customer with id {0} was not found on the page",id)
                    }
                    catch(e)
                    {
                    }
                    return GetValidCustomer(customerItems,sUrlElement,iObjType,customerNo + 1,customerType)
                }
                else
                    return GetValidCustomer(customerItems,sUrlElement,iObjType,customerNo + 1,customerType)
            },function(response)
            {
                return GetValidCustomer(customerItems,sUrlElement,iObjType,customerNo + 1,customerType)
            })
        }
    }
    catch(e)
    {
    }
}
function AppendValidCustomerAttributes(customerItems,customerNo,customerType)
{
    if(customerType != "lead")
        return "&customerId=" + CrmEncodeDecode.CrmUrlEncode(customerItems[customerNo].id) + "&customerType=" + CrmEncodeDecode.CrmUrlEncode(customerItems[customerNo].type) + "&customerName=" + CrmEncodeDecode.CrmUrlEncode(customerItems[customerNo].name);
    else
        return "&leadId=" + CrmEncodeDecode.CrmUrlEncode(customerItems[customerNo].id) + "&leadName=" + CrmEncodeDecode.CrmUrlEncode(customerItems[customerNo].name)
}
function GetValidCustomerSuccess(sUrlElement,iObjType,customerItems,customerType,entityId)
{
    if(customerType == "opportunity")
        return GetValidForConvertToOpportunity(sUrlElement,iObjType,customerItems);
    else
        if(customerType == "lead")
            return GetValidForConvertToOpportunityWithLead(sUrlElement,iObjType);
    var height = 320,
        parameters = null;
    parameters = [iObjType];
    var convertToCaseActionCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(convertToCaseAction,parameters),
        oUrl = Mscrm.CrmUri.create("/Activities/act_dlgs/convert_to_case.aspx?" + sUrlElement),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 310;
    dialogOptions.width = 410;
    if(Mscrm.InternalUtilities.DialogUtility.isMDDEnabled() && Mscrm.InternalUtilities.DialogUtility.isMDDConverted("converttocase",Xrm.Page.data.entity.getEntityName()))
        Mscrm.CommandBarActions.convertToCasePreload(sUrlElement,iObjType,entityId);
    else
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,parameters,null,convertToCaseActionCallBack);
    RefreshParentGrid(iObjType)
}
function convertToCaseAction(objRet,iObjType)
{
    if(objRet)
        if(Xrm.Page.context.client.getClient() == Xrm.ClientName.outlook && Xrm.Page.context.client.getClientState() == Xrm.ClientState.offline && !Mscrm.InternalUtilities.DialogUtility.isMDDConverted("converttocase",Xrm.Page.data.entity.getEntityName()))
        {
            var command = new RemoteCommand("ActivitiesWebService","ConvertActivityToCase");
            command.SetParameter("activityIdStr",Xrm.Page.data.entity.getId());
            command.SetParameter("activityType",iObjType);
            command.SetParameter("activitySubject",Xrm.Page.data.entity.attributes.get("subject").getValue());
            command.SetParameter("customerId",objRet.CustomerId);
            command.SetParameter("customerType",objRet.CustomerType);
            command.SetParameter("subjectId",objRet.SubjectId);
            command.SetParameter("subjectType",objRet.SubjectType);
            var response = command.Execute();
            response.Success && 
                convertToCaseSuccess(response,objRet.SaveActivity,objRet.OpenNewRecord,iObjType)
        }
        else
        {
            var activityId = Xrm.Page.data.entity.getId(),
                customerid = objRet.CustomerId,
                objectTypeCode = typeof iObjType != "number" ? Number.parseInvariant(iObjType) : iObjType,
                customerTypeCode = typeof objRet.CustomerType != "number" ? Number.parseInvariant(objRet.CustomerType) : objRet.CustomerType,
                subjectTypeCode = typeof objRet.SubjectType != "number" ? Number.parseInvariant(objRet.SubjectType) : objRet.SubjectType;
            try
            {
                Mscrm.InternalUtilities.Sdk.convertToCase(function(response)
                {
                    convertToCaseSuccess(response,objRet.SaveActivity,objRet.OpenNewRecord,iObjType)
                },function(response)
                {
                    if(Mscrm.CommandBarActions.isMobileCompanionApp())
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(response);
                    else
                        Xrm.Internal.openErrorDialog(response.get_organizationServiceFault().get_errorCode(),response.get_error().toString(),response.get_organizationServiceFault().get_responseOuterXml())
                },Xrm.Page.data.entity.attributes.get("subject").getValue(),activityId,objectTypeCode,customerid,customerTypeCode,null,null,objRet.SubjectId,subjectTypeCode)
            }
            catch(e)
            {
            }
        }
}
function convertToCaseSuccess(response,saveActivity,openNewRecord,iObjType)
{
    var caseId;
    if(typeof response.ReturnValue != "undefined")
        caseId = response.ReturnValue;
    else
        if(typeof response.id != "undefined")
            caseId = response.id;
    var _regardingobjectid = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if(caseId != "" && !IsNull(_regardingobjectid))
    {
        var itemsArray = [],
            reg = new Xrm.LookupObject;
        reg.id = caseId;
        reg.entityType = Mscrm.InternalUtilities.EntityNames.Incident;
        var _subject = Xrm.Page.data.entity.attributes.get("subject");
        if(!IsNull(_subject))
            reg.name = _subject.getValue();
        else
            reg.name = "";
        itemsArray.push(reg);
        _regardingobjectid.setValue(itemsArray)
    }
    if(Mscrm.CommandBarActions.isMobileCompanionApp() || Mscrm.InternalUtilities.Utilities.isRefreshForm())
    {
        if(saveActivity == false)
            caseId != "" && !IsNull(_regardingobjectid) && 
                Xrm.Page.data.save().then(function()
                {
                    openNewRecord && 
                        Xrm.Utility.openEntityForm(Mscrm.InternalUtilities.EntityNames.Incident,caseId)
                },Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
        else
        {
            Xrm.Page.data.setFormDirty(false);
            if(openNewRecord && caseId != "")
            {
                UnsetCheckpointInHistoryManager();
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),false,Mscrm.InternalUtilities.EntityNames.Incident,caseId)
            }
            else
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),true)
        }
        RefreshParentGrid(iObjType)
    }
    else
        convertToEntityLegacy(caseId,saveActivity,openNewRecord,iObjType,Mscrm.InternalUtilities.EntityNames.Incident)
}
function convertToLead(iObjType)
{
    !IsNull(Mscrm.InlineEditUtilities) && 
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    if(Xrm.Page.data.entity.getIsDirty())
    {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("LOCID_CONV_ACT_SAVE_WARNING"));
        return false
    }
    if(!Xrm.Page.data.getIsValid())
        return;
    var oCrmFormSubmit = $get("crmFormSubmit"),
        sUrlElement = "activityType=" + CrmEncodeDecode.CrmUrlEncode(iObjType);
    sUrlElement += "&activityId=" + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId());
    var height = 390,
        parameters = [];
    parameters[0] = iObjType;
    var oUrl = Mscrm.CrmUri.create("/Activities/act_dlgs/convert_to_lead.aspx?" + sUrlElement),
        convertToLeadActionCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(convertToLeadAction,parameters),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = height;
    dialogOptions.width = 410;
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,parameters,null,convertToLeadActionCallBack)
}
function convertToLeadAction(objRet,iObjType)
{
    if(objRet)
        try
        {
            var activityTypeCode = typeof iObjType != "number" ? Number.parseInvariant(iObjType) : iObjType;
            Mscrm.CommandBarActions.convertToLead(function(response)
            {
                ConvertToLeadSuccess(response,objRet.SaveActivity,objRet.OpenNewRecord,iObjType)
            },function(response)
            {
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(response)
            },Xrm.Page.data.entity.attributes.get("subject").getValue(),Xrm.Page.data.entity.getId(),activityTypeCode,objRet.Topic,objRet.FirstName,objRet.LastName,objRet.Company,objRet.EmailAddress,objRet.LogResponse)
        }
        catch(e)
        {
        }
}
function ConvertToLeadSuccess(response,saveActivity,openNewRecord,iObjType)
{
    var leadId;
    if(typeof response.ReturnValue != "undefined")
        leadId = response.ReturnValue;
    else
        if(typeof response.id != "undefined")
            leadId = response.id;
        else
            if(typeof response.get_recordId != "undefined" && typeof response.get_recordId() != "undefined")
                leadId = response.get_recordId().toString();
    var _regardingCtrl = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if(leadId != "" && !IsNull(_regardingCtrl))
    {
        var itemsArray = [],
            reg = new Xrm.LookupObject;
        reg.id = leadId;
        reg.entityType = Mscrm.InternalUtilities.EntityNames.Lead;
        var _subject = Xrm.Page.data.entity.attributes.get("subject");
        if(!IsNull(_subject))
            reg.name = _subject.getValue();
        else
            reg.name = "";
        itemsArray.push(reg);
        _regardingCtrl.setValue(itemsArray)
    }
    if(Mscrm.CommandBarActions.isMobileCompanionApp() || Mscrm.InternalUtilities.Utilities.isRefreshForm())
    {
        if(saveActivity == false)
            leadId != "" && !IsNull(_regardingCtrl) && 
                Xrm.Page.data.save().then(function()
                {
                    openNewRecord && 
                        Xrm.Utility.openEntityForm(Mscrm.InternalUtilities.EntityNames.Lead,leadId)
                },Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
        else
        {
            Xrm.Page.data.setFormDirty(false);
            if(openNewRecord && leadId != "")
            {
                UnsetCheckpointInHistoryManager();
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),false,Mscrm.InternalUtilities.EntityNames.Lead,leadId)
            }
            else
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),true)
        }
        RefreshParentGrid(iObjType)
    }
    else
        convertToEntityLegacy(leadId,objRet.SaveActivity,objRet.openNewRecord,iObjType,Mscrm.InternalUtilities.EntityNames.Lead)
}
function convertToOpportunity(iObjType)
{
    !IsNull(Mscrm.InlineEditUtilities) && 
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
    if(Xrm.Page.data.entity.getIsDirty())
    {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("LOCID_CONV_ACT_SAVE_WARNING"));
        return false
    }
    if(Xrm.Page.data.getIsValid())
    {
        var _directionCodeCtrl = Xrm.Page.data.entity.attributes.get("directioncode"),
            directionCodeVal = true;
        if(!IsNull(_directionCodeCtrl))
        {
            directionCodeVal = _directionCodeCtrl.getValue();
            directionCodeVal = directionCodeVal == "0" || directionCodeVal == false ? false : true
        }
        var customerItems = null,
            secondaryCust = null,
            sUrlElement = "";
        sUrlElement += "activityType=" + CrmEncodeDecode.CrmUrlEncode(iObjType);
        if(directionCodeVal == true)
        {
            var _to = Xrm.Page.data.entity.attributes.get("to");
            if(!IsNull(_to))
                customerItems = _to.getValue();
            if(IsNull(customerItems))
                customerItems = [];
            var _cc = Xrm.Page.data.entity.attributes.get("cc");
            if(!IsNull(_cc))
            {
                secondaryCust = _cc.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
            var _bcc = Xrm.Page.data.entity.attributes.get("bcc");
            if(!IsNull(_bcc))
            {
                secondaryCust = _bcc.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
        }
        else
            if(directionCodeVal == false)
            {
                var _from = Xrm.Page.data.entity.attributes.get("from");
                if(!IsNull(_from))
                    customerItems = _from.getValue()
            }
        if(iObjType == Mscrm.InternalUtilities.EntityTypeCode.Appointment || iObjType == Mscrm.InternalUtilities.EntityTypeCode.RecurringAppointmentMaster)
        {
            var _requiredattendees = Xrm.Page.data.entity.attributes.get("requiredattendees");
            if(!IsNull(_requiredattendees))
                customerItems = _requiredattendees.getValue();
            if(IsNull(customerItems))
                customerItems = [];
            var _optionalattendees = Xrm.Page.data.entity.attributes.get("optionalattendees");
            if(!IsNull(_optionalattendees))
            {
                secondaryCust = _optionalattendees.getValue();
                if(!IsNull(secondaryCust))
                    for(var i = 0; i < secondaryCust.length; i++)
                        customerItems[customerItems.length] = secondaryCust[i]
            }
        }
        !IsNull(customerItems) && 
            GetValidCustomer(customerItems,sUrlElement,iObjType,0,"opportunity")
    }
    RefreshParentGrid(iObjType)
}
function GetValidForConvertToOpportunity(sUrlElement,iObjType,customerItems)
{
    if(sUrlElement.indexOf("customerId") == -1)
        GetValidCustomer(customerItems,sUrlElement,iObjType,0,"lead");
    else
        GetValidForConvertToOpportunityWithLead(sUrlElement,iObjType)
}
function GetValidForConvertToOpportunityWithLead(sUrlElement,iObjType)
{
    var regardingCtrl = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if(!IsNull(regardingCtrl))
    {
        var regardingItems = regardingCtrl.getValue();
        if(!IsNull(regardingItems) && regardingItems.length == 1)
            if(regardingItems[0].type.toString() == Mscrm.InternalUtilities.EntityTypeCode.CampaignActivity.toString() || regardingItems[0].type.toString() == Mscrm.InternalUtilities.EntityTypeCode.BulkOperation.toString())
                sUrlElement += "&campaignId=" + CrmEncodeDecode.CrmUrlEncode(regardingItems[0].id) + "&campaignType=" + CrmEncodeDecode.CrmUrlEncode(regardingItems[0].type) + "&campaignName=" + CrmEncodeDecode.CrmUrlEncode(regardingItems[0].name)
    }
    var subjectField = "",
        _subject = Xrm.Page.data.entity.attributes.get("subject");
    if(!IsNull(_subject.getValue()))
        subjectField = _subject.getValue();
    var ownerId = "",
        ownerType = "",
        ownerCtrl = Xrm.Page.data.entity.attributes.get("ownerid");
    if(!IsNull(ownerCtrl))
    {
        var dataVal = ownerCtrl.getValue();
        ownerId = dataVal[0].id;
        ownerType = dataVal[0].type
    }
    sUrlElement += "&subject=" + CrmEncodeDecode.CrmUrlEncode(subjectField);
    sUrlElement += "&ownerId=" + CrmEncodeDecode.CrmUrlEncode(ownerId);
    sUrlElement += "&ownerType=" + CrmEncodeDecode.CrmUrlEncode(ownerType);
    var isMDDConverted = Mscrm.InternalUtilities.DialogUtility.isMDDConverted("converttoopportunity",Xrm.Page.data.entity.getEntityName());
    if(isMDDConverted)
        Mscrm.CommandBarActions.convertActivityPreload(sUrlElement,iObjType);
    else
    {
        var isLead = sUrlElement.indexOf("leadId") != -1,
            dialogOptions = Mscrm.CommandBarActions.getConvertToOpportunityDialogOptions(isLead),
            parameters = [];
        parameters[0] = iObjType;
        var oUrl = Mscrm.CrmUri.create("/Activities/act_dlgs/convert_activity.aspx?" + sUrlElement),
            convertToOppActionCallBack = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory(convertToOppAction,parameters);
        Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,null,null,convertToOppActionCallBack)
    }
    RefreshParentGrid(iObjType)
}
function convertToOppAction(objRet,iObjType)
{
    if(objRet)
        if(Xrm.Page.context.client.getClient() == Xrm.ClientName.outlook && Xrm.Page.context.client.getClientState() == Xrm.ClientState.offline && !Mscrm.InternalUtilities.DialogUtility.isMDDConverted("converttoopportunity",Xrm.Page.data.entity.getEntityName()))
        {
            var command = new RemoteCommand("ActivitiesWebService","ConvertActivity");
            command.SetParameter("activitySubject",Xrm.Page.data.entity.attributes.get("subject").getValue());
            command.SetParameter("activityId",Xrm.Page.data.entity.getId());
            command.SetParameter("activityType",iObjType);
            command.SetParameter("leadId",objRet.LeadId);
            command.SetParameter("customerId",objRet.CustomerId);
            command.SetParameter("customerType",objRet.CustomerType);
            command.SetParameter("currencyId",objRet.CurrencyId);
            command.SetParameter("campaignId",objRet.CampaignId);
            command.SetParameter("campaignType",objRet.CampaignType);
            command.SetParameter("logResponse",objRet.LogResponse);
            command.SetParameter("ownerId",objRet.ownerId);
            command.SetParameter("ownerType",objRet.ownerType);
            var response = command.Execute();
            response.Success && 
                ConvertToOpportunitySuccess(response,objRet.SaveActivity,objRet.OpenNewRecord,iObjType)
        }
        else
            try
            {
                var activityTypeCode = typeof iObjType != "number" ? Number.parseInvariant(iObjType) : iObjType,
                    customerTypeCode = typeof objRet.CustomerType != "number" ? Number.parseInvariant(objRet.CustomerType) : objRet.CustomerType,
                    campaignTypeCode = typeof objRet.CampaignType != "number" ? Number.parseInvariant(objRet.CampaignType) : objRet.CampaignType,
                    ownerTypeCode = typeof objRet.ownerType != "number" ? Number.parseInvariant(objRet.ownerType) : objRet.ownerType;
                Mscrm.CommandBarActions.convertToOpportunity(function(response)
                {
                    ConvertToOpportunitySuccess(response,objRet.SaveActivity,objRet.OpenNewRecord,iObjType)
                },function(response)
                {
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(response)
                },Xrm.Page.data.entity.attributes.get("subject").getValue(),Xrm.Page.data.entity.getId(),activityTypeCode,objRet.CustomerId,customerTypeCode,objRet.ownerId,ownerTypeCode,objRet.LeadId,objRet.CurrencyId,objRet.CampaignId,campaignTypeCode,objRet.LogResponse)
            }
            catch(e)
            {
            }
}
function ConvertToOpportunitySuccess(response,saveActivity,openNewRecord,iObjType)
{
    var oppId;
    if(typeof response.ReturnValue != "undefined")
        oppId = response.ReturnValue;
    else
        if(typeof response.id != "undefined")
            oppId = response.id;
        else
            if(typeof response.get_recordId != "undefined" && typeof response.get_recordId() != "undefined")
                oppId = response.get_recordId().toString();
    var _regardingCtrl = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if(oppId != "" && !IsNull(_regardingCtrl))
    {
        var itemsArray = [],
            reg = new Xrm.LookupObject;
        reg.id = oppId;
        reg.entityType = Mscrm.InternalUtilities.EntityNames.Opportunity;
        var _subject = Xrm.Page.data.entity.attributes.get("subject");
        if(!IsNull(_subject))
            reg.name = _subject.getValue();
        else
            reg.name = "";
        itemsArray.push(reg);
        _regardingCtrl.setValue(itemsArray)
    }
    if(Mscrm.CommandBarActions.isMobileCompanionApp() || Mscrm.InternalUtilities.Utilities.isRefreshForm())
    {
        if(saveActivity == false)
            oppId != "" && !IsNull(_regardingCtrl) && 
                Xrm.Page.data.save().then(function()
                {
                    openNewRecord && 
                        Xrm.Utility.openEntityForm(Mscrm.InternalUtilities.EntityNames.Opportunity,oppId)
                },Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
        else
        {
            Xrm.Page.data.setFormDirty(false);
            if(openNewRecord && oppId != "")
            {
                UnsetCheckpointInHistoryManager();
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),false,Mscrm.InternalUtilities.EntityNames.Opportunity,oppId)
            }
            else
                Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),Xrm.Page.data.entity.getEntityName(),true)
        }
        RefreshParentGrid(iObjType)
    }
    else
        convertToEntityLegacy(oppId,saveActivity,openNewRecord,iObjType,Mscrm.InternalUtilities.EntityNames.Opportunity)
}
function convertToEntityLegacy(entityId,saveActivity,openNewRecord,iObjType,targetEntityName)
{
    var crmFormCtrl = $find("crmForm");
    if(saveActivity == false)
    {
        crmFormCtrl.SubmitCrmForm(1,true,true,false);
        RefreshParentGrid(iObjType)
    }
    else
        crmFormCtrl.SubmitCrmForm(58,true,true,false);
    openNewRecord && !IsNull(entityId) && 
        Xrm.Utility.openEntityForm(targetEntityName,entityId);
    RefreshParentGrid(iObjType)
}
function okToSave()
{
    if(Xrm.Page.data.entity.getIsDirty() && !IsNull(Xrm.Page.data.entity.attributes.get("statecode")) && (Xrm.Page.data.entity.attributes.get("statecode").getValue() == 1 || Xrm.Page.data.entity.attributes.get("statecode").getValue() == 2))
        if(!Mscrm.InternalUtilities._Script.confirm(LOCID_ACTIVITY_CLOSED_WARNING))
            return false;
    return true
}
function CustomActivitySubmit(sender,args)
{
    if(!args.isDefaultPrevented())
        !okToSave() && 
            args.preventDefault()
}
function UnsubscribeLink()
{
    var iframe = document.getElementById("descriptionIFrame"),
        idoc = document;
    if(!IsNull(iframe))
        idoc = iframe.contentDocument || iframe.contentWindow.document;
    try
    {
        idoc.execCommand("createLink",false,"mailto:[Run_Time_Address]?subject=[Run_Time_Subject]")
    }
    catch(e)
    {
    }
}
function SetFocusOnSubject()
{
    var subjectCtrl = Xrm.Page.ui.controls.get("subject");
    if(!IsNull(subjectCtrl) && !subjectCtrl.getDisabled())
        try
        {
            subjectCtrl.setFocus()
        }
        catch(e)
        {
        }
}
function UnsetCheckpointInHistoryManager()
{
    if(Mscrm.CommandBarActions.isMobileCompanionApp())
        return;
    Xrm.Internal.preventBrowseBack()
}
