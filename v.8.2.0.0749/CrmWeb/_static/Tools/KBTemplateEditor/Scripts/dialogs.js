
var templateTitle = null,
    templateDesc = null,
    languagecode = null,
    butBegin = null;

function dismiss(rawEvent) {
    var domEvent = Mscrm.Utilities.eventToDomEvent(rawEvent);
    if (Mscrm.Utilities.getDomEventKeyCode(domEvent) == Sys.UI.Key.enter) {
        domEvent.preventDefault();
        applychanges()
    }
}

function DialogsJsWindowOnLoad() {
    templateTitle = $get("templateTitle");
    templateTitle.focus();
    templateDesc = $get("templateDescId");
    languagecode = $get("languagecode");
    butBegin = $get("butBegin");
    var arguments = getDialogArguments();
    if (!IsNull(arguments)) {
        templateTitle.value = arguments.Title;
        templateDesc.value = arguments.Description;
        languagecode.value = arguments.LanguageCode;
        updateUI()
    }
}

$addHandler(window, "load", DialogsJsWindowOnLoad);

function applychanges() {
    if (templateTitle.value == "")
        alert(LOCID_KBTED_ENTERARTICLETITLE);
    else {
        window.returnValue = new TemplateObj(templateTitle.value, templateDesc.value, languagecode.value, 0);
        closeWindow()
    }
}

function cancel() {
    closeWindow()
}

function updateUI() {
    butBegin.disabled = templateTitle.value.length == 0
}

function onPaste() {
    var clipboard = new XUI.ClipboardManager;
    butBegin.disabled = clipboard.GetData().length == 0
}