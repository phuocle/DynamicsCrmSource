Type.registerNamespace("Mscrm");
var ThinSpace = "\u2009",
    currentActiveElement = null,
    oObjectsXml,
    _clipboard = new XUI.ClipboardManager,
    _serializedObjectsXml,
    _nonIEMode = Sys.Browser.name != "Microsoft Internet Explorer",
    _htmlBarComponent = null,
    _savedRange = null,
    _formSaved = false;
Mscrm.Form_onload = function() {
    toggleButton();
    EmailTemplateEditorOnLoad()
};
Mscrm.ownerid_onchange = function() { toggleButton() };

function toggleButton() {
    if ($find("crmForm").get_formType() == Mscrm.SdkFormType.createForm) {
        if (document.getElementById("_MBDeleteEmailSignature") !== null) {
            document.getElementById("_MBDeleteEmailSignature").classList.remove("ms-crm-Menu-Read");
            document.getElementById("_MBDeleteEmailSignature").classList.add("disabled")
        }
        if (document.getElementById("_MBSetAsDefaultSignature") != null) {
            document.getElementById("_MBSetAsDefaultSignature").classList.remove("ms-crm-Menu-Read");
            document.getElementById("_MBSetAsDefaultSignature").classList.add("disabled")
        }
        document.getElementById("_MBRemoveDefaultSignature") != null &&
            document.getElementById("_MBRemoveDefaultSignature").classList.add("hide")
    } else if (Xrm.Page.getAttribute("isdefault").getValue() != "1") {
        document.getElementById("_MBSetAsDefaultSignature") != null &&
            document.getElementById("_MBSetAsDefaultSignature").classList.remove("hide");
        document.getElementById("_MBRemoveDefaultSignature") != null &&
            document.getElementById("_MBRemoveDefaultSignature").classList.add("hide")
    } else {
        document.getElementById("_MBRemoveDefaultSignature") != null &&
            document.getElementById("_MBRemoveDefaultSignature").classList.remove("hide");
        document.getElementById("_MBSetAsDefaultSignature") != null &&
            document.getElementById("_MBSetAsDefaultSignature").classList.add("hide")
    }
}

function DeleteEmailSignature() {
    var entity = Xrm.Page.data.entity,
        entityReference = new Xrm.Objects.EntityReference("emailsignature", entity.getId());
    entityReference.TypeCode = 9997;
    var records = [entityReference],
        actionUri = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri("delete", entityReference.TypeCode, records.length),
        entityName = Xrm.Internal.getEntityName(entityReference.TypeCode),
        confirmDialogStrings = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs(Mscrm.InternalUtilities.DialogName.DeleteDialog,
            confirmDialogStrings,
            entityName,
            records.length,
            actionUri)) {
        var dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 205;
        dialogOptions.width = 570;
        var confirmCallbackFunction = ClosePageAndGridRefreshAfterDelete,
            confirmCallbackRef = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(confirmCallbackFunction, [records]);
        Xrm.Dialog.openConfirmDialog(confirmDialogStrings, dialogOptions, confirmCallbackRef, null)
    }
}

function ClosePageAndGridRefreshAfterDelete(returnvalue, records) {
    var gridControl = null,
        parentForm = window.opener.location.href,
        personalSettingForm = "personalsettings.aspx",
        homeForm = "home.aspx",
        homePage = "homepage.aspx";
    if (parentForm.indexOf(personalSettingForm) > -1) gridControl = window.opener.$find("emailSignatureGrid");
    if (parentForm
        .indexOf(homeForm) >
        -1 ||
        parentForm.indexOf(homePage) > -1) gridControl = window.opener.$find("crmGrid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl))
        if (records.length === 1) {
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Utility.deleteRecord(records[0].LogicalName, records[0].Id.toString())
                .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() })
                .then(function(response) {
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
                            gridControl.refresh();
                            closeWindow()
                        }
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        }
}

function ResizeTemplateEditorAndAttacmentsGrid() {
    var templateEditor = $get("TemplateEditor"), htmlBarWrapper = $get("htmlBarWrapper");
    $get("areaForm").style.height = "75px";
    $get("formBodyContainer").style.height = "75px";
    var areaFormDiv = $get("areaForm");
    if (!IsNull(htmlBarWrapper) && !IsNull(areaFormDiv)) {
        var templateEditorHeight = areaFormDiv.parentNode.clientHeight -
            htmlBarWrapper.clientHeight -
            areaFormDiv.clientHeight;
        if (templateEditorHeight > 0) templateEditor.style.height = templateEditorHeight + "px"
    }
}

function CleanUpHandlers() { $removeHandler($get("title"), "focus", HandleFocus) }

function EmailTemplateEditorOnLoad() {
    ResizeTemplateEditorAndAttacmentsGrid();
    $addHandler(window, "resize", ResizeTemplateEditorAndAttacmentsGrid);
    $addHandler($get("title"), "focus", HandleFocus);
    attachWindowOnUnload(CleanUpHandlers);
    attachWindowOnBeforeUnload(window_onbeforeunload);
    var templateEditor = $get("TemplateEditor"),
        htmlControl = Mscrm.FormControlInputBehavior.GetBehavior("html"),
        crmForm = $find("crmForm");
    crmForm.add_onSave(Save);
    htmlControl.set_doNotSubmit(false);
    GenHtml();
    htmlControl.set_defaultValue(htmlControl.get_dataValue());
    _htmlBarComponent = $find("HTMLBAR");
    _htmlBarComponent != null && _htmlBarComponent.set_editableControl($get("TemplateEditor"))
}

function Save(sender, args) {
    GenHtml();
    _formSaved = true
}

function window_onbeforeunload(oEvent) {
    GenHtml();
    oEvent = oEvent.rawEvent;
    if (!_formSaved)
        if ($find("crmForm").get_isDirty()) {
            oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
            return LOCID_FORMS_SAVE_CONFIRM_TITLE
        }
}

function removeSpanTags(fromHtml) {
    var templateEditor = $get("TemplateEditorHtml");
    templateEditor.innerHTML = fromHtml;
    return templateEditor.innerHTML
}

function GenHtml() {
    Mscrm.FormControlInputBehavior.GetBehavior("html").set_dataValue(removeSpanTags($get("TemplateEditor").innerHTML))
}

function stripFormatting(evt) {
    for (var o = evt.target, arrElements = o.getElementsByTagName("span"), i = 0;
        !IsNull(arrElements) && i < arrElements.length;
        i++) {
        var elSpan = arrElements[i], elDiv = document.createElement("div");
        XUI.Html.SetText(elDiv, XUI.Html.GetText(elSpan));
        elSpan.parentNode.replaceChild(elDiv, elSpan);
        i--
    }
    var s = o.innerHTML;
    if (Sys.Browser.agent == Sys.Browser.Firefox) s = s.replace("<br>", "").replace("</br", "");
    var reComment = new RegExp("<!--[\\s\\S]*?-->", "g"),
        re = /<(?!\/?span).*?>/ig,
        sStripped = s.replace(/\n/g, "").replace(/\r/g, "");
    sStripped = sStripped.replace(reComment, "").replace(re, "");
    if (s.length != sStripped.length || s != sStripped) {
        alert(LOCID_ETMPLSUBJECTNOFORMAT);
        o.innerHTML = sStripped
    }
}

function handleKey(evt) {
    switch (evt.rawEvent.keyCode) {
    case KEY_ENTER:
        evt.stopPropagation();
        evt.preventDefault();
        break;
    case KEY_DEL:
    case KEY_DELETE:
    case KEY_BACKSPACE:
    default:
        break
    }
}

function getCurrentRange() {
    var range;
    if (window.getSelection) {
        if (window.getSelection().rangeCount > 0) range = window.getSelection().getRangeAt(0)
    } else if (document.selection) range = document.selection.createRange();
    return range
}

function handlePaste(evt) { var sText = _clipboard.GetData() }

function saveEditorSelection() {
    if (window.getSelection) {
        if (window.getSelection().rangeCount > 0) _savedRange = window.getSelection().getRangeAt(0)
    } else if (document.selection) _savedRange = document.selection.createRange()
}

function findParentByCondition(node, conditionDelegate) {
    for (var candidate = node;
        !IsNull(candidate);
        candidate = candidate.parentNode
    ) if (conditionDelegate(candidate)) return candidate;
    return null
}

function isAncestorOf(node, parentNode) {
    return !IsNull(findParentByCondition(node, function(candidate) { return candidate == parentNode }))
}

function crmExecuteCommand(command, commandValue) {
    var templateEditor = $get("TemplateEditor");
    if (window.getSelection) {
        var s = window.getSelection();
        if (s.rangeCount > 0) if (!isAncestorOf(s.getRangeAt(0).startContainer, templateEditor)) return true
    }
    var isFocused = !IsNull(document.activeElement) && document.activeElement == templateEditor;
    if (!isFocused) {
        templateEditor.focus();
        if (_savedRange != null)
            if (window.getSelection) {
                var s = window.getSelection();
                s.rangeCount > 0 && s.removeAllRanges();
                s.addRange(_savedRange)
            } else if (document.createRange) window.getSelection().addRange(_savedRange);
            else document.selection && _savedRange.select()
    }
    if (!IsNull(_savedRange) &&
        navigator.appName != "Microsoft Internet Explorer" &&
        !Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode())
        switch (command) {
        case "cut":
            _clipboard.SetData(_savedRange.extractContents());
            _savedRange.collapse(true);
            return true;
            break;
        case "copy":
            _clipboard.SetData(_savedRange.cloneContents());
            return true;
            break;
        case "paste":
            var fragment = _clipboard.GetData();
            if (!IsNull(fragment)) {
                _savedRange.deleteContents();
                var insertedFragment = fragment.cloneNode(true);
                _savedRange.insertNode(insertedFragment);
                _savedRange.collapse(true)
            }
            return true;
            break;
        case "insertUnorderedList":
            _htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
            return true;
            break;
        case "insertOrderedList":
            _htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
            return true;
            break;
        case "indent":
        case "outdent":
            return false;
        default:
        }
    _htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
    return true
}

function onKeyUp(domEvent) {}

function onKeyDown(eventData) {
    var elem = getCaretsParentNode(eventData), isDelKey = false;
    switch (Mscrm.Utilities.getDomEventKeyCode(eventData)) {
    case 46:
    case 127:
    case Sys.UI.Key.backspace:
        isDelKey = true;
        break;
    case 9:
    case 37:
    case 38:
    case 39:
    case 40:
        return;
    default:
        break
    }
}

function getCaretsParentNode(eventData) {
    var node = null;
    if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
        if (document.selection.type.toUpperCase() != "CONTROL") node = document.selection.createRange().parentElement();
        else node = document.selection.createRange().commonParentElement();
    else if (!IsNull(window.getSelection()))
        try {
            node = window.getSelection().getRangeAt(0).commonAncestorContainer;
            if (node.nodeType == 3 && !IsNull(eventData)) node = getElementAtCursor(node, eventData);
            else if (node.nodeType !== 1) node = node.parentNode
        } catch (e) {
            node = null
        }
    return node
}

function setCaret(text, isLeft, eventData) {
    var keyCode = Mscrm.Utilities.getDomEventKeyCode(eventData),
        isArrowKey = keyCode === 37 || keyCode === 39 ? true : false,
        range = null;
    if (Mscrm.Utilities
        .get_ieBrowserVersion() >
        0 &&
        Mscrm.Utilities.get_ieBrowserVersion() < 9) range = document.selection.createRange();
    else if (!IsNull(window.getSelection())) range = window.getSelection();
    if (!IsNull(range))
        if (!IsNull(text) && text.nodeType === 3) {
            !IsNull(text.parentNode) && text.parentNode.focus();
            var offset = isArrowKey ? 0 : isLeft ? 0 : 1;
            if (!text.nodeValue
                .match(new RegExp("^[\\s" + escape(ThinSpace).replace(/%/, "\\") + "]+"))
            ) text.nodeValue = isLeft ? text.nodeValue + " " : " " + text.nodeValue;
            range.collapse(text, isLeft ? text.nodeValue.length - offset : offset)
        }
}

function HandleFocus(domEvent) { SetCurrentActiveElement(domEvent) }

function SetCurrentActiveElement(domEvent) { currentActiveElement = domEvent.target }