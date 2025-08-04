
function addColumnOrGrouping(iObjectType)
{
    var oContextNode = IsNull(iObjectType) ? _oSelectedColumnOrGrouping : null;
    if(IsNull(iObjectType))
    {
        iObjectType = getSelectedObjectType();
        if(iObjectType == PROPERTY_PAGE_TYPE_GROUP && _oWizardXmlBuilder.GetGroupingCount() >= GROUPING_MAX)
        {
            iObjectType = PROPERTY_PAGE_TYPE_COLUMN;
            oContextNode = null
        }
    }
    if(IsNull(iObjectType))
        iObjectType = PROPERTY_PAGE_TYPE_COLUMN;
    var oArgs = {};
    openPropertyPage(EDIT_MODE_CREATE,iObjectType,oArgs,oContextNode)
}
function convertSpan(sItemId,sTimeInterval,iObjectType)
{
    _oSelectedColumnOrGrouping.name = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? "Grouping" : "Column";
    _oSelectedColumnOrGrouping.id = sItemId;
    var oItemLabel = XUI.Html.DomUtils.GetNextSibling(_oSelectedColumnOrGrouping);
    oItemLabel.htmlFor = sItemId;
    XUI.Html.SetText(oItemLabel,getDisplayName(XUI.Html.GetText(oItemLabel),sTimeInterval));
    _oSelectedColumnOrGrouping.parentNode.title = getSpanTooltip(iObjectType,XUI.Html.GetText(oItemLabel));
    XUI.Html.DomUtils.GetNextSibling(oItemLabel).style.display = "none"
}
function createColumnCell(oColumnSpan)
{
    var oCell = document.createElement("td");
    oCell.appendChild(oColumnSpan);
    oCell.className = "Column";
    return oCell
}
function createColumnOrGroupingSpan(iObjectType,sId,sDisplayNameBase,sDisplayName,sWidth)
{
    var sObjectTypeName = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? "Grouping" : "Column",
        sSpanHtml = formatString('<div class="ColumnOrGroupingHeader" style="width: {0}px;" title="{1}"/>',sWidth,getSpanTooltip(iObjectType,sDisplayName)),
        oSpan = document.createElement("div");
    oSpan.setAttribute("style",'"width:' + sWidth + 'px; "');
    oSpan.setAttribute("title",getSpanTooltip(iObjectType,sDisplayName));
    oSpan.innerHTML = formatString('<input type="radio" class="HiddenRadio" name="{0}" id="{1}" onclick="selectOption(this)" /><label for="{1}" basename="{2}">{3}</label><img alt="" src="/_imgs/grid/bar_up.gif" class="Sort" />',CrmEncodeDecode.CrmHtmlAttributeEncode(sObjectTypeName),CrmEncodeDecode.CrmHtmlAttributeEncode(sId),CrmEncodeDecode.CrmHtmlAttributeEncode(sDisplayNameBase),CrmEncodeDecode.CrmHtmlEncode(sDisplayName));
    oSpan.className = "ColumnOrGroupingHeader";
    return oSpan
}
function editProperties()
{
    var iObjectType = getSelectedObjectType();
    if(IsNull(iObjectType))
        return;
    var oContextNode = IsNull(iObjectType) ? _oSelectedColumnOrGrouping : null,
        oArgs = {},
        oWizardXmlNode = null,
        sItemId = _oSelectedColumnOrGrouping.id;
    if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
    {
        oWizardXmlNode = _oWizardXmlBuilder.GetGrouping(sItemId);
        oArgs.TimeInterval = oWizardXmlNode.getAttribute("Interval");
        oArgs.SortOrder = oWizardXmlNode.getAttribute("Sort")
    }
    else
    {
        oWizardXmlNode = _oWizardXmlBuilder.GetColumn(sItemId);
        oArgs.AddRawValueColumn = oWizardXmlNode.getAttribute("AddRawValueColumn")
    }
    var sAttributeAlias = oWizardXmlNode.getAttribute("Field");
    oArgs.AttributeAlias = sAttributeAlias;
    oArgs.Width = oWizardXmlNode.getAttribute("Width");
    oArgs.SummaryValue = oWizardXmlNode.getAttribute("SummaryValue");
    var oAttributeInfo = _oFetchBuilder.GetAttributeInfo(sAttributeAlias);
    if(oAttributeInfo.EntityEntityAlias)
        oArgs.Entity = oAttributeInfo.EntityEntityAlias;
    else
        oArgs.Entity = oAttributeInfo.EntityAlias;
    oArgs.Attribute = oAttributeInfo.Attribute;
    openPropertyPage(EDIT_MODE_UPDATE,iObjectType,oArgs,oContextNode)
}
function getColumnDisplayName(sColumnId)
{
    return XUI.Html.GetText(XUI.Html.DomUtils.GetNextSibling(document.getElementById(sColumnId)))
}
function getColumnIndex(oColumnOption)
{
    if(IsNull(oColumnOption))
        return null;
    for(var iPosition = null,
        oColumnCell = oColumnOption.parentNode.parentNode,
        i = 0; i < $get("Columns").childNodes.length && IsNull(iPosition); i++)
        if(XUI.Html.DomUtils.GetChildElementAt($get("Columns"),i) == oColumnCell)
            iPosition = i;
    return iPosition
}
function getDisplayName(sBaseDisplayName,sTimeInterval)
{
    if(IsNull(sTimeInterval))
        return sBaseDisplayName;
    return formatString(_saGroupingIntervalFormats[sTimeInterval],sBaseDisplayName)
}
function getGroupingUICount()
{
    for(var iMaxGroupingPosition = 0,
        i = GROUPING_MAX - 1; i >= 0; i--)
    {
        var oGroupingHeaderSpan = XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(i));
        if(oGroupingHeaderSpan.className.indexOf("ColumnOrGroupingHeader") != -1)
        {
            iMaxGroupingPosition = i;
            break
        }
    }
    return iMaxGroupingPosition + 1
}
function getGroupingIndex(oGroupingOption)
{
    if(IsNull(oGroupingOption))
        return null;
    var iPosition = 0,
        oCurrentList = oGroupingOption.parentNode.parentNode.parentNode;
    while(oCurrentList.id != "Groupings")
    {
        iPosition++;
        oCurrentList = oCurrentList.parentNode.parentNode
    }
    return iPosition
}
function getGroupingListItem(iIndex)
{
    return $get("Groupings").getElementsByTagName("LI")[iIndex]
}
function getSelectedObjectType()
{
    if(IsNull(_oSelectedColumnOrGrouping))
        return null;
    return _oSelectedColumnOrGrouping.name == "Grouping" ? PROPERTY_PAGE_TYPE_GROUP : PROPERTY_PAGE_TYPE_COLUMN
}
function getSpanTooltip(iObjectType,sDisplayName)
{
    return formatString(iObjectType == PROPERTY_PAGE_TYPE_GROUP ? LOCID_TOOLTIP_GROUPING : LOCID_TOOLTIP_COLUMN,sDisplayName)
}
function initializeColumns(oAttributeInfoCache)
{
    for(var oaColumns = _oWizardXmlBuilder.GetColumns(),
        saColumnsToRemove = [],
        i = 0; i < oaColumns.length; i++)
    {
        var oColumn = oaColumns[i],
            sAttributeAlias = oColumn.getAttribute("Field"),
            sDisplayName = oAttributeInfoCache.GetAttributeDisplayName(sAttributeAlias);
        if(!IsNull(sDisplayName))
        {
            var oNewSpan = createColumnOrGroupingSpan(PROPERTY_PAGE_TYPE_COLUMN,oColumn.getAttribute("ID"),sDisplayName,sDisplayName,oColumn.getAttribute("Width"));
            insertColumnCell(createColumnCell(oNewSpan),null)
        }
        else
        {
            saColumnsToRemove.push(oColumn.getAttribute("ID"));
            _oFetchBuilder.RemoveAttribute(sAttributeAlias);
            _oFetchBuilder.IsSortAttribute(sAttributeAlias) && 
                _oFetchBuilder.ClearSorting()
        }
    }
    for(var i = 0; i < saColumnsToRemove.length; i++)
        _oWizardXmlBuilder.RemoveColumn(saColumnsToRemove[i]);
    return saColumnsToRemove.length > 0
}
function initializeGroupings(oAttributeInfoCache)
{
    for(var oaGroupings = _oWizardXmlBuilder.GetGroupings(),
        saGroupingsToRemove = [],
        oaGroupingSpans = [],
        i = 0; i < oaGroupings.length; i++)
    {
        var oGrouping = oaGroupings[i],
            sAttributeAlias = oGrouping.getAttribute("Field"),
            sDisplayNameBase = oAttributeInfoCache.GetAttributeDisplayName(sAttributeAlias);
        if(!IsNull(sDisplayNameBase))
        {
            var sDisplayName = getDisplayName(sDisplayNameBase,oGrouping.getAttribute("Interval")),
                oNewSpan = createColumnOrGroupingSpan(PROPERTY_PAGE_TYPE_GROUP,oGrouping.getAttribute("Field"),sDisplayNameBase,sDisplayName,oGrouping.getAttribute("Width"));
            oaGroupingSpans.push(oNewSpan)
        }
        else
        {
            saGroupingsToRemove.push(sAttributeAlias);
            _oFetchBuilder.RemoveAttribute(sAttributeAlias)
        }
    }
    for(var i = 0; i < saGroupingsToRemove.length; i++)
        _oWizardXmlBuilder.RemoveGrouping(saGroupingsToRemove[i]);
    for(var i = 0; i < oaGroupingSpans.length; i++)
        insertGroupingSpan(oaGroupingSpans[i],i);
    return saGroupingsToRemove.length > 0
}
function initializePage()
{
    _iLocaleId = WizardGetProperty("Language");
    _saGroupingIntervalFormats = getGroupIntervalArray();
    _saSummaryValueFormats = getSummaryValueArray();
    _oCacheManager = new CacheManager;
    var oFetchXml;
    if(Mscrm.Utilities.isEdge())
        oFetchXml = getResultNode(WizardGetProperty("FetchXml"));
    else
        oFetchXml = WizardGetProperty("FetchXml");
    _oFetchBuilder = new FetchBuilder;
    _oFetchBuilder.LoadXml(oFetchXml);
    _oWizardXmlBuilder = new WizardXmlBuilder;
    if(Mscrm.Utilities.isEdge())
    {
        _oWizardXmlBuilder.SetGroupingXml(getResultNode(WizardGetProperty("GroupingXml")));
        _oWizardXmlBuilder.SetColumnXml(getResultNode(WizardGetProperty("ColumnXml")));
        _oWizardXmlBuilder.SetTableLayoutXml(getResultNode(WizardGetProperty("TableLayoutXml")))
    }
    else
    {
        _oWizardXmlBuilder.SetGroupingXml(WizardGetProperty("GroupingXml"));
        _oWizardXmlBuilder.SetColumnXml(WizardGetProperty("ColumnXml"));
        _oWizardXmlBuilder.SetTableLayoutXml(WizardGetProperty("TableLayoutXml"))
    }
    if(_oWizardXmlBuilder.GetColumnCount() > 0 || _oWizardXmlBuilder.GetGroupingCount() > 0)
    {
        var oAttributeInfoCache = new AttributeInfoCache,
            bDisplayNamesFound = oAttributeInfoCache.Initialize(XUI.Xml.XMLSerializer.serializeToString(_oFetchBuilder.GetXml()),_iLocaleId);
        if(bDisplayNamesFound)
        {
            var bGroupingsRemoved = initializeGroupings(oAttributeInfoCache),
                bColumnsRemoved = initializeColumns(oAttributeInfoCache);
            (bGroupingsRemoved || bColumnsRemoved) && 
                $find("notifications").AddNotification("fieldsRemoved",Mscrm.Severity.SEVERITYWARNING,"",LOCID_FIELDS_REMOVED);
            updateSortingUI()
        }
    }
    updateGhostGroup()
}
function insertColumnCell(oNewColumn,oReferenceColumn)
{
    if(IsNull(oReferenceColumn))
        $get("Columns").insertBefore(oNewColumn,$get("GhostColumn"));
    else
        oReferenceColumn.parentNode.insertBefore(oNewColumn,oReferenceColumn.nextSibling)
}
function insertGroupingSpan(oNewGroupingSpan,iPosition)
{
    var iGroupingCount = getGroupingUICount();
    if(iPosition < iGroupingCount)
        for(var i = iGroupingCount - 1; i >= iPosition; i--)
            swap(XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(i)),XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(i + 1)));
    var oGroupingListItem = getGroupingListItem(iPosition);
    oGroupingListItem.replaceChild(oNewGroupingSpan,XUI.Html.DomUtils.GetFirstChild(oGroupingListItem));
    UpdateColumnContainerHeight()
}
function move(iDirection)
{
    var iObjectType = getSelectedObjectType();
    if(IsNull(iObjectType))
        return;
    if(iObjectType == PROPERTY_PAGE_TYPE_GROUP && (iDirection == DIRECTION_LEFT || iDirection == DIRECTION_RIGHT) || iObjectType == PROPERTY_PAGE_TYPE_COLUMN && iDirection == DIRECTION_DOWN)
        return;
    var iPosition = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? getGroupingIndex(_oSelectedColumnOrGrouping) : getColumnIndex(_oSelectedColumnOrGrouping),
        sItemId = _oSelectedColumnOrGrouping.id;
    switch(iDirection)
    {
        case DIRECTION_UP:
            if(iObjectType == PROPERTY_PAGE_TYPE_COLUMN)
            {
                var iGroupingCount = _oWizardXmlBuilder.GetGroupingCount();
                if(iGroupingCount < GROUPING_MAX)
                {
                    var oColumn = _oWizardXmlBuilder.GetColumn(sItemId),
                        sAttributeAlias = oColumn.getAttribute("Field"),
                        oAttributeInfo = _oFetchBuilder.GetAttributeInfo(sAttributeAlias),
                        sTimeInterval = _oCacheManager.GetFieldDataType(oAttributeInfo.Attribute,oAttributeInfo.Entity,_iLocaleId) == "datetime" ? GROUPING_DEFAULT_TIME_INTERVAL : null;
                    _oWizardXmlBuilder.AddGrouping(sAttributeAlias,GROUPING_DEFAULT_SORT_ORDER,oColumn.getAttribute("Width"),sTimeInterval,GROUPING_DEFAULT_SUMMARY_VALUE,null);
                    _oWizardXmlBuilder.RemoveColumn(sItemId);
                    _oFetchBuilder.IsSortAttribute(sAttributeAlias) && 
                        _oFetchBuilder.ClearSorting();
                    var oColumnSpan = _oSelectedColumnOrGrouping.parentNode;
                    $get("Columns").removeChild(oColumnSpan.parentNode);
                    convertSpan(sAttributeAlias,sTimeInterval,PROPERTY_PAGE_TYPE_GROUP);
                    insertGroupingSpan(oColumnSpan,iGroupingCount);
                    iGroupingCount + 1 < GROUPING_MAX && 
                        updateGhostGroup()
                }
            }
            else
                if(iPosition > 0)
                {
                    swap(_oSelectedColumnOrGrouping.parentNode,XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(iPosition - 1)));
                    _oWizardXmlBuilder.MoveGrouping(sItemId,iDirection)
                }
            break;
        case DIRECTION_DOWN:
            if(iPosition < _oWizardXmlBuilder.GetGroupingCount() - 1)
            {
                swap(_oSelectedColumnOrGrouping.parentNode,XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(iPosition + 1)));
                _oWizardXmlBuilder.MoveGrouping(sItemId,iDirection)
            }
            else
            {
                var oGrouping = _oWizardXmlBuilder.GetGrouping(sItemId),
                    sColumnId = _oWizardXmlBuilder.AddColumn(sItemId,oGrouping.getAttribute("Width"),COLUMN_DEFAULT_SUMMARY_VALUE,0);
                _oWizardXmlBuilder.RemoveGrouping(sItemId);
                var oGroupingSpan = _oSelectedColumnOrGrouping.parentNode;
                removeGroupingSpan(oGroupingSpan);
                convertSpan(sColumnId,null,PROPERTY_PAGE_TYPE_COLUMN);
                var oColumnCell = createColumnCell(oGroupingSpan);
                $get("Columns").insertBefore(oColumnCell,XUI.Html.DomUtils.GetFirstChild($get("Columns")));
                _oWizardXmlBuilder.GetGroupingCount() == GROUPING_MAX - 1 && 
                    updateGhostGroup()
            }
            break;
        case DIRECTION_LEFT:
        case DIRECTION_RIGHT:
            if(iDirection == DIRECTION_LEFT && iPosition > 0 || iDirection == DIRECTION_RIGHT && iPosition < _oWizardXmlBuilder.GetColumnCount() - 1)
            {
                var oColumnCell = _oSelectedColumnOrGrouping.parentNode.parentNode;
                if(iDirection == DIRECTION_LEFT)
                    swap(XUI.Html.DomUtils.GetPrevSibling(oColumnCell),oColumnCell);
                else
                    swap(oColumnCell,XUI.Html.DomUtils.GetNextSibling(oColumnCell));
                _oWizardXmlBuilder.MoveColumn(sItemId,iDirection)
            }
            break
    }
    _oSelectedColumnOrGrouping.checked = true
}
function moveNext()
{
    if(_oWizardXmlBuilder.GetColumnCount() == 0)
    {
        alert(LOCID_NO_COLUMNS_SELECTED);
        return
    }
    if(_oWizardXmlBuilder.GetTableWidth() > PAGE_WIDTH_PIXELS && !confirm(LOCID_PAGEBREAK_WARNING))
        return;
    WizardSetProperty("FetchXml",_oFetchBuilder.GetXml());
    WizardSetProperty("GroupingXml",_oWizardXmlBuilder.GetGroupingXml());
    WizardSetProperty("ColumnXml",_oWizardXmlBuilder.GetColumnXml());
    WizardSetProperty("TableLayoutXml",_oWizardXmlBuilder.GetTableLayoutXml());
    WizardNavigate(_WizardNavigateEnum.NEXT)
}
function openPropertyPage(iMode,iType,oArgs,oContextNode)
{
    var oStringBuilder = new StringBuilder;
    oStringBuilder.Append("/CRMReports/AdHocWizard/PropertyPageDialog.aspx?");
    oStringBuilder.Append("lcid=");
    oStringBuilder.Append(CrmEncodeDecode.CrmUrlEncode(_iLocaleId));
    oStringBuilder.Append("&primary=");
    oStringBuilder.Append(CrmEncodeDecode.CrmUrlEncode(_oFetchBuilder.GetPrimaryEntityName()));
    var sSecondaryEntityName = _oFetchBuilder.GetSecondaryEntityName();
    if(!IsNull(sSecondaryEntityName))
    {
        oStringBuilder.Append("&secondary=");
        oStringBuilder.Append(CrmEncodeDecode.CrmUrlEncode(sSecondaryEntityName))
    }
    oStringBuilder.Append("&mode=");
    oStringBuilder.Append(CrmEncodeDecode.CrmUrlEncode(iMode));
    oStringBuilder.Append("&type=");
    oStringBuilder.Append(CrmEncodeDecode.CrmUrlEncode(iType));
    if(IsNull(oArgs))
        oArgs = {};
    oArgs.Cache = _oCacheManager;
    oArgs.EditMode = iMode;
    oArgs.ObjectType = iType;
    var oaFieldExclusionList = _oFetchBuilder.GetAttributeInfos(_oWizardXmlBuilder.GetAttributeAliases(iType));
    if(iMode == EDIT_MODE_UPDATE)
        oaFieldExclusionList[IsNull(oArgs.Entity) ? "" : oArgs.Entity][oArgs.Attribute] = null;
    oArgs.FieldExclusionList = oaFieldExclusionList;
    var dlgHeight = isOutlookHostedWindow() ? 440 : 410,
        oUrl = Mscrm.CrmUri.create(oStringBuilder.ToString()),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = dlgHeight;
    dialogOptions.width = 500;
    var params = [iMode,iType,oContextNode],
        openPropertyCallBackObj = Mscrm.Utilities.createCallbackFunctionForXrmDialog(callBackforOpenpropertyPage,params);
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs,null,openPropertyCallBackObj)
}
function callBackforOpenpropertyPage(oResult,iMode,iObjectType,oContextNode)
{
    if(IsNull(oResult) || IsNull(oResult.Entity))
        return;
    if(iMode == EDIT_MODE_UPDATE)
    {
        if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
            _oWizardXmlBuilder.UpdateGrouping(_oSelectedColumnOrGrouping.id,oResult.SortOrder,oResult.Width,oResult.TimeInterval,oResult.SummaryValue);
        else
            _oWizardXmlBuilder.UpdateColumn(_oSelectedColumnOrGrouping.id,oResult.Width,oResult.SummaryValue,oResult.AddRawValueColumn);
        updateColumnOrGroupingSpan(_oSelectedColumnOrGrouping.parentNode,getDisplayName(oResult.DisplayName,oResult.TimeInterval),oResult.Width);
        return
    }
    if(iMode == EDIT_MODE_CREATE)
    {
        !IsNull(oResult.Entity.ParentEntity) && 
            _oFetchBuilder.AddLinkEntity(oResult.Entity.Name,oResult.Entity.Alias,oResult.Entity.From,oResult.Entity.To,oResult.Entity.ParentEntity,oResult.Entity.EntityAlias);
        var sAttributeAlias = _oFetchBuilder.AddAttribute(oResult.Entity.Alias,oResult.Attribute),
            sItemId = sAttributeAlias,
            iPosition = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? getGroupingIndex(oContextNode) : getColumnIndex(oContextNode);
        if(!IsNull(iPosition))
            iPosition++;
        if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
            _oWizardXmlBuilder.AddGrouping(sAttributeAlias,oResult.SortOrder,oResult.Width,oResult.TimeInterval,oResult.SummaryValue,iPosition);
        else
            sItemId = _oWizardXmlBuilder.AddColumn(sAttributeAlias,oResult.Width,oResult.SummaryValue,iPosition,oResult.AddRawValueColumn);
        var sDisplayName = getDisplayName(oResult.DisplayName,oResult.TimeInterval),
            oNewSpan = createColumnOrGroupingSpan(iObjectType,sItemId,oResult.DisplayName,sDisplayName,oResult.Width);
        if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
        {
            var iPosition = IsNull(oContextNode) ? _oWizardXmlBuilder.GetGroupingCount() - 1 : getGroupingIndex(oContextNode) + 1;
            insertGroupingSpan(oNewSpan,iPosition);
            selectOption(XUI.Html.DomUtils.GetFirstChild(oNewSpan));
            updateGhostGroup()
        }
        else
        {
            var oSelectedItemCell = IsNull(oContextNode) ? null : oContextNode.parentNode.parentNode,
                oNewColumnCell = createColumnCell(oNewSpan);
            insertColumnCell(oNewColumnCell,oSelectedItemCell);
            selectOption(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oNewColumnCell)))
        }
    }
    else
    {
        if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
            _oWizardXmlBuilder.UpdateGrouping(_oSelectedColumnOrGrouping.id,oResult.SortOrder,oResult.Width,oResult.TimeInterval,oResult.SummaryValue);
        else
            _oWizardXmlBuilder.UpdateColumn(_oSelectedColumnOrGrouping.id,oResult.Width,oResult.SummaryValue,oResult.AddRawValueColumn);
        updateColumnOrGroupingSpan(_oSelectedColumnOrGrouping.parentNode,getDisplayName(oResult.DisplayName,oResult.TimeInterval),oResult.Width)
    }
}
function removeColumnOrGrouping()
{
    var iObjectType = getSelectedObjectType();
    if(IsNull(iObjectType))
        return;
    if(iObjectType == PROPERTY_PAGE_TYPE_COLUMN && reportWizardHasXmlProperty("ColumnXml") && !confirm(LOCID_REMOVE_COLUMN_WARNING))
        return;
    var sItemId = _oSelectedColumnOrGrouping.id,
        sAttributeAlias = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? sItemId : _oWizardXmlBuilder.GetColumn(sItemId).getAttribute("Field"),
        bRemoveAttribute = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? _oWizardXmlBuilder.RemoveGrouping(sItemId) : _oWizardXmlBuilder.RemoveColumn(sItemId);
    iObjectType == PROPERTY_PAGE_TYPE_COLUMN && _oFetchBuilder.IsSortAttribute(sAttributeAlias) && 
        _oFetchBuilder.ClearSorting();
    bRemoveAttribute && 
        _oFetchBuilder.RemoveAttribute(sAttributeAlias);
    if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
    {
        removeGroupingSpan(_oSelectedColumnOrGrouping.parentNode);
        _oWizardXmlBuilder.GetGroupingCount() == GROUPING_MAX - 1 && 
            updateGhostGroup()
    }
    else
        $get("Columns").removeChild(_oSelectedColumnOrGrouping.parentNode.parentNode);
    _oSelectedColumnOrGrouping = null
}
function removeGroupingSpan(oGroupingSpan)
{
    var iPosition = getGroupingIndex(XUI.Html.DomUtils.GetFirstChild(oGroupingSpan)),
        oBlankSpan = document.createElement("div");
    oGroupingSpan.parentNode.replaceChild(oBlankSpan,oGroupingSpan);
    oBlankSpan.className = "EmptyGhostHeader";
    for(var i = iPosition + 1; i < GROUPING_MAX; i++)
    {
        var oGroupingSpan = XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(i)),
            oSwapSpan = XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(i - 1));
        swap(oGroupingSpan,oSwapSpan)
    }
}
function selectOption(oColumnOrGrouping)
{
    if(!IsNull(_oSelectedColumnOrGrouping))
    {
        _oSelectedColumnOrGrouping.checked = false;
        _oSelectedColumnOrGrouping.parentNode.className = "ColumnOrGroupingHeader"
    }
    oColumnOrGrouping.checked = true;
    oColumnOrGrouping.parentNode.className = "ColumnOrGroupingHeader SelectedColumnOrGroupingHeader";
    _oSelectedColumnOrGrouping = oColumnOrGrouping
}
function setFilter()
{
    var iObjectType = _oWizardXmlBuilder.GetGroupingCount() > 0 ? PROPERTY_PAGE_TYPE_GROUP : PROPERTY_PAGE_TYPE_COLUMN,
        oaFilterColumns = [];
    if(iObjectType == PROPERTY_PAGE_TYPE_GROUP)
    {
        for(var oaSummaryValueColumns = _oWizardXmlBuilder.GetColumnsWithSummaryValues(),
            i = 0; i < oaSummaryValueColumns.length; i++)
        {
            var oSummaryValueColumn = oaSummaryValueColumns[i],
                oFilterColumn = {};
            oFilterColumn.ColumnId = oSummaryValueColumn.getAttribute("ID");
            var sSummaryValueFormat = _saSummaryValueFormats[oSummaryValueColumn.getAttribute("SummaryValue")];
            oFilterColumn.DisplayName = formatString(sSummaryValueFormat,getColumnDisplayName(oFilterColumn.ColumnId));
            oaFilterColumns.push(oFilterColumn)
        }
        if(oaFilterColumns.length == 0)
        {
            alert(LOCID_NO_FILTERABLE_GROUPING);
            return
        }
    }
    else
    {
        for(var oaColumns = _oWizardXmlBuilder.GetColumns(),
            i = 0; i < oaColumns.length; i++)
        {
            var oColumn = oaColumns[i],
                oAttributeInfo = _oFetchBuilder.GetAttributeInfo(oColumn.getAttribute("Field"));
            if(isNumericDataType(_oCacheManager.GetFieldDataType(oAttributeInfo.Attribute,oAttributeInfo.Entity,_iLocaleId)))
            {
                var oFilterColumn = {};
                oFilterColumn.ColumnId = oColumn.getAttribute("ID");
                oFilterColumn.DisplayName = getColumnDisplayName(oFilterColumn.ColumnId);
                oaFilterColumns.push(oFilterColumn)
            }
        }
        if(oaFilterColumns.length == 0)
        {
            alert(LOCID_NO_FILTERABLE_COLUMN);
            return
        }
    }
    var oArgs = {};
    oArgs.FilterColumns = oaFilterColumns;
    oArgs.ObjectType = iObjectType;
    oArgs.ScopeDisplayName = iObjectType == PROPERTY_PAGE_TYPE_GROUP ? XUI.Html.GetText(XUI.Html.DomUtils.GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(getGroupingListItem(0)),1)) : null;
    var oFilterNode = _oWizardXmlBuilder.GetTableFilterNode(),
        bFilterExists = !IsNull(oFilterNode);
    oArgs.FilterColumn = bFilterExists ? oFilterNode.getAttribute("Column") : null;
    oArgs.FilterOperator = bFilterExists ? oFilterNode.getAttribute("Operator") : null;
    oArgs.FilterValue = bFilterExists ? oFilterNode.getAttribute("FilterValue") : null;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 350;
    dialogOptions.width = 571;
    var oUrl = Mscrm.CrmUri.create(formatString("/CRMReports/AdHocWizard/FilterDialog.aspx?lcid={0}&primary={1}&type={2}",CrmEncodeDecode.CrmUrlEncode(_iLocaleId),CrmEncodeDecode.CrmUrlEncode(_oFetchBuilder.GetPrimaryEntityName()),CrmEncodeDecode.CrmUrlEncode(iObjectType)));
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,oArgs,null,setFilterCallBack)
}
function setFilterCallBack(aFilter)
{
    if(IsNull(aFilter))
        return;
    if(IsNull(aFilter[1]))
        _oWizardXmlBuilder.ClearTableFilter();
    else
        _oWizardXmlBuilder.SetTableFilter(aFilter[0],aFilter[1],aFilter[2])
}
function setSort()
{
    for(var saAttributeAliases = _oFetchBuilder.GetPrimaryEntityAttributeAliases(),
        oaSortColumns = [],
        i = 0; i < saAttributeAliases.length; i++)
    {
        var sAttributeAlias = saAttributeAliases[i],
            oColumn = _oWizardXmlBuilder.GetColumnByAttributeAlias(sAttributeAlias);
        if(!IsNull(oColumn))
        {
            var oSortColumn = {};
            oSortColumn.AttributeAlias = sAttributeAlias;
            oSortColumn.DisplayName = getColumnDisplayName(oColumn.getAttribute("ID"));
            oaSortColumns.push(oSortColumn)
        }
    }
    if(oaSortColumns.length == 0)
    {
        alert(LOCID_NO_SORTABLE_COLUMNS);
        return
    }
    var oArgs = {};
    oArgs.SortColumns = oaSortColumns;
    var oSortNode = _oFetchBuilder.GetSortNode(),
        bIsSorted = !IsNull(oSortNode);
    oArgs.SortAttribute = bIsSorted ? oSortNode.getAttribute("attribute") : null;
    oArgs.SortDescending = bIsSorted ? oSortNode.getAttribute("descending") == "true" : false;
    var executeCallBack = function(aSetSort)
        {
            if(!IsNull(aSetSort))
            {
                if(IsNull(aSetSort[1]))
                    _oFetchBuilder.ClearSorting();
                else
                    _oFetchBuilder.SetSortAttribute(aSetSort[1],aSetSort[0] ? "true" : "false");
                updateSortingUI()
            }
        },
        options = new Xrm.DialogOptions;
    options.width = 420;
    options.height = 280;
    var url = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/SetSortDialog.aspx");
    Xrm.Internal.openDialog(url.toString(),options,oArgs,null,executeCallBack)
}
function swap(oNode1,oNode2)
{
    var oParent1 = oNode1.parentNode,
        oParent2 = oNode2.parentNode,
        oSibling = oNode2.nextSibling;
    if(oSibling === oNode1)
        oSibling = oSibling.nextSibling;
    oParent1.replaceChild(oNode2,oNode1);
    if(oSibling)
        oParent2.insertBefore(oNode1,oSibling);
    else
        oParent2.appendChild(oNode1);
    return true
}
function updateColumnOrGroupingSpan(oSpan,sDisplayName,sWidth)
{
    oSpan.style.width = formatString("{0}px",sWidth);
    XUI.Html.SetText(XUI.Html.DomUtils.GetChildElementAt(oSpan,1),sDisplayName);
    oSpan.title = getSpanTooltip(getSelectedObjectType(),sDisplayName)
}
function updateGhostGroup()
{
    var iGroupingCount = _oWizardXmlBuilder.GetGroupingCount();
    if(iGroupingCount < GROUPING_MAX)
    {
        var oGhostSpan = document.createElement("div");
        oGhostSpan.setAttribute("class","GhostHeader");
        oGhostSpan.innerHTML = formatString('<a href="javascript:addColumnOrGrouping(PROPERTY_PAGE_TYPE_GROUP)" title="{0}" id="GhostGroup">{1}</a>',CrmEncodeDecode.CrmHtmlAttributeEncode(LOCID_GHOST_GROUPING),CrmEncodeDecode.CrmHtmlEncode(LOCID_GHOST_GROUPING));
        insertGroupingSpan(oGhostSpan,iGroupingCount)
    }
}
function updateSortingUI()
{
    var oSortNode = _oFetchBuilder.GetSortNode(),
        bDescending = false,
        sSortColumnId = null;
    if(!IsNull(oSortNode))
    {
        bDescending = oSortNode.getAttribute("descending") == "true";
        sSortColumnId = _oWizardXmlBuilder.GetColumnByAttributeAlias(oSortNode.getAttribute("attribute")).getAttribute("ID")
    }
    XUI.Html.DomUtils.ForEachChild($get("Columns"),Function.createDelegate(this,function(child)
    {
        if(child.className == "GhostHeader")
            return true;
        var oColumnSpan = XUI.Html.DomUtils.GetFirstChild(child),
            oSortImage = XUI.Html.DomUtils.GetChildElementAt(oColumnSpan,2);
        if(XUI.Html.DomUtils.GetFirstChild(oColumnSpan).id == sSortColumnId)
        {
            oSortImage.alt = bDescending ? LOCID_ALT_COLUMNSORTORDER_DOWN : LOCID_ALT_COLUMNSORTORDER_UP;
            oSortImage.style.display = "inline";
            oSortImage.style.filter = bDescending ? "flipv()" : ""
        }
        else
        {
            oSortImage.style.display = "none";
            oSortImage.alt = ""
        }
        return false
    }))
}
