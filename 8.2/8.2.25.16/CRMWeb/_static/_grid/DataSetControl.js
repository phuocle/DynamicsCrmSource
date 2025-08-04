Type.registerNamespace('Mscrm');

Mscrm.DataSetControlDefinitions = function(definitions) {
    if (_Script.isNullOrUndefined(definitions)) {
        return;
    }
    this.DataSetDefinitions = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Framework.CustomControl.DataSetSpecificationRecord))(definitions['DataSetDefinitions']);
    this.PropertyDefinitions = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Framework.CustomControl.PropertySpecificationRecord))(definitions['PropertyDefinitions']);
}


Mscrm.DataSetControlTraceLevel = function() {}
Mscrm.DataSetControlTraceLevel.prototype = {
    off: 0, 
    error: 1, 
    warning: 2, 
    perf: 3, 
    info: 4, 
    verbose: 5
}
Mscrm.DataSetControlTraceLevel.registerEnum('Mscrm.DataSetControlTraceLevel', false);


Mscrm.DataSetSortDirection = function() {}
Mscrm.DataSetSortDirection.prototype = {
    ascending: 0, 
    descending: 1
}
Mscrm.DataSetSortDirection.registerEnum('Mscrm.DataSetSortDirection', false);


Mscrm.DataSetUpdateResultType = function() {}
Mscrm.DataSetUpdateResultType.prototype = {
    unknown: 0, 
    setValue: 1, 
    setRequiredLevel: 2, 
    setDisabled: 3, 
    isValidChange: 4, 
    recordUpdate: 10
}
Mscrm.DataSetUpdateResultType.registerEnum('Mscrm.DataSetUpdateResultType', false);


Mscrm.IDataSetColumn = function() {}
Mscrm.IDataSetColumn.registerInterface('Mscrm.IDataSetColumn');


Mscrm.IDataSetColumnEvent = function() {}
Mscrm.IDataSetColumnEvent.registerInterface('Mscrm.IDataSetColumnEvent');


Mscrm.IDataSetColumnValidator = function() {}
Mscrm.IDataSetColumnValidator.registerInterface('Mscrm.IDataSetColumnValidator');


Mscrm.IDataSetControlClientInfo = function() {}
Mscrm.IDataSetControlClientInfo.registerInterface('Mscrm.IDataSetControlClientInfo');


Mscrm.IDataSetControlDataProvider = function() {}
Mscrm.IDataSetControlDataProvider.registerInterface('Mscrm.IDataSetControlDataProvider');


Mscrm.IDataSetControlFactory = function() {}
Mscrm.IDataSetControlFactory.registerInterface('Mscrm.IDataSetControlFactory');


Mscrm.IDataSetControlFormatting = function() {}
Mscrm.IDataSetControlFormatting.registerInterface('Mscrm.IDataSetControlFormatting');


Mscrm.IDataSetControlHost = function() {}
Mscrm.IDataSetControlHost.registerInterface('Mscrm.IDataSetControlHost');


Mscrm.IDataSetControlInstance = function() {}
Mscrm.IDataSetControlInstance.registerInterface('Mscrm.IDataSetControlInstance');


Mscrm.IDataSetControlMode = function() {}
Mscrm.IDataSetControlMode.registerInterface('Mscrm.IDataSetControlMode');


Mscrm.IDataSetControlNavigationUtilities = function() {}
Mscrm.IDataSetControlNavigationUtilities.registerInterface('Mscrm.IDataSetControlNavigationUtilities');


Mscrm.IDataSetControlPropertyBag = function() {}
Mscrm.IDataSetControlPropertyBag.registerInterface('Mscrm.IDataSetControlPropertyBag');


Mscrm.IDataSetControlResources = function() {}
Mscrm.IDataSetControlResources.registerInterface('Mscrm.IDataSetControlResources');


Mscrm.IDataSetControlTheming = function() {}
Mscrm.IDataSetControlTheming.registerInterface('Mscrm.IDataSetControlTheming');


Mscrm.IDataSetControlUserAgent = function() {}
Mscrm.IDataSetControlUserAgent.registerInterface('Mscrm.IDataSetControlUserAgent');


Mscrm.IDataSetControlUtilities = function() {}
Mscrm.IDataSetControlUtilities.registerInterface('Mscrm.IDataSetControlUtilities');


Mscrm.IDataSetDefinition = function() {}
Mscrm.IDataSetDefinition.registerInterface('Mscrm.IDataSetDefinition');


Mscrm.IDataSetFieldAccessHelper = function() {}
Mscrm.IDataSetFieldAccessHelper.registerInterface('Mscrm.IDataSetFieldAccessHelper');


Mscrm.IDataSetFiltering = function() {}
Mscrm.IDataSetFiltering.registerInterface('Mscrm.IDataSetFiltering');


Mscrm.IDataSetLookup = function() {}
Mscrm.IDataSetLookup.registerInterface('Mscrm.IDataSetLookup');


Mscrm.IDataSetObject = function() {}
Mscrm.IDataSetObject.registerInterface('Mscrm.IDataSetObject');


Mscrm.IDataSetObjectEvent = function() {}
Mscrm.IDataSetObjectEvent.registerInterface('Mscrm.IDataSetObjectEvent');


Mscrm.IDataSetObjectInputs = function() {}
Mscrm.IDataSetObjectInputs.registerInterface('Mscrm.IDataSetObjectInputs');


Mscrm.IDataSetPaging = function() {}
Mscrm.IDataSetPaging.registerInterface('Mscrm.IDataSetPaging');


Mscrm.IDataSetRecord = function() {}
Mscrm.IDataSetRecord.registerInterface('Mscrm.IDataSetRecord');


Mscrm.IDataSetRecordFactory = function() {}
Mscrm.IDataSetRecordFactory.registerInterface('Mscrm.IDataSetRecordFactory');


Mscrm.IDataSetRecordSelectionHelper = function() {}
Mscrm.IDataSetRecordSelectionHelper.registerInterface('Mscrm.IDataSetRecordSelectionHelper');


Mscrm.DataSetCancellationTokenSource = function() {
    this.$v_0 = new Mscrm.DataSetCancellationToken(this);
}
Mscrm.DataSetCancellationTokenSource.prototype = {
    $v_0: null,
    $1K_0: false,
    
    get_token: function() {
        return this.$v_0;
    },
    
    get_isCanceled: function() {
        return this.$1K_0;
    },
    
    cancel: function() {
        this.$1K_0 = true;
    }
}


Mscrm.DataSetCancellationToken = function(source) {
    this.$1q_0 = source;
}
Mscrm.DataSetCancellationToken.prototype = {
    $1q_0: null,
    
    get_isCanceled: function() {
        return this.$1q_0.$1K_0;
    }
}


Mscrm.DataSetColumn = function(name, displayName, alias, dataType, visualSizeFactor, isHidden, order, disableSorting, attributes, validator) {
    this.$Q_0 = new Mscrm.DataSetCancellationTokenSource();
    this.name = name;
    this.displayName = displayName;
    this.alias = alias;
    this.dataType = dataType;
    this.visualSizeFactor = visualSizeFactor;
    this.attributes = attributes;
    this.validator = validator;
    this.isHidden = isHidden;
    this.order = order;
    this.disableSorting = disableSorting;
}
Mscrm.DataSetColumn.filterByMainEntityVisibleColumns = function(columns) {
    var $v_0 = new Array(0);
    for (var $$arr_2 = columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        if (!$v_1.get_isJoinedColumn() && !$v_1.get_isHidden()) {
            $v_0.push($v_1);
        }
    }
    return $v_0;
}
Mscrm.DataSetColumn.mapToColumnNames = function(columns) {
    var $v_0 = new Array(0);
    for (var $$arr_2 = columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.push($v_1.get_name());
    }
    return $v_0;
}
Mscrm.DataSetColumn.findColumn = function(columnName, columns) {
    for (var $$arr_2 = columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        if ($v_0.get_name() === columnName) {
            return $v_0;
        }
    }
    return null;
}
Mscrm.DataSetColumn.prototype = {
    name: null,
    displayName: null,
    dataType: null,
    alias: null,
    visualSizeFactor: 0,
    isHidden: false,
    order: 0,
    attributes: null,
    validator: null,
    disableSorting: false,
    $1T_0: null,
    $P_0: null,
    $t_0: null,
    $Q_0: null,
    
    get_$S_0: function() {
        if (!this.$P_0) {
            this.$P_0 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList());
        }
        return this.$P_0;
    },
    
    addOnChange: function(handler, system) {
        this.get_$S_0().addHandler('Change', handler, system);
    },
    
    fireOnChange: function(wrapper) {
        var $v_0 = this.get_$S_0().getHandler('Change');
        if ($v_0) {
            $v_0(wrapper, null);
        }
    },
    
    removeOnChange: function(handler) {
        this.get_$S_0().removeHandler('Change', handler);
    },
    
    get_name: function() {
        return this.name;
    },
    
    set_name: function(value) {
        this.name = value;
        return value;
    },
    
    get_displayName: function() {
        return this.displayName;
    },
    
    set_displayName: function(value) {
        this.displayName = value;
        return value;
    },
    
    get_dataType: function() {
        return this.dataType;
    },
    
    set_dataType: function(value) {
        this.dataType = value;
        return value;
    },
    
    get_alias: function() {
        return this.alias;
    },
    
    set_alias: function(value) {
        this.alias = value;
        return value;
    },
    
    get_visualSizeFactor: function() {
        return this.visualSizeFactor;
    },
    
    set_visualSizeFactor: function(value) {
        this.visualSizeFactor = value;
        return value;
    },
    
    get_isHidden: function() {
        return this.isHidden;
    },
    
    set_isHidden: function(value) {
        this.isHidden = value;
        return value;
    },
    
    get_order: function() {
        return this.order;
    },
    
    set_order: function(value) {
        this.order = value;
        return value;
    },
    
    get_attributes: function() {
        return this.attributes;
    },
    
    set_attributes: function(value) {
        this.attributes = value;
        return value;
    },
    
    get_validator: function() {
        return this.validator;
    },
    
    set_validator: function(value) {
        this.validator = value;
        return value;
    },
    
    get_disableSorting: function() {
        return this.disableSorting;
    },
    
    set_disableSorting: function(value) {
        this.disableSorting = value;
        return value;
    },
    
    get_isJoinedColumn: function() {
        return Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn(this.name);
    },
    
    get_unformattedAttributeData: function() {
        return this.$1T_0;
    },
    
    set_unformattedAttributeData: function(value) {
        this.$1T_0 = value;
        return value;
    },
    
    $w_0: 0,
    
    get_attributeType: function() {
        return this.$w_0;
    },
    
    set_attributeType: function(value) {
        this.$w_0 = value;
        return value;
    },
    
    $1D_0: null,
    
    get_attributeMetadata: function() {
        return this.$1D_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$1D_0 = value;
        return value;
    },
    
    updateAttributes: function(metadata) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.UpdateAttributes ' + this.name);
        $v_0.start();
        if (_Script.isNullOrUndefined(metadata)) {
            return;
        }
        var $v_1 = Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToServerType(metadata.get_type());
        var $v_2 = Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToCustomControlType(metadata.get_type());
        var $v_3 = Mscrm.DataSetControlAttributeHelper.mapFormatToCustomControlFormat(metadata.get_format());
        this.dataType = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.retrieveCorrespondingManifestType($v_2, $v_3);
        this.$w_0 = metadata.get_type();
        this.$1D_0 = metadata;
        var $v_4 = Mscrm.DataSetControlAttributeHelper.extractAttributesFromMetadata(metadata, $v_1);
        this.attributes = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.formatProperties($v_4);
        this.$1T_0 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.extractUnformattedAttributeData($v_4, this.attributes);
        Mscrm.DataSetControlAttributeHelper.addGlobalAssociatedAttributes(this.attributes, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext());
        $v_0.stop();
    },
    
    getDataSetLookup: function(recordFactory, selectedRecord, lookupDefinition) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Mscrm.DataSetLookup, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        if (this.$w_0 !== 6 || _Script.isNullOrUndefined(this.attributes) || !(('targets') in this.attributes)) {
            $v_0.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromException(Error.argumentNull()));
        }
        else {
            var $$t_H = this;
            var $v_1 = function($p1_0) {
                var $v_A = function() {
                    if (!$p1_0.working) {
                        $v_0.resolve($p1_0);
                    }
                };
                $v_0.done(function() {
                    $p1_0.removeOnDataSetUpdated($v_A);
                    $$t_H.$t_0 = $p1_0;
                });
                $p1_0.addOnDataSetUpdated($v_A);
            };
            if (!_Script.isNullOrUndefined(this.$t_0)) {
                var $v_2 = this.$t_0;
                $v_2.reset();
                var $v_3 = $v_2.filtering;
                $v_3.set_$2E_1((!_Script.isNullOrUndefined(selectedRecord)) ? selectedRecord.getRecordId() : null);
                $v_3.enableRelationshipFilter(selectedRecord);
                $v_2.refresh();
                $v_1($v_2);
            }
            else {
                var $v_4 = this.attributes['targets'];
                var $v_5 = $v_4[0];
                var $v_6 = Xrm.Internal.getEntityCode($v_5);
                var $$t_I = this, $$t_J = this;
                this.$30_0(Mscrm.DataSetControlDataProvider.get_instance(), lookupDefinition, $v_6).done(function($p1_0) {
                    var $v_7 = new Mscrm.DataSetLookup(Mscrm.DataSetControlDataProvider.get_instance(), recordFactory, $p1_0);
                    $p1_0.set_entityLogicalName($v_5);
                    $p1_0.set_entityTypeCode($v_6);
                    $v_7.$1E_2 = $v_5 + 'id';
                    $v_7.initialize();
                    var $v_8 = $v_7.filtering;
                    $v_8.lookupConfiguration = lookupDefinition;
                    $v_8.set_$2E_1((!_Script.isNullOrUndefined(selectedRecord)) ? selectedRecord.getRecordId() : null);
                    $v_8.enableRelationshipFilter(selectedRecord);
                    $v_7.refresh();
                    $v_1($v_7);
                }).fail(function($p1_0) {
                    var $v_9 = new Mscrm.DataSetLookup(Mscrm.DataSetControlDataProvider.get_instance(), recordFactory, null);
                    $v_9.hasError = true;
                    $v_9.errorMessage = $p1_0.get_message();
                    $v_0.resolve($v_9);
                });
            }
        }
        return $v_0.promise();
    },
    
    dispose: function() {
        this.$Q_0.cancel();
        this.attributes = null;
        this.validator = null;
        this.dataType = null;
        if (!IsNull(this.$t_0)) {
            this.$t_0.dispose();
        }
        if (!IsNull(this.$P_0)) {
            this.$P_0.clearAllHandler();
        }
    },
    
    $30_0: function($p0, $p1, $p2) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Mscrm.IDataSetObjectInputs, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = new Mscrm.DataSetObjectInputs();
        $v_1.set_isFetchXmlNotFinal(false);
        if (!IsNull($p1) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p1.fetchXml) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p1.layoutXml)) {
            $v_1.set_layoutXml($p1.layoutXml);
            $v_1.set_fetchXml($p1.fetchXml);
            $v_1.set_viewId($p1.targetViewId);
            $v_0.resolve($v_1);
        }
        else {
            var $v_2 = String.format(Mscrm.DataSetLookup.fetchXmlForDefaultLookup, $p2);
            var $$t_A = this, $$t_B = this;
            $p0.retrieveMultiple($v_2, this.$Q_0.$v_0).done(function($p1_0) {
                var $v_3 = $p1_0;
                if (!IsNull($v_3) && !IsNull($v_3.entityCollection) && !IsNull($v_3.entityCollection.get_entities())) {
                    var $v_4 = $v_3.entityCollection.get_entities()[0];
                    $v_1.set_fetchXml($v_4.get_fields()['fetchxml']);
                    $v_1.set_layoutXml($v_4.get_fields()['layoutxml']);
                    $v_1.set_viewId($v_4.get_fields()['savedqueryid']);
                    $v_0.resolve($v_1);
                }
                else {
                    $v_0.reject(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.fromErrorCode(0));
                }
            }).fail(function($p1_0) {
                $v_0.reject($p1_0);
            });
        }
        return $v_0.promise();
    }
}


Mscrm.DataSetColumnValidator = function(validator) {
    this.$1V_0 = validator;
}
Mscrm.DataSetColumnValidator.prototype = {
    $1V_0: null,
    
    validate: function(value, isValueChanging, isDisabled) {
        return new Mscrm.DataSetColumnValidatorResult(this.$1V_0.validate(value, isValueChanging, isDisabled));
    },
    
    dispose: function() {
        this.$1V_0 = null;
    }
}


Mscrm.DataSetColumnValidatorResult = function(validatorResult) {
    this.errorMessage = validatorResult.get_errorMessage();
    this.isValid = validatorResult.get_isValueValid();
}
Mscrm.DataSetColumnValidatorResult.prototype = {
    errorMessage: null,
    isValid: false,
    
    get_errorMessage: function() {
        return this.errorMessage;
    },
    
    get_isValid: function() {
        return this.isValid;
    }
}


Mscrm.DataSetControl = function(element) {
    this.$$d_$2r_3 = Function.createDelegate(this, this.$2r_3);
    this.$$d_$2C_3 = Function.createDelegate(this, this.$2C_3);
    this.$$d_$2t_3 = Function.createDelegate(this, this.$2t_3);
    this.$$d_$2q_3 = Function.createDelegate(this, this.$2q_3);
    this.$$d_$2B_3 = Function.createDelegate(this, this.$2B_3);
    this.refresh = this.Refresh;
    this.getProperty = this.GetProperty;
    this.SetParameter = this.setParameter;
    this.DisassociateAndRefresh = this.disassociateAndRefresh;
    this.DeleteConnectionAndRefresh = this.deleteConnectionAndRefresh;
    Mscrm.DataSetControl.initializeBase(this, [ element ]);
    this.$W_3 = this.get_id().replace(Mscrm.DataSetControl.datasetctrL_PREFIX, '');
    this.$3_3 = Mscrm.GridControl.findComponent(this.$W_3);
    this.$12_3 = $get(this.$W_3);
    this.$D_3 = new Mscrm.DataSetObjectInputs(this.$3_3);
    this.$1S_3(false);
    this.$1L_3 = false;
    this.get_element().style.height = '100%';
    this.get_element().className += ' ms-crm-ListControl-Editable';
    this.$Z_3 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_0 = this.get_element().attributes.getNamedItem('type');
    if ($v_0) {
        this.$O_3 = $v_0.value;
    }
    this.$3_3.add_onResetComplete(this.$$d_$2B_3);
    this.$3_3.add_onRefresh(this.$$d_$2q_3);
    if (Mscrm.InternalUtilities._String.isNullOrWhiteSpace(this.$D_3.get_fetchXml())) {
        this.$1G_3 = true;
    }
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.get_$u_3())) {
        this.get_$u_3().addTabStateChange(this.$$d_$2t_3);
    }
}
Mscrm.DataSetControl.findOrCreateComponent = function(parentId, subscribedEvents) {
    var $v_0 = String.format('{0}{1}', Mscrm.DataSetControl.datasetctrL_PREFIX, parentId);
    var $v_1 = $find($v_0);
    if (!$v_1) {
        var $v_2 = {};
        var $v_3 = Array.clone(subscribedEvents);
        $v_3.push(14);
        $v_2['subscribedEvents'] = $v_3;
        var $v_4 = $get($v_0);
        $v_1 = Mscrm.CrmUIComponent.crmCreate(Mscrm.DataSetControl, $v_2, null, null, $v_4);
    }
    return $v_1;
}
Mscrm.DataSetControl.raiseDataSetControlLibrariesLoadedEvent = function() {
    var $v_0 = Mscrm.PageManager.get_instance();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_eventManager();
        if (!IsNull($v_1)) {
            return $v_1.raiseEvent(122, {}, null);
        }
    }
    return [];
}
Mscrm.DataSetControl.$27 = function($p0) {
    var $v_0 = $P_CRM($p0.frameElement);
    return !$v_0.length || (Mscrm.DataSetControl.$27($p0.parent) && $v_0.is(':visible') && $v_0.css('visibility') === 'visible');
}
Mscrm.DataSetControl.prototype = {
    $D_3: null,
    $1G_3: false,
    $a_3: false,
    $1L_3: false,
    $2_3: null,
    
    get_controlHost: function() {
        return this.$2_3;
    },
    
    set_controlHost: function(value) {
        this.$2_3 = value;
        return value;
    },
    
    $3_3: null,
    
    get_gridControl: function() {
        return this.$3_3;
    },
    
    set_gridControl: function(value) {
        this.$3_3 = value;
        return value;
    },
    
    $W_3: null,
    
    get_gridControlId: function() {
        return this.$W_3;
    },
    
    set_gridControlId: function(value) {
        this.$W_3 = value;
        return value;
    },
    
    $12_3: null,
    
    get_gridControlElement: function() {
        return this.$12_3;
    },
    
    set_gridControlElement: function(value) {
        this.$12_3 = value;
        return value;
    },
    
    $l_3: null,
    
    get_dataSetDefinitions: function() {
        return this.$l_3;
    },
    
    set_dataSetDefinitions: function(value) {
        this.$l_3 = value;
        return value;
    },
    
    $O_3: null,
    
    get_constructorName: function() {
        return this.$O_3;
    },
    
    set_constructorName: function(value) {
        this.$O_3 = value;
        return value;
    },
    
    get_isActive: function() {
        return (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$2_3)) ? this.$2_3.isActive() : false;
    },
    
    $Z_3: null,
    
    get_customControlConfigurationId: function() {
        return this.$Z_3;
    },
    
    set_customControlConfigurationId: function(value) {
        this.$Z_3 = value;
        return value;
    },
    
    get_viewId: function() {
        return this.GetParameter('viewid');
    },
    
    get_$u_3: function() {
        if (!Mscrm.Utilities.isTurboForm()) {
            return null;
        }
        var $v_0 = $find('crmForm');
        if (IsNull($v_0)) {
            return null;
        }
        var $v_1 = $v_0.GetTab(this.get_element(), false);
        if (IsNull($v_1)) {
            return null;
        }
        try {
            return Mscrm.TurboForm.Control.PageManager.get_instance().get_primaryForm().ui.tabs.getByName($v_1.id);
        }
        catch ($$e_2) {
            return null;
        }
    },
    
    get_$2l_3: function() {
        return (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.get_$u_3())) ? this.get_$u_3().getDisplayState() === 'expanded' : true;
    },
    
    toggleGrid: function() {
        var $v_0 = this.getVisible();
        if (!IsNull(this.$3_3)) {
            this.$1S_3($v_0);
            this.setVisible(!$v_0);
        }
    },
    
    get_addContextualButton: function() {
        var $v_0 = this.$W_3 + '_addImageButton';
        return $get($v_0);
    },
    
    get_getRelationshipTypeName: function() {
        var $v_0 = this.get_ribbonRelationshipType();
        switch ($v_0) {
            case 0:
                return 'NoRelationship';
            case 1:
                return 'OneToMany';
            case 2:
                return 'ManyToMany';
        }
        return 'NoRelationship';
    },
    
    isConfigurationSame: function(configurationId) {
        return this.$Z_3.equals(new Microsoft.Crm.Client.Core.Framework.Guid(configurationId));
    },
    
    changeVisualizationTo: function(id, parameters, constructor, stylesToLoad, scriptsToLoad, configurationIdString) {
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(configurationIdString);
        if (!this.$Z_3.equals($v_0)) {
            if (new Microsoft.Crm.Client.Core.Framework.Guid(id).equals(Mscrm.TurboForm.Common.FormControlClassId.gridControl)) {
                this.toggleGrid();
                this.$3_3.set_customControlConfigurationId($v_0);
            }
            else {
                if (this.$O_3 !== constructor) {
                    this.$2w_3(parameters, constructor, stylesToLoad, scriptsToLoad);
                }
                else {
                    this.$l_3 = new Mscrm.DataSetControlDefinitions(parameters);
                    this.$1Q_3();
                }
                this.$Z_3 = $v_0;
            }
        }
        else {
            this.$2B_3(null, null);
        }
    },
    
    $2B_3: function($p0, $p1) {
        if (this.getVisible()) {
            this.$D_3.set_gridXml(this.$3_3.get_gridXml());
            this.$D_3.set_layoutXml(this.$3_3.get_layoutXml());
            this.$1Q_3();
        }
    },
    
    $2q_3: function($p0, $p1) {
        var $v_0 = this.$1h_3();
        if (!Mscrm.InternalUtilities._String.isNullOrWhiteSpace(this.$3_3.GetParameter('effectiveFetchXml'))) {
            this.$1G_3 = false;
            this.$D_3.set_gridXml(this.$3_3.get_gridXml());
            this.$D_3.set_layoutXml(this.$3_3.get_layoutXml());
            if (!this.$a_3) {
                this.$1B_3(null);
            }
            else if ($v_0) {
                this.$1Q_3();
            }
        }
    },
    
    $2t_3: function($p0) {
        this.$1j_3();
    },
    
    ClearPagingCookie: function() {
        this.SetProperty('pagingCookie', '');
    },
    
    $2r_3: function($p0) {
        this.$1B_3(null);
    },
    
    $1B_3: function($p0) {
        var $v_0 = true;
        $v_0 = $v_0 && !this.$a_3;
        $v_0 = $v_0 && !this.$1G_3;
        $v_0 = $v_0 && (this.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid || this.$2d_3());
        if ($v_0) {
            this.$2f_3($p0);
        }
    },
    
    $2f_3: function($p0) {
        if (!isNullOrEmptyString(this.$O_3)) {
            if (!$p0) {
                var $$t_1, $$t_2;
                (($$t_2 = Mscrm.JsonUtilities.tryGetParsedJson(eval(String.format('window.DataSetDefinitions{0}', this.get_id())), ($$t_1 = {'val': $p0}))), $p0 = $$t_1.val, $$t_2);
                if (Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
                    throw Error.argumentNull('dataSetDefinitions');
                }
            }
            this.$l_3 = new Mscrm.DataSetControlDefinitions($p0);
            this.$1Q_3();
            this.$a_3 = true;
        }
    },
    
    $1Q_3: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.SafeResetControlHost ' + this.get_id());
        $v_0.start();
        var $$t_2 = this, $$t_3 = this;
        this.$2x_3().done(function() {
            if ($$t_2.getVisible()) {
                $$t_2.$1R_3();
            }
            if ($$t_2.$3_3.get_visible()) {
                $$t_2.$1S_3(false);
            }
            $v_0.stop();
        }).fail(function($p1_0) {
            $$t_3.$1S_3(true);
            Xrm.Internal.trace.logT(Mscrm.DataSetControl, 'Failed initializing DataSetControl. Error: {0}', $p1_0.message);
        });
    },
    
    $2x_3: function() {
        var $v_0 = null;
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Mscrm.DataSetControlErrorStatus);
        this.$1x_3();
        var $v_2 = new Mscrm.DataSetControlFactory();
        try {
            $v_0 = $v_2.buildDataSetControl(this.get_element(), this.$W_3, this.$O_3, this.$l_3, this.$D_3, this.$1h_3());
        }
        catch ($v_3) {
            return $v_1.reject(Mscrm.DataSetControlErrorStatus.buildFromException($v_3));
        }
        var $$t_7 = this, $$t_8 = this;
        $v_0.done(function($p1_0) {
            try {
                $$t_7.$2_3 = $p1_0;
                $$t_7.$2_3.add_onSelectionChanged($$t_7.$$d_$2C_3);
                $$t_7.$2_3.init();
                $v_1.resolve(true);
            }
            catch ($v_4) {
                $v_1.reject(Mscrm.DataSetControlErrorStatus.buildFromException($v_4));
            }
        }).fail(function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    $2d_3: function() {
        try {
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(eval(this.$O_3))) {
                return true;
            }
            return false;
        }
        catch ($$e_0) {
            return false;
        }
    },
    
    $1S_3: function($p0) {
        if (this.get_gridType() !== Mscrm.GridControl.inlineSubGrid) {
            if (!this.$3_3.get_visible() && $p0) {
                this.$3_3.setAsRibbonSelectedControl();
            }
        }
        if (this.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid) {
            this.$3_3.setVisible($p0);
        }
        else {
            Sys.UI.DomElement.setVisible(this.$12_3, $p0);
        }
        if ($p0) {
            this.$3_3.Refresh();
        }
    },
    
    $1R_3: function() {
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$2_3) && this.getVisible() && this.get_gridType() !== Mscrm.GridControl.inlineSubGrid) {
            setSelectedControl(this);
        }
    },
    
    $2w_3: function($p0, $p1, $p2, $p3) {
        this.$O_3 = $p1;
        this.$2n_3($p2);
        this.$2m_3($p3);
        this.get_element().style.display = 'block';
        this.$a_3 = false;
        this.$1B_3($p0);
    },
    
    $2n_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = String.format('{0}{1}', '$webresource:', $p0[$v_0]);
            Mscrm.CrmHeader.setStyleSheet(Mscrm.CrmUri.create($v_1), true);
        }
    },
    
    $2m_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = String.format('{0}{1}', '$webresource:', $p0[$v_0]);
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create($v_1), true);
        }
    },
    
    $1h_3: function() {
        return this.get_$2l_3() && this.getVisible();
    },
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1B_3(null);
        if (!this.$a_3) {
            $addHandler(window, 'load', this.$$d_$2r_3);
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$1x_3();
        if (!IsNull(this.$D_3)) {
            this.$D_3.dispose();
            this.$D_3 = null;
        }
        if (!this.$3_3.get_isDisposed()) {
            if (this.$3_3.get_gridType() !== Mscrm.GridControl.hompageGrid) {
                $removeHandler(window, 'load', this.$$d_$2r_3);
            }
            this.$3_3.remove_onResetComplete(this.$$d_$2B_3);
            this.$3_3.remove_onRefresh(this.$$d_$2q_3);
        }
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.get_$u_3())) {
            this.get_$u_3().removeTabStateChange(this.$$d_$2t_3);
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    },
    
    $1x_3: function() {
        if (!IsNull(this.$2_3)) {
            this.$2_3.remove_onSelectionChanged(this.$$d_$2C_3);
            this.$2_3.dispose();
        }
    },
    
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case 14:
                if (!IsNull(this.$2_3)) {
                    this.$2_3.resize(this.get_element().offsetWidth, this.get_element().offsetHeight);
                }
                break;
            case 87:
            case 9:
            case 90:
                if (!IsNull(this.$2_3) && this.getVisible() && (!this.$1L_3 || eventCode === 87)) {
                    this.$1L_3 = true;
                    this.$1R_3();
                }
                this.$1j_3();
                break;
            case 50:
                if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$2_3)) {
                    this.$2_3.get_propertyBag().refresh();
                }
                break;
            case 122:
                if (!this.$a_3) {
                    this.$1B_3(null);
                }
                break;
            case 46:
                if (!IsNull(this.$2_3) && !IsNull(this.$2_3.get_controlInstance())) {
                    this.$2_3.get_controlInstance().onPreNavigation();
                    if (!IsNull(this.$2_3.get_primaryDataSet())) {
                        var $v_0 = this.$2_3.get_primaryDataSet().getSelectedRecord();
                        if (!IsNull($v_0)) {
                            if (!$v_0.isRecordValid()) {
                                var $v_1 = confirm(Xrm.Internal.getResourceString('LOCID_FORMS_SAVE_CONFIRM_TITLE'));
                                return $v_1;
                            }
                        }
                    }
                }
                break;
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
    },
    
    $1j_3: function() {
        if (IsNull(this.$2_3)) {
            return;
        }
        var $v_0 = this.$1h_3();
        if (!this.$2_3.isActive() && $v_0) {
            this.$2_3.activate(this.get_element().offsetWidth, this.get_element().offsetHeight);
        }
        else if (this.$2_3.isActive() && !$v_0) {
            this.$2_3.deactivate();
        }
    },
    
    $2C_3: function() {
        if (this.getVisible()) {
            this.$1R_3();
            this.raiseEventWithCheck(45, null);
        }
    },
    
    getRecordsFromInnerGrid: function(onlySelectedRecords) {
        throw Error.create('NotImplementedException');
    },
    
    add_onRefresh: function(value) {
        this.get_events().addHandler('OnRefresh', value);
    },
    
    remove_onRefresh: function(value) {
        this.get_events().removeHandler('OnRefresh', value);
    },
    
    addButtonClickHandler: function() {
        throw Error.create('NotImplementedException');
    },
    
    deleteConnectionAndRefresh: function() {
        throw Error.create('NotImplementedException');
    },
    
    disassociateAndRefresh: function(associationName, parentTypeCode, parentId, targetTypeCode) {
        throw Error.create('NotImplementedException');
    },
    
    get_entityDisplayName: function() {
        throw Error.create('NotImplementedException');
    },
    
    get_entityDisplayPluralName: function() {
        throw Error.create('NotImplementedException');
    },
    
    exportToExcel: function() {
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create('/_static/_common/scripts/ribbonactions.js'), true);
        Mscrm.GridRibbonActions.exportToExcel(this, this.get_entityTypeCode());
    },
    
    getCellValue: function(columnName, rowId) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(this.$2_3)) {
            return null;
        }
        rowId = rowId.replace('{', '').replace('}', '');
        var $v_0 = this.$2_3.get_primaryDataSet().get_records()[rowId];
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            return null;
        }
        var $v_1 = $v_0;
        switch ($v_1.getColumnType(columnName)) {
            case 'owner':
            case 'lookup':
                var $v_2 = $v_1.getValue(columnName);
                return (IsNull($v_2) || isNullOrEmptyString($v_2.toString())) ? '' : 'Existed';
            case 'picklist':
                var $v_3 = $v_1.getValue(columnName);
                return (IsNull($v_3) || isNullOrEmptyString($v_3.toString())) ? '' : $v_3.toString();
            default:
                var $v_4 = $v_1.reformatValue(columnName);
                return (Mscrm.InternalUtilities.JSTypes.isNull($v_4)) ? null : $v_4.toString();
        }
    },
    
    GetParameter: function(name) {
        return this.$D_3.getParameter(name);
    },
    
    GetProperty: function(name) {
        return this.$D_3.getProperty(name);
    },
    
    SetProperty: function(name, value) {
        this.$D_3.setProperty(name, value);
    },
    
    get_gridType: function() {
        return this.$3_3.get_gridType();
    },
    
    get_gridXml: function() {
        return this.$D_3.get_gridXml();
    },
    
    get_hasMorePages: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_paging().get_hasNextPage() || this.$2_3.get_primaryDataSet().get_paging().get_hasPreviousPage();
        }
        catch ($$e_0) {
            return false;
        }
    },
    
    isLiteSubGrid: function() {
        return this.$3_3.isLiteSubGrid();
    },
    
    get_pageNumber: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_paging().get_currentPageNumber();
        }
        catch ($$e_0) {
            return 0;
        }
    },
    
    get_pageRecordCount: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_sortedRecordIds().length;
        }
        catch ($$e_0) {
            return 0;
        }
    },
    
    Refresh: function() {
        this.$2_3.refresh();
    },
    
    setParameter: function(name, value) {
        this.$D_3.setParameter(name, value);
    },
    
    get_totalRecordCount: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_paging().get_totalResultCount();
        }
        catch ($$e_0) {
            return 0;
        }
    },
    
    get_viewIsUserOwned: function() {
        return this.$3_3.get_viewIsUserOwned();
    },
    
    get_viewTitle: function() {
        return this.$3_3.get_viewTitle();
    },
    
    get_disabled: function() {
        throw Error.create('NotImplementedException');
    },
    
    set_disabled: function(value) {
        throw Error.create('NotImplementedException');
        return value;
    },
    
    getVisible: function() {
        var $v_0 = Mscrm.DataSetControl.$27(window.self) && $P_CRM(this.get_element()).is(':visible');
        return $v_0;
    },
    
    setFocus: function() {
        throw Error.create('NotImplementedException');
    },
    
    setVisible: function(isVisible) {
        var $v_0 = $P_CRM('#' + this.get_id()).get(0);
        if (!IsNull($v_0)) {
            Sys.UI.DomElement.setVisible($v_0, isVisible);
        }
        else {
            Sys.UI.DomElement.setVisible(this.get_element(), isVisible);
        }
        if (isVisible) {
            this.$1R_3();
        }
        if (IsNull(this.$2_3)) {
            return;
        }
        this.$1j_3();
    },
    
    get_allRecordIds: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_allRecordIds();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    get_allRecords: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_allRecords();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    get_entityTypeCode: function() {
        return this.$D_3.get_entityTypeCode();
    },
    
    get_entityTypeName: function() {
        return this.$D_3.get_entityLogicalName();
    },
    
    get_recordCount: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_recordCount();
        }
        catch ($$e_0) {
            return 0;
        }
    },
    
    get_ribbonContextType: function() {
        var $v_0 = this.$D_3.get_ribbonContextType();
        if (isNullOrEmptyString($v_0)) {
            $v_0 = 'HomePageGrid';
        }
        return $v_0;
    },
    
    get_ribbonRelationshipType: function() {
        var $v_0 = this.$D_3.get_ribbonRelationshipType();
        if (!isNaN($v_0)) {
            return $v_0;
        }
        return 0;
    },
    
    get_selectedIds: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_selectedIds();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    get_selectedRecordCount: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_selectedRecordCount();
        }
        catch ($$e_0) {
            return 0;
        }
    },
    
    get_selectedRecords: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_selectedRecords();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    get_unselectedIds: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_unselectedIds();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    get_unselectedRecords: function() {
        try {
            return this.$2_3.get_primaryDataSet().get_selectionHelper().get_unselectedRecords();
        }
        catch ($$e_0) {
            return new Array(0);
        }
    },
    
    getChart: function() {
        return this.$3_3.getChart();
    },
    
    getEntityName: function() {
        return this.$3_3.getEntityName();
    },
    
    getGrid: function() {
        return new Mscrm.XrmControlDataSetWrapper(this);
    },
    
    getViewSelector: function() {
        return this.$3_3.getViewSelector();
    }
}


Mscrm.DataSetControlAttributeHelper = function() {
}
Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToServerType = function(type) {
    switch (type) {
        case 0:
            return 'boolean';
        case 1:
            return 'customer';
        case 2:
            return 'datetime';
        case 3:
            return 'decimal';
        case 4:
            return 'double';
        case 5:
            return 'integer';
        case 6:
            return 'lookup';
        case 7:
            return 'memo';
        case 8:
            return 'money';
        case 9:
            return 'owner';
        case 10:
            return 'partylist';
        case 11:
            return 'picklist';
        case 12:
            return 'state';
        case 13:
            return 'status';
        case 14:
            return 'string';
        default:
            return '';
    }
}
Mscrm.DataSetControlAttributeHelper.extractAttributesFromMetadata = function(metadata, serverType) {
    var $v_0 = {};
    var $v_1 = (Array.contains(Mscrm.DataSetControlAttributeHelper.statusAttributeList, serverType)) ? 'picklist' : serverType;
    var $v_2 = Microsoft.Crm.Client.Core.Framework.CustomControlAttributeProperty.getAttributeListByType($v_1);
    for (var $$arr_5 = $v_2, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
        var $v_3 = $$arr_5[$$idx_7];
        switch ($v_3) {
            case 'behavior':
                $v_0['behavior'] = metadata.get_behavior();
                break;
            case 'defaultValue':
                $v_0['defaultValue'] = metadata.get_defaultFormValue();
                break;
            case 'displayName':
                $v_0['displayName'] = metadata.get_displayName();
                break;
            case 'format':
                $v_0['format'] = metadata.get_format();
                break;
            case 'imeMode':
                $v_0['imeMode'] = metadata.get_imeMode();
                break;
            case 'isSecured':
                $v_0['isSecured'] = metadata.get_isSecured();
                break;
            case 'lastUpdatedField':
                $v_0['lastUpdatedField'] = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getRollupDateFieldName(metadata.get_logicalName());
                break;
            case 'lastUpdatedValue':
                $v_0['lastUpdatedValue'] = null;
                break;
            case 'maxLength':
                $v_0['maxLength'] = metadata.get_maxLength();
                break;
            case 'maxValue':
                $v_0['maxValue'] = metadata.get_maxValue();
                break;
            case 'minValue':
                $v_0['minValue'] = metadata.get_minValue();
                break;
            case 'name':
                $v_0['name'] = metadata.get_logicalName();
                break;
            case 'options':
                $v_0['options'] = metadata.get_optionSet();
                break;
            case 'precision':
                $v_0['precision'] = metadata.get_precision();
                break;
            case 'recalculate':
                $v_0['recalculate'] = null;
                break;
            case 'requiredLevel':
                $v_0['requiredLevel'] = metadata.get_requiredLevel();
                break;
            case 'rollupStateField':
                $v_0['rollupStateField'] = null;
                break;
            case 'rollupStateValue':
                $v_0['rollupStateValue'] = null;
                break;
            case 'rollupValid':
                $v_0['rollupValid'] = null;
                break;
            case 'sourcetype':
                $v_0['sourcetype'] = metadata.get_sourceType();
                break;
            case 'targets':
                $v_0['targets'] = metadata.get_targets();
                break;
            case 'type':
                $v_0['type'] = $v_1;
                break;
        }
    }
    return $v_0;
}
Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToCustomControlType = function(type) {
    switch (type) {
        case 4:
            return 'float';
        default:
            return Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToServerType(type);
    }
}
Mscrm.DataSetControlAttributeHelper.mapFormatToCustomControlFormat = function(format) {
    var $v_0 = format.toLowerCase();
    switch ($v_0) {
        case 'dateonly':
            return 'date';
        case 'dateandtime':
            return 'datetime';
        default:
            return $v_0;
    }
}
Mscrm.DataSetControlAttributeHelper.addGlobalAssociatedAttributes = function(attributes, userContext) {
    var $v_0 = (attributes['type']);
    var $v_1 = (attributes['format']);
    $v_0 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.toLowerCase() : null;
    $v_1 = (!_Script.isNullOrUndefined($v_1)) ? $v_1.toLowerCase() : null;
    if ($v_0 === 'integer') {
        if ($v_1 === 'timezone') {
            attributes['timezonebycode'] = Mscrm.DataSetControlAttributeHelper.$2W(userContext);
        }
        else if ($v_1 === 'language') {
            attributes['languagebycode'] = window.EnabledLanguages;
        }
    }
}
Mscrm.DataSetControlAttributeHelper.$2W = function($p0) {
    var $v_0 = $p0.get_externalContext()['timezonedefinitionbycode'];
    var $v_1 = {};
    for (var $$arr_3 = $v_0.get_keys(), $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        $v_1[$v_2] = $v_0.get_item($v_2).get_userInterfaceName();
    }
    return $v_1;
}


Mscrm.DataSetControlClientInfo = function(maxAvailableWidth, viewportHeight) {
    this.formFactor = 3;
    this.userAgent = new Mscrm.DataSetControlUserAgent();
    this.languageCode = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().get_userCultureLcid();
    this.locale = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().get_formatInfoCultureName();
    this.orgSettings = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_organizationSettings().getExternalExposedData();
    this.orgSettings['showWeekNumber'] = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().get_showCalendarWeeks();
    this.dateFormattingInfo = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().getExternalDateFormatData();
    this.numberFormattingInfo = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().getExternalNumberFormatData();
    this.maxAvailableWidth = maxAvailableWidth;
    this.viewportHeight = viewportHeight;
    this.isRTL = !Mscrm.Utilities.get_isLeftToRight();
    this.isHighContrast = Mscrm.Utilities.isHighContrastEnabled();
}
Mscrm.DataSetControlClientInfo.getCurrentUserTimeZoneUtcOffset = function(date) {
    return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().get_timeZoneUtcOffsetMinutes() + Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.getDSTAdjustmentMinutes(date, Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_timeZoneAdjusters());
}
Mscrm.DataSetControlClientInfo.prototype = {
    formFactor: 0,
    userAgent: null,
    languageCode: 0,
    locale: null,
    orgSettings: null,
    dateFormattingInfo: null,
    numberFormattingInfo: null,
    maxAvailableWidth: 0,
    viewportHeight: 0,
    isRTL: false,
    isHighContrast: false,
    
    get_formFactor: function() {
        return this.formFactor;
    },
    
    set_formFactor: function(value) {
        this.formFactor = value;
        return value;
    },
    
    get_userAgent: function() {
        return this.userAgent;
    },
    
    set_userAgent: function(value) {
        this.userAgent = value;
        return value;
    },
    
    get_languageCode: function() {
        return this.languageCode;
    },
    
    set_languageCode: function(value) {
        this.languageCode = value;
        return value;
    },
    
    get_locale: function() {
        return this.locale;
    },
    
    set_locale: function(value) {
        this.locale = value;
        return value;
    },
    
    get_orgSettings: function() {
        return this.orgSettings;
    },
    
    set_orgSettings: function(value) {
        this.orgSettings = value;
        return value;
    },
    
    get_dateFormattingInfo: function() {
        return this.dateFormattingInfo;
    },
    
    set_dateFormattingInfo: function(value) {
        this.dateFormattingInfo = value;
        return value;
    },
    
    get_numberFormattingInfo: function() {
        return this.numberFormattingInfo;
    },
    
    set_numberFormattingInfo: function(value) {
        this.numberFormattingInfo = value;
        return value;
    },
    
    get_maxAvailableWidth: function() {
        return this.maxAvailableWidth;
    },
    
    set_maxAvailableWidth: function(value) {
        this.maxAvailableWidth = value;
        return value;
    },
    
    get_viewportHeight: function() {
        return this.viewportHeight;
    },
    
    set_viewportHeight: function(value) {
        this.viewportHeight = value;
        return value;
    },
    
    get_isRTL: function() {
        return this.isRTL;
    },
    
    set_isRTL: function(value) {
        this.isRTL = value;
        return value;
    },
    
    get_isHighContrast: function() {
        return this.isHighContrast;
    },
    
    set_isHighContrast: function(value) {
        this.isHighContrast = value;
        return value;
    },
    
    getUserTimeZoneUtcOffset: function(date) {
        return Mscrm.DataSetControlClientInfo.getCurrentUserTimeZoneUtcOffset(date);
    },
    
    $1i_0: function($p0, $p1) {
        var $v_0 = '';
        switch ($p1) {
            case 1:
                $v_0 = '(ms-crm-InlineTabBody-Read)';
                break;
            case 0:
                $v_0 = '(ms-crm-InlineTab-Read)';
                break;
            case 2:
                $v_0 = '(ms-crm-FormSection)';
                break;
            default:
                return null;
        }
        var $v_1 = new RegExp(String.format($v_0), 'g');
        var $v_2 = $p0;
        while (true) {
            $v_2 = $v_2.parentNode;
            if ($v_2.className && $v_2.className.match($v_1) && $v_2.className.match($v_1).length > 0) {
                return $v_2;
            }
            if ($v_2.nodeName === 'BODY') {
                return null;
            }
        }
    },
    
    adjustDataAreaHeight: function(controlName, currentHeight, rowHeight, nonDataHeight) {
        var $v_0 = 17;
        var $v_1 = 2;
        try {
            var $v_2 = $find(controlName);
            if (IsNull($v_2) || IsNull($v_2.$3_3)) {
                return currentHeight;
            }
            if ($v_2.get_gridType() === Mscrm.GridControl.inlineSubGrid && $v_2.$3_3.isLiteSubGrid()) {
                var $v_3 = $v_2.$3_3.GetGridSpan();
                if (IsNull($v_3)) {
                    return currentHeight;
                }
                var $v_4 = Number.parseInvariant($v_2.$3_3.GetProperty('recsPerPage'));
                if (isNaN($v_4)) {
                    return currentHeight;
                }
                var $v_5 = 0;
                var $v_6 = 0;
                var $v_7 = $v_3.querySelector('.ms-crm-Form-SubGrid-Layout-Lite');
                var $v_8 = this.$1i_0($v_2.get_element(), 2);
                if (!IsNull($v_8)) {
                    var $v_B = $v_8.style.display;
                    $v_8.style.display = '';
                    var $v_C = this.$1i_0($v_2.get_element(), 1);
                    if (!IsNull($v_C)) {
                        var $v_D = $v_C.style.display;
                        $v_C.style.display = 'inline-block';
                        var $v_E = this.$1i_0($v_2.get_element(), 0);
                        if (!IsNull($v_E)) {
                            var $v_F = $v_E.style.display;
                            $v_E.style.display = '';
                            $v_5 = $v_2.get_element().offsetHeight;
                            $v_6 = $v_7.offsetHeight;
                            $v_E.style.display = $v_F;
                        }
                        $v_C.style.display = $v_D;
                    }
                    $v_8.style.display = $v_B;
                }
                var $v_9 = ($v_4 + 1) * rowHeight + $v_0 + $v_1;
                if ($v_9 === $v_5) {
                    return $v_9;
                }
                $v_2.get_element().style.height = String.format('{0}px', $v_9);
                var $v_A = $v_3.parentNode.attributes.getNamedItem('rowspan');
                if (IsNull($v_A)) {
                    return currentHeight;
                }
                $v_3.parentNode.style.height = String.format('{0}px', $v_9 + nonDataHeight + $v_6);
                this.viewportHeight = $v_9 + nonDataHeight;
                return $v_9;
            }
        }
        catch ($$e_K) {
        }
        return currentHeight;
    }
}


Mscrm.DataSetControlDataProvider = function($p0) {
    this.$15_0 = {};
    this.$1N_0 = $p0.get_metadataCache();
    this.$1U_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges($p0.get_userContext());
}
Mscrm.DataSetControlDataProvider.get_instance = function() {
    if (_Script.isNullOrUndefined(Mscrm.DataSetControlDataProvider.$1J)) {
        Mscrm.DataSetControlDataProvider.$1J = new Mscrm.DataSetControlDataProvider(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance());
    }
    return Mscrm.DataSetControlDataProvider.$1J;
}
Mscrm.DataSetControlDataProvider.prototype = {
    $15_0: null,
    $1N_0: null,
    $1U_0: null,
    
    get_userPrivileges: function() {
        return this.$1U_0;
    },
    
    set_userPrivileges: function(value) {
        this.$1U_0 = value;
        return value;
    },
    
    retrieveMultiple: function(fetchXml, cancellationToken) {
        return this.$3A_0(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse, Xrm.Internal.messages.retrieveMultiple(fetchXml), cancellationToken);
    },
    
    update: function(record) {
        return Xrm.Internal.messages.update(record, true);
    },
    
    retrieve: function(reference, columnNames) {
        return Xrm.Internal.messages.retrieve(reference.LogicalName, reference.get_identifier(), columnNames);
    },
    
    retrieveRecordRelatedEntities: function(entityMetadata, source, identifier, columnSet, record) {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().retrieveRecordRelatedEntities(entityMetadata, source, identifier, columnSet, record);
    },
    
    retrieveEntityMetadata: function(entityLogicalName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        if (!_Script.isNullOrUndefined(this.$15_0[entityLogicalName])) {
            return this.$15_0[entityLogicalName];
        }
        this.$15_0[entityLogicalName] = $v_0.promise();
        var $v_1 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.RetrieveMetaDataChanges ' + entityLogicalName);
        $v_1.start();
        var $$t_7 = this, $$t_8 = this;
        Xrm.Internal.messages.retrieveEntityMetadata(entityLogicalName, Xrm.Page.context.getUserLcid()).done(function($p1_0) {
            $v_1.stop();
            if (!_Script.isNullOrUndefined($p1_0.get_entityMetadataCollection()) && $p1_0.get_entityMetadataCollection().get_count() > 0) {
                var $v_2 = $p1_0.get_entityMetadataCollection().get_item(0).get_attributeMetadataCollection();
                var $v_3 = $p1_0.get_entityMetadataCollection().get_item(0).get_entityMetadata();
                $$t_7.$1N_0.cacheEntityMetadata($v_3);
                $$t_7.$1N_0.cacheAttributeMetadata(entityLogicalName, $v_2.get_allAttributes(), new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata))($v_2.get_attributes()));
                $v_0.resolve($p1_0.get_entityMetadataCollection().get_item(0));
            }
            else {
                $v_0.reject(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.fromErrorCode(-2147093952));
            }
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    getResourceString: function(label) {
        return Xrm.Internal.getResourceString(label);
    },
    
    $3A_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory($p0, $p1);
        var $$t_7 = this, $$t_8 = this;
        $p2.done(function($p1_0) {
            if (!$p3.get_isCanceled()) {
                $v_0.resolve($p1_0);
            }
        }).fail(function($p1_0) {
            if (!$p3.get_isCanceled()) {
                $v_0.reject($p1_0);
            }
        });
        return $v_0.promise();
    }
}


Mscrm.DataSetControlErrorStatus = function($p0) {
    this.message = $p0;
}
Mscrm.DataSetControlErrorStatus.buildFromCrmErrorResponse = function(errorResponse) {
    return new Mscrm.DataSetControlErrorStatus(errorResponse.get_localizedMessage() || errorResponse.get_message());
}
Mscrm.DataSetControlErrorStatus.buildFromMessage = function(errorMessage) {
    return new Mscrm.DataSetControlErrorStatus(errorMessage);
}
Mscrm.DataSetControlErrorStatus.buildFromErrorStatus = function(error) {
    return new Mscrm.DataSetControlErrorStatus(error.get_message());
}
Mscrm.DataSetControlErrorStatus.buildFromException = function(ex) {
    return new Mscrm.DataSetControlErrorStatus(ex.message);
}
Mscrm.DataSetControlErrorStatus.buildFromGenericError = function(error) {
    if (Mscrm.DataSetControlErrorStatus.isInstanceOfType(error)) {
        return error;
    }
    else if (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.isInstanceOfType(error)) {
        return Mscrm.DataSetControlErrorStatus.buildFromCrmErrorResponse(error);
    }
    else if (Microsoft.Crm.Client.Core.Framework.ErrorStatus.isInstanceOfType(error)) {
        return Mscrm.DataSetControlErrorStatus.buildFromErrorStatus(error);
    }
    else if (Error.isInstanceOfType(error)) {
        return Mscrm.DataSetControlErrorStatus.buildFromException(error);
    }
    else if (String.isInstanceOfType(error)) {
        return Mscrm.DataSetControlErrorStatus.buildFromMessage(error);
    }
    else {
    }
    return null;
}
Mscrm.DataSetControlErrorStatus.prototype = {
    message: null,
    
    get_message: function() {
        return this.message;
    },
    
    set_message: function(value) {
        this.message = value;
        return value;
    }
}


Mscrm.DataSetControlFactory = function() {
}
Mscrm.DataSetControlFactory.prototype = {
    
    buildDataSetControl: function(container, controlName, constructorName, dataSetDefinitions, primaryDataSetInputs, isActive) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Mscrm.IDataSetControlHost, Mscrm.DataSetControlErrorStatus);
        var $v_1 = new RegExp('^[0-9a-zA-Z.]+$');
        if (IsNull(container) || IsNull(dataSetDefinitions) || IsNull(primaryDataSetInputs) || Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(controlName) || Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(constructorName)) {
            throw Error.argument('One or more null arguments passed.');
        }
        if (!$v_1.test(constructorName)) {
            throw Error.argument(constructorName, 'Invalid constructor name.');
        }
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.DataSetControl')) {
            throw Error.notImplemented('DataSetControl FCB is not enabled.');
        }
        var $$t_A = this, $$t_B = this;
        this.$2Q_0().done(function() {
            var $v_2 = new Mscrm.DataSetControlHost(container);
            $v_2.set_state(Mscrm.DataSetControlUtilities.getState(constructorName, primaryDataSetInputs.get_viewId()));
            $v_2.set_propertyBag($$t_A.$2S_0(container, controlName, constructorName, dataSetDefinitions, primaryDataSetInputs, isActive));
            $v_2.set_controlInstance(eval('new ' + constructorName + '()'));
            $v_0.resolve($v_2);
        }).fail(function($p1_0) {
            $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromErrorStatus($p1_0));
        });
        return $v_0.promise();
    },
    
    buildDataSetRecord: function(record, columns, controlName) {
        var $v_0 = new Mscrm.DataSetFieldAccessHelper(Mscrm.DataSetControlDataProvider.get_instance(), record);
        var $v_1 = Mscrm.DataSetControlDataProvider.get_instance().getResourceString('Form_Component_Error');
        return new Mscrm.DataSetRecord(record, columns, $v_0, controlName, $v_1);
    },
    
    $2S_0: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = new Mscrm.DataSetControlPropertyBag();
        $v_0.set_client(new Mscrm.DataSetControlClientInfo($p0.offsetWidth, $p0.offsetHeight));
        $v_0.set_utils(new Mscrm.DataSetControlUtilities($p2, $p4.get_viewId()));
        $v_0.set_navigation(new Mscrm.DataSetControlNavigationUtilities());
        $v_0.set_parameters({});
        $v_0.set_mode(new Mscrm.DataSetControlMode($p5));
        $v_0.set_resources(new Mscrm.DataSetControlResources());
        $v_0.set_theming(new Mscrm.DataSetControlTheming());
        $v_0.set_formatting(new Mscrm.DataSetControlFormatting());
        $v_0.set_updatedProperties(new Array(0));
        this.$2R_0($v_0, $p3, $p1, $p4);
        return $v_0;
    },
    
    $2R_0: function($p0, $p1, $p2, $p3) {
        for (var $$arr_4 = $p1.DataSetDefinitions.get_keys(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_0 = $$arr_4[$$idx_6];
            if ($v_0 !== 'Grid') {
                continue;
            }
            var $v_1 = $p1.DataSetDefinitions.get_item($v_0);
            if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.ViewId)) {
                continue;
            }
            $p3.set_entityLogicalName((Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.TargetEntityType)) ? $v_1.EntityName : $v_1.TargetEntityType);
            var $v_2 = new Array(0);
            for (var $v_4 = 0; $v_4 < $v_1.Columns.length; $v_4++) {
                var $v_5 = $v_1.Columns[$v_4];
                $v_2[$v_4] = new Microsoft.Crm.Client.Core.Framework.CustomControl.ColumnDefinition($v_5.Name, $v_5.DisplayName, $v_5.Alias, $v_5.DataType, $v_5.VisualSizeFactor);
            }
            var $v_3 = new Mscrm.DataSetDefinition($v_1.Name, new Microsoft.Crm.Client.Core.Framework.Guid($v_1.ViewId), $v_2, $v_1.ContextFilter, $v_1.ExtraCondition, $v_1.RelationshipType, $v_1.EnableViewPicker, $v_1.FilteredViewIds, $v_1.RelationshipName, $v_1.ReferencingName);
            $v_3.$18_0 = $v_1.Lookups;
            $v_3.$7_0 = this.$2P_0($p2, $v_3, $p3);
            $p0.addDataSetParameter($v_0, $v_3.$7_0);
        }
        for (var $$arr_D = $p1.PropertyDefinitions.get_keys(), $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
            var $v_6 = $$arr_D[$$idx_F];
            var $v_7 = $p1.PropertyDefinitions.get_item($v_6);
            $p0.addPropertyParameter($v_6, new Mscrm.DataSetStaticProperty($v_7.Value, $v_7.Type));
        }
    },
    
    $2P_0: function($p0, $p1, $p2) {
        var $v_0 = new Array(0);
        if (!IsNull($p1.$L_0)) {
            for (var $v_2 = 0; $v_2 < $p1.$L_0.length; $v_2++) {
                var $v_3 = $p1.$L_0[$v_2];
                $v_0[$v_2] = new Mscrm.DataSetColumn($v_3.get_name(), $v_3.get_displayName(), $v_3.get_alias(), $v_3.get_dataType(), $v_3.get_visualSizeFactor(), false, -1, false, null, null);
            }
        }
        var $v_1 = new Mscrm.DataSetObject(Mscrm.DataSetControlDataProvider.get_instance(), this, $p2);
        $v_1.set_controlName($p0);
        $v_1.set_columns($v_0);
        $v_1.set_lookups(this.$2O_0($p2.get_entityLogicalName(), $p1.$18_0));
        $v_1.set_selectionHelper(new Mscrm.DataSetRecordSelectionHelper($v_1));
        $v_1.initialize();
        return $v_1;
    },
    
    $2O_0: function($p0, $p1) {
        var $v_0 = {};
        var $$dict_6 = $p1;
        for (var $$key_7 in $$dict_6) {
            var $v_1 = { key: $$key_7, value: $$dict_6[$$key_7] };
            var $v_2 = $v_1.value;
            var $v_3 = new Mscrm.DataSetLookupDefinition($p0, $v_2['DependentAttributeName'], $v_2['DependentAttributeType'], Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_2['DefaultViewId']).toString(), $v_2['FilterRelationshipName'], (('AllowFilterOff') in $v_2) ? Boolean.parse($v_2['AllowFilterOff']) : false, (('ContextFilter') in $v_2) ? $v_2['ContextFilter'] : '', (('ExtraCondition') in $v_2) ? $v_2['ExtraCondition'] : '', (('FetchXml') in $v_2) ? $v_2['FetchXml'] : '', (('LayoutXml') in $v_2) ? $v_2['LayoutXml'] : '');
            $v_0[$v_1.key] = $v_3;
        }
        return $v_0;
    },
    
    $2Q_0: function() {
        var $v_0 = window.self.masterWindow();
        $v_0.LOCID_VALIDATION_ERROR = window.LOCID_VALIDATION_ERROR;
        $v_0.LOCID_VALIDATION_ERROR_CURRENCY = window.LOCID_VALIDATION_ERROR_CURRENCY;
        $v_0.LOCID_VALIDATION_ERROR_DECIMAL = window.LOCID_VALIDATION_ERROR_DECIMAL;
        $v_0.LOCID_VALIDATION_ERROR_EMAIL = window.LOCID_VALIDATION_ERROR_EMAIL;
        $v_0.LOCID_VALIDATION_ERROR_INTEGER = window.LOCID_VALIDATION_ERROR_INTEGER;
        $v_0.LOCID_VALIDATION_ERROR_MONEY = window.LOCID_VALIDATION_ERROR_MONEY;
        $v_0.LOCID_VALIDATION_ERROR_READONLY = window.LOCID_VALIDATION_ERROR_READONLY;
        $v_0.LOCID_VALIDATION_ERROR_REQUIRED = window.LOCID_VALIDATION_ERROR_REQUIRED;
        $v_0.LOCID_VALIDATION_ERROR_URL = window.LOCID_VALIDATION_ERROR_URL;
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.initialize();
    }
}


Mscrm.DataSetControlFormatting = function() {
}
Mscrm.DataSetControlFormatting.prototype = {
    
    formatDateShort: function(value, includeTime) {
        if (includeTime) {
            return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(value, 0);
        }
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateValue(value, 0);
    },
    
    formatDateLong: function(value) {
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatLongDateValue(value, 0);
    },
    
    formatDateLongAbbreviated: function(value) {
        throw Error.notImplemented('FormatDateLongAbbreviated');
    },
    
    formatDateYearMonth: function(value) {
        throw Error.notImplemented('FormatDateYearMonth');
    },
    
    formatInteger: function(value) {
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatIntegerValue(value);
    },
    
    formatDecimal: function(value, precision) {
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatDecimalValue(value, precision);
    },
    
    formatCurrency: function(value, precision, symbol) {
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatCurrencyValue(value, symbol, precision);
    },
    
    getWeekOfYear: function(value) {
        throw Error.notImplemented('GetWeekOfYear');
    },
    
    formatTime: function(value, behavior) {
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(value, behavior);
    },
    
    formatDateAsFilterStringInUTC: function(value, includeTime) {
        throw Error.notImplemented('FormatDateAsFilterStringInUTC');
    }
}


Mscrm.DataSetControlHost = function(container) {
    this.$$d_$2o_1 = Function.createDelegate(this, this.$2o_1);
    this.$$d_$29_1 = Function.createDelegate(this, this.$29_1);
    this.$$d_update = Function.createDelegate(this, this.update);
    Mscrm.DataSetControlHost.initializeBase(this);
    this.$b_1 = container;
}
Mscrm.DataSetControlHost.prototype = {
    $X_1: null,
    $b_1: null,
    $A_1: null,
    
    add_onSelectionChanged: function(value) {
        this.addEventHandler('OnSelectionChangedPropertyName', value);
    },
    
    remove_onSelectionChanged: function(value) {
        this.addEventHandler('OnSelectionChangedPropertyName', value);
    },
    
    get_controlInstance: function() {
        return this.$X_1;
    },
    
    set_controlInstance: function(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_primaryDataSet: function() {
        return (!_Script.isNullOrUndefined(this.$A_1)) ? this.$A_1.get_primaryDataSet() : null;
    },
    
    get_propertyBag: function() {
        return this.$A_1;
    },
    
    set_propertyBag: function(value) {
        this.$A_1 = value;
        this.$A_1.add_onPropertyBagChanged(this.$$d_update);
        this.$A_1.add_onSelectionChanged(this.$$d_$29_1);
        return value;
    },
    
    $11_1: null,
    
    get_state: function() {
        return this.$11_1;
    },
    
    set_state: function(value) {
        this.$11_1 = value;
        return value;
    },
    
    init: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetControlHost.Init ' + this.$b_1.id);
        $v_0.start();
        this.$A_1.get_updatedProperties().push('activation');
        try {
            this.$X_1.init(this.$b_1, this.$$d_$2o_1, this.$A_1, this.$11_1, null);
        }
        catch ($v_1) {
            this.$1M_1('Init', $v_1);
        }
        this.$A_1.refresh();
        $v_0.stop();
    },
    
    update: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetControlHost.Update ' + this.$b_1.id);
        $v_0.start();
        try {
            this.$X_1.update(this.$A_1);
        }
        catch ($v_1) {
            this.$1M_1('Update', $v_1);
        }
        this.$A_1.clearUpdatedProperties();
        $v_0.stop();
    },
    
    activate: function(width, height) {
        this.$A_1.activate(width, height);
    },
    
    deactivate: function() {
        this.$A_1.deactivate();
    },
    
    isActive: function() {
        return this.$A_1.get_mode().get_isActive();
    },
    
    resize: function(width, height) {
        this.$A_1.resize(width, height);
    },
    
    refresh: function() {
        this.$A_1.refresh();
    },
    
    dispose: function() {
        try {
            this.$X_1.destroy();
        }
        catch ($v_0) {
            this.$1M_1('Destroy', $v_0);
        }
        this.$A_1.remove_onPropertyBagChanged(this.$$d_update);
        this.$A_1.remove_onSelectionChanged(this.$$d_$29_1);
        this.$A_1.dispose();
        Mscrm.NotifyPropertyChanged.prototype.dispose.call(this);
        this.$X_1 = null;
        this.$A_1 = null;
        this.$11_1 = null;
    },
    
    $2o_1: function() {
        var $v_0 = null;
        try {
            $v_0 = this.$X_1.getOutputs();
        }
        catch ($v_1) {
            this.$1M_1('GetOutputs', $v_1);
        }
        if (!_Script.isNullOrUndefined($v_0)) {
            this.$A_1.updateLinkedOutputs($v_0);
        }
    },
    
    $29_1: function() {
        this.fireEvent('OnSelectionChangedPropertyName', null);
    },
    
    $1M_1: function($p0, $p1) {
        var $v_0 = String.format('{0} \n\n {1}', $p1.message, $p1.stack);
        var $v_1 = String.format('Control id={0} type={1} threw an exception on {2}(): {3}', this.$b_1.id, this.$b_1.getAttribute('type'), $p0, $v_0);
        Xrm.Internal.trace.error(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(1033), $v_1);
    }
}


Mscrm.DataSetControlMode = function(isActive) {
    this.isActive = isActive;
    this.isPreview = Mscrm.DataSetDeviceConfigurationHelper.isPreviewForm();
}
Mscrm.DataSetControlMode.prototype = {
    isControlDisabled: false,
    isRead: false,
    isPreview: false,
    isOffline: false,
    isVisible: false,
    isActive: false,
    pageInfo: null,
    label: null,
    hasFocus: false,
    tabindexmin: 0,
    tabindexmax: 0,
    
    get_isControlDisabled: function() {
        return this.isControlDisabled;
    },
    
    set_isControlDisabled: function(value) {
        this.isControlDisabled = value;
        return value;
    },
    
    get_isRead: function() {
        return this.isRead;
    },
    
    set_isRead: function(value) {
        this.isRead = value;
        return value;
    },
    
    get_isPreview: function() {
        return this.isPreview;
    },
    
    set_isPreview: function(value) {
        this.isPreview = value;
        return value;
    },
    
    get_isOffline: function() {
        return this.isOffline;
    },
    
    set_isOffline: function(value) {
        this.isOffline = value;
        return value;
    },
    
    get_isVisible: function() {
        return this.isVisible;
    },
    
    set_isVisible: function(value) {
        this.isVisible = value;
        return value;
    },
    
    get_isActive: function() {
        return this.isActive;
    },
    
    set_isActive: function(value) {
        this.isActive = value;
        return value;
    },
    
    get_pageInfo: function() {
        return this.pageInfo;
    },
    
    set_pageInfo: function(value) {
        this.pageInfo = value;
        return value;
    },
    
    get_label: function() {
        return this.label;
    },
    
    set_label: function(value) {
        this.label = value;
        return value;
    },
    
    get_hasFocus: function() {
        return this.hasFocus;
    },
    
    set_hasFocus: function(value) {
        this.hasFocus = value;
        return value;
    },
    
    get_tabIndexMin: function() {
        return this.tabindexmin;
    },
    
    set_tabIndexMin: function(value) {
        this.tabindexmin = value;
        return value;
    },
    
    get_tabIndexMax: function() {
        return this.tabindexmax;
    },
    
    set_tabIndexMax: function(value) {
        this.tabindexmax = value;
        return value;
    },
    
    blur: function() {
    },
    
    focus: function() {
    }
}


Mscrm.DataSetControlNavigationUtilities = function() {
}
Mscrm.DataSetControlNavigationUtilities.prototype = {
    
    openEditForm: function(entity) {
        if (!_Script.isNullOrUndefined(entity) && !IsNull(entity.Id)) {
            var $v_0 = entity.Id.toString();
            if (!isNullOrEmptyString($v_0)) {
                window.parent.Xrm.Utility.openEntityForm(entity.LogicalName, $v_0);
            }
        }
    },
    
    openCreateForm: function(logicalName) {
        throw Error.notImplemented('OpenCreateForm');
    },
    
    openSearch: function(query) {
        throw Error.notImplemented('OpenSearch');
    },
    
    openDashboard: function(dashboardId) {
        throw Error.notImplemented('OpenDashboard');
    },
    
    openUrl: function(url) {
        throw Error.notImplemented('OpenUrl');
    },
    
    openUrlWithProtocol: function(target, protocol) {
        throw Error.notImplemented('OpenUrlWithProtocol');
    },
    
    openPhoneNumber: function(phoneNumber) {
        throw Error.notImplemented('OpenPhoneNumber');
    },
    
    openMaps: function(target) {
        throw Error.notImplemented('OpenMaps');
    }
}


Mscrm.DataSetControlPropertyBag = function() {
    this.$$d_$29_1 = Function.createDelegate(this, this.$29_1);
    this.$$d_$2A_1 = Function.createDelegate(this, this.$2A_1);
    Mscrm.DataSetControlPropertyBag.initializeBase(this);
}
Mscrm.DataSetControlPropertyBag.prototype = {
    parameters: null,
    client: null,
    factory: null,
    theming: null,
    resources: null,
    utils: null,
    formatting: null,
    navigation: null,
    mode: null,
    children: null,
    updatedProperties: null,
    
    add_onPropertyBagChanged: function(value) {
        this.addEventHandler('OnPropertyBagChanged', value);
    },
    
    remove_onPropertyBagChanged: function(value) {
        this.addEventHandler('OnPropertyBagChanged', value);
    },
    
    add_onSelectionChanged: function(value) {
        this.addEventHandler('OnSelectionChanged', value);
    },
    
    remove_onSelectionChanged: function(value) {
        this.addEventHandler('OnSelectionChanged', value);
    },
    
    get_parameters: function() {
        return this.parameters;
    },
    
    set_parameters: function(value) {
        this.parameters = value;
        return value;
    },
    
    get_client: function() {
        return this.client;
    },
    
    set_client: function(value) {
        this.client = value;
        return value;
    },
    
    get_factory: function() {
        return this.factory;
    },
    
    set_factory: function(value) {
        this.factory = value;
        return value;
    },
    
    get_theming: function() {
        return this.theming;
    },
    
    set_theming: function(value) {
        this.theming = value;
        return value;
    },
    
    get_resources: function() {
        return this.resources;
    },
    
    set_resources: function(value) {
        this.resources = value;
        return value;
    },
    
    get_utils: function() {
        return this.utils;
    },
    
    set_utils: function(value) {
        this.utils = value;
        return value;
    },
    
    get_formatting: function() {
        return this.formatting;
    },
    
    set_formatting: function(value) {
        this.formatting = value;
        return value;
    },
    
    get_navigation: function() {
        return this.navigation;
    },
    
    set_navigation: function(value) {
        this.navigation = value;
        return value;
    },
    
    get_mode: function() {
        return this.mode;
    },
    
    set_mode: function(value) {
        this.mode = value;
        return value;
    },
    
    get_children: function() {
        return this.children;
    },
    
    set_children: function(value) {
        this.children = value;
        return value;
    },
    
    get_updatedProperties: function() {
        return this.updatedProperties;
    },
    
    set_updatedProperties: function(value) {
        this.updatedProperties = value;
        return value;
    },
    
    get_primaryDataSet: function() {
        if (!_Script.isNullOrUndefined(this.parameters) && !_Script.isNullOrUndefined(this.parameters['Grid'])) {
            return (this.parameters['Grid']);
        }
        return null;
    },
    
    addDataSetParameter: function(parameterKey, dataSetObject) {
        this.parameters[parameterKey] = dataSetObject;
        dataSetObject.addOnDataSetUpdated(this.$$d_$2A_1);
        dataSetObject.addOnSelectionChange(this.$$d_$29_1);
    },
    
    addPropertyParameter: function(parameterKey, staticProperty) {
        this.parameters[parameterKey] = staticProperty;
    },
    
    activate: function(width, height) {
        this.mode.set_isActive(true);
        this.$2M_1(width, height);
        this.$28_1();
    },
    
    deactivate: function() {
        this.mode.set_isActive(false);
        this.$28_1();
    },
    
    resize: function(width, height) {
        var $v_0 = this.$2M_1(width, height);
        if ($v_0) {
            this.fireEvent('OnPropertyBagChanged', null);
        }
    },
    
    refresh: function() {
        var $$dict_1 = this.parameters;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if (Mscrm.IDataSetObject.isInstanceOfType($v_0.value)) {
                ($v_0.value).refresh(null);
            }
        }
    },
    
    clearUpdatedProperties: function() {
        this.updatedProperties = new Array(0);
    },
    
    updateLinkedOutputs: function(outputs) {
        var $$dict_3 = outputs;
        for (var $$key_4 in $$dict_3) {
            var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_1 = this.parameters[$v_0.key];
            if (Mscrm.IDataSetObject.isInstanceOfType($v_1) && Mscrm.IDataSetRecord.isInstanceOfType($v_0.value)) {
                ($v_1).updateLinkedOutput($v_0.value);
            }
        }
    },
    
    dispose: function() {
        Mscrm.NotifyPropertyChanged.prototype.dispose.call(this);
        var $$dict_2 = this.parameters;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (Mscrm.IDataSetObject.isInstanceOfType($v_0.value)) {
                var $v_1 = $v_0.value;
                $v_1.removeOnDataSetUpdated(this.$$d_$2A_1);
                $v_1.removeOnSelectionChange(this.$$d_$29_1);
                $v_1.dispose();
            }
        }
    },
    
    $2A_1: function() {
        this.updatedProperties.push('dataset');
        this.fireEvent('OnPropertyBagChanged', null);
    },
    
    $28_1: function() {
        this.updatedProperties.push('activation');
        this.fireEvent('OnPropertyBagChanged', null);
    },
    
    $29_1: function() {
        this.fireEvent('OnSelectionChanged', null);
    },
    
    $2M_1: function($p0, $p1) {
        var $v_0 = this.client.get_maxAvailableWidth() !== $p0 || this.client.get_viewportHeight() !== $p1;
        if ($v_0) {
            this.client.set_maxAvailableWidth($p0);
            this.client.set_viewportHeight($p1);
            this.updatedProperties.push('layout');
        }
        return $v_0;
    }
}


Mscrm.DataSetControlResources = function() {
}
Mscrm.DataSetControlResources.prototype = {
    
    getString: function(label) {
        return Xrm.Internal.getResourceString(label);
    },
    
    getResource: function(resourceId, onSuccess, onFailure) {
        throw Error.notImplemented('GetResource');
    }
}


Mscrm.DataSetControlTheming = function() {
    this.backgroundcolor = '#FFFFFF';
    this.controlborder = '#CCCCCC';
    this.controlshade = '#F3F1F1';
    this.defaultcustomentitycolor = '#006551';
    this.defaultentitycolor = '#001CA5';
    this.fontcolor = '#000000';
    this.fontfamily = '\'SegoeUI\', \'Segoe UI\'';
    this.fontsize = '14px';
    this.globallinkcolor = '#1160B7';
    this.headercolor = '#1160B7';
    this.hoverlinkeffect = '#D7EBF9';
    this.logotooltip = 'Microsoft Dynamics CRM';
    this.navbarbackgroundcolor = '#002050';
    this.navbarshelfcolor = '#DFE2E8';
    this.processcontrolcolor = '#D24726';
    this.selectedlinkeffect = '#B1D6F0';
}
Mscrm.DataSetControlTheming.prototype = {
    navbarbackgroundcolor: null,
    backgroundcolor: null,
    navbarshelfcolor: null,
    headercolor: null,
    globallinkcolor: null,
    logotooltip: null,
    selectedlinkeffect: null,
    hoverlinkeffect: null,
    processcontrolcolor: null,
    defaultentitycolor: null,
    defaultcustomentitycolor: null,
    controlshade: null,
    controlborder: null,
    fontfamily: null,
    fontcolor: null,
    fontsize: null,
    
    get_navBarBackgroundColor: function() {
        return this.navbarbackgroundcolor;
    },
    
    set_navBarBackgroundColor: function(value) {
        this.navbarbackgroundcolor = value;
        return value;
    },
    
    get_backgroundColor: function() {
        return this.backgroundcolor;
    },
    
    set_backgroundColor: function(value) {
        this.backgroundcolor = value;
        return value;
    },
    
    get_navBarShelfColor: function() {
        return this.navbarshelfcolor;
    },
    
    set_navBarShelfColor: function(value) {
        this.navbarshelfcolor = value;
        return value;
    },
    
    get_headerColor: function() {
        return this.headercolor;
    },
    
    set_headerColor: function(value) {
        this.headercolor = value;
        return value;
    },
    
    get_globalLinkColor: function() {
        return this.globallinkcolor;
    },
    
    set_globalLinkColor: function(value) {
        this.globallinkcolor = value;
        return value;
    },
    
    get_selectedLinkEffect: function() {
        return this.selectedlinkeffect;
    },
    
    set_selectedLinkEffect: function(value) {
        this.selectedlinkeffect = value;
        return value;
    },
    
    get_hoverLinkEffect: function() {
        return this.hoverlinkeffect;
    },
    
    set_hoverLinkEffect: function(value) {
        this.hoverlinkeffect = value;
        return value;
    },
    
    get_logoToolTip: function() {
        return this.logotooltip;
    },
    
    set_logoToolTip: function(value) {
        this.logotooltip = value;
        return value;
    },
    
    get_processControlColor: function() {
        return this.processcontrolcolor;
    },
    
    set_processControlColor: function(value) {
        this.processcontrolcolor = value;
        return value;
    },
    
    get_defaultEntityColor: function() {
        return this.defaultentitycolor;
    },
    
    set_defaultEntityColor: function(value) {
        this.defaultentitycolor = value;
        return value;
    },
    
    get_defaultCustomEntityColor: function() {
        return this.defaultcustomentitycolor;
    },
    
    set_defaultCustomEntityColor: function(value) {
        this.defaultcustomentitycolor = value;
        return value;
    },
    
    get_controlShade: function() {
        return this.controlshade;
    },
    
    set_controlShade: function(value) {
        this.controlshade = value;
        return value;
    },
    
    get_controlBorder: function() {
        return this.controlborder;
    },
    
    set_controlBorder: function(value) {
        this.controlborder = value;
        return value;
    },
    
    get_fontFamily: function() {
        return this.fontfamily;
    },
    
    set_fontFamily: function(value) {
        this.fontfamily = value;
        return value;
    },
    
    get_fontColor: function() {
        return this.fontcolor;
    },
    
    set_fontColor: function(value) {
        this.fontcolor = value;
        return value;
    },
    
    get_fontSize: function() {
        return this.fontsize;
    },
    
    set_fontSize: function(value) {
        this.fontsize = value;
        return value;
    },
    
    disableUITransitions: function() {
    },
    
    rightAlignEdit: function() {
    },
    
    inlineLayout: function(val) {
    },
    
    getEntityColor: function(entityLogicalName) {
        return '#0000ff';
    }
}


Mscrm.DataSetControlUserAgent = function() {
    this.isWin = (window.navigator.appVersion.indexOf('Win') !== -1) || (window.navigator.appVersion.indexOf('NT') !== -1);
    this.isWinPhone10 = window.navigator.appVersion.indexOf('Windows Phone 10.') !== -1;
    this.isAndroid = Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid();
    this.isIos = Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari();
    this.isBrowserIE = Mscrm.Utilities.isIE();
    this.isBrowserChrome = Mscrm.Utilities.isChrome();
    this.isBrowserFirefox = Mscrm.Utilities.isFirefox();
    this.isMobilePhone = Mscrm.CrmBrowser.get_currentBrowser().get_isMobile();
}
Mscrm.DataSetControlUserAgent.prototype = {
    isWin: false,
    isWinPhone10: false,
    isAndroid: false,
    isAndroidModern: false,
    isIos: false,
    isBrowserIE: false,
    isBrowserChrome: false,
    isBrowserFirefox: false,
    isMobilePhone: false,
    
    get_isWin: function() {
        return this.isWin;
    },
    
    set_isWin: function(value) {
        this.isWin = value;
        return value;
    },
    
    get_isWinPhone10: function() {
        return this.isWinPhone10;
    },
    
    set_isWinPhone10: function(value) {
        this.isWinPhone10 = value;
        return value;
    },
    
    get_isAndroid: function() {
        return this.isAndroid;
    },
    
    set_isAndroid: function(value) {
        this.isAndroid = value;
        return value;
    },
    
    get_isAndroidModern: function() {
        return this.isAndroidModern;
    },
    
    set_isAndroidModern: function(value) {
        this.isAndroidModern = value;
        return value;
    },
    
    get_isIos: function() {
        return this.isIos;
    },
    
    set_isIos: function(value) {
        this.isIos = value;
        return value;
    },
    
    get_isBrowserIE: function() {
        return this.isBrowserIE;
    },
    
    set_isBrowserIE: function(value) {
        this.isBrowserIE = value;
        return value;
    },
    
    get_isBrowserChrome: function() {
        return this.isBrowserChrome;
    },
    
    set_isBrowserChrome: function(value) {
        this.isBrowserChrome = value;
        return value;
    },
    
    get_isBrowserFirefox: function() {
        return this.isBrowserFirefox;
    },
    
    set_isBrowserFirefox: function(value) {
        this.isBrowserFirefox = value;
        return value;
    },
    
    get_isMobilePhone: function() {
        return this.isMobilePhone;
    },
    
    set_isMobilePhone: function(value) {
        this.isMobilePhone = value;
        return value;
    }
}


Mscrm.DataSetControlUtilities = function(constructorName, viewId) {
    this.$O_0 = constructorName;
    this.$1Z_0 = viewId;
}
Mscrm.DataSetControlUtilities.getState = function(constructorName, viewId) {
    var $v_0 = Xrm.Internal.getLocalStorageItem(Mscrm.DataSetControlUtilities.$25(constructorName, viewId));
    return (_Script.isNullOrUndefined($v_0)) ? {} : Sys.Serialization.JavaScriptSerializer.deserialize($v_0);
}
Mscrm.DataSetControlUtilities.$25 = function($p0, $p1) {
    return String.format('DataSetControlCustomizations_{0}_{1}', $p0, $p1);
}
Mscrm.DataSetControlUtilities.prototype = {
    $O_0: null,
    $1Z_0: null,
    
    crmUrlEncode: function(s) {
        return CrmEncodeDecode.CrmUrlEncode(s);
    },
    
    crmHtmlEncode: function(s) {
        return CrmEncodeDecode.CrmHtmlEncode(s);
    },
    
    isNullOrUndefined: function(obj) {
        return _Script.isNullOrUndefined(obj);
    },
    
    createPerformanceMarker: function(id) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker(id);
    },
    
    createPerformanceStopwatch: function(id) {
        return new Mscrm.Performance.PerformanceStopwatch(id);
    },
    
    createCrmUri: function(url) {
        throw Error.notImplemented('CreateCrmUri');
    },
    
    openInBrowser: function(url) {
        throw Error.notImplemented('OpenInBrowser');
    },
    
    getServiceUri: function(service) {
        throw Error.notImplemented('GetServiceUri');
    },
    
    setNotification: function(msg, id) {
        throw Error.notImplemented('SetNotification');
    },
    
    clearNotification: function(id) {
        throw Error.notImplemented('ClearNotification');
    },
    
    log: function(customControlName, message, logType) {
        var $v_0 = customControlName + ': ' + message;
        switch (logType) {
            case 1:
                Xrm.Internal.trace.error(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(1033), $v_0);
                break;
            case 2:
                Xrm.Internal.trace.warning(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(1033), $v_0);
                break;
            default:
                Xrm.Internal.trace.log(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(1033), $v_0);
                break;
        }
    },
    
    setState: function(state) {
        Xrm.Internal.setLocalStorageItem(Mscrm.DataSetControlUtilities.$25(this.$O_0, this.$1Z_0), Sys.Serialization.JavaScriptSerializer.serialize(state));
        return true;
    },
    
    tryCreateGuid: function(str) {
        return Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(str);
    },
    
    disablePanoramaScroll: function(value) {
        throw Error.notImplemented('DisablePanoramaScroll');
    },
    
    requestRender: function() {
        throw Error.notImplemented('RequestRender');
    },
    
    isTabPressed: function() {
        throw Error.notImplemented('IsTabPressed');
    },
    
    setLastTabPressedTime: function(lastTabPressTime) {
        throw Error.notImplemented('SetLastTabPressedTime');
    },
    
    setInteractionMode: function(newMode) {
        throw Error.notImplemented('SetInteractionMode');
    },
    
    getInteractionMode: function() {
        throw Error.notImplemented('GetInteractionMode');
    }
}


Mscrm.DataSetDefinition = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
    this.$2J_0 = -1;
    this.$1b_0 = $p0;
    this.$1t_0 = $p1;
    this.$L_0 = $p2;
    this.$1v_0 = $p3;
    this.$2H_0 = $p4;
    this.$1c_0 = $p6;
    this.$1e_0 = $p7;
    this.$2J_0 = $p5;
    this.$2I_0 = $p8;
    this.$2G_0 = $p9;
}
Mscrm.DataSetDefinition.prototype = {
    $1b_0: null,
    $1t_0: null,
    $7_0: null,
    $L_0: null,
    $1v_0: null,
    $2H_0: null,
    $1c_0: false,
    $1e_0: null,
    $18_0: null,
    
    get_lookups: function() {
        return this.$18_0;
    },
    
    set_lookups: function($p0) {
        this.$18_0 = $p0;
        return $p0;
    },
    
    $2I_0: null,
    $2G_0: null,
    
    get_dataSetName: function() {
        return this.$1b_0;
    },
    
    get_dataSetObject: function() {
        return this.$7_0;
    },
    
    set_dataSetObject: function($p0) {
        this.$7_0 = $p0;
        return $p0;
    },
    
    get_viewId: function() {
        return this.$1t_0;
    },
    
    get_enableViewPicker: function() {
        return this.$1c_0;
    },
    
    get_filteredViewIds: function() {
        return this.$1e_0;
    },
    
    get_columns: function() {
        return this.$L_0;
    },
    
    add_onDataSetUpdated: function($p0) {
        if (!_Script.isNullOrUndefined(this.$7_0)) {
            this.$7_0.addOnDataSetUpdated($p0);
        }
    },
    
    remove_onDataSetUpdated: function($p0) {
        if (!_Script.isNullOrUndefined(this.$7_0)) {
            this.$7_0.removeOnDataSetUpdated($p0);
        }
    },
    
    dispose: function() {
        if (!_Script.isNullOrUndefined(this.$7_0)) {
            this.$7_0.dispose();
        }
    }
}


Mscrm.DataSetDeviceConfigurationHelper = function() {
}
Mscrm.DataSetDeviceConfigurationHelper.isPreviewForm = function() {
    var $v_0 = getAttributeInWindow('_isPreviewForm');
    return !_Script.isNullOrUndefined($v_0) && Boolean.parse($v_0.toString());
}


Mscrm.DataSetFetchXmlHelper = function() {
}
Mscrm.DataSetFetchXmlHelper.refreshFetchXmlSorting = function(fetchXmlDocument, sortingInfo, entityLogicalName) {
    if (!_Script.isNullOrUndefined(sortingInfo)) {
        Mscrm.DataSetFetchXmlHelper.$2T(fetchXmlDocument);
        Mscrm.DataSetFetchXmlHelper.$1w(fetchXmlDocument, entityLogicalName, sortingInfo.get_SortByField(), sortingInfo.get_SortDescending());
        Mscrm.DataSetFetchXmlHelper.$1w(fetchXmlDocument, entityLogicalName, sortingInfo.get_SecondarySortByField(), sortingInfo.get_SecondarySortDescending());
    }
}
Mscrm.DataSetFetchXmlHelper.refreshFetchXmlRollupFields = function(fetchXmlDocument, rollupDateColumnNames, entityLogicalName) {
    if (!_Script.isNullOrUndefined(rollupDateColumnNames) && rollupDateColumnNames.get_Count() > 0) {
        var $v_0 = String.format('/fetch/entity[@name=\'{0}\']', entityLogicalName);
        var $v_1 = XUI.Xml.SelectSingleNode(fetchXmlDocument, $v_0, null);
        if (!_Script.isNullOrUndefined($v_1)) {
            for (var $v_2 = 0; $v_2 < rollupDateColumnNames.get_Count(); $v_2++) {
                var $v_3 = rollupDateColumnNames.get_item($v_2);
                var $v_4 = $v_0;
                var $v_5 = $v_1;
                if (Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn($v_3)) {
                    var $v_8 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityAlias($v_3);
                    $v_3 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityColumnName($v_3);
                    $v_4 = String.format('//link-entity[@alias=\'{0}\']', $v_8);
                    $v_5 = XUI.Xml.SelectSingleNode(fetchXmlDocument, $v_4, null);
                }
                var $v_6 = String.format('{0}/attribute[@name=\'{1}\']', $v_4, $v_3);
                var $v_7 = XUI.Xml.SelectSingleNode(fetchXmlDocument, $v_6, null);
                if (_Script.isNullOrUndefined($v_7)) {
                    Mscrm.DataSetFetchXmlHelper.$2U(fetchXmlDocument, $v_5, $v_3);
                }
            }
        }
    }
}
Mscrm.DataSetFetchXmlHelper.$2T = function($p0) {
    if (!_Script.isNullOrUndefined($p0)) {
        var $v_0 = XUI.Xml.SelectNodes($p0, '/fetch/entity//order', null);
        if (!_Script.isNullOrUndefined($v_0) && $v_0.length > 0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                $v_0[$v_1].parentNode.removeChild($v_0[$v_1]);
            }
        }
    }
}
Mscrm.DataSetFetchXmlHelper.$1w = function($p0, $p1, $p2, $p3) {
    var $v_0 = null;
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p2)) {
        var $v_1 = String.format('/fetch/entity[@name=\'{0}\']', $p1);
        var $v_2 = $p2.split('.');
        if ($v_2.length > 1) {
            var $v_3 = $v_2[0];
            $p2 = $v_2[1];
            $v_1 = String.format('/fetch/entity[@name=\'{0}\']/link-entity[@alias=\'{1}\']', $p1, $v_3);
        }
        $v_0 = XUI.Xml.SelectSingleNode($p0, $v_1, null);
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_4 = $p0.createElement('order');
            var $v_5 = $p0.createAttribute('attribute');
            $v_5.value = $p2;
            $v_4.attributes.setNamedItem($v_5);
            var $v_6 = $p0.createAttribute('descending');
            $v_6.value = $p3.toString();
            $v_4.attributes.setNamedItem($v_6);
            $v_0.appendChild($v_4);
        }
    }
}
Mscrm.DataSetFetchXmlHelper.$2U = function($p0, $p1, $p2) {
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p2)) {
        var $v_0 = $p0.createElement('attribute');
        var $v_1 = $p0.createAttribute('name');
        $v_1.value = $p2;
        $v_0.attributes.setNamedItem($v_1);
        $p1.appendChild($v_0);
    }
}
Mscrm.DataSetFetchXmlHelper.refreshXmlFiltering = function(fetchXmlDocument, baseFilterXml, additionalFilterXml, entityLogicalName) {
    var $v_0 = String.format('/fetch/entity[@name=\'{0}\']', entityLogicalName);
    var $v_1 = XUI.Xml.SelectSingleNode(fetchXmlDocument, $v_0, null);
    if (!_Script.isNullOrUndefined($v_1)) {
        var $v_2 = XUI.Xml.SelectNodes(fetchXmlDocument, $v_0 + '/filter', null);
        if (!_Script.isNullOrUndefined($v_2) && $v_2.length > 0) {
            $v_2[0].parentNode.removeChild($v_2[0]);
        }
        var $v_3 = '';
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(baseFilterXml)) {
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(additionalFilterXml)) {
                $v_3 += '<filter type=\"' + Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(0).toLowerCase() + '\">';
                $v_3 += baseFilterXml;
                $v_3 += additionalFilterXml;
                $v_3 += '</filter>';
            }
            else {
                $v_3 = baseFilterXml;
            }
        }
        else {
            $v_3 = additionalFilterXml;
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
            $v_1.appendChild(XUI.Xml.LoadXml($v_3).documentElement);
        }
    }
}
Mscrm.DataSetFetchXmlHelper.addInternalColumns = function(fetchXml, entityLogicalName) {
    var $v_0 = XUI.Xml.LoadXml(fetchXml);
    entityLogicalName = entityLogicalName.toLowerCase();
    var $v_1 = String.format('window.{0}_HasStateCode', entityLogicalName);
    var $v_2 = eval($v_1);
    if ($v_2) {
        Mscrm.DataSetFetchXmlHelper.$1u($v_0, entityLogicalName, 'statecode');
    }
    if (entityLogicalName === 'systemuser') {
        Mscrm.DataSetFetchXmlHelper.$1u($v_0, entityLogicalName, 'isdisabled');
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_0);
}
Mscrm.DataSetFetchXmlHelper.$1u = function($p0, $p1, $p2) {
    var $v_0 = String.format('/fetch/entity[@name=\'{0}\']', $p1);
    var $v_1 = String.format('/attribute[@name=\'{0}\']', $p2);
    var $v_2 = XUI.Xml.SelectSingleNode($p0, $v_0, null);
    var $v_3 = !_Script.isNullOrUndefined($v_2);
    var $v_4 = !_Script.isNullOrUndefined(XUI.Xml.SelectSingleNode($v_2, $v_1, null));
    if (!$v_3 || $v_4) {
        return;
    }
    var $v_5 = $p0.createElement('attribute');
    var $v_6 = $p0.createAttribute('name');
    $v_6.value = $p2;
    $v_5.attributes.setNamedItem($v_6);
    $v_2.appendChild($v_5);
}
Mscrm.DataSetFetchXmlHelper.setContextFilterValue = function(fetchXmlDocument, queryContextId) {
    var $v_0 = XUI.Xml.SelectSingleNode(fetchXmlDocument, '/fetch/entity//condition[not(@value) and @operator=\'eq\']', null);
    if (!_Script.isNullOrUndefined($v_0)) {
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(queryContextId)) {
            $v_0.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute(fetchXmlDocument, 'value', queryContextId));
        }
        else {
            if (!_Script.isNullOrUndefined($v_0.parentNode) && !_Script.isNullOrUndefined($v_0.parentNode.parentNode)) {
                if ($v_0.parentNode.parentNode.nodeName === 'link-entity' && !_Script.isNullOrUndefined($v_0.parentNode.parentNode.parentNode)) {
                    $v_0.parentNode.parentNode.parentNode.removeChild($v_0.parentNode.parentNode);
                }
                else {
                    $v_0.parentNode.removeChild($v_0);
                }
            }
        }
    }
}


Mscrm.DataSetFieldAccessHelper = function(dataProvider, entityRecord) {
    Mscrm.DataSetFieldAccessHelper.initializeBase(this);
    this.$G_1 = dataProvider;
    this.$M_1 = entityRecord;
}
Mscrm.DataSetFieldAccessHelper.prototype = {
    $M_1: null,
    $G_1: null,
    $o_1: null,
    $1m_1: null,
    $m_1: null,
    $U_1: null,
    $g_1: null,
    
    get_isPreview: function() {
        return Mscrm.DataSetDeviceConfigurationHelper.isPreviewForm();
    },
    
    get_isServerAvailable: function() {
        return true;
    },
    
    getValidator: function(columnName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Mscrm.IDataSetColumnValidator, Mscrm.DataSetControlErrorStatus);
        var $$t_6 = this, $$t_7 = this;
        this.$1n_1().done(function() {
            $$t_6.getFieldRequiredLevel(columnName).done(function($p2_0) {
                var $v_1 = $$t_6.$m_1.get_attributesByName().get_item(columnName);
                if (_Script.isNullOrUndefined($v_1)) {
                    $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromMessage($$t_6.$G_1.getResourceString('Error_Title_0x8004f990')));
                    return;
                }
                $v_0.resolve($$t_6.$2h_1($v_1, $p2_0));
            }).fail(function($p2_0) {
                $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromErrorStatus($p2_0));
            });
        }).fail(function($p1_0) {
            $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromGenericError($p1_0));
        });
        return $v_0.promise();
    },
    
    getValidationParameters: function(columns) {
        var $v_0 = {};
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Mscrm.DataSetControlErrorStatus);
        var $v_2 = new Array(0);
        for (var $$arr_4 = columns, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            $v_2.push(this.$39_1($v_3, $v_0));
        }
        var $$t_9 = this, $$t_A = this;
        Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray($v_2).done(function() {
            $v_1.resolve($v_0);
        }).fail(function($p1_0) {
            $v_1.reject(Mscrm.DataSetControlErrorStatus.buildFromGenericError($p1_0));
        });
        return $v_1;
    },
    
    canWriteOffline: function(fieldName) {
        return false;
    },
    
    getColumnAttributes: function(column) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1 = column;
        var $v_2 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.RetrieveEntityAttributeMetadataPair ' + column.get_name());
        $v_2.start();
        var $$t_5 = this, $$t_6 = this;
        this.$1o_1().done(function() {
            $v_2.stop();
            $v_1.updateAttributes($$t_5.$m_1.get_attributesByName().get_item(column.get_name()));
            $v_0.resolve($v_1.get_attributes());
        }).fail(function($p1_0) {
            $v_0.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p1_0.get_localizedMessage() || $p1_0.get_message()));
        });
        return $v_0.promise();
    },
    
    isRecordDisabled: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1 = this.$M_1.get_fields()['statecode'];
        if (!Microsoft.Crm.Client.Core.Models.StateCodeHelper.canRetrieveActivationState(this.$M_1)) {
            $v_0.resolve(false);
        }
        else {
            $v_0.resolve(Microsoft.Crm.Client.Core.Models.StateCodeHelper.isRecordDisabled(this.$M_1, $v_1, this.$G_1.get_userPrivileges().get_rolePrivileges()));
        }
        return $v_0.promise();
    },
    
    isHiddenColumn: function(column) {
        return (column).isHidden;
    },
    
    getFieldAccessLevelsForOperation: function(fieldName, operationType) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess, Object);
        var $v_1 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.RetrieveAsyncDependencies ' + fieldName);
        $v_1.start();
        var $$t_6 = this;
        this.$1n_1().done(function() {
            $v_1.stop();
            $$t_6.$G_1.get_userPrivileges().getFieldAccessLevelsForOperation($$t_6.$M_1, fieldName, operationType, $$t_6.$m_1).done(function($p2_0) {
                $v_0.resolve($p2_0);
            }).fail(function($p2_0) {
                $v_0.reject($p2_0);
            });
        });
        return $v_0.promise();
    },
    
    internalGetFieldRequiredLevel: function(fieldName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $$t_3 = this, $$t_4 = this;
        this.$1o_1().done(function() {
            $v_0.resolve($$t_3.$m_1.get_attributesByName().get_item(fieldName).get_requiredLevel());
        }).fail(function($p1_0) {
            $v_0.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p1_0.get_localizedMessage() || $p1_0.get_message()));
        });
        return $v_0.promise();
    },
    
    isOperationEnabledOnModel: function(operationType) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $$t_4 = this, $$t_5 = this;
        this.$1n_1().done(function() {
            var $v_1 = $$t_4.$G_1.get_userPrivileges().isOperationEnabledOnModel($$t_4.$M_1.get_actionableIdentifier().LogicalName, $$t_4.$M_1, 2, $$t_4.$o_1, $$t_4.$1m_1);
            $v_0.resolve($v_1);
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    logError: function(traceComponent, message) {
        Xrm.Internal.trace.error(Microsoft.Crm.Client.Core.Framework.TraceComponent.toString(traceComponent), message);
    },
    
    $1n_1: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $$t_3 = this, $$t_4 = this;
        this.$1o_1().done(function() {
            $$t_3.$32_1().done(function() {
                $v_0.resolve(true);
            }).fail(function($p2_0) {
                $v_0.reject($p2_0);
            });
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $32_1: function() {
        if (!_Script.isNullOrUndefined(this.$g_1)) {
            return this.$g_1;
        }
        this.$g_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $$t_2 = this, $$t_3 = this;
        this.$G_1.retrieveRecordRelatedEntities(this.$o_1, 'RetrieveRecordRelatedEntities', this.$M_1.get_actionableIdentifier(), this.$M_1.get_directColumnSet(), this.$M_1).done(function($p1_0) {
            $$t_2.$g_1.resolve(true);
        }).fail(function($p1_0) {
            $$t_3.$g_1.reject($p1_0);
        });
        return this.$g_1.promise();
    },
    
    $1o_1: function() {
        if (!_Script.isNullOrUndefined(this.$U_1)) {
            return this.$U_1;
        }
        this.$U_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_4 = this, $$t_5 = this;
        this.$G_1.retrieveEntityMetadata(this.$M_1.get_actionableIdentifier().LogicalName).done(function($p1_0) {
            $$t_4.$o_1 = $p1_0.get_entityMetadata();
            $$t_4.$m_1 = $p1_0.get_attributeMetadataCollection();
            if ($$t_4.$o_1.get_isChildEntity()) {
                $$t_4.$G_1.retrieveEntityMetadata($$t_4.$o_1.get_parentEntityLogicalName()).done(function($p2_0) {
                    $$t_4.$1m_1 = $p2_0.get_entityMetadata();
                    $$t_4.$U_1.resolve($p1_0);
                }).fail(function($p2_0) {
                    $$t_4.$U_1.reject($p2_0);
                });
            }
            else {
                $$t_4.$U_1.resolve($p1_0);
            }
        }).fail(function($p1_0) {
            $$t_5.$U_1.reject($p1_0);
        });
        return this.$U_1;
    },
    
    $2h_1: function($p0, $p1) {
        var $v_0 = Mscrm.DataSetControlAttributeHelper.mapAttributeTypeToServerType($p0.get_type());
        var $v_1 = Microsoft.Crm.Client.Core.Models.Validation.CustomControlValidationHelper.getValidatorType($v_0, $p0.get_format());
        var $v_2 = null;
        var $v_3 = $p1 === 2 || $p1 === 1;
        var $v_4 = true;
        if ($v_3 && $p0.get_isSecured()) {
            $v_4 = this.$G_1.get_userPrivileges().hasAttributeAccessRights($p0, 2, this.$M_1);
        }
        switch ($v_1) {
            case 1:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator($v_3, $v_4);
                break;
            case 2:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator($v_3, $v_4, $p0.get_minValue(), $p0.get_maxValue());
                break;
            case 3:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator($v_3, $v_4, $p0.get_minValue(), $p0.get_maxValue(), $p0.get_precision());
                break;
            case 4:
            case 7:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator($v_3, $v_4, $p0.get_minValue(), $p0.get_maxValue(), $p0.get_precision(), false);
                break;
            case 5:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator($v_3, $v_4);
                break;
            case 6:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator($v_3, $v_4);
                break;
            case 8:
                $v_2 = new Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator($v_3, $v_4, (!_Script.isNullOrUndefined($p0.get_behavior())) ? $p0.get_behavior() : 1, new Date(1753, 0, 1));
                break;
            case 0:
            default:
                $v_2 = null;
                break;
        }
        return (!_Script.isNullOrUndefined($v_2)) ? new Mscrm.DataSetColumnValidator($v_2) : null;
    },
    
    $39_1: function($p0, $p1) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Mscrm.DataSetControlErrorStatus);
        var $$t_8 = this, $$t_9 = this;
        this.getValidator($p0.get_name()).done(function($p1_0) {
            $$t_8.isEditable($p0).done(function($p2_0) {
                var $v_1 = new Mscrm.DataSetValidationParameter();
                $v_1.$x_0 = $p2_0;
                $v_1.$j_0 = $p1_0;
                $p1[$p0.get_name()] = $v_1;
                $v_0.resolve(true);
            }).fail(function($p2_0) {
                $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromGenericError($p2_0));
            });
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0;
    }
}


Mscrm.DataSetFiltering = function(dataSetObject) {
    this.$7_0 = dataSetObject;
}
Mscrm.DataSetFiltering.prototype = {
    $7_0: null,
    filterExpression: null,
    aliasMap: null,
    $14_0: null,
    
    get_baseFilterXml: function() {
        return this.$14_0;
    },
    
    get_aliasMap: function() {
        return this.aliasMap;
    },
    
    set_aliasMap: function(value) {
        this.aliasMap = value;
        return value;
    },
    
    $i_0: null,
    
    get_queryContextId: function() {
        return this.$i_0;
    },
    
    set_queryContextId: function(value) {
        this.$i_0 = value;
        return value;
    },
    
    $z_0: null,
    
    get_queryContextFilter: function() {
        return this.$z_0;
    },
    
    set_queryContextFilter: function(value) {
        this.$z_0 = value;
        return value;
    },
    
    $10_0: null,
    
    get_queryExtraCondition: function() {
        return this.$10_0;
    },
    
    set_queryExtraCondition: function(value) {
        this.$10_0 = value;
        return value;
    },
    
    getFilter: function() {
        return this.filterExpression;
    },
    
    setFilter: function(filterExpression) {
        this.filterExpression = filterExpression;
    },
    
    clearFilter: function() {
        this.filterExpression = null;
    },
    
    initialize: function(fetchXml) {
        this.$14_0 = this.$2z_0(fetchXml);
        this.aliasMap = {};
        for (var $v_0 = 0; $v_0 < this.$7_0.get_columns().length; $v_0++) {
            var $v_1 = this.$7_0.get_columns()[$v_0];
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.get_alias())) {
                this.aliasMap[$v_1.get_alias()] = $v_1.get_name();
            }
        }
    },
    
    filterExpressionToFetchXml: function(filterExpression) {
        var $v_0 = '';
        if (_Script.isNullOrUndefined(filterExpression) || ((_Script.isNullOrUndefined(filterExpression.conditions) || !filterExpression.conditions.length) && (_Script.isNullOrUndefined(filterExpression.filters) || !filterExpression.filters.length))) {
            return $v_0;
        }
        if (_Script.isNullOrUndefined(filterExpression.filterOperator)) {
            filterExpression.filterOperator = 0;
        }
        if (!_Script.isNullOrUndefined(filterExpression.conditions)) {
            if (filterExpression.conditions.length > 0) {
                Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkFilterOperatorIsValid(Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(filterExpression.filterOperator));
                $v_0 += '<filter type=\"' + Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(filterExpression.filterOperator).toLowerCase() + '\">';
            }
            for (var $v_1 = 0; $v_1 < filterExpression.conditions.length; $v_1++) {
                var $v_2 = filterExpression.conditions[$v_1];
                Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkIfConditionExpressionHasInvalidArguments($v_2);
                var $v_3 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.conditionOperatorToString($v_2.conditionOperator));
                Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkConditionOperatorIsValid($v_3);
                var $v_4 = this.$h_0($v_2.attributeName);
                var $v_5 = 'entityname =\"' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_2.entityAliasName) + '\"';
                var $v_6 = 'attribute =\"' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_4) + '\"';
                var $v_7 = 'operator=\"' + $v_3 + '\"';
                if (_Script.isNullOrUndefined($v_2.value) && _Script.isNullOrUndefined($v_2.values)) {
                    $v_0 += String.format('<condition {0} {1} {2}/>', $v_5, $v_6, $v_7);
                }
                else if (!_Script.isNullOrUndefined($v_2.value) && $v_2.value !== '') {
                    $v_0 += String.format('<condition {0} {1} {2} {3} />', $v_5, $v_6, $v_7, 'value =\"' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlAttributeEncode($v_2.value) + '\"');
                }
                else if (!_Script.isNullOrUndefined($v_2.values) && $v_2.values.get_Count() > 0) {
                    var $v_8 = $v_2.values;
                    $v_0 += String.format('<condition {0} {1} {2}>', $v_5, $v_6, $v_7);
                    for (var $v_9 = 0; $v_9 < $v_8.get_Count(); $v_9++) {
                        $v_0 += '<value>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_8.get_item($v_9)) + '</value>';
                    }
                    $v_0 += '</condition>';
                }
            }
            if (filterExpression.conditions.length > 0) {
                $v_0 += '</filter>';
            }
        }
        else {
            if (filterExpression.filters.length > 1) {
                Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilteringUtils.checkFilterOperatorIsValid(Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(filterExpression.filterOperator));
                $v_0 += '<filter type=\"' + Microsoft.Crm.Client.Core.Storage.Common.FetchExpression.LogicalOperator.toString(filterExpression.filterOperator).toLowerCase() + '\">';
            }
            for (var $v_A = 0; $v_A < filterExpression.filters.length; $v_A++) {
                $v_0 += this.filterExpressionToFetchXml(filterExpression.filters[$v_A]);
            }
            if (filterExpression.filters.length > 1) {
                $v_0 += '</filter>';
            }
        }
        return $v_0;
    },
    
    refreshFetchXml: function(fetchXmlDocument, entityLogicalName) {
        Mscrm.DataSetFetchXmlHelper.refreshXmlFiltering(fetchXmlDocument, this.$14_0, this.filterExpressionToFetchXml(this.filterExpression), entityLogicalName);
    },
    
    $2z_0: function($p0) {
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0)) {
            var $v_0 = XUI.Xml.LoadXml($p0);
            var $v_1 = XUI.Xml.SelectNodes($v_0, '/fetch/entity/filter', null);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.length > 0) {
                return XUI.Xml.XMLSerializer.serializeToString($v_1[0]);
            }
        }
        return '';
    },
    
    $h_0: function($p0) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.aliasMap) && (($p0) in this.aliasMap)) {
            return this.aliasMap[$p0];
        }
        return $p0;
    },
    
    dispose: function() {
        this.$7_0 = null;
        this.filterExpression = null;
        this.aliasMap = null;
    }
}


Mscrm.DataSetLookup = function(dataProvider, recordFactory, inputs) {
    Mscrm.DataSetLookup.initializeBase(this, [ dataProvider, recordFactory, inputs ]);
    this.$1W_2 = inputs.get_fetchXml();
    this.filtering = new Mscrm.DataSetLookupFiltering(this);
    this.includeInternalColumns = false;
}
Mscrm.DataSetLookup.prototype = {
    $1E_2: null,
    
    get_primaryIdAttribute: function() {
        return this.$1E_2;
    },
    
    set_primaryIdAttribute: function(value) {
        this.$1E_2 = value;
        return value;
    },
    
    $1W_2: null,
    
    reset: function() {
        this.set_fetchXml(this.$1W_2);
    }
}


Mscrm.DataSetLookupDefinition = function(dependentEntityName, dependentAttributeName, targetEntityName, targetViewId, targetFilterRelationshipName, allowFilterOff, contextFilter, extraCondition, fetchXml, layoutXml) {
    this.dependentEntityName = dependentEntityName;
    this.dependentAttributeName = dependentAttributeName;
    this.targetEntityName = targetEntityName;
    this.targetViewId = targetViewId;
    this.targetFilterRelationshipName = targetFilterRelationshipName;
    this.allowFilterOff = allowFilterOff;
    this.contextFilter = contextFilter;
    this.extraCondition = extraCondition;
    this.fetchXml = fetchXml;
    this.layoutXml = layoutXml;
}
Mscrm.DataSetLookupDefinition.retrieveFormattedKey = function(sourceViewId, sourceEntityName, sourceAttributeName) {
    return String.format('{0}.{1}.{2}', sourceViewId, sourceEntityName, sourceAttributeName);
}
Mscrm.DataSetLookupDefinition.prototype = {
    dependentEntityName: null,
    dependentAttributeName: null,
    targetViewId: null,
    targetEntityName: null,
    targetFilterRelationshipName: null,
    allowFilterOff: false,
    contextFilter: null,
    extraCondition: null,
    fetchXml: null,
    layoutXml: null
}


Mscrm.DataSetLookupFiltering = function(dataSetObject) {
    Mscrm.DataSetLookupFiltering.initializeBase(this, [ dataSetObject ]);
}
Mscrm.DataSetLookupFiltering.prototype = {
    $1A_1: null,
    lookupConfiguration: null,
    
    get_lookupConfiguration: function() {
        return this.lookupConfiguration;
    },
    
    set_lookupConfiguration: function(value) {
        this.lookupConfiguration = value;
        return value;
    },
    
    set_$2E_1: function($p0) {
        this.$1A_1 = $p0;
        this.$2v_1();
        return $p0;
    },
    
    get_$1a_1: function() {
        return this.$7_0;
    },
    
    canDisableRelationshipFilter: function() {
        return (Mscrm.InternalUtilities._Script.isNullOrUndefined(this.lookupConfiguration)) ? false : this.lookupConfiguration.allowFilterOff;
    },
    
    disableRelationshipFilter: function() {
        if (this.canDisableRelationshipFilter()) {
            this.$z_0 = '';
            this.$i_0 = '';
            this.$10_0 = '';
            this.get_$1a_1().reset();
        }
    },
    
    clearFilter: function() {
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$1A_1)) {
            this.setFilter(null);
        }
        else {
            Mscrm.DataSetFiltering.prototype.clearFilter.call(this);
        }
    },
    
    setFilter: function(filterExpression) {
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$1A_1)) {
            var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression();
            $v_0.attributeName = this.get_$1a_1().get_primaryIdAttribute();
            $v_0.value = this.$1A_1;
            $v_0.conditionOperator = 1;
            var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression();
            $v_1.conditions = [ $v_0 ];
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(filterExpression)) {
                var $$t_3;
                ($$t_3 = $v_1.conditions).push.apply($$t_3, filterExpression.conditions);
            }
            Mscrm.DataSetFiltering.prototype.setFilter.call(this, $v_1);
        }
        else {
            Mscrm.DataSetFiltering.prototype.setFilter.call(this, filterExpression);
        }
    },
    
    enableRelationshipFilter: function(parentRecord) {
        if (Mscrm.InternalUtilities._Script.isNullOrUndefined(this.lookupConfiguration)) {
            return;
        }
        this.get_$1a_1().reset();
        var $v_0 = '';
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(parentRecord) && !Mscrm.InternalUtilities._Script.isNullOrUndefined(this.lookupConfiguration.dependentAttributeName) && !Mscrm.InternalUtilities._String.isNullOrEmpty(this.lookupConfiguration.dependentAttributeName)) {
            var $v_1 = this.lookupConfiguration.dependentAttributeName;
            var $v_2 = $v_1.split('.');
            var $v_3 = null;
            if ($v_2.length > 1) {
                if (parentRecord.getPrimaryEntityLogicalName() === $v_2[0]) {
                    $v_3 = parentRecord.getValue($v_2[1]);
                }
                else {
                    $v_0 = parentRecord.getRecordId();
                }
            }
            else {
                $v_3 = parentRecord.getValue($v_1);
            }
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3)) {
                $v_0 = ($v_3).Id;
            }
            this.$z_0 = this.lookupConfiguration.contextFilter;
            this.$i_0 = $v_0;
        }
        this.$10_0 = this.lookupConfiguration.extraCondition;
    },
    
    refreshFetchXml: function(fetchXmlDocument, entityLogicalName) {
        Mscrm.DataSetFiltering.prototype.refreshFetchXml.call(this, fetchXmlDocument, entityLogicalName);
        Mscrm.DataSetFetchXmlHelper.setContextFilterValue(fetchXmlDocument, this.$i_0);
    },
    
    $2v_1: function() {
        this.setFilter(this.getFilter());
    }
}


Mscrm.DataSetObject = function(dataProvider, recordFactory, inputs) {
    this.$$d_$2C_1 = Function.createDelegate(this, this.$2C_1);
    this.$$d_$2p_1 = Function.createDelegate(this, this.$2p_1);
    Mscrm.DataSetObject.initializeBase(this);
    this.includeInternalColumns = true;
    this.$G_1 = dataProvider;
    this.$Q_1 = new Mscrm.DataSetCancellationTokenSource();
    this.$1O_1 = recordFactory;
    this.$8_1 = inputs;
    this.sortedRecordIds = new Array(0);
    this.records = {};
    this.sorting = new Array(0);
    this.paging = new Mscrm.DataSetPaging(this, inputs);
    this.filtering = new Mscrm.DataSetFiltering(this);
}
Mscrm.DataSetObject.prototype = {
    working: false,
    hasError: false,
    errorMessage: null,
    columns: null,
    sortedRecordIds: null,
    records: null,
    paging: null,
    filtering: null,
    sorting: null,
    selectedRecordIds: null,
    lookups: null,
    $G_1: null,
    $Q_1: null,
    $1O_1: null,
    $H_1: null,
    $F_1: null,
    $1l_1: false,
    $P_1: null,
    $I_1: null,
    $8_1: null,
    $1P_1: null,
    $16_1: null,
    includeInternalColumns: false,
    
    get_controlName: function() {
        return this.$F_1;
    },
    
    set_controlName: function(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_working: function() {
        return this.working;
    },
    
    set_working: function(value) {
        this.working = value;
        return value;
    },
    
    get_hasError: function() {
        return this.hasError;
    },
    
    set_hasError: function(value) {
        this.hasError = value;
        return value;
    },
    
    get_errorMessage: function() {
        return this.errorMessage;
    },
    
    set_errorMessage: function(value) {
        this.errorMessage = value;
        return value;
    },
    
    get_columns: function() {
        return this.columns;
    },
    
    set_columns: function(value) {
        this.columns = value;
        return value;
    },
    
    get_sortedRecordIds: function() {
        return this.sortedRecordIds;
    },
    
    set_sortedRecordIds: function(value) {
        this.sortedRecordIds = value;
        return value;
    },
    
    get_records: function() {
        return this.records;
    },
    
    set_records: function(value) {
        this.records = value;
        return value;
    },
    
    get_paging: function() {
        return this.paging;
    },
    
    set_paging: function(value) {
        this.paging = value;
        return value;
    },
    
    get_filtering: function() {
        return this.filtering;
    },
    
    set_filtering: function(value) {
        this.filtering = value;
        return value;
    },
    
    get_sorting: function() {
        return this.sorting;
    },
    
    set_sorting: function(value) {
        this.sorting = value;
        return value;
    },
    
    get_selectedRecordIds: function() {
        return this.selectedRecordIds;
    },
    
    set_selectedRecordIds: function(value) {
        this.selectedRecordIds = value;
        return value;
    },
    
    get_fetchXml: function() {
        return this.$8_1.get_fetchXml();
    },
    
    set_fetchXml: function(value) {
        this.$8_1.set_fetchXml(value);
        return value;
    },
    
    get_lookups: function() {
        return this.lookups;
    },
    
    set_lookups: function(value) {
        this.lookups = value;
        return value;
    },
    
    get_$S_1: function() {
        if (!this.$P_1) {
            this.$P_1 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList());
        }
        return this.$P_1;
    },
    
    get_$1z_1: function() {
        if (IsNull(this.$16_1) || !this.$16_1.length) {
            var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
            $v_0.add(this.$8_1.get_entityLogicalName());
            for (var $$arr_1 = this.columns, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_1 = $$arr_1[$$idx_3];
                var $v_2 = $v_1.get_attributes()['entityname'];
                if (!IsNull($v_2) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_2.toString()) && !$v_0.contains($v_2.toString())) {
                    $v_0.add($v_2.toString());
                }
            }
            this.$16_1 = $v_0.toArray();
        }
        return this.$16_1;
    },
    
    get_selectionHelper: function() {
        return this.$H_1;
    },
    
    set_selectionHelper: function(value) {
        this.$H_1 = this.$2N_1(value);
        return value;
    },
    
    initialize: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetObject.Initialize ' + this.$8_1.get_entityLogicalName());
        $v_0.start();
        var $v_1 = this.$2a_1(this.$8_1.get_layoutXml());
        this.$2b_1($v_1);
        this.set_fetchXml(this.$2e_1(this.$8_1.get_fetchXml()));
        $v_0.stop();
    },
    
    refresh: function(target) {
        this.working = true;
        this.$2u_1();
        this.$20_1();
    },
    
    paginate: function() {
        this.working = true;
        var $v_0 = XUI.Xml.LoadXml(this.get_fetchXml());
        this.paging.refreshFetchXml($v_0);
        this.set_fetchXml(XUI.Xml.XMLSerializer.serializeToString($v_0));
        this.$20_1();
    },
    
    $20_1: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetObject.RetrieveMultiple ' + this.$8_1.get_entityLogicalName());
        $v_0.start();
        var $$t_B = this, $$t_C = this, $$t_D = this, $$t_E = this;
        this.$31_1().always(function() {
            $v_0.stop();
            $$t_B.$1y_1();
            $$t_B.sortedRecordIds = new Array(0);
            $$t_B.records = {};
            $$t_B.fireEvent('OnDataSetChange', null);
        }).done(function($p1_0) {
            var $v_1 = $p1_0;
            var $v_2 = 0;
            for (var $$arr_4 = $v_1.entityCollection.get_entities(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_3 = $$arr_4[$$idx_6];
                var $v_4 = $$t_C.$1O_1.buildDataSetRecord($v_3, $$t_C.columns, $$t_C.$F_1);
                var $v_5 = $v_3.get_identifier().get_identifier();
                $$t_C.sortedRecordIds[$v_2] = $v_5;
                $$t_C.records[$v_5] = $v_4;
                $v_4.add_onChange($$t_C.$$d_$2p_1);
                $v_2++;
            }
            $$t_C.paging.updatePagingResult($v_1.entityCollection);
            $$t_C.$8_1.set_pagingCookie($v_1.entityCollection.get_pagingCookie());
        }).fail(function($p1_0) {
            $$t_D.hasError = true;
            $$t_D.errorMessage = $p1_0.message;
        }).always(function() {
            $$t_E.working = false;
            $$t_E.fireEvent('OnDataSetChange', null);
        });
    },
    
    setSelectedRecordId: function(id, openCommandBar) {
        this.$H_1.selectRecord(id);
    },
    
    setSelectedRecords: function(ids) {
        this.$H_1.selectRecords(ids);
    },
    
    clearSelectedRecord: function() {
        this.$H_1.clearSelection();
    },
    
    getSelectedRecord: function() {
        return this.$H_1.getSelectedRecord();
    },
    
    addOnRecordSelect: function(handler, system) {
        this.get_$S_1().addHandler('RecordSelect', handler, system);
    },
    
    addOnRecordSave: function(handler, system) {
        this.get_$S_1().addHandler('RecordSave', handler, system);
    },
    
    fireOnRecordSelect: function(wrapper) {
        var $v_0 = this.get_$S_1().getHandler('RecordSelect');
        if ($v_0) {
            $v_0(wrapper, null);
        }
    },
    
    fireOnRecordSave: function(wrapper) {
        var $v_0 = this.get_$S_1().getHandler('RecordSave');
        if ($v_0) {
            $v_0(wrapper, null);
        }
    },
    
    removeOnRecordSelect: function(handler) {
        this.get_$S_1().removeHandler('RecordSelect', handler);
    },
    
    removeOnRecordSave: function(handler) {
        this.get_$S_1().removeHandler('RecordSave', handler);
    },
    
    getViewId: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$8_1.get_viewId());
        return $v_0.toString();
    },
    
    generateAdditionalAttributes: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $v_1 = new Array(this.get_$1z_1().length);
        for (var $$arr_2 = this.get_$1z_1(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            var $v_3 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
            this.$2y_1($v_2, $v_3);
            $v_1.push($v_3);
        }
        var $$t_9 = this, $$t_A = this;
        Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray($v_1).done(function($p1_0) {
            $v_0.resolve(true);
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    generateValidators: function() {
        return Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object).resolve(false);
    },
    
    getLookupDataSet: function(columnName) {
        var $v_0 = Mscrm.DataSetColumn.findColumn(columnName, this.columns);
        if (IsNull($v_0)) {
            return Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Mscrm.DataSetLookup, Microsoft.Crm.Client.Core.Framework.ErrorStatus).resolve(null);
        }
        var $v_1 = Mscrm.DataSetLookupDefinition.retrieveFormattedKey(this.getViewId(), this.$8_1.get_entityLogicalName(), $v_0.get_name());
        var $v_2 = this.lookups[$v_1];
        return $v_0.getDataSetLookup(this.$1O_1, this.getSelectedRecord(), $v_2);
    },
    
    addOnDataSetUpdated: function(handler) {
        this.addEventHandler('OnDataSetChange', handler);
    },
    
    removeOnDataSetUpdated: function(handler) {
        this.removeEventHandler('OnDataSetChange', handler);
    },
    
    addOnSelectionChange: function(handler) {
        this.addEventHandler('RecordSelect', handler);
    },
    
    removeOnSelectionChange: function(handler) {
        this.removeEventHandler('RecordSelect', handler);
    },
    
    add_OnDataSetRecordChange: function(value) {
        this.addEventHandler('OnDataSetRecordChange', value);
    },
    
    remove_OnDataSetRecordChange: function(value) {
        this.removeEventHandler('OnDataSetRecordChange', value);
    },
    
    updateLinkedOutput: function(dataSetRecord) {
        dataSetRecord.set_externalErrorMessage('');
        var $$t_3 = this, $$t_4 = this;
        dataSetRecord.validateAllColumns().done(function($p1_0) {
            if ($p1_0) {
                $$t_3.$35_1();
                dataSetRecord.adjustDateTimeForUserSettings();
                $$t_3.$2j_1(dataSetRecord);
            }
            else {
                $$t_3.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate(dataSetRecord.getRecordId(), false));
            }
        }).fail(function($p1_0) {
            dataSetRecord.set_externalErrorMessage($p1_0.message);
            $$t_4.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate(dataSetRecord.getRecordId(), false));
        });
    },
    
    $2j_1: function($p0) {
        var $$t_E = this, $$t_F = this;
        this.$G_1.update($p0.get_entityRecord()).done(function() {
            var $v_0 = XUI.Xml.LoadXml($$t_E.get_fetchXml());
            if (!_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined($v_0.documentElement)) {
                var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetConditionExpression();
                $v_1.attributeName = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_metadataCache().getEntityMetadata($$t_E.$8_1.get_entityLogicalName()).get_primaryIdAttribute();
                $v_1.entityAliasName = '';
                $v_1.value = $p0.getRecordId();
                $v_1.conditionOperator = 0;
                var $v_2 = new Microsoft.Crm.Client.Core.Storage.Common.CustomControls.CustomControlDataSetFilterExpression();
                $v_2.conditions = [ $v_1 ];
                var $v_3 = $$t_E.filtering;
                var $v_4 = $v_3.filterExpressionToFetchXml($v_2);
                Mscrm.DataSetFetchXmlHelper.refreshXmlFiltering($v_0, $v_3.$14_0, $v_4, $$t_E.$8_1.get_entityLogicalName());
                var $v_5 = $v_0.documentElement.attributes.getNamedItem('page');
                if (!_Script.isNullOrUndefined($v_5)) {
                    $v_5.nodeValue = '1';
                    $v_0.documentElement.attributes.removeNamedItem('page');
                    $v_0.documentElement.attributes.setNamedItem($v_5);
                }
                var $v_6 = XUI.Xml.XMLSerializer.serializeToString($v_0);
                $$t_E.$G_1.retrieveMultiple($v_6, $$t_E.$Q_1.$v_0).done(function($p2_0) {
                    var $v_7 = $p2_0;
                    if ($v_7.entityCollection.get_entities().length === 1 && !$p0.get_isDisposed()) {
                        var $v_8 = $v_7.entityCollection.get_entities()[0];
                        var $v_9 = Microsoft.Crm.Client.Core.Models.RecordModel.createWithoutEventHandlers($v_8);
                        $p0.set_record($v_9);
                        $p0.refreshValues($v_9);
                        $$t_E.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate($p0.getRecordId(), true));
                    }
                    else {
                        $$t_E.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate($p0.getRecordId(), true));
                        $$t_E.refresh();
                    }
                }).fail(function($p2_0) {
                    $p0.set_externalErrorMessage($p2_0.get_localizedMessage() || $p2_0.get_message());
                    $$t_E.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate($p0.getRecordId(), false));
                });
            }
        }).fail(function($p1_0) {
            $p0.set_externalErrorMessage($p1_0.get_localizedMessage() || $p1_0.get_message());
            $$t_F.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onRecordUpdate($p0.getRecordId(), false));
        });
    },
    
    dispose: function() {
        this.$Q_1.cancel();
        this.$1y_1();
        this.$H_1.remove_onSelectionChanged(this.$$d_$2C_1);
        this.$H_1.dispose();
        Mscrm.NotifyPropertyChanged.prototype.dispose.call(this);
        this.records = null;
        this.sortedRecordIds = null;
        this.$H_1 = null;
    },
    
    $2y_1: function($p0, $p1) {
        var $v_0 = this.$8_1.get_entityLogicalName();
        var $v_1 = $p1;
        var $$t_A = this, $$t_B = this;
        this.$G_1.retrieveEntityMetadata($p0).done(function($p1_0) {
            var $v_2 = $p1_0.get_attributeMetadataCollection().get_attributes();
            var $v_3 = {};
            for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
                $v_3[$v_2[$v_5].get_logicalName()] = $v_2[$v_5];
            }
            var $v_4 = $v_0 === $p1_0.get_entityMetadata().get_logicalName();
            if ($v_4) {
                $$t_A.$37_1($v_3, $p1_0.get_entityMetadata().get_logicalName());
            }
            else {
                $$t_A.$36_1($v_3, $p1_0.get_entityMetadata().get_logicalName());
            }
            $v_1.resolve(true);
        }).fail(function($p1_0) {
            $v_1.reject($p1_0);
        });
    },
    
    $37_1: function($p0, $p1) {
        for (var $$arr_2 = this.columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            var $v_1 = $v_0.get_attributes()['entityname'];
            if (!$v_0.get_isJoinedColumn()) {
                $v_0.updateAttributes($p0[$v_0.get_name()]);
            }
            else if (!IsNull($v_1) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.toString()) && $v_1.toString() === $p1) {
                $v_0.updateAttributes($p0[Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityColumnName($v_0.get_name())]);
            }
        }
    },
    
    $36_1: function($p0, $p1) {
        for (var $$arr_2 = this.columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            var $v_1 = $v_0.get_attributes()['entityname'];
            if ($v_0.get_isJoinedColumn() && !IsNull($v_1) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1.toString()) && $v_1.toString() === $p1) {
                $v_0.updateAttributes($p0[Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getLinkEntityColumnName($v_0.get_name())]);
            }
        }
    },
    
    $1y_1: function() {
        if (_Script.isNullOrUndefined(this.records)) {
            return;
        }
        var $$dict_2 = this.records;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_1 = $v_0.value;
            $v_1.remove_onChange(this.$$d_$2p_1);
            $v_1.dispose();
        }
    },
    
    $2p_1: function($p0) {
        this.fireEvent('OnDataSetRecordChange', $p0);
    },
    
    $31_1: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Xrm.Sdk.Response, Mscrm.DataSetControlErrorStatus);
        if (this.$8_1.get_isFetchXmlNotFinal()) {
            $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromMessage(this.$G_1.getResourceString('Error_Message_0x80060565')));
            return $v_0.promise();
        }
        var $$t_3 = this, $$t_4 = this;
        this.$G_1.retrieveMultiple(this.$8_1.get_fetchXml(), this.$Q_1.$v_0).done(function($p1_0) {
            $v_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $v_0.reject(Mscrm.DataSetControlErrorStatus.buildFromCrmErrorResponse($p1_0));
        });
        return $v_0.promise();
    },
    
    $2a_1: function($p0) {
        var $v_0 = {};
        this.$1P_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        var $v_1 = XUI.Xml.LoadXml($p0);
        var $v_2 = $v_1.getElementsByTagName('column');
        var $v_3 = false;
        if (!$v_2.length) {
            $v_2 = $v_1.getElementsByTagName('cell');
            $v_3 = true;
        }
        var $v_4 = 0;
        for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
            var $v_6 = $v_2[$v_5];
            var $v_7 = ($v_3) ? $v_6.attributes.getNamedItem('name').nodeValue : XUI.Xml.GetText($v_6);
            if ((($v_7) in $v_0) && !(($v_0[$v_7])['isHidden'])) {
                continue;
            }
            var $v_8 = ($v_6.attributes.getNamedItem('width')) ? parseFloat($v_6.attributes.getNamedItem('width').nodeValue) : 1;
            var $v_9 = ($v_6.attributes.getNamedItem('isHidden') && $v_6.attributes.getNamedItem('isHidden').nodeValue === 'true') ? true : false;
            var $v_A = ($v_6.attributes.getNamedItem('label')) ? $v_6.attributes.getNamedItem('label').nodeValue : '';
            var $v_B = ($v_6.attributes.getNamedItem('isSortable') && $v_6.attributes.getNamedItem('isSortable').nodeValue === 'true') ? false : true;
            var $v_C = ($v_6.attributes.getNamedItem('type')) ? $v_6.attributes.getNamedItem('type').nodeValue : '';
            var $v_D = ($v_6.attributes.getNamedItem('sourcetype')) ? Microsoft.Crm.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeSourceType, $v_6.attributes.getNamedItem('sourcetype').nodeValue) : -1;
            var $v_E = ($v_6.attributes.getNamedItem('entityname')) ? $v_6.attributes.getNamedItem('entityname').nodeValue : '';
            var $v_F = $v_C.split('.');
            var $v_G = $v_F[0].toLowerCase();
            var $v_H = '';
            if ($v_F.length > 1) {
                $v_H = $v_F[1].toLowerCase();
            }
            $v_G = (Array.contains(Mscrm.DataSetControlAttributeHelper.statusAttributeList, $v_G)) ? 'picklist' : $v_G;
            var $v_I = {};
            $v_I['width'] = $v_8;
            $v_I['isHidden'] = $v_9;
            $v_I['label'] = $v_A;
            $v_I['disableSorting'] = $v_B;
            $v_I['order'] = $v_4++;
            $v_I['type'] = $v_G;
            $v_I['sourcetype'] = $v_D;
            $v_I['format'] = $v_H;
            $v_I['manifesttype'] = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.retrieveCorrespondingManifestType($v_G, $v_H);
            $v_I['entityname'] = $v_E;
            $v_0[$v_7] = $v_I;
            if ($v_D === 2) {
                var $v_J = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getRollupDateFieldName($v_7);
                if (!(($v_J) in $v_0)) {
                    $v_0[$v_J] = this.$2c_1();
                    this.$1P_1.add($v_J);
                }
            }
        }
        return $v_0;
    },
    
    $2b_1: function($p0) {
        var $v_0 = {};
        if (_Script.isNullOrUndefined(this.columns)) {
            this.columns = new Array(0);
        }
        else {
            for (var $$arr_2 = this.columns, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];
                $v_0[$v_2.name] = $v_2;
            }
        }
        var $v_1 = 0;
        var $$dict_I = $p0;
        for (var $$key_J in $$dict_I) {
            var $v_3 = { key: $$key_J, value: $$dict_I[$$key_J] };
            var $v_4 = $v_3.value;
            var $v_5 = (('width') in $v_4) ? $v_4['width'] : 0;
            var $v_6 = (('isHidden') in $v_4) ? $v_4['isHidden'] : false;
            var $v_7 = (('order') in $v_4) ? $v_4['order'] : $v_1;
            var $v_8 = (('label') in $v_4) ? $v_4['label'] : '';
            var $v_9 = (('manifesttype') in $v_4) ? $v_4['manifesttype'] : '';
            var $v_A = (('disableSorting') in $v_4) ? $v_4['disableSorting'] : false;
            var $v_B = {};
            $v_B['type'] = (('type') in $v_4) ? $v_4['type'] : null;
            $v_B['format'] = (('format') in $v_4) ? $v_4['format'] : null;
            $v_B['sourcetype'] = (('sourcetype') in $v_4) ? $v_4['sourcetype'] : -1;
            $v_B['entityname'] = (('entityname') in $v_4) ? $v_4['entityname'] : '';
            if ((($v_3.key) in $v_0)) {
                var $v_C = Array.indexOf(this.columns, $v_0[$v_3.key]);
                if ($v_C !== -1) {
                    var $v_D = this.columns[$v_C];
                    if (_Script.isNullOrUndefined($v_D.get_attributes())) {
                        $v_D = new Mscrm.DataSetColumn($v_D.get_name(), (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_D.get_displayName())) ? $v_8 : $v_D.get_displayName(), $v_D.get_alias(), $v_D.get_dataType(), $v_5, $v_6, $v_7, $v_A, $v_B, null);
                        this.columns[$v_C] = $v_D;
                    }
                }
            }
            else {
                this.columns.push(new Mscrm.DataSetColumn($v_3.key, $v_8, $v_3.key, $v_9, $v_5, $v_6, $v_7, $v_A, $v_B, null));
            }
            $v_1++;
        }
    },
    
    $2e_1: function($p0) {
        if (this.includeInternalColumns) {
            $p0 = Mscrm.DataSetFetchXmlHelper.addInternalColumns($p0, this.$8_1.get_entityLogicalName());
        }
        this.paging.initialize($p0);
        this.filtering.initialize($p0);
        this.$2g_1();
        return $p0;
    },
    
    $2c_1: function() {
        var $v_0 = {};
        $v_0['isHidden'] = true;
        $v_0['type'] = 'datetime';
        $v_0['format'] = 'datetime';
        return $v_0;
    },
    
    $2u_1: function() {
        var $v_0 = XUI.Xml.LoadXml(this.get_fetchXml());
        if (!_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined($v_0.documentElement)) {
            this.paging.resetPageToLoad();
            this.paging.refreshFetchXml($v_0);
            this.filtering.refreshFetchXml($v_0, this.$8_1.get_entityLogicalName());
            this.$38_1();
            Mscrm.DataSetFetchXmlHelper.refreshFetchXmlSorting($v_0, this.$I_1, this.$8_1.get_entityLogicalName());
            Mscrm.DataSetFetchXmlHelper.refreshFetchXmlRollupFields($v_0, this.$1P_1, this.$8_1.get_entityLogicalName());
        }
        this.set_fetchXml(XUI.Xml.XMLSerializer.serializeToString($v_0));
    },
    
    $34_1: function() {
        if (this.$H_1.get_selectedRecords().length !== 1) {
            return;
        }
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetObject.RunOnDataSetRecordLoadHandlers ' + this.$8_1.get_entityLogicalName());
        $v_0.start();
        if (!this.$1l_1) {
            this.$1l_1 = true;
            var $v_1 = String.format('{0}{1}', Mscrm.DataSetControl.datasetctrL_PREFIX, this.$F_1);
            var $v_2 = $find($v_1);
            if ($v_2) {
                if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && ($v_2.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid || $v_2.$3_3.get_gridType() === Mscrm.GridControl.associatedGrid)) {
                    if (_Script.isNullOrUndefined(Xrm.Page.ui)) {
                        Xrm.Page.ui = new Mscrm.ReadFormUIManagerWrapper(new Mscrm.ReadFormUIManager());
                    }
                    if (_Script.isNullOrUndefined(Xrm.Page.ui.controls)) {
                        Xrm.Page.ui.controls = new Xrm.XrmControls();
                    }
                    Xrm.Page.ui.controls.add(new Mscrm.XrmHomePageGridControlWrapper($v_2.$3_3, $v_2));
                }
            }
            if (Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl')) {
                if (Mscrm.Utilities.isTurboForm()) {
                    Mscrm.TurboForm.Control.CustomScriptsManager.get_instance().executeHandler('Mscrm.BusinessRulesScript.GetDataSetRecordLoadHandlers', '', null);
                    Mscrm.TurboForm.Control.CustomScriptsManager.get_instance().executeHandler('Mscrm.BusinessRulesScript.GetDataSetInitializers', '', null);
                }
                else {
                    if (!_Script.isNullOrUndefined(Mscrm.BusinessRulesScript)) {
                        Mscrm.BusinessRulesScript.GetDataSetRecordLoadHandlers();;
                        Mscrm.BusinessRulesScript.GetDataSetInitializers();;
                    }
                }
                var $v_3 = this.$F_1 + ':' + this.$8_1.get_entityLogicalName();
                if (Mscrm.Utilities.isTurboForm()) {
                    $v_3 = '\'' + $v_3 + '\'';
                    Mscrm.TurboForm.Control.CustomScriptsManager.get_instance().executeHandler('Mscrm.BusinessRulesScript.RunDataSetInitializer', $v_3, null);
                }
                else if (!_Script.isNullOrUndefined(Mscrm.BusinessRulesScript) && !_Script.isNullOrUndefined(Mscrm.BusinessRulesScript.RunDataSetInitializer)) {
                    Mscrm.BusinessRulesScript.RunDataSetInitializer($v_3);
                }
            }
            if (Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) {
                var $v_4 = this.$F_1 + ':' + this.$8_1.get_entityLogicalName();
                if (Mscrm.Utilities.isTurboForm()) {
                    Mscrm.TurboForm.Control.CustomScriptsManager.get_instance().executeHandler('Mscrm.GridScript.InitializeGridControlScripts', '\'' + $v_4 + '\'', null);
                }
                else if (!_Script.isNullOrUndefined(Mscrm.GridScript) && !_Script.isNullOrUndefined(Mscrm.GridScript.InitializeGridControlScripts)) {
                    Mscrm.GridScript.InitializeGridControlScripts($v_4);;
                }
            }
        }
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !_Script.isNullOrUndefined(Xrm.Page) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1)) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid())) {
            Xrm.Page.getControl(this.$F_1).getGrid().fireOnRecordSelect();
        }
        $v_0.stop();
    },
    
    $35_1: function() {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetObject.RunOnDataSetRecordSaveHandlers ' + this.$8_1.get_entityLogicalName());
        $v_0.start();
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !_Script.isNullOrUndefined(Xrm.Page) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1)) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid().getSelectedRows()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid().getSelectedRows().get(0)) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid().getSelectedRows().get(0).getData()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$F_1).getGrid().getSelectedRows().get(0).getData().entity)) {
            var $v_1 = Xrm.Page.getControl(this.$F_1).getGrid().getSelectedRows().get(0).getData().entity;
            this.fireOnRecordSave($v_1);
        }
        $v_0.stop();
    },
    
    $2N_1: function($p0) {
        if (!_Script.isNullOrUndefined(this.$H_1)) {
            this.$H_1.remove_onSelectionChanged(this.$$d_$2C_1);
        }
        $p0.add_onSelectionChanged(this.$$d_$2C_1);
        return $p0;
    },
    
    $2C_1: function() {
        this.selectedRecordIds = this.$H_1.get_selectedIds();
        this.$34_1();
        this.fireEvent('RecordSelect', null);
    },
    
    $2g_1: function() {
        this.$I_1 = Microsoft.Crm.Client.Core.Framework.SortingInfo.createFromFetchXml(XUI.Xml.LoadXml(this.get_fetchXml()));
        if (!_Script.isNull(this.$I_1)) {
            if (!_Script.isNull(this.$I_1.get_SortByField()) && !_Script.isNull(this.$I_1.get_SortDescending())) {
                var $v_0 = new Mscrm.DataSetSorting();
                $v_0.name = this.$I_1.get_SortByField();
                $v_0.sortDirection = (this.$I_1.get_SortDescending()) ? 1 : 0;
                this.sorting[0] = $v_0;
            }
            if (!_Script.isNull(this.$I_1.get_SecondarySortByField()) && !_Script.isNull(this.$I_1.get_SecondarySortDescending())) {
                var $v_1 = new Mscrm.DataSetSorting();
                $v_1.name = this.$I_1.get_SecondarySortByField();
                $v_1.sortDirection = (this.$I_1.get_SecondarySortDescending()) ? 1 : 0;
                this.sorting[1] = $v_1;
            }
        }
    },
    
    $38_1: function() {
        if (!_Script.isNull(this.sorting) && this.sorting.length > 0) {
            var $v_0 = new Microsoft.Crm.Client.Core.Framework.SortingInfo();
            var $v_1 = this.sorting[0];
            $v_0.set_SortByField(this.$h_1($v_1.name));
            $v_0.set_SortDescending($v_1.sortDirection === 1);
            if (this.sorting.length > 1) {
                var $v_2 = this.sorting[1];
                $v_0.set_SecondarySortByField(this.$h_1($v_2.name));
                $v_0.set_SecondarySortDescending($v_2.sortDirection === 1);
            }
            this.$I_1 = $v_0;
        }
        else {
            this.$I_1 = null;
        }
    },
    
    $h_1: function($p0) {
        for (var $v_0 = 0; $v_0 < this.columns.length; $v_0++) {
            var $v_1 = this.columns[$v_0];
            if ($v_1.get_alias() === $p0 || $v_1.get_name() === $p0) {
                return $v_1.get_name();
            }
        }
        return $p0;
    }
}


Mscrm.DataSetObjectInputs = function(gridControl) {
    var $v_0 = '';
    var $v_1 = '<grid><parameters></parameters></grid>';
    if (!_Script.isNullOrUndefined(gridControl)) {
        this.$r_0 = gridControl;
        $v_0 = gridControl.get_layoutXml();
        $v_1 = gridControl.get_gridXml();
    }
    this.set_gridXml($v_1);
    this.$y_0 = $v_0;
}
Mscrm.DataSetObjectInputs.prototype = {
    $d_0: null,
    $r_0: null,
    $y_0: null,
    
    get_layoutXml: function() {
        return this.$y_0;
    },
    
    set_layoutXml: function(value) {
        this.$y_0 = value;
        return value;
    },
    
    get_gridXml: function() {
        return XUI.Xml.XMLSerializer.serializeToString(this.$d_0);
    },
    
    set_gridXml: function(value) {
        this.$d_0 = XUI.Xml.LoadXml(value);
        return value;
    },
    
    get_fetchXml: function() {
        return this.getParameter('effectiveFetchXml');
    },
    
    set_fetchXml: function(value) {
        this.setParameter('effectiveFetchXml', value);
        return value;
    },
    
    get_isFetchXmlNotFinal: function() {
        return Boolean.parse(this.getParameter('isFetchXmlNotFinal'));
    },
    
    set_isFetchXmlNotFinal: function(value) {
        this.setParameter('isFetchXmlNotFinal', value.toString());
        return value;
    },
    
    get_entityLogicalName: function() {
        return this.getParameter('otn');
    },
    
    set_entityLogicalName: function(value) {
        this.setParameter('otn', value);
        return value;
    },
    
    get_entityTypeCode: function() {
        return Number.parseInvariant(this.getParameter('otc'));
    },
    
    set_entityTypeCode: function(value) {
        this.setParameter('otc', value.toString());
        return value;
    },
    
    get_pagingCookie: function() {
        return this.getProperty('pagingCookie');
    },
    
    set_pagingCookie: function(value) {
        this.setProperty('pagingCookie', value);
        return value;
    },
    
    get_pageSize: function() {
        return Number.parseInvariant(this.getProperty('recsPerPage'));
    },
    
    set_pageSize: function(value) {
        this.setProperty('recsPerPage', value.toString());
        return value;
    },
    
    get_currentPageNumber: function() {
        return Number.parseInvariant(this.getProperty('pageNum'));
    },
    
    set_currentPageNumber: function(value) {
        this.setProperty('pageNum', value.toString());
        return value;
    },
    
    get_totalResultCount: function() {
        return Number.parseInvariant(this.getProperty('totalrecordcount'));
    },
    
    set_totalResultCount: function(value) {
        this.setProperty('totalrecordcount', value.toString());
        return value;
    },
    
    get_ribbonContextType: function() {
        return this.getParameter('ribbonContext');
    },
    
    get_viewId: function() {
        return this.getParameter('viewid');
    },
    
    set_viewId: function(value) {
        this.setParameter('viewid', value);
        return value;
    },
    
    get_ribbonRelationshipType: function() {
        var $v_0 = this.getProperty('relationshipType');
        if (!isNullOrEmptyString($v_0)) {
            return Number.parseInvariant($v_0);
        }
        return 0;
    },
    
    get_$2D_0: function() {
        return XUI.Xml.SelectSingleNode(this.$d_0, '/grid/parameters', null);
    },
    
    get_$2F_0: function() {
        return XUI.Xml.SelectSingleNode(this.$d_0, '/grid', null);
    },
    
    getProperty: function(key) {
        return this.$2L_0(this.get_$2F_0(), key);
    },
    
    setProperty: function(key, value) {
        this.$1p_0(this.get_$2F_0(), key, value);
    },
    
    getParameter: function(key) {
        return this.$2L_0(this.get_$2D_0(), key);
    },
    
    setParameter: function(key, value) {
        this.$1p_0(this.get_$2D_0(), key, value);
    },
    
    dispose: function() {
        this.$r_0 = null;
        this.$d_0 = null;
        this.$y_0 = null;
    },
    
    $2L_0: function($p0, $p1) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
        var $v_1 = null;
        if (!_Script.isNullOrUndefined($v_0)) {
            $v_1 = XUI.Xml.GetText($v_0);
        }
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_1)) {
            return $v_1;
        }
        var $v_2 = $p0.nodeName.toLowerCase() === 'parameters';
        if (!_Script.isNullOrUndefined(this.$r_0)) {
            var $v_3 = ($v_2) ? this.$r_0.GetParameter($p1) : this.$r_0.GetProperty($p1);
            if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_3)) {
                $v_3 = '';
            }
            this.$1p_0($p0, $p1, $v_3);
            return $v_3;
        }
        return '';
    },
    
    $1p_0: function($p0, $p1, $p2) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
        if (_Script.isNullOrUndefined($v_0)) {
            $v_0 = this.$d_0.createElement($p1);
            $p0.appendChild($v_0);
        }
        XUI.Xml.SetText($v_0, $p2);
    }
}


Mscrm.DataSetPaging = function(dataSetObject, gridControlInputs) {
    this.$7_0 = dataSetObject;
    this.$s_0 = gridControlInputs;
    this.hasNextPage = false;
    this.hasPreviousPage = false;
    this.set_totalResultCount(0);
    this.set_pageSize(50);
    this.$19_0 = 50;
}
Mscrm.DataSetPaging.prototype = {
    totalResultCount: 0,
    pageSize: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    $n_0: 0,
    $e_0: 0,
    $19_0: 0,
    $7_0: null,
    $s_0: null,
    
    get_totalResultCount: function() {
        return this.totalResultCount;
    },
    
    set_totalResultCount: function(value) {
        this.$s_0.set_totalResultCount(value);
        this.totalResultCount = value;
        return value;
    },
    
    get_pageSize: function() {
        return this.pageSize;
    },
    
    set_pageSize: function(value) {
        this.$s_0.set_pageSize(value);
        this.pageSize = value;
        return value;
    },
    
    get_hasNextPage: function() {
        return this.hasNextPage;
    },
    
    set_hasNextPage: function(value) {
        this.hasNextPage = value;
        return value;
    },
    
    get_hasPreviousPage: function() {
        return this.hasPreviousPage;
    },
    
    set_hasPreviousPage: function(value) {
        this.hasPreviousPage = value;
        return value;
    },
    
    get_currentPageNumber: function() {
        return this.$n_0;
    },
    
    set_currentPageNumber: function(value) {
        this.$s_0.set_currentPageNumber(value);
        this.$n_0 = value;
        return value;
    },
    
    setPageSize: function(pageSize) {
        if (_Script.isNullOrUndefined(pageSize) || pageSize <= 0) {
            return;
        }
        this.$19_0 = pageSize;
    },
    
    resetPageToLoad: function() {
        this.$e_0 = 1;
    },
    
    loadNextPage: function() {
        if (this.hasNextPage) {
            this.$e_0 = this.$n_0 + 1;
            this.$7_0.paginate();
        }
    },
    
    loadPreviousPage: function() {
        if (this.hasPreviousPage) {
            this.$e_0 = this.$n_0 - 1;
            this.$7_0.paginate();
        }
    },
    
    reset: function() {
        this.resetPageToLoad();
        this.$7_0.paginate();
    },
    
    dispose: function() {
        this.$7_0 = null;
        this.$s_0 = null;
    },
    
    initialize: function(fetchXml) {
        var $v_0 = XUI.Xml.LoadXml(fetchXml);
        if (!_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined($v_0.documentElement)) {
            var $v_1 = $v_0.documentElement.attributes.getNamedItem('page');
            if (!_Script.isNullOrUndefined($v_1)) {
                this.$e_0 = Number.parseInvariant($v_1.value);
            }
            var $v_2 = $v_0.documentElement.attributes.getNamedItem('count');
            if (!_Script.isNullOrUndefined($v_2)) {
                this.setPageSize(Number.parseInvariant($v_2.value));
            }
        }
    },
    
    refreshFetchXml: function(fetchXmlDocument) {
        var $v_0 = fetchXmlDocument.documentElement.attributes.getNamedItem('page');
        if (!_Script.isNullOrUndefined($v_0)) {
            $v_0.value = this.$e_0.toString();
        }
        var $v_1 = fetchXmlDocument.documentElement.attributes.getNamedItem('count');
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_1.value = this.$19_0.toString();
        }
    },
    
    updatePagingResult: function(entityCollection) {
        this.set_totalResultCount(entityCollection.get_TotalRecordCount());
        this.set_pageSize(this.$19_0);
        this.set_currentPageNumber(this.$e_0);
        this.hasNextPage = entityCollection.get_moreRecords();
        this.hasPreviousPage = this.$n_0 > 1;
    }
}


Mscrm.DataSetRecord = function(entityRecord, columns, fieldAccessHelper, controlName, validationErrorMessage) {
    this.$$d_$2s_1 = Function.createDelegate(this, this.$2s_1);
    Mscrm.DataSetRecord.initializeBase(this);
    this.set_record(Microsoft.Crm.Client.Core.Models.RecordModel.createWithoutEventHandlers(entityRecord));
    this.$L_1 = columns;
    this.$13_1 = this.$2V_1(columns);
    this.$1r_1 = this.$2X_1(columns);
    this.$C_1 = fieldAccessHelper;
    this.$J_1 = controlName;
    this.$1s_1 = validationErrorMessage;
    this.refreshValues(this.$9_1);
}
Mscrm.DataSetRecord.prototype = {
    $R_1: null,
    $p_1: null,
    $L_1: null,
    $13_1: null,
    $1r_1: null,
    $9_1: null,
    $C_1: null,
    $1s_1: null,
    $Y_1: null,
    $1k_1: false,
    
    add_onChange: function(value) {
        this.addEventHandler('OnDataSetRecordChange', value);
    },
    
    remove_onChange: function(value) {
        this.removeEventHandler('OnDataSetRecordChange', value);
    },
    
    get_dataValues: function() {
        return this.$R_1;
    },
    
    set_dataValues: function(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_record: function() {
        return this.$9_1;
    },
    
    set_record: function(value) {
        if (!_Script.isNullOrUndefined(this.$9_1)) {
            this.$9_1.remove_propertyChanged(this.$$d_$2s_1);
        }
        this.$9_1 = value;
        this.$9_1.add_propertyChanged(this.$$d_$2s_1);
        return value;
    },
    
    get_externalErrorMessage: function() {
        return this.$Y_1;
    },
    
    set_externalErrorMessage: function(value) {
        this.$Y_1 = value;
        return value;
    },
    
    get_identifier: function() {
        return this.$9_1.get_identifier();
    },
    
    get_actionableIdentifier: function() {
        return this.$9_1.get_actionableIdentifier();
    },
    
    get_mscrmEntityReference: function() {
        var $v_0 = new Mscrm.EntityReference();
        var $v_1 = this.get_identifier();
        $v_0.Id = $v_1.get_identifier();
        $v_0.Name = $v_1.Name;
        $v_0.TypeCode = Xrm.Internal.getEntityCode($v_1.TypeName);
        $v_0.TypeDisplayName = $v_1.TypeDisplayName;
        $v_0.TypeName = $v_1.TypeName;
        return $v_0;
    },
    
    get_entityRecord: function() {
        return this.$9_1.get_entityRecord();
    },
    
    get_isDisposed: function() {
        return this.$1k_1;
    },
    
    $J_1: null,
    
    get_$2k_1: function() {
        return _Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_metadataCache().getEntityMetadata(this.getPrimaryEntityLogicalName()));
    },
    
    getValue: function(columnAlias) {
        var $v_0 = this.$h_1(columnAlias);
        return this.$R_1[$v_0];
    },
    
    setValue: function(columnAlias, newValue) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Mscrm.DataSetControlErrorStatus);
        var $v_1 = this.$17_1(columnAlias);
        if (_Script.isNullOrUndefined($v_1)) {
            return $v_0.reject();
        }
        var $v_2 = this.isValid($v_1.get_name());
        var $v_3 = this.getNotification($v_1.get_name());
        this.$Y_1 = '';
        if (!this.$9_1.hasField($v_1.get_name())) {
            this.$9_1.get_entityRecord().initializeValue($v_1.get_name(), null, $v_1.get_attributeType());
        }
        var $v_4 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getInternalDataValue(newValue, $v_1);
        this.$9_1.SetValue($v_1.get_name(), $v_4);
        this.$1C_1($v_1.get_name(), $v_2, $v_3);
        $v_0.resolve(true);
        return $v_0.promise();
    },
    
    reformatValue: function(columnAlias) {
        var $v_0 = this.$h_1(columnAlias);
        this.$9_1.reformatValue(this.get_entityRecord(), $v_0);
        return this.get_entityRecord().getFormattedValue($v_0);
    },
    
    getFormattedValue: function(columnAlias) {
        var $v_0 = this.$h_1(columnAlias);
        if (!_Script.isNullOrUndefined(this.$p_1[$v_0])) {
            return this.$p_1[$v_0];
        }
        else {
            return this.$R_1[$v_0];
        }
    },
    
    getCurrencyDecimalPrecision: function(column) {
        if (column.get_dataType() === 'Currency' && !_Script.isNullOrUndefined(this.$9_1)) {
            return this.$9_1.getFieldDecimalPrecision(column.get_name());
        }
        if ((('precision') in column.get_attributes())) {
            return column.get_attributes()['precision'];
        }
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance().get_userContext().get_UserSettings().get_numberFormatInfo()['CurrencyDecimalDigits'];
    },
    
    getColumnType: function(columnAlias) {
        var $v_0 = this.$h_1(columnAlias);
        var $v_1 = this.$1r_1[$v_0];
        return (IsNull($v_1)) ? null : $v_1.toString();
    },
    
    getErrorMessage: function() {
        var $v_0 = this.$Y_1;
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_0) && !this.isRecordValid()) {
            $v_0 = this.$1s_1;
        }
        return $v_0;
    },
    
    isDirty: function() {
        return this.$9_1.isDirty();
    },
    
    isRecordValid: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(this.$Y_1);
        for (var $$arr_1 = this.$L_1, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            $v_0 = $v_0 && this.isValid($v_1.get_name());
        }
        return $v_0;
    },
    
    getPrimaryEntityLogicalName: function() {
        return this.get_actionableIdentifier().LogicalName;
    },
    
    getRecordId: function() {
        return this.get_identifier().get_identifier();
    },
    
    setFieldErrorMessage: function(columnName, message) {
        var $v_0 = this.isValid(columnName);
        var $v_1 = this.getNotification(columnName);
        this.$C_1.setFieldErrorMessage(columnName, message);
        this.$1C_1(columnName, $v_0, $v_1);
    },
    
    clearFieldErrorMessage: function(columnName) {
        var $v_0 = this.isValid(columnName);
        var $v_1 = this.getNotification(columnName);
        this.$C_1.clearFieldErrorMessage(columnName);
        this.$1C_1(columnName, $v_0, $v_1);
    },
    
    setFieldEditableProperty: function(columnName, isEditable) {
        var $v_0 = this.isValid(columnName);
        var $v_1 = this.getNotification(columnName);
        var $$t_6 = this, $$t_7 = this;
        this.$C_1.isEditable(this.$17_1(columnName)).done(function($p1_0) {
            $$t_6.$C_1.setFieldEditableProperty(columnName, isEditable);
            $$t_6.$1C_1(columnName, $v_0, $v_1);
            $$t_6.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onSetDisabled($$t_6.getRecordId(), columnName));
        }).fail(function($p1_0) {
        });
    },
    
    getFieldEditableProperty: function(columnName) {
        return this.$C_1.getFieldEditableProperty(columnName);
    },
    
    isEditable: function(columnName) {
        return this.$C_1.isEditable(this.$17_1(columnName));
    },
    
    isSecured: function(columnName) {
        return this.$C_1.isSecured(columnName);
    },
    
    isReadable: function(columnName) {
        return this.$C_1.isReadable(columnName);
    },
    
    isValid: function(columnName) {
        return this.$C_1.isValid(columnName);
    },
    
    getNotification: function(columnName) {
        return this.$C_1.getNotification(columnName);
    },
    
    setFieldRequiredLevel: function(columnName, requiredLevel) {
        var $v_0 = this.isValid(columnName);
        var $v_1 = this.getNotification(columnName);
        this.$C_1.setFieldRequiredLevel(columnName, requiredLevel);
        this.$1C_1(columnName, $v_0, $v_1);
        this.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onSetRequiredLevel(this.getRecordId(), columnName));
    },
    
    retrieveFieldRequiredLevel: function(columnName) {
        return this.$C_1.retrieveFieldRequiredLevel(columnName);
    },
    
    getFieldRequiredLevel: function(columnName) {
        return this.$C_1.getFieldRequiredLevel(columnName);
    },
    
    getAttributes: function(columnName) {
        return Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object).resolve(false);
    },
    
    getValidator: function(columnName) {
        return this.$C_1.getValidator(columnName);
    },
    
    getNamedReference: function() {
        return this.$9_1.get_namedReference();
    },
    
    getActivityPartyRecord: function() {
        return null;
    },
    
    validateAllColumns: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Mscrm.DataSetControlErrorStatus);
        var $v_1 = Mscrm.DataSetColumn.filterByMainEntityVisibleColumns(this.$L_1);
        var $$t_B = this, $$t_C = this;
        this.$C_1.getValidationParameters($v_1).done(function($p1_0) {
            for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_2 = $$arr_3[$$idx_5];
                var $v_3 = $p1_0[$v_2.get_name()];
                var $v_4 = $$t_B.isValid($v_2.get_name());
                var $v_5 = $$t_B.getNotification($v_2.get_name());
                $$t_B.$26_1($v_2.get_name(), $v_3, $v_4, $v_5);
            }
            $v_0.resolve($$t_B.isRecordValid());
        }).fail(function($p1_0) {
            $$t_C.$Y_1 = $p1_0.message;
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    merge: function(changes) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.MergeChanges ' + this.$J_1);
        $v_0.start();
        this.$9_1.update(changes);
        this.validateAllColumns();
        $v_0.stop();
    },
    
    adjustDateTimeForUserSettings: function() {
        var $v_0 = this.get_entityRecord().get_changedFieldNames();
        for (var $v_1 = 0; $v_1 < $v_0.get_Count(); $v_1++) {
            var $v_2 = $v_0.get_item($v_1);
            var $v_3 = this.getColumnType($v_2);
            if ($v_3 !== 'datetime') {
                continue;
            }
            var $v_4 = this.$17_1($v_2);
            if (!IsNull($v_4)) {
                var $v_5 = this.getValue($v_2);
                if (_Script.isNullOrUndefined($v_5)) {
                    continue;
                }
                var $v_6 = $v_5.getTimezoneOffset();
                if (!IsNull($v_4.get_attributes()['behavior']) && $v_4.get_attributes()['behavior'] === 1) {
                    $v_6 += Mscrm.DataSetControlClientInfo.getCurrentUserTimeZoneUtcOffset($v_5);
                }
                var $v_7 = $v_5.getTime() + $v_6 * 60000;
                this.get_entityRecord().setValue($v_2, new Date($v_7));
            }
        }
    },
    
    dispose: function() {
        this.$9_1.remove_propertyChanged(this.$$d_$2s_1);
        this.$9_1.dispose();
        this.$9_1 = null;
        this.$p_1 = null;
        this.$R_1 = null;
        this.$L_1 = null;
        this.$9_1 = null;
        this.$1k_1 = true;
    },
    
    $2V_1: function($p0) {
        var $v_0 = {};
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if (!_Script.isNullOrUndefined($v_1.get_alias())) {
                $v_0[$v_1.get_alias()] = $v_1.get_name();
            }
        }
        return $v_0;
    },
    
    $2X_1: function($p0) {
        var $v_0 = {};
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if (!_Script.isNullOrUndefined($v_1.get_attributes())) {
                $v_0[$v_1.get_name()] = $v_1.get_attributes()['type'];
            }
        }
        return $v_0;
    },
    
    $1C_1: function($p0, $p1, $p2) {
        var $$t_6 = this, $$t_7 = this;
        this.$C_1.getValidationParameters([ this.$17_1($p0) ]).done(function($p1_0) {
            var $v_0 = $p1_0[$p0];
            $$t_6.$26_1($p0, $v_0, $p1, $p2);
        }).fail(function($p1_0) {
            $$t_7.$Y_1 = $p1_0.message;
        });
    },
    
    $26_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p2;
        var $v_1 = this.getValue($p0);
        var $v_2 = false;
        if (!_Script.isNullOrUndefined($p1) && !_Script.isNullOrUndefined($p1.$j_0)) {
            var $v_3 = !$p1.$x_0;
            var $v_4 = $p1.$j_0.validate($v_1, $v_2, $v_3);
            this.$C_1.setValidatorResult($p0, $v_4.isValid, $v_1, $v_4.errorMessage);
            $v_0 = this.$C_1.isValid($p0);
            var $v_5 = this.$C_1.getNotification($p0);
            if ($p2 !== $v_0 || $p3 !== $v_5) {
                this.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onIsValidChange(this.getRecordId(), $p0));
            }
        }
        return $v_0;
    },
    
    $h_1: function($p0) {
        if (!_Script.isNullOrUndefined(this.$13_1[$p0])) {
            return this.$13_1[$p0];
        }
        return $p0;
    },
    
    $17_1: function($p0) {
        var $v_0 = this.$13_1[$p0];
        var $v_1 = !_Script.isNullOrUndefined($v_0);
        for (var $$arr_3 = this.$L_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if (($v_1 && $v_2.get_alias() === $p0) || (!$v_1 && $v_2.get_name() === $p0)) {
                return $v_2;
            }
        }
        return null;
    },
    
    refreshValues: function(record) {
        this.$R_1 = {};
        this.$p_1 = {};
        for (var $$arr_1 = this.$L_1, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            var $v_1 = this.$2i_1(record, $v_0.get_name());
            var $v_2 = record.get_entityRecord().getFormattedValue($v_0.get_name());
            this.$R_1[$v_0.get_name()] = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getPublicDataValue($v_1, $v_0);
            this.$p_1[$v_0.get_name()] = $v_2;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.get_alias())) {
                this[$v_0.get_alias()] = this.$R_1[$v_0.get_name()];
            }
        }
    },
    
    $2s_1: function($p0, $p1) {
        if (Microsoft.Crm.Client.Core.Models.FormModel.getFormat($p1) === Microsoft.Crm.Client.Core.Framework.FieldFormat.raw) {
            var $v_0 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat($p1);
            this.refreshValues(this.$9_1);
            this.fireEvent('OnDataSetRecordChange', Mscrm.DataSetUpdateResult.onSetValue(this.getRecordId(), $v_0));
            this.$33_1($v_0);
        }
    },
    
    $2i_1: function($p0, $p1) {
        if (this.get_$2k_1()) {
            return $p0.get_entityRecord().getValue($p1);
        }
        return $p0.GetValue($p1 + Microsoft.Crm.Client.Core.Framework.FieldFormat.raw);
    },
    
    $33_1: function($p0) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSetControl.DataSetRecord.RunOnDataSetColumnChangeHandlers ' + this.$J_1);
        $v_0.start();
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !_Script.isNullOrUndefined(Xrm.Page) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1)) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0)) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0).getData()) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0).getData().entity) && !_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0).getData().entity.attributes)) {
            if (!_Script.isNullOrUndefined(Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0).getData().entity.attributes.get($p0))) {
                Xrm.Page.getControl(this.$J_1).getGrid().getSelectedRows().get(0).getData().entity.attributes.get($p0).fireOnChange();
            }
        }
        $v_0.stop();
    }
}


Mscrm.DataSetRecordSelectionHelper = function(dataSetObject) {
    this.$$d_$2A_1 = Function.createDelegate(this, this.$2A_1);
    Mscrm.DataSetRecordSelectionHelper.initializeBase(this);
    this.$7_1 = dataSetObject;
    this.$E_1 = {};
    this.$N_1 = {};
    this.$7_1.addOnDataSetUpdated(this.$$d_$2A_1);
}
Mscrm.DataSetRecordSelectionHelper.prototype = {
    $7_1: null,
    $E_1: null,
    $N_1: null,
    
    add_onSelectionChanged: function(value) {
        this.addEventHandler('OnSelectionChanged', value);
    },
    
    remove_onSelectionChanged: function(value) {
        this.removeEventHandler('OnSelectionChanged', value);
    },
    
    selectRecord: function(id) {
        if (!_Script.isNullOrUndefined(this.$E_1) && ((id) in this.$E_1)) {
            return;
        }
        this.$E_1 = {};
        if (((id) in this.$N_1)) {
            this.$E_1[id] = this.$N_1[id];
        }
        else {
        }
        this.fireEvent('OnSelectionChanged', null);
    },
    
    selectRecords: function(ids) {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))(ids);
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        var $v_2 = false;
        var $$dict_5 = this.$E_1;
        for (var $$key_6 in $$dict_5) {
            var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ($v_0.indexOf($v_3.key) === -1) {
                $v_1.add($v_3.key);
            }
        }
        for (var $v_4 = 0; $v_4 < $v_1.get_Count(); $v_4++) {
            delete this.$E_1[$v_1.get_item($v_4)];
            $v_2 = true;
        }
        for (var $v_5 = 0; $v_5 < $v_0.get_Count(); $v_5++) {
            if ((($v_0.get_item($v_5)) in this.$N_1)) {
                if ((($v_0.get_item($v_5)) in this.$E_1)) {
                    continue;
                }
                this.$E_1[$v_0.get_item($v_5)] = this.$N_1[$v_0.get_item($v_5)];
                $v_2 = true;
            }
            else {
            }
        }
        if ($v_2) {
            this.fireEvent('OnSelectionChanged', null);
        }
    },
    
    clearSelection: function() {
        var $v_0 = !!this.get_selectedRecordCount();
        this.$E_1 = {};
        if ($v_0) {
            this.fireEvent('OnSelectionChanged', null);
        }
    },
    
    getSelectedRecord: function() {
        var $$dict_1 = this.$E_1;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            return $v_0.value;
        }
        return null;
    },
    
    get_allRecordIds: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$N_1;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_2 = $v_1.value;
            $v_0.push($v_2.getRecordId());
        }
        return $v_0;
    },
    
    get_allRecords: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$N_1;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_2 = $v_1.value;
            $v_0.push($v_2.get_mscrmEntityReference());
        }
        return $v_0;
    },
    
    get_recordCount: function() {
        return Microsoft.Crm.Client.Core.Framework._Dictionary.count(this.$N_1);
    },
    
    get_selectedIds: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$E_1;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_2 = $v_1.value;
            $v_0.push($v_2.getRecordId());
        }
        return $v_0;
    },
    
    get_selectedRecordCount: function() {
        return Microsoft.Crm.Client.Core.Framework._Dictionary.count(this.$E_1);
    },
    
    get_selectedRecords: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$E_1;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_2 = $v_1.value;
            $v_0.push($v_2.get_mscrmEntityReference());
        }
        return $v_0;
    },
    
    get_unselectedIds: function() {
        var $v_0 = new Array(0);
        var $$dict_2 = this.$N_1;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if (!(($v_1.key) in this.$E_1)) {
                $v_0.push($v_1.key);
            }
        }
        return $v_0;
    },
    
    get_unselectedRecords: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$N_1;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            if (!(($v_1.key) in this.$E_1)) {
                var $v_2 = $v_1.value;
                $v_0.push($v_2.get_mscrmEntityReference());
            }
        }
        return $v_0;
    },
    
    $2A_1: function() {
        this.$N_1 = this.$7_1.get_records() || {};
        this.clearSelection();
    },
    
    dispose: function() {
        this.$7_1.removeOnDataSetUpdated(this.$$d_$2A_1);
        this.$7_1 = null;
        this.$N_1 = null;
        this.$E_1 = null;
        Mscrm.NotifyPropertyChanged.prototype.dispose.call(this);
    }
}


Mscrm.DataSetSorting = function() {
}
Mscrm.DataSetSorting.prototype = {
    name: null,
    sortDirection: 0
}


Mscrm.DataSetStaticProperty = function(raw, type) {
    this.raw = raw;
    this.type = type;
}
Mscrm.DataSetStaticProperty.prototype = {
    raw: null,
    type: null
}


Mscrm.DataSetUpdateResult = function() {
    this.fieldErrorMessages = {};
    Mscrm.DataSetUpdateResult.initializeBase(this);
}
Mscrm.DataSetUpdateResult.onRecordUpdate = function(recordId, isRecordSavedSuccessfully) {
    var $v_0 = new Mscrm.DataSetUpdateResult();
    $v_0.resultType = 10;
    $v_0.recordId = recordId;
    $v_0.isRecordSavedSuccessfully = isRecordSavedSuccessfully;
    $v_0.isSuccessful = isRecordSavedSuccessfully;
    return $v_0;
}
Mscrm.DataSetUpdateResult.onSetValue = function(recordId, affectedColumn) {
    var $v_0 = new Mscrm.DataSetUpdateResult();
    $v_0.resultType = 1;
    $v_0.recordId = recordId;
    $v_0.affectedColumns = [ affectedColumn ];
    return $v_0;
}
Mscrm.DataSetUpdateResult.onSetRequiredLevel = function(recordId, affectedColumn) {
    var $v_0 = new Mscrm.DataSetUpdateResult();
    $v_0.resultType = 2;
    $v_0.recordId = recordId;
    $v_0.affectedColumns = [ affectedColumn ];
    return $v_0;
}
Mscrm.DataSetUpdateResult.onSetDisabled = function(recordId, affectedColumn) {
    var $v_0 = new Mscrm.DataSetUpdateResult();
    $v_0.resultType = 3;
    $v_0.recordId = recordId;
    $v_0.affectedColumns = [ affectedColumn ];
    return $v_0;
}
Mscrm.DataSetUpdateResult.onIsValidChange = function(recordId, affectedColumn) {
    var $v_0 = new Mscrm.DataSetUpdateResult();
    $v_0.resultType = 4;
    $v_0.recordId = recordId;
    $v_0.affectedColumns = [ affectedColumn ];
    return $v_0;
}
Mscrm.DataSetUpdateResult.prototype = {
    resultType: 0,
    recordId: null,
    isSuccessful: false,
    isRecordSavedSuccessfully: false,
    affectedColumns: null,
    
    get_resultType: function() {
        return this.resultType;
    },
    
    set_resultType: function(value) {
        this.resultType = value;
        return value;
    },
    
    get_recordId: function() {
        return this.recordId;
    },
    
    set_recordId: function(value) {
        this.recordId = value;
        return value;
    },
    
    get_isSuccessful: function() {
        return this.isSuccessful;
    },
    
    set_isSuccessful: function(value) {
        this.isSuccessful = value;
        return value;
    },
    
    get_isRecordSavedSuccessfully: function() {
        return this.isRecordSavedSuccessfully;
    },
    
    set_isRecordSavedSuccessfully: function(value) {
        this.isRecordSavedSuccessfully = value;
        return value;
    },
    
    get_affectedColumns: function() {
        return this.affectedColumns;
    },
    
    set_affectedColumns: function(value) {
        this.affectedColumns = value;
        return value;
    }
}


Mscrm.DataSetValidationParameter = function() {
}
Mscrm.DataSetValidationParameter.prototype = {
    $x_0: false,
    
    get_isEditable: function() {
        return this.$x_0;
    },
    
    set_isEditable: function($p0) {
        this.$x_0 = $p0;
        return $p0;
    },
    
    $j_0: null,
    
    get_validator: function() {
        return this.$j_0;
    },
    
    set_validator: function($p0) {
        this.$j_0 = $p0;
        return $p0;
    }
}


Mscrm.NotifyPropertyChanged = function() {
}
Mscrm.NotifyPropertyChanged.prototype = {
    $1F_0: null,
    
    get_$1d_0: function() {
        return this.$1F_0 || (this.$1F_0 = new Sys.EventHandlerList());
    },
    
    addEventHandler: function(eventName, eventHandler) {
        this.get_$1d_0().addHandler(eventName, eventHandler);
    },
    
    removeEventHandler: function(eventName, eventHandler) {
        this.get_$1d_0().removeHandler(eventName, eventHandler);
    },
    
    getHandler: function(eventName) {
        return this.get_$1d_0().getHandler(eventName);
    },
    
    fireEvent: function(eventName, args) {
        var $v_0 = this.getHandler(eventName);
        if (!$v_0) {
            return;
        }
        $v_0(args);
    },
    
    dispose: function() {
        this.$1F_0 = new Sys.EventHandlerList();
    }
}


Mscrm.XrmControlDataSetWrapper = function(dataSetControl) {
    Mscrm.XrmControlDataSetWrapper.initializeBase(this);
    this.$k_1 = dataSetControl;
}
Mscrm.XrmControlDataSetWrapper.prototype = {
    $k_1: null,
    
    get_$f_1: function() {
        try {
            return this.$k_1.$2_3.get_primaryDataSet();
        }
        catch ($$e_0) {
            return null;
        }
    },
    
    getTotalRecordCount: function() {
        return this.$k_1.get_totalRecordCount();
    },
    
    getRows: function() {
        return this.$24_1(false);
    },
    
    getSelectedRows: function() {
        return this.$24_1(true);
    },
    
    getFilter: function() {
        return new Mscrm.XrmDataSetFilterWrapper();
    },
    
    $24_1: function($p0) {
        var $v_0 = new Xrm.XrmGridRows();
        var $v_1 = ($p0) ? this.$k_1.get_selectedRecords() : this.$k_1.get_allRecords();
        var $v_2 = $p0 && $v_1.length === 1 && (Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents'));
        for (var $$arr_4 = $v_1, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            $v_0.add(new Mscrm.XrmDataSetRecordWrapper(this.get_$f_1(), $v_3, $v_2));
        }
        return $v_0;
    },
    
    addOnRecordSelect: function(handler) {
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !IsNull(this.get_$f_1())) {
            this.get_$f_1().addOnRecordSelect(handler, false);
        }
    },
    
    removeOnRecordSelect: function(handler) {
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !IsNull(this.get_$f_1())) {
            this.get_$f_1().removeOnRecordSelect(handler);
        }
    },
    
    fireOnRecordSelect: function() {
        if ((Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlPbl') || Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.EditableGridControlJsEvents')) && !IsNull(this.get_$f_1())) {
            this.get_$f_1().fireOnRecordSelect(this.getSelectedRows().get(0).getData().entity);
        }
    }
}


Mscrm.XrmDataSetColumnControlWrapper = function(dataSetObject, dataSetRecord, dataSetColumn, attributeWrapper) {
    Mscrm.XrmDataSetColumnControlWrapper.initializeBase(this);
    this.$5_3 = dataSetObject;
    this.$6_3 = dataSetRecord;
    this.$1_3 = dataSetColumn;
    this.$V_3 = attributeWrapper;
}
Mscrm.XrmDataSetColumnControlWrapper.prototype = {
    $5_3: null,
    $6_3: null,
    $1_3: null,
    $V_3: null,
    
    getAttribute: function() {
        return this.$V_3;
    },
    
    getDisabled: function() {
        var $v_0 = true;
        if (!IsNull(this.$6_3)) {
            var $v_1 = this.$6_3.getFieldEditableProperty(this.$V_3.getName());
            if ($v_1) {
                $v_0 = false;
            }
        }
        return $v_0;
    },
    
    setDisabled: function(isDisabled) {
        if (!IsNull(this.$6_3)) {
            this.$6_3.setFieldEditableProperty(this.$V_3.getName(), !isDisabled);
        }
    },
    
    clearNotification: function(uniqueId) {
        if (!IsNull(this.$6_3)) {
            this.$6_3.clearFieldErrorMessage(this.$V_3.getName());
            return true;
        }
        return false;
    },
    
    clearNotifications: function() {
        return this.clearNotification('');
    },
    
    setNotification: function(message, uniqueId) {
        if (!IsNull(this.$6_3)) {
            this.$6_3.setFieldErrorMessage(this.$V_3.getName(), message);
            return true;
        }
        return false;
    },
    
    addNotification: function(notification) {
        if (IsNull(notification) || IsNull(notification.messages) || !notification.messages.length) {
            return false;
        }
        var $v_0 = notification.messages[0];
        var $v_1 = ($v_0) ? $v_0.toString() : new String();
        return this.setNotification($v_1, '');
    },
    
    getControlType: function() {
        return 'GridCell';
    },
    
    getParent: function() {
        return null;
    },
    
    setFocus: function() {
    },
    
    getLabel: function() {
        if (!IsNull(this.$1_3)) {
            return this.$1_3.get_displayName();
        }
        return '';
    },
    
    getName: function() {
        return this.$V_3.getName();
    },
    
    getVisible: function() {
        return true;
    },
    
    setLabel: function(label) {
    },
    
    setVisible: function(visible) {
    }
}


Mscrm.XrmDataSetDataWrapper = function($p0, $p1, $p2) {
    Mscrm.XrmDataSetDataWrapper.initializeBase(this);
    this.$5_1 = $p0;
    this.$K_1 = $p1;
    this.$4_1 = $p2;
    this.entity = new Mscrm.XrmDataSetEntityWrapper(this.$5_1, this.$K_1, this.$4_1);
}
Mscrm.XrmDataSetDataWrapper.prototype = {
    $5_1: null,
    $K_1: null,
    $4_1: false
}


Mscrm.XrmDataSetEntityAttributeWrapper = function($p0, $p1, $p2, $p3, $p4, $p5) {
    Mscrm.XrmDataSetEntityAttributeWrapper.initializeBase(this);
    this.$5_1 = $p0;
    this.$6_1 = $p1;
    this.$1_1 = $p2;
    this.$4_1 = $p3;
    this.$1Y_1 = $p4;
    this.$1X_1 = $p5;
    if (this.$4_1 && !IsNull(this.$1_1) && !this.$1_1.get_isHidden()) {
        this.controls = new Xrm.XrmControls();
        this.controls.add(new Mscrm.XrmDataSetColumnControlWrapper(this.$5_1, this.$6_1, this.$1_1, this));
    }
}
Mscrm.XrmDataSetEntityAttributeWrapper.prototype = {
    $5_1: null,
    $6_1: null,
    $1_1: null,
    $4_1: false,
    $1Y_1: null,
    $1X_1: null,
    
    getName: function() {
        return this.$1X_1;
    },
    
    getParent: function() {
        return this.$1Y_1;
    },
    
    getValue: function() {
        if (!IsNull(this.$6_1) && !IsNull(this.$1_1)) {
            var $v_0 = null;
            if (this.$1_1.get_dataType().toLowerCase() === 'twooptions') {
                switch (this.$6_1.getValue(this.getName())) {
                    case 1:
                        $v_0 = true;
                        break;
                    case 0:
                        $v_0 = false;
                        break;
                }
            }
            else if (this.$1_1.get_dataType().toLowerCase() === 'lookup.partylist') {
            }
            else if (this.$1_1.get_dataType().toLowerCase() === 'lookup.simple' || this.$1_1.get_dataType().toLowerCase() === 'lookup.customer' || this.$1_1.get_dataType().toLowerCase() === 'lookup.owner' || this.$1_1.get_dataType().toLowerCase() === 'lookup.regarding') {
                var $v_1 = this.$6_1.getValue(this.getName());
                if (!_Script.isNullOrUndefined($v_1)) {
                    var $v_2 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(LookupControlItem))();
                    var $v_3 = new LookupControlItem();
                    $v_3.entityType = $v_1.LogicalName;
                    $v_3.id = $v_1.get_identifier();
                    $v_3.name = $v_1.get_displayName();
                    $v_2.add($v_3);
                    $v_0 = $v_2.toArray();
                }
            }
            else {
                $v_0 = this.$6_1.getValue(this.getName());
            }
            return $v_0;
        }
        return null;
    },
    
    getKey: function() {
        return this.getName();
    },
    
    get_dataSetControlName: function() {
        return this.$5_1.get_controlName();
    },
    
    addOnChange: function(handler) {
        if (this.$4_1 && !IsNull(this.$1_1)) {
            (this.$1_1).addOnChange(handler, false);
        }
    },
    
    fireOnChange: function() {
        if (this.$4_1 && !IsNull(this.$1_1) && !this.$5_1.get_working()) {
            (this.$1_1).fireOnChange(this);
        }
    },
    
    getAttributeType: function() {
        if (this.$4_1) {
            return null;
        }
        return null;
    },
    
    getFormat: function() {
        if (this.$4_1) {
            return null;
        }
        return null;
    },
    
    getIsDirty: function() {
        if (this.$4_1) {
            return false;
        }
        return false;
    },
    
    getIsValid: function() {
        if (this.$4_1) {
            return false;
        }
        return false;
    },
    
    getRequiredLevel: function() {
        var $v_0 = 'none';
        if (this.$4_1 && !IsNull(this.$6_1)) {
            var $v_1 = this.$6_1.retrieveFieldRequiredLevel(this.getName());
            switch ($v_1) {
                case 0:
                    $v_0 = 'none';
                    break;
                case 3:
                    $v_0 = 'recommended';
                    break;
                case 2:
                    $v_0 = 'required';
                    break;
            }
        }
        return $v_0;
    },
    
    getSubmitMode: function() {
        if (this.$4_1) {
            return null;
        }
        return null;
    },
    
    getUserPrivilege: function() {
        if (this.$4_1) {
            return null;
        }
        return null;
    },
    
    removeOnChange: function(handler) {
        if (this.$4_1 && !IsNull(this.$1_1)) {
            (this.$1_1).removeOnChange(handler);
        }
    },
    
    resetInitialValue: function(value) {
        if (this.$4_1) {
        }
    },
    
    setRequiredLevel: function(requiredLevel) {
        if (this.$4_1 && !IsNull(this.$6_1)) {
            var $v_0;
            switch (requiredLevel) {
                case 'none':
                    $v_0 = 0;
                    break;
                case 'recommended':
                    $v_0 = 3;
                    break;
                case 'required':
                    $v_0 = 2;
                    break;
                default:
                    return;
            }
            this.$6_1.setFieldRequiredLevel(this.getName(), $v_0);
        }
    },
    
    setSubmitMode: function(mode) {
        if (this.$4_1) {
        }
    },
    
    setValue: function(value) {
        if (this.$4_1 && !IsNull(this.$6_1) && !IsNull(this.$1_1)) {
            if (this.$1_1.get_dataType().toLowerCase() === 'twooptions') {
                this.$6_1.setValue(this.getName(), (value) ? 1 : 0);
            }
            else if (this.$1_1.get_dataType().toLowerCase() === 'lookup.partylist') {
            }
            else if (this.$1_1.get_dataType().toLowerCase() === 'lookup.simple' || this.$1_1.get_dataType().toLowerCase() === 'lookup.customer' || this.$1_1.get_dataType().toLowerCase() === 'lookup.owner' || this.$1_1.get_dataType().toLowerCase() === 'lookup.regarding') {
                if (_Script.isNullOrUndefined(value)) {
                    this.$6_1.setValue(this.getName(), null);
                }
                else {
                    var $v_0 = value;
                    if (!$v_0.length) {
                        this.$6_1.setValue(this.getName(), null);
                    }
                    else {
                        var $v_1 = $v_0[0];
                        var $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1.id);
                        var $v_3 = new Xrm.Objects.EntityReference($v_1.entityType, $v_2, $v_1.name);
                        this.$6_1.setValue(this.getName(), $v_3);
                    }
                }
            }
            else {
                this.$6_1.setValue(this.getName(), value);
            }
        }
    }
}


Mscrm.XrmDataSetEntityBooleanAttributeWrapper = function($p0, $p1, $p2, $p3, $p4, $p5) {
    Mscrm.XrmDataSetEntityBooleanAttributeWrapper.initializeBase(this);
    this.$0_3 = new Mscrm.XrmDataSetEntityAttributeWrapper($p0, $p1, $p2, $p3, $p4, $p5);
    this.controls = this.$0_3.controls;
    this.$1_3 = $p2;
}
Mscrm.XrmDataSetEntityBooleanAttributeWrapper.prototype = {
    $0_3: null,
    $1_3: null,
    
    getInitialValue: function() {
        return 0;
    },
    
    getOption: function(value) {
        if (IsNull(value)) {
            return null;
        }
        if (!IsNull(this.$1_3) && !IsNull(this.$1_3.get_attributeMetadata()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet().get_options())) {
            var $v_0 = this.$1_3.get_attributeMetadata().get_optionSet().get_options()[value.toString()];
            if (!_Script.isNullOrUndefined($v_0)) {
                return new Xrm.OptionSetItem($v_0.get_value(), $v_0.get_label());
            }
        }
        return null;
    },
    
    getOptions: function() {
        if (!IsNull(this.$1_3) && !IsNull(this.$1_3.get_attributeMetadata()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet().get_options())) {
            var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Xrm.OptionSetItem))();
            var $$dict_3 = this.$1_3.get_attributeMetadata().get_optionSet().get_options();
            for (var $$key_4 in $$dict_3) {
                var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                var $v_2 = $v_1.value;
                $v_0.add(new Xrm.OptionSetItem($v_2.get_value(), $v_2.get_label()));
            }
            return $v_0.toArray();
        }
        return null;
    },
    
    getSelectedOption: function() {
        if (!IsNull(this.getValue())) {
            return this.getOption((this.getValue()) ? 1 : 0);
        }
        return null;
    },
    
    getText: function() {
        var $v_0 = this.getSelectedOption();
        if (!IsNull($v_0)) {
            return $v_0.text;
        }
        return '';
    },
    
    getName: function() {
        return this.$0_3.getName();
    },
    
    getParent: function() {
        return this.$0_3.getParent();
    },
    
    getValue: function() {
        return this.$0_3.getValue();
    },
    
    getKey: function() {
        return this.$0_3.getKey();
    },
    
    get_dataSetControlName: function() {
        return this.$0_3.get_dataSetControlName();
    },
    
    addOnChange: function(handler) {
        this.$0_3.addOnChange(handler);
    },
    
    fireOnChange: function() {
        this.$0_3.fireOnChange();
    },
    
    getAttributeType: function() {
        return this.$0_3.getAttributeType();
    },
    
    getFormat: function() {
        return this.$0_3.getFormat();
    },
    
    getIsDirty: function() {
        return this.$0_3.getIsDirty();
    },
    
    getIsValid: function() {
        return this.$0_3.getIsValid();
    },
    
    getRequiredLevel: function() {
        return this.$0_3.getRequiredLevel();
    },
    
    getSubmitMode: function() {
        return this.$0_3.getSubmitMode();
    },
    
    getUserPrivilege: function() {
        return this.$0_3.getUserPrivilege();
    },
    
    removeOnChange: function(handler) {
        this.$0_3.removeOnChange(handler);
    },
    
    resetInitialValue: function(value) {
        this.$0_3.resetInitialValue(value);
    },
    
    setRequiredLevel: function(requiredLevel) {
        this.$0_3.setRequiredLevel(requiredLevel);
    },
    
    setSubmitMode: function(mode) {
        this.$0_3.setSubmitMode(mode);
    },
    
    setValue: function(value) {
        this.$0_3.setValue(value);
    }
}


Mscrm.XrmDataSetEntityDateTimeAttributeWrapper = function($p0, $p1, $p2, $p3, $p4, $p5) {
    Mscrm.XrmDataSetEntityDateTimeAttributeWrapper.initializeBase(this);
    this.$0_2 = new Mscrm.XrmDataSetEntityAttributeWrapper($p0, $p1, $p2, $p3, $p4, $p5);
    this.controls = this.$0_2.controls;
    this.$1_2 = $p2;
}
Mscrm.XrmDataSetEntityDateTimeAttributeWrapper.prototype = {
    $0_2: null,
    $1_2: null,
    
    getUtcValue: function() {
        var $v_0 = this.getValue();
        return Mscrm.DateTimeUtility.getUtcValue($v_0);
    },
    
    setUtcValue: function(dateTime) {
        if (IsNull(dateTime)) {
            this.setValue(dateTime);
            return;
        }
        var $v_0 = window.ORG_TIMEZONE_OFFSET * 60000;
        var $v_1 = dateTime.getTimezoneOffset() * 60000;
        var $v_2 = new Date(dateTime.getTime() + $v_1 + $v_0);
        this.setValue($v_2);
    },
    
    getName: function() {
        return this.$0_2.getName();
    },
    
    getParent: function() {
        return this.$0_2.getParent();
    },
    
    getValue: function() {
        var $v_0 = this.$0_2.getValue();
        if (IsNull($v_0)) {
            return null;
        }
        if (!IsNull(this.$1_2)) {
            var $v_1 = $v_0.getTimezoneOffset();
            if (!IsNull(this.$1_2.get_attributes()['behavior']) && this.$1_2.get_attributes()['behavior'] === 1) {
                $v_1 += Mscrm.DataSetControlClientInfo.getCurrentUserTimeZoneUtcOffset($v_0);
            }
            var $v_2 = $v_0.getTime() + $v_1 * 60000;
            return new Date($v_2);
        }
        return null;
    },
    
    getKey: function() {
        return this.$0_2.getKey();
    },
    
    get_dataSetControlName: function() {
        return this.$0_2.get_dataSetControlName();
    },
    
    addOnChange: function(handler) {
        this.$0_2.addOnChange(handler);
    },
    
    fireOnChange: function() {
        this.$0_2.fireOnChange();
    },
    
    getAttributeType: function() {
        return this.$0_2.getAttributeType();
    },
    
    getFormat: function() {
        return this.$0_2.getFormat();
    },
    
    getIsDirty: function() {
        return this.$0_2.getIsDirty();
    },
    
    getIsValid: function() {
        return this.$0_2.getIsValid();
    },
    
    getRequiredLevel: function() {
        return this.$0_2.getRequiredLevel();
    },
    
    getSubmitMode: function() {
        return this.$0_2.getSubmitMode();
    },
    
    getUserPrivilege: function() {
        return this.$0_2.getUserPrivilege();
    },
    
    removeOnChange: function(handler) {
        this.$0_2.removeOnChange(handler);
    },
    
    resetInitialValue: function(value) {
        this.$0_2.resetInitialValue(value);
    },
    
    setRequiredLevel: function(requiredLevel) {
        this.$0_2.setRequiredLevel(requiredLevel);
    },
    
    setSubmitMode: function(mode) {
        this.$0_2.setSubmitMode(mode);
    },
    
    setValue: function(value) {
        if (IsNull(value)) {
            this.$0_2.setValue(value);
        }
        else if (!IsNull(this.$1_2)) {
            var $v_0 = value;
            var $v_1 = $v_0.getTimezoneOffset();
            if (!IsNull(this.$1_2.get_attributes()['behavior']) && this.$1_2.get_attributes()['behavior'] === 1) {
                $v_1 += Mscrm.DataSetControlClientInfo.getCurrentUserTimeZoneUtcOffset($v_0);
            }
            var $v_2 = $v_0.getTime() - $v_1 * 60000;
            var $v_3 = new Date($v_2);
            this.$0_2.setValue($v_3);
        }
    }
}


Mscrm.XrmDataSetEntityOptionSetAttributeWrapper = function($p0, $p1, $p2, $p3, $p4, $p5) {
    Mscrm.XrmDataSetEntityOptionSetAttributeWrapper.initializeBase(this);
    this.$0_3 = new Mscrm.XrmDataSetEntityAttributeWrapper($p0, $p1, $p2, $p3, $p4, $p5);
    this.controls = this.$0_3.controls;
    this.$1_3 = $p2;
}
Mscrm.XrmDataSetEntityOptionSetAttributeWrapper.prototype = {
    $0_3: null,
    $1_3: null,
    
    getInitialValue: function() {
        return 0;
    },
    
    getOption: function(value) {
        if (IsNull(value)) {
            return null;
        }
        if (!IsNull(this.$1_3) && !IsNull(this.$1_3.get_attributeMetadata()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet().get_options())) {
            var $v_0 = this.$1_3.get_attributeMetadata().get_optionSet().get_options()[value.toString()];
            if (!_Script.isNullOrUndefined($v_0)) {
                return new Xrm.OptionSetItem($v_0.get_value(), $v_0.get_label());
            }
        }
        return null;
    },
    
    getOptions: function() {
        if (!IsNull(this.$1_3) && !IsNull(this.$1_3.get_attributeMetadata()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet()) && !IsNull(this.$1_3.get_attributeMetadata().get_optionSet().get_options())) {
            var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Xrm.OptionSetItem))();
            var $$dict_3 = this.$1_3.get_attributeMetadata().get_optionSet().get_options();
            for (var $$key_4 in $$dict_3) {
                var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                var $v_2 = $v_1.value;
                $v_0.add(new Xrm.OptionSetItem($v_2.get_value(), $v_2.get_label()));
            }
            return $v_0.toArray();
        }
        return null;
    },
    
    getSelectedOption: function() {
        if (!IsNull(this.getValue())) {
            return this.getOption(this.getValue());
        }
        return null;
    },
    
    getText: function() {
        var $v_0 = this.getSelectedOption();
        if (!IsNull($v_0)) {
            return $v_0.text;
        }
        return '';
    },
    
    getInvariantText: function() {
        return null;
    },
    
    addOption: function(optionSetItem, placement) {
    },
    
    removeOption: function(value) {
    },
    
    clearOptions: function() {
    },
    
    getName: function() {
        return this.$0_3.getName();
    },
    
    getParent: function() {
        return this.$0_3.getParent();
    },
    
    getValue: function() {
        return this.$0_3.getValue();
    },
    
    getKey: function() {
        return this.$0_3.getKey();
    },
    
    get_dataSetControlName: function() {
        return this.$0_3.get_dataSetControlName();
    },
    
    addOnChange: function(handler) {
        this.$0_3.addOnChange(handler);
    },
    
    fireOnChange: function() {
        this.$0_3.fireOnChange();
    },
    
    getAttributeType: function() {
        return this.$0_3.getAttributeType();
    },
    
    getFormat: function() {
        return this.$0_3.getFormat();
    },
    
    getIsDirty: function() {
        return this.$0_3.getIsDirty();
    },
    
    getIsValid: function() {
        return this.$0_3.getIsValid();
    },
    
    getRequiredLevel: function() {
        return this.$0_3.getRequiredLevel();
    },
    
    getSubmitMode: function() {
        return this.$0_3.getSubmitMode();
    },
    
    getUserPrivilege: function() {
        return this.$0_3.getUserPrivilege();
    },
    
    removeOnChange: function(handler) {
        this.$0_3.removeOnChange(handler);
    },
    
    resetInitialValue: function(value) {
        this.$0_3.resetInitialValue(value);
    },
    
    setRequiredLevel: function(requiredLevel) {
        this.$0_3.setRequiredLevel(requiredLevel);
    },
    
    setSubmitMode: function(mode) {
        this.$0_3.setSubmitMode(mode);
    },
    
    setValue: function(value) {
        this.$0_3.setValue(value);
    }
}


Mscrm.XrmDataSetEntityWrapper = function($p0, $p1, $p2) {
    Mscrm.XrmDataSetEntityWrapper.initializeBase(this);
    this.$5_1 = $p0;
    this.$K_1 = $p1;
    this.$4_1 = $p2;
    this.attributes = new Xrm.XrmEntityAttributes();
    if (!IsNull(this.$5_1) && !IsNull(this.$5_1.get_columns())) {
        for (var $$arr_3 = this.$5_1.get_columns(), $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_0 = $$arr_3[$$idx_5];
            switch ($v_0.get_attributeType()) {
                case 2:
                    this.attributes.add(new Mscrm.XrmDataSetEntityDateTimeAttributeWrapper(this.$5_1, this.get_$1H_1(), $v_0, this.$4_1, this, $v_0.get_name()));
                    break;
                case 0:
                    this.attributes.add(new Mscrm.XrmDataSetEntityBooleanAttributeWrapper(this.$5_1, this.get_$1H_1(), $v_0, this.$4_1, this, $v_0.get_name()));
                    break;
                case 11:
                case 12:
                case 13:
                    this.attributes.add(new Mscrm.XrmDataSetEntityOptionSetAttributeWrapper(this.$5_1, this.get_$1H_1(), $v_0, this.$4_1, this, $v_0.get_name()));
                    break;
                default:
                    this.attributes.add(new Mscrm.XrmDataSetEntityAttributeWrapper(this.$5_1, this.get_$1H_1(), $v_0, this.$4_1, this, $v_0.get_name()));
                    break;
            }
        }
    }
}
Mscrm.XrmDataSetEntityWrapper.prototype = {
    $5_1: null,
    $6_1: null,
    $K_1: null,
    $4_1: false,
    
    get_$1H_1: function() {
        if (IsNull(this.$6_1) && !IsNull(this.$5_1) && !IsNull(this.$5_1.get_records()) && !IsNull(((this.$K_1.Id) in this.$5_1.get_records()))) {
            this.$6_1 = this.$5_1.get_records()[this.$K_1.Id];
        }
        return this.$6_1;
    },
    
    getEntityName: function() {
        return this.$K_1.TypeName;
    },
    
    getId: function() {
        return this.$K_1.Id;
    },
    
    getPrimaryAttributeValue: function() {
        return '';
    },
    
    setRecordId: function(createRecordId) {
        if (this.$4_1) {
        }
    },
    
    addOnSave: function(handler, system) {
        if (this.$4_1) {
            if (Mscrm.IDataSetObjectEvent.isInstanceOfType(this.$5_1)) {
                (this.$5_1).addOnRecordSave(handler, system);
            }
        }
    },
    
    getDataXml: function() {
        if (this.$4_1) {
            return null;
        }
        return null;
    },
    
    getIsDirty: function() {
        if (this.$4_1) {
            return false;
        }
        return false;
    },
    
    isInHierarchy: function() {
        if (this.$4_1) {
            return false;
        }
        return false;
    },
    
    removeOnSave: function(handler) {
        if (this.$4_1) {
            if (Mscrm.IDataSetObjectEvent.isInstanceOfType(this.$5_1)) {
                (this.$5_1).removeOnRecordSave(handler);
            }
        }
    },
    
    save: function(action) {
        if (this.$4_1) {
        }
    },
    
    get_dataSetControlName: function() {
        return (IsNull(this.$5_1)) ? '' : this.$5_1.get_controlName();
    }
}


Mscrm.XrmDataSetFilterWrapper = function() {
    Mscrm.XrmDataSetFilterWrapper.initializeBase(this);
}
Mscrm.XrmDataSetFilterWrapper.prototype = {
    
    canEnableFilters: function() {
        return true;
    },
    
    isFilterEnabled: function() {
        return true;
    }
}


Mscrm.XrmDataSetRecordWrapper = function($p0, $p1, $p2) {
    Mscrm.XrmDataSetRecordWrapper.initializeBase(this);
    this.$5_1 = $p0;
    this.$K_1 = $p1;
    this.$4_1 = $p2;
    this.data = new Mscrm.XrmDataSetDataWrapper(this.$5_1, this.$K_1, this.$4_1);
}
Mscrm.XrmDataSetRecordWrapper.prototype = {
    $5_1: null,
    $K_1: null,
    $4_1: false,
    
    getKey: function() {
        return this.$K_1.Id;
    }
}


Mscrm.DataSetControlDefinitions.registerClass('Mscrm.DataSetControlDefinitions');
Mscrm.DataSetCancellationTokenSource.registerClass('Mscrm.DataSetCancellationTokenSource');
Mscrm.DataSetCancellationToken.registerClass('Mscrm.DataSetCancellationToken');
Mscrm.DataSetColumn.registerClass('Mscrm.DataSetColumn', null, Mscrm.IDataSetColumn, Sys.IDisposable, Microsoft.Crm.Client.Core.Framework.ICustomControlAttribute, Mscrm.IDataSetColumnEvent);
Mscrm.DataSetColumnValidator.registerClass('Mscrm.DataSetColumnValidator', null, Mscrm.IDataSetColumnValidator, Sys.IDisposable);
Mscrm.DataSetColumnValidatorResult.registerClass('Mscrm.DataSetColumnValidatorResult');
Mscrm.DataSetControl.registerClass('Mscrm.DataSetControl', Mscrm.CrmUIControl, Mscrm.IExtendedGridControl, Mscrm.IGridControl, Mscrm.IUIControl, Mscrm.IRibbonSelectionControl, Xrm.Interfaces.IXrmGridControl, Mscrm.IVisualizationChangable);
Mscrm.DataSetControlAttributeHelper.registerClass('Mscrm.DataSetControlAttributeHelper');
Mscrm.DataSetControlClientInfo.registerClass('Mscrm.DataSetControlClientInfo', null, Mscrm.IDataSetControlClientInfo);
Mscrm.DataSetControlDataProvider.registerClass('Mscrm.DataSetControlDataProvider', null, Mscrm.IDataSetControlDataProvider);
Mscrm.DataSetControlErrorStatus.registerClass('Mscrm.DataSetControlErrorStatus');
Mscrm.DataSetControlFactory.registerClass('Mscrm.DataSetControlFactory', null, Mscrm.IDataSetControlFactory, Mscrm.IDataSetRecordFactory);
Mscrm.DataSetControlFormatting.registerClass('Mscrm.DataSetControlFormatting', null, Mscrm.IDataSetControlFormatting);
Mscrm.NotifyPropertyChanged.registerClass('Mscrm.NotifyPropertyChanged', null, Sys.IDisposable);
Mscrm.DataSetControlHost.registerClass('Mscrm.DataSetControlHost', Mscrm.NotifyPropertyChanged, Mscrm.IDataSetControlHost, Sys.IDisposable);
Mscrm.DataSetControlMode.registerClass('Mscrm.DataSetControlMode', null, Mscrm.IDataSetControlMode);
Mscrm.DataSetControlNavigationUtilities.registerClass('Mscrm.DataSetControlNavigationUtilities', null, Mscrm.IDataSetControlNavigationUtilities);
Mscrm.DataSetControlPropertyBag.registerClass('Mscrm.DataSetControlPropertyBag', Mscrm.NotifyPropertyChanged, Mscrm.IDataSetControlPropertyBag, Sys.IDisposable);
Mscrm.DataSetControlResources.registerClass('Mscrm.DataSetControlResources', null, Mscrm.IDataSetControlResources);
Mscrm.DataSetControlTheming.registerClass('Mscrm.DataSetControlTheming', null, Mscrm.IDataSetControlTheming);
Mscrm.DataSetControlUserAgent.registerClass('Mscrm.DataSetControlUserAgent', null, Mscrm.IDataSetControlUserAgent);
Mscrm.DataSetControlUtilities.registerClass('Mscrm.DataSetControlUtilities', null, Mscrm.IDataSetControlUtilities);
Mscrm.DataSetDefinition.registerClass('Mscrm.DataSetDefinition', null, Mscrm.IDataSetDefinition, Sys.IDisposable);
Mscrm.DataSetDeviceConfigurationHelper.registerClass('Mscrm.DataSetDeviceConfigurationHelper');
Mscrm.DataSetFetchXmlHelper.registerClass('Mscrm.DataSetFetchXmlHelper');
Mscrm.DataSetFieldAccessHelper.registerClass('Mscrm.DataSetFieldAccessHelper', Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper, Mscrm.IDataSetFieldAccessHelper, Microsoft.Crm.Client.Core.Models.CustomControls.ICustomControlFieldAccessHelper);
Mscrm.DataSetFiltering.registerClass('Mscrm.DataSetFiltering', null, Mscrm.IDataSetFiltering, Sys.IDisposable);
Mscrm.DataSetObject.registerClass('Mscrm.DataSetObject', Mscrm.NotifyPropertyChanged, Mscrm.IDataSetObject, Mscrm.IDataSetObjectEvent, Sys.IDisposable);
Mscrm.DataSetLookup.registerClass('Mscrm.DataSetLookup', Mscrm.DataSetObject, Mscrm.IDataSetLookup, Mscrm.IDataSetObject, Mscrm.IDataSetObjectEvent, Sys.IDisposable);
Mscrm.DataSetLookupDefinition.registerClass('Mscrm.DataSetLookupDefinition');
Mscrm.DataSetLookupFiltering.registerClass('Mscrm.DataSetLookupFiltering', Mscrm.DataSetFiltering);
Mscrm.DataSetObjectInputs.registerClass('Mscrm.DataSetObjectInputs', null, Mscrm.IDataSetObjectInputs, Sys.IDisposable);
Mscrm.DataSetPaging.registerClass('Mscrm.DataSetPaging', null, Mscrm.IDataSetPaging, Sys.IDisposable);
Mscrm.DataSetRecord.registerClass('Mscrm.DataSetRecord', Mscrm.NotifyPropertyChanged, Mscrm.IDataSetRecord, Sys.IDisposable);
Mscrm.DataSetRecordSelectionHelper.registerClass('Mscrm.DataSetRecordSelectionHelper', Mscrm.NotifyPropertyChanged, Mscrm.IDataSetRecordSelectionHelper, Sys.IDisposable);
Mscrm.DataSetSorting.registerClass('Mscrm.DataSetSorting');
Mscrm.DataSetStaticProperty.registerClass('Mscrm.DataSetStaticProperty');
Mscrm.DataSetUpdateResult.registerClass('Mscrm.DataSetUpdateResult', Sys.EventArgs);
Mscrm.DataSetValidationParameter.registerClass('Mscrm.DataSetValidationParameter');
Mscrm.XrmControlDataSetWrapper.registerClass('Mscrm.XrmControlDataSetWrapper', Xrm.XrmControlGrid);
Mscrm.XrmDataSetColumnControlWrapper.registerClass('Mscrm.XrmDataSetColumnControlWrapper', Xrm.XrmDataControl);
Mscrm.XrmDataSetDataWrapper.registerClass('Mscrm.XrmDataSetDataWrapper', Xrm.XrmGridData);
Mscrm.XrmDataSetEntityAttributeWrapper.registerClass('Mscrm.XrmDataSetEntityAttributeWrapper', Xrm.XrmEntityAttribute, Xrm.Interfaces.IXrmDataSetColumn);
Mscrm.XrmDataSetEntityBooleanAttributeWrapper.registerClass('Mscrm.XrmDataSetEntityBooleanAttributeWrapper', Xrm.XrmEntityAttributeBoolean, Xrm.Interfaces.IXrmDataSetColumn);
Mscrm.XrmDataSetEntityDateTimeAttributeWrapper.registerClass('Mscrm.XrmDataSetEntityDateTimeAttributeWrapper', Xrm.XrmEntityAttributeDateTime, Xrm.Interfaces.IXrmDataSetColumn);
Mscrm.XrmDataSetEntityOptionSetAttributeWrapper.registerClass('Mscrm.XrmDataSetEntityOptionSetAttributeWrapper', Xrm.XrmEntityAttributeOptionSet, Xrm.Interfaces.IXrmDataSetColumn);
Mscrm.XrmDataSetEntityWrapper.registerClass('Mscrm.XrmDataSetEntityWrapper', Xrm.XrmEntity, Xrm.Interfaces.IXrmDataSetRecord);
Mscrm.XrmDataSetFilterWrapper.registerClass('Mscrm.XrmDataSetFilterWrapper', Xrm.XrmGridFilter);
Mscrm.XrmDataSetRecordWrapper.registerClass('Mscrm.XrmDataSetRecordWrapper', Xrm.XrmGridRow);
Mscrm.DataSetControl.onRefreshEventName = 'OnRefresh';
Mscrm.DataSetControl.datasetctrL_PREFIX = 'crmCCDataSet_';
Mscrm.DataSetControlAttributeHelper.statusAttributeList = [ 'status', 'state' ];
Mscrm.DataSetControlDataProvider.$1J = null;
Mscrm.DataSetControlHost.onSelectionChangedPropertyName = 'OnSelectionChangedPropertyName';
Mscrm.DataSetControlPropertyBag.onPropertyBagChangedPropertyName = 'OnPropertyBagChanged';
Mscrm.DataSetControlPropertyBag.onSelectionChangedPropertyName = 'OnSelectionChanged';
Mscrm.DataSetControlPropertyBag.activationEventName = 'activation';
Mscrm.DataSetControlPropertyBag.resizeEventName = 'layout';
Mscrm.DataSetControlPropertyBag.datasetEventName = 'dataset';
Mscrm.DataSetLookup.fetchXmlForDefaultLookup = '<fetch top=\"1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<entity name=\"savedquery\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name=\"fetchxml\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name=\"layoutxml\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name=\"savedqueryid\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute=\"querytype\" operator=\"eq\" value=\"64\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute=\"returnedtypecode\" operator=\"eq\" value=\"{0}\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute=\"isdefault\" operator=\"eq\" value=\"1\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute=\"fetchxml\" operator=\"neq\" value=\"null\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</fetch>';
Mscrm.DataSetLookup.fetchXmlForLookup = '<fetch top=\"1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<entity name=\"savedquery\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name=\"fetchxml\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name=\"layoutxml\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute=\"savedqueryid\" operator=\"eq\" value=\"{0}\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</fetch>';
Mscrm.DataSetObject.onDataSetChangePropertyName = 'OnDataSetChange';
Mscrm.DataSetObject.onDataSetRecordChangePropertyName = 'OnDataSetRecordChange';
//@ sourceMappingURL=.srcmap
