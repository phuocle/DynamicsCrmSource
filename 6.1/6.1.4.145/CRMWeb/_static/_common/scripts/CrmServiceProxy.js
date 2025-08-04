Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common');

Microsoft.Crm.Client.Core.Storage.Common.ISettings = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ISettings.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.ISettings');


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICallerOriginProvider = function() {}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICallerOriginProvider.registerInterface('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICallerOriginProvider');


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService = function() {}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService.registerInterface('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService');


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService(serverUri, authenticationManager, callerOriginProvider) {
    this.$V_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(serverUri, 'serverUri');
    this.$J_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings();
    this.$B_0 = authenticationManager;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(authenticationManager)) {
        var $$t_5 = this;
        this.$B_0.add_onAuthenticated(function($p1_0, $p1_1) {
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($$t_5.$G_0)) {
                $$t_5.$G_0.resolve(null);
                $$t_5.$G_0 = null;
            }
        });
    }
    this.$P_0 = 0;
    this.$H_0 = callerOriginProvider;
    this.$L_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.$15(serverUri);
    this.$8_0 = this.$L_0 + '/XRMServices/2011/Organization.svc/web';
    this.$i_0 = this.$L_0 + '/AppWebServices/ApplicationMetadataService.asmx/';
    this.$U_0 = this.$L_0 + '/AppWebServices/ProcessControl.asmx/';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.removeNilNodes = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$removeNilNodes(soapResult) {
    return soapResult.replace(new RegExp('\\<[\\w+:]+ i:nil=\"true\"( xmlns:\\w+=\"[\\w:\\/.]+\")?\\ ?/>', 'g'), Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$q = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_$q() {
    return '<d:string>LogicalName</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$Z = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_$Z() {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$q() + '<d:string>Attributes</d:string>' + '<d:string>DisplayCollectionName</d:string>' + '<d:string>DisplayName</d:string>' + '<d:string>IsActivity</d:string>' + '<d:string>IsActivityParty</d:string>' + '<d:string>IsChildEntity</d:string>' + '<d:string>IsConnectionsEnabled</d:string>' + '<d:string>IsCustomEntity</d:string>' + '<d:string>IsCustomizable</d:string>' + '<d:string>IsEnabledForCharts</d:string>' + '<d:string>IsImportable</d:string>' + '<d:string>IsMailMergeEnabled</d:string>' + '<d:string>IsReadOnlyInMobileClient</d:string>' + '<d:string>IsVisibleInMobileClient</d:string>' + '<d:string>IsValidForAdvancedFind</d:string>' + '<d:string>ManyToOneRelationships</d:string>' + '<d:string>ObjectTypeCode</d:string>' + '<d:string>PrimaryIdAttribute</d:string>' + '<d:string>IsStateModelAware</d:string>' + '<d:string>EnforceStateTransitions</d:string>' + '<d:string>PrimaryNameAttribute</d:string>' + '<d:string>Privileges</d:string>' + '<d:string>IsValidForQueue</d:string>' + '<d:string>ActivityTypeMask</d:string>' + '<d:string>OwnershipType</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$j = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_$j() {
    return '<d:string>AttributeType</d:string><d:string>DefaultFormValue</d:string><d:string>DefaultValue</d:string><d:string>DisplayName</d:string><d:string>EntityLogicalName</d:string><d:string>Format</d:string><d:string>FormatName</d:string><d:string>IsSecured</d:string><d:string>IsValidForCreate</d:string><d:string>IsValidForRead</d:string><d:string>IsValidForUpdate</d:string><d:string>LogicalName</d:string><d:string>MaxLength</d:string><d:string>MaxValue</d:string><d:string>MinValue</d:string><d:string>OptionSet</d:string><d:string>Precision</d:string><d:string>PrecisionSource</d:string><d:string>RequiredLevel</d:string><d:string>Targets</d:string><d:string>AttributeOf</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.$15 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$15($p0) {
    if ($p0.substring($p0.length - 1, $p0.length) === '/') {
        return $p0.substring(0, $p0.length - 1);
    }
    return $p0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.prototype = {
    $L_0: null,
    $8_0: null,
    $i_0: null,
    $U_0: null,
    $G_0: null,
    $B_0: null,
    $H_0: null,
    $P_0: 0,
    $J_0: null,
    
    get_serverUrl: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_serverUrl() {
        return this.$L_0;
    },
    
    get_organizationWebEndPoint: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_organizationWebEndPoint() {
        return this.$8_0;
    },
    
    get_applicationMetadataEndPoint: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_applicationMetadataEndPoint() {
        return this.$i_0;
    },
    
    get_settings: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_settings() {
        return this.$J_0;
    },
    set_settings: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$set_settings(value) {
        this.$J_0 = value;
        return value;
    },
    
    get_userLanguageCode: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_userLanguageCode() {
        return this.$P_0;
    },
    set_userLanguageCode: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$set_userLanguageCode(value) {
        this.$P_0 = value;
        return value;
    },
    
    get_clientVersion: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$get_clientVersion() {
        return this.$V_0;
    },
    
    execute: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$execute(request, doAuthentication) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.DataApi.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1;
        var $v_2;
        var $v_3;
        if (Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.isInstanceOfType(request)) {
            $v_3 = this.$L_0 + Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.scriptErrorRelativeWebEndpointUrl;
            $v_1 = (request).requestBody();
            $v_2 = Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ScriptErrorRequest.scriptErrorSendReportSoapAction;
        }
        else {
            $v_3 = this.$8_0;
            $v_1 = this.$I_0(request.get_name(), request.get_name() + 'Request', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.parametersToCrmSoap(request), 'b', request.get_xmlNamespace());
            $v_2 = 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute';
        }
        var $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap($v_3, request.get_name(), $v_1, $v_2);
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(doAuthentication)) {
            $v_4.doAuthentication = doAuthentication;
        }
        var $$t_9 = this, $$t_A = this;
        this.$F_0($v_4).then(function($p1_0) {
            $v_0.resolve(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$6(request.get_name(), $p1_0, request));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    retrieve: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieve(identifier, columnSet, relatedEntitiesQuery) {
        var $v_0 = 'Retrieve';
        var $v_1 = this.$I_0($v_0, $v_0 + 'Request', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', identifier, 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ColumnSet', columnSet, -1, 'a:ColumnSet') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RelatedEntitiesQuery', relatedEntitiesQuery, -1, 'a:RelationshipQueryCollection'));
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_8 = this, $$t_9 = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, $v_0, $v_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute')).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse($p1_0, columnSet, relatedEntitiesQuery));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    create: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$create(entity, suppressDuplicateDetection) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_5 = this, $$t_6 = this;
        this.execute(new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest(entity, suppressDuplicateDetection)).then(function($p1_0) {
            entity.resetChanges();
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    update: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$update(entity, suppressDuplicateDetection) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.DataApi.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_5 = this, $$t_6 = this;
        this.execute(new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest(entity, suppressDuplicateDetection)).then(function($p1_0) {
            entity.resetChanges();
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    deleteEntity: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$deleteEntity(identifier) {
        var $v_0 = 'Delete';
        var $v_1 = this.$x_0($v_0, '<entityName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(identifier.LogicalName) + '</entityName>' + '<id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(identifier.Id.toString()) + '</id>');
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, $v_0, $v_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Delete')).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    retrieveMetadataChanges: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieveMetadataChanges(clientVersionStamp, languageCode) {
        var $v_0 = this.$I_0('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', '<a:KeyValuePairOfstringanyType><b:key>ClientVersionStamp</b:key>' + ((!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(clientVersionStamp)) ? ('<b:value i:type=\"c:string\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(clientVersionStamp) + '</b:value>') : '<b:value i:nil=\"true\" />') + '</a:KeyValuePairOfstringanyType>' + '<a:KeyValuePairOfstringanyType>' + '<b:key>DeletedMetadataFilters</b:key>' + '<b:value i:type=\"c:DeletedMetadataFilters\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\">Entity Attribute Relationship Label OptionSet</b:value>' + '</a:KeyValuePairOfstringanyType>' + '<a:KeyValuePairOfstringanyType>' + '<b:key>Query</b:key>' + '<b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\">' + '<c:Criteria>' + '<c:Conditions>' + '<c:MetadataConditionExpression>' + '<c:ConditionOperator>Equals</c:ConditionOperator>' + '<c:PropertyName>IsVisibleInMobileClient</c:PropertyName>' + '<c:Value i:type=\"d:boolean\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">true</c:Value>' + '</c:MetadataConditionExpression>' + '</c:Conditions>' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$Z() + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery>' + '<c:Criteria>' + '<c:Conditions />' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$j() + '</c:PropertyNames>' + '</c:Properties>' + '</c:AttributeQuery>' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>');
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, 'RetrieveMetadataChanges', $v_0, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute')).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveMultipleEntityMetadata: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieveMultipleEntityMetadata(languageCode, columnSet) {
        var $v_0;
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(columnSet) || Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(columnSet)) {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$Z();
        }
        else {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$q();
            for (var $$arr_3 = (columnSet).get_columns(), $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_3 = $$arr_3[$$idx_5];
                if ($v_3.toLowerCase() === 'logicalname') {
                    continue;
                }
                $v_0 += '<d:string>' + $v_3 + '</d:string>';
            }
        }
        var $v_1 = this.$I_0('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\"><c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>IsVisibleInMobileClient</c:PropertyName><c:Value i:type=\"d:boolean\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">true</c:Value></c:MetadataConditionExpression></c:Conditions><c:FilterOperator>And</c:FilterOperator><c:Filters /></c:Criteria><c:Properties><c:AllProperties>false</c:AllProperties><c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + $v_0 + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery i:nil=\"true\" />' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>');
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_B = this, $$t_C = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, 'RetrieveMetadataChanges', $v_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute')).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    retrieveEntityMetadata: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieveEntityMetadata(entityLogicalName, languageCode) {
        var $v_0 = this.$I_0('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\"><c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityLogicalName) + '</c:Value>' + '</c:MetadataConditionExpression>' + '</c:Conditions>' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$Z() + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery i:nil=\"true\" />' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>');
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, 'RetrieveMetadataChanges', $v_0, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute')).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveMultipleAttributeMetadata: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieveMultipleAttributeMetadata(query, languageCode) {
        var $v_0 = '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\"><c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>IsVisibleInMobileClient</c:PropertyName><c:Value i:type=\"d:boolean\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">true</c:Value></c:MetadataConditionExpression><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(query.get_entityLogicalName()) + '</c:Value>' + '</c:MetadataConditionExpression>' + '</c:Conditions>' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:string>Attributes</d:string>' + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery>' + '<c:Criteria>';
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(query.get_attributeNames())) {
            $v_0 += '<c:Conditions />';
        }
        else {
            $v_0 += '<c:Conditions>';
            for (var $$arr_3 = query.get_attributeNames(), $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_2 = $$arr_3[$$idx_5];
                $v_0 += '<c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_2) + '</c:Value>' + '</c:MetadataConditionExpression>';
            }
            $v_0 += '</c:Conditions>';
        }
        $v_0 += '<c:FilterOperator>Or</c:FilterOperator><c:Filters /></c:Criteria><c:Properties><c:AllProperties>false</c:AllProperties><c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$j() + '</c:PropertyNames>' + '</c:Properties>' + '</c:AttributeQuery>' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>';
        $v_0 = this.$I_0('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', $v_0);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_A = this, $$t_B = this;
        this.$F_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap(this.$8_0, 'RetrieveMetadataChanges', $v_0, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute')).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveNavigationEntities: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$retrieveNavigationEntities(currentEntityId, referencedEntityLogicalName, referencingEntityLogicalName, referencingEntityAttributeName) {
        var $v_0 = this.$U_0 + 'GetForwardNavigationEntities';
        var $v_1 = JSON.stringify({ currentEntityId: currentEntityId, referencedEntityLogicalName: referencedEntityLogicalName, referencingEntityLogicalName: referencingEntityLogicalName, referencingEntityAttributeName: referencingEntityAttributeName });
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_9 = this, $$t_A = this;
        this.$c_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForJson($v_0, $v_1)).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    changeProcessAndStage: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$changeProcessAndStage(currentEntityId, currentEntityLogicalName, newProcessId, newStageId) {
        var $v_0 = this.$U_0 + 'ChangeProcessAndStage';
        var $v_1 = JSON.stringify({ currentEntityId: currentEntityId, currentEntityTypeName: currentEntityLogicalName, newProcessId: newProcessId, newStageId: newStageId });
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_9 = this, $$t_A = this;
        this.$c_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForJson($v_0, $v_1)).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    createNavigationEntity: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$createNavigationEntity(sourceEntityLogicalName, sourceEntityId, targetEntityLogicalName, targetEntityAttribute) {
        var $v_0 = this.$U_0 + 'CreateForwardNavigationEntity';
        var $v_1 = JSON.stringify({ sourceEntityLogicalName: sourceEntityLogicalName, sourceEntityId: sourceEntityId.toString(), targetEntityLogicalName: targetEntityLogicalName, targetEntityAttributeName: targetEntityAttribute });
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_9 = this, $$t_A = this;
        this.$c_0(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForJson($v_0, $v_1)).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    $I_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$I_0($p0, $p1, $p2, $p3, $p4) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Utils.ExceptionHelpers.throwOnAssert((Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p3) && Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p4)) || (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p3) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p4)), 'The namespace alias and namespace need to be set together');
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p3)) {
            $p3 = 'a';
        }
        var $v_0 = '<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><request i:type=\"' + $p3 + ':' + $p1 + '\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\"';
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p4)) {
            $v_0 += ' xmlns:' + $p3 + '=\"' + $p4 + '\"';
        }
        $v_0 += '>';
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p2)) {
            $v_0 += '<a:Parameters i:nil=\"true\" />';
        }
        else {
            $v_0 += '<a:Parameters xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">' + $p2 + '</a:Parameters>';
        }
        $v_0 += '<a:RequestId i:nil=\"true\" /><a:RequestName>' + $p0 + '</a:RequestName>' + '</request>' + '</Execute>';
        return this.$k_0($v_0);
    },
    
    $x_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$x_0($p0, $p1) {
        var $v_0 = '<' + $p0 + ' xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\">' + $p1 + '</' + $p0 + '>';
        return this.$k_0($v_0);
    },
    
    $k_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$k_0($p0) {
        return '<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Header>' + this.$13_0() + '</s:Header>' + '<s:Body>' + $p0 + '</s:Body>' + '</s:Envelope>';
    },
    
    $13_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$13_0() {
        var $v_0 = this.$14_0();
        var $v_1 = this.$17_0();
        var $v_2 = this.$11_0();
        return $v_0 + $v_1 + $v_2;
    },
    
    $14_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$14_0() {
        if (this.$P_0 > 0) {
            return '<LanguageCodeOverride xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + this.$P_0 + '</LanguageCodeOverride>';
        }
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    },
    
    $17_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$17_0() {
        return '<SdkClientVersion xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + this.$V_0 + '</SdkClientVersion>';
    },
    
    $11_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$11_0() {
        var $v_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$H_0)) ? this.$H_0.get_uniqueId() : Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
            return '<CrmMobileClientUniqueId xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0) + '</CrmMobileClientUniqueId>';
        }
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    },
    
    $c_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$c_0($p0) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.$m_0($p0).then(function($p1_0) {
            var $v_1 = $p1_0;
            if ($v_1.indexOf('<!DOCTYPE html') > -1) {
                $v_0.reject(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.createFromHtml($v_1));
            }
            else {
                try {
                    $v_0.resolve($P_CRM.parseJSON($v_1));
                }
                catch ($$e_4) {
                    $v_0.reject(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(new XMLHttpRequest(), Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty, 'Crm Service Error: Response data type unknown'));
                }
            }
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $F_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$F_0($p0) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_4 = this, $$t_5 = this;
        this.$m_0($p0).then(function($p1_0) {
            $v_0.resolve(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($p1_0));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $m_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$m_0($p0) {
        $P_CRM.support.cors = true;
        var $v_0 = new jQueryAjaxOptions();
        $v_0.cache = false;
        $v_0.type = 'POST';
        $v_0.data = $p0.data;
        $v_0.contentType = $p0.contentType;
        $v_0.dataType = $p0.dataType;
        $v_0.url = $p0.endPointUrl;
        var $$t_A = this;
        $v_0.beforeSend = function($p1_0) {
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.soapAction)) {
                $p1_0.setRequestHeader('SOAPAction', $p0.soapAction);
            }
            if (!$p0.doAuthentication && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($$t_A.$B_0)) {
                $$t_A.$B_0.updateRequestForAuthentication($p1_0);
            }
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($$t_A.$H_0)) {
                $$t_A.$H_0.updateRequestForCallerOriginUniqueId($p1_0);
                $$t_A.$H_0.updateRequestForCallerOriginVersion($p1_0);
            }
        };
        var $v_1 = {};
        $v_1['cache-control'] = 'no-cache';
        $v_1['ClientAppName'] = 'MobileClient';
        $v_1['ClientAppVersion'] = this.$V_0;
        $v_0.headers = $v_1;
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_3 = new Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch('CrmSoapServiceCall');
        $v_3.start();
        var $$t_B = this;
        $v_2.always(function() {
            $v_3.stop();
            if ($v_3.stopMarker) {
                $v_3.setParameter($p0.soapAction);
                if ($p0.soapAction === 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute') {
                    try {
                        $v_3.setParameter(new RegExp('RequestName>(\\w+)</').exec($p0.data)[1]);
                    }
                    catch ($$e_9) {
                    }
                }
                else {
                    $v_3.setParameter($v_0.url);
                }
            }
        });
        var $v_4 = null;
        if (this.$J_0 && this.$J_0.$T_0) {
            $v_4 = this.$J_0.$T_0.getWebServiceCallRetryPolicy($p0.endPointUrl);
        }
        var $v_5 = ($v_4) ? $v_4.TotalRetryCount : 0;
        var $v_6 = ($v_4) ? $v_4.RetryWaitIntervalMilliseconds : 0;
        this.$M_0($v_0, $v_2, $v_5, $v_6, 0, 0, $p0.doAuthentication);
        return $v_2.promise();
    },
    
    $M_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        if ($p6 && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$B_0)) {
            switch (this.$B_0.get_status()) {
                case 0:
                    this.$l_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
                    return;
                case 2:
                    $p1.reject(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(new XMLHttpRequest(), Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty, 'Crm Service Error: Authentication timed out'));
                    return;
            }
        }
        var $$t_B = this, $$t_C = this;
        $P_CRM.ajax($p0).success(function($p1_0) {
            if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1_0)) {
                $p1.reject(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(new XMLHttpRequest(), Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty, 'Crm Service Error: Response data null'));
            }
            else {
                $p1.resolve($p1_0);
            }
        }).error(function($p1_0, $p1_1, $p1_2) {
            if ($p1_0.status === 401 && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($$t_C.$B_0)) {
                if ($p6) {
                    $$t_C.$l_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
                    $$t_C.$B_0.refreshAuthToken();
                }
                else {
                    $p1.reject(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse($p1_0, $p1_1, 'Crm Service Error: Not Authorized'));
                }
            }
            else if ($p1_0.status === 400 && $p4 < 5) {
                $$t_C.$f_0($p0.url, $p1_0.status, $p1_2.toString(), 5 - $p4);
                ++$p4;
                $$t_C.$M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
            }
            else if ($p1_0.status === 503 && $p2 > 0) {
                $$t_C.$f_0($p0.url, $p1_0.status, $p1_2.toString(), $p2);
                --$p2;
                window.setTimeout(function() {
                    $$t_C.$M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
                }, $p3);
            }
            else if (!$p1_0.status && $p5 < 1) {
                $$t_C.$f_0($p0.url, $p1_0.status, $p1_2.toString(), 1 - $p5);
                ++$p5;
                $$t_C.$M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
            }
            else {
                Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.logInfo('CrmSoapService_ExecuteRequestWithRetry_Failure', Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.storage, String.format('Response: {0}', $p1_0.responseText));
                $p1.reject(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse($p1_0, $p1_1, $p1_2.toString()));
            }
        });
    },
    
    $f_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$f_0($p0, $p1, $p2, $p3) {
    },
    
    $l_0: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService$$l_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$G_0)) {
            this.$G_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        }
        var $$t_7 = this;
        this.$G_0.done(function() {
            $$t_7.$M_0($p0, $p1, $p2, $p3, $p4, $p5, $p6);
        });
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService_RequestOptions() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService_RequestOptions$createForSoap($p0, $p1, $p2, $p3) {
    var $v_0 = 'xml';
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.create($p0, $p2, 'text/xml; charset=utf-8', $v_0, $p3, $p1);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.createForJson = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService_RequestOptions$createForJson($p0, $p1) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.create($p0, $p1, 'application/json; charset=utf-8', 'text');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.create = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapService_RequestOptions$create($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions();
    $v_0.name = $p5;
    $v_0.endPointUrl = $p0;
    $v_0.data = $p1;
    $v_0.contentType = $p2;
    $v_0.dataType = $p3;
    $v_0.soapAction = $p4;
    $v_0.name = $p5;
    $v_0.doAuthentication = true;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.prototype = {
    endPointUrl: null,
    name: null,
    data: null,
    contentType: null,
    dataType: null,
    soapAction: null,
    doAuthentication: false
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmWebServiceSettings() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings.prototype = {
    $T_0: null,
    
    get_organizationSettings: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmWebServiceSettings$get_organizationSettings() {
        return this.$T_0;
    },
    set_organizationSettings: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmWebServiceSettings$set_organizationSettings(value) {
        this.$T_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_AttributeMetadataSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$1C = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_AttributeMetadataSerializer$$1C($p0) {
    var $v_0 = new (Microsoft.Dynamics.Client.Core.Framework.CallbackSafeArray.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0)) {
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$6($p0.get_item($v_1).get_domParserElement());
            if ($v_2) {
                $v_0.add($v_2);
            }
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_AttributeMetadataSerializer$$6($p0) {
    try {
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = null;
        var $v_4 = -1;
        var $v_5 = -1;
        var $v_6 = false;
        var $v_7 = false;
        var $v_8 = false;
        var $v_9 = false;
        var $v_A = 0;
        var $v_B = 0;
        var $v_C = 0;
        var $v_D = 0;
        var $v_E = 2;
        var $v_F = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
        var $v_G = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
        var $v_H = Microsoft.Dynamics.Client.Core.Framework.Undefined.int32Value;
        var $v_I = Microsoft.Dynamics.Client.Core.Framework.Undefined.booleanValue;
        var $v_J = false;
        var $v_K = null;
        var $v_L = null;
        var $v_M = null;
        for (var $v_O = 0, $v_P = $p0.childNodes.length; $v_O < $v_P; $v_O++) {
            var $v_Q = $p0.childNodes[$v_O];
            if ($v_Q.getAttribute('i:nil') === 'true' || !$v_Q.firstChild) {
                continue;
            }
            if ($v_Q.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
                var $v_R = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_Q.nodeName);
                switch ($v_R) {
                    case 'MetadataId':
                        $v_0 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_Q.firstChild.nodeValue);
                        break;
                    case 'LogicalName':
                        $v_1 = $v_Q.firstChild.nodeValue;
                        break;
                    case 'EntityLogicalName':
                        $v_2 = $v_Q.firstChild.nodeValue;
                        break;
                    case 'DisplayName':
                        $v_3 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_Q);
                        break;
                    case 'AttributeType':
                        $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$18($v_Q.firstChild.nodeValue);
                        break;
                    case 'RequiredLevel':
                        $v_5 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$1D($v_Q.childNodes[2].firstChild.nodeValue);
                        break;
                    case 'IsSecured':
                        $v_6 = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'IsValidForCreate':
                        $v_7 = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'IsValidForRead':
                        $v_8 = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'IsValidForUpdate':
                        $v_9 = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'MaxLength':
                        $v_A = parseInt($v_Q.firstChild.nodeValue);
                        break;
                    case 'MinValue':
                        $v_B = parseFloat($v_Q.firstChild.nodeValue);
                        break;
                    case 'MaxValue':
                        $v_C = parseFloat($v_Q.firstChild.nodeValue);
                        break;
                    case 'Precision':
                        $v_D = parseInt($v_Q.firstChild.nodeValue);
                        break;
                    case 'PrecisionSource':
                        $v_E = parseInt($v_Q.firstChild.nodeValue);
                        break;
                    case 'Format':
                        $v_F = $v_Q.firstChild.nodeValue;
                        break;
                    case 'FormatName':
                        if (!$v_Q.firstChild.firstChild) {
                            continue;
                        }
                        $v_G = $v_Q.firstChild.firstChild.nodeValue;
                        break;
                    case 'DefaultFormValue':
                        $v_H = parseInt($v_Q.firstChild.nodeValue);
                        break;
                    case 'DefaultValue':
                        $v_I = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'OptionSet':
                        $v_K = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$6($v_Q);
                        break;
                    case 'IsBaseCurrency':
                        $v_J = Boolean.parse($v_Q.firstChild.nodeValue);
                        break;
                    case 'Targets':
                        var $v_S = $v_Q.childNodes;
                        var $v_T = $v_S.length;
                        if ($v_T > 0) {
                            var $v_U = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
                            for (var $v_V = 0; $v_V < $v_T; $v_V++) {
                                $v_U.add($v_S[$v_V].firstChild.nodeValue);
                            }
                            $v_L = $v_U.toArray();
                        }
                        break;
                    case 'AttributeOf':
                        $v_M = $v_Q.firstChild.nodeValue;
                        break;
                }
            }
        }
        var $v_N = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_G)) ? $v_G : $v_F;
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata($v_1, $v_0, $v_2, $v_4, $v_3, $v_6, $v_7, $v_8, $v_9, $v_5, $v_A, $v_B, $v_C, $v_D, $v_E, $v_N, $v_H, $v_I, $v_K, $v_J, $v_L, $v_M);
    }
    catch ($v_W) {
        Microsoft.Dynamics.Client.Core.Framework.DynamicsTrace.logInfo('AttributeMetadataSerializer', 1005, String.format('Error extracting attribute metadata from SOAP response. Exception: {0}', $v_W.toString()));
        return null;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$18 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_AttributeMetadataSerializer$$18($p0) {
    switch ($p0) {
        case 'Boolean':
            return 0;
        case 'Customer':
            return 1;
        case 'DateTime':
            return 2;
        case 'Integer':
            return 5;
        case 'Lookup':
            return 6;
        case 'Memo':
            return 7;
        case 'Money':
            return 8;
        case 'Owner':
            return 9;
        case 'Picklist':
            return 11;
        case 'String':
            return 14;
        case 'Status':
            return 13;
        case 'Uniqueidentifier':
            return 15;
        case 'BigInt':
            return 18;
        case 'Virtual':
            return 17;
        case 'State':
            return 12;
        case 'Double':
            return 4;
        case 'ManagedProperty':
            return 19;
        case 'Decimal':
            return 3;
        case 'PartyList':
            return 10;
        case 'EntityName':
            return 20;
        default:
            return -1;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$1D = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_AttributeMetadataSerializer$$1D($p0) {
    switch ($p0) {
        case 'None':
            return 0;
        case 'ApplicationRequired':
            return 2;
        case 'Recommended':
            return 3;
        case 'SystemRequired':
            return 1;
        default:
            return -1;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BooleanValueSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer.loadValueFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BooleanValueSerializer$loadValueFromCrmSoap($p0) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.nodeName.toLowerCase() === 'a:value') {
            return Boolean.parse($v_2.firstChild.nodeValue);
        }
    }
    return false;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationArraySerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationArraySerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = new Array(0);
    var $v_1 = xml.selectNodes('b:BusinessNotification');
    if ($v_1) {
        for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
            var $v_3 = $v_1.get_item($v_2);
            $v_0[$v_0.length] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationSerializer.loadFromCrmSoap($v_3);
        }
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationParameterSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationParameterSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationParameterSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationParameterSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = 0;
    var $v_1 = xml.selectSingleNode('b:ParameterType');
    if ($v_1) {
        $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameterType, $v_1.get_innerText());
    }
    var $v_2 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    var $v_3 = xml.selectSingleNode('b:Data');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationParameter($v_0, $v_2);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_BusinessNotificationSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = 0;
    var $v_1 = xml.selectSingleNode('b:Severity');
    if ($v_1) {
        $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotificationSeverity, $v_1.get_innerText());
    }
    var $v_2 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    var $v_3 = xml.selectSingleNode('b:Message');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    var $v_4 = new Array(0);
    var $v_5 = xml.selectNodes('b:Parameters');
    for (var $v_6 = 0; $v_6 < $v_5.get_count(); $v_6++) {
        var $v_7 = $v_5.get_item($v_6);
        $v_4[$v_4.length] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationParameterSerializer.loadFromCrmSoap($v_7);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.BusinessNotification($v_0, $v_2, $v_4);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ColumnSetSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ColumnSetSerializer$toCrmSoap(columnSet) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<a:AllColumns i:type=\"c:boolean\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">' + ((Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(columnSet)) ? 'true' : 'false') + '</a:AllColumns>');
    if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(columnSet)) {
        $v_0.append('<a:Columns />');
    }
    else if (Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType(columnSet)) {
        $v_0.append('<a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">');
        for (var $$arr_2 = (columnSet).get_columns(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            $v_0.append('<b:string>' + $v_1 + '</b:string>');
        }
        $v_0.append('</a:Columns>');
    }
    else {
        throw Error.argument('columnSet', 'XML serialization for this type of column set not supported');
    }
    return $v_0.toString();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ColumnSetSerializer$loadFromCrmSoap(data) {
    var $v_0 = data.selectSingleNode('a:AllColumns');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
        if (Boolean.parse($v_0.get_innerText())) {
            return Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
        }
    }
    data.addNamespace('sa', 'http://schemas.microsoft.com/2003/10/Serialization/Arrays');
    var $v_1 = data.selectNodes('a:Columns/sa:string');
    var $v_2 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(String))();
    for (var $v_3 = 0; $v_3 < $v_1.get_count(); $v_3++) {
        $v_2.add($v_1.get_item($v_3).get_innerText());
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_2.toArray());
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$Y = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$get_$Y() {
    return new Date(0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$1H = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$get_$1H() {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$h || (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$h = new RegExp('[Z,T]', 'ig'));
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$y = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$get_$y() {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$X || (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$X = new RegExp('[-]', 'ig'));
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$$6($p0) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.firstChild) || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p0.firstChild.nodeValue)) {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$Y();
    }
    var $v_0 = $p0.firstChild.nodeValue.replace(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$1H(), ' ').replace(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$y(), '/') + ' UTC';
    return new Date(Date.parse($v_0));
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$toCrmSoap(dateTime) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(dateTime) || dateTime === Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$Y()) {
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
    return dateTime.format('s');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.toCrmDataXml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_CrmDateTimeSerializer$toCrmDataXml(dateTime) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(dateTime) || dateTime === Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.get_$Y()) {
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
    return dateTime.format('s');
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityCollectionSerializer$loadFromCrmSoap(xml, query) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$e(xml.get_domParserElement(), query);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$e = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityCollectionSerializer$$e($p0, $p1) {
    var $v_0 = new Microsoft.Dynamics.Client.Core.Framework.PerformanceStopwatch('EntityCollectionSerializer');
    $v_0.start();
    var $v_1 = new Array(0);
    var $v_2 = false;
    var $v_3 = 0;
    var $v_4 = false;
    var $v_5 = null;
    for (var $v_6 = 0, $v_7 = $p0.childNodes.length; $v_6 < $v_7; $v_6++) {
        var $v_8 = $p0.childNodes[$v_6];
        if ($v_8.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_9 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_8.nodeName);
            switch ($v_9) {
                case 'Entities':
                    $v_5 = $v_8;
                    break;
                case 'MoreRecords':
                    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_8.firstChild.nodeValue)) {
                        $v_2 = Boolean.parse($v_8.firstChild.nodeValue);
                    }
                    break;
                case 'TotalRecordCount':
                    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_8.firstChild.nodeValue)) {
                        $v_3 = Number.parseInvariant($v_8.firstChild.nodeValue);
                    }
                    break;
                case 'TotalRecordCountLimitExceeded':
                    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_8.firstChild.nodeValue)) {
                        $v_4 = Boolean.parse($v_8.firstChild.nodeValue);
                    }
                    break;
            }
        }
    }
    if ($v_5) {
        var $v_A = 0;
        for (var $v_B = 0, $v_C = $v_5.childNodes.length; $v_B < $v_C; $v_B++) {
            var $v_D = $v_5.childNodes[$v_B];
            if ($v_D.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_D.nodeName) === 'Entity') {
                $v_1[$v_A] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoapNode($v_D);
                $v_A++;
            }
        }
    }
    $v_0.stop();
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_1, $v_2, $v_3, $v_4, $p1);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$u = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityCollectionSerializer$$u($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<a:Entities>');
    for (var $$arr_2 = $p0.get_entities(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:Entity>');
        $v_0.append(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.toCrmSoap($v_1, false));
        $v_0.append('</a:Entity>');
    }
    $v_0.append('</a:Entities>');
    return $v_0.toString();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$1F = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityCollectionSerializer$$1F($p0) {
    var $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    if (!$p0.get_count()) {
        return $v_0;
    }
    var $v_1 = $p0.get_entities()[0].get_actionableIdentifier();
    var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.LogicalName);
    for (var $$arr_4 = $p0.get_entities(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6];
        for (var $$arr_8 = $v_3.get_changedFieldNames().toArray(), $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_4 = $$arr_8[$$idx_A];
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace($v_4) && $v_4 === 'partyid' && ($v_3.get_fieldTypes()[$v_4]) === 6) {
                $v_0 += '<' + $v_2 + '>';
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$t($v_4, $v_3.getValue($v_4), $v_3.get_fieldTypes()[$v_4]);
                $v_0 += '</' + $v_2 + '>';
                break;
            }
        }
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityMetadataCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataCollectionSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityMetadataCollectionSerializer$$6($p0) {
    var $v_0 = $p0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ServerVersionStamp\']/b:value').get_innerText();
    $p0.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
    var $v_1 = $p0.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'EntityMetadata\']/b:value/a:EntityMetadata');
    var $v_2 = new Array(0);
    if ($v_1) {
        for (var $v_5 = 0; $v_5 < $v_1.get_count(); $v_5++) {
            $v_2[$v_5] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer.$6($v_1.get_item($v_5).get_domParserElement());
        }
    }
    $p0.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata/Query');
    $p0.addNamespace('d', 'http://schemas.microsoft.com/2003/10/Serialization/Arrays');
    var $v_3 = $p0.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'DeletedMetadata\']/b:value/c:KeyValuePairOfDeletedMetadataFiltersArrayOfguidPlUv_PKtF[b:key=\'Attribute\']/b:value/d:guid');
    var $v_4 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Dynamics.Client.Core.Framework.Guid))();
    for (var $v_6 = 0; $v_6 < $v_3.get_count(); $v_6++) {
        $v_4.add(new Microsoft.Dynamics.Client.Core.Framework.Guid($v_3.get_item($v_6).get_innerText()));
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection($v_2, $v_0, $v_4);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityMetadataSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityMetadataSerializer$$6($p0) {
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
    var $v_1 = null;
    var $v_2 = null;
    var $v_3 = true;
    var $v_4 = false;
    var $v_5 = false;
    var $v_6 = null;
    var $v_7 = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
    var $v_8 = false;
    var $v_9 = true;
    var $v_A = -1;
    var $v_B = null;
    var $v_C = null;
    var $v_D = new Array(0);
    var $v_E = null;
    var $v_F = null;
    var $v_G = false;
    var $v_H = false;
    var $v_I = false;
    var $v_J = false;
    var $v_K = false;
    var $v_L = false;
    var $v_M = false;
    var $v_N = false;
    var $v_O = false;
    var $v_P = false;
    var $v_Q = false;
    var $v_R = 0;
    var $v_S = 0;
    var $v_T = null;
    for (var $v_U = 0, $v_V = $p0.childNodes.length; $v_U < $v_V; $v_U++) {
        var $v_W = $p0.childNodes[$v_U];
        if ($v_W.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
            if ($v_W.getAttribute('i:nil') === 'true' || !$v_W.firstChild) {
                continue;
            }
            var $v_X = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_W.nodeName);
            switch ($v_X) {
                case 'Attributes':
                    for (var $v_Y = 0, $v_Z = $v_W.childNodes.length; $v_Y < $v_Z; $v_Y++) {
                        var $v_a = $v_W.childNodes[$v_Y];
                        if ($v_a.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_a.nodeName) === 'AttributeMetadata') {
                            var $v_b = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$6($v_a);
                            if ($v_b) {
                                $v_0.add($v_b);
                            }
                        }
                    }
                    break;
                case 'DisplayCollectionName':
                    $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_W);
                    break;
                case 'DisplayName':
                    $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_W);
                    break;
                case 'HasChanged':
                    $v_3 = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsActivity':
                    $v_4 = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsChildEntity':
                    $v_5 = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsReadOnlyInMobileClient':
                    for (var $v_c = 0, $v_d = $v_W.childNodes.length; $v_c < $v_d; $v_c++) {
                        if ($v_W.childNodes[$v_c].namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_W.childNodes[$v_c].nodeName) === 'Value') {
                            $v_8 = Boolean.parse($v_W.childNodes[$v_c].firstChild.nodeValue);
                        }
                    }
                    break;
                case 'IsVisibleInMobileClient':
                    for (var $v_e = 0, $v_f = $v_W.childNodes.length; $v_e < $v_f; $v_e++) {
                        if ($v_W.childNodes[$v_e].namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_W.childNodes[$v_e].nodeName) === 'Value') {
                            $v_9 = Boolean.parse($v_W.childNodes[$v_e].firstChild.nodeValue);
                        }
                    }
                    break;
                case 'LogicalName':
                    $v_6 = $v_W.firstChild.nodeValue;
                    break;
                case 'MetadataId':
                    $v_7 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_W.firstChild.nodeValue);
                    break;
                case 'ManyToOneRelationships':
                    $v_T = $v_W;
                    break;
                case 'ObjectTypeCode':
                    $v_A = Number.parseInvariant($v_W.firstChild.nodeValue);
                    break;
                case 'PrimaryIdAttribute':
                    $v_B = $v_W.firstChild.nodeValue;
                    break;
                case 'PrimaryNameAttribute':
                    $v_C = $v_W.firstChild.nodeValue;
                    break;
                case 'Privileges':
                    $v_D = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SecurityPrivilegeMetadataCollectionSerializer.loadFromCrmSoap($v_W);
                    break;
                case 'IsValidForAdvancedFind':
                    $v_G = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsMailMergeEnabled':
                    $v_H = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer.loadValueFromCrmSoap($v_W);
                    break;
                case 'IsConnectionsEnabled':
                    $v_I = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer.loadValueFromCrmSoap($v_W);
                    break;
                case 'IsCustomizable':
                    $v_J = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer.loadValueFromCrmSoap($v_W);
                    break;
                case 'IsActivityParty':
                    $v_K = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsImportable':
                    $v_L = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsEnabledForCharts':
                    $v_M = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsCustomEntity':
                    $v_N = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsStateModelAware':
                    $v_O = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'EnforceStateTransitions':
                    $v_P = Boolean.parse($v_W.firstChild.nodeValue);
                    break;
                case 'IsValidForQueue':
                    for (var $v_g = 0, $v_h = $v_W.childNodes.length; $v_g < $v_h; $v_g++) {
                        if ($v_W.childNodes[$v_g].namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_W.childNodes[$v_g].nodeName) === 'Value') {
                            $v_Q = Boolean.parse($v_W.childNodes[$v_g].firstChild.nodeValue);
                        }
                    }
                    break;
                case 'ActivityTypeMask':
                    $v_R = Number.parseInvariant($v_W.firstChild.nodeValue);
                    break;
                case 'OwnershipType':
                    $v_S = Number.parseInvariant($v_W.firstChild.nodeValue);
                    break;
            }
        }
    }
    if ($v_5 && $v_T) {
        var $v_i = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer.$16($v_T);
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_i)) {
            $v_E = $v_i.get_key();
            $v_F = $v_i.get_value();
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata($v_7, $v_6, $v_1, $v_2, $v_A, $v_B, $v_C, $v_D, $v_0.toArray(), $v_8, $v_9, $v_3, $v_4, $v_5, $v_E, $v_F, $v_G, $v_H, $v_I, $v_J, $v_K, $v_L, $v_M, $v_N, $v_O, $v_P, $v_Q, $v_R, $v_S);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer.$16 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityMetadataSerializer$$16($p0) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_2.nodeName) === 'OneToManyRelationshipMetadata') {
            var $v_3 = false;
            var $v_4 = null;
            var $v_5 = null;
            for (var $v_6 = 0, $v_7 = $v_2.childNodes.length; $v_6 < $v_7; $v_6++) {
                var $v_8 = $v_2.childNodes[$v_6];
                if ($v_8.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && $v_8.firstChild) {
                    var $v_9 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_8.nodeName);
                    switch ($v_9) {
                        case 'SecurityTypes':
                            $v_3 = ($v_8.firstChild.nodeValue === 'ParentChild') ? true : false;
                            break;
                        case 'ReferencedEntity':
                            $v_4 = $v_8.firstChild.nodeValue;
                            break;
                        case 'ReferencingAttribute':
                            $v_5 = $v_8.firstChild.nodeValue;
                            break;
                    }
                }
            }
            if ($v_3) {
                return new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(String, String))($v_4, $v_5);
            }
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$loadFromCrmSoap(xml, relatedEntitiesQuery) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoapNode(xml.get_domParserElement(), relatedEntitiesQuery);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoapNode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$loadFromCrmSoapNode(xml, relatedEntitiesQuery) {
    if (!xml.childNodes.length) {
        return null;
    }
    var $v_0 = {};
    var $v_1 = {};
    var $v_2 = {};
    var $v_3 = {};
    var $v_4 = null;
    var $v_5 = null;
    var $v_6 = null;
    for (var $v_9 = 0, $v_A = xml.childNodes.length; $v_9 < $v_A; $v_9++) {
        var $v_B = xml.childNodes[$v_9];
        if ($v_B.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_C = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_B.nodeName);
            switch ($v_C) {
                case 'Id':
                    $v_4 = $v_B.firstChild.nodeValue;
                    break;
                case 'LogicalName':
                    $v_5 = $v_B.firstChild.nodeValue;
                    break;
                case 'RelatedEntities':
                    $v_6 = $v_B;
                    break;
            }
        }
    }
    var $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference($v_5, new Microsoft.Dynamics.Client.Core.Framework.Guid($v_4));
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1B(xml, $v_0, $v_1, $v_2);
    var $v_8 = null;
    if ($v_6) {
        $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$6($v_7, $v_6, relatedEntitiesQuery);
    }
    else {
        $v_8 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0));
    }
    if ($v_7.LogicalName === 'email') {
        if ((('safedescription') in $v_0) && (('description') in $v_0)) {
            $v_0['description'] = $v_0['safedescription'];
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_7, $v_0, $v_1, $v_2, $v_3, $v_8);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$toCrmSoap(entityRecord, includeEntityNode) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(includeEntityNode)) {
        includeEntityNode = true;
    }
    var $v_0 = entityRecord.get_actionableIdentifier();
    var $v_1 = ((includeEntityNode) ? String.format('<entity xmlns:a=\"{0}\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">', 'http://schemas.microsoft.com/xrm/2011/Contracts') : Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$z(entityRecord) + '<a:EntityState i:nil=\"true\"/>' + String.format('<a:FormattedValues xmlns:b=\"{0}\"/>', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') + (($v_0.Id === Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty()) ? Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty : '<a:Id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.Id.toString()) + '</a:Id>') + '<a:LogicalName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.LogicalName) + '</a:LogicalName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$u(entityRecord.get_relatedEntities()) + ((includeEntityNode) ? '</entity>' : Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    return $v_1;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.toCrmEntityDataXml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$toCrmEntityDataXml(entityRecord) {
    var $v_0 = entityRecord.get_actionableIdentifier();
    var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.LogicalName);
    var $v_2 = '<' + $v_1 + '>';
    for (var $$arr_4 = entityRecord.get_fieldNames(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6];
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace($v_3)) {
            $v_2 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$t($v_3, entityRecord.getValue($v_3), entityRecord.get_fieldTypes()[$v_3]);
        }
    }
    $v_2 += '</' + $v_1 + '>';
    return $v_2;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$0($p0, $p1, $p2, $p3, $p4) {
    if ($p2 !== -1) {
        $p3 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$10($p2);
    }
    else {
        $p2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$d($p3);
    }
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p4)) {
        $p4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$12($p2);
    }
    var $v_0 = '<a:KeyValuePairOfstringanyType>';
    $v_0 += '<b:key>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p0) + '</b:key>';
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1)) {
        $v_0 += '<b:value i:nil=\"true\" />';
    }
    else {
        $v_0 += '<b:value i:type=\"' + $p3 + '\"';
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p4)) {
            $v_0 += ' ' + $p4;
        }
        $v_0 += '>';
        switch ($p2) {
            case 1:
            case 6:
            case 9:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.toCrmSoap(($p1));
                break;
            case 2:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.toCrmSoap($p1);
                break;
            case 0:
                var $v_1;
                try {
                    $v_1 = (Boolean.isInstanceOfType($p1)) ? ($p1).toString() : (($p1).get_value() > 0).toString();
                }
                catch ($$e_7) {
                    $v_1 = ($p1.toString() === '1').toString();
                }
                $v_0 += $v_1;
                break;
            case 5:
                $v_0 += ($p1).toString();
                break;
            case 13:
            case 12:
            case 11:
                if (String.isInstanceOfType($p1)) {
                    $v_0 += '<a:Value>' + $p1 + '</a:Value>';
                }
                else {
                    var $v_2 = (Number.isInstanceOfType($p1)) ? ($p1) : ($p1).get_value();
                    $v_0 += '<a:Value>' + $v_2.toString() + '</a:Value>';
                }
                break;
            case 15:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1.toString());
                break;
            case 8:
                $v_0 += '<a:Value>' + ($p1).toString() + '</a:Value>';
                break;
            case 10:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$u($p1);
                break;
            case -1:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$w($p3, $p1);
                break;
            default:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1);
                break;
        }
        $v_0 += '</b:value>';
    }
    $v_0 += '</a:KeyValuePairOfstringanyType>';
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$a = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$a($p0, $p1) {
    var $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.toString($p0, $p1);
    return ($v_0.charAt(0)).toUpperCase() + $v_0.substr(1);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1E = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$1E($p0) {
    var $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0 += '<sa:string>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1) + '</sa:string>';
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$w = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$w($p0, $p1) {
    if ($p0 === 'a:FetchExpression') {
        return '<a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1) + '</a:Query>';
    }
    else if ($p0 === 'c:QueryByEntityNameDictionary') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QueryByEntityNameDictionarySerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:ColumnSet') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:Entity') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.toCrmSoap($p1, false);
    }
    else if ($p0 === 'a:OrganizationRequestCollection' || $p0 === 'c:OrganizationRequestCollection') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:ExecuteMultipleSettings' || $p0 === 'c:ExecuteMultipleSettings') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:RelationshipQueryCollection') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:TargetFieldType') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$a(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType, $p1);
    }
    else if ($p0 === 'a:Relationship') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:EntityReferenceCollection') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'sa:ArrayOfstring') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1E($p1);
    }
    else if ($p0 === 'a:RollupType') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$a(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RollupType, $p1);
    }
    else {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1);
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1B = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$1B($p0, $p1, $p2, $p3) {
    var $v_0 = null;
    var $v_1 = null;
    for (var $v_2 = 0, $v_3 = $p0.childNodes.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $p0.childNodes[$v_2];
        if ($v_4.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_5 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_4.nodeName);
            switch ($v_5) {
                case 'Attributes':
                    $v_0 = $v_4;
                    break;
                case 'FormattedValues':
                    $v_1 = $v_4;
                    break;
            }
        }
    }
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$19($v_0, $p1, $p2);
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1A($v_1, $p1, $p2, $p3);
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$19 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$19($p0, $p1, $p2) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_2.nodeName) === 'KeyValuePairOfstringanyType') {
            var $v_3 = null;
            var $v_4 = null;
            for (var $v_8 = 0, $v_9 = $v_2.childNodes.length; $v_8 < $v_9; $v_8++) {
                var $v_A = $v_2.childNodes[$v_8];
                if ($v_A.namespaceURI === 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') {
                    var $v_B = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_A.nodeName);
                    switch ($v_B) {
                        case 'key':
                            $v_3 = $v_A.firstChild.nodeValue;
                            break;
                        case 'value':
                            $v_4 = $v_A;
                            break;
                    }
                }
            }
            if (!$v_3 || !$v_4) {
                continue;
            }
            var $v_5 = $v_4.getAttribute('i:type');
            if (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$o($v_4, $v_5)) {
                continue;
            }
            var $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$d($v_5);
            var $v_7 = null;
            if ($v_6 === 21) {
                var $v_C = null;
                var $v_D = null;
                for (var $v_E = 0, $v_F = $v_4.childNodes.length; $v_E < $v_F; $v_E++) {
                    var $v_G = $v_4.childNodes[$v_E];
                    if ($v_G.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
                        var $v_H = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_G.nodeName);
                        switch ($v_H) {
                            case 'EntityLogicalName':
                                $v_C = $v_G.firstChild.nodeValue;
                                break;
                            case 'AttributeLogicalName':
                                $v_D = $v_G.firstChild.nodeValue;
                                break;
                            case 'Value':
                                $v_4 = $v_G;
                                break;
                        }
                    }
                }
                if (!$v_C || !$v_D || !$v_4) {
                    continue;
                }
                $v_5 = $v_4.getAttribute('i:type');
                if (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$o($v_4, $v_5)) {
                    continue;
                }
                $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$d($v_5);
                $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue($v_C, $v_D, $v_6);
            }
            if ($v_6 !== -1) {
                var $v_I = null;
                switch ($v_6) {
                    case 6:
                        $v_I = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoapNode($v_4);
                        break;
                    case 10:
                        $v_I = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$e($v_4, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
                        break;
                    case 2:
                        $v_I = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$6($v_4);
                        break;
                    case 15:
                        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            $v_I = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_4.firstChild.nodeValue);
                        }
                        else {
                            $v_I = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
                        }
                        break;
                    case 5:
                        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            $v_I = parseInt($v_4.firstChild.nodeValue);
                        }
                        break;
                    case 0:
                        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            var $v_J = Boolean.parse($v_4.firstChild.nodeValue);
                            if ($v_J) {
                                $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, 1, -1, null);
                            }
                            else {
                                $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, 0, -1, null);
                            }
                        }
                        break;
                    case 8:
                        $v_I = parseFloat(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$n($v_4));
                        break;
                    case 3:
                    case 4:
                        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            $v_I = parseFloat($v_4.firstChild.nodeValue);
                        }
                        break;
                    case 13:
                    case 12:
                    case 11:
                        $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, parseInt(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$n($v_4)), -1, null);
                        break;
                    default:
                        $v_I = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild)) ? $v_4.firstChild.nodeValue : null;
                        break;
                }
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_I)) {
                    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_7)) {
                        $v_7.set_value($v_I);
                        $p1[$v_3] = $v_7;
                        $p2[$v_3] = 21;
                    }
                    else {
                        $p1[$v_3] = $v_I;
                        $p2[$v_3] = $v_6;
                    }
                }
            }
        }
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1A = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$1A($p0, $p1, $p2, $p3) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_2.nodeName) === 'KeyValuePairOfstringstring') {
            var $v_3 = null;
            var $v_4 = null;
            for (var $v_5 = 0, $v_6 = $v_2.childNodes.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_2.childNodes[$v_5];
                if ($v_7.namespaceURI === 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') {
                    var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_7.nodeName);
                    switch ($v_8) {
                        case 'key':
                            $v_3 = $v_7;
                            break;
                        case 'value':
                            $v_4 = $v_7;
                            break;
                    }
                }
            }
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
                var $v_9 = $v_3.firstChild.nodeValue;
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_9) && (($v_9) in $p1)) {
                    if ((($v_9) in $p2)) {
                        var $v_A = $p2[$v_9];
                        var $v_B;
                        var $v_C = null;
                        if ($v_A === 21) {
                            $v_C = $p1[$v_9];
                            $v_A = $v_C.get_attributeType();
                        }
                        if ($v_A === 11 || !$v_A) {
                            $v_B = ($v_C) ? $v_C.get_value() : $p1[$v_9];
                            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild)) {
                                $v_B.set_label($v_4.firstChild.nodeValue);
                            }
                        }
                    }
                    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4.firstChild)) {
                        $p3[$v_9] = $v_4.firstChild.nodeValue;
                    }
                }
            }
        }
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$z = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$z($p0) {
    var $v_0 = '<a:Attributes xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">';
    for (var $$arr_2 = $p0.get_changedFieldNames().toArray(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace($v_1)) {
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0($v_1, $p0.getValue($v_1), $p0.get_fieldTypes()[$v_1]);
        }
    }
    $v_0 += '</a:Attributes>';
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$t = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$t($p0, $p1, $p2) {
    var $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrWhiteSpace($p0) || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p1)) {
        return $v_0;
    }
    switch ($p2) {
        case 1:
        case 6:
        case 9:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.toDataXml($p0, $p1);
            break;
        case 2:
            var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.toCrmDataXml($p1);
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, $v_1);
            break;
        case 0:
            var $v_2;
            try {
                $v_2 = (Boolean.isInstanceOfType($p1)) ? ($p1).toString() : ($p1).get_value().toString();
            }
            catch ($$e_6) {
                $v_2 = $p1.toString();
            }
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, $v_2);
            break;
        case 5:
        case 18:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, ($p1).toString());
            break;
        case 4:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, ($p1).toString());
            break;
        case 3:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, ($p1).toString());
            break;
        case 7:
        case 14:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, $p1.toString());
            break;
        case 15:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, ($p1).toString());
            break;
        case 8:
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, ($p1).toString());
            break;
        case 13:
        case 11:
        case 12:
            if (String.isInstanceOfType($p1)) {
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A($p0, $p1.toString());
            }
            else {
                var $v_3 = ($p1).get_value();
                var $v_4 = {};
                $v_4['name'] = ($p1).get_label();
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1G($p0, $v_3.toString(), $v_4);
            }
            break;
        case 10:
            $v_0 = '<' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p0) + '>';
            $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$1F($p1);
            $v_0 += '<' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p0) + '/>';
            break;
        default:
            break;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$A = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$A($p0, $p1) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    var $v_1 = $v_0.createElement($p0);
    var $v_2 = $v_0.createTextNode($p1);
    $v_1.appendChild($v_2);
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_1).get_outerXml();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$1G = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$1G($p0, $p1, $p2) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    var $v_1 = $v_0.createElement($p0);
    var $v_2 = $v_0.createTextNode($p1);
    $v_1.appendChild($v_2);
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p2)) {
        var $$dict_6 = $p2;
        for (var $$key_7 in $$dict_6) {
            var $v_3 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if (null !== $v_3.value) {
                var $v_4 = $v_3.value.toString();
                $v_1.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, $v_3.key, $v_4));
            }
        }
    }
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_1).get_outerXml();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$d = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$d($p0) {
    $p0 = $p0.substr($p0.indexOf(':') + 1);
    switch ($p0) {
        case 'AliasedValue':
            return 21;
        case 'boolean':
            return 0;
        case 'dateTime':
            return 2;
        case 'decimal':
            return 3;
        case 'double':
            return 4;
        case 'EntityCollection':
            return 10;
        case 'EntityReference':
            return 6;
        case 'guid':
            return 15;
        case 'int':
            return 5;
        case 'Money':
            return 8;
        case 'OptionSetValue':
            return 11;
        case 'string':
            return 14;
        default:
            return -1;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$10 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$10($p0) {
    switch ($p0) {
        case 14:
        case 7:
        case 20:
            return 'c:string';
        case 5:
            return 'c:int';
        case 15:
            return 'c:guid';
        case 2:
            return 'c:dateTime';
        case 0:
            return 'c:boolean';
        case 1:
        case 6:
        case 9:
            return 'a:EntityReference';
        case 11:
        case 12:
        case 13:
            return 'a:OptionSetValue';
        case 21:
            return 'a:AliasedValue';
        case 8:
            return 'a:Money';
        case 3:
            return 'c:decimal';
        case 4:
            return 'c:double';
        case 10:
            return 'a:EntityCollection';
        default:
            throw Error.create('field type is not supported: ' + $p0);
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$12 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$12($p0) {
    switch ($p0) {
        case 14:
        case 2:
        case 3:
        case 4:
        case 0:
        case 5:
        case 7:
            return 'xmlns:c=\"http://www.w3.org/2001/XMLSchema\"';
        case 15:
            return 'xmlns:c=\"http://schemas.microsoft.com/2003/10/Serialization/\"';
        default:
            return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$o = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$o($p0, $p1) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p1)) {
        return $p0.getAttribute('i:nil') === 'true';
    }
    return false;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$n = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityRecordSerializer$$n($p0) {
    var $v_0 = null;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.firstElementChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.firstElementChild.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p0.firstElementChild.firstChild.nodeValue)) {
        $v_0 = $p0.firstElementChild.firstChild.nodeValue;
    }
    else if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p0.firstChild.firstChild) && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p0.firstChild.firstChild.nodeValue)) {
        $v_0 = $p0.firstChild.firstChild.nodeValue;
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceCollectionSerializer$loadFromCrmSoap(xml) {
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference))();
    var $v_1 = xml.selectNodes('a:EntityReference');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        $v_0.set_item($v_2, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_1.get_item($v_2)));
    }
    return $v_0.toArray();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceCollectionSerializer$toCrmSoap(collection) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = collection, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:EntityReference>');
        $v_0.append(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.toCrmSoap($v_1));
        $v_0.append('</a:EntityReference>');
    }
    return $v_0.toString();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceSerializer$loadFromCrmSoap(xml) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoapNode(xml.get_domParserElement());
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoapNode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceSerializer$loadFromCrmSoapNode(xml) {
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
    var $v_1 = null;
    var $v_2 = null;
    for (var $v_3 = 0, $v_4 = xml.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = xml.childNodes[$v_3];
        if ($v_5.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && $v_5.firstChild) {
            var $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_5.nodeName);
            switch ($v_6) {
                case 'Id':
                    $v_0 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_5.firstChild.nodeValue);
                    break;
                case 'LogicalName':
                    $v_1 = $v_5.firstChild.nodeValue;
                    break;
                case 'Name':
                    $v_2 = $v_5.firstChild.nodeValue;
                    break;
            }
        }
    }
    if (!$v_1) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference.get_empty();
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityReference($v_1, $v_0, $v_2);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceSerializer$toCrmSoap(entityReference) {
    var $v_0 = '<a:Id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.Id.toString()) + '</a:Id>';
    $v_0 += '<a:LogicalName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.LogicalName) + '</a:LogicalName>';
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty(entityReference.Name)) {
        $v_0 += '<a:Name>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.Name) + '</a:Name>';
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.toDataXml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_EntityReferenceSerializer$toDataXml(fieldName, value) {
    var $v_0 = value;
    var $v_1 = $v_0.TypeCode;
    var $v_2 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    var $v_3 = $v_2.createElement(fieldName);
    var $v_4 = $v_2.createTextNode($v_0.Id.toString());
    $v_3.appendChild($v_4);
    if ($v_1 > 0) {
        $v_3.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_2, 'type', $v_1.toString()));
    }
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($v_0.Name)) {
        $v_3.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_2, 'name', $v_0.Name));
    }
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_3).get_outerXml();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ErrorInfoSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ErrorInfoSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ErrorInfoSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ErrorInfoSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    var $v_1 = xml.selectSingleNode('b:ErrorCode');
    if ($v_1) {
        $v_0 = $v_1.get_innerText();
    }
    var $v_2 = new Array(0);
    var $v_3 = xml.selectNodes('.//b:ResourceInfo');
    for (var $v_4 = 0; $v_4 < $v_3.get_count(); $v_4++) {
        var $v_5 = $v_3.get_item($v_4);
        $v_2[$v_2.length] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResourceInfoSerializer.loadFromCrmSoap($v_5);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ErrorInfo($v_2, $v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleResponseItemCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ExecuteMultipleResponseItemCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleResponseItemCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ExecuteMultipleResponseItemCollectionSerializer$loadFromCrmSoap(xml, request) {
    var $v_0 = (request).get_requests();
    var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem))();
    xml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    var $v_2 = xml.selectNodes('c:ExecuteMultipleResponseItem');
    for (var $v_3 = 0; $v_3 < $v_2.get_count(); $v_3++) {
        var $v_4 = null;
        var $v_5 = null;
        var $v_6 = $v_2.get_item($v_3).selectSingleNode('c:Fault');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6) && $v_6.getAttribute('i:nil') !== 'true') {
            $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml($v_6);
        }
        var $v_7 = Number.parseInvariant($v_2.get_item($v_3).selectSingleNode('c:RequestIndex').get_innerText());
        var $v_8 = $v_2.get_item($v_3).selectSingleNode('c:Response');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8) && $v_8.getAttribute('i:nil') !== 'true') {
            var $v_9 = $v_8.selectSingleNode('a:ResponseName').get_innerText();
            $v_5 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$6($v_9, $v_8, $v_0[$v_7]);
        }
        $v_1.add(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleResponseItem($v_4, $v_7, $v_5));
    }
    return $v_1.toArray();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ExecuteMultipleSettingsSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ExecuteMultipleSettingsSerializer$loadFromCrmSoap(xml) {
    var $v_0 = Boolean.parse(xml.selectSingleNode('c:ContinueOnError').get_innerText());
    var $v_1 = Boolean.parse(xml.selectSingleNode('c:ReturnResponses').get_innerText());
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ExecuteMultipleSettings($v_0, $v_1);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ExecuteMultipleSettingsSerializer$toCrmSoap(settings) {
    return '<c:ContinueOnError>' + settings.get_continueOnError() + '</c:ContinueOnError>' + '<c:ReturnResponses>' + settings.get_returnResponses() + '</c:ReturnResponses>';
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_LabelSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_LabelSerializer$loadLocalizedLabelFromCrmSoap($p0) {
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = {};
    for (var $v_3 = 0, $v_4 = $p0.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = $p0.childNodes[$v_3];
        if ($v_5.nodeName === 'a:UserLocalizedLabel') {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$v($v_2, $v_5);
        }
        if ($v_5.nodeName === 'a:LocalizedLabels') {
            for (var $v_6 = 0, $v_7 = $v_5.childNodes.length; $v_6 < $v_7; $v_6++) {
                Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$v($v_2, $v_5.childNodes[$v_6]);
            }
        }
    }
    if ((($v_0) in $v_2)) {
        return $v_2[$v_0];
    }
    else if ((($v_1) in $v_2)) {
        return $v_2[$v_1];
    }
    return null;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$v = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_LabelSerializer$$v($p0, $p1) {
    var $v_0 = null;
    var $v_1 = null;
    for (var $v_2 = 0, $v_3 = $p1.childNodes.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $p1.childNodes[$v_2];
        if ($v_4.nodeName === 'a:LanguageCode') {
            $v_0 = $v_4.firstChild.nodeValue;
        }
        if ($v_4.nodeName === 'a:Label') {
            $v_1 = $v_4.firstChild.nodeValue;
        }
    }
    $p0[$v_0] = $v_1;
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OptionSetMetadataSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OptionSetMetadataSerializer$$6($p0) {
    var $v_0 = {};
    for (var $v_1 = 0, $v_2 = $p0.childNodes.length; $v_1 < $v_2; $v_1++) {
        var $v_3 = $p0.childNodes[$v_1];
        if ($v_3.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_3.nodeName) === 'Options') {
            for (var $v_4 = 0, $v_5 = $v_3.childNodes.length; $v_4 < $v_5; $v_4++) {
                $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$p($v_0, $v_3, $v_3.childNodes[$v_4], $v_4);
            }
        }
        else if ($v_3.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_3.nodeName) === 'FalseOption' || Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_3.nodeName) === 'TrueOption')) {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$p($v_0, $v_3, $v_3, $v_1);
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata($v_0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$p = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OptionSetMetadataSerializer$$p($p0, $p1, $p2, $p3) {
    var $v_0 = -1;
    var $v_1 = null;
    var $v_2 = -1;
    var $v_3 = null;
    for (var $v_4 = 0, $v_5 = $p2.childNodes.length; $v_4 < $v_5; $v_4++) {
        var $v_6 = $p2.childNodes[$v_4];
        if ($p1.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
            var $v_7 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_6.nodeName);
            switch ($v_7) {
                case 'Value':
                    $v_0 = Number.parseInvariant($v_6.firstChild.nodeValue);
                    break;
                case 'Label':
                    $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_6);
                    break;
                case 'State':
                    $v_2 = Number.parseInvariant($v_6.firstChild.nodeValue);
                    break;
                case 'TransitionData':
                    if ($v_6.childNodes.length > 0) {
                        if (!IsNull($v_6.firstChild.nodeValue.toString())) {
                            $v_3 = new Array(0);
                            var $v_8 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument($v_6.firstChild.nodeValue.toString());
                            var $v_9 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_8);
                            var $v_A = $v_9.childNodes();
                            if ($v_A.get_count() > 0) {
                                $v_A = $v_A.get_item(0).childNodes();
                                var $v_B = 0;
                                for (var $v_C = 0; $v_C < $v_A.get_count(); $v_C++) {
                                    if ($v_A.get_item($v_C).getAttribute('tostatusid')) {
                                        var $v_D = Number.parseInvariant($v_A.get_item($v_C).getAttribute('tostatusid').toString());
                                        $v_3[$v_B] = $v_D;
                                        $v_B++;
                                    }
                                }
                            }
                        }
                    }
                    break;
            }
        }
    }
    if ($v_0 === -1) {
        Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.Trace.logError(1005, 'OptionSetMetadata with unexpected value: {0}', $v_1);
    }
    $p0[$p3.toString()] = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_1, $v_0, $v_2, $v_3);
    return $p0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OrganizationRequestCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OrganizationRequestCollectionSerializer$loadFromCrmSoap(xml) {
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.DataApi.Request))();
    xml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    var $v_1 = xml.selectNodes('c:OrganizationRequest');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        $v_0.add(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.loadFromCrmSoap($v_1.get_item($v_2)));
    }
    return $v_0.toArray();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_OrganizationRequestCollectionSerializer$toCrmSoap(requests) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = requests, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<c:OrganizationRequest i:type=\"a:RetrieveRequest\">');
        $v_0.append('<a:Parameters>');
        $v_0.append(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.parametersToCrmSoap($v_1));
        $v_0.append('</a:Parameters>');
        $v_0.append('<a:RequestName>');
        $v_0.append($v_1.get_name());
        $v_0.append('</a:RequestName>');
        $v_0.append('</c:OrganizationRequest>');
    }
    return $v_0.toString();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QueryByEntityNameDictionarySerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QueryByEntityNameDictionarySerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QueryByEntityNameDictionarySerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QueryByEntityNameDictionarySerializer$toCrmSoap(dictionary) {
    var $v_0 = new Sys.StringBuilder();
    var $$dict_2 = dictionary;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0.append('<c:KeyValuePairOfstringQueryBasegUGIFE1S>');
        $v_0.append('<b:key>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.key) + '</b:key>');
        $v_0.append('<b:value i:type=\"a:FetchExpression\"><a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.value) + '</a:Query></b:value>');
        $v_0.append('</c:KeyValuePairOfstringQueryBasegUGIFE1S>');
    }
    return $v_0.toString();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QuickFindResultCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QuickFindResultCollectionSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = new Array(0);
    var $v_1 = xml.selectNodes('a:QuickFindResult');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        var $v_3 = $v_1.get_item($v_2);
        $v_0[$v_0.length] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultSerializer.$6($v_3);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection($v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QuickFindResultSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_QuickFindResultSerializer$$6($p0) {
    if ($p0.get_tagName() === 'a:QuickFindResult') {
        var $v_0 = $p0.selectSingleNode('a:Data');
        if ($v_0) {
            var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.loadFromCrmSoap($v_0, new Microsoft.Crm.Client.Core.Storage.DataApi.Query(Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty));
            var $v_2 = Number.parseInvariant($p0.selectSingleNode('a:ErrorCode').get_innerText());
            var $v_3 = $v_0.selectSingleNode('a:EntityName').get_innerText();
            return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResult($v_3, $v_1, $v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelatedEntityCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelatedEntityCollectionSerializer$$6($p0, $p1, $p2) {
    var $v_0 = null;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($p2)) {
        $v_0 = new Array($p2.length);
        for (var $v_2 = 0; $v_2 < $p2.length; $v_2++) {
            $v_0[$v_2] = new Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery($p2[$v_2].get_key(), $p0, $p2[$v_2].get_value());
        }
    }
    var $v_1 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection)))();
    for (var $v_3 = 0, $v_4 = $p1.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = $p1.childNodes[$v_3];
        if ($v_5.nodeName.indexOf('KeyValuePairOfRelationshipEntityCollection') < 0) {
            return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection($v_1.toArray());
        }
        var $v_6 = null;
        var $v_7 = null;
        for (var $v_9 = 0, $v_A = $v_5.childNodes.length; $v_9 < $v_A; $v_9++) {
            var $v_B = $v_5.childNodes[$v_9];
            if ($v_B.namespaceURI === 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') {
                var $v_C = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_B.nodeName);
                switch ($v_C) {
                    case 'key':
                        $v_6 = $v_B;
                        break;
                    case 'value':
                        $v_7 = $v_B;
                        break;
                }
            }
        }
        if (!$v_6) {
            continue;
        }
        var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoapNode($v_6);
        if ($v_8 && $v_7) {
            var $v_D = null;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
                for (var $$arr_H = $v_0, $$len_I = $$arr_H.length, $$idx_J = 0; $$idx_J < $$len_I; ++$$idx_J) {
                    var $v_F = $$arr_H[$$idx_J];
                    if ($v_F.get_relationship().toString() === $v_8.toString()) {
                        $v_D = $v_F;
                        break;
                    }
                }
            }
            var $v_E = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.$e($v_7, $v_D);
            $v_1.add(new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))($v_8, $v_E));
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection($v_1.toArray());
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$u = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelatedEntityCollectionSerializer$$u($p0) {
    var $v_0 = '<a:RelatedEntities xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">';
    $v_0 += '</a:RelatedEntities>';
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipQueryCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipQueryCollectionSerializer$toCrmSoap(collection) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = collection, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN>');
        $v_0.append('<b:key>');
        if ($v_1.get_key().get_primaryEntityRole() !== -1) {
            $v_0.append('<a:PrimaryEntityRole>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$a(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_1.get_key().get_primaryEntityRole()) + '</a:PrimaryEntityRole>');
        }
        $v_0.append('<a:SchemaName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.get_key().get_schemaName()) + '</a:SchemaName>');
        $v_0.append('</b:key>');
        $v_0.append('<b:value i:type=\"a:FetchExpression\"><a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.get_value()) + '</a:Query></b:value>');
        $v_0.append('</a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN>');
    }
    return $v_0.toString();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipQueryCollectionSerializer$loadFromCrmSoap(data) {
    var $v_0 = data.selectNodes('a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN');
    var $v_1 = new Array($v_0.get_count());
    for (var $v_2 = 0; $v_2 < $v_0.get_count(); $v_2++) {
        var $v_3 = $v_0.get_item($v_2).selectSingleNode('b:key/a:SchemaName').get_innerText();
        var $v_4 = $v_0.get_item($v_2).selectSingleNode('b:key/a:PrimaryEntityRole');
        var $v_5 = -1;
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
            $v_5 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_4.get_innerText());
        }
        var $v_6 = $v_0.get_item($v_2).selectSingleNode('b:value/a:Query').get_innerText();
        $v_1[$v_2] = new (Microsoft.Dynamics.Client.Core.Framework.KeyValuePair.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, String))(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_3, $v_5), $v_6);
    }
    return $v_1;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipSerializer$loadFromCrmSoap(xml) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoapNode(xml.get_domParserElement());
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoapNode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipSerializer$loadFromCrmSoapNode(xml) {
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = -1;
    for (var $v_3 = 0, $v_4 = xml.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = xml.childNodes[$v_3];
        if ($v_5.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && $v_5.firstChild) {
            var $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_5.nodeName);
            switch ($v_6) {
                case 'SchemaName':
                    $v_1 = $v_5.firstChild.nodeValue;
                    break;
                case 'PrimaryEntityRole':
                    if ($v_5.getAttribute('i:nil') !== 'true') {
                        $v_2 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_5.firstChild.nodeValue);
                    }
                    break;
            }
        }
    }
    if ($v_1) {
        $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_1, $v_2);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.toCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RelationshipSerializer$toCrmSoap(relationship) {
    var $v_0 = '<a:SchemaName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(relationship.get_schemaName()) + '</a:SchemaName>';
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(relationship.get_primaryEntityRole())) {
        $v_0 += '<a:PrimaryEntityRole>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.toString(relationship.get_primaryEntityRole())) + '</a:PrimaryEntityRole>';
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RequestSerializer$parametersToCrmSoap(request) {
    if (((request.get_name()) in Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$D)) {
        return (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$D[request.get_name()])(request);
    }
    else {
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RequestSerializer$loadFromCrmSoap(data) {
    var $v_0 = null;
    if ((($v_0) in Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$Q)) {
        return (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$Q[$v_0])(data);
    }
    else {
        return null;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RequestSerializer$$1($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$D[$p0] = $p1;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_RequestSerializer$$2($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$Q[$p0] = $p1;
}






Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResourceInfoSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResourceInfoSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResourceInfoSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResourceInfoSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
    var $v_1 = xml.selectSingleNode('b:Id');
    if ($v_1) {
        $v_0 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_1.get_innerText());
    }
    var $v_2 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    var $v_3 = xml.selectSingleNode('b:DisplayName');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    var $v_4 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    var $v_5 = xml.selectSingleNode('b:EntityName');
    if ($v_5) {
        $v_4 = $v_5.get_innerText();
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ResourceInfo($v_0, $v_2, $v_4);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResponseSerializer$$1($p0, $p1) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$D[$p0] = $p1;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$6 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResponseSerializer$$6($p0, $p1, $p2) {
    if ((($p0) in Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$D)) {
        return (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$D[$p0])($p1, $p2);
    }
    else {
        return new Microsoft.Crm.Client.Core.Storage.DataApi.Response($p2.get_name());
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ResponseSerializer$$5($p0) {
    $p0.addNamespace('s', 'http://schemas.xmlsoap.org/soap/envelope');
    $p0.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
    $p0.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
    $p0.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
    $p0.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
}




Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SecurityPrivilegeMetadataCollectionSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_SecurityPrivilegeMetadataCollectionSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SecurityPrivilegeMetadataCollectionSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_SecurityPrivilegeMetadataCollectionSerializer$loadFromCrmSoap(xml) {
    var $v_0 = new (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework.List.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $v_1 = 0, $v_2 = xml.childNodes.length; $v_1 < $v_2; $v_1++) {
        var $v_3 = xml.childNodes[$v_1];
        var $v_4 = null;
        var $v_5 = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
        var $v_6 = 0;
        var $v_7 = false;
        var $v_8 = false;
        var $v_9 = false;
        var $v_A = false;
        for (var $v_B = 0, $v_C = $v_3.childNodes.length; $v_B < $v_C; $v_B++) {
            var $v_D = $v_3.childNodes[$v_B];
            if ($v_D.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
                var $v_E = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4($v_D.nodeName);
                switch ($v_E) {
                    case 'Name':
                        $v_4 = $v_D.firstChild.nodeValue;
                        break;
                    case 'PrivilegeId':
                        $v_5 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_D.firstChild.nodeValue);
                        break;
                    case 'PrivilegeType':
                        $v_6 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrivilegeType, $v_D.firstChild.nodeValue);
                        break;
                    case 'CanBeBasic':
                        $v_7 = Boolean.parse($v_D.firstChild.nodeValue);
                        break;
                    case 'CanBeLocal':
                        $v_8 = Boolean.parse($v_D.firstChild.nodeValue);
                        break;
                    case 'CanBeDeep':
                        $v_9 = Boolean.parse($v_D.firstChild.nodeValue);
                        break;
                    case 'CanBeGlobal':
                        $v_A = Boolean.parse($v_D.firstChild.nodeValue);
                        break;
                }
            }
        }
        $v_0.add(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata($v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A));
    }
    return $v_0.toArray();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_SerializerUtility() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$4 = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_SerializerUtility$$4($p0) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.isNullOrEmpty($p0)) {
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
    if ($p0.indexOf(':') < 0) {
        return $p0;
    }
    return $p0.substr($p0.indexOf(':') + 1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.TraceInfoSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_TraceInfoSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.TraceInfoSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_TraceInfoSerializer$loadFromCrmSoap(xml) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = new Array(0);
    var $v_1 = xml.selectNodes('.//b:ErrorInfo');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        var $v_3 = $v_1.get_item($v_2);
        $v_0[$v_0.length] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ErrorInfoSerializer.loadFromCrmSoap($v_3);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TraceInfo($v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ValidationResultSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_ValidationResultSerializer$loadFromCrmSoap(xml) {
    var $v_0 = false;
    var $v_1 = null;
    var $v_2 = Microsoft.Dynamics.Client.Core.Framework.Guid.get_empty();
    if (xml) {
        var $v_3 = xml.selectSingleNode('b:ActivityId');
        if ($v_3) {
            $v_2 = new Microsoft.Dynamics.Client.Core.Framework.Guid($v_3.get_innerText());
        }
        var $v_4 = xml.selectSingleNode('b:ValidationSuccess');
        if ($v_4) {
            $v_0 = Boolean.parse($v_4.get_innerText());
        }
        var $v_5 = xml.selectSingleNode('b:TraceInfo');
        if ($v_5) {
            $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.TraceInfoSerializer.loadFromCrmSoap($v_5);
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ValidationResult($v_0, $v_1, $v_2);
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('AddRecurrence', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('AddRecurrence', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('AppointmentId', $v_0.get_appointmentId(), 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_4 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
            $v_1 = $v_4;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AppointmentId\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddRecurrenceRequest($v_0, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('AddRecurrence', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddRecurrenceResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'id\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddRecurrenceResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssignRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssignRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Assign', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Assign', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssignRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Assignee', $v_0.get_assignee(), 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssignRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Assignee\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_2) : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssignRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssociateRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssociateRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Associate', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Associate', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssociateRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Relationship', $v_0.get_relationship(), -1, 'a:Relationship') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RelatedEntities', $v_0.get_relatedEntities(), -1, 'a:EntityReferenceCollection');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AssociateRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Relationship\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoap($v_2) : null;
    var $v_4 = null;
    var $v_5 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelatedEntities\']/b:value[@i:type=\'a:EntityReferenceCollection\']');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
        $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.loadFromCrmSoap($v_5);
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AssociateRequest($v_1, $v_3, $v_4);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Book', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Book', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('MaintainLegacyAppServerBehavior', $v_0.get_maintainLegacyAppServerBehavior(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ReturnNotifications', $v_0.get_returnNotifications(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_6 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
            $v_1 = $v_6;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MaintainLegacyAppServerBehavior\']/b:value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = Boolean.parse($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReturnNotifications\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.BookRequest($v_0, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('Book', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_BookResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        soapResponse.addNamespace('b', 'http://schemas.microsoft.com/crm/2011/Contracts');
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'ValidationResult\']/c:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer.loadFromCrmSoap($v_1) : null;
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Notifications\']/c:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer.loadFromCrmSoap($v_3) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.BookResponse($v_2, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckInDocumentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckInDocumentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('CheckInDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('CheckInDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckInDocumentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Entity', $v_0.get_entity(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CheckInComments', $v_0.get_checkInComments(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RetainCheckout', $v_0.get_retainCheckout(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckInDocumentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_6 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
            $v_1 = $v_6;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CheckInComments\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RetainCheckout\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckInDocumentRequest($v_0, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckoutDocumentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckoutDocumentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('CheckoutDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('CheckoutDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckoutDocumentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Entity', $v_0.get_entity(), -1, 'a:Entity');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CheckoutDocumentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_2 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
            $v_1 = $v_2;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CheckoutDocumentRequest($v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('NewDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('NewDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('FileName', $v_0.get_fileName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectId', $v_0.get_regardingObjectId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectTypeCode', $v_0.get_regardingObjectTypeCode(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('LocationId', $v_0.get_locationId(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'FileName\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectTypeCode\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'LocationId\']/b:value');
    var $v_7 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.NewDocumentRequest($v_1, $v_3, $v_5, $v_7);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('NewDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_NewDocumentResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EditLink\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.NewDocumentResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CloseIncidentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CloseIncidentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('CloseIncident', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('CloseIncident', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CloseIncidentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('IncidentResolution', $v_0.get_incidentResolution(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Status', $v_0.get_status(), 11);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CloseIncidentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IncidentResolution\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_4 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
            $v_1 = $v_4;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CloseIncidentRequest($v_0, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('ConvertActivity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('ConvertActivity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ActivityId', $v_0.get_activityId(), 15) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ActivityEntityName', $v_0.get_activityEntityName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('TargetEntity', $v_0.get_targetEntity(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('TargetEntityName', $v_0.get_targetEntityName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CreateCampaignResponse', $v_0.get_createCampaignResponse(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ActivityId\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ActivityEntityName\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = null;
    var $v_5 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'TargetEntity\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
        var $v_A = $v_5.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) {
            $v_5 = $v_A;
        }
        $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_5);
    }
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'TargetEntityName\']/b:value');
    var $v_7 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CreateCampaignResponse\']/b:value');
    var $v_9;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) {
        $v_9 = Boolean.parse($v_8.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ConvertActivityRequest($v_1, $v_3, $v_4, $v_7, $v_9);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('ConvertActivity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ConvertActivityResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RecordId\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ConvertActivityResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateFolderRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateFolderRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('CreateFolder', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('CreateFolder', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateFolderRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('FolderName', $v_0.get_folderName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectType', $v_0.get_regardingObjectType(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectId', $v_0.get_regardingObjectId(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateFolderRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'FolderName\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectType\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateFolderRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('SearchDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('SearchDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectType', $v_0.get_regardingObjectType(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectId', $v_0.get_regardingObjectId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('DocumentId', $v_0.get_documentId(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectType\']/b:value/a:Value');
    var $v_1;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
        $v_1 = parseInt($v_0.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentId\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SearchDocumentRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('SearchDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SearchDocumentResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SearchLocation\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentLocation\']/b:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? $v_3.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.SearchDocumentResponse($v_2, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('CreateDocumentLibraries', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('CreateDocumentLibraries', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('DocumentLibraryNames', $v_0.get_documentLibraryNames(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Url', $v_0.get_url(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentLibraryNames\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Url\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateDocumentLibrariesRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('CreateDocumentLibraries', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateDocumentLibrariesResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentLibraryResult\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateDocumentLibrariesResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateDocumentManagementSettingsRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateDocumentManagementSettingsRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('UpdateDocumentManagementSettings', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('UpdateDocumentManagementSettings', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateDocumentManagementSettingsRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SiteCollection', $v_0.get_siteCollection(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('FolderStructureEntity', $v_0.get_folderStructureEntity(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('EntityDocMgmtXml', $v_0.get_entityDocMgmtXml(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ValidateStatus', $v_0.get_validateStatus(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ValidateStatusReason', $v_0.get_validateStatusReason(), 5);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateDocumentManagementSettingsRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SiteCollection\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'FolderStructureEntity\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityDocMgmtXml\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ValidateStatus\']/b:value/a:Value');
    var $v_7;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
        $v_7 = parseInt($v_6.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ValidateStatusReason\']/b:value/a:Value');
    var $v_9;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) {
        $v_9 = parseInt($v_8.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateDocumentManagementSettingsRequest($v_1, $v_3, $v_5, $v_7, $v_9);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_MigrateToS2SRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_MigrateToS2SRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('MigrateToS2S', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('MigrateToS2S', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_MigrateToS2SRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SiteUrl', $v_0.get_siteUrl(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_MigrateToS2SRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SiteUrl\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.MigrateToS2SRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpgradeToS2SRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpgradeToS2SRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('UpgradeToS2S', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('UpgradeToS2S', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpgradeToS2SRequestSerializer$parametersToCrmSoap(request) {
    return null;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpgradeToS2SRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpgradeToS2SRequest();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('ValidateUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('ValidateUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SharePointUrls', $v_0.get_sharePointUrls(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SharePointUrls\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ValidateUrlRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('ValidateUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ValidateUrlResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'UrlValidationResult\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ValidateUrlResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Create', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Create', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SuppressDuplicateDetection', $v_0.get_suppressDuplicateDetection(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CalculateMatchCodeSynchronously', $v_0.get_calculateMatchCodeSynchronously(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SolutionUniqueName', $v_0.get_solutionUniqueName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('MaintainLegacyAppServerBehavior', $v_0.get_maintainLegacyAppServerBehavior(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_A = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) {
            $v_1 = $v_A;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SuppressDuplicateDetection\']/b:value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = Boolean.parse($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CalculateMatchCodeSynchronously\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SolutionUniqueName\']/b:value');
    var $v_7 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MaintainLegacyAppServerBehavior\']/b:value');
    var $v_9;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) {
        $v_9 = Boolean.parse($v_8.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.CreateRequest($v_0, $v_3, $v_5, $v_7, $v_9);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('Create', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_CreateResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'id\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.CreateResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteDocumentRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteDocumentRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('DeleteDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('DeleteDocument', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteDocumentRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Entities', $v_0.get_entities(), -1, 'a:EntityCollection');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteDocumentRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entities\']/b:value[@i:type=\'a:EntityCollection\']');
    var $v_1 = null;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
        $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.loadFromCrmSoap($v_0, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteDocumentRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Delete', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Delete', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SolutionUniqueName', $v_0.get_solutionUniqueName(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DeleteRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SolutionUniqueName\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DeleteRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DisassociateRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DisassociateRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Disassociate', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Disassociate', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DisassociateRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Relationship', $v_0.get_relationship(), -1, 'a:Relationship') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RelatedEntities', $v_0.get_relatedEntities(), -1, 'a:EntityReferenceCollection');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DisassociateRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Relationship\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.loadFromCrmSoap($v_2) : null;
    var $v_4 = null;
    var $v_5 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelatedEntities\']/b:value[@i:type=\'a:EntityReferenceCollection\']');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
        $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.loadFromCrmSoap($v_5);
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DisassociateRequest($v_1, $v_3, $v_4);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DiscardDocumentCheckoutRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DiscardDocumentCheckoutRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('DiscardDocumentCheckout', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('DiscardDocumentCheckout', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DiscardDocumentCheckoutRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Entity', $v_0.get_entity(), -1, 'a:Entity');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_DiscardDocumentCheckoutRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_2 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
            $v_1 = $v_2;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.DiscardDocumentCheckoutRequest($v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_EditDocumentPropertiesRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_EditDocumentPropertiesRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('EditDocumentProperties', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('EditDocumentProperties', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_EditDocumentPropertiesRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Entity', $v_0.get_entity(), -1, 'a:Entity');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_EditDocumentPropertiesRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_2 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
            $v_1 = $v_2;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.EditDocumentPropertiesRequest($v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('ExecuteMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('ExecuteMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Requests', $v_0.get_requests(), -1, 'c:OrganizationRequestCollection', 'xmlns:c=\"http://schemas.microsoft.com/xrm/2012/Contracts\"') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Settings', $v_0.get_settings(), -1, 'c:ExecuteMultipleSettings', 'xmlns:c=\"http://schemas.microsoft.com/xrm/2012/Contracts\"');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Requests\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Settings\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer.loadFromCrmSoap($v_2) : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteMultipleRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('ExecuteMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteMultipleResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IsFaulted\']/b:value');
            var $v_2;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                $v_2 = Boolean.parse($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Responses\']/b:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleResponseItemCollectionSerializer.loadFromCrmSoap($v_3, request) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteMultipleResponse($v_2, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SearchText', $v_0.get_searchText(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('EntityGroupName', $v_0.get_entityGroupName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('EntityNames', $v_0.get_entityNames(), -1, 'sa:ArrayOfstring', 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SearchText\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityGroupName\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'EntityNames\']/b:value/sa:string');
    var $v_5 = null;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = new Array($v_4.get_count());
        for (var $v_6 = 0; $v_6 < $v_4.get_count(); $v_6++) {
            $v_5[$v_6] = $v_4.get_item($v_6).get_innerText();
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.ExecuteQuickFindRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_ExecuteQuickFindResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        var $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Result\']/c:value[@i:type=\'a:QuickFindResultCollection\']');
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultCollectionSerializer.loadFromCrmSoap($v_1);
                return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.ExecuteQuickFindResponse($v_2);
            }
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('GetValidStatusTransition', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('GetValidStatusTransition', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('IncidentId', $v_0.get_incidentId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ToStateCode', $v_0.get_toStateCode(), 5);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IncidentId\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ToStateCode\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.GetValidStatusTransitionRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('GetValidStatusTransition', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_GetValidStatusTransitionResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Result\']/c:value');
            var $v_2;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                $v_2 = parseInt($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.GetValidStatusTransitionResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('InitializeFrom', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('InitializeFrom', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('EntityMoniker', $v_0.get_entityMoniker(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('TargetEntityName', $v_0.get_targetEntityName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('TargetFieldType', $v_0.get_targetFieldType(), -1, 'a:TargetFieldType');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityMoniker\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'TargetEntityName\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'TargetFieldType\']/b:value');
    var $v_5 = Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parseType(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TargetFieldType, (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null);
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InitializeFromRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('InitializeFrom', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InitializeFromResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = null;
            var $v_2 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
                var $v_3 = $v_2.selectSingleNode('entity');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) {
                    $v_2 = $v_3;
                }
                $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_2);
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InitializeFromResponse($v_1);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('InviteUser', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('InviteUser', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('UserId', $v_0.get_userId(), 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'UserId\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.InviteUserRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('InviteUser', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_InviteUserResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'InvitationToken\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.InviteUserResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_LoseOpportunityRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_LoseOpportunityRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('LoseOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('LoseOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_LoseOpportunityRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('OpportunityClose', $v_0.get_opportunityClose(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Status', $v_0.get_status(), 11);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_LoseOpportunityRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OpportunityClose\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_4 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
            $v_1 = $v_4;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.LoseOpportunityRequest($v_0, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('QualifyLead', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('QualifyLead', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('LeadId', $v_0.get_leadId(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CreateAccount', $v_0.get_createAccount(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CreateContact', $v_0.get_createContact(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CreateOpportunity', $v_0.get_createOpportunity(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('OpportunityCurrencyId', $v_0.get_opportunityCurrencyId(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('OpportunityCustomerId', $v_0.get_opportunityCustomerId(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SourceCampaignId', $v_0.get_sourceCampaignId(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Status', $v_0.get_status(), 11) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SuppressDuplicateDetection', $v_0.get_suppressDuplicateDetection(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'LeadId\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CreateAccount\']/b:value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = Boolean.parse($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CreateContact\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CreateOpportunity\']/b:value');
    var $v_7;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
        $v_7 = Boolean.parse($v_6.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OpportunityCurrencyId\']/b:value');
    var $v_9 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_8) : null;
    var $v_A = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OpportunityCustomerId\']/b:value');
    var $v_B = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_A) : null;
    var $v_C = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SourceCampaignId\']/b:value');
    var $v_D = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_C)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_C) : null;
    var $v_E = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value/a:Value');
    var $v_F;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_E)) {
        $v_F = parseInt($v_E.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_G = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SuppressDuplicateDetection\']/b:value');
    var $v_H;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_G)) {
        $v_H = Boolean.parse($v_G.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.QualifyLeadRequest($v_1, $v_3, $v_5, $v_7, $v_9, $v_B, $v_D, $v_F, $v_H);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('QualifyLead', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_QualifyLeadResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = null;
            var $v_2 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CreatedEntities\']/b:value[@i:type=\'a:EntityReferenceCollection\']');
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
                $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.loadFromCrmSoap($v_2);
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.QualifyLeadResponse($v_1);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Reschedule', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Reschedule', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('MaintainLegacyAppServerBehavior', $v_0.get_maintainLegacyAppServerBehavior(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ReturnNotifications', $v_0.get_returnNotifications(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_6 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
            $v_1 = $v_6;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MaintainLegacyAppServerBehavior\']/b:value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = Boolean.parse($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReturnNotifications\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RescheduleRequest($v_0, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('Reschedule', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RescheduleResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        soapResponse.addNamespace('b', 'http://schemas.microsoft.com/crm/2011/Contracts');
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'ValidationResult\']/c:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer.loadFromCrmSoap($v_1) : null;
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Notifications\']/c:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer.loadFromCrmSoap($v_3) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RescheduleResponse($v_2, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('RetrieveEntitiesForAggregateQuery', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('RetrieveEntitiesForAggregateQuery', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('OuterQuery', $v_0.get_outerQuery(), -1, 'a:FetchExpression') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SubQueries', $v_0.get_subQueries(), -1, 'c:QueryByEntityNameDictionary', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OuterQuery\']/b:value/a:Query');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    data.addNamespace('c', 'http://schemas.microsoft.com/crm/2011/Contracts');
    var $v_2 = null;
    var $v_3 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'SubQueries\']/b:value[@i:type=\'c:QueryByEntityNameDictionary\']/c:KeyValuePairOfstringQueryBasegUGIFE1S');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) {
        $v_2 = {};
        for (var $v_4 = 0; $v_4 < $v_3.get_count(); $v_4++) {
            var $v_5 = $v_3.get_item($v_4).selectSingleNode('b:key');
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
                var $v_6 = $v_3.get_item($v_4).selectSingleNode('b:value/a:Query');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
                    $v_2[$v_5.get_innerText()] = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
                }
            }
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveEntitiesForAggregateQueryRequest($v_1, $v_2);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('RetrieveEntitiesForAggregateQuery', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveEntitiesForAggregateQueryResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityCollection\']/b:value[@i:type=\'a:EntityCollection\']');
            var $v_2 = null;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.loadFromCrmSoap($v_1, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveEntitiesForAggregateQueryResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('RetrieveMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('RetrieveMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Query', $v_0.get_query(), -1, 'a:FetchExpression');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Query\']/b:value/a:Query');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveMultipleRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('RetrieveMultiple', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveMultipleResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityCollection\']/b:value[@i:type=\'a:EntityCollection\']');
            var $v_2 = null;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.loadFromCrmSoap($v_1, new Microsoft.Crm.Client.Core.Storage.DataApi.Query((request).get_query()));
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveMultipleResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('RetrievePrincipalAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('RetrievePrincipalAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Principal', $v_0.get_principal(), 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Principal\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_2) : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrievePrincipalAccessRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('RetrievePrincipalAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrievePrincipalAccessResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AccessRights\']/b:value');
            var $v_2 = 0;
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
                var $v_3 = $v_1.get_innerText().split(' ');
                for (var $$arr_6 = $v_3, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                    var $v_4 = $$arr_6[$$idx_8];
                    $v_2 |= Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Enum.parseType(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AccessRights, $v_4);
                }
            }
            else {
                throw Error.notImplemented();
            }
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrievePrincipalAccessResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Retrieve', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Retrieve', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ColumnSet', $v_0.get_columnSet(), -1, 'a:ColumnSet') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RelatedEntitiesQuery', $v_0.get_relatedEntitiesQuery(), -1, 'a:RelationshipQueryCollection') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ReturnNotifications', $v_0.get_returnNotifications(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ColumnSet\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer.loadFromCrmSoap($v_2) : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelatedEntitiesQuery\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer.loadFromCrmSoap($v_4) : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReturnNotifications\']/b:value');
    var $v_7;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
        $v_7 = Boolean.parse($v_6.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.RetrieveRequest($v_1, $v_3, $v_5, $v_7);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('Retrieve', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_RetrieveResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = null;
            var $v_2 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
            if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
                var $v_5 = $v_2.selectSingleNode('entity');
                if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) {
                    $v_2 = $v_5;
                }
                $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_2, (request).get_relatedEntitiesQuery());
                var $v_6 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1.get_relatedEntities())) ? $v_1.get_relatedEntities().get_relatedEntityQueries() : new Array(0);
                $v_1.updateColumnSet((request).get_columnSet(), $v_6);
            }
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Notifications\']/b:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer.loadFromCrmSoap($v_3) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.RetrieveResponse($v_1, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SetStateRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SetStateRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('SetState', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('SetState', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SetStateRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('EntityMoniker', $v_0.get_entityMoniker(), 6) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('State', $v_0.get_state(), 11) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Status', $v_0.get_status(), 11) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('MaintainLegacyAppServerBehavior', $v_0.get_maintainLegacyAppServerBehavior(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_SetStateRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityMoniker\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'State\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value/a:Value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = parseInt($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MaintainLegacyAppServerBehavior\']/b:value');
    var $v_7;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) {
        $v_7 = Boolean.parse($v_6.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.SetStateRequest($v_1, $v_3, $v_5, $v_7);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('Update', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('Update', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Target', $v_0.get_target(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SuppressDuplicateDetection', $v_0.get_suppressDuplicateDetection(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('CalculateMatchCodeSynchronously', $v_0.get_calculateMatchCodeSynchronously(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('SolutionUniqueName', $v_0.get_solutionUniqueName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('MaintainLegacyAppServerBehavior', $v_0.get_maintainLegacyAppServerBehavior(), 0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_UpdateRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_A = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) {
            $v_1 = $v_A;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SuppressDuplicateDetection\']/b:value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = Boolean.parse($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CalculateMatchCodeSynchronously\']/b:value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = Boolean.parse($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SolutionUniqueName\']/b:value');
    var $v_7 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MaintainLegacyAppServerBehavior\']/b:value');
    var $v_9;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) {
        $v_9 = Boolean.parse($v_8.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.UpdateRequest($v_0, $v_3, $v_5, $v_7, $v_9);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('WhoAmI', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('WhoAmI', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIRequestSerializer$parametersToCrmSoap(request) {
    return null;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WhoAmIRequest();
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('WhoAmI', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WhoAmIResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'UserId\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'BusinessUnitId\']/b:value');
            var $v_4 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_3)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_3.get_innerText()) : null;
            var $v_5 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OrganizationId\']/b:value');
            var $v_6 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_5)) ? new Microsoft.Dynamics.Client.Core.Framework.Guid($v_5.get_innerText()) : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.WhoAmIResponse($v_2, $v_4, $v_6);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WinOpportunityRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WinOpportunityRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('WinOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('WinOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WinOpportunityRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('OpportunityClose', $v_0.get_opportunityClose(), -1, 'a:Entity') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('Status', $v_0.get_status(), 11);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_WinOpportunityRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OpportunityClose\']/b:value');
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) {
        var $v_4 = $v_1.selectSingleNode('entity');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
            $v_1 = $v_4;
        }
        $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap($v_1);
    }
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value/a:Value');
    var $v_3;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.WinOpportunityRequest($v_0, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('AddOrEditLocation', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('AddOrEditLocation', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('LocationName', $v_0.get_locationName(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('AbsUrl', $v_0.get_absUrl(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectId', $v_0.get_regardingObjectId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RelativePath', $v_0.get_relativePath(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjType', $v_0.get_regardingObjType(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ParentType', $v_0.get_parentType(), 5) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('ParentId', $v_0.get_parentId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('IsAddOrEditMode', $v_0.get_isAddOrEditMode(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('IsCreateFolder', $v_0.get_isCreateFolder(), 0) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('DocumentId', $v_0.get_documentId(), 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'LocationName\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AbsUrl\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_5 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelativePath\']/b:value');
    var $v_7 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_6)) ? $v_6.get_innerText() : null;
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjType\']/b:value/a:Value');
    var $v_9;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_8)) {
        $v_9 = parseInt($v_8.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_A = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ParentType\']/b:value/a:Value');
    var $v_B;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_A)) {
        $v_B = parseInt($v_A.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_C = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ParentId\']/b:value');
    var $v_D = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_C)) ? $v_C.get_innerText() : null;
    var $v_E = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IsAddOrEditMode\']/b:value');
    var $v_F;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_E)) {
        $v_F = Boolean.parse($v_E.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_G = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IsCreateFolder\']/b:value');
    var $v_H;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_G)) {
        $v_H = Boolean.parse($v_G.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_I = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentId\']/b:value');
    var $v_J = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_I)) ? $v_I.get_innerText() : null;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.AddOrEditLocationRequest($v_1, $v_3, $v_5, $v_7, $v_9, $v_B, $v_D, $v_F, $v_H, $v_J);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('FetchSiteUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SiteAndLocationUrl\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.FetchSiteUrlResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlRequestSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlRequestSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$1('FetchSiteUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.parametersToCrmSoap);
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$2('FetchSiteUrl', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.parametersToCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlRequestSerializer$parametersToCrmSoap(request) {
    var $v_0 = request;
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('DocumentId', $v_0.get_documentId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjectId', $v_0.get_regardingObjectId(), 14) + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.$0('RegardingObjType', $v_0.get_regardingObjType(), 5);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_FetchSiteUrlRequestSerializer$loadFromCrmSoap(data) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DocumentId\']/b:value');
    var $v_1 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_3 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjType\']/b:value/a:Value');
    var $v_5;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_4)) {
        $v_5 = parseInt($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Requests.FetchSiteUrlRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationResponseSerializer() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer.$$cctor = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationResponseSerializer$$$cctor() {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$1('AddOrEditLocation', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer.loadFromCrmSoap = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_CrmSoapSerializers_Generated_AddOrEditLocationResponseSerializer$loadFromCrmSoap(soapResponse, request) {
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(soapResponse)) {
        Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$5(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'LocationId\']/b:value');
            var $v_2 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Microsoft.Crm.Client.Core.Storage.DataApi.Responses.AddOrEditLocationResponse($v_2);
        }
    }
    return null;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse(jsonResponse) {
    if (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(jsonResponse) || Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined('d')) {
        this.$O_0 = false;
        this.$S_0 = 'JSON response is null or undefined.';
    }
    else {
        var $v_0 = jsonResponse['d'];
        this.$O_0 = $v_0['Success'];
        if (!this.$O_0) {
            this.$S_0 = $v_0['ErrorMessage'];
            this.$b_0 = $v_0['ErrorCode'];
        }
        else {
            this.$r_0 = $v_0;
        }
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.prototype = {
    $r_0: null,
    $O_0: false,
    $S_0: null,
    $b_0: 0,
    
    get_response: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$get_response() {
        return this.$r_0;
    },
    
    get_errorMessage: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$get_errorMessage() {
        return this.$S_0;
    },
    set_errorMessage: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$set_errorMessage(value) {
        this.$S_0 = value;
        return value;
    },
    
    get_errorCode: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$get_errorCode() {
        return this.$b_0;
    },
    set_errorCode: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$set_errorCode(value) {
        this.$b_0 = value;
        return value;
    },
    
    get_success: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$get_success() {
        return this.$O_0;
    },
    set_success: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_JsonResponses_JsonResponse$set_success(value) {
        this.$O_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse(request, textStatus, error) {
    this.$N_0 = request;
    this.$s_0 = textStatus;
    this.$K_0 = error;
    if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(request) && request.readyState === 4) {
        if (textStatus === 'parsererror' && !Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$K_0) && this.$K_0.indexOf('<!DOCTYPE html') > -1) {
            this.$C_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml(this.$K_0.substr(this.$K_0.indexOf('<')));
        }
        else {
            this.$C_0 = (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(request.responseXML)) ? null : Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create(request.responseXML));
        }
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.fromErrorCode = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$fromErrorCode(errorCode) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(null, Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty, Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    $v_0.$C_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorCode(errorCode);
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.createFromHtml = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$createFromHtml(errorHtml) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(null, Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty, Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty);
    if (errorHtml.indexOf('<!DOCTYPE html') > -1) {
        $v_0.$C_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml(errorHtml.substr(errorHtml.indexOf('<')));
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.prototype = {
    $N_0: null,
    $s_0: null,
    $K_0: null,
    $C_0: null,
    
    get_localizedMessage: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_localizedMessage() {
        var $v_0 = window.Xrm;
        var $v_1 = $v_0.Page;
        var $v_2 = $v_1.context;
        var $v_3 = $v_2.client;
        var $v_4 = $v_3.getClient(null);
        if ($v_4 === 'Mobile') {
            var $v_5 = $v_0.Internal;
            var $v_6 = $v_5.getErrorMessage(this.$C_0.get_errorCode());
            return $v_6;
        }
        return this.get_message();
    },
    
    get_request: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_request() {
        return this.$N_0;
    },
    
    get_textStatus: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_textStatus() {
        return this.$s_0;
    },
    
    get_error: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_error() {
        return this.$K_0;
    },
    
    get_organizationServiceFault: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_organizationServiceFault() {
        return this.$C_0;
    },
    
    get_message: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_CrmErrorResponse$get_message() {
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$N_0) && this.$N_0.readyState === 4) {
            return (Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$C_0)) ? this.$N_0.responseText : this.$C_0.get_messages().get_items()[0];
        }
        return Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._String.empty;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse(soapResponse) {
    this.$7_0 = 'OrganizationResponse';
    this.$9_0 = soapResponse;
    if (soapResponse) {
        this.$9_0.addNamespace('s', 'http://schemas.xmlsoap.org/soap/envelope/');
        this.$9_0.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
        this.$9_0.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
        this.$9_0.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        this.$9_0.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse.prototype = {
    $7_0: null,
    $9_0: null,
    
    get_name: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse$get_name() {
        return this.$7_0;
    },
    
    get_responseName: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse$get_responseName() {
        return this.$7_0;
    },
    set_responseName: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse$set_responseName(value) {
        this.$7_0 = value;
        return value;
    },
    
    get_soapResponse: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse$get_soapResponse() {
        return this.$9_0;
    },
    set_soapResponse: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_OrganizationResponse$set_soapResponse(value) {
        this.$9_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveEntityResponse(soapResponse, columnSet, relatedEntitiesQuery) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        soapResponse.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
        this.$7_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        this.$E_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.loadFromCrmSoap(soapResponse.selectSingleNode('.//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type=\'a:Entity\']'), relatedEntitiesQuery);
        if (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$E_1)) {
            var $v_0 = (!Microsoft.Exchange.Clients.Owa2.Client.Core.Framework._Script.isNullOrUndefined(this.$E_1.get_relatedEntities())) ? this.$E_1.get_relatedEntities().get_relatedEntityQueries() : new Array(0);
            this.$E_1.updateColumnSet(columnSet, $v_0);
        }
    }
    else {
        this.$7_0 = 'RetreiveEntityResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.prototype = {
    $E_1: null,
    
    get_entityRecord: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveEntityResponse$get_entityRecord() {
        return this.$E_1;
    },
    set_entityRecord: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveEntityResponse$set_entityRecord(value) {
        this.$E_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMetadataChangesResponse(soapResponse) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        this.$7_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        this.$g_1 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:Results');
    }
    else {
        this.$7_0 = 'RetrieveMetadataChangesResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.prototype = {
    $g_1: null,
    $R_1: null,
    
    get_entityMetadataCollection: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMetadataChangesResponse$get_entityMetadataCollection() {
        if (!this.$R_1 && this.$9_0 && this.$g_1) {
            this.$R_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataCollectionSerializer.$6(this.$g_1);
        }
        return this.$R_1;
    },
    set_entityMetadataCollection: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMetadataChangesResponse$set_entityMetadataCollection(value) {
        this.$R_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse = function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMultipleAttributeMetadataResponse(soapResponse) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        soapResponse.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
        this.$7_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        var $v_0 = soapResponse.selectNodes('.//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type=\'a:EntityMetadataCollection\']/a:EntityMetadata/c:Attributes/c:AttributeMetadata');
        this.$W_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.$1C($v_0);
    }
    else {
        this.$7_0 = 'RetrieveMultipleAttributeResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.prototype = {
    $W_1: null,
    
    get_attributeMetadata: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMultipleAttributeMetadataResponse$get_attributeMetadata() {
        return this.$W_1;
    },
    set_attributeMetadata: function Microsoft_Crm_Client_Core_Storage_CrmSoapServiceProxy_Responses_RetrieveMultipleAttributeMetadataResponse$set_attributeMetadata(value) {
        this.$W_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService', null, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings', null, Microsoft.Crm.Client.Core.Storage.Common.ISettings);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.AttributeMetadataSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BooleanValueSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationArraySerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationParameterSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationParameterSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.BusinessNotificationSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ColumnSetSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityMetadataSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityRecordSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.EntityReferenceSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ErrorInfoSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ErrorInfoSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleResponseItemCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleResponseItemCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ExecuteMultipleSettingsSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OrganizationRequestCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QueryByEntityNameDictionarySerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QueryByEntityNameDictionarySerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.QuickFindResultSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipQueryCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelationshipSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResourceInfoSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResourceInfoSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SecurityPrivilegeMetadataCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SecurityPrivilegeMetadataCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.TraceInfoSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.TraceInfoSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ValidationResultSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011MetadataNamespace = 'http://schemas.microsoft.com/xrm/2011/Metadata';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011MetadataQueryNamespace = 'http://schemas.microsoft.com/xrm/2011/Metadata/Query';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011ContractsNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.crm2011ContractsNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.microsoft2003SerializationArraysNamespace = 'http://schemas.microsoft.com/2003/10/Serialization/Arrays';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.genericCollectionsNamespace = 'http://schemas.datacontract.org/2004/07/System.Collections.Generic';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.jsonDataType = 'text';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.soapDataResponseAsText = 'text';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.soapDataResponseAsXml = 'xml';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.jsonContentType = 'application/json; charset=utf-8';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.RequestOptions.soapContentType = 'text/xml; charset=utf-8';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$h = null;
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.CrmDateTimeSerializer.$X = null;
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$D = {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RequestSerializer.$Q = {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.ResponseSerializer.$D = {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddRecurrenceResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssignRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.BookResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckInDocumentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CheckoutDocumentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.NewDocumentResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloseIncidentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ConvertActivityResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateFolderRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SearchDocumentResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateDocumentLibrariesResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateDocumentManagementSettingsRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.MigrateToS2SRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpgradeToS2SRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ValidateUrlResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteDocumentRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DeleteRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DiscardDocumentCheckoutRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.EditDocumentPropertiesRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteMultipleResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetValidStatusTransitionResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InitializeFromResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.InviteUserResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.LoseOpportunityRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.QualifyLeadResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RescheduleResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveEntitiesForAggregateQueryResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveMultipleResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrievePrincipalAccessResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.SetStateRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.UpdateRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WhoAmIResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.WinOpportunityRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.FetchSiteUrlRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddOrEditLocationResponseSerializer.$$cctor();
