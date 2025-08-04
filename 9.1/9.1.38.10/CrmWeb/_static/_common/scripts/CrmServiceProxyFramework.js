Type.registerNamespace('Microsoft.Crm.Client.Core.Models');

Microsoft.Crm.Client.Core.Models.StateCodeHelper = function() {
}
Microsoft.Crm.Client.Core.Models.StateCodeHelper.isRecordDisabled = function(entityRecord, stateCode, rolePrivileges) {
    if (entityRecord.$M_0.LogicalName === 'position') {
        return false;
    }
    if (entityRecord.$M_0.LogicalName === 'bulkoperation') {
        return true;
    }
    if (entityRecord.$M_0.LogicalName === 'systemuser') {
        var $v_0 = entityRecord.fields['isdisabled'];
        var $v_1 = !_Script.isNullOrUndefined($v_0) && Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.isInstanceOfType($v_0);
        return ($v_1) ? ($v_0).$L_0 === 1 : true;
    }
    if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.isInstanceOfType(stateCode)) {
        var $v_2 = (stateCode).$L_0;
        if (entityRecord.$M_0.LogicalName === 'knowledgearticle') {
            if (!_Script.isNullOrUndefined(entityRecord.fields['majorversionnumber']) && !_Script.isNullOrUndefined(entityRecord.fields['minorversionnumber']) && !(entityRecord.fields['majorversionnumber']) && !(entityRecord.fields['minorversionnumber'])) {
                return true;
            }
            if ($v_2 === 2 || $v_2 === 3) {
                return !rolePrivileges.containsKey('7c538e3d-8e82-4f73-922e-471472954c52');
            }
            return $v_2 === 5 || $v_2 === 6;
        }
        if (entityRecord.$M_0.LogicalName === 'appointment') {
            return !(!$v_2 || $v_2 === 3);
        }
        if (entityRecord.$M_0.LogicalName === 'product') {
            return $v_2 === 1;
        }
        return !!$v_2;
    }
    return !!(stateCode);
}
Microsoft.Crm.Client.Core.Models.StateCodeHelper.canRetrieveActivationState = function(record) {
    var $v_0 = false;
    switch (record.$M_0.LogicalName) {
        case 'appointment':
        case 'bulkoperation':
        case 'knowledgearticle':
        case 'position':
        case 'product':
        case 'systemuser':
            $v_0 = true;
            break;
    }
    return record.hasField('statecode') || $v_0;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common');

Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata');


Microsoft.Crm.Client.Core.Storage.Common.IColumnSet = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IColumnSet.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IColumnSet');


Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata = function() {}
Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata');


Microsoft.Crm.Client.Core.Storage.Common.AllColumns = function() {
}
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance = function() {
    return Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$1Q || (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$1Q = new Microsoft.Crm.Client.Core.Storage.Common.AllColumns());
}
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.prototype = {
    
    get_isEmpty: function() {
        return false;
    },
    
    getDifference: function(otherColumnSet) {
        return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
    },
    
    toString: function() {
        return '';
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ColumnSet = function(columnNames) {
    this.$6_0 = columnNames;
}
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.createFromObjectData = function(data) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(data['columns']);
}
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.prototype = {
    $6_0: null,
    
    get_columns: function() {
        return this.$6_0;
    },
    
    get_isEmpty: function() {
        return !(this.$6_0.length > 0);
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['columns'] = this.$6_0;
        return $v_0;
    },
    
    getDifference: function(otherColumnSet) {
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(otherColumnSet)) {
            return otherColumnSet;
        }
        var $v_0 = otherColumnSet;
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        for (var $$arr_3 = $v_0.$6_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if (!Array.contains(this.$6_0, $v_2)) {
                $v_1.add($v_2);
            }
        }
        return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_1.toArray());
    },
    
    toString: function() {
        var $v_0 = '[';
        if (this.$6_0.length > 0) {
            $v_0 += this.$6_0[0];
            for (var $v_1 = 1; $v_1 < this.$6_0.length; $v_1++) {
                $v_0 += ',' + this.$6_0[$v_1];
            }
        }
        $v_0 += ']';
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair = function(entityMetadata, attributeMetadataCollection) {
    this.$7_0 = entityMetadata;
    this.$4l_0 = attributeMetadataCollection;
}
Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair.prototype = {
    $7_0: null,
    $4l_0: null,
    
    get_entityMetadata: function() {
        return this.$7_0;
    },
    
    get_attributeMetadataCollection: function() {
        return this.$4l_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter = function(timeZoneOffsetMinutes, adjusters) {
    this.$i_0 = [];
    this.$r_0 = timeZoneOffsetMinutes;
    if (!_Script.isNullOrUndefined(adjusters)) {
        this.$i_0 = adjusters;
    }
}
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.get_instance = function() {
    return Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$1Q;
}
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.set_instance = function(value) {
    Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$1Q = value;
    return value;
}
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime = function(value) {
    return Date.isInstanceOfType(value) || (Object.prototype.toString.call)(value) === '[object Date]';
}
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.prototype = {
    $r_0: 0,
    
    parseCurrencyValue: function(value, currencySymbol, precisionValue) {
        var $v_0 = new RegExp('\\' + currencySymbol);
        value = value.replace($v_0, '');
        return this.parseDecimalValue(value, precisionValue);
    },
    
    parseIntegerValue: function(value) {
        var $v_0 = this.parseDecimalValue(value);
        return (!_Script.isNullOrUndefined($v_0)) ? Math.floor($v_0) : Microsoft.Crm.Client.Core.Framework.Undefined.int32Value;
    },
    
    parseDecimalValue: function(value, precisionValue) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.doubleValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = new RegExp('(\\s|\u200e|\u200f)', 'g');
            value = value.replace($v_1, '');
            var $v_2 = !!((/^\(.*\)$/).test(value) ^ (!!((/^\-/).test(value) ^ (/\-$/).test(value))));
            if ($v_2) {
                value = value.replace(/[\(\)\-]/g, '');
            }
            $v_0 = Number.parseLocale(value);
            if (!isNaN($v_0)) {
                if ($v_2) {
                    $v_0 = -$v_0;
                }
                if (!_Script.isNullOrUndefined(precisionValue)) {
                    $v_0 = parseFloat($v_0.toFixed(precisionValue));
                }
            }
            else {
                $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.doubleValue;
            }
        }
        return $v_0;
    },
    
    formatIntegerValue: function(value) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = parseInt(value.toString());
            if (!isNaN($v_1)) {
                $v_0 = ($v_1 < 0) ? this.$59_0($v_1, 0) : this.$25_0($v_1, 0);
            }
        }
        return $v_0;
    },
    
    formatDecimalValue: function(value, precisionValue) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = parseFloat(value.toString());
            if (!isNaN($v_1)) {
                $v_0 = ($v_1 < 0) ? this.$59_0($v_1, precisionValue) : this.$25_0($v_1, precisionValue);
            }
        }
        return $v_0;
    },
    
    formatCurrencyValue: function(value, currencySymbol, precisionValue) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (!_Script.isNullOrUndefined(value)) {
            var $v_1 = parseFloat(value.toString());
            if (!isNaN($v_1)) {
                $v_0 = this.$5S_0($v_1, currencySymbol, precisionValue);
            }
        }
        return $v_0;
    },
    
    formatShortDateValue: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            $v_0 = $v_1.localeFormat('d');
        }
        return $v_0;
    },
    
    formatLongDateValue: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            $v_0 = $v_1.localeFormat('D');
        }
        return $v_0;
    },
    
    formatSortableDateValue: function(value, behavior) {
        var $v_0 = this.formatSortableDateTimeValue(value, behavior);
        return $v_0.split('T')[0];
    },
    
    formatSortableDateTimeValue: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            $v_0 = $v_1.localeFormat('s');
        }
        return $v_0;
    },
    
    formatShortDateTimeValue: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['DateSeparator'];
            var $v_2 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['ShortDatePattern'].toString().replace(new RegExp('-', 'g'), $v_1);
            var $v_3 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['TimeSeparator'];
            var $v_4 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['ShortTimePattern'].toString().replace(new RegExp(':', 'g'), $v_3);
            var $v_5 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            $v_0 = String.localeFormat('{0:' + $v_2 + ' ' + $v_4 + '}', $v_5);
        }
        return $v_0;
    },
    
    formatDateLongAbbreviated: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            var $v_2 = Sys.CultureInfo.CurrentCulture.dateTimeFormat['LongDatePattern'];
            $v_2 = $v_2.replace('MMMM', 'MMM');
            $v_2 = $v_2.replace('dddd', 'ddd');
            $v_0 = String.localeFormat('{0:' + $v_2 + '}', $v_1);
        }
        return $v_0;
    },
    
    formatDateYearMonthValue: function(value, behavior) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Undefined.stringValue;
        if (Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.isDateTime(value)) {
            var $v_1 = Microsoft.Crm.Client.Core.Framework.UserDateTimeUtils.convertTimeToBehaviorDisplay(value, this.$r_0, behavior, this.$i_0);
            $v_0 = $v_1.localeFormat('Y');
        }
        return $v_0;
    },
    
    $25_0: function($p0, $p1) {
        return Math.abs($p0).localeFormat('N' + $p1.toString());
    },
    
    $59_0: function($p0, $p1) {
        var $v_0 = Sys.CultureInfo.CurrentCulture.numberFormat['NumberNegativePattern'];
        return Microsoft.Crm.Client.Core.Framework._String.format(this.$5Z_0($v_0), this.$25_0($p0, $p1));
    },
    
    $5S_0: function($p0, $p1, $p2) {
        if ($p0 < 0) {
            var $v_1 = Sys.CultureInfo.CurrentCulture.numberFormat['CurrencyNegativePattern'];
            return Microsoft.Crm.Client.Core.Framework._String.format(this.$5Y_0($v_1), $p1, this.$25_0($p0, $p2));
        }
        var $v_0 = Sys.CultureInfo.CurrentCulture.numberFormat['CurrencyPositivePattern'];
        return Microsoft.Crm.Client.Core.Framework._String.format(this.$5a_0($v_0), $p1, this.$25_0($p0, $p2));
    },
    
    $5Z_0: function($p0) {
        switch ($p0) {
            case 0:
                return '(\ufeff{0}\ufeff)';
            case 1:
                return '-\ufeff{0}';
            case 2:
                return '-\u00a0{0}';
            case 3:
                return '{0}\ufeff-';
            case 4:
                return '{0}\u00a0-';
            default:
                return '(\ufeff{0}\ufeff)';
        }
    },
    
    $5a_0: function($p0) {
        switch ($p0) {
            case 0:
                return '{0}\ufeff{1}';
            case 1:
                return '{1}\ufeff{0}';
            case 2:
                return '{0}\u00a0{1}';
            case 3:
                return '{1}\u00a0{0}';
            default:
                return '{0}\ufeff{1}';
        }
    },
    
    $5Y_0: function($p0) {
        switch ($p0) {
            case 0:
                return '({0}\ufeff{1})';
            case 1:
                return '-{0}\ufeff{1}';
            case 2:
                return '{0}-{1}';
            case 3:
                return '{0}\ufeff{1}-';
            case 4:
                return '({1}\ufeff{0})';
            case 5:
                return '-{1}\ufeff{0}';
            case 6:
                return '{1}-{0}';
            case 7:
                return '{1}\ufeff{0}-';
            case 8:
                return '-{1}\u00a0{0}';
            case 9:
                return '-{0}\u00a0{1}';
            case 10:
                return '{1}\u00a0{0}-';
            case 11:
                return '{0}\u00a0{1}-';
            case 12:
                return '{0}\u00a0-{1}';
            case 13:
                return '{1}-\u00a0{0}';
            case 14:
                return '({0}\u00a0{1})';
            case 15:
                return '({1}\u00a0{0})';
            default:
                return '({0}\ufeff{1})';
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.StorageConstants = function() {
}


Type.registerNamespace('Xrm.Gen');

Xrm.Gen.AccessRights = function() {}
Xrm.Gen.AccessRights.prototype = {
    none: 0, 
    readAccess: 1, 
    writeAccess: 2, 
    appendAccess: 4, 
    appendToAccess: 16, 
    createAccess: 32, 
    deleteAccess: 65536, 
    shareAccess: 262144, 
    assignAccess: 524288
}
Xrm.Gen.AccessRights.registerEnum('Xrm.Gen.AccessRights', true);


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel');

Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights.prototype = {
    none: 0, 
    canCreate: 1, 
    canRead: 2, 
    canUpdate: 4
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeAccessRights', true);


Type.registerNamespace('Xrm.Objects');

Xrm.Objects.AttributeType = function() {}
Xrm.Objects.AttributeType.prototype = {
    unknown: -1, 
    boolean: 0, 
    customer: 1, 
    dateTime: 2, 
    decimal: 3, 
    double: 4, 
    integer: 5, 
    lookup: 6, 
    memo: 7, 
    money: 8, 
    owner: 9, 
    partyList: 10, 
    picklist: 11, 
    state: 12, 
    status: 13, 
    string: 14, 
    uniqueIdentifier: 15, 
    calendarRules: 16, 
    virtual: 17, 
    bigInt: 18, 
    managedProperty: 19, 
    entityName: 20, 
    aliasedValue: 21, 
    arrayOfString: 22, 
    entityImage: 23, 
    multiSelectPicklist: 24
}
Xrm.Objects.AttributeType.registerEnum('Xrm.Objects.AttributeType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeSourceType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeSourceType.prototype = {
    unknown: -1, 
    persistent: 0, 
    calculated: 1, 
    rollup: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeSourceType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeSourceType', false);


Xrm.Gen.BusinessNotificationParameterType = function() {}
Xrm.Gen.BusinessNotificationParameterType.prototype = {
    none: 0, 
    string: 1, 
    attribute: 2
}
Xrm.Gen.BusinessNotificationParameterType.registerEnum('Xrm.Gen.BusinessNotificationParameterType', false);


Xrm.Gen.BusinessNotificationSeverity = function() {}
Xrm.Gen.BusinessNotificationSeverity.prototype = {
    none: 0, 
    error: 1, 
    warning: 2, 
    information: 3, 
    userDefined: 4
}
Xrm.Gen.BusinessNotificationSeverity.registerEnum('Xrm.Gen.BusinessNotificationSeverity', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority.prototype = {
    workspace: 0, 
    medium: 1, 
    notCached: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CachePriority', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy.prototype = {
    local: 0, 
    remote: 1, 
    localAndRemote: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RetrievalStrategy', false);


Xrm.Gen.ConcurrencyBehavior = function() {}
Xrm.Gen.ConcurrencyBehavior.prototype = {
    Default: 0, 
    ifRowVersionMatches: 1, 
    alwaysOverwrite: 2
}
Xrm.Gen.ConcurrencyBehavior.registerEnum('Xrm.Gen.ConcurrencyBehavior', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.prototype = {
    json: 0, 
    fetchXml: 1, 
    sql: 2, 
    layoutXml: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks.prototype = {
    none: 0, 
    communicationActivity: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ActivityTypeMasks', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes.prototype = {
    none: 0, 
    userOwned: 1, 
    teamOwned: 2, 
    businessOwned: 4, 
    organizationOwned: 8, 
    businessParented: 16
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OwnershipTypes', true);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DraftType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DraftType.prototype = {
    none: 0, 
    create: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DraftType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DraftType', false);


Type.registerNamespace('Xrm.Sdk');

Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey');


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource.prototype = {
    attribute: 0, 
    organization: 1, 
    currency: 2
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.MoneyPrecisionSource', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption.prototype = {
    currencySymbol: 0, 
    currencyCode: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.CurrencyDisplayOption', false);


Xrm.Gen.PrivilegeType = function() {}
Xrm.Gen.PrivilegeType.prototype = {
    none: 0, 
    create: 1, 
    read: 2, 
    write: 3, 
    Delete: 4, 
    assign: 5, 
    share: 6, 
    append: 7, 
    appendTo: 8
}
Xrm.Gen.PrivilegeType.registerEnum('Xrm.Gen.PrivilegeType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IEntityRecordList = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IEntityRecordList.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IEntityRecordList');


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IMultipleEntityRecordCollection = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IMultipleEntityRecordCollection.registerInterface('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IMultipleEntityRecordCollection');


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetType.prototype = {
    textBased: 0, 
    rangeBased: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultType = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultType.prototype = {
    owner: 0, 
    recordType: 1, 
    entitySpecificTextBased: 2, 
    dateRangeBased: 3, 
    numericRangeBased: 4
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultType.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.prototype = {
    unknown: -1, 
    referencing: 0, 
    referenced: 1
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.prototype = {
    None: 0, 
    PromptBeforeReport: 1, 
    AutoReport: 2, 
    NeverReport: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel = function() {}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel.prototype = {
    unknown: -1, 
    none: 0, 
    systemRequired: 1, 
    applicationRequired: 2, 
    recommended: 3
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel.registerEnum('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RequiredLevel', false);


Xrm.Gen.RollupType = function() {}
Xrm.Gen.RollupType.prototype = {
    none: 0, 
    related: 1, 
    extended: 2
}
Xrm.Gen.RollupType.registerEnum('Xrm.Gen.RollupType', false);


Xrm.Gen.TargetFieldType = function() {}
Xrm.Gen.TargetFieldType.prototype = {
    all: 0, 
    validForCreate: 1, 
    validForUpdate: 2, 
    validForRead: 3
}
Xrm.Gen.TargetFieldType.registerEnum('Xrm.Gen.TargetFieldType', false);


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy = function() {}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue = function(entityLogicalName, attributeLogicalName, attributeType) {
    this.$2_0 = entityLogicalName;
    this.$2x_0 = attributeLogicalName;
    this.$1l_0 = attributeType;
    this.$11_0 = null;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.createFromObjectData = function(data) {
    var $v_0 = data['attributeLogicalName'];
    var $v_1 = data['entityLogicalName'];
    var $v_2 = data['attributeType'];
    var $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue($v_1, $v_0, $v_2);
    $v_3.$11_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$3b(data['value'], $v_2);
    return $v_3;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.prototype = {
    $2_0: null,
    $2x_0: null,
    $1l_0: 0,
    $11_0: null,
    
    get_entityLogicalName: function() {
        return this.$2_0;
    },
    
    get_attributeLogicalName: function() {
        return this.$2x_0;
    },
    
    get_attributeType: function() {
        return this.$1l_0;
    },
    
    get_value: function() {
        return this.$11_0;
    },
    
    set_value: function(value) {
        this.$11_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['entityLogicalName'] = this.$2_0;
        $v_0['attributeLogicalName'] = this.$2x_0;
        $v_0['attributeType'] = this.$1l_0;
        $v_0['value'] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$5F(this.$11_0, this.$1l_0);
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata = function(logicalName, id, entityLogicalName, type, displayName, isSecured, isValidForCreate, isValidForRead, isValidForUpdate, requiredLevel, maxLength, minValue, maxValue, precision, precisionSource, format, behavior, defaultFormValue, defaultValue, optionSet, isBaseCurrency, targets, attributeOf, hasChanged, imeMode, isSortableEnabled, inheritsFrom, sourceType, isLocalizable, parentPicklistLogicalName, childPicklistLogicalNames) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(type, 'type');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(requiredLevel, 'requiredLevel');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(isSecured, 'isSecured');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(isValidForCreate, 'isValidForCreate');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(isValidForRead, 'isValidForRead');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(isValidForUpdate, 'isValidForUpdate');
    this.$8_0 = logicalName;
    this.$S_0 = id;
    this.$2_0 = entityLogicalName;
    this.$4c_0 = type;
    this.$2Z_0 = sourceType;
    this.$F_0 = displayName;
    this.$I_0 = isSecured;
    this.$12_0 = isValidForCreate;
    this.$13_0 = isValidForRead;
    this.$14_0 = isValidForUpdate;
    this.$2W_0 = requiredLevel;
    this.$2I_0 = maxLength;
    this.$2L_0 = minValue;
    this.$2K_0 = maxValue;
    this.$2R_0 = precision;
    this.$2S_0 = precisionSource;
    this.$24_0 = format;
    this.$1n_0 = behavior;
    this.$1w_0 = defaultFormValue;
    this.$1y_0 = defaultValue;
    this.$17_0 = optionSet;
    this.$1e_0 = targets;
    this.$2A_0 = isBaseCurrency;
    this.$1k_0 = attributeOf;
    this.$g_0 = hasChanged;
    this.$2E_0 = isSortableEnabled;
    this.$27_0 = imeMode;
    this.$28_0 = inheritsFrom;
    this.$2D_0 = isLocalizable;
    this.$52_0 = parentPicklistLogicalName;
    this.$4m_0 = childPicklistLogicalNames;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.extractKey = function(data) {
    return Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData((data)['id']).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.createFromObjectData = function(data) {
    var $v_0 = data['logicalname'];
    var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_2 = data['entitylogicalname'];
    var $v_3 = data['type'];
    var $v_4 = data['sourcetype'];
    var $v_5 = data['displayname'];
    var $v_6 = data['requiredlevel'];
    var $v_7 = data['issecured'];
    var $v_8 = data['isvalidforcreate'];
    var $v_9 = data['isvalidforupdate'];
    var $v_A = data['isvalidforread'];
    var $v_B = data['maxlength'];
    var $v_C = data['minvalue'];
    var $v_D = data['maxvalue'];
    var $v_E = data['precision'];
    var $v_F = data['precisionsource'];
    var $v_G = data['format'];
    var $v_H = data['behavior'];
    var $v_I = data['defaultformvalue'];
    var $v_J = data['defaultvalue'];
    var $v_K = data['isbasecurrency'];
    var $v_L = data['attributeof'];
    var $v_M = data['haschanged'];
    var $v_N = data['issortableenabled'];
    var $v_O = data['imemode'];
    var $v_P = data['inheritsfrom'];
    var $v_Q = data['islocalizable'];
    var $v_R = null;
    var $v_S = data['optionset'];
    if (!_Script.isNullOrUndefined($v_S)) {
        $v_R = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.createFromObjectData($v_S);
    }
    var $v_T = data['targets'];
    var $v_U = data['parentPicklistLogicalName'];
    var $v_V = data['childPicklistLogicalNames'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata($v_0, $v_1, $v_2, $v_3, $v_5, $v_7, $v_8, $v_A, $v_9, $v_6, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, $v_I, $v_J, $v_R, $v_K, $v_T, $v_L, $v_M, $v_O, $v_N, $v_P, $v_4, $v_Q, $v_U, $v_V);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.prototype = {
    $S_0: null,
    $8_0: null,
    $4c_0: 0,
    $2Z_0: 0,
    $2_0: null,
    $F_0: null,
    $I_0: false,
    $12_0: false,
    $13_0: false,
    $14_0: false,
    $2W_0: 0,
    $2I_0: 0,
    $2L_0: 0,
    $2K_0: 0,
    $2R_0: 0,
    $2S_0: 0,
    $24_0: null,
    $1n_0: 0,
    $1w_0: 0,
    $1y_0: false,
    $2A_0: false,
    $17_0: null,
    $1e_0: null,
    $1k_0: null,
    $g_0: false,
    $2E_0: false,
    $27_0: 0,
    $28_0: null,
    $2D_0: false,
    $52_0: null,
    $4m_0: null,
    
    get_id: function() {
        return this.$S_0;
    },
    
    get_logicalName: function() {
        return this.$8_0;
    },
    
    get_entityLogicalName: function() {
        return this.$2_0;
    },
    
    get_type: function() {
        return this.$4c_0;
    },
    
    get_sourceType: function() {
        return this.$2Z_0;
    },
    
    get_displayName: function() {
        return this.$F_0;
    },
    
    get_isValidForCreate: function() {
        return this.$12_0;
    },
    
    get_isSecured: function() {
        return this.$I_0;
    },
    
    get_isValidForUpdate: function() {
        return this.$14_0;
    },
    
    get_isValidForRead: function() {
        return this.$13_0;
    },
    
    get_requiredLevel: function() {
        return this.$2W_0;
    },
    
    get_maxLength: function() {
        return this.$2I_0;
    },
    
    get_minValue: function() {
        return this.$2L_0;
    },
    
    get_maxValue: function() {
        return this.$2K_0;
    },
    
    get_precision: function() {
        return this.$2R_0;
    },
    
    get_precisionSource: function() {
        return this.$2S_0;
    },
    
    get_format: function() {
        return this.$24_0;
    },
    
    get_behavior: function() {
        return this.$1n_0;
    },
    
    get_isBaseCurrency: function() {
        return this.$2A_0;
    },
    
    get_defaultFormValue: function() {
        return this.$1w_0;
    },
    
    get_defaultValue: function() {
        return this.$1y_0;
    },
    
    get_optionSet: function() {
        return this.$17_0;
    },
    
    get_targets: function() {
        return this.$1e_0;
    },
    
    get_attributeOf: function() {
        return this.$1k_0;
    },
    
    get_hasChanged: function() {
        return this.$g_0;
    },
    
    get_isSortableEnabled: function() {
        return this.$2E_0;
    },
    
    get_imeMode: function() {
        return this.$27_0;
    },
    
    get_inheritsFrom: function() {
        return this.$28_0;
    },
    
    get_isLocalizable: function() {
        return this.$2D_0;
    },
    
    get_parentPicklistLogicalName: function() {
        return this.$52_0;
    },
    
    get_childPicklistLogicalNames: function() {
        return this.$4m_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['logicalname'] = this.$8_0;
        $v_0['id'] = this.$S_0.getObjectData();
        $v_0['entitylogicalname'] = this.$2_0;
        $v_0['entitylogicalname_logicalname'] = this.$2_0 + '_' + this.$8_0;
        $v_0['type'] = this.$4c_0;
        $v_0['sourcetype'] = this.$2Z_0;
        $v_0['displayname'] = this.$F_0;
        $v_0['issecured'] = this.$I_0;
        $v_0['issortableenabled'] = this.$2E_0;
        $v_0['isvalidforcreate'] = this.$12_0;
        $v_0['isvalidforupdate'] = this.$14_0;
        $v_0['isvalidforread'] = this.$13_0;
        $v_0['requiredlevel'] = this.$2W_0;
        $v_0['maxlength'] = this.$2I_0;
        $v_0['minvalue'] = this.$2L_0;
        $v_0['maxvalue'] = this.$2K_0;
        $v_0['precision'] = this.$2R_0;
        $v_0['precisionsource'] = this.$2S_0;
        $v_0['defaultformvalue'] = this.$1w_0;
        $v_0['defaultvalue'] = this.$1y_0;
        $v_0['format'] = this.$24_0;
        $v_0['behavior'] = this.$1n_0;
        $v_0['isbasecurrency'] = this.$2A_0;
        $v_0['attributeof'] = this.$1k_0;
        $v_0['haschanged'] = this.$g_0;
        $v_0['imemode'] = this.$27_0;
        $v_0['inheritsfrom'] = this.$28_0;
        $v_0['islocalizable'] = this.$2D_0;
        if (!_Script.isNullOrUndefined(this.$17_0)) {
            $v_0['optionset'] = this.$17_0.getObjectData();
        }
        if (!_Script.isNullOrUndefined(this.$1e_0)) {
            $v_0['targets'] = this.$1e_0;
        }
        return $v_0;
    },
    
    populateFromCache: function(cachedAttributeMetadata) {
        this.$2_0 = cachedAttributeMetadata.get_entityLogicalName();
        this.$I_0 = cachedAttributeMetadata.get_isSecured();
        this.$12_0 = cachedAttributeMetadata.get_isValidForCreate();
        this.$13_0 = cachedAttributeMetadata.get_isValidForRead();
        this.$14_0 = cachedAttributeMetadata.get_isValidForUpdate();
        this.$2W_0 = cachedAttributeMetadata.get_requiredLevel();
        this.$2I_0 = cachedAttributeMetadata.get_maxLength();
        this.$2L_0 = cachedAttributeMetadata.get_minValue();
        this.$2K_0 = cachedAttributeMetadata.get_maxValue();
        this.$2R_0 = cachedAttributeMetadata.get_precision();
        this.$2S_0 = cachedAttributeMetadata.get_precisionSource();
        this.$24_0 = cachedAttributeMetadata.get_format();
        this.$1n_0 = cachedAttributeMetadata.get_behavior();
        this.$1w_0 = cachedAttributeMetadata.get_defaultFormValue();
        this.$1y_0 = cachedAttributeMetadata.get_defaultValue();
        this.$1e_0 = cachedAttributeMetadata.get_targets();
        this.$2A_0 = cachedAttributeMetadata.get_isBaseCurrency();
        this.$1k_0 = cachedAttributeMetadata.get_attributeOf();
        this.$g_0 = cachedAttributeMetadata.get_hasChanged();
        this.$2E_0 = cachedAttributeMetadata.get_isSortableEnabled();
        this.$27_0 = cachedAttributeMetadata.get_imeMode();
        this.$28_0 = cachedAttributeMetadata.get_inheritsFrom();
        this.$2Z_0 = cachedAttributeMetadata.get_sourceType();
        this.$2D_0 = cachedAttributeMetadata.get_isLocalizable();
        if (_Script.isNullOrUndefined(this.$17_0)) {
            this.$17_0 = cachedAttributeMetadata.get_optionSet();
        }
        if (_Script.isNullOrUndefined(this.$F_0)) {
            this.$F_0 = cachedAttributeMetadata.get_displayName();
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection = function(associatedEntityLogicalName) {
    this.$4k_0 = associatedEntityLogicalName;
    this.$O_0 = new Array(0);
    this.$Y_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection.prototype = {
    $4k_0: null,
    $O_0: null,
    $Y_0: null,
    $1j_0: false,
    
    get_associatedEntityLogicalName: function() {
        return this.$4k_0;
    },
    
    get_attributes: function() {
        return this.$O_0;
    },
    
    get_attributesByName: function() {
        return this.$Y_0;
    },
    
    get_count: function() {
        return this.$O_0.length;
    },
    
    get_allAttributes: function() {
        return this.$1j_0;
    },
    
    mergeAttributeMetadata: function(attributeMetadata, isAllAttributes) {
        this.$1j_0 = this.$1j_0 || isAllAttributes;
        if (_Script.isNullOrUndefined(attributeMetadata)) {
            return;
        }
        var $v_0 = true;
        if (!this.$O_0.length || isAllAttributes) {
            this.$O_0 = attributeMetadata;
            this.$Y_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
            $v_0 = false;
        }
        for (var $v_1 = 0; $v_1 < attributeMetadata.length; $v_1++) {
            var $v_2 = attributeMetadata[$v_1];
            if ($v_0) {
                if (!this.$Y_0.containsKey($v_2.$8_0)) {
                    this.$O_0[this.$O_0.length] = $v_2;
                }
                else {
                    for (var $v_3 = 0; $v_3 < this.$O_0.length; $v_3++) {
                        if (this.$O_0[$v_3].$8_0 === $v_2.$8_0) {
                            this.$O_0[$v_3] = $v_2;
                        }
                    }
                }
            }
            this.$Y_0.set_item($v_2.$8_0, $v_2);
        }
    },
    
    purgeAttributeMetadata: function() {
        this.$1j_0 = false;
        this.$O_0 = new Array(0);
        if (_Script.isNullOrUndefined(this.$Y_0)) {
            this.$Y_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata))();
        }
        else {
            this.$Y_0.clear();
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege = function(attributeId, canCreate, canRead, canUpdate) {
    this.$1H_0 = attributeId;
    this.$1p_0 = canCreate;
    this.$t_0 = canRead;
    this.$u_0 = canUpdate;
    this.$4_0 = 0;
    this.$4_0 = (this.$1p_0) ? this.$4_0 | 1 : this.$4_0;
    this.$4_0 = (this.$t_0) ? this.$4_0 | 2 : this.$4_0;
    this.$4_0 = (this.$u_0) ? this.$4_0 | 4 : this.$4_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.createFromObjectData = function(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['attributeid']);
    var $v_1 = data['cancreate'];
    var $v_2 = data['canread'];
    var $v_3 = data['canupdate'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege($v_0, $v_1, $v_2, $v_3);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.prototype = {
    $1H_0: null,
    $1p_0: false,
    $t_0: false,
    $u_0: false,
    $4_0: 0,
    
    get_attributeId: function() {
        return this.$1H_0;
    },
    
    get_canCreate: function() {
        return this.$1p_0;
    },
    
    get_canRead: function() {
        return this.$t_0;
    },
    
    get_canUpdate: function() {
        return this.$u_0;
    },
    
    get_accessRightsMask: function() {
        return this.$4_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['attributeid'] = this.$1H_0.getObjectData();
        $v_0['cancreate'] = this.$1p_0;
        $v_0['canread'] = this.$t_0;
        $v_0['canupdate'] = this.$u_0;
        return $v_0;
    }
}


Xrm.Gen.BusinessNotification = function(severity, message, parameters) {
    this.$2t_0 = severity;
    this.$2m_0 = message;
    this.$2n_0 = parameters;
}
Xrm.Gen.BusinessNotification.prototype = {
    $2t_0: 0,
    
    get_severity: function() {
        return this.$2t_0;
    },
    
    set_severity: function(value) {
        this.$2t_0 = value;
        return value;
    },
    
    $2m_0: null,
    
    get_message: function() {
        return this.$2m_0;
    },
    
    set_message: function(value) {
        this.$2m_0 = value;
        return value;
    },
    
    $2n_0: null,
    
    get_parameters: function() {
        return this.$2n_0;
    },
    
    set_parameters: function(value) {
        this.$2n_0 = value;
        return value;
    }
}


Xrm.Gen.BusinessNotificationParameter = function(parameterType, data) {
    this.$2o_0 = parameterType;
    this.$2f_0 = data;
}
Xrm.Gen.BusinessNotificationParameter.prototype = {
    $2o_0: 0,
    
    get_parameterType: function() {
        return this.$2o_0;
    },
    
    set_parameterType: function(value) {
        this.$2o_0 = value;
        return value;
    },
    
    $2f_0: null,
    
    get_data: function() {
        return this.$2f_0;
    },
    
    set_data: function(value) {
        this.$2f_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions = function(cachePriority, retrievalStrategy, timestamp) {
    this.$Z_0 = cachePriority;
    this.$4U_0 = retrievalStrategy;
    this.$A_0 = (!_Script.isNullOrUndefined(timestamp)) ? timestamp : new Date();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.shouldBeCached = function(options) {
    return !_Script.isNullOrUndefined(options) && options.$Z_0 !== 2;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString = function(timestamp) {
    return timestamp.format('s');
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.priorityTimestampKey = function(priority, timestamp) {
    return priority + '|' + Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString(timestamp);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData = function(data) {
    var $v_0 = Date.parseInvariant(data['timestamp']);
    var $v_1 = data['priority_timestamp'];
    var $v_2 = Number.parseInvariant($v_1.substr(0, 1));
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions($v_2, 2, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.prototype = {
    $A_0: null,
    $Z_0: 0,
    $4U_0: 0,
    
    get_timestamp: function() {
        return this.$A_0;
    },
    
    set_timestamp: function(value) {
        this.$A_0 = value;
        return value;
    },
    
    get_cachePriority: function() {
        return this.$Z_0;
    },
    
    set_cachePriority: function(value) {
        this.$Z_0 = value;
        return value;
    },
    
    get_retrievalStrategy: function() {
        return this.$4U_0;
    },
    
    set_retrievalStrategy: function(value) {
        this.$4U_0 = value;
        return value;
    },
    
    get_sortableTimestamp: function() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString(this.$A_0);
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['timestamp'] = this.get_sortableTimestamp();
        $v_0['priority_timestamp'] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.priorityTimestampKey(this.$Z_0, this.$A_0);
        return $v_0;
    },
    
    update: function(updated) {
        if (!_Script.isNullOrUndefined(updated)) {
            this.$A_0 = updated.$A_0;
            if (updated.$Z_0 < this.$Z_0) {
                this.$Z_0 = updated.$Z_0;
            }
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData = function(format, data) {
    this.Format = format;
    this.Data = data;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData.prototype = {
    Format: 0,
    Data: null
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet = function() {
    this.$9_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData))();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.createFromFetchXml = function(fetchXml) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet();
    $v_0.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(1), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData(1, fetchXml));
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.createDescriptorSet = function(descriptorData, metadataType, isEntityAvailbleOffline) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet();
    if (metadataType === 16) {
        if (Array.isInstanceOfType(descriptorData)) {
            for (var $v_1 = 0; $v_1 < (descriptorData).length; $v_1++) {
                var $v_2 = (descriptorData)[$v_1];
                if ($v_2.Format === 2 && !isEntityAvailbleOffline) {
                    continue;
                }
                $v_0.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString($v_2.Format), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData($v_2.Format, $v_2.Data));
            }
        }
        else if (String.isInstanceOfType(descriptorData)) {
            $v_0.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(1), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData(1, descriptorData));
        }
    }
    else {
        $v_0.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(0), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData(0, descriptorData));
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.prototype = {
    $9_0: null,
    
    get_descriptors: function() {
        return this.$9_0;
    },
    
    tryGetDescriptor: function(descriptorFormat) {
        return (!_Script.isNullOrUndefined(this.$9_0.get_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(descriptorFormat)))) ? this.$9_0.get_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(descriptorFormat)).Data : '';
    },
    
    updateDescriptorSet: function(descriptorFormat, data) {
        if (this.$9_0.containsKey(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(descriptorFormat))) {
            this.$9_0.get_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(descriptorFormat)).Data = data;
        }
        else {
            this.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString(descriptorFormat), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData(descriptorFormat, data));
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection = function(entities, moreRecords, totalRecordCount, totalRecordCountLimitExceeded, query, clientRetrieveOptions, pagingCookie) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entities, 'entities');
    this.$2M_0 = moreRecords;
    this.$4a_0 = totalRecordCount;
    this.$b_0 = (_Script.isNullOrUndefined(query)) ? 1 : query.$b_0;
    this.$4b_0 = totalRecordCountLimitExceeded;
    this.$U_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord))(entities);
    this.$p_0 = query;
    this.$c_0 = pagingCookie;
    this.set_clientRetrieveOptions((_Script.isNullOrUndefined(clientRetrieveOptions)) ? ((this.$U_0.get_Count() > 0) ? this.$U_0.get_item(0).$1_0 : null) : clientRetrieveOptions);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createEmpty = function() {
    return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities(new Array(0));
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities = function(entities) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection(entities, false, 0, false);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData = function(data) {
    var $v_0 = new Array(0);
    var $v_1 = data['entities'];
    for (var $v_8 = 0; $v_8 < $v_1.length; $v_8++) {
        if ($v_1[$v_8]['formattedfields'] !== 'undefined' && $v_1[$v_8]['numericformattedfields'] !== 'undefined') {
            $v_0[$v_8] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_1[$v_8]);
        }
    }
    var $v_2 = data['morerecords'];
    var $v_3 = data['totalrecordcount'];
    var $v_4 = (('totalRecordCountLimitExceeded') in data) ? data['totalRecordCountLimitExceeded'] : false;
    var $v_5 = (('clientretrieveoptions') in data) ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData(data['clientretrieveoptions']) : null;
    var $v_6 = data['pagingcookie'];
    var $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_0, $v_2, $v_3, $v_4, null, $v_5, $v_6);
    return $v_7;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.prototype = {
    $U_0: null,
    $2M_0: false,
    $4a_0: 0,
    $4b_0: false,
    $b_0: 0,
    $p_0: null,
    $4r_0: null,
    $1_0: null,
    $c_0: null,
    
    get_entities: function() {
        return this.$U_0.get_Items();
    },
    
    get_moreRecords: function() {
        return this.$2M_0;
    },
    
    get_totalRecordCountLimitExceeded: function() {
        return this.$4b_0;
    },
    
    get_isLastPage: function() {
        return !this.$2M_0;
    },
    
    get_TotalRecordCount: function() {
        return this.$4a_0;
    },
    
    get_currentPageIndex: function() {
        return this.$b_0 - 1;
    },
    
    get_currentPageNumber: function() {
        return this.$b_0;
    },
    
    get_count: function() {
        return this.get_entities().length;
    },
    
    get_query: function() {
        return this.$p_0;
    },
    
    set_query: function(value) {
        this.$p_0 = value;
        return value;
    },
    
    get_key: function() {
        return (!_Script.isNullOrUndefined(this.$p_0) && (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey.isInstanceOfType(this.$p_0))) ? (this.$p_0).get_key() : '';
    },
    
    get_clientRetrieveOptions: function() {
        return this.$1_0;
    },
    
    set_clientRetrieveOptions: function(value) {
        this.$1_0 = value;
        if (!_Script.isNullOrUndefined(this.$1_0)) {
            for (var $v_0 = 0; $v_0 < this.$U_0.get_Count(); $v_0++) {
                if (_Script.isNullOrUndefined(this.$U_0.get_item($v_0).$1_0)) {
                    this.$U_0.get_item($v_0).set_clientRetrieveOptions(this.$1_0);
                }
            }
        }
        return value;
    },
    
    get_pagingCookie: function() {
        return this.$c_0;
    },
    
    get_item: function(index) {
        return this.get_entities()[index];
    },
    
    set_item: function(index, value) {
        this.get_entities()[index] = value;
        return value;
    },
    
    get_entityName: function() {
        return this.$4r_0;
    },
    
    set_entityName: function(value) {
        this.$4r_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        var $v_1 = new Array(this.get_entities().length);
        for (var $v_2 = 0; $v_2 < this.get_entities().length; $v_2++) {
            $v_1[$v_2] = this.get_entities()[$v_2].getObjectData();
        }
        $v_0['entities'] = $v_1;
        $v_0['morerecords'] = this.$2M_0;
        $v_0['totalrecordcount'] = this.$4a_0;
        $v_0['totalRecordCountLimitExceeded'] = this.$4b_0;
        $v_0['pagingcookie'] = this.$c_0;
        if (!_Script.isNullOrUndefined(this.$1_0)) {
            $v_0['clientretrieveoptions'] = this.$1_0.getObjectData();
        }
        return $v_0;
    },
    
    cacheSize: function() {
        var $v_0 = JSON.stringify(this.getObjectData());
        return $v_0.length;
    },
    
    add: function(record) {
        this.$U_0.add(record);
    },
    
    remove: function(record) {
        this.$U_0.remove(record);
    },
    
    removeAt: function(index) {
        this.$U_0.removeAt(index);
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata = function(id, logicalName, displayName, pluralName, objectTypeCode, primaryIdAttribute, primaryNameAttribute, privileges, isReadOnlyForMobileClient, isVisibleInMobileClient, isOfflineInMobileClient, isOptimisticConcurrencyEnabled, hasChanged, isActivity, isChildEntity, parentEntityLogicalName, parentEntityReferencingAttribute, isValidForAdvancedFind, isMailMergeEnabled, isConnectionsEnabled, isCustomizable, isActivityParty, isImportable, isEnabledForCharts, isCustomEntity, isStateModelAware, enforceStateTransitions, isCollaboration, activityTypeMask, ownershipType, hasSecuredAttributes, hasStateCode, isBusinessProcessEnabled, isDocumentManagementEnabled, hasActivities, entityColor, isInteractionCentricEnabled, isQuickCreateEnabled, isKnowledgeManagementEnabled, isDocumentRecommendationsEnabled, isIntersect, hasNotes, usesBusinessDataLabelTable) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    this.$S_0 = id;
    this.$8_0 = logicalName;
    this.$F_0 = displayName;
    this.$1A_0 = pluralName;
    this.$4I_0 = objectTypeCode;
    this.$4N_0 = primaryIdAttribute;
    this.$4O_0 = primaryNameAttribute;
    this.$1S_0 = isReadOnlyForMobileClient;
    this.$1T_0 = isVisibleInMobileClient;
    this.$3z_0 = isOfflineInMobileClient;
    this.$40_0 = isOptimisticConcurrencyEnabled;
    this.$g_0 = hasChanged;
    this.$3c_0 = isActivity;
    this.$V_0 = isChildEntity;
    this.$o_0 = parentEntityLogicalName;
    this.$19_0 = parentEntityReferencingAttribute;
    this.$47_0 = isValidForAdvancedFind;
    this.$3w_0 = isMailMergeEnabled;
    this.$3i_0 = isConnectionsEnabled;
    this.$3j_0 = isCustomizable;
    this.$3d_0 = isActivityParty;
    this.$3q_0 = isImportable;
    this.$3m_0 = isEnabledForCharts;
    this.$1R_0 = isCustomEntity;
    this.$44_0 = isStateModelAware;
    this.$3B_0 = enforceStateTransitions;
    this.$3g_0 = isCollaboration;
    this.$2w_0 = activityTypeMask;
    this.$1Y_0 = ownershipType;
    this.$3Z_0 = hasSecuredAttributes;
    this.$n_0 = hasStateCode;
    this.$3f_0 = isBusinessProcessEnabled;
    this.$3k_0 = isDocumentManagementEnabled;
    this.$3W_0 = hasActivities;
    this.$3C_0 = entityColor;
    this.$3r_0 = isInteractionCentricEnabled;
    this.$42_0 = isQuickCreateEnabled;
    this.$3u_0 = isKnowledgeManagementEnabled;
    this.$3l_0 = isDocumentRecommendationsEnabled;
    this.$3s_0 = isIntersect;
    this.$3X_0 = hasNotes;
    this.$4f_0 = usesBusinessDataLabelTable;
    this.$2T_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $$arr_h = privileges, $$len_i = $$arr_h.length, $$idx_j = 0; $$idx_j < $$len_i; ++$$idx_j) {
        var $v_0 = $$arr_h[$$idx_j];
        this.$2T_0.set_item($v_0.get_privilegeTypeKey(), $v_0);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.hasAccessRights = function(logicalName, metadataCache) {
    var $v_0 = metadataCache.getEntityMetadata(logicalName);
    if (_Script.isNullOrUndefined($v_0)) {
        return false;
    }
    if ($v_0.$1R_0) {
        if (($v_0.$1Y_0 & 1)) {
            return true;
        }
        return false;
    }
    if ($v_0.$V_0) {
        var $v_1 = metadataCache.getEntityMetadata($v_0.$o_0);
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_0 = $v_1;
        }
    }
    switch ($v_0.$8_0) {
        case 'account':
        case 'annotation':
        case 'appointment':
        case 'asyncoperation':
        case 'bulkoperation':
        case 'campaign':
        case 'campaignactivity':
        case 'campaignresponse':
        case 'connection':
        case 'contact':
        case 'contract':
        case 'customeropportunityrole':
        case 'customerrelationship':
        case 'duplicaterule':
        case 'email':
        case 'fax':
        case 'goal':
        case 'goalrollupquery':
        case 'import':
        case 'importfile':
        case 'importmap':
        case 'incident':
        case 'incidentresolution':
        case 'invoice':
        case 'lead':
        case 'letter':
        case 'list':
        case 'mailmergetemplate':
        case 'opportunity':
        case 'opportunityclose':
        case 'orderclose':
        case 'phonecall':
        case 'processsession':
        case 'queue':
        case 'quote':
        case 'quoteclose':
        case 'recurringappointmentmaster':
        case 'salesorder':
        case 'serviceappointment':
        case 'sharepointdocumentlocation':
        case 'sharepointsite':
        case 'task':
        case 'template':
        case 'userform':
        case 'userquery':
        case 'userqueryvisualization':
        case 'workflow':
            return true;
        default:
            return false;
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.extractKey = function(data) {
    return Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData((data)['id']).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.createFromObjectData = function(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_1 = data['logicalname'];
    var $v_2 = data['displayname'];
    var $v_3 = data['pluralname'];
    var $v_4 = data['objecttypecode'];
    var $v_5 = data['primaryidattribute'];
    var $v_6 = data['primarynameattribute'];
    var $v_7 = data['isreadonlyformobileclient'];
    var $v_8 = data['isvisibleinmobileclient'];
    var $v_9 = data['isofflineinmobileclient'];
    var $v_A = data['isoptimisticconcurrencyenabled'];
    var $v_B = data['haschanged'];
    var $v_C = data['isactivity'];
    var $v_D = data['ischildentity'];
    var $v_E = data['parententitylogicalname'];
    var $v_F = data['parententityreferencingattribute'];
    var $v_G = data['isvalidforadvancedfind'];
    var $v_H = data['ismailmergeenabled'];
    var $v_I = data['isconnectionsenabled'];
    var $v_J = data['iscustomizable'];
    var $v_K = data['isactivityparty'];
    var $v_L = data['isimportable'];
    var $v_M = data['isenabledforcharts'];
    var $v_N = data['iscustomentity'];
    var $v_O = data['isstatemodelaware'];
    var $v_P = data['enforcestatetransitions'];
    var $v_Q = data['iscollaboration'];
    var $v_R = data['activitytypemask'];
    var $v_S = data['ownershiptype'];
    var $v_T = data['hassecuredattributes'];
    var $v_U = data['hasstatecode'];
    var $v_V = data['isbusinessprocessenabled'];
    var $v_W = data['isdocumentmanagementenabled'];
    var $v_X = data['hasactivities'];
    var $v_Y = data['entitycolor'];
    var $v_Z = data['isinteractioncentricenabled'];
    var $v_a = data['isQuickCreateEnabled'];
    var $v_b = data['isKnowledgeManagementEnabled'];
    var $v_c = data['isDocumentRecommendationsEnabled'];
    var $v_d = data['isIntersect'];
    var $v_e = data['hasnotes'];
    var $v_f = data['usesBusinessDataLabelTable'];
    var $v_g = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata))();
    for (var $$arr_i = data['privileges'], $$len_j = $$arr_i.length, $$idx_k = 0; $$idx_k < $$len_j; ++$$idx_k) {
        var $v_h = $$arr_i[$$idx_k];
        $v_g.add(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.createFromObjectData($v_h));
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_g.toArray(), $v_7, $v_8, $v_9, $v_A, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, $v_I, $v_J, $v_K, $v_L, $v_M, $v_N, $v_O, $v_P, $v_Q, $v_R, $v_S, $v_T, $v_U, $v_V, $v_W, $v_X, $v_Y, $v_Z, $v_a, $v_b, $v_c, $v_d, $v_e, $v_f);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.prototype = {
    $S_0: null,
    $8_0: null,
    $4I_0: 0,
    $4N_0: null,
    $4O_0: null,
    $2T_0: null,
    $g_0: false,
    $3c_0: false,
    $1S_0: false,
    $1T_0: false,
    $3z_0: false,
    $40_0: false,
    $V_0: false,
    $o_0: null,
    $19_0: null,
    $F_0: null,
    $1A_0: null,
    $47_0: false,
    $3w_0: false,
    $3i_0: false,
    $3j_0: false,
    $3d_0: false,
    $3q_0: false,
    $3m_0: false,
    $1R_0: false,
    $44_0: false,
    $3B_0: false,
    $2w_0: 0,
    $1Y_0: 0,
    $3g_0: false,
    $3Z_0: false,
    $n_0: false,
    $3f_0: false,
    $3k_0: false,
    $3W_0: false,
    $3C_0: null,
    $3r_0: false,
    $42_0: false,
    $3u_0: false,
    $3l_0: false,
    $3s_0: false,
    $3X_0: false,
    $4f_0: false,
    
    get_id: function() {
        return this.$S_0;
    },
    
    get_logicalName: function() {
        return this.$8_0;
    },
    
    get_displayName: function() {
        return this.$F_0;
    },
    
    get_pluralName: function() {
        return this.$1A_0;
    },
    
    get_objectTypeCode: function() {
        return this.$4I_0;
    },
    
    get_primaryIdAttribute: function() {
        return this.$4N_0;
    },
    
    get_primaryNameAttribute: function() {
        return this.$4O_0;
    },
    
    get_entityColor: function() {
        return this.$3C_0;
    },
    
    get_isReadOnlyForMobileClient: function() {
        return this.$1S_0;
    },
    
    get_isVisibleInMobileClient: function() {
        return this.$1T_0;
    },
    
    get_isInteractionCentricEnabled: function() {
        return this.$3r_0;
    },
    
    get_isQuickCreateEnabled: function() {
        return this.$42_0;
    },
    
    get_isKnowledgeManagementEnabled: function() {
        return this.$3u_0;
    },
    
    get_isOfflineInMobileClient: function() {
        return this.$3z_0;
    },
    
    get_isOptimisticConcurrencyEnabled: function() {
        return this.$40_0;
    },
    
    get_hasChanged: function() {
        return this.$g_0;
    },
    
    get_isActivity: function() {
        switch (this.$8_0) {
            case 'phonecall':
            case 'email':
            case 'task':
            case 'appointment':
            case 'activitypointer':
                return true;
            default:
                return this.$3c_0;
        }
    },
    
    get_isChildEntity: function() {
        return this.$V_0;
    },
    
    get_parentEntityLogicalName: function() {
        return this.$o_0;
    },
    
    get_parentEntityReferencingAttribute: function() {
        return this.$19_0;
    },
    
    get_privilegesByType: function() {
        return this.$2T_0;
    },
    
    get_isValidForAdvancedFind: function() {
        return this.$47_0;
    },
    
    get_isMailMergeEnabled: function() {
        return this.$3w_0;
    },
    
    get_isConnectionsEnabled: function() {
        return this.$3i_0;
    },
    
    get_isCustomizable: function() {
        return this.$3j_0;
    },
    
    get_isActivityParty: function() {
        return this.$3d_0;
    },
    
    get_isImportable: function() {
        return this.$3q_0;
    },
    
    get_isEnabledForCharts: function() {
        return this.$3m_0;
    },
    
    get_isCustomEntity: function() {
        return this.$1R_0;
    },
    
    get_isStateModelAware: function() {
        return this.$44_0;
    },
    
    get_enforceStateTransitions: function() {
        return this.$3B_0;
    },
    
    get_activityTypeMask: function() {
        return this.$2w_0;
    },
    
    get_ownershipType: function() {
        return this.$1Y_0;
    },
    
    get_isCollaboration: function() {
        return this.$3g_0;
    },
    
    get_hasSecuredAttributes: function() {
        return this.$3Z_0;
    },
    
    get_hasStateCode: function() {
        return this.$n_0;
    },
    
    get_isBusinessProcessEnabled: function() {
        return this.$3f_0;
    },
    
    get_isDocumentManagementEnabled: function() {
        return this.$3k_0;
    },
    
    get_hasActivities: function() {
        return this.$3W_0;
    },
    
    get_isDocumentRecommendationsEnabled: function() {
        return this.$3l_0;
    },
    
    get_isIntersect: function() {
        return this.$3s_0;
    },
    
    get_hasNotes: function() {
        return this.$3X_0;
    },
    
    get_usesBusinessDataLabelTable: function() {
        return this.$4f_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['id'] = this.$S_0.getObjectData();
        $v_0['logicalname'] = this.$8_0;
        $v_0['displayname'] = this.$F_0;
        $v_0['pluralname'] = this.$1A_0;
        $v_0['objecttypecode'] = this.$4I_0;
        $v_0['primaryidattribute'] = this.$4N_0;
        $v_0['primarynameattribute'] = this.$4O_0;
        $v_0['isreadonlyformobileclient'] = this.$1S_0;
        $v_0['isvisibleinmobileclient'] = this.$1T_0;
        $v_0['isofflineinmobileclient'] = this.$3z_0;
        $v_0['isoptimisticconcurrencyenabled'] = this.$40_0;
        $v_0['haschanged'] = this.$g_0.toString();
        $v_0['isactivity'] = this.$3c_0;
        $v_0['ischildentity'] = this.$V_0;
        $v_0['parententitylogicalname'] = this.$o_0;
        $v_0['parententityreferencingattribute'] = this.$19_0;
        $v_0['isvalidforadvancedfind'] = this.$47_0;
        $v_0['ismailmergeenabled'] = this.$3w_0;
        $v_0['isconnectionsenabled'] = this.$3i_0;
        $v_0['iscustomizable'] = this.$3j_0;
        $v_0['isactivityparty'] = this.$3d_0;
        $v_0['isimportable'] = this.$3q_0;
        $v_0['isenabledforcharts'] = this.$3m_0;
        $v_0['iscustomentity'] = this.$1R_0;
        $v_0['isstatemodelaware'] = this.$44_0;
        $v_0['enforcestatetransitions'] = this.$3B_0;
        $v_0['iscollaboration'] = this.$3g_0;
        $v_0['activitytypemask'] = this.$2w_0;
        $v_0['ownershiptype'] = this.$1Y_0;
        $v_0['hassecuredattributes'] = this.$3Z_0;
        $v_0['hasstatecode'] = this.$n_0;
        $v_0['isbusinessprocessenabled'] = this.$3f_0;
        $v_0['isdocumentmanagementenabled'] = this.$3k_0;
        $v_0['hasactivities'] = this.$3W_0;
        $v_0['entitycolor'] = this.$3C_0;
        $v_0['isinteractioncentricenabled'] = this.$3r_0;
        $v_0['isQuickCreateEnabled'] = this.$42_0;
        $v_0['isKnowledgeManagementEnabled'] = this.$3u_0;
        $v_0['isDocumentRecommendationsEnabled'] = this.$3l_0;
        $v_0['isIntersect'] = this.$3s_0;
        $v_0['hasnotes'] = this.$3X_0;
        $v_0['usesBusinessDataLabelTable'] = this.$4f_0;
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_2 = this.$2T_0.toArray(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            $v_1.add($v_2.getObjectData());
        }
        $v_0['privileges'] = $v_1.toArray();
        return $v_0;
    },
    
    hasMobileClientAccessForPrivilegeType: function(privilegeType) {
        if (this.$1S_0) {
            return privilegeType === 2;
        }
        return this.$1T_0;
    },
    
    hasMobileClientAccessForAccessRights: function(accessRights) {
        if (this.$1S_0) {
            return accessRights === 1;
        }
        return this.$1T_0;
    },
    
    populateFromCache: function(cachedEntityMetadata) {
        if (_Script.isNullOrUndefined(this.$F_0)) {
            this.$F_0 = cachedEntityMetadata.$F_0;
        }
        if (_Script.isNullOrUndefined(this.$1A_0)) {
            this.$1A_0 = cachedEntityMetadata.$1A_0;
        }
        if (this.$V_0 && (_Script.isNullOrUndefined(this.$o_0) || _Script.isNullOrUndefined(this.$19_0))) {
            this.$o_0 = cachedEntityMetadata.$o_0;
            this.$19_0 = cachedEntityMetadata.$19_0;
        }
        if (!_Script.isNullOrUndefined(cachedEntityMetadata) && this.$n_0 !== cachedEntityMetadata.$n_0) {
            this.$n_0 = cachedEntityMetadata.$n_0;
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection = function(data, serverVersionStamp, deletedAttributeMetadataIds, deserializerCallback) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(serverVersionStamp, 'serverVersionStamp');
    if (!(Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList.isInstanceOfType(data) || Array.isInstanceOfType(data))) {
        throw Error.argumentType('data');
    }
    this.$P_0 = new Array(0);
    this.$7_0 = new Array(0);
    this.$57_0 = serverVersionStamp;
    this.$4o_0 = deletedAttributeMetadataIds;
    if (Microsoft.Crm.Client.Core.Storage.Common.Xml.IXmlNodeList.isInstanceOfType(data)) {
        this.$G_0 = data;
        this.$20_0 = deserializerCallback;
        this.$j_0 = false;
    }
    else {
        this.$P_0 = data;
        var $v_0 = this.$P_0.length;
        for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
            this.$7_0[$v_1] = this.$P_0[$v_1].$7_0;
        }
        this.$j_0 = true;
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection.prototype = {
    $57_0: null,
    $4o_0: null,
    $7_0: null,
    $P_0: null,
    $G_0: null,
    $j_0: false,
    $20_0: null,
    
    get_entityMetadata: function() {
        if (!this.$j_0) {
            this.$7_0 = new Array(0);
            if (!_Script.isNullOrUndefined(this.$G_0)) {
                var $v_0 = this.$G_0.get_count();
                for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
                    var $v_2 = this.$20_0(this.$G_0.get_item($v_1).get_domParserElement());
                    this.$P_0[$v_1] = $v_2;
                    this.$7_0[$v_1] = $v_2.$7_0;
                }
            }
            this.$G_0 = null;
            this.$j_0 = true;
        }
        return this.$7_0;
    },
    
    get_serverVersionStamp: function() {
        return this.$57_0;
    },
    
    get_deletedAttributeMetadataIds: function() {
        return this.$4o_0;
    },
    
    get_count: function() {
        if (this.$j_0) {
            return this.$7_0.length;
        }
        else {
            return this.$G_0.get_count();
        }
    },
    
    get_item: function(index) {
        if (_Script.isNullOrUndefined(this.$P_0[index]) && !_Script.isNullOrUndefined(this.$G_0.get_item(index))) {
            this.$P_0[index] = this.$20_0(this.$G_0.get_item(index).get_domParserElement());
            this.$7_0[index] = this.$P_0[index].$7_0;
        }
        return this.$P_0[index];
    },
    
    deserialize: function() {
        if (!this.$j_0) {
            if (!_Script.isNullOrUndefined(this.$G_0)) {
                var $v_0 = this.$G_0.get_count();
                for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
                    if (_Script.isNullOrUndefined(this.$P_0[$v_1])) {
                        var $v_2 = this.$20_0(this.$G_0.get_item($v_1).get_domParserElement());
                        this.$P_0[$v_1] = $v_2;
                        this.$7_0[$v_1] = $v_2.$7_0;
                    }
                }
            }
            this.$G_0 = null;
            this.$j_0 = true;
        }
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord = function(data, fields, fieldTypes, formattedValues, numericFormattedValues, relatedEntities, columnSet, clientRetrieveOptions, draftId) {
    if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.isInstanceOfType(data)) {
        fields = (data).fields;
        fieldTypes = (data).$0_0;
        formattedValues = (data).$H_0;
        numericFormattedValues = (data).$16_0;
        relatedEntities = (data).$1b_0;
        clientRetrieveOptions = (data).$1_0;
        draftId = (data).$1M_0;
        this.$D_0 = (data).$D_0;
    }
    else {
        this.$D_0 = data;
    }
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(this.$D_0, 'identifier');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(fields, 'fields');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(fieldTypes, 'fieldTypes');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(formattedValues, 'formattedValues');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(numericFormattedValues, 'numericFormattedValues');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(relatedEntities, 'relatedEntities');
    this.fields = fields;
    this.$0_0 = fieldTypes;
    this.$H_0 = formattedValues;
    this.$16_0 = numericFormattedValues;
    this.$1b_0 = relatedEntities;
    this.$3_0 = (!_Script.isNullOrUndefined(columnSet)) ? columnSet : new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
    this.updateColumnSet(this.get_fieldNames());
    this.$v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
    this.$1q_0 = {};
    this.$1_0 = clientRetrieveOptions;
    this.$X_0 = 0;
    this.$1M_0 = (_Script.isNullOrUndefined(draftId)) ? new Date().getTime().toString() : draftId;
    var $v_0 = this.getValue('activitytypecode');
    if (this.$D_0.LogicalName === 'activitypointer' && $v_0) {
        this.$M_0 = new Xrm.Objects.EntityReference($v_0, this.$D_0.Id);
    }
    else {
        this.$M_0 = this.$D_0;
    }
    this.$e_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData = function(data) {
    var $v_0 = Xrm.Objects.EntityReference.createFromObjectData(data['identifier']);
    var $v_1 = data['fieldtypes'];
    var $v_2 = data['fields'];
    var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFieldsFromObjectData($v_2, $v_1);
    var $v_4 = data['formattedfields'];
    var $v_5 = data['numericformattedfields'];
    var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0));
    var $v_7;
    if ((('allcolumns') in data)) {
        $v_7 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    }
    else {
        $v_7 = Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.createFromObjectData(data['columnset']);
    }
    var $v_8 = (('clientretrieveoptions') in data) ? Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.createFromObjectData(data['clientretrieveoptions']) : null;
    var $v_9 = (('draftid') in data) ? data['draftid'] : null;
    var $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_0, $v_3, $v_1, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9);
    Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$5h($v_A, data);
    $v_A.$X_0 = data['accessrights'];
    var $v_B = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
    for (var $$arr_D = data['sharedattributeprivileges'], $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
        var $v_E = $$arr_D[$$idx_F];
        var $v_F = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.createFromObjectData($v_E);
        $v_B.set_item($v_F.$1H_0.toString(), $v_F);
    }
    $v_A.$e_0 = $v_B;
    var $v_C = data['entityrecordforprocess'];
    if (!_Script.isNullOrUndefined($v_C)) {
        $v_A.$k_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_C);
    }
    var $v_D = data['globalnavigationdata'];
    if (!_Script.isNullOrUndefined($v_D)) {
        $v_A.$m_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_D);
    }
    return $v_A;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$5h = function($p0, $p1) {
    $p0.$x_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.getDraftType($p1);
    switch ($p0.$x_0) {
        case 0:
            break;
        case 1:
            $p0.$5H_0();
            break;
        default:
            throw Error.notImplemented('Unknown draft type');
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.getDraftType = function(data) {
    var $v_0 = data['drafttype_logicalname_timestamp'];
    if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
        return Number.parseInvariant($v_0.split('|')[0]);
    }
    return 0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFieldsFromObjectData = function(fieldData, fieldTypes) {
    var $v_0 = {};
    var $$dict_4 = fieldData;
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        $v_0[$v_1.key] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$3b($v_1.value, fieldTypes[$v_1.key]);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createSingleFieldFromObjectData = function(fieldValue, fieldType) {
    return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$3b(fieldValue, fieldType);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$3b = function($p0, $p1) {
    if (_Script.isNullOrUndefined($p0)) {
        return null;
    }
    else {
        switch ($p1) {
            case 21:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.createFromObjectData($p0);
            case 1:
            case 6:
            case 9:
                return Xrm.Objects.EntityReference.createFromObjectData($p0);
            case 15:
                return Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData($p0);
            case 2:
                return new Date(Date.parse($p0));
            case 13:
            case 12:
            case 0:
            case 11:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData($p0);
            case 10:
                return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData($p0);
            default:
                return $p0;
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$5F = function($p0, $p1) {
    if (_Script.isNullOrUndefined($p0)) {
        return null;
    }
    else {
        switch ($p1) {
            case 21:
                return ($p0).getObjectData();
            case 1:
            case 6:
            case 9:
                return ($p0).getObjectData();
            case 15:
                return ($p0).getObjectData();
            case 2:
                return $p0.toString();
            case 13:
            case 12:
            case 0:
            case 11:
                return ($p0).getObjectData();
            case 10:
                return ($p0).getObjectData();
            default:
                return $p0;
        }
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.prototype = {
    $D_0: null,
    $M_0: null,
    fields: null,
    $H_0: null,
    $16_0: null,
    $1b_0: null,
    $v_0: null,
    $1M_0: null,
    $1q_0: null,
    $0_0: null,
    $3_0: null,
    $1_0: null,
    $x_0: 0,
    $X_0: 0,
    $e_0: null,
    $k_0: null,
    $m_0: null,
    
    get_fields: function() {
        return this.fields;
    },
    
    get_identifier: function() {
        return this.$D_0;
    },
    
    get_actionableIdentifier: function() {
        return this.$M_0;
    },
    
    get_fieldTypes: function() {
        return this.$0_0;
    },
    
    get_formattedValues: function() {
        return this.$H_0;
    },
    
    get_numericFormattedValues: function() {
        return this.$16_0;
    },
    
    get_relatedEntities: function() {
        return this.$1b_0;
    },
    
    get_fieldNames: function() {
        var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
        var $$dict_2 = this.fields;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0.add($v_1.key);
        }
        return $v_0.toArray();
    },
    
    get_changedFieldNames: function() {
        return this.$v_0;
    },
    
    get_cleanFields: function() {
        return this.$1q_0;
    },
    
    get_columnSet: function() {
        return this.$3_0;
    },
    
    get_directColumnSet: function() {
        if (this.$3_0 === Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance()) {
            return this.$3_0;
        }
        else {
            var $v_0 = this.$3_0;
            var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
            for (var $$arr_2 = $v_0.$6_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_2 = $$arr_2[$$idx_4];
                if (this.$0_0[$v_2] !== 21) {
                    $v_1.add($v_2);
                }
            }
            return new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_1.toArray());
        }
    },
    
    get_key: function() {
        if (this.$x_0 === 1) {
            return this.$D_0.get_key() + this.$1M_0;
        }
        else {
            return this.$D_0.get_key();
        }
    },
    
    get_clientRetrieveOptions: function() {
        return this.$1_0;
    },
    
    set_clientRetrieveOptions: function(value) {
        this.$1_0 = value;
        for (var $$arr_1 = this.$1b_0.$Q_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            $v_0.get_value().set_clientRetrieveOptions(value);
        }
        return value;
    },
    
    get_accessRights: function() {
        return this.$X_0;
    },
    
    set_accessRights: function(value) {
        this.$X_0 = value;
        return value;
    },
    
    get_userSharedAttributePrivileges: function() {
        return this.$e_0;
    },
    
    set_userSharedAttributePrivileges: function(value) {
        this.$e_0 = value;
        return value;
    },
    
    get_entityRecordForProcess: function() {
        return this.$k_0;
    },
    
    set_entityRecordForProcess: function(value) {
        this.$k_0 = value;
        return value;
    },
    
    get_globalNavigationData: function() {
        return this.$m_0;
    },
    
    set_globalNavigationData: function(value) {
        this.$m_0 = value;
        return value;
    },
    
    get_draftId: function() {
        return this.$1M_0;
    },
    
    get_draftType: function() {
        return this.$x_0;
    },
    
    set_draftType: function(value) {
        this.$x_0 = value;
        return value;
    },
    
    isDirty: function() {
        return this.$v_0.get_Count() > 0;
    },
    
    createFieldFromObjectData: function(fieldName, fieldValue) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$3b(fieldValue, this.$0_0[fieldName]);
    },
    
    clone: function() {
        var $v_0 = this.getObjectData();
        var $v_1 = $v_0['columnset'];
        if (!_Script.isNullOrUndefined($v_1)) {
            $v_1['columns'] = Array.clone($v_1['columns']);
        }
        var $v_2 = $v_0['formattedfields'];
        var $v_3 = {};
        var $$dict_5 = $v_2;
        for (var $$key_6 in $$dict_5) {
            var $v_6 = { key: $$key_6, value: $$dict_5[$$key_6] };
            $v_3[$v_6.key] = $v_6.value;
        }
        var $v_4 = $v_0['numericformattedfields'];
        var $v_5 = {};
        var $$dict_A = $v_4;
        for (var $$key_B in $$dict_A) {
            var $v_7 = { key: $$key_B, value: $$dict_A[$$key_B] };
            $v_5[$v_7.key] = $v_7.value;
        }
        $v_0['formattedfields'] = $v_3;
        $v_0['numericformattedfields'] = $v_5;
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_0);
    },
    
    createCustomizedClone: function(formattedFields, fields, fieldTypes, columnSet) {
        var $v_0 = this.getObjectData();
        if (_Script.isNullOrUndefined(columnSet)) {
            var $v_3 = $v_0['columnset'];
            if (!_Script.isNullOrUndefined($v_3)) {
                $v_3['columns'] = Array.clone($v_3['columns']);
            }
        }
        else {
            $v_0['columnset'] = columnSet;
        }
        var $v_1 = $v_0['numericformattedfields'];
        var $v_2 = {};
        var $$dict_9 = $v_1;
        for (var $$key_A in $$dict_9) {
            var $v_4 = { key: $$key_A, value: $$dict_9[$$key_A] };
            $v_2[$v_4.key] = $v_4.value;
        }
        $v_0['formattedfields'] = formattedFields;
        $v_0['fields'] = fields;
        $v_0['numericformattedfields'] = $v_2;
        if (!_Script.isNullOrUndefined(fieldTypes)) {
            $v_0['fieldtypes'] = fieldTypes;
        }
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.createFromObjectData($v_0);
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['identifier'] = this.$D_0.getObjectData();
        $v_0['fields'] = this.$5A_0();
        $v_0['fieldtypes'] = this.$0_0;
        $v_0['formattedfields'] = this.$H_0;
        $v_0['numericformattedfields'] = this.$16_0;
        $v_0['draftid'] = this.$1M_0;
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(this.$3_0)) {
            $v_0['allcolumns'] = true;
        }
        else {
            $v_0['columnset'] = (this.$3_0).getObjectData();
        }
        if (!_Script.isNullOrUndefined(this.$1_0)) {
            $v_0['clientretrieveoptions'] = this.$1_0.getObjectData();
            $v_0['drafttype_logicalname_timestamp'] = this.$5R_0();
        }
        $v_0['accessrights'] = this.$X_0;
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_2 = this.$e_0.toArray(), $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            $v_1.add($v_2.getObjectData());
        }
        $v_0['sharedattributeprivileges'] = $v_1.toArray();
        if (!_Script.isNullOrUndefined(this.$k_0)) {
            $v_0['entityrecordforprocess'] = this.$k_0.getObjectData();
        }
        if (!_Script.isNullOrUndefined(this.$m_0)) {
            $v_0['globalnavigationdata'] = this.$m_0.getObjectData();
        }
        return $v_0;
    },
    
    $5R_0: function() {
        return this.$x_0 + '|' + this.$D_0.LogicalName + '|' + Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.getSortableString(this.$1_0.$A_0);
    },
    
    $5A_0: function() {
        var $v_0 = {};
        var $$dict_2 = this.fields;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0[$v_1.key] = this.getFieldObjectData($v_1.key);
        }
        return $v_0;
    },
    
    getFieldObjectData: function(fieldName) {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.$5F(this.getValue(fieldName), this.$0_0[fieldName]);
    },
    
    getFields: function() {
        return this.$5A_0();
    },
    
    hasValue: function(fieldName) {
        return ((fieldName) in this.fields);
    },
    
    hasField: function(fieldName) {
        return ((fieldName) in this.$0_0);
    },
    
    hasFieldType: function(fieldType) {
        var $$dict_2 = this.$0_0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_0.value === fieldType) {
                return true;
            }
        }
        return false;
    },
    
    getValue: function(fieldName) {
        return this.fields[fieldName];
    },
    
    getFormattedValue: function(fieldName) {
        if (!_Script.isNullOrUndefined(this.$H_0[fieldName])) {
            return this.$H_0[fieldName];
        }
        if (this.$0_0[fieldName] === 21) {
            return (this.getValue(fieldName)).$11_0;
        }
        else {
            return this.getValue(fieldName);
        }
    },
    
    getNumericFormattedValue: function(fieldName) {
        return this.$16_0[fieldName] || this.getFormattedValue(fieldName);
    },
    
    setValue: function(fieldName, value) {
        if (!((fieldName) in this.$0_0)) {
            throw Error.argumentOutOfRange(fieldName);
        }
        if (Microsoft.Crm.Client.Core.Framework.IPicklistItem.isInstanceOfType(value)) {
            this.fields[fieldName] = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromPicklistItem(value);
        }
        else {
            this.fields[fieldName] = value;
        }
        if (fieldName === 'entityimage' && this.$0_0['entityimage'] === 17) {
            this.$0_0['entityimage'] = 23;
        }
        this.updateColumnSet([ fieldName ]);
    },
    
    markFieldChanged: function(fieldName) {
        if (!this.$v_0.contains(fieldName)) {
            this.$1q_0[fieldName] = this.fields[fieldName];
            this.$v_0.add(fieldName);
            if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.isInstanceOfType(this.fields[fieldName])) {
                for (var $$arr_1 = (this.fields[fieldName]).get_entities(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                    var $v_0 = $$arr_1[$$idx_3];
                    $v_0.$5H_0();
                }
            }
        }
    },
    
    $5H_0: function() {
        for (var $$arr_0 = this.get_fieldNames(), $$len_1 = $$arr_0.length, $$idx_2 = 0; $$idx_2 < $$len_1; ++$$idx_2) {
            var $v_0 = $$arr_0[$$idx_2];
            this.markFieldChanged($v_0);
        }
    },
    
    resetChanges: function() {
        this.$v_0.clear();
        this.$1q_0 = {};
    },
    
    mergeChanges: function(changes) {
        if (!_Script.isNullOrUndefined(this.$1_0)) {
            this.$1_0.update(changes.$1_0);
        }
        else {
            this.$1_0 = changes.$1_0;
        }
        this.$X_0 = changes.$X_0;
        this.mergeEntityRecordFields(changes);
        this.$k_0 = changes.$k_0;
        this.$m_0 = changes.$m_0;
    },
    
    mergeEntityRecordFields: function(changes) {
        var $$dict_3 = changes.fields;
        for (var $$key_4 in $$dict_3) {
            var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_1 = $v_0.key;
            if ((($v_1) in this.fields)) {
                if (!Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual(this.fields[$v_1], $v_0.value)) {
                    this.fields[$v_1] = $v_0.value;
                    if ((($v_1) in this.$0_0) && (($v_1) in changes.$0_0)) {
                        this.$0_0[$v_1] = changes.$0_0[$v_1];
                    }
                }
            }
            else {
                this.fields[$v_1] = $v_0.value;
            }
        }
        var $$dict_7 = changes.$0_0;
        for (var $$key_8 in $$dict_7) {
            var $v_2 = { key: $$key_8, value: $$dict_7[$$key_8] };
            var $v_3 = $v_2.key;
            if (!(($v_3) in this.$0_0)) {
                this.$0_0[$v_3] = changes.$0_0[$v_3];
            }
            if ((($v_3) in this.fields) && !(($v_3) in changes.fields)) {
                delete this.fields[$v_3];
                delete this.$H_0[$v_3];
                delete this.$16_0[$v_3];
            }
        }
        var $$dict_A = changes.$H_0;
        for (var $$key_B in $$dict_A) {
            var $v_4 = { key: $$key_B, value: $$dict_A[$$key_B] };
            if ((($v_4.key) in this.$H_0)) {
                if (!Microsoft.Crm.Client.Core.Framework.ObjectComparer.areValuesEqual(this.$H_0[$v_4.key], $v_4.value)) {
                    this.$H_0[$v_4.key] = $v_4.value;
                }
            }
            else {
                this.$H_0[$v_4.key] = $v_4.value;
            }
        }
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(changes.$3_0)) {
            this.updateColumnSet(changes.$3_0);
        }
        else {
            this.updateColumnSet(this.get_fieldNames());
        }
    },
    
    initializeValue: function(fieldName, value, attributeType) {
        this.fields[fieldName] = value;
        if (!((fieldName) in this.$0_0)) {
            this.$0_0[fieldName] = attributeType;
        }
        this.updateColumnSet([ fieldName ]);
    },
    
    resetMetadata: function(updatedFieldTypes) {
        var $$dict_2 = this.$0_0;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_0.value === 21 || !(($v_0.key) in updatedFieldTypes)) {
                updatedFieldTypes[$v_0.key] = $v_0.value;
            }
        }
        this.$0_0 = updatedFieldTypes;
    },
    
    cacheSize: function() {
        var $v_0 = JSON.stringify(this.getObjectData());
        return $v_0.length;
    },
    
    updateColumnSet: function(arg, relatedEntityQueries) {
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(this.$3_0)) {
            return;
        }
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType(arg)) {
            this.$3_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
        }
        else {
            var $v_0;
            if (Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType(arg)) {
                $v_0 = (arg).$6_0;
            }
            else {
                $v_0 = arg;
            }
            var $v_1 = this.$3_0;
            for (var $$arr_4 = $v_0, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_2 = $$arr_4[$$idx_6];
                if (!Array.contains($v_1.$6_0, $v_2)) {
                    Array.add($v_1.$6_0, $v_2);
                }
            }
        }
        if (!_Script.isNullOrUndefined(relatedEntityQueries)) {
            for (var $$arr_8 = relatedEntityQueries, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                var $v_3 = $$arr_8[$$idx_A];
                var $v_4 = this.$1b_0.getByRelationship($v_3.$2V_2);
                for (var $$arr_D = $v_4.get_entities(), $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
                    var $v_5 = $$arr_D[$$idx_F];
                    $v_5.updateColumnSet($v_3.$3_0);
                }
            }
        }
    }
}


Xrm.Objects.EntityReference = function(logicalName, id, name, rowVersion) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(logicalName, 'logicalName');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(id, 'id');
    this.LogicalName = logicalName;
    this.Id = id;
    this.Name = OptionalParameter.getValue(String, name);
    this.$1E_0 = rowVersion;
    this.TypeName = logicalName;
    this.TypeDisplayName = logicalName;
}
Xrm.Objects.EntityReference.get_empty = function() {
    return Xrm.Objects.EntityReference.$4q || (Xrm.Objects.EntityReference.$4q = new Xrm.Objects.EntityReference('', Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), ''));
}
Xrm.Objects.EntityReference.createFromObjectData = function(data) {
    var $v_0 = data['logicalname'];
    var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['id']);
    var $v_2 = data['name'];
    if ((('rowversion') in data) && data['rowversion']) {
        var $v_3 = data['rowversion'];
        return new Xrm.Objects.EntityReference($v_0, $v_1, $v_2, $v_3);
    }
    return new Xrm.Objects.EntityReference($v_0, $v_1, $v_2);
}
Xrm.Objects.EntityReference.$5K = function($p0) {
    return $p0.substr(0, 1).toUpperCase() + $p0.substr(1);
}
Xrm.Objects.EntityReference.prototype = {
    Id: null,
    LogicalName: null,
    Name: null,
    TypeCode: 0,
    TypeDisplayName: null,
    TypeName: null,
    
    get_key: function() {
        return this.Id.toString();
    },
    
    get_identifier: function() {
        return this.Id.toString();
    },
    
    get_modelType: function() {
        return this.LogicalName;
    },
    
    get_displayName: function() {
        return this.Name;
    },
    
    $1E_0: null,
    
    get_rowVersion: function() {
        return this.$1E_0;
    },
    
    set_rowVersion: function(value) {
        this.$1E_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['logicalname'] = this.LogicalName;
        $v_0['id'] = this.Id.getObjectData();
        $v_0['name'] = this.Name;
        if (!_Script.isNullOrUndefined(this.$1E_0)) {
            $v_0['rowversion'] = this.$1E_0;
        }
        return $v_0;
    },
    
    equals: function(other) {
        if (Xrm.Objects.EntityReference.isInstanceOfType(other)) {
            var $v_0 = other;
            return $v_0.LogicalName === this.LogicalName && this.Id.equals($v_0.Id) && this.Name === $v_0.Name;
        }
        return false;
    },
    
    getHashCode: function() {
        return (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.LogicalName)) ? Microsoft.Crm.Client.Core.Framework._String.hashCode(this.LogicalName) ^ this.Id.getHashCode() : 0;
    },
    
    toString: function() {
        return String.format('{0}:{1}', this.LogicalName, this.Id.toString());
    },
    
    getValue: function(fieldName) {
        return this[Xrm.Objects.EntityReference.$5K(fieldName)];
    },
    
    setValue: function(fieldName, value) {
        this[Xrm.Objects.EntityReference.$5K(fieldName)] = value;
    }
}


Xrm.Gen.ErrorInfo = function(resourceList, errorCode) {
    this.$2q_0 = resourceList;
    this.$2i_0 = errorCode;
}
Xrm.Gen.ErrorInfo.prototype = {
    $2q_0: null,
    
    get_resourceList: function() {
        return this.$2q_0;
    },
    
    set_resourceList: function(value) {
        this.$2q_0 = value;
        return value;
    },
    
    $2i_0: null,
    
    get_errorCode: function() {
        return this.$2i_0;
    },
    
    set_errorCode: function(value) {
        this.$2i_0 = value;
        return value;
    }
}


Xrm.Sdk.ExecuteMultipleResponseItem = function(fault, requestIndex, response) {
    this.$2p_0 = requestIndex;
    this.$2r_0 = response;
    this.$2k_0 = fault;
}
Xrm.Sdk.ExecuteMultipleResponseItem.prototype = {
    $2k_0: null,
    
    get_fault: function() {
        return this.$2k_0;
    },
    
    set_fault: function(value) {
        this.$2k_0 = value;
        return value;
    },
    
    $2p_0: 0,
    
    get_requestIndex: function() {
        return this.$2p_0;
    },
    
    set_requestIndex: function(value) {
        this.$2p_0 = value;
        return value;
    },
    
    $2r_0: null,
    
    get_response: function() {
        return this.$2r_0;
    },
    
    set_response: function(value) {
        this.$2r_0 = value;
        return value;
    }
}


Xrm.Gen.ExecuteMultipleSettings = function(continueOnError, returnResponses) {
    this.$2e_0 = continueOnError;
    this.$2s_0 = returnResponses;
}
Xrm.Gen.ExecuteMultipleSettings.prototype = {
    $2e_0: false,
    
    get_continueOnError: function() {
        return this.$2e_0;
    },
    
    set_continueOnError: function(value) {
        this.$2e_0 = value;
        return value;
    },
    
    $2s_0: false,
    
    get_returnResponses: function() {
        return this.$2s_0;
    },
    
    set_returnResponses: function(value) {
        this.$2s_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile = function(profileId, offlineAvailableEntities, profileVersion) {
    this.$4P_0 = (!_Script.isNullOrUndefined(profileId)) ? profileId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1V_0 = {};
    var $v_0 = false;
    var $$dict_5 = offlineAvailableEntities;
    for (var $$key_6 in $$dict_5) {
        var $v_1 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_0 = true;
        if (Object.getType(offlineAvailableEntities) === Array) {
            this.$1V_0[$v_1.value.toString()] = true;
        }
        else {
            this.$1V_0[$v_1.key] = true;
        }
    }
    this.$3Y_0 = $v_0;
    this.$4Q_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(profileVersion)) ? profileVersion : '';
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile.createFromObjectData = function(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_1 = '';
    var $v_2 = {};
    if (data) {
        if (data['profileid'].toString() !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()) {
            $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['profileid']);
        }
        $v_2 = data['offlineavailableentities'];
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(data['profileversion'].toString())) {
            $v_1 = data['profileversion'].toString();
        }
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile($v_0, $v_2, $v_1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile.prototype = {
    $4P_0: null,
    $4Q_0: null,
    $1V_0: null,
    $3Y_0: false,
    
    get_profileId: function() {
        return this.$4P_0;
    },
    
    get_profileVersion: function() {
        return this.$4Q_0;
    },
    
    get_offlineAvailableEntities: function() {
        return this.$1V_0;
    },
    
    get_hasOfflineAvailableEntities: function() {
        return this.$3Y_0;
    },
    
    set_hasOfflineAvailableEntities: function(value) {
        this.$3Y_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['profileid'] = this.$4P_0.getObjectData();
        $v_0['offlineavailableentities'] = this.$1V_0;
        $v_0['profileversion'] = this.$4Q_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata = function(label, value, state, defaultStatus, allowedStatusTransition, color, invariantName) {
    this.get_ValueString = this.get_valueString;
    this.set_ValueString = this.set_valueString;
    this.get_Label = this.get_label;
    this.set_Label = this.set_label;
    this.$15_0 = label;
    this.$L_0 = value;
    this.$1B_0 = state;
    this.$1L_0 = defaultStatus;
    this.$1G_0 = allowedStatusTransition;
    this.$w_0 = color;
    this.$29_0 = invariantName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromPicklistItem = function(item) {
    if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.isInstanceOfType(item)) {
        return item;
    }
    else {
        var $v_0 = item.get_Label();
        var $v_1 = Number.parseInvariant(item.get_ValueString());
        var $v_2 = -1;
        var $v_3 = -1;
        var $v_4 = null;
        var $v_5 = null;
        var $v_6 = null;
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6);
    }
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData = function(data) {
    var $v_0 = data['label'];
    var $v_1 = data['value'];
    var $v_2 = (('state') in data) ? data['state'] : -1;
    var $v_3 = (('defaultstatus') in data) ? data['defaultstatus'] : -1;
    var $v_4 = (('allowedstatustransitions') in data) ? data['allowedstatustransitions'] : null;
    var $v_5 = (('color') in data) ? data['color'] : null;
    var $v_6 = data['invariantname'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.prototype = {
    $15_0: null,
    $L_0: 0,
    $1B_0: 0,
    $1L_0: 0,
    $1G_0: null,
    $w_0: null,
    $29_0: null,
    
    get_label: function() {
        return this.$15_0;
    },
    
    set_label: function(value) {
        this.$15_0 = value;
        return value;
    },
    
    get_valueString: function() {
        return this.$L_0.toString();
    },
    
    set_valueString: function(value) {
        this.$L_0 = Number.parseInvariant(value);
        return value;
    },
    
    get_allowedStatusTransitions: function() {
        return this.$1G_0;
    },
    
    set_allowedStatusTransitions: function(value) {
        this.$1G_0 = value;
        return value;
    },
    
    get_color: function() {
        return this.$w_0;
    },
    
    set_color: function(value) {
        this.$w_0 = value;
        return value;
    },
    
    get_value: function() {
        return this.$L_0;
    },
    
    set_value: function(value) {
        this.$L_0 = value;
        return value;
    },
    
    get_state: function() {
        return this.$1B_0;
    },
    
    set_state: function(value) {
        this.$1B_0 = value;
        return value;
    },
    
    get_defaultStatus: function() {
        return this.$1L_0;
    },
    
    set_defaultStatus: function(value) {
        this.$1L_0 = value;
        return value;
    },
    
    get_invariantName: function() {
        return this.$29_0;
    },
    
    set_invariantName: function(value) {
        this.$29_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['label'] = this.$15_0;
        $v_0['value'] = this.$L_0;
        $v_0['state'] = this.$1B_0;
        $v_0['defaultstatus'] = this.$1L_0;
        $v_0['allowedstatustransitions'] = this.$1G_0;
        $v_0['color'] = this.$w_0;
        $v_0['invariantname'] = this.$29_0;
        return $v_0;
    },
    
    getValue: function(fieldName) {
        if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.label || fieldName === 'label') {
            return this.$15_0;
        }
        else if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.value || fieldName === 'value') {
            return this.$L_0;
        }
        else if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.state || fieldName === 'state') {
            return this.$1B_0;
        }
        else if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.defaultStatus || fieldName === 'defaultstatus') {
            return this.$1L_0;
        }
        else if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.allowedStatusTransitions || fieldName === 'allowedstatustransitions') {
            return this.$1G_0;
        }
        else if (fieldName === Microsoft.Crm.Client.Core.Framework.FieldFormat.color || fieldName === 'color') {
            return this.$w_0;
        }
        else {
            throw Error.argumentOutOfRange('fieldName', fieldName);
        }
    },
    
    toString: function() {
        return this.$1B_0.toString();
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata = function(options) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(options, 'options');
    this.$1X_0 = options;
    this.$51_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.$5P(options);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.createFromObjectData = function(data) {
    var $v_0 = {};
    var $$dict_4 = data['optionsindisplayorder'];
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        var $v_2 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.createFromObjectData($v_1.value);
        $v_0[$v_1.key] = $v_2;
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata($v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.$5P = function($p0) {
    var $v_0 = {};
    var $$dict_4 = $p0;
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        var $v_2 = $v_1.value;
        $v_0[$v_2.get_valueString()] = $v_2;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.prototype = {
    $51_0: null,
    $1X_0: null,
    
    get_options: function() {
        return this.$51_0;
    },
    
    get_optionsInDisplayOrder: function() {
        return this.$1X_0;
    },
    
    createSimpleForm: function() {
        var $v_0 = new Array(0);
        var $$dict_3 = this.$1X_0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_2 = {};
            $v_2['Label'] = ($v_1.value).$15_0;
            $v_2['Value'] = ($v_1.value).$L_0;
            $v_2['Color'] = ($v_1.value).$w_0;
            $v_0.push($v_2);
        }
        return $v_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        if (!_Script.isNullOrUndefined(this.$1X_0)) {
            var $v_1 = {};
            var $$dict_4 = this.$1X_0;
            for (var $$key_5 in $$dict_4) {
                var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
                var $v_3 = $v_2.value;
                $v_1[$v_2.key] = $v_3.getObjectData();
            }
            $v_0['optionsindisplayorder'] = $v_1;
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings = function(organizationId, organizationName, languageCode, enabledLanguages, currencyDisplayOption, blockedAttachments, maxUploadFileSize, reportScriptErrors, isAutoSaveEnabled, isDuplicateDetectionEnabled, isDuplicateDetectionEnabledForOnlineCreateUpdate, orgCultureInfoLcid, fullNameConventionCode, fiscalCalendarStart, fiscalPeriodFormatPeriod, fiscalYearFormatPrefix, fiscalYearFormatYear, fiscalYearFormatSuffix, fiscalPeriodType, fiscalYearDisplayCode, fiscalPeriodConnector, isSOPIntegrationEnabled, baseCurrencyId, organizationUniqueName, useSkypeProtocol, defaultCountryCode, pricingDecimalPrecision, isTelemetryEnabled, isTrialOrganization, isMocaOfflineFeatureEnabled, mobileOfflineSyncInterval, norsyncServerConnectionString, overrideTrackInCrmBehaviour, showWeekNumber, currentThemeData, delveUrl, kmUseExternalPortal, kmExternalPortalUrl, isParature, isKMConfigured, maxIncidentMergeNumber, maxChildIncidentNumber, isConflictDetectionEnabledForMobileClient, enableMicrosoftFlowIntegration, isMobileClientOnDemandSyncEnabled, isExternalSearchIndexEnabled, microsoftFlowEnvironment) {
    this.$22_0 = new Date(0, 0, 1);
    this.$2O_0 = (!_Script.isNullOrUndefined(organizationId)) ? organizationId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$2P_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(organizationName)) ? organizationName : '';
    this.$2G_0 = languageCode;
    this.$39_0 = (!_Script.isNullOrUndefined(enabledLanguages)) ? enabledLanguages : new Array(0);
    this.$1s_0 = currencyDisplayOption;
    this.$1o_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(blockedAttachments)) ? blockedAttachments : '';
    this.$2J_0 = maxUploadFileSize;
    this.$d_0 = reportScriptErrors;
    this.$2Q_0 = orgCultureInfoLcid;
    this.$3V_0 = fullNameConventionCode;
    this.$22_0 = (!_Script.isNullOrUndefined(fiscalCalendarStart)) ? fiscalCalendarStart : new Date();
    this.$3Q_0 = fiscalPeriodFormatPeriod;
    this.$23_0 = fiscalYearFormatYear;
    this.$3T_0 = fiscalYearFormatPrefix;
    this.$4u_0 = fiscalYearFormatSuffix;
    this.$3R_0 = fiscalPeriodType;
    this.$3S_0 = fiscalYearDisplayCode;
    this.$3P_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(fiscalPeriodConnector)) ? fiscalPeriodConnector : '';
    this.$3e_0 = isAutoSaveEnabled;
    this.$2B_0 = isDuplicateDetectionEnabled;
    this.$2C_0 = isDuplicateDetectionEnabledForOnlineCreateUpdate;
    this.$43_0 = isSOPIntegrationEnabled;
    this.$1m_0 = (!_Script.isNullOrUndefined(baseCurrencyId)) ? baseCurrencyId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$4K_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(organizationUniqueName)) ? organizationUniqueName : '';
    this.$4g_0 = useSkypeProtocol;
    this.$38_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(defaultCountryCode)) ? defaultCountryCode : '';
    this.$4M_0 = pricingDecimalPrecision;
    this.$45_0 = isTelemetryEnabled;
    this.$46_0 = isTrialOrganization;
    this.$3y_0 = isMocaOfflineFeatureEnabled;
    this.$4E_0 = mobileOfflineSyncInterval;
    this.$4H_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(norsyncServerConnectionString)) ? norsyncServerConnectionString : '';
    this.$4L_0 = overrideTrackInCrmBehaviour;
    this.$2Y_0 = showWeekNumber;
    this.$37_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(currentThemeData)) ? currentThemeData : '';
    this.$4p_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(delveUrl)) ? delveUrl : '';
    this.$4A_0 = kmUseExternalPortal;
    this.$49_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(kmExternalPortalUrl)) ? kmExternalPortalUrl : '';
    this.$41_0 = isParature;
    this.$3t_0 = isKMConfigured;
    this.$4C_0 = maxIncidentMergeNumber;
    this.$4B_0 = maxChildIncidentNumber;
    this.$3h_0 = isConflictDetectionEnabledForMobileClient;
    this.$3A_0 = enableMicrosoftFlowIntegration;
    this.$4D_0 = microsoftFlowEnvironment;
    this.$3x_0 = isMobileClientOnDemandSyncEnabled;
    this.$4y_0 = isExternalSearchIndexEnabled;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createInstance = function(organizationId, entity) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings(organizationId, entity.getValue('name'), entity.getValue('languagecode'), entity.getValue('enabledlanguages'), (entity.getValue('currencydisplayoption')).$L_0, entity.getValue('blockedattachments'), entity.getValue('maxuploadfilesize'), (entity.getValue('reportscripterrors')).$L_0, entity.getValue('isautosaveenabled'), entity.getValue('isDuplicateDetectionEnabled'), entity.getValue('isDuplicateDetectionEnabledForOnlineCreateUpdate'), entity.getValue('orgcultureinfolcid'), entity.getValue('fullnameconventioncode'), entity.getValue('fiscalcalendarstart'), entity.getValue('fiscalperiodformatperiod'), entity.getValue('fiscalyearformatprefix'), entity.getValue('fiscalyearformatyear'), entity.getValue('fiscalyearformatsuffix'), entity.getValue('fiscalperiodtype'), entity.getValue('fiscalyeardisplaycode'), entity.getValue('fiscalperiodconnector'), entity.getValue('issopintegrationenabled'), entity.getValue('basecurrencyid'), entity.getValue('organizationuniquename'), entity.getValue('useskypeprotocol'), entity.getValue('defaultcountrycode'), entity.getValue('pricingdecimalprecision'), entity.getValue('istelemetryenabled'), entity.getValue('istrialorganization'), entity.getValue('ismocaofflinefeatureenabled'), entity.getValue('mobileOfflineSyncInterval'), entity.getValue('norsyncServerConnectionString'), entity.getValue('overridetrackincrmbehaviour'), entity.getValue('showweeknumber'), entity.getValue('defaultthemedata'), entity.getValue('delveurl'), entity.getValue('kmUseExternalPortal'), entity.getValue('kmExternalPortalUrl'), entity.getValue('isParature'), entity.getValue('iskmconfigured'), entity.getValue('maxincidentmergenumber'), entity.getValue('maxchildincidentnumber'), entity.getValue('isconflictdetectionenabledformobileclient'), entity.getValue('enablemicrosoftflowintegration'), entity.getValue('ismobileclientondemandsyncenabled'), entity.getValue('isexternalsearchindexenabled'), entity.getValue('microsoftflowenvironment'));
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createFromObjectData = function(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['organizationid']);
    var $v_1 = data['organizationname'];
    var $v_2 = data['fiscalcalendarstart'];
    var $v_3 = data['fiscalperiodformatperiod'];
    var $v_4 = data['fiscalyearformatprefix'];
    var $v_5 = data['fiscalyearformatyear'];
    var $v_6 = data['fiscalyearformatsuffix'];
    var $v_7 = data['fiscalperiodtype'];
    var $v_8 = data['fiscalyeardisplaycode'];
    var $v_9 = data['fiscalperiodconnector'];
    var $v_A = data['issopintegrationenabled'];
    var $v_B = data['languagecode'];
    var $v_C = data['enabledlanguages'];
    var $v_D = data['currencydisplayoption'];
    var $v_E = data['blockedattachments'];
    var $v_F = data['maxuploadfilesize'];
    var $v_G = data['reportscripterrors'];
    var $v_H = data['isAutoSaveEnabled'];
    var $v_I = data['isDuplicateDetectionEnabled'];
    var $v_J = data['isDuplicateDetectionEnabledForOnlineCreateUpdate'];
    var $v_K = data['orgcultureinfolcid'];
    var $v_L = data['fullnameconventioncode'];
    var $v_M = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['basecurrencyid']);
    var $v_N = data['organizationuniquename'];
    var $v_O = data['useskypeprotocol'];
    var $v_P = data['defaultcountrycode'];
    var $v_Q = data['pricingdecimalprecision'];
    var $v_R = data['istelemetryenabled'];
    var $v_S = data['istrialorganization'];
    var $v_T = data['ismocaofflinefeatureenabled'];
    var $v_U = data['mobileOfflineSyncInterval'];
    var $v_V = data['norsyncServerConnectionString'];
    var $v_W = data['overridetrackincrmbehaviour'];
    var $v_X = data['showweeknumber'];
    var $v_Y = data['defaultthemedata'];
    var $v_Z = data['delveurl'];
    var $v_a = data['kmUseExternalPortal'];
    var $v_b = data['kmExternalPortalUrl'];
    var $v_c = data['isParature'];
    var $v_d = data['iskmconfigured'];
    var $v_e = data['maxincidentmergenumber'];
    var $v_f = data['maxchildincidentnumber'];
    var $v_g = data['isconflictdetectionenabledformobileclient'];
    var $v_h = data['enablemicrosoftflowintegration'];
    var $v_i = data['microsoftflowenvironment'];
    var $v_j = data['ismobileclientondemandsyncenabled'];
    var $v_k = data['isexternalsearchindexenabled'];
    var $v_l = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings($v_0, $v_1, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, $v_I, $v_J, $v_K, $v_L, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A, $v_M, $v_N, $v_O, $v_P, $v_Q, $v_R, $v_S, $v_T, $v_U, $v_V, $v_W, $v_X, $v_Y, $v_Z, $v_a, $v_b, $v_c, $v_d, $v_e, $v_f, $v_g, $v_h, $v_j, $v_k, $v_i);
    $v_l.$s_0 = data['webservicecallretrypolicies'];
    return $v_l;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.prototype = {
    $2O_0: null,
    $2P_0: null,
    $4K_0: null,
    $2G_0: 0,
    $39_0: null,
    $1s_0: 0,
    $1o_0: null,
    $2J_0: 5242880,
    $d_0: 0,
    $2Q_0: 0,
    $3V_0: 0,
    $3Q_0: 0,
    $3T_0: 0,
    $23_0: 0,
    $4u_0: 0,
    $3R_0: 0,
    $3S_0: 0,
    $3P_0: null,
    $3e_0: true,
    $3A_0: false,
    $4D_0: null,
    $2B_0: false,
    $2C_0: false,
    $45_0: false,
    $46_0: false,
    $2Y_0: false,
    $43_0: false,
    $1m_0: null,
    $4g_0: false,
    $38_0: null,
    $4M_0: 0,
    $3y_0: false,
    $4E_0: 0,
    $4H_0: null,
    $4L_0: false,
    $37_0: null,
    $s_0: null,
    $4p_0: null,
    $4A_0: false,
    $49_0: null,
    $41_0: false,
    $3t_0: false,
    $4C_0: 0,
    $4B_0: 0,
    $3h_0: false,
    $3x_0: false,
    $4y_0: false,
    
    get_organizationId: function() {
        return this.$2O_0;
    },
    
    get_organizationName: function() {
        return this.$2P_0;
    },
    
    get_delveUrl: function() {
        return this.$4p_0;
    },
    
    get_kmUseExternalPortal: function() {
        return this.$4A_0;
    },
    
    get_kmExternalPortalUrl: function() {
        return this.$49_0;
    },
    
    get_organizationUniqueName: function() {
        return this.$4K_0;
    },
    
    get_languageCode: function() {
        return this.$2G_0;
    },
    
    get_enabledLanguages: function() {
        return this.$39_0;
    },
    
    get_currencyDisplayOption: function() {
        return this.$1s_0;
    },
    
    get_blockedAttachments: function() {
        return this.$1o_0;
    },
    
    get_maxUploadFileSize: function() {
        return this.$2J_0;
    },
    
    get_reportScriptErrors: function() {
        return this.$d_0;
    },
    
    get_orgCultureInfoLcid: function() {
        return this.$2Q_0;
    },
    
    get_fullNameConventionCode: function() {
        return this.$3V_0;
    },
    
    get_fiscalCalendarStart: function() {
        return this.$22_0;
    },
    
    get_isAutoSaveEnabled: function() {
        return this.$3e_0;
    },
    
    get_isDuplicateDetectionEnabled: function() {
        return this.$2B_0;
    },
    
    get_isDuplicateDetectionEnabledForOnlineCreateUpdate: function() {
        return this.$2C_0;
    },
    
    get_isTelemetryEnabled: function() {
        return this.$45_0;
    },
    
    get_isTrialOrganization: function() {
        return this.$46_0;
    },
    
    get_isMocaOfflineFeatureEnabled: function() {
        return this.$3y_0;
    },
    
    get_mobileOfflineSyncInterval: function() {
        return this.$4E_0;
    },
    
    get_norsyncServerConnectionString: function() {
        return this.$4H_0;
    },
    
    get_isSOPIntegrationEnabled: function() {
        return this.$43_0;
    },
    
    get_baseCurrencyId: function() {
        return this.$1m_0;
    },
    
    get_defaultCountryCode: function() {
        return this.$38_0;
    },
    
    get_useSkypeProtocol: function() {
        return this.$4g_0;
    },
    
    get_overrideTrackInCrmBehaviour: function() {
        return this.$4L_0;
    },
    
    get_currentThemeData: function() {
        return this.$37_0;
    },
    
    get_pricingDecimalPrecision: function() {
        return this.$4M_0;
    },
    
    get_showWeekNumber: function() {
        return this.$2Y_0;
    },
    
    get_isParature: function() {
        return this.$41_0;
    },
    
    get_isKMConfigured: function() {
        return this.$3t_0;
    },
    
    get_maxIncidentMergeNumber: function() {
        return this.$4C_0;
    },
    
    get_maxChildIncidentNumber: function() {
        return this.$4B_0;
    },
    
    get_isConflictDetectionEnabledForMobileClient: function() {
        return this.$3h_0;
    },
    
    get_isExternalSearchIndexEnabled: function() {
        return this.$4y_0;
    },
    
    get_enableMicrosoftFlowIntegration: function() {
        return this.$3A_0;
    },
    
    get_microsoftFlowEnvironment: function() {
        return this.$4D_0;
    },
    
    get_isMobileClientOnDemandSyncEnabled: function() {
        return this.$3x_0;
    },
    
    get_webServiceCallRetryPolicies: function() {
        return this.$s_0;
    },
    
    set_webServiceCallRetryPolicies: function(value) {
        this.$s_0 = value;
        return value;
    },
    
    getExternalExposedData: function() {
        var $v_0 = {};
        $v_0['fiscalYearStartDate'] = this.$22_0;
        $v_0['fiscalPeriodFormat'] = this.$3Q_0;
        $v_0['fiscalPeriodType'] = this.$3R_0;
        $v_0['fiscalYearFormatYear'] = this.$23_0;
        $v_0['fiscalYearFormatPrefix'] = this.$3T_0;
        $v_0['fiscalYearFormatSuffix'] = this.$4u_0;
        $v_0['fiscalYearDisplayCode'] = this.$3S_0;
        $v_0['fiscalPeriodConnector'] = this.$3P_0;
        $v_0['showWeekNumber'] = this.$2Y_0;
        return $v_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['organizationid'] = this.$2O_0.getObjectData();
        $v_0['organizationname'] = this.$2P_0;
        $v_0['languagecode'] = this.$2G_0;
        $v_0['enabledlanguages'] = this.$39_0;
        $v_0['currencydisplayoption'] = this.$1s_0;
        $v_0['blockedattachments'] = this.$1o_0;
        $v_0['maxuploadfilesize'] = this.$2J_0;
        $v_0['reportscripterrors'] = this.$d_0;
        $v_0['orgcultureinfolcid'] = this.$2Q_0;
        $v_0['fullnameconventioncode'] = this.$3V_0;
        $v_0['fiscalcalendarstart'] = this.$22_0;
        $v_0['issopintegrationenabled'] = this.$43_0;
        $v_0['basecurrencyid'] = this.$1m_0.getObjectData();
        $v_0['webservicecallretrypolicies'] = this.$s_0;
        $v_0['isAutoSaveEnabled'] = this.$3e_0;
        $v_0['isDuplicateDetectionEnabled'] = this.$2B_0;
        $v_0['isDuplicateDetectionEnabledForOnlineCreateUpdate'] = this.$2C_0;
        $v_0['organizationuniquename'] = this.$4K_0;
        $v_0['useskypeprotocol'] = this.$4g_0;
        $v_0['defaultcountrycode'] = this.$38_0;
        $v_0['pricingdecimalprecision'] = this.$4M_0;
        $v_0['istelemetryenabled'] = this.$45_0;
        $v_0['istrialorganization'] = this.$46_0;
        $v_0['ismocaofflinefeatureenabled'] = this.$3y_0;
        $v_0['mobileOfflineSyncInterval'] = this.$4E_0;
        $v_0['norsyncServerConnectionString'] = this.$4H_0;
        $v_0['overridetrackincrmbehaviour'] = this.$4L_0;
        $v_0['defaultthemedata'] = this.$37_0;
        $v_0['fiscalperiodformatperiod'] = this.$3Q_0;
        $v_0['fiscalyearformatprefix'] = this.$3T_0;
        $v_0['fiscalyearformatyear'] = this.$23_0;
        $v_0['fiscalyearformatsuffix'] = this.$23_0;
        $v_0['fiscalperiodtype'] = this.$3R_0;
        $v_0['fiscalyeardisplaycode'] = this.$3S_0;
        $v_0['fiscalperiodconnector'] = this.$3P_0;
        $v_0['showweeknumber'] = this.$2Y_0;
        $v_0['kmuseexternalportal'] = this.$4A_0;
        $v_0['kmuseexternalportalurl'] = this.$49_0;
        $v_0['isParature'] = this.$41_0;
        $v_0['iskmconfigured'] = this.$3t_0;
        $v_0['maxincidentmergenumber'] = this.$4C_0;
        $v_0['maxchildincidentnumber'] = this.$4B_0;
        $v_0['isconflictdetectionenabledformobileclient'] = this.$3h_0;
        $v_0['enablemicrosoftflowintegration'] = this.$3A_0;
        $v_0['microsoftflowenvironment'] = this.$4D_0;
        $v_0['ismobileclientondemandsyncenabled'] = this.$3x_0;
        return $v_0;
    },
    
    getWebServiceCallRetryPolicy: function(webServiceUrl) {
        if (!this.$s_0) {
            return null;
        }
        for (var $v_0 = 0; $v_0 < this.$s_0.length; $v_0++) {
            var $v_1 = this.$s_0[$v_0];
            if (webServiceUrl.toLowerCase().indexOf($v_1.WebServiceUrl.toLowerCase()) >= 0) {
                return $v_1;
            }
        }
        return null;
    }
}


Xrm.Sdk.QuickFindResult = function(entityName, data, errorCode) {
    this.$2_0 = entityName;
    this.$4n_0 = data;
    this.errorCode = errorCode;
}
Xrm.Sdk.QuickFindResult.prototype = {
    $4n_0: null,
    $2_0: null,
    
    get_entityLogicalName: function() {
        return this.$2_0;
    },
    
    errorCode: 0,
    
    get_data: function() {
        return this.$4n_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult = function(facetValue, facetAttributeType, facetAttributeLogicalName, facetEntityName) {
    this.$3M_0 = facetValue;
    this.$3F_0 = facetAttributeType;
    this.$3E_0 = facetAttributeLogicalName;
    this.$3G_0 = facetEntityName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult.prototype = {
    $z_0: null,
    $3M_0: null,
    $3F_0: 0,
    $3G_0: null,
    $3E_0: null,
    
    get_facetAttributeDisplayName: function() {
        return this.$z_0;
    },
    
    set_facetAttributeDisplayName: function(value) {
        this.$z_0 = value;
        return value;
    },
    
    get_facetValue: function() {
        return this.$3M_0;
    },
    
    set_facetValue: function(value) {
        this.$3M_0 = value;
        return value;
    },
    
    get_facetAttributeType: function() {
        return this.$3F_0;
    },
    
    set_facetAttributeType: function(value) {
        this.$3F_0 = value;
        return value;
    },
    
    get_facetEntityName: function() {
        return this.$3G_0;
    },
    
    set_facetEntityName: function(value) {
        this.$3G_0 = value;
        return value;
    },
    
    get_facetAttributeLogicalName: function() {
        return this.$3E_0;
    },
    
    set_facetAttributeLogicalName: function(value) {
        this.$3E_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TextBasedFacetResult = function(facetValue, count, facetId, facetAttributeType, facetAttributeLogicalName, facetEntityName, facetLookupOTC) {
    Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TextBasedFacetResult.initializeBase(this, [ facetValue, facetAttributeType, facetAttributeLogicalName, facetEntityName ]);
    this.$34_1 = count;
    this.$3H_1 = facetId;
    this.$3J_1 = facetLookupOTC;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TextBasedFacetResult.prototype = {
    $58_1: null,
    $3H_1: null,
    $3J_1: 0,
    $34_1: null,
    
    get_count: function() {
        return this.$34_1;
    },
    
    set_count: function(value) {
        this.$34_1 = value;
        return value;
    },
    
    get_textFacetImage: function() {
        return this.$58_1;
    },
    
    set_textFacetImage: function(value) {
        this.$58_1 = value;
        return value;
    },
    
    get_facetId: function() {
        return this.$3H_1;
    },
    
    set_facetId: function(value) {
        this.$3H_1 = value;
        return value;
    },
    
    get_facetLookUpObjectTypeCode: function() {
        return this.$3J_1;
    },
    
    set_facetLookUpObjectTypeCode: function(value) {
        this.$3J_1 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RangeBasedFacetResult = function(facetValue, facetAttributeType, facetAttributeLogicalName, facetEntityName) {
    Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RangeBasedFacetResult.initializeBase(this, [ facetValue, facetAttributeType, facetAttributeLogicalName, facetEntityName ]);
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultList = function(facetAttributeDisplayName, facetList, facetType, facetResultType, isLocalfacet) {
    this.$z_0 = facetAttributeDisplayName;
    this.$3I_0 = facetList;
    this.$3L_0 = facetType;
    this.$3K_0 = facetResultType;
    this.$3v_0 = isLocalfacet;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultList.prototype = {
    $z_0: null,
    $3I_0: null,
    $3L_0: 0,
    $3K_0: 0,
    $3v_0: false,
    
    get_FacetAttributeDisplayName: function() {
        return this.$z_0;
    },
    
    set_FacetAttributeDisplayName: function(value) {
        this.$z_0 = value;
        return value;
    },
    
    get_FacetList: function() {
        return this.$3I_0;
    },
    
    set_FacetList: function(value) {
        this.$3I_0 = value;
        return value;
    },
    
    get_FacetType: function() {
        return this.$3L_0;
    },
    
    set_FacetType: function(value) {
        this.$3L_0 = value;
        return value;
    },
    
    get_FacetResultType: function() {
        return this.$3K_0;
    },
    
    set_FacetResultType: function(value) {
        this.$3K_0 = value;
        return value;
    },
    
    get_IsLocalFacet: function() {
        return this.$3v_0;
    },
    
    set_IsLocalFacet: function(value) {
        this.$3v_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection = function(entities) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entities, 'entities');
    this.$4T_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IEntityRecordList))(entities);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.createFromEntities = function(entities) {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection(entities);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.prototype = {
    $4T_0: null,
    $4x_0: null,
    $50_0: null,
    $4s_0: null,
    
    get_resultsList: function() {
        return this.$4T_0;
    },
    
    get_count: function() {
        return this.$4T_0.get_Count();
    },
    
    get_hitHighlightInfo: function() {
        return this.$4x_0;
    },
    
    set_hitHighlightInfo: function(value) {
        this.$4x_0 = value;
        return value;
    },
    
    get_localFacets: function() {
        return this.$50_0;
    },
    
    set_localFacets: function(value) {
        this.$50_0 = value;
        return value;
    },
    
    get_facetResultList: function() {
        return this.$4s_0;
    },
    
    set_facetResultList: function(value) {
        this.$4s_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection = function(entityCollections) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(entityCollections, 'entityCollections');
    this.$Q_0 = entityCollections;
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery))();
    for (var $$arr_2 = this.$Q_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0.add(($v_1.get_value()).$p_0);
    }
    this.$54_0 = $v_0.toArray();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.createFromObjectData = function(data) {
    var $v_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection)))();
    var $v_1 = data['entitycollections'];
    for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        var $v_3 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.createFromObjectData($v_2['key']);
        var $v_4 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromObjectData($v_2['value']);
        $v_0.add(new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))($v_3, $v_4));
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection($v_0.toArray());
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.prototype = {
    $Q_0: null,
    $54_0: null,
    
    get_entityCollections: function() {
        return this.$Q_0;
    },
    
    get_relatedEntityQueries: function() {
        return this.$54_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        var $v_1 = [];
        for (var $$arr_2 = this.$Q_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            var $v_3 = {};
            $v_3['key'] = $v_2.get_key().getObjectData();
            $v_3['value'] = $v_2.get_value().getObjectData();
            Array.add($v_1, $v_3);
        }
        $v_0['entitycollections'] = $v_1;
        return $v_0;
    },
    
    getByRelationship: function(index) {
        for (var $$arr_1 = this.$Q_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_key().equals(index)) {
                return $v_0.get_value();
            }
        }
        return null;
    },
    
    getByRelationshipName: function(relationshipName) {
        for (var $$arr_1 = this.$Q_0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_key().$1d_0 === relationshipName) {
                return $v_0.get_value();
            }
        }
        return null;
    },
    
    addRelationship: function(index, value) {
        for (var $v_0 = 0; $v_0 < this.$Q_0.length; $v_0++) {
            if (this.$Q_0[$v_0].get_key().equals(index)) {
                this.$Q_0[$v_0] = new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))(index, value);
                return;
            }
        }
        Array.add(this.$Q_0, new (Microsoft.Crm.Client.Core.Framework.KeyValuePair$2.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection))(index, value));
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship = function(schemaName, primaryEntityRole) {
    this.$1d_0 = schemaName;
    this.$1a_0 = (_Script.isNullOrUndefined(primaryEntityRole)) ? -1 : primaryEntityRole;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.createFromObjectData = function(data) {
    var $v_0 = data['role'];
    var $v_1 = data['schemaname'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_1, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.prototype = {
    $1d_0: null,
    $1a_0: 0,
    
    get_schemaName: function() {
        return this.$1d_0;
    },
    
    get_primaryEntityRole: function() {
        return this.$1a_0;
    },
    
    set_primaryEntityRole: function(value) {
        this.$1a_0 = value;
        return value;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['schemaname'] = this.$1d_0;
        $v_0['role'] = this.$1a_0;
        return $v_0;
    },
    
    toString: function() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRole.toString(this.$1a_0) + ',' + this.$1d_0;
    },
    
    equals: function(other) {
        return !_Script.isNullOrUndefined(other) && other.toString() === this.toString();
    }
}


Xrm.Gen.ResourceInfo = function(id, displayName, entityName) {
    this.$2l_0 = id;
    this.$2g_0 = displayName;
    this.$2h_0 = entityName;
}
Xrm.Gen.ResourceInfo.prototype = {
    $2l_0: null,
    
    get_id: function() {
        return this.$2l_0;
    },
    
    set_id: function(value) {
        this.$2l_0 = value;
        return value;
    },
    
    $2g_0: null,
    
    get_displayName: function() {
        return this.$2g_0;
    },
    
    set_displayName: function(value) {
        this.$2g_0 = value;
        return value;
    },
    
    $2h_0: null,
    
    get_entityName: function() {
        return this.$2h_0;
    },
    
    set_entityName: function(value) {
        this.$2h_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege = function(privilegeId, businessUnitId, depth) {
    this.$1z_0 = depth;
    this.$J_0 = privilegeId;
    this.$2z_0 = businessUnitId;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.createFromObjectData = function(data) {
    var $v_0 = data['depth'];
    var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['privilegeid']);
    var $v_2 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['businessunitid']);
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege($v_1, $v_2, $v_0);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.prototype = {
    $1z_0: 0,
    $J_0: null,
    $2z_0: null,
    
    get_depth: function() {
        return this.$1z_0;
    },
    
    get_privilegeId: function() {
        return this.$J_0;
    },
    
    get_businessUnitId: function() {
        return this.$2z_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['depth'] = this.$1z_0;
        $v_0['privilegeid'] = this.$J_0.getObjectData();
        $v_0['businessunitid'] = this.$2z_0.getObjectData();
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata = function(name, privilegeId, privilegeType, canBeBasic, canBeLocal, canBeDeep, canBeGlobal) {
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(name, 'name');
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnNullOrUndefinedArgument(privilegeId, 'privilegeId');
    this.$4F_0 = name;
    this.$J_0 = privilegeId;
    this.$2U_0 = privilegeType;
    this.$30_0 = canBeBasic;
    this.$33_0 = canBeLocal;
    this.$31_0 = canBeDeep;
    this.$32_0 = canBeGlobal;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey = function(privilegeType) {
    return (privilegeType).toString();
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.createFromObjectData = function(data) {
    var $v_0 = data['name'];
    var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['privilegeid']);
    var $v_2 = data['privilegetype'];
    var $v_3 = data['canbebasic'];
    var $v_4 = data['canbelocal'];
    var $v_5 = data['canbedeep'];
    var $v_6 = data['canbeglobal'];
    var $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6);
    return $v_7;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.prototype = {
    $4F_0: null,
    $J_0: null,
    $2U_0: 0,
    $30_0: false,
    $33_0: false,
    $31_0: false,
    $32_0: false,
    
    get_name: function() {
        return this.$4F_0;
    },
    
    get_privilegeId: function() {
        return this.$J_0;
    },
    
    get_privilegeType: function() {
        return this.$2U_0;
    },
    
    get_privilegeTypeKey: function() {
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey(this.$2U_0);
    },
    
    get_canBeBasic: function() {
        return this.$30_0;
    },
    
    get_canBeLocal: function() {
        return this.$33_0;
    },
    
    get_canBeDeep: function() {
        return this.$31_0;
    },
    
    get_canBeGlobal: function() {
        return this.$32_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['name'] = this.$4F_0;
        $v_0['privilegeid'] = this.$J_0.getObjectData();
        $v_0['privilegetype'] = this.$2U_0;
        $v_0['canbebasic'] = this.$30_0;
        $v_0['canbelocal'] = this.$33_0;
        $v_0['canbedeep'] = this.$31_0;
        $v_0['canbeglobal'] = this.$32_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext = function(serverVersion, databaseVersion) {
    this.$2X_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(serverVersion)) ? serverVersion : '';
    this.$1u_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(databaseVersion)) ? databaseVersion : '';
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.createFromObjectData = function(data) {
    var $v_0 = data['serverversion'];
    var $v_1 = data['databaseversion'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext($v_0, $v_1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.prototype = {
    $2X_0: null,
    $1u_0: null,
    
    get_serverVersion: function() {
        return this.$2X_0;
    },
    
    get_databaseVersion: function() {
        return this.$1u_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['serverversion'] = this.$2X_0;
        $v_0['databaseversion'] = this.$1u_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord = function(key, stateData) {
    this.$48_0 = key;
    this.$4Y_0 = stateData;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.createFromObjectData = function(data) {
    var $v_0 = data['statekey'];
    var $v_1 = data['statedata'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord($v_0, $v_1);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.prototype = {
    $48_0: null,
    $4Y_0: null,
    
    get_stateData: function() {
        return this.$4Y_0;
    },
    
    get_key: function() {
        return this.$48_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['statekey'] = this.$48_0;
        $v_0['statedata'] = this.$4Y_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition = function(bias, timeZoneCode, userInterfaceName) {
    this.$2y_0 = bias;
    this.$4Z_0 = timeZoneCode;
    this.$4e_0 = userInterfaceName;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.createFromObjectData = function(data) {
    var $v_0 = data['bias'];
    var $v_1 = data['timezonecode'];
    var $v_2 = data['userinterfacename'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition($v_0, $v_1, $v_2);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.prototype = {
    $2y_0: 0,
    $4Z_0: 0,
    $4e_0: null,
    
    get_bias: function() {
        return this.$2y_0;
    },
    
    get_timeZoneCode: function() {
        return this.$4Z_0;
    },
    
    get_userInterfaceName: function() {
        return this.$4e_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['bias'] = this.$2y_0;
        $v_0['timezonecode'] = this.$4Z_0;
        $v_0['userinterfacename'] = this.$4e_0;
        return $v_0;
    }
}


Xrm.Gen.TraceInfo = function(errorInfoList) {
    this.$2j_0 = errorInfoList;
}
Xrm.Gen.TraceInfo.prototype = {
    $2j_0: null,
    
    get_errorInfoList: function() {
        return this.$2j_0;
    },
    
    set_errorInfoList: function(value) {
        this.$2j_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency = function(transactionCurrencyId, currencyName, currencySymbol, currencyCode, currencyPrecision) {
    this.$W_0 = transactionCurrencyId;
    this.$35_0 = currencyName;
    this.$1t_0 = currencySymbol;
    this.$1r_0 = currencyCode;
    this.$36_0 = currencyPrecision;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.createFromObjectData = function(data) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['transactioncurrencyid']);
    var $v_1 = data['currencyname'];
    var $v_2 = data['currencysymbol'];
    var $v_3 = data['currencycode'];
    var $v_4 = data['currencyprecision'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency($v_0, $v_1, $v_2, $v_3, $v_4);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.prototype = {
    $W_0: null,
    $35_0: null,
    $1t_0: null,
    $1r_0: null,
    $36_0: 0,
    
    get_transactionCurrencyId: function() {
        return this.$W_0;
    },
    
    get_currencyName: function() {
        return this.$35_0;
    },
    
    get_currencySymbol: function() {
        return this.$1t_0;
    },
    
    get_currencyCode: function() {
        return this.$1r_0;
    },
    
    get_currencyPrecision: function() {
        return this.$36_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['transactioncurrencyid'] = this.$W_0.getObjectData();
        $v_0['currencyname'] = this.$35_0;
        $v_0['currencysymbol'] = this.$1t_0;
        $v_0['currencycode'] = this.$1r_0;
        $v_0['currencyprecision'] = this.$36_0;
        return $v_0;
    },
    
    getCurrencyDisplaySymbol: function(currencyDisplayOption) {
        return (currencyDisplayOption === 1) ? this.$1r_0 : this.$1t_0;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings = function(languageId, userCultureLcid, formatInfoCultureName, numberFormatInfo, dateTimeFormatInfo, timeZoneUtcOffsetMinutes, adjusters, recordsPerPage, reportScriptErrors, isGuidedHelpEnabled, showCalendarWeeks, defaultSearchExperience) {
    this.$2H_0 = -1;
    this.$1f_0 = -1;
    this.$4R_0 = -1;
    this.$2b_0 = [];
    this.$2H_0 = languageId;
    this.$1f_0 = userCultureLcid;
    this.$3o_0 = !_Script.isNullOrUndefined(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.$4t) && Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.$4t.contains(userCultureLcid);
    this.$3U_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(formatInfoCultureName)) ? formatInfoCultureName : '';
    this.$2N_0 = (!_Script.isNullOrUndefined(numberFormatInfo)) ? numberFormatInfo : {};
    this.$1v_0 = (!_Script.isNullOrUndefined(dateTimeFormatInfo)) ? dateTimeFormatInfo : {};
    this.$2c_0 = timeZoneUtcOffsetMinutes;
    this.$2b_0 = (!_Script.isNullOrUndefined(adjusters)) ? adjusters : new Array(0);
    this.$4R_0 = recordsPerPage;
    this.$d_0 = reportScriptErrors;
    this.$3p_0 = isGuidedHelpEnabled;
    this.$4W_0 = showCalendarWeeks;
    this.$1x_0 = defaultSearchExperience;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.createFromObjectData = function(data) {
    var $v_0 = data['languageid'];
    var $v_1 = data['userculturelcid'];
    var $v_2 = data['formatinfoculturename'];
    var $v_3 = data['numberformatinfo'];
    var $v_4 = data['datetimeformatinfo'];
    var $v_5 = data['timezoneutcoffsetminutes'];
    var $v_6 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster))();
    for (var $$arr_8 = data['timezoneadjusters'], $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
        var $v_C = $$arr_8[$$idx_A];
        var $v_D = Microsoft.Crm.Client.Core.Framework.TimeZoneAdjuster.createFromObjectData($v_C);
        $v_6.add($v_D);
    }
    var $v_7 = data['recordsperpage'];
    var $v_8 = data['reportscripterrors'];
    var $v_9 = data['isguidedhelpenabled'];
    var $v_A = data['showcalendarweeks'];
    var $v_B = data['defaultsearchexperience'];
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6.toArray(), $v_7, $v_8, $v_9, $v_A, $v_B);
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.prototype = {
    $3o_0: false,
    $3U_0: null,
    $2N_0: null,
    $1v_0: null,
    $d_0: 0,
    $2c_0: 0,
    $3p_0: true,
    $4W_0: false,
    $1x_0: 0,
    
    get_languageId: function() {
        return this.$2H_0;
    },
    
    get_userCultureLcid: function() {
        return this.$1f_0;
    },
    
    get_IsFarEastLanguage: function() {
        return this.$3o_0;
    },
    
    get_formatInfoCultureName: function() {
        return this.$3U_0;
    },
    
    get_numberFormatInfo: function() {
        return this.$2N_0;
    },
    
    get_dateTimeFormatInfo: function() {
        return this.$1v_0;
    },
    
    get_timeZoneUtcOffsetMinutes: function() {
        return this.$2c_0;
    },
    
    get_timeZoneAdjusters: function() {
        return this.$2b_0;
    },
    
    get_recordsPerPage: function() {
        return this.$4R_0;
    },
    
    get_reportScriptErrors: function() {
        return this.$d_0;
    },
    
    get_IsGuidedHelpEnabled: function() {
        return this.$3p_0;
    },
    
    get_showCalendarWeeks: function() {
        return this.$4W_0;
    },
    
    get_defaultSearchExperience: function() {
        return this.$1x_0;
    },
    
    getExternalDateFormatData: function() {
        var $v_0 = {};
        var $$dict_2 = this.$1v_0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0[$v_1.key] = $v_1.value;
        }
        return $v_0;
    },
    
    getExternalNumberFormatData: function() {
        var $v_0 = {};
        var $$dict_2 = this.$2N_0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0[$v_1.key] = $v_1.value;
        }
        return $v_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['languageid'] = this.$2H_0;
        $v_0['userculturelcid'] = this.$1f_0;
        $v_0['formatinfoculturename'] = this.$3U_0;
        $v_0['numberformatinfo'] = this.$2N_0;
        $v_0['datetimeformatinfo'] = this.$1v_0;
        $v_0['timezoneutcoffsetminutes'] = this.$2c_0;
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_2 = this.$2b_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            $v_1.add($v_2.getObjectData());
        }
        $v_0['timezoneadjusters'] = $v_1.toArray();
        $v_0['recordsperpage'] = this.$4R_0;
        $v_0['reportscripterrors'] = this.$d_0;
        $v_0['isguidedhelpenabled'] = this.$3p_0;
        $v_0['showcalendarweeks'] = this.$4W_0;
        $v_0['defaultsearchexperience'] = this.$1x_0;
        return $v_0;
    }
}


Xrm.Gen.ValidationResult = function(validationSuccess, traceInfo, activityId) {
    this.$2v_0 = validationSuccess;
    this.$2u_0 = traceInfo;
    this.$2d_0 = activityId;
}
Xrm.Gen.ValidationResult.prototype = {
    $2v_0: false,
    
    get_validationSuccess: function() {
        return this.$2v_0;
    },
    
    set_validationSuccess: function(value) {
        this.$2v_0 = value;
        return value;
    },
    
    $2u_0: null,
    
    get_traceInfo: function() {
        return this.$2u_0;
    },
    
    set_traceInfo: function(value) {
        this.$2u_0 = value;
        return value;
    },
    
    $2d_0: null,
    
    get_activityId: function() {
        return this.$2d_0;
    },
    
    set_activityId: function(value) {
        this.$2d_0 = value;
        return value;
    }
}


Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess = function(principal, accessMask) {
    this.$53_0 = principal;
    this.$4j_0 = accessMask;
}
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess.prototype = {
    $53_0: null,
    $4j_0: 0,
    
    get_principal: function() {
        return this.$53_0;
    },
    
    get_accessMask: function() {
        return this.$4j_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Framework');

Microsoft.Crm.Client.Core.Framework.ICollection = function() {}
Microsoft.Crm.Client.Core.Framework.ICollection.registerInterface('Microsoft.Crm.Client.Core.Framework.ICollection');


Microsoft.Crm.Client.Core.Framework.PrivilegeDepth = function() {}
Microsoft.Crm.Client.Core.Framework.PrivilegeDepth.prototype = {
    none: -1, 
    basic: 0, 
    local: 1, 
    deep: 2, 
    global: 3
}
Microsoft.Crm.Client.Core.Framework.PrivilegeDepth.registerEnum('Microsoft.Crm.Client.Core.Framework.PrivilegeDepth', false);


Type.registerNamespace('Microsoft.Crm.Client.Core.Models.CustomControls');

Microsoft.Crm.Client.Core.Models.CustomControls.ICustomControlFieldAccessHelper = function() {}
Microsoft.Crm.Client.Core.Models.CustomControls.ICustomControlFieldAccessHelper.registerInterface('Microsoft.Crm.Client.Core.Models.CustomControls.ICustomControlFieldAccessHelper');


Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper = function() {
    this.$3O_0 = {};
    this.$10_0 = {};
    this.$f_0 = {};
    this.$l_0 = {};
    this.$1h_0 = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult))();
}
Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.$5N = function($p0, $p1) {
    if ((('sourcetype') in $p0.get_attributes())) {
        var $v_0 = $p0.get_attributes()['sourcetype'];
        if ($v_0 === 1 || $v_0 === 2) {
            $p1.resolve(false);
        }
    }
}
Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.$5e = function($p0) {
    switch ($p0) {
        case 'fullname':
        case 'yomifullname':
        case 'address1_composite':
        case 'address2_composite':
        case 'address3_composite':
        case 'shipto_composite':
        case 'billto_composite':
            return true;
        default:
            return false;
    }
}
Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.prototype = {
    $4d_0: false,
    
    get_fieldErrorMessages: function() {
        return this.$l_0;
    },
    
    setFieldErrorMessage: function(columnName, message) {
        this.$l_0[columnName] = message;
    },
    
    clearFieldErrorMessage: function(columnName) {
        if (((columnName) in this.$l_0)) {
            delete this.$l_0[columnName];
        }
    },
    
    setValidatorResult: function(columnName, isValid, validatedValue, errorMessage) {
        this.$1h_0.set_item(columnName, new Microsoft.Crm.Client.Core.Models.Validation.ValidatorResult(isValid, validatedValue, errorMessage));
    },
    
    setFieldEditableProperty: function(columnName, isEditable) {
        if (((columnName) in this.$f_0)) {
            this.$f_0[columnName] = isEditable;
        }
    },
    
    getFieldEditableProperty: function(columnName) {
        var $v_0 = false;
        if (((columnName) in this.$f_0)) {
            $v_0 = this.$f_0[columnName];
        }
        return $v_0;
    },
    
    isValid: function(columnName) {
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(this.$l_0[columnName])) {
            return false;
        }
        else if (this.$1h_0.containsKey(columnName)) {
            return this.$1h_0.get_item(columnName).get_isValueValid();
        }
        return true;
    },
    
    getNotification: function(columnName) {
        if (((columnName) in this.$l_0)) {
            return this.$l_0[columnName];
        }
        else if (this.$1h_0.containsKey(columnName)) {
            return this.$1h_0.get_item(columnName).get_errorMessage();
        }
        return null;
    },
    
    isEditable: function(column) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $v_1 = column.get_name();
        var $v_2 = (!_Script.isNullOrUndefined(column.get_attributes()['type'])) ? (column.get_attributes()['type']).toLowerCase() : null;
        var $v_3 = (!_Script.isNullOrUndefined(column.get_dataType())) ? column.get_dataType().toLowerCase() : null;
        if (_Script.isNullOrUndefined(column)) {
            $v_0.reject(Microsoft.Crm.Client.Core.Framework.ErrorStatus.fromMessage('Invalid argument: column'));
        }
        else if (this.get_isPreview() || $v_1.toLowerCase() === 'statecode' || $v_1.toLowerCase() === 'statuscode' || this.isHiddenColumn(column)) {
            $v_0.resolve(false);
        }
        else if (($v_2 === 'lookup' && $v_3 !== 'lookup.simple') || $v_2 === 'owner' || $v_2 === 'partylist' || $v_2 === 'customer') {
            $v_0.resolve(false);
        }
        else if (Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.$5e($v_1.toLowerCase())) {
            $v_0.resolve(false);
        }
        else if (!this.get_isServerAvailable()) {
            $v_0.resolve(this.canWriteOffline($v_1));
        }
        else if (Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn($v_1)) {
            $v_0.resolve(false);
        }
        if (!Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.isPending(Boolean, Object, $v_0)) {
            return $v_0.promise();
        }
        var $$t_6 = this, $$t_7 = this;
        this.getColumnAttributes(column).then(function() {
            $$t_6.$5O_0(column, $v_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    isSecured: function(columnName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $$t_4 = this, $$t_5 = this;
        this.$55_0(columnName).then(function($p1_0) {
            $v_0.resolve($p1_0.get_isSecured());
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    isReadable: function(columnName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $$t_4 = this, $$t_5 = this;
        this.$55_0(columnName).then(function($p1_0) {
            $v_0.resolve($p1_0.get_isReadable());
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    setFieldRequiredLevel: function(columnName, requiredLevel) {
        if (((columnName) in this.$10_0)) {
            this.$10_0[columnName] = requiredLevel;
        }
    },
    
    retrieveFieldRequiredLevel: function(columnName) {
        var $v_0 = 0;
        if (((columnName) in this.$10_0)) {
            $v_0 = this.$10_0[columnName];
        }
        return $v_0;
    },
    
    getFieldRequiredLevel: function(columnName) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.ValueRequiredLevel, Microsoft.Crm.Client.Core.Framework.ErrorStatus);
        if (Microsoft.Crm.Client.Core.Framework.CustomControlUtils.isLinkedEntityColumn(columnName)) {
            $v_0.resolve(0);
            return $v_0.promise();
        }
        var $v_1 = this.$10_0[columnName];
        if (!_Script.isNullOrUndefined($v_1) && $v_1 !== -1) {
            $v_0.resolve($v_1);
            return $v_0.promise();
        }
        var $$t_5 = this, $$t_6 = this;
        this.internalGetFieldRequiredLevel(columnName).then(function($p1_0) {
            $$t_5.$10_0[columnName] = $p1_0;
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $5O_0: function($p0, $p1) {
        Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.$5N($p0, $p1);
        if (!Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.isPending(Boolean, Object, $p1)) {
            return;
        }
        var $$t_4 = this, $$t_5 = this;
        this.isRecordDisabled().then(function($p1_0) {
            if ($p1_0) {
                $p1.resolve(false);
                return;
            }
            $$t_4.$5M_0($p0.get_name(), $p1);
        }, function($p1_0) {
            $p1.reject($p1_0);
        });
    },
    
    $5M_0: function($p0, $p1) {
        var $v_0 = this.$f_0[$p0];
        if (!_Script.isNullOrUndefined($v_0)) {
            $p1.resolve($v_0);
            return;
        }
        var $v_1 = [ this.$55_0($p0), this.$5L_0($p0) ];
        var $$t_8 = this, $$t_9 = this;
        Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray($v_1).then(function($p1_0) {
            var $v_2 = $$t_8.$3O_0[$p0];
            var $v_3 = $v_2.get_isEditable();
            if ((($p0) in $$t_8.$f_0)) {
                $v_3 = $$t_8.$f_0[$p0];
            }
            else if ($$t_8.$4d_0) {
                $$t_8.$f_0[$p0] = $v_3;
            }
            $p1.resolve($v_3 && $$t_8.$4d_0);
        }, function($p1_0) {
            $p1.reject($p1_0);
        });
    },
    
    $5L_0: function($p0) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Boolean, Object);
        var $$t_4 = this, $$t_5 = this;
        this.isOperationEnabledOnModel(2).done(function($p1_0) {
            $$t_4.$4d_0 = $p1_0;
            $v_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $55_0: function($p0) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess, Object);
        var $v_1 = this.$3O_0[$p0];
        if (!_Script.isNullOrUndefined($v_1) && !$v_1.get_isSecured()) {
            return $v_0.resolve($v_1);
        }
        var $$t_5 = this, $$t_6 = this;
        this.getFieldAccessLevelsForOperation($p0, 2).then(function($p1_0) {
            $$t_5.$3O_0[$p0] = $p1_0 || Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.get_openAccess();
            $v_0.resolve($p1_0);
        }, function($p1_0) {
            $$t_6.logError(1033, String.format('Could not retrieve field access rules for field {0}: {1}', $p0, JSON.stringify($p1_0)));
            $v_0.reject($p1_0);
        });
        return $v_0;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.DataApi');

Microsoft.Crm.Client.Core.Storage.DataApi.IMetadataCache = function() {}
Microsoft.Crm.Client.Core.Storage.DataApi.IMetadataCache.registerInterface('Microsoft.Crm.Client.Core.Storage.DataApi.IMetadataCache');


Xrm.Sdk.Request = function() {}


Xrm.Sdk.Response = function() {}


Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails = function(featureName, featureControlBitName, value) {
    this.$1O_0 = featureName;
    this.$3N_0 = featureControlBitName;
    this.$4i_0 = value;
}
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.createFromObjectData = function(data) {
    var $v_0 = data['featurename'];
    var $v_1 = data['featurecontrolbitname'];
    var $v_2 = data['value'];
    return new Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails($v_0, $v_1, $v_2);
}
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.prototype = {
    $1O_0: null,
    $3N_0: null,
    $4i_0: false,
    
    get_featureName: function() {
        return this.$1O_0;
    },
    
    get_featureControlBitName: function() {
        return this.$3N_0;
    },
    
    get_value: function() {
        return this.$4i_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['featurename'] = this.$1O_0;
        $v_0['featurecontrolbitname'] = this.$3N_0;
        $v_0['value'] = this.$4i_0;
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery = function(outerQuery, subQueries) {
    Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.initializeBase(this, [ outerQuery.get_fetchXml() ]);
    this.$2a_1 = subQueries;
}
Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.prototype = {
    $2a_1: null,
    
    get_outerQuery: function() {
        return this;
    },
    
    get_subQueries: function() {
        return this.$2a_1;
    },
    
    get_id: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.get_id.call(this);
        var $$dict_2 = this.$2a_1.toDictionary();
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0 += ',' + $v_1.key + ':' + ($v_1.value).get_id();
        }
        return $v_0;
    },
    
    toString: function() {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString.call(this);
        var $$dict_2 = this.$2a_1.toDictionary();
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0 += ',' + $v_1.key + ':' + ($v_1.value).toString();
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery = function(entityLogicalName, attributeNames) {
    this.$5j_0(entityLogicalName, attributeNames);
}
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.prototype = {
    $2_0: null,
    $T_0: null,
    
    get_entityLogicalName: function() {
        return this.$2_0;
    },
    
    get_validAttributeRegExp: function() {
        if (!Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$4h) {
            Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$4h = new RegExp('^[A-Za-z]+[A-Za-z0-9_]*$');
        }
        return Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$4h;
    },
    
    get_attributeNames: function() {
        return this.$T_0;
    },
    
    toString: function() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append(this.$2_0);
        if (!_Script.isNullOrUndefined(this.$T_0)) {
            $v_0.append(' : ');
            $v_0.append(this.$T_0.join(', '));
        }
        return $v_0.toString();
    },
    
    $5j_0: function($p0, $p1) {
        this.$2_0 = $p0;
        if (Microsoft.Crm.Client.Core.Storage.Common.AllColumns.isInstanceOfType($p1)) {
            this.$T_0 = null;
        }
        else if (Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.isInstanceOfType($p1)) {
            this.$T_0 = ($p1).$6_0;
        }
        else {
            this.$T_0 = $p1;
        }
        if (!_Script.isNullOrUndefined(this.$T_0)) {
            for (var $v_0 = 0; $v_0 < this.$T_0.length; $v_0++) {
                var $v_1 = this.get_validAttributeRegExp().test(this.$T_0[$v_0]);
                if (!$v_1) {
                    throw Error.argument(this.$T_0[$v_0], 'Invalid attribute name');
                }
            }
        }
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery = function(descriptorData, sourceId) {
    Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.initializeBase(this, [ descriptorData ]);
    this.$4X_1 = sourceId;
}
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.get_empty = function() {
    return new Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery('', '');
}
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.prototype = {
    $4X_1: null,
    
    get_key: function() {
        var $v_0;
        var $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(this.$4X_1);
        if (!$v_1.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())) {
            $v_0 = $v_1.toString();
        }
        else {
            $v_0 = this.$4X_1;
        }
        return this.$2_0 + ',' + $v_0 + ',' + this.$4V_0;
    },
    
    generateNorSyncAttributeName: function(entityName, attributeName, attributeValue) {
        return attributeName;
    },
    
    get_id: function() {
        return this.get_key();
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.Query = function(descriptorData) {
    if (!_Script.isNullOrUndefined(descriptorData)) {
        this.$5Q_0(descriptorData);
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.Query.get_empty = function() {
    return new Microsoft.Crm.Client.Core.Storage.DataApi.Query('');
}
Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype = {
    $3_0: null,
    $B_0: null,
    $c_0: '',
    $4G_0: false,
    $b_0: 1,
    $18_0: 1,
    $2_0: null,
    $56_0: null,
    $4z_0: false,
    $4V_0: false,
    
    get_columnSet: function() {
        return this.$3_0;
    },
    
    set_columnSet: function(value) {
        this.$3_0 = value;
        return value;
    },
    
    get_descriptorSet: function() {
        return this.$B_0;
    },
    
    set_descriptorSet: function(value) {
        this.$B_0 = value;
        return value;
    },
    
    get_fetchXml: function() {
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.get_rawFetchXml()) || this.get_rawFetchXml().substr(0, 1) !== '<') {
            return this.get_rawFetchXml();
        }
        var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(this.get_rawFetchXml());
        if (_Script.isNullOrUndefined($v_0) || _Script.isNullOrUndefined($v_0.firstChild) || $v_0.firstChild.nodeName !== 'fetch') {
            return this.get_rawFetchXml();
        }
        if (_Script.isNullOrUndefined($v_0.firstChild.attributes.getNamedItem('returntotalrecordcount'))) {
            $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'returntotalrecordcount', 'true'));
        }
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'page', this.$b_0.toString()));
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'count', this.$18_0.toString()));
        $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'no-lock', this.$4G_0.toString()));
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.$c_0)) {
            $v_0.firstChild.attributes.setNamedItem(Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNode.createAttribute($v_0, 'paging-cookie', this.$c_0));
        }
        return Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0).get_outerXml();
    },
    
    set_fetchXml: function(value) {
        this.set_rawFetchXml(value);
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(this.get_rawFetchXml()) && this.get_rawFetchXml().substr(0, 1) === '<') {
            var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.parseXmlDocument(this.get_rawFetchXml());
            if (!_Script.isNullOrUndefined($v_0)) {
                var $v_1 = Microsoft.Crm.Client.Core.Storage.Common.Xml.XmlNodeFactory.create($v_0);
                var $v_2 = $v_1.selectSingleNode('/fetch');
                var $v_3 = $v_2.getAttribute('page');
                if (!_Script.isNullOrUndefined($v_3)) {
                    this.set_pageNumber(Number.parseInvariant($v_3));
                }
                $v_3 = $v_2.getAttribute('count');
                if (!_Script.isNullOrUndefined($v_3)) {
                    this.$18_0 = Number.parseInvariant($v_3);
                }
                $v_3 = $v_2.getAttribute('paging-cookie');
                if (!_Script.isNullOrUndefined($v_3)) {
                    this.set_pagingCookie($v_3);
                }
                var $v_4 = $v_1.selectSingleNode('/fetch/entity');
                if (!_Script.isNullOrUndefined($v_4)) {
                    this.$2_0 = $v_4.getAttribute('name');
                }
                if (!_Script.isNullOrUndefined($v_1.selectSingleNode('/fetch/entity/all-attributes'))) {
                    this.$3_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
                }
                else {
                    var $v_6 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                    var $v_7 = $v_1.selectNodes('/fetch/entity/attribute');
                    for (var $v_8 = 0; $v_8 < $v_7.get_count(); $v_8++) {
                        $v_6.add($v_7.get_item($v_8).getAttribute('name'));
                    }
                    this.$3_0 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_6.toArray());
                }
                var $v_5 = $v_0.firstChild.attributes.getNamedItem('returntotalrecordcount');
                this.$4V_0 = (!_Script.isNullOrUndefined($v_5)) ? Boolean.parse($v_5.nodeValue) : true;
            }
        }
        else {
            this.$3_0 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(new Array(0));
        }
        return value;
    },
    
    get_sql: function() {
        var $v_0 = this.$B_0.tryGetDescriptor(2);
        if (!Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_0)) {
            var $v_1 = 1 + this.$18_0;
            var $v_2 = this.$18_0 * (this.$b_0 - 1);
            $v_0 = $v_0 + ' LIMIT ' + $v_1 + ' OFFSET ' + $v_2;
        }
        return $v_0;
    },
    
    get_pageNumber: function() {
        return this.$b_0;
    },
    
    set_pageNumber: function(value) {
        if (value < 1) {
            throw Error.argumentOutOfRange('value', value, 'PageNumber cannot be less than 1');
        }
        this.$b_0 = value;
        return value;
    },
    
    get_noLock: function() {
        return this.$4G_0;
    },
    
    set_noLock: function(value) {
        this.$4G_0 = value;
        return value;
    },
    
    get_pageSize: function() {
        return this.$18_0;
    },
    
    set_pageSize: function(value) {
        this.$18_0 = value;
        return value;
    },
    
    get_pagingCookie: function() {
        return this.$c_0;
    },
    
    set_pagingCookie: function(value) {
        if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(value)) {
            this.$c_0 = '';
        }
        this.$c_0 = value;
        return value;
    },
    
    get_entityLogicalName: function() {
        return this.$2_0;
    },
    
    set_entityLogicalName: function(value) {
        this.$2_0 = value;
        return value;
    },
    
    get_searchString: function() {
        return this.$56_0;
    },
    
    set_searchString: function(value) {
        this.$56_0 = value;
        return value;
    },
    
    get_isQuickFindSearch: function() {
        return this.$4z_0;
    },
    
    set_isQuickFindSearch: function(value) {
        this.$4z_0 = value;
        return value;
    },
    
    get_returnTotalRecordCount: function() {
        return this.$4V_0;
    },
    
    get_id: function() {
        return this.get_rawFetchXml();
    },
    
    get_rawSql: function() {
        return this.$B_0.tryGetDescriptor(2);
    },
    
    set_rawSql: function(value) {
        if (!_Script.isNullOrUndefined(this.$B_0)) {
            this.$B_0.updateDescriptorSet(2, value);
        }
        return value;
    },
    
    get_rawFetchXml: function() {
        return this.$B_0.tryGetDescriptor(1);
    },
    
    set_rawFetchXml: function(value) {
        this.$5i_0(value);
        return value;
    },
    
    $5i_0: function($p0) {
        if (!_Script.isNullOrUndefined(this.$B_0)) {
            this.$B_0.updateDescriptorSet(1, $p0);
        }
        else {
            this.$B_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.createFromFetchXml($p0);
        }
    },
    
    $5Q_0: function($p0) {
        if (Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.isInstanceOfType($p0)) {
            this.$B_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet();
            for (var $$arr_1 = ($p0).$9_0.get_keys(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_0 = $$arr_1[$$idx_3];
                var $v_1 = ($p0).$9_0.get_item($v_0);
                this.$B_0.$9_0.set_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorFormat.toString($v_1.Format), new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData($v_1.Format, $v_1.Data));
                if ($v_1.Format === 1) {
                    this.set_fetchXml($v_1.Data);
                }
            }
        }
        else {
            this.set_fetchXml($p0.toString());
            this.$B_0 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.createFromFetchXml($p0.toString());
        }
    },
    
    toString: function() {
        return String.format('Query: {0}', this.get_rawFetchXml());
    },
    
    updateSqlWithWhereClauseFromRelationshipCondition: function(entityName, sql, extraConditionXml) {
        var $v_0 = new Sys.StringBuilder(sql);
        var $v_1 = extraConditionXml.getElementsByTagName('condition')[0];
        var $v_2 = extraConditionXml.getElementsByTagName('filter')[0];
        var $v_3 = '\"' + entityName + '0\"';
        var $v_4 = this.$R_0($v_1, 'value');
        var $v_5 = this.$R_0($v_1, 'attribute');
        var $$t_D, $$t_E;
        $v_5 = (($$t_E = this.generateNorSyncAttributeName(entityName, $v_5, ($$t_D = {'val': $v_4}))), $v_4 = $$t_D.val, $$t_E);
        var $v_6 = this.$5B_0(this.$R_0($v_1, 'operator'));
        var $v_7 = this.$R_0($v_2, 'type');
        var $v_8 = 'WHERE ((' + $v_3 + '.' + $v_5 + ' ' + $v_6 + ' \'' + $v_4 + '\')) COLLATE NOCASE ';
        if (sql.toUpperCase().indexOf('WHERE') === sql.toUpperCase().lastIndexOf('WHERE') && sql.toUpperCase().indexOf('WHERE') > 0) {
            $v_8 = $v_8 + $v_7;
            var $v_9 = sql.split('WHERE');
            if ($v_9.length === 1) {
                $v_9 = sql.split('where');
            }
            $v_0 = new Sys.StringBuilder($v_9[0] + $v_8 + $v_9[1]);
        }
        else if (sql.toUpperCase().indexOf('WHERE') <= 0) {
            if (sql.toUpperCase().indexOf('ORDER BY') > 0) {
                $v_0 = (sql.indexOf('ORDER BY') > 0) ? new Sys.StringBuilder(sql.replace('ORDER BY', ' ' + $v_8 + 'ORDER BY')) : new Sys.StringBuilder(sql.replace('order by', ' ' + $v_8 + 'ORDER BY'));
            }
            else {
                $v_0.append($v_8);
            }
        }
        return $v_0.toString();
    },
    
    updateSqlWithJoinClauseFromContextFilter: function(entityName, sql, conditionXml, condition, queryContextId) {
        var $v_0 = conditionXml.getElementsByTagName('filter')[0];
        var $v_1 = null;
        var $v_2 = '';
        var $v_3 = '\"' + entityName + '0\"';
        $v_1 = conditionXml.getElementsByTagName('link-entity')[0];
        var $v_4 = conditionXml.getElementsByTagName('link-entity').length;
        if ($v_4 > 1) {
            $v_2 = this.$4v_0(entityName, condition, queryContextId, $v_0, $v_1, $v_3, true);
            entityName = this.$R_0($v_1, 'name');
            $v_1 = conditionXml.getElementsByTagName('link-entity')[1];
            $v_2 = $v_2 + ' ' + this.$4v_0(entityName, condition, queryContextId, $v_0, $v_1, entityName + '2', false);
        }
        else {
            $v_2 = this.$4v_0(entityName, condition, queryContextId, $v_0, $v_1, $v_3, false);
        }
        var $v_5 = sql.split($v_3 + ' ');
        if ($v_5.length > 1) {
            sql = $v_5[0] + $v_3 + $v_2 + $v_5[1];
        }
        else {
            sql = $v_5[0] + $v_2;
        }
        return sql;
    },
    
    $4v_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = null;
        var $v_1 = '';
        var $v_2 = '';
        var $v_3 = this.$R_0($p4, 'name');
        $v_2 = (!$p6) ? this.$R_0($p4, 'alias') : $v_3 + '2';
        var $$t_D, $$t_E, $$t_F, $$t_G;
        var $v_4 = $v_3 + ' AS ' + $v_2 + ' ON (' + $p5 + '.' + (($$t_E = this.generateNorSyncAttributeName($p0, this.$R_0($p4, 'to'), ($$t_D = {'val': $v_0}))), $v_0 = $$t_D.val, $$t_E) + ' = ' + $v_2 + '.' + (($$t_G = this.generateNorSyncAttributeName($v_3, this.$R_0($p4, 'from'), ($$t_F = {'val': $v_0}))), $v_0 = $$t_F.val, $$t_G);
        if (!$p6) {
            var $v_5 = $v_2 + '.' + this.$R_0($p1, 'attribute') + ' ' + this.$5B_0(this.$R_0($p1, 'operator')) + ' \'' + $p2 + '\' COLLATE NOCASE ';
            $v_1 = ' JOIN ' + $v_4 + ' COLLATE NOCASE ' + this.$R_0($p3, 'type') + ' (( ' + $v_5 + '))) ';
        }
        else {
            $v_1 = ' JOIN ' + $v_4 + ' COLLATE NOCASE )';
        }
        return $v_1;
    },
    
    $R_0: function($p0, $p1) {
        return $p0.attributes.getNamedItem($p1).nodeValue;
    },
    
    generateNorSyncAttributeName: function(entityName, attributeName, attributeValue) {
        return attributeName;
    },
    
    $5B_0: function($p0) {
        var $v_0 = '';
        switch ($p0) {
            case 'eq':
                $v_0 = '=';
                break;
            case 'not-eq ':
            case 'ne':
                $v_0 = '!=';
                break;
            case 'like':
                $v_0 = 'like';
                break;
        }
        return $v_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery = function(relationship, entity, fetchXml) {
    Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.initializeBase(this, [ fetchXml, entity.get_identifier() + '_' + relationship.toString() ]);
    this.$y_2 = entity;
    this.$2V_2 = relationship;
}
Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.prototype = {
    $2V_2: null,
    $y_2: null,
    
    get_relationship: function() {
        return this.$2V_2;
    },
    
    toString: function() {
        return 'RelatedEntityQuery: ' + this.$y_2.get_identifier() + ',' + this.$2V_2.toString() + ',' + Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString.call(this);
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.UserContext = function(userId, userName, userRoles, parentRootRoles, organizationSettings, userSettings, rolePrivileges, attributePrivileges, serverContext, roleNames, metadataLastModifiedTime, transactionCurrencyId, defaultDashboardId, defaultHomepageId, defaultInteractionCentricDashboardId, fullServerVersion, offlineProfile, externalContext, fcbContext) {
    this.get_LanguageId = this.get_languageId;
    this.get_FCBContext = this.get_fcbContext;
    this.$1g_0 = (!_Script.isNullOrUndefined(userId)) ? userId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1C_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(userName)) ? userName : '';
    this.$1D_0 = (!_Script.isNullOrUndefined(userRoles)) ? userRoles : new Array(0);
    this.$1Z_0 = (!_Script.isNullOrUndefined(parentRootRoles)) ? parentRootRoles : new Array(0);
    this.$5_0 = (!_Script.isNullOrUndefined(organizationSettings)) ? organizationSettings : Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.$5W();
    this.$E_0 = (!_Script.isNullOrUndefined(userSettings)) ? userSettings : Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.$5X();
    this.$K_0 = (!_Script.isNullOrUndefined(rolePrivileges)) ? rolePrivileges : new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege))();
    this.$N_0 = (!_Script.isNullOrUndefined(attributePrivileges)) ? attributePrivileges : new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
    this.$q_0 = (!_Script.isNullOrUndefined(serverContext)) ? serverContext : new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext('', '');
    this.$1c_0 = (!_Script.isNullOrUndefined(roleNames)) ? roleNames : new Array(0);
    this.$1U_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(metadataLastModifiedTime)) ? metadataLastModifiedTime : '';
    this.$W_0 = (!_Script.isNullOrUndefined(transactionCurrencyId)) ? transactionCurrencyId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1I_0 = (!_Script.isNullOrUndefined(defaultDashboardId)) ? defaultDashboardId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1J_0 = (!_Script.isNullOrUndefined(defaultHomepageId)) ? defaultHomepageId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1K_0 = (!_Script.isNullOrUndefined(defaultInteractionCentricDashboardId)) ? defaultInteractionCentricDashboardId : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this.$1P_0 = (!Microsoft.Crm.Client.Core.Framework._String.isNullOrWhiteSpace(fullServerVersion)) ? fullServerVersion : '';
    this.$1W_0 = (!_Script.isNullOrUndefined(offlineProfile)) ? offlineProfile : new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile(Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), {}, '');
    this.$C_0 = (!_Script.isNullOrUndefined(externalContext)) ? externalContext : {};
    this.$1N_0 = (!_Script.isNullOrUndefined(fcbContext)) ? fcbContext : {};
    this.$2F_0 = this.$1D_0.length > 0;
    this.$I_0 = false;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext = function(userContext, errorCode) {
    var $v_0 = (!userContext) ? new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', null, null, null, null, null, null, null, null, '', Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', null, null, null) : new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(userContext.$1g_0, userContext.$1C_0, userContext.$1D_0, userContext.$1Z_0, userContext.$5_0, userContext.$E_0, userContext.$K_0, userContext.$N_0, userContext.$q_0, userContext.$1c_0, userContext.$1U_0, userContext.$W_0, userContext.$1I_0, userContext.$1J_0, userContext.$1K_0, userContext.$1P_0, userContext.$1W_0, userContext.$C_0, userContext.$1N_0);
    $v_0.$3n_0 = true;
    $v_0.$a_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createSecureContext = function(userContext) {
    var $v_0 = (!userContext) ? new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', null, null, null, null, null, null, null, null, '', Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', null, null, null) : new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext(userContext.$1g_0, userContext.$1C_0, userContext.$1D_0, userContext.$1Z_0, userContext.$5_0, userContext.$E_0, userContext.$K_0, userContext.$N_0, userContext.$q_0, userContext.$1c_0, userContext.$1U_0, userContext.$W_0, userContext.$1I_0, userContext.$1J_0, userContext.$1K_0, userContext.$1P_0, userContext.$1W_0, userContext.$C_0, userContext.$1N_0);
    $v_0.$1C_0 = '';
    $v_0.$I_0 = true;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createFromObjectData = function(data) {
    var $v_0 = (('userid') in data) ? Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['userid']) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_1 = data['username'];
    var $v_2 = data['iserrorcontext'];
    var $v_3 = data['errorcode'];
    var $v_4 = data['isvalid'];
    var $v_5 = data['issecured'];
    if (!$v_4) {
        return Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext(null, $v_3);
    }
    var $v_6 = data['rolenames'];
    var $v_7 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid))();
    for (var $$arr_9 = data['userroles'], $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
        var $v_S = $$arr_9[$$idx_B];
        var $v_T = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData($v_S);
        $v_7.add($v_T);
    }
    var $v_8 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.Framework.Guid))();
    for (var $$arr_F = data['parentrootroles'], $$len_G = $$arr_F.length, $$idx_H = 0; $$idx_H < $$len_G; ++$$idx_H) {
        var $v_U = $$arr_F[$$idx_H];
        var $v_V = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData($v_U);
        $v_8.add($v_V);
    }
    var $v_9 = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.createFromObjectData(data['organizationsettings']);
    var $v_A = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.createFromObjectData(data['usersettings']);
    var $v_B = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.createFromObjectData(data['servercontext']);
    var $v_C = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile.createFromObjectData(data['offlineprofile']);
    var $v_D = data['fullserverversion'];
    var $v_E = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege))();
    for (var $$arr_Q = data['roleprivileges'], $$len_R = $$arr_Q.length, $$idx_S = 0; $$idx_S < $$len_R; ++$$idx_S) {
        var $v_W = $$arr_Q[$$idx_S];
        var $v_X = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.createFromObjectData($v_W);
        $v_E.set_item($v_X.$J_0.toString(), $v_X);
    }
    var $v_F = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege))();
    for (var $$arr_W = data['attributeprivileges'], $$len_X = $$arr_W.length, $$idx_Y = 0; $$idx_Y < $$len_X; ++$$idx_Y) {
        var $v_Y = $$arr_W[$$idx_Y];
        var $v_Z = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.createFromObjectData($v_Y);
        $v_F.set_item($v_Z.$1H_0.toString(), $v_Z);
    }
    var $v_G = data['metadatalastmodifiedtime'];
    var $v_H = (('transactioncurrencyid') in data) ? Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['transactioncurrencyid']) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_I = (('defaultdashboardid') in data) ? Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['defaultdashboardid']) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_J = (('defaulthomepageid') in data) ? Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['defaulthomepageid']) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_K = (('defaultinteractioncentricdashboardid') in data) ? Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData(data['defaultinteractioncentricdashboardid']) : Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    var $v_L = data['externalcontext'];
    var $v_M = {};
    var $v_N = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency))();
    var $$dict_k = $v_L['transactioncurrencybyid'];
    for (var $$key_l in $$dict_k) {
        var $v_a = { key: $$key_l, value: $$dict_k[$$key_l] };
        $v_N.set_item($v_a.key, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.createFromObjectData($v_a.value));
    }
    $v_M['transactioncurrencybyid'] = $v_N;
    var $v_O = new (Microsoft.Crm.Client.Core.Framework.TypedDictionary$1.$$(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition))();
    var $$dict_o = $v_L['timezonedefinitionbycode'];
    for (var $$key_p in $$dict_o) {
        var $v_b = { key: $$key_p, value: $$dict_o[$$key_p] };
        $v_O.set_item($v_b.key, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.createFromObjectData($v_b.value));
    }
    $v_M['timezonedefinitionbycode'] = $v_O;
    $v_M['islive'] = $v_L['islive'];
    $v_M['isosdporganization'] = $v_L['isosdporganization'];
    $v_M['usepathbasedurls'] = $v_L['usepathbasedurls'];
    $v_M['entitymetadatasyncconfiguration'] = $v_L['entitymetadatasyncconfiguration'];
    var $v_P = data['fcbcontext'];
    var $v_Q = {};
    var $$dict_u = $v_P;
    for (var $$key_v in $$dict_u) {
        var $v_c = { key: $$key_v, value: $$dict_u[$$key_v] };
        var $v_d = Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.createFromObjectData($v_c.value);
        if (!_Script.isNullOrUndefined($v_d)) {
            $v_Q[$v_d.$1O_0] = $v_d;
        }
    }
    var $v_R = new Microsoft.Crm.Client.Core.Storage.DataApi.UserContext($v_0, $v_1, $v_7.toArray(), $v_8.toArray(), $v_9, $v_A, $v_E, $v_F, $v_B, $v_6, $v_G, $v_H, $v_I, $v_J, $v_K, $v_D, $v_C, $v_M, $v_Q);
    if ($v_2) {
        $v_R = Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createErrorContext($v_R, $v_3);
    }
    if ($v_5) {
        $v_R = Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.createSecureContext($v_R);
    }
    return $v_R;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.$5W = function() {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings(Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', 0, null, 0, '', 0, 0, false, false, false, 0, 0, new Date(), 0, 0, 0, 0, 0, 0, '', false, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), '', false, '', 0, false, false, false, 0, '', false, false, '', '', false, '', false, false, 0, 0, false, false, false, false, '');
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.$5X = function() {
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings(0, 0, '', null, null, 0, null, 0, 0, false, false, 0);
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.prototype = {
    $1g_0: null,
    $1D_0: null,
    $1Z_0: null,
    $1c_0: null,
    $5_0: null,
    $1W_0: null,
    $E_0: null,
    $K_0: null,
    $N_0: null,
    $q_0: null,
    $1P_0: null,
    $C_0: null,
    $1N_0: null,
    $1U_0: null,
    $W_0: null,
    $1C_0: null,
    $3n_0: false,
    $a_0: 0,
    $2F_0: false,
    $I_0: false,
    $1I_0: null,
    $1J_0: null,
    $1K_0: null,
    
    get_isTaiwanCalendar: function() {
        return this.$E_0.$1f_0 === 1028;
    },
    
    get_userId: function() {
        return this.$1g_0;
    },
    
    get_transactionCurrencyId: function() {
        return this.$W_0;
    },
    
    get_userName: function() {
        return this.$1C_0;
    },
    
    get_userRoles: function() {
        return this.$1D_0;
    },
    
    get_parentRootRoles: function() {
        return this.$1Z_0;
    },
    
    get_roleNames: function() {
        return this.$1c_0;
    },
    
    get_organizationSettings: function() {
        return this.$5_0;
    },
    
    get_OfflineProfile: function() {
        return this.$1W_0;
    },
    
    get_UserSettings: function() {
        return this.$E_0;
    },
    
    get_rolePrivileges: function() {
        return this.$K_0;
    },
    
    get_attributePrivileges: function() {
        return this.$N_0;
    },
    
    get_serverContext: function() {
        return this.$q_0;
    },
    
    get_externalContext: function() {
        return this.$C_0;
    },
    
    get_fcbContext: function() {
        return this.$1N_0;
    },
    
    get_metadataLastModifiedTime: function() {
        return this.$1U_0;
    },
    
    get_isErrorContext: function() {
        return this.$3n_0;
    },
    
    get_errorCode: function() {
        return this.$a_0;
    },
    
    get_isValid: function() {
        return this.$2F_0;
    },
    
    get_isSecured: function() {
        return this.$I_0;
    },
    
    get_defaultDashboardId: function() {
        return this.$1I_0;
    },
    
    get_defaultHomepageId: function() {
        return this.$1J_0;
    },
    
    get_defaultInteractionCentricDashboardId: function() {
        return this.$1K_0;
    },
    
    getObjectData: function() {
        var $v_0 = {};
        $v_0['userid'] = this.$1g_0.getObjectData();
        $v_0['username'] = this.$1C_0;
        $v_0['iserrorcontext'] = this.$3n_0;
        $v_0['errorcode'] = this.$a_0;
        $v_0['isvalid'] = this.$2F_0;
        $v_0['issecured'] = this.$I_0;
        if (!this.$2F_0) {
            return $v_0;
        }
        $v_0['rolenames'] = this.$1c_0;
        var $v_1 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_2 = this.$1D_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_B = $$arr_2[$$idx_4];
            $v_1.add($v_B.getObjectData());
        }
        $v_0['userroles'] = $v_1.toArray();
        var $v_2 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_7 = this.$1Z_0, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_C = $$arr_7[$$idx_9];
            $v_2.add($v_C.getObjectData());
        }
        $v_0['parentrootroles'] = $v_2.toArray();
        $v_0['organizationsettings'] = this.$5_0.getObjectData();
        $v_0['offlineprofile'] = this.$1W_0.getObjectData();
        $v_0['usersettings'] = this.$E_0.getObjectData();
        $v_0['servercontext'] = this.$q_0.getObjectData();
        $v_0['fullserverversion'] = this.$1P_0;
        $v_0['metadatalastmodifiedtime'] = this.$1U_0;
        $v_0['transactioncurrencyid'] = this.$W_0.getObjectData();
        $v_0['defaultdashboardid'] = this.$1I_0.getObjectData();
        $v_0['defaulthomepageid'] = this.$1J_0.getObjectData();
        $v_0['defaultinteractioncentricdashboardid'] = this.$1K_0.getObjectData();
        var $v_3 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_C = this.$K_0.toArray(), $$len_D = $$arr_C.length, $$idx_E = 0; $$idx_E < $$len_D; ++$$idx_E) {
            var $v_D = $$arr_C[$$idx_E];
            $v_3.add($v_D.getObjectData());
        }
        $v_0['roleprivileges'] = $v_3.toArray();
        var $v_4 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Object))();
        for (var $$arr_H = this.$N_0.toArray(), $$len_I = $$arr_H.length, $$idx_J = 0; $$idx_J < $$len_I; ++$$idx_J) {
            var $v_E = $$arr_H[$$idx_J];
            $v_4.add($v_E.getObjectData());
        }
        $v_0['attributeprivileges'] = $v_4.toArray();
        var $v_5 = {};
        var $v_6 = {};
        var $v_7 = this.$C_0['transactioncurrencybyid'];
        var $$dict_P = $v_7.toDictionary();
        for (var $$key_Q in $$dict_P) {
            var $v_F = { key: $$key_Q, value: $$dict_P[$$key_Q] };
            $v_6[$v_F.key] = ($v_F.value).getObjectData();
        }
        $v_5['transactioncurrencybyid'] = $v_6;
        var $v_8 = {};
        var $v_9 = this.$C_0['timezonedefinitionbycode'];
        var $$dict_U = $v_9.toDictionary();
        for (var $$key_V in $$dict_U) {
            var $v_G = { key: $$key_V, value: $$dict_U[$$key_V] };
            $v_8[$v_G.key] = ($v_G.value).getObjectData();
        }
        $v_5['timezonedefinitionbycode'] = $v_8;
        $v_5['islive'] = this.$C_0['islive'];
        $v_5['isosdporganization'] = this.$C_0['isosdporganization'];
        $v_5['usepathbasedurls'] = this.$C_0['usepathbasedurls'];
        $v_5['entitymetadatasyncconfiguration'] = this.$C_0['entitymetadatasyncconfiguration'];
        $v_0['externalcontext'] = $v_5;
        var $v_A = {};
        var $$dict_Z = this.$1N_0;
        for (var $$key_a in $$dict_Z) {
            var $v_H = { key: $$key_a, value: $$dict_Z[$$key_a] };
            var $v_I = $v_H.value;
            $v_A[$v_I.$1O_0] = $v_I.getObjectData();
        }
        $v_0['fcbcontext'] = $v_A;
        return $v_0;
    },
    
    hasAttributeAccessRights: function(attributeMetadata, attributeAccessRights, record) {
        return (this.getAttributeAccessRights(attributeMetadata, record) & attributeAccessRights) === attributeAccessRights;
    },
    
    getAttributeAccessRights: function(attributeMetadata, record) {
        var $v_0 = 0;
        $v_0 = (attributeMetadata.$12_0) ? $v_0 | 1 : $v_0;
        $v_0 = (attributeMetadata.$13_0) ? $v_0 | 2 : $v_0;
        $v_0 = (attributeMetadata.$14_0) ? $v_0 | 4 : $v_0;
        var $v_1 = null;
        if (attributeMetadata.$I_0) {
            $v_1 = this.$N_0.get_item(attributeMetadata.$S_0.toString());
            if (_Script.isNullOrUndefined($v_1) || !$v_1.$t_0 || !$v_1.$u_0) {
                var $v_2 = 0;
                if (!_Script.isNullOrUndefined($v_1)) {
                    $v_2 = $v_1.$4_0;
                }
                var $v_3 = null;
                if (!_Script.isNullOrUndefined(record) && !_Script.isNullOrUndefined(record.$e_0)) {
                    $v_3 = record.$e_0.get_item(attributeMetadata.$S_0.toString());
                }
                if (_Script.isNullOrUndefined($v_3)) {
                    return $v_0 & $v_2;
                }
                $v_2 = $v_2 | $v_3.$4_0;
                return $v_0 & $v_2;
            }
            else {
                return $v_0 & $v_1.$4_0;
            }
        }
        return $v_0;
    },
    
    getDefaultTransactionCurrency: function() {
        var $v_0 = this.getTransactionCurrency(this.$W_0);
        if (_Script.isNullOrUndefined($v_0)) {
            $v_0 = this.getTransactionCurrency(this.$5_0.$1m_0);
            if (_Script.isNullOrUndefined($v_0)) {
                throw Error.create('UserContext has failed in GetDefaultTransactionCurrency. Unable to retrieve the org base currency.');
            }
        }
        return $v_0;
    },
    
    getTransactionCurrencySymbol: function(currencyId) {
        var $v_0 = this.$C_0['transactioncurrencybyid'];
        var $v_1 = $v_0.get_item(currencyId);
        return ($v_1) ? $v_1.getCurrencyDisplaySymbol(this.$5_0.$1s_0) : '';
    },
    
    getTransactionCurrency: function(currencyId) {
        var $v_0 = this.$C_0['transactioncurrencybyid'];
        var $v_1 = (!_Script.isNullOrUndefined(currencyId)) ? currencyId.toString() : '';
        if ($v_0.containsKey($v_1)) {
            return $v_0.get_item($v_1);
        }
        return null;
    },
    
    getEntitiesToSync: function() {
        var $v_0 = this.$C_0['entitymetadatasyncconfiguration'];
        if ($v_0 && $v_0['EntitiesToSync'] && ($v_0['EntitiesToSync']).length) {
            return $v_0['EntitiesToSync'];
        }
        return new Array(0);
    },
    
    get_languageId: function() {
        return this.$E_0.$2H_0;
    },
    
    get_userCultureLcid: function() {
        return this.$E_0.$1f_0;
    },
    
    get_isFarEastLanguage: function() {
        return this.$E_0.$3o_0;
    },
    
    get_timeZoneUtcOffsetMinutes: function() {
        return this.$E_0.$2c_0;
    },
    
    get_timeZoneAdjusters: function() {
        return this.$E_0.$2b_0;
    },
    
    get_defaultSearchExperience: function() {
        return this.$E_0.$1x_0;
    },
    
    get_userReportScriptErrors: function() {
        return this.$E_0.$d_0;
    },
    
    get_languageCode: function() {
        return this.$5_0.$2G_0;
    },
    
    get_orgCultureInfoLcid: function() {
        return this.$5_0.$2Q_0;
    },
    
    get_organizationId: function() {
        return this.$5_0.$2O_0;
    },
    
    get_organizationName: function() {
        return this.$5_0.$2P_0;
    },
    
    get_blockedAttachments: function() {
        return this.$5_0.$1o_0;
    },
    
    get_maxUploadFileSize: function() {
        return this.$5_0.$2J_0;
    },
    
    get_organizationReportScriptErrors: function() {
        return this.$5_0.$d_0;
    },
    
    get_isDuplicateDetectionEnabled: function() {
        return this.$5_0.$2B_0;
    },
    
    get_isDuplicateDetectionEnabledForOnlineCreateUpdate: function() {
        return this.$5_0.$2C_0;
    },
    
    get_serverVersion: function() {
        return this.$q_0.$2X_0;
    },
    
    get_serverDatabaseVersion: function() {
        return this.$q_0.$1u_0;
    },
    
    get_fullServerVersion: function() {
        return this.$1P_0;
    }
}


Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges = function(userContext) {
    this.$N_0 = userContext.$N_0;
    this.$K_0 = userContext.$K_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5T = function($p0, $p1) {
    switch ($p0) {
        case 0:
            return 32;
        case 3:
            return 65536;
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 5:
            return 16;
        case 6:
            return 262144;
        case 7:
            return 524288;
        default:
            throw Error.invalidOperation('Not implemented.');
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5V = function($p0) {
    switch ($p0) {
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 4;
        default:
            throw Error.invalidOperation('Not implemented.');
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5b = function($p0) {
    switch ($p0) {
        case 0:
            return 1;
        case 3:
            return 4;
        case 1:
            return 2;
        case 2:
            return 3;
        case 4:
            return 7;
        case 5:
            return 8;
        case 6:
            return 6;
        case 7:
            return 5;
        default:
            throw Error.invalidOperation('OperationType is not recognized without a Model context.');
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5c = function($p0) {
    var $v_0 = 0;
    switch ($p0) {
        case 4:
            $v_0 = 7;
            break;
        case 16:
            $v_0 = 8;
            break;
        case 524288:
            $v_0 = 5;
            break;
        case 32:
            $v_0 = 1;
            break;
        case 65536:
            $v_0 = 4;
            break;
        case 1:
            $v_0 = 2;
            break;
        case 262144:
            $v_0 = 6;
            break;
        case 2:
            $v_0 = 3;
            break;
        default:
            Error.argumentOutOfRange('accessRights', $p0, 'Invalid access rights');
            break;
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$4w = function($p0, $p1) {
    if (_Script.isNullOrUndefined($p1)) {
        return false;
    }
    Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals($p1.$V_0, true, 'Cannot get privilege with child entity metadata, use entity metadata of parent');
    if ($p1.$1R_0) {
        if (($p1.$1Y_0 & 1)) {
            return true;
        }
        return false;
    }
    switch ($p1.$8_0) {
        case 'account':
        case 'annotation':
        case 'appointment':
        case 'asyncoperation':
        case 'bulkoperation':
        case 'campaign':
        case 'campaignactivity':
        case 'campaignresponse':
        case 'connection':
        case 'contact':
        case 'contract':
        case 'customeropportunityrole':
        case 'customerrelationship':
        case 'duplicaterule':
        case 'email':
        case 'fax':
        case 'goal':
        case 'goalrollupquery':
        case 'import':
        case 'importfile':
        case 'importmap':
        case 'incident':
        case 'incidentresolution':
        case 'invoice':
        case 'lead':
        case 'letter':
        case 'list':
        case 'mailmergetemplate':
        case 'opportunity':
        case 'opportunityclose':
        case 'orderclose':
        case 'phonecall':
        case 'processsession':
        case 'queue':
        case 'quote':
        case 'quoteclose':
        case 'recurringappointmentmaster':
        case 'salesorder':
        case 'serviceappointment':
        case 'sharepointdocumentlocation':
        case 'sharepointsite':
        case 'task':
        case 'template':
        case 'userform':
        case 'userquery':
        case 'userqueryvisualization':
        case 'workflow':
            return true;
        default:
            return false;
    }
}
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.prototype = {
    $N_0: null,
    $K_0: null,
    
    get_attributePrivileges: function() {
        return this.$N_0;
    },
    
    get_rolePrivileges: function() {
        return this.$K_0;
    },
    
    isOperationEnabledOnModel: function(modelName, instance, operationType, metadata, parentEntityMetadata) {
        return this.$5f_0(modelName, instance, operationType, -1, metadata, parentEntityMetadata);
    },
    
    getFieldAccessLevelsForOperation: function(entityRecord, fieldName, operationType, attributeMetadataCollection) {
        var $v_0 = Microsoft.Crm.Client.Core.Imported.MscrmComponents.deferredPromiseFactory(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess, Object);
        if (_Script.isNullOrUndefined(entityRecord) || _Script.isNullOrUndefined(entityRecord.$M_0.LogicalName) || Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(fieldName) || _Script.isNullOrUndefined(attributeMetadataCollection)) {
            $v_0.resolve(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.get_openAccess());
        }
        else {
            var $v_1 = attributeMetadataCollection.$Y_0.get_item(fieldName);
            if (_Script.isNullOrUndefined($v_1)) {
                $v_0.resolve(Microsoft.Crm.Client.Core.Framework.FieldLevelAccess.get_openAccess());
            }
            else {
                if (operationType && operationType !== 2) {
                    Error.invalidOperation(String.format('Unsupported OperationType {0}. Supported OperationTypes are Create and Update.', operationType));
                }
                $v_0.resolve(new Microsoft.Crm.Client.Core.Framework.FieldLevelAccess($v_1.$I_0, this.hasAttributeAccessRights($v_1, 2, entityRecord), this.hasAttributeAccessRights($v_1, Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5V(operationType), entityRecord)));
            }
        }
        return $v_0.promise();
    },
    
    $5f_0: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = ($p4.$V_0) ? $p5 : $p4;
        if (_Script.isNullOrUndefined($v_0) || _Script.isNullOrUndefined($p0) || _Script.isNullOrUndefined($p2)) {
            return false;
        }
        var $v_1 = Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5T($p2, $p1);
        if (!Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$4w($p0, $v_0) || !$p1.$X_0) {
            return this.$5g_0($p0, $p2, $p3, $v_0);
        }
        return this.$4w_0($v_0, $p1, $v_1, $p3);
    },
    
    $5g_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5b($p1);
        if (_Script.isNullOrUndefined($p0) || _Script.isNullOrUndefined($v_0)) {
            return false;
        }
        if (_Script.isNullOrUndefined($p3)) {
            return false;
        }
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals($p3.$V_0, true, 'Cannot get privilege with child entity metadata, use entity metadata of parent');
        return this.$5d_0($p3, $v_0, $p2);
    },
    
    $5d_0: function($p0, $p1, $p2) {
        if (_Script.isNullOrUndefined($p2)) {
            $p2 = -1;
        }
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals($p0.$V_0, true, 'Cannot get privilege with child entity metadata, use entity metadata of parent');
        var $v_0 = $p0.get_privilegesByType().get_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey($p1));
        if (_Script.isNullOrUndefined($v_0)) {
            return false;
        }
        var $v_1 = this.$K_0.containsKey($v_0.$J_0.toString());
        if (!$v_1 || $p2 === -1) {
            return $v_1;
        }
        else {
            return this.$5C_0($v_0.$J_0, $p2);
        }
    },
    
    hasAttributeAccessRights: function(attributeMetadata, attributeAccessRights, record) {
        return (this.$5U_0(attributeMetadata, record) & attributeAccessRights) === attributeAccessRights;
    },
    
    $5U_0: function($p0, $p1) {
        var $v_0 = 0;
        $v_0 = ($p0.$12_0) ? $v_0 | 1 : $v_0;
        $v_0 = ($p0.$13_0) ? $v_0 | 2 : $v_0;
        $v_0 = ($p0.$14_0) ? $v_0 | 4 : $v_0;
        var $v_1 = null;
        if ($p0.$I_0) {
            $v_1 = this.$N_0.get_item($p0.$S_0.toString());
            if (_Script.isNullOrUndefined($v_1) || !$v_1.$t_0 || !$v_1.$u_0) {
                var $v_2 = 0;
                if (!_Script.isNullOrUndefined($v_1)) {
                    $v_2 = $v_1.$4_0;
                }
                var $v_3 = null;
                if (!_Script.isNullOrUndefined($p1) && !_Script.isNullOrUndefined($p1.$e_0)) {
                    $v_3 = $p1.$e_0.get_item($p0.$S_0.toString());
                }
                if (_Script.isNullOrUndefined($v_3)) {
                    return $v_0 & $v_2;
                }
                $v_2 = $v_2 | $v_3.$4_0;
                return $v_0 & $v_2;
            }
            else {
                return $v_0 & $v_1.$4_0;
            }
        }
        return $v_0;
    },
    
    $4w_0: function($p0, $p1, $p2, $p3) {
        if (_Script.isNullOrUndefined($p3)) {
            $p3 = -1;
        }
        Microsoft.Crm.Client.Core.Framework.Utils.ExceptionHelpers.throwOnEquals($p0.$V_0, true, 'Cannot get privilege with child entity metadata, use entity metadata of parent');
        var $v_0 = $p0.get_privilegesByType().get_item(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.getPrivilegeTypeKey(Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$5c($p2)));
        if (_Script.isNullOrUndefined($v_0)) {
            return false;
        }
        var $v_1 = (Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.$4w($p1.$D_0.LogicalName, $p0)) ? (($p1.$X_0 & $p2) === $p2) : true;
        var $v_2 = $v_1 && this.$K_0.containsKey($v_0.$J_0.toString());
        if (!$v_2 || $p3 === -1) {
            return $v_2;
        }
        else {
            return this.$5C_0($v_0.$J_0, $p3);
        }
    },
    
    $5C_0: function($p0, $p1) {
        if (_Script.isNullOrUndefined($p0)) {
            return false;
        }
        var $v_0 = this.$K_0.get_item($p0.toString());
        if (!_Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.$1z_0;
            return $v_1 >= $p1;
        }
        else {
            return false;
        }
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode = function(value, replaceNewLineForHtml) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    if (_Script.isNullOrUndefined(replaceNewLineForHtml)) {
        replaceNewLineForHtml = false;
    }
    var $v_0 = value.replace('\r\n', '\n').replace('\r', '\n').split('\n');
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        $v_0[$v_1] = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_0[$v_1]);
    }
    if (replaceNewLineForHtml) {
        return $v_0.join('<br />');
    }
    else {
        return $v_0.join('\r\n');
    }
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlAttributeEncode = function(value) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmXmlAttributeEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.javaScriptEncode = function(value) {
    return CrmEncodeDecode.CrmJavaScriptEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode = function(value) {
    return CrmEncodeDecode.CrmHtmlAttributeEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode = function(value) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmHtmlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlDecode = function(value) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmHtmlDecode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode = function(value) {
    if (_Script.isNullOrUndefined(value)) {
        return '';
    }
    return CrmEncodeDecode.CrmXmlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode = function(value) {
    return CrmEncodeDecode.CrmUrlEncode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlDecode = function(value) {
    return CrmEncodeDecode.CrmUrlDecode(value);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.isValidHref = function(value) {
    return !Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.$5G.test(value);
}


Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter = function() {
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatTextForRendering = function(text) {
    return Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatMentions(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.htmlEncodeAndFormatHyperlinks(text));
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.formatMentions = function(encodedHtml) {
    var $v_0 = encodedHtml;
    var $v_1;
    while (($v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5I.exec(encodedHtml))) {
        var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlDecode($v_1[3]);
        var $v_3 = $v_1[2];
        var $v_4 = $v_1[1];
        var $v_5 = isNaN(parseInt($v_4));
        var $v_6;
        if ($v_5) {
            $v_6 = String.format('<a href=# onclick=\"{4}(\'onClick fired from {0}:{1}\')\" title=\"{2}\" alt=\"{2}\" >{3}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.javaScriptEncode($v_4), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_3), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode($v_2), 'console.log');
        }
        else {
            $v_6 = String.format('<a href=# onclick=\"{4}(\'onClick fired from {0}:{1}\')\" title=\"{2}\" alt=\"{2}\" >{3}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_4), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.urlEncode($v_3), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode($v_2), 'console.log');
        }
        $v_0 = $v_0.replace($v_1[0], $v_6);
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.htmlEncodeAndFormatHyperlinks = function(text) {
    if (_Script.isNullOrUndefined(text)) {
        return '';
    }
    var $v_0 = text.match(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5D) || new Array(0);
    text = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.multilineHtmlEncode(text, true);
    var $v_1 = {};
    for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        var $v_3 = ($v_2.toLowerCase().startsWith('www')) ? 'http://' + $v_2 : $v_2;
        if (!_Script.isUndefined($v_1[$v_3])) {
            continue;
        }
        $v_1[$v_3] = $v_2;
        if (Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.isValidHref($v_3)) {
            var $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5E.exec($v_3);
            if ($v_4) {
                var $v_5 = $v_4[1];
                var $v_6 = $v_4[3];
                var $v_7 = $v_5 + $v_6;
                text = text.replace(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_2), String.format('<a href=\'{0}\' target=\'_blank\' title=\'{1}\'>{2}</a>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_7), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlAttributeEncode($v_2), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.htmlEncode($v_2)));
            }
        }
    }
    return text;
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults');

Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault = function() {
    this.$h_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromXml = function(responseXml) {
    var $v_0 = '/a:ErrorCode';
    var $v_1 = '/a:ActivityId';
    var $v_2 = '/a:Timestamp';
    var $v_3 = '/a:InnerFault[not(@i:nil)]';
    var $v_4 = './/a:KeyValuePairOfstringanyType[b:key=\'DuplicateEntity\']/b:value';
    var $v_5 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (_Script.isNullOrUndefined(responseXml)) {
        return $v_5;
    }
    responseXml.addNamespace('d', 'http://schemas.microsoft.com/xrm/2011/Contracts/Services');
    responseXml.addNamespace('a', 'http://schemas.microsoft.com/xrm/2011/Contracts');
    responseXml.addNamespace('b', 'http://schemas.datacontract.org/2004/07/System.Collections.Generic');
    responseXml.addNamespace('c', 'http://schemas.microsoft.com/xrm/2012/Contracts');
    responseXml.addNamespace('i', 'http://www.w3.org/2001/XMLSchema-instance');
    $v_5.$4S_0 = responseXml;
    var $v_6 = './/a:OrganizationServiceFault';
    var $v_7 = responseXml.selectSingleNode($v_6);
    if (_Script.isNullOrUndefined($v_7) && responseXml.get_tagName() === 'c:Fault') {
        $v_6 = './';
    }
    var $v_8 = responseXml.selectSingleNode($v_6 + $v_0);
    if (!_Script.isNullOrUndefined($v_8)) {
        $v_5.$a_0 = Number.parseInvariant($v_8.get_innerText());
    }
    var $v_9 = responseXml.selectSingleNode($v_6 + $v_1);
    if (!_Script.isNullOrUndefined($v_9) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_9.get_innerText())) {
        $v_5.$1F_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_9.get_innerText());
    }
    var $v_A = responseXml.selectSingleNode($v_6 + $v_2);
    if (!_Script.isNullOrUndefined($v_A) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_A.get_innerText())) {
        $v_5.$A_0 = new Date($v_A.get_innerText());
    }
    var $v_B = responseXml.selectSingleNode($v_6 + $v_3);
    if (!_Script.isNullOrUndefined($v_B)) {
        $v_5.$3a_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$5J($v_B);
    }
    var $v_C = responseXml.getElementsByTagName('Message');
    if (!_Script.isNullOrUndefined($v_C) && $v_C.get_count()) {
        for (var $v_D = 0; $v_D < $v_C.get_count(); $v_D++) {
            $v_5.$h_0.add($v_C.get_item($v_D).get_innerText());
        }
    }
    else {
        $v_5.$h_0.add(responseXml.get_outerXml());
    }
    if (!_Script.isNullOrUndefined($v_7)) {
        var $v_E = $v_7.selectSingleNode($v_4);
        if (!_Script.isNullOrUndefined($v_E)) {
            if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
                if (window.parent && window.parent.location && window.parent.location.pathname && window.parent.location.pathname.toLowerCase().indexOf('engagementhub') !== -1) {
                    $v_5.$21_0 = $v_E.get_innerHtml();
                }
                else {
                    $v_5.$21_0 = $v_E.get_innerText();
                }
            }
            else {
                $v_5.$21_0 = $v_E.get_innerText();
            }
        }
    }
    return $v_5;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26 = function($p0, $p1) {
    var $v_0 = $p0.getElementsByTagName($p1);
    return (_Script.isNullOrUndefined($v_0) || !$v_0.get_count()) ? $p0.getElementsByTagName('a:' + $p1) : $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$5J = function($p0) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (_Script.isNullOrUndefined($p0)) {
        return $v_0;
    }
    var $v_1 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26($p0, 'ErrorCode').get_item(0).get_innerText();
    $v_0.$a_0 = Number.parseInvariant($v_1);
    $v_0.$h_0.add(Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26($p0, 'Message').get_item(0).get_innerText());
    var $v_2 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26($p0, 'InnerFault');
    if ($v_2.get_count() > 0) {
        var $v_5 = $v_2.get_item(0);
        if ($v_5.hasChildNodes()) {
            $v_0.$3a_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$5J($v_5);
        }
    }
    var $v_3 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26($p0, 'ActivityId');
    if (!_Script.isNullOrUndefined($v_3) && $v_3.get_count() > 0) {
        var $v_6 = $v_3.get_item(0);
        if (!_Script.isNullOrUndefined($v_6) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_6.get_innerText())) {
            $v_0.$1F_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_6.get_innerText());
        }
    }
    var $v_4 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.$26($p0, 'Timestamp');
    if (!_Script.isNullOrUndefined($v_4) && $v_4.get_count() > 0) {
        var $v_7 = $v_4.get_item(0);
        if (!_Script.isNullOrUndefined($v_7) && !Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty($v_7.get_innerText())) {
            $v_0.$A_0 = new Date($v_7.get_innerText());
        }
    }
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.parseFromHtml = function(responseHtml) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    if (Microsoft.Crm.Client.Core.Framework._String.isNullOrEmpty(responseHtml)) {
        return $v_0;
    }
    var $v_1 = $P_CRM(responseHtml);
    $v_0.$h_0.add($P_CRM('#errDescription', $v_1).text());
    var $v_2 = parseInt($P_CRM('#errNumber', $v_1).text(), 16);
    var $v_3 = (!($v_2 & 2147483648)) ? 1 : -1;
    $v_0.$a_0 = $v_3 * (~$v_2 + 1);
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorCode = function(errorCode) {
    var $v_0 = new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault();
    $v_0.$a_0 = errorCode;
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorStatus = function(errorStatus) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.fromErrorCode(errorStatus.get_errorCode());
    var $v_1 = errorStatus.get_errorFault();
    $v_0.$1F_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.retrieveActivityIdFromErrorFault($v_1);
    $v_0.$A_0 = Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.retrieveTimestampFromErrorFault($v_1);
    return $v_0;
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.retrieveActivityIdFromErrorFault = function(errorFault) {
    if (!_Script.isNullOrUndefined(errorFault) && Object.getType(errorFault) === Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault) {
        return (errorFault).$1F_0;
    }
    return Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.retrieveTimestampFromErrorFault = function(errorFault) {
    if (!_Script.isNullOrUndefined(errorFault) && Object.getType(errorFault) === Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault) {
        return (errorFault).$A_0;
    }
    return new Date(0);
}
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.prototype = {
    $4S_0: null,
    $a_0: 0,
    $3a_0: null,
    $21_0: null,
    $1F_0: null,
    $A_0: null,
    
    get_innerFault: function() {
        return this.$3a_0;
    },
    
    get_errorCode: function() {
        return this.$a_0;
    },
    
    get_message: function() {
        if (this.$h_0 && this.$h_0.get_Count()) {
            return this.$h_0.get_item(0);
        }
        else {
            return null;
        }
    },
    
    get_messages: function() {
        return this.$h_0;
    },
    
    get_activityId: function() {
        return this.$1F_0;
    },
    
    get_timestamp: function() {
        return this.$A_0;
    },
    
    get_responseXml: function() {
        return this.$4S_0;
    },
    
    get_responseOuterXml: function() {
        return this.$4S_0.get_outerXml();
    },
    
    get_duplicateEntityXml: function() {
        return this.$21_0;
    }
}


Xrm.Gen.RetrieveCardDataRequest = function(cardTypeId, additionalParameter) {
    this.cardTypeId = cardTypeId;
    this.additionalParameter = additionalParameter;
    this.name = 'RetrieveCardData';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ToggleGuidedHelpRequest = function(value) {
    this.value = value;
    this.name = 'ToggleGuidedHelp';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.MergeRequest = function(target, subordinateId, updateContent, performParentingChecks) {
    this.target = target;
    this.subordinateId = subordinateId;
    this.updateContent = updateContent;
    this.performParentingChecks = performParentingChecks;
    this.name = 'Merge';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AddItemCampaignActivityRequest = function(campaignActivityId, itemId, entityName) {
    this.campaignActivityId = campaignActivityId;
    this.itemId = itemId;
    this.entityName = entityName;
    this.name = 'AddItemCampaignActivity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SnoozeExchangeActionCardsRequest = function(messageId, cardType) {
    this.messageId = messageId;
    this.cardType = cardType;
    this.name = 'SnoozeExchangeActionCards';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AddItemCampaignRequest = function(campaignId, entityId, entityName) {
    this.campaignId = campaignId;
    this.entityId = entityId;
    this.entityName = entityName;
    this.name = 'AddItemCampaign';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.AddItemRequest = function(campaignId, entityId, objectTypeCode) {
    this.campaignId = campaignId;
    this.entityId = entityId;
    this.objectTypeCode = objectTypeCode;
    this.name = 'AddItem';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AddRecurrenceRequest = function(target, appointmentId) {
    this.target = target;
    this.appointmentId = appointmentId;
    this.name = 'AddRecurrence';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.AddToQueueRequest = function(target, sourceQueueId, destinationQueueId, queueItemProperties) {
    this.target = target;
    this.sourceQueueId = sourceQueueId;
    this.destinationQueueId = destinationQueueId;
    this.queueItemProperties = queueItemProperties;
    this.name = 'AddToQueue';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.BestTimeToEmailRequest = function(entityReferenceCollection) {
    this.entityReferenceCollection = entityReferenceCollection;
    this.name = 'BestTimeToEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GenerateQuoteFromOpportunityRequest = function(opportunityId, columnSet) {
    this.opportunityId = opportunityId;
    this.columnSet = columnSet;
    this.name = 'GenerateQuoteFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GenerateInvoiceFromOpportunityRequest = function(opportunityId, columnSet) {
    this.opportunityId = opportunityId;
    this.columnSet = columnSet;
    this.name = 'GenerateInvoiceFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GenerateSalesOrderFromOpportunityRequest = function(opportunityId, columnSet) {
    this.opportunityId = opportunityId;
    this.columnSet = columnSet;
    this.name = 'GenerateSalesOrderFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AssignRequest = function(target, assignee) {
    this.target = target;
    this.assignee = assignee;
    this.name = 'Assign';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AssignAllRecordsTeamRequest = function(oldOwnerId, oldOwnerType, newOwnerId, newOwnerType) {
    this.oldOwnerId = oldOwnerId;
    this.oldOwnerType = oldOwnerType;
    this.newOwnerId = newOwnerId;
    this.newOwnerType = newOwnerType;
    this.name = 'AssignAllRecordsTeam';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AssociateRequest = function(target, relationship, relatedEntities) {
    this.target = target;
    this.relationship = relationship;
    this.relatedEntities = relatedEntities;
    this.name = 'Associate';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.AddOrEditLocationRequest = function(locationName, absUrl, relativePath, parentType, parentId, isAddOrEditMode, isCreateFolder, documentId, parentEntityReference) {
    this.locationName = locationName;
    this.absUrl = absUrl;
    this.relativePath = relativePath;
    this.parentType = parentType;
    this.parentId = parentId;
    this.isAddOrEditMode = isAddOrEditMode;
    this.isCreateFolder = isCreateFolder;
    this.documentId = documentId;
    this.parentEntityReference = parentEntityReference;
    this.name = 'AddOrEditLocation';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.FetchSiteUrlRequest = function(documentId, parentEntityReference) {
    this.documentId = documentId;
    this.parentEntityReference = parentEntityReference;
    this.name = 'FetchSiteUrl';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.FollowEmailAttachmentRequest = function(activityMimeAttachmentId) {
    this.activityMimeAttachmentId = activityMimeAttachmentId;
    this.name = 'FollowEmailAttachment';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.DismissExchangeEnhancedActionCardsRequest = function(messageId, cardType) {
    this.messageId = messageId;
    this.cardType = cardType;
    this.name = 'DismissExchangeEnhancedActionCards';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.BookRequest = function(target, maintainLegacyAppServerBehavior, returnNotifications) {
    this.target = target;
    this.maintainLegacyAppServerBehavior = maintainLegacyAppServerBehavior;
    this.returnNotifications = returnNotifications;
    this.name = 'Book';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.CalculateActualValueOpportunityRequest = function(opportunityId) {
    this.opportunityId = opportunityId;
    this.name = 'CalculateActualValueOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CloneContractRequest = function(contractId, includeCanceledLines) {
    this.contractId = contractId;
    this.includeCanceledLines = includeCanceledLines;
    this.name = 'CloneContract';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExportTemplateToWordRequest = function(entityTypeCode, selectedEntities) {
    this.entityTypeCode = entityTypeCode;
    this.selectedEntities = selectedEntities;
    this.name = 'ExportTemplateToWord';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CalculateTotalTimeIncidentRequest = function(incidentId) {
    this.incidentId = incidentId;
    this.name = 'CalculateTotalTimeIncident';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExportWordDocumentRequest = function(entityTypeCode, selectedTemplate, selectedRecords) {
    this.entityTypeCode = entityTypeCode;
    this.selectedTemplate = selectedTemplate;
    this.selectedRecords = selectedRecords;
    this.name = 'ExportWordDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetRIProvisioningStatusRequest = function() {
    this.name = 'GetRIProvisioningStatus';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetAciMarsConnectorStatusRequest = function() {
    this.name = 'GetAciMarsConnectorStatus';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetRITenantEndpointUrlRequest = function() {
    this.name = 'GetRITenantEndpointUrl';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.IsLegacyCustomerRequest = function() {
    this.name = 'IsLegacyCustomer';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetFeatureStatusRequest = function(fetaureType, status, isSolutionUninstall) {
    this.fetaureType = fetaureType;
    this.status = status;
    this.isSolutionUninstall = isSolutionUninstall;
    this.name = 'SetFeatureStatus';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.StartRIProvisioningRequest = function(hubName, primaryKey) {
    this.hubName = hubName;
    this.primaryKey = primaryKey;
    this.name = 'StartRIProvisioning';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateRITenantInfoRequest = function(hubName, primaryKey) {
    this.hubName = hubName;
    this.primaryKey = primaryKey;
    this.name = 'UpdateRITenantInfo';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetWordTemplateRequest = function(target, selectedTemplate) {
    this.target = target;
    this.selectedTemplate = selectedTemplate;
    this.name = 'SetWordTemplate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RenewContractRequest = function(contractId, status, includeCanceledLines) {
    this.contractId = contractId;
    this.status = status;
    this.includeCanceledLines = includeCanceledLines;
    this.name = 'RenewContract';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CancelContractRequest = function(contractId, cancelDate, status) {
    this.contractId = contractId;
    this.cancelDate = cancelDate;
    this.status = status;
    this.name = 'CancelContract';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CancelSalesOrderRequest = function(orderClose, status) {
    this.orderClose = orderClose;
    this.status = status;
    this.name = 'CancelSalesOrder';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CloneProductRequest = function(source) {
    this.source = source;
    this.name = 'CloneProduct';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CloneMobileOfflineProfileRequest = function(source) {
    this.source = source;
    this.name = 'CloneMobileOfflineProfile';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CheckInDocumentRequest = function(entity, checkInComments, retainCheckout, parentEntityReference) {
    this.entity = entity;
    this.checkInComments = checkInComments;
    this.retainCheckout = retainCheckout;
    this.parentEntityReference = parentEntityReference;
    this.name = 'CheckInDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CheckoutDocumentRequest = function(entity, parentEntityReference) {
    this.entity = entity;
    this.parentEntityReference = parentEntityReference;
    this.name = 'CheckoutDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ConvertCampaignResponseRequest = function(campaignResponse, entityName, createOpportunityForExistingCustomer, customer, currency, owner) {
    this.campaignResponse = campaignResponse;
    this.entityName = entityName;
    this.createOpportunityForExistingCustomer = createOpportunityForExistingCustomer;
    this.customer = customer;
    this.currency = currency;
    this.owner = owner;
    this.name = 'ConvertCampaignResponse';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CopyCampaignResponseRequest = function(campaignResponseId) {
    this.campaignResponseId = campaignResponseId;
    this.name = 'CopyCampaignResponse';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateProductsRequest = function(entities, parentEntity) {
    this.entities = entities;
    this.parentEntity = parentEntity;
    this.name = 'CreateProducts';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.DeleteOpenInstancesRequest = function(target, seriesEndDate, stateOfPastInstances) {
    this.target = target;
    this.seriesEndDate = seriesEndDate;
    this.stateOfPastInstances = stateOfPastInstances;
    this.name = 'DeleteOpenInstances';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.NewDocumentRequest = function(fileName, locationId, parentEntityReference, isFolder, folderPath) {
    this.fileName = fileName;
    this.locationId = locationId;
    this.parentEntityReference = parentEntityReference;
    this.isFolder = isFolder;
    this.folderPath = folderPath;
    this.name = 'NewDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateAndAssociateRequest = function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, article) {
    this.regardingObjectId = regardingObjectId;
    this.regardingObjectTypeCode = regardingObjectTypeCode;
    this.associationRelationshipName = associationRelationshipName;
    this.article = article;
    this.name = 'CreateAndAssociate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.AssociateKnowledgeArticleRequest = function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, knowledgeArticleId, entityName) {
    this.regardingObjectId = regardingObjectId;
    this.regardingObjectTypeCode = regardingObjectTypeCode;
    this.associationRelationshipName = associationRelationshipName;
    this.knowledgeArticleId = knowledgeArticleId;
    this.entityName = entityName;
    this.name = 'AssociateKnowledgeArticle';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.DisassociateKnowledgeArticleRequest = function(regardingObjectId, regardingObjectTypeCode, associationRelationshipName, knowledgeArticleId, entityName) {
    this.regardingObjectId = regardingObjectId;
    this.regardingObjectTypeCode = regardingObjectTypeCode;
    this.associationRelationshipName = associationRelationshipName;
    this.knowledgeArticleId = knowledgeArticleId;
    this.entityName = entityName;
    this.name = 'DisassociateKnowledgeArticle';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SendFaxRequest = function(faxId, issueSend) {
    this.faxId = faxId;
    this.issueSend = issueSend;
    this.name = 'SendFax';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CloseIncidentRequest = function(incidentResolution, status) {
    this.incidentResolution = incidentResolution;
    this.status = status;
    this.name = 'CloseIncident';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CloseQuoteRequest = function(quoteClose, status) {
    this.quoteClose = quoteClose;
    this.status = status;
    this.name = 'CloseQuote';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ConvertActivityRequest = function(activityId, activityEntityName, targetEntity, targetEntityName, createCampaignResponse) {
    this.activityId = activityId;
    this.activityEntityName = activityEntityName;
    this.targetEntity = targetEntity;
    this.targetEntityName = targetEntityName;
    this.createCampaignResponse = createCampaignResponse;
    this.name = 'ConvertActivity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ConvertQuoteToSalesOrderRequest = function(quoteId, columnSet, quoteCloseDate, quoteCloseStatus, quoteCloseSubject, quoteCloseDescription, processInstanceId) {
    this.quoteId = quoteId;
    this.columnSet = columnSet;
    this.quoteCloseDate = quoteCloseDate;
    this.quoteCloseStatus = quoteCloseStatus;
    this.quoteCloseSubject = quoteCloseSubject;
    this.quoteCloseDescription = quoteCloseDescription;
    this.processInstanceId = processInstanceId;
    this.name = 'ConvertQuoteToSalesOrder';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ConvertSalesOrderToInvoiceRequest = function(salesOrderId, columnSet) {
    this.salesOrderId = salesOrderId;
    this.columnSet = columnSet;
    this.name = 'ConvertSalesOrderToInvoice';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateFolderRequest = function(folderName, parentEntityReference, documentType, parentLocationId, siteType, validateFolder) {
    this.folderName = folderName;
    this.parentEntityReference = parentEntityReference;
    this.documentType = documentType;
    this.parentLocationId = parentLocationId;
    this.siteType = siteType;
    this.validateFolder = validateFolder;
    this.name = 'CreateFolder';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateFolderAndNewDocumentsRequest = function(folderName, fileNameList, locationType, parentEntityReference, parentLocationId) {
    this.folderName = folderName;
    this.fileNameList = fileNameList;
    this.locationType = locationType;
    this.parentEntityReference = parentEntityReference;
    this.parentLocationId = parentLocationId;
    this.name = 'CreateFolderAndNewDocuments';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SearchDocumentRequest = function(documentId, parentEntityReference) {
    this.documentId = documentId;
    this.parentEntityReference = parentEntityReference;
    this.name = 'SearchDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetBusinessEquipmentRequest = function(equipmentId, businessUnitId) {
    this.equipmentId = equipmentId;
    this.businessUnitId = businessUnitId;
    this.name = 'SetBusinessEquipment';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetParentBusinessUnitRequest = function(businessUnitId, parentId) {
    this.businessUnitId = businessUnitId;
    this.parentId = parentId;
    this.name = 'SetParentBusinessUnit';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetParentTeamRequest = function(teamId, businessId) {
    this.teamId = teamId;
    this.businessId = businessId;
    this.name = 'SetParentTeam';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SendEmailRequest = function(emailId, issueSend, trackingToken) {
    this.emailId = emailId;
    this.issueSend = issueSend;
    this.trackingToken = trackingToken;
    this.name = 'SendEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetDelaySendForEmailRequest = function(emailId, delayTime) {
    this.emailId = emailId;
    this.delayTime = delayTime;
    this.name = 'SetDelaySendForEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetReminderForEmailRequest = function(emailId, reminderTime, reminderType, reminderText) {
    this.emailId = emailId;
    this.reminderTime = reminderTime;
    this.reminderType = reminderType;
    this.reminderText = reminderText;
    this.name = 'SetReminderForEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateDocumentLibrariesRequest = function(documentLibraryNames, url) {
    this.documentLibraryNames = documentLibraryNames;
    this.url = url;
    this.name = 'CreateDocumentLibraries';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateDocumentManagementSettingsRequest = function(siteCollection, folderStructureEntity, entityDocMgmtXml, validateStatus, validateStatusReason) {
    this.siteCollection = siteCollection;
    this.folderStructureEntity = folderStructureEntity;
    this.entityDocMgmtXml = entityDocMgmtXml;
    this.validateStatus = validateStatus;
    this.validateStatusReason = validateStatusReason;
    this.name = 'UpdateDocumentManagementSettings';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.MigrateToS2SRequest = function(siteUrl, enableOneDrive) {
    this.siteUrl = siteUrl;
    this.enableOneDrive = enableOneDrive;
    this.name = 'MigrateToS2S';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateGlobalSharePointSettingsRequest = function(sharePointRealm, isSharePointOnline, useAuthorizationServer) {
    this.sharePointRealm = sharePointRealm;
    this.isSharePointOnline = isSharePointOnline;
    this.useAuthorizationServer = useAuthorizationServer;
    this.name = 'UpdateGlobalSharePointSettings';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveSharePointGlobalSettingsRequest = function() {
    this.name = 'RetrieveSharePointGlobalSettings';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpgradeToS2SRequest = function() {
    this.name = 'UpgradeToS2S';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UploadDocumentRequest = function(content, entity, overwriteExisting, parentEntityReference, folderPath) {
    this.content = content;
    this.entity = entity;
    this.overwriteExisting = overwriteExisting;
    this.parentEntityReference = parentEntityReference;
    this.folderPath = folderPath;
    this.name = 'UploadDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ValidateUrlRequest = function(sharePointUrls) {
    this.sharePointUrls = sharePointUrls;
    this.name = 'ValidateUrl';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateRequest = function(target, suppressDuplicateDetection, calculateMatchCodeSynchronously, solutionUniqueName, maintainLegacyAppServerBehavior, returnRowVersion) {
    this.target = target;
    this.suppressDuplicateDetection = suppressDuplicateDetection;
    this.calculateMatchCodeSynchronously = calculateMatchCodeSynchronously;
    this.solutionUniqueName = solutionUniqueName;
    this.maintainLegacyAppServerBehavior = maintainLegacyAppServerBehavior;
    this.returnRowVersion = returnRowVersion;
    this.name = 'Create';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.ConvertProductToKitRequest = function(productId) {
    this.productId = productId;
    this.name = 'ConvertProductToKit';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ConvertKitToProductRequest = function(kitId) {
    this.kitId = kitId;
    this.name = 'ConvertKitToProduct';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CopyCampaignRequest = function(baseCampaign, saveAsTemplate) {
    this.baseCampaign = baseCampaign;
    this.saveAsTemplate = saveAsTemplate;
    this.name = 'CopyCampaign';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.DeleteDocumentRequest = function(entities, parentEntityReference) {
    this.entities = entities;
    this.parentEntityReference = parentEntityReference;
    this.name = 'DeleteDocument';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.DeleteRequest = function(target, solutionUniqueName, concurrencyBehavior) {
    this.target = target;
    this.solutionUniqueName = solutionUniqueName;
    this.concurrencyBehavior = concurrencyBehavior;
    this.name = 'Delete';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.DisassociateRequest = function(target, relationship, relatedEntities) {
    this.target = target;
    this.relationship = relationship;
    this.relatedEntities = relatedEntities;
    this.name = 'Disassociate';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.DiscardDocumentCheckoutRequest = function(entity, parentEntityReference) {
    this.entity = entity;
    this.parentEntityReference = parentEntityReference;
    this.name = 'DiscardDocumentCheckout';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.EditDocumentPropertiesRequest = function(entity, parentEntityReference) {
    this.entity = entity;
    this.parentEntityReference = parentEntityReference;
    this.name = 'EditDocumentProperties';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExecuteMultipleRequest = function(requests, settings) {
    this.requests = requests;
    this.settings = settings;
    this.name = 'ExecuteMultiple';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Sdk.ExecuteQuickFindRequest = function(searchText, entityGroupName, entityNames, appModule) {
    this.searchText = searchText;
    this.entityGroupName = entityGroupName;
    this.entityNames = entityNames;
    this.appModule = appModule;
    this.name = 'ExecuteQuickFind';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExecuteWorkflowRequest = function(entityId, workflowId, inputArguments) {
    this.entityId = entityId;
    this.workflowId = workflowId;
    this.inputArguments = inputArguments;
    this.name = 'ExecuteWorkflow';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExportTemplateToExcelOnlineRequest = function(template, fetchXml, queryApi, queryParameters) {
    this.template = template;
    this.fetchXml = fetchXml;
    this.queryApi = queryApi;
    this.queryParameters = queryParameters;
    this.name = 'ExportTemplateToExcelOnline';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExportToExcelOnlineRequest = function(view, fetchXml, layoutXml, queryApi, queryParameters) {
    this.view = view;
    this.fetchXml = fetchXml;
    this.layoutXml = layoutXml;
    this.queryApi = queryApi;
    this.queryParameters = queryParameters;
    this.name = 'ExportToExcelOnline';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExportToExcelRequest = function(view, fetchXml, layoutXml, queryApi, queryParameters) {
    this.view = view;
    this.fetchXml = fetchXml;
    this.layoutXml = layoutXml;
    this.queryApi = queryApi;
    this.queryParameters = queryParameters;
    this.name = 'ExportToExcel';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveDocumentTemplatesRequest = function(entityTypeCode, documentType) {
    this.entityTypeCode = entityTypeCode;
    this.documentType = documentType;
    this.name = 'RetrieveDocumentTemplates';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.FulfillSalesOrderRequest = function(orderClose, status) {
    this.orderClose = orderClose;
    this.status = status;
    this.name = 'FulfillSalesOrder';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetValidStatusTransitionRequest = function(incidentId, toStateCode) {
    this.incidentId = incidentId;
    this.toStateCode = toStateCode;
    this.name = 'GetValidStatusTransition';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetQuoteProductsFromOpportunityRequest = function(opportunityId, quoteId) {
    this.opportunityId = opportunityId;
    this.quoteId = quoteId;
    this.name = 'GetQuoteProductsFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetActualDateRequest = function(date) {
    this.date = date;
    this.name = 'GetActualDate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetDataForTopicWordCloudRequest = function(filter) {
    this.filter = filter;
    this.name = 'GetDataForTopicWordCloud';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetEntitiesForAzureMLRequest = function(filter) {
    this.filter = filter;
    this.name = 'GetEntitiesForAzureML';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetFieldListForAzureMLRequest = function(entityName, filter) {
    this.entityName = entityName;
    this.filter = filter;
    this.name = 'GetFieldListForAzureML';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetRelationshipsForAzureMLRequest = function(entityName, filter) {
    this.entityName = entityName;
    this.filter = filter;
    this.name = 'GetRelationshipsForAzureML';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveUserDefaultCurrencyRequest = function() {
    this.name = 'RetrieveUserDefaultCurrency';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest = function(opportunityId, salesOrderId) {
    this.opportunityId = opportunityId;
    this.salesOrderId = salesOrderId;
    this.name = 'GetSalesOrderProductsFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetTrackingTokenEmailRequest = function(subject) {
    this.subject = subject;
    this.name = 'GetTrackingTokenEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.GrantAccessRequest = function(target, principalAccess) {
    this.target = target;
    this.principalAccess = principalAccess;
    this.name = 'GrantAccess';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CopyDynamicListToStaticRequest = function(listId) {
    this.listId = listId;
    this.name = 'CopyDynamicListToStatic';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.InitializeFromRequest = function(entityMoniker, targetEntityName, targetFieldType) {
    this.entityMoniker = entityMoniker;
    this.targetEntityName = targetEntityName;
    this.targetFieldType = targetFieldType;
    this.name = 'InitializeFrom';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.InviteUserRequest = function(userId) {
    this.userId = userId;
    this.name = 'InviteUser';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.IsPartnerSolutionInstalledRequest = function(solutionName) {
    this.solutionName = solutionName;
    this.name = 'IsPartnerSolutionInstalled';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.LockSalesOrderPricingRequest = function(salesOrderId) {
    this.salesOrderId = salesOrderId;
    this.name = 'LockSalesOrderPricing';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.LoseOpportunityRequest = function(opportunityClose, status) {
    this.opportunityClose = opportunityClose;
    this.status = status;
    this.name = 'LoseOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.LockInvoicePricingRequest = function(invoiceId) {
    this.invoiceId = invoiceId;
    this.name = 'LockInvoicePricing';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.ModifyAccessRequest = function(target, principalAccess) {
    this.target = target;
    this.principalAccess = principalAccess;
    this.name = 'ModifyAccess';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetInvoiceProductsFromOpportunityRequest = function(opportunityId, invoiceId) {
    this.opportunityId = opportunityId;
    this.invoiceId = invoiceId;
    this.name = 'GetInvoiceProductsFromOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UnfollowEmailAttachmentRequest = function(activityMimeAttachmentId) {
    this.activityMimeAttachmentId = activityMimeAttachmentId;
    this.name = 'UnfollowEmailAttachment';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetEmailLinkTrackingUrlsRequest = function(trackingId, conversationTrackingId, clientType, emailLinkUrls) {
    this.trackingId = trackingId;
    this.conversationTrackingId = conversationTrackingId;
    this.clientType = clientType;
    this.emailLinkUrls = emailLinkUrls;
    this.name = 'GetEmailLinkTrackingUrls';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetEmailTrackingPixelUrlRequest = function(trackingId, conversationTrackingId, clientType) {
    this.trackingId = trackingId;
    this.conversationTrackingId = conversationTrackingId;
    this.clientType = clientType;
    this.name = 'GetEmailTrackingPixelUrl';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UnlockInvoicePricingRequest = function(invoiceId) {
    this.invoiceId = invoiceId;
    this.name = 'UnlockInvoicePricing';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PickFromQueueRequest = function(queueItemId, workerId, removeQueueItem) {
    this.queueItemId = queueItemId;
    this.workerId = workerId;
    this.removeQueueItem = removeQueueItem;
    this.name = 'PickFromQueue';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.QualifyLeadRequest = function(leadId, createAccount, createContact, createOpportunity, opportunityCurrencyId, opportunityCustomerId, sourceCampaignId, status, suppressDuplicateDetection, processInstanceId) {
    this.leadId = leadId;
    this.createAccount = createAccount;
    this.createContact = createContact;
    this.createOpportunity = createOpportunity;
    this.opportunityCurrencyId = opportunityCurrencyId;
    this.opportunityCustomerId = opportunityCustomerId;
    this.sourceCampaignId = sourceCampaignId;
    this.status = status;
    this.suppressDuplicateDetection = suppressDuplicateDetection;
    this.processInstanceId = processInstanceId;
    this.name = 'QualifyLead';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RenderTemplateRequest = function(template, fetchXml, queryApi, queryParameters) {
    this.template = template;
    this.fetchXml = fetchXml;
    this.queryApi = queryApi;
    this.queryParameters = queryParameters;
    this.name = 'RenderTemplate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RenderTemplateFromViewRequest = function(template, view) {
    this.template = template;
    this.view = view;
    this.name = 'RenderTemplateFromView';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RescheduleRequest = function(target, maintainLegacyAppServerBehavior, returnNotifications) {
    this.target = target;
    this.maintainLegacyAppServerBehavior = maintainLegacyAppServerBehavior;
    this.returnNotifications = returnNotifications;
    this.name = 'Reschedule';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveActiveStageRecordRequest = function(bpfEntityReference) {
    this.bpfEntityReference = bpfEntityReference;
    this.name = 'RetrieveActiveStageRecord';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.RetrieveAncestorsRequest = function(entity, columns) {
    this.entity = entity;
    this.columns = columns;
    this.name = 'RetrieveAncestors';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.RetrieveProductPropertiesRequest = function(parentObject) {
    this.parentObject = parentObject;
    this.name = 'RetrieveProductProperties';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest = function(regardingObject, forDraftRegarding) {
    this.regardingObject = regardingObject;
    this.forDraftRegarding = forDraftRegarding;
    this.name = 'RetrieveEntityDynamicPropertyDefinitions';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RevertProductRequest = function(target) {
    this.target = target;
    this.name = 'RevertProduct';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PublishProductHierarchyRequest = function(target) {
    this.target = target;
    this.name = 'PublishProductHierarchy';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ReleaseToQueueRequest = function(queueItemId) {
    this.queueItemId = queueItemId;
    this.name = 'ReleaseToQueue';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RemoveFromQueueRequest = function(queueItemId) {
    this.queueItemId = queueItemId;
    this.name = 'RemoveFromQueue';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RenewEntitlementRequest = function(entitlementId, status) {
    this.entitlementId = entitlementId;
    this.status = status;
    this.name = 'RenewEntitlement';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveAttributeListRequest = function(regardingObjectTypeCode) {
    this.regardingObjectTypeCode = regardingObjectTypeCode;
    this.name = 'RetrieveAttributeList';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ShouldDisplaySLALimitNotificationRequest = function(regardingObjectTypeCode) {
    this.regardingObjectTypeCode = regardingObjectTypeCode;
    this.name = 'ShouldDisplaySLALimitNotification';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveDefaultStatusForStateRequest = function(entityName, state) {
    this.entityName = entityName;
    this.state = state;
    this.name = 'RetrieveDefaultStatusForState';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveEntitiesForAggregateQueryRequest = function(outerQuery, subQueries) {
    this.outerQuery = outerQuery;
    this.subQueries = subQueries;
    this.name = 'RetrieveEntitiesForAggregateQuery';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest = function(target) {
    this.target = target;
    this.name = 'RetrieveKeyPhrasesForKnowledgeSearch';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest = function(target) {
    this.target = target;
    this.name = 'RetrieveKeyPhrasesForSimilaritySearch';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetQuantityDecimalRequest = function(target, productId, uoMId) {
    this.target = target;
    this.productId = productId;
    this.uoMId = uoMId;
    this.name = 'GetQuantityDecimal';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CanCloseOpportunityRequest = function(opportunityId, quoteId, newStatus) {
    this.opportunityId = opportunityId;
    this.quoteId = quoteId;
    this.newStatus = newStatus;
    this.name = 'CanCloseOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveMultipleRequest = function(query) {
    this.query = query;
    this.name = 'RetrieveMultiple';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.RetrieveUnpublishedMultipleRequest = function(query) {
    this.query = query;
    this.name = 'RetrieveUnpublishedMultiple';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveFilteredProcessesRequest = function(entityLogicalName, appModuleId) {
    this.entityLogicalName = entityLogicalName;
    this.name = 'RetrieveFilteredProcesses';
    this.appModuleId = appModuleId;
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrievePrincipalAccessRequest = function(target, principal) {
    this.target = target;
    this.principal = principal;
    this.name = 'RetrievePrincipalAccess';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrievePersonalSiteUrlRequest = function() {
    this.name = 'RetrievePersonalSiteUrl';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveRequest = function(target, columnSet, relatedEntitiesQuery, returnNotifications, clientRetrieveOptions) {
    this.target = target;
    this.columnSet = columnSet;
    this.relatedEntitiesQuery = relatedEntitiesQuery;
    this.returnNotifications = returnNotifications;
    this.clientRetrieveOptions = clientRetrieveOptions;
    this.name = 'Retrieve';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.RetrieveTenantInfoRequest = function() {
    this.name = 'RetrieveTenantInfo';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ReviseQuoteRequest = function(quoteId, columnSet) {
    this.quoteId = quoteId;
    this.columnSet = columnSet;
    this.name = 'ReviseQuote';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RouteToRequest = function(target, queueItemId) {
    this.target = target;
    this.queueItemId = queueItemId;
    this.name = 'RouteTo';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RevokeAccessRequest = function(target, revokee) {
    this.target = target;
    this.revokee = revokee;
    this.name = 'RevokeAccess';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.ScriptErrorRequest = function(lineNumber, func, fileName, report, reportToWatson, errorReportingPreference, addServerInformation) {
    this.lineNumber = lineNumber;
    this.func = func;
    this.fileName = fileName;
    this.report = report;
    this.reportToWatson = reportToWatson;
    this.errorReportingPreference = errorReportingPreference;
    this.addServerInformation = addServerInformation;
    this.name = 'ScriptError';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetBusinessSystemUserRequest = function(userId, businessId, reassignPrincipal) {
    this.userId = userId;
    this.businessId = businessId;
    this.reassignPrincipal = reassignPrincipal;
    this.name = 'SetBusinessSystemUser';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetDevErrorsRequest = function(userId, organizationId, value) {
    this.userId = userId;
    this.organizationId = organizationId;
    this.value = value;
    this.name = 'SetDevErrors';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetStateRequest = function(entityMoniker, state, status, maintainLegacyAppServerBehavior) {
    this.entityMoniker = entityMoniker;
    this.state = state;
    this.status = status;
    this.maintainLegacyAppServerBehavior = maintainLegacyAppServerBehavior;
    this.name = 'SetState';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SubmitImportedDataRequest = function(importWizardData) {
    this.importWizardData = importWizardData;
    this.name = 'SubmitImportedData';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UnlockSalesOrderPricingRequest = function(salesOrderId) {
    this.salesOrderId = salesOrderId;
    this.name = 'UnlockSalesOrderPricing';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequest = function(queueId, viewId, visualizationId, interactionCentricFilterXml) {
    this.queueId = queueId;
    this.viewId = viewId;
    this.visualizationId = visualizationId;
    this.interactionCentricFilterXml = interactionCentricFilterXml;
    this.name = 'IntersectRecordsWithQueueAndAggregate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PopulateRecommendationCacheForRecordRequest = function(parentRecord) {
    this.parentRecord = parentRecord;
    this.name = 'PopulateRecommendationCacheForRecord';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PopulateRecommendationCacheRequest = function(entityName, itemId) {
    this.entityName = entityName;
    this.itemId = itemId;
    this.name = 'PopulateRecommendationCache';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveItemIdsForRecordRequest = function(parentRecord) {
    this.parentRecord = parentRecord;
    this.name = 'RetrieveItemIdsForRecord';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveRecommendationsCountRequest = function(parentRecord, priceLevelId) {
    this.parentRecord = parentRecord;
    this.priceLevelId = priceLevelId;
    this.name = 'RetrieveRecommendationsCount';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest = function(parentEntityName) {
    this.parentEntityName = parentEntityName;
    this.name = 'RetrieveRecommendationLineItemMetadata';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveRecommendationLineItemProductsRequest = function(parentEntityName, parentEntityId) {
    this.parentEntityName = parentEntityName;
    this.parentEntityId = parentEntityId;
    this.name = 'RetrieveRecommendationLineItemProducts';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateRequest = function(target, suppressDuplicateDetection, calculateMatchCodeSynchronously, solutionUniqueName, maintainLegacyAppServerBehavior, concurrencyBehavior, returnRowVersion) {
    this.target = target;
    this.suppressDuplicateDetection = suppressDuplicateDetection;
    this.calculateMatchCodeSynchronously = calculateMatchCodeSynchronously;
    this.solutionUniqueName = solutionUniqueName;
    this.maintainLegacyAppServerBehavior = maintainLegacyAppServerBehavior;
    this.concurrencyBehavior = concurrencyBehavior;
    this.returnRowVersion = returnRowVersion;
    this.name = 'Update';
    this.xmlNamespace = 'http://schemas.microsoft.com/xrm/2011/Contracts';
}


Xrm.Gen.WhoAmIRequest = function() {
    this.name = 'WhoAmI';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest = function(target) {
    this.target = target;
    this.name = 'ApplyRecordCreationAndUpdateRule';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.WinOpportunityRequest = function(opportunityClose, status) {
    this.opportunityClose = opportunityClose;
    this.status = status;
    this.name = 'WinOpportunity';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.WinQuoteRequest = function(quoteClose, status) {
    this.quoteClose = quoteClose;
    this.status = status;
    this.name = 'WinQuote';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.AddDynamicPropertyRequest = function(regardingObject, dynamicProperty) {
    this.regardingObject = regardingObject;
    this.dynamicProperty = dynamicProperty;
    this.name = 'AddDynamicProperty';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.OverrideDynamicPropertyRequest = function(regardingObject, dynamicProperty) {
    this.regardingObject = regardingObject;
    this.dynamicProperty = dynamicProperty;
    this.name = 'OverrideDynamicProperty';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.OverwriteDynamicPropertyRequest = function(regardingObject, dynamicProperty) {
    this.regardingObject = regardingObject;
    this.dynamicProperty = dynamicProperty;
    this.name = 'OverwriteDynamicProperty';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.FlushMetadataCacheRequest = function() {
    this.name = 'FlushMetadataCache';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.BulkDeleteImportedRecordsRequest = function(targetEntityName, importSequenceNumber, importId, deleteImportHistory, jobName, sendEmailNotification, toRecipients, cCRecipients, recurrencePattern, sourceImportId) {
    this.targetEntityName = targetEntityName;
    this.importSequenceNumber = importSequenceNumber;
    this.importId = importId;
    this.deleteImportHistory = deleteImportHistory;
    this.jobName = jobName;
    this.sendEmailNotification = sendEmailNotification;
    this.toRecipients = toRecipients;
    this.ccRecipients = cCRecipients;
    this.recurrencePattern = recurrencePattern;
    this.sourceImportId = sourceImportId;
    this.name = 'BulkDeleteImportedRecords';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RemoveDynamicPropertyRequest = function(regardingObject, dynamicProperty) {
    this.regardingObject = regardingObject;
    this.dynamicProperty = dynamicProperty;
    this.name = 'RemoveDynamicProperty';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateProductPropertiesRequest = function(propertyInstanceList) {
    this.propertyInstanceList = propertyInstanceList;
    this.name = 'UpdateProductProperties';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.OverrideDynamicPropertiesRequest = function(regardingObject, dynamicPropertyCollection) {
    this.regardingObject = regardingObject;
    this.dynamicPropertyCollection = dynamicPropertyCollection;
    this.name = 'OverrideDynamicProperties';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetDefaultPriceLevelRequest = function(entityName, columnSet) {
    this.entityName = entityName;
    this.columnSet = columnSet;
    this.name = 'GetDefaultPriceLevel';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CanUserSendEmailRequest = function() {
    this.name = 'CanUserSendEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest = function(target) {
    this.target = target;
    this.name = 'RetrieveSharedPrincipalsAndAccess';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PublishAllXmlRequest = function() {
    this.name = 'PublishAllXml';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PublishThemeRequest = function(target) {
    this.target = target;
    this.name = 'PublishTheme';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.TrackEmailRequest = function(exchangeItemId, regarding) {
    this.exchangeItemId = exchangeItemId;
    this.regarding = regarding;
    this.name = 'TrackEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ExecuteDataPerformanceActionRequest = function(queryingUnitId, actionName) {
    this.queryingUnitId = queryingUnitId;
    this.actionName = actionName;
    this.name = 'ExecuteDataPerformanceAction';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PublishXmlRequest = function(parameterXml) {
    this.parameterXml = parameterXml;
    this.name = 'PublishXml';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateKnowledgeArticleVersionRequest = function(source, isMajor) {
    this.source = source;
    this.isMajor = isMajor;
    this.name = 'CreateKnowledgeArticleVersion';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateKnowledgeArticleTranslationRequest = function(source, language, isMajor) {
    this.source = source;
    this.language = language;
    this.isMajor = isMajor;
    this.name = 'CreateKnowledgeArticleTranslation';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.FullTextSearchKnowledgeArticleRequest = function(searchText, useInflection, removeDuplicates, stateCode, queryExpression) {
    this.searchText = searchText;
    this.useInflection = useInflection;
    this.removeDuplicates = removeDuplicates;
    this.stateCode = stateCode;
    this.queryExpression = queryExpression;
    this.name = 'FullTextSearchKnowledgeArticle';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.IncrementKnowledgeArticleViewCountRequest = function(source, viewDate, location, count) {
    this.source = source;
    this.viewDate = viewDate;
    this.location = location;
    this.count = count;
    this.name = 'IncrementKnowledgeArticleViewCount';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PublishKnowledgeArticleRequest = function(entity, copyRelatedProductFromAssociatedPrimary, copyRelatedCategoryFromAssociatedPrimary, publishApprovedRelatedTranslations) {
    this.entity = entity;
    this.copyRelatedProductFromAssociatedPrimary = copyRelatedProductFromAssociatedPrimary;
    this.copyRelatedCategoryFromAssociatedPrimary = copyRelatedCategoryFromAssociatedPrimary;
    this.publishApprovedRelatedTranslations = publishApprovedRelatedTranslations;
    this.name = 'PublishKnowledgeArticle';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.InstantiateTemplateRequest = function(templateId, objectType, objectId) {
    this.templateId = templateId;
    this.objectType = objectType;
    this.objectId = objectId;
    this.name = 'InstantiateTemplate';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.UpdateDelveActionStatusRequest = function(messageId, actionState, recordId) {
    this.messageId = messageId;
    this.actionState = actionState;
    this.recordId = recordId;
    this.name = 'UpdateDelveActionStatus';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CreateEmailReplyDraftRequest = function(messageId, replyText) {
    this.messageId = messageId;
    this.replyText = replyText;
    this.name = 'CreateEmailReplyDraft';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SetActionCardStateRequest = function(actionCardId, actionState, messageId) {
    this.actionCardId = actionCardId;
    this.actionState = actionState;
    this.messageId = messageId;
    this.name = 'SetActionCardState';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.SnoozeActionCardRequest = function(actionCardId) {
    this.actionCardId = actionCardId;
    this.name = 'SnoozeActionCard';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.DismissMissedEmailRequest = function(messageId) {
    this.messageId = messageId;
    this.name = 'DismissMissedEmail';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetRegardingOpportunityIdRequest = function(messageId) {
    this.messageId = messageId;
    this.name = 'GetRegardingOpportunityId';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CompleteExchangeTaskRequest = function(exchangeTaskId) {
    this.exchangeTaskId = exchangeTaskId;
    this.name = 'CompleteExchangeTask';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.PopulateCardRequest = function(userId) {
    this.userId = userId;
    this.name = 'PopulateCard';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.CopySharePointDocumentsRequest = function(destinationLocation, parentEntityReference, folderPath, absoluteUrls, relativeUrls, source) {
    this.destinationLocation = destinationLocation;
    this.parentEntityReference = parentEntityReference;
    this.folderPath = folderPath;
    this.absoluteUrls = absoluteUrls;
    this.relativeUrls = relativeUrls;
    this.source = source;
    this.name = 'CopySharePointDocuments';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.GetSimilarRecordsRequest = function(id, filter, returnFields) {
    this.id = id;
    this.filter = filter;
    this.returnFields = returnFields;
    this.name = 'GetSimilarRecords';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.LogExternalResultsClickedRequest = function(source) {
    this.source = source;
    this.name = 'LogExternalResultsClicked';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Gen.ValidateAppointmentRequest = function(target) {
    this.target = target;
    this.name = 'ValidateAppointment';
    this.xmlNamespace = 'http://schemas.microsoft.com/crm/2011/Contracts';
}


Xrm.Sdk.ScriptErrorRequestExtensions = function() {
}
Xrm.Sdk.ScriptErrorRequestExtensions.requestBody = function(request) {
    return String.format('<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><SendScriptErrorReport xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\"><fileName>{0}</fileName><lineNumber>{1}</lineNumber><function>{2}</function><errorReport>{3}</errorReport><addServerInformation>{4}</addServerInformation><errorReportingPreference>{5}</errorReportingPreference><reportToWatson>{6}</reportToWatson></SendScriptErrorReport></soap:Body></soap:Envelope>', Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(request.fileName), request.lineNumber, Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(request.func), Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.xmlEncode(request.report), request.addServerInformation, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ReportingPreference.toString(request.errorReportingPreference), request.reportToWatson);
}


Xrm.Gen.ExportTemplateToWordResponse = function(wordFile) {
    this.wordFile = wordFile;
    this.name = 'ExportTemplateToWord';
}


Xrm.Gen.CalculateTotalTimeIncidentResponse = function(totalTime) {
    this.totalTime = totalTime;
    this.name = 'CalculateTotalTimeIncident';
}


Xrm.Gen.ExportWordDocumentResponse = function(wordFile) {
    this.wordFile = wordFile;
    this.name = 'ExportWordDocument';
}


Xrm.Gen.GetRIProvisioningStatusResponse = function(provisioningStatus) {
    this.provisioningStatus = provisioningStatus;
    this.name = 'GetRIProvisioningStatus';
}


Xrm.Gen.GetAciMarsConnectorStatusResponse = function(aciMarsConnectorStatus) {
    this.aciMarsConnectorStatus = aciMarsConnectorStatus;
    this.name = 'GetAciMarsConnectorStatus';
}


Xrm.Gen.GetRITenantEndpointUrlResponse = function(tenantEndpointUrl) {
    this.tenantEndpointUrl = tenantEndpointUrl;
    this.name = 'GetRITenantEndpointUrl';
}


Xrm.Gen.IsLegacyCustomerResponse = function(isLegacyCustomer) {
    this.isLegacyCustomer = isLegacyCustomer;
    this.name = 'IsLegacyCustomer';
}


Xrm.Gen.CloneContractResponse = function(entity) {
    this.entity = entity;
    this.name = 'CloneContract';
}


Xrm.Gen.RenewContractResponse = function(entity) {
    this.entity = entity;
    this.name = 'RenewContract';
}


Xrm.Gen.GetQuantityDecimalResponse = function(quantity) {
    this.quantity = quantity;
    this.name = 'GetQuantityDecimal';
}


Xrm.Gen.CanCloseOpportunityResponse = function(canClose) {
    this.canClose = canClose;
    this.name = 'CanCloseOpportunity';
}


Xrm.Gen.SubmitImportedDataResponse = function(importStatus) {
    this.importStatus = importStatus;
    this.name = 'SubmitImportedData';
}


Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'IntersectRecordsWithQueueAndAggregate';
}


Xrm.Gen.GetRegardingOpportunityIdResponse = function(opportunityId) {
    this.opportunityId = opportunityId;
    this.name = 'GetRegardingOpportunityId';
}


Xrm.Gen.GenerateQuoteFromOpportunityResponse = function(entity) {
    this.entity = entity;
    this.name = 'GenerateQuoteFromOpportunity';
}


Xrm.Gen.GenerateSalesOrderFromOpportunityResponse = function(entity) {
    this.entity = entity;
    this.name = 'GenerateSalesOrderFromOpportunity';
}


Xrm.Gen.GenerateInvoiceFromOpportunityResponse = function(entity) {
    this.entity = entity;
    this.name = 'GenerateInvoiceFromOpportunity';
}


Xrm.Gen.AddItemCampaignActivityResponse = function(campaignActivityItemId) {
    this.campaignActivityItemId = campaignActivityItemId;
    this.name = 'AddItemCampaignActivity';
}


Xrm.Gen.AddItemCampaignResponse = function(campaignItemId) {
    this.campaignItemId = campaignItemId;
    this.name = 'AddItemCampaign';
}


Xrm.Sdk.AddItemResponse = function(campaignItemId) {
    this.campaignItemId = campaignItemId;
    this.name = 'AddItem';
}


Xrm.Gen.AddRecurrenceResponse = function(id) {
    this.id = id;
    this.name = 'AddRecurrence';
}


Xrm.Sdk.AddToQueueResponse = function(queueItemId) {
    this.queueItemId = queueItemId;
    this.name = 'AddToQueue';
}


Xrm.Gen.BestTimeToEmailResponse = function(preferredTime, weekDayStart, weekDayEnd, shouldDisplay) {
    this.preferredTime = preferredTime;
    this.weekDayStart = weekDayStart;
    this.weekDayEnd = weekDayEnd;
    this.shouldDisplay = shouldDisplay;
    this.name = 'BestTimeToEmail';
}


Xrm.Gen.BookResponse = function(validationResult, notifications) {
    this.validationResult = validationResult;
    this.notifications = notifications;
    this.name = 'Book';
}


Xrm.Gen.CloneProductResponse = function(clonedProduct) {
    this.clonedProduct = clonedProduct;
    this.name = 'CloneProduct';
}


Xrm.Gen.CloneMobileOfflineProfileResponse = function(cloneMobileOfflineProfile) {
    this.cloneMobileOfflineProfile = cloneMobileOfflineProfile;
    this.name = 'CloneMobileOfflineProfile';
}


Xrm.Gen.CopyCampaignResponse = function(campaignCopyId) {
    this.campaignCopyId = campaignCopyId;
    this.name = 'CopyCampaign';
}


Xrm.Gen.CreateProductsResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'CreateProducts';
}


Xrm.Gen.ConvertCampaignResponseResponse = function(entityReference) {
    this.entityReference = entityReference;
    this.name = 'ConvertCampaignResponse';
}


Xrm.Gen.CopyCampaignResponseResponse = function(campaignResponseId) {
    this.campaignResponseId = campaignResponseId;
    this.name = 'CopyCampaignResponse';
}


Xrm.Gen.FollowEmailAttachmentResponse = function(response) {
    this.response = response;
    this.name = 'FollowEmailAttachment';
}


Xrm.Gen.RetrieveCardDataResponse = function(data) {
    this.data = data;
    this.name = 'RetrieveCardData';
}


Xrm.Gen.SearchDocumentResponse = function(searchLocation, documentLocation) {
    this.searchLocation = searchLocation;
    this.documentLocation = documentLocation;
    this.name = 'SearchDocument';
}


Xrm.Gen.CreateEmailReplyDraftResponse = function(mailWebLink) {
    this.mailWebLink = mailWebLink;
    this.name = 'CreateEmailReplyDraft';
}


Xrm.Gen.CopySharePointDocumentsResponse = function(status) {
    this.status = status;
    this.name = 'CopySharePointDocuments';
}


Xrm.Gen.SendEmailResponse = function(subject) {
    this.subject = subject;
    this.name = 'SendEmail';
}


Xrm.Gen.NewDocumentResponse = function(editLink) {
    this.editLink = editLink;
    this.name = 'NewDocument';
}


Xrm.Sdk.CalculateActualValueOpportunityResponse = function(actualValue) {
    this.value = actualValue;
    this.name = 'CalculateActualValueOpportunity';
}


Xrm.Gen.CreateDocumentLibrariesResponse = function(documentLibraryResult) {
    this.documentLibraryResult = documentLibraryResult;
    this.name = 'CreateDocumentLibraries';
}


Xrm.Gen.CreateFolderResponse = function(locationId) {
    this.locationId = locationId;
    this.name = 'CreateFolder';
}


Xrm.Gen.CreateFolderAndNewDocumentsResponse = function(locationId) {
    this.locationId = locationId;
    this.name = 'CreateFolderAndNewDocuments';
}


Xrm.Gen.ValidateUrlResponse = function(urlValidationResult) {
    this.urlValidationResult = urlValidationResult;
    this.name = 'ValidateUrl';
}


Xrm.Gen.ConvertActivityResponse = function(recordId) {
    this.recordId = recordId;
    this.name = 'ConvertActivity';
}


Xrm.Gen.ConvertQuoteToSalesOrderResponse = function(entity) {
    this.entity = entity;
    this.name = 'ConvertQuoteToSalesOrder';
}


Xrm.Gen.ConvertSalesOrderToInvoiceResponse = function(entity) {
    this.entity = entity;
    this.name = 'ConvertSalesOrderToInvoice';
}


Xrm.Gen.CreateResponse = function(id, entityReference) {
    this.id = id;
    this.entityReference = entityReference;
    this.name = 'Create';
}


Xrm.Gen.ExecuteMultipleResponse = function(isFaulted, responses) {
    this.isFaulted = isFaulted;
    this.responses = responses;
    this.name = 'ExecuteMultiple';
}


Xrm.Sdk.ExecuteQuickFindResponse = function(result) {
    this.result = result;
    this.name = 'ExecuteQuickFind';
}


Xrm.Gen.ExecuteWorkflowResponse = function(id) {
    this.id = id;
    this.name = 'ExecuteWorkflow';
}


Xrm.Gen.ExportTemplateToExcelOnlineResponse = function(editLink) {
    this.editLink = editLink;
    this.name = 'ExportTemplateToExcelOnline';
}


Xrm.Gen.ExportToExcelOnlineResponse = function(editLink) {
    this.editLink = editLink;
    this.name = 'ExportToExcelOnline';
}


Xrm.Gen.ExportToExcelResponse = function(excelFile) {
    this.excelFile = excelFile;
    this.name = 'ExportToExcel';
}


Xrm.Gen.RetrieveDocumentTemplatesResponse = function(documentTemplateEntityCollection) {
    this.documentTemplateEntityCollection = documentTemplateEntityCollection;
    this.name = 'RetrieveDocumentTemplates';
}


Xrm.Gen.GetActualDateResponse = function(result) {
    this.result = result;
    this.name = 'GetActualDate';
}


Xrm.Gen.GetDataForTopicWordCloudResponse = function(topics) {
    this.topics = topics;
    this.name = 'GetDataForTopicWordCloud';
}


Xrm.Gen.RetrieveUserDefaultCurrencyResponse = function(currency) {
    this.currency = currency;
    this.name = 'RetrieveUserDefaultCurrency';
}


Xrm.Gen.GetEntitiesForAzureMLResponse = function(result) {
    this.result = result;
    this.name = 'GetEntitiesForAzureML';
}


Xrm.Gen.GetFieldListForAzureMLResponse = function(result) {
    this.result = result;
    this.name = 'GetFieldListForAzureML';
}


Xrm.Gen.GetRelationshipsForAzureMLResponse = function(result) {
    this.result = result;
    this.name = 'GetRelationshipsForAzureML';
}


Xrm.Gen.GetTrackingTokenEmailResponse = function(trackingToken) {
    this.trackingToken = trackingToken;
    this.name = 'GetTrackingTokenEmail';
}


Xrm.Gen.CopyDynamicListToStaticResponse = function(staticListId) {
    this.staticListId = staticListId;
    this.name = 'CopyDynamicListToStatic';
}


Xrm.Gen.GetValidStatusTransitionResponse = function(result) {
    this.result = result;
    this.name = 'GetValidStatusTransition';
}


Xrm.Gen.InitializeFromResponse = function(entity) {
    this.entity = entity;
    this.name = 'InitializeFrom';
}


Xrm.Gen.InviteUserResponse = function(invitationToken) {
    this.invitationToken = invitationToken;
    this.name = 'InviteUser';
}


Xrm.Gen.IsPartnerSolutionInstalledResponse = function(isPartnerSolutionInstalled) {
    this.isPartnerSolutionInstalled = isPartnerSolutionInstalled;
    this.name = 'IsPartnerSolutionInstalled';
}


Xrm.Gen.FetchSiteUrlResponse = function(siteAndLocationUrl) {
    this.siteAndLocationUrl = siteAndLocationUrl;
    this.name = 'FetchSiteUrl';
}


Xrm.Gen.AddOrEditLocationResponse = function(locationId) {
    this.locationId = locationId;
    this.name = 'AddOrEditLocation';
}


Xrm.Gen.QualifyLeadResponse = function(createdEntities) {
    this.createdEntities = createdEntities;
    this.name = 'QualifyLead';
}


Xrm.Gen.RenderTemplateResponse = function(excelFile) {
    this.excelFile = excelFile;
    this.name = 'RenderTemplate';
}


Xrm.Gen.RenderTemplateFromViewResponse = function(excelFile) {
    this.excelFile = excelFile;
    this.name = 'RenderTemplateFromView';
}


Xrm.Gen.RenewEntitlementResponse = function(entity) {
    this.entity = entity;
    this.name = 'RenewEntitlement';
}


Xrm.Gen.RescheduleResponse = function(validationResult, notifications) {
    this.validationResult = validationResult;
    this.notifications = notifications;
    this.name = 'Reschedule';
}


Xrm.Gen.RetrieveActiveStageRecordResponse = function(entity) {
    this.entity = entity;
    this.name = 'RetrieveActiveStageRecord';
}


Xrm.Gen.RetrieveDefaultStatusForStateResponse = function(status) {
    this.status = status;
    this.name = 'RetrieveDefaultStatusForState';
}


Xrm.Gen.RetrieveEntitiesForAggregateQueryResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveEntitiesForAggregateQuery';
}


Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse = function(keyPhrases) {
    this.keyPhrases = keyPhrases;
    this.name = 'RetrieveKeyPhrasesForKnowledgeSearch';
}


Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse = function(keyPhrases) {
    this.keyPhrases = keyPhrases;
    this.name = 'RetrieveKeyPhrasesForSimilaritySearch';
}


Xrm.Gen.RetrieveMultipleResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveMultiple';
}


Xrm.Gen.RetrieveUnpublishedMultipleResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveUnpublishedMultiple';
}


Xrm.Gen.RetrieveFilteredProcessesResponse = function(processes) {
    this.processes = processes;
    this.name = 'RetrieveFilteredProcesses';
}


Xrm.Gen.RetrievePrincipalAccessResponse = function(accessRights) {
    this.accessRights = accessRights;
    this.name = 'RetrievePrincipalAccess';
}


Xrm.Gen.RetrievePersonalSiteUrlResponse = function(personalSiteUrl) {
    this.personalSiteUrl = personalSiteUrl;
    this.name = 'RetrievePersonalSiteUrl';
}


Xrm.Gen.RetrieveResponse = function(entity, notifications) {
    this.entity = entity;
    this.notifications = notifications;
    this.name = 'Retrieve';
}


Xrm.Gen.RetrieveTenantInfoResponse = function(tenantInfo) {
    this.tenantInfo = tenantInfo;
    this.name = 'RetrieveTenantInfo';
}


Xrm.Gen.ReviseQuoteResponse = function(entity) {
    this.entity = entity;
    this.name = 'ReviseQuote';
}


Xrm.Gen.WhoAmIResponse = function(userId, businessUnitId, organizationId) {
    this.userId = userId;
    this.businessUnitId = businessUnitId;
    this.organizationId = organizationId;
    this.name = 'WhoAmI';
}


Xrm.Gen.AddDynamicPropertyResponse = function(id, dynamicPropertyId) {
    this.id = id;
    this.dynamicPropertyId = dynamicPropertyId;
    this.name = 'AddDynamicProperty';
}


Xrm.Sdk.RetrieveAncestorsResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveAncestors';
}


Xrm.Gen.OverrideDynamicPropertyResponse = function(id, dynamicPropertyId) {
    this.id = id;
    this.dynamicPropertyId = dynamicPropertyId;
    this.name = 'OverrideDynamicProperty';
}


Xrm.Gen.OverwriteDynamicPropertyResponse = function(id, dynamicPropertyId) {
    this.id = id;
    this.dynamicPropertyId = dynamicPropertyId;
    this.name = 'OverwriteDynamicProperty';
}


Xrm.Gen.BulkDeleteImportedRecordsResponse = function(jobId) {
    this.jobId = jobId;
    this.name = 'BulkDeleteImportedRecords';
}


Xrm.Gen.RetrieveProductPropertiesResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveProductProperties';
}


Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'RetrieveEntityDynamicPropertyDefinitions';
}


Xrm.Gen.GetDefaultPriceLevelResponse = function(priceLevels) {
    this.priceLevels = priceLevels;
    this.name = 'GetDefaultPriceLevel';
}


Xrm.Gen.CanUserSendEmailResponse = function(hasPrivileges) {
    this.hasPrivileges = hasPrivileges;
    this.name = 'CanUserSendEmail';
}


Xrm.Gen.RetrieveAttributeListResponse = function(result) {
    this.result = result;
    this.name = 'RetrieveAttributeList';
}


Xrm.Gen.ShouldDisplaySLALimitNotificationResponse = function(result) {
    this.result = result;
    this.name = 'ShouldDisplaySLALimitNotification';
}


Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse = function(principalAccesses) {
    this.principalAccesses = principalAccesses;
    this.name = 'RetrieveSharedPrincipalsAndAccess';
}


Xrm.Gen.RetrieveSharePointGlobalSettingsResponse = function(sharePointGlobalSetting) {
    this.sharePointGlobalSetting = sharePointGlobalSetting;
    this.name = 'RetrieveSharePointGlobalSettings';
}


Xrm.Gen.CreateKnowledgeArticleTranslationResponse = function(createKnowledgeArticleTranslation) {
    this.createKnowledgeArticleTranslation = createKnowledgeArticleTranslation;
    this.name = 'CreateKnowledgeArticleTranslation';
}


Xrm.Gen.CreateKnowledgeArticleVersionResponse = function(createKnowledgeArticleVersion) {
    this.createKnowledgeArticleVersion = createKnowledgeArticleVersion;
    this.name = 'CreateKnowledgeArticleVersion';
}


Xrm.Gen.FullTextSearchKnowledgeArticleResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'FullTextSearchKnowledgeArticle';
}


Xrm.Gen.IncrementKnowledgeArticleViewCountResponse = function(incrementKnowledgeArticleViewCount) {
    this.incrementKnowledgeArticleViewCount = incrementKnowledgeArticleViewCount;
    this.name = 'IncrementKnowledgeArticleViewCount';
}


Xrm.Gen.PublishKnowledgeArticleResponse = function(isPublish) {
    this.isPublish = isPublish;
    this.name = 'PublishKnowledgeArticle';
}


Xrm.Gen.InstantiateTemplateResponse = function(entityCollection) {
    this.entityCollection = entityCollection;
    this.name = 'InstantiateTemplate';
}


Xrm.Gen.GetSimilarRecordsResponse = function(entityCollection) {
    this.name = 'GetSimilarRecords';
    this.entityCollection = entityCollection;
}


Xrm.Gen.PopulateRecommendationCacheForRecordResponse = function(showAzureRecommendations) {
    this.showAzureRecommendations = showAzureRecommendations;
    this.name = 'PopulateRecommendationCacheForRecord';
}


Xrm.Gen.PopulateRecommendationCacheResponse = function(showAzureRecommendations) {
    this.showAzureRecommendations = showAzureRecommendations;
    this.name = 'PopulateRecommendationCache';
}


Xrm.Gen.RetrieveItemIdsForRecordResponse = function(itemIds) {
    this.itemIds = itemIds;
    this.name = 'RetrieveItemIdsForRecord';
}


Xrm.Gen.RetrieveRecommendationsCountResponse = function(recommendationsCount) {
    this.recommendationsCount = recommendationsCount;
    this.name = 'RetrieveRecommendationsCount';
}


Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse = function(recommendationLineItemMetadata) {
    this.recommendationLineItemMetadata = recommendationLineItemMetadata;
    this.name = 'RetrieveRecommendationLineItemMetadata';
}


Xrm.Gen.RetrieveRecommendationLineItemProductsResponse = function(recommendationLineItemProducts) {
    this.recommendationLineItemProducts = recommendationLineItemProducts;
    this.name = 'RetrieveRecommendationLineItemProducts';
}


Xrm.Gen.PopulateCardResponse = function(data) {
    this.data = data;
    this.name = 'PopulateCard';
}


Xrm.Gen.ValidateAppointmentResponse = function(validationResult) {
    this.validationResult = validationResult;
    this.name = 'ValidateAppointment';
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL');

Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.EntityOperation = function(entity, operationPerformed, entityType) {
    this.$y_0 = entity;
    this.$4J_0 = operationPerformed;
    this.$3D_0 = entityType;
}
Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.EntityOperation.prototype = {
    $y_0: null,
    $4J_0: 0,
    $3D_0: null,
    
    get_entity: function() {
        return this.$y_0;
    },
    
    set_entity: function(value) {
        this.$y_0 = value;
        return value;
    },
    
    get_operationPerformed: function() {
        return this.$4J_0;
    },
    
    set_operationPerformed: function(value) {
        this.$4J_0 = value;
        return value;
    },
    
    get_entityType: function() {
        return this.$3D_0;
    },
    
    set_entityType: function(value) {
        this.$3D_0 = value;
        return value;
    }
}


Type.registerNamespace('Microsoft.Crm.Client.Core.Offline.Upsync.Common');

Microsoft.Crm.Client.Core.Offline.Upsync.Common.OperatorType = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.OperatorType.prototype = {
    and: 0, 
    or: 1
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.OperatorType.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.OperatorType', false);


Microsoft.Crm.Client.Core.Offline.Upsync.Common.SQLOperationType = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.SQLOperationType.prototype = {
    create: 1, 
    Delete: 2, 
    update: 3, 
    retrieve: 4
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.SQLOperationType.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.SQLOperationType', false);


Microsoft.Crm.Client.Core.Offline.Upsync.Common.ConditionType = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.ConditionType.prototype = {
    equals: 0, 
    notEquals: 1, 
    lessThan: 2, 
    lessThanEqualTo: 3, 
    greaterThan: 4, 
    greaterThanEqualTo: 5, 
    isNull: 6, 
    In: 7
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.ConditionType.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.ConditionType', false);


Microsoft.Crm.Client.Core.Offline.Upsync.Common.ParenthesisType = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.ParenthesisType.prototype = {
    start: 0, 
    end: 1, 
    none: 2
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.ParenthesisType.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.ParenthesisType', false);


Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowState = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowState.prototype = {
    draft: 0, 
    published: 1
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowState.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowState', false);


Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowBusinessProcessType = function() {}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowBusinessProcessType.prototype = {
    businessFlow: 0, 
    taskFlow: 1
}
Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowBusinessProcessType.registerEnum('Microsoft.Crm.Client.Core.Offline.Upsync.Common.WorkflowBusinessProcessType', false);


Microsoft.Crm.Client.Core.Models.StateCodeHelper.registerClass('Microsoft.Crm.Client.Core.Models.StateCodeHelper');
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.registerClass('Microsoft.Crm.Client.Core.Storage.Common.AllColumns', null, Microsoft.Crm.Client.Core.Storage.Common.IColumnSet);
Microsoft.Crm.Client.Core.Storage.Common.ColumnSet.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ColumnSet', null, Microsoft.Crm.Client.Core.Storage.Common.IColumnSet, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair.registerClass('Microsoft.Crm.Client.Core.Storage.Common.EntityAttributeMetadataPair');
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.registerClass('Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter');
Microsoft.Crm.Client.Core.Storage.Common.StorageConstants.registerClass('Microsoft.Crm.Client.Core.Storage.Common.StorageConstants');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.WebServiceCallRetryPolicy');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AliasedValue', null, Microsoft.Crm.Client.Core.Framework.IAlias, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata', null, Microsoft.Crm.Client.Core.Storage.Common.IAttributeMetadata, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadataCollection');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributePrivilege', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Xrm.Gen.BusinessNotification.registerClass('Xrm.Gen.BusinessNotification');
Xrm.Gen.BusinessNotificationParameter.registerClass('Xrm.Gen.BusinessNotificationParameter');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorData');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.DescriptorSet');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection', null, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey, Microsoft.Crm.Client.Core.Framework.ICollection, Microsoft.Crm.Client.Core.Framework.ICacheSize);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata', null, Microsoft.Crm.Client.Core.Storage.Common.IEntityMetadata, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadataCollection');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord', null, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey, Microsoft.Crm.Client.Core.Framework.ICacheSize);
Xrm.Objects.EntityReference.registerClass('Xrm.Objects.EntityReference', null, Microsoft.Crm.Client.Core.Framework.IReference, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Xrm.Gen.ErrorInfo.registerClass('Xrm.Gen.ErrorInfo');
Xrm.Sdk.ExecuteMultipleResponseItem.registerClass('Xrm.Sdk.ExecuteMultipleResponseItem');
Xrm.Gen.ExecuteMultipleSettings.registerClass('Xrm.Gen.ExecuteMultipleSettings');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OfflineProfile', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionMetadata', null, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Framework.IPicklistItem, Microsoft.Crm.Client.Core.Framework.IOptionMetadata);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OptionSetMetadata', null, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Framework.IOptionSetMetadata);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Xrm.Sdk.QuickFindResult.registerClass('Xrm.Sdk.QuickFindResult', null, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IEntityRecordList);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TextBasedFacetResult.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TextBasedFacetResult', Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RangeBasedFacetResult.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RangeBasedFacetResult', Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResult);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultList.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.FacetResultList');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.QuickFindResultCollection', null, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.IMultipleEntityRecordCollection);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Xrm.Gen.ResourceInfo.registerClass('Xrm.Gen.ResourceInfo');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RolePrivilege', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SecurityPrivilegeMetadata', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ServerContext', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord', null, Microsoft.Crm.Client.Core.Framework.ISerializable, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TimeZoneDefinition', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Xrm.Gen.TraceInfo.registerClass('Xrm.Gen.TraceInfo');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Xrm.Gen.ValidationResult.registerClass('Xrm.Gen.ValidationResult');
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess.registerClass('Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.PrincipalAccess');
Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper.registerClass('Microsoft.Crm.Client.Core.Models.CustomControls.CustomControlAbstractFieldAccessHelper', null, Microsoft.Crm.Client.Core.Models.CustomControls.ICustomControlFieldAccessHelper);
Xrm.Sdk.Request.registerClass('Xrm.Sdk.Request');
Xrm.Sdk.Response.registerClass('Xrm.Sdk.Response');
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails', null, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.DataApi.Query.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.Query');
Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.AggregateQuery', Microsoft.Crm.Client.Core.Storage.DataApi.Query);
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery');
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery', Microsoft.Crm.Client.Core.Storage.DataApi.Query, Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ICacheKey);
Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery.prototype.toString = Microsoft.Crm.Client.Core.Storage.DataApi.Query.prototype.toString;
Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.RelatedEntityQuery', Microsoft.Crm.Client.Core.Storage.DataApi.KeyQuery);
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.UserContext', null, Microsoft.Crm.Client.Core.Framework.IUserContext, Microsoft.Crm.Client.Core.Framework.ISerializable);
Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges.registerClass('Microsoft.Crm.Client.Core.Storage.DataApi.UserPrivileges');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault.registerClass('Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Faults.OrganizationServiceFault');
Xrm.Gen.RetrieveCardDataRequest.registerClass('Xrm.Gen.RetrieveCardDataRequest');
Xrm.Gen.ToggleGuidedHelpRequest.registerClass('Xrm.Gen.ToggleGuidedHelpRequest');
Xrm.Gen.MergeRequest.registerClass('Xrm.Gen.MergeRequest');
Xrm.Gen.AddItemCampaignActivityRequest.registerClass('Xrm.Gen.AddItemCampaignActivityRequest');
Xrm.Gen.SnoozeExchangeActionCardsRequest.registerClass('Xrm.Gen.SnoozeExchangeActionCardsRequest');
Xrm.Gen.AddItemCampaignRequest.registerClass('Xrm.Gen.AddItemCampaignRequest');
Xrm.Sdk.AddItemRequest.registerClass('Xrm.Sdk.AddItemRequest');
Xrm.Gen.AddRecurrenceRequest.registerClass('Xrm.Gen.AddRecurrenceRequest');
Xrm.Sdk.AddToQueueRequest.registerClass('Xrm.Sdk.AddToQueueRequest');
Xrm.Gen.BestTimeToEmailRequest.registerClass('Xrm.Gen.BestTimeToEmailRequest');
Xrm.Gen.GenerateQuoteFromOpportunityRequest.registerClass('Xrm.Gen.GenerateQuoteFromOpportunityRequest');
Xrm.Gen.GenerateInvoiceFromOpportunityRequest.registerClass('Xrm.Gen.GenerateInvoiceFromOpportunityRequest');
Xrm.Gen.GenerateSalesOrderFromOpportunityRequest.registerClass('Xrm.Gen.GenerateSalesOrderFromOpportunityRequest');
Xrm.Gen.AssignRequest.registerClass('Xrm.Gen.AssignRequest');
Xrm.Gen.AssignAllRecordsTeamRequest.registerClass('Xrm.Gen.AssignAllRecordsTeamRequest');
Xrm.Gen.AssociateRequest.registerClass('Xrm.Gen.AssociateRequest');
Xrm.Gen.AddOrEditLocationRequest.registerClass('Xrm.Gen.AddOrEditLocationRequest');
Xrm.Gen.FetchSiteUrlRequest.registerClass('Xrm.Gen.FetchSiteUrlRequest');
Xrm.Gen.FollowEmailAttachmentRequest.registerClass('Xrm.Gen.FollowEmailAttachmentRequest');
Xrm.Gen.DismissExchangeEnhancedActionCardsRequest.registerClass('Xrm.Gen.DismissExchangeEnhancedActionCardsRequest');
Xrm.Gen.BookRequest.registerClass('Xrm.Gen.BookRequest');
Xrm.Sdk.CalculateActualValueOpportunityRequest.registerClass('Xrm.Sdk.CalculateActualValueOpportunityRequest');
Xrm.Gen.CloneContractRequest.registerClass('Xrm.Gen.CloneContractRequest');
Xrm.Gen.ExportTemplateToWordRequest.registerClass('Xrm.Gen.ExportTemplateToWordRequest');
Xrm.Gen.CalculateTotalTimeIncidentRequest.registerClass('Xrm.Gen.CalculateTotalTimeIncidentRequest');
Xrm.Gen.ExportWordDocumentRequest.registerClass('Xrm.Gen.ExportWordDocumentRequest');
Xrm.Gen.GetRIProvisioningStatusRequest.registerClass('Xrm.Gen.GetRIProvisioningStatusRequest');
Xrm.Gen.GetAciMarsConnectorStatusRequest.registerClass('Xrm.Gen.GetAciMarsConnectorStatusRequest');
Xrm.Gen.GetRITenantEndpointUrlRequest.registerClass('Xrm.Gen.GetRITenantEndpointUrlRequest');
Xrm.Gen.IsLegacyCustomerRequest.registerClass('Xrm.Gen.IsLegacyCustomerRequest');
Xrm.Gen.SetFeatureStatusRequest.registerClass('Xrm.Gen.SetFeatureStatusRequest');
Xrm.Gen.StartRIProvisioningRequest.registerClass('Xrm.Gen.StartRIProvisioningRequest');
Xrm.Gen.UpdateRITenantInfoRequest.registerClass('Xrm.Gen.UpdateRITenantInfoRequest');
Xrm.Gen.SetWordTemplateRequest.registerClass('Xrm.Gen.SetWordTemplateRequest');
Xrm.Gen.RenewContractRequest.registerClass('Xrm.Gen.RenewContractRequest');
Xrm.Gen.CancelContractRequest.registerClass('Xrm.Gen.CancelContractRequest');
Xrm.Gen.CancelSalesOrderRequest.registerClass('Xrm.Gen.CancelSalesOrderRequest');
Xrm.Gen.CloneProductRequest.registerClass('Xrm.Gen.CloneProductRequest');
Xrm.Gen.CloneMobileOfflineProfileRequest.registerClass('Xrm.Gen.CloneMobileOfflineProfileRequest');
Xrm.Gen.CheckInDocumentRequest.registerClass('Xrm.Gen.CheckInDocumentRequest');
Xrm.Gen.CheckoutDocumentRequest.registerClass('Xrm.Gen.CheckoutDocumentRequest');
Xrm.Gen.ConvertCampaignResponseRequest.registerClass('Xrm.Gen.ConvertCampaignResponseRequest');
Xrm.Gen.CopyCampaignResponseRequest.registerClass('Xrm.Gen.CopyCampaignResponseRequest');
Xrm.Gen.CreateProductsRequest.registerClass('Xrm.Gen.CreateProductsRequest');
Xrm.Gen.DeleteOpenInstancesRequest.registerClass('Xrm.Gen.DeleteOpenInstancesRequest');
Xrm.Gen.NewDocumentRequest.registerClass('Xrm.Gen.NewDocumentRequest');
Xrm.Gen.CreateAndAssociateRequest.registerClass('Xrm.Gen.CreateAndAssociateRequest');
Xrm.Sdk.AssociateKnowledgeArticleRequest.registerClass('Xrm.Sdk.AssociateKnowledgeArticleRequest');
Xrm.Sdk.DisassociateKnowledgeArticleRequest.registerClass('Xrm.Sdk.DisassociateKnowledgeArticleRequest');
Xrm.Gen.SendFaxRequest.registerClass('Xrm.Gen.SendFaxRequest');
Xrm.Gen.CloseIncidentRequest.registerClass('Xrm.Gen.CloseIncidentRequest');
Xrm.Gen.CloseQuoteRequest.registerClass('Xrm.Gen.CloseQuoteRequest');
Xrm.Gen.ConvertActivityRequest.registerClass('Xrm.Gen.ConvertActivityRequest');
Xrm.Gen.ConvertQuoteToSalesOrderRequest.registerClass('Xrm.Gen.ConvertQuoteToSalesOrderRequest');
Xrm.Gen.ConvertSalesOrderToInvoiceRequest.registerClass('Xrm.Gen.ConvertSalesOrderToInvoiceRequest');
Xrm.Gen.CreateFolderRequest.registerClass('Xrm.Gen.CreateFolderRequest');
Xrm.Gen.CreateFolderAndNewDocumentsRequest.registerClass('Xrm.Gen.CreateFolderAndNewDocumentsRequest');
Xrm.Gen.SearchDocumentRequest.registerClass('Xrm.Gen.SearchDocumentRequest');
Xrm.Gen.SetBusinessEquipmentRequest.registerClass('Xrm.Gen.SetBusinessEquipmentRequest');
Xrm.Gen.SetParentBusinessUnitRequest.registerClass('Xrm.Gen.SetParentBusinessUnitRequest');
Xrm.Gen.SetParentTeamRequest.registerClass('Xrm.Gen.SetParentTeamRequest');
Xrm.Gen.SendEmailRequest.registerClass('Xrm.Gen.SendEmailRequest');
Xrm.Gen.SetDelaySendForEmailRequest.registerClass('Xrm.Gen.SetDelaySendForEmailRequest');
Xrm.Gen.SetReminderForEmailRequest.registerClass('Xrm.Gen.SetReminderForEmailRequest');
Xrm.Gen.CreateDocumentLibrariesRequest.registerClass('Xrm.Gen.CreateDocumentLibrariesRequest');
Xrm.Gen.UpdateDocumentManagementSettingsRequest.registerClass('Xrm.Gen.UpdateDocumentManagementSettingsRequest');
Xrm.Gen.MigrateToS2SRequest.registerClass('Xrm.Gen.MigrateToS2SRequest');
Xrm.Gen.UpdateGlobalSharePointSettingsRequest.registerClass('Xrm.Gen.UpdateGlobalSharePointSettingsRequest');
Xrm.Gen.RetrieveSharePointGlobalSettingsRequest.registerClass('Xrm.Gen.RetrieveSharePointGlobalSettingsRequest');
Xrm.Gen.UpgradeToS2SRequest.registerClass('Xrm.Gen.UpgradeToS2SRequest');
Xrm.Gen.UploadDocumentRequest.registerClass('Xrm.Gen.UploadDocumentRequest');
Xrm.Gen.ValidateUrlRequest.registerClass('Xrm.Gen.ValidateUrlRequest');
Xrm.Gen.CreateRequest.registerClass('Xrm.Gen.CreateRequest');
Xrm.Gen.ConvertProductToKitRequest.registerClass('Xrm.Gen.ConvertProductToKitRequest');
Xrm.Gen.ConvertKitToProductRequest.registerClass('Xrm.Gen.ConvertKitToProductRequest');
Xrm.Gen.CopyCampaignRequest.registerClass('Xrm.Gen.CopyCampaignRequest');
Xrm.Gen.DeleteDocumentRequest.registerClass('Xrm.Gen.DeleteDocumentRequest');
Xrm.Gen.DeleteRequest.registerClass('Xrm.Gen.DeleteRequest');
Xrm.Gen.DisassociateRequest.registerClass('Xrm.Gen.DisassociateRequest');
Xrm.Gen.DiscardDocumentCheckoutRequest.registerClass('Xrm.Gen.DiscardDocumentCheckoutRequest');
Xrm.Gen.EditDocumentPropertiesRequest.registerClass('Xrm.Gen.EditDocumentPropertiesRequest');
Xrm.Gen.ExecuteMultipleRequest.registerClass('Xrm.Gen.ExecuteMultipleRequest');
Xrm.Sdk.ExecuteQuickFindRequest.registerClass('Xrm.Sdk.ExecuteQuickFindRequest');
Xrm.Gen.ExecuteWorkflowRequest.registerClass('Xrm.Gen.ExecuteWorkflowRequest');
Xrm.Gen.ExportTemplateToExcelOnlineRequest.registerClass('Xrm.Gen.ExportTemplateToExcelOnlineRequest');
Xrm.Gen.ExportToExcelOnlineRequest.registerClass('Xrm.Gen.ExportToExcelOnlineRequest');
Xrm.Gen.ExportToExcelRequest.registerClass('Xrm.Gen.ExportToExcelRequest');
Xrm.Gen.RetrieveDocumentTemplatesRequest.registerClass('Xrm.Gen.RetrieveDocumentTemplatesRequest');
Xrm.Gen.FulfillSalesOrderRequest.registerClass('Xrm.Gen.FulfillSalesOrderRequest');
Xrm.Gen.GetValidStatusTransitionRequest.registerClass('Xrm.Gen.GetValidStatusTransitionRequest');
Xrm.Gen.GetQuoteProductsFromOpportunityRequest.registerClass('Xrm.Gen.GetQuoteProductsFromOpportunityRequest');
Xrm.Gen.GetActualDateRequest.registerClass('Xrm.Gen.GetActualDateRequest');
Xrm.Gen.GetDataForTopicWordCloudRequest.registerClass('Xrm.Gen.GetDataForTopicWordCloudRequest');
Xrm.Gen.GetEntitiesForAzureMLRequest.registerClass('Xrm.Gen.GetEntitiesForAzureMLRequest');
Xrm.Gen.GetFieldListForAzureMLRequest.registerClass('Xrm.Gen.GetFieldListForAzureMLRequest');
Xrm.Gen.GetRelationshipsForAzureMLRequest.registerClass('Xrm.Gen.GetRelationshipsForAzureMLRequest');
Xrm.Gen.RetrieveUserDefaultCurrencyRequest.registerClass('Xrm.Gen.RetrieveUserDefaultCurrencyRequest');
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest.registerClass('Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest');
Xrm.Gen.GetTrackingTokenEmailRequest.registerClass('Xrm.Gen.GetTrackingTokenEmailRequest');
Xrm.Sdk.GrantAccessRequest.registerClass('Xrm.Sdk.GrantAccessRequest');
Xrm.Gen.CopyDynamicListToStaticRequest.registerClass('Xrm.Gen.CopyDynamicListToStaticRequest');
Xrm.Gen.InitializeFromRequest.registerClass('Xrm.Gen.InitializeFromRequest');
Xrm.Gen.InviteUserRequest.registerClass('Xrm.Gen.InviteUserRequest');
Xrm.Gen.IsPartnerSolutionInstalledRequest.registerClass('Xrm.Gen.IsPartnerSolutionInstalledRequest');
Xrm.Gen.LockSalesOrderPricingRequest.registerClass('Xrm.Gen.LockSalesOrderPricingRequest');
Xrm.Gen.LoseOpportunityRequest.registerClass('Xrm.Gen.LoseOpportunityRequest');
Xrm.Gen.LockInvoicePricingRequest.registerClass('Xrm.Gen.LockInvoicePricingRequest');
Xrm.Sdk.ModifyAccessRequest.registerClass('Xrm.Sdk.ModifyAccessRequest');
Xrm.Gen.GetInvoiceProductsFromOpportunityRequest.registerClass('Xrm.Gen.GetInvoiceProductsFromOpportunityRequest');
Xrm.Gen.UnfollowEmailAttachmentRequest.registerClass('Xrm.Gen.UnfollowEmailAttachmentRequest');
Xrm.Gen.GetEmailLinkTrackingUrlsRequest.registerClass('Xrm.Gen.GetEmailLinkTrackingUrlsRequest');
Xrm.Gen.GetEmailTrackingPixelUrlRequest.registerClass('Xrm.Gen.GetEmailTrackingPixelUrlRequest');
Xrm.Gen.UnlockInvoicePricingRequest.registerClass('Xrm.Gen.UnlockInvoicePricingRequest');
Xrm.Gen.PickFromQueueRequest.registerClass('Xrm.Gen.PickFromQueueRequest');
Xrm.Gen.QualifyLeadRequest.registerClass('Xrm.Gen.QualifyLeadRequest');
Xrm.Gen.RenderTemplateRequest.registerClass('Xrm.Gen.RenderTemplateRequest');
Xrm.Gen.RenderTemplateFromViewRequest.registerClass('Xrm.Gen.RenderTemplateFromViewRequest');
Xrm.Gen.RescheduleRequest.registerClass('Xrm.Gen.RescheduleRequest');
Xrm.Gen.RetrieveActiveStageRecordRequest.registerClass('Xrm.Gen.RetrieveActiveStageRecordRequest');
Xrm.Sdk.RetrieveAncestorsRequest.registerClass('Xrm.Sdk.RetrieveAncestorsRequest');
Xrm.Gen.RetrieveProductPropertiesRequest.registerClass('Xrm.Gen.RetrieveProductPropertiesRequest');
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest.registerClass('Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest');
Xrm.Gen.RevertProductRequest.registerClass('Xrm.Gen.RevertProductRequest');
Xrm.Gen.PublishProductHierarchyRequest.registerClass('Xrm.Gen.PublishProductHierarchyRequest');
Xrm.Gen.ReleaseToQueueRequest.registerClass('Xrm.Gen.ReleaseToQueueRequest');
Xrm.Gen.RemoveFromQueueRequest.registerClass('Xrm.Gen.RemoveFromQueueRequest');
Xrm.Gen.RenewEntitlementRequest.registerClass('Xrm.Gen.RenewEntitlementRequest');
Xrm.Gen.RetrieveAttributeListRequest.registerClass('Xrm.Gen.RetrieveAttributeListRequest');
Xrm.Gen.ShouldDisplaySLALimitNotificationRequest.registerClass('Xrm.Gen.ShouldDisplaySLALimitNotificationRequest');
Xrm.Gen.RetrieveDefaultStatusForStateRequest.registerClass('Xrm.Gen.RetrieveDefaultStatusForStateRequest');
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequest.registerClass('Xrm.Gen.RetrieveEntitiesForAggregateQueryRequest');
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest.registerClass('Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest');
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest.registerClass('Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest');
Xrm.Gen.GetQuantityDecimalRequest.registerClass('Xrm.Gen.GetQuantityDecimalRequest');
Xrm.Gen.CanCloseOpportunityRequest.registerClass('Xrm.Gen.CanCloseOpportunityRequest');
Xrm.Gen.RetrieveMultipleRequest.registerClass('Xrm.Gen.RetrieveMultipleRequest');
Xrm.Gen.RetrieveUnpublishedMultipleRequest.registerClass('Xrm.Gen.RetrieveUnpublishedMultipleRequest');
Xrm.Gen.RetrieveFilteredProcessesRequest.registerClass('Xrm.Gen.RetrieveFilteredProcessesRequest');
Xrm.Gen.RetrievePrincipalAccessRequest.registerClass('Xrm.Gen.RetrievePrincipalAccessRequest');
Xrm.Gen.RetrievePersonalSiteUrlRequest.registerClass('Xrm.Gen.RetrievePersonalSiteUrlRequest');
Xrm.Gen.RetrieveRequest.registerClass('Xrm.Gen.RetrieveRequest');
Xrm.Gen.RetrieveTenantInfoRequest.registerClass('Xrm.Gen.RetrieveTenantInfoRequest');
Xrm.Gen.ReviseQuoteRequest.registerClass('Xrm.Gen.ReviseQuoteRequest');
Xrm.Gen.RouteToRequest.registerClass('Xrm.Gen.RouteToRequest');
Xrm.Gen.RevokeAccessRequest.registerClass('Xrm.Gen.RevokeAccessRequest');
Xrm.Sdk.ScriptErrorRequest.registerClass('Xrm.Sdk.ScriptErrorRequest');
Xrm.Gen.SetBusinessSystemUserRequest.registerClass('Xrm.Gen.SetBusinessSystemUserRequest');
Xrm.Gen.SetDevErrorsRequest.registerClass('Xrm.Gen.SetDevErrorsRequest');
Xrm.Gen.SetStateRequest.registerClass('Xrm.Gen.SetStateRequest');
Xrm.Gen.SubmitImportedDataRequest.registerClass('Xrm.Gen.SubmitImportedDataRequest');
Xrm.Gen.UnlockSalesOrderPricingRequest.registerClass('Xrm.Gen.UnlockSalesOrderPricingRequest');
Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequest.registerClass('Xrm.Gen.IntersectRecordsWithQueueAndAggregateRequest');
Xrm.Gen.PopulateRecommendationCacheForRecordRequest.registerClass('Xrm.Gen.PopulateRecommendationCacheForRecordRequest');
Xrm.Gen.PopulateRecommendationCacheRequest.registerClass('Xrm.Gen.PopulateRecommendationCacheRequest');
Xrm.Gen.RetrieveItemIdsForRecordRequest.registerClass('Xrm.Gen.RetrieveItemIdsForRecordRequest');
Xrm.Gen.RetrieveRecommendationsCountRequest.registerClass('Xrm.Gen.RetrieveRecommendationsCountRequest');
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest.registerClass('Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest');
Xrm.Gen.RetrieveRecommendationLineItemProductsRequest.registerClass('Xrm.Gen.RetrieveRecommendationLineItemProductsRequest');
Xrm.Gen.UpdateRequest.registerClass('Xrm.Gen.UpdateRequest');
Xrm.Gen.WhoAmIRequest.registerClass('Xrm.Gen.WhoAmIRequest');
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest.registerClass('Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest');
Xrm.Gen.WinOpportunityRequest.registerClass('Xrm.Gen.WinOpportunityRequest');
Xrm.Gen.WinQuoteRequest.registerClass('Xrm.Gen.WinQuoteRequest');
Xrm.Gen.AddDynamicPropertyRequest.registerClass('Xrm.Gen.AddDynamicPropertyRequest');
Xrm.Gen.OverrideDynamicPropertyRequest.registerClass('Xrm.Gen.OverrideDynamicPropertyRequest');
Xrm.Gen.OverwriteDynamicPropertyRequest.registerClass('Xrm.Gen.OverwriteDynamicPropertyRequest');
Xrm.Gen.FlushMetadataCacheRequest.registerClass('Xrm.Gen.FlushMetadataCacheRequest');
Xrm.Gen.BulkDeleteImportedRecordsRequest.registerClass('Xrm.Gen.BulkDeleteImportedRecordsRequest');
Xrm.Gen.RemoveDynamicPropertyRequest.registerClass('Xrm.Gen.RemoveDynamicPropertyRequest');
Xrm.Gen.UpdateProductPropertiesRequest.registerClass('Xrm.Gen.UpdateProductPropertiesRequest');
Xrm.Gen.OverrideDynamicPropertiesRequest.registerClass('Xrm.Gen.OverrideDynamicPropertiesRequest');
Xrm.Gen.GetDefaultPriceLevelRequest.registerClass('Xrm.Gen.GetDefaultPriceLevelRequest');
Xrm.Gen.CanUserSendEmailRequest.registerClass('Xrm.Gen.CanUserSendEmailRequest');
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest.registerClass('Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest');
Xrm.Gen.PublishAllXmlRequest.registerClass('Xrm.Gen.PublishAllXmlRequest');
Xrm.Gen.PublishThemeRequest.registerClass('Xrm.Gen.PublishThemeRequest');
Xrm.Gen.TrackEmailRequest.registerClass('Xrm.Gen.TrackEmailRequest');
Xrm.Gen.ExecuteDataPerformanceActionRequest.registerClass('Xrm.Gen.ExecuteDataPerformanceActionRequest');
Xrm.Gen.PublishXmlRequest.registerClass('Xrm.Gen.PublishXmlRequest');
Xrm.Gen.CreateKnowledgeArticleVersionRequest.registerClass('Xrm.Gen.CreateKnowledgeArticleVersionRequest');
Xrm.Gen.CreateKnowledgeArticleTranslationRequest.registerClass('Xrm.Gen.CreateKnowledgeArticleTranslationRequest');
Xrm.Gen.FullTextSearchKnowledgeArticleRequest.registerClass('Xrm.Gen.FullTextSearchKnowledgeArticleRequest');
Xrm.Gen.IncrementKnowledgeArticleViewCountRequest.registerClass('Xrm.Gen.IncrementKnowledgeArticleViewCountRequest');
Xrm.Gen.PublishKnowledgeArticleRequest.registerClass('Xrm.Gen.PublishKnowledgeArticleRequest');
Xrm.Gen.InstantiateTemplateRequest.registerClass('Xrm.Gen.InstantiateTemplateRequest');
Xrm.Gen.UpdateDelveActionStatusRequest.registerClass('Xrm.Gen.UpdateDelveActionStatusRequest');
Xrm.Gen.CreateEmailReplyDraftRequest.registerClass('Xrm.Gen.CreateEmailReplyDraftRequest');
Xrm.Gen.SetActionCardStateRequest.registerClass('Xrm.Gen.SetActionCardStateRequest');
Xrm.Gen.SnoozeActionCardRequest.registerClass('Xrm.Gen.SnoozeActionCardRequest');
Xrm.Gen.DismissMissedEmailRequest.registerClass('Xrm.Gen.DismissMissedEmailRequest');
Xrm.Gen.GetRegardingOpportunityIdRequest.registerClass('Xrm.Gen.GetRegardingOpportunityIdRequest');
Xrm.Gen.CompleteExchangeTaskRequest.registerClass('Xrm.Gen.CompleteExchangeTaskRequest');
Xrm.Gen.PopulateCardRequest.registerClass('Xrm.Gen.PopulateCardRequest');
Xrm.Gen.CopySharePointDocumentsRequest.registerClass('Xrm.Gen.CopySharePointDocumentsRequest');
Xrm.Gen.GetSimilarRecordsRequest.registerClass('Xrm.Gen.GetSimilarRecordsRequest');
Xrm.Gen.LogExternalResultsClickedRequest.registerClass('Xrm.Gen.LogExternalResultsClickedRequest');
Xrm.Gen.ValidateAppointmentRequest.registerClass('Xrm.Gen.ValidateAppointmentRequest');
Xrm.Sdk.ScriptErrorRequestExtensions.registerClass('Xrm.Sdk.ScriptErrorRequestExtensions');
Xrm.Gen.ExportTemplateToWordResponse.registerClass('Xrm.Gen.ExportTemplateToWordResponse');
Xrm.Gen.CalculateTotalTimeIncidentResponse.registerClass('Xrm.Gen.CalculateTotalTimeIncidentResponse');
Xrm.Gen.ExportWordDocumentResponse.registerClass('Xrm.Gen.ExportWordDocumentResponse');
Xrm.Gen.GetRIProvisioningStatusResponse.registerClass('Xrm.Gen.GetRIProvisioningStatusResponse');
Xrm.Gen.GetAciMarsConnectorStatusResponse.registerClass('Xrm.Gen.GetAciMarsConnectorStatusResponse');
Xrm.Gen.GetRITenantEndpointUrlResponse.registerClass('Xrm.Gen.GetRITenantEndpointUrlResponse');
Xrm.Gen.IsLegacyCustomerResponse.registerClass('Xrm.Gen.IsLegacyCustomerResponse');
Xrm.Gen.CloneContractResponse.registerClass('Xrm.Gen.CloneContractResponse');
Xrm.Gen.RenewContractResponse.registerClass('Xrm.Gen.RenewContractResponse');
Xrm.Gen.GetQuantityDecimalResponse.registerClass('Xrm.Gen.GetQuantityDecimalResponse');
Xrm.Gen.CanCloseOpportunityResponse.registerClass('Xrm.Gen.CanCloseOpportunityResponse');
Xrm.Gen.SubmitImportedDataResponse.registerClass('Xrm.Gen.SubmitImportedDataResponse');
Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse.registerClass('Xrm.Gen.IntersectRecordsWithQueueAndAggregateResponse');
Xrm.Gen.GetRegardingOpportunityIdResponse.registerClass('Xrm.Gen.GetRegardingOpportunityIdResponse');
Xrm.Gen.GenerateQuoteFromOpportunityResponse.registerClass('Xrm.Gen.GenerateQuoteFromOpportunityResponse');
Xrm.Gen.GenerateSalesOrderFromOpportunityResponse.registerClass('Xrm.Gen.GenerateSalesOrderFromOpportunityResponse');
Xrm.Gen.GenerateInvoiceFromOpportunityResponse.registerClass('Xrm.Gen.GenerateInvoiceFromOpportunityResponse');
Xrm.Gen.AddItemCampaignActivityResponse.registerClass('Xrm.Gen.AddItemCampaignActivityResponse');
Xrm.Gen.AddItemCampaignResponse.registerClass('Xrm.Gen.AddItemCampaignResponse');
Xrm.Sdk.AddItemResponse.registerClass('Xrm.Sdk.AddItemResponse');
Xrm.Gen.AddRecurrenceResponse.registerClass('Xrm.Gen.AddRecurrenceResponse');
Xrm.Sdk.AddToQueueResponse.registerClass('Xrm.Sdk.AddToQueueResponse');
Xrm.Gen.BestTimeToEmailResponse.registerClass('Xrm.Gen.BestTimeToEmailResponse');
Xrm.Gen.BookResponse.registerClass('Xrm.Gen.BookResponse');
Xrm.Gen.CloneProductResponse.registerClass('Xrm.Gen.CloneProductResponse');
Xrm.Gen.CloneMobileOfflineProfileResponse.registerClass('Xrm.Gen.CloneMobileOfflineProfileResponse');
Xrm.Gen.CopyCampaignResponse.registerClass('Xrm.Gen.CopyCampaignResponse');
Xrm.Gen.CreateProductsResponse.registerClass('Xrm.Gen.CreateProductsResponse');
Xrm.Gen.ConvertCampaignResponseResponse.registerClass('Xrm.Gen.ConvertCampaignResponseResponse');
Xrm.Gen.CopyCampaignResponseResponse.registerClass('Xrm.Gen.CopyCampaignResponseResponse');
Xrm.Gen.FollowEmailAttachmentResponse.registerClass('Xrm.Gen.FollowEmailAttachmentResponse');
Xrm.Gen.RetrieveCardDataResponse.registerClass('Xrm.Gen.RetrieveCardDataResponse');
Xrm.Gen.SearchDocumentResponse.registerClass('Xrm.Gen.SearchDocumentResponse');
Xrm.Gen.CreateEmailReplyDraftResponse.registerClass('Xrm.Gen.CreateEmailReplyDraftResponse');
Xrm.Gen.CopySharePointDocumentsResponse.registerClass('Xrm.Gen.CopySharePointDocumentsResponse');
Xrm.Gen.SendEmailResponse.registerClass('Xrm.Gen.SendEmailResponse');
Xrm.Gen.NewDocumentResponse.registerClass('Xrm.Gen.NewDocumentResponse');
Xrm.Sdk.CalculateActualValueOpportunityResponse.registerClass('Xrm.Sdk.CalculateActualValueOpportunityResponse');
Xrm.Gen.CreateDocumentLibrariesResponse.registerClass('Xrm.Gen.CreateDocumentLibrariesResponse');
Xrm.Gen.CreateFolderResponse.registerClass('Xrm.Gen.CreateFolderResponse');
Xrm.Gen.CreateFolderAndNewDocumentsResponse.registerClass('Xrm.Gen.CreateFolderAndNewDocumentsResponse');
Xrm.Gen.ValidateUrlResponse.registerClass('Xrm.Gen.ValidateUrlResponse');
Xrm.Gen.ConvertActivityResponse.registerClass('Xrm.Gen.ConvertActivityResponse');
Xrm.Gen.ConvertQuoteToSalesOrderResponse.registerClass('Xrm.Gen.ConvertQuoteToSalesOrderResponse');
Xrm.Gen.ConvertSalesOrderToInvoiceResponse.registerClass('Xrm.Gen.ConvertSalesOrderToInvoiceResponse');
Xrm.Gen.CreateResponse.registerClass('Xrm.Gen.CreateResponse');
Xrm.Gen.ExecuteMultipleResponse.registerClass('Xrm.Gen.ExecuteMultipleResponse');
Xrm.Sdk.ExecuteQuickFindResponse.registerClass('Xrm.Sdk.ExecuteQuickFindResponse');
Xrm.Gen.ExecuteWorkflowResponse.registerClass('Xrm.Gen.ExecuteWorkflowResponse');
Xrm.Gen.ExportTemplateToExcelOnlineResponse.registerClass('Xrm.Gen.ExportTemplateToExcelOnlineResponse');
Xrm.Gen.ExportToExcelOnlineResponse.registerClass('Xrm.Gen.ExportToExcelOnlineResponse');
Xrm.Gen.ExportToExcelResponse.registerClass('Xrm.Gen.ExportToExcelResponse');
Xrm.Gen.RetrieveDocumentTemplatesResponse.registerClass('Xrm.Gen.RetrieveDocumentTemplatesResponse');
Xrm.Gen.GetActualDateResponse.registerClass('Xrm.Gen.GetActualDateResponse');
Xrm.Gen.GetDataForTopicWordCloudResponse.registerClass('Xrm.Gen.GetDataForTopicWordCloudResponse');
Xrm.Gen.RetrieveUserDefaultCurrencyResponse.registerClass('Xrm.Gen.RetrieveUserDefaultCurrencyResponse');
Xrm.Gen.GetEntitiesForAzureMLResponse.registerClass('Xrm.Gen.GetEntitiesForAzureMLResponse');
Xrm.Gen.GetFieldListForAzureMLResponse.registerClass('Xrm.Gen.GetFieldListForAzureMLResponse');
Xrm.Gen.GetRelationshipsForAzureMLResponse.registerClass('Xrm.Gen.GetRelationshipsForAzureMLResponse');
Xrm.Gen.GetTrackingTokenEmailResponse.registerClass('Xrm.Gen.GetTrackingTokenEmailResponse');
Xrm.Gen.CopyDynamicListToStaticResponse.registerClass('Xrm.Gen.CopyDynamicListToStaticResponse');
Xrm.Gen.GetValidStatusTransitionResponse.registerClass('Xrm.Gen.GetValidStatusTransitionResponse');
Xrm.Gen.InitializeFromResponse.registerClass('Xrm.Gen.InitializeFromResponse');
Xrm.Gen.InviteUserResponse.registerClass('Xrm.Gen.InviteUserResponse');
Xrm.Gen.IsPartnerSolutionInstalledResponse.registerClass('Xrm.Gen.IsPartnerSolutionInstalledResponse');
Xrm.Gen.FetchSiteUrlResponse.registerClass('Xrm.Gen.FetchSiteUrlResponse');
Xrm.Gen.AddOrEditLocationResponse.registerClass('Xrm.Gen.AddOrEditLocationResponse');
Xrm.Gen.QualifyLeadResponse.registerClass('Xrm.Gen.QualifyLeadResponse');
Xrm.Gen.RenderTemplateResponse.registerClass('Xrm.Gen.RenderTemplateResponse');
Xrm.Gen.RenderTemplateFromViewResponse.registerClass('Xrm.Gen.RenderTemplateFromViewResponse');
Xrm.Gen.RenewEntitlementResponse.registerClass('Xrm.Gen.RenewEntitlementResponse');
Xrm.Gen.RescheduleResponse.registerClass('Xrm.Gen.RescheduleResponse');
Xrm.Gen.RetrieveActiveStageRecordResponse.registerClass('Xrm.Gen.RetrieveActiveStageRecordResponse');
Xrm.Gen.RetrieveDefaultStatusForStateResponse.registerClass('Xrm.Gen.RetrieveDefaultStatusForStateResponse');
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponse.registerClass('Xrm.Gen.RetrieveEntitiesForAggregateQueryResponse');
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse.registerClass('Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse');
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse.registerClass('Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse');
Xrm.Gen.RetrieveMultipleResponse.registerClass('Xrm.Gen.RetrieveMultipleResponse');
Xrm.Gen.RetrieveUnpublishedMultipleResponse.registerClass('Xrm.Gen.RetrieveUnpublishedMultipleResponse');
Xrm.Gen.RetrieveFilteredProcessesResponse.registerClass('Xrm.Gen.RetrieveFilteredProcessesResponse');
Xrm.Gen.RetrievePrincipalAccessResponse.registerClass('Xrm.Gen.RetrievePrincipalAccessResponse');
Xrm.Gen.RetrievePersonalSiteUrlResponse.registerClass('Xrm.Gen.RetrievePersonalSiteUrlResponse');
Xrm.Gen.RetrieveResponse.registerClass('Xrm.Gen.RetrieveResponse');
Xrm.Gen.RetrieveTenantInfoResponse.registerClass('Xrm.Gen.RetrieveTenantInfoResponse');
Xrm.Gen.ReviseQuoteResponse.registerClass('Xrm.Gen.ReviseQuoteResponse');
Xrm.Gen.WhoAmIResponse.registerClass('Xrm.Gen.WhoAmIResponse');
Xrm.Gen.AddDynamicPropertyResponse.registerClass('Xrm.Gen.AddDynamicPropertyResponse');
Xrm.Sdk.RetrieveAncestorsResponse.registerClass('Xrm.Sdk.RetrieveAncestorsResponse');
Xrm.Gen.OverrideDynamicPropertyResponse.registerClass('Xrm.Gen.OverrideDynamicPropertyResponse');
Xrm.Gen.OverwriteDynamicPropertyResponse.registerClass('Xrm.Gen.OverwriteDynamicPropertyResponse');
Xrm.Gen.BulkDeleteImportedRecordsResponse.registerClass('Xrm.Gen.BulkDeleteImportedRecordsResponse');
Xrm.Gen.RetrieveProductPropertiesResponse.registerClass('Xrm.Gen.RetrieveProductPropertiesResponse');
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse.registerClass('Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse');
Xrm.Gen.GetDefaultPriceLevelResponse.registerClass('Xrm.Gen.GetDefaultPriceLevelResponse');
Xrm.Gen.CanUserSendEmailResponse.registerClass('Xrm.Gen.CanUserSendEmailResponse');
Xrm.Gen.RetrieveAttributeListResponse.registerClass('Xrm.Gen.RetrieveAttributeListResponse');
Xrm.Gen.ShouldDisplaySLALimitNotificationResponse.registerClass('Xrm.Gen.ShouldDisplaySLALimitNotificationResponse');
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse.registerClass('Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse');
Xrm.Gen.RetrieveSharePointGlobalSettingsResponse.registerClass('Xrm.Gen.RetrieveSharePointGlobalSettingsResponse');
Xrm.Gen.CreateKnowledgeArticleTranslationResponse.registerClass('Xrm.Gen.CreateKnowledgeArticleTranslationResponse');
Xrm.Gen.CreateKnowledgeArticleVersionResponse.registerClass('Xrm.Gen.CreateKnowledgeArticleVersionResponse');
Xrm.Gen.FullTextSearchKnowledgeArticleResponse.registerClass('Xrm.Gen.FullTextSearchKnowledgeArticleResponse');
Xrm.Gen.IncrementKnowledgeArticleViewCountResponse.registerClass('Xrm.Gen.IncrementKnowledgeArticleViewCountResponse');
Xrm.Gen.PublishKnowledgeArticleResponse.registerClass('Xrm.Gen.PublishKnowledgeArticleResponse');
Xrm.Gen.InstantiateTemplateResponse.registerClass('Xrm.Gen.InstantiateTemplateResponse');
Xrm.Gen.GetSimilarRecordsResponse.registerClass('Xrm.Gen.GetSimilarRecordsResponse');
Xrm.Gen.PopulateRecommendationCacheForRecordResponse.registerClass('Xrm.Gen.PopulateRecommendationCacheForRecordResponse');
Xrm.Gen.PopulateRecommendationCacheResponse.registerClass('Xrm.Gen.PopulateRecommendationCacheResponse');
Xrm.Gen.RetrieveItemIdsForRecordResponse.registerClass('Xrm.Gen.RetrieveItemIdsForRecordResponse');
Xrm.Gen.RetrieveRecommendationsCountResponse.registerClass('Xrm.Gen.RetrieveRecommendationsCountResponse');
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse.registerClass('Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse');
Xrm.Gen.RetrieveRecommendationLineItemProductsResponse.registerClass('Xrm.Gen.RetrieveRecommendationLineItemProductsResponse');
Xrm.Gen.PopulateCardResponse.registerClass('Xrm.Gen.PopulateCardResponse');
Xrm.Gen.ValidateAppointmentResponse.registerClass('Xrm.Gen.ValidateAppointmentResponse');
Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.EntityOperation.registerClass('Microsoft.Crm.Client.Core.Offline.OfflineStore.DAL.EntityOperation');
Microsoft.Crm.Client.Core.Storage.Common.AllColumns.$1Q = null;
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.noBreakSpace = '\u00a0';
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.zeroWidthNoBreakSpace = '\ufeff';
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.leftToRightMark = '\u200e';
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.rightToLeftMark = '\u200f';
Microsoft.Crm.Client.Core.Storage.Common.CrmFormatter.$1Q = null;
Microsoft.Crm.Client.Core.Storage.Common.StorageConstants.compositeIndexDelimiter = '_';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.idPath = 'id';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.entityLogicalNamePath = 'entitylogicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.logicalNamePath = 'logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.typePath = 'type';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.sourceTypePath = 'sourcetype';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.displayNamePath = 'displayname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isSecuredPath = 'issecured';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isSortableEnabledPath = 'issortableenabled';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isValidForCreatePath = 'isvalidforcreate';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isValidForUpdatePath = 'isvalidforupdate';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isValidForReadPath = 'isvalidforread';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.requiredLevelPath = 'requiredlevel';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.maxLengthPath = 'maxlength';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.minValuePath = 'minvalue';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.maxValuePath = 'maxvalue';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.precisionPath = 'precision';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.precisionSourcePath = 'precisionsource';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.defaultFormValuePath = 'defaultformvalue';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.defaultValuePath = 'defaultvalue';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.formatPath = 'format';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.behaviorPath = 'behavior';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isBaseCurrencyPath = 'isbasecurrency';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.attributeOfPath = 'attributeof';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.hasChangedPath = 'haschanged';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.optionSetPath = 'optionset';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.targetsPath = 'targets';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.imeModePath = 'imemode';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.inheritsFromPath = 'inheritsfrom';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.isLocalizablePath = 'islocalizable';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.parentPicklistLogicalNamePath = 'parentPicklistLogicalName';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.childPicklistLogicalNamesPath = 'childPicklistLogicalNames';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.AttributeMetadata.entityAttributeLogicalNamesPath = 'entitylogicalname_logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.timestampPath = 'timestamp';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.ClientRetrieveOptions.embeddedPriorityTimestampPath = 'clientretrieveoptions.priority_timestamp';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.idPath = 'id';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityMetadata.logicalNamePath = 'logicalname';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.draftTypeLogicalNameTimestampKeyPath = 'drafttype_logicalname_timestamp';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.draftIdFieldName = 'draftid';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord.entityImageName = 'entityimage';
Xrm.Objects.EntityReference.$4q = null;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.logicalName = 'organization';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.OrganizationSettings.defaultMaxUploadFileSize = 5242880;
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.SessionStateRecord.keyPath = 'statekey';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.TransactionCurrency.logicalName = 'transactioncurrency';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.logicalName = 'usersettings';
Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.UserSettings.$4t = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Number))([ 1041, 2052, 1028 ]);
Xrm.Sdk.Request.NS = 'http://schemas.microsoft.com/crm/2011/Contracts';
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.featureNameField = 'featurename';
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.featureControlBitNameField = 'featurecontrolbitname';
Microsoft.Crm.Client.Core.Storage.DataApi.FeatureDetails.valueField = 'value';
Microsoft.Crm.Client.Core.Storage.DataApi.AttributeMetadataQuery.$4h = null;
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.transactionCurrencyByIdExternalContextField = 'transactioncurrencybyid';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.timeZoneDefinitionByCodeExternalContextField = 'timezonedefinitionbycode';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.isLiveExternalContextField = 'islive';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.isOsdpOrganizationExternalContextField = 'isosdporganization';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.usePathBasedUrlsExternalContextField = 'usepathbasedurls';
Microsoft.Crm.Client.Core.Storage.DataApi.UserContext.entityMetadataSyncConfigurationExternalContextField = 'entitymetadatasyncconfiguration';
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.EncodeDecode.$5G = new RegExp('(<|>|\\\\|\"|\\r|\\n)', 'i');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5I = new RegExp('\\&\\#64;\\&\\#91;([a-z0-9_]{1,50}),(\\{{0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\}{0,1}),\\&\\#34;(.*?)\\&\\#34;\\&\\#93;', 'gm');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5D = new RegExp('(((www\\.)|((http|https|ftp|ftps|onenote|tel|mailto|gopher)://))[\\S]*[a-zA-Z0-9+&@#/%=~_|$])', 'igm');
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.WallFormatter.$5E = new RegExp('^((http|https|ftp|ftps|onenote|tel|mailto|gopher)://)(.*)$', 'i');
Xrm.Sdk.ScriptErrorRequest.scriptErrorRelativeWebEndpointUrl = '/AppWebServices/ScriptError.asmx';
Xrm.Sdk.ScriptErrorRequest.scriptErrorSendReportSoapAction = 'http://schemas.microsoft.com/crm/2009/WebServices/SendScriptErrorReport';
