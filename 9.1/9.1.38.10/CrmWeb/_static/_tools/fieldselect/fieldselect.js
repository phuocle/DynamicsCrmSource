
var _bFieldSelectPrimaryField = false,
    _iFieldSelectHeight = 200,
    _iAlternateKeyFieldSelectHeight = 400,
    _sFieldSelectLeftTitle = LOCID_TOOLS_AVAILABLE_FIELDS,
    _sFieldSelectRightTitle = LOCID_TOOLS_FIELDS_RESULTS,
    _bFieldSelectShowUp = true,
    _bFieldSelectShowDown = true,
    _alternateKeyViewPageMode = false,
    _disableAddButtonFlag = false,
    _disableRemoveButtonFlag = false,
    _sMoveRightTitle = Xrm.Internal.getResourceString("Web.Tools.ServiceManagement.CaseSettings.Label_MoveRight"),
    _sMoveLeftTitle = Xrm.Internal.getResourceString("Web.Tools.ServiceManagement.CaseSettings.Label_MoveLeft"),
    _iUsedAry,
    _divFieldSelect,
    _objList,
    _rtnObjList,
    _isStateTransition = false,
    _isEntityAttributes = false;
if(typeof _bView != "undefined")
    _alternateKeyViewPageMode = _bView;
function drawFieldSelect(sAvailAry,sSelectedAry,isStateTransition,isEntityAttributes)
{
    var encodedHeight = CrmEncodeDecode.CrmHtmlAttributeEncode(_iFieldSelectHeight),
        encodedAlternateKeysHeight = CrmEncodeDecode.CrmHtmlAttributeEncode(_iAlternateKeyFieldSelectHeight);
    _isStateTransition = isStateTransition;
    _isEntityAttributes = isEntityAttributes;
    if(typeof LOCID_CHD_CLOSE_PRT_CLOSE != "undefined")
    {
        _sFieldSelectLeftTitle = _sFieldSelectLeftTitleforAttributes;
        _sFieldSelectRightTitle = _sFieldSelectRightTitleforAttributes
    }
    if($get("divFieldSelect") != null)
        $get("divFieldSelect").innerHTML = "<table cellspacing='5' cellpadding='0' style='table-layout:fixed;width:100%;-moz-user-select: none;'><col width='*'><col width='50px'><col width='*'><tr><td><b class='label'>" + CrmEncodeDecode.CrmHtmlEncode(_sFieldSelectLeftTitle) + "</b></td><td>&nbsp;</td><td><b class='label'>" + CrmEncodeDecode.CrmHtmlEncode(_sFieldSelectRightTitle) + "</b></td></tr><tr><td><div id='objList' class='divList' style='height:" + encodedHeight + "px;' tabIndex=0 onfocus='handleListFocus(new Sys.UI.DomEvent(event))' role='listbox' aria-multiselectable='true' onkeydown='handleListKey(new Sys.UI.DomEvent(event))' hidefocus='true'></div></td><td align='center'><button id='btnRight' type='button' onclick='MoveRight();' aria-label='" + CrmEncodeDecode.CrmHtmlAttributeEncode(_sMoveRightTitle) + "' class='ms-crm-RefreshDialog-Button' style='min-width: 40px;'>" + CrmEncodeDecode.CrmHtmlEncode(">>") + "</button><p><button id='btnLeft' type='button' onclick='MoveLeft();' aria-label='" + CrmEncodeDecode.CrmHtmlAttributeEncode(_sMoveLeftTitle) + "' class='ms-crm-RefreshDialog-Button' style='min-width: 40px;'>" + CrmEncodeDecode.CrmHtmlEncode("<<") + "</button>" + (_bFieldSelectShowUp ? "<p><button id='btnUp' type='button' style='width: 40px;' onclick='MoveUp();'>Up</button>" : "") + (_bFieldSelectShowDown ? "<p><button id='btnDown' type='button' style='width: 40px;' onclick='MoveDown();'>Down</button>" : "") + "</td><td><div id='rtnObjList' class='divList' style='height:" + encodedHeight + "px;' tabIndex=0 onfocus='handleListFocus(new Sys.UI.DomEvent(event))'  role='listbox' aria-multiselectable='true' onkeydown='handleListKey(new Sys.UI.DomEvent(event))' hidefocus='true'></div></td></tr></table>";
    if($get("divAlternateKeysFieldSelect") != null)
        $get("divAlternateKeysFieldSelect").innerHTML = "<table cellspacing='5' cellpadding='0' style='table-layout:fixed;width:100%;-moz-user-select: none;'><col width='*'><col width='100px'><col width='*'><tr><td><b class='label'>" + CrmEncodeDecode.CrmHtmlEncode(_sFieldSelectLeftTitle) + "</b></td><td>&nbsp;</td><td><b class='label'>" + CrmEncodeDecode.CrmHtmlEncode(_sFieldSelectRightTitle) + "</b></td></tr><tr><td><div id='objList' class='divList' style='height:" + encodedAlternateKeysHeight + "px;' tabIndex=0 onfocus='handleListFocus(new Sys.UI.DomEvent(event))' role='listbox' aria-multiselectable='true' onkeydown='handleListKey(new Sys.UI.DomEvent(event))' hidefocus='true'></div></td><td align='center'><button id='btnRight' type='button' accesskey='a' style='width: 80px;' onclick='MoveRight();'>" + CrmEncodeDecode.CrmHtmlEncode(LOCID_KEYSUTL_ADDKEYS + " > ") + "</button><p><button id='btnLeft' type='button' accesskey='r' style='width: 80px;' onclick='MoveLeft();'>" + CrmEncodeDecode.CrmHtmlEncode(" < " + LOCID_KEYSUTL_REMOVEKEYS) + "</button></td><td><div id='rtnObjList' class='divList' style='height:" + encodedAlternateKeysHeight + "px;' tabIndex=0 onfocus='handleListFocus(new Sys.UI.DomEvent(event))' role='listbox' aria-multiselectable='true' onkeydown='handleListKey(new Sys.UI.DomEvent(event))' hidefocus='true'></div></td></tr></table>";
    if(_alternateKeyViewPageMode == true)
    {
        $get("btnRight").disabled = true;
        $get("btnLeft").disabled = true
    }
    _objList = $get("objList");
    _rtnObjList = $get("rtnObjList");
    _objList.innerHTML = "<table cellpadding='2' cellspacing='0' style='width:100%;-moz-user-select: none;'></table>";
    for(var iAvailLen = sAvailAry[0].length,
        i = 0; i < iAvailLen; i++)
        if(_isStateTransition)
            CreateNewRow(i,sAvailAry[0][i],sAvailAry[0][i],sAvailAry[1][i],_objList,false,sAvailAry[2][i]);
        else
            if(_isEntityAttributes)
                CreateNewRow(i,sAvailAry[0][i],sAvailAry[0][i],sAvailAry[1][i],_objList,false,sAvailAry[2][i]);
            else
                CreateNewRow(i,sAvailAry[0][i],sAvailAry[0][i],sAvailAry[1][i],_objList,false);
    _rtnObjList.innerHTML = "<table cellpadding='2' cellspacing='0' style='width:100%;-moz-user-select: none;'></table>";
    var iSelectedLen;
    if(sSelectedAry)
        iSelectedLen = sSelectedAry[0].length;
    else
        iSelectedLen = 0;
    EnableDisableButtons(true,true);
    _iUsedAry = new Array(iAvailLen);
    for(var i = 0; i < iAvailLen; i++)
        _iUsedAry[i] = 0;
    for(var j = 0; j < iSelectedLen; j++)
    {
        var bFound = false;
        for(i = 0; i < iAvailLen; i++)
            if(sAvailAry[0][i] == sSelectedAry[0][j])
            {
                for(var iOffset = 0,
                    k = 0; k < i; k++)
                    iOffset += _iUsedAry[k];
                var row = XUI.Html.DomUtils.GetFirstChild(_objList).rows[i - iOffset];
                if(sAvailAry[0][i] == row.name)
                {
                    row.selected = 1;
                    MoveRight();
                    bFound = true;
                    _iUsedAry[i] = 1;
                    break
                }
            }
        if(0 == j && _bFieldSelectPrimaryField)
            XUI.Html.DomUtils.GetFirstChild(_rtnObjList).rows[0].disabled = true;
        if(bFound != true)
            break
    }
    _bFieldSelectPrimaryField && 0 == iSelectedLen && 
        alert(LOCID_CANT_MOVE_PRIMARY_FIELD)
}
function drawKeySelected(sSelectedKeyAry)
{
    var _rtnObjList;
    _rtnObjList = $get("rtnObjList");
    rtnObjList.innerHTML = "<table cellpadding='2' cellspacing='0' style='width:100%;-moz-user-select: none;'></table>";
    for(var iSelectedKeyLen = sSelectedKeyAry[0].length,
        i = 0; i < iSelectedKeyLen; i++)
        CreateNewRow(i,sSelectedKeyAry[0][i],sSelectedKeyAry[0][i],sSelectedKeyAry[1][i],_rtnObjList,false,sSelectedKeyAry[2][i])
}
function handleListFocus(e)
{
    if(_alternateKeyViewPageMode)
        return;
    var oTable = XUI.Html.DomUtils.GetFirstChild(e.target);
    IsNull(oTable.lastSelected) && oTable.rows.length > 0 && 
        HandleSelectRow(oTable.rows[0],false,false)
}
function handleListKey(e)
{
    var o = e.target;
    while(o.tagName != "DIV")
        o = o.parentNode;
    var oList = o,
        oTable = XUI.Html.DomUtils.GetFirstChild(o);
    o = oTable.lastSelected;
    switch(e.keyCode)
    {
        case KEY_DOWN:
            if(o)
            {
                var oNextSibling = XUI.Html.DomUtils.GetNextSibling(o);
                if(oNextSibling)
                {
                    if(e.ctrlKey && oNextSibling.selected == 1)
                    {
                        HandleSelectRow(o,e.ctrlKey,e.shiftKey);
                        oTable.lastSelected = oNextSibling;
                        XUI.Html.DomUtils.GetFirstChild(oNextSibling).className = "currSel"
                    }
                    else
                        HandleSelectRow(oNextSibling,e.ctrlKey,e.shiftKey);
                    ScrollListDown(oList,oNextSibling);
                    var nextNodeChild = XUI.Html.DomUtils.GetFirstChild(oNextSibling),
                        currentNodeChild = o.firstChild;
                    currentNodeChild.setAttribute("tabindex",-1);
                    nextNodeChild.setAttribute("tabindex",0);
                    nextNodeChild.focus();
                    e.preventDefault();
                    e.stopPropagation()
                }
            }
            break;
        case KEY_UP:
            if(o)
            {
                var oPrevSibling = XUI.Html.DomUtils.GetPrevSibling(o);
                if(oPrevSibling)
                {
                    if(e.ctrlKey && oPrevSibling.selected == 1)
                    {
                        HandleSelectRow(o,e.ctrlKey,e.shiftKey);
                        oTable.lastSelected = oPrevSibling;
                        XUI.Html.DomUtils.GetFirstChild(oPrevSibling).className = "currSel"
                    }
                    else
                        HandleSelectRow(oPrevSibling,e.ctrlKey,e.shiftKey);
                    ScrollListUp(oList,oPrevSibling);
                    var previousNodeChild = XUI.Html.DomUtils.GetFirstChild(oPrevSibling),
                        currentNodeChild = o.firstChild;
                    currentNodeChild.setAttribute("tabindex",-1);
                    previousNodeChild.setAttribute("tabindex",0);
                    previousNodeChild.focus();
                    e.preventDefault();
                    e.stopPropagation()
                }
            }
            break;
        case KEY_SPACE:
            if(o)
            {
                var i = o.rowIndex + 1,
                    oSel = null;
                while(i < oTable.rows.length)
                {
                    if(oTable.rows[i].selected == 0)
                    {
                        oSel = oTable.rows[i];
                        break
                    }
                    i++
                }
                i = o.rowIndex - 1;
                while(!oSel && i >= 0)
                {
                    if(oTable.rows[i].selected == 0)
                    {
                        oSel = oTable.rows[i];
                        break
                    }
                    i--
                }
                MoveToOtherList(e);
                oList.focus();
                oSel && 
                    HandleSelectRow(oSel,false,false);
                e.preventDefault();
                e.stopPropagation()
            }
            break
    }
}
function ScrollListDown(oList,oRow)
{
    var position = oRow.offsetTop + oRow.offsetHeight + 2,
        listHeight = oList.offsetHeight;
    if(oList.scrollTop < position - listHeight)
        oList.scrollTop = position - listHeight
}
function ScrollListUp(oList,oRow)
{
    var position = oRow.offsetTop;
    if(oList.scrollTop > position)
        oList.scrollTop = position
}
function CreateNewRow(iIndex,sId,sName,sDisplay,oDestList,bReinsert,sStatecode)
{
    var oTable = XUI.Html.DomUtils.GetFirstChild(oDestList),
        oRow,
        oCell;
    if(bReinsert)
    {
        for(var iLenDestList = _iUsedAry.length,
            iNewLoc = 0,
            i = iIndex; -1 < i; i--)
        {
            for(var iOffset = 0,
                k = 0; k < i; k++)
                iOffset += _iUsedAry[k];
            _iUsedAry[i] = 0;
            var iNewIndex = i - iOffset;
            if(0 == iNewIndex || parseInt(oTable.rows[iNewIndex - 1].cells[0].getAttribute("index"),10) < iIndex)
            {
                iNewLoc = parseInt(iNewIndex,10);
                break
            }
        }
        oRow = oTable.insertRow([iNewLoc]);
        oCell = oRow.insertCell(-1)
    }
    else
        if(oDestList == _rtnObjList && _isEntityAttributes)
        {
            for(var iNewIndex = oTable.rows.length; -1 < iNewIndex; iNewIndex--)
                if(0 == iNewIndex || parseInt(oTable.rows[iNewIndex - 1].cells[0].getAttribute("index"),10) < iIndex)
                    break;
            oRow = oTable.insertRow([iNewIndex]);
            _iUsedAry[iIndex] = 1;
            oCell = oRow.insertCell(-1)
        }
        else
        {
            if(oDestList == _rtnObjList || -1 == iIndex)
            {
                oRow = oTable.insertRow(-1);
                _iUsedAry[iIndex] = 1
            }
            else
                oRow = oTable.insertRow([iIndex]);
            oCell = oRow.insertCell(-1)
        }
    oCell.id = sId;
    oCell.setAttribute("role","option");
    oCell.setAttribute("index",iIndex);
    oCell.className = "sel";
    oCell.title = CrmEncodeDecode.CrmHtmlDecode(sDisplay);
    if(_isStateTransition)
    {
        oCell.setAttribute("state",sStatecode);
        if(window.LOCID_UI_DIR === "RTL")
            oCell.innerHTML = "<div><img alt='" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "' src='" + CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.getStateIcon(sStatecode)) + "' style='float:right;' /><nobr class='sel-nobr'>" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "</nobr></div>";
        else
            oCell.innerHTML = "<div><img alt='" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "' src='" + CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.SetStatusTransition.getStateIcon(sStatecode)) + "' style='float:left;' /><nobr class='sel-nobr'>" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "</nobr></div>"
    }
    else
        if(_isEntityAttributes)
        {
            oCell.title = CrmEncodeDecode.CrmHtmlDecode(sDisplay);
            oCell.innerHTML = "<nobr class='sel-nobr'>" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "</nobr>"
        }
        else
            oCell.innerHTML = "<nobr class='sel-nobr'>" + CrmEncodeDecode.CrmHtmlEncode(sDisplay) + "</nobr>";
    oRow.name = sName;
    oRow.selected = 0;
    $addHandler(oRow,"click",selectRow);
    $addHandler(oRow,"dblclick",MoveToOtherList)
}
function GetListName(o)
{
    var oId = o.getAttribute("id");
    while(oId != "objList" && oId != "rtnObjList")
    {
        o = o.parentNode;
        oId = o.getAttribute("id")
    }
    return oId
}
function MoveToOtherList(e)
{
    if(GetListName(e.target) == "objList")
        MoveRight();
    else
        MoveLeft()
}
function MoveLeft()
{
    for(var rtnObjListFirstChild = XUI.Html.DomUtils.GetFirstChild(_rtnObjList),
        oRows = rtnObjListFirstChild.rows,
        iLen = oRows.length,
        i = 0; i < iLen; i++)
        if(1 == oRows[i].selected)
        {
            if(_isStateTransition)
                CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_objList,true,oRows[i].cells[0].getAttribute("state"));
            else
                if(_isEntityAttributes)
                    CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_objList,true,oRows[i].cells[0].getAttribute("state"));
                else
                    CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_objList,true);
            rtnObjListFirstChild.deleteRow(i);
            i--;
            iLen--;
            rtnObjListFirstChild.lastSelected = null
        }
    EnableDisableMoveRight();
    _disableRemoveButtonFlag == true && 
        EnableDisableButtons(true,true)
}
function MoveRight()
{
    for(var objListFirstChild = XUI.Html.DomUtils.GetFirstChild(_objList),
        oRows = objListFirstChild.rows,
        iLen = oRows.length,
        moveItemRight = true,
        selectedItemCount = 0,
        i = 0; i < iLen; i++)
        if(1 == oRows[i].selected)
            selectedItemCount++;
    if(_isEntityAttributes && !validateKeyXml(selectedItemCount))
        return;
    moveItemRight = EnableDisableMoveRight(selectedItemCount);
    if(!moveItemRight)
        return;
    for(var i = 0; i < iLen; i++)
        if(1 == oRows[i].selected)
        {
            if(_isStateTransition)
                CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_rtnObjList,false,oRows[i].cells[0].getAttribute("state"));
            else
                if(_isEntityAttributes)
                    CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_rtnObjList,false,oRows[i].cells[0].getAttribute("state"));
                else
                    CreateNewRow(oRows[i].cells[0].getAttribute("index"),oRows[i].cells[0].getAttribute("id"),oRows[i].name,XUI.Html.GetText(oRows[i]),_rtnObjList,false);
            objListFirstChild.deleteRow(i);
            i--;
            iLen--;
            objListFirstChild.lastSelected = null
        }
    EnableDisableMoveRight();
    _disableAddButtonFlag == true && 
        EnableDisableButtons(true,true)
}
function EnableDisableMoveRight(itemCount)
{
    var rtnObjListFirstChild = XUI.Html.DomUtils.GetFirstChild(_rtnObjList),
        oRightRows = 0,
        iRightLen = 0,
        isMultiSelectionAllowed = true,
        moveItem = true;
    if(rtnObjListFirstChild != undefined && rtnObjListFirstChild != null)
    {
        oRightRows = rtnObjListFirstChild.rows;
        if(oRightRows != undefined && oRightRows != null)
            iRightLen = oRightRows.length
    }
    var oArgs = getDialogArguments();
    if(oArgs != undefined && oArgs != null)
    {
        var multipleselection = oArgs.IsMultipleSelectionAllowed;
        if(multipleselection != undefined && multipleselection != null)
            isMultiSelectionAllowed = multipleselection.toLowerCase() == "true" ? true : false
    }
    var rightButton = document.getElementById("btnRight");
    if(isMultiSelectionAllowed != undefined && isMultiSelectionAllowed != null && !isMultiSelectionAllowed)
    {
        if(itemCount != undefined && itemCount != null && itemCount > 1)
        {
            moveItem = false;
            return
        }
        if(iRightLen >= 1)
        {
            moveItem = false;
            rightButton.disabled = true
        }
        else
            rightButton.disabled = false
    }
    else
        if(_isEntityAttributes)
            EnableDisableButtons(true,true);
        else
            rightButton.disabled = false;
    return moveItem
}
function unSelectRows(oDiv)
{
    for(var oRows = XUI.Html.DomUtils.GetFirstChild(oDiv).rows,
        iLen = oRows.length,
        i = 0; i < iLen; i++)
    {
        oRows[i].selected = 0;
        oRows[i].style.backgroundColor = "#ffffff";
        oRows[i].className = ""
    }
}
function selectRow(e)
{
    if(_alternateKeyViewPageMode)
        return;
    HandleSelectRow(e.target,e.ctrlKey,e.shiftKey);
    e.preventDefault();
    e.stopPropagation()
}
function HandleSelectRow(o,ctrlKey,shiftKey)
{
    while(o.tagName != "TR")
        o = o.parentNode;
    var bIsRtnObjList = "rtnObjList" == GetListName(o),
        oTable = XUI.Html.DomUtils.GetFirstChild(bIsRtnObjList ? _rtnObjList : _objList);
    !ctrlKey && !shiftKey && 
        unSelectRows(o.parentNode.parentNode.parentNode);
    if(shiftKey && oTable.lastSelected)
    {
        i = Math.min(oTable.lastSelected.rowIndex,o.rowIndex);
        for(; i <= Math.max(oTable.lastSelected.rowIndex,o.rowIndex); i++)
        {
            oTable.rows[i].selected = 1;
            oTable.rows[i].style.backgroundColor = "";
            oTable.rows[i].className = "ms-crm-Settings-Selected"
        }
    }
    else
        if(ctrlKey && oTable.lastSelected)
        {
            oTable.rows[o.rowIndex].selected = 1;
            oTable.rows[o.rowIndex].style.backgroundColor = "";
            oTable.rows[o.rowIndex].className = "ms-crm-Settings-Selected"
        }
        else
        {
            o.selected = o.selected == 1 ? 0 : 1;
            o.style.backgroundColor = "";
            o.className = "ms-crm-Settings-Selected"
        }
    if(o.selected = o.selected == 1)
        if(_alternateKeyViewPageMode == true)
            EnableDisableButtons(true,true);
        else
            if(bIsRtnObjList)
            {
                EnableDisableButtons(true,false);
                if(oTable.rows.length == 1)
                    _disableRemoveButtonFlag = true
            }
            else
            {
                EnableDisableButtons(false,true);
                if(oTable.rows.length == 1)
                    _disableAddButtonFlag = true
            }
    var oTable = o;
    while(oTable.tagName != "TABLE")
        oTable = oTable.parentNode;
    if(oTable.lastSelected)
        XUI.Html.DomUtils.GetFirstChild(oTable.lastSelected).className = "sel";
    XUI.Html.DomUtils.GetFirstChild(o).className = o.selected == 1 ? "currSel" : "sel";
    oTable.lastSelected = o;
    var isMultiSelection = IsMultiSelection(_rtnObjList);
    if(_bFieldSelectShowUp)
        $get("btnUp").disabled = isMultiSelection;
    if(_bFieldSelectShowDown)
        $get("btnDown").disabled = isMultiSelection
}
function IsMultiSelection(oList)
{
    for(var oTable = XUI.Html.DomUtils.GetFirstChild(oList),
        oRows = oTable.rows,
        iLen = oRows.length,
        iSelectedCount = 0,
        i = 0; i < iLen; i++)
        if(oRows[i].selected == 1)
            iSelectedCount++;
    return iSelectedCount > 1
}
function MoveUp()
{
    for(var oTable = XUI.Html.DomUtils.GetFirstChild(_rtnObjList),
        oRows = oTable.rows,
        iLen = oRows.length,
        iFirstIndex = true == _bFieldSelectPrimaryField ? 2 : 1,
        i = iFirstIndex; i < iLen; i++)
        if(1 == oRows[i].selected)
        {
            var row = oRows[i],
                parent = row.parentNode;
            parent.removeChild(row);
            parent.insertBefore(row,oRows[i - 1]);
            ScrollListUp(_rtnObjList,oTable.rows[i - 1]);
            break
        }
}
function MoveDown()
{
    for(var oTable = XUI.Html.DomUtils.GetFirstChild(_rtnObjList),
        oRows = oTable.rows,
        iLen = oRows.length,
        i = iLen - 2; 0 <= i; i--)
        if(1 == oRows[i].selected)
        {
            var row = oRows[i + 1],
                parent = row.parentNode;
            parent.removeChild(row);
            parent.insertBefore(row,oRows[i]);
            ScrollListDown(_rtnObjList,oTable.rows[i + 1]);
            break
        }
}
function GetReturnList()
{
    for(var oRows = XUI.Html.DomUtils.GetFirstChild(_rtnObjList).rows,
        iLen = oRows.length,
        sRetAry = new Array(iLen),
        i = 0; i < iLen; i++)
        sRetAry[i] = oRows[i].name;
    return sRetAry
}
function GetReturnListOfNames()
{
    for(var oRows = XUI.Html.DomUtils.GetFirstChild(_rtnObjList).rows,
        iLen = oRows.length,
        sRetAry = new Array(iLen),
        i = 0; i < iLen; i++)
        sRetAry[i] = oRows[i].textContent;
    return sRetAry
}
function Partition(A1,p,r,A2,A3,isStateTransition,isEntityAttributes)
{
    var x = A1[p],
        i = p,
        j = r;
    while(true)
    {
        while(A1[j].localeCompare(x) > 0)
            j--;
        while(A1[i].localeCompare(x) < 0)
            i++;
        if(i < j)
            if(x.localeCompare(A1[j]) == 0)
                j--;
            else
            {
                var tmp = A1[i];
                A1[i] = A1[j];
                A1[j] = tmp;
                tmp = A2[i];
                A2[i] = A2[j];
                A2[j] = tmp;
                if(typeof isStateTransition != "undefined" && isStateTransition)
                {
                    tmp = A3[i];
                    A3[i] = A3[j];
                    A3[j] = tmp
                }
                else
                    if(typeof isEntityAttributes != "undefined" && isEntityAttributes)
                    {
                        tmp = A3[i];
                        A3[i] = A3[j];
                        A3[j] = tmp
                    }
            }
        else
            return j
    }
}
function Quicksort(A1,p,r,A2,A3,isStateTransition,isEntityAttributes)
{
    var q;
    if(p < r)
    {
        q = Partition(A1,p,r,A2,A3,isStateTransition,isEntityAttributes);
        Quicksort(A1,p,q,A2,A3,isStateTransition,isEntityAttributes);
        Quicksort(A1,q + 1,r,A2,A3,isStateTransition,isEntityAttributes)
    }
}
function EnableDisableButtons(btnRightFlag,btnLeftFlag)
{
    if(!IsNull($get("btnRight")))
        $get("btnRight").disabled = btnRightFlag;
    if(!IsNull($get("btnLeft")))
        $get("btnLeft").disabled = btnLeftFlag
}
