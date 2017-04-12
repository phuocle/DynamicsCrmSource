
function ShowUsageJsWindowOnLoad() {
    var oArgs = getDialogArguments();
    pupulateSection($get("divForms"), oArgs.Forms);
    pupulateSection($get("divSystemViews"), oArgs.SystemViews);
    pupulateSection($get("divRelationshipMappings"), oArgs.RelationshipMappings);
    pupulateSection($get("divWorkflows"), oArgs.Workflows)
}

Sys.Application.add_load(ShowUsageJsWindowOnLoad);

function pupulateSection(oList, aObjects) {
    var oHeader = $get(oList.id + "Header");
    if (!IsNull(aObjects)) {
        var aStrings;
        if (typeof aObjects.string == "string")
            aStrings = new Array(aObjects.string);
        else
            aStrings = aObjects.string;
        for (var sHtml = "",
            i = 0;
            i < aStrings.length;
            i++)
            sHtml += CrmEncodeDecode.CrmHtmlEncode(aStrings[i]) + "<br>";
        oList.innerHTML = sHtml + "<br>"
    } else {
        oHeader.style.display = "none";
        oList.style.display = "none"
    }
}

function applychanges() {
    closeWindow()
}