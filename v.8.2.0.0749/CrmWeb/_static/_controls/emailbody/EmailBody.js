
function unblock(emailId, wrpcTokenAsQueryString) {
    if (window.confirm(LOCID_WARN_HARMFUL_CONTENT)) {
        var o = openStdWin(Mscrm.CrmUri.create("/_controls/emailbody/msgBody.aspx?unblockContent=1&id=" +
                emailId +
                "&entityType=email" +
                wrpcTokenAsQueryString),
            null,
            700,
            500,
            "menubar=1,status=1,resizable=1,scrollbars=1");
        o.opener = null;
        o.focus()
    }
}

function BuildChooseTemplateTargetList() {
    var aTargets = [];
    AddRecipients(aTargets, "regardingobjectid", "re");
    AddRecipients(aTargets, "to", "to");
    AddRecipients(aTargets, "cc", "cc");
    return aTargets
}

function AddRecipients(aTargets, aTargetControlId, sTargetControlSource) {
    var aTargetControl;
    aTargetControl = Xrm.Page.data.entity.attributes.get(aTargetControlId);
    if (!IsNull(aTargetControl)) {
        var recipients;
        recipients = aTargetControl.getValue();
        if (!IsNull(recipients))
            for (var i = 0; i < recipients.length; i++) {
                recipients[i].source = sTargetControlSource;
                aTargets.push(recipients[i])
            }
    }
}

function ChooseTemplateTarget(aTargets, storedRange) {
    for (var sUrl = "/activities/email/dlg_template_target.aspx?",
        oSelectedId,
        oSelectedType,
        nObjects = 0,
        bConflicts = false,
        iId,
        oIds = "",
        oTypes = "",
        oNames = "",
        oParts = "",
        CheckIfNullOrEmptyString = function(str) {
            if (typeof isNullOrEmptyString === "undefined")
                return IsNullOrEmptyString(str);
            else
                return isNullOrEmptyString(str)
        },
        i = 0;
        i < aTargets.length;
        i++)
        if (isValidTemplateObjectType(aTargets[i].type)) {
            nObjects++;
            oIds += (!CheckIfNullOrEmptyString(oIds) ? ";" : "") + CrmEncodeDecode.CrmUrlEncode(aTargets[i].id);
            oTypes += (!CheckIfNullOrEmptyString(oTypes) ? ";" : "") + CrmEncodeDecode.CrmUrlEncode(aTargets[i].type);
            oNames += (!CheckIfNullOrEmptyString(oNames) ? ";" : "") + CrmEncodeDecode.CrmUrlEncode(aTargets[i].name);
            oParts += (!CheckIfNullOrEmptyString(oParts) ? ";" : "") + CrmEncodeDecode.CrmUrlEncode(aTargets[i].source);
            oSelectedId = aTargets[i].id;
            oSelectedType = aTargets[i].type;
            if (!bConflicts) {
                if (IsNull(iId))
                    iId = oSelectedId;
                bConflicts = iId != oSelectedId
            }
        }
    var sUrlElement = "oids=" + oIds + "&otypes=" + oTypes + "&onames=" + oNames + "&oparts=" + oParts;
    if (nObjects == 0) {
        var RegardingObject = Xrm.Page.data.entity.attributes.get("regardingobjectid"),
            RegardingItems = null;
        if (!IsNull(RegardingObject))
            RegardingItems = RegardingObject.getValue();
        if (!IsNull(RegardingItems) &&
            RegardingItems.length > 0 &&
            RegardingItems[0].type == Mscrm.InternalUtilities.EntityTypeCode.BulkOperation)
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_CHANGE_REGARDING"), null);
        else
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_RECIPIENT_TMPLT_RQD"), null);
        return null
    }
    if (nObjects > 1 && bConflicts) {
        if (sUrl.length + sUrlElement.length > 2e3) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_TOO_MANY_TARGETS"), null);
            return
        }
        sUrl += sUrlElement;
        var oUrl = Mscrm.CrmUri.create(sUrl);
        Xrm.Internal.openDialog(oUrl.toString(),
            CreateDialogOptions(350, 540),
            null,
            null,
            function(sResponse) {
                templateTargetCallback(sResponse, storedRange)
            });
        return
    }
    return new TemplateTarget(oSelectedId, oSelectedType)
}

function templateTargetCallback(sResponse, storedRange) {
    if (sResponse == null)
        ApplyTemplate(true, null, storedRange);
    else {
        oSelectedId = sResponse.oid;
        oSelectedType = sResponse.otype;
        ApplyTemplate(true, new TemplateTarget(oSelectedId, oSelectedType), storedRange)
    }
}

function ApplyTemplate(skipDialog, oTarget, storedRange) {
    if (!isRichClient()) {
        if (IsNull(storedRange))
            if (Mscrm.InternalUtilities.Utilities.isIE10OrLower() && !IsNull(document.selection))
                storedRange = document.selection.createRange();
            else
                storedRange = document.getSelection();
        if (!IsNull(storedRange) &&
            storedRange.boundingHeight == 0 &&
            storedRange.boundingWidth == 0 &&
            storedRange.boundingLeft == 0 &&
            storedRange.boundingTop == 0)
            storedRange = null
    }
    if (IsNull(skipDialog) || !skipDialog) {
        var aTargets = BuildChooseTemplateTargetList();
        oTarget = ChooseTemplateTarget(aTargets, storedRange)
    }
    if (oTarget == null)
        return;
    var oUrl,
        uri = window.location.search;
    if (uri == "")
        uri = window.location.hash;
    if (uri.indexOf("?") == -1 && uri.indexOf("#") != -1)
        uri = uri.replace("#", "?");
    var qsUrl = Mscrm.CrmUri.create(uri),
        emailId = qsUrl.get_query()["id"];
    if (IsNull(emailId)) {
        var extraqs = qsUrl.get_query()["extraqs"],
            recordId = null;
        if (!IsNull(extraqs)) {
            extraqs = CrmEncodeDecode.CrmUrlDecode(extraqs);
            recordId = Mscrm.CrmUri.create(extraqs).get_query()["id"]
        } else
            recordId = Xrm.Page.data.entity.getId();
        emailId = recordId != "" ? recordId : null
    }
    var richClient = "";
    if (isRichClient())
        richClient = "&richClient=1";
    if (emailId != null)
        oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=false&objectTypeCode=" +
            oTarget.otype +
            "&objectId=" +
            oTarget.oid +
            "&targetId=" +
            emailId +
            "&targetType=4202" +
            richClient);
    else
        oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx?bulkemail=false&objectTypeCode=" +
            oTarget.otype +
            "&objectId=" +
            oTarget.oid +
            richClient);
    Xrm.Internal.openDialog(oUrl.toString(),
        CreateDialogOptions(600, 700),
        [],
        null,
        function(sResponse) {
            performActionAfterSelectTemplate(sResponse, oTarget, storedRange)
        })
}

function CreateDialogOptions(height, width) {
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = height;
    dialogOptions.width = width;
    return dialogOptions
}

function CreateCallbackFunctionFactory(func, parameters) {
    return function(retValue) {
        parameters.unshift(retValue);
        return func.apply(null, parameters)
    }
}

function performActionAfterSelectTemplate(sResponse, oTarget, storedRange) {
    if (sResponse != null)
        if (isRichClient())
            getOutlookHostedWindow().insertTemplateMessageData(sResponse.tmplId, oTarget.oid, oTarget.otype);
        else {
            var descriptionElement,
                oldDescription,
                newDescription;
            descriptionElement = Xrm.Page.data.entity.attributes.get("description");
            oldDescription = descriptionElement.getValue();
            InsertHtmlIntoHtmlBody(sResponse.EmailBody, storedRange);
            newDescription = descriptionElement.getValue();
            oldDescription != newDescription &&
                descriptionElement.fireOnChange();
            var subjectCtrl = Xrm.Page.data.entity.attributes.get("subject"),
                sEmailSubject = subjectCtrl.getValue(),
                template = Xrm.Page.data.entity.attributes.get("templateid");
            template.setValue([
                { id: CrmEncodeDecode.CrmHtmlDecode(sResponse.EmailTemplateId), name: "", entityType: "template" }
            ]);
            if (!IsNull(sEmailSubject) && sEmailSubject.length > 0)
                if (!confirm(Xrm.Internal.getResourceString("LOCID_EMAIL_REPLACE_SUBJECT")))
                    return;
            subjectCtrl.setValue(CrmEncodeDecode.CrmHtmlDecode(sResponse.EmailSubject)
                .substr(0, subjectCtrl.getMaxLength()));
            sEmailSubject != subjectCtrl.getValue() &&
                subjectCtrl.fireOnChange();
            try {
                Xrm.Internal.refreshParentGrid(Mscrm.InternalUtilities.EntityTypeCode.ActivityMimeAttachment,
                    Xrm.Internal.getEntityName(Mscrm.InternalUtilities.EntityTypeCode.ActivityMimeAttachment),
                    "")
            } catch (e) {
            }
        }
}

function isValidTemplateObjectType(nObjectType) {
    return nObjectType != Mscrm.InternalUtilities.EntityTypeCode.Queue &&
        nObjectType != Mscrm.InternalUtilities.EntityTypeCode.BulkOperation &&
        nObjectType != Mscrm.InternalUtilities.EntityTypeCode.UnresolvedEmailParty
}

function TemplateTarget(oid, otype) {
    this.oid = oid;
    this.otype = otype
}

function InsertKBArticle() {
    var lookupItems = LookupKBArticle();
    Xrm.Internal.isModalDialogSupported() &&
        performActionAfterKBLookup(lookupItems)
}

function performActionAfterKBLookup(lookupItems) {
    var oId = GetFirstLookupItem(lookupItems);
    InsertKBArticleIntoEmailBody(oId)
}

function LookupKBArticle() {
    var oUrl = Mscrm.CrmUri.create("/CS/dialogs/KBSearch.aspx?HideEmailButton=true");
    Xrm.Internal.openDialog(oUrl.toString(), CreateDialogOptions(500, 700), [], null, performActionAfterKBLookup)
}

function LookupSalesLiterature() {
    var lookupItems = LookupObjects(null, "single", SalesLiterature, 0);
    return GetFirstLookupItem(lookupItems)
}

function GetFirstLookupItem(lookupItems) {
    if (!IsNull(lookupItems))
        if (lookupItems.items.length > 0)
            return lookupItems.items[0].id;
    return null
}

function InsertSignature() {
    var entityName = Xrm.Page.getAttribute("from").getValue()[0].entityType.toString(),
        fromFieldUserId = Xrm.Page.getAttribute("from").getValue()[0].id;
    if (!IsNull(fromFieldUserId) && !IsNull(entityName)) {
        var oUrl = Mscrm.CrmUri.create("/_grid/cmds/dlg_emailsignature.aspx?ownerId=" +
            fromFieldUserId +
            "&entityName=" +
            entityName);
        Xrm.Internal.openDialog(oUrl.toString(),
            CreateDialogOptions(500, 700),
            [],
            null,
            performActionAfterSelectEmailSignature)
    }
}

function performActionAfterSelectEmailSignature(sResponse, oTarget, storedRange) {
    if (sResponse != null)
        sResponse.EmailBody != null &&
            InsertSignatureIntoHtmlBody(sResponse.EmailBody)
}

function InsertKBArticleIntoEmailBody(oId) {
    if (!IsNull(oId)) {
        oUrl = Mscrm.CrmUri.create("/CS/articles/viewer/content.aspx");
        oUrl.get_query()["id"] = oId;
        var oXmlHttp = new XMLHttpRequest;
        oXmlHttp.open("POST", oUrl.toString(), false);
        oXmlHttp.send("");
        if (oXmlHttp.responseText != null) {
            var descriptionElement,
                oldDescription,
                newDescription;
            descriptionElement = Xrm.Page.data.entity.attributes.get("description");
            oldDescription = descriptionElement.getValue();
            InsertHtmlIntoHtmlBody(oXmlHttp.responseText);
            newDescription = descriptionElement.getValue();
            oldDescription != newDescription &&
                descriptionElement.fireOnChange()
        }
    }
}

function InsertHtmlIntoHtmlBody(sHtmlToInsert) {
    InsertHtmlIntoHtmlBody(sHtmlToInsert, null)
}

function InsertHtmlIntoHtmlBody(sHtmlToInsert, range) {
    if (isRichClient())
        getOutlookHostedWindow().InsertHtmlIntoHtmlBody(sHtmlToInsert);
    else if (!Xrm.Internal.isTurboForm())
        Mscrm.FormControlInputBehavior.GetBehaviorForForm("description").InsertValue(sHtmlToInsert, range);
    else
        InsertValue(sHtmlToInsert)
}

function InsertValue(htmlToInsert) {
    var descriptionEditIFrame = document.getElementById("descriptionEditIFrame");
    if (IsNull(descriptionEditIFrame) && Xrm.Internal.isTurboForm())
        descriptionEditIFrame = window.parent.document.getElementById("descriptionEditIFrame");
    EmailBody = descriptionEditIFrame.contentWindow;
    EmailBody.document.body.focus();
    var id = "df" + (new Date).getTime(),
        paragraphElement,
        doc = EmailBody.document,
        selection = EmailBody.getSelection(),
        range = selection.getRangeAt(0);
    range.deleteContents();
    paragraphElement = doc.createElement("p");
    paragraphElement.id = id;
    range.insertNode(paragraphElement);
    range.collapse(true);
    if (IsNull(paragraphElement))
        return null;
    var spanElement = EmailBody.document.createElement("SPAN");
    spanElement.innerHTML = htmlToInsert;
    paragraphElement.parentNode.replaceChild(spanElement, paragraphElement);
    return ""
}

function InsertSignatureIntoHtmlBody(sHtmlToInsert) {
    if (isRichClient())
        getOutlookHostedWindow().InsertSignatureIntoHtmlBody(sHtmlToInsert);
    else if (!Xrm.Internal.isTurboForm())
        Mscrm.FormControlInputBehavior.GetBehaviorForForm("description").InsertSignatureValue(sHtmlToInsert);
    else
        InsertSignatureValue(sHtmlToInsert)
}

function InsertSignatureValue(htmlToInsert) {
    var descriptionEditIFrame = document.getElementById("descriptionEditIFrame");
    if (IsNull(descriptionEditIFrame) && Xrm.Internal.isTurboForm())
        descriptionEditIFrame = window.parent.document.getElementById("descriptionEditIFrame");
    EmailBody = descriptionEditIFrame.contentWindow.document;
    var signatureElem = EmailBody.getElementById("signature");
    if (signatureElem === null) {
        var signature = document.createElement("div"),
            newLine = document.createElement("BR");
        signature.id = "signature";
        signature.innerHTML = htmlToInsert;
        EmailBody.body.appendChild(newLine);
        EmailBody.body.appendChild(newLine);
        EmailBody.body.appendChild(newLine);
        EmailBody.body.appendChild(signature)
    } else {
        signatureElem.innerHTML = htmlToInsert;
        Mscrm.MetricsReporting &&
            Mscrm.MetricsReporting.instance().addCounterMetric("EmailSignatureReplaced", 1)
    }
    window.setTimeout(function() {
            EmailBody.body.focus()
        },
        0);
    return ""
}