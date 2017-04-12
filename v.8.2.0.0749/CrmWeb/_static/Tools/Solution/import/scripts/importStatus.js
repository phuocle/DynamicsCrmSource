
function ImportStatusJsWindowOnLoad() {
    attachWindowOnBeforeUnload(window_onbeforeunload);
    setTimeout(checkStatus, 1e3)
}

$addHandler(window, "load", ImportStatusJsWindowOnLoad);

function checkStatus() {
    var importJobId = getDialogArguments()["importjobid"],
        iTotalProcessed,
        iTotalBlocks,
        oProgressRetrieveCommand = new RemoteCommand("ImportJob", "RetrieveProgress");
    oProgressRetrieveCommand.ErrorHandler = function() {
    };
    oProgressRetrieveCommand.SetParameter("id", importJobId);
    try {
        var oResult = oProgressRetrieveCommand.Execute();
        if (oResult.Success) {
            var oImportJob = oResult.ReturnValue;
            if (!IsNull(oImportJob) && oImportJob != "") {
                var iPercentage = 0,
                    oDataXml = XUI.Xml.LoadXml(oImportJob);
                if (!IsNull(oDataXml)) {
                    var root = XUI.Xml.SelectSingleNode(oDataXml, "importexportxml", null);
                    if (root != null) {
                        if (!IsNull(root.getAttribute("succeeded")) && root.getAttribute("succeeded") != "") {
                            detachWindowOnBeforeUnload(window_onbeforeunload);
                            window.returnValue = true;
                            closeWindow();
                            return
                        }
                        if (root.getAttribute("progress") != null)
                            iPercentage = root.getAttribute("progress");
                        SetStatusBarProgress(iPercentage)
                    }
                }
            }
        }
    } catch (e) {
    }
    setTimeout(checkStatus, 1e3)
}

function SetStatusBarProgress(iPercentage) {
    var divFill = $get("divFill"),
        divFillBg = $get("divFillBg"),
        divFillBgWidth = parseInt(divFillBg.style.width);
    divFill.style.width = divFillBgWidth * iPercentage / 100 + "px";
    if (LOCID_UI_DIR === "RTL")
        divFill.style.left = parseInt(divFillBg.style.left) + divFillBgWidth - divFillBgWidth * iPercentage / 100 + "px"
}

function applychanges() {
    detachWindowOnBeforeUnload(window_onbeforeunload);
    window.returnValue = true;
    closeWindow()
}

function window_onbeforeunload(oEvent) {
    oEvent = oEvent.rawEvent;
    oEvent.returnValue = LOCID_IMPORT_DLG_CLOSE_CNFRM;
    return LOCID_IMPORT_DLG_CLOSE_CNFRM
}