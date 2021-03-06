Type.registerNamespace("CrmSoapServiceProxy");
CrmSoapServiceProxy.CrmSoapService = function(crmContext) {
    CrmSoapServiceProxy.CrmSoapService.initializeBase(this, [crmContext.getClientUrl()])
};
CrmSoapServiceProxy.CrmSoapService.prototype = {
    retrieveAlertWall: function(isMainAlertWall,
        traceLevel,
        retrievePostsRequest,
        objectId,
        entityTypeCode,
        successCallback,
        errorCallback) {
        var $v_0 = "";
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSReliability")) {
            var $v_2 = this.$A_1();
            if ($v_2) $v_0 = '<condition attribute="createdon" operator="ge" value="' + $v_2 + '" />'
        }
        var $v_1 = this.$6_1($v_0, isMainAlertWall, traceLevel, retrievePostsRequest, objectId, entityTypeCode),
            $$t_B = this;
        this.retrieveMultiple($v_1.toString(), CrmSoapServiceProxy.ObjectModel.TraceLog)
            .then(function($p1_0) { successCallback($p1_0) }, errorCallback)
    },
    retrieveAllAlertWall: function(isMainAlertWall,
        traceLevel,
        retrievePostsRequest,
        objectId,
        entityTypeCode,
        successCallback,
        errorCallback) {
        var $v_0 = "",
            $v_1 = this.$6_1($v_0, isMainAlertWall, traceLevel, retrievePostsRequest, objectId, entityTypeCode),
            $$t_A = this;
        this.retrieveMultiple($v_1.toString(), CrmSoapServiceProxy.ObjectModel.TraceLog)
            .then(function($p1_0) { successCallback($p1_0) }, errorCallback)
    },
    $A_1: function() {
        return window.parent.Xrm.Page.getAttribute("lastsuccessfulsynccompletedon")
            ? window.parent.Xrm.Page.getAttribute("lastsuccessfulsynccompletedon").getValue()
            : null
    },
    $6_1: function($p0, $p1, $p2, $p3, $p4, $p5) {
        if ($p2)
            $p0 += '<condition attribute="level" operator="eq" value="' +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode($p2.toString()) +
                '" />';
        var $v_0 = new Sys.StringBuilder, $v_1 = new Sys.StringBuilder, $v_2 = "";
        if ($p1) {
            var $v_4 = window.ALL_OWNER_IDS;
            if ($v_4) {
                $v_0.append('<condition attribute="regardingobjectownerid" operator="in">');
                for (var $$arr_A = $v_4, $$len_B = $$arr_A.length, $$idx_C = 0; $$idx_C < $$len_B; ++$$idx_C) {
                    var $v_5 = $$arr_A[$$idx_C];
                    $v_0.append("<value>" +
                        Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_5) +
                        "</value>")
                }
                $v_0.append("</condition>")
            }
            $v_2 = '<condition attribute="collationlevel" operator="neq" value="0" />'
        } else {
            $v_2 = '<condition attribute="collationlevel" operator="eq" value="0" />';
            $v_1.append('<link-entity name="traceassociation" from="tracelogid" to="tracelogid">');
            $v_1.append('<filter type="and">');
            $v_1.append('<condition attribute="regardingobjecttypecode" operator="eq" value="' +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode($p5.toString()) +
                '" />');
            $v_1.append('<condition attribute="regardingobjectid" operator="eq" value="' +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode($p4) +
                '"/>');
            $v_1.append("</filter>");
            $v_1.append("</link-entity>")
        }
        var $v_3 = new Sys.StringBuilder;
        $v_3.append('<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" count=\'' +
            $p3.get_pageSize() +
            "' ");
        if ($p3.get_pagingCookie()) {
            var $v_6 = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode($p3.get_pagingCookie());
            $v_3.append("paging-cookie='" + $v_6 + "' ")
        }
        $v_3.append("page='" + $p3.get_pageNumber() + "' returntotalrecordcount='true' >");
        $v_3.append('<entity name="tracelog"><attribute name="tracelogid" /><attribute name="regardingobjectid" />');
        $v_3.append('<attribute name="parenttracelogid" /><attribute name="text" /><attribute name="level" />');
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SSSTroubleShooting") &&
            $v_3.append('<attribute name="errordetails" />');
        $v_3
            .append('<attribute name="modifiedon" /><attribute name="createdby" /><attribute name="traceactionxml" /><attribute name="canbedeleted" /><attribute name="tracedetailxml" />');
        $v_3.append('<order attribute="modifiedon" descending="true" />');
        $v_3.append($v_1.toString());
        $v_3.append('<filter type="and">' + $v_2 + $p0 + $v_0.toString() + "</filter></entity></fetch>");
        return $v_3
    }
};
Type.registerNamespace("CrmSoapServiceProxy.ObjectModel");
CrmSoapServiceProxy.ObjectModel.TraceLevel = function() {};
CrmSoapServiceProxy.ObjectModel.TraceLog = function() {
    CrmSoapServiceProxy.ObjectModel.TraceLog.initializeBase(this, ["tracelog"])
};
CrmSoapServiceProxy.ObjectModel.TraceLog.prototype = {
    get_id: function() { return this.attributes["tracelogid"] },
    set_id: function(value) {
        this.attributes["tracelogid"] = value;
        return value
    },
    get_parentId: function() { return this.attributes["parenttracelogid"] },
    set_parentId: function(value) {
        this.attributes["parenttracelogid"] = value;
        return value
    },
    get_text: function() { return this.attributes["text"] },
    set_text: function(value) {
        this.attributes["text"] = value;
        return value
    },
    get_regardingObjectId: function() { return this.attributes["regardingobjectid"] },
    set_regardingObjectId: function(value) {
        this.attributes["regardingobjectid"] = value;
        return value
    },
    get_actionXml: function() { return this.attributes["traceactionxml"] },
    set_actionXml: function(value) {
        this.attributes["traceactionxml"] = value;
        return value
    },
    get_canBeDeleted: function() { return this.attributes["canbedeleted"] },
    set_canBeDeleted: function(value) {
        this.attributes["canbedeleted"] = value;
        return value
    },
    get_errorDetails: function() { return this.attributes["errordetails"] },
    set_errorDetails: function(value) {
        this.attributes["errordetails"] = value;
        return value
    },
    get_organizationId: function() { return this.attributes["organizationid"] },
    get_createdBy: function() { return this.attributes["createdby"] },
    get_modifiedOn: function() { return this.attributes["modifiedon"] },
    get_formattedModifiedOn: function() { return this.formattedValues["modifiedon"] },
    get_level: function() { return this.attributes["level"] },
    get_serverErrorCode: function() { return this.$8_1() },
    get_serverErrorHelpLink: function() { return this.$9_1() },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "tracelogid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "parenttracelogid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "text", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "createdby", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "modifiedon", 3);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "organizationid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "regardingobjectid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "level", 1);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "tracedetailxml", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "traceactionxml", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "canbedeleted", 7)
    },
    $1_1: null,
    $8_1: function() {
        if (this.$1_1) return this.$1_1;
        this.$1_1 = "";
        var $v_0 = this.attributes["tracedetailxml"];
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = XUI.Xml.LoadXml($v_0),
                $v_2 = XUI.Xml.SelectNodes($v_1, '//detail[@key = "servererrorcode"][1]', null);
            if ($v_2.length > 0) this.$1_1 = XUI.Xml.GetText($v_2[0])
        }
        return this.$1_1
    },
    $0_1: null,
    $9_1: function() {
        if (this.$0_1) return this.$0_1;
        this.$0_1 = "";
        var $v_0 = this.attributes["tracedetailxml"];
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = XUI.Xml.LoadXml($v_0),
                $v_2 = XUI.Xml.SelectNodes($v_1, '//detail[@key = "servererrorhelplink"][1]', null);
            if ($v_2.length > 0) {
                if (!isNullOrEmptyString(XUI.Xml
                    .GetText($v_2[0])))
                    this.$0_1 = window.LOCID_ALERT_ERROR_HELPLINK + "&Error=" + XUI.Xml.GetText($v_2[0]);
                if (!isNullOrEmptyString(this.attributes["errordetails"])) {
                    var $v_3 = this.attributes["errordetails"].split(">");
                    if ($v_3.length > 1) {
                        var $v_4 = $v_3[0].replace("ActivityId: ", ""), $v_5 = $v_3[1].replace("Error : ", "");
                        this.$0_1 += "&cid=" + $v_4 + "&st=" + $v_5
                    }
                }
            }
        }
        return this.$0_1
    }
};
CrmSoapServiceProxy.ObjectModel.WallTrace = function() {
    CrmSoapServiceProxy.ObjectModel.WallTrace.initializeBase(this)
};
CrmSoapServiceProxy.ObjectModel.WallTrace.prototype = {
    $4_1: null,
    get_parentId: function() { return this.$4_1 },
    set_parentId: function(value) {
        this.$4_1 = value;
        return value
    },
    levelBase: 0,
    get_level: function() { return this.levelBase },
    set_level: function(value) {
        this.levelBase = value;
        return value
    },
    serverErrorCodeBase: null,
    get_serverErrorCode: function() { return this.serverErrorCodeBase },
    set_serverErrorCode: function(value) {
        this.serverErrorCodeBase = value;
        return value
    },
    serverErrorHelpLinkBase: null,
    get_serverErrorHelpLink: function() { return this.serverErrorHelpLinkBase },
    set_serverErrorHelpLink: function(value) {
        this.serverErrorHelpLinkBase = value;
        return value
    },
    $2_1: null,
    get_actions: function() { return this.$2_1 },
    set_actions: function(value) {
        this.$2_1 = value;
        return value
    },
    $3_1: true,
    get_canBeDeleted: function() { return this.$3_1 },
    set_canBeDeleted: function(value) {
        this.$3_1 = value;
        return value
    }
};
CrmSoapServiceProxy.ObjectModel.WallTraceAction = function() { this.$7_0 = {} };
CrmSoapServiceProxy.ObjectModel.WallTraceAction.prototype = {
    $5_0: 0,
    get_actionType: function() { return this.$5_0 },
    set_actionType: function(value) {
        this.$5_0 = value;
        return value
    },
    get_parameters: function() { return this.$7_0 }
};
CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping = function() {
    CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping.initializeBase(this, ["exchangesyncidmapping"])
};
CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping.prototype = {
    get_id: function() { return this.attributes["exchangesyncidmappingid"] },
    set_id: function(value) {
        this.attributes["exchangesyncidmappingid"] = value;
        return value
    },
    get_userDecision: function() { return this.attributes["userdecision"] },
    set_userDecision: function(value) {
        this.attributes["userdecision"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "exchangesyncidmappingid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "userdecision", 1)
    }
};
CrmSoapServiceProxy.CrmSoapService.registerClass("CrmSoapServiceProxy.CrmSoapService",
    Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase);
CrmSoapServiceProxy.ObjectModel.TraceLevel.registerClass("CrmSoapServiceProxy.ObjectModel.TraceLevel");
CrmSoapServiceProxy.ObjectModel.TraceLog.registerClass("CrmSoapServiceProxy.ObjectModel.TraceLog",
    Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
CrmSoapServiceProxy.ObjectModel.WallTrace.registerClass("CrmSoapServiceProxy.ObjectModel.WallTrace",
    Wall.Service.ObjectModel.Post);
CrmSoapServiceProxy.ObjectModel.WallTraceAction.registerClass("CrmSoapServiceProxy.ObjectModel.WallTraceAction");
CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping
    .registerClass("CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
CrmSoapServiceProxy.ObjectModel.TraceLevel.undefined = 0;
CrmSoapServiceProxy.ObjectModel.TraceLevel.information = 1;
CrmSoapServiceProxy.ObjectModel.TraceLevel.warning = 2;
CrmSoapServiceProxy.ObjectModel.TraceLevel.error = 3;
CrmSoapServiceProxy.ObjectModel.TraceLog.entityLogicalName = "tracelog";
CrmSoapServiceProxy.ObjectModel.ExchangeSyncIdMapping.entityLogicalName = "exchangesyncidmapping"