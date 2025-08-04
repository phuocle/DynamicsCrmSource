
var selectedRow,
    selectedBlock,
    oLastOverlappedBlock,
    oLastOverlappedBlockHeight = 0,
    oGanttContainer = null,
    oSeparator = null,
    oGlobalOverlay = null,
    bScrollSync = false,
    bChangingGrid = false,
    bChangingGuides = false,
    oHeaderRowPadding = null,
    _dateRangeEnd = null,
    _dateRangeStart = null,
    MaxAppointmentsPerToolTip = 12;
function GanttJsWindowOnLoad()
{
    var cacheParams = {},
        uri = Mscrm.CrmUri.create(window.location.toString());
    uri.removeQueryParameter("pagingCookie");
    uri.removeQueryParameter("selBlockID");
    uri.removeQueryParameter("selRowID");
    uri.removeQueryParameter("viewID");
    uri.removeQueryParameter("viewType");
    cacheParams["updateQueryString"] = uri.get_queryString();
    var pageManager = top.Mscrm.PageManager.get_instance();
    pageManager.raiseEvent(Mscrm.ScriptEvents.UpdatePageInformation,cacheParams);
    _dateRangeStart = Mscrm.FormControlInputBehavior.GetBehavior("DateRangeStart");
    _dateRangeEnd = Mscrm.FormControlInputBehavior.GetBehavior("DateRangeEnd");
    $addHandler(window,"resize",ResizeContent);
    ConfigureGrid();
    oGanttContainer = $get("crmGanttTd");
    oSeparator = $get("separator");
    _dateRangeEnd.add_change(EndDateChanged);
    _dateRangeStart.add_change(StartDateChanged);
    ResizeGuides($get("ganttContent"));
    FixGanttEdgeForIE7();
    UpdateConflictButtonState();
    oHeaderRowPadding = XUI.Html.DomUtils.GetLastChild($get("ganttHeaderRowTop"));
    if(LOCID_UI_DIR == "RTL")
        _iStartPosition = adjustBiDiStartPos();
    switch(window.parent.SubAreaType())
    {
        case "appforsched":
        case "schedules":
            ScrollToOffset(_iStartPosition,true);
            break
    }
    LoadSubjectsAsynchronously()
}
function IsAppointmentOrServiceAppointment(sType)
{
    for(var aItems = sType.split(","),
        iLen = aItems.length,
        i = 0; i < iLen; i++)
    {
        var iValue = parseInt(aItems[i]);
        if(iValue != Appointment && iValue != ServiceAppointment)
            return false
    }
    return true
}
function LoadSubjectsAsynchronously()
{
    var oidArray = [];
    oidArray.type = "guid";
    var idArray = [];
    idArray.type = "string";
    for(var elements = document.getElementsByTagName("div"),
        count = 0,
        i = 0; i < elements.length; i++)
    {
        o = elements[i];
        if(IsNull(o.getAttribute("otype")) || IsNull(o.className))
            continue;
        if(typeof o.getAttribute("otype") != "string" || typeof o.className != "string")
            continue;
        if(o.className.indexOf("ganttBlockBase") == -1 && o.className.indexOf("ganttBlockOverlapped") == -1)
            continue;
        if(IsAppointmentOrServiceAppointment(o.getAttribute("otype")) == false)
            continue;
        var oidArrayFromFoundUIObject = o.getAttribute("oid").split(",");
        oidArrayFromFoundUIObject.type = "string";
        for(var j = 0; j < oidArrayFromFoundUIObject.length; j++)
        {
            oidArray[count] = oidArrayFromFoundUIObject[j];
            idArray[count] = o.getAttribute("id");
            count++
        }
    }
    if(count > 0)
    {
        var command = new RemoteCommand("GanttControlWebService","GetCommitmentSubjects");
        command.SetParameter("activityIds",oidArray);
        command.SetParameter("controlIds",idArray);
        command.Execute(LoadSubjectsAsynchronouslyCallback)
    }
}
function SetTitleAndInnerTextIfNeeded(controlId,subject,overlappedAppointment,index)
{
    if(!(index < MaxAppointmentsPerToolTip || overlappedAppointment == false && typeof subject == "string"))
        return;
    var oGantt = document.getElementById(controlId);
    if(index < MaxAppointmentsPerToolTip)
    {
        var title = oGantt.title,
            placeholder = "{" + index.toString() + "}";
        if(title.indexOf(placeholder) != -1)
            title = title.replace(placeholder,subject);
        oGantt.title = title
    }
    overlappedAppointment == false && typeof subject == "string" && 
        XUI.Html.SetText(XUI.Html.DomUtils.GetFirstChild(oGantt),subject)
}
function LoadSubjectsAsynchronouslyCallback(oResult)
{
    if(!oResult.Success)
        return;
    if(typeof oResult.ReturnValue.Subjects.string == "string")
        SetTitleAndInnerTextIfNeeded(oResult.ReturnValue.ControlIds.string,oResult.ReturnValue.Subjects.string,false,0);
    else
    {
        for(var overlappedAppt = [],
            i = 0; i < oResult.ReturnValue.ControlIds.string.length; i++)
            if(overlappedAppt[oResult.ReturnValue.ControlIds.string[i]] == false)
                overlappedAppt[oResult.ReturnValue.ControlIds.string[i]] = true;
            else
                if(IsNull(overlappedAppt[oResult.ReturnValue.ControlIds.string[i]]))
                    overlappedAppt[oResult.ReturnValue.ControlIds.string[i]] = false;
        for(var indexes = [],
            subject,
            i = 0; i < oResult.ReturnValue.Subjects.string.length; i++)
        {
            overlappedAppointment = overlappedAppt[oResult.ReturnValue.ControlIds.string[i]];
            if(IsNull(indexes[oResult.ReturnValue.ControlIds.string[i]]))
                indexes[oResult.ReturnValue.ControlIds.string[i]] = 0;
            else
                indexes[oResult.ReturnValue.ControlIds.string[i]]++;
            if(typeof oResult.ReturnValue.Subjects.string[i] == "string")
                subject = oResult.ReturnValue.Subjects.string[i];
            else
                subject = "";
            SetTitleAndInnerTextIfNeeded(oResult.ReturnValue.ControlIds.string[i],subject,overlappedAppointment,indexes[oResult.ReturnValue.ControlIds.string[i]])
        }
    }
}
function ConfigureGrid()
{
    var crmGrid = $find("crmGrid");
    if(!IsNull(crmGrid.get_innerGrid()))
    {
        crmGrid.set_autoHideHScroll(false);
        crmGrid.add_onChangePage(OnGridChangePage);
        crmGrid.add_onSelectionChange(OnGridSelectionChange);
        crmGrid.add_onBeforeRefresh(OnGridBeforeRefresh);
        var divDataArea = $get(crmGrid.get_id() + "_divDataArea");
        $addHandler(divDataArea,"scroll",handleGridScroll);
        if(crmGrid.get_innerGrid().get_numberOfRecords() > 0)
            crmGrid.get_innerGrid().SelectRecords(0,0);
        else
            window.parent.GanttSelectionChanged()
    }
    var iGridWidth = GetCachedSetting("AB_GridWidth",207);
    resizeSpliter(iGridWidth + 2);
    if($get("extraControls").style.display == "none")
    {
        $get("bottomSpacerBar").style.height = "22px";
        $get("ganttWrapper").style.bottom = "22px"
    }
}
function EndDateChanged()
{
    var sEndDate = _dateRangeEnd.get_dataValue();
    window.parent.ChangeEndDate(sEndDate)
}
function StartDateChanged()
{
    var sStartDate = _dateRangeStart.get_dataValue();
    window.parent.ChangeStartDate(sStartDate)
}
function BlockClick(e)
{
    var eSrc = e.target;
    SelectGridAndGanttRow(GetRowElement(eSrc));
    var oBlock = GetBlockElement(eSrc);
    if(!IsNull(oBlock))
        if(IsOverlapped(oBlock))
            OverlappedAppointmentClicked(oBlock);
        else
            SelectBlock(oBlock);
    e.stopPropagation();
    window.parent.GanttSelectionChanged()
}
function RowTouch(e)
{
    if(event.targetTouches == null)
        return;
    var targetTouches = event.targetTouches.length;
    targetTouches == 2 && 
        BlockDblClick(e)
}
function BlockDblClick(e)
{
    BlockClick(e);
    if(!IsNull(selectedBlock))
    {
        var queryString = "?id=" + CrmEncodeDecode.CrmUrlEncode(selectedBlock.getAttribute("oid"));
        openObjEx(selectedBlock.getAttribute("otype"),null,null,queryString)
    }
}
function RowClick(e)
{
    var oRow = GetRowElement(e.target);
    if(IsNull(oRow))
        return;
    if(selectedRow != oRow)
    {
        SelectGridAndGanttRow(oRow);
        if(!IsNull(oRow.getAttribute("single")))
            SelectBlock(GetFirstBlock(oRow));
        else
            UnselectBlock();
        window.parent.GanttSelectionChanged()
    }
}
function IsOverlapped(oBlock)
{
    return oBlock.className == "ganttBlockOverlapped"
}
function OverlappedAppointmentClicked(oBlock)
{
    var numberToInsert = oBlock.getAttribute("otype").split(",").length,
        oRow = GetRowElement(oBlock),
        oLastRow = GetRowElement(oLastOverlappedBlock),
        bExpand = XUI.Html.DomUtils.GetFirstChild(oBlock).getAttribute("exp") != "1",
        apptbooksign;
    if(!IsNull(oLastOverlappedBlock) && !IsNull(oLastRow))
        if(XUI.DomUtilities.HasChildElements(oLastOverlappedBlock))
        {
            apptbooksign = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ApptBook/plus.gif"));
            var img = XUI.Html.DomUtils.GetFirstChild(oLastOverlappedBlock);
            img.src = apptbooksign.source;
            img.className = apptbooksign.cssClass;
            img.alt = LOCID_TREE_PLUS;
            img.setAttribute("exp","");
            RemoveRowsFromGantt(oLastRow);
            oLastOverlappedBlock = null;
            oLastOverlappedBlockHeight = 0
        }
    if(bExpand)
    {
        apptbooksign = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ApptBook/minus.gif"));
        var img = XUI.Html.DomUtils.GetFirstChild(oBlock);
        img.src = apptbooksign.source;
        img.className = apptbooksign.cssClass;
        img.alt = LOCID_TREE_MINUS;
        img.setAttribute("exp","1");
        var objectTypes = oBlock.getAttribute("otype").split(",");
        objectTypes.type = "int";
        var objectIds = oBlock.getAttribute("oid").split(",");
        objectIds.type = "guid";
        var command = new RemoteCommand("GanttControlWebService","CreateOverlappedAppointments");
        command.SetParameter("startDate",window.parent.StartDate());
        command.SetParameter("endDate",window.parent.EndDate());
        command.SetParameter("zoomLevel",window.parent.ZoomLevel());
        command.SetParameter("entityTypes",objectTypes);
        command.SetParameter("entityId",oRow.getAttribute("oid"));
        command.SetParameter("blockEntityIds",objectIds);
        var result = command.Execute();
        if(result.Success)
        {
            var insertedDiv = InsertRowsToGantt(oRow,numberToInsert,result.ReturnValue);
            oLastOverlappedBlock = oBlock;
            SetShowHideConflicts(ShouldShowConflict(),insertedDiv)
        }
    }
    SelectRow(oRow)
}
function RemoveRowsFromGantt(oOverlappedRow)
{
    var index = GetGridRow(oOverlappedRow),
        oExpandedDiv = document.getElementById("divExpand"),
        height = oLastOverlappedBlockHeight;
    oOverlappedRow.removeChild(oExpandedDiv);
    for(var oContent = $get("ganttContent"),
        bSetRowsHeight = true,
        i = index + 1; true; i++)
    {
        var rowInner = XUI.DomUtilities.GetChildElementAt(oContent,i);
        if(IsNull(rowInner))
            break;
        if(rowInner.className == "ganttGuide")
        {
            if(bSetRowsHeight)
            {
                rowInner.setAttribute("rowsheight",parseInt(rowInner.getAttribute("rowsheight"),10) - height);
                bSetRowsHeight = false
            }
        }
        else
            rowInner.style.top = parseInt(rowInner.offsetTop,10) - height + "px"
    }
    ResizeRowInTable(index,"");
    ResizeGuides(oContent)
}
function InsertRowsToGantt(oOverlappedRow,numberToInsert,html)
{
    var index = GetGridRow(oOverlappedRow);
    oLastOverlappedBlockHeight = oOverlappedRow.offsetHeight * numberToInsert;
    for(var oContent = $get("ganttContent"),
        bSetRowsHeight = true,
        i = index + 1; true; i++)
    {
        var rowInner = XUI.DomUtilities.GetChildElementAt(oContent,i);
        if(IsNull(rowInner))
            break;
        if(rowInner.className == "ganttGuide")
        {
            if(bSetRowsHeight)
            {
                rowInner.setAttribute("rowsheight",parseInt(rowInner.getAttribute("rowsheight"),10) + oLastOverlappedBlockHeight);
                bSetRowsHeight = false
            }
        }
        else
            rowInner.style.top = rowInner.offsetTop + oLastOverlappedBlockHeight + "px"
    }
    var insertedDiv = CreateDiv(oOverlappedRow,oOverlappedRow.offsetHeight - 1,html);
    ResizeRowInTable(index,oLastOverlappedBlockHeight + oOverlappedRow.offsetHeight + "px");
    ResizeGuides(oContent);
    return insertedDiv
}
function CreateDiv(oOverlappedRow,top,html)
{
    var div = document.createElement("DIV");
    div.id = "divExpand";
    div.style.position = "ABSOLUTE";
    div.style.top = top + "px";
    if(LOCID_UI_DIR == "RTL")
        div.style.right = "0px";
    else
        div.style.left = "0px";
    div.innerHTML = html;
    oOverlappedRow.appendChild(div);
    return div
}
function GetBlockElement(oElement)
{
    if(oElement.tagName == "IMG")
        oElement = oElement.parentNode;
    if(oElement.className.indexOf("ganttBlockText") != -1)
        oElement = oElement.parentNode;
    if(oElement.className.indexOf("ganttBlock") != -1)
        return oElement;
    return null
}
function GetRowElement(oElement)
{
    if(!IsNull(oElement))
    {
        if(oElement.tagName == "IMG")
            oElement = oElement.parentNode;
        if(oElement.className.indexOf("ganttBlockText") != -1)
            oElement = oElement.parentNode;
        if(oElement.className.indexOf("ganttBlock") != -1)
            oElement = oElement.parentNode;
        if(oElement.className.indexOf("ganttRow") != -1)
            return oElement
    }
    return null
}
function GetFirstBlock(oRow)
{
    var resultBlock = null;
    XUI.Html.DomUtils.ForEachChild(oRow,function(oBlock)
    {
        var oBlockClasses = oBlock.className;
        if(oBlockClasses.indexOf("ganttBlockBase") != -1)
        {
            resultBlock = oBlock;
            return true
        }
        return false
    });
    return resultBlock
}
function GetGridRow(oElement)
{
    var oGanttRow = GetRowElement(oElement);
    if(!IsNull(oGanttRow) && oGanttRow.parentNode.id == "divExpand")
        oGanttRow = oGanttRow.parentNode.parentNode;
    if(!IsNull(oGanttRow) && oGanttRow.className.indexOf("ganttRow") != -1)
    {
        var asRowId = oGanttRow.id.split("_");
        return Number(asRowId[1])
    }
    return -1
}
function GetRowElementFromGridRow(iRow)
{
    return document.getElementById("row_" + iRow)
}
function UnselectRow()
{
    UnselectBlock();
    if(!IsNull(selectedRow))
        selectedRow.className = "ganttRowSelectOff";
    selectedRow = null
}
function SelectRow(oRow)
{
    UnselectRow();
    selectedRow = oRow;
    if(!IsNull(oRow))
        selectedRow.className = "ganttRowSelectOn"
}
function SelectRowAndSingleBlock(oRow)
{
    if(!IsNull(oRow))
    {
        SelectRow(oRow);
        !IsNull(oRow.getAttribute("single")) && 
            SelectBlock(GetFirstBlock(oRow));
        ScrollToSelection()
    }
}
function SelectGridAndGanttRow(oRow)
{
    UnSelectRowInTable();
    SelectRow(oRow);
    SelectRowInTable(GetGridRow(oRow))
}
function SelectRowFromGridRow(rowId)
{
    var oRow = GetRowElementFromGridRow(rowId);
    SelectRowAndSingleBlock(oRow)
}
function SelectBlock(oBlock)
{
    UnselectBlock();
    selectedBlock = oBlock;
    selectedBlock.stockCssClass = selectedBlock.className;
    swapGradientColors(selectedBlock);
    selectedBlock.className = selectedBlock.stockCssClass + " ganttBlockSelected";
    SetBorder(oBlock)
}
function UnselectBlock()
{
    if(!IsNull(selectedBlock))
    {
        selectedBlock.className = selectedBlock.stockCssClass;
        swapGradientColors(selectedBlock);
        var wasSelected = selectedBlock;
        selectedBlock = null;
        SetBorder(wasSelected)
    }
}
var gradientClassBase = "ganttBlockserviceappointmentStatus",
    inversiveGradientClassSuffix = "Inversive";
function swapGradientColors(o)
{
    var index = o.className.indexOf(gradientClassBase);
    if(index != -1)
    {
        var endIndex = o.className.indexOf(" ",index),
            oldClassName;
        if(endIndex != -1)
            oldClassName = o.className.substr(index,n1 - index);
        else
            oldClassName = o.className.substr(index);
        var newClassName;
        if(oldClassName.indexOf(inversiveGradientClassSuffix) != -1)
            newClassName = oldClassName.substr(0,oldClassName.length - inversiveGradientClassSuffix.length);
        else
            newClassName = oldClassName + inversiveGradientClassSuffix;
        Sys.UI.DomElement.removeCssClass(o,oldClassName);
        Sys.UI.DomElement.addCssClass(o,newClassName)
    }
}
function ScrollToSelection()
{
    switch(window.parent.SubAreaType())
    {
        case "apptbook":
            ScrollToBlock(GetFirstBlock(selectedRow),true);
            break
    }
}
var _iDest = 0;
function ScrollToPos(iTimeRemaining,iTimeSlice)
{
    iTimeRemaining -= iTimeSlice;
    if(iTimeRemaining > 0)
        JumpToPos(Math.floor(($get("ganttHeaderRowTop").scrollLeft + _iDest) / 2)) && 
            setTimeout("ScrollToPos(" + iTimeRemaining + "," + iTimeSlice + ")",iTimeSlice);
    else
        JumpToPos(_iDest)
}
function JumpToPos(iPos)
{
    var oGantt = $get("ganttContent");
    if(IsNull(oGantt))
        return true;
    var ganttHeaderRowBottom = $get("ganttHeaderRowBottom");
    if(ganttHeaderRowBottom.scrollLeft == iPos && oGantt.scrollLeft == iPos)
        return false;
    oGantt.scrollLeft = iPos;
    var ganttHeaderRowTop = $get("ganttHeaderRowTop");
    if(LOCID_UI_DIR == "RTL")
    {
        if(IsNull(oHeaderRowPadding))
            oHeaderRowPadding = XUI.Html.DomUtils.GetLastChild($get("ganttHeaderRowTop"));
        ganttHeaderRowTop.scrollLeft = oGantt.scrollLeft - iScrollbarWidth + oHeaderRowPadding.clientWidth;
        ganttHeaderRowBottom.scrollLeft = oGantt.scrollLeft - iScrollbarWidth + oHeaderRowPadding.clientWidth
    }
    else
    {
        ganttHeaderRowTop.scrollLeft = oGantt.scrollLeft;
        ganttHeaderRowBottom.scrollLeft = oGantt.scrollLeft
    }
    return true
}
function ScrollToBlock(oBlock,bSoftScroll)
{
    if(oBlock)
    {
        var position = parseInt(LOCID_UI_DIR == "RTL" ? oBlock.style.right : oBlock.style.left);
        ScrollToOffset(position,bSoftScroll)
    }
}
function ScrollToOffset(iDest,bSoftScroll)
{
    _iDest = iDest;
    if(bSoftScroll && _iSmoothScrollLimit > _numberBlocksRendered)
        ScrollToPos(1e3,100);
    else
        JumpToPos(_iDest)
}
function ResizeRowInTable(index,height)
{
    var rowsList = $find("crmGrid").get_innerGrid().get_dataTableBody(),
        oRow = XUI.DomUtilities.GetChildElementAt(rowsList,index);
    oRow.style.height = height
}
function SelectRowInTable(index)
{
    bChangingGrid = true;
    var crmGrid = $find("crmGrid");
    crmGrid.get_innerGrid().SelectRecords(index,index,true);
    bChangingGrid = false
}
function UnSelectRowInTable(index)
{
    bChangingGrid = true;
    var crmGrid = $find("crmGrid");
    crmGrid.get_innerGrid().UnselectRecords();
    bChangingGrid = false
}
function applyStyle(o,sClass)
{
    var i = 0,
        ii = o.cells.length;
    while(i < ii)
    {
        o.cells[i].className = sClass;
        i++
    }
}
function ResizeContent(e)
{
    ResizeGuides($get("ganttContent"));
    ScrollHeader(e)
}
function ResizeGuides(oContent)
{
    if(bChangingGuides || IsNull(oContent))
        return;
    bChangingGuides = true;
    var divDataArea = $get("crmGrid_divDataArea"),
        bottomPosition = divDataArea.offsetHeight - divDataArea.scrollHeight;
    if(bottomPosition > iScrollbarWidth)
        bottomPosition = iScrollbarWidth;
    if(Sys.Browser.agent != Sys.Browser.InternetExplorer || Sys.Browser.version != 7)
        bottomPosition -= iScrollbarWidth;
    XUI.Html.DomUtils.ForEachChild(oContent,function(child)
    {
        if(child.className == "ganttGuide")
            child.style.bottom = bottomPosition + "px"
    });
    $get("ganttEdge").style.bottom = bottomPosition + "px";
    bChangingGuides = false
}
function FixGanttEdgeForIE7()
{
    if(Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version == 7)
    {
        var ganttEdge = $get("ganttEdge");
        if(!IsNull(ganttEdge))
            if(LOCID_UI_DIR == "RTL")
                ganttEdge.style.left = iScrollbarWidth + "px";
            else
                ganttEdge.style.right = iScrollbarWidth + "px"
    }
}
function ScrollHeader(e)
{
    var ganttContent = $get("ganttContent");
    if(!bScrollSync && !IsNull(ganttContent))
    {
        bScrollSync = true;
        if(LOCID_UI_DIR == "RTL")
        {
            var isRightAligned = false;
            if(Sys.Browser.agent == Sys.Browser.InternetExplorer)
            {
                var documentMode = document.documentMode;
                if(IsNull(documentMode))
                    documentMode = Sys.Browser.version;
                if(documentMode > 7)
                    isRightAligned = true
            }
            else
                isRightAligned = Mscrm.Utilities.isFirefox();
            var rightPosition = -Math.abs(ganttContent.scrollLeft);
            if(!isRightAligned)
                rightPosition = ganttContent.scrollLeft + ganttContent.offsetWidth - ganttContent.scrollWidth;
            if(Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version == 7)
                rightPosition -= iScrollbarWidth;
            $get("ganttSheetHeader").style.right = rightPosition + "px"
        }
        else
            $get("ganttSheetHeader").style.left = -ganttContent.scrollLeft + "px";
        var divDataArea = $get("crmGrid_divDataArea");
        divDataArea.scrollTop = ganttContent.scrollTop;
        bScrollSync = false
    }
}
function handleGridScroll()
{
    var oGantt = $get("ganttContent");
    if(!bScrollSync && !IsNull(oGantt))
    {
        bScrollSync = true;
        var divDataArea = $get("crmGrid_divDataArea");
        oGantt.scrollTop = divDataArea.scrollTop;
        bScrollSync = false
    }
}
function ClearSelection()
{
    selectedRow = null;
    selectedBlock = null
}
function SelectedBlockID()
{
    if(!IsNull(selectedBlock))
        return selectedBlock.id;
    return ""
}
function SelectedRowID()
{
    if(!IsNull(selectedRow))
        return selectedRow.id;
    return ""
}
function OnGridBeforeRefresh(sender,args)
{
    var crmGrid = $find("crmGrid"),
        oUrl = Mscrm.CrmUri.create(window.location.search);
    oUrl.get_query()["sortColumns"] = crmGrid.GetProperty("sortColumns");
    delete oUrl.get_query()["pagingCookie"];
    crmGrid.DisablePaging();
    window.location.search = oUrl.toString();
    args.breakEvent = true
}
function OnGridChangePage(sender,args)
{
    var crmGrid = $find("crmGrid"),
        oUrl = Mscrm.CrmUri.create(window.location.search);
    oUrl.get_query()["pageNum"] = args.newPageNumber;
    if(IsNull(crmGrid.GetProperty("pagingCookie")))
        delete oUrl.get_query()["pagingCookie"];
    else
        oUrl.get_query()["pagingCookie"] = crmGrid.GetProperty("pagingCookie");
    if(IsNull(sender.GetParameter("filter")))
        delete oUrl.get_query()["filter"];
    else
        oUrl.get_query()["filter"] = sender.GetParameter("filter");
    if(IsNull(sender.GetParameter("quickfind")))
        delete oUrl.get_query()["quickfind"];
    else
        oUrl.get_query()["quickfind"] = sender.GetParameter("quickfind");
    oUrl.get_query()["sortColumns"] = crmGrid.GetProperty("sortColumns");
    crmGrid.DisablePaging();
    if(!IsNull(oUrl.get_query()["quickfind"]))
    {
        var SavedQuerySelector = window.parent.document.getElementById(crmGrid.get_id() + "_SavedQuerySelector");
        if(SavedQuerySelector.value != LOCID_SEARCH_RESULTS)
        {
            for(var i = 0; i < SavedQuerySelector.length; i++)
                if(SavedQuerySelector.options[i].value == LOCID_SEARCH_RESULTS)
                {
                    SavedQuerySelector.selectedIndex = i;
                    break
                }
            if(i >= SavedQuerySelector.length)
            {
                var SavedQuerySelectorBehavior = window.parent.Mscrm.FormControlInputBehavior.GetElementBehavior(SavedQuerySelector),
                    o = SavedQuerySelectorBehavior.AddOption(LOCID_SEARCH_RESULTS,LOCID_SEARCH_RESULTS);
                o.Search = true;
                o.Type = SavedQuery;
                SavedQuerySelector.selectedIndex = SavedQuerySelector.length - 1
            }
        }
    }
    window.location.search = oUrl.toString();
    args.breakEvent = true
}
function OnGridSelectionChange()
{
    if(bChangingGrid)
        return;
    var crmGrid = $find("crmGrid"),
        gridRow = crmGrid.get_innerGrid().get_selectedRecords()[0];
    if(!IsNull(gridRow))
        SelectRowFromGridRow(gridRow[2]);
    else
        UnselectBlock();
    window.parent.GanttSelectionChanged()
}
function Chunk(chunkGuids,chunkTypes,chunkReferences)
{
    this.ids = chunkGuids;
    this.types = chunkTypes;
    this.references = chunkReferences;
    this.ids.type = "guid";
    this.types.type = "int";
    this.length = IsNull(this.ids) ? 0 : this.ids.length;
    return this
}
var _iNextBlock = 0,
    _iTotalBlocks = 0,
    _aBlocks = [],
    _iLen = 0,
    _a = null;
function GetNextChunk(iState,rootElement)
{
    var chunkGuids = [],
        chunkTypes = [],
        chunkReferences = [],
        j = 0,
        a;
    if(!IsNull(rootElement))
        a = rootElement.getElementsByTagName("div");
    else
        a = _aBlocks;
    if(!IsNull(a))
        _iLen = a.length;
    else
        _iLen = 0;
    for(var bUpdateBlock = !IsNull(iState); _iNextBlock < _iLen && j <= _iChunkSize; _iNextBlock++)
    {
        o = a[_iNextBlock];
        if(o.getAttribute("otype") == Appointment || o.getAttribute("otype") == ServiceAppointment || o.className.indexOf("ganttBlockOverlapped") != -1)
            if(o.className.indexOf("ganttBlockBase") != -1 || o.className.indexOf("ganttBlockOverlapped") != -1)
            {
                if(j >= _iChunkSize)
                    break;
                for(var aBlockIds = o.getAttribute("oid").split(","),
                    aBlockTypes = o.getAttribute("otype").split(","),
                    jj = 0; jj < aBlockIds.length; jj++)
                {
                    chunkGuids[j] = aBlockIds[jj];
                    chunkTypes[j] = aBlockTypes[jj];
                    chunkReferences[j++] = o
                }
                bUpdateBlock && 
                    SetConflictState(o,iState)
            }
    }
    return new Chunk(chunkGuids,chunkTypes,chunkReferences)
}
var CONFLICTSTATE_NORMAL = 0,
    CONFLICTSTATE_CONFLICT = 1,
    CONFLICTSTATE_UNKNOWN = 2;
function SetConflictState(oDiv,iState)
{
    oDiv.iState = iState;
    SetBorder(oDiv)
}
function SetBorder(oBlock)
{
    var iState = oBlock.iState;
    if(IsNull(iState))
        iState = CONFLICTSTATE_NORMAL;
    if(IsNull(oBlock.stockColor))
        oBlock.stockColor = XUI.Html.GetComputedStyle(oBlock,"borderColor");
    if(iState == CONFLICTSTATE_CONFLICT)
        oBlock.style.borderColor = "red";
    else
        if(oBlock == selectedBlock)
            oBlock.style.borderColor = "black";
        else
            oBlock.style.borderColor = oBlock.stockColor;
    if(oBlock == selectedBlock || iState == CONFLICTSTATE_CONFLICT)
        oBlock.style.borderWidth = "2px";
    else
        oBlock.style.borderWidth = "1px";
    if(iState == CONFLICTSTATE_UNKNOWN)
        oBlock.style.borderStyle = "dotted";
    else
        oBlock.style.borderStyle = "solid"
}
var _waitTime = 500,
    _asyncValidate = null;
function UpdateResults(result)
{
    if(!_commandValidate)
        return;
    if(result.Success && result.ReturnValue != "" && result.ReturnValue.OperationSuccess)
    {
        var conflicts = result.ReturnValue.Results.boolean;
        if(!IsNull(conflicts))
        {
            var iLast = _chunk.references.length;
            if(iLast == 1)
                UpdateGanttBlock(_chunk.references[0],conflicts);
            else
                for(var i = 0; i < iLast; i++)
                    if(!IsNull(conflicts[i]))
                    {
                        if(!_commandValidate)
                            break;
                        UpdateGanttBlock(_chunk.references[i],conflicts[i])
                    }
        }
    }
    if(_commandValidate)
        if(_iNextBlock < _iLen)
        {
            if(_commandValidate)
                _asyncValidate = setTimeout("ValidateTimeBlocks()",_waitTime)
        }
        else
        {
            _commandValidate = null;
            ShowHideProgresBar(false);
            $find("validationProgress").reset()
        }
}
function UpdateGanttBlock(oBlock,bHasConflict)
{
    (IsNull(oBlock.iState) || oBlock.iState == CONFLICTSTATE_UNKNOWN || bHasConflict) && 
        SetConflictState(oBlock,bHasConflict ? CONFLICTSTATE_CONFLICT : CONFLICTSTATE_NORMAL);
    _iTotalProcessed++;
    $find("validationProgress").setPercentage(_iTotalProcessed * 100 / _iTotalBlocks)
}
var _chunk = null,
    _commandValidate = null;
function ValidateTimeBlocks()
{
    _chunk = GetNextChunk();
    if(_chunk.length > 0)
    {
        _commandValidate = new RemoteCommand("ActivitiesWebService","ValidateMultiple");
        _commandValidate.SetParameter("ids",_chunk.ids);
        _commandValidate.SetParameter("objectTypeCodes",_chunk.types);
        _commandValidate.Execute(UpdateResults)
    }
}
function ToggleShowConflicts()
{
    SetShowHideConflicts(!ShouldShowConflict())
}
function ShouldShowConflictQuery(commandProperties)
{
    commandProperties["On"] = ShouldShowConflict()
}
function ShouldShowConflict()
{
    return GetCachedSetting("AB_ShowConflict",false)
}
function SetShowConflict(bTrue)
{
    SetCachedSetting("AB_ShowConflict",bTrue)
}
function SetShowHideConflicts(bShowConflict,rootElement)
{
    var gridBodyTable = $find("crmGrid").get_innerGrid().get_element();
    if(ShouldShowConflict() && _commandValidate)
    {
        rootElement = gridBodyTable.document;
        if(_commandValidate)
        {
            _commandValidate.Abort();
            _commandValidate = null
        }
        if(!IsNull(_asyncValidate))
        {
            clearTimeout(_asyncValidate);
            _asyncValidate = null
        }
        ShowHideProgresBar(false)
    }
    SetShowConflict(bShowConflict);
    _iNextBlock = 0;
    _iTotalBlocks = 0;
    _iTotalProcessed = 0;
    _aBlocks = document.getElementsByTagName("div");
    _iLen = _aBlocks.length;
    if(ShouldShowConflict())
    {
        var chunk = null;
        while(_iNextBlock < _iLen)
        {
            chunk = GetNextChunk(CONFLICTSTATE_UNKNOWN,rootElement);
            _iTotalBlocks += chunk.ids.length
        }
        if(_iTotalBlocks > 0)
        {
            ShowHideProgresBar(ShouldShowConflict());
            _iNextBlock = 0;
            ValidateTimeBlocks()
        }
    }
    else
        SetAllBlockState(CONFLICTSTATE_NORMAL,_iLen)
}
function ShowHideProgresBar(bShow)
{
    if(bShow)
    {
        $get("progressDiv").style.display = "";
        $get("zoom").style.display = "none"
    }
    else
    {
        $get("progressDiv").style.display = "none";
        $get("zoom").style.display = ""
    }
}
function SetAllBlockState(iState,iLen)
{
    if(IsNull(iLen))
        iLen = _aBlocks.length;
    _iNextBlock = 0;
    while(_iNextBlock < iLen)
        GetNextChunk(iState,document);
    _iNextBlock = 0
}
function UpdateConflictButtonState()
{
    ShouldShowConflict() && 
        SetShowHideConflicts(true)
}
function auto(iObjType)
{
    window.parent.auto()
}
function ZoomChanged()
{
    var zoomLevel = $find("zoom").get_selectedLevel();
    !IsNull(window.parent) && !IsNull(window.parent.SetZoomLevel) && 
        window.parent.SetZoomLevel(zoomLevel)
}
var bIsPressed = false,
    iLastGridSize = 0,
    iLeftLimit = 0,
    iRightLimit = 0,
    iDownX = 0,
    iLeftMargin = 10,
    iRightMargin = 30,
    iScrollbarWidth = 16;
function MouseDown(oEvent)
{
    bIsPressed = true;
    iLastGridSize = 0;
    var ganttForm = $get("CrmGanttForm");
    if(!IsNull(ganttForm))
        ganttForm.cursor = "col-resize";
    if(IsNull(oGlobalOverlay))
    {
        oGlobalOverlay = document.createElement("div");
        oGlobalOverlay.className = "overlay";
        $addHandler(oGlobalOverlay,"mouseup",MouseUp);
        $addHandler(oGlobalOverlay,"mousemove",MouseMove);
        document.body.appendChild(oGlobalOverlay)
    }
    oGlobalOverlay.style.display = "";
    iDownX = oEvent.clientX;
    var iSeparatorMouseX = iDownX - oSeparator.offsetLeft;
    iLeftLimit = iLeftMargin + iSeparatorMouseX;
    iRightLimit = window.document.body.clientWidth - (iRightMargin - iSeparatorMouseX);
    oEvent.preventDefault()
}
function MouseMove(oEvent)
{
    if(!bIsPressed)
        return;
    var mousePos = oEvent.clientX;
    if(LOCID_UI_DIR == "RTL")
        mousePos = window.document.body.clientWidth - mousePos;
    if(mousePos >= iLeftLimit && mousePos <= iRightLimit)
        resizeSpliter(mousePos);
    else
        if(mousePos < iLeftLimit)
            resizeSpliter(iLeftLimit);
        else
            resizeSpliter(iRightLimit);
    oEvent.preventDefault()
}
function MouseUp(oEvent)
{
    if(!IsNull(oGlobalOverlay))
        oGlobalOverlay.style.display = "none";
    bIsPressed = false;
    var ganttForm = $get("CrmGanttForm");
    if(!IsNull(ganttForm))
        ganttForm.cursor = "default";
    iLastGridSize > 0 && 
        SetCachedSetting("AB_GridWidth",iLastGridSize);
    oEvent.preventDefault()
}
function resizeSpliter(mousePos)
{
    iLastGridSize = mousePos - 2;
    if(iLastGridSize > 0)
    {
        $get("crmGridTd").style.width = iLastGridSize + "px";
        if(LOCID_UI_DIR == "RTL")
        {
            $get("separator").style.right = iLastGridSize + "px";
            $get("crmGanttTd").style.right = iLastGridSize + 4 + "px"
        }
        else
        {
            $get("separator").style.left = iLastGridSize + "px";
            $get("crmGanttTd").style.left = iLastGridSize + 4 + "px"
        }
    }
    $find("crmGrid").HandleGridResize()
}
function adjustBiDiStartPos()
{
    var startTime = _TotalHoursDisplayed - _TotalMinutes / 60,
        nContentWidth = 0;
    if(!IsNull($get("ganttContent")))
        nContentWidth = $get("ganttContent").clientWidth;
    startTime = startTime * 60 * _TimeBlockWidth / _SectionMinutes - nContentWidth;
    return startTime + _Margin
}
