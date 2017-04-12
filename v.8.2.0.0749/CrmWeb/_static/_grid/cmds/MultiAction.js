
var _i = 0,
    _custParams = "",
    _bActionStarted = false,
    _a = null,
    _oXml = null,
    __dialogXml = "",
    _xmlhttp = new XMLHttpRequest,
    _xmlDoc = null,
    _submitUrl = Mscrm.CrmUri.create(""),
    _errorCode = ERROR_NONE,
    _errorNumber = "",
    _errorDescription = "",
    _errorCount = 0,
    _renderFillBar = true,
    _iStep = 0,
    _nFillBarWidth = 0,
    _bContinueOnError = true,
    _errors = {},
    _isCancelPressed = false,
    _isAsynch = false,
    _overrideDialogArgs = false,
    index = -1,
    emptyGUID = 0 - 0 - 0 - 0 - 0;

function callPerformAction() {
    var obutBegin = document.getElementById("butBegin");
    obutBegin.disabled = true;
    PrepareFillBar();
    _bActionStarted = true;
    window.setTimeout("performAction()", 100)
}

function go() {
    _errorCode = ERROR_NONE;
    _errorCount = 0;
    _errorNumber = "";
    _errorDescription = "";
    if (_sAction == "routecase") {
        for (var numberOfFrames = window.parent.frames.length,
            i = 0;
            i < numberOfFrames;
            i++)
            if (window.parent.frames[i].document.getElementById("crmForm") != null) {
                var formWindow = window.parent.frames[i],
                    entityName = "",
                    key = null;
                try {
                    entityName = formWindow.Xrm.Page.data.entity.getEntityName();
                    key = formWindow.Xrm.Page.data.entity.getKey()
                } catch (error) {
                    entityName = "";
                    key = null
                }
                if (entityName == "incident" && !IsNull(key) && key != emptyGUID) {
                    index = i;
                    break
                }
            }
        if (index != -1) {
            var stateCode = window.parent.frames[index].Xrm.Page.getAttribute("statecode").getValue();
            if (stateCode == 0)
                window.parent.frames[index].Xrm.Page.data.save()
                    .then(callPerformAction, Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
            else
                callPerformAction()
        } else
            callPerformAction()
    } else
        callPerformAction()
}

function PrepareFillBar() {
    var oWarning = document.getElementById("divWarning");
    oWarning.style.display = "none";
    if (_renderFillBar) {
        var oHeader = document.getElementById("tdDialogHeader"),
            oFooter = document.getElementById("tdDialogFooter"),
            oFillBar = document.getElementById("divFillBg"),
            oStatus = document.getElementById("divStatus"),
            oFill = document.getElementById("divFill"),
            nHeaderHeight = oHeader == null ? 0 : parseInt(oHeader.scrollHeight, 10),
            nFooterHeight = oFooter == null ? 0 : parseInt(oFooter.scrollHeight, 10),
            nFillBarHeight = oFillBar == null ? 0 : parseInt(oFillBar.style.height, 10),
            nDialogHeight = window.document.body.clientHeight,
            nVerticalPosition = (nDialogHeight - (nHeaderHeight + nFooterHeight)) / 2 +
                nHeaderHeight -
                nFillBarHeight / 2;
        _nFillBarWidth = window.document.body.clientWidth - 40;
        oFillBar.style.display = "inline";
        oStatus.style.display = "inline";
        oFill.style.display = "inline";
        var initialFillPosition = 0;
        if (getDialogArgs().length == 1) {
            initialFillPosition = _nFillBarWidth * 3 / 4;
            _iStep = _nFillBarWidth / 4
        } else
            _iStep = _nFillBarWidth / getDialogArgs().length;
        SetFillBarDimensions(oFillBar, nVerticalPosition, _nFillBarWidth);
        SetFillBarDimensions(oFill, nVerticalPosition, initialFillPosition);
        SetFillBarDimensions(oStatus, nVerticalPosition, _nFillBarWidth);
        SetFillBarDimensions(XUI.Html.DomUtils.GetFirstChild(oStatus), 0, _nFillBarWidth)
    }
}

function SetFillBarDimensions(oDiv, nTop, nWidth) {
    oDiv.style.top = nTop + "px";
    oDiv.style.width = nWidth + "px"
}

function wait() {
    var oFill = document.getElementById("divFill"),
        status = handleXMLErr(_oXml, _bContinueOnError);
    if (status == ERROR_CONTINUE) {
        if (_errorCount == 0)
            _errorCode = status;
        if (_sAction == "mergemultiple" ||
            _sAction == "queueitemrouting" ||
            Mscrm.Utilities.enforceStateTransitions() ||
            _sAction == "routecase") {
            var errInfo = Mscrm.ErrorInformation.createFromDoc(_oXml);
            if (_errors[errInfo.get_code()] == null) {
                errInfo["count"] = 1;
                _errors[errInfo.get_code()] = errInfo
            } else {
                var errInfoExisitng = _errors[errInfo.get_code()];
                errInfoExisitng["count"]++;
                _errors[errInfo.get_code()] = errInfoExisitng
            }
        }
        _errorCount++
    }
    if (_i < getDialogArgs().length - 1 && (_bContinueOnError || status == ERROR_NONE)) {
        oFill.style.width = _iStep * (_i + 2) + "px";
        window.setTimeout("performAction()", 10)
    } else if (_errorCode == ERROR_CONTINUE) {
        var args = getDialogArgs();
        window.returnValue = _errorCount != args.length;
        var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("doPostProcessing", this, null, false);
        if (_errorCount == 1 && getDialogArgs().length == 1)
            LaunchErrorDlg(_oXml, callbackFunction);
        else
            switch (_sAction) {
            case "mergemultiple":
                processMergeMultiple();
                doPostProcessing();
                break;
            case "queueitemroute":
                _errorCount != 0 &&
                    LaunchErrorDlg(_oXml, callbackFunction);
                break;
            default:
                if (_errors != null && _errors["0x8004F00E"] != null)
                    alert(LOCID_ERROR_MSG_0X8004F00E);
                else
                    alert(LOCID_MULTIACTION_ERROR_FOUND);
                doPostProcessing()
            }
    } else {
        switch (_sAction) {
        case "cloneprofile":
            var profileId = handleXmlResponse(_xmlhttp, "/ok/channelaccessprofileid"),
                openProfile = $get("openProfile").checked;
            window.returnValue = [profileId, openProfile];
            break;
        case "convertlead":
            window.returnValue = handleXmlResponse(_xmlhttp, "/ok/ShowNew");
            break;
        case "mergemultiple":
            processMergeMultiple();
            window.returnValue = true;
            break;
        default:
            window.returnValue = true
        }
        doPostProcessing()
    }
}

function handleXmlResponse(_xmlhttp, nodeXPath) {
    if (_xmlhttp.readyState > 0) {
        var xmlhttpResponseXMLNode = _xmlhttp.responseXML;
        if (XUI.Xml.SelectSingleNode(xmlhttpResponseXMLNode, nodeXPath, null) != null)
            return XUI.Xml.GetText(XUI.Xml.SelectSingleNode(xmlhttpResponseXMLNode, nodeXPath, null))
    }
}

function doPostProcessing() {
    if (IsOutlookClient()) {
        var oArgs = getDialogArguments();
        if ((IsActivityTypeCode(_iObjType) || Contact == _iObjType || QueueItem == _iObjType) &&
            typeof oArgs.opener != "undefined")
            try {
                oArgs.opener.refreshGrid(oArgs.grid)
            } catch (e) {
            }
    } else if (!Mscrm.Utilities.isModalDialogSupported() || isInlinedDialog())
        if (!IsNull(window.opener))
            window.setTimeout("try { window.opener.auto('" + _iObjType + "'); } catch(e){}", 0);
        else {
            var oArgs = getDialogArguments();
            try {
                !IsNull(oArgs) &&
                    !IsNull(oArgs.opener) &&
                    oArgs.opener.auto(_iObjType)
            } catch (e) {
            }
        }
    var oFill = document.getElementById("divFill");
    oFill.style.width = _nFillBarWidth + "px";
    if (_sAction == "mergemultiple")
        Mscrm.Utilities.setReturnValue(messageContent);
    else
        Mscrm.Utilities.setReturnValue(window.returnValue);
    typeof window["closeWindow"] != "undefined" &&
        window.setTimeout(closeWindow, 0)
}

function LaunchErrorDlg(_oXml, callback) {
    var _errorNumber = 2147500037,
        errInfo = Mscrm.ErrorInformation.createFromDoc(_oXml);
    openErrorDlg(IsNull(errInfo.get_code()) ? _errorNumber : errInfo.get_code(),
        errInfo.get_description(),
        errInfo,
        null,
        null,
        callback)
}

function performAction() {
    _isCancelPressed = false;
    if (__dialogXml == "")
        __dialogXml = "<node />";
    if (window.isMobileClient)
        _xmlDoc = Sys.Net.XMLDOM(__dialogXml);
    else
        _xmlDoc = XUI.Xml.LoadXml(__dialogXml);
    var sCustParamsForItem = "";
    if (typeof window["getCustParamsForItem"] != "undefined")
        sCustParamsForItem = getCustParamsForItem(_i);
    _submitUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_" +
        _sAction +
        ".aspx?iObjType=" +
        _iObjType +
        "&iTotal=1&iIndex=" +
        _i +
        _custParams +
        sCustParamsForItem);
    if (getDialogArgs())
        _submitUrl.get_query()["iId"] = getDialogArgs()[_i];
    _isAsynch = isAsynchOperation();
    _xmlhttp.open("POST", _submitUrl.toString(), _isAsynch);
    Mscrm.Utilities.setResponseTypeToMSXml(_xmlhttp);
    if (_iObjType == 7100)
        _xmlhttp.timeout = 8 * 60 * 60 * 1e3;
    SetTokenInHeader(_xmlhttp, _submitUrl);
    _xmlhttp.send(_xmlDoc);
    if (_isAsynch)
        _xmlhttp.onreadystatechange = function() {
            if (_xmlhttp.readyState == 4) {
                _xmlhttp.onreadystatechange = null;
                if (_xmlhttp.status == 200) {
                    _i++;
                    if (_isCancelPressed &&
                        window.confirm(formatString(LOCID_CONFIRM_MULTI_CANCEL, getDialogArgs().length - _i))) {
                        window.returnValue = true;
                        _isCancelPressed = false;
                        closeWindow()
                    } else {
                        _oXml = _xmlhttp.responseXML;
                        wait()
                    }
                } else if (!(_xmlhttp.status == 0 && window.UseTabletExperience) && !_isCancelPressed) {
                    alert(LOCID_ACTION_HTTP_ERROR_FOUND);
                    doPostProcessing()
                }
            }
        };
    else {
        _oXml = _xmlhttp.responseXML;
        _oXml != null &&
            wait();
        if (typeof window["_i"] != "undefined")
            _i++
    }
}

function cancel() {
    _isCancelPressed = true;
    if (_bActionStarted) {
        if (!_isAsynch)
            if (window.confirm(formatString(LOCID_CONFIRM_MULTI_CANCEL, getDialogArgs().length - _i))) {
                Mscrm.Utilities.setReturnValue(true);
                closeWindow()
            }
    } else
        closeWindow()
}

function isAsynchOperation() {
    if (_sAction == "delete" && _iObjType == Mscrm.EntityTypeCode.Entity && !window.isMobileClient)
        return true;
    else
        return false
}

function getDialogArgs() {
    if (IsNull(_a))
        _a = _overrideDialogArgs && typeof getCustomDialogArgs != "undefined"
            ? getCustomDialogArgs()
            : getDialogArguments();
    return _a
}