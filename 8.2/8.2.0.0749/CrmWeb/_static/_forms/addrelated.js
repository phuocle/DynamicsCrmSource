
function locAddRelatedTo(iTypeToAdd) {
    locAddRelatedToPlusAdditional(iTypeToAdd, "")
}

function locAddRelatedToPlusAdditional(iTypeToAdd, additionalAttributes) {
    var params = {};
    SetParams(params);
    locAddRelatedToNonForm(iTypeToAdd, params["etc"], params["id"], additionalAttributes)
}

function locAddRelatedToNonForm(iTypeToAdd, createFromType, createFromId, additionalAttributes, openInNewWindow) {
    var parameters = {},
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.openInNewWindow = openInNewWindow;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(additionalAttributes))
        parameters = parseQueryStringValue(additionalAttributes.substring(1));
    parameters["_CreateFromType"] = createFromType;
    parameters["_CreateFromId"] = createFromId;
    Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(iTypeToAdd), null, parameters, dialogOptions)
}

function locAddObjTo(iType) {
    var params = {};
    SetParams(params);
    var parameters = {},
        openInNewWindow = false,
        dialogOptions = new Xrm.DialogOptions;
    parameters["pId"] = params["id"];
    parameters["pType"] = params["etc"];
    if (params["etc"] == Mscrm.InternalUtilities.EntityTypeCode.Annotation ||
        params["etc"] == Mscrm.InternalUtilities.EntityTypeCode.SalesLiteratureItem)
        openInNewWindow = true;
    dialogOptions.openInNewWindow = openInNewWindow;
    Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(iType), null, parameters, dialogOptions)
}

function locAddFileTo(iAttachmentType) {
    var params = {};
    SetParams(params);
    var parameters = {};
    parameters["hideDesc"] = "1";
    parameters["pId"] = params["id"];
    parameters["pType"] = params["etc"];
    var dialogOption = new Xrm.DialogOptions;
    dialogOption.width = 500;
    dialogOption.height = 175;
    Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(iAttachmentType), null, parameters, dialogOption)
}

function locAddAttachmentForWorkflow(workflowid, stepid) {
    var parameters = {};
    parameters["hideDesc"] = "1";
    parameters["pId"] = workflowid;
    parameters["pType"] = Workflow;
    parameters["stepId"] = stepid;
    var dialogOption = new Xrm.DialogOptions;
    dialogOption.width = 500;
    dialogOption.height = 175;
    Xrm.Utility.openEntityForm("annotation", null, parameters, dialogOption)
}

function isReferenceValid(reference) {
    var isValid = false;
    if (Mscrm.InternalUtilities.JSTypes)
        isValid = !Mscrm.InternalUtilities.JSTypes.isNull(reference);
    else
        isValid = !IsNull(reference);
    return isValid
}

function SetParams(requiredParameters) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        requiredParameters["etc"] = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
        requiredParameters["id"] = Xrm.Page.data.entity.getId()
    } else {
        var oCrmFormSubmit = $get("crmFormSubmit");
        requiredParameters["etc"] = oCrmFormSubmit.crmFormSubmitObjectType.value;
        requiredParameters["id"] = oCrmFormSubmit.crmFormSubmitId.value
    }
}