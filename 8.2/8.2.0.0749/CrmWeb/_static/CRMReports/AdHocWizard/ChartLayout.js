
var MANDATORY_VALUE_AXIS_COUNT = 1,
    PIE_VALUE_AXIS_COUNT = 1,
    SUMMARY_VALUE_EXPANDO = 'SummaryValue="{0}"',
    VALUE_AXIS_COUNT = 2,
    _oAttributeInfoCache = null,
    _oChartLayoutXmlBuilder = null,
    _iColumnAxisType = null,
    _saGroupingIntervalFormats = null,
    _saSummaryValueFormats = null,
    _oWizardXmlBuilder = null,
    _columnAxisFieldCtrl = null,
    _columnAxisLabelCtrl = null,
    _valueAxis1FieldCtrl = null,
    _valueAxis2FieldCtrl = null,
    _valueAxis1LabelCtrl = null,
    _valueAxis2LabelCtrl = null,
    _showDataLabels = null,
    _showLegend = null;

function chartFormatPage_onload() {
    _columnAxisFieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("columnAxisField");
    _valueAxis1FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis1Field");
    _valueAxis2FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis2Field");
    _columnAxisLabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("columnAxisLabel");
    _valueAxis1LabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis1Label");
    _valueAxis2LabelCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis2Label");
    _showDataLabels = Mscrm.FormControlInputBehavior.GetBehavior("showDataLabels");
    _showLegend = Mscrm.FormControlInputBehavior.GetBehavior("showLegend");
    initializeChartingCommon();
    $get("previewImage").src = formatString("/_imgs/ReportWizard/chart_{0}.gif",
        _oChartLayoutXmlBuilder.GetChartType().toLowerCase());
    _saGroupingIntervalFormats = getGroupIntervalArray();
    _saSummaryValueFormats = getSummaryValueArray();
    initializeColumnAxisSelect();
    initializeValueAxisSelects();
    updatePreviewAxes();
    updateNextButton();
    _showDataLabels.set_dataValue(_oChartLayoutXmlBuilder.GetShowDataLabels());
    _showLegend.set_dataValue(_oChartLayoutXmlBuilder.GetShowLegend())
}

function getLabelControl(oFieldControl) {
    var oLabelControl = null;
    switch (oFieldControl.get_element().id) {
    case "columnAxisField":
        oLabelControl = _columnAxisLabelCtrl;
        break;
    case "valueAxis1Field":
        oLabelControl = _valueAxis1LabelCtrl;
        break;
    case "valueAxis2Field":
        oLabelControl = _valueAxis2LabelCtrl;
        break
    }
    return oLabelControl
}

function getValueAxes() {
    for (var oaValueAxes = [],
        oaColumns = _oWizardXmlBuilder.GetColumns(),
        i = 0;
        i < oaColumns.length;
        i++) {
        var oColumn = oaColumns[i],
            sColumnId = oColumn.getAttribute("ID"),
            sAttributeAlias = oColumn.getAttribute("Field"),
            sSummaryValue = oColumn.getAttribute("SummaryValue"),
            sDisplayName = _oAttributeInfoCache.GetAttributeDisplayName(sAttributeAlias),
            oValueAxis = null;
        if (_iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP) {
            if (!IsNull(sSummaryValue))
                oValueAxis = new ValueAxis(sColumnId, sDisplayName, sSummaryValue)
        } else if (isNumericDataType(_oAttributeInfoCache.GetAttributeType(sAttributeAlias)))
            oValueAxis = new ValueAxis(sColumnId, sDisplayName, sSummaryValue);
        !IsNull(oValueAxis) &&
            oaValueAxes.push(oValueAxis)
    }
    return oaValueAxes
}

function getValueAxisSelect(oaValueAxes, bIncludeEmptyOption) {
    var oValueAxisSelect = new Select;
    bIncludeEmptyOption &&
        oValueAxisSelect.AddEmptyOption();
    for (var oaColumns = _oWizardXmlBuilder.GetColumns(),
        i = 0;
        i < oaValueAxes.length;
        i++) {
        var oValueAxis = oaValueAxes[i];
        if (_iColumnAxisType == PROPERTY_PAGE_TYPE_COLUMN ||
            (_oChartLayoutXmlBuilder.GetChartType() != CHART_TYPE_PIE || isValidForPieChart(oValueAxis))) {
            var sOptionDisplayName = _iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP
                ? formatString(_saSummaryValueFormats[oValueAxis.SummaryValue], oValueAxis.Name)
                : oValueAxis.Name;
            oValueAxisSelect.AddOption(sOptionDisplayName,
                oValueAxis.Id,
                formatString(SUMMARY_VALUE_EXPANDO, oValueAxis.SummaryValue))
        }
    }
    return oValueAxisSelect
}

function initializeColumnAxisSelect() {
    var oColumnAxisSelect = new Select;
    oColumnAxisSelect.ID = "columnAxisField";
    oColumnAxisSelect.OnChange = "updateLabel(this);updateNextButton();";
    var oColumnAxisNode = _oChartLayoutXmlBuilder.GetColumnAxis();
    if (!IsNull(oColumnAxisNode))
        oColumnAxisSelect.Selected = oColumnAxisNode.getAttribute("Field");
    if (_iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP)
        for (var oaGroupings = _oWizardXmlBuilder.GetGroupings(),
            i = 0;
            i < oaGroupings.length;
            i++) {
            var oGrouping = oaGroupings[i],
                sAttributeAlias = oGrouping.getAttribute("Field"),
                sDisplayNameBase = _oAttributeInfoCache.GetAttributeDisplayName(sAttributeAlias),
                sTimeInterval = oGrouping.getAttribute("Interval"),
                sDisplayName = IsNull(sTimeInterval)
                    ? sDisplayNameBase
                    : formatString(_saGroupingIntervalFormats[sTimeInterval], sDisplayNameBase);
            oColumnAxisSelect.AddOption(sDisplayName, sAttributeAlias)
        }
    else
        for (var oaColumns = _oWizardXmlBuilder.GetColumns(),
            i = 0;
            i < oaColumns.length;
            i++) {
            var oColumn = oaColumns[i],
                sAttributeAlias = oColumn.getAttribute("Field"),
                sDisplayName = _oAttributeInfoCache.GetAttributeDisplayName(sAttributeAlias);
            oColumnAxisSelect.AddOption(sDisplayName, oColumn.getAttribute("ID"))
        }
    oColumnAxisSelect.AddToControl(_columnAxisFieldCtrl.get_element().parentNode);
    _columnAxisFieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("columnAxisField");
    if (!IsNull(oColumnAxisNode) && _columnAxisFieldCtrl.get_dataValue() == oColumnAxisSelect.Selected)
        _columnAxisLabelCtrl.set_dataValue(oColumnAxisNode.getAttribute("Name"));
    else
        updateLabel(_columnAxisFieldCtrl)
}

function initializeChartingCommon() {
    _oWizardXmlBuilder = new WizardXmlBuilder;
    if (Mscrm.Utilities.isEdge()) {
        _oWizardXmlBuilder.SetGroupingXml(getResultNode(WizardGetProperty("GroupingXml")));
        _oWizardXmlBuilder.SetColumnXml(getResultNode(WizardGetProperty("ColumnXml")));
        _oWizardXmlBuilder.SetTableLayoutXml(getResultNode(WizardGetProperty("TableLayoutXml")))
    } else {
        _oWizardXmlBuilder.SetGroupingXml(WizardGetProperty("GroupingXml"));
        _oWizardXmlBuilder.SetColumnXml(WizardGetProperty("ColumnXml"));
        _oWizardXmlBuilder.SetTableLayoutXml(WizardGetProperty("TableLayoutXml"))
    }
    _iColumnAxisType = _oWizardXmlBuilder.GetGroupingCount() > 0 ? PROPERTY_PAGE_TYPE_GROUP : PROPERTY_PAGE_TYPE_COLUMN;
    _oAttributeInfoCache = new AttributeInfoCache;
    _oAttributeInfoCache.Initialize(XUI.Xml.XMLSerializer.serializeToString(WizardGetProperty("FetchXml")),
        WizardGetProperty("Language"));
    _oChartLayoutXmlBuilder = new ChartLayoutXmlBuilder;
    if (Mscrm.Utilities.isEdge())
        _oChartLayoutXmlBuilder.SetLayoutXml(getResultNode(WizardGetProperty("ChartLayoutXml")));
    else
        _oChartLayoutXmlBuilder.SetLayoutXml(WizardGetProperty("ChartLayoutXml"))
}

function initializeValueAxisSelects() {
    var bColumnAxisTypeChanged,
        oOriginalColumnAxis = _oChartLayoutXmlBuilder.GetColumnAxis();
    if (!IsNull(oOriginalColumnAxis)) {
        var sOriginalColumnAxisField = oOriginalColumnAxis.getAttribute("Field");
        if (_iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP)
            bColumnAxisTypeChanged = IsNull(_oWizardXmlBuilder.GetGrouping(sOriginalColumnAxisField));
        else
            bColumnAxisTypeChanged = IsNull(_oWizardXmlBuilder.GetColumn(sOriginalColumnAxisField))
    } else
        bColumnAxisTypeChanged = true;
    for (var oaValueAxes = getValueAxes(),
        iValueAxisCount = _oChartLayoutXmlBuilder.GetChartType() == CHART_TYPE_PIE
            ? PIE_VALUE_AXIS_COUNT
            : VALUE_AXIS_COUNT,
        i = 0;
        i < iValueAxisCount;
        i++) {
        var bOptionalAxis = i >= MANDATORY_VALUE_AXIS_COUNT,
            oValueAxisSelect = getValueAxisSelect(oaValueAxes, bOptionalAxis);
        oValueAxisSelect.ID = formatString("valueAxis{0}Field", i + 1);
        oValueAxisSelect.OnChange = bOptionalAxis
            ? "updateLabel(this);updateOptionalValueAxisLabel(this);updateNextButton();"
            : "updateLabel(this);updateNextButton();";
        var oValueAxisNode = _oChartLayoutXmlBuilder.GetValueAxis(i);
        if (!IsNull(oValueAxisNode))
            oValueAxisSelect.Selected = oValueAxisNode.getAttribute("Field");
        var oFieldControl = Mscrm.FormControlInputBehavior.GetBehavior(oValueAxisSelect.ID);
        oValueAxisSelect.AddToControl(oFieldControl.get_element().parentNode);
        if (i == 0)
            _valueAxis1FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis1Field");
        else
            _valueAxis2FieldCtrl = Mscrm.FormControlInputBehavior.GetBehavior("valueAxis2Field");
        var oFieldControl = Mscrm.FormControlInputBehavior.GetBehavior(oValueAxisSelect.ID);
        if (IsNull(oValueAxisNode) ||
            bColumnAxisTypeChanged ||
            oFieldControl.get_dataValue() != oValueAxisSelect.Selected)
            updateLabel(oFieldControl);
        else {
            var oColumnNode = _oWizardXmlBuilder.GetColumn(oValueAxisSelect.Selected);
            if (_iColumnAxisType == PROPERTY_PAGE_TYPE_GROUP &&
                oValueAxisNode.getAttribute("SummaryValue") != oColumnNode.getAttribute("SummaryValue"))
                updateLabel(oFieldControl);
            else {
                var oLabelControl = Mscrm.FormControlInputBehavior
                    .GetBehavior(formatString("valueAxis{0}Label", i + 1));
                oLabelControl.set_dataValue(oValueAxisNode.getAttribute("Name"))
            }
        }
        bOptionalAxis &&
            updateOptionalValueAxisLabel(oFieldControl)
    }
}

function isValidForPieChart(oValueAxis) {
    return oValueAxis.SummaryValue == SUMMARY_VALUE_SUM || oValueAxis.SummaryValue == SUMMARY_VALUE_PERCENT_TOTAL
}

function updateLabel(oFieldControl) {
    var oFieldControlbeh = null;
    if (oFieldControl.id)
        oFieldControlbeh = Mscrm.FormControlInputBehavior.GetBehavior(oFieldControl.id);
    else
        oFieldControlbeh = oFieldControl;
    var oLabelControl = getLabelControl(oFieldControlbeh);
    if (!IsNull(oLabelControl)) {
        oLabelControl.set_dataValue(oFieldControlbeh.get_selectedText());
        updatePreviewAxes()
    }
}

function updateOptionalValueAxisLabel(fieldControl) {
    var controlBehavior = null;
    if (fieldControl.id)
        controlBehavior = Mscrm.FormControlInputBehavior.GetBehavior(fieldControl.id);
    else
        controlBehavior = fieldControl;
    var labelControl = getLabelControl(controlBehavior);
    if (IsNull(labelControl.get_dataValue())) {
        labelControl.set_dataValue(null);
        labelControl.Disabled = true
    } else
        labelControl.Disabled = false
}

function updateNextButton() {
    var bIsPieChart = _oChartLayoutXmlBuilder.GetChartType() == CHART_TYPE_PIE,
        bEnableNextButton = !IsNull(_columnAxisFieldCtrl.get_dataValue()) &&
            !IsNull(_valueAxis1FieldCtrl.get_dataValue()) &&
            (bIsPieChart ||
                !IsNull(_columnAxisLabelCtrl.get_dataValue()) && !IsNull(_valueAxis1LabelCtrl.get_dataValue())) &&
            (bIsPieChart ||
                IsNull(_valueAxis2FieldCtrl.get_dataValue()) ||
                !IsNull(_valueAxis2LabelCtrl.get_dataValue()));
    WizardSetButtonEnabled(bEnableNextButton, _WizardButtonsEnum.NEXTBUTTON)
}

function updatePreviewAxes() {
    var xAxisElement = $get("xAxisCell"),
        yAxisElement = $get("yAxisCell"),
        sChartType = _oChartLayoutXmlBuilder.GetChartType();
    if (sChartType == CHART_TYPE_PIE)
        XUI.Html.SetText(xAxisElement,
            formatString(LOCID_PIE_CHART_PREVIEW,
                _valueAxis1FieldCtrl.get_selectedText(),
                _columnAxisFieldCtrl.get_selectedText()));
    else {
        var sColumnAxisLabel = Trim(_columnAxisLabelCtrl.get_value()),
            sValueAxisLabel = Trim(_valueAxis1LabelCtrl.get_value());
        if (!IsNull(_valueAxis2FieldCtrl.get_dataValue())) {
            sValueAxisLabel += LOCID_VALUE_AXIS_SEPERATOR;
            sValueAxisLabel += Trim(_valueAxis2LabelCtrl.get_value())
        }
        switch (sChartType) {
        case CHART_TYPE_COLUMN:
        case CHART_TYPE_LINE:
            XUI.Html.SetText(xAxisElement, sColumnAxisLabel);
            XUI.Html.SetText(yAxisElement, sValueAxisLabel);
            break;
        case CHART_TYPE_BAR:
            XUI.Html.SetText(xAxisElement, sValueAxisLabel);
            XUI.Html.SetText(yAxisElement, sColumnAxisLabel);
            break
        }
    }
}

function ValueAxis(sId, sName, sSummaryValue) {
    this.Id = sId;
    this.Name = sName;
    this.SummaryValue = IsNull(sSummaryValue) ? SUMMARY_VALUE_SUM : sSummaryValue
}