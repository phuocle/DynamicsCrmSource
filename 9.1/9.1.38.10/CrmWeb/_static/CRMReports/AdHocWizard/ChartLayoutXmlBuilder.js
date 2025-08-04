
function ChartLayoutXmlBuilder()
{
    this.AddValueAxis = addValueAxis;
    this.ClearValueAxes = clearValueAxes;
    this.GetColumnAxis = getColumnAxis;
    this.GetValueAxis = getValueAxis;
    this.GetLayoutXml = getLayoutXml;
    this.GetShowDataLabels = getShowDataLabels;
    this.GetShowLegend = getShowLegend;
    this.GetChartType = getChartType;
    this.SetChartOptions = setChartOptions;
    this.SetChartType = setChartType;
    this.SetColumnAxis = setColumnAxis;
    this.SetLayoutXml = setLayoutXml;
    var _oLayoutXml = null;
    function addValueAxis(sField,sName,sSummaryValue)
    {
        var oValueAxisNode = _oLayoutXml.createElement("ValueAxis");
        oValueAxisNode.setAttribute("Field",sField);
        oValueAxisNode.setAttribute("Name",sName);
        oValueAxisNode.setAttribute("SummaryValue",sSummaryValue);
        getValueAxesRoot().appendChild(oValueAxisNode)
    }
    function clearValueAxes()
    {
        for(var ovalueAxes = getValueAxesRoot(),
            oselectedNode = XUI.Xml.SelectNodes(ovalueAxes,"ValueAxis",null),
            i = 0,
            i = 0; i < oselectedNode.length; i++)
            ovalueAxes.removeChild(oselectedNode[i])
    }
    function getBooleanString(bValue)
    {
        return bValue ? "true" : "false"
    }
    function getChartLayoutRoot()
    {
        return XUI.Xml.SelectSingleNode(_oLayoutXml,"/ChartLayout",null)
    }
    function getChartType()
    {
        return getChartLayoutRoot().getAttribute("Type")
    }
    function getColumnAxis()
    {
        var node = getChartLayoutRoot();
        return XUI.Xml.SelectSingleNode(node,"ColumnAxis",null)
    }
    function getLayoutXml()
    {
        return XUI.Xml.XMLSerializer.serializeToString(_oLayoutXml)
    }
    function getShowDataLabels()
    {
        return getChartLayoutRoot().getAttribute("DataLabels") == "true"
    }
    function getShowLegend()
    {
        return getChartLayoutRoot().getAttribute("Legend") == "true"
    }
    function getValueAxis(iIndex)
    {
        var oaValueAxes = getValueAxesRoot().childNodes;
        return oaValueAxes.length > iIndex ? oaValueAxes[iIndex] : null
    }
    function getValueAxesRoot()
    {
        var node = getChartLayoutRoot();
        return XUI.Xml.SelectSingleNode(node,"ValueAxes",null)
    }
    function setChartOptions(bShowLabels,bShowLegend)
    {
        var oChartLayoutRoot = getChartLayoutRoot();
        oChartLayoutRoot.setAttribute("DataLabels",getBooleanString(bShowLabels));
        oChartLayoutRoot.setAttribute("Legend",getBooleanString(bShowLegend))
    }
    function setChartType(sType)
    {
        getChartLayoutRoot().setAttribute("Type",sType)
    }
    function setColumnAxis(sField,sName)
    {
        var oColumnAxisNode = getColumnAxis();
        if(IsNull(oColumnAxisNode))
        {
            oColumnAxisNode = _oLayoutXml.createElement("ColumnAxis");
            getChartLayoutRoot().appendChild(oColumnAxisNode)
        }
        oColumnAxisNode.setAttribute("Field",sField);
        oColumnAxisNode.setAttribute("Name",sName)
    }
    function setLayoutXml(oLayoutXml)
    {
        _oLayoutXml = IsNull(oLayoutXml) ? XUI.Xml.LoadXml('<ChartLayout Type="Column" Legend="true" DataLabels="true"><ValueAxes /></ChartLayout>') : oLayoutXml
    }
}
