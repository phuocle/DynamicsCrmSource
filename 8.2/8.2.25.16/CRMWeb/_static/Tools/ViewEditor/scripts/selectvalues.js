
var _oEvent,
    isStateTransition = false,
    isEntityAttributes = false;
function SelectValuesJsWindowOnLoad()
{
    var oArgs = getDialogArguments(),
        _oValuesXml = oArgs.valuesXml,
        _okeyAttributesXml = oArgs.keyAttributesXml;
    if(!Mscrm.InternalUtilities._Script.isNullOrUndefined(_okeyAttributesXml) && !Mscrm.InternalUtilities._Script.isNullOrUndefined(_okeyAttributesXml.childNodes) && _okeyAttributesXml.childNodes.length > 0)
        for(var i = 0; i < _okeyAttributesXml.childNodes.length; i++)
        {
            var attributeKey = _okeyAttributesXml.childNodes[i].innerHTML;
            attributeKey = attributeKey.replace("&amp;#40;","(");
            attributeKey = attributeKey.replace("&amp;#41;",")");
            _okeyAttributesXml.childNodes[i].innerHTML = attributeKey
        }
    _iFieldSelectWidth = 205;
    _iFieldSelectHeight = 145;
    _sFieldSelectLeftTitle = LOCID_SELVALS_TITLE_AVAILVALS;
    _sFieldSelectRightTitle = LOCID_SELVALS_TITLE_SELTDVALS;
    _bFieldSelectShowUp = false;
    _bFieldSelectShowDown = false;
    var oNodes = XUI.Xml.SelectNodes(_oValuesXml,"/select/option",null),
        isStateTransition = XUI.Xml.SelectNodes(_oValuesXml,"/select/option/@state",null).length == 0 ? false : true,
        isEntityAttributes = XUI.Xml.SelectNodes(_oValuesXml,"/select/option/@attributes",null).length == 0 ? false : true,
        isSelectedEntityAttributes = !Mscrm.InternalUtilities._Script.isNullOrUndefined(_okeyAttributesXml) ? XUI.Xml.SelectNodes(_okeyAttributesXml,"/select/option/@keyattribute",null).length == 0 ? false : true : false,
        iLen = oNodes.length;
    if(isStateTransition)
        aSize = 3;
    else
        if(isEntityAttributes)
            aSize = 10;
        else
            aSize = 2;
    var sValuesAry = new Array(aSize);
    sValuesAry[0] = new Array(iLen);
    sValuesAry[1] = new Array(iLen);
    if(isStateTransition)
        sValuesAry[2] = new Array(iLen);
    else
        if(isEntityAttributes)
            sValuesAry[2] = new Array(iLen);
    for(var i = 0; i < iLen; i++)
    {
        if(isStateTransition)
            sValuesAry[2][i] = oNodes[i].getAttribute("state");
        if(isEntityAttributes)
            sValuesAry[2][i] = oNodes[i].getAttribute("attributes");
        sValuesAry[1][i] = XUI.Xml.GetText(oNodes[i]);
        sValuesAry[0][i] = oNodes[i].getAttribute("value")
    }
    var disablesorting = XUI.Xml.SelectSingleNode(_oValuesXml,"/select/@disablesorting",null);
    if(disablesorting == null || XUI.Xml.GetText(disablesorting) == "false")
        if(isStateTransition)
            Quicksort(sValuesAry[1],0,sValuesAry[0].length - 1,sValuesAry[0],sValuesAry[2],isStateTransition,isEntityAttributes);
        else
            if(isEntityAttributes)
                Quicksort(sValuesAry[1],0,sValuesAry[0].length - 1,sValuesAry[0],sValuesAry[2],isStateTransition,isEntityAttributes);
            else
                Quicksort(sValuesAry[1],0,sValuesAry[0].length - 1,sValuesAry[0]);
    var selectedList = oArgs.sSelectedValues.split(";");
    iLen = selectedList.length;
    var sSelectedAry = new Array(aSize);
    sSelectedAry[0] = new Array(iLen);
    sSelectedAry[1] = new Array(iLen);
    if(isStateTransition)
        sSelectedAry[2] = new Array(iLen);
    if(isEntityAttributes)
        sSelectedAry[2] = new Array(iLen);
    for(var sSelectedValue = "",
        i = 0; i < iLen; i++)
    {
        sSelectedValue = selectedList[i];
        if(sSelectedValue == "")
            continue;
        for(var oNodes = XUI.Xml.SelectNodes(_oValuesXml,"/select/option",null),
            j = 0; j < oNodes.length; j++)
            if(oNodes[j].getAttribute("value") == sSelectedValue)
            {
                if(isStateTransition)
                    sSelectedAry[2][i] = oNodes[j].getAttribute("state");
                if(isEntityAttributes)
                    sSelectedAry[2][i] = oNodes[j].getAttribute("attributes");
                sSelectedAry[1][i] = XUI.Xml.GetText(oNodes[j]);
                sSelectedAry[0][i] = oNodes[j].getAttribute("value");
                break
            }
    }
    drawFieldSelect(sValuesAry,sSelectedAry,isStateTransition,isEntityAttributes);
    if(isSelectedEntityAttributes)
        if(_bView != null && _bView == true)
        {
            var oKeyNodes = XUI.Xml.SelectNodes(_okeyAttributesXml,"/select/option",null),
                keyLen = oKeyNodes.length,
                sSelectedKeyAry = new Array(aSize);
            sSelectedKeyAry[0] = new Array(keyLen);
            sSelectedKeyAry[1] = new Array(keyLen);
            sSelectedKeyAry[2] = new Array(keyLen);
            for(var i = 0; i < keyLen; i++)
            {
                sSelectedKeyAry[2][i] = oKeyNodes[i].getAttribute("keyattribute");
                sSelectedKeyAry[1][i] = XUI.Xml.GetText(oKeyNodes[i]);
                sSelectedKeyAry[0][i] = oKeyNodes[i].getAttribute("value")
            }
        }
    isSelectedEntityAttributes && _bView != null && _bView == true && 
        drawKeySelected(sSelectedKeyAry)
}
$addHandler(window,"load",SelectValuesJsWindowOnLoad);
function applychanges()
{
    var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows,
        iLen = oRows.length,
        sDependsAry = [];
    sDependsAry = GetReturnList();
    Mscrm.Utilities.setReturnValue(sDependsAry);
    closeWindow()
}
function cancel()
{
    closeWindow()
}
