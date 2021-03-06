
function CacheManager() {
    this.Initialize = _initialize;
    this.GetElement = _getElement;
    this.PutElement = _putElement;
    this.ExecuteCommand = _executeRemoteCommand;
    this.ClearCache = _clearCache;
    this.Contains = _containsElement;
    this.AbstractDataType = _getAbstractDataType;
    this.GetDataType = _getDataType;
    this.GetOpDataType = _getOpDataType;
    this.GetField = _getField;
    this.GetRelatedEntity = _getRelatedEntity;
    this.QueryData = _queryData;
    this.GetQuery = _getQuery;
    this.OnPopulateFieldList = null;
    var _oaCache = [],
        _oXml = null,
        _asLookupIcons = [];
    this.LookupIcons = _asLookupIcons;
    var _oQueryXml = null,
        _fieldListXsl = null,
        _entityListXsl = null;

    function _initialize(bConditionExpression) {
        _oaCache["Entity"] = [];
        _oaCache["Field"] = [];
        _oaCache["Query"] = [];
        _oaCache["Operator"] = [];
        var oaOpNames = _populateOpNames();
        _oaCache["Operator"]["number"] = _createOpCtrl(oaOpNames, "eq;ne;gt;ge;lt;le;not-null;null");
        if (bConditionExpression == null || bConditionExpression == "undefined") {
            _oaCache["Operator"]["string"] = _createOpCtrl(oaOpNames,
                "eq;ne;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null");
            _oaCache["Operator"]["memo"] = _createOpCtrl(oaOpNames,
                "contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null")
        } else {
            _oaCache["Operator"]["string"] = _createOpCtrl(oaOpNames,
                "eq;ne;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null;in;notin;gt;ge;lt;le");
            _oaCache["Operator"]["memo"] = _createOpCtrl(oaOpNames,
                "eq;ne;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;not-null;null;in;notin;gt;ge;lt;le")
        }
        _oaCache["Operator"]["date"] = _createOpCtrl(oaOpNames,
            "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-hours;next-x-hours;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime;olderthan-x-minutes;olderthan-x-hours;olderthan-x-days;olderthan-x-weeks;olderthan-x-months;olderthan-x-years;not-null;null;in-fiscal-year;in-fiscal-period;in-fiscal-period-and-year;in-or-after-fiscal-period-and-year;in-or-before-fiscal-period-and-year;last-fiscal-year;this-fiscal-year;next-fiscal-year;last-x-fiscal-years;next-x-fiscal-years;last-fiscal-period;this-fiscal-period;next-fiscal-period;last-x-fiscal-periods;next-x-fiscal-periods");
        _oaCache["Operator"]["dateonly"] = _createOpCtrl(oaOpNames,
            "on;on-or-after;on-or-before;yesterday;today;tomorrow;next-seven-days;last-seven-days;next-week;last-week;this-week;next-month;last-month;this-month;next-year;last-year;this-year;last-x-days;next-x-days;last-x-weeks;next-x-weeks;last-x-months;next-x-months;last-x-years;next-x-years;anytime;olderthan-x-days;olderthan-x-weeks;olderthan-x-months;olderthan-x-years;not-null;null;in-fiscal-year;in-fiscal-period;in-fiscal-period-and-year;in-or-after-fiscal-period-and-year;in-or-before-fiscal-period-and-year;last-fiscal-year;this-fiscal-year;next-fiscal-year;last-x-fiscal-years;next-x-fiscal-years;last-fiscal-period;this-fiscal-period;next-fiscal-period;last-x-fiscal-periods;next-x-fiscal-periods");
        _oaCache["Operator"]["picklist"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
        _oaCache["Operator"]["picklistwithname"] =
            _createOpCtrl(oaOpNames,
                "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["Operator"]["language"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null;eq-userlanguage");
        _oaCache["Operator"]["objecttypecode"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
        _oaCache["Operator"]["lookup"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
        _oaCache["Operator"]["lookupwithname"] =
            _createOpCtrl(oaOpNames,
                "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["Operator"]["lookupwithuser"] = _createOpCtrl(oaOpNames, "eq-userid;ne-userid;eq;ne;not-null;null");
        _oaCache["Operator"]["lookupwithuserwithhierarchy"] =
            _createOpCtrl(oaOpNames, "eq-userid;ne-userid;eq;ne;not-null;null;under;not-under");
        _oaCache["Operator"]["lookupwithuserwithhierarchywithname"] =
            _createOpCtrl(oaOpNames,
                "eq-userid;ne-userid;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;under;not-under");
        _oaCache["Operator"]["owner"] = _createOpCtrl(oaOpNames,
            "eq-userid;ne-userid;eq-userteams;eq-useroruserhierarchy;eq-useroruserhierarchyandteams;eq-useroruserteams;eq;ne;not-null;null");
        _oaCache["Operator"]["lookupwithuserwithname"] =
            _createOpCtrl(oaOpNames,
                "eq-userid;ne-userid;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["Operator"]["ownerwithname"] =
            _createOpCtrl(oaOpNames,
                "eq-userid;ne-userid;eq-useroruserhierarchy;eq-useroruserhierarchyandteams;eq-userteams;eq-useroruserteams;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["Operator"]["lookupwithbusinessunit"] = _oaCache["Operator"]["businessunit"] =
            _createOpCtrl(oaOpNames, "eq-businessid;ne-businessid;eq;ne;not-null;null");
        _oaCache["Operator"]["lookupwithbusinesswithname"] = _oaCache["Operator"]["lookupwithbusinessunitwithname"] =
            _createOpCtrl(oaOpNames,
                "eq-businessid;ne-businessid;eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["ConditionControlOperator"] = [];
        _oaCache["ConditionControlOperator"]["date"] =
            _createOpCtrl(oaOpNames, "eq;ne;gt;ge;lt;le;on;not-on;on-or-after;on-or-before;not-null;null");
        _oaCache["ConditionControlOperator"]["dateonly"] =
            _createOpCtrl(oaOpNames, "eq;ne;gt;ge;lt;le;on;not-on;on-or-after;on-or-before;not-null;null");
        _oaCache["ConditionControlOperator"]["lookupwithuser"] = _oaCache["ConditionControlOperator"]["owner"] =
            _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
        _oaCache["ConditionControlOperator"]["lookupwithuserwithname"] = _oaCache["ConditionControlOperator"][
            "ownerwithname"] = _createOpCtrl(oaOpNames,
            "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["Operator"]["lookupwithhierarchy"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null;under;not-under");
        _oaCache["Operator"]["lookupwithhierarchywithname"] =
            _createOpCtrl(oaOpNames,
                "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;under;not-under");
        _oaCache["ConditionControlOperator"]["lookupwithbusinessunit"] = _oaCache["ConditionControlOperator"][
            "businessunitid"] = _createOpCtrl(oaOpNames, "eq;ne;not-null;null");
        _oaCache["ConditionControlOperator"]["lookupwithbusinessunitwithname"] = _oaCache["ConditionControlOperator"][
            "businessunitidname"] = _createOpCtrl(oaOpNames,
            "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith");
        _oaCache["ConditionControlOperator"]["partylist"] =
            _createOpCtrl(oaOpNames, "eq;ne;not-null;null;contains;doesnotcontain");
        _oaCache["ConditionControlOperator"]["lookupwithuserwithhierarchy"] =
            _createOpCtrl(oaOpNames, "eq;ne;not-null;null;under;not-under");
        _oaCache["ConditionControlOperator"]["lookupwithuserwithhierarchywithname"] =
            _createOpCtrl(oaOpNames,
                "eq;ne;not-null;null;contains;doesnotcontain;beginswith;doesnotbeginwith;endswith;doesnotendwith;under;not-under");
        _oaCache["ValueControl"] = [];
        _oaCache["UserQuery"] = [];
        _oaCache["SystemQuery"] = [];
        _oaCache["DefaultAdvFindView"] = [];
        var opNamesForFilterControl = _populateOpNamesForFilterControl();
        _oaCache["Operator"]["FilterControl"] = _createOpCtrl(opNamesForFilterControl, "eq")
    }

    function _populateOpNames() {
        var oaOpNames = [];
        oaOpNames["eq"] = LOCID_AF_EQUALS;
        oaOpNames["ne"] = LOCID_AF_DOESNOTEQUAL;
        oaOpNames["contains"] = LOCID_AF_CONTAINS;
        oaOpNames["doesnotcontain"] = LOCID_AF_DOESNOTCONTAIN;
        oaOpNames["beginswith"] = LOCID_AF_BEGINSWITH;
        oaOpNames["doesnotbeginwith"] = LOCID_AF_DOESNOTBEGINWITH;
        oaOpNames["endswith"] = LOCID_AF_ENDSWITH;
        oaOpNames["doesnotendwith"] = LOCID_AF_DOESNOTENDWITH;
        oaOpNames["not-null"] = LOCID_AF_CONTAINSDATA;
        oaOpNames["null"] = LOCID_AF_DOESNOTCONTAINDATA;
        oaOpNames["gt"] = LOCID_AF_ISGREATERTHAN;
        oaOpNames["ge"] = LOCID_AF_ISGREATERTHANOREQUALTO;
        oaOpNames["lt"] = LOCID_AF_ISLESSTHAN;
        oaOpNames["le"] = LOCID_AF_ISLESSTHANOREQUALTO;
        oaOpNames["in"] = LOCID_AF_IN;
        oaOpNames["notin"] = LOCID_AF_NOTIN;
        oaOpNames["on"] = LOCID_AF_ON;
        oaOpNames["not-on"] = LOCID_AF_NOTON;
        oaOpNames["after"] = LOCID_AF_AFTER;
        oaOpNames["on-or-after"] = LOCID_AF_ONORAFTER;
        oaOpNames["before"] = LOCID_AF_BEFORE;
        oaOpNames["on-or-before"] = LOCID_AF_ONORBEFORE;
        oaOpNames["yesterday"] = LOCID_AF_YESTERDAY;
        oaOpNames["today"] = LOCID_AF_TODAY;
        oaOpNames["tomorrow"] = LOCID_AF_TOMORROW;
        oaOpNames["next-seven-days"] = LOCID_AF_INTHENEXT7DAYS;
        oaOpNames["last-seven-days"] = LOCID_AF_INTHELAST7DAYS;
        oaOpNames["next-week"] = LOCID_AF_NEXTWEEK;
        oaOpNames["last-week"] = LOCID_AF_LASTWEEK;
        oaOpNames["this-week"] = LOCID_AF_THISWEEK;
        oaOpNames["next-month"] = LOCID_AF_NEXTMONTH;
        oaOpNames["last-month"] = LOCID_AF_LASTMONTH;
        oaOpNames["this-month"] = LOCID_AF_THISMONTH;
        oaOpNames["next-year"] = LOCID_AF_NEXTYEAR;
        oaOpNames["last-year"] = LOCID_AF_LASTYEAR;
        oaOpNames["this-year"] = LOCID_AF_THISYEAR;
        oaOpNames["anytime"] = LOCID_AF_ANYTIME;
        oaOpNames["eq-userid"] = LOCID_AF_EQUALSCURRENTUSER;
        oaOpNames["ne-userid"] = LOCID_AF_DOESNOTEQUALCURRENTUSER;
        oaOpNames["eq-userteams"] = LOCID_AF_EQUALSCURRENTUSERTEAMS;
        oaOpNames["eq-useroruserteams"] = LOCID_AF_EQUALSCURRUSERORTEAMS;
        oaOpNames["eq-useroruserhierarchy"] = LOCID_AF_EQUALSUSERORTREE;
        oaOpNames["eq-useroruserhierarchyandteams"] = LOCID_AF_EQUALSUSERORTREETEAMS;
        oaOpNames["eq-businessid"] = LOCID_AF_EQUALSCURRENTBUSINESS;
        oaOpNames["ne-businessid"] = LOCID_AF_NOTEQCURRENTBUSINESS;
        oaOpNames["last-x-hours"] = LOCID_AF_LASTXHOURS;
        oaOpNames["next-x-hours"] = LOCID_AF_NEXTXHOURS;
        oaOpNames["last-x-days"] = LOCID_AF_LASTXDAYS;
        oaOpNames["next-x-days"] = LOCID_AF_NEXTXDAYS;
        oaOpNames["last-x-weeks"] = LOCID_AF_LASTXWEEKS;
        oaOpNames["next-x-weeks"] = LOCID_AF_NEXTXWEEKS;
        oaOpNames["last-x-months"] = LOCID_AF_LASTXMONTHS;
        oaOpNames["next-x-months"] = LOCID_AF_NEXTXMONTHS;
        oaOpNames["last-x-years"] = LOCID_AF_LASTXYEARS;
        oaOpNames["next-x-years"] = LOCID_AF_NEXTXYEARS;
        oaOpNames["eq-userlanguage"] = LOCID_AF_EQUSERLANGUAGE;
        oaOpNames["olderthan-x-months"] = LOCID_AF_OLDERTHANXMONTHS;
        oaOpNames["olderthan-x-years"] = LOCID_AF_OLDERTHANXYEARS;
        oaOpNames["olderthan-x-weeks"] = LOCID_AF_OLDERTHANXWEEKS;
        oaOpNames["olderthan-x-days"] = LOCID_AF_OLDERTHANXDAYS;
        oaOpNames["olderthan-x-hours"] = LOCID_AF_OLDERTHANXHOURS;
        oaOpNames["olderthan-x-minutes"] = LOCID_AF_OLDERTHANXMINUTES;
        oaOpNames["in-fiscal-year"] = LOCID_AF_INFISCALYEAR;
        oaOpNames["in-fiscal-period"] = LOCID_AF_INFISCALPERIOD;
        oaOpNames["in-fiscal-period-and-year"] = LOCID_AF_INFISCALPERIODANDYEAR;
        oaOpNames["in-or-after-fiscal-period-and-year"] = LOCID_AF_INORAFTERFISCALPERIOD;
        oaOpNames["in-or-before-fiscal-period-and-year"] = LOCID_AF_INORBEFOREFISCALPERIOD;
        oaOpNames["last-fiscal-year"] = LOCID_AF_LASTFISCALYEAR;
        oaOpNames["this-fiscal-year"] = LOCID_AF_THISFISCALYEAR;
        oaOpNames["next-fiscal-year"] = LOCID_AF_NEXTFISCALYEAR;
        oaOpNames["last-x-fiscal-years"] = LOCID_AF_LASTXFISCALYEARS;
        oaOpNames["next-x-fiscal-years"] = LOCID_AF_NEXTXFISCALYEARS;
        oaOpNames["last-fiscal-period"] = LOCID_AF_LASTFISCALPERIOD;
        oaOpNames["this-fiscal-period"] = LOCID_AF_THISFISCALPERIOD;
        oaOpNames["next-fiscal-period"] = LOCID_AF_NEXTFISCALPERIOD;
        oaOpNames["last-x-fiscal-periods"] = LOCID_AF_LASTXFISCALPERIODS;
        oaOpNames["next-x-fiscal-periods"] = LOCID_AF_NEXTXFISCALPERIODS;
        oaOpNames["under"] = LOCID_AF_UNDER;
        oaOpNames["not-under"] = LOCID_AF_NOT_UNDER;
        return oaOpNames
    }

    function _populateOpNamesForFilterControl() {
        var oaOpNames = [];
        oaOpNames["eq"] = LOCID_AF_EQUALS_FILTERCONTROL;
        return oaOpNames
    }

    function _createOpCtrl(aoOpNames, sOpList) {
        for (var aoOpList = sOpList.split(";"),
            oSelCtrl = new Select,
            iLen = aoOpList.length,
            sExp = "",
            i = 0;
            i < iLen;
            i++) {
            aoOpList[i] = Trim(aoOpList[i]);
            switch (aoOpList[i]) {
            case "contains":
                sExp = 'fetchOp="like" fetchVal="%{0}%"';
                break;
            case "beginswith":
                sExp = 'fetchOp="like" fetchVal="{0}%"';
                break;
            case "endswith":
                sExp = 'fetchOp="like" fetchVal="%{0}"';
                break;
            case "doesnotcontain":
                sExp = 'fetchOp="not-like" fetchVal="%{0}%"';
                break;
            case "doesnotbeginwith":
                sExp = 'fetchOp="not-like" fetchVal="{0}%"';
                break;
            case "doesnotendwith":
                sExp = 'fetchOp="not-like" fetchVal="%{0}"';
                break
            }
            oSelCtrl.AddOption(aoOpNames[aoOpList[i]], aoOpList[i], sExp)
        }
        oSelCtrl.Render();
        return oSelCtrl
    }

    function _getRelatedEntity(sRelatedEntity, sFrom, sTo, sEntity) {
        var oNode = _oXml ? XUI.Xml.SelectSingleNode(_oXml, "/related", null) : null;
        if (IsNull(oNode) || XUI.Xml.GetText(oNode.attributes[0]) != sEntity) {
            var sRelatedXml = '<related entity="' +
                CrmEncodeDecode.CrmXmlEncode(sEntity) +
                '">' +
                _getElement("Entity", sEntity) +
                "</related>";
            _oXml = XUI.Xml.LoadXml(sRelatedXml)
        }
        return XUI.Xml.SelectSingleNode(_oXml,
            '/related/option[@entity="' + sRelatedEntity + '" and @from="' + sFrom + '" and @to="' + sTo + '"]',
            null)
    }

    function _getField(sField, sEntity) {
        var nmSpace,
            fString,
            oNode = _oXml ? XUI.Xml.SelectSingleNode(_oXml, "/fields", null) : null;
        if (IsNull(oNode) || XUI.Xml.GetText(oNode.attributes[0]) != sEntity) {
            var sFieldsXml = '<fields entity="' +
                CrmEncodeDecode.CrmXmlEncode(sEntity) +
                '">' +
                _getElement("Field", sEntity) +
                "</fields>";
            _oXml = XUI.Xml.LoadXml(sFieldsXml)
        }
        var sFieldsXml;
        if (typeof _oXml.xml != "undefined")
            sFieldsXml = _oXml.xml;
        else
            sFieldsXml = (new window.XMLSerializer).serializeToString(_oXml);
        if (sFieldsXml.indexOf("http://www.w3.org/1999/xhtml") > -1) {
            nmSpace = { a: xmlns = "http://www.w3.org/1999/xhtml" };
            fString = '/fields/a:option[@value="'
        } else {
            nmSpace = null;
            fString = '/fields/option[@value="'
        }
        return XUI.Xml.SelectSingleNode(_oXml, fString + sField + '" or @nameattr="' + sField + '"]', nmSpace)
    }

    function _getDataType(sField, sEntity) {
        var oNode = _getField(sField, sEntity);
        if (!IsNull(oNode))
            return _getAbstractDataType(oNode);
        return "custom"
    }

    function _getOpDataType(oNode) {
        switch (oNode.getAttribute("datatype")) {
        case "language":
            return "language";
            break;
        case "objecttypecode":
            return "objecttypecode";
            break;
        default:
            return _getAbstractDataType(oNode)
        }
    }

    function _getFieldList(sXml, sEntity) {
        var fnCallback = this.OnPopulateFieldList;
        if (!IsNull(fnCallback) && "function" == typeof fnCallback) {
            oArgs = {};
            oArgs.sEntityName = sEntity;
            oArgs.sCustomFields = "";
            fnCallback(oArgs);
            if (oArgs.sCustomFields.length > 0)
                sXml = sXml.replace("</fields>", oArgs.sCustomFields + "</fields>")
        }
        if (IsNull(_fieldListXsl))
            _fieldListXsl = XUI.Xml
                .LoadXml("<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'><xsl:output method='xml' omit-xml-declaration='yes'/><xsl:template match='/fields'><xsl:apply-templates select='result'><xsl:sort select='.' lang='" + XML_LANGUAGE_NAME + "'/></xsl:apply-templates></xsl:template><xsl:template match='result'><option><xsl:apply-templates select='@*'/><xsl:value-of select='.'/></option></xsl:template><xsl:template match='@*'><xsl:attribute name='{name()}'><xsl:value-of select='.' /></xsl:attribute></xsl:template></xsl:stylesheet>");
        for (var oXmlDoc = XUI.Xml.LoadXml(sXml),
            oLookupIconsNodes = XUI.Xml.SelectNodes(oXmlDoc, "/fields/lookupicons", null),
            i = 0;
            i < oLookupIconsNodes.length;
            i++) {
            oLookupIcons = oLookupIconsNodes[i];
            if (!IsNull(oLookupIcons) && XUI.Xml.GetText(oLookupIcons).length > 0) {
                var sLookupIcons = XUI.Xml.GetText(oLookupIcons) + ":",
                    iStart = 0,
                    iPos,
                    sURL,
                    iObjType;
                while ((iPos = sLookupIcons.indexOf(":", iStart)) != -1) {
                    iObjType = parseInt(sLookupIcons.substring(iStart, iPos), 10);
                    iStart = iPos + 1;
                    iPos = sLookupIcons.indexOf(":", iStart);
                    _asLookupIcons[iObjType] = sLookupIcons.substring(iStart, iPos);
                    iStart = iPos + 1
                }
            }
        }
        if (IsNull(XUI.Xml.GetParserError(oXmlDoc))) {
            var template = new Mscrm.XslTemplate;
            template.stylesheet = _fieldListXsl;
            var processor = template.createProcessor();
            processor.input = oXmlDoc;
            processor.transform();
            return processor.output
        }
        return null
    }

    function _getEntityList(sXml) {
        if (IsNull(_entityListXsl))
            _entityListXsl = XUI.Xml
                .LoadXml("<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'><xsl:output method='xml' omit-xml-declaration='yes'/><xsl:template match='related'><xsl:apply-templates select='result'><xsl:sort select='.' lang='" + XML_LANGUAGE_NAME + "'/></xsl:apply-templates></xsl:template><xsl:template match='result'><option><xsl:apply-templates select='@*'/><xsl:value-of select='.' /></option></xsl:template><xsl:template match='@*'><xsl:attribute name='{name()}'><xsl:value-of select='.' /></xsl:attribute></xsl:template></xsl:stylesheet>");
        var oXmlDoc = XUI.Xml.LoadXml(sXml);
        if (IsNull(XUI.Xml.GetParserError(oXmlDoc))) {
            var template = new Mscrm.XslTemplate;
            template.stylesheet = _entityListXsl;
            var processor = template.createProcessor();
            processor.input = oXmlDoc;
            processor.transform();
            return processor.output
        }
        return null
    }

    function _queryData() {
        var QueryId,
            QueryType,
            Name,
            Description,
            FetchXml,
            LayoutXml,
            EntityName,
            FetchAttributes,
            ReturnType,
            SourceViewType
    }

    function _getQuery(sXml) {
        _oQueryXml = XUI.Xml.LoadXml(sXml);
        var oQryData = new _queryData,
            node = XUI.Xml.SelectSingleNode(_oQueryXml, "//name", null);
        oQryData.Name = IsNull(node) ? "" : XUI.Xml.GetText(node);
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//description", null);
        oQryData.Description = IsNull(node) ? "" : XUI.Xml.GetText(node);
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//layoutxml", null);
        oQryData.LayoutXml = IsNull(node) ? "" : XUI.Xml.GetText(node);
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//fetchxml", null);
        oQryData.FetchXml = IsNull(node) ? "" : XUI.Xml.GetText(node);
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//entityname", null);
        oQryData.EntityName = IsNull(node) ? "" : XUI.Xml.GetText(node);
        oQryData.FetchAttributes = GetFetchAttributes(oQryData.FetchXml);
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//canwrite", null);
        oQryData.CanWrite = IsNull(node) ? false : XUI.Xml.GetText(node) == "True";
        node = XUI.Xml.SelectSingleNode(_oQueryXml, "//returnedtypecode", null);
        oQryData.ReturnType = IsNull(node) ? "" : XUI.Xml.GetText(node);
        return oQryData
    }

    function _getQueryErr(sHResult, oXmlNode) {
        if (!IsNull(sHResult) &&
            parseInt(sHResult, 16) == parseInt(LOCID_AF_INVALIDENTITY_INQUERY, 16) &&
            !IsNull(oXmlNode))
            alert(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXmlNode, "error/description", null)));
        else
            RemoteCommandDefaultErrorHandler(sHResult, oXmlNode)
    }

    function _getAbstractDataType(oField) {
        switch (oField.getAttribute("datatype")) {
        case "nvarchar":
        case "text":
        case "string":
            return "string";
        case "ntext":
        case "memo":
            return "memo";
        case "bit":
        case "boolean":
        case "state":
        case "status":
        case "language":
        case "objecttypecode":
        case "picklist":
            return "picklist";
        case "partylist":
        case "primarykey":
        case "lookup":
        case "customer":
            var re = new RegExp("(?:^|,)\\s*8\\s*(?:,|$)", "ig"),
                re2 = new RegExp("(?:^|,)\\s*10\\s*(?:,|$)", "ig");
            if (re.test(oField.getAttribute("lookuptypes")))
                if (Mscrm.Utilities.parseBoolean(oField.getAttribute("hierarchyenabled")))
                    return "lookupwithuserwithhierarchy";
                else
                    return "lookupwithuser";
            if (re2.test(oField.getAttribute("lookuptypes")))
                return "lookupwithbusinessunit";
            if (Mscrm.Utilities.parseBoolean(oField.getAttribute("hierarchyenabled")))
                return "lookupwithhierarchy";
            return "lookup";
        case "owner":
            return "owner";
        case "decimal":
        case "integer":
        case "int":
        case "float":
        case "money":
        case "number":
            return "number";
        case "datetime":
        case "time":
            return "date";
        case "date":
            return "dateonly";
        default:
            return oField.getAttribute("datatype")
        }
    }

    function _containsElement(sEleType, sKey) {
        return !IsNull(_oaCache[sEleType][sKey]) ? _oaCache[sEleType][sKey] : null
    }

    function _putElement(sEleType, sKey, vEle) {
        _oaCache[sEleType][sKey] = vEle
    }

    function _getElement(sEleType, sKey, vOptParam) {
        var vEle = _containsElement(sEleType, sKey);
        if (!IsNull(vEle))
            return vEle;
        else {
            var oaParameters = [];
            switch (sEleType) {
            case "Entity":
                oaParameters["entityName"] = sKey;
                vEle = _executeRemoteCommand("GetLinkedEntityList", "AdvancedFind", oaParameters, _getEntityList);
                break;
            case "Query":
                vOptParam["entityName"] = sKey;
                vEle = _executeRemoteCommand("GetQueryList", "AdvancedFind", vOptParam, null);
                break;
            case "Field":
                oaParameters["entityName"] = sKey;
                if (vOptParam != null &&
                    vOptParam["ShowOnlyFilterControl"] != null &&
                    vOptParam["ShowOnlyFilterControl"]) {
                    oaParameters["isValidForUpdateRequired"] = true;
                    vEle = _executeRemoteCommand("GetEntityFieldListWithRestriction",
                        "AdvancedFind",
                        oaParameters,
                        _getFieldList,
                        sKey)
                } else
                    vEle = _executeRemoteCommand("GetEntityFieldList",
                        "AdvancedFind",
                        oaParameters,
                        _getFieldList,
                        sKey);
                break;
            case "SystemQuery":
                oaParameters["id"] = sKey;
                vEle = _executeRemoteCommand("GetSystemQuery",
                    "AdvancedFind",
                    oaParameters,
                    _getQuery,
                    null,
                    _getQueryErr);
                if (!IsNull(vEle)) {
                    vEle.QueryId = sKey;
                    vEle.QueryType = SavedQuery
                }
                break;
            case "UserQuery":
                oaParameters["id"] = sKey;
                vEle = _executeRemoteCommand("GetUserQuery",
                    "AdvancedFind",
                    oaParameters,
                    _getQuery,
                    null,
                    _getQueryErr);
                if (!IsNull(vEle)) {
                    vEle.QueryId = sKey;
                    vEle.QueryType = UserQuery
                }
                break;
            case "Operator":
            case "ConditionControlOperator":
                vEle = new Select(false, false);
                vEle.Render();
                break;
            case "DefaultAdvFindView":
                oaParameters["entityName"] = sKey;
                oaParameters["viewIDOnly"] = false;
                vEle = _executeRemoteCommand("GetDefaultAdvancedFindView", "AdvancedFind", oaParameters);
                if (!IsNull(vEle)) {
                    var oQryData = _getQuery(vEle);
                    oQryData.QueryId = GetNodeValue(vEle, "savedqueryid");
                    oQryData.EntityName = sKey;
                    oQryData.QueryType = SavedQuery;
                    oQryData.Name = LOCID_AF_NEWQRYTITLE;
                    vEle = IsNull(oQryData.QueryId) || oQryData.QueryId.length == 0 ? null : oQryData
                }
                break
            }
            if (!IsNull(vEle))
                _oaCache[sEleType][sKey] = vEle;
            return vEle
        }
    }

    function _executeRemoteCommand(sRemoteCommand, sObject, oaParameters, oCallback, vCallbackParam, oErrCallBack) {
        var oRemoteCmd = new RemoteCommand(sObject, sRemoteCommand);
        for (var oParam in oaParameters)
            oRemoteCmd.SetParameter(oParam, oaParameters[oParam]);
        var bErrHandler = !IsNull(oErrCallBack) && typeof oErrCallBack == "function";
        if (bErrHandler)
            oRemoteCmd.ErrorHandler = oErrCallBack;
        var oResult = oRemoteCmd.Execute();
        if (oResult.Success == ERROR_NONE) {
            var oResultXml = oResult.Xml;
            if (!IsNull(oResultXml)) {
                var text = XUI.Xml.GetText(oResultXml);
                if (!IsNull(text) && text.length > 0)
                    return !IsNull(oCallback) && typeof oCallback == "function" ? oCallback(text, vCallbackParam) : text
            }
        }
        return null
    }

    function _clearCache(sColl) {
        if (!IsNull(_oaCache[sColl]))
            _clearColl(_oaCache[sColl]);
        else
            for (var ele in _oaCache)
                _clearColl(ele)
    }

    function _clearColl(_aColl) {
        for (var ele in _aColl)
            delete _aColl[ele]
    }
}