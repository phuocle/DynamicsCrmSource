
Sys.Application.add_unload(function() {
    for (var attachments = Mscrm.Utilities.getChildElementsByClassName(document.body, "attachment"),
        i = 0;
        i < attachments.length;
        i++) {
        $removeHandler(attachments[i], "click", downloadAttachment);
        $removeHandler(attachments[i], "keyup", handleOnKeyup)
    }
    $removeHandler(window, "load", registerAttachmentHandlers)
});

function validate() {
    if (XUI.Html.GetComputedStyle($get("tblUpload"), "display") != "none" && $get("Attachments").userFile.value != "") {
        alert(LOCID_FILE_DID_NOT_ATTACH);
        return false
    } else
        return true
}

function removeAttachment(iType) {
    var sGuid = $get("crmFormSubmitId").value;
    remove(iType, sGuid)
}

function toggelButtonUI(element, bool) {
    var removeBtn = document.getElementById("butRemove"),
        progressDiv = document.getElementById("progressDiv"),
        crmAttachment = document.getElementById("crmAttachment"),
        crmAttachmentDisable = document.getElementById("crmAttachmentDisable");
    element.disabled = bool;
    removeBtn.disabled = bool;
    if (bool) {
        removeBtn.style.backgroundColor = "#D3D3D3";
        element.style.backgroundColor = "#D3D3D3";
        progressDiv.style.display = "";
        crmAttachment.style.display = "none";
        crmAttachmentDisable.style.display = ""
    } else {
        removeBtn.style.backgroundColor = "";
        element.style.backgroundColor = "";
        progressDiv.style.display = "none";
        crmAttachment.style.display = "";
        crmAttachmentDisable.style.display = "none"
    }
}

function setErrDescription() {
    var descriptionMsg = document.getElementById("descriptionMsg"),
        errMsg = document.getElementById("errMsg"),
        imgInfo = document.getElementById("imgInfo"),
        imgErr = document.getElementById("imgErr");
    descriptionMsg.style.display = "none";
    errMsg.style.display = "";
    imgInfo.style.display = "none";
    imgErr.style.display = ""
}

function refreshParentAttachmentGrid() {
    var parentPage = window.opener;
    if (!IsNull(parentPage)) {
        var gridControl = parentPage.Xrm.Page.getControl("attachmentsGrid");
        gridControl != null &&
            gridControl.refresh()
    }
}

function followAttachment(element, activityMimeAttachmentId) {
    if (activityMimeAttachmentId != null) {
        toggelButtonUI(element, true);
        console.log("Attachment follow started");
        var followStopWatch = Xrm.Internal.startMetricsStopwatch("FollowAttachment");
        followStopWatch.start();
        Xrm.Internal.messages.followEmailAttachment(activityMimeAttachmentId).then(function(response) {
                if (response != null && response.response != null) {
                    refreshParentAttachmentGrid();
                    if (followStopWatch != null) {
                        followStopWatch.stop();
                        console.log("Attachment upload completed in " +
                            followStopWatch.get_elapsedMilliseconds() +
                            " milliseconds")
                    }
                    window.location = $get("Attachments").SuccessURL.value
                } else {
                    toggelButtonUI(element, false);
                    setErrDescription();
                    if (followStopWatch != null) {
                        followStopWatch.stop();
                        console.log("Attachment upload failed in " +
                            followStopWatch.get_elapsedMilliseconds() +
                            " milliseconds")
                    }
                }
            },
            function(errorResponse) {
                toggelButtonUI(element, false);
                setErrDescription();
                if (followStopWatch != null) {
                    followStopWatch.stop();
                    console
                        .log("Attachment upload failed in " +
                            followStopWatch.get_elapsedMilliseconds() +
                            " milliseconds")
                }
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse)
            })
    }
}

function unfollowAttachment(element, activityMimeAttachmentId) {
    if (activityMimeAttachmentId != null) {
        toggelButtonUI(element, true);
        console.log("Unfollow attachment started");
        var unfollowStopWatch = Xrm.Internal.startMetricsStopwatch("UnfollowAttachment");
        unfollowStopWatch.start();
        Xrm.Internal.messages.unfollowEmailAttachment(activityMimeAttachmentId).then(function(response) {
                if (response != null) {
                    refreshParentAttachmentGrid();
                    if (unfollowStopWatch != null) {
                        unfollowStopWatch.stop();
                        console.log("Unfollow attachment completed in " +
                            unfollowStopWatch.get_elapsedMilliseconds() +
                            " milliseconds")
                    }
                    window.location = $get("Attachments").SuccessURL.value
                } else {
                    toggelButtonUI(element, false);
                    setErrDescription();
                    if (unfollowStopWatch != null) {
                        unfollowStopWatch.stop();
                        console.log("Unfollow attachment failed in " +
                            unfollowStopWatch.get_elapsedMilliseconds() +
                            " milliseconds")
                    }
                }
            },
            function(errorResponse) {
                toggelButtonUI(element, false);
                setErrDescription();
                if (unfollowStopWatch != null) {
                    unfollowStopWatch.stop();
                    console.log("Unfollow attachment failed in " +
                        unfollowStopWatch.get_elapsedMilliseconds() +
                        " milliseconds")
                }
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(errorResponse)
            })
    }
}

function remove(iType, sGuid) {
    if (confirm(LOCID_REMOVE_ATTACHMENT_ALRT)) {
        var command = new RemoteCommand("Annotation", "RemoveAttachment");
        command.SetParameter("id", sGuid);
        command.SetParameter("type", iType);
        var result = command.Execute(),
            sue = $get("Attachments").SuccessURL;
        if (result.Success) {
            $get("tblFile").style.display = "none";
            $get("tblUpload").style.display = "inline";
            alert(LOCID_ALERT_REMOVED_ATTACHMENT);
            if (iType == ActivityMimeAttachment) {
                var osu = Mscrm.CrmUri.create(sue.value);
                delete osu.get_query()["id"];
                if (location.href.indexOf("ish=true") != -1)
                    osu.get_query()["ish"] = "true";
                sue.value = osu.toString();
                $get("Attachments").AttachmentId.value = ""
            }
            try {
                window.opener.auto($get("crmFormSubmitObjectType", $get("crmFormSubmit")).value)
            } catch (e) {
            }
            if ($get("CloseWindow", $get("valueAttachments")).value == "True")
                closeWindow();
            else
                window.location = sue.value
        }
    }
}

var attaching = false;

function attach(sUrl, sNode) {
    if (attaching)
        return;
    attaching = true;
    var errorMessage;
    try {
        errorMessage = attachForLegacy(sUrl, sNode, false)
    } catch (e) {
        attaching = false
    }
    if (errorMessage != "") {
        attaching = false;
        alert(errorMessage);
        return false
    }
    return true
}

function attachForNotesV2() {
    return attachForLegacy(null, null, true)
}

function attachForLegacy(sUrl, sNode, notesv2) {
    var attachements = $get("Attachments"),
        sFileName = attachements.userFile.value,
        spUpload = $get("Attachments").IsSPDocument.value;
    if (spUpload == "true")
        if (window.top != null && window.top.opener != null)
            window.top.opener["UploadStart"] = (new Date).getTime();
    if (!notesv2 && spUpload != "true" && sFileName == "")
        return LOCID_ALERT_SEPECIFY_FILE;
    else if (spUpload == "true" && sFileName == "")
        return LOCID_ALERT_NO_UPLOAD_FILENAME;
    sFileName = sFileName.slice(sFileName.lastIndexOf("\\") + 1);
    if (spUpload != "true" && sFileName.length > 185)
        return LOCID_ATTACHMENT_NAME_LENGTH;
    else if (spUpload == "true" && sFileName.length > 165)
        return LOCID_SP_UPLOAD_NAME_LENGTH;
    if (spUpload == "true") {
        $get("tdRefreshDialogBody").style.display = "none";
        $get("tdRefreshDialogHeader").style.display = "none";
        $get("tdDialogFooter").style.display = "none";
        $get("showProgress").style.display = "block"
    }
    var bIsValid = false,
        bCalledFromWorkflow = typeof bWorkflowStep != "undefined" && bWorkflowStep,
        attachmentsFormcrmFormSubmitXmlElement = $get("crmFormSubmitXml", $get("Attachments")),
        crmSubmitFormFormSubmitXmlElement = $get("crmFormSubmitXml", $get("crmFormSubmit"));
    if (notesv2)
        bIsValid = true;
    else if (attachements.AttachmentId.value == "") {
        var subject = $get("subject");
        !IsNull(subject) &&
            subject.value === "" &&
            Mscrm.FormControlInputBehavior.GetBehavior("subject").set_dataValue(LOCID_NOTES_FILE_ATTACHMENT);
        bIsValid = $find("crmForm").BuildXml(true, false, false, bCalledFromWorkflow) != 2
    } else
        bIsValid = $find("crmForm").BuildXml(true, true, false, bCalledFromWorkflow) != 2;
    if (bIsValid) {
        try {
            bCalledFromWorkflow &&
                BuildWorkflowNoteXml()
        } catch (ex) {
        }
        attachements.crmFormSubmitXml.value = $get("crmFormSubmit").crmFormSubmitXml.value;
        if ($get("Attachments").OverwriteExistingFile != null && $get("OverWriteExisting") != null)
            $get("Attachments").OverwriteExistingFile.value = $get("OverWriteExisting").checked;
        else {
            $get("Attachments").OverwriteExistingFile.value = false;
            $get("Attachments").IsSPDocument.value = false
        }
        $find("crmForm").set_saving(true);
        var successUrlElement = attachements.SuccessURL,
            oSuccessUrl = Mscrm.CrmUri.create(successUrlElement.value);
        oSuccessUrl.get_query()["rg"] = "1";
        if ($get("OverWriteExisting") != null)
            oSuccessUrl.get_query()["cw"] = "True";
        else
            oSuccessUrl.get_query()["cw"] = attachements.CloseWindow.value;
        oSuccessUrl.get_query()["refreshGrid"] = "1";
        if (!IsNull(window.inlineDialogId))
            oSuccessUrl.get_query()["inlineDialogId"] = window.inlineDialogId;
        if (location.href.indexOf("hideDesc=1") != -1)
            oSuccessUrl.get_query()["hideDesc"] = "1";
        if (location.href.indexOf("ish=true") != -1)
            oSuccessUrl.get_query()["ish"] = "true";
        successUrlElement.value = oSuccessUrl.toString();
        try {
            attachements.submit();
            if (typeof bWorkflowStep == "undefined" || !bWorkflowStep) {
                var parentPage = window.opener;
                !IsNull(parentPage) &&
                    (typeof parentPage.OnAttach == "function" || typeof parentPage.OnAttach == "object") &&
                    parentPage.OnAttach()
            }
        } catch (e) {
            return LOCID_FILE_DOES_NOT_EXISTS
        }
    }
    return ""
}

function attachmentClose(oEvent) {
    oEvent = oEvent.rawEvent;
    var msg = LOCID_FORMS_SAVE_CONFIRM_TITLE;
    if ($find("crmForm").get_saving())
        return;
    if ($find("crmForm").BuildXml(false, true) != 3) {
        oEvent.returnValue = msg;
        return msg
    } else if (XUI.Html.GetComputedStyle($get("tblUpload"), "display") != "none" &&
        $get("Attachments").userFile.value != "") {
        oEvent.returnValue = msg;
        return msg
    }
}

function getTypeFromURL(sUrl) {
    sUrl = sUrl.toLowerCase();
    if (sUrl.indexOf("note") != -1)
        return Annotation;
    if (sUrl.indexOf("activities") != -1)
        return ActivityMimeAttachment;
    if (sUrl.indexOf("saleslit") != -1)
        return SalesLiteratureItem
}

function registerAttachmentHandlers() {
    for (var attachments = Mscrm.Utilities.getChildElementsByClassName(document.body, "attachment"),
        i = 0;
        i < attachments.length;
        i++) {
        $addHandler(attachments[i], "click", downloadAttachment);
        $addHandler(attachments[i], "keyup", handleOnKeyup)
    }
}

function handleOnKeyup(eventObject) {
    Mscrm.Utilities.getDomEventKeyCode(eventObject) === Sys.UI.Key.enter &&
        downloadAttachment(eventObject);
    eventObject.preventDefault();
    eventObject.stopPropagation()
}

function downloadAttachment(eventObject) {
    var element = eventObject.target,
        hideOpenButton = element.getAttribute("HideOpenButton"),
        parentHeadNode,
        bFoundDownLoadOptionsWithNoOpen = false,
        parentHeadNodes = top.document.getElementsByTagName("Head");
    if (parentHeadNodes != null && parentHeadNodes.length != 0) {
        parentHeadNode = parentHeadNodes[0];
        if (parentHeadNode != null) {
            var metaElements = parentHeadNode.getElementsByTagName("meta");
            if (metaElements != null)
                for (var i = 0; i < metaElements.length; i++)
                    if (metaElements[i].getAttribute("name") != "undefined" &&
                        metaElements[i].getAttribute("name") == "DownloadOptions") {
                        if (metaElements[i].getAttribute("content") != "undefined" &&
                            metaElements[i].getAttribute("content") == "noopen")
                            bFoundDownLoadOptionsWithNoOpen = true;
                        (hideOpenButton == "undefined" ||
                                hideOpenButton == "0" ||
                                metaElements[i].getAttribute("content") != "undefined" &&
                                metaElements[i].getAttribute("content") != "noopen") &&
                            parentHeadNode.removeChild(metaElements[i])
                    }
        }
    }
    if (hideOpenButton != "undefined" && hideOpenButton == "1" && !bFoundDownLoadOptionsWithNoOpen) {
        var downloadOptionsMetaElement = top.document.createElement("meta");
        downloadOptionsMetaElement.setAttribute("name", "DownloadOptions");
        downloadOptionsMetaElement.setAttribute("content", "noopen");
        parentHeadNode.appendChild(downloadOptionsMetaElement)
    }
    var downloadUrl = element.getAttribute("url") +
        "?AttachmentType=" +
        element.getAttribute("attachmentType") +
        "&AttachmentId=" +
        element.getAttribute("attachmentId") +
        "&IsNotesTabAttachment=" +
        element.getAttribute("IsNotesTabAttachment") +
        element.getAttribute("WRPCTokenUrl");
    if (Mscrm.Utilities.isIosDevice()) {
        window.open(downloadUrl);
        eventObject.preventDefault();
        eventObject.stopPropagation()
    } else
        window.location.href = downloadUrl
}

$addHandler(window, "load", registerAttachmentHandlers)