
var _oSCUConst = {
        sEntityMode: "entity",
        sAttributeMode: "attribute",
        sRelationshipMode: "relationship",
        sShowUsageUrlFormat: "/tools/systemcustomization/showUsage.aspx?mode={0}",
        iUsageDialogWidth: 600,
        iUsageDialogHeight: 400
    },
    _oSCUErrorCodes = { sAccessDenied: "0x80070005" },
    _oTags = {
        activities: "activities",
        activityparties: "activityparties",
        assign: "assign",
        associatedentity: "associatedentity",
        attribute: "attribute",
        attributeid: "attributeid",
        attributemap: "attributemap",
        attributeschemaname: "attributeschemaname",
        auditenabled: "auditenabled",
        changetrackingenabled: "changetrackingenabled",
        autoroutetoownerqueue: "autoroutetoownerqueue",
        autocreateaccessteams: "autocreateaccessteams",
        businessprocessenabled: "businessprocessenabled",
        connection: "connection",
        cascading: "cascading",
        defaultvalue: "defaultvalue",
        Delete: "delete",
        description: "description",
        displayarea: "displayarea",
        displayareas: "displayareas",
        displayed: "displayed",
        displayname: "displayname",
        collaboration: "collaboration",
        docmgmtenabled: "docmgmtenabled",
        knowledgemgmtenabled: "knowledgemgmtenabled",
        duplicatecheck: "duplicatecheck",
        isfieldsecurityenabled: "isfieldsecurityenabled",
        entity: "entity",
        entities: "entities",
        entityid: "entityid",
        entitymapid: "entitymapid",
        entityisactivity: "entityisactivity",
        format: "format",
        id: "id",
        iscommunicationactivity: "iscommunicationactivity",
        isvalidforadvancedfind: "isvalidforadvancedfind",
        ishierarchical: "ishierarchical",
        length: "length",
        local: "local",
        mailmergecheck: "mailmergecheck",
        maxvalue: "maxvalue",
        merge: "merge",
        minvalue: "minvalue",
        multiplevalue: "multiplevalue",
        mobileofflinefilters: "mobileofflinefilters",
        name: "name",
        notes: "notes",
        offline: "offline",
        optionsetid: "optionsetid",
        ownershiptype: "ownershiptype",
        pluralname: "pluralname",
        precision: "precision",
        precisionsource: "precisionsource",
        primaryimagename: "primaryimagename",
        publish: "publish",
        referencedentityname: "referencedentityname",
        referencedinstancename: "referencedinstancename",
        referencingentityname: "referencingentityname",
        referencinginstancename: "referencinginstancename",
        relationship: "relationship",
        relationshipid: "relationshipid",
        reparent: "reparent",
        reqlevel: "reqlevel",
        richclient: "richclient",
        schemaname: "schemaname",
        schemaname2: "schemaname2",
        searchable: "searchable",
        share: "share",
        singularname: "singularname",
        type: "type",
        imemode: "imemode",
        yomiof: "yomiof",
        sourceattributename: "sourceattributename",
        targetattributename: "targetattributename",
        unshare: "unshare",
        associatedmenu: "associatedmenu",
        displayoption: "displayoption",
        displayarea: "displayarea",
        navpaneorder: "navpaneorder",
        customlabel: "customlabel",
        currententity: "currententity",
        otherentity: "otherentity",
        entityname: "entityname",
        entityrelationshipid: "entityrelationshipid",
        manytomany: "manytomany",
        associatedmenuotherentity: "associatedmenuotherentity",
        currententityname: "currententityname",
        otherentityname: "otherentityname",
        intersectentityname: "intersectentityname",
        icons: "icons",
        iconlarge: "iconlarge",
        iconmedium: "iconmedium",
        iconsmall: "iconsmall",
        visibleinmobile: "visibleinmobile",
        readingpaneenabled: "readingpaneenabled",
        visibleinmobileclient: "visibleinmobileclient",
        readonlyinmobileclient: "readonlyinmobileclient",
        offlineinmobileclient: "offlineinmobileclient",
        dayssincerecordlastmodified: "dayssincerecordlastmodified",
        isquickcreateenabled: "isquickcreateenabled",
        formuladefinition: "formuladefinition",
        sourcetype: "sourcetype",
        entityhelpurl: "entityhelpurl",
        entityhelpurlenabled: "entityhelpurlenabled",
        entitycolor: "entitycolor",
        behaviors: "behavior",
        onenoteintegrationenabled: "onenoteintegrationenabled",
        entitykey: "entitykey",
        interactioncentricenabled: "interactioncentricenabled",
        entitykeyid: "entitykeyid",
        entitykeyattributes: "entitykeyattributes",
        isexternalappenabled: "isexternalappenabled",
        isenabledforexternalchannels: "isenabledforexternalchannels",
        isglobalfilterenabled: "isglobalfilterenabled",
        issortableenabled: "issortableenabled",
        feedback: "feedback",
        isslaenabled: "isslaenabled",
        sitemapid: "sitemapid"
    };

function createXmlDoc(sRootName) {
    return loadXmlDoc("<" + sRootName + "></" + sRootName + ">")
}

function loadXmlDoc(sXml) {
    var oXml = XUI.Xml.LoadXml(sXml);
    return oXml.documentElement
}

function convertXmlDocToString(oXml) {
    for (var sUnicodeXml = XUI.Xml.XMLSerializer.serializeToString(oXml),
        sUTF8CompatibleXml = new StringBuilder,
        i = 0;
        i < sUnicodeXml.length;
        i++) {
        var code = sUnicodeXml.charCodeAt(i),
            code2 = 0;
        if (i + 1 < sUnicodeXml.length)
            code2 = sUnicodeXml.charCodeAt(i + 1);
        if (code < 128)
            sUTF8CompatibleXml.Append(sUnicodeXml.charAt(i));
        else if (code >= 55296 && code <= 56319 && code2 >= 56320 && code2 <= 57343) {
            sUTF8CompatibleXml.Append("&#x" + ((code - 55296) * 1024 + (code2 & 1023) + 65536).toString(16) + ";");
            i++
        } else if (code >= 55296 && code <= 57343)
            sUTF8CompatibleXml.Append("&#xFFFD;");
        else
            sUTF8CompatibleXml.Append("&#x" + code.toString(16) + ";")
    }
    return sUTF8CompatibleXml.ToString()
}

function addXmlNode(oParentNode, sChildNodeName) {
    var oChildNode = oParentNode.ownerDocument.createElement(sChildNodeName);
    oParentNode.appendChild(oChildNode);
    return oChildNode
}

function addTextXmlNode(oParentNode, sChildNodeName, oChildNodeValue) {
    var oChildNode = null;
    if (oChildNodeValue != null) {
        oChildNode = addXmlNode(oParentNode, sChildNodeName);
        XUI.Xml.SetText(oChildNode, oChildNodeValue.toString())
    }
    return oChildNode
}

function addXmlAttribute(oParentNode, sAttributeName, oAttributeValue) {
    if (oAttributeValue != null) {
        var oAttribute;
        oAttribute = oParentNode.ownerDocument.createAttribute(sAttributeName);
        oAttribute.value = oAttributeValue.toString();
        oParentNode.attributes.setNamedItem(oAttribute)
    }
}

function addControlDataValue(oParentNode, sChildNodeName, element) {
    addControlDataValue(oParentNode, sChildNodeName, element, false)
}

function addControlDataValue(oParentNode, sChildNodeName, element, bAddEvenIfDisabled) {
    var ajaxControl = Mscrm.FormControlInputBehavior.GetElementBehavior(element);
    ajaxControl != null &&
        (!ajaxControl.get_disabled() || bAddEvenIfDisabled) &&
        addTextXmlNode(oParentNode, sChildNodeName, ajaxControl.get_dataValue())
}

function addControlDataValueAsAttribute(oParentNode, sChildNodeName, oControl) {
    if (!oControl.Disabled) {
        var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id);
        addXmlAttribute(oParentNode, sChildNodeName, ajaxControl.get_dataValue())
    }
}

function addXmlString(oParentNode, sXml) {
    var oNode = null;
    if (!IsNull(sXml)) {
        oNode = loadXmlDoc(sXml);
        oParentNode.appendChild(oNode.cloneNode(true))
    }
    return oNode
}

var _oRemoteCommandContext = { oCommand: null, fCallback: null, oCallbackParams: null, bMessageShown: false };

function executeRemoteCommand(oCommand, sActionMessage, fCallback, oCallbackParams) {
    performRemoteCommandAction(oCommand, sActionMessage, fCallback, oCallbackParams);
    window.setTimeout(executeRemoteCommandInternal, 100)
}

function performRemoteCommandAction(oCommand, sActionMessage, fCallback, oCallbackParams) {
    _oRemoteCommandContext.oCommand = oCommand;
    _oRemoteCommandContext.fCallback = fCallback;
    _oRemoteCommandContext.oCallbackParams = oCallbackParams;
    if (sActionMessage != null) {
        DisplayActionMsg(sActionMessage, 400, 150);
        _oRemoteCommandContext.bMessageShown = true
    } else
        _oRemoteCommandContext.bMessageShown = false
}

function executeRemoteCommandInternal() {
    var oResult = _oRemoteCommandContext.oCommand.Execute(),
        bMessageShown = _oRemoteCommandContext.bMessageShown,
        bHideMessage = true,
        fCallback = _oRemoteCommandContext.fCallback,
        oCallbackParams = _oRemoteCommandContext.oCallbackParams;
    _oRemoteCommandContext = {};
    if (fCallback != null)
        bHideMessage = fCallback(oResult, oCallbackParams);
    bMessageShown &&
        bHideMessage &&
        HideActionMsg()
}

function executeRemoteCommandAsync(oCommand, sActionMessage, fCallback, oCallbackParams) {
    performRemoteCommandAction(oCommand, sActionMessage, fCallback, oCallbackParams);
    window.setTimeout(executeRemoteCommandInternalAsync, 100)
}

function executeRemoteCommandInternalAsync() {
    _oRemoteCommandContext.oCommand.execute(_oRemoteCommandContext.fCallback)
}

var _oRemoteCommandXmlContext = { oCommand: null, fCallback: null, oCallbackParams: null, bMessageShown: false };

function executeRemoteCommandXml(oCommand, sActionMessage, fCallback, oCallbackParams) {
    performRemoteCommandXmlAction(oCommand, sActionMessage, fCallback, oCallbackParams);
    window.setTimeout(executeRemoteCommandXmlInternal, 100)
}

function performRemoteCommandXmlAction(oCommand, sActionMessage, fCallback, oCallbackParams) {
    _oRemoteCommandXmlContext.oCommand = oCommand;
    _oRemoteCommandXmlContext.fCallback = fCallback;
    _oRemoteCommandXmlContext.oCallbackParams = oCallbackParams;
    if (sActionMessage != null) {
        DisplayActionMsg(sActionMessage, 400, 150);
        _oRemoteCommandXmlContext.bMessageShown = true
    } else
        _oRemoteCommandXmlContext.bMessageShown = false
}

function executeRemoteCommandXmlInternal() {
    var oResult = _oRemoteCommandXmlContext.oCommand.execute(),
        bMessageShown = _oRemoteCommandXmlContext.bMessageShown,
        bHideMessage = true,
        fCallback = _oRemoteCommandXmlContext.fCallback,
        oCallbackParams = _oRemoteCommandXmlContext.oCallbackParams;
    _oRemoteCommandXmlContext = {};
    if (fCallback != null)
        bHideMessage = fCallback(oResult, oCallbackParams);
    bMessageShown &&
        bHideMessage &&
        HideActionMsg()
}

function executeRemoteCommandXmlAsync(oCommand, sActionMessage, fCallback, oCallbackParams) {
    performRemoteCommandXmlAction(oCommand, sActionMessage, fCallback, oCallbackParams);
    window.setTimeout(executeRemoteCommandXmlInternalAsync, 100)
}

function executeRemoteCommandXmlInternalAsync() {
    _oRemoteCommandXmlContext.oCommand.execute(_oRemoteCommandXmlContext.fCallback)
}

function showUsage(sMode, oUsage) {
    var oUrl = Mscrm.CrmUri.create(formatString(_oSCUConst.sShowUsageUrlFormat, sMode));
    openStdDlg(oUrl, oUsage, _oSCUConst.iUsageDialogWidth, _oSCUConst.iUsageDialogHeight)
}

function showError(sErrorCode) {
    openErrorDlg(sErrorCode)
}

function ProcessKeyDown(e) {
    switch (e.keyCode) {
    case KEY_ESC:
        closeWindow();
        return false;
    case KEY_F12:
        if (e.shiftKey) {
            window._saveEnabled == true &&
                _save();
            e.preventDefault();
            e.stopPropagation();
            return false
        }
        break;
    case KEY_S:
        if (e.ctrlKey) {
            if (e.altKey)
                return true;
            if (e.shiftKey)
                window._saveAndNewEnabled == true &&
                    _saveandnew();
            else
                window._saveEnabled == true &&
                    _save();
            e.preventDefault();
            e.stopPropagation();
            return false
        } else if (e.altKey) {
            window._saveAndCloseEnabled == true &&
                _saveandclose();
            return false
        }
        break
    }
}

function DeleteFormRecord(objectType, objectId) {
    var url = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete.aspx");
    url.get_query()["iObjType"] = objectType;
    url.get_query()["iTotal"] = "1";
    url.get_query()["iId"] = objectId;
    var ids = new Array(1);
    ids[0] = objectId;
    var crmDialog = new Mscrm.CrmDialog(url, ids, 570, 205, null);
    return crmDialog.show()
}

function ReturnExportResult(bExport, bProtected, sOptionsXML, sTargetVersion, sFileContent, wrpcTokenAsQueryString) {
    var oResult = {};
    oResult.bExport = bExport;
    oResult.bProtected = bProtected;
    oResult.sOptionsXML = sOptionsXML;
    oResult.sTargetVersion = sTargetVersion;
    oResult.sFileContent = sFileContent;
    oResult.wrpcTokenAsQueryString = wrpcTokenAsQueryString;
    return oResult
}

function OpenPluginAssembly() {
    openStdWin(Mscrm.CrmUri.create(SOLUTIONS_UIGUIDANCE_ASSEMBLY),
        null,
        window.screen.availWidth * .9,
        window.screen.availHeight * .9,
        "scrollbars=1,toolbar=1,menubar=1,location=1")
}

function OpenSdkMessageProcessingStep() {
    openStdWin(Mscrm.CrmUri.create(SOLUTIONS_UIGUIDANCE_STEP),
        null,
        window.screen.availWidth * .9,
        window.screen.availHeight * .9,
        "scrollbars=1,toolbar=1,menubar=1,location=1")
}

function OpenServiceEndpoint() {
    openStdWin(Mscrm.CrmUri.create(SOLUTIONS_UIGUIDANCE_ENDPOINT),
        null,
        window.screen.availWidth * .9,
        window.screen.availHeight * .9,
        "scrollbars=1,toolbar=1,menubar=1,location=1")
}