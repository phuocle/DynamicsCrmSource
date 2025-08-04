
var ASCENDING = "ascending",
    DESCENDING = "descending";
function Select(bSorted,bAscend)
{
    this.innerHTML = "";
    this.outerHTML = "";
    this.Attributes = "";
    this.Selected;
    this.OnChange;
    this.Disabled = false;
    this.ID = "";
    this.TabIndex = "";
    this.Sorted = bSorted;
    this.Ascend = bAscend;
    this.MultiSelect = false;
    this.Size = 0;
    this.AddEmptyOption = _addEmptyOption;
    this.AddOption = _addOption;
    this.AddOptionHtml = _addOptionHtml;
    this.AddOptionGroup = _addOptionGroup;
    this.AddAttribute = _addAttribute;
    this.Render = _render;
    this.SetMultiSelect = _multiSelect;
    this.AddToControl = _addToControl;
    var _optionGroup = new OptionGroup("",bSorted,bAscend,false),
        OptionGroupArray = [];
    OptionGroupArray.push(_optionGroup);
    function _addEmptyOption()
    {
        _optionGroup.AddEmptyOption()
    }
    function _addOptionHtml(sOptionHtml)
    {
        _optionGroup.AddOptionHtml(sOptionHtml)
    }
    function _addOption(sOptionText,sOptionValue,sExpandos)
    {
        _optionGroup.AddOption(sOptionText,sOptionValue,sExpandos)
    }
    function _addOptionGroup(oOptionGroup)
    {
        OptionGroupArray.push(oOptionGroup)
    }
    function _addAttribute(sAttributeName,sAttributeValue)
    {
        this.Attributes += " " + sAttributeName + '="' + CrmEncodeDecode.CrmHtmlAttributeEncode(sAttributeValue) + '" '
    }
    function _multiSelect(bMultiSelect,iSize)
    {
        this.MultiSelect = bMultiSelect;
        this.Size = iSize
    }
    function _render()
    {
        this.TabIndex != "" && 
            this.AddAttribute("TabIndex",this.TabIndex);
        this.Disabled && 
            this.AddAttribute("disabled","true");
        if(this.Sorted)
            if(this.Ascend)
                this.AddAttribute("Sort",ASCENDING);
            else
                this.AddAttribute("Sort",DESCENDING);
        this.AddAttribute("id",this.ID);
        this.AddAttribute("name",this.ID);
        this.AddAttribute("class","ms-crm-SelectBox");
        !IsNull(this.OnChange) && this.OnChange != "" && 
            this.AddAttribute("onchange",this.OnChange);
        !IsNull(this.Selected) && 
            this.AddAttribute("defaultSelected",this.Selected);
        if(this.MultiSelect)
            this.outerHTML = "<select multiple size='" + this.Size + "' ";
        else
            this.outerHTML = "<select ";
        this.outerHTML += this.Attributes;
        this.outerHTML += ">";
        for(var optionGroupIndex = 0; optionGroupIndex < OptionGroupArray.length; optionGroupIndex++)
        {
            var oGroup = OptionGroupArray[optionGroupIndex];
            oGroup.Selected = this.Selected;
            this.innerHTML += oGroup.Render()
        }
        this.outerHTML += this.innerHTML;
        this.outerHTML += "</select>";
        return this.outerHTML
    }
    function _addToControl(control,bOuterHtml)
    {
        if(IsNull(bOuterHtml) || bOuterHtml == false)
            control.innerHTML = this.Render();
        else
            control.outerHTML = this.Render();
        $create(Mscrm.FormInputControl.SelectInputBehavior,{},null,null,$get(this.ID))
    }
}
function OptionGroup(sLabel,bSorted,bAscend,bDisplayGrouping)
{
    this.innerHTML = "";
    this.outerHTML = "";
    this.Attributes = "";
    this.Selected;
    this.Label = sLabel;
    this.Sorted = IsNull(bSorted) ? false : bSorted;
    this.Ascend = IsNull(bAscend) ? false : bAscend;
    this.ID = "";
    this.DisplayGrouping = IsNull(bDisplayGrouping) ? true : bDisplayGrouping;
    this.AddEmptyOption = _addEmptyOption;
    this.AddOption = _addOption;
    this.AddOptionHtml = _addOptionHtml;
    this.AddAttribute = _addAttribute;
    this.Render = _render;
    var arrayOptions = [];
    function _addEmptyOption(sExpandos)
    {
        _addOption("","",sExpandos)
    }
    function _addOption(sOptionText,sOptionValue,sExpandos)
    {
        var oOption = new Option;
        oOption.Text = sOptionText;
        oOption.Value = sOptionValue;
        oOption.Expandos = sExpandos;
        arrayOptions.push(oOption)
    }
    function _addAttribute(sAttributeName,sAttributeValue)
    {
        this.Attributes += " " + sAttributeName + '="' + CrmEncodeDecode.CrmHtmlAttributeEncode(sAttributeValue) + '" '
    }
    function _addOptionHtml(sOptionHtml)
    {
        this.innerHTML += sOptionHtml
    }
    function _render()
    {
        if(this.DisplayGrouping)
        {
            this.AddAttribute("id",this.ID);
            this.AddAttribute("label",this.Label);
            if(this.Sorted)
                if(this.Ascend)
                    this.AddAttribute("Sort",ASCENDING);
                else
                    this.AddAttribute("Sort",DESCENDING);
            this.outerHTML = "<optgroup ";
            this.outerHTML += this.Attributes;
            this.outerHTML += ">"
        }
        this.Sorted && 
            arrayOptions.sort(this.Ascend ? ascendingComparator : descendingComparator);
        for(var arrayOptionIndex = 0; arrayOptionIndex < arrayOptions.length; arrayOptionIndex++)
        {
            var oOption = arrayOptions[arrayOptionIndex];
            if(!IsNull(this.Selected) && oOption.Value == this.Selected)
                oOption.Selected = true;
            this.innerHTML += oOption.Render()
        }
        this.outerHTML += this.innerHTML;
        if(this.DisplayGrouping)
            this.outerHTML += "</optgroup>";
        return this.outerHTML
    }
    function ascendingComparator(oLHS,oRHS)
    {
        return oLHS.Text.localeCompare(oRHS.Text)
    }
    function descendingComparator(oLHS,oRHS)
    {
        return oRHS.Text.localeCompare(oLHS.Text)
    }
}
function Option()
{
    this.Selected = false;
    this.Text = "";
    this.Value = "";
    this.outerHTML = "";
    this.Title = "";
    this.Expandos = "";
    this.Render = _render;
    function _render()
    {
        this.outerHTML = '<option value="';
        this.outerHTML += CrmEncodeDecode.CrmHtmlAttributeEncode(this.Value);
        this.outerHTML += '" ';
        this.outerHTML += 'title="';
        this.outerHTML += this.Title.length == 0 ? CrmEncodeDecode.CrmHtmlAttributeEncode(this.Text) : CrmEncodeDecode.CrmHtmlAttributeEncode(this.Title);
        this.outerHTML += '" ';
        if(this.Selected)
            this.outerHTML += "SELECTED ";
        if(!IsNull(this.Expandos))
            this.outerHTML += this.Expandos;
        this.outerHTML += ">";
        this.outerHTML += CrmEncodeDecode.CrmHtmlEncode(this.Text);
        this.outerHTML += "</option>";
        return this.outerHTML
    }
}
