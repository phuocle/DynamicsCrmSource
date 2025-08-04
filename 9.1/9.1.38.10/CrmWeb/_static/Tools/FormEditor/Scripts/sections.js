
function AddSectionFromRibbon(itabCol,sSecCols,sReferencePanelSec)
{
    if(sReferencePanelSec == undefined)
        sReferencePanelSec = "false";
    if(sReferencePanelSec == "true")
    {
        var oNodes = null;
        oNodes = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,"/entity/form/tabs/tab/columns/column/sections/section",null);
        for(var iLen = oNodes.length,
            i = 0; i < iLen; i++)
            if(oNodes[i].getAttribute("name").startsWith("ref_pan_"))
            {
                alert(LOCID_MAX_REFPANEL_LIMIT_REACHED);
                return
            }
    }
    AddSection(_oActive,itabCol,sSecCols,sReferencePanelSec,"true")
}
function AddSection(oActive,itabCol,sSecCols,sReferencePanelSec,fClickSection,fForceAdd)
{
    if(Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return;
    if(oActive == null)
    {
        alert(LOCID_FORMED_MUSTSELECT);
        return false
    }
    var currentTabName = GetCurrentTabName(oActive);
    if(!fForceAdd && !Mscrm.OperationValidator.isOperationValid(Mscrm.EditorOperations.addSection,oActive,null,null))
        return;
    var sectionName = Mscrm.SectionUtils.getNextSectionName(Mscrm.TabUtils.getTabNameFromId(currentTabName)),
        isReferencePanelSec = false;
    if(sReferencePanelSec == "true")
    {
        sectionName = "ref_pan_" + sectionName;
        isReferencePanelSec = true
    }
    var oSection = new SectionObj(currentTabName,createGuid(),false,false,false,new Array(new LocalizedObj(LOCID_FORMEDITOR_SECTION_LABEL,_langCode)),"varwidth",sSecCols,"115","Left","Left",itabCol,true,true,sectionName,isReferencePanelSec);
    oSection && AddSectionXml(oSection,sSecCols) && 
        AddSectionHtml(oSection,fClickSection);
    Mscrm.Register.registerSectionsAsDropTargets()
}
function UpdateSection(oActive)
{
    var sSectionId = oActive.id,
        oSection = GetSectionNode(sSectionId),
        sTabId = null;
    if(oActive.className === "section")
        sTabId = oSection.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
    var bShowLabel = oSection.getAttribute("showlabel") == "true",
        sSectionName = oSection.getAttribute("name"),
        bShowBar = oSection.getAttribute("showbar") == "true",
        bLockSection = oSection.getAttribute("locklevel") == "1",
        iLabelWidth = oSection.getAttribute("labelwidth"),
        bVisible = oSection.getAttribute("visible") !== "false",
        bAvailableForPhone = oSection.getAttribute("availableforphone") !== "false",
        layout = oSection.getAttribute("layout"),
        itabCol = parseInt(oSection.getAttribute("tabColumn"),10),
        cellLabelJustification = oSection.getAttribute("celllabelalignment"),
        cellLabelPosition = oSection.getAttribute("celllabelposition"),
        columns = oSection.getAttribute("columns"),
        isReferencePanelSec = false,
        rowHeight = null,
        autoExpand = false;
    if(sSectionName.startsWith("ref_pan_"))
    {
        isReferencePanelSec = true;
        if(oSection.getAttribute("rowheight") != null)
            rowHeight = parseInt(oSection.getAttribute("rowheight"),10);
        autoExpand = oSection.getAttribute("autoexpand") == "true"
    }
    var oLabels = GetLocalizedObjsArray(XUI.Xml.SelectNodes(oSection,"/entity/form/tabs/tab/columns/column/sections/section[@id = '" + sSectionId + "']/labels/label",null)),
        oSectionObj = new SectionObj(sTabId,sSectionId,bShowLabel,bShowBar,bLockSection,oLabels,layout,columns,iLabelWidth,cellLabelJustification,cellLabelPosition,itabCol,bVisible,bAvailableForPhone,sSectionName,isReferencePanelSec,rowHeight,autoExpand),
        oArgs = {};
    oArgs.Section = oSectionObj;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    var oTab = null;
    if(oActive.className === "section")
        oTab = oSection.parentNode.parentNode.parentNode.parentNode;
    if(oTab !== null && oTab.getAttribute("availableforphone") !== null && oTab.getAttribute("availableforphone") === "false")
        oArgs.AvailableForPhoneDisabled = true;
    var type = -1;
    switch(Mscrm.FormEditorVariables.fieldExpIsFor)
    {
        case "header":
            oArgs.SecName = _headerCaption;
            type = 1;
            break;
        case "footer":
            oArgs.SecName = _footerCaption;
            type = 2;
            break;
        case "section":
            oArgs.SecName = oLabels[0].Description;
            type = 0;
            break
    }
    oArgs.Type = type;
    oArgs.LangCode = _langCode;
    if(Mscrm.FormEditorVariables.FormType != "card")
    {
        var crmUri = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/section.aspx?type=" + type + "&editorType=" + CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.editorType) + "&formType=" + CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType)),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 720;
        dialogOptions.width = 490;
        var callbkFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(BindSectionUpdates,[oSectionObj,oActive]);
        Xrm.Internal.openDialog(crmUri.toString(),dialogOptions,oArgs,null,callbkFunction)
    }
}
function BindSectionUpdates(oUpdatedSectionObj,oSectionObj,oActive)
{
    if(oUpdatedSectionObj)
        if(GetDescByLangCode(oSectionObj.Labels) != GetDescByLangCode(oUpdatedSectionObj.Labels) || oSectionObj.Columns != oUpdatedSectionObj.Columns || oSectionObj.ShowLabel != oUpdatedSectionObj.ShowLabel || oSectionObj.ShowBar != oUpdatedSectionObj.ShowBar || oSectionObj.LockSection != oUpdatedSectionObj.LockSection || oSectionObj.LabelWidth != oUpdatedSectionObj.LabelWidth || oSectionObj.FieldJustification != oUpdatedSectionObj.FieldJustification || oSectionObj.FieldAlignment != oUpdatedSectionObj.FieldAlignment || oSectionObj.Visible != oUpdatedSectionObj.Visible || oSectionObj.AvailableForPhone != oUpdatedSectionObj.AvailableForPhone || oSectionObj.SectionName != oUpdatedSectionObj.SectionName || oSectionObj.RowHeight != oUpdatedSectionObj.RowHeight || oSectionObj.AutoExpand != oUpdatedSectionObj.AutoExpand)
        {
            UpdateSectionXml(oSectionObj,oUpdatedSectionObj);
            RefreshSectionHtml(oActive,null,true)
        }
}
function AddSectionXml(oSectionObj,sSectionCols)
{
    if(oSectionObj.SectionId == null || oSectionObj.SectionId.length == 0)
        return false;
    var oSections = GetSectionsNode(oSectionObj.TabName,oSectionObj.TabColumn),
        oSection = Mscrm.FormEditorVariables.formXml.createElement("section");
    oSection.setAttribute("name",oSectionObj.SectionName);
    oSection.setAttribute("showlabel",oSectionObj.ShowLabel.toString());
    oSection.setAttribute("showbar",oSectionObj.ShowBar.toString());
    oSection.setAttribute("locklevel","0");
    oSection.setAttribute("id",oSectionObj.SectionId);
    oSection.setAttribute("IsUserDefined","0");
    setAttributeIfNotDefaultValue(oSection,"visible",oSectionObj.Visible.toString(),"true");
    setAttributeIfNotDefaultValue(oSection,"availableforphone",oSectionObj.AvailableForPhone.toString(),"true");
    oSection.setAttribute("layout",oSectionObj.Layout);
    oSection.setAttribute("columns",oSectionObj.Columns);
    oSection.setAttribute("labelwidth",oSectionObj.LabelWidth);
    oSection.setAttribute("tabColumn",oSectionObj.TabColumn);
    oSection.setAttribute("columns",sSectionCols);
    if(oSectionObj.IsReferencePanelSection)
    {
        oSection.setAttribute("rowheight",oSectionObj.RowHeight);
        oSection.setAttribute("autoexpand",oSectionObj.AutoExpand)
    }
    oSection.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    oSection.appendChild(Mscrm.FormEditorVariables.formXml.createElement("rows"));
    oSections.appendChild(oSection);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,"/entity/form/tabs/tab/columns/column/sections/section[@id = '" + oSectionObj.SectionId + "']/labels/label",oSectionObj.Labels);
    Mscrm.DragDropUtils.addEmptyCellsInNewSection(oSection);
    return true
}
function UpdateSectionXml(oSectionObj,oUpdatedSectionObj)
{
    var oSection = null;
    switch(oSectionObj.SectionName)
    {
        case "Header":
            oSection = Mscrm.DragDropUtils.getHeaderNode(oSectionObj.SectionName);
            break;
        case "Footer":
            oSection = Mscrm.DragDropUtils.getFooterNode(oSectionObj.SectionName);
            break;
        default:
            oSection = Mscrm.DragDropUtils.getSectionNode(oSectionObj.SectionId);
            PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,"/entity/form/tabs/tab/columns/column/sections/section[@id = '" + oUpdatedSectionObj.SectionId + "']/labels/label",oUpdatedSectionObj.Labels);
            oSection.setAttribute("name",oUpdatedSectionObj.SectionName);
            oSection.setAttribute(Mscrm.FormXmlAttributes.designerAddedNameAttribute,"false");
            oSection.setAttribute("showlabel",oUpdatedSectionObj.ShowLabel.toString());
            oSection.setAttribute("showbar",oUpdatedSectionObj.ShowBar.toString());
            oSection.setAttribute("locklevel",oUpdatedSectionObj.LockSection == true ? "1" : "0");
            if(oSectionObj.IsReferencePanelSection)
            {
                oSection.setAttribute("rowheight",oUpdatedSectionObj.RowHeight);
                oSection.setAttribute("autoexpand",oUpdatedSectionObj.AutoExpand)
            }
            break
    }
    oSection.setAttribute("labelwidth",oUpdatedSectionObj.LabelWidth.toString());
    if(Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor)
    {
        oSection.setAttribute("celllabelalignment",oUpdatedSectionObj.FieldJustification.toString());
        oSection.setAttribute("celllabelposition",oUpdatedSectionObj.FieldAlignment.toString())
    }
    setAttributeIfNotDefaultValue(oSection,"visible",oUpdatedSectionObj.Visible.toString(),"true");
    setAttributeIfNotDefaultValue(oSection,"availableforphone",oUpdatedSectionObj.AvailableForPhone.toString(),"true");
    if(oSectionObj.Columns != oUpdatedSectionObj.Columns)
        if(oSectionObj.Columns.length < oUpdatedSectionObj.Columns.length)
            Mscrm.SectionUtils.addColumnsToSection(oUpdatedSectionObj.Columns.length - oSectionObj.Columns.length,oSection);
        else
            if(Mscrm.SectionUtils.canReduceSecColumns(oUpdatedSectionObj.Columns.length,oSection))
                Mscrm.SectionUtils.removeColumnsFromSection(oUpdatedSectionObj.Columns.length,oSection);
            else
            {
                alert(LOCID_FORMED_FIELDLOCKED);
                return
            }
    oSection.setAttribute("columns",oUpdatedSectionObj.Columns.toString());
    oSection.setAttribute(Mscrm.FormXmlAttributes.designerAddedColumnsAttribute,"false")
}
function AddSectionHtml(oSectionObj,fClickSection)
{
    var sSectionHtml = "<table id='" + CrmEncodeDecode.CrmHtmlAttributeEncode(oSectionObj.SectionId) + "' name='" + CrmEncodeDecode.CrmHtmlAttributeEncode(oSectionObj.SectionName) + "' cellspacing='4' cellpadding='4' class='section' valign='top' height='1%' width = '100%' style='table-layout: fixed;'><col/><col/><tr><td colspan='2' class='section' style='";
    if(!oSectionObj.ShowLabel)
        sSectionHtml += "color: #cccccc;";
    if(oSectionObj.ShowBar)
        sSectionHtml += "border-bottom: 1px solid #606050;";
    sSectionHtml += "'>" + (oSectionObj.LockSection == true ? "<img alt='" + CrmEncodeDecode.CrmHtmlAttributeEncode(LOCID_FORMEDITOR_SECTION_LOCKED) + "' class='imgLock' src='/_imgs/tools/ico_lock.gif' />" : "") + CrmEncodeDecode.CrmHtmlEncode(GetDescByLangCode(oSectionObj.Labels)) + "</td></tr></table>";
    var oTab = $get(oSectionObj.TabName),
        sectionPositionInHTML = oTab.children[0].children[0].children[0].children[1].children[1].children[0].children[oSectionObj.TabColumn].children[0].children[0],
        oRow = sectionPositionInHTML.insertRow(sectionPositionInHTML.rows.length - 1),
        oCell = oRow.insertCell(-1);
    oCell.style.height = "1%";
    oCell.innerHTML = sSectionHtml;
    RefreshSectionHtml(oCell.childNodes[0],null,fClickSection)
}
function RemoveSection(oActive)
{
    var oSection = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,"/entity/form/tabs/tab/columns/column/sections/section[@id = '" + oActive.id + "']",null),
        tabId = oSection.parentNode.parentNode.parentNode.parentNode.getAttribute("id"),
        itabCol = parseInt(oSection.getAttribute("tabColumn"),10),
        secCount = oSection.parentNode.childNodes.length;
    if(secCount === 1 && Mscrm.SectionUtils.isSectionEmpty(oSection))
        return;
    if(Mscrm.FormEditorVariables.FormType == "quickCreate")
    {
        alert(LOCID_FORMED_REMOVESECQUICKCRT);
        return false
    }
    if(Mscrm.FormEditorVariables.FormType == "card")
    {
        alert(LOCID_FORMED_REMOVESECCARDCRT);
        return false
    }
    if(oSection.parentNode.parentNode.parentNode.parentNode.getAttribute("locklevel") == "1")
    {
        alert(LOCID_FORMED_REMOVESECLOCKEDTAB);
        return false
    }
    if(oSection.getAttribute("locklevel") == "1")
    {
        alert(LOCID_FORMED_REMOVESECLOCKED);
        return false
    }
    var oNodes = XUI.Xml.SelectNodes(oSection,"rows/row/cell/control",null);
    if(!IsRemovable(oNodes))
    {
        alert(LOCID_FORMED_REMOVESECLOCKEDFLD);
        return false
    }
    var sfieldList = GetDependentList(oNodes,true);
    if(sfieldList.length > 0)
    {
        alert(LOCID_FORMED_SECTABDEPENDENT_HD + "\n\n" + LOCID_FORMED_SECTABDEPENDENT_TL + "\n\n" + sfieldList + "\n\n" + LOCID_FORMED_SECTABDEPENDENT_FT);
        return false
    }
    if(confirm(LOCID_FORMED_CONFIRMREMOVESEC))
    {
        var sectionNode = Mscrm.DragDropUtils.getSectionNode(oActive.id);
        !IsNull(sectionNode) && 
            Mscrm.FieldPropertiesUtils.removeHandlersFromFields(XUI.Xml.SelectNodes(sectionNode,"rows/row/cell",null));
        RemoveControlDescriptorsForNodes(oNodes);
        RemoveSectionXml(oActive);
        RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml,oPropertiesXml,oFieldsXml);
        var tabId = GetCurrentTabName(oActive);
        RemoveSectionHtml(oActive);
        secCount === 1 && 
            AddSection(document.getElementById(tabId),itabCol,"1",false);
        clickTab(tabId)
    }
    return true
}
function RemoveSectionXml(oActive)
{
    var oSection = GetSectionNode(oActive.id);
    oSection.parentNode.removeChild(oSection)
}
function RemoveSectionHtml(oActive)
{
    oActive.parentNode.parentNode.parentNode.removeChild(oActive.parentNode.parentNode)
}
function RefreshCellHtml(sTabName,sSectionName,sFieldName,bRefreshOnlyCell)
{
    var oTab = $get(sTabName),
        oSection = document.getElementById(sSectionName);
    if(Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor && bRefreshOnlyCell)
    {
        RefreshOnlyCellHtml(sFieldName);
        var oCell = $get(sFieldName);
        SetActiveObject(null,oCell);
        return oCell
    }
    else
    {
        RefreshSectionHtml(oSection,sFieldName,false);
        Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl(sSectionName,sFieldName);
        Mscrm.FieldPropertiesUtils.clickControl(sFieldName,null)
    }
}
var _oXmlDoc,
    _oXslDoc,
    _oXslt,
    _oXslProc;
function LoadXmlForSectionTransform(bCellTransform)
{
    _oXslDoc == null && 
        XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/formeditorsection.xsl").toString(),false,function(xmlDoc)
        {
            _oXslDoc = xmlDoc
        },function(statusCode,xmlDoc)
        {
            _oXslDoc = null
        });
    _oXslt = CreateXslTemplate();
    _oXslt.stylesheet = _oXslDoc;
    _oXslProc = _oXslt.createProcessor();
    var fieldXml = "",
        propertiesXml = "",
        resourceXml = "";
    if(Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.formEditor)
    {
        fieldXml = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(oFieldsXml,"/entity/fields",null));
        propertiesXml = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(oPropertiesXml,"/entity/fields",null))
    }
    resourceXml = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,"/entity/form/resources",null));
    if(bCellTransform)
        _oXmlDoc = XUI.Xml.LoadXml("<entity><form><cellrefresh><" + Mscrm.FormEditorVariables.fieldExpIsFor + "><rows><row><cell></cell></row></rows></" + Mscrm.FormEditorVariables.fieldExpIsFor + "></cellrefresh>" + resourceXml + "</form><metadata>" + fieldXml + "</metadata><properties>" + propertiesXml + "</properties><strings><lockedsection>" + CrmEncodeDecode.CrmXmlEncode(LOCID_FORMEDITOR_SECTION_LOCKED) + "</lockedsection></strings></entity>");
    else
        _oXmlDoc = XUI.Xml.LoadXml("<entity><form><" + Mscrm.FormEditorVariables.fieldExpIsFor + "></" + Mscrm.FormEditorVariables.fieldExpIsFor + ">" + resourceXml + "</form><metadata>" + fieldXml + "</metadata><properties>" + propertiesXml + "</properties><strings><lockedsection>" + CrmEncodeDecode.CrmXmlEncode(LOCID_FORMEDITOR_SECTION_LOCKED) + "</lockedsection></strings></entity>")
}
function RefreshSectionHtml(oSection,sClickCellName,fClick)
{
    var oSectionRow = oSection.parentNode.parentNode,
        oNewSectionCell = oSectionRow.insertCell(-1),
        sectionNode = GetSectionNode(oSection.id),
        height = sectionNode.getAttribute("height");
    switch(height)
    {
        case null:
            oNewSectionCell.style.height = "1%";
            break;
        case "auto":
            oNewSectionCell.style.height = "100%";
            break;
        default:
            oNewSectionCell.style.height = height
    }
    var width = sectionNode.getAttribute("width");
    switch(width)
    {
        case null:
            oNewSectionCell.style.width = "100%";
            break;
        default:
            oNewSectionCell.style.width = width
    }
    LoadXmlForSectionTransform();
    var sectionNodeForTransform = sectionNode.cloneNode(true),
        oldSectionNodeInTransform = XUI.Xml.SelectSingleNode(_oXmlDoc,"/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor,null);
    oldSectionNodeInTransform.parentNode.replaceChild(sectionNodeForTransform,oldSectionNodeInTransform);
    TransformFormXml();
    var updatedXml = _oXslProc.output;
    Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor && 
        Mscrm.DashboardEditorUtils.clearHandlersFromIframes(oSection);
    oSectionRow.removeChild(oSection.parentNode);
    oNewSectionCell.innerHTML = updatedXml;
    var oSectionTable = XUI.Html.DomUtils.GetFirstChild(oNewSectionCell);
    if(fClick)
        if(sClickCellName != null)
            Mscrm.Utilities.click($get(sClickCellName));
        else
        {
            var elem = document.getElementById(oSection.id);
            Mscrm.Utilities.click(elem)
        }
    Mscrm.SectionUtils.showOrHideHeaderWarningMessage();
    AdjustNotificationOnFormEditor();
    Mscrm.FormEditorVariables.cellsFor = Mscrm.DragDropUtils.crM_SECTION;
    return XUI.Html.DomUtils.GetFirstChild(oNewSectionCell)
}
function RefreshOnlyCellHtml(oCellId)
{
    var cellNode = Mscrm.DragDropUtils.getCellNodeFromId(oCellId);
    LoadXmlForSectionTransform(true);
    var cellNodeForTransform = cellNode.cloneNode(true),
        oldCellNodeInTransform = XUI.Xml.SelectSingleNode(_oXmlDoc,"/entity/form/cellrefresh/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows/row/cell",null);
    oldCellNodeInTransform.parentNode.replaceChild(cellNodeForTransform,oldCellNodeInTransform);
    TransformFormXml();
    var updatedHtml = _oXslProc.output,
        oCell = $get(oCellId);
    Mscrm.FormEditorVariables.editorType == Mscrm.EditorType.dashboardEditor && 
        Mscrm.DashboardEditorUtils.clearHandlersFromIframes(oCell);
    var oCellRow = oCell.parentNode,
        oNewCell = GetTableCellElement(updatedHtml);
    oCell.innerHTML = "";
    oCellRow.replaceChild(oNewCell,oCell);
    return oNewCell
}
function GetTableCellElement(serializedHtml)
{
    serializedHtml = SanitizeHtml(serializedHtml);
    !serializedHtml.toLowerCase().startsWith("<td") && 
        Mscrm.CrmDebug.fail("html should start with td");
    var divContainer = document.createElement("div");
    divContainer.innerHTML = "<table><tbody><tr>" + serializedHtml + "</table></tbody></tr>";
    var tdElement = XUI.Html.DomUtils.GetFirstChild(divContainer);
    while(tdElement.tagName != "TD")
        tdElement = XUI.Html.DomUtils.GetFirstChild(tdElement);
    return tdElement
}
function SanitizeHtml(html)
{
    return SanitizeXmlTag(html)
}
function SanitizeXmlTag(html)
{
    if(!html.startsWith("<?xml"))
        return html;
    var index = html.indexOf("<td");
    return html.substring(index)
}
function TransformFormXml()
{
    if(oPropertiesXml)
    {
        var propertiesNodeForTransform = XUI.Xml.SelectSingleNode(oPropertiesXml,"/entity/fields",null).cloneNode(true),
            oldPropertiesNodeInTransform = XUI.Xml.SelectSingleNode(_oXmlDoc,"/entity/properties/fields",null);
        XUI.Xml.SelectSingleNode(_oXmlDoc,"/entity/properties",null).replaceChild(propertiesNodeForTransform,oldPropertiesNodeInTransform)
    }
    _oXslProc.input = _oXmlDoc;
    _oXslProc.addParameter("languageCode",_langCode);
    _oXslProc.addParameter("mode",_sMode);
    _oXslProc.addParameter("RTL",LOCID_UI_DIR == "RTL" ? "true" : "false");
    _oXslProc.addParameter("spacerCaption",_spacerCaption);
    _oXslProc.addParameter("headerCaption",_headerCaption);
    _oXslProc.addParameter("footerCaption",_footerCaption);
    _oXslProc.addParameter("editorType",Mscrm.FormEditorVariables.editorType);
    _oXslProc.addParameter("formType",Mscrm.FormEditorVariables.FormType);
    _oXslProc.addParameter("isCustomizable",Mscrm.FormEditorVariables.isCustomizabe.toLowerCase());
    _oXslProc.addParameter("iconPath",Mscrm.FormEditorVariables.iconPath);
    _oXslProc.addParameter("formLabel",Mscrm.FormEditorVariables.entityUnpublishedLabel);
    _oXslProc.addParameter("solutionLabel",LOCID_SOLUTION_LABEL);
    _oXslProc.addParameter("formPrefix",LOCID_FORM_LABEL_PREFIX);
    _oXslProc.addParameter("formAccessType",Mscrm.FormEditorVariables.formAccessType);
    _oXslProc.addParameter("supportSocialInsights",Mscrm.FormEditorVariables.supportSocialInsights == "True" ? "true" : "false");
    _oXslProc.addParameter("supportPowerBITile",Mscrm.FormEditorVariables.supportPowerBITile == "True" ? "true" : "false");
    _oXslProc.addParameter("supportOrgInsights",Mscrm.FormEditorVariables.supportOrgInsights == "True" ? "true" : "false");
    _oXslProc.addParameter("supportDelve",Mscrm.FormEditorVariables.supportDelve == "True" ? "true" : "false");
    _oXslProc.addParameter("supportInteractionCentric",Mscrm.FormEditorVariables.supportInteractionCentric == "True" ? "true" : "false");
    _oXslProc.addParameter("isRiCardsCell",IsFCBAndEnableDisableRICardsActionControl());
    _oXslProc.transform()
}
var _section,
    _totalColumns,
    _columns,
    _name;
function RegenerateXmlFromSchema(oRows)
{
    for(var fieldNames = new Array(_totalColumns),
        totalRows = _section[0].length,
        tempRow = Mscrm.FormEditorVariables.formXml.createElement("row"),
        nextRow,
        iRow = 0; iRow < totalRows; iRow++)
    {
        nextRow = oRows.childNodes[iRow];
        if(nextRow == null)
        {
            nextRow = Mscrm.FormEditorVariables.formXml.createElement("row");
            oRows.appendChild(nextRow)
        }
        for(var iPosition = 0,
            nextCell = null,
            iColumn = 0; iColumn < _totalColumns; iColumn++)
            if(_section[iColumn][iRow] != fieldNames[iColumn] || _section[iColumn][iRow] == "")
            {
                fieldNames[iColumn] = _section[iColumn][iRow];
                nextCell = nextRow.childNodes[iPosition];
                if(nextCell == null || GetFieldName(nextCell) != fieldNames[iColumn])
                {
                    var newCell;
                    if(fieldNames[iColumn] == "")
                        newCell = CreateNewCell(iColumn);
                    else
                    {
                        newCell = XUI.Xml.SelectSingleNode(oRows,"row/cell[control/@id = '" + fieldNames[iColumn] + "']",null);
                        if(newCell == null)
                            newCell = XUI.Xml.SelectSingleNode(tempRow,"cell[control/@id = '" + fieldNames[iColumn] + "']",null)
                    }
                    nextRow.insertBefore(newCell,nextCell);
                    nextCell = newCell
                }
                nextCell.setAttribute("colspan",_columns.substr(iColumn,1));
                iPosition++
            }
        var deleteCell = null;
        if(nextCell == null)
        {
            deleteCell = XUI.Html.DomUtils.GetFirstChild(nextRow);
            while(deleteCell != null)
            {
                tempRow.appendChild(nextRow.removeChild(deleteCell));
                deleteCell = XUI.Html.DomUtils.GetFirstChild(nextRow)
            }
        }
        else
        {
            deleteCell = XUI.Html.DomUtils.GetNextSibling(nextCell);
            while(deleteCell != null)
            {
                tempRow.appendChild(nextRow.removeChild(deleteCell));
                deleteCell = XUI.Html.DomUtils.GetNextSibling(nextCell)
            }
        }
    }
    var deleteRow;
    if(nextRow == null)
    {
        var rowChildNodes = XUI.Xml.SelectNodes(oRows,"row",null);
        Mscrm.Utilities.removeAll(rowChildNodes)
    }
    else
    {
        deleteRow = XUI.Html.DomUtils.GetNextSibling(nextRow);
        while(deleteRow != null)
        {
            oRows.removeChild(deleteRow);
            deleteRow = XUI.Html.DomUtils.GetNextSibling(nextRow)
        }
    }
    var cellChildNodes = XUI.Xml.SelectNodes(tempRow,"cell",null);
    Mscrm.Utilities.removeAll(cellChildNodes);
    tempRow = null
}
function CreateSectionSchema(sName,oRows,sColumns)
{
    if(_name != sName)
    {
        _name = sName;
        _columns = sColumns;
        _totalColumns = _columns.length;
        var iRows = oRows.childNodes.length;
        _section = new Array(_totalColumns);
        for(var i = 0; i < _totalColumns; i++)
            _section[i] = new Array(iRows);
        for(var i = 0; i < iRows; i++)
        {
            oRow = oRows.childNodes[i];
            for(var cLen = oRow.childNodes.length,
                j = 0; j < cLen; j++)
            {
                var iRowSpan = GetRowSpan(oRow.childNodes[j]),
                    fieldName = "",
                    oControl = XUI.Xml.SelectSingleNode(oRow.childNodes[j],"control",null);
                if(oControl != null)
                    fieldName = oControl.getAttribute("id");
                var iColumn = j;
                while(_section[iColumn][i] != null)
                    iColumn++;
                for(var r = 0; r < iRowSpan; r++)
                    _section[iColumn][i + r] = fieldName
            }
        }
    }
}
function CreateNewCell(iColumn)
{
    var oCell = Mscrm.FormEditorVariables.formXml.createElement("cell");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    oCell.setAttribute("showlabel","true");
    oCell.setAttribute("colspan",_columns.substr(iColumn,1));
    return oCell
}
function GetFieldName(oCell)
{
    var fieldName = "",
        oControl = XUI.Xml.SelectSingleNode(oCell,"control",null);
    if(oControl != null)
        fieldName = oControl.getAttribute("id");
    return fieldName
}
function MoveDownInSchema(sFieldName)
{
    var totalRows = _section[0].length,
        nextRow = -1,
        iRow = 0,
        bmoved = false,
        position = GetPosition(sFieldName),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow < 0)
        return false;
    for(iRow = thisRow; iRow < totalRows; iRow++)
        if(_section[iColumn][thisRow] != _section[iColumn][iRow])
        {
            nextRow = iRow;
            break
        }
    var field2 = _section[iColumn][nextRow];
    if(field2 != "" && iRow < totalRows)
    {
        while(iRow < totalRows && field2 == _section[iColumn][iRow])
        {
            var temp = _section[iColumn][thisRow];
            _section[iColumn][thisRow] = _section[iColumn][nextRow];
            _section[iColumn][nextRow] = temp;
            thisRow++;
            nextRow++;
            iRow++
        }
        bmoved = true
    }
    return bmoved
}
function MoveUpInSchema(sFieldName)
{
    var bmoved = false,
        position = GetPosition(sFieldName),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow > 0)
        bmoved = MoveDownInSchema(_section[iColumn][thisRow - 1]);
    return bmoved
}
function DeleteFromSchema(sFieldName,bDeleteEmptyRows)
{
    var totalRows = _section[0].length,
        nextRow = -1,
        iRow = 0,
        position = GetPosition(sFieldName),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow < 0)
        return false;
    for(iRow = thisRow; iRow < totalRows; iRow++)
    {
        if(_section[iColumn][thisRow] != _section[iColumn][iRow])
        {
            nextRow = iRow;
            break
        }
        nextRow = totalRows
    }
    var row3 = nextRow;
    while(iRow < totalRows && _section[iColumn][iRow] != "")
    {
        _section[iColumn][thisRow] = _section[iColumn][nextRow];
        _section[iColumn][nextRow] = "";
        thisRow++;
        nextRow++;
        iRow++
    }
    while(thisRow < row3)
    {
        _section[iColumn][thisRow] = "";
        thisRow++
    }
    bDeleteEmptyRows && 
        RemoveEmptyRows(totalRows);
    return true
}
function RemoveEmptyRows(totalRows)
{
    var minLength = GetMinimumLength(totalRows);
    for(iCol = 0; iCol < _totalColumns; iCol++)
        _section[iCol].length = minLength
}
function GetPosition(sFieldName)
{
    for(var position = [-1,-1],
        totalRows = _section[0].length,
        iRow = 0; iRow < totalRows; iRow++)
    {
        for(var iColumn = 0; iColumn < _totalColumns; iColumn++)
            if(_section[iColumn][iRow] == sFieldName)
            {
                position[0] = iColumn;
                position[1] = iRow;
                break
            }
        if(iColumn < _totalColumns)
            break
    }
    return position
}
function AddCellToSchema(oCell,iRowSpan)
{
    var totalRows = _section[0].length,
        sFieldName = XUI.Xml.SelectSingleNode(oCell,"control",null).getAttribute("id"),
        position = GetPosition(""),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow < 0)
    {
        thisRow = totalRows;
        iColumn = 0
    }
    oCell.setAttribute("colspan",_columns.substr(iColumn,1));
    while(iRowSpan > 0 && thisRow < totalRows)
    {
        _section[iColumn][thisRow] = sFieldName;
        iRowSpan--;
        thisRow++
    }
    for(var i = iRowSpan; i > 0; i--)
    {
        for(var iCol = 0; iCol < _totalColumns; iCol++)
        {
            _section[iCol].length = totalRows;
            if(iCol != iColumn)
                _section[iCol][totalRows] = "";
            else
                _section[iCol][totalRows] = sFieldName
        }
        totalRows++
    }
    return true
}
function MoveLeftInSchema(sFieldName)
{
    var totalRows = _section[0].length,
        position = GetPosition(sFieldName),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow < 0 || iColumn == 0)
        return false;
    var span = 0,
        iRow = thisRow;
    while(_section[iColumn][iRow] == sFieldName && iRow < totalRows)
    {
        span++;
        iRow++
    }
    DeleteFromSchema(sFieldName,false);
    return InsertAtRowColumn(sFieldName,iColumn - 1,thisRow,span)
}
function InsertAtRowColumn(sFieldName,iColumn,iRow,iSpan)
{
    if(_section[iColumn][iRow] == "")
    {
        while(_section[iColumn][iRow - 1] == "" && iRow > 0)
            iRow--;
        for(var i = iRow; i < iRow + iSpan; i++)
            _section[iColumn][i] = sFieldName
    }
    else
    {
        while(iRow < _section[iColumn].length && _section[iColumn][iRow] == _section[iColumn][iRow + 1])
            iRow++;
        iRow++;
        IncreaseSpan(sFieldName,iColumn,iRow,iSpan)
    }
    BalanceLengthIncrease(iColumn);
    return true
}
function MoveRightInSchema(sFieldName)
{
    var totalRows = _section[0].length,
        position = GetPosition(sFieldName),
        iColumn = position[0],
        thisRow = position[1];
    if(thisRow < 0 || iColumn == _totalColumns - 1)
        return false;
    var span = 0,
        iRow = thisRow;
    while(_section[iColumn][iRow] == sFieldName && iRow < totalRows)
    {
        span++;
        iRow++
    }
    DeleteFromSchema(sFieldName,false);
    return InsertAtRowColumn(sFieldName,iColumn + 1,thisRow,span)
}
function ChangeRowSpanInSchema(sFieldName,iOldRowSpan,iNewRowSpan)
{
    if(iNewRowSpan > iOldRowSpan)
        return IncreaseRowSpan(sFieldName,iNewRowSpan - iOldRowSpan);
    else
        return DecreaseRowSpan(sFieldName,iOldRowSpan,iNewRowSpan)
}
function IncreaseRowSpan(sFieldName,diff)
{
    var position = GetPosition(sFieldName);
    if(position[1] < 0)
        return false;
    IncreaseSpan(sFieldName,position[0],position[1],diff);
    BalanceLengthIncrease(position[0]);
    return true
}
function DecreaseRowSpan(sFieldName,iOldRowSpan,iNewRowSpan)
{
    var position = GetPosition(sFieldName);
    if(position[1] < 0)
        return false;
    DecreaseSpan(position[0],position[1],iOldRowSpan,iNewRowSpan);
    return true
}
function IncreaseSpan(sFieldName,iColumn,thisRow,diff)
{
    var len = _section[iColumn].length,
        iRow = 0;
    _section[iColumn].length = len + diff;
    for(iRow = len + diff - 1; iRow >= thisRow + diff; iRow--)
        _section[iColumn][iRow] = _section[iColumn][iRow - diff];
    for(var i = 0; i < diff; i++)
        _section[iColumn][iRow--] = sFieldName
}
function DecreaseSpan(iStartColumn,iStartRow,iOldRowSpan,iNewRowSpan)
{
    for(var len = _section[iStartColumn].length,
        cRowsToShift = len - (iStartRow + iOldRowSpan),
        iRow = 0; iRow < cRowsToShift; iRow++)
        _section[iStartColumn][iStartRow + iNewRowSpan + iRow] = _section[iStartColumn][iStartRow + iOldRowSpan + iRow];
    var cRowsToRemove = iOldRowSpan - iNewRowSpan;
    for(iRow = 0; iRow < cRowsToRemove; iRow++)
        _section[iStartColumn][len - iRow - 1] = "";
    RemoveEmptyRows(len)
}
function GetMinimumLength(iLen)
{
    for(var iRow = iLen - 1; iRow >= 0; iRow--)
    {
        for(var iCol = 0; iCol < _totalColumns; iCol++)
            if(_section[iCol].length > iRow && _section[iCol][iRow].length > 0)
                break;
        if(iCol == _totalColumns)
            iLen--;
        else
            break
    }
    return iLen
}
function BalanceLengthIncrease(iColumn)
{
    var newLen = _section[iColumn].length;
    newLen = GetMinimumLength(newLen);
    for(var iCol = 0; iCol < _totalColumns; iCol++)
    {
        for(var i = _section[iCol].length; i < newLen; i++)
            _section[iCol][i] = "";
        _section[iCol].length = newLen
    }
}
