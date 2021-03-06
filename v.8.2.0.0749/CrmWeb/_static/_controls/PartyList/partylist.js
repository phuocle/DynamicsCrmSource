
function ResolveUnkownParty(domEventObject, sPartyName, sFieldName) {
    var lookupItem = domEventObject.target;
    while (lookupItem.tagName != "SPAN" || lookupItem.getAttribute("wrapper") == "true")
        lookupItem = lookupItem.parentNode;
    var oUrl = Mscrm.CrmUri.create("/_controls/partylist/resolve.aspx?address=" +
            CrmEncodeDecode.CrmUrlEncode(sPartyName)),
        parameters = [lookupItem, sPartyName, sFieldName],
        callbackFunctionObject = Mscrm.Utilities
            .createCallbackFunctionObject("resolvePartyFromLookUp", this, parameters),
        returnObject = openStdDlgWithCallback(oUrl, null, 450, 450, callbackFunctionObject);
    isInlineLookupItem(lookupItem) &&
        domEventObject.stopPropagation();
    isOutlookHostedWindow() &&
        resolvePartyFromLookUp(returnObject, lookupItem, sPartyName, sFieldName)
}

function isInlineLookupItem(lookupItem) {
    return lookupItem.hasAttribute("isInlineLookup") && lookupItem.getAttribute("isInlineLookup")
}

function isLookupDisabled(lookupItem) {
    var element = lookupItem.parentNode.parentNode;
    if (element.hasAttribute("data-controlmode") && element.getAttribute("data-controlmode") == "deactivated")
        return true;
    return false
}

function resolvePartyFromLookUp(returnObject, lookupItem, sPartyName, sFieldName) {
    if (returnObject) {
        lookupItem.setAttribute("oid", returnObject.id);
        lookupItem.setAttribute("otype", returnObject.type);
        lookupItem.className = "ms-crm-Lookup-Item";
        lookupItem.setAttribute("category", "");
        lookupItem.setAttribute("data", "");
        lookupItem.unselectable = "on";
        var partyListControlId = null,
            inlineLookupItem = isInlineLookupItem(lookupItem),
            lookupDisabled = isLookupDisabled(lookupItem);
        if (inlineLookupItem) {
            partyListControlId = XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils
                    .GetNextSibling(XUI.Html.DomUtils
                        .GetNextSibling(lookupItem.parentNode.parentNode.parentNode.parentNode))).id;
            XUI.Html.DomUtils.GetFirstChild(lookupItem)
                .innerHTML = '<SPAN class=ms-crm-LookupItem-Name wrapper="true">' +
                CrmEncodeDecode.CrmHtmlEncode(returnObject.name) +
                "</SPAN>";
            lookupItem.hasAttribute("onCtrlEnter") &&
                lookupItem.setAttribute("onCtrlEnter", "openlui(new Sys.UI.DomEvent(event));");
            lookupItem.hasAttribute("ondblclick") &&
                lookupItem.setAttribute("ondblclick", "openlui(new Sys.UI.DomEvent(event));")
        } else if (lookupDisabled)
            ResolvePartyFromDisabledLookup(returnObject, sPartyName, sFieldName);
        else {
            partyListControlId = XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils.GetNextSibling(lookupItem.parentNode.parentNode.parentNode.parentNode))
                .id;
            XUI.Html.DomUtils.GetFirstChild(lookupItem)
                .innerHTML = "<img alt='' class='ms-crm-Lookup-Item' src='/_imgs/ico_16_" +
                returnObject.type +
                '.gif\'><SPAN class=ms-crm-LookupItem-Name wrapper="true">' +
                CrmEncodeDecode.CrmHtmlEncode(returnObject.name) +
                "</SPAN>";
            lookupItem.onclick = function(event) {
                if (!event)
                    event = window.event;
                openlui(new Sys.UI.DomEvent(event));
                return false
            }
        }
        if (!lookupDisabled) {
            var partyListControl = Mscrm.FormControlInputBehavior.GetBehavior(partyListControlId);
            partyListControl.set_forceSubmit(true);
            if (inlineLookupItem) {
                var spanElement = lookupItem;
                partyListControl.normalizeMultiLookupItem(spanElement);
                partyListControl.normalizeLookupItem(spanElement,
                    Mscrm.FormInputControl.LookupUIBehavior.unresolvedLookupItemClass);
                partyListControl.resizeAndShowHideMultiLookupInputElement();
                partyListControl.getLookupEdit().focus()
            }
        }
    }
}

function ResolvePartyFromDisabledLookup(returnObject, sPartyName, sFieldName) {
    for (var oAttribute = Xrm.Page.data.entity.attributes.get(sFieldName),
        oOldLookupItems = oAttribute.getValue(),
        iCount = oOldLookupItems.length,
        oNewLookupItems = [],
        i = 0;
        i < iCount;
        i++)
        if (parseInt(oOldLookupItems[i].type, 10) == UnresolvedEmailParty &&
            Mscrm.LookupAttribute.undefinedAndEmptyToNull(oOldLookupItems[i].name) ==
            Mscrm.LookupAttribute.undefinedAndEmptyToNull(sPartyName)) {
            var oResolvedLookupItem = new LookupControlItem;
            oResolvedLookupItem.id = returnObject.id;
            oResolvedLookupItem.type = returnObject.type.toString();
            oResolvedLookupItem.name = returnObject.name;
            oResolvedLookupItem.activityPartyId = oOldLookupItems[i].activityPartyId;
            oNewLookupItems.push(oResolvedLookupItem)
        } else
            oNewLookupItems.push(oOldLookupItems[i]);
    oAttribute.setValue(oNewLookupItems);
    oAttribute.setSubmitMode(Xrm.SubmitMode.always)
}

function OpenItemForceSubmit(eventObject) {
    openlui(eventObject);
    var lookupItem = eventObject.target,
        lookupButtonTD = XUI.Html.DomUtils.GetNextSibling(lookupItem.parentNode.parentNode.parentNode.parentNode
            .parentNode);
    if (!IsNull(lookupButtonTD)) {
        var formControlInputBehavior = Mscrm.FormControlInputBehavior
            .GetBehavior(XUI.Html.DomUtils.GetFirstChild(lookupButtonTD).id);
        !IsNull(formControlInputBehavior) &&
            formControlInputBehavior.set_defaultValue(null)
    }
}