
var _oMessages = { sNoSelectedAttributes: LOCID_CRTMAP_MUSTSELECT },
    _oConst = { sSourceGridName: "sourceAttributesGrid", sTargetGridName: "targetAttributesGrid" };

function CreateMappingJsWindowOnLoad() {
    var sourceAttributesGrid = $find("sourceAttributesGrid"),
        targetAttributesGrid = $find("targetAttributesGrid");
    sourceAttributesGrid.add_onBeforeFormLoad(onAttributeDblClick);
    sourceAttributesGrid.SetParameter("disableDblClick", "0");
    targetAttributesGrid.add_onBeforeFormLoad(onAttributeDblClick);
    targetAttributesGrid.SetParameter("disableDblClick", "0")
}

Sys.Application.add_load(CreateMappingJsWindowOnLoad);

function cancel() {
    window.returnValue = null;
    closeWindow()
}

function applychanges() {
    if (validateParameters()) {
        var oResult = {};
        oResult.sMappingXml = getMappingXml();
        window.returnValue = oResult;
        Mscrm.Utilities.isChrome() &&
            window.opener.displayCreatedMapping(oResult);
        closeWindow()
    }
}

function getMappingXml() {
    var sSourceAttribute = getSelected(_oConst.sSourceGridName),
        sTargetAttribute = getSelected(_oConst.sTargetGridName),
        oDataXml = createXmlDoc(_oTags.attributemap);
    addTextXmlNode(oDataXml, _oTags.sourceattributename, sSourceAttribute[0]);
    addTextXmlNode(oDataXml, _oTags.targetattributename, sTargetAttribute[0]);
    addTextXmlNode(oDataXml, _oTags.entitymapid, _sMappingId);
    return convertXmlDocToString(oDataXml)
}

function validateParameters() {
    var sSourceAttribute = getSelected(_oConst.sSourceGridName),
        sTargetAttribute = getSelected(_oConst.sTargetGridName);
    if (sSourceAttribute.length != 1 || sTargetAttribute.length != 1) {
        alert(_oMessages.sNoSelectedAttributes);
        return false
    }
    return true
}

function onAttributeDblClick(sender, args) {
    args.breakEvent = true
}