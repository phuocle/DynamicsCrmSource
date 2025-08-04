
function ruleArgs(iQuantity, fEffort, bSameSite, sObjective, sDescription) {
    var args = {};
    args.iQuantity = iQuantity;
    args.fEffort = fEffort;
    args.bSameSite = bSameSite;
    args.sObjective = sObjective;
    args.sDescription = sDescription;
    return args
}

var OBJECTIVE_RANDOM_ID = "0",
    OBJECTIVE_LEAST_BUSY_ID = "1",
    OBJECTIVE_MOST_BUSY_ID = "2",
    OBJECTIVE_CUSTOM_ID = "3",
    OBJECTIVE_RANDOM_EXPRESSION =
        '<Expression><Body>udf "Random"(factory,resource,appointment,request,leftoffset,rightoffset)</Body><Parameters><Parameter name="factory"/><Parameter name="resource"/><Parameter name="appointment"/><Parameter name="request"/><Parameter name="leftoffset"/><Parameter name="rightoffset"/></Parameters><Properties EvaluationInterval="P0D" evaluationcost="0"/></Expression>',
    OBJECTIVE_LEAST_BUSY_EXPRESSION =
        '<Expression><Body>udf "LeastBusy"(factory,resource,appointment,request,leftoffset,rightoffset)</Body><Parameters><Parameter name="factory"/><Parameter name="resource"/><Parameter name="appointment"/><Parameter name="request"/><Parameter name="leftoffset"/><Parameter name="rightoffset"/></Parameters><Properties EvaluationInterval="P1D" evaluationcost="1"/></Expression>',
    OBJECTIVE_MOST_BUSY_EXPRESSION =
        '<Expression><Body>udf "MostBusy"(factory,resource,appointment,request,leftoffset,rightoffset)</Body><Parameters><Parameter name="factory"/><Parameter name="resource"/><Parameter name="appointment"/><Parameter name="request"/><Parameter name="leftoffset"/><Parameter name="rightoffset"/></Parameters><Properties EvaluationInterval="P1D" evaluationcost="1"/></Expression>',
    ADVANCED_SECTION_HEIGHT = 60,
    DEFAULT_QUANTITY = "1",
    DEFAULT_EFFORT = "1",
    DEFAULT_SAMESITE = "1",
    DEFAULT_OBJECTIVE = OBJECTIVE_RANDOM_EXPRESSION,
    _oCurrentTree = null;

function convertIdToExpression(iId) {
    switch (iId) {
    case OBJECTIVE_MOST_BUSY_ID:
        return OBJECTIVE_MOST_BUSY_EXPRESSION;
    case OBJECTIVE_LEAST_BUSY_ID:
        return OBJECTIVE_LEAST_BUSY_EXPRESSION;
    case OBJECTIVE_RANDOM_ID:
        return OBJECTIVE_RANDOM_EXPRESSION;
    default:
        return ""
    }
}

function convertExpressionToId(sExpression) {
    switch (sExpression) {
    case OBJECTIVE_MOST_BUSY_EXPRESSION:
        return OBJECTIVE_MOST_BUSY_ID;
    case OBJECTIVE_LEAST_BUSY_EXPRESSION:
        return OBJECTIVE_LEAST_BUSY_ID;
    case OBJECTIVE_RANDOM_EXPRESSION:
        return OBJECTIVE_RANDOM_ID;
    default:
        return OBJECTIVE_CUSTOM_ID
    }
}

function makeLink(innerText, action) {
    return '<span><a onclick="' +
        CrmEncodeDecode.CrmHtmlAttributeEncode(action) +
        '" class="rsHelperlink">' +
        CrmEncodeDecode.CrmHtmlEncode(innerText) +
        "</a></span>"
}

function makeTag(sTagname, sInnerText, sAttributes) {
    return sInnerText == null
        ? formatString("<{0}/>", sTagname)
        : formatString("<{0}{1}>{2}</{0}>",
            sTagname,
            sAttributes != null && sAttributes.length > 0 ? " " + sAttributes : "",
            sInnerText)
}

function loadResourceSpecTree(oTree, commandName, resourceSpecId, bLoadAsync) {
    if (resourceSpecId != "") {
        var oCommand = new RemoteCommand("ResourceSpecTree", commandName);
        if (oCommand != null) {
            oCommand.SetParameter("id", resourceSpecId);
            _oCurrentTree = oTree;
            if (bLoadAsync)
                oCommand.Execute(TreeLoaded);
            else
                TreeLoaded(oCommand.Execute())
        }
    } else {
        var sMemberXml = getStartTemplate();
        SetupTree(sMemberXml, oTree)
    }
}

function TreeLoaded(oResult) {
    var sMemberXml = "<tree></tree>";
    if (oResult.Success) {
        var xmlNode = oResult.Xml;
        if (xmlNode) {
            var oResultContents = XUI.Xml.SelectSingleNode(xmlNode, "resourcespec", null);
            if (oResultContents !== null)
                sMemberXml = "<tree>" + XUI.Xml.XMLSerializer.serializeToString(oResultContents) + "</tree>"
        }
    }
    SetupTree(sMemberXml, _oCurrentTree)
}

function SetupTree(sMemberXml, oTree) {
    if (oTree.get_count() != null) {
        registerNodeTypes(oTree);
        oTree.set_xml(sMemberXml);
        setUaLabels(oTree);
        oTree.RenderTree()
    }
}