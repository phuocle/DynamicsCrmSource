
function RefreshRevenueFields(iOTC,oArgs)
{
    try
    {
        if(window.opener != null)
            window.opener.auto(iOTC);
        else
            !IsNull(oArgs) && !IsNull(oArgs.opener) && 
                oArgs.opener.auto(iOTC);
        Xrm.Page.data.refresh(true)
    }
    catch(e)
    {
    }
}
function AddTransactionCurrencyParam(oLookup)
{
    var oTransCurId;
    sTransCurId = "";
    var dataValue;
    if(!IsNull(Xrm.Page.data))
    {
        oTransCurId = Xrm.Page.data.entity.attributes.get("transactioncurrencyid");
        dataValue = oTransCurId.getValue()
    }
    else
    {
        oTransCurId = Mscrm.FormControlInputBehavior.GetBehaviorForForm("transactioncurrencyid");
        dataValue = oTransCurId.get_dataValue()
    }
    if(!IsNull(dataValue))
        sTransCurId = dataValue[0].id;
    var fetchXml = '<filter type="and"><condition attribute="transactioncurrencyid" operator="eq" value="' + sTransCurId + '"/></filter>';
    oLookup.addCustomFilter(fetchXml)
}
