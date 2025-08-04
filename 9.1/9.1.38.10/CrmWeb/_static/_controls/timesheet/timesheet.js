
var _oPopupMenu = null,
    _oBaseDate = null;
function Refresh()
{
    oTable = document.getElementById("LoadingTable");
    if(oTable != null)
        oTable.style.display = "block";
    oTable = document.getElementById("TimeSheetTable");
    if(oTable != null)
        oTable.style.display = "none";
    for(iRangeIndex = iMaxRange - 1; iRangeIndex >= 0; iRangeIndex--)
        oTable.deleteRow(iRangeIndex);
    iMaxRange = 1;
    OnPageLoad()
}
function CommitForm()
{
    for(var sRuleType,
        oStartTime,
        Effort = null,
        Duration,
        Data = "<rules>",
        iRangeIndex = 0; iRangeIndex < iMaxRange; iRangeIndex++)
    {
        sRuleType = document.getElementById("Type" + iRangeIndex).value;
        if(sRuleType == "effort")
            if(!ValidCapacityRange(iRangeIndex,1e-4,999999999))
                return false;
            else
                Effort = capacityFormValue(iRangeIndex);
        oStartTime = GetStartTimeSelect(iRangeIndex);
        Duration = GetRangeDuration(iRangeIndex);
        Data += "<rule><type>" + sRuleType + "</type><start>" + FormatUtcDate(oStartTime) + "</start><effort>" + Effort + "</effort><duration>" + Duration + "</duration></rule>"
    }
    Data += "</rules>";
    $get("clientData").value = Data;
    return true
}
function GetCurrentWorkingHours()
{
    var oWorkingHours = {};
    oWorkingHours.ScheduledStart = GetStartTimeSelect(0);
    oWorkingHours.ScheduledEnd = GetEndTimeSelect(iMaxRange - 1);
    return oWorkingHours
}
function SplitMenuAction(menuItem)
{
    var iRangeIndex = menuItem.get_reference();
    SplitRule(iRangeIndex,null,null)
}
function SplitRule(iRangeIndex,SplitTime,SplitEffort)
{
    var oTimeSheetTable = document.getElementById("TimeSheetTable"),
        i,
        ClassName,
        DecorClassName;
    if(iRangeIndex == iMaxRange - 1)
    {
        NewRow = oTimeSheetTable.rows[RuleRowNum + iRangeIndex];
        AssignRowCellsStyles(NewRow,iRangeIndex)
    }
    DecorClassName = "cellBottom";
    for(i = iMaxRange - 1; i >= iRangeIndex + 1; i--)
        RenumberTags(i,i + 1);
    iMaxRange++;
    RenderRow("effort",iRangeIndex,DecorClassName,SplitTime,SplitEffort);
    SetMenuItemState(iRangeIndex);
    SetMenuItemState(iRangeIndex + 1)
}
function InsertButtonClickHandler(eventObj)
{
    InsertRule(parseInt(eventObj.target.getAttribute("rangeIndex"),10),null,null)
}
function InsertMenuAction(menuItem)
{
    var iRangeIndex = menuItem.get_reference();
    InsertRule(iRangeIndex,null,null)
}
function InsertRule(iRangeIndex,oBreakTime,BreakDuration)
{
    var oTimeSheetTable = document.getElementById("TimeSheetTable"),
        i,
        ClassName,
        DecorClassName,
        forceEffort;
    forceEffort = document.getElementById("Effort" + iRangeIndex).value;
    if(iRangeIndex == iMaxRange - 1)
    {
        NewRow = oTimeSheetTable.rows[RuleRowNum + iRangeIndex];
        AssignRowCellsStyles(NewRow,iRangeIndex)
    }
    DecorClassName = "cellBottom";
    for(i = iMaxRange - 1; i >= iRangeIndex + 1; i--)
        RenumberTags(i,i + 1);
    iMaxRange++;
    RenderRow("break",iRangeIndex,DecorClassName,oBreakTime);
    iRangeIndex++;
    for(i = iMaxRange - 1; i >= iRangeIndex + 1; i--)
        RenumberTags(i,i + 1);
    iMaxRange++;
    var oForceSplitTime = GetBreakTime(iRangeIndex,BreakDuration);
    RenderRow("effort",iRangeIndex,DecorClassName,oForceSplitTime,forceEffort);
    onSelectInitDataValue()
}
function RenderRow(RowType,iRangeIndex,DecorClassName,oForcedSplitTime,ForcedEffort)
{
    var oTimeSheetTable = document.getElementById("TimeSheetTable"),
        NewRow,
        oTd,
        innerHtml,
        OldStartTime,
        OldEndTime,
        SplitTime,
        Effort,
        inputType = EnableEffort ? "text" : "hidden";
    NewRow = oTimeSheetTable.insertRow(RuleRowNum + iRangeIndex + 1);
    NewRow.className = RowType + "CellTr";
    NewRow.id = "Row" + (iRangeIndex + 1);
    NewRow.style.width = "100%";
    oTd = document.createElement("TD");
    oTd.className = "ruleTypeTd " + DecorClassName + "Left";
    oTd.noWrap = true;
    if(RowType == "effort")
    {
        oTd.innerHTML = SplitRuleName + RenderInput("hidden","effort","Type" + (iRangeIndex + 1));
        NewRow.appendChild(oTd);
        if(iRangeIndex > -1)
        {
            if(document.getElementById("Effort" + iRangeIndex))
                Effort = document.getElementById("Effort" + iRangeIndex).value;
            else
                Effort = DefaultEffort;
            if(ForcedEffort)
                Effort = ForcedEffort
        }
        else
            Effort = DefaultEffort;
        oTd = document.createElement("TD");
        oTd.className = "effortTd " + DecorClassName + "Left";
        if(inputType == "hidden")
            oTd.style.display = "none";
        oTd.align = "center";
        oTd.innerHTML = RenderInput(inputType,Effort,"Effort" + (iRangeIndex + 1),"OnCapacityLostFocus(" + (iRangeIndex + 1) + ");",null,EffortRuleName);
        NewRow.appendChild(oTd)
    }
    else
    {
        oTd.innerHTML = InsertRuleName + RenderInput("hidden","break","Type" + (iRangeIndex + 1));
        NewRow.appendChild(oTd);
        oTd = document.createElement("TD");
        oTd.className = "effortTd " + DecorClassName + "Left";
        if(!EnableEffort)
            oTd.style.display = "none";
        oTd.innerHTML = "&nbsp;";
        NewRow.appendChild(oTd)
    }
    if(iRangeIndex == -1)
    {
        OldStartTime = new Date(TemplateStartTime.toString());
        OldEndTime = new Date(TemplateEndTime.toString());
        SplitTime = new Date(TemplateStartTime.toString())
    }
    else
    {
        OldStartTime = GetStartTimeSelect(iRangeIndex);
        OldEndTime = GetEndTimeSelect(iRangeIndex);
        if(!oForcedSplitTime)
            SplitTime = GetSplitTime(OldStartTime,OldEndTime);
        else
            SplitTime = oForcedSplitTime
    }
    oTd = RenderTimeTd("StartTime",iRangeIndex + 1,SplitTime,"startTd " + DecorClassName + "Left");
    NewRow.appendChild(oTd);
    if(iRangeIndex == -1)
        oTd = RenderTimeTd("EndTime",iRangeIndex + 1,TemplateEndTime,"endTd " + DecorClassName + "Left");
    else
    {
        oTd = RenderTimeTd("EndTime",iRangeIndex + 1,OldEndTime,"endTd " + DecorClassName + "Left");
        SetEndTimeSelect(iRangeIndex,SplitTime)
    }
    NewRow.appendChild(oTd);
    oTd = document.createElement("TD");
    oTd.className = "actionsTd " + DecorClassName + "LeftRight";
    oTd.id = "actionsTd" + (iRangeIndex + 1);
    if(RowType == "effort")
    {
        innerHtml = '<table cellspacing="0" cellpadding="0"><tr><td>';
        innerHtml += RenderButton("InsertButtonClickHandler(new Sys.UI.DomEvent(event));","InsertButton" + (iRangeIndex + 1),InsertActionName,"ms-crm-RefreshDialog-Button RefreshDialog-Button_Override","block",iRangeIndex + 1);
        innerHtml += "</td><td>";
        innerHtml += RenderImage("/_imgs/menuButton",LOCID_MENUBUTTON_ALTTAG,"onMenuButton(new Sys.UI.DomEvent(event));","MenuButton" + (iRangeIndex + 1),"menuButton","none",iRangeIndex + 1);
        innerHtml += "</td></tr></table>"
    }
    else
        innerHtml = RenderButton("DeleteBreakClickHandler(new Sys.UI.DomEvent(event));","MergeButton" + (iRangeIndex + 1),MergeActionName,"ms-crm-RefreshDialog-Button RefreshDialog-Button_Override","block",iRangeIndex + 1);
    oTd.innerHTML = innerHtml;
    NewRow.appendChild(oTd);
    if(EnableEffort)
    {
        var oImg = document.getElementById("MenuButton" + (iRangeIndex + 1));
        ToggleImage(null,oImg)
    }
}
function SetMenuItemState(iRangeIndex)
{
    var RangeStart,
        RangeEnd,
        InsertButton,
        oStartDateTime,
        oEndDateTime,
        RangeDiff,
        MakeDisabled = iMaxRange >= MAX_ROWS;
    if(MakeDisabled || IsNull(iRangeIndex))
    {
        RangeStart = 0;
        RangeEnd = iMaxRange - 1
    }
    else
    {
        RangeStart = iRangeIndex;
        RangeEnd = iRangeIndex
    }
    for(iRangeIndex = RangeStart; iRangeIndex <= RangeEnd; iRangeIndex++)
    {
        InsertButton = document.getElementById("InsertButton" + iRangeIndex);
        if(!InsertButton)
            continue;
        if(MakeDisabled)
            InsertButton.disabled = "true";
        else
        {
            oStartDateTime = GetStartTimeSelect(iRangeIndex);
            oEndDateTime = GetEndTimeSelect(iRangeIndex);
            RangeDiff = (oEndDateTime - oStartDateTime) / 6e4;
            InsertButton.disabled = TemplateApptsStartEvery >= RangeDiff / 2
        }
    }
    HidePopup()
}
function IsNextRowValidForMerge(iRangeIndex)
{
    var prevRowIndex;
    if(iRangeIndex == 0)
        iRangeIndex = 1;
    else
        if(iRangeIndex < 0)
            return false;
    prevRowIndex = iRangeIndex - 1;
    if(document.getElementById("Type" + prevRowIndex).value == "effort")
        return !EnableEffort && iRangeIndex < iMaxRange && document.getElementById("Type" + iRangeIndex).value == "effort" && document.getElementById("Effort" + iRangeIndex).value == document.getElementById("Effort" + prevRowIndex).value;
    else
        return !EnableEffort && iRangeIndex < iMaxRange && document.getElementById("Type" + iRangeIndex).value == "break"
}
function MergeValidForMergeRow(iRangeIndex)
{
    while(IsNextRowValidForMerge(iRangeIndex))
        MergeRow(iRangeIndex)
}
function DeleteBreakClickHandler(eventObj)
{
    MergeInserts(parseInt(eventObj.target.getAttribute("rangeIndex"),10))
}
function MergeInserts(iRangeIndex)
{
    MergeRow(iRangeIndex);
    MergeValidForMergeRow(iRangeIndex)
}
function DeleteMenuAction(menuItem)
{
    var iRangeIndex = menuItem.get_reference();
    MergeRow(iRangeIndex)
}
function MergeRow(iRangeIndex)
{
    var oTimeSheetTable,
        MergedEndTime,
        i = 0,
        NewRow;
    if(iRangeIndex == 0)
        iRangeIndex = 1;
    if(iRangeIndex > iMaxRange - 1)
        return;
    MergedEndTime = GetEndTimeSelect(iRangeIndex);
    iRangeIndex > 0 && 
        SetEndTimeSelect(iRangeIndex - 1,MergedEndTime);
    oTimeSheetTable = document.getElementById("TimeSheetTable");
    while(oTimeSheetTable.rows[i].id != "Row" + iRangeIndex)
        i++;
    oTimeSheetTable.deleteRow(i);
    iMaxRange--;
    for(i = iRangeIndex + 1; i <= iMaxRange; i++)
        RenumberTags(i,i - 1);
    if(iRangeIndex == iMaxRange)
    {
        NewRow = oTimeSheetTable.rows[RuleRowNum + iMaxRange - 1];
        AssignRowCellsStyles(NewRow,iRangeIndex - 1)
    }
    formUpdateElements(iRangeIndex - 1)
}
function AssignRowCellsStyles(oRow,iRangeIndex)
{
    var ClassName;
    for(i = 0; i < oRow.cells.length; i++)
    {
        ClassName = oRow.cells[i].className;
        ClassName = ClassName.substring(0,ClassName.indexOf("cell") + 4);
        if(iRangeIndex == 1)
            ClassName += "Top";
        ClassName += "Bottom";
        ClassName += "Left";
        if(i == oRow.cells.length - 1)
            ClassName += "Right";
        oRow.cells[i].className = ClassName
    }
}
function RenumberTags(OldRangeIndex,NewRangeIndex)
{
    var oButton,
        oImage,
        oMenuItem,
        oElement;
    if(document.getElementById("Type" + OldRangeIndex).value == "break")
    {
        oButton = document.getElementById("MergeButton" + OldRangeIndex);
        oButton.id = "MergeButton" + NewRangeIndex;
        oButton.setAttribute("rangeIndex",NewRangeIndex);
        XUI.Html.SetOuterHTML(oButton,XUI.Html.GetOuterHTML(oButton))
    }
    else
    {
        oButton = document.getElementById("InsertButton" + OldRangeIndex);
        oButton.id = "InsertButton" + NewRangeIndex;
        oButton.setAttribute("rangeIndex",NewRangeIndex);
        XUI.Html.SetOuterHTML(oButton,XUI.Html.GetOuterHTML(oButton));
        oImage = document.getElementById("MenuButton" + OldRangeIndex);
        oImage.setAttribute("rangeIndex",NewRangeIndex);
        oImage.id = "MenuButton" + NewRangeIndex;
        oElement = document.getElementById("Effort" + OldRangeIndex);
        oElement.id = "Effort" + NewRangeIndex;
        oButton.setAttribute("rangeIndex",NewRangeIndex);
        oElement.onblur = "OnCapacityLostFocus('" + NewRangeIndex + "');";
        XUI.Html.SetOuterHTML(oElement,XUI.Html.GetOuterHTML(oElement))
    }
    RenumberStartTimeSelect(OldRangeIndex,NewRangeIndex);
    oElement = document.getElementById("StartTimeTD" + OldRangeIndex);
    oElement.id = "StartTimeTD" + NewRangeIndex;
    RenumberEndTimeSelect(OldRangeIndex,NewRangeIndex);
    oElement = document.getElementById("EndTimeTD" + OldRangeIndex);
    oElement.id = "EndTimeTD" + NewRangeIndex;
    oElement = document.getElementById("Type" + OldRangeIndex);
    oElement.id = "Type" + NewRangeIndex;
    oElement = document.getElementById("Row" + OldRangeIndex);
    oElement.id = "Row" + NewRangeIndex
}
function OnPageLoad()
{
    var oTable;
    RenderRow("effort",-1,"cellTopBottom");
    _oBaseDate = GetStartTimeSelect(0);
    LoadFromXml();
    oTable = document.getElementById("LoadingTable");
    if(oTable != null)
        oTable.style.display = "none";
    oTable = document.getElementById("TimeSheetTable");
    if(oTable != null)
        oTable.style.display = "";
    onSelectInitDataValue()
}
function OnMouseOverHeader()
{
}
function OnMouseOutHeader()
{
}
function OnEffortToggle()
{
    var oColumnTd;
    if(EnableEffort)
    {
        EnableEffort = false;
        oColumnTd = document.getElementById("effortColumn");
        EffortColumnHeader = oColumnTd.innerHTML;
        oColumnTd.innerHTML = "";
        oColumnTd.style.width = 0;
        oColumnTd.style.display = "none";
        ToggleCapacity("hidden","none")
    }
    else
    {
        EnableEffort = true;
        oColumnTd = document.getElementById("effortColumn");
        oColumnTd.innerHTML = EffortColumnHeader;
        oColumnTd.style.width = null;
        oColumnTd.style.display = "";
        ToggleCapacity("text","")
    }
}
function onSelectInitDataValue()
{
    formUpdateElements()
}
function formUpdateElements(iRangeIndex)
{
    SetMenuItemState(iRangeIndex);
    OnUpdateTotals()
}
function OnStartTimeChange(iRangeIndex)
{
    window.setTimeout("OnStartTimeChangeInternal(" + iRangeIndex + ")",1)
}
function OnStartTimeChangeInternal(iRangeIndex)
{
    var sRangeOverlaps = "",
        sWarnMessage,
        oStartDateTime,
        oEndDateTime,
        oNewDateTime,
        oOriginalValue,
        i,
        bMergeFirst = false;
    oNewDateTime = GetStartTimeSelect(iRangeIndex);
    if(iRangeIndex > 0)
        oOriginalValue = GetEndTimeSelect(iRangeIndex - 1);
    else
    {
        oOriginalValue = new Date(TemplateStartTime.toString());
        oEndDateTime = GetEndTimeSelect(iMaxRange - 1);
        if(oOriginalValue >= oEndDateTime)
        {
            oOriginalValue.setTime(oEndDateTime.getTime());
            oOriginalValue.setMinutes(oEndDateTime.getMinutes() - TemplateApptsStartEvery)
        }
        oEndDateTime.setMinutes(oEndDateTime.getMinutes() - TemplateApptsStartEvery);
        if(oNewDateTime > oEndDateTime)
        {
            var sMsg = StartTimeLater.replace("{0}",TemplateApptsStartEvery);
            alert(sMsg);
            SetStartTimeSelect(iRangeIndex,oOriginalValue);
            formUpdateElements(iRangeIndex);
            return
        }
    }
    for(i = 0; i < iMaxRange; i++)
    {
        oStartDateTime = GetStartTimeSelect(i);
        oEndDateTime = GetEndTimeSelect(i);
        if(i < iRangeIndex && oNewDateTime <= oStartDateTime)
        {
            sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
            sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
        }
        else
            if(i == iRangeIndex && oNewDateTime.toString() == oEndDateTime.toString())
            {
                sRangeOverlaps += FormatShortDateTime(oOriginalValue) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
                sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
            }
            else
                if(i > iRangeIndex && oNewDateTime >= oStartDateTime)
                {
                    sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
                    sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
                }
                else
                    if(i == iMaxRange - 1 && oNewDateTime >= oEndDateTime)
                    {
                        sRangeOverlaps += FormatShortDateTime(oOriginalValue) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
                        sWarnMessage = ConflictMessage + "\n" + sRangeOverlaps + MergeMessage
                    }
    }
    if(sRangeOverlaps != "")
        if(confirm(sWarnMessage))
        {
            iRangeIndex > 0 && CheckEndNotCloseToMidnight(oNewDateTime) && 
                SetEndTimeSelect(iRangeIndex - 1,oNewDateTime);
            for(i = 0; i < iMaxRange; i++)
            {
                oStartDateTime = GetStartTimeSelect(i);
                oEndDateTime = GetEndTimeSelect(i);
                if(i < iRangeIndex && oNewDateTime <= oStartDateTime)
                {
                    if(i == 0)
                    {
                        MergeRow(iRangeIndex);
                        bMergeFirst = true
                    }
                    else
                    {
                        MergeRow(i);
                        i--
                    }
                    iRangeIndex--
                }
                else
                    if(i > iRangeIndex && oNewDateTime >= oStartDateTime)
                    {
                        MergeRow(i);
                        i--
                    }
                if(i == iMaxRange - 1 && iRangeIndex == iMaxRange - 1 && oStartDateTime > oEndDateTime)
                    if(CheckEndNotCloseToMidnight(oNewDateTime))
                    {
                        oOriginalValue.setTime(oNewDateTime.getTime());
                        oOriginalValue.setMinutes(oNewDateTime.getMinutes() + TemplateApptsStartEvery);
                        SetEndTimeSelect(i,oOriginalValue)
                    }
                    else
                    {
                        var errorString = ErrorInRow.replace("{0}",iRangeIndex);
                        alert(errorString);
                        SetStartTimeSelect(iRangeIndex,oOriginalValue)
                    }
                else
                    if(i == iRangeIndex && (oStartDateTime.toString() == oEndDateTime.toString() || !EnableEffort && oNewDateTime <= oStartDateTime))
                    {
                        MergeRow(i);
                        iRangeIndex--
                    }
            }
        }
        else
        {
            SetStartTimeSelect(iRangeIndex,oOriginalValue);
            return
        }
    else
        if(iRangeIndex > 0 && !bMergeFirst)
        {
            SetEndTimeSelect(iRangeIndex - 1,oNewDateTime);
            formUpdateElements(iRangeIndex - 1)
        }
    MergeValidForMergeRow(iRangeIndex);
    MergeValidForMergeRow(iRangeIndex + 1);
    formUpdateElements(iRangeIndex)
}
function OnEndTimeChange(iRangeIndex)
{
    window.setTimeout("OnEndTimeChangeInternal(" + iRangeIndex + ")",1)
}
function OnEndTimeChangeInternal(iRangeIndex)
{
    var sRangeOverlaps = "",
        sWarnMessage,
        oStartDateTime,
        oEndDateTime,
        oNewDateTime,
        oOriginalValue,
        i,
        bMergeFirst = false;
    oNewDateTime = GetEndTimeSelect(iRangeIndex);
    if(iRangeIndex + 1 < iMaxRange)
        oOriginalValue = GetStartTimeSelect(iRangeIndex + 1);
    else
    {
        oOriginalValue = new Date(TemplateEndTime.toString());
        oStartDateTime = GetStartTimeSelect(0);
        if(oOriginalValue <= oStartDateTime)
        {
            oOriginalValue.setTime(oStartDateTime.getTime());
            oOriginalValue.setMinutes(oStartDateTime.getMinutes() + TemplateApptsStartEvery)
        }
        oStartDateTime.setMinutes(oStartDateTime.getMinutes() + TemplateApptsStartEvery);
        if(oNewDateTime < oStartDateTime)
        {
            var sMsg = EndTimeEarlier.replace("{0}",TemplateApptsStartEvery);
            alert(sMsg);
            SetEndTimeSelect(iRangeIndex,oOriginalValue);
            formUpdateElements(iRangeIndex);
            return
        }
    }
    for(i = 0; i < iMaxRange; i++)
    {
        oStartDateTime = GetStartTimeSelect(i);
        oEndDateTime = GetEndTimeSelect(i);
        if(i <= iRangeIndex && oNewDateTime < oEndDateTime)
        {
            sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
            sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
        }
        else
            if(i == iRangeIndex && oNewDateTime.toString() == oStartDateTime.toString())
            {
                sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oOriginalValue) + "\n";
                sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
            }
            else
                if(i > iRangeIndex && oNewDateTime >= oEndDateTime)
                {
                    sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oEndDateTime) + "\n";
                    sWarnMessage = OverlapMessage + "\n" + sRangeOverlaps + MergeMessage
                }
                else
                    if(i == 0 && oNewDateTime <= oStartDateTime)
                    {
                        sRangeOverlaps += FormatShortDateTime(oStartDateTime) + " - " + FormatShortDateTime(oOriginalValue) + "\n";
                        sWarnMessage = ConflictMessage + "\n" + sRangeOverlaps + MergeMessage
                    }
    }
    if(sRangeOverlaps != "")
        if(confirm(sWarnMessage))
        {
            iRangeIndex + 1 < iMaxRange && CheckStartNotCloseToMidnight(oNewDateTime) && 
                SetStartTimeSelect(iRangeIndex + 1,oNewDateTime);
            for(i = 0; i < iMaxRange; i++)
            {
                oStartDateTime = GetStartTimeSelect(i);
                oEndDateTime = GetEndTimeSelect(i);
                if(i == 0 && iRangeIndex == 0 && oStartDateTime >= oEndDateTime)
                    if(CheckStartNotCloseToMidnight(oNewDateTime))
                    {
                        oOriginalValue.setTime(oNewDateTime.getTime());
                        oOriginalValue.setMinutes(oNewDateTime.getMinutes() - TemplateApptsStartEvery);
                        SetStartTimeSelect(i,oOriginalValue);
                        oStartDateTime = GetStartTimeSelect(i)
                    }
                    else
                    {
                        var errorString = ErrorInRow.replace("{0}",iRangeIndex);
                        alert(errorString);
                        SetEndTimeSelect(iRangeIndex,oOriginalValue)
                    }
                else
                    if(i <= iRangeIndex && oNewDateTime < oEndDateTime)
                    {
                        if(i == 0)
                        {
                            MergeRow(iRangeIndex);
                            bMergeFirst = true
                        }
                        else
                        {
                            MergeRow(i);
                            i--
                        }
                        iRangeIndex--;
                        oStartDateTime = GetStartTimeSelect(i);
                        oEndDateTime = GetEndTimeSelect(i)
                    }
                    else
                        if(i > iRangeIndex && oNewDateTime >= oEndDateTime)
                        {
                            MergeRow(i);
                            i--;
                            SetEndTimeSelect(i,oNewDateTime);
                            iRangeIndex < iMaxRange - 1 && 
                                SetStartTimeSelect(i + 1,oNewDateTime);
                            oStartDateTime = GetStartTimeSelect(i);
                            oEndDateTime = GetEndTimeSelect(i)
                        }
                if(i == iRangeIndex && oEndDateTime <= oStartDateTime)
                {
                    MergeRow(i);
                    iRangeIndex--
                }
            }
        }
        else
        {
            SetEndTimeSelect(iRangeIndex,oOriginalValue);
            return
        }
    else
        if(iRangeIndex + 1 < iMaxRange)
        {
            SetStartTimeSelect(iRangeIndex + 1,oNewDateTime);
            formUpdateElements(iRangeIndex + 1)
        }
    MergeValidForMergeRow(iRangeIndex);
    MergeValidForMergeRow(iRangeIndex + 1);
    formUpdateElements(iRangeIndex)
}
function OnCapacityLostFocus(iRangeIndex)
{
    return ValidCapacityRange(iRangeIndex,1e-4,999999999)
}
function OnUpdateTotals()
{
    var total = 0,
        workTotal = 0,
        breakTotal = 0;
    for(i = 0; i < iMaxRange; i++)
    {
        var rangeDuration = GetRangeDuration(i);
        total += rangeDuration;
        if(document.getElementById("Type" + i).value == "break")
            breakTotal += rangeDuration;
        else
            workTotal += rangeDuration
    }
    $get("totalhours").innerHTML = formatDuration(total);
    $get("workhours").innerHTML = formatDuration(workTotal);
    $get("breakhours").innerHTML = formatDuration(breakTotal)
}
function HidePopup()
{
    !IsNull(_oPopupMenu) && 
        _oPopupMenu.hide()
}
function onMenuButton(eventObj)
{
    var sRangeIndex = eventObj.target.getAttribute("rangeIndex"),
        iRangeIndex = parseInt(sRangeIndex,10);
    _oPopupMenu = Mscrm.Menu.createMenu();
    var oInsertButton = document.getElementById("InsertButton" + sRangeIndex);
    if(!IsNull(oInsertButton) && oInsertButton.style.display != "none" && !oInsertButton.disabled)
    {
        var insertMenuItem = Mscrm.MenuItem.createMenuItem(InsertActionName);
        insertMenuItem.set_iconPath("/_imgs/ico_16_split.gif");
        insertMenuItem.set_tooltip(InsertActionName);
        insertMenuItem.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
        insertMenuItem.set_reference(iRangeIndex);
        insertMenuItem.set_actionCallback(Function.createDelegate(this,InsertMenuAction));
        _oPopupMenu.addItem(insertMenuItem)
    }
    var oStartDateTime = GetStartTimeSelect(iRangeIndex),
        oEndDateTime = GetEndTimeSelect(iRangeIndex),
        RangeDiff = (oEndDateTime - oStartDateTime) / 6e4;
    if(TemplateApptsStartEvery < RangeDiff)
    {
        var splitMenuItem = Mscrm.MenuItem.createMenuItem(SplitActionName);
        splitMenuItem.set_iconPath("/_imgs/ico_16_split.gif");
        splitMenuItem.set_tooltip(SplitActionName);
        splitMenuItem.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
        splitMenuItem.set_reference(iRangeIndex);
        splitMenuItem.set_actionCallback(Function.createDelegate(this,SplitMenuAction));
        _oPopupMenu.addItem(splitMenuItem)
    }
    if(iRangeIndex > 0)
    {
        var deleteMenuItem = Mscrm.MenuItem.createMenuItem(MergeActionName);
        deleteMenuItem.set_iconPath("/_imgs/ico_16_remove.gif");
        deleteMenuItem.set_tooltip(MergeActionName);
        deleteMenuItem.set_stylePrefix(Mscrm.MenuStyles.lookupMruStylePrefix);
        deleteMenuItem.set_reference(iRangeIndex);
        deleteMenuItem.set_actionCallback(Function.createDelegate(this,DeleteMenuAction));
        _oPopupMenu.addItem(deleteMenuItem)
    }
    var oMenuButton = document.getElementById("MenuButton" + sRangeIndex),
        xyPos = Mscrm.Utilities.getXYPos(oMenuButton,!Mscrm.Utilities.get_isLeftToRight()),
        x = parseInt(xyPos["x"],10),
        y = parseInt(xyPos["y"],10) + oMenuButton.scrollHeight,
        w = oInsertButton.scrollWidth;
    _oPopupMenu.set_top(y);
    _oPopupMenu.set_left(x);
    _oPopupMenu.set_width(w);
    _oPopupMenu.show()
}
function ToggleCapacity(type,display)
{
    var oElement,
        oParent;
    for(i = 0; i < iMaxRange; i++)
    {
        oElement = document.getElementById("Effort" + i);
        if(oElement)
        {
            oParent = oElement.parentNode;
            oParent.style.display = display;
            var elementHTML = RenderInput(type,oElement.value,"Effort" + i,"OnCapacityLostFocus(" + i + ");",null,EffortRuleName);
            oParent.innerHTML = elementHTML
        }
        else
        {
            emptyTD = XUI.Html.DomUtils.GetPrevSibling($get("StartTimeTD" + i));
            if(!IsNull(emptyTD))
                emptyTD.style.display = display
        }
        oElement = document.getElementById("MenuButton" + i);
        ToggleImage(type,oElement)
    }
}
function ToggleImage(type,oImg)
{
    if(!IsNull(oImg) && oImg.tagName == "IMG" && oImg.className == "menuButton")
        if(type != "hidden")
            oImg.style.display = "block";
        else
            oImg.style.display = "none"
}
function ToggleMenuItem(type,oSpan)
{
    if(!IsNull(oSpan) && oSpan.tagName == "SPAN")
        if(type != "hidden")
            oSpan.style.display = "block";
        else
            oSpan.style.display = "none"
}
function RenderButton(sOnClick,sId,sName,sClass,sDisplay,rangeIndex)
{
    return '<button style="display:' + sDisplay + '" class="' + sClass + '" tabIndex="0" onclick="' + sOnClick + '" id="' + sId + '" rangeIndex="' + rangeIndex + '" type="button">' + sName + "</button>"
}
function RenderImage(sBaseUrl,altTag,sOnClick,sId,sClass,sDisplay,rangeIndex)
{
    return '<img alt="' + altTag + '" src="' + sBaseUrl + 'Off.gif" style="cursor:pointer; display:' + sDisplay + '" class="' + sClass + '" tabIndex="0" onclick="' + sOnClick + '" id="' + sId + '"onmouseover="this.src=\'' + sBaseUrl + "On.gif';\" onmouseout=\"this.src='" + sBaseUrl + 'Off.gif\';" rangeIndex="' + rangeIndex + '">'
}
function RenderMenuItem(sOnClick,sId,sName,sDisplay)
{
    return '<span onclick="' + sOnClick + '" id="' + sId + '" style="display:' + sDisplay + '">' + sName + "</span>"
}
function RenderInput(sInputType,sValue,sId,sOnBlur,sOnFocus,sTitle)
{
    var sEvents = "";
    if(!IsNull(sOnBlur))
        sEvents += '" onblur="' + sOnBlur + '"';
    if(!IsNull(sOnFocus))
        sEvents += ' onfocus="' + sOnFocus + '"';
    if(!IsNull(sTitle) && sInputType != "hidden")
        sEvents += '" title="' + sTitle + '"';
    return '<input type="' + sInputType + '" tabIndex="0" size="2" value="' + sValue + '" id="' + sId + '"' + sEvents + ">"
}
function RenderTimeTd(TagNameBase,iRangeIndex,oDateTime,sClassName)
{
    var oElement,
        oTd = document.createElement("TD");
    oTd.className = sClassName;
    oTd.id = TagNameBase + "TD" + iRangeIndex;
    oTd.innerHTML = BuildTimeSelect(TagNameBase + "Select",iRangeIndex,oDateTime);
    var events = {change:function()
        {
            eval(GetTimeSelectEventHandlerNameFromClass(TagNameBase,iRangeIndex))
        }};
    Mscrm.FormInputControl.DateTimeBehavior.registerDateTimeComponents(oTd,events);
    return oTd
}
function BuildTimeSelect(sIdBase,iRangeIndex,oDefaultTime)
{
    var oElement;
    if(sIdBase.indexOf("Start") != -1)
        oElement = XUI.Html.DomUtils.GetFirstChild($get("RenderStartTimeControl")).cloneNode(true);
    else
        oElement = XUI.Html.DomUtils.GetFirstChild($get("RenderEndTimeControl")).cloneNode(true);
    oElement.id = sIdBase + iRangeIndex;
    oElement.setAttribute("initialValue",FormatUtcDate(oDefaultTime));
    oElement.setAttribute("initialDisableInit","false");
    return XUI.Html.GetOuterHTML(oElement)
}
function GetRangeTime(sIdBase,iRangeIndex)
{
    var oElement = Mscrm.FormControlInputBehavior.GetBehavior(sIdBase + iRangeIndex);
    if(oElement != null)
        if(IsNull(oElement.get_dataValue()))
            return ParseClientDateTime(oElement.get_element().getAttribute("initialValue"));
        else
            return new Date(oElement.get_dataValue());
    else
    {
        var errorString = ErrorInRow.replace("{0}",sIdBase + iRangeIndex);
        alert(errorString)
    }
}
function GetStartTimeSelect(iRangeIndex)
{
    return GetRangeTime("StartTimeSelect",iRangeIndex)
}
function GetEndTimeSelect(iRangeIndex)
{
    var oEndTime = GetRangeTime("EndTimeSelect",iRangeIndex);
    _oBaseDate = GetStartTimeSelect(0);
    if(oEndTime.getHours() == 0 && oEndTime.getMinutes() == 0)
        getDatePartDateObject(oEndTime).toString() == getDatePartDateObject(_oBaseDate).toString() && 
            oEndTime.setHours(24);
    else
        if(_oBaseDate != null)
            oEndTime = newDate(_oBaseDate.getFullYear(),_oBaseDate.getMonth(),_oBaseDate.getDate(),oEndTime.getHours(),oEndTime.getMinutes(),oEndTime.getSeconds());
    return oEndTime
}
function SetRangeTime(sIdBase,iRangeIndex,oDateTime)
{
    var oElement = Mscrm.FormControlInputBehavior.GetBehavior(sIdBase + iRangeIndex);
    if(oElement != null)
    {
        IsNull(oElement.get_dataValue()) && 
            oElement.get_element().setAttribute("initialValue",FormatUtcDate(oDateTime));
        oElement.set_dataValue(oDateTime)
    }
    else
    {
        var errorString = ErrorInRow.replace("{0}",sIdBase + iRangeIndex);
        alert(errorString)
    }
}
function SetStartTimeSelect(iRangeIndex,oDateTime)
{
    SetRangeTime("StartTimeSelect",iRangeIndex,oDateTime)
}
function SetEndTimeSelect(iRangeIndex,oDateTime)
{
    SetRangeTime("EndTimeSelect",iRangeIndex,oDateTime)
}
function GetRangeDuration(iRangeIndex)
{
    var oStartDateTime = GetStartTimeSelect(iRangeIndex),
        oEndDateTime = GetEndTimeSelect(iRangeIndex);
    return (oEndDateTime - oStartDateTime) / 6e4
}
function RenumberTimeSelect(sIdBase,OldRangeIndex,NewRangeIndex)
{
    var oElement;
    oElement = document.getElementById(sIdBase + OldRangeIndex);
    if(oElement != null)
    {
        var parentNode = oElement.parentNode,
            oldBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior(oElement),
            dataValue = oldBehavior.get_dataValue(),
            tagNameBase = sIdBase.substr(0,sIdBase.length - "Select".length);
        oldBehavior.dispose();
        parentNode.innerHTML = BuildTimeSelect(sIdBase,NewRangeIndex,dataValue);
        var events = {change:function()
            {
                eval(GetTimeSelectEventHandlerNameFromClass(tagNameBase,NewRangeIndex))
            }};
        Mscrm.FormInputControl.DateTimeBehavior.registerDateTimeComponents(parentNode,events)
    }
    else
    {
        var errorString = ErrorInRow.replace("{0}",sIdBase + iRangeIndex);
        alert(errorString)
    }
}
function RenumberStartTimeSelect(OldRangeIndex,NewRangeIndex)
{
    RenumberTimeSelect("StartTimeSelect",OldRangeIndex,NewRangeIndex)
}
function RenumberEndTimeSelect(OldRangeIndex,NewRangeIndex)
{
    RenumberTimeSelect("EndTimeSelect",OldRangeIndex,NewRangeIndex)
}
function GetTimeSelectEventHandlerNameFromClass(sIdBase,iRangeIndex)
{
    return "On" + sIdBase.replace("Select","") + "Change(" + iRangeIndex + ")"
}
function CheckEndNotCloseToMidnight(oNewValue)
{
    var oNextEndDateTime = new Date(oNewValue.toString());
    oNextEndDateTime.setMinutes(oNextEndDateTime.getMinutes() + TemplateApptsStartEvery);
    return oNewValue.getDay() == oNextEndDateTime.getDay()
}
function CheckStartNotCloseToMidnight(oNewValue)
{
    var oNextStartDateTime = new Date(oNewValue.toString());
    oNextStartDateTime.setMinutes(oNextStartDateTime.getMinutes() - TemplateApptsStartEvery);
    return oNewValue.getDay() == oNextStartDateTime.getDay()
}
function getDatePartDateObject(oDateTime)
{
    return newDate(oDateTime.getFullYear(),oDateTime.getMonth(),oDateTime.getDate())
}
function FormatShortDateTime(oDateTime)
{
    return timeToString(oDateTime,0)
}
function ParseClientDateTime(sDateTime)
{
    return ParseUtcDate(sDateTime)
}
function ParseClientTimeSpan(sDateTime)
{
    var Minutes = parseInt(sDateTime.substr(0,2),10) * 60 + parseInt(sDateTime.substr(3,2),10);
    return Minutes
}
function GetSplitTime(oStartDateTime,oEndDateTime)
{
    var TimeDiff = oEndDateTime - oStartDateTime;
    Minutes = TimeDiff / 6e4;
    Minutes /= 2;
    iRemainder = Minutes % TemplateApptsStartEvery;
    Minutes -= iRemainder;
    if(iRemainder > TemplateApptsStartEvery / 2)
        Minutes += TemplateApptsStartEvery;
    oStartDateTime.setMinutes(oStartDateTime.getMinutes() + Minutes);
    return oStartDateTime
}
function GetBreakTime(iRangeIndex,iDuration)
{
    var oBreakTime = GetStartTimeSelect(iRangeIndex);
    if(!iDuration)
    {
        var iRangeDuration = GetRangeDuration(iRangeIndex);
        if(iRangeDuration < 90)
            oBreakTime.setMinutes(oBreakTime.getMinutes() + TemplateApptsStartEvery);
        else
            oBreakTime.setMinutes(oBreakTime.getMinutes() + 30)
    }
    else
        oBreakTime.setMinutes(oBreakTime.getMinutes() + iDuration);
    return oBreakTime
}
function CalculateEndTime(oDateTime,iDuration)
{
    oDateTime.setMinutes(oDateTime.getMinutes() + iDuration);
    return FormatShortDateTime(oDateTime)
}
function LoadFromXml()
{
    var oChildNode,
        type,
        start,
        duration,
        effort,
        toggleEffort = false,
        lineBeforeBreak = false,
        lineAfterBreak = false,
        oXml = XUI.Xml.LoadXml($get("serverData").value),
        i = 0;
    XUI.Xml.DomUtils.ForEachChild(XUI.Xml.DomUtils.GetFirstChild(oXml),Function.createDelegate(this,function(oChildNode)
    {
        type = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oChildNode,"type",null));
        start = new Date(ParseClientDateTime(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oChildNode,"start",null))));
        duration = ParseClientTimeSpan(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oChildNode,"duration",null)));
        if(type == "effort" && XUI.Xml.DomUtils.GetNextSibling(XUI.Xml.DomUtils.GetNextSibling(XUI.Xml.DomUtils.GetNextSibling(XUI.Xml.DomUtils.GetFirstChild(oChildNode)))))
        {
            effort = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oChildNode,"effort",null));
            if(effort != DefaultEffort)
                toggleEffort = true;
            lineBeforeBreak = true
        }
        else
        {
            effort = DefaultEffort;
            lineBeforeBreak = false
        }
        if(!lineBeforeBreak)
        {
            InsertRule(iMaxRange - 1,start,duration);
            lineAfterBreak = true
        }
        else
            if(i > 0)
            {
                if(lineAfterBreak)
                {
                    MergeRow(iMaxRange - 1);
                    lineAfterBreak = false
                }
                RenderRow(type,iMaxRange - 1,"cellBottom",start,effort);
                iMaxRange++
            }
            else
                if(effort != DefaultEffort)
                    document.getElementById("Effort0").value = effort;
        i++
    }));
    toggleEffort && 
        OnEffortToggle()
}
function capacityFormValue(iRangeIndex)
{
    var capacity = Mscrm.NumberUtility.locStringToFloat(Trim(document.getElementById("Effort" + iRangeIndex).value));
    return isNaN(capacity) ? null : capacity
}
function isFloatingNumber(fValue)
{
    if(IsNull(fValue))
        return false;
    if(fValue.toString().search(/^\d*\.?\d*$/) != -1)
        return true;
    return false
}
function isInRange(nValue,lowerlimit,upperlimit)
{
    if(nValue == "")
        return false;
    if(nValue < lowerlimit || nValue > upperlimit)
        return false;
    return true
}
function ValidCapacityRange(index,low,high)
{
    var error = false,
        fValue = null,
        field = $get("Effort" + index);
    fValue = capacityFormValue(index);
    if(IsNull(fValue))
        error = true;
    if(fValue != "")
    {
        if(!isFloatingNumber(fValue))
            error = true;
        if(!isInRange(fValue,low,high))
            error = true
    }
    else
        error = true;
    if(error)
    {
        var sMsg = formatString(ValidRangeMessage,EffortRuleName,low,high);
        alert(sMsg);
        if(EnableEffort)
        {
            field.focus();
            field.select()
        }
        return false
    }
    return true
}
