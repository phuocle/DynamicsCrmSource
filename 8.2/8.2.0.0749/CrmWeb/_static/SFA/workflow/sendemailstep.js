
var descriptionBehavior;

function LoadEmailBody() {
    var emailBody = document.getElementById("hidEmailBodyContent");
    descriptionBehavior = Mscrm.FormControlInputBehavior.GetBehavior("description");
    EnableSlugSupport();
    if (!IsNull(emailBody) && !IsNull(emailBody.value) && emailBody.value.length > 0)
        try {
            var disabled = descriptionBehavior.get_disabled();
            descriptionBehavior.set_disabled(false);
            var messageContent = emailBody.value;
            descriptionBehavior.loadMessageContent(messageContent);
            descriptionBehavior.set_disabled(disabled)
        } catch (e) {
        }
    if (descriptionBehavior.get_initialized())
        window.setTimeout(SetFocusForEmailForm, 50);
    else
        descriptionBehavior.add_contentReady(SetFocusForEmailForm)
}

function SetFocusForEmailForm() {
    try {
        SetFieldFocusAtOnLoad(_firstElement)
    } catch (e) {
    }
}

function EnableSlugSupport() {
    descriptionBehavior.set_slugSupport(true)
}

function ValidateSendEmailTemplate(noValidation) {
    var crmGrid = GetTemplateGrid();
    if (IsNull(crmGrid))
        return null;
    var selectedRow = crmGrid.get_innerGrid().get_selectedRecords();
    if (selectedRow.length == 0) {
        (IsNull(noValidation) || !noValidation) &&
            alert(LOCID_NO_TEMPLATE_SELECTED);
        return null
    }
    return selectedRow[0][0]
}

function SelectGrid() {
    SetGridSelection()
}

function SetGridSelection() {
    var crmGrid = GetTemplateGrid();
    if (IsNull(crmGrid))
        return true;
    crmGrid.remove_onRefresh(SetGridSelection);
    var gridRow = crmGrid.get_innerGrid().get_dataTableBody(),
        templateId = $get("hidTemplateId").value;
    if (isNullOrEmptyString(templateId))
        return true;
    templateId = templateId.toUpperCase();
    for (var rows = gridRow.rows,
        len = rows.length,
        i = 0;
        i < len;
        i++)
        if (rows[i].getAttribute("oid") == templateId) {
            crmGrid.get_innerGrid().UnselectRecords();
            crmGrid.get_innerGrid().SelectRecords(i, i);
            return true
        }
    if (crmGrid.get_innerGrid().get_moreRecords()) {
        crmGrid.get_isRefreshing() &&
            crmGrid.CancelRefresh();
        crmGrid.add_onRefresh(SetGridSelection);
        crmGrid.set_pageNumber(crmGrid.get_pageNumber() + 1)
    } else {
        var typeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("templateTypeList");
        if (typeCtrl.get_dataValue() != "1") {
            typeCtrl.set_dataValue("1");
            RefreshTemplateGrid(SetGridSelection)
        }
    }
    return false
}

function AttachTemplateTypeListHandlers() {
    $addHandler($get("templateTypeList"), "change", DropdownChange);
    $addHandler(window,
        "unload",
        function() {
            $removeHandler($get("templateTypeList"), "change", DropdownChange)
        })
}

function DropdownChange() {
    RefreshTemplateGrid()
}

function RefreshTemplateGrid(funOnComplete) {
    var crmGrid = GetTemplateGrid();
    if (IsNull(crmGrid))
        return;
    var typeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("templateTypeList");
    crmGrid.SetParameter("CurrentSelect", typeCtrl.get_dataValue());
    crmGrid.Reset(funOnComplete)
}

function GetTemplateGrid() {
    var templateGridId = document.getElementById("templateGridId");
    if (IsNull(templateGridId))
        return null;
    return $find(templateGridId.value)
}

function InsertKBArticle() {
    var oId = LookupKBArticle();
    InsertKBArticleIntoEmailBody(oId)
}

function LookupKBArticle() {
    var oUrl = Mscrm.CrmUri.create("/CS/dialogs/KBSearch.aspx?HideEmailButton=true"),
        crmDialog = new Mscrm.CrmDialog(oUrl, null, 700, 500, null);
    return crmDialog.show()
}

function InsertKBArticleIntoEmailBody(oId) {
    if (!IsNull(oId)) {
        oUrl = Mscrm.CrmUri.create("/CS/articles/viewer/content.aspx?id=" + oId);
        var oXmlHttp = new XMLHttpRequest;
        oXmlHttp.open("POST", oUrl.toString(), false);
        oXmlHttp.send("");
        oXmlHttp.responseText != null &&
            Mscrm.FormControlInputBehavior.GetBehavior("description").InsertValue(oXmlHttp.responseText)
    }
}