
var _selectedItem,
    _onSelectFunc,
    _noItemsMessage;
function On(e)
{
    GetSrc(e);
    if(e != _selectedItem)
        if(e.className.indexOf(" ms-crm-GlowOn") < 0)
            e.className += " ms-crm-GlowOn"
}
function Off(e)
{
    GetSrc(e);
    if(e != _selectedItem)
        e.className = e.className.replace(" ms-crm-GlowOn","")
}
function SelectItem(e)
{
    GetSrc(e);
    if(e != _selectedItem)
    {
        e.className = e.className.replace(" ms-crm-GlowOn","");
        if(e.className.indexOf(" ms-crm-SelectOn") < 0)
            e.className += " ms-crm-SelectOn";
        var eFirstChild = XUI.Html.DomUtils.GetFirstChild(e);
        eFirstChild.checked = true;
        eFirstChild.focus();
        if(_selectedItem)
        {
            _selectedItem.className = _selectedItem.className.replace(" ms-crm-GlowOn","");
            _selectedItem.className = _selectedItem.className.replace(" ms-crm-SelectOn","");
            var _selectedItemFirstChild = XUI.Html.DomUtils.GetFirstChild(_selectedItem);
            if(_selectedItemFirstChild)
                _selectedItemFirstChild.checked = false
        }
        _selectedItem = e;
        _onSelectFunc && 
            _onSelectFunc(e)
    }
}
function GetSrc(e)
{
    if(e.tagName != "LI")
        e = e.parentNode
}
function PageOnLoad()
{
    var tblItems = $get("tblItems");
    if(!IsNull(tblItems))
    {
        var oItems = tblItems.getElementsByTagName("li");
        if(oItems != null && oItems.length > 0)
            SelectItem(oItems[0]);
        else
        {
            $get("butBegin").disabled = true;
            XUI.Html.SetOuterHTML(tblItems,GetEmptyMessageHtml())
        }
    }
}
Sys.Application.add_load(PageOnLoad);
function documentOnKeyDownHandler(eventObject)
{
    try
    {
        switch(eventObject.keyCode)
        {
            case KEY_UP:
                var _selectedItemPrevSibling = XUI.Html.DomUtils.GetPrevSibling(_selectedItem);
                typeof _selectedItemPrevSibling.getAttribute("item") != "undefined" && 
                    SelectItem(_selectedItemPrevSibling);
                break;
            case KEY_DOWN:
                var _selectedItemNextSibling = XUI.Html.DomUtils.GetNextSibling(_selectedItem);
                typeof _selectedItemNextSibling.getAttribute("item") != "undefined" && 
                    SelectItem(_selectedItemNextSibling);
                break;
            case KEY_HOME:
                typeof XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode).getAttribute("item") != "undefined" && 
                    SelectItem(XUI.Html.DomUtils.GetFirstChild(_selectedItem.parentNode));
                break;
            case KEY_END:
                typeof XUI.Html.DomUtils.GetLastChild(_selectedItem.parentNode).getAttribute("item") != "undefined" && 
                    SelectItem(XUI.Html.DomUtils.GetLastChild(_selectedItem.parentNode));
                break
        }
    }
    catch(e)
    {
    }
}
$addHandler(document,"keydown",documentOnKeyDownHandler);
function LoadOptionsForLanguage(languageCode,listType)
{
    var oCommand = new RemoteCommand("DialogList","RetrieveListHtml");
    oCommand.SetParameter("languageCode",languageCode);
    oCommand.SetParameter("listType",listType);
    var oResult = oCommand.Execute(),
        buttonBegin = $get("butBegin"),
        itemList = $get("ItemList");
    if(typeof oResult.ReturnValue == "string")
    {
        itemList.innerHTML = oResult.ReturnValue;
        PageOnLoad();
        buttonBegin.disabled = false
    }
    else
    {
        itemList.innerHTML = GetEmptyMessageHtml();
        buttonBegin.disabled = true
    }
}
function GetEmptyMessageHtml()
{
    if(!IsNull(_noItemsMessage) && _noItemsMessage.length > 0)
        return "<table style='width:100%; height:100%;'><tr><td style='height:100%;text-align:center;color:#999999;'>" + CrmEncodeDecode.CrmHtmlEncode(_noItemsMessage) + "<br><br></td></tr></table>";
    else
        return ""
}
