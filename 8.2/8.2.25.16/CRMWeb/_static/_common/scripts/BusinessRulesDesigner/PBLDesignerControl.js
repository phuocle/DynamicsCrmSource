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
        var Common;
        (function (Common) {
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
            })(Common.AttributeType || (Common.AttributeType = {}));
            var AttributeType = Common.AttributeType;
            (function (DateFormat) {
                DateFormat[DateFormat["DateTime"] = 0] = "DateTime";
                DateFormat[DateFormat["Date"] = 1] = "Date";
            })(Common.DateFormat || (Common.DateFormat = {}));
            var DateFormat = Common.DateFormat;
            var ActionOperators = (function () {
                function ActionOperators() {
                }
                ActionOperators.Value = "0";
                ActionOperators.Field = "1";
                ActionOperators.Formula = "2";
                ActionOperators.SetMessage = "3";
                ActionOperators.Visibility = "4";
                ActionOperators.FieldRequired = "5";
                ActionOperators.DisplayMode = "6";
                ActionOperators.Clear = "7";
                return ActionOperators;
            })();
            Common.ActionOperators = ActionOperators;
        })(Common = ProcessDesigner.Common || (ProcessDesigner.Common = {}));
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
                this.isTimeFormat24 = ProcessDesigner.Util.getBooleanValue(options, 'isTimeFormat24', false);
                this.dateFormat = ProcessDesigner.Util.getStringValue(options, 'dateFormat', 'm/d/yy');
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
                    if (ProcessDesigner.Util.isNull(str) || str.length == 0) {
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
                Level[Level["Unknown"] = -1] = "Unknown";
                Level[Level["Min"] = 0] = "Min";
                Level[Level["Change"] = 1] = "Change";
                Level[Level["Apply"] = 2] = "Apply";
                Level[Level["Save"] = 3] = "Save";
                Level[Level["SaveAs"] = 4] = "SaveAs";
                Level[Level["SaveAndClose"] = 5] = "SaveAndClose";
                Level[Level["Unload"] = 6] = "Unload";
                Level[Level["Validate"] = 7] = "Validate";
                Level[Level["Activate"] = 8] = "Activate";
                Level[Level["Deactivate"] = 9] = "Deactivate";
                Level[Level["Max"] = 9999] = "Max";
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
                ValidModel.prototype.isFromPropertyPage = function () {
                    return (Validation.Engine.Action == Validation.Level.Apply) || (Validation.Engine.Action == Validation.Level.Change);
                };
                ValidModel.prototype.validateOnAction = function (action) {
                    var bRet = true;
                    Validation.Engine.setAction(action);
                    if (ProcessDesigner.ValidatePBL.shouldValidate()) {
                        bRet = this.validateActivity();
                        if (this.isFromPropertyPage()) {
                            Validation.Errors.updateTileErrorStatus((action == Validation.Level.Apply));
                        }
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
// -----------------------------------------------------------------------
// <copyright file="MetadataProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        "use strict";
        var MetadataProvider = (function () {
            function MetadataProvider() {
            }
            MetadataProvider.getEntityMetadata = function (success, failure) {
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getEntityListMetadata(function (entityMetadataList) {
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
            MetadataProvider.getAttributeMetadata = function (entityLogicalName, success, failure) {
                if (entityLogicalName == "") {
                    return [];
                }
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributesList) {
                    if (entityLogicalName == "") {
                        return [];
                    }
                    if (attributesList == null || attributesList == undefined) {
                        console.log("Error:attributesList is null File:MetadataProvider.ts Method:getAttributeMetadata()");
                        return;
                    }
                    var attributeMetadataJson = [];
                    for (var i = 0; i < attributesList.length; i++) {
                        var attributeData = attributesList[i];
                        var logicalName = attributeData.LogicalName;
                        var displayName = attributeData.Label.Description;
                        var attributeType = attributeData.Type;
                        var attributeFormat = attributeData.AdditionalMetadata.Format;
                        var maxLength = attributeData.AdditionalMetadata.MaxLength;
                        var maxValue = attributeData.AdditionalMetadata.MaxValue;
                        var minValue = attributeData.AdditionalMetadata.MinValue;
                        var precision = attributeData.AdditionalMetadata.Precision;
                        var sourceType = attributeData.AdditionalMetadata.SourceType;
                        if (displayName) {
                            if (attributeType === AttributeType.DateTime) {
                                attributeMetadataJson.push({
                                    logicalName: logicalName,
                                    displayName: displayName,
                                    attributeType: attributeType,
                                    dateFormat: attributeFormat,
                                    sourceType: sourceType
                                });
                            }
                            else if (attributeType === AttributeType.Lookup || attributeType === AttributeType.Owner || attributeType === AttributeType.Customer) {
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
                                    sourceType: sourceType,
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
                                    precision: precision,
                                    sourceType: sourceType
                                });
                            }
                        }
                    }
                    attributeMetadataJson = attributeMetadataJson.sort(function (a, b) { return (a.displayName.toLowerCase() < b.displayName.toLowerCase() ? -1 : 1); });
                    success(attributeMetadataJson);
                }, failure);
            };
            MetadataProvider.getOperators = function (entityLogicalName, attributeLogicalName, success, fail) {
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributesList) {
                    var attributeType = MetadataProvider.getAttributeType(attributesList, attributeLogicalName);
                    var operatorList = MetadataProvider.getOperatorList(attributeType);
                    success(operatorList);
                }, fail);
            };
            MetadataProvider.isFormulaValid = function (entityLogicalName, attributeLogicalName, success, fail) {
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getAttributeListMetadata(entityLogicalName, function (attributesList) {
                    var attributeType = MetadataProvider.getAttributeType(attributesList, attributeLogicalName);
                    success(MetadataProvider.isFormulaValidForAttributeType(attributeType));
                }, fail);
            };
            MetadataProvider.isFormulaValidForAttributeType = function (attributeType) {
                var isFormulaValid = false;
                switch (attributeType) {
                    case AttributeType.Double:
                    case AttributeType.Integer:
                    case AttributeType.BigInt:
                    case AttributeType.Decimal:
                    case AttributeType.DateTime:
                    case AttributeType.Money:
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
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getAttributePickListMetadata(entityLogicalName, attributeLogicalNames, function (optionSetList) {
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
                    console.log("Error:attributesList is null File:MetadataProvider.ts Method:getAttributeMetadata()");
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
                    case AttributeType.Boolean:
                        operatorList = [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                            { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 }
                        ];
                        break;
                    case AttributeType.String:
                    case AttributeType.Lookup:
                    case AttributeType.Owner:
                    case AttributeType.Customer:
                    case AttributeType.State:
                    case AttributeType.Status:
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
                    case AttributeType.Picklist:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_Equal"), value: 6 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_NotEqual"), value: 7 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 }
                            ];
                        break;
                    case AttributeType.Money:
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
                    case AttributeType.DateTime:
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
                    case AttributeType.Integer:
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
                    case AttributeType.BigInt:
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
                    case AttributeType.Decimal:
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
                    case AttributeType.Double:
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
                    case AttributeType.UniqueIdentifier:
                        operatorList =
                            [{ name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_ContainsData"), value: 1 },
                                { name: MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionOperator_DoesNotContainData"), value: 0 }
                            ];
                        break;
                }
                return operatorList;
            };
            MetadataProvider.getRelationshipMetadata = function (entityLogicalName, success, failure) {
                ProcessDesigner.PBLDesignerControl.dataBag.resources.getRelationshipMetadata(entityLogicalName, function (relationshipMetadataList) {
                    var relationshipMetadataJson = [];
                    for (var relationshipMetadata in relationshipMetadataList) {
                        relationshipMetadataJson.push({
                            logicalName: relationshipMetadataList[relationshipMetadata],
                            displayName: relationshipMetadataList[relationshipMetadata],
                        });
                    }
                    relationshipMetadataJson = relationshipMetadataJson.sort(function (a, b) { return (a.displayName < b.displayName ? -1 : 1); });
                    success(relationshipMetadataJson);
                }, failure);
            };
            MetadataProvider.getLocalizedString = function (inputString) {
                return ProcessDesigner.PBLDesignerControl.dataBag.resources.getString(inputString);
            };
            MetadataProvider.getLoadedRelationshipEntityMetadata = function () {
                return ProcessDesigner.PBLDesignerControl.dataBag.resources.getLoadedRelationshipEntityMetadata();
            };
            MetadataProvider.unaryOperatorList = [];
            return MetadataProvider;
        })();
        ProcessDesigner.MetadataProvider = MetadataProvider;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="MetadataProxy.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Proxy to MetadataProvider
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="../Utility/MetadataProvider.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var MetadataProvider = MscrmControls.ProcessDesigner.MetadataProvider;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var MetadataProxy = (function () {
            function MetadataProxy(options) {
                MetadataProxy.PicklistMap = null;
                MetadataProxy.SourceAttributesMap = null;
                MetadataProxy.SourceValueToEntityMap = null;
                MetadataProxy.NumericAttributesMap = null;
            }
            MetadataProxy.getAttributeList = function (entityLogicalName, relationshipName) {
                var promise = null;
                if (MetadataProxy.SourceAttributesMap == null || MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                    promise = $.Deferred(function (d) {
                        MetadataProvider.getAttributeMetadata(entityLogicalName, d.resolve, d.reject);
                    }).promise();
                    promise.done(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap == null) {
                            MetadataProxy.SourceAttributesMap = {};
                            MetadataProxy.NumericAttributesMap = {};
                        }
                        attributeList.forEach(function (value) {
                            if (MetadataProxy.SourceAttributesMap[entityLogicalName] == null) {
                                MetadataProxy.SourceAttributesMap[entityLogicalName] = {};
                                MetadataProxy.NumericAttributesMap[entityLogicalName] = {};
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
                            MetadataProxy.SourceAttributesMap[entityLogicalName][value.logicalName] = value;
                            MetadataProxy.NumericAttributesMap[entityLogicalName][value.logicalName] = value;
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
            MetadataProxy.getSourcesList = function () {
                var sourcesList = MetadataProvider.getLoadedRelationshipEntityMetadata().slice(0, MetadataProvider.getLoadedRelationshipEntityMetadata().length);
                if (MetadataProxy.SourceValueToEntityMap == null) {
                    MetadataProxy.SourceValueToEntityMap = {};
                    MetadataProxy.SourceValueToEntityMap[MscrmControls.ProcessDesigner.ControlManager.primaryEntityName] = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
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
                if (MetadataProxy.PicklistMap == null || !MetadataProxy.PicklistMap[attributeLogicalName]) {
                    promise = $.Deferred(function (d) {
                        MetadataProvider.getPickListValues(entityLogicalName, [attributeLogicalName], d.resolve, d.reject);
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
            MetadataProxy.getOperatorList = function (typeName) {
                return MetadataProvider.getOperatorList(AttributeType[typeName]);
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
                return MetadataProvider.getLocalizedString(inputString);
            };
            MetadataProxy.isUnaryOperator = function (operatorName) {
                return MetadataProvider.isUnaryOperator(operatorName);
            };
            MetadataProxy.isFormulaValidForAttributeType = function (attributeType) {
                return MetadataProvider.isFormulaValidForAttributeType(attributeType);
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
            MetadataProxy.isTextField = function (attributeName, entityLogicalName, operatorNumber) {
                var attributeType = MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName].attributeType;
                switch (attributeType) {
                    case AttributeType.Picklist:
                    case AttributeType.State:
                    case AttributeType.Status:
                    case AttributeType.Lookup:
                    case AttributeType.Owner:
                    case AttributeType.Customer:
                        switch (operatorNumber) {
                            case ProcessDesigner.ConditionOperator.Contains:
                            case ProcessDesigner.ConditionOperator.DoesNotContain:
                            case ProcessDesigner.ConditionOperator.BeginsWith:
                            case ProcessDesigner.ConditionOperator.DoesNotBeginWith:
                            case ProcessDesigner.ConditionOperator.EndsWith:
                            case ProcessDesigner.ConditionOperator.DoesNotEndWith:
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
            MetadataProxy.isNumericField = function (attributeName, entityLogicalName) {
                if (typeof MetadataProxy.SourceAttributesMap[entityLogicalName] == "undefined" ||
                    typeof MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName] == "undefined")
                    return false;
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
            MetadataProxy.isEnumeratedField = function (attributeName, entityLogicalName) {
                if (typeof MetadataProxy.SourceAttributesMap[entityLogicalName] == "undefined" ||
                    typeof MetadataProxy.SourceAttributesMap[entityLogicalName][attributeName] == "undefined")
                    return false;
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
                if (MetadataProxy.SourceAttributesMap) {
                    if (MetadataProxy.SourceAttributesMap[entityLogicalName][attributeLogicalName]) {
                        return MetadataProxy.SourceAttributesMap[entityLogicalName][attributeLogicalName].attributeType;
                    }
                }
                else {
                }
                return AttributeType.Unknown;
            };
            MetadataProxy.dispose = function () {
                MetadataProxy.PicklistMap = [];
                MetadataProxy.SourceAttributesMap = {};
            };
            MetadataProxy.getDisplayFieldName = function (entityName) {
                var displayFieldName = "name";
                switch (entityName) {
                    case "contact":
                    case "systemuser":
                        displayFieldName = "fullname";
                        break;
                    case "transactioncurrency":
                        displayFieldName = "currencyname";
                        break;
                }
                return displayFieldName;
            };
            MetadataProxy.isUniversalStringOperator = function (operator) {
                return (this.UniversalStringOperators.indexOf(operator) > -1);
            };
            MetadataProxy.UniversalStringOperators = [ProcessDesigner.ConditionOperator.Contains, ProcessDesigner.ConditionOperator.DoesNotContain, ProcessDesigner.ConditionOperator.BeginsWith, ProcessDesigner.ConditionOperator.DoesNotBeginWith, ProcessDesigner.ConditionOperator.EndsWith, ProcessDesigner.ConditionOperator.DoesNotEndWith];
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
                    var elem1 = elem;
                    if (elem.hasClass("action-prop-lookup-header")) {
                        elem1 = elem.find("input:first");
                    }
                    elem1.css({ "border-width": "", "border-style": "", "border-color": "" });
                    elem.removeClass('.' + errorElementClass);
                    var marginBottom = elem1.attr('data-margin-bottom');
                    if (marginBottom) {
                        elem1.css('margin-bottom', marginBottom);
                        elem1.removeAttr('data-margin-bottom');
                    }
                    else {
                        elem1.removeAttr('margin-bottom');
                    }
                }
            };
            DOMUtil._renderErrorMessages = function (model, el, labelClass, errorElementClass, errors) {
                var iFields = DOMUtil.getIgnoredFields(model);
                for (var id in errors) {
                    if (iFields.indexOf(id) == -1) {
                        var error = errors[id];
                        var elem = el.find(id);
                        var elem1 = elem;
                        if (elem.hasClass("action-prop-lookup-header")) {
                            elem1 = elem.find("input:first");
                        }
                        if (elem && error && elem1) {
                            if (errorElementClass != 'errorElementGlobal') {
                                elem1.css({ "border-width": "1px", "border-style": "solid", "border-color": "red" });
                            }
                            elem.addClass(errorElementClass);
                            var marginBottom = elem1.css('margin-bottom');
                            elem1.css('margin-bottom', '0px');
                            if (marginBottom && marginBottom.length > 0) {
                                elem1.attr('data-margin-bottom', marginBottom);
                                marginBottom = 'margin-bottom:' + marginBottom + ';';
                            }
                            else {
                                marginBottom = 'margin-bottom: 15px;';
                            }
                            if (errorElementClass == 'errorElementGlobal') {
                                elem.html("<label class='" + labelClass + "' style='color:red;" + marginBottom + "'>" + error + "</label>");
                                $("#propertyTab").parent("li").attr("title", error);
                            }
                            else {
                                var labelId = Utility.newGuid();
                                elem.after("<label id='" + labelId + "' class='" + labelClass + "' role='label' style='color:red;" + marginBottom + "' title=\"" + error + "\" >" + error + "</label>");
                                $(elem).attr("aria-describedby", labelId);
                            }
                        }
                    }
                }
                DOMUtil.clearIgnoredFields(model);
            };
            DOMUtil.renderErrorMessages = function (model, el, errors) {
                DOMUtil.removeErrorMessages(el, 'errorLabel', 'errorElement');
                if (ProcessDesigner.ValidatePBL.ValidationMode)
                    DOMUtil._renderErrorMessages(model, el, 'errorLabel', 'errorElement', errors);
            };
            DOMUtil.renderPropertyPageLevelErrorMessages = function (model, el, errors) {
                DOMUtil.removeErrorMessages(el, 'errorLabelGlobal', 'errorElementGlobal');
                if (ProcessDesigner.ValidatePBL.ValidationMode)
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
            var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
            var Result = MscrmControls.ProcessDesigner.Validation.Result;
            var Util = MscrmControls.ProcessDesigner.Util;
            var MetaDataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
            var MetadataProvider = MscrmControls.ProcessDesigner.MetadataProvider;
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
                    var message = MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Length_Exceeded");
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
                    var message = MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage");
                    return BaseRule.createResult(bRes, message);
                };
                return Required;
            })(BaseRule);
            Validation.Required = Required;
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
                Errors.updateNotifications = function () {
                    var summaryMessage;
                    var message;
                    var errorCount = Errors.errorCount;
                    errorCount += GenericWorkflowDesigner.Settings.notification.GetNotifictionCount();
                    if (Errors.errorCount > 0) {
                        message = CommonTypes.Types.String.Format(MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_ErrorMessage"), errorCount);
                        summaryMessage = new GenericWorkflowDesigner.NotificationMessage(GenericWorkflowDesigner.MessageType.Error, message);
                    }
                    else {
                        message = MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateBPF_Message");
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
                    if (ProcessDesigner.ValidatePBL.isValidationModeOn()) {
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
                        if (ProcessDesigner.ValidatePBL.isValidationModeOn()) {
                            var allActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                            if (allActivities.indexOf(propertyViewCurrentModel) > -1) {
                                var errorTile = propertyViewCurrentModel.getErrorTile();
                                Errors._updateTileErrorStatus(errorTile);
                            }
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
                Engine.setAction = function (_action) {
                    var action;
                    if (typeof _action == "string") {
                        action = Validation.Level[_action];
                        if (CommonTypes.Types.Object.isNullOrUndefined(action)) {
                            action = Validation.Level.Max;
                        }
                    }
                    else {
                        action = _action;
                    }
                    if (Engine._action === Validation.Level.Max || action === Validation.Level.Max) {
                        Engine._action = action;
                    }
                    if (action >= Validation.Level.Save && Validation.Engine.Action != Validation.Level.Unload) {
                        var buttonOn = $('#validateButtonOn');
                        buttonOn.addClass('validateButtonOff');
                        buttonOn.attr("title", MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateMode_On"));
                        ProcessDesigner.ValidatePBL.ValidationMode = true;
                        ProcessDesigner.PBLDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
                    }
                };
                Engine.resetAction = function () {
                    Engine._action = Validation.Level.Max;
                };
                Engine.isDefaultAction = function () {
                    return Engine._action == Validation.Level.Max;
                };
                Object.defineProperty(Engine, "Action", {
                    get: function () {
                        return Engine._action ? Engine._action : Validation.Level.Max;
                    },
                    enumerable: true,
                    configurable: true
                });
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
                    return level_ <= Engine.Action;
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
                            if (!CommonTypes.Types.Object.isNullOrUndefined(value) &&
                                !CommonTypes.Types.Object.isNullOrUndefined(value.lookup)) {
                                res = Engine.applyRule(value.lookup.value, Required.apply, level_, null, options);
                            }
                            else {
                                res = Engine.applyRule(value, Required.apply, level_, null, options);
                            }
                            result.addResult(res);
                            break;
                        case AttributeType.DateTime:
                            res = Engine.applyRule(value, Required.apply, level_, null, options);
                            if (!res.isValid) {
                                var dtUtil = new ProcessDesigner.DateTimeUtil();
                                var dt = dtUtil.strToDateTime(value);
                                if (dt.errors.date || dt.errors.time) {
                                    var message = window['String'].format(MetadataProvider.getLocalizedString("LOCID_ALERT_ENTER_VALID_DATE"), window['USER_DATE_FORMATSTRING']);
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
                                var message = MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Float_Range");
                                if (attributeType == AttributeType.Integer) {
                                    message = MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Int_Range");
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
                Engine.validateAttributeValue = function (fieldName, val, attributeName, entityLogicalName, level_) {
                    var result = new Result(fieldName);
                    if (Engine.isAllowedLevel(level_)) {
                        var attributeType = AttributeType.Unknown;
                        if (attributeName) {
                            attributeType = MetaDataProxy.getAttributeType(attributeName, entityLogicalName);
                        }
                        var options = {};
                        if (attributeType != AttributeType.Unknown) {
                            options = MetaDataProxy.SourceAttributesMap[entityLogicalName][attributeName];
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
                Engine._action = Validation.Level.Max;
                Engine.GlobalMessageID = "___GLOBAL___";
                return Engine;
            })();
            Validation.Engine = Engine;
            window["designerSetAction"] = Validation.Engine.setAction;
        })(Validation = ProcessDesigner.Validation || (ProcessDesigner.Validation = {}));
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
/// <reference path="../../../../libs/WorkflowObjectModel_pbl.d.ts"/>
/// <reference path="../../../Common/IValid.ts" />
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
                var addModeName = ProcessDesigner.TelemetryEventReporter.GetAddModeNameForActivity(ProcessDesigner.PBLToolBarView.addMode);
                switch (activity.getActivityTypeID()) {
                    case ProcessDesigner.BPFActivityType.condition:
                        var self = activity;
                        var parentActivity = activity.getParent();
                        if (parentActivity) {
                            if (parentActivity.getActivityTypeID() == ProcessDesigner.BPFActivityType.stage) {
                                self.parentStageEntityName = parentActivity.entityName;
                            }
                            else if (parentActivity.getActivityTypeID() == ProcessDesigner.BPFActivityType.condition) {
                                self.parentStageEntityName = parentActivity.parentStageEntityName;
                            }
                        }
                        ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, "", ProcessDesigner.BPFActivityType.condition, "");
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
            ProcessActivityDefinitionModel.prototype.initializeFromProcessStep = function () {
                this.setActivityID(this._processStep.get_Id());
                this.setWorkflowID(this._processStep.get_workflow().get_Id());
            };
            ProcessActivityDefinitionModel.prototype.getAllowedDependentActivityTypes = function (slotType) {
                var _this = this;
                var activtyTypes = [ProcessDesigner.PblActivityType.setAttributeValueStep, ProcessDesigner.PblActivityType.condition, ProcessDesigner.PblActivityType.setDefaultValueStep, ProcessDesigner.PblActivityType.setDisplayModeStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setMessageStep, ProcessDesigner.PblActivityType.setVisibilityStep, ProcessDesigner.PblActivityType.setSuggestionStep, ProcessDesigner.PblActivityType.customJavascriptStep];
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
                    var stepId = children[i].id;
                    if (children[i].errCount > 0) {
                        $("#" + stepId).find(".subViewTileError").css("visibility", "visible");
                    }
                    else {
                        $("#" + stepId).find(".subViewTileError").css("visibility", "hidden");
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
                if (this.showNotifications && !this.isFromPropertyPage()) {
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
                if (this.cid == propertyViewCurrentModel.cid && this.isFromPropertyPage() && this.propertyPageModel) {
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
                return (Validation.Engine.Action == Validation.Level.Apply) || (Validation.Engine.Action == Validation.Level.Change);
            };
            ProcessActivityDefinitionModel.prototype.validateOnAction = function (action) {
                var bRet = true;
                Validation.Engine.setAction(action);
                if (ProcessDesigner.ValidatePBL.shouldValidate()) {
                    bRet = this.validateActivity();
                    if (this.isFromPropertyPage()) {
                        Validation.Errors.updateTileErrorStatus((action == Validation.Level.Apply));
                    }
                }
                Validation.Engine.resetAction();
                return bRet;
            };
            ProcessActivityDefinitionModel.prototype.validateActivity = function () {
                this.clearErrorMessages();
                if (ProcessDesigner.ValidatePBL.shouldValidate()) {
                    var status = this._validateActivity();
                    if (!status) {
                        this.addNotifications();
                    }
                    this.isValid = status;
                }
                return this.isValid;
            };
            ProcessActivityDefinitionModel.prototype._validateActivity = function () {
                throw new Error("Method not implemented");
            };
            ProcessActivityDefinitionModel.PropertyTreeHeight = "TreeHeight";
            ProcessActivityDefinitionModel.PropertyTreeWidth = "TreeWidth";
            return ProcessActivityDefinitionModel;
        })(GenericWorkflowDesigner.ActivityDefinitionModel);
        ProcessDesigner.ProcessActivityDefinitionModel = ProcessActivityDefinitionModel;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessActivityPositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
/// <reference path="../Model/ProcessActivityDefinitionModel.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessActivityPositionCalculator = (function (_super) {
            __extends(ProcessActivityPositionCalculator, _super);
            function ProcessActivityPositionCalculator() {
                _super.apply(this, arguments);
            }
            ProcessActivityPositionCalculator.prototype.calculate = function (activityModel, row, column) {
                _super.prototype.calculate.call(this, activityModel, row, column);
                ProcessActivityPositionCalculator.setActivityHeight(activityModel);
            };
            ProcessActivityPositionCalculator.setActivityHeight = function (activityModel) {
                var maxHeight = 0;
                var childActivities = activityModel.getChildActivitiesSorted();
                if (childActivities != null && childActivities.length > 0) {
                    for (var i = 0; i < childActivities.length; ++i) {
                        var child = childActivities[i];
                        var currentHeight = child.get(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight);
                        maxHeight = Math.max(currentHeight, maxHeight);
                    }
                }
                activityModel.set(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight, maxHeight + 1);
            };
            return ProcessActivityPositionCalculator;
        })(GenericWorkflowDesigner.DefaultActivityPositionCalculator);
        ProcessDesigner.ProcessActivityPositionCalculator = ProcessActivityPositionCalculator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BranchActivityPositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
/// <reference path="../Model/ProcessActivityDefinitionModel.ts"/>
/// <reference path="ProcessActivityPositionCalculator.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Point = GenericWorkflowDesigner.Point;
        var BranchActivityPositionCalculator = (function (_super) {
            __extends(BranchActivityPositionCalculator, _super);
            function BranchActivityPositionCalculator() {
                _super.apply(this, arguments);
            }
            BranchActivityPositionCalculator.prototype.getLineConnectors = function (parentActivity, childActivity) {
                if (!this.isDefaultBranch(parentActivity, childActivity)) {
                    return GenericWorkflowDesigner.Settings.lineConnectorProviderFactory.getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
                }
                return this.getDefaultBranchLineConnectors(parentActivity, childActivity);
            };
            BranchActivityPositionCalculator.prototype.getDefaultBranchLineConnectors = function (parentActivity, childActivity) {
                var lines = [];
                if (!(parentActivity instanceof ProcessDesigner.BranchActivity)) {
                    return lines;
                }
                var branchActivity = parentActivity;
                var parents = branchActivity.getDefaultBranchActivityParentsForLineConnections();
                for (var i = 0; i < parents.length; ++i) {
                    var leaf = parents[i];
                    if (leaf === childActivity) {
                        continue;
                    }
                    var calculator = GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory.getCalculator(leaf.getActivityTypeID());
                    if (leaf instanceof ProcessDesigner.BranchActivity) {
                        var polylineCalculator = calculator;
                        var connections = polylineCalculator.getPolylineConnectors(leaf, childActivity);
                        lines = lines.concat(connections);
                    }
                    else {
                        var connections = calculator.getLineConnectors(leaf, childActivity);
                        lines = lines.concat(connections);
                    }
                }
                return lines;
            };
            BranchActivityPositionCalculator.prototype.isDefaultBranch = function (parentActivity, childActivity) {
                if (parentActivity instanceof ProcessDesigner.BranchActivity) {
                    return parentActivity.defaultBranch === childActivity;
                }
                return true;
            };
            BranchActivityPositionCalculator.prototype.getPolylineConnectors = function (parentActivity, childActivity) {
                var fromCol = parentActivity.getCol();
                var fromRow = parentActivity.getRow();
                var toCol = childActivity.getCol();
                var toRow = childActivity.getRow();
                if (fromCol + 1 === toCol) {
                    return GenericWorkflowDesigner.Settings.lineConnectorProviderFactory.getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
                }
                var layoutProperties = GenericWorkflowDesigner.Settings.layoutProperties;
                var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(layoutProperties);
                var startPoint = new Point(positionCalculator.computeLeft(fromCol), positionCalculator.computeTop(fromRow));
                var endPoint = new Point(positionCalculator.computeLeft(toCol), positionCalculator.computeTop(toRow));
                var treeWidth = parentActivity.get(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeWidth);
                var midPoint = new Point(positionCalculator.computeLeft(fromCol + 1), positionCalculator.computeTop(fromRow + treeWidth));
                var result = [];
                var connectors = GenericWorkflowDesigner.Settings.graphics.createConnectorDOM(startPoint, midPoint, "line", childActivity.getParentBranchID());
                result = result.concat(connectors);
                var newMidX = midPoint.getX() - layoutProperties.getWidth();
                midPoint.setX(newMidX);
                connectors = GenericWorkflowDesigner.Settings.graphics.createConnectorDOM(midPoint, endPoint, "line", childActivity.getParentBranchID());
                result = result.concat(connectors);
                return result;
            };
            return BranchActivityPositionCalculator;
        })(ProcessDesigner.ProcessActivityPositionCalculator);
        ProcessDesigner.BranchActivityPositionCalculator = BranchActivityPositionCalculator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ConditionActivityBranches.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ConditionActivityBranches = (function () {
            function ConditionActivityBranches() {
            }
            return ConditionActivityBranches;
        })();
        ProcessDesigner.ConditionActivityBranches = ConditionActivityBranches;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BranchActivityPositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="BranchActivityPositionCalculator.ts"/>
/// <reference path="ConditionActivityBranches.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var DefaultActivityPositionCalculator = GenericWorkflowDesigner.DefaultActivityPositionCalculator;
        var ProcessConditionActivityPositionCalculator = (function (_super) {
            __extends(ProcessConditionActivityPositionCalculator, _super);
            function ProcessConditionActivityPositionCalculator() {
                _super.apply(this, arguments);
            }
            ProcessConditionActivityPositionCalculator.prototype.calculate = function (activityModel, row, col) {
                activityModel.setRow(row);
                activityModel.setCol(col);
                var branches = this.getConditionBranchActivities(activityModel);
                var maxHeight = 0;
                var newCol = col;
                var step = 1;
                var calculatorFactory = GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory;
                if (branches.yesBranch != null) {
                    var calculator = calculatorFactory.getCalculator(branches.yesBranch.getActivityTypeID());
                    calculator.calculate(branches.yesBranch, row, newCol + 1);
                    var currentHeight = branches.yesBranch.get(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight);
                    if (currentHeight > maxHeight) {
                        maxHeight = currentHeight;
                    }
                }
                DefaultActivityPositionCalculator.maxRow += step;
                if (branches.noBranch != null) {
                    var calculator = calculatorFactory.getCalculator(branches.noBranch.getActivityTypeID());
                    calculator.calculate(branches.noBranch, DefaultActivityPositionCalculator.maxRow, newCol + 1);
                    var currentHeight = branches.noBranch.get(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight);
                    if (currentHeight > maxHeight) {
                        maxHeight = currentHeight;
                    }
                }
                activityModel.set(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeWidth, DefaultActivityPositionCalculator.maxRow - row);
                if (branches.defaultBranch != null) {
                    var maxConditionRow = DefaultActivityPositionCalculator.maxRow;
                    DefaultActivityPositionCalculator.maxRow = row;
                    newCol = col + maxHeight + 1;
                    var calculator = calculatorFactory.getCalculator(branches.defaultBranch.getActivityTypeID());
                    calculator.calculate(branches.defaultBranch, DefaultActivityPositionCalculator.maxRow, newCol);
                    maxHeight += branches.defaultBranch.get(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight);
                    if (maxConditionRow > DefaultActivityPositionCalculator.maxRow) {
                        DefaultActivityPositionCalculator.maxRow = maxConditionRow;
                    }
                }
                activityModel.set(ProcessDesigner.ProcessActivityDefinitionModel.PropertyTreeHeight, maxHeight + 1);
            };
            ProcessConditionActivityPositionCalculator.prototype.getPolylineConnectors = function (parentActivity, childActivity) {
                var branches = this.getConditionBranchActivities(parentActivity);
                if (branches.yesBranch == null) {
                    var calculator = new ProcessDesigner.ProcessActivityPositionCalculator();
                    return calculator.getLineConnectors(parentActivity, childActivity);
                }
                return _super.prototype.getPolylineConnectors.call(this, parentActivity, childActivity);
            };
            ProcessConditionActivityPositionCalculator.prototype.getConditionBranchActivities = function (parentActivity) {
                var branches = new ProcessDesigner.ConditionActivityBranches();
                var childActivities = parentActivity.getChildActivitiesSorted();
                if (childActivities == null) {
                    return branches;
                }
                for (var i = 0; i < childActivities.length; ++i) {
                    var activity = childActivities[i];
                    switch (activity.getParentBranchID()) {
                        case ProcessDesigner.DefaultBranchIndices.DefaultBranch:
                            branches.defaultBranch = activity;
                            break;
                        case ProcessDesigner.DefaultBranchIndices.YesBranch:
                            branches.yesBranch = activity;
                            break;
                        case ProcessDesigner.DefaultBranchIndices.NoBranch:
                            branches.noBranch = activity;
                            break;
                    }
                }
                return branches;
            };
            return ProcessConditionActivityPositionCalculator;
        })(ProcessDesigner.BranchActivityPositionCalculator);
        ProcessDesigner.ProcessConditionActivityPositionCalculator = ProcessConditionActivityPositionCalculator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessActivityPositionCalculatorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
/// <reference path="BranchActivityPositionCalculator.ts"/>'
/// <reference path="ProcessConditionActivityPositionCalculator.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessActivityPositionCalculatorFactory = (function (_super) {
            __extends(ProcessActivityPositionCalculatorFactory, _super);
            function ProcessActivityPositionCalculatorFactory() {
                _super.apply(this, arguments);
            }
            ProcessActivityPositionCalculatorFactory.prototype.initializeCalculator = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.ProcessActivityType.Condition:
                        return new ProcessDesigner.ProcessConditionActivityPositionCalculator();
                    default:
                        return new ProcessDesigner.ProcessActivityPositionCalculator();
                }
            };
            return ProcessActivityPositionCalculatorFactory;
        })(GenericWorkflowDesigner.DefaultActivityPositionCalculatorFactory);
        ProcessDesigner.ProcessActivityPositionCalculatorFactory = ProcessActivityPositionCalculatorFactory;
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
        var BPFActivityType = (function () {
            function BPFActivityType() {
            }
            BPFActivityType.root = "bpf_root";
            BPFActivityType.stage = "stage";
            BPFActivityType.condition = "condition";
            BPFActivityType.step = "step";
            return BPFActivityType;
        })();
        ProcessDesigner.BPFActivityType = BPFActivityType;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFActivityPositionCalculatorFactory.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the BPFActivityPositionCalculatorFactory Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
/// <reference path="../../process/common/processactivitypositioncalculatorfactory.ts" />
/// <reference path="../../process/common/processactivitytype.ts" />
/// <reference path="bpfactivitytype.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFActivityPositionCalculatorFactory = (function (_super) {
            __extends(BPFActivityPositionCalculatorFactory, _super);
            function BPFActivityPositionCalculatorFactory() {
                _super.apply(this, arguments);
            }
            BPFActivityPositionCalculatorFactory.prototype.initializeCalculator = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.BPFActivityType.condition:
                        return new ProcessDesigner.ProcessConditionActivityPositionCalculator();
                    default:
                        return _super.prototype.initializeCalculator.call(this, activityType);
                }
            };
            return BPFActivityPositionCalculatorFactory;
        })(ProcessDesigner.ProcessActivityPositionCalculatorFactory);
        ProcessDesigner.BPFActivityPositionCalculatorFactory = BPFActivityPositionCalculatorFactory;
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
            BPFCssClass.rootTile = "bpf_rootTile";
            BPFCssClass.stageTile = "stageTile";
            BPFCssClass.scrollableStage = "wf_scrollable_filled_group_stage";
            return BPFCssClass;
        })();
        ProcessDesigner.BPFCssClass = BPFCssClass;
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
            return ControlStepJson;
        })();
        ProcessDesigner.ControlStepJson = ControlStepJson;
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
// -----------------------------------------------------------------------
// <copyright file="IProcessActivityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../libs/WorkflowObjectModel_pbl.d.ts"/>
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
/// <reference path="../../../process/model/iprocessactivitydefinitionmodel.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var BPFActivityDefinitionFactory = (function (_super) {
            __extends(BPFActivityDefinitionFactory, _super);
            function BPFActivityDefinitionFactory() {
                _super.apply(this, arguments);
            }
            BPFActivityDefinitionFactory.prototype.createActivity = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.BPFActivityType.stage:
                        return new ProcessDesigner.BPFStageActivity();
                    case ProcessDesigner.BPFActivityType.root:
                        return new ProcessDesigner.BPFRootActivity();
                    case ProcessDesigner.BPFActivityType.condition:
                        return new ProcessDesigner.BPFConditionActivity();
                    case ProcessDesigner.BPFActivityType.step:
                        return new ProcessDesigner.BPFStepActivity();
                    default:
                        return _super.prototype.createActivity.call(this, activityType);
                }
            };
            return BPFActivityDefinitionFactory;
        })(ProcessDesigner.ProcessActivityDefinitionFactory);
        ProcessDesigner.BPFActivityDefinitionFactory = BPFActivityDefinitionFactory;
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
                this.activityDefinitionFactory = new ProcessDesigner.PblActivityDefinitionFactory();
                this.collection = new ProcessDesigner.PBLActivityDefinitionCollection();
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
                    if (conditionBranchStep.get_conditionExpression() == null) {
                        var emptyConditionExpression = [];
                        conditionBranchStep.set_conditionExpression(emptyConditionExpression);
                    }
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
                ProcessDesigner.processStep = workflowStep;
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
                    if (this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setAttributeValueStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setDefaultValueStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setDisplayModeStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setFieldRequiredLevelStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setMessageStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.setVisibilityStep ||
                        this.currentParent.getActivityTypeID() == ProcessDesigner.PblActivityType.customJavascriptStep) {
                        activity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.YesBranch);
                    }
                    else {
                        activity.setParentBranchID(this.currentParentBranchId);
                    }
                }
                activity.processStep = step;
                if (activityType != ProcessDesigner.ProcessActivityType.Root)
                    this.collection.add(activity);
                return activity;
            };
            ProcessToActivityCollectionVisitor.prototype.visitSuggestionStep = function (setSuggestionStep) { };
            ProcessToActivityCollectionVisitor.prototype.visitAcceptConditionStep = function (acceptConditionStep) { };
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
/// <reference path="../../../../libs/WorkflowObjectModel_pbl.d.ts"/>
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
        var BPFStepActivity = (function (_super) {
            __extends(BPFStepActivity, _super);
            function BPFStepActivity() {
                _super.call(this, ProcessDesigner.BPFActivityType.step);
                this._attributeName = "";
                this._defaultStepName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_StepName");
                this._classId = "";
                this._description = this.defaultStepName;
                this._isRequired = false;
            }
            Object.defineProperty(BPFStepActivity.prototype, "parentStage", {
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
            Object.defineProperty(BPFStepActivity.prototype, "stepId", {
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
            Object.defineProperty(BPFStepActivity.prototype, "stepName", {
                get: function () {
                    return this._stepName;
                },
                set: function (value) {
                    if (this._stepName !== value) {
                        this._stepName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStepActivity.prototype, "description", {
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
            Object.defineProperty(BPFStepActivity.prototype, "isRequired", {
                get: function () {
                    return this._isRequired;
                },
                set: function (value) {
                    if (this._isRequired !== value) {
                        this._isRequired = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStepActivity.prototype, "sequence", {
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
            Object.defineProperty(BPFStepActivity.prototype, "attributeName", {
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
            Object.defineProperty(BPFStepActivity.prototype, "defaultStepName", {
                get: function () {
                    return this._defaultStepName;
                },
                set: function (value) {
                    if (this._defaultStepName !== value) {
                        this._defaultStepName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStepActivity.prototype, "classId", {
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
            BPFStepActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.stepId = Utility.newGuid();
                this.setActivityTypeID(ProcessDesigner.BPFActivityType.step);
            };
            BPFStepActivity.prototype.InitializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
            };
            BPFStepActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    _attributeName: this.attributeName,
                    _isRequired: this.isRequired,
                    _description: this.description,
                    _defaultStepName: this.defaultStepName
                };
                return JSON.stringify(target);
            };
            BPFStepActivity.prototype.PrepareJsonObject = function () {
                var stepObj = new ProcessDesigner.StepStepJson();
                stepObj.id = this.getActivityID();
                stepObj.description = this.description;
                stepObj.name = this.stepName;
                var stepStepList = [];
                stepObj.steps = new Object({ list: stepStepList });
                var stepStepLabelList = [];
                var labDetails = new Object({ labelId: this.stepId, languageCode: 1033, description: this.description });
                stepStepLabelList.push(labDetails);
                stepObj.stepLabels = new Object({ list: stepStepLabelList });
                stepObj.stepStepId = this.stepId;
                stepObj.isProcessRequired = this.isRequired;
                stepObj.isHidden = false;
                return stepObj;
            };
            BPFStepActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                return [];
            };
            return BPFStepActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.BPFStepActivity = BPFStepActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="IBPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the stage activity interface of the business process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
/// <reference path="../../common/bpfactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="bpfstepactivity.ts" />
// -----------------------------------------------------------------------
// <copyright file="BPFToActivityCollectionVisitor.ts" company="Microsoft">
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
        var StageStep = Microsoft.Crm.Workflow.ObjectModel.StageStep;
        var BusinessProcessFlowVisitor = ProcessObjectModel.Visitors.BusinessProcessFlowVisitor;
        var Dictionary = (function () {
            function Dictionary() {
            }
            return Dictionary;
        })();
        var BpfToActivityCollectionVisitor = (function (_super) {
            __extends(BpfToActivityCollectionVisitor, _super);
            function BpfToActivityCollectionVisitor() {
                _super.call(this);
                this.visitedStages = new Dictionary();
                this.mergeParentReverseLookup = new Dictionary();
            }
            BpfToActivityCollectionVisitor.prototype.visitWorkflowStep = function (workflowStep) {
                this.businessProcessFlowVisitor = new BusinessProcessFlowVisitor();
                this.businessProcessFlowVisitor.visit(workflowStep);
                var model = this.createActivity(workflowStep, ProcessDesigner.BPFActivityType.root);
                this.currentParent = model;
                this.currentParentBranchId = ProcessDesigner.ProcessToActivityCollectionVisitor.defaultParentBranchId;
                var steps = workflowStep.get_Steps();
                for (var i = 0; i < steps.get_Count(); ++i) {
                    steps.get_item(i).apply(this);
                }
            };
            BpfToActivityCollectionVisitor.prototype.visitStageStep = function (stageStep) {
                var stageId = stageStep.get_stageId();
                var visited = this.visitedStages[stageId] != null;
                var model;
                if (!visited) {
                    model = this.createStageActivity(stageStep, ProcessDesigner.BPFActivityType.stage);
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
                    this.visitSteps(stageStep);
                    this.currentStepIndex++;
                }
            };
            BpfToActivityCollectionVisitor.prototype.visitStepStep = function (stepStep) {
                var model = this.createStepActivity(stepStep, ProcessDesigner.BPFActivityType.step);
                model.stepId = stepStep.get_stepStepId();
                this.currentStepActivity = model;
                this.visitSteps(stepStep);
                this.currentStageActivity.steps.push(model);
            };
            BpfToActivityCollectionVisitor.prototype.visitControlStep = function (controlStep) {
                this.currentStepActivity.attributeName = controlStep.get_dataFieldName();
                this.currentStepActivity.classId = controlStep.get_classId();
            };
            BpfToActivityCollectionVisitor.prototype.visitEntityStep = function (entityStep) {
                _super.prototype.visitEntityStep.call(this, entityStep);
                this.visitSteps(entityStep);
            };
            BpfToActivityCollectionVisitor.prototype.visitConditionBranchStep = function (conditionBranchStep) {
                _super.prototype.visitConditionBranchStep.call(this, conditionBranchStep);
                if (conditionBranchStep.get_conditionBranchDisplayMode() !== ConditionBranchDisplayMode.IF) {
                    return;
                }
                var parentStep = conditionBranchStep.get_parent().get_parent();
                if (!(parentStep instanceof StageStep)) {
                    return;
                }
                var parentStageStep = parentStep;
                var conditionBranchActivity = this.currentParent;
                conditionBranchActivity.parentStageEntityName = this.getEntityNameByStageId(parentStageStep.get_stageId());
                var parentNextStageId = parentStageStep.get_nextStageId();
                if (parentNextStageId == null || parentNextStageId === "") {
                    return;
                }
                if (this.mergeParentReverseLookup[parentNextStageId] == null) {
                    this.mergeParentReverseLookup[parentNextStageId] = conditionBranchActivity.getActivityID();
                }
            };
            BpfToActivityCollectionVisitor.prototype.visitSetNextStageStep = function (setNextStageStep) {
                var nextStageId = setNextStageStep.get_stageId();
                var nextStage = this.businessProcessFlowVisitor._stagesById$p$0[nextStageId];
                nextStage.apply(this);
            };
            BpfToActivityCollectionVisitor.prototype.createStageActivity = function (stageStep, activityType) {
                var activity = this.createActivity(stageStep, activityType);
                var relationshipSteps = this.businessProcessFlowVisitor.getRelationshipStepsByTargetStage(stageStep.get_stageId());
                if (relationshipSteps != null) {
                    var relationships = [];
                    for (var i = 0; i < relationshipSteps.length; ++i) {
                        var entry = relationshipSteps[i];
                        var source = this.businessProcessFlowVisitor._stagesById$p$0[entry.key];
                        var stageRelationship = new ProcessDesigner.StageRelationship(entry.value, source);
                        relationships.push(stageRelationship);
                    }
                    activity.relationships = relationships;
                }
                activity.entityName = this.getEntityNameByStageId(stageStep.get_stageId());
                var parentActivityId = this.mergeParentReverseLookup[stageStep.get_stageId()];
                if (parentActivityId != null && parentActivityId !== "") {
                    activity.setParentActivityID(parentActivityId);
                    activity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                }
                activity.stageId = stageStep.get_stageId();
                activity.nextStageId = stageStep.get_nextStageId();
                activity.stageCategory = stageStep.get_stageCategory();
                return activity;
            };
            BpfToActivityCollectionVisitor.prototype.createStepActivity = function (stepStep, activityType) {
                var activity = new ProcessDesigner.BPFStepActivity();
                activity.parentStage = this.currentStageActivity;
                activity.stepName = stepStep.get_stepStepName();
                activity.description = stepStep.get_stepLabels().get_item(0).get_description();
                activity.isRequired = stepStep.get_isProcessRequired();
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
            BpfToActivityCollectionVisitor.prototype.getEntityNameByStageId = function (stageId) {
                var canonicalId = stageId.toLowerCase();
                var parentStep = this.businessProcessFlowVisitor.get_parentEntityStepByStageId()[canonicalId];
                return parentStep.get_EntityLogicalName();
            };
            return BpfToActivityCollectionVisitor;
        })(ProcessDesigner.ProcessToActivityCollectionVisitor);
        ProcessDesigner.BpfToActivityCollectionVisitor = BpfToActivityCollectionVisitor;
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
//<copyright file="PBLCutCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLCutCommand = (function (_super) {
            __extends(PBLCutCommand, _super);
            function PBLCutCommand() {
                _super.apply(this, arguments);
            }
            PBLCutCommand.prototype.execute = function () {
                var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                    return;
                }
                jQuery.each(selectedActivities, function (index, activity) {
                    var activityType = activity.getActivityTypeID();
                    if (ProcessDesigner.PblActivityType.isActionActivityType(activityType) || activityType == ProcessDesigner.PblActivityType.setSuggestionStep) {
                        $('#' + activity.getActivityID()).addClass('cutTile');
                    }
                    else {
                        throw Error("Internal : Activity type not supported for Cut");
                    }
                });
                GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(selectedActivities);
                GenericWorkflowDesigner.CutCommand.cutInProgress = true;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                return;
            };
            return PBLCutCommand;
        })(GenericWorkflowDesigner.CutCommand);
        ProcessDesigner.PBLCutCommand = PBLCutCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//<copyright file="PBLCopyCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLCopyCommand = (function (_super) {
            __extends(PBLCopyCommand, _super);
            function PBLCopyCommand() {
                _super.apply(this, arguments);
            }
            PBLCopyCommand.prototype.execute = function () {
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    $(".cutTile").removeClass("cutTile");
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                }
                _super.prototype.execute.call(this);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            return PBLCopyCommand;
        })(GenericWorkflowDesigner.CopyCommand);
        ProcessDesigner.PBLCopyCommand = PBLCopyCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="PBLPasteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLPasteCommand = (function (_super) {
            __extends(PBLPasteCommand, _super);
            function PBLPasteCommand() {
                _super.apply(this, arguments);
            }
            PBLPasteCommand.prototype.execute = function () {
                var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                if (copiedActivities.length <= 0) {
                    return;
                }
                var activityType = copiedActivities[0].getActivityTypeID();
                var targetDiv = document.createElement("div");
                if (ProcessDesigner.PblActivityType.isValidPBLActivityType(activityType)) {
                    switch (activityType) {
                        case ProcessDesigner.PblActivityType.condition:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteCondition);
                            break;
                        case ProcessDesigner.PblActivityType.setMessageStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowError);
                            break;
                        case ProcessDesigner.PblActivityType.setDisplayModeStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteDisplayMode);
                            break;
                        case ProcessDesigner.PblActivityType.setVisibilityStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetVisibility);
                            break;
                        case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetBusinessRequired);
                            break;
                        case ProcessDesigner.PblActivityType.setAttributeValueStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField);
                            break;
                        case ProcessDesigner.PblActivityType.setDefaultValueStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetDefaultField);
                            break;
                        case ProcessDesigner.PblActivityType.setSuggestionStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowRecommendations);
                            break;
                        case ProcessDesigner.PblActivityType.acceptConditionStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteAcceptCondition);
                            break;
                        case ProcessDesigner.PblActivityType.customJavascriptStep:
                            targetDiv.setAttribute("id", ProcessDesigner.PBLAddActivityTypeCommandID.PasteCustomJavascript);
                            break;
                        default:
                            throw new Error("Internal : Activity type not supported for Paste");
                    }
                }
                else {
                    return;
                }
                var event = {};
                event["currentTarget"] = targetDiv;
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    targetDiv.setAttribute('data-activityID', copiedActivities[0].getActivityID());
                }
                MscrmControls.ProcessDesigner.AddActivityListSubView.ClickHandler(event);
            };
            PBLPasteCommand.prototype.pasteComponentAtSlot = function (slot, copiedActivities) {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                if (CommonTypes.Types.Object.isNullOrUndefined(copiedActivities)) {
                    copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                    if (copiedActivities.length <= 0) {
                        return;
                    }
                }
                var activity = copiedActivities[0].getCloneOfActivity();
                var activityType = activity.getActivityTypeID();
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(copiedActivities[0].parentSuggestionActivity)
                        && copiedActivities[0].parentSuggestionActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep
                        && copiedActivities[0].isInRecommendationTile()) {
                        ProcessDesigner.PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActivities(copiedActivities);
                    }
                    else if (ProcessDesigner.PblActivityType.isActionActivityType(activityType) || ProcessDesigner.PblActivityType.setSuggestionStep) {
                        ProcessDesigner.PBLActionActivityDeleteHandler.prototype.deleteActivities(copiedActivities);
                    }
                    else {
                        throw Error("Internal : Activity type not supported for paste");
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
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                        ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                        GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                        activity.highLight();
                        stopwatch.stop();
                        localStorage.setItem("PBL_" + activityType + "PasteTime", stopwatch.elapsedMilliseconds.toString());
                    }
                });
            };
            return PBLPasteCommand;
        })(GenericWorkflowDesigner.PasteCommand);
        ProcessDesigner.PBLPasteCommand = PBLPasteCommand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLActionActivityDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLActionActivityDeleteHandler = (function (_super) {
            __extends(PBLActionActivityDeleteHandler, _super);
            function PBLActionActivityDeleteHandler() {
                _super.apply(this, arguments);
            }
            PBLActionActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            };
            PBLActionActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Delete_Message");
                message = window['String'].format(message, activity);
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLActionActivityDeleteHandler_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.PBLDialogMessageTypes.Warning,
                    yesCallbackAction: this.deleteConfirmedCallback,
                    noCallbackAction: this.deleteCancelledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            PBLActionActivityDeleteHandler.prototype.deleteConfirmedCallback = function () {
                PBLActionActivityDeleteHandler.prototype.deleteActivities();
            };
            PBLActionActivityDeleteHandler.prototype.deleteCancelledCallback = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                return;
            };
            PBLActionActivityDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var _this = PBLActionActivityDeleteHandler.prototype;
                var deletedActivities = [];
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    deletedActivities.push(currentActivity);
                    var parentActivity = currentActivity.getParent();
                    if (ProcessDesigner.PblActivityType.isActionActivityType(parentActivity.getActivityTypeID())
                        || parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition
                        || parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                        var child = currentActivity.getChildActivitiesSorted()[0];
                        if (child) {
                            child.setParentActivityID(parentActivity.getActivityID());
                            child.setParentBranchID(currentActivity.getParentBranchID());
                        }
                    }
                    else {
                        throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLActionActivityDeleteHandler_Error"));
                    }
                }
                jQuery.each(deletedActivities, function (indexNode, node) {
                    var nodeType = node.getActivityTypeID();
                    var parentId = "";
                    ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent(node.id, nodeType, parentId);
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
                    GenericWorkflowDesigner.updateCurrentModel(parentActivity);
                }
                else {
                    GenericWorkflowDesigner.updateCurrentModel(GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot());
                }
                if (activityTypeToSelect === ProcessDesigner.PblActivityType.condition && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".conditionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.conditionTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setMessageStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setMessageTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setMessageTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setDisplayModeStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setDisplayModeTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setDisplayModeTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setVisibilityStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setVisibilityTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setVisibilityTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setFieldRequiredLevelStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setFieldRequiredLevelTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setFieldRequiredLevelTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setAttributeValueStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setAttributeValueTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setAttributeValueTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setDefaultValueStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setDefaultValueTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setDefaultValueTile").get(0));
                }
                else if (activityTypeToSelect === ProcessDesigner.PblActivityType.setSuggestionStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setSuggestionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setSuggestionTile").get(0));
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            PBLActionActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
                var _this = PBLActionActivityDeleteHandler.prototype;
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    _this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
                return toBeDeleted;
            };
            return PBLActionActivityDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.PBLActionActivityDeleteHandler = PBLActionActivityDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLActionActivityInSuggestionDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLActionActivityInSuggestionDeleteHandler = (function (_super) {
            __extends(PBLActionActivityInSuggestionDeleteHandler, _super);
            function PBLActionActivityInSuggestionDeleteHandler() {
                _super.apply(this, arguments);
            }
            PBLActionActivityInSuggestionDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Delete_Message");
                message = window['String'].format(message, activity);
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLActionActivityDeleteHandler_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.PBLDialogMessageTypes.Warning,
                    yesCallbackAction: this.deleteConfirmedCallback,
                    noCallbackAction: this.deleteCancelledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteConfirmedCallback = function () {
                PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActivities();
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteCancelledCallback = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                return;
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActionFromSuggestion = function (action) {
                var parentSuggestion = action.parentSuggestionActivity;
                var steps = parentSuggestion.actionSteps;
                var index = jQuery.inArray(action, steps);
                if (index == -1) {
                    return;
                }
                parentSuggestion.actionSteps.splice(index, 1);
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var _this = PBLActionActivityInSuggestionDeleteHandler.prototype;
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    _this.deleteActionFromSuggestion(currentActivity);
                }
                _this.canvasRefreshUtil();
                var parentActivity = currentActivity.parentSuggestionActivity;
                var activityIdToSelect = null;
                var activityTypeToSelect = null;
                if (parentActivity) {
                    activityIdToSelect = parentActivity.getActivityID();
                    activityTypeToSelect = parentActivity.getActivityTypeID();
                    GenericWorkflowDesigner.updateCurrentModel(parentActivity);
                }
                else {
                    GenericWorkflowDesigner.updateCurrentModel(GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot());
                }
                if (activityTypeToSelect === ProcessDesigner.PblActivityType.setSuggestionStep && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".setSuggestionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.setSuggestionTile").get(0));
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            PBLActionActivityInSuggestionDeleteHandler.prototype.deleteSelectedActivities = function () {
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    var parentSuggestion = currentActivity.parentSuggestionActivity;
                    var steps = parentSuggestion.actionSteps;
                    if (steps.length == 1) {
                        var alertTitle = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SingleRecommendation_Delete_Alert_Title");
                        var alertMessage = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SingleRecommendation_Delete_Alert_ErrorMessage");
                        this.alertDialog(alertTitle, alertMessage);
                        GenericWorkflowDesigner.updateCurrentModel(null);
                        return;
                    }
                    this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
            };
            return PBLActionActivityInSuggestionDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.PBLActionActivityInSuggestionDeleteHandler = PBLActionActivityInSuggestionDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLConditionActivityDeleteHandler.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLConditionActivityDeleteHandler = (function (_super) {
            __extends(PBLConditionActivityDeleteHandler, _super);
            function PBLConditionActivityDeleteHandler() {
                _super.apply(this, arguments);
            }
            PBLConditionActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            };
            PBLConditionActivityDeleteHandler.prototype.getAllSubsequentActivities = function (activity) {
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
            PBLConditionActivityDeleteHandler.prototype.alertDialog = function (title, message) {
                var dialogDetails = {
                    dialogTitle: title,
                    dialogMessage: message,
                    messageType: ProcessDesigner.PBLDialogMessageTypes.Warning
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            PBLConditionActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
                var message = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Delete_Message");
                message = window['String'].format(message, activity);
                var dialogDetails = {
                    dialogTitle: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_DeleteCondition_Title"),
                    dialogMessage: message,
                    messageType: ProcessDesigner.PBLDialogMessageTypes.Warning,
                    yesCallbackAction: this.DeleteConfirmedCallback,
                    noCallbackAction: this.DeleteCancelledCallback
                };
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            };
            PBLConditionActivityDeleteHandler.prototype.DeleteConfirmedCallback = function () {
                PBLConditionActivityDeleteHandler.prototype.deleteActivities();
            };
            PBLConditionActivityDeleteHandler.prototype.DeleteCancelledCallback = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                return;
            };
            PBLConditionActivityDeleteHandler.prototype.deleteActivities = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var _this = PBLConditionActivityDeleteHandler.prototype;
                var deletedActivities = [];
                var parentActivity, moreToBeDeletedActivities;
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    deletedActivities.push(currentActivity);
                    var children = currentActivity.getChildActivitiesSorted();
                    var length = children.length;
                    parentActivity = currentActivity.getParent();
                    if (CommonTypes.Types.Object.isNullOrUndefined(parentActivity)
                        && currentActivity == GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()) {
                        if (children && children[length - 1].getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                            if (children[0].getParentBranchID() == 1) {
                                moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[0]);
                                for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                    deletedActivities.push(moreToBeDeletedActivities[j]);
                                }
                            }
                            children[length - 1].setParentActivityID(currentActivity.getParentActivityID());
                            children[length - 1].setParentBranchID(currentActivity.getParentBranchID());
                        }
                        else {
                            throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLConditionActivityDeleteHandler_DeleteSingleCondition"));
                        }
                    }
                    else {
                        switch (length) {
                            case 0:
                                break;
                            case 1:
                                if (parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                                    children[length - 1].setParentActivityID(parentActivity.getActivityID());
                                    children[length - 1].setParentBranchID(currentActivity.getParentBranchID());
                                }
                                else {
                                    throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLConditionActivityDeleteHandler_ConditionBranch_Error"));
                                }
                                break;
                            case 2:
                                if (parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                                    moreToBeDeletedActivities = _this.getAllSubsequentActivities(children[0]);
                                    for (var j = 0; j < moreToBeDeletedActivities.length; ++j) {
                                        deletedActivities.push(moreToBeDeletedActivities[j]);
                                    }
                                    children[length - 1].setParentActivityID(parentActivity.getActivityID());
                                    children[length - 1].setParentBranchID(2);
                                }
                                else {
                                    throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLConditionActivityDeleteHandler_ConditionBranch_Error"));
                                }
                                break;
                        }
                        ;
                    }
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
                    var nodeType = node.getActivityTypeID();
                    var parentId = "";
                    ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent(node.id, nodeType, parentId);
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
                    GenericWorkflowDesigner.updateCurrentModel(parentActivity);
                }
                else {
                    GenericWorkflowDesigner.updateCurrentModel(GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot());
                }
                if (activityTypeToSelect === ProcessDesigner.PblActivityType.condition && activityIdToSelect) {
                    $("#canvas").find(".slot#" + activityIdToSelect).find(".conditionTile").addClass("selected");
                    ProcessDesigner.ControlManager.canvasScrollIntoView($(".selected.conditionTile").get(0));
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            PBLConditionActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    if (CommonTypes.Types.Object.isNullOrUndefined(currentActivity.getParent())
                        && currentActivity == GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()) {
                        var children = currentActivity.getChildActivitiesSorted();
                        if (children.length < 1 || children[children.length - 1].getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                            var dialogTitle = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLConditionActivityDeleteHandler_DeleteSingleCondition_Error");
                            var dialogMessage = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLConditionActivityDeleteHandler_DeleteCondition_Message");
                            this.alertDialog(dialogTitle, dialogMessage);
                            return [];
                        }
                    }
                    this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
                }
                return toBeDeleted;
            };
            return PBLConditionActivityDeleteHandler;
        })(GenericWorkflowDesigner.ActivityDeleteHandler);
        ProcessDesigner.PBLConditionActivityDeleteHandler = PBLConditionActivityDeleteHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLDeleteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLDeleteCommand = (function () {
            function PBLDeleteCommand() {
            }
            PBLDeleteCommand.prototype.execute = function () {
                var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                if (!toBeDeleted) {
                    return;
                }
                for (var i = 0; i < toBeDeleted.length && toBeDeleted[i]; i++) {
                    if (toBeDeleted[i].getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                        ProcessDesigner.PBLConditionActivityDeleteHandler.prototype.deleteSelectedActivities();
                    }
                    else if (!CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted[i].parentSuggestionActivity)
                        && toBeDeleted[i].parentSuggestionActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep
                        && toBeDeleted[i].isInRecommendationTile()) {
                        ProcessDesigner.PBLActionActivityInSuggestionDeleteHandler.prototype.deleteSelectedActivities();
                    }
                    else if (ProcessDesigner.PblActivityType.isActionActivityType(toBeDeleted[i].getActivityTypeID()) || toBeDeleted[i].getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                        ProcessDesigner.PBLActionActivityDeleteHandler.prototype.deleteSelectedActivities();
                    }
                    else {
                        throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLDeleteCommand_DeleteTileMessage"));
                    }
                }
            };
            return PBLDeleteCommand;
        })();
        ProcessDesigner.PBLDeleteCommand = PBLDeleteCommand;
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
                        return new ProcessDesigner.PBLCutCommand();
                    case "copy":
                        return new ProcessDesigner.PBLCopyCommand();
                    case "paste":
                        return new ProcessDesigner.PBLPasteCommand();
                    case "delete":
                        return new ProcessDesigner.PBLDeleteCommand();
                    case "snapshot":
                        return new ProcessDesigner.SnapshotCommand();
                    default:
                        return new ProcessDesigner.DefaultCommand();
                }
            };
            return CommandHandlerFactory;
        })();
        ProcessDesigner.CommandHandlerFactory = CommandHandlerFactory;
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
                var canvasDiv = document.getElementById('zoomCanvasWrapper');
                var parentDiv = document.getElementById('workspaceWrapperID');
                var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
                var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
                var plainTextViewVisibility = $("#pbl_plaintextviewwrapper").css("visibility");
                var detailsOverflowStyle = $('.stage-detail-container').css('overflow-y');
                var parentDivStyle = parentDiv.style.cssText;
                $("#mini-map-wrapper").css("visibility", "hidden");
                $("#show-mini-map-div").css("visibility", "hidden");
                $("#pbl_plaintextviewwrapper").css("visibility", "hidden");
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
                $("#pbl_plaintextviewwrapper").css("visibility", plainTextViewVisibility);
            };
            return SnapshotCommand;
        })();
        ProcessDesigner.SnapshotCommand = SnapshotCommand;
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
                var slotView = new ProcessDesigner.PblSuggestionSlotTileHolderView(new GenericWorkflowDesigner.SlotModel(this.activity));
                return slotView;
            };
            return BPFSlotTileHolderGenerator;
        })(GenericWorkflowDesigner.DefaultSlotTileHolderGenerator);
        ProcessDesigner.BPFSlotTileHolderGenerator = BPFSlotTileHolderGenerator;
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
                    case ProcessDesigner.PblActivityType.setMessageStep:
                    case ProcessDesigner.PblActivityType.setDisplayModeStep:
                    case ProcessDesigner.PblActivityType.setVisibilityStep:
                    case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep:
                    case ProcessDesigner.PblActivityType.setAttributeValueStep:
                    case ProcessDesigner.PblActivityType.setDefaultValueStep:
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                    case ProcessDesigner.PblActivityType.acceptConditionStep:
                    case ProcessDesigner.PblActivityType.condition:
                    case ProcessDesigner.PblActivityType.customJavascriptStep:
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
                this.defaultYesBranchIndex = 1;
                this.defaultNoBranchIndex = 2;
                this.getConditionActivity = function () {
                    var conditionActivity;
                    var parentActivity;
                    var finalActivity = null;
                    var myActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                    var children = this.parentActivity.getChildActivitiesSorted();
                    if (children.length > 0) {
                        finalActivity = children[0].getActivityID();
                    }
                    else {
                        finalActivity = this.getConditionActivityForEmptyDrop(this.parentActivity);
                    }
                    return finalActivity;
                };
                this.getConditionActivityForEmptyDrop = function (a1) {
                    var parent = a1.getParent();
                    var finalActivityID = null;
                    if (parent.getActivityTypeID() == "condition") {
                        var children = parent.getChildActivitiesSorted();
                        if (children.length == 3) {
                            for (var i = 0; i < children.length; i++) {
                                if (children[i].getParentBranchID() == 0 && children[i] != a1) {
                                    finalActivityID = children[i].getActivityID();
                                }
                                else {
                                    if (finalActivityID == null)
                                        finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                }
                            }
                        }
                        else {
                            finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                        }
                    }
                    else {
                        finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                    }
                    return finalActivityID;
                };
            }
            ConditionSubsequentActivities.prototype.createChildActivities = function () {
                var response = [];
                response.push(this.createYesBranchActivity(this.parentActivity));
                response.push(this.createNoBranchActivity(this.parentActivity));
                return response;
            };
            ConditionSubsequentActivities.prototype.createYesBranchActivity = function (parentActivity) {
                var parentId = parentActivity.getActivityID();
                var activity = _super.prototype.createActivity.call(this, parentId, ProcessDesigner.ProcessActivityType.Empty);
                activity.setParentBranchID(this.defaultYesBranchIndex);
                activity.setReadonlyMode(parentActivity.getReadonlyMode());
                activity.setNextActivityID(this.getConditionActivity());
                return activity;
            };
            ConditionSubsequentActivities.prototype.createNoBranchActivity = function (parentActivity) {
                var parentId = parentActivity.getActivityID();
                var activity = this.createActivity(parentId, ProcessDesigner.ProcessActivityType.Empty);
                activity.setParentBranchID(this.defaultNoBranchIndex);
                activity.setNextActivityID(this.getConditionActivity());
                return activity;
            };
            return ConditionSubsequentActivities;
        })(GenericWorkflowDesigner.AbstractSubsequentActivities);
        ProcessDesigner.ConditionSubsequentActivities = ConditionSubsequentActivities;
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
                    default:
                        return new GenericWorkflowDesigner.SlotTileHolderGeneratorFactory();
                }
            };
            BPFSlotGeneratorProvider.prototype.generateSlotsForActivity = function (activity) {
                var slotTypes = [GenericWorkflowDesigner.SlotType.TileHolder, GenericWorkflowDesigner.SlotType.InsertHorizontal, GenericWorkflowDesigner.SlotType.IconHolder, GenericWorkflowDesigner.SlotType.InsertVertical];
                var slotsList = [], insertSlotList = [];
                for (var i = 0; i < slotTypes.length; i++) {
                    var slotGeneratorFactory = this.createGeneratorFactory(slotTypes[i]);
                    var slot = slotGeneratorFactory.createSlotGenerator(activity).generateSlot();
                    if (slot instanceof GenericWorkflowDesigner.InsertSlotHorizontalView || slot instanceof GenericWorkflowDesigner.InsertSlotVerticalView) {
                        this.AddClickHandler(slot);
                    }
                    if (slot != null) {
                        if (slot instanceof Array) {
                            slotsList.push.apply(slotsList, slot);
                        }
                        else {
                            slotsList.push(slot);
                        }
                    }
                }
                this.AddButtonEventListner(slotsList);
                return slotsList;
            };
            BPFSlotGeneratorProvider.prototype.AddClickHandler = function (slot) {
                if (slot != null) {
                    slot.$el.on("mousedown", function (event) {
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearSelections);
                        event.stopPropagation();
                    });
                    slot.$el.on("click keydown", function (event) {
                        var TileGroups;
                        if (event.keyCode == 13 || event.type == "click") {
                            switch (ProcessDesigner.PBLToolBarView.addMode) {
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddCondition:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[0].value[0].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddAcceptcondition:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[0].value[1].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowrecommentdation:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[0].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddDisplayMode:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[1].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowerror:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[2].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[3].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetdefaultfield:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[4].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetbusinessrequired:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[5].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetvisibility:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[6].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.AddCustomJavascript:
                                    {
                                        var TileGroups = GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.groups[1].value[7].properties;
                                        var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: TileGroups.name, Tooltip: TileGroups.tooltip, Image: "", DataURI: "", Alt: TileGroups.alttext, FontIconImage: TileGroups.icon, ActivityTypeID: TileGroups.activitytypeid });
                                        GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(slot, slot, droppedElement);
                                    }
                                    break;
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCondition:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteAcceptCondition:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowRecommendations:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteDisplayMode:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowError:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetDefaultField:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetBusinessRequired:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetVisibility:
                                case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCustomJavascript:
                                    {
                                        ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                                        var pasteCommand = new ProcessDesigner.PBLPasteCommand();
                                        pasteCommand.pasteComponentAtSlot(slot);
                                    }
                                    break;
                                default:
                                    console.warn(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_BPFSlotGeneratorProvider_AddMode"));
                            }
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                        }
                    });
                }
            };
            BPFSlotGeneratorProvider.prototype.AddButtonEventListner = function (slotList) {
                var AcceptableTiles;
                $(document).on('AddButton', function (event, droppable) {
                    for (var i = 0; i < slotList.length; i++) {
                        AcceptableTiles = GenericWorkflowDesigner.SlotBase.isValidDroppable(slotList[i].el.id, droppable);
                        if (AcceptableTiles) {
                            $(slotList[i].el).addClass("hoverOverDroppable");
                        }
                    }
                });
            };
            return BPFSlotGeneratorProvider;
        })();
        ProcessDesigner.BPFSlotGeneratorProvider = BPFSlotGeneratorProvider;
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
                    case ProcessDesigner.BPFActivityType.stage:
                    case ProcessDesigner.BPFActivityType.condition:
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
                if (this.activity.getActivityTypeID() != ProcessDesigner.BPFActivityType.condition) {
                    return null;
                }
                if (this.activity.getActivityTypeID() == ProcessDesigner.BPFActivityType.condition ||
                    ((this.activity.getActivityTypeID() == ProcessDesigner.PblActivityType.acceptConditionStep) && this.activity.accept)) {
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
// <copyright file="BPFSlotGeneratorProvider.ts" company="Microsoft">
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
// <copyright file="BPFSlotGeneratorProvider.ts" company="Microsoft">
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
                _super.call(this, ProcessDesigner.BPFActivityType.condition);
            }
            ConditionActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.BPFActivityType.condition);
                this.addNewItem(ProcessDesigner.BPFActivityType.condition);
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
/// <reference path="../../../process/model/iprocessactivitydefinitionmodel.ts" />
//---------------------------------------------------------------------------------------------
// <copyright file="ValidatePBL.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//---------------------------------------------------------------------------------------------
/// <reference path="../../../Common/IValid.ts" />
/// <reference path="../../../Common/Rules.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ValidatePBL = (function () {
            function ValidatePBL() {
            }
            ValidatePBL.validate = function () {
                var isValid = true;
                var isUnloadingNewRule_ = ValidatePBL.isUnloadingNewRule();
                if (!isUnloadingNewRule_ && ValidatePBL.shouldValidate()) {
                    GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                    Validation.Errors.clearErrors();
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                    for (var i = 0; i < activities.length; i++) {
                        var status = activities[i].validateActivity();
                        isValid = status && isValid;
                    }
                    var message = Validation.Errors.updateNotifications();
                    ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerValidateEvent("", message, Validation.Errors.errorCount.toString());
                    if (!(ValidatePBL.isOnLoad && isValid)) {
                        Validation.Errors.updateNotifications();
                    }
                }
                Validation.Engine.resetAction();
                GenericWorkflowDesigner.EventManager.publish(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages);
                return isValid;
            };
            ValidatePBL.isUnloadingNewRule = function () {
                var retval = MscrmControls.ProcessDesigner.PBLDesignerControl.isNew();
                retval = retval && !MscrmControls.ProcessDesigner.ControlManager.isDirty();
                retval = retval && Validation.Engine.Action == Validation.Level.Unload;
                return retval;
            };
            ValidatePBL.clearErrors = function () {
                GenericWorkflowDesigner.Settings.notification.ClearNotifications();
                Validation.Errors.clearErrors();
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                for (var i = 0; i < activities.length; i++) {
                    activities[i].clearErrorMessages();
                    activities[i].isValid = true;
                }
            };
            ValidatePBL.setValidationMode = function (doValidation) {
                ProcessDesigner.PBLDesignerControl.validationMode = doValidation ? GenericWorkflowDesigner.ValidationMode.Error : GenericWorkflowDesigner.ValidationMode.None;
                if (!doValidation) {
                    ValidatePBL.clearErrors();
                }
                else {
                    Validation.Engine.setAction(Validation.Level.Validate);
                }
            };
            ValidatePBL.isValidationModeOn = function () {
                return (ProcessDesigner.PBLDesignerControl.validationMode != GenericWorkflowDesigner.ValidationMode.None);
            };
            ValidatePBL.shouldValidate = function () {
                var doValidate = false;
                if (Validation.Engine.isDefaultAction()) {
                    doValidate = false;
                }
                else if (Validation.Engine.Action >= Validation.Level.Save && Validation.Engine.Action != Validation.Level.Unload) {
                    doValidate = true;
                }
                else if (ProcessDesigner.PBLDesignerControl.validationMode == GenericWorkflowDesigner.ValidationMode.None) {
                    doValidate = false;
                }
                else {
                    doValidate = true;
                }
                return doValidate;
            };
            ValidatePBL.validateAfterLoad = function () {
                ValidatePBL.isOnLoad = true;
                if (!MscrmControls.ProcessDesigner.PBLDesignerControl.isNew()) {
                    Validation.Engine.setAction(Validation.Level.Validate);
                    var isValid = ValidatePBL.validate();
                    if (isValid) {
                        ValidatePBL.clearErrors();
                        var buttonOn = $('#validateButtonOn');
                        buttonOn.removeClass('validateButtonOff');
                        buttonOn.attr("title", ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateMode_Off"));
                        ValidatePBL.ValidationMode = false;
                        ProcessDesigner.PBLDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.None;
                    }
                }
                ValidatePBL.isOnLoad = false;
            };
            Object.defineProperty(ValidatePBL, "ValidationMode", {
                get: function () {
                    return ValidatePBL._validationMode;
                },
                set: function (value) {
                    ValidatePBL._validationMode = value;
                },
                enumerable: true,
                configurable: true
            });
            ValidatePBL.toggleValidation = function () {
                ValidatePBL.ValidationMode = !ValidatePBL.ValidationMode;
            };
            ValidatePBL.validateDuplicateRecommendationFieldForPath = function () {
                var status = true;
                var result = null;
                var fieldName = "attributeName";
                result = Validation.Engine.validateField(fieldName, self, function (self) {
                    var status_ = true;
                    var pathFirstActivities = new Array();
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                    for (var i = 0; i < activities.length; i++) {
                        if (activities[i].getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                            if (activities[i].getYesBranches() != null) {
                                pathFirstActivities.push(activities[i].getYesBranches()[0]);
                            }
                            if (activities[i].getNoBranch() && activities[i].getNoBranch().getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                                pathFirstActivities.push(activities[i].getNoBranch());
                            }
                        }
                    }
                    for (var i = 0; i < pathFirstActivities.length; i++) {
                        var fields = {};
                        var suggestionAtivities = new Array();
                        var stack = new Array();
                        stack.push(pathFirstActivities[i]);
                        while (stack.length != 0) {
                            var currentActivity = stack.pop();
                            if (currentActivity && currentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                                if (currentActivity.field) {
                                    var fieldKey = currentActivity.entity.entityName + "::" + currentActivity.field;
                                    if (!fields.hasOwnProperty(fieldKey)) {
                                        fields[fieldKey] = new Array();
                                    }
                                    fields[fieldKey].push(currentActivity);
                                }
                            }
                            var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentActivity);
                            for (var j = 0; j < childActivities.length; j++) {
                                stack.push(childActivities[j]);
                            }
                        }
                        for (var field in fields) {
                            var suggestionActivies = fields[field];
                            if (suggestionActivies.length > 1) {
                                status_ = false && status_;
                                for (var index in suggestionActivies) {
                                    var suggestionActivity = suggestionActivies[index];
                                    suggestionActivity.addErrorMessage(fieldName, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_MultipleRecommendations_ErrorMessage"));
                                    suggestionActivity.markInvalid();
                                }
                            }
                        }
                    }
                    return status_;
                }, Validation.Level.Validate, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_MultipleRecommendations_ErrorMessage"), null);
                status = result.isValid && status;
                return status;
            };
            ValidatePBL.isOnLoad = true;
            ValidatePBL._validationMode = false;
            return ValidatePBL;
        })();
        ProcessDesigner.ValidatePBL = ValidatePBL;
        window["designerToggleValidation"] = ValidatePBL.toggleValidation;
        window["designerValidationOn"] = function () { return ValidatePBL.ValidationMode; };
        $(window.top.document).on("doValidation", function (event, success, failure) {
            var isValid = MscrmControls.ProcessDesigner.ValidatePBL.validate();
            window.top.document.createAttribute("validateSuccess");
            if (isValid) {
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
        window.addEventListener('resize', function (event) {
            var div = document.getElementById('componentsList');
            var currentlyExpanded = document.getElementById('library').getAttribute('aria-expanded');
            var hasVerticalScrollbar = div.scrollHeight > div.clientHeight;
            if (window.devicePixelRatio >= 1 && ((hasVerticalScrollbar == true && currentlyExpanded == "true") || (hasVerticalScrollbar == false && currentlyExpanded == "false"))) {
                var workspaceWrapperWidth = '74.5%';
                var toolpaneWidth = '24.5%';
                $(".workspaceWrapper").attr("style", "width:" + workspaceWrapperWidth + " !important");
                $("#toolpane").attr("style", "width:" + toolpaneWidth + " !important");
            }
            else {
                var workspaceWrapperWidth = '76%';
                var toolpaneWidth = '23%';
                $(".workspaceWrapper").attr("style", "width:" + workspaceWrapperWidth + " !important");
                $("#toolpane").attr("style", "width:" + toolpaneWidth + " !important");
            }
        }, false);
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLScope.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./ValidatePBL.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PBLScope = (function () {
            function PBLScope() {
            }
            PBLScope.isEntity = function () {
                return (PBLScope.scope == PBLScope.Entity);
            };
            PBLScope.updateTriggerScope = function (args, formId, scope) {
                if (args && args.length > 1) {
                    PBLScope.scope = args[1];
                    GenericWorkflowDesigner.eventManager.trigger(ProcessDesigner.PblEvents.refreshPropertyPage);
                }
                if (window["designerLoaded"] && !MscrmControls.ProcessDesigner.PBLDesignerControl.isNew()) {
                    MscrmControls.ProcessDesigner.ValidatePBL.validate();
                }
            };
            PBLScope.Entity = "2";
            PBLScope.Form = "1";
            PBLScope.scope = "-1";
            return PBLScope;
        })();
        ProcessDesigner.PBLScope = PBLScope;
        window["designerTriggerScope"] = PBLScope.updateTriggerScope;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="BpfMetadataProvider.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Proxy to read Bpf related metadata
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="../Common/MetaDataProxy.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PickListModel = (function () {
            function PickListModel() {
            }
            return PickListModel;
        })();
        ProcessDesigner.PickListModel = PickListModel;
        (function (BpfAttributeTypes) {
            BpfAttributeTypes[BpfAttributeTypes["BpfProcess"] = 0] = "BpfProcess";
            BpfAttributeTypes[BpfAttributeTypes["StageCategory"] = 1] = "StageCategory";
        })(ProcessDesigner.BpfAttributeTypes || (ProcessDesigner.BpfAttributeTypes = {}));
        var BpfAttributeTypes = ProcessDesigner.BpfAttributeTypes;
        (function (BpfFields) {
            BpfFields[BpfFields["Unknown"] = -1] = "Unknown";
            BpfFields[BpfFields["BpfProcess"] = 0] = "BpfProcess";
            BpfFields[BpfFields["ActiveStage"] = 1] = "ActiveStage";
            BpfFields[BpfFields["SelectedStage"] = 2] = "SelectedStage";
            BpfFields[BpfFields["ActiveStageCategory"] = 3] = "ActiveStageCategory";
            BpfFields[BpfFields["SelectedStageCategory"] = 4] = "SelectedStageCategory";
        })(ProcessDesigner.BpfFields || (ProcessDesigner.BpfFields = {}));
        var BpfFields = ProcessDesigner.BpfFields;
        (function (BpfFieldType) {
            BpfFieldType[BpfFieldType["BpfProcess"] = 19] = "BpfProcess";
            BpfFieldType[BpfFieldType["Stage"] = 21] = "Stage";
            BpfFieldType[BpfFieldType["StageCategory"] = 20] = "StageCategory";
        })(ProcessDesigner.BpfFieldType || (ProcessDesigner.BpfFieldType = {}));
        var BpfFieldType = ProcessDesigner.BpfFieldType;
        (function (BpfAttributeID) {
            BpfAttributeID[BpfAttributeID["processid"] = 0] = "processid";
            BpfAttributeID[BpfAttributeID["stageid"] = 1] = "stageid";
        })(ProcessDesigner.BpfAttributeID || (ProcessDesigner.BpfAttributeID = {}));
        var BpfAttributeID = ProcessDesigner.BpfAttributeID;
        var StageType = (function () {
            function StageType() {
                this._type = StageType.Unknown;
            }
            Object.defineProperty(StageType.prototype, "isUnknown", {
                get: function () {
                    return (StageType.Unknown == this._type);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageType.prototype, "isActive", {
                get: function () {
                    return (StageType.Active == this._type);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageType.prototype, "isSelected", {
                get: function () {
                    return (StageType.Selected == this._type);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageType.prototype, "val", {
                get: function () {
                    return this._type;
                },
                set: function (v) {
                    this._type = v;
                },
                enumerable: true,
                configurable: true
            });
            StageType.Unknown = -1;
            StageType.Active = 0;
            StageType.Selected = 1;
            return StageType;
        })();
        ProcessDesigner.StageType = StageType;
        var BpfMetadataProvider = (function () {
            function BpfMetadataProvider() {
            }
            BpfMetadataProvider.toPickList = function (options) {
                var pList = new Array();
                for (var i = 0; i < options.length; i++) {
                    var op = new PickListModel();
                    op.pickListValue = options[i].Label;
                    op.pickListValueOrderId = options[i].Value;
                    pList.push(op);
                }
                return pList;
            };
            BpfMetadataProvider.updateIndexMap = function (options) {
                BpfMetadataProvider.id2Index = {};
                for (var i = 0; i < options.length; i++) {
                    BpfMetadataProvider.id2Index[options[i]] = i;
                }
            };
            BpfMetadataProvider.getProcessIndex = function (id) {
                if (!BpfMetadataProvider.id2Index) {
                    BpfMetadataProvider.updateIndexMap(Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.BusinessProcessFlows.Ids);
                }
                if (id) {
                    id = id.toUpperCase();
                }
                else {
                    id = '';
                }
                var index = BpfMetadataProvider.id2Index[id];
                if (_.isNull(index) || _.isUndefined(index)) {
                    index = -1;
                }
                return index;
            };
            BpfMetadataProvider.getIndex2ProcessID = function (selectedBpfId) {
                return Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.BusinessProcessFlows.Ids[selectedBpfId];
            };
            BpfMetadataProvider.getProcessDisplayName = function (id) {
                if (id != -1) {
                    return Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.BusinessProcessFlows.Options[id].Label;
                }
                else {
                    return '';
                }
            };
            BpfMetadataProvider.getProcessList = function () {
                if (!BpfMetadataProvider.id2Index) {
                    BpfMetadataProvider.updateIndexMap(Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.BusinessProcessFlows.Ids);
                }
                return BpfMetadataProvider.toPickList(Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.BusinessProcessFlows.Options);
            };
            BpfMetadataProvider.getStageId2IndexList = function (selectedBpfId, list) {
                var iList = new Array();
                var id2Index = {};
                BpfMetadataProvider.getStageList(selectedBpfId);
                var options = Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId].Ids;
                for (var i = 0; i < options.length; i++) {
                    id2Index[options[i]] = i;
                }
                for (var i = 0; i < list.length; i++) {
                    var index = id2Index[list[i]];
                    if (_.isNull(index) || _.isUndefined(index)) {
                        index = -1;
                    }
                    iList.push("" + index);
                }
                return iList;
            };
            BpfMetadataProvider.getStageIndex2DisplayName = function (selectedBpfId, list) {
                var text = '';
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {
                        if (i > 0) {
                            text = text + ",";
                        }
                        if (list[i] > -1) {
                            text = text + Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId].Options[list[i]].Label;
                        }
                        else {
                            text = text + ProcessDesigner.MetadataProxy.getLocalizedString('LOCID_PBLERROR_TITLE');
                        }
                    }
                }
                return text;
            };
            BpfMetadataProvider.getStageIndex2ID = function (selectedBpfId, index) {
                return Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId].Ids[index];
            };
            BpfMetadataProvider.getStageList = function (selectedBpfId) {
                if (!Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages || !Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId]) {
                    var processId_1 = BpfMetadataProvider.getIndex2ProcessID(selectedBpfId);
                    Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance().getProcessStageInfoAndCache(processId_1, selectedBpfId);
                }
                return BpfMetadataProvider.toPickList(Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId].Options);
            };
            BpfMetadataProvider.getStageID = function (selectedBpfId, selectedStageId) {
                return Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.Stages[selectedBpfId].Ids[selectedStageId];
            };
            BpfMetadataProvider.getCategotyList = function () {
                return BpfMetadataProvider.toPickList(Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.StageCategories.Options);
            };
            BpfMetadataProvider.getCategoryId2IndexList = function (list) {
                return list;
            };
            BpfMetadataProvider.getCategoryIndex2DisplayName = function (list) {
                var text = '';
                if (list.length > 0) {
                    text = Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.StageCategories.Options[list[0]].Label;
                    for (var i = 1; i < list.length; i++) {
                        text = text + "," + Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityBpfMetadata.StageCategories.Options[list[i]].Label;
                    }
                }
                return text;
            };
            BpfMetadataProvider.getCategoryIndex2ID = function (index) {
                return index;
            };
            BpfMetadataProvider.getBpfAttributeList = function () {
                return [{ Label: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Process_Name"), Value: BpfAttributeTypes.BpfProcess }, { Label: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Stage_Category"), Value: BpfAttributeTypes.StageCategory }];
            };
            BpfMetadataProvider.getStageTypeList = function () {
                return [{ Label: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Active_Stage"), Value: StageType.Active }, { Label: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Selected_Stage"), Value: StageType.Selected }];
            };
            BpfMetadataProvider.getDisplayName = function (field) {
                switch (field) {
                    case BpfFields.BpfProcess:
                        return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Source_Business_Process");
                    case BpfFields.ActiveStage:
                        return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Active_Stage");
                    case BpfFields.SelectedStage:
                        return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Selected_Stage");
                    case BpfFields.ActiveStageCategory:
                        return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Stage_Category") + ' (' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Active_Stage") + ')';
                    case BpfFields.SelectedStageCategory:
                        return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Stage_Category") + ' (' + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_MD_Selected_Stage") + ')';
                }
                return '';
            };
            BpfMetadataProvider.getDisplayID = function (field) {
                switch (field) {
                    case BpfFields.BpfProcess:
                        return 'processid';
                    case BpfFields.ActiveStage:
                        return 'active_stageid';
                    case BpfFields.SelectedStage:
                        return 'selected_stageid';
                    case BpfFields.ActiveStageCategory:
                        return 'active_stage_category';
                    case BpfFields.SelectedStageCategory:
                        return 'selected_stage_category';
                }
                return '';
            };
            BpfMetadataProvider.id2Index = null;
            BpfMetadataProvider.METHOD_CALL_TYPE = "23";
            return BpfMetadataProvider;
        })();
        ProcessDesigner.BpfMetadataProvider = BpfMetadataProvider;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
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
/// <reference path="../../../PBL/Common/PBLScope.ts" />
/// <reference path="../../../../Utility/BpfMetadataProvider.ts" />
/// <reference path="../../../../Common/IValid.ts" />
/// <reference path="../../../../Common/Rules.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var WorkflowObjectModel = Microsoft.Crm.Workflow.ObjectModel;
        var PBLScope = MscrmControls.ProcessDesigner.PBLScope;
        var StageType = MscrmControls.ProcessDesigner.StageType;
        var BpfFields = MscrmControls.ProcessDesigner.BpfFields;
        var BpfFieldType = MscrmControls.ProcessDesigner.BpfFieldType;
        var BpfAttributeID = MscrmControls.ProcessDesigner.BpfAttributeID;
        var BpfMetadataProvider = MscrmControls.ProcessDesigner.BpfMetadataProvider;
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var WorkflowExpressions = Microsoft.Crm.Workflow.Expressions;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        (function (formulaOperator) {
            formulaOperator[formulaOperator["Add"] = 0] = "Add";
            formulaOperator[formulaOperator["Substract"] = 1] = "Substract";
            formulaOperator[formulaOperator["Multiply"] = 2] = "Multiply";
            formulaOperator[formulaOperator["Divide"] = 3] = "Divide";
        })(ProcessDesigner.formulaOperator || (ProcessDesigner.formulaOperator = {}));
        var formulaOperator = ProcessDesigner.formulaOperator;
        var ConditionFormula = (function (_super) {
            __extends(ConditionFormula, _super);
            function ConditionFormula() {
                _super.apply(this, arguments);
                this._attribute = "";
                this._isAttribute = false;
                this._value = "";
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
            Object.defineProperty(ConditionFormula.prototype, "parentAttribute", {
                set: function (value) {
                    this._parentAttribute = value;
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
            Object.defineProperty(ConditionFormula.prototype, "attributeType", {
                get: function () {
                    return this._attributeType;
                },
                set: function (value) {
                    this._attributeType = value;
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
                    var attributeType = this._attribute ? MetadataProxy.getAttributeType(this._attribute, this.leftEntity.get_entityName()) : AttributeType.Unknown;
                    var result = null;
                    if (attributeType == AttributeType.DateTime) {
                        result = Validation.Engine.validateDateTimeFormulaValue("#formulaValueContainer", this._value, Validation.Level.Change);
                    }
                    else {
                        result = Validation.Engine.validateAttributeValue("#formulaValueContainer", this._value, this._parentAttribute, this.leftEntity.get_entityName(), Validation.Level.Change);
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
        var SourceType = (function () {
            function SourceType() {
                this._type = SourceType.ENTITY;
            }
            Object.defineProperty(SourceType.prototype, "val", {
                get: function () {
                    return this._type;
                },
                set: function (v) {
                    this._type = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SourceType.prototype, "isEntity", {
                get: function () {
                    return this._type == SourceType.ENTITY;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SourceType.prototype, "isBpfAttribute", {
                get: function () {
                    return this._type == SourceType.BPF_ATTRIBUTE;
                },
                enumerable: true,
                configurable: true
            });
            SourceType.ENTITY = 0;
            SourceType.BPF_ATTRIBUTE = 1;
            return SourceType;
        })();
        ProcessDesigner.SourceType = SourceType;
        var ConditionExpression = (function (_super) {
            __extends(ConditionExpression, _super);
            function ConditionExpression() {
                _super.apply(this, arguments);
                this._sourceType = new SourceType();
                this._value = new Value();
                this._processId = -1;
                this._isCategory = false;
                this._stageType = new StageType();
            }
            Object.defineProperty(ConditionExpression.prototype, "sourceType", {
                get: function () {
                    return this._sourceType;
                },
                set: function (value) {
                    this._sourceType = value;
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
            Object.defineProperty(ConditionExpression.prototype, "processId", {
                get: function () {
                    return this._processId;
                },
                set: function (nam) {
                    this._isCategory = false;
                    this._processId = nam;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "stageType", {
                get: function () {
                    return this._stageType;
                },
                set: function (value) {
                    this._stageType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "isCategory", {
                get: function () {
                    return this._isCategory;
                },
                set: function (cat) {
                    this._isCategory = cat;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "isProcessOnly", {
                get: function () {
                    return !this.isCategory && !this.stageType.isActive && !this.stageType.isSelected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConditionExpression.prototype, "stageOperator", {
                get: function () {
                    return this._stageOperator;
                },
                set: function (value) {
                    this._stageOperator = value;
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
                if (!this.sourceType.isBpfAttribute) {
                    result = Validation.Engine.validateField("#attribute", this.attribute, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"), null);
                    status = this.addResult(result) && status;
                    var isUnaryOperator = ProcessDesigner.MetadataProvider.isUnaryOperatorByValue(this.operator);
                    if (!isUnaryOperator) {
                        if (!this._value.isFormula) {
                            if (!this._value.isAttribute) {
                                var id = "#value";
                                var attributeType = this._attribute ? MetadataProxy.getAttributeType(this._attribute, this.entity.get_entityName()) : AttributeType.Unknown;
                                if (attributeType == AttributeType.Owner || attributeType == AttributeType.Lookup || attributeType == AttributeType.Customer || attributeType == AttributeType.Picklist || attributeType == AttributeType.State || attributeType == AttributeType.Status || attributeType == AttributeType.Boolean) {
                                    id = "#valueContainer div:first";
                                }
                                else if (attributeType == AttributeType.DateTime) {
                                    id = "#valueContainer";
                                }
                                result = Validation.Engine.validateAttributeValue(id, this._value.value, this._attribute, this.entity.get_entityName(), Validation.Level.Change);
                                status = this.addResult(result) && status;
                            }
                        }
                        else {
                            this._value.parentAttribute = this.attribute;
                            this._isValid = status;
                            status = this.validateChildren([this._value]) && status;
                            this.addMultipleErrorMessages(this._value.getErrorMessages());
                        }
                    }
                }
                else {
                    if (PBLScope.isEntity()) {
                        result = Validation.Engine.checkLevel("#source", Validation.Level.Min, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Process_Condtion_Not_Allowed"));
                        status = this.addResult(result) && status;
                    }
                    else {
                        if (!this.isCategory) {
                            if (this.processId == -1) {
                                result = Validation.Engine.checkLevel("#value", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"));
                                status = this.addResult(result) && status;
                            }
                            if (this.stageType.isActive || this.stageType.isSelected) {
                                result = Validation.Engine.validateField("#stageValueContainer", this._value.value, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SelectValue"), null);
                                status = this.addResult(result) && status;
                                var stageValid = true;
                                var vals = this._value.value;
                                for (var i = 0; i < vals.length; i++) {
                                    if (vals[i] == "-1") {
                                        stageValid = false;
                                        break;
                                    }
                                }
                                if (!stageValid) {
                                    result = Validation.Engine.checkLevel("#stageValueContainer", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("LOCID_BUSINESSRULE_INVALIDBPFTIP"));
                                    status = this.addResult(result) && status;
                                }
                            }
                        }
                        else {
                            result = Validation.Engine.validateField("#valueContainer", this._value.value, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SelectValue"), null);
                            status = this.addResult(result) && status;
                        }
                    }
                }
                return status;
            };
            ConditionExpression.prototype.clone = function () {
                var self = this;
                var expression = new ConditionExpression();
                expression.sourceType.val = self.sourceType.val;
                expression.attribute = self._attribute;
                expression.entity = BPFConditionActivity.CloneEntity(this.entity);
                expression.operator = self._operator;
                expression.prevStepOperator = self._prevStepOperator;
                expression._isValid = self._isValid;
                expression.attributeType = self._attributeType;
                if (!self._isValid) {
                    expression.addMultipleErrorMessages(self.getErrorMessages());
                }
                if (!self.sourceType.isBpfAttribute) {
                    if (self._value) {
                        expression.value = new Value();
                        expression.value.isAttribute = self._value._isAttribute;
                        expression.value.isFormula = self._value._isFormula;
                        expression.value.isLookup = self._value._isLookup;
                        expression.value.lookupEntityType = self._value._lookupEntityType;
                        expression.value.lookupLabel = self._value._lookupLabel;
                        if (self._value._isFormula && self._value._formula) {
                            expression.value.formula = new ConditionFormula();
                            expression.value.formula.attribute = self._value._formula._attribute;
                            expression.value.formula.leftEntity = BPFConditionActivity.CloneEntity(this.value.formula.leftEntity);
                            expression.value.formula.rightEntity = BPFConditionActivity.CloneEntity(this.value.formula.rightEntity);
                            expression.value.formula.operator = self._value._formula._operator;
                            expression.value.formula.isAttribute = self._value._formula._isAttribute;
                            expression.value.formula.value = self._value._formula._value;
                            expression.value.formula.leftAttributeType = self._value._formula._attributeType;
                        }
                        else if (self._value._value) {
                            expression.value.value = self._value._value.slice(0);
                            if (expression.value.isAttribute) {
                                expression.value.entity = BPFConditionActivity.CloneEntity(this.value.entity);
                            }
                        }
                    }
                }
                else {
                    expression._processId = self._processId;
                    expression._stageType.val = self._stageType.val;
                    expression._isCategory = self._isCategory;
                    expression._value = new Value();
                    expression._value.value = self._value._value.slice(0);
                    expression._stageOperator = self._stageOperator;
                }
                return expression;
            };
            return ConditionExpression;
        })(Validation.ValidModel);
        ProcessDesigner.ConditionExpression = ConditionExpression;
        var BPFConditionActivity = (function (_super) {
            __extends(BPFConditionActivity, _super);
            function BPFConditionActivity() {
                _super.call(this);
                this._isNewlyAdded = false;
                this._isElseBranchCondition = false;
                this._conditionExpression = [];
                if (ProcessDesigner.PBLDesignerControl.isNew()) {
                    this.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_Condition");
                }
                this.addDefaultConditionExpression();
                var self = this;
                _.bindAll(this, 'clone');
                this.clone = _.wrap(this.clone, function (clone) {
                    var cloneObj = clone();
                    BPFConditionActivityClone.extend(this, cloneObj);
                    return cloneObj;
                }).bind(this);
            }
            BPFConditionActivity.prototype.addDefaultConditionExpression = function () {
                if (ProcessDesigner.processStep) {
                    this._conditionExpression = [];
                    var exp = new ConditionExpression();
                    exp.attribute = 'NEW_EXP';
                    exp.entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(ProcessDesigner.processStep);
                    exp.value = new Value();
                    exp.value.isAttribute = false;
                    exp.value.isFormula = false;
                    exp.value.isLookup = false;
                    exp.value.value = [];
                    this._conditionExpression.push(exp);
                }
            };
            BPFConditionActivity.prototype.isNewCondition = function () {
                return this._conditionExpression.length == 1
                    && this._conditionExpression[0].attribute === "NEW_EXP";
            };
            Object.defineProperty(BPFConditionActivity.prototype, "containsElseBranch", {
                get: function () {
                    return this._containsElseBranch;
                },
                set: function (value) {
                    this._containsElseBranch = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFConditionActivity.prototype, "isNewlyAdded", {
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
            Object.defineProperty(BPFConditionActivity.prototype, "isElseBranchCondition", {
                get: function () {
                    return this._isElseBranchCondition;
                },
                set: function (value) {
                    if (this._isElseBranchCondition !== value) {
                        this._isElseBranchCondition = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFConditionActivity.prototype, "conditionExpression", {
                get: function () {
                    return this._conditionExpression;
                },
                set: function (value) {
                    this._conditionExpression = value;
                    if (!this._conditionExpression || this._conditionExpression.length == 0) {
                        this.addDefaultConditionExpression();
                    }
                },
                enumerable: true,
                configurable: true
            });
            BPFConditionActivity.prototype.resetConditionExpressions = function () {
                this._conditionExpression = [];
            };
            BPFConditionActivity.prototype.buildConditionExpression = function (conditionExpression) {
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
                    if (conditionExpression.__class == this.unaryExpressionClass) {
                        condition = this.buildUnaryExpressionCondition(conditionExpression);
                    }
                    else if (conditionExpression.__class == this.binaryExpressionClass) {
                        condition = this.buildBinaryExpressionCondition(conditionExpression);
                    }
                    if (condition != null) {
                        conditionList.push(condition);
                    }
                }
                else {
                    var canBeMrged = false;
                    var process;
                    var stage;
                    if (leftExpression.length == 1 && leftExpression[0].sourceType.isBpfAttribute && rightExpression.length == 1 && rightExpression[0].sourceType.isBpfAttribute) {
                        if (!leftExpression[0].isCategory && !rightExpression[0].isCategory) {
                            var sType1 = leftExpression[0].isProcessOnly;
                            var sType2 = rightExpression[0].isProcessOnly;
                            if (sType1 != sType2) {
                                process = sType1 ? leftExpression[0] : rightExpression[0];
                                stage = sType1 ? rightExpression[0] : leftExpression[0];
                                if (stage.processId == -1) {
                                    canBeMrged = true;
                                }
                            }
                        }
                    }
                    if (canBeMrged) {
                        process.stageType.val = stage.stageType.val;
                        process.stageOperator = stage.operator;
                        process.value.value = process.value.value.slice(0);
                        process.value.value = BpfMetadataProvider.getStageId2IndexList(process.processId, stage.value.value);
                        conditionList.push(process);
                    }
                    else {
                        conditionList = leftExpression.concat(rightExpression);
                    }
                }
                return conditionList;
            };
            BPFConditionActivity.prototype.buildUnaryExpressionCondition = function (conditionExpression) {
                var condition = new ConditionExpression();
                condition.operator = conditionExpression.conditionOperatoroperator;
                condition.attribute = conditionExpression.operand.attributeName;
                if (conditionExpression.operand.type.toString() == "11") {
                    conditionExpression.operand.type = AttributeType.UniqueIdentifier;
                }
                condition.attributeType = conditionExpression.operand.type;
                condition.entity = conditionExpression.operand.entity;
                condition.value = null;
                condition.prevStepOperator = null;
                return condition;
            };
            BPFConditionActivity.prototype.buildBinaryExpressionCondition = function (conditionExpression) {
                var condition = new ConditionExpression();
                var leftStep = conditionExpression.left;
                condition.operator = conditionExpression.conditionOperatoroperator;
                condition.sourceType.val = (leftStep.__class == this.methodCallExpressionClass) ? SourceType.BPF_ATTRIBUTE : SourceType.ENTITY;
                if (!condition.sourceType.isBpfAttribute) {
                    condition.attribute = conditionExpression.left.attributeName;
                }
                condition.attributeType = conditionExpression.left.type;
                condition.entity = conditionExpression.left.entity;
                condition.value = new Value();
                var rightStepArray = conditionExpression.right;
                var rightStep = conditionExpression.right.get_item(0);
                condition.value.isAttribute = (rightStep.__class == this.entityAttributeExpressionClass);
                condition.value.isFormula = (rightStep.__class == this.methodCallExpressionClass);
                condition.value.isLookup = (rightStep.__class == this.lookupExpressionClass);
                var valueArray = [];
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
                        var rightStepvalue = rightStep.staticValue.primitiveValue;
                        var rightStepType = rightStep.staticValue.type;
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
                condition.value.value = valueArray;
                condition.prevStepOperator = null;
                if (condition.sourceType.isBpfAttribute) {
                    condition.isCategory = false;
                    var typ = leftStep.parameters[0].replace(/"/g, '');
                    if (BpfFields[BpfFields.BpfProcess] === typ) {
                        if (condition.value.value.length > 0) {
                            var processId = condition.value.value[0];
                            if (processId.trim().length > 0 && processId.trim().charAt(0) != '{') {
                                processId = "{" + processId + "}";
                            }
                            condition.processId = BpfMetadataProvider.getProcessIndex(processId);
                            condition.value = new Value();
                        }
                        else {
                        }
                    }
                    else if (BpfFields[BpfFields.ActiveStage] === typ) {
                        condition.stageType.val = StageType.Active;
                    }
                    else if (BpfFields[BpfFields.SelectedStage] === typ) {
                        condition.stageType.val = StageType.Selected;
                    }
                    else if (BpfFields[BpfFields.ActiveStageCategory] === typ) {
                        condition.isCategory = true;
                        condition.stageType.val = StageType.Active;
                        condition.value.value = BpfMetadataProvider.getCategoryId2IndexList(condition.value.value);
                    }
                    else if (BpfFields[BpfFields.SelectedStageCategory] === typ) {
                        condition.isCategory = true;
                        condition.stageType.val = StageType.Selected;
                        condition.value.value = BpfMetadataProvider.getCategoryId2IndexList(condition.value.value);
                    }
                    else {
                    }
                }
                return condition;
            };
            BPFConditionActivity.prototype.getFormulaOperator = function (operator) {
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
            BPFConditionActivity.prototype.buildFormula = function (formulaStep) {
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
            BPFConditionActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                var step = (this.processStep);
                var parentStep = (step.get_parent());
                this.containsElseBranch = parentStep.get_containsElseBranch();
                this.unaryExpressionClass = "UnaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.binaryExpressionClass = "BinaryExpression:#Microsoft.Crm.Workflow.Expressions";
                this.entityAttributeExpressionClass = "EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions";
                this.methodCallExpressionClass = "MethodCallExpression:#Microsoft.Crm.Workflow.Expressions";
                this.lookupExpressionClass = "LookupExpression:#Microsoft.Crm.Workflow.Expressions";
                this.conditionExpression = this.buildConditionExpression(step.get_conditionExpression());
                if (step.get_Description()) {
                    this.displayName = step.get_Description();
                }
            };
            BPFConditionActivity.prototype.getYesBranches = function () {
                var activityList = this.getChildActivitiesSorted();
                if (this.getNoBranch() == null) {
                    return activityList;
                }
                if (activityList.length > 0) {
                    activityList.splice(activityList.length - 1, 1);
                }
                return activityList;
            };
            BPFConditionActivity.prototype.getNoBranch = function () {
                var activityList = this.getChildActivitiesSorted();
                for (var i = 0; i < activityList.length; i++) {
                    if (activityList[i].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        return activityList[i];
                    }
                }
                return null;
            };
            BPFConditionActivity.prototype.hasNoBranch = function () {
                var activityList = this.getChildActivitiesSorted();
                for (var i = 0; i < activityList.length; i++) {
                    if (activityList[i].getParentBranchID() == ProcessDesigner.DefaultBranchIndices.NoBranch) {
                        return true;
                    }
                }
                return false;
            };
            BPFConditionActivity.prototype.preparePropertyDetails = function () {
                var self = this;
                var target = {
                    parentStageEntityName: self.parentStageEntityName,
                    _conditionExpression: self._conditionExpression
                };
                return JSON.stringify(target);
            };
            BPFConditionActivity.prototype.PrepareJsonObject = function (conditionStep, workflowStep) {
                var conditionExpression = null;
                conditionExpression = this.generateConditionExpression(workflowStep);
                var conditionBranchStep = new Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep(conditionStep, conditionExpression);
                conditionBranchStep.set_Id("ConditionBranchStep" + (ProcessDesigner.ControlManager.index++));
                conditionBranchStep.set_Description(this.displayName);
                conditionBranchStep.set_workflow(workflowStep);
                var childs = this.getChildActivitiesSorted();
                var branchStepList = [];
                for (var i = 0; i < childs.length; i++) {
                    if (childs[i].getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                        var child = childs[i];
                        while (child.getChildActivitiesSorted() != 0) {
                            conditionBranchStep.appendStep(child.prepareJsonObject(child, workflowStep));
                            if (child.getChildActivitiesSorted() != 0) {
                                child = child.getChildActivitiesSorted()[0];
                            }
                        }
                        conditionBranchStep.appendStep(child.prepareJsonObject(child, workflowStep));
                    }
                }
                return conditionBranchStep;
            };
            BPFConditionActivity.prototype.generateConditionExpression = function (workflowStep) {
                var conditionExpressionList = [];
                if (this._conditionExpression == null) {
                    return null;
                }
                for (var i = 0; i < this._conditionExpression.length; i++) {
                    var condExpr = this._conditionExpression[i];
                    if (condExpr.attribute == "NEW_EXP") {
                        continue;
                    }
                    var isUnaryOperator = ProcessDesigner.MetadataProvider.isUnaryOperatorByValue(condExpr.operator);
                    if (isUnaryOperator && condExpr.operator != null) {
                        var conditionExpression = this.buildUnaryExpression(condExpr, workflowStep);
                        conditionExpressionList.push(conditionExpression);
                    }
                    else if (condExpr.operator != null) {
                        var conditionExpression = this.buildBinaryExpression(condExpr, workflowStep);
                        conditionExpressionList.push(conditionExpression);
                    }
                }
                if (this.isElseBranchCondition) {
                    var childExpr = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, "true", "0");
                    return childExpr;
                }
                else if (this._conditionExpression.length == 1) {
                    return conditionExpressionList[0];
                }
                else if (this._conditionExpression.length > 1) {
                    var condOperator = this._conditionExpression[1].prevStepOperator.toString();
                    conditionExpressionList.reverse();
                    var childConditionOperatoroperator = condOperator;
                    var childLeft = conditionExpressionList.pop();
                    var childRight = [conditionExpressionList.pop()];
                    var childExpression = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, childConditionOperatoroperator, childLeft, childRight);
                    while (conditionExpressionList.length > 0) {
                        var parentConditionOperatoroperator = condOperator;
                        var parentLeft = childExpression;
                        var parentRight = [conditionExpressionList.pop()];
                        var parentExpression = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, parentConditionOperatoroperator, parentLeft, parentRight);
                        childExpression = parentExpression;
                    }
                    return childExpression;
                }
                else {
                    return null;
                }
            };
            BPFConditionActivity.prototype.buildBinaryExpression = function (condExpr, workflowStep) {
                if (condExpr.sourceType.isBpfAttribute) {
                    return this.buildBpfConditionObject(condExpr, workflowStep);
                }
                else {
                    var conditionOperatoroperator = condExpr.operator.toString();
                    var left = this.buildConditionExpressionLeftObject(condExpr, workflowStep);
                    var right = this.buildConditionExpressionRightObject(condExpr, workflowStep);
                    var binaryExpression = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, conditionOperatoroperator, left, right);
                    return binaryExpression;
                }
            };
            BPFConditionActivity.prototype.buildUnaryExpression = function (condExpr, workflowStep) {
                var conditionOperatoroperator = condExpr.operator.toString();
                var operand = this.buildConditionExpressionLeftObject(condExpr, workflowStep);
                var unaryExpression = new Microsoft.Crm.Workflow.Expressions.UnaryExpression(workflowStep, conditionOperatoroperator, operand);
                return unaryExpression;
            };
            BPFConditionActivity.prototype.buildPrimaryEntity = function (workflowStep) {
                var entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(workflowStep);
                entity.set_entityName(ProcessDesigner.ControlManager.primaryEntityName);
                entity.set_parameterName("primaryEntity");
                return entity;
            };
            BPFConditionActivity.prototype.buildConditionExpressionLeftObject = function (condExpr, workflowStep) {
                var attributeType = condExpr.attributeType == undefined ? "0" : condExpr.attributeType.toString();
                var entity;
                if (condExpr.entity) {
                    condExpr.entity.set_workflow(workflowStep);
                    entity = condExpr.entity;
                }
                else {
                    entity = this.buildPrimaryEntity(workflowStep);
                }
                var attributeName = condExpr.attribute;
                var left = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, attributeName);
                left.set_type(attributeType);
                return left;
            };
            BPFConditionActivity.prototype.buildConditionExpressionRightObject = function (condExpr, workflowStep) {
                var rightArray = [];
                if (condExpr.value.isAttribute == true) {
                    rightArray = this.buildExpressionRightForAttributeType(condExpr, workflowStep);
                }
                else if (condExpr.value.isFormula == true) {
                    rightArray = this.buildExpressionRightForFormulaType(condExpr, workflowStep);
                }
                else {
                    var primitiveExpressionList = this.buildExpressionRightForValueType(condExpr, workflowStep);
                    if (condExpr.value.isLookup) {
                        var lookupExpression = new Microsoft.Crm.Workflow.Expressions.LookupExpression(workflowStep, primitiveExpressionList.pop(), 6, condExpr.value.lookupEntityType, condExpr.value.lookupLabel);
                        rightArray.push(lookupExpression);
                    }
                    else {
                        rightArray = primitiveExpressionList;
                    }
                }
                return rightArray;
            };
            BPFConditionActivity.prototype.buildBpfConditionObject = function (condExpr, workflowStep) {
                var expr = null;
                if (condExpr.isCategory) {
                    expr = this.buildBpfStageConditionExpression(condExpr, workflowStep);
                }
                else {
                    expr = this.buildBpfProcessConditionExpression(condExpr, workflowStep);
                    if (!condExpr.isProcessOnly) {
                        var right = this.buildBpfStageConditionExpression(condExpr, workflowStep);
                        expr = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, "2", expr, [right]);
                    }
                }
                return expr;
            };
            BPFConditionActivity.prototype.escapeBpfParameter = function (str) {
                return "\"" + str + "\"";
            };
            BPFConditionActivity.prototype.buildBpfProcessConditionExpression = function (condExpr, workflowStep) {
                var attributeType = BpfFieldType.BpfProcess;
                var attributeName = BpfAttributeID[BpfAttributeID.processid];
                var entity = this.buildPrimaryEntity(workflowStep);
                var leftParameters = [];
                leftParameters[0] = BpfFields[BpfFields.BpfProcess];
                leftParameters[0] = this.escapeBpfParameter(leftParameters[0]);
                leftParameters[1] = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, attributeName);
                var left = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, BpfMetadataProvider.METHOD_CALL_TYPE, leftParameters);
                left.set_type(attributeType);
                var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, BpfMetadataProvider.getIndex2ProcessID(condExpr.processId), "" + attributeType);
                var conditionOperatoroperator = condExpr.operator.toString();
                var binaryExpression = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, conditionOperatoroperator, left, [right]);
                return binaryExpression;
            };
            BPFConditionActivity.prototype.buildBpfStageConditionExpression = function (condExpr, workflowStep) {
                var attributeType = BpfFieldType.Stage;
                var attributeName = BpfAttributeID[BpfAttributeID.stageid];
                if (condExpr.isCategory) {
                    attributeType = BpfFieldType.StageCategory;
                    attributeName = BpfAttributeID[BpfAttributeID.processid];
                }
                var entity = this.buildPrimaryEntity(workflowStep);
                var leftParameters = [];
                if (condExpr.stageType.isActive) {
                    leftParameters[0] = BpfFields[BpfFields.ActiveStage];
                    if (condExpr.isCategory) {
                        leftParameters[0] = BpfFields[BpfFields.ActiveStageCategory];
                    }
                }
                else if (condExpr.stageType.isSelected) {
                    leftParameters[0] = BpfFields[BpfFields.SelectedStage];
                    if (condExpr.isCategory) {
                        leftParameters[0] = BpfFields[BpfFields.SelectedStageCategory];
                    }
                }
                else {
                }
                leftParameters[0] = this.escapeBpfParameter(leftParameters[0]);
                leftParameters[1] = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, attributeName);
                var left = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, BpfMetadataProvider.METHOD_CALL_TYPE, leftParameters);
                left.set_type(attributeType);
                var rightArray = [];
                for (var i = 0; i < condExpr.value.value.length; i++) {
                    var id = '';
                    if (condExpr.isCategory) {
                        id = BpfMetadataProvider.getCategoryIndex2ID(condExpr.value.value[i]);
                    }
                    else {
                        id = BpfMetadataProvider.getStageIndex2ID(condExpr.processId, parseInt(condExpr.value.value[i]));
                    }
                    var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, id, "" + attributeType);
                    rightArray.push(right);
                }
                var conditionOperatoroperator = condExpr.operator.toString();
                if (!condExpr.isCategory) {
                    conditionOperatoroperator = condExpr.stageOperator.toString();
                }
                var binaryExpression = new Microsoft.Crm.Workflow.Expressions.BinaryExpression(workflowStep, conditionOperatoroperator, left, rightArray);
                return binaryExpression;
            };
            BPFConditionActivity.prototype.buildExpressionRightForLookupType = function (condExpr, primitiveExpression) {
                var right = new ProcessDesigner.LookupExprJson();
                right.type = condExpr.operator;
                right.entityType = condExpr.value.lookupEntityType;
                right.label = condExpr.value.lookupLabel;
                right.staticValue = primitiveExpression;
                return right;
            };
            BPFConditionActivity.prototype.buildExpressionRightForValueType = function (condExpr, workflowStep) {
                var rightArray = [];
                var flag = $.isArray(condExpr.value.value);
                if (flag == true) {
                    var initialType = "";
                    for (var i = 0; i < condExpr.value.value.length; i++) {
                        if (condExpr.value.isLookup == true) {
                            initialType = AttributeType.UniqueIdentifier.toString();
                        }
                        else {
                            initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                        }
                        var primitiveValue = condExpr.value.value[i];
                        var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                        rightArray.push(right);
                    }
                }
                else {
                    var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                    var primitiveValue = condExpr.value.value.toString();
                    var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                    rightArray.push(right);
                }
                return rightArray;
            };
            BPFConditionActivity.prototype.buildExpressionRightForAttributeType = function (condExpr, workflowStep) {
                var rightArray = [];
                for (var i = 0; i < condExpr.value.value.length; i++) {
                    var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                    var entity;
                    if (condExpr.value.entity) {
                        condExpr.entity.set_workflow(workflowStep);
                        entity = condExpr.value.entity;
                    }
                    else {
                        entity = this.buildPrimaryEntity(workflowStep);
                    }
                    var attributeName = condExpr.value.value[i];
                    var right = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, attributeName);
                    right.set_type(initialType);
                    rightArray.push(right);
                }
                return rightArray;
            };
            BPFConditionActivity.prototype.buildExpressionRightForFormulaType = function (condExpr, workflowStep) {
                var rightArray = [];
                var leftMethEntity;
                var rightMethEntExprEntity;
                if (condExpr.entity) {
                    condExpr.entity.set_workflow(workflowStep);
                }
                if (condExpr.value.formula.leftEntity) {
                    leftMethEntity = condExpr.value.formula.leftEntity;
                }
                else {
                    leftMethEntity = this.buildPrimaryEntity(workflowStep);
                }
                var leftMethAttributeName = condExpr.value.formula.attribute;
                var leftMethEnt = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(leftMethEntity, leftMethAttributeName);
                var leftEntityInitialType = condExpr.value.formula.leftAttributeType == undefined ? "0" : condExpr.value.formula.leftAttributeType.toString();
                leftMethEnt.set_type(leftEntityInitialType);
                var leftMethExprParam = [];
                leftMethExprParam.push(leftMethEnt);
                var leftMethCallExpMethod = "0";
                var leftMethCallExpParameters = leftMethExprParam;
                var leftMethExpr = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, leftMethCallExpMethod, leftMethCallExpParameters);
                var rightMethExprParam = [];
                if (condExpr.value.formula.isAttribute == true) {
                    if (condExpr.entity) {
                        condExpr.entity.set_workflow(workflowStep);
                    }
                    if (condExpr.value.formula.rightEntity) {
                        rightMethEntExprEntity = condExpr.value.formula.rightEntity;
                    }
                    else {
                        rightMethEntExprEntity = this.buildPrimaryEntity(workflowStep);
                    }
                    var rightMethEntExprAttributeName = condExpr.value.formula.value;
                    var rightMethEntExpr = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(rightMethEntExprEntity, rightMethEntExprAttributeName);
                    var rightEntityInitialType = condExpr.value.formula.rightAttributeType == undefined ? "0" : condExpr.value.formula.rightAttributeType.toString();
                    rightMethEntExpr.set_type(rightEntityInitialType);
                    rightMethExprParam.push(rightMethEntExpr);
                }
                else {
                    if (parseInt(condExpr.value.formula.leftAttributeType) == AttributeType.DateTime) {
                        var timeSpan = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, parseInt(condExpr.value.formula.value), 0, 0);
                        var rightMethTimeSpanExpr = new Microsoft.Crm.Workflow.Expressions.TimeSpanExpression(workflowStep, timeSpan);
                        rightMethExprParam.push(rightMethTimeSpanExpr);
                    }
                    else {
                        var rightMethPrimExprType = condExpr.value.formula.rightAttributeType == undefined ? "0" : condExpr.value.formula.rightAttributeType.toString();
                        var rightMethPrimExprPrimitiveValue = condExpr.value.formula.value;
                        var rightMethPrimExpr = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, rightMethPrimExprPrimitiveValue, rightMethPrimExprType);
                        rightMethPrimExpr.set_type(rightMethPrimExprType);
                        rightMethExprParam.push(rightMethPrimExpr);
                    }
                }
                var rightMethExprMethod = "0";
                var rightMethExprParameters = rightMethExprParam;
                var rightMethExpr = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, rightMethExprMethod, rightMethExprParameters);
                var paramArray = [];
                paramArray.push(parseInt(condExpr.value.formula.operator.toString()));
                paramArray.push(leftMethExpr);
                paramArray.push(rightMethExpr);
                var rightMethod = "3";
                var rightParameters = paramArray;
                var right = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, rightMethod, rightParameters);
                rightArray.push(right);
                return rightArray;
            };
            BPFConditionActivity.prototype._getErrorCount = function () {
                return this.errCount + this.getChildrenErrorCount(this._conditionExpression);
            };
            BPFConditionActivity.prototype._validateActivity = function () {
                var self = this;
                var status = true;
                var result = null;
                var condExprns = this._conditionExpression;
                if (condExprns.length == 0) {
                    result = Validation.Engine.checkLevel("#conditionExpression .err1", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_CondtionExpression_NotEmpty"));
                    status = this.addResult(result) && status;
                }
                else {
                    status = this.validateChildrenVM(condExprns) && status;
                }
                result = Validation.Engine.validateField("#conditionExpression .err2", self, function (self) {
                    var children = self.getChildActivitiesSorted();
                    var yesBranchFound = false;
                    if (children.length > 1) {
                        yesBranchFound = true;
                    }
                    else if (children.length == 1) {
                        yesBranchFound = (children[0].getParentBranchID() == 1);
                    }
                    else {
                        yesBranchFound = false;
                    }
                    if (!yesBranchFound) {
                        return false;
                    }
                    return true;
                }, Validation.Level.Save, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Condtion_Action"), null);
                status = this.addResult(result) && status;
                return status;
            };
            BPFConditionActivity.prototype.clearErrorMessages = function () {
                _super.prototype.clearErrorMessages.call(this);
                for (var i = 0; i < this._conditionExpression.length; i++) {
                    var tempStatus = this._conditionExpression[i].clearErrorMessages();
                    this._conditionExpression[i].isValid = true;
                }
            };
            BPFConditionActivity.prototype.getCloneOfActivity = function () {
                var newConditionActivity = new BPFConditionActivity();
                newConditionActivity.parentStageEntityName = this.parentStageEntityName;
                newConditionActivity.displayName = this.displayName;
                newConditionActivity.unaryExpressionClass = this.unaryExpressionClass;
                newConditionActivity.binaryExpressionClass = this.binaryExpressionClass;
                newConditionActivity.entityAttributeExpressionClass = this.entityAttributeExpressionClass;
                newConditionActivity.methodCallExpressionClass = this.methodCallExpressionClass;
                newConditionActivity.lookupExpressionClass = this.lookupExpressionClass;
                newConditionActivity.displayName = this.displayName;
                newConditionActivity.isNewlyAdded = this.isNewlyAdded;
                var newConditionExpressions = [];
                var self = this;
                jQuery.each(this._conditionExpression, function (index, expression) {
                    var newExpression = this.clone();
                    newConditionExpressions.push(newExpression);
                });
                newConditionActivity.conditionExpression = newConditionExpressions;
                return newConditionActivity;
            };
            BPFConditionActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        return [ProcessDesigner.PblActivityType.setAttributeValueStep, ProcessDesigner.PblActivityType.condition, ProcessDesigner.PblActivityType.setDefaultValueStep, ProcessDesigner.PblActivityType.setDisplayModeStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setMessageStep, ProcessDesigner.PblActivityType.setVisibilityStep, ProcessDesigner.PblActivityType.setSuggestionStep];
                    case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                        return [ProcessDesigner.PblActivityType.setAttributeValueStep, ProcessDesigner.PblActivityType.setDefaultValueStep, ProcessDesigner.PblActivityType.setDisplayModeStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setMessageStep, ProcessDesigner.PblActivityType.setVisibilityStep, ProcessDesigner.PblActivityType.setSuggestionStep];
                    default:
                        return [];
                }
                ;
            };
            BPFConditionActivity.generateJson = function (activities, workflowObj) {
                var noBranch;
                var clonedNoBranch;
                var PBLConditionActivities = [];
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                        if (activities[i].conditionExpression && (activities[i].conditionExpression.length == 0 || activities[i].conditionExpression.primitiveValue)) {
                            activities[i].conditionExpression = null;
                        }
                        PBLConditionActivities.push(activities[i]);
                    }
                }
                var conditionActivities = [];
                for (var i = 0; i < PBLConditionActivities.length; i++) {
                    conditionActivities.push(PBLConditionActivities[i]);
                    if (PBLConditionActivities[i].hasNoBranch()) {
                        noBranch = PBLConditionActivities[i].getNoBranch();
                        if (noBranch.getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                            clonedNoBranch = noBranch.getCloneOfActivity();
                            clonedNoBranch.setParentActivityID(noBranch.getParentActivityID());
                            var defaultConditionActivity = new BPFConditionActivity();
                            defaultConditionActivity.setActivityID("ExplicitConditionBranchStep" + i);
                            var defaultConditionExpression = [];
                            defaultConditionActivity.conditionExpression = defaultConditionExpression;
                            defaultConditionActivity.isElseBranchCondition = true;
                            defaultConditionActivity.setParentActivityID(PBLConditionActivities[i].getActivityID());
                            defaultConditionActivity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.NoBranch);
                            noBranch.setParentActivityID(defaultConditionActivity.getActivityID());
                            noBranch.setParentBranchID(ProcessDesigner.DefaultBranchIndices.YesBranch);
                            conditionActivities.push(defaultConditionActivity);
                        }
                    }
                }
                try {
                    workflowObj = this.prepareJsonforCondition(conditionActivities, workflowObj);
                }
                finally {
                    if (clonedNoBranch && noBranch) {
                        noBranch.setParentActivityID(clonedNoBranch.getParentActivityID());
                        noBranch.setParentBranchID(clonedNoBranch.getParentBranchID());
                    }
                }
                return workflowObj;
            };
            BPFConditionActivity.prepareJsonforCondition = function (parentConditionActivities, workflowObj) {
                var conditionStep = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep(workflowObj);
                conditionStep.set_Id("ConditionStep" + (ProcessDesigner.ControlManager.index++));
                conditionStep.set_Description("");
                conditionStep.set_workflow(workflowObj);
                for (var i = 0; i < parentConditionActivities.length; i++) {
                    conditionStep.appendStep(parentConditionActivities[i].PrepareJsonObject(conditionStep, workflowObj));
                }
                conditionStep.set_containsElseBranch(parentConditionActivities[0].containsElseBranch);
                workflowObj.appendStep(conditionStep);
                return workflowObj;
            };
            BPFConditionActivity.overrideWorkflowObjectModelMethods = function () {
                WorkflowObjectModel.ConditionBranchStep.prototype.get_conditionBranchDisplayMode = function () {
                    var condition = this.get_parent();
                    if (this.conditionExpression && this.conditionExpression.primitiveValue && this != condition.steps.get_item(0) && this == condition.steps.get_item(condition.steps.get_Count() - 1)) {
                        return WorkflowObjectModel.ConditionBranchDisplayMode.ELSE;
                    }
                    else {
                        if (this === condition.steps.get_item(0)) {
                            return WorkflowObjectModel.ConditionBranchDisplayMode.IF;
                        }
                        else {
                            return WorkflowObjectModel.ConditionBranchDisplayMode.elseIf;
                        }
                    }
                };
            };
            BPFConditionActivity.CloneEntity = function (entityToCopy) {
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
            return BPFConditionActivity;
        })(ProcessDesigner.ConditionActivity);
        ProcessDesigner.BPFConditionActivity = BPFConditionActivity;
        var BPFConditionActivityClone = (function (_super) {
            __extends(BPFConditionActivityClone, _super);
            function BPFConditionActivityClone(clonedFrom_) {
                _super.call(this);
                this._errorCountCB = null;
                this.clonedFrom = clonedFrom_;
            }
            BPFConditionActivityClone.prototype.getParent = function () {
                return this.clonedFrom.getParent();
            };
            BPFConditionActivityClone.prototype.getErrorCount = function () {
                if (this._errorCountCB) {
                    return this._errorCountCB();
                }
                else {
                    return this.clonedFrom.getErrorCount();
                }
            };
            BPFConditionActivityClone.extend = function (clonedFrom_, clonedTo_) {
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
            return BPFConditionActivityClone;
        })(BPFConditionActivity);
        ProcessDesigner.BPFConditionActivityClone = BPFConditionActivityClone;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="BPFRootActivity.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the root activity of the business process
// </summary>
//
//---------------------------------------------------------------------------------------------
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="../../common/bpfactivitytype.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BPFRootActivity = (function (_super) {
            __extends(BPFRootActivity, _super);
            function BPFRootActivity() {
                _super.call(this, ProcessDesigner.BPFActivityType.root);
            }
            BPFRootActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.BPFActivityType.root);
                this.addNewItem(ProcessDesigner.BPFActivityType.root);
            };
            BPFRootActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
            };
            return BPFRootActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.BPFRootActivity = BPFRootActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the stage activity of the business process
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
        var BPFStageActivity = (function (_super) {
            __extends(BPFStageActivity, _super);
            function BPFStageActivity() {
                _super.call(this, ProcessDesigner.BPFActivityType.stage);
                this.stageId = null;
                this.nextStageId = null;
                this.stageCategory = null;
                this.steps = [];
                this.count = 0;
                this._entityName = "";
                this._relationships = [];
                this._description = "";
                this._name = "";
                this._category = "";
                this._name = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStageActivity_StageName");
                this.stageId = Utility.newGuid();
            }
            BPFStageActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.BPFActivityType.stage);
                this.addNewItem(ProcessDesigner.BPFActivityType.stage);
            };
            Object.defineProperty(BPFStageActivity.prototype, "entityName", {
                get: function () {
                    return this._entityName;
                },
                set: function (value) {
                    this._entityName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStageActivity.prototype, "relationships", {
                get: function () {
                    return this._relationships;
                },
                set: function (value) {
                    this._relationships = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStageActivity.prototype, "description", {
                get: function () {
                    return this._description;
                },
                set: function (value) {
                    this._description = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStageActivity.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BPFStageActivity.prototype, "category", {
                get: function () {
                    return this._category;
                },
                set: function (value) {
                    this._category = value;
                },
                enumerable: true,
                configurable: true
            });
            BPFStageActivity.prototype.setNewSteps = function (NewSteps) {
                this.steps = NewSteps;
            };
            BPFStageActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                var step = (this.processStep);
                var workflow = step.get_workflow();
                this.entityName = workflow.get_primaryEntityName();
                this.name = step.get_Description();
                this.category = step.get_stageCategory();
                this.count = step.get_Steps().get_Count();
            };
            BPFStageActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    _entityName: this.entityName,
                    _name: this.name,
                    _category: this.category,
                    _description: this.description,
                    count: this.count
                };
                return JSON.stringify(target);
            };
            BPFStageActivity.prototype.PrepareJsonObject = function () {
                var entObj = new ProcessDesigner.EntityStepJson();
                entObj.description = this.entityName;
                var stageObj = new ProcessDesigner.StageStepJson();
                stageObj.id = this.getActivityID();
                stageObj.description = this.name;
                stageObj.name = this.name;
                stageObj.stageId = this.stageId;
                stageObj.nextStageId = this.nextStageId;
                stageObj.stageCategory = this.stageCategory;
                var stageStepList = [];
                for (var i = 0; i < this.steps.length; i++) {
                    var stepObj = this.steps[i].PrepareJsonObject();
                    stageStepList.push(stepObj);
                }
                stageObj.steps = new Object({ list: stageStepList });
                var stageStepLabelList = [];
                var labDetails = new Object({ labelId: this.stageId, languageCode: null, description: this.name });
                stageStepLabelList.push(labDetails);
                stageObj.stepLabels = new Object({ list: stageStepLabelList });
                var entityStepList = [];
                entityStepList.push(stageObj);
                entObj.steps = new Object({ list: entityStepList });
                var entityStepLabelList = [];
                entObj.stepLabels = new Object({ list: entityStepLabelList });
                entObj.relationshipName = null;
                entObj.attributeName = null;
                entObj.isClosedLoop = false;
                return entObj;
            };
            BPFStageActivity.generateJson = function (activities, workflowObj) {
                var BPFStageActivities = [];
                for (var i = 0; i < activities.length; i++) {
                    if (activities[i].getActivityTypeID() == "BPFStageActivity") {
                        BPFStageActivities.push(activities[i]);
                    }
                }
                for (var i = 0; i < BPFStageActivities.length; i++) {
                    var entObj = BPFStageActivities[i].PrepareJsonObject();
                    workflowObj.steps.list.push(entObj);
                }
                return workflowObj;
            };
            BPFStageActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        return [ProcessDesigner.BPFActivityType.stage, ProcessDesigner.BPFActivityType.condition];
                    case GenericWorkflowDesigner.SlotType.TileHolder:
                        return [ProcessDesigner.BPFActivityType.step];
                    default:
                        return _super.prototype.getAllowedDependentActivityTypes.call(this, slotType);
                }
            };
            return BPFStageActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.BPFStageActivity = BPFStageActivity;
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
                this.StageActivityTemplate = "<span class=\"tileTitle\" title= \"<%= emptyTitleText %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis\" > <%= emptyTitleText  %></span></div><span class=\"tileInner ellipsis\"><%= stageName %></span></span></span> ";
                this.entityName = model.entityName;
                this.stageName = model.name;
            }
            BPFStageActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["stageName"] = this.stageName;
                result["emptyTitleText"] = CommonTypes.Types.String.isNullOrEmpty(this.entityName) ? this.entityName : Xrm.Internal.getEntityDisplayName(this.entityName);
                result["emptyTileTemplate"] = this.StageActivityTemplate;
                return result;
            };
            return BPFStageActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BPFStageActivityTileInformation = BPFStageActivityTileInformation;
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
                this.StepActivityTemplate = "<span class=\"tileTitle\" title= \"<%= emptyTitleText %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis\" > <%= emptyTitleText  %></span></div><span class=\"tileInner ellipsis\"><%= stageName %></span></span></span> ";
                this.attributeName = model.attributeName;
                this.stepName = model.stepName;
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
// -----------------------------------------------------------------------
// <copyright file="BranchActivityTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var BranchActivityTileInformation = (function (_super) {
            __extends(BranchActivityTileInformation, _super);
            function BranchActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
            }
            BranchActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["tileclass"] = "conditionTile";
                result["emptyTitleText"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionActivityTileInfo");
                return result;
            };
            return BranchActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.BranchActivityTileInformation = BranchActivityTileInformation;
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
/// <reference path="BranchActivityTileInformation.ts"/>
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
                    case ProcessDesigner.BPFActivityType.stage:
                        return new ProcessDesigner.BPFStageActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.BPFActivityType.root:
                        return new ProcessDesigner.BPFRootActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.BPFActivityType.condition:
                        return new ProcessDesigner.ConditionActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.BPFActivityType.step:
                        return new ProcessDesigner.BPFStepActivityTileInformation(activityModel, specificItemId);
                    default:
                        return _super.prototype.GetTileInformationForActivityModel.call(this, activityModel, specificItemId);
                }
            };
            BPFTileInformationFactory.prototype.GetDataUriforImagePath = function (imagePath) {
                return ProcessDesigner.PBLDesignerControl.dataBag.resources.getImageresource(imagePath);
            };
            return BPFTileInformationFactory;
        })(ProcessDesigner.ProcessTileInformationFactory);
        ProcessDesigner.BPFTileInformationFactory = BPFTileInformationFactory;
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
                this.itemTemplate = _.template(" <button type=\"submit\" tabindex=\"-1\" class=\"activityOptionTitle\" title= \"<%- Tooltip %>\"><div class=\"wrapString truncateString\"><%= Title %></div></button> ");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("mousedown", function (event) {
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
                var tileId;
                switch ($(event.currentTarget).attr("id").toString().toLowerCase()) {
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddCondition.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddCondition;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["condition"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddAcceptcondition.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddAcceptcondition;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["acceptCondition"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowrecommentdation.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddShowrecommentdation;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setSuggestion"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddDisplayMode.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddDisplayMode;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setDisplayMode"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowerror.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddShowerror;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setMessage"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setAttributeValue"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetdefaultfield.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddSetdefaultfield;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setDefaultValue"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetbusinessrequired.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddSetbusinessrequired;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setFieldRequiredLevel"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetvisibility.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddSetvisibility;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setVisibility"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddCustomJavascript.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddCustomJavascript;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["customJavascript"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCondition.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteCondition;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["condition"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteAcceptCondition.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.AddAcceptcondition;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["acceptCondition"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowRecommendations.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowRecommendations;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setSuggestion"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteDisplayMode.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteDisplayMode;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setDisplayMode"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowError.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowError;
                            var tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setMessage"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setAttributeValue"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetDefaultField.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetDefaultField;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setDefaultValue"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetBusinessRequired.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetBusinessRequired;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setFieldRequiredLevel"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetVisibility.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetVisibility;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["setVisibility"].$el.attr('id');
                        }
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCustomJavascript.toLowerCase():
                        {
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.PasteCustomJavascript;
                            tileId = GenericWorkflowDesigner.BaseTileInformation.tileObjects["customJavascript"].$el.attr('id');
                        }
                        break;
                    default:
                }
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    if (!(ProcessDesigner.PblActivityType.isActionActivityType(GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities()[0].getActivityTypeID()) &&
                        GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities()[0].isInRecommendationTile())) {
                        var targetDiv = $(event.currentTarget).attr('data-activityID').toString();
                        tileId = targetDiv;
                    }
                }
                $.event.trigger('AddButton', [tileId]);
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
                    $("#canvas").find(".tile").children(".selected").removeClass("selected");
                    $('#canvas').children("div .slot").first().focus();
                }
                $(".ui-droppable.slotInsertVertical.hoverOverDroppable").keydown(function (event) {
                    if (event.keyCode == 40) {
                        var activity, childActivity;
                        activity = GenericWorkflowDesigner.currentModel;
                        if (activity.hasNoBranch) {
                            childActivity = activity.getNoBranch();
                        }
                        $("#" + childActivity.id + ".slot").focus();
                        ProcessDesigner.ControlManager.NavigateToNextTile(childActivity);
                    }
                    if (event.keyCode == 38) {
                        var activity, childActivity;
                        activity = GenericWorkflowDesigner.currentModel;
                        $("#" + activity.id + ".slot").children(".tile").children().addClass("selected");
                        $("#" + activity.id + ".slot").focus();
                        event.stopImmediatePropagation();
                    }
                    event.stopPropagation();
                });
                $(".ui-droppable.slotInsertHorizontal.hoverOverDroppable").keydown(function (event) {
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39) || (event.keyCode == 37)) {
                        var activity, childActivity;
                        activity = GenericWorkflowDesigner.currentModel;
                        $("#" + activity.id + ".slot").children(".tile").children().addClass("selected");
                        $("#" + activity.id + ".slot").focus();
                    }
                    if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37) || (event.keyCode == 39)) {
                        var activity, childActivities;
                        activity = GenericWorkflowDesigner.currentModel;
                        if (activity.getActivityTypeID() === ProcessDesigner.BPFActivityType.condition) {
                            childActivities = activity.getYesBranches();
                        }
                        else {
                            childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
                        }
                        if (childActivities.length > 0) {
                            $("#" + childActivities[0].id + ".slot").focus();
                            ProcessDesigner.ControlManager.NavigateToNextTile(childActivities[0]);
                        }
                        event.stopImmediatePropagation();
                    }
                    event.stopPropagation();
                });
            };
            return AddActivityListSubView;
        })(Backbone.View);
        ProcessDesigner.AddActivityListSubView = AddActivityListSubView;
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
                $(".toolbarItemContainer").on("mouseleave", function (event) {
                    event.stopPropagation();
                    self.$el.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
                    self.$el.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
                    var ActivityListContainer = self.$el.parent().find(".activity-list-container");
                    if (ActivityListContainer.length == 1) {
                        ActivityListContainer.remove();
                        self.$el.focus();
                    }
                });
                $(".toolbarItemContainer").on("focusin", function (event) {
                    if ($(event.target).attr("id") != "Add" && !$(event.target).hasClass("activity-list-title") && !$(event.target).hasClass("activity-list-listitem")) {
                        event.stopPropagation();
                        self.$el.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
                        self.$el.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
                        var ActivityListContainer = self.$el.parent().find(".activity-list-container");
                        ActivityListContainer.remove();
                    }
                });
            };
            AddActivityListView.prototype.render = function () {
                var div = $('<div class="activity-list-container"></div>');
                var listUl = $('<ul class="activity-list"></ul>');
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
                        var categoryUl = $("<ul class='activity-list-category'></ul>");
                        var titleSpan = $("<span class='activity-list-title truncateString' tabindex='" + GenericWorkflowDesigner.Settings.tabIndexValue + "'>" + group.key + "</span>");
                        $(categoryUl).append(titleSpan);
                        $(listUl).append(categoryUl);
                        for (var j = 0; j < group.value.length; j++) {
                            var activityName = group.value[j].properties["name"];
                            var addCommandText = ProcessDesigner.MetadataProvider.getLocalizedString("GenericWorkflowDesignerControl_Add") + " " + activityName;
                            var templateItems = [];
                            templateItems["addCommandText"] = addCommandText;
                            templateItems["addCommandTooltip"] = group.value[j].properties["addcommandtooltip"];
                            var listLi = $("<li class='activity-list-listitem' id='Add" + group.value[j].properties["activitytypeid"] + "Command' tabindex='-1'></li>");
                            var elem1 = new ProcessDesigner.AddActivityListSubView(templateItems, $(listLi));
                            elem1.render();
                            $(categoryUl).append(elem1.el);
                        }
                    }
                    $(".activity-list-title").first().focus();
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
            }
            BPFPropertyViewFactory.prototype.createProperty = function (currentModel) {
                var nodeType = currentModel.getActivityTypeID();
                var pageBaseUrl = this.getPropertyPageBaseUrl(nodeType);
                switch (nodeType) {
                    case ProcessDesigner.BPFActivityType.stage:
                        return new ProcessDesigner.StagePropertyView(currentModel, pageBaseUrl);
                    case ProcessDesigner.BPFActivityType.condition:
                        return new ProcessDesigner.BranchPropertyView(currentModel, pageBaseUrl);
                    case ProcessDesigner.BPFActivityType.step:
                        return new ProcessDesigner.StepPropertyView(currentModel, pageBaseUrl);
                    default:
                        return null;
                }
            };
            BPFPropertyViewFactory.prototype.getPropertyPageBaseUrl = function (pageType) {
                var propertyPageBaseUrl;
                switch (pageType) {
                    case ProcessDesigner.BPFActivityType.stage:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.BPFActivityType.stage].properties["propertypageurl"];
                        break;
                    case ProcessDesigner.BPFActivityType.condition:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.BPFActivityType.condition].properties["propertypageurl"];
                        break;
                    case ProcessDesigner.BPFActivityType.step:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.BPFActivityType.step].properties["propertypageurl"];
                        break;
                }
                return propertyPageBaseUrl;
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
            return PropertyHtmlPageName;
        })();
        ProcessDesigner.PropertyHtmlPageName = PropertyHtmlPageName;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="BranchPropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
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
                var ControlRoot = MscrmControls;
                if (ControlRoot.ConditionPropertyPage) {
                }
                MscrmControls.ProcessDesigner.Validation.Errors.propertyTabUnloaded();
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
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
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
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
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
            return StepPropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.StepPropertyView = StepPropertyView;
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
                this.stepTemplate = _.template(" <span class=\"tileTitle\" title= \"<%= Title %>\"><%= Title %></span> ");
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
            };
            return StepView;
        })(Backbone.View);
        ProcessDesigner.StepView = StepView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLToolBarItemView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var toolBarItem = GenericWorkflowDesigner.ToolBarItem;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PBLToolBarItemView = (function (_super) {
            __extends(PBLToolBarItemView, _super);
            function PBLToolBarItemView(model) {
                _super.call(this, model);
            }
            PBLToolBarItemView.prototype.initialize = function () {
            };
            PBLToolBarItemView.prototype.render = function () {
                _super.prototype.render.call(this);
                return this.$el;
            };
            return PBLToolBarItemView;
        })(GenericWorkflowDesigner.ToolBarItemview);
        ProcessDesigner.PBLToolBarItemView = PBLToolBarItemView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="PBLToolBarView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var ToolBarItem = GenericWorkflowDesigner.ToolBarItem;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PBLToolBarView = (function (_super) {
            __extends(PBLToolBarView, _super);
            function PBLToolBarView() {
                _super.call(this);
                this.cleanUp();
                this.newItemArray = new Array();
                this.PrepareItem();
                this.PrepareItemViews();
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, this.executeCommand, null);
            }
            PBLToolBarView.prototype.initialize = function () {
            };
            PBLToolBarView.prototype.render = function () {
                _super.prototype.render.call(this);
                return this.$el;
            };
            PBLToolBarView.prototype.PrepareItemViews = function () {
                var _this = this;
                _super.prototype.PrepareItemViews.call(this);
                this.newItemArray.forEach(function (item) {
                    var itemView = new ProcessDesigner.PBLToolBarItemView(item);
                    _this.itemViewArray.push(itemView);
                });
            };
            PBLToolBarView.prototype.PrepareItem = function () {
                _super.prototype.PrepareItems.call(this);
            };
            PBLToolBarView.prototype.executeCommand = function (event) {
                var commandType = event.currentTarget.getAttribute("id");
                var handlerFactory = new ProcessDesigner.CommandHandlerFactory();
                return handlerFactory.GetCommandHandler(commandType).execute();
                ;
            };
            PBLToolBarView.prototype.cleanUp = function () {
                GenericWorkflowDesigner.EventManager.unsubscribe(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, this.executeCommand);
            };
            return PBLToolBarView;
        })(GenericWorkflowDesigner.ToolBarView);
        ProcessDesigner.PBLToolBarView = PBLToolBarView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="PblActivityDropHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblActivityDropController = (function (_super) {
            __extends(PblActivityDropController, _super);
            function PblActivityDropController() {
                _super.apply(this, arguments);
            }
            PblActivityDropController.prototype.dropLibraryElement = function (libraryElement) {
                var activityType = libraryElement.get("ActivityTypeID");
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(activityType);
                if (ProcessDesigner.PblActivityType.isActionActivityType(activityType)) {
                    activity.isNewlyAdded = true;
                    switch (activityType) {
                        case ProcessDesigner.PblActivityType.setAttributeValueStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetFieldValue");
                            break;
                        case ProcessDesigner.PblActivityType.setDefaultValueStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetDefaultValue");
                            break;
                        case ProcessDesigner.PblActivityType.setMessageStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_ShowErrorMessage");
                            break;
                        case ProcessDesigner.PblActivityType.setVisibilityStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetVisibility");
                            break;
                        case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetBusinessRequired");
                            break;
                        case ProcessDesigner.PblActivityType.setDisplayModeStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_LockOrUnlockField");
                            break;
                        case ProcessDesigner.PblActivityType.customJavascriptStep:
                            activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_CustomJavascript");
                            break;
                    }
                }
                else if (activityType == ProcessDesigner.PblActivityType.setSuggestionStep) {
                    activity.isNewlyAdded = true;
                    activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DefineRecommendation");
                }
                else {
                    activity.isNewlyAdded = true;
                    activity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_Condition");
                }
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                return dropHandler.drop(component);
            };
            return PblActivityDropController;
        })(GenericWorkflowDesigner.ActivityDropController);
        ProcessDesigner.PblActivityDropController = PblActivityDropController;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="PblDragDropValidator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PblActivityDropHandlerFactory = (function () {
            function PblActivityDropHandlerFactory() {
            }
            PblActivityDropHandlerFactory.prototype.createDropActivityController = function (slot) {
                return new ProcessDesigner.PblActivityDropController(slot);
            };
            return PblActivityDropHandlerFactory;
        })();
        ProcessDesigner.PblActivityDropHandlerFactory = PblActivityDropHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// <copyright file="PblDragDropValidator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PblDragDropValidator = (function () {
            function PblDragDropValidator() {
                this.conditionLibraryElementId = "libraryElementcondition";
                this.setMessageStepLibraryElementId = "libraryElementsetMessage";
                this.setDisplayModeStepLibraryElementId = "libraryElementsetDisplayMode";
                this.setVisibilityStepLibraryElementId = "libraryElementsetVisibility";
                this.setFieldRequiredLevelStepLibraryElementId = "libraryElementsetFieldRequiredLevel";
                this.setAttributeValueStepLibraryElementId = "libraryElementsetAttributeValue";
                this.setDefaultValueStepLibraryElementId = "libraryElementsetDefaultValue";
                this.setSuggestionStepLibraryElementId = "libraryElementsetSuggestion";
                this.customJavascriptStepLibraryElementId = "libraryElementcustomJavascript";
            }
            PblDragDropValidator.prototype.isValidDropOnCanvas = function (targetElementId, draggedElementId, isHitArea) {
                var targetActivity = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(targetElementId);
                if (isHitArea == true) {
                    $("#" + targetElementId).html("+");
                }
                if (targetElementId == "") {
                    return true;
                }
                else if (targetActivity && targetActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep && draggedElementId == this.setAttributeValueStepLibraryElementId) {
                    return true;
                }
                else if (!isHitArea) {
                    return false;
                }
                else {
                    return this.isValidMoveOnCanvas(targetElementId, draggedElementId, isHitArea);
                }
            };
            PblDragDropValidator.prototype.isValidMoveOnCanvas = function (targetElementId, draggedElementId, isHitArea) {
                var isVerticalHitArea = isHitArea && targetElementId.indexOf('_verticalhitarea') > -1;
                var isHorizontalHitArea = isHitArea && !isVerticalHitArea;
                var workflowTree = GenericWorkflowDesigner.Settings.workflowTree;
                var targetActivity = workflowTree.getActivityById(targetElementId.replace('_hitarea', '').replace('_verticalhitarea', ''));
                if (CommonTypes.Types.Object.isNullOrUndefined(targetActivity)) {
                    return false;
                }
                var draggedActivity = workflowTree.getActivityById(draggedElementId);
                if (targetElementId == draggedElementId + '_hitarea') {
                    return false;
                }
                if (draggedElementId == this.conditionLibraryElementId) {
                    return this.isValidConditionDrop(targetActivity, isVerticalHitArea);
                }
                else if (draggedElementId == this.setSuggestionStepLibraryElementId || this.isLibraryActionActivity(draggedElementId)) {
                    return this.isValidActionDrop(targetActivity, isVerticalHitArea);
                }
                else if (draggedActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep || ProcessDesigner.PblActivityType.isActionActivityType(draggedActivity.getActivityTypeID())) {
                    return this.isValidCanvasActionDrop(draggedActivity, targetActivity, isVerticalHitArea, isHorizontalHitArea);
                }
                else {
                    return false;
                }
            };
            PblDragDropValidator.prototype.getNumberOfConditions = function (targetActivity) {
                var nRet = 1;
                var parent = targetActivity.getParent();
                while (parent) {
                    nRet += 1;
                    parent = parent.getParent();
                }
                var child = targetActivity.getNoBranch();
                while (child && child.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                    nRet += 1;
                    child = child.getNoBranch();
                }
                return nRet;
            };
            PblDragDropValidator.prototype.isValidConditionDrop = function (targetActivity, isVerticalHitArea) {
                if (isVerticalHitArea && targetActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                    var n = this.getNumberOfConditions(targetActivity);
                    if (n < PblDragDropValidator.maxIfElse - 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            };
            PblDragDropValidator.prototype.isValidCanvasActionDrop = function (draggedActivity, targetActivity, isVerticalHitArea, isHorizontalHitArea) {
                if (targetActivity.getActivityID() == draggedActivity.getParentActivityID()) {
                    if (draggedActivity.getParentBranchID() == 1 && isHorizontalHitArea) {
                        return false;
                    }
                    else if (draggedActivity.getParentBranchID() == 2 && isVerticalHitArea) {
                        return false;
                    }
                }
                return this.isValidActionDrop(targetActivity, isVerticalHitArea);
            };
            PblDragDropValidator.prototype.isValidActionDrop = function (targetActivity, isVerticalHitArea) {
                if (isVerticalHitArea && targetActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                    var elseBranchActivity = targetActivity.getNoBranch();
                    if (elseBranchActivity == null) {
                        return true;
                    }
                    else {
                        return elseBranchActivity.getActivityTypeID() != ProcessDesigner.PblActivityType.condition;
                    }
                }
                else if (isVerticalHitArea && targetActivity.getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                    return false;
                }
                return true;
            };
            PblDragDropValidator.prototype.isLibraryActionActivity = function (elementId) {
                switch (elementId) {
                    case this.setMessageStepLibraryElementId:
                    case this.setDisplayModeStepLibraryElementId:
                    case this.setVisibilityStepLibraryElementId:
                    case this.setFieldRequiredLevelStepLibraryElementId:
                    case this.setAttributeValueStepLibraryElementId:
                    case this.setDefaultValueStepLibraryElementId:
                    case this.customJavascriptStepLibraryElementId:
                        return true;
                    default:
                        return false;
                }
            };
            PblDragDropValidator.maxIfElse = 10;
            return PblDragDropValidator;
        })();
        ProcessDesigner.PblDragDropValidator = PblDragDropValidator;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PblEvents.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PblEvents = (function () {
            function PblEvents() {
            }
            PblEvents.updatePlainTextView = "updatePlainTextView";
            PblEvents.refreshPropertyPage = "refreshPropertyPage";
            return PblEvents;
        })();
        ProcessDesigner.PblEvents = PblEvents;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PblJsonConverterHelper.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Contains all the common logic for reverse parsing from model to json
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var PblJsonConverterHelper = (function () {
            function PblJsonConverterHelper() {
            }
            PblJsonConverterHelper.prototype.createFormulaJson = function (value, entity, formulaValueEntity, workflowStep) {
                var list = [];
                list.push(parseInt(value.formula.operator));
                for (var i = 1; i < 3; i++) {
                    var paramenterObj;
                    var entityAttributeExprObj;
                    var paramArray = [];
                    if (i == 1) {
                        entityAttributeExprObj = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, value.formula.attribute.field);
                        entityAttributeExprObj.set_type(value.formula.attribute.fieldtype.toString());
                        paramArray.push(entityAttributeExprObj);
                        paramenterObj = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, "0", paramArray);
                    }
                    else {
                        if ((value.formula.valueType == ActionOperators.Field)) {
                            entityAttributeExprObj = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(formulaValueEntity, value.formula.value.field);
                            entityAttributeExprObj.set_type(value.formula.value.fieldtype.toString());
                            paramArray.push(entityAttributeExprObj);
                            paramenterObj = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, "0", paramArray);
                        }
                        else {
                            if (parseInt(value.formula.attribute.fieldtype) == MscrmControls.ProcessDesigner.Common.AttributeType.DateTime) {
                                var timeSpan = new Microsoft.Crm.Workflow.CrmTimeSpan(0, 0, parseInt(value.formula.value), 0, 0);
                                var timeSpanExpr = new Microsoft.Crm.Workflow.Expressions.TimeSpanExpression(workflowStep, timeSpan);
                                paramArray.push(timeSpanExpr);
                                paramenterObj = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, "0", paramArray);
                            }
                            else {
                                var primitiveObj = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, value.formula.value, "0");
                                primitiveObj.set_type(value.formula.attribute.fieldtype.toString());
                                paramArray.push(primitiveObj);
                                paramenterObj = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, "0", paramArray);
                            }
                        }
                    }
                    list.push(paramenterObj);
                }
                return list;
            };
            PblJsonConverterHelper.prototype.getprimaryEntityJson = function (entity, workflowStep) {
                var primaryEntity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(workflowStep);
                primaryEntity.set_entityName(entity.get_entityName());
                primaryEntity.set_parameterName("primaryEntity");
                return primaryEntity;
            };
            PblJsonConverterHelper.prototype.parsePropertyValueExpr = function (operator, value, entity, formulaValueEntity, workflowStep) {
                var propertyValueExprObj;
                if (operator == ActionOperators.Formula) {
                    var paramArray = this.createFormulaJson(value, entity, formulaValueEntity, workflowStep);
                    propertyValueExprObj = new Microsoft.Crm.Workflow.Expressions.MethodCallExpression(workflowStep, "3", paramArray);
                }
                else if (operator == ActionOperators.Field) {
                    propertyValueExprObj = new Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression(entity, value.field);
                    propertyValueExprObj.set_type(value.fieldtype.toString());
                }
                else {
                    propertyValueExprObj = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, value, "0");
                }
                return propertyValueExprObj;
            };
            return PblJsonConverterHelper;
        })();
        ProcessDesigner.PblJsonConverterHelper = PblJsonConverterHelper;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var SetSuggestionStepJson = (function () {
            function SetSuggestionStepJson() {
                this.__class = "SetSuggestionStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetSuggestionStepJson;
        })();
        ProcessDesigner.SetSuggestionStepJson = SetSuggestionStepJson;
        var PrimaryEntityStepJson = (function () {
            function PrimaryEntityStepJson() {
                this.__class = "PrimaryEntity:#Microsoft.Crm.Workflow.Expressions";
            }
            return PrimaryEntityStepJson;
        })();
        ProcessDesigner.PrimaryEntityStepJson = PrimaryEntityStepJson;
        var MethodCallExprJson = (function () {
            function MethodCallExprJson() {
                this.__class = "MethodCallExpression:#Microsoft.Crm.Workflow.Expressions";
                this.type = "0";
                this.typeSet = false;
                this.behavior = 0;
                this.method = "0";
                this.parameters = [];
            }
            return MethodCallExprJson;
        })();
        ProcessDesigner.MethodCallExprJson = MethodCallExprJson;
        var EntityAttributeExprJson = (function () {
            function EntityAttributeExprJson() {
                this.__class = "EntityAttributeExpression:#Microsoft.Crm.Workflow.Expressions";
                this.typeSet = false;
                this.behavior = 0;
            }
            return EntityAttributeExprJson;
        })();
        ProcessDesigner.EntityAttributeExprJson = EntityAttributeExprJson;
        var PrimitiveExprJson = (function () {
            function PrimitiveExprJson() {
                this.__class = "PrimitiveExpression:#Microsoft.Crm.Workflow.Expressions";
                this.typeSet = false;
                this.behavior = 0;
            }
            return PrimitiveExprJson;
        })();
        ProcessDesigner.PrimitiveExprJson = PrimitiveExprJson;
        var LookupExprJson = (function () {
            function LookupExprJson() {
                this.__class = "LookupExpression:#Microsoft.Crm.Workflow.Expressions";
                this.typeSet = false;
                this.behavior = 0;
            }
            return LookupExprJson;
        })();
        ProcessDesigner.LookupExprJson = LookupExprJson;
        var SetMessageStepJson = (function () {
            function SetMessageStepJson() {
                this.__class = "SetMessageStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetMessageStepJson;
        })();
        ProcessDesigner.SetMessageStepJson = SetMessageStepJson;
        var AcceptConditionStepJson = (function () {
            function AcceptConditionStepJson() {
                this.__class = "AcceptConditionStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return AcceptConditionStepJson;
        })();
        ProcessDesigner.AcceptConditionStepJson = AcceptConditionStepJson;
        var SetAttributeValueStepJson = (function () {
            function SetAttributeValueStepJson() {
                this.__class = "SetAttributeValueStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetAttributeValueStepJson;
        })();
        ProcessDesigner.SetAttributeValueStepJson = SetAttributeValueStepJson;
        var SetFieldRequiredLevelStepJson = (function () {
            function SetFieldRequiredLevelStepJson() {
                this.__class = "SetFieldRequiredLevelStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetFieldRequiredLevelStepJson;
        })();
        ProcessDesigner.SetFieldRequiredLevelStepJson = SetFieldRequiredLevelStepJson;
        var SetVisibilityStepJson = (function () {
            function SetVisibilityStepJson() {
                this.__class = "SetVisibilityStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetVisibilityStepJson;
        })();
        ProcessDesigner.SetVisibilityStepJson = SetVisibilityStepJson;
        var SetDefaultValueStepJson = (function () {
            function SetDefaultValueStepJson() {
                this.__class = "SetDefaultValueStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetDefaultValueStepJson;
        })();
        ProcessDesigner.SetDefaultValueStepJson = SetDefaultValueStepJson;
        var SetDisplayModeStepJson = (function () {
            function SetDisplayModeStepJson() {
                this.__class = "SetDisplayModeStep:#Microsoft.Crm.Workflow.ObjectModel";
                this.id = null;
                this.description = null;
                this.name = null;
            }
            return SetDisplayModeStepJson;
        })();
        ProcessDesigner.SetDisplayModeStepJson = SetDisplayModeStepJson;
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
// -----------------------------------------------------------------------
// <copyright file="PBLGraphics.ts" company="Microsoft">
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
        var PBLGraphics = (function (_super) {
            __extends(PBLGraphics, _super);
            function PBLGraphics() {
                _super.apply(this, arguments);
            }
            PBLGraphics.prototype.createRectangleDOM = function (rectangle, segmentClass, lineWidth) {
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
            PBLGraphics.prototype.createLineDOM = function (pointStart, width, height, segmentClass) {
                var line = $('<div class="' + segmentClass + '">');
                line.css("position", "absolute");
                line.css("width", width);
                line.css("height", height);
                line.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), pointStart.getX());
                line.css("top", pointStart.getY());
                return line;
            };
            PBLGraphics.prototype.createConnectorExtendDOM = function (startPoint, endPoint, segmentClass, parentBranchID, depth) {
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
                segments.push(this.createLineDOM(p3, lineWidth, extra + lineWidth + tileHeight / 2 + tileButtonHeight, segmentClass));
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p4 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p4, defaultColSpaceing, lineWidth, segmentClass));
                return segments;
            };
            PBLGraphics.prototype.createConnectorDOM = function (startPoint, endPoint, segmentClass, parentBranchID) {
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
            PBLGraphics.prototype.drawTileConnectors = function (canvasObj) {
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
            };
            PBLGraphics.prototype.drawConnector = function (parentActivity, childActivity, obj) {
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
                    if (parentActivity.getActivityTypeID() == "condition") {
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
            return PBLGraphics;
        })(GenericWorkflowDesigner.Graphics);
        ProcessDesigner.PBLGraphics = PBLGraphics;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="PBLLayoutProperties.ts" company="Microsoft">
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
        var PBLLayoutProperties = (function (_super) {
            __extends(PBLLayoutProperties, _super);
            function PBLLayoutProperties(workspacePosition) {
                _super.call(this, workspacePosition);
                this.topMargin = 0;
                this.rowSpaceing = 58;
                this.colSpaceing = 60;
                this.insertSlotVerticalOffset = 28;
                this.insertSlotHorizontalOffset = 24;
                this.connectorMargin = 17;
                this.connectorHeight = 23;
            }
            return PBLLayoutProperties;
        })(GenericWorkflowDesigner.LayoutProperties);
        ProcessDesigner.PBLLayoutProperties = PBLLayoutProperties;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="IPblActionParserBehavior" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the Parser behavior for diffferen actions in PBL
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for set default/defined value of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var FieldDefaultValueTypeParser = (function () {
            function FieldDefaultValueTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDefaultValueTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldDefaultValueTypeParser.prototype.parseAction = function (_stepBase) {
                var _setDefaultValueStep = _stepBase;
                var _operand = new ProcessDesigner.OperandFactory().getOperand(_setDefaultValueStep.get_propertySpec().get_value());
                this._field = _setDefaultValueStep.get_propertySpec().get_name();
                this.fieldtype = _setDefaultValueStep.get_propertySpec().propertyValueExpr.type;
                this.operator = _operand.operatorType;
                this._value = _operand.value;
                if (_operand.hasLookup == true) {
                    this.lookupProperties["islookup"] = true;
                    this.lookupProperties["lookupEntity"] = _operand["lookEntity"];
                    this.lookupProperties["lookupLabel"] = _operand["lookupLabel"];
                }
                this.entity = _setDefaultValueStep.get_entity();
                this.displayName = _setDefaultValueStep.get_Description();
            };
            ;
            return FieldDefaultValueTypeParser;
        })();
        ProcessDesigner.FieldDefaultValueTypeParser = FieldDefaultValueTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for set message type action of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var StepLabel = (function () {
            function StepLabel() {
            }
            return StepLabel;
        })();
        ProcessDesigner.StepLabel = StepLabel;
        var FieldMessageTypeParser = (function () {
            function FieldMessageTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldMessageTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldMessageTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldMessageTypeParser.prototype.parseAction = function (_stepBase) {
                var _setMessageStep = _stepBase;
                this.field = _setMessageStep.get_controlId();
                this.operator = ActionOperators.SetMessage;
                this.entity = _setMessageStep.get_entity();
                this.value = this.parseStepLabels(_setMessageStep);
                this.displayName = _setMessageStep.get_Description();
            };
            ;
            FieldMessageTypeParser.prototype.parseStepLabels = function (_setMessageStep) {
                var _stepLabel = new StepLabel();
                var stepLabels = _setMessageStep.get_stepLabels();
                _stepLabel.labelId = stepLabels.get_item(0).get_labelId();
                _stepLabel.description = stepLabels.get_item(0).get_description();
                _stepLabel.languageCode = stepLabels.get_item(0).get_languageCode();
                return _stepLabel;
            };
            return FieldMessageTypeParser;
        })();
        ProcessDesigner.FieldMessageTypeParser = FieldMessageTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for visibility, lock and reuired type of actions of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var FieldDisplayModeTypeParser = (function () {
            function FieldDisplayModeTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldDisplayModeTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldDisplayModeTypeParser.prototype.parseAction = function (_stepBase) {
                var _setDisplayModeStep = _stepBase;
                this._field = _setDisplayModeStep.get_controlId();
                this._fieldtype = parseInt(_setDisplayModeStep.get_controlType());
                this.operator = ActionOperators.DisplayMode;
                this._value = _setDisplayModeStep.get_isReadOnly();
                this.entity = _setDisplayModeStep.get_entity();
                this.displayName = _setDisplayModeStep.get_Description();
            };
            ;
            return FieldDisplayModeTypeParser;
        })();
        ProcessDesigner.FieldDisplayModeTypeParser = FieldDisplayModeTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for visibility of actions of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var FieldRequiredLevelTypeParser = (function () {
            function FieldRequiredLevelTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldRequiredLevelTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldRequiredLevelTypeParser.prototype.parseAction = function (_stepBase) {
                var _setFieldRequiredLevelStep = _stepBase;
                this._field = _setFieldRequiredLevelStep.get_controlId();
                this._fieldtype = parseInt(_setFieldRequiredLevelStep.get_controlType());
                this.operator = ActionOperators.FieldRequired;
                this._value = _setFieldRequiredLevelStep.get_requiredLevel();
                this.entity = _setFieldRequiredLevelStep.get_entity();
                this.displayName = _setFieldRequiredLevelStep.get_Description();
            };
            ;
            return FieldRequiredLevelTypeParser;
        })();
        ProcessDesigner.FieldRequiredLevelTypeParser = FieldRequiredLevelTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for set message type action of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var EntityBase = Microsoft.Crm.Workflow.Expressions.EntityBase;
        var FieldSuggestionTypeParser = (function () {
            function FieldSuggestionTypeParser() {
                this._displayName = "";
            }
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "entity", {
                get: function () {
                    if (this._entity == null) {
                        this._entity = new EntityBase();
                        this._entity.set_entityName(ProcessDesigner.ControlManager.primaryEntityName);
                        this._entity.set_parameterName("PrimaryEntity");
                    }
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "suggestionBody", {
                get: function () {
                    return this._suggestionBody;
                },
                set: function (value) {
                    this._suggestionBody = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "actionStep", {
                get: function () {
                    return this._actionStep;
                },
                set: function (value) {
                    this._actionStep = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "acceptanceText", {
                get: function () {
                    return this._acceptanceText;
                },
                set: function (value) {
                    this._acceptanceText = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldSuggestionTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    if (this._displayName !== value) {
                        this._displayName = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            FieldSuggestionTypeParser.prototype.parseAction = function (_stepBase) {
                var _setSuggestionStep = _stepBase;
                this.field = _setSuggestionStep.get_controlId();
                this.entity = _setSuggestionStep.get_entity();
                this.displayName = _setSuggestionStep.get_Description();
                this.suggestionBody = this.parseStepLabels(_setSuggestionStep);
                this.actionStep = _setSuggestionStep.get_ActionSteps().get_item(0);
                this.acceptanceText = this.parseStepLabels(this.actionStep);
            };
            FieldSuggestionTypeParser.prototype.parseStepLabels = function (_setMessageStep) {
                var _stepLabel = new ProcessDesigner.StepLabel();
                var stepLabels = _setMessageStep.get_stepLabels();
                _stepLabel.labelId = stepLabels.get_item(0).get_labelId();
                _stepLabel.description = stepLabels.get_item(0).get_description();
                _stepLabel.languageCode = stepLabels.get_item(0).get_languageCode();
                return _stepLabel;
            };
            return FieldSuggestionTypeParser;
        })();
        ProcessDesigner.FieldSuggestionTypeParser = FieldSuggestionTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for set default/defined value of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var FieldValueTypeParser = (function () {
            function FieldValueTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldValueTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldValueTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldValueTypeParser.prototype.parseAction = function (_stepBase) {
                var _setAttributeValueStep = _stepBase;
                var _operand = new ProcessDesigner.OperandFactory().getOperand(_setAttributeValueStep.get_propertySpec().get_value());
                this._field = _setAttributeValueStep.get_propertySpec().get_name();
                this.fieldtype = _setAttributeValueStep.get_propertySpec().propertyValueExpr.type;
                this.operator = _operand.operatorType;
                this._value = _operand.value;
                if (_operand.hasLookup == true) {
                    this.lookupProperties["islookup"] = true;
                    this.lookupProperties["lookupEntity"] = _operand["lookEntity"];
                    this.lookupProperties["lookupLabel"] = _operand["lookupLabel"];
                }
                this.entity = _setAttributeValueStep.get_entity();
                this._displayName = _setAttributeValueStep.get_Description();
            };
            ;
            return FieldValueTypeParser;
        })();
        ProcessDesigner.FieldValueTypeParser = FieldValueTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for visibility of actions of the business rule
//  </summary>
/// <reference path="IPblActionParserBehavior.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var FieldVisibilityTypeParser = (function () {
            function FieldVisibilityTypeParser() {
                this._displayName = "";
                this._lookupProperties = {};
            }
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "displayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldVisibilityTypeParser.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            FieldVisibilityTypeParser.prototype.parseAction = function (_stepBase) {
                var _setVisibleStep = _stepBase;
                this._field = _setVisibleStep.get_controlId();
                this._fieldtype = parseInt(_setVisibleStep.get_controlType());
                this.operator = ActionOperators.Visibility;
                this._value = _setVisibleStep.get_isVisible();
                this.entity = _setVisibleStep.get_entity();
                this.displayName = _setVisibleStep.get_Description();
            };
            ;
            return FieldVisibilityTypeParser;
        })();
        ProcessDesigner.FieldVisibilityTypeParser = FieldVisibilityTypeParser;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent operand parser for entity attribute field of an action
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var Field = (function () {
            function Field() {
            }
            Object.defineProperty(Field.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "entity", {
                get: function () {
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            return Field;
        })();
        ProcessDesigner.Field = Field;
        var AttributeOperand = (function () {
            function AttributeOperand(expression) {
                this._selectedAttribute = new Field();
                var entityAttributeExpression = expression;
                this._selectedAttribute.field = entityAttributeExpression.get_attributeName();
                this._selectedAttribute.fieldtype = entityAttributeExpression.type;
                this._selectedAttribute.entity = entityAttributeExpression.get_entity();
            }
            Object.defineProperty(AttributeOperand.prototype, "value", {
                get: function () {
                    return this._selectedAttribute;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeOperand.prototype, "entity", {
                get: function () {
                    return this._selectedAttribute.entity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeOperand.prototype, "operatorType", {
                get: function () {
                    return ActionOperators.Field;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeOperand.prototype, "hasLookup", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            return AttributeOperand;
        })();
        ProcessDesigner.AttributeOperand = AttributeOperand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent operand parser for formula of an action
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var MethodOperand = (function () {
            function MethodOperand(expression) {
                var _methodCallExpression = expression;
                this._parameters = _methodCallExpression.getParameters();
            }
            Object.defineProperty(MethodOperand.prototype, "value", {
                get: function () {
                    var _formula = new Formula();
                    _formula.operator = this.getFormulaOperator(this._parameters[0]);
                    _formula.attribute = new ProcessDesigner.OperandFactory().getOperand(this._parameters[1].parameters[0]).value;
                    _formula.value = new ProcessDesigner.OperandFactory().getOperand(this._parameters[2].parameters[0]).value;
                    _formula.valueType = new ProcessDesigner.OperandFactory().getOperand(this._parameters[2].parameters[0]).operatorType;
                    return new FormulaValue(_formula);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodOperand.prototype, "entity", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodOperand.prototype, "operatorType", {
                get: function () {
                    return ActionOperators.Formula;
                },
                enumerable: true,
                configurable: true
            });
            MethodOperand.prototype.getFormulaOperator = function (operator) {
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
            Object.defineProperty(MethodOperand.prototype, "hasLookup", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            return MethodOperand;
        })();
        ProcessDesigner.MethodOperand = MethodOperand;
        var FormulaValue = (function () {
            function FormulaValue(formula) {
                this._formula = formula;
            }
            Object.defineProperty(FormulaValue.prototype, "formula", {
                get: function () {
                    return this._formula;
                },
                enumerable: true,
                configurable: true
            });
            FormulaValue.prototype.get_formulaExpression = function () {
                return (this._formula.attribute + ' ' + this._formula.operator.toString + ' ' + this._formula.value);
            };
            return FormulaValue;
        })();
        ProcessDesigner.FormulaValue = FormulaValue;
        var Formula = (function () {
            function Formula() {
            }
            Object.defineProperty(Formula.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Formula.prototype, "attribute", {
                get: function () {
                    return this._attribute;
                },
                set: function (value) {
                    this._attribute = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Formula.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Formula.prototype, "valueType", {
                get: function () {
                    return this._valueType;
                },
                set: function (value) {
                    this._valueType = value;
                },
                enumerable: true,
                configurable: true
            });
            return Formula;
        })();
        ProcessDesigner.Formula = Formula;
        var formulaOperator;
        (function (formulaOperator) {
            formulaOperator[formulaOperator["Add"] = 0] = "Add";
            formulaOperator[formulaOperator["Substract"] = 1] = "Substract";
            formulaOperator[formulaOperator["Multiply"] = 2] = "Multiply";
            formulaOperator[formulaOperator["Divide"] = 3] = "Divide";
        })(formulaOperator || (formulaOperator = {}));
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent parser for set default/defined value of the business rule
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var OperandFactory = (function () {
            function OperandFactory() {
            }
            OperandFactory.prototype.getOperand = function (expression) {
                if (expression instanceof Microsoft.Crm.Workflow.Expressions.PrimitiveExpression
                    || expression instanceof Microsoft.Crm.Workflow.Expressions.TimeSpanExpression
                    || expression instanceof Microsoft.Crm.Workflow.Expressions.LookupExpression) {
                    return new ProcessDesigner.ValueOperand(expression);
                }
                else if (expression instanceof Microsoft.Crm.Workflow.Expressions.EntityAttributeExpression) {
                    return new ProcessDesigner.AttributeOperand(expression);
                }
                else if (expression instanceof Microsoft.Crm.Workflow.Expressions.MethodCallExpression) {
                    return new ProcessDesigner.MethodOperand(expression);
                }
                else {
                    return null;
                }
            };
            return OperandFactory;
        })();
        ProcessDesigner.OperandFactory = OperandFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent operand parser for value of an action
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var ValueOperand = (function () {
            function ValueOperand(expression) {
                if (expression instanceof Microsoft.Crm.Workflow.Expressions.PrimitiveExpression) {
                    var entityAttributeExpression = expression;
                    this._primitiveValue = entityAttributeExpression.get_value();
                }
                else if (expression instanceof Microsoft.Crm.Workflow.Expressions.TimeSpanExpression) {
                    this._primitiveValue = expression.get_value().get_days().toString();
                }
                else if (expression instanceof Microsoft.Crm.Workflow.Expressions.LookupExpression) {
                    var lookupExpression = expression;
                    var lookupValue = lookupExpression.get_value();
                    this._primitiveValue = lookupValue["primitiveValue"];
                    this._lookupEntity = lookupExpression["entityType"];
                    this._isLookup = true;
                    this._lookupLabel = lookupExpression["label"];
                }
            }
            Object.defineProperty(ValueOperand.prototype, "value", {
                get: function () {
                    return this._primitiveValue;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueOperand.prototype, "entity", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueOperand.prototype, "operatorType", {
                get: function () {
                    return ActionOperators.Value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueOperand.prototype, "lookEntity", {
                get: function () {
                    return this._lookupEntity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueOperand.prototype, "hasLookup", {
                get: function () {
                    return this._isLookup;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueOperand.prototype, "lookupLabel", {
                get: function () {
                    return this._lookupLabel;
                },
                enumerable: true,
                configurable: true
            });
            return ValueOperand;
        })();
        ProcessDesigner.ValueOperand = ValueOperand;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PblToActivityCollectionVisitor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
/// <reference path="../../Process/Converter/ProcessToActivityCollectionVisitor.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PblToActivityCollectionVisitor = (function (_super) {
            __extends(PblToActivityCollectionVisitor, _super);
            function PblToActivityCollectionVisitor() {
                _super.call(this);
                this.isRecommendationStep = false;
            }
            PblToActivityCollectionVisitor.prototype.visitAcceptConditionStep = function (acceptConditionStep) {
                var acceptConditionActivity = null;
                acceptConditionActivity = this.createActivity(acceptConditionStep, ProcessDesigner.PblActivityType.acceptConditionStep);
                acceptConditionActivity.sequence = this.currentStepIndex;
                var parentbranch = this.currentParent;
                this.currentParent = acceptConditionActivity;
                this.visitSteps(acceptConditionStep);
                this.currentParent = parentbranch;
                this.currentStepIndex++;
            };
            PblToActivityCollectionVisitor.prototype.visitSetMessageStep = function (setMessageStep) {
                var setMessageActivity = null;
                this.isRecommendationStep = setMessageStep.get_level() == ProcessDesigner.RecommendationStep.RecommendationLevel;
                if (this.isRecommendationStep) {
                    setMessageActivity = this.createActivity(setMessageStep, ProcessDesigner.PblActivityType.setSuggestionStep);
                    this.currentSuggestionActivity = setMessageActivity;
                    this.currentStepIndex = 1;
                    this.currentParent = setMessageActivity;
                    var actionStep = setMessageStep.get_ActionSteps().get_item(0);
                    this.visitSteps(actionStep);
                    this.isRecommendationStep = false;
                }
                else {
                    setMessageActivity = this.createActivity(setMessageStep, ProcessDesigner.PblActivityType.setMessageStep);
                    this.currentParent = setMessageActivity;
                }
            };
            PblToActivityCollectionVisitor.prototype.visitSetDisplayModeStep = function (setDisplayModeStep) {
                var setDisplayModeActivity = null;
                setDisplayModeActivity = this.createActivity(setDisplayModeStep, ProcessDesigner.PblActivityType.setDisplayModeStep);
                this.currentParent = setDisplayModeActivity;
            };
            PblToActivityCollectionVisitor.prototype.visitSetVisibilityStep = function (setVisibilityStep) {
                var setVisibilityActivity = null;
                setVisibilityActivity = this.createActivity(setVisibilityStep, ProcessDesigner.PblActivityType.setVisibilityStep);
                this.currentParent = setVisibilityActivity;
            };
            PblToActivityCollectionVisitor.prototype.visitSetFieldRequiredLevelStep = function (setFieldRequiredLevelStep) {
                var setFieldRequiredLevelActivity = null;
                setFieldRequiredLevelActivity = this.createActivity(setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep);
                this.currentParent = setFieldRequiredLevelActivity;
            };
            PblToActivityCollectionVisitor.prototype.visitSetAttributeValueStep = function (setAttributeValueStep) {
                if (this.isRecommendationStep) {
                    var model = this.createSetAttributeValueStepActivity(setAttributeValueStep);
                    this.currentSuggestionActivity.actionSteps.push(model);
                }
                else {
                    var setAttributeValueActivity = null;
                    setAttributeValueActivity = this.createActivity(setAttributeValueStep, ProcessDesigner.PblActivityType.setAttributeValueStep);
                    this.currentParent = setAttributeValueActivity;
                }
            };
            PblToActivityCollectionVisitor.prototype.visitSetDefaultValueStep = function (setDefaultValueStep) {
                var setDefaultValueActivity = null;
                setDefaultValueActivity = this.createActivity(setDefaultValueStep, ProcessDesigner.PblActivityType.setDefaultValueStep);
                this.currentParent = setDefaultValueActivity;
            };
            PblToActivityCollectionVisitor.prototype.visitCustomJavascriptStep = function (customJSStep) {
                if (ProcessDesigner.ControlManager.isPBLfromTBX) {
                    var customJavascriptActivity = null;
                    customJavascriptActivity = this.createActivity(customJSStep, ProcessDesigner.PblActivityType.customJavascriptStep);
                    this.currentParent = customJavascriptActivity;
                }
            };
            PblToActivityCollectionVisitor.prototype.createSetAttributeValueStepActivity = function (setAttributeValueStep) {
                var activity = new ProcessDesigner.PblSetAttributeValueActivity();
                activity.parentSuggestionActivity = this.currentSuggestionActivity;
                activity.setActivityID(setAttributeValueStep.get_Id());
                activity.sequence = this.currentStepIndex++;
                activity.processStep = setAttributeValueStep;
                if (this.currentParent != null) {
                    activity.setParentActivityID(this.currentParent.getActivityID());
                }
                activity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                return activity;
            };
            return PblToActivityCollectionVisitor;
        })(ProcessDesigner.ProcessToActivityCollectionVisitor);
        ProcessDesigner.PblToActivityCollectionVisitor = PblToActivityCollectionVisitor;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PblAcceptConditionActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the action activity of the business rule
//  </summary>
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblAcceptConditionActivity = (function (_super) {
            __extends(PblAcceptConditionActivity, _super);
            function PblAcceptConditionActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.acceptConditionStep);
            }
            Object.defineProperty(PblAcceptConditionActivity.prototype, "accept", {
                get: function () {
                    return this._accept;
                },
                set: function (value) {
                    this._accept = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblAcceptConditionActivity.prototype, "acceptDescription", {
                get: function () {
                    return this._acceptDescription;
                },
                set: function (value) {
                    this._acceptDescription = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblAcceptConditionActivity.prototype, "sequence", {
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
            PblAcceptConditionActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.acceptConditionStep);
                this.addNewItem(ProcessDesigner.PblActivityType.acceptConditionStep);
            };
            PblAcceptConditionActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                var _acceptConditionStep = this.processStep;
                this.accept = _acceptConditionStep.get_accept();
                this.acceptDescription = _acceptConditionStep.get_acceptDescription();
            };
            return PblAcceptConditionActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.PblAcceptConditionActivity = PblAcceptConditionActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the action activity of the business rule
//  </summary>
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="../../converter/components/IPblActionParserBehavior.ts" />
/// <reference path="../../../../Common/IValid.ts" />
/// <reference path="../../../../Common/Rules.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var PblActionActivity = (function (_super) {
            __extends(PblActionActivity, _super);
            function PblActionActivity(activityType) {
                _super.call(this, activityType);
                this._parentSuggestionActivity = null;
                this._sequence = -1;
                this._isNewlyAdded = false;
            }
            Object.defineProperty(PblActionActivity.prototype, "entity", {
                get: function () {
                    if (this._entity == null) {
                        this._entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(ProcessDesigner.ControlManager.workflowStep);
                        this._entity.set_entityName(ProcessDesigner.ControlManager.primaryEntityName);
                        this._entity.set_parameterName("primaryEntity");
                    }
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "fieldtype", {
                get: function () {
                    return this._fieldtype;
                },
                set: function (value) {
                    this._fieldtype = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "operator", {
                get: function () {
                    return this._operator;
                },
                set: function (value) {
                    this._operator = value;
                },
                enumerable: true,
                configurable: true
            });
            PblActionActivity.prototype.isOperatorValue = function () {
                return (this._operator == ActionOperators.Value);
            };
            PblActionActivity.prototype.isOperatorFormula = function () {
                return (this._operator == ActionOperators.Formula);
            };
            PblActionActivity.prototype.isOperatorField = function () {
                return (this._operator == ActionOperators.Field);
            };
            Object.defineProperty(PblActionActivity.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "lookupProperties", {
                get: function () {
                    return this._lookupProperties;
                },
                set: function (value) {
                    this._lookupProperties = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "parentSuggestionActivity", {
                get: function () {
                    return this._parentSuggestionActivity;
                },
                set: function (value) {
                    if (this._parentSuggestionActivity !== value) {
                        this._parentSuggestionActivity = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblActionActivity.prototype, "sequence", {
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
            Object.defineProperty(PblActionActivity.prototype, "isNewlyAdded", {
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
            PblActionActivity.prototype.performParsing = function () {
                this.pblActionParseBehavior.parseAction(this.processStep);
                this.field = this.pblActionParseBehavior.field;
                this.fieldtype = this.pblActionParseBehavior.fieldtype;
                this.operator = this.pblActionParseBehavior.operator;
                this.value = this.pblActionParseBehavior.value;
                this.entity = this.pblActionParseBehavior.entity;
                this.displayName = this.pblActionParseBehavior.displayName;
                this.lookupProperties = this.pblActionParseBehavior.lookupProperties;
            };
            PblActionActivity.prototype.prepareJsonObject = function (pblAction, workflowStep) {
                return this.prepareJsonObject(pblAction, workflowStep);
            };
            PblActionActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                        return [ProcessDesigner.PblActivityType.setAttributeValueStep, ProcessDesigner.PblActivityType.setDefaultValueStep, ProcessDesigner.PblActivityType.setDisplayModeStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setMessageStep, ProcessDesigner.PblActivityType.setVisibilityStep, ProcessDesigner.PblActivityType.setSuggestionStep, ProcessDesigner.PblActivityType.customJavascriptStep];
                    default:
                        return [];
                }
                ;
            };
            PblActionActivity.prototype.validateAttribute = function () {
                var status = true;
                if (!this.field) {
                    var result = Validation.Engine.checkLevel("#attribute", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"));
                    status = this.addResult(result) && status;
                }
                return status;
            };
            PblActionActivity.prototype.validateValue = function () {
                var status = true;
                var result = null;
                if (this.operator == ActionOperators.Field) {
                }
                else if (this.operator == ActionOperators.Formula) {
                    if (this.value.formula.valueType == ActionOperators.Value) {
                        var attributeType = this._field ? ProcessDesigner.MetadataProxy.getAttributeType(this._field, this.entity.get_entityName()) : AttributeType.Unknown;
                        if (attributeType == AttributeType.DateTime) {
                            result = Validation.Engine.validateDateTimeFormulaValue("#formula-value", this.value.formula.value, Validation.Level.Change);
                        }
                        else {
                            result = Validation.Engine.validateAttributeValue("#formula-value", this.value.formula.value, this._field, this.entity.get_entityName(), Validation.Level.Change);
                        }
                        status = this.addResult(result) && status;
                    }
                }
                else {
                    if (this.value == ProcessDesigner.PBLStringConstants.NullStringForTypeClear) {
                        status = true;
                    }
                    else {
                        var id = "#value";
                        var attributeType = this._field ? ProcessDesigner.MetadataProxy.getAttributeType(this._field, this.entity.get_entityName()) : AttributeType.Unknown;
                        if (attributeType == AttributeType.Owner || attributeType == AttributeType.Lookup || attributeType == AttributeType.Customer) {
                            id = "#valueContainer div:first";
                        }
                        else if (attributeType == AttributeType.DateTime) {
                            id = "#valueContainer";
                        }
                        result = Validation.Engine.validateAttributeValue(id, this.value, this._field, this.entity.get_entityName(), Validation.Level.Change);
                        status = this.addResult(result) && status;
                    }
                }
                return status;
            };
            PblActionActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                status = this.validateValue() && status;
                return status;
            };
            PblActionActivity.prototype.getErrorTile = function () {
                if (this.parentSuggestionActivity) {
                    return this.parentSuggestionActivity;
                }
                else {
                    return this;
                }
            };
            PblActionActivity.prototype.getCanvasTile = function () {
                if (this.parentSuggestionActivity) {
                    return this;
                }
                else {
                    return null;
                }
            };
            PblActionActivity.prototype.clone = function (pblActionActivity) {
                var self = this;
                pblActionActivity = self.getPropertyPageClone(pblActionActivity);
                pblActionActivity.setParentActivityID(self.getParentActivityID());
                pblActionActivity.setParentBranchID(self.getParentBranchID());
                return pblActionActivity;
            };
            PblActionActivity.prototype.getCloneOfActivity = function () {
                return this.clone();
            };
            PblActionActivity.prototype.getPropertyPageClone = function (pblActionActivity) {
                var self = this;
                pblActionActivity.field = self.field;
                pblActionActivity.fieldtype = self.fieldtype;
                pblActionActivity.operator = self.operator;
                if (typeof self.value == "object" && typeof self.value.lookup == "object") {
                    pblActionActivity.value = jQuery.extend(true, {}, self.value);
                }
                else {
                    pblActionActivity.value = self.value;
                }
                pblActionActivity.entity = self.entity;
                pblActionActivity.displayName = self.displayName;
                pblActionActivity.isNewlyAdded = self.isNewlyAdded;
                pblActionActivity.addMultipleErrorMessages(self.getErrorMessages());
                if (typeof self.lookupProperties == "object" && self.lookupProperties.islookup) {
                    pblActionActivity.lookupProperties = jQuery.extend(true, {}, self.lookupProperties);
                }
                else {
                    pblActionActivity.lookupProperties = self.lookupProperties;
                }
                var readOnlyFlag = self.attributes.Properties.UI.readonlyMode;
                pblActionActivity.attributes.Properties.UI.readonlyMode = readOnlyFlag;
                return pblActionActivity;
            };
            PblActionActivity.prototype.isInRecommendationTile = function () {
                if (this.parentSuggestionActivity && this.getParentBranchID() == ProcessDesigner.DefaultBranchIndices.DefaultBranch) {
                    return true;
                }
                return false;
            };
            return PblActionActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.PblActionActivity = PblActionActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BPFActivityType.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the Pbl activity type Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblActivityType = (function () {
            function PblActivityType() {
            }
            PblActivityType.isValidPBLActivityType = function (activityType) {
                return (PblActivityType.pblActivityTypes.indexOf(activityType) > -1);
            };
            PblActivityType.isActionActivityType = function (activityType) {
                if (PblActivityType.actionActivityTypes.indexOf(activityType) > -1) {
                    return true;
                }
                return false;
            };
            PblActivityType.root = "root";
            PblActivityType.condition = "condition";
            PblActivityType.setMessageStep = "setMessage";
            PblActivityType.setDisplayModeStep = "setDisplayMode";
            PblActivityType.setVisibilityStep = "setVisibility";
            PblActivityType.setFieldRequiredLevelStep = "setFieldRequiredLevel";
            PblActivityType.setAttributeValueStep = "setAttributeValue";
            PblActivityType.setDefaultValueStep = "setDefaultValue";
            PblActivityType.setSuggestionStep = "setSuggestion";
            PblActivityType.acceptConditionStep = "acceptCondition";
            PblActivityType.customJavascriptStep = "customJavascript";
            PblActivityType.pblActivityTypes = [PblActivityType.root, PblActivityType.condition, PblActivityType.acceptConditionStep, PblActivityType.setAttributeValueStep, PblActivityType.setDefaultValueStep, PblActivityType.setDisplayModeStep, PblActivityType.setFieldRequiredLevelStep, PblActivityType.setMessageStep, PblActivityType.setVisibilityStep, PblActivityType.setSuggestionStep, PblActivityType.customJavascriptStep];
            PblActivityType.actionActivityTypes = [PblActivityType.setAttributeValueStep, PblActivityType.setDefaultValueStep, PblActivityType.setDisplayModeStep, PblActivityType.setFieldRequiredLevelStep, PblActivityType.setMessageStep, PblActivityType.setVisibilityStep, PblActivityType.customJavascriptStep];
            return PblActivityType;
        })();
        ProcessDesigner.PblActivityType = PblActivityType;
        var PBLDialogMessageTypes = (function () {
            function PBLDialogMessageTypes() {
            }
            PBLDialogMessageTypes.Information = 0;
            PBLDialogMessageTypes.Warning = 1;
            PBLDialogMessageTypes.Error = 2;
            return PBLDialogMessageTypes;
        })();
        ProcessDesigner.PBLDialogMessageTypes = PBLDialogMessageTypes;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set message activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
/// <reference path="../../../../../libs/WorkflowObjectModel_pbl.d.ts"/>
/// <reference path="../../converter/components/FieldMessageTypeParser.ts"/>
/// <reference path="../../../../Common/IValid.ts" />
/// <reference path="../../../../Common/Rules.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var PblSetMessageActivity = (function (_super) {
            __extends(PblSetMessageActivity, _super);
            function PblSetMessageActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setMessageStep);
            }
            PblSetMessageActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setMessageStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setMessageStep);
            };
            PblSetMessageActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldMessageTypeParser();
                this.performParsing();
            };
            PblSetMessageActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetMessageActivity.prototype.prepareJsonObject = function (setMessageActivity, workflowStep) {
                var _setMessageStep = setMessageActivity.processStep;
                var labelDetails;
                var setMessageObj = new Microsoft.Crm.Workflow.ObjectModel.SetMessageStep(workflowStep);
                if (_setMessageStep) {
                    setMessageObj.set_Id(_setMessageStep.get_Id());
                    setMessageObj.set_Name(_setMessageStep.get_Name());
                }
                else {
                    setMessageObj.set_Id("SetMessageStep_" + setMessageActivity.getActivityID());
                }
                var stepLabel = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
                if (setMessageActivity.value) {
                    stepLabel.set_labelId(setMessageActivity.value.labelId);
                    stepLabel.set_languageCode(setMessageActivity.value.languageCode);
                    stepLabel.set_description(setMessageActivity.value.description);
                }
                else {
                    stepLabel.set_labelId(Random.Guid.NewGuid());
                    stepLabel.set_languageCode(window.LOCID_BUSINESSRULE_SETORGLCID);
                    stepLabel.set_description("");
                }
                setMessageObj.addLabel(stepLabel);
                setMessageObj.set_Description(setMessageActivity.displayName);
                var controlId = (setMessageActivity.field == null) ? "" : setMessageActivity.field;
                setMessageObj.set_controlId(controlId);
                if (setMessageActivity.entity) {
                    setMessageObj.set_entity(setMessageActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setMessageActivity.entity, workflowStep);
                    setMessageObj.set_entity(primaryEntity);
                }
                return setMessageObj;
            };
            PblSetMessageActivity.prototype.clone = function () {
                var setMessageActivityClone = new PblSetMessageActivity();
                setMessageActivityClone = _super.prototype.clone.call(this, setMessageActivityClone);
                return setMessageActivityClone;
            };
            PblSetMessageActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetMessageActivity());
            };
            PblSetMessageActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                if (!this.value || !this.value.description || this.value.description.trim().length == 0) {
                    var result = Validation.Engine.checkLevel("#messageValue", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"));
                    status = this.addResult(result) && status;
                }
                return status;
            };
            return PblSetMessageActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetMessageActivity = PblSetMessageActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set display mode activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../converter/components/FieldDisplayModeTypeParser.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblSetDisplayModeActivity = (function (_super) {
            __extends(PblSetDisplayModeActivity, _super);
            function PblSetDisplayModeActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setDisplayModeStep);
            }
            PblSetDisplayModeActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setDisplayModeStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setDisplayModeStep);
            };
            PblSetDisplayModeActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldDisplayModeTypeParser();
                this.performParsing();
            };
            PblSetDisplayModeActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetDisplayModeActivity.prototype.prepareJsonObject = function (setDisplayModeActivity, workflowStep) {
                var _setDisplayModeStep = setDisplayModeActivity.processStep;
                var setDisplayModeObj = new Microsoft.Crm.Workflow.ObjectModel.SetDisplayModeStep(workflowStep);
                if (_setDisplayModeStep) {
                    setDisplayModeObj.set_Id(_setDisplayModeStep.get_Id());
                    setDisplayModeObj.set_Name(_setDisplayModeStep.get_Name());
                    var stepLabels = _setDisplayModeStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        setDisplayModeObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    setDisplayModeObj.set_Id("SetDisplayModeStep_" + setDisplayModeActivity.getActivityID());
                }
                setDisplayModeObj.set_Description(setDisplayModeActivity.displayName);
                setDisplayModeObj.set_controlType(ProcessDesigner.PBLStringConstants.ControlTypeStandard);
                var controlId = (setDisplayModeActivity.field == null) ? "" : setDisplayModeActivity.field;
                var isReadOnly = (setDisplayModeActivity.value == null) ? true : setDisplayModeActivity.value;
                setDisplayModeObj.set_controlId(controlId);
                setDisplayModeObj.set_isReadOnly(isReadOnly);
                if (setDisplayModeActivity.entity) {
                    setDisplayModeObj.set_entity(setDisplayModeActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setDisplayModeActivity.entity, workflowStep);
                    setDisplayModeObj.set_entity(primaryEntity);
                }
                return setDisplayModeObj;
            };
            PblSetDisplayModeActivity.prototype.clone = function () {
                var setDisplayModeActivityClone = new PblSetDisplayModeActivity();
                setDisplayModeActivityClone = _super.prototype.clone.call(this, setDisplayModeActivityClone);
                return setDisplayModeActivityClone;
            };
            PblSetDisplayModeActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetDisplayModeActivity());
            };
            PblSetDisplayModeActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                return status;
            };
            return PblSetDisplayModeActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetDisplayModeActivity = PblSetDisplayModeActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set display mode activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../converter/components/FieldVisibilityTypeParser.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblSetVisibilityActivity = (function (_super) {
            __extends(PblSetVisibilityActivity, _super);
            function PblSetVisibilityActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setVisibilityStep);
            }
            PblSetVisibilityActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setVisibilityStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setVisibilityStep);
            };
            PblSetVisibilityActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldVisibilityTypeParser();
                this.performParsing();
            };
            PblSetVisibilityActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetVisibilityActivity.prototype.prepareJsonObject = function (setVisibilityActivity, workflowStep) {
                var _setVisibleStep = setVisibilityActivity.processStep;
                var setVisibilityObj = new Microsoft.Crm.Workflow.ObjectModel.SetVisibilityStep(workflowStep);
                if (_setVisibleStep) {
                    setVisibilityObj.set_Id(_setVisibleStep.get_Id());
                    setVisibilityObj.set_Name(_setVisibleStep.get_Name());
                    var stepLabels = _setVisibleStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        setVisibilityObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    setVisibilityObj.set_Id("SetVisibilityStep_" + setVisibilityActivity.getActivityID());
                }
                setVisibilityObj.set_Description(setVisibilityActivity.displayName);
                setVisibilityObj.set_controlType(ProcessDesigner.PBLStringConstants.ControlTypeStandard);
                var controlId = (setVisibilityActivity.field == null) ? "" : setVisibilityActivity.field;
                var isVisible = (setVisibilityActivity.value == null) ? true : setVisibilityActivity.value;
                setVisibilityObj.set_controlId(controlId);
                setVisibilityObj.set_isVisible(isVisible);
                if (setVisibilityActivity.entity) {
                    setVisibilityObj.set_entity(setVisibilityActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setVisibilityActivity.entity, workflowStep);
                    setVisibilityObj.set_entity(primaryEntity);
                }
                return setVisibilityObj;
            };
            PblSetVisibilityActivity.prototype.clone = function () {
                var setVisibilityActivityClone = new PblSetVisibilityActivity();
                setVisibilityActivityClone = _super.prototype.clone.call(this, setVisibilityActivityClone);
                return setVisibilityActivityClone;
            };
            PblSetVisibilityActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetVisibilityActivity());
            };
            PblSetVisibilityActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                return status;
            };
            return PblSetVisibilityActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetVisibilityActivity = PblSetVisibilityActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="BPFStageActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set required level activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../converter/components/FieldRequiredLevelTypeParser.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblSetFieldRequiredLevelActivity = (function (_super) {
            __extends(PblSetFieldRequiredLevelActivity, _super);
            function PblSetFieldRequiredLevelActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep);
            }
            PblSetFieldRequiredLevelActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setFieldRequiredLevelStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setFieldRequiredLevelStep);
            };
            PblSetFieldRequiredLevelActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldRequiredLevelTypeParser();
                this.performParsing();
            };
            PblSetFieldRequiredLevelActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetFieldRequiredLevelActivity.prototype.prepareJsonObject = function (setFieldRequiredLevelActivity, workflowStep) {
                var _setFieldRequiredLevelStep = setFieldRequiredLevelActivity.processStep;
                var setFieldRequiredLevelStepObj = new Microsoft.Crm.Workflow.ObjectModel.SetFieldRequiredLevelStep(workflowStep);
                if (_setFieldRequiredLevelStep) {
                    setFieldRequiredLevelStepObj.set_Id(_setFieldRequiredLevelStep.get_Id());
                    setFieldRequiredLevelStepObj.set_Name(_setFieldRequiredLevelStep.get_Name());
                    var stepLabels = _setFieldRequiredLevelStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        setFieldRequiredLevelStepObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    setFieldRequiredLevelStepObj.set_Id("SetFieldRequiredLevelStep_" + setFieldRequiredLevelActivity.getActivityID());
                }
                setFieldRequiredLevelStepObj.set_Description(setFieldRequiredLevelActivity.displayName);
                setFieldRequiredLevelStepObj.set_controlType(ProcessDesigner.PBLStringConstants.ControlTypeStandard);
                var controlId = (setFieldRequiredLevelActivity.field == null) ? "" : setFieldRequiredLevelActivity.field;
                var requiredLevel = (setFieldRequiredLevelActivity.value == null) ? "" : setFieldRequiredLevelActivity.value;
                setFieldRequiredLevelStepObj.set_controlId(controlId);
                setFieldRequiredLevelStepObj.set_requiredLevel(requiredLevel);
                if (setFieldRequiredLevelActivity.entity) {
                    setFieldRequiredLevelStepObj.set_entity(setFieldRequiredLevelActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setFieldRequiredLevelActivity.entity, workflowStep);
                    setFieldRequiredLevelStepObj.set_entity(primaryEntity);
                }
                return setFieldRequiredLevelStepObj;
            };
            PblSetFieldRequiredLevelActivity.prototype.clone = function () {
                var setFieldRequiredLevelActivityClone = new PblSetFieldRequiredLevelActivity();
                setFieldRequiredLevelActivityClone = _super.prototype.clone.call(this, setFieldRequiredLevelActivityClone);
                return setFieldRequiredLevelActivityClone;
            };
            PblSetFieldRequiredLevelActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetFieldRequiredLevelActivity());
            };
            PblSetFieldRequiredLevelActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                return status;
            };
            return PblSetFieldRequiredLevelActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetFieldRequiredLevelActivity = PblSetFieldRequiredLevelActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PblSetAttributeValueActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set attribute value activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../converter/components/fieldvaluetypeparser.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var PblSetAttributeValueActivity = (function (_super) {
            __extends(PblSetAttributeValueActivity, _super);
            function PblSetAttributeValueActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setAttributeValueStep);
            }
            PblSetAttributeValueActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setAttributeValueStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setAttributeValueStep);
            };
            PblSetAttributeValueActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldValueTypeParser();
                this.performParsing();
                if (this.operator == ActionOperators.Value && this.value == null) {
                    this.value = ProcessDesigner.PBLStringConstants.NullStringForTypeClear;
                }
            };
            PblSetAttributeValueActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetAttributeValueActivity.prototype.prepareJsonObject = function (setAttributeValueActivity, workflowStep) {
                var _setAttributeValueStep = setAttributeValueActivity.processStep;
                var value = setAttributeValueActivity.value;
                var valueEntity, lookupExpression;
                var formulaValueEntity;
                if (setAttributeValueActivity.isOperatorValue()) {
                    if ((CommonTypes.Types.Object.isNullOrUndefined(setAttributeValueActivity.lookupProperties) == false && setAttributeValueActivity.lookupProperties.islookup == true) || CommonTypes.Types.Object.isNullOrUndefined(setAttributeValueActivity.value.lookup) != true) {
                        var initialType = AttributeType.UniqueIdentifier;
                        var primitiveValue = "", label, entity, guid, right;
                        if (setAttributeValueActivity.lookupProperties != null && CommonTypes.Types.Object.isNullOrUndefined(setAttributeValueActivity.lookupProperties["lookupEntity"]) == false && !setAttributeValueActivity.value.lookup) {
                            primitiveValue = setAttributeValueActivity.value;
                            entity = setAttributeValueActivity.lookupProperties["lookupEntity"];
                            label = setAttributeValueActivity.lookupProperties["lookupLabel"];
                        }
                        else if (setAttributeValueActivity.value.lookup && setAttributeValueActivity.value.lookup != ProcessDesigner.PBLStringConstants.NullStringForTypeClear) {
                            guid = setAttributeValueActivity.value.lookup.value;
                            primitiveValue = (guid == ProcessDesigner.PBLStringConstants.NullStringForTypeClear) ? null : guid.replace("{", "").replace("}", "");
                            entity = setAttributeValueActivity.value.lookup.entity[0];
                            label = setAttributeValueActivity.value.lookup.label;
                        }
                        right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType.toString());
                        lookupExpression = new Microsoft.Crm.Workflow.Expressions.LookupExpression(workflowStep, right, initialType, entity, label);
                        this.isLookup = true;
                    }
                    else {
                        value = (setAttributeValueActivity.value == ProcessDesigner.PBLStringConstants.NullStringForTypeClear) ? null : setAttributeValueActivity.value;
                        this.isLookup = false;
                    }
                }
                if (setAttributeValueActivity.isOperatorValue() && setAttributeValueActivity.value.entity) {
                    valueEntity = setAttributeValueActivity.value.entity;
                }
                else if (setAttributeValueActivity.isOperatorFormula() && setAttributeValueActivity.value.formula.attribute.entity) {
                    valueEntity = setAttributeValueActivity.value.formula.attribute.entity;
                    if (setAttributeValueActivity.value.formula.valueType == ActionOperators.Field) {
                        formulaValueEntity = setAttributeValueActivity.value.formula.value.entity;
                    }
                }
                else if (setAttributeValueActivity.isOperatorField() && setAttributeValueActivity.value.entity) {
                    valueEntity = setAttributeValueActivity.value.entity;
                }
                else {
                    valueEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setAttributeValueActivity.entity, workflowStep);
                }
                var propertyValueExprObj;
                if (!this.isLookup) {
                    propertyValueExprObj = new ProcessDesigner.PblJsonConverterHelper().parsePropertyValueExpr(setAttributeValueActivity.operator, value, valueEntity, formulaValueEntity, workflowStep);
                }
                else {
                    propertyValueExprObj = lookupExpression;
                }
                if (!ProcessDesigner.Util.isNull(setAttributeValueActivity.operator) != null && setAttributeValueActivity.isOperatorValue()) {
                    propertyValueExprObj.set_type("" + setAttributeValueActivity.fieldtype);
                }
                var propertySpec = new Microsoft.Crm.Workflow.Expressions.PropertySpecification(setAttributeValueActivity.field, propertyValueExprObj);
                var setAttributeValueObj = new Microsoft.Crm.Workflow.ObjectModel.SetAttributeValueStep(workflowStep, propertySpec);
                if (_setAttributeValueStep) {
                    setAttributeValueObj.set_Id(_setAttributeValueStep.get_Id());
                    setAttributeValueObj.set_Name(_setAttributeValueStep.get_Name());
                    var stepLabels = _setAttributeValueStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        setAttributeValueObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    setAttributeValueObj.set_Id("SetAttributeValueStep_" + setAttributeValueActivity.getActivityID());
                }
                setAttributeValueObj.set_Description(setAttributeValueActivity.displayName);
                if (setAttributeValueActivity.entity) {
                    setAttributeValueObj.set_entity(setAttributeValueActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setAttributeValueActivity.entity, workflowStep);
                    setAttributeValueObj.set_entity(primaryEntity);
                }
                return setAttributeValueObj;
            };
            PblSetAttributeValueActivity.prototype.clone = function () {
                var setAttributeValueActivityClone = new PblSetAttributeValueActivity();
                setAttributeValueActivityClone = _super.prototype.clone.call(this, setAttributeValueActivityClone);
                setAttributeValueActivityClone.isLookup = this.isLookup;
                return setAttributeValueActivityClone;
            };
            PblSetAttributeValueActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetAttributeValueActivity());
            };
            PblSetAttributeValueActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                status = this.validateValue() && status;
                return status;
            };
            PblSetAttributeValueActivity.prototype.buildExpressionRightForValueType = function (condExpr, workflowStep) {
                var rightArray = [];
                var flag = $.isArray(condExpr.value.value);
                if (flag == true) {
                    for (var i = 0; i < condExpr.value.value.length; i++) {
                        var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                        var primitiveValue = condExpr.value.value[i];
                        var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                        rightArray.push(right);
                    }
                }
                else {
                    var initialType = condExpr.value.attributeType == undefined ? "0" : condExpr.value.attributeType.toString();
                    var primitiveValue = condExpr.value.value.toString();
                    var right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType);
                    rightArray.push(right);
                }
            };
            return PblSetAttributeValueActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetAttributeValueActivity = PblSetAttributeValueActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PblSetDefaultValueActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the set default value activity of the business rule
//  </summary>
/// <reference path="pblactivitytype.ts" />
/// <reference path="../../../process/common/processactivitytype.ts" />
/// <reference path="../../converter/components/fieldDefaultValueTypeParser.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var PblSetDefaultValueActivity = (function (_super) {
            __extends(PblSetDefaultValueActivity, _super);
            function PblSetDefaultValueActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setDefaultValueStep);
            }
            PblSetDefaultValueActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setDefaultValueStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setDefaultValueStep);
            };
            PblSetDefaultValueActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.displayName = this.processStep.get_Description();
                this.pblActionParseBehavior = new ProcessDesigner.FieldDefaultValueTypeParser();
                this.performParsing();
            };
            PblSetDefaultValueActivity.prototype.preparePropertyDetails = function () {
                var target = {
                    field: this.field,
                    operator: this.operator,
                    value: this.value,
                    entity: this.entity,
                    actionType: this.getActivityTypeID()
                };
                return JSON.stringify(target);
            };
            PblSetDefaultValueActivity.prototype.prepareJsonObject = function (setDefaultValueActivity, workflowStep) {
                var _setDefaultValueStep = setDefaultValueActivity.processStep;
                var value = setDefaultValueActivity.value;
                var valueEntity, lookupExpression;
                var formulaValueEntity;
                if (setDefaultValueActivity.isOperatorValue()) {
                    if ((CommonTypes.Types.Object.isNullOrUndefined(setDefaultValueActivity.lookupProperties) == false && setDefaultValueActivity.lookupProperties.islookup == true) || CommonTypes.Types.Object.isNullOrUndefined(setDefaultValueActivity.value.lookup) != true) {
                        var initialType = AttributeType.UniqueIdentifier;
                        var primitiveValue = "", label, entity, guid, right;
                        if (setDefaultValueActivity.lookupProperties != null && CommonTypes.Types.Object.isNullOrUndefined(setDefaultValueActivity.lookupProperties["lookupEntity"]) == false && !setDefaultValueActivity.value.lookup) {
                            primitiveValue = setDefaultValueActivity.value;
                            entity = setDefaultValueActivity.lookupProperties["lookupEntity"];
                            label = setDefaultValueActivity.lookupProperties["lookupLabel"];
                        }
                        else if (setDefaultValueActivity.value.lookup && setDefaultValueActivity.value.lookup != ProcessDesigner.PBLStringConstants.NullStringForTypeClear) {
                            guid = setDefaultValueActivity.value.lookup.value;
                            primitiveValue = (guid == ProcessDesigner.PBLStringConstants.NullStringForTypeClear) ? null : guid.replace("{", "").replace("}", "");
                            entity = setDefaultValueActivity.value.lookup.entity[0];
                            label = setDefaultValueActivity.value.lookup.label;
                        }
                        right = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression(workflowStep, primitiveValue, initialType.toString());
                        lookupExpression = new Microsoft.Crm.Workflow.Expressions.LookupExpression(workflowStep, right, initialType, entity, label);
                        this.isLookup = true;
                    }
                    else {
                        value = (setDefaultValueActivity.value == ProcessDesigner.PBLStringConstants.NullStringForTypeClear) ? null : setDefaultValueActivity.value;
                        this.isLookup = false;
                    }
                }
                if (setDefaultValueActivity.isOperatorValue() && setDefaultValueActivity.value.entity) {
                    valueEntity = setDefaultValueActivity.value.entity;
                }
                else if (setDefaultValueActivity.isOperatorFormula() && setDefaultValueActivity.value.formula.attribute.entity) {
                    valueEntity = setDefaultValueActivity.value.formula.attribute.entity;
                    if (setDefaultValueActivity.value.formula.valueType == ActionOperators.Field) {
                        formulaValueEntity = setDefaultValueActivity.value.formula.value.entity;
                    }
                }
                else if (setDefaultValueActivity.isOperatorField() && setDefaultValueActivity.value.entity) {
                    valueEntity = setDefaultValueActivity.value.entity;
                }
                else {
                    valueEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setDefaultValueActivity.entity, workflowStep);
                }
                var propertyValueExprObj;
                if (!this.isLookup) {
                    propertyValueExprObj = new ProcessDesigner.PblJsonConverterHelper().parsePropertyValueExpr(setDefaultValueActivity.operator, value, valueEntity, formulaValueEntity, workflowStep);
                }
                else {
                    propertyValueExprObj = lookupExpression;
                }
                if (!ProcessDesigner.Util.isNull(setDefaultValueActivity.operator) && setDefaultValueActivity.isOperatorValue()) {
                    propertyValueExprObj.type = "" + setDefaultValueActivity.fieldtype;
                }
                var propertySpec = new Microsoft.Crm.Workflow.Expressions.PropertySpecification(setDefaultValueActivity.field, propertyValueExprObj);
                var setDefaultValueObj = new Microsoft.Crm.Workflow.ObjectModel.SetDefaultValueStep(workflowStep, propertySpec);
                if (_setDefaultValueStep) {
                    setDefaultValueObj.set_Id(_setDefaultValueStep.get_Id());
                    setDefaultValueObj.set_Name(_setDefaultValueStep.get_Name());
                    var stepLabels = _setDefaultValueStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        setDefaultValueObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    setDefaultValueObj.set_Id("SetDefaultValueStep_" + setDefaultValueActivity.getActivityID());
                }
                setDefaultValueObj.set_Description(setDefaultValueActivity.displayName);
                if (setDefaultValueActivity.entity) {
                    setDefaultValueObj.set_entity(setDefaultValueActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(setDefaultValueActivity.entity, workflowStep);
                    setDefaultValueObj.set_entity(primaryEntity);
                }
                return setDefaultValueObj;
            };
            PblSetDefaultValueActivity.prototype.clone = function () {
                var setDefaultValueActivityClone = new PblSetDefaultValueActivity();
                setDefaultValueActivityClone = _super.prototype.clone.call(this, setDefaultValueActivityClone);
                setDefaultValueActivityClone.isLookup = this.isLookup;
                return setDefaultValueActivityClone;
            };
            PblSetDefaultValueActivity.prototype.getPropertyPageClone = function () {
                return _super.prototype.getPropertyPageClone.call(this, new PblSetDefaultValueActivity());
            };
            PblSetDefaultValueActivity.prototype._validateActivity = function () {
                var status = this.validateAttribute();
                status = this.validateValue() && status;
                return status;
            };
            return PblSetDefaultValueActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblSetDefaultValueActivity = PblSetDefaultValueActivity;
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
/// <reference path="../../../process/model/processactivitydefinitionfactory.ts" />
/// <reference path="PblActivityType.ts"/>
/// <reference path="PblSetMessageActivity.ts"/>
/// <reference path="PblSetDisplayModeActivity.ts"/>
/// <reference path="PblSetVisibilityActivity.ts"/>
/// <reference path="PblSetFieldRequiredLevelActivity.ts"/>
/// <reference path="PblSetAttributeValueActivity.ts"/>
/// <reference path="PblSetDefaultValueActivity.ts"/>
//................................................................
//Temp references
/// <reference path="../../../bpf/model/activity/BPFRootActivity.ts"/>
/// <reference path="../../../bpf/model/activity/BPFConditionActivity.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PblActivityDefinitionFactory = (function (_super) {
            __extends(PblActivityDefinitionFactory, _super);
            function PblActivityDefinitionFactory() {
                _super.apply(this, arguments);
            }
            PblActivityDefinitionFactory.prototype.createActivity = function (activityType) {
                switch (activityType) {
                    case ProcessDesigner.PblActivityType.root:
                        return new ProcessDesigner.BPFRootActivity();
                    case ProcessDesigner.PblActivityType.condition:
                        return new ProcessDesigner.BPFConditionActivity();
                    case ProcessDesigner.PblActivityType.setMessageStep:
                        return new ProcessDesigner.PblSetMessageActivity();
                    case ProcessDesigner.PblActivityType.setDisplayModeStep:
                        return new ProcessDesigner.PblSetDisplayModeActivity();
                    case ProcessDesigner.PblActivityType.setVisibilityStep:
                        return new ProcessDesigner.PblSetVisibilityActivity();
                    case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep:
                        return new ProcessDesigner.PblSetFieldRequiredLevelActivity();
                    case ProcessDesigner.PblActivityType.setAttributeValueStep:
                        return new ProcessDesigner.PblSetAttributeValueActivity();
                    case ProcessDesigner.PblActivityType.setDefaultValueStep:
                        return new ProcessDesigner.PblSetDefaultValueActivity();
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                        return new ProcessDesigner.PblSuggestionActivity();
                    case ProcessDesigner.PblActivityType.acceptConditionStep:
                        return new ProcessDesigner.PblAcceptConditionActivity();
                    case ProcessDesigner.PblActivityType.customJavascriptStep:
                        return new ProcessDesigner.PblCustomJavascriptActivity();
                    default:
                        return _super.prototype.createActivity.call(this, activityType);
                }
            };
            return PblActivityDefinitionFactory;
        })(ProcessDesigner.ProcessActivityDefinitionFactory);
        ProcessDesigner.PblActivityDefinitionFactory = PblActivityDefinitionFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PblCustomJavascriptActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the Run Script activity of the business rule.
//  Run Script Action will only be visible when PBL is opened from TBX.
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var PblCustomJavascriptActivity = (function (_super) {
            __extends(PblCustomJavascriptActivity, _super);
            function PblCustomJavascriptActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setVisibilityStep);
                this._customJavascript = "";
            }
            Object.defineProperty(PblCustomJavascriptActivity.prototype, "customJavascript", {
                get: function () {
                    return this._customJavascript;
                },
                set: function (value) {
                    this._customJavascript = value;
                },
                enumerable: true,
                configurable: true
            });
            PblCustomJavascriptActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.customJavascriptStep);
                this.addNewItem(ProcessDesigner.PblActivityType.customJavascriptStep);
            };
            PblCustomJavascriptActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                this.customJavascript = this.processStep.get_javascript();
                this.displayName = this.processStep.get_Description();
            };
            PblCustomJavascriptActivity.prototype.prepareJsonObject = function (customJavascriptActivity, workflowStep) {
                var _customJavascriptStep = customJavascriptActivity.processStep;
                var customJavascriptObj = new Microsoft.Crm.Workflow.ObjectModel.CustomJavascriptStep(workflowStep);
                if (_customJavascriptStep) {
                    customJavascriptObj.set_Id(_customJavascriptStep.get_Id());
                    customJavascriptObj.set_Name(_customJavascriptStep.get_Name());
                    var stepLabels = _customJavascriptStep.get_stepLabels();
                    for (var i = 0; i < stepLabels.get_count(); i++) {
                        customJavascriptObj.addLabel(stepLabels.get_item(i));
                    }
                }
                else {
                    customJavascriptObj.set_Id("CustomJavascriptStep_" + customJavascriptActivity.getActivityID());
                }
                customJavascriptObj.set_Description(customJavascriptActivity.displayName);
                customJavascriptObj.set_javascript(customJavascriptActivity.customJavascript);
                return customJavascriptObj;
            };
            PblCustomJavascriptActivity.prototype.clone = function () {
                var customJavascriptActivityClone = new PblCustomJavascriptActivity();
                customJavascriptActivityClone = _super.prototype.clone.call(this, customJavascriptActivityClone);
                customJavascriptActivityClone.customJavascript = this.customJavascript;
                return customJavascriptActivityClone;
            };
            PblCustomJavascriptActivity.prototype.getPropertyPageClone = function () {
                var customJavascriptActivityClone = _super.prototype.getPropertyPageClone.call(this, new PblCustomJavascriptActivity());
                customJavascriptActivityClone.customJavascript = this.customJavascript;
                return customJavascriptActivityClone;
            };
            PblCustomJavascriptActivity.prototype._validateActivity = function () {
                var status = true;
                if (!this.customJavascript || this.customJavascript.trim().length == 0) {
                    var result = Validation.Engine.checkLevel("#customJSSourceValue", Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"));
                    status = this.addResult(result);
                }
                return status;
            };
            return PblCustomJavascriptActivity;
        })(ProcessDesigner.PblActionActivity);
        ProcessDesigner.PblCustomJavascriptActivity = PblCustomJavascriptActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//  <copyright file="PBLSuggestionActivity.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the action activity of the business rule
//  </summary>
/// <reference path="../../../process/model/processactivitydefinitionmodel.ts" />
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var PblSuggestionActivity = (function (_super) {
            __extends(PblSuggestionActivity, _super);
            function PblSuggestionActivity() {
                _super.call(this, ProcessDesigner.PblActivityType.setSuggestionStep);
                this.actionSteps = [];
                this._suggestionBody = "";
                this._acceptanceText = "";
                this._isNewlyAdded = false;
                var newStepAction = new ProcessDesigner.PblSetAttributeValueActivity();
                newStepAction.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetFieldValue");
                newStepAction.parentSuggestionActivity = this;
                newStepAction.sequence = 0;
                newStepAction.setParentActivityID(this.getActivityID());
                newStepAction.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                newStepAction.setActivityID(this.getActivityID()
                    + "_Action_"
                    + (this.actionSteps.length + 1));
                this.actionSteps.push(newStepAction);
                if (ProcessDesigner.PBLDesignerControl.isNew()) {
                    this.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DefineRecommendation");
                }
            }
            Object.defineProperty(PblSuggestionActivity.prototype, "isNewlyAdded", {
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
            Object.defineProperty(PblSuggestionActivity.prototype, "entity", {
                get: function () {
                    if (this._entity == null) {
                        this._entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(ProcessDesigner.ControlManager.workflowStep);
                        this._entity.set_entityName(ProcessDesigner.ControlManager.primaryEntityName);
                        this._entity.set_parameterName("primaryEntity");
                    }
                    return this._entity;
                },
                set: function (value) {
                    this._entity = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblSuggestionActivity.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblSuggestionActivity.prototype, "suggestionBody", {
                get: function () {
                    return this._suggestionBody;
                },
                set: function (value) {
                    this._suggestionBody = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PblSuggestionActivity.prototype, "acceptanceText", {
                get: function () {
                    return this._acceptanceText;
                },
                set: function (value) {
                    this._acceptanceText = value;
                },
                enumerable: true,
                configurable: true
            });
            PblSuggestionActivity.prototype.initialize = function (properties) {
                _super.prototype.initialize.call(this, properties);
                this.setActivityTypeID(ProcessDesigner.PblActivityType.setSuggestionStep);
                this.addNewItem(ProcessDesigner.PblActivityType.setSuggestionStep);
            };
            PblSuggestionActivity.prototype.initializeFromProcessStep = function () {
                _super.prototype.initializeFromProcessStep.call(this);
                if (this.actionSteps.length == 1) {
                    this.actionSteps.pop();
                }
                var pblActionParseBehavior = new ProcessDesigner.FieldSuggestionTypeParser();
                pblActionParseBehavior.parseAction(this.processStep);
                this.field = pblActionParseBehavior.field;
                this.entity = pblActionParseBehavior.entity;
                this.displayName = pblActionParseBehavior.displayName;
                this.suggestionBody = pblActionParseBehavior.suggestionBody.description;
                this.acceptanceText = pblActionParseBehavior.acceptanceText.description;
            };
            PblSuggestionActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
                switch (slotType) {
                    case GenericWorkflowDesigner.SlotType.InsertVertical:
                        return [ProcessDesigner.PblActivityType.setAttributeValueStep, ProcessDesigner.PblActivityType.setDefaultValueStep, ProcessDesigner.PblActivityType.setDisplayModeStep, ProcessDesigner.PblActivityType.setFieldRequiredLevelStep, ProcessDesigner.PblActivityType.setMessageStep, ProcessDesigner.PblActivityType.setVisibilityStep, ProcessDesigner.PblActivityType.setSuggestionStep, ProcessDesigner.PblActivityType.customJavascriptStep];
                    default:
                        return [];
                }
                ;
            };
            PblSuggestionActivity.prototype.prepareJsonObject = function (suggestionActivity, workflowStep) {
                var _setSuggestionStep = suggestionActivity.processStep;
                var setSuggestionObj = new Microsoft.Crm.Workflow.ObjectModel.SetMessageStep(workflowStep);
                setSuggestionObj.set_workflow(workflowStep);
                if (_setSuggestionStep) {
                    setSuggestionObj.set_Id(_setSuggestionStep.get_Id());
                    setSuggestionObj.set_Name(_setSuggestionStep.get_Name());
                }
                else {
                    setSuggestionObj.set_Id("SetMessageStep_" + suggestionActivity.getActivityID());
                }
                setSuggestionObj.set_Description(suggestionActivity.displayName);
                setSuggestionObj.set_level(ProcessDesigner.RecommendationStep.RecommendationLevel);
                var actionStepObj = new Microsoft.Crm.Workflow.ObjectModel.ActionStep(workflowStep);
                actionStepObj.set_workflow(workflowStep);
                actionStepObj.set_Id("ActionStep5");
                actionStepObj.set_Description("Test action Step");
                actionStepObj.set_Name("Action step");
                actionStepObj.set_actionType(4);
                actionStepObj.set_processId(Random.Guid.NewGuid());
                actionStepObj.set_uniqueName(Random.Guid.RandomId() + "ActionStep");
                var actionStepLabel = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
                actionStepLabel.set_labelId(Random.Guid.NewGuid());
                actionStepLabel.set_languageCode(window.LOCID_BUSINESSRULE_SETORGLCID);
                if (suggestionActivity.acceptanceText) {
                    actionStepLabel.set_description(suggestionActivity.acceptanceText);
                }
                else {
                    actionStepLabel.set_description("");
                }
                actionStepObj.addLabel(actionStepLabel);
                for (var i = 0; i < this.actionSteps.length; i++) {
                    var child = this.actionSteps[i];
                    actionStepObj.appendStep(child.prepareJsonObject(child, workflowStep));
                }
                var stepcollection = new Microsoft.Crm.Workflow.ObjectModel.StepCollection();
                stepcollection.add(actionStepObj);
                setSuggestionObj.set_ActionSteps(stepcollection);
                var stepLabel = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
                if (_setSuggestionStep) {
                    var stepLabels = _setSuggestionStep.get_stepLabels();
                    stepLabel = stepLabels.get_item(0);
                }
                else {
                    stepLabel.set_labelId(Random.Guid.NewGuid());
                    stepLabel.set_languageCode(window.LOCID_BUSINESSRULE_SETORGLCID);
                }
                if (suggestionActivity.suggestionBody) {
                    stepLabel.set_description(suggestionActivity.suggestionBody);
                }
                else {
                    stepLabel.set_description("");
                }
                setSuggestionObj.addLabel(stepLabel);
                setSuggestionObj.set_controlId(suggestionActivity.field);
                if (suggestionActivity.entity) {
                    setSuggestionObj.set_entity(suggestionActivity.entity);
                }
                else {
                    var primaryEntity = new ProcessDesigner.PblJsonConverterHelper().getprimaryEntityJson(suggestionActivity.entity, workflowStep);
                    setSuggestionObj.set_entity(primaryEntity);
                }
                return setSuggestionObj;
            };
            PblSuggestionActivity.prototype._validateActivity = function () {
                var status = true;
                status = this.validateProperties() && status;
                if (Validation.Engine.isAllowedLevel(Validation.Level.Save)) {
                    status = this.validateChildren(this.actionSteps) && status;
                }
                return status;
            };
            PblSuggestionActivity.prototype.validateProperties = function () {
                var status = true;
                var result = null;
                result = Validation.Engine.validateField("#attributeNameDropDown", this.field, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BPFStepActivity_Field"), null);
                status = this.addResult(result) && status;
                result = Validation.Engine.validateField("#suggestionBody", this.suggestionBody, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"), null);
                status = this.addResult(result) && status;
                result = Validation.Engine.validateField("#acceptDescription", this.acceptanceText, Validation.Required.apply, Validation.Level.Change, ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_NonEmptyValueMessage"), null);
                status = this.addResult(result) && status;
                return status;
            };
            PblSuggestionActivity.prototype.clearErrorMessages = function () {
                var ret = _super.prototype.clearErrorMessages.call(this);
                for (var i = 0; i < this.actionSteps.length; i++) {
                    this.actionSteps[i].clearErrorMessages();
                }
                return ret;
            };
            PblSuggestionActivity.prototype._getErrorCount = function () {
                return this.errCount + this.getChildrenErrorCount(this.actionSteps);
            };
            PblSuggestionActivity.prototype._getSubViewsErrorCount = function () {
                return this.getChildrenErrorCount(this.actionSteps);
            };
            PblSuggestionActivity.prototype.clone = function () {
                var suggestionActivityClone = this.getPropertyPageClone();
                var actionStepsClone = [];
                jQuery.each(this.actionSteps, function (index, actionActivity) {
                    var newActionActivity = actionActivity.getCloneOfActivity();
                    newActionActivity.setActivityID(_.uniqueId(actionActivity.getActivityID()));
                    newActionActivity.parentSuggestionActivity = suggestionActivityClone;
                    actionStepsClone.push(newActionActivity);
                });
                suggestionActivityClone.actionSteps = actionStepsClone;
                suggestionActivityClone.setParentActivityID(this.getParentActivityID());
                suggestionActivityClone.setParentBranchID(this.getParentBranchID());
                return suggestionActivityClone;
            };
            PblSuggestionActivity.prototype.getPropertyPageClone = function () {
                var suggestionActivityClone = new PblSuggestionActivity();
                suggestionActivityClone.entity = this.entity;
                suggestionActivityClone.displayName = this.displayName;
                suggestionActivityClone.suggestionBody = this.suggestionBody;
                suggestionActivityClone.acceptanceText = this.acceptanceText;
                suggestionActivityClone.field = this.field;
                suggestionActivityClone.isNewlyAdded = this.isNewlyAdded;
                suggestionActivityClone.addMultipleErrorMessages(this.getErrorMessages());
                return suggestionActivityClone;
            };
            PblSuggestionActivity.prototype.getCloneOfActivity = function () {
                return this.clone();
            };
            PblSuggestionActivity.prototype.setNewActionSteps = function (NewActionsSteps) {
                this.actionSteps = NewActionsSteps;
            };
            return PblSuggestionActivity;
        })(ProcessDesigner.ProcessActivityDefinitionModel);
        ProcessDesigner.PblSuggestionActivity = PblSuggestionActivity;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLActivityDefinitionCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PBLActivityDefinitionCollection = (function (_super) {
            __extends(PBLActivityDefinitionCollection, _super);
            function PBLActivityDefinitionCollection() {
                _super.call(this);
            }
            PBLActivityDefinitionCollection.prototype.UpdatePositions = function () {
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
                                left = ProcessDesigner.PblWorkflowTree.prototype.getMaxDrift(children[1]);
                            if (children[2] != undefined)
                                right = ProcessDesigner.PblWorkflowTree.prototype.getMaxDrift(children[2]);
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
            return PBLActivityDefinitionCollection;
        })(GenericWorkflowDesigner.ActivityDefinitionCollection);
        ProcessDesigner.PBLActivityDefinitionCollection = PBLActivityDefinitionCollection;
        ;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="PblInsertSlotHorizontalDropHandler.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the Pbl activity type Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblInsertSlotHorizontalDropHandler = (function (_super) {
            __extends(PblInsertSlotHorizontalDropHandler, _super);
            function PblInsertSlotHorizontalDropHandler() {
                _super.apply(this, arguments);
            }
            PblInsertSlotHorizontalDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolve();
                    return deferred.promise();
                }
                GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                    GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentAfter(self.currentActivity, droppedActivitiesComponent).done(function (insertedActivity) {
                        insertedActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                            var addModeName = ProcessDesigner.TelemetryEventReporter.GetAddModeNameForActivity(ProcessDesigner.PBLToolBarView.addMode);
                            var activityTypeId = activity.getActivityTypeID();
                            ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent(addModeName, "", activityTypeId, "");
                            deferred.resolveWith(activity, [activity]);
                        });
                    });
                });
                return deferred.promise();
            };
            return PblInsertSlotHorizontalDropHandler;
        })(GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler);
        ProcessDesigner.PblInsertSlotHorizontalDropHandler = PblInsertSlotHorizontalDropHandler;
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
        var PblInsertSlotVerticalDropHandler = (function (_super) {
            __extends(PblInsertSlotVerticalDropHandler, _super);
            function PblInsertSlotVerticalDropHandler() {
                _super.apply(this, arguments);
            }
            PblInsertSlotVerticalDropHandler.prototype.insertActivityComponent = function (droppedActivityComponent) {
                var parent;
                var parentBranchId;
                if (this.currentActivity.getActivityTypeID() == "condition") {
                    parent = this.currentActivity;
                    parentBranchId = 2;
                }
                else {
                    parent = this.currentActivity.getParent();
                    parentBranchId = this.currentActivity.getParentBranchID();
                }
                return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, parentBranchId);
            };
            return PblInsertSlotVerticalDropHandler;
        })(GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler);
        ProcessDesigner.PblInsertSlotVerticalDropHandler = PblInsertSlotVerticalDropHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="PblSlotInsertHorizontalHandlerFactory.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Class containing the Pbl activity type Process
//  </summary>
// 
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PblSlotInsertHorizontalHandlerFactory = (function () {
            function PblSlotInsertHorizontalHandlerFactory() {
            }
            PblSlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                var currentActivityType = currentActivity.getActivityTypeID();
                var parentActivityId = "";
                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent("Drag-Drop", currentActivity.id, currentActivityType, parentActivityId);
                switch (currentActivity.getActivityTypeID()) {
                    default: return new ProcessDesigner.PblInsertSlotHorizontalDropHandler(currentActivity);
                }
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                throw new Error("Internal : Operation not implemented");
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createDragHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
            };
            PblSlotInsertHorizontalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
            };
            return PblSlotInsertHorizontalHandlerFactory;
        })();
        ProcessDesigner.PblSlotInsertHorizontalHandlerFactory = PblSlotInsertHorizontalHandlerFactory;
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
        var PblSlotInsertVerticalHandlerFactory = (function () {
            function PblSlotInsertVerticalHandlerFactory() {
            }
            PblSlotInsertVerticalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                var currentActivityType = currentActivity.getActivityTypeID();
                var parentActivityId = "";
                ProcessDesigner.TelemetryEventReporter.ReportTileAddedTelemetryEvent("Drag-Drop", currentActivity.id, currentActivityType, parentActivityId);
                switch (currentActivity.getActivityTypeID()) {
                    default: return new ProcessDesigner.PblInsertSlotVerticalDropHandler(currentActivity);
                }
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                throw new Error("Internal : Operation not implemented");
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createDragHandler = function (currentActivity) {
                return null;
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
            };
            PblSlotInsertVerticalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
                return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
            };
            return PblSlotInsertVerticalHandlerFactory;
        })();
        ProcessDesigner.PblSlotInsertVerticalHandlerFactory = PblSlotInsertVerticalHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLSuggestionDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PBLSuggestionDropHandler = (function (_super) {
            __extends(PBLSuggestionDropHandler, _super);
            function PBLSuggestionDropHandler() {
                _super.apply(this, arguments);
            }
            PBLSuggestionDropHandler.prototype.drop = function (droppedActivitiesComponent) {
                var self = this;
                var deferred = $.Deferred();
                var droppedActivity = droppedActivitiesComponent.getRoot();
                if (droppedActivity && droppedActivity.getActivityTypeID() != ProcessDesigner.PblActivityType.setAttributeValueStep) {
                    return _super.prototype.drop.call(this, droppedActivitiesComponent);
                }
                if (!this.dropAllowed(droppedActivitiesComponent)) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                if (!droppedActivity || this.currentActivity.getActivityTypeID() != ProcessDesigner.PblActivityType.setSuggestionStep) {
                    deferred.resolveWith(this.currentActivity, [this.currentActivity]);
                    return deferred.promise();
                }
                var actionActivity = droppedActivity;
                actionActivity.setActivityID(this.currentActivity.getActivityID()
                    + "_Action_"
                    + (this.currentActivity.actionSteps.length + 1));
                actionActivity.parentSuggestionActivity = this.currentActivity;
                actionActivity.setParentActivityID(this.currentActivity.getActivityID());
                actionActivity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                actionActivity.isNewlyAdded = true;
                this.currentActivity.actionSteps.push(actionActivity);
                deferred.resolveWith(droppedActivity, [droppedActivity]);
                GenericWorkflowDesigner.currentModel = this.currentActivity;
                ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.DropSetfield;
                GenericWorkflowDesigner.Settings.isNewStageAdded = false;
                ProcessDesigner.ControlManager.isNewRecommendationActionAdded = false;
                ProcessDesigner.ControlManager.ShowSuggestionDetails();
                ProcessDesigner.ControlManager.isNewRecommendationActionAdded = true;
                ProcessDesigner.CanvasDisplayUtility.handleSuggestionDetailsOverlap();
                ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                return deferred.promise();
            };
            PBLSuggestionDropHandler.prototype.dropAllowed = function (activityComponent) {
                if (activityComponent.getRoot().getActivityTypeID() == ProcessDesigner.PblActivityType.setAttributeValueStep) {
                    return true;
                }
                else {
                    return _super.prototype.dropAllowed.call(this, activityComponent);
                }
            };
            return PBLSuggestionDropHandler;
        })(GenericWorkflowDesigner.DefaultActivityDropHandler);
        ProcessDesigner.PBLSuggestionDropHandler = PBLSuggestionDropHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="SuggestionTileButtonClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var SuggestionTileButtonClickHandler = (function () {
            function SuggestionTileButtonClickHandler(currentActivity) {
                this.currentActivity = currentActivity;
            }
            SuggestionTileButtonClickHandler.prototype.click = function (elementClicked) {
                GenericWorkflowDesigner.eventManager.trigger('hideMenus');
                GenericWorkflowDesigner.eventManager.trigger('hideContextMenus');
                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(this.currentActivity.id, ProcessDesigner.PblActivityType.setSuggestionStep, "");
                if ($("#canvas").find(".stage-detail-container").length > 0) {
                    if (ProcessDesigner.PBLToolBarView.addMode !== ProcessDesigner.PBLAddActivityTypeCommandID.DropSetfield) {
                        var suggestionDetailsContainer = $("#canvas").find(".stage-detail-container");
                        var selectedActivity = this.getSelectedActivity(this.currentActivity);
                        if (!selectedActivity) {
                            selectedActivity = this.currentActivity;
                        }
                        var selectedActivityName = ProcessDesigner.ElementPrefixes.DetailsPrefix + selectedActivity.getActivityID();
                        var suggestionDetailsContainerId = $(suggestionDetailsContainer).attr("id");
                        suggestionDetailsContainer.remove();
                        if (SuggestionTileButtonClickHandler.actionListView) {
                            SuggestionTileButtonClickHandler.actionListView.deleteActionListView();
                        }
                        if (selectedActivityName !== suggestionDetailsContainerId) {
                            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
                            var existingButtonText = suggestionDetailsContainerId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonTextPrefix);
                            var existingButtonImage = suggestionDetailsContainerId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonImagePrefix);
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
                            SuggestionTileButtonClickHandler.actionListView = new ProcessDesigner.ActionListView(this.currentActivity, elementClicked);
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
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([this.currentActivity]);
                    this.currentActivity.highLight();
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
                    SuggestionTileButtonClickHandler.actionListView = new ProcessDesigner.ActionListView(this.currentActivity, elementClicked);
                    return;
                }
            };
            SuggestionTileButtonClickHandler.prototype.getSelectedActivity = function (givenActivity) {
                if (givenActivity.getActivityTypeID() === ProcessDesigner.PblActivityType.setAttributeValueStep) {
                    return givenActivity.parentSuggestionActivity;
                }
                else if (givenActivity.getActivityTypeID() === ProcessDesigner.PblActivityType.setSuggestionStep) {
                    return givenActivity;
                }
            };
            return SuggestionTileButtonClickHandler;
        })();
        ProcessDesigner.SuggestionTileButtonClickHandler = SuggestionTileButtonClickHandler;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLSlotTileHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PBLSlotTileHolderHandlerFactory = (function (_super) {
            __extends(PBLSlotTileHolderHandlerFactory, _super);
            function PBLSlotTileHolderHandlerFactory() {
                _super.apply(this, arguments);
            }
            PBLSlotTileHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                        return new ProcessDesigner.PBLSuggestionDropHandler(currentActivity);
                    default:
                        return _super.prototype.createDropHandler.call(this, currentActivity);
                }
            };
            PBLSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
                switch (currentActivity.getActivityTypeID()) {
                    case ProcessDesigner.BPFActivityType.stage:
                        return new GenericWorkflowDesigner.DefaultActivityDblClickHandler(currentActivity);
                    default:
                        return _super.prototype.createDblClickHandler.call(this, currentActivity);
                }
            };
            return PBLSlotTileHolderHandlerFactory;
        })(GenericWorkflowDesigner.DefaultSlotTileHolderHandlerFactory);
        ProcessDesigner.PBLSlotTileHolderHandlerFactory = PBLSlotTileHolderHandlerFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PBLSubsequentActivityGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PBLSubsequentActivityGenerator = (function (_super) {
            __extends(PBLSubsequentActivityGenerator, _super);
            function PBLSubsequentActivityGenerator() {
                _super.apply(this, arguments);
            }
            PBLSubsequentActivityGenerator.prototype.createGenerator = function (activity) {
                if (activity.getActivityTypeID() == ProcessDesigner.BPFActivityType.condition) {
                    return new ProcessDesigner.ConditionSubsequentActivities(activity);
                }
                else {
                    return new GenericWorkflowDesigner.DefaultSubsequentActivities(activity);
                }
            };
            PBLSubsequentActivityGenerator.prototype.createChildActivities = function (activity) {
                return [];
            };
            return PBLSubsequentActivityGenerator;
        })(GenericWorkflowDesigner.SubsequentActivityGenerator);
        ProcessDesigner.PBLSubsequentActivityGenerator = PBLSubsequentActivityGenerator;
        ;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var AcceptConditionActivityTileInformation = (function (_super) {
            __extends(AcceptConditionActivityTileInformation, _super);
            function AcceptConditionActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.title = model.getProperties().Items[0].Title = model.sequence + ". " + model.acceptDescription;
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            AcceptConditionActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                return result;
            };
            return AcceptConditionActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.AcceptConditionActivityTileInformation = AcceptConditionActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var CustomJavascriptTileInformation = (function (_super) {
            __extends(CustomJavascriptTileInformation, _super);
            function CustomJavascriptTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" title= \"<%- Title %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" title="<%- tooltipText %>"><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            CustomJavascriptTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_CustomJavascript");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return CustomJavascriptTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.CustomJavascriptTileInformation = CustomJavascriptTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="PblTileInformationFactory.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of the PBL Tile Factory
// </summary>
//
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PblTileInformationFactory = (function (_super) {
            __extends(PblTileInformationFactory, _super);
            function PblTileInformationFactory() {
                _super.apply(this, arguments);
            }
            PblTileInformationFactory.prototype.GetTileInformationForActivityModel = function (activityModel, specificItemId) {
                var activityType = activityModel.getActivityTypeID();
                switch (activityType) {
                    case ProcessDesigner.ProcessActivityType.Root:
                        return new ProcessDesigner.BPFRootActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.ProcessActivityType.Condition:
                        return new ProcessDesigner.ConditionActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setMessageStep:
                        return new ProcessDesigner.SetMessageActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setDisplayModeStep:
                        return new ProcessDesigner.SetDisplayModeActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setVisibilityStep:
                        return new ProcessDesigner.SetVisibilityActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep:
                        return new ProcessDesigner.SetFieldRequiredLevelActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setAttributeValueStep:
                        return new ProcessDesigner.SetAttributeValueActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setDefaultValueStep:
                        return new ProcessDesigner.SetDefaultValueActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                        return new ProcessDesigner.SetSuggestionActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.acceptConditionStep:
                        return new ProcessDesigner.AcceptConditionActivityTileInformation(activityModel, specificItemId);
                    case ProcessDesigner.PblActivityType.customJavascriptStep:
                        return new ProcessDesigner.CustomJavascriptTileInformation(activityModel, specificItemId);
                    default:
                        return _super.prototype.GetTileInformationForActivityModel.call(this, activityModel, specificItemId);
                }
            };
            PblTileInformationFactory.prototype.GetDataUriforImagePath = function (imagePath) {
                return ProcessDesigner.PBLDesignerControl.dataBag.resources.getImageresource(imagePath);
            };
            PblTileInformationFactory.prototype.GetLocalizedString = function (inputString) {
                return ProcessDesigner.PBLDesignerControl.dataBag.resources.getString(inputString);
            };
            return PblTileInformationFactory;
        })(ProcessDesigner.ProcessTileInformationFactory);
        ProcessDesigner.PblTileInformationFactory = PblTileInformationFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="SetAttributeValueActivityTileInformation.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Represent the tile information of Set field value tile
// </summary>
//
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetAttributeValueActivityTileInformation = (function (_super) {
            __extends(SetAttributeValueActivityTileInformation, _super);
            function SetAttributeValueActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetAttributeValueActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetAttributeValueActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetAttributeValueActivityTileInformation = SetAttributeValueActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetDefaultValueActivityTileInformation = (function (_super) {
            __extends(SetDefaultValueActivityTileInformation, _super);
            function SetDefaultValueActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetDefaultValueActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetDefaultValue");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetDefaultValueActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetDefaultValueActivityTileInformation = SetDefaultValueActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetDisplayModeActivityTileInformation = (function (_super) {
            __extends(SetDisplayModeActivityTileInformation, _super);
            function SetDisplayModeActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetDisplayModeActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Lock_Unlock");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetDisplayModeActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetDisplayModeActivityTileInformation = SetDisplayModeActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetFieldRequiredLevelActivityTileInformation = (function (_super) {
            __extends(SetFieldRequiredLevelActivityTileInformation, _super);
            function SetFieldRequiredLevelActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetFieldRequiredLevelActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetBusinessRequired");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetFieldRequiredLevelActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetFieldRequiredLevelActivityTileInformation = SetFieldRequiredLevelActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetMessageActivityTileInformation = (function (_super) {
            __extends(SetMessageActivityTileInformation, _super);
            function SetMessageActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetMessageActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_ShowError");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetMessageActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetMessageActivityTileInformation = SetMessageActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetSuggestionActivityTileInformation = (function (_super) {
            __extends(SetSuggestionActivityTileInformation, _super);
            function SetSuggestionActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_ShowRecommendations") + " " + model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" title= \"<%- Title %>\"><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="suggestion-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetSuggestionActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_ShowRecommendations");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Recommendation_Activity_Name");
                return result;
            };
            return SetSuggestionActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetSuggestionActivityTileInformation = SetSuggestionActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var SetVisibilityActivityTileInformation = (function (_super) {
            __extends(SetVisibilityActivityTileInformation, _super);
            function SetVisibilityActivityTileInformation(model, itemId) {
                _super.call(this, model, itemId);
                this.title = "";
                this.actionTemplate = "";
                this.bottomTileTemplate = "";
                this.title = model.getProperties().Items[0].Title = model.displayName;
                this.actionTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.bottomTileTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="tile-footer-div"></div>';
                if (itemId != 0)
                    model.getProperties().Items[0].ItemID = itemId;
            }
            SetVisibilityActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["emptyTitleText"] = this.title;
                result["emptyTileTemplate"] = this.title;
                result["Title"] = this.title;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetVisibility");
                result["emptyTileImageTemplate"] = this.bottomTileTemplate;
                result["emptyTileTemplate"] = this.actionTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Activity_Name");
                return result;
            };
            return SetVisibilityActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.SetVisibilityActivityTileInformation = SetVisibilityActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../model/activity/pblactionactivity.ts" />
/// <reference path="../model/activity/pblsuggestionactivity.ts" />
/// <reference path="../model/activity/pblsetattributevalueactivity.ts" />
// -----------------------------------------------------------------------
// <copyright file="ActionListView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var ActionListView = (function (_super) {
            __extends(ActionListView, _super);
            function ActionListView(suggestionModel, tileContainer) {
                var detailsDiv = $("<div class='stage-detail-container-div'></div>");
                _super.call(this, {
                    model: suggestionModel,
                    el: detailsDiv
                });
                this.parent = tileContainer;
                this.suggestionDetailsDiv = detailsDiv;
                this.keyMap = { 17: false, 18: false, 78: false, 65: false };
                ActionListView.actions = this.model.actionSteps;
                this.render();
                if (!this.model.getReadonlyMode()) {
                    this.attachEventHandlers(this);
                }
            }
            ActionListView.prototype.initialize = function () {
                var self = this;
            };
            ActionListView.prototype.render = function () {
                var actions = this.model.actionSteps;
                $(".tileButtonDiv").removeClass("selected");
                $(".setSuggestionTile").removeClass("selected");
                $(".conditionTile").removeClass("selected");
                this.parent.children().children().addClass("selected");
                var div = $("<div class='stage-detail-container' id='" + ProcessDesigner.ElementPrefixes.DetailsPrefix + this.model.getActivityID() + "'></div>");
                div.css("width", this.parent[0].clientWidth + "px");
                div.addClass("selected");
                this.parent.find(".stage-detail-container-div").remove();
                this.$el.append(div);
                this.parent.append(this.$el);
                this.addActionListContainer($(div));
                this.setScrollbar($(this.suggestionDetailsDiv));
                this.openNewlyAddedAction(this);
                this.$el.find(".stage-detail-container").addClass("selected");
                return this;
            };
            ActionListView.prototype.openNewlyAddedAction = function (actionListView) {
                for (var i = 0; i < ActionListView.actions.length; i++) {
                    var action = ActionListView.actions[i];
                    if (action.isNewlyAdded && ProcessDesigner.ControlManager.isNewRecommendationActionAdded) {
                        action.isNewlyAdded = false;
                        ProcessDesigner.ControlManager.isNewRecommendationActionAdded = false;
                        $("#" + action.getActivityID())[0].scrollIntoView(false);
                        $("#" + action.getActivityID()).click();
                    }
                    var errcount = action.getErrorCount();
                    var stepId = action.id;
                    if (errcount > 0) {
                        $("#" + stepId).find(".subViewTileError").css("visibility", "visible");
                    }
                    else {
                        $("#" + stepId).find(".subViewTileError").css("visibility", "hidden");
                    }
                    $("#" + action.getActivityID()).focus();
                    ActionListView.attachKeyDownEventForActionListItem(actionListView);
                    ActionListView.enableDisableArrowButtons(actionListView);
                }
            };
            ActionListView.prototype.addActionListContainer = function (parentDiv) {
                var actionListContainerDiv = $('<div class="list-container-div"></div>');
                var listUl = $('<ul id="sortable" class="editview-step-list"  aria-live=\"polite\" aria-relevant=\"additions removals\"></ul>');
                var actionDiv = $('<span class="step-detail-div"></span>');
                if (ActionListView.actions == null) {
                    return this;
                }
                var titleForActionHeader = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Count_tooltip");
                titleForActionHeader = titleForActionHeader.replace("{0}", ActionListView.actions.length.toString());
                this.actionCount = _.template(" <div id=\"step-Count-Wrapper\" title=\"" + titleForActionHeader + "\"><span id=\"toggleStep\" class=\"CCFSymbolFont  ExpandList-symbol\"></span><span class=\"seeDetailsStepLabel canvasAreaTileTitle6 truncateString\">" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action") + " (" + ActionListView.actions.length + ")</span><span id=\"DownArrow\" class=\"CCFSymbolFont DownArrow-symbol\"></span><span id=\"UpArrow\" class=\"CCFSymbolFont UpArrow-symbol\"></span></div> ");
                $(actionDiv).append(this.actionCount);
                $(actionListContainerDiv).append(actionDiv);
                $(actionDiv).append(listUl);
                for (var i = 0; i < ActionListView.actions.length; i++) {
                    var action = ActionListView.actions[i];
                    var actionId = action.getActivityID();
                    ActionListView.actions[i].sequence = i + 1;
                    var listLi = $("<li class='step-list-listitem' tabindex='-1' id='" + actionId + "'></li>");
                    var elem1 = new ProcessDesigner.EditActionView(action, $(listLi));
                    elem1.render();
                    $(listUl).append(elem1.el);
                }
                $(parentDiv).append(actionListContainerDiv);
            };
            ActionListView.prototype.deleteActionListView = function () {
                this.removeEventHandlers();
                this.remove();
            };
            ActionListView.prototype.setScrollbar = function (parentDiv) {
                var canvasHeight = parseInt($("#zoomCanvasWrapper").css("height"), 10);
                var parentDivHeight = parseInt($(parentDiv.parent()[0]).css("height"), 10);
                var parentDivTop = parseInt($(parentDiv.parent()[0]).css("top"), 10);
                var horizontalScrollHeight = 10;
                var totalDivHeight = canvasHeight - (parentDivHeight + parentDivTop + horizontalScrollHeight);
                var requiredDivHeight = totalDivHeight - (2 * parseInt($("#step-Count-Wrapper").css("height"), 10));
                var actionHeight = parseInt($(".editViewTileTitle").css("height"), 10);
                if (requiredDivHeight < actionHeight) {
                    $("#sortable").css("max-height", actionHeight + "px");
                    document.getElementById("sortable").scrollIntoView(false);
                }
                else {
                    $("#sortable").css("max-height", requiredDivHeight + "px");
                }
                this.restrictDetailsDivHeight();
            };
            ActionListView.prototype.restrictDetailsDivHeight = function () {
                var detailContainerDiv = $(".stage-detail-container");
                var targetDivTopArray = [];
                var miniMapDivTop = this.calculateDivTopOffset($("#show-mini-map-div"));
                targetDivTopArray.push(miniMapDivTop);
                var plaintTextWrapperDivTop = this.calculateDivTopOffset($("#plaintTextWrapperDiv.collapsed"));
                targetDivTopArray.push(plaintTextWrapperDivTop);
                var targetDivOffsetTop = Math.min.apply(null, targetDivTopArray);
                if (detailContainerDiv.length > 0 && targetDivOffsetTop > 0) {
                    var detailContainerDivBottom = detailContainerDiv.offset().top + detailContainerDiv.height();
                    var difference = detailContainerDivBottom - targetDivOffsetTop;
                    if (difference > 0) {
                        $(".stage-detail-container-div").addClass("detailContainerBottomOffset");
                    }
                }
            };
            ActionListView.prototype.calculateDivTopOffset = function (targetDiv) {
                var targetDivOffsetTop = 0;
                if (targetDiv.length > 0) {
                    targetDivOffsetTop = targetDiv.offset().top;
                }
                return targetDivOffsetTop;
            };
            ActionListView.prototype.attachEventHandlers = function (actionListView) {
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
                        actionListView.evaluateActions();
                        var actionTileId = $('li.selected').attr('id');
                        var suggestion = actionListView.model;
                        GenericWorkflowDesigner.eventManager.trigger(ProcessDesigner.PblEvents.updatePlainTextView);
                        ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(actionTileId, ProcessDesigner.PblActivityType.setAttributeValueStep, suggestion.id, "Drag-Drop");
                        event.stopPropagation;
                    },
                    stop: function (event, ui) {
                        $('#sortable').children('li.step-list-listitem:not(.drag-in-progress-li)').removeClass("ondrag");
                        $('#step-Count-Wrapper').removeClass("ondrag");
                        $('.drag-in-progress-li').removeClass("drag-in-progress-li");
                        event.stopPropagation;
                    }
                });
                $("#libraryElementsetAttributeValue").draggable({
                    stop: function () {
                        $('#sortable').children().remove(".place-holder-listitem");
                        $('#libraryElementsetAttributeValue').removeClass("selected");
                    }
                });
                $("#libraryElementsetAttributeValue").on("dragstart", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                    var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1'>+</div>");
                    var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1'>+</div>");
                    placeHolderDiv.insertAfter(".step-list-listitem");
                    $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                    actionListView.makeDroppable(actionListView);
                });
                $("#libraryElementsetAttributeValue").on("dragend", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementsetAttributeValue").on("drop", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#libraryElementsetAttributeValue").on("dragleave", function (event) {
                    $('#sortable').children().remove(".place-holder-listitem");
                });
                $("#UpArrow").on("click", function (event) {
                    $(".step-list-listitem.selected").insertBefore($(".step-list-listitem.selected").prev('.step-list-listitem'));
                    $(".step-list-listitem.selected").focus();
                    actionListView.evaluateActions();
                    var actionTileId = $('li.selected').attr('id');
                    var suggestion = actionListView.model;
                    ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(actionTileId, ProcessDesigner.PblActivityType.setAttributeValueStep, suggestion.id, "Up-Down Button");
                    ActionListView.enableDisableArrowButtons(actionListView);
                    event.stopPropagation();
                });
                $("#DownArrow").on("click", function (event) {
                    $(".step-list-listitem.selected").insertAfter($(".step-list-listitem.selected").next('.step-list-listitem'));
                    $(".step-list-listitem.selected").focus();
                    actionListView.evaluateActions();
                    var actionTileId = $('li.selected').attr('id');
                    var suggestion = actionListView.model;
                    ProcessDesigner.TelemetryEventReporter.ReportTileReorderedTelemetryEvent(actionTileId, ProcessDesigner.PblActivityType.setAttributeValueStep, suggestion.id, "Up-Down Button");
                    ActionListView.enableDisableArrowButtons(actionListView);
                    event.stopPropagation();
                });
                $(".step-list-listitem").on("click", function (event) {
                    $(".step-list-listitem.selected").addClass("unselected");
                    $(".step-list-listitem.selected").removeClass("selected");
                    $(this).addClass('selected');
                    $(this).removeClass('unselected');
                    if (($(".stage-detail-container").length > 0) && ($(".setSuggestionTile.selected").length > 0) && ("details_" + $(".setSuggestionTile.selected").attr("id") == $(".stage-detail-container").attr("id"))) {
                        $(".stage-detail-container").addClass("selected");
                    }
                    ActionListView.enableDisableArrowButtons(actionListView);
                });
                $(document).on('AddButton', function (event, droppable) {
                    if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield || ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField) {
                        if ($(".stage-detail-container").length > 0) {
                            $('#sortable').children().remove(".place-holder-listitem");
                            var firstPlaceHolderDiv = $("<div class='place-holder-listitem first' tabindex='-1'>+</div>");
                            var placeHolderDiv = $("<div class='place-holder-listitem' tabindex='-1'>+</div>");
                            placeHolderDiv.insertAfter(".step-list-listitem");
                            $('#sortable').children('li').length > 0 ? firstPlaceHolderDiv.insertBefore($('#sortable').children('li').first()) : $('#sortable').append(firstPlaceHolderDiv);
                            actionListView.makePlaceHolderClick(actionListView);
                            actionListView.makePlaceHolderNavigable();
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
                ActionListView.attachKeyDownEventForActionListItem(actionListView);
            };
            ActionListView.prototype.removeEventHandlers = function () {
                $("#libraryElementsetAttributeValue").off("dragstart", null, null);
                $("#libraryElementsetAttributeValue").off("dragend", null, null);
                $("#libraryElementsetAttributeValue").off("drop", null, null);
                $("#libraryElementsetAttributeValue").off("dragleave", null, null);
                $("#sortable").off("focusout", null, null);
                $("#UpArrow").off("click", null, null);
                $("#DownArrow").off("click", null, null);
                $(".step-list-listitem").off("click", null, null);
                $("#toggleStep").off("click", null, null);
            };
            ActionListView.prototype.evaluateActions = function () {
                var updatedActionsArray = [];
                $(".step-list-listitem").each(function (index) {
                    var actionIdFromList = $(this).attr("id");
                    for (var i = 0; i < ActionListView.actions.length; i++) {
                        if (ActionListView.actions[i].getActivityID() === actionIdFromList) {
                            var currentAction = $(".step-list-listitem")[index];
                            var currentActionIndex = updatedActionsArray.length + 1;
                            ActionListView.actions[i].sequence = currentActionIndex;
                            $(currentAction).find("#stepSequence").html(GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(ActionListView.actions[i].displayName));
                            $(currentAction).find("#stepTitle").html("");
                            updatedActionsArray.push(ActionListView.actions[i]);
                            break;
                        }
                    }
                });
                ActionListView.actions = updatedActionsArray;
                this.updateActivityTree();
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            };
            ActionListView.prototype.updateActivityTree = function () {
                this.model.setNewActionSteps(ActionListView.actions);
            };
            ActionListView.attachKeyDownEventForActionListItem = function (actionListView) {
                $(".step-list-listitem").keydown(function (event) {
                    if (event.keyCode === 40) {
                        if ($(event.target.nextSibling).length > 0) {
                            $(event.target).removeClass("selected");
                            $(event.target.nextSibling).focus();
                            $(event.target.nextSibling).addClass("selected");
                        }
                        else {
                            $(event.target).removeClass("selected");
                            $(event.target).addClass("selected");
                            $(event.target).focus();
                        }
                        ActionListView.enableDisableArrowButtons(actionListView);
                        event.stopPropagation();
                    }
                    else if (event.keyCode === 38) {
                        if (event.shiftKey) {
                            var currentSuggestion = ProcessDesigner.ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel);
                            $("#canvas").find("#" + currentSuggestion.id + ".slot").focus();
                            var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentSuggestion.getActivityID();
                            var currentSuggestionDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentSuggestion.getActivityID();
                            if ($("#" + currentSuggestionDetailsDivName) && $("#" + currentSuggestionDetailsDivName).css("visibility") === "visible") {
                                $(currentTileButtonName).click();
                            }
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
                            ActionListView.enableDisableArrowButtons(actionListView);
                        }
                        event.stopPropagation();
                    }
                    else if (event.keyCode == 68) {
                        if (event.shiftKey) {
                            $("#DownArrow").click();
                        }
                    }
                    else if (event.keyCode == 85) {
                        if (event.shiftKey) {
                            $("#UpArrow").click();
                        }
                    }
                    if (event.keyCode == 65) {
                        if (event.keyCode in actionListView.keyMap) {
                            actionListView.keyMap[event.keyCode] = true;
                        }
                    }
                    else if (actionListView.keyMap[65] && event.keyCode == 187) {
                        actionListView.keyMap[65] = false;
                        $("#canvas").find("#" + ProcessDesigner.ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel).getActivityID() + ".slot").focus();
                        $("#toggleStep").click();
                    }
                    else if (event.keyCode == 17) {
                        actionListView.keyMap[event.keyCode] = true;
                    }
                    else if (event.keyCode == 18) {
                        actionListView.keyMap[event.keyCode] = true;
                    }
                    else if (event.keyCode == 78) {
                        if (event.srcElement != undefined && $(event.srcElement).attr("type") != "text" && $(event.srcElement).attr("role") != "combobox" && $(event.srcElement).prop("tagName") != "TEXTAREA") {
                            if (actionListView.keyMap[17] && actionListView.keyMap[18]) {
                                actionListView.keyMap[17] = false;
                                actionListView.keyMap[18] = false;
                                ProcessDesigner.ControlManager.SetFunctionalityForButtonsWithShortcutKeys("#Add");
                            }
                        }
                    }
                    else if (event.keyCode == 67) {
                        if (actionListView.keyMap[17] && actionListView.keyMap[18]) {
                            actionListView.keyMap[17] = false;
                            actionListView.keyMap[18] = false;
                            ProcessDesigner.ControlManager.ClearSelections();
                            $("#libraryTab").children().focus();
                            $("#libraryTab").click();
                        }
                    }
                    else if (event.keyCode == 80) {
                        if (actionListView.keyMap[17] && actionListView.keyMap[18]) {
                            actionListView.keyMap[17] = false;
                            actionListView.keyMap[18] = false;
                            ProcessDesigner.ControlManager.ClearSelections();
                            $("#propertyTab").children().focus();
                            GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                        }
                    }
                    event.stopImmediatePropagation();
                });
            };
            ActionListView.prototype.makePlaceHolderClick = function (actionListView) {
                $(".place-holder-listitem").on("click keypress", function (event) {
                    event.stopPropagation();
                    if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield || ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField) {
                        actionListView.DropElement(event.target, actionListView, ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField);
                        actionListView.setScrollbar($(".stage-detail-container-div"));
                        ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                        $("#canvas").children(".hoverOverDroppable").removeClass("hoverOverDroppable");
                    }
                });
            };
            ActionListView.prototype.makePlaceHolderNavigable = function () {
                $(".place-holder-listitem").on("keydown", function (event) {
                    if (event.keyCode == 40) {
                        $(".step-list-listitem.selected").removeClass("selected");
                        $(event.target.nextSibling).focus();
                        $(event.target.nextSibling).addClass("selected");
                    }
                    if (event.keyCode == 38) {
                        if (event.target.previousSibling == null) {
                            $("#" + ProcessDesigner.ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel).getActivityID()).focus();
                        }
                        else {
                            $(event.target.previousSibling).focus();
                            $(event.target.previousSibling).addClass("selected");
                        }
                    }
                    event.stopImmediatePropagation();
                });
            };
            ActionListView.prototype.makeDroppable = function (actionListView) {
                $(".place-holder-listitem").droppable({
                    cursor: 'default',
                    tolerance: 'pointer',
                    activate: function (event, ui) {
                        if (ui.draggable.text().toString() == ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue")) {
                            $(this).addClass("hoverOverDroppable");
                        }
                    },
                    deactivate: function (event, ui) {
                        if (ui.draggable.text().toString() == ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue")) {
                            $(this).removeClass("hoverOverDroppable");
                        }
                    },
                    over: function (event, ui) {
                        if (ui.draggable.text().toString() == ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue")) {
                            $(this).addClass("hoverOverDroppableHighlight");
                        }
                    },
                    out: function (event, ui) {
                        if (ui.draggable.text().toString() == ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue")) {
                            $(this).removeClass("hoverOverDroppableHighlight");
                        }
                    },
                    drop: function (event, ui) {
                        if (ui.draggable.text().toString() == ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue")) {
                            actionListView.DropElement(event.target, actionListView, false);
                            actionListView.setScrollbar($(".stage-detail-container-div"));
                        }
                    }
                });
            };
            ActionListView.prototype.deletePblActions = function (toBeDeleted) {
                if (CommonTypes.Types.Object.isNullOrUndefined(toBeDeleted)) {
                    toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                    if (toBeDeleted.length <= 0) {
                        return;
                    }
                }
                var deletedActivities = [];
                for (var i = 0; i < toBeDeleted.length; i++) {
                    var currentActivity = toBeDeleted[i];
                    deletedActivities.push(currentActivity);
                    var parentActivity = currentActivity.getParent();
                    if (ProcessDesigner.PblActivityType.isActionActivityType(parentActivity.getActivityTypeID())
                        || parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition
                        || parentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                        var child = currentActivity.getChildActivitiesSorted()[0];
                        if (child) {
                            child.setParentActivityID(parentActivity.getActivityID());
                            child.setParentBranchID(currentActivity.getParentBranchID());
                        }
                    }
                    else {
                        throw Error(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PBLActionActivityDeleteHandler_Error"));
                    }
                }
                jQuery.each(deletedActivities, function (indexNode, node) {
                    var nodeType = node.getActivityTypeID();
                    var parentId = "";
                    ProcessDesigner.TelemetryEventReporter.ReportTileRemovedTelemetryEvent(node.id, nodeType, parentId);
                    GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                });
            };
            ActionListView.prototype.DropElement = function (droppable, actionListView, isPasteSetFieldAction) {
                var newActionActivity = new ProcessDesigner.PblSetAttributeValueActivity();
                newActionActivity.displayName = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Default_DisplayName_SetFieldValue");
                var parentSuggestionActivity = actionListView.model;
                var sourceSuggestionActivityId = "";
                var targetSuggestionActivityId = parentSuggestionActivity.getActivityID();
                if (isPasteSetFieldAction) {
                    var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
                    if (copiedActivities.length <= 0) {
                        return;
                    }
                    newActionActivity = copiedActivities[0].getCloneOfActivity();
                    var activityType = newActionActivity.getActivityTypeID();
                    if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                        newActionActivity = copiedActivities[0];
                        if (newActionActivity.isInRecommendationTile()) {
                            sourceSuggestionActivityId = newActionActivity.parentSuggestionActivity.getActivityID();
                        }
                        if (sourceSuggestionActivityId === targetSuggestionActivityId) {
                            $(".step-list-listitem").each(function (index) {
                                var currentAction = $(".step-list-listitem")[index];
                                if (currentAction && currentAction.getAttribute("id") == copiedActivities[0].getActivityID()) {
                                    $(currentAction).remove();
                                    return false;
                                }
                            });
                        }
                        if (copiedActivities[0].parentSuggestionActivity) {
                            ProcessDesigner.PBLActionActivityInSuggestionDeleteHandler.prototype.deleteActionFromSuggestion(copiedActivities[0]);
                            var tileCount = "#tileCount_" + (copiedActivities[0].parentSuggestionActivity.getActivityID());
                            $(tileCount).html(copiedActivities[0].parentSuggestionActivity.actionSteps.length);
                        }
                        else if (ProcessDesigner.PblActivityType.isActionActivityType(activityType)) {
                            actionListView.deletePblActions(copiedActivities);
                        }
                    }
                }
                if (!newActionActivity.getActivityID()) {
                    newActionActivity.setActivityID(parentSuggestionActivity.getActivityID()
                        + "_Action_"
                        + (parentSuggestionActivity.actionSteps.length + 1));
                }
                newActionActivity.parentSuggestionActivity = parentSuggestionActivity;
                newActionActivity.setParentActivityID(parentSuggestionActivity.getActivityID());
                newActionActivity.setParentBranchID(ProcessDesigner.DefaultBranchIndices.DefaultBranch);
                newActionActivity.isNewlyAdded = true;
                ActionListView.actions.push(newActionActivity);
                var tileCount = "#tileCount_" + (newActionActivity.parentSuggestionActivity.getActivityID());
                $(tileCount).html(ActionListView.actions.length);
                var listLi = $("<li class='step-list-listitem' tabindex='-1' id='" + newActionActivity.getActivityID() + "'></li>");
                var editActionView = new ProcessDesigner.EditActionView(newActionActivity, $(listLi));
                $(".seeDetailsStepLabel").html(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action") + " (" + ActionListView.actions.length + ")");
                var titleForActionHeader = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Action_Count_tooltip");
                $("#step-Count-Wrapper").attr("title", titleForActionHeader.replace("{0}", ActionListView.actions.length.toString()));
                editActionView.render();
                editActionView.$el.insertAfter(droppable);
                $(".step-list-listitem.selected").addClass("unselected");
                $(".step-list-listitem.selected").removeClass("selected");
                $('#sortable').children().remove(".place-holder-listitem");
                actionListView.evaluateActions();
                ProcessDesigner.ControlManager.isNewRecommendationActionAdded = true;
                actionListView.openNewlyAddedAction(actionListView);
                editActionView.$el.addClass("selected");
                editActionView.$el.removeClass("unselected");
                editActionView.$el.focus();
                ActionListView.attachKeyDownEventForActionListItem(actionListView);
                ActionListView.enableDisableArrowButtons(actionListView);
                if (($(".stage-detail-container").length > 0) && ($(".setSuggestionTile.selected").length > 0) && ("details_" + $(".setSuggestionTile.selected").attr("id") == $(".stage-detail-container").attr("id"))) {
                    $(".stage-detail-container").addClass("selected");
                }
                $(this).removeClass("hoverOverDroppable");
                $(this).removeClass("hoverOverDroppableHighlight");
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                ProcessDesigner.CanvasDisplayUtility.handleSuggestionDetailsOverlap();
            };
            ActionListView.prototype.disableArrowButton = function (arrowButtonDiv) {
                arrowButtonDiv.attr("aria-disabled", true);
                arrowButtonDiv.addClass("disableArrowButton");
            };
            ActionListView.prototype.enableArrowButton = function (arrowButtonDiv) {
                arrowButtonDiv.attr("aria-disabled", false);
                arrowButtonDiv.removeClass("disableArrowButton");
            };
            ActionListView.enableDisableArrowButtons = function (actionListView) {
                if ($(".step-list-listitem.selected") != null && $(".step-list-listitem").length > 1) {
                    actionListView.enableArrowButton($('#DownArrow'));
                    actionListView.enableArrowButton($('#UpArrow'));
                }
                if ($(".step-list-listitem.selected") != null && ($(".step-list-listitem.selected").next('.step-list-listitem').length == 0)) {
                    actionListView.disableArrowButton($('#DownArrow'));
                }
                if ($(".step-list-listitem.selected") != null && ($(".step-list-listitem.selected").prev('.step-list-listitem').length == 0)) {
                    actionListView.disableArrowButton($('#UpArrow'));
                }
            };
            return ActionListView;
        })(Backbone.View);
        ProcessDesigner.ActionListView = ActionListView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="EditActionView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var EditActionView = (function (_super) {
            __extends(EditActionView, _super);
            function EditActionView(model, el) {
                _super.call(this, {
                    model: model,
                    el: el
                });
                this.className = "step-item";
            }
            EditActionView.prototype.initialize = function () {
                this.actionTemplate = _.template(" <div class=\"stepTile\" title= \"<%- Field %>\"><div class=\"parentStepDiv\"><span class=\"stepImageWrapper\"><span class=\"CCFSymbolFont setFieldTileSymbol stepImageWrapper-size\"></span></span></div><div class=\"editViewTileTitle\" ><div id=\"stepSequence\" class=\"canvasAreaTileTitle5 truncateString\"><%- Field %></div><div id=\"stepTitle\" class=\"canvasAreaTileTitle5 truncateString\"><%- Title %></div></div><div class=\"subViewTileError\" title= \"<%- ErrorToolTip %>\"><span class=\"CCFSymbolFont errorNotificationSymbol notification- fontIcons - size \"></span></div></div>");
                this.$el.addClass(this.className);
                var self = this;
                this.$el.on("click keydown", function (event) {
                    if (event.type == "click" || event.keyCode == 13) {
                        self.actionClickedHandler(event);
                        $(".step-list-listitem.selected").addClass("unselected");
                        $(".step-list-listitem.selected").removeClass("selected");
                        self.$el.addClass('selected');
                        self.$el.removeClass('unselected');
                        if (($(".stage-detail-container").length > 0) && ($(".setSuggestionTile.selected").length > 0) && ("details_" + $(".setSuggestionTile.selected").attr("id") === $(".stage-detail-container").attr("id"))) {
                            $(".stage-detail-container").addClass("selected");
                        }
                    }
                });
                this.listenTo(this.model, 'changeModel', function () {
                    this.$el.find('.stepTile').remove();
                    this.render();
                });
            };
            EditActionView.prototype.render = function () {
                var action = this.model;
                var errorToolTip = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_ErrorOn_Prefix") + " " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_On") + " " + this.model.displayName;
                this.$el.append(this.actionTemplate({ Title: "", Field: this.model.displayName, ErrorToolTip: errorToolTip }));
                return this;
            };
            EditActionView.prototype.actionClickedHandler = function (event) {
                event.stopPropagation();
                var clickHandler = new GenericWorkflowDesigner.DefaultActivityClickHandler(this.model);
                clickHandler.click(this.$el);
                GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                var action = this.model;
                var suggestion = action.parentSuggestionActivity;
                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(action.id, ProcessDesigner.PblActivityType.setAttributeValueStep, suggestion.id);
            };
            return EditActionView;
        })(Backbone.View);
        ProcessDesigner.EditActionView = EditActionView;
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
        var PblPropertyViewFactory = (function () {
            function PblPropertyViewFactory() {
            }
            PblPropertyViewFactory.prototype.createProperty = function (currentModel) {
                var nodeType = currentModel.getActivityTypeID();
                var pageBaseUrl = this.getPropertyPageBaseUrl(nodeType);
                switch (nodeType) {
                    case ProcessDesigner.PblActivityType.condition:
                        return new ProcessDesigner.BranchPropertyView(currentModel, pageBaseUrl);
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                        return new ProcessDesigner.SuggestionPropertyView(currentModel, pageBaseUrl);
                    default:
                        return new ProcessDesigner.ActionPropertyView(currentModel, pageBaseUrl);
                }
            };
            PblPropertyViewFactory.prototype.getPropertyPageBaseUrl = function (pageType) {
                var propertyPageBaseUrl;
                switch (pageType) {
                    case ProcessDesigner.PblActivityType.condition:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.BPFActivityType.condition].properties["propertypageurl"];
                        break;
                    case ProcessDesigner.PblActivityType.setSuggestionStep:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.PblActivityType.setSuggestionStep].properties["propertypageurl"];
                        break;
                    default:
                        propertyPageBaseUrl = GenericWorkflowDesigner.BaseTileInformation.tileObjects[ProcessDesigner.PblActivityType.setMessageStep].properties["propertypageurl"];
                        break;
                }
                return propertyPageBaseUrl;
            };
            return PblPropertyViewFactory;
        })();
        ProcessDesigner.PblPropertyViewFactory = PblPropertyViewFactory;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var ActionOperators = MscrmControls.ProcessDesigner.Common.ActionOperators;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var DateFormat = MscrmControls.ProcessDesigner.Common.DateFormat;
        "use strict";
        var PlainTextGenerator = (function () {
            function PlainTextGenerator(element) {
                this.element = element;
                OperatorMapping.Initialize();
            }
            PlainTextGenerator.selectPlainText = function () {
                var range = document.createRange(), selection;
                range.selectNodeContents($("#plainTextDiv").get(0));
                if (!PlainTextGenerator.initSelectAll) {
                    range.setStart(document.getElementsByClassName("plainTextViewOuterSpan")[0].firstChild, 0);
                    range.setEnd(document.getElementsByClassName("plainTextViewOuterSpan")[0].firstChild, 1);
                }
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            };
            PlainTextGenerator.copyPlainText = function () {
                var success = true;
                try {
                    success = document.execCommand("copy", false, null);
                }
                catch (e) {
                    success = false;
                }
            };
            PlainTextGenerator.prototype.attachKeyDownEventsForPlainTextDiv = function () {
                $("#plainTextDiv").on("keydown", function (event) {
                    if (event.ctrlKey && event.keyCode == 65) {
                        PlainTextGenerator.initSelectAll = true;
                        PlainTextGenerator.selectPlainText();
                    }
                    if (event.ctrlKey && event.keyCode == 67) {
                        PlainTextGenerator.copyPlainText();
                        PlainTextGenerator.initSelectAll = false;
                        window.getSelection().removeAllRanges();
                    }
                    if (event.keyCode == 36) {
                        PlainTextGenerator.initSelectAll = false;
                        PlainTextGenerator.selectPlainText();
                    }
                    event.stopPropagation();
                });
            };
            PlainTextGenerator.prototype.renderPlainText = function () {
                var plainTextWrapper = $(this.element);
                var expressionString = this.BuildPlainTextExpression();
                var plainTextDiv = $('<div id="plainTextDiv" style="font-size:20px" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '">' + expressionString + '</div>');
                plainTextWrapper.append(plainTextDiv);
                this.attachKeyDownEventsForPlainTextDiv();
            };
            PlainTextGenerator.prototype.BuildPlainTextExpression = function () {
                var rootConditionActivity = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot();
                var plainText = this.BuildConditionExpression(rootConditionActivity, true);
                return plainText;
            };
            PlainTextGenerator.prototype.BuildConditionExpression = function (currentActivityModel, isRootCondition) {
                var expression = "";
                if (currentActivityModel != null) {
                    if (currentActivityModel._conditionExpression != null && currentActivityModel._conditionExpression.length > 0 && !currentActivityModel.isNewCondition()) {
                        var conditionExpression = currentActivityModel._conditionExpression;
                        for (var i = 0; i < conditionExpression.length; i++) {
                            if (i > 0 && conditionExpression[i].prevStepOperator != null) {
                                expression += " " + OperatorMapping.PrevStepOperator[conditionExpression[i].prevStepOperator.toString()];
                            }
                            if (conditionExpression[i].sourceType.isEntity) {
                                var strValue = (conditionExpression[i].value == null) ? "" : conditionExpression[i].value.value;
                                var isNumericField = ProcessDesigner.MetadataProxy.isNumericField(conditionExpression[i].attribute, conditionExpression[i].entity.get_entityName());
                                if (conditionExpression[i].value != null && conditionExpression[i].value.isAttribute) {
                                    strValue = this.getAttributeDisplayName(conditionExpression[i].value.entity, strValue);
                                }
                                else if (conditionExpression[i].value != null && conditionExpression[i].value.isFormula) {
                                    strValue = this.getAttributeDisplayName(conditionExpression[i].value.formula.leftEntity, conditionExpression[i].value.formula.attribute) + " "
                                        + OperatorMapping.FormulaOperator[conditionExpression[i].value.formula.operator];
                                    if (conditionExpression[i].value.formula.isAttribute) {
                                        strValue += " " + this.getAttributeDisplayName(conditionExpression[i].value.formula.rightEntity, conditionExpression[i].value.formula.value);
                                    }
                                    else {
                                        if (!isNumericField) {
                                            strValue += " \"" + conditionExpression[i].value.formula.value + "\"";
                                        }
                                        else {
                                            strValue += " " + conditionExpression[i].value.formula.value;
                                        }
                                        if (conditionExpression[i].attributeType == AttributeType.DateTime) {
                                            strValue += " " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_days_text");
                                        }
                                    }
                                }
                                else {
                                    if (ProcessDesigner.MetadataProxy.isEnumeratedField(conditionExpression[i].attribute, conditionExpression[i].entity.get_entityName()) && !((conditionExpression[i].attributeType == AttributeType.State || conditionExpression[i].attributeType == AttributeType.Status) && (ProcessDesigner.MetadataProxy.isTextField(conditionExpression[i].attribute, conditionExpression[i].entity.get_entityName(), conditionExpression[i].operator)))) {
                                        strValue = this.getPicklistValueNames(conditionExpression[i].entity.get_entityName(), conditionExpression[i].attribute, strValue);
                                    }
                                    else if ((conditionExpression[i].attributeType == AttributeType.Lookup || conditionExpression[i].attributeType == AttributeType.Owner || conditionExpression[i].attributeType == AttributeType.Customer) && !(ProcessDesigner.MetadataProxy.isTextField(conditionExpression[i].attribute, conditionExpression[i].entity.get_entityName(), conditionExpression[i].operator))) {
                                        if (!CommonTypes.Types.Object.isNullOrUndefined(conditionExpression[i].value) && !CommonTypes.Types.Object.isNullOrUndefined(conditionExpression[i].value.lookupLabel)) {
                                            var displayName = conditionExpression[i].value.lookupLabel;
                                            displayName = CommonTypes.Types.Object.isNullOrUndefined(displayName) ? "" : displayName;
                                            strValue = displayName;
                                        }
                                    }
                                    if (!isNumericField) {
                                        if (conditionExpression[i]._attributeType == 2 && !isNaN(Date.parse(strValue))) {
                                            var isDateOnly = false;
                                            if (ProcessDesigner.MetadataProxy.SourceAttributesMap[conditionExpression[i]._entity.get_entityName()][conditionExpression[i]._attribute]) {
                                                if ((ProcessDesigner.MetadataProxy.SourceAttributesMap[conditionExpression[i]._entity.get_entityName()][conditionExpression[i]._attribute].dateFormat == DateFormat[DateFormat.Date].toLowerCase()) || (conditionExpression[i]._operator == ProcessDesigner.ConditionOperator.NotOn || conditionExpression[i]._operator == ProcessDesigner.ConditionOperator.On)) {
                                                    isDateOnly = true;
                                                }
                                            }
                                            var userLang = window.USER_LANGUAGE_TWO_LETTER_NAME;
                                            var dateToBeLocalized;
                                            if (isDateOnly) {
                                                var userTime = ProcessControl.Configuration.PBLClientProxy.convertToUserSettingTime(strValue, isDateOnly);
                                                dateToBeLocalized = ProcessControl.Configuration.PBLClientProxy.parseDateInvariant(userTime.toString());
                                            }
                                            else {
                                                var userTime = ProcessControl.Configuration.PBLClientProxy.convertToUserSettingTime(new Date(strValue), isDateOnly);
                                                dateToBeLocalized = new Date(userTime);
                                            }
                                            strValue = dateToBeLocalized.toLocaleString(userLang);
                                            if (window.LOCID_UI_DIR == "RTL") {
                                                var browserRawValue = navigator.userAgent;
                                                var isIE = browserRawValue.indexOf("MSIE 10") !== -1 || browserRawValue.indexOf("MSIE 9.0") !== -1 || browserRawValue.indexOf("Trident") !== -1 || browserRawValue.indexOf("Edge") !== -1;
                                                if (isIE)
                                                    strValue = strValue.split(' ').reverse().join(' ');
                                            }
                                        }
                                        strValue = "\"" + strValue + "\"";
                                    }
                                }
                                expression = expression + " <b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this.getAttributeDisplayName(conditionExpression[i].entity, conditionExpression[i].attribute)) + "</b>"
                                    + " " + OperatorMapping.Operators[conditionExpression[i].operator.toString()];
                                if (conditionExpression[i].operator != ProcessDesigner.ConditionOperator.ContainsData.toString() && conditionExpression[i].operator != ProcessDesigner.ConditionOperator.DoesNotContainData.toString()) {
                                    expression = expression + " <b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(strValue) + "</b>";
                                }
                            }
                            else if (conditionExpression[i].sourceType.isBpfAttribute) {
                                var exp = conditionExpression[i];
                                if (exp.isCategory) {
                                    if (exp.stageType.isActive) {
                                        expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getDisplayName(ProcessDesigner.BpfFields.ActiveStageCategory) + "\"";
                                        expression = expression + " " + OperatorMapping.Operators[conditionExpression[i].operator.toString()];
                                    }
                                    else if (exp.stageType.isSelected) {
                                        expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getDisplayName(ProcessDesigner.BpfFields.SelectedStageCategory) + "\"";
                                        expression = expression + " " + OperatorMapping.Operators[conditionExpression[i].operator.toString()];
                                    }
                                    expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getCategoryIndex2DisplayName(conditionExpression[i].value.value) + "\"";
                                }
                                else {
                                    expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getDisplayName(ProcessDesigner.BpfFields.BpfProcess) + "\"";
                                    expression = expression + " " + OperatorMapping.Operators[conditionExpression[i].operator.toString()];
                                    expression = expression + " \"" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(ProcessDesigner.BpfMetadataProvider.getProcessDisplayName(conditionExpression[i].processId)) + "\"";
                                    if (exp.stageType.isActive) {
                                        expression = expression + " " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_where") + " \"" + ProcessDesigner.BpfMetadataProvider.getDisplayName(ProcessDesigner.BpfFields.ActiveStage) + "\"";
                                        expression = expression + " " + OperatorMapping.Operators[conditionExpression[i].stageOperator.toString()];
                                        expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getStageIndex2DisplayName(conditionExpression[i].processId, conditionExpression[i].value.value) + "\"";
                                    }
                                    else if (exp.stageType.isSelected) {
                                        expression = expression + " " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_where") + " \"" + ProcessDesigner.BpfMetadataProvider.getDisplayName(ProcessDesigner.BpfFields.SelectedStage) + "\"";
                                        expression = expression + " " + OperatorMapping.Operators[conditionExpression[i].stageOperator.toString()];
                                        expression = expression + " \"" + ProcessDesigner.BpfMetadataProvider.getStageIndex2DisplayName(conditionExpression[i].processId, conditionExpression[i].value.value) + "\"";
                                    }
                                }
                            }
                        }
                    }
                    var strBranch = "";
                    var strBranchDiv = "";
                    var noBranchText = "";
                    var strIfElseIf = "";
                    var strEndDiv = "";
                    var yesBranchText = this.getIfBranchPlainText(currentActivityModel.getYesBranches()[0]);
                    var noBranchActivity = currentActivityModel.getNoBranch();
                    if (noBranchActivity) {
                        strBranch = (noBranchActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) ? ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ELSEIF") : ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ELSE");
                        strBranchDiv = "<div class='plainTextViewOuterSpan'>" + strBranch + "</div>";
                        noBranchText = this.getElseBranchPlainText(noBranchActivity);
                    }
                    if (isRootCondition) {
                        strIfElseIf = "<div id='plainTextOuterDiv'><div class='plainTextViewOuterSpan'>" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_IF") + "</div>";
                        strEndDiv = "</div>";
                    }
                    expression = CommonTypes.Types.String.Format("{0}"
                        + "<span class='plainTextViewInnerSpan'>{1}" + "</span>"
                        + "<div class='plainTextViewOuterSpan'>" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_THEN") + "</div>"
                        + "{2}"
                        + "{3}"
                        + "{4}"
                        + "{5}", strIfElseIf, expression, yesBranchText, strBranchDiv, noBranchText, strEndDiv);
                }
                return expression;
            };
            PlainTextGenerator.prototype.getIfBranchPlainText = function (firstActivity) {
                var plainText = "";
                if (firstActivity) {
                    plainText += this.BuildActionExpression(firstActivity, true);
                    var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(firstActivity);
                    for (var i = 0; i < childActivities.length; i++) {
                        plainText += this.getIfBranchPlainText(childActivities[i]);
                    }
                }
                return plainText;
            };
            PlainTextGenerator.prototype.getElseBranchPlainText = function (firstActivity) {
                var plainText = "";
                if (firstActivity) {
                    if (firstActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                        plainText += this.BuildConditionExpression(firstActivity, false);
                    }
                    else {
                        plainText += this.getIfBranchPlainText(firstActivity);
                    }
                }
                return plainText;
            };
            PlainTextGenerator.prototype.BuildActionExpression = function (currentActivityModel, indent) {
                var expression = "";
                if (currentActivityModel != null) {
                    var activityType = currentActivityModel.getActivityTypeID();
                    if (activityType == ProcessDesigner.PblActivityType.customJavascriptStep) {
                        expression += "<b>" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_CustomJavascript") + "</b>";
                    }
                    else {
                        var fieldDisplayName = this.isValidObject(currentActivityModel.field) ? GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this.getAttributeDisplayName(currentActivityModel.entity, currentActivityModel.field)) : "<>";
                        if (activityType == ProcessDesigner.PblActivityType.setMessageStep) {
                            var errMessage = this.isValidObject(currentActivityModel.value) ? currentActivityModel.value.description : "";
                            expression += CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ActionShowMessage_AgainstField"), "<b>\"" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(errMessage) + "\"</b>", "<b>" + fieldDisplayName + "</b>");
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setDisplayModeStep) {
                            if (!this.isValidObject(currentActivityModel.value) || currentActivityModel.value == true) {
                                expression += ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Lock") + " ";
                            }
                            else {
                                expression += ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Unlock") + " ";
                            }
                            expression += "<b>" + fieldDisplayName + "</b>";
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setFieldRequiredLevelStep) {
                            if (!this.isValidObject(currentActivityModel.value) || currentActivityModel.value == "0") {
                                expression += " " + CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_SetBusinessRequired"), "<b>" + fieldDisplayName + "</b>", "<b>" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_NotBusinessRequired") + "</b>");
                            }
                            else {
                                expression += " " + CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_SetBusinessRequired"), "<b>" + fieldDisplayName + "</b>", "<b>" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_BusinessRequired") + "</b>");
                            }
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setVisibilityStep) {
                            if (!this.isValidObject(currentActivityModel.value) || currentActivityModel.value == true) {
                                expression += ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ShowField") + " ";
                            }
                            else {
                                expression += ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_HideField") + " ";
                            }
                            expression += "<b>" + fieldDisplayName + "</b>";
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setAttributeValueStep) {
                            if (this.isValidObject(currentActivityModel.value) && currentActivityModel.value == ProcessDesigner.PBLStringConstants.NullStringForTypeClear && currentActivityModel.operator == ActionOperators.Value) {
                                expression = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Clear") + " " + "<b>" + fieldDisplayName + "</b>";
                            }
                            else {
                                expression = CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_SetText"), "<b>" + fieldDisplayName + "</b>", this.getFieldFormulaValueText(currentActivityModel));
                            }
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setDefaultValueStep) {
                            expression = CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_SetDefaultValueText"), "<b>" + fieldDisplayName + "</b>", this.getFieldFormulaValueText(currentActivityModel));
                        }
                        else if (activityType == ProcessDesigner.PblActivityType.setSuggestionStep) {
                            expression = CommonTypes.Types.String.Format(ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ShowRecommendationText"), " <b>\"" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(currentActivityModel.displayName) + "\"</b>", " <b>" + fieldDisplayName + "</b>");
                            expression += "<br>";
                            expression += "<div class='plainTextViewInnerSpan'>";
                            expression += "<span class=\"plainText-sugBody\">" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SuggestionBody") + "<b> \"" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(currentActivityModel.suggestionBody) + "\"</b></span><br>";
                            expression += "<span class=\"plainText-accDesc\">" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_AcceptDescription") + "<b> \"" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(currentActivityModel.acceptanceText) + "\"</b></span><br>";
                            var actionSteps = currentActivityModel.actionSteps;
                            for (var i = 0; i < actionSteps.length; i++) {
                                expression += this.BuildActionExpression(actionSteps[i], false) + "<br />";
                            }
                            expression += "</div>";
                        }
                    }
                    if (indent) {
                        expression = CommonTypes.Types.String.Format("<div class='plainTextViewInnerSpan'>{0}</div>", expression);
                    }
                }
                return expression;
            };
            PlainTextGenerator.prototype.isValidObject = function (object) {
                if (object == null || typeof object == "undefined") {
                    return false;
                }
                return true;
            };
            PlainTextGenerator.prototype.getFieldFormulaValueText = function (currentActivityModel) {
                var exprString = "";
                var isNumericField = ProcessDesigner.MetadataProxy.isNumericField(currentActivityModel.field, currentActivityModel.entity.get_entityName());
                if (!this.isValidObject(currentActivityModel.value)) {
                    exprString = "<b>\"\"</b>";
                }
                else if (currentActivityModel.operator == ActionOperators.Field) {
                    exprString = "<b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this.getAttributeDisplayName(currentActivityModel.value.entity, currentActivityModel.value.field)) + "</b>";
                }
                else if (currentActivityModel.operator == ActionOperators.Value) {
                    var strValue = currentActivityModel.value;
                    if (ProcessDesigner.MetadataProxy.SourceAttributesMap && ProcessDesigner.MetadataProxy.isEnumeratedField(currentActivityModel.field, currentActivityModel.entity.get_entityName())) {
                        var strValueArray = new Array();
                        strValueArray.push(strValue);
                        strValue = this.getPicklistValueNames(currentActivityModel.entity.get_entityName(), currentActivityModel.field, strValueArray);
                    }
                    else if (currentActivityModel.fieldtype == AttributeType.Lookup || currentActivityModel.fieldtype == AttributeType.Owner || currentActivityModel.fieldtype == AttributeType.Customer) {
                        var displayName = "";
                        if (!CommonTypes.Types.Object.isNullOrUndefined(currentActivityModel.lookupProperties) && !currentActivityModel.value.lookup) {
                            displayName = currentActivityModel.lookupProperties["lookupLabel"];
                        }
                        else if (!CommonTypes.Types.Object.isNullOrUndefined(currentActivityModel.value.lookup)) {
                            displayName = currentActivityModel.value.lookup.label;
                        }
                        displayName = CommonTypes.Types.Object.isNullOrUndefined(displayName) ? "" : displayName;
                        strValue = displayName;
                    }
                    else {
                    }
                    if (!isNumericField) {
                        if (currentActivityModel._fieldtype == 2 && !isNaN(Date.parse(strValue))) {
                            var isDateOnly = false;
                            if (ProcessDesigner.MetadataProxy.SourceAttributesMap[currentActivityModel.entity.get_entityName()][currentActivityModel._field]) {
                                if ((ProcessDesigner.MetadataProxy.SourceAttributesMap[currentActivityModel.entity.get_entityName()][currentActivityModel._field].dateFormat == DateFormat[DateFormat.Date].toLowerCase())) {
                                    isDateOnly = true;
                                }
                            }
                            var userLang = window.USER_LANGUAGE_TWO_LETTER_NAME;
                            var dateToBeLocalized;
                            if (isDateOnly) {
                                var userTime = ProcessControl.Configuration.PBLClientProxy.convertToUserSettingTime(strValue, isDateOnly);
                                dateToBeLocalized = ProcessControl.Configuration.PBLClientProxy.parseDateInvariant(userTime.toString());
                            }
                            else {
                                var userTime = ProcessControl.Configuration.PBLClientProxy.convertToUserSettingTime(new Date(strValue), isDateOnly);
                                dateToBeLocalized = new Date(userTime);
                            }
                            strValue = dateToBeLocalized.toLocaleString(userLang);
                            if (window.LOCID_UI_DIR == "RTL") {
                                var browserRawValue = navigator.userAgent;
                                var isIE = browserRawValue.indexOf("MSIE 10") !== -1 || browserRawValue.indexOf("MSIE 9.0") !== -1 || browserRawValue.indexOf("Trident") !== -1 || browserRawValue.indexOf("Edge") !== -1;
                                if (isIE)
                                    strValue = strValue.split(' ').reverse().join(' ');
                            }
                        }
                        strValue = "\"" + strValue + "\"";
                    }
                    exprString = "<b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(strValue) + "</b>";
                }
                else if (currentActivityModel.operator == ActionOperators.Formula) {
                    exprString = "<b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this.getAttributeDisplayName(currentActivityModel.value.formula.attribute.entity, currentActivityModel.value.formula.attribute.field)) + "</b> "
                        + OperatorMapping.FormulaOperator[currentActivityModel.value.formula.operator];
                    if (currentActivityModel.value.formula.valueType == ActionOperators.Field) {
                        exprString += " <b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this.getAttributeDisplayName(currentActivityModel.value.formula.value.entity, currentActivityModel.value.formula.value.field)) + "</b>";
                    }
                    else {
                        var strValue = currentActivityModel.value.formula.value;
                        if (!isNumericField) {
                            strValue = "\"" + strValue + "\"";
                        }
                        exprString += " <b>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(strValue);
                        if (currentActivityModel.fieldtype == AttributeType.DateTime) {
                            exprString += " " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_days_text");
                        }
                        exprString += "</b>";
                    }
                }
                return exprString;
            };
            PlainTextGenerator.getPickListValues = function (sourceAttributesMap) {
                var promise = null;
                $.each(sourceAttributesMap, function (entityLogicalName, attributes) {
                    $.each(attributes, function (index, attribute) {
                        var attributeLogicalName = attribute.logicalName;
                        if (ProcessDesigner.MetadataProxy.isEnumeratedField(attributeLogicalName, entityLogicalName)) {
                            if (!ProcessDesigner.MetadataProxy.PicklistMap) {
                                ProcessDesigner.MetadataProxy.PicklistMap = {};
                            }
                            if (typeof ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName] == "undefined" || typeof ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName][attributeLogicalName] == "undefined") {
                                promise = $.Deferred(function (d) {
                                    ProcessDesigner.MetadataProvider.getPickListValues(entityLogicalName, [attributeLogicalName], d.resolve, d.reject);
                                }).promise();
                                promise.done(function (pickList) {
                                    if (ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName] == null) {
                                        ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName] = {};
                                    }
                                    ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName][attributeLogicalName] = pickList;
                                });
                            }
                            else {
                                var deferred = $.Deferred();
                                deferred.resolve(ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName][attributeLogicalName]);
                                promise = deferred.promise();
                            }
                        }
                    });
                });
                return promise;
            };
            PlainTextGenerator.prototype.getPicklistValueNames = function (entityLogicalName, attributeName, pickListOptionOrderList) {
                if (!ProcessDesigner.MetadataProxy.PicklistMap || !ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName][attributeName]) {
                    return pickListOptionOrderList;
                }
                var picklistValues = ProcessDesigner.MetadataProxy.PicklistMap[entityLogicalName][attributeName];
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
            PlainTextGenerator.prototype.getAttributeDisplayName = function (entity, attributeLogicalName) {
                var displayName = "";
                var entityName = entity.get_entityName();
                if (typeof ProcessDesigner.MetadataProxy.SourceAttributesMap[entityName] != "undefined" && ProcessDesigner.MetadataProxy.SourceAttributesMap[entityName][attributeLogicalName]) {
                    if (entity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) {
                        displayName = ProcessDesigner.MetadataProxy.SourceAttributesMap[entityName][attributeLogicalName].displayName;
                    }
                    else {
                        var relationshipName = entity.get_relationshipName();
                        displayName = "(" + PlainTextGenerator.SourceValueRelationshipLabel[relationshipName] + ") ";
                        displayName += ProcessDesigner.MetadataProxy.SourceAttributesMap[entityName][attributeLogicalName].displayName;
                    }
                }
                return displayName;
            };
            PlainTextGenerator.prototype.getAttributesSourcesList = function () {
                var self = this;
                var promise = null;
                promise = $.Deferred(function (d) {
                    var primaryEntity = ProcessDesigner.ControlManager.primaryEntityName;
                    if (ProcessDesigner.MetadataProxy.SourceValueToEntityMap == null || ProcessDesigner.MetadataProxy.SourceValueToEntityMap[ProcessDesigner.ControlManager.primaryEntityName] == null) {
                        ProcessDesigner.MetadataProxy.SourceValueToEntityMap = {};
                        ProcessDesigner.MetadataProxy.SourceValueToEntityMap[primaryEntity] = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                        ProcessDesigner.MetadataProxy.getAttributeList(primaryEntity).done(function () {
                            if (ProcessDesigner.ControlManager.isPBLfromTBX) {
                                var sourcesList = ProcessDesigner.MetadataProxy.getSourcesList();
                                PlainTextGenerator.SourceValueRelationshipLabel = {};
                                sourcesList.forEach(function (relationshipMetadata) {
                                    if (typeof (relationshipMetadata) != "string") {
                                        ProcessDesigner.MetadataProxy.SourceValueToEntityMap[relationshipMetadata.RelationshipName] = new Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked(MscrmControls.ProcessDesigner.processStep, relationshipMetadata.RelationshipAttribute.LogicalName, relationshipMetadata.RelationshipEntity.EntityLogicalName, relationshipMetadata.RelationshipName);
                                        PlainTextGenerator.SourceValueRelationshipLabel[relationshipMetadata.RelationshipName] = relationshipMetadata.RelationshipAttribute.Label.Description;
                                        ProcessDesigner.MetadataProxy.getAttributeList(relationshipMetadata.RelationshipEntity.EntityLogicalName, relationshipMetadata.RelationshipName).done(function () {
                                            console.log();
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
                promise.resolve(ProcessDesigner.MetadataProxy.SourceAttributesMap);
                return promise;
            };
            PlainTextGenerator.prototype.getString = function (inputString) {
                return ProcessDesigner.MetadataProvider.getLocalizedString(inputString);
            };
            PlainTextGenerator.initSelectAll = false;
            return PlainTextGenerator;
        })();
        ProcessDesigner.PlainTextGenerator = PlainTextGenerator;
        var OperatorMapping = (function () {
            function OperatorMapping() {
            }
            OperatorMapping.Initialize = function () {
                OperatorMapping.Operators["0"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_DoesNotContainData");
                OperatorMapping.Operators["1"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_ContainData");
                OperatorMapping.Operators["4"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_In");
                OperatorMapping.Operators["5"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_NotIn");
                OperatorMapping.Operators["6"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Equals");
                OperatorMapping.Operators["7"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_DoesNotEqual");
                OperatorMapping.Operators["8"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Contain");
                OperatorMapping.Operators["9"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_DoesNotContain");
                OperatorMapping.Operators["10"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_BeginsWith");
                OperatorMapping.Operators["11"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_DoesNotBeginsWith");
                OperatorMapping.Operators["12"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_EndWith");
                OperatorMapping.Operators["13"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_DoesNotEndWith");
                OperatorMapping.Operators["14"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_GreaterThan");
                OperatorMapping.Operators["15"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_GreaterThanOrEqual");
                OperatorMapping.Operators["16"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_LessThan");
                OperatorMapping.Operators["17"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_LessThanOrEqual");
                OperatorMapping.Operators["20"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_On");
                OperatorMapping.Operators["21"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_NotOn");
                OperatorMapping.Operators["22"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_OnOrAfter");
                OperatorMapping.Operators["23"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_OnOrBefore");
                OperatorMapping.PrevStepOperator["2"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_And");
                OperatorMapping.PrevStepOperator["3"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Or");
                OperatorMapping.FormulaOperator["0"] = "+";
                OperatorMapping.FormulaOperator["1"] = "-";
                OperatorMapping.FormulaOperator["2"] = "*";
                OperatorMapping.FormulaOperator["3"] = "/";
            };
            OperatorMapping.Operators = {};
            OperatorMapping.PrevStepOperator = {};
            OperatorMapping.FormulaOperator = {};
            return OperatorMapping;
        })();
        ProcessDesigner.OperatorMapping = OperatorMapping;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="PblSuggestionSlotTileHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PblSuggestionSlotTileHolderView = (function (_super) {
            __extends(PblSuggestionSlotTileHolderView, _super);
            function PblSuggestionSlotTileHolderView(suggestionModel) {
                _super.call(this, { model: suggestionModel });
            }
            PblSuggestionSlotTileHolderView.prototype.render = function () {
                _super.prototype.render.call(this);
                if (!GenericWorkflowDesigner.Settings.renderMinimapFlag &&
                    this.model.getActivity().getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                    var tileButtonView = new ProcessDesigner.PblTileButtonView(this.model, this.$el);
                    tileButtonView.render();
                }
                return this;
            };
            PblSuggestionSlotTileHolderView.prototype.setupEvents = function () {
                var self = this;
                this.listenTo(this.model.getActivity(), 'changeModel', function () {
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = false;
                    this.render();
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = true;
                });
                this.$el.on("click keydown", function (event) {
                    if (event.type == "click" || event.keyCode == 13) {
                        var activity = self.model.getActivity();
                        var activityTypeID = activity.getActivityTypeID();
                        if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield && activityTypeID == ProcessDesigner.PblActivityType.setSuggestionStep) {
                            var droppedElement = new GenericWorkflowDesigner.LibraryElementModel({ Title: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_SlotGenerator_Title"), Tooltip: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_SetTheFieldValue"), Image: "", DataURI: "", Alt: ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_LibraryTileAltText"), FontIconImage: "", ActivityTypeID: "setAttributeValue" });
                            GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                            var actionAdded = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                            if (actionAdded.length > 0) {
                                var currentActivity = actionAdded[0];
                                var parentStageId = currentActivity.parentSuggestionActivity.getActivityID();
                                ProcessDesigner.CanvasDisplayUtility.handleSuggestionDetailsOverlap();
                            }
                        }
                        else if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField && activityTypeID == ProcessDesigner.PblActivityType.setSuggestionStep) {
                            var pasteCmd = new ProcessDesigner.PBLPasteCommand();
                            pasteCmd.pasteComponentAtSlot(self);
                            ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                        }
                        else {
                            var tileClass = $(".tile");
                            var childTile = $(event.currentTarget).find(tileClass);
                            if (childTile) {
                                var currentTile = childTile.children(0);
                                var currentTileId = currentTile.attr("id");
                                var currentTileClass = currentTile.attr("class").replace("selected", "").replace("Tile", "").trim();
                                ProcessDesigner.TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent(currentTileId, currentTileClass, "");
                            }
                            self.tileClickedHandler(event);
                            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick);
                        }
                    }
                    $("#canvas").children(".slot.hoverOverDroppable").removeClass("hoverOverDroppable");
                    $("#canvas").children(".slot").children(".tile").children(".selected").removeClass("selected");
                    $(this).find(".tile").children().addClass("selected");
                    event.target.focus();
                    event.stopPropagation();
                });
                this.$el.on("mousedown", function (event) {
                    event.stopPropagation();
                });
                var activity = this.model.getActivity();
                var activityTypeID = activity.getActivityTypeID();
                if (!activity.getReadonlyMode() && ProcessDesigner.PblActivityType.isActionActivityType(activityTypeID)) {
                    _super.prototype.makeDraggable.call(this);
                }
                else if (!activity.getReadonlyMode() && activityTypeID == ProcessDesigner.PblActivityType.setSuggestionStep) {
                    _super.prototype.makeDraggable.call(this);
                    this.makeDroppable();
                }
            };
            PblSuggestionSlotTileHolderView.prototype.makeDroppable = function () {
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
                        $(this).addClass("hoverOverDroppable");
                    },
                    deactivate: function (event, ui) {
                        $(this).removeClass("hoverOverDroppable");
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
                        activityDropController.dropLibraryElement(droppedElement).done(function (activity) {
                            GenericWorkflowDesigner.updateCurrentModel(activity);
                            ProcessDesigner.ControlManager.updateSlotCount(self);
                            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                        });
                    }
                });
            };
            return PblSuggestionSlotTileHolderView;
        })(GenericWorkflowDesigner.SlotTileHolderView);
        ProcessDesigner.PblSuggestionSlotTileHolderView = PblSuggestionSlotTileHolderView;
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
            CanvasDisplayUtility.handleSuggestionDetailsOverlap = function () {
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
/// <reference path="../../../utility/canvasdisplayutility.ts" />
// -----------------------------------------------------------------------
// <copyright file="PblTileButtonView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var PblTileButtonView = (function (_super) {
            __extends(PblTileButtonView, _super);
            function PblTileButtonView(model, el) {
                _super.call(this, {
                    model: model,
                    el: el
                });
            }
            PblTileButtonView.prototype.initialize = function () {
                var actionStepsCount = 0;
                if (this.model.getActivity().actionSteps) {
                    actionStepsCount = this.model.getActivity().actionSteps.length;
                }
                this.tileClickHandler = new ProcessDesigner.SuggestionTileButtonClickHandler(this.model.getActivity());
                var suggestionName = this.model.getActivity().getActivityID();
                this.buttonTemplate = _.template("<div class=\"tileButtonDiv\"><span class=\"stepCountSpan\"><span class=\"stepCountSpanWrapper\"><span class=\"CCFSymbolFont setFieldTileSymbol tileCountSpanSymbol-size\"></span></span><span class=\"canvasAreaTileTitle3\" id=\"tileCount_" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(suggestionName) + "\">" + actionStepsCount + "</span></span><span class=\"tileInner ellipsis\" style=\"float:right;\"><button class=\"tilebutton\" type=\"submit\" id=\"tileButton_" + _.escape(suggestionName) + "\" tabindex=\"-1\"><span id=\"tileButtonSpan_" + _.escape(suggestionName) + "\" class=\"canvasAreaTileTitle4 truncateString\">" + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_TileButtonSeeDetailsTooltip") + "</span><span class='CCFSymbolFont  Expanded-symbol tileButtonImage' id=\"tileButtonImage_" + _.escape(suggestionName) + "\" ></span></button></span></div>");
            };
            PblTileButtonView.prototype.render = function () {
                var se = this;
                var ele = this.$el.find('div .setSuggestionTile');
                ele.append(this.buttonTemplate);
                this.$el.find('button').on("click", function (event) {
                    se.suggestionButtonClickedHandler(event);
                });
                return this;
            };
            PblTileButtonView.prototype.suggestionButtonClickedHandler = function (event) {
                if (ProcessDesigner.PBLToolBarView.addMode !== ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield) {
                    event.stopPropagation();
                }
                this.tileClickHandler.click(this.$el);
                ProcessDesigner.CanvasDisplayUtility.handleSuggestionDetailsOverlap();
            };
            return PblTileButtonView;
        })(Backbone.View);
        ProcessDesigner.PblTileButtonView = PblTileButtonView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ActionPropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var ActionPropertyView = (function (_super) {
            __extends(ActionPropertyView, _super);
            function ActionPropertyView(model, baseUrl) {
                _super.call(this, { model: model });
                this.className = "property-page";
                this.loaderPanelName = "actionProperty";
                this.baseUrl = baseUrl;
            }
            ActionPropertyView.prototype.isInlinePropertyPage = function () {
                return true;
            };
            ActionPropertyView.prototype.getPropertyPageUrl = function (activeItem) {
                return this.baseUrl;
            };
            ActionPropertyView.prototype.getContainerElementName = function () {
                return this.loaderPanelName;
            };
            ActionPropertyView.prototype.getClassName = function () {
                return this.className;
            };
            ActionPropertyView.prototype.unloadHandler = function () {
                var ControlRoot = MscrmControls;
                if (ControlRoot.ActionPropertyPage) {
                }
                MscrmControls.ProcessDesigner.Validation.Errors.propertyTabUnloaded();
            };
            return ActionPropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.ActionPropertyView = ActionPropertyView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="SuggestionPropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        "use strict";
        var SuggestionPropertyView = (function (_super) {
            __extends(SuggestionPropertyView, _super);
            function SuggestionPropertyView(model, baseUrl) {
                _super.call(this, { model: model });
                this.className = "property-page";
                this.loaderPanelName = "suggestionProperty";
                this.baseUrl = baseUrl;
            }
            SuggestionPropertyView.prototype.isInlinePropertyPage = function () {
                return true;
            };
            SuggestionPropertyView.prototype.getPropertyPageUrl = function (activeItem) {
                return this.baseUrl;
            };
            SuggestionPropertyView.prototype.getContainerElementName = function () {
                return this.loaderPanelName;
            };
            SuggestionPropertyView.prototype.getClassName = function () {
                return this.className;
            };
            SuggestionPropertyView.prototype.unloadHandler = function () {
                MscrmControls.ProcessDesigner.Validation.Errors.propertyTabUnloaded();
            };
            return SuggestionPropertyView;
        })(GenericWorkflowDesigner.BasePropertyView);
        ProcessDesigner.SuggestionPropertyView = SuggestionPropertyView;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="IPolylineCalculator.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//---------------------------------------------------------------------------------------------
/// <reference path="../Common/ProcessActivityType.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
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
//  <copyright file="ProcessItemModel.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the stage activity of the item process
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessItemModel = (function () {
            function ProcessItemModel() {
            }
            return ProcessItemModel;
        })();
        ProcessDesigner.ProcessItemModel = ProcessItemModel;
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
                this.ConditionActivityTemplate = "<span class=\"tileTitle\" ><span class=\"tileTableCell\"><div><span class= \"tileInner ellipsis canvasAreaTileTitle1\" > <%- Subtitle %></span></div><span class=\"tileInner ellipsis stringTruncation canvasAreaTileTitle2\"><%- Title %></span> </span></span> ";
                this.ConditionTemplate = '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span><div class="condition-footer-div"></div>';
            }
            ConditionActivityTileInformation.prototype.GetProperties = function () {
                var result = _super.prototype.GetBasicTileProperties.call(this);
                result["tileclass"] = "conditionTile";
                result["emptyTitleText"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionActivityTileInfo");
                result["Title"] = this.activityModel.displayName;
                result["Subtitle"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_Library_Condition");
                result["emptyTileImageTemplate"] = this.ConditionTemplate;
                result["emptyTileTemplate"] = this.ConditionActivityTemplate;
                result["activityTypeName"] = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Condition_Activity_Name");
                return result;
            };
            return ConditionActivityTileInformation;
        })(GenericWorkflowDesigner.BaseTileInformation);
        ProcessDesigner.ConditionActivityTileInformation = ConditionActivityTileInformation;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
// -----------------------------------------------------------------------
// <copyright file="ProcessCommonTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var ProcessCommonTileInformation = (function () {
            function ProcessCommonTileInformation() {
            }
            ProcessCommonTileInformation.defaultTemplate = "<span class=\"tileTitle\" title=\"<%- Title %>\"><span class=\"tileTableCell\"><span class=\"tileInner ellipsis\"><%- Title %></span></span></span>";
            return ProcessCommonTileInformation;
        })();
        ProcessDesigner.ProcessCommonTileInformation = ProcessCommonTileInformation;
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
// ---------------------------------------------------------------------------------------------
//  <copyright file="PBLAddActivityTypeCommandID.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
//
//  <summary>
//  Class containing the PBLAddActivityTypeCommand used for adding any activity
//  </summary>
//
// ---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var PBLAddActivityTypeCommandID = (function () {
            function PBLAddActivityTypeCommandID() {
            }
            PBLAddActivityTypeCommandID.AddCondition = "AddConditionCommand";
            PBLAddActivityTypeCommandID.AddAcceptcondition = "AddAcceptConditionCommand";
            PBLAddActivityTypeCommandID.AddShowrecommentdation = "AddSetSuggestionCommand";
            PBLAddActivityTypeCommandID.AddDisplayMode = "AddSetDisplayModeCommand";
            PBLAddActivityTypeCommandID.AddShowerror = "AddSetMessageCommand";
            PBLAddActivityTypeCommandID.AddSetfield = "AddSetAttributeValueCommand";
            PBLAddActivityTypeCommandID.AddSetdefaultfield = "AddSetDefaultValueCommand";
            PBLAddActivityTypeCommandID.AddSetbusinessrequired = "AddSetFieldRequiredLevelCommand";
            PBLAddActivityTypeCommandID.AddSetvisibility = "AddSetVisibilityCommand";
            PBLAddActivityTypeCommandID.AddCustomJavascript = "AddCustomJavascriptCommand";
            PBLAddActivityTypeCommandID.PasteCondition = "PasteConditionCommand";
            PBLAddActivityTypeCommandID.PasteAcceptCondition = "PasteAcceptConditionCommand";
            PBLAddActivityTypeCommandID.PasteShowRecommendations = "PasteShowRecommendationsCommand";
            PBLAddActivityTypeCommandID.PasteDisplayMode = "PasteLock/UnlockCommand";
            PBLAddActivityTypeCommandID.PasteShowError = "PasteShowErrorCommand";
            PBLAddActivityTypeCommandID.PasteSetField = "PasteSetFieldValueCommand";
            PBLAddActivityTypeCommandID.PasteSetDefaultField = "PasteSetDefaultValueCommand";
            PBLAddActivityTypeCommandID.PasteSetBusinessRequired = "PasteSetBusinessRequiredCommand";
            PBLAddActivityTypeCommandID.PasteSetVisibility = "PasteSetVisibilityCommand";
            PBLAddActivityTypeCommandID.PasteCustomJavascript = "PasteCustomJavascriptCommand";
            PBLAddActivityTypeCommandID.DropSetfield = "DropSetfieldvalueCommand";
            PBLAddActivityTypeCommandID.None = "None";
            return PBLAddActivityTypeCommandID;
        })();
        ProcessDesigner.PBLAddActivityTypeCommandID = PBLAddActivityTypeCommandID;
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
/// <reference path="../src/control/pbl/converter/pbltoactivitycollectionvisitor.ts" />
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
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.runValidation, this.runValidation, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.activityDropped, ProcessDesigner.ProcessActivityDefinitionModel.prototype.reinitialize, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.resetToolbar, this.resetToolbar, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems, this.refreshToolbarItems, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle, this.updateTileTitle, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.clearSelections, ControlManager.ClearSelections, null);
                GenericWorkflowDesigner.eventManager.on(ProcessDesigner.PblEvents.refreshPropertyPage, function () {
                    if (ControlManager.refreshPropertyPage) {
                        ControlManager.refreshPropertyPage();
                    }
                }, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.libraryTabActivated, ControlManager.ResizeComponentsTab, null);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.refreshPropertyPageErrorMessages, function () {
                    if (!CommonTypes.Types.Object.isNullOrUndefined(ProcessDesigner.Validation.Errors.refreshErrorMessages))
                        ProcessDesigner.Validation.Errors.refreshErrorMessages();
                }, null);
            };
            ControlManager.prototype.editDone = function () {
                ControlManager.processObject.editDone();
                ControlManager._isDirty = true;
                if (ProcessDesigner.ValidatePBL.isValidationModeOn()) {
                    ProcessDesigner.Validation.Engine.setAction(ProcessDesigner.Validation.Level.Validate);
                    ProcessDesigner.ValidatePBL.validate();
                }
            };
            ControlManager.prototype.runValidation = function () {
                if (ProcessDesigner.ValidatePBL.isValidationModeOn()) {
                    ProcessDesigner.Validation.Engine.setAction(ProcessDesigner.Validation.Level.Validate);
                    ProcessDesigner.ValidatePBL.validate();
                }
            };
            ControlManager.isDirty = function () {
                return ControlManager._isDirty;
            };
            ControlManager.saveDone = function () {
                ControlManager._isDirty = false;
            };
            ControlManager.prototype.resetToolbar = function () {
                GenericWorkflowDesigner.updateCurrentModel(null);
                if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield || ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField) {
                    $('#sortable').children().remove(".place-holder-listitem");
                }
                ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                ControlManager.ClearSelections();
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    $(".cutTile").removeClass("cutTile");
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                    GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([]);
                }
            };
            ControlManager.prototype.render = function (inputBag) {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                GenericWorkflowDesigner.Settings.slotHandlerFactory = new ProcessDesigner.PBLSlotTileHolderHandlerFactory();
                GenericWorkflowDesigner.Settings.slotInsertHorizontalHandlerFactory = new ProcessDesigner.PblSlotInsertHorizontalHandlerFactory();
                GenericWorkflowDesigner.Settings.slotInsertVerticalHandlerFactory = new ProcessDesigner.PblSlotInsertVerticalHandlerFactory();
                GenericWorkflowDesigner.Settings.flyoutContentProvider = new GenericWorkflowDesigner.FlyoutContentProvider();
                GenericWorkflowDesigner.Settings.spinnerItem = "/_imgs/btn_lookup_resolving.gif";
                GenericWorkflowDesigner.Settings.activityDefinitionFactory = new ProcessDesigner.PblActivityDefinitionFactory();
                GenericWorkflowDesigner.Settings.propertyViewFactory = new ProcessDesigner.PblPropertyViewFactory();
                GenericWorkflowDesigner.Settings.tileInformationFactory = new ProcessDesigner.PblTileInformationFactory();
                GenericWorkflowDesigner.Settings.iconFactory = new ProcessDesigner.BPFIconFactory();
                GenericWorkflowDesigner.Settings.canvasDragDropValidator = new ProcessDesigner.PblDragDropValidator();
                GenericWorkflowDesigner.Settings.subsequentActivityGenerator = new ProcessDesigner.PBLSubsequentActivityGenerator();
                GenericWorkflowDesigner.Settings.slotGeneratorProvider = new ProcessDesigner.BPFSlotGeneratorProvider();
                GenericWorkflowDesigner.Settings.workflowTree = new ProcessDesigner.PblWorkflowTree();
                GenericWorkflowDesigner.Settings.workflowTree.setActivityCollection(new ProcessDesigner.PBLActivityDefinitionCollection());
                GenericWorkflowDesigner.Settings.graphics = new ProcessDesigner.PBLGraphics();
                GenericWorkflowDesigner.Settings.activityDropHandlerFactory = new ProcessDesigner.PblActivityDropHandlerFactory();
                GenericWorkflowDesigner.Settings.notification = new GenericWorkflowDesigner.Notification("#notificationArea");
                if (window.LOCID_UI_DIR == "RTL") {
                    GenericWorkflowDesigner.Settings.renderRTL = true;
                    if (window.LOCID_LCID == "1025")
                        GenericWorkflowDesigner.Settings.isArabic = true;
                }
                else
                    GenericWorkflowDesigner.Settings.renderRTL = false;
                var processDesigner = inputBag.ProcessData;
                this.addCanvasElementToHtml();
                this.SetTabIndices();
                if (inputBag.ProcessData) {
                    var record = inputBag.ProcessData;
                    if (ControlManager.validateProcessData(record)) {
                        ControlManager.processJson = record;
                        this.updateProcessActivityTree(record.raw);
                    }
                }
                this.initializeToolBar();
                GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.editDone, this.initializePlainTextView);
                GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh, this.initializePlainTextView);
                GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.setKeyDownEvents, this.initializePlainTextView);
                GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems, this.initializePlainTextView);
                GenericWorkflowDesigner.eventManager.on(ProcessDesigner.PblEvents.updatePlainTextView, this.initializePlainTextView);
                this.initializeDesignerMode();
                this.initializeMenubarStyle();
                this.initializePlainTextView();
                this.initializeToolTipMenubar();
                stopwatch.stop();
                localStorage.setItem("PBL_LoadTime", stopwatch.elapsedMilliseconds.toString());
            };
            ControlManager.prototype.updateTileTitle = function () {
                var slotsList = $('#canvas').children("div .slot");
                var isFirst = true;
                $.each(slotsList, function (slotIndex, slot) {
                    var pblTile = $(slot).children("div .tile").first().children("div").first();
                    var tileTitle1 = pblTile.find(".tileTableCell").children("div").children().html();
                    var tileTitle2 = pblTile.find(".tileTableCell").children("span").children("input").val();
                    var errorMessage = pblTile.find(".tileError").attr("title");
                    var completeTileTitle = tileTitle1 + " " + tileTitle2;
                    if (errorMessage != null && errorMessage != undefined)
                        completeTileTitle = completeTileTitle + "\n" + errorMessage;
                    $(slot).attr("title", completeTileTitle);
                    pblTile.attr("title", completeTileTitle);
                    if (pblTile.find("[class~='setSuggestionTile']").length > 0) {
                        var actionCount = pblTile.find("#tileCount_" + $(slot).attr("id")).html();
                        completeTileTitle = completeTileTitle + "\n" + actionCount + " " + ProcessDesigner.PBLDesignerControl.dataBag.resources.getString("ProcessDesignerControl_PBL_ActionList");
                        $(slot).attr("title", completeTileTitle);
                        pblTile.attr("title", completeTileTitle);
                        ControlManager.SuggestionTileTitle = true;
                    }
                    if (!isFirst) {
                        $(slot).children("div .tile").first().children("div").first().attr("tabindex", "-1");
                    }
                    isFirst = false;
                    ControlManager.StageTileTitle = true;
                });
            };
            ControlManager.validateProcessData = function (processdata) {
                if (CommonTypes.Types.Object.isNullOrUndefined(processdata)) {
                    throw (ControlManager.EmptyOrNullInputProcessData);
                }
                return true;
            };
            ControlManager.prototype.showDialog = function (data) {
                if (data.yesCallbackAction || data.noCallbackAction) {
                    var dialogStrings = new window.parent["Xrm"].ConfirmDialogStrings();
                    dialogStrings.title = data.dialogTitle;
                    dialogStrings.subtitle = data.dialogMessage;
                    if (!CommonTypes.Types.Object.isNullOrUndefined(data.confirmButtonLabel)) {
                        dialogStrings.confirmButtonLabel = data.confirmButtonLabel;
                    }
                    else {
                        dialogStrings.confirmButtonLabel = window.LOCID_DLG_OK_BTN_LABEL.toUpperCase();
                    }
                    var options = new window.parent["Xrm"].DialogOptions();
                    options.height = 200;
                    options.width = 550;
                    window.parent["Xrm"].Dialog.openConfirmDialog(dialogStrings, options, data.yesCallbackAction, data.noCallbackAction);
                }
                else {
                    var dialogStrings = new window.parent["Xrm"].AlertDialogStrings();
                    dialogStrings.title = data.dialogTitle;
                    dialogStrings.text = data.dialogMessage;
                    var options = new window.parent["Xrm"].DialogOptions();
                    options.height = 200;
                    options.width = 550;
                    window.parent["Xrm"].Dialog.openAlertDialog(dialogStrings, options);
                }
            };
            ControlManager.ShowSuggestionDetails = function () {
                if (CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.currentModel)) {
                    return;
                }
                var currentSuggestion = ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel);
                if (CommonTypes.Types.Object.isNullOrUndefined(currentSuggestion)) {
                    return;
                }
                if (ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield || ProcessDesigner.PBLToolBarView.addMode == ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField)
                    ProcessDesigner.PBLToolBarView.addMode = ProcessDesigner.PBLAddActivityTypeCommandID.None;
                var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentSuggestion.getActivityID();
                $(currentTileButtonName).click();
            };
            ControlManager.prototype.ShowHideSuggestionDetails = function () {
                var suggestionDetailsContainer = $("#canvas").find(".stage-detail-container");
                if (suggestionDetailsContainer.length > 0) {
                    var openSuggestionDetailsViewId = suggestionDetailsContainer.attr("id");
                    var suggestionId = openSuggestionDetailsViewId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, '');
                    var currentElementClicked = event.currentTarget;
                    if (currentElementClicked != null) {
                        var currentElementClickedId = $(currentElementClicked).attr("id");
                        if (currentElementClickedId != null && suggestionId !== currentElementClickedId) {
                            suggestionDetailsContainer.remove();
                            var openTileImageName = openSuggestionDetailsViewId.replace(ProcessDesigner.ElementPrefixes.DetailsPrefix, ProcessDesigner.ElementPrefixes.TileButtonImagePrefix);
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
                    + '<li><a id="libraryTab" href= "#library" > <span title="' + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_LibraryTab_Label") + '" class="ellipsis workspaceLeftPaneOptionLabelWidth" id= "lblLibrary" tabindex=' + GenericWorkflowDesigner.Settings.tabIndexValue + '> ' + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_LibraryTab_Label") + ' </span> </a > </li>'
                    + '<li><a id="propertyTab" href= "#property" > <span title="' + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyTab_Label") + '" class=" ellipsis workspaceLeftPaneOptionLabelWidth" id= "lblProperty" tabindex=' + GenericWorkflowDesigner.Settings.tabIndexValue + '>' + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyTab_Label") + ' </span> </a > </li>'
                    + '</ul>'
                    + '<div id="library" > </div>'
                    + '<div id="property" > </div>'
                    + '</div>';
                var processEditor = $('.custom_control_section');
                processEditor.append(canvasHtml);
                $("#canvasWrapper").on("mousedown", function (event) {
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearSelections);
                    event.stopPropagation();
                });
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
            };
            ControlManager.prototype.initializeToolBar = function () {
                var toolbar = new ProcessDesigner.PBLToolBarView();
                $('.pageSectionsToolbar').append(toolbar.render());
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            };
            ControlManager.prototype.initializeMenubarStyle = function () {
                $("#validateButtonOn .ms-crm-MenuItem-Text").text(ProcessDesigner.MetadataProvider.getLocalizedString("GenericWorkflowDesignerControl_MenuItem_Label_Validate"));
                $("#validateButtonOff .ms-crm-MenuItem-Text").text(ProcessDesigner.MetadataProvider.getLocalizedString("GenericWorkflowDesignerControl_MenuItem_Label_Validate"));
            };
            ControlManager.prototype.initializePlainTextView = function () {
                $("#pbl_plaintextviewwrapper").remove();
                var plainTextIconSpan = '<span id= "plainTextViewIcon" class="CCFSymbolFont plainTextViewIcon" title="' + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionExpressionTooltip") + '"></span>';
                var plainTextTitleDiv = "<div id='plainTextTitleDiv' > " + ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ConditionExpressionTooltip") + '</div>';
                var closePlainTextButton = '<button id="close-plain-text" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ClosePlainTextButtonTitle") + '" aria-label="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ClosePlainTextButtonTitle") + '" type="button" role="button" aria-expanded="true" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '"><span id= "plainTextViewIcon" class="CCFSymbolFont closePlainTextViewIcon"/></button>';
                var showPlainTextButton = '<button id="show-plain-text" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ShowPlainTextButtonTitle") + '" aria-label="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ShowPlainTextButtonTitle") + '" type="button" role="button" aria-expanded="false" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '"><span id= "plainTextViewIcon" class="CCFSymbolFont showPlainTextViewIcon"/></button>';
                var plainTextHeaderDiv = "<div id='plainTextHeaderDiv'>" + plainTextIconSpan + plainTextTitleDiv + showPlainTextButton + "</div>";
                var plainTextWrapperDiv = "<div id='plaintTextWrapperDiv'>" + plainTextHeaderDiv + "</div>";
                $("#zoomCanvasWrapper").append($('<div id="pbl_plaintextviewwrapper">' + closePlainTextButton + plainTextWrapperDiv + '</div>'));
                $("#plainTextTitleDiv").disableSelection();
                try {
                    var textViewGenerator = new ProcessDesigner.PlainTextGenerator("#pbl_plaintextviewwrapper");
                    textViewGenerator.getAttributesSourcesList().done(function (result) {
                        ProcessDesigner.PlainTextGenerator.getPickListValues(result).done(function () {
                            textViewGenerator.renderPlainText();
                        });
                    });
                }
                catch (ex) {
                    console.log(ex.stack);
                }
                $("#show-plain-text").css("display", "none");
                $("#close-plain-text").css("display", "block");
                $("#close-plain-text").click(function (event) {
                    ControlManager.isPlainTextViewVisible = false;
                    ControlManager.showPlainTextView(ControlManager.isPlainTextViewVisible);
                });
                $("#show-plain-text").click(function (event) {
                    ControlManager.isPlainTextViewVisible = true;
                    ControlManager.showPlainTextView(ControlManager.isPlainTextViewVisible);
                });
                ControlManager.showPlainTextView(ControlManager.isPlainTextViewVisible);
                $(window).resize(function () {
                    ControlManager.hidePlainTextViewWhenCloseButtonInvisible();
                });
                $(window).load(function () {
                    ControlManager.hidePlainTextViewWhenCloseButtonInvisible();
                });
            };
            ControlManager.prototype.initializeToolTipMenubar = function () {
                var validationOn = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateMode_On");
                var validationOff = ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValidateMode_Off");
                $("#validateButtonOn").attr("title", validationOff);
                $("#validateButtonOff").attr("title", validationOn);
            };
            ControlManager.showPlainTextView = function (isVisible) {
                if (isVisible) {
                    $("#pbl_plaintextviewwrapper").css("visibility", "visible");
                    $("#plainTextDiv").css("visibility", "visible");
                    $("#plaintTextWrapperDiv").removeClass("collapsed");
                    $("#plainTextHeaderDiv").removeClass("collapsed");
                    $("#show-plain-text").css("display", "none");
                    $("#close-plain-text").css("display", "block");
                }
                else {
                    $("#pbl_plaintextviewwrapper").css("visibility", "hidden");
                    $("#plainTextDiv").css("visibility", "hidden");
                    $("#plaintTextWrapperDiv").addClass("collapsed");
                    $("#plainTextHeaderDiv").addClass("collapsed");
                    $("#show-plain-text").css("display", "block");
                    $("#close-plain-text").css("display", "block");
                }
            };
            ControlManager.hidePlainTextViewWhenCloseButtonInvisible = function () {
                var isCloseButtonVisible = $("#close-plain-text").offset().top > $("#canvasWrapper").offset().top;
                var isPlainTextViewWrapperVisible = $("#pbl_plaintextviewwrapper").css("visibility") === "visible" ? true : false;
                if (isPlainTextViewWrapperVisible && !isCloseButtonVisible) {
                    ControlManager.showPlainTextView(false);
                    ControlManager.isPlainTextViewStateChanged = true;
                }
                else if (ControlManager.isPlainTextViewStateChanged && isCloseButtonVisible) {
                    ControlManager.showPlainTextView(true);
                    ControlManager.isPlainTextViewStateChanged = false;
                }
            };
            ControlManager.prototype.SetTabIndices = function () {
                $("#zoomItem").attr('tabindex', 0);
                $("#multiSelectMode").attr('tabindex', 0);
                $("#canvas").attr('tabindex', -1);
                $(".columnOverflow.majorComponent").attr('tabindex', -1);
                $(".section_control.custom_control_column").attr('tabindex', -1);
            };
            ControlManager.CloseSeeDetails = function () {
                var stageDetailsContainer = $("#canvas").find(".stage-detail-container");
                stageDetailsContainer.remove();
            };
            ControlManager.updateSlotCount = function (slot) {
                var stageTileId = slot.$el.children("div .tile").children("div .setSuggestionTile").attr("id");
                $("#" + stageTileId).find("#tileCount_" + stageTileId).html(slot.model.getActivity().actionSteps.length);
            };
            ControlManager.prototype.updateProcessActivityTree = function (record) {
                if (CommonTypes.Types.String.isNullOrEmpty(record)) {
                    throw (ControlManager.EmptyOrNullInputProcessData);
                }
                else {
                    try {
                        GenericWorkflowDesigner.EventManager.subscribeWithReturnValue(GenericWorkflowDesigner.FrameworkEvents.getActivityDefinitions, this.GetActivityTree);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.showDialog, this.showDialog, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.propertyMessageReceived, ControlManager.ShowSuggestionDetails, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.setKeyDownEvents, ControlManager.SetCanvasFocusEvent, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick, this.ShowHideSuggestionDetails, null);
                        GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.showHideSeeDetails, this.ShowHideSuggestionDetails, null);
                        this.initializeAppModel();
                        this.overrideGenericWorkflowEvents();
                    }
                    catch (err) {
                        throw (ControlManager.InvalidInputProcessData);
                    }
                }
            };
            ControlManager.prototype.overrideGenericWorkflowEvents = function () {
                GenericWorkflowDesigner.EventManager.unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updateProperty);
                GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateProperty, ControlManager.updateProperty, null);
            };
            ControlManager.updateProperty = function (data) {
                var currentModel = GenericWorkflowDesigner.currentModel;
                if (data != undefined) {
                    Object.keys(data).forEach(function (key) {
                        GenericWorkflowDesigner.currentModel[key] = data[key];
                    });
                }
                if (!(GenericWorkflowDesigner.currentModel instanceof ProcessDesigner.BPFConditionActivity)) {
                    GenericWorkflowDesigner.currentModel.trigger("changeModel");
                }
                else {
                    GenericWorkflowDesigner.currentModel.trigger("changeConditionModel");
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            };
            ControlManager.prototype.initializeAppModel = function () {
                var appModelObject = new GenericWorkflowDesigner.appModel();
                appModelObject.workflowAssociatedEntityOID = "fdsf";
                appModelObject.language = "1";
                appModelObject.supportMode = "1";
                appModelObject.applicationRoot = "http://loccalhost";
                appModelObject.helpPageLink = "help.html";
                appModelObject.loaderId = "#loader";
                appModelObject.canvasId = "#canvas";
                appModelObject.toolpaneId = "#toolpane";
                appModelObject.workspaceWrapperId = ".workspaceWrapper";
                appModelObject.librabryId = "#library";
                appModelObject.propertyId = "#property";
                appModelObject.goalId = "#goal";
                appModelObject.multiSelectModeId = "#multiSelectMode";
                appModelObject.zoomIconHolderId = "#zoomIconHolder";
                appModelObject.workflowSwitchId = "#workflowSwitch";
                appModelObject.validateId = "#validate";
                appModelObject.lblLibraryId = "#lblLibrary";
                appModelObject.loadingImageId = "#loadingImage";
                appModelObject.workflowProviderType = 2;
                appModelObject.workflowID = null;
                if (ControlManager.isPBLfromTBX) {
                    appModelObject.libraryTilesDataFileName = "/_static/_common/scripts/BusinessRulesDesigner/LibraryTilesDataWithRunScript.xml";
                }
                else {
                    appModelObject.libraryTilesDataFileName = "/_static/_common/scripts/BusinessRulesDesigner/LibraryTilesData.xml";
                }
                var canvasContainer = $(appModelObject.canvasId);
                var canvasOffset = canvasContainer.offset();
                GenericWorkflowDesigner.Settings.layoutProperties = new ProcessDesigner.PBLLayoutProperties(canvasOffset);
                ProcessDesigner.BPFConditionActivity.overrideWorkflowObjectModelMethods();
                this.gwfdesigner.Initialize(appModelObject);
                ControlManager.SetCanvasFocusEvent();
            };
            ControlManager._MakeIdsUnique = function (_wfStep) {
                if (_wfStep['get_Steps']) {
                    var steps = _wfStep['get_Steps']();
                    for (var i = 0; i < steps.get_Count(); ++i) {
                        var step = steps.get_item(i);
                        if (step) {
                            if (ControlManager.idMap[step.get_Id()]) {
                                step.set_Id(step.get_Id() + Math.floor(Math.random() * 1000));
                            }
                            else {
                                ControlManager.idMap[step.get_Id()] = 1;
                            }
                            ControlManager._MakeIdsUnique(step);
                        }
                    }
                }
                if (_wfStep['get_ActionSteps']) {
                    var actionSteps = _wfStep['get_ActionSteps']();
                    if (actionSteps.get_Count() > 0 && actionSteps.get_item(0)) {
                        ControlManager._MakeIdsUnique(actionSteps.get_item(0));
                    }
                }
            };
            ControlManager.MakeIdsUnique = function (wfStep) {
                ControlManager.idMap = {};
                ControlManager._MakeIdsUnique(wfStep);
            };
            ControlManager.prototype.GetActivityTree = function () {
                var workflowStep = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep("account", 4);
                workflowStep.initializeFromDynamic($.parseJSON(ControlManager.processJson.raw));
                ControlManager.workflowStep = workflowStep;
                ControlManager.processTitle = workflowStep.get_title();
                ControlManager.primaryEntityName = workflowStep.get_primaryEntityName();
                ControlManager.MakeIdsUnique(workflowStep);
                var converter = new ProcessDesigner.PblToActivityCollectionVisitor();
                var activities = converter.convert(workflowStep);
                if (ProcessDesigner.PBLDesignerControl.isNew() && activities.length == 1 && activities.last() instanceof ProcessDesigner.BPFConditionActivity) {
                    activities.last().addDefaultConditionExpression();
                }
                return activities;
            };
            ControlManager.GetSuggestionModel = function (currentModel) {
                if (currentModel.getActivityTypeID() == ProcessDesigner.PblActivityType.setAttributeValueStep) {
                    return currentModel.parentSuggestionActivity;
                }
                else if (currentModel.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                    return currentModel;
                }
            };
            ControlManager.SetShortcutKeysToMoveOnMajorAreas = function (event) {
                if (event.keyCode == 77 && event.altKey) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
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
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    $("#canvas").children("div .slot").first().focus();
                }
                else if (event.altKey && event.keyCode == 189) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#zoomOut");
                }
                else if (event.altKey && event.keyCode == 187) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#zoomIn");
                }
                else if (event.altKey && event.keyCode == 220) {
                    ControlManager.SetFunctionalityForButtonsWithShortcutKeys("button#fitToScreen");
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 67) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    $("#libraryTab").children().focus();
                    $("#libraryTab").click();
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 80) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    $("#propertyTab").children().focus();
                    GenericWorkflowDesigner.eventManager.trigger('activatePropertyTab');
                }
                else if (event.altKey && event.keyCode == 80) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    if (!($("#close-plain-text").css("display") == "none"))
                        $("#close-plain-text").focus();
                    else
                        $("#show-plain-text").focus();
                }
                else if (event.keyCode == 27) {
                    ControlManager.ClearSelections();
                    event.stopPropagation();
                }
                else if (event.ctrlKey && event.altKey && event.keyCode == 68) {
                    ControlManager.NavigateToSelectedElement();
                    event.stopPropagation();
                }
            };
            ControlManager.SetFunctionalityForButtonsWithShortcutKeys = function (idName) {
                event.preventDefault();
                $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                $(idName).focus();
                $(idName).click();
            };
            ControlManager.SetFocusToMiniMapButtons = function () {
                var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
                if (miniMapWrapperVisibility == "visible")
                    $("#close-mini-map").focus();
                else
                    $("#show-mini-map").focus();
            };
            ControlManager.SetCanvasFocusEvent = function () {
                if ($('#canvas').children("div .slot").first().length > 0) {
                    $("#canvas").children("div .slot").first().children("div .tile").children("div .conditionTile").attr("tabindex", GenericWorkflowDesigner.Settings.tabIndexValue);
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
                $("#canvas").children("div .slot").first().focusin(function (event) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    $("#canvas").children("div .slot").first().find(".conditionTile").addClass("selected");
                    ControlManager.canvasScrollIntoView($("#canvas").children("div .slot").first().find(".conditionTile").get(0));
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                    GenericWorkflowDesigner.currentModel = activities[0];
                });
                $("#canvas").children("div .slot").first().focusout(function (event) {
                    $("#canvas").children("div .slot").first().find(".conditionTile").removeClass("selected");
                });
                var keyMap = { 65: false };
                $(".slot").keydown(function (event) {
                    if (event.keyCode == 38 && event.shiftKey) {
                        var currentSuggestionTile = ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel);
                        var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentSuggestionTile.getActivityID();
                        var currentSuggestionDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentSuggestionTile.getActivityID();
                        if ($("#" + currentSuggestionDetailsDivName) && $("#" + currentSuggestionDetailsDivName).css("visibility") == "visible") {
                            $(currentTileButtonName).click();
                        }
                    }
                    else if (event.keyCode == 37 || event.keyCode == 38) {
                        var activity, hitAreaName;
                        activity = GenericWorkflowDesigner.currentModel;
                        var parentActivity = GenericWorkflowDesigner.Settings.workflowTree.getParent(activity);
                        (event.keyCode == 37) ? hitAreaName = "_hitarea" : hitAreaName = "_verticalhitarea";
                        if ($("#" + parentActivity.id + hitAreaName).length > 0 && $("#" + parentActivity.id + hitAreaName).hasClass("hoverOverDroppable")) {
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#" + parentActivity.id + hitAreaName).focus();
                            GenericWorkflowDesigner.currentModel = parentActivity;
                        }
                        else {
                            ControlManager.NavigateToNextTile(parentActivity);
                        }
                    }
                    if (event.keyCode == 39) {
                        var activity, childActivities;
                        activity = GenericWorkflowDesigner.currentModel;
                        if ($("#" + activity.id + "_hitarea").length > 0 && $("#" + activity.id + "_hitarea").hasClass("hoverOverDroppable")) {
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#" + activity.id + "_hitarea").focus();
                        }
                        else {
                            if (activity.getActivityTypeID() === ProcessDesigner.BPFActivityType.condition) {
                                childActivities = activity.getYesBranches();
                            }
                            else {
                                childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
                            }
                            ControlManager.NavigateToNextTile(childActivities[0]);
                        }
                    }
                    if (event.keyCode == 40 && event.shiftKey) {
                        var currentSuggestionTile = ControlManager.GetSuggestionModel(GenericWorkflowDesigner.currentModel);
                        var currentTileButtonName = ProcessDesigner.ElementPrefixes.TileButtonPrefix + currentSuggestionTile.getActivityID();
                        var currentSuggestionDetailsDivName = ProcessDesigner.ElementPrefixes.DetailsPrefix + currentSuggestionTile.getActivityID();
                        if ($("#" + currentSuggestionDetailsDivName) && $("#" + currentSuggestionDetailsDivName).css("visibility") != "visible") {
                            $(currentTileButtonName).click();
                            if ($("#canvas").find("#" + currentSuggestionTile.id + ".slot").find(".step-list-listitem").length > 0) {
                                $("#canvas").find("#" + currentSuggestionTile.id + ".slot").find(".step-list-listitem.selected").removeClass("selected");
                                $("#canvas").find("#" + currentSuggestionTile.id + ".slot").find(".step-list-listitem").first().focus();
                                $("#canvas").find("#" + currentSuggestionTile.id + ".slot").find(".step-list-listitem").first().addClass("selected");
                            }
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
                        }
                    }
                    else if (event.keyCode == 40) {
                        var activity, childActivity;
                        activity = GenericWorkflowDesigner.currentModel;
                        if ($("#" + activity.id + "_verticalhitarea").length > 0 && $("#" + activity.id + "_verticalhitarea").hasClass("hoverOverDroppable")) {
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#" + activity.id + "_verticalhitarea").focus();
                        }
                        else {
                            if (activity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                                if ($("#" + activity.id).find(".step-list-listitem").length > 0) {
                                    $("#" + activity.id).find(".step-list-listitem.selected").removeClass("selected");
                                    if ($("#" + activity.id).find(".place-holder-listitem").length > 0) {
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
                                }
                                event.stopPropagation();
                            }
                            else {
                                if (activity.hasNoBranch)
                                    childActivity = activity.getNoBranch();
                                else {
                                    childActivity = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity)[0];
                                }
                                ControlManager.NavigateToNextTile(childActivity);
                            }
                        }
                    }
                    if (event.keyCode == 13) {
                        $("#canvas").find(".tile").find(".selected").parent().parent().click();
                    }
                    if (event.ctrlKey && event.keyCode == 88) {
                        if (!$("#cut").prop("disabled")) {
                            event.preventDefault();
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#cut").click();
                        }
                    }
                    else if (event.ctrlKey && event.keyCode == 67) {
                        if (!$("#copy").prop("disabled")) {
                            event.preventDefault();
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#copy").click();
                        }
                    }
                    else if (event.ctrlKey && event.keyCode == 86) {
                        if (!$("#paste").prop("disabled")) {
                            event.preventDefault();
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#paste").click();
                        }
                    }
                    else if (event.keyCode == 46) {
                        if (!$("#delete").prop("disabled")) {
                            event.preventDefault();
                            $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                            $("#delete").click();
                        }
                    }
                    else if (event.keyCode == 65) {
                        if (event.keyCode in keyMap) {
                            keyMap[event.keyCode] = true;
                        }
                    }
                    else if (keyMap[65] && event.keyCode == 187) {
                        $("#toggleStep").click();
                    }
                    ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                    event.stopPropagation();
                });
                $("#DesignerArea").keydown(function (event) {
                    ControlManager.SetShortcutKeysToMoveOnMajorAreas(event);
                });
                $(".setSuggestionTile").focusin(function (event) {
                    var id = event.target.getAttribute("id");
                    if (id != null) {
                        if (ControlManager.SuggestionTileTitle == true) {
                            var message = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_ShiftDownArrowKey");
                            var message1 = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_ShiftUpArrowKey");
                            var expression = window['String'].format(GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ScreenReader_DetailExpand"), message);
                            var expression1 = window['String'].format(GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_PBL_ScreenReader_DetailCollapse"), message1);
                            var tileTitle = $("#canvas").find("#" + event.target.getAttribute("id") + ".slot").attr("title");
                            var tileText = $("#canvas").find("#" + event.target.getAttribute("id") + ".slot .tileTitle").attr("title");
                            tileTitle = tileTitle + " \n" + expression + " \n" + expression1;
                            $("#canvas").find("#" + event.target.getAttribute("id") + ".slot").find(".setSuggestionTile").attr("title", tileTitle);
                            $("#canvas").find("#" + event.target.getAttribute("id") + ".slot").find(".tileButtonDiv").attr("title", tileTitle);
                            $("#canvas").find("#" + event.target.getAttribute("id") + ".slot").attr("title", tileTitle);
                            ControlManager.SuggestionTileTitle = false;
                        }
                    }
                });
                $(".conditionTile, .setAttributeValueTile, .setDefaultValueTile, .setDisplayModeTile, .setMessageTile, .setSuggestionTile, .setVisibilityTile, .setFieldRequiredLevelTile").focusin(function (event) {
                    var id = event.target.getAttribute("id");
                    if (id != null) {
                        GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateModel, GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id));
                        GenericWorkflowDesigner.currentModel = GenericWorkflowDesigner.Settings.workflowTree.getActivityById(id);
                    }
                });
                $(".conditionTile").focusin(function (event) {
                    var rootTileId = $("#canvas").children("div .slot").first().children("div .tile").children("div .conditionTile").attr("id");
                    var currentTileId = event.target.getAttribute("id");
                    if (ControlManager.StageTileTitle == true && rootTileId == currentTileId) {
                        var tileTitle = $("#canvas").children("div .slot").first().children("div .tile").children("div .conditionTile").attr("title");
                        tileTitle = tileTitle + " \n" + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_MoveBetweenComponent");
                        $("#canvas").children("div .slot").first().children("div .tile").children("div .conditionTile").attr("title", tileTitle);
                        ControlManager.StageTileTitle = false;
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
            };
            ControlManager.NavigateToNextTile = function (activityToBeFocused) {
                if (activityToBeFocused) {
                    $("#canvas").find(".slot").find(".tile").children(".selected").removeClass("selected");
                    var tileToBefocusedDiv = $("#canvas").find("div#" + activityToBeFocused.id + "." + activityToBeFocused.getActivityTypeID() + "Tile");
                    tileToBefocusedDiv.addClass("selected");
                    tileToBefocusedDiv.focus();
                    ControlManager.canvasScrollIntoView(tileToBefocusedDiv.get(0));
                    GenericWorkflowDesigner.currentModel = activityToBeFocused;
                }
            };
            ControlManager.ClearSelections = function () {
                $('#canvas').find('.setSuggestionTile.selected').removeClass("selected");
                $('#canvas').find('.conditionTile.selected').removeClass("selected");
                $('#canvas').find(".stage-detail-container.selected").removeClass("selected");
                $('#canvas').find(".step-list-listitem.selected").removeClass("selected");
                $('#canvas').find(".setDisplayModeTile.selected").removeClass("selected");
                $('#canvas').find(".setMessageTile.selected").removeClass("selected");
                $('#canvas').find(".setAttributeValueTile.selected").removeClass("selected");
                $('#canvas').find(".setDefaultValueTile.selected").removeClass("selected");
                $('#canvas').find(".setSuggestionTile.selected").removeClass("selected");
                $('#canvas').find(".setVisibilityTile.selected").removeClass("selected");
                $('#canvas').find(".setFieldRequiredLevelTile.selected").removeClass("selected");
                $("#Add.toolbarItem").trigger("mouseleave");
            };
            ControlManager.NavigateToSelectedElement = function () {
                var selectedActivityId;
                var selectedActivityType = GenericWorkflowDesigner.currentModel.getActivityTypeID();
                switch (selectedActivityType.toLowerCase()) {
                    case ProcessDesigner.PblActivityType.setSuggestionStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setSuggestionTile").addClass("selected");
                        $("#" + selectedActivityId).find(".setSuggestionTile").focus();
                        if ($("#" + selectedActivityId).find(".stage-detail-container").length > 0) {
                            $("#" + selectedActivityId).find(".stage-detail-container").addClass("selected");
                        }
                        break;
                    case ProcessDesigner.PblActivityType.condition.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".conditionTile").addClass("selected");
                        $("#" + selectedActivityId).find(".conditionTile").focus();
                        break;
                    case ProcessDesigner.PblActivityType.setDisplayModeStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setDisplayModeTile").addClass("selected");
                        $("#" + selectedActivityId).find(".setDisplayModeTile").focus();
                        break;
                    case ProcessDesigner.PblActivityType.setMessageStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setMessageTile ").addClass("selected");
                        $("#" + selectedActivityId).find(".setMessageTile ").focus();
                        break;
                    case ProcessDesigner.PblActivityType.setDefaultValueStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setDefaultValueTile").addClass("selected");
                        $("#" + selectedActivityId).find(".setDefaultValueTile").focus();
                        break;
                    case ProcessDesigner.PblActivityType.setAttributeValueStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setAttributeValueTile ").addClass("selected");
                        $("#" + selectedActivityId).find(".setAttributeValueTile ").focus();
                        if ($("#" + selectedActivityId).parents(".slot").find(".setSuggestionTile").length > 1) {
                            $("#" + selectedActivityId).parents(".slot").find(".setSuggestionTile").addClass("selected");
                            $("#" + selectedActivityId).parents(".stage-detail-container").addClass("selected");
                        }
                        break;
                    case ProcessDesigner.PblActivityType.setVisibilityStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setVisibilityTile ").addClass("selected");
                        $("#" + selectedActivityId).find(".setVisibilityTile ").focus();
                        break;
                    case ProcessDesigner.PblActivityType.setFieldRequiredLevelStep.toLowerCase():
                        selectedActivityId = GenericWorkflowDesigner.currentModel.id;
                        ControlManager.ClearSelections();
                        $("#" + selectedActivityId).find(".setFieldRequiredLevelTile").addClass("selected");
                        $("#" + selectedActivityId).find(".setFieldRequiredLevelTile").focus();
                        break;
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
            ControlManager.ConvertActivityTreeToJson = function () {
                var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                stopwatch.start();
                ControlManager.index = 1;
                var json = "";
                ControlManager.Activities = [];
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities();
                var rootActivity;
                if (activities.length > 0) {
                    for (var i = 0; i < activities.length; i++) {
                        if (GenericWorkflowDesigner.Settings.workflowTree.getParent(activities[i]) == null) {
                            rootActivity = activities[i];
                            break;
                        }
                    }
                    ControlManager.addActivity(rootActivity);
                    ControlManager.routeChildren(rootActivity);
                    var workflowObj = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep(ControlManager.primaryEntityName, 2);
                    workflowObj.set_Id(ControlManager.Activities[0].attributes.WorkflowID);
                    workflowObj.set_Description(ControlManager.Activities[0].processStep.get_Description());
                    workflowObj.set_title(ControlManager.processTitle);
                    workflowObj = MscrmControls.ProcessDesigner.BPFConditionActivity.generateJson(ControlManager.Activities, workflowObj);
                    ControlManager.Activities = [];
                    json = workflowObj.toJson();
                }
                stopwatch.stop();
                localStorage.setItem("PBL_SavePreProcessing", stopwatch.elapsedMilliseconds.toString());
                return json;
            };
            ControlManager.routeChildren = function (activity) {
                if (!ProcessDesigner.PblActivityType.isValidPBLActivityType(activity.getActivityTypeID())) {
                    return;
                }
                var childActivities = this.getChildActivities(activity);
                for (var i = 0; i < childActivities.length; i++) {
                    this.addActivity(childActivities[i]);
                }
                for (var i = 0; i < childActivities.length; i++) {
                    this.routeChildren(childActivities[i]);
                }
            };
            ControlManager.addActivity = function (activity) {
                if (ProcessDesigner.PblActivityType.isValidPBLActivityType(activity.getActivityTypeID())) {
                    this.Activities.push(activity);
                }
            };
            ControlManager.getChildActivities = function (activity) {
                var childActivities = [];
                childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
                return childActivities;
            };
            ControlManager.prototype.dispose = function () { };
            ControlManager.populateExistingPBLScope = function () {
                if (ControlManager.PBLData.PBLScope == ProcessDesigner.PBL.Enums.Scope.Entity) {
                    ControlManager.PBLData.Selected = ProcessDesigner.ScopeType.Entity;
                }
                else if (ControlManager.PBLData.PBLEnabledForms[window["formId"]] == null) {
                    ControlManager.PBLData.Selected = ProcessDesigner.ScopeType.AllForms;
                }
                else {
                    ControlManager.PBLData.Selected = ControlManager.PBLData.PBLEnabledForms[window["formId"]];
                }
                ControlManager.renderPBLOptions(ControlManager.PBLData.PBLEnabledForms, ControlManager.PBLData.Selected);
            };
            ControlManager.populateNewPBLScope = function () {
                if (window["launchMode"] == ProcessDesigner.LaunchMode.New) {
                    if (window["launchPoint"] == ProcessDesigner.LaunchPoint.FormEditor) {
                        ControlManager.PBLData.Selected = ControlManager.PBLData.PBLEnabledForms[window["formId"]];
                    }
                    else {
                        ControlManager.PBLData.Selected = ProcessDesigner.ScopeType.AllForms;
                    }
                    ControlManager.renderPBLOptions(ControlManager.PBLData.PBLEnabledForms, ControlManager.PBLData.Selected);
                }
                else {
                    ControlManager.retrievePBLScope();
                }
            };
            ControlManager.ResolvePBLScope = function () {
                ControlManager.PBLData.PBLEnabledForms = {};
                if (!CommonTypes.Types.String.isNullOrEmpty(window["formId"])) {
                    var formid = window["formId"].replace("{", "");
                    window["formId"] = formid.replace("}", "");
                }
                this.retrievePBLEnbledForms();
            };
            ControlManager.retrievePBLScope = function () {
                var Type = ProcessDesigner.ODataType.ProcessTrigger, filter = "$filter=ProcessId/Id eq guid\'" + MscrmControls.ProcessDesigner.UrlUtilites.getUrlParameter('id') + "\'";
                SDK.REST.retrieveMultipleRecords(Type, filter, this.onRetrievePBLScopeSucesss, this.onFailure, this.populateExistingPBLScope);
            };
            ControlManager.retrievePBLEnbledForms = function () {
                var Type = ProcessDesigner.ODataType.SystemForm, filter = "$select=Name,FormId&$filter=ObjectTypeCode eq \'" + window["entityLogicalName"] + "\' and (Type/Value eq 2 or Type/Value eq 12)";
                SDK.REST.retrieveMultipleRecords(Type, filter, this.onRetrievePBLEnbledFormsSuccess, this.onFailure, this.populateNewPBLScope);
            };
            ControlManager.retrievePBLFormName = function () {
                var Type = ProcessDesigner.ODataType.SystemForm, Id = window["formId"], Select = "Name";
                SDK.REST.retrieveRecord(Id, Type, Select, null, this.onRetrievePBLFormNameSuccess, this.onFailure);
            };
            ControlManager.updatePBLScope = function () {
                var Record = {}, Id = MscrmControls.ProcessDesigner.UrlUtilites.getUrlParameter('id'), Type = ProcessDesigner.ODataType.ProcessTrigger;
                if (ControlManager.PBLData.PBLProcessTriggerId.length > 0) {
                    ControlManager.PBLData.PBLProcessTriggerId[0].Scope.Value = ControlManager.PBLData.PBLScope;
                    ControlManager.PBLData.PBLProcessTriggerId[0].FormId.Id = $("#pblScope").val() == "Empty" ? null : $("#pblScope").val();
                    SDK.REST.updateRecord(ControlManager.PBLData.PBLProcessTriggerId[0].ProcessTriggerId, ControlManager.PBLData.PBLProcessTriggerId[0], Type, this.onUpdatePBLScopeSuccess, this.onFailure);
                }
            };
            ControlManager.onFailure = function (error) {
                console.log("Failure : " + error);
            };
            ControlManager.onRetrievePBLScopeSucesss = function (data) {
                if (data && data.length > 0) {
                    ControlManager.PBLData.PBLScope = data[0].Scope.Value;
                    ControlManager.PBLData.CurrentFormId = data[0].FormId.Id;
                    ControlManager.PBLData.PBLProcessTriggerId = data;
                    window["formId"] = (CommonTypes.Types.String.isNullOrEmpty(window["formId"])) ? data[0].FormId.Id : null;
                }
            };
            ControlManager.onRetrievePBLEnbledFormsSuccess = function (data) {
                for (var i = 0; i < data.length; i++) {
                    ControlManager.PBLData.PBLEnabledForms[data[i].FormId] = data[i].Name;
                }
                ControlManager.PBLData.PBLEnabledForms["allforms"] = ProcessDesigner.ScopeType.AllForms;
                ControlManager.PBLData.PBLEnabledForms["entity"] = ProcessDesigner.ScopeType.Entity;
            };
            ControlManager.onRetrievePBLFormNameSuccess = function (data) {
                ControlManager.PBLData.PBLCurrentFormName = data.Name;
            };
            ControlManager.onUpdatePBLScopeSuccess = function (data) {
                console.log("Scope of the PBL is saved successfully");
            };
            ControlManager.onComplete = function () {
                return;
            };
            ControlManager.renderPBLOptions = function (Options, Selected) {
                var Select = $('<select class=pblScope id="pblScope"/>');
                for (var formId in Options) {
                    if (Selected == Options[formId]) {
                        $('<option />', { value: formId, text: Options[formId], selected: true }).appendTo(Select);
                    }
                    else {
                        if (Options[formId] == ProcessDesigner.ScopeType.Entity || Options[formId] == ProcessDesigner.ScopeType.AllForms) {
                            $('<option />', { value: "Empty", text: Options[formId] }).appendTo(Select);
                        }
                        else {
                            $('<option />', { value: formId, text: Options[formId] }).appendTo(Select);
                        }
                    }
                }
                if ($(".formHeaderContent").has("#pblScope").length == 0) {
                    Select.appendTo('.formHeaderContent');
                }
                else {
                    $(".formHeaderContent").remove();
                    Select.appendTo('.formHeaderContent');
                }
            };
            ControlManager.prototype.initializeDesignerMode = function () {
                var isReadOnly = $("#footerReadOnlyState").val();
                if (typeof isReadOnly != "undefined") {
                    ControlManager.isReadOnlyMode = isReadOnly;
                    this.setReadOnlyMode(isReadOnly);
                }
            };
            ControlManager.prototype.setReadOnlyMode = function (isReadOnly) {
                var activityCollection = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
                if (activityCollection) {
                    $.each(activityCollection, function (index, currentActivity) {
                        currentActivity.setReadonlyMode(isReadOnly);
                        if (currentActivity.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) {
                            $.each(currentActivity.actionSteps, function (index, step) {
                                step.setReadonlyMode(isReadOnly);
                            });
                        }
                    });
                    $('#Add').prop('disabled', isReadOnly);
                    $('#delete').prop('disabled', isReadOnly);
                    $('#cut').prop('disabled', isReadOnly);
                    $('#copy').prop('disabled', isReadOnly);
                    $('#paste').prop('disabled', isReadOnly);
                    $('#snapshot').prop('disabled', false);
                    if (isReadOnly.toString() == "True") {
                        ControlManager.disableButton('Add');
                        $("#Add, #delete, #cut, #copy, #paste").addClass("disabled-toolbar-buttons");
                    }
                    else {
                        ControlManager.enableButton('Add');
                        $("#Add, #delete, #cut, #copy, #paste").removeClass("disabled-toolbar-buttons");
                    }
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                    GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.render();
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                }
            };
            ControlManager.disableButton = function (button) {
                $('#' + button.toLowerCase()).prop('disabled', true);
                $('#toolBarItemTitle' + button).removeClass("utilityBarItem-normal-mode");
                $('#toolBarItemTitle' + button).addClass("utilityBarItem-disabled-mode");
            };
            ControlManager.enableButton = function (button) {
                $('#' + button.toLowerCase()).prop('disabled', false);
                $('#toolBarItemTitle' + button).removeClass("utilityBarItem-disabled-mode");
                $('#toolBarItemTitleDelete' + button).addClass("utilityBarItem-normal-mode");
            };
            ControlManager.prototype.refreshToolbarItems = function () {
                $("#Add").attr("role", "menuitem");
                if (ControlManager.isReadOnlyMode == "True")
                    return;
                var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                    ControlManager.disableButton('Cut');
                    ControlManager.disableButton('Copy');
                    ControlManager.disableButton('Delete');
                }
                else {
                    ControlManager.enableButton('Copy');
                    if (selectedActivities[0].getActivityTypeID() == ProcessDesigner.PblActivityType.condition) {
                        ControlManager.disableButton('Cut');
                        if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities[0].getParent())
                            && selectedActivities[0] == GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()) {
                            var children = selectedActivities[0].getChildActivitiesSorted();
                            if (children.length < 1 || children[children.length - 1].getActivityTypeID() != ProcessDesigner.PblActivityType.condition) {
                                ControlManager.disableButton('Delete');
                            }
                            else {
                                ControlManager.enableButton('Delete');
                            }
                        }
                        else {
                            ControlManager.enableButton('Delete');
                        }
                    }
                    else if (!CommonTypes.Types.Object.isNullOrUndefined(selectedActivities[0].parentSuggestionActivity)
                        && selectedActivities[0].isInRecommendationTile()
                        && selectedActivities[0].parentSuggestionActivity.actionSteps.length == 1) {
                        ControlManager.disableButton('Cut');
                        ControlManager.disableButton('Delete');
                    }
                    else {
                        ControlManager.enableButton('Delete');
                        ControlManager.enableButton('Cut');
                    }
                }
                if (CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities()) || GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities().length <= 0) {
                    ControlManager.disableButton('Paste');
                }
                else {
                    ControlManager.enableButton('Paste');
                }
                var isReadOnly = $("#footerReadOnlyState").val();
                if (typeof isReadOnly != "undefined") {
                    if (isReadOnly != "True") {
                        $('#Add').prop('disabled', false);
                        $('#Add').addClass("utilityBarItem-normal-mode");
                    }
                }
            };
            ControlManager.ResizeComponentsTab = function () {
                var div = document.getElementById('componentsList');
                var currentlyExpanded = document.getElementById('library').getAttribute('aria-expanded');
                var hasVerticalScrollbar = div.scrollHeight > div.clientHeight;
                if (window.devicePixelRatio >= 1 && ((hasVerticalScrollbar == true && currentlyExpanded == "true") || (hasVerticalScrollbar == false && currentlyExpanded == "false"))) {
                    var workspaceWrapperWidth = '74.5%';
                    var toolpaneWidth = '24.5%';
                    $(".workspaceWrapper").attr("style", "width:" + workspaceWrapperWidth + " !important");
                    $("#toolpane").attr("style", "width:" + toolpaneWidth + " !important");
                }
                else {
                    var workspaceWrapperWidth = '76%';
                    var toolpaneWidth = '23%';
                    $(".workspaceWrapper").attr("style", "width:" + workspaceWrapperWidth + " !important");
                    $("#toolpane").attr("style", "width:" + toolpaneWidth + " !important");
                }
            };
            ControlManager.InvalidInputProcessData = "Invalid process data.";
            ControlManager.EmptyOrNullInputProcessData = "Process data is empty or null";
            ControlManager.PblErrorNullOrInvalidData = "ProcessData.raw is null or empty.";
            ControlManager.Activities = [];
            ControlManager.PBLData = {};
            ControlManager.Selected = "";
            ControlManager.processTitle = "";
            ControlManager._isDirty = false;
            ControlManager.index = 1;
            ControlManager.isPBLfromTBX = false;
            ControlManager.StageTileTitle = false;
            ControlManager.SuggestionTileTitle = false;
            ControlManager.isPlainTextViewVisible = true;
            ControlManager.isPlainTextViewStateChanged = false;
            ControlManager.keyMap = { 17: false, 18: false, 78: false };
            ControlManager.idMap = {};
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
        ProcessDesigner.processStep;
        ProcessDesigner.isPropertyPageSaved = false;
        ProcessDesigner.isStructuralChangePerformed = false;
        var PBLDesignerControl = (function () {
            function PBLDesignerControl() {
            }
            PBLDesignerControl.prototype.alignTabs = function () {
                if ($['browser'].chrome) {
                    if ($('#DesignerArea .workspaceWrapper') && $('#DesignerArea .workspaceWrapper').length) {
                        $('#DesignerArea .workspaceWrapper').css('display', 'inline-block');
                    }
                    else {
                        setTimeout(this.alignTabs, 1000);
                    }
                }
            };
            PBLDesignerControl.prototype.initCore = function (context) {
                this.alignTabs();
                this.processDesignerControlManager = new ProcessDesigner.ControlManager(null);
                this.processDesignerControlManager.initialize(this);
                ProcessDesigner.sessionId = Utility.newGuid();
                this.initializeTelemetryReporter();
                PBLDesignerControl.fetchProcessId();
                if (ProcessDesigner.processId != null) {
                    this.retrieveProcessAttributes(context);
                }
                if (this.propertyBagParametersAreValid(context)) {
                    PBLDesignerControl.dataBag = context;
                    ProcessDesigner.ControlManager.isPBLfromTBX = context.isTBXScope;
                    this.processDesignerControlManager.render(context.parameters);
                    window["designerActivate"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerActivateEvent;
                    window["designerDeactivate"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerDeactivateEvent;
                    window["designerSave"] = MscrmControls.ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerSaveEvent;
                    window["designerValidate"] = MscrmControls.ProcessDesigner.ValidatePBL.validate;
                    window["designerToJson"] = MscrmControls.ProcessDesigner.ControlManager.ConvertActivityTreeToJson;
                    window["designerDirty"] = MscrmControls.ProcessDesigner.ControlManager.isDirty;
                    window["designerSaveDone"] = MscrmControls.ProcessDesigner.ControlManager.saveDone;
                    window["designerLoaded"] = true;
                    window["designerValidationMode"] = MscrmControls.ProcessDesigner.ValidatePBL.setValidationMode;
                    MscrmControls.ProcessDesigner.ValidatePBL.validateAfterLoad();
                }
                else {
                    throw (CommonTypes.Types.String.Format("Expected key {0} in the input data bag.", CommonTypes.Types.Object.isNullOrUndefined(context.parameters.ProcessData) ? "ProcessData" : "updatedProperties"));
                }
                $(window).bind("beforeunload", ProcessDesigner.TelemetryEventReporter.ReportProcessDesignerCloseEvent);
            };
            PBLDesignerControl.prototype.editDone = function () {
                window["isDirty"] = true;
            };
            PBLDesignerControl.prototype.propertyBagParametersAreValid = function (context) {
                var propertiesUpdated = !CommonTypes.Types.Object.isNullOrUndefined(context.updatedProperties);
                var processDataExists = !CommonTypes.Types.Object.isNullOrUndefined(context.parameters.ProcessData);
                return propertiesUpdated && processDataExists;
            };
            PBLDesignerControl.prototype.initializeTelemetryReporter = function () {
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
            PBLDesignerControl.prototype.MakeCorsRequest = function (requestUrl, method, data, onResponseAvailable) {
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
            PBLDesignerControl.prototype.ProcessCORSRequestResponse = function (xhr) {
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
            PBLDesignerControl.prototype.XhrResponse = function () {
                if (ProcessDesigner.xhrResponseFunction) {
                    ProcessDesigner.xhrResponseFunction(ProcessDesigner.xhrObj);
                }
                else {
                    console.log("XHR Status: ", ProcessDesigner.xhrObj.status, "-", ProcessDesigner.xhrObj.statusText);
                }
            };
            PBLDesignerControl.prototype.retrieveProcessAttributes = function (context) {
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
            PBLDesignerControl.isNew = function () {
                return (!ProcessDesigner.processId || ProcessDesigner.processId.length == 0);
            };
            PBLDesignerControl.fetchProcessId = function () {
                ProcessDesigner.processId = PBLDesignerControl.getURLParameter("id");
                if (ProcessDesigner.processId != null && ProcessDesigner.processId.indexOf('%') > -1) {
                    ProcessDesigner.processId = ProcessDesigner.processId.substr(3, 36);
                }
            };
            PBLDesignerControl.getURLParameter = function (sParam) {
                var sPageURL = window.location.search.substring(1);
                var sURLVariables = sPageURL.split('&');
                for (var i = 0; i < sURLVariables.length; i++) {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] == sParam) {
                        return sParameterName[1];
                    }
                }
            };
            PBLDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.None;
            return PBLDesignerControl;
        })();
        ProcessDesigner.PBLDesignerControl = PBLDesignerControl;
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
            ElementId.ProcessCategory = "processCategory";
            ElementId.ProcessTitle = "processTitle";
            ElementId.ProcessFooter = "processFooter";
            ElementId.ProcessFooterReadOnlyState = "footerReadonlystate";
            ElementId.ProcessFooterState = "processFooterState";
            ElementId.ProcessProp = "process_prop";
            ElementId.HeaderViewContainer = "HeaderViewContainer";
            ElementId.BodyViewContainer = "BodyViewContainer";
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
            CssClass.ProcessCategory = "processCategory";
            CssClass.ProcessTitle = "processTitle";
            CssClass.ProcessFooter = "processFooter";
            CssClass.ProcessFooterState = "processFooterState";
            CssClass.HighContrast = "highContrast";
            CssClass.Hidden = "hidden";
            CssClass.AutomationCore = "mscrm-automationcore";
            CssClass.HeaderViewContainer = "mscrm-processeditor-HeaderViewContainer";
            CssClass.BodyViewContainer = "mscrm-processeditor-BodyViewContainer";
            return CssClass;
        })();
        ProcessDesigner.CssClass = CssClass;
        var ScopeType = (function () {
            function ScopeType() {
            }
            ScopeType.AllForms = "AllForms";
            ScopeType.Entity = "Entity";
            return ScopeType;
        })();
        ProcessDesigner.ScopeType = ScopeType;
        var ODataType = (function () {
            function ODataType() {
            }
            ODataType.SystemForm = "SystemForm";
            ODataType.ProcessTrigger = "ProcessTrigger";
            return ODataType;
        })();
        ProcessDesigner.ODataType = ODataType;
        var LaunchMode = (function () {
            function LaunchMode() {
            }
            LaunchMode.New = "New";
            LaunchMode.Edit = "Edit";
            return LaunchMode;
        })();
        ProcessDesigner.LaunchMode = LaunchMode;
        var LaunchPoint = (function () {
            function LaunchPoint() {
            }
            LaunchPoint.FormEditor = "formEditor";
            LaunchPoint.FieldEditor = "FieldEditor";
            return LaunchPoint;
        })();
        ProcessDesigner.LaunchPoint = LaunchPoint;
        var RecommendationStep = (function () {
            function RecommendationStep() {
            }
            RecommendationStep.RecommendationLevel = "RECOMMENDATION";
            return RecommendationStep;
        })();
        ProcessDesigner.RecommendationStep = RecommendationStep;
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
        var PBLStringConstants = (function () {
            function PBLStringConstants() {
            }
            PBLStringConstants.ControlTypeStandard = "standard";
            PBLStringConstants.NullStringForTypeClear = "__NULL__";
            return PBLStringConstants;
        })();
        ProcessDesigner.PBLStringConstants = PBLStringConstants;
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
            ProcessDesignerSessionClosedEvent.prototype.SetInfo = function (processId, sessionId, state, type) {
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.processId, processId);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.sessionId, sessionId);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.state, state);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.type, type);
                this.AddEventParameter(ProcessDesignerSessionClosedParameters.timestamp, Utility.GetTimeStamp());
            };
            return ProcessDesignerSessionClosedEvent;
        })(TelemetryEvent);
        ProcessDesigner.ProcessDesignerSessionClosedEvent = ProcessDesignerSessionClosedEvent;
        var ProcessDesignerSessionClosedParameters = (function () {
            function ProcessDesignerSessionClosedParameters() {
            }
            ProcessDesignerSessionClosedParameters.processId = "ProcessId";
            ProcessDesignerSessionClosedParameters.sessionId = "SessionId";
            ProcessDesignerSessionClosedParameters.state = "State";
            ProcessDesignerSessionClosedParameters.type = "Type";
            ProcessDesignerSessionClosedParameters.timestamp = "Timestamp";
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
var CommonTypes_Telemetry = CommonTypes.Types;
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        'use strict';
        var TelemetryEventReporter = (function () {
            function TelemetryEventReporter() {
            }
            TelemetryEventReporter.ReportProcessDesignerLaunchEvent = function (context) {
                var event = new ProcessDesigner.ProcessDesignerLaunchedEvent();
                var originCrmClient = "WebClient";
                var launchedFrom = "EntityForm";
                if (!CommonTypes_Telemetry.Object.isNullOrUndefined(window["clientType"])) {
                    originCrmClient = window["clientType"];
                }
                if (!CommonTypes_Telemetry.Object.isNullOrUndefined(window["launchPoint"])) {
                    launchedFrom = window["launchPoint"];
                }
                var processType = ProcessDesigner.ProcessTypeNames.BusinessRule;
                if (!CommonTypes_Telemetry.Object.isNullOrUndefined(context.parameters.StateCode.raw)
                    && !CommonTypes_Telemetry.Object.isNullOrUndefined(context.parameters.StatusCode.raw)) {
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
                event.FinishActivity();
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
                if (state === 0 && statusCode === 1) {
                    return ProcessDesigner.TelemetryConstants.processStateDraft;
                }
                else if (state === 1 && statusCode === 2) {
                    return ProcessDesigner.TelemetryConstants.processStateActive;
                }
                else {
                    return "";
                }
            };
            TelemetryEventReporter.ReportTileDetailsViewedTelemetryEvent = function (tileId, tileType, parentTileId) {
                var event = new ProcessDesigner.ProcessDesignerTileDetailsViewedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportTileAddedTelemetryEvent = function (addMethod, tileId, tileType, parentTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileAddedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, addMethod, tileId, tileType, parentTileId);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportTileRemovedTelemetryEvent = function (tileId, tileType, parentTileId) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileRemovedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportTileReorderedTelemetryEvent = function (tileId, tileType, parentTileId, reorderMethod) {
                ProcessDesigner.isStructuralChangePerformed = true;
                var event = new ProcessDesigner.ProcessDesignerTileReorderedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, tileId, tileType, parentTileId, reorderMethod);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportProcessDesignerCloseEvent = function () {
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
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, sessionType);
                event.FinishActivityImmediately();
            };
            TelemetryEventReporter.ReportProcessDesignerActivateEvent = function () {
                var event = new ProcessDesigner.ProcessDesignerActivatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, "", "", TelemetryEventReporter.getProcessType(ProcessDesigner.ProcessType.BusinessRule));
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportProcessDesignerDeactivateEvent = function () {
                var event = new ProcessDesigner.ProcessDesigneDeactivatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportProcessDesignerSaveEvent = function () {
                var event = new ProcessDesigner.ProcessDesignerSavedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState);
                event.FinishActivity();
            };
            TelemetryEventReporter.ReportProcessDesignerValidateEvent = function (validatedAt, errorDetails, errorCount) {
                var event = new ProcessDesigner.ProcessDesignerValidatedEvent();
                event.SetInfo(ProcessDesigner.processId, ProcessDesigner.sessionId, ProcessDesigner.processState, validatedAt, errorDetails, errorCount, TelemetryEventReporter.getProcessType(ProcessDesigner.ProcessType.BusinessRule));
                event.FinishActivity();
            };
            TelemetryEventReporter.GetAddModeNameForActivity = function (addMode) {
                var addModeName = "";
                switch (addMode) {
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddCondition:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddAcceptcondition:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowrecommentdation:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddDisplayMode:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddShowerror:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetfield:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetdefaultfield:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetbusinessrequired:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddSetvisibility:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.AddCustomJavascript:
                        addModeName = "Add";
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCondition:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteAcceptCondition:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowRecommendations:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteDisplayMode:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteShowError:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetField:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetDefaultField:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetBusinessRequired:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteSetVisibility:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.PasteCustomJavascript:
                        if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                            addModeName = "Cut-Paste";
                            break;
                        }
                        addModeName = "Copy-Paste";
                        break;
                    case ProcessDesigner.PBLAddActivityTypeCommandID.DropSetfield:
                    case ProcessDesigner.PBLAddActivityTypeCommandID.None:
                    default:
                        addModeName = "Drag-Drop";
                        break;
                }
                return addModeName;
            };
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
//  <copyright file="ScopeProperties.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Contains all the PBL Scope related enums
//  </summary>
var MscrmControls;
(function (MscrmControls) {
    var ProcessDesigner;
    (function (ProcessDesigner) {
        var PBL;
        (function (PBL) {
            var Enums;
            (function (Enums) {
                'use strict';
                (function (Scope) {
                    Scope[Scope["Forms"] = 1] = "Forms";
                    Scope[Scope["Entity"] = 2] = "Entity";
                })(Enums.Scope || (Enums.Scope = {}));
                var Scope = Enums.Scope;
            })(Enums = PBL.Enums || (PBL.Enums = {}));
        })(PBL = ProcessDesigner.PBL || (ProcessDesigner.PBL = {}));
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
        var UrlUtilites = (function () {
            function UrlUtilites() {
            }
            UrlUtilites.getUrlParameter = function (name) {
                var Path = window.location.search != null ? decodeURIComponent(window.location.search.substring(1)) : null;
                if (Path == null) {
                    return null;
                }
                var UrlVariables = Path.split('&');
                for (var i = 0; i < UrlVariables.length; i++) {
                    var Entry = UrlVariables[i].split('=');
                    var key = Entry.length == 2 ? Entry[0] : null;
                    if (key == name) {
                        return Entry[1];
                    }
                }
                return null;
            };
            return UrlUtilites;
        })();
        ProcessDesigner.UrlUtilites = UrlUtilites;
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
                this.AddEventParameter(ProcessDesignerValidatedParameters.ProcessType, ProcessType);
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
            ProcessDesignerValidatedParameters.ProcessType = "ProcessType";
            ProcessDesignerValidatedParameters.state = "State";
            ProcessDesignerValidatedParameters.validatedAt = "ValidatedAt";
            ProcessDesignerValidatedParameters.errorDetails = "ErrorDetails";
            ProcessDesignerValidatedParameters.errorCount = "ErrorCount";
            ProcessDesignerValidatedParameters.timestamp = "Timestamp";
            return ProcessDesignerValidatedParameters;
        })();
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
        var PblWorkflowTree = (function (_super) {
            __extends(PblWorkflowTree, _super);
            function PblWorkflowTree() {
                _super.apply(this, arguments);
            }
            PblWorkflowTree.prototype.insertActivityComponentAfter = function (parentActivity, insertActivityComponent) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var deferred = $.Deferred();
                var promiseList = [];
                var insertActivity = insertActivityComponent.getRoot();
                insertActivity.setParentActivityID(parentActivity.getActivityID());
                insertActivity.setParentBranchID(1);
                var promise = insertActivity.save().done(function () {
                    $.each(childActivities, function (index, activity) {
                        if (activity.getParentBranchID() <= 1) {
                            activity.setParentActivityID(insertActivity.getActivityID());
                            if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                                promise = activity.save();
                                promiseList.push(promise);
                            }
                        }
                    });
                    self.add(insertActivity);
                    $.when.apply(self, promiseList).done(function () {
                        deferred.resolveWith(insertActivity, [insertActivity]);
                    });
                });
                promiseList.push(promise);
                return deferred.promise();
            };
            PblWorkflowTree.prototype.insertChildActivityComponentAtIndex = function (parentActivity, childActivityComponent, parentBranchID) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var childActivity = childActivityComponent.getRoot();
                var oldParent = childActivity.getParent();
                var deferred = $.Deferred();
                var promiseList = [];
                childActivity.setParentActivityID(parentActivity.getActivityID());
                childActivity.setParentBranchID(parentBranchID);
                childActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                    var savedChildActivity = activity;
                    if (oldParent != null) {
                        promiseList.push(oldParent.createSubsequentActivity());
                    }
                    $.each(childActivities, function (index, activity) {
                        var branchID = activity.getParentBranchID();
                        if (branchID == parentBranchID) {
                            if (activity.getActivityTypeID() != ProcessDesigner.PblActivityType.condition)
                                activity.setParentBranchID(branchID - 1);
                            activity.setParentActivityID(childActivity.getActivityID());
                            var promise = activity.save();
                            promiseList.push(promise);
                        }
                    });
                    $.when.apply(self, promiseList).done(function () {
                        deferred.resolveWith(savedChildActivity, [savedChildActivity]);
                    });
                });
                return deferred.promise();
            };
            PblWorkflowTree.prototype.cutConnectedComponent = function (component) {
                var self = this;
                var deferred = $.Deferred();
                var promiseList = [];
                var activityToCut = component.getRoot();
                var branchIndex = activityToCut.getParentBranchID();
                var oldParent = activityToCut.getParent();
                if (oldParent == null) {
                    deferred.resolve();
                    return deferred.promise();
                }
                var oldParentActivityID = oldParent.getActivityID();
                var oldParentChildren = oldParent.getChildActivitiesSorted();
                var activityToCutBranchId = activityToCut.getParentBranchID();
                $.each(component.getOrphanChildren(), function (index, child) {
                    if (child.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                        self.remove(child);
                    }
                });
                var activitiesToMove = self.getActivitiesToMoveOnCut(component);
                var numberOfActivitiesToBeInserted = activitiesToMove.length;
                $.each(oldParentChildren, function (index, activity) {
                    var branchID = activity.getParentBranchID();
                    if (oldParent.getActivityTypeID() == ProcessDesigner.PblActivityType.condition && (ProcessDesigner.PblActivityType.isActionActivityType(activityToCut.getActivityTypeID()) || activityToCut.getActivityTypeID() == ProcessDesigner.PblActivityType.setSuggestionStep) && numberOfActivitiesToBeInserted == 0) {
                    }
                    else if (branchID > activityToCutBranchId) {
                        activity.setParentBranchID(branchID + numberOfActivitiesToBeInserted - 1);
                        var promise = activity.save();
                        promiseList.push(promise);
                    }
                });
                $.each(activitiesToMove, function (index, child) {
                    child.setParentActivityID(oldParentActivityID);
                    child.setParentBranchID(branchIndex);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityParentCutting, child, activityToCut, oldParent);
                    promiseList.push(child.save());
                    branchIndex++;
                });
                activityToCut.setParentActivityID(null);
                $.when.apply(self, promiseList).done(function () {
                    deferred.resolve();
                });
                return deferred.promise();
            };
            PblWorkflowTree.prototype.getMaxDrift = function (activity) {
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
            PblWorkflowTree.prototype.getMaxDepth = function (activity) {
                if (activity) {
                    var childActivities = activity.getChildActivitiesSorted();
                    var length = childActivities.length;
                    switch (length) {
                        case 0:
                            return 0;
                        case 1:
                            if (childActivities[length - 1].getParentBranchID() == 2)
                                return this.getMaxDepth(childActivities[0]) + 1;
                            else
                                return this.getMaxDepth(childActivities[0]);
                        case 2:
                            if (childActivities[length - 1].attributes.ParentBranchID == 2)
                                return this.getMaxDepth(childActivities[0]) + this.getMaxDepth(childActivities[1]) + 1;
                            else
                                return Math.max(this.getMaxDepth(childActivities[0]), this.getMaxDepth(childActivities[1])) + 1;
                        case 3:
                            return Math.max(this.getMaxDepth(childActivities[0]), (this.getMaxDepth(childActivities[1])) + this.getMaxDepth(childActivities[2]))
                                + 1;
                    }
                }
            };
            return PblWorkflowTree;
        })(GenericWorkflowDesigner.WorkflowTree);
        ProcessDesigner.PblWorkflowTree = PblWorkflowTree;
    })(ProcessDesigner = MscrmControls.ProcessDesigner || (MscrmControls.ProcessDesigner = {}));
})(MscrmControls || (MscrmControls = {}));
