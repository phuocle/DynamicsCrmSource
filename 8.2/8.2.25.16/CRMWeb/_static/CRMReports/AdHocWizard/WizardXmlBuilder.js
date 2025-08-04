
function WizardXmlBuilder()
{
    this.AddColumn = addColumn;
    this.AddGrouping = addGrouping;
    this.ClearTableFilter = clearTableFilter;
    this.GetAttributeAliases = getAttributeAliases;
    this.GetColumn = getColumn;
    this.GetColumnByAttributeAlias = getColumnByAttributeAlias;
    this.GetColumnCount = getColumnCount;
    this.GetColumns = getColumns;
    this.GetColumnsWithSummaryValues = getColumnsWithSummaryValues;
    this.GetColumnXml = getColumnXml;
    this.GetGroupingCount = getGroupingCount;
    this.GetGrouping = getGrouping;
    this.GetGroupings = getGroupings;
    this.GetGroupingXml = getGroupingXml;
    this.GetTableFilterNode = getTableFilterNode;
    this.GetTableIsDrillthrough = getTableIsDrillthrough;
    this.GetTableLayoutXml = getTableLayoutXml;
    this.GetTableWidth = getTableWidth;
    this.MoveColumn = moveColumn;
    this.MoveGrouping = moveGrouping;
    this.RemoveColumn = removeColumn;
    this.RemoveGrouping = removeGrouping;
    this.SetColumnXml = setColumnXml;
    this.SetGroupingXml = setGroupingXml;
    this.SetTableLayoutXml = setTableLayoutXml;
    this.SetTableFilter = setTableFilter;
    this.SetTableIsDrillthrough = setTableIsDrillthrough;
    this.UpdateColumn = updateColumn;
    this.UpdateGrouping = updateGrouping;
    var _oColumnXml = null,
        _oGroupingXml = null,
        _oTableLayoutXml = null;
    function addAttributeAliases(saAliases,oaNodeList)
    {
        for(var i = 0; i < oaNodeList.length; i++)
            saAliases.push(oaNodeList[i].getAttribute("Field"))
    }
    function addColumn(sAttributeAlias,sWidth,sSummaryValue,iPosition,bAddRawValueColumn)
    {
        var sColumnId = createColumnId(sAttributeAlias),
            oColumnNode = _oColumnXml.createElement("Column");
        oColumnNode.setAttribute("ID",sColumnId);
        oColumnNode.setAttribute("Field",sAttributeAlias);
        oColumnNode.setAttribute("Width",sWidth);
        !IsNull(sSummaryValue) && sSummaryValue.length > 0 && 
            oColumnNode.setAttribute("SummaryValue",sSummaryValue);
        !IsNull(bAddRawValueColumn) && bAddRawValueColumn && 
            oColumnNode.setAttribute("AddRawValueColumn","true");
        insertNode(oColumnNode,getColumnsRoot(),iPosition);
        return sColumnId
    }
    function addGrouping(sAttributeAlias,sSortOrder,sWidth,sTimeInterval,sSummaryValue,iPosition)
    {
        var oGroupingNode = _oGroupingXml.createElement("Grouping");
        oGroupingNode.setAttribute("Field",sAttributeAlias);
        oGroupingNode.setAttribute("Sort",sSortOrder);
        oGroupingNode.setAttribute("Width",sWidth);
        !IsNull(sTimeInterval) && sTimeInterval.length > 0 && 
            oGroupingNode.setAttribute("Interval",sTimeInterval);
        !IsNull(sSummaryValue) && sSummaryValue.length > 0 && 
            oGroupingNode.setAttribute("SummaryValue",sSummaryValue);
        insertNode(oGroupingNode,getGroupingsRoot(),iPosition)
    }
    function clearTableFilter()
    {
        var oTableFilterNode = getTableFilterNode();
        !IsNull(oTableFilterNode) && 
            oTableFilterNode.parentNode.removeChild(oTableFilterNode)
    }
    function createColumnId(sAttributeAlias)
    {
        var iSuffix = 0,
            sColumnId = sAttributeAlias + iSuffix;
        while(!IsNull(getColumn(sColumnId)))
        {
            iSuffix++;
            sColumnId = sAttributeAlias + iSuffix
        }
        return sColumnId
    }
    function getAttributeAliases(iType)
    {
        var saAliases = [];
        if(iType == PROPERTY_PAGE_TYPE_GROUP)
            addAttributeAliases(saAliases,getGroupingsRoot().childNodes);
        else
            addAttributeAliases(saAliases,getColumnsRoot().childNodes);
        return saAliases
    }
    function getColumn(sColumnId)
    {
        var ColumnsRoot = getColumnsRoot();
        return XUI.Xml.SelectSingleNode(ColumnsRoot,formatString("*[@ID = '{0}']",sColumnId),null)
    }
    function getColumnByAttributeAlias(sAttributeAlias)
    {
        var ColumnsRoot = getColumnsRoot();
        return XUI.Xml.SelectSingleNode(ColumnsRoot,formatString("Column[@Field = '{0}']",sAttributeAlias),null)
    }
    function getColumnCount()
    {
        return getColumns().length
    }
    function getColumns()
    {
        return getColumnsRoot().childNodes
    }
    function getColumnsRoot()
    {
        return XUI.Xml.SelectSingleNode(_oColumnXml,"/Columns",null)
    }
    function getColumnsWithSummaryValues()
    {
        return XUI.Xml.SelectNodes(getColumnsRoot(),"*[@SummaryValue]",null)
    }
    function getColumnXml()
    {
        return _oColumnXml
    }
    function getDependencyCount(sAttributeAlias)
    {
        for(var iCount = 0,
            oaGroupingNodes = XUI.Xml.SelectNodes(_oGroupingXml,"/Groupings/Grouping",null),
            i = 0; i < oaGroupingNodes.length; i++)
            if(oaGroupingNodes[i].getAttribute("Field") == sAttributeAlias)
                iCount++;
        for(var oaColumnNodes = XUI.Xml.SelectNodes(_oColumnXml,"/Columns/Column",null),
            i = 0; i < oaColumnNodes.length; i++)
            if(oaColumnNodes[i].getAttribute("Field") == sAttributeAlias)
                iCount++;
        return iCount
    }
    function getGrouping(sAttributeAlias)
    {
        var GroupingsRoot = getGroupingsRoot();
        return XUI.Xml.SelectSingleNode(GroupingsRoot,formatString("Grouping[@Field = '{0}']",sAttributeAlias),null)
    }
    function getGroupingCount()
    {
        return getGroupings().length
    }
    function getGroupings()
    {
        return getGroupingsRoot().childNodes
    }
    function getGroupingsRoot()
    {
        return XUI.Xml.SelectSingleNode(_oGroupingXml,"/Groupings",null)
    }
    function getGroupingXml()
    {
        return _oGroupingXml
    }
    function getTableFilterNode()
    {
        var TableLayoutRoot = getTableLayoutRoot();
        return XUI.Xml.SelectSingleNode(TableLayoutRoot,"Filter",null)
    }
    function getTableLayoutXml()
    {
        return _oTableLayoutXml
    }
    function getPositionIndex(oNode,oaNodeList)
    {
        for(var iPosition = null,
            i = 0; i < oaNodeList.length && IsNull(iPosition); i++)
            if(oaNodeList[i] == oNode)
                iPosition = i;
        return iPosition
    }
    function getTableIsDrillthrough()
    {
        return getTableLayoutRoot().getAttribute("Display") == "Drillthrough"
    }
    function getTableLayoutRoot()
    {
        return XUI.Xml.SelectSingleNode(_oTableLayoutXml,"/TableLayout",null)
    }
    function getTableWidth()
    {
        var iGroupingsWidth = getTotalWidth(getGroupings()),
            iColumnsWidth = getTotalWidth(getColumns());
        return iGroupingsWidth + iColumnsWidth
    }
    function getTotalWidth(oaNodes)
    {
        for(var iWidth = 0,
            i = 0; i < oaNodes.length; i++)
            iWidth += parseInt(oaNodes[i].getAttribute("Width"),10);
        return iWidth
    }
    function insertNode(oNode,oParentNode,iPosition)
    {
        if(IsNull(iPosition) || iPosition == oParentNode.childNodes.length)
            oParentNode.appendChild(oNode);
        else
            oParentNode.insertBefore(oNode,oParentNode.childNodes[iPosition])
    }
    function isTableFilterColumn(sColumnId)
    {
        var oFilterNode = getTableFilterNode();
        return !IsNull(oFilterNode) && oFilterNode.getAttribute("Column") == sColumnId
    }
    function moveColumn(sColumnId,iDirection)
    {
        (iDirection == DIRECTION_LEFT || iDirection == DIRECTION_RIGHT) && 
            moveNode(getColumn(sColumnId),getColumnsRoot(),iDirection)
    }
    function moveGrouping(sAttributeAlias,iDirection)
    {
        (iDirection == DIRECTION_UP || iDirection == DIRECTION_DOWN) && 
            moveNode(getGrouping(sAttributeAlias),getGroupingsRoot(),iDirection)
    }
    function moveNode(oNode,oParentNode,iDirection)
    {
        var iPosition = getPositionIndex(oNode,oParentNode.childNodes),
            iNewPosition = null;
        switch(iDirection)
        {
            case DIRECTION_UP:
            case DIRECTION_LEFT:
                iNewPosition = iPosition == 0 ? iPosition : iPosition - 1;
                break;
            case DIRECTION_DOWN:
            case DIRECTION_RIGHT:
                iNewPosition = iPosition == oParentNode.childNodes.length - 1 ? iPosition : iPosition + 1;
                break
        }
        if(IsNull(iNewPosition) || iNewPosition == iPosition)
            return;
        oParentNode.removeChild(oNode);
        insertNode(oNode,oParentNode,iNewPosition)
    }
    function removeColumn(sColumnId)
    {
        var oColumn = getColumn(sColumnId),
            sAttributeAlias = oColumn.getAttribute("Field");
        oColumn.parentNode.removeChild(oColumn);
        isTableFilterColumn(sColumnId) && 
            clearTableFilter();
        return getDependencyCount(sAttributeAlias) == 0
    }
    function removeGrouping(sAttributeAlias)
    {
        var oGrouping = getGrouping(sAttributeAlias);
        oGrouping.parentNode.removeChild(oGrouping);
        getGroupingCount() == 0 && !IsNull(getTableFilterNode()) && 
            clearTableFilter();
        return getDependencyCount(sAttributeAlias) == 0
    }
    function setColumnXml(oColumnXml)
    {
        _oColumnXml = IsNull(oColumnXml) ? XUI.Xml.LoadXml("<Columns />") : oColumnXml
    }
    function setGroupingXml(oGroupingXml)
    {
        _oGroupingXml = IsNull(oGroupingXml) ? XUI.Xml.LoadXml("<Groupings />") : oGroupingXml
    }
    function setTableFilter(sColumnId,sFilterOperator,sFilterValue)
    {
        var oFilterNode = getTableFilterNode();
        if(IsNull(oFilterNode))
        {
            oFilterNode = _oTableLayoutXml.createElement("Filter");
            getTableLayoutRoot().appendChild(oFilterNode)
        }
        oFilterNode.setAttribute("Column",sColumnId);
        oFilterNode.setAttribute("Operator",sFilterOperator);
        oFilterNode.setAttribute("FilterValue",sFilterValue)
    }
    function setTableIsDrillthrough(bValue)
    {
        getTableLayoutRoot().setAttribute("Display",bValue ? "Drillthrough" : "Normal")
    }
    function setTableLayoutXml(oTableLayoutXml)
    {
        _oTableLayoutXml = IsNull(oTableLayoutXml) ? XUI.Xml.LoadXml('<TableLayout Display="Normal" />') : oTableLayoutXml
    }
    function updateColumn(sColumnId,sWidth,sSummaryValue,bAddRawValueColumn)
    {
        var oColumn = getColumn(sColumnId);
        oColumn.setAttribute("Width",sWidth);
        if(IsNull(sSummaryValue))
        {
            oColumn.removeAttribute("SummaryValue");
            getGroupingCount() > 0 && isTableFilterColumn(sColumnId) && 
                clearTableFilter()
        }
        else
            oColumn.setAttribute("SummaryValue",sSummaryValue);
        if(IsNull(bAddRawValueColumn) || !bAddRawValueColumn)
            oColumn.removeAttribute("AddRawValueColumn");
        else
            oColumn.setAttribute("AddRawValueColumn","true")
    }
    function updateGrouping(sAttributeAlias,sSortOrder,sWidth,sTimeInterval,sSummaryValue)
    {
        var oGrouping = getGrouping(sAttributeAlias);
        oGrouping.setAttribute("Sort",sSortOrder);
        oGrouping.setAttribute("Width",sWidth);
        !IsNull(sTimeInterval) && 
            oGrouping.setAttribute("Interval",sTimeInterval);
        if(IsNull(sSummaryValue))
            oGrouping.removeAttribute("SummaryValue");
        else
            oGrouping.setAttribute("SummaryValue",sSummaryValue)
    }
}
