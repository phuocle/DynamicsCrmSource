
var _sLoadingMessageHtml =
    "<TABLE width='100%' height='100%'><TR><TD ID='loadingMessage' align='center'><IMG id='imgLoading' alt='{0}' src='/_imgs/AdvFind/progress.gif'><br>{0}</TD></TR></TABLE>";

function InPageHelp_ExpandCollapse(e) {
    var divInnAppContent = InPageHelp_GetRootInPageElement(e.target || e.srcElement),
        inPageHelpIframe = $get("inPageHelpIframe", divInnAppContent),
        inPageHelpCollapseDiv = $get("inPageHelpCollapseDiv", divInnAppContent),
        inPageHelpCollapseImage = $get("inPageHelpCollapseImage", divInnAppContent),
        inpageHelpImgInfo;
    if (divInnAppContent.getAttribute("expanded") == 1) {
        inPageHelpIframe.style.display = "none";
        inPageHelpCollapseDiv.className = "visor-sliver-dn";
        inpageHelpImgInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/helpvisor/visorclose.png"));
        inPageHelpCollapseDiv.title = LOCID_CLICK_TO_EXPAND;
        inPageHelpCollapseImage.alt = LOCID_CLICK_TO_EXPAND;
        divInnAppContent.setAttribute("expanded", 0);
        divInnAppContent.style.borderWidth = "0px";
        document.cookie = INPAGEHELP_COOKIE_NAME + "=1; expires = Tue, 01-Jan-2999 00:00:00 GMT"
    } else {
        if (!inPageHelpIframe.src) {
            inPageHelpIframe.contentWindow.document.body
                .innerHTML = formatString(_sLoadingMessageHtml, CrmEncodeDecode.CrmHtmlEncode(LOCID_PAGELOADING_MSG));
            window.setTimeout(function() {
                    inPageHelpIframe.src = divInnAppContent.getAttribute("src")
                },
                1)
        }
        inPageHelpIframe.style.display = "block";
        inPageHelpCollapseDiv.className = "visor-sliver-up";
        inpageHelpImgInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/helpvisor/visoropen.png"));
        inPageHelpCollapseDiv.title = LOCID_CLICK_TO_COLLAPSE;
        inPageHelpCollapseImage.alt = LOCID_CLICK_TO_COLLAPSE;
        divInnAppContent.setAttribute("expanded", 1);
        divInnAppContent.style.borderWidth = "1px";
        var cookie_date = new Date;
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = INPAGEHELP_COOKIE_NAME + "=; expires=" + cookie_date.toGMTString()
    }
    inPageHelpCollapseImage.src = inpageHelpImgInfo.source;
    inPageHelpCollapseImage.className = inpageHelpImgInfo.cssClass
}

function InPageHelp_MouseOverOut(e, over) {
    var divInnAppContent = InPageHelp_GetRootInPageElement(e.target || e.srcElement),
        helpCollapseImageInfo;
    if (divInnAppContent.getAttribute("expanded") == 1)
        helpCollapseImageInfo = Mscrm.ImageStrip
            .getImageInfo(Mscrm.CrmUri.create(over
                ? "/_imgs/helpvisor/visoropenhover.png"
                : "/_imgs/helpvisor/visoropen.png"));
    else
        helpCollapseImageInfo = Mscrm.ImageStrip
            .getImageInfo(Mscrm.CrmUri.create(over
                ? "/_imgs/helpvisor/visorclosehover.png"
                : "/_imgs/helpvisor/visorclose.png"));
    var inPageHelpCollapseImage = $get("inPageHelpCollapseImage", divInnAppContent);
    inPageHelpCollapseImage.src = helpCollapseImageInfo.source;
    inPageHelpCollapseImage.setAttribute("className", helpCollapseImageInfo.cssClass)
}

function InPageHelp_GetRootInPageElement(element) {
    while (element.getAttribute("expanded") == null)
        element = element.parentNode;
    return element
}

function InPageHelp_InitHelpIframe() {
    var iFrame = $get("inPageHelpIframe");
    if (iFrame) {
        var doc = iFrame.contentWindow || iFrame.contentDocument;
        if (doc.document)
            doc = doc.document;
        if (!Mscrm.Utilities.isIE())
            for (var k = 1; k <= 3; k++) {
                var columnRows = null;
                try {
                    columnRows = doc.getElementById("ec" + k).children
                } catch (e) {
                }
                if (!IsNull(columnRows))
                    for (var i = 1; i <= columnRows.length; i++)
                        try {
                            var domElement = doc.getElementById("column" + k + "_item" + i),
                                defaultOnclickString = null,
                                defaultOnKeyPressString = null;
                            defaultOnclickString = domElement.getAttribute("onclick");
                            defaultOnKeyPressString = domElement.getAttribute("onkeypress");
                            if (!IsNull(defaultOnclickString) && defaultOnclickString.indexOf("ExecuteAction") != -1) {
                                var onclickString = manipulateString(defaultOnclickString, "onclick");
                                domElement.onclick = "";
                                domElement.setAttribute("onclick", onclickString)
                            }
                            if (!IsNull(defaultOnKeyPressString) &&
                                defaultOnKeyPressString.indexOf("ExecuteAction") != -1) {
                                var onkeyPressString = manipulateString(defaultOnKeyPressString, "onkeypress");
                                domElement.onkeypress = "";
                                domElement.setAttribute("onkeypress", onkeyPressString)
                            }
                        } catch (e) {
                        }
            }
        var headElement = doc.getElementsByTagName("HEAD")[0],
            scriptElement = headElement.ownerDocument.createElement("script");
        headElement.appendChild(scriptElement);
        scriptElement.setAttribute("type", "text/javascript");
        scriptElement.setAttribute("src", "/_static/_controls/inpagehelp/inpagehelpiframe.js");
        AttachWindowOnUnload(InPageHelp_OnUnload, iFrame.contentWindow)
    }
}

function manipulateString(s, eventName) {
    switch (eventName) {
    case "onclick":
        if (s.indexOf("event") == -1) {
            s = s.slice(0, s.lastIndexOf(")"));
            s = s + ", event);return false;"
        }
        return s;
        break;
    case "onkeypress":
        if (s.indexOf("event", s.indexOf("{")) == -1) {
            s = s.slice(0, s.lastIndexOf(")"));
            s = s + ", event);return false;}"
        }
        return s;
        break
    }
}

function InPageHelp_OnUnload() {
    var iFrame = window.frames["inPageHelpIframe"];
    if (iFrame) {
        DetachWindowOnUnload(InPageHelp_OnUnload, iFrame.contentWindow);
        iFrame.document.body.innerHTML = ""
    }
}