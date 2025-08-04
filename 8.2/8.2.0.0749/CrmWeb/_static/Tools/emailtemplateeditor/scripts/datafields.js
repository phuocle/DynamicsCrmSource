
var _oDataField;

function AddDataValues(s) {
    if (s) {
        s = s.replace("{!", "");
        s = s.replace("}", "");
        var a = s.split(";"),
            idx,
            oNode,
            sEntLogName,
            sEntDispName,
            sAttrLogName,
            sAttrDispName,
            sDataType;
        for (i = 0; i < a.length - 1; i++) {
            s = a[i];
            idx = s.indexOf(":");
            sEntLogName = s.substring(0, idx);
            sAttrLogName = s.substring(idx + 1).replace("/@name", "");
            oNode = XUI.Xml.SelectSingleNode(_oXml, "/entities/entity[@name = '" + sEntLogName + "']", null);
            sEntDispName = oNode.getAttribute("desc");
            oNode = XUI.Xml.SelectSingleNode(oNode, "select/option[@value = '" + sAttrLogName + "']", null);
            sAttrDispName = XUI.Xml.GetText(oNode);
            sDataType = oNode.getAttribute("datatype");
            AddRow(new ValueObj(sEntLogName, sEntDispName, sAttrLogName, sAttrDispName, sDataType))
        }
        document.getElementsByName("crmDialog")[0].DefaultText.value = a[i]
    }
}

function SelectRow(evt) {
    UnSelectRow();
    var o = evt.target;
    while (o.tagName != "TR")
        o = o.parentNode;
    _oDataField = o;
    ChangeColour()
}

function ChangeColour() {
    _oDataField.style.backgroundColor = "#c4ddff";
    if (_oDataField.childNodes && XUI.DomUtilities.HasChildElements(_oDataField)) {
        var oTd = _oDataField.childNodes[0];
        oTd.style.border = "1px solid";
        oTd.style.paddingRight = "2px";
        oTd.style.paddingLeft = "2px";
        oTd.style.paddingTop = "2px";
        oTd.style.paddingBottom = "2px";
        _oDataField.scrollIntoView(true)
    }
}

function SelectNextRow() {
    if (_oDataField) {
        var _oDataFieldSibling = XUI.Html.DomUtils.GetNextSibling(_oDataField);
        if (!IsNull(_oDataFieldSibling)) {
            UnSelectRow();
            _oDataField = _oDataFieldSibling;
            ChangeColour()
        }
    }
}

function SelectPreviousRow() {
    if (_oDataField) {
        var _oDataFieldPrevSibling = XUI.Html.DomUtils.GetPrevSibling(_oDataField);
        if (!IsNull(_oDataFieldPrevSibling) && _oDataFieldPrevSibling.rowIndex > 0) {
            UnSelectRow();
            _oDataField = _oDataFieldPrevSibling;
            ChangeColour()
        }
    }
}

function UnSelectRow() {
    if (_oDataField) {
        var oRow = _oDataField;
        if (oRow.childNodes && XUI.DomUtilities.HasChildElements(oRow)) {
            var oTd = oRow.childNodes[0];
            oTd.style.border = "0px"
        }
        oRow.style.backgroundColor = "#ffffff"
    }
}

function MoveUp() {
    if (_oDataField) {
        var oRow = _oDataField,
            iIndex = oRow.rowIndex;
        if (iIndex > 1) {
            var previousRow = oRow.parentNode.rows[iIndex - 1];
            oRow.parentNode.insertBefore(oRow, previousRow);
            _oDataField.scrollIntoView(true)
        }
    }
}

function MoveDown() {
    if (_oDataField) {
        var oRow = _oDataField,
            iIndex = oRow.rowIndex;
        if (iIndex < oRow.parentNode.rows.length - 1) {
            var secondNextRow = oRow.parentNode.rows[iIndex + 2];
            if (!IsNull(secondNextRow))
                oRow.parentNode.insertBefore(oRow, secondNextRow);
            else
                oRow.parentNode.appendChild(oRow);
            _oDataField.scrollIntoView(true)
        }
    }
}

function Delete() {
    if (_oDataField) {
        var oRow = _oDataField,
            oSiblingRow = XUI.Html.DomUtils.GetPrevSibling(_oDataField);
        if (confirm(LOCID_DELETE_CONFIRM)) {
            var _oDataFieldPrevSibling = XUI.Html.DomUtils.GetPrevSibling(_oDataField),
                _oDataFieldNextSibling = XUI.Html.DomUtils.GetNextSibling(_oDataField);
            if (!IsNull(_oDataFieldPrevSibling) && _oDataFieldPrevSibling.rowIndex > 0) {
                UnSelectRow();
                _oDataField = _oDataFieldPrevSibling;
                ChangeColour();
                if (!IsNull(XUI.Html.DomUtils.GetNextSibling(_oDataField)))
                    oRow = XUI.Html.DomUtils.GetNextSibling(_oDataField);
                oRow.parentNode.deleteRow(oRow.rowIndex);
                _oDataField = oSiblingRow
            } else if (!IsNull(_oDataFieldNextSibling) && _oDataFieldNextSibling.rowIndex > 0) {
                UnSelectRow();
                oSiblingRow = _oDataFieldNextSibling;
                oRow.parentNode.deleteRow(oRow.rowIndex);
                _oDataField = oSiblingRow;
                ChangeColour()
            } else {
                oRow.parentNode.deleteRow(oRow.rowIndex);
                _oDataField = null
            }
        }
    }
}

function Add() {
    var oArgs = {};
    oArgs.Xml = _oXml;
    oArgs.Ent = "systemuser";
    oArgs.Attr = null;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 270;
    dialogOptions.width = 520;
    var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/value.aspx?mode=add");
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArgs, null, AddRow)
}

function Edit() {
    if (_oDataField) {
        var oRow = _oDataField,
            s = oRow.value,
            idx = s.indexOf(":"),
            oArgs = {};
        oArgs.Xml = _oXml;
        oArgs.Ent = s.substring(0, idx);
        oArgs.Attr = s.substring(idx + 1).replace("/@name", "");
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 270;
        dialogOptions.width = 520;
        var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/value.aspx?mode=edit"),
            parameters = new Array(oRow),
            editRowCallBackObject = Mscrm.Utilities.createCallbackFunctionForXrmDialog(PersistRow, parameters);
        Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArgs, null, editRowCallBackObject)
    }
}

function AddRow(oValueObj) {
    if (oValueObj) {
        var oRow = XUI.Html.DomUtils.GetFirstChild($get("DataFields")).insertRow(-1),
            oCell = oRow.insertCell(-1);
        oCell.noWrap = true;
        oCell.className = "hand";
        $addHandler(oRow, "click", SelectRow);
        $addHandler(oRow, "dblclick", Edit);
        PersistRow(oValueObj, oRow);
        XUI.Html.DispatchDomEvent(oRow, XUI.Html.CreateDomEvent("click"))
    }
}

function PersistRow(oValueObj, oRow) {
    if (oValueObj) {
        var sNameAttrib = "";
        switch (oValueObj.DataType) {
        case "lookup":
        case "customer":
        case "owner":
        case "picklist":
        case "boolean":
        case "state":
        case "status":
        case "bit":
            sNameAttrib = "/@name";
            break
        }
        oRow.value = oValueObj.EntLogName + ":" + oValueObj.AttrLogName + sNameAttrib;
        XUI.Html.SetText(oRow.cells[0], oValueObj.EntDispName + " : " + oValueObj.AttrDispName)
    }
}