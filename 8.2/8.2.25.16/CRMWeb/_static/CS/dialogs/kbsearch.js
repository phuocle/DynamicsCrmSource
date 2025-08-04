
function LookupCurrentGridItem()
{
    var crmGrid = $find("crmGrid");
    if(IsNull(crmGrid) || IsNull(crmGrid.get_innerGrid()))
        return;
    var oGridItem = crmGrid.get_innerGrid().get_selectedRecords()[0];
    if(IsNull(oGridItem))
        return null;
    else
        return crmGrid.get_innerGrid().get_dataTableBody().rows[oGridItem[2]]
}
function ViewArticle(hideEmailButton)
{
    var crmGrid = $find("crmGrid"),
        oGridItem = crmGrid.get_innerGrid().get_selectedRecords()[0];
    if(!IsNull(oGridItem) && !IsNull(oGridItem[0]))
    {
        var url = "?id=" + CrmEncodeDecode.CrmUrlEncode(oGridItem[0]);
        if(hideEmailButton)
            url += "&HideEmailButton=true";
        openFrmObj(url,buildWinName(oGridItem[0]),KbArticle)
    }
}
function CreateLookupItem(tr)
{
    if(!IsNull(tr.getAttribute("oid")))
    {
        var oaCells = tr.cells,
            li = new LookupItem;
        li.id = tr.getAttribute("oid");
        li.type = KbArticle;
        li.values = [];
        li.keyValues = {};
        for(var parentTable = tr.parentNode.parentNode,
            primaryFieldName = parentTable.getAttribute("primaryfieldname"),
            columns = tr.parentNode.parentNode.getElementsByTagName("col"),
            len = columns.length,
            i = 1; i < len; ++i)
        {
            var sColumnName = columns[i].getAttribute("name"),
                sCellValue = XUI.Html.GetText(oaCells[i]);
            if(!IsNull(sColumnName) && Trim(sColumnName).length > 0)
            {
                if(sColumnName === primaryFieldName)
                {
                    li.name = sCellValue;
                    li.html = oaCells[0].innerHTML + oaCells[i].innerHTML
                }
                li.keyValues[sColumnName] = new LookupItemData(sColumnName,sCellValue);
                li.values.push(new LookupItemData(sColumnName,sCellValue))
            }
        }
        var oSerializer = Sys.Serialization.JavaScriptSerializer;
        li.values = oSerializer.serialize(li.values);
        li.keyValues = oSerializer.serialize(li.keyValues);
        var lookupItems = new LookupItems;
        lookupItems.items.push(li);
        return lookupItems
    }
    return null
}
function KbSearchJsWindowOnLoad()
{
    var searchBox = document.getElementById("SearchText");
    if(Sys.Browser.agent === Sys.Browser.InternetExplorer)
        Sys.Browser.version >= 10 && !IsNull(searchBox) && 
            searchBox.focus();
    var crmGrid = $find("crmGrid");
    $get("frmSearchInt").SearchSubject.value = "";
    crmGrid.add_onBeforeFormLoad(applychanges);
    crmGrid.SetParameter("disableDblClick","0");
    crmGrid.add_onSelectionChange(OnGridSelectionChange);
    OnGridSelectionChange()
}
Sys.Application.add_load(KbSearchJsWindowOnLoad);
function OnGridSelectionChange()
{
    var crmGrid = $find("crmGrid");
    $get("butBegin").disabled = $get("btnViewArticle").disabled = IsNull(crmGrid.get_innerGrid().get_selectedRecords()[0])
}
function applychanges(sender,args)
{
    if(!IsNull(args))
        window.returnValue = CreateLookupItem(args.objectRow);
    else
    {
        var oGridItem = LookupCurrentGridItem();
        if(!IsNull(oGridItem))
            window.returnValue = CreateLookupItem(oGridItem)
    }
    if(IsNull(args))
    {
        if(!IsNull(sender))
        {
            var e = new Sys.UI.DomEvent(sender);
            e.preventDefault()
        }
    }
    else
        args.breakEvent = true;
    Mscrm.Utilities.setReturnValue(window.returnValue);
    closeWindow()
}
function removeValue(eventObject)
{
    Mscrm.Utilities.setReturnValue(new LookupItems);
    if(!IsNull(eventObject))
    {
        var e = new Sys.UI.DomEvent(eventObject);
        e.preventDefault()
    }
    closeWindow()
}
function cancel()
{
    closeWindow()
}
