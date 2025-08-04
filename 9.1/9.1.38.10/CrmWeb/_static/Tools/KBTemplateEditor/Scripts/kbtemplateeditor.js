
function TemplateProperties(mode)
{
    var oTemplateObj = new TemplateObj(titleComponent.get_element().value,descriptionComponent.get_element().value,languageCodeComponent.get_element().value),
        options = new Xrm.DialogOptions;
    options.width = 400;
    options.height = 300;
    var url = Mscrm.CrmUri.create("/Tools/KBTemplateEditor/Dialogs/kbtemplateproperties.aspx?mode=" + mode),
        parameters = new Array(mode),
        callbackObject = Mscrm.Utilities.createCallbackFunctionForXrmDialog(templatePropertiesCallbackFunction,parameters);
    Xrm.Internal.openDialog(url.toString(),options,oTemplateObj,null,callbackObject)
}
function templatePropertiesCallbackFunction(oReturnValue,mode)
{
    if(oReturnValue)
    {
        titleComponent.set_dataValue(oReturnValue.Title);
        descriptionComponent.set_dataValue(oReturnValue.Description);
        languageCodeComponent.set_dataValue(oReturnValue.LanguageCode);
        UpdateFormData()
    }
    else
        if(mode == "new")
        {
            alert(LOCID_NO_ARTICLE_TEMPLATE);
            crmFormComponent.set_saving(true);
            closeWindow()
        }
}
function AddSection()
{
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 280;
    dialogOptions.width = 400;
    var addSectionUrl = Mscrm.CrmUri.create("/Tools/KBTemplateEditor/Dialogs/section.aspx?mode=new");
    Xrm.Internal.openDialog(addSectionUrl.toString(),dialogOptions,null,null,AddSectionCallBack)
}
function AddSectionCallBack(returnValue)
{
    var oSectionObj = returnValue;
    if(oSectionObj)
    {
        var oSections = XUI.Xml.SelectSingleNode(oStructureXml,"/kbarticle/sections",null),
            id = 0,
            oNextSectionIdAttr = oSections.attributes.getNamedItem("nextSectionId");
        if(oNextSectionIdAttr)
            id = parseInt(oNextSectionIdAttr.value,10);
        else
            id = CalculateNextSectionId();
        oSections.setAttribute("nextSectionId",id + 1);
        var oSectionNode = oStructureXml.createElement("section");
        oSectionNode.setAttribute("type","edit");
        oSectionNode.setAttribute("id",id);
        oSectionNode.appendChild(oStructureXml.createCDATASection(oSectionObj.Title));
        oSections.appendChild(oSectionNode);
        if(oSectionObj.Instructions)
        {
            var oInstNode = oStructureXml.createElement("instructions");
            oInstNode.appendChild(oStructureXml.createCDATASection(oSectionObj.Instructions));
            oSectionNode.appendChild(oInstNode)
        }
        var oRow = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($get("editor"))).insertRow(-1),
            oCell = oRow.insertCell(-1);
        oCell.className = "section";
        $addHandler(oCell,"click",SetActiveObject);
        $addHandler(oCell,"dblclick",ViewPropertiesNow);
        var oTitleDiv = document.createElement("div");
        oCell.appendChild(oTitleDiv);
        var oBodyDiv = document.createElement("div");
        oBodyDiv.className = "article";
        oBodyDiv.innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_USE_STYLE_BUTTONS) + "<br><br>";
        oCell.appendChild(oBodyDiv);
        oCell.setAttribute("sectionId",id);
        oTitleDiv.className = "heading";
        XUI.Html.SetText(oTitleDiv,oSectionObj.Title);
        oCell.title = oSectionObj.Instructions;
        Mscrm.Utilities.click(oCell);
        UpdateFormData()
    }
}
function UpdateSection()
{
    if(_oActive)
    {
        var oSectionObj = new SectionObj(XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(_oActive)),_oActive.title),
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = 280;
        dialogOptions.width = 400;
        var updateSectionUrl = Mscrm.CrmUri.create("/Tools/KBTemplateEditor/Dialogs/section.aspx?mode=edit");
        Xrm.Internal.openDialog(updateSectionUrl.toString(),dialogOptions,oSectionObj,null,UpdateSectionCallBack)
    }
}
function UpdateSectionCallBack(returnValue)
{
    var oUpdatedSectionObj = returnValue;
    if(oUpdatedSectionObj)
    {
        var oNode = GetSectionNode();
        XUI.Xml.SetText(oNode.firstChild,oUpdatedSectionObj.Title);
        XUI.Html.SetText(XUI.Html.DomUtils.GetFirstChild(_oActive),oUpdatedSectionObj.Title);
        _oActive.title = oUpdatedSectionObj.Instructions;
        var oInst = XUI.Xml.SelectSingleNode(oNode,"instructions",null);
        if(oUpdatedSectionObj.Instructions)
            if(oInst)
                XUI.Xml.SetText(oInst.firstChild,oUpdatedSectionObj.Instructions);
            else
            {
                var oInstNode = oStructureXml.createElement("instructions");
                oInstNode.appendChild(oStructureXml.createCDATASection(oUpdatedSectionObj.Instructions));
                oNode.appendChild(oInstNode)
            }
        else
            oInst && 
                oNode.removeChild(oInst);
        UpdateFormData()
    }
}
function RemoveSection()
{
    if(_oActive && confirm(LOCID_CONFIRM_REMOVE))
    {
        var oSections = XUI.Xml.SelectSingleNode(oStructureXml,"/kbarticle/sections",null),
            oNextSectionIdAttr = oSections.attributes.getNamedItem("nextSectionId");
        if(!oNextSectionIdAttr)
        {
            var id = CalculateNextSectionId();
            oSections.setAttribute("nextSectionId",id)
        }
        var oNode = GetSectionNode();
        oNode.parentNode.removeChild(oNode);
        _oActive.parentNode.parentNode.deleteRow(_oActive.parentNode.rowIndex);
        _oActive = null;
        UpdateFormData()
    }
}
function CalculateNextSectionId()
{
    var id = 0,
        sectionId = 0,
        oEditSections = XUI.Xml.SelectNodes(oStructureXml,"/kbarticle/sections/section[@type='edit']",null);
    if(oEditSections)
    {
        id = oEditSections.length;
        for(var n = 0; n < oEditSections.length; n++)
        {
            if(oEditSections[n].attributes.getNamedItem("id"))
                sectionId = parseInt(oEditSections[n].attributes.getNamedItem("id").value,10);
            id = sectionId >= id ? sectionId + 1 : id
        }
    }
    return id
}
function SetActiveObject(eventObject)
{
    var o = Mscrm.Utilities.eventToDomEvent(eventObject).target;
    if(_oActive)
        _oActive.style.border = "1px dashed #cccccc";
    while(o.tagName.toUpperCase() !== "TD")
        o = o.parentNode;
    o.style.border = "1px solid #23b30c";
    _oActive = o
}
function ViewPropertiesNow(eventObject)
{
    var o = Mscrm.Utilities.eventToDomEvent(eventObject).target;
    while(o.tagName.toUpperCase() !== "TD")
        o = o.parentNode;
    _oActive = o;
    UpdateSection()
}
function Move(bUp)
{
    if(_oActive)
        bUp ? MoveUp() : MoveDown()
}
function MoveUp()
{
    var oParentDomNode = _oActive.parentNode;
    if(oParentDomNode.rowIndex > 2)
    {
        var oNode = GetSectionNode(),
            oParentXmlNode = oNode.parentNode;
        oParentXmlNode.insertBefore(oParentXmlNode.removeChild(XUI.Html.DomUtils.GetPrevSibling(oNode)),XUI.Html.DomUtils.GetNextSibling(oNode));
        oParentDomNode.parentNode.insertBefore(oParentDomNode.parentNode.removeChild(XUI.Html.DomUtils.GetPrevSibling(oParentDomNode)),XUI.Html.DomUtils.GetNextSibling(oParentDomNode));
        UpdateFormData()
    }
}
function MoveDown()
{
    var oParentDomNode = _oActive.parentNode;
    if(oParentDomNode.rowIndex < oParentDomNode.parentNode.parentNode.rows.length - 1)
    {
        var oNode = GetSectionNode(),
            oParentXmlNode = oNode.parentNode;
        oParentXmlNode.insertBefore(oParentXmlNode.removeChild(XUI.Html.DomUtils.GetNextSibling(oNode)),oNode);
        oParentDomNode.parentNode.insertBefore(oParentDomNode.parentNode.removeChild(XUI.Html.DomUtils.GetNextSibling(oParentDomNode)),oParentDomNode);
        UpdateFormData()
    }
}
function UpdateFormData()
{
    structureXmlComponent && 
        structureXmlComponent.set_dataValue(Trim(XUI.Xml.XMLSerializer.serializeToString(oStructureXml)))
}
function GetSectionNode()
{
    return XUI.Xml.SelectSingleNode(oStructureXml,"kbarticle/sections/section[@id = '" + _oActive.getAttribute("sectionId") + "']",null)
}
