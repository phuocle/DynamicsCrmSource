Type.registerNamespace("Mscrm");
Mscrm.RemoteCommandJson = function(webService, webMethod) {
    var $v_0 = String.format("/AppWebServices/{0}.asmx", CrmEncodeDecode.CrmUrlEncode(webService));
    this.$a_0 = Mscrm.CrmUri.createForOrganization($v_0, window.ORG_UNIQUE_NAME).toString() +
        "/" +
        CrmEncodeDecode.CrmUrlEncode(webMethod);
    this.$M_0 = {}
};
Mscrm.RemoteCommandJson.prototype = {
    $a_0: null,
    $M_0: null,
    setParameter: function(name, value) { this.$M_0[name] = value },
    execute: function() {
        $P_CRM.support.cors = true;
        var $v_0 = new jQueryAjaxOptions;
        $v_0.cache = false;
        $v_0.type = "POST";
        $v_0.contentType = "application/json; charset=utf-8";
        $v_0.dataType = "json";
        $v_0.url = this.$a_0;
        $v_0.data = JSON.stringify(this.$M_0);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String), $$t_7 = this, $$t_8 = this;
        $P_CRM.ajax($v_0).success(function($p1_0) {
            var $v_2 = $p1_0["d"];
            $v_1.resolve($v_2)
        }).error(function($p1_0, $p1_1, $p1_2) { $v_1.reject($p1_2.toString()) });
        return $v_1.promise()
    }
};
Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities.Sdk = function() {};
Mscrm.InternalUtilities.Sdk.get_$3 = function() {
    if (IsNull(Mscrm.InternalUtilities.Sdk.$X))
        Mscrm.InternalUtilities.Sdk.$X = new Sales.Common.CrmSoapServiceProxy
            .CrmSoapServiceBase(Xrm.Page.context.getClientUrl());
    return Mscrm.InternalUtilities.Sdk.$X
};
Mscrm.InternalUtilities.Sdk.book = function(successCallback, errorCallback, schedulingActivity) {
    Mscrm.InternalUtilities.Sdk.get_$3().book(schedulingActivity).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.associate = function(successCallback,
    errorCallback,
    parentEntityId,
    parentObjectTypeCode,
    targetObjectTypeCode,
    targetEntityIds,
    relationshipName) {
    Mscrm.InternalUtilities.Sdk.get_$3().associate(parentEntityId,
        parentObjectTypeCode,
        targetObjectTypeCode,
        targetEntityIds,
        relationshipName).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.convertToCase = function(successCallback,
    errorCallback,
    targetEntityTitle,
    activityId,
    activityTypeCode,
    customerId,
    customerIdTypeCode,
    ownerId,
    ownerTypeCode,
    subjectId,
    subjectTypeCode) {
    Mscrm.InternalUtilities.Sdk.get_$3().convertActivity("incident",
        targetEntityTitle,
        activityId,
        activityTypeCode,
        customerId,
        customerIdTypeCode,
        ownerId,
        ownerTypeCode,
        subjectId,
        subjectTypeCode,
        null,
        null,
        null,
        0,
        false).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.convertToOpportunity = function(successCallback,
    errorCallback,
    targetEntityTitle,
    activityId,
    activityTypeCode,
    leadId,
    currencyId,
    customerId,
    customerIdTypeCode,
    ownerId,
    ownerTypeCode,
    campaignId,
    campaignTypeCode,
    logResponse) {
    Mscrm.InternalUtilities.Sdk.get_$3().convertActivity("opportunity",
        targetEntityTitle,
        activityId,
        activityTypeCode,
        customerId,
        customerIdTypeCode,
        ownerId,
        ownerTypeCode,
        null,
        0,
        leadId,
        currencyId,
        campaignId,
        campaignTypeCode,
        logResponse).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.disassociate = function(successCallback,
    errorCallback,
    parentEntityId,
    parentObjectTypeCode,
    targetObjectTypeCode,
    targetEntityIds,
    relationshipName) {
    Mscrm.InternalUtilities.Sdk.get_$3().disassociate(parentEntityId,
        parentObjectTypeCode,
        targetObjectTypeCode,
        targetEntityIds,
        relationshipName).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.executeQuickFind = function(successCallback,
    errorCallback,
    searchText,
    entityGroupName,
    entityNames) {
    Mscrm.InternalUtilities.Sdk.get_$3().executeQuickFind(searchText, entityGroupName, entityNames)
        .then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.inviteUser = function(successCallback, errorCallback, userId) {
    Mscrm.InternalUtilities.Sdk.get_$3().inviteUser(userId).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.loseOpportunity = function(successCallback,
    errorCallback,
    opportunityId,
    opportunityDisplayName,
    actualRevenue,
    description,
    date,
    statusCode,
    competitorId) {
    Mscrm.InternalUtilities.Sdk.get_$3().loseOpportunity(opportunityId,
        opportunityDisplayName,
        actualRevenue,
        description,
        date,
        statusCode,
        competitorId).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.qualifyLead = function(successCallback,
    errorCallback,
    leadId,
    createAccount,
    createContact,
    createOpportunity,
    transactionCurrencyId,
    opportunityCustomer,
    sourceCampaignId,
    qualifyStatus,
    suppressDuplicateDetection) {
    Mscrm.InternalUtilities.Sdk.get_$3().qualifyLead(leadId,
        createAccount,
        createContact,
        createOpportunity,
        transactionCurrencyId,
        opportunityCustomer,
        sourceCampaignId,
        qualifyStatus,
        suppressDuplicateDetection).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.reschedule = function(successCallback, errorCallback, schedulingActivity, activityId) {
    Mscrm.InternalUtilities.Sdk.get_$3().reschedule(schedulingActivity, activityId).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.retrieve = function(successCallback,
    errorCallback,
    objectId,
    objectTypeCode,
    columns,
    returnNotifications) {
    Mscrm.InternalUtilities.Sdk.get_$3().retrieve(objectId, objectTypeCode, columns, returnNotifications)
        .then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.retrieveAttribute = function(successCallback,
    errorCallback,
    retrieveAsIfPublished,
    entityLogicalName,
    attributeLogicalName) {
    Mscrm.InternalUtilities.Sdk.get_$3().retrieveAttribute(retrieveAsIfPublished,
        entityLogicalName,
        attributeLogicalName).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk.winOpportunity = function(successCallback,
    errorCallback,
    opportunityId,
    opportunityDisplayName,
    actualRevenue,
    description,
    date,
    statusCode) {
    Mscrm.InternalUtilities.Sdk.get_$3().winOpportunity(opportunityId,
        opportunityDisplayName,
        actualRevenue,
        description,
        date,
        statusCode).then(successCallback, errorCallback)
};
Mscrm.InternalUtilities.Sdk
    .getValidStatusTransition = function(successCallback, errorCallback, incidentId, statusCode) {
        Mscrm.InternalUtilities.Sdk.get_$3().getValidStatusTransition(incidentId, statusCode)
            .then(successCallback, errorCallback)
    };
Mscrm.InternalUtilities.Sdk.closeIncident = function(successCallback,
    errorCallback,
    timeSpent,
    description,
    subject,
    incidentId,
    actualEnd,
    statusCode) {
    Mscrm.InternalUtilities.Sdk.get_$3().closeIncident(timeSpent,
        description,
        subject,
        incidentId,
        actualEnd,
        statusCode).then(successCallback, errorCallback)
};
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy");
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase = function(serverUrl) {
    this.webEndPointUrl = serverUrl + "/XRMServices/2011/Organization.svc/web";
    this.serverEndPointUrl = serverUrl
};
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase.prototype = {
    webEndPointUrl: null,
    serverEndPointUrl: null,
    get_isAsync: function() { return Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase.$g },
    set_isAsync: function(value) {
        Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase.$g = value;
        return value
    },
    get_webEndPointUrl: function() { return this.webEndPointUrl },
    get_serverEndPointUrl: function() { return this.serverEndPointUrl },
    $u_0: function($p0) {
        var $v_0 = Mscrm.CrmBrowser.get_currentBrowser();
        if (!$v_0.get_isMobileSafari()) return;
        var $v_1 = {};
        $v_1["cache-control"] = "no-cache";
        $p0.headers = $v_1
    },
    executeCrmRequest: function(T, requestName, parameters, requestNamespace) {
        var $v_0 = this.buildSoapEnvelope(requestName, parameters, requestNamespace),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(T,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $$t_9 = this,
            $$t_A = this;
        this.executeRequest($v_0,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    var $v_2 = Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse
                        .createResponse($p1_0, requestName);
                    $v_1.resolve($v_2)
                },
                function($p1_0) { $v_1.reject($p1_0) });
        return $v_1.promise()
    },
    executeRequest: function(requestBody, soapAction) {
        $P_CRM.support.cors = true;
        var $v_0 = new jQueryAjaxOptions;
        $v_0.data = requestBody;
        $v_0.type = "POST";
        $v_0.contentType = "text/xml; charset=utf-8";
        $v_0.dataType = "xml";
        $v_0.url = this.webEndPointUrl;
        $v_0.timeout = 1e4;
        $v_0.async = this.get_isAsync();
        this.$u_0($v_0);
        if (($P_CRM.browser.msie || !Mscrm.CrmBrowser.get_currentBrowser().get_hasXPathEvaluator()) &&
            Mscrm.CrmBrowser.get_currentBrowser().get_documentMode() >= 10) {
            var $v_3 = {};
            $v_3["responseType"] = "msxml-document";
            $v_0.xhrFields = $v_3
        }
        var $$t_D = this;
        $v_0.beforeSend = function($p1_0) {
            $p1_0.setRequestHeader("SOAPAction", soapAction);
            Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders($p1_0)
        };
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $v_2 = new Mscrm.MetricsStopwatch("CrmSoapServiceBase.ExecuteRequest");
        $v_2.properties = { IsAsync: this.get_isAsync() };
        $v_2.start();
        var $$t_E = this, $$t_F = this;
        $P_CRM.ajax($v_0).success(function($p1_0, $p1_1, $p1_2) {
            $$t_E.$p_0($v_2, $p1_2);
            $v_1.resolve(Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.create($p1_0))
        }).error(function($p1_0, $p1_1, $p1_2) {
            $$t_F.$p_0($v_2, $p1_0);
            $p1_0.readyState &&
                !_String.isNullOrEmpty($p1_2) &&
                $v_1.reject(new Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse($p1_0, $p1_1, $p1_2))
        });
        return $v_1.promise()
    },
    $p_0: function($p0, $p1) {
        if (!$p0) return;
        if ($p1) {
            var $v_0 = $p1.getResponseHeader("REQ_ID");
            if (!isNullOrEmptyString($v_0)) {
                if (!$p0.properties) $p0.properties = {};
                $p0.properties["ReqId"] = $v_0
            }
        }
        $p0.stop()
    },
    retrieveEntityMetadata: function(entityName, retrieveAsIfPublished) {
        var $v_0 =
                '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><request i:type="a:RetrieveEntityRequest" xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts"><a:Parameters xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic"><a:KeyValuePairOfstringanyType><b:key>EntityFilters</b:key><b:value i:type="c:EntityFilters" xmlns:c="http://schemas.microsoft.com/xrm/2011/Metadata">Entity</b:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><b:key>MetadataId</b:key><b:value i:type="ser:guid" xmlns:ser="http://schemas.microsoft.com/2003/10/Serialization/">00000000-0000-0000-0000-000000000000</b:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><b:key>RetrieveAsIfPublished</b:key><b:value i:type="c:boolean" xmlns:c="http://www.w3.org/2001/XMLSchema">' + retrieveAsIfPublished + '</b:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><b:key>LogicalName</b:key><b:value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityName) + '</b:value></a:KeyValuePairOfstringanyType></a:Parameters><a:RequestId i:nil="true" /><a:RequestName>RetrieveEntity</a:RequestName></request></Execute></s:Body></s:Envelope>',
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.ObjectModel
                .IEntityMetadata,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $$t_6 = this,
            $$t_7 = this;
        this.executeRequest($v_0,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    $v_1.resolve(Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata
                        .$V((new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse($p1_0)).$R_1))
                },
                function($p1_0) { $v_1.reject($p1_0) });
        return $v_1.promise()
    },
    retrieveFilteredForms: function(userId, entityName, formType) {
        var $v_0 =
                '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><request i:type="b:RetrieveFilteredFormsRequest" xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts" xmlns:b="http://schemas.microsoft.com/crm/2011/Contracts"><a:Parameters xmlns:c="http://schemas.datacontract.org/2004/07/System.Collections.Generic"><a:KeyValuePairOfstringanyType><c:key>EntityLogicalName</c:key><c:value i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityName) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>FormType</c:key><c:value i:type="a:OptionSetValue"><a:Value>' + formType + '</a:Value></c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>SystemUserId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(userId) + '</c:value></a:KeyValuePairOfstringanyType></a:Parameters><a:RequestId i:nil="true" /><a:RequestName>RetrieveFilteredForms</a:RequestName></request></Execute></s:Body></s:Envelope>',
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.Messages
                .RetrieveFilteredFormsResponse,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $$t_7 = this,
            $$t_8 = this;
        this.executeRequest($v_0,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    $v_1.resolve(new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse($p1_0))
                },
                function($p1_0) { $v_1.reject($p1_0) });
        return $v_1.promise()
    },
    retrieveFilteredProcesses: function(entityName) {
        var $v_0 =
                '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><request i:type="b:RetrieveFilteredProcessesRequest" xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts" xmlns:b="http://schemas.microsoft.com/crm/2011/Contracts"><a:Parameters xmlns:c="http://schemas.datacontract.org/2004/07/System.Collections.Generic"><a:KeyValuePairOfstringanyType><c:key>EntityLogicalName</c:key><c:value i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityName) + '</c:value></a:KeyValuePairOfstringanyType></a:Parameters><a:RequestId i:nil="true" /><a:RequestName>RetrieveFilteredProcesses</a:RequestName></request></Execute></s:Body></s:Envelope>',
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.Messages
                .RetrieveMultipleResponse,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $$t_5 = this,
            $$t_6 = this;
        this.executeRequest($v_0,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    $v_1.resolve(new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse($p1_0))
                },
                function($p1_0) { $v_1.reject($p1_0) });
        return $v_1.promise()
    },
    navigateToNextEntity: function(currentEntityId,
        currentEntityLogicalName,
        nextEntityId,
        nextEntityLogicalName,
        processId,
        processInstanceId,
        newActiveStageId,
        traversedPath) {
        var $v_0 =
                '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><request xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts"><a:Parameters xmlns:c="http://schemas.datacontract.org/2004/07/System.Collections.Generic"><a:KeyValuePairOfstringanyType><c:key>CurrentEntityId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(currentEntityId) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>CurrentEntityLogicalName</c:key><c:value i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(currentEntityLogicalName) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>NextEntityId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(nextEntityId) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>NextEntityLogicalName</c:key><c:value i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(nextEntityLogicalName) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>NewActiveStageId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(newActiveStageId) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>NewTraversedPath</c:key><c:value i:type="d:string" xmlns:d="http://www.w3.org/2001/XMLSchema">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(traversedPath) + '</c:value></a:KeyValuePairOfstringanyType><a:KeyValuePairOfstringanyType><c:key>ProcessId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(processId) + "</c:value></a:KeyValuePairOfstringanyType>" + (processInstanceId ? '<a:KeyValuePairOfstringanyType><c:key>ProcessInstanceId</c:key><c:value i:type="d:guid" xmlns:d="http://schemas.microsoft.com/2003/10/Serialization/">' + Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(processInstanceId) + "</c:value></a:KeyValuePairOfstringanyType>" : "") + '</a:Parameters><a:RequestId i:nil="true" /><a:RequestName>NavigateToNextEntity</a:RequestName></request></Execute></s:Body></s:Envelope>',
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.Messages
                .OrganizationResponse,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $$t_C = this,
            $$t_D = this;
        this.executeRequest($v_0,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    $v_1.resolve(new Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse($p1_0))
                },
                function($p1_0) { $v_1.reject($p1_0) });
        return $v_1.promise()
    },
    buildSoapEnvelope: function(requestName, parameters, requestNamespace) {
        var $v_0 = true, $v_1 = null;
        if (_String.isNullOrEmpty(requestNamespace)) {
            $v_0 = false;
            $v_1 = "a"
        } else $v_1 = "crm";
        var $v_2 = new Sys.StringBuilder;
        $v_2.append('<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">');
        $v_2.append("<s:Body>");
        $v_2
            .append('<Execute xmlns="http://schemas.microsoft.com/xrm/2011/Contracts/Services" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:c="http://www.w3.org/2001/XMLSchema">');
        if ($v_0) {
            $v_2.append('<request i:type="');
            $v_2.append($v_1);
            $v_2.append(":");
            $v_2.append(CrmEncodeDecode.CrmXmlAttributeEncode(requestName));
            $v_2.append('Request" xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts"');
            $v_2.append(" xmlns:");
            $v_2.append($v_1);
            $v_2.append('="');
            $v_2.append(CrmEncodeDecode.CrmXmlAttributeEncode(requestNamespace));
            $v_2.append('"')
        } else $v_2.append('<request xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts"');
        $v_2.append(">");
        $v_2.append('<a:Parameters xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic">');
        for (var $$arr_6 = parameters, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
            var $v_3 = $$arr_6[$$idx_8];
            $v_2.append("<a:KeyValuePairOfstringanyType>");
            $v_2.append($v_3.get_soapXml());
            $v_2.append("</a:KeyValuePairOfstringanyType>")
        }
        $v_2.append("</a:Parameters>");
        $v_2.append('<a:RequestId i:nil="true"/>');
        $v_2.append("<a:RequestName>" + CrmEncodeDecode.CrmXmlEncode(requestName) + "</a:RequestName>");
        $v_2.append("</request>");
        $v_2.append("</Execute>");
        $v_2.append("</s:Body>");
        $v_2.append("</s:Envelope>");
        return $v_2.toString()
    },
    assign: function(targetEntityId, targetEntityName, assigneeEntityId, assigneeEntityName) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_0.id = targetEntityId;
        $v_0.logicalName = targetEntityName;
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_1.id = assigneeEntityId;
        $v_1.logicalName = assigneeEntityName;
        var $v_2 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("Target", $v_0),
            $v_3 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("Assignee", $v_1),
            $v_4 = [$v_2, $v_3];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "Assign",
            $v_4,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    associate: function(parentEntityId, parentObjectTypeCode, targetObjectTypeCode, targetEntityIds, relationshipName) {
        return this.$l_0("Associate",
            parentEntityId,
            parentObjectTypeCode,
            targetObjectTypeCode,
            targetEntityIds,
            relationshipName)
    },
    disassociate: function(parentEntityId,
        parentObjectTypeCode,
        targetObjectTypeCode,
        targetEntityIds,
        relationshipName) {
        return this.$l_0("Disassociate",
            parentEntityId,
            parentObjectTypeCode,
            targetObjectTypeCode,
            targetEntityIds,
            relationshipName)
    },
    $l_0: function($p0, $p1, $p2, $p3, $p4, $p5) {
        for (var $v_0 = Xrm.Internal.getEntityName($p2),
            $v_1 = Xrm.Internal.getEntityName($p3),
            $v_2 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection,
            $v_3 = 0,
            $$arr_A = $p4,
            $$len_B = $$arr_A.length,
            $$idx_C = 0;
            $$idx_C < $$len_B;
            ++$$idx_C) {
            var $v_9 = $$arr_A[$$idx_C];
            $v_2.set_item($v_3++,
                Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.createEntityReference($v_9, $v_1))
        }
        var $v_4 = -1;
        if ($v_0 === $v_1) $v_4 = 0;
        var $v_5 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter
                .createInstance("Target",
                    Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.createEntityReference($p1, $v_0)),
            $v_6 = Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter
                .createInstance("Relationship", $p5, $v_4),
            $v_7 = Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter
                .createInstance("RelatedEntities", $v_2),
            $v_8 = [$v_5, $v_6, $v_7];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            $p0,
            $v_8,
            "http://schemas.microsoft.com/xrm/2011/Contracts")
    },
    closeIncident: function(timeSpent, description, subject, incidentId, actualEnd, statusCode) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity("incidentresolution");
        $v_0.set_id(Mscrm.Utilities.createGuid().replace("{", "").replace("}", ""));
        $v_0.setAttribute("timespent", timeSpent, 1);
        $v_0.setAttribute("opportunityid",
            Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.createEntityReference(incidentId, "incident"),
            4);
        $v_0.setAttribute("description", description, 0);
        $v_0.setAttribute("subject", subject, 0);
        $v_0.setAttribute("actualend", actualEnd, 3);
        var $v_1 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("IncidentResolution", $v_0),
            $v_2 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("Status", statusCode),
            $v_3 = [$v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "CloseIncident",
            $v_3,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    $I_0: function($p0) {
        if (isNullOrEmptyString($p0.id) ||
            isNullOrEmptyString($p0.id) ||
            isNullOrEmptyString($p0.logicalName) ||
            !Xrm.Internal.getEntityCode($p0.logicalName)) return false;
        return true
    },
    convertActivity: function(targetEntityName,
        targetEntitySubject,
        activityId,
        activityTypeCode,
        customerId,
        customerTypeCode,
        ownerId,
        ownerTypeCode,
        subjectId,
        subjectTypeCode,
        leadId,
        currencyId,
        campaignId,
        campaignTypeCode,
        logResponse) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity(targetEntityName);
        if (!isNullOrEmptyString(targetEntitySubject)) {
            var $v_6 = "title";
            if (targetEntityName === "opportunity") $v_6 = "name";
            $v_0.attributes[$v_6] = targetEntitySubject;
            $v_0.attributeTypes[$v_6] = "c:string";
            $v_0.attributeTypeNamespaces[$v_6] = "http://www.w3.org/2001/XMLSchema"
        }
        if (currencyId) {
            var $v_7 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(currencyId, "transactioncurrency");
            if (this.$I_0($v_7)) {
                $v_0.attributes["transactioncurrencyid"] = $v_7;
                $v_0.attributeTypes["transactioncurrencyid"] = "a:EntityReference"
            }
        }
        if (campaignId && Xrm.Internal.getEntityCode("campaign") === campaignTypeCode) {
            var $v_8 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(campaignId, Xrm.Internal.getEntityName(campaignTypeCode));
            if (this.$I_0($v_8)) {
                $v_0.attributes["campaignid"] = $v_8;
                $v_0.attributeTypes["campaignid"] = "a:EntityReference"
            }
        }
        if (leadId) {
            var $v_9 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(leadId, "lead");
            if (this.$I_0($v_9)) {
                $v_0.attributes["originatingleadid"] = $v_9;
                $v_0.attributeTypes["originatingleadid"] = "a:EntityReference"
            }
        }
        if (customerId) {
            var $v_A = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(customerId, Xrm.Internal.getEntityName(customerTypeCode));
            if (this.$I_0($v_A)) {
                $v_0.attributes["customerid"] = $v_A;
                $v_0.attributeTypes["customerid"] = "a:EntityReference"
            }
        }
        if (ownerId) {
            var $v_B = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(ownerId, Xrm.Internal.getEntityName(ownerTypeCode));
            if (this.$I_0($v_B)) {
                $v_0.attributes["ownerid"] = $v_B;
                $v_0.attributeTypes["ownerid"] = "a:EntityReference"
            }
        }
        if (subjectId) {
            var $v_C = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(subjectId, Xrm.Internal.getEntityName(subjectTypeCode));
            if (this.$I_0($v_C)) {
                $v_0.attributes["subjectid"] = $v_C;
                $v_0.attributeTypes["subjectid"] = "a:EntityReference"
            }
        }
        var $v_1 = Sales.Common.CrmSoapServiceProxy.GuidParameter.createInstance("ActivityId", activityId),
            $v_2 = Sales.Common.CrmSoapServiceProxy.StringParameter
                .createInstance("ActivityEntityName", Xrm.Internal.getEntityName(activityTypeCode)),
            $v_3 = Sales.Common.CrmSoapServiceProxy.StringParameter
                .createInstance("TargetEntityName", targetEntityName),
            $v_4 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("TargetEntity", $v_0),
            $v_5 = [$v_1, $v_2, $v_3, $v_4];
        if (logResponse) {
            var $v_D = Sales.Common.CrmSoapServiceProxy.BooleanParameter.createInstance("CreateCampaignResponse", true);
            $v_5 = $v_5.concat($v_D)
        }
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse,
            "ConvertActivity",
            $v_5,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    create: function(entity, suppressDuplicateDetection) {
        if (IsNull(suppressDuplicateDetection)) suppressDuplicateDetection = true;
        var $v_0 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("Target", entity),
            $v_1 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("SuppressDuplicateDetection", suppressDuplicateDetection),
            $v_2 = [$v_0, $v_1];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse, "Create", $v_2)
    },
    deleteEntity: function(entityId, entityName) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_0.id = entityId;
        $v_0.logicalName = entityName;
        var $v_1 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("Target", $v_0),
            $v_2 = [$v_1];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse, "Delete", $v_2)
    },
    executeQuickFind: function(searchText, entityGroupName, entityNames) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.StringParameter.createInstance("searchText", searchText),
            $v_1 = Sales.Common.CrmSoapServiceProxy.StringParameter.createInstance("entityGroupName", entityGroupName),
            $v_2 = Sales.Common.CrmSoapServiceProxy.ColumnSetParameter.createInstance("ColumnSet", entityNames),
            $v_3 = [$v_0, $v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "ExecuteQuickFind",
            $v_3,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    getValidStatusTransition: function(incidentId, statusCode) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.StringParameter.createInstance("incidentid", incidentId),
            $v_1 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("tostatecode", statusCode),
            $v_2 = [$v_0, $v_1];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "GetValidStatusTransition",
            $v_2,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    inviteUser: function(userId) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.GuidParameter.createInstance("UserId", userId), $v_1 = [$v_0];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "InviteUser",
            $v_1,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    loseOpportunity: function(opportunityId,
        opportunityDisplayName,
        actualRevenue,
        description,
        date,
        statusCode,
        competitorId) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity("opportunityclose");
        $v_0.set_id(Mscrm.Utilities.createGuid().replace("{", "").replace("}", ""));
        $v_0.setAttribute("actualrevenue", actualRevenue, 10);
        $v_0.setAttribute("activityid", $v_0.get_id(), 2);
        $v_0.setAttribute("opportunityid",
            Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
            .createEntityReference(opportunityId, "opportunity"),
            4);
        $v_0.setAttribute("description", description, 0);
        $v_0.setAttribute("actualend", date, 3);
        $v_0.setAttribute("subject", opportunityDisplayName, 0);
        !isNullOrEmptyString(competitorId) &&
            $v_0.setAttribute("competitorid",
                Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(competitorId, "competitor"),
                4);
        var $v_1 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("OpportunityClose", $v_0),
            $v_2 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("Status", statusCode),
            $v_3 = [$v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "LoseOpportunity",
            $v_3,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    qualifyLead: function(leadId,
        createAccount,
        createContact,
        createOpportunity,
        transactionCurrencyId,
        opportunityCustomer,
        sourceCampaignId,
        qualifyStatus,
        suppressDuplicateDetection) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_0.id = leadId;
        $v_0.logicalName = "lead";
        var $v_1 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_1.id = transactionCurrencyId;
        $v_1.logicalName = "transactioncurrency";
        var $v_2 = null;
        if (!isNullOrEmptyString(sourceCampaignId)) {
            $v_2 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
            $v_2.id = sourceCampaignId;
            $v_2.logicalName = "campaign"
        }
        var $v_3 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("LeadId", $v_0),
            $v_4 = Sales.Common.CrmSoapServiceProxy.BooleanParameter.createInstance("CreateAccount", createAccount),
            $v_5 = Sales.Common.CrmSoapServiceProxy.BooleanParameter.createInstance("CreateContact", createContact),
            $v_6 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("CreateOpportunity", createOpportunity),
            $v_7 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter
                .createInstance("OpportunityCurrencyId", $v_1),
            $v_8 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter
                .createInstance("OpportunityCustomerId", opportunityCustomer),
            $v_9 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("SourceCampaignId", $v_2),
            $v_A = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("Status", qualifyStatus),
            $v_B = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("SuppressDuplicateDetection", suppressDuplicateDetection),
            $v_C = [$v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A, $v_B];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse,
            "QualifyLead",
            $v_C,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    retrieve: function(objectId, objectTypeCode, columns, returnNotifications) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.ColumnSetParameter.createInstance("ColumnSet", columns),
            $v_1 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("ReturnNotifications", returnNotifications),
            $v_2 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .createEntityReference(objectId, Xrm.Internal.getEntityName(objectTypeCode)),
            $v_3 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("Target", $v_2),
            $v_4 = [$v_3, $v_1, $v_0];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse,
            "Retrieve",
            $v_4,
            "http://schemas.microsoft.com/xrm/2011/Contracts")
    },
    retrieveAttribute: function(retrieveAsIfPublished, entityLogicalName, attributeLogicalName) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("RetrieveAsIfPublished", retrieveAsIfPublished),
            $v_1 = Sales.Common.CrmSoapServiceProxy.StringParameter
                .createInstance("EntityLogicalName", entityLogicalName),
            $v_2 = Sales.Common.CrmSoapServiceProxy.StringParameter.createInstance("LogicalName", attributeLogicalName),
            $v_3 = Sales.Common.CrmSoapServiceProxy.GuidParameter
                .createInstance("MetadataId", "00000000-0000-0000-0000-000000000000"),
            $v_4 = [$v_0, $v_1, $v_2, $v_3];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse,
            "RetrieveAttribute",
            $v_4,
            "http://schemas.microsoft.com/xrm/2011/Contracts")
    },
    retrieveMultiple: function(fetchXml, types) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter.createInstance("Query", fetchXml),
            $v_1 = [$v_0];
        if (IsNull(types))
            return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse,
                "RetrieveMultiple",
                $v_1);
        if (Object.getType(types) !== Array) types = [types];
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Sales.Common.CrmSoapServiceProxy.Messages
                .RetrieveMultipleResponse,
                Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse),
            $v_3 = this.buildSoapEnvelope("RetrieveMultiple", $v_1),
            $$t_8 = this,
            $$t_9 = this;
        this.executeRequest($v_3,
                "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute")
            .then(function($p1_0) {
                    $v_2.resolve(new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse($p1_0, types))
                },
                function($p1_0) { $v_2.reject($p1_0) });
        return $v_2.promise()
    },
    book: function(entity) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("Target", entity),
            $v_1 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("MaintainLegacyAppServerBehavior", true),
            $v_2 = Sales.Common.CrmSoapServiceProxy.BooleanParameter.createInstance("ReturnNotifications", true),
            $v_3 = [$v_0, $v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse, "Book", $v_3)
    },
    reschedule: function(entity, activityId) {
        entity.set_id(activityId);
        var $v_0 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("Target", entity),
            $v_1 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("MaintainLegacyAppServerBehavior", true),
            $v_2 = Sales.Common.CrmSoapServiceProxy.BooleanParameter.createInstance("ReturnNotifications", true),
            $v_3 = [$v_0, $v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse, "Reschedule", $v_3)
    },
    setState: function(entityId, entityName, state, status) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
        $v_0.id = entityId.replace("{", "").replace("}", "");
        $v_0.logicalName = entityName;
        var $v_1 = Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.createInstance("EntityMoniker", $v_0),
            $v_2 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("Status", status),
            $v_3 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("State", state),
            $v_4 = Sales.Common.CrmSoapServiceProxy.BooleanParameter
                .createInstance("MaintainLegacyAppServerBehavior", true),
            $v_5 = [$v_1, $v_2, $v_3, $v_4];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "SetState",
            $v_5,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    },
    update: function(entity) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("Target", entity), $v_1 = [$v_0];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse, "Update", $v_1)
    },
    winOpportunity: function(opportunityId, opportunityDisplayName, actualRevenue, description, date, statusCode) {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity("opportunityclose");
        $v_0.set_id(Mscrm.Utilities.createGuid().replace("{", "").replace("}", ""));
        $v_0.setAttribute("actualrevenue", actualRevenue, 10);
        $v_0.setAttribute("activityid", $v_0.get_id(), 2);
        $v_0.setAttribute("opportunityid",
            Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
            .createEntityReference(opportunityId, "opportunity"),
            4);
        $v_0.setAttribute("description", description, 0);
        $v_0.setAttribute("actualend", date, 3);
        $v_0.setAttribute("subject", opportunityDisplayName, 0);
        var $v_1 = Sales.Common.CrmSoapServiceProxy.EntityParameter.createInstance("OpportunityClose", $v_0),
            $v_2 = Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.createInstance("Status", statusCode),
            $v_3 = [$v_1, $v_2];
        return this.executeCrmRequest(Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse,
            "WinOpportunity",
            $v_3,
            "http://schemas.microsoft.com/crm/2011/Contracts")
    }
};
Sales.Common.CrmSoapServiceProxy.AttributeType = function() {};
Sales.Common.CrmSoapServiceProxy.MetadataHelper = function() {};
Sales.Common.CrmSoapServiceProxy.MetadataHelper.parseAttributeType = function(attributeTypeName) {
    switch (attributeTypeName) {
    case "c:string":
        return 0;
    case "c:guid":
        return 2;
    case "a:EntityReference":
        return 4;
    case "c:dateTime":
        return 3;
    case "c:int":
        return 1;
    case "c:boolean":
        return 7;
    case "c:decimal":
        return 8;
    case "c:double":
        return 9;
    case "a:OptionSetValue":
        return 6;
    case "a:EntityCollection":
        return 5;
    case "a:Money":
        return 10;
    default:
        throw Error.create(String.format("attributeType '{0}' is not supported", attributeTypeName))
    }
};
Sales.Common.CrmSoapServiceProxy.MetadataHelper
    .addEntityMetadataDefinition = function(entity, attributeName, attributeType) {
        if (IsNull(entity)) throw Error.create("entity is undefined");
        if (IsNull(attributeName)) throw Error.create("attributeName is undefined");
        switch (attributeType) {
        case 0:
            entity.attributeTypes[attributeName] = "c:string";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 1:
            entity.attributeTypes[attributeName] = "c:int";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 8:
            entity.attributeTypes[attributeName] = "c:decimal";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 9:
            entity.attributeTypes[attributeName] = "c:double";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 2:
            entity.attributeTypes[attributeName] = "c:guid";
            entity.attributeTypeNamespaces[attributeName] = "http://schemas.microsoft.com/2003/10/Serialization/";
            break;
        case 4:
            entity.attributeTypes[attributeName] = "a:EntityReference";
            break;
        case 5:
            entity.attributeTypes[attributeName] = "a:EntityCollection";
            break;
        case 3:
            entity.attributeTypes[attributeName] = "c:dateTime";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 7:
            entity.attributeTypes[attributeName] = "c:boolean";
            entity.attributeTypeNamespaces[attributeName] = "http://www.w3.org/2001/XMLSchema";
            break;
        case 6:
            entity.attributeTypes[attributeName] = "a:OptionSetValue";
            break;
        case 10:
            entity.attributeTypes[attributeName] = "a:Money";
            break;
        default:
            throw Error.create(String.format("attributeType '{0}' is not supported", attributeType))
        }
    };
Sales.Common.CrmSoapServiceProxy.BooleanParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.BooleanParameter.initializeBase(this, [$p0]);
    this.$4_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.BooleanParameter
    .createInstance = function(name, value) {
        return new Sales.Common.CrmSoapServiceProxy.BooleanParameter(name, value)
    };
Sales.Common.CrmSoapServiceProxy.BooleanParameter
    .prototype = {
        $4_1: false,
        get_valueXml: function() {
            return '<b:value i:type="c:boolean" xmlns:c="http://www.w3.org/2001/XMLSchema">' +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$4_1.toString()) +
                "</b:value>"
        }
    };
Sales.Common.CrmSoapServiceProxy.ColumnSetParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.ColumnSetParameter.initializeBase(this, [$p0]);
    this.$Z_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.ColumnSetParameter
    .createInstance = function(name, columns) {
        return new Sales.Common.CrmSoapServiceProxy.ColumnSetParameter(name, columns)
    };
Sales.Common.CrmSoapServiceProxy.ColumnSetParameter.prototype = {
    $Z_1: null,
    get_valueXml: function() {
        for (var $v_0 =
                     '<b:value i:type="a:ColumnSet"><a:AllColumns>false</a:AllColumns><a:Columns xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/Arrays">',
            $$arr_1 = this.$Z_1,
            $$len_2 = $$arr_1.length,
            $$idx_3 = 0;
            $$idx_3 < $$len_2;
            ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            $v_0 += "<c:string>" + $v_1 + "</c:string>"
        }
        $v_0 += "</a:Columns>";
        $v_0 += "</b:value>";
        return $v_0
    }
};
Sales.Common.CrmSoapServiceProxy.EntityParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.EntityParameter.initializeBase(this, [$p0]);
    this.$D_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.EntityParameter
    .createInstance = function(name, entity) {
        return new Sales.Common.CrmSoapServiceProxy.EntityParameter(name, entity)
    };
Sales.Common.CrmSoapServiceProxy.EntityParameter
    .prototype = {
        $D_1: null,
        get_valueXml: function() {
            return '<b:value i:type="a:Entity">' +
                Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.attributesToXml(this.$D_1) +
                '<a:EntityState i:nil="true" /><a:FormattedValues />' +
                (_String.isNullOrEmpty(this.$D_1.get_id())
                    ? ""
                    : "<a:Id>" +
                    Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$D_1.get_id()) +
                    "</a:Id>") +
                "<a:LogicalName>" +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$D_1.logicalName) +
                "</a:LogicalName>" +
                Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.$q(this.$D_1.relatedEntities) +
                "</b:value>"
        }
    };
Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.initializeBase(this, [$p0]);
    this.$E_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter
    .createInstance = function(name, entityMoniker) {
        return new Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter(name, entityMoniker)
    };
Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter.prototype = {
    $E_1: null,
    get_valueXml: function() {
        if (!this.$E_1) return '<b:value i:nil="true" />';
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<b:value i:type='a:EntityReference'>");
        $v_0.append("<a:Id>");
        $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$E_1.id));
        $v_0.append("</a:Id>");
        $v_0.append("<a:LogicalName>");
        $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$E_1.logicalName));
        $v_0.append("</a:LogicalName>");
        if (!_String.isNullOrEmpty(this.$E_1.name)) {
            $v_0.append("<a:Name>");
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$E_1.name));
            $v_0.append("</a:Name>")
        } else $v_0.append('<a:Name i:nil="true"/>');
        $v_0.append("</b:value>");
        return $v_0.toString()
    }
};
Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter.initializeBase(this, [$p0]);
    this.$G_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter
    .createInstance = function(name, entityCollection) {
        return new Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter(name, entityCollection)
    };
Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter.prototype = {
    $G_1: null,
    get_valueXml: function() {
        if (!this.$G_1 || !this.$G_1.get_length()) return "";
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<b:value i:type='a:EntityReferenceCollection'>");
        for (var $v_1 = 0; $v_1 < this.$G_1.get_length(); $v_1++) {
            var $v_2 = this.$G_1.get_item($v_1);
            $v_0.append("<a:EntityReference>");
            $v_0.append("<a:Id>");
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2.id));
            $v_0.append("</a:Id>");
            $v_0.append("<a:LogicalName>");
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2.logicalName));
            $v_0.append("</a:LogicalName>");
            if (!_String.isNullOrEmpty($v_2.name)) {
                $v_0.append("<a:Name>");
                $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2.name));
                $v_0.append("</a:Name>")
            } else $v_0.append('<a:Name i:nil="true"/>');
            $v_0.append("</a:EntityReference>")
        }
        $v_0.append("</b:value>");
        return $v_0.toString()
    }
};
Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter = function($p0, $p1, $p2) {
    this.$O_1 = -1;
    Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter.initializeBase(this, [$p0]);
    this.$d_1 = $p1;
    this.$O_1 = $p2
};
Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter
    .createInstance = function(name, value, primaryEntityRole) {
        return new Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter(name, value, primaryEntityRole)
    };
Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter.prototype = {
    $d_1: null,
    get_valueXml: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<b:value i:type='a:Relationship'>");
        if (this.$O_1 !== -1) {
            $v_0.append("<a:PrimaryEntityRole >");
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$O_1.toString()));
            $v_0.append("</a:PrimaryEntityRole >")
        } else $v_0.append('<a:PrimaryEntityRole i:nil="true"/>');
        $v_0.append("<a:SchemaName >");
        $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$d_1));
        $v_0.append("</a:SchemaName >");
        $v_0.append("</b:value>");
        return $v_0.toString()
    }
};
Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter.initializeBase(this, [$p0]);
    this.$b_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter
    .createInstance = function(name, fetchXml) {
        return new Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter(name, fetchXml)
    };
Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter
    .prototype = {
        $b_1: null,
        get_valueXml: function() {
            return '<b:value i:type="a:FetchExpression"><a:Query>' +
                CrmEncodeDecode.CrmXmlEncode(this.$b_1) +
                "</a:Query></b:value>"
        }
    };
Sales.Common.CrmSoapServiceProxy.GuidParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.GuidParameter.initializeBase(this, [$p0]);
    this.$4_1 = $p1.replace("{", "").replace("}", "")
};
Sales.Common.CrmSoapServiceProxy.GuidParameter
    .createInstance = function(name, value) { return new Sales.Common.CrmSoapServiceProxy.GuidParameter(name, value) };
Sales.Common.CrmSoapServiceProxy.GuidParameter.prototype = {
    $4_1: null,
    get_valueXml: function() {
        return '<b:value i:type="c:guid" xmlns:c="http://schemas.microsoft.com/2003/10/Serialization/">' +
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$4_1.toString()) +
            "</b:value>"
    }
};
Sales.Common.CrmSoapServiceProxy.SoapParameter = function(name) { this.$c_0 = name };
Sales.Common.CrmSoapServiceProxy.SoapParameter.prototype = {
    $c_0: null,
    get_soapXml: function() { return this.get_keySoapXml() + this.get_valueXml() },
    get_keySoapXml: function() { return String.format("<b:key>{0}</b:key>", CrmEncodeDecode.CrmXmlEncode(this.$c_0)) }
};
Sales.Common.CrmSoapServiceProxy.StringParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.StringParameter.initializeBase(this, [$p0]);
    this.$4_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.StringParameter
    .createInstance = function(name, value) {
        return new Sales.Common.CrmSoapServiceProxy
            .StringParameter(name, value)
    };
Sales.Common.CrmSoapServiceProxy.StringParameter
    .prototype = {
        $4_1: null,
        get_valueXml: function() {
            return '<b:value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">' +
                Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(this.$4_1.toString()) +
                "</b:value>"
        }
    };
Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter = function($p0, $p1) {
    Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter.initializeBase(this, [$p0]);
    this.$4_1 = $p1
};
Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter
    .createInstance = function(name, value) {
        return new Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter(name, value)
    };
Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter
    .prototype = {
        $4_1: 0,
        get_valueXml: function() {
            return "<b:value i:type='a:OptionSetValue'><a:Value>" + this.$4_1 + "</a:Value></b:value>"
        }
    };
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.Utils");
Sales.Common.CrmSoapServiceProxy.Utils.Utils = function() {};
Sales.Common.CrmSoapServiceProxy.Utils.Utils.isFunction = function(functionName) {
    return eval(String.format("(typeof({0}) == 'function')", functionName))
};
Sales.Common.CrmSoapServiceProxy.Utils.Utils.parseGuid = function(stringGuid) {
    if (_String.isNullOrEmpty(stringGuid)) return null;
    var $v_0 = Sales.Common.CrmSoapServiceProxy.Utils.Utils.tryParseGuid(stringGuid);
    if (IsNull($v_0)) throw Error.create("invalid guid format");
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.Utils.Utils
    .tryParseGuid = function(guid) { return Mscrm.Utilities.tryParseGuid(guid) };
Sales.Common.CrmSoapServiceProxy.Utils.Utils.getContextFromXrmPage = function() { return Xrm.Page.context };
Sales.Common.CrmSoapServiceProxy.Utils.Utils.areGuidEqual = function(guid1, guid2) {
    if (_String.isNullOrEmpty(guid1) || _String.isNullOrEmpty(guid2)) return false;
    var $v_0 = Sales.Common.CrmSoapServiceProxy.Utils.Utils.removeBeginEndBracket(guid1.toLowerCase()),
        $v_1 = Sales.Common.CrmSoapServiceProxy.Utils.Utils.removeBeginEndBracket(guid2.toLowerCase());
    return $v_0 === $v_1
};
Sales.Common.CrmSoapServiceProxy.Utils.Utils.removeBeginEndBracket = function(id) {
    if (id.startsWith("{")) id = id.substr(1);
    if (id.endsWith("}")) id = id.substr(0, id.length - 1);
    return id
};
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils = function() {};
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.toCrmDateTimeString = function(dateTime) {
    if (IsNull(dateTime) || dateTime === Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$Q) return "";
    return dateTime.format("s")
};
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.fromCrmDateTimeString = function(dateTimeString) {
    if (_String.isNullOrEmpty(dateTimeString)) return Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$Q;
    var $v_0 = dateTimeString.replace(Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$r, " ")
        .replace(Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$k, "/") +
        " UTC";
    return new Date($v_0)
};
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.toCrmDateTimeStringWithTimeZone = function(dateTime) {
    if (IsNull(dateTime) || dateTime === Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$Q) return "";
    return dateTime.format("yyyy-MM-ddTHH:mm:ss.fffzzz")
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils = function() {};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.multilineHtmlEncode = function(value, replaceNewLineForHtml) {
    if (_String.isNullOrEmpty(value) || typeof value !== "string") return "";
    if (IsNull(replaceNewLineForHtml)) replaceNewLineForHtml = false;
    for (var $v_0 = value.replace("\r\n", "\n").replace("\r", "\n")
                 .split("\n"),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) $v_0[$v_1] = Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode($v_0[$v_1]);
    if (replaceNewLineForHtml) return $v_0.join("<br />");
    else return $v_0.join("\r\n")
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode = function(value) {
    if (_String.isNullOrEmpty(value)) return "";
    return CrmEncodeDecode.CrmXmlAttributeEncode(value)
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
    .javaScriptEncode = function(s) { return CrmEncodeDecode.CrmJavaScriptEncode(s) };
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
    .htmlAttributeEncode = function(s) { return CrmEncodeDecode.CrmHtmlAttributeEncode(s) };
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlEncode = function(value) {
    if (_String.isNullOrEmpty(value)) return "";
    return CrmEncodeDecode.CrmHtmlEncode(value)
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.htmlDecode = function(value) {
    if (_String.isNullOrEmpty(value)) return "";
    return CrmEncodeDecode.CrmHtmlDecode(value)
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode = function(value) {
    if (_String.isNullOrEmpty(value)) return "";
    return CrmEncodeDecode.CrmXmlEncode(value)
};
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
    .urlEncode = function(value) { return CrmEncodeDecode.CrmUrlEncode(value) };
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
    .urlDecode = function(value) { return CrmEncodeDecode.CrmUrlDecode(value) };
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.Faults");
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault = function() {};
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml = function(responseXml) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault;
    if (IsNull(responseXml)) {
        $v_0.$U_0 = true;
        return $v_0
    }
    responseXml.addNamespace("d", "http://schemas.microsoft.com/xrm/2011/Contracts/Services");
    responseXml.addNamespace("a", "http://schemas.microsoft.com/xrm/2011/Contracts");
    responseXml.addNamespace("b", "http://schemas.datacontract.org/2004/07/System.Collections.Generic");
    responseXml.addNamespace("i", "http://www.w3.org/2001/XMLSchema-instance");
    responseXml.addNamespace("e", "http://schemas.datacontract.org/2004/07/System.ServiceModel");
    $v_0.$W_0 = responseXml;
    var $v_1 = "//a:OrganizationServiceFault", $v_2 = responseXml.selectSingleNode($v_1);
    if (!IsNull($v_2)) {
        $v_0 = Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseServiceFault($v_0, $v_2);
        return $v_0
    }
    var $v_3 = "//e:ExceptionDetail", $v_4 = responseXml.selectSingleNode($v_3);
    if (!IsNull($v_4)) {
        $v_0 = Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseExceptionDetail($v_0, $v_4);
        return $v_0
    }
    $v_0.$8_0 = responseXml.get_outerXml();
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault
    .parseServiceFault = function(organizationServiceFault, faultNode) {
        var $v_0 = "//a:ErrorCode",
            $v_1 = "//a:InnerFault[not(@i:nil)]",
            $v_2 = "//a:Message",
            $v_3 = faultNode.selectSingleNode($v_0);
        if (!IsNull($v_3)) organizationServiceFault.$J_0 = Number.parseInvariant($v_3.get_innerText());
        var $v_4 = faultNode.selectSingleNode($v_1);
        if (!IsNull($v_4))
            organizationServiceFault.$T_0 = Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$o($v_4);
        var $v_5 = faultNode.selectSingleNode($v_2);
        organizationServiceFault.$8_0 = !IsNull($v_5) ? $v_5.get_innerText() : faultNode.get_outerXml();
        return organizationServiceFault
    };
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault
    .parseExceptionDetail = function(organizationServiceFault, exceptionNode) {
        var $v_0 = "e:InnerException/e:Message", $v_1 = exceptionNode.selectSingleNode($v_0);
        organizationServiceFault.$8_0 = !IsNull($v_1) ? $v_1.get_innerText() : exceptionNode.get_outerXml();
        return organizationServiceFault
    };
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$o = function($p0) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault,
        $v_1 = "//ErrorCode",
        $v_2 = "//InnerFault[not(@i:nil)]",
        $v_3 = "//Message",
        $v_4 = $p0.selectSingleNode($v_1);
    if (!IsNull($v_4)) $v_0.$J_0 = Number.parseInvariant($v_4.get_innerText());
    var $v_5 = $p0.selectSingleNode($v_3);
    if (!IsNull($v_5)) $v_0.$8_0 = $v_5.get_innerText();
    var $v_6 = $p0.selectNodes($v_2);
    if ($v_6.get_count() > 0) {
        var $v_7 = $v_6.get_item(0);
        if ($v_7.hasChildNodes()) $v_0.$T_0 = Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$o($v_7)
    }
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault.prototype = {
    $W_0: null,
    $J_0: 0,
    $T_0: null,
    $8_0: null,
    $U_0: false,
    get_innerFault: function() { return this.$T_0 },
    get_errorCode: function() { return this.$J_0 },
    get_message: function() { return this.$8_0 },
    get_responseXml: function() { return this.$W_0 },
    get_responseOuterXml: function() { return this.$W_0.get_outerXml() },
    get_emptyResponse: function() { return this.$U_0 },
    set_emptyResponse: function(value) {
        this.$U_0 = value;
        return value
    }
};
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes = function() {};
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.Messages");
Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        var $v_0 = soapResponse.selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value");
        this.id = $v_0.get_innerText()
    } else {
        this.responseName = "ConvertActivity";
        this.id = ""
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse.prototype = { id: null };
Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse = function(request, textStatus, error) {
    this.$j_0 = request;
    this.$Y_0 = textStatus;
    this.$A_0 = error;
    this.$C_0 = Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault
        .parseFromXml(Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.create(request.responseXML))
};
Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse.prototype = {
    $j_0: null,
    $Y_0: null,
    $A_0: null,
    $C_0: null,
    $N_0: null,
    get_localizedMessage: function() {
        var $v_0 = "errorTable[Error_Message_0x" + this.$C_0.$J_0.toString() + "]", $v_1 = $v_0;
        if (!isNullOrEmptyString($v_1)) this.$N_0 = $v_1;
        else this.$N_0 = this.$C_0.$8_0;
        return this.$N_0
    },
    get_request: function() { return this.$j_0 },
    get_textStatus: function() { return this.$Y_0 },
    get_error: function() { return this.$A_0 },
    get_debugErrorMessage: function() {
        if (!IsNull(this.$C_0) && !isNullOrEmptyString(this.$C_0.$8_0)) return this.$C_0.$8_0;
        if (!IsNull(this.$A_0)) {
            if (!IsNull(this.$A_0.message)) return this.$A_0.message;
            if (String.isInstanceOfType(this.$A_0)) return this.$A_0
        }
        return this.$Y_0
    },
    get_organizationServiceFault: function() { return this.$C_0 }
};
Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        var $v_0 = soapResponse.selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value");
        this.id = $v_0.get_innerText()
    } else {
        this.responseName = "Create";
        this.id = ""
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse.prototype = { id: null };
Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse = function(soapResponse) {
    this.responseName = "OrganizationResponse";
    this.soapResponse = soapResponse;
    Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse.$n(this.soapResponse)
};
Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse.$n = function($p0) {
    if (!IsNull($p0)) {
        $p0.addNamespace("a", "http://schemas.microsoft.com/xrm/2011/Contracts");
        $p0.addNamespace("b", "http://schemas.datacontract.org/2004/07/System.Collections.Generic");
        $p0.addNamespace("c", "http://schemas.microsoft.com/crm/2011/Contracts");
        $p0.addNamespace("d", "http://schemas.microsoft.com/xrm/2011/Contracts/Services");
        $p0.addNamespace("i", "http://www.w3.org/2001/XMLSchema-instance");
        $p0.addNamespace("s", "http://schemas.xmlsoap.org/soap/envelope")
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse.createResponse = function(soapResponse, requestName) {
    !IsNull(soapResponse) && Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse.$n(soapResponse);
    switch (requestName) {
    case "Book":
        return new Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse(soapResponse);
    case "ConvertActivity":
        return new Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse(soapResponse);
    case "Create":
        return new Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse(soapResponse);
    case "ExecuteQuickFind":
    case "Retrieve":
        return new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse(soapResponse);
    case "RetrieveAttribute":
        return new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse(soapResponse);
    case "RetrieveMultiple":
        return new Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse(soapResponse);
    case "QualifyLead":
        return new Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse(soapResponse);
    case "Update":
        return new Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse(soapResponse);
    case "Reschedule":
        return new Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse(soapResponse);
    case "GetValidStatusTransition":
    case "WinOpportunity":
    case "LoseOpportunity":
    case "Delete":
    case "SetState":
    case "CloseIncident":
    default:
        return new Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse(soapResponse)
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse.prototype = { responseName: null, soapResponse: null };
Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse))
        this.$P_1 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection.loadFromXml(soapResponse);
    else this.$P_1 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection
};
Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse
    .prototype = { $P_1: null, get_createdEntities: function() { return this.$P_1 } };
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse.initializeBase(this, [soapResponse]);
    soapResponse.addNamespace("c", "http://schemas.microsoft.com/xrm/2011/Metadata");
    this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
    this.$e_1 = soapResponse.selectSingleNode("//a:KeyValuePairOfstringanyType/b:value")
};
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse
    .prototype = { $e_1: null, get_attributeMetadataXmlNode: function() { return this.$e_1 } };
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse.initializeBase(this, [soapResponse]);
    soapResponse.addNamespace("c", "http://schemas.microsoft.com/xrm/2011/Metadata");
    this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
    this.$R_1 = soapResponse.selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value")
};
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse
    .prototype = { $R_1: null, get_entityXml: function() { return this.$R_1 } };
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        var $v_0 = soapResponse.selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value"),
            $v_1 = $v_0.selectSingleNode("a:EntityReference/a:Id");
        this.id = $v_1.get_innerText()
    } else {
        this.responseName = "Create";
        this.id = ""
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse.prototype = { id: null };
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse = function(soapResponse, types) {
    Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse.initializeBase(this, [soapResponse]);
    this.moreRecords = false;
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        var $v_0 = soapResponse
                .selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type='a:EntityCollection']"),
            $v_1 = $v_0.selectSingleNode("a:MoreRecords");
        if (!IsNull($v_1) && !_String.isNullOrEmpty($v_1.get_innerText())
        ) this.moreRecords = Boolean.parse($v_1.get_innerText());
        var $v_2 = $v_0.selectSingleNode("a:TotalRecordCount");
        if (!IsNull($v_2) && !_String.isNullOrEmpty($v_2.get_innerText())
        ) this.totalRecordCount = parseInt($v_2.get_innerText());
        var $v_3 = $v_0.selectSingleNode("a:PagingCookie");
        if (!IsNull($v_3) && !_String.isNullOrEmpty($v_3.get_innerText())) this.pagingCookie = $v_3.get_innerText();
        var $v_4 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.loadFromXml($v_0, types);
        this.entities = $v_4.$1_0
    } else {
        this.responseName = "RetrieveMultipleResponse";
        this.entities = new Array(0)
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse
    .prototype = { moreRecords: false, totalRecordCount: 0, entities: null, pagingCookie: null };
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        var $v_0 = soapResponse
            .selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type='a:Entity']");
        this.entity = Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.loadFromXml($v_0);
        this.id = this.entity.get_id()
    } else {
        this.responseName = "RetrieveResponse";
        this.entity = new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity("")
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse.prototype = { entity: null, id: null };
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingNotification = function(message, severity) {
    this.Text = message;
    switch (severity) {
    case "Error":
        this.Severity = 1;
        break;
    case "Warning":
        this.Severity = 2;
        break;
    case "Information":
        this.Severity = 3;
        break
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingNotification.prototype = { Text: null, Severity: 0 };
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse.initializeBase(this, [soapResponse]);
    if (!IsNull(soapResponse)) {
        this.responseName = soapResponse.selectSingleNode("//d:ExecuteResult/a:ResponseName").get_innerText();
        this.notifications = [];
        var $v_0 = soapResponse
            .selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value/c:ValidationSuccess");
        this.status = Boolean.parse($v_0.get_innerText());
        if (this.status) {
            var $v_1 = soapResponse
                .selectSingleNode("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value/c:ActivityId");
            if (!IsNull($v_1)) this.activityId = $v_1.get_innerText()
        } else
            for (var $v_2 = soapResponse
                         .selectNodes("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value/c:BusinessNotification/c:Message"),
                $v_3 = soapResponse
                    .selectNodes("//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value/c:BusinessNotification/c:Severity"),
                $v_4 = 0;
                $v_4 < $v_2.get_count();
                $v_4++) {
                var $v_5 = $v_2.get_item($v_4),
                    $v_6 = new Sales.Common.CrmSoapServiceProxy.Messages
                        .SchedulingNotification($v_5.get_innerText(), $v_3.get_item($v_4).get_innerText());
                Array.add(this.notifications, $v_6)
            }
    } else {
        this.responseName = "Book";
        this.activityId = ""
    }
};
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse
    .prototype = { activityId: null, status: false, notifications: null };
Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse = function(soapResponse) {
    Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse.initializeBase(this, [soapResponse])
};
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.ObjectModel");
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityState = function() {};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityState.prototype = { active: 0, inActive: 1 };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityState
    .registerEnum("Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityState", false);
Sales.Common.CrmSoapServiceProxy.ObjectModel.IEntityMetadata = function() {};
Sales.Common.CrmSoapServiceProxy.ObjectModel.IEntityMetadata
    .registerInterface("Sales.Common.CrmSoapServiceProxy.ObjectModel.IEntityMetadata");
Sales.Common.CrmSoapServiceProxy.ObjectModel
    .ActivityPointer = function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.initializeBase(this, ["activitypointer"])
    };
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.prototype = {
    get_id: function() { return this.get_activityId() },
    set_id: function(value) {
        this.set_activityId(value);
        return value
    },
    get_activityId: function() { return this.attributes["activityid"] },
    set_activityId: function(value) {
        this.attributes["activityid"] = value;
        return value
    },
    get_activityTypeCode: function() { return this.attributes["activitytypecode"] },
    set_activityTypeCode: function(value) {
        this.attributes["activitytypecode"] = value;
        return value
    },
    get_dueDate: function() { return this.attributes["scheduledend"] },
    set_dueDate: function(value) {
        this.attributes["scheduledend"] = value;
        return value
    },
    get_formattedDueDate: function() { return this.formattedValues["scheduledend"] },
    get_priority: function() { return this.attributes["prioritycode"] },
    set_priority: function(value) {
        this.attributes["prioritycode"] = value;
        return value
    },
    get_subject: function() { return this.attributes["subject"] },
    set_subject: function(value) {
        this.attributes["subject"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "activityid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "activitytypecode", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "scheduledend", 3);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "prioritycode", 6);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "subject", 0)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.initializeBase(this, ["contact"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.prototype = {
    get_firstName: function() { return this.attributes["firstname"] },
    get_lastName: function() { return this.attributes["lastname"] },
    set_lastName: function(value) {
        this.attributes["lastname"] = value;
        return value
    },
    get_emailAddress1: function() { return this.attributes["emailaddress1"] },
    set_emailAddress1: function(value) {
        this.attributes["emailaddress1"] = value;
        return value
    },
    get_emailAddress2: function() { return this.attributes["emailaddress2"] },
    get_emailAddress3: function() { return this.attributes["emailaddress3"] },
    get_id: function() { return this.get_contactId() },
    set_id: function(value) {
        this.set_contactId(value);
        return value
    },
    get_contactId: function() { return this.attributes["contactid"] },
    set_contactId: function(value) {
        this.attributes["contactid"] = value;
        return value
    },
    get_jobTitle: function() { return this.attributes["jobtitle"] },
    set_jobTitle: function(value) {
        this.attributes["contactid"] = value;
        return value
    },
    get_parentCustomerId: function() { return this.attributes["parentcustomerid"] },
    set_parentCustomerId: function(value) {
        this.attributes["parentcustomerid"] = value;
        return value
    },
    get_personId: function() { return this.attributes["personid"] },
    set_personId: function(value) {
        this.attributes["personid"] = value;
        return value
    },
    get_fullName: function() { return this.attributes["fullname"] },
    set_fullName: function(value) {
        this.attributes["fullname"] = value;
        return value
    },
    get_emailAddress: function() { return this.attributes["emailsearch1.emailaddress"] },
    set_emailAddress: function(value) {
        this.attributes["emailsearch1.emailaddress"] = value;
        return value
    },
    get_transactionCurrencyId: function() { return this.attributes["transactioncurrencyid"] },
    set_transactionCurrencyId: function(value) {
        this.attributes["transactioncurrencyid"] = value;
        return value
    },
    get_salesToDate: function() { return this.attributes["salestodate"] },
    set_salesToDate: function(value) {
        this.attributes["salestodate"] = value;
        return value
    },
    get_formattedSalesToDate: function() { return this.formattedValues["salestodate"] },
    get_currentSalesPipeline: function() { return this.attributes["currentsalespipeline"] },
    set_currentSalesPipeline: function(value) {
        this.attributes["currentsalespipeline"] = value;
        return value
    },
    get_formattedCurrentSalesPipeline: function() { return this.formattedValues["currentsalespipeline"] },
    get_openOpportunityCount: function() { return this.attributes["openopportunitycount"] },
    set_openOpportunityCount: function(value) {
        this.attributes["openopportunitycount"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "contactid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "firstname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "lastname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "jobtitle", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "parentcustomerid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "personid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "emailaddress1", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "emailaddress2", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "emailaddress3", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "transactioncurrencyid", 4);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "salestodate", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "currentsalespipeline", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "openopportunitycount", 1);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "fullname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper
            .addEntityMetadataDefinition(this, "emailsearch1.emailaddress", 0)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.initializeBase(this, ["emailsearch"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.prototype = {
    get_id: function() { return this.get_emailSearchId() },
    set_id: function(value) {
        this.set_emailSearchId(value);
        return value
    },
    get_emailSearchId: function() { return this.attributes["emailsearchid"] },
    set_emailSearchId: function(value) {
        this.attributes["emailsearchid"] = value;
        return value
    },
    get_emailAddress: function() { return this.attributes["emailaddress"] },
    set_emailAddress: function(value) {
        this.attributes["emailaddress"] = value;
        return value
    },
    get_parentObjectId: function() { return this.attributes["parentobjectid"] },
    set_parentObjectId: function(value) {
        this.attributes["parentobjectid"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "emailsearchid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "emailaddress", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "parentobjectid", 4)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity = function(logicalName) {
    this.$S_0 = "00000000-0000-0000-0000-000000000000";
    this.logicalName = logicalName;
    this.attributes = {};
    this.attributeTypes = {};
    this.attributeTypeNamespaces = {};
    this.relatedEntities = new Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection;
    this.formattedValues = {};
    this.initMetadata()
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.toTypedEntityCollection = function(T, entities) {
    var $v_0 = new Array(0);
    if (!entities) return $v_0;
    for (var $v_1 = 0; $v_1 < entities.length; $v_1++) $v_0[$v_1] = entities[$v_1].toTypedEntity(T);
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.toXml = function(entity, skipRootNS) {
    var $v_0 = new Sys.StringBuilder;
    if (!IsNull(skipRootNS)) $v_0.appendLine("<a:Entity>");
    else
        $v_0
            .appendLine('<entity xmlns:a="http://schemas.microsoft.com/xrm/2011/Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">');
    $v_0.appendLine(Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.attributesToXml(entity, skipRootNS));
    $v_0.appendLine('<a:EntityState i:nil="true"/>');
    $v_0
        .appendLine('<a:FormattedValues xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic"/>');
    if (!_String.isNullOrEmpty(entity.get_id())) {
        entity.set_id(entity.get_id().replace("{", "").replace("}", ""));
        $v_0.append("<a:Id>");
        $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entity.get_id()));
        $v_0.appendLine("</a:Id>")
    }
    $v_0.append("<a:LogicalName>");
    $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entity.logicalName));
    $v_0.appendLine("</a:LogicalName>");
    $v_0.appendLine(Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.$q(entity.relatedEntities));
    if (!IsNull(skipRootNS)) $v_0.appendLine("</a:Entity>");
    else $v_0.appendLine("</entity>");
    return $v_0.toString()
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.attributesToXml = function(entity, skipRootNS) {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append("<a:Attributes");
    if (!IsNull(skipRootNS)) $v_0.appendLine(">");
    else $v_0.appendLine(' xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic">');
    var $$dict_7 = entity.attributes;
    for (var $$key_8 in $$dict_7) {
        var $v_1 = { key: $$key_8, value: $$dict_7[$$key_8] }, $v_2 = $v_1.key, $v_3 = entity.attributes[$v_2];
        if (IsNull($v_3)) continue;
        $v_0.appendLine("<a:KeyValuePairOfstringanyType>");
        $v_0.append("<b:key>");
        $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2));
        $v_0.appendLine("</b:key>");
        if (!($v_2 in entity.attributeTypes))
            throw Error.create(String
                .format("Cannot serialize attribute '{0}.{1}' because its type was not found in the AttributeTypes dictionary.", entity.logicalName, $v_2));
        $v_0.append('<b:value i:type="');
        $v_0.append(entity.attributeTypes[$v_2].toString());
        $v_0.append('" ');
        if (!_String.isNullOrEmpty(entity.attributeTypeNamespaces[$v_2])) {
            $v_0.append('xmlns:c="');
            $v_0.append(entity.attributeTypeNamespaces[$v_2].toString());
            $v_0.append('"')
        }
        $v_0.append(">");
        var $v_4 = entity.attributeTypes[$v_2];
        switch ($v_4) {
        case "a:EntityReference":
            $v_0.append(Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.toXml($v_3));
            break;
        case "a:EntityCollection":
            $v_0.append(Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.toXml($v_3, true));
            break;
        case "c:dateTime":
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.toCrmDateTimeString($v_3));
            break;
        case "c:boolean":
            $v_0.append($v_3.toString());
            break;
        case "c:int":
            $v_0.append($v_3.toString());
            break;
        case "c:guid":
            $v_0.append($v_3.toString().replace("{", "").replace("}", ""));
            break;
        case "a:Money":
            $v_0.append("<a:Value>");
            $v_0.append($v_3.toString());
            $v_0.append("</a:Value>");
            break;
        case "a:OptionSetValue":
            $v_0.append("<a:Value>");
            $v_0.append($v_3.toString());
            $v_0.append("</a:Value>");
            break;
        default:
            $v_0.append(Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_3));
            break
        }
        $v_0.appendLine("</b:value>");
        $v_0.appendLine("</a:KeyValuePairOfstringanyType>")
    }
    $v_0.appendLine("</a:Attributes>");
    return $v_0.toString()
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$s = function($p0, $p1) {
    if (!IsNull($p1))
        for (var $v_1 = 0; $v_1 < $p1.length; $v_1++) {
            var $v_2 = $p1[$v_1];
            if (Type.isClass($v_2) &&
                $v_2.getBaseType() &&
                $v_2.getBaseType().getName() === Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.getName()) {
                var $v_3 = $v_2.entityLogicalName;
                if (!_String.isNullOrEmpty($v_3) && $v_3 === $p0) return new $v_2
            }
        }
    if (!Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$K) {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$K = {};
        var $v_4 = Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.getName(),
            $v_5 = $v_4.substr(0, $v_4.lastIndexOf(".")),
            $v_6 = Type.parse($v_5),
            $$dict_A = $v_6;
        for (var $$key_B in $$dict_A) {
            var $v_7 = { key: $$key_B, value: $$dict_A[$$key_B] };
            if (Type.isClass($v_7.value) &&
                $v_7.value.getBaseType() &&
                $v_7.value.getBaseType().getName() === Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.getName()) {
                var $v_8 = $v_7.value.entityLogicalName;
                if (!_String.isNullOrEmpty($v_8))
                    Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$K[$v_8] = $v_7.value
            }
        }
    }
    var $v_0 = Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$K[$p0];
    if (!IsNull($v_0)) return new $v_0;
    else return new Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity($p0)
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.loadFromXml = function(xmlNode, types) {
    var $v_0 = xmlNode.selectSingleNode("a:LogicalName");
    if (!$v_0) return null;
    var $v_1 = Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity
            .$s(xmlNode.selectSingleNode("a:LogicalName").get_innerText(), types),
        $v_2 = xmlNode.selectNodes("a:Attributes/a:KeyValuePairOfstringanyType");
    $v_1.set_id(xmlNode.selectSingleNode("a:Id").get_innerText());
    for (var $v_5 = 0; $v_5 < $v_2.get_count(); $v_5++) {
        var $v_6 = $v_2.get_item($v_5).selectSingleNode("b:value"),
            $v_7 = $v_2.get_item($v_5).selectSingleNode("b:key"),
            $v_8 = $v_6.getAttribute("i:type"),
            $v_9 = $v_6.getAttribute("xmlns:c");
        if ($v_8 === "a:AliasedValue") {
            $v_6 = $v_6.selectSingleNode("a:Value");
            $v_8 = $v_6.getAttribute("i:type");
            $v_9 = $v_6.getAttribute("xmlns:c")
        }
        $v_1.attributeTypes[$v_7.get_innerText()] = $v_8;
        $v_1.attributeTypeNamespaces[$v_7.get_innerText()] = $v_9;
        switch ($v_8) {
        case "a:EntityReference":
            $v_1.attributes[$v_7.get_innerText()] = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
                .$V($v_6);
            break;
        case "c:dateTime":
            $v_1.attributes[$v_7.get_innerText()] = Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils
                .fromCrmDateTimeString($v_6.get_innerText());
            break;
        case "c:int":
        case "a:OptionSetValue":
            if (!_String.isNullOrEmpty($v_6
                .get_innerText())) $v_1.attributes[$v_7.get_innerText()] = parseInt($v_6.get_innerText());
            break;
        case "c:boolean":
            if (!_String.isNullOrEmpty($v_6
                .get_innerText())) $v_1.attributes[$v_7.get_innerText()] = Boolean.parse($v_6.get_innerText());
            break;
        default:
            $v_1.attributes[$v_7.get_innerText()] = $v_6.get_innerText();
            break
        }
    }
    var $v_3 = xmlNode.selectNodes("a:FormattedValues/a:KeyValuePairOfstringstring");
    if (!IsNull($v_3))
        for (var $v_A = 0; $v_A < $v_3.get_count(); $v_A++) {
            var $v_B = $v_3.get_item($v_A).selectSingleNode("b:key"),
                $v_C = $v_3.get_item($v_A).selectSingleNode("b:value");
            if (!IsNull($v_B) && !IsNull($v_C) && !IsNull($v_B.get_innerText())
            ) $v_1.formattedValues[$v_B.get_innerText()] = $v_C.get_innerText()
        }
    var $v_4 = xmlNode.selectSingleNode("a:RelatedEntities");
    if ($v_4)
        $v_1.relatedEntities = Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.$V($v_4, types);
    return $v_1
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype = {
    $S_0: null,
    logicalName: null,
    attributes: null,
    attributeTypes: null,
    attributeTypeNamespaces: null,
    relatedEntities: null,
    formattedValues: null,
    get_id: function() { return this.$S_0 },
    set_id: function(value) {
        this.$S_0 = value;
        return value
    },
    toTypedEntity: function(T) {
        var $v_0 = new T;
        $v_0.set_id(this.get_id());
        $v_0.attributes = this.attributes;
        $v_0.attributeTypes = this.attributeTypes;
        $v_0.attributeTypeNamespaces = this.attributeTypeNamespaces;
        $v_0.relatedEntities = this.relatedEntities;
        return $v_0
    },
    initMetadata: function() {},
    setAttribute: function(key, value, type) {
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, key, type);
        this.attributes[key] = value
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection = function() { this.$1_0 = new Array(0) };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.createInstance = function(collection) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection;
    $v_0.$1_0 = collection;
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.loadFromXml = function(entityCollectionNode, types) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection,
        $v_1 = entityCollectionNode.selectSingleNode("a:EntityName");
    if (!$v_1) return $v_0;
    for (var $v_2 = $v_1.get_innerText(), $v_3 = entityCollectionNode.selectNodes("a:Entities/a:Entity"), $v_4 = 0;
        $v_4 < $v_3.get_count();
        $v_4++) {
        var $v_5 = Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.loadFromXml($v_3.get_item($v_4), types);
        $v_0.$1_0[$v_0.$1_0.length] = $v_5
    }
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.toXml = function(entities, skipRootNS) {
    for (var $v_0 = "<a:Entities>", $$arr_3 = entities.$1_0, $$len_4 = $$arr_3.length, $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_1 = $$arr_3[$$idx_5];
        $v_0 += Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.toXml($v_1, skipRootNS)
    }
    $v_0 += "</a:Entities>";
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.prototype = {
    $1_0: null,
    get_entities: function() { return this.$1_0 },
    get_item: function(index) { return this.$1_0[index] },
    set_item: function(index, value) {
        this.$1_0[index] = value;
        return value
    },
    get_length: function() { return this.$1_0.length }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata = function(logicalName) { this.$h_0 = logicalName };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata.$V = function($p0) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel
        .EntityMetadata($p0.selectSingleNode("c:LogicalName").get_innerText());
    $v_0.$f_0 = $p0.selectSingleNode("c:DisplayName/a:UserLocalizedLabel/a:Label").get_innerText();
    $v_0.$i_0 = $p0.selectSingleNode("c:DisplayCollectionName/a:UserLocalizedLabel/a:Label").get_innerText();
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata
    .prototype = {
        $h_0: null,
        $f_0: null,
        $i_0: null,
        get_logicalName: function() { return this.$h_0 },
        get_displayName: function() { return this.$f_0 },
        get_pluralName: function() { return this.$i_0 }
    };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference = function() {};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.createEntityReference = function(id, logicalName, name) {
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
    $v_0.id = id.replace("{", "").replace("}", "");
    $v_0.logicalName = logicalName;
    $v_0.name = name;
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.$V = function($p0) {
    if (!$p0) return null;
    var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference;
    $v_0.id = $p0.selectSingleNode("a:Id").get_innerText();
    $v_0.logicalName = $p0.selectSingleNode("a:LogicalName").get_innerText();
    $v_0.name = $p0.selectSingleNode("a:Name").get_innerText();
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.toXml = function(entityReference) {
    if (!entityReference) return "";
    var $v_0 = "<a:Id>" +
        Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityReference
            .id) +
        "</a:Id>";
    $v_0 += "<a:LogicalName>" +
        Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityReference.logicalName) +
        "</a:LogicalName>";
    if (!_String.isNullOrEmpty(entityReference.name))
        $v_0 += "<a:Name>" +
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(entityReference.name) +
            "</a:Name>";
    else $v_0 += '<a:Name i:nil="true" />';
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.prototype = { id: null, logicalName: null, name: null };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection = function() { this.$1_0 = new Array(0) };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection
    .loadFromXml = function(entityReferenceCollectionNode) {
        for (var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection,
            $v_1 = entityReferenceCollectionNode.selectNodes("//a:EntityReference"),
            $v_2 = 0;
            $v_2 < $v_1.get_count();
            $v_2++) {
            var $v_3 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference.$V($v_1.get_item($v_2));
            $v_0.set_item($v_0.get_length(), $v_3)
        }
        return $v_0
    };
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection.prototype = {
    $1_0: null,
    get_item: function(index) { return this.$1_0[index] },
    set_item: function(index, value) {
        this.$1_0[index] = value;
        return value
    },
    get_length: function() { return this.$1_0.length }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.initializeBase(this, ["incident"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.prototype = {
    get_id: function() { return this.get_incidentId() },
    set_id: function(value) {
        this.set_incidentId(value);
        return value
    },
    get_incidentId: function() { return this.attributes["incidentid"] },
    set_incidentId: function(value) {
        this.attributes["incidentid"] = value;
        return value
    },
    get_title: function() { return this.attributes["title"] },
    set_title: function(value) {
        this.attributes["title"] = value;
        return value
    },
    get_caseNumber: function() { return this.attributes["ticketnumber"] },
    set_caseNumber: function(value) {
        this.attributes["ticketnumber"] = value;
        return value
    },
    get_createdOn: function() { return this.attributes["createdon"] },
    set_createdOn: function(value) {
        this.attributes["createdon"] = value;
        return value
    },
    get_formattedCreatedOn: function() { return this.formattedValues["createdon"] },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "incidentid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "title", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "ticketnumber", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "createdon", 3)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities = function() {};
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.parseMruXml = function(xml, dataElementPath) {
    var $v_0 = Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.create(XUI.Xml.LoadXml(xml)),
        $v_1 = new Array(0),
        $v_2 = $v_0.selectNodes(dataElementPath);
    if (!IsNull($v_2))
        for (var $v_3 = 0; $v_3 < $v_2.get_count(); $v_3++) {
            var $v_4 = $v_2.get_item($v_3),
                $v_5 = parseInt(Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "Type"), 10),
                $v_6 = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "ObjectId");
            if (IsNull($v_6) || IsNull(Sales.Common.CrmSoapServiceProxy.Utils.Utils.tryParseGuid($v_6))) continue;
            var $v_7 = new Xrm.Objects.RecentlyViewedItem;
            $v_7.displayName = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "DisplayName");
            $v_7.title = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "Title");
            $v_7.action = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "Action");
            $v_7.iconPath = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B($v_4, "IconPath");
            $v_7.entityTypeCode = Number.parseInvariant(Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities
                .$B($v_4, "EntityTypeCode"));
            $v_7.lastAccessed = new Date(Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities
                .$B($v_4, "LastAccessed"));
            $v_7.objectId = $v_6;
            $v_7.type = $v_5;
            $v_1[$v_1.length] = $v_7
        }
    $v_1.reverse();
    $v_1.sort(Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.lastAccessedComparer);
    return $v_1
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.serializeMruXml = function(items) {
    if (IsNull(items) || items.length < 1) return null;
    for (var $v_0 = {}, $v_1, $v_2 = 0; $v_2 < items.length; $v_2++) {
        var $v_3 = items[$v_2].entityTypeCode, $v_4 = items[$v_2].lastAccessed;
        if ($v_4 === _DateTime.empty) {
            $v_4 = _DateTime.get_now();
            $v_4.setHours($v_4.getHours() + $v_4.getTimezoneOffset() / 60)
        }
        var $v_5 = String
            .format("\r\n\t\t\t\t\t<RecentlyViewedItem>\r\n\t\t\t\t\t\t<Type>{1}</Type>\r\n\t\t\t\t\t\t<ObjectId>{2}</ObjectId>\r\n\t\t\t\t\t\t<EntityTypeCode>{0}</EntityTypeCode>\r\n\t\t\t\t\t\t<Title>{3}</Title>\r\n\t\t\t\t\t\t<LastAccessed>{4}</LastAccessed>\r\n\t\t\t\t\t\t<Action>{5}</Action>\r\n\t\t\t\t\t\t<PinStatus>{6}</PinStatus>\r\n\t\t\t\t\t</RecentlyViewedItem>", items[$v_2].entityTypeCode, 0, Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(items[$v_2].objectId), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(items[$v_2].title), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_4.format("MM/dd/yyyy HH:mm:ss")), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(items[$v_2].action), Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode(items[$v_2].pinStatus.toString() === "1" ? "true" : "false"));
        if ($v_3.toString() in $v_0) {
            $v_1 = $v_0[$v_3.toString()];
            $v_0[$v_3.toString()] = $v_1 + $v_5
        } else $v_0[$v_3.toString()] = $v_5
    }
    $v_1 = "";
    var $$dict_8 = $v_0;
    for (var $$key_9 in $$dict_8) {
        var $v_6 = { key: $$key_9, value: $$dict_8[$$key_9] };
        $v_1 += String.format("<RecentlyViewedEntityData etc='{0}'>{1}</RecentlyViewedEntityData>",
            Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlAttributeEncode($v_6.key),
            $v_6.value)
    }
    return "<RecentlyViewedData>" + $v_1 + "</RecentlyViewedData>"
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.lastAccessedComparer = function(recordA, recordB) {
    var $v_0 = recordA, $v_1 = recordB;
    return $v_1.lastAccessed - $v_0.lastAccessed
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.$B = function($p0, $p1) {
    var $v_0 = $p0.selectSingleNode($p1);
    if (!IsNull($v_0)) return $v_0.get_innerText();
    else return null
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.initializeBase(this, ["opportunity"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.prototype = {
    get_id: function() { return this.get_opportunityId() },
    set_id: function(value) {
        this.set_opportunityId(value);
        return value
    },
    get_opportunityId: function() { return this.attributes["opportunityid"] },
    set_opportunityId: function(value) {
        this.attributes["opportunityid"] = value;
        return value
    },
    get_topic: function() { return this.attributes["name"] },
    set_topic: function(value) {
        this.attributes["name"] = value;
        return value
    },
    get_estimatedValue: function() { return this.attributes["estimatedvalue"] },
    set_estimatedValue: function(value) {
        this.attributes["estimatedvalue"] = value;
        return value
    },
    get_formattedEstimatedvalue: function() { return this.formattedValues["estimatedvalue"] },
    get_estimatedCloseDate: function() { return this.attributes["estimatedclosedate"] },
    set_estimatedCloseDate: function(value) {
        this.attributes["estimatedclosedate"] = value;
        return value
    },
    get_formattedEstimatedCloseDate: function() { return this.formattedValues["estimatedclosedate"] },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "opportunityid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "name", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "estimatedvalue", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "estimatedclosedate", 3)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection = function() { this.$L_0 = {} };
Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.$V = function($p0, $p1) {
    for (var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection,
        $v_1 = $p0.selectNodes("*"),
        $v_2 = 0;
        $v_2 < $v_1.get_count();
        $v_2++) {
        if ($v_1.get_item($v_2).get_tagName().indexOf("KeyValuePairOfRelationshipEntityCollection") < 0) return $v_0;
        var $v_3 = !IsNull($v_1.get_item($v_2).selectSingleNode("b:key/a:SchemaName"))
            ? $v_1.get_item($v_2).selectSingleNode("b:key/a:SchemaName").get_innerText()
            : null;
        if (!_String.isNullOrEmpty($v_3)) {
            var $v_4 = $v_1.get_item($v_2).selectSingleNode("b:value");
            if (!IsNull($v_4)) {
                var $v_5 = Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection.loadFromXml($v_4, $p1);
                $v_0.$L_0[$v_3] = $v_5
            }
        }
    }
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.$q = function($p0) {
    var $v_0 = '<a:RelatedEntities xmlns:b="http://schemas.datacontract.org/2004/07/System.Collections.Generic">';
    $v_0 += "</a:RelatedEntities>";
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection.prototype = {
    $L_0: null,
    get_item: function(key) { return this.$L_0[key] },
    set_item: function(key, value) {
        this.$L_0[key] = value;
        return value
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm.initializeBase(this, ["systemform"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm.prototype = {
    get_id: function() { return this.get_systemFormId() },
    set_id: function(value) {
        this.set_systemFormId(value);
        return value
    },
    get_systemFormId: function() { return this.attributes["id"] },
    set_systemFormId: function(value) {
        this.attributes["id"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "id", 2)
    }
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser = function() {
    Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.initializeBase(this, ["systemuser"])
};
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.prototype = {
    get_firstName: function() { return this.attributes["firstname"] },
    get_lastName: function() { return this.attributes["lastname"] },
    get_fullName: function() { return this.attributes["fullname"] },
    get_internalEmailAddress: function() { return this.attributes["internalemailaddress"] },
    get_personalEmailAddress: function() { return this.attributes["personalemailaddress"] },
    get_id: function() { return this.get_systemUserId() },
    set_id: function(value) {
        this.set_systemUserId(value);
        return value
    },
    get_systemUserId: function() { return this.attributes["systemuserid"] },
    set_systemUserId: function(value) {
        this.attributes["systemuserid"] = value;
        return value
    },
    get_title: function() { return this.attributes["title"] },
    set_title: function(value) {
        this.attributes["title"] = value;
        return value
    },
    get_yammerEmailAddress: function() { return this.attributes["yammeremailaddress"] },
    set_yammerEmailAddress: function(value) {
        this.attributes["yammeremailaddress"] = value;
        return value
    },
    get_yammerUserId: function() { return this.attributes["yammeruserid"] },
    set_yammerUserId: function(value) {
        this.attributes["yammeruserid"] = value;
        return value
    },
    initMetadata: function() {
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.prototype.initMetadata.call(this);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "systemuserid", 2);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "firstname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "lastname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "fullname", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "internalemailaddress", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "personalemailaddress", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "title", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "yammeremailaddress", 0);
        Sales.Common.CrmSoapServiceProxy.MetadataHelper.addEntityMetadataDefinition(this, "yammeruserid", 0)
    }
};
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.Parser");
Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode = function() {};
Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode.registerInterface("Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode");
Sales.Common.CrmSoapServiceProxy.Parser.IXmlNodeList = function() {};
Sales.Common.CrmSoapServiceProxy.Parser.IXmlNodeList
    .registerInterface("Sales.Common.CrmSoapServiceProxy.Parser.IXmlNodeList");
Sales.Common.CrmSoapServiceProxy.Parser.NodeSnapshotWrapper = function($p0, $p1, $p2) {
    this.$6_0 = [];
    if (!IsNull($p1.length))
        for (var $v_0 = $p1, $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++
        ) Array.add(this.$6_0, new Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper($p0, $v_0[$v_1], $p2));
    else
        for (var $v_2 = $p1, $v_3 = 0;
            $v_3 < $v_2.snapshotLength;
            $v_3++
        )
            Array.add(this.$6_0,
                new Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper($p0, $v_2.snapshotItem($v_3), $p2))
};
Sales.Common.CrmSoapServiceProxy.Parser.NodeSnapshotWrapper
    .prototype = {
        $6_0: null,
        get_count: function() { return this.$6_0.length },
        get_item: function($p0) { return this.$6_0[$p0] }
    };
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory = function() {};
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.create = function(node) {
    if (IsNull(node)) return null;
    if (!Mscrm.CrmBrowser.get_currentBrowser()
        .get_hasXPathEvaluator()) return new Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper(node);
    else return new Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper(node)
};
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.parseXmlDocument = function(xml) {
    var $v_0 = null;
    if (Mscrm.Utilities.isIE9())
        for (var $v_1 = ["Microsoft.XMLDOM", "Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument"], $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            $v_0 = new ActiveXObject($v_1[$v_2]);
            if (!IsNull($v_0)) {
                $v_0.async = false;
                $v_0.resolveExternals = false;
                $v_0.loadXML(xml);
                $v_0.setProperty("SelectionLanguage", "XPath");
                $v_0.setProperty("SelectionNamespaces",
                    "xmlns:d='http://schemas.microsoft.com/xrm/2011/Contracts/Services' xmlns:a='http://schemas.microsoft.com/xrm/2011/Contracts' xmlns:b='http://schemas.datacontract.org/2004/07/System.Collections.Generic' xmlns:i='http://www.w3.org/2001/XMLSchema-instance'");
                if (!_String.isNullOrEmpty($v_0.text)) break
            }
        }
    if (IsNull($v_0)) $v_0 = Sys.Net.XMLDOM(xml);
    if (!IsNull($v_0)) {
        var $v_3 = Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory.create($v_0),
            $v_4 = $v_3.selectSingleNode("/parsererror");
        if (!IsNull($v_4) && $v_4.get_tagName() === "parsererror") $v_0 = null
    }
    return $v_0
};
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeListWrapper = function($p0) {
    var $v_0 = $p0;
    this.$6_0 = [];
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        Array.add(this.$6_0, new Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper($v_2, true))
    }
};
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeListWrapper
    .prototype = {
        $6_0: null,
        get_count: function() { return this.$6_0.length },
        get_item: function($p0) { return this.$6_0[$p0] }
    };
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper = function($p0, $p1) {
    this.$9_0 = $p0;
    this.$H_0 = !IsNull($p1) && $p1;
    this.$5_0 = this.$H_0 ? null : {}
};
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper.prototype = {
    $9_0: null,
    $5_0: null,
    $H_0: false,
    get_xmlElement: function() { return this.$9_0 },
    get_element: function() { return this.$9_0 },
    addNamespace: function($p0, $p1) { if (!this.$H_0) this.$5_0[$p0] = $p1 },
    selectSingleNode: function($p0) {
        this.$m_0();
        var $v_0 = this.$9_0.selectSingleNode($p0);
        return !$v_0 ? null : new Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper($v_0, true)
    },
    selectNodes: function($p0) {
        this.$m_0();
        return new Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeListWrapper(this.$9_0.selectNodes($p0))
    },
    get_innerText: function() { return this.$9_0.text },
    get_outerXml: function() { return this.$9_0.xml },
    getAttribute: function($p0) { return this.get_xmlElement().getAttribute($p0) },
    getElementsByTagName: function($p0) {
        return new Sales.Common.CrmSoapServiceProxy.Parser
            .XmlNodeListWrapper(this.get_element().getElementsByTagName($p0))
    },
    hasChildNodes: function() { return this.$9_0.hasChildNodes() },
    get_tagName: function() { return this.get_element().tagName },
    $m_0: function() {
        if (!this.$H_0) {
            var $v_0 = new Sys.StringBuilder, $v_1 = "", $$dict_3 = this.$5_0;
            for (var $$key_4 in $$dict_3) {
                var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
                $v_0.append(String.format("{0}xmlns:{1}='{2}'",
                    $v_1,
                    Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2.key),
                    Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils.xmlEncode($v_2.value)));
                $v_1 = " "
            }
            this.get_xmlElement().setProperty("SelectionLanguage", "XPath");
            this.get_xmlElement().setProperty("SelectionNamespaces", $v_0.toString());
            this.$H_0 = true
        }
    }
};
Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper = function($p0, $p1, $p2) {
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$F_0 = $p0;
    this.$7_0 = IsNull($p1) ? $p0 : $p1;
    this.$5_0 = IsNull($p2) ? {} : $p2
};
Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper.prototype = {
    $5_0: null,
    $F_0: null,
    $7_0: null,
    addNamespace: function($p0, $p1) { this.$5_0[$p0] = $p1 },
    selectSingleNode: function($p0) {
        var $v_0 = this.$F_0.evaluate($p0, this.$7_0, this.$$d_$t_0, 9, null);
        return IsNull($v_0.singleNodeValue)
            ? null
            : new Sales.Common.CrmSoapServiceProxy.Parser
            .XPathEvaluatorWrapper(this.$F_0, $v_0.singleNodeValue, this.$5_0)
    },
    selectNodes: function($p0) {
        return new Sales.Common.CrmSoapServiceProxy.Parser
            .NodeSnapshotWrapper(this.$F_0, this.$F_0.evaluate($p0, this.$7_0, this.$$d_$t_0, 7, null), this.$5_0)
    },
    get_innerText: function() { return this.$7_0.textContent },
    get_outerXml: function() { return (new XMLSerializer).serializeToString(this.$7_0) },
    getAttribute: function($p0) { return this.$7_0.getAttribute($p0) },
    getElementsByTagName: function($p0) {
        return new Sales.Common.CrmSoapServiceProxy.Parser
            .NodeSnapshotWrapper(this.$F_0, this.$7_0.getElementsByTagName($p0), this.$5_0)
    },
    hasChildNodes: function() { return this.$7_0.hasChildNodes() },
    get_tagName: function() { return this.$7_0.tagName },
    $t_0: function($p0) {
        if ($p0 in this.$5_0) return this.$5_0[$p0];
        else return null
    }
};
Type.registerNamespace("Sales.Common.CrmSoapServiceProxy.Stubs");
Sales.Common.CrmSoapServiceProxy.Stubs.XPathResultType = function() {};
Sales.Common.CrmSoapServiceProxy.Stubs.XPathResultType
    .prototype = {
        ANY_TYPE: 0,
        NUMBER_TYPE: 1,
        STRING_TYPE: 2,
        BOOLEAN_TYPE: 3,
        UNORDERED_NODE_ITERATOR_TYPE: 4,
        ORDERED_NODE_ITERATOR_TYPE: 5,
        UNORDERED_NODE_SNAPSHOT_TYPE: 6,
        ORDERED_NODE_SNAPSHOT_TYPE: 7,
        ANY_UNORDERED_NODE_TYPE: 8,
        FIRST_ORDERED_NODE_TYPE: 9
    };
Sales.Common.CrmSoapServiceProxy.Stubs.XPathResultType
    .registerEnum("Sales.Common.CrmSoapServiceProxy.Stubs.XPathResultType", false);
Mscrm.RemoteCommandJson.registerClass("Mscrm.RemoteCommandJson");
Mscrm.InternalUtilities.Sdk.registerClass("Mscrm.InternalUtilities.Sdk");
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase
    .registerClass("Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase");
Sales.Common.CrmSoapServiceProxy.AttributeType.registerClass("Sales.Common.CrmSoapServiceProxy.AttributeType");
Sales.Common.CrmSoapServiceProxy.MetadataHelper.registerClass("Sales.Common.CrmSoapServiceProxy.MetadataHelper");
Sales.Common.CrmSoapServiceProxy.SoapParameter.registerClass("Sales.Common.CrmSoapServiceProxy.SoapParameter");
Sales.Common.CrmSoapServiceProxy.BooleanParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.BooleanParameter", Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.ColumnSetParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.ColumnSetParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.EntityParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.EntityParameter", Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.EntityReferenceParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.EntityReferenceCollectionParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.EntityRelationshipParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.FetchExpressionParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.GuidParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.GuidParameter", Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.StringParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.StringParameter", Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter
    .registerClass("Sales.Common.CrmSoapServiceProxy.OptionSetValueParameter",
        Sales.Common.CrmSoapServiceProxy.SoapParameter);
Sales.Common.CrmSoapServiceProxy.Utils.Utils.registerClass("Sales.Common.CrmSoapServiceProxy.Utils.Utils");
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils
    .registerClass("Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils");
Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
    .registerClass("Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils");
Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault
    .registerClass("Sales.Common.CrmSoapServiceProxy.Faults.OrganizationServiceFault");
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes
    .registerClass("Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes");
Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse");
Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.ConvertActivityResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.CrmErrorResponse");
Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.ExecuteCreateResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.QualifyLeadResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.RetrieveAttributeResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.RetrieveEntityResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.RetrieveFilteredFormsResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.RetrieveMultipleResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.RetrieveResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingNotification
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.SchedulingNotification");
Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.SchedulingResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse
    .registerClass("Sales.Common.CrmSoapServiceProxy.Messages.UpdateResponse",
        Sales.Common.CrmSoapServiceProxy.Messages.OrganizationResponse);
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity");
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityCollection");
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityMetadata",
        null,
        Sales.Common.CrmSoapServiceProxy.ObjectModel.IEntityMetadata);
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference");
Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReferenceCollection");
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities");
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.RelatedEntityCollection");
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser
    .registerClass("Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser",
        Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity);
Sales.Common.CrmSoapServiceProxy.Parser.NodeSnapshotWrapper
    .registerClass("Sales.Common.CrmSoapServiceProxy.Parser.NodeSnapshotWrapper",
        null,
        Sales.Common.CrmSoapServiceProxy.Parser.IXmlNodeList);
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory
    .registerClass("Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeFactory");
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeListWrapper
    .registerClass("Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeListWrapper",
        null,
        Sales.Common.CrmSoapServiceProxy.Parser.IXmlNodeList);
Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper
    .registerClass("Sales.Common.CrmSoapServiceProxy.Parser.XmlNodeWrapper",
        null,
        Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode);
Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper
    .registerClass("Sales.Common.CrmSoapServiceProxy.Parser.XPathEvaluatorWrapper",
        null,
        Sales.Common.CrmSoapServiceProxy.Parser.IXmlNode);
Mscrm.InternalUtilities.Sdk.$X = null;
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase.$g = true;
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase
    .soapExecuteAction = "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute";
Sales.Common.CrmSoapServiceProxy.CrmSoapServiceBase.timeout = 1e4;
Sales.Common.CrmSoapServiceProxy.AttributeType.string = 0;
Sales.Common.CrmSoapServiceProxy.AttributeType.integer = 1;
Sales.Common.CrmSoapServiceProxy.AttributeType.guid = 2;
Sales.Common.CrmSoapServiceProxy.AttributeType.dateTime = 3;
Sales.Common.CrmSoapServiceProxy.AttributeType.entityReference = 4;
Sales.Common.CrmSoapServiceProxy.AttributeType.entityCollection = 5;
Sales.Common.CrmSoapServiceProxy.AttributeType.optionSet = 6;
Sales.Common.CrmSoapServiceProxy.AttributeType.bool = 7;
Sales.Common.CrmSoapServiceProxy.AttributeType.decimal = 8;
Sales.Common.CrmSoapServiceProxy.AttributeType.doubleNumber = 9;
Sales.Common.CrmSoapServiceProxy.AttributeType.money = 10;
Sales.Common.CrmSoapServiceProxy.MetadataHelper.stringAttributeType = "c:string";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.guidAttributeType = "c:guid";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.entityReferenceAttributeType = "a:EntityReference";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.dateTimeAttributeType = "c:dateTime";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.intAttributeType = "c:int";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.booleanAttributeType = "c:boolean";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.decimalAttributeType = "c:decimal";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.doubleAttributeType = "c:double";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.aliasedValueAttributeType = "a:AliasedValue";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.optionSetAttributeType = "a:OptionSetValue";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.entityCollectionType = "a:EntityCollection";
Sales.Common.CrmSoapServiceProxy.MetadataHelper.moneyAttributeType = "a:Money";
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$Q = new Date(0);
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$r = new RegExp("[Z,T]", "ig");
Sales.Common.CrmSoapServiceProxy.Utils.DateTimeUtils.$k = new RegExp("[-]", "ig");
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.objectDoesNotExist = -2147220969;
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.privilegeDenied = -2147220960;
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.unManagedIdsAccessDenied = -2147187962;
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.mustContainAtLeastACharInMention = -2147158364;
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.duplicateRecord = -2147220937;
Sales.Common.CrmSoapServiceProxy.Faults.SystemErrorCodes.isvAborted = -2147220891;
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.activityIdAttributeName = "activityid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.activityTypeCodeAttributeName = "activitytypecode";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.dueDateAttributeName = "scheduledend";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.priorityAttributeName = "prioritycode";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.subjectAttributeName = "subject";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.entityLogicalName = "activitypointer";
Sales.Common.CrmSoapServiceProxy.ObjectModel.ActivityPointer.entityTypeCode = 4200;
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.lastNameAttributeName = "lastname";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.contactIdAttributeName = "contactid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.emailAddress1AttributeName = "emailaddress1";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.emailAddress2AttributeName = "emailaddress2";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.emailAddress3AttributeName = "emailaddress3";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.fullNameAttributeName = "fullname";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.jobTitleAttributeName = "jobtitle";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.parentCustomerIdAttributeName = "parentcustomerid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.personIdAttributeName = "personid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.transactionCurrencyIdAttributeName = "transactioncurrencyid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.salesToDateAttributeName = "salestodate";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.currentSalePipelineAttributeName = "currentsalespipeline";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.openOpportunityCountAttributeName = "openopportunitycount";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.emailSearchEmailAttributeName = "emailsearch1.emailaddress";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.entityLogicalName = "contact";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Contact.entityTypeCode = 2;
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.emailSearchIdAttributeName = "emailsearchid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.emailAddressAttributeName = "emailaddress";
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.parentObjectIdAttributeName = "parentobjectid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.parentObjectTypeCodeAttributeName = "parentobjecttypecode";
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.entityLogicalName = "emailsearch";
Sales.Common.CrmSoapServiceProxy.ObjectModel.EmailSearch.entityTypeCode = 4299;
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.entityLogicalName = "entity";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Entity.$K = null;
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.incidentIdAttributeName = "incidentid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.titleAttributeName = "title";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.caseNumberAttributeName = "ticketnumber";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.createdOnAttributeName = "createdon";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.entityLogicalName = "incident";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Incident.entityTypeCode = 112;
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.opportunityIdAttributeName = "opportunityid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.topicAttributeName = "name";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.estimatedValueAttributeName = "estimatedvalue";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.estimatedCloseDateAttributeName = "estimatedclosedate";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.entityLogicalName = "opportunity";
Sales.Common.CrmSoapServiceProxy.ObjectModel.Opportunity.entityTypeCode = 3;
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm.systemFormIdAttributeName = "id";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm.entityLogicalName = "systemform";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemForm.entityTypeCode = 1030;
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.firstNameAttributeName = "firstname";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.lastNameAttributeName = "lastname";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.fullNameAttributeName = "fullname";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.systemUserIdAttributeName = "systemuserid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.internalEmailAddressAttributeName = "internalemailaddress";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.personalEmailAddressAttributeName = "personalemailaddress";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.titleAttributeName = "title";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.yammerEmailAddressAttributeName = "yammeremailaddress";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.yammerUserIdAttributeName = "yammeruserid";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.entityLogicalName = "systemuser";
Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.entityTypeCode = 8