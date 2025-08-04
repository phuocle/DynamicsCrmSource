
var GROUPING_MAX = 3,
    CHART_TYPE_BAR = "Bar",
    CHART_TYPE_COLUMN = "Column",
    CHART_TYPE_LINE = "Line",
    CHART_TYPE_PIE = "Pie",
    DIRECTION_UP = 0,
    DIRECTION_DOWN = 1,
    DIRECTION_LEFT = 2,
    DIRECTION_RIGHT = 3,
    GROUP_INTERVAL_DAY = "Day",
    GROUP_INTERVAL_WEEK = "Week",
    GROUP_INTERVAL_MONTH = "Month",
    GROUP_INTERVAL_YEAR = "Year",
    GROUP_INTERVAL_FISCALPERIOD = "FiscalPeriod",
    GROUP_INTERVAL_FISCALYEAR = "FiscalYear",
    SUMMARY_VALUE_AVG = "Avg",
    SUMMARY_VALUE_COUNT = "Count",
    SUMMARY_VALUE_MAX = "Max",
    SUMMARY_VALUE_MIN = "Min",
    SUMMARY_VALUE_PERCENT_TOTAL = "PercentTotal",
    SUMMARY_VALUE_SUM = "Sum";
function ConfirmWizardClose()
{
    return confirm(LOCID_CANCEL_PROMPT)
}
function isNumericDataType(sDataType)
{
    var bIsNumeric = false;
    switch(sDataType)
    {
        case "decimal":
        case "float":
        case "int":
        case "money":
            bIsNumeric = true;
            break
    }
    return bIsNumeric
}
function getGroupIntervalArray()
{
    var saGroupIntervals = [];
    saGroupIntervals[GROUP_INTERVAL_DAY] = LOCID_GRP_INTERVAL_DAY_FMT;
    saGroupIntervals[GROUP_INTERVAL_WEEK] = LOCID_GRP_INTERVAL_WEEK_FMT;
    saGroupIntervals[GROUP_INTERVAL_MONTH] = LOCID_GRP_INTERVAL_MONTH_FMT;
    saGroupIntervals[GROUP_INTERVAL_YEAR] = LOCID_GRP_INTERVAL_YEAR_FMT;
    saGroupIntervals[GROUP_INTERVAL_FISCALPERIOD] = LOCID_GRP_INTERVAL_FP_FMT;
    saGroupIntervals[GROUP_INTERVAL_FISCALYEAR] = LOCID_GRP_INTERVAL_FY_FMT;
    return saGroupIntervals
}
function getSummaryPageUrl()
{
    var oFetchBuilder = new FetchBuilder,
        fetchXml = getXmlDocumentFromString(WizardGetProperty("FetchXml"));
    oFetchBuilder.LoadXml(fetchXml);
    WizardSetProperty("FetchXml",XUI.Xml.XMLSerializer.serializeToString(fetchXml));
    var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/SummaryPage.aspx");
    oUrl.get_query()["lcid"] = WizardGetProperty("Language");
    oUrl.get_query()["primary"] = oFetchBuilder.GetPrimaryEntityName();
    oUrl = AppendSolutionIdToTheUrl(oUrl);
    var sSecondaryEntity = oFetchBuilder.GetSecondaryEntityName();
    if(!IsNull(sSecondaryEntity))
        oUrl.get_query()["secondary"] = sSecondaryEntity;
    return oUrl
}
function AppendSolutionIdToTheUrl(oUrl)
{
    if(!isNullOrEmptyString(parent.APP_SOLUTION_ID))
        oUrl.get_query()[Mscrm.SolutionDecorater.solutionId] = parent.APP_SOLUTION_ID;
    return oUrl
}
function getSummaryValueArray()
{
    var saSummaryValues = [];
    saSummaryValues[SUMMARY_VALUE_AVG] = LOCID_SUMMARY_VALUE_AVG;
    saSummaryValues[SUMMARY_VALUE_MAX] = LOCID_SUMMARY_VALUE_MAX;
    saSummaryValues[SUMMARY_VALUE_MIN] = LOCID_SUMMARY_VALUE_MIN;
    saSummaryValues[SUMMARY_VALUE_PERCENT_TOTAL] = LOCID_SUMMARY_VALUE_PCT;
    saSummaryValues[SUMMARY_VALUE_SUM] = LOCID_SUMMARY_VALUE_SUM;
    return saSummaryValues
}
function getXmlDocumentFromString(xmlString)
{
    if(IsNull(xmlString))
        return null;
    try
    {
        return XUI.Xml.LoadXml(xmlString)
    }
    catch(e)
    {
        return null
    }
}
