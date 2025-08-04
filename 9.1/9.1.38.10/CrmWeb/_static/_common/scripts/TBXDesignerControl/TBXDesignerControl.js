//---------------------------------------------------------------------------------------------
// <copyright file="AttributeTypes.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// CRM Attribute types definition
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        (function (AttributeType) {
            AttributeType[AttributeType["Unknown"] = -1] = "Unknown";
            AttributeType[AttributeType["Boolean"] = 0] = "Boolean";
            AttributeType[AttributeType["Customer"] = 1] = "Customer";
            AttributeType[AttributeType["DateTime"] = 2] = "DateTime";
            AttributeType[AttributeType["Decimal"] = 3] = "Decimal";
            AttributeType[AttributeType["Double"] = 4] = "Double";
            AttributeType[AttributeType["Integer"] = 5] = "Integer";
            AttributeType[AttributeType["Lookup"] = 6] = "Lookup";
            AttributeType[AttributeType["Money"] = 7] = "Money";
            AttributeType[AttributeType["Owner"] = 8] = "Owner";
            AttributeType[AttributeType["Picklist"] = 10] = "Picklist";
            AttributeType[AttributeType["State"] = 12] = "State";
            AttributeType[AttributeType["Status"] = 13] = "Status";
            AttributeType[AttributeType["String"] = 14] = "String";
            AttributeType[AttributeType["UniqueIdentifier"] = 15] = "UniqueIdentifier";
            AttributeType[AttributeType["CalendarRules"] = 16] = "CalendarRules";
            AttributeType[AttributeType["BigInt"] = 18] = "BigInt";
            AttributeType[AttributeType["ManagedProperty"] = 19] = "ManagedProperty";
            AttributeType[AttributeType["EntityName"] = 20] = "EntityName";
            AttributeType[AttributeType["AliasedValue"] = 21] = "AliasedValue";
            AttributeType[AttributeType["ArrayOfString"] = 22] = "ArrayOfString";
        })(ProcessDesigner.AttributeType || (ProcessDesigner.AttributeType = {}));
        var AttributeType = ProcessDesigner.AttributeType;
        (function (DateFormat) {
            DateFormat[DateFormat["DateTime"] = 0] = "DateTime";
            DateFormat[DateFormat["Date"] = 1] = "Date";
        })(ProcessDesigner.DateFormat || (ProcessDesigner.DateFormat = {}));
        var DateFormat = ProcessDesigner.DateFormat;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionOperator.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Enum to represent Operators for Condition
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        (function (ConditionOperator) {
            ConditionOperator[ConditionOperator["DoesNotContainData"] = 0] = "DoesNotContainData";
            ConditionOperator[ConditionOperator["ContainsData"] = 1] = "ContainsData";
            ConditionOperator[ConditionOperator["LogicalAnd"] = 2] = "LogicalAnd";
            ConditionOperator[ConditionOperator["LogicalOr"] = 3] = "LogicalOr";
            ConditionOperator[ConditionOperator["IN"] = 4] = "IN";
            ConditionOperator[ConditionOperator["NotIn"] = 5] = "NotIn";
            ConditionOperator[ConditionOperator["Equal"] = 6] = "Equal";
            ConditionOperator[ConditionOperator["NotEqual"] = 7] = "NotEqual";
            ConditionOperator[ConditionOperator["Contains"] = 8] = "Contains";
            ConditionOperator[ConditionOperator["DoesNotContain"] = 9] = "DoesNotContain";
            ConditionOperator[ConditionOperator["BeginsWith"] = 10] = "BeginsWith";
            ConditionOperator[ConditionOperator["DoesNotBeginWith"] = 11] = "DoesNotBeginWith";
            ConditionOperator[ConditionOperator["EndsWith"] = 12] = "EndsWith";
            ConditionOperator[ConditionOperator["DoesNotEndWith"] = 13] = "DoesNotEndWith";
            ConditionOperator[ConditionOperator["GreaterThan"] = 14] = "GreaterThan";
            ConditionOperator[ConditionOperator["GreaterThanOrEqual"] = 15] = "GreaterThanOrEqual";
            ConditionOperator[ConditionOperator["LessThan"] = 16] = "LessThan";
            ConditionOperator[ConditionOperator["LessThanOrEqual"] = 17] = "LessThanOrEqual";
            ConditionOperator[ConditionOperator["EqualUserId"] = 18] = "EqualUserId";
            ConditionOperator[ConditionOperator["NotEqualUserId"] = 19] = "NotEqualUserId";
            ConditionOperator[ConditionOperator["On"] = 20] = "On";
            ConditionOperator[ConditionOperator["NotOn"] = 21] = "NotOn";
            ConditionOperator[ConditionOperator["OnOrAfter"] = 22] = "OnOrAfter";
            ConditionOperator[ConditionOperator["OnOrBefore"] = 23] = "OnOrBefore";
            ConditionOperator[ConditionOperator["Yesterday"] = 24] = "Yesterday";
            ConditionOperator[ConditionOperator["Today"] = 25] = "Today";
            ConditionOperator[ConditionOperator["Tomorrow"] = 26] = "Tomorrow";
            ConditionOperator[ConditionOperator["NextSevenDays"] = 27] = "NextSevenDays";
            ConditionOperator[ConditionOperator["LastSevenDays"] = 28] = "LastSevenDays";
            ConditionOperator[ConditionOperator["NextWeek"] = 29] = "NextWeek";
            ConditionOperator[ConditionOperator["LastWeek"] = 30] = "LastWeek";
            ConditionOperator[ConditionOperator["ThisWeek"] = 31] = "ThisWeek";
            ConditionOperator[ConditionOperator["NextMonth"] = 32] = "NextMonth";
            ConditionOperator[ConditionOperator["LastMonth"] = 33] = "LastMonth";
            ConditionOperator[ConditionOperator["ThisMonth"] = 34] = "ThisMonth";
            ConditionOperator[ConditionOperator["NextYear"] = 35] = "NextYear";
            ConditionOperator[ConditionOperator["LastYear"] = 36] = "LastYear";
            ConditionOperator[ConditionOperator["ThisYear"] = 37] = "ThisYear";
            ConditionOperator[ConditionOperator["Anytime"] = 38] = "Anytime";
            ConditionOperator[ConditionOperator["LastXHours"] = 39] = "LastXHours";
            ConditionOperator[ConditionOperator["NextXHours"] = 40] = "NextXHours";
            ConditionOperator[ConditionOperator["LastXDays"] = 41] = "LastXDays";
            ConditionOperator[ConditionOperator["NextXDays"] = 42] = "NextXDays";
            ConditionOperator[ConditionOperator["LastXWeeks"] = 43] = "LastXWeeks";
            ConditionOperator[ConditionOperator["NextXWeeks"] = 44] = "NextXWeeks";
            ConditionOperator[ConditionOperator["LastXMonths"] = 45] = "LastXMonths";
            ConditionOperator[ConditionOperator["NextXMonths"] = 46] = "NextXMonths";
            ConditionOperator[ConditionOperator["LastXYears"] = 47] = "LastXYears";
            ConditionOperator[ConditionOperator["NextXYears"] = 48] = "NextXYears";
            ConditionOperator[ConditionOperator["Under"] = 49] = "Under";
            ConditionOperator[ConditionOperator["NotUnder"] = 50] = "NotUnder";
        })(ProcessDesigner.ConditionOperator || (ProcessDesigner.ConditionOperator = {}));
        var ConditionOperator = ProcessDesigner.ConditionOperator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="DateTimeUtil.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Date time utils.
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var DateTimeUtil = (function () {
            function DateTimeUtil(options) {
                this.defaultHour = 8;
                this.defaultMinute = 0;
                this.isTimeFormat24 = MscrmControls.ProcessDesigner.Util.getBooleanValue(options, 'isTimeFormat24', false);
                this.dateFormat = MscrmControls.ProcessDesigner.Util.getStringValue(options, 'dateFormat', 'm/d/yy');
            }
            DateTimeUtil.prototype.defaultTime = function () {
                if (this.isTimeFormat24) {
                    return "08:00";
                }
                else {
                    return "08:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM");
                }
            };
            DateTimeUtil.prototype.prefixZero = function (clk) {
                return (clk < 10) ? ('0' + clk) : ('' + clk);
            };
            DateTimeUtil.prototype.strToDateTime = function (str) {
                var ret = { date: '', time: this.defaultTime(), errors: { date: false, time: false } };
                var milli = NaN;
                try {
                    $.datepicker.parseDate('D, dd M yy', str);
                    milli = Date.parse(str);
                }
                catch (e) {
                }
                if (_.isNaN(milli)) {
                    if (MscrmControls.ProcessDesigner.Util.isNull(str) || str.length == 0) {
                    }
                    else {
                        var space = str.lastIndexOf(' ', str.length - 4);
                        ret.date = str.substring(0, str.lastIndexOf(' ', space));
                        ret.time = str.substring(space + 1);
                        ret.errors.date = true;
                    }
                }
                else {
                    var dateTime = new Date(milli);
                    var date = $.datepicker.formatDate(this.dateFormat, dateTime);
                    var ampm = '';
                    var hours;
                    if (!this.isTimeFormat24) {
                        ampm = dateTime.getHours() % 24 < 12 ? ' ' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") : ' ' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM");
                        hours = dateTime.getHours() % 12;
                    }
                    var time = this.prefixZero(hours ? hours : dateTime.getHours()) + ':' + this.prefixZero(dateTime.getMinutes()) + ampm;
                    ret.date = date;
                    ret.time = time;
                }
                return ret;
            };
            DateTimeUtil.prototype.parseDate = function (dateStr_) {
                var ret = null;
                try {
                    var dateStr = dateStr_.trim();
                    ret = $.datepicker.parseDate(this.dateFormat, dateStr);
                    ret = new Date(Date.UTC(ret.getFullYear(), ret.getMonth(), ret.getDate()));
                }
                catch (e) {
                }
                return ret;
            };
            DateTimeUtil.prototype.parseTime = function (timeStr) {
                var ret = { hr: this.defaultHour, min: this.defaultMinute, isError: true };
                try {
                    var split = timeStr.split(':');
                    var hr = parseInt(split[0]);
                    var min = parseInt(split[1].substring(0, 2));
                    if (!this.isTimeFormat24) {
                        var ampm = split[1].substring(split[1].length - 2, split[1].length).toUpperCase();
                        if (ampm == MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM")) {
                        }
                        else if (ampm == MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM")) {
                            hr = hr + 12;
                        }
                        else {
                            hr = -1;
                        }
                    }
                    if (hr != -1) {
                        ret.hr = hr;
                        ret.min = min;
                        ret.isError = false;
                    }
                }
                catch (e) {
                }
                return ret;
            };
            DateTimeUtil.prototype.dateTimeToStr = function (dateTime) {
                var ret = { val: this.defaultTime(), errors: { date: false, time: false } };
                try {
                    var date = this.parseDate(dateTime.date);
                    if (date == null) {
                        ret.errors.date = true;
                        dateTime.date = dateTime.date ? dateTime.date : '';
                        ret.val = dateTime.date + ' ' + dateTime.time;
                    }
                    else {
                        var time = this.parseTime(dateTime.time);
                        if (time.isError) {
                            ret.errors.time = true;
                        }
                        else if (date < DateTimeUtil._minAllowedDate || date > DateTimeUtil._maxAllowedDate) {
                            ret.errors.date = true;
                            ret.errors.time = true;
                        }
                        date.setHours(time.hr);
                        date.setMinutes(time.min);
                        ret.val = date.toUTCString();
                    }
                }
                catch (e) {
                }
                return ret;
            };
            DateTimeUtil.prototype.generateTimeSequence = function (timeInterval, callback) {
                var ret = '';
                var hrs, min, ampm = '';
                var max = 1440 - timeInterval;
                for (var i = 0; i <= max; i += timeInterval) {
                    hrs = Math.floor(i / 60);
                    min = i % 60;
                    min = this.prefixZero(min);
                    if (!this.isTimeFormat24) {
                        ampm = hrs % 24 < 12 ? ' ' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") : ' ' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM");
                        hrs = hrs % 12;
                        if (hrs === 0) {
                            hrs = 12;
                        }
                    }
                    hrs = this.prefixZero(hrs);
                    ret += callback(hrs + ":" + min + ampm);
                }
                return ret;
            };
            DateTimeUtil._maxAllowedDate = new Date(9999, 11, 30);
            DateTimeUtil._minAllowedDate = new Date(1753, 0, 1);
            return DateTimeUtil;
        })();
        ProcessDesigner.DateTimeUtil = DateTimeUtil;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="IValid.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Interface for objects, those can validate themselves.
// </summary>
//---------------------------------------------------------------------------------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation;
        (function (Validation) {
            (function (Level) {
                Level[Level["Unknown"] = 0] = "Unknown";
                Level[Level["Change"] = 1] = "Change";
                Level[Level["Apply"] = 2] = "Apply";
                Level[Level["Save"] = 3] = "Save";
                Level[Level["SaveAs"] = 4] = "SaveAs";
                Level[Level["SaveAndClose"] = 5] = "SaveAndClose";
                Level[Level["Validate"] = 6] = "Validate";
                Level[Level["Activate"] = 7] = "Activate";
                Level[Level["Deactivate"] = 8] = "Deactivate";
                Level[Level["EveryTime"] = 9999] = "EveryTime";
            })(Validation.Level || (Validation.Level = {}));
            var Level = Validation.Level;
            var SingleResult = (function () {
                function SingleResult() {
                    this._isValid = true;
                    this._message = "";
                }
                SingleResult.prototype.success = function (msg) {
                    this._message = msg;
                    this._isValid = true;
                    return this;
                };
                SingleResult.prototype.failure = function (msg) {
                    this._message = msg;
                    this._isValid = false;
                    return this;
                };
                SingleResult.prototype.set = function (isValid, msg) {
                    this._message = msg;
                    this._isValid = isValid;
                    return this;
                };
                Object.defineProperty(SingleResult.prototype, "isValid", {
                    get: function () {
                        return this._isValid;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SingleResult.prototype, "message", {
                    get: function () {
                        return this._message;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SingleResult;
            })();
            Validation.SingleResult = SingleResult;
            var Result = (function () {
                function Result(field) {
                    this._fieldName = field;
                    this._isValid = true;
                    this._results = [];
                    this._errorMessages = {};
                }
                Result.prototype.addResult = function (res) {
                    this._results.push(res);
                    this._isValid = this._isValid && res.isValid;
                    if (!res._isValid) {
                        this._errorMessages[this._fieldName] = res._message;
                    }
                };
                Object.defineProperty(Result.prototype, "isValid", {
                    get: function () {
                        return this._isValid;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Result.prototype, "fieldName", {
                    get: function () {
                        return this._fieldName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Result.prototype, "results", {
                    get: function () {
                        return this._results;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Result.prototype, "errorMessages", {
                    get: function () {
                        return this._errorMessages;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Result;
            })();
            Validation.Result = Result;
            var ValidModel = (function (_super) {
                __extends(ValidModel, _super);
                function ValidModel(options) {
                    _super.call(this, options);
                    this._showNotifications = true;
                    this.errorMessages = {};
                    this.errCount = 0;
                    this._isValid = true;
                }
                Object.defineProperty(ValidModel.prototype, "showNotifications", {
                    get: function () {
                        return this._showNotifications;
                    },
                    set: function (value) {
                        this._showNotifications = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ValidModel.prototype, "isValid", {
                    get: function () {
                        return this._isValid;
                    },
                    set: function (value) {
                        this._isValid = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ValidModel.prototype.addErrorMessage = function (id, errorMessage) {
                    this.errCount++;
                    this.errorMessages[id] = errorMessage;
                };
                ValidModel.prototype.clearErrorMessages = function () {
                    this.errCount = 0;
                    this.errorMessages = {};
                };
                ValidModel.prototype.addMultipleErrorMessages = function (errors) {
                    this.errCount += _.size(errors);
                    $.extend(this.errorMessages, errors);
                };
                ValidModel.prototype.addResult = function (result) {
                    if (!result.isValid) {
                        this.addMultipleErrorMessages(result.errorMessages);
                    }
                    return result.isValid;
                };
                ValidModel.prototype.getErrorCount = function () {
                    return this.errCount;
                };
                ValidModel.prototype.getErrorMessages = function () {
                    return this.errorMessages;
                };
                ValidModel.prototype.validateOnChange = function () {
                    var bRet = true;
                    bRet = this.validateOnAction(Validation.Level.Change);
                    return bRet;
                };
                ValidModel.prototype.validateOnAction = function (action) {
                    var bRet = true;
                    Validation.Engine.setAction(action);
                    GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                    if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                        Validation.Engine.setFromPropertyPage((Validation.Engine.getAction() == Validation.Level.Apply) || (Validation.Engine.getAction() == Validation.Level.Change));
                        if (Validation.Engine.isFromPropertyPage()) {
                            Validation.Engine.setAction(Validation.Engine.getLastAction());
                        }
                        bRet = this.validateActivity();
                        if (Validation.Engine.isFromPropertyPage()) {
                            Validation.Errors.updateTileErrorStatus((action == Validation.Level.Apply));
                        }
                        if (bRet) {
                            if (Validation.Engine.getLastAction() == Validation.Level.Save && Validation.Errors.getCount() == 0) {
                                Validation.Engine.resetLastAction();
                            }
                        }
                        Validation.Engine.setFromPropertyPage(false);
                    }
                    Validation.Engine.resetAction();
                    return bRet;
                };
                ValidModel.prototype.validateActivity = function () {
                    this.clearErrorMessages();
                    this._isValid = this._validateActivity();
                    return this._isValid;
                };
                ValidModel.prototype._validateActivity = function () {
                    throw new Error('Internal : Not implemented exception');
                };
                ValidModel.prototype.validateChildren = function (children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        this._isValid = child.validateActivity() && this._isValid;
                        child.showNotifications = false;
                    }
                    return this._isValid;
                };
                return ValidModel;
            })(Backbone.Model);
            Validation.ValidModel = ValidModel;
        })(Validation = ProcessDesigner.Validation || (ProcessDesigner.Validation = {}));
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="MetadataProxy.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Proxy to MetadataProvider
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
        var ConditionOperator = MscrmControls.ProcessDesigner.ConditionOperator;
        var MetadataProxy = (function () {
            function MetadataProxy(options) {
                MetadataProxy.PicklistMap = null;
                MetadataProxy.DependentPicklistMap = null;
                MetadataProxy.SourceAttributesMap = null;
                MetadataProxy.SourceValueToEntityMap = null;
            }
            MetadataProxy.getAttributeList = function (entityLogicalName, relationshipName) {
                var promise = null;
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    promise = $.Deferred(function (d) {
                        ProcessDesigner.MetadataProvider.getAttributeMetadata(entityLogicalName, d.resolve, d.reject);
                    }).promise();
                    promise.done(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                        }
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                                if (!CommonTypes.Types.String.isNullOrEmpty(relationshipName)) {
                                    var newEntityObject = _.clone(value);
                                    newEntityObject.attributeType = AttributeType.UniqueIdentifier;
                                    var sourceMetadata = MetadataProxy.getSourcesList();
                                    for (var sourceKey in sourceMetadata) {
                                        if (sourceMetadata[sourceKey].RelationshipName == relationshipName)
                                            break;
                                    }
                                    var relationMetadata = sourceMetadata[sourceKey];
                                    newEntityObject.displayName = relationMetadata.RelationshipEntity.DisplayName;
                                    newEntityObject.logicalName = relationMetadata.RelationshipEntity.PrimaryAttributeLogicName;
                                    MetadataProxy.SourceAttributesMap[entityLogicalName][newEntityObject.logicalName] = newEntityObject;
                                }
                            }
                            if (!MetadataProxy.IsAttributeNotAllowed(value.logicalName)) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            }
                        });
                    });
                }
                else {
                    var deferred = $.Deferred();
                    if (!CommonTypes.Types.String.isNullOrEmpty(relationshipName) && MetadataProxy.SourceAttributesMap[entityLogicalName] != null) {
                        var sourceMetadata = MetadataProxy.getSourcesList();
                        for (var sourceKey in sourceMetadata) {
                            if (sourceMetadata[sourceKey].RelationshipName == relationshipName)
                                break;
                        }
                        var relationMetadata = sourceMetadata[sourceKey];
                        if (CommonTypes.Types.String.isNullOrEmpty(MetadataProxy.SourceAttributesMap[entityLogicalName][relationMetadata.RelationshipEntity.PrimaryAttributeLogicName])) {
                            var newEntityObject;
                            newEntityObject = new Object();
                            newEntityObject.attributeType = AttributeType.UniqueIdentifier;
                            newEntityObject.displayName = relationMetadata.RelationshipEntity.DisplayName;
                            newEntityObject.logicalName = relationMetadata.RelationshipEntity.PrimaryAttributeLogicName;
                            var localHash = _.clone(MetadataProxy.SourceAttributesMap[entityLogicalName]);
                            MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                            MetadataProxy.SourceAttributesMap[entityLogicalName][newEntityObject.logicalName] = newEntityObject;
                            for (var key in localHash) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName][key] = localHash[key];
                            }
                        }
                    }
                    else if (CommonTypes.Types.String.isNullOrEmpty(relationshipName) && MetadataProxy.SourceAttributesMap[entityLogicalName] != null) {
                        var isEntityFIeldIncluded = false;
                        for (var key in MetadataProxy.SourceAttributesMap[entityLogicalName]) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName][key].attributeType == AttributeType.UniqueIdentifier) {
                                isEntityFIeldIncluded = true;
                                break;
                            }
                        }
                        if (isEntityFIeldIncluded)
                            delete MetadataProxy.SourceAttributesMap[entityLogicalName][key];
                    }
                    deferred.resolve(MetadataProxy.SourceAttributesMap[entityLogicalName]);
                    promise = deferred.promise();
                }
                return promise;
            };
            MetadataProxy.getFieldAttributeMetadata = function (entityLogicalName) {
                var promise = null;
                if (MetadataProxy.DependentPicklistMap == null || MetadataProxy.DependentPicklistMap[entityLogicalName] == null) {
                    promise = $.Deferred(function (d) {
                        ProcessDesigner.MetadataProvider.getFieldAttributeMetadata(entityLogicalName, d.resolve, d.reject);
                    }).promise();
                    promise.done(function (attributeList) {
                        if (MetadataProxy.DependentPicklistMap == null) {
                            MetadataProxy.DependentPicklistMap = {};
                        }
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.DependentPicklistMap[entityLogicalName] == null) {
                                MetadataProxy.DependentPicklistMap[entityLogicalName] = {};
                            }
                            if (!MetadataProxy.IsAttributeNotAllowed(value.logicalName)) {
                                MetadataProxy.DependentPicklistMap[entityLogicalName][value.logicalName] = value;
                            }
                        });
                    });
                }
                else {
                    var deferred = $.Deferred();
                    deferred.resolve(MetadataProxy.DependentPicklistMap[entityLogicalName]);
                    promise = deferred.promise();
                }
                return promise;
            };
            MetadataProxy.IsAttributeNotAllowed = function (attrLogicalName) {
                var invalidBPFAttributes = ["fullname",
                    "yomifullname",
                    "address1_composite",
                    "address2_composite",
                    "shipto_composite",
                    "billto_composite"];
                return (invalidBPFAttributes.indexOf(attrLogicalName) > -1);
            };
            MetadataProxy.getAttributeListForSource = function (entityLogicalName) {
            };
            MetadataProxy.getSourcesList = function () {
                var sourcesList = MscrmControls.ProcessDesigner.MetadataProvider.getLoadedRelationshipEntityMetadata().slice(0, MscrmControls.ProcessDesigner.MetadataProvider.getLoadedRelationshipEntityMetadata().length);
                if (MetadataProxy.SourceValueToEntityMap == null) {
                    MetadataProxy.SourceValueToEntityMap = {};
                    MetadataProxy.SourceValueToEntityMap[MscrmControls.ProcessDesigner.primaryEntity] = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    sourcesList.forEach(function (relationshipMetadata) {
                        if (typeof (relationshipMetadata) != "string") {
                            MetadataProxy.SourceValueToEntityMap[relationshipMetadata.RelationshipName] = new Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked(MscrmControls.ProcessDesigner.processStep, relationshipMetadata.RelationshipAttribute.LogicalName, relationshipMetadata.RelationshipEntity.EntityLogicalName, relationshipMetadata.RelationshipName);
                        }
                    });
                }
                return sourcesList;
            };
            MetadataProxy.getAttributeListByDataType = function (entityLogicalName, dataType) {
                var deferred = $.Deferred();
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    MetadataProxy.getAttributeList(entityLogicalName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                        }
                        var attrList = [];
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                            }
                            MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            if (value.attributeType == dataType) {
                                attrList.push(value);
                            }
                        });
                        deferred.resolve(attrList);
                    });
                }
                else {
                    var attrList = [];
                    for (var attributeName in MetadataProxy.SourceAttributesMap[entityLogicalName]) {
                        if (MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType == dataType) {
                            attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                        }
                    }
                    deferred.resolve(attrList);
                }
                return deferred.promise();
            };
            MetadataProxy.getPickListValues = function (entityLogicalName, attributeLogicalName) {
                var promise = null;
                if (MetadataProxy.PicklistMap == null || attributeLogicalName === entityLogicalName || !MetadataProxy.PicklistMap[attributeLogicalName]) {
                    promise = $.Deferred(function (d) {
                        ProcessDesigner.MetadataProvider.getPickListValues(entityLogicalName, [attributeLogicalName], d.resolve, d.reject);
                    }).promise();
                    promise.done(function (pickList) {
                        if (!MetadataProxy.PicklistMap) {
                            MetadataProxy.PicklistMap = {};
                        }
                        MetadataProxy.PicklistMap[attributeLogicalName] = pickList;
                    });
                }
                else {
                    var deferred = $.Deferred();
                    deferred.resolve(MetadataProxy.PicklistMap[attributeLogicalName]);
                    promise = deferred.promise();
                }
                return promise;
            };
            MetadataProxy.getDependentPickListParentLogicalName = function (entityLogicalName, attributeLogicalName) {
                if (MetadataProxy.DependentPicklistMap && MetadataProxy.DependentPicklistMap[entityLogicalName] && MetadataProxy.DependentPicklistMap[entityLogicalName][attributeLogicalName]) {
                    return MetadataProxy.DependentPicklistMap[entityLogicalName][attributeLogicalName].parentPicklistLogicalName;
                }
                return "null";
            };
            MetadataProxy.getDependentPickListChildLogicalName = function (entityLogicalName, attributeLogicalName) {
                if (MetadataProxy.DependentPicklistMap && MetadataProxy.DependentPicklistMap[entityLogicalName] && MetadataProxy.DependentPicklistMap[entityLogicalName][attributeLogicalName]) {
                    return MetadataProxy.DependentPicklistMap[entityLogicalName][attributeLogicalName].childPicklistLogicalNames;
                }
                return "null";
            };
            MetadataProxy.getOperatorList = function (typeName) {
                return ProcessDesigner.MetadataProvider.getOperatorList(AttributeType[typeName]);
            };
            MetadataProxy.getFormulaOperators = function (typeName) {
                var ret = null;
                switch (typeName) {
                    case AttributeType.Double:
                    case AttributeType.Integer:
                    case AttributeType.BigInt:
                    case AttributeType.Decimal:
                    case AttributeType.Money:
                        ret = [{ name: '+', value: 0 }, { name: '-', value: 1 }, { name: '*', value: 2 }, { name: '/', value: 3 }];
                        break;
                    case AttributeType.DateTime:
                        ret = [{ name: '+', value: 0 }, { name: '-', value: 1 }];
                        break;
                }
                return ret;
            };
            MetadataProxy.getLocalizedString = function (inputString) {
                return ProcessDesigner.MetadataProvider.getLocalizedString(inputString);
            };
            MetadataProxy.isUnaryOperator = function (operatorName) {
                return ProcessDesigner.MetadataProvider.isUnaryOperator(operatorName);
            };
            MetadataProxy.isFormulaValidForAttributeType = function (attributeType) {
                return ProcessDesigner.MetadataProvider.isFormulaValidForAttributeType(attributeType);
            };
            MetadataProxy.getNumericAttributesList = function (entityLogicalName) {
                var deferred = $.Deferred();
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    MetadataProxy.getAttributeList(entityLogicalName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                        }
                        var attrList = [];
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                            }
                            MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            if (MetadataProxy.isNumericField(value.logicalName, entityLogicalName)) {
                                attrList.push(value);
                            }
                        });
                        deferred.resolve(attrList);
                    });
                }
                else {
                    var attrList = [];
                    for (var attributeName in MetadataProxy.SourceAttributesMap[entityLogicalName]) {
                        if (MetadataProxy.isNumericField(attributeName, entityLogicalName)) {
                            attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                        }
                    }
                    deferred.resolve(attrList);
                }
                return deferred.promise();
            };
            MetadataProxy.getTextAttributesList = function (entityLogicalName) {
                var deferred = $.Deferred();
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    MetadataProxy.getAttributeList(entityLogicalName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                        }
                        var attrList = [];
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                            }
                            MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            if (value.attributeType == AttributeType.String) {
                                attrList.push(value);
                            }
                        });
                        deferred.resolve(attrList);
                    });
                }
                else {
                    var attrList = [];
                    for (var attributeName in MetadataProxy.SourceAttributesMap[entityLogicalName]) {
                        if (MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType == AttributeType.String) {
                            attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                        }
                    }
                    deferred.resolve(attrList);
                }
                return deferred.promise();
            };
            MetadataProxy.getComparableAttributes = function (entityLogicalName, attributeLogicalName, targetEntityLogicalName, operatorType) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeLogicalName].attributeType;
                if (MetadataProxy.isNumericField(attributeLogicalName, entityLogicalName)) {
                    return MetadataProxy.getNumericAttributesList(targetEntityLogicalName);
                }
                else if (attributeType == AttributeType.String) {
                    return MetadataProxy.getTextAttributesList(targetEntityLogicalName);
                }
                else if (!CommonTypes.Types.String.isNullOrEmpty(operatorType)
                    && (MetadataProxy.LookupAttributeTypes.indexOf(attributeType) > -1 || MetadataProxy.StatusAttributeTypes.indexOf(attributeType) > -1)
                    && this.isUniversalStringOperator(operatorType)) {
                    return MetadataProxy.getTextAttributesList(targetEntityLogicalName);
                }
                else if (MetadataProxy.LookupAttributeTypes.indexOf(attributeType) > -1) {
                    return MetadataProxy.getLookupAttributesList(targetEntityLogicalName, attributeType);
                }
                else {
                    return MetadataProxy.getAttributeListByDataType(targetEntityLogicalName, attributeType);
                }
            };
            MetadataProxy.getLookupAttributesList = function (entityLogicalName, dataType) {
                var deferred = $.Deferred();
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    MetadataProxy.getAttributeList(entityLogicalName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                        }
                        var attrList = [];
                        _.each(attributeList, function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                            }
                            MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            if (dataType != AttributeType.Owner && MetadataProxy.LookupAttributeTypes.indexOf(value.attributeType) > -1) {
                                attrList.push(value);
                            }
                            else if (MetadataProxy.LookupAttributeTypes.indexOf(value.attributeType) > -1) {
                                if (value.attributeType == AttributeType.Lookup) {
                                    if (value.lookupTypes == AttributeType.Owner) {
                                        attrList.push(value);
                                    }
                                }
                                else {
                                    attrList.push(value);
                                }
                            }
                        });
                        deferred.resolve(attrList);
                    });
                }
                else {
                    var attrList = [];
                    for (var attributeName in MetadataProxy.SourceAttributesMap[entityLogicalName]) {
                        if (dataType != AttributeType.Owner && MetadataProxy.LookupAttributeTypes.indexOf(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType) > -1) {
                            attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                        }
                        else if (MetadataProxy.LookupAttributeTypes.indexOf(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType) > -1) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType == AttributeType.Lookup) {
                                if (MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].lookupTypes == AttributeType.Owner) {
                                    attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                                }
                            }
                            else {
                                attrList.push(MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName]);
                            }
                        }
                    }
                    deferred.resolve(attrList);
                }
                return deferred.promise();
            };
            MetadataProxy.isTextField = function (attributeName, entityLogicalName, operatorName) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType;
                var operatorType = ConditionOperator[operatorName];
                switch (attributeType) {
                    case AttributeType.Picklist:
                    case AttributeType.State:
                    case AttributeType.Status:
                    case AttributeType.Lookup:
                    case AttributeType.Owner:
                    case AttributeType.Customer:
                        switch (operatorType) {
                            case ConditionOperator.Contains:
                            case ConditionOperator.DoesNotContain:
                            case ConditionOperator.BeginsWith:
                            case ConditionOperator.DoesNotBeginWith:
                            case ConditionOperator.EndsWith:
                            case ConditionOperator.DoesNotEndWith:
                                return true;
                            default:
                                return false;
                        }
                    case AttributeType.DateTime:
                    case AttributeType.Boolean:
                        return false;
                    default:
                        return true;
                }
            };
            MetadataProxy.isTextFieldNoOp = function (attributeName, entityLogicalName) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType;
                switch (attributeType) {
                    case AttributeType.Picklist:
                    case AttributeType.DateTime:
                    case AttributeType.State:
                    case AttributeType.Status:
                    case AttributeType.Boolean:
                    case AttributeType.Lookup:
                    case AttributeType.Owner:
                    case AttributeType.Customer:
                        return false;
                    default:
                        return true;
                }
            };
            MetadataProxy.isNumericField = function (attributeName, entityLogicalName) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType;
                switch (attributeType) {
                    case AttributeType.BigInt:
                    case AttributeType.Decimal:
                    case AttributeType.Double:
                    case AttributeType.Integer:
                    case AttributeType.Money:
                        return true;
                    default:
                        return false;
                }
            };
            MetadataProxy.isDependentOptionSetField = function (entityLogicalName, attributeName) {
                if (MetadataProxy.DependentPicklistMap && MetadataProxy.DependentPicklistMap[entityLogicalName] && MetadataProxy.DependentPicklistMap[entityLogicalName][attributeName]
                    && (MetadataProxy.DependentPicklistMap[entityLogicalName][attributeName].parentPicklistLogicalName
                        || MetadataProxy.DependentPicklistMap[entityLogicalName][attributeName].childPicklistLogicalNames)) {
                    return true;
                }
                else {
                    return false;
                }
            };
            MetadataProxy.isEnumeratedField = function (attributeName, entityLogicalName) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType;
                switch (attributeType) {
                    case AttributeType.Picklist:
                    case AttributeType.State:
                    case AttributeType.Status:
                    case AttributeType.Boolean:
                        return true;
                    default:
                        return false;
                }
            };
            MetadataProxy.getPicklistValueNames = function (attributeName, pickListOptionOrderList) {
                if (!MetadataProxy.PicklistMap || !MetadataProxy.PicklistMap[attributeName]) {
                    return pickListOptionOrderList;
                }
                var picklistValues = MetadataProxy.PicklistMap[attributeName];
                var pickListValueNames = [];
                _.each(pickListOptionOrderList, function (id) {
                    _.some(picklistValues, function (value) {
                        if (value.pickListValueOrderId == id) {
                            pickListValueNames.push(value.pickListValue);
                            return true;
                        }
                    });
                });
                return pickListValueNames;
            };
            MetadataProxy.getAttributeType = function (attributeLogicalName, entityLogicalName) {
                if (MetadataProxy.SourceAttributesMap && MetadataProxy.SourceAttributesMap[entityLogicalName] && MetadataProxy.SourceAttributesMap[entityLogicalName][attributeLogicalName]) {
                    return MetadataProxy.SourceAttributesMap[entityLogicalName][attributeLogicalName].attributeType;
                }
                return AttributeType.Unknown;
            };
            MetadataProxy.dispose = function () {
                MetadataProxy.SourceAttributesMap = {};
                MetadataProxy.PicklistMap = [];
            };
            MetadataProxy.getDisplayFieldName = function (entityName) {
                var displayFieldName = "name";
                switch (entityName) {
                    case "systemuser":
                        displayFieldName = "fullname";
                        break;
                }
                return displayFieldName;
            };
            MetadataProxy.isUniversalStringOperator = function (operator) {
                return (this.UniversalStringOperators.indexOf(operator) > -1);
            };
            MetadataProxy.UniversalStringOperators = [ConditionOperator.Contains, ConditionOperator.DoesNotContain, ConditionOperator.BeginsWith, ConditionOperator.DoesNotBeginWith, ConditionOperator.EndsWith, ConditionOperator.DoesNotEndWith];
            MetadataProxy.LookupAttributeTypes = [AttributeType.Lookup, AttributeType.Customer, AttributeType.Owner];
            MetadataProxy.StatusAttributeTypes = [AttributeType.State, AttributeType.Status];
            return MetadataProxy;
        })();
        ProcessDesigner.MetadataProxy = MetadataProxy;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="Util.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Provides utilities to read/write members to Object.
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Utility = _Microsoft.Client.Telemetry.Utility;
        var Dictionary = (function () {
            function Dictionary() {
            }
            return Dictionary;
        })();
        ProcessDesigner.Dictionary = Dictionary;
        var ValidationResult = (function () {
            function ValidationResult(field) {
                this.field = field;
                this.isValid = false;
                this.errors = [];
            }
            ValidationResult.prototype.success = function () {
                this.isValid = true;
                return this;
            };
            ValidationResult.prototype.failure = function (err) {
                this.errors.push(err);
                this.isValid = false;
                return this;
            };
            ValidationResult.prototype.addError = function (err) {
                this.errors.push(err);
                this.isValid = false;
                return this;
            };
            return ValidationResult;
        })();
        ProcessDesigner.ValidationResult = ValidationResult;
        var Util = (function () {
            function Util() {
            }
            Util.isNull = function (obj) {
                return _.isNull(obj) || _.isUndefined(obj);
            };
            Util.isEmptyString = function (obj) {
                var ret = false;
                if (!Util.isNull(obj) && _.isString(obj)) {
                    ret = (obj.trim().length == 0);
                }
                return ret;
            };
            Util.getValue_ = function (options, key) {
                var val = null;
                try {
                    if (!Util.isNull(options) && !Util.isNull(key)) {
                        val = options[key];
                    }
                }
                catch (e) {
                }
                return val;
            };
            Util.getValue = function (options, key, defaultVal) {
                var val = defaultVal;
                var val_ = Util.getValue_(options, key);
                if (!Util.isNull(val_)) {
                    val = val_;
                }
                return val;
            };
            Util.getStringValue = function (options, key, defaultVal) {
                var val = defaultVal;
                var val_ = Util.getValue_(options, key);
                if (!Util.isNull(val_) && _.isString(val_)) {
                    val = val_.toString();
                }
                return val;
            };
            Util.getNumberValue = function (options, key, defaultVal) {
                var val = defaultVal;
                var val_ = Util.getValue_(options, key);
                if (!Util.isNull(val_) && _.isNumber(val_)) {
                    val = val_;
                }
                return val;
            };
            Util.getIntValue = function (options, key, defaultVal) {
                var val = defaultVal;
                var val_ = Util.getValue_(options, key);
                if (!Util.isNull(val_) && _.isNumber(val_) && Math.floor(val_) == val_) {
                    val = val_;
                }
                return val;
            };
            Util.getBooleanValue = function (options, key, defaultVal) {
                var val = defaultVal;
                var val_ = Util.getValue_(options, key);
                if (!Util.isNull(val_) && _.isBoolean(val_)) {
                    val = val_;
                }
                return val;
            };
            Util.tabIndexValue = 0;
            return Util;
        })();
        ProcessDesigner.Util = Util;
        var DOMUtil = (function () {
            function DOMUtil() {
            }
            DOMUtil.addErrorStatus = function (el) {
                el.css({ "border-width": "1px", "border-style": "solid", "border-color": "red" });
            };
            DOMUtil.removeErrorStatus = function (el) {
                el.css({ "border-width": "", "border-style": "", "border-color": "" });
            };
            DOMUtil.getIgnoredFields = function (model) {
                var iFields = new Array();
                if (model.ignoredFields) {
                    iFields = model.ignoredFields;
                }
                return iFields;
            };
            DOMUtil.clearIgnoredFields = function (model) {
                if (model.clearIgnoredFields) {
                    model.clearIgnoredFields();
                }
            };
            DOMUtil.removeErrorMessages = function (el, labelClass, errorElementClass) {
                el.find('.' + labelClass).remove();
                var elems = el.find('.' + errorElementClass);
                if (errorElementClass == 'errorElementGlobal') {
                    $("#propertyTab").parent("li").removeAttr('title');
                }
                for (var i = 0; i < elems.length; i++) {
                    var elem = $(elems[i]);
                    elem.css({ "border-width": "", "border-style": "", "border-color": "" });
                    elem.removeClass('.' + errorElementClass);
                    var marginBottom = elem.attr('data-margin-bottom');
                    if (marginBottom) {
                        elem.css('margin-bottom', marginBottom);
                        elem.removeAttr('data-margin-bottom');
                    }
                    else {
                        elem.removeAttr('margin-bottom');
                    }
                }
            };
            DOMUtil._renderErrorMessages = function (model, el, labelClass, errorElementClass, errors) {
                var iFields = DOMUtil.getIgnoredFields(model);
                for (var id in errors) {
                    if (iFields.indexOf(id) == -1) {
                        var error = errors[id];
                        var errorIconMessage = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ErrorOn_Prefix");
                        var elem = el.find(id);
                        if (elem && error) {
                            if (errorElementClass != 'errorElementGlobal') {
                                elem.css({ "border-width": "1px", "border-style": "solid", "border-color": "red" });
                            }
                            elem.addClass(errorElementClass);
                            var marginBottom = elem.css('margin-bottom');
                            elem.css('margin-bottom', '0px');
                            if (marginBottom && marginBottom.length > 0) {
                                elem.attr('data-margin-bottom', marginBottom);
                                marginBottom = 'margin-bottom:' + marginBottom + ';';
                            }
                            else {
                                marginBottom = 'margin-bottom: 15px;';
                            }
                            if (errorElementClass == 'errorElementGlobal') {
                                elem.after("<div  aria-live='assertive' aria-atomic='true' aria-relevant='all' aria-label=\"" + errorIconMessage + error + "\" id='" + labelId + "' class='" + labelClass + "' style='" + marginBottom + "'><table class= 'validationLabel errorLabel'><tr><td><span class= 'validationLabel errorLabel validationSymbol errorSymbol' aria-label=\"" + errorIconMessage + "\" title=\"" + errorIconMessage + "\" ></span></td><td><span class='validationMessage errorMessage' aria-label=\"" + error + "\"  title=\"" + error + "\" >" + error + "</span></td></tr></table></div>");
                                $("#propertyTab").parent("li").attr("title", error);
                            }
                            else {
                                var labelId = Utility.newGuid();
                                elem.after("<div  aria-live='assertive' aria-atomic='true' aria-relevant='all' aria-label=\"" + errorIconMessage + error + "\" id='" + labelId + "' class='" + labelClass + "' style='" + marginBottom + "'><table class= 'validationLabel errorLabel'><tr><td><span class= 'validationLabel errorLabel validationSymbol errorSymbol' aria-label=\"" + errorIconMessage + "\" title=\"" + errorIconMessage + "\" ></span></td><td><span class='validationMessage errorMessage' aria-label=\"" + error + "\"  title=\"" + error + "\" >" + error + "</span></td></tr></table></div>");
                                $(elem).attr("aria-describedby", labelId);
                            }
                        }
                    }
                }
                DOMUtil.clearIgnoredFields(model);
            };
            DOMUtil._renderWarningMessages = function (model, el, labelClass, warningElementClass, warnings) {
                var iFields = DOMUtil.getIgnoredFields(model);
                for (var id in warnings) {
                    if (iFields.indexOf(id) == -1) {
                        var warning = warnings[id];
                        var warningIconMessage = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("LOCID_PROCESS_CLOSEWARNINGALT");
                        var elem = el.find(id);
                        if (elem && warning) {
                            elem.addClass(warningElementClass);
                            var marginBottom = elem.css('margin-bottom');
                            elem.css('margin-bottom', '10px');
                            if (marginBottom && marginBottom.length > 0) {
                                elem.attr('data-margin-bottom', marginBottom);
                                marginBottom = 'margin-bottom:' + marginBottom + ';';
                            }
                            else {
                                marginBottom = 'margin-bottom: 15px;';
                            }
                            var labelId = Utility.newGuid();
                            elem.parent().children().last().after("<div  aria-live='assertive' aria-atomic='true' aria-relevant='all' aria-label=\"" + warningIconMessage + warning + "\" id='" + labelId + "' class='" + labelClass + "' style='" + marginBottom + "'><table class= 'validationLabel warningLabel'><tr><td><span class= 'validationLabel warningLabel validationSymbol warningSymbol' aria-label=\"" + warningIconMessage + "\" title=\"" + warningIconMessage + "\" ></span></td><td><span class='validationMessage warningMessage' aria-label=\"" + warning + "\"  title=\"" + warning + "\" >" + warning + "</span></td></tr></table></div>");
                            $(elem).attr("aria-describedby", labelId);
                        }
                    }
                }
                DOMUtil.clearIgnoredFields(model);
            };
            DOMUtil.renderErrorMessages = function (model, el, errors) {
                DOMUtil.removeErrorMessages(el, 'errorLabel', 'errorElement');
                DOMUtil._renderErrorMessages(model, el, 'errorLabel', 'errorElement', errors);
            };
            DOMUtil.renderWarningMessages = function (model, el, warnings) {
                DOMUtil.removeErrorMessages(el, 'warningLabel', 'warningElement');
                DOMUtil._renderWarningMessages(model, el, 'warningLabel', 'warningElement', warnings);
            };
            DOMUtil.renderPropertyPageLevelErrorMessages = function (model, el, errors) {
                DOMUtil.removeErrorMessages(el, 'errorLabelGlobal', 'errorElementGlobal');
                DOMUtil._renderErrorMessages(model, el, 'errorLabelGlobal', 'errorElementGlobal', errors);
            };
            return DOMUtil;
        })();
        ProcessDesigner.DOMUtil = DOMUtil;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="Rules.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Defines all interfaces/classes required for validation rules. 
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="./IValid.ts"/>
/// <reference path="./Util.ts"/>
/// <reference path="./AttributeTypes.ts"/>
/// <reference path="./MetaDataProxy.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation;
        (function (Validation) {
            var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
            var Result = MscrmControls.ProcessDesigner.Validation.Result;
            var Util = MscrmControls.ProcessDesigner.Util;
            var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
            var Rules = (function () {
                function Rules() {
                }
                return Rules;
            })();
            Validation.Rules = Rules;
            var BaseRule = (function () {
                function BaseRule() {
                }
                BaseRule.createResult = function (bRes, message) {
                    var res = new Validation.SingleResult();
                    res.set(bRes, message);
                    return res;
                };
                return BaseRule;
            })();
            Validation.BaseRule = BaseRule;
            var Verify = (function () {
                function Verify() {
                }
                Verify.isNull = function (obj) {
                    return Util.isNull(obj);
                };
                Verify.empty = function (val) {
                    var bRet = false;
                    if (_.isString(val)) {
                        bRet = (val.trim().length == 0);
                    }
                    else if (_.isArray(val)) {
                        bRet = (val.length == 0);
                    }
                    else {
                        bRet = (_.size(val) == 0);
                    }
                    return bRet;
                };
                Verify.isTrue = function (val) {
                    return val == true;
                };
                Verify.integer = function (val) {
                    return $.isNumeric(val) && Math.floor(val) == val;
                };
                Verify.max = function (val, max) {
                    return val <= max;
                };
                Verify.min = function (val, min) {
                    return min <= val;
                };
                Verify.range = function (val, max, min) {
                    return Verify.min(val, min) && Verify.max(val, max);
                };
                return Verify;
            })();
            Validation.Verify = Verify;
            var MaxLength = (function (_super) {
                __extends(MaxLength, _super);
                function MaxLength() {
                    _super.apply(this, arguments);
                }
                MaxLength.apply = function (value, options) {
                    var maxLength = Util.getIntValue(options, 'maxLength', 2000);
                    var bRes = Verify.max(value.length, maxLength);
                    var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Length_Exceeded");
                    return BaseRule.createResult(bRes, message);
                };
                return MaxLength;
            })(BaseRule);
            Validation.MaxLength = MaxLength;
            var Required = (function (_super) {
                __extends(Required, _super);
                function Required() {
                    _super.apply(this, arguments);
                }
                Required.apply = function (value, options) {
                    var bRes = !Verify.isNull(value) && !Verify.empty(value);
                    var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage");
                    return BaseRule.createResult(bRes, message);
                };
                return Required;
            })(BaseRule);
            Validation.Required = Required;
            var CompleteChain = (function (_super) {
                __extends(CompleteChain, _super);
                function CompleteChain() {
                    _super.apply(this, arguments);
                }
                CompleteChain.apply = function (value, options) {
                    var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_DependentOptionSetField_WarningMessage");
                    var bRes = Verify.isTrue(value);
                    return BaseRule.createResult(bRes, message);
                };
                return CompleteChain;
            })(BaseRule);
            Validation.CompleteChain = CompleteChain;
            var Number_ = (function (_super) {
                __extends(Number_, _super);
                function Number_() {
                    _super.apply(this, arguments);
                }
                Number_.apply = function (value, options) {
                    var bRes = $.isNumeric(value);
                    return BaseRule.createResult(bRes, "");
                };
                return Number_;
            })(BaseRule);
            Validation.Number_ = Number_;
            var NumberFormat = (function (_super) {
                __extends(NumberFormat, _super);
                function NumberFormat() {
                    _super.apply(this, arguments);
                }
                NumberFormat.apply = function (value, options) {
                    var bRet = false;
                    var attributeType = Util.getIntValue(options, 'attributeType', AttributeType.Integer);
                    switch (attributeType) {
                        case AttributeType.BigInt:
                        case AttributeType.Integer:
                            bRet = (Math.floor(value) == value);
                            break;
                        case AttributeType.Double:
                        case AttributeType.Decimal:
                        case AttributeType.Money:
                            bRet = true;
                            break;
                    }
                    return BaseRule.createResult(bRet, "");
                };
                return NumberFormat;
            })(BaseRule);
            Validation.NumberFormat = NumberFormat;
            var Range = (function (_super) {
                __extends(Range, _super);
                function Range() {
                    _super.apply(this, arguments);
                }
                Range.apply = function (value, options) {
                    var maxVal = Util.getIntValue(options, 'maxValue', 2147483647);
                    var minVal = Util.getIntValue(options, 'minValue', -2147483648);
                    var bRet = Verify.range(value, maxVal, minVal);
                    return BaseRule.createResult(bRet, "");
                };
                return Range;
            })(BaseRule);
            Validation.Range = Range;
            var Errors = (function () {
                function Errors() {
                }
                Errors.clearErrors = function () {
                    Errors.errors = {};
                    Errors.errorCount = 0;
                };
                Errors.updateErrors = function (model) {
                    var oldErrCount = Errors.errors[model.cid] ? Errors.errors[model.cid] : 0;
                    Errors.errorCount -= oldErrCount;
                    var newErrCount = model.getErrorCount();
                    Errors.errors[model.cid] = newErrCount;
                    Errors.errorCount += newErrCount;
                };
                Errors.getCount = function () {
                    Errors.errorCount = 0;
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                    activities.forEach(function (activity) {
                        Errors.errorCount += activity.getErrorCount();
                    });
                    return Errors.errorCount + GenericWorkflowDesigner.Settings.notification.GetNotifictionCount();
                };
                Errors.updateNotifications = function () {
                    var summaryMessage;
                    var message;
                    var errorCount = Errors.getCount();
                    if (errorCount > 0) {
                        var errorMessage = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_ErrorMessage");
                        if (Engine.getLastAction() == Validation.Level.Save) {
                            errorMessage = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_SaveValidationMessage");
                        }
                        message = CommonTypes.Types.String.Format(errorMessage, errorCount);
                        summaryMessage = new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Error, message);
                    }
                    else {
                        message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_Message");
                        if (Engine.getLastAction() == Validation.Level.Save) {
                            message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_SaveMessage");
                        }
                        summaryMessage = new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Success, message);
                    }
                    GenericWorkflowDesigner.Settings.notification.ShowNotification(summaryMessage, GenericWorkflowDesigner.ValidationMode.Error);
                    return message;
                };
                Errors.registerPropertyViewCurrentModelClone = function (value) {
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (propertyViewCurrentModel) {
                        propertyViewCurrentModel.___internalValidationSetPropertyPageModel(value);
                    }
                };
                Errors._updateTileErrorStatus = function (errorTile) {
                    if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                        if (errorTile.getErrorCount() == 0) {
                            errorTile.isValid = true;
                        }
                        else {
                            errorTile.isValid = false;
                        }
                        Errors.updateErrors(errorTile);
                        Errors.updateNotifications();
                    }
                };
                Errors.updateTileErrorStatus = function (isApply) {
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (propertyViewCurrentModel) {
                        var errorTile = propertyViewCurrentModel.getErrorTile();
                        Errors._updateTileErrorStatus(errorTile);
                    }
                };
                Errors.propertyTabUnloaded = function () {
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (propertyViewCurrentModel) {
                        if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                            var errorTile = propertyViewCurrentModel.getErrorTile();
                            Errors._updateTileErrorStatus(errorTile);
                        }
                    }
                };
                Errors.errorCount = 0;
                Errors.errors = {};
                return Errors;
            })();
            Validation.Errors = Errors;
            var Engine = (function () {
                function Engine() {
                }
                Engine.setAction = function (action) {
                    Engine._action = action;
                    if (action >= Validation.Level.Validate) {
                        var processControl = window["ProcessControl"];
                        if (!processControl.Configuration.ProcessDesignerMenuActions.isValidationOn()) {
                            processControl.Configuration.ProcessDesignerMenuActions.validationButtonOn();
                        }
                    }
                    if (action == Validation.Level.Save || action == Validation.Level.SaveAs || action == Validation.Level.SaveAndClose) {
                        Engine._lastAction = Validation.Level.Save;
                    }
                    else if (action == Validation.Level.Validate) {
                        Engine._lastAction = Validation.Level.Validate;
                    }
                    else if (action == Validation.Level.Activate || action == Validation.Level.Deactivate) {
                        Engine._lastAction = Validation.Level.Activate;
                    }
                };
                Engine.resetAction = function () {
                    Engine._action = Validation.Level.EveryTime;
                };
                Engine.isDefaultAction = function () {
                    return Engine._action == Validation.Level.EveryTime;
                };
                Engine.getAction = function () {
                    return Engine._action ? Engine._action : Validation.Level.EveryTime;
                };
                Engine.getLastAction = function () {
                    return Engine._lastAction;
                };
                Engine.resetLastAction = function () {
                    Engine._lastAction = Validation.Level.Unknown;
                };
                Engine.isFromPropertyPage = function () {
                    return Engine._isFromPropertyPage;
                };
                Engine.setFromPropertyPage = function (val) {
                    Engine._isFromPropertyPage = val;
                };
                Engine.validateField = function (fieldName, value, validationFn, level_, message, options) {
                    var result = new Result(fieldName);
                    var res = Engine.applyRule(value, validationFn, level_, message, options);
                    result.addResult(res);
                    return result;
                };
                Engine.applyRule = function (value, validationFn, level_, message, options) {
                    var res = new Validation.SingleResult();
                    if (Engine.isAllowedLevel(level_)) {
                        var sResult = validationFn(value, options);
                        if (typeof (sResult) === "boolean") {
                            res.set(sResult, message);
                        }
                        else {
                            if (!sResult.isValid && (sResult.message && sResult.message.length > 0)) {
                                message = sResult.message;
                            }
                            res.set(sResult.isValid, message);
                        }
                    }
                    return res;
                };
                Engine.isAllowedLevel = function (level_) {
                    return level_ <= Engine.getAction();
                };
                Engine.checkLevel = function (fieldName, level_, message) {
                    var result = new Result(fieldName);
                    var res = new Validation.SingleResult();
                    if (Engine.isAllowedLevel(level_)) {
                        res.set(false, message);
                        result.addResult(res);
                    }
                    return result;
                };
                Engine.addOptions = function (options, newOptions) {
                    if (!options) {
                        options = {};
                    }
                    for (var opt in newOptions) {
                        options[opt] = newOptions[opt];
                    }
                    return options;
                };
                Engine.validateAttributeValue_ = function (fieldName, value, attributeType, level_, options) {
                    var result = new Result(fieldName);
                    var res = new Validation.SingleResult();
                    switch (attributeType) {
                        case AttributeType.Picklist:
                        case AttributeType.State:
                        case AttributeType.Status:
                        case AttributeType.Boolean:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            result.addResult(res);
                            break;
                        case AttributeType.Lookup:
                        case AttributeType.Owner:
                        case AttributeType.Customer:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            result.addResult(res);
                            break;
                        case AttributeType.DateTime:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            if (!res.isValid) {
                                var dtUtil = new ProcessDesigner.DateTimeUtil();
                                var dt = dtUtil.strToDateTime(value);
                                if (dt.errors.date || dt.errors.time) {
                                    var message = window['String'].format(ProcessDesigner.MetadataProvider.getLocalizedString("LOCID_ALERT_ENTER_VALID_DATE"), window['USER_DATE_FORMATSTRING']);
                                    res = new Validation.SingleResult();
                                    res.set(false, message);
                                }
                            }
                            result.addResult(res);
                            break;
                        case AttributeType.BigInt:
                        case AttributeType.Decimal:
                        case AttributeType.Double:
                        case AttributeType.Integer:
                        case AttributeType.Money:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            if (res.isValid) {
                                var maxVal = Util.getNumberValue(options, 'maxValue', 2147483647);
                                var minVal = Util.getNumberValue(options, 'minValue', -2147483648);
                                var precision = Util.getIntValue(options, 'precision', 0);
                                var start = Mscrm.NumberUtility.addFormatting(minVal, precision);
                                var end = Mscrm.NumberUtility.addFormatting(maxVal, precision);
                                var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Float_Range");
                                if (attributeType == AttributeType.Integer) {
                                    message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Int_Range");
                                }
                                message = window['String'].format(message, start, end);
                                res = Engine.applyRule(value, NumberFormat.apply, level_, message, Engine.addOptions(options, { attributeType: attributeType }));
                                if (res.isValid) {
                                    res = Engine.applyRule(value, Range.apply, level_, message, options);
                                }
                            }
                            result.addResult(res);
                            break;
                        case AttributeType.String:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            if (res.isValid) {
                                res = Engine.applyRule(value, MaxLength.apply, level_, null, options);
                            }
                            result.addResult(res);
                            break;
                        default:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            result.addResult(res);
                            break;
                    }
                    return result;
                };
                Engine.validateAttributeValue = function (entityLogicalName, fieldName, val, attributeName, level_) {
                    var result = new Result(fieldName);
                    if (Engine.isAllowedLevel(level_)) {
                        var attributeType = AttributeType.Unknown;
                        if (attributeName) {
                            attributeType = MetadataProxy.getAttributeType(attributeName, entityLogicalName);
                        }
                        var options = {};
                        if (attributeType != AttributeType.Unknown) {
                            options = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName];
                        }
                        var value = val;
                        if (val && _.isArray(val)) {
                            value = Engine.getAttributeValue(attributeType, val);
                        }
                        result = Engine.validateAttributeValue_(fieldName, value, attributeType, level_, options);
                    }
                    return result;
                };
                Engine.validateDateTimeFormulaValue = function (fieldName, val, level_) {
                    var result = new Result(fieldName);
                    if (Engine.isAllowedLevel(level_)) {
                        var attributeType = AttributeType.Integer;
                        var options = {};
                        var value = val;
                        if (val && _.isArray(val)) {
                            value = Engine.getAttributeValue(attributeType, val);
                        }
                        result = Engine.validateAttributeValue_(fieldName, value, attributeType, level_, options);
                    }
                    return result;
                };
                Engine.getAttributeValue = function (attributeType, val) {
                    var value = val;
                    switch (attributeType) {
                        case AttributeType.Picklist:
                        case AttributeType.State:
                        case AttributeType.Status:
                        case AttributeType.Boolean:
                            value = val;
                            break;
                        case AttributeType.Lookup:
                        case AttributeType.Owner:
                        case AttributeType.Customer:
                        case AttributeType.DateTime:
                        case AttributeType.BigInt:
                        case AttributeType.Decimal:
                        case AttributeType.Double:
                        case AttributeType.Integer:
                        case AttributeType.Money:
                        case AttributeType.String:
                            if (val.length > 0) {
                                value = val[0];
                            }
                            else {
                                value = '';
                            }
                            break;
                    }
                    return value;
                };
                Engine._action = Validation.Level.EveryTime;
                Engine._lastAction = Validation.Level.Unknown;
                Engine._isFromPropertyPage = false;
                Engine.GlobalMessageID = "___GLOBAL___";
                return Engine;
            })();
            Validation.Engine = Engine;
        })(Validation = ProcessDesigner.Validation || (ProcessDesigner.Validation = {}));
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFActivityType.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the BPFActivityType Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var TBXActivityType = (function () {
            function TBXActivityType() {
            }
            TBXActivityType.root = "bpf_root";
            TBXActivityType.page = "page";
            TBXActivityType.condition = "condition";
            TBXActivityType.field = "field";
            TBXActivityType.label = "label";
            TBXActivityType.sectionLabel = "sectionLabel";
            TBXActivityType.empty = "empty";
            return TBXActivityType;
        })();
        ProcessDesigner.TBXActivityType = TBXActivityType;
        var TBXDialogMessageTypes = (function () {
            function TBXDialogMessageTypes() {
            }
            TBXDialogMessageTypes.Information = 0;
            TBXDialogMessageTypes.Warning = 1;
            TBXDialogMessageTypes.Error = 2;
            return TBXDialogMessageTypes;
        })();
        ProcessDesigner.TBXDialogMessageTypes = TBXDialogMessageTypes;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFConnectorActivityTypeCommandID.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
//
//  <summary>
//  Class containing the BPFConnectorActivityTypeCommandID used for operations like connect, disconnect & re-connect.
//  </summary>
//
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFConnectorActivityTypeCommandID = (function () {
            function BPFConnectorActivityTypeCommandID() {
            }
            BPFConnectorActivityTypeCommandID.Connect = "ConnectTileCommand";
            BPFConnectorActivityTypeCommandID.Reconnect = "ReconnectTileCommand";
            BPFConnectorActivityTypeCommandID.Disconnect = "DisconnectTileCommand";
            return BPFConnectorActivityTypeCommandID;
        })();
        ProcessDesigner.BPFConnectorActivityTypeCommandID = BPFConnectorActivityTypeCommandID;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFCssClass = (function () {
            function BPFCssClass() {
            }
            BPFCssClass.stageTile = "stageTile";
            return BPFCssClass;
        })();
        ProcessDesigner.BPFCssClass = BPFCssClass;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFAddActivityTypeCommandID.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
//
//  <summary>
//  Class containing the BPFAddActivityTypeCommand used for adding any activity
//  </summary>
//
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFAddActivityTypeCommandID = (function () {
            function BPFAddActivityTypeCommandID() {
            }
            BPFAddActivityTypeCommandID.AddField = "AddFieldCommand";
            BPFAddActivityTypeCommandID.AddLabel = "AddLabelCommand";
            BPFAddActivityTypeCommandID.AddSectionLabel = "AddSectionLabelCommand";
            BPFAddActivityTypeCommandID.AddStage = "AddStageCommand";
            BPFAddActivityTypeCommandID.AddBranch = "AddBranchCommand";
            BPFAddActivityTypeCommandID.PasteField = "PasteFieldCommand";
            BPFAddActivityTypeCommandID.PasteLabel = "PasteLabelCommand";
            BPFAddActivityTypeCommandID.PasteSectionLabel = "PasteSectionLabelCommand";
            BPFAddActivityTypeCommandID.PasteStage = "PasteStageCommand";
            BPFAddActivityTypeCommandID.PasteBranch = "PasteConditionCommand";
            BPFAddActivityTypeCommandID.AddPage = "AddPageCommand";
            BPFAddActivityTypeCommandID.PastePage = "PastePageCommand";
            BPFAddActivityTypeCommandID.AddCondition = "AddConditionCommand";
            return BPFAddActivityTypeCommandID;
        })();
        ProcessDesigner.BPFAddActivityTypeCommandID = BPFAddActivityTypeCommandID;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="BPFDragDropValidator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFDragDropValidator = (function () {
            function BPFDragDropValidator() {
                this.libraryStageElementId = "libraryElementpage";
                this.libraryConditionElementId = "libraryElementcondition";
                this.libraryFieldElementId = "libraryElementfield";
                this.libraryLabelElementId = "libraryElementlabel";
                this.librarySectionLabelElementId = "libraryElementsectionLabel";
                this.libraryConnectElementId = "libraryElementconnect";
            }
            BPFDragDropValidator.prototype.isValidDropOnCanvas = function (targetElementId, draggedElementId, isHitArea) {
                var targetActivity = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(targetElementId);
                if (targetActivity == null && targetElementId.indexOf("_hitarea") > -1) {
                    targetActivity = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(targetElementId.substring(0, targetElementId.indexOf("_hitarea")));
                }
                if (targetActivity == null && targetElementId.indexOf("_verticalhitarea") > -1) {
                    targetActivity = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(targetElementId.substring(0, targetElementId.indexOf("_verticalhitarea")));
                }
                if (isHitArea == true) {
                    $("#" + targetElementId).html("+");
                }
                if ($("#" + draggedElementId).hasClass("step-list-listitem")) {
                    return false;
                }
                if (targetElementId == "") {
                    return true;
                }
                else if (isHitArea && draggedElementId == this.libraryStageElementId && targetElementId.indexOf("_verticalhitarea") > -1 &&
                    targetActivity instanceof ProcessDesigner.TBXConditionActivity && !targetActivity.canAddNewBranch()) {
                    return false;
                }
                else if (isHitArea && draggedElementId == this.libraryStageElementId) {
                    return true;
                }
                else if (isHitArea && draggedElementId == this.libraryConditionElementId &&
                    ((targetActivity instanceof ProcessDesigner.TBXPageActivity && !targetActivity.canAddNewNestedBranch()) || (targetActivity instanceof ProcessDesigner.TBXConditionActivity && !targetActivity.canAddNewBranch()))) {
                    return false;
                }
                else if (!isHitArea && draggedElementId != this.libraryFieldElementId && draggedElementId != this.libraryLabelElementId && draggedElementId != this.librarySectionLabelElementId && draggedElementId != this.libraryConnectElementId) {
                    return false;
                }
                else if (!isHitArea && draggedElementId == this.libraryFieldElementId && draggedElementId != this.libraryLabelElementId && draggedElementId != this.librarySectionLabelElementId && typeof targetActivity != "undefined" && targetActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    return false;
                }
                else if (isHitArea && (draggedElementId == this.libraryFieldElementId || draggedElementId == this.libraryLabelElementId || draggedElementId == this.librarySectionLabelElementId || draggedElementId == this.libraryConnectElementId)) {
                    return false;
                }
                else if (!isHitArea && (draggedElementId == this.libraryFieldElementId || draggedElementId == this.libraryLabelElementId || draggedElementId == this.librarySectionLabelElementId)) {
                    return true;
                }
                else if (!isHitArea && (draggedElementId == this.libraryStageElementId || draggedElementId == this.libraryConditionElementId)) {
                    return false;
                }
                else {
                    var result = this.isValidMoveOnCanvas(targetElementId, draggedElementId, isHitArea);
                    return result;
                }
            };
            BPFDragDropValidator.prototype.isValidMoveOnCanvas = function (targetElementId, draggedElementId, isHitArea) {
                var isVerticalHitArea = isHitArea && targetElementId.indexOf('_verticalhitarea') > -1;
                if (targetElementId == draggedElementId + '_hitarea') {
                    return false;
                }
                var workflowTree = GenericWorkflowDesigner.Settings.workflowTree;
                var targetActivity = workflowTree.getActivityById(targetElementId.replace('_hitarea', '').replace('_verticalhitarea', ''));
                if (typeof targetActivity != "undefined" && draggedElementId == this.libraryConnectElementId) {
                    return this.isConnectorValid(targetActivity);
                }
                if (draggedElementId == this.libraryConditionElementId) {
                    return this.isValidConditionDrop(targetActivity, isVerticalHitArea);
                }
                var draggedActivity = workflowTree.getActivityById(draggedElementId);
                var draggedActivityParent = draggedActivity.getParent();
                if (!CommonTypes.Types.Object.isNullOrUndefined(draggedActivityParent)) {
                    var draggedActivityParentID = draggedActivityParent.getActivityID();
                    if (targetElementId == draggedActivityParentID + '_hitarea') {
                        return false;
                    }
                }
                if (draggedActivity.getActivityID() == workflowTree.getWorkflowDefinitionRoot().getActivityID()) {
                    return false;
                }
                if (draggedActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page
                    && draggedActivityParent.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    var children = draggedActivity.getChildActivitiesSorted()[0];
                    if (!CommonTypes.Types.Object.isNullOrUndefined(children) && children.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        if (draggedActivity.getParentBranchID() == ProcessDesigner.branchType.Default || draggedActivity.getParentBranchID() == ProcessDesigner.branchType.If)
                            return false;
                        else
                            return true;
                    }
                }
                if (draggedActivity.getParent().getActivityTypeID() == ProcessDesigner.TBXActivityType.condition
                    && draggedActivity.getParentBranchID() == 0 && draggedActivity.isLeaf()) {
                    return false;
                }
                if (typeof targetActivity != "undefined" && targetActivity.isBranchActivity()) {
                    if (draggedActivity.isBranchActivity()) {
                        return this.isInSameConditionalBranch(targetActivity, draggedActivity, targetElementId);
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (typeof draggedActivity != "undefined" && draggedActivity.isBranchActivity()) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            };
            BPFDragDropValidator.prototype.isConnectorValid = function (targetActivity) {
                var childrens = targetActivity.getChildActivitiesSorted();
                if (childrens.length == 0 && targetActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page && targetActivity.getAllowedDependentActivitiesForConnector(targetActivity)) {
                    return true;
                }
                else if (targetActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    var length = childrens.length;
                    switch (length) {
                        case 0:
                            return true;
                        case 1:
                            if (childrens[length - 1].getParentBranchID() == 1)
                                return true;
                            else
                                return false;
                        case 2:
                            if (childrens[length - 1].getParentBranchID() == 1)
                                return true;
                            else
                                return false;
                        case 3:
                            return false;
                    }
                }
                else {
                    return false;
                }
            };
            BPFDragDropValidator.prototype.isValidConditionDrop = function (targetActivity, isVerticalHitArea) {
                var childrens = targetActivity.getChildActivitiesSorted();
                var push = true;
                for (var i = 0; i < childrens.length; i++) {
                    if (childrens[i] && childrens[i].getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        push = false;
                    }
                }
                if (isVerticalHitArea) {
                    for (var i = 0; i < childrens.length; i++) {
                        if (childrens[i] && childrens[i].getActivityTypeID() == ProcessDesigner.TBXActivityType.condition && childrens[i].getParentBranchID() == ProcessDesigner.branchType.Else) {
                            push = false;
                        }
                    }
                }
                else if (targetActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    push = false;
                }
                return push;
            };
            BPFDragDropValidator.prototype.getConditionParentBranchID = function (activity) {
                var parent = activity.getParent();
                if (activity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    return activity.getParentBranchID();
                }
                else if (parent.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition && activity.getParentBranchID() != ProcessDesigner.branchType.Default) {
                    return activity.getParentBranchID();
                }
                else {
                    return this.getConditionParentBranchID(parent);
                }
            };
            BPFDragDropValidator.prototype.getConditionBranchActivityId = function (activity) {
                var parent = activity.getParent();
                if (activity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    return activity.getActivityID();
                }
                else if (parent.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    return parent.getActivityID();
                }
                else {
                    return this.getConditionBranchActivityId(parent);
                }
            };
            BPFDragDropValidator.prototype.isInSameConditionalBranch = function (targetActivity, draggedActivity, targetElementId) {
                if (this.getConditionBranchActivityId(targetActivity) == this.getConditionBranchActivityId(draggedActivity)) {
                    if (targetActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                        if (this.getConditionParentBranchID(targetActivity) == this.getConditionParentBranchID(draggedActivity)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.If) {
                            if ((targetElementId.indexOf('_hitarea') > -1 && targetElementId.indexOf('_verticalhitarea') == -1)) {
                                var childs = targetActivity.getChildActivitiesSorted();
                                switch (childs.length) {
                                    case 0:
                                        return true;
                                    case 1:
                                        if (childs[0].getParentBranchID() == ProcessDesigner.branchType.If) {
                                            if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.If)
                                                return true;
                                            else
                                                return false;
                                        }
                                        else
                                            return false;
                                    case 2:
                                        if (childs[0].getParentBranchID() == ProcessDesigner.branchType.Default && childs[1].getParentBranchID() == ProcessDesigner.branchType.If || childs[0].getParentBranchID() == ProcessDesigner.branchType.If && childs[1].getParentBranchID() == ProcessDesigner.branchType.Else) {
                                            if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.If)
                                                return true;
                                            else
                                                return false;
                                        }
                                        else
                                            return false;
                                    case 3:
                                        if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.If)
                                            return true;
                                        else
                                            return false;
                                }
                                ;
                            }
                            else
                                return false;
                        }
                        else {
                            if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.Else) {
                                if ((targetElementId.indexOf('_hitarea') == -1 && targetElementId.indexOf('_verticalhitarea') > -1)) {
                                    var childs = targetActivity.getChildActivitiesSorted();
                                    switch (childs.length) {
                                        case 0:
                                            return true;
                                        case 1:
                                            if (childs[0] != draggedActivity && childs[0].getParentBranchID() == ProcessDesigner.branchType.Else) {
                                                if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.Else)
                                                    return true;
                                                else
                                                    return false;
                                            }
                                            else
                                                return false;
                                        case 2:
                                            if (childs[1] != draggedActivity && childs[1].getParentBranchID() == ProcessDesigner.branchType.Else) {
                                                if (this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.Else)
                                                    return true;
                                                else
                                                    return false;
                                            }
                                            else
                                                return false;
                                        case 3:
                                            if (childs[2] != draggedActivity && this.getConditionParentBranchID(draggedActivity) == ProcessDesigner.branchType.Else)
                                                return true;
                                            else
                                                return false;
                                    }
                                    ;
                                }
                                else
                                    return false;
                            }
                        }
                    }
                }
                else
                    return false;
            };
            return BPFDragDropValidator;
        })();
        ProcessDesigner.BPFDragDropValidator = BPFDragDropValidator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var WorkflowStepJson = (function () {
            function WorkflowStepJson() {
                this.__class = "WorkflowStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return WorkflowStepJson;
        })();
        ProcessDesigner.WorkflowStepJson = WorkflowStepJson;
        var EntityStepJson = (function () {
            function EntityStepJson() {
                this.__class = "EntityStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            EntityStepJson.getStepCount = function () {
                return EntityStepJson.counter++;
            };
            EntityStepJson.counter = 0;
            return EntityStepJson;
        })();
        ProcessDesigner.EntityStepJson = EntityStepJson;
        var StageStepJson = (function () {
            function StageStepJson() {
                this.__class = "StageStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return StageStepJson;
        })();
        ProcessDesigner.StageStepJson = StageStepJson;
        var StepStepJson = (function () {
            function StepStepJson() {
                this.__class = "StepStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return StepStepJson;
        })();
        ProcessDesigner.StepStepJson = StepStepJson;
        var ConditionStepJson = (function () {
            function ConditionStepJson() {
                this.__class = "ConditionStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return ConditionStepJson;
        })();
        ProcessDesigner.ConditionStepJson = ConditionStepJson;
        var ConditionBranchJson = (function () {
            function ConditionBranchJson() {
                this.__class = "ConditionBranchStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return ConditionBranchJson;
        })();
        ProcessDesigner.ConditionBranchJson = ConditionBranchJson;
        var RelationshipCollectionStepJson = (function () {
            function RelationshipCollectionStepJson() {
                this.__class = "RelationshipCollectionStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return RelationshipCollectionStepJson;
        })();
        ProcessDesigner.RelationshipCollectionStepJson = RelationshipCollectionStepJson;
        var NextStageStepJson = (function () {
            function NextStageStepJson() {
                this.__class = "SetNextStageStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            return NextStageStepJson;
        })();
        ProcessDesigner.NextStageStepJson = NextStageStepJson;
        var ControlStepJson = (function () {
            function ControlStepJson() {
                this.__class = "ControlStep:#Microsoft.Crm.Workflow.ObjectModel";
            }
            ControlStepJson.getStepCount = function () {
                return EntityStepJson.counter++;
            };
            ControlStepJson.counter = 0;
            return ControlStepJson;
        })();
        ProcessDesigner.ControlStepJson = ControlStepJson;
        var PrimaryEntityJson = (function () {
            function PrimaryEntityJson() {
                this.__class = "PrimaryEntity:#Microsoft.Crm.Workflow.Expressions";
            }
            return PrimaryEntityJson;
        })();
        ProcessDesigner.PrimaryEntityJson = PrimaryEntityJson;
        var MethodCallExpressionJson = (function () {
            function MethodCallExpressionJson() {
                this.__class = "MethodCallExpression:#Microsoft.Crm.Workflow.Expressions";
                this.type = "0";
                this.typeSet = false;
                this.behavior = 0;
                this.method = "0";
                this.parameters = [];
            }
            return MethodCallExpressionJson;
        })();
        ProcessDesigner.MethodCallExpressionJson = MethodCallExpressionJson;
        var EntityAttributeExpressionJson = (function () {
            function EntityAttributeExpressionJson() {
                this.__class = "EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions";
                this.type = "4";
                this.typeSet = false;
                this.behavior = 0;
            }
            return EntityAttributeExpressionJson;
        })();
        ProcessDesigner.EntityAttributeExpressionJson = EntityAttributeExpressionJson;
        var PrimitiveExpressionJson = (function () {
            function PrimitiveExpressionJson() {
                this.__class = "PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions";
                this.typeSet = false;
                this.behavior = 0;
            }
            return PrimitiveExpressionJson;
        })();
        ProcessDesigner.PrimitiveExpressionJson = PrimitiveExpressionJson;
        var BinaryExpressionJson = (function () {
            function BinaryExpressionJson() {
                this.__class = "BinaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.type = "0";
                this.typeSet = false;
                this.behavior = 0;
                this.right = [];
            }
            return BinaryExpressionJson;
        })();
        ProcessDesigner.BinaryExpressionJson = BinaryExpressionJson;
        var UnaryExpressionJson = (function () {
            function UnaryExpressionJson() {
                this.__class = "UnaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.type = "0";
                this.typeSet = false;
                this.behavior = 0;
            }
            return UnaryExpressionJson;
        })();
        ProcessDesigner.UnaryExpressionJson = UnaryExpressionJson;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFLayoutProperties.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
//
//  <summary>
//  Class used for specifying layout properties of the BPF control
//  </summary>
//
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFLayoutProperties = (function (_super) {
            __extends(BPFLayoutProperties, _super);
            function BPFLayoutProperties(workspacePosition) {
                _super.call(this, workspacePosition);
                this.topMargin = 0;
                this.rowSpaceing = 58;
                this.colSpaceing = 60;
                this.insertSlotVerticalOffset = 28;
                this.insertSlotHorizontalOffset = 24;
            }
            return BPFLayoutProperties;
        })(GenericWorkflowDesigner.LayoutProperties);
        ProcessDesigner.BPFLayoutProperties = BPFLayoutProperties;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ValidateBPF = (function () {
            function ValidateBPF() {
            }
            ValidateBPF.validateOff = function () {
                ProcessDesigner.TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.None;
                GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                ProcessDesigner.Validation.Engine.resetAction();
                ProcessDesigner.Validation.Engine.resetLastAction();
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                for (var i = 0; i < activities.length; i++) {
                    activities[i].setValidationMode(GenericWorkflowDesigner.ValidationMode.None);
                    activities[i].clearErrorMessages();
                }
                GenericWorkflowDesigner.EventManager.publish(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages);
                $('.tileError').remove();
                $('.errorTile').removeClass('errorTile');
            };
            ValidateBPF.validate = function () {
                var isValid = true;
                GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                if (ValidateBPF.shouldValidate()) {
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                    var status;
                    for (var i = 0; i < activities.length; i++) {
                        activities[i].setValidationMode(ProcessDesigner.TBXDesignerControl.validationMode);
                        status = activities[i].validateActivity();
                        isValid = status && isValid;
                    }
                    var validationResult = new ProcessDesigner.ValidationResult("");
                    var message = ProcessDesigner.Validation.Errors.updateNotifications();
                    ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerValidateEvent("", message, ProcessDesigner.Validation.Errors.errorCount.toString());
                    if (isValid) {
                        validationResult.success();
                        if (ProcessDesigner.Validation.Engine.getLastAction() == ProcessDesigner.Validation.Level.Save && ProcessDesigner.Validation.Errors.getCount() == 0) {
                            ProcessDesigner.Validation.Engine.resetLastAction();
                        }
                    }
                    else {
                        validationResult.failure(message);
                    }
                }
                ProcessDesigner.Validation.Engine.resetAction();
                GenericWorkflowDesigner.EventManager.publish(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages);
                $('.warningLabel').remove();
                return validationResult;
            };
            ValidateBPF.validateDependentOptionSet = function () {
                var isValid = true;
                GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                activities = _.filter(activities, function (activity) { return activity.getActivityTypeID() == "page"; });
                var status;
                var currentMode = ProcessDesigner.TBXDesignerControl.validationMode;
                var currentAction = ProcessDesigner.Validation.Engine.getAction();
                for (var i = 0; i < activities.length; i++) {
                    ProcessDesigner.MetadataProxy.getFieldAttributeMetadata(activities[i].entityName);
                    ProcessDesigner.TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
                    ProcessDesigner.Validation.Engine.setAction(ProcessDesigner.Validation.Level.Validate);
                    activities[i].setValidationMode(ProcessDesigner.TBXDesignerControl.validationMode);
                    status = activities[i].validateDependentOptionSetActivity();
                    ProcessDesigner.Validation.Engine.resetAction();
                    ProcessDesigner.Validation.Engine.resetLastAction();
                    activities[i].setValidationMode(currentMode);
                    isValid = status && isValid;
                }
                ProcessDesigner.TBXDesignerControl.validationMode = currentMode;
                var processControl = window["ProcessControl"];
                processControl.Configuration.ProcessDesignerMenuActions.validationButtonOff();
                var validationResult = new ProcessDesigner.ValidationResult("");
                if (ProcessDesigner.Validation.Errors.errorCount > 0) {
                    var message = ProcessDesigner.Validation.Errors.updateNotifications();
                }
                ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerValidateEvent("", message, ProcessDesigner.Validation.Errors.errorCount.toString());
                if (isValid) {
                    validationResult.success();
                    if (ProcessDesigner.Validation.Engine.getLastAction() == ProcessDesigner.Validation.Level.Save && ProcessDesigner.Validation.Errors.getCount() == 0) {
                        ProcessDesigner.Validation.Engine.resetLastAction();
                    }
                }
                else {
                    validationResult.failure(message);
                }
                ProcessDesigner.Validation.Engine.resetAction();
                GenericWorkflowDesigner.EventManager.publish(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages);
                return validationResult;
            };
            ValidateBPF.shouldValidate = function () {
                var doValidate = false;
                if (ProcessDesigner.Validation.Engine.getLastAction() >= ProcessDesigner.Validation.Level.Save) {
                    doValidate = true;
                }
                else if (ProcessDesigner.Validation.Engine.isDefaultAction()) {
                    doValidate = false;
                }
                else if (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.None) {
                    doValidate = false;
                }
                else {
                    doValidate = true;
                }
                return doValidate;
            };
            return ValidateBPF;
        })();
        ProcessDesigner.ValidateBPF = ValidateBPF;
        $(window.top.document).on("doValidation", function (event, success, failure) {
            var result = MscrmControls.ProcessDesigner.ValidateBPF.validate();
            window.top.document.createAttribute("validateSuccess");
            if (result.isValid) {
                window.top.document["validateSuccess"] = true;
                if (success) {
                    success();
                }
            }
            else {
                window.top.document["validateSuccess"] = false;
                if (failure) {
                    failure();
                }
            }
        });
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFGraphics.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Point = GenericWorkflowDesigner.Point;
        var PositionCalculator = GenericWorkflowDesigner.PositionCalculator;
        var BPFGraphics = (function (_super) {
            __extends(BPFGraphics, _super);
            function BPFGraphics() {
                _super.apply(this, arguments);
            }
            BPFGraphics.prototype.createRectangleDOM = function (rectangle, segmentClass, lineWidth) {
                lineWidth = (lineWidth == undefined) ? GenericWorkflowDesigner.Settings.layoutProperties.lineWidth : lineWidth;
                var leftLine = this.createLineDOM(new Point(rectangle.getLeft(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
                var rightLine = this.createLineDOM(new Point(rectangle.getRight(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
                var topLine = this.createLineDOM(new Point(rectangle.getLeft(), rectangle.getTop()), rectangle.getWidth(), lineWidth, segmentClass);
                var bottomLine = this.createLineDOM(new Point(rectangle.getLeft(), rectangle.getBottom()), rectangle.getWidth(), lineWidth, segmentClass);
                var segments = [];
                segments.push(leftLine);
                segments.push(rightLine);
                segments.push(topLine);
                segments.push(bottomLine);
                return segments;
            };
            BPFGraphics.prototype.createLineDOM = function (pointStart, width, height, segmentClass) {
                var line = $('<div class="' + segmentClass + '">');
                line.css("position", "absolute");
                line.css("width", width);
                line.css("height", height);
                line.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), pointStart.getX());
                line.css("top", pointStart.getY());
                return line;
            };
            BPFGraphics.prototype.createConnectorExtendDOM = function (startPoint, endPoint, segmentClass, parentBranchID, depth) {
                var segments = [], p2;
                var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
                var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
                var tileHeight = GenericWorkflowDesigner.Settings.layoutProperties.tileHeight;
                var tileButtonHeight = height - tileHeight;
                var colSpaceing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
                var defaultColSpaceing = colSpaceing / 2;
                var lineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
                var extra = depth * GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing + (depth - 1) * height;
                var top = startPoint.getY() + height;
                var left = startPoint.getX() + width / 2;
                var p1 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p1, lineWidth, extra, segmentClass));
                var startLoc = left;
                var endLoc = endPoint.getX() - defaultColSpaceing;
                p2 = new GenericWorkflowDesigner.Point(left, top + extra);
                segments.push(this.createLineDOM(p2, endLoc - startLoc, lineWidth, segmentClass));
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p3 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p3, lineWidth, startPoint.getY() + extra + lineWidth + tileHeight / 2 + tileButtonHeight, segmentClass));
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p4 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p4, defaultColSpaceing, lineWidth, segmentClass));
                return segments;
            };
            BPFGraphics.prototype.createConnectorDOM = function (startPoint, endPoint, segmentClass, parentBranchID) {
                var segments = [], p2;
                var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
                var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
                var tileHeight = GenericWorkflowDesigner.Settings.layoutProperties.tileHeight;
                var tileButtonHeight = height - tileHeight;
                var borderHeight = GenericWorkflowDesigner.Settings.layoutProperties.borderHeight;
                var colSpaceing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
                var defaultColSpaceing = colSpaceing / 2;
                var lineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
                if (endPoint.getX() - startPoint.getX() != (width + colSpaceing)) {
                    if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                        colSpaceing = endPoint.getX() - startPoint.getX() - GenericWorkflowDesigner.Settings.layoutProperties.width;
                    }
                    else {
                        colSpaceing = endPoint.getX() - startPoint.getX() - width;
                    }
                }
                var top = startPoint.getY() + tileHeight / 2;
                var left = startPoint.getX() + width;
                var p1 = new GenericWorkflowDesigner.Point(left, top);
                if (parentBranchID == 2) {
                    top = startPoint.getY() + height / 2 + borderHeight;
                    p1 = new GenericWorkflowDesigner.Point(left, top);
                    segments.push(this.createLineDOM(p1, 0, lineWidth, segmentClass));
                }
                else {
                    segments.push(this.createLineDOM(p1, colSpaceing - defaultColSpaceing, lineWidth, segmentClass));
                }
                var top1 = startPoint.getY() + tileHeight / 2;
                var top2 = endPoint.getY() + tileHeight / 2;
                if (top2 - top1 >= 0) {
                    left = endPoint.getX() - colSpaceing;
                    if (parentBranchID == 2) {
                        p2 = new GenericWorkflowDesigner.Point(left - width / 2, top + height / 2 + borderHeight / 2);
                        segments.push(this.createLineDOM(p2, lineWidth, top2 - top1 - tileHeight / 2 - tileButtonHeight, segmentClass));
                    }
                    else {
                        p2 = new GenericWorkflowDesigner.Point(left, top);
                        segments.push(this.createLineDOM(p2, lineWidth, top2 - top1, segmentClass));
                    }
                }
                else {
                    left = endPoint.getX() - defaultColSpaceing - Math.floor(lineWidth / 2);
                    top = endPoint.getY() + tileHeight / 2;
                    if (parentBranchID == 2) {
                        top = endPoint.getY() + height / 2 + borderHeight / 2;
                        p2 = new GenericWorkflowDesigner.Point(left - width, top);
                    }
                    else {
                        p2 = new GenericWorkflowDesigner.Point(left, top);
                    }
                    segments.push(this.createLineDOM(p2, lineWidth, top1 - top2 + lineWidth, segmentClass));
                }
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p3;
                if (parentBranchID == 2) {
                    p3 = new GenericWorkflowDesigner.Point(left - width / 2 - defaultColSpaceing, top);
                }
                else {
                    p3 = new GenericWorkflowDesigner.Point(left, top);
                }
                if (parentBranchID == 2) {
                    segments.push(this.createLineDOM(p3, colSpaceing + width / 2, lineWidth, segmentClass));
                }
                else {
                    segments.push(this.createLineDOM(p3, defaultColSpaceing, lineWidth, segmentClass));
                }
                return segments;
            };
            BPFGraphics.prototype.drawTileConnectors = function (canvasObj) {
                var self = this;
                var nextActivity;
                var workflowDefinition = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                jQuery.each(workflowDefinition, function (index, activity) {
                    var parentActivity = activity.getParent();
                    if (parentActivity != null && parentActivity.getActivityTypeID() != "bpf_root") {
                        self.drawConnector(parentActivity, activity, canvasObj);
                    }
                });
                jQuery.each(workflowDefinition, function (index, activity) {
                    if (activity.getNextActivityID()) {
                        nextActivity = GenericWorkflowDesigner.Settings.workflowTree.getNextActivity(activity);
                        if (nextActivity != null && nextActivity.getActivityID()) {
                            self.drawConnector(activity, nextActivity, canvasObj);
                        }
                    }
                });
                jQuery.each(workflowDefinition, function (index, activity) {
                    if (activity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        var condition = activity;
                        if (condition.NextElseBranchActivity) {
                            var defaultActivity = condition.NextElseBranchActivity;
                            if (defaultActivity != null && defaultActivity.getActivityID()) {
                                self.drawDefaultElseBranchConnectorForNestedConditions(activity, defaultActivity, canvasObj);
                            }
                        }
                    }
                });
            };
            BPFGraphics.prototype.drawDefaultElseBranchConnectorForNestedConditions = function (condition, defaultActivity, canvasObj) {
                var positionCalculator = new PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var startPoint = new Point(positionCalculator.computeLeft(condition.getCol()), positionCalculator.computeTop(condition.getRow()));
                var endPointForDefaultPath = new Point(positionCalculator.computeLeft(defaultActivity.getCol()), positionCalculator.computeTop(defaultActivity.getRow()));
                var maxDepthForDefaultPath = GenericWorkflowDesigner.Settings.workflowTree.getMaxDepth(defaultActivity) + 1;
                var connectorSegmentsStart = GenericWorkflowDesigner.Settings.graphics.createConnectorExtendDOM(startPoint, endPointForDefaultPath, "line", 0, maxDepthForDefaultPath);
                jQuery.each(connectorSegmentsStart, function (index, segment) {
                    canvasObj.$el.append(segment);
                });
            };
            BPFGraphics.prototype.drawConnector = function (parentActivity, childActivity, obj) {
                var canvasObj = obj;
                var connectorSegments;
                var row1 = parentActivity.getRow();
                var col1 = parentActivity.getCol();
                var row2 = childActivity.getRow();
                var col2 = childActivity.getCol();
                var positionCalculator = new PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var startPoint = new Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
                var endPoint = new Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));
                var childs = parentActivity.getChildActivitiesSorted();
                if (childs.length == 2 && childs[1].getParentBranchID() == 1 && parentActivity.getActivityTypeID() == "condition" && childActivity.getParentBranchID() == 0) {
                    var maxDepth = GenericWorkflowDesigner.Settings.workflowTree.getMaxDepth(childs[1]) + 1;
                    var connectorSegmentsStart = GenericWorkflowDesigner.Settings.graphics.createConnectorExtendDOM(startPoint, endPoint, "line", childActivity.getParentBranchID(), maxDepth);
                    jQuery.each(connectorSegmentsStart, function (index, segment) {
                        canvasObj.$el.append(segment);
                    });
                }
                else {
                    var check = 0;
                    if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        switch (childs.length) {
                            case 2:
                                if (childActivity.getParentBranchID() == 0 && childs[1].getParentBranchID() == 1) {
                                    check = 1;
                                }
                                break;
                            case 3:
                                if (childActivity.getParentBranchID() == 0) {
                                    check = 1;
                                }
                                break;
                        }
                    }
                    if (parentActivity != null && parentActivity.getActivityTypeID() != "bpf_root" && !check) {
                        connectorSegments = GenericWorkflowDesigner.Settings.graphics.createConnectorDOM(startPoint, endPoint, "line", childActivity.getParentBranchID());
                        jQuery.each(connectorSegments, function (index, segment) {
                            canvasObj.$el.append(segment);
                        });
                    }
                }
            };
            return BPFGraphics;
        })(GenericWorkflowDesigner.Graphics);
        ProcessDesigner.BPFGraphics = BPFGraphics;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessActivityType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessActivityType = (function () {
            function ProcessActivityType() {
            }
            ProcessActivityType.Empty = "empty";
            ProcessActivityType.Root = "root";
            ProcessActivityType.Condition = "condition";
            return ProcessActivityType;
        })();
        ProcessDesigner.ProcessActivityType = ProcessActivityType;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessActivityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ProcessActivityDefinitionModel = (function (_super) {
            __extends(ProcessActivityDefinitionModel, _super);
            function ProcessActivityDefinitionModel(activityType) {
                _super.call(this, activityType);
                this._processStep = null;
                this.errCount = 0;
                this._showNotifications = true;
                this.propertyPageModel = null;
            }
            Object.defineProperty(ProcessActivityDefinitionModel.prototype, "processStep", {
                get: function () {
                    return this._processStep;
                },
                set: function (value) {
                    if (this._processStep !== value) {
                        this._processStep = value;
                        this.initializeFromProcessStep();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ProcessActivityDefinitionModel.prototype.initialize = function (options) {
                this.setWorkflowID("workflow0");
                if ($.isEmptyObject(this.get("Properties"))) {
                    var properties = this.getDefaultProperties();
                    this.set("Properties", properties);
                }
                this.setActivityTypeID(GenericWorkflowDesigner.ActivityType.Empty);
            };
            ProcessActivityDefinitionModel.prototype.reinitialize = function (activity) {
                var addModeName = ProcessDesigner.TelemetryEventReporter.GetAddModeNameForActivity(ProcessDesigner.BPFToolBarView.addMode);
                switch (activity.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.condition:
                        var self = activity;
                        var parentActivity = activity.getParent();
                        if (parentActivity) {
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                                self._parentStageEntityName = parentActivity.entityName;
                            }
                            else if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                self._parentStageEntityName = parentActivity.parentStageEntityName;
                            }
                        }
                        ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, "", ProcessDesigner.TBXActivityType.condition, "");
                        break;
                    case ProcessDesigner.TBXActivityType.page:
                        GenericWorkflowDesigner.Settings.isNewStageAdded = true;
                        ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, activity.stageId, ProcessDesigner.TBXActivityType.page, "");
                        _super.prototype.reinitialize.call(this, activity);
                        break;
                    default:
                        _super.prototype.reinitialize.call(this, activity);
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            };
            ProcessActivityDefinitionModel.prototype.getDefaultProperties = function () {
                return {
                    Items: [],
                    UI: { Row: 0, Col: 0, readonlyMode: false },
                    ActiveItemIndex: 0
                };
            };
            ProcessActivityDefinitionModel.prototype.getParentStage = function () {
                var parentStage = this.getParent();
                if (CommonTypes.Types.Object.isNullOrUndefined(parentStage)) {
                    return null;
                }
                if (parentStage.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                    return parentStage;
                }
                else {
                    return parentStage.getParentStage();
                }
            };
            ProcessActivityDefinitionModel.prototype.initializeFromProcessStep = function () {
                this.setActivityID(this._processStep.get_Id());
                this.setWorkflowID(this._processStep.get_workflow().get_Id());
            };
            ProcessActivityDefinitionModel.prototype.getAllowedDependentActivityTypes = function (slotType) {
                var _this = this;
                var activtyTypes = [ProcessDesigner.TBXActivityType.page, ProcessDesigner.TBXActivityType.condition];
                var allowedActivityTypes = [];
                activtyTypes.forEach(function (activityType) {
                    var newActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(activityType);
                    var parentActivity = _this.getParent();
                    var currentActivity = _this;
                    var isParentValid = false;
                    var isChildValid = false;
                    switch (slotType) {
                        case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                            isParentValid = (!parentActivity) ? true : (parentActivity.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical).indexOf(activityType) > -1);
                            isChildValid = (newActivity.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical).indexOf(currentActivity.getActivityTypeID()) > -1);
                            if (isParentValid == true && isChildValid == true) {
                                allowedActivityTypes.push(activityType);
                            }
                            break;
                        case GenericWorkflowDesigner.SlotType.TileHolder:
                            isParentValid = (!parentActivity) ? true : (currentActivity.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical).indexOf(activityType) > -1);
                            var childActivities = currentActivity.getChildActivitiesSorted();
                            var isChildValid = (childActivities.length == 0) ? true : (newActivity.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical).indexOf(childActivities[0].getActivityTypeID()) > -1);
                            if (isParentValid == true && isChildValid == true) {
                                allowedActivityTypes.push(activityType);
                            }
                            break;
                        case GenericWorkflowDesigner.SlotType.InsertVertical:
                            isParentValid = (!parentActivity) ? true : (parentActivity.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical).indexOf(activityType) > -1);
                            if (isParentValid == true) {
                                allowedActivityTypes.push(activityType);
                            }
                            break;
                    }
                    ;
                });
                return allowedActivityTypes;
            };
            Object.defineProperty(ProcessActivityDefinitionModel.prototype, "showNotifications", {
                get: function () {
                    return this._showNotifications;
                },
                set: function (value) {
                    this._showNotifications = value;
                },
                enumerable: true,
                configurable: true
            });
            ProcessActivityDefinitionModel.prototype.addErrorMessage = function (id, errorMessage) {
                this.errCount++;
                return _super.prototype.addErrorMessage.call(this, id, errorMessage);
            };
            ProcessActivityDefinitionModel.prototype.addResult = function (result) {
                if (!result.isValid) {
                    this.addMultipleErrorMessages(result.errorMessages);
                }
                return result.isValid;
            };
            ProcessActivityDefinitionModel.prototype.validateChildren = function (children) {
                var status = true;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child.showNotifications = false;
                    status = child.validateActivity() && status;
                    var step = children[i];
                    if (children[i].errCount > 0) {
                        $("#" + step.stepId).find(".subViewTileError").css("visibility", "visible");
                    }
                    else {
                        $("#" + step.stepId).find(".subViewTileError").css("visibility", "hidden");
                    }
                }
                return status;
            };
            ProcessActivityDefinitionModel.prototype.validateDependentOptionSetChildren = function (children) {
                var status = true;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child.showNotifications = false;
                    status = child.validateDependentOptionSetActivity() && status;
                    var step = children[i];
                    if (children[i].errCount > 0) {
                        $("#" + step.stepId).find(".subViewTileError").css("visibility", "visible");
                    }
                    else {
                        $("#" + step.stepId).find(".subViewTileError").css("visibility", "hidden");
                    }
                }
                return status;
            };
            ProcessActivityDefinitionModel.prototype.validateChildrenVM = function (children) {
                var status = true;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child.showNotifications = false;
                    status = child.validateActivity() && status;
                }
                return status;
            };
            ProcessActivityDefinitionModel.prototype.validateCollection = function (children) {
                var status = true;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child.showNotifications = false;
                    status = child.validateActivity() && status;
                }
                return status;
            };
            ProcessActivityDefinitionModel.prototype.validateCollectionVM = function (children) {
                var status = true;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    child.showNotifications = false;
                    status = child.validateActivity() && status;
                }
                return status;
            };
            ProcessActivityDefinitionModel.prototype.addNotifications = function () {
                if (this.showNotifications && !Validation.Engine.isFromPropertyPage()) {
                    var errors = this.getErrorMessages();
                    for (var id in errors) {
                        if (id === Validation.Engine.GlobalMessageID) {
                            GenericWorkflowDesigner.Settings.notification.AppendNotification(new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Error, errors[id]));
                        }
                    }
                    Validation.Errors.updateErrors(this);
                }
            };
            ProcessActivityDefinitionModel.prototype.clearErrorMessages = function () {
                this.errCount = 0;
                if (this.propertyPageModel != null)
                    this.propertyPageModel.clearErrorMessages();
                return _super.prototype.clearErrorMessages.call(this);
            };
            ProcessActivityDefinitionModel.prototype.addMultipleErrorMessages = function (errors) {
                this.errCount += _.size(errors);
                return _super.prototype.addMultipleErrorMessages.call(this, errors);
            };
            ProcessActivityDefinitionModel.prototype.getErrorCount = function () {
                var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                if (this.cid == propertyViewCurrentModel.cid && Validation.Engine.isFromPropertyPage() && this.propertyPageModel) {
                    return this.propertyPageModel.getErrorCount() + this._getSubViewsErrorCount();
                }
                else {
                    return this._getErrorCount();
                }
            };
            ProcessActivityDefinitionModel.prototype._getErrorCount = function () {
                return this.errCount;
            };
            ProcessActivityDefinitionModel.prototype._getSubViewsErrorCount = function () {
                return 0;
            };
            ProcessActivityDefinitionModel.prototype.getChildrenErrorCount = function (children) {
                var errCount = 0;
                if (children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        errCount += child.getErrorCount();
                    }
                }
                return errCount;
            };
            ProcessActivityDefinitionModel.prototype.getErrorTile = function () {
                return this;
            };
            ProcessActivityDefinitionModel.prototype.getCanvasTile = function () {
                return null;
            };
            ProcessActivityDefinitionModel.prototype.markInvalid = function () {
                this.isValid = false;
                this.addNotifications();
                return this.isValid;
            };
            ProcessActivityDefinitionModel.prototype.validateOnChange = function () {
                var bRet = true;
                bRet = this.validateOnAction(Validation.Level.Change);
                return bRet;
            };
            ProcessActivityDefinitionModel.prototype.___internalValidationSetPropertyPageModel = function (value) {
                this.propertyPageModel = value;
            };
            ProcessActivityDefinitionModel.prototype.isFromPropertyPage = function () {
                return (Validation.Engine.getAction() == Validation.Level.Apply) || (Validation.Engine.getAction() == Validation.Level.Change);
            };
            ProcessActivityDefinitionModel.prototype.validateOnAction = function (action) {
                var bRet = true;
                Validation.Engine.setAction(action);
                Validation.Engine.setFromPropertyPage((Validation.Engine.getAction() == Validation.Level.Apply) || (Validation.Engine.getAction() == Validation.Level.Change));
                GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                this.clearWarningMessages();
                this.clearErrorMessages();
                GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().clearErrorMessages();
                if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                    if (Validation.Engine.isFromPropertyPage()) {
                        Validation.Engine.setAction(Validation.Engine.getLastAction());
                    }
                    bRet = this.validateActivity();
                    if (Validation.Engine.isFromPropertyPage()) {
                        Validation.Errors.updateTileErrorStatus((action == Validation.Level.Apply));
                    }
                    if (bRet) {
                        if (Validation.Engine.getLastAction() == Validation.Level.Save && Validation.Errors.getCount() == 0) {
                            Validation.Engine.resetLastAction();
                        }
                    }
                }
                Validation.Engine.setFromPropertyPage(false);
                Validation.Engine.resetAction();
                return bRet;
            };
            ProcessActivityDefinitionModel.prototype.validateActivity = function () {
                this.clearErrorMessages();
                if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                    var status = this._validateActivity();
                    if (!status) {
                        this.addNotifications();
                    }
                    this.isValid = status;
                }
                return this.isValid;
            };
            ProcessActivityDefinitionModel.prototype.validateDependentOptionSetActivity = function () {
                this.clearErrorMessages();
                var status = this._validateDependentOptionSetActivity();
                if (!status) {
                    this.addNotifications();
                }
                this.isValid = status;
                return this.isValid;
            };
            ProcessActivityDefinitionModel.prototype._validateActivity = function () {
                throw new Error("Method not implemented");
            };
            ProcessActivityDefinitionModel.prototype._validateDependentOptionSetActivity = function () {
                return true;
            };
            ProcessActivityDefinitionModel.PropertyTreeHeight = "TreeHeight";
            ProcessActivityDefinitionModel.PropertyTreeWidth = "TreeWidth";
            return ProcessActivityDefinitionModel;
        })(GenericWorkflowDesigner.ActivityDefinitionModel);
        ProcessDesigner.ProcessActivityDefinitionModel = ProcessActivityDefinitionModel;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="RootActivity.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
/// <reference path="ProcessActivityDefinitionModel.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var RootActivity = (function (_super) {
            __extends(RootActivity, _super);
            function RootActivity() {
                _super.call(this, ProcessDesigner.ProcessActivityType.Root);
            }
            RootActivity.prototype.initialize = function (options) {
                _super.prototype.initialize.call(this, options);
                this.setRow(0);
                this.setCol(0);
            };
            return RootActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.RootActivity = RootActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessActivityDefinitionFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="RootActivity.ts"/>
/// <reference path="ProcessActivityDefinitionModel.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var DefaultActivityDefinitionFactory = GenericWorkflowDesigner.DefaultActivityDefinitionFactory;
        var ProcessActivityDefinitionFactory = (function (_super) {
            __extends(ProcessActivityDefinitionFactory, _super);
            function ProcessActivityDefinitionFactory() {
                _super.apply(this, arguments);
            }
            ProcessActivityDefinitionFactory.prototype.createActivity = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.ProcessActivityType.Root:
                        return new ProcessDesigner.RootActivity();
                    default:
                        return new ProcessDesigner.ProcessActivityDefinitionModel(activityType);
                }
            };
            return ProcessActivityDefinitionFactory;
        })(DefaultActivityDefinitionFactory);
        ProcessDesigner.ProcessActivityDefinitionFactory = ProcessActivityDefinitionFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="BPFActivityDefinitionFactory.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Factories to instantiate new instance of process activities given the activity type
// </summary>
//
//---------------------------------------------------------------------------------------------
/// <reference path="../../../Process/Model/ProcessActivityDefinitionFactory.ts"/>
/// <reference path="../../Common/BPFActivityType.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TBXActivityDefinitionFactory = (function (_super) {
            __extends(TBXActivityDefinitionFactory, _super);
            function TBXActivityDefinitionFactory() {
                _super.apply(this, arguments);
            }
            TBXActivityDefinitionFactory.prototype.createActivity = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new ProcessDesigner.TBXPageActivity();
                    case ProcessDesigner.TBXActivityType.root:
                        return new ProcessDesigner.BPFRootActivity();
                    case ProcessDesigner.TBXActivityType.condition:
                        return new ProcessDesigner.TBXConditionActivity();
                    case ProcessDesigner.TBXActivityType.field:
                    case ProcessDesigner.TBXActivityType.label:
                    case ProcessDesigner.TBXActivityType.sectionLabel:
                        return new ProcessDesigner.TBXStepActivity(activityType);
                    default:
                        return _super.prototype.createActivity.call(this, activityType);
                }
            };
            return TBXActivityDefinitionFactory;
        })(ProcessDesigner.ProcessActivityDefinitionFactory);
        ProcessDesigner.TBXActivityDefinitionFactory = TBXActivityDefinitionFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFActivityDefinitionCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFActivityDefinitionCollection = (function (_super) {
            __extends(BPFActivityDefinitionCollection, _super);
            function BPFActivityDefinitionCollection() {
                _super.call(this);
            }
            BPFActivityDefinitionCollection.prototype.UpdatePositions = function () {
                var row = 0, pre_row;
                var startColumn = 0;
                var length = 0, maxLength = 0;
                var UpdatePositionsRecursive = function (root, column, row) {
                    var left = 0, right = 0, pre_row = 0;
                    root.setRow(row);
                    root.setCol(column);
                    var children = root.getChildActivitiesSorted();
                    var step = 0;
                    var maxDepth = 0;
                    for (var i = 0; i < children.length; i++) {
                        if (i == 0)
                            pre_row = row;
                        maxDepth = 0;
                        var childLength = children.length;
                        switch (childLength) {
                            case 1:
                                if (children[i].getParentBranchID() == 2)
                                    row += 1;
                                break;
                            case 2:
                                if (children[i].getParentBranchID() == 2) {
                                    if (children[0].getParentBranchID() == 1) {
                                        maxDepth = GenericWorkflowDesigner.Settings.workflowTree.getMaxDepth(children[0]);
                                        row = row + maxDepth + 1;
                                    }
                                    else {
                                        row += 1;
                                    }
                                }
                                break;
                            case 3:
                                if (children[i].getParentBranchID() == 2) {
                                    maxDepth = GenericWorkflowDesigner.Settings.workflowTree.getMaxDepth(children[1]);
                                    row = row + maxDepth + 1;
                                }
                                break;
                        }
                        if (root.attributes.ActivityTypeID == "condition" && children[i].attributes.ParentBranchID == 0) {
                            if (children[1] != undefined)
                                left = ProcessDesigner.BPFWorkflowTree.prototype.getMaxDrift(children[1]);
                            if (children[2] != undefined)
                                right = ProcessDesigner.BPFWorkflowTree.prototype.getMaxDrift(children[2]);
                            if (left > right)
                                maxLength = left;
                            else
                                maxLength = right;
                            UpdatePositionsRecursive(children[i], column + maxLength + 1, row);
                        }
                        else {
                            UpdatePositionsRecursive(children[i], column + 1, row);
                        }
                    }
                    row = pre_row;
                };
                var root = this.getWorkflowDefinitionRoot();
                UpdatePositionsRecursive(root, startColumn, row);
            };
            return BPFActivityDefinitionCollection;
        })(GenericWorkflowDesigner.ActivityDefinitionCollection);
        ProcessDesigner.BPFActivityDefinitionCollection = BPFActivityDefinitionCollection;
        ;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFWorkflowTree.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFWorkflowTree = (function (_super) {
            __extends(BPFWorkflowTree, _super);
            function BPFWorkflowTree() {
                _super.apply(this, arguments);
            }
            BPFWorkflowTree.prototype.getMaxDrift = function (activity) {
                var childActivities = activity.getChildActivitiesSorted();
                switch (childActivities.length) {
                    case 0:
                        return 1;
                    case 1:
                        return this.getMaxDrift(childActivities[0]) + 1;
                    case 2:
                        if (childActivities[0].attributes.ParentBranchID == 0)
                            return this.getMaxDrift(childActivities[0]) + this.getMaxDrift(childActivities[1]) + 1;
                        else
                            return Math.max(this.getMaxDrift(childActivities[0]), this.getMaxDrift(childActivities[1])) + 1;
                    case 3:
                        return this.getMaxDrift(childActivities[0])
                            + Math.max(this.getMaxDrift(childActivities[1]), this.getMaxDrift(childActivities[2]))
                            + 1;
                }
            };
            BPFWorkflowTree.prototype.getMaxDepth = function (activity) {
                if (activity) {
                    var childActivities = activity.getChildActivitiesSorted();
                    var length = childActivities.length;
                    switch (length) {
                        case 0:
                            return 0;
                        case 1:
                            if (childActivities[length - 1].getParentBranchID() == ProcessDesigner.branchType.Else)
                                return this.getMaxDepth(childActivities[0]) + 1;
                            else
                                return this.getMaxDepth(childActivities[0]);
                        case 2:
                            if (childActivities[length - 1].getParentBranchID() == ProcessDesigner.branchType.Else)
                                return this.getMaxDepth(childActivities[0]) + this.getMaxDepth(childActivities[1]) + 1;
                            else
                                return Math.max(this.getMaxDepth(childActivities[0]), this.getMaxDepth(childActivities[1])) + 1;
                        case 3:
                            return Math.max(this.getMaxDepth(childActivities[0]), (this.getMaxDepth(childActivities[1])) + this.getMaxDepth(childActivities[2]))
                                + 1;
                    }
                }
            };
            BPFWorkflowTree.prototype.insertChildActivityComponentAtIndex = function (parentActivity, childActivityComponent, parentBranchID) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var childActivity = childActivityComponent.getRoot();
                var oldParent = childActivity.getParent();
                var deferred = $.Deferred();
                var promiseList = [];
                childActivity.setParentActivityID(parentActivity.getActivityID());
                childActivity.setParentBranchID(parentBranchID);
                var length = childActivities.length;
                switch (length) {
                    case 0:
                        childActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        break;
                    case 1:
                        var branchID = childActivities[0].getParentBranchID();
                        switch (branchID) {
                            case ProcessDesigner.branchType.Default:
                                childActivity.setNextActivityID(childActivities[0].getActivityID());
                                if (parentActivity.getNextActivityID())
                                    parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                break;
                            case ProcessDesigner.branchType.If:
                                childActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                break;
                        }
                        break;
                    case 2:
                        childActivity.setNextActivityID(childActivities[0].getActivityID());
                        if (parentActivity.getNextActivityID())
                            parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        break;
                }
                ;
                if (childActivity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                    var promise = childActivity.save();
                    promiseList.push(promise);
                }
                self.add(childActivity);
                $.when.apply(self, promiseList).done(function () {
                    deferred.resolveWith(childActivity, [childActivity]);
                });
                return deferred.promise();
            };
            BPFWorkflowTree.prototype.insertActivityComponentAfter = function (parentActivity, insertActivityComponent) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var deferred = $.Deferred();
                var promiseList = [], activity;
                var insertActivity = insertActivityComponent.getRoot();
                var promise = insertActivity.save().done(function () {
                    var length = childActivities.length;
                    switch (length) {
                        case 0:
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                insertActivity.setParentActivityID(parentActivity.getActivityID());
                                insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                            }
                            else {
                                insertActivity.setParentActivityID(parentActivity.getActivityID());
                                insertActivity.setParentBranchID(ProcessDesigner.branchType.Default);
                            }
                            if (parentActivity.getNextActivityID() != GenericWorkflowDesigner.ActivityType.Empty) {
                                insertActivity.setNextActivityID(parentActivity.getNextActivityID());
                                parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                            }
                            break;
                        case 1:
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                var parentBranchID = childActivities[0].getParentBranchID();
                                switch (parentBranchID) {
                                    case ProcessDesigner.branchType.Default:
                                        insertActivity.setParentActivityID(parentActivity.getActivityID());
                                        insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                        if (parentActivity.getNextActivityID()) {
                                            insertActivity.setNextActivityID(childActivities[0].getActivityID());
                                            parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        }
                                        break;
                                    case ProcessDesigner.branchType.If:
                                        insertActivity.setParentActivityID(parentActivity.getActivityID());
                                        insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                        childActivities[0].setParentActivityID(insertActivity.getActivityID());
                                        childActivities[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                        if (parentActivity.getNextActivityID()) {
                                            insertActivity.setNextActivityID(parentActivity.getNextActivityID());
                                        }
                                        break;
                                    case ProcessDesigner.branchType.Else:
                                        insertActivity.setParentActivityID(parentActivity.getActivityID());
                                        insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                        if (parentActivity.getNextActivityID()) {
                                            insertActivity.setNextActivityID(parentActivity.getNextActivityID());
                                            parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        }
                                        break;
                                }
                                ;
                            }
                            else {
                                insertActivity.setParentActivityID(parentActivity.getActivityID());
                                insertActivity.setParentBranchID(ProcessDesigner.branchType.Default);
                                childActivities[0].setParentActivityID(insertActivity.getActivityID());
                                if (insertActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                    childActivities[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                    insertActivity.setNextActivityID(childActivities[0].getActivityID());
                                }
                            }
                            break;
                        case 2:
                            var parentBranchID = childActivities[0].getParentBranchID();
                            switch (parentBranchID) {
                                case ProcessDesigner.branchType.Default:
                                    if (childActivities[1].getParentBranchID() == ProcessDesigner.branchType.Else) {
                                        insertActivity.setParentActivityID(parentActivity.getActivityID());
                                        insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                        insertActivity.setNextActivityID(childActivities[0].getActivityID());
                                        if (parentActivity.getNextActivityID() != "empty" || parentActivity.getNextActivityID() != null)
                                            parentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        childActivities[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                    }
                                    else {
                                        insertActivity.setParentActivityID(parentActivity.getActivityID());
                                        insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                        childActivities[1].setParentActivityID(insertActivity.getActivityID());
                                        childActivities[1].setParentBranchID(ProcessDesigner.branchType.Default);
                                    }
                                    break;
                                case ProcessDesigner.branchType.If:
                                    insertActivity.setParentActivityID(parentActivity.getActivityID());
                                    insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                                    childActivities[0].setParentActivityID(insertActivity.getActivityID());
                                    childActivities[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                    break;
                            }
                            ;
                            break;
                        case 3:
                            insertActivity.setParentActivityID(parentActivity.getActivityID());
                            insertActivity.setParentBranchID(ProcessDesigner.branchType.If);
                            childActivities[1].setParentActivityID(insertActivity.getActivityID());
                            childActivities[1].setParentBranchID(ProcessDesigner.branchType.Default);
                            break;
                    }
                    if (childActivities[0]) {
                        promise = childActivities[0].save();
                        promiseList.push(promise);
                    }
                    if (childActivities[1]) {
                        promise = childActivities[1].save();
                        promiseList.push(promise);
                    }
                    if (parentActivity)
                        parentActivity.save();
                    insertActivity.save();
                    self.add(insertActivity);
                    $.when.apply(self, promiseList).done(function () {
                        deferred.resolveWith(insertActivity, [insertActivity]);
                    });
                });
                promiseList.push(promise);
                return deferred.promise();
            };
            BPFWorkflowTree.prototype.insertActivityComponentBefore = function (activity, insertComponent) {
                var self = this;
                var deferred = $.Deferred();
                var root = insertComponent.getRoot();
                root.setParentActivityID(activity.getParentActivityID());
                root.setParentBranchID(activity.getParentBranchID());
                root.save().done(function () {
                    self.add(root);
                    activity.setParentActivityID(root.getActivityID());
                    if (root.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition && activity.getParentBranchID() == ProcessDesigner.branchType.Else) {
                        activity.setParentBranchID(ProcessDesigner.branchType.If);
                    }
                    else {
                        activity.setParentBranchID(ProcessDesigner.branchType.Default);
                    }
                    if (root.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        root.setNextActivityID(activity.getActivityID());
                    }
                    activity.save().done(function () {
                        deferred.resolveWith(root, [root]);
                    });
                });
                return deferred.promise();
            };
            BPFWorkflowTree.prototype.cutConnectedComponent = function (component) {
                var self = this;
                var deferred = $.Deferred();
                var promiseList = [];
                var activityToCut = component.getRoot();
                var branchIndex = activityToCut.getParentBranchID();
                var oldParent;
                var oldParentActivityID;
                if (activityToCut == GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()) {
                    oldParent = activityToCut;
                    oldParentActivityID = activityToCut.getParentActivityID();
                }
                else {
                    oldParent = activityToCut.getParent();
                    if (oldParent == null) {
                        deferred.resolve();
                        return deferred.promise();
                    }
                    oldParentActivityID = oldParent.getActivityID();
                }
                var oldParentChildren = oldParent.getChildActivitiesSorted();
                var activityToCutBranchId = activityToCut.getParentBranchID();
                jQuery.each(component.getOrphanChildren(), function (index, child) {
                    if (child.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                        self.remove(child);
                    }
                });
                var activitiesToMove = self.getActivitiesToMoveOnCut(component);
                var numberOfActivitiesToBeInserted = activitiesToMove.length;
                jQuery.each(oldParentChildren, function (index, activity) {
                    var branchID = activity.getParentBranchID();
                    if (branchID > activityToCutBranchId) {
                        activity.setParentBranchID(branchID + numberOfActivitiesToBeInserted - 1);
                        var promise = activity.save();
                        promiseList.push(promise);
                    }
                });
                var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                var nextStage = activityToCut.getChildActivitiesSorted()[0];
                if (nextStage) {
                    jQuery.each(allActivities, function (index, currentActivity) {
                        if (currentActivity.getNextActivityID() == activityToCut.getActivityID()) {
                            if (nextStage)
                                currentActivity.setNextActivityID(nextStage.getActivityID());
                            else
                                currentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        }
                    });
                }
                else {
                    if (activityToCut.getNextActivityID()) {
                        var parentActivity = activityToCut.getParent();
                        if (parentActivity) {
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                var branchId = activityToCut.getParentBranchID();
                                switch (branchId) {
                                    case ProcessDesigner.branchType.Default:
                                        var children = parentActivity.getChildActivitiesSorted();
                                        if (children.length == 1 && children[0].getActivityID() == activityToCut.getActivityID()) {
                                            parentActivity.setNextActivityID(activityToCut.getNextActivityID());
                                        }
                                        else {
                                            jQuery.each(allActivities, function (index, currentActivity) {
                                                if (currentActivity.getNextActivityID() == activityToCut.getActivityID()) {
                                                    if (activityToCut.getNextActivityID()) {
                                                        currentActivity.setNextActivityID(activityToCut.getNextActivityID());
                                                    }
                                                    else {
                                                        currentActivity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                                    }
                                                }
                                            });
                                        }
                                        break;
                                    case ProcessDesigner.branchType.If:
                                        parentActivity.setNextActivityID(activityToCut.getNextActivityID());
                                        activityToCut.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        break;
                                    case ProcessDesigner.branchType.Else:
                                        parentActivity.setNextActivityID(activityToCut.getNextActivityID());
                                        activityToCut.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        break;
                                }
                                ;
                            }
                            else {
                                parentActivity.setNextActivityID(activityToCut.getNextActivityID());
                                activityToCut.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                            }
                        }
                    }
                }
                jQuery.each(activitiesToMove, function (index, child) {
                    child.setParentActivityID(oldParentActivityID);
                    child.setParentBranchID(branchIndex);
                    promiseList.push(child.save());
                    branchIndex++;
                });
                activityToCut.setParentActivityID(null);
                $.when.apply(self, promiseList).done(function () {
                    deferred.resolve();
                });
                return deferred.promise();
            };
            BPFWorkflowTree.prototype.traverseActivityTreeForward = function (currentActivity, activitiesInOrder) {
                if (!CommonTypes.Types.Object.isNullOrUndefined(currentActivity)) {
                    activitiesInOrder.push(currentActivity);
                }
                var childrenOfCurrentActivity = this.getChildActivities(currentActivity);
                if (currentActivity instanceof ProcessDesigner.TBXPageActivity && childrenOfCurrentActivity.length == 1 && !CommonTypes.Types.Object.isNullOrUndefined(childrenOfCurrentActivity[0])) {
                    activitiesInOrder = this.traverseActivityTreeForward(childrenOfCurrentActivity[0], activitiesInOrder);
                }
                else if (currentActivity instanceof ProcessDesigner.TBXConditionActivity) {
                    var yesBranchActivity = null;
                    var noBranchActivity = null;
                    var defaultBranchActivity = null;
                    childrenOfCurrentActivity.forEach(function (childActivity) {
                        if (childActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                            yesBranchActivity = childActivity;
                        }
                        else if (childActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                            noBranchActivity = childActivity;
                        }
                        else {
                            defaultBranchActivity = childActivity;
                        }
                    });
                    if (!CommonTypes.Types.Object.isNullOrUndefined(yesBranchActivity)) {
                        activitiesInOrder = this.traverseActivityTreeForward(yesBranchActivity, activitiesInOrder);
                    }
                    if (!CommonTypes.Types.Object.isNullOrUndefined(noBranchActivity)) {
                        activitiesInOrder = this.traverseActivityTreeForward(noBranchActivity, activitiesInOrder);
                    }
                    if (!CommonTypes.Types.Object.isNullOrUndefined(defaultBranchActivity)) {
                        activitiesInOrder = this.traverseActivityTreeForward(defaultBranchActivity, activitiesInOrder);
                    }
                }
                return activitiesInOrder;
            };
            BPFWorkflowTree.prototype.getPageActivitiesOrdered = function () {
                var activitiesInOrder = [];
                var stageActivities = [];
                var rootActivity = this.getWorkflowDefinitionRoot();
                activitiesInOrder = this.traverseActivityTreeForward(rootActivity, activitiesInOrder);
                activitiesInOrder.forEach(function (activity) {
                    if (activity instanceof ProcessDesigner.TBXPageActivity) {
                        stageActivities.push(activity);
                    }
                });
                return stageActivities;
            };
            BPFWorkflowTree.prototype.getStageActivities = function () {
                var stageActivities = [];
                this.getActivities().forEach(function (activity) {
                    if (activity instanceof ProcessDesigner.TBXPageActivity) {
                        stageActivities.push(activity);
                    }
                });
                return stageActivities;
            };
            BPFWorkflowTree.prototype.getAllChildActivities = function (activity) {
                var allChildActivities = [];
                var self = this;
                $(this.getChildActivities(activity)).each(function (index, childActivity) {
                    allChildActivities.push(childActivity);
                    if (!childActivity.isLeaf()) {
                        allChildActivities = allChildActivities.concat(self.getAllChildActivities(childActivity));
                    }
                });
                return allChildActivities;
            };
            return BPFWorkflowTree;
        })(GenericWorkflowDesigner.WorkflowTree);
        ProcessDesigner.BPFWorkflowTree = BPFWorkflowTree;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="IProcessToActivityCollectionVisitor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// <copyright file="ProcessToActivityCollectionVisitor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="iprocesstoactivitycollectionvisitor.ts" />
/// <reference path="../model/processactivitydefinitionmodel.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ConditionBranchDisplayMode = Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode;
        var ProcessToActivityCollectionVisitor = (function (_super) {
            __extends(ProcessToActivityCollectionVisitor, _super);
            function ProcessToActivityCollectionVisitor() {
                _super.call(this);
                this.collection = null;
                this.currentParent = null;
                this.currentParentBranchId = ProcessToActivityCollectionVisitor.defaultParentBranchId;
                this.activityDefinitionFactory = null;
                this.activityDefinitionFactory = new ProcessDesigner.TBXActivityDefinitionFactory();
                this.collection = new ProcessDesigner.BPFActivityDefinitionCollection();
            }
            ProcessToActivityCollectionVisitor.prototype.convert = function (root) {
                this.visitWorkflowStep(root);
                return this.collection;
            };
            ProcessToActivityCollectionVisitor.prototype.visitConditionBranchStep = function (conditionBranchStep) {
                var conditionBranchActivity = null;
                var displayMode = conditionBranchStep.get_conditionBranchDisplayMode();
                if (displayMode === ConditionBranchDisplayMode.IF ||
                    displayMode === ConditionBranchDisplayMode.elseIf) {
                    conditionBranchActivity = this.createActivity(conditionBranchStep, ProcessDesigner.ProcessActivityType.Condition);
                    this.currentParent = conditionBranchActivity;
                    this.currentParentBranchId = ProcessDesigner.DefaultBranchIndices.YesBranch;
                }
                this.visitSteps(conditionBranchStep);
                this.currentParent = conditionBranchActivity;
            };
            ProcessToActivityCollectionVisitor.prototype.visitConditionStep = function (conditionStep) {
                var firstCondition = null;
                var steps = conditionStep.get_Steps();
                for (var i = 0; i < steps.get_Count(); ++i) {
                    steps.get_item(i).apply(this);
                    this.currentParentBranchId = ProcessDesigner.DefaultBranchIndices.NoBranch;
                    if (i === 0) {
                        firstCondition = this.currentParent;
                    }
                }
                this.currentParent = firstCondition;
                this.currentParentBranchId = ProcessDesigner.DefaultBranchIndices.DefaultBranch;
            };
            ProcessToActivityCollectionVisitor.prototype.visitWorkflowStep = function (workflowStep) {
                var model = this.createActivity(workflowStep, ProcessDesigner.ProcessActivityType.Root);
                this.currentParent = model;
                this.currentParentBranchId = ProcessToActivityCollectionVisitor.defaultParentBranchId;
                this.visitSteps(workflowStep);
            };
            ProcessToActivityCollectionVisitor.prototype.visitSteps = function (step) {
                var steps = step.get_Steps();
                for (var i = 0; i < steps.get_Count(); ++i) {
                    steps.get_item(i).apply(this);
                }
            };
            ProcessToActivityCollectionVisitor.prototype.createActivity = function (step, activityType) {
                var activity = this.activityDefinitionFactory.createActivity(activityType);
                if (this.currentParent !== null) {
                    activity.setParentActivityID(this.currentParent.getActivityID());
                    activity.setParentBranchID(this.currentParentBranchId);
                }
                activity.processStep = step;
                if (activityType != ProcessDesigner.TBXActivityType.root)
                    this.collection.add(activity);
                return activity;
            };
            ProcessToActivityCollectionVisitor.prototype.visitEntityStep = function (entityStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetAttributeValueStep = function (setAttributeValueStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetDisplayModeStep = function (setDisplayModeStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetFieldRequiredLevelStep = function (setFieldRequiredLevelStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetMessageStep = function (setMessageStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetVisibilityStep = function (setVisibilityStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitStageStep = function (stageStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitPageStep = function (pageStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitStepStep = function (stepStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitControlStep = function (controlStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitActionStep = function (actionStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitCustomJavascriptStep = function (customJSStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitCreateStep = function (createStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitCustomActivityStep = function (customActivityStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitAssignStep = function (assignStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitChildWorkflowStep = function (childWorkflowStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSendEmailStep = function (sendEmailStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetStateStep = function (setStateStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitUpdateStep = function (updateStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitWaitBranchStep = function (waitBranchStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitWaitStep = function (waitStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitWaitTimeoutStep = function (waitTimeoutStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitStopWorkflowStep = function (stopWorkflowStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitRollupRuleStep = function (rollupRuleStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetDefaultValueStep = function (setDefaultValueStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitSetNextStageStep = function (setNextStageStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitRelationshipCollectionStep = function (relationshipCollectionStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitRelationshipStep = function (relationshipStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitInteractionStep = function (interactionStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitInteractionPageStep = function (interactionPageStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitChildInteractiveWorkflowStep = function (childWorkflowStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitAssignVariableStep = function (assignVariableStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitQueryStep = function (queryStep) { };
            ProcessToActivityCollectionVisitor.defaultParentBranchId = 0;
            return ProcessToActivityCollectionVisitor;
        })(Microsoft.Crm.Workflow.ObjectModel.StepVisitorBase);
        ProcessDesigner.ProcessToActivityCollectionVisitor = ProcessToActivityCollectionVisitor;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StageRelationship.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var StageRelationship = (function () {
            function StageRelationship(relationshipStep, source) {
                this._step = null;
                this._source = null;
                this._step = relationshipStep;
                this._source = source;
            }
            Object.defineProperty(StageRelationship.prototype, "step", {
                get: function () {
                    return this._step;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageRelationship.prototype, "sourceStep", {
                get: function () {
                    return this._source;
                },
                enumerable: true,
                configurable: true
            });
            return StageRelationship;
        })();
        ProcessDesigner.StageRelationship = StageRelationship;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStepActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the step activity of the business process
//  </summary>
/// <reference path="../../common/bpfactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Utility = _Microsoft.Client.Telemetry.Utility;
        var WorkflowObjectModel = Microsoft.Crm.Workflow.ObjectModel;
        var WorkflowExpressions = Microsoft.Crm.Workflow.Expressions;
        var TBXStepActivity = (function (_super) {
            __extends(TBXStepActivity, _super);
            function TBXStepActivity(activityType) {
                _super.call(this, activityType);
                this._attributeDisplayName = "";
                this._attributeName = "";
                this._parentPicklistLogicalName = "";
                this._childPicklistLogicalNames = null;
                this._classId = "";
                this._controlId = "";
                this._systemStepType = "";
                this.setActivityTypeID(activityType);
                this._description = (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? TBXStepActivity.defaultFieldName : (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) ? TBXStepActivity.defaultLabelName : TBXStepActivity.defaultSectionLabelName;
                this.controlId = (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) ? Utility.newGuid() : null;
                this.classId = (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? "00000000-0000-0000-0000-000000000000" : null;
                this.systemStepType = "identifyContact";
                if (ProcessDesigner.processStep != null && this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) {
                    this.entity = new WorkflowExpressions.PrimaryEntity(ProcessDesigner.processStep);
                }
            }
            Object.defineProperty(TBXStepActivity.prototype, "parentStage", {
                get: function () {
                    return this._parentStage;
                },
                set: function (value) {
                    if (this._parentStage !== value) {
                        this._parentStage = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "controlStep", {
                get: function () {
                    return this._controlStep;
                },
                set: function (value) {
                    if (this._controlStep !== value) {
                        this._controlStep = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "attributeDisplayName", {
                get: function () {
                    return this._attributeDisplayName;
                },
                set: function (value) {
                    if (this._attributeDisplayName !== value) {
                        this._attributeDisplayName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "stepId", {
                get: function () {
                    return this._stepId;
                },
                set: function (value) {
                    if (this._stepId !== value) {
                        this._stepId = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "currentStepId", {
                get: function () {
                    return this._currentStepId;
                },
                set: function (value) {
                    if (this._currentStepId !== value) {
                        this._currentStepId = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "description", {
                get: function () {
                    return this._description;
                },
                set: function (value) {
                    if (this._description !== value) {
                        this._description = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "isNewlyAdded", {
                get: function () {
                    return this._isNewlyAdded;
                },
                set: function (value) {
                    if (this._isNewlyAdded !== value) {
                        this._isNewlyAdded = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "sequence", {
                get: function () {
                    return this._sequence;
                },
                set: function (value) {
                    if (this._sequence !== value) {
                        this._sequence = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "attributeName", {
                get: function () {
                    return this._attributeName;
                },
                set: function (value) {
                    if (this._attributeName !== value) {
                        this._attributeName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "attributeType", {
                get: function () {
                    return this._attributeType;
                },
                set: function (value) {
                    if (this._attributeType !== value) {
                        this._attributeType = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "parentPicklistLogicalName", {
                get: function () {
                    return this._parentPicklistLogicalName;
                },
                set: function (value) {
                    if (this._parentPicklistLogicalName !== value) {
                        this._parentPicklistLogicalName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "childPicklistLogicalNames", {
                get: function () {
                    return this._childPicklistLogicalNames;
                },
                set: function (value) {
                    if (this._childPicklistLogicalNames !== value) {
                        this._childPicklistLogicalNames = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "classId", {
                get: function () {
                    return this._classId;
                },
                set: function (value) {
                    if (this._classId !== value) {
                        this._classId = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "controlId", {
                get: function () {
                    return this._controlId;
                },
                set: function (value) {
                    if (this._controlId !== value) {
                        this._controlId = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXStepActivity.prototype, "systemStepType", {
                get: function () {
                    return this._systemStepType;
                },
                set: function (value) {
                    if (this._systemStepType !== value) {
                        this._systemStepType = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            TBXStepActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.stepId = Utility.newGuid();
            };
            TBXStepActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                if (this.isDefaultDescription()) {
                    this.description = (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ?
                        TBXStepActivity.defaultFieldName :
                        (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) ?
                            TBXStepActivity.defaultLabelName :
                            TBXStepActivity.defaultSectionLabelName;
                }
            };
            TBXStepActivity.prototype.isDefaultDescription = function () {
                if (this._description == TBXStepActivity.defaultFieldName || this._description == TBXStepActivity.defaultLabelName || this._description == TBXStepActivity.defaultSectionLabelName)
                    return true;
                return false;
            };
            TBXStepActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    _attributeName: this.attributeName,
                    _description: this.description,
                    _defaultStepName: TBXStepActivity.defaultFieldName
                };
                return JSON.stringify(target);
            };
            TBXStepActivity.prototype.getStepLabel = function () {
                var stepLabel = new WorkflowObjectModel.StepLabel();
                stepLabel.set_description(this.description);
                stepLabel.set_labelId(this.stepId);
                stepLabel.set_languageCode(window._Process_CurrentLCID);
                return stepLabel;
            };
            TBXStepActivity.prototype.generateControlStepJson = function (workflowStep) {
                var controlStep = new WorkflowObjectModel.ControlStep(workflowStep);
                controlStep.set_workflow(workflowStep);
                controlStep.set_classId(this.classId);
                if (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) {
                    controlStep.set_controlId(this.attributeName);
                }
                else {
                    controlStep.set_controlId(this.controlId);
                }
                if (!CommonTypes.Types.Object.isNullOrUndefined(this.attributeName)) {
                    controlStep.set_dataFieldName(this.attributeName);
                }
                if (this.entity != null && this.entity != undefined) {
                    this.entity.set_workflow(workflowStep);
                }
                controlStep.set_entity(this.entity);
                controlStep.set_parameters("");
                controlStep.set_systemStepType(this.systemStepType);
                controlStep.set_isSystemControl(false);
                if (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) {
                    controlStep.set_controlDisplayName(this.attributeDisplayName);
                }
                else if (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) {
                    controlStep.set_controlDisplayName(this.description);
                }
                if (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) {
                    controlStep.set_isUnbound(false);
                    controlStep.set_controlType("0");
                }
                else {
                    controlStep.set_isUnbound(true);
                    if (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.sectionLabel) {
                        controlStep.set_controlType("1");
                        controlStep.set_Id(this.stepId);
                    }
                    else {
                        controlStep.set_controlType("2");
                    }
                }
                return controlStep;
            };
            TBXStepActivity.prototype.generateStepStepJson = function (workflowStep) {
                var defaultName = (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? TBXStepActivity.defaultFieldName : (this.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) ? TBXStepActivity.defaultLabelName : TBXStepActivity.defaultSectionLabelName;
                var stepStep = new WorkflowObjectModel.StepStep(workflowStep, defaultName);
                stepStep.set_workflow(workflowStep);
                stepStep.set_Description(this.description);
                stepStep.set_isHidden(false);
                stepStep.set_stepStepId(this.stepId);
                stepStep.addLabel(this.getStepLabel());
                stepStep.appendStep(this.generateControlStepJson(workflowStep));
                return stepStep;
            };
            TBXStepActivity.prototype._validateActivity = function () {
                var status = true;
                var result = null;
                if (this.getActivityTypeID() != ProcessDesigner.TBXActivityType.label && this.getActivityTypeID() != ProcessDesigner.TBXActivityType.sectionLabel) {
                    result = ProcessDesigner.Validation.Engine.validateField("#attributeNameDropDown", this.attributeName, ProcessDesigner.Validation.Required.apply, ProcessDesigner.Validation.Level.Validate, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"), null);
                    status = this.addResult(result) && status;
                    if (result.isValid) {
                        status = this.validateDependentOptionSetProperties();
                    }
                }
                if (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Error) {
                    result = ProcessDesigner.Validation.Engine.validateField("#descriptionTextbox", this._description, ProcessDesigner.Validation.Required.apply, ProcessDesigner.Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"), null);
                    status = this.addResult(result) && status;
                }
                return status;
            };
            TBXStepActivity.prototype._validateDependentOptionSetActivity = function () {
                var status = true;
                var result = null;
                status = this.validateDependentOptionSetProperties() && status;
                return status;
            };
            TBXStepActivity.prototype.validateDependentOptionSetProperties = function () {
                var status = true;
                var isCompleteChain = true;
                var result = null;
                if (ProcessDesigner.MetadataProxy.isDependentOptionSetField(this.parentStage.entityName, this.attributeName)) {
                    if (this.parentPicklistLogicalName !== 'null') {
                        this.parentPicklistLogicalName = ProcessDesigner.MetadataProxy.getDependentPickListParentLogicalName(this.parentStage.entityName, this.attributeName);
                    }
                    var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_DependentOptionSetField_WarningMessage");
                    isCompleteChain = this.IsDependentOptionSetParentAdded();
                    if (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Warning) {
                        if (!isCompleteChain) {
                            this.addWarningMessage("#attributeNameDropDown", message);
                        }
                        ProcessDesigner.TBXDesignerControl.validationMode = (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Error) ? ProcessDesigner.TBXDesignerControl.validationMode : GenericWorkflowDesigner.ValidationMode.None;
                    }
                    else if (ProcessDesigner.Validation.Engine.getLastAction() >= ProcessDesigner.Validation.Level.Validate || (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Error && ProcessDesigner.Validation.Engine.getLastAction() >= ProcessDesigner.Validation.Level.Validate)) {
                        result = ProcessDesigner.Validation.Engine.validateField("#attributeNameDropDown", isCompleteChain, ProcessDesigner.Validation.CompleteChain.apply, ProcessDesigner.Validation.Level.Validate, message, null);
                        status = this.addResult(result) && status;
                    }
                }
                return isCompleteChain;
            };
            TBXStepActivity.prototype.getPreviousStageActivities = function (parentStage, previousStageActivities) {
                if (parentStage != null) {
                    var stage = parentStage;
                    if (stage != null) {
                        previousStageActivities.push(parentStage);
                        parentStage = stage.getParentStage();
                        this.getPreviousStageActivities(parentStage, previousStageActivities);
                    }
                }
            };
            TBXStepActivity.prototype.isParentAttributeAdded = function (attributeDependentOptionSetMappings, parentName, parentOptionSetStages, stageId) {
                var result = true;
                result = !CommonTypes.Types.Object.isNullOrUndefined(attributeDependentOptionSetMappings[parentName]);
                if (result) {
                    var steps = attributeDependentOptionSetMappings[parentName];
                    _.each(steps.map(function (step) { return step.stageId; }), function (stageId) {
                        if (parentOptionSetStages.indexOf(stageId) == -1) {
                            parentOptionSetStages.push(stageId);
                        }
                    });
                    for (var i = 0; i < steps.length; i++) {
                        var parentLogicalName = steps[i].parentPicklistLogicalName;
                        var parentOptionSetStageId = steps[i].stageId;
                        if (!CommonTypes.Types.Object.isNullOrUndefined(parentLogicalName) && parentLogicalName !== "null" && parentLogicalName.length > 0) {
                            parentName = parentLogicalName;
                            stageId = parentOptionSetStageId;
                            return this.isParentAttributeAdded(attributeDependentOptionSetMappings, parentName, parentOptionSetStages, stageId);
                        }
                    }
                }
                return result;
            };
            TBXStepActivity.prototype.IsDependentOptionSetParentAdded = function () {
                var result = true;
                if (((ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Warning) ||
                    (ProcessDesigner.Validation.Engine.getLastAction() >= ProcessDesigner.Validation.Level.Validate || (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.Error && ProcessDesigner.Validation.Engine.getLastAction() >= ProcessDesigner.Validation.Level.Validate)))
                    && !CommonTypes.Types.Object.isNullOrUndefined(this.parentPicklistLogicalName)
                    && this.parentPicklistLogicalName.length > 0
                    && this.parentPicklistLogicalName !== "null") {
                    var currentAttributeName = this.attributeName;
                    var previousStageActivities = [];
                    var parentOptionSetStages = [];
                    this.getPreviousStageActivities(this.parentStage, previousStageActivities);
                    var parentStageId = this.parentStage.stageId;
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                    var currentStepId = this.currentStepId;
                    var branchedactvities = _.filter(activities, function (activity) { return activity.getActivityTypeID() == "page" && activity.nextStageId == parentStageId; });
                    previousStageActivities = _.union(previousStageActivities, branchedactvities);
                    var attributeDependentOptionSetMappings = {};
                    _.each(previousStageActivities, function (stageActivity) {
                        _.each(stageActivity.steps, function (step) {
                            if (!CommonTypes.Types.Object.isNullOrUndefined(step.attributeName)
                                && step.getActivityTypeID() == "step"
                                && ProcessDesigner.MetadataProxy.isDependentOptionSetField(stageActivity.entityName, step.attributeName)
                                && step.attributeName.length > 0
                                && (step.stepId !== currentStepId
                                    || step.attributeName == currentAttributeName)) {
                                var stepProperties = !CommonTypes.Types.Object.isNullOrUndefined(attributeDependentOptionSetMappings[step.attributeName]) ?
                                    attributeDependentOptionSetMappings[step.attributeName] : [];
                                var attributeDependentOptionSetProperties = { parentPicklistLogicalName: "", childPicklistLogicalNames: null, stageId: stageActivity.stageId };
                                attributeDependentOptionSetProperties.parentPicklistLogicalName = ProcessDesigner.MetadataProxy.getDependentPickListParentLogicalName(stageActivity.entityName, step.attributeName);
                                attributeDependentOptionSetProperties.childPicklistLogicalNames = ProcessDesigner.MetadataProxy.getDependentPickListChildLogicalName(stageActivity.entityName, step.attributeName);
                                stepProperties.push(attributeDependentOptionSetProperties);
                                attributeDependentOptionSetMappings[step.attributeName] = stepProperties;
                            }
                        });
                    });
                    result = this.isParentAttributeAdded(attributeDependentOptionSetMappings, this.parentPicklistLogicalName, parentOptionSetStages, parentStageId);
                    if (result) {
                        var conditionBranches = _.filter(previousStageActivities, function (conditionBranch) {
                            if (!CommonTypes.Types.Object.isNullOrUndefined(conditionBranch.getParent()))
                                return conditionBranch.getParent().getActivityTypeID() == "condition"
                                    && conditionBranch.stageId !== parentStageId;
                        }).map(function (branch) { return branch.stageId; });
                        var parentOptionSetInConditionBranch = _.intersection(conditionBranches, parentOptionSetStages).length;
                        result = parentOptionSetInConditionBranch > 0 ? parentOptionSetInConditionBranch == conditionBranches.length : result;
                    }
                }
                return result;
            };
            TBXStepActivity.prototype.getErrorTile = function () {
                return this.parentStage;
            };
            TBXStepActivity.prototype.getCanvasTile = function () {
                return this;
            };
            TBXStepActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                return [];
            };
            TBXStepActivity.prototype.getCloneOfActivity = function () {
                var newActivity = new TBXStepActivity(this.getActivityTypeID());
                newActivity.setWorkflowID(this.getWorkflowID());
                newActivity.attributeName = this.attributeName;
                newActivity.attributeDisplayName = this.attributeDisplayName;
                newActivity.description = this.description;
                newActivity.parentStage = this.parentStage;
                newActivity.attributeType = this.attributeType;
                newActivity.parentPicklistLogicalName = this.parentPicklistLogicalName;
                newActivity.entity = TBXStepActivity.CloneEntity(this.entity);
                newActivity.setParentActivityID(this.getParentActivityID());
                return newActivity;
            };
            TBXStepActivity.prototype.getPropertyPageClone = function () {
                var newActivity = new TBXStepActivity(this.getActivityTypeID());
                newActivity.attributeName = this.attributeName;
                newActivity.attributeDisplayName = this.attributeDisplayName;
                newActivity.description = this.description;
                newActivity.attributeType = this.attributeType;
                newActivity.parentPicklistLogicalName = this.parentPicklistLogicalName;
                newActivity.parentStage = this.parentStage;
                newActivity.currentStepId = this.stepId;
                newActivity.entity = this.entity;
                return newActivity;
            };
            TBXStepActivity.CloneEntity = function (entityToCopy) {
                var clonedEntity = null;
                if (entityToCopy instanceof WorkflowExpressions.PrimaryEntity) {
                    clonedEntity = new WorkflowExpressions.PrimaryEntity(entityToCopy.get_workflow());
                }
                else if (entityToCopy instanceof WorkflowExpressions.RelatedEntityLinked) {
                    var relatedEntityLinked = entityToCopy;
                    clonedEntity = new WorkflowExpressions.RelatedEntityLinked(relatedEntityLinked.get_workflow(), relatedEntityLinked.get_relatedAttributeName(), relatedEntityLinked.get_entityName(), relatedEntityLinked.get_relationshipName());
                }
                return clonedEntity;
            };
            TBXStepActivity.TypeOfStep = function (stepStep) {
                var controlStep = stepStep.get_Steps().get_item(0);
                if (controlStep.get_controlType() == "0") {
                    return ProcessDesigner.TBXActivityType.field;
                }
                else if (controlStep.get_controlType() == "2") {
                    return ProcessDesigner.TBXActivityType.label;
                }
                else {
                    return ProcessDesigner.TBXActivityType.sectionLabel;
                }
            };
            TBXStepActivity.defaultFieldName = "";
            TBXStepActivity.defaultLabelName = "";
            TBXStepActivity.defaultSectionLabelName = "";
            return TBXStepActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.TBXStepActivity = TBXStepActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../../common/bpfactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="bpfstepactivity.ts" />
// -----------------------------------------------------------------------
// <copyright file="TBXToActivityCollectionVisitor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Process/Converter/ProcessToActivityCollectionVisitor.ts"/>
/// <reference path="../Model/StageRelationship.ts"/>
/// <reference path="../model/activity/IBPFStageActivity.ts"/>
/// <reference path="../model/activity/BPFStepActivity.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ConditionBranchDisplayMode = Microsoft.Crm.Workflow.ObjectModel.ConditionBranchDisplayMode;
        var PageStep = Microsoft.Crm.Workflow.ObjectModel.PageStep;
        var StepStep = Microsoft.Crm.Workflow.ObjectModel.StepStep;
        var EntityStep = Microsoft.Crm.Workflow.ObjectModel.EntityStep;
        var BusinessProcessFlowVisitor = ProcessObjectModel.Visitors.BusinessProcessFlowVisitor;
        var Dictionary = (function () {
            function Dictionary() {
            }
            return Dictionary;
        })();
        var TbxToActivityCollectionVisitor = (function (_super) {
            __extends(TbxToActivityCollectionVisitor, _super);
            function TbxToActivityCollectionVisitor() {
                _super.call(this);
                this.visitedStages = new Dictionary();
                this.mergeParentReverseLookup = new Dictionary();
            }
            TbxToActivityCollectionVisitor.prototype.visitWorkflowStep = function (workflowStep) {
                ProcessDesigner.primaryEntity = workflowStep.get_primaryEntityName();
                ProcessDesigner.processStep = workflowStep;
                this.businessProcessFlowVisitor = new BusinessProcessFlowVisitor();
                this.businessProcessFlowVisitor.visit(workflowStep);
                var model = this.createActivity(workflowStep, ProcessDesigner.TBXActivityType.root);
                ProcessDesigner.TBXDesignerControl.Title = workflowStep.get_title();
                ProcessDesigner.TBXDesignerControl.Description = workflowStep.get_Description();
                this.currentParent = model;
                this.currentParentBranchId = ProcessDesigner.ProcessToActivityCollectionVisitor.defaultParentBranchId;
                ProcessDesigner.ControlManager.workflowEntityId = workflowStep.workflowEntityId;
                ProcessDesigner.ControlManager.formId = workflowStep.get_formId();
                var steps = workflowStep.get_Steps();
                for (var i = 0; i < steps.get_Count(); ++i) {
                    steps.get_item(i).apply(this);
                }
            };
            TbxToActivityCollectionVisitor.prototype.visitPageStep = function (pageStep) {
                var stageId = pageStep.get_stageId();
                var visited = this.visitedStages[stageId] != null;
                var model;
                if (!visited) {
                    model = this.createPageActivity(pageStep, ProcessDesigner.TBXActivityType.page);
                    this.visitedStages[stageId] = model;
                }
                else {
                    model = this.visitedStages[stageId];
                }
                this.currentParent = model;
                this.currentStageActivity = model;
                this.currentParentBranchId = ProcessDesigner.ProcessToActivityCollectionVisitor.defaultParentBranchId;
                this.currentStepIndex = 1;
                if (!visited) {
                    var stepList = pageStep.get_Steps();
                    for (var i = 0; i < stepList.get_Count(); i++) {
                        this.currentParent = model;
                        stepList.get_item(i).apply(this);
                        if (stepList.get_item(i) instanceof StepStep) {
                            this.currentStepIndex++;
                        }
                    }
                }
            };
            TbxToActivityCollectionVisitor.prototype.visitStepStep = function (stepStep) {
                if (this.currentParent instanceof ProcessDesigner.TBXPageActivity) {
                    this.currentStageActivity = this.currentParent;
                }
                var model = this.createStepActivity(stepStep, ProcessDesigner.TBXStepActivity.TypeOfStep(stepStep));
                model.stepId = stepStep.get_stepStepId();
                this.currentStepActivity = model;
                this.visitSteps(stepStep);
                this.currentStageActivity.steps.push(model);
            };
            TbxToActivityCollectionVisitor.prototype.visitControlStep = function (controlStep) {
                this.currentStepActivity.attributeName = controlStep.get_dataFieldName();
                this.currentStepActivity.classId = controlStep.get_classId();
                this.currentStepActivity.controlId = controlStep.get_controlId();
                this.currentStepActivity.controlStep = controlStep;
                this.currentStepActivity.systemStepType = controlStep.get_systemStepType();
                this.currentStepActivity.attributeDisplayName = controlStep.get_controlDisplayName();
                if (controlStep.get_entity() != null && controlStep.get_entity() != undefined) {
                    this.currentStepActivity.entity = controlStep.get_entity();
                }
                else {
                    this.currentStepActivity.entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(controlStep.get_workflow());
                }
            };
            TbxToActivityCollectionVisitor.prototype.visitEntityStep = function (entityStep) {
                _super.prototype.visitEntityStep.call(this, entityStep);
                this.visitSteps(entityStep);
            };
            TbxToActivityCollectionVisitor.prototype.visitConditionBranchStep = function (conditionBranchStep) {
                _super.prototype.visitConditionBranchStep.call(this, conditionBranchStep);
                if (conditionBranchStep.get_conditionBranchDisplayMode() == ConditionBranchDisplayMode.ELSE) {
                    if (this.currentConditionBranchActivity != null) {
                        this.currentConditionBranchActivity.initializeElseBranchStepParameters(conditionBranchStep);
                    }
                    return;
                }
                var parentStep = conditionBranchStep.get_parent().get_parent();
                if (!(parentStep instanceof PageStep)) {
                    return;
                }
                var parentPageStep = parentStep;
                var conditionBranchActivity = this.currentParent;
                this.currentConditionBranchActivity = conditionBranchActivity;
                conditionBranchActivity.parentStageEntityName = this.getEntityNameByStageId(parentPageStep.get_stageId());
                var parentNextStageId = parentPageStep.get_nextStageId();
                if (conditionBranchStep.get_conditionBranchDisplayMode() == ConditionBranchDisplayMode.elseIf || parentNextStageId == null || parentNextStageId === "") {
                    return;
                }
                var workflowStep = parentPageStep.get_parent().get_parent();
                for (var i = 0; i < workflowStep.get_Steps().get_Count(); i++) {
                    if (workflowStep.get_Steps().get_item(i) instanceof EntityStep) {
                        var entityStep = workflowStep.get_Steps().get_item(i);
                        if (!CommonTypes.Types.Object.isNullOrUndefined(entityStep.get_Steps().get_item(0)) && entityStep.get_Steps().get_item(0) instanceof PageStep) {
                            var pageStep = entityStep.get_Steps().get_item(0);
                            if (pageStep.get_nextStageId() == parentNextStageId) {
                                if (pageStep.get_stageId() == parentPageStep.get_stageId()) {
                                    this.mergeParentReverseLookup[parentNextStageId] = conditionBranchActivity.getActivityID();
                                }
                                break;
                            }
                        }
                    }
                }
            };
            TbxToActivityCollectionVisitor.prototype.visitSetNextStageStep = function (setNextPageStep) {
                var nextStageId = setNextPageStep.get_stageId();
                var nextStage = null;
                if (nextStageId != null && nextStageId != "") {
                    nextStage = this.businessProcessFlowVisitor.get_stagesById()[nextStageId];
                }
                if (nextStage != null) {
                    nextStage.apply(this);
                }
            };
            TbxToActivityCollectionVisitor.prototype.createPageActivity = function (PageStep, activityType) {
                var activity = this.createActivity(PageStep, activityType);
                var relationshipSteps = this.businessProcessFlowVisitor.getRelationshipStepsByTargetStage(PageStep.get_stageId());
                if (relationshipSteps != null) {
                    var relationships = [];
                    var relationshipName = "";
                    var relationshipStepsArray = Object.keys(relationshipSteps).map(function (key) { return relationshipSteps[key]; });
                    for (var i = 0; i < relationshipStepsArray.length; ++i) {
                        var entry = relationshipStepsArray[i];
                        var source = this.businessProcessFlowVisitor.get_stagesById()[entry.sourceStageId];
                        var stageRelationship = new ProcessDesigner.StageRelationship(entry, source);
                        relationshipName = stageRelationship.step.get_relationshipName();
                        relationships.push(stageRelationship);
                    }
                    activity.relationships = relationships;
                    activity.relationshipName = relationshipName;
                }
                activity.entityName = this.getEntityNameByStageId(PageStep.get_stageId());
                var parentActivityId = this.mergeParentReverseLookup[PageStep.get_stageId()];
                if (parentActivityId != null && parentActivityId !== "") {
                    activity.setParentActivityID(parentActivityId);
                    activity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                }
                else if (this.currentParent instanceof ProcessDesigner.TBXPageActivity && this.currentParent.getActivityID() != null) {
                    if (this.currentParent.nextStageId != PageStep.get_stageId()) {
                        for (var stageId in this.visitedStages) {
                            if (this.visitedStages[stageId].nextStageId == PageStep.get_stageId()) {
                                activity.setParentActivityID(this.visitedStages[stageId].getActivityID());
                            }
                        }
                    }
                }
                activity.stageId = PageStep.get_stageId();
                activity.nextStageId = PageStep.get_nextStageId();
                activity.stageCategory = PageStep.get_stageCategory();
                activity.pageLayoutId = PageStep.get_pageLayoutId();
                return activity;
            };
            TbxToActivityCollectionVisitor.prototype.createStepActivity = function (stepStep, activityType) {
                var activity = new ProcessDesigner.TBXStepActivity(activityType);
                activity.parentStage = this.currentStageActivity;
                activity.description = stepStep.get_stepLabels().get_item(stepStep.get_stepLabels().get_count() - 1).get_description();
                activity.sequence = this.currentStepIndex;
                activity.processStep = stepStep;
                if (this.currentParent != null) {
                    activity.setParentActivityID(this.currentParent.getActivityID());
                }
                if (this.currentParentBranchId != null) {
                    activity.setParentBranchID(this.currentParentBranchId);
                }
                return activity;
            };
            TbxToActivityCollectionVisitor.prototype.getEntityNameByStageId = function (stageId) {
                var canonicalId = stageId.toLowerCase();
                var parentStep = this.businessProcessFlowVisitor.get_parentEntityStepByStageId()[canonicalId];
                return parentStep.get_EntityLogicalName();
            };
            return TbxToActivityCollectionVisitor;
        })(ProcessDesigner.ProcessToActivityCollectionVisitor);
        ProcessDesigner.TbxToActivityCollectionVisitor = TbxToActivityCollectionVisitor;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//<copyright file="BPFCutCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFCutCommand = (function (_super) {
            __extends(BPFCutCommand, _super);
            function BPFCutCommand() {
                _super.apply(this, arguments);
            }
            BPFCutCommand.prototype.execute = function () {
                var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                    return;
                }
                jQuery.each(selectedActivities, function (index, activity) {
                    var activityType = activity.getActivityTypeID();
                    if (activityType == ProcessDesigner.TBXActivityType.field || activityType == ProcessDesigner.TBXActivityType.label || activityType == ProcessDesigner.TBXActivityType.sectionLabel) {
                        $("#" + activity.stepId).addClass("cutTile");
                    }
                    else {
                        $('#' + activity.getActivityID()).addClass("cutTile");
                    }
                });
                GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(selectedActivities);
                GenericWorkflowDesigner.CutCommand.cutInProgress = true;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            return BPFCutCommand;
        })(GenericWorkflowDesigner.CutCommand);
        ProcessDesigner.BPFCutCommand = BPFCutCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="CommandHandlerFactory.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var CommandHandlerFactory = (function () {
            function CommandHandlerFactory() {
            }
            CommandHandlerFactory.prototype.GetCommandHandler = function (commandType) {
                switch (commandType.toLowerCase()) {
                    case "add":
                        return new ProcessDesigner.AddCommand();
                    case "cut":
                        return new ProcessDesigner.BPFCutCommand();
                    case "copy":
                        return new ProcessDesigner.BPFCopyCommand();
                    case "paste":
                        return new ProcessDesigner.BPFPasteCommand();
                    case "delete":
                        return new ProcessDesigner.BPFDeleteCommand();
                    case "snapshot":
                        return new ProcessDesigner.SnapshotCommand();
                    case "connector":
                        return new ProcessDesigner.ConnectorCommand();
                    default:
                        return new ProcessDesigner.DefaultCommand();
                }
            };
            return CommandHandlerFactory;
        })();
        ProcessDesigner.CommandHandlerFactory = CommandHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="ConnectorCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var ConnectorCommand = (function () {
            function ConnectorCommand() {
            }
            ConnectorCommand.prototype.execute = function () {
                new MscrmControls.ProcessDesigner.ConnectorActivityListView();
            };
            return ConnectorCommand;
        })();
        ProcessDesigner.ConnectorCommand = ConnectorCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="DefaultCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var DefaultCommand = (function () {
            function DefaultCommand() {
            }
            DefaultCommand.prototype.execute = function () {
                throw new Error("Internal : Not implemented exception");
            };
            return DefaultCommand;
        })();
        ProcessDesigner.DefaultCommand = DefaultCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="AddCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var AddCommand = (function () {
            function AddCommand() {
            }
            AddCommand.prototype.execute = function () {
                new MscrmControls.ProcessDesigner.AddActivityListView();
            };
            return AddCommand;
        })();
        ProcessDesigner.AddCommand = AddCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="TBXPasteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFPasteCommand = (function (_super) {
            __extends(BPFPasteCommand, _super);
            function BPFPasteCommand() {
                _super.apply(this, arguments);
            }
            BPFPasteCommand.prototype.execute = function () {
                var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                if (copiedActivities.length <= 0) {
                    return;
                }
                var activityType = copiedActivities[0].getActivityTypeID();
                var targetDiv = document.createElement("div");
                switch (activityType) {
                    case ProcessDesigner.TBXActivityType.field:
                    case ProcessDesigner.TBXActivityType.label:
                    case ProcessDesigner.TBXActivityType.sectionLabel:
                        targetDiv.setAttribute("id", ProcessDesigner.BPFAddActivityTypeCommandID.PasteField);
                        break;
                    case ProcessDesigner.TBXActivityType.page:
                        targetDiv.setAttribute("id", ProcessDesigner.BPFAddActivityTypeCommandID.PastePage);
                        break;
                    case ProcessDesigner.TBXActivityType.condition:
                        targetDiv.setAttribute("id", ProcessDesigner.BPFAddActivityTypeCommandID.PasteBranch);
                        break;
                    default:
                        throw new Error(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_PasteCommand_Error"));
                }
                var event = {};
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    targetDiv.setAttribute('data-activityID', copiedActivities[0].getActivityID());
                }
                event["currentTarget"] = targetDiv;
                MscrmControls.ProcessDesigner.AddActivityListSubView.ClickHandler(event);
            };
            BPFPasteCommand.prototype.pasteComponentAtSlot = function (slot, copiedActivities) {
                if (CommonTypes.Types.Object.isNullOrUndefined(copiedActivities)) {
                    copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                    if (copiedActivities.length <= 0) {
                        return;
                    }
                }
                var activity = copiedActivities[0].getCloneOfActivity();
                var activityType = activity.getActivityTypeID();
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    switch (activityType) {
                        case ProcessDesigner.TBXActivityType.page:
                            ProcessDesigner.BPFStageActivityDeleteHandler.prototype.deleteActivities(copiedActivities);
                            break;
                        case ProcessDesigner.TBXActivityType.field:
                        case ProcessDesigner.TBXActivityType.label:
                        case ProcessDesigner.TBXActivityType.sectionLabel:
                            ProcessDesigner.BPFStepActivityDeleteHandler.prototype.deleteActivities(copiedActivities);
                            break;
                        default:
                            throw new Error(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_CutCommand_Error"));
                    }
                }
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(slot.model);
                dropHandler.drop(component).done(function (activity) {
                    if (activity != undefined) {
                        GenericWorkflowDesigner.updateCurrentModel(activity);
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                        if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                            GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                            GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([]);
                        }
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                        GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                        activity.highLight();
                    }
                });
            };
            return BPFPasteCommand;
        })(GenericWorkflowDesigner.PasteCommand);
        ProcessDesigner.BPFPasteCommand = BPFPasteCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//<copyright file="BPFCopyCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFCopyCommand = (function (_super) {
            __extends(BPFCopyCommand, _super);
            function BPFCopyCommand() {
                _super.apply(this, arguments);
            }
            BPFCopyCommand.prototype.execute = function () {
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    $(".cutTile").removeClass("cutTile");
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                }
                _super.prototype.execute.call(this);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            return BPFCopyCommand;
        })(GenericWorkflowDesigner.CopyCommand);
        ProcessDesigner.BPFCopyCommand = BPFCopyCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="SnapshotCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var SnapshotCommand = (function () {
            function SnapshotCommand() {
            }
            SnapshotCommand.prototype.execute = function () {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                var canvasDiv = document.getElementById('zoomCanvasWrapper');
                var parentDiv = document.getElementById('workspaceWrapperID');
                var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
                var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
                var detailsOverflowStyle = $('.stage-detail-container').css('overflow-y');
                var parentDivStyle = parentDiv.style.cssText;
                $("#mini-map-wrapper").css("visibility", "hidden");
                $("#show-mini-map-div").css("visibility", "hidden");
                $("#workspaceWrapperID").attr('style', 'position: fixed !important');
                $("#workspaceWrapperID").css('top', 0);
                $("#workspaceWrapperID").css('left', 0);
                $("#workspaceWrapperID").css('z-index', 1);
                $('.stage-detail-container').css('overflow-y', 'hidden');
                GenericWorkflowDesigner.Utilities.saveSnapshot(canvasDiv, ProcessDesigner.ControlManager.processTitle);
                parentDiv.style.cssText = parentDivStyle;
                $('.stage-detail-container').css('overflow-y', detailsOverflowStyle);
                $("#mini-map-wrapper").css("visibility", miniMapWrapperVisibility);
                $("#show-mini-map-div").css("visibility", showMiniMapDivVisibility);
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_SnapshotTime", stopwatch.elapsedMilliseconds.toString());
            };
            return SnapshotCommand;
        })();
        ProcessDesigner.SnapshotCommand = SnapshotCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFDeleteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFDeleteCommand = (function () {
            function BPFDeleteCommand() {
            }
            BPFDeleteCommand.prototype.execute = function () {
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                if (!toBeDeleted) {
                    return;
                }
                for (var i = 0; i < toBeDeleted.length && toBeDeleted[i]; i++) {
                    switch (toBeDeleted[i].getActivityTypeID()) {
                        case ProcessDesigner.TBXActivityType.page:
                            ProcessDesigner.BPFStageActivityDeleteHandler.prototype.deleteSelectedActivities();
                            break;
                        case ProcessDesigner.TBXActivityType.condition:
                            ProcessDesigner.BPFConditionActivityDeleteHandler.prototype.deleteSelectedActivities();
                            break;
                        case ProcessDesigner.TBXActivityType.field:
                        case ProcessDesigner.TBXActivityType.label:
                        case ProcessDesigner.TBXActivityType.sectionLabel:
                            ProcessDesigner.BPFStepActivityDeleteHandler.prototype.deleteSelectedActivities();
                            break;
                    }
                    ;
                }
            };
            return BPFDeleteCommand;
        })();
        ProcessDesigner.BPFDeleteCommand = BPFDeleteCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFStageActivityDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFStageActivityDeleteHandler = (function (_super) {
            __extends(BPFStageActivityDeleteHandler, _super);
            function BPFStageActivityDeleteHandler() {
                _super.apply(this, arguments);
            }
            BPFStageActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
            };
            BPFStageActivityDeleteHandler.prototype.alertDialog = function (title, message) {
                var dialogDetails = {
                    dialogTitle: title,
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFStageActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Delete_Message");
                message = window['String'].format(message, ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_Page_Activity_Name"));
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteStage_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning,
                    yesCallbackAction: this.deleteConfirmedCallback,
                    noCallbackAction: this.deleteCanceledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFStageActivityDeleteHandler.prototype.deleteConfirmedCallback = function () {
                BPFStageActivityDeleteHandler.prototype.deleteActivities();
            };
            BPFStageActivityDeleteHandler.prototype.deleteCanceledCallback = function () {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                return;
            };
            BPFStageActivityDeleteHandler.prototype.getAllSubsequentActivities = function (activity) {
                var selectedActivities = new Array();
                var stack = new Array();
                stack.push(activity);
                while (stack.length != 0) {
                    var currentActivity = stack.pop();
                    selectedActivities.push(currentActivity);
                    var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentActivity);
                    for (var i = 0; i < childActivities.length; i++) {
                        stack.push(childActivities[i]);
                    }
                }
                return selectedActivities;
            };
            BPFStageActivityDeleteHandler.prototype.getDefaultChild = function (activity) {
                var childsOfChildren = activity.getChildActivitiesSorted();
                for (var i = 0; i < childsOfChildren.length; ++i) {
                    if (childsOfChildren[i].getParentBranchID() == ProcessDesigner.branchType.Default) {
                        return childsOfChildren[i];
                    }
                }
                return null;
            };
            BPFStageActivityDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var _this = BPFStageActivityDeleteHandler.prototype;
                var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                var deletedActivities = [];
                var stageActivities = [];
                var moreToBeDeletedActivities = [];
                var defaultChild = null;
                var parentStage = null;
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    stageActivities.push(currentActivity);
                }
                if (stageActivities.length > 0) {
                    deletedActivities.push(currentActivity);
                    var parentActivity = currentActivity.getParent();
                    if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                        var children = currentActivity.getChildActivitiesSorted()[0];
                        if (children) {
                            if (currentActivity.getNextActivityID() == GenericWorkflowDesigner.ActivityType.Empty || CommonTypes.Types.Object.isNullOrUndefined(currentActivity.getNextActivityID())) {
                                children.setParentActivityID(parentActivity.getActivityID());
                            }
                            else {
                                children.setParentActivityID(parentActivity.getActivityID());
                                parentActivity.setNextActivityID(children.getActivityID());
                            }
                        }
                    }
                    else {
                        if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                            var children = currentActivity.getChildActivitiesSorted()[0];
                            if (children) {
                                if (children.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                    switch (currentActivity.getParentBranchID()) {
                                        case ProcessDesigner.branchType.Default:
                                        case ProcessDesigner.branchType.If:
                                            var dialogTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteStage_InProcess_Title");
                                            ;
                                            var dialogMessage = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteStage_InProcess_Message");
                                            this.alertDialog(dialogTitle, dialogMessage);
                                            return;
                                        case ProcessDesigner.branchType.Else:
                                            children.setParentActivityID(parentActivity.getActivityID());
                                            children.setParentBranchID(ProcessDesigner.branchType.Else);
                                            break;
                                    }
                                    ;
                                }
                                else {
                                    switch (currentActivity.getParentBranchID()) {
                                        case ProcessDesigner.branchType.Default:
                                            children.setParentActivityID(parentActivity.getActivityID());
                                            children.setParentBranchID(ProcessDesigner.branchType.Default);
                                            jQuery.each(allActivities, function (index, currentChild) {
                                                if (currentChild.getNextActivityID() == currentActivity.getActivityID()) {
                                                    currentChild.setNextActivityID(children.getActivityID());
                                                }
                                            });
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            children.setParentActivityID(parentActivity.getActivityID());
                                            children.setParentBranchID(ProcessDesigner.branchType.If);
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            children.setParentActivityID(parentActivity.getActivityID());
                                            children.setParentBranchID(ProcessDesigner.branchType.Else);
                                            break;
                                    }
                                    ;
                                }
                            }
                            else {
                                switch (currentActivity.getParentBranchID()) {
                                    case ProcessDesigner.branchType.Default:
                                        jQuery.each(allActivities, function (index, currentChild) {
                                            if (currentChild.getNextActivityID() == currentActivity.getActivityID()) {
                                                currentChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                            }
                                        });
                                        break;
                                    case ProcessDesigner.branchType.If:
                                        if (currentActivity.getNextActivityID()) {
                                            parentActivity.setNextActivityID(currentActivity.getNextActivityID());
                                        }
                                        break;
                                    case ProcessDesigner.branchType.Else:
                                        if (currentActivity.getNextActivityID() && currentActivity.getParent()) {
                                            var childrenOfParent = currentActivity.getParent().getChildActivitiesSorted();
                                            for (var i = 0; i < childrenOfParent.length; i++) {
                                                if (childrenOfParent[i].getParentBranchID() == ProcessDesigner.branchType.Default) {
                                                    parentActivity.setNextActivityID(currentActivity.getNextActivityID());
                                                    break;
                                                }
                                            }
                                        }
                                        break;
                                }
                                ;
                            }
                        }
                    }
                }
                jQuery.each(deletedActivities, function (indexNode, node) {
                    GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                });
                $("#canvas").width("auto");
                $("#canvas").height("auto");
                GenericWorkflowDesigner.Settings.isStageDeleted = true;
                var currentRow = currentActivity.getRow();
                var currentColumn = currentActivity.getCol();
                var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                for (var i = 0; i < allActivities.length; i++) {
                    if (allActivities[i].getRow() == currentRow) {
                        GenericWorkflowDesigner.Settings.tileCountInRow = 1;
                    }
                    if (allActivities[i].getCol() == currentColumn) {
                        GenericWorkflowDesigner.Settings.tileCountInColumn = 1;
                    }
                }
                _this.canvasRefreshUtil();
                var activityIdToSelect = null;
                var activityTypeToSelect = null;
                if (parentActivity) {
                    activityIdToSelect = parentActivity.getActivityID();
                    activityTypeToSelect = parentActivity.getActivityTypeID();
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([parentActivity]);
                }
                if (activityTypeToSelect == ProcessDesigner.TBXActivityType.page && activityIdToSelect) {
                    $('#' + activityIdToSelect).find(".stageTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.stageTile").get(0));
                }
                else {
                    $('#' + activityIdToSelect).find(".conditionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.conditionTile").get(0));
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDeleted, deletedActivities);
                return deletedActivities;
            };
            BPFStageActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
                var _this = BPFStageActivityDeleteHandler.prototype;
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    if (currentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page && CommonTypes.Types.Object.isNullOrUndefined(currentActivity.getParent())) {
                        var dialogTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteRootNode_Title");
                        var dialogMessage = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteRootNode_Message");
                        this.alertDialog(dialogTitle, dialogMessage);
                        GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                        return [];
                    }
                    _this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
            };
            return BPFStageActivityDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.BPFStageActivityDeleteHandler = BPFStageActivityDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFConditionActivityDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFConditionActivityDeleteHandler = (function (_super) {
            __extends(BPFConditionActivityDeleteHandler, _super);
            function BPFConditionActivityDeleteHandler() {
                _super.apply(this, arguments);
            }
            BPFConditionActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
            };
            BPFConditionActivityDeleteHandler.prototype.alertDialog = function (title, message) {
                var dialogDetails = {
                    dialogTitle: title,
                    dialogMessage: message,
                    messagetType: ProcessDesigner.TBXDialogMessageTypes.Warning
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFConditionActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Delete_Message");
                message = window['String'].format(message, ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Condition_Activity_Name"));
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteCondition_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning,
                    yesCallbackAction: this.deleteConfirmedCallback,
                    noCallbackAction: this.deleteCanceledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFConditionActivityDeleteHandler.prototype.deleteConfirmedCallback = function () {
                BPFConditionActivityDeleteHandler.prototype.deleteActivities();
            };
            BPFConditionActivityDeleteHandler.prototype.deleteCanceledCallback = function () {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                return;
            };
            BPFConditionActivityDeleteHandler.prototype.getAllSubsequentActivities = function (activity) {
                var selectedActivities = new Array();
                var stack = new Array();
                stack.push(activity);
                while (stack.length != 0) {
                    var currentActivity = stack.pop();
                    selectedActivities.push(currentActivity);
                    var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentActivity);
                    for (var i = 0; i < childActivities.length; i++) {
                        stack.push(childActivities[i]);
                    }
                }
                return selectedActivities;
            };
            BPFConditionActivityDeleteHandler.prototype.findLastChild = function (ifChild) {
                if (ifChild) {
                    var found = false, branchID;
                    var lastNodeIfChild = ifChild;
                    while (ifChild && !found) {
                        lastNodeIfChild = ifChild;
                        if (ifChild.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                            var tempChilds = ifChild.getChildActivitiesSorted();
                            var tempLength = tempChilds.length;
                            switch (tempLength) {
                                case 1:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            ifChild = ifChild.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            found = true;
                                            lastNodeIfChild = ifChild;
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 2:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            ifChild = ifChild.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            found = true;
                                            lastNodeIfChild = ifChild;
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 3:
                                    ifChild = ifChild.getChildActivitiesSorted()[0];
                                    break;
                            }
                        }
                        else {
                            ifChild = ifChild.getChildActivitiesSorted()[0];
                        }
                    }
                    return lastNodeIfChild;
                }
                else
                    return null;
            };
            BPFConditionActivityDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var _this = BPFConditionActivityDeleteHandler.prototype;
                var deletedActivities = [];
                var stageActivities = [], lastChild = null;
                var branchID = 0, parentActivity, moreToBeDeletedActivities;
                var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                var parentStage = null;
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    deletedActivities.push(currentActivity);
                    var children = currentActivity.getChildActivitiesSorted();
                    var length = children.length;
                    parentActivity = currentActivity.getParent();
                    switch (length) {
                        case 0:
                            break;
                        case 1:
                            branchID = children[length - 1].getParentBranchID();
                            switch (branchID) {
                                case ProcessDesigner.branchType.Default:
                                case ProcessDesigner.branchType.If:
                                case ProcessDesigner.branchType.Else:
                                    children[length - 1].setParentActivityID(parentActivity.getActivityID());
                                    if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                                        children[length - 1].setParentBranchID(ProcessDesigner.branchType.Default);
                                    }
                                    else {
                                        if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                            children[length - 1].setParentBranchID(ProcessDesigner.branchType.Else);
                                        }
                                    }
                                    break;
                            }
                            ;
                            break;
                        case 2:
                            branchID = children[0].getParentBranchID();
                            switch (branchID) {
                                case ProcessDesigner.branchType.Default:
                                    if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                                        lastChild = _this.findLastChild(children[1]);
                                        children[1].setParentActivityID(parentActivity.getActivityID());
                                        children[1].setParentBranchID(ProcessDesigner.branchType.Default);
                                        children[0].setParentActivityID(lastChild.getActivityID());
                                        children[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                        if (lastChild.getNextActivityID())
                                            lastChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                    }
                                    else if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                        var lastChild = _this.findLastChild(children[1]);
                                        children[1].setParentActivityID(parentActivity.getActivityID());
                                        children[1].setParentBranchID(ProcessDesigner.branchType.Else);
                                        children[0].setParentActivityID(lastChild.getActivityID());
                                        children[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                        if (lastChild.getNextActivityID())
                                            lastChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                    }
                                    break;
                                case ProcessDesigner.branchType.If:
                                    if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                                        moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[0]);
                                        for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                            deletedActivities.push(moreToBeDeletedActivities[j]);
                                        }
                                        children[1].setParentActivityID(parentActivity.getActivityID());
                                        children[1].setParentBranchID(ProcessDesigner.branchType.Default);
                                    }
                                    else if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                        moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[0]);
                                        for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                            deletedActivities.push(moreToBeDeletedActivities[j]);
                                        }
                                        children[1].setParentActivityID(parentActivity.getActivityID());
                                        children[1].setParentBranchID(ProcessDesigner.branchType.Else);
                                    }
                                    break;
                            }
                            ;
                            break;
                        case 3:
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                                lastChild = _this.findLastChild(children[2]);
                                moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[1]);
                                for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                    deletedActivities.push(moreToBeDeletedActivities[j]);
                                }
                                children[2].setParentActivityID(parentActivity.getActivityID());
                                children[2].setParentBranchID(ProcessDesigner.branchType.Default);
                                children[0].setParentActivityID(lastChild.getActivityID());
                                children[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                jQuery.each(allActivities, function (index, currentChild) {
                                    if (currentChild.getNextActivityID() == children[0].getActivityID()) {
                                        currentChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                    }
                                });
                            }
                            else if (parentActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                                lastChild = _this.findLastChild(children[2]);
                                moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[1]);
                                for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                    deletedActivities.push(moreToBeDeletedActivities[j]);
                                }
                                children[2].setParentActivityID(parentActivity.getActivityID());
                                children[2].setParentBranchID(ProcessDesigner.branchType.Else);
                                children[0].setParentActivityID(lastChild.getActivityID());
                                children[0].setParentBranchID(ProcessDesigner.branchType.Default);
                                jQuery.each(allActivities, function (index, currentChild) {
                                    if (currentChild.getNextActivityID() == children[0].getActivityID()) {
                                        currentChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                    }
                                });
                            }
                            break;
                    }
                    ;
                }
                var currentRow = currentActivity.getRow();
                var currentColumn = currentActivity.getCol();
                var columnHasMoreTiles = false;
                jQuery.each(deletedActivities, function (indexNode, node) {
                    if (node.id != currentActivity.id) {
                        if (node.getRow() == currentRow && node.getCol() != currentColumn) {
                            var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                            for (var i = 0; i < allActivities.length; i++) {
                                if (allActivities[i].id != node.id && allActivities[i].getCol() == node.getCol()) {
                                    columnHasMoreTiles = true;
                                }
                            }
                            if (columnHasMoreTiles == false)
                                GenericWorkflowDesigner.Settings.childCount++;
                            else
                                columnHasMoreTiles = false;
                        }
                    }
                    GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                });
                $("#canvas").width("auto");
                $("#canvas").height("auto");
                GenericWorkflowDesigner.Settings.isStageDeleted = true;
                var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                for (var i = 0; i < allActivities.length; i++) {
                    if (allActivities[i].getRow() == currentRow) {
                        GenericWorkflowDesigner.Settings.tileCountInRow = 1;
                    }
                    if (allActivities[i].getCol() == currentColumn) {
                        GenericWorkflowDesigner.Settings.tileCountInColumn = 1;
                    }
                }
                _this.canvasRefreshUtil();
                var activityIdToSelect = null;
                var activityTypeToSelect = null;
                if (parentActivity) {
                    activityIdToSelect = parentActivity.getActivityID();
                    activityTypeToSelect = parentActivity.getActivityTypeID();
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([parentActivity]);
                }
                if (activityTypeToSelect == ProcessDesigner.TBXActivityType.page && activityIdToSelect) {
                    $('#' + activityIdToSelect).find(".stageTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.stageTile").get(0));
                }
                else {
                    $('#' + activityIdToSelect).find(".conditionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.conditionTile").get(0));
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDeleted, deletedActivities);
                return deletedActivities;
            };
            BPFConditionActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
                var _this = BPFConditionActivityDeleteHandler.prototype;
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    _this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
            };
            return BPFConditionActivityDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.BPFConditionActivityDeleteHandler = BPFConditionActivityDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFStepActivityDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFStepActivityDeleteHandler = (function (_super) {
            __extends(BPFStepActivityDeleteHandler, _super);
            function BPFStepActivityDeleteHandler() {
                _super.apply(this, arguments);
            }
            BPFStepActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
            };
            BPFStepActivityDeleteHandler.prototype.alertDialog = function (title, message) {
                var dialogDetails = {
                    dialogTitle: title,
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFStepActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Delete_Message");
                var activityDisplayName = activity;
                if (activity == 'field') {
                    activityDisplayName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_field_Activity_Name");
                }
                else if (activity == 'label') {
                    activityDisplayName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_label_Activity_Name");
                }
                else if (activity == 'sectionLabel') {
                    activityDisplayName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_sectionlabel_Activity_Name");
                }
                message = window['String'].format(message, activityDisplayName);
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteStep_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning,
                    yesCallbackAction: this.DeleteConfirmedCallback,
                    noCallbackAction: this.DeleteCanceledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            BPFStepActivityDeleteHandler.prototype.DeleteConfirmedCallback = function () {
                return BPFStepActivityDeleteHandler.prototype.deleteActivities();
            };
            BPFStepActivityDeleteHandler.prototype.DeleteCanceledCallback = function () {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                return;
            };
            BPFStepActivityDeleteHandler.prototype.deleteStepFromStageActivity = function (step) {
                var stage = step.getParent();
                var steps = stage.steps;
                var index = jQuery.inArray(step, steps);
                if (index == -1) {
                    return;
                }
                for (var i = index; i < steps.length - 1; i++) {
                    steps[i] = steps[i + 1];
                }
                steps.pop();
                stage.steps = steps;
            };
            BPFStepActivityDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var allowDelete;
                var _this = BPFStepActivityDeleteHandler.prototype;
                var deletedActivities = [];
                var stageActivities = [];
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    deletedActivities.push(currentActivity);
                    _this.deleteStepFromStageActivity(currentActivity);
                }
                _this.canvasRefreshUtil();
                ProcessDesigner.CanvasDisplayUtility.HandleStageDetailsOverlap();
                var stage = currentActivity.getParent();
                var activityIdToSelect = null;
                if (stage) {
                    activityIdToSelect = stage.getActivityID();
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([stage]);
                }
                if (activityIdToSelect) {
                    $('#' + activityIdToSelect).find(".stageTile").addClass("selected");
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDeleted, deletedActivities);
                return deletedActivities;
            };
            BPFStepActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    var stage = currentActivity.getParent();
                    var steps = stage.steps;
                    if (steps.length == 1) {
                        var alertTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteSingleStep_Title");
                        ;
                        var alertMessage = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DeleteSingleStep_Message");
                        this.alertDialog(alertTitle, alertMessage);
                        GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                        return;
                    }
                    this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
            };
            return BPFStepActivityDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.BPFStepActivityDeleteHandler = BPFStepActivityDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotTileHolderGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var ActivityDefinitionModel = GenericWorkflowDesigner.ActivityDefinitionModel;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BpfSlotTileHolderGeneratorFactory = (function (_super) {
            __extends(BpfSlotTileHolderGeneratorFactory, _super);
            function BpfSlotTileHolderGeneratorFactory() {
                _super.apply(this, arguments);
            }
            BpfSlotTileHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                switch (activity.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new ProcessDesigner.BPFSlotTileHolderGenerator(activity);
                    default:
                        return new GenericWorkflowDesigner.DefaultSlotTileHolderGenerator(activity);
                }
            };
            return BpfSlotTileHolderGeneratorFactory;
        })(GenericWorkflowDesigner.SlotTileHolderGeneratorFactory);
        ProcessDesigner.BpfSlotTileHolderGeneratorFactory = BpfSlotTileHolderGeneratorFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFSlotTileHolderGenerator = (function (_super) {
            __extends(BPFSlotTileHolderGenerator, _super);
            function BPFSlotTileHolderGenerator(slotTileActivity) {
                _super.call(this, slotTileActivity);
                this.activity = slotTileActivity;
            }
            BPFSlotTileHolderGenerator.prototype.generateSlot = function () {
                var slotView = new ProcessDesigner.BpfStageSlotTileHolderView(new GenericWorkflowDesigner.SlotModel(this.activity));
                return slotView;
            };
            return BPFSlotTileHolderGenerator;
        })(GenericWorkflowDesigner.DefaultSlotTileHolderGenerator);
        ProcessDesigner.BPFSlotTileHolderGenerator = BPFSlotTileHolderGenerator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSubsequentActivityGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFSubsequentActivityGenerator = (function (_super) {
            __extends(BPFSubsequentActivityGenerator, _super);
            function BPFSubsequentActivityGenerator() {
                _super.apply(this, arguments);
            }
            BPFSubsequentActivityGenerator.prototype.BPFSubsequentActivityGenerator = function () {
            };
            BPFSubsequentActivityGenerator.prototype.createGenerator = function (activity) {
                if (activity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    return new ProcessDesigner.ConditionSubsequentActivities(activity);
                }
                else {
                    return new ProcessDesigner.PageSubsequentActivities(activity);
                }
            };
            BPFSubsequentActivityGenerator.prototype.createChildActivities = function (activity) {
                var generator = this.createGenerator(activity);
                return generator.createChildActivities();
            };
            return BPFSubsequentActivityGenerator;
        })(GenericWorkflowDesigner.SubsequentActivityGenerator);
        ProcessDesigner.BPFSubsequentActivityGenerator = BPFSubsequentActivityGenerator;
        ;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotTileHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFSlotTileHolderHandlerFactory = (function (_super) {
            __extends(BPFSlotTileHolderHandlerFactory, _super);
            function BPFSlotTileHolderHandlerFactory() {
                _super.apply(this, arguments);
            }
            BPFSlotTileHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new ProcessDesigner.BPFStageDropHandler(currentActivity);
                    case ProcessDesigner.TBXActivityType.condition:
                        return new ProcessDesigner.BPFConditionDropHandler(currentActivity);
                    default:
                        return _super.prototype.createDropHandler.call(this, currentActivity);
                }
            };
            BPFSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new GenericWorkflowDesigner.DefaultActivityDblClickHandler(currentActivity);
                    default:
                        return null;
                }
            };
            return BPFSlotTileHolderHandlerFactory;
        })(GenericWorkflowDesigner.DefaultSlotTileHolderHandlerFactory);
        ProcessDesigner.BPFSlotTileHolderHandlerFactory = BPFSlotTileHolderHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ConditionSubsequentActivities.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ConditionSubsequentActivities = (function (_super) {
            __extends(ConditionSubsequentActivities, _super);
            function ConditionSubsequentActivities() {
                _super.apply(this, arguments);
            }
            ConditionSubsequentActivities.prototype.createChildActivities = function () {
                if (this.parentActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.condition) {
                    return [];
                }
                var conditionActivity = this.parentActivity;
                conditionActivity.setNextActivityID(null);
                conditionActivity.NextElseBranchActivity = null;
                var childrenOfCondition = conditionActivity.getChildActivitiesSorted();
                var ifPathExists = false;
                var elsePathExists = false;
                if (childrenOfCondition.length > 0) {
                    childrenOfCondition.forEach(function (childOfCondition) {
                        if (childOfCondition instanceof ProcessDesigner.TBXPageActivity && childOfCondition.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                            ifPathExists = true;
                            conditionActivity.setNextActivityID(childOfCondition.getActivityID());
                        }
                        if ((childOfCondition instanceof ProcessDesigner.TBXPageActivity || childOfCondition instanceof ProcessDesigner.TBXConditionActivity)
                            && childOfCondition.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                            elsePathExists = true;
                        }
                    });
                }
                if (!ifPathExists || !elsePathExists) {
                    var currentActivity = conditionActivity;
                    var defaultStageToPointTo = null;
                    var parentNodes = [];
                    while (!CommonTypes.Types.Object.isNullOrUndefined(currentActivity) && CommonTypes.Types.Object.isNullOrUndefined(defaultStageToPointTo)) {
                        var ifConditionBranchActivity = this.findNextIfConditionBranch(currentActivity);
                        if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranchActivity)) {
                            var childrenOfIfConditionBranch = ifConditionBranchActivity.getChildActivitiesSorted();
                            if (childrenOfIfConditionBranch.length > 0
                                && !CommonTypes.Types.Object.isNullOrUndefined(childrenOfIfConditionBranch[0])
                                && childrenOfIfConditionBranch[0] instanceof ProcessDesigner.TBXPageActivity
                                && childrenOfIfConditionBranch[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch
                                && parentNodes.indexOf(childrenOfIfConditionBranch[0]) < 0) {
                                defaultStageToPointTo = childrenOfIfConditionBranch[0];
                            }
                        }
                        if (CommonTypes.Types.Object.isNullOrUndefined(defaultStageToPointTo)) {
                            currentActivity = currentActivity.getParent();
                            parentNodes[parentNodes.length] = currentActivity;
                        }
                    }
                    if (!CommonTypes.Types.Object.isNullOrUndefined(defaultStageToPointTo)) {
                        if (!ifPathExists) {
                            conditionActivity.setNextActivityID(defaultStageToPointTo.getActivityID());
                        }
                        if (!elsePathExists) {
                            conditionActivity.NextElseBranchActivity = defaultStageToPointTo;
                        }
                    }
                }
            };
            ConditionSubsequentActivities.prototype.findNextIfConditionBranch = function (currentActivity) {
                if (CommonTypes.Types.Object.isNullOrUndefined(currentActivity)) {
                    return null;
                }
                else if (currentActivity instanceof ProcessDesigner.TBXConditionActivity) {
                    while (currentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        currentActivity = currentActivity.getParent();
                    }
                    return currentActivity;
                }
                else {
                    if (currentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        currentActivity = currentActivity.getParent();
                    }
                    return this.findNextIfConditionBranch(currentActivity.getParent());
                }
            };
            return ConditionSubsequentActivities;
        })(GenericWorkflowDesigner.AbstractSubsequentActivities);
        ProcessDesigner.ConditionSubsequentActivities = ConditionSubsequentActivities;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PageSubsequentActivities.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PageSubsequentActivities = (function (_super) {
            __extends(PageSubsequentActivities, _super);
            function PageSubsequentActivities() {
                _super.apply(this, arguments);
            }
            PageSubsequentActivities.prototype.createChildActivities = function () {
                if (this.parentActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.page) {
                    return [];
                }
                var pageActivity = this.parentActivity;
                var childrenOfPage = pageActivity.getChildActivitiesSorted();
                if (childrenOfPage.length > 0 && !CommonTypes.Types.Object.isNullOrUndefined(childrenOfPage[0])) {
                    this.parentActivity.setNextActivityID(childrenOfPage[0].getActivityID());
                }
                else {
                    var currentActivity = this.parentActivity;
                    var defaultPageToPointTo = null;
                    while (!CommonTypes.Types.Object.isNullOrUndefined(currentActivity) && CommonTypes.Types.Object.isNullOrUndefined(defaultPageToPointTo)) {
                        if (currentActivity instanceof ProcessDesigner.TBXPageActivity && currentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParentBranchID() != ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                            var conditionActivity = currentActivity.getParent();
                            while (conditionActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch && conditionActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity) {
                                conditionActivity = conditionActivity.getParent();
                            }
                            var childrenOfIfBranch = conditionActivity.getChildActivitiesSorted();
                            if (!CommonTypes.Types.Object.isNullOrUndefined(childrenOfIfBranch[0]) &&
                                childrenOfIfBranch[0] instanceof ProcessDesigner.TBXPageActivity &&
                                childrenOfIfBranch[0].getParentBranchID() == 0) {
                                defaultPageToPointTo = childrenOfIfBranch[0];
                            }
                        }
                        if (CommonTypes.Types.Object.isNullOrUndefined(defaultPageToPointTo)) {
                            currentActivity = currentActivity.getParent();
                        }
                    }
                    if (currentActivity == null) {
                        this.parentActivity.setNextActivityID(null);
                    }
                    else {
                        if (!CommonTypes.Types.Object.isNullOrUndefined(defaultPageToPointTo)) {
                            this.parentActivity.setNextActivityID(defaultPageToPointTo.getActivityID());
                        }
                        else {
                            this.parentActivity.setNextActivityID(null);
                        }
                    }
                }
                return null;
            };
            return PageSubsequentActivities;
        })(GenericWorkflowDesigner.DefaultSubsequentActivities);
        ProcessDesigner.PageSubsequentActivities = PageSubsequentActivities;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotGeneratorProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFSlotGeneratorProvider = (function () {
            function BPFSlotGeneratorProvider() {
            }
            BPFSlotGeneratorProvider.prototype.createGeneratorFactory = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.TileHolder:
                        return new ProcessDesigner.BpfSlotTileHolderGeneratorFactory();
                    case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                        return new GenericWorkflowDesigner.SlotInsertHorizontalGeneratorFactory();
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        return new GenericWorkflowDesigner.SlotInsertVerticalGeneratorFactory();
                    case GenericWorkflowDesigner.SlotType.IconHolder:
                        return new ProcessDesigner.BPFSlotIconHolderGeneratorFactory();
                    case GenericWorkflowDesigner.SlotType.DetailsContainerPlaceholder:
                        return new GenericWorkflowDesigner.SlotDetailsContainerPlaceholderGeneratorFactory();
                    default:
                        return new GenericWorkflowDesigner.SlotTileHolderGeneratorFactory();
                }
            };
            BPFSlotGeneratorProvider.prototype.generateSlotsForActivity = function (activity) {
                var slotTypes = [GenericWorkflowDesigner.SlotType.TileHolder, GenericWorkflowDesigner.SlotType.InsertHorizontal, GenericWorkflowDesigner.SlotType.IconHolder, GenericWorkflowDesigner.SlotType.DetailsContainerPlaceholder];
                if (activity.getActivityTypeID() == "condition") {
                    slotTypes.push(GenericWorkflowDesigner.SlotType.InsertVertical);
                }
                var slotsList = [];
                var insertSlotList = [];
                if (activity.getActivityTypeID() == "stage") {
                    if (activity.entityName == "") {
                        var eName = this.getEntityName(activity.getParent());
                        activity.entityName = eName;
                    }
                }
                for (var i = 0; i < slotTypes.length; i++) {
                    var slotGeneratorFactory = this.createGeneratorFactory(slotTypes[i]);
                    var slot = slotGeneratorFactory.createSlotGenerator(activity).generateSlot();
                    if (slot instanceof GenericWorkflowDesigner.InsertSlotHorizontalView || slot instanceof GenericWorkflowDesigner.InsertSlotVerticalView || slot instanceof GenericWorkflowDesigner.SlotDetailsContainerPlaceholderView) {
                        insertSlotList.push(slot);
                    }
                    if (slot != null) {
                        if (slot instanceof Array) {
                            slotsList.push.apply(slotsList, slot);
                        }
                        else {
                            slotsList.push(slot);
                        }
                    }
                    this.insetSlotClickHandler(insertSlotList);
                }
                this.AddButtonEventListner(slotsList);
                return slotsList;
            };
            BPFSlotGeneratorProvider.prototype.insetSlotClickHandler = function (insertSlotList) {
                for (var i = 0; i < insertSlotList.length; i++) {
                    var self = insertSlotList[i];
                    self.$el.on("mousedown", function (event) {
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearSelections);
                        event.stopPropagation();
                    });
                    self.$el.on("click keydown", function (event) {
                        if (($(self.$el).hasClass("hoverOverDroppable") || $(self.$el).hasClass("hoverOverDroppableHighlight")) && (event.type == "click" || event.keyCode == 13)) {
                            switch (ProcessDesigner.BPFToolBarView.addMode) {
                                case ProcessDesigner.BPFToolBarAddMode.AddStage:
                                case ProcessDesigner.BPFToolBarAddMode.AddPage:
                                    var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({
                                        Title: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_SlotGenerator_Title"),
                                        Tooltip: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_SlotGenerator_StageToolTip"),
                                        Image: "", DataURI: "",
                                        Alt: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileAltText"),
                                        FontIconImage: "", ActivityTypeID: "page"
                                    });
                                    GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                                    break;
                                case ProcessDesigner.BPFToolBarAddMode.AddCondition:
                                    var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({
                                        Title: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_SlotGenerator_Title"),
                                        Tooltip: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_Drag_new_condition"),
                                        Image: "", DataURI: "",
                                        Alt: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileAltText"),
                                        FontIconImage: "", ActivityTypeID: "condition"
                                    });
                                    GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                                    break;
                                case ProcessDesigner.BPFToolBarAddMode.PasteStage:
                                case ProcessDesigner.BPFToolBarAddMode.PastePage:
                                case ProcessDesigner.BPFToolBarAddMode.PasteBranch:
                                    var pasteCmd = new ProcessDesigner.BPFPasteCommand();
                                    pasteCmd.pasteComponentAtSlot(self);
                                    break;
                                default:
                                    console.warn("Internal : Invalid Activity for Adding Page/Condition");
                            }
                            ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                        }
                    });
                }
            };
            BPFSlotGeneratorProvider.prototype.AddButtonEventListner = function (slotList) {
                var AcceptableTiles;
                $(document).on('PasteButton', function (event, droppable) {
                    for (var i = 0; i < slotList.length; i++) {
                        AcceptableTiles = GenericWorkflowDesigner.SlotBase.isValidDroppable(slotList[i].el.id, droppable);
                        if (AcceptableTiles) {
                            $(slotList[i].el).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                        }
                    }
                });
                $(document).on('AddButton', function (event, droppable) {
                    for (var i = 0; i < slotList.length; i++) {
                        AcceptableTiles = slotList[i].getValidDroppables();
                        if (AcceptableTiles.indexOf(droppable) > -1) {
                            if (droppable.search("conditionTile") > 0) {
                                if (slotList[i].model.getActivity() instanceof ProcessDesigner.TBXPageActivity && slotList[i] instanceof GenericWorkflowDesigner.InsertSlotHorizontalView) {
                                    if (!slotList[i].model.getActivity().canAddNewNestedBranch()) {
                                        continue;
                                    }
                                }
                                else if (slotList[i].model.getActivity() instanceof ProcessDesigner.TBXConditionActivity && slotList[i] instanceof GenericWorkflowDesigner.InsertSlotVerticalView) {
                                    if (!slotList[i].model.getActivity().canAddNewBranch()) {
                                        continue;
                                    }
                                }
                            }
                            else if (droppable.search("stageTile") > 0) {
                                if (slotList[i].model.getActivity() instanceof ProcessDesigner.TBXConditionActivity && slotList[i] instanceof GenericWorkflowDesigner.InsertSlotVerticalView) {
                                    if (!slotList[i].model.getActivity().canAddNewBranch()) {
                                        continue;
                                    }
                                }
                            }
                            if (droppable.search("stageTile") > 0 || droppable.search("conditionTile") > 0) {
                                $(slotList[i].el).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                                $(slotList[i].el).html("+");
                            }
                            else if (droppable.search("stepTile") > 0 || droppable.search("connectTile") > 0) {
                                var copied = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                                if ((!CommonTypes.Types.Object.isNullOrUndefined(copied)) && copied.length > 0 && (copied[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.field || copied[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.label || copied[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.sectionLabel)) {
                                    if ((copied[0].parentStage).entityName == slotList[i].model.getActivity().entityName) {
                                        $(slotList[i].el).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                                    }
                                }
                                else {
                                    $(slotList[i].el).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                                }
                            }
                            else {
                                $(slotList[i].el).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                            }
                        }
                    }
                    var allDroppableTiles = $('.ui-droppable.slot.hoverOverDroppable .tile .stageTile');
                    $.each(allDroppableTiles, function (key, val) {
                        var droppableTile = $(val);
                        droppableTile.attr('aria-label', ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile")).attr("aria-hidden", "false");
                    });
                    $("#zoomoutdiv .ui-droppable.slotInsertHorizontal").removeAttr("title");
                });
            };
            BPFSlotGeneratorProvider.prototype.getEntityName = function (activity) {
                if (activity.getActivityTypeID() == "stage") {
                    this.entityName = activity.entityName;
                    return this.entityName;
                }
                else if (activity.getActivityTypeID() == "condition") {
                    return this.getEntityName(activity.getParent());
                }
                else {
                    return null;
                }
            };
            return BPFSlotGeneratorProvider;
        })();
        ProcessDesigner.BPFSlotGeneratorProvider = BPFSlotGeneratorProvider;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotHandlerProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SlotType = GenericWorkflowDesigner.SlotType;
        var BPFSlotHandlerProvider = (function (_super) {
            __extends(BPFSlotHandlerProvider, _super);
            function BPFSlotHandlerProvider() {
                _super.apply(this, arguments);
            }
            BPFSlotHandlerProvider.prototype.createFactory = function (slotModel) {
                switch (slotModel.getType()) {
                    case SlotType.TileHolder:
                        return GenericWorkflowDesigner.Settings.slotHandlerFactory;
                    case SlotType.InsertHorizontal:
                        return new ProcessDesigner.BPFSlotInsertHorizontalHandlerFactory();
                    case SlotType.InsertVertical:
                        return new ProcessDesigner.BPFSlotInsertVerticalHandlerFactory();
                    case SlotType.IconHolder:
                        return new GenericWorkflowDesigner.SlotIconHolderHandlerFactory();
                    default:
                        throw Error("Internal : Slot type is not supported");
                }
            };
            BPFSlotHandlerProvider.prototype.createDropHandler = function (slotModel) {
                var slotHandlerFactory = this.createFactory(slotModel);
                return slotHandlerFactory.createDropHandler(slotModel.getActivity());
            };
            return BPFSlotHandlerProvider;
        })(GenericWorkflowDesigner.SlotHandlerProvider);
        ProcessDesigner.BPFSlotHandlerProvider = BPFSlotHandlerProvider;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotInsertHorizontalHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFSlotInsertHorizontalHandlerFactory = (function (_super) {
            __extends(BPFSlotInsertHorizontalHandlerFactory, _super);
            function BPFSlotInsertHorizontalHandlerFactory() {
                _super.apply(this, arguments);
            }
            BPFSlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    default: return new GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler(currentActivity);
                }
            };
            return BPFSlotInsertHorizontalHandlerFactory;
        })(GenericWorkflowDesigner.SlotInsertHorizontalHandlerFactory);
        ProcessDesigner.BPFSlotInsertHorizontalHandlerFactory = BPFSlotInsertHorizontalHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotInsertVerticalHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFSlotInsertVerticalHandlerFactory = (function (_super) {
            __extends(BPFSlotInsertVerticalHandlerFactory, _super);
            function BPFSlotInsertVerticalHandlerFactory() {
                _super.apply(this, arguments);
            }
            BPFSlotInsertVerticalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    default: return new ProcessDesigner.BPFDefaultInsertSlotVerticalDropHandler(currentActivity);
                }
            };
            return BPFSlotInsertVerticalHandlerFactory;
        })(GenericWorkflowDesigner.SlotInsertVerticalHandlerFactory);
        ProcessDesigner.BPFSlotInsertVerticalHandlerFactory = BPFSlotInsertVerticalHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotIconHolderGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFSlotIconHolderGeneratorFactory = (function () {
            function BPFSlotIconHolderGeneratorFactory() {
            }
            BPFSlotIconHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
                switch (activity.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.page:
                    case ProcessDesigner.TBXActivityType.condition:
                        return new ProcessDesigner.BPFSlotIconHolderGenerator(activity);
                    default:
                        return new ProcessDesigner.BPFSlotIconHolderGenerator(activity);
                }
            };
            return BPFSlotIconHolderGeneratorFactory;
        })();
        ProcessDesigner.BPFSlotIconHolderGeneratorFactory = BPFSlotIconHolderGeneratorFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotIconHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFSlotIconHolderGenerator = (function (_super) {
            __extends(BPFSlotIconHolderGenerator, _super);
            function BPFSlotIconHolderGenerator() {
                _super.apply(this, arguments);
            }
            BPFSlotIconHolderGenerator.prototype.generateSlot = function () {
                var list = [];
                if (this.activity.getActivityTypeID() != ProcessDesigner.TBXActivityType.condition) {
                    return null;
                }
                if (this.activity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                    var yesIconView = new GenericWorkflowDesigner.SlotIconHolderView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.IconHolder, GenericWorkflowDesigner.SlotIconType.YesBranch) });
                    var noIconView = new GenericWorkflowDesigner.SlotIconHolderView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.IconHolder, GenericWorkflowDesigner.SlotIconType.NoBranch) });
                    list.push(yesIconView);
                    list.push(noIconView);
                    return list;
                }
                return null;
            };
            return BPFSlotIconHolderGenerator;
        })(GenericWorkflowDesigner.AbstractSlotGenerator);
        ProcessDesigner.BPFSlotIconHolderGenerator = BPFSlotIconHolderGenerator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFSlotGeneratorProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFIconFactory = (function () {
            function BPFIconFactory() {
                this.iconTemplate = "";
                this.iconTemplate = '<div class="iconContainer"><%if(typeof (image) !== "undefined") {%><img width="16px" height="16px" title="<%- tooltipText %>" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img width="16px" height="16px" title="<%- tooltipText %>" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img> <%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="CCFSymbolFont <%- fontIconImage %> <%- fontIconType %>"></span><%}%></div>';
            }
            BPFIconFactory.prototype.getIconAttributes = function (iconType) {
                switch (iconType) {
                    case GenericWorkflowDesigner.SlotIconType.YesBranch:
                        return new ProcessDesigner.YesBranchIconAttributes();
                    case GenericWorkflowDesigner.SlotIconType.NoBranch:
                        return new ProcessDesigner.NoBranchIconAttributes();
                    default:
                        throw Error("Internal : Specified icon type does not exist");
                }
            };
            BPFIconFactory.prototype.createIcon = function (iconType) {
                var iconAttributes = this.getIconAttributes(iconType);
                var slotIconHolderTemplate = _.template(this.iconTemplate);
                return $(slotIconHolderTemplate(iconAttributes))[0];
            };
            return BPFIconFactory;
        })();
        ProcessDesigner.BPFIconFactory = BPFIconFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="YesBranchIconAttributes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var YesBranchIconAttributes = (function () {
            function YesBranchIconAttributes() {
                this.title = "Yes Branch";
                this.fontIconImage = "yesBranchSymbol";
                this.fontIconType = "yesBranchFontIcon";
                this.alt = "Condition evaluates to Yes.";
                this.tooltipText = "Condition Positive Branch Activity";
            }
            return YesBranchIconAttributes;
        })();
        ProcessDesigner.YesBranchIconAttributes = YesBranchIconAttributes;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="NoBranchIconAttributes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var NoBranchIconAttributes = (function () {
            function NoBranchIconAttributes() {
                this.title = "No Branch";
                this.fontIconImage = "noBranchSymbol";
                this.fontIconType = "noBranchFontIcon";
                this.alt = "Condition evaluates to No.";
                this.tooltipText = "Condition Negative Branch Activity";
            }
            return NoBranchIconAttributes;
        })();
        ProcessDesigner.NoBranchIconAttributes = NoBranchIconAttributes;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StageTileButtonClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var StageTileButtonClickHandler = (function () {
            function StageTileButtonClickHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            StageTileButtonClickHandler.prototype.click = function (elementClicked) {
                GenericWorkflowDesigner.eventManager.trigger('hideMenus');
                GenericWorkflowDesigner.eventManager.trigger('hideContextMenus');
                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(this.currentActivity.stageId, ProcessDesigner.TBXActivityType.page, "");
                if ($("#canvas").find(".stage-detail-container").length > 0) {
                    if (ProcessDesigner.BPFToolBarView.addMode != ProcessDesigner.BPFToolBarAddMode.DropStep) {
                        var stageDetailsContainer = $("#canvas").find(".stage-detail-container");
                        var selectedActivity = this.getSelectedActivity(this.currentActivity);
                        if (!selectedActivity) {
                            selectedActivity = this.currentActivity;
                        }
                        var selectedActivityName = ProcessDesigner.ElementPrefixes.DetailsPrefix + selectedActivity.getActivityID();
                        var stageDetailsContainerId = $(stageDetailsContainer).attr("id");
                        stageDetailsContainer.remove();
                        if (StageTileButtonClickHandler.stepListView) {
                            StageTileButtonClickHandler.stepListView.deleteStepListView();
                        }
                        if (selectedActivityName != stageDetailsContainerId) {
                            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                            stopwatch.start();
                            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
                            var existingButtonText = stageDetailsContainerId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonTextPrefix);
                            var existingButtonImage = stageDetailsContainerId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonImagePrefix);
                            if ($(existingButtonImage).hasClass("Expanded-symbol")) {
                                $(existingButtonImage).removeClass("Expanded-symbol");
                                $(existingButtonImage).addClass("Collapsed-symbol");
                            }
                            else {
                                $(existingButtonImage).removeClass("Collapsed-symbol");
                                $(existingButtonImage).addClass("Expanded-symbol");
                            }
                            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
                            var currentModelName = GenericWorkflowDesigner.currentModel.getActivityID();
                            var tileButtonImageName = ProcessDesigner.ElementPrefixes.TileButtonImagePrefix + currentModelName;
                            if ($(tileButtonImageName).hasClass("Expanded-symbol")) {
                                $(tileButtonImageName).removeClass("Expanded-symbol");
                                $(tileButtonImageName).addClass("Collapsed-symbol");
                            }
                            else {
                                $(tileButtonImageName).removeClass("Collapsed-symbol");
                                $(tileButtonImageName).addClass("Expanded-symbol");
                            }
                            StageTileButtonClickHandler.stepListView = new MscrmControls.ProcessDesigner.StepListView(this.currentActivity, elementClicked);
                            stopwatch.stop();
                            localStorage.setItem("ProcessDesignerControl_TBX_ExpandFieldList", stopwatch.elapsedMilliseconds.toString());
                            return;
                        }
                        else {
                            var currentModelName = selectedActivity.getActivityID();
                            var tileButtonImageName = ProcessDesigner.ElementPrefixes.TileButtonImagePrefix + currentModelName;
                            if ($(tileButtonImageName).hasClass("Expanded-symbol")) {
                                $(tileButtonImageName).removeClass("Expanded-symbol");
                                $(tileButtonImageName).addClass("Collapsed-symbol");
                            }
                            else {
                                $(tileButtonImageName).removeClass("Collapsed-symbol");
                                $(tileButtonImageName).addClass("Expanded-symbol");
                            }
                        }
                    }
                }
                else {
                    var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                    stopwatch.start();
                    GenericWorkflowDesigner.currentModel = this.currentActivity;
                    var currentModelName = GenericWorkflowDesigner.currentModel.getActivityID();
                    var tileButtonImageName = ProcessDesigner.ElementPrefixes.TileButtonImagePrefix + currentModelName;
                    if ($(tileButtonImageName).hasClass("Expanded-symbol")) {
                        $(tileButtonImageName).removeClass("Expanded-symbol");
                        $(tileButtonImageName).addClass("Collapsed-symbol");
                    }
                    else {
                        $(tileButtonImageName).removeClass("Collapsed-symbol");
                        $(tileButtonImageName).addClass("Expanded-symbol");
                    }
                    StageTileButtonClickHandler.stepListView = new MscrmControls.ProcessDesigner.StepListView(this.currentActivity, elementClicked);
                    stopwatch.stop();
                    localStorage.setItem("ProcessDesignerControl_TBX_ExpandFieldList", stopwatch.elapsedMilliseconds.toString());
                    return;
                }
            };
            StageTileButtonClickHandler.prototype.getSelectedActivity = function (givenActivity) {
                if (givenActivity.constructor.name == ProcessDesigner.ActivityTypeConstants.StepActivity) {
                    return givenActivity.parentStage;
                }
                else if (givenActivity.constructor.name == ProcessDesigner.ActivityTypeConstants.PageActivity) {
                    return givenActivity;
                }
            };
            return StageTileButtonClickHandler;
        })();
        ProcessDesigner.StageTileButtonClickHandler = StageTileButtonClickHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFStageDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFStageDropHandler = (function (_super) {
            __extends(BPFStageDropHandler, _super);
            function BPFStageDropHandler() {
                _super.apply(this, arguments);
            }
            BPFStageDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();
                var rootActivity = droppedActivitiesComponent.getRoot();
                if (rootActivity && rootActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.field && rootActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.label && rootActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.sectionLabel) {
                    return _super.prototype.drop.call(this, droppedActivitiesComponent);
                }
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                if (rootActivity && rootActivity.getParent() && rootActivity.getParent().entityName != this.currentActivity.entityName) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                if (!rootActivity || this.currentActivity.getActivityTypeID() != ProcessDesigner.TBXActivityType.page) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                var addModeName = ProcessDesigner.TelemetryEventReporter.GetAddModeNameForActivity(ProcessDesigner.BPFToolBarView.addMode);
                var stepActivity = rootActivity;
                stepActivity.parentStage = this.currentActivity;
                stepActivity.setParentActivityID(this.currentActivity.getActivityID());
                stepActivity.isNewlyAdded = true;
                this.currentActivity.steps.push(stepActivity);
                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, stepActivity.stepId, stepActivity.getActivityTypeID(), this.currentActivity.stageId);
                deferred.resolveWith(rootActivity, [rootActivity]);
                GenericWorkflowDesigner.currentModel = this.currentActivity;
                ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.DropStep;
                GenericWorkflowDesigner.Settings.isNewStageAdded = false;
                ProcessDesigner.ControlManager.isNewStepAdded = false;
                ProcessDesigner.ControlManager.ShowSeeDetails();
                ProcessDesigner.ControlManager.isNewStepAdded = true;
                ProcessDesigner.CanvasDisplayUtility.HandleStageDetailsOverlap();
                ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                return deferred.promise();
            };
            BPFStageDropHandler.prototype.dropAllowed = function (activityComponent) {
                if (activityComponent.getRoot().getActivityTypeID() == ProcessDesigner.TBXActivityType.field || activityComponent.getRoot().getActivityTypeID() == ProcessDesigner.TBXActivityType.label || activityComponent.getRoot().getActivityTypeID() == ProcessDesigner.TBXActivityType.sectionLabel) {
                    return true;
                }
                else {
                    return _super.prototype.dropAllowed.call(this, activityComponent);
                }
            };
            return BPFStageDropHandler;
        })(GenericWorkflowDesigner.DefaultActivityDropHandler);
        ProcessDesigner.BPFStageDropHandler = BPFStageDropHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFConditionDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFConditionDropHandler = (function (_super) {
            __extends(BPFConditionDropHandler, _super);
            function BPFConditionDropHandler() {
                _super.apply(this, arguments);
            }
            BPFConditionDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                if (droppedActivitiesComponent.getRoot().getActivityTypeID() == "connect") {
                    deferred.resolve();
                    return deferred.promise();
                }
                var childActivities = self.currentActivity.getChildActivitiesSorted();
                if (childActivities.length > 0 && childActivities[0].getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                    GenericWorkflowDesigner.Settings.workflowTree.remove(childActivities[0]);
                }
                GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                    var rootActivity = droppedActivitiesComponent.getRoot();
                    GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(self.currentActivity, rootActivity);
                    rootActivity.saveActivityWithSubsequentActivities().done(function (insertedActivity) {
                        deferred.resolveWith(insertedActivity, [insertedActivity]);
                    });
                });
                return deferred.promise();
            };
            return BPFConditionDropHandler;
        })(GenericWorkflowDesigner.DefaultActivityDropHandler);
        ProcessDesigner.BPFConditionDropHandler = BPFConditionDropHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFDefaultInsertSlotVerticalDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFDefaultInsertSlotVerticalDropHandler = (function (_super) {
            __extends(BPFDefaultInsertSlotVerticalDropHandler, _super);
            function BPFDefaultInsertSlotVerticalDropHandler() {
                _super.apply(this, arguments);
            }
            BPFDefaultInsertSlotVerticalDropHandler.prototype.drop = function (activityComponent) {
                var self = this;
                var deferred = $.Deferred();
                if (!this.dropAllowed(activityComponent)) {
                    deferred.resolve();
                    return deferred.promise();
                }
                GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(activityComponent).done(function () {
                    self.insertActivityComponent(activityComponent).done(function (activity) {
                        var addModeName = ProcessDesigner.TelemetryEventReporter.GetAddModeNameForActivity(ProcessDesigner.BPFToolBarView.addMode);
                        switch (activity.getActivityTypeID()) {
                            case ProcessDesigner.TBXActivityType.page:
                                GenericWorkflowDesigner.Settings.isNewStageAdded = true;
                                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, activity.stageId, ProcessDesigner.TBXActivityType.page, "");
                                break;
                            case ProcessDesigner.TBXActivityType.condition:
                                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, "", ProcessDesigner.TBXActivityType.condition, "");
                                break;
                        }
                        deferred.resolveWith(activity, [activity]);
                    });
                });
                return deferred.promise();
            };
            BPFDefaultInsertSlotVerticalDropHandler.prototype.insertActivityComponent = function (droppedActivityComponent) {
                var parent = this.currentActivity;
                var index = 2, branchID;
                var childs = parent.getChildActivitiesSorted();
                switch (childs.length) {
                    case 0:
                        return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
                    case 1:
                        branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
                            case 1:
                                return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
                            case 2:
                                return GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentBefore(childs[0], droppedActivityComponent);
                        }
                        ;
                        break;
                    case 2:
                        branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                var innerBranchID = childs[1].getParentBranchID();
                                switch (innerBranchID) {
                                    case 1:
                                        return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
                                    case 2:
                                        return GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentBefore(childs[1], droppedActivityComponent);
                                }
                                ;
                                break;
                            case 1:
                                return GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentBefore(childs[1], droppedActivityComponent);
                        }
                        ;
                        break;
                    case 3:
                        return GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentBefore(childs[2], droppedActivityComponent);
                }
            };
            BPFDefaultInsertSlotVerticalDropHandler.prototype.dropAllowed = function (activityComponent) {
                if (activityComponent.getRoot().getActivityID() == this.currentActivity.getActivityID() ||
                    $.inArray(this.currentActivity, activityComponent.getNodes()) > -1) {
                    return false;
                }
                return true;
            };
            return BPFDefaultInsertSlotVerticalDropHandler;
        })(GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler);
        ProcessDesigner.BPFDefaultInsertSlotVerticalDropHandler = BPFDefaultInsertSlotVerticalDropHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="BranchActivity.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of the Branch activity
// </summary>
//
//---------------------------------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
/// <reference path="ProcessActivityDefinitionModel.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BranchActivity = (function (_super) {
            __extends(BranchActivity, _super);
            function BranchActivity(activityType) {
                _super.call(this, activityType);
            }
            Object.defineProperty(BranchActivity.prototype, "defaultBranch", {
                get: function () {
                    if (this._defaultBranch == null) {
                        this._defaultBranch = this.findDefaultBranch();
                    }
                    return this._defaultBranch;
                },
                enumerable: true,
                configurable: true
            });
            BranchActivity.prototype.findDefaultBranch = function () {
                return null;
            };
            BranchActivity.prototype.findBranchById = function (branchId) {
                var children = this.getChildActivitiesSorted();
                for (var i = 0; i < children.length; ++i) {
                    if (children[i].getParentBranchID() === branchId) {
                        return children[i];
                    }
                }
                return null;
            };
            BranchActivity.prototype.getDefaultBranchActivityParentsForLineConnections = function () {
                return this.recursiveGetDefaultBranchActivityParentsForLineConnections(this);
            };
            BranchActivity.prototype.recursiveGetDefaultBranchActivityParentsForLineConnections = function (activity) {
                if (activity == null) {
                    return null;
                }
                var children = activity.getChildActivitiesSorted();
                var parents = [];
                for (var i = 0; i < children.length; ++i) {
                    var child = children[i];
                    if (child === this.defaultBranch) {
                        continue;
                    }
                    if (child.isLeaf()) {
                        parents.push(child);
                    }
                    else {
                        if (child instanceof BranchActivity) {
                            var connections = child.getDefaultBranchActivityParentsForLineConnections();
                            parents = parents.concat(connections);
                        }
                        else {
                            parents = parents.concat(this.recursiveGetDefaultBranchActivityParentsForLineConnections(child));
                        }
                    }
                }
                return parents;
            };
            return BranchActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.BranchActivity = BranchActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="ConditionActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the condition activity of the process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
/// <reference path="branchactivity.ts" />
/// <reference path="../../bpf/common/bpfactivitytype.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ConditionActivity = (function (_super) {
            __extends(ConditionActivity, _super);
            function ConditionActivity() {
                _super.call(this, ProcessDesigner.TBXActivityType.condition);
            }
            ConditionActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.TBXActivityType.condition);
                this.addNewItem(ProcessDesigner.TBXActivityType.condition);
            };
            ConditionActivity.prototype.findDefaultBranch = function () {
                return this.findBranchById(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
            };
            ConditionActivity.prototype.recursiveGetDefaultBranchActivityParentsForLineConnections = function (activity) {
                var children = activity.getChildActivitiesSorted();
                var parents = [];
                var nonDefaultChildren = 0;
                for (var i = 0; i < children.length; ++i) {
                    var child = children[i];
                    if (child === this.defaultBranch) {
                        continue;
                    }
                    if (child.isLeaf()) {
                        parents.push(child);
                    }
                    else {
                        var connections = [];
                        if (child instanceof ProcessDesigner.BranchActivity) {
                            connections = child.getDefaultBranchActivityParentsForLineConnections();
                        }
                        else {
                            connections = _super.prototype.recursiveGetDefaultBranchActivityParentsForLineConnections.call(this, child);
                        }
                        parents = parents.concat(connections);
                    }
                    ++nonDefaultChildren;
                }
                if (nonDefaultChildren === 1) {
                    parents.push(this);
                }
                return parents;
            };
            ConditionActivity.prototype.isLeaf = function () {
                var count = this.getActivities().length;
                return (count > 0) ? false : true;
            };
            return ConditionActivity;
        })(ProcessDesigner.BranchActivity);
        ProcessDesigner.ConditionActivity = ConditionActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="IBPFConditionActivity.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the stage activity of the business process
// </summary>
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
// <copyright file="BPFConditionActivity.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the condition activity of the business process
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="../../../process/model/conditionactivity.ts" />
/// <reference path="ibpfconditionactivity.ts" />
/// <reference path="../../../../Common/IValid.ts" />
/// <reference path="../../../../Common/Rules.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var WorkflowObjectModel = Microsoft.Crm.Workflow.ObjectModel;
        var WorkflowExpressions = Microsoft.Crm.Workflow.Expressions;
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        (function (formulaOperator) {
            formulaOperator[formulaOperator["Add"] = 0] = "Add";
            formulaOperator[formulaOperator["Substract"] = 1] = "Substract";
            formulaOperator[formulaOperator["Multiply"] = 2] = "Multiply";
            formulaOperator[formulaOperator["Divide"] = 3] = "Divide";
        })(ProcessDesigner.formulaOperator || (ProcessDesigner.formulaOperator = {}));
        var formulaOperator = ProcessDesigner.formulaOperator;
        (function (branchType) {
            branchType[branchType["Default"] = 0] = "Default";
            branchType[branchType["If"] = 1] = "If";
            branchType[branchType["Else"] = 2] = "Else";
        })(ProcessDesigner.branchType || (ProcessDesigner.branchType = {}));
        var branchType = ProcessDesigner.branchType;
        var ConditionFormula = (function (_super) {
            __extends(ConditionFormula, _super);
            function ConditionFormula() {
                _super.apply(this, arguments);
                this._attribute = "";
                this._isAttribute = false;
                this._value = "0";
            }
            Object.defineProperty(ConditionFormula.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "isAttribute", {
                get: function () {
                    return this._isAttribute;
                },
                set: function (value) {
                    this._isAttribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "attribute", {
                get: function () {
                    return this._attribute;
                },
                set: function (value) {
                    this._attribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "parentAttribute", {
                set: function (value) {
                    this._parentAttribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "entityName", {
                set: function (value) {
                    this._entityName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "leftAttributeType", {
                get: function () {
                    return this._leftAttributeType;
                },
                set: function (value) {
                    this._leftAttributeType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "rightAttributeType", {
                get: function () {
                    return this._rightAttributeType;
                },
                set: function (value) {
                    this._rightAttributeType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "leftEntity", {
                get: function () {
                    return this._leftEntity;
                },
                set: function (value) {
                    this._leftEntity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionFormula.prototype, "rightEntity", {
                get: function () {
                    return this._rightEntity;
                },
                set: function (value) {
                    this._rightEntity = value;
                },
                enumerable: true,
                configurable: true
            });
            ConditionFormula.prototype._validateActivity = function () {
                var status = true;
                if (!this._isAttribute) {
                    var attributeType = MetadataProxy.getAttributeType(this._parentAttribute, this._entityName);
                    var result = null;
                    if (attributeType == ProcessDesigner.AttributeType.DateTime) {
                        result = Validation.Engine.validateDateTimeFormulaValue("#formulaValueContainer", this._value, Validation.Level.Change);
                    }
                    else {
                        result = Validation.Engine.validateAttributeValue(this._entityName, "#formulaValueContainer", this._value, this._parentAttribute, Validation.Level.Change);
                    }
                    status = this.addResult(result) && status;
                }
                return status;
            };
            return ConditionFormula;
        })(Validation.ValidModel);
        ProcessDesigner.ConditionFormula = ConditionFormula;
        var Value = (function (_super) {
            __extends(Value, _super);
            function Value() {
                _super.apply(this, arguments);
                this._isAttribute = false;
                this._isFormula = false;
                this._isLookup = false;
                this._value = [];
            }
            Object.defineProperty(Value.prototype, "isAttribute", {
                get: function () {
                    return this._isAttribute;
                },
                set: function (value) {
                    this._isAttribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "isFormula", {
                get: function () {
                    return this._isFormula;
                },
                set: function (value) {
                    this._isFormula = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "isLookup", {
                get: function () {
                    return this._isLookup;
                },
                set: function (value) {
                    this._isLookup = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "formula", {
                get: function () {
                    return this._formula;
                },
                set: function (value) {
                    this._formula = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "parentAttribute", {
                set: function (value) {
                    this._formula.parentAttribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "entityName", {
                set: function (value) {
                    this._formula.entityName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "attributeType", {
                get: function () {
                    return this._attributeType;
                },
                set: function (value) {
                    this._attributeType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "lookupEntityType", {
                get: function () {
                    return this._lookupEntityType;
                },
                set: function (value) {
                    this._lookupEntityType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "lookupLabel", {
                get: function () {
                    return this._lookupLabel;
                },
                set: function (value) {
                    this._lookupLabel = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Value.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Value.prototype.get_formulaExpression = function () {
                if (this.isFormula)
                    return (this._formula.attribute + ' ' + this._formula.operator.toString + ' ' + this._formula.value);
                return "";
            };
            Value.prototype._validateActivity = function () {
                var status = true;
                this._isValid = status;
                if (this._isFormula) {
                    status = this.validateChildren([this._formula]) && status;
                    this.addMultipleErrorMessages(this._formula.getErrorMessages());
                }
                return status;
            };
            return Value;
        })(Validation.ValidModel);
        ProcessDesigner.Value = Value;
        var ConditionExpression = (function (_super) {
            __extends(ConditionExpression, _super);
            function ConditionExpression() {
                _super.apply(this, arguments);
                this._hasConditionExpChanged = false;
                this._validationMessages = {};
            }
            Object.defineProperty(ConditionExpression.prototype, "hasConditionExpChanged", {
                get: function () {
                    return this._hasConditionExpChanged;
                },
                set: function (value) {
                    this._hasConditionExpChanged = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "attribute", {
                get: function () {
                    return this._attribute;
                },
                set: function (value) {
                    this._attribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "parentConditionActivity", {
                set: function (value) {
                    this._parentConditionActivity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "prevStepOperator", {
                get: function () {
                    return this._prevStepOperator;
                },
                set: function (value) {
                    this._prevStepOperator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "isValid", {
                get: function () {
                    return this._isValid;
                },
                set: function (value) {
                    this._isValid = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "validationMessages", {
                get: function () {
                    return this._validationMessages;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "attributeType", {
                get: function () {
                    return this._attributeType;
                },
                set: function (value) {
                    this._attributeType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            ConditionExpression.prototype._validateActivity = function () {
                var status = true;
                var result = null;
                var exp = this.get('_expression');
                var entityLogicalName = this._parentConditionActivity.getEntityName();
                var isUnaryOperator = ProcessDesigner.MetadataProvider.isUnaryOperatorByValue(this.operator);
                if (!isUnaryOperator) {
                    if (!this._value.isFormula) {
                        if (!this.value.isAttribute) {
                            var id = "#value";
                            var attributeType = this._attribute ? MetadataProxy.getAttributeType(this._attribute, entityLogicalName) : ProcessDesigner.AttributeType.Unknown;
                            if (attributeType == ProcessDesigner.AttributeType.DateTime || attributeType == ProcessDesigner.AttributeType.Owner || attributeType == ProcessDesigner.AttributeType.Lookup || attributeType == ProcessDesigner.AttributeType.Customer || attributeType == ProcessDesigner.AttributeType.Picklist || attributeType == ProcessDesigner.AttributeType.State || attributeType == ProcessDesigner.AttributeType.Status || attributeType == ProcessDesigner.AttributeType.Boolean) {
                                id = "#valueContainer div:first";
                            }
                            result = Validation.Engine.validateAttributeValue(entityLogicalName, id, this._value.value, this._attribute, Validation.Level.Change);
                            status = this.addResult(result) && status;
                        }
                    }
                    else {
                        this._value.parentAttribute = this._attribute;
                        this._value.entityName = this._parentConditionActivity.getEntityName();
                        this._isValid = status;
                        status = this.validateChildren([this._value]) && status;
                        this.addMultipleErrorMessages(this._value.getErrorMessages());
                    }
                }
                result = Validation.Engine.validateField("#attribute", this._attribute, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"), null);
                status = this.addResult(result) && status;
                return status;
            };
            ConditionExpression.prototype.isStepFromPreviousStage = function (attributeList) {
                var isValid = false;
                for (var i = 0; i < attributeList.length; i++) {
                    if (attributeList[i] == this._attribute.trim()) {
                        isValid = true;
                        break;
                    }
                }
                return isValid;
            };
            ConditionExpression.prototype.isFieldStepFromPreviousStage = function (attributeList) {
                var isValid = false;
                for (var i = 0; i < attributeList.length; i++) {
                    if (this._value.value[0] && attributeList[i] == this._value.value[0].trim()) {
                        isValid = true;
                        break;
                    }
                }
                return isValid;
            };
            ConditionExpression.prototype.clone = function () {
                var self = this;
                var expression = new ConditionExpression();
                expression.attribute = self._attribute;
                expression.entity = ProcessDesigner.TBXStepActivity.CloneEntity(this.entity);
                expression.operator = self._operator;
                expression.prevStepOperator = self._prevStepOperator;
                expression.isValid = self._isValid;
                expression.validationMessages = self._validationMessages;
                expression.attributeType = self._attributeType;
                expression.parentConditionActivity = self._parentConditionActivity;
                if (!self.isValid) {
                    expression.addMultipleErrorMessages(self.getErrorMessages());
                }
                if (self._value) {
                    expression.value = new Value();
                    expression.value.isAttribute = self._value._isAttribute;
                    expression.value.isFormula = self._value._isFormula;
                    expression.value.isLookup = self._value._isLookup;
                    expression.value.attributeType = self._value._attributeType;
                    expression.value.lookupEntityType = self._value._lookupEntityType;
                    expression.value.lookupLabel = self._value._lookupLabel;
                    if (self._value._isFormula && self._value._formula) {
                        expression.value.formula = new ConditionFormula();
                        expression.value.formula.attribute = self._value._formula._attribute;
                        expression.value.formula.leftEntity = ProcessDesigner.TBXStepActivity.CloneEntity(this.value.formula.leftEntity);
                        expression.value.formula.rightEntity = ProcessDesigner.TBXStepActivity.CloneEntity(this.value.formula.rightEntity);
                        expression.value.formula.operator = self._value._formula._operator;
                        expression.value.formula.isAttribute = self._value._formula._isAttribute;
                        expression.value.formula.value = self._value._formula._value;
                        expression.value.formula.leftAttributeType = self._value._formula._leftAttributeType;
                        expression.value.formula.rightAttributeType = self._value._formula._rightAttributeType;
                    }
                    else if (self._value._value) {
                        expression.value.value = self._value._value.slice(0);
                        if (expression.value.isAttribute) {
                            expression.value.entity = ProcessDesigner.TBXStepActivity.CloneEntity(this.value.entity);
                        }
                    }
                }
                return expression;
            };
            return ConditionExpression;
        })(Validation.ValidModel);
        ProcessDesigner.ConditionExpression = ConditionExpression;
        var TBXConditionActivity = (function (_super) {
            __extends(TBXConditionActivity, _super);
            function TBXConditionActivity() {
                _super.call(this);
                this._elseConditionBranchDescription = "";
                this._conditionDescription = "";
                this._setNextStageDescription = "";
                this._elseSetNextStageDescription = "";
                this._parentConditionActivity = null;
                this.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Default_DisplayName_Condition");
                this.addDefaultConditionExpression();
                this.defaults.NextElseBranchActivity = null;
                var self = this;
                _.bindAll(this, 'clone');
                this.clone = _.wrap(this.clone, function (clone) {
                    var cloneObj = clone();
                    TBXConditionActivityClone.extend(this, cloneObj);
                    return cloneObj;
                }).bind(this);
            }
            TBXConditionActivity.prototype.addDefaultConditionExpression = function () {
                this._conditionExpression = [];
                var exp = new ConditionExpression();
                exp.parentConditionActivity = this;
                exp.attribute = 'NEW_EXP';
                exp.value = new Value();
                if (ProcessDesigner.processStep != null) {
                    exp.entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(ProcessDesigner.processStep);
                }
                exp.value.isAttribute = false;
                exp.value.isFormula = false;
                exp.value.isLookup = false;
                exp.value.value = [];
                this._conditionExpression.push(exp);
            };
            Object.defineProperty(TBXConditionActivity.prototype, "parentStageEntityName", {
                get: function () {
                    if (this.getParentStage())
                        return this.getParentStage().entityName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "containsElseBranch", {
                get: function () {
                    return this._containsElseBranch;
                },
                set: function (value) {
                    this._containsElseBranch = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "conditonExpression", {
                get: function () {
                    return this._conditionExpression;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "conditionExpression", {
                set: function (value) {
                    this._conditionExpression = value;
                    if (!this._conditionExpression || this._conditionExpression.length == 0) {
                        this.addDefaultConditionExpression();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "conditionDescription", {
                get: function () {
                    return this._conditionDescription;
                },
                set: function (value) {
                    this._conditionDescription = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "setNextStageDescription", {
                get: function () {
                    return this._setNextStageDescription;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "elseSetNextStageDescription", {
                get: function () {
                    return this._elseSetNextStageDescription;
                },
                set: function (value) {
                    this._elseSetNextStageDescription = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "parentConditionActivity", {
                get: function () {
                    return this._parentConditionActivity;
                },
                set: function (value) {
                    this._parentConditionActivity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXConditionActivity.prototype, "elseConditionBranchDescription", {
                get: function () {
                    return this._elseConditionBranchDescription;
                },
                set: function (value) {
                    this._elseConditionBranchDescription = value;
                },
                enumerable: true,
                configurable: true
            });
            TBXConditionActivity.prototype.resetConditionExpressions = function () {
                this._conditionExpression = [];
            };
            Object.defineProperty(TBXConditionActivity.prototype, "NextElseBranchActivity", {
                get: function () {
                    return this.defaults.NextElseBranchActivity;
                },
                set: function (activity) {
                    this.defaults.NextElseBranchActivity = activity;
                },
                enumerable: true,
                configurable: true
            });
            TBXConditionActivity.prototype.setParentActivityID = function (value) {
                _super.prototype.setParentActivityID.call(this, value);
                if (this.getParent() != null && this.getParent() instanceof ProcessDesigner.TBXPageActivity && this.getParent().entityName == "") {
                    this.getParent().entityName = this.parentStageEntityName;
                }
                else if (GenericWorkflowDesigner.Settings.workflowTree.getActivities() != null && this.getParent() != null && this.getParent() instanceof ProcessDesigner.TBXPageActivity) {
                    this._parentStageEntityName = this.getParent().entityName;
                }
                else if (GenericWorkflowDesigner.Settings.workflowTree.getActivities() != null && this.getParent() != null && this.getParent() instanceof TBXConditionActivity) {
                    this._parentStageEntityName = this.getParent().parentStageEntityName;
                }
            };
            TBXConditionActivity.prototype.buildConditionExpression = function (conditionExpression) {
                var conditionList = [];
                var leftExpression = [];
                var rightExpression = [];
                var isLeafExpression = true;
                if (conditionExpression.left != null && (conditionExpression.left.__class == this.unaryExpressionClass || conditionExpression.left.__class == this.binaryExpressionClass)) {
                    leftExpression = this.buildConditionExpression(conditionExpression.left);
                    isLeafExpression = false;
                }
                if (conditionExpression.right != null && (conditionExpression.right.get_item(0).__class == this.unaryExpressionClass || conditionExpression.right.get_item(0).__class == this.binaryExpressionClass)) {
                    rightExpression = this.buildConditionExpression(conditionExpression.right.get_item(0));
                    isLeafExpression = false;
                    rightExpression[0].prevStepOperator = conditionExpression.conditionOperatoroperator;
                }
                if (isLeafExpression) {
                    var condition = null;
                    if (conditionExpression != null && conditionExpression.__class == this.unaryExpressionClass) {
                        condition = this.buildUnaryExpressionCondition(conditionExpression);
                    }
                    else if (conditionExpression != null && conditionExpression.__class == this.binaryExpressionClass) {
                        condition = this.buildBinaryExpressionCondition(conditionExpression);
                    }
                    if (condition != null) {
                        conditionList.push(condition);
                    }
                }
                else {
                    conditionList = leftExpression.concat(rightExpression);
                }
                return conditionList;
            };
            TBXConditionActivity.prototype.buildUnaryExpressionCondition = function (conditionExpression) {
                var condition = new ConditionExpression();
                condition.operator = conditionExpression.conditionOperatoroperator;
                condition.attribute = conditionExpression.operand.attributeName;
                condition.attributeType = conditionExpression.operand.type;
                condition.entity = conditionExpression.operand.entity;
                condition.value = new Value();
                condition.prevStepOperator = null;
                return condition;
            };
            TBXConditionActivity.prototype.buildBinaryExpressionCondition = function (conditionExpression) {
                var condition = new ConditionExpression();
                condition.operator = conditionExpression.conditionOperatoroperator;
                condition.attribute = conditionExpression.left.attributeName;
                condition.attributeType = conditionExpression.left.type;
                condition.entity = conditionExpression.left.entity;
                condition.value = new Value();
                var rightStepArray = conditionExpression.right;
                var rightStep = null;
                if (rightStepArray != null && rightStepArray.get_count() > 0 && rightStepArray.get_item(0) != null) {
                    rightStep = rightStepArray.get_item(0);
                    condition.value.isAttribute = (rightStep.__class == this.entityAttributeExpressionClass);
                    condition.value.isFormula = (rightStep.__class == this.methodCallExpressionClass);
                    condition.value.isLookup = (rightStep.__class == this.lookupExpressionClass);
                }
                var valueArray = [];
                if (rightStep != null) {
                    if (condition.value.isAttribute) {
                        valueArray.push(rightStep.attributeName);
                        condition.value.value = valueArray;
                        condition.value.attributeType = rightStep.type;
                        condition.value.entity = rightStep.entity;
                    }
                    else if (condition.value.isFormula) {
                        condition.value.formula = this.buildFormula(rightStep);
                    }
                    else {
                        if (condition.value.isLookup) {
                            condition.value.lookupEntityType = rightStep.entityType;
                            condition.value.lookupLabel = rightStep.label;
                            if (rightStep.staticValue != null) {
                                var rightStepvalue = rightStep.staticValue.primitiveValue;
                                var rightStepType = rightStep.staticValue.type;
                            }
                        }
                        else {
                            if (rightStepArray.get_count() == 1) {
                                var rightStepvalue = rightStep.primitiveValue;
                            }
                            else {
                                var rightStepValue = [];
                                for (var i = 0; i < rightStepArray.get_count(); i++) {
                                    rightStepValue.push(rightStepArray.get_item(i).primitiveValue);
                                }
                            }
                            var rightStepType = rightStep.type;
                        }
                        condition.value.attributeType = rightStepType;
                        if (rightStepValue instanceof Array) {
                            valueArray = rightStepValue;
                        }
                        else {
                            valueArray.push(rightStepvalue);
                        }
                    }
                }
                condition.value.value = valueArray;
                condition.prevStepOperator = null;
                return condition;
            };
            TBXConditionActivity.prototype.getFormulaOperator = function (operator) {
                switch (operator) {
                    case 0:
                        return formulaOperator.Add;
                    case 1:
                        return formulaOperator.Substract;
                    case 2:
                        return formulaOperator.Multiply;
                    case 3:
                        return formulaOperator.Divide;
                }
            };
            TBXConditionActivity.prototype.buildFormula = function (formulaStep) {
                var formula = new ConditionFormula();
                if (formulaStep.parameters != null) {
                    var operator = formulaStep.parameters[0];
                    formula.operator = this.getFormulaOperator(operator);
                    if (formulaStep.parameters[1].parameters != null) {
                        formula.attribute = formulaStep.parameters[1].parameters[0].attributeName;
                        formula.leftAttributeType = formulaStep.parameters[1].parameters[0].type;
                        formula.leftEntity = formulaStep.parameters[1].parameters[0].entity;
                    }
                    if (formulaStep.parameters[2].parameters != null) {
                        var parameterRight = formulaStep.parameters[2].parameters[0];
                        formula.isAttribute = (parameterRight.entity != null);
                        formula.rightAttributeType = parameterRight.type;
                        if (formula.isAttribute) {
                            formula.rightEntity = formulaStep.parameters[2].parameters[0].entity;
                            formula.value = parameterRight.attributeName;
                        }
                        else if (parameterRight instanceof Microsoft.Crm.Workflow.Expressions.TimeSpanExpression) {
                            formula.value = parameterRight.value.days;
                        }
                        else {
                            formula.value = parameterRight.primitiveValue;
                        }
                    }
                }
                return formula;
            };
            TBXConditionActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                var step = (this.processStep);
                this.initializeStepParameters(step);
                this.unaryExpressionClass = "UnaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.binaryExpressionClass = "BinaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.entityAttributeExpressionClass = "EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions";
                this.methodCallExpressionClass = "MethodCallExpression:#Microsoft.Crm.Workflow.Expressions";
                this.lookupExpressionClass = "LookupExpression:#Microsoft.Crm.Workflow.Expressions";
                if (step.get_conditionExpression() != null) {
                    this.conditionExpression = this.buildConditionExpression(step.get_conditionExpression());
                }
                else {
                    this._conditionExpression[0].entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(this.processStep.get_workflow());
                }
            };
            TBXConditionActivity.prototype.initializeStepParameters = function (step) {
                this.displayName = step.get_Description();
                var conditionStep = step.get_parent();
                this.conditionDescription = conditionStep.get_Description();
                this.containsElseBranch = conditionStep.get_containsElseBranch();
                var setNextStageStep = step.get_Steps().get_item(0);
                this.setNextStageDescription = setNextStageStep.get_Description();
            };
            TBXConditionActivity.prototype.initializeElseBranchStepParameters = function (step) {
                if (this.containsElseBranch) {
                    this.elseConditionBranchDescription = step.get_Description();
                    var setNextStageStep = step.get_Steps().get_item(0);
                    this.elseSetNextStageDescription = setNextStageStep.get_Description();
                }
            };
            TBXConditionActivity.prototype.getYesBranches = function () {
                var activityList = this.getChildActivitiesSorted();
                var yesBranchActivities = [];
                $.each(activityList, function (index, activity) {
                    if (activity.attributes.ParentBranchID === branchType.If) {
                        yesBranchActivities.push(activity);
                    }
                });
                if (yesBranchActivities[0] != null) {
                    var currentYesChildActivity = yesBranchActivities[0];
                    while (currentYesChildActivity != null) {
                        currentYesChildActivity.parentConditionActivity = this;
                        yesBranchActivities.push(currentYesChildActivity);
                        var currentYesChildActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentYesChildActivity);
                        if (currentYesChildActivities.length > 0) {
                            currentYesChildActivity = currentYesChildActivities[0];
                        }
                        else {
                            currentYesChildActivity = null;
                        }
                    }
                }
                return yesBranchActivities;
            };
            TBXConditionActivity.prototype.getYesBranchFirstChild = function () {
                var yesBranchChildren = this.getYesBranches();
                var yesBranchFirstChild = null;
                if (yesBranchChildren.length > 0) {
                    yesBranchFirstChild = yesBranchChildren[0];
                }
                return yesBranchFirstChild;
            };
            TBXConditionActivity.prototype.getYesBranchLastChild = function () {
                var yesBranchChildren = this.getYesBranches();
                var yesBranchLastChild = null;
                if (yesBranchChildren.length > 0) {
                    yesBranchLastChild = yesBranchChildren[yesBranchChildren.length - 1];
                }
                return yesBranchLastChild;
            };
            TBXConditionActivity.prototype.getNoBranch = function () {
                var activityList = this.getChildActivitiesSorted();
                var noBranchActivity;
                if (activityList.length == 0) {
                    return null;
                }
                var noIndex = activityList.length - 1;
                noBranchActivity = activityList[noIndex];
                return noBranchActivity;
            };
            TBXConditionActivity.prototype.getNoBranches = function () {
                var activityList = this.getChildActivitiesSorted();
                var noBranchActivities = [];
                $.each(activityList, function (index, activity) {
                    if (activity.attributes.ParentBranchID === branchType.Else) {
                        noBranchActivities.push(activity);
                    }
                });
                if (noBranchActivities[0] != null) {
                    var currentNoChildActivity = noBranchActivities[0];
                    while (currentNoChildActivity != null) {
                        currentNoChildActivity.parentConditionActivity = this;
                        var currentNoChildActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentNoChildActivity);
                        if (currentNoChildActivities.length > 0) {
                            currentNoChildActivity = currentNoChildActivities[0];
                        }
                        else {
                            currentNoChildActivity = null;
                        }
                    }
                }
                return noBranchActivities;
            };
            TBXConditionActivity.prototype.getNoBranchFirstChild = function () {
                var noBranchChildren = this.getNoBranches();
                var noBranchFirstChild = null;
                if (noBranchChildren.length > 0) {
                    noBranchFirstChild = noBranchChildren[0];
                }
                return noBranchFirstChild;
            };
            TBXConditionActivity.prototype.getDefaultBranch = function () {
                var activityList = this.getChildActivitiesSorted();
                var defaultActivity = null;
                $.each(activityList, function (index, activity) {
                    if (activity.attributes.ParentBranchID === branchType.Default) {
                        defaultActivity = activity;
                    }
                });
                return defaultActivity;
            };
            TBXConditionActivity.prototype.getDefaultChildOfParentActivity = function () {
                var defaultActivityOfParentActivity = null;
                var currentParentConditionActivity = this.parentConditionActivity;
                while (currentParentConditionActivity != null) {
                    defaultActivityOfParentActivity = currentParentConditionActivity.getDefaultBranch();
                    if (defaultActivityOfParentActivity == null) {
                        currentParentConditionActivity = currentParentConditionActivity.parentConditionActivity;
                    }
                    else {
                        break;
                    }
                }
                return defaultActivityOfParentActivity;
            };
            TBXConditionActivity.prototype.preparePropertyDetails = function () {
                var self = this;
                var target = {
                    _parentStageEntityName: self.parentStageEntityName,
                    _conditionExpression: self._conditionExpression
                };
                return JSON.stringify(target);
            };
            TBXConditionActivity.prototype.canAddNewBranch = function () {
                var count = 0;
                var currentActivity = this;
                while (currentActivity instanceof TBXConditionActivity) {
                    count++;
                    currentActivity = currentActivity.getParent();
                }
                if (count >= ProcessDesigner.BPFConditionBranchLimits.MaximumAllowedBranchesUnderCondition) {
                    return false;
                }
                else {
                    return true;
                }
            };
            TBXConditionActivity.prototype.generateConditionExpression = function (workflowStep) {
                var conditionExpressionList = [];
                for (var i = 0; i < this._conditionExpression.length; i++) {
                    var condExpr = this._conditionExpression[i];
                    if (condExpr.attribute == "NEW_EXP") {
                        continue;
                    }
                    var isUnaryOperator = ProcessDesigner.MetadataProvider.isUnaryOperatorByValue(condExpr.operator);
                    if (isUnaryOperator && condExpr.operator != null) {
                        var conditionExpression = this.generateUnaryExpression(condExpr, workflowStep);
                        conditionExpressionList.push(conditionExpression);
                    }
                    else if (condExpr.operator != null) {
                        var conditionExpression = this.generateBinaryExpression(condExpr, workflowStep);
                        conditionExpressionList.push(conditionExpression);
                    }
                }
                if (this._conditionExpression.length == 1) {
                    return conditionExpressionList[0];
                }
                else if (this._conditionExpression.length > 1) {
                    var condOperator = this._conditionExpression[1].prevStepOperator.toString();
                    conditionExpressionList.reverse();
                    var childConditionOperatoroperator = condOperator;
                    var childLeft = conditionExpressionList.pop();
                    var childRight = [conditionExpressionList.pop()];
                    var childExpression = new WorkflowExpressions.BinaryExpression(workflowStep, childConditionOperatoroperator, childLeft, childRight);
                    while (conditionExpressionList.length > 0) {
                        var parentConditionOperatoroperator = condOperator;
                        var parentLeft = childExpression;
                        var parentRight = [conditionExpressionList.pop()];
                        var parentExpression = new WorkflowExpressions.BinaryExpression(workflowStep, parentConditionOperatoroperator, parentLeft, parentRight);
                        childExpression = parentExpression;
                    }
                    return childExpression;
                }
                else {
                    return null;
                }
            };
            TBXConditionActivity.prototype.generateBinaryExpression = function (conditionExpression, workflowStep) {
                var conditionOperatoroperator = conditionExpression.operator.toString();
                var left = this.generateConditionExpressionLeftObject(conditionExpression, workflowStep);
                var right = this.generateConditionExpressionRightObject(conditionExpression, workflowStep);
                var binaryExpression = new WorkflowExpressions.BinaryExpression(workflowStep, conditionOperatoroperator, left, right);
                return binaryExpression;
            };
            TBXConditionActivity.prototype.generateUnaryExpression = function (conditionExpression, workflowStep) {
                var conditionOperatoroperator = conditionExpression.operator.toString();
                var operand = this.generateConditionExpressionLeftObject(conditionExpression, workflowStep);
                var unaryExpression = new WorkflowExpressions.UnaryExpression(workflowStep, conditionOperatoroperator, operand);
                return unaryExpression;
            };
            TBXConditionActivity.prototype.generateConditionExpressionLeftObject = function (condExpr, workflowStep) {
                var attributeType = condExpr.attributeType == undefined ? "0" : condExpr.attributeType.toString();
                condExpr.entity.set_workflow(workflowStep);
                var entity = condExpr.entity;
                var attributeName = condExpr.attribute;
                var left = new WorkflowExpressions.EntityAttributeExpression(entity, attributeName);
                left.set_type(attributeType);
                return left;
            };
            TBXConditionActivity.prototype.generateConditionExpressionRightObject = function (condExpr, workflowStep) {
                var rightArray = [];
                if (condExpr.value.isAttribute == true) {
                    rightArray = this.generateExpressionRightForAttributeType(condExpr, workflowStep);
                }
                else if (condExpr.value.isFormula == true) {
                    rightArray = this.generateExpressionRightForFormulaType(condExpr, workflowStep);
                }
                else {
                    var primitiveExpressionList = this.generateExpressionRightForValueType(condExpr, workflowStep);
                    if (condExpr.value.isLookup) {
                        var primitiveExpression = primitiveExpressionList.pop();
                        primitiveExpression.set_type(15);
                        var lookupExpression = new WorkflowExpressions.LookupExpression(workflowStep, primitiveExpression, 6, condExpr.value.lookupEntityType, condExpr.value.lookupLabel);
                        rightArray.push(lookupExpression);
                    }
                    else {
                        rightArray = primitiveExpressionList;
                    }
                }
                return rightArray;
            };
            TBXConditionActivity.prototype.generateExpressionRightForValueType = function (condExpr, workflowStep) {
                var rightArray = [];
                var flag = $.isArray(condExpr.value.value);
                if (flag == true) {
                    for (var i = 0; i < condExpr.value.value.length; i++) {
                        var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                        var primitiveValue = condExpr.value.value[i];
                        var right = new WorkflowExpressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                        rightArray.push(right);
                    }
                }
                else {
                    var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                    var primitiveValue = condExpr.value.value.toString();
                    var right = new WorkflowExpressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                    rightArray.push(right);
                }
                return rightArray;
            };
            TBXConditionActivity.prototype.generateExpressionRightForAttributeType = function (condExpr, workflowStep) {
                var rightArray = [];
                for (var i = 0; i < condExpr.value.value.length; i++) {
                    var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                    condExpr.entity.set_workflow(workflowStep);
                    var entity = condExpr.value.entity;
                    var attributeName = condExpr.value.value[i];
                    var right = new WorkflowExpressions.EntityAttributeExpression(entity, attributeName);
                    right.set_type(condExpr.value.attributeType);
                    rightArray.push(right);
                }
                return rightArray;
            };
            TBXConditionActivity.prototype.generateExpressionRightForFormulaType = function (condExpr, workflowStep) {
                var rightArray = [];
                condExpr.entity.set_workflow(workflowStep);
                var leftMethEntity = condExpr.value.formula.leftEntity;
                var leftMethAttributeName = condExpr.value.formula.attribute;
                var leftMethEnt = new WorkflowExpressions.EntityAttributeExpression(leftMethEntity, leftMethAttributeName);
                leftMethEnt.set_type(condExpr.value.formula.leftAttributeType);
                var leftMethExprParam = [];
                leftMethExprParam.push(leftMethEnt);
                var leftMethCallExpMethod = "0";
                var leftMethCallExpParameters = leftMethExprParam;
                var leftMethExpr = new WorkflowExpressions.MethodCallExpression(workflowStep, leftMethCallExpMethod, leftMethCallExpParameters);
                var rightMethExprParam = [];
                if (condExpr.value.formula.isAttribute == true) {
                    condExpr.entity.set_workflow(workflowStep);
                    var rightMethEntExprEntity = condExpr.value.formula.rightEntity;
                    var rightMethEntExprAttributeName = condExpr.value.formula.value;
                    var rightMethEntExpr = new WorkflowExpressions.EntityAttributeExpression(rightMethEntExprEntity, rightMethEntExprAttributeName);
                    rightMethEntExpr.set_type(condExpr.value.formula.rightAttributeType);
                    rightMethExprParam.push(rightMethEntExpr);
                }
                else {
                    if (parseInt(condExpr.value.formula.leftAttributeType) == ProcessDesigner.AttributeType.DateTime) {
                        var timeSpan = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, parseInt(condExpr.value.formula.value), 0, 0);
                        var rightMethTimeSpanExpr = new Microsoft.Crm.Workflow.Expressions.TimeSpanExpression(workflowStep, timeSpan);
                        rightMethExprParam.push(rightMethTimeSpanExpr);
                    }
                    else {
                        var rightMethPrimExprType = condExpr.value.formula.leftAttributeType == undefined ? "0" : condExpr.value.formula.leftAttributeType.toString();
                        var rightMethPrimExprPrimitiveValue = condExpr.value.formula.value;
                        var rightMethPrimExpr = new WorkflowExpressions.PrimitiveExpression(workflowStep, rightMethPrimExprPrimitiveValue, rightMethPrimExprType);
                        rightMethPrimExpr.set_type(condExpr.value.formula.rightAttributeType);
                        rightMethExprParam.push(rightMethPrimExpr);
                    }
                }
                var rightMethExprMethod = "0";
                var rightMethExprParameters = rightMethExprParam;
                var rightMethExpr = new WorkflowExpressions.MethodCallExpression(workflowStep, rightMethExprMethod, rightMethExprParameters);
                var paramArray = [];
                paramArray.push(parseInt(condExpr.value.formula.operator.toString()));
                paramArray.push(leftMethExpr);
                paramArray.push(rightMethExpr);
                var rightMethod = "3";
                var rightParameters = paramArray;
                var right = new WorkflowExpressions.MethodCallExpression(workflowStep, rightMethod, rightParameters);
                rightArray.push(right);
                return rightArray;
            };
            TBXConditionActivity.groupBranchesByConditionBlock = function (activities) {
                var BPFConditionBranchActivitiesByCondition = {};
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i] instanceof TBXConditionActivity) {
                        var conditionBranchActivity = activities[i];
                        var conditionIfBranchActivityID = null;
                        if (conditionBranchActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                            conditionIfBranchActivityID = conditionBranchActivity.getActivityID();
                        }
                        else {
                            var parentConditionActivity = conditionBranchActivity;
                            while (parentConditionActivity.getParentBranchID() != ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                                parentConditionActivity = parentConditionActivity.getParent();
                            }
                            conditionIfBranchActivityID = parentConditionActivity.getActivityID();
                        }
                        if (BPFConditionBranchActivitiesByCondition[conditionIfBranchActivityID] == null) {
                            BPFConditionBranchActivitiesByCondition[conditionIfBranchActivityID] = [];
                        }
                        BPFConditionBranchActivitiesByCondition[conditionIfBranchActivityID].push(conditionBranchActivity);
                    }
                }
                return BPFConditionBranchActivitiesByCondition;
            };
            TBXConditionActivity.generateJson = function (activities, workflowStep) {
                var BPFConditionBranchActivitiesByCondition = TBXConditionActivity.groupBranchesByConditionBlock(activities);
                for (var ifBranchActivityID in BPFConditionBranchActivitiesByCondition) {
                    var branchActivitiesForConditionStep = BPFConditionBranchActivitiesByCondition[ifBranchActivityID];
                    var conditionStep = TBXConditionActivity.generateConditionStepJson(branchActivitiesForConditionStep, workflowStep);
                    var firstConditionBranchSetNextStageStep = conditionStep.get_Steps().get_item(0).get_Steps().get_item(0);
                    var workflowStepIterator;
                    for (workflowStepIterator = 0; workflowStepIterator < workflowStep.get_Steps().get_Count(); workflowStepIterator++) {
                        if (workflowStep.get_Steps().get_item(workflowStepIterator) instanceof WorkflowObjectModel.EntityStep) {
                            var entityStep = workflowStep.get_Steps().get_item(workflowStepIterator);
                            var stageStep = entityStep.get_Steps().get_item(0);
                            if (stageStep.get_stageId() == firstConditionBranchSetNextStageStep.get_parentStageId()) {
                                stageStep.appendStep(conditionStep);
                                break;
                            }
                        }
                    }
                }
                return workflowStep;
            };
            TBXConditionActivity.generateConditionStepJson = function (branchActivitiesForConditionStep, workflowStep) {
                var ifBranchActivity = null;
                branchActivitiesForConditionStep.forEach(function (conditionBranchActivity) {
                    if (conditionBranchActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        ifBranchActivity = conditionBranchActivity;
                    }
                });
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                var parentStageActivity = null;
                activities.forEach(function (activity) {
                    if (activity instanceof ProcessDesigner.TBXPageActivity) {
                        if (activity.getActivityID() == ifBranchActivity.getParentActivityID()) {
                            parentStageActivity = activity;
                        }
                    }
                });
                var conditionStep = new WorkflowObjectModel.ConditionStep(workflowStep);
                conditionStep.set_Description(ifBranchActivity.conditionDescription);
                conditionStep.set_workflow(workflowStep);
                var elseBranchFirstStageActivity = null;
                var elseConditionBranchStep = null;
                branchActivitiesForConditionStep.forEach(function (conditionBranchActivity) {
                    var conditionBranchStep = TBXConditionActivity.generateConditionBranchStepJson(conditionBranchActivity, parentStageActivity, conditionStep, workflowStep, false);
                    conditionStep.appendStep(conditionBranchStep);
                    if (elseConditionBranchStep == null) {
                        activities.forEach(function (activity) {
                            if (elseBranchFirstStageActivity == null && activity instanceof ProcessDesigner.TBXPageActivity) {
                                if (activity.getParentActivityID() == conditionBranchActivity.getActivityID() && (activity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch)) {
                                    elseBranchFirstStageActivity = activity;
                                }
                            }
                        });
                        if (elseBranchFirstStageActivity != null) {
                            elseConditionBranchStep = TBXConditionActivity.generateConditionBranchStepJson(conditionBranchActivity, parentStageActivity, conditionStep, workflowStep, true);
                            conditionStep.appendStep(elseConditionBranchStep);
                            if (!conditionStep.get_containsElseBranch()) {
                                conditionStep.set_containsElseBranch(true);
                            }
                        }
                    }
                });
                return conditionStep;
            };
            TBXConditionActivity.generateConditionBranchStepJson = function (conditionBranchActivity, parentStageActivity, conditionStep, workflowStep, isElseBranch) {
                var conditionExpression = null;
                if (!isElseBranch) {
                    conditionExpression = conditionBranchActivity.generateConditionExpression(workflowStep);
                }
                var conditionBranchStep = new WorkflowObjectModel.ConditionBranchStep(conditionStep, conditionExpression);
                if (!isElseBranch) {
                    conditionBranchStep.set_Description(conditionBranchActivity.displayName);
                }
                else {
                    conditionBranchStep.set_Description(conditionBranchActivity.elseConditionBranchDescription);
                }
                conditionBranchStep.set_workflow(workflowStep);
                var setNextStageStep = TBXConditionActivity.generateSetNextStageStepJson(conditionBranchActivity, parentStageActivity, workflowStep, isElseBranch);
                conditionBranchStep.appendStep(setNextStageStep);
                return conditionBranchStep;
            };
            TBXConditionActivity.generateSetNextStageStepJson = function (conditionBranchActivity, parentStageActivity, workflowStep, isElseBranch) {
                var setNextStageStep = new WorkflowObjectModel.SetNextStageStep(workflowStep);
                setNextStageStep.set_workflow(workflowStep);
                if (!isElseBranch) {
                    setNextStageStep.set_Description(conditionBranchActivity.setNextStageDescription);
                }
                else {
                    setNextStageStep.set_Description(conditionBranchActivity.elseSetNextStageDescription);
                }
                setNextStageStep.set_parentStageId(parentStageActivity.stageId);
                var nextStageId = "";
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                activities.forEach(function (activity) {
                    if (activity instanceof ProcessDesigner.TBXPageActivity) {
                        var stageActivity = activity;
                        if (stageActivity.getParentActivityID() == conditionBranchActivity.getActivityID()) {
                            if ((!isElseBranch && conditionBranchActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch && stageActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) ||
                                (!isElseBranch && conditionBranchActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch && stageActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) ||
                                (isElseBranch && stageActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch)) {
                                nextStageId = stageActivity.stageId;
                            }
                        }
                    }
                });
                setNextStageStep.set_stageId(nextStageId);
                return setNextStageStep;
            };
            TBXConditionActivity.overrideWorkflowObjectModelMethods = function () {
                WorkflowObjectModel.ConditionBranchStep.prototype.get_conditionBranchDisplayMode = function () {
                    if (this.get_parent().get_Steps().indexOf(this) == 0) {
                        return WorkflowObjectModel.ConditionBranchDisplayMode.IF;
                    }
                    else if ((this.get_parent().get_containsElseBranch() && this.get_parent().get_Steps().indexOf(this) < this.get_parent().get_Steps().get_Count() - 1) ||
                        (!this.get_parent().get_containsElseBranch())) {
                        return WorkflowObjectModel.ConditionBranchDisplayMode.elseIf;
                    }
                    else {
                        return WorkflowObjectModel.ConditionBranchDisplayMode.ELSE;
                    }
                };
                WorkflowObjectModel.ConditionStep.prototype.appendStep = function (newStep) {
                    if (!(newStep instanceof WorkflowObjectModel.ConditionBranchStep)) {
                        return;
                    }
                    WorkflowObjectModel.CompositeStepBase.prototype.appendStep.call(this, newStep);
                };
                WorkflowObjectModel.ConditionBranchStep.prototype.set_parent = function (parentStep) {
                    if (!(parentStep instanceof WorkflowObjectModel.ConditionStep)) {
                        return;
                    }
                    WorkflowObjectModel.StepBase.prototype.set_parent.call(this, parentStep);
                };
            };
            TBXConditionActivity.prototype.getStepAttributeList = function (parent) {
                var stepAttributes = [];
                for (var i = 0; i < parent.steps.length; i++) {
                    if (parent.steps[i].attributeName != "" && parent.steps[i].attributeName != null && parent.steps[i].attributeName != undefined) {
                        stepAttributes.push(parent.steps[i].attributeName);
                    }
                }
                return stepAttributes;
            };
            Object.defineProperty(TBXConditionActivity.prototype, "stepAttributeList", {
                get: function () {
                    var parent = this.getParent();
                    while (!(parent instanceof ProcessDesigner.TBXPageActivity)) {
                        parent = parent.getParent();
                    }
                    return this.getStepAttributeList(parent);
                },
                enumerable: true,
                configurable: true
            });
            TBXConditionActivity.prototype.getEntityName = function () {
                var parent = this.getParent();
                while (!(parent instanceof ProcessDesigner.TBXPageActivity)) {
                    parent = parent.getParent();
                }
                return parent.entityName;
            };
            TBXConditionActivity.prototype._getErrorCount = function () {
                return this.errCount + this.getChildrenErrorCount(this._conditionExpression);
            };
            TBXConditionActivity.prototype._validateActivity = function () {
                var status = true;
                var result = null;
                var parent = this.getParent();
                while (!(parent instanceof ProcessDesigner.TBXPageActivity)) {
                    parent = parent.getParent();
                }
                var condExprns = this._conditionExpression;
                if (condExprns.length == 0) {
                    result = Validation.Engine.checkLevel("#conditionExpression .err1", Validation.Level.Activate, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_CondtionExpression_NotEmpty"));
                    status = this.addResult(result) && status;
                }
                if (this.getParentBranchID() == 0) {
                    if (this.parentStageEntityName != parent.entityName) {
                        result = Validation.Engine.checkLevel("#attribute", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"));
                        status = this.addResult(result) && status;
                    }
                }
                var hasTrailingPage = false;
                for (var i = 0; i < GenericWorkflowDesigner.Settings.workflowTree.getActivities().length; i++) {
                    var activity = GenericWorkflowDesigner.Settings.workflowTree.getActivities()[i];
                    if (activity instanceof ProcessDesigner.TBXPageActivity && activity.getParentActivityID() == this.getActivityID() && activity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                        hasTrailingPage = true;
                        break;
                    }
                }
                if (!hasTrailingPage) {
                    result = Validation.Engine.checkLevel("#conditionExpression .err1", Validation.Level.Validate, ProcessDesigner.MetadataProvider.getLocalizedString("Error_Message_0x80060399"));
                    status = status && this.addResult(result);
                    if (!Validation.Engine.isAllowedLevel(Validation.Level.Validate)) {
                        var newPage = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(ProcessDesigner.TBXActivityType.page);
                        var addedActivityComponent = new GenericWorkflowDesigner.ConnectedComponent(newPage);
                        var deferred = $.Deferred();
                        GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentAfter(this, addedActivityComponent).done(function (insertedActivity) {
                            insertedActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                                deferred.resolveWith(activity, [activity]);
                                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                            });
                        });
                    }
                }
                var stepAttributes = this.getStepAttributeList(parent);
                var self = this;
                for (var i = 0; i < condExprns.length; i++) {
                    condExprns[i].parentConditionActivity = self;
                    condExprns[i].showNotifications = false;
                    if (condExprns[i].attribute != 'NEW_EXP' || Validation.Engine.getAction() >= Validation.Level.Validate) {
                        var tempStatus = condExprns[i].validateActivity();
                        status = tempStatus && status;
                    }
                }
                return status;
            };
            TBXConditionActivity.prototype.validateOnAction = function (action) {
                var isValid = _super.prototype.validateOnAction.call(this, action);
                if (!isValid && (action == Validation.Level.Apply || action == Validation.Level.Change)) {
                    if (this.getErrorCount() == 1 &&
                        !CommonTypes.Types.Object.isNullOrUndefined(this.getErrorMessages()["#conditionExpression .err1"]) &&
                        this.getErrorMessages()["#conditionExpression .err1"] == ProcessDesigner.MetadataProvider.getLocalizedString("Error_Message_0x80060399")) {
                        isValid = true;
                    }
                }
                return isValid;
            };
            TBXConditionActivity.prototype.clearErrorMessages = function () {
                _super.prototype.clearErrorMessages.call(this);
                for (var i = 0; i < this._conditionExpression.length; i++) {
                    var tempStatus = this._conditionExpression[i].clearErrorMessages();
                    this._conditionExpression[i].isValid = true;
                }
            };
            TBXConditionActivity.prototype.getCloneOfActivity = function () {
                var newConditionActivity = new TBXConditionActivity();
                newConditionActivity.displayName = this.displayName;
                newConditionActivity._parentStageEntityName = this.parentStageEntityName;
                newConditionActivity.conditionDescription = this.conditionDescription;
                newConditionActivity.unaryExpressionClass = this.unaryExpressionClass;
                newConditionActivity.binaryExpressionClass = this.binaryExpressionClass;
                newConditionActivity.entityAttributeExpressionClass = this.entityAttributeExpressionClass;
                newConditionActivity.methodCallExpressionClass = this.methodCallExpressionClass;
                newConditionActivity.lookupExpressionClass = this.lookupExpressionClass;
                var newConditionExpressions = [];
                var self = this;
                jQuery.each(this._conditionExpression, function (index, expression) {
                    var newExpression = this.clone();
                    newConditionExpressions.push(newExpression);
                });
                newConditionActivity.conditionExpression = newConditionExpressions;
                return newConditionActivity;
            };
            TBXConditionActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                        return [ProcessDesigner.TBXActivityType.page];
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        var child = this.getChildActivitiesSorted();
                        var conditionPush = 1;
                        for (var i = 0; i < child.length; i++) {
                            if (child[i] && child[i].getActivityTypeID() == "condition" && child[i].getParentBranchID() == 2) {
                                conditionPush = 0;
                            }
                        }
                        if (conditionPush) {
                            return [ProcessDesigner.TBXActivityType.page, ProcessDesigner.TBXActivityType.condition];
                        }
                        else {
                            return [ProcessDesigner.TBXActivityType.page];
                        }
                    case GenericWorkflowDesigner.SlotType.TileHolder:
                        return [];
                    default:
                        return _super.prototype.getAllowedDependentActivityTypes.call(this, slotType);
                }
                ;
            };
            TBXConditionActivity.prototype.needsSubsequentActivitiesGeneration = function () {
                var needsGeneration = true;
                var childActivities = this.getChildActivitiesSorted();
                if (childActivities.length > 0 && childActivities[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                    needsGeneration = false;
                    this.NextElseBranchActivity = null;
                }
                return needsGeneration;
            };
            return TBXConditionActivity;
        })(ProcessDesigner.ConditionActivity);
        ProcessDesigner.TBXConditionActivity = TBXConditionActivity;
        var TBXConditionActivityClone = (function (_super) {
            __extends(TBXConditionActivityClone, _super);
            function TBXConditionActivityClone(clonedFrom_) {
                _super.call(this);
                this._errorCountCB = null;
                this.clonedFrom = clonedFrom_;
            }
            TBXConditionActivityClone.prototype.getParent = function () {
                return this.clonedFrom.getParent();
            };
            TBXConditionActivityClone.prototype.getErrorCount = function () {
                if (this._errorCountCB) {
                    return this._errorCountCB();
                }
                else {
                    return this.clonedFrom.getErrorCount();
                }
            };
            TBXConditionActivityClone.extend = function (clonedFrom_, clonedTo_) {
                var clonedFrom = clonedFrom_;
                var clonedTo = clonedTo_;
                var getParent = clonedFrom.getParent;
                clonedTo.getParent = _.wrap(clonedTo.getParent, function (getParent) {
                    return clonedFrom.getParent();
                }).bind(clonedTo);
                var getErrorCount = clonedFrom.getErrorCount;
                clonedTo.getErrorCount = _.wrap(clonedTo.getErrorCount, function (getErrorCount) {
                    if (clonedTo['_errorCountCB']) {
                        return clonedTo['_errorCountCB']();
                    }
                    else {
                        return clonedFrom.getErrorCount();
                    }
                }).bind(clonedTo);
            };
            return TBXConditionActivityClone;
        })(TBXConditionActivity);
        ProcessDesigner.TBXConditionActivityClone = TBXConditionActivityClone;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFRootActivity = (function (_super) {
            __extends(BPFRootActivity, _super);
            function BPFRootActivity() {
                _super.call(this, ProcessDesigner.TBXActivityType.root);
            }
            BPFRootActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.TBXActivityType.root);
                this.addNewItem(ProcessDesigner.TBXActivityType.root);
            };
            BPFRootActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
            };
            return BPFRootActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.BPFRootActivity = BPFRootActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="TBXPageActivity.ts" company="Microsoft">
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the page activity of the business process
//  </summary>
/// <reference path="../../common/bpfactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="ibpfstageactivity.ts" />
/// <reference path="../../common/bpfjsonobjects.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Utility = _Microsoft.Client.Telemetry.Utility;
        var WorkflowObjectModel = Microsoft.Crm.Workflow.ObjectModel;
        var TBXPageActivity = (function (_super) {
            __extends(TBXPageActivity, _super);
            function TBXPageActivity() {
                _super.call(this, ProcessDesigner.TBXActivityType.page);
                this.stageId = null;
                this.nextStageId = null;
                this.stageCategory = null;
                this.pageLayoutId = null;
                this.steps = [];
                this.count = 0;
                this._entityName = "";
                this._relationships = [];
                this._relationshipName = "";
                this._description = "";
                this._category = "-1";
                this._parentConditionActivity = null;
                this.displayName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_TBXStageActivity_PageName");
                this._entityName = ProcessDesigner.primaryEntity;
                this.stageId = Utility.newGuid();
                this.pageLayoutId = Utility.newGuid();
                this.save();
                var newStepActivity = new ProcessDesigner.TBXStepActivity(ProcessDesigner.TBXActivityType.field);
                newStepActivity.parentStage = this;
                newStepActivity.setParentActivityID(this.getActivityID());
                this.steps.push(newStepActivity);
            }
            TBXPageActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.TBXActivityType.page);
                this.addNewItem(ProcessDesigner.TBXActivityType.page);
            };
            Object.defineProperty(TBXPageActivity.prototype, "entityName", {
                get: function () {
                    return this._entityName;
                },
                set: function (value) {
                    this._entityName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXPageActivity.prototype, "relationships", {
                get: function () {
                    return this._relationships;
                },
                set: function (value) {
                    this._relationships = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXPageActivity.prototype, "relationshipName", {
                get: function () {
                    return this._relationshipName;
                },
                set: function (value) {
                    this._relationshipName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TBXPageActivity.prototype, "description", {
                get: function () {
                    return this._description;
                },
                set: function (value) {
                    this._description = value;
                },
                enumerable: true,
                configurable: true
            });
            TBXPageActivity.prototype.setValidationMode = function (validationMode) {
                for (var i = 0; i < this.steps.length; i++) {
                    this.steps[i].setValidationMode(validationMode);
                }
            };
            Object.defineProperty(TBXPageActivity.prototype, "parentConditionActivity", {
                get: function () {
                    return this._parentConditionActivity;
                },
                set: function (value) {
                    this._parentConditionActivity = value;
                },
                enumerable: true,
                configurable: true
            });
            TBXPageActivity.prototype.setNewSteps = function (NewSteps) {
                this.steps = NewSteps;
            };
            TBXPageActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                var step = (this.processStep);
                if (this.steps.length == 1 && step.get_Steps().get_Count() > 0) {
                    this.steps.pop();
                }
                var workflow = step.get_workflow();
                this.entityName = workflow.get_primaryEntityName();
                this.displayName = step.get_Description();
                this.count = step.get_Steps().get_Count();
            };
            TBXPageActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    _entityName: this.entityName,
                    _name: this.displayName,
                    _description: this.description,
                    count: this.count,
                    _relationships: this.relationships,
                    _relationshipName: this.relationshipName
                };
                return JSON.stringify(target);
            };
            TBXPageActivity.prototype.getStepLabels = function () {
                var stepLabels = [];
                var defaultStepLabel = new WorkflowObjectModel.StepLabel();
                defaultStepLabel.set_description(TBXPageActivity.defaultPageName);
                defaultStepLabel.set_labelId(this.pageLayoutId);
                defaultStepLabel.set_languageCode(window._Process_CurrentLCID);
                stepLabels.push(defaultStepLabel);
                if (this.displayName != TBXPageActivity.defaultPageName) {
                    var stepLabel = new WorkflowObjectModel.StepLabel();
                    stepLabel.set_description(this.displayName);
                    stepLabel.set_labelId(this.stageId);
                    stepLabel.set_languageCode(window._Process_CurrentLCID);
                    stepLabels.push(stepLabel);
                }
                return stepLabels;
            };
            TBXPageActivity.prototype.canAddNewNestedBranch = function () {
                var count = 0;
                var currentActivity = this;
                while (currentActivity.getParent() != null) {
                    if (currentActivity instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParent() instanceof TBXPageActivity) {
                        count++;
                    }
                    currentActivity = currentActivity.getParent();
                }
                if (count >= ProcessDesigner.BPFConditionBranchLimits.MaximumAllowedNestedBranches) {
                    return false;
                }
                else {
                    return true;
                }
            };
            TBXPageActivity.prototype.tryGetOuterBranchConditionActivity = function (activities, conditionActivity) {
                while (conditionActivity.getParent() != null && !(conditionActivity instanceof ProcessDesigner.TBXConditionActivity)) {
                    if (conditionActivity instanceof TBXPageActivity &&
                        conditionActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity &&
                        conditionActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        break;
                    }
                    conditionActivity = conditionActivity.getParent();
                }
                return conditionActivity;
            };
            TBXPageActivity.prototype.computeConditionBlockNextStageId = function (activities, conditionActivity) {
                var computedNextStageId = null, conditionIfBranchActivityId = null;
                if (conditionActivity instanceof ProcessDesigner.TBXConditionActivity) {
                    conditionIfBranchActivityId = conditionActivity.getActivityID();
                    for (var i = 0; i < activities.length; i++) {
                        if (activities[i].getParentActivityID() == conditionIfBranchActivityId &&
                            activities[i] instanceof TBXPageActivity &&
                            activities[i].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                            computedNextStageId = activities[i].stageId;
                            break;
                        }
                    }
                }
                if (computedNextStageId == null) {
                    conditionActivity = this.tryGetOuterBranchConditionActivity(activities, conditionActivity.getParent());
                    if (conditionActivity instanceof ProcessDesigner.TBXConditionActivity) {
                        return this.computeConditionBlockNextStageId(activities, conditionActivity);
                    }
                }
                return computedNextStageId;
            };
            TBXPageActivity.prototype.computeNextStageId = function (activities) {
                var computedNextStageId = null;
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].getParentActivityID() == this.getActivityID()) {
                        if (activities[i] instanceof TBXPageActivity) {
                            computedNextStageId = activities[i].stageId;
                        }
                        else {
                            computedNextStageId = this.computeConditionBlockNextStageId(activities, activities[i]);
                        }
                        break;
                    }
                }
                if (computedNextStageId == null) {
                    var conditionActivity = this.tryGetOuterBranchConditionActivity(activities, this);
                    if (conditionActivity instanceof ProcessDesigner.TBXConditionActivity) {
                        computedNextStageId = this.computeConditionBlockNextStageId(activities, conditionActivity);
                    }
                }
                return computedNextStageId;
            };
            TBXPageActivity.prototype.generatePageStepJson = function (activities, workflowStep) {
                var pageStep = new WorkflowObjectModel.PageStep(workflowStep, this.displayName);
                pageStep.set_stageId(this.stageId);
                var computedNextStageId = this.computeNextStageId(activities);
                pageStep.set_nextStageId(computedNextStageId);
                pageStep.set_stageCategory(this._category);
                this.pageLayoutId = Utility.newGuid();
                pageStep.set_pageLayoutId(this.pageLayoutId);
                pageStep.set_pageUniqueName(pageStep.get_Id().toLowerCase());
                pageStep.set_workflow(workflowStep);
                this.getStepLabels().forEach(function (stepLabel) {
                    pageStep.addLabel(stepLabel);
                });
                for (var i = 0; i < this.steps.length; i++) {
                    var stepObj = this.steps[i].generateStepStepJson(workflowStep);
                    pageStep.appendStep(stepObj);
                }
                return pageStep;
            };
            TBXPageActivity.prototype.generateEntityStepJson = function (activities, workflowStep) {
                var entityStep = new WorkflowObjectModel.EntityStep(workflowStep, workflowStep.get_primaryEntityName());
                entityStep.set_workflow(workflowStep);
                entityStep.appendStep(this.generatePageStepJson(activities, workflowStep));
                if (this.entityName != null && this.entityName != "") {
                    entityStep.set_Description(this.entityName);
                }
                return entityStep;
            };
            TBXPageActivity.generateJson = function (activities, workflowStep) {
                var TBXPageActivities = GenericWorkflowDesigner.Settings.workflowTree.getPageActivitiesOrdered();
                var entityStepId = workflowStep.get_nextStepIndex();
                for (var i = 0; i < TBXPageActivities.length; i++) {
                    var entityStep = TBXPageActivities[i].generateEntityStepJson(activities, workflowStep);
                    entityStep.setNameAndId(entityStepId + "");
                    entityStepId++;
                    workflowStep.appendStep(entityStep);
                }
                return workflowStep;
            };
            TBXPageActivity.prototype._validateActivity = function () {
                var status = true;
                var result = null;
                result = ProcessDesigner.Validation.Engine.validateField("#stageName", this._entityName, ProcessDesigner.Validation.Required.apply, ProcessDesigner.Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"), null);
                status = this.addResult(result) && status;
                if (ProcessDesigner.Validation.Engine.isAllowedLevel(ProcessDesigner.Validation.Level.Save)) {
                    status = this.validateChildren(this.steps) && status;
                }
                return status;
            };
            TBXPageActivity.prototype._validateDependentOptionSetActivity = function () {
                var status = true;
                var result = null;
                if (ProcessDesigner.Validation.Engine.isAllowedLevel(ProcessDesigner.Validation.Level.Save)) {
                    status = this.validateDependentOptionSetChildren(this.steps) && status;
                }
                return status;
            };
            TBXPageActivity.prototype.clearErrorMessages = function () {
                _super.prototype.clearErrorMessages.call(this);
                for (var i = 0; i < this.steps.length; i++) {
                    var tempStatus = this.steps[i].clearErrorMessages();
                }
            };
            TBXPageActivity.prototype._getErrorCount = function () {
                return this.errCount + this._getSubViewsErrorCount();
            };
            TBXPageActivity.prototype._getSubViewsErrorCount = function () {
                return this.getChildrenErrorCount(this.steps);
            };
            TBXPageActivity.prototype.getAllowedDependentActivitiesForConnector = function (currentActivity) {
                if (currentActivity.getParent() == null)
                    return false;
                else {
                    var parentActivity = currentActivity.getParent();
                    if (parentActivity != null) {
                        if (currentActivity instanceof TBXPageActivity && parentActivity instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParentBranchID() != ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                            return true;
                        }
                        else {
                            return this.getAllowedDependentActivitiesForConnector(parentActivity);
                        }
                    }
                }
            };
            TBXPageActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                        var child = this.getChildActivitiesSorted();
                        var push = true;
                        for (var i = 0; i < child.length; i++) {
                            if (child[i] && child[i].getActivityTypeID() == "condition") {
                                push = false;
                            }
                        }
                        if (push) {
                            return [ProcessDesigner.TBXActivityType.page, ProcessDesigner.TBXActivityType.condition];
                        }
                        else {
                            return [ProcessDesigner.TBXActivityType.page];
                        }
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        return [ProcessDesigner.TBXActivityType.page, ProcessDesigner.TBXActivityType.condition];
                    case GenericWorkflowDesigner.SlotType.TileHolder:
                        return [ProcessDesigner.TBXActivityType.field, ProcessDesigner.TBXActivityType.label, ProcessDesigner.TBXActivityType.sectionLabel];
                    default:
                        return _super.prototype.getAllowedDependentActivityTypes.call(this, slotType);
                }
            };
            TBXPageActivity.prototype.getStepSequence = function (stepId) {
                for (var i = 0; i < this.steps.length; i++) {
                    if (this.steps[i].stepId === stepId) {
                        return i + 1;
                    }
                }
                return -1;
            };
            TBXPageActivity.prototype.getCloneOfActivity = function () {
                var newActivity = new TBXPageActivity();
                newActivity.description = this.description;
                newActivity.displayName = this.displayName;
                newActivity.entityName = this.entityName;
                newActivity.setWorkflowID(this.getWorkflowID());
                newActivity.setParentBranchID(this.getParentBranchID());
                var properties = this.getDefaultProperties();
                properties.Items = this.getProperties().Items;
                newActivity.set("Properties", properties);
                if (newActivity.steps.length == 1) {
                    newActivity.steps.pop();
                }
                jQuery.each(this.steps, function (index, stepActivity) {
                    var newStepActivity = stepActivity.getCloneOfActivity();
                    newStepActivity.parentStage = newActivity;
                    newStepActivity.setParentActivityID(newActivity.getActivityID());
                    newActivity.steps.push(newStepActivity);
                });
                return newActivity;
            };
            TBXPageActivity.prototype.getPropertyPageClone = function () {
                var newActivity = new TBXPageActivity();
                newActivity.description = this.description;
                newActivity.displayName = this.displayName;
                newActivity.entityName = this.entityName;
                var properties = this.getDefaultProperties();
                properties.Items = this.getProperties().Items;
                newActivity.set("Properties", properties);
                if (newActivity.steps.length == 1) {
                    newActivity.steps.pop();
                }
                return newActivity;
            };
            TBXPageActivity.prototype.needsSubsequentActivitiesGeneration = function () {
                var needsGeneration = false;
                var childActivities = this.getChildActivitiesSorted();
                if (childActivities.length == 0 || (!CommonTypes.Types.Object.isNullOrUndefined(this.getNextActivityID()) && this.getNextActivityID() != childActivities[0].getActivityID())) {
                    needsGeneration = true;
                }
                return needsGeneration;
            };
            TBXPageActivity.defaultPageName = "";
            return TBXPageActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.TBXPageActivity = TBXPageActivity;
        var StageCategoryMetadata = (function () {
            function StageCategoryMetadata() {
            }
            return StageCategoryMetadata;
        })();
        ProcessDesigner.StageCategoryMetadata = StageCategoryMetadata;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFActivityDropController.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFActivityDropController = (function (_super) {
            __extends(BPFActivityDropController, _super);
            function BPFActivityDropController(slot) {
                _super.call(this, slot);
                this.slot = slot;
            }
            BPFActivityDropController.prototype.dropLibraryElement = function (libraryElement) {
                var dropHandler;
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(libraryElement.get("ActivityTypeID"));
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                return dropHandler.drop(component);
            };
            BPFActivityDropController.prototype.ConnectButtonEventListner = function (slotList) {
                var AcceptableTiles;
                $(document).on('ConnectButton', function (event, droppable) {
                    alert("something clicked");
                });
            };
            return BPFActivityDropController;
        })(GenericWorkflowDesigner.ActivityDropController);
        ProcessDesigner.BPFActivityDropController = BPFActivityDropController;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="BPFActivityDropHandlerFactory.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Factories to instantiate new instance of BPFActivityDropController given the designer
// </summary>
//
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFActivityDropHandlerFactory = (function (_super) {
            __extends(BPFActivityDropHandlerFactory, _super);
            function BPFActivityDropHandlerFactory() {
                _super.apply(this, arguments);
            }
            BPFActivityDropHandlerFactory.prototype.createDropActivityController = function (slot) {
                return new ProcessDesigner.BPFActivityDropController(slot);
            };
            return BPFActivityDropHandlerFactory;
        })(GenericWorkflowDesigner.ActivityDropHandlerFactory);
        ProcessDesigner.BPFActivityDropHandlerFactory = BPFActivityDropHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFRootActivityTileInformation.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the root activity
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFRootActivityTileInformation = (function (_super) {
            __extends(BPFRootActivityTileInformation, _super);
            function BPFRootActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
            }
            BPFRootActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = "Internal : Root Tile";
                result["fontIconImage"] = "rootTileImage";
                return result;
            };
            return BPFRootActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BPFRootActivityTileInformation = BPFRootActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFStepActivityTileInformation.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the stage activity
//  </summary>
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFStepActivityTileInformation = (function (_super) {
            __extends(BPFStepActivityTileInformation, _super);
            function BPFStepActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.attributeName = "";
                this.stepName = "";
                this.StepActivityTemplate = "<span class=\"tileTitle\" title= \"<%- emptyTitleText %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis\" > <%- emptyTitleText  %></span></div><span class=\"tileInner ellipsis\"><%- stageName %></span></span></span> ";
                this.attributeName = model.attributeName;
                this.stepName = model.description;
            }
            BPFStepActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["stepName"] = this.stepName;
                result["emptyTitleText"] = this.attributeName;
                result["emptyTileTemplate"] = this.StepActivityTemplate;
                return result;
            };
            return BPFStepActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BPFStepActivityTileInformation = BPFStepActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="RootTileInformation.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of the Root Tile activity
// </summary>
//
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var RootActivityTileInformation = (function (_super) {
            __extends(RootActivityTileInformation, _super);
            function RootActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.activityTemplate = "<span class=\"tileTitle\" title=\"<%- Title %>\"><span class=\"tileTableCell\"><span class=\"tileInner ellipsis\"><%- Subtitle %></span>< span class=\"tileInner ellipsis\"><%- Title %></span></span></span>";
            }
            RootActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["tileclass"] = "stageTile";
                result["emptyTitleText"] = "Internal : Root Stage";
                return result;
            };
            return RootActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.RootActivityTileInformation = RootActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ProcessTileInformationFactory.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of the Process Tile Factory
// </summary>
//
//---------------------------------------------------------------------------------------------
/// <reference path="RootActivityTileInformation.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessTileInformationFactory = (function (_super) {
            __extends(ProcessTileInformationFactory, _super);
            function ProcessTileInformationFactory() {
                _super.apply(this, arguments);
            }
            ProcessTileInformationFactory.prototype.GetTileInformationForActivityModel = function (activityModel, specificItemId) {
                var activityType = activityModel.getActivityTypeID();
                switch (activityType) {
                    case ProcessDesigner.ProcessActivityType.Root:
                        return new ProcessDesigner.RootActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.ProcessActivityType.Condition:
                        return new ProcessDesigner.ConditionActivityTileInformation(activityModel, specificItemId);
                    default:
                        return _super.prototype.GetTileInformationForActivityModel.call(this, activityModel, specificItemId);
                }
            };
            ProcessTileInformationFactory.prototype.GetDataUriforImagePath = function (imagePath) {
                return null;
            };
            return ProcessTileInformationFactory;
        })(GenericWorkflowDesigner.DefaultTileInformationFactory);
        ProcessDesigner.ProcessTileInformationFactory = ProcessTileInformationFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFStageActivityTileInformation.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the stage activity
//  </summary>
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFStageActivityTileInformation = (function (_super) {
            __extends(BPFStageActivityTileInformation, _super);
            function BPFStageActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.entityName = "";
                this.stageName = "";
                this.StageActivityTemplate = "<span class=\"tileTitle\" title= \"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_MDDPropertyEntityName") + " <%- emptyTitleText %> " + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_PagePropertyDetails_PageName") + " <%- stageName %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis stringTruncation canvasAreaTileTitle1\" > <%- emptyTitleText  %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\" ><%- stageName %></span></span></span> ";
                this.entityName = model.entityName;
                this.stageName = model.displayName;
            }
            BPFStageActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["stageName"] = this.stageName;
                result["emptyTitleText"] = CommonTypes.Types.String.isNullOrEmpty(this.entityName) ? this.entityName : Xrm.Internal.getEntityDisplayName(this.entityName);
                result["emptyTileTemplate"] = this.StageActivityTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_TBX_Page_Activity_Name");
                return result;
            };
            return BPFStageActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BPFStageActivityTileInformation = BPFStageActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFTileInformationFactory.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the visibility activity
//  </summary>
// ---------------------------------------------------------------------------------------------
/// <reference path="../../../process/model/tileinformation/processtileinformationfactory.ts" />
/// <reference path="bpfstageactivitytileinformation.ts" />
/// <reference path="../../common/bpfactivitytype.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFTileInformationFactory = (function (_super) {
            __extends(BPFTileInformationFactory, _super);
            function BPFTileInformationFactory() {
                _super.apply(this, arguments);
            }
            BPFTileInformationFactory.prototype.GetTileInformationForActivityModel = function (activityModel, specificItemId) {
                switch (activityModel.getActivityTypeID()) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new ProcessDesigner.BPFStageActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.TBXActivityType.root:
                        return new ProcessDesigner.BPFRootActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.TBXActivityType.condition:
                        return new ProcessDesigner.ConditionActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.TBXActivityType.field:
                    case ProcessDesigner.TBXActivityType.label:
                    case ProcessDesigner.TBXActivityType.sectionLabel:
                        return new ProcessDesigner.BPFStepActivityTileInformation(activityModel, specificItemId);
                    default:
                        return _super.prototype.GetTileInformationForActivityModel.call(this, activityModel, specificItemId);
                }
            };
            BPFTileInformationFactory.prototype.GetDataUriforImagePath = function (imagePath) {
                return ProcessDesigner.TBXDesignerControl.dataBag.resources.getImageresource(imagePath);
            };
            BPFTileInformationFactory.prototype.GetLocalizedString = function (inputString) {
                return ProcessDesigner.TBXDesignerControl.dataBag.resources.getString(inputString);
            };
            return BPFTileInformationFactory;
        })(ProcessDesigner.ProcessTileInformationFactory);
        ProcessDesigner.BPFTileInformationFactory = BPFTileInformationFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFConnectActivityTileInformation.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the root activity
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFConnectActivityTileInformation = (function (_super) {
            __extends(BPFConnectActivityTileInformation, _super);
            function BPFConnectActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
            }
            BPFConnectActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["tileclass"] = "connectTile";
                result["emptyTitleText"] = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_BPFConnectActivityTileInformation");
                result["fontIconImage"] = "connectTileImage";
                return result;
            };
            return BPFConnectActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BPFConnectActivityTileInformation = BPFConnectActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFStageSlotTileHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BpfStageSlotTileHolderView = (function (_super) {
            __extends(BpfStageSlotTileHolderView, _super);
            function BpfStageSlotTileHolderView(stageModel) {
                _super.call(this, { model: stageModel });
            }
            BpfStageSlotTileHolderView.prototype.render = function () {
                _super.prototype.render.call(this);
                if (!GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                    var tileButtonView = new ProcessDesigner.TileButtonView(this.model, this.$el);
                    tileButtonView.render();
                }
                return this;
            };
            BpfStageSlotTileHolderView.prototype.setupEvents = function () {
                var self = this;
                this.listenTo(this.model.getActivity(), 'changeModel', function () {
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = false;
                    this.render();
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = true;
                });
                this.$el.on("click keydown", function (event) {
                    if (event.type == "click" || event.keyCode == 13) {
                        switch (ProcessDesigner.BPFToolBarView.addMode) {
                            case ProcessDesigner.BPFToolBarAddMode.AddStep:
                                var stepActivityType = self.GetStepActivityType();
                                var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_SlotGenerator_Title"), Tooltip: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileStepTooltip"), Image: "", DataURI: "", Alt: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileAltText"), FontIconImage: "", ActivityTypeID: stepActivityType });
                                GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                                ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                                var stepAdded = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                                if (stepAdded.length > 0) {
                                    var currentActivity = stepAdded[0];
                                    var parentStageId = currentActivity.parentStage.stageId;
                                    ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent("Menu", currentActivity.stepId, ProcessDesigner.TBXActivityType.field, parentStageId);
                                    ProcessDesigner.CanvasDisplayUtility.HandleStageDetailsOverlap();
                                }
                                break;
                            case ProcessDesigner.BPFToolBarAddMode.PasteStep:
                                if ((self.$el).hasClass('hoverOverDroppable')) {
                                    var pasteCmd = new ProcessDesigner.BPFPasteCommand();
                                    pasteCmd.pasteComponentAtSlot(self);
                                    ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                                }
                                break;
                            default:
                                self.tileClickedHandler(event);
                                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick);
                        }
                    }
                    $("#canvas").children(".slot.hoverOverDroppable").removeAttr('aria-label').removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                    $("#canvas").children(".slot.selected").removeClass("selected");
                    event.target.focus();
                    event.stopPropagation();
                });
                this.$el.on("mousedown", function (event) {
                    event.stopPropagation();
                });
            };
            BpfStageSlotTileHolderView.prototype.GetStepActivityType = function () {
                if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddField)
                    return ProcessDesigner.TBXActivityType.field;
                else if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddLabel)
                    return ProcessDesigner.TBXActivityType.label;
                else if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddSection)
                    return ProcessDesigner.TBXActivityType.sectionLabel;
            };
            BpfStageSlotTileHolderView.prototype.slotClick = function (event) {
                var currentTab = $(GenericWorkflowDesigner.toolpaneId);
                var activeTab = $(GenericWorkflowDesigner.toolpaneId).tabs('option', 'active');
                var propertyTabIndex = 1;
                var selectedTiles = $(this.$el).find('.selected');
                var isTileSelected = false;
                if (selectedTiles.length > 0) {
                    isTileSelected = true;
                }
                if (isTileSelected && activeTab == propertyTabIndex && !$(GenericWorkflowDesigner.toolpaneId).find("#stageProperty")) {
                    return;
                }
                $(".tileButtonDiv").removeClass("selected");
                $(".stageTile").removeClass("selected");
                $(".conditionTile").removeClass("selected");
                if (this.$el.children().find(".conditionTile").length == 1) {
                    this.$el.children().find(".conditionTile").addClass("selected");
                }
                if (this.$el.children().find(".stageTile").length == 1) {
                    this.$el.children().find(".stageTile").addClass("selected");
                }
                if ((".stage-detail-container")) {
                    $(".step-list-listitem.selected").removeClass("selected");
                    $('#DownArrow').attr("aria-disabled", true);
                    $('#DownArrow').addClass("disableArrowButton");
                    $('#UpArrow').attr("aria-disabled", true);
                    $('#UpArrow').addClass("disableArrowButton");
                }
                var clickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createClickHandler(this.model);
                clickHandler.click(this.$el);
                this.$el.focus();
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                event.stopPropagation();
            };
            BpfStageSlotTileHolderView.prototype.makeDroppable = function () {
                var self = this;
                this.$el.droppable({
                    tolerance: "pointer",
                    accept: function (element) {
                        if (!element.hasClass("step-list-listitem")) {
                            return GenericWorkflowDesigner.SlotBase.isValidDroppable(this.id, element.attr('id'));
                        }
                        else {
                            return false;
                        }
                    },
                    activate: function (event, ui) {
                        $(this).addClass("hoverOverDroppable").attr("aria-hidden", "false");
                    },
                    deactivate: function (event, ui) {
                        $(this).removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                    },
                    over: function (event, ui) {
                        $(this).addClass("hoverOverDroppableHighlight");
                    },
                    out: function (event, ui) {
                        $(this).removeClass("hoverOverDroppableHighlight");
                    },
                    drop: function (event, ui) {
                        if ($(".hoverOverDroppableHighlight").length > 1) {
                            $(this).removeClass("hoverOverDroppableHighlight");
                            return;
                        }
                        $(this).removeClass("hoverOverDroppableHighlight");
                        var droppedElement = ui.helper.data(GenericWorkflowDesigner.HelperElementView.modelDataKey);
                        var activityDropController = GenericWorkflowDesigner.Settings.activityDropHandlerFactory.createDropActivityController(self.model);
                        ProcessDesigner.ControlManager.CloseSeeDetails();
                        var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                        stopwatch.start();
                        activityDropController.dropLibraryElement(droppedElement).done(function (activity) {
                            GenericWorkflowDesigner.updateCurrentModel(activity);
                            ProcessDesigner.ControlManager.updateSlotCount(self);
                            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                        });
                        stopwatch.stop();
                        localStorage.setItem("PerfMarker_" + droppedElement.attributes.Title.replace("/", "").replace(/ /g, '') + "Drop", stopwatch.elapsedMilliseconds.toString());
                    }
                });
            };
            return BpfStageSlotTileHolderView;
        })(GenericWorkflowDesigner.SlotTileHolderView);
        ProcessDesigner.BpfStageSlotTileHolderView = BpfStageSlotTileHolderView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectorActivityListSubView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var ConnectorActivityListSubView = (function (_super) {
            __extends(ConnectorActivityListSubView, _super);
            function ConnectorActivityListSubView(option, activityItem, parentObj) {
                _super.call(this, {
                    el: activityItem
                });
                this.className = "activity-item";
                this.option = option;
                this.parentObj = parentObj;
            }
            ConnectorActivityListSubView.prototype.initialize = function () {
                this.itemTemplate = _.template(" <button id =\"<%- Title %>TileButton\" tabindex=\"-1\" class=\"connectactivityOptionTitle\" title= \"<%- Tooltip %>\"><%- Title %></span> ");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("click", function (event) {
                    self.ClickHandler(event);
                });
            };
            ConnectorActivityListSubView.prototype.render = function () {
                var itemText = this.option["connectorItemText"];
                var itemTooltip = this.option["connectorItemTooltip"];
                this.$el.append(this.itemTemplate({ Tooltip: itemTooltip, Title: itemText }));
                return this;
            };
            ConnectorActivityListSubView.prototype.alertDialog = function (title, message) {
                var dialogDetails = {
                    dialogTitle: title,
                    dialogMessage: message,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            ConnectorActivityListSubView.prototype.connectionActionConfirmationDialog = function (stageName) {
                var self = this;
                var dialogTitle, dialogMessage;
                if (this.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Connect) {
                    dialogTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ConnectMultipleActivity_Title");
                    dialogMessage = CommonTypes.Types.String.Format(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ConnectMultipleActivity_Warning"), stageName, ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Connect"));
                }
                else if (this.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Disconnect) {
                    dialogTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_DisconnectMultipleActivity_Title");
                    dialogMessage = CommonTypes.Types.String.Format(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ConnectMultipleActivity_Warning"), stageName, ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Disconnect"));
                }
                else if (this.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Reconnect) {
                    dialogTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ReconnectMultipleActivity_Title");
                    dialogMessage = CommonTypes.Types.String.Format(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ConnectMultipleActivity_Warning"), stageName, ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Reconnect"));
                }
                var dialogDetails = {
                    dialogTitle: dialogTitle,
                    dialogMessage: dialogMessage,
                    messageType: ProcessDesigner.TBXDialogMessageTypes.Warning,
                    yesCallbackAction: function () {
                        self.connectionActionConfirmedCallback(self);
                    },
                    noCallbackAction: function () {
                        self.connectionActionCanceledCallback();
                    }
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            ConnectorActivityListSubView.prototype.connectionActionConfirmedCallback = function (context) {
                var startConnectorID = "";
                var connectActivityID = "";
                var ifConditionBranchActivity = null;
                if (ConnectorActivityListSubView.startConnector instanceof ProcessDesigner.TBXPageActivity) {
                    startConnectorID = ConnectorActivityListSubView.startConnector.stageId;
                }
                if (context.connectActivity instanceof ProcessDesigner.TBXPageActivity) {
                    connectActivityID = context.connectActivity.stageId;
                }
                if (!CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.startConnector)) {
                    ifConditionBranchActivity = context.findIfConditionBranch(ConnectorActivityListSubView.startConnector);
                }
                if (context.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Connect) {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranchActivity) && !CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.startConnector) && !CommonTypes.Types.Object.isNullOrUndefined(context.connectActivity)) {
                        ProcessDesigner.TelemetryEventReporter.ReportTileConnectedTelemetryEvent(startConnectorID, "", connectActivityID);
                    }
                    context.connectTargetClickHandler();
                }
                else if (context.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Disconnect) {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranchActivity) && !CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.startConnector) && !CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.oldDefaultGlobal)) {
                        ProcessDesigner.TelemetryEventReporter.ReportTileDisconnectedTelemetryEvent(startConnectorID, "", ConnectorActivityListSubView.oldDefaultGlobal.stageId);
                    }
                    context.disconnectTargetHandler();
                }
                else if (context.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Reconnect) {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranchActivity) && !CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.startConnector) && !CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.oldDefaultGlobal) && !CommonTypes.Types.Object.isNullOrUndefined(context.connectActivity)) {
                        ProcessDesigner.TelemetryEventReporter.ReportTileReconnectedTelemetryEvent(startConnectorID, "", ConnectorActivityListSubView.oldDefaultGlobal.stageId, connectActivityID);
                    }
                    context.disConnect();
                    context.disconnectTargetHandler();
                    context.connectTargetClickHandler();
                }
            };
            ConnectorActivityListSubView.prototype.connectionActionCanceledCallback = function () {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                ProcessDesigner.ConnectorActivityListView.targetID = null;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                return;
            };
            ConnectorActivityListSubView.prototype.ClickHandler = function (event) {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                var self = this;
                var tileClass, select;
                var firstPoint = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities()[0];
                if (firstPoint) {
                    ProcessDesigner.ConnectorActivityListView.targetID = event.target.id;
                    if (firstPoint.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        select = $("#canvas").find(".selected")[1];
                        select = $("#canvas").find(select);
                    }
                    else
                        select = $("#canvas").find(".selected");
                    $("#" + firstPoint.id).attr("aria-label", ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_FirstEndPoint"));
                    this.notificationObj = new ProcessDesigner.NotificationStatusView("Empty");
                    var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                    var left = calc.computeLeft(firstPoint.getCol());
                    var top = calc.computeTop(firstPoint.getRow());
                    switch ($(event.currentTarget).attr("id").toString()) {
                        case ProcessDesigner.BPFConnectorActivityTypeCommandID.Connect:
                            ProcessDesigner.BPFToolBarView.connectMode = ProcessDesigner.BPFToolBarConnectMode.ConnectTile;
                            this.notificationObj.render("1st Point", left, top);
                            self.connectSecondPoint(firstPoint, "connect");
                            stopwatch.stop();
                            localStorage.setItem("ProcessDesignerControl_TBX_ShowConnectSecondPoint", stopwatch.elapsedMilliseconds.toString());
                            break;
                        case ProcessDesigner.BPFConnectorActivityTypeCommandID.Disconnect:
                            ProcessDesigner.BPFToolBarView.connectMode = ProcessDesigner.BPFToolBarConnectMode.DisconnectTile;
                            this.notificationObj.render("1st Point", left, top);
                            self.connectSecondPoint(firstPoint, "disconnect");
                            stopwatch.stop();
                            localStorage.setItem("ProcessDesignerControl_TBX_ShowDisconnectConfirm", stopwatch.elapsedMilliseconds.toString());
                            break;
                        case ProcessDesigner.BPFConnectorActivityTypeCommandID.Reconnect:
                            ProcessDesigner.BPFToolBarView.connectMode = ProcessDesigner.BPFToolBarConnectMode.ReconnectTile;
                            this.notificationObj.render("1st Point", left, top);
                            self.connectSecondPoint(firstPoint, "reconnect");
                            stopwatch.stop();
                            localStorage.setItem("ProcessDesignerControl_TBX_ShowReconnectSecondPoint", stopwatch.elapsedMilliseconds.toString());
                            break;
                        default:
                            ProcessDesigner.BPFToolBarView.connectMode = ProcessDesigner.BPFToolBarConnectMode.None;
                    }
                    ;
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(null);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                    $(".slot").unbind("keydown keypress");
                    ProcessDesigner.ControlManager.SetCanvasFocusEvent();
                    $(".selected.stageTile").removeClass("selected");
                    $(".selected.conditionTile").removeClass("selected");
                    $("#" + firstPoint.getActivityID()).find("#" + firstPoint.getActivityID()).addClass("selected");
                    $.find('.selected')[0].focus();
                    GenericWorkflowDesigner.currentModel = firstPoint;
                }
                tileClass = tileClass + ", .slot:has(" + tileClass + ")";
                $.event.trigger('ConnectButton', [tileClass]);
            };
            ConnectorActivityListSubView.prototype.getEligible = function () {
                return ConnectorActivityListSubView.eligible;
            };
            ConnectorActivityListSubView.prototype.getStart = function () {
                return ConnectorActivityListSubView.startConnector;
            };
            ConnectorActivityListSubView.prototype.findEligibleEndConnectorsForYesOrNoPath = function (dropActivity, checkNoPath) {
                var eligibleConnectors = [];
                var self = this;
                var children = dropActivity.getChildActivitiesSorted();
                var firstChildInPath = null;
                children.forEach(function (child) {
                    if ((!checkNoPath && child.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) || (checkNoPath && child.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch)) {
                        firstChildInPath = child;
                    }
                });
                if (!CommonTypes.Types.Object.isNullOrUndefined(firstChildInPath) && firstChildInPath instanceof ProcessDesigner.TBXPageActivity) {
                    var orderedChildren = firstChildInPath.getChildActivitiesSorted();
                    while (orderedChildren.length > 0 && !CommonTypes.Types.Object.isNullOrUndefined(orderedChildren[0]) && orderedChildren[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        if (orderedChildren[0] instanceof ProcessDesigner.TBXPageActivity) {
                            eligibleConnectors.push(orderedChildren[0]);
                        }
                        orderedChildren = orderedChildren[0].getChildActivitiesSorted();
                    }
                }
                return eligibleConnectors;
            };
            ConnectorActivityListSubView.prototype.findEligibleEndConnectorsForDefaultPath = function (defaultPathStage) {
                var eligibleConnectors = [];
                var self = this;
                var orderedChildren = defaultPathStage.getChildActivitiesSorted();
                while (orderedChildren.length > 0 && !CommonTypes.Types.Object.isNullOrUndefined(orderedChildren[0]) && orderedChildren[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                    if (orderedChildren[0] instanceof ProcessDesigner.TBXPageActivity && orderedChildren[0].getActivityID() != ConnectorActivityListSubView.oldDefaultGlobal.getActivityID()) {
                        eligibleConnectors.push(orderedChildren[0]);
                    }
                    orderedChildren = orderedChildren[0].getChildActivitiesSorted();
                }
                return eligibleConnectors;
            };
            ConnectorActivityListSubView.prototype.disConnect = function () {
                var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var topOfDefault = calc.computeTop(ConnectorActivityListSubView.oldDefaultGlobal.getRow());
                var leftOfDefault = calc.computeLeft(ConnectorActivityListSubView.oldDefaultGlobal.getCol());
                var hitOfDefault;
                var connectHitIdOfDefault = '#connect-hitOfDefault';
                $(connectHitIdOfDefault).remove();
                if (GenericWorkflowDesigner.Settings.renderRTL)
                    hitOfDefault = '<div id="' + ConnectorActivityListSubView.oldDefaultGlobal.getActivityID() + '" style=" right:' + leftOfDefault + 'px; top:' + topOfDefault + 'px; "></div>';
                else
                    hitOfDefault = '<div id="' + ConnectorActivityListSubView.oldDefaultGlobal.getActivityID() + '" style=" left:' + leftOfDefault + 'px; top:' + topOfDefault + 'px; "></div>';
                hitOfDefault = $(hitOfDefault).addClass("connectorSecondPoint");
                hitOfDefault.on("mousedown", function (event) {
                    event.stopPropagation();
                });
                $("#canvas").append(hitOfDefault);
                this.notificationObj.render("2nd Point", leftOfDefault, topOfDefault);
            };
            ConnectorActivityListSubView.prototype.disconnectOldDefault = function () {
                var self = this;
                var conditionActivity = ConnectorActivityListSubView.dropActivityGlobal;
                var oldDefault = ConnectorActivityListSubView.oldDefaultGlobal;
                var attachmentPoint = this.findLastActivityInIfBranch(conditionActivity);
                oldDefault.setParentActivityID(attachmentPoint.getActivityID());
                if (attachmentPoint.getActivityID() == conditionActivity.getActivityID()) {
                    oldDefault.setParentBranchID(ProcessDesigner.DefaultBranchIndices.YesBranch);
                }
                else {
                    oldDefault.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                }
                ConnectorActivityListSubView.startConnector.save();
                $("#canvas").off('click');
                ProcessDesigner.ConnectorActivityListView.targetID = null;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            ConnectorActivityListSubView.prototype.disconnectTargetHandler = function () {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                this.disconnectOldDefault();
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_DisconnectConnector", stopwatch.elapsedMilliseconds.toString());
            };
            ConnectorActivityListSubView.prototype.connectTargetClickHandler = function () {
                var self = this;
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                var ifConditionBranch = self.findIfConditionBranch(ConnectorActivityListSubView.startConnector);
                self.connectActivity.setParentActivityID(ifConditionBranch.getActivityID());
                self.connectActivity.setParentBranchID(ProcessDesigner.branchType.Default);
                self.connectActivity.save();
                $("#canvas").off('click');
                ProcessDesigner.ConnectorActivityListView.targetID = null;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_ConnectUsingConnector", stopwatch.elapsedMilliseconds.toString());
            };
            ConnectorActivityListSubView.prototype.drawTargetView = function (activity) {
                var self = this;
                var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var top = calc.computeTop(activity.getRow());
                var left = calc.computeLeft(activity.getCol());
                var hit;
                var connectHitId = '#connect-hit';
                $(connectHitId).remove();
                if (GenericWorkflowDesigner.Settings.renderRTL)
                    hit = '<div id="' + activity.getActivityID() + '" style=" right:' + left + 'px; top:' + top + 'px; "></div>';
                else
                    hit = '<div id="' + activity.getActivityID() + '" style=" left:' + left + 'px; top:' + top + 'px; "></div>';
                hit = $(hit).addClass("connectorSecondPoint");
                $("#" + activity.getActivityID()).attr("aria-label", ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_SecondEndPoint"));
                hit.on("mousedown", function (event) {
                    event.stopPropagation();
                });
                $("#canvas").append(hit);
                self.notificationObj.render("2nd Point", left, top);
                $("#canvas").off('click keypress', '#' + activity.getActivityID());
                $("#canvas").on('click keypress', '#' + activity.getActivityID(), function (event) {
                    if (event.type == "keypress" && (event.keyCode != 13 && event.keyCode != 32))
                        return;
                    self.connectActivity = activity;
                    var stageBeforeCondition = null;
                    var conditionBlockIfBranch = self.findIfConditionBranch(ConnectorActivityListSubView.startConnector);
                    if (conditionBlockIfBranch != null) {
                        if (self.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Reconnect) {
                            var parentActivity = activity, outside = false;
                            while (parentActivity != null && parentActivity.getParent() != null) {
                                if (parentActivity instanceof ProcessDesigner.TBXPageActivity && parentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity && parentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                                    if (parentActivity.getParent().getActivityID() == conditionBlockIfBranch.getActivityID()) {
                                        outside = true;
                                        break;
                                    }
                                }
                                parentActivity = parentActivity.getParent();
                            }
                            if (outside) {
                                stageBeforeCondition = parentActivity.getParent().getParent();
                            }
                            else {
                                stageBeforeCondition = self.findIfConditionBranch(activity).getParent();
                            }
                        }
                        else if (self.selectedConnectionMode == ProcessDesigner.BPFConnectorActivityTypeCommandID.Connect) {
                            stageBeforeCondition = self.findIfConditionBranch(activity).getParent();
                        }
                        var numberOfBranchesInConditionBlock = self.getNumberOfBranches(conditionBlockIfBranch);
                        if (numberOfBranchesInConditionBlock >= ConnectorActivityListSubView.minimumNumberOfBranchesForConnectorPrompt) {
                            self.connectionActionConfirmationDialog(conditionBlockIfBranch.getParent().displayName);
                        }
                        else {
                            self.connectionActionConfirmedCallback(self);
                        }
                    }
                });
            };
            ConnectorActivityListSubView.prototype.findIfChild = function (ifChild, activity) {
                if (ifChild) {
                    var found = false, branchID;
                    var lastNodeIfChild = ifChild;
                    while (ifChild && !found) {
                        if (ifChild.getActivityID() == activity.getActivityID()) {
                            ConnectorActivityListSubView.inside = true;
                        }
                        lastNodeIfChild = ifChild;
                        if (ifChild.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                            var tempChilds = ifChild.getChildActivitiesSorted();
                            var tempLength = tempChilds.length;
                            switch (tempLength) {
                                case 1:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            ifChild = ifChild.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            found = true;
                                            lastNodeIfChild = ifChild;
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 2:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            ifChild = ifChild.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            found = true;
                                            lastNodeIfChild = ifChild;
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 3:
                                    ifChild = ifChild.getChildActivitiesSorted()[0];
                                    break;
                            }
                        }
                        else {
                            ifChild = ifChild.getChildActivitiesSorted()[0];
                        }
                    }
                    return lastNodeIfChild;
                }
                else
                    return null;
            };
            ConnectorActivityListSubView.prototype.findLastNodeDefaultChild = function (oldDefault, activity) {
                if (oldDefault) {
                    var found = false, branchID;
                    var tempOldDefault = oldDefault;
                    var lastNodeDefaultChild = oldDefault;
                    while (tempOldDefault && tempOldDefault.getActivityID() != activity.getActivityID() && !found) {
                        lastNodeDefaultChild = tempOldDefault;
                        if (tempOldDefault.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                            var tempChilds = tempOldDefault.getChildActivitiesSorted();
                            var tempLength = tempChilds.length;
                            switch (tempLength) {
                                case 1:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 2:
                                    branchID = tempChilds[0].getParentBranchID();
                                    switch (branchID) {
                                        case ProcessDesigner.branchType.Default:
                                            tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                            break;
                                        case ProcessDesigner.branchType.If:
                                            break;
                                        case ProcessDesigner.branchType.Else:
                                            break;
                                    }
                                    ;
                                    break;
                                case 3:
                                    tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                    break;
                            }
                        }
                        else {
                            tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                        }
                    }
                    return lastNodeDefaultChild;
                }
                else
                    return null;
            };
            ConnectorActivityListSubView.prototype.findIfConditionBranch = function (currentActivity) {
                var parentCondition = this.findParentConditionBranch(currentActivity);
                while (parentCondition instanceof ProcessDesigner.TBXConditionActivity && parentCondition.getParent() instanceof ProcessDesigner.TBXConditionActivity && parentCondition.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                    parentCondition = parentCondition.getParent();
                }
                return parentCondition;
            };
            ConnectorActivityListSubView.prototype.findParentConditionBranch = function (currentActivity) {
                if (CommonTypes.Types.Object.isNullOrUndefined(currentActivity)) {
                    return null;
                }
                else if (currentActivity instanceof ProcessDesigner.TBXConditionActivity) {
                    return currentActivity;
                }
                else {
                    if (currentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity && currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        currentActivity = currentActivity.getParent();
                    }
                    return this.findParentConditionBranch(currentActivity.getParent());
                }
            };
            ConnectorActivityListSubView.prototype.getNumberOfBranches = function (branch) {
                var childrenOfBranch = branch.getChildActivitiesSorted();
                var elseActivity = null;
                childrenOfBranch.forEach(function (activity) {
                    if (activity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        elseActivity = activity;
                    }
                });
                if (elseActivity == null) {
                    return 1;
                }
                else if (elseActivity instanceof ProcessDesigner.TBXPageActivity) {
                    return 2;
                }
                else {
                    return 1 + this.getNumberOfBranches(elseActivity);
                }
            };
            ConnectorActivityListSubView.prototype.findLastActivityInIfBranch = function (ifBranch) {
                var lastActivity = ifBranch;
                var self = this;
                ifBranch.getChildActivitiesSorted().forEach(function (childActivity) {
                    if (childActivity instanceof ProcessDesigner.TBXPageActivity && childActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                        lastActivity = null;
                        var finalStage = childActivity;
                        while (lastActivity == null) {
                            var childrenOfStage = finalStage.getChildActivitiesSorted();
                            if (childrenOfStage.length == 0) {
                                lastActivity = finalStage;
                            }
                            else if (childrenOfStage[0] instanceof ProcessDesigner.TBXPageActivity) {
                                finalStage = childrenOfStage[0];
                            }
                            else {
                                var stageAfterConditionBlock = null;
                                childrenOfStage[0].getChildActivitiesSorted().forEach(function (childOfIfConditionBranch) {
                                    if (childOfIfConditionBranch instanceof ProcessDesigner.TBXPageActivity && childOfIfConditionBranch.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                                        stageAfterConditionBlock = childOfIfConditionBranch;
                                    }
                                });
                                if (stageAfterConditionBlock != null) {
                                    finalStage = stageAfterConditionBlock;
                                }
                                else {
                                    lastActivity = childrenOfStage[0];
                                }
                            }
                        }
                    }
                });
                return lastActivity;
            };
            ConnectorActivityListSubView.prototype.isInIfBranch = function (currentActivity, parentCondition) {
                if (currentActivity == null) {
                    return false;
                }
                else if (currentActivity instanceof ProcessDesigner.TBXPageActivity) {
                    if (currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        return false;
                    }
                    else if (currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                        if (currentActivity.getParent().getActivityID() == parentCondition.getActivityID()) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else if (currentActivity instanceof ProcessDesigner.ConditionActivity && currentActivity.getActivityID() == parentCondition.getActivityID()) {
                    return true;
                }
                return this.isInIfBranch(currentActivity.getParent(), parentCondition);
            };
            ConnectorActivityListSubView.prototype.isInElseBranch = function (currentActivity, parentCondition) {
                if (currentActivity == null) {
                    return false;
                }
                else if (currentActivity instanceof ProcessDesigner.TBXPageActivity) {
                    if (currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        if (currentActivity.getParent().getActivityID() == parentCondition.getActivityID()) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else if (currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.YesBranch) {
                        return false;
                    }
                }
                else if (currentActivity instanceof ProcessDesigner.ConditionActivity && currentActivity.getActivityID() == parentCondition.getActivityID()) {
                    return true;
                }
                return this.isInElseBranch(currentActivity.getParent(), parentCondition);
            };
            ConnectorActivityListSubView.prototype.fillAllGlobalValues = function (dropActivity) {
                var children = dropActivity.getChildActivitiesSorted();
                ConnectorActivityListSubView.eligible = [];
                var self = this;
                var branchActivitiesByConditionBlock = ProcessDesigner.TBXConditionActivity.groupBranchesByConditionBlock(GenericWorkflowDesigner.Settings.workflowTree.getActivities());
                var ifConditionBranch = this.findIfConditionBranch(dropActivity);
                if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranch)) {
                    var conditions = branchActivitiesByConditionBlock[ifConditionBranch.getActivityID()];
                    var ifConditionBranchChildren = ifConditionBranch.getChildActivitiesSorted();
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ifConditionBranchChildren[0]) && ifConditionBranchChildren[0] instanceof ProcessDesigner.TBXPageActivity && ifConditionBranchChildren[0].getParentBranchID() == ProcessDesigner.branchType.Default)
                        ConnectorActivityListSubView.oldDefaultGlobal = ifConditionBranchChildren[0];
                    else
                        ConnectorActivityListSubView.oldDefaultGlobal = null;
                    ConnectorActivityListSubView.startConnector = dropActivity;
                    if (dropActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                        if (children.length == 0) {
                            conditions.forEach(function (condition) {
                                var conditionChildren = condition.getChildActivitiesSorted(), containsElseBranch = false;
                                conditionChildren.forEach(function (child) {
                                    if (child instanceof ProcessDesigner.TBXPageActivity && child.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                                        containsElseBranch = true;
                                    }
                                });
                                if (condition.getActivityID() != self.findParentConditionBranch(dropActivity).getActivityID() || containsElseBranch) {
                                    ConnectorActivityListSubView.dropActivityGlobal = condition;
                                    if (condition.getActivityID() != self.findParentConditionBranch(dropActivity).getActivityID()) {
                                        ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForYesOrNoPath(condition, false));
                                        if (containsElseBranch) {
                                            ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForYesOrNoPath(condition, true));
                                        }
                                    }
                                    else {
                                        ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForYesOrNoPath(condition, !self.isInElseBranch(dropActivity, condition)));
                                    }
                                }
                            });
                            if (!CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.oldDefaultGlobal)) {
                                ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForDefaultPath(ConnectorActivityListSubView.oldDefaultGlobal));
                            }
                        }
                    }
                    else {
                        if (dropActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition && (children.length == 0 || (children.length == 1 && children[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch))) {
                            conditions.forEach(function (condition) {
                                if (condition.getActivityID() != dropActivity.getActivityID()) {
                                    ConnectorActivityListSubView.dropActivityGlobal = condition;
                                    var conditionChilds = condition.getChildActivitiesSorted();
                                    ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForYesOrNoPath(condition, false));
                                }
                            });
                            if (!CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.oldDefaultGlobal)) {
                                ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForDefaultPath(ConnectorActivityListSubView.oldDefaultGlobal));
                            }
                        }
                        else if (dropActivity.getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                            ConnectorActivityListSubView.dropActivityGlobal = dropActivity;
                            ConnectorActivityListSubView.eligible = this.findEligibleEndConnectorsForYesOrNoPath(dropActivity, false);
                            if (!CommonTypes.Types.Object.isNullOrUndefined(ConnectorActivityListSubView.oldDefaultGlobal)) {
                                ConnectorActivityListSubView.eligible = ConnectorActivityListSubView.eligible.concat(self.findEligibleEndConnectorsForDefaultPath(ConnectorActivityListSubView.oldDefaultGlobal));
                            }
                        }
                    }
                }
            };
            ConnectorActivityListSubView.prototype.connectSecondPoint = function (dropActivity, action) {
                var self = this;
                switch (action) {
                    case "connect":
                        if (ConnectorActivityListSubView.eligible.length > 0) {
                            ConnectorActivityListSubView.eligible.forEach(function (activity) {
                                self.selectedConnectionMode = ProcessDesigner.BPFConnectorActivityTypeCommandID.Connect;
                                self.drawTargetView(activity);
                            });
                        }
                        break;
                    case "disconnect":
                        ConnectorActivityListSubView.oldDefaultGlobal = null;
                        var conditionBlockIfActivity = self.findIfConditionBranch(dropActivity);
                        ConnectorActivityListSubView.dropActivityGlobal = conditionBlockIfActivity;
                        conditionBlockIfActivity.getChildActivitiesSorted().forEach(function (childActivity) {
                            if (childActivity instanceof ProcessDesigner.TBXPageActivity && childActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                                ConnectorActivityListSubView.oldDefaultGlobal = childActivity;
                            }
                        });
                        if (ConnectorActivityListSubView.oldDefaultGlobal) {
                            this.disConnect();
                            this.selectedConnectionMode = ProcessDesigner.BPFConnectorActivityTypeCommandID.Disconnect;
                            var numberOfBranchesInConditionBlock = this.getNumberOfBranches(conditionBlockIfActivity);
                            if (numberOfBranchesInConditionBlock >= ConnectorActivityListSubView.minimumNumberOfBranchesForConnectorPrompt) {
                                this.connectionActionConfirmationDialog(conditionBlockIfActivity.getParent().displayName);
                            }
                            else {
                                this.connectionActionConfirmedCallback(this);
                            }
                        }
                        break;
                    case "reconnect":
                        if (ConnectorActivityListSubView.eligible.length > 0) {
                            ConnectorActivityListSubView.oldDefaultGlobal = null;
                            var conditionBlockIfActivity = self.findIfConditionBranch(dropActivity);
                            ConnectorActivityListSubView.dropActivityGlobal = conditionBlockIfActivity;
                            conditionBlockIfActivity.getChildActivitiesSorted().forEach(function (childActivity) {
                                if (childActivity instanceof ProcessDesigner.TBXPageActivity && childActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                                    ConnectorActivityListSubView.oldDefaultGlobal = childActivity;
                                }
                            });
                            if (ConnectorActivityListSubView.oldDefaultGlobal) {
                                ConnectorActivityListSubView.eligible.forEach(function (activity) {
                                    self.selectedConnectionMode = ProcessDesigner.BPFConnectorActivityTypeCommandID.Reconnect;
                                    self.drawTargetView(activity);
                                });
                            }
                        }
                        break;
                }
                ;
            };
            ConnectorActivityListSubView.minimumNumberOfBranchesForConnectorPrompt = 3;
            return ConnectorActivityListSubView;
        })(Backbone.View);
        ProcessDesigner.ConnectorActivityListSubView = ConnectorActivityListSubView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectorActivityListView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var ConnectorActivityListView = (function (_super) {
            __extends(ConnectorActivityListView, _super);
            function ConnectorActivityListView() {
                _super.call(this, {
                    el: $('#connector')
                });
                this.render();
                $('#ConnectTileButton').prop('disabled', true);
                $('#DisconnectTileButton').prop('disabled', true);
                $('#ReconnectTileButton').prop('disabled', true);
                $('#ConnectTileButton').attr("aria-disabled", true);
                $('#DisconnectTileButton').attr("aria-disabled", true);
                $('#ReconnectTileButton').attr("aria-disabled", true);
                if (!ConnectorActivityListView.targetID) {
                    $('#connector').prop('disabled', false);
                    $('#connector').attr("aria-disabled", false);
                    $('#toolBarItemTitleConnector').removeClass('utilityBarItem-disabled-mode');
                    $('#toolBarItemTitleConnector').addClass('utilityBarItem-normal-mode');
                    var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    var conditionBlockIsConnected = (!CommonTypes.Types.Object.isNullOrUndefined(ProcessDesigner.ConnectorActivityListSubView.oldDefaultGlobal));
                    if (!conditionBlockIsConnected && !CommonTypes.Types.Object.isNullOrUndefined(ProcessDesigner.ConnectorActivityListSubView.eligible) && ProcessDesigner.ConnectorActivityListSubView.eligible.length > 0) {
                        $('#ConnectTileButton').prop('disabled', false);
                        $('#ConnectTileButton').attr("aria-disabled", false);
                    }
                    else if (conditionBlockIsConnected) {
                        if (!CommonTypes.Types.Object.isNullOrUndefined(ProcessDesigner.ConnectorActivityListSubView.eligible) && ProcessDesigner.ConnectorActivityListSubView.eligible.length > 0) {
                            $('#ReconnectTileButton').prop('disabled', false);
                            $('#ReconnectTileButton').attr("aria-disabled", false);
                        }
                        $('#DisconnectTileButton').prop('disabled', false);
                        $('#DisconnectTileButton').attr("aria-disabled", false);
                    }
                    for (var i = 0; i < $(".activity-list").find("button").length; i++) {
                        var currentButton = $(".activity-list").find("button")[i];
                        if ($(currentButton).attr("aria-disabled") == "false") {
                            $(currentButton).focus();
                            break;
                        }
                    }
                }
            }
            ConnectorActivityListView.prototype.initialize = function () {
                ConnectorActivityListView.removeConnectorButton();
            };
            ConnectorActivityListView.removeConnectorButton = function () {
                $('#connector').prop('disabled', true);
                $('#connector').attr("aria-disabled", true);
                $('#toolBarItemTitleConnector').addClass('utilityBarItem-disabled-mode');
                var toolbar = $("#toolBarRow");
                var activityListContainer = toolbar.find(".connectactivity-list-container");
                if (activityListContainer.length > 0) {
                    toolbar.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
                    toolbar.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
                    activityListContainer.remove();
                    if (typeof event != 'undefined')
                        event.stopPropagation();
                    return;
                }
            };
            ConnectorActivityListView.prototype.render = function () {
                var div = $('<div class="connectactivity-list-container"></div>');
                var listUl = $('<ul class="activity-list"></ul>');
                var libraryGroups_internal = [];
                libraryGroups_internal.push("Connect");
                libraryGroups_internal.push("Disconnect");
                libraryGroups_internal.push("Reconnect");
                var libraryGroups = [];
                libraryGroups.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Connect"));
                libraryGroups.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Disconnect"));
                libraryGroups.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_Reconnect"));
                var connectorActivityListItems = [];
                connectorActivityListItems.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_ConnectTooltip"));
                connectorActivityListItems.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_DisconnectTooltip"));
                connectorActivityListItems.push(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_ReconnectTooltip"));
                if (this.$el) {
                    this.$el.find(".connectactivity-list-container").remove();
                    this.$el.parent().append(div);
                    $(div).append(listUl);
                    var categoryUl = $("<ul class='activity-list-category'></ul>");
                    $(listUl).append(categoryUl);
                    for (var j = 0; j < libraryGroups.length; j++) {
                        var activityName = libraryGroups_internal[j];
                        var listLi = $("<li class='activity-list-listitem' id='" + activityName + "TileCommand' tabindex='-1'></li>");
                        var templateItems = [];
                        templateItems["connectorItemText"] = libraryGroups[j];
                        templateItems["connectorItemTooltip"] = connectorActivityListItems[j];
                        var elem1 = new ProcessDesigner.ConnectorActivityListSubView(templateItems, $(listLi), this);
                        elem1.render();
                        $(categoryUl).append(elem1.el);
                    }
                }
                $(".connectactivity-list-container").keydown(function (event) {
                    if (event.keyCode == 27) {
                        $(this).hide();
                        $("#connector").focus();
                    }
                    if (event.keyCode == 9) {
                        $(this).hide();
                    }
                });
                $(".activity-list-listitem").keydown(function (event) {
                    if (event.keyCode == 13) {
                        $(event.target).focus();
                        $(event.target).click();
                    }
                    if (event.keyCode == 38) {
                        if ($(event.target.parentElement.previousSibling).length > 0) {
                            var prevAll = $(event.target.parentElement).prevAll();
                            prevAll.each(function (index) {
                                var childButton = $(this).find("button");
                                if ($(childButton).attr("aria-disabled") == "false") {
                                    $(childButton).focus();
                                    return false;
                                }
                            });
                        }
                    }
                    if (event.keyCode == 40) {
                        if ($(event.target.parentElement.nextSibling).length > 0) {
                            var nextAll = $(event.target.parentElement).nextAll();
                            nextAll.each(function (index) {
                                var childButton = $(this).find("button");
                                if ($(childButton).attr("aria-disabled") == "false") {
                                    $(childButton).focus();
                                    return false;
                                }
                            });
                        }
                    }
                });
            };
            ConnectorActivityListView.shouldEnableConnectorMenu = function (selectedActivity) {
                var shouldEnableMenu = false;
                var conditionBlockIsConnected = false;
                var conditionBlockIfBranch = ProcessDesigner.ConnectorActivityListSubView.prototype.findIfConditionBranch(selectedActivity);
                if (!CommonTypes.Types.Object.isNullOrUndefined(conditionBlockIfBranch)) {
                    var conditionBlockIfBranchChildren = conditionBlockIfBranch.getChildActivitiesSorted();
                    if (conditionBlockIfBranchChildren[0] instanceof ProcessDesigner.TBXPageActivity && conditionBlockIfBranchChildren[0].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                        conditionBlockIsConnected = true;
                    }
                    if (!conditionBlockIsConnected && ProcessDesigner.ConnectorActivityListSubView.eligible && ProcessDesigner.ConnectorActivityListSubView.eligible.length > 0) {
                        shouldEnableMenu = true;
                    }
                    else if (conditionBlockIsConnected) {
                        var childrenOfActivity = selectedActivity.getChildActivitiesSorted();
                        if (selectedActivity.getActivityID() == conditionBlockIfBranch.getActivityID()) {
                            shouldEnableMenu = true;
                        }
                        else if (selectedActivity instanceof ProcessDesigner.TBXPageActivity && childrenOfActivity.length == 0) {
                            shouldEnableMenu = true;
                        }
                        else if (selectedActivity instanceof ProcessDesigner.TBXConditionActivity && selectedActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                            var currentActivity = selectedActivity;
                            while (currentActivity.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch && currentActivity.getParent() instanceof ProcessDesigner.TBXConditionActivity) {
                                currentActivity = currentActivity.getParent();
                            }
                            if (!CommonTypes.Types.Object.isNullOrUndefined(currentActivity) && currentActivity.getActivityID() == conditionBlockIfBranch.getActivityID()) {
                                shouldEnableMenu = true;
                            }
                        }
                    }
                }
                return shouldEnableMenu;
            };
            return ConnectorActivityListView;
        })(Backbone.View);
        ProcessDesigner.ConnectorActivityListView = ConnectorActivityListView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="NotificationStatusView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var NotificationStatusView = (function (_super) {
            __extends(NotificationStatusView, _super);
            function NotificationStatusView(message) {
                _super.call(this);
            }
            NotificationStatusView.prototype.initialize = function () {
            };
            NotificationStatusView.prototype.render = function (point, left, top) {
                var notificationMsg;
                top = top + GenericWorkflowDesigner.Settings.layoutProperties.height;
                var localizedPoint = "";
                if (point == "1st Point")
                    localizedPoint = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_FirstPoint");
                else if (point == "2nd Point") {
                    localizedPoint = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Connector_SecondPoint");
                }
                if (GenericWorkflowDesigner.Settings.renderRTL)
                    notificationMsg = '<div class="notificationMessage" style=" right:' + left + 'px; top:' + top + 'px; "> ' + localizedPoint + ' </div>';
                else
                    notificationMsg = '<div class="notificationMessage" style=" left:' + left + 'px; top:' + top + 'px; "> ' + localizedPoint + ' </div>';
                if (point == "1st Point")
                    notificationMsg = $(notificationMsg).addClass("connectFirstPointNotificationMessage");
                else if (point == "2nd Point")
                    notificationMsg = $(notificationMsg).addClass("connectSecondPointNotificationMessage");
                $("#canvas").append(notificationMsg);
            };
            return NotificationStatusView;
        })(Backbone.View);
        ProcessDesigner.NotificationStatusView = NotificationStatusView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="EditStepView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var EditStepView = (function (_super) {
            __extends(EditStepView, _super);
            function EditStepView(model, el) {
                _super.call(this, {
                    model: model,
                    el: el
                });
                this.className = "step-item";
            }
            EditStepView.prototype.initialize = function () {
                var stepTileClassName = (this.model.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? "stepTile" : (this.model.getActivityTypeID() == ProcessDesigner.TBXActivityType.label) ? "labelTile" : "sectionLabelTile";
                var stepTileSymbolClassName = (this.model.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? "stepTileSymbol" : "labelTileSymbol";
                var stepTileTypeLabel = (this.model.getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? "ProcessDesignerControl_TBX_LibraryTileName_field" : "ProcessDesignerControl_TBX_LibraryTileName_label";
                this.stepTemplate = _.template(" <div class=\"" + stepTileClassName + "\" title= \"<%- Title %>\"><div class=\"parentStepDiv\"><span class=\"stepImageWrapper\"><span class=\"CCFSymbolFont " + stepTileSymbolClassName + " stepImageWrapper-size\"></span></span></div><div class=\"editViewTileTitle\" ><div id=\"stepSequence\" class=\"canvasAreaTileTitle5 truncateString\">" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString(stepTileTypeLabel) + " #<%- Sequence %></div><div id=\"stepTitle\" class=\"canvasAreaTileTitle5\"><%- Title %></div></div><div class=\"subViewTileError\" title= \"<%- ErrorToolTip %>\"><span class=\"CCFSymbolFont errorNotificationSymbol notification- fontIcons - size \"></span></div></div>");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("click keydown", function (event) {
                    if (event.type == "click" || event.keyCode == 13) {
                        self.stepClickedHandler(event);
                        $(".step-list-listitem.selected").addClass("unselected");
                        $(".step-list-listitem.selected").removeClass("selected");
                        self.$el.addClass('selected');
                        self.$el.removeClass('unselected');
                        if (($(".stage-detail-container").length > 0) && ($(".stageTile.selected").length > 0) && ("details_" + $(".stageTile.selected").attr("id") == $(".stage-detail-container").attr("id"))) {
                            $(".stage-detail-container").addClass("selected");
                        }
                    }
                    this.focus();
                });
                this.listenTo(this.model, 'changeModel', this.render);
            };
            EditStepView.prototype.render = function () {
                var step = this.model;
                var errorToolTip = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ErrorOn_Prefix") + " " + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ErrorOn_Suffix") + " " + step.description;
                this.$el.find('.stepTile').remove();
                this.$el.find('.labelTile').remove();
                this.$el.find('.sectionLabelTile').remove();
                this.$el.append(this.stepTemplate({ Title: step.description, Sequence: step.sequence, ErrorToolTip: errorToolTip }));
                return this;
            };
            EditStepView.prototype.remove = function () {
                this.undelegateEvents();
                this.$el.removeData().unbind();
                this.model.off();
                this.stopListening(this.model);
                _super.prototype.remove.call(this);
            };
            EditStepView.prototype.stepClickedHandler = function (event) {
                event.stopPropagation();
                var clickHandler = new GenericWorkflowDesigner.DefaultActivityClickHandler(this.model);
                clickHandler.click(this.$el);
                GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                var step = this.model;
                var stage = step.parentStage;
                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(step.stepId, step.getActivityTypeID(), stage.stageId);
            };
            return EditStepView;
        })(Backbone.View);
        ProcessDesigner.EditStepView = EditStepView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="AddGlobalWorkflowButtonView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var AddGlobalWorkflowButtonView = (function (_super) {
            __extends(AddGlobalWorkflowButtonView, _super);
            function AddGlobalWorkflowButtonView(title, buttonIcon) {
                _super.call(this);
                this._WorkflowButtonIcon = buttonIcon;
                this._worflowButtonTitle = title;
                this._buttonId = title.replace(/\s/g, '');
                this._buttonStatusId = this._buttonId + "Status";
                this._buttonIconId = this._buttonId + "Icon";
                this._workflowStatus = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_GlobalButton_Inactive_Status");
            }
            AddGlobalWorkflowButtonView.prototype.initialize = function () {
                this._workflowList = new Array();
                this._GlobalButtonAreaTemplate = _.template("<td id=\"<%- this._buttonIconId %>\" style=\"height:30px; width:15px\"><span class=\"CCFSymbolFont <%- this._WorkflowButtonIcon%> global-fontIcons-size\" style=\"color:white;\"></td>"
                    + "<td id=\"<%- this._buttonId %>\" class = \"globalButton\"></td>"
                    + "<td id=\"<%- this._buttonStatusId %>\" class=\"globalbuttonStatusText\">(<%- this._workflowStatus%>)</td>"
                    + "<td id=\"buttonSeperator\" class=globalButtonSeperator></td>");
            };
            AddGlobalWorkflowButtonView.prototype.showButtonIcon = function () {
                var self = this;
                var showbuttonIcon = _.template("<td id=\"finishWorkflowIcon\" style=\"height:30px; width:15px\"><span class=\"CCFSymbolFont flagSymbol global-fontIcons-size\"></td>");
                $("#globalbuttonArea").append(showbuttonIcon);
            };
            AddGlobalWorkflowButtonView.prototype.showButtonStatus = function () {
                var self = this;
                var id = "#" + self._buttonStatusId;
                var self = this;
                var result = {
                    workflowStatus: this._workflowStatus,
                    showStatusTemplate: '<span class="globalSlotText" >(<%- workflowStatus%>)<span>'
                };
                var showStatusTemplate = _.template(result.showStatusTemplate);
                $(id).html("");
                $(id).append(showStatusTemplate(result));
                $(id).on("click", function (event) {
                    self.showWorkflows();
                });
            };
            AddGlobalWorkflowButtonView.prototype.showbutton = function (activity) {
                var self = this;
                var id = "#" + self._buttonId;
                var GlobalButtonHolderView = new MscrmControls.ProcessDesigner.GlobalButtonHolderView({ model: new GenericWorkflowDesigner.SlotModel(activity) });
                GlobalButtonHolderView.setupGlobalTile(self._worflowButtonTitle);
                this.listenTo(GlobalButtonHolderView, GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.name, this.dropLibraryElementHandler);
                $(id).html("");
                $(id).append(GlobalButtonHolderView.render().$el);
            };
            AddGlobalWorkflowButtonView.prototype.addhWorkflows = function (activity) {
                if (this._workflowList.length == 0) {
                    this._workflowStatus = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_GlobalButton_Active_Status");
                    this.showButtonStatus();
                }
                this._workflowList.push(activity);
            };
            AddGlobalWorkflowButtonView.prototype.showWorkflows = function () {
                var self = this;
                var id = "#" + self._buttonId;
                if ($("#globalList").length < 1) {
                    if (self._workflowList.length > 0) {
                        $(id).append(self.getWorkflowList(self._workflowList));
                    }
                }
                else {
                    $("#globalList").remove();
                }
            };
            AddGlobalWorkflowButtonView.prototype.getWorkflowList = function (steps) {
                var stepListContainerDiv = $('<div id="globalList"></div>');
                var listUl = $('<ul class="globalListUl" style="list-style: none"></ul>');
                $(stepListContainerDiv).append(listUl);
                for (var i = 0; i < steps.length; i++) {
                    var step = steps[i];
                    var finishWorkflow = new MscrmControls.ProcessDesigner.GlobalButtonHolderView({ model: new GenericWorkflowDesigner.SlotModel(step) });
                    finishWorkflow.setupGlobalTile(step._name);
                    var stepId = "workflowList" + i;
                    var listLi = $("<li class='globalListIl' id='" + stepId + "'></li>");
                    $(listLi).append(finishWorkflow.render().$el);
                    $(listUl).append(listLi);
                }
                return stepListContainerDiv;
            };
            AddGlobalWorkflowButtonView.prototype.dropLibraryElementHandler = function (slot, libraryElement) {
                var _this = this;
                var activityDropController = new GenericWorkflowDesigner.ActivityDropController(slot.model);
                activityDropController.dropLibraryElement(libraryElement).done(function (activity) {
                    _this.addhWorkflows(activity);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                });
            };
            AddGlobalWorkflowButtonView.prototype.render = function () {
                $("#globalbuttonArea").append(this._GlobalButtonAreaTemplate());
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(GenericWorkflowDesigner.ActivityType.Empty);
                this.showbutton(activity);
                return this;
            };
            return AddGlobalWorkflowButtonView;
        })(GenericWorkflowDesigner.AddGlobalButtonView);
        ProcessDesigner.AddGlobalWorkflowButtonView = AddGlobalWorkflowButtonView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="GlobalButtonHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var GlobalButtonHolderView = (function (_super) {
            __extends(GlobalButtonHolderView, _super);
            function GlobalButtonHolderView() {
                _super.apply(this, arguments);
                this.selectedClassName = "selected";
                this.dragInProgressClass = "dragInProgress";
                this.globalTileTitle = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Globalbutton_Title");
            }
            GlobalButtonHolderView.prototype.initialize = function () {
                this.setupEvents();
                if (!this.model.getActivity().getReadonlyMode()) {
                    this.makeDroppable();
                }
            };
            GlobalButtonHolderView.prototype.setupGlobalTile = function (tileTitle) {
                this.globalTileTitle = tileTitle;
            };
            GlobalButtonHolderView.prototype.setupEvents = function () {
                var self = this;
                var activity = this.model.getActivity();
                activity.on("sync", this.render, this);
                this.$el.on("click", function (event) {
                    if (self.allTilesSelected()) {
                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_SlotGenerator_Title"), Tooltip: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileStepTooltip"), Image: "", DataURI: "", Alt: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileAltText"), FontIconImage: "", ActivityTypeID: ProcessDesigner.TBXActivityType.field });
                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                    }
                    $("#globalbuttonAreaDiv").focus();
                    $("#globalbuttonAreaDiv").children(".slot.hoverOverDroppable").removeClass("hoverOverDroppable");
                    $("#globalbuttonAreaDiv").children(".slot.selected").removeClass("selected");
                    event.target.focus();
                    self.tileClickedHandler(event);
                });
                this.$el.on("dblclick", function (event) {
                    self.tileDblClickedHandler(event);
                });
                this.$el.on("mousedown", function (event) {
                    event.stopPropagation();
                });
                this.listenTo(activity, ActivityDefinitionModel.supportedEvents.select.name, self.selectHandler);
                this.listenTo(activity, ActivityDefinitionModel.supportedEvents.deselect.name, self.deSelectHandler);
                this.listenTo(activity, ActivityDefinitionModel.supportedEvents.paste.name, self.pasteHandler);
                this.listenTo(activity, ActivityDefinitionModel.supportedEvents.dragInProgress.name, self.dragInProgressHandler);
                this.listenTo(activity, ActivityDefinitionModel.supportedEvents.stopDragInProgress.name, self.stopDragInProgressHandler);
            };
            GlobalButtonHolderView.prototype.clean = function () {
                this.$el.children().remove();
            };
            GlobalButtonHolderView.prototype.GetProperties = function () {
                var result = {
                    template: '',
                    tileImageTemplate: '',
                    image: null,
                    alt: null,
                    tileclass: 'GlobalTile',
                    tooltipText: ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_Globalbutton_ToolTip"),
                    globalTitleText: this.globalTileTitle,
                    globalTileTemplate: '<span class="globalButtonSlot ellipsis" ><%- globalTitleText %><span>',
                    globalTileImageTemplate: ''
                };
                return result;
            };
            GlobalButtonHolderView.prototype.render = function () {
                this.clean();
                if (GenericWorkflowDesigner.currentModel != null && GenericWorkflowDesigner.currentModel.cid == this.model.getActivity().cid) {
                    this.$el.addClass(this.selectedClassName);
                }
                var properties = this.GetProperties();
                var globalTileDescriptionTemplate = _.template(properties.globalTileTemplate);
                this.$el.append(globalTileDescriptionTemplate(properties));
                this.$el.addClass(GlobalButtonHolderView.className);
                this.$el.attr('tabindex', GenericWorkflowDesigner.Settings.tabIndexValue);
                var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var top = calc.computeTop(this.model.getActivity().getRow());
                var left = calc.computeLeft(this.model.getActivity().getCol());
                this.$el.css("position", "");
                return this;
            };
            GlobalButtonHolderView.prototype.selectHandler = function () {
                this.$el.addClass(this.selectedClassName);
            };
            GlobalButtonHolderView.prototype.deSelectHandler = function () {
                this.$el.removeClass(this.selectedClassName);
            };
            GlobalButtonHolderView.prototype.pasteHandler = function () {
                GlobalButtonHolderView.supportedEvents.paste.trigger(this);
            };
            GlobalButtonHolderView.prototype.dragInProgressHandler = function () {
                this.$el.addClass(this.dragInProgressClass);
            };
            GlobalButtonHolderView.prototype.stopDragInProgressHandler = function () {
                this.$el.removeClass(this.dragInProgressClass);
            };
            GlobalButtonHolderView.prototype.tileClickedHandler = function (event) {
                var clickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createClickHandler(this.model);
                clickHandler.click(this.$el);
                GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                event.stopPropagation();
            };
            GlobalButtonHolderView.prototype.tileDblClickedHandler = function (event) {
                var dblClickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDblClickHandler(this.model);
                dblClickHandler.dblclick(this.$el);
                event.stopPropagation();
            };
            GlobalButtonHolderView.prototype.allTilesSelected = function () {
                var arr = $("#globalbuttonAreaDiv").children(), i = 0;
                for (; i < arr.length; i = i + 1) {
                    var Tile = $($(arr[i]).children()).children();
                    if ($(arr[i]).hasClass("hoverOverDroppable") == false && Tile.hasClass("stageTile") == true) {
                        return false;
                    }
                }
                return true;
            };
            GlobalButtonHolderView.className = "globalButton";
            GlobalButtonHolderView.defaultDragHelperCursorOffset = 30;
            GlobalButtonHolderView.supportedEvents = {
                dropLibraryElement: GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement,
                dropActivity: GenericWorkflowDesigner.SlotBase.supportedEvents.dropActivity,
                paste: {
                    name: "paste",
                    trigger: function (context) {
                        var self = context;
                        var eventName = GlobalButtonHolderView.supportedEvents.paste.name;
                        self.trigger(eventName);
                    }
                }
            };
            return GlobalButtonHolderView;
        })(GenericWorkflowDesigner.SlotBase);
        ProcessDesigner.GlobalButtonHolderView = GlobalButtonHolderView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BranchPropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../Common/Rules.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation = MscrmControls.ProcessDesigner.Validation;
        "use strict";
        var BranchPropertyView = (function (_super) {
            __extends(BranchPropertyView, _super);
            function BranchPropertyView(model, baseUrl) {
                _super.call(this, { model: model });
                this.baseUrl = "";
                this.className = "property-page";
                this.loaderPanelName = "branchProperty";
                this.baseUrl = baseUrl;
            }
            BranchPropertyView.prototype.isInlinePropertyPage = function () {
                return true;
            };
            BranchPropertyView.prototype.getPropertyPageUrl = function (activeItem) {
                return this.baseUrl;
            };
            BranchPropertyView.prototype.getContainerElementName = function () {
                return this.loaderPanelName;
            };
            BranchPropertyView.prototype.getClassName = function () {
                return this.className;
            };
            BranchPropertyView.prototype.unloadHandler = function () {
                Validation.Errors.propertyTabUnloaded();
                var ControlRoot = MscrmControls;
            };
            return BranchPropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.BranchPropertyView = BranchPropertyView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StagePropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../Common/Rules.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation = MscrmControls.ProcessDesigner.Validation;
        "use strict";
        var StagePropertyView = (function (_super) {
            __extends(StagePropertyView, _super);
            function StagePropertyView(model, baseUrl) {
                _super.call(this, { model: model });
                this.className = "property-page";
                this.loaderPanelName = "stageProperty";
                this.baseUrl = baseUrl;
            }
            StagePropertyView.prototype.isInlinePropertyPage = function () {
                return true;
            };
            StagePropertyView.prototype.getPropertyPageUrl = function (activeItem) {
                return this.baseUrl;
            };
            StagePropertyView.prototype.getContainerElementName = function () {
                return this.loaderPanelName;
            };
            StagePropertyView.prototype.getClassName = function () {
                return this.className;
            };
            StagePropertyView.prototype.unloadHandler = function () {
                Validation.Errors.propertyTabUnloaded();
            };
            return StagePropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.StagePropertyView = StagePropertyView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StepPropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../Common/Rules.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation = MscrmControls.ProcessDesigner.Validation;
        "use strict";
        var StepPropertyView = (function (_super) {
            __extends(StepPropertyView, _super);
            function StepPropertyView(model, baseUrl) {
                _super.call(this, { model: model });
                this.baseUrl = '';
                this.className = "property-page";
                this.loaderPanelName = "stepProperty";
                this.baseUrl = baseUrl;
            }
            StepPropertyView.prototype.isInlinePropertyPage = function () {
                return true;
            };
            StepPropertyView.prototype.getPropertyPageUrl = function (activeItem) {
                return this.baseUrl;
            };
            StepPropertyView.prototype.getContainerElementName = function () {
                return this.loaderPanelName;
            };
            StepPropertyView.prototype.getClassName = function () {
                return this.className;
            };
            StepPropertyView.prototype.unloadHandler = function () {
                Validation.Errors.propertyTabUnloaded();
            };
            return StepPropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.StepPropertyView = StepPropertyView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StepListView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var StepListView = (function (_super) {
            __extends(StepListView, _super);
            function StepListView(stageModel, tileContainer) {
                var detailsDiv = $("<div class='stage-detail-container-div'></div>");
                _super.call(this, {
                    model: stageModel,
                    el: detailsDiv
                });
                this.parent = tileContainer;
                this.stageDetailsDiv = detailsDiv;
                this.stepViews = [];
                this.steps = this.model.steps;
                this.keyMap = { 17: false, 18: false, 78: false, 69: false };
                this.render();
                this.attachEventHandlers(this);
            }
            StepListView.prototype.initialize = function () {
                var self = this;
            };
            StepListView.prototype.render = function () {
                var steps = this.model.steps;
                $(".tileButtonDiv").removeClass("selected");
                $(".stageTile").removeClass("selected");
                $(".conditionTile").removeClass("selected");
                this.parent.children().children().addClass("selected");
                var div = $("<div class='stage-detail-container' id='" + ProcessDesigner.ElementPrefixes.DetailsPrefix + this.model.getActivityID() + "'></div>");
                div.css("width", this.parent[0].clientWidth + "px");
                div.addClass("selected");
                this.parent.find(".stage-detail-container-div").remove();
                this.parent.find(".stage-detail-container").remove();
                this.$el.append(div);
                this.parent.append(this.$el);
                this.addStepListContainer($(div));
                this.setScrollbar($(this.stageDetailsDiv));
                this.openNewlyAddedStep(steps);
                this.$el.find(".stage-detail-container").addClass("selected");
                var elements = [$("#libraryElementlabel"), $("#libraryElementfield"), $("#libraryElementsectionLabel")];
                var containers = [$("#canvas"), $(".stage-detail-container #sortable .step-list-listitem")];
                var scrollableOptionsCanvas = {
                    step: 20,
                    timer: 25,
                    scrollTriggerMargin: 180
                };
                var scrollableOptionsStepList = {
                    step: 20,
                    timer: 25,
                    scrollTriggerMargin: 60,
                    scrollableHorizontal: false
                };
                var scrollableOptions = [scrollableOptionsCanvas, scrollableOptionsStepList];
                var self = this;
                var stepDragDropHelper = new GenericWorkflowDesigner.ScrollableDragDropExtended();
                elements.forEach(function (element) {
                    var draggableOptions = {
                        start: function (event, ui) {
                            element.addClass("selected");
                        },
                        stop: function (event, ui) {
                            element.removeClass("selected");
                        }
                    };
                    stepDragDropHelper.makeDraggable(element, containers, draggableOptions, scrollableOptions);
                });
                return this;
            };
            StepListView.prototype.deleteStepListView = function () {
                this.removeEventHandlers(this);
                this.remove();
            };
            StepListView.prototype.openNewlyAddedStep = function (steps) {
                for (var i = 0; i < this.steps.length; i++) {
                    var step = steps[i];
                    if (step.isNewlyAdded && ProcessDesigner.ControlManager.isNewStepAdded) {
                        step.isNewlyAdded = false;
                        ProcessDesigner.ControlManager.isNewStepAdded = false;
                        $("#" + step.stepId)[0].scrollIntoView(false);
                        $("#" + step.stepId).click();
                    }
                    var stp = step;
                    if (stp.getErrorCount() > 0) {
                        $("#" + stp.stepId).find(".subViewTileError").css("visibility", "visible");
                    }
                    else {
                        $("#" + stp.stepId).find(".subViewTileError").css("visibility", "hidden");
                    }
                    $("#" + step.stepId).focus();
                    this.attachKeyDownEventForStepListItem(this);
                    this.enableDisableArrowButtons(this);
                }
            };
            StepListView.prototype.addStepListContainer = function (parentDiv) {
                var stepListContainerDiv = $('<div class="list-container-div"></div>');
                var listUl = $('<ul id="sortable" class="editview-step-list"  aria-live=\"polite\" aria-relevant=\"additions removals\"></ul>');
                var stepDiv = $('<span class="step-detail-div"></span>');
                if (this.steps == null) {
                    return this;
                }
                var titleForElementHeader = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_WorkFlow_ElementCount") + " " + this.steps.length;
                this.stepCount = _.template(" <div id=\"step-Count-Wrapper\" title=\"" + titleForElementHeader + "\"><span id=\"toggleStep\" class=\"CCFSymbolFont ExpandList-symbol\"></span><span class=\"seeDetailsStepLabel canvasAreaTileTitle6 truncateString\">" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ElementsTileName_label") + " (" + this.steps.length + ")</span><span id=\"DownArrow\" class=\"CCFSymbolFont DownArrow-symbol\"></span><span id=\"UpArrow\" class=\"CCFSymbolFont UpArrow-symbol\"></span></div> ");
                $(stepDiv).append(this.stepCount);
                $(stepListContainerDiv).append(stepDiv);
                $(stepDiv).append(listUl);
                for (var i = 0; i < this.steps.length; i++) {
                    var step = this.steps[i];
                    var stepId = step.stepId;
                    this.steps[i].sequence = i + 1;
                    var listLi = $("<li class='step-list-listitem' tabindex='-1' id='" + stepId + "'></li>");
                    var elem1 = new ProcessDesigner.EditStepView(step, $(listLi));
                    elem1.render();
                    this.stepViews.push(elem1);
                    $(listUl).append(elem1.el);
                }
                $(parentDiv).append(stepListContainerDiv);
            };
            StepListView.prototype.addTriggeredProcessContainer = function (parentDiv) {
                var stepListContainerDiv = $('<div class="list-container-div"></div>');
                var listUl = $('<ul id="triggeredProcessList" class="editview-step-list"  aria-live=\"polite\" aria-relevant=\"additions removals\"></ul>');
                var stepDiv = $('<span class="step-detail-div"></span>');
                if (this.steps == null) {
                    return this;
                }
                this.stepCount = _.template("<div id=\"step-Count-Wrapper\"><span id=\"toggleProcess\" class=\"CCFSymbolFont ExpandList-symbol\"></span><span class=\"seeDetailsTPLabel canvasAreaTileTitle6 truncateString\">" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileName_workflow") + " (0)</span></div> ");
                $(stepDiv).append(this.stepCount);
                $(stepListContainerDiv).append(stepDiv);
                $(stepDiv).append(listUl);
                $(parentDiv).append(stepListContainerDiv);
            };
            StepListView.prototype.attachKeyDownEventForStepListItem = function (StepListView) {
                $(".step-list-listitem").keydown(function (event) {
                    if (event.keyCode == 46) {
                        if (!$("#delete").prop("disabled")) {
                            ProcessDesigner.ControlManager.SetFunctionalityForButtonsWithShortcutKeys("#delete");
                        }
                    }
                    else if (event.keyCode == 40) {
                        if ($(event.target.nextSibling).length > 0) {
                            $(event.target).removeClass("selected");
                            $(event.target.nextSibling).focus();
                            $(event.target.nextSibling).addClass("selected");
                            StepListView.enableDisableArrowButtons(StepListView);
                        }
                        event.stopPropagation();
                    }
                    else if (event.keyCode == 38) {
                        if (event.shiftKey) {
                            var currentStage = ProcessDesigner.ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel);
                            var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentStage.getActivityID();
                            var curretStageDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentStage.getActivityID();
                            if ($("#" + curretStageDetailsDivName) && $("#" + curretStageDetailsDivName).css("visibility") == "visible") {
                                $(currentTileButtonName).click();
                            }
                            $("#" + currentStage.id).focus();
                            GenericWorkflowDesigner.currentModel = currentStage;
                        }
                        else {
                            if ($(event.target.previousSibling).length > 0) {
                                $(event.target).removeClass("selected");
                                $(event.target.previousSibling).focus();
                                $(event.target.previousSibling).addClass("selected");
                            }
                            else {
                                $(event.target).removeClass("selected");
                                $(event.target).addClass("selected");
                                $(event.target).focus();
                            }
                            StepListView.enableDisableArrowButtons(StepListView);
                        }
                        event.stopPropagation();
                    }
                    else if (event.keyCode == 68) {
                        if (event.shiftKey) {
                            $("#DownArrow").click();
                        }
                        event.stopPropagation();
                    }
                    else if (event.keyCode == 85) {
                        if (event.shiftKey) {
                            $("#UpArrow").click();
                        }
                        event.stopPropagation();
                    }
                    if (event.ctrlKey && event.altKey && event.keyCode == 67) {
                        ProcessDesigner.ControlManager.ClearSelections();
                        $("#libraryTab").children().focus();
                        $("#libraryTab").click();
                    }
                    else if (event.ctrlKey && event.altKey && event.keyCode == 80) {
                        ProcessDesigner.ControlManager.ClearSelections();
                        $("#propertyTab").children().focus();
                        GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                    }
                    if (event.keyCode == 69) {
                        if (event.keyCode in StepListView.keyMap) {
                            StepListView.keyMap[event.keyCode] = true;
                        }
                    }
                    else if (StepListView.keyMap[69] && event.keyCode == 187) {
                        StepListView.keyMap[69] = false;
                        $("#" + ProcessDesigner.ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel).getActivityID()).focus();
                        $("#toggleStep").click();
                    }
                    else if (event.keyCode == 17) {
                        StepListView.keyMap[event.keyCode] = true;
                    }
                    else if (event.keyCode == 18) {
                        StepListView.keyMap[event.keyCode] = true;
                    }
                    else if (event.keyCode == 78) {
                        if (event.srcElement != undefined && $(event.srcElement).attr("type") != "text" && $(event.srcElement).attr("role") != "combobox" && $(event.srcElement).prop("tagName") != "TEXTAREA") {
                            if (StepListView.keyMap[17] && StepListView.keyMap[18]) {
                                StepListView.keyMap[17] = false;
                                StepListView.keyMap[18] = false;
                                ProcessDesigner.ControlManager.SetFunctionalityForButtonsWithShortcutKeys("#Add");
                            }
                        }
                    }
                    else {
                        ProcessDesigner.ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                    }
                    event.stopImmediatePropagation();
                });
            };
            StepListView.prototype.attachEventHandlers = function (StepListView) {
                $("#sortable").sortable({
                    placeholder: "ui-sortable-placeholder",
                    items: ">li",
                    start: function (event, ui) {
                        ui.helper.addClass("drag-in-progress-li");
                        $('#sortable').children('li.step-list-listitem:not(.drag-in-progress-li)').addClass("ondrag");
                        $('#step-Count-Wrapper').addClass("ondrag");
                    },
                    update: function (event, ui) {
                        $('#sortable').children('li.step-list-listitem:not(.drag-in-progress-li)').removeClass("ondrag");
                        $('#step-Count-Wrapper').removeClass("ondrag");
                        $('.drag-in-progress-li').removeClass("drag-in-progress-li");
                        StepListView.evaluateSteps(StepListView);
                        var tileId = $('li.selected').attr('id');
                        var parentTileId = StepListView.model.stageId;
                        ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(tileId, ProcessDesigner.TBXActivityType.field, parentTileId, "Drag-Drop");
                        event.stopPropagation;
                    },
                    stop: function (event, ui) {
                        $('#sortable').children('li.step-list-listitem:not(.drag-in-progress-li)').removeClass("ondrag");
                        $('#step-Count-Wrapper').removeClass("ondrag");
                        $('.drag-in-progress-li').removeClass("drag-in-progress-li");
                        event.stopPropagation;
                    }
                });
                $("#libraryElementfield").draggable({});
                $("#libraryElementfield").on("dragstart", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1'  title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    placeHolderDiv.insertAfter(".step-list-listitem");
                    $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                    StepListView.makeDroppable(StepListView);
                });
                $("#libraryElementfield").on("dragend", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementfield").on("drop", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementfield").on("dragleave", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").draggable({});
                $("#libraryElementlabel").on("dragstart", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    placeHolderDiv.insertAfter(".step-list-listitem");
                    $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                    StepListView.makeDroppable(StepListView);
                });
                $("#libraryElementlabel").on("dragend", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").on("drop", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").on("dragleave", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementsectionLabel").draggable({});
                $("#libraryElementsectionLabel").on("dragstart", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    placeHolderDiv.insertAfter(".step-list-listitem");
                    $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                    StepListView.makeDroppable(StepListView);
                });
                $("#libraryElementsectionLabel").on("dragend", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementsectionLabel").on("drop", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementsectionLabel").on("dragleave", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").draggable({});
                $("#libraryElementlabel").on("dragstart", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1'  title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1'  title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                    placeHolderDiv.insertAfter(".step-list-listitem");
                    $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                    StepListView.makeDroppable(StepListView);
                });
                $("#libraryElementlabel").on("dragend", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").on("drop", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementlabel").on("dragleave", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#UpArrow").on("click", function (event) {
                    StepListView.upArrowButtonClickEvent(StepListView);
                });
                $("#DownArrow").on("click", function (event) {
                    StepListView.downArrowButtonClickEvent(StepListView);
                });
                $(".step-list-listitem").on("click", function (event) {
                    $(".step-list-listitem.selected").addClass("unselected");
                    $(".step-list-listitem.selected").removeClass("selected");
                    $(this).addClass('selected');
                    $(this).removeClass('unselected');
                    if (($(".stage-detail-container").length > 0) && ($(".stageTile.selected").length > 0) && ("details_" + $(".stageTile.selected").attr("id") == $(".stage-detail-container").attr("id"))) {
                        $(".stage-detail-container").addClass("selected");
                    }
                    StepListView.enableDisableArrowButtons(StepListView);
                });
                $(document).on('AddButton', function (event, droppable) {
                    if (ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.AddStep || ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.PasteStep) {
                        if ($(".stage-detail-container").length > 0) {
                            $('#sortable').children().remove(".place-holder-listitem");
                            var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                            var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1' title=\"" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString('ProcessDesignerControl_BPF_ScreenReader_AddNewTile') + "\">+</div>");
                            placeHolderDiv.insertAfter(".step-list-listitem");
                            $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                            StepListView.makePlaceHolderClick(StepListView);
                            StepListView.makePlaceHolderNavigable();
                        }
                    }
                });
                $("#toggleStep").on("click", function (event) {
                    if ($("#toggleStep").hasClass("ExpandList-symbol")) {
                        $("#toggleStep").removeClass("ExpandList-symbol");
                        $("#toggleStep").addClass("CollapseList-symbol");
                    }
                    else {
                        $("#toggleStep").removeClass("CollapseList-symbol");
                        $("#toggleStep").addClass("ExpandList-symbol");
                    }
                    $("#sortable").slideToggle("slow");
                    event.stopPropagation();
                });
                this.attachKeyDownEventForStepListItem(StepListView);
            };
            StepListView.prototype.removeEventHandlers = function (StepListView) {
                for (var i = 0; i < this.stepViews.length; i++) {
                    this.stepViews[i].remove();
                }
                this.stepViews = null;
                $("#libraryElementlabel").off("dragstart", null, null);
                $("#libraryElementlabel").off("dragend", null, null);
                $("#libraryElementlabel").off("drop", null, null);
                $("#libraryElementlabel").off("dragleave", null, null);
                $("#sortable").off("focusout", null, null);
                $("#UpArrow").off("click", null, null);
                $("#DownArrow").off("click", null, null);
                $(".step-list-listitem").off("click", null, null);
                $("#toggleStep").off("click", null, null);
                StepListView.off("AddButton", null, null);
            };
            StepListView.prototype.evaluateSteps = function (StepListView) {
                var updatedStepsArray = [];
                $(".step-list-listitem").each(function (index) {
                    var stepIdFromList = $(this).attr("id");
                    for (var i = 0; i < StepListView.steps.length; i++) {
                        if (StepListView.steps[i].stepId == stepIdFromList) {
                            var currentStep = $(".step-list-listitem")[index];
                            var currentStepIndex = updatedStepsArray.length + 1;
                            StepListView.steps[i].sequence = currentStepIndex;
                            var stepTileTypeLabel = (StepListView.steps[i].getActivityTypeID() == ProcessDesigner.TBXActivityType.field) ? "ProcessDesignerControl_TBX_LibraryTileName_field" : "ProcessDesignerControl_TBX_LibraryTileName_label";
                            $(currentStep).find("#stepSequence").html(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString(stepTileTypeLabel) + " #" + currentStepIndex.toString());
                            updatedStepsArray.push(StepListView.steps[i]);
                            break;
                        }
                    }
                });
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
                StepListView.steps = updatedStepsArray;
                this.updateActivityTree();
            };
            StepListView.prototype.updateActivityTree = function () {
                this.model.setNewSteps(this.steps);
            };
            StepListView.prototype.GetNewActivity = function () {
                if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddField)
                    return new ProcessDesigner.TBXStepActivity(ProcessDesigner.TBXActivityType.field);
                else if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddSection)
                    return new ProcessDesigner.TBXStepActivity(ProcessDesigner.TBXActivityType.sectionLabel);
                else if (ProcessDesigner.BPFToolBarView.addStepMode == ProcessDesigner.BPFToolBarAddStepMode.AddLabel)
                    return new ProcessDesigner.TBXStepActivity(ProcessDesigner.TBXActivityType.label);
            };
            StepListView.prototype.DropElement = function (droppable, StepListView, isPasteStep) {
                var newTBXStepActivity = StepListView.GetNewActivity();
                if (isPasteStep) {
                    var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                    if (copiedActivities.length <= 0) {
                        return;
                    }
                    if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                        newTBXStepActivity = copiedActivities[0].getCloneOfActivity();
                        $(".step-list-listitem").each(function (index) {
                            var currentAction = $(".step-list-listitem")[index];
                            if (currentAction && currentAction.getAttribute("id") == copiedActivities[0].stepId) {
                                $(currentAction).remove();
                                return false;
                            }
                        });
                        ProcessDesigner.BPFStepActivityDeleteHandler.prototype.deleteStepFromStageActivity(copiedActivities[0]);
                        var tileCount = "#tileCount_" + ProcessDesigner.StringUtility.RemoveSpaces(newTBXStepActivity.parentStage.getActivityID());
                        $(tileCount).html(newTBXStepActivity.getParentStage().steps.length);
                    }
                    else {
                        newTBXStepActivity = copiedActivities[0].getCloneOfActivity();
                    }
                }
                var id = _Microsoft.Client.Telemetry.Utility.newGuid();
                newTBXStepActivity.stepId = id;
                newTBXStepActivity.parentStage = StepListView.model;
                newTBXStepActivity.setParentActivityID(StepListView.model.getActivityID());
                newTBXStepActivity.isNewlyAdded = true;
                StepListView.steps.push(newTBXStepActivity);
                var tileCount = "#tileCount_" + ProcessDesigner.StringUtility.RemoveSpaces(newTBXStepActivity.parentStage.getActivityID());
                $(tileCount).html(StepListView.steps.length);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
                var listLi = $("<li class='step-list-listitem' tabindex='-1' id='" + id + "'></li>");
                var editStepView = new ProcessDesigner.EditStepView(newTBXStepActivity, $(listLi));
                $(".seeDetailsStepLabel").html(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ElementsTileName_label") + "(" + StepListView.steps.length + ")");
                $("#step-Count-Wrapper").attr("title", ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_WorkFlow_ElementCount") + " " + StepListView.steps.length);
                editStepView.render();
                editStepView.$el.insertAfter(droppable);
                $(".step-list-listitem.selected").addClass("unselected");
                $(".step-list-listitem.selected").removeClass("selected");
                $('#sortable').children().remove(".place-holder-listitem");
                StepListView.evaluateSteps(StepListView);
                ProcessDesigner.ControlManager.isNewStepAdded = true;
                StepListView.openNewlyAddedStep(StepListView.steps);
                editStepView.$el.addClass("selected");
                editStepView.$el.removeClass("unselected");
                editStepView.$el.focus();
                this.attachKeyDownEventForStepListItem(StepListView);
                StepListView.enableDisableArrowButtons(StepListView);
                if (($(".stage-detail-container").length > 0) && ($(".stageTile.selected").length > 0) && ("details_" + $(".stageTile.selected").attr("id") == $(".stage-detail-container").attr("id"))) {
                    $(".stage-detail-container").addClass("selected");
                }
                $(this).removeClass("hoverOverDroppable");
                $(this).removeClass("hoverOverDroppableHighlight");
                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent("Drag-Drop", newTBXStepActivity.stepId, ProcessDesigner.TBXActivityType.field, newTBXStepActivity.parentStage.stageId);
                ProcessDesigner.CanvasDisplayUtility.HandleStageDetailsOverlap();
            };
            StepListView.prototype.makePlaceHolderClick = function (StepListView) {
                $(".place-holder-listitem").on("click keypress", function (event) {
                    event.stopPropagation();
                    if (ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.AddStep || ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.PasteStep) {
                        StepListView.DropElement(event.target, StepListView, ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.PasteStep);
                        StepListView.setScrollbar($(".stage-detail-container-div"));
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                        $("#canvas").children(".hoverOverDroppable").removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                        ;
                    }
                });
            };
            StepListView.prototype.makePlaceHolderNavigable = function () {
                $(".place-holder-listitem").on("keydown", function (event) {
                    if (event.keyCode == 40) {
                        $(".step-list-listitem.selected").removeClass("selected");
                        $(event.target.nextSibling).focus();
                        $(event.target.nextSibling).addClass("selected");
                    }
                    if (event.keyCode == 38) {
                        if (event.target.previousSibling == null) {
                            $("#" + ProcessDesigner.ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel).getActivityID()).focus();
                        }
                        else {
                            $(event.target.previousSibling).focus();
                            $(event.target.previousSibling).addClass("selected");
                        }
                    }
                    event.stopImmediatePropagation();
                });
            };
            StepListView.prototype.makeDroppable = function (StepListView) {
                $(".place-holder-listitem").droppable({
                    tolerance: "touch",
                    activate: function (event, ui) {
                        if (ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel) {
                            $(this).addClass("hoverOverDroppable");
                        }
                    },
                    deactivate: function (event, ui) {
                        if (ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel) {
                            $(this).removeClass("hoverOverDroppable");
                        }
                    },
                    over: function (event, ui) {
                        if (ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel) {
                            $(this).addClass("hoverOverDroppableHighlight");
                        }
                    },
                    out: function (event, ui) {
                        if (ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel) {
                            $(this).removeClass("hoverOverDroppableHighlight");
                        }
                    },
                    drop: function (event, ui) {
                        if (ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label || ui.draggable.attr("id") == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel) {
                            StepListView.SetAddMode(ui.draggable.attr("id"));
                            StepListView.DropElement(event.target, StepListView, false);
                            StepListView.setScrollbar($(".stage-detail-container-div"));
                            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                        }
                    }
                });
            };
            StepListView.prototype.SetAddMode = function (draggableElementId) {
                if (draggableElementId != null) {
                    if (draggableElementId == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.field)
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddField;
                    else if (draggableElementId == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.label)
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddLabel;
                    else if (draggableElementId == GenericWorkflowDesigner.Library.libraryElementPrefix + ProcessDesigner.TBXActivityType.sectionLabel)
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddSection;
                }
            };
            StepListView.prototype.setScrollbar = function (parentDiv) {
                var canvasHeight = parseInt($("#zoomCanvasWrapper").css("height"), 10);
                var parentDivHeight = parseInt($(parentDiv.parent()[0]).css("height"), 10);
                var parentDivTop = parseInt($(parentDiv.parent()[0]).css("top"), 10);
                var minimapHeight = parseInt($("#show-mini-map-div").css("height"), 10);
                var minimapBottom = parseInt($("#show-mini-map-div").css("bottom"), 10);
                var horizontalScrollHeight = 20;
                var totalDivHeight = canvasHeight - (parentDivHeight + parentDivTop + minimapBottom + minimapHeight + horizontalScrollHeight);
                var requiredDivHeight = totalDivHeight - (2 * parseInt($("#step-Count-Wrapper").css("height"), 10));
                var stepHeight = parseInt($(".editViewTileTitle").css("height"), 10);
                if (requiredDivHeight < stepHeight) {
                    $("#sortable").css("max-height", stepHeight + "px");
                    document.getElementById("sortable").scrollIntoView(false);
                }
                else {
                    $("#sortable").css("max-height", requiredDivHeight + "px");
                }
                this.restrictDetailsDivHeight();
            };
            StepListView.prototype.restrictDetailsDivHeight = function () {
                var detailContainerDiv = $(".stage-detail-container");
                var targetDivTopArray = [];
                var miniMapDivTop = this.calculateDivTopOffset($("#show-mini-map-div"));
                targetDivTopArray.push(miniMapDivTop);
                var targetDivOffsetTop = Math.min.apply(null, targetDivTopArray);
                if (detailContainerDiv.length > 0 && targetDivOffsetTop > 0) {
                    var detailContainerDivBottom = detailContainerDiv.offset().top + detailContainerDiv.height();
                    var difference = detailContainerDivBottom - targetDivOffsetTop;
                    if (difference > 0) {
                        $(".stage-detail-container-div").addClass("detailContainerBottomOffset");
                    }
                }
            };
            StepListView.prototype.calculateDivTopOffset = function (targetDiv) {
                var targetDivOffsetTop = 0;
                if (targetDiv.length > 0) {
                    targetDivOffsetTop = targetDiv.offset().top;
                }
                return targetDivOffsetTop;
            };
            StepListView.prototype.disableArrowButton = function (arrowButtonDiv) {
                arrowButtonDiv.attr("aria-disabled", true);
                arrowButtonDiv.addClass("disableArrowButton");
            };
            StepListView.prototype.enableArrowButton = function (arrowButtonDiv) {
                arrowButtonDiv.attr("aria-disabled", false);
                arrowButtonDiv.removeClass("disableArrowButton");
            };
            StepListView.prototype.upArrowButtonClickEvent = function (StepListView) {
                $(".step-list-listitem.selected").insertBefore($(".step-list-listitem.selected").prev('.step-list-listitem'));
                $(".step-list-listitem.selected").focus();
                StepListView.evaluateSteps(StepListView);
                var tileId = $('li.selected').attr('id');
                var parentTileId = StepListView.model.stageId;
                ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(tileId, ProcessDesigner.TBXActivityType.field, parentTileId, "Up-Down Button");
                StepListView.enableDisableArrowButtons(StepListView);
                GenericWorkflowDesigner.EventManager.publish('updatePropertyHtml');
                event.stopPropagation();
            };
            StepListView.prototype.downArrowButtonClickEvent = function (StepListView) {
                $(".step-list-listitem.selected").insertAfter($(".step-list-listitem.selected").next('.step-list-listitem'));
                $(".step-list-listitem.selected").focus();
                StepListView.evaluateSteps(StepListView);
                var tileId = $('li.selected').attr('id');
                var parentTileId = StepListView.model.stageId;
                ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(tileId, ProcessDesigner.TBXActivityType.field, parentTileId, "Up-Down Button");
                StepListView.enableDisableArrowButtons(StepListView);
                GenericWorkflowDesigner.EventManager.publish('updatePropertyHtml');
                event.stopPropagation();
            };
            StepListView.prototype.enableDisableArrowButtons = function (StepListView) {
                if ($(".step-list-listitem.selected") != null && $(".step-list-listitem").length > 1) {
                    StepListView.enableArrowButton($('#DownArrow'));
                    StepListView.enableArrowButton($('#UpArrow'));
                }
                if ($(".step-list-listitem.selected") != null && ($(".step-list-listitem.selected").next('.step-list-listitem').length == 0)) {
                    StepListView.disableArrowButton($('#DownArrow'));
                }
                if ($(".step-list-listitem.selected") != null && ($(".step-list-listitem.selected").prev('.step-list-listitem').length == 0)) {
                    StepListView.disableArrowButton($('#UpArrow'));
                }
            };
            return StepListView;
        })(Backbone.View);
        ProcessDesigner.StepListView = StepListView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StepView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var StepView = (function (_super) {
            __extends(StepView, _super);
            function StepView(model, el) {
                _super.call(this, {
                    model: model,
                    el: el
                });
                this.className = "step-item";
            }
            StepView.prototype.initialize = function () {
                this.stepTemplate = _.template(" <span class=\"tileTitle\" title= \"<%- Title %>\"><%- Title %></span> ");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("click", function (event) {
                    self.stepClickedHandler(event);
                });
            };
            StepView.prototype.render = function () {
                var step = this.model;
                this.$el.append(this.stepTemplate({ Title: step.description }));
                return this;
            };
            StepView.prototype.stepClickedHandler = function (event) {
                event.stopPropagation();
                var clickHandler = new GenericWorkflowDesigner.DefaultActivityClickHandler(this.model);
                clickHandler.click(this.$el);
                GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                var step = this.model;
                var stage = step.parentStage;
                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(step.stepId, step.getActivityTypeID(), stage.stageId);
            };
            return StepView;
        })(Backbone.View);
        ProcessDesigner.StepView = StepView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="AddActivityListView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var AddActivityListView = (function (_super) {
            __extends(AddActivityListView, _super);
            function AddActivityListView() {
                _super.call(this, {
                    el: $('#Add')
                });
                this.render();
            }
            AddActivityListView.prototype.initialize = function () {
                var self = this;
                GenericWorkflowDesigner.Utilities.bindToolbarSubmenuEvents($(".toolbarItemContainer"), self.$el);
            };
            AddActivityListView.prototype.render = function () {
                var div = $('<div class="activity-list-container"></div>');
                var listUl = $('<ul class="activity-list" role="menubar" ></ul>');
                var libraryGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups;
                if (libraryGroups == null) {
                    return this;
                }
                if (libraryGroups.length > 0) {
                    this.$el.parent().find(".activity-list-container").remove();
                    this.$el.parent().append(div);
                    $(div).append(listUl);
                    for (var i = 0; i < libraryGroups.length; i++) {
                        var group = libraryGroups[i];
                        var categoryUl = $("<ul class='activity-list-category' aria-label='" + group.key + "' role='menu' ></ul>");
                        var titleSpan = $("<span class='activity-list-title truncateString' aria-label='" + group.key + "' tabindex='-1'>" + group.key + "</span>");
                        $(categoryUl).append(titleSpan);
                        $(listUl).append(categoryUl);
                        for (var j = 0; j < group.value.length; j++) {
                            var activityName = group.value[j].properties["name"];
                            var addCommandText = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("GenericWorkflowDesignerControl_Add") + " " + activityName;
                            var templateItems = [];
                            templateItems["addCommandText"] = addCommandText;
                            templateItems["addCommandTooltip"] = group.value[j].properties["addcommandtooltip"];
                            var listLi = $("<li class='activity-list-listitem' tabindex='-1' aria-owns='" + group.key + "' role='menuitem'  aria-label='" + addCommandText + "' id='Add" + group.value[j].properties["activitytypeid"] + "Command'></li>");
                            var elem1 = new ProcessDesigner.AddActivityListSubView(templateItems, $(listLi));
                            elem1.render();
                            $(categoryUl).append(elem1.el);
                        }
                    }
                    $(".activity-list-listitem").first().focus();
                }
                $(".activity-list-title").keydown(function (event) {
                    if (event.keyCode == 40) {
                        $(event.target.nextSibling).focus();
                    }
                    if (event.keyCode == 38) {
                        $(event.target.previousSibling).focus();
                        if ($(event.target.previousSibling).length < 1) {
                            $(event.target.parentElement.previousSibling.lastChild).focus();
                        }
                    }
                });
                $(".activity-list-listitem").keydown(function (event) {
                    if (event.keyCode == 13) {
                        $(event.target).focus();
                        ProcessDesigner.AddActivityListSubView.ClickHandler(event);
                    }
                    if (event.keyCode == 40) {
                        $(event.target.nextSibling).focus();
                        if ($(event.target.nextSibling).length < 1) {
                            $(event.target.parentElement.nextSibling.firstChild).focus();
                        }
                    }
                    if (event.keyCode == 38)
                        $(event.target.previousSibling).focus();
                });
            };
            return AddActivityListView;
        })(Backbone.View);
        ProcessDesigner.AddActivityListView = AddActivityListView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="AddActivityListSubView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var AddActivityListSubView = (function (_super) {
            __extends(AddActivityListSubView, _super);
            function AddActivityListSubView(option, activityItem) {
                _super.call(this, {
                    el: activityItem
                });
                this.className = "activity-item";
                this.option = option;
            }
            AddActivityListSubView.prototype.initialize = function () {
                this.itemTemplate = _.template("<button type=\"submit\" tabindex=\"-1\" class=\"activityOptionTitle\" title=\"<%- Tooltip %>\"><div class=\"wrapString truncateString\"><%- Title %></div> </button>");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("mousedown", function (event) {
                    $(event.target.children).focus();
                    AddActivityListSubView.ClickHandler(event);
                });
            };
            AddActivityListSubView.prototype.render = function () {
                var itemText = this.option["addCommandText"];
                var itemTooltip = this.option["addCommandTooltip"];
                this.$el.append(this.itemTemplate({ Tooltip: itemTooltip, Title: itemText }));
                return this;
            };
            AddActivityListSubView.ClickHandler = function (event) {
                var tileClass;
                switch ($(event.currentTarget).attr("id").toString().toLowerCase()) {
                    case ProcessDesigner.BPFAddActivityTypeCommandID.AddField.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.AddStep;
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddField;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.field].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.AddLabel.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.AddStep;
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddLabel;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.label].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.AddSectionLabel.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.AddStep;
                        ProcessDesigner.BPFToolBarView.addStepMode = ProcessDesigner.BPFToolBarAddStepMode.AddSection;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.sectionLabel].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.AddPage.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.AddPage;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.page].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.AddCondition.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.AddCondition;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.condition].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.PasteField.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.PasteStep;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.field].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.PasteLabel.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.PasteStep;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.label].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.PasteSectionLabel.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.PasteStep;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.sectionLabel].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.PastePage.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.PastePage;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.page].properties["tileclass"];
                        break;
                    case ProcessDesigner.BPFAddActivityTypeCommandID.PasteBranch.toLowerCase():
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.PasteBranch;
                        tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.TBXActivityType.condition].properties["tileclass"];
                        break;
                    default:
                        ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                }
                tileClass = tileClass + ", .slot:has(" + tileClass + ")";
                if (GenericWorkflowDesigner.CutCommand.cutInProgress && ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.PasteStage) {
                    var targetDiv = $(event.currentTarget).attr('data-activityID').toString();
                    tileClass = targetDiv;
                    $.event.trigger('PasteButton', [tileClass]);
                }
                else {
                    $.event.trigger('AddButton', [tileClass]);
                }
                $('.hoverOverDroppable').hover(function () {
                    if ($(this).hasClass("hoverOverDroppable")) {
                        $(this).addClass("hoverOverDroppableHighlight");
                    }
                }, function () {
                    $(this).removeClass("hoverOverDroppableHighlight");
                });
                $(".pageSectionsToolbar").find(".toolbarItemContainer").children(".activity-list-container").remove();
                $(".slot").unbind("keydown keypress");
                ProcessDesigner.ControlManager.SetCanvasFocusEvent();
                if ($('#canvas').children("div .slot").first().length > 0) {
                    if ($('#canvas').children("div .slot").first().find(".stageTile").length > 0) {
                        $(".selected.stageTile").removeClass("selected");
                        $(".selected.conditionTile").removeClass("selected");
                        if ($('#canvas').children("div .slot").first().find(".stage-detail-container").length > 0) {
                            $('#canvas').children("div .slot").first().find(".stage-detail-container").addClass("selected");
                        }
                        else if ($(".stage-detail-container.selected").length > 0) {
                            $(".stage-detail-container.selected").removeClass("selected");
                        }
                        $('#canvas').children("div .slot").first().focus();
                        $('#canvas').children("div .slot").first().find(".stageTile").addClass("selected");
                        var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                        GenericWorkflowDesigner.currentModel = activities[0];
                    }
                }
                $(".ui-droppable.slotInsertVertical.hoverOverDroppable").keydown(function (event) {
                    if (event.keyCode == 40) {
                        AddActivityListSubView.NavigateFromVerticalHitAreaToDownStage(event);
                    }
                    if (event.keyCode == 38) {
                        AddActivityListSubView.NavigateFromVerticalHitAreaToUpStage(event);
                    }
                    event.stopPropagation();
                });
                $(".ui-droppable.slotInsertHorizontal.hoverOverDroppable").keydown(function (event) {
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37)) {
                        AddActivityListSubView.NavigateFromHorizontalHitAreaToLeftStage(event);
                    }
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39)) {
                        AddActivityListSubView.NavigateFromHorizontalHitAreaToRightStage(event);
                    }
                    event.stopPropagation();
                });
            };
            AddActivityListSubView.NavigateFromHorizontalHitAreaToLeftStage = function (event) {
                var activityToBeFocused;
                if (!((GenericWorkflowDesigner.currentModel.getActivityID() + "_hitarea") == event.target.getAttribute("id"))) {
                    activityToBeFocused = GenericWorkflowDesigner.Settings.workflowTree.getParent(GenericWorkflowDesigner.currentModel);
                    $("#" + activityToBeFocused.id).focus();
                    if ($("#" + activityToBeFocused.id).find(".stageTile").length > 0) {
                        $("#" + activityToBeFocused.id).find(".stageTile").addClass("selected");
                        if ($("#" + activityToBeFocused.id).find(".stage-detail-container").length > 0) {
                            $("#" + activityToBeFocused.id).find(".stage-detail-container").addClass("selected");
                        }
                    }
                    else {
                        $("#" + activityToBeFocused.getActivityID()).find(".conditionTile").addClass("selected");
                    }
                    GenericWorkflowDesigner.currentModel = activityToBeFocused;
                }
                else {
                    activityToBeFocused = GenericWorkflowDesigner.currentModel;
                    $("#" + activityToBeFocused.getActivityID()).focus();
                    if ($("#" + activityToBeFocused.getActivityID()).find(".conditionTile").length > 0) {
                        $("#" + activityToBeFocused.getActivityID()).find(".conditionTile").addClass("selected");
                    }
                    else {
                        $("#" + activityToBeFocused.getActivityID()).find(".stageTile").addClass("selected");
                        if ($("#" + activityToBeFocused.getActivityID()).find(".stage-detail-container").length > 0) {
                            $("#" + activityToBeFocused.getActivityID()).find(".stage-detail-container").addClass("selected");
                        }
                    }
                }
            };
            AddActivityListSubView.NavigateFromHorizontalHitAreaToRightStage = function (event) {
                var activityToBeFocused = GenericWorkflowDesigner.currentModel;
                $("#" + activityToBeFocused.getActivityID()).focus();
                if ($("#" + activityToBeFocused.getActivityID()).find(".conditionTile").length > 0) {
                    $("#" + activityToBeFocused.getActivityID()).find(".conditionTile").addClass("selected");
                }
                else {
                    $("#" + activityToBeFocused.getActivityID()).find(".stageTile").addClass("selected");
                    if ($("#" + activityToBeFocused.getActivityID()).find(".stage-detail-container").length > 0) {
                        $("#" + activityToBeFocused.getActivityID()).find(".stage-detail-container").addClass("selected");
                    }
                }
            };
            AddActivityListSubView.NavigateFromVerticalHitAreaToUpStage = function (event) {
                var activityToBeFocused;
                if ((GenericWorkflowDesigner.currentModel.getActivityID() + "_verticalhitarea") == event.target.getAttribute("id")) {
                    activityToBeFocused = GenericWorkflowDesigner.currentModel;
                    $("#" + activityToBeFocused.getActivityID()).focus();
                    $("#" + activityToBeFocused.getActivityID()).find(".conditionTile").addClass("selected");
                }
                else {
                    activityToBeFocused = GenericWorkflowDesigner.Settings.workflowTree.getParent(GenericWorkflowDesigner.currentModel);
                    $("#" + activityToBeFocused.id).focus();
                    $("#" + activityToBeFocused.id).find(".conditionTile").addClass("selected");
                }
            };
            AddActivityListSubView.NavigateFromVerticalHitAreaToDownStage = function (event) {
                if ((GenericWorkflowDesigner.currentModel.getActivityID() + "_verticalhitarea") === event.target.getAttribute("id")) {
                    var activity;
                    activity = GenericWorkflowDesigner.currentModel;
                    if (activity.getActivityTypeID() === ProcessDesigner.TBXActivityType.condition) {
                        var noBranchFirstChild = activity.getNoBranchFirstChild();
                        if (noBranchFirstChild != null) {
                            $("#" + noBranchFirstChild.id).focus();
                            if ($('#' + noBranchFirstChild.id).children().find(".conditionTile").length > 0) {
                                $("#" + noBranchFirstChild.id).children().find(".conditionTile").addClass("selected");
                            }
                            else if ($('#' + noBranchFirstChild.id).children().find(".stageTile").length > 0) {
                                $("#" + noBranchFirstChild.id).children().find(".stageTile").addClass("selected");
                                if ($("#" + noBranchFirstChild.id).children().find(".stage-detail-container").length > 0) {
                                    $("#" + noBranchFirstChild.id).children().find(".stage-detail-container").addClass("selected");
                                }
                            }
                            GenericWorkflowDesigner.currentModel = noBranchFirstChild;
                        }
                    }
                }
            };
            return AddActivityListSubView;
        })(Backbone.View);
        ProcessDesigner.AddActivityListSubView = AddActivityListSubView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFToolBarItemView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var toolBarItem = GenericWorkflowDesigner.ToolBarItem;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var BPFToolBarItemView = (function (_super) {
            __extends(BPFToolBarItemView, _super);
            function BPFToolBarItemView(model) {
                _super.call(this, model);
            }
            BPFToolBarItemView.prototype.initialize = function () {
            };
            BPFToolBarItemView.prototype.render = function () {
                _super.prototype.render.call(this);
                return this.$el;
            };
            return BPFToolBarItemView;
        })(GenericWorkflowDesigner.ToolBarItemview);
        ProcessDesigner.BPFToolBarItemView = BPFToolBarItemView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="BPFToolBarView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var ToolBarItem = GenericWorkflowDesigner.ToolBarItem;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        (function (BPFToolBarAddMode) {
            BPFToolBarAddMode[BPFToolBarAddMode["AddStep"] = 0] = "AddStep";
            BPFToolBarAddMode[BPFToolBarAddMode["AddStage"] = 1] = "AddStage";
            BPFToolBarAddMode[BPFToolBarAddMode["AddPage"] = 2] = "AddPage";
            BPFToolBarAddMode[BPFToolBarAddMode["AddCondition"] = 3] = "AddCondition";
            BPFToolBarAddMode[BPFToolBarAddMode["PasteStage"] = 4] = "PasteStage";
            BPFToolBarAddMode[BPFToolBarAddMode["PastePage"] = 5] = "PastePage";
            BPFToolBarAddMode[BPFToolBarAddMode["PasteStep"] = 6] = "PasteStep";
            BPFToolBarAddMode[BPFToolBarAddMode["PasteBranch"] = 7] = "PasteBranch";
            BPFToolBarAddMode[BPFToolBarAddMode["DropStep"] = 8] = "DropStep";
            BPFToolBarAddMode[BPFToolBarAddMode["None"] = 9] = "None";
        })(ProcessDesigner.BPFToolBarAddMode || (ProcessDesigner.BPFToolBarAddMode = {}));
        var BPFToolBarAddMode = ProcessDesigner.BPFToolBarAddMode;
        (function (BPFToolBarConnectMode) {
            BPFToolBarConnectMode[BPFToolBarConnectMode["ConnectTile"] = 0] = "ConnectTile";
            BPFToolBarConnectMode[BPFToolBarConnectMode["DisconnectTile"] = 1] = "DisconnectTile";
            BPFToolBarConnectMode[BPFToolBarConnectMode["ReconnectTile"] = 2] = "ReconnectTile";
            BPFToolBarConnectMode[BPFToolBarConnectMode["None"] = 3] = "None";
        })(ProcessDesigner.BPFToolBarConnectMode || (ProcessDesigner.BPFToolBarConnectMode = {}));
        var BPFToolBarConnectMode = ProcessDesigner.BPFToolBarConnectMode;
        (function (BPFToolBarAddStepMode) {
            BPFToolBarAddStepMode[BPFToolBarAddStepMode["AddField"] = 0] = "AddField";
            BPFToolBarAddStepMode[BPFToolBarAddStepMode["AddLabel"] = 1] = "AddLabel";
            BPFToolBarAddStepMode[BPFToolBarAddStepMode["AddSection"] = 2] = "AddSection";
            BPFToolBarAddStepMode[BPFToolBarAddStepMode["None"] = 3] = "None";
        })(ProcessDesigner.BPFToolBarAddStepMode || (ProcessDesigner.BPFToolBarAddStepMode = {}));
        var BPFToolBarAddStepMode = ProcessDesigner.BPFToolBarAddStepMode;
        var BPFToolBarView = (function (_super) {
            __extends(BPFToolBarView, _super);
            function BPFToolBarView() {
                _super.call(this);
                this.cleanUp();
                this.newItemArray = new Array();
                this.PrepareItem();
                this.PrepareItemViews();
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, this.executeCommand, null);
                BPFToolBarView.addMode = BPFToolBarAddMode.None;
                BPFToolBarView.connectMode = BPFToolBarConnectMode.None;
                BPFToolBarView.addStepMode = BPFToolBarAddStepMode.None;
            }
            BPFToolBarView.prototype.initialize = function () {
            };
            BPFToolBarView.prototype.render = function () {
                _super.prototype.render.call(this);
                return this.$el;
            };
            BPFToolBarView.prototype.PrepareItemViews = function () {
                var _this = this;
                _super.prototype.PrepareItemViews.call(this);
                this.newItemArray.forEach(function (item) {
                    var itemView = new ProcessDesigner.BPFToolBarItemView(item);
                    _this.itemViewArray.push(itemView);
                });
            };
            BPFToolBarView.prototype.PrepareItem = function () {
                _super.prototype.PrepareItems.call(this);
            };
            BPFToolBarView.prototype.executeCommand = function (event) {
                var commandType = event.currentTarget.getAttribute("id");
                var handlerFactory = new ProcessDesigner.CommandHandlerFactory();
                return handlerFactory.GetCommandHandler(commandType).execute();
            };
            BPFToolBarView.prototype.cleanUp = function () {
                GenericWorkflowDesigner.EventManager.unsubscribe(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, this.executeCommand);
            };
            return BPFToolBarView;
        })(GenericWorkflowDesigner.ToolBarView);
        ProcessDesigner.BPFToolBarView = BPFToolBarView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../Model/Slot/Handlers/ClickHandlers/StageTileButtonClickHandler.ts" />
// -----------------------------------------------------------------------
// <copyright file="TileButtonView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var TileButtonView = (function (_super) {
            __extends(TileButtonView, _super);
            function TileButtonView(model, el) {
                _super.call(this, {
                    model: model,
                    el: el
                });
            }
            TileButtonView.prototype.initialize = function () {
                var stepsCount = this.model.getActivity().steps.length;
                this.tileClickHandler = new ProcessDesigner.StageTileButtonClickHandler(this.model.getActivity());
                var tpCount = 0;
                var stageName = this.model.getActivity().getActivityID();
                this.buttonTemplate = _.template("<div class=\"tileButtonDiv\"><span class=\"stepCountSpan\"><span class=\"stepCountSpanWrapper\"><span class=\"CCFSymbolFont stepTileSymbol tileCountSpanSymbol-size\"></span></span><span class=\"canvasAreaTileTitle3\" id=\"tileCount_" + stageName + "\">" + stepsCount + "</span></span><span class=\"tileInner ellipsis\" style=\"float:right;\"><button class=\"tilebutton\" type=\"submit\" id=\"tileButton_" + stageName + "\" tabindex=\"-1\"><span id=\"tileButtonSpan_" + stageName + "\" class=\"canvasAreaTileTitle4 truncateString\">" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_TileButtonSeeDetailsTooltip") + "</span><span class='CCFSymbolFont Expanded-symbol tileButtonImage' id=\"tileButtonImage_" + stageName + "\" ></span></button></span></div>");
            };
            TileButtonView.prototype.render = function () {
                var se = this;
                var ele = this.$el.find('div .stageTile');
                ele.append(this.buttonTemplate);
                this.$el.find('button').on("click", function (event) {
                    se.stageButtonClickedHandler(event);
                });
                return this;
            };
            TileButtonView.prototype.stageButtonClickedHandler = function (event) {
                if (ProcessDesigner.BPFToolBarView.addMode != ProcessDesigner.BPFToolBarAddMode.AddStep) {
                    event.stopPropagation();
                }
                this.tileClickHandler.click(this.$el);
                ProcessDesigner.CanvasDisplayUtility.HandleStageDetailsOverlap();
            };
            return TileButtonView;
        })(Backbone.View);
        ProcessDesigner.TileButtonView = TileButtonView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BPFPropertyViewFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFPropertyViewFactory = (function () {
            function BPFPropertyViewFactory() {
                this.propertyPagePath = "/_static/_common/scripts/TBXDesignerControl/";
            }
            BPFPropertyViewFactory.prototype.createProperty = function (currentModel) {
                var nodeType = currentModel.getActivityTypeID();
                var pageBaseUrl = this.getPropertyPageBaseUrl(nodeType);
                switch (nodeType) {
                    case ProcessDesigner.TBXActivityType.page:
                        return new ProcessDesigner.StagePropertyView(currentModel, pageBaseUrl);
                    case ProcessDesigner.TBXActivityType.condition:
                        return new ProcessDesigner.BranchPropertyView(currentModel, pageBaseUrl);
                    case ProcessDesigner.TBXActivityType.field:
                    case ProcessDesigner.TBXActivityType.label:
                    case ProcessDesigner.TBXActivityType.sectionLabel:
                        return new ProcessDesigner.StepPropertyView(currentModel, pageBaseUrl);
                    default:
                        return null;
                }
            };
            BPFPropertyViewFactory.prototype.getPropertyPageBaseUrl = function (pageType) {
                var propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[pageType].properties["propertypageurl"];
                var absolutePropertyPageBaseUrl = this.getUrl() + this.propertyPagePath + propertyPageBaseUrl;
                return absolutePropertyPageBaseUrl;
            };
            BPFPropertyViewFactory.prototype.getUrl = function () {
                var port = window.location.port;
                var host = window.location.hostname;
                var orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    orgUrl += ":" + port;
                }
                return orgUrl;
            };
            return BPFPropertyViewFactory;
        })();
        ProcessDesigner.BPFPropertyViewFactory = BPFPropertyViewFactory;
        var PropertyHtmlPageName = (function () {
            function PropertyHtmlPageName() {
            }
            PropertyHtmlPageName.stage = "StagePropertyDetails";
            PropertyHtmlPageName.condition = "BranchPropertyDetails";
            PropertyHtmlPageName.step = "StepPropertyDetails";
            PropertyHtmlPageName.label = "LabelPropertyDetails";
            return PropertyHtmlPageName;
        })();
        ProcessDesigner.PropertyHtmlPageName = PropertyHtmlPageName;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="DefaultBranchIndices.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the BPFActivityType Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var DefaultBranchIndices = (function () {
            function DefaultBranchIndices() {
            }
            DefaultBranchIndices.DefaultBranch = 0;
            DefaultBranchIndices.YesBranch = 1;
            DefaultBranchIndices.NoBranch = 2;
            return DefaultBranchIndices;
        })();
        ProcessDesigner.DefaultBranchIndices = DefaultBranchIndices;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionActivityTileInformation.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of the condition activity
// </summary>
//
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ConditionActivityTileInformation = (function (_super) {
            __extends(ConditionActivityTileInformation, _super);
            function ConditionActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.StageActivityTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.ConditionTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="condition-footer-div"></div>';
            }
            ConditionActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ConditionActivityTileInfo");
                result["Title"] = this.activityModel.parentStageEntityName;
                result["Subtitle"] = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTileName_condition");
                result["emptyTileImageTemplate"] = this.ConditionTemplate;
                result["emptyTileTemplate"] = this.StageActivityTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Condition_Activity_Name");
                return result;
            };
            return ConditionActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.ConditionActivityTileInformation = ConditionActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ResourceId = (function () {
            function ResourceId() {
            }
            ResourceId.EmptyActivityText = "[DRAG ELEMENT HERE]";
            ResourceId.ConditionYes = "ConditionYes";
            ResourceId.ConditionNo = "ConditionNo";
            ResourceId.LibraryGeneral = "LibraryGeneral";
            ResourceId.LibraryStage = "LibraryStage";
            ResourceId.LibraryCondition = "LibraryCondition";
            ResourceId.LibraryAction = "LibraryAction";
            ResourceId.LibraryCreateRecord = "LibraryCreateRecord";
            ResourceId.PropertyTitle = "PropertyTitle";
            ResourceId.CreateTileTitleFormat = "CreateTileTitleFormat";
            ResourceId.StopTileTitleFormat = "StopTileTitleFormat";
            ResourceId.SendEmailTileTitleFormat = "SendEmailTileTitleFormat";
            ResourceId.Description = "ProcessDescription";
            ResourceId.ConditionText = "ProcessConditionText";
            ResourceId.Entity = "ProcessEntity";
            ResourceId.PropertyPanelAriaLabel = "[PROPERTY PANEL ARIA LABEL]";
            ResourceId.ConfirmText = "ConfirmText";
            ResourceId.DiscardText = "DiscardText";
            ResourceId.StagePropertyPropertyTitle = "StagePropertyPropertyTitle";
            ResourceId.StagePropertyStageName = "StagePropertyStageName";
            ResourceId.StagePropertyStageCategory = "StagePropertyStageCategory";
            ResourceId.StagePropertyStageCategoryEmpty = "StagePropertyStageCategoryEmpty";
            ResourceId.StagePropertyEntity = "StagePropertyEntity";
            ResourceId.StagePropertyStepsSectionTitle = "StagePropertyStepsSectionTitle";
            ResourceId.StagePropertyStepHeader = "StagePropertyStepHeader";
            ResourceId.StagePropertyTypeHeader = "StagePropertyTypeHeader";
            ResourceId.StagePropertyFieldHeader = "StagePropertyFieldHeader";
            ResourceId.StagePropertyTypeValue = "StagePropertyTypeValue";
            ResourceId.StagePropertyRelationshipSectionTitle = "StagePropertyRelationshipSectionTitle";
            ResourceId.StagePropertyParentStageHeader = "StagePropertyParentStageHeader";
            ResourceId.StagePropertyParentEntityHeader = "StagePropertyParentEntityHeader";
            ResourceId.StagePropertyRelationshipHeader = "StagePropertyRelationshipColumnHeader";
            ResourceId.StagePropertyPropertyEntityTitle = "StagePropertyPropertyEntityTitle";
            ResourceId.AssignPropertyTitle = "AssignPropertyTitle";
            ResourceId.AssignPropertyAssignTo = "AssignPropertyAssignTo";
            ResourceId.CreatePropertyTitle = "CreatePropertyTitle";
            ResourceId.CreatePropertyFieldValues = "CreatePropertyFieldValues";
            ResourceId.UpdatePropertyTitle = "UpdatePropertyTitle";
            ResourceId.UpdatePropertyFieldValues = "UpdatePropertyFieldValues";
            ResourceId.ChangeStatusPropertyTitle = "ChangeStatusPropertyTitle";
            ResourceId.ChangeStatusPropertyStatus = "ChangeStatusPropertyStatus";
            ResourceId.CustomActivityPropertyTitle = "CustomActivityPropertyTitle";
            ResourceId.CustomActivityPropertyActivity = "CustomActivityPropertyActivity";
            ResourceId.ConditionPropertyTitle = "ConditionPropertyTitle";
            ResourceId.ConditionPropertyConditionTextLabel = "ConditionPropertyConditionTextLabel";
            ResourceId.ConditionPropertyEmptyPlaceholder = "ConditionPropertyEmptyPlaceholder";
            ResourceId.WaitBranchPropertyTitle = "WaitBranchPropertyTitle";
            ResourceId.WaitBranchPropertyConditionTextLabel = "WaitBranchPropertyConditionTextLabel";
            ResourceId.WaitPropertyTitle = "WaitPropertyTitle";
            ResourceId.WaitPropertyDisplayText = "WaitPropertyDisplayText";
            ResourceId.WaitTileTitle = "WaitTileTitle";
            ResourceId.SendEmailPropertyTitle = "SendEmailPropertyTitle";
            ResourceId.SendEmailPropertyEntity = "SendEmailPropertyEntity";
            ResourceId.SendEmailPropertyTemplate = "SendEmailPropertyTemplate";
            ResourceId.SendEmailPropertyBody = "SendEmailPropertyBody";
            ResourceId.ChildWorkflowPropertyTitle = "ChildWorkflowPropertyTitle";
            ResourceId.ChildWorkflowPropertyEntity = "ChildWorkflowPropertyEntity";
            ResourceId.ChildWorkflowPropertyWorkflowLabel = "ChildWorkflowPropertyWorkflowLabel";
            ResourceId.StopWorkflowPropertyTitle = "StopWorkflowPropertyTitle";
            ResourceId.StopWorkflowPropertyStatus = "StopWorkflowPropertyStatus";
            ResourceId.StopWorkflowPropertyStatusMessage = "StopWorkflowPropertyStatusMessage";
            ResourceId.ExecutionTime = "ExecutionTime";
            ResourceId.WorkflowTileTitle = "WorkflowTileTitle";
            ResourceId.WorkflowPropertyTitle = "WorkflowPropertyTitle";
            ResourceId.WorkflowPropertyEntity = "WorkflowPropertyEntity";
            ResourceId.WorkflowPropertyScope = "WorkflowPropertyScope";
            ResourceId.WorkflowPropertyUsageLabel = "WorkflowPropertyUsageLabel";
            ResourceId.WorkflowPropertyUsageChild = "WorkflowPropertyUsageChild";
            ResourceId.WorkflowPropertyUsageOnDemand = "WorkflowPropertyUsageOnDemand";
            ResourceId.WorkflowPropertyTriggerOnLabel = "WorkflowPropertyTriggerOnLabel";
            ResourceId.WorkflowPropertyTriggerCreateLabel = "WorkflowPropertyTriggerCreateLabel";
            ResourceId.WorkflowPropertyTriggerDeleteLabel = "WorkflowPropertyTriggerDeleteLabel";
            ResourceId.WorkflowPropertyTriggerLabel = "WorkflowPropertyTriggerLabel";
            ResourceId.WorkflowPropertyTriggerNone = "WorkflowPropertyTriggerNone";
            ResourceId.ActionTileTitle = "ActionTileTitle";
            ResourceId.ActionPropertyTitle = "ActionPropertyTitle";
            ResourceId.ActionPropertyIsTransacted = "ActionPropertyIsTransacted";
            ResourceId.ActionArgumentInput = "ActionArgumentInput";
            ResourceId.ActionArgumentOutput = "ActionArgumentOutput";
            ResourceId.ActionArgumentName = "ActionArgumentName";
            ResourceId.ActionArgumentType = "ActionArgumentType";
            ResourceId.BusinessProcessTileTitle = "BusinessProcessTileTitle";
            ResourceId.BusinessProcessPropertyTitle = "BusinessProcessPropertyTitle";
            ResourceId.BusinessProcessPropertyEntity = "BusinessProcessPropertyEntity";
            ResourceId.BusinessProcessPropertyOwner = "BusinessProcessPropertyOwner";
            ResourceId.BusinessProcessPropertyDescription = "BusinessProcessPropertyDescription";
            ResourceId.BusinessProcessPropertyRoleName = "BusinessProcessPropertyRoleName";
            ResourceId.BusinessProcessPropertyRoleBusinessUnit = "BBusinessProcessPropertyRoleBusinessUnit";
            ResourceId.BusinessProcessPropertySecurityRoles = "BusinessProcessPropertySecurityRoles";
            ResourceId.WorkflowRuntimeStatusLabel = "WorkflowRuntimeStatusLabel";
            ResourceId.PropertyPanelPlaceholderText = "PropertyPanelPlaceholderText";
            ResourceId.EmptyPropertyPlaceholder = "EmptyPropertyPlaceholder";
            ResourceId.RuntimeWorkflowPropertyExecutionDetailsLabel = "RuntimeWorkflowPropertyExecutionDetailsLabel";
            ResourceId.RuntimeJobOwnerLabel = "RuntimeJobOwnerLabel";
            ResourceId.RuntimeRegardingLabel = "RuntimeRegardingLabel";
            ResourceId.RuntimeCreatedOnLabel = "RuntimeCreatedOnLabel";
            ResourceId.RuntimeCompletedOnLabel = "RuntimeCompletedOnLabel";
            ResourceId.RuntimeRetryCountLabel = "RuntimeRetryCountLabel";
            ResourceId.RuntimeStartReasonLabel = "RuntimeStartReasonLabel";
            ResourceId.RuntimePostponeUntilLabel = "RuntimePostponeUntilLabel";
            ResourceId.DialogTileTitle = "DialogTileTitle";
            ResourceId.DialogPropertyTitle = "DialogPropertyTitle";
            ResourceId.DialogInputArguments = "DialogInputArguments";
            ResourceId.DialogVariables = "DialogVariables";
            ResourceId.DialogDefaultValues = "DialogDefaultValues";
            ResourceId.ChildDialogTileTitle = "ChildDialogTileTitle";
            ResourceId.ChildDialogPropertyTitle = "ChildDialogPropertyTitle";
            ResourceId.Dialog = "Dialog";
            ResourceId.PageTileTitle = "PageTileTitle";
            ResourceId.PagePropertyTitle = "PagePropertyTitle";
            ResourceId.PromptAndResponse = "PromptAndResponse";
            ResourceId.AssignValueTileStringFormat = "AssignValueTileStringFormat";
            ResourceId.AssignValuePropertyTitle = "AssignValuePropertyTitle";
            ResourceId.AssignValueVariableName = "AssignValueVariableName";
            ResourceId.Value = "Value";
            ResourceId.QueryTileTitle = "QueryTileTitle";
            ResourceId.QueryPropertyTitle = "QueryPropertyTitle";
            ResourceId.StatementLabel = "StatementLabel";
            return ResourceId;
        })();
        ProcessDesigner.ResourceId = ResourceId;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasDisplayUtility.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var CanvasDisplayUtility = (function () {
            function CanvasDisplayUtility() {
            }
            CanvasDisplayUtility.HandleStageDetailsOverlap = function () {
                if ($(".stage-detail-container-div").css("visibility") == "visible"
                    && !CommonTypes.Types.Object.isNullOrUndefined($(".stage-detail-container").css("visibility"))
                    && $(CanvasDisplayUtility.miniMapWrapperDivId).css("visibility") == "visible") {
                    if (CanvasDisplayUtility.Collision($("#mini-map-wrapper"), $(".stage-detail-container"))) {
                        $(CanvasDisplayUtility.miniMapWrapperDivId).css("visibility", "hidden");
                        $(CanvasDisplayUtility.showMiniMapDivId).css("visibility", "visible");
                        CanvasDisplayUtility.isMinimpStateChanged = true;
                    }
                    else {
                        if (CanvasDisplayUtility.isMinimpStateChanged == true) {
                            CanvasDisplayUtility.toggleStatus();
                            CanvasDisplayUtility.isMinimpStateChanged = false;
                        }
                    }
                }
                else {
                    if (CanvasDisplayUtility.isMinimpStateChanged == true) {
                        if (!CommonTypes.Types.Object.isNullOrUndefined($(".stage-detail-container").css("visibility"))) {
                            if (!CanvasDisplayUtility.Collision($("#mini-map-wrapper"), $(".stage-detail-container"))) {
                                CanvasDisplayUtility.toggleStatus();
                                CanvasDisplayUtility.isMinimpStateChanged = false;
                            }
                        }
                        else {
                            CanvasDisplayUtility.toggleStatus();
                            CanvasDisplayUtility.isMinimpStateChanged = false;
                        }
                    }
                }
            };
            CanvasDisplayUtility.toggleStatus = function () {
                if ($(CanvasDisplayUtility.miniMapWrapperDivId).css("visibility") == "visible") {
                    $(CanvasDisplayUtility.miniMapWrapperDivId).css("visibility", "hidden");
                }
                else {
                    $(CanvasDisplayUtility.miniMapWrapperDivId).css("visibility", "visible");
                }
                if ($(CanvasDisplayUtility.showMiniMapDivId).css("visibility") == "visible") {
                    $(CanvasDisplayUtility.showMiniMapDivId).css("visibility", "hidden");
                }
                else {
                    $(CanvasDisplayUtility.showMiniMapDivId).css("visibility", "visible");
                }
            };
            CanvasDisplayUtility.Collision = function ($div1, $div2) {
                var x1 = $div1.offset().left;
                var y1 = $div1.offset().top;
                var h1 = $div1.outerHeight(true);
                var w1 = $div1.outerWidth(true);
                var b1 = y1 + h1;
                var r1 = x1 + w1;
                var x2 = $div2.offset().left;
                var y2 = $div2.offset().top;
                var h2 = $div2.outerHeight(true);
                var w2 = $div2.outerWidth(true);
                var b2 = y2 + h2;
                var r2 = x2 + w2;
                if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)
                    return false;
                return true;
            };
            CanvasDisplayUtility.isMinimpStateChanged = false;
            CanvasDisplayUtility.miniMapWrapperDivId = "#mini-map-wrapper";
            CanvasDisplayUtility.showMiniMapDivId = "#show-mini-map-div";
            return CanvasDisplayUtility;
        })();
        ProcessDesigner.CanvasDisplayUtility = CanvasDisplayUtility;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="Event.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Event = (function () {
            function Event() {
            }
            Event.prototype.invoke = function (data) {
                for (var i = 0; i < this.listeners.length; ++i) {
                    this.listeners[i](data);
                }
            };
            Event.prototype.add = function (listener) {
                this.listeners.push(listener);
            };
            Event.prototype.remove = function (listener) {
            };
            return Event;
        })();
        ProcessDesigner.Event = Event;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="INotifyPropertyChanged.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PropertyChangeEventArgs = (function () {
            function PropertyChangeEventArgs(propertyName) {
                if (propertyName === void 0) { propertyName = ""; }
                this.propertyName = propertyName;
            }
            return PropertyChangeEventArgs;
        })();
        ProcessDesigner.PropertyChangeEventArgs = PropertyChangeEventArgs;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessDesignerControlManager.ts" company="Microsoft">//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../src/Control/BPF/Converter/BPFToActivityCollectionVisitor.ts"/>
/// <reference path="../src/Control/BPF/View/BPFPropertyViewFactory.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ControlManager = (function () {
            function ControlManager(container) {
                this.container = container;
                this.gwfdesigner = new GenericWorkflowDesigner.GenericWorkflowControl();
            }
            ControlManager.prototype.initialize = function (processObject) {
                ControlManager.processObject = processObject;
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.editDone, this.editDone, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.activityDropped, ProcessDesigner.ProcessActivityDefinitionModel.prototype.reinitialize, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.resetToolbar, this.resetToolbar, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.activityDeleted, this.deleteDone, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems, this.refreshToolbarItems, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.setKeyDownEvents, ControlManager.SetCanvasFocusEvent, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle, this.updateTileTitle, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.clearSelections, ControlManager.ClearSelections, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages, function () {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ProcessDesigner.Validation.Errors.refreshErrorMessages))
                        ProcessDesigner.Validation.Errors.refreshErrorMessages();
                }, null);
            };
            ControlManager.setProcessTitle = function (title) {
                ControlManager.processTitle = title;
                ProcessDesigner.TBXDesignerControl.Title = title;
            };
            ControlManager.setProcessDescription = function (description) {
                ControlManager.processDescription = description;
                ProcessDesigner.TBXDesignerControl.Description = description;
            };
            ControlManager.prototype.editDone = function () {
                ControlManager.processObject.editDone();
                if (ProcessDesigner.ValidateBPF.shouldValidate()) {
                    if (ProcessDesigner.TBXDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.None) {
                        if (ProcessDesigner.Validation.Engine.getLastAction() == ProcessDesigner.Validation.Level.Save) {
                            ProcessDesigner.Validation.Engine.setAction(ProcessDesigner.Validation.Level.Save);
                        }
                    }
                    else {
                        ProcessDesigner.Validation.Engine.setAction(ProcessDesigner.Validation.Level.Validate);
                    }
                    ProcessDesigner.ValidateBPF.validate();
                }
            };
            ControlManager.prototype.resetToolbar = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                if (ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.AddStep || ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.PasteStep) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                }
                ControlManager.ClearSelections();
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    $(".cutTile").removeClass("cutTile");
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                    GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([]);
                }
                ProcessDesigner.ConnectorActivityListView.targetID = null;
                ProcessDesigner.ConnectorActivityListView.removeConnectorButton();
                if ($('#canvas').find('.connectorSecondPoint').length > 0) {
                    $('#canvas').find('.connectorSecondPoint').removeClass("connectorSecondPoint");
                    $('#canvas').find('.notificationMessage').remove();
                    $('#canvas').find('.connectFirstPointNotificationMessage').removeClass("connectFirstPointNotificationMessage");
                    $('#canvas').find('.connectSecondPointNotificationMessage').removeClass("connectSecondPointNotificationMessage");
                }
            };
            ControlManager.prototype.deleteDone = function (deletedAtivities) {
                for (var i = 0; i < deletedAtivities.length; i++) {
                    var currentActivity = deletedAtivities[i];
                    var activityType = currentActivity.getActivityTypeID();
                    switch (activityType.toLowerCase()) {
                        case ProcessDesigner.TBXActivityType.page:
                            ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent(currentActivity.stageId, ProcessDesigner.TBXActivityType.page, "");
                            break;
                        case ProcessDesigner.TBXActivityType.field:
                        case ProcessDesigner.TBXActivityType.label:
                        case ProcessDesigner.TBXActivityType.sectionLabel:
                            var parentStageActivity = currentActivity.getParent();
                            ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent(currentActivity.stepId, activityType.toLowerCase(), parentStageActivity.stageId);
                            break;
                        case ProcessDesigner.TBXActivityType.condition:
                            ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent("", ProcessDesigner.TBXActivityType.condition, "");
                            break;
                    }
                }
            };
            ControlManager.prototype.refreshToolbarItems = function () {
                var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                ProcessDesigner.ConnectorActivityListView.removeConnectorButton();
                if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                    $('#cut').prop('disabled', true);
                    $('#copy').prop('disabled', true);
                    $('#delete').prop('disabled', true);
                    $('#cut').attr("aria-disabled", true);
                    $('#copy').attr("aria-disabled", true);
                    $('#delete').attr("aria-disabled", true);
                    $('#toolBarItemTitleCut').addClass('utilityBarItem-disabled-mode');
                    $('#toolBarItemTitleCopy').addClass('utilityBarItem-disabled-mode');
                    $('#toolBarItemTitleDelete').addClass('utilityBarItem-disabled-mode');
                }
                else {
                    var firstPoint = selectedActivities[0];
                    ProcessDesigner.ConnectorActivityListSubView.prototype.fillAllGlobalValues(firstPoint);
                    if (ProcessDesigner.ConnectorActivityListView.shouldEnableConnectorMenu(firstPoint)) {
                        $('#connector').prop('disabled', false);
                        $('#connector').attr("aria-disabled", false);
                        $('#toolBarItemTitleConnector').removeClass('utilityBarItem-disabled-mode');
                        $('#toolBarItemTitleConnector').addClass('utilityBarItem-normal-mode');
                    }
                    $('#copy').prop('disabled', false);
                    $('#copy').attr("aria-disabled", false);
                    $('#toolBarItemTitleCopy').removeClass('utilityBarItem-disabled-mode');
                    $('#toolBarItemTitleCopy').addClass('utilityBarItem-normal-mode');
                    if (selectedActivities[0] == GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()) {
                        $('#delete').prop('disabled', true);
                        $('#cut').prop('disabled', true);
                        $('#delete').attr("aria-disabled", true);
                        $('#cut').attr("aria-disabled", true);
                        $('#toolBarItemTitleDelete').addClass('utilityBarItem-disabled-mode');
                        $('#toolBarItemTitleCut').addClass('utilityBarItem-disabled-mode');
                    }
                    else {
                        $('#cut').prop('disabled', false);
                        $('#delete').prop('disabled', false);
                        $('#cut').attr("aria-disabled", false);
                        $('#delete').attr("aria-disabled", false);
                        $('#toolBarItemTitleDelete').removeClass('utilityBarItem-disabled-mode');
                        $('#toolBarItemTitleCut').removeClass('utilityBarItem-disabled-mode');
                        $('#toolBarItemTitleDelete').addClass('utilityBarItem-normal-mode');
                        $('#toolBarItemTitleCut').addClass('utilityBarItem-normal-mode');
                    }
                    if (selectedActivities[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.condition
                        || (!CommonTypes.Types.Object.isNullOrUndefined(selectedActivities[0].getParent()) && selectedActivities[0].getParent().getActivityTypeID() == ProcessDesigner.TBXActivityType.condition && selectedActivities[0].getParentBranchID() == 0 && selectedActivities[0].isLeaf())) {
                        $('#cut').prop('disabled', true);
                        $('#cut').attr("aria-disabled", true);
                        $('#toolBarItemTitleCut').removeClass('utilityBarItem-normal-mode');
                        $('#toolBarItemTitleCut').addClass('utilityBarItem-disabled-mode');
                    }
                    if ((selectedActivities[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.field || selectedActivities[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.label || selectedActivities[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.sectionLabel) && (selectedActivities[0].getParent()).steps.length == 1) {
                        $('#cut').prop('disabled', true);
                        $('#delete').prop('disabled', true);
                        $('#cut').attr("aria-disabled", true);
                        $('#delete').attr("aria-disabled", true);
                        $('#toolBarItemTitleDelete').addClass('utilityBarItem-disabled-mode');
                        $('#toolBarItemTitleCut').addClass('utilityBarItem-disabled-mode');
                    }
                    if (selectedActivities[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.page && selectedActivities[0].getParentBranchID() == ProcessDesigner.branchType.Else && (!CommonTypes.Types.Object.isNullOrUndefined(selectedActivities[0].getChildActivitiesSorted()[0])) && selectedActivities[0].getChildActivitiesSorted()[0].getActivityTypeID() == ProcessDesigner.TBXActivityType.condition) {
                        $('#cut').prop('disabled', true);
                        $('#delete').prop('disabled', true);
                        $('#cut').attr("aria-disabled", true);
                        $('#delete').attr("aria-disabled", true);
                    }
                }
                if (CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities()) || GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities().length <= 0) {
                    $('#paste').prop('disabled', true);
                    $('#paste').attr("aria-disabled", true);
                    $('#toolBarItemTitlePaste').addClass('utilityBarItem-disabled-mode');
                }
                else {
                    $('#paste').prop('disabled', false);
                    $('#paste').attr("aria-disabled", false);
                    $('#toolBarItemTitlePaste').removeClass('utilityBarItem-disabled-mode');
                    $('#toolBarItemTitlePaste').addClass('utilityBarItem-normal-mode');
                }
            };
            ControlManager.prototype.render = function (inputBag) {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                GenericWorkflowDesigner.Settings.slotHandlerFactory = new ProcessDesigner.BPFSlotTileHolderHandlerFactory();
                GenericWorkflowDesigner.Settings.activityDefinitionFactory = new ProcessDesigner.TBXActivityDefinitionFactory();
                GenericWorkflowDesigner.Settings.propertyViewFactory = new ProcessDesigner.BPFPropertyViewFactory();
                GenericWorkflowDesigner.Settings.tileInformationFactory = new ProcessDesigner.BPFTileInformationFactory();
                GenericWorkflowDesigner.Settings.iconFactory = new ProcessDesigner.BPFIconFactory();
                GenericWorkflowDesigner.Settings.flyoutContentProvider = new GenericWorkflowDesigner.FlyoutContentProvider();
                GenericWorkflowDesigner.Settings.spinnerItem = "/_imgs/btn_lookup_resolving.gif";
                GenericWorkflowDesigner.Settings.activityDropHandlerFactory = new ProcessDesigner.BPFActivityDropHandlerFactory();
                GenericWorkflowDesigner.Settings.graphics = new ProcessDesigner.BPFGraphics();
                GenericWorkflowDesigner.Settings.workflowTree = new ProcessDesigner.BPFWorkflowTree();
                GenericWorkflowDesigner.Settings.workflowTree.setActivityCollection(new ProcessDesigner.BPFActivityDefinitionCollection());
                GenericWorkflowDesigner.Settings.slotInsertHorizontalHandlerFactory = new GenericWorkflowDesigner.SlotInsertHorizontalHandlerFactory();
                GenericWorkflowDesigner.Settings.slotInsertVerticalHandlerFactory = new GenericWorkflowDesigner.SlotInsertVerticalHandlerFactory();
                if (window.LOCID_UI_DIR == "RTL") {
                    GenericWorkflowDesigner.Settings.renderRTL = true;
                    if (window.LOCID_LCID == "1025")
                        GenericWorkflowDesigner.Settings.isArabic = true;
                }
                else
                    GenericWorkflowDesigner.Settings.renderRTL = false;
                GenericWorkflowDesigner.designerType = GenericWorkflowDesigner.DesignerType.TbxDesigner;
                GenericWorkflowDesigner.Settings.subsequentActivityGenerator = new ProcessDesigner.BPFSubsequentActivityGenerator();
                GenericWorkflowDesigner.Settings.slotGeneratorProvider = new ProcessDesigner.BPFSlotGeneratorProvider();
                GenericWorkflowDesigner.Settings.notification = new GenericWorkflowDesigner.Notification("#notificationArea");
                GenericWorkflowDesigner.Settings.canvasDragDropValidator = new ProcessDesigner.BPFDragDropValidator();
                var processDesigner = inputBag.ProcessData;
                this.addCanvasElementToHtml();
                this.SetTabIndices();
                if (ControlManager.validateProcessData(inputBag.ProcessData)) {
                    ControlManager.processJson = inputBag.ProcessData;
                    this.updateProcessActivityTree(ControlManager.processJson.raw);
                }
                GenericWorkflowDesigner.Settings.slotHandlerProvider = new ProcessDesigner.BPFSlotHandlerProvider();
                this.initializeToolBar();
                this.initializeToolTipMenubar();
                GenericWorkflowDesigner.MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible();
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_LoadTime", stopwatch.elapsedMilliseconds.toString());
            };
            ControlManager.prototype.updateTileTitle = function () {
                var slotsList = $('#canvas').children("div .slot");
                var isFirst = true;
                $.each(slotsList, function (slotIndex, slot) {
                    var tbxTile = $("#" + slot.getAttribute("id")).children("div .tile").first().children("div").first();
                    if (tbxTile.find("[class~='stageTile']").length > 0) {
                        var pageTileId = $("#" + slot.getAttribute("id")).children("div .tile").children("div .stageTile").attr("id");
                        var tileTitle = $("#" + pageTileId).find("span.tileTitle").attr("title");
                        $("#" + slot.getAttribute("id")).attr("title", tileTitle);
                        var elementCount = $("#" + pageTileId).find("#tileCount_" + pageTileId).html();
                        var errorMessage = $("#" + pageTileId).find(".tileError").attr("title");
                        var titleForScreenReader = tileTitle + "\n" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_WorkFlow_ElementCount") + " " + elementCount + "\n" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_TileButtonSeeDetailsTooltip");
                        if (errorMessage != null)
                            titleForScreenReader = titleForScreenReader + "\n" + errorMessage;
                        $("#" + pageTileId).find(".tileButtonDiv").attr("title", titleForScreenReader);
                        $("#" + pageTileId).find(".stageTile").attr("title", titleForScreenReader);
                        if (!isFirst) {
                            $("#" + slot.getAttribute("id")).children("div .tile").children("div .stageTile").attr("tabindex", "-1");
                        }
                    }
                    if (tbxTile.find("[class~='conditionTile']").length > 0) {
                        var tileTitle1 = tbxTile.find(".tileTableCell").children("div").children().html();
                        var tileTitle2 = tbxTile.find(".tileTableCell").children("span").children("input").val();
                        var errorMessage = tbxTile.find(".tileError").attr("title");
                        var completeTileTitle = tileTitle1 + "" + tileTitle2;
                        if (errorMessage != null)
                            completeTileTitle = completeTileTitle + "\n" + errorMessage;
                        $("#" + slot.getAttribute("id")).attr("title", completeTileTitle);
                        $("#" + slot.getAttribute("id")).children("div .tile").children("div .conditionTile").attr("title", completeTileTitle);
                        $("#" + slot.getAttribute("id")).children("div .tile").children("div .conditionTile").attr("tabindex", "-1");
                    }
                    isFirst = false;
                    ControlManager.StageTileTitle = true;
                });
            };
            ControlManager.prototype.showDialog = function (data) {
                if (data.yesCallbackAction || data.noCallbackAction) {
                    var dialogStrings = new window.parent["Xrm"].ConfirmDialogStrings();
                    dialogStrings.title = data.dialogTitle;
                    dialogStrings.subtitle = data.dialogMessage;
                    var options = new window.parent["Xrm"].DialogOptions();
                    options.height = 200;
                    options.width = 550;
                    window.parent["Xrm"].Dialog.openConfirmDialog(dialogStrings, options, data.yesCallbackAction, data.noCallbackAction);
                }
                else {
                    var dialogStrings = new window.parent["Xrm"].AlertDialogStrings();
                    dialogStrings.title = data.dialogTitle;
                    dialogStrings.text = data.dialogMessage;
                    if (!CommonTypes.Types.Object.isNullOrUndefined(data.confirmButtonLabel)) {
                        dialogStrings.confirmButtonLabel = data.confirmButtonLabel;
                    }
                    else {
                        dialogStrings.confirmButtonLabel = window.LOCID_DLG_OK_BTN_LABEL.toUpperCase();
                    }
                    var options = new window.parent["Xrm"].DialogOptions();
                    options.height = 200;
                    options.width = 550;
                    window.parent["Xrm"].Dialog.openAlertDialog(dialogStrings, options);
                }
            };
            ControlManager.ShowSeeDetails = function () {
                if (CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.currentModel)) {
                    return;
                }
                var currentStage = ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel);
                if (CommonTypes.Types.Object.isNullOrUndefined(currentStage)) {
                    return;
                }
                if (ProcessDesigner.BPFToolBarView.addMode == ProcessDesigner.BPFToolBarAddMode.AddStep)
                    ProcessDesigner.BPFToolBarView.addMode = ProcessDesigner.BPFToolBarAddMode.None;
                var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentStage.getActivityID();
                $(currentTileButtonName).click();
            };
            ControlManager.prototype.ShowHideSeeDetails = function () {
                var stageDetailsContainer = $("#canvas").find(".stage-detail-container");
                if (stageDetailsContainer.length > 0) {
                    var openSeeDetailsViewId = stageDetailsContainer.attr("id");
                    var stageId = openSeeDetailsViewId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, '');
                    var currentElementClicked = event.currentTarget;
                    if (currentElementClicked != null) {
                        var currentElementClickedId = $(currentElementClicked).attr("id");
                        if (currentElementClickedId != null && stageId !== currentElementClickedId) {
                            stageDetailsContainer.remove();
                            var openTileImageName = openSeeDetailsViewId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonImagePrefix);
                            if ($(openTileImageName).hasClass("Expanded-symbol")) {
                                $(openTileImageName).removeClass("Expanded-symbol");
                                $(openTileImageName).addClass("Collapsed-symbol");
                            }
                            else {
                                $(openTileImageName).removeClass("Collapsed-symbol");
                                $(openTileImageName).addClass("Expanded-symbol");
                            }
                        }
                    }
                }
            };
            ControlManager.CloseSeeDetails = function () {
                var stageDetailsContainer = $("#canvas").find(".stage-detail-container");
                stageDetailsContainer.remove();
            };
            ControlManager.updateSlotCount = function (slot) {
                var stageTileId = slot.$el.children("div .tile").children("div .stageTile").attr("id");
                $("#" + stageTileId).find("#tileCount_" + stageTileId).html(slot.model.getActivity().steps.length);
            };
            ControlManager.GetStageModel = function (currentModel) {
                if (currentModel.getActivityTypeID() == ProcessDesigner.TBXActivityType.field || currentModel.getActivityTypeID() == ProcessDesigner.TBXActivityType.label || currentModel.getActivityTypeID() == ProcessDesigner.TBXActivityType.sectionLabel) {
                    return currentModel.parentStage;
                }
                else if (currentModel.getActivityTypeID() == ProcessDesigner.TBXActivityType.page) {
                    return currentModel;
                }
            };
            ControlManager.prototype.addCanvasElementToHtml = function () {
                var canvasHtml = '<div id="notificationArea" class="notificationArea" aria-live="assertive"></div>'
                    + '<div class="pageSectionsToolbar" id= "Panel1" role="application"></div>'
                    + '<div id="workspaceWrapperID" class="workspaceWrapper" role="application">'
                    + '<div id="canvasWrapper" >'
                    + '<div id= "zoomIconHolder" ></div>'
                    + '<div id= "canvas" style="height:auto; width:auto;"></div>'
                    + '</div>'
                    + '<div id="globalButtonArea" ></div>'
                    + '<div id= "loader" ></div>'
                    + '</div>'
                    + '<div id="toolpane" >'
                    + '<ul>'
                    + '<li><a id="libraryTab" href= "#library" > <span title="' + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTab_Label") + '" class="ellipsis workspaceLeftPaneOptionLabelWidth" id= "lblLibrary"  tabindex=' + GenericWorkflowDesigner.Settings.tabIndexValue + '> ' + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_LibraryTab_Label") + ' </span> </a > </li>'
                    + '<li><a id="propertyTab" href= "#property" > <span title="' + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_PropertyTab_Label") + '" class=" ellipsis workspaceLeftPaneOptionLabelWidth" id= "lblProperty" tabindex=' + GenericWorkflowDesigner.Settings.tabIndexValue + ' > ' + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_PropertyTab_Label") + ' </span> </a > </li>'
                    + '</ul>'
                    + '<div id="library" > </div>'
                    + '<div id="property" > </div>'
                    + '</div>';
                var parentContainer = window["parentContainer"];
                if (CommonTypes.Types.Object.isNullOrUndefined(parentContainer)) {
                    parentContainer = $('.custom_control_section');
                }
                else {
                    parentContainer = $('#' + parentContainer);
                }
                var processEditor = parentContainer;
                processEditor.append(canvasHtml);
                $("#libraryTab").on("click", function (event) {
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearSelections);
                    event.stopPropagation();
                });
                if (GenericWorkflowDesigner.Settings.renderRTL) {
                    $("html").addClass("rtl");
                }
                if (GenericWorkflowDesigner.Settings.isArabic) {
                    $("html").addClass("arabic");
                }
                $('#canvasWrapper').on("click", function (event) {
                    var target = event.target || event.srcElement;
                    if (target.id.indexOf('mini-map') < 0 && target.id.indexOf('hitarea') < 0) {
                        $("#canvas").children(".hoverOverDroppable").removeAttr("aria-label").removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                        $("#canvas").children(".cutTile").removeClass("cutTile");
                        $('#sortable').children().remove(".place-holder-listitem");
                        $("#Add.toolbarItem").trigger("mouseleave");
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearSelections);
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.resetToolbar);
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                        event.stopPropagation();
                    }
                });
            };
            ControlManager.prototype.initializeToolBar = function () {
                var toolbar = new ProcessDesigner.BPFToolBarView();
                $('.pageSectionsToolbar').append(toolbar.render());
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            ControlManager.prototype.initializeToolTipMenubar = function () {
                var validationOn = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ValidateMode_On");
                var validationOff = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ValidateMode_Off");
                var processSaveAs = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("GenericWorkflowDesignerControl_MenuItem_Label_Saveas_Tooltip");
                var updateTooltip = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("GenericWorkflowDesignerControl_MenuItem_Label_Update_Tooltip");
                var showDependencies = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("GenericWorkflowDesignerControl_MenuItem_Label_ShowDependencies_Tooltip");
                var actionTooltip = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("GenericWorkflowDesignerControl_MenuItem_Label_Action_Tooltip");
                $("#_MBValidateOn").attr("title", validationOff);
                $("#_MBValidateOff").attr("title", validationOn);
                $("#_MBSaveAs").attr("title", processSaveAs);
                $("#_MBUpdate").attr("title", updateTooltip);
                $("#_MBDependencies").attr("title", showDependencies);
                $("#mnuaction").attr("title", actionTooltip);
            };
            ControlManager.prototype.SetTabIndices = function () {
                $("#canvas").attr('tabindex', -1);
                $(".columnOverflow.majorComponent").attr('tabindex', -1);
                $(".section_control.custom_control_column").attr('tabindex', -1);
            };
            ControlManager.prototype.setLocalizedStaticStrings = function () {
                ProcessDesigner.TBXPageActivity.defaultPageName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_TBXStageActivity_PageName");
                ProcessDesigner.TBXStepActivity.defaultFieldName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_TBXStepActivity_FieldName");
                ProcessDesigner.TBXStepActivity.defaultLabelName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_TBXStepActivity_LabelName");
                ProcessDesigner.TBXStepActivity.defaultSectionLabelName = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_SectionLabelName");
            };
            ControlManager.prototype.updateProcessActivityTree = function (record) {
                if (CommonTypes.Types.String.isNullOrEmpty(record)) {
                    throw (ControlManager.EmptyOrNullInputProcessData);
                }
                else {
                    try {
                        GenericWorkflowDesigner.EventManager.subscribeWithReturnValue(GenericWorkflowDesigner.FrameworkEvents.getActivityDefinitions, ControlManager.InitializeAndGetActivityTreeFromJson);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.showDialog, this.showDialog, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.propertyMessageReceived, ControlManager.ShowSeeDetails, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick, this.ShowHideSeeDetails, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.showHideSeeDetails, this.ShowHideSeeDetails, null);
                        var appModelObject = new GenericWorkflowDesigner.appModel();
                        appModelObject.workflowAssociatedEntityOID = "fdsf";
                        appModelObject.language = "1";
                        appModelObject.supportMode = "1";
                        appModelObject.applicationRoot = "http://localhost";
                        appModelObject.helpPageLink = "help.html";
                        appModelObject.loaderId = "#loader";
                        appModelObject.canvasId = "#canvas";
                        appModelObject.toolpaneId = "#toolpane";
                        appModelObject.workspaceWrapperId = ".workspaceWrapper";
                        appModelObject.librabryId = "#library";
                        appModelObject.propertyId = "#property";
                        appModelObject.goalId = "#goal";
                        appModelObject.zoomIconHolderId = "#zoomIconHolder";
                        appModelObject.workflowSwitchId = "#workflowSwitch";
                        appModelObject.validateId = "#validate";
                        appModelObject.lblLibraryId = "#lblLibrary";
                        appModelObject.loadingImageId = "#loadingImage";
                        appModelObject.workflowProviderType = 2;
                        appModelObject.workflowID = null;
                        appModelObject.libraryTilesDataFileName = "/_static/_common/scripts/TBXDesignerControl/LibraryTilesData_TBX.xml";
                        var canvasContainer = $(appModelObject.canvasId);
                        var canvasOffset = canvasContainer.offset();
                        GenericWorkflowDesigner.Settings.layoutProperties = new ProcessDesigner.BPFLayoutProperties(canvasOffset);
                        this.setLocalizedStaticStrings();
                        ProcessDesigner.TBXConditionActivity.overrideWorkflowObjectModelMethods();
                        this.gwfdesigner.Initialize(appModelObject);
                        var json = ControlManager.ConvertBPFActivityTreeToJson();
                        ControlManager.SetCanvasFocusEvent();
                        this.overrideGenericWorkflowEvents();
                    }
                    catch (err) {
                        throw (ControlManager.InvalidInputProcessData);
                    }
                }
            };
            ControlManager.prototype.overrideGenericWorkflowEvents = function () {
                GenericWorkflowDesigner.EventManager.unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updateProperty);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateProperty, this.propertyChangePreHandler, null);
            };
            ControlManager.reorderStep = function (model, currentPosition, newPosition) {
                var activity = model;
                if ((currentPosition != newPosition) && (currentPosition > 0) && (newPosition > 0) && (currentPosition <= activity.steps.length) && (newPosition <= activity.steps.length)) {
                    var step = activity.steps.splice(currentPosition - 1, 1);
                    activity.steps.splice(newPosition - 1, 0, step[0]);
                }
                activity.trigger("changeModel");
                this.ShowSeeDetails();
            };
            ControlManager.prototype.propertyChangePreHandler = function (editItems) {
                ControlManager.updateProperty(editItems);
            };
            ControlManager.updateProperty = function (data) {
                var currentModel = GenericWorkflowDesigner.currentModel;
                Object.keys(data).forEach(function (key) {
                    if (key == "_sequence" && GenericWorkflowDesigner.currentModel[key] != data[key]) {
                        var model = ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel);
                        if (model != null)
                            ControlManager.reorderStep(model, GenericWorkflowDesigner.currentModel[key], data[key]);
                        GenericWorkflowDesigner.currentModel = currentModel;
                    }
                    else {
                        GenericWorkflowDesigner.currentModel[key] = data[key];
                    }
                });
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                if (!(GenericWorkflowDesigner.currentModel instanceof ProcessDesigner.TBXConditionActivity)) {
                    GenericWorkflowDesigner.currentModel.trigger("changeModel");
                }
                else {
                    GenericWorkflowDesigner.currentModel.trigger("changeConditionModel");
                }
            };
            ControlManager.validateProcessData = function (processdata) {
                if (CommonTypes.Types.Object.isNullOrUndefined(processdata)) {
                    throw (ControlManager.EmptyOrNullInputProcessData);
                }
                else if (CommonTypes.Types.Object.isNullOrUndefined(processdata.raw) || CommonTypes.Types.String.isNullOrEmpty(processdata.raw)) {
                    throw (ControlManager.EmptyOrNullRawPropertyOfInputProcessData);
                }
                return true;
            };
            ControlManager.prototype.validateDependentOptionSetData = function () {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                ProcessDesigner.ValidateBPF.validateDependentOptionSet();
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_ValidateDependentOptionSet", stopwatch.elapsedMilliseconds.toString());
            };
            ControlManager.SetShortcutKeysToMoveOnMajorAreas = function (event) {
                if (event.keyCode == 77 && event.altKey) {
                    ControlManager.ClearSelections();
                    ControlManager.SetFocusToMiniMapButtons();
                }
                else if (event.keyCode == 17) {
                    ControlManager.keyMap[event.keyCode] = true;
                }
                else if (event.keyCode == 18) {
                    ControlManager.keyMap[event.keyCode] = true;
                }
                else if (event.keyCode == 78) {
                    if (event.srcElement != undefined && $(event.srcElement).attr("type") != "text" && $(event.srcElement).attr("role") != "combobox" && $(event.srcElement).prop("tagName") != "TEXTAREA") {
                        if (ControlManager.keyMap[17] && ControlManager.keyMap[18]) {
                            ControlManager.keyMap[17] = false;
                            ControlManager.keyMap[18] = false;
                            ControlManager.SetFunctionalityForButtonsWithShortcutKeys("#Add");
                        }
                    }
                }
                else if (event.altKey && event.keyCode == 83) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("#snapshot");
                }
                else if (event.keyCode == 36 && event.shiftKey) {
                    ControlManager.ClearSelections();
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                    GenericWorkflowDesigner.currentModel = activities[0];
                    $("#canvas").children("div .slot").first().focus();
                }
                else if (event.shiftKey && event.keyCode == 45) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#Add");
                }
                else if (event.altKey && event.keyCode == 189) {
                    ControlManager.ClearSelections();
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#zoomOut");
                }
                else if (event.altKey && event.keyCode == 187) {
                    ControlManager.ClearSelections();
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#zoomIn");
                }
                else if (event.altKey && event.keyCode == 220) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#fitToScreen");
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 67) {
                    ControlManager.ClearSelections();
                    $("#propertyTab").children().attr("aria-selected", false);
                    $("#libraryTab").children().attr("aria-selected", true);
                    $("#libraryTab").children().attr("role", "tab");
                    $("#libraryTab").children().focus();
                    $("#libraryTab").click();
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 80) {
                    ControlManager.ClearSelections();
                    $("#libraryTab").children().attr("aria-selected", false);
                    $("#propertyTab").children().attr("aria-selected", true);
                    $("#propertyTab").children().attr("role", "tab");
                    $("#propertyTab").children().focus();
                    GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                }
                else if (event.keyCode == 27) {
                    ControlManager.ClearSelections();
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 68) {
                    ControlManager.NavigateToSelectedElement();
                    event.stopPropagation();
                }
                event.stopPropagation();
            };
            ControlManager.SetFunctionalityForButtonsWithShortcutKeys = function (idName) {
                if (typeof event != 'undefined')
                    event.preventDefault();
                ControlManager.ClearSelections();
                $(idName).focus();
                $(idName).click();
            };
            ControlManager.InitializeAndGetActivityTreeFromJson = function () {
                var workflowStep = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep("account", 0);
                var activities = null;
                if (ControlManager.validateProcessData(ControlManager.processJson)) {
                    workflowStep.initializeFromDynamic($.parseJSON(ControlManager.processJson.raw));
                    ControlManager.processTitle = workflowStep.get_title();
                    ControlManager.processDescription = workflowStep.get_Description();
                    var converter = new ProcessDesigner.TbxToActivityCollectionVisitor();
                    activities = converter.convert(workflowStep);
                }
                return activities;
            };
            ControlManager.MoveOnAddOrSnapshotButton = function (event) {
                if (event.shiftKey && event.keyCode == 65) {
                    ControlManager.ClearSelections();
                    $("#Add").focus();
                }
                else if (event.shiftKey && event.keyCode == 83) {
                    ControlManager.ClearSelections();
                    $("#snapshot").focus();
                }
            };
            ControlManager.SetCanvasFocusEvent = function () {
                if ($('#canvas').children("div .slot").first().length > 0) {
                    $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").attr("tabindex", GenericWorkflowDesigner.Settings.tabIndexValue);
                    $("#canvas").children("div .slot").first().focusin(function (event) {
                        if (!($(".stageTile.selected").length > 0 || $(".conditionTile.selected").length > 0))
                            $("#canvas").children("div .slot").first().find(".stageTile").addClass("selected");
                    });
                    $("#canvas").children("div .slot").first().focusout(function (event) {
                        $("#canvas").children("div .slot").first().find(".stageTile").removeClass("selected");
                    });
                    $("#canvas").children("div .slot").first().keydown(function (event) {
                        if (event.keyCode == 9) {
                            ControlManager.RemoveSelectedClassFromDivs();
                            $("#canvas").children("div .slot").first().find(".stageTile").addClass("selected");
                        }
                    });
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
                }
                if ($("#libraryTab").parent().length > 0) {
                    $("#libraryTab").parent().attr("tabindex", "-1");
                }
                $(document).on("keydown", function (event) {
                    if (event.keyCode == 8 && event.target != null) {
                        var calendarControlDiv = $(event.target).parents("div.ms-crm-modalDialog.ms-crm-MiniCal-Border");
                        if (calendarControlDiv.length > 0) {
                            event.preventDefault();
                            calendarControlDiv.css("visibility", "hidden");
                            $("input.ms-crm-DateTime-Container-Input").focus();
                        }
                        event.stopPropagation();
                    }
                });
                var keyMap = { 69: false };
                $(".slot").keydown(function (event) {
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37)) {
                        ControlManager.NavigateToLeftStage();
                    }
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39)) {
                        ControlManager.NavigateToRightStage();
                    }
                    if (event.keyCode == 40 && event.shiftKey) {
                        var currentStage = ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel);
                        var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentStage.getActivityID();
                        var curretStageDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentStage.getActivityID();
                        if ($("#" + curretStageDetailsDivName) && $("#" + curretStageDetailsDivName).css("visibility") != "visible") {
                            $(currentTileButtonName).click();
                            if ($("#" + currentStage.id).find(".step-list-listitem").length > 0) {
                                $("#" + currentStage.id).find(".step-list-listitem.selected").removeClass("selected");
                                $("#" + currentStage.id).find(".step-list-listitem").first().focus();
                                $("#" + currentStage.id).find(".step-list-listitem").first().addClass("selected");
                                $("#UpArrow").attr("aria-disabled", true);
                                $("#UpArrow").addClass("disableArrowButton");
                                if ($("#" + GenericWorkflowDesigner.currentModel.id).find(".list-container-div").first().find(".step-list-listitem").length > 1) {
                                    $("#DownArrow").attr("aria-disabled", false);
                                    $("#DownArrow").removeClass("disableArrowButton");
                                }
                                else {
                                    $("#DownArrow").attr("aria-disabled", true);
                                    $("#DownArrow").addClass("disableArrowButton");
                                }
                                event.stopPropagation();
                            }
                        }
                    }
                    else if (event.keyCode == 40) {
                        ControlManager.NavigateToDownStage();
                    }
                    if (event.keyCode == 38 && event.shiftKey) {
                        var currentStage = ControlManager.GetStageModel(GenericWorkflowDesigner.currentModel);
                        var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentStage.getActivityID();
                        var curretStageDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentStage.getActivityID();
                        if ($("#" + curretStageDetailsDivName) && $("#" + curretStageDetailsDivName).css("visibility") == "visible") {
                            $(currentTileButtonName).click();
                        }
                    }
                    else if (event.keyCode == 38) {
                        ControlManager.NavigateToUpStage();
                    }
                    if (event.keyCode == 13) {
                        if ($(".selected.stageTile").length > 0) {
                            $(".selected.stageTile").parent().parent(".slot").click();
                        }
                        else if ($(".selected.conditionTile").length > 0) {
                            $(".selected.conditionTile").parent().parent(".slot").click();
                        }
                    }
                    if (event.keyCode == 27) {
                        ControlManager.ClearSelections();
                        event.stopPropagation();
                    }
                    if (event.keyCode == 77 && event.altKey) {
                        ControlManager.ClearSelections();
                        ControlManager.SetFocusToMiniMapButtons();
                        event.stopPropagation();
                    }
                    if (event.ctrlKey && event.keyCode == 88) {
                        if (!$("#cut").prop("disabled")) {
                            event.preventDefault();
                            ControlManager.ClearSelections();
                            $("#cut").click();
                        }
                    }
                    else if (event.ctrlKey && event.keyCode == 67) {
                        if (!$("#copy").prop("disabled")) {
                            event.preventDefault();
                            ControlManager.ClearSelections();
                            $("#copy").click();
                        }
                    }
                    else if (event.ctrlKey && event.keyCode == 86) {
                        if (!$("#paste").prop("disabled")) {
                            event.preventDefault();
                            ControlManager.ClearSelections();
                            $("#paste").click();
                        }
                    }
                    else if (event.keyCode == 46) {
                        if (!$("#delete").prop("disabled")) {
                            event.preventDefault();
                            ControlManager.ClearSelections();
                            $("#delete").click();
                        }
                    }
                    else if (event.keyCode == 69) {
                        if (event.keyCode in keyMap) {
                            keyMap[event.keyCode] = true;
                        }
                    }
                    else if (keyMap[69] && event.keyCode == 187) {
                        $("#toggleStep").click();
                    }
                    else if (event.keyCode == 67) {
                        if (ControlManager.keyMap[18]) {
                            ControlManager.keyMap[18] = false;
                            if (!$("#connector").prop("disabled")) {
                                ControlManager.ClearSelections();
                                $("#connector").focus();
                                $('#toolBarItemTitleConnector').addClass('utilityBarItem-disabled-mode');
                            }
                        }
                    }
                    ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                    event.stopPropagation();
                });
                $("#canvas").keydown(function (event) {
                    if (event.keyCode == 27) {
                        ControlManager.ClearSelections();
                    }
                    if (event.keyCode == 77 && event.altKey) {
                        ControlManager.ClearSelections();
                        ControlManager.SetFocusToMiniMapButtons();
                    }
                });
                $("#process_configurator_container").keydown(function (event) {
                    ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                });
                $(".stageTile").focusin(function (event) {
                    var rootTileId = $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").attr("id");
                    var currentTileId = event.target.getAttribute("id");
                    if (ControlManager.StageTileTitle == true && rootTileId == currentTileId) {
                        var message = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ScreenReader_ShiftDownArrowKey");
                        var message1 = ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ScreenReader_ShiftUpArrowKey");
                        var expression = window['String'].format(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ScreenReader_DetailExpand"), message);
                        var expression1 = window['String'].format(ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_TBX_ScreenReader_DetailCollapse"), message1);
                        var tileTitle = $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").children("div .tileButtonDiv").attr("title");
                        tileTitle = tileTitle + " \n" + ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_MoveBetweenComponent") + "\n" + expression + "\n" + expression1;
                        $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").children("div .tileButtonDiv").attr("title", tileTitle);
                        $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").attr("title", tileTitle);
                        ControlManager.StageTileTitle = false;
                    }
                    $(".conditionTile.selected").removeClass("selected");
                    $(".slot.selected").removeClass("selected");
                    var id = event.target.getAttribute("id");
                    if (!CommonTypes.Types.Object.isNullOrUndefined(id)) {
                        GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateModel, GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id));
                        GenericWorkflowDesigner.currentModel = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id);
                    }
                });
                $(".conditionTile").focusin(function (event) {
                    $(".stageTile.selected").removeClass("selected");
                    $(".slot.selected").removeClass("selected");
                    var id = event.target.getAttribute("id");
                    if (!CommonTypes.Types.Object.isNullOrUndefined(id)) {
                        GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateModel, GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id));
                        GenericWorkflowDesigner.currentModel = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id);
                    }
                });
                $("#show-mini-map").focusin(function (event) {
                    ControlManager.ClearSelections();
                });
                $("#close-mini-map").focusin(function (event) {
                    ControlManager.ClearSelections();
                });
                $("#property").on("keydown", function (event) {
                    if (event.ctrlKey && event.altKey && event.keyCode == 68) {
                        ControlManager.NavigateToSelectedElement();
                        event.stopPropagation();
                    }
                });
                $("#Add").on("keydown", function (event) {
                    if (event.keyCode == 27) {
                        ControlManager.ClearSelections();
                        event.stopPropagation();
                    }
                });
                $(".activity-list-container").on("keydown", function (event) {
                    if (event.keyCode == 27) {
                        ControlManager.ClearSelections();
                        event.stopPropagation();
                    }
                });
            };
            ControlManager.ClearSelections = function () {
                $("#canvas").children(".hoverOverDroppable").removeAttr('aria-label').removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                $('#sortable').children().remove(".place-holder-listitem");
                $("#Add.toolbarItem").trigger("mouseleave");
                $(".stageTile.selected").removeClass("selected");
                $(".conditionTile.selected").removeClass("selected");
                $(".stage-detail-container.selected").removeClass("selected");
                $('#canvas').find(".step-list-listitem.selected").removeClass("selected");
            };
            ControlManager.NavigateToSelectedElement = function () {
                var selectedActivityId;
                var selectedActivityType = GenericWorkflowDesigner.currentModel.getActivityTypeID();
                switch (selectedActivityType.toLowerCase()) {
                    case ProcessDesigner.TBXActivityType.page.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".stageTile").addClass("selected");
                        $("#" + selectedActivityId).find(".stageTile").focus();
                        if ($("#" + selectedActivityId).find(".stage-detail-container").length > 0) {
                            $("#" + selectedActivityId).find(".stage-detail-container").addClass("selected");
                        }
                        break;
                    case ProcessDesigner.TBXActivityType.condition.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".conditionTile").addClass("selected");
                        $("#" + selectedActivityId).find(".conditionTile").focus();
                        break;
                    case ProcessDesigner.TBXActivityType.field.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.stepId;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).addClass("selected");
                        +$("#" + selectedActivityId).focus();
                        $("#" + selectedActivityId).parents(".slot").find(".stageTile").addClass("selected");
                        $("#" + selectedActivityId).parents(".stage-detail-container").addClass("selected");
                        break;
                    case ProcessDesigner.TBXActivityType.label.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.stepId;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).addClass("selected");
                        $("#" + selectedActivityId).focus();
                        $("#" + selectedActivityId).parents(".slot").find(".stageTile").addClass("selected");
                        $("#" + selectedActivityId).parents(".stage-detail-container").addClass("selected");
                        break;
                    case ProcessDesigner.TBXActivityType.sectionLabel.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.stepId;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).addClass("selected");
                        $("#" + selectedActivityId).focus();
                        $("#" + selectedActivityId).parents(".slot").find(".stageTile").addClass("selected");
                        $("#" + selectedActivityId).parents(".stage-detail-container").addClass("selected");
                        break;
                }
            };
            ControlManager.SetFocusToMiniMapButtons = function () {
                var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
                if (miniMapWrapperVisibility == "visible")
                    $("#close-mini-map").focus();
                else
                    $("#show-mini-map").focus();
            };
            ControlManager.RemoveSelectedClassFromDivs = function () {
                $(".selected.stageTile").removeClass("selected");
                $(".selected.conditionTile").removeClass("selected");
                $(".stage-detail-container.selected").removeClass("selected");
            };
            ControlManager.navigateToNewTile = function (newTileActivityId) {
                if ($('#' + newTileActivityId).children().find(".conditionTile").length > 0) {
                    ControlManager.RemoveSelectedClassFromDivs();
                    $('#' + newTileActivityId).children().find(".conditionTile").addClass("selected");
                    $(".selected.conditionTile").focus();
                    ControlManager.canvasScrollIntoView($(".selected.conditionTile").get(0));
                }
                else if ($('#' + newTileActivityId).children().find(".stageTile").length > 0) {
                    ControlManager.RemoveSelectedClassFromDivs();
                    $('#' + newTileActivityId).children().find(".stageTile").addClass("selected");
                    if ($('#' + newTileActivityId).children().find(".stage-detail-container").length > 0) {
                        $('#' + newTileActivityId).children().find(".stage-detail-container").addClass("selected");
                    }
                    $(".selected.stageTile").focus();
                    ControlManager.canvasScrollIntoView($(".selected.stageTile").get(0));
                }
            };
            ControlManager.navigateToDefaultActivityOfParentActivity = function (activity) {
                var defaultChildOfParentActivity = activity.parentConditionActivity.getDefaultChildOfParentActivity();
                if (defaultChildOfParentActivity != null) {
                    ControlManager.navigateToNewTile(defaultChildOfParentActivity.id);
                    GenericWorkflowDesigner.currentModel = defaultChildOfParentActivity;
                }
            };
            ControlManager.NavigateToLeftStage = function () {
                var activity;
                activity = GenericWorkflowDesigner.currentModel;
                var parentActivity = GenericWorkflowDesigner.Settings.workflowTree.getParent(activity);
                if (parentActivity.getActivityTypeID() === ProcessDesigner.TBXActivityType.condition) {
                    var parentActivityDefaultBranch = parentActivity.getDefaultBranch();
                    if ((parentActivityDefaultBranch != null) && (parentActivityDefaultBranch.id === activity.id)) {
                        var yesBranchLastChild = parentActivity.getYesBranchLastChild();
                        if (yesBranchLastChild != null) {
                            parentActivity = yesBranchLastChild;
                        }
                    }
                }
                if ($("#" + parentActivity.id + "_hitarea").length > 0 && $("#" + parentActivity.id + "_hitarea").hasClass("hoverOverDroppable")) {
                    ControlManager.RemoveSelectedClassFromDivs();
                    $("#" + parentActivity.id + "_hitarea").focus();
                }
                else {
                    ControlManager.navigateToNewTile(parentActivity.id);
                }
                GenericWorkflowDesigner.currentModel = parentActivity;
            };
            ControlManager.NavigateToRightStage = function () {
                var activity;
                activity = GenericWorkflowDesigner.currentModel;
                var defaultChildOfParentActivity = null;
                if (activity.getActivityTypeID() === ProcessDesigner.TBXActivityType.page) {
                    var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
                    if ($("#" + activity.id + "_hitarea").length > 0 && $("#" + activity.id + "_hitarea").hasClass("hoverOverDroppable")) {
                        ControlManager.RemoveSelectedClassFromDivs();
                        $("#" + activity.id + "_hitarea").focus();
                        if (childActivities.length > 0)
                            GenericWorkflowDesigner.currentModel = childActivities[0];
                        else if (activity.parentConditionActivity != null) {
                            var parentConditionDefaultBranch = activity.parentConditionActivity.getDefaultBranch();
                            if (parentConditionDefaultBranch != null) {
                                if (parentConditionDefaultBranch.id !== activity.id) {
                                    GenericWorkflowDesigner.currentModel = parentConditionDefaultBranch;
                                }
                            }
                        }
                    }
                    else {
                        if (childActivities.length > 0) {
                            var childActivity = childActivities[0];
                            ControlManager.navigateToNewTile(childActivity.id);
                            GenericWorkflowDesigner.currentModel = childActivity;
                        }
                        else {
                            if (activity.parentConditionActivity != null) {
                                var parentConditionDefaultBranch = activity.parentConditionActivity.getDefaultBranch();
                                if (parentConditionDefaultBranch != null) {
                                    if (parentConditionDefaultBranch.id !== activity.id) {
                                        ControlManager.navigateToNewTile(parentConditionDefaultBranch.id);
                                        GenericWorkflowDesigner.currentModel = parentConditionDefaultBranch;
                                    }
                                    else if (parentConditionDefaultBranch.id === activity.id) {
                                        ControlManager.navigateToDefaultActivityOfParentActivity(activity);
                                    }
                                }
                                else {
                                    ControlManager.navigateToDefaultActivityOfParentActivity(activity);
                                }
                            }
                        }
                    }
                    event.stopPropagation();
                }
                else if (activity.getActivityTypeID() === ProcessDesigner.TBXActivityType.condition) {
                    var yesBranchFirstChild = activity.getYesBranchFirstChild();
                    var defaultChildActivity = activity.getDefaultBranch();
                    if ($("#" + activity.id + "_hitarea").length > 0 && $("#" + activity.id + "_hitarea").hasClass("hoverOverDroppable")) {
                        ControlManager.RemoveSelectedClassFromDivs();
                        $("#" + activity.id + "_hitarea").focus();
                        if (yesBranchFirstChild != null) {
                            GenericWorkflowDesigner.currentModel = yesBranchFirstChild;
                        }
                        else if (defaultChildActivity != null) {
                            GenericWorkflowDesigner.currentModel = defaultChildActivity;
                        }
                    }
                    else {
                        if (yesBranchFirstChild != null) {
                            ControlManager.navigateToNewTile(yesBranchFirstChild.id);
                            GenericWorkflowDesigner.currentModel = yesBranchFirstChild;
                        }
                        else if (defaultChildActivity != null) {
                            ControlManager.navigateToNewTile(defaultChildActivity.id);
                            GenericWorkflowDesigner.currentModel = defaultChildActivity;
                        }
                        else if (defaultChildActivity == null) {
                            defaultChildOfParentActivity = activity.getDefaultChildOfParentActivity();
                            if (defaultChildOfParentActivity != null) {
                                ControlManager.navigateToNewTile(defaultChildOfParentActivity.id);
                                GenericWorkflowDesigner.currentModel = defaultChildOfParentActivity;
                            }
                            else {
                                ControlManager.RemoveSelectedClassFromDivs();
                                return;
                            }
                        }
                    }
                }
            };
            ControlManager.NavigateToUpStage = function () {
                var activity;
                activity = GenericWorkflowDesigner.currentModel;
                var parentActivity = GenericWorkflowDesigner.Settings.workflowTree.getParent(activity);
                if ($("#" + parentActivity.id + "_verticalhitarea").length > 0 && $("#" + activity.id + "_verticalhitarea").hasClass("hoverOverDroppable")) {
                    $(".selected.stageTile").removeClass("selected");
                    $(".selected.conditionTile").removeClass("selected");
                    $("#" + parentActivity.id + "_verticalhitarea").focus();
                }
                else {
                    if ($("#" + parentActivity.id + "_hitarea").length > 0 && $("#" + parentActivity.id + "_hitarea").hasClass("hoverOverDroppable")) {
                        $(".selected.stageTile").removeClass("selected");
                        $(".selected.conditionTile").removeClass("selected");
                        $("#" + parentActivity.id + "_hitarea").focus();
                    }
                    else {
                        ControlManager.navigateToNewTile(parentActivity.id);
                    }
                }
                GenericWorkflowDesigner.currentModel = parentActivity;
            };
            ControlManager.NavigateToDownStage = function () {
                var activity;
                activity = GenericWorkflowDesigner.currentModel;
                if ($("#" + activity.id + "_verticalhitarea").length > 0 && $("#" + activity.id + "_verticalhitarea").hasClass("hoverOverDroppable")) {
                    ControlManager.RemoveSelectedClassFromDivs();
                    $("#" + activity.id + "_verticalhitarea").focus();
                }
                else {
                    if (activity.getActivityTypeID() === ProcessDesigner.TBXActivityType.page) {
                        if ($("#" + activity.id).find(".step-list-listitem").length > 0) {
                            $("#" + activity.id).find(".step-list-listitem.selected").removeClass("selected");
                            if ($("#" + activity.id).find(".place-holder-listitem").length > 0) {
                                $("#" + activity.id).find(".place-holder-listitem").attr("title", ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
                                $("#" + activity.id).find(".place-holder-listitem").attr("aria-label", ProcessDesigner.TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
                                $("#" + activity.id).find(".place-holder-listitem").first().focus();
                            }
                            else {
                                $("#" + activity.id).find(".step-list-listitem").first().focus();
                                $("#" + activity.id).find(".step-list-listitem").first().addClass("selected");
                                $("#UpArrow").attr("aria-disabled", true);
                                $("#UpArrow").addClass("disableArrowButton");
                                if ($("#" + activity.id).find(".list-container-div").first().find(".step-list-listitem").length > 1) {
                                    $("#DownArrow").attr("aria-disabled", false);
                                    $("#DownArrow").removeClass("disableArrowButton");
                                }
                                else {
                                    $("#DownArrow").attr("aria-disabled", true);
                                    $("#DownArrow").addClass("disableArrowButton");
                                }
                            }
                            event.stopPropagation();
                        }
                        else {
                            var childActivityArray = ControlManager.getChildActivities(activity);
                            var childActivity = childActivityArray[0];
                            if (childActivityArray.length === 0) {
                                ControlManager.RemoveSelectedClassFromDivs();
                                return;
                            }
                            ControlManager.navigateToNewTile(childActivity.id);
                            GenericWorkflowDesigner.currentModel = childActivity;
                        }
                    }
                    else if (activity.getActivityTypeID() === ProcessDesigner.TBXActivityType.condition) {
                        var noBranchFirstChild = activity.getNoBranchFirstChild();
                        if (noBranchFirstChild != null) {
                            ControlManager.navigateToNewTile(noBranchFirstChild.id);
                            GenericWorkflowDesigner.currentModel = noBranchFirstChild;
                        }
                    }
                }
            };
            ControlManager.canvasScrollIntoView = function (element) {
                element.scrollIntoView(false);
                element = element.getBoundingClientRect();
                var canvasWidow = $("#zoomCanvasWrapper");
                if (canvasWidow.width() < element.right) {
                    canvasWidow.scrollLeft(canvasWidow.scrollLeft() + element.right - canvasWidow.width());
                }
                else if (element.left < 0) {
                    canvasWidow.scrollLeft(canvasWidow.scrollLeft() + element.left - canvasWidow.offset().left);
                }
            };
            ControlManager.ConvertBPFActivityTreeToJson = function () {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                var json = "";
                this.Activities = [];
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                var rootActivity;
                if (activities.length > 0) {
                    for (var i = 0; i < activities.length; i++) {
                        if (GenericWorkflowDesigner.Settings.workflowTree.getParent(activities[i]) == null) {
                            rootActivity = activities[i];
                            break;
                        }
                    }
                    this.addActivity(rootActivity);
                    this.routeChildren(rootActivity);
                    var workflowStep = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep(rootActivity.entityName, 4);
                    workflowStep.set_title(ControlManager.processTitle);
                    workflowStep.set_Description(ControlManager.processDescription);
                    workflowStep.workflowEntityId = ControlManager.workflowEntityId;
                    if (ControlManager.formId == null || ControlManager.formId == undefined) {
                        ControlManager.formId = ProcessDesigner.TBXDesignerControl.dataBag.resources.formId;
                    }
                    workflowStep.initializeBusinessProcess(ControlManager.businessProcessType, ControlManager.formId);
                    var relationshipCollectionStep = new Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep(workflowStep);
                    relationshipCollectionStep.set_Description("");
                    workflowStep.appendStep(relationshipCollectionStep);
                    workflowStep = MscrmControls.ProcessDesigner.TBXPageActivity.generateJson(this.Activities, workflowStep);
                    workflowStep = MscrmControls.ProcessDesigner.TBXConditionActivity.generateJson(this.Activities, workflowStep);
                    json = workflowStep.toJson();
                    window["clientdata"] = json;
                }
                stopwatch.stop();
                localStorage.setItem("ProcessDesignerControl_TBX_SavePreProcessing", stopwatch.elapsedMilliseconds.toString());
                return json;
            };
            ControlManager.routeChildren = function (activity) {
                if (activity.constructor.name == "ProcessActivityDefinitionModel") {
                    return;
                }
                var childActivities = this.getChildActivities(activity);
                switch (childActivities.length) {
                    case 1:
                        this.addStageOrConditionActivity(childActivities[0]);
                        break;
                    case 2:
                        this.addConditionChildren(childActivities);
                        break;
                    case 3:
                        this.addConditionChildren(childActivities);
                        this.addStageOrConditionActivity(childActivities[2]);
                        break;
                }
            };
            ControlManager.addStageOrConditionActivity = function (activity) {
                this.addActivity(activity);
                this.routeChildren(activity);
            };
            ControlManager.addConditionChildren = function (activities) {
                this.addActivity(activities[0]);
                this.addActivity(activities[1]);
                this.routeChildren(activities[0]);
                this.routeChildren(activities[1]);
            };
            ControlManager.addActivity = function (activity) {
                if (activity.constructor.name == "ProcessActivityDefinitionModel") {
                    return;
                }
                this.Activities.push(activity);
            };
            ControlManager.getChildActivities = function (activity) {
                var childActivities = [];
                childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
                return childActivities;
            };
            ControlManager.getRelationshipCollectionStepJson = function () {
                var list = [];
                var relationObj = new ProcessDesigner.RelationshipCollectionStepJson();
                relationObj.id = "";
                relationObj.name = "";
                relationObj.description = "";
                relationObj.steps = new Object({ list: list });
                relationObj.stepLabels = new Object({ list: list });
                return relationObj;
            };
            ControlManager.prototype.dispose = function () { };
            ControlManager.InvalidInputProcessData = "Invalid process data.";
            ControlManager.EmptyOrNullInputProcessData = "Process data is empty or null";
            ControlManager.EmptyOrNullRawPropertyOfInputProcessData = "raw property of Process data is empty or null";
            ControlManager.processTitle = "";
            ControlManager.processDescription = "";
            ControlManager.workflowEntityId = null;
            ControlManager.formId = null;
            ControlManager.businessProcessType = "1";
            ControlManager.Activities = [];
            ControlManager.keyMap = { 17: false, 18: false, 78: false };
            ControlManager.StageTileTitle = false;
            return ControlManager;
        })();
        ProcessDesigner.ControlManager = ControlManager;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="UserAgent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Mscrm;
(function (Mscrm) {
    var UserAgent;
    (function (UserAgent_1) {
        var UserAgent = (function () {
            function UserAgent() {
                this.isBrowserSupportedIE = false;
                this.isBrowserSupportedChrome = false;
                this.isBrowserSupportedFirefox = false;
                this.isBrowserSafari = false;
                this.isBrowserSupportedSafari = false;
                this.rawValue = navigator.userAgent;
                this.isBrowserIE = (this.rawValue.indexOf("MSIE 10") !== -1 ||
                    this.rawValue.indexOf("MSIE 9.0") !== -1 ||
                    this.rawValue.indexOf("Trident") !== -1 ||
                    this.rawValue.indexOf("Edge") !== -1);
                if (this.isBrowserIE) {
                    this.isBrowserSupportedIE = (this.rawValue.indexOf('MSIE') !== -1) ? this.rawValue.indexOf('MSIE 9.0') == -1 && this.rawValue.indexOf('MSIE 10') !== -1 : true;
                }
                this.isBrowserChrome = (this.rawValue.indexOf("Chrome") !== -1) && !this.isBrowserIE;
                if (this.isBrowserChrome) {
                    this.isBrowserSupportedChrome = UserAgent.prototype.parseChromeVersion() >= 13;
                }
                this.isBrowserFirefox = (this.rawValue.indexOf("Firefox") !== -1);
                if (this.isBrowserFirefox) {
                    this.isBrowserSupportedFirefox = UserAgent.prototype.parseFirefoxVersion() >= 5;
                }
                if (this.rawValue.indexOf("Safari") !== -1 && !this.isBrowserIE) {
                    if ((this.rawValue.indexOf("Chrome") !== -1) || (this.rawValue.indexOf("Android") !== -1)) {
                        this.isBrowserSafari = false;
                    }
                    else {
                        this.isBrowserSafari = true;
                    }
                }
                if (this.isBrowserSafari) {
                    this.isBrowserSupportedSafari = this.parseSafariVersion() > 5;
                }
                this.isIPhone = this.rawValue.indexOf("iPhone") != -1;
                this.isIPad = this.rawValue.indexOf("iPad") != -1;
                this.isIPod = this.rawValue.indexOf("iPod") != -1;
                if (this.isIPhone || this.isIPad || this.isIPod) {
                    this.isIOSSupported = this.parseIOSVersion() >= 5;
                }
                this.isAndroid = this.rawValue.indexOf("Android") != -1;
                if (this.isAndroid) {
                    this.isAndroidModern = this.parseAndroidVersion() >= 4.4;
                }
                this.isAndroidPhone = this.isAndroid && this.rawValue.indexOf("Mobile") !== -1;
                this.isWebKit = this.rawValue.indexOf("WebKit") !== -1 && !this.isBrowserIE;
                this.isMac = navigator.appVersion.indexOf("Mac") !== -1;
                this.isWindows = (navigator.appVersion.indexOf("Win") != -1) || (navigator.appVersion.indexOf("NT") != -1);
                this.isWindows80 = navigator.appVersion.indexOf("Windows NT 6.2") != -1;
                this.isWindowsDesktop = this.isWindows && navigator.appVersion.indexOf("NT") != -1;
                this.isWindowsPhone = this.isWindows && navigator.appVersion.indexOf("Phone") != -1;
                this.isWindows81 = navigator.appVersion.indexOf("Windows NT 6.3") != -1;
                return this;
            }
            UserAgent.prototype.parseChromeVersion = function () {
                return this.parseVersionInteger(new RegExp("Chrome/(\\d+)"));
            };
            UserAgent.prototype.parseFirefoxVersion = function () {
                return this.parseVersionInteger(new RegExp("Firefox/(\\d+)"));
            };
            UserAgent.prototype.parseIOSVersion = function () {
                return this.parseVersionInteger(new RegExp("OS (\\d+)_(\\d+)_?(\\d+)?"));
            };
            UserAgent.prototype.parseVersionInteger = function (regExp) {
                var osString = navigator.userAgent.match(regExp);
                if (osString.length > 1) {
                    var majorVersion = parseInt(osString[1]);
                    return majorVersion;
                }
                return -1;
            };
            UserAgent.prototype.parseSafariVersion = function () {
                var safariString = "Version";
                return this.parseVersionFloat(safariString);
            };
            UserAgent.prototype.parseAndroidVersion = function () {
                var androidString = "Android";
                return this.parseVersionFloat(androidString);
            };
            UserAgent.prototype.parseVersionFloat = function (str) {
                var index = navigator.userAgent.indexOf(str);
                if (index !== -1) {
                    var version = this.rawValue.substring(index + str.length + 1, index + str.length + 4);
                    return parseFloat(version);
                }
                return -1;
            };
            UserAgent.prototype.getIsBrowserIE = function () {
                return this.isBrowserIE;
            };
            UserAgent.prototype.getIsBrowserChrome = function () {
                return this.isBrowserChrome;
            };
            UserAgent.prototype.getIsBrowserFirefox = function () {
                return this.isBrowserFirefox;
            };
            UserAgent.prototype.getIsBrowserSafari = function () {
                return this.isBrowserSafari;
            };
            UserAgent.prototype.getIsBrowserSupportedIE = function () {
                return this.isBrowserSupportedIE;
            };
            UserAgent.prototype.getIsBrowserSupportedChrome = function () {
                return this.isBrowserSupportedChrome;
            };
            UserAgent.prototype.getIsBrowserSupportedFirefox = function () {
                return this.isBrowserSupportedFirefox;
            };
            UserAgent.prototype.getIsBrowserSupportedSafari = function () {
                return this.isBrowserSupportedSafari;
            };
            UserAgent.prototype.getIsIPhone = function () {
                return this.isIPhone;
            };
            UserAgent.prototype.getIsIOSSupported = function () {
                return this.isIOSSupported;
            };
            UserAgent.prototype.getIsIPad = function () {
                return this.isIPad;
            };
            UserAgent.prototype.getIsIPod = function () {
                return this.isIPod;
            };
            UserAgent.prototype.getIsAndroidModern = function () {
                return this.isAndroidModern;
            };
            UserAgent.prototype.getIsMac = function () {
                return this.isMac;
            };
            UserAgent.prototype.getIsWindows = function () {
                return this.isWindows;
            };
            UserAgent.prototype.getIsWindows80 = function () {
                return this.isWindows80;
            };
            UserAgent.prototype.getIsWindowsDesktop = function () {
                return this.isWindowsDesktop;
            };
            UserAgent.prototype.getIsWindowsPhone = function () {
                return this.isWindowsPhone;
            };
            UserAgent.prototype.getIsWindows81 = function () {
                return this.isWindows81;
            };
            UserAgent.prototype.getIsDesktopOutlook = function () {
                return this.isDesktopOutlook;
            };
            UserAgent.prototype.getIsAndroidPhone = function () {
                return this.isAndroidPhone;
            };
            UserAgent.prototype.getUserAgentName = function () {
                if (this.isAndroid) {
                    return "Android";
                }
                else if (this.isAndroidModern) {
                    return "AndroidModern";
                }
                else if (this.isBrowserChrome) {
                    return "Chrome";
                }
                else if (this.isBrowserFirefox) {
                    return "Firefox";
                }
                else if (this.isBrowserIE) {
                    return "IE";
                }
                else if (this.isIOSSupported) {
                    return "Ios";
                }
                else if (this.isWindows) {
                    return "Windows";
                }
                else if (this.isMac) {
                    return "Macintosh";
                }
                else {
                    return "";
                }
            };
            return UserAgent;
        })();
        UserAgent_1.UserAgent = UserAgent;
        var BrowserValidator = (function () {
            function BrowserValidator() {
                this.userAgent = new UserAgent();
            }
            BrowserValidator.prototype.isBrowserSupported = function () {
                return this.userAgent.getIsBrowserSupportedIE() ||
                    this.userAgent.getIsBrowserSupportedChrome() ||
                    this.userAgent.getIsBrowserSupportedFirefox() ||
                    this.userAgent.getIsBrowserSupportedSafari() ||
                    this.userAgent.getIsDesktopOutlook();
            };
            BrowserValidator.prototype.isBrowserIE = function () {
                return this.userAgent.getIsBrowserIE();
            };
            return BrowserValidator;
        })();
        UserAgent_1.BrowserValidator = BrowserValidator;
        var DeviceValidator = (function () {
            function DeviceValidator() {
                this.userAgent = new UserAgent();
            }
            DeviceValidator.prototype.isMobileDevice = function () {
                return this.userAgent.getIsWindowsPhone() || this.userAgent.getIsIPhone() || this.userAgent.getIsAndroidPhone();
            };
            return DeviceValidator;
        })();
        UserAgent_1.DeviceValidator = DeviceValidator;
    })(UserAgent = Mscrm.UserAgent || (Mscrm.UserAgent = {}));
})(Mscrm || (Mscrm = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessDesignerControl.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="Controls/ProcessDesignerControlManager.ts"/>
/// <reference path="src/utility/useragent.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var TelemetryReporter = _Microsoft.Client.Telemetry.TelemetryReporter;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        var UserAgent = Mscrm.UserAgent.UserAgent;
        ProcessDesigner.telemetryReporter;
        ProcessDesigner.xhrResponseFunction;
        ProcessDesigner.xhrObj;
        ProcessDesigner.sessionId;
        ProcessDesigner.processId = "00000000-0000-0000-0000-000000000000";
        ProcessDesigner.processState = "";
        ProcessDesigner.primaryEntity;
        ProcessDesigner.processStep;
        ProcessDesigner.isPropertyPageSaved = false;
        ProcessDesigner.isStructuralChangePerformed = false;
        var TBXDesignerControl = (function () {
            function TBXDesignerControl() {
            }
            TBXDesignerControl.prototype.initCore = function (context) {
                this.processDesignerControlManager = new ProcessDesigner.ControlManager(null);
                this.processDesignerControlManager.initialize(this);
                ProcessDesigner.sessionId = Utility.newGuid();
                this.initializeTelemetryReporter();
                this.fetchProcessId();
                if (ProcessDesigner.processId != null) {
                    this.retrieveProcessAttributes(context);
                }
                var parentContainer = window["parentContainer"];
                if (CommonTypes.Types.Object.isNullOrUndefined(parentContainer)) {
                    parentContainer = $('.custom_control_section');
                }
                else {
                    parentContainer = $(parentContainer);
                }
                this.designerDomElement = parentContainer;
                $(window).bind("beforeunload", ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerCloseEvent(context));
                this.cleanUp();
                var self = this;
                TBXDesignerControl.dataBag = context;
                this.processDesignerControlManager.render(TBXDesignerControl.dataBag.parameters);
                this.processDesignerControlManager.validateDependentOptionSetData();
                window["designerActivate"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerActivateEvent;
                window["designerDeactivate"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerDeactivateEvent;
                window["designerSave"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerSaveEvent;
                window["designerLoaded"] = true;
                $(window).on('beforeunload', function () {
                    if (window["isDirty"] == true) {
                        var unsavedMessage = TBXDesignerControl.dataBag.resources.getString("LOCID_PROCESS_UNSAVED_MESSAGE");
                        return unsavedMessage;
                    }
                });
                window["isDirty"] = false;
                this.setProcessDetails();
                this.OverrideMenuStyle();
                this.OverrideProcessDetailsSection();
                this.ToolpaneTab();
                $("#header,#processDetailArea").on("keydown", function (event) {
                    ProcessDesigner.ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                });
            };
            TBXDesignerControl.prototype.retrieveProcessAttributes = function (context) {
                var columns = ["category", "statecode", "statuscode"];
                var entityName = Mscrm.InternalUtilities.EntityNames.Workflow;
                var processGuid = ProcessDesigner.processId;
                window.parent["Xrm"].Internal.messages.retrieve(entityName, processGuid, columns).then(function (retrieveResponse) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(retrieveResponse)) {
                        var responseEntity = retrieveResponse.entity;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(responseEntity)) {
                            context["parameters"]["Category"]["raw"] = responseEntity.getValue("category")._val$p$0;
                            context["parameters"]["StateCode"]["raw"] = responseEntity.getValue("statecode")._val$p$0;
                            context["parameters"]["StatusCode"]["raw"] = responseEntity.getValue("statuscode")._val$p$0;
                            context["client"]["userAgent"] = new UserAgent();
                            ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerLaunchEvent(context);
                        }
                    }
                }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            };
            TBXDesignerControl.prototype.XmlValidationFailureHandler = function (errorData) {
                var errorNotificationHtml = '<div id="errorNotificationArea" class="notificationArea"></div>';
                var processEditor = $('.custom_control_section');
                processEditor.append(errorNotificationHtml);
                if (GenericWorkflowDesigner.Settings.renderRTL) {
                    $("html").addClass("rtl");
                }
                var message = TBXDesignerControl.dataBag.resources.getString("ProcessDesignerControl_Common_XMLValidationError");
                GenericWorkflowDesigner.Settings.notification = new GenericWorkflowDesigner.Notification("#errorNotificationArea");
                var errorMessage = new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Error, message);
                GenericWorkflowDesigner.Settings.notification.AppendNotification(errorMessage);
                var errorCount = GenericWorkflowDesigner.Settings.notification.GetNotifictionCount();
                message = errorCount + " " + errorMessage;
                var summaryMessage = new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Error, message);
                GenericWorkflowDesigner.Settings.notification.ShowNotification(summaryMessage, TBXDesignerControl.validationMode);
            };
            TBXDesignerControl.prototype.XmlValidationSuccessHandler = function (response) {
                if (this.propertyBagParametersAreValid(TBXDesignerControl.dataBag)) {
                    this.processDesignerControlManager.render(TBXDesignerControl.dataBag.parameters);
                }
                else {
                    throw ("TODO Throw message to be written");
                }
            };
            TBXDesignerControl.prototype.getUrl = function () {
                var port = window.location.port;
                var host = window.location.hostname;
                var orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    orgUrl += ":" + port;
                }
                return orgUrl;
            };
            TBXDesignerControl.prototype.editDone = function () {
                window["isDirty"] = true;
            };
            TBXDesignerControl.prototype.updateCore = function (dataBag) {
            };
            TBXDesignerControl.prototype.cleanUp = function () {
                // TODO (v-sacbh): 17th May, 2016 : Once we move the render() back to updateCore(), call processEditor.empty() from here
            };
            TBXDesignerControl.prototype.propertyBagParametersAreValid = function (context) {
                var propertiesUpdated = !CommonTypes.Types.Object.isNullOrUndefined(context.updatedProperties);
                var processDataExists = !CommonTypes.Types.Object.isNullOrUndefined(context.parameters.ProcessData);
                return propertiesUpdated && processDataExists;
            };
            TBXDesignerControl.prototype.fetchProcessId = function () {
                ProcessDesigner.processId = this.getURLParameter("id");
                if (ProcessDesigner.processId != null && ProcessDesigner.processId.indexOf('%') > -1) {
                    ProcessDesigner.processId = ProcessDesigner.processId.substr(3, 36);
                }
                ProcessConfiguration.Behavior.ShowImageUploaderBehavior.get_instance().setBehavior(ProcessDesigner.processId);
            };
            TBXDesignerControl.prototype.saveProcessControlHack = function () {
                var clientdata = ProcessDesigner.ControlManager.ConvertBPFActivityTreeToJson();
                var processId = ProcessDesigner.processId;
                var soapRequest = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><UpdateProcess xmlns=\"http://schemas.microsoft.com/crm/2009/WebServices\"><jsonData>" + clientdata + "</jsonData><id>{" + processId + "}</id></UpdateProcess></soap:Body></soap:Envelope>";
                var headers = [];
                headers["ClientAppName"] = "ServiceDesk";
                headers["ClientAppVersion"] = "8.1.0000.0207";
                headers["X-Requested-With"] = "XMLHttpRequest";
                headers["ClientAppName"] = "ServiceDesk";
                headers["Cache-Control"] = "no-cache";
                headers["SessionId"] = localStorage.getItem("MoCASessionID");
                var host = window.location.hostname;
                var orgName = this.getURLParameter("org");
                return jQuery.ajax({
                    type: "POST",
                    url: "http://" + host + "/" + orgName + "/AppWebServices/ProcessControl.asmx",
                    data: soapRequest,
                    headers: headers,
                    contentType: "text/xml; charset=UTF-8",
                    success: this.onSuccess,
                    error: this.onError
                });
            };
            TBXDesignerControl.prototype.getURLParameter = function (sParam) {
                var sPageURL = window.location.search.substring(1);
                var sURLVariables = sPageURL.split('&');
                for (var i = 0; i < sURLVariables.length; i++) {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] == sParam) {
                        return sParameterName[1];
                    }
                }
            };
            TBXDesignerControl.prototype.onSuccess = function () {
            };
            TBXDesignerControl.prototype.onError = function () {
            };
            TBXDesignerControl.prototype.initializeTelemetryReporter = function () {
                var port = window.location.port;
                var host = window.location.hostname;
                var orgUrl = window.location.protocol + '//' + host;
                if (port) {
                    orgUrl += ":" + port;
                }
                var discoveryUrl;
                if (host.match(/contoso/gi) != null || host.match(/msmecrm/gi) != null || host.match(/crmlivetoday/gi) != null || host.match(/mocaifd/gi) != null || host.match(/crmifd/gi) != null) {
                    discoveryUrl = 'https://crminsightsdev.cloudapp.net/api/Discovery/?originUrl=' + orgUrl;
                }
                else if (host.match(/crmlivetie/gi) != null) {
                    discoveryUrl = 'https://crminsights.crm.crmlivetie.com/api/Discovery/?originUrl=' + orgUrl;
                }
                else if (host.match(/dynamics-int/gi) != null) {
                    discoveryUrl = 'https://crminsights.crm.dynamics-int.com/api/Discovery/?originUrl=' + orgUrl;
                }
                else {
                    discoveryUrl = 'https://crminsights.crm.dynamics.com/api/Discovery/?originUrl=' + orgUrl;
                }
                ProcessDesigner.telemetryReporter = TelemetryReporter.Instance();
                this.MakeCorsRequest(discoveryUrl, "GET", null, this.ProcessCORSRequestResponse);
            };
            TBXDesignerControl.prototype.ProcessCORSRequestResponse = function (xhr) {
                var telemetryReportingEndpointUrl = xhr.responseText;
                telemetryReportingEndpointUrl = telemetryReportingEndpointUrl.replace(/"/g, "");
                if (!telemetryReportingEndpointUrl) {
                    console.log("Reporting Endpoint not found.");
                    ProcessDesigner.telemetryReporter.InitializeRequestManager('');
                    return;
                }
                telemetryReportingEndpointUrl = "https://" + telemetryReportingEndpointUrl + "/api/crminsightseventdata";
                ProcessDesigner.telemetryReporter.InitializeRequestManager(telemetryReportingEndpointUrl, true);
            };
            TBXDesignerControl.prototype.MakeCorsRequest = function (requestUrl, method, data, onResponseAvailable) {
                try {
                    ProcessDesigner.xhrObj = new XMLHttpRequest();
                    ProcessDesigner.xhrObj.open(method, requestUrl);
                    if (method === "POST") {
                        ProcessDesigner.xhrObj.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    }
                    ProcessDesigner.xhrObj.setRequestHeader("accept", "application/json");
                    ProcessDesigner.xhrResponseFunction = onResponseAvailable;
                    ProcessDesigner.xhrObj.onload = this.XhrResponse;
                    ProcessDesigner.xhrObj.send(JSON.stringify(data));
                }
                catch (e) {
                    console.log("An unexpected error occurred while making a CORS request to Url - {0}", requestUrl);
                }
            };
            TBXDesignerControl.prototype.XhrResponse = function () {
                if (ProcessDesigner.xhrResponseFunction) {
                    ProcessDesigner.xhrResponseFunction(ProcessDesigner.xhrObj);
                }
                else {
                    console.log("XHR Status: ", ProcessDesigner.xhrObj.status, "-", ProcessDesigner.xhrObj.statusText);
                }
            };
            TBXDesignerControl.prototype.setProcessDetails = function () {
                $("#expandContainer").attr("role", "button");
                $("#expandContainer").attr("aria-expanded", "false");
                $("#collapseContainer").attr("role", "button");
                $("#collapseContainer").attr("aria-expanded", "true");
                $(".bpfexpandCollapse").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ScreenReader_GlobalArea_DetailsTooltip"));
            };
            TBXDesignerControl.prototype.OverrideMenuStyle = function () {
                $('#mnuaction').attr('aria-label', MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_MoreMenuTooltip"));
                $('#mnuaction').attr('title', MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_MoreMenuTooltip"));
                $("#crmMenuBarmnuBar li").each(function () {
                    $('#' + this.id + ' a').attr("title", this.title);
                    $(this).removeAttr("title");
                });
                var AddAttributeToHtmlElement = function (element, attributeName, attributeValue) {
                    $(element).attr(attributeName, attributeValue);
                };
                $('li#mnucrmMenuBarhelp .ms-crm-Menu-Label').click(function () { AddAttributeToHtmlElement('ul#mnucrmMenuBarhelp', 'role', 'item'); });
                $('li#mnucrmMenuBarhelp .ms-crm-Menu-Label').keydown(function (e) { if (e.keyCode == 13 || e.keyCode == 32) {
                    AddAttributeToHtmlElement('ul#mnucrmMenuBarhelp', 'role', 'item');
                } ; });
                $('li#mnuaction .ms-crm-Menu-Label').click(function () { AddAttributeToHtmlElement('ul#mnuaction', 'role', 'item'); });
                $('li#mnuaction .ms-crm-Menu-Label').keydown(function (e) { if (e.keyCode == 13 || e.keyCode == 32) {
                    AddAttributeToHtmlElement('ul#mnuaction', 'role', 'item');
                } ; });
                $('li#mnuaction a.ms-crm-Menu-Label span').text("");
                $('li#mnuaction a.ms-crm-Menu-Label').attr('aria-label', MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_MoreMenuTooltip"));
                $('li#mnuaction a.ms-crm-Menu-Label img').remove();
            };
            TBXDesignerControl.prototype.OverrideProcessDetailsSection = function () {
                $('#ProcessOwner_container input').attr('aria-readonly', "true");
                $('#ProcessOwner_container input').attr('title', $('#ProcessOwner').val());
                $('#ProcessOwner_container input').attr('aria-labelledby', "lbl_ProcessOwner");
                $('#ProcessOwner_container input').removeAttr("disabled");
                $('#ProcessOwner_container input').attr('readonly', "readonly");
                $('#PrimaryEntity_container input').attr('aria-readonly', "true");
                $('#PrimaryEntity_container input').attr('title', $('#PrimaryEntity').val());
                $('#PrimaryEntity_container input').attr('aria-labelledby', "lbl_PrimaryEntity");
                $('#PrimaryEntity_container input').removeAttr("disabled");
                $('#PrimaryEntity_container input').attr('readonly', "readonly");
                $('#Category_container input').attr('aria-readonly', "true");
                $('#Category_container input').attr('title', $('#Category').val());
                $('#Category_container input').attr('aria-labelledby', "lbl_Category");
                $('#Category_container input').removeAttr("disabled");
                $('#Category_container input').attr('readonly', "readonly");
                $('#ProcessUniqueName_container input').attr('aria-readonly', "true");
                $('#ProcessUniqueName_container input').attr('title', $('#ProcessUniqueName').val());
                $('#ProcessUniqueName_container input').attr('aria-labelledby', "lbl_ProcessUniqueName");
                $('#ProcessUniqueName_container input').removeAttr("disabled");
                $('#ProcessUniqueName_container input').attr('readonly', "readonly");
            };
            TBXDesignerControl.prototype.ToolpaneTab = function () {
                $('#lblLibrary').attr('role', "tab");
                $('#lblLibrary').attr('aria-selected', true);
                $('#lblProperty').attr('role', "tab");
                $('#lblProperty').attr('aria-selected', false);
            };
            TBXDesignerControl.EmptyOrNullInputProcessData = "Process data is empty or null";
            TBXDesignerControl.EmptyOrNullRawPropertyOfInputProcessData = "raw property of Process data is empty or null";
            TBXDesignerControl.xmlFilePath = "/_static/_common/scripts/TBXDesignerControl/LibraryTilesData_TBX.xml";
            TBXDesignerControl.xsdFilePath = "/_static/_common/scripts/TBXDesignerControl/ConfigXmlSchema.xsd";
            TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.None;
            return TBXDesignerControl;
        })();
        ProcessDesigner.TBXDesignerControl = TBXDesignerControl;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ElementIds.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ElementId = (function () {
            function ElementId() {
            }
            ElementId.Canvas = "canvas";
            ElementId.ProcessDesigner = "processdesigner";
            ElementId.WorkspaceWrapper = "workspaceWrapper";
            ElementId.Loader = "loader";
            ElementId.ZoomItem = "zoomItem";
            ElementId.PanIcon = "commandIcon";
            ElementId.ToolPane = "toolpane";
            ElementId.ToolPaneHeader = "toolpaneheader";
            ElementId.Library = "library";
            ElementId.Property = "property";
            ElementId.LibraryTab = "libraryTab";
            ElementId.PropertyTab = "propertyTab";
            ElementId.ProcessFooterReadOnlyState = "footerReadonlystate";
            ElementId.ProcessProp = "process_prop";
            return ElementId;
        })();
        ProcessDesigner.ElementId = ElementId;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="Constants.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var HtmlElementNames = (function () {
            function HtmlElementNames() {
            }
            HtmlElementNames.Div = "div";
            HtmlElementNames.ListItem = "li";
            HtmlElementNames.UnorderedList = "ul";
            HtmlElementNames.OrderedList = "ol";
            HtmlElementNames.Select = "select";
            HtmlElementNames.Option = "option";
            HtmlElementNames.Input = "input";
            HtmlElementNames.Image = "img";
            HtmlElementNames.Span = "span";
            HtmlElementNames.NoBR = "nobr";
            HtmlElementNames.TextArea = "textarea";
            HtmlElementNames.Anchor = "a";
            HtmlElementNames.Label = "label";
            HtmlElementNames.Table = "table";
            HtmlElementNames.TableColumn = "col";
            HtmlElementNames.TableColumnGroup = "colgroup";
            HtmlElementNames.TableRow = "tr";
            HtmlElementNames.TableCell = "td";
            return HtmlElementNames;
        })();
        ProcessDesigner.HtmlElementNames = HtmlElementNames;
        var HtmlAttributeNames = (function () {
            function HtmlAttributeNames() {
            }
            HtmlAttributeNames.AltText = "alt";
            HtmlAttributeNames.AttributeLogicalName = "attrName";
            HtmlAttributeNames.DefaultSelected = "defaultSelected";
            HtmlAttributeNames.DefaultValue = "defaultValue";
            HtmlAttributeNames.Id = "id";
            HtmlAttributeNames.NameAttribute = "name";
            HtmlAttributeNames.MaxLength = "maxLength";
            HtmlAttributeNames.PrivilegeMask = "attrPriv";
            HtmlAttributeNames.RequiredLevel = "req";
            HtmlAttributeNames.TabIndex = "tabindex";
            HtmlAttributeNames.Type = "type";
            HtmlAttributeNames.Min = "min";
            HtmlAttributeNames.Max = "max";
            HtmlAttributeNames.Accuracy = "acc";
            HtmlAttributeNames.DataType = "dt";
            HtmlAttributeNames.Href = "href";
            HtmlAttributeNames.Format = "format";
            HtmlAttributeNames.Dir = "dir";
            HtmlAttributeNames.AriaDescribedBy = "aria-describedby";
            HtmlAttributeNames.AriaLabeledBy = "aria-labelledby";
            HtmlAttributeNames.AriaInvalid = "aria-invalid";
            HtmlAttributeNames.Role = "role";
            HtmlAttributeNames.Title = "title";
            HtmlAttributeNames.CssClass = "class";
            return HtmlAttributeNames;
        })();
        ProcessDesigner.HtmlAttributeNames = HtmlAttributeNames;
        var CssClass = (function () {
            function CssClass() {
            }
            CssClass.ZoomItem = "zoomItem";
            CssClass.WorkspaceWrapper = "workspaceWrapper";
            CssClass.CommandButton = "commandButton";
            CssClass.WorkspaceButton = "workspaceButton";
            return CssClass;
        })();
        ProcessDesigner.CssClass = CssClass;
        var TelemetryConstants = (function () {
            function TelemetryConstants() {
            }
            TelemetryConstants.ViewedFromCanvas = "Canvas";
            TelemetryConstants.ViewedFromFlyout = "Flyout";
            TelemetryConstants.processStateDraft = "Draft";
            TelemetryConstants.processStateActive = "Active";
            return TelemetryConstants;
        })();
        ProcessDesigner.TelemetryConstants = TelemetryConstants;
        var ActivityTypeConstants = (function () {
            function ActivityTypeConstants() {
            }
            ActivityTypeConstants.PageActivity = "TBXPageActivity";
            ActivityTypeConstants.StepActivity = "TBXStepActivity";
            ActivityTypeConstants.ConditionActivity = "TBXConditionActivity";
            return ActivityTypeConstants;
        })();
        ProcessDesigner.ActivityTypeConstants = ActivityTypeConstants;
        var BPFConditionBranchLimits = (function () {
            function BPFConditionBranchLimits() {
            }
            BPFConditionBranchLimits.MaximumAllowedNestedBranches = 5;
            BPFConditionBranchLimits.MaximumAllowedBranchesUnderCondition = 10;
            return BPFConditionBranchLimits;
        })();
        ProcessDesigner.BPFConditionBranchLimits = BPFConditionBranchLimits;
        var Events = (function () {
            function Events() {
            }
            Events.StepSequencePropertyUpdated = "stepSequencePropertyUpdated";
            return Events;
        })();
        ProcessDesigner.Events = Events;
        var ElementPrefixes = (function () {
            function ElementPrefixes() {
            }
            ElementPrefixes.DetailsLabel = "Details";
            ElementPrefixes.DetailsPrefix = "details_";
            ElementPrefixes.TileButtonPrefix = "#tileButton_";
            ElementPrefixes.TileButtonImagePrefix = "#tileButtonImage_";
            ElementPrefixes.TileButtonTextPrefix = "#tileButtonSpan_";
            return ElementPrefixes;
        })();
        ProcessDesigner.ElementPrefixes = ElementPrefixes;
        (function (ProcessType) {
            ProcessType[ProcessType["Workflow"] = 0] = "Workflow";
            ProcessType[ProcessType["Dialog"] = 1] = "Dialog";
            ProcessType[ProcessType["BusinessRule"] = 2] = "BusinessRule";
            ProcessType[ProcessType["Action"] = 3] = "Action";
            ProcessType[ProcessType["BusinessProcessFlow"] = 4] = "BusinessProcessFlow";
        })(ProcessDesigner.ProcessType || (ProcessDesigner.ProcessType = {}));
        var ProcessType = ProcessDesigner.ProcessType;
        var ProcessTypeNames = (function () {
            function ProcessTypeNames() {
            }
            ProcessTypeNames.Workflow = "Workflow";
            ProcessTypeNames.Dialog = "Task Flow";
            ProcessTypeNames.BusinessRule = "Business Rule";
            ProcessTypeNames.Action = "Action";
            ProcessTypeNames.BusinessProcessFlow = "Business Process Flow";
            return ProcessTypeNames;
        })();
        ProcessDesigner.ProcessTypeNames = ProcessTypeNames;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="IHtmlTextWriter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ITextWriter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="HtmlTextWriter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="IHtmlTextWriter.ts"/>
/// <reference path="ITextWriter.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var HtmlTextWriter = (function () {
            function HtmlTextWriter(writer, tabString) {
                if (tabString === void 0) { tabString = HtmlTextWriter.DefaultTabString; }
                this.indentLevel = 0;
                this.tabsPending = false;
                this.tabString = "\t";
                this.writer = writer;
                this.tabString = tabString;
            }
            HtmlTextWriter.prototype.writeBeginTag = function (tag) {
                if (this.tabsPending) {
                    this.outputTabs();
                }
                this.writer.write(HtmlTextWriter.TagLeftChar);
                this.writer.write(tag);
            };
            HtmlTextWriter.prototype.writeEndTag = function (tag) {
                if (this.tabsPending) {
                    this.outputTabs();
                }
                this.writer.write(HtmlTextWriter.TagLeftChar);
                this.writer.write(HtmlTextWriter.SlashChar);
                this.writer.write(tag);
                this.writer.write(HtmlTextWriter.TagRightChar);
            };
            HtmlTextWriter.prototype.writeAttribute = function (name, value, encode) {
                if (encode === void 0) { encode = false; }
                this.writer.write(HtmlTextWriter.SpaceChar);
                this.writer.write(name);
                if (!CommonTypes.Types.String.isNullOrEmpty(value)) {
                    this.writer.write(HtmlTextWriter.EqualsDoubleQuoteString);
                    this.writer.write(value);
                    this.writer.write(HtmlTextWriter.DoubleQuoteChar);
                }
            };
            HtmlTextWriter.prototype.write = function (value) {
                if (this.tabsPending) {
                    this.outputTabs();
                }
                this.writer.write(value);
            };
            HtmlTextWriter.prototype.writeLine = function (value) {
                if (this.tabsPending) {
                    this.outputTabs();
                }
                this.writer.writeLine(value);
                this.tabsPending = true;
            };
            HtmlTextWriter.prototype.toString = function () {
                return this.writer.getText();
            };
            HtmlTextWriter.prototype.outputTabs = function () {
                if (this.tabsPending) {
                    for (var i = 0; i < this.indentLevel; i++) {
                        this.writer.write(this.tabString);
                    }
                    this.tabsPending = false;
                }
            };
            HtmlTextWriter.TagLeftChar = "<";
            HtmlTextWriter.TagRightChar = ">";
            HtmlTextWriter.SelfClosingChars = " /";
            HtmlTextWriter.SelfClosingTagEnd = " />";
            HtmlTextWriter.EndTagLeftChars = "</";
            HtmlTextWriter.DoubleQuoteChar = "\"";
            HtmlTextWriter.SingleQuoteChar = "'";
            HtmlTextWriter.SpaceChar = " ";
            HtmlTextWriter.EqualsChar = "=";
            HtmlTextWriter.SlashChar = "/";
            HtmlTextWriter.EqualsDoubleQuoteString = "=\"";
            HtmlTextWriter.SemicolonChar = ";";
            HtmlTextWriter.StyleEqualsChar = ":";
            HtmlTextWriter.DefaultTabString = "\t";
            return HtmlTextWriter;
        })();
        ProcessDesigner.HtmlTextWriter = HtmlTextWriter;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="MetadataProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var MetadataProvider = (function () {
            function MetadataProvider() {
            }
            MetadataProvider.getEntityMetadata = function (success, failure) {
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getEntityListMetadata(function (entityMetadataList) {
                    var entityMetadataJson = [];
                    for (var i = 0; i < entityMetadataList.length; i++) {
                        var entityMetadata = entityMetadataList[i];
                        var logicalName = entityMetadata.LogicalName;
                        var displayName = entityMetadata.DisplayName;
                        entityMetadataJson.push({
                            logicalName: logicalName,
                            displayName: displayName
                        });
                    }
                    entityMetadataJson = entityMetadataJson.sort(function (a, b) { return (a.displayName < b.displayName ? -1 : 1); });
                    success(entityMetadataJson);
                }, failure);
            };
            MetadataProvider.getFieldAttributeMetadata = function (entityLogicalName, success, failure) {
                var _this = this;
                if (ProcessDesigner.Util.isNull(entityLogicalName) || ProcessDesigner.Util.isEmptyString(entityLogicalName)) {
                    return [];
                }
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributesListWithType) {
                    if (entityLogicalName == "") {
                        return [];
                    }
                    if (attributesListWithType == null || attributesListWithType == undefined) {
                        console.log("Error:attributeMetadataList.childNodes[0].textContent is null File:MetadataProvider.ts Method:getAttributeMetadata()");
                        return;
                    }
                    var attributeTypeMapping = {};
                    var attributeDependentOptionSetMappings = {};
                    for (var attributesCount = 0; attributesCount < attributesListWithType.length; attributesCount++) {
                        attributeTypeMapping[attributesListWithType[attributesCount].LogicalName] = attributesListWithType[attributesCount].Type;
                        if (attributesListWithType[attributesCount].Type == ProcessDesigner.AttributeType.Picklist) {
                            var attributeDependentOptionSetProperties = { parentPicklistLogicalName: "", childPicklistLogicalNames: null };
                            attributeDependentOptionSetProperties.parentPicklistLogicalName = attributesListWithType[attributesCount].AdditionalMetadata.ParentPicklistLogicalName;
                            attributeDependentOptionSetProperties.childPicklistLogicalNames = attributesListWithType[attributesCount].AdditionalMetadata.ChildPicklistLogicalNames;
                            attributeDependentOptionSetMappings[attributesListWithType[attributesCount].LogicalName] = attributeDependentOptionSetProperties;
                        }
                    }
                    var attributeMetadataJson = [];
                    ProcessDesigner.TBXDesignerControl.dataBag.resources.getStepAttributeListMetadata(entityLogicalName, function (attributesList) {
                        if (!ProcessDesigner.Util.isNull(attributesList)) {
                            attributesList = attributesList.Fields;
                            for (var i = 0; i < attributesList.length; i++) {
                                var attributeData = attributesList[i];
                                var attributeType = attributeTypeMapping[attributeData.LogicalName];
                                var parentPicklistLogicalName = attributeType == ProcessDesigner.AttributeType.Picklist ? attributeDependentOptionSetMappings[attributeData.LogicalName].parentPicklistLogicalName : "";
                                var childPicklistLogicalNames = attributeType == ProcessDesigner.AttributeType.Picklist ? attributeDependentOptionSetMappings[attributeData.LogicalName].childPicklistLogicalNames : null;
                                if (CommonTypes.Types.Object.isNullOrUndefined(attributeType) || _this.verifyAttributeType(attributeType)) {
                                    var logicalName = attributeData.LogicalName;
                                    var displayName = attributeData.Label.Description;
                                    attributeMetadataJson.push({
                                        logicalName: logicalName,
                                        displayName: displayName,
                                        isSystemControl: false,
                                        attributeType: attributeType,
                                        parentPicklistLogicalName: parentPicklistLogicalName,
                                        childPicklistLogicalNames: CommonTypes.Types.Object.isNullOrUndefined(childPicklistLogicalNames) ? childPicklistLogicalNames : childPicklistLogicalNames.join(", ")
                                    });
                                }
                            }
                            attributeMetadataJson = attributeMetadataJson.sort(function (a, b) { return (a.displayName < b.displayName ? -1 : 1); });
                        }
                        success(attributeMetadataJson);
                    }, failure);
                }, failure);
            };
            MetadataProvider.getAttributeMetadata = function (entityLogicalName, success, failure) {
                var _this = this;
                if (entityLogicalName == "") {
                    return [];
                }
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributesList) {
                    if (entityLogicalName == "") {
                        return [];
                    }
                    if (attributesList == null || attributesList == undefined) {
                        console.log("Error:attributeMetadataList.childNodes[0].textContent is null File:MetadataProvider.ts Method:getAttributeMetadata()");
                        return;
                    }
                    var attributeMetadataJson = [];
                    for (var i = 0; i < attributesList.length; i++) {
                        var attributeData = attributesList[i];
                        if (_this.verifyAttributeType(attributeData.Type)) {
                            var logicalName = attributeData.LogicalName;
                            var displayName = attributeData.Label.Description;
                            var attributeType = attributeData.Type;
                            var attributeFormat = attributeData.AdditionalMetadata.Format;
                            var maxLength = attributeData.AdditionalMetadata.MaxLength;
                            var maxValue = attributeData.AdditionalMetadata.MaxValue;
                            var minValue = attributeData.AdditionalMetadata.MinValue;
                            var precision = attributeData.AdditionalMetadata.Precision;
                            if (displayName) {
                                if (attributeType === ProcessDesigner.AttributeType.DateTime) {
                                    attributeMetadataJson.push({
                                        logicalName: logicalName,
                                        displayName: displayName,
                                        attributeType: attributeType,
                                        dateFormat: attributeFormat
                                    });
                                }
                                else if (attributeType === ProcessDesigner.AttributeType.Lookup || attributeType === ProcessDesigner.AttributeType.Owner || attributeType === ProcessDesigner.AttributeType.Customer) {
                                    var targetEntityLookupTypeNames = attributeData.AdditionalMetadata.LookupTypeNames;
                                    var lookupTypeNameStrings = targetEntityLookupTypeNames.split(",");
                                    var targetEntityForLookUp = [];
                                    var lookupTypes = attributeData.AdditionalMetadata.LookupTypes;
                                    for (var lookupTypeName in lookupTypeNameStrings) {
                                        var lookupStrings = lookupTypeNameStrings[lookupTypeName].split(":");
                                        var targetEntity = lookupStrings[0];
                                        targetEntityForLookUp.push(targetEntity);
                                    }
                                    attributeMetadataJson.push({
                                        logicalName: logicalName,
                                        displayName: displayName,
                                        attributeType: attributeType,
                                        targetEntityForLookUp: targetEntityForLookUp,
                                        lookupTypes: lookupTypes
                                    });
                                }
                                else {
                                    attributeMetadataJson.push({
                                        logicalName: logicalName,
                                        displayName: displayName,
                                        attributeType: attributeType,
                                        maxLength: maxLength,
                                        maxValue: maxValue,
                                        minValue: minValue,
                                        precision: precision
                                    });
                                }
                            }
                        }
                    }
                    attributeMetadataJson = attributeMetadataJson.sort(function (a, b) { return (a.displayName < b.displayName ? -1 : 1); });
                    success(attributeMetadataJson);
                }, failure);
            };
            MetadataProvider.verifyAttributeType = function (attributeTypeValue) {
                var attributeType = MscrmControls.ProcessDesigner.AttributeType[attributeTypeValue];
                if (!CommonTypes.Types.Object.isNullOrUndefined(attributeType)) {
                    return true;
                }
                return false;
            };
            MetadataProvider.getOperators = function (entityLogicalName, attributeLogicalName, success, fail) {
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributeMetadataListXmlNode) {
                    var attributeType = MetadataProvider.getAttributeType(attributeMetadataListXmlNode, attributeLogicalName);
                    var operatorList = MetadataProvider.getOperatorList(attributeType);
                    success(operatorList);
                }, fail);
            };
            MetadataProvider.isFormulaValid = function (entityLogicalName, attributeLogicalName, success, fail) {
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributeMetadataListXmlNode) {
                    var attributeType = MetadataProvider.getAttributeType(attributeMetadataListXmlNode, attributeLogicalName);
                    success(MetadataProvider.isFormulaValidForAttributeType(attributeType));
                }, fail);
            };
            MetadataProvider.isFormulaValidForAttributeType = function (attributeType) {
                var isFormulaValid = false;
                switch (attributeType) {
                    case ProcessDesigner.AttributeType.Double:
                    case ProcessDesigner.AttributeType.Integer:
                    case ProcessDesigner.AttributeType.BigInt:
                    case ProcessDesigner.AttributeType.Decimal:
                    case ProcessDesigner.AttributeType.DateTime:
                    case ProcessDesigner.AttributeType.Money:
                        isFormulaValid = true;
                        break;
                }
                return isFormulaValid;
            };
            MetadataProvider.isUnaryOperator = function (operatorName) {
                var unaryOperatorsList = MetadataProvider.getUnaryOperatorList();
                var isUnaryOperator = false;
                for (var i = 0; i < unaryOperatorsList.length; i++) {
                    if (unaryOperatorsList[i] === operatorName) {
                        isUnaryOperator = true;
                        break;
                    }
                }
                return isUnaryOperator;
            };
            MetadataProvider.isUnaryOperatorByValue = function (operatorValue) {
                var unaryOperatorsList = MetadataProvider.getUnaryOperatorValueList();
                var isUnaryOperator = false;
                for (var i = 0; i < unaryOperatorsList.length; i++) {
                    if (unaryOperatorsList[i].toString() == operatorValue) {
                        isUnaryOperator = true;
                        break;
                    }
                }
                return isUnaryOperator;
            };
            MetadataProvider.getPickListValues = function (entityLogicalName, attributeLogicalNames, success, fail) {
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getAttributePickListMetadata(entityLogicalName, attributeLogicalNames, function (optionSetList) {
                    var pickListValuesJson = [];
                    for (var i = 0; i < optionSetList.length; i++) {
                        var value = optionSetList[i];
                        var pickListOptionValue = value.Label;
                        var pickListOptionOrder = value.Value;
                        if (pickListOptionValue) {
                            pickListValuesJson.push({
                                pickListValueOrderId: pickListOptionOrder,
                                pickListValue: pickListOptionValue
                            });
                        }
                    }
                    success(pickListValuesJson);
                }, fail);
            };
            MetadataProvider.getAttributeType = function (attributesList, attributeLogicalName) {
                var attributeType;
                if (attributeLogicalName == "") {
                    return null;
                }
                if (attributesList == null || attributesList == undefined) {
                    console.log("Error:attributeMetadataList.childNodes[0].textContent is null File:MetadataProvider.ts Method:getAttributeMetadata()");
                    return;
                }
                var attributeMetadataJson = [];
                for (var i = 0; i < attributesList.length; i++) {
                    var attributeData = attributesList[i];
                    var logicalName = attributeData.LogicalName;
                    if (logicalName === attributeLogicalName) {
                        attributeType = attributeData.Type;
                        break;
                    }
                }
                return attributeType;
            };
            MetadataProvider.getUnaryOperatorList = function () {
                if (this.unaryOperatorList.length === 0) {
                    this.unaryOperatorList = [
                        ProcessDesigner.ConditionOperator.DoesNotContainData,
                        ProcessDesigner.ConditionOperator.ContainsData,
                        ProcessDesigner.ConditionOperator.Yesterday,
                        ProcessDesigner.ConditionOperator.Today,
                        ProcessDesigner.ConditionOperator.Tomorrow,
                        ProcessDesigner.ConditionOperator.NextSevenDays,
                        ProcessDesigner.ConditionOperator.LastSevenDays,
                        ProcessDesigner.ConditionOperator.NextWeek,
                        ProcessDesigner.ConditionOperator.LastWeek,
                        ProcessDesigner.ConditionOperator.ThisWeek,
                        ProcessDesigner.ConditionOperator.NextMonth,
                        ProcessDesigner.ConditionOperator.LastMonth,
                        ProcessDesigner.ConditionOperator.ThisMonth,
                        ProcessDesigner.ConditionOperator.NextYear,
                        ProcessDesigner.ConditionOperator.LastYear,
                        ProcessDesigner.ConditionOperator.ThisYear,
                        ProcessDesigner.ConditionOperator.Anytime
                    ];
                }
                return this.unaryOperatorList;
            };
            MetadataProvider.getUnaryOperatorValueList = function () {
                var unaryOperatorList = [
                    ProcessDesigner.ConditionOperator.DoesNotContainData, ProcessDesigner.ConditionOperator.ContainsData,
                    ProcessDesigner.ConditionOperator.Yesterday, ProcessDesigner.ConditionOperator.Today,
                    ProcessDesigner.ConditionOperator.Tomorrow, ProcessDesigner.ConditionOperator.NextSevenDays,
                    ProcessDesigner.ConditionOperator.LastSevenDays, ProcessDesigner.ConditionOperator.NextWeek,
                    ProcessDesigner.ConditionOperator.LastWeek, ProcessDesigner.ConditionOperator.ThisWeek,
                    ProcessDesigner.ConditionOperator.NextMonth, ProcessDesigner.ConditionOperator.LastMonth,
                    ProcessDesigner.ConditionOperator.ThisMonth, ProcessDesigner.ConditionOperator.NextYear,
                    ProcessDesigner.ConditionOperator.LastYear, ProcessDesigner.ConditionOperator.ThisYear,
                    ProcessDesigner.ConditionOperator.Anytime];
                return unaryOperatorList;
            };
            MetadataProvider.getOperatorList = function (attributeType) {
                var operatorList = [];
                switch (attributeType) {
                    case ProcessDesigner.AttributeType.Boolean:
                        operatorList = [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                            { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 }
                        ];
                        break;
                    case ProcessDesigner.AttributeType.String:
                    case ProcessDesigner.AttributeType.Lookup:
                    case ProcessDesigner.AttributeType.Owner:
                    case ProcessDesigner.AttributeType.Customer:
                    case ProcessDesigner.AttributeType.State:
                    case ProcessDesigner.AttributeType.Status:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Contains"), value: 8 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContain"), value: 9 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_BeginsWith"), value: 10 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotBeginWith"), value: 11 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_EndsWith"), value: 12 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotEndWith"), value: 13 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.Picklist:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.Money:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.DateTime:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_On"), value: 20 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotOn"), value: 21 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.Integer:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.BigInt:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.Decimal:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.Double:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThan"), value: 14 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_GreaterThanOrEqual"), value: 15 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThan"), value: 16 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_LessThanOrEqual"), value: 17 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case ProcessDesigner.AttributeType.UniqueIdentifier:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 }
                            ];
                        break;
                }
                return operatorList;
            };
            MetadataProvider.getRelationshipMetadata = function (referencedEntityName, referencingEntityName, success, failure) {
                ProcessDesigner.TBXDesignerControl.dataBag.resources.getRelationshipMetadata(referencedEntityName, function (metadataArray) {
                    if (metadataArray == null || metadataArray == undefined) {
                        console.log("Error:metadataArray[0].d is null File:MetadataProvider.ts Method:getRelationshipMetadata()");
                        return;
                    }
                    var relationshipMetadataJson = [];
                    var jsonRelationshipMetadata = metadataArray.get_items();
                    for (var i = 0; i < jsonRelationshipMetadata.length; i++) {
                        var relationshipMetadata = jsonRelationshipMetadata[i];
                        var relationshipName = relationshipMetadata.get_relationshipName();
                        var attributeLabel = relationshipMetadata.get_attributeDisplayName();
                        var referencingEntityLogicalName = relationshipMetadata.get_targetStageEntityLogicalName();
                        if (referencingEntityName === referencingEntityLogicalName) {
                            relationshipMetadataJson.push({
                                logicalName: relationshipName,
                                displayName: attributeLabel
                            });
                        }
                    }
                    relationshipMetadataJson = relationshipMetadataJson.sort(function (a, b) { return (a.displayName < b.displayName ? -1 : 1); });
                    success(relationshipMetadataJson);
                }, failure);
            };
            MetadataProvider.getLoadedRelationshipEntityMetadata = function () {
                return ProcessDesigner.TBXDesignerControl.dataBag.resources.getLoadedRelationshipEntityMetadata();
            };
            MetadataProvider.getLocalizedString = function (inputString) {
                return ProcessDesigner.TBXDesignerControl.dataBag.resources.getString(inputString);
            };
            MetadataProvider.unaryOperatorList = [];
            return MetadataProvider;
        })();
        ProcessDesigner.MetadataProvider = MetadataProvider;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="StringUtility.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var StringUtility = (function () {
            function StringUtility() {
            }
            StringUtility.RemoveSpaces = function (stringWithSpaces) {
                return stringWithSpaces.replace(/\s+/g, '');
                ;
            };
            StringUtility.IsStringNullOrEmpty = function (stringToCheck) {
                return (!stringToCheck || 0 === stringToCheck.length);
            };
            return StringUtility;
        })();
        ProcessDesigner.StringUtility = StringUtility;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerLaunchedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerLaunchedEventName = "ProcessDesignerLaunched";
        var ProcessDesignerLaunchedEvent = (function (_super) {
            __extends(ProcessDesignerLaunchedEvent, _super);
            function ProcessDesignerLaunchedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerLaunchedEventName);
            }
            ProcessDesignerLaunchedEvent.prototype.SetLaunchInfo = function (processId, sessionId, processType, state, originCrmClient, launchedFrom, immediateLaunchedFrom, parentSessionId) {
                this.AddEventParameter(ProcessDesignerLaunchedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.processType, processType);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.state, state);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.originCrmClient, originCrmClient);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.launchedFrom, launchedFrom);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.immediatelaunchedFrom, immediateLaunchedFrom);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.parentSessionId, parentSessionId);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.timestamp, Utility.GetTimeStamp());
            };
            ProcessDesignerLaunchedEvent.prototype.SetEnvInfo = function (formFactor, userAgent, locale, languageCode) {
                this.AddEventParameter(ProcessDesignerLaunchedParameters.formFactor, formFactor);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.userAgent, userAgent);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.locale, locale);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.languageCode, languageCode);
            };
            ProcessDesignerLaunchedEvent.prototype.SetUserAndOrgInfo = function (userId, userRole, organizationId) {
                this.AddEventParameter(ProcessDesignerLaunchedParameters.userId, userId);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.userRole, userRole);
                this.AddEventParameter(ProcessDesignerLaunchedParameters.organizationId, organizationId);
            };
            return ProcessDesignerLaunchedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerLaunchedEvent = ProcessDesignerLaunchedEvent;
        var ProcessDesignerLaunchedParameters = (function () {
            function ProcessDesignerLaunchedParameters() {
            }
            ProcessDesignerLaunchedParameters.processId = "ProcessId";
            ProcessDesignerLaunchedParameters.sessionId = "SessionId";
            ProcessDesignerLaunchedParameters.processType = "ProcessType";
            ProcessDesignerLaunchedParameters.state = "State";
            ProcessDesignerLaunchedParameters.originCrmClient = "OriginCrmClient";
            ProcessDesignerLaunchedParameters.timestamp = "Timestamp";
            ProcessDesignerLaunchedParameters.launchedFrom = "LaunchedFrom";
            ProcessDesignerLaunchedParameters.immediatelaunchedFrom = "ImmediateLaunchedFrom";
            ProcessDesignerLaunchedParameters.parentSessionId = "ParentSessionId";
            ProcessDesignerLaunchedParameters.organizationId = "OrganizationId";
            ProcessDesignerLaunchedParameters.userId = "UserId";
            ProcessDesignerLaunchedParameters.userRole = "UserRole";
            ProcessDesignerLaunchedParameters.formFactor = "FormFactor";
            ProcessDesignerLaunchedParameters.userAgent = "UserAgent";
            ProcessDesignerLaunchedParameters.locale = "Locale";
            ProcessDesignerLaunchedParameters.languageCode = "LanguageCode";
            return ProcessDesignerLaunchedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerTileDetailsViewedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerTileDetailsViewedEventName = "ProcessDesignerTileDetailsViewed";
        var ProcessDesignerTileDetailsViewedEvent = (function (_super) {
            __extends(ProcessDesignerTileDetailsViewedEvent, _super);
            function ProcessDesignerTileDetailsViewedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerTileDetailsViewedEventName);
            }
            ProcessDesignerTileDetailsViewedEvent.prototype.SetInfo = function (processId, sessionId, state, tileId, tileType, parentTileId) {
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.state, state);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.tileId, tileId);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.tileType, tileType);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.parentTileId, parentTileId);
                this.AddEventParameter(ProcessDesignerTileDetailsViewedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerTileDetailsViewedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerTileDetailsViewedEvent = ProcessDesignerTileDetailsViewedEvent;
        var ProcessDesignerTileDetailsViewedParameters = (function () {
            function ProcessDesignerTileDetailsViewedParameters() {
            }
            ProcessDesignerTileDetailsViewedParameters.processId = "ProcessId";
            ProcessDesignerTileDetailsViewedParameters.sessionId = "SessionId";
            ProcessDesignerTileDetailsViewedParameters.state = "State";
            ProcessDesignerTileDetailsViewedParameters.tileId = "TileId";
            ProcessDesignerTileDetailsViewedParameters.tileType = "Type";
            ProcessDesignerTileDetailsViewedParameters.parentTileId = "ParentTileId";
            ProcessDesignerTileDetailsViewedParameters.timestamp = "Timestamp";
            return ProcessDesignerTileDetailsViewedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerTileAddedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerTileAddedEventName = "ProcessDesignerTileAdded";
        var ProcessDesignerTileAddedEvent = (function (_super) {
            __extends(ProcessDesignerTileAddedEvent, _super);
            function ProcessDesignerTileAddedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerTileAddedEventName);
            }
            ProcessDesignerTileAddedEvent.prototype.SetInfo = function (processId, sessionId, state, addMethod, tileId, tileType, parentTileId) {
                this.AddEventParameter(ProcessDesignerTileAddedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.state, state);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.addMethod, addMethod);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.tileId, tileId);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.tileType, tileType);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.parentTileId, parentTileId);
                this.AddEventParameter(ProcessDesignerTileAddedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerTileAddedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerTileAddedEvent = ProcessDesignerTileAddedEvent;
        var ProcessDesignerTileAddedParameters = (function () {
            function ProcessDesignerTileAddedParameters() {
            }
            ProcessDesignerTileAddedParameters.processId = "ProcessId";
            ProcessDesignerTileAddedParameters.sessionId = "SessionId";
            ProcessDesignerTileAddedParameters.state = "State";
            ProcessDesignerTileAddedParameters.addMethod = "AddMethod";
            ProcessDesignerTileAddedParameters.tileId = "TileId";
            ProcessDesignerTileAddedParameters.tileType = "Type";
            ProcessDesignerTileAddedParameters.parentTileId = "ParentTileId";
            ProcessDesignerTileAddedParameters.timestamp = "Timestamp";
            return ProcessDesignerTileAddedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerTileRemovedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerTileRemovedEventName = "ProcessDesignerTileRemoved";
        var ProcessDesignerTileRemovedEvent = (function (_super) {
            __extends(ProcessDesignerTileRemovedEvent, _super);
            function ProcessDesignerTileRemovedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerTileRemovedEventName);
            }
            ProcessDesignerTileRemovedEvent.prototype.SetInfo = function (processId, sessionId, state, tileId, tileType, parentTileId) {
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.state, state);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.tileId, tileId);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.tileType, tileType);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.parentTileId, parentTileId);
                this.AddEventParameter(ProcessDesignerTileRemovedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerTileRemovedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerTileRemovedEvent = ProcessDesignerTileRemovedEvent;
        var ProcessDesignerTileRemovedParameters = (function () {
            function ProcessDesignerTileRemovedParameters() {
            }
            ProcessDesignerTileRemovedParameters.processId = "ProcessId";
            ProcessDesignerTileRemovedParameters.sessionId = "SessionId";
            ProcessDesignerTileRemovedParameters.state = "State";
            ProcessDesignerTileRemovedParameters.tileId = "TileId";
            ProcessDesignerTileRemovedParameters.tileType = "Type";
            ProcessDesignerTileRemovedParameters.parentTileId = "ParentTileId";
            ProcessDesignerTileRemovedParameters.timestamp = "Timestamp";
            return ProcessDesignerTileRemovedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerTileReorderedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerTileReorderedEventName = "ProcessDesignerTileReordered";
        var ProcessDesignerTileReorderedEvent = (function (_super) {
            __extends(ProcessDesignerTileReorderedEvent, _super);
            function ProcessDesignerTileReorderedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerTileReorderedEventName);
            }
            ProcessDesignerTileReorderedEvent.prototype.SetInfo = function (processId, sessionId, state, tileId, tileType, parentTileId, reorderMethod) {
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.state, state);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.tileId, tileId);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.tileType, tileType);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.parentTileId, parentTileId);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.reorderMethod, reorderMethod);
                this.AddEventParameter(ProcessDesignerTileReorderedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerTileReorderedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerTileReorderedEvent = ProcessDesignerTileReorderedEvent;
        var ProcessDesignerTileReorderedParameters = (function () {
            function ProcessDesignerTileReorderedParameters() {
            }
            ProcessDesignerTileReorderedParameters.processId = "ProcessId";
            ProcessDesignerTileReorderedParameters.sessionId = "SessionId";
            ProcessDesignerTileReorderedParameters.state = "State";
            ProcessDesignerTileReorderedParameters.tileId = "TileId";
            ProcessDesignerTileReorderedParameters.tileType = "Type";
            ProcessDesignerTileReorderedParameters.parentTileId = "ParentTileId";
            ProcessDesignerTileReorderedParameters.timestamp = "Timestamp";
            ProcessDesignerTileReorderedParameters.reorderMethod = "ReorderMethod";
            return ProcessDesignerTileReorderedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerSessionClosedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerSessionClosedEventName = "ProcessDesignerSessionClosed";
        var ProcessDesignerSessionClosedEvent = (function (_super) {
            __extends(ProcessDesignerSessionClosedEvent, _super);
            function ProcessDesignerSessionClosedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerSessionClosedEventName);
            }
            ProcessDesignerSessionClosedEvent.prototype.SetInfo = function (processId, processType, sessionId, state, type) {
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.processType, processType);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.state, state);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.type, type);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.timestamp, Utility.GetTimeStamp());
            };
            ProcessDesignerSessionClosedEvent.prototype.SetUserAndOrgInfo = function (userId, userRole, organizationId) {
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.userId, userId);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.userRole, userRole);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.organizationId, organizationId);
            };
            return ProcessDesignerSessionClosedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerSessionClosedEvent = ProcessDesignerSessionClosedEvent;
        var ProcessDesignerSessionClosedParameters = (function () {
            function ProcessDesignerSessionClosedParameters() {
            }
            ProcessDesignerSessionClosedParameters.processId = "ProcessId";
            ProcessDesignerSessionClosedParameters.processType = "ProcessType";
            ProcessDesignerSessionClosedParameters.sessionId = "SessionId";
            ProcessDesignerSessionClosedParameters.state = "State";
            ProcessDesignerSessionClosedParameters.type = "Type";
            ProcessDesignerSessionClosedParameters.timestamp = "Timestamp";
            ProcessDesignerSessionClosedParameters.userId = "UserId";
            ProcessDesignerSessionClosedParameters.userRole = "UserRole";
            ProcessDesignerSessionClosedParameters.organizationId = "OrganizationId";
            return ProcessDesignerSessionClosedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="TelemetryEventReporter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../TelemetryEvents/ProcessDesignerLaunchedEvent.ts"/>
/// <reference path="../../TelemetryEvents/ProcessDesignerTileDetailsViewedEvent.ts"/>
/// <reference path="../../TelemetryEvents/ProcessDesignerTileAddedEvent.ts"/>
/// <reference path="../../TelemetryEvents/ProcessDesignerTileRemovedEvent.ts"/>
/// <reference path="../../TelemetryEvents/ProcessDesignerTileReorderedEvent.ts"/>
/// <reference path="../../TelemetryEvents/ProcessDesignerSessionClosedEvent.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var TelemetryReporterType = _Microsoft.Client.Telemetry.TelemetryReporterType;
        var TelemetryEventReporter = (function () {
            function TelemetryEventReporter() {
            }
            TelemetryEventReporter.ReportProcessDesignerLaunchEvent = function (context) {
                try {
                    var event = new ProcessDesigner.ProcessDesignerLaunchedEvent();
                    var originCrmClient = "WebClient";
                    if (CommonTypes.Types.String.isNullOrEmpty(window.top["Xrm"]["Page"]["context"]["client"]["getClient()"])) {
                        originCrmClient = window.top["Xrm"]["Page"]["context"]["client"]["getClient()"] + "Client";
                    }
                    ;
                    var launchedFrom = "EntityForm";
                    if (!CommonTypes.Types.Object.isNullOrUndefined(window["launchPoint"])) {
                        launchedFrom = window["launchPoint"];
                    }
                    var processType = ProcessDesigner.ProcessTypeNames.Dialog;
                    if (!CommonTypes.Types.Object.isNullOrUndefined(context.parameters.StateCode.raw)
                        && !CommonTypes.Types.Object.isNullOrUndefined(context.parameters.StatusCode.raw)) {
                        ProcessDesigner.processState = TelemetryEventReporter.getProcessState(context.parameters.StateCode.raw, context.parameters.StatusCode.raw);
                    }
                    var immediateLaunchedFrom = "";
                    var parentSessionId = "";
                    event.SetLaunchInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, processType, ProcessDesigner.processState, originCrmClient, launchedFrom, immediateLaunchedFrom, parentSessionId);
                    var formFactor = context.client.formFactor.toString();
                    var userAgent = context.client.userAgent.getUserAgentName();
                    var locale = context.client.locale;
                    var languageCode = context.client.languageCode;
                    event.SetEnvInfo(formFactor, userAgent, locale, languageCode);
                    var userId = context.internal.userId.replace('{', '').replace('}', '');
                    var userRoles = context.internal.userRoles.toString();
                    var organizationId = window.ORG_ID.toString().replace('{', '').replace('}', '');
                    event.SetUserAndOrgInfo(userId, userRoles, organizationId);
                    event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
                }
                catch (e) {
                }
            };
            TelemetryEventReporter.getProcessType = function (category) {
                switch (category) {
                    case ProcessDesigner.ProcessType.Workflow:
                        return "Workflow";
                    case ProcessDesigner.ProcessType.Dialog:
                        return "Dialog";
                    case ProcessDesigner.ProcessType.BusinessRule:
                        return "Business Rule";
                    case ProcessDesigner.ProcessType.Action:
                        return "Workflow";
                    case ProcessDesigner.ProcessType.BusinessProcessFlow:
                        return "Business Process Flow";
                    default:
                        return "";
                }
            };
            TelemetryEventReporter.getProcessState = function (state, statusCode) {
                if (state == 0 && statusCode == 1) {
                    return ProcessDesigner.TelemetryConstants.processStateDraft;
                }
                else if (state == 1 && statusCode == 2) {
                    return ProcessDesigner.TelemetryConstants.processStateActive;
                }
                else {
                    return "";
                }
            };
            TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent = function (tileId, tileType, parentTileId) {
                var event = new ProcessDesigner.ProcessDesignerTileDetailsViewedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileAddedTelemetryEvent = function (addMethod, tileId, tileType, parentTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileAddedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, addMethod, tileId, tileType, parentTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileConnectedTelemetryEvent = function (sourceTileId, ifConditionTileId, destinationTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ConnectOperationPerformedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.ProcessTypeNames.Dialog, ProcessDesigner.processState, sourceTileId, ifConditionTileId, destinationTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileDisconnectedTelemetryEvent = function (sourceTileId, ifConditionTileId, defaultPathTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.DisconnectOperationPerformedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.ProcessTypeNames.Dialog, ProcessDesigner.processState, sourceTileId, ifConditionTileId, defaultPathTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileReconnectedTelemetryEvent = function (sourceTileId, ifConditionTileId, oldDefaultPathTileId, newDefaultPathTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ReconnectOperationPerformedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.ProcessTypeNames.Dialog, ProcessDesigner.processState, sourceTileId, ifConditionTileId, oldDefaultPathTileId, newDefaultPathTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileRemovedTelemetryEvent = function (tileId, tileType, parentTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileRemovedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportTileReorderedTelemetryEvent = function (tileId, tileType, parentTileId, reorderMethod) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileReorderedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId, reorderMethod);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportProcessDesignerCloseEvent = function (context) {
                var event = new ProcessDesigner.ProcessDesignerSessionClosedEvent();
                var sessionType = "";
                if (ProcessDesigner.isStructuralChangePerformed) {
                    sessionType = "Build";
                }
                else if (ProcessDesigner.isPropertyPageSaved) {
                    sessionType = "Refine";
                }
                else {
                    sessionType = "Review";
                }
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.ProcessTypeNames.Dialog, ProcessDesigner.sessionId, ProcessDesigner.processState, sessionType);
                var userId = context.internal.userId.replace('{', '').replace('}', '');
                var userRoles = context.internal.userRoles.toString();
                var organizationId = window.ORG_ID.toString().replace('{', '').replace('}', '');
                event.SetUserAndOrgInfo(userId, userRoles, organizationId);
                event.FinishActivityImmediately(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportProcessDesignerActivateEvent = function () {
                var event = new ProcessDesigner.ProcessDesignerActivatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, "", "", TelemetryEventReporter.getProcessType(ProcessDesigner.ProcessType.Dialog));
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportProcessDesignerDeactivateEvent = function () {
                var event = new ProcessDesigner.ProcessDesigneDeactivatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportProcessDesignerSaveEvent = function () {
                var event = new ProcessDesigner.ProcessDesignerSavedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState);
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.ReportProcessDesignerValidateEvent = function (validatedAt, errorDetails, errorCount) {
                var event = new ProcessDesigner.ProcessDesignerValidatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, validatedAt, errorDetails, errorCount, TelemetryEventReporter.getProcessType(ProcessDesigner.ProcessType.Dialog));
                event.FinishActivity(TelemetryEventReporter.telemetryReportingType);
            };
            TelemetryEventReporter.GetAddModeNameForActivity = function (addMode) {
                var addModeName = "";
                switch (addMode) {
                    case ProcessDesigner.BPFToolBarAddMode.AddStep:
                    case ProcessDesigner.BPFToolBarAddMode.AddStage:
                    case ProcessDesigner.BPFToolBarAddMode.AddCondition:
                        addModeName = "Add";
                        break;
                    case ProcessDesigner.BPFToolBarAddMode.PasteStage:
                    case ProcessDesigner.BPFToolBarAddMode.PasteStep:
                    case ProcessDesigner.BPFToolBarAddMode.PasteBranch:
                        if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                            addModeName = "Cut-Paste";
                            break;
                        }
                        addModeName = "Copy-Paste";
                        break;
                    case ProcessDesigner.BPFToolBarAddMode.DropStep:
                    case ProcessDesigner.BPFToolBarAddMode.None:
                    default:
                        addModeName = "Drag-Drop";
                        break;
                }
                return addModeName;
            };
            TelemetryEventReporter.telemetryReportingType = TelemetryReporterType.CrmInsights;
            return TelemetryEventReporter;
        })();
        ProcessDesigner.TelemetryEventReporter = TelemetryEventReporter;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="TextWriter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="ITextWriter.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var TextWriter = (function () {
            function TextWriter() {
                this.text = "";
            }
            TextWriter.prototype.write = function (value) {
                this.text += value;
            };
            TextWriter.prototype.writeLine = function (value) {
                this.write(value);
                this.write(TextWriter.CoreNewLine);
            };
            TextWriter.prototype.getText = function () {
                return this.text;
            };
            TextWriter.CoreNewLine = "\r\n";
            return TextWriter;
        })();
        ProcessDesigner.TextWriter = TextWriter;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerSavedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerSavedEventName = "ProcessDesignerSaved";
        var ProcessDesignerSavedEvent = (function (_super) {
            __extends(ProcessDesignerSavedEvent, _super);
            function ProcessDesignerSavedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerSavedEventName);
            }
            ProcessDesignerSavedEvent.prototype.SetInfo = function (processId, sessionId, state) {
                this.AddEventParameter(ProcessDesignerSavedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerSavedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerSavedParameters.state, state);
                this.AddEventParameter(ProcessDesignerSavedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerSavedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerSavedEvent = ProcessDesignerSavedEvent;
        var ProcessDesignerSavedParameters = (function () {
            function ProcessDesignerSavedParameters() {
            }
            ProcessDesignerSavedParameters.processId = "ProcessId";
            ProcessDesignerSavedParameters.sessionId = "SessionId";
            ProcessDesignerSavedParameters.state = "State";
            ProcessDesignerSavedParameters.timestamp = "Timestamp";
            return ProcessDesignerSavedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerActivatedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerActivatedEventName = "ProcessDesignerActivated";
        var ProcessDesignerActivatedEvent = (function (_super) {
            __extends(ProcessDesignerActivatedEvent, _super);
            function ProcessDesignerActivatedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerActivatedEventName);
            }
            ProcessDesignerActivatedEvent.prototype.SetInfo = function (processId, sessionId, state, errorDetails, errorCount, processType) {
                this.AddEventParameter(ProcessDesignerActivatedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerActivatedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerActivatedParameters.processType, processType);
                this.AddEventParameter(ProcessDesignerActivatedParameters.state, state);
                this.AddEventParameter(ProcessDesignerActivatedParameters.errorDetails, errorDetails);
                this.AddEventParameter(ProcessDesignerActivatedParameters.errorCount, errorCount);
                this.AddEventParameter(ProcessDesignerActivatedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerActivatedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerActivatedEvent = ProcessDesignerActivatedEvent;
        var ProcessDesignerActivatedParameters = (function () {
            function ProcessDesignerActivatedParameters() {
            }
            ProcessDesignerActivatedParameters.processId = "ProcessId";
            ProcessDesignerActivatedParameters.sessionId = "SessionId";
            ProcessDesignerActivatedParameters.processType = "ProcessType";
            ProcessDesignerActivatedParameters.state = "State";
            ProcessDesignerActivatedParameters.errorDetails = "ErrorDetails";
            ProcessDesignerActivatedParameters.errorCount = "ErrorCount";
            ProcessDesignerActivatedParameters.timestamp = "Timestamp";
            return ProcessDesignerActivatedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerValidatedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerValidatedEventName = "ProcessDesignerValidated";
        var ProcessDesignerValidatedEvent = (function (_super) {
            __extends(ProcessDesignerValidatedEvent, _super);
            function ProcessDesignerValidatedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerValidatedEventName);
            }
            ProcessDesignerValidatedEvent.prototype.SetInfo = function (processId, sessionId, state, validatedAt, errorDetails, errorCount, ProcessType) {
                this.AddEventParameter(ProcessDesignerValidatedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerValidatedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerValidatedParameters.processType, ProcessType);
                this.AddEventParameter(ProcessDesignerValidatedParameters.state, state);
                this.AddEventParameter(ProcessDesignerValidatedParameters.validatedAt, validatedAt);
                this.AddEventParameter(ProcessDesignerValidatedParameters.errorDetails, errorDetails);
                this.AddEventParameter(ProcessDesignerValidatedParameters.errorCount, errorCount);
                this.AddEventParameter(ProcessDesignerValidatedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerValidatedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerValidatedEvent = ProcessDesignerValidatedEvent;
        var ProcessDesignerValidatedParameters = (function () {
            function ProcessDesignerValidatedParameters() {
            }
            ProcessDesignerValidatedParameters.processId = "ProcessId";
            ProcessDesignerValidatedParameters.sessionId = "SessionId";
            ProcessDesignerValidatedParameters.processType = "ProcessType";
            ProcessDesignerValidatedParameters.state = "State";
            ProcessDesignerValidatedParameters.validatedAt = "ValidatedAt";
            ProcessDesignerValidatedParameters.errorDetails = "ErrorDetails";
            ProcessDesignerValidatedParameters.errorCount = "ErrorCount";
            ProcessDesignerValidatedParameters.timestamp = "Timestamp";
            return ProcessDesignerValidatedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ProcessDesignerDeactivatedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ProcessDesignerDeactivatedEventName = "ProcessDesignerDeactivated";
        var ProcessDesigneDeactivatedEvent = (function (_super) {
            __extends(ProcessDesigneDeactivatedEvent, _super);
            function ProcessDesigneDeactivatedEvent() {
                _super.call(this, null, ProcessDesigner.ProcessDesignerDeactivatedEventName);
            }
            ProcessDesigneDeactivatedEvent.prototype.SetInfo = function (processId, sessionId, state) {
                this.AddEventParameter(ProcessDesignerDeactivatedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerDeactivatedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerDeactivatedParameters.state, state);
                this.AddEventParameter(ProcessDesignerDeactivatedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesigneDeactivatedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesigneDeactivatedEvent = ProcessDesigneDeactivatedEvent;
        var ProcessDesignerDeactivatedParameters = (function () {
            function ProcessDesignerDeactivatedParameters() {
            }
            ProcessDesignerDeactivatedParameters.processId = "ProcessId";
            ProcessDesignerDeactivatedParameters.sessionId = "SessionId";
            ProcessDesignerDeactivatedParameters.state = "State";
            ProcessDesignerDeactivatedParameters.timestamp = "Timestamp";
            return ProcessDesignerDeactivatedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ConnectOperationPerformedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ConnectOperationPerformedEventName = "ProcessDesignerTileConnected";
        var ConnectOperationPerformedEvent = (function (_super) {
            __extends(ConnectOperationPerformedEvent, _super);
            function ConnectOperationPerformedEvent() {
                _super.call(this, null, ProcessDesigner.ConnectOperationPerformedEventName);
            }
            ConnectOperationPerformedEvent.prototype.SetInfo = function (processId, sessionId, processType, state, sourceTileId, ifConditionTileId, destinationTileId) {
                this.AddEventParameter(ConnectOperationPerformedParameters.processId, processId);
                this.AddEventParameter(ConnectOperationPerformedParameters.sessionId, sessionId);
                this.AddEventParameter(ConnectOperationPerformedParameters.processType, processType);
                this.AddEventParameter(ConnectOperationPerformedParameters.state, state);
                this.AddEventParameter(ConnectOperationPerformedParameters.sourceTileId, sourceTileId);
                this.AddEventParameter(ConnectOperationPerformedParameters.ifConditionTileId, ifConditionTileId);
                this.AddEventParameter(ConnectOperationPerformedParameters.destinationTileId, destinationTileId);
                this.AddEventParameter(ConnectOperationPerformedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ConnectOperationPerformedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ConnectOperationPerformedEvent = ConnectOperationPerformedEvent;
        var ConnectOperationPerformedParameters = (function () {
            function ConnectOperationPerformedParameters() {
            }
            ConnectOperationPerformedParameters.processId = "ProcessId";
            ConnectOperationPerformedParameters.sessionId = "SessionId";
            ConnectOperationPerformedParameters.processType = "ProcessType";
            ConnectOperationPerformedParameters.state = "State";
            ConnectOperationPerformedParameters.sourceTileId = "SourceTileId";
            ConnectOperationPerformedParameters.ifConditionTileId = "IfConditionTileId";
            ConnectOperationPerformedParameters.destinationTileId = "DestinationTileId";
            ConnectOperationPerformedParameters.timestamp = "Timestamp";
            return ConnectOperationPerformedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="DisconnectOperationPerformedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.DisconnectOperationPerformedEventName = "ProcessDesignerTileDisconnected";
        var DisconnectOperationPerformedEvent = (function (_super) {
            __extends(DisconnectOperationPerformedEvent, _super);
            function DisconnectOperationPerformedEvent() {
                _super.call(this, null, ProcessDesigner.DisconnectOperationPerformedEventName);
            }
            DisconnectOperationPerformedEvent.prototype.SetInfo = function (processId, sessionId, processType, state, sourceTileId, ifConditionTileId, defaultPathTileId) {
                this.AddEventParameter(DisconnectOperationPerformedParameters.processId, processId);
                this.AddEventParameter(DisconnectOperationPerformedParameters.sessionId, sessionId);
                this.AddEventParameter(DisconnectOperationPerformedParameters.processType, processType);
                this.AddEventParameter(DisconnectOperationPerformedParameters.state, state);
                this.AddEventParameter(DisconnectOperationPerformedParameters.sourceTileId, sourceTileId);
                this.AddEventParameter(DisconnectOperationPerformedParameters.ifConditionTileId, ifConditionTileId);
                this.AddEventParameter(DisconnectOperationPerformedParameters.defaultPathTileId, defaultPathTileId);
                this.AddEventParameter(DisconnectOperationPerformedParameters.timestamp, Utility.GetTimeStamp());
            };
            return DisconnectOperationPerformedEvent;
        })(TelemetryEvent);
        ProcessDesigner.DisconnectOperationPerformedEvent = DisconnectOperationPerformedEvent;
        var DisconnectOperationPerformedParameters = (function () {
            function DisconnectOperationPerformedParameters() {
            }
            DisconnectOperationPerformedParameters.processId = "ProcessId";
            DisconnectOperationPerformedParameters.sessionId = "SessionId";
            DisconnectOperationPerformedParameters.processType = "ProcessType";
            DisconnectOperationPerformedParameters.state = "State";
            DisconnectOperationPerformedParameters.sourceTileId = "SourceTileId";
            DisconnectOperationPerformedParameters.ifConditionTileId = "IfConditionTileId";
            DisconnectOperationPerformedParameters.defaultPathTileId = "DefaultPathTileId";
            DisconnectOperationPerformedParameters.timestamp = "Timestamp";
            return DisconnectOperationPerformedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------
// <copyright file="ReconnectOperationPerformedEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var TelemetryEvent = _Microsoft.Client.Telemetry.TelemetryEvent;
        var Utility = _Microsoft.Client.Telemetry.Utility;
        ProcessDesigner.ReconnectOperationPerformedEventName = "ProcessDesignerTileReconnected";
        var ReconnectOperationPerformedEvent = (function (_super) {
            __extends(ReconnectOperationPerformedEvent, _super);
            function ReconnectOperationPerformedEvent() {
                _super.call(this, null, ProcessDesigner.ReconnectOperationPerformedEventName);
            }
            ReconnectOperationPerformedEvent.prototype.SetInfo = function (processId, sessionId, processType, state, sourceTileId, ifConditionTileId, oldDefaultPathTileId, newDefaultPathTileId) {
                this.AddEventParameter(ReconnectOperationPerformedParameters.processId, processId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.sessionId, sessionId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.processType, processType);
                this.AddEventParameter(ReconnectOperationPerformedParameters.state, state);
                this.AddEventParameter(ReconnectOperationPerformedParameters.sourceTileId, sourceTileId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.ifConditionTileId, ifConditionTileId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.oldDefaultPathTileId, oldDefaultPathTileId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.newDefaultPathTileId, newDefaultPathTileId);
                this.AddEventParameter(ReconnectOperationPerformedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ReconnectOperationPerformedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ReconnectOperationPerformedEvent = ReconnectOperationPerformedEvent;
        var ReconnectOperationPerformedParameters = (function () {
            function ReconnectOperationPerformedParameters() {
            }
            ReconnectOperationPerformedParameters.processId = "ProcessId";
            ReconnectOperationPerformedParameters.sessionId = "SessionId";
            ReconnectOperationPerformedParameters.processType = "ProcessType";
            ReconnectOperationPerformedParameters.state = "State";
            ReconnectOperationPerformedParameters.sourceTileId = "SourceTileId";
            ReconnectOperationPerformedParameters.ifConditionTileId = "IfConditionTileId";
            ReconnectOperationPerformedParameters.oldDefaultPathTileId = "OldDefaultPathTileId";
            ReconnectOperationPerformedParameters.newDefaultPathTileId = "NewDefaultPathTileId";
            ReconnectOperationPerformedParameters.timestamp = "Timestamp";
            return ReconnectOperationPerformedParameters;
        })();
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
