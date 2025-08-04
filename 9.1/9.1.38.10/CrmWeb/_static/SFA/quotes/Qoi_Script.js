
var _productQtyDec,
    _defaultQtyAcc;
function getProducts()
{
    if(!Xrm.Page.data.getIsValid())
        return;
    var aoItems = Xrm.Page.data.entity.attributes.get("opportunityid").getValue(),
        sOppID = "",
        sOppName = "";
    if(aoItems != null)
    {
        sOppID = aoItems[0].id;
        sOppName = aoItems[0].name
    }
    var parameters = [],
        oURL = Mscrm.CrmUri.create("/sfa/quotes/dlg_products.aspx?opportunityid=" + CrmEncodeDecode.CrmUrlEncode(sOppID) + "&name=" + CrmEncodeDecode.CrmUrlEncode(sOppName) + "&transactioncurrencyid=" + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.attributes.get("transactioncurrencyid").getValue()[0].id)),
        crmDialog = new Mscrm.CrmDialog(oURL,null,400,200,null);
    crmDialog.setCallbackInfo("performActionAfterGetProducts",this,parameters);
    crmDialog.show()
}
function performActionAfterGetProducts(oResult)
{
    if(oResult)
    {
        var QoiId = {};
        QoiId["OpportunityID"] = oResult.opportunityId;
        var typeName = Xrm.Page.data.entity.getEntityName();
        switch(typeName)
        {
            case "quote":
                Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.QuoteGetProducts,QoiId);
                break;
            case "salesorder":
                Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.SalesOrderGetProducts,QoiId);
                break;
            case "invoice":
                Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.InvoiceGetProducts,QoiId);
                break
        }
    }
}
function CheckIsProductOverridden()
{
    var oCrmFormSubmit = $get("crmFormSubmit"),
        s = oCrmFormSubmit.crmFormSubmitXml.value;
    if(Xrm.Page.data.entity.attributes.get("isproductoverridden").getValue())
    {
        s = s.replace(/<productid.*productid>/,"");
        s = s.replace(/<uomid.*uomid>/,"")
    }
    else
        s = s.replace(/<productdescription.*productdescription>/,"");
    oCrmFormSubmit.crmFormSubmitXml.value = s
}
function GetQuantityDecimal(objectTypeCode,objectId,productId,uomId)
{
    var oXmlDoc = XUI.Xml.CreateDocument(),
        oXmlHTTP = new XMLHttpRequest;
    oXmlHTTP.open("POST",Mscrm.CrmUri.create("/sfa/quotes/cmd_getquantitydecimal.aspx?objectTypeCode=" + CrmEncodeDecode.CrmUrlEncode(objectTypeCode) + "&objectId=" + CrmEncodeDecode.CrmUrlEncode(objectId) + "&productId=" + CrmEncodeDecode.CrmUrlEncode(productId) + "&uomId=" + CrmEncodeDecode.CrmUrlEncode(uomId)).toString(),false);
    Mscrm.Utilities.setResponseTypeToMSXml(oXmlHTTP);
    oXmlHTTP.send(oXmlDoc);
    return parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXmlHTTP.responseXML,"quantitydecimal",null)),10)
}
function locCustomAddRelatedToNonForm(iTypeToAdd,createFromType,createFromId,additionalAttributes)
{
    var pricelevelControl = Xrm.Page.data.entity.attributes.get("pricelevelid");
    if(!pricelevelControl.getUserPrivilege().canRead)
        if(!Mscrm.InternalUtilities.JSTypes.isNull(window.LOCID_NO_READ_ON_PRICELIST))
            alert(window.LOCID_NO_READ_ON_PRICELIST);
        else
            !Mscrm.InternalUtilities.JSTypes.isNull(window.parent.LOCID_NO_READ_ON_PRICELIST) && 
                alert(window.parent.LOCID_NO_READ_ON_PRICELIST);
    if(pricelevelControl.getValue() == null)
        if(!Mscrm.InternalUtilities.JSTypes.isNull(window.LOCID_PRICE_LIST_NOT_SELECTED))
            alert(window.LOCID_PRICE_LIST_NOT_SELECTED);
        else
            !Mscrm.InternalUtilities.JSTypes.isNull(window.parent.LOCID_PRICE_LIST_NOT_SELECTED) && 
                alert(window.parent.LOCID_PRICE_LIST_NOT_SELECTED);
    else
        if(pricelevelControl.getIsDirty())
        {
            var nameControl = Xrm.Page.data.entity.attributes.get("name"),
                name = !Mscrm.InternalUtilities.JSTypes.isNull(nameControl) ? nameControl.getValue() : "";
            if(!Mscrm.InternalUtilities.JSTypes.isNull(window.LOCID_PRICE_LIST_NOT_SAVED))
                alert(formatString(window.LOCID_PRICE_LIST_NOT_SAVED,name));
            else
                !Mscrm.InternalUtilities.JSTypes.isNull(window.parent.LOCID_PRICE_LIST_NOT_SAVED) && 
                    alert(formatString(window.parent.LOCID_PRICE_LIST_NOT_SAVED,name))
        }
        else
        {
            var sUrl = "?_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode(createFromType) + "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode(createFromId) + additionalAttributes;
            if(Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile)
                window.parent.openFrmObj(sUrl,window.parent.buildWinName(),iTypeToAdd);
            else
                if(typeof openFrmObj == "function")
                    openFrmObj(sUrl,buildWinName(),iTypeToAdd);
                else
                    window.parent.openFrmObj(sUrl,window.parent.buildWinName(),iTypeToAdd)
        }
}
function EnableDisableShippingAddress()
{
    var oWillCall = Xrm.Page.data.entity.attributes.get("willcall"),
        bDisabled = oWillCall.getValue(),
        shipto_compositeCtrl = Xrm.Page.ui.controls.get("shipto_composite");
    if(!IsNull(shipto_compositeCtrl))
        if(bDisabled)
            shipto_compositeCtrl.setVisible(false);
        else
            shipto_compositeCtrl.setVisible(true);
    else
    {
        var shipto_nameBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_name");
        !IsNull(shipto_nameBehaviorCtrl) && 
            shipto_nameBehaviorCtrl.setDisabled(bDisabled);
        var shipto_line1BehaviorCtrl = Xrm.Page.ui.controls.get("shipto_line1");
        !IsNull(shipto_line1BehaviorCtrl) && 
            shipto_line1BehaviorCtrl.setDisabled(bDisabled);
        var shipto_line2BehaviorCtrl = Xrm.Page.ui.controls.get("shipto_line2");
        !IsNull(shipto_line2BehaviorCtrl) && 
            shipto_line2BehaviorCtrl.setDisabled(bDisabled);
        var shipto_line3BehaviorCtrl = Xrm.Page.ui.controls.get("shipto_line3");
        !IsNull(shipto_line3BehaviorCtrl) && 
            shipto_line3BehaviorCtrl.setDisabled(bDisabled);
        var shipto_cityBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_city");
        !IsNull(shipto_cityBehaviorCtrl) && 
            shipto_cityBehaviorCtrl.setDisabled(bDisabled);
        var shipto_stateorprovinceBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_stateorprovince");
        !IsNull(shipto_stateorprovinceBehaviorCtrl) && 
            shipto_stateorprovinceBehaviorCtrl.setDisabled(bDisabled);
        var shipto_postalcodeBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_postalcode");
        !IsNull(shipto_postalcodeBehaviorCtrl) && 
            shipto_postalcodeBehaviorCtrl.setDisabled(bDisabled);
        var shipto_countryBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_country");
        !IsNull(shipto_countryBehaviorCtrl) && 
            shipto_countryBehaviorCtrl.setDisabled(bDisabled);
        var shipto_telephoneBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_telephone");
        !IsNull(shipto_telephoneBehaviorCtrl) && 
            shipto_telephoneBehaviorCtrl.setDisabled(bDisabled);
        var shipto_faxBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_fax");
        !IsNull(shipto_faxBehaviorCtrl) && 
            shipto_faxBehaviorCtrl.setDisabled(bDisabled);
        var shipto_freighttermscodeBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_freighttermscode");
        !IsNull(shipto_freighttermscodeBehaviorCtrl) && 
            shipto_freighttermscodeBehaviorCtrl.setDisabled(bDisabled);
        var shipto_contactnameBehaviorCtrl = Xrm.Page.ui.controls.get("shipto_contactname");
        !IsNull(shipto_contactnameBehaviorCtrl) && 
            shipto_contactnameBehaviorCtrl.setDisabled(bDisabled)
    }
}
function UpdatePriceOverriden(refreshPrice)
{
    var ispriceoverridenAttributes = Xrm.Page.data.entity.attributes.get("ispriceoverridden"),
        bIsPriceOverride = !Mscrm.InternalUtilities.JSTypes.isNull(ispriceoverridenAttributes) ? ispriceoverridenAttributes.getValue() == 1 : false,
        isproductoverriddenAttributes = Xrm.Page.data.entity.attributes.get("isproductoverridden"),
        bIsExistingProduct = isproductoverriddenAttributes.getValue() == 0,
        shipToFaxControl = Xrm.Page.ui.controls.get("shipto_fax"),
        pricePerUnitAttr = Xrm.Page.data.entity.attributes.get("priceperunit"),
        priceperunitControl = Xrm.Page.ui.controls.get("priceperunit"),
        ispriceoverriddenControl = Xrm.Page.ui.controls.get("ispriceoverridden");
    if(!Mscrm.InternalUtilities.JSTypes.isNull(CAN_OVERRIDE_PRICE) && (!CAN_OVERRIDE_PRICE || CAN_OVERRIDE_PRICE === "false"))
    {
        var isproductoverriddenControl = Xrm.Page.ui.controls.get("isproductoverridden");
        DisableControl(ispriceoverriddenControl);
        DisableControl(isproductoverriddenControl);
        DisableControl(priceperunitControl)
    }
    else
    {
        !Mscrm.InternalUtilities.JSTypes.isNull(priceperunitControl) && 
            priceperunitControl.setDisabled(!bIsPriceOverride);
        !Mscrm.InternalUtilities.JSTypes.isNull(ispriceoverriddenControl) && 
            ispriceoverriddenControl.setDisabled(!bIsExistingProduct)
    }
    if(!bIsPriceOverride)
    {
        SetAttributeIfNotNull(pricePerUnitAttr.getName(),"prevDataValue",pricePerUnitAttr.getValue());
        var formType = Xrm.Page.ui.getFormType();
        formType === Xrm.FormType.create && Xrm.Page.context.client.getClient() === Xrm.ClientName.mobile && 
            pricePerUnitAttr.setValue(null);
        !Mscrm.InternalUtilities.JSTypes.isNull(refreshPrice) && !(formType === Xrm.FormType.create && Xrm.Page.context.client.getClient() === Xrm.ClientName.mobile) && 
            Xrm.Page.data.refresh(true)
    }
    else
    {
        previousValue = GetSavedValue(pricePerUnitAttr.getName(),"prevDataValue");
        !Mscrm.InternalUtilities.JSTypes.isNull(previousValue) && 
            pricePerUnitAttr.setValue(previousValue)
    }
    if(!Mscrm.InternalUtilities.JSTypes.isNull(shipToFaxControl))
    {
        shipToFaxControl.setDisabled(!bIsPriceOverride);
        Xrm.Page.data.entity.attributes.get("priceperunit").setRequiredLevel(bIsPriceOverride ? Xrm.RequiredLevel.required : Xrm.RequiredLevel.none)
    }
}
function ProductOverriddenHandler()
{
    var isproductoverriddenAttributes = Xrm.Page.data.entity.attributes.get("isproductoverridden"),
        bIsExistingProduct = isproductoverriddenAttributes.getValue() == 0,
        quantityAttributes = Xrm.Page.data.entity.attributes.get("quantity"),
        quantityshippedAttributes = Xrm.Page.data.entity.attributes.get("quantityshipped"),
        quantitybackorderedAttributes = Xrm.Page.data.entity.attributes.get("quantitybackordered"),
        quantitycancelledAttributes = Xrm.Page.data.entity.attributes.get("quantitycancelled"),
        productDescription = Xrm.Page.data.entity.attributes.get("productdescription"),
        pricePerUnit = Xrm.Page.data.entity.attributes.get("priceperunit"),
        oPriceOverriddenAttributes = Xrm.Page.data.entity.attributes.get("ispriceoverridden"),
        oProductIdAttributes = Xrm.Page.data.entity.attributes.get("productid"),
        oUomIdAttributes = Xrm.Page.data.entity.attributes.get("uomid");
    oProductIdAttributes.setRequiredLevel(bIsExistingProduct ? Xrm.RequiredLevel.required : Xrm.RequiredLevel.none);
    oUomIdAttributes.setRequiredLevel(bIsExistingProduct ? Xrm.RequiredLevel.required : Xrm.RequiredLevel.none);
    productDescription.setRequiredLevel(!bIsExistingProduct ? Xrm.RequiredLevel.required : Xrm.RequiredLevel.none);
    pricePerUnit.setRequiredLevel(!bIsExistingProduct ? Xrm.RequiredLevel.required : Xrm.RequiredLevel.none);
    if(!bIsExistingProduct)
    {
        SetAttributeIfNotNull(oPriceOverriddenAttributes.getName(),"prevDataValue",oPriceOverriddenAttributes.getValue());
        oPriceOverriddenAttributes.setValue(true);
        SetAttributeIfNotNull(oProductIdAttributes.getName(),"prevDataValue",oProductIdAttributes.getValue());
        oProductIdAttributes.setValue(null);
        SetAttributeIfNotNull(oUomIdAttributes.getName(),"prevDataValue",oUomIdAttributes.getValue());
        oUomIdAttributes.setValue(null);
        SetPrecisionOnControl(quantityAttributes,_defaultQtyAcc);
        SetPrecisionOnControl(quantityshippedAttributes,_defaultQtyAcc);
        SetPrecisionOnControl(quantitybackorderedAttributes,_defaultQtyAcc);
        SetPrecisionOnControl(quantitycancelledAttributes,_defaultQtyAcc);
        SetAttributeIfNotNull(productDescription.getName(),"prevDataValue",productDescription.getValue());
        productDescription.setValue(GetSavedValue(productDescription.getName(),"prevDataValue"))
    }
    else
    {
        SetAttributeIfNotNull(productDescription.getName(),"prevDataValue",productDescription.getValue());
        productDescription.setValue("");
        SetPrecisionOnControl(quantityAttributes,_productQtyDec);
        SetPrecisionOnControl(quantityshippedAttributes,_productQtyDec);
        SetPrecisionOnControl(quantitybackorderedAttributes,_productQtyDec);
        SetPrecisionOnControl(quantitycancelledAttributes,_productQtyDec);
        var priceOverrideSavedValue = GetSavedValue(oPriceOverriddenAttributes.getName(),"prevDataValue");
        oPriceOverriddenAttributes.setValue(!Mscrm.InternalUtilities.JSTypes.isNull(priceOverrideSavedValue) ? priceOverrideSavedValue : true);
        oProductIdAttributes.setValue(GetSavedValue(oProductIdAttributes.getName(),"prevDataValue"));
        oUomIdAttributes.setValue(GetSavedValue(oUomIdAttributes.getName(),"prevDataValue"))
    }
    UpdatePriceOverriden();
    Xrm.Page.ui.controls.get("productid").setDisabled(!bIsExistingProduct);
    Xrm.Page.ui.controls.get("uomid").setDisabled(!bIsExistingProduct || oProductIdAttributes.getValue() == null);
    Xrm.Page.ui.controls.get("productdescription").setDisabled(bIsExistingProduct)
}
function SetPrecisionOnControl(control,defaultPrecision)
{
    !Mscrm.InternalUtilities.JSTypes.isNull(control) && 
        control.setPrecision(defaultPrecision)
}
function SetAttributeIfNotNull(oProductDescription,attributeName,value)
{
    if(!Mscrm.InternalUtilities.JSTypes.isNull(value))
        window[oProductDescription + attributeName] = value
}
function GetSavedValue(oProductDescription,attributeName)
{
    var obj = window[oProductDescription + attributeName];
    if(!Mscrm.InternalUtilities.JSTypes.isNull(obj))
        return obj;
    return null
}
function reCalculate()
{
    Xrm.Page.data.save().then(function()
    {
        Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(),Xrm.Page.data.entity.getId())
    },Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
}
function createNewLineItem(sLineItemEntity,sParentEntity,sParentId,oForm,bWriteInPOroduct)
{
    var sAdditionalAttributes = "";
    if(sParentEntity == 1090 || sParentEntity == 1088)
    {
        var ispricelocked = Xrm.Page.data.entity.attributes.get("ispricelocked").getValue();
        sAdditionalAttributes = "&locked=" + (ispricelocked ? "1" : "0")
    }
    if(bWriteInPOroduct)
        sAdditionalAttributes += "&isproductoverridden=1";
    if(typeof RunFunctionFromParentOrSelf == "function")
        RunFunctionFromParentOrSelf("locCustomAddRelatedToNonForm",sLineItemEntity,sParentEntity,sParentId,sAdditionalAttributes);
    else
    {
        var func = window.self["locCustomAddRelatedToNonForm"];
        !Mscrm.InternalUtilities.JSTypes.isNull(func) && typeof func === "function" && 
            func(sLineItemEntity,sParentEntity,sParentId,sAdditionalAttributes)
    }
}
function lock()
{
    var typeName = Xrm.Page.data.entity.getEntityName();
    switch(typeName)
    {
        case "salesorder":
            Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.OrderLock,null);
            break;
        case "invoice":
            Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.InvoiceLock,null);
            break
    }
}
function unlock()
{
    var typeName = Xrm.Page.data.entity.getEntityName();
    switch(typeName)
    {
        case "salesorder":
            Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.OrderUnlock,null);
            break;
        case "invoice":
            Mscrm.RefreshPageCommandHandler.executeCommand(Mscrm.InlineCommands.InvoiceUnlock,null);
            break
    }
}
function CheckPriceAndQuantityNonNegative(args)
{
    var quantity = Xrm.Page.data.entity.attributes.get("quantity").getValue(),
        pricePerUnit = Xrm.Page.data.entity.attributes.get("priceperunit").getValue();
    if(!Mscrm.InternalUtilities.JSTypes.isNull(quantity) && !Mscrm.InternalUtilities.JSTypes.isNull(pricePerUnit))
    {
        var quantityValue = parseInt(quantity),
            pricePerUnitValue = parseInt(pricePerUnit);
        if(quantityValue < 0 && pricePerUnitValue < 0)
        {
            alert(LOCID_QTY_PRICE_NEGATIVE);
            args.preventDefault();
            return false
        }
    }
    return true
}
function OnTransactionCurrencyChange()
{
    !IsNull(Xrm.Page.ui.controls.get("pricelevelid")) && 
        Xrm.Page.data.entity.attributes.get("pricelevelid").setValue(null);
    alert(LOCID_CURRENCY_CHANGE_ALERT)
}
function DisableControl(control)
{
    if(!Mscrm.InternalUtilities.JSTypes.isNull(control))
    {
        var controlType = control.getControlType();
        controlType != "iframe" && controlType != "webresource" && controlType != "subgrid" && 
            control.setDisabled(true)
    }
}
