
var ThinSpace = "\u2009",
    _activeSlug,
    count;

function GetDataSlugValue(dataSlug) {
    return dataSlug.getAttribute("data-value")
}

function SetDataSlugValue(dataSlug, text) {
    dataSlug.setAttribute("data-value", text)
}

function IsDataSlug(node) {
    return !isNullOrEmptyString(node.className) && Sys.UI.DomElement.containsCssClass(node, "dataslug")
}

function InitDataSlugElement(dataSlug, id, text) {
    !IsDataSlug(dataSlug) &&
        Sys.UI.DomElement.toggleCssClass(dataSlug, "dataslug");
    dataSlug.tabIndex = -1;
    SetDataSlugValue(dataSlug, text);
    dataSlug.id = id
}

var currentActiveElement = null;

function HandleFocus(domEvent) {
    SetCurrentActiveElement(domEvent)
}

function SetCurrentActiveElement(domEvent) {
    currentActiveElement = domEvent.target
}

function ElementSupportsSlugInsertion(element) {
    if (!IsNull(element) && (element.id === "SubjectEditor" || element.id === "TemplateEditor"))
        return true;
    return false
}

function placeDataSlugContainer() {
    if (!IsNull(window.getSelection)) {
        var sel = window.getSelection();
        if (!IsNull(sel.getRangeAt)) {
            var dataSlug = document.createElement("span");
            sel.getRangeAt(0).insertNode(dataSlug);
            return dataSlug
        }
    } else if (!IsNull(document.selection)) {
        var id = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime();
        document.selection.createRange().pasteHTML('<span id="' + CrmEncodeDecode.CrmHtmlAttributeEncode(id) + '" />');
        var dataSlug = document.getElementById(id);
        dataSlug.removeAttribute("id");
        return dataSlug
    }
    return null
}

function InsertDataField() {
    var oArgs = {};
    oArgs.Xml = _serializedObjectsXml;
    oArgs.Text = null;
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 480;
    dialogOptions.width = 550;
    var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/datafieldproperties.aspx");
    Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArgs, null, InsertDataFieldCallBack)
}

function InsertDataFieldCallBack(oRetVal) {
    if (!IsNull(oRetVal) && oRetVal.length == 2) {
        var elementForSlugInsert = currentActiveElement;
        elementForSlugInsert.focus();
        if (IsNull(count)) {
            count = 0;
            var spans = elementForSlugInsert.getElementsByTagName("span");
            if (!IsNull(spans))
                count = spans.length
        }
        var oTemp = placeDataSlugContainer();
        if (!IsNull(oTemp)) {
            var oDataSlug = document.createElement("SPAN");
            InitDataSlugElement(oDataSlug, elementForSlugInsert.id + count.toString(), oRetVal[0]);
            XUI.Html.SetText(oDataSlug, oRetVal[1]);
            count++;
            oTemp.parentNode.replaceChild(oDataSlug, oTemp);
            AddSpacesArroundSlug(oDataSlug);
            !IsNull(elementForSlugInsert) &&
                elementForSlugInsert.id == "SubjectEditor" &&
                checkForSubjectDataSlugs()
        }
    }
}

function AddSpacesArroundSlug(dataSlug) {
    if (!IsNull(dataSlug)) {
        var prev = dataSlug.previousSibling,
            next = dataSlug.nextSibling;
        (IsNull(prev) ||
                !IsNull(prev) &&
                prev.nodeType == 3 &&
                !prev.nodeValue.match(new RegExp("[\\s" + escape(ThinSpace).replace(/%/, "\\") + "]{1}$"))) &&
            dataSlug.parentNode.insertBefore(window.document.createTextNode(ThinSpace), dataSlug);
        IsNull(next) &&
            dataSlug.parentNode.appendChild(window.document.createTextNode(ThinSpace));
        !IsNull(next) &&
            (next.nodeType == 3 &&
                !next.nodeValue.match(new RegExp("^[\\s" + escape(ThinSpace).replace(/%/, "\\") + "]{1}")) ||
                next.nodeType == 1) &&
            dataSlug.parentNode.insertBefore(window.document.createTextNode(ThinSpace), next)
    }
}

function DeleteDataField() {
    if (!IsNull(_activeSlug)) {
        !IsNull(_activeSlug.parentNode) &&
            _activeSlug.parentNode.removeChild(_activeSlug);
        _activeSlug = null
    } else
        alert(LOCID_NODATASLUGSELECTED);
    !IsNull(currentActiveElement) &&
        currentActiveElement.id == "SubjectEditor" &&
        checkForSubjectDataSlugs()
}

function UpdateDataField() {
    if (!ElementSupportsSlugInsertion(currentActiveElement)) {
        alert(LOCID_FIELDNOTSUPPORTEDSLUG);
        return
    }
    if (!IsNull(_activeSlug))
        if (XUI.Html.GetText(_activeSlug) == "") {
            DeleteDataField();
            InsertDataField()
        } else {
            var oArgs = {};
            oArgs.Xml = _serializedObjectsXml;
            oArgs.Text = GetDataSlugValue(_activeSlug);
            var dialogOptions = new Xrm.DialogOptions;
            dialogOptions.height = 480;
            dialogOptions.width = 550;
            var oUrl = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/datafieldproperties.aspx");
            Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, oArgs, null, UpdateDataFieldCallBack)
        }
    else
        InsertDataField()
}

function UpdateDataFieldCallBack(oRetVal) {
    if (!IsNull(oRetVal) && oRetVal.length == 2) {
        SetDataSlugValue(_activeSlug, oRetVal[0]);
        XUI.Html.SetText(_activeSlug, oRetVal[1])
    }
}

function UnsubscribeLink() {
    var text = "";
    if (window.getSelection)
        text = window.getSelection();
    else if (document.selection)
        text = document.selection.createRange().text;
    if (text != "")
        try {
            window.document.execCommand("createlink", false, "mailto:[Run_Time_Address]?subject=[Run_Time_Subject]")
        } catch (e) {
        }
}