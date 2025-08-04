Type.registerNamespace('Microsoft.Crm.Client.Core.Framework');

Microsoft.Crm.Client.Core.Framework.DisposableBase = function() {
}
Microsoft.Crm.Client.Core.Framework.DisposableBase.prototype = {
    $16_0: false,
    
    get_isDisposed: function() {
        return this.$16_0;
    },
    
    dispose: function() {
        if (!this.$16_0) {
            this.internalDispose();
            this.$16_0 = true;
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common');

Microsoft.Crm.Client.Core.Storage.Common.OfflineState = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.OfflineState.isEntityOfflineEnabled = function(logicalname) {
    return false;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Models');

Microsoft.Crm.Client.Core.Models.ICloneableModel = function() {}
Microsoft.Crm.Client.Core.Models.ICloneableModel.registerInterface('Microsoft.Crm.Client.Core.Models.ICloneableModel');


Microsoft.Crm.Client.Core.Models.IFormModel = function() {}
Microsoft.Crm.Client.Core.Models.IFormModel.registerInterface('Microsoft.Crm.Client.Core.Models.IFormModel');


Microsoft.Crm.Client.Core.Models.IModel = function() {}
Microsoft.Crm.Client.Core.Models.IModel.registerInterface('Microsoft.Crm.Client.Core.Models.IModel');


Microsoft.Crm.Client.Core.Models.IRecordModel = function() {}
Microsoft.Crm.Client.Core.Models.IRecordModel.registerInterface('Microsoft.Crm.Client.Core.Models.IRecordModel');


Microsoft.Crm.Client.Core.Models.IReferenceModel = function() {}
Microsoft.Crm.Client.Core.Models.IReferenceModel.registerInterface('Microsoft.Crm.Client.Core.Models.IReferenceModel');


Microsoft.Crm.Client.Core.Models.ModelState = function() {}
Microsoft.Crm.Client.Core.Models.ModelState.prototype = {
    live: 0, 
    snapshot: 1
}
Microsoft.Crm.Client.Core.Models.ModelState.registerEnum('Microsoft.Crm.Client.Core.Models.ModelState', false);


Microsoft.Crm.Client.Core.Models.IsDirtyStatus = function() {}
Microsoft.Crm.Client.Core.Models.IsDirtyStatus.prototype = {
    notSet: 0, 
    dirty: 1, 
    notDirty: 2
}
Microsoft.Crm.Client.Core.Models.IsDirtyStatus.registerEnum('Microsoft.Crm.Client.Core.Models.IsDirtyStatus', false);


Microsoft.Crm.Client.Core.Models.FormModel = function() {
    this.getEffectivePrecisionValue = this.GetEffectivePrecisionValue;
    this.getEffectiveMaxValue = this.GetEffectiveMaxValue;
    this.getEffectiveMinValue = this.GetEffectiveMinValue;
    this.getEffectiveAttributeFormat = this.GetEffectiveAttributeFormat;
    this.getMinDate = this.GetMinDate;
    this.clearCustomAttributes = this.ClearCustomAttributes;
    this.apcl = this.addPropertyChangedListener;
    this.rpcl = this.removePropertyChangedListener;
    Microsoft.Crm.Client.Core.Models.FormModel.initializeBase(this);
    this.eventHandlers = new Sys.EventHandlerList();
    this.$j_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator)))();
    this.ClearCustomAttributes();
}
Microsoft.Crm.Client.Core.Models.FormModel.getFormat = function(fieldName) {
    var $v_0 = fieldName.indexOf('!');
    return ($v_0 < 0) ? null : fieldName.substr($v_0);
}
Microsoft.Crm.Client.Core.Models.FormModel.removeFormat = function(fieldName) {
    return fieldName.split('!')[0];
}
Microsoft.Crm.Client.Core.Models.FormModel.prototype = {
    eventHandlers: null,
    $j_1: null,
    $U_1: null,
    $V_1: null,
    $X_1: null,
    $O_1: null,
    $W_1: null,
    
    setSnapshotState: function() {
    },
    
    releaseSnapshotState: function() {
    },
    
    get_EventHandlers: function() {
        return this.eventHandlers;
    },
    
    set_EventHandlers: function(value) {
        this.eventHandlers = value;
        return value;
    },
    
    get_updatedDecimalPrecisions: function() {
        return this.$U_1;
    },
    
    set_updatedDecimalPrecisions: function(value) {
        this.$U_1 = value;
        return value;
    },
    
    get_updatedMaxValues: function() {
        return this.$V_1;
    },
    
    set_updatedMaxValues: function(value) {
        this.$V_1 = value;
        return value;
    },
    
    get_updatedMinValues: function() {
        return this.$X_1;
    },
    
    set_updatedMinValues: function(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_updatedAttributeFormats: function() {
        return this.$O_1;
    },
    
    set_updatedAttributeFormats: function(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_updatedMinDate: function() {
        return this.$W_1;
    },
    
    set_updatedMinDate: function(value) {
        this.$W_1 = value;
        return value;
    },
    
    get_fieldValidators: function() {
        return this.$j_1;
    },
    
    set_fieldValidators: function(value) {
        this.$j_1 = value;
        return value;
    },
    
    get_transactionCurrencyId: function() {
        return null;
    },
    
    get_changedFieldNames: function() {
        return null;
    },
    
    get_userCurrencyPrecision: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.get_externalContext()['transactioncurrencybyid'];
        var $v_1 = $v_0.get_item(this.get_transactionCurrencyId());
        return ($v_1) ? $v_1.get_currencyPrecision() : Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.get_UserSettings().get_numberFormatInfo()['CurrencyDecimalDigits'];
    },
    
    add_propertyChanged: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.addHandler('PropertyChanged', value);
        }
    },
    
    remove_propertyChanged: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.removeHandler('PropertyChanged', value);
        }
    },
    
    addPropertyChangedListener: function(propertyName, callback) {
        throw Error.notImplemented('EntityRecord does not support adding listeners for individual properties, use the PropertyChanged event instead.');
    },
    
    removePropertyChangedListener: function(propertyName, callback) {
        throw Error.notImplemented('EntityRecord does not support removing listeners for individual properties, use the PropertyChanged event instead.');
    },
    
    fireFieldChanged: function(fieldName, attributeType) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        if (!this.eventHandlers) {
            return;
        }
        var $v_1 = this.eventHandlers.getHandler('PropertyChanged');
        if ($v_1) {
            if (fieldName !== $v_0) {
                $v_1(this, fieldName);
            }
            $v_1(this, $v_0);
            $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.raw);
            $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.numeric);
            switch (attributeType) {
                case 6:
                case 1:
                case 9:
                    $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.id);
                    $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.logicalName);
                    $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.name);
                    break;
                case 0:
                case 11:
                case 12:
                case 13:
                    $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.value);
                    $v_1(this, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.label);
                    break;
                default:
                    break;
            }
        }
    },
    
    getValidator: function(fieldName, validatorType) {
        var $v_0 = this.$j_1.get_item(fieldName);
        if ($v_0) {
            return $v_0.get_item(Microsoft.Crm.Client.Core.Models.Validation.ValidatorType.toString(validatorType));
        }
        return null;
    },
    
    setValidator: function(fieldName, validatorType, validator) {
        var $v_0 = this.$j_1.get_item(fieldName);
        if (!$v_0) {
            $v_0 = this.$j_1.set_item(fieldName, new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator))());
        }
        $v_0.set_item(Microsoft.Crm.Client.Core.Models.Validation.ValidatorType.toString(validatorType), validator);
    },
    
    getAttributePrecision: function(attributeMetadata) {
        switch (attributeMetadata.get_type()) {
            case 8:
                switch (attributeMetadata.get_precisionSource()) {
                    case 0:
                        return attributeMetadata.get_precision();
                    case 1:
                        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.get_organizationSettings().get_pricingDecimalPrecision();
                    default:
                        return this.get_userCurrencyPrecision();
                }
            default:
                return attributeMetadata.get_precision();
        }
    },
    
    GetEffectivePrecisionValue: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = this.getFieldDecimalPrecision(fieldName);
        if (!_Script.isNullOrUndefined(this.$U_1) && this.$U_1.containsKey(fieldName)) {
            var $v_1 = this.$U_1.get_item(fieldName);
            if ($v_1 < $v_0) {
                return $v_1;
            }
        }
        return $v_0;
    },
    
    GetEffectiveMaxValue: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        if (!_Script.isNullOrUndefined(this.$V_1) && this.$V_1.containsKey(fieldName)) {
            return this.$V_1.get_item(fieldName);
        }
        return this.getFieldMaxValue(fieldName);
    },
    
    GetEffectiveMinValue: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        if (!_Script.isNullOrUndefined(this.$X_1) && this.$X_1.containsKey(fieldName)) {
            return this.$X_1.get_item(fieldName);
        }
        return this.getFieldMinValue(fieldName);
    },
    
    GetEffectiveAttributeFormat: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        if (!_Script.isNullOrUndefined(this.$O_1) && this.$O_1.containsKey(fieldName) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(this.$O_1.get_item(fieldName))) {
            return this.$O_1.get_item(fieldName);
        }
        else {
            var $v_0 = this.getAttributeFormat(fieldName);
            if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_0)) {
                return $v_0;
            }
        }
        return '';
    },
    
    GetMinDate: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        if (!_Script.isNullOrUndefined(this.$W_1) && this.$W_1.containsKey(fieldName)) {
            return this.$W_1.get_item(fieldName);
        }
        else {
            return new Date(1753, 0, 1);
        }
    },
    
    ClearCustomAttributes: function() {
        this.$U_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Number))();
        this.$X_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Number))();
        this.$V_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Number))();
        this.$O_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(String))();
        this.$W_1 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Date))();
    },
    
    getFieldValidator: function(fieldName, validatorType, isCreateExperience) {
        return null;
    },
    
    getFieldRequiredLevel: function(fieldName) {
        return null;
    },
    
    getFieldMaxLength: function(fieldName) {
        return null;
    },
    
    getFieldDecimalPrecision: function(fieldName) {
        return 0;
    },
    
    getFieldMaxValue: function(fieldName) {
        return 0;
    },
    
    getFieldMinValue: function(fieldName) {
        return 0;
    },
    
    setUpdatedPrecisionValue: function(fieldName, precisionValue) {
    },
    
    setUpdatedMaxValue: function(fieldName, maxValue) {
    },
    
    setUpdatedMinValue: function(fieldName, minValue) {
    },
    
    setUpdatedAttributeFormat: function(fieldName, attributeFormat) {
    },
    
    setUpdatedMinDate: function(fieldName, minDate) {
    },
    
    isDirty: function() {
        return false;
    },
    
    getAttributeType: function(fieldName) {
        return -1;
    },
    
    getAttributeFormat: function(fieldName) {
        return null;
    },
    
    getAttributeBehavior: function(fieldName) {
        return 0;
    },
    
    internalDispose: function() {
        this.$U_1 = null;
        this.$V_1 = null;
        this.$X_1 = null;
        this.$O_1 = null;
        this.$W_1 = null;
        this.eventHandlers = null;
    }
}


Microsoft.Crm.Client.Core.Models.RecordModel = function(record, isNewRecord) {
    this.$8_2 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4;
    this.$1W_2 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(String))();
    this.$o_2 = {};
    this.setValue = this.SetValue;
    this.get_Id = this.get_id;
    this.get_ModelName = this.get_modelName;
    Microsoft.Crm.Client.Core.Models.RecordModel.resolveInheritance();
    this.apcl = this.addPropertyChangedListener;
    this.rpcl = this.removePropertyChangedListener;
    Microsoft.Crm.Client.Core.Models.RecordModel.initializeBase(this);
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(record, 'record');
    this.$e_2 = {};
    this.$0_2 = record;
    this.$Y_2 = new Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter(this);
    this.$3Q_2(this.$0_2);
    this.$2_2 = null;
    this.$l_2 = 0;
    this.$3S_2(this.$0_2);
    this.$Y_2.formatTimeZoneFields();
    this.$Y_2.formatDurationFields();
    this.$Y_2.formatLanguageFields();
    isNewRecord = (_Script.isNullOrUndefined(isNewRecord)) ? false : isNewRecord;
    this.$1u_2(this.$0_2, isNewRecord);
}
Microsoft.Crm.Client.Core.Models.RecordModel.get_allRecordModels = function() {
    if (!Microsoft.Crm.Client.Core.Models.RecordModel.$1H) {
        Microsoft.Crm.Client.Core.Models.RecordModel.$1H = [];
    }
    return Microsoft.Crm.Client.Core.Models.RecordModel.$1H;
}
Microsoft.Crm.Client.Core.Models.RecordModel.createWithoutEventHandlers = function(record) {
    var $v_0 = new Microsoft.Crm.Client.Core.Models.RecordModel(record);
    return $v_0;
}
Microsoft.Crm.Client.Core.Models.RecordModel.prototype = {
    $0_2: null,
    $E_2: null,
    $z_2: null,
    $2_2: null,
    $Y_2: null,
    $l_2: 0,
    $18_2: 0,
    $n_2: 0,
    isDirtySetByClient: 0,
    $a_2: null,
    $1p_2: false,
    $1A_2: 0,
    $e_2: null,
    $1U_2: false,
    
    add_recordUpdate: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.addHandler('RecordUpdate', value);
        }
    },
    
    remove_recordUpdate: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.removeHandler('RecordUpdate', value);
        }
    },
    
    add_recordUpdating: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.addHandler('RecordUpdating', value);
        }
    },
    
    remove_recordUpdating: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.removeHandler('RecordUpdating', value);
        }
    },
    
    add_recordEnabledChanged: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.addHandler('RecordEnabledChanged', value);
        }
    },
    
    remove_recordEnabledChanged: function(value) {
        if (this.eventHandlers) {
            this.eventHandlers.removeHandler('RecordEnabledChanged', value);
        }
    },
    
    get_isDirtySetByClient: function() {
        return this.isDirtySetByClient;
    },
    
    set_isDirtySetByClient: function(value) {
        this.isDirtySetByClient = value;
        return value;
    },
    
    get_submitModeList: function() {
        return this.$1W_2;
    },
    
    get_entityRecord: function() {
        return this.$0_2;
    },
    
    get_namedReference: function() {
        if (_Script.isNullOrUndefined(this.$E_2)) {
            this.$E_2 = this.$0_2.get_actionableIdentifier();
            if (_Script.isNullOrUndefined(this.$E_2.Name)) {
                var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$I_0.getEntityMetadata(this.$E_2.get_modelType());
                if (!_Script.isNullOrUndefined($v_0)) {
                    this.$E_2.Name = this.$0_2.getValue($v_0.get_primaryNameAttribute());
                }
            }
        }
        return this.$E_2;
    },
    
    get_activityPartyRecord: function() {
        if (_Script.isNullOrUndefined(this.$z_2)) {
            if (_Script.isNullOrUndefined(this.$E_2)) {
                this.$E_2 = this.$0_2.get_actionableIdentifier();
                if (_Script.isNullOrUndefined(this.$E_2.Name)) {
                    var $v_3 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$I_0.getEntityMetadata(this.$E_2.get_modelType());
                    if (!_Script.isNullOrUndefined($v_3)) {
                        this.$E_2.Name = this.$0_2.getValue($v_3.get_primaryNameAttribute());
                    }
                }
            }
            var $v_0 = { partyid: this.$E_2 };
            var $v_1 = { partyid: 6 };
            var $v_2 = new Xrm.Objects.EntityReference('activityparty', Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
            this.$z_2 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_2, $v_0, $v_1, {}, {}, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            this.$z_2.get_changedFieldNames().add('partyid');
        }
        return this.$z_2;
    },
    
    get_secondaryEntityRecord: function() {
        return this.$2_2;
    },
    
    get_identifier: function() {
        return this.$0_2.get_identifier();
    },
    
    get_actionableIdentifier: function() {
        return this.$0_2.get_actionableIdentifier();
    },
    
    get_id: function() {
        return this.$0_2.get_identifier().Id.toString();
    },
    
    get_modelName: function() {
        return this.$0_2.get_identifier().LogicalName;
    },
    
    get_actionableModelName: function() {
        return this.$0_2.get_actionableIdentifier().LogicalName;
    },
    
    get_fieldNames: function() {
        return this.$0_2.get_fieldNames();
    },
    
    get_changedFieldNames: function() {
        return this.$0_2.get_changedFieldNames();
    },
    
    get_modelState: function() {
        return this.$l_2;
    },
    
    set_modelState: function(value) {
        this.$l_2 = value;
        return value;
    },
    
    get_localRetrieveState: function() {
        return this.$18_2;
    },
    
    get_remoteRetrieveState: function() {
        return this.$n_2;
    },
    
    $y_2: false,
    
    get_isDeleted: function() {
        return this.$y_2;
    },
    
    set_isDeleted: function(value) {
        this.$y_2 = value;
        return value;
    },
    
    get_isDisabled: function() {
        var $v_0 = this.GetValue('statecode');
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.isInstanceOfType($v_0)) {
            var $v_1 = ($v_0).get_value();
            if (this.$0_2.get_actionableIdentifier().LogicalName === 'knowledgearticle') {
                if (!_Script.isNullOrUndefined(this.$0_2.get_fields()['majorversionnumber']) && !_Script.isNullOrUndefined(this.$0_2.get_fields()['minorversionnumber']) && !(this.$0_2.get_fields()['majorversionnumber']) && !(this.$0_2.get_fields()['minorversionnumber'])) {
                    return true;
                }
                if ($v_1 === 2 || $v_1 === 3) {
                    var $v_2 = this.$8_2.get_userContext().get_rolePrivileges();
                    return !$v_2.containsKey('7c538e3d-8e82-4f73-922e-471472954c52');
                }
                return $v_1 === 5 || $v_1 === 6;
            }
            if (this.$0_2.get_actionableIdentifier().LogicalName === 'appointment') {
                return !(!$v_1 || $v_1 === 3);
            }
            return !!$v_1;
        }
        return !!($v_0);
    },
    
    get_onRecordChangedFailure: function() {
        return this.$a_2;
    },
    
    set_onRecordChangedFailure: function(value) {
        this.$a_2 = value;
        return value;
    },
    
    get_hasOwner: function() {
        return this.$1p_2;
    },
    
    set_hasOwner: function(value) {
        this.$1p_2 = value;
        return value;
    },
    
    get_retrieveMetadataForNonActionableIdentifier: function() {
        return this.$1U_2;
    },
    
    set_retrieveMetadataForNonActionableIdentifier: function(value) {
        this.$1U_2 = value;
        return value;
    },
    
    get_key: function() {
        return this.$0_2.get_key();
    },
    
    get_allDayDisplayFields: function() {
        return this.$o_2;
    },
    
    get_transactionCurrencyId: function() {
        var $v_0 = null;
        var $v_1 = this.$0_2.getValue('transactioncurrencyid');
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_0 = $v_1.Id.toString();
        }
        return $v_0;
    },
    
    get_$1Z_2: function() {
        return Microsoft.Crm.Client.Core.Framework.DefaultContext.tryCreate(this.get_actionableIdentifier().toString(), 'RecordModel:' + this.get_actionableIdentifier().toString());
    },
    
    update: function(record) {
        var $v_0;
        var $v_1;
        var $v_2 = null;
        var $v_3 = null;
        var $v_4 = true;
        if (!record) {
            return;
        }
        if (record.get_identifier().LogicalName !== this.$0_2.get_identifier().LogicalName) {
            if (_Script.isNullOrUndefined(this.$2_2)) {
                record = record.clone();
                this.$2_2 = this.$0_2;
                this.$0_2 = record;
                this.$1u_2(this.$0_2, false);
                $v_0 = true;
                $v_1 = false;
                $v_3 = this.$2_2;
            }
            else {
                $v_0 = false;
                $v_1 = false;
                $v_2 = this.$2_2;
                $v_3 = this.$0_2;
            }
        }
        else if (!_Script.isNullOrUndefined(this.$2_2)) {
            $v_0 = false;
            $v_1 = true;
            $v_2 = this.$0_2;
            $v_3 = this.$2_2;
            $v_4 = false;
        }
        else {
            $v_0 = false;
            $v_1 = true;
            $v_2 = this.$0_2;
        }
        if (!_Script.isNullOrUndefined($v_2)) {
            var $$dict_7 = record.get_fieldTypes();
            for (var $$key_8 in $$dict_7) {
                var $v_7 = { key: $$key_8, value: $$dict_7[$$key_8] };
                $v_2.get_fieldTypes()[$v_7.key] = $v_7.value;
            }
            if (!_Script.isNullOrUndefined(record.get_entityRecordForProcess())) {
                $v_2.set_entityRecordForProcess(record.get_entityRecordForProcess());
            }
            if (!_Script.isNullOrUndefined(record.get_globalNavigationData())) {
                $v_2.set_globalNavigationData(record.get_globalNavigationData());
            }
        }
        for (var $$arr_9 = record.get_fieldNames(), $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
            var $v_8 = $$arr_9[$$idx_B];
            var $v_9 = record.getValue($v_8);
            var $v_A = $v_9;
            if (!_Script.isNullOrUndefined($v_9) && record.get_fieldTypes()[$v_8] === 21) {
                $v_A = ($v_9).get_value();
            }
            var $v_B = this.$Q_2(record, $v_8, $v_A) || record.get_formattedValues()[$v_8];
            if (!_Script.isNullOrUndefined($v_3)) {
                if ((($v_8) in $v_3.get_fieldTypes())) {
                    this.$3G_2($v_3, $v_8, $v_9, $v_B);
                }
                else {
                    var $v_C = this.$q_2(record, $v_8, $v_9);
                    this.$1V_2(record, $v_8, $v_B, $v_C);
                    if ($v_4) {
                        this.fireFieldChangedInternal(record, $v_8);
                    }
                }
            }
            if (!_Script.isNullOrUndefined($v_2)) {
                $v_2.get_fieldTypes()[$v_8] = record.get_fieldTypes()[$v_8];
                this.$3G_2($v_2, $v_8, $v_9, $v_B);
            }
        }
        var $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(record.get_fieldNames());
        var $v_6 = $v_5.getDifference(record.get_columnSet());
        for (var $$arr_J = $v_6.get_columns(), $$len_K = $$arr_J.length, $$idx_L = 0; $$idx_L < $$len_K; ++$$idx_L) {
            var $v_D = $$arr_J[$$idx_L];
            this.SetValue($v_D, null);
        }
        if ($v_0 && this.$0_2.get_accessRights() !== this.$2_2.get_accessRights()) {
            var $v_E = this.eventHandlers.getHandler('PropertyChanged');
            if ($v_E) {
                $v_E(this, 'accessrights');
            }
        }
        else {
            this.$3P_2(record, $v_2, $v_1);
        }
        if ($v_0 && !Microsoft.Crm.Client.Core.Imported.MscrmComponents.ObjectsEqual(this.$0_2.get_userSharedAttributePrivileges(), this.$2_2.get_userSharedAttributePrivileges())) {
            var $v_F = this.eventHandlers.getHandler('PropertyChanged');
            if ($v_F) {
                $v_F(this, 'usersharedattributeprivileges');
            }
        }
        else {
            this.$3T_2(record, $v_2, $v_1);
        }
        this.$0_2.resetChanges();
    },
    
    $3T_2: function($p0, $p1, $p2) {
        if (!_Script.isNullOrUndefined($p1)) {
            if (!Microsoft.Crm.Client.Core.Imported.MscrmComponents.ObjectsEqual($p1.get_userSharedAttributePrivileges(), $p0.get_userSharedAttributePrivileges())) {
                $p1.set_userSharedAttributePrivileges($p0.get_userSharedAttributePrivileges());
                if ($p2) {
                    var $v_0 = this.eventHandlers.getHandler('PropertyChanged');
                    if ($v_0) {
                        $v_0(this, 'usersharedattributeprivileges');
                    }
                }
            }
        }
    },
    
    $3P_2: function($p0, $p1, $p2) {
        if (!_Script.isNullOrUndefined($p1)) {
            if ($p1.get_accessRights() !== $p0.get_accessRights()) {
                $p1.set_accessRights($p0.get_accessRights());
                if ($p2) {
                    var $v_0 = this.eventHandlers.getHandler('PropertyChanged');
                    if ($v_0) {
                        $v_0(this, 'accessrights');
                    }
                }
            }
            for (var $$arr_4 = $p0.get_relatedEntities().get_entityCollections(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_1 = $$arr_4[$$idx_6];
                var $v_2 = $v_1.get_value();
                var $v_3 = $p1.get_relatedEntities().getByRelationship($v_1.get_key());
                var $v_4 = _Script.isNullOrUndefined($v_3) || $v_3.get_count() <= 0;
                var $v_5 = _Script.isNullOrUndefined($v_2) || $v_2.get_count() <= 0;
                if (!$v_4 || !$v_5) {
                    $p1.get_relatedEntities().addRelationship($v_1.get_key(), $v_2);
                    if ($p2) {
                        var $v_6 = this.eventHandlers.getHandler('PropertyChanged');
                        if ($v_6) {
                            $v_6(this, $v_1.get_key().get_schemaName());
                        }
                    }
                }
            }
        }
    },
    
    setAllDayDisplay: function(dateTimeFieldName, allDayDisplay) {
        this.reformatValue(this.$0_2, dateTimeFieldName, allDayDisplay);
    },
    
    setDateTimeValueByFormat: function(dateTimeFieldName, dateTimeFormat) {
        if (this.$0_2.hasValue(dateTimeFieldName)) {
            var $v_0 = this.$15_2(this.$0_2, dateTimeFieldName, Microsoft.Crm.Client.Core.Framework.FieldFormat.raw);
            this.setUpdatedAttributeFormat(dateTimeFieldName, dateTimeFormat);
            var $v_1 = this.$Q_2(this.$0_2, dateTimeFieldName, $v_0);
            var $v_2 = this.$q_2(this.$0_2, dateTimeFieldName, $v_0);
            this.$1V_2(this.$0_2, dateTimeFieldName, $v_1, $v_2);
        }
    },
    
    checkMoneyFieldWithValues: function() {
        for (var $$arr_0 = this.$0_2.get_fieldNames(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            if (this.$0_2.get_fieldTypes()[$v_0] === 8) {
                var $v_1 = this.$0_2.getValue($v_0);
                if (!_Script.isNullOrUndefined($v_1) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_1.toString())) {
                    return true;
                }
            }
        }
        return false;
    },
    
    checkEmptyTransactionCurrencyField: function() {
        if (this.$0_2.hasField('transactioncurrencyid')) {
            if (this.$0_2.hasValue('transactioncurrencyid')) {
                var $v_0 = this.$0_2.getValue('transactioncurrencyid');
                return _Script.isNullOrUndefined($v_0);
            }
            return true;
        }
        return false;
    },
    
    isTransactionCurrencyField: function(fieldName) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        return $v_0 === 'transactioncurrencyid';
    },
    
    clone: function() {
        var $v_0 = new Microsoft.Crm.Client.Core.Models.RecordModel(this.$0_2.clone());
        var $v_1 = (_Script.isNullOrUndefined(this.$2_2)) ? null : this.$2_2.clone();
        $v_0.$2_2 = $v_1;
        return $v_0;
    },
    
    GetValue: function(fieldName) {
        var $v_0 = [ Mscrm.InternalUtilities.OpportunityProduct, Mscrm.InternalUtilities.InvoiceDetail, Mscrm.InternalUtilities.QuoteDetail, Mscrm.InternalUtilities.SalesOrderDetail ];
        var $v_1 = 'productid';
        var $v_2 = 'productdescription';
        var $v_3 = [ 'productid!name', 'productidname' ];
        if (Array.indexOf($v_0, this.$0_2.get_actionableIdentifier().LogicalName.toLowerCase()) > -1 && Array.indexOf($v_3, fieldName.toLowerCase()) > -1) {
            var $v_4 = this.$1o_2($v_1);
            if ($v_4 && Xrm.Objects.EntityReference.isInstanceOfType($v_4)) {
                return ($v_4).Name;
            }
            else {
                return this.$1o_2($v_2);
            }
        }
        return this.$1o_2(fieldName);
    },
    
    $1o_2: function($p0) {
        var $v_0 = this.$1Y_2(this.$0_2, $p0);
        if (_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined(this.$2_2)) {
            return this.$1Y_2(this.$2_2, $p0);
        }
        else {
            return $v_0;
        }
    },
    
    SetValue: function(fieldName, value, formattedValue, numericFormattedValue) {
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.$3G_2(this.$2_2, fieldName, value, formattedValue, numericFormattedValue, true, false);
        }
        this.$3G_2(this.$0_2, fieldName, value, formattedValue, numericFormattedValue);
    },
    
    $3G_2: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        if (_Script.isNullOrUndefined($p5)) {
            $p5 = false;
        }
        if (_Script.isNullOrUndefined($p6)) {
            $p6 = true;
        }
        var $v_0 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat($p1);
        var $v_1 = Microsoft.Crm.Client.Core.Models.FormModel.getFormat($p1);
        var $v_2 = $v_1 !== Microsoft.Crm.Client.Core.Framework.FieldFormat.raw;
        var $v_3 = $v_1 !== Microsoft.Crm.Client.Core.Framework.FieldFormat.numeric;
        var $v_4 = $v_2 && $v_3;
        $v_1 = ($v_4) ? $v_1 : null;
        var $v_5 = this.$1Y_2($p0, $p1);
        if (_Script.isNullOrUndefined($v_5) && !$p0.hasValue($v_0) && $p5) {
            return;
        }
        var $v_6 = (_Script.isNullOrUndefined($v_1)) ? this.$1Y_2($p0, $v_0 + Microsoft.Crm.Client.Core.Framework.FieldFormat.raw) : $v_5;
        if (Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isInteractionCentricDashboard() && $p1 === 'processid') {
            $v_6 = null;
        }
        var $v_7 = $p2;
        if (!_Script.isNullOrUndefined($p2) && $p0.get_fieldTypes()[$p1] === 21) {
            $v_7 = ($p2).get_value();
        }
        if (!Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual($v_5, $v_7) && !Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual($v_6, $v_7)) {
            if (_Script.isUndefined($p3)) {
                $p3 = this.$Q_2($p0, $v_0, $v_7);
            }
            if (_Script.isUndefined($p4)) {
                $p4 = this.$q_2($p0, $v_0, $v_7);
            }
            this.$2H_2($v_0);
            this.$2Q_2($p0, $v_0, $v_1, $p2, $p3, $p4);
            if ($v_0 === 'transactioncurrencyid') {
                this.$1u_2($p0, false);
                this.$3R_2($p0);
            }
            if ($p6) {
                this.fireFieldChangedInternal($p0, $p1);
            }
        }
    },
    
    setUpdatedPrecisionValue: function(fieldName, precisionValue) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        this.$U_1.set_item(fieldName, precisionValue);
        this.reformatValue(this.$0_2, fieldName);
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.reformatValue(this.$2_2, fieldName);
        }
    },
    
    setUpdatedMaxValue: function(fieldName, maxValue) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        this.$V_1.set_item(fieldName, maxValue);
        this.reformatValue(this.$0_2, fieldName);
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.reformatValue(this.$2_2, fieldName);
        }
    },
    
    setUpdatedMinValue: function(fieldName, minValue) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        this.$X_1.set_item(fieldName, minValue);
        this.reformatValue(this.$0_2, fieldName);
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.reformatValue(this.$2_2, fieldName);
        }
    },
    
    setUpdatedAttributeFormat: function(fieldName, attributeFormat) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        this.$O_1.set_item(fieldName, attributeFormat);
        this.reformatValue(this.$0_2, fieldName);
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.reformatValue(this.$2_2, fieldName);
        }
    },
    
    setUpdatedMinDate: function(fieldName, minDate) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        this.$W_1.set_item(fieldName, minDate);
        this.reformatValue(this.$0_2, fieldName);
        if (!_Script.isNullOrUndefined(this.$2_2)) {
            this.reformatValue(this.$2_2, fieldName);
        }
    },
    
    reformatValue: function(record, fieldName, allDayDisplay) {
        if (!_Script.isUndefined(allDayDisplay) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(fieldName)) {
            if (allDayDisplay) {
                this.$o_2[fieldName] = true;
            }
            else {
                this.$o_2[fieldName] = false;
            }
        }
        if (record.hasValue(fieldName)) {
            var $v_0 = this.$15_2(record, fieldName, Microsoft.Crm.Client.Core.Framework.FieldFormat.raw);
            var $v_1 = this.$Q_2(record, fieldName, $v_0);
            var $v_2 = this.$q_2(record, fieldName, $v_0);
            this.$1V_2(record, fieldName, $v_1, $v_2);
        }
    },
    
    getFieldValidator: function(fieldName, validatorType, isCreateExperience) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1 = this.getValidator(fieldName, validatorType);
        if ($v_1) {
            $v_0.resolve($v_1);
        }
        else {
            var $$t_B = this, $$t_C = this;
            this.$1M_2(fieldName).then(function($p1_0) {
                $$t_B.getFieldRequiredLevel(fieldName).then(function($p2_0) {
                    if ($$t_B.$16_0) {
                        $v_0.resolve(null);
                        return;
                    }
                    $v_1 = $$t_B.getValidator(fieldName, validatorType);
                    if (!$v_1) {
                        var $v_2 = $p2_0 === 2 || $p2_0 === 1;
                        var $v_3 = true;
                        if ($v_2 && $p1_0.get_isSecured()) {
                            $v_3 = isCreateExperience || Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.hasAttributeAccessRights($p1_0, 2, $$t_B.$0_2);
                        }
                        switch (validatorType) {
                            case 2:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator($v_2, $v_3, Math.floor($p1_0.get_minValue()), Math.floor($p1_0.get_maxValue()));
                                break;
                            case 3:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator($v_2, $v_3, $$t_B.GetEffectiveMinValue(fieldName), $$t_B.GetEffectiveMaxValue(fieldName), $$t_B.GetEffectivePrecisionValue(fieldName));
                                break;
                            case 4:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator($v_2, $v_3, $$t_B.GetEffectiveMinValue(fieldName), $$t_B.GetEffectiveMaxValue(fieldName), $$t_B.GetEffectivePrecisionValue(fieldName), false);
                                break;
                            case 5:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator($v_2, $v_3);
                                break;
                            case 6:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator($v_2, $v_3);
                                break;
                            case 7:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator($v_2, $v_3, false);
                                break;
                            case 8:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator($v_2, $v_3, $$t_B.getAttributeBehavior(fieldName), $$t_B.GetMinDate(fieldName));
                                break;
                            default:
                                $v_1 = new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator($v_2, $v_3);
                                break;
                        }
                        $$t_B.setValidator(fieldName, validatorType, $v_1);
                    }
                    $v_0.resolve($v_1);
                }, function($p2_0) {
                    $v_0.reject($p2_0);
                });
            }, function($p1_0) {
                $v_0.reject($p1_0);
            });
        }
        return $v_0.promise();
    },
    
    getFieldMaxLength: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Number, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $$t_4 = this, $$t_5 = this;
        this.$1M_2(fieldName).then(function($p1_0) {
            if ($p1_0.get_maxLength() > 0) {
                $v_0.resolve($p1_0.get_maxLength());
            }
            else {
                $v_0.reject();
            }
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    getFieldRequiredLevel: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        if (fieldName === 'subject' && this.get_modelName() === 'annotation') {
            $v_0.resolve(0);
        }
        else {
            var $$t_4 = this, $$t_5 = this;
            this.$1M_2(fieldName).then(function($p1_0) {
                $v_0.resolve($p1_0.get_requiredLevel());
            }, function($p1_0) {
                $v_0.reject($p1_0);
            });
        }
        return $v_0.promise();
    },
    
    isDirty: function() {
        if (this.isDirtySetByClient) {
            return (this.isDirtySetByClient === 1) ? true : false;
        }
        return this.$0_2.isDirty();
    },
    
    hasField: function(fieldName) {
        if (this.$0_2.hasField(fieldName)) {
            return true;
        }
        else if (!_Script.isNullOrUndefined(this.$2_2)) {
            return this.$2_2.hasField(fieldName);
        }
        return false;
    },
    
    setSnapshotState: function() {
        this.$1A_2++;
        this.$l_2 = 1;
    },
    
    releaseSnapshotState: function() {
        this.$1A_2 = Math.max(this.$1A_2 - 1, 0);
        if (!this.$1A_2) {
            this.$l_2 = 0;
        }
    },
    
    internalDispose: function() {
        Microsoft.Crm.Client.Core.Models.FormModel.prototype.internalDispose.call(this);
        this.$a_2 = null;
        this.$Y_2 = null;
        this.$e_2 = null;
    },
    
    onRecordChanging: function(sender, eventArgs) {
        this.$18_2 = 0;
        this.$n_2 = 0;
        this.fireEventHandler('RecordUpdating', null);
        return;
    },
    
    onRecordChanged: function(sender, eventArgs) {
        if (!eventArgs.get_updateRecord() && !eventArgs.get_sourceStore()) {
            this.$18_2 = eventArgs.get_retrieveState();
            this.fireEventHandler('RecordUpdate', new Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs(eventArgs.get_retrieveState(), eventArgs.get_sourceStore()));
            return;
        }
        if (eventArgs.get_retrieveState() === 2) {
            this.$y_2 = true;
            this.$n_2 = 2;
            this.fireEventHandler('RecordUpdate', new Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs(eventArgs.get_retrieveState(), eventArgs.get_sourceStore()));
            if (!_Script.isNullOrUndefined(this.$a_2)) {
                var $v_0 = (_Script.isNullOrUndefined(eventArgs.get_errorStatus())) ? Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorCode(0) : eventArgs.get_errorStatus();
                this.$a_2($v_0);
            }
            this.dispose();
            return;
        }
        else if (eventArgs.get_retrieveState() !== 1) {
            this.$n_2 = 3;
            if (!_Script.isNullOrUndefined(this.$a_2)) {
                var $v_1 = (_Script.isNullOrUndefined(eventArgs.get_errorStatus())) ? Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorCode(0) : eventArgs.get_errorStatus();
                this.$a_2($v_1);
                return;
            }
            else {
                throw Error.create(String.format('OnRecordsChanged has failed in RecordModel, EventArgs.RetrieveState not Success. EventArgs.RetrieveState is {0}', Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveState.toString(eventArgs.get_retrieveState())));
            }
        }
        if (this.$l_2 === 1) {
            if (!(Microsoft.Crm.Client.Core.Framework.DeviceConfiguration.get_isInteractionCentricDashboard() && window.location.href && window.location.href.toString().indexOf('pagetype') > -1)) {
                return;
            }
        }
        if (eventArgs.get_sourceStore() === 1) {
            this.$n_2 = eventArgs.get_retrieveState();
        }
        else if (!eventArgs.get_sourceStore()) {
            this.$18_2 = eventArgs.get_retrieveState();
        }
        if (this.$0_2 === eventArgs.get_data()) {
            this.fireEventHandler('RecordUpdate', new Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs(eventArgs.get_retrieveState(), eventArgs.get_sourceStore()));
            return;
        }
        this.updateEntityRecord(eventArgs);
    },
    
    updateEntityRecord: function(eventArgs) {
        var $v_0 = eventArgs.get_data();
        this.update($v_0);
        this.fireEventHandler('RecordUpdate', new Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs(eventArgs.get_retrieveState(), eventArgs.get_sourceStore()));
    },
    
    onRecordDeleted: function(sender, eventArgs) {
        this.$y_2 = true;
        this.$n_2 = 2;
        this.dispose();
    },
    
    $2H_2: function($p0) {
        if (!this.$1W_2.containsKey($p0) || this.$1W_2.get_item($p0) !== 'never') {
            this.$0_2.markFieldChanged($p0);
        }
    },
    
    $3S_2: function($p0) {
        for (var $$arr_1 = $p0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            switch ($p0.get_fieldTypes()[$v_0]) {
                case 18:
                case 5:
                case 4:
                case 3:
                    $p0.get_numericFormattedValues()[$v_0] = $p0.get_formattedValues()[$v_0];
                    break;
                case 8:
                    var $v_1 = this.$q_2($p0, $v_0, $p0.getValue($v_0));
                    $p0.get_numericFormattedValues()[$v_0] = $v_1;
                    break;
            }
        }
    },
    
    $3Q_2: function($p0) {
        if (Microsoft.Crm.Client.Core.Storage.Common.OfflineState.isEntityOfflineEnabled($p0.get_identifier().LogicalName)) {
            for (var $$arr_1 = $p0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_0 = $$arr_1[$$idx_3];
                switch ($p0.get_fieldTypes()[$v_0]) {
                    case 18:
                    case 5:
                    case 4:
                    case 3:
                    case 8:
                    case 2:
                        if (_Script.isNullOrUndefined($p0.get_formattedValues()[$v_0])) {
                            $p0.get_formattedValues()[$v_0] = this.$Q_2($p0, $v_0, $p0.getValue($v_0));
                        }
                        break;
                }
            }
        }
        else {
            if (!_Script.isNullOrUndefined($p0.getValue('scheduledstart'))) {
                $p0.get_formattedValues()['scheduledstart'] = this.$Q_2($p0, 'scheduledstart', $p0.getValue('scheduledstart'));
            }
            if (!_Script.isNullOrUndefined($p0.getValue('scheduledend'))) {
                $p0.get_formattedValues()['scheduledend'] = this.$Q_2($p0, 'scheduledend', $p0.getValue('scheduledend'));
            }
            if (!_Script.isNullOrUndefined($p0.getValue('actualdurationminutes'))) {
                $p0.get_formattedValues()['actualdurationminutes'] = this.$Q_2($p0, 'actualdurationminutes', $p0.getValue('actualdurationminutes'));
            }
        }
    },
    
    $3R_2: function($p0) {
        for (var $$arr_1 = $p0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($p0.get_fieldTypes()[$v_0] === 8) {
                var $v_1 = $p0.getValue($v_0);
                $p0.get_formattedValues()[$v_0] = this.$Q_2($p0, $v_0, $v_1);
                $p0.get_numericFormattedValues()[$v_0] = this.$q_2($p0, $v_0, $v_1);
                this.fireFieldChangedInternal($p0, $v_0);
            }
        }
    },
    
    $1Y_2: function($p0, $p1) {
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrEmptyArgument($p1, 'fieldName');
        var $v_0 = $p0.get_relatedEntities().getByRelationshipName($p1);
        if (!_Script.isNullOrUndefined($v_0)) {
            return $v_0.get_item(0);
        }
        else {
            if ($p0.hasValue($p1)) {
                return this.$15_2($p0, $p1, null);
            }
            else {
                var $v_1 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat($p1);
                if (!$p0.hasValue($v_1)) {
                    return null;
                }
                return this.$15_2($p0, $v_1, Microsoft.Crm.Client.Core.Models.FormModel.getFormat($p1));
            }
        }
    },
    
    $15_2: function($p0, $p1, $p2) {
        var $v_0 = !_Script.isNullOrUndefined($p2);
        var $v_1 = $p2 === Microsoft.Crm.Client.Core.Framework.FieldFormat.raw;
        var $v_2 = $p2 === Microsoft.Crm.Client.Core.Framework.FieldFormat.numeric;
        var $v_3 = $v_0 && !$v_1 && !$v_2;
        var $v_4 = null;
        var $v_5 = $p0.getValue($p1);
        if (!_Script.isNullOrUndefined($v_5)) {
            var $v_6 = $p0.getFormattedValue($p1);
            var $v_7 = $p0.getNumericFormattedValue($p1);
            var $v_8 = $p0.get_fieldTypes()[$p1];
            if ($v_8 === 21) {
                $v_8 = ($v_5).get_attributeType();
                $v_5 = ($v_5).get_value();
            }
            var $v_9 = this.GetEffectiveAttributeFormat($p1);
            if ($v_9 === 'tickersymbol') {
                $v_5 = $v_6;
            }
            switch ($v_8) {
                case 1:
                case 6:
                case 9:
                    if (!_Script.isNullOrUndefined($p2) && $p2.startsWith('!')) {
                        $p2 = $p2.substr(1);
                    }
                    $v_4 = ($v_3) ? ($v_5).getValue($p2) : $v_5;
                    break;
                case 13:
                case 12:
                case 0:
                case 11:
                    $v_4 = ($v_3) ? ($v_5).getValue($p2) : $v_5;
                    break;
                default:
                    $v_4 = ($v_1) ? $v_5 : ($v_2) ? $v_7 : $v_6;
                    break;
            }
        }
        return $v_4;
    },
    
    $2Q_2: function($p0, $p1, $p2, $p3, $p4, $p5) {
        if (_Script.isNullOrUndefined($p2)) {
            $p0.setValue($p1, $p3);
            this.$1V_2($p0, $p1, $p4, $p5);
        }
        else {
            var $v_0 = $p0.getValue($p1);
            if (Xrm.Objects.EntityReference.isInstanceOfType($v_0)) {
                var $v_1 = $v_0;
                $v_1.setValue($p2, $p3);
            }
        }
    },
    
    $1V_2: function($p0, $p1, $p2, $p3) {
        $p0.get_formattedValues()[$p1] = $p2;
        $p0.get_numericFormattedValues()[$p1] = $p3;
    },
    
    getAttributeFormat: function(fieldName) {
        var $v_0 = this.$8_2.get_metadataCache().getAttributeMetadata(this.$0_2.get_actionableIdentifier().LogicalName, fieldName);
        return ($v_0 && $v_0.get_format()) ? $v_0.get_format().toLowerCase() : '';
    },
    
    getAttributeBehavior: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = this.$8_2.get_metadataCache().getAttributeMetadata(this.$0_2.get_actionableIdentifier().LogicalName, fieldName);
        return ($v_0 && $v_0.get_behavior()) ? $v_0.get_behavior() : 1;
    },
    
    getAttributeType: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        return this.$0_2.get_fieldTypes()[fieldName];
    },
    
    $Q_2: function($p0, $p1, $p2) {
        var $v_0 = $p0.get_fieldTypes()[$p1];
        return this.$Y_2.formatFieldValue($v_0, $p1, $p2);
    },
    
    $q_2: function($p0, $p1, $p2) {
        var $v_0 = $p0.get_fieldTypes()[$p1];
        return this.$Y_2.formatNumericFieldValue($v_0, $p1, $p2);
    },
    
    discardChanges: function() {
        var $$dict_1 = this.$0_2.get_cleanFields();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.SetValue($v_0.key.toString(), $v_0.value);
        }
        this.$0_2.resetChanges();
    },
    
    createFieldFromObjectData: function(fieldName, fieldValue) {
        var $v_0 = this.$25_2(fieldName);
        return (!_Script.isNullOrUndefined($v_0)) ? $v_0.createFieldFromObjectData(fieldName, fieldValue) : null;
    },
    
    getFieldObjectData: function(fieldName) {
        var $v_0 = this.$25_2(fieldName);
        return (!_Script.isNullOrUndefined($v_0)) ? $v_0.getFieldObjectData(fieldName) : null;
    },
    
    $25_2: function($p0) {
        return (this.$0_2.hasField($p0)) ? this.$0_2 : ((this.$2_2 && this.$2_2.hasField($p0)) ? this.$2_2 : null);
    },
    
    getFieldDecimalPrecision: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = this.$8_2.get_metadataCache().getAttributeMetadata(this.$0_2.get_actionableIdentifier().LogicalName, fieldName);
        if (!_Script.isNullOrUndefined($v_0)) {
            return this.getAttributePrecision($v_0);
        }
        else {
            return this.$2t_2(fieldName);
        }
    },
    
    getFieldMaxValue: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = this.$8_2.get_metadataCache().getAttributeMetadata(this.$0_2.get_actionableIdentifier().LogicalName, fieldName);
        if (!_Script.isNullOrUndefined($v_0)) {
            return $v_0.get_maxValue();
        }
        else {
            return this.$2u_2();
        }
    },
    
    getFieldMinValue: function(fieldName) {
        fieldName = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_0 = this.$8_2.get_metadataCache().getAttributeMetadata(this.$0_2.get_actionableIdentifier().LogicalName, fieldName);
        if (!_Script.isNullOrUndefined($v_0)) {
            return $v_0.get_minValue();
        }
        else {
            return this.$2v_2();
        }
    },
    
    getFieldAttributeValues: function(fieldName, valueNames) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $$t_7 = this, $$t_8 = this;
        this.$1M_2(fieldName).then(function($p1_0) {
            var $v_1 = {};
            for (var $v_2 = 0; $v_2 < valueNames.length; $v_2++) {
                $v_1[valueNames[$v_2]] = $$t_7.$2l_2(valueNames[$v_2], $p1_0);
            }
            $v_0.resolve($v_1);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $2l_2: function($p0, $p1) {
        var $v_0 = null;
        if (_Script.isNullOrUndefined($p1)) {
            return $v_0;
        }
        switch ($p0.toLowerCase()) {
            case 'displayname':
                $v_0 = $p1.get_displayName();
                break;
            case 'logicalname':
            case 'name':
                $v_0 = $p1.get_logicalName();
                break;
            case 'issecured':
                $v_0 = $p1.get_isSecured();
                break;
            case 'type':
                $v_0 = (_Script.isNullOrUndefined($p1.get_type())) ? 'unknown' : Xrm.Objects.AttributeType.toString($p1.get_type()).toLowerCase();
                break;
            case 'format':
                $v_0 = $p1.get_format();
                break;
            case 'behavior':
                $v_0 = $p1.get_behavior();
                break;
            case 'minvalue':
                $v_0 = $p1.get_minValue();
                break;
            case 'maxvalue':
                $v_0 = $p1.get_maxValue();
                break;
            case 'maxlength':
                $v_0 = $p1.get_maxLength();
                break;
            case 'optionset':
            case 'options':
                $v_0 = $p1.get_optionSet();
                break;
            case 'defaultvalue':
                $v_0 = (_Script.isNullOrUndefined($p1.get_defaultValue())) ? $p1.get_defaultFormValue() : $p1.get_defaultValue();
                break;
            case 'precision':
                $v_0 = this.getAttributePrecision($p1);
                break;
            case 'targets':
                $v_0 = $p1.get_targets();
                break;
            case 'imemode':
                $v_0 = $p1.get_imeMode();
                break;
            case 'requiredlevel':
                $v_0 = $p1.get_requiredLevel();
                break;
            case 'sourcetype':
                $v_0 = $p1.get_sourceType();
                break;
            case 'lastupdatedfield':
                $v_0 = Microsoft.Crm.Client.Core.Framework.CustomControlUtils.getRollupDateFieldName($p1.get_logicalName());
                break;
            default:
                break;
        }
        return $v_0;
    },
    
    $2u_2: function() {
        return Number.MAX_VALUE;
    },
    
    $2v_2: function() {
        return Number.MIN_VALUE;
    },
    
    $2t_2: function($p0) {
        var $v_0 = null;
        if (this.$0_2.hasField($p0)) {
            $v_0 = this.$0_2;
        }
        else if (this.$2_2 && this.$2_2.hasField($p0)) {
            $v_0 = this.$2_2;
        }
        if ($v_0) {
            var $v_1 = this.$0_2.get_fieldTypes()[$p0];
            switch ($v_1) {
                case 3:
                case 4:
                    return this.$8_2.get_userContext().get_UserSettings().get_numberFormatInfo()['NumberDecimalDigits'];
                case 8:
                    return this.get_userCurrencyPrecision();
            }
        }
        return 0;
    },
    
    $1u_2: function($p0, $p1) {
        if (this.$0_2.get_identifier().LogicalName === 'transactioncurrency') {
            return;
        }
        if ($p0.hasField('transactioncurrencyid') || $p0.hasFieldType(8)) {
            var $v_0 = this.$15_2($p0, 'transactioncurrencyid', null);
            if (_Script.isNullOrUndefined($v_0) && $p1) {
                var $v_1 = this.$8_2.get_userContext().getDefaultTransactionCurrency();
                if (!_Script.isNullOrUndefined($v_1)) {
                    $v_0 = new Xrm.Objects.EntityReference('transactioncurrency', $v_1.get_transactionCurrencyId(), $v_1.get_currencyName());
                    $p0.get_fieldTypes()['transactioncurrencyid'] = 6;
                    this.$2H_2('transactioncurrencyid');
                    this.$2Q_2($p0, 'transactioncurrencyid', null, $v_0, null, null);
                }
            }
            if (!_Script.isNullOrUndefined($v_0) && this.$0_2.get_fieldTypes()['transactioncurrencyid'] === 6) {
                var $v_2 = $v_0.getValue('currencysymbol');
                if (_Script.isNullOrUndefined($v_2)) {
                    var $v_3 = $v_0.Id.toString();
                    $v_2 = this.$8_2.get_userContext().getTransactionCurrencySymbol($v_3);
                }
                $v_0.setValue('currencysymbol', $v_2);
            }
            if (this.eventHandlers) {
                var $v_4 = this.eventHandlers.getHandler('PropertyChanged');
                if ($v_4) {
                    $v_4(this, 'transactioncurrencyid!currencysymbol');
                }
            }
        }
    },
    
    fireEventHandler: function(eventName, eventArgs) {
        var $v_0 = this.eventHandlers.getHandler(eventName);
        if ($v_0) {
            $v_0(this, eventArgs);
        }
    },
    
    fireFieldChangedInternal: function(record, fieldName) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.FormModel.removeFormat(fieldName);
        var $v_1 = record.get_fieldTypes()[$v_0];
        this.fireFieldChanged(fieldName, $v_1);
        if ($v_0 === 'statecode') {
            this.fireEventHandler('RecordEnabledChanged', null);
        }
    },
    
    $1M_2: function($p0) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1 = this.$0_2.get_actionableIdentifier().LogicalName;
        var $v_2 = this.$0_2.get_fieldTypes()[$p0];
        if ($v_2 === 21) {
            var $v_4 = this.$0_2.getValue($p0);
            $v_1 = $v_4.get_entityLogicalName();
            $p0 = $v_4.get_attributeLogicalName();
        }
        if (this.$3N_2($v_1, $p0, $v_0)) {
            return $v_0.promise();
        }
        var $v_3 = new Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery($v_1, [ $p0 ]);
        var $$t_C = this, $$t_D = this;
        this.$8_2.retrieveMultipleAttributeMetadata($v_3, this.get_$1Z_2()).then(function($p1_0) {
            $$t_C.$2W_2($v_1, $p0, $p1_0.get_item(0));
            $v_0.resolve($p1_0.get_item(0));
        }, function($p1_0) {
            if (!_Script.isNullOrUndefined($$t_D.$2_2)) {
                $v_3 = new Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery($$t_D.$2_2.get_actionableIdentifier().LogicalName, [ $p0 ]);
                $$t_D.$8_2.retrieveMultipleAttributeMetadata($v_3, $$t_D.get_$1Z_2()).then(function($p2_0) {
                    $v_0.resolve($p2_0.get_item(0));
                }, function($p2_0) {
                    $v_0.reject($p2_0);
                });
            }
            else if ($$t_D.$1U_2 && $$t_D.$0_2.get_actionableIdentifier().LogicalName !== $$t_D.$0_2.get_identifier().LogicalName) {
                $v_3 = new Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery($$t_D.$0_2.get_identifier().LogicalName, [ $p0 ]);
                $$t_D.$8_2.retrieveMultipleAttributeMetadata($v_3, $$t_D.get_$1Z_2()).then(function($p2_0) {
                    $v_0.resolve($p2_0.get_item(0));
                }, function($p2_0) {
                    $v_0.reject($p2_0);
                });
            }
            else {
                $v_0.reject($p1_0);
            }
        });
        return $v_0.promise();
    },
    
    $3N_2: function($p0, $p1, $p2) {
        if ((($p0) in this.$e_2)) {
            var $v_0 = this.$e_2[$p0];
            if ((($p1) in $v_0)) {
                $p2.resolve($v_0[$p1]);
                return true;
            }
        }
        else {
            this.$e_2[$p0] = {};
        }
        return false;
    },
    
    $2W_2: function($p0, $p1, $p2) {
        var $v_0 = this.$e_2[$p0];
        $v_0[$p1] = $p2;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Models.Validation');

Microsoft.Crm.Client.Core.Models.Validation.ICurrencyValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.ICurrencyValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.ICurrencyValidator');


Microsoft.Crm.Client.Core.Models.Validation.IDateTimeValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.IDateTimeValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.IDateTimeValidator');


Microsoft.Crm.Client.Core.Models.Validation.IDecimalValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.IDecimalValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.IDecimalValidator');


Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator');


Microsoft.Crm.Client.Core.Models.Validation.IMoneyValidator = function() {}
Microsoft.Crm.Client.Core.Models.Validation.IMoneyValidator.registerInterface('Microsoft.Crm.Client.Core.Models.Validation.IMoneyValidator');


Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator = function(isRequired, hasUserReadPermission, hasMoneyFieldValuesWithoutCurrency) {
    Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
    this.$t_1 = hasMoneyFieldValuesWithoutCurrency;
}
Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator.prototype = {
    $t_1: false,
    
    get_hasMoneyFieldValuesWithoutCurrency: function() {
        return this.$t_1;
    },
    
    set_hasMoneyFieldValuesWithoutCurrency: function(value) {
        this.$t_1 = value;
        return value;
    },
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator(this.$A_0, this.$G_0, this.$t_1);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid() && (_Script.isNullOrUndefined(value) || Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(value.toString()))) {
            $v_0.set_isValueValid(!this.$t_1);
            $v_0.set_errorMessage(($v_0.get_isValueValid()) ? null : this.getLocalizedMessage('Error_Message_0x80048cfb'));
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator = function(isRequired, hasUserReadPermission, behavior, minDate) {
    Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
    this.$k_1 = minDate;
    this.$c_1 = behavior;
}
Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator.prototype = {
    $k_1: null,
    
    get_minDate: function() {
        return this.$k_1;
    },
    
    set_minDate: function(value) {
        this.$k_1 = value;
        return value;
    },
    
    $c_1: 0,
    
    get_dateTimeFieldBehavior: function() {
        return this.$c_1;
    },
    
    set_dateTimeFieldBehavior: function(value) {
        this.$c_1 = value;
        return value;
    },
    
    get_errorMessage: function() {
        return String.format(this.getLocalizedMessage('L_Decimal_Error_Message_FormatString_Text'), Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(this.$k_1, this.$c_1));
    },
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator(this.$A_0, this.$G_0, this.$c_1, this.$k_1);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid()) {
            var $v_1 = $v_0.get_isValueValid();
            var $v_2 = !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value) && Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value) && !isNaN((value).getTime());
            if ($v_2) {
                var $v_3 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, 0, this.$c_1, null);
                $v_1 = $v_3 >= this.$k_1;
            }
            else {
                value = null;
            }
            $v_0.set_isValueValid($v_1);
            $v_0.set_validatedValue(value);
            $v_0.set_errorMessage(($v_1) ? null : this.get_errorMessage());
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator = function(isRequired, hasUserReadPermission, minValue, maxValue, precisionValue) {
    Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
    this.$D_1 = minValue;
    this.$C_1 = maxValue;
    this.$R_1 = precisionValue;
}
Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.prototype = {
    $D_1: 0,
    $C_1: 0,
    $R_1: 0,
    
    get_minValue: function() {
        return this.$D_1;
    },
    
    set_minValue: function(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_errorMessage: function() {
        return String.format(this.getLocalizedMessage('L_Decimal_Error_Message_FormatString_Text'), Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatDecimalValue(this.$D_1, this.$R_1), Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatDecimalValue(this.$C_1, this.$R_1));
    },
    
    get_maxValue: function() {
        return this.$C_1;
    },
    
    set_maxValue: function(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_precisionValue: function() {
        return this.$R_1;
    },
    
    set_precisionValue: function(value) {
        this.$R_1 = value;
        return value;
    },
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator(this.$A_0, this.$G_0, this.$D_1, this.$C_1, this.$R_1);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid()) {
            var $v_1 = $v_0.get_isValueValid();
            var $v_2 = !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value);
            if ($v_2) {
                var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().parseDecimalValue(value.toString(), this.$R_1);
                var $v_4 = !_Script.isNullOrUndefined($v_3) && !isNaN($v_3);
                $v_1 = $v_4 && $v_3 >= this.$D_1 && $v_3 <= this.$C_1;
                value = ($v_1) ? $v_3 : value;
            }
            else {
                value = null;
            }
            $v_0.set_isValueValid($v_1);
            $v_0.set_validatedValue(value);
            $v_0.set_errorMessage(($v_1) ? null : this.get_errorMessage());
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator = function(isRequired, hasUserReadPermission) {
    Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
}
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.prototype = {
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator(this.$A_0, this.$G_0);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid()) {
            var $v_1 = true;
            var $v_2 = null;
            var $v_3 = !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value);
            if ($v_3) {
                $v_1 = this.$30_1(value);
                if (!$v_1) {
                    $v_2 = this.getLocalizedMessage('Web._forms.styles.INPUT.eml.htc_20');
                }
            }
            $v_0.set_isValueValid($v_1);
            $v_0.set_validatedValue(value);
            $v_0.set_errorMessage($v_2);
        }
        return $v_0;
    },
    
    $30_1: function($p0) {
        var $v_0 = $p0;
        return Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$1x.test($v_0) || this.$31_1($v_0);
    },
    
    $31_1: function($p0) {
        var $v_0 = $p0.indexOf('\"');
        var $v_1 = $p0.indexOf('\"@', 1);
        if (!$v_0 && $v_1 !== -1 && $v_1 > 1) {
            var $v_2 = $p0.substring(1, $v_1);
            var $v_3 = $p0.replace('\"' + $v_2 + '\"', 'abc');
            if (!Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$20.test($v_2) && Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$1x.test($v_3)) {
                return true;
            }
        }
        return false;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator = function(isRequired, hasUserReadPermission, minValue, maxValue) {
    Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
    this.$D_1 = minValue;
    this.$C_1 = maxValue;
    this.$1e_1 = String.format(this.getLocalizedMessage('L_Integer_Error_Message_FormatString_Text'), Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatIntegerValue(this.$D_1), Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatIntegerValue(this.$C_1));
}
Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator.prototype = {
    $D_1: 0,
    $C_1: 0,
    $1e_1: null,
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator(this.$A_0, this.$G_0, this.$D_1, this.$C_1);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid()) {
            var $v_1 = $v_0.get_isValueValid();
            var $v_2 = !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value);
            if ($v_2) {
                var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().parseIntegerValue(value.toString());
                var $v_4 = !_Script.isNullOrUndefined($v_3) && !isNaN($v_3);
                $v_1 = $v_4 && $v_3 >= this.$D_1 && $v_3 <= this.$C_1;
                value = ($v_1) ? $v_3 : value;
            }
            else {
                value = null;
            }
            $v_0.set_isValueValid($v_1);
            $v_0.set_validatedValue(value);
            $v_0.set_errorMessage(($v_1) ? null : this.$1e_1);
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator = function(isRequired, hasUserReadPermission) {
    this.$A_0 = isRequired;
    this.$G_0 = hasUserReadPermission;
}
Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype = {
    $A_0: false,
    $G_0: true,
    
    get_isRequired: function() {
        return this.$A_0;
    },
    
    set_isRequired: function(value) {
        this.$A_0 = value;
        return value;
    },
    
    get_hasUserReadPermission: function() {
        return this.$G_0;
    },
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator(this.$A_0, this.$G_0);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0;
        if (!_Script.isNullOrUndefined(isDisabled) && isDisabled) {
            $v_0 = true;
        }
        else if (this.$A_0 && !this.$G_0) {
            $v_0 = true;
        }
        else {
            var $v_2;
            if (Microsoft.Crm.Client.Core.Framework.ICollection.isInstanceOfType(value)) {
                $v_2 = (value).get_count() > 0;
            }
            else {
                $v_2 = !_Script.isNullOrUndefined(value) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(value.toString());
            }
            $v_0 = !this.$A_0 || $v_2;
        }
        var $v_1 = ($v_0) ? null : this.getLocalizedMessage('L_IsRequired_Error_Message_Text');
        value = ($v_0) ? value : null;
        return new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult($v_0, value, $v_1);
    },
    
    getLocalizedMessage: function(key) {
        return Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString(key, window);
    }
}


Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator = function(isRequired, hasUserReadPermission, minValue, maxValue, precisionValue, hasEmptyCurrencyField) {
    Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator.initializeBase(this, [ isRequired, hasUserReadPermission, minValue, maxValue, precisionValue ]);
    this.$s_2 = hasEmptyCurrencyField;
}
Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator.prototype = {
    $s_2: false,
    
    get_hasEmptyCurrencyField: function() {
        return this.$s_2;
    },
    
    set_hasEmptyCurrencyField: function(value) {
        this.$s_2 = value;
        return value;
    },
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator(this.$A_0, this.$G_0, this.$D_1, this.$C_1, this.$R_1, this.$s_2);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid() && !_Script.isNullOrUndefined(value) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(value.toString())) {
            $v_0.set_isValueValid(!this.$s_2);
            $v_0.set_errorMessage(($v_0.get_isValueValid()) ? null : this.getLocalizedMessage('Currency_Not_Specified'));
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Models.Validation.UrlValidator = function(isRequired, hasUserReadPermission) {
    Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.initializeBase(this, [ isRequired, hasUserReadPermission ]);
}
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.prototype = {
    
    copy: function() {
        return new Microsoft.Crm.Client.Core.Models.Validation.UrlValidator(this.$A_0, this.$G_0);
    },
    
    validate: function(value, isValueChanging, isDisabled) {
        var $v_0 = Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.prototype.validate.call(this, value, false, isDisabled);
        if (isValueChanging || isDisabled) {
            return $v_0;
        }
        if ($v_0.get_isValueValid()) {
            var $v_1 = true;
            var $v_2 = null;
            var $v_3 = '';
            var $v_4 = !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value);
            if ($v_4) {
                $v_3 = (value).trim();
                $v_1 = this.$32_1($v_3);
                if (!$v_1) {
                    $v_2 = this.getLocalizedMessage('L_Url_Error_Message_Text');
                }
            }
            $v_0.set_isValueValid($v_1);
            $v_0.set_validatedValue(($v_4) ? this.$2J_1($v_3) : '');
            $v_0.set_errorMessage($v_2);
        }
        return $v_0;
    },
    
    $32_1: function($p0) {
        if ('ABOUT:BLANK' === $p0.toUpperCase() || Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0)) {
            return true;
        }
        var $v_0 = this.$2J_1($p0);
        var $v_1 = this.$3E_1($v_0);
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_1)) {
            switch ($v_1) {
                case 'http':
                case 'https':
                case 'ftp':
                case 'ftps':
                case 'onenote':
                case 'tel':
                    return true;
            }
        }
        return false;
    },
    
    $2J_1: function($p0) {
        if (!Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.$2R.test($p0)) {
            return 'https://' + $p0;
        }
        return $p0;
    },
    
    $3E_1: function($p0) {
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0)) {
            return '';
        }
        var $v_0 = null;
        var $v_1 = null;
        var $v_2 = $p0.indexOf('?');
        var $v_3 = $p0.indexOf(':');
        if ($v_3 === -1 || ($v_3 > $v_2 && $v_2 !== -1)) {
            return '';
        }
        var $v_4 = $v_3 + 1;
        while ($p0.charAt($v_4) === '/') {
            $v_4++;
        }
        $v_0 = $p0.substr(0, $v_3).toLowerCase();
        $v_1 = $p0.substr($v_3, $v_4 - $v_3);
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
            switch ($v_0) {
                case 'http':
                case 'https':
                case 'ftp':
                case 'ftps':
                    if ($v_1 !== '://') {
                        $v_0 = '';
                    }
                    break;
            }
        }
        return $v_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.DataApi');

Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveState = function() {}
Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveState.prototype = {
    none: 0, 
    success: 1, 
    deleted: 2, 
    error: 3
}
Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveState.registerEnum('Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveState', false);


Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveType = function() {}
Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveType.prototype = {
    local: 0, 
    remote: 1
}
Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveType.registerEnum('Microsoft.Crm.Client.Core.Storage.DataApi.RetrieveType', false);


Microsoft.Crm.Client.Core.Storage.DataApi.IDataSource = function() {}
Microsoft.Crm.Client.Core.Storage.DataApi.IDataSource.registerInterface('Microsoft.Crm.Client.Core.Storage.DataApi.IDataSource');


Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs = function(eventName, key) {
    Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs.initializeBase(this);
    this.$1g_1 = eventName;
    this.$1q_1 = key;
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs.prototype = {
    $1g_1: null,
    $1q_1: null,
    
    get_eventName: function() {
        return this.$1g_1;
    },
    
    get_key: function() {
        return this.$1q_1;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents = function() {
}


Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1 = function(key, data, retrieveState, store, errorStatus, updateRecord) {
    this.$1b_2 = ((this.$$gta['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1']['T'] === Number || Type.isEnum(this.$$gta['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1']['T'])) ? 0 : (this.$$gta['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1']['T'] === Boolean) ? false : null);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1.$$(this.$$gta['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1']['T']).initializeBase(this, [ 'retrieved', key ]);
    this.$1b_2 = data;
    this.$u_2 = retrieveState;
    this.$w_2 = store;
    this.$1f_2 = errorStatus;
    this.$1w_2 = (_Script.isNullOrUndefined(updateRecord)) ? ((!store) ? false : true) : updateRecord;
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1.$$ = function(T) {
    var $$cn = 'DataRetrievedEventArgs$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Storage.DataApi[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Storage.DataApi[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.' + $$cn, Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs);
        var $$dict_5 = Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Storage.DataApi[$$cn];
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievedEventArgs$1.prototype = {
    $u_2: 0,
    $w_2: 0,
    $1f_2: null,
    $1w_2: false,
    
    get_data: function() {
        return this.$1b_2;
    },
    
    get_retrieveState: function() {
        return this.$u_2;
    },
    
    get_sourceStore: function() {
        return this.$w_2;
    },
    
    get_errorStatus: function() {
        return this.$1f_2;
    },
    
    get_updateRecord: function() {
        return this.$1w_2;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1 = function(key) {
    Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1.$$(this.$$gta['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1']['T']).initializeBase(this, [ 'retrieving', key ]);
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1.$$ = function(T) {
    var $$cn = 'DataRetrievingEventArgs$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Microsoft.Crm.Client.Core.Storage.DataApi[$$cn]) {
        var $$ccr = Microsoft.Crm.Client.Core.Storage.DataApi[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.' + $$cn, Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs);
        var $$dict_5 = Microsoft.Crm.Client.Core.Storage.DataApi.DataRetrievingEventArgs$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Microsoft.Crm.Client.Core.Storage.DataApi[$$cn];
}


Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs = function(retrieveState, store) {
    Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs.initializeBase(this);
    this.$u_1 = retrieveState;
    this.$w_1 = store;
}
Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs.prototype = {
    $u_1: 0,
    $w_1: 0,
    
    get_retrieveState: function() {
        return this.$u_1;
    },
    
    get_sourceStore: function() {
        return this.$w_1;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache = function(dataSource) {
    this.$8_0 = dataSource;
    this.$7_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair))();
    this.$1J_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair))();
    this.$1K_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair))();
    this.$13_0 = {};
}
Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache.prototype = {
    $8_0: null,
    $7_0: null,
    $1J_0: null,
    $1K_0: null,
    $13_0: null,
    
    get_fieldTypeStore: function() {
        return this.$13_0;
    },
    
    getEntityMetadata: function(entityLogicalName) {
        if (this.$7_0.containsKey(entityLogicalName)) {
            return this.$7_0.get_item(entityLogicalName).get_entityMetadata();
        }
        return null;
    },
    
    cacheEntityMetadata: function(entityMetadata) {
        if (!_Script.isNullOrUndefined(entityMetadata)) {
            var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair(entityMetadata, new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection(entityMetadata.get_logicalName()));
            this.$7_0.set_item(entityMetadata.get_logicalName(), $v_0);
            this.$1J_0.set_item(entityMetadata.get_objectTypeCode().toString(), $v_0);
            this.$1K_0.set_item(entityMetadata.get_primaryIdAttribute(), $v_0);
        }
    },
    
    cacheAttributeMetadata: function(entityLogicalName, allAttributes, attributeMetadata) {
        if (!this.$7_0.containsKey(entityLogicalName)) {
            return;
        }
        this.$7_0.get_item(entityLogicalName).get_attributeMetadataCollection().mergeAttributeMetadata(attributeMetadata.toArray(), allAttributes);
    },
    
    getMultipleAttributeMetadata: function(entityLogicalName, attributeNames) {
        if (!this.$7_0.containsKey(entityLogicalName)) {
            return null;
        }
        var $v_0 = this.$7_0.get_item(entityLogicalName).get_attributeMetadataCollection();
        if (_Script.isNullOrUndefined(attributeNames)) {
            if ($v_0.get_allAttributes()) {
                return $v_0.get_attributes();
            }
            return null;
        }
        if (_Script.isNullOrUndefined($v_0.get_attributesByName())) {
            return null;
        }
        var $v_1 = new Array(0);
        for (var $$arr_4 = attributeNames, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if ($v_0.get_attributesByName().containsKey($v_2)) {
                Array.add($v_1, $v_0.get_attributesByName().get_item($v_2));
            }
        }
        return $v_1;
    },
    
    getAttributeMetadata: function(entityLogicalName, attributeName) {
        if (attributeName) {
            var $v_0 = this.getMultipleAttributeMetadata(entityLogicalName, [ attributeName ]);
            if ($v_0 && $v_0.length > 0) {
                return $v_0[0];
            }
        }
        return null;
    },
    
    cacheMultipleEntityMetadata: function(entityMetadata) {
        for (var $v_0 = 0, $v_1 = entityMetadata.get_length(); $v_0 < $v_1; $v_0++) {
            this.cacheEntityMetadata(entityMetadata.get_item($v_0));
        }
    },
    
    flushEntityMetadata: function(entityLogicalNames) {
        for (var $$arr_1 = entityLogicalNames, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (this.$7_0.containsKey($v_0)) {
                var $v_1 = this.$7_0.get_item($v_0).get_entityMetadata().get_objectTypeCode();
                var $v_2 = this.$7_0.get_item($v_0).get_entityMetadata().get_primaryIdAttribute();
                this.$7_0.remove($v_0);
                this.$1J_0.remove($v_1.toString());
                this.$1K_0.remove($v_2);
                this.$13_0[$v_0] = {};
            }
        }
    },
    
    flushAllAttributeMetadata: function() {
        var $$dict_1 = this.$7_0.toDictionary();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            ($v_0.value).get_attributeMetadataCollection().purgeAttributeMetadata();
            this.$13_0 = {};
        }
    },
    
    getAttributeMetadataCacheCount: function(entityLogicalName) {
        if (!this.$7_0.containsKey(entityLogicalName)) {
            return -1;
        }
        return this.$7_0.get_item(entityLogicalName).get_attributeMetadataCollection().get_count();
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.DataSource = function(userContext) {
    this.$B_0 = userContext;
    this.$I_0 = new Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache(this);
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.get_defaultInstance = function() {
    return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4;
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.set_defaultInstance = function(value) {
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4 = value;
    return value;
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.initialize = function() {
    if (!_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J) && Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.state() !== 'rejected') {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.promise();
    }
    var $v_0 = new Mscrm.Performance.PerformanceStopwatch('DataSource.Initialize');
    $v_0.start();
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
    Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.always(function() {
        $v_0.stop();
    });
    var $v_1 = true;
    $v_1 = $v_1 && !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance());
    $v_1 = $v_1 && !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z);
    $v_1 = $v_1 && !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4);
    $v_1 = $v_1 && !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0);
    $v_1 = $v_1 && !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$I_0);
    if ($v_1) {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.resolve(true);
    }
    Xrm.Internal.messages.retrieveWebClientUserContext().done(function($p1_0) {
        if (!$p1_0.$1B_0) {
            Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p1_0.get_errorMessage()));
            return;
        }
        var $v_2 = $p1_0.$1D_1;
        var $v_3 = $v_2.get_externalContext()['timezonedefinitionbycode'];
        Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z = new Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter($v_3);
        Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.set_instance(new Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter($v_2.get_timeZoneUtcOffsetMinutes(), $v_2.get_timeZoneAdjusters()));
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4 = new Microsoft.Crm.Client.Core.Storage.DataApi.DataSource($v_2);
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.resolve(true);
    }).fail(function($p1_0) {
        Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p1_0.get_localizedMessage() || $p1_0.get_message()));
    });
    return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J.promise();
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$2k = function($p0) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p0.get_message());
    if (!_Script.isNullOrUndefined($p0.$5_1)) {
        $v_0.set_errorCode($p0.$5_1.get_errorCode());
        $v_0.set_errorFault($p0.$5_1);
    }
    if ($p0.$S_0 && $p0.$S_0.status === 401) {
        $v_0.set_errorCode(-2147093995);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$1l = function($p0, $p1, $p2) {
    return Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromErrorData(new Microsoft.Crm.Client.Core.Framework.ErrorData($p1, '[CrmServerDataSource - ' + $p0 + '] ' + $p2));
}
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.prototype = {
    $B_0: null,
    
    get_userContext: function() {
        return this.$B_0;
    },
    
    set_userContext: function(value) {
        this.$B_0 = value;
        return value;
    },
    
    $I_0: null,
    
    get_metadataCache: function() {
        return this.$I_0;
    },
    
    set_metadataCache: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    retrieveMultipleAttributeMetadata: function(query, context) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata), Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1;
        var $v_2;
        var $$t_P, $$t_Q, $$t_R;
        var $v_3 = (($$t_R = this.$3O_0(query, ($$t_P = {'val': $v_1}), ($$t_Q = {'val': $v_2}))), $v_1 = $$t_P.val, $v_2 = $$t_Q.val, $$t_R);
        if ($v_3) {
            return $v_0.resolve(new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata))($v_1));
        }
        var $v_4 = {};
        for (var $$arr_7 = $v_1, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_6 = $$arr_7[$$idx_9];
            $v_4[$v_6.get_logicalName()] = $v_6;
        }
        var $v_5 = new Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery(query.get_entityLogicalName(), $v_2);
        var $$t_S = this, $$t_T = this;
        Xrm.Internal.messages.retrieveMultipleAttributeMetadata($v_5, this.$B_0.get_UserSettings().get_languageId()).then(function($p1_0) {
            if ($p1_0.$L_1.get_length() > 0) {
                var $v_7 = $p1_0.$L_1.toArray();
                $$t_S.$I_0.cacheAttributeMetadata(query.get_entityLogicalName(), _Script.isNullOrUndefined(query.get_attributeNames()), new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata))($v_7));
                for (var $$arr_E = $v_7, $$len_F = $$arr_E.length, $$idx_G = 0; $$idx_G < $$len_F; ++$$idx_G) {
                    var $v_9 = $$arr_E[$$idx_G];
                    $v_4[$v_9.get_logicalName()] = $v_9;
                }
                var $v_8;
                if (_Script.isNullOrUndefined(query.get_attributeNames())) {
                    $v_8 = $v_7;
                }
                else {
                    $v_8 = new Array(0);
                    for (var $$arr_J = query.get_attributeNames(), $$len_K = $$arr_J.length, $$idx_L = 0; $$idx_L < $$len_K; ++$$idx_L) {
                        var $v_A = $$arr_J[$$idx_L];
                        $v_8.push($v_4[$v_A]);
                    }
                }
                $v_0.resolve(new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata))($v_8));
            }
            else {
                $v_0.reject(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$1l('RetrieveMultipleAttributeMetadata', 0, 'Entity ' + query.get_entityLogicalName() + ' has none of the AttributeMetadata requested: ' + query.get_attributeNames()));
            }
        }, function($p1_0) {
            var $v_B = Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p1_0.get_message());
            $v_0.reject(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$2k($p1_0));
        });
        return $v_0.promise();
    },
    
    retrieveRecordRelatedEntities: function(entityMetadata, source, identifier, columnSet, record) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        var $v_1 = new Array(0);
        var $$t_A = this;
        this.$2X_0(entityMetadata, columnSet, null, function($p1_0) {
            if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.hasAccessRights(identifier.LogicalName, $$t_A.$I_0)) {
                $v_1.push(new Xrm.Gen.RetrievePrincipalAccessRequest(identifier, new Xrm.Objects.EntityReference('systemuser', Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.get_userId())));
            }
            if (!$p1_0) {
                $v_1.push(new Xrm.Gen.RetrieveMultipleRequest($$t_A.$2y_0(identifier)));
            }
            if (!$v_1.length) {
                $v_0.resolve(true);
                return;
            }
            Xrm.Internal.messages.execute(new Xrm.Gen.ExecuteMultipleRequest($v_1, new Xrm.Gen.ExecuteMultipleSettings(false, true))).then(function($p2_0) {
                $$t_A.$2Z_0($p2_0, source, $v_0, record);
            }, function($p2_0) {
                $v_0.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage($p2_0.get_localizedMessage() || $p2_0.get_message()));
            });
        });
        return $v_0.promise();
    },
    
    $2Z_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p0;
        if ($v_0.isFaulted) {
            var $v_1 = null;
            for (var $$arr_6 = $v_0.responses, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                var $v_2 = $$arr_6[$$idx_8];
                if (!_Script.isNullOrUndefined($v_2) && !_Script.isNullOrUndefined($v_2.get_fault())) {
                    var $v_3 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$1l($p1, $v_2.get_fault().get_errorCode(), 'ExecuteMultiple faulted with message: ' + $v_2.get_fault().get_message());
                    if (_Script.isNullOrUndefined($v_1)) {
                        $v_1 = $v_3;
                        break;
                    }
                }
            }
            if (!_Script.isNullOrUndefined($v_1)) {
                $p2.reject($v_1);
            }
            else {
                $p2.reject(Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$1l($p1, 0, 'ExecuteMultiple faulted with unknown fault'));
            }
        }
        else {
            var $v_4 = null;
            var $v_5 = null;
            for (var $$arr_D = $v_0.responses, $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
                var $v_6 = $$arr_D[$$idx_F];
                if ($v_6.get_response().name === 'RetrievePrincipalAccess') {
                    $v_4 = $v_6.get_response();
                }
                if ($v_6.get_response().name === 'RetrieveMultiple') {
                    $v_5 = $v_6.get_response();
                }
            }
            if (!_Script.isNullOrUndefined($v_4)) {
                $p3.set_accessRights($v_4.accessRights);
            }
            if (!_Script.isNullOrUndefined($v_5)) {
                $p3.set_userSharedAttributePrivileges(this.$2x_0($v_5.entityCollection));
            }
            $p2.resolve(true);
        }
    },
    
    $2X_0: function($p0, $p1, $p2, $p3) {
        if ($p0.get_hasSecuredAttributes()) {
            var $v_0 = null;
            if (Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType($p1)) {
                $v_0 = ($p1).get_columns();
            }
            var $v_1 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$I_0.getMultipleAttributeMetadata($p0.get_logicalName(), $v_0);
            if (_Script.isNullOrUndefined($v_1) || $v_1.length !== $v_0.length) {
                var $$t_8 = this, $$t_9 = this;
                Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.retrieveMultipleAttributeMetadata(new Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery($p0.get_logicalName(), $v_0), $p2).then(function($p1_0) {
                    $p3($$t_8.$21_0($p1_0));
                }, function($p1_0) {
                    $p3(false);
                });
            }
            else {
                $p3(this.$21_0(new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata))($v_1)));
            }
        }
        else {
            $p3(true);
        }
    },
    
    $21_0: function($p0) {
        var $v_0 = true;
        for (var $v_1 = 0; $v_1 < $p0.get_length(); $v_1++) {
            if ($p0.get_item($v_1).get_isSecured()) {
                var $v_2 = Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.get_attributePrivileges().get_item($p0.get_item($v_1).get_id().toString());
                if (_Script.isNullOrUndefined($v_2) || !$v_2.get_canRead() || !$v_2.get_canUpdate()) {
                    $v_0 = false;
                    break;
                }
            }
        }
        return $v_0;
    },
    
    $2y_0: function($p0) {
        var $v_0 = '<fetch distinct=\"false\" no-lock=\"false\" mapping=\"logical\"><entity name=\"principalobjectattributeaccess\"><attribute name=\"attributeid\" /><attribute name=\"readaccess\" /><attribute name=\"updateaccess\" /><filter type=\"and\"><condition attribute=\"objectid\" operator=\"eq\" value=\"' + $p0.Id + '\" />' + '<condition attribute=\"principalid\" operator=\"eq-useroruserteams\" /></filter>' + '</entity>' + '</fetch>';
        return $v_0;
    },
    
    $2x_0: function($p0) {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
        if (_Script.isNullOrUndefined($p0)) {
            return $v_0;
        }
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            var $v_2 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege($p0.get_item($v_1).getValue('attributeid'), false, ($p0.get_item($v_1).getValue('readaccess')).get_value() === 1, ($p0.get_item($v_1).getValue('updateaccess')).get_value() === 1);
            $v_0.set_item($v_2.get_attributeId().toString(), $v_2);
        }
        return $v_0;
    },
    
    $3O_0: function($p0, $p1, $p2) {
        var $v_0 = this.$I_0.getMultipleAttributeMetadata($p0.get_entityLogicalName(), $p0.get_attributeNames());
        var $v_1 = _Script.isNullOrUndefined($p0.get_attributeNames());
        var $v_2 = !_Script.isNullOrUndefined($v_0);
        if ($v_1 && $v_2 || !$v_1 && !_Script.isNullOrUndefined($v_0) && $v_0.length === $p0.get_attributeNames().length) {
            $p1.val = $v_0;
            $p2.val = new Array(0);
            return true;
        }
        else if ($v_1 && !$v_2 || _Script.isNullOrUndefined($v_0)) {
            $p1.val = new Array(0);
            $p2.val = $p0.get_attributeNames();
            return false;
        }
        else {
            var $v_3 = {};
            $p1.val = new Array(0);
            $p2.val = new Array(0);
            for (var $$arr_7 = $v_0, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
                var $v_4 = $$arr_7[$$idx_9];
                $v_3[$v_4.get_logicalName()] = $v_4;
            }
            for (var $$arr_B = $p0.get_attributeNames(), $$len_C = $$arr_B.length, $$idx_D = 0; $$idx_D < $$len_C; ++$$idx_D) {
                var $v_5 = $$arr_B[$$idx_D];
                if ((($v_5) in $v_3)) {
                    $p1.val.push($v_3[$v_5]);
                }
                else {
                    $p2.val.push($v_5);
                }
            }
            return false;
        }
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.TimeZoneAdjustersResponse = function(response) {
    var $v_0 = JSON.parse(response);
    this.$1C_0 = new Array(0);
    for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.loadFromJson($v_1);
        this.$1C_0.push($v_2);
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.TimeZoneAdjustersResponse.prototype = {
    $1C_0: null,
    
    get_timeZoneAdjusters: function() {
        return this.$1C_0;
    },
    
    set_timeZoneAdjusters: function(value) {
        this.$1C_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService = function() {}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService.registerInterface('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService');


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService = function(serverUri, authenticationManager, callerOriginProvider) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.initializeBase(this, [ serverUri, authenticationManager, callerOriginProvider ]);
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(serverUri, 'serverUri');
    this.$x_1 = 0;
    this.$H_1 = this.$F_0 + '/XRMServices/2011/Organization.svc/web';
    this.$1I_1 = this.$F_0 + '/AppWebServices/ApplicationMetadataService.asmx/';
    this.$m_1 = this.$F_0 + '/AppWebServices/ProcessControl.asmx/';
    this.$1L_1 = this.$F_0 + '/api/search/indexes/default/Entities';
    this.$1N_1 = this.$F_0 + '/Tools/Diagnostics/diag.aspx/GetMetrics';
    this.$1m_1 = this.$F_0 + '/AppWebServices/EmailTemplateService.asmx';
    this.$1h_1 = this.$F_0 + '/Handlers/GenerateAccessUrlHandler.ashx';
    this.$1n_1 = this.$F_0 + '/AppWebServices/CustomerService.asmx';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2L = function() {
    return '<d:string>LogicalName</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1d = function() {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2L() + ((Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2F()) ? '' : '<d:string>Attributes</d:string>') + '<d:string>DisplayCollectionName</d:string>' + '<d:string>DisplayName</d:string>' + '<d:string>IsActivity</d:string>' + '<d:string>IsActivityParty</d:string>' + '<d:string>IsChildEntity</d:string>' + '<d:string>IsConnectionsEnabled</d:string>' + '<d:string>IsCustomEntity</d:string>' + '<d:string>IsCustomizable</d:string>' + '<d:string>IsEnabledForCharts</d:string>' + '<d:string>IsImportable</d:string>' + '<d:string>IsMailMergeEnabled</d:string>' + '<d:string>IsReadOnlyInMobileClient</d:string>' + '<d:string>IsVisibleInMobileClient</d:string>' + '<d:string>IsOfflineInMobileClient</d:string>' + '<d:string>IsOptimisticConcurrencyEnabled</d:string>' + '<d:string>IsValidForAdvancedFind</d:string>' + '<d:string>ManyToOneRelationships</d:string>' + '<d:string>OneToManyRelationships</d:string>' + '<d:string>ObjectTypeCode</d:string>' + '<d:string>PrimaryIdAttribute</d:string>' + '<d:string>IsStateModelAware</d:string>' + '<d:string>EnforceStateTransitions</d:string>' + '<d:string>PrimaryNameAttribute</d:string>' + '<d:string>Privileges</d:string>' + '<d:string>IsValidForQueue</d:string>' + '<d:string>ActivityTypeMask</d:string>' + '<d:string>OwnershipType</d:string>' + '<d:string>IsBusinessProcessEnabled</d:string>' + '<d:string>IsDocumentManagementEnabled</d:string>' + '<d:string>EntityColor</d:string>' + '<d:string>IsInteractionCentricEnabled</d:string>' + '<d:string>IsQuickCreateEnabled</d:string>' + '<d:string>IsKnowledgeManagementEnabled</d:string>' + '<d:string>IsDocumentRecommendationsEnabled</d:string>' + '<d:string>IsIntersect</d:string>' + '<d:string>UsesBusinessDataLabelTable</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1z = function() {
    return '<d:string>AttributeType</d:string><d:string>DefaultFormValue</d:string><d:string>DefaultValue</d:string><d:string>DisplayName</d:string><d:string>EntityLogicalName</d:string><d:string>Format</d:string><d:string>FormatName</d:string><d:string>DateTimeBehavior</d:string><d:string>ImeMode</d:string><d:string>IsBaseCurrency</d:string><d:string>IsSecured</d:string><d:string>IsValidForCreate</d:string><d:string>IsValidForRead</d:string><d:string>IsValidForUpdate</d:string><d:string>IsSortableEnabled</d:string><d:string>InheritsFrom</d:string><d:string>LogicalName</d:string><d:string>MaxLength</d:string><d:string>MaxValue</d:string><d:string>MinValue</d:string><d:string>OptionSet</d:string><d:string>Precision</d:string><d:string>PrecisionSource</d:string><d:string>RequiredLevel</d:string><d:string>SourceType</d:string><d:string>Targets</d:string><d:string>AttributeOf</d:string><d:string>IsLocalizable</d:string>';
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2F = function() {
    return false;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.prototype = {
    $H_1: null,
    $1I_1: null,
    $m_1: null,
    $1L_1: null,
    $1N_1: null,
    $1m_1: null,
    $1h_1: null,
    $1n_1: null,
    $x_1: 0,
    $v_1: '',
    
    get_name: function() {
        return 'CrmSoapService';
    },
    
    get_performanceStopwatch: function() {
        return 'CrmSoapServiceCall';
    },
    
    get_doAuthentication: function() {
        return true;
    },
    
    get_organizationWebEndPoint: function() {
        return this.$H_1;
    },
    
    get_applicationMetadataEndPoint: function() {
        return this.$1I_1;
    },
    
    get_userLanguageCode: function() {
        return this.$x_1;
    },
    
    set_userLanguageCode: function(value) {
        this.$x_1 = value;
        return value;
    },
    
    get_clientVersion: function() {
        return this.$v_1;
    },
    
    retrieveWebClientUserContext: function() {
        var $v_0 = this.$1I_1 + 'RetrieveWebClientUserContext';
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_4 = this, $$t_5 = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, '', this.createJsonRequestOptions($v_0))).then(function($p1_0) {
            if (!_Script.isNullOrUndefined($p1_0) && !_Script.isNullOrUndefined($p1_0['d'])) {
                ($p1_0['d'])['FullServerVersion'] = $$t_4.$v_1;
            }
            $v_1.resolve($$t_4.$2b_1($p1_0, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    execute: function(request, context, doAuthentication) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1;
        var $v_2;
        var $v_3;
        if (request.name === 'ScriptError') {
            $v_3 = this.$F_0 + '/AppWebServices/ScriptError.asmx';
            $v_1 = Xrm.Sdk.ScriptErrorRequestExtensions.requestBody((request));
            $v_2 = 'http://schemas.microsoft.com/crm/2009/WebServices/SendScriptErrorReport';
        }
        else {
            $v_3 = this.$H_1;
            $v_1 = this.createCrmExecuteRequestBody(request.name, request.name + 'Request', Xrm.Soap.Serializer.parametersToCrmSoap(request), 'b', request.xmlNamespace);
            $v_2 = 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute';
        }
        var $v_4 = null;
        if (request.name === 'ExecuteMultiple') {
            $v_4 = new Array(0);
            for (var $$arr_8 = (request).requests, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                var $v_6 = $$arr_8[$$idx_A];
                Array.add($v_4, $v_6.name);
            }
        }
        var $v_5 = this.createSoapRequestOptions($v_3, $v_2);
        if (!_Script.isNullOrUndefined(doAuthentication)) {
            $v_5.doAuthentication = doAuthentication;
        }
        var $$t_F = this, $$t_G = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create(request.name, $v_1, $v_5, context, $v_4)).then(function($p1_0) {
            $v_0.resolve(Xrm.Soap.ResponseSerializer.loadFromCrmSoap(request.name, $p1_0, request));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    executeExternalSearch: function(requestData, context) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, String);
        requestData += '&api-version=' + this.$v_1;
        var $$t_5 = this, $$t_6 = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create(this.$1L_1, requestData, this.createJsonRequestOptions(this.$1L_1, 'GET'), context)).then(function($p1_0) {
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0.get_message());
        });
        return $v_0.promise();
    },
    
    retrieveUserLocalFacets: function(requestData, context) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = this.$1n_1;
        var $v_2 = 'http://schemas.microsoft.com/crm/2009/WebServices/GetLocalFacets';
        var $v_3 = this.createSoapRequestBody('<GetLocalFacets xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\"><entityName>' + requestData + '</entityName></GetLocalFacets>');
        var $v_4 = this.createSoapRequestOptions($v_1, $v_2);
        var $$t_A = this, $$t_B = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('GetLocalFacets', $v_3, $v_4)).then(function($p1_0) {
            var $v_5 = $p1_0.childNodes().get_item(0).childNodes().get_item(0).childNodes().get_item(0).childNodes().get_item(0);
            $v_0.resolve({ Value: $v_5.get_innerText() });
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    executeXml: function(requestName, requestParameters, context, doAuthentication) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = this.$H_1;
        var $v_2 = this.createCrmExecuteRequestBody(requestName, requestName + 'Request', requestParameters, 'b', 'http://schemas.microsoft.com/crm/2011/Contracts');
        var $v_3 = 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute';
        var $v_4 = null;
        var $v_5 = this.createSoapRequestOptions($v_1, $v_3);
        if (!_Script.isNullOrUndefined(doAuthentication)) {
            $v_5.doAuthentication = doAuthentication;
        }
        var $$t_F = this, $$t_G = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create(requestName, $v_2, $v_5, context, $v_4)).then(function($p1_0) {
            var $v_6 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument($v_2);
            var $v_7 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_6);
            Xrm.Soap.Serializer.addCrmSoapNamespaces($v_7);
            var $v_8 = Xrm.Soap.Serializer.loadFromCrmSoapByName($v_7, requestName);
            $v_0.resolve(Xrm.Soap.ResponseSerializer.loadFromCrmSoap(requestName, $p1_0, $v_8));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    retrieve: function(identifier, columnSet, relatedEntitiesQuery, context) {
        var $v_0 = 'Retrieve';
        var $v_1 = this.createCrmExecuteRequestBody($v_0, $v_0 + 'Request', Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', identifier, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ColumnSet', columnSet, -1, 'a:ColumnSet') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RelatedEntitiesQuery', relatedEntitiesQuery, -1, 'a:RelationshipQueryCollection'));
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_9 = this, $$t_A = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute'), context)).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse($p1_0, columnSet, relatedEntitiesQuery));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    create: function(entity, suppressDuplicateDetection, context) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Xrm.Gen.CreateResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.execute(new Xrm.Gen.CreateRequest(entity, suppressDuplicateDetection)).then(function($p1_0) {
            entity.resetChanges();
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    update: function(entity, suppressDuplicateDetection, context) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Xrm.Sdk.Response, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_6 = this, $$t_7 = this;
        this.execute(new Xrm.Gen.UpdateRequest(entity, suppressDuplicateDetection)).then(function($p1_0) {
            entity.resetChanges();
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    deleteEntity: function(identifier, context) {
        var $v_0 = 'Delete';
        var $v_1 = this.$2a_1($v_0, '<entityName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(identifier.LogicalName) + '</entityName>' + '<id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(identifier.Id.toString()) + '</id>');
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_7 = this, $$t_8 = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Delete'), context)).then(function($p1_0) {
            $v_2.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    retrieveMetadataChanges: function(clientVersionStamp, languageCode) {
        var $v_0 = this.$2D_1(clientVersionStamp, null, languageCode);
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_2 = this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute');
        $v_2.dataType = 'text';
        var $$t_7 = this, $$t_8 = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('RetrieveMetadataChanges', $v_0, $v_2)).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveMetadataChangesByEntity: function(clientVersionStamp, entityLogicalNames, languageCode) {
        var $v_0 = this.$2D_1(clientVersionStamp, entityLogicalNames, languageCode);
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_2 = this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute');
        $v_2.dataType = 'text';
        var $$t_8 = this, $$t_9 = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('RetrieveMetadataChanges', $v_0, $v_2)).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveMultipleEntityMetadata: function(languageCode, columnSet, entities, context) {
        var $v_0;
        if (_Script.isNullOrUndefined(columnSet) || Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(columnSet)) {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1d();
        }
        else {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2L();
            for (var $$arr_5 = (columnSet).get_columns(), $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
                var $v_4 = $$arr_5[$$idx_7];
                if ($v_4.toLowerCase() === 'logicalname') {
                    continue;
                }
                $v_0 += '<d:string>' + $v_4 + '</d:string>';
            }
        }
        var $v_1 = '';
        if (_Script.isNullOrUndefined(entities) || !entities.length) {
            $v_1 += this.getCriteriaForEntityMetadata();
        }
        else {
            $v_1 += '<c:Criteria><c:Conditions>';
            for (var $$arr_A = entities, $$len_B = $$arr_A.length, $$idx_C = 0; $$idx_C < $$len_B; ++$$idx_C) {
                var $v_5 = $$arr_A[$$idx_C];
                $v_1 += '<c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_5) + '</c:Value>' + '</c:MetadataConditionExpression>';
            }
            $v_1 += '</c:Conditions><c:FilterOperator>Or</c:FilterOperator><c:Filters /></c:Criteria>';
        }
        var $v_2 = this.createCrmExecuteRequestBody('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\">' + $v_1 + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + $v_0 + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery i:nil=\"true\" />' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>');
        var $v_3 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_I = this, $$t_J = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('RetrieveMetadataChanges', $v_2, this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute'), context)).then(function($p1_0) {
            $v_3.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_3.reject($p1_0);
        });
        return $v_3.promise();
    },
    
    getCriteriaForEntityMetadata: function() {
        var $v_0 = '';
        return '<c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>IsVisibleInMobileClient</c:PropertyName><c:Value i:type=\"d:boolean\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">true</c:Value></c:MetadataConditionExpression>' + ((!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) ? $v_0 : '</c:Conditions>') + '</c:Criteria>';
    },
    
    retrieveEntityMetadata: function(entityLogicalName, languageCode, context) {
        var $v_0 = this.createCrmExecuteRequestBody('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\"><c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityLogicalName) + '</c:Value>' + '</c:MetadataConditionExpression>' + '</c:Conditions>' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1d() + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery i:nil=\"true\" />' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>');
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_7 = this, $$t_8 = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('RetrieveMetadataChanges', $v_0, this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute'), context)).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveMultipleAttributeMetadata: function(query, languageCode, context) {
        var $v_0 = '<a:KeyValuePairOfstringanyType><b:key>Query</b:key><b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\"><c:Criteria><c:Conditions><c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(query.get_entityLogicalName()) + '</c:Value>' + '</c:MetadataConditionExpression>' + '</c:Conditions>' + '<c:FilterOperator>And</c:FilterOperator>' + '<c:Filters />' + '</c:Criteria>' + '<c:Properties>' + '<c:AllProperties>false</c:AllProperties>' + '<c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:string>Attributes</d:string>' + '</c:PropertyNames>' + '</c:Properties>' + '<c:AttributeQuery>' + '<c:Criteria>';
        if (_Script.isNullOrUndefined(query.get_attributeNames())) {
            $v_0 += '<c:Conditions />';
        }
        else {
            $v_0 += '<c:Conditions>';
            for (var $$arr_4 = query.get_attributeNames(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                $v_0 += '<c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_2) + '</c:Value>' + '</c:MetadataConditionExpression>';
            }
            $v_0 += '</c:Conditions>';
        }
        $v_0 += '<c:FilterOperator>Or</c:FilterOperator><c:Filters /></c:Criteria><c:Properties><c:AllProperties>false</c:AllProperties><c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1z() + '</c:PropertyNames>' + '</c:Properties>' + '</c:AttributeQuery>' + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + languageCode + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>';
        $v_0 = this.createCrmExecuteRequestBody('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', $v_0);
        var $v_1 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_B = this, $$t_C = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('RetrieveMetadataChanges', $v_0, this.createSoapRequestOptions(this.$H_1, 'http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute'), context)).then(function($p1_0) {
            $v_1.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse($p1_0));
        }, function($p1_0) {
            $v_1.reject($p1_0);
        });
        return $v_1.promise();
    },
    
    retrieveNavigationEntities: function(currentEntityId, referencedEntityLogicalName, referencingEntityLogicalName, referencingEntityAttributeName, context) {
        var $v_0 = this.$m_1 + 'GetForwardNavigationEntities';
        var $v_1 = JSON.stringify({ currentEntityId: currentEntityId, referencedEntityLogicalName: referencedEntityLogicalName, referencingEntityLogicalName: referencingEntityLogicalName, referencingEntityAttributeName: referencingEntityAttributeName });
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_A = this, $$t_B = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createJsonRequestOptions($v_0), context)).then(function($p1_0) {
            $v_2.resolve($$t_A.$10_1($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    changeProcessAndStage: function(currentEntityId, currentEntityLogicalName, newProcessId, newProcessInstanceId, newStageId, newTraversalPath, context) {
        var $v_0 = this.$m_1 + 'ChangeProcessAndStageMoca';
        var $v_1 = JSON.stringify({ currentEntityId: currentEntityId, currentEntityTypeName: currentEntityLogicalName, newProcessId: newProcessId, newProcessInstanceId: newProcessInstanceId, newStageId: newStageId, traversedPath: newTraversalPath });
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_C = this, $$t_D = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createJsonRequestOptions($v_0), context)).then(function($p1_0) {
            $v_2.resolve($$t_C.$10_1($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    updateBusinessProcessFlowState: function(entityLogicalName, entityId, state, status, bpfInstanceId, context) {
        var $v_0 = this.$m_1 + 'UpdateBusinessProcessFlowState';
        var $v_1 = JSON.stringify({ entityLogicalName: entityLogicalName, entityId: entityId, state: state, status: status, bpfInstanceId: bpfInstanceId });
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_B = this, $$t_C = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createJsonRequestOptions($v_0), context)).then(function($p1_0) {
            $v_2.resolve($$t_B.$10_1($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    createNavigationEntity: function(sourceEntityLogicalName, sourceEntityId, targetEntityLogicalName, targetEntityAttribute, context) {
        var $v_0 = this.$m_1 + 'CreateForwardNavigationEntity';
        var $v_1 = JSON.stringify({ sourceEntityLogicalName: sourceEntityLogicalName, sourceEntityId: sourceEntityId.toString(), targetEntityLogicalName: targetEntityLogicalName, targetEntityAttributeName: targetEntityAttribute });
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_A = this, $$t_B = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createJsonRequestOptions($v_0), context)).then(function($p1_0) {
            $v_2.resolve($$t_A.$10_1($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    retrieveMultipleProcessInstances: function(entityLogicalName, currentEntityId, context) {
        var $v_0 = this.$m_1 + 'RetrieveMultipleProcessInstances';
        var $v_1 = JSON.stringify({ entityLogicalName: entityLogicalName, currentEntityId: currentEntityId });
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_8 = this, $$t_9 = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_0, $v_1, this.createJsonRequestOptions($v_0), context)).then(function($p1_0) {
            $v_2.resolve($$t_8.$10_1($p1_0));
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        return $v_2.promise();
    },
    
    $2D_1: function($p0, $p1, $p2) {
        var $v_0 = '<a:KeyValuePairOfstringanyType><b:key>ClientVersionStamp</b:key>' + ((!_Script.isNullOrUndefined($p0)) ? ('<b:value i:type=\"c:string\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p0) + '</b:value>') : '<b:value i:nil=\"true\" />') + '</a:KeyValuePairOfstringanyType>' + '<a:KeyValuePairOfstringanyType>' + '<b:key>DeletedMetadataFilters</b:key>' + '<b:value i:type=\"c:DeletedMetadataFilters\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\">Entity Attribute Relationship Label OptionSet</b:value>' + '</a:KeyValuePairOfstringanyType>' + '<a:KeyValuePairOfstringanyType>' + '<b:key>Query</b:key>' + '<b:value i:type=\"c:EntityQueryExpression\" xmlns:c=\"http://schemas.microsoft.com/xrm/2011/Metadata/Query\">';
        if (_Script.isNullOrUndefined($p1) || !$p1.length) {
            $v_0 += this.getCriteriaForEntityMetadata();
        }
        else {
            $v_0 += '<c:Criteria><c:Conditions>';
            for (var $$arr_4 = $p1, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                $v_0 += '<c:MetadataConditionExpression><c:ConditionOperator>Equals</c:ConditionOperator><c:PropertyName>LogicalName</c:PropertyName><c:Value i:type=\"d:string\" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_2) + '</c:Value>' + '</c:MetadataConditionExpression>';
            }
            $v_0 += '</c:Conditions><c:FilterOperator>Or</c:FilterOperator><c:Filters /></c:Criteria>';
        }
        var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1d();
        $v_0 += '<c:Properties><c:AllProperties>false</c:AllProperties><c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + $v_1 + '</c:PropertyNames>' + '</c:Properties>' + ((Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$2F()) ? '' : '<c:AttributeQuery><c:Criteria><c:Conditions /><c:FilterOperator>And</c:FilterOperator><c:Filters /></c:Criteria><c:Properties><c:AllProperties>false</c:AllProperties><c:PropertyNames xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.get_$1z() + '</c:PropertyNames>' + '</c:Properties>' + '</c:AttributeQuery>') + '<c:LabelQuery>' + '<c:FilterLanguages xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">' + '<d:int>' + $p2 + '</d:int>' + '</c:FilterLanguages>' + '<c:MissingLabelBehavior>1</c:MissingLabelBehavior>' + '</c:LabelQuery>' + '<c:RelationshipQuery i:nil=\"true\" />' + '</b:value>' + '</a:KeyValuePairOfstringanyType>';
        return this.createCrmExecuteRequestBody('RetrieveMetadataChanges', 'RetrieveMetadataChangesRequest', $v_0);
    },
    
    createCrmExecuteRequestBody: function(requestName, requestType, requestParameters, requestNamespaceAlias, requestNamespace) {
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnAssert((_Script.isNullOrUndefined(requestNamespaceAlias) && _Script.isNullOrUndefined(requestNamespace)) || (!_Script.isNullOrUndefined(requestNamespaceAlias) && !_Script.isNullOrUndefined(requestNamespace)), 'The namespace alias and namespace need to be set together');
        var $v_0 = '';
        if (_Script.isNullOrUndefined(requestNamespaceAlias)) {
            requestNamespaceAlias = 'a';
        }
        if (requestName === 'RetrieveRecordWall') {
            $v_0 = '<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\"><request i:type=\"a:OrganizationRequest\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">';
        }
        else {
            $v_0 = '<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><request i:type=\"' + requestNamespaceAlias + ':' + requestType + '\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\"';
            if (!_Script.isNullOrUndefined(requestNamespace)) {
                $v_0 += ' xmlns:' + requestNamespaceAlias + '=\"' + requestNamespace + '\"';
            }
            $v_0 += '>';
        }
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(requestParameters)) {
            $v_0 += '<a:Parameters i:nil=\"true\" />';
        }
        else {
            $v_0 += '<a:Parameters xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">' + requestParameters + '</a:Parameters>';
        }
        $v_0 += '<a:RequestId i:nil=\"true\" /><a:RequestName>' + requestName + '</a:RequestName>' + '</request>' + '</Execute>';
        return this.createSoapRequestBody($v_0);
    },
    
    $2a_1: function($p0, $p1) {
        var $v_0 = '<' + $p0 + ' xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\">' + $p1 + '</' + $p0 + '>';
        return this.createSoapRequestBody($v_0);
    },
    
    getSoapHeaders: function() {
        var $v_0 = this.$2n_1();
        var $v_1 = this.$2w_1();
        var $v_2 = this.$2j_1();
        return $v_0 + $v_1 + $v_2;
    },
    
    $2n_1: function() {
        if (this.$x_1 > 0) {
            return '<LanguageCodeOverride xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + this.$x_1 + '</LanguageCodeOverride>';
        }
        return '';
    },
    
    $2w_1: function() {
        return '<SdkClientVersion xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + this.$v_1 + '</SdkClientVersion>';
    },
    
    $2j_1: function() {
        var $v_0 = (!_Script.isNullOrUndefined(this.callerOriginProvider)) ? this.callerOriginProvider.get_uniqueId() : '';
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
            return '<CrmMobileClientUniqueId xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0) + '</CrmMobileClientUniqueId>';
        }
        return '';
    },
    
    createErrorResponse: function(request, textStatus, error, urlString) {
        return this.createErrorResponseWithSource(request, textStatus, error, '', urlString);
    },
    
    createErrorResponseWithSource: function(request, textStatus, error, source, urlString) {
        return new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(request, textStatus, error, source, urlString);
    },
    
    createErrorResponseFromHtml: function(responseString, source) {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.createFromHtml(responseString, source);
        $v_0.$d_0 = source;
        return $v_0;
    },
    
    handleServiceError: function(requestData, deferred, request, textStatus, error, urlString) {
        var $v_0 = this.createRequestSource(requestData);
        if (!_Script.isNullOrUndefined(request.responseText) && request.responseText.startsWith('{\"d\":{')) {
            deferred.resolve(this.createResponseData(null, request.responseText));
        }
        else {
            deferred.reject(this.createErrorResponseWithSource(request, textStatus, error.toString(), $v_0, urlString));
        }
    },
    
    getMetrics: function(requestId) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = JSON.stringify({ requestId: requestId });
        var $$t_8 = this, $$t_9 = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create(this.$1N_1, $v_1, this.createJsonRequestOptions(this.$1N_1, 'POST'))).then(function($p1_0) {
            var $v_2;
            var $v_3 = null;
            var $v_4 = new Array(0);
            if (_Script.isNullOrUndefined($p1_0) || _Script.isNullOrUndefined($p1_0['d'])) {
                $v_2 = false;
                $v_4.push(new Microsoft.Crm.Client.Core.Framework.ErrorData(0, 'JSON response is null or undefined.'));
            }
            else {
                $v_3 = $p1_0['d'];
                $v_2 = true;
            }
            $v_0.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($v_2, $v_3, $v_4));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    resolveEmails: function(emails) {
        var $v_0 = new Array(0);
        for (var $v_4 = 0; $v_4 < emails.length; $v_4++) {
            if (Array.indexOf($v_0, emails[$v_4], 0) < 0) {
                Array.add($v_0, emails[$v_4]);
            }
        }
        var $v_1 = this.$F_0 + '/AppWebServices/MailAppInitialDataService.asmx/' + 'ResolveRecipients';
        var $v_2 = JSON.stringify({ emails: $v_0 });
        var $v_3 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $$t_E = this, $$t_F = this;
        this.executeJsonRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_1, $v_2, this.createJsonRequestOptions($v_1, 'POST'))).then(function($p1_0) {
            var $v_7 = $p1_0['d'];
            if (_Script.isNullOrUndefined($p1_0) || _Script.isNullOrUndefined($v_7)) {
                var $v_8 = new Array(0);
                $v_8.push(new Microsoft.Crm.Client.Core.Framework.ErrorData(0, 'JSON response is null or undefined.'));
                $v_3.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse(false, null, $v_8));
                return;
            }
            $v_3.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse(true, $v_7, null));
        }, function($p1_0) {
            $v_3.reject($p1_0);
        });
        return $v_3.promise();
    },
    
    canRetryServerError: function(response) {
        var $v_0 = response;
        if (!_Script.isNullOrUndefined($v_0) && !_Script.isNullOrUndefined($v_0.$5_1)) {
            var $v_1 = $v_0.$5_1.get_errorCode();
            switch ($v_1) {
                case -2147180543:
                    return true;
                default:
                    return false;
            }
        }
        else {
            return false;
        }
    },
    
    addHeaders: function(headers, requestData) {
        headers['ClientAppVersion'] = this.$v_1;
        var $v_0 = 'WebClient';
        headers['ClientAppName'] = $v_0;
    },
    
    createResponseData: function(xhr, data) {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.prototype.createResponseData.call(this, xhr, data);
        return $v_0;
    },
    
    $2b_1: function($p0, $p1) {
        var $v_0;
        var $v_1 = null;
        var $v_2 = new Array(0);
        if (_Script.isNullOrUndefined($p0) || _Script.isNullOrUndefined($p0['d'])) {
            $v_0 = false;
            $v_2.push(new Microsoft.Crm.Client.Core.Framework.ErrorData(0, 'JSON response is null or undefined.'));
        }
        else {
            $v_1 = $p0['d'];
            var $v_3 = $v_1['Status'];
            $v_0 = $v_3['Success'];
            $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.createErrorData($v_3['Errors']);
        }
        if (!_Script.isNullOrUndefined($p1)) {
            if ($p1 === Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse) {
                return new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse($v_0, $v_1, $v_2);
            }
        }
        return new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($v_0, $v_1, $v_2);
    },
    
    $10_1: function($p0) {
        var $v_0;
        var $v_1 = new Array(0);
        var $v_2 = null;
        if (_Script.isNullOrUndefined($p0) || _Script.isNullOrUndefined($p0['d'])) {
            $v_0 = false;
            $v_1[0] = new Microsoft.Crm.Client.Core.Framework.ErrorData(0);
            $v_1[0].set_message('JSON response is null or undefined.');
        }
        else {
            var $v_3 = $p0['d'];
            var $v_4 = (String.isInstanceOfType($v_3)) ? JSON.parse($v_3) : $v_3;
            var $v_5 = 'Success';
            $v_0 = $v_4[$v_5];
            if (!$v_0 && (($v_5) in $v_4)) {
                var $v_6 = $v_4['ErrorMessage'];
                var $v_7 = $v_4['ErrorCode'];
                $v_1[0] = new Microsoft.Crm.Client.Core.Framework.ErrorData($v_7);
                $v_1[0].set_message($v_6);
            }
            else {
                $v_2 = $v_4;
                $v_0 = true;
            }
        }
        return new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse($v_0, $v_2, $v_1);
    },
    
    getInstantiatedEmailTemplate: function(templateId, objectId, objectTypeCode) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = 'GetInstantiatedEmailTemplate';
        var $v_2 = '<templateId>' + templateId + '</templateId>' + '<objectId>' + objectId + '</objectId>' + '<objectTypeCode>' + objectTypeCode + '</objectTypeCode>';
        var $v_3 = '<' + $v_1 + ' xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\">' + $v_2 + '</' + $v_1 + '>';
        var $v_4 = this.createSoapRequestBody($v_3);
        var $v_5 = this.createSoapRequestOptions(this.$1m_1, 'http://schemas.microsoft.com/crm/2009/WebServices/GetInstantiatedEmailTemplate');
        var $$t_B = this, $$t_C = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create($v_1, $v_4, $v_5)).then(function($p1_0) {
            $v_0.resolve(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse($p1_0));
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    generateAttachmentUrl: function(attachmentId, attachmentType) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(String, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
        var $v_1 = this.$1h_1 + '?fileId=' + attachmentId + '&entityType=' + attachmentType;
        var $v_2 = Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.create($v_1, 'GET', '', '', $v_1, this.get_doAuthentication());
        var $$t_7 = this, $$t_8 = this;
        this.executeSoapRequest(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create('GenerateAttachmentUrl', '', $v_2)).then(function($p1_0) {
            $v_0.resolve($p1_0.get_domParserElement().toString());
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings = function(organizationSettings) {
    this.$1t_0 = organizationSettings;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings.prototype = {
    $1t_0: null,
    
    getWebServiceCallRetryPolicy: function(webServiceUrl) {
        return this.$1t_0.getWebServiceCallRetryPolicy(webServiceUrl);
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Models.Constants');

Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes = function() {
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Models.Formatters');

Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter = function(formModel) {
    Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter.initializeBase(this);
    this.$9_0 = formModel;
}
Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter.prototype = {
    
    formatDateTimeFieldValue: function(fieldName, rawValue) {
        var $v_0 = this.$9_0;
        var $v_1 = this.$9_0.getEffectiveAttributeFormat(fieldName);
        var $v_2 = this.$9_0.getAttributeBehavior(fieldName);
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(rawValue) && ((fieldName) in $v_0.$o_2)) {
            var $v_6 = $v_0.$o_2[fieldName];
            var $v_7 = new Date(rawValue.toString());
            if ($v_6) {
                $v_7.setDate($v_7.getDate() - 1);
            }
            rawValue = $v_7;
        }
        switch ($v_1) {
            case 'dateandtime':
                if (_Script.isNullOrUndefined($v_0.$0_2)) {
                    return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(rawValue, $v_2);
                }
                if (!$v_0.$0_2.hasField('isalldayevent')) {
                    return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(rawValue, $v_2);
                }
                var $v_3 = $v_0.$0_2.getValue('isalldayevent');
                var $v_4 = 1;
                if (!_Script.isNullOrUndefined($v_3) && $v_3.get_value() === $v_4) {
                    return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateValue(rawValue, $v_2);
                }
                else {
                    return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(rawValue, $v_2);
                }
            case 'dateonly':
                return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateValue(rawValue, $v_2);
            default:
                var $v_5 = Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateTimeValue(rawValue, $v_2);
                if (!_Script.isNullOrUndefined($v_0.$0_2) && !_Script.isNullOrUndefined($v_0.$0_2.get_formattedValues()) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_0.$0_2.get_formattedValues()[fieldName]) && $v_0.$0_2.get_formattedValues()[fieldName] === $v_5) {
                    return $v_0.$0_2.get_formattedValues()[fieldName];
                }
                return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatShortDateValue(rawValue, $v_2);
        }
    },
    
    formatTimeZoneFields: function() {
        var $v_0 = this.$9_0;
        for (var $$arr_1 = $v_0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if ($v_0.$0_2.get_fieldTypes()[$v_1] === 5 && $v_0.GetEffectiveAttributeFormat($v_1) === 'timezone') {
                $v_0.reformatValue($v_0.$0_2, $v_1);
            }
        }
    },
    
    formatDurationFields: function() {
        var $v_0 = this.$9_0;
        for (var $$arr_1 = $v_0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if ($v_0.$0_2.get_fieldTypes()[$v_1] === 5 && $v_0.GetEffectiveAttributeFormat($v_1) === 'duration') {
                $v_0.reformatValue($v_0.$0_2, $v_1);
            }
        }
    },
    
    formatLanguageFields: function() {
        var $v_0 = this.$9_0;
        for (var $$arr_1 = $v_0.get_fieldNames(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if ($v_0.$0_2.get_fieldTypes()[$v_1] === 5 && $v_0.GetEffectiveAttributeFormat($v_1) === 'language') {
                $v_0.reformatValue($v_0.$0_2, $v_1);
            }
        }
    }
}


Microsoft.Crm.Client.Core.Models.Formatters.FormFieldFormatter = function() {
}
Microsoft.Crm.Client.Core.Models.Formatters.FormFieldFormatter.prototype = {
    $9_0: null,
    
    get_formModel: function() {
        return this.$9_0;
    },
    
    set_formModel: function(value) {
        this.$9_0 = value;
        return value;
    },
    
    formatFieldValue: function(fieldAttributeType, fieldName, rawValue) {
        if (_Script.isNullOrUndefined(rawValue)) {
            return null;
        }
        if (Microsoft.Crm.Client.Core.Framework.IPicklistItem.isInstanceOfType(rawValue)) {
            return (rawValue).get_Label();
        }
        else {
            switch (fieldAttributeType) {
                case 18:
                case 5:
                    return this.$28_0(fieldName, rawValue);
                case 4:
                case 3:
                    return this.$27_0(fieldName, rawValue);
                case 8:
                    return this.$2g_0(fieldName, rawValue);
                case 2:
                    return this.formatDateTimeFieldValue(fieldName, rawValue);
                case 14:
                    return this.$2h_0(fieldName, rawValue);
                default:
                    return null;
            }
        }
    },
    
    formatNumericFieldValue: function(fieldAttributeType, fieldName, rawValue) {
        if (_Script.isNullOrUndefined(rawValue)) {
            return null;
        }
        switch (fieldAttributeType) {
            case 18:
            case 5:
                return this.$28_0(fieldName, rawValue);
            case 4:
            case 3:
            case 8:
                return this.$27_0(fieldName, rawValue);
            default:
                return null;
        }
    },
    
    $28_0: function($p0, $p1) {
        var $v_0 = this.$9_0.getEffectiveAttributeFormat($p0);
        switch ($v_0) {
            case 'duration':
                return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z.formatDurationIntegerValue($p1);
            case 'language':
                return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z.formatLanguageIntegerValue($p1);
            case 'timezone':
                return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z.formatTimeZoneIntegerValue($p1);
            default:
                return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatIntegerValue($p1);
        }
    },
    
    $27_0: function($p0, $p1) {
        var $v_0 = this.$9_0.getEffectivePrecisionValue($p0);
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatDecimalValue($p1, $v_0);
    },
    
    $2g_0: function($p0, $p1) {
        var $v_0 = this.$9_0.getEffectivePrecisionValue($p0);
        var $v_1 = this.$2s_0();
        return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance().formatCurrencyValue($p1, $v_1, $v_0);
    },
    
    $2h_0: function($p0, $p1) {
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($p1.toString())) {
            return null;
        }
        var $v_0 = this.$9_0.getEffectiveAttributeFormat($p0);
        switch ($v_0) {
            case 'tickersymbol':
                return $p1.toString().toUpperCase();
            default:
                return $p1.toString();
        }
    },
    
    $2s_0: function() {
        return Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4.$B_0.getTransactionCurrencySymbol(this.$9_0.get_transactionCurrencyId());
    }
}


Type.registerNamespace('Xrm.Soap');

Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers');

Xrm.Soap.AttributeMetadataSerializer = function() {
}
Xrm.Soap.AttributeMetadataSerializer.$3B = function($p0) {
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.CallbackSafeArray$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
    if (!_Script.isNullOrUndefined($p0)) {
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            var $v_2 = Xrm.Soap.AttributeMetadataSerializer.$17($p0.get_item($v_1).get_domParserElement());
            if ($v_2) {
                $v_0.add($v_2);
            }
        }
    }
    return $v_0;
}
Xrm.Soap.AttributeMetadataSerializer.$17 = function($p0) {
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
        var $v_F = '';
        var $v_G = '';
        var $v_H = 1;
        var $v_I = Microsoft.Crm.Client.Core.Framework.Undefined.int32Value;
        var $v_J = Microsoft.Crm.Client.Core.Framework.Undefined.booleanValue;
        var $v_K = false;
        var $v_L = null;
        var $v_M = null;
        var $v_N = null;
        var $v_O = null;
        var $v_P = true;
        var $v_Q = false;
        var $v_R = 0;
        var $v_S = 0;
        var $v_T = false;
        for (var $v_V = 0, $v_W = $p0.childNodes.length; $v_V < $v_W; $v_V++) {
            var $v_X = $p0.childNodes[$v_V];
            if ($v_X.getAttribute('i:nil') === 'true' || !$v_X.firstChild) {
                continue;
            }
            if ($v_X.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
                var $v_Y = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_X.nodeName);
                switch ($v_Y) {
                    case 'MetadataId':
                        $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_X.firstChild.nodeValue);
                        break;
                    case 'LogicalName':
                        $v_1 = $v_X.firstChild.nodeValue;
                        break;
                    case 'EntityLogicalName':
                        $v_2 = $v_X.firstChild.nodeValue;
                        break;
                    case 'DisplayName':
                        $v_3 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_X);
                        break;
                    case 'AttributeType':
                        $v_4 = Xrm.Soap.AttributeMetadataSerializer.$34($v_X.firstChild.nodeValue);
                        break;
                    case 'RequiredLevel':
                        $v_5 = Xrm.Soap.AttributeMetadataSerializer.$3C($v_X.childNodes[2].firstChild.nodeValue);
                        break;
                    case 'IsSecured':
                        $v_6 = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'IsValidForCreate':
                        $v_7 = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'IsValidForRead':
                        $v_8 = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'IsValidForUpdate':
                        $v_9 = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'MaxLength':
                        $v_A = parseInt($v_X.firstChild.nodeValue);
                        break;
                    case 'MinValue':
                        $v_B = parseFloat($v_X.firstChild.nodeValue);
                        break;
                    case 'MaxValue':
                        $v_C = parseFloat($v_X.firstChild.nodeValue);
                        break;
                    case 'Precision':
                        $v_D = parseInt($v_X.firstChild.nodeValue);
                        break;
                    case 'PrecisionSource':
                        $v_E = parseInt($v_X.firstChild.nodeValue);
                        break;
                    case 'Format':
                        $v_F = $v_X.firstChild.nodeValue;
                        break;
                    case 'FormatName':
                        if (!$v_X.firstChild.firstChild) {
                            continue;
                        }
                        $v_G = $v_X.firstChild.firstChild.nodeValue;
                        break;
                    case 'DateTimeBehavior':
                        if (!$v_X.firstChild.firstChild) {
                            continue;
                        }
                        $v_H = Xrm.Soap.AttributeMetadataSerializer.$35($v_X.firstChild.firstChild.nodeValue);
                        break;
                    case 'DefaultFormValue':
                        $v_I = parseInt($v_X.firstChild.nodeValue);
                        break;
                    case 'DefaultValue':
                        $v_J = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'OptionSet':
                        $v_L = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$17($v_X);
                        break;
                    case 'IsBaseCurrency':
                        $v_K = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'ImeMode':
                        $v_S = Microsoft.Crm.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Framework.Common.ImeMode, $v_X.firstChild.nodeValue);
                        break;
                    case 'Targets':
                        var $v_Z = $v_X.childNodes;
                        var $v_a = $v_Z.length;
                        if ($v_a > 0) {
                            var $v_c = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                            for (var $v_d = 0; $v_d < $v_a; $v_d++) {
                                $v_c.add($v_Z[$v_d].firstChild.nodeValue);
                            }
                            $v_M = $v_c.toArray();
                        }
                        break;
                    case 'AttributeOf':
                        $v_N = $v_X.firstChild.nodeValue;
                        break;
                    case 'HasChanged':
                        $v_P = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                    case 'IsSortableEnabled':
                        var $v_b = $v_X.childNodes;
                        if ($v_b.length >= 2 && $v_b[2].nodeName === 'a:Value' && $v_b[2].firstChild && $v_b[2].firstChild.nodeValue) {
                            $v_Q = Boolean.parse($v_b[2].firstChild.nodeValue);
                        }
                        else {
                            $v_Q = false;
                        }
                        break;
                    case 'InheritsFrom':
                        $v_O = $v_X.firstChild.nodeValue;
                        break;
                    case 'SourceType':
                        $v_R = parseInt($v_X.firstChild.nodeValue);
                        break;
                    case 'IsLocalizable':
                        $v_T = Boolean.parse($v_X.firstChild.nodeValue);
                        break;
                }
            }
        }
        var $v_U = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_G)) ? $v_G : $v_F;
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata($v_1, $v_0, $v_2, $v_4, $v_3, $v_6, $v_7, $v_8, $v_9, $v_5, $v_A, $v_B, $v_C, $v_D, $v_E, $v_U, $v_H, $v_I, $v_J, $v_L, $v_K, $v_M, $v_N, $v_P, $v_S, $v_Q, $v_O, $v_R, $v_T);
    }
    catch ($v_e) {
        Microsoft.Crm.Client.Core.Framework.DynamicsTrace.logInfo('AttributeMetadataSerializer', 1005, String.format('Error extracting attribute metadata from SOAP response. Exception: {0}', $v_e.toString()));
        return null;
    }
}
Xrm.Soap.AttributeMetadataSerializer.$34 = function($p0) {
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
Xrm.Soap.AttributeMetadataSerializer.$3C = function($p0) {
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
Xrm.Soap.AttributeMetadataSerializer.$35 = function($p0) {
    switch ($p0) {
        case 'None':
            return 0;
        case 'UserLocal':
            return 1;
        case 'DateOnly':
            return 2;
        case 'TimeZoneIndependent':
            return 3;
        default:
            return 1;
    }
}


Xrm.Soap.BooleanValueSerializer = function() {
}
Xrm.Soap.BooleanValueSerializer.loadValueFromCrmSoap = function($p0) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.nodeName.toLowerCase() === 'a:value') {
            return Boolean.parse($v_2.firstChild.nodeValue);
        }
    }
    return false;
}


Xrm.Soap.BusinessNotificationArraySerializer = function() {
}
Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = xml.getNamespaceOfPrefix('b');
    xml.addNamespace('b', 'http://schemas.microsoft.com/crm/2011/Contracts');
    var $v_1 = new Array(0);
    var $v_2 = xml.selectNodes('b:BusinessNotification');
    if ($v_2) {
        for (var $v_3 = 0; $v_3 < $v_2.get_count(); $v_3++) {
            var $v_4 = $v_2.get_item($v_3);
            $v_1[$v_1.length] = Xrm.Soap.BusinessNotificationSerializer.loadFromCrmSoap($v_4);
        }
    }
    xml.addNamespace('b', $v_0);
    return $v_1;
}


Xrm.Soap.BusinessNotificationParameterSerializer = function() {
}
Xrm.Soap.BusinessNotificationParameterSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = 0;
    var $v_1 = xml.selectSingleNode('b:ParameterType');
    if ($v_1) {
        $v_0 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Xrm.Gen.BusinessNotificationParameterType, $v_1.get_innerText());
    }
    var $v_2 = '';
    var $v_3 = xml.selectSingleNode('b:Data');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    return new Xrm.Gen.BusinessNotificationParameter($v_0, $v_2);
}


Xrm.Soap.BusinessNotificationSerializer = function() {
}
Xrm.Soap.BusinessNotificationSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = 0;
    var $v_1 = xml.selectSingleNode('b:Severity');
    if ($v_1) {
        $v_0 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Xrm.Gen.BusinessNotificationSeverity, $v_1.get_innerText());
    }
    var $v_2 = '';
    var $v_3 = xml.selectSingleNode('b:Message');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    var $v_4 = new Array(0);
    var $v_5 = xml.selectNodes('b:Parameters');
    for (var $v_6 = 0; $v_6 < $v_5.get_count(); $v_6++) {
        var $v_7 = $v_5.get_item($v_6);
        $v_4[$v_4.length] = Xrm.Soap.BusinessNotificationParameterSerializer.loadFromCrmSoap($v_7);
    }
    return new Xrm.Gen.BusinessNotification($v_0, $v_2, $v_4);
}


Xrm.Soap.ColumnSetSerializer = function() {
}
Xrm.Soap.ColumnSetSerializer.toCrmSoap = function(columnSet) {
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
Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap = function(data) {
    var $v_0 = data.selectSingleNode('a:AllColumns');
    if (!_Script.isNullOrUndefined($v_0)) {
        if (Boolean.parse($v_0.get_innerText())) {
            return Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
        }
    }
    data.addNamespace('sa', 'http://schemas.microsoft.com/2003/10/Serialization/Arrays');
    var $v_1 = data.selectNodes('a:Columns/sa:string');
    var $v_2 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
    for (var $v_3 = 0; $v_3 < $v_1.get_count(); $v_3++) {
        $v_2.add($v_1.get_item($v_3).get_innerText());
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_2.toArray());
}


Xrm.Soap.CrmDateTimeSerializer = function() {
}
Xrm.Soap.CrmDateTimeSerializer.get_$1c = function() {
    return new Date(0);
}
Xrm.Soap.CrmDateTimeSerializer.get_$2U = function() {
    return Xrm.Soap.CrmDateTimeSerializer.$1y || (Xrm.Soap.CrmDateTimeSerializer.$1y = new RegExp('[Z,T]', 'ig'));
}
Xrm.Soap.CrmDateTimeSerializer.get_$2c = function() {
    return Xrm.Soap.CrmDateTimeSerializer.$1a || (Xrm.Soap.CrmDateTimeSerializer.$1a = new RegExp('[-]', 'ig'));
}
Xrm.Soap.CrmDateTimeSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml.firstChild) || Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(xml.firstChild.nodeValue)) {
        return Xrm.Soap.CrmDateTimeSerializer.get_$1c();
    }
    var $v_0 = xml.firstChild.nodeValue.replace(Xrm.Soap.CrmDateTimeSerializer.get_$2U(), ' ');
    $v_0 = Xrm.Soap.CrmDateTimeSerializer.parseSqlToUtcDateTime($v_0);
    return new Date(Date.parse($v_0));
}
Xrm.Soap.CrmDateTimeSerializer.toCrmSoap = function(dateTime) {
    if (_Script.isNullOrUndefined(dateTime) || dateTime === Xrm.Soap.CrmDateTimeSerializer.get_$1c()) {
        return '';
    }
    return dateTime.format('s');
}
Xrm.Soap.CrmDateTimeSerializer.toCrmDataXml = function(dateTime) {
    if (_Script.isNullOrUndefined(dateTime) || dateTime === Xrm.Soap.CrmDateTimeSerializer.get_$1c()) {
        return '';
    }
    return dateTime.format('s');
}
Xrm.Soap.CrmDateTimeSerializer.parseSqlToUtcDateTime = function(dateString) {
    dateString = (dateString.lastIndexOf('.') > -1) ? dateString.substr(0, dateString.lastIndexOf('.')) : dateString;
    return dateString.replace(Xrm.Soap.CrmDateTimeSerializer.get_$2c(), '/') + ' UTC';
}
Xrm.Soap.CrmDateTimeSerializer.toSqlDateTime = function(dateString) {
    return dateString.replace(Xrm.Soap.CrmDateTimeSerializer.get_$2U(), ' ').trimEnd();
}


Xrm.Soap.EntityCollectionSerializer = function() {
}
Xrm.Soap.EntityCollectionSerializer.loadFromCrmSoap = function(xml, query) {
    return Xrm.Soap.EntityCollectionSerializer.$1s(xml.get_domParserElement(), query);
}
Xrm.Soap.EntityCollectionSerializer.$1s = function($p0, $p1) {
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch('EntityCollectionSerializer');
    $v_0.start();
    var $v_1 = new Array(0);
    var $v_2 = false;
    var $v_3 = 0;
    var $v_4 = false;
    var $v_5 = '';
    var $v_6 = null;
    for (var $v_7 = 0, $v_8 = $p0.childNodes.length; $v_7 < $v_8; $v_7++) {
        var $v_9 = $p0.childNodes[$v_7];
        if ($v_9.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_A = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_9.nodeName);
            switch ($v_A) {
                case 'Entities':
                    $v_6 = $v_9;
                    break;
                case 'MoreRecords':
                    if (!_Script.isNullOrUndefined($v_9.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9.firstChild.nodeValue)) {
                        $v_2 = Boolean.parse($v_9.firstChild.nodeValue);
                    }
                    break;
                case 'TotalRecordCount':
                    if (!_Script.isNullOrUndefined($v_9.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9.firstChild.nodeValue)) {
                        $v_3 = Number.parseInvariant($v_9.firstChild.nodeValue);
                    }
                    break;
                case 'TotalRecordCountLimitExceeded':
                    if (!_Script.isNullOrUndefined($v_9.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9.firstChild.nodeValue)) {
                        $v_4 = Boolean.parse($v_9.firstChild.nodeValue);
                    }
                    break;
                case 'PagingCookie':
                    if (!_Script.isNullOrUndefined($v_9.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9.firstChild.nodeValue)) {
                        $v_5 = $v_9.firstChild.nodeValue;
                    }
                    break;
            }
        }
    }
    if ($v_6) {
        var $v_B = 0;
        for (var $v_C = 0, $v_D = $v_6.childNodes.length; $v_C < $v_D; $v_C++) {
            var $v_E = $v_6.childNodes[$v_C];
            if ($v_E.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_E.nodeName) === 'Entity') {
                $v_1[$v_B] = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoapNode($v_E);
                $v_B++;
            }
        }
    }
    $v_0.stop();
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_1, $v_2, $v_3, $v_4, $p1, null, $v_5);
}
Xrm.Soap.EntityCollectionSerializer.$2S = function($p0) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<a:Entities>');
    for (var $$arr_2 = $p0.get_entities(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:Entity>');
        $v_0.append(Xrm.Soap.EntityRecordSerializer.toCrmSoap($v_1, false));
        $v_0.append('</a:Entity>');
    }
    $v_0.append('</a:Entities>');
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0.get_entityName())) {
        $v_0.append('<a:EntityName>');
        $v_0.append(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p0.get_entityName()));
        $v_0.append('</a:EntityName>');
    }
    return $v_0.toString();
}
Xrm.Soap.EntityCollectionSerializer.$3L = function($p0) {
    var $v_0 = '';
    if (!$p0.get_count()) {
        return $v_0;
    }
    var $v_1 = $p0.get_entities()[0].get_actionableIdentifier();
    var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.LogicalName);
    for (var $$arr_4 = $p0.get_entities(), $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_3 = $$arr_4[$$idx_6];
        for (var $$arr_8 = $v_3.get_changedFieldNames().toArray(), $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_4 = $$arr_8[$$idx_A];
            if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_4) && $v_4 === 'partyid' && ($v_3.get_fieldTypes()[$v_4]) === 6) {
                $v_0 += '<' + $v_2 + '>';
                $v_0 += Xrm.Soap.EntityRecordSerializer.toCrmFieldDataXml($v_4, $v_3.getValue($v_4), $v_3.get_fieldTypes()[$v_4]);
                $v_0 += '</' + $v_2 + '>';
                break;
            }
        }
    }
    return $v_0;
}


Xrm.Soap.EntityMetadataCollectionSerializer = function() {
}
Xrm.Soap.EntityMetadataCollectionSerializer.$17 = function($p0) {
    var $v_0 = $p0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ServerVersionStamp\']/b:value').get_innerText();
    $p0.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
    var $v_1 = $p0.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'EntityMetadata\']/b:value/a:EntityMetadata');
    $p0.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata/Query');
    $p0.addNamespace('d', 'http://schemas.microsoft.com/2003/10/Serialization/Arrays');
    var $v_2 = $p0.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'DeletedMetadata\']/b:value/c:KeyValuePairOfDeletedMetadataFiltersArrayOfguidPlUv_PKtF[b:key=\'Attribute\']/b:value/d:guid');
    var $v_3 = new Array(0);
    var $v_4 = $v_2.get_count();
    for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
        $v_3[$v_5] = new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_item($v_5).get_innerText());
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection($v_1, $v_0, $v_3, Xrm.Soap.EntityMetadataCollectionSerializer.$36);
}
Xrm.Soap.EntityMetadataCollectionSerializer.$36 = function($p0) {
    var $v_0 = Xrm.Soap.EntityMetadataCollectionSerializer.$33($p0);
    var $v_1 = Xrm.Soap.EntityMetadataCollectionSerializer.$37($p0, $v_0);
    return new Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair($v_1, $v_0.$L_0);
}
Xrm.Soap.EntityMetadataCollectionSerializer.$37 = function($p0, $p1) {
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = true;
    var $v_3 = false;
    var $v_4 = false;
    var $v_5 = null;
    var $v_6 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_7 = false;
    var $v_8 = true;
    var $v_9 = true;
    var $v_A = false;
    var $v_B = -1;
    var $v_C = null;
    var $v_D = null;
    var $v_E = new Array(0);
    var $v_F = false;
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
    var $v_T = false;
    var $v_U = false;
    var $v_V = null;
    var $v_W = false;
    var $v_X = false;
    var $v_Y = false;
    var $v_Z = false;
    var $v_a = false;
    var $v_b = false;
    var $v_c = false;
    var $v_d = null;
    var $v_e = null;
    var $v_f = null;
    var $v_g = null;
    for (var $v_h = 0, $v_i = $p0.childNodes.length; $v_h < $v_i; $v_h++) {
        var $v_j = $p0.childNodes[$v_h];
        if ($v_j.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
            if ($v_j.getAttribute('i:nil') === 'true' || !$v_j.firstChild) {
                continue;
            }
            var $v_k = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_j.nodeName);
            switch ($v_k) {
                case 'DisplayCollectionName':
                    $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_j);
                    break;
                case 'DisplayName':
                    $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_j);
                    break;
                case 'HasChanged':
                    $v_2 = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsActivity':
                    $v_3 = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsChildEntity':
                    $v_4 = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsReadOnlyInMobileClient':
                    $v_7 = Xrm.Soap.EntityMetadataCollectionSerializer.$1O($v_j, $v_7);
                    break;
                case 'IsVisibleInMobileClient':
                    $v_8 = Xrm.Soap.EntityMetadataCollectionSerializer.$1O($v_j, $v_8);
                    break;
                case 'IsOfflineInMobileClient':
                    $v_9 = Xrm.Soap.EntityMetadataCollectionSerializer.$1O($v_j, $v_9);
                    break;
                case 'IsOptimisticConcurrencyEnabled':
                    $v_A = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'LogicalName':
                    $v_5 = $v_j.firstChild.nodeValue;
                    break;
                case 'MetadataId':
                    $v_6 = new Microsoft.Crm.Client.Core.Framework.Guid($v_j.firstChild.nodeValue);
                    break;
                case 'ManyToOneRelationships':
                    $v_f = $v_j;
                    break;
                case 'OneToManyRelationships':
                    $v_g = $v_j;
                    break;
                case 'ObjectTypeCode':
                    $v_B = Number.parseInvariant($v_j.firstChild.nodeValue);
                    break;
                case 'PrimaryIdAttribute':
                    $v_C = $v_j.firstChild.nodeValue;
                    break;
                case 'PrimaryNameAttribute':
                    $v_D = $v_j.firstChild.nodeValue;
                    break;
                case 'Privileges':
                    $v_E = Xrm.Soap.SecurityPrivilegeMetadataCollectionSerializer.loadFromCrmSoap($v_j);
                    break;
                case 'IsValidForAdvancedFind':
                    $v_F = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsMailMergeEnabled':
                    $v_G = Xrm.Soap.BooleanValueSerializer.loadValueFromCrmSoap($v_j);
                    break;
                case 'IsConnectionsEnabled':
                    $v_H = Xrm.Soap.BooleanValueSerializer.loadValueFromCrmSoap($v_j);
                    break;
                case 'IsCustomizable':
                    $v_I = Xrm.Soap.BooleanValueSerializer.loadValueFromCrmSoap($v_j);
                    break;
                case 'IsActivityParty':
                    $v_J = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsImportable':
                    $v_K = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsEnabledForCharts':
                    $v_L = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsCustomEntity':
                    $v_M = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsStateModelAware':
                    $v_N = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'EnforceStateTransitions':
                    $v_O = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsValidForQueue':
                    $v_P = Xrm.Soap.EntityMetadataCollectionSerializer.$1O($v_j, $v_P);
                    break;
                case 'ActivityTypeMask':
                    $v_R = Number.parseInvariant($v_j.firstChild.nodeValue);
                    break;
                case 'OwnershipType':
                    $v_S = Microsoft.Crm.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes, $v_j.firstChild.nodeValue);
                    break;
                case 'IsBusinessProcessEnabled':
                    $v_Q = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsDocumentManagementEnabled':
                    $v_T = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'EntityColor':
                    $v_V = $v_j.firstChild.nodeValue;
                    break;
                case 'IsInteractionCentricEnabled':
                    $v_W = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsQuickCreateEnabled':
                    $v_X = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsKnowledgeManagementEnabled':
                    $v_Y = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsDocumentRecommendationsEnabled':
                    $v_a = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'IsIntersect':
                    $v_b = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
                case 'UsesBusinessDataLabelTable':
                    $v_Z = Boolean.parse($v_j.firstChild.nodeValue);
                    break;
            }
        }
    }
    if ($v_4 && $v_f) {
        var $v_l = Xrm.Soap.EntityMetadataCollectionSerializer.$2r($v_f);
        if (!_Script.isNullOrUndefined($v_l)) {
            $v_d = $v_l.get_key();
            $v_e = $v_l.get_value();
        }
    }
    if ($v_g) {
        $v_U = Xrm.Soap.EntityMetadataCollectionSerializer.$24($v_g, 'activitypointer', 'regardingobjectid');
        $v_c = Xrm.Soap.EntityMetadataCollectionSerializer.$24($v_g, 'annotation', 'objectid');
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata($v_6, $v_5, $v_0, $v_1, $v_B, $v_C, $v_D, $v_E, $v_7, $v_8, $v_9, $v_A, $v_2, $v_3, $v_4, $v_d, $v_e, $v_F, $v_G, $v_H, $v_I, $v_J, $v_K, $v_L, $v_M, $v_N, $v_O, $v_P, $v_R, $v_S, $p1.$1P_0, $p1.$1Q_0, $v_Q, $v_T, $v_U, $v_V, $v_W, $v_X, $v_Y, $v_a, $v_b, $v_c, $v_Z);
}
Xrm.Soap.EntityMetadataCollectionSerializer.$24 = function($p0, $p1, $p2) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_2.nodeName) === 'OneToManyRelationshipMetadata') {
            var $v_3 = false;
            var $v_4 = false;
            for (var $v_5 = 0, $v_6 = $v_2.childNodes.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_2.childNodes[$v_5];
                if ($v_7.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && $v_7.firstChild) {
                    var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_7.nodeName);
                    if ($v_8 === 'ReferencingEntity' && $v_7.firstChild.nodeValue === $p1) {
                        $v_3 = true;
                    }
                    else if ($v_8 === 'ReferencingAttribute' && $v_7.firstChild.nodeValue === $p2) {
                        $v_4 = true;
                    }
                }
            }
            if ($v_3 && $v_4) {
                return true;
            }
        }
    }
    return false;
}
Xrm.Soap.EntityMetadataCollectionSerializer.$2r = function($p0) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_2.nodeName) === 'OneToManyRelationshipMetadata') {
            var $v_3 = false;
            var $v_4 = null;
            var $v_5 = null;
            for (var $v_6 = 0, $v_7 = $v_2.childNodes.length; $v_6 < $v_7; $v_6++) {
                var $v_8 = $v_2.childNodes[$v_6];
                if ($v_8.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && $v_8.firstChild) {
                    var $v_9 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_8.nodeName);
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
                return new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(String, String))($v_4, $v_5);
            }
        }
    }
    return null;
}
Xrm.Soap.EntityMetadataCollectionSerializer.$33 = function($p0) {
    var $v_0 = null;
    var $v_1 = false;
    var $v_2 = false;
    var $v_3 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
    for (var $v_5 = 0, $v_6 = $p0.childNodes.length; $v_5 < $v_6; $v_5++) {
        var $v_7 = $p0.childNodes[$v_5];
        if ($v_7.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
            if ($v_7.getAttribute('i:nil') === 'true' || !$v_7.firstChild) {
                continue;
            }
            var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_7.nodeName);
            if ($v_8 === 'Attributes') {
                for (var $v_9 = 0, $v_A = $v_7.childNodes.length; $v_9 < $v_A; $v_9++) {
                    var $v_B = $v_7.childNodes[$v_9];
                    if ($v_B.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_B.nodeName) === 'AttributeMetadata') {
                        var $v_C = Xrm.Soap.AttributeMetadataSerializer.$17($v_B);
                        if ($v_C) {
                            if ($v_C.get_isSecured()) {
                                $v_1 = true;
                            }
                            if ($v_C.get_logicalName() === 'statecode') {
                                $v_2 = true;
                            }
                            $v_3.add($v_C);
                        }
                    }
                }
                if (!_Script.isNullOrUndefined($v_0)) {
                    break;
                }
            }
            else if ($v_8 === 'LogicalName') {
                $v_0 = $v_7.firstChild.nodeValue;
                if (!_Script.isNullOrUndefined($v_3)) {
                    break;
                }
            }
        }
    }
    var $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection($v_0);
    $v_4.mergeAttributeMetadata($v_3.toArray(), false);
    return new Xrm.Soap.EntityMetadataCollectionSerializer.AttributeMetadataCollectionSerializerResult($v_4, $v_1, $v_2);
}
Xrm.Soap.EntityMetadataCollectionSerializer.$1O = function($p0, $p1) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        if ($p0.childNodes[$v_0].namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($p0.childNodes[$v_0].nodeName) === 'Value') {
            return Boolean.parse($p0.childNodes[$v_0].firstChild.nodeValue);
        }
    }
    return $p1;
}


Xrm.Soap.EntityMetadataCollectionSerializer.AttributeMetadataCollectionSerializerResult = function($p0, $p1, $p2) {
    this.$L_0 = $p0;
    this.$1P_0 = $p1;
    this.$1Q_0 = $p2;
}
Xrm.Soap.EntityMetadataCollectionSerializer.AttributeMetadataCollectionSerializerResult.prototype = {
    $L_0: null,
    $1P_0: false,
    $1Q_0: false,
    
    get_attributeMetadata: function() {
        return this.$L_0;
    },
    
    get_hasSecuredAttributes: function() {
        return this.$1P_0;
    },
    
    get_hasStateCode: function() {
        return this.$1Q_0;
    }
}


Xrm.Soap.EntityRecordSerializer = function() {
}
Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap = function(xml, relatedEntitiesQuery) {
    return Xrm.Soap.EntityRecordSerializer.loadFromCrmSoapNode(xml.get_domParserElement(), relatedEntitiesQuery);
}
Xrm.Soap.EntityRecordSerializer.loadFromCrmSoapNode = function(xml, relatedEntitiesQuery) {
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
    var $v_7 = null;
    for (var $v_A = 0, $v_B = xml.childNodes.length; $v_A < $v_B; $v_A++) {
        var $v_C = xml.childNodes[$v_A];
        if ($v_C.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_D = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_C.nodeName);
            switch ($v_D) {
                case 'Id':
                    if ($v_C.textContent) {
                        $v_4 = $v_C.textContent;
                    }
                    else {
                        $v_4 = ($v_C.hasChildNodes()) ? $v_C.firstChild.nodeValue : null;
                    }
                    break;
                case 'LogicalName':
                    $v_5 = $v_C.firstChild.nodeValue;
                    break;
                case 'RowVersion':
                    if (!_Script.isNullOrUndefined($v_C.firstChild)) {
                        $v_6 = $v_C.firstChild.nodeValue;
                    }
                    break;
                case 'RelatedEntities':
                    $v_7 = $v_C;
                    break;
            }
        }
    }
    if (!$v_4) {
        $v_4 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
    }
    var $v_8 = new Xrm.Objects.EntityReference($v_5, new Microsoft.Crm.Client.Core.Framework.Guid($v_4));
    if (!_Script.isNullOrUndefined($v_6)) {
        $v_8.set_rowVersion($v_6);
    }
    Xrm.Soap.EntityRecordSerializer.$3A(xml, $v_0, $v_1, $v_2);
    var $v_9 = null;
    if ($v_7) {
        $v_9 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$17($v_8, $v_7, relatedEntitiesQuery);
    }
    else {
        $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0));
    }
    if ($v_8.LogicalName === 'email') {
        if ((('safedescription') in $v_0) && (('description') in $v_0)) {
            $v_0['description'] = $v_0['safedescription'];
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_8, $v_0, $v_1, $v_2, $v_3, $v_9);
}
Xrm.Soap.EntityRecordSerializer.toCrmSoap = function(entityRecord, includeEntityNode) {
    if (_Script.isNullOrUndefined(includeEntityNode)) {
        includeEntityNode = true;
    }
    var $v_0 = entityRecord.get_actionableIdentifier();
    var $v_1 = ((includeEntityNode) ? String.format('<entity xmlns:a=\"{0}\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">', 'http://schemas.microsoft.com/xrm/2011/Contracts') : '') + Xrm.Soap.EntityRecordSerializer.$2d(entityRecord) + '<a:EntityState i:nil=\"true\"/>' + String.format('<a:FormattedValues xmlns:b=\"{0}\"/>', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') + (($v_0.Id === Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) ? '' : '<a:Id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.Id.toString()) + '</a:Id>') + '<a:LogicalName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.LogicalName) + '</a:LogicalName>' + ((entityRecord.hasField('versionnumber') && !_Script.isNullOrUndefined(entityRecord.getValue('versionnumber'))) ? '<a:RowVersion>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityRecord.getValue('versionnumber').toString()) + '</a:RowVersion>' : '') + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$2S(entityRecord.get_relatedEntities()) + ((includeEntityNode) ? '</entity>' : '');
    return $v_1;
}
Xrm.Soap.EntityRecordSerializer.toCrmEntityDataXml = function(entityRecord, changedFieldsOnly) {
    var $v_0 = entityRecord.get_actionableIdentifier();
    var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_0.LogicalName);
    if (_Script.isNullOrUndefined(changedFieldsOnly)) {
        changedFieldsOnly = false;
    }
    var $v_2 = (changedFieldsOnly) ? entityRecord.get_changedFieldNames().toArray() : entityRecord.get_fieldNames();
    var $v_3 = '<' + $v_1 + '>';
    for (var $$arr_6 = $v_2, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
        var $v_4 = $$arr_6[$$idx_8];
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_4)) {
            $v_3 += Xrm.Soap.EntityRecordSerializer.toCrmFieldDataXml($v_4, entityRecord.getValue($v_4), entityRecord.get_fieldTypes()[$v_4]);
        }
    }
    $v_3 += '</' + $v_1 + '>';
    return $v_3;
}
Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap = function(fieldName, value, fieldType, fieldTypeName, namespaceDeclaration) {
    if (fieldType !== -1) {
        fieldTypeName = Xrm.Soap.EntityRecordSerializer.$2e(fieldType);
    }
    else {
        fieldType = Xrm.Soap.EntityRecordSerializer.$1r(fieldTypeName);
    }
    if (_Script.isNullOrUndefined(namespaceDeclaration)) {
        namespaceDeclaration = Xrm.Soap.EntityRecordSerializer.$2m(fieldType);
    }
    var $v_0 = '<a:KeyValuePairOfstringanyType>';
    $v_0 += '<b:key>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(fieldName) + '</b:key>';
    if (_Script.isNullOrUndefined(value)) {
        $v_0 += '<b:value i:nil=\"true\" />';
    }
    else {
        $v_0 += '<b:value i:type=\"' + fieldTypeName + '\"';
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(namespaceDeclaration)) {
            $v_0 += ' ' + namespaceDeclaration;
        }
        $v_0 += '>';
        switch (fieldType) {
            case 1:
            case 6:
            case 9:
                $v_0 += Xrm.Soap.EntityReferenceSerializer.toCrmSoap((value));
                break;
            case 2:
                $v_0 += Xrm.Soap.CrmDateTimeSerializer.toCrmSoap(value);
                break;
            case 0:
                var $v_1;
                try {
                    $v_1 = (Boolean.isInstanceOfType(value)) ? (value).toString() : ((value).get_value() > 0).toString();
                }
                catch ($$e_7) {
                    $v_1 = (value.toString() === '1').toString();
                }
                $v_0 += $v_1;
                break;
            case 5:
                $v_0 += (value).toString();
                break;
            case 13:
            case 12:
            case 11:
                if (String.isInstanceOfType(value)) {
                    $v_0 += '<a:Value>' + value + '</a:Value>';
                }
                else {
                    var $v_2 = (Number.isInstanceOfType(value)) ? (value) : (value).get_value();
                    $v_0 += '<a:Value>' + $v_2.toString() + '</a:Value>';
                }
                break;
            case 15:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(value.toString());
                break;
            case 8:
                $v_0 += '<a:Value>' + (value).toString() + '</a:Value>';
                break;
            case 10:
                $v_0 += Xrm.Soap.EntityCollectionSerializer.$2S(value);
                break;
            case 22:
            case -1:
                $v_0 += Xrm.Soap.EntityRecordSerializer.$2Y(fieldTypeName, value);
                break;
            default:
                $v_0 += Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(value);
                break;
        }
        $v_0 += '</b:value>';
    }
    $v_0 += '</a:KeyValuePairOfstringanyType>';
    return $v_0;
}
Xrm.Soap.EntityRecordSerializer.$3K = function($p0) {
    var $v_0 = '';
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0 += '<sa:string>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1) + '</sa:string>';
    }
    return $v_0;
}
Xrm.Soap.EntityRecordSerializer.$2Y = function($p0, $p1) {
    if ($p0 === 'a:FetchExpression') {
        return '<a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1) + '</a:Query>';
    }
    else if ($p0 === 'c:QueryByEntityNameDictionary') {
        return Xrm.Soap.QueryByEntityNameDictionarySerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'c:InputArgumentCollection') {
        return Xrm.Soap.InputArgumentCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:ColumnSet') {
        return Xrm.Soap.ColumnSetSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:Entity') {
        return Xrm.Soap.EntityRecordSerializer.toCrmSoap($p1, false);
    }
    else if ($p0 === 'a:OrganizationRequestCollection' || $p0 === 'c:OrganizationRequestCollection') {
        return Xrm.Soap.OrganizationRequestCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:ExecuteMultipleSettings' || $p0 === 'c:ExecuteMultipleSettings') {
        return Xrm.Soap.ExecuteMultipleSettingsSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:RelationshipQueryCollection') {
        return Xrm.Soap.RelationshipQueryCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:TargetFieldType') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12(Xrm.Gen.TargetFieldType, $p1);
    }
    else if ($p0 === 'a:Relationship') {
        return Xrm.Soap.RelationshipSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'a:EntityReferenceCollection') {
        return Xrm.Soap.EntityReferenceCollectionSerializer.toCrmSoap($p1);
    }
    else if ($p0 === 'sa:ArrayOfstring') {
        return Xrm.Soap.EntityRecordSerializer.$3K($p1);
    }
    else if ($p0 === 'a:RollupType') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12(Xrm.Gen.RollupType, $p1);
    }
    else if ($p0 === 'c:ConcurrencyBehavior') {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12(Xrm.Gen.ConcurrencyBehavior, $p1);
    }
    else {
        return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($p1);
    }
}
Xrm.Soap.EntityRecordSerializer.$3A = function($p0, $p1, $p2, $p3) {
    var $v_0 = null;
    var $v_1 = null;
    for (var $v_2 = 0, $v_3 = $p0.childNodes.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $p0.childNodes[$v_2];
        if ($v_4.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
            var $v_5 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_4.nodeName);
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
    Xrm.Soap.EntityRecordSerializer.$38($v_0, $p1, $p2);
    if (!_Script.isNullOrUndefined($v_1)) {
        Xrm.Soap.EntityRecordSerializer.$39($v_1, $p1, $p2, $p3);
    }
}
Xrm.Soap.EntityRecordSerializer.$38 = function($p0, $p1, $p2) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_2.nodeName) === 'KeyValuePairOfstringanyType') {
            var $v_3 = null;
            var $v_4 = null;
            for (var $v_8 = 0, $v_9 = $v_2.childNodes.length; $v_8 < $v_9; $v_8++) {
                var $v_A = $v_2.childNodes[$v_8];
                if ($v_A.namespaceURI === 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') {
                    var $v_B = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_A.nodeName);
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
            if (Xrm.Soap.EntityRecordSerializer.$2G($v_4, $v_5)) {
                continue;
            }
            var $v_6 = Xrm.Soap.EntityRecordSerializer.$1r($v_5);
            var $v_7 = null;
            if ($v_6 === 21) {
                var $v_C = null;
                var $v_D = null;
                for (var $v_E = 0, $v_F = $v_4.childNodes.length; $v_E < $v_F; $v_E++) {
                    var $v_G = $v_4.childNodes[$v_E];
                    if ($v_G.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts') {
                        var $v_H = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_G.nodeName);
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
                if (Xrm.Soap.EntityRecordSerializer.$2G($v_4, $v_5)) {
                    continue;
                }
                $v_6 = Xrm.Soap.EntityRecordSerializer.$1r($v_5);
                $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue($v_C, $v_D, $v_6);
            }
            if ($v_6 !== -1) {
                var $v_I = null;
                switch ($v_6) {
                    case 6:
                        $v_I = Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoapNode($v_4);
                        break;
                    case 10:
                        $v_I = Xrm.Soap.EntityCollectionSerializer.$1s($v_4, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
                        break;
                    case 2:
                        $v_I = Xrm.Soap.CrmDateTimeSerializer.loadFromCrmSoap($v_4);
                        break;
                    case 15:
                        if (!_Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            if ($v_4.textContent) {
                                $v_I = new Microsoft.Crm.Client.Core.Framework.Guid($v_4.textContent);
                            }
                            else {
                                $v_I = ($v_4.hasChildNodes()) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_4.firstChild.nodeValue) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                            }
                        }
                        else {
                            $v_I = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                        }
                        break;
                    case 5:
                        if (!_Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            $v_I = parseInt($v_4.firstChild.nodeValue);
                        }
                        break;
                    case 0:
                        if (!_Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            var $v_J = Boolean.parse($v_4.firstChild.nodeValue);
                            if ($v_J) {
                                $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, 1, -1, -1, null, null, null);
                            }
                            else {
                                $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, 0, -1, -1, null, null, null);
                            }
                        }
                        break;
                    case 8:
                        $v_I = parseFloat(Xrm.Soap.EntityRecordSerializer.$2E($v_4));
                        break;
                    case 3:
                    case 4:
                        if (!_Script.isNullOrUndefined($v_4.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_4.firstChild.nodeValue)) {
                            $v_I = parseFloat($v_4.firstChild.nodeValue);
                        }
                        break;
                    case 13:
                    case 12:
                    case 11:
                        $v_I = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata(null, parseInt(Xrm.Soap.EntityRecordSerializer.$2E($v_4)), -1, -1, null, null, null);
                        break;
                    default:
                        $v_I = (!_Script.isNullOrUndefined($v_4.firstChild)) ? $v_4.firstChild.nodeValue : null;
                        break;
                }
                if (!_Script.isNullOrUndefined($v_I)) {
                    if (!_Script.isNullOrUndefined($v_7)) {
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
Xrm.Soap.EntityRecordSerializer.$39 = function($p0, $p1, $p2, $p3) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes.length; $v_0 < $v_1; $v_0++) {
        var $v_2 = $p0.childNodes[$v_0];
        if ($v_2.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_2.nodeName) === 'KeyValuePairOfstringstring') {
            var $v_3 = null;
            var $v_4 = null;
            for (var $v_5 = 0, $v_6 = $v_2.childNodes.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_2.childNodes[$v_5];
                if ($v_7.namespaceURI === 'http://schemas.datacontract.org/2004/07/System.Collections.Generic') {
                    var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_7.nodeName);
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
            if (!_Script.isNullOrUndefined($v_3) && !_Script.isNullOrUndefined($v_4)) {
                var $v_9 = $v_3.firstChild.nodeValue;
                if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9) && (($v_9) in $p1)) {
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
                            if (!_Script.isNullOrUndefined($v_4.firstChild)) {
                                $v_B.set_label($v_4.firstChild.nodeValue);
                            }
                        }
                    }
                    if (!_Script.isNullOrUndefined($v_4.firstChild)) {
                        $p3[$v_9] = $v_4.firstChild.nodeValue;
                    }
                }
            }
        }
    }
}
Xrm.Soap.EntityRecordSerializer.$2d = function($p0) {
    var $v_0 = '<a:Attributes xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">';
    for (var $$arr_2 = $p0.get_changedFieldNames().toArray(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace($v_1)) {
            $v_0 += Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap($v_1, $p0.getValue($v_1), $p0.get_fieldTypes()[$v_1]);
        }
    }
    $v_0 += '</a:Attributes>';
    return $v_0;
}
Xrm.Soap.EntityRecordSerializer.toCrmFieldDataXml = function(fieldName, value, fieldType) {
    var $v_0 = '';
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(fieldName) || _Script.isNullOrUndefined(value)) {
        return $v_0;
    }
    switch (fieldType) {
        case 1:
        case 6:
        case 9:
            $v_0 += Xrm.Soap.EntityReferenceSerializer.toDataXml(fieldName, value);
            break;
        case 2:
            var $v_1 = Xrm.Soap.CrmDateTimeSerializer.toCrmDataXml(value);
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, $v_1);
            break;
        case 0:
            var $v_2;
            try {
                $v_2 = (Boolean.isInstanceOfType(value)) ? (value).toString() : (value).get_value().toString();
            }
            catch ($$e_6) {
                $v_2 = value.toString();
            }
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, $v_2);
            break;
        case 5:
        case 18:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, (value).toString());
            break;
        case 4:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, (value).toString());
            break;
        case 3:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, (value).toString());
            break;
        case 7:
        case 14:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, value.toString());
            break;
        case 15:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, (value).toString());
            break;
        case 8:
            $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, (value).toString());
            break;
        case 13:
        case 11:
        case 12:
            if (String.isInstanceOfType(value)) {
                $v_0 += Xrm.Soap.EntityRecordSerializer.$T(fieldName, value.toString());
            }
            else {
                var $v_3 = (value).get_value();
                var $v_4 = {};
                $v_4['name'] = (value).get_label();
                $v_0 += Xrm.Soap.EntityRecordSerializer.$3M(fieldName, $v_3.toString(), $v_4);
            }
            break;
        case 10:
            $v_0 = '<' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(fieldName) + '>';
            $v_0 += Xrm.Soap.EntityCollectionSerializer.$3L(value);
            $v_0 += '<' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(fieldName) + '/>';
            break;
        default:
            break;
    }
    return $v_0;
}
Xrm.Soap.EntityRecordSerializer.$T = function($p0, $p1) {
    var $v_0 = document.createElementNS(null, $p0);
    var $v_1 = document.createTextNode($p1);
    $v_0.appendChild($v_1);
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0).get_outerXml();
}
Xrm.Soap.EntityRecordSerializer.$3M = function($p0, $p1, $p2) {
    var $v_0 = document.createElementNS(null, $p0);
    var $v_1 = document.createTextNode($p1);
    $v_0.appendChild($v_1);
    if (!_Script.isNullOrUndefined($p2)) {
        var $$dict_7 = $p2;
        for (var $$key_8 in $$dict_7) {
            var $v_2 = { key: $$key_8, value: $$dict_7[$$key_8] };
            if (!_Script.isNullOrUndefined($v_2.value)) {
                var $v_3 = $v_2.value.toString();
                $v_0.setAttribute($v_2.key, $v_3);
            }
        }
    }
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0).get_outerXml();
}
Xrm.Soap.EntityRecordSerializer.$1r = function($p0) {
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
        case 'long':
            return 18;
        default:
            return -1;
    }
}
Xrm.Soap.EntityRecordSerializer.$2e = function($p0) {
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
        case 22:
            return 'sa:ArrayOfstring';
        case 23:
            return 'c:base64Binary';
        case 18:
            return 'a:long';
        default:
            throw Error.create('field type is not supported: ' + $p0);
    }
}
Xrm.Soap.EntityRecordSerializer.$2m = function($p0) {
    switch ($p0) {
        case 14:
        case 2:
        case 3:
        case 4:
        case 0:
        case 5:
        case 7:
        case 20:
        case 23:
            return 'xmlns:c=\"http://www.w3.org/2001/XMLSchema\"';
        case 15:
            return 'xmlns:c=\"http://schemas.microsoft.com/2003/10/Serialization/\"';
        case 22:
            return 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"';
        default:
            return '';
    }
}
Xrm.Soap.EntityRecordSerializer.$2G = function($p0, $p1) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p1)) {
        return $p0.getAttribute('i:nil') === 'true';
    }
    return false;
}
Xrm.Soap.EntityRecordSerializer.$2E = function($p0) {
    var $v_0 = null;
    if (!_Script.isNullOrUndefined($p0.firstElementChild) && !_Script.isNullOrUndefined($p0.firstElementChild.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0.firstElementChild.firstChild.nodeValue)) {
        $v_0 = $p0.firstElementChild.firstChild.nodeValue;
    }
    else if (!_Script.isNullOrUndefined($p0.firstChild) && !_Script.isNullOrUndefined($p0.firstChild.firstChild) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0.firstChild.firstChild.nodeValue)) {
        $v_0 = $p0.firstChild.firstChild.nodeValue;
    }
    return $v_0;
}


Xrm.Soap.EntityReferenceCollectionSerializer = function() {
}
Xrm.Soap.EntityReferenceCollectionSerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Xrm.Objects.EntityReference))();
    var $v_1 = xml.selectNodes('a:EntityReference');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        $v_0.set_item($v_2, Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_1.get_item($v_2)));
    }
    return $v_0.toArray();
}
Xrm.Soap.EntityReferenceCollectionSerializer.toCrmSoap = function(collection) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = collection, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:EntityReference>');
        $v_0.append(Xrm.Soap.EntityReferenceSerializer.toCrmSoap($v_1));
        $v_0.append('</a:EntityReference>');
    }
    return $v_0.toString();
}


Xrm.Soap.EntityReferenceSerializer = function() {
}
Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap = function(xml) {
    return Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoapNode(xml.get_domParserElement());
}
Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoapNode = function(xml) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_1 = null;
    var $v_2 = null;
    var $v_3 = null;
    for (var $v_4 = 0, $v_5 = xml.childNodes.length; $v_4 < $v_5; $v_4++) {
        var $v_6 = xml.childNodes[$v_4];
        if ($v_6.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && $v_6.firstChild) {
            var $v_7 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_6.nodeName);
            switch ($v_7) {
                case 'Id':
                    if ($v_6.textContent) {
                        $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_6.textContent);
                    }
                    else {
                        $v_0 = ($v_6.hasChildNodes()) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_6.firstChild.nodeValue) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                    }
                    break;
                case 'LogicalName':
                    $v_1 = $v_6.firstChild.nodeValue;
                    break;
                case 'Name':
                    $v_2 = $v_6.firstChild.nodeValue;
                    break;
                case 'RowVersion':
                    $v_3 = $v_6.firstChild.nodeValue;
                    break;
            }
        }
    }
    if (!$v_1) {
        return Xrm.Objects.EntityReference.get_empty();
    }
    return new Xrm.Objects.EntityReference($v_1, $v_0, $v_2, $v_3);
}
Xrm.Soap.EntityReferenceSerializer.toCrmSoap = function(entityReference) {
    var $v_0 = '<a:Id>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.Id.toString()) + '</a:Id>';
    $v_0 += '<a:LogicalName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.LogicalName) + '</a:LogicalName>';
    $v_0 += (!_Script.isNullOrUndefined(entityReference.getValue('RowVersion'))) ? '<a:RowVersion>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.getValue('RowVersion').toString()) + '</a:RowVersion>' : '';
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(entityReference.Name)) {
        $v_0 += '<a:Name>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(entityReference.Name) + '</a:Name>';
    }
    return $v_0;
}
Xrm.Soap.EntityReferenceSerializer.toDataXml = function(fieldName, value) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(fieldName) || _Script.isNullOrUndefined(value)) {
        return '';
    }
    var $v_0 = value;
    var $v_1 = $v_0.TypeCode;
    var $v_2 = document.createElementNS(null, fieldName);
    var $v_3 = document.createTextNode($v_0.Id.toString());
    $v_2.appendChild($v_3);
    if ($v_1 > 0) {
        $v_2.setAttribute('type', $v_1.toString());
    }
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0.Name)) {
        $v_2.setAttribute('name', $v_0.Name);
    }
    return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_2).get_outerXml();
}


Xrm.Soap.ErrorInfoSerializer = function() {
}
Xrm.Soap.ErrorInfoSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = '';
    var $v_1 = xml.selectSingleNode('b:ErrorCode');
    if ($v_1) {
        $v_0 = $v_1.get_innerText();
    }
    var $v_2 = new Array(0);
    var $v_3 = xml.selectNodes('.//b:ResourceInfo');
    for (var $v_4 = 0; $v_4 < $v_3.get_count(); $v_4++) {
        var $v_5 = $v_3.get_item($v_4);
        $v_2[$v_2.length] = Xrm.Soap.ResourceInfoSerializer.loadFromCrmSoap($v_5);
    }
    return new Xrm.Gen.ErrorInfo($v_2, $v_0);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.GuidArraySerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.GuidArraySerializer.loadFromCrmSoap = function(node) {
    if (_Script.isNullOrUndefined(node)) {
        return null;
    }
    var $v_0 = [];
    var $v_1 = node.childNodes();
    if (!_Script.isNullOrUndefined($v_1)) {
        $v_0 = new Array($v_1.get_count());
        for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
            var $v_3 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_1.get_item($v_2).get_innerText());
            if ($v_3 !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) {
                $v_0[$v_2] = $v_3;
            }
        }
    }
    return $v_0;
}


Xrm.Soap.StringArraySerializer = function() {
}
Xrm.Soap.StringArraySerializer.loadFromCrmSoap = function(node) {
    if (_Script.isNullOrUndefined(node)) {
        return null;
    }
    var $v_0 = null;
    var $v_1 = node.childNodes();
    if (!_Script.isNullOrUndefined($v_1)) {
        $v_0 = new Array($v_1.get_count());
        for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
            $v_0[$v_2] = $v_1.get_item($v_2).get_innerText();
        }
    }
    return $v_0;
}


Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer = function() {
}
Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer.loadFromCrmSoap = function(xml, request) {
    var $v_0 = (request).requests;
    var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Xrm.Sdk.ExecuteMultipleResponseItem))();
    xml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    var $v_2 = xml.selectNodes('c:ExecuteMultipleResponseItem');
    for (var $v_3 = 0; $v_3 < $v_2.get_count(); $v_3++) {
        var $v_4 = null;
        var $v_5 = null;
        var $v_6 = $v_2.get_item($v_3).selectSingleNode('c:Fault');
        if (!_Script.isNullOrUndefined($v_6) && $v_6.getAttribute('i:nil') !== 'true') {
            $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml($v_6);
        }
        var $v_7 = Number.parseInvariant($v_2.get_item($v_3).selectSingleNode('c:RequestIndex').get_innerText());
        var $v_8 = $v_2.get_item($v_3).selectSingleNode('c:Response');
        if (!_Script.isNullOrUndefined($v_8) && $v_8.getAttribute('i:nil') !== 'true') {
            var $v_9 = $v_8.selectSingleNode('a:ResponseName').get_innerText();
            $v_5 = Xrm.Soap.ResponseSerializer.loadFromCrmSoap($v_9, $v_8, $v_0[$v_7]);
        }
        $v_1.add(new Xrm.Sdk.ExecuteMultipleResponseItem($v_4, $v_7, $v_5));
    }
    return $v_1.toArray();
}


Xrm.Soap.ExecuteMultipleSettingsSerializer = function() {
}
Xrm.Soap.ExecuteMultipleSettingsSerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = Boolean.parse(xml.selectSingleNode('c:ContinueOnError').get_innerText());
    var $v_1 = Boolean.parse(xml.selectSingleNode('c:ReturnResponses').get_innerText());
    return new Xrm.Gen.ExecuteMultipleSettings($v_0, $v_1);
}
Xrm.Soap.ExecuteMultipleSettingsSerializer.toCrmSoap = function(settings) {
    return '<c:ContinueOnError>' + settings.get_continueOnError() + '</c:ContinueOnError>' + '<c:ReturnResponses>' + settings.get_returnResponses() + '</c:ReturnResponses>';
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap = function($p0) {
    var $v_0 = null;
    var $v_1 = null;
    $v_0 = USER_LANGUAGE_CODE;
    $v_1 = ORG_LANGUAGE_CODE;
    var $v_2 = {};
    for (var $v_3 = 0, $v_4 = $p0.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = $p0.childNodes[$v_3];
        if ($v_5.nodeName === 'a:UserLocalizedLabel') {
            var $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$2T($v_2, $v_5);
            $v_0 = $v_0 || $v_6;
        }
        if ($v_5.nodeName === 'a:LocalizedLabels') {
            for (var $v_7 = 0, $v_8 = $v_5.childNodes.length; $v_7 < $v_8; $v_7++) {
                Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$2T($v_2, $v_5.childNodes[$v_7]);
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
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.$2T = function($p0, $p1) {
    var $v_0 = null;
    var $v_1 = null;
    for (var $v_2 = 0, $v_3 = $p1.childNodes.length; $v_2 < $v_3; $v_2++) {
        var $v_4 = $p1.childNodes[$v_2];
        if ($v_4.nodeName === 'a:LanguageCode') {
            $v_0 = $v_4.firstChild.nodeValue;
        }
        if ($v_4.nodeName === 'a:Label' && $v_4.firstChild) {
            $v_1 = $v_4.firstChild.nodeValue;
        }
    }
    if (!_Script.isNullOrUndefined($v_0)) {
        $p0[$v_0] = $v_1;
    }
    return $v_0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$17 = function($p0) {
    var $v_0 = {};
    for (var $v_1 = 0, $v_2 = $p0.childNodes.length; $v_1 < $v_2; $v_1++) {
        var $v_3 = $p0.childNodes[$v_1];
        if ($v_3.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_3.nodeName) === 'Options') {
            for (var $v_4 = 0, $v_5 = $v_3.childNodes.length; $v_4 < $v_5; $v_4++) {
                $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$2I($v_0, $v_3, $v_3.childNodes[$v_4], $v_4);
            }
        }
        else if ($v_3.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata' && (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_3.nodeName) === 'FalseOption' || Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_3.nodeName) === 'TrueOption')) {
            $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$2I($v_0, $v_3, $v_3, $v_1);
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata($v_0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.$2I = function($p0, $p1, $p2, $p3) {
    var $v_0 = -1;
    var $v_1 = null;
    var $v_2 = -1;
    var $v_3 = -1;
    var $v_4 = null;
    var $v_5 = null;
    var $v_6 = null;
    for (var $v_7 = 0, $v_8 = $p2.childNodes.length; $v_7 < $v_8; $v_7++) {
        var $v_9 = $p2.childNodes[$v_7];
        if ($p1.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
            var $v_A = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_9.nodeName);
            switch ($v_A) {
                case 'Value':
                    $v_0 = Number.parseInvariant($v_9.firstChild.nodeValue);
                    break;
                case 'Label':
                    $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.loadLocalizedLabelFromCrmSoap($v_9);
                    break;
                case 'State':
                    $v_2 = Number.parseInvariant($v_9.firstChild.nodeValue);
                    break;
                case 'DefaultStatus':
                    $v_3 = Number.parseInvariant($v_9.firstChild.nodeValue);
                    break;
                case 'TransitionData':
                    if ($v_9.childNodes.length > 0) {
                        if (!IsNull($v_9.firstChild.nodeValue.toString())) {
                            $v_4 = new Array(0);
                            var $v_B = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument($v_9.firstChild.nodeValue.toString());
                            var $v_C = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_B);
                            var $v_D = $v_C.childNodes();
                            if ($v_D.get_count() > 0) {
                                $v_D = $v_D.get_item(0).childNodes();
                                var $v_E = 0;
                                for (var $v_F = 0; $v_F < $v_D.get_count(); $v_F++) {
                                    if ($v_D.get_item($v_F).getAttribute('tostatusid')) {
                                        var $v_G = Number.parseInvariant($v_D.get_item($v_F).getAttribute('tostatusid').toString());
                                        $v_4[$v_E] = $v_G;
                                        $v_E++;
                                    }
                                }
                            }
                        }
                    }
                    break;
                case 'Color':
                    $v_5 = ($v_9.firstChild) ? $v_9.firstChild.nodeValue : null;
                    break;
                case 'InvariantName':
                    $v_6 = $v_9.firstChild.nodeValue;
                    break;
            }
        }
    }
    if ($v_0 === -1) {
    }
    $p0[$p3.toString()] = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_1, $v_0, $v_2, $v_3, $v_4, $v_5, $v_6);
    return $p0;
}


Xrm.Soap.OrganizationRequestCollectionSerializer = function() {
}
Xrm.Soap.OrganizationRequestCollectionSerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Xrm.Sdk.Request))();
    xml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    var $v_1 = xml.selectNodes('c:OrganizationRequest');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        $v_0.add(Xrm.Soap.Serializer.loadFromCrmSoap($v_1.get_item($v_2)));
    }
    return $v_0.toArray();
}
Xrm.Soap.OrganizationRequestCollectionSerializer.toCrmSoap = function(requests) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = requests, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<c:OrganizationRequest i:type=\"a:RetrieveRequest\">');
        $v_0.append('<a:Parameters>');
        $v_0.append(Xrm.Soap.Serializer.parametersToCrmSoap($v_1));
        $v_0.append('</a:Parameters>');
        $v_0.append('<a:RequestName>');
        $v_0.append($v_1.name);
        $v_0.append('</a:RequestName>');
        $v_0.append('</c:OrganizationRequest>');
    }
    return $v_0.toString();
}


Xrm.Soap.Parser = function() {
}
Xrm.Soap.Parser.load = function(T, data, key, serializedType) {
    if (_Script.isNullOrUndefined(serializedType)) {
        serializedType = Xrm.Soap.Parser.$2p(T);
    }
    var $v_0 = Xrm.Soap.Parser.$2f(serializedType);
    if ($v_0) {
        return $v_0(data, key, T);
    }
    var $v_1 = Xrm.Soap.Parser.$M(data, key);
    var $v_2 = null;
    var $v_3 = Xrm.Soap.Serializer.$14(serializedType, 'deserialize');
    if (!$v_3) {
        throw Error.notImplemented('Serializer for ' + serializedType + ' is not implemented');
    }
    else {
        $v_2 = (!_Script.isNullOrUndefined($v_1)) ? $v_3($v_1) : null;
        if (serializedType === 'EntityReference') {
            $v_2 = (!_Script.isNullOrUndefined($v_2) && Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(Xrm.Soap.Parser.$2o(data, key))) ? null : $v_2;
        }
    }
    return $v_2;
}
Xrm.Soap.Parser.$M = function($p0, $p1) {
    return $p0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + $p1 + '\']/b:value');
}
Xrm.Soap.Parser.$2o = function($p0, $p1) {
    var $v_0 = $p0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + $p1 + '\']/b:value/a:LogicalName');
    return (_Script.isNullOrUndefined($v_0)) ? null : $v_0.get_innerText();
}
Xrm.Soap.Parser.$2p = function($p0) {
    var $v_0 = $p0.getName();
    var $v_1 = $v_0.lastIndexOf('.');
    return ($v_1 < 0) ? $v_0 : $v_0.substr($v_1 + 1);
}
Xrm.Soap.Parser.$2f = function($p0) {
    var $v_0 = Xrm.Soap.Parser;
    return (('parse' + $p0) in $v_0) ? $v_0['parse' + $p0] : null;
}
Xrm.Soap.Parser.parseObject = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : {};
}
Xrm.Soap.Parser.parseString = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : $v_0.get_innerText();
}
Xrm.Soap.Parser.$r = function($p0, $p1) {
    var $v_0 = Xrm.Soap.Parser.$M($p0, $p1);
    if (_Script.isNullOrUndefined($v_0)) {
        throw Error.notImplemented();
    }
    else {
        return $v_0.get_innerText();
    }
}
Xrm.Soap.Parser.parseBoolean = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$r(data, key);
    return Boolean.parse($v_0);
}
Xrm.Soap.Parser.parseDate = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    if (_Script.isNullOrUndefined($v_0)) {
        throw Error.notImplemented();
    }
    else {
        return Xrm.Soap.CrmDateTimeSerializer.loadFromCrmSoap($v_0.get_domParserElement());
    }
}
Xrm.Soap.Parser.parseQuery = function(data, key) {
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value/a:Query');
    return (_Script.isNullOrUndefined($v_0)) ? null : $v_0.get_innerText();
}
Xrm.Soap.Parser.parseOptionSet = function(data, key) {
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value/a:Value');
    if (_Script.isNullOrUndefined($v_0)) {
        throw Error.notImplemented();
    }
    else {
        return parseInt($v_0.get_innerText());
    }
}
Xrm.Soap.Parser.parseByteArray = function(data, key) {
    return Xrm.Soap.Parser.$r(data, key);
}
Xrm.Soap.Parser.parseNumber = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$r(data, key);
    return parseInt($v_0);
}
Xrm.Soap.Parser.parseInt64 = function(data, key) {
    return Xrm.Soap.Parser.$r(data, key);
}
Xrm.Soap.Parser.parseGuid = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText());
}
Xrm.Soap.Parser.parseEntityRecord = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    if (!_Script.isNullOrUndefined($v_0)) {
        var $v_1 = $v_0.selectSingleNode('entity');
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_0 = $v_1;
        }
    }
    return Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap($v_0);
}
Xrm.Soap.Parser.parseEntityCollection = function(data, key) {
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value[@i:type=\'a:EntityCollection\']');
    var $v_1 = Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty();
    $v_1.set_pageNumber(Xrm.Soap.Parser.$2q(data));
    return (_Script.isNullOrUndefined($v_0)) ? null : Xrm.Soap.EntityCollectionSerializer.loadFromCrmSoap($v_0, $v_1);
}
Xrm.Soap.Parser.$2q = function($p0) {
    var $v_0 = $p0.get_domParserElement();
    var $v_1 = $v_0.getElementsByTagName('a:EntityName')[0];
    if (!_Script.isNullOrUndefined($v_1) && !_Script.isNullOrUndefined($v_1.childNodes[0]) && $v_1.childNodes[0].textContent === 'knowledgearticle') {
        var $v_2 = $v_0.getElementsByTagName('a:PagingCookie')[0];
        if (!_Script.isNullOrUndefined($v_2) && !_Script.isNullOrUndefined($v_2.childNodes[0])) {
            var $v_3 = $v_2.childNodes[0].textContent;
            var $v_4 = Sys.Net.XMLDOM($v_3);
            var $v_5 = $v_4.documentElement;
            var $v_6 = $v_5.attributes.getNamedItem('page');
            return parseInt($v_6.nodeValue);
        }
    }
    return 1;
}
Xrm.Soap.Parser.parseQueryByEntityName = function(data, key) {
    data.addNamespace('c', 'http://schemas.microsoft.com/crm/2011/Contracts');
    var $v_0 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value[@i:type=\'c:QueryByEntityNameDictionary\']/c:KeyValuePairOfstringQueryBasegUGIFE1S');
    if (_Script.isNullOrUndefined($v_0)) {
        return null;
    }
    return Xrm.Soap.Parser.$3D($v_0);
}
Xrm.Soap.Parser.parseInputArgumentCollection = function(data, key) {
    data.addNamespace('c', 'http://schemas.microsoft.com/crm/2011/Contracts');
    var $v_0 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value[@i:type=\'c:InputArgumentCollection\']/c:Arguments/b:KeyValuePairOfstringanyType');
    if (_Script.isNullOrUndefined($v_0)) {
        return null;
    }
    var $v_1 = {};
    for (var $v_2 = 0; $v_2 < $v_0.get_count(); $v_2++) {
        var $v_3 = $v_0.get_item($v_2).selectSingleNode('b:key');
        var $v_4 = $v_0.get_item($v_2).selectSingleNode('b:value');
        $v_1[$v_3.get_innerText()] = (_Script.isNullOrUndefined($v_4)) ? null : $v_4.get_innerText();
    }
    return $v_1;
}
Xrm.Soap.Parser.parseValidationResult = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : Xrm.Soap.ValidationResultSerializer.loadFromCrmSoap($v_0);
}
Xrm.Soap.Parser.parseBusinessNotificationArray = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap($v_0);
}
Xrm.Soap.Parser.parseEntityReferenceArray = function(data, key) {
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'' + key + '\']/b:value[@i:type=\'a:EntityReferenceCollection\']');
    return (_Script.isNullOrUndefined($v_0)) ? null : Xrm.Soap.EntityReferenceCollectionSerializer.loadFromCrmSoap($v_0);
}
Xrm.Soap.Parser.parseGuidArray = function(data, key) {
    var $v_0 = Xrm.Soap.Parser.$M(data, key);
    return (_Script.isNullOrUndefined($v_0)) ? null : [ new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) ];
}
Xrm.Soap.Parser.parseFlagsEnum = function(data, key, resultType) {
    var $v_0 = Xrm.Soap.Parser.$r(data, key);
    var $v_1 = Microsoft.Crm.Client.Core.Framework._Enum.parseType(resultType, 'None');
    var $v_2 = $v_0.split(' ');
    for (var $$arr_6 = $v_2, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
        var $v_3 = $$arr_6[$$idx_8];
        $v_1 |= Microsoft.Crm.Client.Core.Framework._Enum.parseType(resultType, $v_3);
    }
    return $v_1;
}
Xrm.Soap.Parser.parseEnum = function(data, key, resultType) {
    var $v_0 = Xrm.Soap.Parser.$r(data, key);
    return Microsoft.Crm.Client.Core.Framework._Enum.parseType(resultType, $v_0);
}
Xrm.Soap.Parser.$3D = function($p0) {
    var $v_0 = {};
    for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
        var $v_2 = $p0.get_item($v_1).selectSingleNode('b:key');
        if (!_Script.isNullOrUndefined($v_2)) {
            var $v_3 = $p0.get_item($v_1).selectSingleNode('b:value/a:Query');
            $v_0[$v_2.get_innerText()] = (_Script.isNullOrUndefined($v_3)) ? null : $v_3.get_innerText();
        }
    }
    return $v_0;
}


Xrm.Soap.PrincipalAccessArraySerializer = function() {
}
Xrm.Soap.PrincipalAccessArraySerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = xml.get_domParserElement();
    var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess))();
    for (var $v_2 = 0; $v_2 < $v_0.childNodes.length; $v_2++) {
        var $v_3 = $v_0.childNodes[$v_2];
        var $v_4 = 0;
        var $v_5 = null;
        for (var $v_6 = 0; $v_6 < $v_3.childNodes.length; $v_6++) {
            var $v_7 = $v_3.childNodes[$v_6];
            if ($v_7.namespaceURI === 'http://schemas.microsoft.com/crm/2011/Contracts') {
                switch ($v_7.localName) {
                    case 'AccessMask':
                        $v_4 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Xrm.Gen.AccessRights, $v_7.firstChild.nodeValue);
                        break;
                    case 'Principal':
                        var $v_8 = $v_7;
                        var $v_9 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                        var $v_A = '';
                        for (var $v_B = 0; $v_B < $v_8.childNodes.length; $v_B++) {
                            var $v_C = $v_8.childNodes[$v_B];
                            switch ($v_C.localName) {
                                case 'Id':
                                    $v_9 = new Microsoft.Crm.Client.Core.Framework.Guid($v_C.firstChild.nodeValue);
                                    break;
                                case 'LogicalName':
                                    $v_A = $v_C.firstChild.nodeValue;
                                    break;
                            }
                        }
                        $v_5 = new Xrm.Objects.EntityReference($v_A, $v_9);
                        break;
                }
            }
        }
        $v_1.add(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess($v_5, $v_4));
    }
    return $v_1.toArray();
}


Xrm.Soap.QueryByEntityNameDictionarySerializer = function() {
}
Xrm.Soap.QueryByEntityNameDictionarySerializer.toCrmSoap = function(dictionary) {
    var $v_0 = new Sys.StringBuilder();
    var $$dict_3 = dictionary;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0.append('<c:KeyValuePairOfstringQueryBasegUGIFE1S>');
        $v_0.append('<b:key>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.key) + '</b:key>');
        $v_0.append('<b:value i:type=\"a:FetchExpression\"><a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.value) + '</a:Query></b:value>');
        $v_0.append('</c:KeyValuePairOfstringQueryBasegUGIFE1S>');
    }
    return $v_0.toString();
}


Xrm.Soap.InputArgumentCollectionSerializer = function() {
}
Xrm.Soap.InputArgumentCollectionSerializer.toCrmSoap = function(dictionary) {
    var $v_0 = new Sys.StringBuilder();
    $v_0.append('<c:Arguments>');
    var $$dict_4 = dictionary;
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        var $v_2;
        if (String.isInstanceOfType($v_1.value)) {
            $v_2 = 'string';
        }
        else {
            $v_2 = 'int';
        }
        $v_0.append('<b:KeyValuePairOfstringanyType>');
        $v_0.append('<b:key>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.key) + '</b:key>');
        $v_0.append('<b:value xmlns:c=\"http://www.w3.org/2001/XMLSchema\" i:type=\"c:' + $v_2 + '\">' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.value.toString()) + '</b:value>');
        $v_0.append('</b:KeyValuePairOfstringanyType>');
    }
    $v_0.append('</c:Arguments>');
    return $v_0.toString();
}


Xrm.Soap.QuickFindResultCollectionSerializer = function() {
}
Xrm.Soap.QuickFindResultCollectionSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = new Array(0);
    var $v_1 = xml.selectNodes('a:QuickFindResult');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        var $v_3 = $v_1.get_item($v_2);
        $v_0[$v_0.length] = Xrm.Soap.QuickFindResultSerializer.loadFromCrmSoap($v_3);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection($v_0);
}


Xrm.Soap.QuickFindResultSerializer = function() {
}
Xrm.Soap.QuickFindResultSerializer.loadFromCrmSoap = function(xml) {
    if (xml.get_tagName() === 'a:QuickFindResult') {
        var $v_0 = xml.selectSingleNode('a:Data');
        if ($v_0) {
            var $v_1 = Xrm.Soap.EntityCollectionSerializer.loadFromCrmSoap($v_0, new Microsoft.Crm.Client.Core.Storage.DataApi.Query(''));
            var $v_2 = Number.parseInvariant(xml.selectSingleNode('a:ErrorCode').get_innerText());
            var $v_3 = $v_0.selectSingleNode('a:EntityName').get_innerText();
            return new Xrm.Sdk.QuickFindResult($v_3, $v_1, $v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$17 = function($p0, $p1, $p2) {
    var $v_0 = null;
    if (!_Script.isNullOrUndefined($p2)) {
        $v_0 = new Array($p2.length);
        for (var $v_2 = 0; $v_2 < $p2.length; $v_2++) {
            $v_0[$v_2] = new Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery($p2[$v_2].get_key(), $p0, $p2[$v_2].get_value());
        }
    }
    var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection)))();
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
                var $v_C = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_B.nodeName);
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
        var $v_8 = Xrm.Soap.RelationshipSerializer.loadFromCrmSoapNode($v_6);
        if ($v_8 && $v_7) {
            var $v_D = null;
            if (!_Script.isNullOrUndefined($v_0)) {
                for (var $$arr_H = $v_0, $$len_I = $$arr_H.length, $$idx_J = 0; $$idx_J < $$len_I; ++$$idx_J) {
                    var $v_F = $$arr_H[$$idx_J];
                    if ($v_F.get_relationship().toString() === $v_8.toString()) {
                        $v_D = $v_F;
                        break;
                    }
                }
            }
            var $v_E = Xrm.Soap.EntityCollectionSerializer.$1s($v_7, $v_D);
            $v_1.add(new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))($v_8, $v_E));
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection($v_1.toArray());
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.$2S = function($p0) {
    var $v_0 = '<a:RelatedEntities xmlns:b=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">';
    $v_0 += '</a:RelatedEntities>';
    return $v_0;
}


Xrm.Soap.RelationshipQueryCollectionSerializer = function() {
}
Xrm.Soap.RelationshipQueryCollectionSerializer.toCrmSoap = function(collection) {
    var $v_0 = new Sys.StringBuilder();
    for (var $$arr_2 = collection, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.append('<a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN>');
        $v_0.append('<b:key>');
        if ($v_1.get_key().get_primaryEntityRole() !== -1) {
            $v_0.append('<a:PrimaryEntityRole>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_1.get_key().get_primaryEntityRole()) + '</a:PrimaryEntityRole>');
        }
        $v_0.append('<a:SchemaName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.get_key().get_schemaName()) + '</a:SchemaName>');
        $v_0.append('</b:key>');
        $v_0.append('<b:value i:type=\"a:FetchExpression\"><a:Query>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_1.get_value()) + '</a:Query></b:value>');
        $v_0.append('</a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN>');
    }
    return $v_0.toString();
}
Xrm.Soap.RelationshipQueryCollectionSerializer.loadFromCrmSoap = function(data) {
    var $v_0 = data.selectNodes('a:KeyValuePairOfRelationshipQueryBaseX_PsK4FkN');
    var $v_1 = new Array($v_0.get_count());
    for (var $v_2 = 0; $v_2 < $v_0.get_count(); $v_2++) {
        var $v_3 = $v_0.get_item($v_2).selectSingleNode('b:key/a:SchemaName').get_innerText();
        var $v_4 = $v_0.get_item($v_2).selectSingleNode('b:key/a:PrimaryEntityRole');
        var $v_5 = -1;
        if (!_Script.isNullOrUndefined($v_4)) {
            $v_5 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_4.get_innerText());
        }
        var $v_6 = $v_0.get_item($v_2).selectSingleNode('b:value/a:Query').get_innerText();
        $v_1[$v_2] = new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, String))(new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_3, $v_5), $v_6);
    }
    return $v_1;
}


Xrm.Soap.RelationshipSerializer = function() {
}
Xrm.Soap.RelationshipSerializer.loadFromCrmSoap = function(xml) {
    return Xrm.Soap.RelationshipSerializer.loadFromCrmSoapNode(xml.get_domParserElement());
}
Xrm.Soap.RelationshipSerializer.loadFromCrmSoapNode = function(xml) {
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = -1;
    for (var $v_3 = 0, $v_4 = xml.childNodes.length; $v_3 < $v_4; $v_3++) {
        var $v_5 = xml.childNodes[$v_3];
        if ($v_5.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Contracts' && $v_5.firstChild) {
            var $v_6 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_5.nodeName);
            switch ($v_6) {
                case 'SchemaName':
                    $v_1 = $v_5.firstChild.nodeValue;
                    break;
                case 'PrimaryEntityRole':
                    if ($v_5.getAttribute('i:nil') !== 'true') {
                        $v_2 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, $v_5.firstChild.nodeValue);
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
Xrm.Soap.RelationshipSerializer.toCrmSoap = function(relationship) {
    var $v_0 = '';
    if (!_Script.isNullOrUndefined(relationship.get_primaryEntityRole()) && relationship.get_primaryEntityRole() !== -1) {
        $v_0 += '<a:PrimaryEntityRole>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole, relationship.get_primaryEntityRole()) + '</a:PrimaryEntityRole>';
    }
    $v_0 += '<a:SchemaName>' + Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(relationship.get_schemaName()) + '</a:SchemaName>';
    return $v_0;
}


Xrm.Soap.Serializer = function() {
}
Xrm.Soap.Serializer.parametersToCrmSoap = function(request) {
    var $v_0 = '';
    if (((request.name) in Xrm.Soap.Serializer.$b)) {
        $v_0 = (Xrm.Soap.Serializer.$b[request.name])(request);
    }
    else {
        var $v_1 = Xrm.Soap.Serializer.$14(request.name + 'Request', 'serialize');
        if ($v_1) {
            $v_0 = ($v_1)(request);
        }
    }
    if (!_Script.isNullOrUndefined(request) && !_Script.isNullOrUndefined(request.offlineData) && Microsoft.Crm.Client.Core.Framework._Dictionary.count(request.offlineData) > 0) {
        $v_0 = $v_0 + '<a:KeyValuePairOfstringanyType><b:key>OfflineData</b:key><b:value xmlns:c=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\" i:type=\"c:ArrayOfKeyValueOfstringstring\">';
        var $$dict_4 = request.offlineData;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
            $v_0 = $v_0 + String.format('<c:KeyValueOfstringstring><c:Key>{0}</c:Key><c:Value>{1}</c:Value></c:KeyValueOfstringstring>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode($v_2.key), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(request.offlineData[$v_2.key].toString()));
        }
        $v_0 = $v_0 + '</b:value></a:KeyValuePairOfstringanyType>';
    }
    return $v_0;
}
Xrm.Soap.Serializer.loadFromCrmSoap = function(data) {
    var $v_0 = null;
    if ((($v_0) in Xrm.Soap.Serializer.$p)) {
        return (Xrm.Soap.Serializer.$p[$v_0])(data);
    }
    else {
        var $v_1 = Xrm.Soap.Serializer.$14($v_0 + 'Request', 'deserialize');
        if ($v_1) {
            return ($v_1)(data);
        }
        return null;
    }
}
Xrm.Soap.Serializer.loadFromCrmSoapByName = function(data, name) {
    if (((name) in Xrm.Soap.Serializer.$p)) {
        return (Xrm.Soap.Serializer.$p[name])(data);
    }
    else {
        var $v_0 = Xrm.Soap.Serializer.$14(name + 'Request', 'deserialize');
        if ($v_0) {
            return ($v_0)(data);
        }
        return null;
    }
}
Xrm.Soap.Serializer.addCrmSoapNamespaces = function(soapRequest) {
    soapRequest.addNamespace('s', 'http://schemas.xmlsoap.org/soap/envelope');
    soapRequest.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
    soapRequest.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
    soapRequest.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
    soapRequest.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
}
Xrm.Soap.Serializer.registerSerializer = function(name, serializer) {
    Xrm.Soap.Serializer.$b[name] = serializer;
}
Xrm.Soap.Serializer.registerDeserializer = function(name, deserializer) {
    Xrm.Soap.Serializer.$p[name] = deserializer;
}
Xrm.Soap.Serializer.$14 = function($p0, $p1) {
    var $v_0 = $p0 + 'Serializer';
    var $v_1 = Xrm.Soap.Serializer.$2N[$p1];
    for (var $$arr_4 = Xrm.Soap.Serializer.$2O, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        if ((($v_0) in $v_2)) {
            var $v_3 = $v_2[$v_0];
            if ((($v_1) in $v_3)) {
                return $v_3[$v_1];
            }
        }
    }
    return null;
}






Xrm.Soap.ResourceInfoSerializer = function() {
}
Xrm.Soap.ResourceInfoSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_1 = xml.selectSingleNode('b:Id');
    if ($v_1) {
        $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1.get_innerText());
    }
    var $v_2 = '';
    var $v_3 = xml.selectSingleNode('b:DisplayName');
    if ($v_3) {
        $v_2 = $v_3.get_innerText();
    }
    var $v_4 = '';
    var $v_5 = xml.selectSingleNode('b:EntityName');
    if ($v_5) {
        $v_4 = $v_5.get_innerText();
    }
    return new Xrm.Gen.ResourceInfo($v_0, $v_2, $v_4);
}


Xrm.Soap.ResponseSerializer = function() {
}
Xrm.Soap.ResponseSerializer.registerSerializer = function(name, serializer) {
    Xrm.Soap.ResponseSerializer.$b[name] = serializer;
}
Xrm.Soap.ResponseSerializer.loadFromCrmSoap = function(name, data, request) {
    if (((name) in Xrm.Soap.ResponseSerializer.$b)) {
        return (Xrm.Soap.ResponseSerializer.$b[name])(data, request);
    }
    else {
        var $v_0 = Xrm.Soap.Serializer.$14(name + 'Response', 'deserialize');
        if ($v_0) {
            return ($v_0)(data, request);
        }
        var $v_1 = new Xrm.Sdk.Response();
        $v_1.name = request.name;
        return $v_1;
    }
}
Xrm.Soap.ResponseSerializer.deserialize = function(soapResponse, request, resultsDeserializer) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            return resultsDeserializer($v_0);
        }
    }
    return null;
}
Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces = function(soapResponse) {
    soapResponse.addNamespace('s', 'http://schemas.xmlsoap.org/soap/envelope');
    soapResponse.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
    soapResponse.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
    soapResponse.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
    soapResponse.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
}




Xrm.Soap.SecurityPrivilegeMetadataCollectionSerializer = function() {
}
Xrm.Soap.SecurityPrivilegeMetadataCollectionSerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $v_1 = 0, $v_2 = xml.childNodes.length; $v_1 < $v_2; $v_1++) {
        var $v_3 = xml.childNodes[$v_1];
        var $v_4 = null;
        var $v_5 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
        var $v_6 = 0;
        var $v_7 = false;
        var $v_8 = false;
        var $v_9 = false;
        var $v_A = false;
        for (var $v_B = 0, $v_C = $v_3.childNodes.length; $v_B < $v_C; $v_B++) {
            var $v_D = $v_3.childNodes[$v_B];
            if ($v_D.namespaceURI === 'http://schemas.microsoft.com/xrm/2011/Metadata') {
                var $v_E = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3($v_D.nodeName);
                switch ($v_E) {
                    case 'Name':
                        $v_4 = $v_D.firstChild.nodeValue;
                        break;
                    case 'PrivilegeId':
                        $v_5 = new Microsoft.Crm.Client.Core.Framework.Guid($v_D.firstChild.nodeValue);
                        break;
                    case 'PrivilegeType':
                        $v_6 = Microsoft.Crm.Client.Core.Framework._Enum.parse(Xrm.Gen.PrivilegeType, $v_D.firstChild.nodeValue);
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


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$3 = function($p0) {
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($p0)) {
        return '';
    }
    if ($p0.indexOf(':') < 0) {
        return $p0;
    }
    return $p0.substr($p0.indexOf(':') + 1);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.$12 = function($p0, $p1) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework._Enum.toString($p0, $p1);
    return $v_0.charAt(0).toString().toUpperCase() + $v_0.substr(1);
}


Xrm.Soap.TraceInfoSerializer = function() {
}
Xrm.Soap.TraceInfoSerializer.loadFromCrmSoap = function(xml) {
    if (_Script.isNullOrUndefined(xml)) {
        return null;
    }
    var $v_0 = new Array(0);
    var $v_1 = xml.selectNodes('.//b:ErrorInfo');
    for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
        var $v_3 = $v_1.get_item($v_2);
        $v_0[$v_0.length] = Xrm.Soap.ErrorInfoSerializer.loadFromCrmSoap($v_3);
    }
    return new Xrm.Gen.TraceInfo($v_0);
}


Xrm.Soap.ValidationResultSerializer = function() {
}
Xrm.Soap.ValidationResultSerializer.loadFromCrmSoap = function(xml) {
    var $v_0 = false;
    var $v_1 = null;
    var $v_2 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    if (xml) {
        var $v_3 = xml.getNamespaceOfPrefix('b');
        xml.addNamespace('b', 'http://schemas.microsoft.com/crm/2011/Contracts');
        var $v_4 = xml.selectSingleNode('b:ActivityId');
        if ($v_4) {
            $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid($v_4.get_innerText());
        }
        var $v_5 = xml.selectSingleNode('b:ValidationSuccess');
        if ($v_5) {
            $v_0 = Boolean.parse($v_5.get_innerText());
        }
        var $v_6 = xml.selectSingleNode('b:TraceInfo');
        if ($v_6) {
            $v_1 = Xrm.Soap.TraceInfoSerializer.loadFromCrmSoap($v_6);
        }
        xml.addNamespace('b', $v_3);
    }
    return new Xrm.Gen.ValidationResult($v_0, $v_1, $v_2);
}


Xrm.Soap.Write = function() {
}
Xrm.Soap.Write.f = function(fieldName, value, fieldType, fieldTypeName, namespaceDeclaration) {
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap(fieldName, value, fieldType, fieldTypeName, namespaceDeclaration);
}
Xrm.Soap.Write.iof = function(fieldName, value, fieldType) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    return Xrm.Soap.Write.f(fieldName, value, fieldType);
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated');

Type.registerNamespace('Xrm.Gen');

Xrm.Soap.ConvertKitToProductRequestSerializer = function() {
}
Xrm.Soap.ConvertKitToProductRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ConvertKitToProduct', Xrm.Soap.ConvertKitToProductRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ConvertKitToProduct', Xrm.Soap.ConvertKitToProductRequestSerializer.loadFromCrmSoap);
}
Xrm.Soap.ConvertKitToProductRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('KitId', $v_0.kitId, 15);
}
Xrm.Soap.ConvertKitToProductRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'KitId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    return new Xrm.Gen.ConvertKitToProductRequest($v_1);
}


Xrm.Soap.ConvertProductToKitRequestSerializer = function() {
}
Xrm.Soap.ConvertProductToKitRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ConvertProductToKit', Xrm.Soap.ConvertProductToKitRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ConvertProductToKit', Xrm.Soap.ConvertProductToKitRequestSerializer.loadFromCrmSoap);
}
Xrm.Soap.ConvertProductToKitRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ProductId', $v_0.productId, 15);
}
Xrm.Soap.ConvertProductToKitRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ProductId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    return new Xrm.Gen.ConvertProductToKitRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('CalculateActualValueOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('CalculateActualValueOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('OpportunityId', $v_0.opportunityId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'OpportunityId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    return new Xrm.Sdk.CalculateActualValueOpportunityRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('CalculateActualValueOpportunity', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Value\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? parseFloat($v_1.get_innerText()) : 0;
            return new Xrm.Sdk.CalculateActualValueOpportunityResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.AddItemCampaignRequestSerializer = function() {
}
Xrm.Gen.AddItemCampaignRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('CampaignId', (request).campaignId, 15) + Xrm.Soap.Write.f('EntityId', (request).entityId, 15) + Xrm.Soap.Write.f('EntityName', (request).entityName, 14);
}
Xrm.Gen.AddItemCampaignRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AddItemCampaignRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'CampaignId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'EntityId'), Xrm.Soap.Parser.load(String, data, 'EntityName'));
}


Xrm.Gen.AddItemCampaignResponseSerializer = function() {
}
Xrm.Gen.AddItemCampaignResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.AddItemCampaignResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'CampaignItemId'));
    });
}


Xrm.Gen.CloseQuoteRequestSerializer = function() {
}
Xrm.Gen.CloseQuoteRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QuoteClose', (request).quoteClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.CloseQuoteRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CloseQuoteRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'QuoteClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer = function() {
}
Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ConvertQuoteToSalesOrderResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer = function() {
}
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QuoteId', (request).quoteId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet') + Xrm.Soap.Write.f('QuoteCloseDate', (request).quoteCloseDate, 2) + Xrm.Soap.Write.f('QuoteCloseStatus', (request).quoteCloseStatus, 11) + Xrm.Soap.Write.f('QuoteCloseSubject', (request).quoteCloseSubject, 14) + Xrm.Soap.Write.f('QuoteCloseDescription', (request).quoteCloseDescription, 14) + Xrm.Soap.Write.f('ProcessInstanceId', (request).processInstanceId, 6);
}
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ConvertQuoteToSalesOrderRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QuoteId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'), Xrm.Soap.Parser.load(Date, data, 'QuoteCloseDate'), Xrm.Soap.Parser.load(Number, data, 'QuoteCloseStatus', 'OptionSet'), Xrm.Soap.Parser.load(String, data, 'QuoteCloseSubject'), Xrm.Soap.Parser.load(String, data, 'QuoteCloseDescription'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'ProcessInstanceId'));
}


Xrm.Gen.CalculateTotalTimeIncidentRequestSerializer = function() {
}
Xrm.Gen.CalculateTotalTimeIncidentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('IncidentId', (request).incidentId, 15);
}
Xrm.Gen.CalculateTotalTimeIncidentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CalculateTotalTimeIncidentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'IncidentId'));
}


Xrm.Gen.CalculateTotalTimeIncidentResponseSerializer = function() {
}
Xrm.Gen.CalculateTotalTimeIncidentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CalculateTotalTimeIncidentResponse(Xrm.Soap.Parser.load(String, $p1_0, 'TotalTime', 'Int64'));
    });
}


Xrm.Gen.RetrieveCardDataRequestSerializer = function() {
}
Xrm.Gen.RetrieveCardDataRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('CardTypeId', (request).cardTypeId, 15) + Xrm.Soap.Write.f('AdditionalParameter', (request).additionalParameter, 14);
}
Xrm.Gen.RetrieveCardDataRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveCardDataRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'CardTypeId'), Xrm.Soap.Parser.load(String, data, 'AdditionalParameter'));
}


Xrm.Gen.RetrieveCardDataResponseSerializer = function() {
}
Xrm.Gen.RetrieveCardDataResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveCardDataResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Data'));
    });
}


Xrm.Gen.ToggleGuidedHelpRequestSerializer = function() {
}
Xrm.Gen.ToggleGuidedHelpRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Value', (request).value, 0);
}
Xrm.Gen.ToggleGuidedHelpRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ToggleGuidedHelpRequest(Xrm.Soap.Parser.load(Boolean, data, 'Value'));
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('GetQuantityDecimal', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('GetQuantityDecimal', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ProductId', $v_0.productId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('UoMId', $v_0.uoMId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ProductId\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'UoMId\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_4.get_innerText()) : null;
    return new Xrm.Gen.GetQuantityDecimalRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('GetQuantityDecimal', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Quantity\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = parseInt($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Xrm.Gen.GetQuantityDecimalResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.CanCloseOpportunityRequestSerializer = function() {
}
Xrm.Gen.CanCloseOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('QuoteId', (request).quoteId, 15) + Xrm.Soap.Write.f('NewStatus', (request).newStatus, 5);
}
Xrm.Gen.CanCloseOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CanCloseOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QuoteId'), Xrm.Soap.Parser.load(Number, data, 'NewStatus'));
}


Xrm.Gen.CanCloseOpportunityResponseSerializer = function() {
}
Xrm.Gen.CanCloseOpportunityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CanCloseOpportunityResponse(Xrm.Soap.Parser.load(Boolean, $p1_0, 'CanClose'));
    });
}


Xrm.Gen.ExportTemplateToWordResponseSerializer = function() {
}
Xrm.Gen.ExportTemplateToWordResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExportTemplateToWordResponse(Xrm.Soap.Parser.load(String, $p1_0, 'WordFile', 'ByteArray'));
    });
}


Xrm.Gen.ExportTemplateToWordRequestSerializer = function() {
}
Xrm.Gen.ExportTemplateToWordRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityTypeCode', (request).entityTypeCode, 5) + Xrm.Soap.Write.f('SelectedEntities', (request).selectedEntities, 14);
}
Xrm.Gen.ExportTemplateToWordRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExportTemplateToWordRequest(Xrm.Soap.Parser.load(Number, data, 'EntityTypeCode'), Xrm.Soap.Parser.load(String, data, 'SelectedEntities'));
}


Xrm.Gen.ExportWordDocumentResponseSerializer = function() {
}
Xrm.Gen.ExportWordDocumentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExportWordDocumentResponse(Xrm.Soap.Parser.load(String, $p1_0, 'WordFile', 'ByteArray'));
    });
}


Xrm.Gen.ExportWordDocumentRequestSerializer = function() {
}
Xrm.Gen.ExportWordDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityTypeCode', (request).entityTypeCode, 5) + Xrm.Soap.Write.f('SelectedTemplate', (request).selectedTemplate, 6) + Xrm.Soap.Write.f('SelectedRecords', (request).selectedRecords, 14);
}
Xrm.Gen.ExportWordDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExportWordDocumentRequest(Xrm.Soap.Parser.load(Number, data, 'EntityTypeCode'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'SelectedTemplate'), Xrm.Soap.Parser.load(String, data, 'SelectedRecords'));
}


Xrm.Gen.SetWordTemplateRequestSerializer = function() {
}
Xrm.Gen.SetWordTemplateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('SelectedTemplate', (request).selectedTemplate, 6);
}
Xrm.Gen.SetWordTemplateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetWordTemplateRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'SelectedTemplate'));
}


Xrm.Gen.AddDynamicPropertyRequestSerializer = function() {
}
Xrm.Gen.AddDynamicPropertyRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('DynamicProperty', (request).dynamicProperty, -1, 'a:Entity');
}
Xrm.Gen.AddDynamicPropertyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AddDynamicPropertyRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'DynamicProperty'));
}


Xrm.Gen.AddDynamicPropertyResponseSerializer = function() {
}
Xrm.Gen.AddDynamicPropertyResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.AddDynamicPropertyResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'Id'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'DynamicPropertyId'));
    });
}


Xrm.Gen.AddItemCampaignActivityRequestSerializer = function() {
}
Xrm.Gen.AddItemCampaignActivityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('CampaignActivityId', (request).campaignActivityId, 15) + Xrm.Soap.Write.f('ItemId', (request).itemId, 15) + Xrm.Soap.Write.f('EntityName', (request).entityName, 14);
}
Xrm.Gen.AddItemCampaignActivityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AddItemCampaignActivityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'CampaignActivityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ItemId'), Xrm.Soap.Parser.load(String, data, 'EntityName'));
}


Xrm.Gen.AddItemCampaignActivityResponseSerializer = function() {
}
Xrm.Gen.AddItemCampaignActivityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.AddItemCampaignActivityResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'CampaignActivityItemId'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('AddItem', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('AddItem', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('CampaignId', $v_0.campaignId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('EntityId', $v_0.entityId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ObjectTypeCode', $v_0.objectTypeCode, 5);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CampaignId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityId\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ObjectTypeCode\']/b:value/a:Value');
    var $v_5;
    if (!_Script.isNullOrUndefined($v_4)) {
        $v_5 = parseInt($v_4.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Xrm.Sdk.AddItemRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('AddItem', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CampaignItemId\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            return new Xrm.Sdk.AddItemResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.AddRecurrenceRequestSerializer = function() {
}
Xrm.Gen.AddRecurrenceRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('AppointmentId', (request).appointmentId, 15);
}
Xrm.Gen.AddRecurrenceRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AddRecurrenceRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'AppointmentId'));
}


Xrm.Gen.AddRecurrenceResponseSerializer = function() {
}
Xrm.Gen.AddRecurrenceResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.AddRecurrenceResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'id'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('AddToQueue', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('AddToQueue', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('SourceQueueId', $v_0.sourceQueueId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('DestinationQueueId', $v_0.destinationQueueId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('QueueItemProperties', $v_0.queueItemProperties, -1, 'a:Entity');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SourceQueueId\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DestinationQueueId\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_4.get_innerText()) : null;
    var $v_6 = null;
    var $v_7 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'QueueItemProperties\']/b:value');
    if (!_Script.isNullOrUndefined($v_7)) {
        var $v_8 = $v_7.selectSingleNode('entity');
        if (!_Script.isNullOrUndefined($v_8)) {
            $v_7 = $v_8;
        }
        $v_6 = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap($v_7);
    }
    return new Xrm.Sdk.AddToQueueRequest($v_1, $v_3, $v_5, $v_6);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('AddToQueue', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'QueueItemId\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_1.get_innerText()) : null;
            return new Xrm.Sdk.AddToQueueResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.BestTimeToEmailRequestSerializer = function() {
}
Xrm.Gen.BestTimeToEmailRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityReferenceCollection', (request).entityReferenceCollection, -1, 'a:EntityReferenceCollection');
}
Xrm.Gen.BestTimeToEmailRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.BestTimeToEmailRequest(Xrm.Soap.Parser.load(Array, data, 'EntityReferenceCollection', 'EntityReferenceArray'));
}


Xrm.Gen.BestTimeToEmailResponseSerializer = function() {
}
Xrm.Gen.BestTimeToEmailResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.BestTimeToEmailResponse(Xrm.Soap.Parser.load(Date, $p1_0, 'PreferredTime'));
    });
}


Xrm.Gen.FollowEmailAttachmentRequestSerializer = function() {
}
Xrm.Gen.FollowEmailAttachmentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ActivityMimeAttachmentId', (request).activityMimeAttachmentId, 15);
}
Xrm.Gen.FollowEmailAttachmentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.FollowEmailAttachmentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ActivityMimeAttachmentId'));
}


Xrm.Gen.FollowEmailAttachmentResponseSerializer = function() {
}
Xrm.Gen.FollowEmailAttachmentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.FollowEmailAttachmentResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Response'));
    });
}


Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GenerateQuoteFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer = function() {
}
Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GenerateQuoteFromOpportunityResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GenerateSalesOrderFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.CancelContractRequestSerializer = function() {
}
Xrm.Gen.CancelContractRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ContractId', (request).contractId, 15) + Xrm.Soap.Write.f('CancelDate', (request).cancelDate, 2) + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.CancelContractRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CancelContractRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ContractId'), Xrm.Soap.Parser.load(Date, data, 'CancelDate'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer = function() {
}
Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GenerateSalesOrderFromOpportunityResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GenerateInvoiceFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer = function() {
}
Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GenerateInvoiceFromOpportunityResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.GetRIProvisioningStatusRequestSerializer = function() {
}
Xrm.Gen.GetRIProvisioningStatusRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.GetRIProvisioningStatusRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetRIProvisioningStatusRequest();
}


Xrm.Gen.GetRIProvisioningStatusResponseSerializer = function() {
}
Xrm.Gen.GetRIProvisioningStatusResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetRIProvisioningStatusResponse(Xrm.Soap.Parser.load(String, $p1_0, 'ProvisioningStatus'));
    });
}


Xrm.Gen.GetRITenantEndpointUrlRequestSerializer = function() {
}
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetRITenantEndpointUrlRequest();
}


Xrm.Gen.GetRITenantEndpointUrlResponseSerializer = function() {
}
Xrm.Gen.GetRITenantEndpointUrlResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetRITenantEndpointUrlResponse(Xrm.Soap.Parser.load(String, $p1_0, 'TenantEndpointUrl'));
    });
}


Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer = function() {
}
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.AssignRequestSerializer = function() {
}
Xrm.Gen.AssignRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('Assignee', (request).assignee, 6);
}
Xrm.Gen.AssignRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AssignRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Assignee'));
}


Xrm.Gen.AssociateRequestSerializer = function() {
}
Xrm.Gen.AssociateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('Relationship', (request).relationship, -1, 'a:Relationship') + Xrm.Soap.Write.f('RelatedEntities', (request).relatedEntities, -1, 'a:EntityReferenceCollection');
}
Xrm.Gen.AssociateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AssociateRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, data, 'Relationship'), Xrm.Soap.Parser.load(Array, data, 'RelatedEntities', 'EntityReferenceArray'));
}


Xrm.Gen.CloneContractRequestSerializer = function() {
}
Xrm.Gen.CloneContractRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ContractId', (request).contractId, 15) + Xrm.Soap.Write.f('IncludeCanceledLines', (request).includeCanceledLines, 0);
}
Xrm.Gen.CloneContractRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CloneContractRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ContractId'), Xrm.Soap.Parser.load(Boolean, data, 'IncludeCanceledLines'));
}


Xrm.Gen.CloneContractResponseSerializer = function() {
}
Xrm.Gen.CloneContractResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CloneContractResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.RenewContractRequestSerializer = function() {
}
Xrm.Gen.RenewContractRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ContractId', (request).contractId, 15) + Xrm.Soap.Write.f('Status', (request).status, 5) + Xrm.Soap.Write.f('IncludeCanceledLines', (request).includeCanceledLines, 0);
}
Xrm.Gen.RenewContractRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RenewContractRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ContractId'), Xrm.Soap.Parser.load(Number, data, 'Status'), Xrm.Soap.Parser.load(Boolean, data, 'IncludeCanceledLines'));
}


Xrm.Gen.RenewContractResponseSerializer = function() {
}
Xrm.Gen.RenewContractResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RenewContractResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.RemoveDynamicPropertyRequestSerializer = function() {
}
Xrm.Gen.RemoveDynamicPropertyRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('DynamicProperty', (request).dynamicProperty, 6);
}
Xrm.Gen.RemoveDynamicPropertyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RemoveDynamicPropertyRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'DynamicProperty'));
}


Xrm.Gen.OverrideDynamicPropertyResponseSerializer = function() {
}
Xrm.Gen.OverrideDynamicPropertyResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.OverrideDynamicPropertyResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'Id'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'DynamicPropertyId'));
    });
}


Xrm.Gen.OverrideDynamicPropertyRequestSerializer = function() {
}
Xrm.Gen.OverrideDynamicPropertyRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('DynamicProperty', (request).dynamicProperty, 6);
}
Xrm.Gen.OverrideDynamicPropertyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.OverrideDynamicPropertyRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'DynamicProperty'));
}


Xrm.Gen.OverwriteDynamicPropertyRequestSerializer = function() {
}
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('DynamicProperty', (request).dynamicProperty, 6);
}
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.OverwriteDynamicPropertyRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'DynamicProperty'));
}


Xrm.Gen.OverwriteDynamicPropertyResponseSerializer = function() {
}
Xrm.Gen.OverwriteDynamicPropertyResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.OverwriteDynamicPropertyResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'Id'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'DynamicPropertyId'));
    });
}


Xrm.Gen.FlushMetadataCacheRequestSerializer = function() {
}
Xrm.Gen.FlushMetadataCacheRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.FlushMetadataCacheRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.FlushMetadataCacheRequest();
}


Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer = function() {
}
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('TargetEntityName', (request).targetEntityName, 14) + Xrm.Soap.Write.f('ImportSequenceNumber', (request).importSequenceNumber, 5) + Xrm.Soap.Write.f('ImportId', (request).importId, 15) + Xrm.Soap.Write.f('DeleteImportHistory', (request).deleteImportHistory, 0) + Xrm.Soap.Write.f('JobName', (request).jobName, 14) + Xrm.Soap.Write.f('SendEmailNotification', (request).sendEmailNotification, 0) + Xrm.Soap.Write.f('ToRecipients', (request).toRecipients, 14) + Xrm.Soap.Write.f('CCRecipients', (request).ccRecipients, 14) + Xrm.Soap.Write.f('RecurrencePattern', (request).recurrencePattern, 14) + Xrm.Soap.Write.f('SourceImportId', (request).sourceImportId, 15);
}
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.BulkDeleteImportedRecordsRequest(Xrm.Soap.Parser.load(String, data, 'TargetEntityName'), Xrm.Soap.Parser.load(Number, data, 'ImportSequenceNumber'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ImportId'), Xrm.Soap.Parser.load(Boolean, data, 'DeleteImportHistory'), Xrm.Soap.Parser.load(String, data, 'JobName'), Xrm.Soap.Parser.load(Boolean, data, 'SendEmailNotification'), Xrm.Soap.Parser.load(String, data, 'ToRecipients'), Xrm.Soap.Parser.load(String, data, 'CCRecipients'), Xrm.Soap.Parser.load(String, data, 'RecurrencePattern'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'SourceImportId'));
}


Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer = function() {
}
Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.BulkDeleteImportedRecordsResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'JobId'));
    });
}


Xrm.Gen.BookRequestSerializer = function() {
}
Xrm.Gen.BookRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('MaintainLegacyAppServerBehavior', (request).maintainLegacyAppServerBehavior, 0) + Xrm.Soap.Write.f('ReturnNotifications', (request).returnNotifications, 0);
}
Xrm.Gen.BookRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.BookRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Boolean, data, 'MaintainLegacyAppServerBehavior'), Xrm.Soap.Parser.load(Boolean, data, 'ReturnNotifications'));
}


Xrm.Gen.BookResponseSerializer = function() {
}
Xrm.Gen.BookResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        soapResponse.addNamespace('b', 'http://schemas.microsoft.com/crm/2011/Contracts');
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'ValidationResult\']/c:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? Xrm.Soap.ValidationResultSerializer.loadFromCrmSoap($v_1) : null;
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Notifications\']/c:value');
            var $v_4 = (!_Script.isNullOrUndefined($v_3)) ? Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap($v_3) : null;
            return new Xrm.Gen.BookResponse($v_2, $v_4);
        }
    }
    return null;
}


Xrm.Gen.CreateAndAssociateRequestSerializer = function() {
}
Xrm.Gen.CreateAndAssociateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 15) + Xrm.Soap.Write.f('RegardingObjectTypeCode', (request).regardingObjectTypeCode, 5) + Xrm.Soap.Write.f('AssociationRelationshipName', (request).associationRelationshipName, 14) + Xrm.Soap.Write.f('Article', (request).article, -1, 'a:Entity');
}
Xrm.Gen.CreateAndAssociateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateAndAssociateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(Number, data, 'RegardingObjectTypeCode'), Xrm.Soap.Parser.load(String, data, 'AssociationRelationshipName'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Article'));
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('AssociateKnowledgeArticle', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('AssociateKnowledgeArticle', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RegardingObjectId', $v_0.regardingObjectId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RegardingObjectTypeCode', $v_0.regardingObjectTypeCode, 5) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('AssociationRelationshipName', $v_0.associationRelationshipName, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('KnowledgeArticleId', $v_0.knowledgeArticleId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectTypeCode\']/b:value');
    var $v_3;
    if (!_Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AssociationRelationshipName\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'KnowledgeArticleId\']/b:value');
    var $v_7 = (!_Script.isNullOrUndefined($v_6)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_6.get_innerText()) : null;
    return new Xrm.Sdk.AssociateKnowledgeArticleRequest($v_1, $v_3, $v_5, $v_7);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('DisassociateKnowledgeArticle', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('DisassociateKnowledgeArticle', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RegardingObjectId', $v_0.regardingObjectId, 15) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RegardingObjectTypeCode', $v_0.regardingObjectTypeCode, 5) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('AssociationRelationshipName', $v_0.associationRelationshipName, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('KnowledgeArticleId', $v_0.knowledgeArticleId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_0.get_innerText()) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectTypeCode\']/b:value');
    var $v_3;
    if (!_Script.isNullOrUndefined($v_2)) {
        $v_3 = parseInt($v_2.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AssociationRelationshipName\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? $v_4.get_innerText() : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'KnowledgeArticleId\']/b:value');
    var $v_7 = (!_Script.isNullOrUndefined($v_6)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_6.get_innerText()) : null;
    return new Xrm.Sdk.DisassociateKnowledgeArticleRequest($v_1, $v_3, $v_5, $v_7);
}


Xrm.Gen.CancelSalesOrderRequestSerializer = function() {
}
Xrm.Gen.CancelSalesOrderRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OrderClose', (request).orderClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.CancelSalesOrderRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CancelSalesOrderRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'OrderClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.CloneProductRequestSerializer = function() {
}
Xrm.Gen.CloneProductRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Source', (request).source, 6);
}
Xrm.Gen.CloneProductRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CloneProductRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Source'));
}


Xrm.Gen.CloneProductResponseSerializer = function() {
}
Xrm.Gen.CloneProductResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CloneProductResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'ClonedProduct'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('CloneMobileOfflineProfile', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('CloneMobileOfflineProfile', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Source', $v_0.source, 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Source\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    return new Xrm.Gen.CloneMobileOfflineProfileRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('CloneMobileOfflineProfile', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'CloneMobileOfflineProfile\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_1) : null;
            return new Xrm.Gen.CloneMobileOfflineProfileResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.CheckInDocumentRequestSerializer = function() {
}
Xrm.Gen.CheckInDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entity', (request).entity, -1, 'a:Entity') + Xrm.Soap.Write.f('CheckInComments', (request).checkInComments, 14) + Xrm.Soap.Write.f('RetainCheckout', (request).retainCheckout, 0);
}
Xrm.Gen.CheckInDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CheckInDocumentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Entity'), Xrm.Soap.Parser.load(String, data, 'CheckInComments'), Xrm.Soap.Parser.load(Boolean, data, 'RetainCheckout'));
}


Xrm.Gen.CheckoutDocumentRequestSerializer = function() {
}
Xrm.Gen.CheckoutDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entity', (request).entity, -1, 'a:Entity');
}
Xrm.Gen.CheckoutDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CheckoutDocumentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Entity'));
}


Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer = function() {
}
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SalesOrderId', (request).salesOrderId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ConvertSalesOrderToInvoiceRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'SalesOrderId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer = function() {
}
Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ConvertSalesOrderToInvoiceResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.ExecuteWorkflowRequestSerializer = function() {
}
Xrm.Gen.ExecuteWorkflowRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityId', (request).entityId, 15) + Xrm.Soap.Write.f('WorkflowId', (request).workflowId, 15) + Xrm.Soap.Write.f('InputArguments', (request).inputArguments, -1, 'c:InputArgumentCollection', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.ExecuteWorkflowRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExecuteWorkflowRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'EntityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'WorkflowId'), Xrm.Soap.Parser.load(Object, data, 'InputArguments', 'InputArgumentCollection'));
}


Xrm.Gen.ExecuteWorkflowResponseSerializer = function() {
}
Xrm.Gen.ExecuteWorkflowResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExecuteWorkflowResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'Id'));
    });
}


Xrm.Gen.GetActualDateResponseSerializer = function() {
}
Xrm.Gen.GetActualDateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetActualDateResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Result'));
    });
}


Xrm.Gen.GetActualDateRequestSerializer = function() {
}
Xrm.Gen.GetActualDateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Date', (request).date, 14);
}
Xrm.Gen.GetActualDateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetActualDateRequest(Xrm.Soap.Parser.load(String, data, 'Date'));
}


Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer = function() {
}
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveUserDefaultCurrencyRequest();
}


Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer = function() {
}
Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveUserDefaultCurrencyResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'Currency'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('GetDataForTopicWordCloud', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('GetDataForTopicWordCloud', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Filter', $v_0.filter, 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Filter\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    return new Xrm.Gen.GetDataForTopicWordCloudRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('GetDataForTopicWordCloud', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Topics\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Xrm.Gen.GetDataForTopicWordCloudResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.GetEntitiesForAzureMLRequestSerializer = function() {
}
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Filter', (request).filter, 14);
}
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetEntitiesForAzureMLRequest(Xrm.Soap.Parser.load(String, data, 'Filter'));
}


Xrm.Gen.GetEntitiesForAzureMLResponseSerializer = function() {
}
Xrm.Gen.GetEntitiesForAzureMLResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetEntitiesForAzureMLResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Result'));
    });
}


Xrm.Gen.GetFieldListForAzureMLRequestSerializer = function() {
}
Xrm.Gen.GetFieldListForAzureMLRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityName', (request).entityName, 14) + Xrm.Soap.Write.f('Filter', (request).filter, 14);
}
Xrm.Gen.GetFieldListForAzureMLRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetFieldListForAzureMLRequest(Xrm.Soap.Parser.load(String, data, 'EntityName'), Xrm.Soap.Parser.load(String, data, 'Filter'));
}


Xrm.Gen.GetFieldListForAzureMLResponseSerializer = function() {
}
Xrm.Gen.GetFieldListForAzureMLResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetFieldListForAzureMLResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Result'));
    });
}


Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer = function() {
}
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityName', (request).entityName, 14) + Xrm.Soap.Write.f('Filter', (request).filter, 14);
}
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetRelationshipsForAzureMLRequest(Xrm.Soap.Parser.load(String, data, 'EntityName'), Xrm.Soap.Parser.load(String, data, 'Filter'));
}


Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer = function() {
}
Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetRelationshipsForAzureMLResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Result'));
    });
}


Xrm.Gen.GetTrackingTokenEmailRequestSerializer = function() {
}
Xrm.Gen.GetTrackingTokenEmailRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Subject', (request).subject, 14);
}
Xrm.Gen.GetTrackingTokenEmailRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetTrackingTokenEmailRequest(Xrm.Soap.Parser.load(String, data, 'Subject'));
}


Xrm.Gen.GetTrackingTokenEmailResponseSerializer = function() {
}
Xrm.Gen.GetTrackingTokenEmailResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetTrackingTokenEmailResponse(Xrm.Soap.Parser.load(String, $p1_0, 'TrackingToken'));
    });
}


Xrm.Gen.CopyDynamicListToStaticRequestSerializer = function() {
}
Xrm.Gen.CopyDynamicListToStaticRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ListId', (request).listId, 15);
}
Xrm.Gen.CopyDynamicListToStaticRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CopyDynamicListToStaticRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ListId'));
}


Xrm.Gen.CopyDynamicListToStaticResponseSerializer = function() {
}
Xrm.Gen.CopyDynamicListToStaticResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CopyDynamicListToStaticResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'StaticListId'));
    });
}


Xrm.Gen.DeleteOpenInstancesRequestSerializer = function() {
}
Xrm.Gen.DeleteOpenInstancesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('SeriesEndDate', (request).seriesEndDate, 2) + Xrm.Soap.Write.f('StateOfPastInstances', (request).stateOfPastInstances, 5);
}
Xrm.Gen.DeleteOpenInstancesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.DeleteOpenInstancesRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Date, data, 'SeriesEndDate'), Xrm.Soap.Parser.load(Number, data, 'StateOfPastInstances'));
}


Xrm.Gen.NewDocumentRequestSerializer = function() {
}
Xrm.Gen.NewDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('FileName', (request).fileName, 14) + Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 14) + Xrm.Soap.Write.f('RegardingObjectTypeCode', (request).regardingObjectTypeCode, 14) + Xrm.Soap.Write.f('LocationId', (request).locationId, 14);
}
Xrm.Gen.NewDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.NewDocumentRequest(Xrm.Soap.Parser.load(String, data, 'FileName'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectTypeCode'), Xrm.Soap.Parser.load(String, data, 'LocationId'));
}


Xrm.Gen.NewDocumentResponseSerializer = function() {
}
Xrm.Gen.NewDocumentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.NewDocumentResponse(Xrm.Soap.Parser.load(String, $p1_0, 'EditLink'));
    });
}


Xrm.Gen.ReleaseToQueueRequestSerializer = function() {
}
Xrm.Gen.ReleaseToQueueRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QueueItemId', (request).queueItemId, 15);
}
Xrm.Gen.ReleaseToQueueRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ReleaseToQueueRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueueItemId'));
}


Xrm.Gen.RemoveFromQueueRequestSerializer = function() {
}
Xrm.Gen.RemoveFromQueueRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QueueItemId', (request).queueItemId, 15);
}
Xrm.Gen.RemoveFromQueueRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RemoveFromQueueRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueueItemId'));
}


Xrm.Gen.SendFaxRequestSerializer = function() {
}
Xrm.Gen.SendFaxRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('FaxId', (request).faxId, 15) + Xrm.Soap.Write.f('IssueSend', (request).issueSend, 0);
}
Xrm.Gen.SendFaxRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SendFaxRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'FaxId'), Xrm.Soap.Parser.load(Boolean, data, 'IssueSend'));
}


Xrm.Gen.SetBusinessSystemUserRequestSerializer = function() {
}
Xrm.Gen.SetBusinessSystemUserRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('UserId', (request).userId, 15) + Xrm.Soap.Write.f('BusinessId', (request).businessId, 15) + Xrm.Soap.Write.f('ReassignPrincipal', (request).reassignPrincipal, 6);
}
Xrm.Gen.SetBusinessSystemUserRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetBusinessSystemUserRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'UserId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'BusinessId'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'ReassignPrincipal'));
}


Xrm.Gen.CloseIncidentRequestSerializer = function() {
}
Xrm.Gen.CloseIncidentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('IncidentResolution', (request).incidentResolution, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.CloseIncidentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CloseIncidentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'IncidentResolution'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.ConvertActivityRequestSerializer = function() {
}
Xrm.Gen.ConvertActivityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ActivityId', (request).activityId, 15) + Xrm.Soap.Write.f('ActivityEntityName', (request).activityEntityName, 14) + Xrm.Soap.Write.f('TargetEntity', (request).targetEntity, -1, 'a:Entity') + Xrm.Soap.Write.f('TargetEntityName', (request).targetEntityName, 14) + Xrm.Soap.Write.f('CreateCampaignResponse', (request).createCampaignResponse, 0);
}
Xrm.Gen.ConvertActivityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ConvertActivityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ActivityId'), Xrm.Soap.Parser.load(String, data, 'ActivityEntityName'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'TargetEntity'), Xrm.Soap.Parser.load(String, data, 'TargetEntityName'), Xrm.Soap.Parser.load(Boolean, data, 'CreateCampaignResponse'));
}


Xrm.Gen.ConvertActivityResponseSerializer = function() {
}
Xrm.Gen.ConvertActivityResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ConvertActivityResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'RecordId'));
    });
}


Xrm.Gen.CreateFolderRequestSerializer = function() {
}
Xrm.Gen.CreateFolderRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('FolderName', (request).folderName, 14) + Xrm.Soap.Write.f('RegardingObjectType', (request).regardingObjectType, 5) + Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 14) + Xrm.Soap.Write.f('DocumentType', (request).documentType, 5) + Xrm.Soap.Write.f('ParentLocationId', (request).parentLocationId, 14) + Xrm.Soap.Write.f('SiteType', (request).siteType, 5) + Xrm.Soap.Write.f('ValidateFolder', (request).validateFolder, 0);
}
Xrm.Gen.CreateFolderRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateFolderRequest(Xrm.Soap.Parser.load(String, data, 'FolderName'), Xrm.Soap.Parser.load(Number, data, 'RegardingObjectType'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(Number, data, 'DocumentType'), Xrm.Soap.Parser.load(String, data, 'ParentLocationId'), Xrm.Soap.Parser.load(Number, data, 'SiteType'), Xrm.Soap.Parser.load(Boolean, data, 'ValidateFolder'));
}


Xrm.Gen.CreateFolderResponseSerializer = function() {
}
Xrm.Gen.CreateFolderResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateFolderResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'LocationId'));
    });
}


Xrm.Gen.SearchDocumentRequestSerializer = function() {
}
Xrm.Gen.SearchDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObjectType', (request).regardingObjectType, 5) + Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 14) + Xrm.Soap.Write.f('DocumentId', (request).documentId, 14);
}
Xrm.Gen.SearchDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SearchDocumentRequest(Xrm.Soap.Parser.load(Number, data, 'RegardingObjectType'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(String, data, 'DocumentId'));
}


Xrm.Gen.SearchDocumentResponseSerializer = function() {
}
Xrm.Gen.SearchDocumentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.SearchDocumentResponse(Xrm.Soap.Parser.load(String, $p1_0, 'SearchLocation'), Xrm.Soap.Parser.load(String, $p1_0, 'DocumentLocation'));
    });
}


Xrm.Gen.SendEmailRequestSerializer = function() {
}
Xrm.Gen.SendEmailRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EmailId', (request).emailId, 15) + Xrm.Soap.Write.f('IssueSend', (request).issueSend, 0) + Xrm.Soap.Write.f('TrackingToken', (request).trackingToken, 14);
}
Xrm.Gen.SendEmailRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SendEmailRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'EmailId'), Xrm.Soap.Parser.load(Boolean, data, 'IssueSend'), Xrm.Soap.Parser.load(String, data, 'TrackingToken'));
}


Xrm.Gen.SendEmailResponseSerializer = function() {
}
Xrm.Gen.SendEmailResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.SendEmailResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Subject'));
    });
}


Xrm.Gen.SetBusinessEquipmentRequestSerializer = function() {
}
Xrm.Gen.SetBusinessEquipmentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EquipmentId', (request).equipmentId, 15) + Xrm.Soap.Write.f('BusinessUnitId', (request).businessUnitId, 15);
}
Xrm.Gen.SetBusinessEquipmentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetBusinessEquipmentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'EquipmentId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'BusinessUnitId'));
}


Xrm.Gen.SetParentBusinessUnitRequestSerializer = function() {
}
Xrm.Gen.SetParentBusinessUnitRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('BusinessUnitId', (request).businessUnitId, 15) + Xrm.Soap.Write.f('ParentId', (request).parentId, 15);
}
Xrm.Gen.SetParentBusinessUnitRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetParentBusinessUnitRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'BusinessUnitId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ParentId'));
}


Xrm.Gen.SetParentTeamRequestSerializer = function() {
}
Xrm.Gen.SetParentTeamRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('TeamId', (request).teamId, 15) + Xrm.Soap.Write.f('BusinessId', (request).businessId, 15);
}
Xrm.Gen.SetParentTeamRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetParentTeamRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'TeamId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'BusinessId'));
}


Xrm.Gen.CreateDocumentLibrariesRequestSerializer = function() {
}
Xrm.Gen.CreateDocumentLibrariesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('DocumentLibraryNames', (request).documentLibraryNames, 14) + Xrm.Soap.Write.f('Url', (request).url, 14);
}
Xrm.Gen.CreateDocumentLibrariesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateDocumentLibrariesRequest(Xrm.Soap.Parser.load(String, data, 'DocumentLibraryNames'), Xrm.Soap.Parser.load(String, data, 'Url'));
}


Xrm.Gen.CreateDocumentLibrariesResponseSerializer = function() {
}
Xrm.Gen.CreateDocumentLibrariesResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateDocumentLibrariesResponse(Xrm.Soap.Parser.load(String, $p1_0, 'DocumentLibraryResult'));
    });
}


Xrm.Gen.UnfollowEmailAttachmentRequestSerializer = function() {
}
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ActivityMimeAttachmentId', (request).activityMimeAttachmentId, 15);
}
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UnfollowEmailAttachmentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ActivityMimeAttachmentId'));
}


Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer = function() {
}
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('TrackingId', (request).trackingId, 15) + Xrm.Soap.Write.f('ConversationTrackingId', (request).conversationTrackingId, 15) + Xrm.Soap.Write.f('ClientType', (request).clientType, 14) + Xrm.Soap.Write.f('EmailLinkUrls', (request).emailLinkUrls, -1, 'sa:ArrayOfstring', 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"');
}
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetEmailLinkTrackingUrlsRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'TrackingId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ConversationTrackingId'), Xrm.Soap.Parser.load(String, data, 'ClientType'), Xrm.Soap.Parser.load(Array, data, 'EmailLinkUrls', 'StringArray'));
}


Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer = function() {
}
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('TrackingId', (request).trackingId, 15) + Xrm.Soap.Write.f('ConversationTrackingId', (request).conversationTrackingId, 15) + Xrm.Soap.Write.f('ClientType', (request).clientType, 14);
}
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetEmailTrackingPixelUrlRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'TrackingId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ConversationTrackingId'), Xrm.Soap.Parser.load(String, data, 'ClientType'));
}


Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer = function() {
}
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SiteCollection', (request).siteCollection, 14) + Xrm.Soap.Write.f('FolderStructureEntity', (request).folderStructureEntity, 5) + Xrm.Soap.Write.f('EntityDocMgmtXml', (request).entityDocMgmtXml, 14) + Xrm.Soap.Write.f('ValidateStatus', (request).validateStatus, 5) + Xrm.Soap.Write.f('ValidateStatusReason', (request).validateStatusReason, 5);
}
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateDocumentManagementSettingsRequest(Xrm.Soap.Parser.load(String, data, 'SiteCollection'), Xrm.Soap.Parser.load(Number, data, 'FolderStructureEntity'), Xrm.Soap.Parser.load(String, data, 'EntityDocMgmtXml'), Xrm.Soap.Parser.load(Number, data, 'ValidateStatus'), Xrm.Soap.Parser.load(Number, data, 'ValidateStatusReason'));
}


Xrm.Gen.MigrateToS2SRequestSerializer = function() {
}
Xrm.Gen.MigrateToS2SRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SiteUrl', (request).siteUrl, 14) + Xrm.Soap.Write.f('EnableOneDrive', (request).enableOneDrive, 0);
}
Xrm.Gen.MigrateToS2SRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.MigrateToS2SRequest(Xrm.Soap.Parser.load(String, data, 'SiteUrl'), Xrm.Soap.Parser.load(Boolean, data, 'EnableOneDrive'));
}


Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer = function() {
}
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SharePointRealm', (request).sharePointRealm, 14) + Xrm.Soap.Write.f('IsSharePointOnline', (request).isSharePointOnline, 0) + Xrm.Soap.Write.f('UseAuthorizationServer', (request).useAuthorizationServer, 0);
}
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateGlobalSharePointSettingsRequest(Xrm.Soap.Parser.load(String, data, 'SharePointRealm'), Xrm.Soap.Parser.load(Boolean, data, 'IsSharePointOnline'), Xrm.Soap.Parser.load(Boolean, data, 'UseAuthorizationServer'));
}


Xrm.Gen.RetrieveAttributeListRequestSerializer = function() {
}
Xrm.Gen.RetrieveAttributeListRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObjectTypeCode', (request).regardingObjectTypeCode, 5);
}
Xrm.Gen.RetrieveAttributeListRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveAttributeListRequest(Xrm.Soap.Parser.load(Number, data, 'RegardingObjectTypeCode'));
}


Xrm.Gen.RetrieveAttributeListResponseSerializer = function() {
}
Xrm.Gen.RetrieveAttributeListResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveAttributeListResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Result'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ShouldDisplaySLALimitNotification', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ShouldDisplaySLALimitNotification', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RegardingObjectTypeCode', $v_0.regardingObjectTypeCode, 5);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RegardingObjectTypeCode\']/b:value');
    var $v_1;
    if (!_Script.isNullOrUndefined($v_0)) {
        $v_1 = parseInt($v_0.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Xrm.Gen.ShouldDisplaySLALimitNotificationRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('ShouldDisplaySLALimitNotification', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Result\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Boolean.parse($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Xrm.Gen.ShouldDisplaySLALimitNotificationResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer = function() {
}
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveSharePointGlobalSettingsRequest();
}


Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer = function() {
}
Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveSharePointGlobalSettingsResponse(Xrm.Soap.Parser.load(String, $p1_0, 'SharePointGlobalSetting'));
    });
}


Xrm.Gen.UpgradeToS2SRequestSerializer = function() {
}
Xrm.Gen.UpgradeToS2SRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.UpgradeToS2SRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpgradeToS2SRequest();
}


Xrm.Gen.ValidateUrlRequestSerializer = function() {
}
Xrm.Gen.ValidateUrlRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SharePointUrls', (request).sharePointUrls, 14);
}
Xrm.Gen.ValidateUrlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ValidateUrlRequest(Xrm.Soap.Parser.load(String, data, 'SharePointUrls'));
}


Xrm.Gen.ValidateUrlResponseSerializer = function() {
}
Xrm.Gen.ValidateUrlResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ValidateUrlResponse(Xrm.Soap.Parser.load(String, $p1_0, 'UrlValidationResult'));
    });
}


Xrm.Gen.AssignAllRecordsTeamRequestSerializer = function() {
}
Xrm.Gen.AssignAllRecordsTeamRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OldOwnerId', (request).oldOwnerId, 15) + Xrm.Soap.Write.f('OldOwnerType', (request).oldOwnerType, 5) + Xrm.Soap.Write.f('NewOwnerId', (request).newOwnerId, 15) + Xrm.Soap.Write.f('NewOwnerType', (request).newOwnerType, 5);
}
Xrm.Gen.AssignAllRecordsTeamRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AssignAllRecordsTeamRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OldOwnerId'), Xrm.Soap.Parser.load(Number, data, 'OldOwnerType'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'NewOwnerId'), Xrm.Soap.Parser.load(Number, data, 'NewOwnerType'));
}


Xrm.Gen.CreateRequestSerializer = function() {
}
Xrm.Gen.CreateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('SuppressDuplicateDetection', (request).suppressDuplicateDetection, 0) + Xrm.Soap.Write.f('CalculateMatchCodeSynchronously', (request).calculateMatchCodeSynchronously, 0) + Xrm.Soap.Write.f('SolutionUniqueName', (request).solutionUniqueName, 14) + Xrm.Soap.Write.f('MaintainLegacyAppServerBehavior', (request).maintainLegacyAppServerBehavior, 0) + Xrm.Soap.Write.f('ReturnRowVersion', (request).returnRowVersion, 0);
}
Xrm.Gen.CreateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Boolean, data, 'SuppressDuplicateDetection'), Xrm.Soap.Parser.load(Boolean, data, 'CalculateMatchCodeSynchronously'), Xrm.Soap.Parser.load(String, data, 'SolutionUniqueName'), Xrm.Soap.Parser.load(Boolean, data, 'MaintainLegacyAppServerBehavior'), Xrm.Soap.Parser.load(Boolean, data, 'ReturnRowVersion'));
}


Xrm.Gen.CreateResponseSerializer = function() {
}
Xrm.Gen.CreateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'id'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'EntityReference'));
    });
}


Xrm.Gen.DeleteDocumentRequestSerializer = function() {
}
Xrm.Gen.DeleteDocumentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entities', (request).entities, -1, 'a:EntityCollection');
}
Xrm.Gen.DeleteDocumentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.DeleteDocumentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, data, 'Entities'));
}


Xrm.Gen.DeleteRequestSerializer = function() {
}
Xrm.Gen.DeleteRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('SolutionUniqueName', (request).solutionUniqueName, 14) + Xrm.Soap.Write.f('ConcurrencyBehavior', (request).concurrencyBehavior, -1, 'c:ConcurrencyBehavior', 'xmlns:c=\"http://schemas.microsoft.com/xrm/7.1/Contracts\"');
}
Xrm.Gen.DeleteRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.DeleteRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(String, data, 'SolutionUniqueName'), Xrm.Soap.Parser.load(Xrm.Gen.ConcurrencyBehavior, data, 'ConcurrencyBehavior', 'Enum'));
}


Xrm.Gen.DisassociateRequestSerializer = function() {
}
Xrm.Gen.DisassociateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('Relationship', (request).relationship, -1, 'a:Relationship') + Xrm.Soap.Write.f('RelatedEntities', (request).relatedEntities, -1, 'a:EntityReferenceCollection');
}
Xrm.Gen.DisassociateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.DisassociateRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, data, 'Relationship'), Xrm.Soap.Parser.load(Array, data, 'RelatedEntities', 'EntityReferenceArray'));
}


Xrm.Gen.DiscardDocumentCheckoutRequestSerializer = function() {
}
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entity', (request).entity, -1, 'a:Entity');
}
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.DiscardDocumentCheckoutRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Entity'));
}


Xrm.Gen.EditDocumentPropertiesRequestSerializer = function() {
}
Xrm.Gen.EditDocumentPropertiesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entity', (request).entity, -1, 'a:Entity');
}
Xrm.Gen.EditDocumentPropertiesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.EditDocumentPropertiesRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Entity'));
}


Xrm.Gen.ExecuteMultipleRequestSerializer = function() {
}
Xrm.Gen.ExecuteMultipleRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ExecuteMultiple', Xrm.Gen.ExecuteMultipleRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ExecuteMultiple', Xrm.Gen.ExecuteMultipleRequestSerializer.loadFromCrmSoap);
}
Xrm.Gen.ExecuteMultipleRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Requests', $v_0.requests, -1, 'c:OrganizationRequestCollection', 'xmlns:c=\"http://schemas.microsoft.com/xrm/2012/Contracts\"') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Settings', $v_0.settings, -1, 'c:ExecuteMultipleSettings', 'xmlns:c=\"http://schemas.microsoft.com/xrm/2012/Contracts\"');
}
Xrm.Gen.ExecuteMultipleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Requests\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.OrganizationRequestCollectionSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Settings\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? Xrm.Soap.ExecuteMultipleSettingsSerializer.loadFromCrmSoap($v_2) : null;
    return new Xrm.Gen.ExecuteMultipleRequest($v_1, $v_3);
}


Xrm.Gen.ExecuteMultipleResponseSerializer = function() {
}
Xrm.Gen.ExecuteMultipleResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('ExecuteMultiple', Xrm.Gen.ExecuteMultipleResponseSerializer.loadFromCrmSoap);
}
Xrm.Gen.ExecuteMultipleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'IsFaulted\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Boolean.parse($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Responses\']/b:value');
            var $v_4 = (!_Script.isNullOrUndefined($v_3)) ? Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer.loadFromCrmSoap($v_3, request) : null;
            return new Xrm.Gen.ExecuteMultipleResponse($v_2, $v_4);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('SearchText', $v_0.searchText, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('EntityGroupName', $v_0.entityGroupName, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('EntityNames', $v_0.entityNames, -1, 'sa:ArrayOfstring', 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'SearchText\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityGroupName\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'EntityNames\']/b:value/sa:string');
    var $v_5 = null;
    if (!_Script.isNullOrUndefined($v_4)) {
        $v_5 = new Array($v_4.get_count());
        for (var $v_6 = 0; $v_6 < $v_4.get_count(); $v_6++) {
            $v_5[$v_6] = $v_4.get_item($v_6).get_innerText();
        }
    }
    return new Xrm.Sdk.ExecuteQuickFindRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('ExecuteQuickFind', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        soapResponse.addNamespace('c', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        var $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[c:key=\'Result\']/c:value[@i:type=\'a:QuickFindResultCollection\']');
            if (!_Script.isNullOrUndefined($v_1)) {
                var $v_2 = Xrm.Soap.QuickFindResultCollectionSerializer.loadFromCrmSoap($v_1);
                return new Xrm.Sdk.ExecuteQuickFindResponse($v_2);
            }
        }
    }
    return null;
}


Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer = function() {
}
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Template', (request).template, 6) + Xrm.Soap.Write.f('FetchXml', (request).fetchXml, 14) + Xrm.Soap.Write.f('QueryApi', (request).queryApi, 14) + Xrm.Soap.Write.f('QueryParameters', (request).queryParameters, -1, 'c:InputArgumentCollection', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExportTemplateToExcelOnlineRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Template'), Xrm.Soap.Parser.load(String, data, 'FetchXml'), Xrm.Soap.Parser.load(String, data, 'QueryApi'), Xrm.Soap.Parser.load(Object, data, 'QueryParameters', 'InputArgumentCollection'));
}


Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer = function() {
}
Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExportTemplateToExcelOnlineResponse(Xrm.Soap.Parser.load(String, $p1_0, 'EditLink'));
    });
}


Xrm.Gen.ExportToExcelOnlineRequestSerializer = function() {
}
Xrm.Gen.ExportToExcelOnlineRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('View', (request).view, 6) + Xrm.Soap.Write.f('FetchXml', (request).fetchXml, 14) + Xrm.Soap.Write.f('LayoutXml', (request).layoutXml, 14) + Xrm.Soap.Write.f('QueryApi', (request).queryApi, 14) + Xrm.Soap.Write.f('QueryParameters', (request).queryParameters, -1, 'c:InputArgumentCollection', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.ExportToExcelOnlineRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExportToExcelOnlineRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'View'), Xrm.Soap.Parser.load(String, data, 'FetchXml'), Xrm.Soap.Parser.load(String, data, 'LayoutXml'), Xrm.Soap.Parser.load(String, data, 'QueryApi'), Xrm.Soap.Parser.load(Object, data, 'QueryParameters', 'InputArgumentCollection'));
}


Xrm.Gen.ExportToExcelOnlineResponseSerializer = function() {
}
Xrm.Gen.ExportToExcelOnlineResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExportToExcelOnlineResponse(Xrm.Soap.Parser.load(String, $p1_0, 'EditLink'));
    });
}


Xrm.Gen.ExportToExcelRequestSerializer = function() {
}
Xrm.Gen.ExportToExcelRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('View', (request).view, 6) + Xrm.Soap.Write.f('FetchXml', (request).fetchXml, 14) + Xrm.Soap.Write.f('LayoutXml', (request).layoutXml, 14) + Xrm.Soap.Write.f('QueryApi', (request).queryApi, 14) + Xrm.Soap.Write.f('QueryParameters', (request).queryParameters, -1, 'c:InputArgumentCollection', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.ExportToExcelRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExportToExcelRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'View'), Xrm.Soap.Parser.load(String, data, 'FetchXml'), Xrm.Soap.Parser.load(String, data, 'LayoutXml'), Xrm.Soap.Parser.load(String, data, 'QueryApi'), Xrm.Soap.Parser.load(Object, data, 'QueryParameters', 'InputArgumentCollection'));
}


Xrm.Gen.ExportToExcelResponseSerializer = function() {
}
Xrm.Gen.ExportToExcelResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ExportToExcelResponse(Xrm.Soap.Parser.load(String, $p1_0, 'ExcelFile', 'ByteArray'));
    });
}


Xrm.Gen.RetrieveDocumentTemplatesRequestSerializer = function() {
}
Xrm.Gen.RetrieveDocumentTemplatesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityTypeCode', (request).entityTypeCode, 5) + Xrm.Soap.Write.f('DocumentType', (request).documentType, 5);
}
Xrm.Gen.RetrieveDocumentTemplatesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveDocumentTemplatesRequest(Xrm.Soap.Parser.load(Number, data, 'EntityTypeCode'), Xrm.Soap.Parser.load(Number, data, 'DocumentType'));
}


Xrm.Gen.RetrieveDocumentTemplatesResponseSerializer = function() {
}
Xrm.Gen.RetrieveDocumentTemplatesResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveDocumentTemplatesResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'DocumentTemplateEntityCollection'));
    });
}


Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('QuoteId', (request).quoteId, 15);
}
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetQuoteProductsFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QuoteId'));
}


Xrm.Gen.FulfillSalesOrderRequestSerializer = function() {
}
Xrm.Gen.FulfillSalesOrderRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OrderClose', (request).orderClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.FulfillSalesOrderRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.FulfillSalesOrderRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'OrderClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer = function() {
}
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SearchText', (request).searchText, 14) + Xrm.Soap.Write.f('UseInflection', (request).useInflection, 0) + Xrm.Soap.Write.f('RemoveDuplicates', (request).removeDuplicates, 0) + Xrm.Soap.Write.f('StateCode', (request).stateCode, 5) + Xrm.Soap.Write.f('QueryExpression', (request).queryExpression, -1, 'a:FetchExpression');
}
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.FullTextSearchKnowledgeArticleRequest(Xrm.Soap.Parser.load(String, data, 'SearchText'), Xrm.Soap.Parser.load(Boolean, data, 'UseInflection'), Xrm.Soap.Parser.load(Boolean, data, 'RemoveDuplicates'), Xrm.Soap.Parser.load(Number, data, 'StateCode'), Xrm.Soap.Parser.load(String, data, 'QueryExpression', 'Query'));
}


Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer = function() {
}
Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.FullTextSearchKnowledgeArticleResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.InstantiateTemplateRequestSerializer = function() {
}
Xrm.Gen.InstantiateTemplateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('TemplateId', (request).templateId, 15) + Xrm.Soap.Write.f('ObjectType', (request).objectType, 14) + Xrm.Soap.Write.f('ObjectId', (request).objectId, 15);
}
Xrm.Gen.InstantiateTemplateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.InstantiateTemplateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'TemplateId'), Xrm.Soap.Parser.load(String, data, 'ObjectType'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ObjectId'));
}


Xrm.Gen.InstantiateTemplateResponseSerializer = function() {
}
Xrm.Gen.InstantiateTemplateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.InstantiateTemplateResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('SalesOrderId', (request).salesOrderId, 15);
}
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'SalesOrderId'));
}


Xrm.Gen.GetValidStatusTransitionRequestSerializer = function() {
}
Xrm.Gen.GetValidStatusTransitionRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('IncidentId', (request).incidentId, 14) + Xrm.Soap.Write.f('ToStateCode', (request).toStateCode, 5);
}
Xrm.Gen.GetValidStatusTransitionRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetValidStatusTransitionRequest(Xrm.Soap.Parser.load(String, data, 'IncidentId'), Xrm.Soap.Parser.load(Number, data, 'ToStateCode'));
}


Xrm.Gen.GetValidStatusTransitionResponseSerializer = function() {
}
Xrm.Gen.GetValidStatusTransitionResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetValidStatusTransitionResponse(Xrm.Soap.Parser.load(Number, $p1_0, 'Result'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('GrantAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('GrantAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('PrincipalAccess', $v_0.principalAccess, -1, 'a:PrincipalAccess');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'PrincipalAccess\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? Xrm.Soap.PrincipalAccessArraySerializer.loadFromCrmSoap($v_2)[0] : null;
    return new Xrm.Sdk.GrantAccessRequest($v_1, $v_3);
}


Xrm.Gen.InitializeFromRequestSerializer = function() {
}
Xrm.Gen.InitializeFromRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityMoniker', (request).entityMoniker, 6) + Xrm.Soap.Write.f('TargetEntityName', (request).targetEntityName, 14) + Xrm.Soap.Write.f('TargetFieldType', (request).targetFieldType, -1, 'a:TargetFieldType');
}
Xrm.Gen.InitializeFromRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.InitializeFromRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'EntityMoniker'), Xrm.Soap.Parser.load(String, data, 'TargetEntityName'), Xrm.Soap.Parser.load(Xrm.Gen.TargetFieldType, data, 'TargetFieldType', 'Enum'));
}


Xrm.Gen.InitializeFromResponseSerializer = function() {
}
Xrm.Gen.InitializeFromResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.InitializeFromResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.InviteUserRequestSerializer = function() {
}
Xrm.Gen.InviteUserRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('UserId', (request).userId, 15);
}
Xrm.Gen.InviteUserRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.InviteUserRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'UserId'));
}


Xrm.Gen.InviteUserResponseSerializer = function() {
}
Xrm.Gen.InviteUserResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.InviteUserResponse(Xrm.Soap.Parser.load(String, $p1_0, 'InvitationToken'));
    });
}


Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer = function() {
}
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SolutionName', (request).solutionName, 14);
}
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.IsPartnerSolutionInstalledRequest(Xrm.Soap.Parser.load(String, data, 'SolutionName'));
}


Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer = function() {
}
Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.IsPartnerSolutionInstalledResponse(Xrm.Soap.Parser.load(Boolean, $p1_0, 'IsPartnerSolutionInstalled'));
    });
}


Xrm.Gen.LockSalesOrderPricingRequestSerializer = function() {
}
Xrm.Gen.LockSalesOrderPricingRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SalesOrderId', (request).salesOrderId, 15);
}
Xrm.Gen.LockSalesOrderPricingRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.LockSalesOrderPricingRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'SalesOrderId'));
}


Xrm.Gen.LoseOpportunityRequestSerializer = function() {
}
Xrm.Gen.LoseOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityClose', (request).opportunityClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.LoseOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.LoseOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'OpportunityClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('ModifyAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('ModifyAccess', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('PrincipalAccess', $v_0.principalAccess, -1, 'a:PrincipalAccess');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'PrincipalAccess\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? Xrm.Soap.PrincipalAccessArraySerializer.loadFromCrmSoap($v_2)[0] : null;
    return new Xrm.Sdk.ModifyAccessRequest($v_1, $v_3);
}


Xrm.Gen.PickFromQueueRequestSerializer = function() {
}
Xrm.Gen.PickFromQueueRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QueueItemId', (request).queueItemId, 15) + Xrm.Soap.Write.f('WorkerId', (request).workerId, 15) + Xrm.Soap.Write.f('RemoveQueueItem', (request).removeQueueItem, 0);
}
Xrm.Gen.PickFromQueueRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PickFromQueueRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueueItemId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'WorkerId'), Xrm.Soap.Parser.load(Boolean, data, 'RemoveQueueItem'));
}


Xrm.Gen.QualifyLeadRequestSerializer = function() {
}
Xrm.Gen.QualifyLeadRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('LeadId', (request).leadId, 6) + Xrm.Soap.Write.f('CreateAccount', (request).createAccount, 0) + Xrm.Soap.Write.f('CreateContact', (request).createContact, 0) + Xrm.Soap.Write.f('CreateOpportunity', (request).createOpportunity, 0) + Xrm.Soap.Write.f('OpportunityCurrencyId', (request).opportunityCurrencyId, 6) + Xrm.Soap.Write.f('OpportunityCustomerId', (request).opportunityCustomerId, 6) + Xrm.Soap.Write.f('SourceCampaignId', (request).sourceCampaignId, 6) + Xrm.Soap.Write.f('Status', (request).status, 11) + Xrm.Soap.Write.f('SuppressDuplicateDetection', (request).suppressDuplicateDetection, 0) + Xrm.Soap.Write.iof('ProcessInstanceId', (request).processInstanceId, 6);
}
Xrm.Gen.QualifyLeadRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.QualifyLeadRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'LeadId'), Xrm.Soap.Parser.load(Boolean, data, 'CreateAccount'), Xrm.Soap.Parser.load(Boolean, data, 'CreateContact'), Xrm.Soap.Parser.load(Boolean, data, 'CreateOpportunity'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'OpportunityCurrencyId'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'OpportunityCustomerId'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'SourceCampaignId'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'), Xrm.Soap.Parser.load(Boolean, data, 'SuppressDuplicateDetection'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'ProcessInstanceId'));
}


Xrm.Gen.QualifyLeadResponseSerializer = function() {
}
Xrm.Gen.QualifyLeadResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.QualifyLeadResponse(Xrm.Soap.Parser.load(Array, $p1_0, 'CreatedEntities', 'EntityReferenceArray'));
    });
}


Xrm.Gen.RenewEntitlementResponseSerializer = function() {
}
Xrm.Gen.RenewEntitlementResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RenewEntitlementResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.RenewEntitlementRequestSerializer = function() {
}
Xrm.Gen.RenewEntitlementRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntitlementId', (request).entitlementId, 15) + Xrm.Soap.Write.f('Status', (request).status, 5);
}
Xrm.Gen.RenewEntitlementRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RenewEntitlementRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'EntitlementId'), Xrm.Soap.Parser.load(Number, data, 'Status'));
}


Xrm.Gen.RescheduleRequestSerializer = function() {
}
Xrm.Gen.RescheduleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('MaintainLegacyAppServerBehavior', (request).maintainLegacyAppServerBehavior, 0) + Xrm.Soap.Write.f('ReturnNotifications', (request).returnNotifications, 0);
}
Xrm.Gen.RescheduleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RescheduleRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Boolean, data, 'MaintainLegacyAppServerBehavior'), Xrm.Soap.Parser.load(Boolean, data, 'ReturnNotifications'));
}


Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer = function() {
}
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityName', (request).entityName, 14) + Xrm.Soap.Write.f('State', (request).state, 11);
}
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveDefaultStatusForStateRequest(Xrm.Soap.Parser.load(String, data, 'EntityName'), Xrm.Soap.Parser.load(Number, data, 'State', 'OptionSet'));
}


Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer = function() {
}
Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveDefaultStatusForStateResponse(Xrm.Soap.Parser.load(Number, $p1_0, 'Status', 'OptionSet'));
    });
}


Xrm.Gen.RetrieveFilteredProcessesRequestSerializer = function() {
}
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityLogicalName', (request).entityLogicalName, 14);
}
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveFilteredProcessesRequest(Xrm.Soap.Parser.load(String, data, 'EntityLogicalName'));
}


Xrm.Gen.RetrieveFilteredProcessesResponseSerializer = function() {
}
Xrm.Gen.RetrieveFilteredProcessesResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveFilteredProcessesResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'Processes'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('RetrieveKeyPhrasesForKnowledgeSearch', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('RetrieveKeyPhrasesForKnowledgeSearch', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    return new Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('RetrieveKeyPhrasesForKnowledgeSearch', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'KeyPhrases\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? Xrm.Soap.StringArraySerializer.loadFromCrmSoap($v_1) : null;
            return new Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer = function() {
}
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer = function() {
}
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse(Xrm.Soap.Parser.load(Array, $p1_0, 'KeyPhrases', 'StringArray'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('RetrieveAncestors', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('RetrieveAncestors', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Entity', $v_0.entity, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Columns', $v_0.columns, -1, 'a:ColumnSet');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Columns\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap($v_2) : null;
    return new Xrm.Sdk.RetrieveAncestorsRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('RetrieveAncestors', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityCollection\']/b:value[@i:type=\'a:EntityCollection\']');
            var $v_2 = null;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Xrm.Soap.EntityCollectionSerializer.loadFromCrmSoap($v_1, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
            }
            return new Xrm.Sdk.RetrieveAncestorsResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.RetrieveProductPropertiesRequestSerializer = function() {
}
Xrm.Gen.RetrieveProductPropertiesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ParentObject', (request).parentObject, 6);
}
Xrm.Gen.RetrieveProductPropertiesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveProductPropertiesRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'ParentObject'));
}


Xrm.Gen.RetrieveProductPropertiesResponseSerializer = function() {
}
Xrm.Gen.RetrieveProductPropertiesResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveProductPropertiesResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer = function() {
}
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('ForDraftRegarding', (request).forDraftRegarding, 0);
}
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Boolean, data, 'ForDraftRegarding'));
}


Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer = function() {
}
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.RetrieveTenantInfoRequestSerializer = function() {
}
Xrm.Gen.RetrieveTenantInfoRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.RetrieveTenantInfoRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveTenantInfoRequest();
}


Xrm.Gen.RetrieveTenantInfoResponseSerializer = function() {
}
Xrm.Gen.RetrieveTenantInfoResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveTenantInfoResponse(Xrm.Soap.Parser.load(String, $p1_0, 'TenantInfo'));
    });
}


Xrm.Gen.RescheduleResponseSerializer = function() {
}
Xrm.Gen.RescheduleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RescheduleResponse(Xrm.Soap.Parser.load(Xrm.Gen.ValidationResult, $p1_0, 'ValidationResult'), Xrm.Soap.Parser.load(Array, $p1_0, 'Notifications', 'BusinessNotificationArray'));
    });
}


Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer = function() {
}
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OuterQuery', (request).outerQuery, -1, 'a:FetchExpression') + Xrm.Soap.Write.f('SubQueries', (request).subQueries, -1, 'c:QueryByEntityNameDictionary', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveEntitiesForAggregateQueryRequest(Xrm.Soap.Parser.load(String, data, 'OuterQuery', 'Query'), Xrm.Soap.Parser.load(Object, data, 'SubQueries', 'QueryByEntityName'));
}


Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer = function() {
}
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveEntitiesForAggregateQueryResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.RetrieveMultipleRequestSerializer = function() {
}
Xrm.Gen.RetrieveMultipleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Query', (request).query, -1, 'a:FetchExpression');
}
Xrm.Gen.RetrieveMultipleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveMultipleRequest(Xrm.Soap.Parser.load(String, data, 'Query', 'Query'));
}


Xrm.Gen.RetrieveMultipleResponseSerializer = function() {
}
Xrm.Gen.RetrieveMultipleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveMultipleResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer = function() {
}
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Query', (request).query, -1, 'a:FetchExpression');
}
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveUnpublishedMultipleRequest(Xrm.Soap.Parser.load(String, data, 'Query', 'Query'));
}


Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer = function() {
}
Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveUnpublishedMultipleResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.RetrievePrincipalAccessRequestSerializer = function() {
}
Xrm.Gen.RetrievePrincipalAccessRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('Principal', (request).principal, 6);
}
Xrm.Gen.RetrievePrincipalAccessRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrievePrincipalAccessRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Principal'));
}


Xrm.Gen.RetrievePrincipalAccessResponseSerializer = function() {
}
Xrm.Gen.RetrievePrincipalAccessResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrievePrincipalAccessResponse(Xrm.Soap.Parser.load(Xrm.Gen.AccessRights, $p1_0, 'AccessRights', 'FlagsEnum'));
    });
}


Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer = function() {
}
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrievePersonalSiteUrlRequest();
}


Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer = function() {
}
Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrievePersonalSiteUrlResponse(Xrm.Soap.Parser.load(String, $p1_0, 'PersonalSiteUrl'));
    });
}


Xrm.Gen.RetrieveRequestSerializer = function() {
}
Xrm.Gen.RetrieveRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('Retrieve', Xrm.Gen.RetrieveRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('Retrieve', Xrm.Gen.RetrieveRequestSerializer.loadFromCrmSoap);
}
Xrm.Gen.RetrieveRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Target', $v_0.target, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ColumnSet', $v_0.columnSet, -1, 'a:ColumnSet') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RelatedEntitiesQuery', $v_0.relatedEntitiesQuery, -1, 'a:RelationshipQueryCollection') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ReturnNotifications', $v_0.returnNotifications, 0);
}
Xrm.Gen.RetrieveRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Target\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ColumnSet\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap($v_2) : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelatedEntitiesQuery\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? Xrm.Soap.RelationshipQueryCollectionSerializer.loadFromCrmSoap($v_4) : null;
    var $v_6 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReturnNotifications\']/b:value');
    var $v_7;
    if (!_Script.isNullOrUndefined($v_6)) {
        $v_7 = Boolean.parse($v_6.get_innerText());
    }
    else {
        throw Error.notImplemented();
    }
    return new Xrm.Gen.RetrieveRequest($v_1, $v_3, $v_5, $v_7);
}


Xrm.Gen.RetrieveResponseSerializer = function() {
}
Xrm.Gen.RetrieveResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('Retrieve', Xrm.Gen.RetrieveResponseSerializer.loadFromCrmSoap);
}
Xrm.Gen.RetrieveResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = null;
            var $v_2 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Entity\']/b:value');
            if (!_Script.isNullOrUndefined($v_2)) {
                var $v_5 = $v_2.selectSingleNode('entity');
                if (!_Script.isNullOrUndefined($v_5)) {
                    $v_2 = $v_5;
                }
                $v_1 = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap($v_2, (request).relatedEntitiesQuery);
                var $v_6 = (!_Script.isNullOrUndefined($v_1.get_relatedEntities())) ? $v_1.get_relatedEntities().get_relatedEntityQueries() : new Array(0);
                $v_1.updateColumnSet((request).columnSet, $v_6);
            }
            var $v_3 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Notifications\']/b:value');
            var $v_4 = (!_Script.isNullOrUndefined($v_3)) ? Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap($v_3) : null;
            return new Xrm.Gen.RetrieveResponse($v_1, $v_4);
        }
    }
    return null;
}


Xrm.Gen.RevertProductRequestSerializer = function() {
}
Xrm.Gen.RevertProductRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.RevertProductRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RevertProductRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.ReviseQuoteRequestSerializer = function() {
}
Xrm.Gen.ReviseQuoteRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QuoteId', (request).quoteId, 15) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.ReviseQuoteRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ReviseQuoteRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QuoteId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.ReviseQuoteResponseSerializer = function() {
}
Xrm.Gen.ReviseQuoteResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ReviseQuoteResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, $p1_0, 'Entity'));
    });
}


Xrm.Gen.RouteToRequestSerializer = function() {
}
Xrm.Gen.RouteToRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('QueueItemId', (request).queueItemId, 15);
}
Xrm.Gen.RouteToRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RouteToRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueueItemId'));
}


Xrm.Gen.RevokeAccessRequestSerializer = function() {
}
Xrm.Gen.RevokeAccessRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6) + Xrm.Soap.Write.f('Revokee', (request).revokee, 6);
}
Xrm.Gen.RevokeAccessRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RevokeAccessRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Revokee'));
}


Xrm.Gen.PublishProductHierarchyRequestSerializer = function() {
}
Xrm.Gen.PublishProductHierarchyRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.PublishProductHierarchyRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PublishProductHierarchyRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.SetDevErrorsRequestSerializer = function() {
}
Xrm.Gen.SetDevErrorsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('UserId', (request).userId, 15) + Xrm.Soap.Write.f('OrganizationId', (request).organizationId, 15) + Xrm.Soap.Write.f('Value', (request).value, 0);
}
Xrm.Gen.SetDevErrorsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetDevErrorsRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'UserId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OrganizationId'), Xrm.Soap.Parser.load(Boolean, data, 'Value'));
}


Xrm.Gen.SetFeatureStatusRequestSerializer = function() {
}
Xrm.Gen.SetFeatureStatusRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('FetaureType', (request).fetaureType, 5) + Xrm.Soap.Write.f('Status', (request).status, 0) + Xrm.Soap.Write.f('IsSolutionUninstall', (request).isSolutionUninstall, 0);
}
Xrm.Gen.SetFeatureStatusRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetFeatureStatusRequest(Xrm.Soap.Parser.load(Number, data, 'FetaureType'), Xrm.Soap.Parser.load(Boolean, data, 'Status'), Xrm.Soap.Parser.load(Boolean, data, 'IsSolutionUninstall'));
}


Xrm.Gen.SetStateRequestSerializer = function() {
}
Xrm.Gen.SetStateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityMoniker', (request).entityMoniker, 6) + Xrm.Soap.Write.f('State', (request).state, 11) + Xrm.Soap.Write.f('Status', (request).status, 11) + Xrm.Soap.Write.f('MaintainLegacyAppServerBehavior', (request).maintainLegacyAppServerBehavior, 0);
}
Xrm.Gen.SetStateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetStateRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'EntityMoniker'), Xrm.Soap.Parser.load(Number, data, 'State', 'OptionSet'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'), Xrm.Soap.Parser.load(Boolean, data, 'MaintainLegacyAppServerBehavior'));
}


Xrm.Gen.StartRIProvisioningRequestSerializer = function() {
}
Xrm.Gen.StartRIProvisioningRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('HubName', (request).hubName, 14) + Xrm.Soap.Write.f('PrimaryKey', (request).primaryKey, 14);
}
Xrm.Gen.StartRIProvisioningRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.StartRIProvisioningRequest(Xrm.Soap.Parser.load(String, data, 'HubName'), Xrm.Soap.Parser.load(String, data, 'PrimaryKey'));
}


Xrm.Gen.UnlockSalesOrderPricingRequestSerializer = function() {
}
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('SalesOrderId', (request).salesOrderId, 15);
}
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UnlockSalesOrderPricingRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'SalesOrderId'));
}


Xrm.Gen.UpdateRequestSerializer = function() {
}
Xrm.Gen.UpdateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity') + Xrm.Soap.Write.f('SuppressDuplicateDetection', (request).suppressDuplicateDetection, 0) + Xrm.Soap.Write.f('CalculateMatchCodeSynchronously', (request).calculateMatchCodeSynchronously, 0) + Xrm.Soap.Write.f('SolutionUniqueName', (request).solutionUniqueName, 14) + Xrm.Soap.Write.f('MaintainLegacyAppServerBehavior', (request).maintainLegacyAppServerBehavior, 0) + Xrm.Soap.Write.f('ConcurrencyBehavior', (request).concurrencyBehavior, -1, 'c:ConcurrencyBehavior', 'xmlns:c=\"http://schemas.microsoft.com/xrm/7.1/Contracts\"') + Xrm.Soap.Write.f('ReturnRowVersion', (request).returnRowVersion, 0);
}
Xrm.Gen.UpdateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'), Xrm.Soap.Parser.load(Boolean, data, 'SuppressDuplicateDetection'), Xrm.Soap.Parser.load(Boolean, data, 'CalculateMatchCodeSynchronously'), Xrm.Soap.Parser.load(String, data, 'SolutionUniqueName'), Xrm.Soap.Parser.load(Boolean, data, 'MaintainLegacyAppServerBehavior'), Xrm.Soap.Parser.load(Xrm.Gen.ConcurrencyBehavior, data, 'ConcurrencyBehavior', 'Enum'), Xrm.Soap.Parser.load(Boolean, data, 'ReturnRowVersion'));
}


Xrm.Gen.UpdateProductPropertiesRequestSerializer = function() {
}
Xrm.Gen.UpdateProductPropertiesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('PropertyInstanceList', (request).propertyInstanceList, -1, 'a:EntityCollection');
}
Xrm.Gen.UpdateProductPropertiesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateProductPropertiesRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, data, 'PropertyInstanceList'));
}


Xrm.Gen.UpdateRITenantInfoRequestSerializer = function() {
}
Xrm.Gen.UpdateRITenantInfoRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('HubName', (request).hubName, 14) + Xrm.Soap.Write.f('PrimaryKey', (request).primaryKey, 14);
}
Xrm.Gen.UpdateRITenantInfoRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateRITenantInfoRequest(Xrm.Soap.Parser.load(String, data, 'HubName'), Xrm.Soap.Parser.load(String, data, 'PrimaryKey'));
}


Xrm.Gen.UpdateDelveActionStatusRequestSerializer = function() {
}
Xrm.Gen.UpdateDelveActionStatusRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('MessageId', (request).messageId, 14) + Xrm.Soap.Write.f('ActionState', (request).actionState, 5) + Xrm.Soap.Write.f('RecordId', (request).recordId, 14);
}
Xrm.Gen.UpdateDelveActionStatusRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UpdateDelveActionStatusRequest(Xrm.Soap.Parser.load(String, data, 'MessageId'), Xrm.Soap.Parser.load(Number, data, 'ActionState'), Xrm.Soap.Parser.load(String, data, 'RecordId'));
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('CreateEmailReplyDraft', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('CreateEmailReplyDraft', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('MessageId', $v_0.messageId, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ReplyText', $v_0.replyText, 14);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MessageId\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReplyText\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    return new Xrm.Gen.CreateEmailReplyDraftRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('CreateEmailReplyDraft', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'MailWebLink\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Xrm.Gen.CreateEmailReplyDraftResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.SetActionCardStateRequestSerializer = function() {
}
Xrm.Gen.SetActionCardStateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ActionCardId', (request).actionCardId, 15) + Xrm.Soap.Write.f('ActionState', (request).actionState, 11) + Xrm.Soap.Write.f('MessageId', (request).messageId, 14);
}
Xrm.Gen.SetActionCardStateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SetActionCardStateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ActionCardId'), Xrm.Soap.Parser.load(Number, data, 'ActionState', 'OptionSet'), Xrm.Soap.Parser.load(String, data, 'MessageId'));
}


Xrm.Gen.SnoozeActionCardRequestSerializer = function() {
}
Xrm.Gen.SnoozeActionCardRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ActionCardId', (request).actionCardId, 15);
}
Xrm.Gen.SnoozeActionCardRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.SnoozeActionCardRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ActionCardId'));
}


Xrm.Gen.PopulateCardRequestSerializer = function() {
}
Xrm.Gen.PopulateCardRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('UserId', (request).userId, 15);
}
Xrm.Gen.PopulateCardRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PopulateCardRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'UserId'));
}


Xrm.Gen.PopulateCardResponseSerializer = function() {
}
Xrm.Gen.PopulateCardResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.PopulateCardResponse(Xrm.Soap.Parser.load(String, $p1_0, 'Data'));
    });
}


Xrm.Gen.CopySharePointDocumentsRequestSerializer = function() {
}
Xrm.Gen.CopySharePointDocumentsRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('CopySharePointDocuments', Xrm.Gen.CopySharePointDocumentsRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('CopySharePointDocuments', Xrm.Gen.CopySharePointDocumentsRequestSerializer.loadFromCrmSoap);
}
Xrm.Gen.CopySharePointDocumentsRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('DestinationLocation', $v_0.destinationLocation, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('AbsoluteUrls', $v_0.absoluteUrls, -1, 'sa:ArrayOfstring', 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('RelativeUrls', $v_0.relativeUrls, -1, 'sa:ArrayOfstring', 'xmlns:sa=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"') + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Source', $v_0.source, 14);
}
Xrm.Gen.CopySharePointDocumentsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'DestinationLocation\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'AbsoluteUrls\']/b:value');
    var $v_3 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'AbsoluteUrls\']/b:value/sa:string');
    var $v_4 = null;
    if (!_Script.isNullOrUndefined($v_3)) {
        $v_4 = new Array($v_3.get_count());
        for (var $v_A = 0; $v_A < $v_3.get_count(); $v_A++) {
            $v_4[$v_A] = $v_3.get_item($v_A).get_innerText();
        }
    }
    var $v_5 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RelativeUrls\']/b:value');
    var $v_6 = data.selectNodes('.//a:KeyValuePairOfstringanyType[b:key=\'RelativeUrls\']/b:value/sa:string');
    var $v_7 = null;
    if (!_Script.isNullOrUndefined($v_6)) {
        $v_7 = new Array($v_6.get_count());
        for (var $v_B = 0; $v_B < $v_6.get_count(); $v_B++) {
            $v_7[$v_B] = $v_6.get_item($v_B).get_innerText();
        }
    }
    var $v_8 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Source\']/b:value');
    var $v_9 = (!_Script.isNullOrUndefined($v_8)) ? $v_8.get_innerText() : null;
    return new Xrm.Gen.CopySharePointDocumentsRequest($v_1, $v_4, $v_7, $v_9);
}


Xrm.Gen.CopySharePointDocumentsResponseSerializer = function() {
}
Xrm.Gen.CopySharePointDocumentsResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('CopySharePointDocuments', Xrm.Gen.CopySharePointDocumentsResponseSerializer.loadFromCrmSoap);
}
Xrm.Gen.CopySharePointDocumentsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Status\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? $v_1.get_innerText() : null;
            return new Xrm.Gen.CopySharePointDocumentsResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.OverrideDynamicPropertiesRequestSerializer = function() {
}
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('RegardingObject', (request).regardingObject, 6) + Xrm.Soap.Write.f('DynamicPropertyCollection', (request).dynamicPropertyCollection, -1, 'a:EntityCollection');
}
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.OverrideDynamicPropertiesRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'RegardingObject'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, data, 'DynamicPropertyCollection'));
}


Xrm.Gen.WhoAmIRequestSerializer = function() {
}
Xrm.Gen.WhoAmIRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.WhoAmIRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.WhoAmIRequest();
}


Xrm.Gen.WhoAmIResponseSerializer = function() {
}
Xrm.Gen.WhoAmIResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.WhoAmIResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'UserId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'BusinessUnitId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'OrganizationId'));
    });
}


Xrm.Gen.WinOpportunityRequestSerializer = function() {
}
Xrm.Gen.WinOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityClose', (request).opportunityClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.WinOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.WinOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'OpportunityClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.AddOrEditLocationRequestSerializer = function() {
}
Xrm.Gen.AddOrEditLocationRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('LocationName', (request).locationName, 14) + Xrm.Soap.Write.f('AbsUrl', (request).absUrl, 14) + Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 14) + Xrm.Soap.Write.f('RelativePath', (request).relativePath, 14) + Xrm.Soap.Write.f('RegardingObjType', (request).regardingObjType, 5) + Xrm.Soap.Write.f('ParentType', (request).parentType, 5) + Xrm.Soap.Write.f('ParentId', (request).parentId, 14) + Xrm.Soap.Write.f('IsAddOrEditMode', (request).isAddOrEditMode, 0) + Xrm.Soap.Write.f('IsCreateFolder', (request).isCreateFolder, 0) + Xrm.Soap.Write.f('DocumentId', (request).documentId, 14);
}
Xrm.Gen.AddOrEditLocationRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.AddOrEditLocationRequest(Xrm.Soap.Parser.load(String, data, 'LocationName'), Xrm.Soap.Parser.load(String, data, 'AbsUrl'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(String, data, 'RelativePath'), Xrm.Soap.Parser.load(Number, data, 'RegardingObjType'), Xrm.Soap.Parser.load(Number, data, 'ParentType'), Xrm.Soap.Parser.load(String, data, 'ParentId'), Xrm.Soap.Parser.load(Boolean, data, 'IsAddOrEditMode'), Xrm.Soap.Parser.load(Boolean, data, 'IsCreateFolder'), Xrm.Soap.Parser.load(String, data, 'DocumentId'));
}


Xrm.Gen.FetchSiteUrlResponseSerializer = function() {
}
Xrm.Gen.FetchSiteUrlResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.FetchSiteUrlResponse(Xrm.Soap.Parser.load(String, $p1_0, 'SiteAndLocationUrl'));
    });
}


Xrm.Gen.FetchSiteUrlRequestSerializer = function() {
}
Xrm.Gen.FetchSiteUrlRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('DocumentId', (request).documentId, 14) + Xrm.Soap.Write.f('RegardingObjectId', (request).regardingObjectId, 14) + Xrm.Soap.Write.f('RegardingObjType', (request).regardingObjType, 5);
}
Xrm.Gen.FetchSiteUrlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.FetchSiteUrlRequest(Xrm.Soap.Parser.load(String, data, 'DocumentId'), Xrm.Soap.Parser.load(String, data, 'RegardingObjectId'), Xrm.Soap.Parser.load(Number, data, 'RegardingObjType'));
}


Xrm.Gen.AddOrEditLocationResponseSerializer = function() {
}
Xrm.Gen.AddOrEditLocationResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.AddOrEditLocationResponse(Xrm.Soap.Parser.load(String, $p1_0, 'LocationId'));
    });
}


Xrm.Gen.GetDefaultPriceLevelRequestSerializer = function() {
}
Xrm.Gen.GetDefaultPriceLevelRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('EntityName', (request).entityName, 14) + Xrm.Soap.Write.f('ColumnSet', (request).columnSet, -1, 'a:ColumnSet');
}
Xrm.Gen.GetDefaultPriceLevelRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetDefaultPriceLevelRequest(Xrm.Soap.Parser.load(String, data, 'EntityName'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, data, 'ColumnSet', 'ColumnSet'));
}


Xrm.Gen.GetDefaultPriceLevelResponseSerializer = function() {
}
Xrm.Gen.GetDefaultPriceLevelResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.GetDefaultPriceLevelResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'PriceLevels'));
    });
}


Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer = function() {
}
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer = function() {
}
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse(Xrm.Soap.Parser.load(Array, $p1_0, 'PrincipalAccesses', 'PrincipalAccessArray'));
    });
}


Xrm.Gen.LockInvoicePricingRequestSerializer = function() {
}
Xrm.Gen.LockInvoicePricingRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('InvoiceId', (request).invoiceId, 15);
}
Xrm.Gen.LockInvoicePricingRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.LockInvoicePricingRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'InvoiceId'));
}


Xrm.Gen.CopyCampaignRequestSerializer = function() {
}
Xrm.Gen.CopyCampaignRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('BaseCampaign', (request).baseCampaign, 15) + Xrm.Soap.Write.f('SaveAsTemplate', (request).saveAsTemplate, 0);
}
Xrm.Gen.CopyCampaignRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CopyCampaignRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'BaseCampaign'), Xrm.Soap.Parser.load(Boolean, data, 'SaveAsTemplate'));
}


Xrm.Gen.CopyCampaignResponseSerializer = function() {
}
Xrm.Gen.CopyCampaignResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CopyCampaignResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'CampaignCopyId'));
    });
}


Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer = function() {
}
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('OpportunityId', (request).opportunityId, 15) + Xrm.Soap.Write.f('InvoiceId', (request).invoiceId, 15);
}
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.GetInvoiceProductsFromOpportunityRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'OpportunityId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'InvoiceId'));
}


Xrm.Gen.UnlockInvoicePricingRequestSerializer = function() {
}
Xrm.Gen.UnlockInvoicePricingRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('InvoiceId', (request).invoiceId, 15);
}
Xrm.Gen.UnlockInvoicePricingRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.UnlockInvoicePricingRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'InvoiceId'));
}


Xrm.Gen.CanUserSendEmailRequestSerializer = function() {
}
Xrm.Gen.CanUserSendEmailRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.CanUserSendEmailRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CanUserSendEmailRequest();
}


Xrm.Gen.CanUserSendEmailResponseSerializer = function() {
}
Xrm.Gen.CanUserSendEmailResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CanUserSendEmailResponse(Xrm.Soap.Parser.load(Boolean, $p1_0, 'HasPrivileges'));
    });
}


Xrm.Gen.PublishAllXmlRequestSerializer = function() {
}
Xrm.Gen.PublishAllXmlRequestSerializer.parametersToCrmSoap = function(request) {
    return null;
}
Xrm.Gen.PublishAllXmlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PublishAllXmlRequest();
}


Xrm.Gen.PublishThemeRequestSerializer = function() {
}
Xrm.Gen.PublishThemeRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, 6);
}
Xrm.Gen.PublishThemeRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PublishThemeRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Target'));
}


Xrm.Gen.TrackEmailRequestSerializer = function() {
}
Xrm.Gen.TrackEmailRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ExchangeItemId', (request).exchangeItemId, 14) + Xrm.Soap.Write.f('Regarding', (request).regarding, 6);
}
Xrm.Gen.TrackEmailRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.TrackEmailRequest(Xrm.Soap.Parser.load(String, data, 'ExchangeItemId'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Regarding'));
}


Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer = function() {
}
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QueryingUnitId', (request).queryingUnitId, 15) + Xrm.Soap.Write.f('ActionName', (request).actionName, 14);
}
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ExecuteDataPerformanceActionRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueryingUnitId'), Xrm.Soap.Parser.load(String, data, 'ActionName'));
}


Xrm.Gen.PublishXmlRequestSerializer = function() {
}
Xrm.Gen.PublishXmlRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ParameterXml', (request).parameterXml, 14);
}
Xrm.Gen.PublishXmlRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PublishXmlRequest(Xrm.Soap.Parser.load(String, data, 'ParameterXml'));
}


Xrm.Gen.WinQuoteRequestSerializer = function() {
}
Xrm.Gen.WinQuoteRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QuoteClose', (request).quoteClose, -1, 'a:Entity') + Xrm.Soap.Write.f('Status', (request).status, 11);
}
Xrm.Gen.WinQuoteRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.WinQuoteRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'QuoteClose'), Xrm.Soap.Parser.load(Number, data, 'Status', 'OptionSet'));
}


Xrm.Gen.RenderTemplateRequestSerializer = function() {
}
Xrm.Gen.RenderTemplateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Template', (request).template, 6) + Xrm.Soap.Write.f('FetchXml', (request).fetchXml, 14) + Xrm.Soap.Write.f('QueryApi', (request).queryApi, 14) + Xrm.Soap.Write.f('QueryParameters', (request).queryParameters, -1, 'c:InputArgumentCollection', 'xmlns:c=\"http://schemas.microsoft.com/crm/2011/Contracts\"');
}
Xrm.Gen.RenderTemplateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RenderTemplateRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Template'), Xrm.Soap.Parser.load(String, data, 'FetchXml'), Xrm.Soap.Parser.load(String, data, 'QueryApi'), Xrm.Soap.Parser.load(Object, data, 'QueryParameters', 'InputArgumentCollection'));
}


Xrm.Gen.RenderTemplateResponseSerializer = function() {
}
Xrm.Gen.RenderTemplateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RenderTemplateResponse(Xrm.Soap.Parser.load(String, $p1_0, 'ExcelFile', 'ByteArray'));
    });
}


Xrm.Gen.RenderTemplateFromViewRequestSerializer = function() {
}
Xrm.Gen.RenderTemplateFromViewRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Template', (request).template, 6) + Xrm.Soap.Write.f('View', (request).view, 6);
}
Xrm.Gen.RenderTemplateFromViewRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RenderTemplateFromViewRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Template'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'View'));
}


Xrm.Gen.RenderTemplateFromViewResponseSerializer = function() {
}
Xrm.Gen.RenderTemplateFromViewResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RenderTemplateFromViewResponse(Xrm.Soap.Parser.load(String, $p1_0, 'ExcelFile', 'ByteArray'));
    });
}


Xrm.Gen.LogExternalResultsClickedRequestSerializer = function() {
}
Xrm.Gen.LogExternalResultsClickedRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Source', (request).source, 14);
}
Xrm.Gen.LogExternalResultsClickedRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.LogExternalResultsClickedRequest(Xrm.Soap.Parser.load(String, data, 'Source'));
}


Xrm.Gen.CreateProductsRequestSerializer = function() {
}
Xrm.Gen.CreateProductsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entities', (request).entities, -1, 'a:EntityCollection') + Xrm.Soap.Write.f('ParentEntity', (request).parentEntity, -1, 'a:Entity');
}
Xrm.Gen.CreateProductsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateProductsRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, data, 'Entities'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'ParentEntity'));
}


Xrm.Gen.CreateProductsResponseSerializer = function() {
}
Xrm.Gen.CreateProductsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateProductsResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Xrm.Gen.CopyCampaignResponseRequestSerializer = function() {
}
Xrm.Gen.CopyCampaignResponseRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('CampaignResponseId', (request).campaignResponseId, 6);
}
Xrm.Gen.CopyCampaignResponseRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CopyCampaignResponseRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'CampaignResponseId'));
}


Xrm.Gen.CopyCampaignResponseResponseSerializer = function() {
}
Xrm.Gen.CopyCampaignResponseResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CopyCampaignResponseResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, $p1_0, 'CampaignResponseId'));
    });
}


Xrm.Gen.ConvertCampaignResponseRequestSerializer = function() {
}
Xrm.Gen.ConvertCampaignResponseRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('CampaignResponse', (request).campaignResponse, 6) + Xrm.Soap.Write.f('EntityName', (request).entityName, 14) + Xrm.Soap.Write.f('CreateOpportunityForExistingCustomer', (request).createOpportunityForExistingCustomer, 0) + Xrm.Soap.Write.f('Customer', (request).customer, 6) + Xrm.Soap.Write.f('Currency', (request).currency, 6) + Xrm.Soap.Write.f('Owner', (request).owner, 6);
}
Xrm.Gen.ConvertCampaignResponseRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.ConvertCampaignResponseRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'CampaignResponse'), Xrm.Soap.Parser.load(String, data, 'EntityName'), Xrm.Soap.Parser.load(Boolean, data, 'CreateOpportunityForExistingCustomer'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Customer'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Currency'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Owner'));
}


Xrm.Gen.ConvertCampaignResponseResponseSerializer = function() {
}
Xrm.Gen.ConvertCampaignResponseResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.ConvertCampaignResponseResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'EntityReference'));
    });
}


Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer = function() {
}
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Source', (request).source, 6) + Xrm.Soap.Write.f('IsMajor', (request).isMajor, 0);
}
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateKnowledgeArticleVersionRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Source'), Xrm.Soap.Parser.load(Boolean, data, 'IsMajor'));
}


Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer = function() {
}
Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateKnowledgeArticleVersionResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'CreateKnowledgeArticleVersion'));
    });
}


Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer = function() {
}
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Source', (request).source, 6) + Xrm.Soap.Write.f('Language', (request).language, 6) + Xrm.Soap.Write.f('IsMajor', (request).isMajor, 0);
}
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.CreateKnowledgeArticleTranslationRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Source'), Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Language'), Xrm.Soap.Parser.load(Boolean, data, 'IsMajor'));
}


Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer = function() {
}
Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.CreateKnowledgeArticleTranslationResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'CreateKnowledgeArticleTranslation'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('GetSimilarRecords', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('GetSimilarRecords', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Id', $v_0.id, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('Filter', $v_0.filter, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ReturnFields', $v_0.returnFields, -1, 'a:ColumnSet');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Id\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'Filter\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? $v_2.get_innerText() : null;
    var $v_4 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ReturnFields\']/b:value');
    var $v_5 = (!_Script.isNullOrUndefined($v_4)) ? Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap($v_4) : null;
    return new Xrm.Gen.GetSimilarRecordsRequest($v_1, $v_3, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('GetSimilarRecords', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityCollection\']/b:value[@i:type=\'a:EntityCollection\']');
            var $v_2 = null;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Xrm.Soap.EntityCollectionSerializer.loadFromCrmSoap($v_1, Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty());
            }
            return new Xrm.Gen.GetSimilarRecordsResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer = function() {
}
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Source', (request).source, 6) + Xrm.Soap.Write.f('ViewDate', (request).viewDate, 2) + Xrm.Soap.Write.f('Location', (request).location, 5) + Xrm.Soap.Write.f('Count', (request).count, 5);
}
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.IncrementKnowledgeArticleViewCountRequest(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, data, 'Source'), Xrm.Soap.Parser.load(Date, data, 'ViewDate'), Xrm.Soap.Parser.load(Number, data, 'Location'), Xrm.Soap.Parser.load(Number, data, 'Count'));
}


Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer = function() {
}
Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.IncrementKnowledgeArticleViewCountResponse(Xrm.Soap.Parser.load(Xrm.Objects.EntityReference, $p1_0, 'IncrementKnowledgeArticleViewCount'));
    });
}


Xrm.Gen.PublishKnowledgeArticleRequestSerializer = function() {
}
Xrm.Gen.PublishKnowledgeArticleRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Entity', (request).entity, -1, 'a:Entity') + Xrm.Soap.Write.f('CopyRelatedProductFromAssociatedPrimary', (request).copyRelatedProductFromAssociatedPrimary, 0) + Xrm.Soap.Write.f('CopyRelatedCategoryFromAssociatedPrimary', (request).copyRelatedCategoryFromAssociatedPrimary, 0) + Xrm.Soap.Write.f('PublishApprovedRelatedTranslations', (request).publishApprovedRelatedTranslations, 0);
}
Xrm.Gen.PublishKnowledgeArticleRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PublishKnowledgeArticleRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Entity'), Xrm.Soap.Parser.load(Boolean, data, 'CopyRelatedProductFromAssociatedPrimary'), Xrm.Soap.Parser.load(Boolean, data, 'CopyRelatedCategoryFromAssociatedPrimary'), Xrm.Soap.Parser.load(Boolean, data, 'PublishApprovedRelatedTranslations'));
}


Xrm.Gen.PublishKnowledgeArticleResponseSerializer = function() {
}
Xrm.Gen.PublishKnowledgeArticleResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.PublishKnowledgeArticleResponse(Xrm.Soap.Parser.load(Boolean, $p1_0, 'IsPublish'));
    });
}


Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequestSerializer = function() {
}
Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('QueueId', (request).queueId, 15) + Xrm.Soap.Write.f('ViewId', (request).viewId, 15) + Xrm.Soap.Write.f('VisualizationId', (request).visualizationId, 15) + Xrm.Soap.Write.f('InteractionCentricFilterXml', (request).interactionCentricFilterXml, 14);
}
Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'QueueId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ViewId'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'VisualizationId'), Xrm.Soap.Parser.load(String, data, 'InteractionCentricFilterXml'));
}


Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponseSerializer = function() {
}
Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, $p1_0, 'EntityCollection'));
    });
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('PopulateRecommendationCacheForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('PopulateRecommendationCacheForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ParentRecord', $v_0.parentRecord, 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ParentRecord\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    return new Xrm.Gen.PopulateRecommendationCacheForRecordRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('PopulateRecommendationCacheForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ShowAzureRecommendations\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Boolean.parse($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Xrm.Gen.PopulateRecommendationCacheForRecordResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('PopulateRecommendationCache', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('PopulateRecommendationCache', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('EntityName', $v_0.entityName, 14) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ItemId', $v_0.itemId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'EntityName\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? $v_0.get_innerText() : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ItemId\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    return new Xrm.Gen.PopulateRecommendationCacheRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('PopulateRecommendationCache', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ShowAzureRecommendations\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = Boolean.parse($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Xrm.Gen.PopulateRecommendationCacheResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('RetrieveItemIdsForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('RetrieveItemIdsForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ParentRecord', $v_0.parentRecord, 6);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ParentRecord\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    return new Xrm.Gen.RetrieveItemIdsForRecordRequest($v_1);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('RetrieveItemIdsForRecord', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ItemIds\']/b:value');
            var $v_2 = (!_Script.isNullOrUndefined($v_1)) ? Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.GuidArraySerializer.loadFromCrmSoap($v_1) : null;
            return new Xrm.Gen.RetrieveItemIdsForRecordResponse($v_2);
        }
    }
    return null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.registerSerializer('RetrieveRecommendationsCount', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.registerDeserializer('RetrieveRecommendationsCount', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.parametersToCrmSoap = function(request) {
    var $v_0 = request;
    return Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('ParentRecord', $v_0.parentRecord, 6) + Xrm.Soap.EntityRecordSerializer.fieldToCrmSoap('PriceLevelId', $v_0.priceLevelId, 15);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    var $v_0 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'ParentRecord\']/b:value');
    var $v_1 = (!_Script.isNullOrUndefined($v_0)) ? Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap($v_0) : null;
    var $v_2 = data.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'PriceLevelId\']/b:value');
    var $v_3 = (!_Script.isNullOrUndefined($v_2)) ? new Microsoft.Crm.Client.Core.Framework.Guid($v_2.get_innerText()) : null;
    return new Xrm.Gen.RetrieveRecommendationsCountRequest($v_1, $v_3);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer.$$cctor = function() {
    Xrm.Soap.ResponseSerializer.registerSerializer('RetrieveRecommendationsCount', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer.loadFromCrmSoap);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        Xrm.Soap.ResponseSerializer.addCrmSoapNamespaces(soapResponse);
        var $v_0 = null;
        $v_0 = soapResponse.selectSingleNode('.//a:Results');
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.selectSingleNode('.//a:KeyValuePairOfstringanyType[b:key=\'RecommendationsCount\']/b:value');
            var $v_2;
            if (!_Script.isNullOrUndefined($v_1)) {
                $v_2 = parseInt($v_1.get_innerText());
            }
            else {
                throw Error.notImplemented();
            }
            return new Xrm.Gen.RetrieveRecommendationsCountResponse($v_2);
        }
    }
    return null;
}


Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer = function() {
}
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ParentEntityName', (request).parentEntityName, 14);
}
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest(Xrm.Soap.Parser.load(String, data, 'ParentEntityName'));
}


Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer = function() {
}
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse(Xrm.Soap.Parser.load(String, $p1_0, 'RecommendationLineItemMetadata'));
    });
}


Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer = function() {
}
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('ParentEntityName', (request).parentEntityName, 14) + Xrm.Soap.Write.f('ParentEntityId', (request).parentEntityId, 15);
}
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.RetrieveRecommendationLineItemProductsRequest(Xrm.Soap.Parser.load(String, data, 'ParentEntityName'), Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Framework.Guid, data, 'ParentEntityId'));
}


Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer = function() {
}
Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.RetrieveRecommendationLineItemProductsResponse(Xrm.Soap.Parser.load(String, $p1_0, 'RecommendationLineItemProducts'));
    });
}


Xrm.Gen.PreValidateAppointmentRequestSerializer = function() {
}
Xrm.Gen.PreValidateAppointmentRequestSerializer.parametersToCrmSoap = function(request) {
    return Xrm.Soap.Write.f('Target', (request).target, -1, 'a:Entity');
}
Xrm.Gen.PreValidateAppointmentRequestSerializer.loadFromCrmSoap = function(data) {
    if (_Script.isNullOrUndefined(data)) {
        return null;
    }
    return new Xrm.Gen.PreValidateAppointmentRequest(Xrm.Soap.Parser.load(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, data, 'Target'));
}


Xrm.Gen.PreValidateAppointmentResponseSerializer = function() {
}
Xrm.Gen.PreValidateAppointmentResponseSerializer.loadFromCrmSoap = function(soapResponse, request) {
    return Xrm.Soap.ResponseSerializer.deserialize(soapResponse, request, function($p1_0) {
        return new Xrm.Gen.PreValidateAppointmentResponse(Xrm.Soap.Parser.load(Xrm.Gen.ValidationResult, $p1_0, 'ValidationResult'));
    });
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse = function(success, response, errors) {
    this.$1B_0 = success;
    this.$1S_0 = response;
    this.$h_0 = (!_Script.isNullOrUndefined(errors)) ? errors : new Array(0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.createErrorData = function(errorDataJson) {
    var $v_0 = new Array(0);
    if (!_Script.isNullOrUndefined(errorDataJson)) {
        for (var $v_1 = 0; $v_1 < errorDataJson.length; $v_1++) {
            var $v_2 = errorDataJson[$v_1];
            var $v_3 = new Microsoft.Crm.Client.Core.Framework.ErrorData($v_2.ErrorCode, $v_2.DiagnosticMessage);
            $v_3.set_isWarning($v_2.IsWarning);
            $v_3.set_message($v_2.Message);
            $v_3.set_title($v_2.Title);
            $v_3.set_stackTrace($v_2.StackTrace);
            $v_3.set_okButtonText($v_2.OkButtonText);
            $v_3.set_cancelButtonText($v_2.MoreInformationButtonText);
            $v_0[$v_1] = $v_3;
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.prototype = {
    $1S_0: null,
    $1B_0: false,
    $h_0: null,
    
    get_response: function() {
        return this.$1S_0;
    },
    
    get_errors: function() {
        return this.$h_0;
    },
    
    get_errorMessage: function() {
        return (this.$h_0.length > 0) ? this.$h_0[0].get_message() : '';
    },
    
    get_errorCode: function() {
        return (this.$h_0.length > 0) ? this.$h_0[0].get_errorCode() : 0;
    },
    
    get_success: function() {
        return this.$1B_0;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.ErrorDataRecord = function() {}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse = function(success, response, errors) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse.initializeBase(this, [ success, response, errors ]);
    if (this.$1B_0) {
        this.$1D_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.loadFromJson(this.$1S_0);
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse.prototype = {
    $1D_1: null,
    
    get_userContext: function() {
        return this.$1D_1;
    },
    
    set_userContext: function(value) {
        this.$1D_1 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.loadFromJson = function(attributePrivilegeJson) {
    var $v_0 = attributePrivilegeJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege(new Microsoft.Crm.Client.Core.Framework.Guid($v_0.AttributeId), $v_0.CanCreate, $v_0.CanRead, $v_0.CanUpdate);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.AttributePrivilegeRecord = function() {
    this.AttributeId = null;
    this.CanCreate = false;
    this.CanRead = false;
    this.CanUpdate = false;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.loadFromJson = function(featureDetailsJson) {
    var $v_0 = featureDetailsJson;
    return new Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails($v_0.FeatureName, $v_0.FeatureControlBitName, $v_0.Value);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.FeatureDetailsRecord = function() {}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.loadFromJson = function(offlineProfileJson) {
    var $v_0 = offlineProfileJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile(new Microsoft.Crm.Client.Core.Framework.Guid($v_0.ProfileId), $v_0.OfflineAvailableEntities, $v_0.ProfileVersion);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.OfflineProfileRecord = function() {
    this.ProfileId = null;
    this.OfflineAvailableEntities = null;
    this.ProfileVersion = null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.loadFromJson = function(organizationSettingsJson) {
    var $v_0 = organizationSettingsJson;
    var $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings(new Microsoft.Crm.Client.Core.Framework.Guid($v_0.OrganizationId), $v_0.OrganizationName, $v_0.LanguageCode, $v_0.EnabledLanguages, $v_0.CurrencyDisplayOption, $v_0.BlockedAttachmentExtensions, $v_0.MaxUploadFileSize, $v_0.ReportScriptErrors, $v_0.IsAutoSaveEnabled, $v_0.IsDuplicateDetectionEnabled, $v_0.IsDuplicateDetectionEnabledForOnlineCreateUpdate, $v_0.OrgCultureInfoLcid, $v_0.FullNameConventionCode, $v_0.FiscalCalendarStart, $v_0.FiscalPeriodFormatPeriod, $v_0.FiscalYearFormatPrefix, $v_0.FiscalYearFormatYear, $v_0.FiscalYearFormatSuffix, $v_0.FiscalPeriodType, $v_0.FiscalYearDisplayCode, $v_0.FiscalPeriodConnector, $v_0.IsSOPIntegrationEnabled, new Microsoft.Crm.Client.Core.Framework.Guid($v_0.BaseCurrencyId), $v_0.OrganizationUniqueName, $v_0.UseSkypeProtocol, $v_0.DefaultCountryCode, $v_0.PricingDecimalPrecision, $v_0.IsTelemetryEnabled, $v_0.IsTrialOrganization, $v_0.IsMocaOfflineFeatureEnabled, $v_0.MobileOfflineSyncInterval, $v_0.NorsyncServerConnectionString, $v_0.OverrideTrackInCrmBehaviour, $v_0.TrackCategorizedItems, $v_0.ShowWeekNumber, $v_0.DefaultThemeData, $v_0.DelveUrl, $v_0.KmUseExternalPortal, $v_0.KmExternalPortalUrl, $v_0.IsParature, $v_0.IsKMConfigured, $v_0.MaxIncidentMergeNumber, $v_0.MaxChildIncidentNumber, $v_0.IsConflictDetectionEnabledForMobileClient, $v_0.EnableMicrosoftFlowIntegration, $v_0.IsMobileClientOnDemandSyncEnabled, $v_0.IsExternalSearchIndexEnabled);
    $v_1.set_webServiceCallRetryPolicies($v_0.WebServiceCallRetryPolicies);
    $v_1.set_organizationFriendlyName($v_0.OrganizationFriendlyName);
    return $v_1;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.OrganizationSettingsRecord = function() {
    this.OrganizationId = null;
    this.OrganizationName = null;
    this.OrganizationFriendlyName = null;
    this.KmUseExternalPortal = false;
    this.KmExternalPortalUrl = '';
    this.OrganizationUniqueName = null;
    this.LanguageCode = 0;
    this.EnabledLanguages = null;
    this.CurrencyDisplayOption = 0;
    this.BlockedAttachmentExtensions = null;
    this.MaxUploadFileSize = 5242880;
    this.ReportScriptErrors = 0;
    this.WebServiceCallRetryPolicies = null;
    this.IsAutoSaveEnabled = true;
    this.IsDuplicateDetectionEnabled = false;
    this.IsDuplicateDetectionEnabledForOnlineCreateUpdate = false;
    this.OrgCultureInfoLcid = 0;
    this.FullNameConventionCode = 0;
    this.IsTelemetryEnabled = true;
    this.IsTrialOrganization = false;
    this.IsMocaOfflineFeatureEnabled = false;
    this.NorsyncServerConnectionString = null;
    this.OverrideTrackInCrmBehaviour = false;
    this.TrackCategorizedItems = false;
    this.DefaultThemeData = null;
    this.ShowWeekNumber = false;
    this.DelveUrl = null;
    this.IsParature = false;
    this.IsKMConfigured = false;
    this.MaxIncidentMergeNumber = 10;
    this.MaxChildIncidentNumber = 100;
    this.IsConflictDetectionEnabledForMobileClient = false;
    this.EnableMicrosoftFlowIntegration = true;
    this.IsMobileClientOnDemandSyncEnabled = false;
    this.IsExternalSearchIndexEnabled = false;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.loadFromJson = function(rolePrivilegeJson) {
    var $v_0 = rolePrivilegeJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege(new Microsoft.Crm.Client.Core.Framework.Guid($v_0.PrivilegeId), new Microsoft.Crm.Client.Core.Framework.Guid($v_0.BusinessUnitId), $v_0.Depth);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.RolePrivilegeRecord = function() {
    this.PrivilegeId = null;
    this.BusinessUnitId = null;
    this.Depth = 0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.loadFromJson = function(serverContextJson) {
    var $v_0 = serverContextJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext($v_0.ServerVersion, $v_0.DatabaseVersion);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.ServerContextRecord = function() {
    this.ServerVersion = null;
    this.DatabaseVersion = null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.loadFromJson = function(data) {
    var $v_0 = data;
    var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.parseDateTimeFromJSONString($v_0.DateStart);
    var $v_2 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.parseDateTimeFromJSONString($v_0.DateEnd);
    var $v_3 = $v_0.DaylightDelta.TotalMilliseconds;
    var $v_4 = new Microsoft.Crm.Client.Core.Framework.TransitionConstraint($v_0.DaylightTransitionStart.Day, $v_0.DaylightTransitionStart.DayOfWeek, $v_0.DaylightTransitionStart.Month - 1, $v_0.DaylightTransitionStart.Week, Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.parseDateTimeFromJSONString($v_0.DaylightTransitionStart.TimeOfDay), $v_0.DaylightTransitionStart.IsFixedDateRule);
    var $v_5 = new Microsoft.Crm.Client.Core.Framework.TransitionConstraint($v_0.DaylightTransitionEnd.Day, $v_0.DaylightTransitionEnd.DayOfWeek, $v_0.DaylightTransitionEnd.Month - 1, $v_0.DaylightTransitionEnd.Week, Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.parseDateTimeFromJSONString($v_0.DaylightTransitionEnd.TimeOfDay), $v_0.DaylightTransitionEnd.IsFixedDateRule);
    return new Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster($v_2, $v_1, $v_3, $v_4, $v_5);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.AdjustmentRuleRecord = function() {
    this.DateEnd = null;
    this.DateStart = null;
    this.DaylightDelta = null;
    this.DaylightTransitionStart = null;
    this.DaylightTransitionEnd = null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TransitionConstraintRecord = function() {
    this.Day = 0;
    this.DayOfWeek = 0;
    this.Month = 0;
    this.Week = 0;
    this.TimeOfDay = null;
    this.IsFixedDateRule = false;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TimeSpanRecord = function() {
    this.Days = 0;
    this.Hours = 0;
    this.Milliseconds = 0;
    this.Minutes = 0;
    this.Seconds = 0;
    this.Ticks = 0;
    this.TotalDays = 0;
    this.TotalHours = 0;
    this.TotalMilliseconds = 0;
    this.TotalMinutes = 0;
    this.TotalSeconds = 0;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.loadFromJson = function(timeZoneDefinitionJson) {
    var $v_0 = timeZoneDefinitionJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition($v_0.Bias, $v_0.TimeZoneCode, $v_0.UserInterfaceName);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.TimeZoneDefinitionRecord = function() {}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.loadFromJson = function(transactionCurrencyJson) {
    var $v_0 = transactionCurrencyJson;
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency(new Microsoft.Crm.Client.Core.Framework.Guid($v_0.CurrencyId), $v_0.CurrencyName, $v_0.CurrencySymbol, $v_0.CurrencyCode, $v_0.CurrencyPrecision);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.TransactionCurrencyRecord = function() {}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.loadFromJson = function(userContextJson) {
    var $v_0 = userContextJson;
    var $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid($v_0.UserId);
    var $v_2 = $v_0.UserName;
    var $v_3 = $v_0.MetadataLastModifiedTime;
    var $v_4 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid))();
    for (var $$arr_6 = $v_0.UserRoles, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
        var $v_P = $$arr_6[$$idx_8];
        $v_4.add(new Microsoft.Crm.Client.Core.Framework.Guid($v_P));
    }
    var $v_5 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid))();
    if ($v_0.ParentRootRoles) {
        for (var $$arr_B = $v_0.ParentRootRoles, $$len_C = $$arr_B.length, $$idx_D = 0; $$idx_D < $$len_C; ++$$idx_D) {
            var $v_Q = $$arr_B[$$idx_D];
            $v_5.add(new Microsoft.Crm.Client.Core.Framework.Guid($v_Q));
        }
    }
    var $v_6 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
    if ($v_0.OOBWebResources) {
        for (var $$arr_G = $v_0.OOBWebResources, $$len_H = $$arr_G.length, $$idx_I = 0; $$idx_I < $$len_H; ++$$idx_I) {
            var $v_R = $$arr_G[$$idx_I];
            $v_6.add($v_R);
        }
    }
    var $v_7 = $v_0.RoleNames;
    var $v_8 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.loadFromJson($v_0.OrganizationSettings);
    var $v_9 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.loadFromJson($v_0.UserSettings);
    var $v_A = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.loadFromJson($v_0.OfflineProfile);
    var $v_B = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege))();
    for (var $$arr_P = $v_0.RolePrivileges, $$len_Q = $$arr_P.length, $$idx_R = 0; $$idx_R < $$len_Q; ++$$idx_R) {
        var $v_S = $$arr_P[$$idx_R];
        var $v_T = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.loadFromJson($v_S);
        $v_B.set_item($v_T.get_privilegeId().toString(), $v_T);
    }
    var $v_C = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
    for (var $$arr_V = $v_0.AttributePrivileges, $$len_W = $$arr_V.length, $$idx_X = 0; $$idx_X < $$len_W; ++$$idx_X) {
        var $v_U = $$arr_V[$$idx_X];
        var $v_V = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.loadFromJson($v_U);
        $v_C.set_item($v_V.get_attributeId().toString(), $v_V);
    }
    var $v_D = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.loadFromJson($v_0.ServerContext);
    var $v_E = (_Script.isNullOrUndefined($v_0.FullServerVersion)) ? '' : $v_0.FullServerVersion;
    var $v_F = new Microsoft.Crm.Client.Core.Framework.Guid($v_0.TransactionCurrencyId);
    var $v_G = new Microsoft.Crm.Client.Core.Framework.Guid($v_0.DefaultDashboardId);
    var $v_H = new Microsoft.Crm.Client.Core.Framework.Guid($v_0.DefaultHomepageId);
    var $v_I = new Microsoft.Crm.Client.Core.Framework.Guid($v_0.DefaultInteractionCentricDashboardId);
    var $v_J = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency))();
    for (var $$arr_h = $v_0.TransactionCurrencies, $$len_i = $$arr_h.length, $$idx_j = 0; $$idx_j < $$len_i; ++$$idx_j) {
        var $v_W = $$arr_h[$$idx_j];
        var $v_X = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.loadFromJson($v_W);
        $v_J.set_item($v_X.get_transactionCurrencyId().toString(), $v_X);
    }
    var $v_K = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition))();
    for (var $$arr_n = $v_0.TimeZoneDefinitions, $$len_o = $$arr_n.length, $$idx_p = 0; $$idx_p < $$len_o; ++$$idx_p) {
        var $v_Y = $$arr_n[$$idx_p];
        var $v_Z = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.loadFromJson($v_Y);
        $v_K.set_item($v_Z.get_timeZoneCode().toString(), $v_Z);
    }
    var $v_L = {};
    $v_L['transactioncurrencybyid'] = $v_J;
    $v_L['timezonedefinitionbycode'] = $v_K;
    $v_L['islive'] = $v_0.IsLive;
    $v_L['isosdporganization'] = $v_0.IsOsdpOrganization;
    $v_L['usepathbasedurls'] = $v_0.UsePathBasedUrls;
    $v_L['entitymetadatasyncconfiguration'] = $v_0.EntityMetadataSyncConfiguration;
    var $v_M = {};
    var $$dict_w = $v_0.FCBContext;
    for (var $$key_x in $$dict_w) {
        var $v_a = { key: $$key_x, value: $$dict_w[$$key_x] };
        var $v_b = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.loadFromJson($v_a.value);
        if (!_Script.isNullOrUndefined($v_b)) {
            $v_M[$v_b.get_featureName()] = $v_b;
        }
    }
    var $v_N = $v_0.WebResourceTimestamp;
    var $v_O = new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext($v_1, $v_2, $v_4.toArray(), $v_5.toArray(), $v_6, $v_8, $v_9, $v_B, $v_C, $v_D, $v_7, $v_3, $v_F, $v_G, $v_H, $v_I, $v_E, $v_A, $v_L, $v_M, $v_N);
    return $v_O;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.UserContextRecord = function() {
    this.UserId = null;
    this.UserName = null;
    this.UserRoles = null;
    this.ParentRootRoles = null;
    this.OOBWebResources = null;
    this.RoleNames = null;
    this.OrganizationSettings = null;
    this.OfflineProfile = null;
    this.UserSettings = null;
    this.RolePrivileges = null;
    this.AttributePrivileges = null;
    this.ServerContext = null;
    this.FullServerVersion = null;
    this.MetadataLastModifiedTime = null;
    this.TransactionCurrencies = null;
    this.TimeZoneDefinitions = null;
    this.TransactionCurrencyId = null;
    this.IsLive = false;
    this.IsOsdpOrganization = false;
    this.UsePathBasedUrls = false;
    this.DefaultDashboardId = null;
    this.DefaultHomepageId = null;
    this.DefaultInteractionCentricDashboardId = null;
    this.FCBContext = null;
    this.EntityMetadataSyncConfiguration = null;
    this.WebResourceTimestamp = null;
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.loadFromJson = function(userSettingsJson) {
    var $v_0 = userSettingsJson;
    var $v_1 = $P_CRM.parseJSON($v_0.ClientCultureInfo);
    var $v_2 = $v_1['dateTimeFormat'];
    $v_2['eras'] = $v_1['eras'];
    var $v_3 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster))();
    for (var $$arr_5 = $v_0.TimeZoneAdjustmentRules, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
        var $v_4 = $$arr_5[$$idx_7];
        var $v_5 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.loadFromJson($v_4);
        $v_3.add($v_5);
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings($v_0.LanguageId, $v_0.UserCultureLcid, $v_1['name'], $v_1['numberFormat'], $v_2, $v_0.TimeZoneUtcOffsetMinutes, $v_3.toArray(), $v_0.RecordsPerPage, $v_0.ReportScriptErrors, $v_0.IsGuidedHelpEnabled, $v_0.ShowCalendarWeeks, $v_0.DefaultSearchExperience);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.UserSettingsRecord = function() {
    this.LanguageId = 0;
    this.UserCultureLcid = 0;
    this.ClientCultureInfo = null;
    this.TimeZoneUtcOffsetMinutes = 0;
    this.TimeZoneAdjustmentRules = [];
    this.RecordsPerPage = 0;
    this.ReportScriptErrors = 0;
    this.IsGuidedHelpEnabled = true;
    this.ShowCalendarWeeks = false;
    this.DefaultSearchExperience = 0;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse = function(request, textStatus, error, source, urlString) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.initializeBase(this, [ request, textStatus, error, source ]);
    try {
        if (!_Script.isNullOrUndefined(request) && request.readyState === 4) {
            if (textStatus === 'parsererror' && !_Script.isNullOrUndefined(error) && error.indexOf('<!DOCTYPE html') > -1) {
                this.$5_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml(error.substr(error.indexOf('<')));
            }
            else {
                this.$5_1 = (_Script.isNullOrUndefined(request.responseXML)) ? null : Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create(request.responseXML));
                if (_Script.isNull(this.$5_1) && !_Script.isNullOrUndefined(request.responseText)) {
                    var $v_0 = Sys.Net.XMLDOM(request.responseText);
                    this.$5_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0));
                }
            }
        }
    }
    catch ($v_1) {
        var $v_2 = (!_Script.isNullOrUndefined(error)) ? error : 'Unknown Error';
        this.$g_0 = 'Creating the error response failed for error: \'' + $v_2 + '\' due to exception: ' + $v_1.message;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.$22 = function() {
    return new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(new XMLHttpRequest(), '', '');
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.fromErrorCode = function(errorCode) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.$22();
    $v_0.$5_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorCode(errorCode);
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.fromErrorStatus = function(errorStatus) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.$22();
    if (!_Script.isNullOrUndefined(errorStatus)) {
        $v_0.$5_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorStatus(errorStatus);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.createFromHtml = function(errorHtml, source) {
    errorHtml = (!_Script.isNullOrUndefined(errorHtml)) ? errorHtml : '';
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse(new XMLHttpRequest(), '', '', source, '');
    try {
        if (errorHtml.indexOf('<!DOCTYPE html') > -1) {
            $v_0.$5_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml(errorHtml.substr(errorHtml.indexOf('<')));
        }
        else {
            $v_0.$g_0 = 'Creating the error response from HTML failed due to unexpected format for error: ' + errorHtml;
        }
    }
    catch ($v_1) {
        $v_0.$g_0 = 'Parsing error HTML failed for error: \'' + errorHtml + '\' due to exception: ' + $v_1.message;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.prototype = {
    $5_1: null,
    
    get_localizedMessage: function() {
        var $v_0 = window.Xrm;
        var $v_1 = $v_0.Page;
        var $v_2 = $v_1.context;
        var $v_3 = $v_2.client;
        var $v_4 = $v_3.getClient(null);
        if ($v_4 === 'Mobile') {
            var $v_5 = $v_0.Internal;
            var $v_6 = $v_5.getErrorMessage(this.$5_1.get_errorCode());
            return $v_6;
        }
        return this.get_message();
    },
    
    get_organizationServiceFault: function() {
        return this.$5_1;
    },
    
    set_organizationServiceFault: function(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_responseMessage: function() {
        return (_Script.isNullOrUndefined(this.$5_1) || _Script.isNullOrUndefined(this.$5_1.get_message())) ? Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse.prototype.get_responseMessage.call(this) : this.$5_1.get_message();
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse = function(soapResponse) {
    this.$K_0 = 'OrganizationResponse';
    this.$N_0 = soapResponse;
    if (soapResponse) {
        this.$N_0.addNamespace('s', 'http://schemas.xmlsoap.org/soap/envelope/');
        this.$N_0.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
        this.$N_0.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
        this.$N_0.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
        this.$N_0.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse.prototype = {
    $K_0: null,
    $N_0: null,
    
    get_name: function() {
        return this.$K_0;
    },
    
    get_responseName: function() {
        return this.$K_0;
    },
    
    set_responseName: function(value) {
        this.$K_0 = value;
        return value;
    },
    
    get_soapResponse: function() {
        return this.$N_0;
    },
    
    set_soapResponse: function(value) {
        this.$N_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse = function(soapResponse, columnSet, relatedEntitiesQuery) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        soapResponse.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
        this.$K_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        this.$0_1 = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap(soapResponse.selectSingleNode('.//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type=\'a:Entity\']'), relatedEntitiesQuery);
        if (!_Script.isNullOrUndefined(this.$0_1)) {
            var $v_0 = (!_Script.isNullOrUndefined(this.$0_1.get_relatedEntities())) ? this.$0_1.get_relatedEntities().get_relatedEntityQueries() : new Array(0);
            this.$0_1.updateColumnSet(columnSet, $v_0);
        }
    }
    else {
        this.$K_0 = 'RetreiveEntityResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.prototype = {
    $0_1: null,
    
    get_entityRecord: function() {
        return this.$0_1;
    },
    
    set_entityRecord: function(value) {
        this.$0_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse = function(soapResponse) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        this.$K_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        this.$1T_1 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:Results');
    }
    else {
        this.$K_0 = 'RetrieveMetadataChangesResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.prototype = {
    $1T_1: null,
    $11_1: null,
    
    get_entityMetadataCollection: function() {
        if (!this.$11_1 && this.$N_0 && this.$1T_1) {
            this.$11_1 = Xrm.Soap.EntityMetadataCollectionSerializer.$17(this.$1T_1);
        }
        return this.$11_1;
    },
    
    set_entityMetadataCollection: function(value) {
        this.$11_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse = function(soapResponse) {
    Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.initializeBase(this, [ soapResponse ]);
    if (soapResponse) {
        soapResponse.addNamespace('c', 'http://schemas.microsoft.com/xrm/2011/Metadata');
        this.$K_0 = soapResponse.selectSingleNode('.//d:ExecuteResult/a:ResponseName').get_innerText();
        var $v_0 = soapResponse.selectNodes('.//d:ExecuteResult/a:Results/a:KeyValuePairOfstringanyType/b:value[@i:type=\'a:EntityMetadataCollection\']/a:EntityMetadata/c:Attributes/c:AttributeMetadata');
        this.$L_1 = Xrm.Soap.AttributeMetadataSerializer.$3B($v_0);
    }
    else {
        this.$K_0 = 'RetrieveMultipleAttributeResponse';
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.prototype = {
    $L_1: null,
    
    get_attributeMetadata: function() {
        return this.$L_1;
    },
    
    set_attributeMetadata: function(value) {
        this.$L_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse = function(soapResponse) {
    if (!_Script.isNullOrUndefined(soapResponse)) {
        var $v_0 = soapResponse.get_domParserElement().firstChild.textContent;
        var $v_1 = new RegExp('<body>([^]*)</body>', 'gm');
        var $v_2 = new RegExp('<subject>([^]*)</subject>', 'gm');
        var $v_3 = $v_0.match($v_1);
        var $v_4 = $v_0.match($v_2);
        var $v_5 = '';
        if (!_Script.isNullOrUndefined($v_3)) {
            $v_5 = $v_3[0];
            $v_5 = HtmlEncoder.decode($v_5.substr(6, $v_5.length - 13));
        }
        var $v_6 = '';
        if (!_Script.isNullOrUndefined($v_4)) {
            $v_6 = $v_4[0];
            $v_6 = HtmlEncoder.decode($v_6.substr(9, $v_6.length - 19));
        }
        this.$1G_0 = $v_6;
        this.$1F_0 = $v_5;
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse.prototype = {
    $1G_0: null,
    
    get_subject: function() {
        return this.$1G_0;
    },
    
    set_subject: function(value) {
        this.$1G_0 = value;
        return value;
    },
    
    $1F_0: null,
    
    get_body: function() {
        return this.$1F_0;
    },
    
    set_body: function(value) {
        this.$1F_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Formatting');

Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter = function(timeZoneDefinitionsByCodes) {
    this.$1X_0 = timeZoneDefinitionsByCodes;
}
Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.get_instance = function() {
    return Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z;
}
Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.set_instance = function(value) {
    Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z = value;
    return value;
}
Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.prototype = {
    $1X_0: null,
    
    formatTimeZoneIntegerValue: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = parseInt(value.toString());
            if (!isNaN($v_1)) {
                var $v_2 = $v_1.toString();
                if (this.$1X_0.containsKey($v_2)) {
                    $v_0 = this.$1X_0.get_item($v_2).get_userInterfaceName();
                }
            }
        }
        return $v_0;
    },
    
    formatDurationIntegerValue: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        var $v_1 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        var $v_2 = 1E-08;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_3 = parseInt(value.toString());
            if (!isNaN($v_3)) {
                if ($v_3 < 60) {
                    $v_1 = String.localeFormat('{0:N0}', $v_3);
                    if ($v_3 === 1) {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Minute'), $v_1);
                    }
                    else {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Minutes'), $v_1);
                    }
                }
                else if ($v_3 >= 60 && $v_3 < 1440) {
                    var $v_4 = $v_3 / 60;
                    $v_1 = String.localeFormat('{0:N2}', $v_4);
                    if (Math.abs($v_4 % 1) <= $v_2 || Math.abs(($v_4 % 1) - 1) <= $v_2) {
                        $v_1 = String.localeFormat('{0:N0}', $v_4);
                    }
                    if (Math.abs($v_4 - 1) <= $v_2) {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Hour'), $v_1);
                    }
                    else {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Hours'), $v_1);
                    }
                }
                else {
                    var $v_5 = $v_3 / 1440;
                    $v_1 = String.localeFormat('{0:N2}', $v_5);
                    if (Math.abs($v_5 % 1) <= $v_2 || Math.abs(($v_5 % 1) - 1) <= $v_2) {
                        $v_1 = String.localeFormat('{0:N0}', $v_5);
                    }
                    if (Math.abs($v_5 - 1) <= $v_2) {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Day'), $v_1);
                    }
                    else {
                        $v_0 = String.localeFormat(Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString('AppDurationControl_Days'), $v_1);
                    }
                }
            }
        }
        return $v_0;
    },
    
    formatLanguageIntegerValue: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = parseInt(value.toString());
            if (!isNaN($v_1)) {
                var $v_2 = 'Language_{0}';
                var $v_3 = String.format($v_2, $v_1.toString());
                $v_0 = Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString($v_3);
                if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0) || $v_0.startsWith('Language_')) {
                    $v_2 = 'Locale_DisplayName_{0}';
                    $v_3 = String.format($v_2, $v_1.toString());
                    $v_0 = Microsoft.Crm.Client.Core.Framework.Common.ResourceManager.getLocalizedString($v_3);
                }
            }
        }
        return $v_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.WebService');

Microsoft.Crm.Client.Core.Storage.WebService.ICallerOriginProvider = function() {}
Microsoft.Crm.Client.Core.Storage.WebService.ICallerOriginProvider.registerInterface('Microsoft.Crm.Client.Core.Storage.WebService.ICallerOriginProvider');


Microsoft.Crm.Client.Core.Storage.WebService.ISettings = function() {}
Microsoft.Crm.Client.Core.Storage.WebService.ISettings.registerInterface('Microsoft.Crm.Client.Core.Storage.WebService.ISettings');


Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse = function(request, textStatus, error, source) {
    this.$S_0 = request;
    this.$1v_0 = textStatus;
    this.$g_0 = error;
    this.$d_0 = (!_Script.isNullOrUndefined(source)) ? source : 'Unknown';
}
Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse.prototype = {
    $S_0: null,
    $1v_0: null,
    $g_0: null,
    
    get_request: function() {
        return this.$S_0;
    },
    
    get_textStatus: function() {
        return this.$1v_0;
    },
    
    get_error: function() {
        return this.$g_0;
    },
    
    set_error: function(value) {
        this.$g_0 = value;
        return value;
    },
    
    get_message: function() {
        return this.get_responseMessage();
    },
    
    $d_0: null,
    
    get_source: function() {
        return this.$d_0;
    },
    
    set_source: function(value) {
        this.$d_0 = value;
        return value;
    },
    
    get_responseMessage: function() {
        if (!_Script.isNullOrUndefined(this.$S_0) && this.$S_0.readyState === 4) {
            return (!_Script.isNullOrUndefined(this.$S_0)) ? this.$S_0.responseText : '';
        }
        return '';
    }
}


Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase = function(serverUri, authenticationManager, callerOriginProvider) {
    this.$P_0 = authenticationManager;
    if (!_Script.isNullOrUndefined(authenticationManager)) {
        var $$t_5 = this;
        this.$P_0.add_onAuthenticated(function($p1_0, $p1_1) {
            if (!_Script.isNullOrUndefined($$t_5.$f_0)) {
                $$t_5.$f_0.resolve(null);
                $$t_5.$f_0 = null;
            }
        });
    }
    this.callerOriginProvider = callerOriginProvider;
    this.$F_0 = Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.getNormalizedServerUrl(serverUri);
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.removeNilNodes = function(soapResult) {
    return soapResult.replace(new RegExp('\\<[\\w+:]+ i:nil=\"true\"( xmlns:\\w+=\"[\\w:\\/.]+\")?\\ ?/>', 'g'), '');
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.getNormalizedServerUrl = function(serverUrl) {
    if (serverUrl.substring(serverUrl.length - 1, serverUrl.length) === '/') {
        return serverUrl.substring(0, serverUrl.length - 1);
    }
    return serverUrl;
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.set_$2K = function($p0) {
    Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.$19 = $p0;
    if (Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.$19 > 0) {
        $P_CRM(window).triggerHandler('RemoteRequestPending');
    }
    else {
        $P_CRM(window).triggerHandler('NoRemoteRequestPending');
    }
    return $p0;
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.prototype = {
    $F_0: null,
    $f_0: null,
    $P_0: null,
    callerOriginProvider: null,
    $1E_0: null,
    
    get_serverUrl: function() {
        return this.$F_0;
    },
    
    get_settings: function() {
        return this.$1E_0;
    },
    
    set_settings: function(value) {
        this.$1E_0 = value;
        return value;
    },
    
    createSoapRequestBody: function(soapBody) {
        return '<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Header>' + this.getSoapHeaders() + '</s:Header>' + '<s:Body>' + soapBody + '</s:Body>' + '</s:Envelope>';
    },
    
    getSoapHeaders: function() {
        return null;
    },
    
    executeJsonRequest: function(requestData) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse);
        var $v_1 = this.createRequestSource(requestData);
        var $$t_7 = this, $$t_8 = this;
        this.$26_0(requestData).then(function($p1_0) {
            var $v_2 = $p1_0;
            if ($v_2.indexOf('<!DOCTYPE html') > -1) {
                $v_0.reject($$t_7.createErrorResponseFromHtml($v_2, $v_1));
            }
            else {
                try {
                    $v_0.resolve($P_CRM.parseJSON($v_2));
                }
                catch ($v_3) {
                    $v_0.reject($$t_7.createErrorResponseWithSource(new XMLHttpRequest(), '', 'Exception when parsing JSON: ' + $v_2 + '\nException: ' + $v_3, $v_1, requestData.requestOptions.endPointUrl));
                }
            }
        }, function($p1_0) {
            $p1_0.$d_0 = $v_1;
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    executeSoapRequest: function(requestData) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode, Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse);
        var $v_1 = this.createRequestSource(requestData);
        var $$t_5 = this, $$t_6 = this;
        this.$26_0(requestData).then(function($p1_0) {
            $v_0.resolve(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($p1_0));
        }, function($p1_0) {
            $p1_0.$d_0 = $v_1;
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $26_0: function($p0) {
        $P_CRM.support.cors = true;
        var $v_0 = new jQueryAjaxOptions();
        $v_0.cache = false;
        $v_0.type = $p0.requestOptions.requestType;
        $v_0.data = $p0.requestText;
        $v_0.contentType = $p0.requestOptions.contentType;
        $v_0.dataType = $p0.requestOptions.dataType;
        $v_0.url = $p0.requestOptions.endPointUrl;
        var $$t_F = this;
        $v_0.beforeSend = function($p1_0) {
            if (!_Script.isNullOrUndefined($p0.requestOptions.soapAction)) {
                $p1_0.setRequestHeader('SOAPAction', $p0.requestOptions.soapAction);
            }
            if (!$p0.requestOptions.doAuthentication && !_Script.isNullOrUndefined($$t_F.$P_0)) {
                $$t_F.$P_0.updateRequestForAuthentication($p1_0);
            }
            if (!_Script.isNullOrUndefined($$t_F.callerOriginProvider)) {
                $$t_F.callerOriginProvider.updateRequestForCallerOriginUniqueId($p1_0);
                $$t_F.callerOriginProvider.updateRequestForCallerOriginVersion($p1_0);
            }
        };
        var $v_1 = {};
        $v_1['cache-control'] = 'no-cache';
        this.addHeaders($v_1, $p0);
        $v_0.headers = $v_1;
        var $v_2 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse);
        var $v_3 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData, Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse);
        var $v_4 = new Microsoft.Crm.Client.Core.Framework.PerformanceStopwatch(this.get_performanceStopwatch());
        $v_4.start();
        var $$t_D;
        ($$t_D = Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase).set_$2K(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.$19 + 1);
        var $$t_G = this, $$t_H = this, $$t_I = this;
        $v_3.always(function($p1_0) {
            $v_4.stop();
            $$t_G.$3H_0($v_4, $p0, $p1_0);
            var $$t_E;
            ($$t_E = Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase).set_$2K(Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.$19 - 1);
        }).then(function($p1_0) {
            $v_2.resolve($p1_0.data);
        }, function($p1_0) {
            $v_2.reject($p1_0);
        });
        var $v_5 = this.retrieveRetryPolicy($p0.requestOptions.endPointUrl);
        var $v_6 = ($v_5) ? $v_5.TotalRetryCount : 0;
        var $v_7 = ($v_5) ? $v_5.RetryWaitIntervalMilliseconds : 0;
        this.$i_0($p0, $v_0, $v_3, $v_6, $v_7, 0, 0, 5, $p0.requestOptions.doAuthentication);
        return $v_2.promise();
    },
    
    $3H_0: function($p0, $p1, $p2) {
    },
    
    $i_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        var $v_0 = this.createRequestSource($p0);
        if ($p8 && !_Script.isNullOrUndefined(this.$P_0)) {
            switch (this.$P_0.get_status()) {
                case 0:
                    this.$23_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
                    return;
                case 2:
                    $p2.reject(this.createErrorResponseWithSource(new XMLHttpRequest(), '', 'Authentication timed out', $v_0, $p1.url));
                    return;
            }
        }
        var $v_1 = $P_CRM.ajax($p1);
        var $$t_I = this, $$t_J = this;
        $v_1.success(function($p1_0) {
            if (_Script.isNullOrUndefined($p1_0)) {
                $p2.reject($$t_I.createErrorResponseWithSource(new XMLHttpRequest(), '', 'Response data null', $v_0, $p1.url));
            }
            else {
                try {
                    if ($$t_I.$2M_0($p0, $p1)) {
                        var $v_3 = new ActiveXObject('Microsoft.XMLDOM');
                        oXML.loadXML(data);
                        $p1_0 = $v_3;
                    }
                }
                catch ($v_4) {
                    $p2.reject($$t_I.createErrorResponseWithSource(new XMLHttpRequest(), '', 'Exception when parsing text response to XML: ' + $p1_0.toString() + '\nException: ' + $v_4, $v_0, $p0.requestOptions.endPointUrl));
                }
                var $v_2 = $$t_I.createResponseData($v_1, $p1_0);
                $p2.resolve($v_2);
            }
        }).error(function($p1_0, $p1_1, $p1_2) {
            if ($p1_0.status === 401 && !_Script.isNullOrUndefined($$t_J.$P_0)) {
                if ($p8) {
                    $$t_J.$23_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
                    $$t_J.$P_0.refreshAuthToken();
                }
                else {
                    $p2.reject($$t_J.createErrorResponseWithSource(new XMLHttpRequest(), '', 'Not Authorized', $v_0, $p1.url));
                }
            }
            else if ($p1_0.status === 400 && $p5 < 5) {
                $$t_J.$1R_0($p1.url, $p1_0.status, $p1_2.toString(), 5 - $p5);
                ++$p5;
                $$t_J.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
            }
            else if ($p1_0.status === 503 && $p3 > 0) {
                $$t_J.$1R_0($p1.url, $p1_0.status, $p1_2.toString(), $p3);
                --$p3;
                window.setTimeout(function() {
                    $$t_J.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
                }, $p4);
            }
            else if (!$p1_0.status && $p6 < 1) {
                $$t_J.$1R_0($p1.url, $p1_0.status, $p1_2.toString(), 1 - $p6);
                ++$p6;
                $$t_J.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
            }
            else if ($p1_0.status === 500 && $$t_J.canRetryServerError($$t_J.createErrorResponseWithSource($p1_0, $p1_1, $p1_2.toString(), $v_0, $p1.url)) && $p7 > 0) {
                $$t_J.$1R_0($p1.url, $p1_0.status, $p1_2.toString(), $p7 - 1);
                --$p7;
                window.setTimeout(function() {
                    $$t_J.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
                }, 1000);
            }
            else if ($p1_0.status === 200 && $p1_1 === 'parsererror' && !$$t_J.$2M_0($p0, $p1)) {
                $p0.requestOptions.dataType = 'text';
                $p1.dataType = 'text';
                $$t_J.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
            }
            else {
                Microsoft.Crm.Client.Core.Framework.DynamicsTrace.logInfo($$t_J.get_name() + '_ExecuteRequestWithRetry_Failure', 1005, String.format('Response: {0}, Exception: {1}', $p1_0.responseText, $p1_2.toString()));
                $$t_J.handleServiceError($p0, $p2, $p1_0, $p1_1, $p1_2, $p1.url);
            }
        });
    },
    
    $1R_0: function($p0, $p1, $p2, $p3) {
    },
    
    $2z_0: function() {
        var $v_0 = false;
        var $v_1 = navigator.userAgent;
        if ($v_1.toLowerCase().indexOf('edge') > -1 && $v_1.toLowerCase().indexOf('windows nt') > -1) {
            $v_0 = true;
        }
        return Sys.Browser.agent === Sys.Browser.InternetExplorer || $v_0;
    },
    
    $2M_0: function($p0, $p1) {
        return this.$2z_0() && $p1.dataType === 'text' && $p0.name === 'RetrieveMultiple';
    },
    
    $23_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        if (_Script.isNullOrUndefined(this.$f_0)) {
            this.$f_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Object, Object);
        }
        var $$t_9 = this;
        this.$f_0.done(function() {
            $$t_9.$i_0($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
        });
    },
    
    retrieveRetryPolicy: function(endPointUrl) {
        var $v_0 = null;
        if (!_Script.isNullOrUndefined(this.$1E_0)) {
            $v_0 = this.$1E_0.getWebServiceCallRetryPolicy(endPointUrl);
        }
        return $v_0;
    },
    
    addHeaders: function(headers, requestData) {
    },
    
    canRetryServerError: function(response) {
        return false;
    },
    
    createResponseData: function(xhr, data) {
        var $v_0 = new Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData();
        if (!_Script.isNullOrUndefined(xhr)) {
            $v_0.responseText = (!_Script.isNullOrUndefined(xhr.responseText)) ? xhr.responseText : '';
            $v_0.responseSize = $v_0.responseText.length;
        }
        else if (String.isInstanceOfType(data)) {
            $v_0.responseText = data;
            $v_0.responseSize = (data).length;
        }
        $v_0.data = data;
        return $v_0;
    },
    
    createJsonRequestOptions: function(endPoint, method) {
        if (_Script.isNullOrUndefined(method) || method === '') {
            method = 'POST';
        }
        return Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.create(endPoint, method, 'application/json; charset=utf-8', 'text', endPoint, this.get_doAuthentication());
    },
    
    createSoapRequestOptions: function(endPoint, soapAction) {
        var $v_0;
        $v_0 = 'xml';
        return Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.create(endPoint, 'POST', 'text/xml; charset=utf-8', $v_0, soapAction, this.get_doAuthentication());
    },
    
    get_doAuthentication: function() {
        return false;
    },
    
    createRequestSource: function(requestData) {
        var $v_0 = 'ServiceName : ' + this.get_name() + ' - ' + 'RequestName : ' + requestData.name + ' - ' + 'ContextString : ' + ((!_Script.isNullOrUndefined(requestData.context)) ? requestData.context.toString() : 'Null');
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData = function() {
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.create = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData();
    $v_0.name = $p0;
    $v_0.requestText = $p1;
    $v_0.requestSize = (!_Script.isNullOrUndefined($p1)) ? $p1.length : 0;
    $v_0.requestOptions = $p2;
    $v_0.context = $p3;
    $v_0.childRequests = $p4;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.prototype = {
    name: null,
    requestText: null,
    requestSize: 0,
    requestOptions: null,
    childRequests: null,
    context: null
}


Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions = function() {
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.create = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions();
    $v_0.endPointUrl = $p0;
    $v_0.requestType = $p1;
    $v_0.contentType = $p2;
    $v_0.dataType = $p3;
    $v_0.soapAction = $p4;
    $v_0.doAuthentication = $p5;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.prototype = {
    endPointUrl: null,
    requestType: null,
    contentType: null,
    dataType: null,
    soapAction: null,
    doAuthentication: false
}


Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData = function() {
}
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData.prototype = {
    responseText: null,
    responseSize: 0,
    data: null
}


Microsoft.Crm.Client.Core.Framework.DisposableBase.registerClass('Microsoft.Crm.Client.Core.Framework.DisposableBase', null, Sys.IDisposable);
Microsoft.Crm.Client.Core.Storage.Common.OfflineState.registerClass('Microsoft.Crm.Client.Core.Storage.Common.OfflineState');
Microsoft.Crm.Client.Core.Models.FormModel.registerClass('Microsoft.Crm.Client.Core.Models.FormModel', Microsoft.Crm.Client.Core.Framework.DisposableBase, Microsoft.Crm.Client.Core.Models.IFormModel, Microsoft.Crm.Client.Core.Framework.INotifyPropertyChanged);
Microsoft.Crm.Client.Core.Models.RecordModel.registerClass('Microsoft.Crm.Client.Core.Models.RecordModel', Microsoft.Crm.Client.Core.Models.FormModel, Microsoft.Crm.Client.Core.Models.IRecordModel, Microsoft.Crm.Client.Core.Models.ICloneableModel, Microsoft.Crm.Client.Core.Models.IModel, Microsoft.Crm.Client.Core.Framework.IRootModel, Microsoft.Crm.Client.Core.Framework.INotifyPropertyChanged, Microsoft.Crm.Client.Core.Models.IReferenceModel);
Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator', null, Microsoft.Crm.Client.Core.Models.Validation.IIsRequiredValidator, Microsoft.Crm.Client.Core.Models.Validation.IValidator);
Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.CurrencyValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator, Microsoft.Crm.Client.Core.Models.Validation.ICurrencyValidator, Microsoft.Crm.Client.Core.Models.Validation.IValidator);
Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.DateTimeValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator, Microsoft.Crm.Client.Core.Models.Validation.IDateTimeValidator, Microsoft.Crm.Client.Core.Models.Validation.IValidator);
Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator, Microsoft.Crm.Client.Core.Models.Validation.IDecimalValidator, Microsoft.Crm.Client.Core.Models.Validation.IValidator);
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.IntegerValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.MoneyValidator', Microsoft.Crm.Client.Core.Models.Validation.DecimalValidator, Microsoft.Crm.Client.Core.Models.Validation.IMoneyValidator, Microsoft.Crm.Client.Core.Models.Validation.IValidator);
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.registerClass('Microsoft.Crm.Client.Core.Models.Validation.UrlValidator', Microsoft.Crm.Client.Core.Models.Validation.IsRequiredValidator);
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEventArgs', Sys.EventArgs);
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents');
Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.RecordUpdateEventArgs', Sys.EventArgs);
Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache', null, Microsoft.Crm.Client.Core.Storage.DataApi.IMetadataCache);
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.DataSource', null, Microsoft.Crm.Client.Core.Storage.DataApi.IDataSource);
Microsoft.Crm.Client.Core.Storage.DataApi.TimeZoneAdjustersResponse.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.TimeZoneAdjustersResponse');
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.registerClass('Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService', Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.ICrmSoapService);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmWebServiceSettings', null, Microsoft.Crm.Client.Core.Storage.WebService.ISettings);
Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes.registerClass('Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes');
Microsoft.Crm.Client.Core.Models.Formatters.FormFieldFormatter.registerClass('Microsoft.Crm.Client.Core.Models.Formatters.FormFieldFormatter');
Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter.registerClass('Microsoft.Crm.Client.Core.Models.Formatters.EntityFormFieldFormatter', Microsoft.Crm.Client.Core.Models.Formatters.FormFieldFormatter);
Xrm.Soap.AttributeMetadataSerializer.registerClass('Xrm.Soap.AttributeMetadataSerializer');
Xrm.Soap.BooleanValueSerializer.registerClass('Xrm.Soap.BooleanValueSerializer');
Xrm.Soap.BusinessNotificationArraySerializer.registerClass('Xrm.Soap.BusinessNotificationArraySerializer');
Xrm.Soap.BusinessNotificationParameterSerializer.registerClass('Xrm.Soap.BusinessNotificationParameterSerializer');
Xrm.Soap.BusinessNotificationSerializer.registerClass('Xrm.Soap.BusinessNotificationSerializer');
Xrm.Soap.ColumnSetSerializer.registerClass('Xrm.Soap.ColumnSetSerializer');
Xrm.Soap.CrmDateTimeSerializer.registerClass('Xrm.Soap.CrmDateTimeSerializer');
Xrm.Soap.EntityCollectionSerializer.registerClass('Xrm.Soap.EntityCollectionSerializer');
Xrm.Soap.EntityMetadataCollectionSerializer.registerClass('Xrm.Soap.EntityMetadataCollectionSerializer');
Xrm.Soap.EntityMetadataCollectionSerializer.AttributeMetadataCollectionSerializerResult.registerClass('Xrm.Soap.EntityMetadataCollectionSerializer.AttributeMetadataCollectionSerializerResult');
Xrm.Soap.EntityRecordSerializer.registerClass('Xrm.Soap.EntityRecordSerializer');
Xrm.Soap.EntityReferenceCollectionSerializer.registerClass('Xrm.Soap.EntityReferenceCollectionSerializer');
Xrm.Soap.EntityReferenceSerializer.registerClass('Xrm.Soap.EntityReferenceSerializer');
Xrm.Soap.ErrorInfoSerializer.registerClass('Xrm.Soap.ErrorInfoSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.GuidArraySerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.GuidArraySerializer');
Xrm.Soap.StringArraySerializer.registerClass('Xrm.Soap.StringArraySerializer');
Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer.registerClass('Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer');
Xrm.Soap.ExecuteMultipleSettingsSerializer.registerClass('Xrm.Soap.ExecuteMultipleSettingsSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.LabelSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.OptionSetMetadataSerializer');
Xrm.Soap.OrganizationRequestCollectionSerializer.registerClass('Xrm.Soap.OrganizationRequestCollectionSerializer');
Xrm.Soap.Parser.registerClass('Xrm.Soap.Parser');
Xrm.Soap.PrincipalAccessArraySerializer.registerClass('Xrm.Soap.PrincipalAccessArraySerializer');
Xrm.Soap.QueryByEntityNameDictionarySerializer.registerClass('Xrm.Soap.QueryByEntityNameDictionarySerializer');
Xrm.Soap.InputArgumentCollectionSerializer.registerClass('Xrm.Soap.InputArgumentCollectionSerializer');
Xrm.Soap.QuickFindResultCollectionSerializer.registerClass('Xrm.Soap.QuickFindResultCollectionSerializer');
Xrm.Soap.QuickFindResultSerializer.registerClass('Xrm.Soap.QuickFindResultSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.RelatedEntityCollectionSerializer');
Xrm.Soap.RelationshipQueryCollectionSerializer.registerClass('Xrm.Soap.RelationshipQueryCollectionSerializer');
Xrm.Soap.RelationshipSerializer.registerClass('Xrm.Soap.RelationshipSerializer');
Xrm.Soap.Serializer.registerClass('Xrm.Soap.Serializer');
Xrm.Soap.ResourceInfoSerializer.registerClass('Xrm.Soap.ResourceInfoSerializer');
Xrm.Soap.ResponseSerializer.registerClass('Xrm.Soap.ResponseSerializer');
Xrm.Soap.SecurityPrivilegeMetadataCollectionSerializer.registerClass('Xrm.Soap.SecurityPrivilegeMetadataCollectionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.SerializerUtility');
Xrm.Soap.TraceInfoSerializer.registerClass('Xrm.Soap.TraceInfoSerializer');
Xrm.Soap.ValidationResultSerializer.registerClass('Xrm.Soap.ValidationResultSerializer');
Xrm.Soap.Write.registerClass('Xrm.Soap.Write');
Xrm.Soap.ConvertKitToProductRequestSerializer.registerClass('Xrm.Soap.ConvertKitToProductRequestSerializer');
Xrm.Soap.ConvertProductToKitRequestSerializer.registerClass('Xrm.Soap.ConvertProductToKitRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer');
Xrm.Gen.AddItemCampaignRequestSerializer.registerClass('Xrm.Gen.AddItemCampaignRequestSerializer');
Xrm.Gen.AddItemCampaignResponseSerializer.registerClass('Xrm.Gen.AddItemCampaignResponseSerializer');
Xrm.Gen.CloseQuoteRequestSerializer.registerClass('Xrm.Gen.CloseQuoteRequestSerializer');
Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer.registerClass('Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer');
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer.registerClass('Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer');
Xrm.Gen.CalculateTotalTimeIncidentRequestSerializer.registerClass('Xrm.Gen.CalculateTotalTimeIncidentRequestSerializer');
Xrm.Gen.CalculateTotalTimeIncidentResponseSerializer.registerClass('Xrm.Gen.CalculateTotalTimeIncidentResponseSerializer');
Xrm.Gen.RetrieveCardDataRequestSerializer.registerClass('Xrm.Gen.RetrieveCardDataRequestSerializer');
Xrm.Gen.RetrieveCardDataResponseSerializer.registerClass('Xrm.Gen.RetrieveCardDataResponseSerializer');
Xrm.Gen.ToggleGuidedHelpRequestSerializer.registerClass('Xrm.Gen.ToggleGuidedHelpRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer');
Xrm.Gen.CanCloseOpportunityRequestSerializer.registerClass('Xrm.Gen.CanCloseOpportunityRequestSerializer');
Xrm.Gen.CanCloseOpportunityResponseSerializer.registerClass('Xrm.Gen.CanCloseOpportunityResponseSerializer');
Xrm.Gen.ExportTemplateToWordResponseSerializer.registerClass('Xrm.Gen.ExportTemplateToWordResponseSerializer');
Xrm.Gen.ExportTemplateToWordRequestSerializer.registerClass('Xrm.Gen.ExportTemplateToWordRequestSerializer');
Xrm.Gen.ExportWordDocumentResponseSerializer.registerClass('Xrm.Gen.ExportWordDocumentResponseSerializer');
Xrm.Gen.ExportWordDocumentRequestSerializer.registerClass('Xrm.Gen.ExportWordDocumentRequestSerializer');
Xrm.Gen.SetWordTemplateRequestSerializer.registerClass('Xrm.Gen.SetWordTemplateRequestSerializer');
Xrm.Gen.AddDynamicPropertyRequestSerializer.registerClass('Xrm.Gen.AddDynamicPropertyRequestSerializer');
Xrm.Gen.AddDynamicPropertyResponseSerializer.registerClass('Xrm.Gen.AddDynamicPropertyResponseSerializer');
Xrm.Gen.AddItemCampaignActivityRequestSerializer.registerClass('Xrm.Gen.AddItemCampaignActivityRequestSerializer');
Xrm.Gen.AddItemCampaignActivityResponseSerializer.registerClass('Xrm.Gen.AddItemCampaignActivityResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer');
Xrm.Gen.AddRecurrenceRequestSerializer.registerClass('Xrm.Gen.AddRecurrenceRequestSerializer');
Xrm.Gen.AddRecurrenceResponseSerializer.registerClass('Xrm.Gen.AddRecurrenceResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer');
Xrm.Gen.BestTimeToEmailRequestSerializer.registerClass('Xrm.Gen.BestTimeToEmailRequestSerializer');
Xrm.Gen.BestTimeToEmailResponseSerializer.registerClass('Xrm.Gen.BestTimeToEmailResponseSerializer');
Xrm.Gen.FollowEmailAttachmentRequestSerializer.registerClass('Xrm.Gen.FollowEmailAttachmentRequestSerializer');
Xrm.Gen.FollowEmailAttachmentResponseSerializer.registerClass('Xrm.Gen.FollowEmailAttachmentResponseSerializer');
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer');
Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer.registerClass('Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer');
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer');
Xrm.Gen.CancelContractRequestSerializer.registerClass('Xrm.Gen.CancelContractRequestSerializer');
Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer.registerClass('Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer');
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer');
Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer.registerClass('Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer');
Xrm.Gen.GetRIProvisioningStatusRequestSerializer.registerClass('Xrm.Gen.GetRIProvisioningStatusRequestSerializer');
Xrm.Gen.GetRIProvisioningStatusResponseSerializer.registerClass('Xrm.Gen.GetRIProvisioningStatusResponseSerializer');
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer.registerClass('Xrm.Gen.GetRITenantEndpointUrlRequestSerializer');
Xrm.Gen.GetRITenantEndpointUrlResponseSerializer.registerClass('Xrm.Gen.GetRITenantEndpointUrlResponseSerializer');
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer.registerClass('Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer');
Xrm.Gen.AssignRequestSerializer.registerClass('Xrm.Gen.AssignRequestSerializer');
Xrm.Gen.AssociateRequestSerializer.registerClass('Xrm.Gen.AssociateRequestSerializer');
Xrm.Gen.CloneContractRequestSerializer.registerClass('Xrm.Gen.CloneContractRequestSerializer');
Xrm.Gen.CloneContractResponseSerializer.registerClass('Xrm.Gen.CloneContractResponseSerializer');
Xrm.Gen.RenewContractRequestSerializer.registerClass('Xrm.Gen.RenewContractRequestSerializer');
Xrm.Gen.RenewContractResponseSerializer.registerClass('Xrm.Gen.RenewContractResponseSerializer');
Xrm.Gen.RemoveDynamicPropertyRequestSerializer.registerClass('Xrm.Gen.RemoveDynamicPropertyRequestSerializer');
Xrm.Gen.OverrideDynamicPropertyResponseSerializer.registerClass('Xrm.Gen.OverrideDynamicPropertyResponseSerializer');
Xrm.Gen.OverrideDynamicPropertyRequestSerializer.registerClass('Xrm.Gen.OverrideDynamicPropertyRequestSerializer');
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer.registerClass('Xrm.Gen.OverwriteDynamicPropertyRequestSerializer');
Xrm.Gen.OverwriteDynamicPropertyResponseSerializer.registerClass('Xrm.Gen.OverwriteDynamicPropertyResponseSerializer');
Xrm.Gen.FlushMetadataCacheRequestSerializer.registerClass('Xrm.Gen.FlushMetadataCacheRequestSerializer');
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer.registerClass('Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer');
Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer.registerClass('Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer');
Xrm.Gen.BookRequestSerializer.registerClass('Xrm.Gen.BookRequestSerializer');
Xrm.Gen.BookResponseSerializer.registerClass('Xrm.Gen.BookResponseSerializer');
Xrm.Gen.CreateAndAssociateRequestSerializer.registerClass('Xrm.Gen.CreateAndAssociateRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer');
Xrm.Gen.CancelSalesOrderRequestSerializer.registerClass('Xrm.Gen.CancelSalesOrderRequestSerializer');
Xrm.Gen.CloneProductRequestSerializer.registerClass('Xrm.Gen.CloneProductRequestSerializer');
Xrm.Gen.CloneProductResponseSerializer.registerClass('Xrm.Gen.CloneProductResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer');
Xrm.Gen.CheckInDocumentRequestSerializer.registerClass('Xrm.Gen.CheckInDocumentRequestSerializer');
Xrm.Gen.CheckoutDocumentRequestSerializer.registerClass('Xrm.Gen.CheckoutDocumentRequestSerializer');
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer.registerClass('Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer');
Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer.registerClass('Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer');
Xrm.Gen.ExecuteWorkflowRequestSerializer.registerClass('Xrm.Gen.ExecuteWorkflowRequestSerializer');
Xrm.Gen.ExecuteWorkflowResponseSerializer.registerClass('Xrm.Gen.ExecuteWorkflowResponseSerializer');
Xrm.Gen.GetActualDateResponseSerializer.registerClass('Xrm.Gen.GetActualDateResponseSerializer');
Xrm.Gen.GetActualDateRequestSerializer.registerClass('Xrm.Gen.GetActualDateRequestSerializer');
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer.registerClass('Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer');
Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer.registerClass('Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer');
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer.registerClass('Xrm.Gen.GetEntitiesForAzureMLRequestSerializer');
Xrm.Gen.GetEntitiesForAzureMLResponseSerializer.registerClass('Xrm.Gen.GetEntitiesForAzureMLResponseSerializer');
Xrm.Gen.GetFieldListForAzureMLRequestSerializer.registerClass('Xrm.Gen.GetFieldListForAzureMLRequestSerializer');
Xrm.Gen.GetFieldListForAzureMLResponseSerializer.registerClass('Xrm.Gen.GetFieldListForAzureMLResponseSerializer');
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer.registerClass('Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer');
Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer.registerClass('Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer');
Xrm.Gen.GetTrackingTokenEmailRequestSerializer.registerClass('Xrm.Gen.GetTrackingTokenEmailRequestSerializer');
Xrm.Gen.GetTrackingTokenEmailResponseSerializer.registerClass('Xrm.Gen.GetTrackingTokenEmailResponseSerializer');
Xrm.Gen.CopyDynamicListToStaticRequestSerializer.registerClass('Xrm.Gen.CopyDynamicListToStaticRequestSerializer');
Xrm.Gen.CopyDynamicListToStaticResponseSerializer.registerClass('Xrm.Gen.CopyDynamicListToStaticResponseSerializer');
Xrm.Gen.DeleteOpenInstancesRequestSerializer.registerClass('Xrm.Gen.DeleteOpenInstancesRequestSerializer');
Xrm.Gen.NewDocumentRequestSerializer.registerClass('Xrm.Gen.NewDocumentRequestSerializer');
Xrm.Gen.NewDocumentResponseSerializer.registerClass('Xrm.Gen.NewDocumentResponseSerializer');
Xrm.Gen.ReleaseToQueueRequestSerializer.registerClass('Xrm.Gen.ReleaseToQueueRequestSerializer');
Xrm.Gen.RemoveFromQueueRequestSerializer.registerClass('Xrm.Gen.RemoveFromQueueRequestSerializer');
Xrm.Gen.SendFaxRequestSerializer.registerClass('Xrm.Gen.SendFaxRequestSerializer');
Xrm.Gen.SetBusinessSystemUserRequestSerializer.registerClass('Xrm.Gen.SetBusinessSystemUserRequestSerializer');
Xrm.Gen.CloseIncidentRequestSerializer.registerClass('Xrm.Gen.CloseIncidentRequestSerializer');
Xrm.Gen.ConvertActivityRequestSerializer.registerClass('Xrm.Gen.ConvertActivityRequestSerializer');
Xrm.Gen.ConvertActivityResponseSerializer.registerClass('Xrm.Gen.ConvertActivityResponseSerializer');
Xrm.Gen.CreateFolderRequestSerializer.registerClass('Xrm.Gen.CreateFolderRequestSerializer');
Xrm.Gen.CreateFolderResponseSerializer.registerClass('Xrm.Gen.CreateFolderResponseSerializer');
Xrm.Gen.SearchDocumentRequestSerializer.registerClass('Xrm.Gen.SearchDocumentRequestSerializer');
Xrm.Gen.SearchDocumentResponseSerializer.registerClass('Xrm.Gen.SearchDocumentResponseSerializer');
Xrm.Gen.SendEmailRequestSerializer.registerClass('Xrm.Gen.SendEmailRequestSerializer');
Xrm.Gen.SendEmailResponseSerializer.registerClass('Xrm.Gen.SendEmailResponseSerializer');
Xrm.Gen.SetBusinessEquipmentRequestSerializer.registerClass('Xrm.Gen.SetBusinessEquipmentRequestSerializer');
Xrm.Gen.SetParentBusinessUnitRequestSerializer.registerClass('Xrm.Gen.SetParentBusinessUnitRequestSerializer');
Xrm.Gen.SetParentTeamRequestSerializer.registerClass('Xrm.Gen.SetParentTeamRequestSerializer');
Xrm.Gen.CreateDocumentLibrariesRequestSerializer.registerClass('Xrm.Gen.CreateDocumentLibrariesRequestSerializer');
Xrm.Gen.CreateDocumentLibrariesResponseSerializer.registerClass('Xrm.Gen.CreateDocumentLibrariesResponseSerializer');
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer.registerClass('Xrm.Gen.UnfollowEmailAttachmentRequestSerializer');
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer.registerClass('Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer');
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer.registerClass('Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer');
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer.registerClass('Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer');
Xrm.Gen.MigrateToS2SRequestSerializer.registerClass('Xrm.Gen.MigrateToS2SRequestSerializer');
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer.registerClass('Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer');
Xrm.Gen.RetrieveAttributeListRequestSerializer.registerClass('Xrm.Gen.RetrieveAttributeListRequestSerializer');
Xrm.Gen.RetrieveAttributeListResponseSerializer.registerClass('Xrm.Gen.RetrieveAttributeListResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer');
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer.registerClass('Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer');
Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer.registerClass('Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer');
Xrm.Gen.UpgradeToS2SRequestSerializer.registerClass('Xrm.Gen.UpgradeToS2SRequestSerializer');
Xrm.Gen.ValidateUrlRequestSerializer.registerClass('Xrm.Gen.ValidateUrlRequestSerializer');
Xrm.Gen.ValidateUrlResponseSerializer.registerClass('Xrm.Gen.ValidateUrlResponseSerializer');
Xrm.Gen.AssignAllRecordsTeamRequestSerializer.registerClass('Xrm.Gen.AssignAllRecordsTeamRequestSerializer');
Xrm.Gen.CreateRequestSerializer.registerClass('Xrm.Gen.CreateRequestSerializer');
Xrm.Gen.CreateResponseSerializer.registerClass('Xrm.Gen.CreateResponseSerializer');
Xrm.Gen.DeleteDocumentRequestSerializer.registerClass('Xrm.Gen.DeleteDocumentRequestSerializer');
Xrm.Gen.DeleteRequestSerializer.registerClass('Xrm.Gen.DeleteRequestSerializer');
Xrm.Gen.DisassociateRequestSerializer.registerClass('Xrm.Gen.DisassociateRequestSerializer');
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer.registerClass('Xrm.Gen.DiscardDocumentCheckoutRequestSerializer');
Xrm.Gen.EditDocumentPropertiesRequestSerializer.registerClass('Xrm.Gen.EditDocumentPropertiesRequestSerializer');
Xrm.Gen.ExecuteMultipleRequestSerializer.registerClass('Xrm.Gen.ExecuteMultipleRequestSerializer');
Xrm.Gen.ExecuteMultipleResponseSerializer.registerClass('Xrm.Gen.ExecuteMultipleResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer');
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer.registerClass('Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer');
Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer.registerClass('Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer');
Xrm.Gen.ExportToExcelOnlineRequestSerializer.registerClass('Xrm.Gen.ExportToExcelOnlineRequestSerializer');
Xrm.Gen.ExportToExcelOnlineResponseSerializer.registerClass('Xrm.Gen.ExportToExcelOnlineResponseSerializer');
Xrm.Gen.ExportToExcelRequestSerializer.registerClass('Xrm.Gen.ExportToExcelRequestSerializer');
Xrm.Gen.ExportToExcelResponseSerializer.registerClass('Xrm.Gen.ExportToExcelResponseSerializer');
Xrm.Gen.RetrieveDocumentTemplatesRequestSerializer.registerClass('Xrm.Gen.RetrieveDocumentTemplatesRequestSerializer');
Xrm.Gen.RetrieveDocumentTemplatesResponseSerializer.registerClass('Xrm.Gen.RetrieveDocumentTemplatesResponseSerializer');
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer');
Xrm.Gen.FulfillSalesOrderRequestSerializer.registerClass('Xrm.Gen.FulfillSalesOrderRequestSerializer');
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer.registerClass('Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer');
Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer.registerClass('Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer');
Xrm.Gen.InstantiateTemplateRequestSerializer.registerClass('Xrm.Gen.InstantiateTemplateRequestSerializer');
Xrm.Gen.InstantiateTemplateResponseSerializer.registerClass('Xrm.Gen.InstantiateTemplateResponseSerializer');
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer');
Xrm.Gen.GetValidStatusTransitionRequestSerializer.registerClass('Xrm.Gen.GetValidStatusTransitionRequestSerializer');
Xrm.Gen.GetValidStatusTransitionResponseSerializer.registerClass('Xrm.Gen.GetValidStatusTransitionResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer');
Xrm.Gen.InitializeFromRequestSerializer.registerClass('Xrm.Gen.InitializeFromRequestSerializer');
Xrm.Gen.InitializeFromResponseSerializer.registerClass('Xrm.Gen.InitializeFromResponseSerializer');
Xrm.Gen.InviteUserRequestSerializer.registerClass('Xrm.Gen.InviteUserRequestSerializer');
Xrm.Gen.InviteUserResponseSerializer.registerClass('Xrm.Gen.InviteUserResponseSerializer');
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer.registerClass('Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer');
Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer.registerClass('Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer');
Xrm.Gen.LockSalesOrderPricingRequestSerializer.registerClass('Xrm.Gen.LockSalesOrderPricingRequestSerializer');
Xrm.Gen.LoseOpportunityRequestSerializer.registerClass('Xrm.Gen.LoseOpportunityRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer');
Xrm.Gen.PickFromQueueRequestSerializer.registerClass('Xrm.Gen.PickFromQueueRequestSerializer');
Xrm.Gen.QualifyLeadRequestSerializer.registerClass('Xrm.Gen.QualifyLeadRequestSerializer');
Xrm.Gen.QualifyLeadResponseSerializer.registerClass('Xrm.Gen.QualifyLeadResponseSerializer');
Xrm.Gen.RenewEntitlementResponseSerializer.registerClass('Xrm.Gen.RenewEntitlementResponseSerializer');
Xrm.Gen.RenewEntitlementRequestSerializer.registerClass('Xrm.Gen.RenewEntitlementRequestSerializer');
Xrm.Gen.RescheduleRequestSerializer.registerClass('Xrm.Gen.RescheduleRequestSerializer');
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer.registerClass('Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer');
Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer.registerClass('Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer');
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer.registerClass('Xrm.Gen.RetrieveFilteredProcessesRequestSerializer');
Xrm.Gen.RetrieveFilteredProcessesResponseSerializer.registerClass('Xrm.Gen.RetrieveFilteredProcessesResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer');
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer.registerClass('Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer');
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer.registerClass('Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer');
Xrm.Gen.RetrieveProductPropertiesRequestSerializer.registerClass('Xrm.Gen.RetrieveProductPropertiesRequestSerializer');
Xrm.Gen.RetrieveProductPropertiesResponseSerializer.registerClass('Xrm.Gen.RetrieveProductPropertiesResponseSerializer');
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer.registerClass('Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer');
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer.registerClass('Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer');
Xrm.Gen.RetrieveTenantInfoRequestSerializer.registerClass('Xrm.Gen.RetrieveTenantInfoRequestSerializer');
Xrm.Gen.RetrieveTenantInfoResponseSerializer.registerClass('Xrm.Gen.RetrieveTenantInfoResponseSerializer');
Xrm.Gen.RescheduleResponseSerializer.registerClass('Xrm.Gen.RescheduleResponseSerializer');
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer.registerClass('Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer');
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer.registerClass('Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer');
Xrm.Gen.RetrieveMultipleRequestSerializer.registerClass('Xrm.Gen.RetrieveMultipleRequestSerializer');
Xrm.Gen.RetrieveMultipleResponseSerializer.registerClass('Xrm.Gen.RetrieveMultipleResponseSerializer');
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer.registerClass('Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer');
Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer.registerClass('Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer');
Xrm.Gen.RetrievePrincipalAccessRequestSerializer.registerClass('Xrm.Gen.RetrievePrincipalAccessRequestSerializer');
Xrm.Gen.RetrievePrincipalAccessResponseSerializer.registerClass('Xrm.Gen.RetrievePrincipalAccessResponseSerializer');
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer.registerClass('Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer');
Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer.registerClass('Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer');
Xrm.Gen.RetrieveRequestSerializer.registerClass('Xrm.Gen.RetrieveRequestSerializer');
Xrm.Gen.RetrieveResponseSerializer.registerClass('Xrm.Gen.RetrieveResponseSerializer');
Xrm.Gen.RevertProductRequestSerializer.registerClass('Xrm.Gen.RevertProductRequestSerializer');
Xrm.Gen.ReviseQuoteRequestSerializer.registerClass('Xrm.Gen.ReviseQuoteRequestSerializer');
Xrm.Gen.ReviseQuoteResponseSerializer.registerClass('Xrm.Gen.ReviseQuoteResponseSerializer');
Xrm.Gen.RouteToRequestSerializer.registerClass('Xrm.Gen.RouteToRequestSerializer');
Xrm.Gen.RevokeAccessRequestSerializer.registerClass('Xrm.Gen.RevokeAccessRequestSerializer');
Xrm.Gen.PublishProductHierarchyRequestSerializer.registerClass('Xrm.Gen.PublishProductHierarchyRequestSerializer');
Xrm.Gen.SetDevErrorsRequestSerializer.registerClass('Xrm.Gen.SetDevErrorsRequestSerializer');
Xrm.Gen.SetFeatureStatusRequestSerializer.registerClass('Xrm.Gen.SetFeatureStatusRequestSerializer');
Xrm.Gen.SetStateRequestSerializer.registerClass('Xrm.Gen.SetStateRequestSerializer');
Xrm.Gen.StartRIProvisioningRequestSerializer.registerClass('Xrm.Gen.StartRIProvisioningRequestSerializer');
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer.registerClass('Xrm.Gen.UnlockSalesOrderPricingRequestSerializer');
Xrm.Gen.UpdateRequestSerializer.registerClass('Xrm.Gen.UpdateRequestSerializer');
Xrm.Gen.UpdateProductPropertiesRequestSerializer.registerClass('Xrm.Gen.UpdateProductPropertiesRequestSerializer');
Xrm.Gen.UpdateRITenantInfoRequestSerializer.registerClass('Xrm.Gen.UpdateRITenantInfoRequestSerializer');
Xrm.Gen.UpdateDelveActionStatusRequestSerializer.registerClass('Xrm.Gen.UpdateDelveActionStatusRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer');
Xrm.Gen.SetActionCardStateRequestSerializer.registerClass('Xrm.Gen.SetActionCardStateRequestSerializer');
Xrm.Gen.SnoozeActionCardRequestSerializer.registerClass('Xrm.Gen.SnoozeActionCardRequestSerializer');
Xrm.Gen.PopulateCardRequestSerializer.registerClass('Xrm.Gen.PopulateCardRequestSerializer');
Xrm.Gen.PopulateCardResponseSerializer.registerClass('Xrm.Gen.PopulateCardResponseSerializer');
Xrm.Gen.CopySharePointDocumentsRequestSerializer.registerClass('Xrm.Gen.CopySharePointDocumentsRequestSerializer');
Xrm.Gen.CopySharePointDocumentsResponseSerializer.registerClass('Xrm.Gen.CopySharePointDocumentsResponseSerializer');
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer.registerClass('Xrm.Gen.OverrideDynamicPropertiesRequestSerializer');
Xrm.Gen.WhoAmIRequestSerializer.registerClass('Xrm.Gen.WhoAmIRequestSerializer');
Xrm.Gen.WhoAmIResponseSerializer.registerClass('Xrm.Gen.WhoAmIResponseSerializer');
Xrm.Gen.WinOpportunityRequestSerializer.registerClass('Xrm.Gen.WinOpportunityRequestSerializer');
Xrm.Gen.AddOrEditLocationRequestSerializer.registerClass('Xrm.Gen.AddOrEditLocationRequestSerializer');
Xrm.Gen.FetchSiteUrlResponseSerializer.registerClass('Xrm.Gen.FetchSiteUrlResponseSerializer');
Xrm.Gen.FetchSiteUrlRequestSerializer.registerClass('Xrm.Gen.FetchSiteUrlRequestSerializer');
Xrm.Gen.AddOrEditLocationResponseSerializer.registerClass('Xrm.Gen.AddOrEditLocationResponseSerializer');
Xrm.Gen.GetDefaultPriceLevelRequestSerializer.registerClass('Xrm.Gen.GetDefaultPriceLevelRequestSerializer');
Xrm.Gen.GetDefaultPriceLevelResponseSerializer.registerClass('Xrm.Gen.GetDefaultPriceLevelResponseSerializer');
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer.registerClass('Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer');
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer.registerClass('Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer');
Xrm.Gen.LockInvoicePricingRequestSerializer.registerClass('Xrm.Gen.LockInvoicePricingRequestSerializer');
Xrm.Gen.CopyCampaignRequestSerializer.registerClass('Xrm.Gen.CopyCampaignRequestSerializer');
Xrm.Gen.CopyCampaignResponseSerializer.registerClass('Xrm.Gen.CopyCampaignResponseSerializer');
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer.registerClass('Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer');
Xrm.Gen.UnlockInvoicePricingRequestSerializer.registerClass('Xrm.Gen.UnlockInvoicePricingRequestSerializer');
Xrm.Gen.CanUserSendEmailRequestSerializer.registerClass('Xrm.Gen.CanUserSendEmailRequestSerializer');
Xrm.Gen.CanUserSendEmailResponseSerializer.registerClass('Xrm.Gen.CanUserSendEmailResponseSerializer');
Xrm.Gen.PublishAllXmlRequestSerializer.registerClass('Xrm.Gen.PublishAllXmlRequestSerializer');
Xrm.Gen.PublishThemeRequestSerializer.registerClass('Xrm.Gen.PublishThemeRequestSerializer');
Xrm.Gen.TrackEmailRequestSerializer.registerClass('Xrm.Gen.TrackEmailRequestSerializer');
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer.registerClass('Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer');
Xrm.Gen.PublishXmlRequestSerializer.registerClass('Xrm.Gen.PublishXmlRequestSerializer');
Xrm.Gen.WinQuoteRequestSerializer.registerClass('Xrm.Gen.WinQuoteRequestSerializer');
Xrm.Gen.RenderTemplateRequestSerializer.registerClass('Xrm.Gen.RenderTemplateRequestSerializer');
Xrm.Gen.RenderTemplateResponseSerializer.registerClass('Xrm.Gen.RenderTemplateResponseSerializer');
Xrm.Gen.RenderTemplateFromViewRequestSerializer.registerClass('Xrm.Gen.RenderTemplateFromViewRequestSerializer');
Xrm.Gen.RenderTemplateFromViewResponseSerializer.registerClass('Xrm.Gen.RenderTemplateFromViewResponseSerializer');
Xrm.Gen.LogExternalResultsClickedRequestSerializer.registerClass('Xrm.Gen.LogExternalResultsClickedRequestSerializer');
Xrm.Gen.CreateProductsRequestSerializer.registerClass('Xrm.Gen.CreateProductsRequestSerializer');
Xrm.Gen.CreateProductsResponseSerializer.registerClass('Xrm.Gen.CreateProductsResponseSerializer');
Xrm.Gen.CopyCampaignResponseRequestSerializer.registerClass('Xrm.Gen.CopyCampaignResponseRequestSerializer');
Xrm.Gen.CopyCampaignResponseResponseSerializer.registerClass('Xrm.Gen.CopyCampaignResponseResponseSerializer');
Xrm.Gen.ConvertCampaignResponseRequestSerializer.registerClass('Xrm.Gen.ConvertCampaignResponseRequestSerializer');
Xrm.Gen.ConvertCampaignResponseResponseSerializer.registerClass('Xrm.Gen.ConvertCampaignResponseResponseSerializer');
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer.registerClass('Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer');
Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer.registerClass('Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer');
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer.registerClass('Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer');
Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer.registerClass('Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer');
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer.registerClass('Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer');
Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer.registerClass('Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer');
Xrm.Gen.PublishKnowledgeArticleRequestSerializer.registerClass('Xrm.Gen.PublishKnowledgeArticleRequestSerializer');
Xrm.Gen.PublishKnowledgeArticleResponseSerializer.registerClass('Xrm.Gen.PublishKnowledgeArticleResponseSerializer');
Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequestSerializer.registerClass('Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequestSerializer');
Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponseSerializer.registerClass('Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer');
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer.registerClass('Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer');
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer.registerClass('Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer');
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer.registerClass('Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer');
Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer.registerClass('Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer');
Xrm.Gen.PreValidateAppointmentRequestSerializer.registerClass('Xrm.Gen.PreValidateAppointmentRequestSerializer');
Xrm.Gen.PreValidateAppointmentResponseSerializer.registerClass('Xrm.Gen.PreValidateAppointmentResponseSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.ErrorDataRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.ErrorDataRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.UserContextResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.AttributePrivilegeRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.AttributePrivilegeSerializer.AttributePrivilegeRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.FeatureDetailsRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.FeatureDetailsSerializer.FeatureDetailsRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.OfflineProfileRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OfflineProfileSerializer.OfflineProfileRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.OrganizationSettingsRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.OrganizationSettingsSerializer.OrganizationSettingsRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.RolePrivilegeRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.RolePrivilegeSerializer.RolePrivilegeRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.ServerContextRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.ServerContextSerializer.ServerContextRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.AdjustmentRuleRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.AdjustmentRuleRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TransitionConstraintRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TransitionConstraintRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TimeSpanRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneAdjusterSerializer.TimeSpanRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.TimeZoneDefinitionRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TimeZoneDefinitionSerializer.TimeZoneDefinitionRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.TransactionCurrencyRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.TransactionCurrencySerializer.TransactionCurrencyRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.UserContextRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserContextSerializer.UserContextRecord');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.UserSettingsRecord.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonSerializers.UserSettingsSerializer.UserSettingsRecord');
Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse.registerClass('Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse', Microsoft.Crm.Client.Core.Storage.WebService.ServiceErrorResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveEntityResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMetadataChangesResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.RetrieveMultipleAttributeMetadataResponse', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.OrganizationResponse);
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.InstantiatedEmailTemplateResponse');
Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.registerClass('Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter');
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData.registerClass('Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestData');
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.registerClass('Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions');
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData.registerClass('Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.ResponseData');
Microsoft.Crm.Client.Core.Models.FormModel.propertyChangedEventName = 'PropertyChanged';
Microsoft.Crm.Client.Core.Models.RecordModel.accessRightsFieldName = 'accessrights';
Microsoft.Crm.Client.Core.Models.RecordModel.userSharedAttributePrivilegesFieldName = 'usersharedattributeprivileges';
Microsoft.Crm.Client.Core.Models.RecordModel.stateCodeFieldName = 'statecode';
Microsoft.Crm.Client.Core.Models.RecordModel.recordUpdateEventName = 'RecordUpdate';
Microsoft.Crm.Client.Core.Models.RecordModel.recordEnabledChangedEventName = 'RecordEnabledChanged';
Microsoft.Crm.Client.Core.Models.RecordModel.$1H = null;
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$1x = new RegExp('^[^@\\s\\\"<>)(\\[\\]:;,]+@[^@\\s\\\"<>)(\\[\\]:;,]+$');
Microsoft.Crm.Client.Core.Models.Validation.EmailAddressValidator.$20 = new RegExp('[\\\\\"]');
Microsoft.Crm.Client.Core.Models.Validation.UrlValidator.$2R = new RegExp('^\\w+:');
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents.retrievingEventName = 'retrieving';
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents.retrievedEventName = 'retrieved';
Microsoft.Crm.Client.Core.Storage.DataApi.DataOperationEvents.deletedEventName = 'deleted';
Microsoft.Crm.Client.Core.Storage.DataApi.MetadataCache.maxSizeOfApplicationMetadataCache = 1000000;
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$J = null;
Microsoft.Crm.Client.Core.Storage.DataApi.DataSource.$4 = null;
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011MetadataNamespace = 'http://schemas.microsoft.com/xrm/2011/Metadata';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011MetadataQueryNamespace = 'http://schemas.microsoft.com/xrm/2011/Metadata/Query';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.xrm2011ContractsNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapService.crm2011ContractsNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes.dirty = 'dirty';
Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes.never = 'never';
Microsoft.Crm.Client.Core.Models.Constants.AttributeSubmitModes.always = 'always';
Xrm.Soap.CrmDateTimeSerializer.$1y = null;
Xrm.Soap.CrmDateTimeSerializer.$1a = null;
Xrm.Soap.Serializer.$2N = { serialize: 'parametersToCrmSoap', deserialize: 'loadFromCrmSoap' };
Xrm.Soap.Serializer.$2O = [ Xrm.Soap, Xrm.Gen ];
Xrm.Soap.Serializer.$b = {};
Xrm.Soap.Serializer.$p = {};
Xrm.Soap.ResponseSerializer.$b = {};
Xrm.Soap.ConvertKitToProductRequestSerializer.$$cctor();
Xrm.Soap.ConvertProductToKitRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer.$$cctor();
Xrm.Gen.ExecuteMultipleRequestSerializer.$$cctor();
Xrm.Gen.ExecuteMultipleResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer.$$cctor();
Xrm.Gen.RetrieveRequestSerializer.$$cctor();
Xrm.Gen.RetrieveResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer.$$cctor();
Xrm.Gen.CopySharePointDocumentsRequestSerializer.$$cctor();
Xrm.Gen.CopySharePointDocumentsResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.JsonResponses.JsonResponse.invalidResponseMessage = 'JSON response is null or undefined.';
Microsoft.Crm.Client.Core.Storage.Formatting.CrmNumericFormatter.$Z = null;
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.microsoft2003SerializationArraysNamespace = 'http://schemas.microsoft.com/2003/10/Serialization/Arrays';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.genericCollectionsNamespace = 'http://schemas.datacontract.org/2004/07/System.Collections.Generic';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.remoteRequestPendingEventName = 'RemoteRequestPending';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.noRemoteRequestPendingEventName = 'NoRemoteRequestPending';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.xmlParserError = 'parsererror';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.retrieveMultipleRequestDataName = 'RetrieveMultiple';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.$19 = 0;
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.jsonDataType = 'text';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.soapDataResponseAsText = 'text';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.soapDataResponseAsXml = 'xml';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.jsonContentType = 'application/json; charset=utf-8';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.soapContentType = 'text/xml; charset=utf-8';
Microsoft.Crm.Client.Core.Storage.WebService.WebServiceBase.RequestOptions.formSubmitType = 'application/x-www-form-urlencoded';
//@ sourceMappingURL=.srcmap
