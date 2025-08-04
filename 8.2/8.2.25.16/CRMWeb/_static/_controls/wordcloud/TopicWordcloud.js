
Mscrm = window.Mscrm || {__namespace:true};
Mscrm.Wordcloud = Mscrm.Wordcloud || {__namespace:true};
(function()
{
    this.RenderTopicWordCloud = function()
    {
        var queryString = _getQueryStringParameters(),
            viewId = queryString["viewid"],
            visid = queryString["visid"];
        if(!viewId || !visid)
            return;
        var parameters = JSON.stringify({viewId:viewId.replace(/[{}]/g,""),visid:visid.replace(/[{}]/g,"")}),
            selectedWord = queryString["parentVizPaneId"];
        _retrieveTopicsForWordCloud(parameters,selectedWord)
    };
    function _getQueryStringParameters()
    {
        var queryString = Xrm.Page.context.getQueryStringParameters();
        if(!queryString || !queryString["data"])
            return {};
        var uri = Mscrm.CrmUri.create("");
        uri.appendToQuery(queryString["data"]);
        return uri.get_query()
    }
    function _retrieveTopicsForWordCloud(parameters,selectedWord)
    {
        try
        {
            var requestXML = "";
            requestXML += '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">';
            requestXML += "<s:Body>";
            requestXML += '<Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">';
            requestXML += '<request xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts">';
            requestXML += '<a:Parameters xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic">';
            requestXML += "<a:KeyValuePairOfstringanyType>";
            requestXML += "<b:key>Filter</b:key>";
            requestXML += '<b:value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">' + parameters + "</b:value>";
            requestXML += "</a:KeyValuePairOfstringanyType>";
            requestXML += "</a:Parameters>";
            requestXML += '<a:RequestId i:nil="true" />';
            requestXML += "<a:RequestName>GetDataForTopicWordCloud</a:RequestName>";
            requestXML += "</request>";
            requestXML += "</Execute>";
            requestXML += "</s:Body>";
            requestXML += "</s:Envelope>";
            var req = new XMLHttpRequest;
            req.open("POST",_getClientUrl());
            try
            {
                req.responseType = "msxml-document"
            }
            catch(e)
            {
            }
            req.setRequestHeader("Accept","application/xml, text/xml, */*");
            req.setRequestHeader("Content-Type","text/xml; charset=utf-8");
            req.setRequestHeader("SOAPAction","http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
            req.onreadystatechange = function()
            {
                if(req.readyState == 4)
                    req.status == 200 && 
                        _successCallback(req.responseXML,selectedWord)
            };
            req.send(requestXML)
        }
        catch(e)
        {
        }
    }
    function _getClientUrl()
    {
        var clientUrl = "";
        if(Xrm.Page.context)
            clientUrl = Xrm.Page.context.getClientUrl();
        return clientUrl + "/XRMServices/2011/Organization.svc/web"
    }
    function _successCallback(data,selectedWord)
    {
        _setSelectionNamespaces(data);
        var topicNode = _selectSingleNode(data,"//b:value");
        if(!topicNode)
            return;
        var words = JSON.parse(topicNode.firstChild.nodeValue);
        if(!words)
            return;
        var className = "word-cloud";
        if(words.Error)
        {
            $("." + className).append("<p>" + words.Error + "</p>");
            return
        }
        _isDashboardContext() && words.Title && 
            $("." + className + "-title").append($("<span>").text(words.Title));
        var wordCloudWords = words.TopicData.map(function(word)
            {
                return {name:word.Name,weight:parseInt(word.Weight)}
            });
        ReactDOM.render(React.createElement(WordCloudControl,{phrases:wordCloudWords,parentClass:className,onWordClick:!_isMobileClient() && _applyDrillDown,selectedWord:selectedWord}),$("." + className)[0])
    }
    function _applyDrillDown(word)
    {
        var queryParams = _getQueryStringParameters();
        if(!queryParams)
            return;
        var extraqs = "visualizationPaneMode=1&isWordCloudDrillDown=true&visualizationId=" + encodeURIComponent(queryParams["visid"]) + "&visualizationType=" + encodeURIComponent(queryParams["vistype"]) + "&parentVizPaneId=" + encodeURIComponent(word.tooltip),
            mainPageUrl = Xrm.Page.context.getClientUrl() + "/main.aspx?pagetype=ENTITYLIST&etc=112&viewid=" + encodeURIComponent(queryParams["viewid"]) + "&viewtype=" + encodeURIComponent(queryParams["viewtype"]) + "&extraqs=" + encodeURIComponent(extraqs);
        openStdWin(mainPageUrl,"wordcloud",1e3,600,null)
    }
    function _isMobileClient()
    {
        return window.parent.Xrm.Page.context.client.getClient() == Xrm.ClientName.mobile
    }
    function _isDashboardContext()
    {
        if(!_getQueryStringParameters()["IsDashboardComponent"])
            return false;
        return Boolean.parse(_getQueryStringParameters()["IsDashboardComponent"])
    }
    var _ns = {s:"http://schemas.xmlsoap.org/soap/envelope/",a:"http://schemas.microsoft.com/xrm/2011/Contracts",i:"http://www.w3.org/2001/XMLSchema-instance",b:"http://schemas.datacontract.org/2004/07/System.Collections.Generic",c:"http://schemas.microsoft.com/xrm/2011/Metadata"},
        _namespaces = ["xmlns:s='http://schemas.xmlsoap.org/soap/envelope/'","xmlns:a='http://schemas.microsoft.com/xrm/2011/Contracts'","xmlns:i='http://www.w3.org/2001/XMLSchema-instance'","xmlns:b='http://schemas.datacontract.org/2004/07/System.Collections.Generic'","xmlns:c='http://schemas.microsoft.com/xrm/2011/Metadata'"].join(" ");
    function _setSelectionNamespaces(doc)
    {
        try
        {
            doc.setProperty("SelectionNamespaces",_namespaces)
        }
        catch(e)
        {
        }
    }
    function _nsResolver(prefix)
    {
        return _ns[prefix]
    }
    function _selectSingleNode(node,xpathExpr)
    {
        if(typeof node.selectSingleNode != "undefined")
            return node.selectSingleNode(xpathExpr);
        var xpe = new XPathEvaluator,
            xPathNode = xpe.evaluate(xpathExpr,node,_nsResolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
        return xPathNode != null ? xPathNode.singleNodeValue : null
    }
}).call(Mscrm.Wordcloud)
