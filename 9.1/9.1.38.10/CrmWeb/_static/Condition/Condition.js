
var CONDITION_CTRL = "Crm:ConditionControl",
    PREDEFINED_LIST = "Crm:PredefinedList",
    CONDITIONGRP_CTRL = "Crm:ConditionGroup",
    CONDITIONFLD_CTRL = "Crm:ConditionField",
    ENTITY_LIST = "Crm:EntityList",
    ATTRIBUTE_LIST = "Crm:AttributeList",
    OPERATOR_LIST = "Crm:OperatorList",
    VALUE_CTRL = "Crm:Value",
    FREEFORM_CTRL = "Crm:Freeform",
    HIDDEN_CTRL = "Crm:Hidden",
    FIELD_GROUP = "fld",
    TimeoutExprEntity = "waittimeout";
function ConfigureToolbars(oCondition)
{
    var oToolbar,
        sOp = "attachclick",
        hasDynamicId = oCondition.getAttribute("genDynamicId") && oCondition.getAttribute("genDynamicId").toString() == "True",
        buttonAnd,
        buttonOr;
    oToolbar = $find(hasDynamicId ? "mnuBar5_" + oCondition.id : "mnuBar5");
    if(!IsNull(oToolbar))
    {
        var obuttonContainer = XUI.Html.DomUtils.GetFirstChild(oToolbar.get_element());
        PerformToolbarOperation(sOp,oToolbar,$get(hasDynamicId ? "btnClear_" + oCondition.id : "btnClear",obuttonContainer),"$find('" + oCondition.id + "').Clear()");
        buttonAnd = $get(hasDynamicId ? "btnAnd_" + oCondition.id : "btnAnd",obuttonContainer);
        !IsNull(buttonAnd) && 
            PerformToolbarOperation(sOp,oToolbar,buttonAnd,"$find('" + oCondition.id + "').Group('and')");
        buttonOr = $get(hasDynamicId ? "btnOr_" + oCondition.id : "btnOr",obuttonContainer);
        !IsNull(buttonOr) && 
            PerformToolbarOperation(sOp,oToolbar,buttonOr,"$find('" + oCondition.id + "').Group('or')")
    }
}
function CreateUI(sColId,elem)
{
    switch(sColId)
    {
        case "colConfiguration":
            return CreateConfigurationUI(sColId,elem);
        case "colParameter":
            return CreateEntityUI(sColId,elem)
    }
    return null
}
function CreateEntityUI(sColId,elem)
{
    var sAction = GetAction(elem);
    if(sAction != "assign")
        return null;
    var sList = "",
        sPrimaryEntity = $find(elem.id).get_conditionParentControl().get_primaryEntityCode(),
        i = 0;
    while(true)
    {
        var sId = "id" + i,
            sName = "name" + i,
            sIdAttr = elem.ColumnData.attributes.getNamedItem(sId),
            sNameAttr = elem.ColumnData.attributes.getNamedItem(sName);
        if(IsNull(sIdAttr) || IsNull(sNameAttr))
            break;
        if(sIdAttr.value == sPrimaryEntity)
        {
            sList += "<OPTION VALUE='" + CrmEncodeDecode.CrmHtmlAttributeEncode(sIdAttr.value) + "'>" + CrmEncodeDecode.CrmHtmlEncode(sNameAttr.value) + "</OPTION>";
            break
        }
        i++
    }
    return sList
}
function GetAction(elem)
{
    return $find(elem.id).get_conditionParentControl().GetControl(0).get_dataValue()
}
function GetEntity(elem)
{
    return elem.ParentControl.GetControl(1).get_dataValue()
}
function CreateConfigurationUI(sColId,elem)
{
    var sAction = GetAction(elem);
    if(sAction == "assign")
    {
        var oLookupControl = elem.Container.ClientCache.GetElement("ValueControl","lookup"),
            oLUImg = Mscrm.FormControlInputBehavior.GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(oLookupControl.rows[0].cells[1]));
        oLUImg.set_lookupTypes("8");
        oLUImg.set_lookupTypeNames("systemuser");
        var aiLookupTypes = oLUImg.get_lookupTypes().split(",");
        oLUImg.set_lookupTypeIcons(elem.Container.ClientCache.LookupIcons[parseInt(aiLookupTypes[0],10)]);
        for(var i = 1; i < aiLookupTypes.length; i++)
            oLUImg.set_lookupTypeIcons(oLUImg.get_lookupTypeIcons() + ":" + elem.Container.ClientCache.LookupIcons[aiLookupTypes[i]]);
        oLUImg.set_lookupStyle("single");
        return XUI.Html.GetOuterHTML(oLookupControl)
    }
    else
        if(sAction == "create")
            return "<TABLE style='TABLE-LAYOUT: fixed' cellSpacing=0 cellPadding=0 width='100%'><TBODY><TR><TD style='display:none'><INPUT type='text' class='ms-crm-Text' name='crmFormSubmitXml' value=''></TD><TD width=25><button id='configButton' class='txt' onclick='parentNode.parentNode.getElementById(\"crmFormSubmitXml\").value=LaunchCreateDialog(\"" + GetEntity(elem) + "\"); XUI.Html.DispatchDomEvent(parentElement.parentElement.getElementById(\"crmFormSubmitXml\"), XUI.Html.CreateDomEvent(\"change\"));' Title='...'><img class='button'><br>...</button></TD></TR></TBODY></TABLE>"
}
function GetConfigurationXml(sColId,elem)
{
    var sAction = GetAction(elem);
    if(sAction == "assign")
    {
        var sValue,
            aoItems = elem.get_dataValue(),
            iLen = aoItems.length;
        if(iLen == 1)
            sValue = aoItems[0].id;
        return sValue
    }
    else
        if(sAction == "create")
            return XUI.Xml.XMLSerializer.serializeToString(elem.getElementById("configButton"))
}
function IsTimeoutExpr(key)
{
    if(key.indexOf("#") != 0)
        return false;
    var arrToken = key.split("#");
    if(arrToken.length < 2)
        return false;
    if(arrToken[1].toLowerCase() == TimeoutExprEntity)
        return true;
    return false
}
function IfTimeoutExpressionPresented(ParentControl)
{
    var conditionGrp = $find(ParentControl.id).get_conditionParentControl();
    if(conditionGrp.GetNumControls() > 0)
    {
        var cdnCtrl = conditionGrp.GetControl(0);
        if(cdnCtrl.get_element() == ParentControl)
            return false;
        return IsTimeoutCondition(cdnCtrl)
    }
    return false
}
function CanSetTimeoutExpression(ParentControl)
{
    var conditionGrp = $find(ParentControl.id).get_conditionParentControl();
    if(conditionGrp.GetNumControls() > 2)
        return false;
    if(conditionGrp.GetNumControls() > 0)
    {
        var cdnCtrl = conditionGrp.GetControl(0);
        if(cdnCtrl.get_element() == ParentControl)
            return true
    }
    return false
}
function IsTimeoutCondition(cdnCtrl)
{
    if(!Mscrm.ConditionCommon.IsConditionField(cdnCtrl))
        return false;
    var iLen = cdnCtrl.GetNumControls(),
        i = 0;
    while(i < iLen)
    {
        var attrCtrl = cdnCtrl.GetControl(i);
        if(!IsNull(attrCtrl) && XUI.DomUtilities.GetBaseName(cdnCtrl.GetDOMControl(i)).toUpperCase().indexOf("ATTRIBUTELIST") >= 0)
        {
            var sel = attrCtrl.GetSelectList();
            if(!IsNull(sel.value))
            {
                var value = sel.value;
                if(IsTimeoutExpr(value))
                    return true
            }
        }
        i++
    }
    return false
}
function IsOptionFiltered(optionValue)
{
    return IsTimeoutExpr(optionValue)
}
