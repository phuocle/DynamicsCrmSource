
function loadTree(sender)
{
    var oServiceLookup = Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
    if(oServiceLookup)
    {
        var aoItems = oServiceLookup.Items();
        if(aoItems.length == 1)
        {
            var serviceId = aoItems[0].id;
            loadResourceSpecTree(sender,"GetTreeExpandResourceGroup",serviceId,true)
        }
    }
}
function registerNodeTypes(oTree)
{
    var ico4000Info = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ico_16_4000.gif")),
        ico8ImageInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ico_16_8.gif"));
    oTree.RegisterNodeTypeWithImageStrip("equipment",ico4000Info.source,ico4000Info.cssClass,null,null,"ua_label","description");
    oTree.RegisterNodeType("resourcespec","/_imgs/tree/folder.gif",null,null,"ua_label","ua_label");
    oTree.RegisterNodeType("constraintbasedgroup","/_imgs/ico_16_4007.gif","/_imgs/ico_16_4007.gif","/_imgs/ico_16_4007.gif","ua_label","description");
    oTree.RegisterNodeType("team","/_imgs/ico_16_9.gif","/_imgs/ico_16_9.gif","/_imgs/ico_16_9.gif","ua_label","description");
    oTree.RegisterNodeTypeWithImageStrip("systemuser",ico8ImageInfo.source,ico8ImageInfo.cssClass,null,null,"ua_label","description");
    oTree.RegisterNodeType("ua_node","/_imgs/error/notif_icn_warn16.png",null,null,".","")
}
function setUaLabels(oTree)
{
    for(var oXml = oTree.get_xmlNode(),
        aoResourcespecNodes = XUI.Xml.SelectNodes(oXml,"//resourcespec",null),
        i = 0; i < aoResourcespecNodes.length; i++)
    {
        var oResourceSpecNode = aoResourcespecNodes[i],
            bHasParent = oResourceSpecNode.parentNode.nodeName != "tree",
            bSameSite = DEFAULT_SAMESITE,
            iQuantity = DEFAULT_QUANTITY,
            sObjective = DEFAULT_OBJECTIVE,
            oInsertNode = oXml.ownerDocument.createElement("ua_label"),
            oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode,"samesite",null);
        if(oElement !== null)
            bSameSite = XUI.Xml.GetText(oElement) == "1";
        oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode,"requiredcount",null);
        if(oElement !== null)
            iQuantity = XUI.Xml.GetText(oElement);
        oElement = XUI.Xml.SelectSingleNode(oResourceSpecNode,"objectiveexpression/Expression",null);
        if(oElement !== null)
            sObjective = oElement.xml;
        oCData = oXml.ownerDocument.createCDATASection(getRuleDisplayText(bHasParent,iQuantity,sObjective,bSameSite));
        oCData != null && 
            oInsertNode.appendChild(oCData);
        oResourceSpecNode.appendChild(oInsertNode)
    }
    for(var aoGroupNodes = XUI.Xml.SelectNodes(oXml,"//constraintbasedgroup | //team",null),
        i = 0; i < aoGroupNodes.length; i++)
    {
        var oGroupNode = aoGroupNodes[i],
            sName = "",
            oInsertNode = oXml.ownerDocument.createElement("ua_label"),
            oElement = XUI.Xml.SelectSingleNode(oGroupNode,"name",null);
        if(oElement !== null)
            sName = XUI.Xml.GetText(oElement);
        XUI.Xml.SetText(oInsertNode,sName);
        oGroupNode.appendChild(oInsertNode)
    }
    for(var aoResourceNodes = XUI.Xml.SelectNodes(oXml,"//systemuser | //equipment",null),
        i = 0; i < aoResourceNodes.length; i++)
    {
        var oResourceNode = aoResourceNodes[i],
            sName = "",
            bDisabled = false,
            oInsertNode = oXml.ownerDocument.createElement("ua_label"),
            oElement = XUI.Xml.SelectSingleNode(oResourceNode,"name",null);
        if(oElement !== null)
            sName = XUI.Xml.GetText(oElement);
        oElement = XUI.Xml.SelectSingleNode(oResourceNode,"isdisabled",null);
        if(oElement !== null)
            bDisabled = XUI.Xml.GetText(oElement) == "1";
        if(bDisabled)
            XUI.Xml.SetText(oInsertNode,formatString(LOCID_SCHEDDLG_DISABLED_RES,sName));
        else
            XUI.Xml.SetText(oInsertNode,sName);
        oResourceNode.appendChild(oInsertNode)
    }
}
function getStartTemplate()
{
    return ""
}
function getRuleDisplayText(bHasParent,iQuantity,sObjective,bSameSite)
{
    var sQuantity = iQuantity == "-1" ? LOCID_SCHEDDLG_RSQUANTITYALL : iQuantity,
        sCriteria = "",
        iCriteriaId = convertExpressionToId(sObjective);
    if(iCriteriaId != OBJECTIVE_RANDOM_ID)
        if(iCriteriaId == OBJECTIVE_LEAST_BUSY_ID)
            sCriteria = LOCID_SCHEDDLG_RSLEASTBUSY;
        else
            if(iCriteriaId == OBJECTIVE_MOST_BUSY_ID)
                sCriteria = LOCID_SCHEDDLG_RSMOSTBUSY;
            else
                if(iCriteriaId == OBJECTIVE_CUSTOM_ID)
                    sCriteria = LOCID_SCHEDDLG_RSCUSTOM;
    var sSite = "";
    if(!bHasParent)
        sSite = bSameSite == "1" ? LOCID_SCHEDDLG_RSSITESAME : LOCID_SCHEDDLG_RSSITEANY;
    var sFormatName = "";
    if(sCriteria.length > 0)
        if(sSite.length > 0)
            sFormatName = LOCID_SCHEDDLG_FMTNMCS;
        else
            sFormatName = LOCID_SCHEDDLG_FMTNMC_;
    else
        if(sSite.length > 0)
            sFormatName = LOCID_SCHEDDLG_FMTNM_S;
        else
            sFormatName = LOCID_SCHEDDLG_FMTNM__;
    return formatString(sFormatName,sQuantity,sCriteria,sSite)
}
