
function MoveUp(oActive)
{
    if(oActive != null)
        switch(oActive.className)
        {
            case "section":
                var oSection = oActive.parentNode.parentNode,
                    oSectionPrevSibling = XUI.Html.DomUtils.GetPrevSibling(oSection);
                if(XUI.Html.DomUtils.GetPrevSibling(oSection))
                {
                    MoveUpAdjacentXml(GetSectionNode(oActive.getAttribute("name")));
                    oSection.swapNode(oSectionPrevSibling)
                }
                break;
            case "cell":
            case "iframe":
                MoveUpCell(oActive);
                break
        }
    else
        alert(LOCID_FORMED_MUSTSELECT)
}
function MoveUpCell(oActive)
{
    var oCell = GetCellNode(oActive.getAttribute("name")),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        bRefresh = false;
    if(XUI.Html.DomUtils.GetPrevSibling(oActive.parentNode).rowIndex > 0)
        if(oActive.parentNode.cells.length == 1 || XUI.Html.DomUtils.GetPrevSibling(oActive.parentNode).cells.length != 2)
        {
            MoveUpRows(oActive);
            bRefresh = true
        }
        else
        {
            var oNode = GetCellNode(oActive.getAttribute("name")),
                oParentNode = oNode.parentNode,
                oPrevParentNode = XUI.Html.DomUtils.GetPrevSibling(oParentNode),
                oNextParentNode;
            if(XUI.Html.DomUtils.GetNextSibling(oNode))
            {
                oParentNode.insertBefore(oPrevParentNode.removeChild(oPrevParentNode.childNodes[0]),XUI.Html.DomUtils.GetNextSibling(oNode));
                oNode = oPrevParentNode.childNodes[0];
                oParentNode = oNode.parentNode;
                oNextParentNode = XUI.Html.DomUtils.GetNextSibling(oParentNode);
                oParentNode.insertBefore(oNextParentNode.removeChild(oNextParentNode.childNodes[0]),oNode)
            }
            else
            {
                oParentNode.insertBefore(oPrevParentNode.removeChild(XUI.Html.DomUtils.GetLastChild(oPrevParentNode)),null);
                oNode = oPrevParentNode.childNodes[0];
                oParentNode = oNode.parentNode;
                oNextParentNode = XUI.Html.DomUtils.GetNextSibling(oParentNode);
                oParentNode.insertBefore(oNextParentNode.removeChild(XUI.Html.DomUtils.GetPrevSibling(XUI.Html.DomUtils.GetLastChild(oNextParentNode))),null)
            }
            DeleteEmptyRows(oRows);
            bRefresh = true
        }
    bRefresh && 
        RefreshSectionHtml(oActive.parentNode.parentNode.parentNode,oActive.getAttribute("name"))
}
function MoveUpRows(oActive)
{
    for(var oNode = GetCellNode(oActive.getAttribute("name")),
        rowSpan = GetRowSpan(oNode),
        oRow = oNode.parentNode,
        oRows = oRow.parentNode,
        lastRow = oRow,
        i = 0; i < rowSpan; i++)
        lastRow = XUI.Html.DomUtils.GetNextSibling(lastRow);
    var oInsertRow = XUI.Html.DomUtils.GetPrevSibling(oRow),
        oPrevRow = XUI.Html.DomUtils.GetPrevSibling(oInsertRow);
    do
    {
        oRows.insertBefore(oRows.removeChild(oInsertRow),lastRow);
        lastRow = oInsertRow;
        oInsertRow = oPrevRow;
        if(oPrevRow)
            oPrevRow = XUI.Html.DomUtils.GetPrevSibling(oPrevRow)
    } while(lastRow.childNodes.length == 0)
}
function MoveDown(oActive)
{
    if(oActive != null)
        switch(oActive.className)
        {
            case "section":
                var oSection = oActive.parentNode.parentNode;
                if(XUI.Html.DomUtils.GetNextSibling(oSection) && XUI.DomUtilities.HasChildElements(XUI.Html.DomUtils.GetNextSibling(oSection).cells[0]))
                {
                    MoveDownAdjacentXml(GetSectionNode(oActive.getAttribute("name")));
                    oSection.swapNode(XUI.Html.DomUtils.GetNextSibling(oSection))
                }
                break;
            case "cell":
            case "iframe":
                MoveDownCell(oActive);
                break
        }
    else
        alert(LOCID_FORMED_MUSTSELECT)
}
function MoveDownCell(oActive)
{
    var oCell = GetCellNode(oActive.getAttribute("name")),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        bRefresh = false;
    if(XUI.Html.DomUtils.GetNextSibling(oActive.parentNode))
        if(oActive.parentNode.cells.length == 1 || XUI.Html.DomUtils.GetNextSibling(oActive.parentNode).cells.length != 2)
        {
            var oNextRow = XUI.Html.DomUtils.GetNextSibling(oActive.parentNode);
            while(oNextRow && oNextRow.cells.length == 0)
                oNextRow = XUI.Html.DomUtils.GetNextSibling(oNextRow);
            if(oNextRow)
            {
                if(typeof oNextRow.cells[0].getAttribute("name") != "undefined")
                    MoveUpRows(oNextRow.cells[0]);
                else
                    MoveUpRows(oNextRow.cells[1]);
                bRefresh = true
            }
        }
        else
        {
            var oNode = GetCellNode(oActive.getAttribute("name")),
                oParentNode = oNode.parentNode,
                oNextParentNode = XUI.Html.DomUtils.GetNextSibling(oParentNode),
                oPrevParentNode;
            if(XUI.Html.DomUtils.GetNextSibling(oNode))
            {
                oParentNode.insertBefore(oNextParentNode.removeChild(oNextParentNode.childNodes[0]),XUI.Html.DomUtils.GetNextSibling(oNode));
                oNode = oNextParentNode.childNodes[0];
                oParentNode = oNode.parentNode;
                oPrevParentNode = XUI.Html.DomUtils.GetPrevSibling(oParentNode);
                oParentNode.insertBefore(oPrevParentNode.removeChild(oPrevParentNode.childNodes[0]),oNode)
            }
            else
            {
                oParentNode.insertBefore(oNextParentNode.removeChild(XUI.Html.DomUtils.GetLastChild(oNextParentNode)),oNode);
                oNode = oNextParentNode.childNodes[0];
                oParentNode = oNode.parentNode;
                oPrevParentNode = XUI.Html.DomUtils.GetPrevSibling(oParentNode);
                oParentNode.insertBefore(oPrevParentNode.removeChild(XUI.Html.DomUtils.GetLastChild(oPrevParentNode)),null)
            }
            DeleteEmptyRows(oRows);
            bRefresh = true
        }
    bRefresh && 
        RefreshSectionHtml(oActive.parentNode.parentNode.parentNode,oActive.getAttribute("name"))
}
function MoveLeft(oActive)
{
    if(oActive != null)
    {
        if(oActive.parentNode.className == "ms-crm-Tab ms-crm-Tab-Selected")
            oActive = oActive.parentNode;
        switch(oActive.className)
        {
            case "ms-crm-Tab ms-crm-Tab-Selected":
                if(XUI.Html.DomUtils.GetPrevSibling(oActive))
                {
                    MoveUpAdjacentXml(GetTabNode(oActive.getAttribute("name")));
                    oActive.swapNode(XUI.Html.DomUtils.GetPrevSibling(oActive))
                }
                break;
            case "cell":
            case "iframe":
                MoveLeftCell(oActive);
                break
        }
    }
    else
        alert(LOCID_FORMED_MUSTSELECT)
}
function MoveLeftCell(oActive)
{
    var oCell = GetCellNode(oActive.getAttribute("name")),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        bRefresh = false;
    if(XUI.Html.DomUtils.GetPrevSibling(oActive) && oActive.parentNode.cells.length > 1)
    {
        if(oActive.getAttribute("name") != "")
            MoveUpAdjacentXml(GetCellNode(oActive.getAttribute("name")));
        else
            MoveUpAdjacentXml(XUI.Html.DomUtils.GetNextSibling(GetCellNode(XUI.Html.DomUtils.GetPrevSibling(oActive).getAttribute("name"))));
        oActive.swapNode(XUI.Html.DomUtils.GetPrevSibling(oActive))
    }
    bRefresh && 
        RefreshSectionHtml(oActive.parentNode.parentNode.parentNode,oActive.getAttribute("name"))
}
function MoveRight(oActive)
{
    if(oActive != null)
    {
        if(oActive.parentNode.className == "ms-crm-Tab ms-crm-Tab-Selected")
            oActive = oActive.parentNode;
        switch(oActive.className)
        {
            case "ms-crm-Tab ms-crm-Tab-Selected":
                if(XUI.Html.DomUtils.GetNextSibling(oActive))
                {
                    MoveDownAdjacentXml(GetTabNode(oActive.getAttribute("name")));
                    oActive.swapNode(XUI.Html.DomUtils.GetNextSibling(oActive))
                }
                break;
            case "cell":
            case "iframe":
                MoveRightCell(oActive);
                break
        }
    }
    else
        alert(LOCID_FORMED_MUSTSELECT)
}
function MoveRightCell(oActive)
{
    var oCell = GetCellNode(oActive.getAttribute("name")),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        bRefresh = false;
    if(XUI.Html.DomUtils.GetNextSibling(oActive) && oActive.parentNode.cells.length > 1)
    {
        if(oActive.getAttribute("name") != "")
            MoveDownAdjacentXml(GetCellNode(oActive.getAttribute("name")));
        else
            MoveDownAdjacentXml(XUI.Html.DomUtils.GetPrevSibling(GetCellNode(XUI.Html.DomUtils.GetNextSibling(oActive).getAttribute("name"))));
        oActive.swapNode(XUI.Html.DomUtils.GetNextSibling(oActive))
    }
    bRefresh && 
        RefreshSectionHtml(oActive.parentNode.parentNode.parentNode,oActive.getAttribute("name"))
}
function MoveUpAdjacentXml(oNode)
{
    var oParentNode = oNode.parentNode;
    oParentNode.insertBefore(oParentNode.removeChild(XUI.Html.DomUtils.GetPrevSibling(oNode)),XUI.Html.DomUtils.GetNextSibling(oNode))
}
function MoveDownAdjacentXml(oNode)
{
    var oParentNode = oNode.parentNode;
    oParentNode.insertBefore(oParentNode.removeChild(XUI.Html.DomUtils.GetNextSibling(oNode)),oNode)
}
function GetRowSpan(oCellNode)
{
    var iRowSpan = 1,
        rowSpan = oCellNode.getAttribute("rowspan");
    if(rowSpan != null)
        iRowSpan = parseInt(rowSpan,10);
    return iRowSpan
}
function GetColSpan(oCellNode)
{
    var iRowSpan = 1,
        rowSpan = oCellNode.getAttribute("colspan");
    if(rowSpan != null)
        iRowSpan = parseInt(rowSpan,10);
    return iRowSpan
}
function insertAfter(newElement,currentElement)
{
    var nextElement;
    if(nextElement = XUI.Html.DomUtils.GetNextSibling(currentElement))
        currentElement.parentNode.insertBefore(newElement,nextElement);
    else
        currentElement.parentNode.appendChild(newElement)
}
function DeleteEmptyRows(oRows)
{
    for(var iRows = oRows.childNodes.length,
        i = 0; i < iRows; i++)
    {
        var oRow = oRows.childNodes[i];
        if(oRow != null && oRow.childNodes.length == 2 && XUI.Xml.SelectSingleNode(oRow,"cell/control",null) == null)
        {
            oRows.removeChild(oRow);
            break
        }
    }
}
