// -----------------------------------------------------------------------
// <copyright file="WorkflowSyncerConfig.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var appModel = (function () {
        function appModel() {
        }
        return appModel;
    })();
    GenericWorkflowDesigner.appModel = appModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonTypes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="jquery/jquery.d.ts" />
var CommonTypes;
(function (CommonTypes) {
    'use strict';
    var Types = (function () {
        function Types() {
        }
        Object.defineProperty(Types, "String", {
            get: function () {
                return {
                    Empty: "",
                    isNullOrEmpty: function (s) {
                        return s == null || s.length == 0;
                    },
                    htmlDecodeText: function (text) { return $('<div/>').html(text).text(); },
                    Format: function (format) {
                        var args = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            args[_i - 1] = arguments[_i];
                        }
                        var returnValue = format;
                        for (var i = 1; i < arguments.length; i++) {
                            var actualValue = typeof (arguments[i]) == "undefined" || arguments[i] == null ? "" : arguments[i].toString();
                            returnValue = returnValue.replace("{" + (i - 1) + "}", actualValue);
                        }
                        return returnValue;
                    },
                    Trim: function (value, trimChars) {
                        var TraverseType = {
                            Ascending: 0,
                            Descending: 1
                        };
                        function FindPositionToTrim(value, trimChars, traverseType) {
                            var startPosition, endPosition;
                            var trimCharDictionary = {};
                            var sign;
                            for (var i = 0; i < trimChars.length; i++) {
                                trimCharDictionary[trimChars[i]] = 1;
                            }
                            if (traverseType == TraverseType.Ascending) {
                                startPosition = 0;
                                sign = 1;
                            }
                            else {
                                startPosition = value.length - 1;
                                sign = -1;
                            }
                            function WithinBounds(index) {
                                return index >= 0 && index < value.length;
                            }
                            var index = startPosition;
                            var char = value[index];
                            while (typeof (trimCharDictionary[char]) != 'undefined' && WithinBounds(index)) {
                                index += sign;
                                char = value[index];
                            }
                            return index;
                        }
                        ;
                        var startPosition = FindPositionToTrim(value, trimChars, TraverseType.Ascending);
                        var endPosition = FindPositionToTrim(value, trimChars, TraverseType.Descending);
                        return value.slice(startPosition, endPosition + 1);
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Types, "Object", {
            get: function () {
                return {
                    isNullOrUndefined: function (object) {
                        return typeof (object) == "undefined" || object == null;
                    },
                    clone: function (object) {
                        if (this.isNullOrUndefined(object)) {
                            return null;
                        }
                        var cloneObject = {};
                        for (var key in object) {
                            if (object.hasOwnProperty(key)) {
                                cloneObject[key] = object[key];
                            }
                        }
                        return cloneObject;
                    },
                    merge: function (originalObject, mergeObject) {
                        if (this.isNullOrUndefined(originalObject) || this.isNullOrUndefined(mergeObject)) {
                            return originalObject;
                        }
                        var originalObjectClone = this.clone(originalObject);
                        for (var key in mergeObject) {
                            if (mergeObject.hasOwnProperty(key)) {
                                originalObjectClone[key] = mergeObject[key];
                            }
                        }
                        return originalObjectClone;
                    },
                    TranslateToLowerCasePropertyObject: function (object) {
                        if (this.isNullOrUndefined(object)) {
                            return null;
                        }
                        var cloneObject = {};
                        for (var key in object) {
                            if (object.hasOwnProperty(key) && !CommonTypes.Types.Object.isNullOrUndefined(object[key])) {
                                var updatedKey = key.charAt(0).toLowerCase() + key.substring(1, key.length);
                                if (typeof object[key] === 'object') {
                                    cloneObject[updatedKey] = CommonTypes.Types.Object.TranslateToLowerCasePropertyObject(object[key]);
                                }
                                else {
                                    cloneObject[updatedKey] = object[key];
                                }
                            }
                        }
                        return cloneObject;
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        return Types;
    })();
    CommonTypes.Types = Types;
})(CommonTypes || (CommonTypes = {}));
// -----------------------------------------------------------------------
// <copyright file="ArrayQuery.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="CommonTypes.ts"/>
var ArrayQuery = (function () {
    function ArrayQuery(data) {
        'use strict';
        this.data = data;
    }
    ArrayQuery.prototype.select = function (selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            var value = selector(this.data[i], i);
            temp.push(value);
        }
        return new ArrayQuery(temp);
    };
    ArrayQuery.prototype.transform = function (selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            var item = selector(this.data[i], i);
            temp[item.key] = item.value;
        }
        return new ArrayQuery(temp);
    };
    ArrayQuery.prototype.each = function (delegate) {
        'use strict';
        for (var i = 0; i < this.data.length; i++) {
            delegate(this.data[i], i);
        }
        return this;
    };
    ArrayQuery.prototype.where = function (selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            if (selector(this.data[i])) {
                temp.push(this.data[i]);
            }
        }
        return new ArrayQuery(temp);
    };
    ArrayQuery.prototype.firstOrDefault = function (selector) {
        'use strict';
        var list = this.where(selector).items();
        if (list.length > 0) {
            return list[0];
        }
        return null;
    };
    ArrayQuery.prototype.items = function () {
        'use strict';
        return this.data;
    };
    return ArrayQuery;
})();
// -----------------------------------------------------------------------
// <copyright file="KeyValueCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Collection;
(function (Collection) {
    var KeyValueCollection = (function () {
        function KeyValueCollection(key, value) {
            this.key = key;
            this.value = value;
        }
        return KeyValueCollection;
    })();
    Collection.KeyValueCollection = KeyValueCollection;
})(Collection || (Collection = {}));
// -----------------------------------------------------------------------
// <copyright file="Random.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Random;
(function (Random) {
    var Guid = (function () {
        function Guid() {
        }
        Guid.NewGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        Guid.NewGuidWithoutHyphens = function () {
            return Guid.NewGuid().replace(/-/g, '');
        };
        Guid.RandomId = function () {
            return 'id_' + Guid.NewGuidWithoutHyphens();
        };
        return Guid;
    })();
    Random.Guid = Guid;
})(Random || (Random = {}));
// -----------------------------------------------------------------------
// <copyright file="JSEvent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JSEventListener = (function () {
    function JSEventListener() {
    }
    return JSEventListener;
})();
var JSEvent = (function () {
    function JSEvent() {
        this.listeners = [];
    }
    JSEvent.prototype.Add = function (listener, context) {
        if (!(typeof listener === 'function')) {
            return;
        }
        var jsEventListener = new JSEventListener();
        jsEventListener.listener = listener;
        jsEventListener.context = context;
        this.listeners.push(jsEventListener);
    };
    JSEvent.prototype.Remove = function (listener) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i].listener === listener) {
                this.listeners.splice(i, 1);
            }
        }
    };
    JSEvent.prototype.RemoveAllListeners = function () {
        this.listeners = [];
    };
    JSEvent.prototype.Trigger = function (eventArgs) {
        var listenersCopy = this.listeners.slice(0);
        for (var i = 0; i < listenersCopy.length; i++) {
            var currentListener = listenersCopy[i];
            currentListener.listener.apply(currentListener.context, [eventArgs]);
        }
    };
    return JSEvent;
})();
var EmptyEventArgs = (function () {
    function EmptyEventArgs() {
    }
    return EmptyEventArgs;
})();
var EmptyEventArgsEvent = (function (_super) {
    __extends(EmptyEventArgsEvent, _super);
    function EmptyEventArgsEvent() {
        _super.apply(this, arguments);
    }
    EmptyEventArgsEvent.prototype.Trigger = function () {
        _super.prototype.Trigger.call(this, new EmptyEventArgs());
    };
    return EmptyEventArgsEvent;
})(JSEvent);
// -----------------------------------------------------------------------
// <copyright file="Dictionary.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Dictionary = (function () {
    function Dictionary() {
        this.elements = [];
    }
    Dictionary.prototype.get = function (key) {
        return this.elements[JSON.stringify(key)];
    };
    Dictionary.prototype.set = function (key, value) {
        this.elements[JSON.stringify(key)] = value;
    };
    return Dictionary;
})();
// -----------------------------------------------------------------------
// <copyright file="IAsynchoronousGridManager.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GridManagement;
(function (GridManagement) {
    'use strict';
})(GridManagement || (GridManagement = {}));
// -----------------------------------------------------------------------
// <copyright file="AsynchoronousGridManager.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="IAsynchoronousGridManager.ts" />
var GridManagement;
(function (GridManagement) {
    "use strict";
    var AsynchoronousGridManager = (function () {
        function AsynchoronousGridManager(id, spinnerId) {
            this.minSpinnerHeight = 150;
            this.id = id;
            this.spinnerId = spinnerId;
        }
        AsynchoronousGridManager.prototype.setSpinnerVisibility = function (shown) {
            var spinnerDiv = $('#' + this.spinnerId);
            if (!shown) {
                spinnerDiv.css('display', 'none');
                return;
            }
            var gridDiv = $('#' + this.id);
            if (gridDiv.length) {
                spinnerDiv.css('height', gridDiv.outerHeight(true));
                spinnerDiv.css('margin-top', -gridDiv.outerHeight(true));
                spinnerDiv.css('background-color', 'gray');
            }
            else {
                spinnerDiv.css('height', this.minSpinnerHeight);
                spinnerDiv.css('background-color', 'transparent');
            }
            spinnerDiv.css('display', 'block');
        };
        AsynchoronousGridManager.prototype.showGrid = function (slide) {
            this.setSpinnerVisibility(false);
            var gridDiv = $('#' + this.id);
            if (gridDiv.length) {
                if (slide) {
                    gridDiv.css('display', 'none');
                    gridDiv.slideDown();
                }
                else {
                    gridDiv.css("display", "block");
                }
            }
        };
        return AsynchoronousGridManager;
    })();
    GridManagement.AsynchoronousGridManager = AsynchoronousGridManager;
})(GridManagement || (GridManagement = {}));
// -----------------------------------------------------------------------
// <copyright file="AddressFormatterFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function (UserPreference) {
    'use strict';
    var AddressFormatterFactory = (function () {
        function AddressFormatterFactory(japanOid) {
            this.japanOid = japanOid;
        }
        AddressFormatterFactory.prototype.create = function (countryOid, countryText, currentCulture) {
            if (countryOid == this.japanOid) {
                return new UserPreference.JapaneseAddressFormatter();
            }
            if (typeof countryText === "string" && typeof currentCulture === "string") {
                if (currentCulture == UserPreference.CultureInfo.japaneseCulture && countryOid == CommonTypes.Types.String.Empty && countryText == CommonTypes.Types.String.Empty) {
                    return new UserPreference.JapaneseAddressFormatter();
                }
                return new UserPreference.DefaultAddressFormatter();
            }
            return new UserPreference.DefaultAddressFormatter();
        };
        return AddressFormatterFactory;
    })();
    UserPreference.AddressFormatterFactory = AddressFormatterFactory;
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="CultureInfo.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function (UserPreference) {
    'use strict';
    var CultureInfo = (function () {
        function CultureInfo() {
        }
        Object.defineProperty(CultureInfo, "japaneseCulture", {
            get: function () { return "ja-JP"; },
            enumerable: true,
            configurable: true
        });
        return CultureInfo;
    })();
    UserPreference.CultureInfo = CultureInfo;
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultAddressFormatter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function (UserPreference) {
    'use strict';
    var DefaultAddressFormatter = (function () {
        function DefaultAddressFormatter() {
        }
        DefaultAddressFormatter.prototype.rearrangeFields = function (address, city, stateProvince, postalCode) {
            $("#" + stateProvince).insertBefore($("#" + postalCode));
            $("#" + city).insertBefore($("#" + stateProvince));
            $("#" + address).insertBefore($("#" + city));
        };
        return DefaultAddressFormatter;
    })();
    UserPreference.DefaultAddressFormatter = DefaultAddressFormatter;
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="FormatAddress.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../CommonReferences.ts" />
var UserPreference;
(function (UserPreference) {
    'use strict';
    var FormatAddress = (function () {
        function FormatAddress(addressFormatterFactory) {
            this.addressFormatterFactory = addressFormatterFactory;
        }
        FormatAddress.prototype.registerRearrangeAddressScriptWhenCountryFieldIsBlurred = function (countryId, addressId, cityId, stateProvinceId, postalCodeId) {
            var _this = this;
            $("#" + countryId + "txtAutoComplete").blur(function () {
                var countryOid = $("#" + countryId + "HiddenField").val();
                var addressFormatter = _this.addressFormatterFactory.create(countryOid);
                addressFormatter.rearrangeFields(addressId, cityId, stateProvinceId, postalCodeId);
            });
        };
        FormatAddress.prototype.rearrangeAddressComponents = function (currentCulture, countryId, addressId, cityId, stateProvinceId, postalCodeId) {
            var countryTextValue = $("#" + countryId + "txtAutoComplete").val();
            var countryOid = $("#" + countryId + "HiddenField").val();
            var addressFormatter = this.addressFormatterFactory.create(countryOid, countryTextValue, currentCulture);
            addressFormatter.rearrangeFields(addressId, cityId, stateProvinceId, postalCodeId);
        };
        return FormatAddress;
    })();
    UserPreference.FormatAddress = FormatAddress;
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="IAddressFormatter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function (UserPreference) {
    'use strict';
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="JapaneseAddressFormatter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function (UserPreference) {
    'use strict';
    var JapaneseAddressFormatter = (function () {
        function JapaneseAddressFormatter() {
        }
        JapaneseAddressFormatter.prototype.rearrangeFields = function (address, city, stateProvince, postalCode) {
            $("#" + city).insertBefore($("#" + address));
            $("#" + stateProvince).insertBefore($("#" + city));
            $("#" + postalCode).insertBefore($("#" + stateProvince));
        };
        return JapaneseAddressFormatter;
    })();
    UserPreference.JapaneseAddressFormatter = JapaneseAddressFormatter;
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonReferences.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="microsoft-ajax/microsoft.ajax.d.ts" />
/// <reference path="telerik/telerik.d.ts" />
/// <reference path="jqueryui/jqueryui.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="Backbone/Backbone.d.ts" />
/// <reference path="underscore/underscore.d.ts" />
/// <reference path="commontypes.ts" />
/// <reference path="KeyValueCollection.ts" />
/// <reference path="arrayquery.ts" />
/// <reference path="random.ts" />
/// <reference path="jsevent.ts" />
/// <reference path="dictionary.ts" />
/// <reference path="gridmanagement/asynchoronousgridmanager.ts" />
/// <reference path="gridmanagement/iasynchoronousgridmanager.ts" />
/// <reference path="UserPreference/AddressFormatterFactory.ts" />
/// <reference path="UserPreference/CultureInfo.ts" />
/// <reference path="UserPreference/DefaultAddressFormatter.ts" />
/// <reference path="UserPreference/FormatAddress.ts"/>
/// <reference path="UserPreference/IAddressFormatter.ts" />
/// <reference path="UserPreference/JapaneseAddressFormatter.ts" />
// -----------------------------------------------------------------------
// <copyright file="Common.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// <copyright file="LogicalOperatorOptionsType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    (function (LogicalOperatorOptionsType) {
        LogicalOperatorOptionsType[LogicalOperatorOptionsType["And"] = 0] = "And";
        LogicalOperatorOptionsType[LogicalOperatorOptionsType["Or"] = 1] = "Or";
    })(ExpressionBuilder.LogicalOperatorOptionsType || (ExpressionBuilder.LogicalOperatorOptionsType = {}));
    var LogicalOperatorOptionsType = ExpressionBuilder.LogicalOperatorOptionsType;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ValueOptionsType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    (function (ValueOptionsType) {
        ValueOptionsType[ValueOptionsType["None"] = 0] = "None";
        ValueOptionsType[ValueOptionsType["Not"] = 1] = "Not";
    })(ExpressionBuilder.ValueOptionsType || (ExpressionBuilder.ValueOptionsType = {}));
    var ValueOptionsType = ExpressionBuilder.ValueOptionsType;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ClauseContext.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    var ClauseContext = (function () {
        function ClauseContext(options_) {
            this.labelPhrase = options_["labelPhrase"];
            this.logicalOperatorOptions = options_["logicalOperatorOptions"];
            this.fieldOptions = options_["fieldOptions"];
            this.valueOptions = options_["valueOptions"];
            this.fieldOptionsMetadata = options_["fieldOptionsMetadata"];
        }
        return ClauseContext;
    })();
    ExpressionBuilder.ClauseContext = ClauseContext;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ClauseRow.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    var CrmEncodeDecode = GenericWorkflowDesigner.CrmEncodeDecode;
    "use strict";
    var ClauseRow = (function () {
        function ClauseRow(options_) {
            this.clauseRowClass = "clause-Row";
            this.clauseRowDom = $("<div class='" + this.clauseRowClass + "'>");
            this.removeButtonWrapperClass = "removeButtonWrapper";
            this.removeButtonClass = "removeIcon";
            this.logicalOperatorClass = "logical";
            this.fieldClass = "field";
            this.valuesClass = "value";
            this.options = null;
            var defaultOptions = {
                rootElement: undefined,
                clauseRowContext: {},
                model: {},
                removeClauseRowHandler: function (clauseRow) { },
                clauseRowChangeHandler: function () { }
            };
            this.options = $.extend(defaultOptions, options_);
        }
        ClauseRow.prototype.render = function () {
            var self = this;
            var removeButton = self.generateRemoveControl();
            var logicalClauseRow = self.generateLogicalClauseRowDom(self.options.clauseRowContext.logicalOperatorOptions);
            var fieldClauseRow = self.generateFieldClauseRowDom(self.options.clauseRowContext.fieldOptions, self.options.clauseRowContext.fieldOptionsMetadata);
            var valueClauseRow = self.generateValueClauseRowDom(self.options.clauseRowContext.valueOptions);
            self.clauseRowDom.append(logicalClauseRow);
            self.clauseRowDom.append(valueClauseRow);
            self.clauseRowDom.append(fieldClauseRow);
            self.clauseRowDom.append(removeButton);
            $(self.options.rootElement).append(self.clauseRowDom);
        };
        ClauseRow.prototype.removeDom = function () {
            this.clauseRowDom.remove();
        };
        ClauseRow.prototype.generateRemoveControl = function () {
            var _this = this;
            var self = this;
            var removeButtonWrapper = $('<div class="' + self.removeButtonWrapperClass + '"></div>');
            var removeButton = $('<a href="javascript:void(0);" title="' + CrmEncodeDecode.CrmHtmlEncode(self.options.clauseRowContext.labelPhrase.deleteClauseButton) + '" class="' + self.removeButtonClass + '"><img src="../images/Close_16.png" class="imgHover" alt="Remove" /></a>');
            removeButtonWrapper.append(removeButton);
            removeButton.click(function () {
                _this.removeDom();
                _this.options.removeClauseRowHandler(_this.options.model);
            }).mouseover(function () {
                $(_this).find("img").attr('src', '../images/Close_16_Hover.png');
            }).mouseout(function () {
                $(_this).find("img").attr('src', '../images/Close_16.png');
            });
            return removeButtonWrapper[0];
        };
        ClauseRow.prototype.generateLogicalClauseRowDom = function (logicalOperatorOptions) {
            var self = this;
            var logicalWrapper = $('<div class="' + self.logicalOperatorClass + '">');
            var logicalDropDownList = $('<select>')[0];
            self.populateElementWithOptions(logicalDropDownList, logicalOperatorOptions);
            $(logicalDropDownList).find("option[value=" + CrmEncodeDecode.CrmHtmlEncode(self.options.model.logical) + "]").attr("selected", 'selected');
            $(logicalDropDownList).on('change', function () {
                self.options.model.logical = parseInt($(this).find('option:selected').val());
                self.options.clauseRowChangeHandler();
            });
            logicalWrapper.append(logicalDropDownList);
            return logicalWrapper[0];
        };
        ClauseRow.prototype.generateFieldClauseRowDom = function (fieldOptions, fieldOptionsMetadata) {
            var self = this;
            var fieldWrapper = $('<div class="' + self.fieldClass + '">');
            var fieldDropDownList = $('<select>')[0];
            self.populateElementWithOptionGroups(fieldDropDownList, fieldOptions, fieldOptionsMetadata);
            $(fieldDropDownList).find("option[value='" + CrmEncodeDecode.CrmHtmlEncode(self.options.model.field) + "']").attr("selected", 'selected');
            self.options.model.field = $(fieldDropDownList).find('option:selected').val();
            $(fieldDropDownList).on('change', function () {
                self.options.model.field = $(this).find('option:selected').val();
                self.options.clauseRowChangeHandler();
            });
            fieldWrapper.append(fieldDropDownList);
            return fieldWrapper[0];
        };
        ClauseRow.prototype.generateValueClauseRowDom = function (valueOptions) {
            var self = this;
            var valueWrapper = $('<div class="' + self.valuesClass + '">');
            var valueDropDownList = $('<select>')[0];
            self.populateElementWithOptions(valueDropDownList, valueOptions);
            $(valueDropDownList).find("option[value=" + CrmEncodeDecode.CrmHtmlEncode(self.options.model.value) + "]").attr("selected", 'selected');
            $(valueDropDownList).on('change', function () {
                self.options.model.value = parseInt($(this).find('option:selected').val());
                self.options.clauseRowChangeHandler();
            });
            valueWrapper.append(valueDropDownList);
            return valueWrapper[0];
        };
        ClauseRow.prototype.populateElementWithOptions = function (element, optionsList) {
            var _this = this;
            jQuery.each(optionsList, function (optionKey, optionValue) { return $(element).append(_this.buildSelectOptionElement(optionKey, CommonTypes.Types.String.htmlDecodeText(optionValue))); });
        };
        ClauseRow.prototype.populateElementWithOptionGroups = function (element, optionsList, fieldOptionsMetadata, hasOptionGroups) {
            var _this = this;
            if (hasOptionGroups === void 0) { hasOptionGroups = false; }
            var groups = {};
            jQuery.each(optionsList, function (optionKey, optionValue) { return _this.groupListOptions(optionKey, optionValue, groups); });
            jQuery.each(groups, function (groupKey) {
                if (groupKey.split(',')[1] !== "0") {
                    var entityName = fieldOptionsMetadata.getEntityName(groupKey);
                    if (!entityName) {
                        return;
                    }
                    var optGroup = _this.buildSelectOptGroupElement(entityName);
                    jQuery.each(groups[groupKey], function (index, selectOption) { return $(optGroup).append(_this.buildSelectOptionElement(selectOption.key, selectOption.value)); });
                    $(element).append(optGroup);
                }
                else {
                    jQuery.each(groups[groupKey], function (index, selectOption) { return $(element).append(_this.buildSelectOptionElement(selectOption.key, selectOption.value)); });
                }
            });
        };
        ClauseRow.prototype.buildSelectOptionElement = function (optionKey, optionValue) {
            var option = $('<option>');
            option.text(optionValue);
            option.attr("value", optionKey);
            return option[0];
        };
        ClauseRow.prototype.buildSelectOptGroupElement = function (groupLabel) {
            var optGroup = $('<optgroup>');
            optGroup.attr("label", groupLabel);
            return optGroup[0];
        };
        ClauseRow.prototype.groupListOptions = function (optionKey, optionValue, groups) {
            var separatorIndex = optionKey.indexOf(',');
            if (separatorIndex != -1) {
                var groupKey = optionKey.substr(separatorIndex + 1);
                if (!groups[groupKey]) {
                    groups[groupKey] = new Array();
                }
                groups[groupKey].push({ key: optionKey, value: optionValue });
            }
        };
        return ClauseRow;
    })();
    ExpressionBuilder.ClauseRow = ClauseRow;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ClauseDesigner.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    var ClauseDesigner = (function () {
        function ClauseDesigner(rootElement_, queryContainerDiv_, clausesList_, clauseContext_) {
            this.clauseRowListRootElement = $('<div>');
            this.clauseRowListWrapper = "clause-RowListWrapper";
            this.addNewClauseButtonId = "addNewClause";
            this.options = null;
            this.options = {
                rootElement: rootElement_,
                clausesList: clausesList_,
                queryContainer: queryContainerDiv_,
                clauseContext: clauseContext_
            };
            $(this.options.rootElement).append(this.clauseRowListRootElement.addClass(this.clauseRowListWrapper));
        }
        ClauseDesigner.prototype.render = function () {
            var _this = this;
            var self = this;
            var clauseRow;
            jQuery.each(self.options.clausesList, function (index, clause) {
                clauseRow = new ExpressionBuilder.ClauseRow(self.clauseRowInitialization(clause));
                clauseRow.render();
            });
            self.updateQuery();
            var addNewClauseRowButton = self.generateAddNewClauseButton();
            $(self.options.rootElement)
                .append(addNewClauseRowButton);
            $(addNewClauseRowButton)
                .click(function () { return self.addNewClauseRowHandler(); })
                .mouseover(function () { return $(_this).find("img").attr('src', '../images/New_Hover_16.png'); })
                .mouseout(function () { return $(_this).find("img").attr('src', '../images/New_16.png'); });
        };
        ClauseDesigner.prototype.getClauses = function () {
            var self = this;
            return self.options.clausesList;
        };
        ClauseDesigner.prototype.getFieldOptionsMetadata = function () {
            var self = this;
            return self.options.clauseContext.fieldOptionsMetadata;
        };
        ClauseDesigner.prototype.addNewClauseRowHandler = function () {
            var self = this;
            if (Object.keys(self.options.clauseContext.fieldOptions).length > 0) {
                var newClauseJson = { logical: ExpressionBuilder.LogicalOperatorOptionsType.And, value: ExpressionBuilder.ValueOptionsType.None, field: FieldOptionsType.None };
                self.options.clausesList.push(newClauseJson);
                var newClauseRow = new ExpressionBuilder.ClauseRow(self.clauseRowInitialization(newClauseJson));
                newClauseRow.render();
                self.updateQuery();
            }
        };
        ClauseDesigner.prototype.clauseRowInitialization = function (clauseModel) {
            var self = this;
            return {
                rootElement: self.clauseRowListRootElement[0],
                clauseRowContext: self.options.clauseContext,
                model: clauseModel,
                removeClauseRowHandler: function (clauseRow) { return self.removeClauseRowModel(clauseRow); },
                clauseRowChangeHandler: function () { return self.updateQuery(); }
            };
        };
        ClauseDesigner.prototype.generateAddNewClauseButton = function () {
            var self = this;
            return $('<a href="javascript:void(0);" title="' + self.options.clauseContext.labelPhrase.addNewClauseButton + '" id="' + self.addNewClauseButtonId + '"><img src="../images/New_16.png" class="imgHover" alt="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_Add") + '" /> ' + self.options.clauseContext.labelPhrase.addNewClauseButton + '</a>')[0];
        };
        ClauseDesigner.prototype.removeClauseRowModel = function (clauseRowModel) {
            var self = this;
            var index = $.inArray(clauseRowModel, self.options.clausesList);
            self.options.clausesList.splice(index, 1);
            self.updateQuery();
        };
        ClauseDesigner.prototype.updateQuery = function () {
            var self = this;
            $(self.options.queryContainer).html($('<span>').html(ExpressionBuilder.QueryBuilder.formatQueryText(self.options.clausesList, self.options.clauseContext)));
        };
        return ClauseDesigner;
    })();
    ExpressionBuilder.ClauseDesigner = ClauseDesigner;
    var FieldOptionsType;
    (function (FieldOptionsType) {
        FieldOptionsType[FieldOptionsType["None"] = 0] = "None";
    })(FieldOptionsType || (FieldOptionsType = {}));
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ContraintType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    (function (ConstraintType) {
        ConstraintType[ConstraintType["Clause"] = 0] = "Clause";
    })(ExpressionBuilder.ConstraintType || (ExpressionBuilder.ConstraintType = {}));
    var ConstraintType = ExpressionBuilder.ConstraintType;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="QueryBuilder.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../ExpressionBuilderCommonReferences.ts" />
var ExpressionBuilder;
(function (ExpressionBuilder) {
    "use strict";
    var QueryBuilder = (function () {
        function QueryBuilder() {
        }
        QueryBuilder.formatQueryText = function (clausesList, clauseContext) {
            var queryString = "";
            jQuery.each(clausesList, function (index, clause) {
                var logicalText = QueryBuilder.clauseLogicalOperatorOption(clauseContext.logicalOperatorOptions, clause.logical, index);
                queryString += logicalText + QueryBuilder.separator + clauseContext.valueOptions[clause.value] + QueryBuilder.clauseFieldName(clauseContext.fieldOptions, clauseContext.fieldOptionsMetadata, clause.field) + QueryBuilder.separator;
            });
            var queryStringArray = queryString.trim().split(QueryBuilder.separator);
            var formattedQueryString = "";
            for (var i = 0; i < queryStringArray.length; i++) {
                if (queryStringArray[i].toLowerCase() == clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.And].toLowerCase()) {
                    var prev = queryStringArray[i - 1];
                    queryStringArray[i - 1] = "";
                    var next = queryStringArray[i + 1];
                    queryStringArray[i + 1] = "(" + prev + " " + queryStringArray[i] + " " + next + ")";
                    queryStringArray[i] = "";
                    i++;
                }
            }
            for (var j = 0; j < queryStringArray.length; j++) {
                if (queryStringArray[j] != "") {
                    formattedQueryString += queryStringArray[j] + " ";
                }
            }
            var andRegex = new RegExp(clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.And], 'g');
            var orRegex = new RegExp(clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.Or], 'g');
            var notRegex = new RegExp(clauseContext.valueOptions[ExpressionBuilder.ValueOptionsType.Not], 'g');
            formattedQueryString = formattedQueryString.replace(andRegex, "<b>" + clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.And] + "</b>");
            formattedQueryString = formattedQueryString.replace(orRegex, "<b>" + clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.Or] + "</b>");
            formattedQueryString = formattedQueryString.replace(notRegex, "<b>" + clauseContext.valueOptions[ExpressionBuilder.ValueOptionsType.Not] + " </b>");
            return formattedQueryString;
        };
        QueryBuilder.clauseFieldName = function (fieldOptions, fieldOptionsMetadata, fieldKey) {
            var itemIdKey = this.getItemIdKeyFromFieldKey(fieldKey);
            if (itemIdKey) {
                var entityName = fieldOptionsMetadata.getEntityName(itemIdKey);
                if (entityName)
                    return fieldOptions[fieldKey] + ' - ' + entityName;
            }
            return fieldOptions[fieldKey];
        };
        QueryBuilder.getItemIdKeyFromFieldKey = function (fieldKey) {
            var separatorIndex = fieldKey.indexOf(',');
            if (separatorIndex != -1) {
                return fieldKey.substr(separatorIndex + 1);
            }
            return "";
        };
        QueryBuilder.clauseLogicalOperatorOption = function (logicalOperatorOptions, logicalClause, index) {
            var logicalText = logicalOperatorOptions[logicalClause];
            if (index == 0) {
                logicalText = "";
            }
            return logicalText;
        };
        QueryBuilder.separator = ";";
        return QueryBuilder;
    })();
    ExpressionBuilder.QueryBuilder = QueryBuilder;
})(ExpressionBuilder || (ExpressionBuilder = {}));
// -----------------------------------------------------------------------
// <copyright file="ExpressionBuilderCommonReferences.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="CommonTypes.ts" />
/// <reference path="ExpressionBuilder/Common.ts" />
/// <reference path="ExpressionBuilder/LogicalOperatorOptionsType.ts" />
/// <reference path="ExpressionBuilder/ValueOptionsType.ts" />
/// <reference path="ExpressionBuilder/ClauseContext.ts" />
/// <reference path="ExpressionBuilder/ClauseRow.ts" />
/// <reference path="ExpressionBuilder/ClauseDesigner.ts" />
/// <reference path="ExpressionBuilder/ConstraintType.ts" />
/// <reference path="ExpressionBuilder/QueryBuilder.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    function getTimestampMilliseconds() {
        return (new Date()).getTime();
    }
    var StaticStopwatch;
    var Stopwatch = (function () {
        function Stopwatch() {
            this.reset();
        }
        Stopwatch.getTimestampMilliseconds = function () {
            return getTimestampMilliseconds();
        };
        Object.defineProperty(Stopwatch.prototype, "isRunning", {
            get: function () {
                return this._isRunning;
            },
            enumerable: true,
            configurable: true
        });
        Stopwatch.prototype.start = function () {
            var watch = this;
            if (!watch._isRunning) {
                watch._startTimeStamp = getTimestampMilliseconds();
                watch._isRunning = true;
            }
        };
        Stopwatch.prototype.stop = function () {
            var watch = this;
            if (watch._isRunning) {
                watch._elapsed += watch.currentLapMilliseconds;
                watch._isRunning = false;
            }
        };
        Stopwatch.prototype.reset = function () {
            var watch = this;
            watch._elapsed = 0;
            watch._isRunning = false;
            watch._startTimeStamp = NaN;
        };
        Object.defineProperty(Stopwatch.prototype, "currentLapMilliseconds", {
            get: function () {
                return this._isRunning
                    ? (getTimestampMilliseconds() - this._startTimeStamp)
                    : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stopwatch.prototype, "currentLap", {
            get: function () {
                return this._isRunning
                    ? this.currentLapMilliseconds
                    : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stopwatch.prototype, "elapsedMilliseconds", {
            get: function () {
                var watch = this;
                var timeElapsed = watch._elapsed;
                if (watch._isRunning)
                    timeElapsed += watch.currentLapMilliseconds;
                return timeElapsed;
            },
            enumerable: true,
            configurable: true
        });
        return Stopwatch;
    })();
    GenericWorkflowDesigner.Stopwatch = Stopwatch;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LoadSpinnerItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var LoadSpinnerItem = (function (_super) {
        __extends(LoadSpinnerItem, _super);
        function LoadSpinnerItem(container, size) {
            _super.call(this, { el: container });
            this.size = size;
        }
        LoadSpinnerItem.prototype.render = function () {
            this.$el.html("...");
            if (!CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.Settings.spinnerItem)) {
                var spinnerImage = '<img id="spinnerImage" class = "search-icon-span" src=" ' + GenericWorkflowDesigner.Settings.spinnerItem + '"/>';
                this.$el.html(spinnerImage);
                this.$el.find("#spinnerImage").attr('height', this.size);
                this.$el.find("#spinnerImage").attr('width', this.size);
            }
            return this;
        };
        return LoadSpinnerItem;
    })(Backbone.View);
    GenericWorkflowDesigner.LoadSpinnerItem = LoadSpinnerItem;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="GenericWorkflowControl.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var GenericWorkflowControl = (function () {
        function GenericWorkflowControl() {
            this.appModel = null;
            this.initDefaults();
        }
        GenericWorkflowControl.prototype.initDefaults = function () {
            var canvasOffset = 0;
            GenericWorkflowDesigner.Settings.activityDropHandlerFactory = new GenericWorkflowDesigner.ActivityDropHandlerFactory();
            GenericWorkflowDesigner.Settings.graphics = new GenericWorkflowDesigner.Graphics();
            GenericWorkflowDesigner.Settings.workflowTree = new GenericWorkflowDesigner.WorkflowTree();
            GenericWorkflowDesigner.Settings.workflowTree.setActivityCollection(new GenericWorkflowDesigner.ActivityDefinitionCollection());
            GenericWorkflowDesigner.Settings.layoutProperties = new GenericWorkflowDesigner.LayoutProperties(canvasOffset);
            GenericWorkflowDesigner.Settings.activityDefinitionSyncer = new GenericWorkflowDesigner.ActivityDefinitionSyncer();
            GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory = new GenericWorkflowDesigner.DefaultActivityPositionCalculatorFactory();
            GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer = new GenericWorkflowDesigner.GenericWorkflowEntityDefinitionSyncer();
            GenericWorkflowDesigner.Settings.tileItemsMenu = new GenericWorkflowDesigner.FlyoutControlFactory("tileItemsMenu");
            GenericWorkflowDesigner.Settings.slotContextMenu = new GenericWorkflowDesigner.FlyoutControlFactory("contextmenu");
            GenericWorkflowDesigner.Settings.workflowTree = new GenericWorkflowDesigner.WorkflowTree();
            GenericWorkflowDesigner.Settings.flyoutLists = new GenericWorkflowDesigner.FlyoutControlCollection();
        };
        GenericWorkflowControl.prototype.Initialize = function (model) {
            this.appModel = model;
            var propertyTabIndex = 1;
            GenericWorkflowDesigner.applicationRootUrl = model.applicationRoot;
            GenericWorkflowDesigner.workflowProviderType = model.workflowProviderType;
            var libraryTilesDataFileName = model.libraryTilesDataFileName;
            GenericWorkflowDesigner.workflowOID = model.workflowID;
            GenericWorkflowDesigner.workflowAssociatedEntityOID = model.workflowAssociatedEntityOID;
            GenericWorkflowDesigner.validateId = model.validateId;
            GenericWorkflowDesigner.lblLibraryId = model.lblLibraryId;
            GenericWorkflowDesigner.loadingImageId = model.loadingImageId;
            GenericWorkflowDesigner.toolpaneId = model.toolpaneId;
            GenericWorkflowDesigner.zoomIconHolderId = model.zoomIconHolderId;
            var loader = $(model.loaderId);
            var toolpane = $(model.toolpaneId);
            var canvasContainer = $(model.canvasId);
            GenericWorkflowDesigner.DragTouchHelper.mapTouchEvents(canvasContainer);
            var canvasOffset = canvasContainer.offset();
            GenericWorkflowDesigner.Settings.workflowId = GenericWorkflowDesigner.workflowOID;
            GenericWorkflowDesigner.Settings.slotHandlerProvider = new GenericWorkflowDesigner.SlotHandlerProvider();
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.hideMenus, this.hideMenus, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus, this.hideContextMenus, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderDoubleClick, function () {
                toolpane.tabs({ active: propertyTabIndex });
            }, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab, function () {
                toolpane.tabs({ active: propertyTabIndex });
                if ($("#propertyTab").parent().length > 0) {
                    $("#propertyTab").parent().attr("tabindex", "-1");
                }
            }, this);
            $("#libraryTab").on("focus keydown", function () {
                if ($("#libraryTab").parent().attr('aria-selected') == "true") {
                    $("#propertyTab").children().attr("aria-selected", false);
                    $("#libraryTab").children().attr("aria-selected", true);
                }
                else {
                    $("#libraryTab").children().attr("aria-selected", false);
                }
                $("#libraryTab").children().attr("role", "tab");
            });
            $("#propertyTab").on("focus keydown", function () {
                if ($("#propertyTab").parent().attr('aria-selected') == "true") {
                    $("#libraryTab").children().attr("aria-selected", false);
                    $("#propertyTab").children().attr("aria-selected", true);
                }
                else {
                    $("#propertyTab").children().attr("aria-selected", false);
                }
                $("#propertyTab").children().attr("role", "tab");
            });
            var result = GenericWorkflowDesigner.DataAccessEvents.getActivityDefinitions(null);
            GenericWorkflowDesigner.Settings.workflowTree.setActivityCollection(result);
            GenericWorkflowDesigner.Settings.setNextActivityID(result.length);
            var canvas = new GenericWorkflowDesigner.CanvasView($(this.appModel.canvasId));
            var workspaceModeController = new GenericWorkflowDesigner.WorkspaceModeController(canvas);
            GenericWorkflowDesigner.Settings.configReader = new GenericWorkflowDesigner.ConfigReader(this.getUrl() + libraryTilesDataFileName);
            GenericWorkflowDesigner.Settings.configReader.initializeLibrary(this.appModel.librabryId, canvasContainer);
            var loaderView = new GenericWorkflowDesigner.LoaderView(loader);
            var propertyView = new GenericWorkflowDesigner.PropertyView({ el: $(model.propertyId) });
            this.render(canvas);
            setTimeout(function () {
                GenericWorkflowDesigner.EventManager.publish(GenericWorkflowDesigner.FrameworkEvents.initializeWidget);
            }, 1);
        };
        GenericWorkflowControl.prototype.getUrl = function () {
            var port = window.location.port;
            var host = window.location.hostname;
            var orgUrl = window.location.protocol + '//' + host;
            if (port) {
                orgUrl += ":" + port;
            }
            return orgUrl;
        };
        GenericWorkflowControl.prototype.render = function (canvas) {
            var deferred = $.Deferred();
            GenericWorkflowDesigner.Settings.workflowTree.onSuccessFetch().done(function () {
                GenericWorkflowDesigner.Settings.workflowTree.UpdatePositions();
                deferred.resolve();
            });
            GenericWorkflowControl.LibraryObject.render();
            canvas.render();
        };
        GenericWorkflowControl.prototype.hideMenus = function () {
            GenericWorkflowDesigner.Settings.flyoutLists.hideTileItemFlyoutControl();
        };
        GenericWorkflowControl.prototype.hideContextMenus = function () {
            GenericWorkflowDesigner.Settings.flyoutLists.hideContextMenuFlyoutControl();
        };
        GenericWorkflowControl.prototype.subscribe = function (type, fn, context) {
            fn = typeof fn === 'function' ? fn : context[fn];
            if (typeof this.subscribers[type] !== "undefined") {
                this.subscribers[type].push({ fn: fn, context: context || this });
            }
        };
        GenericWorkflowControl.prototype.unsubscribe = function (type, fn, context) {
            this.visitSubscribers('unsubscribe', type, fn, context);
        };
        GenericWorkflowControl.prototype.fire = function (type, publication) {
            this.visitSubscribers('publish', type, publication, null);
        };
        GenericWorkflowControl.prototype.visitSubscribers = function (action, type, arg, context) {
            var pubtype = type || 'any', subscribers = this.subscribers[pubtype], i, max = subscribers ? subscribers.length : 0;
            for (i = 0; i < max; i += 1) {
                if (action === 'publish') {
                    subscribers[i].fn.call(subscribers[i].context, arg);
                }
                else {
                    if (subscribers[i].fn === arg && subscribers[i].context === context) {
                        subscribers.splice(i, 1);
                    }
                }
            }
        };
        return GenericWorkflowControl;
    })();
    GenericWorkflowDesigner.GenericWorkflowControl = GenericWorkflowControl;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="TriggerClauseOptionsDetailsHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var TriggerClauseOptionsDetailsHandler = (function () {
        function TriggerClauseOptionsDetailsHandler(optionsDetails) {
            this.optionsMetadata = optionsDetails;
        }
        TriggerClauseOptionsDetailsHandler.prototype.getEntityName = function (entityKey) {
            var optionMetadata = this.optionsMetadata[entityKey];
            if (optionMetadata && optionMetadata.EntityName) {
                return optionMetadata.EntityName;
            }
            return null;
        };
        TriggerClauseOptionsDetailsHandler.prototype.getEntityDetails = function (entityKey) {
            return this.optionsMetadata[entityKey];
        };
        return TriggerClauseOptionsDetailsHandler;
    })();
    GenericWorkflowDesigner.TriggerClauseOptionsDetailsHandler = TriggerClauseOptionsDetailsHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AbstractActivityDropHandler = (function () {
        function AbstractActivityDropHandler(currentActivity) {
            this.currentActivity = null;
            this.activityValidationRuleSet = new GenericWorkflowDesigner.DefaultActivityValidationRuleSet();
            this.currentActivity = currentActivity;
        }
        AbstractActivityDropHandler.prototype.drop = function (droppedActivityComponent) {
        };
        AbstractActivityDropHandler.prototype.dropAllowed = function (activityComponent) {
            if ($.inArray(this.currentActivity, activityComponent.getNodes()) > -1 ||
                activityComponent.getRoot().getParent() == this.currentActivity) {
                return false;
            }
            return this.activityValidationRuleSet.isValid(activityComponent, this.currentActivity);
        };
        return AbstractActivityDropHandler;
    })();
    GenericWorkflowDesigner.AbstractActivityDropHandler = AbstractActivityDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractFlyoutContentProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AbstractFlyoutContentProvider = (function () {
        function AbstractFlyoutContentProvider() {
            this.flyoutContentType = {
                ContextFlyout: "contextFlyout",
            };
        }
        AbstractFlyoutContentProvider.prototype.createContent = function (flyoutContentType, activity) {
            throw new Error("method not implemented");
        };
        return AbstractFlyoutContentProvider;
    })();
    GenericWorkflowDesigner.AbstractFlyoutContentProvider = AbstractFlyoutContentProvider;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FlyoutControl = (function (_super) {
        __extends(FlyoutControl, _super);
        function FlyoutControl(context, flyoutStyle) {
            _super.call(this);
            this.isShown = false;
            this.contentToShow = null;
            this.eventArgs = null;
            this.flyoutContainer = null;
            this.ShowTime = 250;
            this.HideTime = 250;
            this.context = context;
            if (!flyoutStyle) {
                throw "Style is needed.";
            }
            this.flyoutStyle = flyoutStyle;
            this.setupEvents();
        }
        FlyoutControl.prototype.setupEvents = function () {
        };
        FlyoutControl.prototype.getContext = function () {
            return this.context;
        };
        FlyoutControl.prototype.updateTileItemContent = function () {
            if (this.flyoutStyle == FlyoutControl.FlyoutControlStyle.TileItemsMenu) {
                var content = GenericWorkflowDesigner.Settings.flyoutContentProvider.createContent(this.context.getContentType(), this.context.getActivity());
                this.SetContent(content);
                GenericWorkflowDesigner.Settings.flyoutLists.TileItemsMenuList.push(this);
                this.Show();
            }
        };
        FlyoutControl.prototype.ignoreClick = function () {
            return false;
        };
        FlyoutControl.prototype.SetRootElement = function (rootElement) {
            this.rootElement = rootElement;
        };
        FlyoutControl.prototype.SetContent = function (content) {
            this.contentToShow = $(content);
        };
        FlyoutControl.prototype.SetEvent = function (event) {
            this.eventArgs = event;
        };
        FlyoutControl.prototype.IsShown = function () {
            return this.isShown;
        };
        FlyoutControl.prototype.Show = function () {
            var deferred = $.Deferred();
            if (this.isShown) {
                this.flyoutContainer.remove();
            }
            this.buildFlyoutContainer();
            if (this.isShown) {
                this.contentToShow.hide();
                this.flyoutContainer.show();
                this.contentToShow.fadeIn(this.ShowTime).promise()
                    .done(function () {
                    deferred.resolve();
                });
            }
            else {
                var self = this;
                this.flyoutContainer.slideDown(this.ShowTime).promise()
                    .done(function () {
                    self.bindFlyoutHideOnDocumentAndFrameClick();
                    deferred.resolve();
                });
            }
            this.isShown = true;
            return deferred.promise();
        };
        FlyoutControl.prototype.buildFlyoutContainer = function () {
            this.flyoutContainer = $("<div></div>");
            this.flyoutContainer.addClass(this.flyoutStyle);
            if (this.eventArgs !== null) {
                var rootElementOffset = this.rootElement.offset();
                this.flyoutContainer.css({
                    'left': this.eventArgs['pageX'] - rootElementOffset.left,
                    'top': this.eventArgs['pageY'] - rootElementOffset.top
                });
            }
            this.flyoutContainer.hide();
            this.flyoutContainer.append(this.contentToShow);
            this.rootElement.append(this.flyoutContainer);
            this.flyoutContainer.unbind("click", this.ignoreClick);
            this.flyoutContainer.bind("click", this.ignoreClick);
        };
        FlyoutControl.prototype.hideFlyout = function () {
            if (!this.isShown) {
                return;
            }
            this.Hide();
            $(document).unbind("click", this.hideFlyout);
            jQuery.each($("iframe"), function (i, element) {
                var iframeDoc = $(element).contents().get(0);
                $(iframeDoc).unbind("click", this.hideFlyout);
            });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentClick = function () {
            var self = this;
            $(document).bind("click", function (e) {
                if (e.button !== 2) {
                    self.hideFlyout();
                }
            });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentContextMenu = function () {
            var self = this;
            $(document).bind("contextmenu", function () {
                self.hideFlyout();
            });
        };
        FlyoutControl.prototype.bindFlyoutHideOnFrameClick = function () {
            var self = this;
            jQuery.each($("iframe"), function (i, element) {
                self.hideFlyoutOnFrameReadyOrLoaded(element);
            });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentAndFrameClick = function () {
            this.bindFlyoutHideOnDocumentClick();
            this.bindFlyoutHideOnDocumentContextMenu();
            this.bindFlyoutHideOnFrameClick();
        };
        FlyoutControl.prototype.bindHideToiFrameElement = function (iFrameElement) {
            var self = this;
            var iframeDoc = $(iFrameElement).contents().get(0);
            $(iframeDoc).bind("click", function () {
                self.hideFlyout();
            });
        };
        FlyoutControl.prototype.hideFlyoutOnFrameReadyOrLoaded = function (iFrameElement) {
            var self = this;
            $(iFrameElement).ready(function () {
                self.bindHideToiFrameElement(iFrameElement);
            });
            $(iFrameElement).load(function () {
                self.bindHideToiFrameElement(iFrameElement);
            });
        };
        FlyoutControl.prototype.Hide = function () {
            var deferred = $.Deferred();
            if (!this.isShown) {
                deferred.resolve();
                return deferred.promise();
            }
            this.isShown = false;
            this.flyoutContainer.unbind("click", this.ignoreClick);
            var self = this;
            this.flyoutContainer.fadeOut(this.HideTime).promise().done(function () {
                self.flyoutContainer.remove();
                deferred.resolve();
            });
            return deferred.promise();
        };
        FlyoutControl.FlyoutControlStyle = {
            ContextMenu: "contextmenu",
            TileItemsMenu: "tileItemsMenu"
        };
        return FlyoutControl;
    })(Backbone.View);
    GenericWorkflowDesigner.FlyoutControl = FlyoutControl;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Common.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ActivityDefinitionSyncer = (function () {
        function ActivityDefinitionSyncer() {
        }
        ActivityDefinitionSyncer.prototype.GetActivityDefinitions = function (collection, options) {
            var defer = $.Deferred();
            var activityCollection = { "d": [{ "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition", "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a", "ActivityID": "CustomActivityStep15", "ParentActivityID": null, "ParentBranchID": "0", "ActivityTypeID": 2, "Properties": { "Items": [{ "ItemID": null, "ActivityTypeID": "2", "Title": "Undefined", "EmailSent": "0", "EmailOpened": "0", "EmailBounced": "0", "StatusMessageId": "200", "State": "4" }], "UI": { "Row": "0", "Col": "0", "readonlyMode": "False" }, "ActiveItemIndex": 0 }, "Description": null, "WorkflowProviderType": 2 }, { "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition", "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a", "ActivityID": "CustomActivityStep17", "ParentActivityID": "CustomActivityStep15", "ParentBranchID": "0", "ActivityTypeID": 5, "Properties": { "Items": [{ "ItemID": "c7e93de4-fe34-e511-80cf-00155ded1a2a", "ActivityTypeID": "6", "Title": "sample task flow", "NumberOfPeople": "0", "StatusMessageId": "", "State": "0" }], "UI": { "Row": "0", "Col": "1", "readonlyMode": "False" }, "ActiveItemIndex": 0 }, "Description": null, "WorkflowProviderType": 2 }, { "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition", "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a", "ActivityID": "CustomActivityStep25", "ParentActivityID": "CustomActivityStep17", "ParentBranchID": "0", "ActivityTypeID": 2, "Properties": { "Items": [{ "ItemID": null, "ActivityTypeID": "2", "Title": "Undefined", "EmailSent": "0", "EmailOpened": "0", "EmailBounced": "0", "StatusMessageId": "200", "State": "4" }], "UI": { "Row": "0", "Col": "2", "readonlyMode": "False" }, "ActiveItemIndex": 0 }, "Description": null, "WorkflowProviderType": 2 }, { "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition", "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a", "ActivityID": "CustomActivityStep22", "ParentActivityID": "CustomActivityStep17", "ParentBranchID": "0", "ActivityTypeID": 2, "Properties": { "Items": [{ "ItemID": null, "ActivityTypeID": "2", "Title": "Undefined", "EmailSent": "0", "EmailOpened": "0", "EmailBounced": "0", "StatusMessageId": "200", "State": "4" }], "UI": { "Row": "0", "Col": "3", "readonlyMode": "False" }, "ActiveItemIndex": 0 }, "Description": null, "WorkflowProviderType": 2 }] };
            collection.reset(activityCollection.d);
            defer.resolve(activityCollection.d);
            return defer.promise();
        };
        ActivityDefinitionSyncer.prototype.GetActivityDefinition = function (model, options) {
            throw "Invalid operation";
        };
        ActivityDefinitionSyncer.prototype.CreateActivityDefinition = function (model, options) {
            var defer = $.Deferred();
            model.attributes.ActivityID = model.attributes.ParentActivityID + "_" + GenericWorkflowDesigner.Settings.getNextActivityID();
            model.id = model.attributes.ActivityID;
            var activity = model;
            defer.resolve(activity);
            return defer.promise();
        };
        ActivityDefinitionSyncer.prototype.UpdateActivityDefinition = function (model, options) {
            model.set("WorkflowProviderType", GenericWorkflowDesigner.workflowProviderType);
            var defer = $.Deferred();
            var activity = model;
            defer.resolve(activity);
            return defer.promise();
        };
        ActivityDefinitionSyncer.prototype.DeleteActivityDefinition = function (model, options) {
            model.set("WorkflowProviderType", GenericWorkflowDesigner.workflowProviderType);
            model.set("ActivityID", model.getActivityID());
            model.set("WorkflowID", GenericWorkflowDesigner.workflowOID);
            var defer = $.Deferred();
            var response = GenericWorkflowDesigner.DataAccessEvents.deleteActivityDefinition(model);
            defer.resolve(response);
            return defer.promise();
        };
        ActivityDefinitionSyncer.prototype.GetDynamicEnums = function (model, options) {
            var defer = $.Deferred();
            var response = GenericWorkflowDesigner.DataAccessEvents.getDynamicEnums(options.data);
            defer.resolve(response);
            return defer.promise();
        };
        return ActivityDefinitionSyncer;
    })();
    GenericWorkflowDesigner.ActivityDefinitionSyncer = ActivityDefinitionSyncer;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDropController.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ActivityDropController = (function () {
        function ActivityDropController(slot) {
            this.slot = slot;
        }
        ActivityDropController.prototype.getMultiDropHandler = function () {
            switch (this.slot.getType()) {
                case GenericWorkflowDesigner.SlotType.TileHolder:
                    return new GenericWorkflowDesigner.TileHolderMultiDropHandler(this.slot);
                case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                    return new GenericWorkflowDesigner.InsertSlotHorizontalMultiDropHandler(this.slot);
                case GenericWorkflowDesigner.SlotType.InsertVertical:
                    return new GenericWorkflowDesigner.InsertSlotVerticalMultiDropHandler(this.slot);
                default:
                    return new GenericWorkflowDesigner.DefaultActivityMultiDropHandler(this.slot);
            }
        };
        ActivityDropController.prototype.getstartConnector = function (childActivity) {
            if (childActivity.isLeaf()) {
                return childActivity;
            }
            else {
                var childs = childActivity.getChildActivitiesSorted();
                switch (childs.length) {
                    case 1:
                        return this.getstartConnector(childs[0]);
                    case 2:
                        alert("Oops!! You can't re-connect");
                        return null;
                    case 3:
                        return this.getstartConnector(childs[0]);
                }
            }
        };
        ActivityDropController.prototype.getEligible = function () {
            return ActivityDropController.eligible;
        };
        ActivityDropController.prototype.getStart = function () {
            return ActivityDropController.startConnector;
        };
        ActivityDropController.prototype.findEligibleEndConnectors = function (dropActivity) {
            var eligibleConnectors = [];
            var childs = dropActivity.getChildActivitiesSorted();
            var isEligible = function (activity) {
                if (activity == null)
                    return;
                var doNotPush = false;
                if (activity.getActivityTypeID() == "condition")
                    doNotPush = true;
                var parentActivity = activity.getParent();
                if (parentActivity.getActivityTypeID() == "condition" && parentActivity.getActivityID() == dropActivity.getActivityID())
                    doNotPush = true;
                if (!doNotPush) {
                    eligibleConnectors.push(activity);
                }
                var childs = activity.getChildActivitiesSorted();
                switch (childs.length) {
                    case 1:
                        var branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                isEligible(childs[0]);
                                break;
                        }
                        break;
                    case 2:
                        var branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                isEligible(childs[0]);
                                break;
                            case 1:
                                break;
                        }
                        return;
                    case 3:
                        isEligible(childs[0]);
                        break;
                }
                ;
            };
            childs.forEach(function (childActivity) {
                if (childActivity.getParentBranchID() == 0 || childActivity.getParentBranchID() == 1)
                    isEligible(childActivity);
            });
            return eligibleConnectors;
        };
        ActivityDropController.prototype.disconnectOldDefault = function () {
            if (ActivityDropController.oldDefaultGlobal) {
                var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var topOfDefault = calc.computeTop(ActivityDropController.oldDefaultGlobal.getRow());
                var leftOfDefault = calc.computeLeft(ActivityDropController.oldDefaultGlobal.getCol());
                var connectHitIdOfDefault = '#connect-hitOfDefault';
                $(connectHitIdOfDefault).remove();
                var hitOfDefault = '<div id="' + ActivityDropController.oldDefaultGlobal.getActivityID() + '" style=" position: absolute; height: 70px; width: 230px; background-color: red; opacity:0.5; left:' + leftOfDefault + 'px; top:' + topOfDefault + 'px; "></div>';
                $("#canvas").append(hitOfDefault);
                $("#canvas").on('click', '#' + ActivityDropController.oldDefaultGlobal.getActivityID(), function (event) {
                    alert("You sure wanna dis-connect");
                    var conditionActivity = ActivityDropController.dropActivityGlobal;
                    var childs = conditionActivity.getChildActivitiesSorted();
                    var ifChild = childs[1];
                    var lastNodeIfChild = ifChild;
                    var found = false;
                    var length = childs.length;
                    var activity = ActivityDropController.oldDefaultGlobal;
                    switch (length) {
                        case 1:
                            break;
                        case 2:
                            var branchID = childs[0].getParentBranchID();
                            switch (branchID) {
                                case 0:
                                    var childBranchID = childs[1].getParentBranchID();
                                    switch (childBranchID) {
                                        case 1:
                                            ActivityDropController.inside = false;
                                            ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                                            break;
                                        case 2:
                                            ifChild = childs[0];
                                            break;
                                    }
                                    ;
                                    break;
                                case 1:
                                    ifChild = activity.getParent();
                                    if (ifChild.getActivityTypeID() != "condition")
                                        ifChild.setNextActivityID(activity.getActivityID());
                                    else
                                        ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                    break;
                            }
                            ;
                            break;
                        case 3:
                            ActivityDropController.inside = false;
                            ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                            break;
                    }
                    ;
                    ActivityDropController.oldDefaultGlobal.setParentActivityID(ifChild.getActivityID());
                    ActivityDropController.oldDefaultGlobal.setParentBranchID(0);
                    ActivityDropController.startConnector.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                    ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                    if (ActivityDropController.startConnector.processStep)
                        ActivityDropController.startConnector.processStep.nextStageId = null;
                    ActivityDropController.oldDefaultGlobal.save();
                    ifChild.save();
                    ActivityDropController.startConnector.save();
                    $("#canvas").off('click');
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                });
            }
        };
        ActivityDropController.prototype.drawTargetView = function (activity) {
            var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var top = calc.computeTop(activity.getRow());
            var left = calc.computeLeft(activity.getCol());
            var connectHitId = '#connect-hit';
            $(connectHitId).remove();
            var hit = '<div id="' + activity.getActivityID() + '" style=" position: absolute; height: 70px; width: 230px; background-color: cyan; opacity:0.5; left:' + left + 'px; top:' + top + 'px; "></div>';
            $("#canvas").append(hit);
            $("#canvas").on('click', '#' + activity.getActivityID(), function (event) {
                var temp = activity, branchID;
                var conditionActivity = ActivityDropController.dropActivityGlobal;
                var childs = conditionActivity.getChildActivitiesSorted();
                var oldDefault = childs[0];
                var ifChild = childs[1];
                var lastNodeIfChild = ifChild;
                var lastNodeDefaultChild = oldDefault;
                var length = childs.length;
                var tempOldDefault = oldDefault;
                switch (length) {
                    case 1:
                        branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                tempOldDefault = childs[0];
                                tempOldDefault.setParentBranchID(1);
                                lastNodeDefaultChild = ActivityDropController.prototype.findLastNodeDefaultChild(tempOldDefault, activity);
                                if (lastNodeDefaultChild.getActivityTypeID() == "condition")
                                    lastNodeDefaultChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                else
                                    lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                break;
                            case 1:
                                lastNodeDefaultChild = ActivityDropController.prototype.findLastNodeDefaultChild(childs[0], activity);
                                if (lastNodeDefaultChild.getActivityTypeID() == "condition")
                                    lastNodeDefaultChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                else
                                    lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                break;
                            case 2:
                                break;
                        }
                        break;
                    case 2:
                        branchID = childs[0].getParentBranchID();
                        switch (branchID) {
                            case 0:
                                var childBranchID = childs[1].getParentBranchID();
                                switch (childBranchID) {
                                    case 1:
                                        ActivityDropController.inside = false;
                                        ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                                        if (!ActivityDropController.inside) {
                                            lastNodeDefaultChild = ActivityDropController.prototype.findLastNodeDefaultChild(oldDefault, activity);
                                        }
                                        oldDefault.setParentActivityID(ifChild.getActivityID());
                                        oldDefault.setParentBranchID(0);
                                        ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                        if (ActivityDropController.inside) {
                                            var parentOfActivity = activity.getParent();
                                            if (parentOfActivity.getActivityTypeID() != "condition")
                                                parentOfActivity.setNextActivityID(activity.getActivityID());
                                            else {
                                                ActivityDropController.prototype.fillNextStage(parentOfActivity);
                                            }
                                        }
                                        else {
                                            if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                                lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                            else {
                                                ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                                            }
                                        }
                                        break;
                                    case 2:
                                        lastNodeDefaultChild = ActivityDropController.prototype.findLastNodeDefaultChild(oldDefault, activity);
                                        oldDefault.setParentActivityID(conditionActivity.getActivityID());
                                        oldDefault.setParentBranchID(1);
                                        if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                            lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                        else {
                                            ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                                        }
                                        break;
                                }
                                ;
                                break;
                            case 1:
                                ifChild = activity.getParent();
                                if (ifChild.getActivityTypeID() != "condition")
                                    ifChild.setNextActivityID(activity.getActivityID());
                                else
                                    ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                break;
                        }
                        ;
                        break;
                    case 3:
                        ActivityDropController.inside = false;
                        ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                        if (!ActivityDropController.inside) {
                            lastNodeDefaultChild = ActivityDropController.prototype.findLastNodeDefaultChild(oldDefault, activity);
                        }
                        oldDefault.setParentActivityID(ifChild.getActivityID());
                        oldDefault.setParentBranchID(0);
                        ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        if (ActivityDropController.inside) {
                            var parentOfActivity = activity.getParent();
                            if (parentOfActivity.getActivityTypeID() != "condition")
                                parentOfActivity.setNextActivityID(activity.getActivityID());
                            else {
                                ActivityDropController.prototype.fillNextStage(parentOfActivity);
                            }
                        }
                        else {
                            if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                            else {
                                ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                            }
                        }
                        break;
                }
                ;
                activity.setParentActivityID(conditionActivity.getActivityID());
                activity.setParentBranchID(0);
                ActivityDropController.startConnector.setNextActivityID(activity.getActivityID());
                $("#canvas").off('click');
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            });
        };
        ActivityDropController.prototype.fillNextStage = function (activity) {
            if (activity) {
                var childOfParents = activity.getChildActivitiesSorted();
                for (var i = 0; i < 3; ++i) {
                    if (childOfParents[i] && childOfParents[i].getParentBranchID() == 0) {
                        activity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                    }
                }
            }
        };
        ActivityDropController.prototype.findIfChild = function (ifChild, activity) {
            if (ifChild) {
                var found = false, branchID;
                var lastNodeIfChild = ifChild;
                while (ifChild && !found) {
                    if (ifChild.getActivityID() == activity.getActivityID()) {
                        ActivityDropController.inside = true;
                    }
                    lastNodeIfChild = ifChild;
                    if (ifChild.getActivityTypeID() == "condition") {
                        var tempChilds = ifChild.getChildActivitiesSorted();
                        var tempLength = tempChilds.length;
                        switch (tempLength) {
                            case 1:
                                branchID = tempChilds[0].getParentBranchID();
                                switch (branchID) {
                                    case 0:
                                        ifChild = ifChild.getChildActivitiesSorted()[0];
                                        break;
                                    case 1:
                                        found = true;
                                        lastNodeIfChild = ifChild;
                                        break;
                                    case 2:
                                        break;
                                }
                                ;
                                break;
                            case 2:
                                branchID = tempChilds[0].getParentBranchID();
                                switch (branchID) {
                                    case 0:
                                        ifChild = ifChild.getChildActivitiesSorted()[0];
                                        break;
                                    case 1:
                                        found = true;
                                        lastNodeIfChild = ifChild;
                                        break;
                                    case 2:
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
        ActivityDropController.prototype.findLastNodeDefaultChild = function (oldDefault, activity) {
            if (oldDefault) {
                var found = false, branchID;
                var tempOldDefault = oldDefault;
                var lastNodeDefaultChild = oldDefault;
                while (tempOldDefault && tempOldDefault.getActivityID() != activity.getActivityID() && !found) {
                    lastNodeDefaultChild = tempOldDefault;
                    if (tempOldDefault.getActivityTypeID() == "condition") {
                        var tempChilds = tempOldDefault.getChildActivitiesSorted();
                        var tempLength = tempChilds.length;
                        switch (tempLength) {
                            case 1:
                                branchID = tempChilds[0].getParentBranchID();
                                switch (branchID) {
                                    case 0:
                                        tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                        break;
                                    case 1:
                                        break;
                                    case 2:
                                        break;
                                }
                                ;
                                break;
                            case 2:
                                branchID = tempChilds[0].getParentBranchID();
                                switch (branchID) {
                                    case 0:
                                        tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                        break;
                                    case 1:
                                        break;
                                    case 2:
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
        ActivityDropController.prototype.findParentCondition = function (currentActivity) {
            var parentActivity = currentActivity.getParent();
            if (parentActivity == null)
                return null;
            if (currentActivity.getParentBranchID() == 2) {
                return parentActivity;
            }
            else {
                if (parentActivity != null) {
                    if (parentActivity.getActivityTypeID() == "condition") {
                        var childs = parentActivity.getChildActivitiesSorted();
                        switch (childs.length) {
                            case 1:
                                return this.findParentCondition(parentActivity);
                            case 2:
                                return this.findParentCondition(parentActivity);
                            case 3:
                                return this.findParentCondition(parentActivity);
                        }
                    }
                    else {
                        return this.findParentCondition(parentActivity);
                    }
                }
            }
        };
        ActivityDropController.prototype.dropLibraryElement = function (libraryElement) {
            var dropHandler, eligibleConnectors = [];
            if (libraryElement.get("ActivityTypeID") == "connect") {
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(libraryElement.get("ActivityTypeID"));
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                var dropActivity = dropHandler.currentActivity;
                var childs = dropActivity.getChildActivitiesSorted();
                ActivityDropController.eligible = null;
                if (dropActivity.getActivityTypeID() == "stage") {
                    ActivityDropController.startConnector = dropActivity;
                    var condition = this.findParentCondition(dropActivity);
                    ActivityDropController.dropActivityGlobal = condition;
                    var conditionChilds = condition.getChildActivitiesSorted();
                    if (conditionChilds[0].getParentBranchID() == 0)
                        ActivityDropController.oldDefaultGlobal = conditionChilds[0];
                    else
                        ActivityDropController.oldDefaultGlobal = null;
                    ActivityDropController.eligible = this.findEligibleEndConnectors(condition);
                    if (ActivityDropController.eligible.length > 0) {
                        ActivityDropController.eligible.forEach(function (activity) {
                            ActivityDropController.prototype.drawTargetView(activity);
                        });
                        this.disconnectOldDefault();
                    }
                    else {
                        ActivityDropController.prototype.disconnectOldDefault();
                    }
                }
                else {
                    if (dropActivity.getActivityTypeID() == "condition") {
                        ActivityDropController.startConnector = dropActivity;
                        ActivityDropController.dropActivityGlobal = dropActivity;
                        if (childs[0].getParentBranchID() == 0)
                            ActivityDropController.oldDefaultGlobal = childs[0];
                        else
                            ActivityDropController.oldDefaultGlobal = null;
                        ActivityDropController.eligible = this.findEligibleEndConnectors(dropActivity);
                        if (ActivityDropController.eligible.length > 0) {
                            ActivityDropController.eligible.forEach(function (activity) {
                                ActivityDropController.prototype.drawTargetView(activity);
                            });
                            this.disconnectOldDefault();
                        }
                        else {
                            ActivityDropController.prototype.disconnectOldDefault();
                        }
                    }
                }
                return dropHandler.drop(component);
            }
            else {
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(libraryElement.get("ActivityTypeID"));
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                return dropHandler.drop(component);
            }
        };
        ActivityDropController.prototype.dropMultipleComponents = function (components) {
            var multiDropHandler = this.getMultiDropHandler();
            return multiDropHandler.drop(components);
        };
        return ActivityDropController;
    })();
    GenericWorkflowDesigner.ActivityDropController = ActivityDropController;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="GenericWorkflowDesigner.d.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
// -----------------------------------------------------------------------
// <copyright file="Common.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var _PUTWORKFLOWTOKEN;
var _PUTWORKFLOWTIMESTAMP;
var _POSTWORKFLOWACTIONTOKEN;
var _POSTWORKFLOWACTIONTIMESTAMP;
var _PUTWORKFLOWACTIONTOKEN;
var _PUTWORKFLOWACTIONTIMESTAMP;
var _DELETEWORKFLOWACTIONTOKEN;
var _DELETEWORKFLOWACTIONTIMESTAMP;
var _VALIDATETOKEN;
var _VALIDATETIMESTAMP;
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    GenericWorkflowDesigner.workflowOID = null;
    GenericWorkflowDesigner.currentModel = null;
    GenericWorkflowDesigner.workflowStatus = null;
    GenericWorkflowDesigner.applicationRootUrl = null;
    GenericWorkflowDesigner.workflowAssociatedEntityOID = null;
    GenericWorkflowDesigner.zoomItemId = null;
    GenericWorkflowDesigner.validateId = null;
    GenericWorkflowDesigner.lblLibraryId = null;
    GenericWorkflowDesigner.loadingImageId = null;
    GenericWorkflowDesigner.toolpaneId = null;
    GenericWorkflowDesigner.zoomIconHolderId = null;
    GenericWorkflowDesigner.workflowProviderType = null;
    GenericWorkflowDesigner.zoomOut = false;
    GenericWorkflowDesigner.designerType = null;
    var ActivityType = (function () {
        function ActivityType() {
        }
        ActivityType.All = "all";
        ActivityType.Empty = "empty";
        ActivityType.Root = "root";
        return ActivityType;
    })();
    GenericWorkflowDesigner.ActivityType = ActivityType;
    ;
    var BPFActivityType = (function () {
        function BPFActivityType() {
        }
        BPFActivityType.Action = "action";
        BPFActivityType.Flow = "flow";
        return BPFActivityType;
    })();
    GenericWorkflowDesigner.BPFActivityType = BPFActivityType;
    var DesignerType = (function () {
        function DesignerType() {
        }
        DesignerType.BpfDesigner = "BpfDesigner";
        DesignerType.PblDesigner = "PblDesigner";
        DesignerType.TbxDesigner = "TbxDesigner";
        return DesignerType;
    })();
    GenericWorkflowDesigner.DesignerType = DesignerType;
    function getLeftAlignmentAttributeName() {
        return Settings.renderRTL == true ? "right" : "left";
    }
    GenericWorkflowDesigner.getLeftAlignmentAttributeName = getLeftAlignmentAttributeName;
    function StringFormat(format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    }
    GenericWorkflowDesigner.StringFormat = StringFormat;
    function alertLabelKeyValue(labelKey) {
        alert(Settings.labelKeyValuePlainTextPhraseCollection["[" + labelKey + "]"]);
    }
    GenericWorkflowDesigner.alertLabelKeyValue = alertLabelKeyValue;
    function decodeText(text) {
        return $('<div/>').html(text).text();
    }
    GenericWorkflowDesigner.decodeText = decodeText;
    GenericWorkflowDesigner.eventManager = {};
    _.extend(GenericWorkflowDesigner.eventManager, Backbone.Events);
    function updateCurrentModel(newModel) {
        GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateModel, newModel);
        GenericWorkflowDesigner.currentModel = newModel;
        if (newModel) {
            var selectedActivities = [];
            selectedActivities.push(newModel);
            Settings.workflowTree.setSelectedActivities(selectedActivities);
        }
        else {
            Settings.workflowTree.setSelectedActivities([]);
        }
        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.modelUpdated);
    }
    GenericWorkflowDesigner.updateCurrentModel = updateCurrentModel;
    function attachInputElementChange(containerId, callBack) {
        var selector = ":input:not(:button):not([type=hidden])";
        if (!CommonTypes.Types.Object.isNullOrUndefined(containerId)) {
            selector = "#" + containerId + " " + selector;
        }
        $(selector).off("change");
        $(selector).on("change", function (e, invokeCallBack) {
            if (invokeCallBack === void 0) { invokeCallBack = true; }
            if (invokeCallBack) {
                callBack();
            }
        });
    }
    GenericWorkflowDesigner.attachInputElementChange = attachInputElementChange;
    var Settings = (function () {
        function Settings() {
        }
        Settings.getNextActivityID = function () {
            return this.nextActivityID++;
        };
        ;
        Settings.setNextActivityID = function (activityID) {
            this.nextActivityID = activityID;
        };
        Settings.layoutProperties = null;
        Settings.activityDefinitionSyncer = null;
        Settings.configReader = null;
        Settings.workflowEntityDefinitionSyncer = null;
        Settings.labelKeyValuePhraseCollection = null;
        Settings.labelKeyValuePlainTextPhraseCollection = null;
        Settings.activityDefinitionFactory = null;
        Settings.libraryNodesFactory = null;
        Settings.slotHandlerProvider = null;
        Settings.tileItemsMenu = null;
        Settings.slotContextMenu = null;
        Settings.propertyViewFactory = null;
        Settings.subsequentActivityGenerator = null;
        Settings.slotGeneratorProvider = null;
        Settings.iconFactory = null;
        Settings.tileInformationFactory = null;
        Settings.helpPageLink = null;
        Settings.workflowId = null;
        Settings.workflowTree = null;
        Settings.flyoutContentProvider = null;
        Settings.flyoutLists = null;
        Settings.dynamicEnums = null;
        Settings.slotHandlerFactory = null;
        Settings.slotInsertHorizontalHandlerFactory = null;
        Settings.slotInsertVerticalHandlerFactory = null;
        Settings.statusMessageResolver = null;
        Settings.activityPositionCalculatorFactory = null;
        Settings.lineConnectorProviderFactory = null;
        Settings.canvasDragDropValidator = null;
        Settings.activityDropHandlerFactory = null;
        Settings.graphics = null;
        Settings.renderRTL = false;
        Settings.isArabic = false;
        Settings.renderMinimapFlag = true;
        Settings.rerenderMinimapThroughDragDropFlag = true;
        Settings.isNewStageAdded = false;
        Settings.isStageDeleted = false;
        Settings.tileCountInRow = 0;
        Settings.tileCountInColumn = 0;
        Settings.childCount = 0;
        Settings.spinnerItem = null;
        Settings.nextActivityID = 1;
        Settings.notification = null;
        Settings.tabIndexValue = 0;
        Settings.isFeatureEnabled = true;
        Settings.isBPFApprovalFlowsEnabled = false;
        Settings.isBPFApprovalFlowsAsRequiredStepEnabled = false;
        return Settings;
    })();
    GenericWorkflowDesigner.Settings = Settings;
    ;
    var ItemKeyProperties = (function () {
        function ItemKeyProperties() {
        }
        ItemKeyProperties.stateKey = "State";
        ItemKeyProperties.activityTypeIdKey = "ActivityTypeID";
        return ItemKeyProperties;
    })();
    GenericWorkflowDesigner.ItemKeyProperties = ItemKeyProperties;
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    GenericWorkflowDesigner.GetParameterValues = GetParameterValues;
    function canZoomIn() {
        return GenericWorkflowDesigner.ZoomConstants.currentZoomRatio < GenericWorkflowDesigner.ZoomConstants.maxZoomRatio;
    }
    GenericWorkflowDesigner.canZoomIn = canZoomIn;
    function canZoomOut() {
        return GenericWorkflowDesigner.ZoomConstants.currentZoomRatio > GenericWorkflowDesigner.ZoomConstants.minZoomRatio;
    }
    GenericWorkflowDesigner.canZoomOut = canZoomOut;
    var CssClass = (function () {
        function CssClass() {
        }
        CssClass.Helper = "helper";
        CssClass.SelectLine = "selectLine";
        CssClass.HoverOverDroppable = "hoverOverDroppable";
        CssClass.ModalPopup = "modalPopup";
        CssClass.Loader = "loader";
        CssClass.Spinner = "spinner";
        CssClass.Slot = "slot";
        CssClass.Selected = "selected";
        CssClass.DragInProgress = "dragInProgress";
        CssClass.MultipleItems = "multipleItems";
        CssClass.TileItemsMenu = "tileItemsMenu";
        CssClass.ContextMenu = "contextmenu";
        return CssClass;
    })();
    GenericWorkflowDesigner.CssClass = CssClass;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ConfigReader.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ConfigReader = (function () {
        function ConfigReader(configPath) {
            this.configPath = null;
            this.configPath = configPath;
        }
        ConfigReader.prototype.initializeLibrary = function (libraryId, canvasContainer) {
            GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject = new GenericWorkflowDesigner.Library({
                el: $(libraryId),
                canvasContainer: canvasContainer
            });
            this.setLibraryNodes();
        };
        ConfigReader.prototype.loadXML = function () {
            try {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", this.configPath, false);
                xhttp.setRequestHeader('Content-Type', 'text/xml');
                xhttp.send();
                return xhttp.response;
            }
            catch (err) {
                alert(err.message);
            }
        };
        ConfigReader.prototype.getAttributeValues = function (xml, xPath) {
            var xPathNodes, attributeValues = [{}];
            xPathNodes = $(xml).find(xPath);
            for (var i = 0; i < xPathNodes.length; i++) {
                attributeValues[i] = xPathNodes[i].getAttribute("name");
            }
            return attributeValues;
        };
        ConfigReader.prototype.setLibraryNodes = function () {
            var xml = this.loadXML();
            var groups = [{}];
            var groupPath = "LibraryGroup";
            groups = this.getAttributeValues(xml, groupPath);
            for (var j = 0; j < groups.length; j++) {
                var xPath = "LibraryGroup[name='" + groups[j] + "'] LibraryTile";
                var groupName = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString(groups[j].toString());
                this.registerTilesWithGroup(xml, xPath, groupName);
            }
        };
        ConfigReader.prototype.getTile = function (tileNode) {
            var tile = new GenericWorkflowDesigner.Tile(), tileAttributes;
            tileAttributes = tileNode.attributes;
            for (var i = 0; i < tileAttributes.length; i++) {
                var tileAttribute = tileAttributes[i];
                tile.setProperty(tileAttribute.nodeName, GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString(tileAttribute.nodeValue));
            }
            return tile;
        };
        ConfigReader.prototype.registerTilesWithGroup = function (xml, xPath, group) {
            var tileNodes = $(xml).find(xPath);
            for (var i = 0; i < tileNodes.length; i++) {
                var tileNode = tileNodes[i];
                var tile = this.getTile(tileNode);
                this.setMDDPropertyPageMetadata(xml, tile);
                GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.registerLibraryTile(group, tile);
                GenericWorkflowDesigner.BaseTileInformation.tileObjects[tile.properties["activitytypeid"]] = tile;
            }
        };
        ConfigReader.prototype.setMDDPropertyPageMetadata = function (xml, tile) {
            var propertyPage = new GenericWorkflowDesigner.MDDPropertyPage();
            if (tile.properties["propertypagetype"] == "html") {
                propertyPage.isMDDPropertyPage = false;
                var xPathForPropertyPageUrl = "PropertyPageGroup propertypage[propertypageid=" + tile.properties["propertypageid"] + "]";
                var propertyPageUrlNode = $(xml).find(xPathForPropertyPageUrl);
                tile.properties["propertypageurl"] = propertyPageUrlNode[0].getAttribute("url");
            }
            else {
                propertyPage.isMDDPropertyPage = true;
                var xPathForMDDPropertyPage = "LibraryTile[activitytypeid=" + tile.properties["activitytypeid"] + "] MDDProperties";
                var MDDPropertyPageNode = $(xml).find(xPathForMDDPropertyPage);
                propertyPage.title = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString(MDDPropertyPageNode[0].getAttribute("title"));
                var MDDProperties = MDDPropertyPageNode[0].children;
                var MDDPropertiesArray = {};
                var self = this;
                jQuery.each(MDDProperties, function (i, MDDProperty) {
                    var xPathForProperties = "MDDPropertyGroup Property[propertyid=" + MDDProperty.getAttribute("propertyid") + "]";
                    var MDDPropertiesForTile = $(xml).find(xPathForProperties);
                    MDDPropertiesArray[i] = self.getAttributesKeyValuePairArray(MDDPropertiesForTile[0]);
                });
                propertyPage.Metadata = JSON.parse(JSON.stringify(MDDPropertiesArray));
            }
            tile.addPropertyPage(propertyPage);
        };
        ConfigReader.prototype.getAttributesKeyValuePairArray = function (xmlNode) {
            var xmlNodeAttributes = xmlNode.attributes;
            var attributeValuesArray = {};
            jQuery.each(xmlNodeAttributes, function (attribute, xmlNodeAttribute) {
                attributeValuesArray[xmlNodeAttribute.nodeName] = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString(xmlNodeAttribute.nodeValue);
            });
            return attributeValuesArray;
        };
        ConfigReader.prototype.retrieveToolbarItems = function () {
            var _this = this;
            var toolbarItemArray = [];
            var xml = this.loadXML();
            var toolbarItemPath = "Toolbar ToolBarItem";
            var toolbarItems = $(xml).find(toolbarItemPath);
            jQuery.each(toolbarItems, function (item, toolbarItem) {
                var toolbarItemAttributeData = _this.getAttributesKeyValuePairArray(toolbarItem);
                toolbarItemArray.push(toolbarItemAttributeData);
            });
            return toolbarItemArray;
        };
        ConfigReader.prototype.retrieveZoomItems = function () {
            var _this = this;
            var zoomItemArray = [];
            var xml = this.loadXML();
            var zoomItemPath = "ZoomIcons ZoomIconItem";
            var zoomItems = $(xml).find(zoomItemPath);
            jQuery.each(zoomItems, function (item, zoomItem) {
                var zoomItemAttributeData = _this.getAttributesKeyValuePairArray(zoomItem);
                zoomItemArray.push(zoomItemAttributeData);
            });
            return zoomItemArray;
        };
        return ConfigReader;
    })();
    GenericWorkflowDesigner.ConfigReader = ConfigReader;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectedComponent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ConnectedComponent = (function () {
        function ConnectedComponent(activity) {
            if (activity) {
                this.root = activity;
                this.nodes = [activity];
                this.nodesWithOrphanChildren = [activity];
                this.orphanChildren = activity.getChildActivitiesSorted();
            }
        }
        ConnectedComponent.prototype.getRoot = function () {
            return this.root;
        };
        ConnectedComponent.prototype.setRoot = function (value) {
            this.root = value;
        };
        ConnectedComponent.prototype.getNodes = function () {
            return this.nodes;
        };
        ConnectedComponent.prototype.setNodes = function (value) {
            this.nodes = value;
        };
        ConnectedComponent.prototype.getOrphanChildren = function () {
            return this.orphanChildren;
        };
        ConnectedComponent.prototype.setOrphanChildren = function (value) {
            this.orphanChildren = value;
        };
        ConnectedComponent.prototype.getNodesWithOrphanChildren = function () {
            return this.nodesWithOrphanChildren;
        };
        ConnectedComponent.prototype.setNodesWithOrphanChildren = function (value) {
            this.nodesWithOrphanChildren = value;
        };
        ConnectedComponent.prototype.toString = function (digitsToDisplay) {
            digitsToDisplay = (digitsToDisplay) ? digitsToDisplay : 4;
            var newline = "\n";
            var content = ">> Conex Component <<" + newline;
            content += "root:" + this.root.getActivityID().substring(0, digitsToDisplay) + newline;
            content += "distance:" + GenericWorkflowDesigner.Settings.workflowTree.getDistanceFromRoot(this.root) + newline;
            var nodesStr = "";
            jQuery.each(this.nodes, function (index, node) {
                nodesStr += "[" + node.getActivityID().substring(0, digitsToDisplay) + "]";
            });
            content += "nodes :" + nodesStr + newline;
            var nodesWithOrphanChildrenStr = "";
            jQuery.each(this.nodesWithOrphanChildren, function (index, node) {
                nodesWithOrphanChildrenStr += "[" + node.getActivityID().substring(0, digitsToDisplay) + "..]";
            });
            content += "Nodes with Orphan Children :" + nodesWithOrphanChildrenStr + newline;
            var orphanChildrenStr = "";
            jQuery.each(this.orphanChildren, function (index, child) {
                var id = (child.getActivityID()) ? child.getActivityID() : "undefined";
                orphanChildrenStr += "[" + id.substring(0, digitsToDisplay) + "..]";
            });
            content += "orphan Children :" + orphanChildrenStr + newline;
            return content;
        };
        return ConnectedComponent;
    })();
    GenericWorkflowDesigner.ConnectedComponent = ConnectedComponent;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectedComponentsExtractor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ConnectedComponentsExtractor = (function () {
        function ConnectedComponentsExtractor(allConcreteActivities) {
            this.selectedActivitiesDictionary = [];
            this.visitedActivitiesDictionary = [];
            this.allActivities = [];
            this.selectedActivities = [];
            this.allActivities = allConcreteActivities;
        }
        ConnectedComponentsExtractor.prototype.getConnectedComponentsFromSelection = function (selectedActivities) {
            var _this = this;
            var connectedComponents = [];
            this.selectedActivities = selectedActivities;
            this.cleanUp();
            jQuery.each(this.selectedActivities, function (index, activity) {
                if (_this.visitedActivitiesDictionary[activity.getActivityID()] == false) {
                    var component = _this.getConnectedComponentForActivity(activity);
                    connectedComponents.push(component);
                }
            });
            return this.sortComponents(connectedComponents);
        };
        ConnectedComponentsExtractor.prototype.sortComponents = function (connectedComponents) {
            var count = connectedComponents.length;
            for (var i = 0; i < count; i++) {
                for (var j = i + 1; j < count; j++) {
                    var rootI = connectedComponents[i].getRoot();
                    var rootJ = connectedComponents[j].getRoot();
                    var distI = GenericWorkflowDesigner.Settings.workflowTree.getDistanceFromRoot(rootI);
                    var distJ = GenericWorkflowDesigner.Settings.workflowTree.getDistanceFromRoot(rootJ);
                    if ((distI > distJ) || (distI == distJ && rootI.getParentBranchID() > rootJ.getParentBranchID())) {
                        var aux = connectedComponents[i];
                        connectedComponents[i] = connectedComponents[j];
                        connectedComponents[j] = aux;
                    }
                }
            }
            return connectedComponents;
        };
        ConnectedComponentsExtractor.prototype.cleanUp = function () {
            var _this = this;
            jQuery.each(this.allActivities, function (index, activity) {
                _this.visitedActivitiesDictionary[activity.getActivityID()] = false;
                _this.selectedActivitiesDictionary[activity.getActivityID()] = false;
            });
            jQuery.each(this.selectedActivities, function (index, activity) {
                _this.selectedActivitiesDictionary[activity.getActivityID()] = true;
            });
        };
        ConnectedComponentsExtractor.prototype.getConnectedComponentForActivity = function (activity) {
            var root = this.getRootActivityForConnectedComponent(activity);
            var nodesTraversed = [];
            var orphanChildren = [];
            var nodesWithOrphanChildren = [];
            this.DepthFirstSearch(root, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
            var component = new GenericWorkflowDesigner.ConnectedComponent();
            component.setRoot(root);
            component.setNodes(nodesTraversed);
            component.setOrphanChildren(orphanChildren);
            component.setNodesWithOrphanChildren(nodesWithOrphanChildren);
            return component;
        };
        ConnectedComponentsExtractor.prototype.DepthFirstSearch = function (activity, nodesTraversed, orphanChildren, nodesWithOrphanChildren) {
            var _this = this;
            this.visitedActivitiesDictionary[activity.getActivityID()] = true;
            nodesTraversed.push(activity);
            var childrenActivities = activity.getChildActivitiesSorted();
            jQuery.each(childrenActivities, function (index, child) {
                if (_this.isActivityInSelection(child)) {
                    _this.DepthFirstSearch(child, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
                }
                else {
                    orphanChildren.push(child);
                    if ($.inArray(activity, nodesWithOrphanChildren) == -1) {
                        nodesWithOrphanChildren.push(activity);
                    }
                }
            });
        };
        ConnectedComponentsExtractor.prototype.getRootActivityForConnectedComponent = function (activity) {
            var root = activity;
            while (this.isActivityInSelection(root.getParent())) {
                root = root.getParent();
            }
            return root;
        };
        ConnectedComponentsExtractor.prototype.isActivityInSelection = function (activity) {
            if (activity && this.selectedActivitiesDictionary[activity.getActivityID()] == true)
                return true;
            return false;
        };
        return ConnectedComponentsExtractor;
    })();
    GenericWorkflowDesigner.ConnectedComponentsExtractor = ConnectedComponentsExtractor;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ContainerEdgeScroller.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ContainerEdgeScroller = (function () {
        function ContainerEdgeScroller(container, scrollOptions) {
            if (scrollOptions === void 0) { scrollOptions = {}; }
            this.isMovingHorizontal = false;
            this.isMovingVertical = false;
            this.horizontalInterval = 0;
            this.verticalInterval = 0;
            this.oldXPosition = 0;
            this.container = container;
            this.scrollOptions = $.extend({ step: 10, timer: 25, scrollTriggerMargin: 60, scrollableHorizontal: true, scrollableVertical: true }, scrollOptions);
        }
        ContainerEdgeScroller.prototype.scrollHorizontal = function (step) {
            if (this.scrollOptions.scrollableHorizontal) {
                var self = this;
                self.isMovingHorizontal = true;
                self.container.parent().scrollLeft(self.container.parent().scrollLeft() + step);
            }
        };
        ContainerEdgeScroller.prototype.scrollVertical = function (step) {
            if (this.scrollOptions.scrollableVertical) {
                var self = this;
                self.isMovingVertical = true;
                self.container.parent().scrollTop(self.container.parent().scrollTop() + step);
            }
        };
        ContainerEdgeScroller.prototype.clearIntervals = function () {
            if (!this.isMovingHorizontal) {
                clearInterval(this.horizontalInterval);
                this.horizontalInterval = false;
            }
            if (!this.isMovingVertical) {
                clearInterval(this.verticalInterval);
                this.verticalInterval = false;
            }
        };
        ContainerEdgeScroller.prototype.initialize = function () {
            this.containerOffset = {};
            this.containerOffset.top = this.container.parent().offset().top;
            this.containerOffset.left = this.container.parent().offset().left;
            this.containerOffset.right = this.containerOffset.left + this.container.parent().width();
            this.containerOffset.bottom = this.containerOffset.top + this.container.parent().height();
        };
        ContainerEdgeScroller.prototype.scrollIfCursorOnEdge = function (cursorPageX, cursorPageY) {
            this.isMovingHorizontal = false;
            this.isMovingVertical = false;
            if (Math.abs(cursorPageX - this.containerOffset.left) <= this.scrollOptions.scrollTriggerMargin && this.oldXPosition >= cursorPageX) {
                this.scrollHorizontal(this.scrollOptions.step * -1);
            }
            else if (Math.abs(cursorPageX - this.containerOffset.right) <= this.scrollOptions.scrollTriggerMargin && this.oldXPosition <= cursorPageX) {
                this.scrollHorizontal(this.scrollOptions.step);
            }
            if (Math.abs(cursorPageY - this.containerOffset.top) <= this.scrollOptions.scrollTriggerMargin) {
                this.scrollVertical(this.scrollOptions.step * -1);
            }
            else if (Math.abs(cursorPageY - this.containerOffset.bottom) <= this.scrollOptions.scrollTriggerMargin) {
                this.scrollVertical(this.scrollOptions.step);
            }
            this.oldXPosition = cursorPageX;
            this.clearIntervals();
        };
        ContainerEdgeScroller.prototype.stopScrolling = function () {
            clearInterval(this.horizontalInterval);
            clearInterval(this.verticalInterval);
            this.horizontalInterval = false;
            this.verticalInterval = false;
        };
        return ContainerEdgeScroller;
    })();
    GenericWorkflowDesigner.ContainerEdgeScroller = ContainerEdgeScroller;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="BaseItemContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var BaseItemContextFlyoutContent = (function () {
        function BaseItemContextFlyoutContent(activity) {
            this.currentActivity = null;
            this.optionsPropertyList = {};
            this.currentActivity = activity;
            this.initializeOptionsPropertyList();
        }
        BaseItemContextFlyoutContent.prototype.buildOptions = function (itemIndex) {
            var self = this;
            var optionsList = [];
            jQuery.each(this.optionsPropertyList, function (key, optionProperty) {
                var option = $('<li id=' + optionProperty.ID + '>' + optionProperty.LABEL + '</li>');
                option.click(function () {
                    optionProperty.clickHandler.call(self, itemIndex);
                });
                optionsList.push(option);
            });
            return optionsList;
        };
        BaseItemContextFlyoutContent.prototype.initializeOptionsPropertyList = function () {
            throw Error(GenericWorkflowDesigner.Exception.InternalError);
        };
        BaseItemContextFlyoutContent.prototype.createContent = function (itemIndex) {
            if (!this.currentActivity) {
                throw GenericWorkflowDesigner.Exception.NoActivitySet;
            }
            var content = $('<div class="contextmenuitems">');
            var items = $('<ul>');
            var elements = this.buildOptions(itemIndex);
            jQuery.each(elements, function (key, element) {
                items.append(element);
            });
            content.append(items);
            return content;
        };
        return BaseItemContextFlyoutContent;
    })();
    GenericWorkflowDesigner.BaseItemContextFlyoutContent = BaseItemContextFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ContextFlyoutContent = (function (_super) {
        __extends(ContextFlyoutContent, _super);
        function ContextFlyoutContent() {
            _super.apply(this, arguments);
        }
        ContextFlyoutContent.prototype.initializeOptionsPropertyList = function () {
            this.optionsPropertyList = {
                Delete: { ID: 'delete', LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[DELETE]"], clickHandler: this.deleteSelectedActivities },
                Copy: { ID: 'copy', LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[COPY]"], clickHandler: this.copyActivities },
                Paste: { ID: 'paste', LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[PASTE]"], clickHandler: this.pasteActivities }
            };
        };
        ContextFlyoutContent.prototype.deleteSelectedActivities = function () {
            var allowDelete = confirm(GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE DELETE]"]);
            if (allowDelete) {
                this.deleteSelectedActivitiesCore();
            }
        };
        ContextFlyoutContent.prototype.deleteSelectedActivitiesCore = function () {
            var _this = this;
            var connectedComponents = GenericWorkflowDesigner.Settings.workflowTree.getConnectedComponents();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            this.removeComponentsFromWorkflowTree(connectedComponents).done(function () {
                _this.deleteComponentsFromServer(connectedComponents).done(function () {
                    GenericWorkflowDesigner.updateCurrentModel(null);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
                });
            });
        };
        ContextFlyoutContent.prototype.removeComponentsFromWorkflowTree = function (connectedComponents) {
            var promise = null;
            jQuery.each(connectedComponents, function (index, component) {
                if (promise == null) {
                    promise = GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(component);
                }
                else {
                    promise = promise.then(function () {
                        return GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(component);
                    });
                }
            });
            return promise;
        };
        ContextFlyoutContent.prototype.deleteComponentsFromServer = function (connectedComponents) {
            var promise = null;
            jQuery.each(connectedComponents, function (indexComponent, component) {
                jQuery.each(component.getNodes(), function (indexNode, node) {
                    GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                    if (promise == null) {
                        promise = node.destroy();
                    }
                    else {
                        promise = promise.then(function () {
                            return node.destroy();
                        });
                    }
                });
            });
            return promise;
        };
        ContextFlyoutContent.prototype.copyActivities = function () {
            if (GenericWorkflowDesigner.Settings.workflowTree.isInSelection(this.currentActivity)) {
                GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities());
            }
            else {
                GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([this.currentActivity]);
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        ContextFlyoutContent.prototype.pasteActivities = function () {
            var self = this;
            var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
            if (copiedActivities.length <= 0) {
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
                return;
            }
            var extractor = new GenericWorkflowDesigner.ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor.getConnectedComponentsFromSelection(copiedActivities);
            var promise = null;
            jQuery.each(connectedComponents, function (index, connectedComponent) {
                if (promise == null) {
                    promise = self.pasteComponent(connectedComponent);
                }
                else {
                    promise = promise.then(function () {
                        return self.pasteComponent(connectedComponent);
                    });
                }
            });
            promise.done(function () {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.trigger(self.currentActivity);
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        ContextFlyoutContent.prototype.pasteComponent = function (connectedComponent) {
            var self = this;
            var deferred = $.Deferred();
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory.createDropHandler(this.currentActivity);
            var originalActivities = connectedComponent.getNodes();
            var originalRootActivity = connectedComponent.getRoot();
            var originalActivitiesParentsMap = [];
            var pastedToOriginalClientIdMap = [];
            var originalToPastedClientIdMap = [];
            var pastedActivities = [];
            var pastedRootActivity;
            jQuery.each(originalActivities, function (index, originalActivity) {
                var parent = originalActivity.getParent();
                originalActivitiesParentsMap[originalActivity.cid] = parent.cid;
                var pastedActivity = originalActivity.getCloneOfActivity();
                pastedToOriginalClientIdMap[pastedActivity.cid] = originalActivity.cid;
                originalToPastedClientIdMap[originalActivity.cid] = pastedActivity.cid;
                if (originalActivity == originalRootActivity) {
                    pastedRootActivity = pastedActivity;
                }
                pastedActivities.push(pastedActivity);
            });
            var pastedActivitiesParentsMap = self.createPastedActivitiesClientIdsParentMap(pastedActivities, pastedRootActivity, pastedToOriginalClientIdMap, originalToPastedClientIdMap, originalActivitiesParentsMap);
            self.savePastedActivitiesAndSetParentIds(pastedActivities, pastedRootActivity, pastedActivitiesParentsMap)
                .done(function () {
                var componentToDrop = new GenericWorkflowDesigner.ConnectedComponent(pastedRootActivity);
                dropHandler.drop(componentToDrop).done(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise();
        };
        ContextFlyoutContent.prototype.createPastedActivitiesClientIdsParentMap = function (pastedActivities, pastedRootActivity, pastedToOriginalClientIdMap, originalToPastedClientIdMap, originalActivitiesParentsMap) {
            var pastedActivitiesParentsMap = [];
            jQuery.each(pastedActivities, function (index, pastedActivity) {
                if (pastedActivity == pastedRootActivity) {
                    return;
                }
                var parentOfOldMatchingActivity = originalActivitiesParentsMap[pastedToOriginalClientIdMap[pastedActivity.cid]];
                pastedActivitiesParentsMap[pastedActivity.cid] = originalToPastedClientIdMap[parentOfOldMatchingActivity];
            });
            return pastedActivitiesParentsMap;
        };
        ContextFlyoutContent.prototype.savePastedActivitiesAndSetParentIds = function (pastedActivities, pastedRootActivity, pastedActivitiesParentsMap) {
            var deferred = $.Deferred();
            var promises = [];
            jQuery.each(pastedActivities, function (index, newItem) {
                promises.push(newItem.save());
            });
            var serverIdsMap = [];
            $.when.apply(self, promises).done(function () {
                jQuery.each(pastedActivities, function (index, newItem) {
                    serverIdsMap[newItem.cid] = newItem.getActivityID();
                    GenericWorkflowDesigner.Settings.workflowTree.add(newItem);
                });
                promises = [];
                jQuery.each(pastedActivities, function (index, pastedActivity) {
                    if (pastedActivity == pastedRootActivity) {
                        return;
                    }
                    var realParentId = serverIdsMap[pastedActivitiesParentsMap[pastedActivity.cid]];
                    pastedActivity.setParentActivityID(realParentId);
                    promises.push(pastedActivity.save());
                });
                $.when.apply(self, promises).done(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise();
        };
        return ContextFlyoutContent;
    })(GenericWorkflowDesigner.BaseItemContextFlyoutContent);
    GenericWorkflowDesigner.ContextFlyoutContent = ContextFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DragTouchHelper.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DragTouchHelper = (function () {
        function DragTouchHelper() {
        }
        DragTouchHelper.mapTouchEvents = function (draggableElement) {
            draggableElement.unbind('touchstart');
            draggableElement.unbind('touchmove');
            draggableElement.unbind('touchend');
            draggableElement.bind('touchstart', DragTouchHelper.touchEventHandler);
            draggableElement.bind('touchmove', DragTouchHelper.touchEventHandler);
            draggableElement.bind('touchend', DragTouchHelper.touchEventHandler);
        };
        DragTouchHelper.dispatchMouseEvent = function (newEventName, touch, originalEvent) {
            var newEvent = document.createEvent('MouseEvent');
            newEvent.initMouseEvent(newEventName, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
            originalEvent.target.dispatchEvent(newEvent);
        };
        DragTouchHelper.longPressTresholdMilliseconds = 1000;
        DragTouchHelper.moveStarted = false;
        DragTouchHelper.touchEventHandler = function (e, ui) {
            e.preventDefault();
            var touch = e.originalEvent.changedTouches[0];
            var newEventName = '';
            if (e.type === 'touchstart') {
                newEventName = 'mousedown';
                DragTouchHelper.startTime = new Date().getTime();
                DragTouchHelper.moveStarted = false;
                DragTouchHelper.startScreenX = touch.screenX;
                DragTouchHelper.startScreenY = touch.screenY;
            }
            else if (e.type === 'touchmove') {
                newEventName = 'mousemove';
                if (DragTouchHelper.startScreenX == touch.screenX && DragTouchHelper.startScreenY == touch.screenY) {
                    return true;
                }
                DragTouchHelper.moveStarted = true;
            }
            else if (e.type === 'touchend') {
                newEventName = 'mouseup';
                DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
                DragTouchHelper.endTime = new Date().getTime();
                if (!DragTouchHelper.moveStarted) {
                    if ((DragTouchHelper.endTime - DragTouchHelper.startTime) > DragTouchHelper.longPressTresholdMilliseconds) {
                        newEventName = 'contextmenu';
                    }
                    else {
                        newEventName = 'click';
                    }
                }
            }
            DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
            return true;
        };
        return DragTouchHelper;
    })();
    GenericWorkflowDesigner.DragTouchHelper = DragTouchHelper;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutContentProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FlyoutContentProvider = (function (_super) {
        __extends(FlyoutContentProvider, _super);
        function FlyoutContentProvider() {
            _super.apply(this, arguments);
        }
        FlyoutContentProvider.prototype.createContent = function (flyoutContentType, activity) {
            switch (flyoutContentType) {
                case FlyoutContentProvider.flyoutContentType.ContextFlyout:
                    var contextFlyoutContent = new GenericWorkflowDesigner.ContextFlyoutContent(activity);
                    return contextFlyoutContent.createContent();
                case FlyoutContentProvider.flyoutContentType.SegmentFlyout:
                    var segmentFlyoutContent = new GenericWorkflowDesigner.BaseFlyoutContent(activity, new GenericWorkflowDesigner.SegmentItemContextFlyoutContent(activity));
                    return segmentFlyoutContent.createContent();
                case FlyoutContentProvider.flyoutContentType.AttributesFlyout:
                    var attributesFlyoutContent = new GenericWorkflowDesigner.BaseFlyoutContent(activity, new GenericWorkflowDesigner.AttributesItemContextFlyoutContent(activity));
                    return attributesFlyoutContent.createContent();
                default:
                    throw Error("Content type not supported.");
            }
        };
        FlyoutContentProvider.flyoutContentType = {
            ContextFlyout: "contextFlyout",
            ABTestingContextFlyout: "abTestingContextFlyout",
            SegmentFlyout: "segmentFlyout",
            ABTestingFlyout: "abTestingFlyout",
            AttributesFlyout: "attributesFlyout"
        };
        return FlyoutContentProvider;
    })(GenericWorkflowDesigner.AbstractFlyoutContentProvider);
    GenericWorkflowDesigner.FlyoutContentProvider = FlyoutContentProvider;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutControlCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FlyoutControlCollection = (function () {
        function FlyoutControlCollection() {
            this.tileItemsMenuList = [];
            this.contextMenuList = [];
        }
        Object.defineProperty(FlyoutControlCollection.prototype, "TileItemsMenuList", {
            get: function () {
                return this.tileItemsMenuList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlyoutControlCollection.prototype, "ContextMenuList", {
            get: function () {
                return this.contextMenuList;
            },
            enumerable: true,
            configurable: true
        });
        FlyoutControlCollection.prototype.addTileItemFlyoutControl = function (flyoutControl) {
            this.tileItemsMenuList.push(flyoutControl);
        };
        FlyoutControlCollection.prototype.addContextMenuFlyoutControl = function (flyoutControl) {
            this.contextMenuList.push(flyoutControl);
        };
        FlyoutControlCollection.prototype.hideTileItemFlyoutControl = function () {
            this.tileItemsMenuList.forEach(function (f) { return f.Hide(); });
            this.tileItemsMenuList = [];
        };
        FlyoutControlCollection.prototype.hideContextMenuFlyoutControl = function () {
            this.contextMenuList.forEach(function (f) { return f.Hide(); });
            this.contextMenuList = [];
        };
        return FlyoutControlCollection;
    })();
    GenericWorkflowDesigner.FlyoutControlCollection = FlyoutControlCollection;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FlyoutControlContext = (function () {
        function FlyoutControlContext(activity, contentType) {
            this.contentType = contentType;
            this.activity = activity;
        }
        FlyoutControlContext.prototype.getActivity = function () {
            return this.activity;
        };
        FlyoutControlContext.prototype.getContentType = function () {
            return this.contentType;
        };
        return FlyoutControlContext;
    })();
    GenericWorkflowDesigner.FlyoutControlContext = FlyoutControlContext;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Graphics.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var Graphics = (function () {
        function Graphics() {
        }
        Graphics.prototype.createRectangleDOM = function (rectangle, segmentClass, lineWidth) {
            lineWidth = (lineWidth == undefined) ? GenericWorkflowDesigner.Settings.layoutProperties.lineWidth : lineWidth;
            var leftLine = this.createLineDOM(new GenericWorkflowDesigner.Point(rectangle.getLeft(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
            var rightLine = this.createLineDOM(new GenericWorkflowDesigner.Point(rectangle.getRight(), rectangle.getTop()), lineWidth, rectangle.getHeight(), segmentClass);
            var topLine = this.createLineDOM(new GenericWorkflowDesigner.Point(rectangle.getLeft(), rectangle.getTop()), rectangle.getWidth(), lineWidth, segmentClass);
            var bottomLine = this.createLineDOM(new GenericWorkflowDesigner.Point(rectangle.getLeft(), rectangle.getBottom()), rectangle.getWidth(), lineWidth, segmentClass);
            var segments = [];
            segments.push(leftLine);
            segments.push(rightLine);
            segments.push(topLine);
            segments.push(bottomLine);
            return segments;
        };
        Graphics.prototype.createLineDOM = function (pointStart, width, height, segmentClass) {
            var line = $('<div class="' + segmentClass + '">');
            line.css("position", "absolute");
            line.css("width", width);
            line.css("height", height);
            line.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), pointStart.getX());
            line.css("top", pointStart.getY());
            return line;
        };
        Graphics.prototype.createConnectorExtendDOM = function (startPoint, endPoint, segmentClass, parentBranchID, depth) {
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
        Graphics.prototype.createConnectorDOM = function (startPoint, endPoint, segmentClass, parentBranchID) {
            var segments = [], p2;
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var colSpaceing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var defaultColSpaceing = colSpaceing / 2;
            var lineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
            if (endPoint.getX() - startPoint.getX() != (width + colSpaceing)) {
                colSpaceing = endPoint.getX() - startPoint.getX() - 230;
            }
            var top = startPoint.getY() + height / 2;
            var left = startPoint.getX() + width;
            var p1 = new GenericWorkflowDesigner.Point(left, top);
            segments.push(this.createLineDOM(p1, colSpaceing - defaultColSpaceing, lineWidth, segmentClass));
            var top1 = startPoint.getY() + height / 2;
            var top2 = endPoint.getY() + height / 2;
            left = endPoint.getX() - defaultColSpaceing - Math.floor(lineWidth / 2);
            if (top2 - top1 >= 0) {
                p2 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p2, lineWidth, top2 - top1, segmentClass));
            }
            else {
                top = endPoint.getY() + height / 2;
                p2 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p2, lineWidth, top1 - top2, segmentClass));
            }
            top = endPoint.getY() + height / 2;
            left = endPoint.getX() - defaultColSpaceing;
            var p3 = new GenericWorkflowDesigner.Point(left, top);
            segments.push(this.createLineDOM(p3, defaultColSpaceing, lineWidth, segmentClass));
            return segments;
        };
        Graphics.prototype.drawTileConnectors = function (obj) {
            var self = this;
            var workflowDefinition = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
            $.each(workflowDefinition, function (index, activity) {
                var parentActivity = activity.getParent();
                if (parentActivity != null && parentActivity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Root) {
                    self.drawConnector(parentActivity, activity, obj);
                }
            });
        };
        Graphics.prototype.drawConnector = function (parentActivity, childActivity, obj) {
            var row1 = parentActivity.getRow();
            var col1 = parentActivity.getCol();
            var row2 = childActivity.getRow();
            var col2 = childActivity.getCol();
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var startPoint = new GenericWorkflowDesigner.Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
            var endPoint = new GenericWorkflowDesigner.Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));
            var connectorSegments = this.createConnectorDOM(startPoint, endPoint, "line", null);
            $.each(connectorSegments, function (index, segment) {
                obj.$el.append(segment);
            });
        };
        return Graphics;
    })();
    GenericWorkflowDesigner.Graphics = Graphics;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
//// -----------------------------------------------------------------------
//// <copyright file="HTMLControlTemplates.ts" company="Microsoft">
////      Copyright (c) Microsoft Corporation.  All rights reserved.
//// </copyright>
//// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var HTMLControlTemplates = (function (_super) {
        __extends(HTMLControlTemplates, _super);
        function HTMLControlTemplates() {
            _super.apply(this, arguments);
        }
        HTMLControlTemplates.getHTMLControl = function (dataType, id, nameForLabel) {
            switch (dataType) {
                case "text":
                    this.controlTemplate = "<label>" + nameForLabel + ": </label><input type='" + dataType + "' id=\"" + id + "\" value=\"<%- " + id + " %>\">";
                    break;
                case "checkbox":
                    this.controlTemplate = "<label>" + nameForLabel + ": </label><input type='" + dataType + "' id=\"" + id + "\" value=\"<%- " + id + " %>\" <%if(" + id + " == true){%> checked <%}%>>";
                    break;
                case "textarea":
                    this.controlTemplate = "<label>" + nameForLabel + ": </label><textarea id=\"" + id + "\"><%- " + id + " %></textarea>";
                    break;
                case "optionset":
                    this.controlTemplate = "<label>" + nameForLabel + ": </label><select id=\"" + id + "\"><option value=\"<%- " + id + " %>\"><%- " + id + " %></option></select>";
                    break;
                case "button":
                    this.controlTemplate = "<button id='" + id + "'>" + nameForLabel + "</button>";
                    break;
                case "list":
                    this.controlTemplate = "<label>" + nameForLabel + ": </label><ul id='" + id + "'><li><span></span></li></ul>";
                    break;
                default:
                    this.controlTemplate = null;
            }
            return this.controlTemplate;
        };
        HTMLControlTemplates.controlTemplate = "";
        return HTMLControlTemplates;
    })(Backbone.View);
    GenericWorkflowDesigner.HTMLControlTemplates = HTMLControlTemplates;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MessageSelectClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var MessageSelectClickHandler = (function () {
        function MessageSelectClickHandler(serviceUrl, model, propertyFrame, hiddenEntityIdField) {
            this.propertyFrame = null;
            this.model = model;
            this.propertyFrame = propertyFrame;
            this.hiddenEntityIdField = hiddenEntityIdField;
            this.serviceUrl = serviceUrl;
        }
        MessageSelectClickHandler.prototype.generatePostData = function (messageSourceKeyId) {
            var self = this;
            var activeItem = this.model.getActiveItem();
            var preMessageSourceKeyOId = activeItem.get('ItemID');
            var preActivityTypeId = activeItem.get('ActivityTypeID');
            var activityCollection = self.model.getActivities()[0].collection;
            var messageAttachedCount = 0;
            if (preMessageSourceKeyOId === null) {
                messageAttachedCount = 0;
            }
            else {
                for (var i = 0; i < activityCollection.length; i++) {
                    if (preActivityTypeId == activityCollection.models[i].getActiveItem().get('ActivityTypeID') && preMessageSourceKeyOId == activityCollection.models[i].getActiveItem().get('ItemID')) {
                        messageAttachedCount++;
                    }
                }
            }
            return { messageExistCount: messageAttachedCount, previousMessageSourceKeyOId: preMessageSourceKeyOId, currentMessageSourceKeyOId: messageSourceKeyId, workflowOId: GenericWorkflowDesigner.workflowAssociatedEntityOID };
        };
        MessageSelectClickHandler.prototype.selectClickHandler = function () {
            var _this = this;
            if (this.model.getReadonlyMode()) {
                GenericWorkflowDesigner.alertLabelKeyValue("WARNING READONLY MODE");
                return;
            }
            var properties = this.getUpdatedProperties();
            var postData = this.generatePostData(properties.ItemID);
            $.ajax({
                type: "POST",
                url: GenericWorkflowDesigner.applicationRootUrl + this.serviceUrl,
                data: JSON.stringify(postData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function () {
                    _this.model.setActiveItemProperties(properties);
                    _this.model.save();
                }
            });
        };
        MessageSelectClickHandler.prototype.getUpdatedProperties = function () {
            var self = this;
            var messageId = self.propertyFrame.contents().find('#' + self.hiddenEntityIdField.messageId).val();
            var properties = { ItemID: messageId };
            return properties;
        };
        return MessageSelectClickHandler;
    })();
    GenericWorkflowDesigner.MessageSelectClickHandler = MessageSelectClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="PositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var PositionCalculator = (function () {
        function PositionCalculator(layoutProperties) {
            this.computeTop = function (row) {
                return row * (this.height + this.rowSpaceing) + this.topMargin;
            };
            this.computeLeft = function (col) {
                return col * (this.width + this.colSpaceing) + this.leftMargin;
            };
            this.height = layoutProperties.height;
            this.width = layoutProperties.width;
            this.rowSpaceing = layoutProperties.rowSpaceing;
            this.colSpaceing = layoutProperties.colSpaceing;
            this.topMargin = layoutProperties.topMargin;
            this.leftMargin = layoutProperties.leftMargin;
        }
        return PositionCalculator;
    })();
    GenericWorkflowDesigner.PositionCalculator = PositionCalculator;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="RenderType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    'use strict';
    (function (RenderType) {
        RenderType[RenderType["LibraryView"] = 1] = "LibraryView";
        RenderType[RenderType["TreeView"] = 2] = "TreeView";
        RenderType[RenderType["Mini"] = 3] = "Mini";
    })(GenericWorkflowDesigner.RenderType || (GenericWorkflowDesigner.RenderType = {}));
    var RenderType = GenericWorkflowDesigner.RenderType;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ScrollableDragDrop.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ScrollableDragDrop = (function () {
        function ScrollableDragDrop() {
        }
        ScrollableDragDrop.prototype.makeDraggable = function (element, container, draggableOptions, scrollOptions) {
            if (scrollOptions === void 0) { scrollOptions = {}; }
            var containerEdgeScroller = new GenericWorkflowDesigner.ContainerEdgeScroller(container, scrollOptions);
            var extendedDraggableOptions = $.extend({}, draggableOptions, {
                start: function () {
                    if (draggableOptions.start) {
                        draggableOptions.start.apply(this, arguments);
                    }
                    containerEdgeScroller.initialize();
                },
                drag: function (e) {
                    if (draggableOptions.drag) {
                        draggableOptions.drag.apply(this, arguments);
                    }
                    containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                },
                stop: function () {
                    if (draggableOptions.stop) {
                        draggableOptions.stop.apply(this, arguments);
                    }
                    containerEdgeScroller.stopScrolling();
                }
            });
            element.draggable(extendedDraggableOptions);
            GenericWorkflowDesigner.DragTouchHelper.mapTouchEvents(element);
        };
        return ScrollableDragDrop;
    })();
    GenericWorkflowDesigner.ScrollableDragDrop = ScrollableDragDrop;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SubsequentActivityGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SubsequentActivityGenerator = (function () {
        function SubsequentActivityGenerator() {
        }
        SubsequentActivityGenerator.prototype.createGenerator = function (activity) {
            return new GenericWorkflowDesigner.DefaultSubsequentActivities(activity);
        };
        SubsequentActivityGenerator.prototype.createChildActivities = function (activity) {
            var generator = this.createGenerator(activity);
            return generator.createChildActivities();
        };
        return SubsequentActivityGenerator;
    })();
    GenericWorkflowDesigner.SubsequentActivityGenerator = SubsequentActivityGenerator;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowEntityDefinitionDataSyncer.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var GenericWorkflowEntityDefinitionSyncer = (function () {
        function GenericWorkflowEntityDefinitionSyncer() {
        }
        GenericWorkflowEntityDefinitionSyncer.prototype.GetWorkflow = function (model, options) {
            var defer = $.Deferred();
            var workflowObject = GenericWorkflowDesigner.DataAccessEvents.getWorkflowData(model);
            defer.resolve(workflowObject);
            return defer.promise();
        };
        GenericWorkflowEntityDefinitionSyncer.prototype.UpdateWorkflowDefinition = function (model, options) {
            var defer = $.Deferred();
            var workflowObject = GenericWorkflowDesigner.DataAccessEvents.updateWorkflowDefinition(model);
            defer.resolve(workflowObject);
            return defer.promise();
        };
        GenericWorkflowEntityDefinitionSyncer.prototype.ValidateWorkflow = function (model, options) {
            var defer = $.Deferred();
            var workflowObject = GenericWorkflowDesigner.DataAccessEvents.validateWorkflow(model);
            defer.resolve(workflowObject);
            return defer.promise();
        };
        return GenericWorkflowEntityDefinitionSyncer;
    })();
    GenericWorkflowDesigner.GenericWorkflowEntityDefinitionSyncer = GenericWorkflowEntityDefinitionSyncer;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowTree.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkflowTree = (function () {
        function WorkflowTree() {
            this.activityCollection = null;
            this.selectedActivities = [];
            this.copiedActivities = [];
        }
        WorkflowTree.prototype.setActivityCollection = function (activityCollection) {
            this.activityCollection = activityCollection;
        };
        WorkflowTree.prototype.setSelectedActivities = function (activities) {
            this.selectedActivities = activities;
        };
        WorkflowTree.prototype.getSelectedActivities = function () {
            return this.selectedActivities;
        };
        WorkflowTree.prototype.setCopiedActivities = function (activities) {
            this.copiedActivities = activities;
        };
        WorkflowTree.prototype.getCopiedActivities = function () {
            return this.copiedActivities;
        };
        WorkflowTree.prototype.getParent = function (activity) {
            var parentID = activity.getParentActivityID();
            if (parentID == null) {
                return null;
            }
            var parent = null;
            jQuery.each(this.activityCollection.models, function (index, currentActivity) {
                if (currentActivity.getActivityID() == parentID) {
                    parent = currentActivity;
                    return false;
                }
            });
            return parent;
        };
        WorkflowTree.prototype.getNextActivity = function (activity) {
            var nextID = activity.getNextActivityID();
            if (nextID == null) {
                return null;
            }
            var next = null;
            jQuery.each(this.activityCollection.models, function (index, currentActivity) {
                if (currentActivity.getActivityID() == nextID) {
                    next = currentActivity;
                    return false;
                }
            });
            if (CommonTypes.Types.Object.isNullOrUndefined(activity.nextActivity)) {
                activity.nextActivity = next;
            }
            return next;
        };
        ;
        WorkflowTree.prototype.getChildActivities = function (activity) {
            var childActivities = [];
            if (activity.getActivityID() == undefined)
                return childActivities;
            $(this.activityCollection.models).each(function (index, currentActivity) {
                if (currentActivity.getParentActivityID() == activity.getActivityID()) {
                    childActivities.push(currentActivity);
                }
            });
            return childActivities;
        };
        WorkflowTree.prototype.getAllChildActivities = function (activity) {
            var allChildActivities = [];
            $(this.getChildActivities(activity)).each(function (index, childActivity) {
                if (!childActivity.isLeaf()) {
                    allChildActivities.push(childActivity);
                    $(childActivity.getAllChildActivities(childActivity)).each(function (childIndex, childOfCurrentChild) {
                        if (!childOfCurrentChild.isLeaf()) {
                            allChildActivities.push(childOfCurrentChild);
                        }
                    });
                }
            });
            return allChildActivities;
        };
        WorkflowTree.prototype.getMaxDrift = function (activity) {
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
        WorkflowTree.prototype.getMaxDepth = function (activity) {
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
        WorkflowTree.prototype.addChildActivity = function (parentActivity, childActivity) {
            var deferred = $.Deferred();
            var droppedActivitiesComponent = new GenericWorkflowDesigner.ConnectedComponent(childActivity);
            GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentAfter(parentActivity, droppedActivitiesComponent).done(function (insertedActivity) {
                insertedActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                    deferred.resolveWith(activity, [activity]);
                });
            });
        };
        WorkflowTree.prototype.insertChildActivityComponentAtIndex = function (parentActivity, childActivityComponent, parentBranchID) {
            var self = this;
            var childActivities = parentActivity.getChildActivitiesSorted();
            var childActivity = childActivityComponent.getRoot();
            var oldParent = childActivity.getParent();
            var deferred = $.Deferred();
            var promiseList = [];
            childActivity.setParentActivityID(parentActivity.getActivityID());
            childActivity.setParentBranchID(parentBranchID);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting, childActivity, parentActivity, parentBranchID);
            $.each(childActivities, function (index, activity) {
                var branchID = activity.getParentBranchID();
                if (branchID >= parentBranchID) {
                    activity.setParentBranchID(branchID + 1);
                    var promise = activity.save();
                    promiseList.push(promise);
                }
            });
            childActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                var savedChildActivity = activity;
                if (oldParent != null) {
                    promiseList.push(oldParent.createSubsequentActivity());
                }
                $.when.apply(self, promiseList).done(function () {
                    deferred.resolveWith(savedChildActivity, [savedChildActivity]);
                });
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.UpdatePositions = function () {
            this.activityCollection.UpdatePositions();
        };
        WorkflowTree.prototype.getWorkflowDefinition = function () {
            return this.activityCollection.getWorkflowDefinition();
        };
        WorkflowTree.prototype.getWorkflowDefinitionRoot = function () {
            return this.activityCollection.getWorkflowDefinitionRoot();
        };
        WorkflowTree.prototype.getLeaves = function () {
            return this.activityCollection.getLeaves();
        };
        WorkflowTree.prototype.getActivities = function () {
            if (this.activityCollection != null) {
                return this.activityCollection.models;
            }
            else {
                return null;
            }
        };
        WorkflowTree.prototype.getAllConcreteActivities = function () {
            var list = [];
            jQuery.each(this.activityCollection.models, function (index, activity) {
                if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                    list.push(activity);
                }
            });
            return list;
        };
        WorkflowTree.prototype.insertActivityComponentAfter = function (parentActivity, insertActivityComponent) {
            var self = this;
            var childActivitiesToMove = parentActivity.getChildActivitiesToReparentForInsertAfter();
            var remainingActivities = $(parentActivity.getChildActivitiesSorted()).not(childActivitiesToMove);
            var deferred = $.Deferred();
            var promiseList = [];
            var insertActivity = insertActivityComponent.getRoot();
            insertActivity.setParentActivityID(parentActivity.getActivityID());
            insertActivity.setParentBranchID(0);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting, insertActivity, parentActivity, 0);
            var promise = insertActivity.save().done(function () {
                self.add(insertActivity);
                $.each(childActivitiesToMove, function (index, activity) {
                    activity.setParentActivityID(insertActivity.getActivityID());
                    if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                        promise = activity.save();
                        promiseList.push(promise);
                    }
                });
                $.each(remainingActivities, function (index, activity) {
                    activity.setParentBranchID(index + 1);
                    promise = activity.save();
                    promiseList.push(promise);
                });
                $.when.apply(self, promiseList).done(function () {
                    deferred.resolveWith(insertActivity, [insertActivity]);
                });
            });
            promiseList.push(promise);
            return deferred.promise();
        };
        WorkflowTree.prototype.insertActivityComponentBefore = function (activity, insertComponent) {
            var self = this;
            var deferred = $.Deferred();
            var root = insertComponent.getRoot();
            var parentActivity = activity.getParent();
            var parentBranchID = activity.getParentBranchID();
            root.setParentActivityID(parentActivity.getActivityID());
            root.setParentBranchID(activity.getParentBranchID());
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting, root, parentActivity, parentBranchID);
            root.save().done(function () {
                self.add(root);
                var defaultConnectionActivity = insertComponent.getNodesWithOrphanChildren()[0];
                activity.setParentActivityID(defaultConnectionActivity.getActivityID());
                activity.setParentBranchID(0);
                activity.save().done(function () {
                    deferred.resolveWith(root, [root]);
                });
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.cutActivity = function (activityToCut) {
            var component = new GenericWorkflowDesigner.ConnectedComponent(activityToCut);
            return this.cutConnectedComponent(component);
        };
        WorkflowTree.prototype.cutConnectedComponent = function (component) {
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
                if (branchID > activityToCutBranchId) {
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
        WorkflowTree.prototype.removeEmptyChildren = function (activity) {
            var self = this;
            var children = activity.getChildActivitiesSorted();
            jQuery.each(children, function (index, child) {
                if (child.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                    self.remove(child);
                }
            });
        };
        WorkflowTree.prototype.getActivitiesToMoveOnCut = function (component) {
            var activitiesToMove = component.getOrphanChildren();
            activitiesToMove = $.grep(activitiesToMove, function (element, index) {
                if (element.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                    return false;
                }
                return true;
            });
            return activitiesToMove;
        };
        WorkflowTree.prototype.fetch = function (entityOID, workflowProviderType) {
            var self = this;
            var deferred = $.Deferred();
            var workflowEntityDefinition = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            var promise = workflowEntityDefinition.fetch({ reset: true, data: { EntityID: entityOID, WorkflowProviderType: workflowProviderType } });
            promise.done(function () {
                var readonlyMode = workflowEntityDefinition.getReadOnlyMode();
                GenericWorkflowDesigner.workflowOID = workflowEntityDefinition.getWorkflowId();
                GenericWorkflowDesigner.workflowStatus = workflowEntityDefinition.getState();
                var fetchActivityCollectionPromise = self.activityCollection.fetch({
                    reset: true,
                    data: { WorkflowID: GenericWorkflowDesigner.workflowOID, WorkflowProviderType: workflowProviderType }
                });
                fetchActivityCollectionPromise.done(function () {
                    jQuery.each(self.activityCollection.models, function (index, currentActivity) {
                        currentActivity.setReadonlyMode(readonlyMode);
                    });
                    self.onSuccessFetch().done(function () {
                        self.UpdatePositions();
                        deferred.resolve();
                    });
                });
                fetchActivityCollectionPromise.fail(function () {
                    self.onErrorFetch();
                    deferred.fail();
                });
            });
            promise.fail(function () {
                self.onErrorFetch();
                deferred.fail();
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.onSuccessFetch = function () {
            var self = this;
            var deferred = $.Deferred();
            if (this.activityCollection.length == 0) {
                var workflowRootActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(GenericWorkflowDesigner.ActivityType.Root);
                this.add(workflowRootActivity);
                workflowRootActivity.saveActivityWithSubsequentActivities().done(function () {
                    deferred.resolve();
                });
            }
            else {
                return this.createSubsequentActivities();
            }
            return deferred.promise();
        };
        WorkflowTree.prototype.createSubsequentActivitiesForLeafs = function () {
            var deferred = $.Deferred();
            var childPromises = [];
            var activities = this.getLeaves();
            $(activities).each(function (index, activity) {
                var promise = activity.createSubsequentActivity();
                childPromises.push(promise);
            });
            $.when.apply(self, childPromises).done(function () {
                deferred.resolve();
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.createSubsequentActivities = function () {
            var deferred = $.Deferred();
            var childPromises = [];
            var activities = this.activityCollection.getActivitiesForSubsequentActivitiesGeneration();
            $(activities).each(function (index, activity) {
                var promise = activity.createSubsequentActivity();
                childPromises.push(promise);
            });
            $.when.apply(self, childPromises).done(function () {
                deferred.resolve();
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.onErrorFetch = function () {
            if (window.SuppressErrors) {
                return;
            }
            GenericWorkflowDesigner.alertLabelKeyValue("ERROR FETCHING WORKFLOW DEFINITION");
        };
        WorkflowTree.prototype.add = function (activity) {
            this.activityCollection.add(activity);
        };
        WorkflowTree.prototype.remove = function (activity) {
            this.activityCollection.remove(activity);
        };
        WorkflowTree.prototype.has = function (activity) {
            var index = $.inArray(activity, this.activityCollection.models);
            return (index >= 0) ? true : false;
        };
        WorkflowTree.prototype.getConnectedComponents = function () {
            var extractor = new GenericWorkflowDesigner.ConnectedComponentsExtractor(this.getAllConcreteActivities());
            var components = extractor.getConnectedComponentsFromSelection(this.getSelectedActivities());
            return components;
        };
        WorkflowTree.prototype.isInSelection = function (activity) {
            var index = $.inArray(activity, this.getSelectedActivities());
            return (index > -1) ? true : false;
        };
        WorkflowTree.prototype.getDistanceFromRoot = function (activity) {
            var INFINITY = 1000;
            var dist = 0;
            while ((activity != null) && (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Root)) {
                dist++;
                activity = activity.getParent();
            }
            if (activity == undefined) {
                return INFINITY;
            }
            return dist;
        };
        WorkflowTree.prototype.getActivityById = function (activityId) {
            var activity;
            $(this.activityCollection.models).each(function (index, currentActivity) {
                if (currentActivity.getActivityID() == activityId) {
                    activity = currentActivity;
                    return false;
                }
            });
            return activity;
        };
        return WorkflowTree;
    })();
    GenericWorkflowDesigner.WorkflowTree = WorkflowTree;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="BaseFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var BaseFlyoutContent = (function () {
        function BaseFlyoutContent(activity, itemContextFlyoutContentProvider) {
            this.flyoutItemStartIndex = 0;
            if (!activity) {
                throw GenericWorkflowDesigner.Exception.ActivityIsNeeded;
            }
            if (!itemContextFlyoutContentProvider) {
                throw "itemContextFlyoutContentProvider is needed.";
            }
            this.currentActivity = activity;
            this.itemContextFlyoutContentProvider = itemContextFlyoutContentProvider;
        }
        BaseFlyoutContent.prototype.buildItemView = function (index) {
            var itemState = this.currentActivity.getProperties().Items[index].State;
            var context = new GenericWorkflowDesigner.ItemRenderingContext(itemState, index);
            var tileViewElement = new GenericWorkflowDesigner.TileView({ model: this.currentActivity }).render(context);
            this.setupClickHandlerToUpdateActiveItem(tileViewElement.$el, this.currentActivity, index);
            this.setupContextHandler(tileViewElement.$el, this.currentActivity, index);
            if (this.supportsHighlighting() && this.isActiveItemIndex(index)) {
                this.highlightTileItem(tileViewElement.el);
            }
            return tileViewElement;
        };
        BaseFlyoutContent.prototype.supportsHighlighting = function () {
            return this.flyoutItemStartIndex === 1;
        };
        BaseFlyoutContent.prototype.isActiveItemIndex = function (index) {
            return this.currentActivity.getActiveItemIndex() === index;
        };
        BaseFlyoutContent.prototype.createContent = function () {
            var content = $('<div>').addClass(BaseFlyoutContent.contentClassName);
            if (this.isNumberOfItemsWithinThreshold()) {
                content.addClass(BaseFlyoutContent.noScrollClassName);
            }
            for (var i = this.flyoutItemStartIndex; i < this.currentActivity.getItemCount(); i++) {
                var tileItemView = this.buildItemView(i);
                content.append(tileItemView.el);
            }
            return content;
        };
        BaseFlyoutContent.prototype.isNumberOfItemsWithinThreshold = function () {
            return this.currentActivity.attributes.Properties.Items.length <= BaseFlyoutContent.maxItemsThreshold + this.flyoutItemStartIndex;
        };
        BaseFlyoutContent.prototype.highlightTileItem = function (tileItemElement) {
            $(tileItemElement).siblings().removeClass(BaseFlyoutContent.selectedClassName);
            $(tileItemElement).addClass(BaseFlyoutContent.selectedClassName);
        };
        BaseFlyoutContent.prototype.setupClickHandlerToUpdateActiveItem = function (element, activity, index) {
            element.click(function (event) {
                activity.setActiveItemIndex(index);
                activity.save();
                GenericWorkflowDesigner.updateCurrentModel(activity);
                event.stopPropagation();
            });
        };
        BaseFlyoutContent.prototype.setupContextHandler = function (element, activity, index) {
            var _this = this;
            var self = this;
            element.contextmenu(function (event) {
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
                var flyoutControlContext = new GenericWorkflowDesigner.FlyoutControlContext(_this.currentActivity, GenericWorkflowDesigner.Settings.flyoutContentProvider.flyoutContentType.ContextFlyout);
                var contextMenu = GenericWorkflowDesigner.Settings.slotContextMenu.createFlyoutControl(flyoutControlContext);
                var content = self.itemContextFlyoutContentProvider.createContent(index);
                GenericWorkflowDesigner.Settings.flyoutLists.addContextMenuFlyoutControl(contextMenu);
                contextMenu.SetRootElement($(document.body));
                contextMenu.SetContent(content);
                contextMenu.SetEvent(event);
                contextMenu.Show();
                event.stopPropagation();
                return false;
            });
        };
        BaseFlyoutContent.contentClassName = "content";
        BaseFlyoutContent.noScrollClassName = "noScroll";
        BaseFlyoutContent.selectedClassName = "selected";
        BaseFlyoutContent.maxItemsThreshold = 5;
        return BaseFlyoutContent;
    })();
    GenericWorkflowDesigner.BaseFlyoutContent = BaseFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultItemContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultItemContextFlyoutContent = (function (_super) {
        __extends(DefaultItemContextFlyoutContent, _super);
        function DefaultItemContextFlyoutContent() {
            _super.apply(this, arguments);
        }
        DefaultItemContextFlyoutContent.prototype.initializeOptionsPropertyList = function () {
            this.optionsPropertyList = {
                Delete: { ID: 'delete', LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[DELETE]"], clickHandler: this.deleteItem }
            };
        };
        DefaultItemContextFlyoutContent.prototype.deleteItem = function (itemIndex) {
            var inReadOnly = this.currentActivity.getReadonlyMode();
            if (!inReadOnly) {
                var allowDelete = confirm(GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE DELETE]"]);
                if (allowDelete) {
                    this.deleteItemCore(itemIndex);
                }
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        DefaultItemContextFlyoutContent.prototype.deleteItemCore = function (itemIndex) {
            this.currentActivity.deleteItem(itemIndex);
            this.currentActivity.save();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
        };
        return DefaultItemContextFlyoutContent;
    })(GenericWorkflowDesigner.BaseItemContextFlyoutContent);
    GenericWorkflowDesigner.DefaultItemContextFlyoutContent = DefaultItemContextFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AttributesItemContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AttributesItemContextFlyoutContent = (function (_super) {
        __extends(AttributesItemContextFlyoutContent, _super);
        function AttributesItemContextFlyoutContent() {
            _super.apply(this, arguments);
        }
        return AttributesItemContextFlyoutContent;
    })(GenericWorkflowDesigner.DefaultItemContextFlyoutContent);
    GenericWorkflowDesigner.AttributesItemContextFlyoutContent = AttributesItemContextFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SegmentItemContextFlyoutContent.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SegmentItemContextFlyoutContent = (function (_super) {
        __extends(SegmentItemContextFlyoutContent, _super);
        function SegmentItemContextFlyoutContent() {
            _super.apply(this, arguments);
        }
        return SegmentItemContextFlyoutContent;
    })(GenericWorkflowDesigner.DefaultItemContextFlyoutContent);
    GenericWorkflowDesigner.SegmentItemContextFlyoutContent = SegmentItemContextFlyoutContent;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkspaceModeController.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkspaceModeController = (function () {
        function WorkspaceModeController(workspace) {
            this.workspace = null;
            this.zoomViewMode = null;
            this.multiSelectMode = null;
            this.workflowSwitchMode = null;
            this.multiselectButton = null;
            this.zoomViewButton = null;
            this.workflowSwitchButton = null;
            this.workflowValidateButton = null;
            this.workspace = workspace;
            this.multiSelectMode = new GenericWorkflowDesigner.MultiSelectMode(workspace);
            this.zoomViewMode = new GenericWorkflowDesigner.ZoomViewMode(this.workspace);
            this.workflowSwitchMode = new GenericWorkflowDesigner.WorkflowSwitchMode(this.workspace);
        }
        WorkspaceModeController.prototype.registerMultiselectButton = function (button) {
            this.multiselectButton = button;
        };
        WorkspaceModeController.prototype.registerZoomViewButton = function (button) {
            this.zoomViewButton = button;
        };
        WorkspaceModeController.prototype.registerWorkfowSwitchButton = function (button) {
            this.workflowSwitchButton = button;
        };
        WorkspaceModeController.prototype.registerWorkflowValidateButton = function (button) {
            this.workflowValidateButton = button;
        };
        WorkspaceModeController.prototype.activateWorkflow = function () {
            this.workflowSwitchMode.modeChanged();
        };
        WorkspaceModeController.prototype.deactivateWorklow = function () {
            this.workflowSwitchMode.modeChanged();
        };
        WorkspaceModeController.prototype.validateWorkflow = function () {
            this.workflowSwitchMode.modeChanged();
        };
        WorkspaceModeController.prototype.enableMultiselectView = function () {
            this.multiSelectMode.enableMode();
        };
        WorkspaceModeController.prototype.disableMultiselectView = function () {
            this.multiSelectMode.disableMode();
        };
        WorkspaceModeController.prototype.zoomIn = function () {
            this.zoomViewMode.ZoomIn();
        };
        WorkspaceModeController.prototype.zoomOut = function () {
            this.zoomViewMode.ZoomOut();
        };
        return WorkspaceModeController;
    })();
    GenericWorkflowDesigner.WorkspaceModeController = WorkspaceModeController;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiselectCommandButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var MultiselectCommandButton = (function () {
        function MultiselectCommandButton(workspaceModeController, buttonElement) {
            var _this = this;
            this.multiselectEnabled = false;
            this.workspaceModeController = null;
            this.buttonElement = null;
            this.workspaceModeController = workspaceModeController;
            this.buttonElement = buttonElement;
            this.workspaceModeController.registerMultiselectButton(this);
            this.buttonElement.click(function () {
                _this.execute();
            });
        }
        MultiselectCommandButton.prototype.execute = function () {
            this.multiselectEnabled = !this.multiselectEnabled;
            if (this.multiselectEnabled) {
                this.workspaceModeController.enableMultiselectView();
                this.enable();
            }
            else {
                this.workspaceModeController.disableMultiselectView();
                this.disable();
            }
        };
        MultiselectCommandButton.prototype.enable = function () {
            this.buttonElement.addClass("selected");
        };
        MultiselectCommandButton.prototype.disable = function () {
            this.buttonElement.removeClass("selected");
        };
        return MultiselectCommandButton;
    })();
    GenericWorkflowDesigner.MultiselectCommandButton = MultiselectCommandButton;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomViewCommandButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ZoomViewCommandButton = (function () {
        function ZoomViewCommandButton(workspaceModeController, buttonElement) {
            var _this = this;
            this.zoomIn = true;
            this.workspaceModeController = null;
            this.buttonElement = null;
            this.workspaceModeController = workspaceModeController;
            this.buttonElement = buttonElement;
            this.workspaceModeController.registerZoomViewButton(this);
            this.buttonElement.click(function () {
                _this.execute();
            });
        }
        ZoomViewCommandButton.prototype.execute = function () {
            this.zoomIn = !this.zoomIn;
            GenericWorkflowDesigner.zoomOut = !this.zoomIn;
            if (this.zoomIn == true) {
                this.workspaceModeController.zoomIn();
                this.activateZoomIn();
            }
            else {
                this.workspaceModeController.zoomOut();
                this.activateZoomOut();
            }
        };
        ZoomViewCommandButton.prototype.activateZoomIn = function () {
            this.buttonElement.removeClass("zoomInImage").addClass("zoomOutImage");
        };
        ZoomViewCommandButton.prototype.activateZoomOut = function () {
            this.buttonElement.removeClass("zoomOutImage").addClass("zoomInImage");
        };
        return ZoomViewCommandButton;
    })();
    GenericWorkflowDesigner.ZoomViewCommandButton = ZoomViewCommandButton;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiSelectMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var MultiSelectMode = (function () {
        function MultiSelectMode(workspace) {
            this.selectLineClass = "selectLine";
            this.pointMouseDown = new GenericWorkflowDesigner.Point(0, 0);
            this.pointMouseMove = new GenericWorkflowDesigner.Point(0, 0);
            this.mouseDown = false;
            this.deltaX = GenericWorkflowDesigner.Settings.layoutProperties.workspacePositionX;
            this.deltaY = GenericWorkflowDesigner.Settings.layoutProperties.workspacePositionY;
            this.workspace = workspace;
            this.containerEdgeScroller = new GenericWorkflowDesigner.ContainerEdgeScroller(workspace.$el);
        }
        MultiSelectMode.prototype.enableMode = function () {
            $(this.workspace.el)
                .bind("mousedown", { context: this }, this.mouseDownHandler);
            $(window).bind("mousemove", { context: this }, this.mouseMoveHandler)
                .bind("mouseup", { context: this }, this.mouseUpHandler);
        };
        MultiSelectMode.prototype.disableMode = function () {
            this.workspace.$el.unbind('mousedown', this.mouseDownHandler);
            $(window).unbind('mouseup', this.mouseUpHandler);
            $(window).unbind('mousemove', this.mouseMoveHandler);
        };
        MultiSelectMode.prototype.mouseDownHandler = function (event) {
            var self = event.data.context;
            self.containerEdgeScroller.initialize();
            self.pointMouseDown.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
            self.pointMouseDown.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
            self.mouseDown = true;
        };
        MultiSelectMode.prototype.mouseMoveHandler = function (event) {
            var self = event.data.context;
            if (!self.mouseDown) {
                return;
            }
            self.containerEdgeScroller.scrollIfCursorOnEdge(event.pageX, event.pageY);
            self.pointMouseMove.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
            self.pointMouseMove.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
            $("." + self.selectLineClass).remove();
            var rectangle = new GenericWorkflowDesigner.Rectangle(self.pointMouseDown, self.pointMouseMove);
            self.drawRectangle(rectangle);
            var latticePointRectangle = self.computeRowColumnSelect(rectangle);
            self.highlightSelections(latticePointRectangle);
        };
        MultiSelectMode.prototype.highlightSelections = function (latticeCoordinatesRectangle) {
            var deselected = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, false);
            var selections = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, true);
            GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(selections);
            jQuery.each(deselected, function (index, activity) {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.deselect.trigger(activity);
            });
            jQuery.each(selections, function (index, selection) {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.select.trigger(selection);
            });
            if (selections.length == 1) {
                GenericWorkflowDesigner.updateCurrentModel(selections[0]);
            }
        };
        MultiSelectMode.prototype.mouseUpHandler = function (event) {
            var self = event.data.context;
            self.containerEdgeScroller.stopScrolling();
            self.mouseDown = false;
            $("." + self.selectLineClass).remove();
        };
        MultiSelectMode.prototype.computeRowColumnSelect = function (rectangle) {
            var cellWidth = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing + GenericWorkflowDesigner.Settings.layoutProperties.width;
            var cellHeight = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing + GenericWorkflowDesigner.Settings.layoutProperties.height;
            var leftCol = Math.floor(rectangle.getLeft() / cellWidth);
            var rightCol = Math.floor(rectangle.getRight() / cellWidth);
            var topRow = Math.floor(rectangle.getTop() / cellHeight);
            var bottomRow = Math.floor(rectangle.getBottom() / cellHeight);
            var slotRectangleLeftTop = this.getPixelPositionsForSlotBoundaries(leftCol, topRow);
            var pointLeftTop = new GenericWorkflowDesigner.Point(rectangle.getLeft(), rectangle.getTop());
            if (!slotRectangleLeftTop.isPointInsideWidth(pointLeftTop)) {
                leftCol++;
            }
            if (!slotRectangleLeftTop.isPointInsideHeight(pointLeftTop)) {
                topRow++;
            }
            var latticePointCoordinateRectangle = new GenericWorkflowDesigner.Rectangle(new GenericWorkflowDesigner.Point(leftCol, topRow), new GenericWorkflowDesigner.Point(rightCol, bottomRow), false);
            return latticePointCoordinateRectangle;
        };
        MultiSelectMode.prototype.getPixelPositionsForSlotBoundaries = function (column, row) {
            var slotWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var slotHeight = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var spaceingWidth = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var spaceingHeight = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing;
            var leftCol = column * (slotWidth + spaceingWidth);
            var topRow = row * (slotHeight + spaceingHeight);
            var rightCol = leftCol + slotWidth;
            var bottomRow = topRow + slotHeight;
            return new GenericWorkflowDesigner.Rectangle(new GenericWorkflowDesigner.Point(leftCol, topRow), new GenericWorkflowDesigner.Point(rightCol, bottomRow));
        };
        MultiSelectMode.prototype.drawRectangle = function (rectangle) {
            var self = this;
            var lineWidth = 0;
            var segments = GenericWorkflowDesigner.Settings.graphics.createRectangleDOM(rectangle, this.selectLineClass, lineWidth);
            jQuery.each(segments, function (index, segment) {
                self.workspace.$el.append(segment);
            });
        };
        MultiSelectMode.prototype.isActivityInsideRectangle = function (activity, latticePointRectangle) {
            var row = activity.getRow();
            var col = activity.getCol();
            var point = new GenericWorkflowDesigner.Point(col, row);
            if (latticePointRectangle.isPointInsideWidth(point) && latticePointRectangle.isPointInsideHeight(point)) {
                return true;
            }
            return false;
        };
        MultiSelectMode.prototype.getActivitiesDependingOnSelection = function (latticePointRectangle, includedInRectangle) {
            var _this = this;
            var outside = 0;
            var inside = 1;
            var selectedActivities = [];
            var activityDictionary = [];
            $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities()).each(function (index, currentActivity) {
                activityDictionary[currentActivity.getActivityID()] = outside;
            });
            $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities()).each(function (indexActivity, currentActivity) {
                if (_this.isActivityInsideRectangle(currentActivity, latticePointRectangle)) {
                    activityDictionary[currentActivity.getActivityID()] = inside;
                    var dependentActivityList = currentActivity.getDependantActivities();
                    $(dependentActivityList).each(function (indexDependentActivity, dependentActivity) {
                        activityDictionary[dependentActivity.getActivityID()] = inside;
                    });
                }
            });
            var toSelect = includedInRectangle ? inside : outside;
            $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities()).each(function (index, currentActivity) {
                if (activityDictionary[currentActivity.getActivityID()] == toSelect) {
                    selectedActivities.push(currentActivity);
                }
            });
            return selectedActivities;
        };
        return MultiSelectMode;
    })();
    GenericWorkflowDesigner.MultiSelectMode = MultiSelectMode;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowSwitchMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkflowSwitchMode = (function () {
        function WorkflowSwitchMode(workspace) {
            this.workspace = null;
            this.workspace = workspace;
        }
        WorkflowSwitchMode.prototype.modeChanged = function () {
            this.workspace.fetchWorkflow();
        };
        return WorkflowSwitchMode;
    })();
    GenericWorkflowDesigner.WorkflowSwitchMode = WorkflowSwitchMode;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomViewMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ZoomViewMode = (function () {
        function ZoomViewMode(workspace) {
            this.workspace = null;
            this.workspace = workspace;
        }
        ZoomViewMode.prototype.ZoomIn = function () {
            this.workspace.$el.removeClass("zoomOut");
            GenericWorkflowDesigner.Settings.layoutProperties.width = GenericWorkflowDesigner.Settings.layoutProperties.zoomInWidth;
            this.refreshWorkspace();
        };
        ZoomViewMode.prototype.ZoomOut = function () {
            this.workspace.$el.addClass("zoomOut");
            GenericWorkflowDesigner.Settings.layoutProperties.width = GenericWorkflowDesigner.Settings.layoutProperties.zoomOutWidth;
            this.refreshWorkspace();
        };
        ZoomViewMode.prototype.refreshWorkspace = function () {
            this.workspace.render();
            this.workspace.scrollToTile('.slot.selected');
        };
        return ZoomViewMode;
    })();
    GenericWorkflowDesigner.ZoomViewMode = ZoomViewMode;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MinorContextListForGenericWorkflowDesigner.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var MinorContextListForGenericWorkflowDesigner = (function () {
        function MinorContextListForGenericWorkflowDesigner() {
        }
        MinorContextListForGenericWorkflowDesigner.GetMinorContext = function () {
            return [
                "[DEFINE TEMPLATE]",
                "[DRAG ELEMENT HERE]",
                "[ADD MARKETING LIST]",
                "[ACTION]",
                "[ADD REMOVE FROM LIST]",
                "[MARKETING LISTS]",
                "[ERROR FETCHING WORKFLOW DEFINITION]"
            ];
        };
        return MinorContextListForGenericWorkflowDesigner;
    })();
    GenericWorkflowDesigner.MinorContextListForGenericWorkflowDesigner = MinorContextListForGenericWorkflowDesigner;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutControlFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FlyoutControlFactory = (function () {
        function FlyoutControlFactory(flyoutStyleClass) {
            if (!flyoutStyleClass) {
                throw "Style is needed.";
            }
            this.flyoutStyleClass = flyoutStyleClass;
        }
        FlyoutControlFactory.prototype.createFlyoutControl = function (flyoutControlContext) {
            switch (flyoutControlContext.getActivity().getActivityTypeID()) {
                default:
                    return new GenericWorkflowDesigner.FlyoutControl(flyoutControlContext, this.flyoutStyleClass);
            }
        };
        return FlyoutControlFactory;
    })();
    GenericWorkflowDesigner.FlyoutControlFactory = FlyoutControlFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotHandlerProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SlotHandlerProvider = (function () {
        function SlotHandlerProvider() {
            this.slotTileHolderHandlerFactory = GenericWorkflowDesigner.Settings.slotHandlerFactory;
            this.slotInsertHorizontalHandlerFactory = GenericWorkflowDesigner.Settings.slotInsertHorizontalHandlerFactory;
            this.slotInsertVerticalHandlerFactory = GenericWorkflowDesigner.Settings.slotInsertVerticalHandlerFactory;
            this.slotIconHolderHandlerFactory = new GenericWorkflowDesigner.SlotIconHolderHandlerFactory();
        }
        SlotHandlerProvider.prototype.createFactory = function (slotModel) {
            switch (slotModel.getType()) {
                case GenericWorkflowDesigner.SlotType.TileHolder:
                    return this.slotTileHolderHandlerFactory;
                case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                    return this.slotInsertHorizontalHandlerFactory;
                case GenericWorkflowDesigner.SlotType.InsertVertical:
                    return this.slotInsertVerticalHandlerFactory;
                case GenericWorkflowDesigner.SlotType.IconHolder:
                    return this.slotIconHolderHandlerFactory;
                default:
                    throw Error(GenericWorkflowDesigner.Exception.SlotTypeNotSupported);
            }
        };
        SlotHandlerProvider.prototype.createDropHandler = function (slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createDropHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createClickHandler = function (slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createClickHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createDblClickHandler = function (slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createDblClickHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createContextHandler = function (slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createContextHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createDragHandler = function (slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createDragHandler(slotModel.getActivity());
        };
        return SlotHandlerProvider;
    })();
    GenericWorkflowDesigner.SlotHandlerProvider = SlotHandlerProvider;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SlotIconHolderHandlerFactory = (function () {
        function SlotIconHolderHandlerFactory() {
        }
        SlotIconHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
                default: return new GenericWorkflowDesigner.DefaultSlotIconHolderHandler(currentActivity);
            }
        };
        SlotIconHolderHandlerFactory.prototype.createClickHandler = function (currentActivity) {
            return null;
        };
        SlotIconHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        SlotIconHolderHandlerFactory.prototype.createContextHandler = function (currentActivity) {
            return null;
        };
        SlotIconHolderHandlerFactory.prototype.createDragHandler = function (currentActivity) {
            return null;
        };
        SlotIconHolderHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        SlotIconHolderHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        SlotIconHolderHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
        };
        return SlotIconHolderHandlerFactory;
    })();
    GenericWorkflowDesigner.SlotIconHolderHandlerFactory = SlotIconHolderHandlerFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
/// <reference path="../genericworkflowcommonreferences.ts" />
// -----------------------------------------------------------------------
// <copyright file="SlotInsertHorizontalHandlerFactoryMP.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SlotInsertHorizontalHandlerFactory = (function () {
        function SlotInsertHorizontalHandlerFactory() {
        }
        SlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
                default: return new GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler(currentActivity);
            }
        };
        SlotInsertHorizontalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
            return null;
        };
        SlotInsertHorizontalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        SlotInsertHorizontalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
            return null;
        };
        SlotInsertHorizontalHandlerFactory.prototype.createDragHandler = function (currentActivity) {
            return null;
        };
        SlotInsertHorizontalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        SlotInsertHorizontalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        SlotInsertHorizontalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
        };
        return SlotInsertHorizontalHandlerFactory;
    })();
    GenericWorkflowDesigner.SlotInsertHorizontalHandlerFactory = SlotInsertHorizontalHandlerFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotInsertHorizontalHandlerFactoryMP.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var SlotInsertVerticalHandlerFactory = (function () {
        function SlotInsertVerticalHandlerFactory() {
        }
        SlotInsertVerticalHandlerFactory.prototype.createDropHandler = function (currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
                default: return new GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler(currentActivity);
            }
        };
        SlotInsertVerticalHandlerFactory.prototype.createClickHandler = function (currentActivity) {
            return null;
        };
        SlotInsertVerticalHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        SlotInsertVerticalHandlerFactory.prototype.createContextHandler = function (currentActivity) {
            return null;
        };
        SlotInsertVerticalHandlerFactory.prototype.createDragHandler = function (currentActivity) {
            return null;
        };
        SlotInsertVerticalHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        SlotInsertVerticalHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        SlotInsertVerticalHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
        };
        return SlotInsertVerticalHandlerFactory;
    })();
    GenericWorkflowDesigner.SlotInsertVerticalHandlerFactory = SlotInsertVerticalHandlerFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="BaseActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var BaseActivityClickHandler = (function () {
        function BaseActivityClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        BaseActivityClickHandler.prototype.triggerHideMenusEvents = function () {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        BaseActivityClickHandler.prototype.canShowFlyout = function () {
            throw new Error("canShowFlyout method is not implmented");
        };
        BaseActivityClickHandler.prototype.showFlyout = function (elementClicked) {
            if (this.flyoutContentType == null || this.flyoutContentType == "") {
                throw new Error("flyoutContentType is not defined");
            }
            var flyoutControlContext = new GenericWorkflowDesigner.FlyoutControlContext(this.currentActivity, this.flyoutContentType);
            var flyout = GenericWorkflowDesigner.Settings.tileItemsMenu.createFlyoutControl(flyoutControlContext);
            GenericWorkflowDesigner.Settings.flyoutLists.addTileItemFlyoutControl(flyout);
            var content = GenericWorkflowDesigner.Settings.flyoutContentProvider.createContent(this.flyoutContentType, this.currentActivity);
            flyout.SetRootElement(elementClicked);
            flyout.SetContent(content);
            return flyout.Show();
        };
        BaseActivityClickHandler.prototype.clickCore = function (elementClicked) {
        };
        BaseActivityClickHandler.prototype.click = function (elementClicked) {
            if ($("#canvas").find(".stage-detail-container").length > 0 && elementClicked.find(".stage-detail-container").length == 0) {
                $("#canvas").find(".stage-detail-container").removeClass("selected");
            }
            if (elementClicked.find(".stage-detail-container").length > 0) {
                elementClicked.find(".stage-detail-container").addClass("selected");
            }
            this.triggerHideMenusEvents();
            this.clickCore(elementClicked);
            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
            if (this.canShowFlyout()) {
                return this.showFlyout(elementClicked);
            }
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
        };
        return BaseActivityClickHandler;
    })();
    GenericWorkflowDesigner.BaseActivityClickHandler = BaseActivityClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AttributeActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AttributeActivityClickHandler = (function (_super) {
        __extends(AttributeActivityClickHandler, _super);
        function AttributeActivityClickHandler(currentActivity) {
            _super.call(this, currentActivity);
            this.flyoutContentType = GenericWorkflowDesigner.FlyoutContentProvider.flyoutContentType.AttributesFlyout;
        }
        AttributeActivityClickHandler.prototype.canShowFlyout = function () {
            if (this.currentActivity.getItemCount() > 1) {
                return true;
            }
            return false;
        };
        return AttributeActivityClickHandler;
    })(GenericWorkflowDesigner.BaseActivityClickHandler);
    GenericWorkflowDesigner.AttributeActivityClickHandler = AttributeActivityClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultActivityClickHandler = (function (_super) {
        __extends(DefaultActivityClickHandler, _super);
        function DefaultActivityClickHandler() {
            _super.apply(this, arguments);
        }
        DefaultActivityClickHandler.prototype.canShowFlyout = function () {
            return false;
        };
        return DefaultActivityClickHandler;
    })(GenericWorkflowDesigner.BaseActivityClickHandler);
    GenericWorkflowDesigner.DefaultActivityClickHandler = DefaultActivityClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ABTestingContextFlyoutHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var BaseContextFlyoutHandler = (function () {
        function BaseContextFlyoutHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        BaseContextFlyoutHandler.prototype.getContentType = function () {
            throw new Error("Method getContentType not implemented.");
        };
        BaseContextFlyoutHandler.prototype.click = function (event) {
            var flyoutControlContext = new GenericWorkflowDesigner.FlyoutControlContext(this.currentActivity, GenericWorkflowDesigner.FlyoutContentProvider.flyoutContentType.ContextFlyout);
            var contextMenu = GenericWorkflowDesigner.Settings.slotContextMenu.createFlyoutControl(flyoutControlContext);
            GenericWorkflowDesigner.Settings.flyoutLists.addContextMenuFlyoutControl(contextMenu);
            var content = GenericWorkflowDesigner.Settings.flyoutContentProvider.createContent(this.getContentType(), this.currentActivity);
            contextMenu.SetRootElement($(document.body));
            contextMenu.SetContent(content);
            contextMenu.SetEvent(event);
            return contextMenu.Show();
        };
        return BaseContextFlyoutHandler;
    })();
    GenericWorkflowDesigner.BaseContextFlyoutHandler = BaseContextFlyoutHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultContextFlyoutHandler = (function (_super) {
        __extends(DefaultContextFlyoutHandler, _super);
        function DefaultContextFlyoutHandler() {
            _super.apply(this, arguments);
        }
        DefaultContextFlyoutHandler.prototype.getContentType = function () {
            return GenericWorkflowDesigner.FlyoutContentProvider.flyoutContentType.ContextFlyout;
        };
        return DefaultContextFlyoutHandler;
    })(GenericWorkflowDesigner.BaseContextFlyoutHandler);
    GenericWorkflowDesigner.DefaultContextFlyoutHandler = DefaultContextFlyoutHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDblClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultActivityDblClickHandler = (function () {
        function DefaultActivityDblClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        DefaultActivityDblClickHandler.prototype.dblclick = function (elementDblClicked) {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderDoubleClick);
            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
        };
        return DefaultActivityDblClickHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityDblClickHandler = DefaultActivityDblClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityDblClickHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var EmptyActivityDblClickHandler = (function () {
        function EmptyActivityDblClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        EmptyActivityDblClickHandler.prototype.dblclick = function (elementDblClicked) {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            $(GenericWorkflowDesigner.lblLibraryId).click();
            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
        };
        return EmptyActivityDblClickHandler;
    })();
    GenericWorkflowDesigner.EmptyActivityDblClickHandler = EmptyActivityDblClickHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDragHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultActivityDragHandler = (function () {
        function DefaultActivityDragHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        DefaultActivityDragHandler.prototype.drag = function (elementDragged) {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            GenericWorkflowDesigner.updateCurrentModel(this.currentActivity);
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
        };
        return DefaultActivityDragHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityDragHandler = DefaultActivityDragHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="BaseStackableActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var BaseStackableActivityDropHandler = (function (_super) {
        __extends(BaseStackableActivityDropHandler, _super);
        function BaseStackableActivityDropHandler() {
            _super.apply(this, arguments);
        }
        BaseStackableActivityDropHandler.prototype.getAllowedStackableActivityTypes = function () {
            return [];
        };
        BaseStackableActivityDropHandler.prototype.isDroppedActivityStackable = function (droppedActivityType) {
            var index = $.inArray(droppedActivityType, this.getAllowedStackableActivityTypes());
            return (index >= 0) ? true : false;
        };
        BaseStackableActivityDropHandler.prototype.stackingHandler = function (droppedActivityType) {
            var _this = this;
            var deferred = $.Deferred();
            this.currentActivity.addNewItem(droppedActivityType);
            this.currentActivity.save().done(function () {
                deferred.resolveWith(_this, [_this.currentActivity]);
            });
            return deferred.promise();
        };
        BaseStackableActivityDropHandler.prototype.nonStackingHandler = function (droppedActivityComponent) {
            var defaultDropHandler = new GenericWorkflowDesigner.DefaultActivityDropHandler(this.currentActivity);
            return defaultDropHandler.drop(droppedActivityComponent);
        };
        BaseStackableActivityDropHandler.prototype.drop = function (droppedActivityComponent) {
            var self = this;
            var rootActivity = droppedActivityComponent.getRoot();
            var droppedActivityType = rootActivity.getActivityTypeID();
            if (rootActivity.getActivityID() == undefined && self.isDroppedActivityStackable(droppedActivityType)) {
                return self.stackingHandler(droppedActivityType);
            }
            return self.nonStackingHandler(droppedActivityComponent);
        };
        return BaseStackableActivityDropHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.BaseStackableActivityDropHandler = BaseStackableActivityDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultActivityDropHandler = (function (_super) {
        __extends(DefaultActivityDropHandler, _super);
        function DefaultActivityDropHandler() {
            _super.apply(this, arguments);
        }
        DefaultActivityDropHandler.prototype.drop = function (droppedActivitiesComponent) {
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
        return DefaultActivityDropHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.DefaultActivityDropHandler = DefaultActivityDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultInsertSlotHorizontalDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultInsertSlotHorizontalDropHandler = (function (_super) {
        __extends(DefaultInsertSlotHorizontalDropHandler, _super);
        function DefaultInsertSlotHorizontalDropHandler() {
            _super.apply(this, arguments);
        }
        DefaultInsertSlotHorizontalDropHandler.prototype.drop = function (droppedActivitiesComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(droppedActivitiesComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                GenericWorkflowDesigner.Settings.workflowTree.insertActivityComponentAfter(self.currentActivity, droppedActivitiesComponent).done(function (insertedActivity) {
                    insertedActivity.saveActivityWithSubsequentActivities().done(function (activity) {
                        deferred.resolveWith(activity, [activity]);
                    });
                });
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped, droppedActivitiesComponent.getNodes()[0]);
            return deferred.promise();
        };
        DefaultInsertSlotHorizontalDropHandler.prototype.dropAllowed = function (droppedActivitiesComponent) {
            if (droppedActivitiesComponent.getRoot().getActivityID() == this.currentActivity.getActivityID() ||
                $.inArray(this.currentActivity, droppedActivitiesComponent.getNodes()) > -1) {
                return false;
            }
            return true;
        };
        return DefaultInsertSlotHorizontalDropHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler = DefaultInsertSlotHorizontalDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultInsertSlotVerticalDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultInsertSlotVerticalDropHandler = (function (_super) {
        __extends(DefaultInsertSlotVerticalDropHandler, _super);
        function DefaultInsertSlotVerticalDropHandler() {
            _super.apply(this, arguments);
        }
        DefaultInsertSlotVerticalDropHandler.prototype.drop = function (activityComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(activityComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(activityComponent).done(function () {
                self.insertActivityComponent(activityComponent).done(function (activity) {
                    deferred.resolveWith(activity, [activity]);
                });
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped, activityComponent.getNodes()[0]);
            return deferred.promise();
        };
        DefaultInsertSlotVerticalDropHandler.prototype.insertActivityComponent = function (droppedActivityComponent) {
            var parent = this.currentActivity.getParent();
            var index = this.currentActivity.getParentBranchID() + 1;
            return GenericWorkflowDesigner.Settings.workflowTree.insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
        };
        DefaultInsertSlotVerticalDropHandler.prototype.dropAllowed = function (activityComponent) {
            if (activityComponent.getRoot().getActivityID() == this.currentActivity.getActivityID() ||
                $.inArray(this.currentActivity, activityComponent.getNodes()) > -1) {
                return false;
            }
            return true;
        };
        return DefaultInsertSlotVerticalDropHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler = DefaultInsertSlotVerticalDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotIconHolderHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DefaultSlotIconHolderHandler = (function (_super) {
        __extends(DefaultSlotIconHolderHandler, _super);
        function DefaultSlotIconHolderHandler() {
            _super.apply(this, arguments);
        }
        DefaultSlotIconHolderHandler.prototype.drop = function (droppedActivityType) {
            var deferred = $.Deferred();
            deferred.resolve();
            return deferred.promise();
        };
        return DefaultSlotIconHolderHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.DefaultSlotIconHolderHandler = DefaultSlotIconHolderHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var EmptyActivityDropHandler = (function (_super) {
        __extends(EmptyActivityDropHandler, _super);
        function EmptyActivityDropHandler() {
            _super.apply(this, arguments);
        }
        EmptyActivityDropHandler.prototype.drop = function (droppedActivitiesComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(droppedActivitiesComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent).done(function () {
                var rootActivity = droppedActivitiesComponent.getRoot();
                var emptyActivityParentID = self.currentActivity.getParentActivityID();
                var emptyActivityBranchIndex = self.currentActivity.getParentBranchID();
                var emptyActivityID = self.currentActivity.getActivityID();
                if (self.currentActivity.getNextActivityID()) {
                    var emptyNextActivityID = self.currentActivity.getNextActivityID();
                }
                GenericWorkflowDesigner.Settings.workflowTree.remove(self.currentActivity);
                rootActivity.setParentActivityID(emptyActivityParentID);
                rootActivity.setParentBranchID(emptyActivityBranchIndex);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityReplacingEmptyTile, rootActivity, self.currentActivity);
                rootActivity.saveActivityWithSubsequentActivities()
                    .done(function (insertedActivity) {
                    deferred.resolveWith(insertedActivity, [insertedActivity]);
                });
                var activities = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                activities.forEach(function (childactivity) {
                    if (emptyActivityID != null && childactivity.getActivityTypeID() == "empty" && childactivity.getNextActivityID() == emptyActivityID) {
                        childactivity.setNextActivityID(rootActivity.getActivityID());
                    }
                });
                if (emptyNextActivityID) {
                    var defaultChild = rootActivity.getChildActivitiesSorted()[0];
                    defaultChild.setNextActivityID(emptyNextActivityID);
                    self.currentActivity.setNextActivityID(null);
                }
                var temp = self.currentActivity.getChildActivitiesSorted();
                if (temp.length > 0) {
                    var rootChild = rootActivity.getChildActivitiesSorted();
                    if (rootChild.length == 1 && rootChild[0].getActivityTypeID() == "empty") {
                        rootChild[0].setActivityID(rootChild[0].getParentActivityID() + Math.floor((Math.random() * 100) + 1));
                        temp[0].setParentActivityID(rootChild[0].getActivityID());
                    }
                    else {
                        temp[0].setParentActivityID(rootChild[0].getActivityID());
                    }
                    if (rootChild.length == 3) {
                        rootChild[0].setNextActivityID(temp[0].getActivityID());
                    }
                }
            });
            return deferred.promise();
        };
        EmptyActivityDropHandler.prototype.dropAllowed = function (droppedActivityComponent) {
            if ($.inArray(this.currentActivity, droppedActivityComponent.getOrphanChildren()) > -1) {
                return false;
            }
            return true;
        };
        return EmptyActivityDropHandler;
    })(GenericWorkflowDesigner.AbstractActivityDropHandler);
    GenericWorkflowDesigner.EmptyActivityDropHandler = EmptyActivityDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotVerticalMultiDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptyMultiDropHandler = (function () {
        function EmptyMultiDropHandler(slot) {
            this.slot = slot;
        }
        EmptyMultiDropHandler.prototype.drop = function (activityComponents) {
            var promise = null;
            var emptyDropHandler = new GenericWorkflowDesigner.EmptyActivityDropHandler(this.slot.getActivity());
            var firstComponent = activityComponents[0];
            var insertHorizontalDropHandler = new GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler(firstComponent.getRoot());
            var count = activityComponents.length;
            var preparedComponents = [firstComponent].concat(activityComponents.slice(1, count).reverse());
            jQuery.each(preparedComponents, function (index, component) {
                if (promise == null) {
                    promise = emptyDropHandler.drop(component);
                }
                else {
                    promise = promise.then(function () {
                        return insertHorizontalDropHandler.drop(component);
                    });
                }
            });
            return promise;
        };
        return EmptyMultiDropHandler;
    })();
    GenericWorkflowDesigner.EmptyMultiDropHandler = EmptyMultiDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotHorizontalMultiDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotHorizontalMultiDropHandler = (function () {
        function InsertSlotHorizontalMultiDropHandler(slot) {
            this.slot = slot;
        }
        InsertSlotHorizontalMultiDropHandler.prototype.drop = function (activityComponents) {
            var promise = null;
            var currentActivity = this.slot.getActivity();
            var parentActivity = currentActivity.getParent();
            var insertSlotHorizontalDropHandler = new GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler(currentActivity);
            var isRootActivity = (parentActivity == null);
            var defaultActivityDropHandler = null;
            if (!isRootActivity) {
                defaultActivityDropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory.createDropHandler(parentActivity);
            }
            jQuery.each(activityComponents, function (index, component) {
                if (promise == null) {
                    promise = insertSlotHorizontalDropHandler.drop(component);
                }
                else if (!isRootActivity) {
                    promise = promise.then(function () {
                        return defaultActivityDropHandler.drop(component);
                    });
                }
            });
            return promise;
        };
        return InsertSlotHorizontalMultiDropHandler;
    })();
    GenericWorkflowDesigner.InsertSlotHorizontalMultiDropHandler = InsertSlotHorizontalMultiDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotVerticalMultiDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotVerticalMultiDropHandler = (function () {
        function InsertSlotVerticalMultiDropHandler(slot) {
            this.slot = slot;
        }
        InsertSlotVerticalMultiDropHandler.prototype.drop = function (activityComponents) {
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
            var promise = null;
            jQuery.each(activityComponents.reverse(), function (index, component) {
                if (promise == null) {
                    promise = dropHandler.drop(component);
                }
                else {
                    promise = promise.then(function () {
                        return dropHandler.drop(component);
                    });
                }
            });
            return promise;
        };
        return InsertSlotVerticalMultiDropHandler;
    })();
    GenericWorkflowDesigner.InsertSlotVerticalMultiDropHandler = InsertSlotVerticalMultiDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var TileHolderMultiDropHandler = (function () {
        function TileHolderMultiDropHandler(slot) {
            this.slot = slot;
        }
        TileHolderMultiDropHandler.prototype.getTileHoldeMultiDropHandler = function () {
            switch (this.slot.getActivity().getActivityTypeID()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptyMultiDropHandler(this.slot);
                default:
                    return new GenericWorkflowDesigner.DefaultActivityMultiDropHandler(this.slot);
            }
        };
        TileHolderMultiDropHandler.prototype.drop = function (activityComponents) {
            var multiDropHandler = this.getTileHoldeMultiDropHandler();
            return multiDropHandler.drop(activityComponents);
        };
        return TileHolderMultiDropHandler;
    })();
    GenericWorkflowDesigner.TileHolderMultiDropHandler = TileHolderMultiDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="IconFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var IconFactory = (function () {
        function IconFactory() {
            this.iconTemplate = "";
            this.iconTemplate = '<div class="iconContainer"><img title="<%- tooltipText %>" src="<%- image %>" alt="<%- alt %>"></div>';
        }
        IconFactory.prototype.getIconAttributes = function (iconType) {
            switch (iconType) {
                case GenericWorkflowDesigner.SlotIconType.Link:
                    return new GenericWorkflowDesigner.ActivityLinkIconAttributes();
                case GenericWorkflowDesigner.SlotIconType.YesBranch:
                    return new GenericWorkflowDesigner.YesBranchIconAttributes();
                case GenericWorkflowDesigner.SlotIconType.NoBranch:
                    return new GenericWorkflowDesigner.NoBranchIconAttributes();
                default:
                    throw Error(GenericWorkflowDesigner.Exception.IconTypeDoesNotExists);
            }
        };
        IconFactory.prototype.createIcon = function (iconType) {
            var iconAttributes = this.getIconAttributes(iconType);
            var slotIconHolderTemplate = _.template(this.iconTemplate);
            return $(slotIconHolderTemplate(iconAttributes))[0];
        };
        return IconFactory;
    })();
    GenericWorkflowDesigner.IconFactory = IconFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    (function (SlotIconType) {
        SlotIconType[SlotIconType["Empty"] = 0] = "Empty";
        SlotIconType[SlotIconType["Link"] = 1] = "Link";
        SlotIconType[SlotIconType["YesBranch"] = 2] = "YesBranch";
        SlotIconType[SlotIconType["NoBranch"] = 3] = "NoBranch";
    })(GenericWorkflowDesigner.SlotIconType || (GenericWorkflowDesigner.SlotIconType = {}));
    var SlotIconType = GenericWorkflowDesigner.SlotIconType;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LandingPageLinkIconAttributes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ActivityLinkIconAttributes = (function () {
        function ActivityLinkIconAttributes() {
            this.title = GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[LINKED ACTIVITY]"];
            this.image = "images/Link.png";
            this.alt = "Link Activity";
            this.tooltipText = "Linked Activity";
        }
        return ActivityLinkIconAttributes;
    })();
    GenericWorkflowDesigner.ActivityLinkIconAttributes = ActivityLinkIconAttributes;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="NoBranchIconAttributes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var NoBranchIconAttributes = (function () {
        function NoBranchIconAttributes() {
            this.title = "No Branch";
            this.image = "images/No_16.png";
            this.alt = "Condition evaluates to No.";
            this.tooltipText = "Trigger Negative Branch Activity";
        }
        return NoBranchIconAttributes;
    })();
    GenericWorkflowDesigner.NoBranchIconAttributes = NoBranchIconAttributes;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="YesBranchIconAttributes.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var YesBranchIconAttributes = (function () {
        function YesBranchIconAttributes() {
            this.title = "Yes Branch";
            this.image = "images/Yes_16.png";
            this.alt = "Condition evaluates to Yes.";
            this.tooltipText = "Trigger Positive Branch Activity";
        }
        return YesBranchIconAttributes;
    })();
    GenericWorkflowDesigner.YesBranchIconAttributes = YesBranchIconAttributes;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractActivityTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var AbstractActivityTileInformation = (function () {
        function AbstractActivityTileInformation(activityModel, itemId) {
            this.activityModel = activityModel;
            this.itemId = itemId;
        }
        AbstractActivityTileInformation.prototype.GetItem = function () {
            var item = { attributes: {} };
            if (this.activityModel) {
                item = (typeof (this.itemId) === "undefined") ? this.activityModel.getActiveItem() : this.activityModel.getItem(this.itemId);
            }
            return item;
        };
        AbstractActivityTileInformation.prototype.GetDynamicAttributes = function () {
            var item = this.GetItem();
            return this.VirtualGetDynamicAttributes(item.attributes);
        };
        AbstractActivityTileInformation.prototype.VirtualGetDynamicAttributes = function (defaultAttributes) {
            return defaultAttributes;
        };
        AbstractActivityTileInformation.prototype.GetProperties = function () {
            throw new Error('method is abstract');
        };
        return AbstractActivityTileInformation;
    })();
    GenericWorkflowDesigner.AbstractActivityTileInformation = AbstractActivityTileInformation;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivityTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptyActivityTileInformation = (function (_super) {
        __extends(EmptyActivityTileInformation, _super);
        function EmptyActivityTileInformation() {
            _super.apply(this, arguments);
        }
        EmptyActivityTileInformation.prototype.GetProperties = function () {
            var result = {
                template: '',
                tileImageTemplate: '',
                image: null,
                alt: null,
                tileclass: 'emptyTile',
                tooltipText: "Drag Element Activity",
                emptyTitleText: "Drag Element Here",
                emptyTileTemplate: '<span class="slotTile ellipsis" title="<%- tooltipText %>"><%- emptyTitleText %><span>',
                emptyTileImageTemplate: '',
                activityTypeName: null
            };
            return result;
        };
        return EmptyActivityTileInformation;
    })(GenericWorkflowDesigner.AbstractActivityTileInformation);
    GenericWorkflowDesigner.EmptyActivityTileInformation = EmptyActivityTileInformation;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var AbstractActivityTree = (function (_super) {
        __extends(AbstractActivityTree, _super);
        function AbstractActivityTree() {
            _super.apply(this, arguments);
        }
        AbstractActivityTree.prototype.init = function () { };
        ;
        AbstractActivityTree.prototype.render = function (div, scale) { };
        ;
        AbstractActivityTree.prototype.serialize = function () { return; };
        ;
        return AbstractActivityTree;
    })(Backbone.View);
    GenericWorkflowDesigner.AbstractActivityTree = AbstractActivityTree;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractLibrary.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var AbstractLibrary = (function (_super) {
        __extends(AbstractLibrary, _super);
        function AbstractLibrary() {
            _super.apply(this, arguments);
            this.groups = [];
        }
        AbstractLibrary.prototype.init = function () { };
        ;
        AbstractLibrary.prototype.registerLibraryTile = function (libraryGroup, tile) { };
        ;
        AbstractLibrary.prototype.render = function () { };
        ;
        return AbstractLibrary;
    })(Backbone.View);
    GenericWorkflowDesigner.AbstractLibrary = AbstractLibrary;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractPropertyPage.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var AbstractPropertyPage = (function (_super) {
        __extends(AbstractPropertyPage, _super);
        function AbstractPropertyPage() {
            _super.apply(this, arguments);
            this.events = {
                "change div": "PropertyChanged"
            };
        }
        Object.defineProperty(AbstractPropertyPage.prototype, "Metadata", {
            get: function () {
                return this._metadata;
            },
            set: function (theBar) {
                this._metadata = theBar;
            },
            enumerable: true,
            configurable: true
        });
        AbstractPropertyPage.prototype.init = function () { };
        ;
        AbstractPropertyPage.prototype.render = function (propertyViewModel) { };
        ;
        AbstractPropertyPage.prototype.isValid = function () { return; };
        ;
        return AbstractPropertyPage;
    })(Backbone.View);
    GenericWorkflowDesigner.AbstractPropertyPage = AbstractPropertyPage;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractTile.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var AbstractTile = (function (_super) {
        __extends(AbstractTile, _super);
        function AbstractTile() {
            _super.apply(this, arguments);
            this.properties = {};
        }
        AbstractTile.prototype.init = function () { };
        AbstractTile.prototype.getTitle = function () { return ""; };
        ;
        AbstractTile.prototype.getFontIconChar = function () { return ""; };
        ;
        AbstractTile.prototype.getPropertyPage = function () { return; };
        ;
        AbstractTile.prototype.addPropertyPage = function (propertyPage) { };
        ;
        AbstractTile.prototype.render = function (renderType) { };
        ;
        AbstractTile.prototype.onError = function (e) { };
        ;
        AbstractTile.prototype.setProperty = function (propertyName, propertyValue) { };
        ;
        AbstractTile.prototype.getPropertyValue = function (propertyName) { return; };
        ;
        return AbstractTile;
    })(Backbone.View);
    GenericWorkflowDesigner.AbstractTile = AbstractTile;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractTreeNode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var AbstractTreeNode = (function (_super) {
        __extends(AbstractTreeNode, _super);
        function AbstractTreeNode() {
            _super.apply(this, arguments);
        }
        AbstractTreeNode.prototype.render = function (div) { };
        ;
        AbstractTreeNode.prototype.serialize = function (JsonString) { };
        ;
        return AbstractTreeNode;
    })(Backbone.View);
    GenericWorkflowDesigner.AbstractTreeNode = AbstractTreeNode;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Library.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var Library = (function (_super) {
        __extends(Library, _super);
        function Library(options) {
            _super.call(this, options);
            this.events = {
                "click div.hitarea": "toggleLibraryGroup"
            };
            this.delegateEvents();
        }
        Library.prototype.registerLibraryTile = function (libraryGroup, tile) {
            var tileArrayOfSpecificGroup = [];
            var groupExists = false;
            jQuery.each(this.groups, function (key, groupValue) {
                if (groupValue.key == libraryGroup) {
                    groupExists = true;
                    tileArrayOfSpecificGroup = groupValue.value;
                    tileArrayOfSpecificGroup.push(tile);
                    this.value = tileArrayOfSpecificGroup;
                }
            });
            if (!groupExists) {
                tileArrayOfSpecificGroup.push(tile);
                this.groups.push(new Collection.KeyValueCollection(libraryGroup, tileArrayOfSpecificGroup));
            }
        };
        ;
        Library.prototype.render = function () {
            this.$el.html('');
            var groups = this.groups;
            var componentsListDiv = $('<div class="componentsListDiv"></div>');
            var mainUl = $('<ul id="componentsList" class="list componentsList"></ul>');
            var elementLabelsArray = [];
            var searchComponentDiv = $('<span class="search-wrapper-span"><span id= "search-icon" class="CCFSymbolFont SearchButton-symbol search-icon-span" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '"></span><input id="search-criteria" type="text" name="search" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '" class="search-input searchPlaceholder" placeholder="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '..." title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '"/></span>');
            this.$el.append(searchComponentDiv);
            if (groups == null) {
                return;
            }
            if (groups.length > 0) {
                $(componentsListDiv).append(mainUl);
                this.$el.append(componentsListDiv);
            }
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                var groupName = group.key;
                var groupNode = $("<li class='listitem'><div class='hitarea' title='" + groupName + "'><span class='CCFSymbolFont ExpandList-symbol expaned-symbol-margin'></span></div><span class='folder ellipsis category' tabindex='" + GenericWorkflowDesigner.Settings.tabIndexValue + "' title='" + groupName + "'aria-label='" + groupName + "'>" + groupName + "</span></li>");
                groupNode.keydown(function (event) {
                    if (event.keyCode == 40) {
                        event.target.nextSibling.firstChild.focus();
                    }
                });
                $(mainUl).append(groupNode);
                if (group.value.length == 0) {
                    continue;
                }
                var subUl = $('<ul class="listitems"></ul>');
                $(groupNode).append(subUl);
                for (var j = 0; j < group.value.length; j++) {
                    var tileObject = group.value[j];
                    var typeId = Library.libraryElementPrefix + tileObject.properties["activitytypeid"];
                    if (tileObject.properties["activitytypeid"] == GenericWorkflowDesigner.BPFActivityType.Flow && !GenericWorkflowDesigner.Settings.isBPFApprovalFlowsEnabled) {
                        continue;
                    }
                    if (!(tileObject.properties["activitytypeid"] == "action" && !GenericWorkflowDesigner.Settings.isFeatureEnabled)) {
                        var wrapperLi = $("<li class='subitem' id='" + typeId + "'  tabindex='-1'></li>");
                        $(subUl).append(wrapperLi);
                        wrapperLi.keydown(function (event) {
                            if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 38) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 40)) {
                                !!event.target.nextSibling && event.target.nextSibling.focus();
                            }
                            if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 40) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 38)) {
                                !!event.target.previousSibling && event.target.previousSibling.focus();
                            }
                            if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39)) {
                                !!event.target.nextSibling && event.target.nextSibling.focus();
                            }
                            if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39) || (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37)) {
                                !!event.target.previousSibling && event.target.previousSibling.focus();
                            }
                        });
                        tileObject.$el = $(wrapperLi);
                        var imageRenderTypeValues = GenericWorkflowDesigner.BaseTileInformation.SetImageRenderType(tileObject.properties["imagerendertype"], tileObject.properties["icon"]);
                        tileObject.model = new GenericWorkflowDesigner.LibraryElementModel({ Title: tileObject.properties["name"], Tooltip: tileObject.properties["tooltip"], Image: imageRenderTypeValues["image"], DataURI: imageRenderTypeValues["dataUri"], FontIconImage: imageRenderTypeValues["fontIcon"], Alt: tileObject.properties["alttext"], ActivityTypeID: tileObject.properties["activitytypeid"] });
                        tileObject.options.canvasContainer = this.options.canvasContainer;
                        $(wrapperLi).attr("title", tileObject.properties["tooltip"]);
                        elementLabelsArray.push(tileObject.properties["name"]);
                        tileObject.render(GenericWorkflowDesigner.RenderType.LibraryView);
                        var isReadOnly = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot().getReadonlyMode();
                        if (isReadOnly == true) {
                            $(".componentsListDiv").addClass("disabled-components-div");
                        }
                        else {
                            $(".componentsListDiv").removeClass("disabled-components-div");
                        }
                    }
                }
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.libraryTabActivated);
            this.attachEventHandlers();
            this.setAutoCompleteArrayForSearch(elementLabelsArray);
        };
        ;
        Library.prototype.toggleLibraryGroup = function (event) {
            var elementToToggle = $(event.currentTarget).parent().find('ul');
            var arrowButton = $(event.currentTarget);
            if (elementToToggle.length == 0 || $(arrowButton).length == 0) {
                return;
            }
            if (elementToToggle.css('display') == 'block' || elementToToggle.css('display') == '') {
                elementToToggle.css('display', 'none');
                $(arrowButton).find(".CCFSymbolFont").removeClass("ExpandList-symbol");
                $(arrowButton).find(".CCFSymbolFont").addClass("CollapseList-symbol");
            }
            else {
                elementToToggle.css('display', 'block');
                $(arrowButton).find(".CCFSymbolFont").addClass("ExpandList-symbol");
                $(arrowButton).find(".CCFSymbolFont").removeClass("CollapseList-symbol");
            }
        };
        Library.prototype.attachEventHandlers = function () {
            $("#search-criteria").on("keyup", function () {
                var inputBoxText = $(this).val().toLowerCase();
                $(".lib-rowLabel").each(function () {
                    var labelText = $(this).text().toLowerCase();
                    $(this).closest('li')[labelText.indexOf(inputBoxText) !== -1 ? 'show' : 'hide']();
                });
            });
            $("#search-criteria").on("focusout", function () {
                $("#search-criteria").autocomplete("close");
            });
            $("#search-criteria").on("keydown", function (event) {
                $(".search-wrapper-span").find("#clearSearch").remove();
                $(".search-wrapper-span").find(".CCFSymbolFont").addClass("SearchButton-symbol search-icon-span");
                if (event.keyCode == 13) {
                    $(".search-wrapper-span").find(".CCFSymbolFont").removeClass("SearchButton-symbol search-icon-span");
                    var clearSearchDiv = $('<span id="clearSearch" class="clear-search-span" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") + '"aria-label="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") + '">x</span>');
                    $(".search-wrapper-span").append(clearSearchDiv);
                    $("#clearSearch").on("click keypress", function () {
                        $("#search-criteria").autocomplete("close");
                        $("#search-criteria").val("");
                        $(".lib-rowLabel").each(function () {
                            $(this).closest('li')['show']();
                        });
                        $(".search-wrapper-span").find("#clearSearch").remove();
                        $(".search-wrapper-span").find(".CCFSymbolFont").addClass("SearchButton-symbol search-icon-span");
                    });
                }
            });
            $("#search-icon").on("click keypress", function () {
                var input = $("#search-criteria").val();
                if (input !== "") {
                    var inputBoxText = $("#search-criteria").val().toLowerCase();
                    $(".lib-rowLabel").each(function () {
                        var labelText = $("#search-criteria").val().toLowerCase();
                        $("#search-criteria").closest('li')[labelText.indexOf(inputBoxText) !== -1 ? 'show' : 'hide']();
                    });
                    $(".search-wrapper-span").find(".CCFSymbolFont").removeClass("SearchButton-symbol search-icon-span");
                    var clearSearchDiv = $('<span id="clearSearch" class="clear-search-span" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") + '"aria-label="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") + '">x</span>');
                    $(".search-wrapper-span").append(clearSearchDiv);
                    $("#clearSearch").on("click keypress", function () {
                        $("#search-criteria").autocomplete("close");
                        $("#search-criteria").val("");
                        $(".lib-rowLabel").each(function () {
                            $(this).closest('li')['show']();
                        });
                        $(".search-wrapper-span").find("#clearSearch").remove();
                        $(".search-wrapper-span").find(".CCFSymbolFont").addClass("SearchButton-symbol search-icon-span");
                    });
                }
            });
        };
        Library.prototype.setAutoCompleteArrayForSearch = function (elementLabelsArray) {
            $("#search-criteria").autocomplete({
                source: elementLabelsArray,
                appendTo: ".search-wrapper-span",
                select: function (event, ui) {
                    $("#search-criteria").val(ui.item.value);
                    $("#search-criteria").autocomplete("close");
                    event.stopPropagation();
                }
            });
        };
        Library.libraryElementPrefix = "libraryElement";
        return Library;
    })(GenericWorkflowDesigner.AbstractLibrary);
    GenericWorkflowDesigner.Library = Library;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MDDPropertyPage.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var MDDPropertyPage = (function (_super) {
        __extends(MDDPropertyPage, _super);
        function MDDPropertyPage() {
            _super.apply(this, arguments);
        }
        MDDPropertyPage.prototype.discardButtonHandler = function (propertyViewModel) {
            var dialogDetails = {
                dialogTitle: "Default Dialog Title",
                dialogMessage: "Default Dialog Mesaage",
                messageType: 1
            };
            GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            this.render(propertyViewModel);
        };
        MDDPropertyPage.prototype.saveButtonHandler = function (propertyViewModel) {
            var editedItems = {};
            jQuery.each(this.Metadata, function (i, properties) {
                editedItems[properties.id] = $("#" + properties.id + "").val();
            });
            var temp = editedItems;
            GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateProperty, editedItems);
        };
        MDDPropertyPage.prototype.render = function (propertyViewModel) {
            var self = this;
            this.$el.html('');
            var mainDiv = $('<div></div>');
            var propertyPageTitleDiv = $("<div><h2>" + this.title + "</h2></div>");
            var propertyPageTag = "";
            this.$el.append(mainDiv);
            $(mainDiv).append(propertyPageTitleDiv);
            jQuery.each(this.Metadata, function (i, properties) {
                var startTag = "<br/><div class='propertyForm ellipsis'>";
                var htmlControl = GenericWorkflowDesigner.HTMLControlTemplates.getHTMLControl(properties.datatype, properties.id, properties.name);
                propertyPageTag = propertyPageTag + startTag + htmlControl + "</div>";
            });
            var propertyDataFromControl = propertyViewModel.preparePropertyDetails();
            var propertyPageTemplate = _.template(propertyPageTag);
            $(mainDiv).append(propertyPageTemplate(JSON.parse(propertyDataFromControl)));
            this.$el.find("button[id='saveButton']").on("click", function (event) {
                self.saveButtonHandler(propertyViewModel);
            });
            this.$el.find("button[id='discardButton']").on("click", function () {
                self.discardButtonHandler(propertyViewModel);
            });
            return this.$el;
        };
        return MDDPropertyPage;
    })(GenericWorkflowDesigner.AbstractPropertyPage);
    GenericWorkflowDesigner.MDDPropertyPage = MDDPropertyPage;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Tile.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(options) {
            _super.call(this, options);
            this.libraryTileTemplate = _.template('<span class="lib-iconContainer">' +
                '<%if(typeof(FontIconImage) != "undefined"){%><span class="CCFSymbolFont <%- FontIconImage %> lib-fonticon-size" title="<%- Tooltip %>"></span><%}%>' +
                '<%if(typeof(Image) != "undefined"){%><span class="lib-img-content lib-img-cont-float"  title="<%- Tooltip %>"><img class="tileImage" src="<%- Image %>" alt="<%- Alt %>"></img><%}%><%if(typeof(DataURI) != "undefined"){%><span class="lib-img-content lib-img-cont-float"  title="<%- Tooltip %>"><img class="tileImage" src="data:png;base64,<%- DataURI %>" alt="<%- Alt %>"></img><%}%>' +
                '</span >' +
                '</span>' +
                '<span class="lib-rowLabel ellipsis stringWrap categoryInner" title="<%- Tooltip %>"><%- Title %></span>');
        }
        Tile.prototype.makeDraggable = function () {
            var self = this;
            var scrollableOptions = {
                step: 20,
                timer: 25,
                scrollTriggerMargin: 180
            };
            var draggableOptions = {
                cursorAt: (GenericWorkflowDesigner.Settings.renderRTL === true) ? { bottom: 0, right: 0 } : { bottom: 0, left: 0 },
                appendTo: 'body',
                containment: 'window',
                refreshPositions: true,
                helper: function () {
                    var helperLibraryElement = new GenericWorkflowDesigner.HelperElementView({ model: self.model, el: self.$el.clone() });
                    var helper = helperLibraryElement.render().$el;
                    $(helper).addClass("dragInProgress");
                    $(helper).children(".categoryInner").addClass("dragInProgress");
                    $(helper).removeAttr("title");
                    $(helper).children(".categoryInner").removeAttr("title");
                    return helper;
                },
                start: function (event, ui) {
                    self.$el.addClass("selected");
                },
                stop: function (event, ui) {
                    self.$el.removeClass("selected");
                }
            };
            var dragDrop = new GenericWorkflowDesigner.ScrollableDragDrop();
            dragDrop.makeDraggable(this.$el, this.options.canvasContainer, draggableOptions, scrollableOptions);
        };
        Tile.prototype.addPropertyPage = function (propertyPage) {
            this.PropertyPage = propertyPage;
        };
        Tile.prototype.getPropertyPage = function () {
            return this.PropertyPage;
        };
        Tile.prototype.setProperty = function (propertyName, propertyValue) {
            this.properties[propertyName] = propertyValue;
        };
        ;
        Tile.prototype.render = function (renderType, context) {
            switch (renderType) {
                case GenericWorkflowDesigner.RenderType.LibraryView:
                    if (!GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot().getReadonlyMode()) {
                        this.makeDraggable();
                    }
                    this.$el.append(this.libraryTileTemplate(this.model.attributes));
                    var type = this.properties["activitytypeid"];
                    var activityClass = GenericWorkflowDesigner.BaseTileInformation.tileObjects[type].properties["tileclass"];
                    this.$el.addClass(activityClass);
                    this.$el.addClass(Tile.className);
                    break;
                case GenericWorkflowDesigner.RenderType.TreeView:
                    var tileFactory = new GenericWorkflowDesigner.TileFactoryView({ model: this.model });
                    this.$el.addClass(Tile.SlotTileClassName);
                    this.$el.html(tileFactory.render(context).el);
                    return this;
                case GenericWorkflowDesigner.RenderType.Mini:
                    break;
            }
        };
        ;
        Tile.className = "graphicElement";
        Tile.SlotTileClassName = "tile";
        return Tile;
    })(GenericWorkflowDesigner.AbstractTile);
    GenericWorkflowDesigner.Tile = Tile;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotGeneratorProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotGeneratorProvider = (function () {
        function SlotGeneratorProvider() {
        }
        SlotGeneratorProvider.prototype.createGeneratorFactory = function (slotType) {
            switch (slotType) {
                case GenericWorkflowDesigner.SlotType.TileHolder:
                    return new GenericWorkflowDesigner.SlotTileHolderGeneratorFactory();
                case GenericWorkflowDesigner.SlotType.InsertHorizontal:
                    return new GenericWorkflowDesigner.SlotInsertHorizontalGeneratorFactory();
                case GenericWorkflowDesigner.SlotType.InsertVertical:
                    return new GenericWorkflowDesigner.SlotInsertVerticalGeneratorFactory();
                case GenericWorkflowDesigner.SlotType.IconHolder:
                    return new GenericWorkflowDesigner.SlotIconHolderGeneratorFactory();
                case GenericWorkflowDesigner.SlotType.DetailsContainerPlaceholder:
                    return new GenericWorkflowDesigner.SlotDetailsContainerPlaceholderGeneratorFactory();
                default:
                    return new GenericWorkflowDesigner.SlotTileHolderGeneratorFactory();
            }
        };
        SlotGeneratorProvider.prototype.generateSlotsForActivity = function (activity) {
            var slotTypes = [GenericWorkflowDesigner.SlotType.TileHolder, GenericWorkflowDesigner.SlotType.InsertHorizontal, GenericWorkflowDesigner.SlotType.IconHolder];
            if (activity.getActivityTypeID() == "condition") {
                slotTypes.push(GenericWorkflowDesigner.SlotType.InsertVertical);
            }
            var slotsList = [];
            for (var i = 0; i < slotTypes.length; i++) {
                var slotGeneratorFactory = this.createGeneratorFactory(slotTypes[i]);
                var slot = slotGeneratorFactory.createSlotGenerator(activity).generateSlot();
                if (slot != null) {
                    slotsList.push(slot);
                }
            }
            return slotsList;
        };
        return SlotGeneratorProvider;
    })();
    GenericWorkflowDesigner.SlotGeneratorProvider = SlotGeneratorProvider;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconHolderGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotIconHolderGeneratorFactory = (function () {
        function SlotIconHolderGeneratorFactory() {
        }
        SlotIconHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
            switch (activity.getActivityTypeID()) {
                default:
                    return new GenericWorkflowDesigner.DefaultSlotIconHolderGenerator(activity);
            }
        };
        return SlotIconHolderGeneratorFactory;
    })();
    GenericWorkflowDesigner.SlotIconHolderGeneratorFactory = SlotIconHolderGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotInsertHorizontalGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotInsertHorizontalGeneratorFactory = (function () {
        function SlotInsertHorizontalGeneratorFactory() {
        }
        SlotInsertHorizontalGeneratorFactory.prototype.createSlotGenerator = function (activity) {
            switch (activity.getActivityTypeID()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptySlotInsertHorizontalGenerator(activity);
                default:
                    return new GenericWorkflowDesigner.DefaultSlotInsertHorizontalGenerator(activity);
            }
        };
        return SlotInsertHorizontalGeneratorFactory;
    })();
    GenericWorkflowDesigner.SlotInsertHorizontalGeneratorFactory = SlotInsertHorizontalGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotInsertVerticalGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotInsertVerticalGeneratorFactory = (function () {
        function SlotInsertVerticalGeneratorFactory() {
        }
        SlotInsertVerticalGeneratorFactory.prototype.createSlotGenerator = function (activity) {
            switch (activity.getActivityTypeID()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptySlotInsertVerticalGenerator(activity);
                default:
                    return new GenericWorkflowDesigner.DefaultSlotInsertVerticalGenerator(activity);
            }
        };
        return SlotInsertVerticalGeneratorFactory;
    })();
    GenericWorkflowDesigner.SlotInsertVerticalGeneratorFactory = SlotInsertVerticalGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotDetailsContainerPlaceholderGeneratorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotDetailsContainerPlaceholderGeneratorFactory = (function () {
        function SlotDetailsContainerPlaceholderGeneratorFactory() {
        }
        SlotDetailsContainerPlaceholderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
            return new GenericWorkflowDesigner.DefaultSlotDetailsContainerPlaceholderGenerator(activity);
        };
        return SlotDetailsContainerPlaceholderGeneratorFactory;
    })();
    GenericWorkflowDesigner.SlotDetailsContainerPlaceholderGeneratorFactory = SlotDetailsContainerPlaceholderGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotTileHolderGeneratorFactory = (function () {
        function SlotTileHolderGeneratorFactory() {
        }
        SlotTileHolderGeneratorFactory.prototype.createSlotGenerator = function (activity) {
            switch (activity.getActivityTypeID()) {
                default:
                    return new GenericWorkflowDesigner.DefaultSlotTileHolderGenerator(activity);
            }
        };
        return SlotTileHolderGeneratorFactory;
    })();
    GenericWorkflowDesigner.SlotTileHolderGeneratorFactory = SlotTileHolderGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractSlotGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var AbstractSlotGenerator = (function () {
        function AbstractSlotGenerator(activity) {
            this.activity = activity;
        }
        AbstractSlotGenerator.prototype.generateSlot = function () {
            throw new Error('method is abstract');
        };
        return AbstractSlotGenerator;
    })();
    GenericWorkflowDesigner.AbstractSlotGenerator = AbstractSlotGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotIconHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSlotIconHolderGenerator = (function (_super) {
        __extends(DefaultSlotIconHolderGenerator, _super);
        function DefaultSlotIconHolderGenerator() {
            _super.apply(this, arguments);
        }
        DefaultSlotIconHolderGenerator.prototype.generateSlot = function () {
            var parent = this.activity.getParent();
            if (parent == null) {
                return null;
            }
            return null;
        };
        return DefaultSlotIconHolderGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.DefaultSlotIconHolderGenerator = DefaultSlotIconHolderGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertHorizontalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSlotInsertHorizontalGenerator = (function (_super) {
        __extends(DefaultSlotInsertHorizontalGenerator, _super);
        function DefaultSlotInsertHorizontalGenerator() {
            _super.apply(this, arguments);
        }
        DefaultSlotInsertHorizontalGenerator.prototype.generateSlot = function () {
            return new GenericWorkflowDesigner.InsertSlotHorizontalView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertHorizontal) });
        };
        return DefaultSlotInsertHorizontalGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.DefaultSlotInsertHorizontalGenerator = DefaultSlotInsertHorizontalGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptySlotInsertHorizontalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptySlotInsertHorizontalGenerator = (function (_super) {
        __extends(EmptySlotInsertHorizontalGenerator, _super);
        function EmptySlotInsertHorizontalGenerator() {
            _super.apply(this, arguments);
        }
        EmptySlotInsertHorizontalGenerator.prototype.generateSlot = function () {
            return null;
        };
        return EmptySlotInsertHorizontalGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.EmptySlotInsertHorizontalGenerator = EmptySlotInsertHorizontalGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSlotInsertVerticalGenerator = (function (_super) {
        __extends(DefaultSlotInsertVerticalGenerator, _super);
        function DefaultSlotInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }
        DefaultSlotInsertVerticalGenerator.prototype.generateSlot = function () {
            return new GenericWorkflowDesigner.InsertSlotVerticalView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertVertical) });
        };
        return DefaultSlotInsertVerticalGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.DefaultSlotInsertVerticalGenerator = DefaultSlotInsertVerticalGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotDetailsContainerPlaceholderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSlotDetailsContainerPlaceholderGenerator = (function (_super) {
        __extends(DefaultSlotDetailsContainerPlaceholderGenerator, _super);
        function DefaultSlotDetailsContainerPlaceholderGenerator() {
            _super.apply(this, arguments);
        }
        DefaultSlotDetailsContainerPlaceholderGenerator.prototype.generateSlot = function () {
            return new GenericWorkflowDesigner.SlotDetailsContainerPlaceholderView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.DetailsContainerPlaceholder) });
        };
        return DefaultSlotDetailsContainerPlaceholderGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.DefaultSlotDetailsContainerPlaceholderGenerator = DefaultSlotDetailsContainerPlaceholderGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptySlotInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptySlotInsertVerticalGenerator = (function (_super) {
        __extends(EmptySlotInsertVerticalGenerator, _super);
        function EmptySlotInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }
        EmptySlotInsertVerticalGenerator.prototype.generateSlot = function () {
            return null;
        };
        return EmptySlotInsertVerticalGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.EmptySlotInsertVerticalGenerator = EmptySlotInsertVerticalGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SchedulerInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SchedulerInsertVerticalGenerator = (function (_super) {
        __extends(SchedulerInsertVerticalGenerator, _super);
        function SchedulerInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }
        SchedulerInsertVerticalGenerator.prototype.generateSlot = function () {
            //if ((<SchedulertActivity>this.activity).isNegativeBranchOfTrigger()) {
            //    return null;
            //}
            return new GenericWorkflowDesigner.InsertSlotVerticalView({ model: new GenericWorkflowDesigner.SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertVertical) });
        };
        return SchedulerInsertVerticalGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.SchedulerInsertVerticalGenerator = SchedulerInsertVerticalGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSlotTileHolderGenerator = (function (_super) {
        __extends(DefaultSlotTileHolderGenerator, _super);
        function DefaultSlotTileHolderGenerator() {
            _super.apply(this, arguments);
        }
        DefaultSlotTileHolderGenerator.prototype.generateSlot = function () {
            return new GenericWorkflowDesigner.SlotTileHolderView({ model: new GenericWorkflowDesigner.SlotModel(this.activity) });
        };
        return DefaultSlotTileHolderGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner.DefaultSlotTileHolderGenerator = DefaultSlotTileHolderGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ItemRenderingContext.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ItemRenderingContext = (function () {
        function ItemRenderingContext(itemStatus, itemIndex, zoom) {
            this.zoom = false;
            this.itemStatus = itemStatus;
            this.itemIndex = itemIndex;
            this.zoom = zoom;
        }
        return ItemRenderingContext;
    })();
    GenericWorkflowDesigner.ItemRenderingContext = ItemRenderingContext;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityValidationStatus.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    'use strict';
    (function (ActivityValidationStatus) {
        ActivityValidationStatus[ActivityValidationStatus["Valid"] = 0] = "Valid";
        ActivityValidationStatus[ActivityValidationStatus["Error"] = 4] = "Error";
    })(GenericWorkflowDesigner.ActivityValidationStatus || (GenericWorkflowDesigner.ActivityValidationStatus = {}));
    var ActivityValidationStatus = GenericWorkflowDesigner.ActivityValidationStatus;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyStatusView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptyStatusView = (function (_super) {
        __extends(EmptyStatusView, _super);
        function EmptyStatusView() {
            _super.apply(this, arguments);
        }
        EmptyStatusView.prototype.render = function () {
            this.$el = $('');
            return this;
        };
        return EmptyStatusView;
    })(Backbone.View);
    GenericWorkflowDesigner.EmptyStatusView = EmptyStatusView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ErrorStatusView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ErrorStatusView = (function (_super) {
        __extends(ErrorStatusView, _super);
        function ErrorStatusView(activity) {
            _super.call(this);
            this._activity = activity;
        }
        ErrorStatusView.prototype.initialize = function () {
            this._template = _.template('<span class="tileError" title=\"<%-errorMessage%>\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span><%-errorMessage%></span>');
            this._notificationFontIcon = "errorNotificationSymbol";
        };
        ErrorStatusView.prototype.render = function () {
            this.setErrorMessage();
            var html = this._template({ notificationFontIcon: this._notificationFontIcon, errorMessage: this._errorMessage });
            this.$el = $(html);
            return this;
        };
        ErrorStatusView.prototype.setErrorMessage = function () {
            var count = this._activity.getErrorCount();
            var message = count > 1 ? GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ErrorStatus_Message_Plural") : GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ErrorStatus_Message_Singular");
            var activityTileInfo = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityModel(this._activity);
            var activityProps = activityTileInfo.GetProperties();
            var activityType = (typeof activityProps.activityTypeName != 'undefined' && activityProps.activityTypeName) ? activityProps.activityTypeName : this._activity.getActivityTypeID();
            this._errorMessage = CommonTypes.Types.String.Format(message, count, activityType);
        };
        return ErrorStatusView;
    })(Backbone.View);
    GenericWorkflowDesigner.ErrorStatusView = ErrorStatusView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionCollection.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ActivityDefinitionCollection = (function (_super) {
        __extends(ActivityDefinitionCollection, _super);
        function ActivityDefinitionCollection() {
            _super.call(this, [], { model: GenericWorkflowDesigner.ActivityDefinitionModel });
        }
        ActivityDefinitionCollection.prototype.parse = function (response) {
            var convertedActivities = [];
            _.each(response, function (responseActivity) {
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.convertToConcreteActivityFromJSON(responseActivity);
                convertedActivities.push(activity);
            });
            return convertedActivities;
        };
        ActivityDefinitionCollection.prototype.sync = function (method, collection, options) {
            options || (options = {});
            switch (method) {
                case 'read':
                    {
                        return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.GetActivityDefinitions(collection, options);
                    }
            }
        };
        ActivityDefinitionCollection.prototype.UpdatePositions = function () {
            var row = 0;
            var startColumn = -1;
            var length = 0, maxLength = 0;
            var UpdatePositionsRecursive = function (root, column) {
                root.setRow(row);
                root.setCol(column);
                var children = root.getChildActivitiesSorted();
                var step = 0;
                for (var i = 0; i < children.length; i++) {
                    row += step;
                    step = 1;
                    if (root.attributes.ActivityTypeID == "condition" && children[i].attributes.ParentBranchID == 0) {
                        for (var j = 1; j < children.length; j++) {
                            length = children[j].getAllChildActivities().length;
                            if (length > maxLength) {
                                maxLength = length;
                            }
                        }
                        UpdatePositionsRecursive(children[i], column + maxLength + 3);
                    }
                    else {
                        UpdatePositionsRecursive(children[i], column + 1);
                    }
                }
            };
            var root = this.getWorkflowDefinitionRoot();
            UpdatePositionsRecursive(root, startColumn);
        };
        ActivityDefinitionCollection.prototype.getWorkflowDefinition = function () {
            return this.models;
        };
        ActivityDefinitionCollection.prototype.getWorkflowDefinitionRoot = function () {
            var root = null;
            this.models.every(function (activity) {
                if (!activity.getParent()) {
                    root = activity;
                    return false;
                }
                return true;
            });
            return root;
        };
        ActivityDefinitionCollection.prototype.getLeaves = function () {
            var leafs = [];
            this.forEach(function (activity) {
                if (activity.isLeaf())
                    leafs.push(activity);
            });
            return leafs;
        };
        ActivityDefinitionCollection.prototype.getActivitiesForSubsequentActivitiesGeneration = function () {
            var result = [];
            this.forEach(function (activity) {
                if (activity.needsSubsequentActivitiesGeneration())
                    result.push(activity);
            });
            return result;
        };
        return ActivityDefinitionCollection;
    })(Backbone.Collection);
    GenericWorkflowDesigner.ActivityDefinitionCollection = ActivityDefinitionCollection;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ActivityDefinitionModel = (function (_super) {
        __extends(ActivityDefinitionModel, _super);
        function ActivityDefinitionModel(options) {
            _super.call(this, options);
            this._displayName = "";
            this.idAttribute = 'ActivityID';
            this.id = this.attributes[this.idAttribute];
            this.defaults = {
                WorkflowID: null,
                ParentActivityID: null,
                ParentBranchID: 0,
                ActivityTypeID: GenericWorkflowDesigner.ActivityType.Empty,
                NextActivityID: GenericWorkflowDesigner.ActivityType.Empty,
                Properties: {}
            };
            this._warningMessages = {};
            this._errorMessages = {};
            this._validationMode = GenericWorkflowDesigner.ValidationMode.None;
        }
        Object.defineProperty(ActivityDefinitionModel.prototype, "slots", {
            get: function () {
                return this._slots;
            },
            set: function (slots) {
                this._slots = slots;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityDefinitionModel.prototype, "displayName", {
            get: function () {
                return this._displayName;
            },
            set: function (value) {
                this._displayName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivityDefinitionModel.prototype, "isValid", {
            get: function () {
                return this._isValid;
            },
            set: function (value) {
                this._isValid = value;
                this.trigger("change");
            },
            enumerable: true,
            configurable: true
        });
        ActivityDefinitionModel.prototype.getValidationMode = function () {
            return this._validationMode;
        };
        ActivityDefinitionModel.prototype.setValidationMode = function (validationMode) {
            this._validationMode = validationMode;
        };
        ActivityDefinitionModel.prototype.getErrorMessages = function () {
            return this._errorMessages;
        };
        ActivityDefinitionModel.prototype.getwarningMessages = function () {
            return this._warningMessages;
        };
        ActivityDefinitionModel.prototype.addErrorMessage = function (id, errorMessage) {
            this._errorMessages[id] = errorMessage;
        };
        ActivityDefinitionModel.prototype.addWarningMessage = function (id, warningMessage) {
            this._warningMessages[id] = warningMessage;
        };
        ActivityDefinitionModel.prototype.addMultipleErrorMessages = function (errors) {
            for (var id in errors) {
                this._errorMessages[id] = errors[id];
            }
        };
        ActivityDefinitionModel.prototype.addMultipleWarningMessages = function (warnings) {
            for (var id in warnings) {
                this._warningMessages[id] = warnings[id];
            }
        };
        ActivityDefinitionModel.prototype.clearErrorMessages = function () {
            for (var error in this._errorMessages) {
                delete this._errorMessages[error];
            }
        };
        ActivityDefinitionModel.prototype.clearWarningMessages = function () {
            for (var warning in this._warningMessages) {
                delete this._warningMessages[warning];
            }
        };
        ActivityDefinitionModel.prototype.validateActivity = function (attributeList) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        ActivityDefinitionModel.prototype.highLight = function () {
            if (!CommonTypes.Types.Object.isNullOrUndefined(this.slots)) {
                this.slots.forEach(function (slot) {
                    slot.highLight();
                });
            }
        };
        ActivityDefinitionModel.prototype.getErrorCount = function () {
            return 0;
        };
        ActivityDefinitionModel.prototype.getWarningCount = function () {
            return 0;
        };
        ActivityDefinitionModel.prototype.refreshActivity = function () {
        };
        ActivityDefinitionModel.prototype.getDefaultProperties = function () {
            return {
                Items: [],
                UI: { Row: 0, Col: 0, readonlyMode: false },
                ActiveItemIndex: 0
            };
        };
        ActivityDefinitionModel.prototype.initialize = function (options) {
            this.setWorkflowID(GenericWorkflowDesigner.workflowOID);
            if ($.isEmptyObject(this.get("Properties"))) {
                var properties = this.getDefaultProperties();
                this.set("Properties", properties);
            }
        };
        ActivityDefinitionModel.prototype.reinitialize = function (activity) {
        };
        ActivityDefinitionModel.prototype.sync = function (method, model, options) {
            options || (options = {});
            switch (method) {
                case 'create':
                    {
                        return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.CreateActivityDefinition(model, options);
                    }
                case 'read':
                    {
                        return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.GetActivityDefinition(model, options);
                    }
                case 'update':
                    {
                        return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.UpdateActivityDefinition(model, options);
                    }
                case 'delete':
                    {
                        return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.DeleteActivityDefinition(model, options);
                    }
            }
        };
        ActivityDefinitionModel.prototype.setValue = function (object, key, value) {
            object[key] = value;
            this.trigger("change");
        };
        ActivityDefinitionModel.prototype.getItemCount = function () {
            return this.get("Properties").Items.length;
        };
        ActivityDefinitionModel.prototype.getItem = function (itemId) {
            var topItem = this.get("Properties").Items[itemId];
            if (topItem == undefined)
                topItem = { ItemID: null, ActivityTypeID: GenericWorkflowDesigner.ActivityType.Empty };
            return new GenericWorkflowDesigner.ItemModel(topItem);
        };
        ActivityDefinitionModel.prototype.getActiveItem = function () {
            var index = this.getActiveItemIndex();
            return this.getItem(index);
        };
        ActivityDefinitionModel.prototype.getTopItemIndex = function () {
            return this.getActiveItemIndex();
        };
        ActivityDefinitionModel.prototype.IsEmpty = function (itemId) {
            var item;
            if (typeof (itemId) === "undefined") {
                item = this.getActiveItem();
            }
            else {
                item = this.getItem(itemId);
            }
            if (item.attributes['ItemID'] == null) {
                return true;
            }
            return false;
        };
        ActivityDefinitionModel.prototype.setActiveItemProperties = function (properties) {
            var index = this.getActiveItemIndex();
            this.setItemProperties(index, properties);
        };
        ActivityDefinitionModel.prototype.setItemProperties = function (itemIndex, properties) {
            var topItem = this.get("Properties").Items[itemIndex];
            $.extend(topItem, properties);
            this.trigger("change");
            this.refreshDependentTriggers();
        };
        ActivityDefinitionModel.prototype.refreshDependentTriggers = function () {
            if (this.canHaveDependentTriggers()) {
                var allChildActivities = this.getAllChildActivities();
                jQuery.each(allChildActivities, function (index, activity) {
                });
            }
        };
        ActivityDefinitionModel.prototype.canHaveDependentTriggers = function () {
            //if (this instanceof TriggerActivity || this instanceof SchedulertActivity) {
            //    return false;
            //}
            return this.GetTriggerOption().length > 0;
        };
        ActivityDefinitionModel.prototype.setActiveItemIndex = function (index) {
            this.get("Properties").ActiveItemIndex = index;
        };
        ActivityDefinitionModel.prototype.getActiveItemIndex = function () {
            return this.get("Properties").ActiveItemIndex;
        };
        ActivityDefinitionModel.prototype.getValidationStatus = function () {
            var activityStatus = GenericWorkflowDesigner.ActivityValidationStatus.Valid;
            jQuery.each(this.get("Properties").Items, function (index, item) {
                if (item[GenericWorkflowDesigner.ItemKeyProperties.stateKey] != null && parseInt(item[GenericWorkflowDesigner.ItemKeyProperties.stateKey]) == GenericWorkflowDesigner.ActivityValidationStatus.Error) {
                    activityStatus = GenericWorkflowDesigner.ActivityValidationStatus.Error;
                    return;
                }
            });
            return activityStatus;
        };
        ActivityDefinitionModel.prototype.getWorkflowID = function () {
            return this.get("WorkflowID");
        };
        ActivityDefinitionModel.prototype.setWorkflowID = function (value) {
            this.set("WorkflowID", value);
        };
        ActivityDefinitionModel.prototype.getActivityID = function () {
            return this.get("ActivityID");
        };
        ActivityDefinitionModel.prototype.setActivityID = function (value) {
            this.set("ActivityID", value);
        };
        ActivityDefinitionModel.prototype.getParentActivityID = function () {
            return this.get("ParentActivityID");
        };
        ActivityDefinitionModel.prototype.setParentActivityID = function (value) {
            this.set("ParentActivityID", value);
        };
        ActivityDefinitionModel.prototype.getParent = function () {
            return GenericWorkflowDesigner.Settings.workflowTree.getParent(this);
        };
        ActivityDefinitionModel.prototype.getParentBranchID = function () {
            return this.get("ParentBranchID");
        };
        ActivityDefinitionModel.prototype.setParentBranchID = function (value) {
            this.set("ParentBranchID", value);
        };
        ActivityDefinitionModel.prototype.getActivities = function () {
            return GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(this);
        };
        ActivityDefinitionModel.prototype.getChildActivitiesSorted = function () {
            return _.sortBy(this.getActivities(), function (activity) {
                return activity.getParentBranchID();
            });
        };
        ActivityDefinitionModel.prototype.getActivityTypeID = function () {
            return this.get("ActivityTypeID");
        };
        ActivityDefinitionModel.prototype.setActivityTypeID = function (activityType) {
            this.set("ActivityTypeID", activityType);
        };
        ActivityDefinitionModel.prototype.getNextActivityID = function () {
            return this.get("NextActivityID");
        };
        ActivityDefinitionModel.prototype.setNextActivityID = function (activityType) {
            this.set("NextActivityID", activityType);
        };
        ActivityDefinitionModel.prototype.getProperties = function () {
            return this.get("Properties");
        };
        ActivityDefinitionModel.prototype.setProperties = function (value) {
            this.set("Properties", value);
        };
        ActivityDefinitionModel.prototype.getRow = function () {
            return parseInt(this.get("Properties").UI.Row);
        };
        ActivityDefinitionModel.prototype.setRow = function (value) {
            this.setValue(this.get("Properties").UI, "Row", value);
        };
        ActivityDefinitionModel.prototype.getCol = function () {
            return parseInt(this.get("Properties").UI.Col);
        };
        ActivityDefinitionModel.prototype.setCol = function (value) {
            this.setValue(this.get("Properties").UI, "Col", value);
        };
        ActivityDefinitionModel.prototype.getReadonlyMode = function () {
            var readonlyMode = this.get("Properties").UI.readonlyMode;
            return (/^true$/i).test(readonlyMode);
        };
        ActivityDefinitionModel.prototype.setReadonlyMode = function (value) {
            this.setValue(this.get("Properties").UI, "readonlyMode", value);
        };
        ActivityDefinitionModel.prototype.getIsEditMode = function () {
            var isEditMode = false;
            switch (this.getActiveItem().get("isEditMode")) {
                case "False", false:
                    isEditMode = false;
                    break;
                case "True", true:
                    isEditMode = true;
                    break;
            }
            return isEditMode;
        };
        ActivityDefinitionModel.prototype.setIsEditMode = function (value) {
            this.setActiveItemProperties({ isEditMode: value });
        };
        ActivityDefinitionModel.prototype.addChildActivity = function (childActivity) {
            GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(this, childActivity);
        };
        ActivityDefinitionModel.prototype.getAllChildActivities = function () {
            return GenericWorkflowDesigner.Settings.workflowTree.getAllChildActivities(this);
        };
        ActivityDefinitionModel.prototype.addNewItem = function (activityType) {
            var tile = { ItemID: null, ActivityTypeID: activityType, Title: "Undefined" };
            if (this.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty)
                this.setActivityTypeID(activityType);
            this.get("Properties").Items.push(tile);
            this.setActiveItemIndex(this.getItemCount() - 1);
        };
        ActivityDefinitionModel.prototype.deleteItem = function (itemIndex) {
            var activeItemIndex = this.getActiveItemIndex();
            var itemCount = this.getItemCount();
            this.get("Properties").Items.splice(itemIndex, 1);
            if (activeItemIndex == (itemCount - 1)) {
                this.setActiveItemIndex(activeItemIndex - 1);
            }
        };
        ActivityDefinitionModel.prototype.isLeaf = function () {
            var count = this.getActivities().length;
            return count > 0 ? false : true;
        };
        ActivityDefinitionModel.prototype.getNextParentBranchID = function () {
            var childrenCount = this.getChildActivitiesSorted().length;
            return childrenCount;
        };
        ActivityDefinitionModel.prototype.getDefaultLeaf = function () {
            var childActivities = this.getChildActivitiesSorted();
            if (childActivities.length > 0) {
                var firstChild = childActivities[0];
                if (firstChild.isLeaf()) {
                    return firstChild;
                }
            }
            return undefined;
        };
        ActivityDefinitionModel.prototype.saveActivityWithSubsequentActivities = function () {
            var self = this;
            var deferred = $.Deferred();
            if (self.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                GenericWorkflowDesigner.Settings.workflowTree.add(self);
                deferred.resolveWith(self, [self]);
            }
            else {
                self.save().done(function () {
                    GenericWorkflowDesigner.Settings.workflowTree.add(self);
                    self.createSubsequentActivity().done(function () {
                        deferred.resolveWith(self, [self]);
                    });
                });
            }
            ;
            return deferred.promise();
        };
        ActivityDefinitionModel.prototype.createSubsequentActivity = function () {
            var self = this;
            var childPromises = [];
            var deferred = $.Deferred();
            var activities = GenericWorkflowDesigner.Settings.subsequentActivityGenerator.createChildActivities(self);
            $(activities).each(function (index, activity) {
                if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                    var promise = activity.saveActivityWithSubsequentActivities();
                    childPromises.push(promise);
                }
                else {
                    GenericWorkflowDesigner.Settings.workflowTree.add(activity);
                }
            });
            $.when.apply(self, childPromises).done(function () {
                deferred.resolve();
            });
            return deferred.promise();
        };
        ActivityDefinitionModel.prototype.convertToConcreteActivity = function () {
            var currentActivity = this;
            var convertedActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.convertToConcreteActivity(currentActivity);
            if (GenericWorkflowDesigner.Settings.workflowTree.has(currentActivity)) {
                GenericWorkflowDesigner.Settings.workflowTree.remove(currentActivity);
                GenericWorkflowDesigner.Settings.workflowTree.add(convertedActivity);
            }
            return convertedActivity;
        };
        ActivityDefinitionModel.prototype.canMove = function () {
            return true;
        };
        ActivityDefinitionModel.prototype.getDependantActivities = function () {
            var self = this;
            var dependentActivities = [];
            var childActivitiesList = this.getChildActivitiesSorted();
            jQuery.each(childActivitiesList, function (index, childActivity) {
                if (self.isDependentActivity(childActivity.getActivityTypeID())) {
                    dependentActivities.push(childActivity);
                }
            });
            return dependentActivities;
        };
        ActivityDefinitionModel.prototype.getCloneOfActivity = function () {
            var newActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(this.getActivityTypeID());
            newActivity.setWorkflowID(this.getWorkflowID());
            newActivity.setParentBranchID(this.getParentBranchID());
            var properties = this.getDefaultProperties();
            properties.Items = this.getProperties().Items;
            newActivity.set("Properties", properties);
            return newActivity;
        };
        ActivityDefinitionModel.prototype.toString = function () {
            var newline = "\n";
            var content = ">> Activity <<" + newline;
            content += "ActivityID : " + this.getActivityID() + newline;
            content += "BranchID : " + this.getParentBranchID() + newline;
            content += "ActivityTypeID : " + this.getActivityTypeID() + newline;
            content += "ParentID : " + this.getParentActivityID() + newline;
            content += "Row :" + this.getRow() + " Col :" + this.getCol() + newline;
            return content;
        };
        ActivityDefinitionModel.prototype.GetTriggerOption = function () {
            var triggerOptions = [];
            jQuery.each(this.getProperties().Items, function (index, item) {
                triggerOptions.push(new GenericWorkflowDesigner.TriggerOption(item.ActivityTypeID, item.ItemID));
            });
            return triggerOptions;
        };
        ActivityDefinitionModel.prototype.getAllowedDependentActivityTypes = function (position) {
            return [GenericWorkflowDesigner.ActivityType.All];
        };
        ActivityDefinitionModel.prototype.isDependentActivity = function (activityType) {
            var index = $.inArray(activityType, this.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical));
            return (index >= 0) ? true : false;
        };
        ActivityDefinitionModel.prototype.isBranchActivity = function () {
            var currentActivity = this;
            if (currentActivity.getActivityTypeID() == "condition") {
                return true;
            }
            else if (currentActivity.getParent() == null) {
                return false;
            }
            else if (currentActivity.getParent().getActivityTypeID() == "condition" && currentActivity.getParentBranchID() != 0) {
                return true;
            }
            else {
                return this.isParentConditionActivity(currentActivity);
            }
        };
        ActivityDefinitionModel.prototype.isParentConditionActivity = function (currentActivity) {
            var parent = currentActivity.getParent();
            if (parent == null) {
                return false;
            }
            else if (parent.getActivityTypeID() == "condition" && currentActivity.getParentBranchID() != 0) {
                return true;
            }
            else {
                return this.isParentConditionActivity(parent);
            }
        };
        ActivityDefinitionModel.prototype.getChildActivitiesToReparentForInsertAfter = function () {
            return this.getChildActivitiesSorted();
        };
        ActivityDefinitionModel.prototype.needsSubsequentActivitiesGeneration = function () {
            return this.isLeaf();
        };
        ActivityDefinitionModel.supportedEvents = {
            select: {
                name: "select",
                trigger: function (context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.select.name;
                    self.trigger(eventName);
                }
            },
            deselect: {
                name: "deselect",
                trigger: function (context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.deselect.name;
                    self.trigger(eventName);
                }
            },
            paste: {
                name: "paste",
                trigger: function (context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.paste.name;
                    self.trigger(eventName);
                }
            },
            dragInProgress: {
                name: "dragInProgress",
                trigger: function (context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.dragInProgress.name;
                    self.trigger(eventName);
                }
            },
            stopDragInProgress: {
                name: "stopDragInProgress",
                trigger: function (context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.stopDragInProgress.name;
                    self.trigger(eventName);
                }
            }
        };
        return ActivityDefinitionModel;
    })(Backbone.Model);
    GenericWorkflowDesigner.ActivityDefinitionModel = ActivityDefinitionModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Dimensions.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.setX = function (value) {
            this.x = value;
        };
        Point.prototype.getX = function () {
            return this.x;
        };
        Point.prototype.setY = function (value) {
            this.y = value;
        };
        Point.prototype.getY = function () {
            return this.y;
        };
        Point.prototype.toString = function () {
            var newline = "\n";
            var content = ">> Point <<" + newline;
            content += "x :" + this.x + " y :" + this.y + newline;
            return content;
        };
        return Point;
    })();
    GenericWorkflowDesigner.Point = Point;
    var Rectangle = (function () {
        function Rectangle(p1, p2, autoAdjust) {
            autoAdjust = (autoAdjust != false) ? true : false;
            if (autoAdjust) {
                this.autoAdjustCoordinates(p1, p2);
            }
            else {
                this.left = p1.getX();
                this.right = p2.getX();
                this.top = p1.getY();
                this.bottom = p2.getY();
            }
            this.height = this.bottom - this.top;
            this.width = this.right - this.left;
        }
        Rectangle.prototype.autoAdjustCoordinates = function (p1, p2) {
            this.left = this.min(p1.getX(), p2.getX());
            this.right = this.max(p1.getX(), p2.getX());
            this.top = this.min(p1.getY(), p2.getY());
            this.bottom = this.max(p1.getY(), p2.getY());
        };
        Rectangle.prototype.min = function (a, b) {
            return (a < b) ? a : b;
        };
        Rectangle.prototype.max = function (a, b) {
            return (a > b) ? a : b;
        };
        Rectangle.prototype.getLeft = function () {
            return this.left;
        };
        Rectangle.prototype.getRight = function () {
            return this.right;
        };
        Rectangle.prototype.getTop = function () {
            return this.top;
        };
        Rectangle.prototype.getBottom = function () {
            return this.bottom;
        };
        Rectangle.prototype.getHeight = function () {
            return this.height;
        };
        Rectangle.prototype.getWidth = function () {
            return this.width;
        };
        Rectangle.prototype.isPointInsideWidth = function (point) {
            var x = point.getX();
            if (x >= this.getLeft() && x <= this.getRight()) {
                return true;
            }
            return false;
        };
        Rectangle.prototype.isPointInsideHeight = function (point) {
            var y = point.getY();
            if (y >= this.getTop() && y <= this.getBottom()) {
                return true;
            }
            return false;
        };
        Rectangle.prototype.toString = function () {
            var newline = "\n";
            var content = ">>> Rectangle <<<" + newline;
            content += "[(" + this.left + ", " + this.top + "),(" + this.right + ", " + this.bottom + ")]" + newline;
            return content;
        };
        return Rectangle;
    })();
    GenericWorkflowDesigner.Rectangle = Rectangle;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ItemModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    GenericWorkflowDesigner.ItemModel = Backbone.Model.extend({
        defaults: {
            ActivityTypeID: "",
            Title: ""
        }
    });
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var LayoutProperties = (function () {
        function LayoutProperties(workspacePosition) {
            this.rows = 4;
            this.cols = 6;
            this.height = 88;
            this.width = 272;
            this.rowSpaceing = 38;
            this.colSpaceing = 40;
            this.lineWidth = 3;
            this.topMargin = 60;
            this.leftMargin = 30;
            this.insertSlotHorizontalOffset = 8;
            this.insertSlotVerticalOffset = 4;
            this.zoomInWidth = 272;
            this.miniMapHeight = 136;
            this.miniMapWidth = 233;
            this.tileHeight = 53;
            this.borderHeight = 1;
            this.connectorHeight = 22;
            this.connectorMargin = 15;
            this.clearOffset = 20;
            this.miniMapViewPortLeftPadding = 16;
            this.miniMapRatio = 0.10;
            this.workspacePositionX = workspacePosition.left;
            this.workspacePositionY = workspacePosition.top;
        }
        return LayoutProperties;
    })();
    GenericWorkflowDesigner.LayoutProperties = LayoutProperties;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryElementModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    GenericWorkflowDesigner.LibraryElementModel = Backbone.Model.extend({
        defaults: {
            Properties: {
                Title: "Undefined"
            }
        }
    });
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    GenericWorkflowDesigner.LibraryModel = Backbone.Model.extend({
        initialize: function (options) {
            this.set("LibraryNodes", GenericWorkflowDesigner.Settings.libraryNodesFactory.CreateLibraryNodes());
        }
    });
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    (function (SlotType) {
        SlotType[SlotType["TileHolder"] = 0] = "TileHolder";
        SlotType[SlotType["InsertHorizontal"] = 1] = "InsertHorizontal";
        SlotType[SlotType["InsertVertical"] = 2] = "InsertVertical";
        SlotType[SlotType["IconHolder"] = 3] = "IconHolder";
        SlotType[SlotType["DetailsContainerPlaceholder"] = 4] = "DetailsContainerPlaceholder";
    })(GenericWorkflowDesigner.SlotType || (GenericWorkflowDesigner.SlotType = {}));
    var SlotType = GenericWorkflowDesigner.SlotType;
    var SlotModel = (function (_super) {
        __extends(SlotModel, _super);
        function SlotModel(activity, type, iconType) {
            _super.call(this);
            this.set("activity", activity);
            this.set("type", (type != undefined) ? type : SlotType.TileHolder);
            this.set("iconType", (iconType != undefined) ? iconType : GenericWorkflowDesigner.SlotIconType.Empty);
        }
        SlotModel.prototype.getActivity = function () {
            return this.get("activity");
        };
        SlotModel.prototype.setActivity = function (value) {
            this.set("activity", value);
        };
        SlotModel.prototype.getType = function () {
            return this.get("type");
        };
        SlotModel.prototype.setType = function (value) {
            this.set("type", value);
        };
        SlotModel.prototype.getIconType = function () {
            return this.get("iconType");
        };
        SlotModel.prototype.setIconType = function (value) {
            this.set("iconType", value);
        };
        return SlotModel;
    })(Backbone.Model);
    GenericWorkflowDesigner.SlotModel = SlotModel;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="TriggerOption.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var TriggerOption = (function () {
        function TriggerOption(activityTypeId, itemId) {
            this.activityTypeID = activityTypeId;
            this.itemId = itemId;
        }
        TriggerOption.prototype.getActivityTypeID = function () {
            return this.activityTypeID;
        };
        TriggerOption.prototype.getItemID = function () {
            return this.itemId;
        };
        return TriggerOption;
    })();
    GenericWorkflowDesigner.TriggerOption = TriggerOption;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowEntityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    (function (WorkflowState) {
        WorkflowState[WorkflowState["Disabled"] = 0] = "Disabled";
        WorkflowState[WorkflowState["Active"] = 1] = "Active";
    })(GenericWorkflowDesigner.WorkflowState || (GenericWorkflowDesigner.WorkflowState = {}));
    var WorkflowState = GenericWorkflowDesigner.WorkflowState;
    var WorkflowEntityDefinitionModel = (function (_super) {
        __extends(WorkflowEntityDefinitionModel, _super);
        function WorkflowEntityDefinitionModel() {
            _super.apply(this, arguments);
            this.idAttribute = 'WorkflowID';
        }
        WorkflowEntityDefinitionModel.prototype.getWorkflowId = function () {
            return this.get("WorkflowID");
        };
        WorkflowEntityDefinitionModel.prototype.getEntityOid = function () {
            return this.get("EntityOID");
        };
        WorkflowEntityDefinitionModel.prototype.getMessageId = function () {
            return this.get("MessageID");
        };
        WorkflowEntityDefinitionModel.prototype.getState = function () {
            return this.get("State");
        };
        WorkflowEntityDefinitionModel.prototype.setState = function (value) {
            this.set("State", value);
        };
        WorkflowEntityDefinitionModel.prototype.getWorkflowTypeID = function () {
            return this.get("WorkflowTypeID");
        };
        WorkflowEntityDefinitionModel.prototype.getReadOnlyMode = function () {
            return this.get("ReadOnlyMode");
        };
        WorkflowEntityDefinitionModel.prototype.sync = function (method, model, options) {
            options || (options = {});
            switch (method) {
                case 'read':
                    {
                        return GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer.GetWorkflow(model, options);
                    }
                case 'update':
                    {
                        return GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer.UpdateWorkflowDefinition(model, options);
                    }
            }
        };
        return WorkflowEntityDefinitionModel;
    })(Backbone.Model);
    GenericWorkflowDesigner.WorkflowEntityDefinitionModel = WorkflowEntityDefinitionModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptyActivity.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EmptyActivity = (function (_super) {
        __extends(EmptyActivity, _super);
        function EmptyActivity(options) {
            _super.call(this, options);
            this.setActivityTypeID(GenericWorkflowDesigner.ActivityType.Empty);
        }
        EmptyActivity.prototype.IsEmpty = function () {
            return true;
        };
        EmptyActivity.prototype.canMove = function () {
            return false;
        };
        EmptyActivity.prototype.GetTriggerOption = function () {
            return [];
        };
        EmptyActivity.prototype.getAllowedDependentActivityTypes = function (slotType) {
            var parent = this.getParent();
            if (!parent) {
                return [];
            }
            return parent.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical);
        };
        return EmptyActivity;
    })(GenericWorkflowDesigner.ActivityDefinitionModel);
    GenericWorkflowDesigner.EmptyActivity = EmptyActivity;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractSubsequentSlots.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var AbstractSubsequentActivities = (function () {
        function AbstractSubsequentActivities(parentActivity) {
            this.parentActivity = parentActivity;
        }
        AbstractSubsequentActivities.prototype.createChildActivities = function () {
        };
        AbstractSubsequentActivities.prototype.createActivity = function (parentId, activityType) {
            var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(activityType);
            activity.setWorkflowID(GenericWorkflowDesigner.workflowOID);
            activity.setParentActivityID(parentId);
            return activity;
        };
        return AbstractSubsequentActivities;
    })();
    GenericWorkflowDesigner.AbstractSubsequentActivities = AbstractSubsequentActivities;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSubsequentSlots.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultSubsequentActivities = (function (_super) {
        __extends(DefaultSubsequentActivities, _super);
        function DefaultSubsequentActivities() {
            _super.apply(this, arguments);
            this.getConditionActivityForEmptyDrop = function (activity) {
                if (activity == null)
                    return null;
                var parent = activity.getParent();
                var finalActivityID = null;
                var branchID;
                if (parent != null && parent.getActivityTypeID() == "condition") {
                    var children = parent.getChildActivitiesSorted();
                    switch (children.length) {
                        case 0:
                            return null;
                        case 1:
                            branchID = children[0].getParentBranchID();
                            switch (branchID) {
                                case 0:
                                    if (children[0] != activity) {
                                        finalActivityID = children[0].getActivityID();
                                    }
                                    else {
                                        finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                    }
                                    break;
                                case 1:
                                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                    break;
                                case 2:
                                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                    break;
                            }
                            ;
                            break;
                        case 2:
                            branchID = children[0].getParentBranchID();
                            switch (branchID) {
                                case 0:
                                    if (children[0] != activity) {
                                        finalActivityID = children[0].getActivityID();
                                    }
                                    else {
                                        if (!finalActivityID)
                                            finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                    }
                                    break;
                                case 1:
                                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                                    break;
                            }
                            ;
                            break;
                        case 3:
                            if (children[0] != activity) {
                                finalActivityID = children[0].getActivityID();
                            }
                            else {
                                if (!finalActivityID)
                                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            }
                            break;
                    }
                    ;
                }
                else {
                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                }
                return finalActivityID;
            };
        }
        DefaultSubsequentActivities.prototype.createChildActivities = function () {
            if (this.parentActivity.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty || this.parentActivity.getActivities().length > 0) {
                return [];
            }
            var parentId = this.parentActivity.getActivityID();
            if (this.parentActivity.getNextActivityID() == null || this.parentActivity.getNextActivityID() == "empty")
                this.parentActivity.setNextActivityID(this.getConditionActivity(this.parentActivity));
            return null;
        };
        ;
        DefaultSubsequentActivities.prototype.getConditionActivity = function (parent) {
            var finalActivityID = null;
            var myActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
            if (parent.processStep != null && parent.processStep.nextStageId != null) {
                var nextstageID = parent.processStep.nextStageId;
                myActivities.forEach(function (activity1) {
                    if (nextstageID != null && activity1.processStep != null && activity1.processStep.stageId == nextstageID) {
                        finalActivityID = activity1.getActivityID();
                    }
                });
            }
            else {
                finalActivityID = this.getConditionActivityForEmptyDrop(parent);
            }
            return finalActivityID;
        };
        return DefaultSubsequentActivities;
    })(GenericWorkflowDesigner.AbstractSubsequentActivities);
    GenericWorkflowDesigner.DefaultSubsequentActivities = DefaultSubsequentActivities;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CommonTileInformation.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    GenericWorkflowDesigner.commonTileInformation = {
        commonTemplate: '<span class=\"tileTitle\" title=\"<%- Title %>\"><span class=\"tileTableCell\"><span class=\"tileInner ellipsis\"><%- Title %></span></span></span>',
        defaultEmptyTitleTemplate: '<span class="emptyTileTitle ellipsis" title="<%- tooltipText %>"><%- emptyTitleText %><span>',
        defaultTileImageTemplate: '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span>',
        defaultEmptyTileImageTemplate: '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span>'
    };
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var BaseTileInformation = (function (_super) {
        __extends(BaseTileInformation, _super);
        function BaseTileInformation(model, itemId) {
            _super.call(this, model, itemId);
        }
        BaseTileInformation.prototype.GetBasicTileProperties = function () {
            var activityType = this.activityModel.getActivityTypeID();
            var activityTypeAttributes = BaseTileInformation.tileObjects[activityType].properties;
            var imageRenderTypeValues = BaseTileInformation.SetImageRenderType(activityTypeAttributes["imagerendertype"], activityTypeAttributes["icon"]);
            var result = {
                template: GenericWorkflowDesigner.commonTileInformation.commonTemplate,
                tileImageTemplate: GenericWorkflowDesigner.commonTileInformation.defaultTileImageTemplate,
                dataURI: imageRenderTypeValues["dataUri"],
                alt: activityTypeAttributes["alttext"],
                tileclass: activityTypeAttributes["tileclass"],
                tooltipText: activityTypeAttributes["tooltip"],
                propertyPageurl: activityTypeAttributes["propertypageurl"],
                emptyTitleText: "",
                emptyTileTemplate: GenericWorkflowDesigner.commonTileInformation.defaultEmptyTitleTemplate,
                emptyTileImageTemplate: GenericWorkflowDesigner.commonTileInformation.defaultEmptyTileImageTemplate,
                image: imageRenderTypeValues["image"],
                fontIconImage: imageRenderTypeValues["fontIcon"],
                activityTypeName: null
            };
            return result;
        };
        BaseTileInformation.SetImageRenderType = function (renderType, imagePath) {
            var renderTypeValues = [];
            switch (renderType) {
                case "Image":
                    renderTypeValues["image"] = imagePath;
                    renderTypeValues["dataUri"] = undefined;
                    renderTypeValues["fontIcon"] = undefined;
                    break;
                case "DataUri":
                    renderTypeValues["image"] = undefined;
                    renderTypeValues["dataUri"] = GenericWorkflowDesigner.Settings.tileInformationFactory.GetDataUriforImagePath(imagePath);
                    renderTypeValues["fontIcon"] = undefined;
                    break;
                case "FontIcon":
                    renderTypeValues["image"] = undefined;
                    renderTypeValues["dataUri"] = undefined;
                    renderTypeValues["fontIcon"] = imagePath;
                    break;
            }
            return renderTypeValues;
        };
        BaseTileInformation.tileObjects = {};
        return BaseTileInformation;
    })(GenericWorkflowDesigner.AbstractActivityTileInformation);
    GenericWorkflowDesigner.BaseTileInformation = BaseTileInformation;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var CanvasView = (function (_super) {
        __extends(CanvasView, _super);
        function CanvasView(canvasContainer) {
            _super.call(this, { el: canvasContainer });
            this.viewList = [];
            this.$el.addClass(CanvasView.className);
            this.$el.parent().addClass(CanvasView.className);
            this.setupEvents();
        }
        CanvasView.prototype.setupEvents = function () {
            this.$el.on("mousedown", function (event) {
                $("#canvas").children(".hoverOverDroppable").removeClass("hoverOverDroppable").attr("aria-hidden", "true");
                $('#sortable').children().remove(".place-holder-listitem");
                $("#Add.toolbarItem").trigger("mouseleave");
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.resetToolbar);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                event.stopPropagation();
            });
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh, this.refreshWorkflowTree, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasFitToScreenEvent, this.invokeMiniMapView, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasZoomInEvent, this.invokeMiniMapView, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasZoomOutEvent, this.invokeMiniMapView, this);
        };
        CanvasView.prototype.fetchWorkflow = function () {
            var self = this;
            var promise = GenericWorkflowDesigner.Settings.workflowTree.fetch(GenericWorkflowDesigner.workflowAssociatedEntityOID, GenericWorkflowDesigner.workflowProviderType);
            promise.done(function () {
                self.render();
            });
        };
        CanvasView.prototype.renderSlots = function (activities) {
            var self = this;
            this.cleanOldViews();
            jQuery.each(activities, function (index, activity) {
                if (activity.getActivityTypeID() == "bpf_root")
                    return;
                activity.refreshActivity();
                var slotsList = GenericWorkflowDesigner.Settings.slotGeneratorProvider.generateSlotsForActivity(activity);
                activity.slots = slotsList;
                self.viewList.push(slotsList);
                jQuery.each(slotsList, function (slotIndex, slot) {
                    self.$el.append(slot.render().$el);
                    if (slot.model.getType() != GenericWorkflowDesigner.SlotType.IconHolder) {
                        self.listenTo(slot, GenericWorkflowDesigner.SlotTileHolderView.supportedEvents.paste.name, self.refreshWorkflowTree);
                        self.listenTo(slot, GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.name, self.dropLibraryElementHandler);
                        self.listenTo(slot, GenericWorkflowDesigner.SlotBase.supportedEvents.dropActivity.name, self.dropActivityHandler);
                    }
                });
            });
        };
        CanvasView.prototype.cleanOldViews = function () {
            var len = this.viewList.length;
            for (var i = 0; i < len; i++) {
                var ele = this.viewList[i];
                for (var j = 0; j < ele.length; j++) {
                    ele[j].unbind();
                    ele[j].remove();
                }
            }
            this.viewList = [];
        };
        CanvasView.prototype.invokeMiniMapView = function (zoomOutViewPort) {
            var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
            var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
            var tilesActualWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            $(".zoomOut .slot").css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $(".zoomOut .slot").css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $(".zoomOut .slotInsertHorizontal").css("height", 0);
            $(".zoomOut .slotInsertHorizontal").css("width", 0);
            $(".zoomOut .slotInsertVertical").css("height", 0);
            $(".zoomOut .slotInsertVertical").css("width", 0);
            $(".zoomOut .slotIconHolder").css("height", 0);
            $(".zoomOut .slotIconHolder").css("width", 0);
            $(".zoomOut .condition-footer-div").css("height", 0);
            $(".zoomOut .condition-footer-div").css("width", 0);
            $(".zoomOut .iconContainer").css("height", 0);
            $(".zoomOut .iconContainer").css("width", 0);
            $("#zoomoutdiv div.tile span.tileImageWrapper").css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile span.tileImageWrapper").css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile").css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile").css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.stageTile").css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.stageTile").css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.conditionTile").css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.conditionTile").css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            var minimap = new GenericWorkflowDesigner.MiniMapView();
            var canvasId = '#' + this.el.parentElement.id;
            var selectors = ['.line', '.tileImageWrapper'];
            minimap.renderMiniMap(canvasId, selectors, zoomOutViewPort);
            $("#mini-map-wrapper").css("visibility", miniMapWrapperVisibility);
            $("#show-mini-map-div").css("visibility", showMiniMapDivVisibility);
        };
        CanvasView.prototype.render = function () {
            if ($("#canvas").find(".stage-detail-container").length === 0) {
                GenericWorkflowDesigner.Settings.isNewStageAdded = false;
            }
            var zoomOutDiv = document.createElement("canvas");
            var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
            var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
            var tempZoomInWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var tempZoomInHeight = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var tempZoomInTileHeight = GenericWorkflowDesigner.Settings.layoutProperties.tileHeight;
            var tempZoomInLineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
            if (GenericWorkflowDesigner.designerType === GenericWorkflowDesigner.DesignerType.BpfDesigner) {
                tempZoomInLineWidth = 1;
            }
            var tempZoomInColSpacing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var tempZoomInRowSpacing = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing;
            var tempZoomInTopMargin = GenericWorkflowDesigner.Settings.layoutProperties.topMargin;
            for (var i = 0; i < 2; i++) {
                if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                    GenericWorkflowDesigner.Settings.layoutProperties.width = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties.height = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties.tileHeight = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties.lineWidth = tempZoomInLineWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing = tempZoomInColSpacing * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing = tempZoomInRowSpacing * ((tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) / tempZoomInHeight);
                    GenericWorkflowDesigner.Settings.layoutProperties.topMargin = tempZoomInTopMargin * ((tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) / tempZoomInHeight);
                    this.$el.addClass("zoomOut");
                }
                else {
                    GenericWorkflowDesigner.Settings.layoutProperties.width = tempZoomInWidth;
                    GenericWorkflowDesigner.Settings.layoutProperties.height = tempZoomInHeight;
                    GenericWorkflowDesigner.Settings.layoutProperties.tileHeight = tempZoomInTileHeight;
                    GenericWorkflowDesigner.Settings.layoutProperties.lineWidth = tempZoomInLineWidth;
                    GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing = tempZoomInColSpacing;
                    GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing = tempZoomInRowSpacing;
                    GenericWorkflowDesigner.Settings.layoutProperties.topMargin = tempZoomInTopMargin;
                    this.$el.removeClass("zoomOut");
                }
                this.scrollLeft = this.el.parentElement.scrollLeft;
                this.scrollTop = this.el.parentElement.scrollTop;
                this.clean();
                this.renderSlots(GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition());
                if (GenericWorkflowDesigner.Settings.isStageDeleted) {
                    CanvasView.resizeCanvasAreaBasedOnChildDivArea();
                }
                GenericWorkflowDesigner.Settings.graphics.drawTileConnectors(this);
                var self = this;
                $(document).one("ajaxStop", function () {
                    self.$el.data("loadState", "completed");
                    self.$el.trigger("loadCompleted");
                });
                if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = false;
                    zoomOutDiv.innerHTML = this.el.outerHTML;
                    var zoomOutDivHTML = this.el.outerHTML;
                    $('div#zoomoutdiv').remove();
                    $('div#canvasWrapper').append(zoomOutDivHTML.replace("\"canvas\"", "\"zoomoutdiv\""));
                    var zoomOutViewPort = $('div#zoomoutdiv')[0];
                }
            }
            $("div#canvasWrapper").css("position", "relative");
            $('div#zoomoutdiv').css("position", "absolute");
            $('div#zoomoutdiv').css("top", "0");
            $('div#zoomoutdiv').css("left", "0");
            $('div#zoomoutdiv').css("visibility", "hidden");
            $('div#zoomoutdiv').css("width", parseInt($('div#canvasWrapper').width()) * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $('div#zoomoutdiv').css("height", parseInt($('div#canvasWrapper').height()) * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            this.setZoomEvent();
            this.setMiniMapZoomEvent();
            var firstZoomCanvasWrapper = $(".zoomCanvasWrapper").first();
            if (firstZoomCanvasWrapper != null) {
                var secondZoomCanvasWrapper = firstZoomCanvasWrapper.next();
                if (secondZoomCanvasWrapper != null && secondZoomCanvasWrapper.children().size() === 0) {
                    secondZoomCanvasWrapper.remove();
                }
            }
            this.$el.parent().scrollLeft(this.scrollLeft);
            this.$el.parent().scrollTop(this.scrollTop);
            GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
            this.invokeMiniMapView(zoomOutViewPort);
            GenericWorkflowDesigner.Settings.renderMinimapFlag = true;
            this.addZoomIcons();
            $("#mini-map-wrapper").css("visibility", miniMapWrapperVisibility);
            $("#show-mini-map-div").css("visibility", showMiniMapDivVisibility);
            $(window).on("load", function (event) {
                $("#mini-map").trigger("mousedown");
                $("#mini-map").trigger("mouseup");
            });
            return this;
        };
        CanvasView.calculateCanvasDivChildArea = function (canvasDivChildren, canvasContentRect) {
            var leftmost = { left: 0, item: null };
            var rightmost = { right: 0, item: null };
            var topmost = { top: 0, item: null };
            var bottommost = { bottom: 0, item: null };
            var left = 0;
            var right = 0;
            var top = 0;
            var bottom = 0;
            $(canvasDivChildren).each(function () {
                var elementRect = CanvasView.Rect.ofElement(this);
                if (elementRect) {
                    elementRect = elementRect.relativeTo(canvasContentRect);
                    left = elementRect.left;
                    right = elementRect.right;
                    if (left < leftmost.left) {
                        leftmost.left = left;
                        leftmost.item = this;
                    }
                    if (right > rightmost.right) {
                        rightmost.right = right;
                        rightmost.item = this;
                    }
                    top = elementRect.top;
                    bottom = elementRect.bottom;
                    if (top < topmost.top) {
                        topmost.top = top;
                        topmost.item = this;
                    }
                    if (bottom > bottommost.bottom) {
                        bottommost.bottom = bottom;
                        bottommost.item = this;
                    }
                }
            });
            var canvasDivChildAreaWidth = rightmost.right - leftmost.left;
            var canvasDivChildAreaHeight = bottommost.bottom - topmost.top;
            var canvasDivChildArea = { canvasDivChildAreaWidth: canvasDivChildAreaWidth, canvasDivChildAreaHeight: canvasDivChildAreaHeight };
            return canvasDivChildArea;
        };
        CanvasView.resizeCanvasAreaBasedOnChildDivArea = function () {
            var canvasDiv = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)[0];
            var canvasDivChildren = $(canvasDiv).children();
            if (canvasDivChildren.length > 0) {
                var canvasContentRect = CanvasView.Rect.ofContent(canvasDiv);
                var canvasDivChildArea = CanvasView.calculateCanvasDivChildArea(canvasDivChildren, canvasContentRect);
                var canvasDivChildAreaWidth = canvasDivChildArea.canvasDivChildAreaWidth;
                var canvasDivChildAreaHeight = canvasDivChildArea.canvasDivChildAreaHeight;
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width(canvasDivChildAreaWidth + "px");
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).height(canvasDivChildAreaHeight + "px");
            }
        };
        CanvasView.prototype.addZoomIcons = function () {
            var zoomIconHolder = new GenericWorkflowDesigner.ZoomIconHolderView($(GenericWorkflowDesigner.zoomIconHolderId));
            zoomIconHolder.render();
        };
        CanvasView.prototype.setZoomEvent = function () {
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).css("border", "transparent");
            if (GenericWorkflowDesigner.ZoomConstants.initialCanvasWidth == 0)
                GenericWorkflowDesigner.ZoomConstants.initialCanvasWidth = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width();
            if (GenericWorkflowDesigner.ZoomConstants.initialCanvasHeight == 0)
                GenericWorkflowDesigner.ZoomConstants.initialCanvasHeight = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).height();
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("destroy");
            CanvasView.resizeCanvasAreaBasedOnChildDivArea();
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width($("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).get(0).scrollWidth);
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).height($("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).get(0).scrollHeight);
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
            var scaleToAdd = GenericWorkflowDesigner.ZoomConstants.currentZoomRatio - 1;
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
        };
        CanvasView.prototype.setMiniMapZoomEvent = function () {
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("destroy");
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).width($("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).get(0).scrollWidth);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).height($("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).get(0).scrollHeight);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
            var scaleToAdd = GenericWorkflowDesigner.ZoomConstants.currentZoomRatio - 1;
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
        };
        CanvasView.prototype.clean = function () {
            this.$el.children().remove();
        };
        CanvasView.prototype.scrollToTile = function (tileSelector) {
            var childItem = this.$el.find(tileSelector);
            if (childItem.length == 0)
                return;
            var slotLeftPosition = parseInt(childItem.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName()).replace('px', ''));
            var slotTopPosition = parseInt(childItem.css('top').replace('px', ''));
            var canvasWidth = this.$el.width();
            var canvasHeight = this.$el.height();
            var horizontalOffset = 400;
            var verticleOffset = 80;
            if (slotLeftPosition > canvasWidth) {
                if (GenericWorkflowDesigner.Settings.renderRTL) {
                    this.$el.scrollRight((slotLeftPosition - canvasWidth) + horizontalOffset);
                }
                else {
                    this.$el.scrollLeft((slotLeftPosition - canvasWidth) + horizontalOffset);
                }
            }
            if (slotTopPosition > canvasHeight) {
                this.$el.scrollTop((slotTopPosition - canvasHeight) + verticleOffset);
            }
        };
        CanvasView.prototype.dropLibraryElementHandler = function (slot, libraryElement) {
            var _this = this;
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            var activityDropController = GenericWorkflowDesigner.Settings.activityDropHandlerFactory.createDropActivityController(slot.model);
            activityDropController.dropLibraryElement(libraryElement).done(function (activity) {
                if (activity != undefined) {
                    _this.refreshWorkflowTree();
                    GenericWorkflowDesigner.updateCurrentModel(activity);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.runValidation);
                    var selectedItem = _this.$el.find('.slot.selected');
                    if (selectedItem.length > 0) {
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                    }
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                    activity.highLight();
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                }
            });
            stopwatch.stop();
            localStorage.setItem("PerfMarker_" + libraryElement.attributes.Title.replace("/", "").replace(/ /g, '') + "Drop", stopwatch.elapsedMilliseconds.toString());
        };
        CanvasView.prototype.dropActivityHandler = function (slot) {
            var _this = this;
            var extractor = new GenericWorkflowDesigner.ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor.getConnectedComponentsFromSelection(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities());
            var activityDropController = new GenericWorkflowDesigner.ActivityDropController(slot.model);
            activityDropController.dropMultipleComponents(connectedComponents).done(function (activity) {
                GenericWorkflowDesigner.updateCurrentModel(activity);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped, activity);
                _this.refreshWorkflowTree();
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                activity.highLight();
            });
        };
        CanvasView.prototype.refreshWorkflowTree = function () {
            var _this = this;
            GenericWorkflowDesigner.Settings.workflowTree.createSubsequentActivities().done(function () {
                GenericWorkflowDesigner.Settings.workflowTree.UpdatePositions();
                if ($("#canvas").find(".stage-detail-container").length == 1) {
                    _this.render();
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.propertyMessageReceived);
                }
                else {
                    _this.render();
                }
                if ($('#canvas').children("div .slot").first().length > 0) {
                    $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile").attr("tabindex", GenericWorkflowDesigner.Settings.tabIndexValue);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.setKeyDownEvents);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
                }
            });
        };
        CanvasView.prototype.drawTileConnectors = function () {
            var self = this;
            var workflowDefinition = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
            $.each(workflowDefinition, function (index, activity) {
                var parentActivity = activity.getParent();
                if (parentActivity != null && parentActivity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Root) {
                    self.drawConnector(parentActivity, activity);
                }
            });
        };
        CanvasView.prototype.drawConnector = function (parentActivity, childActivity) {
            var _this = this;
            var row1 = parentActivity.getRow();
            var col1 = parentActivity.getCol();
            var row2 = childActivity.getRow();
            var col2 = childActivity.getCol();
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var startPoint = new GenericWorkflowDesigner.Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
            var endPoint = new GenericWorkflowDesigner.Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));
            var connectorSegments = GenericWorkflowDesigner.Settings.graphics.createConnectorDOM(startPoint, endPoint, "line", null);
            $.each(connectorSegments, function (index, segment) {
                _this.$el.append(segment);
            });
        };
        CanvasView.className = "canvas";
        CanvasView.fracs = $.fracs;
        CanvasView.Rect = CanvasView.fracs.Rect;
        return CanvasView;
    })(Backbone.View);
    GenericWorkflowDesigner.CanvasView = CanvasView;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="GoalsView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var GoalsView = (function (_super) {
        __extends(GoalsView, _super);
        function GoalsView(options) {
            _super.call(this, options);
            GoalsView.className = "goals";
            var self = this;
            this.$el.parent().on("tabsactivate", function (event, ui) {
                self.render();
            });
            this.$el.addClass(GoalsView.className);
        }
        GoalsView.prototype.render = function () {
            var self = this;
            var baseUrl = "#";
            this.$el.html("<div class='goals'><iframe id='goals' style='min-height: 459px'></iframe></div>");
            this.taskFrame = this.$el.find('iframe');
            this.taskFrame.attr('src', baseUrl);
            this.taskFrame.load(function () {
                self.$el.data("loadState", "completed");
                self.$el.trigger("loadCompleted");
            });
            return this.$el;
        };
        return GoalsView;
    })(Backbone.View);
    GenericWorkflowDesigner.GoalsView = GoalsView;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="HelperElementView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var HelperElementView = (function (_super) {
        __extends(HelperElementView, _super);
        function HelperElementView(options) {
            _super.call(this, options);
            this.$el.data(HelperElementView.modelDataKey, this.model);
            this.$el.addClass(HelperElementView.className);
        }
        HelperElementView.prototype.render = function () {
            var type = this.model.get("ActivityTypeID");
            var activityClass = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityType(type).GetProperties().tileclass;
            if (!this.$el.hasClass(activityClass)) {
                this.$el.html(GenericWorkflowDesigner.TileFactoryView.getImageTileViewHtml(type));
                var activityClass = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityType(type).GetProperties().tileclass;
                this.$el.addClass(activityClass);
            }
            return this;
        };
        HelperElementView.className = "helper";
        HelperElementView.modelDataKey = GenericWorkflowDesigner.Library.libraryElementPrefix;
        return HelperElementView;
    })(Backbone.View);
    GenericWorkflowDesigner.HelperElementView = HelperElementView;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotBase.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotBase = (function (_super) {
        __extends(SlotBase, _super);
        function SlotBase() {
            _super.apply(this, arguments);
        }
        SlotBase.prototype.initialize = function () {
            if (!this.model.getActivity().getReadonlyMode()) {
                this.makeDroppable();
            }
        };
        SlotBase.prototype.render = function () { };
        SlotBase.prototype.highLight = function () { };
        SlotBase.prototype.getValidDroppables = function () {
            var activity = this.model.getActivity();
            if (!activity) {
                return '';
            }
            activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.convertToConcreteActivity(activity);
            var droppables = activity.getAllowedDependentActivityTypes(this.model.getType()).map(function (activityType) {
                if (activityType == GenericWorkflowDesigner.ActivityType.All) {
                    var emptyTileClassName = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityType(GenericWorkflowDesigner.ActivityType.Empty).GetProperties().tileclass;
                    return '.' + SlotBase.className + ":not(:has(." + emptyTileClassName + "))" + ", ." + SlotBase.acceptLibraryElement;
                }
                var tileClass = '.' + GenericWorkflowDesigner.BaseTileInformation.tileObjects[activityType].properties["tileclass"];
                return tileClass + ", .slot:has(" + tileClass + ")";
            });
            return droppables.join(", ");
        };
        ;
        SlotBase.prototype.makeDroppable = function () {
            var self = this;
            $.ui.ddmanager.prepareOffsets = function (t, event) {
                var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                droppablesLoop: for (i = 0; i < m.length; i++) {
                    if (m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0], (t.currentItem || t.element)))) {
                        continue;
                    }
                    for (j = 0; j < list.length; j++) {
                        if (list[j] === m[i].element[0]) {
                            m[i].proportions.height = 0;
                            continue droppablesLoop;
                        }
                    }
                    m[i].visible = m[i].element.css("display") !== "none";
                    if (!m[i].visible) {
                        continue;
                    }
                    if (type === "mousedown") {
                        m[i]._activate.call(m[i], event);
                    }
                    m[i].offset = m[i].element.offset();
                    if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio) {
                        m[i].proportions = { width: m[i].element[0].offsetWidth * GenericWorkflowDesigner.ZoomConstants.currentZoomRatio, height: m[i].element[0].offsetHeight * GenericWorkflowDesigner.ZoomConstants.currentZoomRatio };
                    }
                    else {
                        m[i].proportions = { width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight };
                    }
                }
            };
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
                    if (droppedElement.get("ActivityID") == undefined) {
                        SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                    }
                    else {
                        SlotBase.supportedEvents.dropActivity.trigger(self, self, droppedElement);
                    }
                }
            });
        };
        SlotBase.isValidDroppable = function (id, element) {
            var result = true;
            if (GenericWorkflowDesigner.Settings.canvasDragDropValidator != null) {
                var draggedElementId = element;
                var targetElementId = id;
                var isHitArea = (targetElementId.indexOf('_hitarea') > -1 || targetElementId.indexOf('_verticalhitarea') > -1) ? true : false;
                result = GenericWorkflowDesigner.Settings.canvasDragDropValidator.isValidDropOnCanvas(targetElementId, draggedElementId, isHitArea);
            }
            return result;
        };
        SlotBase.className = "slot";
        SlotBase.acceptLibraryElement = "graphicElement";
        SlotBase.supportedEvents = {
            dropLibraryElement: {
                name: "dropLibraryElement",
                trigger: function (context, slot, dropedLibraryElement) {
                    var self = context;
                    var eventName = SlotBase.supportedEvents.dropLibraryElement.name;
                    self.trigger(eventName, slot, dropedLibraryElement);
                }
            },
            dropActivity: {
                name: "dropActivity",
                trigger: function (context, slot, dropActivity) {
                    var self = context;
                    var eventName = SlotBase.supportedEvents.dropActivity.name;
                    self.trigger(eventName, slot, dropActivity);
                }
            }
        };
        return SlotBase;
    })(Backbone.View);
    GenericWorkflowDesigner.SlotBase = SlotBase;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotHorizontalView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotHorizontalView = (function (_super) {
        __extends(InsertSlotHorizontalView, _super);
        function InsertSlotHorizontalView() {
            _super.apply(this, arguments);
        }
        InsertSlotHorizontalView.prototype.render = function () {
            this.$el.attr("tabindex", "-1");
            this.$el.attr("title", GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
            this.$el.addClass(InsertSlotHorizontalView.className);
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow());
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol()) + width + GenericWorkflowDesigner.Settings.layoutProperties.insertSlotHorizontalOffset;
            this.$el.css("top", top + "px");
            this.$el.attr("id", this.model.getActivity().id + "_hitarea");
            this.$el.attr("aria-hidden", "true");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            this.$el.css("position", "");
            return this;
        };
        InsertSlotHorizontalView.prototype.setupEvents = function () {
            var self = this;
            this.$el.on("mousedown", function (event) {
                event.stopPropagation();
            });
        };
        InsertSlotHorizontalView.className = "slotInsertHorizontal";
        InsertSlotHorizontalView.supportedEvents = GenericWorkflowDesigner.SlotBase.supportedEvents;
        return InsertSlotHorizontalView;
    })(GenericWorkflowDesigner.SlotBase);
    GenericWorkflowDesigner.InsertSlotHorizontalView = InsertSlotHorizontalView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="InsertSlotVerticalView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotVerticalView = (function (_super) {
        __extends(InsertSlotVerticalView, _super);
        function InsertSlotVerticalView() {
            _super.apply(this, arguments);
        }
        InsertSlotVerticalView.prototype.render = function () {
            this.$el.attr("tabindex", "-1");
            this.$el.attr("title", GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
            this.$el.addClass(InsertSlotVerticalView.className);
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow()) + height + GenericWorkflowDesigner.Settings.layoutProperties.insertSlotVerticalOffset;
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol());
            this.$el.css("top", top + "px");
            this.$el.attr("aria-hidden", "true");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            this.$el.attr("id", this.model.getActivity().id + "_verticalhitarea");
            this.$el.css("position", "");
            return this;
        };
        InsertSlotVerticalView.prototype.setupEvents = function () {
            var self = this;
            this.$el.on("mousedown", function (event) {
                event.stopPropagation();
            });
        };
        InsertSlotVerticalView.className = "slotInsertVertical";
        InsertSlotVerticalView.supportedEvents = GenericWorkflowDesigner.SlotBase.supportedEvents;
        return InsertSlotVerticalView;
    })(GenericWorkflowDesigner.SlotBase);
    GenericWorkflowDesigner.InsertSlotVerticalView = InsertSlotVerticalView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotDetailsContainerPlaceholderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotDetailsContainerPlaceholderView = (function (_super) {
        __extends(SlotDetailsContainerPlaceholderView, _super);
        function SlotDetailsContainerPlaceholderView() {
            _super.apply(this, arguments);
        }
        SlotDetailsContainerPlaceholderView.prototype.render = function () {
            this.$el.addClass(SlotDetailsContainerPlaceholderView.className);
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow()) + height + GenericWorkflowDesigner.Settings.layoutProperties.insertSlotVerticalOffset;
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol());
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            this.$el.css("position", "");
            return this;
        };
        SlotDetailsContainerPlaceholderView.prototype.setupEvents = function () {
            var self = this;
            this.$el.on("mousedown", function (event) {
                event.stopPropagation();
            });
        };
        SlotDetailsContainerPlaceholderView.className = "slotInsertVertical slotDetailsContainerPlaceholder";
        SlotDetailsContainerPlaceholderView.supportedEvents = GenericWorkflowDesigner.SlotBase.supportedEvents;
        return SlotDetailsContainerPlaceholderView;
    })(GenericWorkflowDesigner.SlotBase);
    GenericWorkflowDesigner.SlotDetailsContainerPlaceholderView = SlotDetailsContainerPlaceholderView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LoaderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var LoaderView = (function (_super) {
        __extends(LoaderView, _super);
        function LoaderView(loaderContainer) {
            _super.call(this, { el: loaderContainer });
            this.$el.addClass(LoaderView.className);
            var self = this;
            this.$el.hide();
            $(document).ajaxStart(function () {
                self.$el.show().removeClass(LoaderView.spinnerClassName).delay(1000).queue(function (next) {
                    $(this).addClass(LoaderView.spinnerClassName);
                    next();
                });
            })
                .ajaxStop(function () {
                self.$el.removeClass(LoaderView.spinnerClassName);
                self.$el.hide();
            });
        }
        LoaderView.className = "loader";
        LoaderView.spinnerClassName = "spinner";
        return LoaderView;
    })(Backbone.View);
    GenericWorkflowDesigner.LoaderView = LoaderView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="PropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var PropertyView = (function (_super) {
        __extends(PropertyView, _super);
        function PropertyView() {
            _super.apply(this, arguments);
        }
        PropertyView.getPropertyViewCurrentModel = function () {
            return PropertyView.propertyViewCurrentModel;
        };
        PropertyView.prototype.initialize = function () {
            var self = this;
            self._visible = false;
            PropertyView.propertyViewCurrentModel = '';
            self.previousPropertyView = null;
            self.$el.parent().tabs({
                beforeActivate: function (event, ui) {
                    if (PropertyView.propertyViewCurrentModel != "") {
                        if (ui.newPanel.attr('id') !== self.$el.attr('id')
                            && PropertyView.propertyViewCurrentModel.getIsEditMode()
                            && !self.shouldPropogate()) {
                            event.preventDefault();
                        }
                    }
                },
                activate: function (event, ui) {
                    if (ui.newPanel.attr('id') == self.$el.attr('id')) {
                        self._visible = true;
                        self.refreshView();
                    }
                    else {
                        self._visible = false;
                    }
                }
            });
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.modelUpdated, this.refreshView, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.clearPanel, this.clearPanel, this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.updateProperty, this.updateProperty, this);
        };
        PropertyView.prototype.updateProperty = function (data) {
            Object.keys(data).forEach(function (key) {
                GenericWorkflowDesigner.currentModel[key] = data[key];
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
        };
        PropertyView.prototype.refreshView = function () {
            var self = this;
            if (!this._visible) {
                return;
            }
            if (GenericWorkflowDesigner.currentModel == null) {
                if (PropertyView.propertyViewCurrentModel === null || PropertyView.propertyViewCurrentModel === '') {
                    return;
                }
                if (PropertyView.propertyViewCurrentModel.getIsEditMode()
                    && !this.shouldPropogate()) {
                    return;
                }
                else if (PropertyView.propertyViewCurrentModel.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                    this.$el.append("<span>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[NO ACTIVITY SELECTED]"]) + "</span>");
                    PropertyView.propertyViewCurrentModel.setIsEditMode(false);
                    PropertyView.propertyViewCurrentModel = '';
                }
                return;
            }
            if (PropertyView.propertyViewCurrentModel !== null && PropertyView.propertyViewCurrentModel !== ''
                && PropertyView.propertyViewCurrentModel.getIsEditMode()
                && !this.shouldPropogate()) {
                GenericWorkflowDesigner.currentModel = PropertyView.propertyViewCurrentModel;
                return;
            }
            if (this.previousPropertyView && this.previousPropertyView instanceof GenericWorkflowDesigner.BasePropertyView) {
                this.previousPropertyView.unloadHandler();
            }
            PropertyView.propertyViewCurrentModel = GenericWorkflowDesigner.currentModel;
            if (this.oldModel == PropertyView.propertyViewCurrentModel) {
                return;
            }
            this.$el.html('');
            var propertyView = GenericWorkflowDesigner.Settings.propertyViewFactory.createProperty(GenericWorkflowDesigner.currentModel);
            this.previousPropertyView = propertyView;
            this.oldModel = PropertyView.propertyViewCurrentModel;
            if (propertyView) {
                var requiredProperyPageTile = GenericWorkflowDesigner.BaseTileInformation.tileObjects[PropertyView.propertyViewCurrentModel.getActivityTypeID()];
                var propertyPageToBeRendered;
                if (requiredProperyPageTile && requiredProperyPageTile.getPropertyPage().isMDDPropertyPage) {
                    propertyPageToBeRendered = requiredProperyPageTile.getPropertyPage();
                }
                if (propertyPageToBeRendered) {
                    this.$el.append(propertyPageToBeRendered.render(PropertyView.propertyViewCurrentModel));
                }
                else {
                    this.$el.append(propertyView.render());
                }
            }
        };
        PropertyView.prototype.shouldPropogate = function () {
            var returnPropogattion = true;
            var shouldPropogate = confirm(GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE SAVE]"]);
            if (!shouldPropogate) {
                returnPropogattion = false;
            }
            else {
                PropertyView.propertyViewCurrentModel.setIsEditMode(false);
            }
            return returnPropogattion;
        };
        PropertyView.prototype.clearPanel = function () {
            var libraryTabIndex = 0;
            this.$el.html('');
            PropertyView.propertyViewCurrentModel = '';
            var toolpane = $(GenericWorkflowDesigner.toolpaneId);
            toolpane.tabs({ active: libraryTabIndex });
            this.refreshView();
            GenericWorkflowDesigner.currentModel = null;
        };
        return PropertyView;
    })(Backbone.View);
    GenericWorkflowDesigner.PropertyView = PropertyView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotIconHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotIconHolderView = (function (_super) {
        __extends(SlotIconHolderView, _super);
        function SlotIconHolderView() {
            _super.apply(this, arguments);
        }
        SlotIconHolderView.prototype.render = function () {
            this.$el.addClass(SlotIconHolderView.className);
            var positionCalculator = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var colSpacing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var rowSpacing = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var borderHeight = GenericWorkflowDesigner.Settings.layoutProperties.borderHeight;
            var connectorHeight = GenericWorkflowDesigner.Settings.layoutProperties.connectorHeight;
            var connectorMargin = GenericWorkflowDesigner.Settings.layoutProperties.connectorMargin;
            var curRow = this.model.getActivity().getRow();
            if (this.model.getActivity().getParent())
                var parentRow = this.model.getActivity().getParent().getRow();
            else
                var parentRow = this.model.getActivity().getRow();
            var top = positionCalculator.computeTop(this.model.getActivity().getRow());
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol()) + width;
            if (this.model.getIconType() == GenericWorkflowDesigner.SlotIconType.YesBranch.toString()) {
                top = top + connectorMargin + borderHeight;
                this.$el.addClass("yesBranchSlotIconHolder");
            }
            if (this.model.getIconType() == GenericWorkflowDesigner.SlotIconType.NoBranch.toString()) {
                this.$el.addClass("noBranchSlotIconHolder");
                left = left - (width / 2) - (connectorHeight / 2) + borderHeight;
                top = top + rowSpacing + (colSpacing / 2) + borderHeight + 0.5;
                var rowLevelDiff = curRow - parentRow;
                if (rowLevelDiff > 1)
                    top = top;
            }
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            this.$el.css("position", "");
            var icon = GenericWorkflowDesigner.Settings.iconFactory.createIcon(this.model.getIconType());
            this.$el.append(icon);
            return this;
        };
        SlotIconHolderView.className = "slotIconHolder";
        SlotIconHolderView.supportedEvents = GenericWorkflowDesigner.SlotBase.supportedEvents;
        return SlotIconHolderView;
    })(GenericWorkflowDesigner.SlotBase);
    GenericWorkflowDesigner.SlotIconHolderView = SlotIconHolderView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotTileHolderView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotTileHolderView = (function (_super) {
        __extends(SlotTileHolderView, _super);
        function SlotTileHolderView() {
            _super.apply(this, arguments);
            this.selectedClassName = "selected";
            this.dragInProgressClass = "dragInProgress";
        }
        SlotTileHolderView.prototype.initialize = function () {
            this.setupEvents();
            if (!this.model.getActivity().getReadonlyMode()) {
                this.makeDroppable();
                if (this.model.getActivity().getActivityTypeID() != "condition" &&
                    this.model.getActivity().getActivityID() != GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot().getActivityID()) {
                    this.makeDraggable();
                }
                this.listenTo(this.model.getActivity(), 'changeConditionModel', function () {
                    if (this.nameView.model != this.model.getActivity().displayName) {
                        var nameHolder = this.$el.find(".canvasAreaTileTitle2");
                        this.nameView = new GenericWorkflowDesigner.EditableTextControl(this.model.getActivity().displayName, nameHolder, this.nameEdited, this.$el);
                        this.nameView.render();
                    }
                });
            }
        };
        SlotTileHolderView.prototype.setupEvents = function () {
            var self = this;
            var activity = this.model.getActivity();
            activity.on("sync", this.render, this);
            this.$el.on("click", function (event) {
                $("#canvas").children(".slot.selected").removeClass("selected");
                event.target.focus();
                self.tileClickedHandler(event);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick);
            });
            this.$el.on("dblclick", function (event) {
                self.tileDblClickedHandler(event);
            });
            this.$el.on("mousedown", function (event) {
                event.stopPropagation();
            });
            this.$el.on("contextmenu", function (event) {
                self.tileContextMenuClickHandler(event);
                return false;
            });
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.modelUpdated, function () {
                self.modelUpdateHandler(GenericWorkflowDesigner.currentModel);
            }, this);
            this.listenTo(activity, GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.select.name, self.selectHandler);
            this.listenTo(activity, GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.deselect.name, self.deSelectHandler);
            this.listenTo(activity, GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.name, self.pasteHandler);
            this.listenTo(activity, GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.dragInProgress.name, self.dragInProgressHandler);
            this.listenTo(activity, GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name, self.stopDragInProgressHandler);
        };
        SlotTileHolderView.prototype.clean = function () {
            this.$el.children().remove();
        };
        SlotTileHolderView.prototype.render = function () {
            this.clean();
            if (GenericWorkflowDesigner.currentModel != null && GenericWorkflowDesigner.currentModel.cid == this.model.getActivity().cid) {
                this.$el.addClass(this.selectedClassName);
            }
            var tile = new GenericWorkflowDesigner.Tile({ model: this.model.getActivity() });
            var activityStatus = this.model.getActivity().getValidationStatus();
            var topItemIndex = this.model.getActivity().getTopItemIndex();
            if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                GenericWorkflowDesigner.zoomOut = true;
            }
            else {
                GenericWorkflowDesigner.zoomOut = false;
            }
            var context = new GenericWorkflowDesigner.ItemRenderingContext(activityStatus.toString(), topItemIndex, GenericWorkflowDesigner.zoomOut);
            this.$el.append(tile.render(GenericWorkflowDesigner.RenderType.TreeView, context).el);
            if (this.model.getActivity().getItemCount() > 1) {
                this.$el.addClass("multipleItems");
            }
            this.$el.attr("tabindex", "-1");
            this.$el.addClass(SlotTileHolderView.className);
            var calc = new GenericWorkflowDesigner.PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var top = calc.computeTop(this.model.getActivity().getRow());
            var left = calc.computeLeft(this.model.getActivity().getCol());
            this.$el.attr("id", this.model.getActivity().id);
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            this.$el.css("position", "");
            var nameHolder = this.$el.find(".canvasAreaTileTitle2");
            var name = this.model.getActivity().displayName;
            this.nameView = new GenericWorkflowDesigner.EditableTextControl(name, nameHolder, this.nameEdited, this.$el, !this.model.getActivity().getReadonlyMode());
            this.nameView.render();
            return this;
        };
        SlotTileHolderView.prototype.nameEdited = function (title) {
            var data = {
                displayName: title
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateProperty, data);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml);
        };
        SlotTileHolderView.prototype.modelUpdateHandler = function (currentModel) {
            var self = this;
            var isEditMode = (self.model.getActivity()).getIsEditMode();
            if (!isEditMode) {
                self.deSelectHandler();
                if (this.model.getActivity() == currentModel && !currentModel.getIsEditMode()) {
                    self.selectHandler();
                }
            }
        };
        SlotTileHolderView.prototype.selectHandler = function () {
            this.$el.addClass(this.selectedClassName);
        };
        SlotTileHolderView.prototype.deSelectHandler = function () {
            this.$el.removeClass(this.selectedClassName);
        };
        SlotTileHolderView.prototype.pasteHandler = function () {
            SlotTileHolderView.supportedEvents.paste.trigger(this);
        };
        SlotTileHolderView.prototype.dragInProgressHandler = function () {
            this.$el.addClass(this.dragInProgressClass);
        };
        SlotTileHolderView.prototype.stopDragInProgressHandler = function () {
            this.$el.removeClass(this.dragInProgressClass);
        };
        SlotTileHolderView.prototype.isTileSelected = function () {
            var selectedTiles = $(this.$el).find('.selected');
            if (selectedTiles.length > 0) {
                return true;
            }
            return false;
        };
        SlotTileHolderView.prototype.tileClickedHandler = function (event) {
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
        SlotTileHolderView.prototype.tileDblClickedHandler = function (event) {
            var dblClickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDblClickHandler(this.model);
            if (!CommonTypes.Types.Object.isNullOrUndefined(dblClickHandler)) {
                dblClickHandler.dblclick(this.$el);
                event.stopPropagation();
            }
        };
        SlotTileHolderView.prototype.makeDraggable = function () {
            var self = this;
            var container;
            var containerEdgeScroller;
            this.$el.draggable({
                cursorAt: (GenericWorkflowDesigner.Settings.renderRTL === true) ? { bottom: 0, right: 0 } : { bottom: 0, left: 0 },
                appendTo: 'body',
                containment: 'window',
                refreshPositions: true,
                helper: function () {
                    GenericWorkflowDesigner.currentModel = self.model.getActivity();
                    var helperElement = GenericWorkflowDesigner.currentModel ? GenericWorkflowDesigner.Library.libraryElementPrefix + GenericWorkflowDesigner.currentModel.getActivityTypeID() : GenericWorkflowDesigner.Library.libraryElementPrefix;
                    if (helperElement != GenericWorkflowDesigner.Library.libraryElementPrefix && $('#toolpane').find("#" + helperElement)) {
                        var libraryElement = $('#toolpane').find("#" + helperElement);
                        var helperLibraryElement = new GenericWorkflowDesigner.HelperElementView({ model: self.model.getActivity(), el: $(libraryElement).clone() });
                        var helper = helperLibraryElement.render().$el;
                        $(helper).addClass("dragInProgress");
                        $(helper).children(".categoryInner").addClass("dragInProgress");
                        return helper;
                    }
                    else {
                        var helperLibraryElement = new GenericWorkflowDesigner.HelperElementView({ model: self.model.getActivity(), el: $("<div>") });
                        return helperLibraryElement.render().$el;
                    }
                },
                start: function (e, ui) {
                    self.updateSelectedActivitiesOnDrag();
                    jQuery.each(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities(), function (index, activity) {
                        GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.dragInProgress.trigger(activity);
                    });
                    container = self.$el.parent();
                    containerEdgeScroller = new GenericWorkflowDesigner.ContainerEdgeScroller(container);
                    containerEdgeScroller.initialize();
                },
                drag: function (e, ui) {
                    if (!self.model.getActivity().canMove()) {
                        containerEdgeScroller.stopScrolling();
                        return false;
                    }
                    containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                    return true;
                },
                stop: function (e, ui) {
                    containerEdgeScroller.stopScrolling();
                    jQuery.each(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities(), function (index, activity) {
                        GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.stopDragInProgress.trigger(activity);
                    });
                }
            });
        };
        SlotTileHolderView.prototype.updateSelectedActivitiesOnContextMenuClick = function () {
            var currentActivity = this.model.getActivity();
            var self = this;
            var selectedActivitiesNumber = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities().length;
            if (selectedActivitiesNumber === 0) {
                GenericWorkflowDesigner.updateCurrentModel(currentActivity);
            }
            if (!GenericWorkflowDesigner.Settings.workflowTree.isInSelection(currentActivity)) {
                var clickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createClickHandler(self.model);
                clickHandler.click(self.$el);
            }
            new GenericWorkflowDesigner.BaseActivityClickHandler(currentActivity).triggerHideMenusEvents();
        };
        SlotTileHolderView.prototype.updateSelectedActivitiesOnDrag = function () {
            var self = this;
            if (!GenericWorkflowDesigner.Settings.workflowTree.isInSelection(self.model.getActivity()) ||
                GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities().length <= 1) {
                var dragHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDragHandler(self.model);
                dragHandler.drag(self.$el);
            }
        };
        SlotTileHolderView.prototype.tileContextMenuClickHandler = function (event) {
            this.updateSelectedActivitiesOnContextMenuClick();
            var contextClickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createContextHandler(this.model);
            if (contextClickHandler != null) {
                contextClickHandler.click(event);
            }
            event.stopPropagation();
        };
        SlotTileHolderView.prototype.highLight = function () {
            this.$el.addClass(this.selectedClassName);
            var childTiles = this.$el.find(".tile").children();
            if (childTiles.length > 0) {
                childTiles.addClass(this.selectedClassName);
                childTiles[0].click();
                childTiles[0].focus();
            }
        };
        SlotTileHolderView.className = "slot";
        SlotTileHolderView.defaultDragHelperCursorOffset = 30;
        SlotTileHolderView.supportedEvents = {
            dropLibraryElement: GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement,
            dropActivity: GenericWorkflowDesigner.SlotBase.supportedEvents.dropActivity,
            paste: {
                name: "paste",
                trigger: function (context) {
                    var self = context;
                    var eventName = SlotTileHolderView.supportedEvents.paste.name;
                    self.trigger(eventName);
                }
            }
        };
        return SlotTileHolderView;
    })(GenericWorkflowDesigner.SlotBase);
    GenericWorkflowDesigner.SlotTileHolderView = SlotTileHolderView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="TileFactoryView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var TileFactoryView = (function (_super) {
        __extends(TileFactoryView, _super);
        function TileFactoryView(options) {
            _super.call(this);
            this.model = options.model;
            this.model.on("change", this.renderStatus, this);
        }
        TileFactoryView.prototype.render = function (context) {
            var activity = this.model;
            var tileInformation = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityModel(activity, context.itemIndex);
            var properties = tileInformation.GetProperties();
            var currentItemAttributes = tileInformation.GetDynamicAttributes();
            var itemType = currentItemAttributes.ActivityTypeID;
            this.$el.html(TileFactoryView.getImageTileViewHtml(itemType, activity.IsEmpty(), currentItemAttributes));
            if (!context.zoom) {
                if (activity.IsEmpty(context.itemIndex)) {
                    var emptyTileDescriptionTemplate = _.template(properties.emptyTileTemplate);
                    this.$el.append(emptyTileDescriptionTemplate(properties));
                }
                else {
                    var tileDescriptionTemplate = _.template(properties.template);
                    this.$el.append(tileDescriptionTemplate(currentItemAttributes));
                }
            }
            this.$el.attr("id", activity.id);
            this.$el.addClass(properties.tileclass);
            this.renderStatus();
            return this;
        };
        TileFactoryView.prototype.renderStatus = function () {
            var activity = this.model;
            var statusView = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileStatusView(activity);
            this.$el.find(".tileError").remove();
            this.$el.append(statusView.render().$el);
            if (typeof (activity) != "undefined" && (activity.getErrorCount() != 0 || activity.getWarningCount() != 0)) {
                this.$el.addClass("errorTile");
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
            }
            else {
                this.$el.removeClass("errorTile");
            }
        };
        TileFactoryView.getImageTileViewHtml = function (activityType, isEmpty, optionalAttributes) {
            var tileImageTemplate;
            var properties = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileInformationForActivityType(activityType).GetProperties();
            if (typeof (isEmpty) === "undefined" || isEmpty) {
                tileImageTemplate = _.template(properties.emptyTileImageTemplate);
            }
            else {
                tileImageTemplate = _.template(properties.tileImageTemplate);
            }
            var templateAttributes = $.extend(properties, optionalAttributes);
            return tileImageTemplate(templateAttributes);
        };
        return TileFactoryView;
    })(Backbone.View);
    GenericWorkflowDesigner.TileFactoryView = TileFactoryView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="TileView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var TileView = (function (_super) {
        __extends(TileView, _super);
        function TileView(options) {
            _super.call(this, options);
            this.$el.addClass(TileView.className);
        }
        TileView.prototype.render = function (context) {
            var tileFactory = new GenericWorkflowDesigner.TileFactoryView({ model: this.model });
            this.$el.html(tileFactory.render(context).el);
            return this;
        };
        TileView.className = "tile";
        return TileView;
    })(Backbone.View);
    GenericWorkflowDesigner.TileView = TileView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowStateView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkflowStateView = (function (_super) {
        __extends(WorkflowStateView, _super);
        function WorkflowStateView(workflowStateViewContext) {
            _super.call(this, workflowStateViewContext.options);
            this.updating = false;
            this.workspaceModeController = null;
            this.workspaceModeController = workflowStateViewContext.workspaceModeController;
            this.workspaceModeController.registerWorkfowSwitchButton(this);
            this.imageWrapperClassName = workflowStateViewContext.imageWrapperClassName;
            this.labelWrapperClassName = workflowStateViewContext.labelWrapperClassName;
            this.workflowAssociatedEntityOID = workflowStateViewContext.workflowAssociatedEntityOID;
            this.activateButtonToolTipToSet = workflowStateViewContext.workFlowActivateButtonToolTip;
            this.deActivateButtonToolTipToSet = workflowStateViewContext.workFlowDeActivateButtonToolTip;
        }
        WorkflowStateView.prototype.initialize = function () {
            var self = this;
            self.updating = true;
            this.model = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            this.model.fetch({ reset: true, data: { EntityID: GenericWorkflowDesigner.workflowAssociatedEntityOID, WorkflowProviderType: GenericWorkflowDesigner.workflowProviderType } }).done(function () {
                self.attachEvents(self);
                self.updateControl(self);
            }).always(function () {
                self.updating = false;
            });
        };
        WorkflowStateView.prototype.attachEvents = function (context) {
            context || (context = this);
            context.$el.click(function () {
                context.handleClick(context);
            });
        };
        WorkflowStateView.prototype.handleClick = function (context) {
            context || (context = this);
            if (context.updating == true) {
                return;
            }
            context.updating = true;
            var stateToSet = context.model.getState() == GenericWorkflowDesigner.WorkflowState.Disabled ? GenericWorkflowDesigner.WorkflowState.Active : GenericWorkflowDesigner.WorkflowState.Disabled;
            context.model.setState(stateToSet);
            context.model.save().done(function () {
                context.updateControl(context);
                if (context.model.getState() == GenericWorkflowDesigner.WorkflowState.Disabled) {
                    context.workspaceModeController.deactivateWorklow();
                }
                else {
                    context.workspaceModeController.activateWorkflow();
                }
                var messageId = context.model.getMessageId();
                if (messageId) {
                    var errorMessage = GenericWorkflowDesigner.decodeText(GenericWorkflowDesigner.Settings.statusMessageResolver.ResolveMessage(messageId.toString()));
                    alert(errorMessage);
                }
            }).always(function () {
                context.updating = false;
            });
        };
        WorkflowStateView.prototype.updateControl = function (context) {
            context || (context = this);
            var currentState = context.model.getState();
            var imageWrapper = $("." + context.imageWrapperClassName, context.$el);
            var labelWrapper = $("." + context.labelWrapperClassName, context.$el);
            var classToAdd = currentState == GenericWorkflowDesigner.WorkflowState.Disabled ? "activate" : "deactivate";
            var classToRemove = currentState == GenericWorkflowDesigner.WorkflowState.Disabled ? "deactivate" : "activate";
            var labelToSet;
            var toolTipToSet;
            if (currentState == GenericWorkflowDesigner.WorkflowState.Disabled) {
                labelToSet = GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[ACTIVATE]"];
                toolTipToSet = this.activateButtonToolTipToSet;
            }
            else {
                labelToSet = GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[DEACTIVATE]"];
                toolTipToSet = this.deActivateButtonToolTipToSet;
            }
            if (!imageWrapper.hasClass(classToAdd)) {
                imageWrapper.removeClass(classToRemove);
                imageWrapper.addClass(classToAdd);
            }
            labelWrapper.text(labelToSet);
            labelWrapper.attr("title", toolTipToSet);
        };
        return WorkflowStateView;
    })(Backbone.View);
    GenericWorkflowDesigner.WorkflowStateView = WorkflowStateView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowStateViewContext.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkflowStateViewContext = (function (_super) {
        __extends(WorkflowStateViewContext, _super);
        function WorkflowStateViewContext(workspaceModeController, imageWrapperClassName, labelWrapperClassName, workflowAssociatedEntityOID, workFlowActivateButtonToolTip, workFlowDeActivateButtonToolTip, options) {
            _super.call(this, options);
            this.workspaceModeController = null;
            this.workspaceModeController = workspaceModeController;
            this.imageWrapperClassName = imageWrapperClassName;
            this.labelWrapperClassName = labelWrapperClassName;
            this.workflowAssociatedEntityOID = workflowAssociatedEntityOID;
            this.workFlowActivateButtonToolTip = workFlowActivateButtonToolTip;
            this.workFlowDeActivateButtonToolTip = workFlowDeActivateButtonToolTip;
        }
        return WorkflowStateViewContext;
    })(Backbone.View);
    GenericWorkflowDesigner.WorkflowStateViewContext = WorkflowStateViewContext;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowValidateButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var WorkflowValidateButton = (function () {
        function WorkflowValidateButton(workspaceModeController, workflowAssociatedEntityOID, validateButtonElement) {
            this.updating = false;
            this.workflowAssociatedEntityOID = workflowAssociatedEntityOID;
            this.workspaceModeController = workspaceModeController;
            this.validateButtonElement = validateButtonElement;
            this.initialize();
        }
        WorkflowValidateButton.prototype.initialize = function () {
            this.workspaceModeController.registerWorkflowValidateButton(this);
            this.attachEvents();
        };
        WorkflowValidateButton.prototype.attachEvents = function (context) {
            context || (context = this);
            context.validateButtonElement.click(function () {
                context.handleClick(context);
            });
        };
        WorkflowValidateButton.prototype.handleClick = function (context) {
            context || (context = this);
            if (context.updating == true) {
                return;
            }
            context.updating = true;
            var workflowEntityDefinition = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            var validatedWorkflow = null;
            var requestOptions = {
                success: function (result) {
                    validatedWorkflow = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
                    validatedWorkflow.set(result);
                }
            };
            var promise = workflowEntityDefinition.fetch({ reset: true, data: { entityId: context.workflowAssociatedEntityOID, WorkflowProviderType: GenericWorkflowDesigner.workflowProviderType } });
            promise.done(function () {
                var validationPromise = GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer.ValidateWorkflow(workflowEntityDefinition, requestOptions);
                validationPromise.done(function () {
                    if (!validatedWorkflow) {
                        return;
                    }
                    context.workspaceModeController.validateWorkflow();
                });
                validationPromise.always(function () {
                    context.resetUpdatingState(context);
                });
            });
            promise.always(function () {
                context.resetUpdatingState(context);
            });
        };
        WorkflowValidateButton.prototype.resetUpdatingState = function (context) {
            context || (context = this);
            context.updating = false;
        };
        return WorkflowValidateButton;
    })();
    GenericWorkflowDesigner.WorkflowValidateButton = WorkflowValidateButton;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="BasePropertyView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var BasePropertyView = (function (_super) {
        __extends(BasePropertyView, _super);
        function BasePropertyView() {
            _super.apply(this, arguments);
            this.propertyFrame = null;
            this.btnNewId = "linkNew";
            this.btnEditId = "linkExpand";
            this.btnSelectId = "btnSelect";
        }
        BasePropertyView.prototype.isInlinePropertyPage = function () {
            return true;
        };
        BasePropertyView.prototype.getPropertyPageUrl = function (activeItem) {
            throw new Error("Property page URL is not set!");
        };
        BasePropertyView.prototype.getContainerElementName = function () {
            return 'activityProperty';
        };
        BasePropertyView.prototype.getClassName = function () {
            return '';
        };
        BasePropertyView.prototype.getLoader = function () {
            var loaderHtml = "<img id='loadingImage' src='images/ajax-loader.gif' />";
            return loaderHtml;
        };
        BasePropertyView.prototype.loadPropertyPage = function () {
            GenericWorkflowDesigner.EventManager.unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml);
            var propertyPageUrl = this.getPropertyPageUrl(this.model.getActiveItem());
            var htmlData = "";
            var self = this;
            var div = $('<div/>', {
                id: self.getContainerElementName()
            });
            div.appendTo(this.$el);
            if (!CommonTypes.Types.Object.isNullOrUndefined(BasePropertyView.propertyPageCache[propertyPageUrl])) {
                htmlData = BasePropertyView.propertyPageCache[propertyPageUrl];
                div.html(htmlData);
                this.loadHandler.bind(this);
            }
            else {
                div.load(propertyPageUrl + "?rnd=" + new Date().format("yyyyMMddHHmmsssss"), function (data) {
                    BasePropertyView.propertyPageCache[propertyPageUrl] = data;
                    self.loadHandler.bind(self);
                });
            }
            GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml, function () {
                BasePropertyView.updateHtmlElements();
            }, null);
        };
        BasePropertyView.prototype.render = function () {
            var self = this;
            self.$el.addClass(self.getClassName());
            var activeItem = this.model.getActiveItem();
            if (this.isInlinePropertyPage()) {
                this.loadPropertyPage();
            }
            else {
                $('<iframe/>', {
                    id: self.getContainerElementName(),
                    src: self.getPropertyPageUrl(activeItem)
                }).appendTo(this.$el)
                    .load(this.loadHandler.bind(self));
            }
            this.propertyFrame = self.$el.find('#' + self.getContainerElementName());
            this.propertyFrame.attr('width', '100%');
            return this.$el;
        };
        BasePropertyView.prototype.getUpdatedProperties = function () {
            throw new Error("Method getUpdatedProperties is not implemented");
        };
        BasePropertyView.prototype.selectClickHandler = function () {
            var self = this;
            if (self.model.getReadonlyMode()) {
                GenericWorkflowDesigner.alertLabelKeyValue("WARNING READONLY MODE");
                return;
            }
            var properties = self.getUpdatedProperties();
            self.model.setActiveItemProperties(properties);
            self.model.save();
        };
        BasePropertyView.prototype.loadHandler = function () {
            var self = this;
            self.$el.find(GenericWorkflowDesigner.loadingImageId).hide();
            if (!self.isInlinePropertyPage()) {
                var frameWindow = self.propertyFrame[0].contentWindow;
                var frameDocument = frameWindow.$(frameWindow.document);
                frameWindow.document.body.focus();
                var btnNew = frameDocument.find("#" + self.btnNewId);
                var btnEdit = frameDocument.find("#" + self.btnEditId);
                var btnSelect = frameDocument.find("#" + self.btnSelectId);
                var activeItem = self.model.getActiveItem();
                var activeItemIndex = self.model.getActiveItemIndex();
                if (!btnNew.attr("disabled")) {
                    btnNew.click(function () {
                        self.newClickHandler(activeItem);
                    });
                }
                if (!btnEdit.attr("disabled")) {
                    btnEdit.click(function () {
                        self.editClickHandler(activeItem, activeItemIndex);
                    });
                }
                btnSelect.click(function () {
                    self.selectClickHandler();
                });
            }
        };
        BasePropertyView.prototype.dialogContentCallback = function (dialogContent) {
            return false;
        };
        BasePropertyView.prototype.newClickHandler = function (activeItem) {
            var _this = this;
            var id = '';
            var expandCallback = function () {
                _this.propertyFrame.attr('src', _this.getPropertyPageUrl(activeItem));
            };
            var optionalExpandCallback = function (dialogContent) { return _this.dialogContentCallback(dialogContent); };
            return false;
        };
        BasePropertyView.prototype.getEntityProperties = function () {
            return { mainEntity: "", subMainEntity: "" };
        };
        BasePropertyView.prototype.buildRefreshUrl = function (propertyHolder, activeItem) {
            var self = this;
            return self.getPropertyPageUrl(activeItem) + "?id=" + propertyHolder.mainEntity;
        };
        BasePropertyView.prototype.getMainEntityProperties = function (propertyHolder) {
            return { ItemID: propertyHolder.mainEntity };
        };
        BasePropertyView.prototype.editClickHandler = function (activeItem, activeItemIndex) {
            var self = this;
            var propertyHolder = self.getEntityProperties();
            var activityTypeId = activeItem.get('ActivityTypeID');
            return false;
        };
        BasePropertyView.prototype.unloadHandler = function () {
        };
        BasePropertyView.checkPropertyViewModified = function (event) {
            if (BasePropertyView.inPromptState) {
                GenericWorkflowDesigner.CapturingEvents.removeCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea, [event.type], BasePropertyView.checkPropertyViewModified);
            }
            else {
                if (event.type == "keydown" && event.keyCode != 13) {
                    return;
                }
                var container = $("#property");
                var isTargetOutside = !container.is(event.target) &&
                    (container.has(event.target).length === 0);
                if (isTargetOutside) {
                    if (BasePropertyView.isPropertyViewModified && BasePropertyView.isPropertyViewModified(event)) {
                        event.stopImmediatePropagation();
                        BasePropertyView.inPromptState = true;
                        var yescallback = function () {
                            if (BasePropertyView.yesCallBack)
                                BasePropertyView.yesCallBack();
                            GenericWorkflowDesigner.CapturingEvents.addCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea, ["click", "mousedown", "mouseup", "keydown"], BasePropertyView.checkPropertyViewModified);
                            BasePropertyView.inPromptState = false;
                        };
                        var nocallback = function () {
                            GenericWorkflowDesigner.CapturingEvents.addCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea, ["click", "mousedown", "mouseup", "keydown"], BasePropertyView.checkPropertyViewModified);
                            BasePropertyView.inPromptState = false;
                        };
                        BasePropertyView.showPropertiesModifiedDialog(yescallback, nocallback);
                    }
                    else {
                        BasePropertyView.resetPrompt();
                    }
                }
            }
        };
        BasePropertyView.resetPrompt = function () {
            BasePropertyView.inPromptState = false;
            BasePropertyView.isPropertyViewModified = null;
            BasePropertyView.yesCallBack = null;
            BasePropertyView.noCallBack = null;
        };
        BasePropertyView.propertyPageCache = [];
        BasePropertyView.isPropertyViewModified = null;
        BasePropertyView.yesCallBack = null;
        BasePropertyView.noCallBack = null;
        BasePropertyView.inPromptState = false;
        BasePropertyView.outsideArea = "document";
        BasePropertyView.showPropertiesModifiedDialog = function (yescallback, nocallback) {
            var dialogDetails = {
                dialogTitle: "You have unsaved changes",
                dialogMessage: "Do you want to apply changes you just made?",
                confirmButtonLabel: "Apply",
                cancelButtonLabel: "Cancel",
                yesCallbackAction: yescallback,
                noCallbackAction: nocallback
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
        };
        return BasePropertyView;
    })(Backbone.View);
    GenericWorkflowDesigner.BasePropertyView = BasePropertyView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="GenericWorkflowCommonReferences.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../CommonHelper/commontypes.ts" />
/// <reference path="../CommonHelper/CommonReferences.ts" />
/// <reference path="../CommonHelper/ExpressionBuilderCommonReferences.ts" />
/// <reference path="./GenericWorkflowControl.ts" />
/// <reference path="./TriggerClauseOptionsDetailsHandler.ts" />
/// <reference path="./AbstractActivityDropHandler.ts" />
/// <reference path="./AbstractFlyoutContentProvider.ts" />
/// <reference path="./FlyoutControl.ts" />
/// <reference path="./ActivityDefinitionDataSyncer.ts" />
/// <reference path="./ActivityDropController.ts" />
/// <reference path="./GenericWorkflowDesignerInterfaces.ts" />
/// <reference path="./Common.ts" />
/// <reference path="./ConfigReader.ts" />
/// <reference path="./ConnectedComponent.ts" />
/// <reference path="./ConnectedComponentsExtractor.ts" />
/// <reference path="./ContainerEdgeScroller.ts" />
/// <reference path="./FlyoutContent/BaseItemContextFlyoutContent.ts" />
/// <reference path="./ContextFlyoutContent.ts" />
/// <reference path="./DragTouchHelper.ts" />
/// <reference path="./FlyoutContentProvider.ts" />
/// <reference path="./FlyoutControlCollection.ts" />
/// <reference path="./FlyoutControlContext.ts" />
/// <reference path="./Graphics.ts" />
/// <reference path="./HTMLControlTemplates.ts" />
/// <reference path="./MessageSelectClickHandler.ts" />
/// <reference path="./PositionCalculator.ts" />
/// <reference path="./RenderType.ts" />
/// <reference path="./ScrollableDragDrop.ts" />
/// <reference path="./SubsequentActivityGenerator.ts" />
/// <reference path="./GenericWorkflowEntityDefinitionSyncer.ts" />
/// <reference path="./WorkflowTree.ts" />
/// <reference path="./FlyoutContent/BaseFlyoutContent.ts" />
/// <reference path="./FlyoutContent/DefaultItemContextFlyoutContent.ts" />
/// <reference path="./FlyoutContent/AttributesItemContextFlyoutContent.ts" />
/// <reference path="./FlyoutContent/SegmentItemContextFlyoutContent.ts" />
/// <reference path="./Workspace/WorkspaceModeController.ts" />
/// <reference path="./Workspace/commands/MultiselectCommandButton.ts" />
/// <reference path="./Workspace/commands/ZoomViewCommandButton.ts" />
/// <reference path="./Workspace/modes/MultiSelectMode.ts" />
/// <reference path="./Workspace/modes/WorkflowSwitchMode.ts" />
/// <reference path="./Workspace/modes/ZoomViewMode.ts" />
/// <reference path="MinorContextListForGenericWorkflowDesigner.ts" />
/// <reference path="Slot/FlyoutControlFactory.ts" />
/// <reference path="Slot/SlotHandlerProvider.ts" />
/// <reference path="Slot/SlotIconHolderHandlerFactory.ts" />
/// <reference path="Slot/SlotInsertHorizontalHandlerFactory.ts" />
/// <reference path="Slot/SlotInsertVerticalHandlerFactory.ts" />
/// <reference path="Slot/Handlers/ClickHandlers/BaseActivityClickHandler.ts" />
/// <reference path="Slot/Handlers/ClickHandlers/AttributeActivityClickHandler.ts" />
/// <reference path="Slot/Handlers/ClickHandlers/DefaultActivityClickHandler.ts" />
/// <reference path="Slot/Handlers/ContextHandlers/BaseContextFlyoutHandler.ts" />
/// <reference path="Slot/Handlers/ContextHandlers/DefaultContextFlyoutHandler.ts" />
/// <reference path="Slot/Handlers/DblClickHandlers/DefaultActivityDblClickHandler.ts" />
/// <reference path="Slot/Handlers/DblClickHandlers/EmptyActivityDblClickHandler.ts" />
/// <reference path="Slot/Handlers/DragHandler/DefaultActivityDragHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/BaseStackableActivityDropHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/DefaultActivityDropHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/DefaultInsertSlotHorizontalDropHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/DefaultInsertSlotVerticalDropHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/DefaultSlotIconHolderHandler.ts" />
/// <reference path="Slot/Handlers/DropHandlers/EmptyActivityDropHandler.ts" />
/// <reference path="Slot/Handlers/MultiDropHandler/EmptyMultiDropHandler.ts" />
/// <reference path="Slot/Handlers/MultiDropHandler/InsertSlotHorizontalMultiDropHandler.ts" />
/// <reference path="Slot/Handlers/MultiDropHandler/InsertSlotVerticalMultiDropHandler.ts" />
/// <reference path="Slot/Handlers/MultiDropHandler/TileHolderMultiDropHandler.ts" />
/// <reference path="Models/IconFactory.ts" />
/// <reference path="Models/SlotIconType.ts" />
/// <reference path="Models/IconAttributes/ActivityLinkIconAttributes.ts" />
/// <reference path="Models/IconAttributes/NoBranchIconAttributes.ts" />
/// <reference path="Models/IconAttributes/YesBranchIconAttributes.ts" />
/// <reference path="Models/TileInformation/AbstractActivityTileInformation.ts" />
/// <reference path="Models/TileInformation/EmptyActivityTileInformation.ts" />
/// <reference path="./Views/AbstractActivityTree.ts" />
/// <reference path="./Views/AbstractLibrary.ts" />
/// <reference path="./Views/AbstractPropertyPage.ts" />
/// <reference path="./Views/AbstractTile.ts" />
/// <reference path="./Views/AbstractTreeNode.ts" />
/// <reference path="./Views/Library.ts" />
/// <reference path="./Views/MDDPropertyPage.ts" />
/// <reference path="./Views/Tile.ts" />
/// <reference path="Views/Slot/SlotGeneratorProvider.ts" />
/// <reference path="Views/Slot/Generators/SlotIconHolderGeneratorFactory.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertHorizontalGeneratorFactory.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertVerticalGeneratorFactory.ts" />
/// <reference path="Views/Slot/Generators/SlotDetailsContainerPlaceholderGeneratorFactory.ts" />
/// <reference path="Views/Slot/Generators/SlotTileHolderGeneratorFactory.ts" />
/// <reference path="./Views/Slot/Generators/AbstractSlotGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotIconHolder/DefaultSlotIconHolderGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertHorizontal/DefaultSlotInsertHorizontalGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertHorizontal/EmptySlotInsertHorizontalGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertVertical/DefaultSlotInsertVerticalGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertVertical/DefaultSlotDetailsContainerPlaceholderGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertVertical/EmptySlotInsertVerticalGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotInsertVertical/SchedulerInsertVerticalGenerator.ts" />
/// <reference path="Views/Slot/Generators/SlotTileHolder/DefaultSlotTileHolderGenerator.ts" />
/// <reference path="./Slot/Handlers/ItemRenderingContext.ts" />
/// <reference path="Views/TileStatus/ActivityValidationStatus.ts" />
/// <reference path="Views/TileStatus/EmptyStatusView.ts" />
/// <reference path="Views/TileStatus/ErrorStatusView.ts" />
/// <reference path="./Models/ActivityDefinitionCollection.ts" />
/// <reference path="./Models/ActivityDefinitionModel.ts" />
/// <reference path="./Models/Dimensions.ts" />
/// <reference path="./Models/ItemModel.ts" />
/// <reference path="./Models/LayoutProperties.ts" />
/// <reference path="./Models/LibraryElementModel.ts" />
/// <reference path="./Models/LibraryModel.ts" />
/// <reference path="./Models/SlotModel.ts" />
/// <reference path="./Models/TriggerOption.ts" />
/// <reference path="./Models/WorkflowEntityDefinitionModel.ts" />
/// <reference path="./Models/Activities/EmptyActivity.ts" />
/// <reference path="./Models/Slots/AbstractSubsequentActivities.ts" />
/// <reference path="./Models/Slots/DefaultSubsequentActivities.ts" />
/// <reference path="./Models/TileInformation/CommonTileInformation.ts" />
/// <reference path="./Models/TileInformation/BaseTileInformation.ts" />
/// <reference path="./Views/CanvasView.ts" />
/// <reference path="./Views/GoalsView.ts" />
/// <reference path="./Views/HelperElementView.ts" />
/// <reference path="./Views/Slot/SlotBase.ts" />
/// <reference path="./Views/Slot/InsertSlotHorizontalView.ts" />
/// <reference path="./Views/Slot/InsertSlotVerticalView.ts" />
/// <reference path="./Views/Slot/SlotDetailsContainerPlaceholderView.ts" />
/// <reference path="./Views/LoaderView.ts" />
/// <reference path="./Views/PropertyPanelViews/PropertyView.ts" />
/// <reference path="./Views/Slot/SlotIconHolderView.ts" />
/// <reference path="./Views/Slot/SlotTileHolderView.ts" />
/// <reference path="./Views/TileStatus/TileFactoryView.ts" />
/// <reference path="./Views/TileStatus/TileView.ts" />
/// <reference path="./Views/WorkflowStateView.ts" />
/// <reference path="./Views/WorkflowStateViewContext.ts" />
/// <reference path="./Views/WorkflowValidateButton.ts" />
/// <reference path="./Views/PropertyPanelViews/BasePropertyView.ts" />
// -----------------------------------------------------------------------
// <copyright file="CanvasView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Framework/GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var LookupState;
    (function (LookupState) {
        LookupState[LookupState["search"] = 0] = "search";
        LookupState[LookupState["results"] = 1] = "results";
    })(LookupState || (LookupState = {}));
    "use strict";
    var LookupControl = (function (_super) {
        __extends(LookupControl, _super);
        function LookupControl(container, lookupControlModel, context) {
            _super.call(this, { el: container });
            this._state = LookupState.search;
            this._lookupText = "";
            this._model = lookupControlModel;
            this._context = context;
            this.$el.attr('id', 'lookupControl');
            this.$el.addClass("lookupControl");
        }
        LookupControl.prototype.getState = function () {
            return this._state;
        };
        LookupControl.prototype.setState = function (state) {
            this._state = state;
        };
        LookupControl.prototype.setSelectedItem = function (selectedItem) {
            this._model.setSelectedItem(selectedItem);
            this.render();
            this._context.postLookupItemSelection();
        };
        LookupControl.prototype.setFocusToLookupElement = function () {
            $(".searchBar.selectedItem.borderedContainer.selected-search-width").focus();
        };
        LookupControl.prototype.getSelectedItem = function () {
            return this._model.getSelectedItem();
        };
        LookupControl.prototype.getCallingActivityType = function () {
            return this._context.callerActivityType();
        };
        LookupControl.prototype.initialize = function () {
            this.setupEvents();
        };
        LookupControl.prototype.setupEvents = function () {
            var self = this;
            $(document).on('click', function () {
                if (self._state == LookupState.results) {
                    self._state = LookupState.search;
                    self.render();
                }
            });
        };
        LookupControl.prototype.lookupRecords = function (lookupStirng) {
            var self = this;
            var newSpinner = new GenericWorkflowDesigner.LoadSpinnerItem("#lookupIcon", 16);
            newSpinner.render();
            this._lookupText = (CommonTypes.Types.Object.isNullOrUndefined(lookupStirng)) ? "" : lookupStirng;
            this._context.lookupRecords(lookupStirng, function (lookupItems) {
                self.lookupRecordsCallback(lookupItems);
            });
        };
        LookupControl.prototype.lookupMoreRecords = function () {
            var self = this;
            this._context.lookupMoreRecords(function (lookupItem) {
                self.lookupMoreRecordsCallback(lookupItem);
            });
        };
        LookupControl.prototype.lookupMoreRecordsCallback = function (lookupItem) {
            this.setSelectedItem(lookupItem);
            this.setFocusToLookupElement();
        };
        LookupControl.prototype.lookupRecordsCallback = function (lookupItems) {
            this._state = LookupState.results;
            this._model.setResults(lookupItems);
            this.render();
        };
        LookupControl.prototype.render = function () {
            this.$el.empty();
            this.$el.append('<div id="lookupControlDummydiv"></div>');
            var lookupSearchBarView = new LookupSearchBarView(this.$el.find('#lookupControlDummydiv'), this._model.getSelectedItem(), this._lookupText, this);
            lookupSearchBarView.render();
            if (this._state == LookupState.results) {
                var resultsView = new LookupResultsView(this.$el.find('#lookupControlDummydiv'), this._model.getResults(), this);
                resultsView.render();
            }
        };
        return LookupControl;
    })(Backbone.View);
    GenericWorkflowDesigner.LookupControl = LookupControl;
    var LookupSearchBarView = (function (_super) {
        __extends(LookupSearchBarView, _super);
        function LookupSearchBarView(container, selectedItem, lookupText, parentView) {
            _super.call(this, { el: container });
            this._selectedItem = selectedItem;
            this._parentView = parentView;
            this._lookupText = lookupText;
        }
        LookupSearchBarView.prototype.getSelectedItem = function () {
            return this._selectedItem;
        };
        LookupSearchBarView.prototype.setSelectedItem = function (selectedItem) {
            this._selectedItem = selectedItem;
        };
        LookupSearchBarView.prototype.initialize = function () {
            this.setupEvents();
        };
        LookupSearchBarView.prototype.setupEvents = function () {
            var self = this;
            $('#lookupControlDummydiv').on('click', '#lookupImg', function (event) {
                var lookupString = self.$el.find('#lookupInput').val();
                self._parentView.lookupRecords(lookupString);
                return false;
            });
            $('#lookupControlDummydiv').on('keypress', '#lookupInput', function (event) {
                if (event.keyCode == 13) {
                    $("#lookupImg").trigger("click");
                }
            });
            $('#lookupControlDummydiv').on('click', '#lookupInput', function (event) {
                $('#lookupInput').focus();
            });
            $('#lookupControlDummydiv').on('click', '.selectedItemLabel', function (event) {
                window.open(self._selectedItem.getUrl());
                return false;
            });
            $('#lookupControlDummydiv').on('keydown', '.selectedItem', function (event) {
                if (event.keyCode == 9 || event.shiftKey)
                    return;
                self._parentView.setState(LookupState.search);
                self._parentView.setSelectedItem(null);
                self._parentView.render();
                $('#lookupInput').val("");
                $('#lookupInput').focus();
                if (event.keyCode == 8) {
                    return false;
                }
            });
            $('#lookupControlDummydiv').on('keyup', '.selectedItem', function (event) {
                if (event.keyCode == 8) {
                    self._parentView.setState(LookupState.search);
                    self._parentView.setSelectedItem(null);
                    self._parentView.render();
                    $('#lookupInput').val("");
                    $('#lookupInput').focus();
                }
            });
            $('#lookupControlDummydiv').on('keydown', '.selectedItem', function (event) {
                if (event.keyCode == 13) {
                    $("#lookupImg").trigger("click");
                }
            });
        };
        LookupSearchBarView.prototype.render = function () {
            var searchBarSelectedTemplate = _.template('<div id="lookupContainerDiv" class="searchBar selectedItem borderedContainer selected-search-width" tabindex="0">' +
                '<div id="selectedItemLabel" class="selectedItemLabel"> <%- SelectedItemName %> </div>' +
                '</div>');
            var searchBarSelected = '<input id="lookupInput" class="searchBar lookup-input" value="' + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this._lookupText) + '"></input>';
            if (!CommonTypes.Types.Object.isNullOrUndefined(this._selectedItem)) {
                var selectedItemName = this._selectedItem.getName();
                var selectedItemImage = this._selectedItem.getImage();
                var selectedItemUrl = this._selectedItem.getUrl();
                if (!CommonTypes.Types.Object.isNullOrUndefined(this._selectedItem.getSearchBarSelectedTemplate())) {
                    searchBarSelectedTemplate = this._selectedItem.getSearchBarSelectedTemplate();
                }
                searchBarSelected = searchBarSelectedTemplate({ SelectedItemImage: selectedItemImage, SelectedItemName: selectedItemName });
            }
            var searchWorkFlowAdd = this._parentView.getCallingActivityType().toString() == "action" ? GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_ActionStepPropertyDetails_SearchButtonTooltip") : GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("ProcessDesignerControl_BPF_Tooltip_Search_Workflow_Add");
            var searchBarTemplate = _.template('<div id="lookupSearchBar" class="lookupSearchBar">' +
                '<table cellspacing= "0" class="lookup-table"> ' +
                '<tbody> <tr>' +
                '<td>' + searchBarSelected + '</td>' +
                '<td id="lookupIcon"><span id="lookupImg" class="CCFSymbolFont SearchButton-symbol search-icon-span" title="' + searchWorkFlowAdd + '"></span></td> ' +
                '</tr></tbody> <table></div>');
            this.$el.append(searchBarTemplate());
        };
        return LookupSearchBarView;
    })(Backbone.View);
    GenericWorkflowDesigner.LookupSearchBarView = LookupSearchBarView;
    var LookupResultsView = (function (_super) {
        __extends(LookupResultsView, _super);
        function LookupResultsView(container, results, parentView) {
            _super.call(this, { el: container });
            this._lookupResults = results;
            this._parentView = parentView;
        }
        LookupResultsView.prototype.getLookupResults = function () {
            return this._lookupResults;
        };
        LookupResultsView.prototype.setLookupResults = function (lookupResults) {
            this._lookupResults = lookupResults;
        };
        LookupResultsView.prototype.initialize = function () {
            this.setupEvents();
        };
        LookupResultsView.prototype.setupEvents = function () {
            var self = this;
            $('#lookupControlDummydiv').on('blur', '#lookupResults', function (event) {
                if (!CommonTypes.Types.Object.isNullOrUndefined(event.target) && !$(event.target).hasClass("lookupItem")) {
                    self.closeLookupResult(self);
                }
            });
            $('#lookupControlDummydiv').on('click', '#lookupResults .lookupItem', function () {
                if (!isNaN(parseInt($(this).attr('index')))) {
                    self._parentView.setSelectedItem(self._lookupResults[parseInt($(this).attr('index'))]);
                }
            });
            $('#lookupControlDummydiv').on('hover', '#lookupResults .lookupItem', function (event) {
                self.setLookupItemFocus($(this));
            });
            $('#lookupControlDummydiv').on('keydown', '#lookupResults .lookupItem', function (event) {
                switch (event.keyCode) {
                    case 38:
                        var prevLookItem = $(this).prev();
                        if (prevLookItem.hasClass("lookupItem") || prevLookItem.hasClass("moreRecords")) {
                            self.setLookupItemFocus(prevLookItem);
                        }
                        else {
                            self.setLookupItemFocus($(".lookupItem").last());
                        }
                        break;
                    case 40:
                        var nextLookItem = $(this).next();
                        if (nextLookItem.hasClass("lookupItem") || nextLookItem.hasClass("moreRecords")) {
                            self.setLookupItemFocus(nextLookItem);
                        }
                        else {
                            self.setLookupItemFocus($(".lookupItem").first());
                        }
                        break;
                    case 13:
                        if ($(this).hasClass("moreRecords")) {
                            $('#lookupResults .moreRecords').trigger("click");
                        }
                        else {
                            $(this).trigger("click");
                            $("#lookupContainerDiv").focus();
                        }
                        break;
                    case 9:
                        self.closeLookupResult(self);
                        $("#workflowTypeContainer input").focus();
                        break;
                }
            });
            $('#lookupControlDummydiv').on('click', '#lookupResults .moreRecords', function () {
                self._parentView.lookupMoreRecords();
            });
        };
        LookupResultsView.prototype.renderResults = function () {
            var resultsContainer = this.$el.find('#resultsContainer');
            var resultItems = "";
            $.each(this._lookupResults, function (index, lookupItem) {
                var lookupItemName = lookupItem.getName();
                var lookupItemImage = lookupItem.getImage();
                var lookupItemUrl = lookupItem.getUrl();
                var lookupClass = "\"CCFSymbolFont " + lookupItemImage + " lookupItemImage-size\"";
                var lookupItemHtml = '<li class="lookupItem" tabindex="-1" index="' + index + '">' +
                    '<div class="searchBar">' +
                    '<span class=\"lookupItemImageWrapper \"><span class=' + lookupClass + '></span></span>' +
                    '<div id="selectedItemLabel" class="lookupItemLabel">' + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(lookupItemName) + '</div>' +
                    '</div>' +
                    '</li>';
                resultItems += lookupItemHtml;
            });
            resultItems += this.getLookupMoreRecords();
            var listHtml = '<ul style="list-style:none; padding:0; margin:0; border:none;">' + resultItems + '</ul>';
            resultsContainer.append(listHtml);
            this.setLookupItemFocus($(".lookupItem").first());
        };
        LookupResultsView.prototype.setLookupItemFocus = function (lookupItem) {
            lookupItem.focus();
            $(".lookupItem").removeClass("lookupSelectedItem");
            lookupItem.addClass("lookupSelectedItem");
        };
        LookupResultsView.prototype.closeLookupResult = function (self) {
            if (self._parentView.getState() == LookupState.results) {
                self._parentView.setState(LookupState.search);
                self._parentView.render();
            }
        };
        LookupResultsView.prototype.getLookupMoreRecords = function () {
            var morerecordsHtml = '<li class="moreRecords lookupItem"  tabindex="-1">' +
                '<div class="searchBar">' +
                '<div id="selectedItemLabel" style="padding-left:20px">' + LOCID_LOOKMORERECORDS_AMBIGUOUS + '</div>' +
                '</div>' +
                '</li>';
            return morerecordsHtml;
        };
        LookupResultsView.prototype.render = function () {
            var resultsCount = this._lookupResults.length;
            var localizedStringToBeDisplayed = (resultsCount == 1) ? LOCID_INLINELOOKUP_RESULT : LOCID_INLINELOOKUP_RESULTS;
            var resultsHtml = '<div id="lookupResults" class="lookupResults borderedContainer prop-lookup-result">' +
                '<div id= "resultsContainer" class="resultsContainer prop-results-container" > </div>' +
                '<div id="resultsFooter" class="resultsFooter prop-results-footer">' + resultsCount + ' ' + localizedStringToBeDisplayed + '</div >' +
                '</div>';
            this.$el.append(resultsHtml);
            this.renderResults();
        };
        return LookupResultsView;
    })(Backbone.View);
    GenericWorkflowDesigner.LookupResultsView = LookupResultsView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Framework/GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LookupItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Framework/GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var LookupItem = (function () {
        function LookupItem(id, name, url, image, category, searchBarSelectedTemplate) {
            this._id = id;
            this._name = name;
            this._url = url;
            this._image = image;
            this._category = category;
            this._searchBarSelectedTemplate = searchBarSelectedTemplate;
        }
        LookupItem.prototype.getId = function () {
            return this._id;
        };
        LookupItem.prototype.setId = function (id) {
            this._id = id;
        };
        LookupItem.prototype.getName = function () {
            return this._name;
        };
        LookupItem.prototype.setName = function (name) {
            this._name = name;
        };
        LookupItem.prototype.getUrl = function () {
            return this._url;
        };
        LookupItem.prototype.setUrl = function (url) {
            this._url = url;
        };
        LookupItem.prototype.getImage = function () {
            return this._image;
        };
        LookupItem.prototype.setImage = function (image) {
            this._image = image;
        };
        LookupItem.prototype.getCategory = function () {
            return this._category;
        };
        LookupItem.prototype.setCategory = function (category) {
            this._category = category;
        };
        LookupItem.prototype.getSearchBarSelectedTemplate = function () {
            return this._searchBarSelectedTemplate;
        };
        LookupItem.prototype.setSearchBarSelectedTemplate = function (template) {
            this._searchBarSelectedTemplate = template;
        };
        return LookupItem;
    })();
    GenericWorkflowDesigner.LookupItem = LookupItem;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LookupControlModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Framework/GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var LookupControlModel = (function () {
        function LookupControlModel() {
        }
        LookupControlModel.prototype.getSelectedItem = function () {
            return this._selectedItem;
        };
        LookupControlModel.prototype.setSelectedItem = function (selectedItem) {
            this._selectedItem = selectedItem;
        };
        LookupControlModel.prototype.getResults = function () {
            return this._results;
        };
        LookupControlModel.prototype.setResults = function (results) {
            this._results = results;
        };
        return LookupControlModel;
    })();
    GenericWorkflowDesigner.LookupControlModel = LookupControlModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EditableTextControl.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var EditMode;
    (function (EditMode) {
        EditMode[EditMode["Read"] = 0] = "Read";
        EditMode[EditMode["Edit"] = 1] = "Edit";
    })(EditMode || (EditMode = {}));
    var EditableTextControl = (function (_super) {
        __extends(EditableTextControl, _super);
        function EditableTextControl(model, el, editDoneCallback, parent, editableFlag) {
            if (editableFlag === void 0) { editableFlag = true; }
            _super.call(this, {
                model: model,
                el: el,
            });
            this.state = EditMode.Read;
            this.editableFlag = editableFlag;
            this.parent = parent;
            this.editDoneCallback = editDoneCallback;
        }
        EditableTextControl.prototype.initialize = function () {
            this.$el.attr("tabindex", "-1");
            this.editableTextTemplate = _.template("<label class=\"no-editing truncateString\" style=\"display:block\"><%- textShown %></label> <input maxlength=\"100\" class=\"edit\" value=\"<%- textShown %>\" style=\"display:none\" onfocus=\"this.value = this.value;\">");
        };
        EditableTextControl.prototype.setupEvents = function () {
            var self = this;
            if (this.eventsSetUp)
                return;
            this.eventsSetUp = true;
            this.$el.find('label').on("dblclick", function (event) {
                self.openEditMode(event);
                event.stopPropagation();
            });
            this.$el.find('.edit').on("click", function (event) {
                event.stopPropagation();
            });
            this.$el.find('.edit').on("focus", function (event) {
                var self = this;
                setTimeout(function () { self.selectionStart = self.selectionEnd = 10000; }, 0);
            });
            this.$el.find('.edit').on("mousedown", function (event) {
                event.stopPropagation();
            });
            this.$el.find('.edit').on("focusout blur", function () {
                self.closeEditMode();
            });
            this.$el.find('.edit').on("keyup", function (event) {
                event.stopPropagation();
                self.updateOnEnter(event);
            });
        };
        EditableTextControl.prototype.render = function () {
            this.$el.html(this.editableTextTemplate({ textShown: this.model }));
            if (this.editableFlag) {
                this.input = this.$('.edit');
                this.setupEvents();
                return this;
            }
        };
        EditableTextControl.prototype.close = function () {
            this.remove();
        };
        EditableTextControl.prototype.openEditMode = function (event) {
            if (this.state == EditMode.Edit) {
                return;
            }
            var self = this;
            this.state = EditMode.Edit;
            this.$el.find('label').css("display", "none");
            this.$el.find('.edit').css("display", "block");
            $("#mini-map").on("click", function (event) {
                self.closeEditMode();
            });
            GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateModel, function (newModel) {
                if (newModel != GenericWorkflowDesigner.currentModel)
                    self.closeEditMode();
            }, null);
            this.input.focus();
        };
        EditableTextControl.prototype.closeEditMode = function () {
            if (this.state == EditMode.Read) {
                return;
            }
            this.state = EditMode.Read;
            var value = this.input.val().trim();
            if (value) {
                this.editDoneCallback(value);
                this.model = value;
            }
            this.input.val(this.model);
            this.$el.find('.edit').css("display", "none");
            this.$el.find('label').css("display", "block");
            $("#mini-map").off("click");
            GenericWorkflowDesigner.EventManager.unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updateModel);
        };
        EditableTextControl.prototype.updateOnEnter = function (e) {
            if (e.keyCode == 13)
                this.closeEditMode();
        };
        return EditableTextControl;
    })(Backbone.View);
    GenericWorkflowDesigner.EditableTextControl = EditableTextControl;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DeleteHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ActivityDeleteHandler = (function () {
        function ActivityDeleteHandler() {
            this.dialogMessageTypes = {
                Information: 0,
                Warning: 1,
                Error: 2
            };
        }
        ActivityDeleteHandler.prototype.canvasRefreshUtil = function () {
            GenericWorkflowDesigner.updateCurrentModel(null);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
        };
        ActivityDeleteHandler.prototype.deleteSelectedActivitiesCore = function () {
            var targetActivites = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
            var connectedComponents = GenericWorkflowDesigner.Settings.workflowTree.getConnectedComponents();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            GenericWorkflowDesigner.ContextFlyoutContent.prototype.removeComponentsFromWorkflowTree(connectedComponents).done(function () {
                jQuery.each(connectedComponents, function (indexComponent, component) {
                    jQuery.each(component.getNodes(), function (indexNode, node) {
                        GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                    });
                });
            });
            return targetActivites;
        };
        ActivityDeleteHandler.prototype.selectEntireBranchAfterNode = function (activity) {
            var _this = GenericWorkflowDesigner.ActivityDeleteHandler.prototype;
            GenericWorkflowDesigner.currentModel = activity;
            if (activity) {
                var selectedActivities = _this.getAllSubsequentActivities(activity);
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(selectedActivities);
            }
            else {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([]);
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.modelUpdated);
        };
        ActivityDeleteHandler.prototype.getAllSubsequentActivities = function (activity) {
            var selectedActivities = new Array();
            var stack = new Array();
            if (!activity.isLeaf()) {
                stack.push(activity);
            }
            while (stack.length != 0) {
                var currentActivity = stack.pop();
                selectedActivities.push(currentActivity);
                var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(currentActivity);
                for (var i = 0; i < childActivities.length; i++) {
                    if (!childActivities[i].isLeaf()) {
                        stack.push(childActivities[i]);
                    }
                }
            }
            return selectedActivities;
        };
        ActivityDeleteHandler.prototype.deleteBranch = function (activity) {
            var _this = GenericWorkflowDesigner.ActivityDeleteHandler.prototype;
            var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
            var parent = GenericWorkflowDesigner.Settings.workflowTree.getParent(activity);
            var deletableChildren = [];
            var targetActivities = [];
            var defaultAndYesBranches = activity.getYesBranches();
            var defaultBranch = defaultAndYesBranches[0];
            deletableChildren.push(activity.getNoBranch());
            if (defaultAndYesBranches.length > 1) {
                deletableChildren.push(defaultAndYesBranches[1]);
            }
            for (var i = 0; i < deletableChildren.length; i++) {
                _this.selectEntireBranchAfterNode(deletableChildren[i]);
                var currentTarget = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
                for (var j = 0; j < currentTarget.length; j++) {
                    targetActivities.push(currentTarget[j]);
                }
            }
            targetActivities.push(activity);
            GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(targetActivities);
            GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(parent, defaultBranch);
            _this.deleteSelectedActivitiesCore();
            return targetActivities;
        };
        ActivityDeleteHandler.prototype.alertDialog = function (title, message) {
            var dialogDetails = {
                dialogTitle: title,
                dialogMessage: message,
                messageType: 1
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
        };
        ActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function (activity) {
            var dialogDetails = {
                dialogTitle: "Warning: Deleting an activity",
                dialogMessage: "Are you sure to delete this " + activity,
                messageType: 1,
                yesCallbackAction: this.DeleteConfirmedCallback,
                noCallbackAction: this.DeleteCanceledCallback
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
        };
        ActivityDeleteHandler.prototype.DeleteConfirmedCallback = function () {
            ActivityDeleteHandler.prototype.deleteActivities();
        };
        ActivityDeleteHandler.prototype.DeleteCanceledCallback = function () {
            return;
        };
        ActivityDeleteHandler.prototype.deleteSelectedActivities = function () {
            var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
            for (var i = 0; i < toBeDeleted.length; i++) {
                var currentActivity = toBeDeleted[i];
                if (currentActivity.getActivityTypeID() == "stage" && currentActivity.getParent() == null) {
                    var dialogTitle = "Deleting Root node";
                    var dialogMessage = "Deletion of first stage in process is not allowed!";
                    this.alertDialog(dialogTitle, dialogMessage);
                }
                if (currentActivity.getActivityTypeID() == "step") {
                    var stage = currentActivity.getParent();
                    var steps = stage.steps;
                    if (steps.length == 1) {
                        var alertTitle = "Deleting the only step in a stage:";
                        var alertMessage = "Deletion of step is not allowed when the stage contains only one step!";
                        this.alertDialog(alertTitle, alertMessage);
                        return;
                    }
                }
                this.deleteActivityConfirmationDialog(currentActivity.getActivityTypeID());
            }
        };
        ActivityDeleteHandler.prototype.deleteActivities = function () {
            var _this = GenericWorkflowDesigner.ActivityDeleteHandler.prototype;
            var toBeDeleted = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
            var deletedActivities = [];
            var stageActivities = [];
            for (var i = 0; i < toBeDeleted.length; i++) {
                var currentActivity = toBeDeleted[i];
                if (currentActivity.getActivityTypeID() == "condition") {
                    var deletedBrachNodes = _this.deleteBranch(currentActivity);
                    for (var j = 0; j < deletedBrachNodes.length; j++) {
                        deletedActivities.push(deletedBrachNodes[j]);
                    }
                }
                else if (currentActivity.getActivityTypeID() == "step") {
                    deletedActivities.push(currentActivity);
                    _this.deleteStepFromStageActivity(currentActivity);
                }
                else {
                    stageActivities.push(currentActivity);
                }
            }
            if (stageActivities.length > 0) {
                for (var i = 0; i < stageActivities.length; ++i) {
                    var par = stageActivities[i].getParent();
                    var child = stageActivities[i].getChildActivitiesSorted()[0];
                    if (par && child && par.getActivityTypeID() == "condition" && child.getActivityTypeID() == "condition") {
                        alert("Sorry!! you can't delete this stage");
                        return null;
                    }
                }
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(stageActivities);
                var deletedStageNodes = _this.deleteSelectedActivitiesCore();
                for (var j = 0; j < deletedStageNodes.length; j++) {
                    deletedActivities.push(deletedStageNodes[j]);
                }
            }
            _this.canvasRefreshUtil();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDeleted, deletedActivities);
            return deletedActivities;
        };
        ActivityDeleteHandler.prototype.deleteStepFromStageActivity = function (step) {
            var stage = step.getParent();
            var steps = stage.steps;
            var index = $.inArray(step, steps);
            if (index == -1) {
                return;
            }
            for (var i = index; i < steps.length - 1; i++) {
                steps[i] = steps[i + 1];
            }
            steps.pop();
            stage.steps = steps;
        };
        return ActivityDeleteHandler;
    })();
    GenericWorkflowDesigner.ActivityDeleteHandler = ActivityDeleteHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CrmEncodeDecode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var CrmEncodeDecode = (function () {
        function CrmEncodeDecode() {
        }
        CrmEncodeDecode.CrmHtmlEncode = function (text) {
            if (text == null) {
                return text;
            }
            else {
                if (typeof (text) != "string") {
                    text = text.toString();
                }
            }
            return this.surrogateAmpersandWorkaround(text);
        };
        CrmEncodeDecode.surrogateAmpersandWorkaround = function (text) {
            text = text.replace(new RegExp("([\\uD800-\\uDBFF][\\uDC00-\\uDFFF])", "g"), function ($1) { return "CRMEntityReferenceOpen" + ((($1.charCodeAt(0) - 0xD800) * 0x400) + ($1.charCodeAt(1) & 0x03FF) + 0x10000).toString(16) + "CRMEntityReferenceClose"; });
            text = text.replace(new RegExp("[\\uD800-\\uDFFF]", "g"), '\uFFFD');
            text = this.encodingFunction(text);
            text = text.replace(/CRMEntityReferenceOpen/g, "&#x");
            text = text.replace(/CRMEntityReferenceClose/g, ";");
            return text;
        };
        CrmEncodeDecode.encodingFunction = function (strInput) {
            var c;
            var HtmlEncode = '';
            var buffer = '';
            var bufferLength = 500;
            var count = 0;
            if (strInput == null) {
                return null;
            }
            if (strInput == '') {
                return '';
            }
            for (var cnt = 0; cnt < strInput.length; cnt++) {
                c = strInput.charCodeAt(cnt);
                if (((c > 96) && (c < 123)) ||
                    ((c > 64) && (c < 91)) ||
                    (c == 32) ||
                    ((c > 47) && (c < 58)) ||
                    (c == 46) ||
                    (c == 44) ||
                    (c == 45) ||
                    (c == 95)) {
                    buffer += String.fromCharCode(c);
                }
                else {
                    buffer += '&#' + c + ';';
                }
                if (++count == bufferLength) {
                    HtmlEncode += buffer;
                    buffer = '';
                    count = 0;
                }
            }
            if (buffer.length) {
                HtmlEncode += buffer;
            }
            return HtmlEncode;
        };
        return CrmEncodeDecode;
    })();
    GenericWorkflowDesigner.CrmEncodeDecode = CrmEncodeDecode;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ISlidingDialog.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// <copyright file="ISlidingDialogFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./ISlidingDialog.ts" />
// -----------------------------------------------------------------------
// <copyright file="SlidingDialogProperty.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Dialogs;
(function (Dialogs) {
    "use strict";
    (function (SlidingDialogProperty) {
        SlidingDialogProperty[SlidingDialogProperty["width"] = 0] = "width";
        SlidingDialogProperty[SlidingDialogProperty["height"] = 1] = "height";
    })(Dialogs.SlidingDialogProperty || (Dialogs.SlidingDialogProperty = {}));
    var SlidingDialogProperty = Dialogs.SlidingDialogProperty;
})(Dialogs || (Dialogs = {}));
// -----------------------------------------------------------------------
// <copyright file="EventManager.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    GenericWorkflowDesigner.EventManager = {
        subscribe: function (event, fn, context) {
            GenericWorkflowDesigner.eventManager.on(event, fn, context);
        },
        subscribeWithReturnValue: function (event, fn) {
            $(document).on(event, fn);
        },
        unsubscribe: function (event, fn) {
            GenericWorkflowDesigner.eventManager.off(event, fn);
        },
        unsubscribeWithoutCallback: function (event) {
            GenericWorkflowDesigner.eventManager.off(event);
        },
        unsubscribeWithReturnValue: function (event, fn) {
            $(document).off(event, fn);
        },
        publish: function (event) {
            GenericWorkflowDesigner.eventManager.trigger(event);
        },
        publishWithPayload: function (event, payload) {
            GenericWorkflowDesigner.eventManager.trigger(event, payload);
        }
    };
    GenericWorkflowDesigner.FrameworkEvents = {
        initializeWidget: "initializeWidget",
        updatePropertyHtml: "updatePropertyHtml",
        modelUpdated: "modelUpdated",
        hideMenus: "hideMenus",
        hideContextMenus: "hideContextMenus",
        canvasRefresh: "canvasRefresh",
        clearPanel: "clearPanel",
        slotTileHolderDoubleClick: "slotTileHolderDoubleClick",
        toolBarItemClick: "toolBarItemClick",
        showDialog: "showDialog",
        updateProperty: "updateProperty",
        updateTileTitle: "updateTileTitle",
        clearSelections: "clearSelections",
        resetToolbar: "resetToolbar",
        propertyMessageReceived: "propertyMessageReceived",
        editDone: "editDone",
        runValidation: "runValidation",
        activityDropped: "ActivityDropped",
        slotTileHolderClick: "slotTileHolderClick",
        showHideSeeDetails: "showHideSeeDetails",
        activityDeleted: "ActivityDeleted",
        refreshToolbarItems: "refreshToolbarItems",
        activityInserting: "activityInserting",
        activityParentCutting: "activityParentCutting",
        activityReplacingEmptyTile: "activityReplacingEmptyTile",
        setKeyDownEvents: "setKeyDownEvents",
        updateModel: "updateModel",
        refreshPropertyPageErrorMessages: "refreshPropertyPageErrorMessages",
        getWorkflowData: "getWorkflowData",
        updateWorkflowDefinition: "updateWorkflowDefinition",
        validateWorkflow: "validateWorkflow",
        getActivityDefinitions: "getActivityDefinitions",
        createActivityDefinition: "createActivityDefinition",
        updateActivityDefinition: "updateActivityDefinition",
        deleteActivityDefinition: "deleteActivityDefinition",
        getDynamicEnums: "getDynamicEnums",
        activatePropertyTab: "activatePropertyTab",
        libraryTabActivated: "libraryTabActivated",
        canvasZoomOutEvent: "canvasZoomOutEvent",
        canvasZoomInEvent: "canvasZoomInEvent",
        canvasFitToScreenEvent: "canvasFitToScreenEvent"
    };
    var DataAccessEvents = (function () {
        function DataAccessEvents() {
        }
        DataAccessEvents.getWorkflowData = function (model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getWorkflowData, model);
        };
        DataAccessEvents.updateWorkflowDefinition = function (data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.updateWorkflowDefinition, data);
        };
        DataAccessEvents.validateWorkflow = function (model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.validateWorkflow, model);
        };
        DataAccessEvents.getActivityDefinitions = function (model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getActivityDefinitions, model);
        };
        DataAccessEvents.createActivityDefinition = function (data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.createActivityDefinition, data);
        };
        DataAccessEvents.updateActivityDefinition = function (data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.updateActivityDefinition, data);
        };
        DataAccessEvents.deleteActivityDefinition = function (data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.deleteActivityDefinition, data);
        };
        DataAccessEvents.getDynamicEnums = function (data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getDynamicEnums, data);
        };
        return DataAccessEvents;
    })();
    GenericWorkflowDesigner.DataAccessEvents = DataAccessEvents;
    var CapturingEvents = (function () {
        function CapturingEvents() {
        }
        CapturingEvents.addCapturingEvent = function (element, events, callback) {
            if ($(element).length != 0) {
                element = $(element)[0];
                for (var i = 0; i < events.length; i++) {
                    if (element.addEventListener) {
                        element.addEventListener(events[i], callback, true);
                    }
                    else if (element.attachEvent) {
                        element.attachEvent("on" + events[i], callback);
                    }
                }
            }
        };
        CapturingEvents.removeCapturingEvent = function (element, events, callback) {
            if ($(element).length != 0) {
                element = $(element)[0];
                for (var i = 0; i < events.length; i++) {
                    if (element.removeEventListener) {
                        element.removeEventListener(events[i], callback, true);
                    }
                    else if (element.detachEvent) {
                        element.detachEvent("on" + events[i], callback);
                    }
                }
            }
        };
        return CapturingEvents;
    })();
    GenericWorkflowDesigner.CapturingEvents = CapturingEvents;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Exception.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var Exception = (function () {
        function Exception() {
        }
        Exception.ActivityIsNeeded = "Internal : Activity is needed.";
        Exception.InternalError = "Internal : Internal error. Please try again or restart the application.";
        Exception.NotImplemented = "Internal : Not implemented exception";
        Exception.IconTypeDoesNotExists = "Internal : Specified icon type does not exist";
        Exception.SlotTypeNotSupported = "Internal : Slot type is not supported";
        Exception.NoActivitySet = "There is no activity set";
        return Exception;
    })();
    GenericWorkflowDesigner.Exception = Exception;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ScrollableDragDropExtended.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ScrollableDragDropExtended = (function () {
        function ScrollableDragDropExtended() {
        }
        ScrollableDragDropExtended.prototype.makeDraggable = function (element, container, draggableOptions, scrollOptions) {
            var containerEdgeScrollers = [];
            container.forEach(function (eachContainer, containerIndex) {
                containerEdgeScrollers.push(new GenericWorkflowDesigner.ContainerEdgeScroller(eachContainer, scrollOptions[containerIndex]));
            });
            var extendedDraggableOptions = $.extend({}, draggableOptions, {
                start: function () {
                    if (draggableOptions.start) {
                        draggableOptions.start.apply(this, arguments);
                    }
                    containerEdgeScrollers.forEach(function (containerEdgeScroller) {
                        containerEdgeScroller.initialize();
                    });
                },
                drag: function (e) {
                    if (draggableOptions.drag) {
                        draggableOptions.drag.apply(this, arguments);
                    }
                    containerEdgeScrollers.forEach(function (containerEdgeScroller) {
                        containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                    });
                },
                stop: function () {
                    if (draggableOptions.stop) {
                        draggableOptions.stop.apply(this, arguments);
                    }
                    containerEdgeScrollers.forEach(function (containerEdgeScroller) {
                        containerEdgeScroller.stopScrolling();
                    });
                }
            });
            element.draggable(extendedDraggableOptions);
            GenericWorkflowDesigner.DragTouchHelper.mapTouchEvents(element);
        };
        return ScrollableDragDropExtended;
    })();
    GenericWorkflowDesigner.ScrollableDragDropExtended = ScrollableDragDropExtended;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Notification.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    (function (ValidationMode) {
        ValidationMode[ValidationMode["None"] = 0] = "None";
        ValidationMode[ValidationMode["Warning"] = 1] = "Warning";
        ValidationMode[ValidationMode["Error"] = 2] = "Error";
    })(GenericWorkflowDesigner.ValidationMode || (GenericWorkflowDesigner.ValidationMode = {}));
    var ValidationMode = GenericWorkflowDesigner.ValidationMode;
    var Notification = (function () {
        function Notification(selector) {
            this._messages = new Array();
            this._selector = selector;
            this.activateButtonClicked = false;
        }
        Notification.prototype.ShowNotification = function (summaryMessage, validationMode) {
            if (validationMode == ValidationMode.None) {
                return;
            }
            this._summaryMessage = summaryMessage;
            var notificationView = new GenericWorkflowDesigner.NotificationView($(this._selector), this._messages, this._summaryMessage);
            {
                $(this._selector).css("display", "block");
                $(this._selector).append(notificationView.render().$el);
                if (this.activateButtonClicked == false) {
                    this.activateButtonClicked = true;
                    var workspaceWrapperHeight = parseInt($(".workspaceWrapper").css("height"), 10);
                    workspaceWrapperHeight = workspaceWrapperHeight - parseInt($(this._selector).css("height"), 10);
                    $(".workspaceWrapper").attr("style", "height:" + workspaceWrapperHeight + "px !important");
                    var toolpaneHeight = parseInt($("#toolpane").css("height"), 10);
                    toolpaneHeight = toolpaneHeight - parseInt($(this._selector).css("height"), 10);
                    $("#toolpane").attr("style", "height:" + toolpaneHeight + "px !important");
                }
            }
        };
        Notification.prototype.AppendNotification = function (message) {
            this._messages.push(message);
        };
        Notification.prototype.GetNotifictionCount = function () {
            return this._messages.length;
        };
        Notification.prototype.ClearNotifications = function () {
            $(this._selector).empty();
            $(this._selector).css("display", "none");
            this._messages = new Array();
            if (this.activateButtonClicked) {
                this.activateButtonClicked = false;
                var workspaceWrapperHeight = parseInt($(".workspaceWrapper").css("height"), 10);
                workspaceWrapperHeight = workspaceWrapperHeight + parseInt($(this._selector).css("height"), 10);
                $(".workspaceWrapper").attr("style", "height:" + workspaceWrapperHeight + "px !important");
                var toolpaneHeight = parseInt($("#toolpane").css("height"), 10);
                toolpaneHeight = toolpaneHeight + parseInt($(this._selector).css("height"), 10);
                $("#toolpane").attr("style", "height:" + toolpaneHeight + "px !important");
            }
        };
        return Notification;
    })();
    GenericWorkflowDesigner.Notification = Notification;
    var NotificationMessage = (function () {
        function NotificationMessage(messageType, message, ariaLabelMessage) {
            if (ariaLabelMessage === void 0) { ariaLabelMessage = ""; }
            this.messageType = messageType;
            this.message = message;
            this.ariaLabelMessage = CommonTypes.Types.String.isNullOrEmpty(ariaLabelMessage) ? message : ariaLabelMessage;
        }
        return NotificationMessage;
    })();
    GenericWorkflowDesigner.NotificationMessage = NotificationMessage;
    (function (MessageType) {
        MessageType[MessageType["Warning"] = 0] = "Warning";
        MessageType[MessageType["Error"] = 1] = "Error";
        MessageType[MessageType["Success"] = 2] = "Success";
    })(GenericWorkflowDesigner.MessageType || (GenericWorkflowDesigner.MessageType = {}));
    var MessageType = GenericWorkflowDesigner.MessageType;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityValidationRuleSet.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultActivityValidationRuleSet = (function () {
        function DefaultActivityValidationRuleSet() {
            this.allSlotRules = [];
        }
        DefaultActivityValidationRuleSet.prototype.setRules = function (rules) {
            this.allSlotRules = rules;
        };
        DefaultActivityValidationRuleSet.prototype.isValid = function (activityComponent, currentActivity) {
            var parentActivity = GenericWorkflowDesigner.Settings.workflowTree.getParent(currentActivity);
            var ruleList = null;
            if (parentActivity) {
                var activityId = parentActivity.getActivityTypeID();
                ruleList = this.getRuleForParentActivity(activityId);
            }
            if (ruleList == null) {
                return true;
            }
            else {
                return this.isChildAllowed(GenericWorkflowDesigner.Settings.workflowTree.getParent(currentActivity).getActivityTypeID(), activityComponent.getRoot().getActivityTypeID());
            }
        };
        DefaultActivityValidationRuleSet.prototype.getRuleForParentActivity = function (activityId) {
            var children = null;
            jQuery.each(this.allSlotRules, function (index, rule) {
                if (rule.getParentId() == activityId) {
                    children = rule.getChildrenNotAllowed(activityId);
                }
            });
            return children;
        };
        DefaultActivityValidationRuleSet.prototype.isChildAllowed = function (parentActivityId, droppedActivityId) {
            var childrenNotAllowed = this.getRuleForParentActivity(parentActivityId);
            if ($.inArray(droppedActivityId, childrenNotAllowed) > -1) {
                return false;
            }
            else
                return true;
        };
        return DefaultActivityValidationRuleSet;
    })();
    GenericWorkflowDesigner.DefaultActivityValidationRuleSet = DefaultActivityValidationRuleSet;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotValidationRule.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var SlotValidationRule = (function () {
        function SlotValidationRule(parentId, childrenNotAllowed) {
            this.parentId = parentId;
            this.childrenNotAllowed = childrenNotAllowed;
        }
        SlotValidationRule.prototype.getChildrenNotAllowed = function (parentActivityId) {
            return this.childrenNotAllowed;
        };
        SlotValidationRule.prototype.getParentId = function () {
            return this.parentId;
        };
        return SlotValidationRule;
    })();
    GenericWorkflowDesigner.SlotValidationRule = SlotValidationRule;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
;
//---------------------------------------------------------------------------------------------
// <copyright file="ActivityDefinitionFactory.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Factories to instantiate new instance of ActivityDropController given the designer
// </summary>
//
//---------------------------------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ActivityDropHandlerFactory = (function () {
        function ActivityDropHandlerFactory() {
        }
        ActivityDropHandlerFactory.prototype.createDropActivityController = function (slot) {
            return new GenericWorkflowDesigner.ActivityDropController(slot);
        };
        return ActivityDropHandlerFactory;
    })();
    GenericWorkflowDesigner.ActivityDropHandlerFactory = ActivityDropHandlerFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityFocusHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityFocusHandler = (function () {
        function DefaultActivityFocusHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        DefaultActivityFocusHandler.prototype.focus = function (elementFocused) {
            elementFocused.addClass(GenericWorkflowDesigner.CssClass.HoverOverDroppable);
        };
        return DefaultActivityFocusHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityFocusHandler = DefaultActivityFocusHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityBlurHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityBlurHandler = (function () {
        function DefaultActivityBlurHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        DefaultActivityBlurHandler.prototype.blur = function (elementBlurred) {
            elementBlurred.removeClass(GenericWorkflowDesigner.CssClass.HoverOverDroppable);
        };
        return DefaultActivityBlurHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityBlurHandler = DefaultActivityBlurHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityKeyDownHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityKeyDownHandler = (function () {
        function DefaultActivityKeyDownHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }
        DefaultActivityKeyDownHandler.prototype.keyDown = function (element, event) {
        };
        return DefaultActivityKeyDownHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityKeyDownHandler = DefaultActivityKeyDownHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDropHandler.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var DefaultActivityMultiDropHandler = (function () {
        function DefaultActivityMultiDropHandler(slot) {
            this.slot = slot;
        }
        DefaultActivityMultiDropHandler.prototype.drop = function (activityComponents) {
            var promise = null;
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
            jQuery.each(activityComponents, function (index, component) {
                if (promise == null) {
                    promise = dropHandler.drop(component);
                }
                else {
                    promise = promise.then(function () {
                        return dropHandler.drop(component);
                    });
                }
            });
            return promise;
        };
        return DefaultActivityMultiDropHandler;
    })();
    GenericWorkflowDesigner.DefaultActivityMultiDropHandler = DefaultActivityMultiDropHandler;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultSlotTileHolderHandlerFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./Handlers/ContextHandlers/DefaultContextFlyoutHandler.ts"/>
/// <reference path="./Handlers/ClickHandlers/DefaultActivityClickHandler.ts"/>
/// <reference path="./Handlers/DblClickHandlers/DefaultActivityDblClickHandler.ts"/>
/// <reference path="./Handlers/DblClickHandlers/EmptyActivityDblClickHandler.ts"/>
/// <reference path="./Handlers/DropHandlers/DefaultInsertSlotVerticalDropHandler.ts"/>
/// <reference path="./Handlers/DropHandlers/EmptyActivityDropHandler.ts"/>
/// <reference path="./Handlers/DropHandlers/DefaultActivityDropHandler.ts"/>
/// <reference path="./Handlers/FocusHandlers/DefaultActivityFocusHandler.ts"/>
/// <reference path="./Handlers/FocusHandlers/DefaultActivityBlurHandler.ts"/>
/// <reference path="./Handlers/KeyHandlers/DefaultActivityKeyDownHandler.ts"/>
/// <reference path="./Handlers/MultiDropHandler/TileHolderMultiDropHandler.ts"/>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultSlotTileHolderHandlerFactory = (function () {
        function DefaultSlotTileHolderHandlerFactory() {
            if (DefaultSlotTileHolderHandlerFactory.instance) {
                throw new Error("Error: Instantiantion failed: Use DefaultSlotTileHolderHandlerFactory.getInstance()");
            }
        }
        DefaultSlotTileHolderHandlerFactory.getInstance = function () {
            if (DefaultSlotTileHolderHandlerFactory.instance == null) {
                DefaultSlotTileHolderHandlerFactory.instance = new DefaultSlotTileHolderHandlerFactory();
            }
            return DefaultSlotTileHolderHandlerFactory.instance;
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createDropHandler = function (currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptyActivityDropHandler(currentActivity);
                default:
                    return new GenericWorkflowDesigner.DefaultActivityDropHandler(currentActivity);
            }
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createDragHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityDragHandler(currentActivity);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createMultipleDropHandler = function (slot) {
            return new GenericWorkflowDesigner.TileHolderMultiDropHandler(slot);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createClickHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityClickHandler(currentActivity);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function (currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptyActivityDblClickHandler(currentActivity);
                default:
                    return null;
            }
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createKeyDownHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createFocusHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createBlurHandler = function (currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
        };
        DefaultSlotTileHolderHandlerFactory.prototype.createContextHandler = function (currentActivity) {
            if (currentActivity.getReadonlyMode()) {
                return null;
            }
            switch (currentActivity.getActivityTypeId()) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return null;
                default:
                    return new GenericWorkflowDesigner.DefaultContextFlyoutHandler(currentActivity);
            }
        };
        DefaultSlotTileHolderHandlerFactory.instance = null;
        return DefaultSlotTileHolderHandlerFactory;
    })();
    GenericWorkflowDesigner.DefaultSlotTileHolderHandlerFactory = DefaultSlotTileHolderHandlerFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActionStatus.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    'use strict';
    (function (ActionStatus) {
        ActionStatus[ActionStatus["NotRunning"] = 0] = "NotRunning";
        ActionStatus[ActionStatus["Running"] = 1] = "Running";
        ActionStatus[ActionStatus["Stopping"] = 2] = "Stopping";
        ActionStatus[ActionStatus["Idle"] = 3] = "Idle";
        ActionStatus[ActionStatus["Error"] = 4] = "Error";
    })(GenericWorkflowDesigner.ActionStatus || (GenericWorkflowDesigner.ActionStatus = {}));
    var ActionStatus = GenericWorkflowDesigner.ActionStatus;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultTileInformationFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./EmptyActivityTileInformation.ts" />
///<reference path="../../Views/TileStatus/EmptyStatusView.ts"/>
///<reference path="../../Views/TileStatus/ErrorStatusView.ts"/>
///<reference path="../../Views/TileStatus/ActionStatus.ts"/>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultTileInformationFactory = (function () {
        function DefaultTileInformationFactory() {
        }
        DefaultTileInformationFactory.prototype.GetTileInformationForActivityType = function (activityType) {
            var activityModel = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(activityType);
            return this.GetTileInformationForActivityModel(activityModel);
        };
        DefaultTileInformationFactory.prototype.GetTileInformationForActivityModel = function (activityModel, specificItemId) {
            return new GenericWorkflowDesigner.EmptyActivityTileInformation(activityModel, specificItemId);
        };
        DefaultTileInformationFactory.prototype.GetTileStatusView = function (activity) {
            if (typeof (activity) != "undefined") {
                if (activity.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty
                    || (activity.getErrorCount() == 0 && activity.getWarningCount() == 0)) {
                    return new GenericWorkflowDesigner.EmptyStatusView();
                }
                else {
                    return new GenericWorkflowDesigner.ErrorStatusView(activity);
                }
            }
        };
        DefaultTileInformationFactory.prototype.GetDataUriforImagePath = function (imagePath) {
            return null;
        };
        DefaultTileInformationFactory.prototype.GetLocalizedString = function (inputString) {
            return null;
        };
        return DefaultTileInformationFactory;
    })();
    GenericWorkflowDesigner.DefaultTileInformationFactory = DefaultTileInformationFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Utilities.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.saveSnapshot = function (divElement, fileName) {
            var useWidth = divElement.scrollWidth + 100;
            var useHeight = divElement.scrollHeight + 100;
            var scrlTop = divElement.scrollTop;
            var scrlLeft = divElement.scrollLeft;
            var borderStyle = divElement.style.border;
            divElement.scrollTop = 0;
            divElement.scrollLeft = 0;
            divElement.style.border = "none";
            var backgroundColor = $(divElement).css("background-color");
            html2canvas(divElement, { width: useWidth, height: useHeight, allowTaint: true, type: "view", background: backgroundColor }).then(function (canvas) {
                if (navigator.msSaveBlob) {
                    var imgData = canvas.msToBlob('image/png');
                    navigator.msSaveBlob(imgData, fileName + '.png');
                }
                else {
                    var saveImage = document.createElement('a');
                    saveImage.setAttribute('id', 'saveLink');
                    document.body.appendChild(saveImage);
                    var savedImageDisplayName = fileName + '.png';
                    $("#saveLink").attr('download', savedImageDisplayName);
                    $("#saveLink").attr('href', canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream'));
                    $("#saveLink")[0].click();
                    $("#saveLink").remove();
                }
            });
            divElement.style.border = borderStyle;
            divElement.scrollTop = scrlTop;
            divElement.scrollLeft = scrlLeft;
        };
        Utilities.bindToolbarSubmenuEvents = function (divElement, element) {
            $(".toolbarItemContainer").on("mouseleave", function (event) {
                event.stopPropagation();
                element.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
                element.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
                var ActivityListContainer = element.parent().find(".activity-list-container");
                if (ActivityListContainer.length == 1) {
                    ActivityListContainer.remove();
                    element.focus();
                }
            });
            divElement.on("focusin", function (event) {
                if ($(event.target).attr("id") != "Add"
                    && !$(event.target).hasClass("activity-list-title") && !$(event.target).hasClass("activity-list-listitem")
                    && !$(event.target).hasClass("wrapString") && !$(event.target).hasClass("activityOptionTitle")) {
                    event.stopPropagation();
                    element.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
                    element.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
                    var ActivityListContainer = element.parent().find(".activity-list-container");
                    ActivityListContainer.remove();
                }
            });
        };
        return Utilities;
    })();
    GenericWorkflowDesigner.Utilities = Utilities;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AddGlobalButtonView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AddGlobalButtonView = (function (_super) {
        __extends(AddGlobalButtonView, _super);
        function AddGlobalButtonView() {
            _super.call(this);
        }
        AddGlobalButtonView.prototype.initialize = function () {
        };
        AddGlobalButtonView.prototype.render = function () {
            return this;
        };
        return AddGlobalButtonView;
    })(Backbone.View);
    GenericWorkflowDesigner.AddGlobalButtonView = AddGlobalButtonView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AddGlobalAreaView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var AddGlobalAreaView = (function (_super) {
        __extends(AddGlobalAreaView, _super);
        function AddGlobalAreaView() {
            _super.call(this);
        }
        AddGlobalAreaView.prototype.initialize = function () {
            this._IsVisibile = false;
            this._ButtonIcon = "expandSymbol";
            this._AddGlobalAreaTemplate = _.template("<div id=\"globalbuttonAreaDiv\" class= \"globalButtonDiv\"><table id=\"globalButtonAreaTable\" class=\"globalButtonAreaTable\" > <tr id=\"globalbuttonArea\" ></tr> </table></div>");
            this._ToggleButtonsTemplate = _.template('<button id = \"btnToggleButtons\" class= \"showHidebutton\" title=\"' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_GlobalArea") + '\" aria-label=\"' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_GlobalArea") + '\" tabindex=' + GenericWorkflowDesigner.Settings.tabIndexValue + '><span id=\"spanToggleButtons\" class=\"CCFSymbolFont <%- this._ButtonIcon%> global-fontIcons-size \" style=\"color:white;padding-top:4px;\"></span></button>');
            this._ToggleTemplate = _.template('<div id= \"globalButtonVisibility\" class= \"globalButtonVisibility\"> </div>');
        };
        AddGlobalAreaView.prototype.toggleButtons = function () {
            if (this._IsVisibile) {
                this._IsVisibile = false;
                this._ButtonIcon = "expandSymbol";
                $("#globalButtonVisibility").html('');
                $("#globalButtonVisibility").append(this._ToggleButtonsTemplate());
                $("#globalbuttonAreaDiv").css('visibility', 'hidden');
                $("#globalbuttonAreaDiv").hide();
                $("#globalButtonVisibility").css("border", "1px solid #BBBBBB");
                $("#globalButtonVisibility").css("height", "32px");
                $("#globalButtonVisibility").css("margin-top", "0px");
                $("#globalButtonArea").css("border", "0px");
                $("#spanToggleButtons").css("padding-top", "4px");
            }
            else {
                this._IsVisibile = true;
                this._ButtonIcon = "crossSymbol";
                $("#globalButtonVisibility").html('');
                $("#globalButtonVisibility").append(this._ToggleButtonsTemplate());
                $("#globalButtonVisibility").css("border", "0px");
                $("#globalButtonVisibility").css("border-left", "1px solid #BBBBBB");
                $("#globalButtonArea").css("border", "1px solid #BBBBBB");
                $("#globalButtonVisibility").css("height", "24px");
                $("#globalButtonVisibility").css("margin-top", "3px");
                $("#spanToggleButtons").css("padding-top", "0px");
                $("#globalbuttonAreaDiv").css('visibility', 'visible');
                $("#globalbuttonAreaDiv").show();
            }
        };
        AddGlobalAreaView.prototype.render = function () {
            var self = this;
            $("#globalButtonArea").html("");
            $("#globalButtonArea").addClass("globalAreaDiv");
            $("#globalButtonArea").append(this._AddGlobalAreaTemplate());
            $("#globalbuttonAreaDiv").hide();
            $("#globalButtonArea").append(this._ToggleTemplate());
            $("#globalButtonVisibility").append(this._ToggleButtonsTemplate());
            $("#globalButtonVisibility").on("click", function (event) {
                self.toggleButtons();
            });
            return this;
        };
        return AddGlobalAreaView;
    })(Backbone.View);
    GenericWorkflowDesigner.AddGlobalAreaView = AddGlobalAreaView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ToolBarView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ToolBarView = (function (_super) {
        __extends(ToolBarView, _super);
        function ToolBarView() {
            _super.call(this);
            this.itemArray = new Array();
            this.itemViewArray = new Array();
            this._toolbarTemplate = _.template("<div class=\"toolbar\"><table class=\"toolbarContainer\" role=\"none\"><tr id=\"toolBarRow\"></tr></table></div>");
        }
        ToolBarView.prototype.render = function () {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            this.$el.append(this._toolbarTemplate);
            this.AddItemsInToolBar();
            this.$el.find("button").on("click", function (event) {
                var commandType = event.currentTarget.getAttribute("id");
                GenericWorkflowDesigner.EventManager.publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, event);
            });
            stopwatch.stop();
            localStorage.setItem("PerfMarker_ToolbarRender", stopwatch.elapsedMilliseconds.toString());
            return this.$el;
        };
        ToolBarView.prototype.AddItemsInToolBar = function () {
            var _this = this;
            this.itemViewArray.forEach(function (itemView) {
                _this.$el.find("#toolBarRow").append(itemView.render());
            });
        };
        ToolBarView.prototype.PrepareItems = function () {
            // TODO(v-mayj): Task 297493: Give correct image to buttons.Localize the string.
            // TODO: Have to collect the image for Add Command and title string "Add" has to be localized.
            // CustomControls\ProcessDesignerControl\DesignerWidget\WidgetDemo\Modern.css has #add class which is affecting the add button if we name it as 'add'. We can't change the modern.css file. Hence used 'Add' instead.
            var toolbarItemData = GenericWorkflowDesigner.Settings.configReader.retrieveToolbarItems();
            var toolbarButtonArray = this.itemArray;
            jQuery.each(toolbarItemData, function (item, toolbarData) {
                var toolbarButton = new GenericWorkflowDesigner.ToolBarItem();
                toolbarButton.itemId = toolbarData.itemid;
                toolbarButton.title = toolbarData.title;
                toolbarButton.tooltip = toolbarData.tooltip;
                toolbarButton.fontIconSymbol = toolbarData.fonticonsymbol;
                toolbarButton.section = toolbarData.section;
                toolbarButtonArray.push(toolbarButton);
            });
            this.itemArray = toolbarButtonArray;
        };
        ToolBarView.prototype.PrepareItemViews = function () {
            var _this = this;
            this.itemArray.forEach(function (toolBarItem) {
                var itemView = new GenericWorkflowDesigner.ToolBarItemview(toolBarItem);
                _this.itemViewArray.push(itemView);
            });
        };
        return ToolBarView;
    })(Backbone.View);
    GenericWorkflowDesigner.ToolBarView = ToolBarView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ToolBarItemview.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ToolBarItemview = (function (_super) {
        __extends(ToolBarItemview, _super);
        function ToolBarItemview(model) {
            _super.call(this, model);
            this.model = model;
            this._buttonTemplate = _.template("<button id=\"<%- itemId %>\" aria-label='" + this.model.title + "' class=\"toolbarItem\" role=\"button\" type=\"submit\" title=\" <%- tooltip %> \" tabindex=\"" + GenericWorkflowDesigner.Settings.tabIndexValue + "\"><span class=\"CCFSymbolFont " + this.model.fontIconSymbol + " toolbar-fontIcons-size\"></span><div id=\"toolBarItemTitle" + this.model.title + "\" class=\"truncateString utilityBarItem-normal-mode\">" + this.model.title + "</div></button>")(model);
        }
        ToolBarItemview.prototype.initialize = function () {
            this.events = {
                "mouseover": this.onHover,
                "mouseleave": this.onMouseLeave
            };
        };
        ToolBarItemview.prototype.render = function () {
            var _self = this;
            this.$el.append(_self._buttonTemplate);
            this.$el.addClass("toolbarItemContainer");
            return this.$el;
        };
        ToolBarItemview.prototype.onHover = function (event) {
            this.$el.find("#toolBarItemTitle").removeClass("utilityBarItem-normal-mode");
            this.$el.find("#toolBarItemTitle").addClass("utilityBarItem-selected-mode");
        };
        ToolBarItemview.prototype.onMouseLeave = function (event) {
            this.$el.find("#toolBarItemTitle").removeClass("utilityBarItem-selected-mode");
            this.$el.find("#toolBarItemTitle").addClass("utilityBarItem-normal-mode");
        };
        return ToolBarItemview;
    })(Backbone.View);
    GenericWorkflowDesigner.ToolBarItemview = ToolBarItemview;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomItemview.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ZoomItemView = (function (_super) {
        __extends(ZoomItemView, _super);
        function ZoomItemView(model) {
            _super.call(this, model);
            this.model = model;
            this._buttonTemplate = _.template("<button id=\"<%- itemId %>\" class=\"zoomIconItem\" type=\"submit\" role=\"button\" title=\" <%- title %> \" aria-label=\" <%- title %> \" tabindex=\"" + GenericWorkflowDesigner.Settings.tabIndexValue + "\"><span class=\"CCFSymbolFont " + this.model.fontIconSymbol + " zoomIcon-fontIcons-size\"></span></button>")(model);
        }
        ZoomItemView.prototype.initialize = function () {
        };
        ZoomItemView.prototype.render = function () {
            var _self = this;
            this.$el.append(_self._buttonTemplate);
            this.$el.addClass("ZoomItemContainer");
            return this.$el;
        };
        return ZoomItemView;
    })(Backbone.View);
    GenericWorkflowDesigner.ZoomItemView = ZoomItemView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CanvasView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var ZoomIconHolderView = (function (_super) {
        __extends(ZoomIconHolderView, _super);
        function ZoomIconHolderView(zoomIconHolder) {
            _super.call(this, { el: zoomIconHolder });
            this.$el.empty();
            this.zoomItemArray = new Array();
            this.zoomItemViewArray = new Array();
            this.$el.addClass(ZoomIconHolderView.zoomIconHolderClass);
            this._zoomIconTemplate = _.template("<table class=\"zoomIconContainer\"><tr><td id=\"zoomOut\" class=\"zoomIconSection\" ></td><td id=\"zoomIn\" class=\"zoomIconSection\" ></td><td id=\"fitToScreen\" class=\"zoomIconSection\" ></td></tr></table>");
        }
        ZoomIconHolderView.prototype.render = function () {
            var _this = this;
            this.prepareItems();
            this.prepareViews();
            this.$el.append(this._zoomIconTemplate);
            this.zoomItemViewArray.forEach(function (zoomView) {
                _this.$el.find("#" + zoomView.model.itemId).append(zoomView.render());
            });
            this.$el.find("button").on("click", function (event) {
                var commandType = event.currentTarget.getAttribute("id");
                ZoomIconHolderView.getCommandObject(commandType).execute();
            });
        };
        ZoomIconHolderView.getCommandObject = function (commandType) {
            switch (commandType.toLowerCase()) {
                case "zoomin":
                    return new GenericWorkflowDesigner.ZoomInCommand();
                case "zoomout":
                    return new GenericWorkflowDesigner.ZoomOutCommand();
                case "fittoscreen":
                    return new GenericWorkflowDesigner.FitToScreenCommand();
            }
        };
        ZoomIconHolderView.prototype.prepareItems = function () {
            var zoomItemData = GenericWorkflowDesigner.Settings.configReader.retrieveZoomItems();
            var zoomButtonArray = this.zoomItemArray;
            jQuery.each(zoomItemData, function (index, zoomItem) {
                var zoomButton = new GenericWorkflowDesigner.ZoomItem();
                zoomButton.title = zoomItem.title;
                zoomButton.itemId = zoomItem.itemid;
                zoomButton.fontIconSymbol = zoomItem.fonticonsymbol;
                zoomButtonArray.push(zoomButton);
            });
            this.zoomItemArray = zoomButtonArray;
        };
        ZoomIconHolderView.prototype.prepareViews = function () {
            var zoomItems = this.zoomItemArray;
            var zoomItemViews = this.zoomItemViewArray;
            jQuery.each(zoomItems, function (index, zoomItem) {
                var zoomItemView = new GenericWorkflowDesigner.ZoomItemView(zoomItem);
                zoomItemViews.push(zoomItemView);
            });
            this.zoomItemViewArray = zoomItemViews;
        };
        ZoomIconHolderView.zoomIconHolderClass = "zoomIconHolder";
        return ZoomIconHolderView;
    })(Backbone.View);
    GenericWorkflowDesigner.ZoomIconHolderView = ZoomIconHolderView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MessagesView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var MessagesView = (function (_super) {
        __extends(MessagesView, _super);
        function MessagesView(model) {
            _super.call(this, model);
            this._messages = model.AllMessages;
            this._summaryType = model.SummaryType;
            this._fontIcon = "errorNotificationSymbol";
            this._messageTemplate = _.template("<ul style= \"list-style: none;\">" +
                "<%_.each(obj, function (msg) {%>" +
                "<%var color;var notificationFontIcon;if (msg.messageType == 0) {color = \"orange\";notificationFontIcon=\"" + this._fontIcon + "\"}else if(msg.messageType ==1) {color = \"red\";notificationFontIcon=\"" + this._fontIcon + "\"} else{color =\"green\";notificationFontIcon=\"" + this._fontIcon + "\"}%>" +
                "<li style= \"color:<%-color%>\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span> <%- msg.message %> </li>" +
                "<%});%>" +
                "</ul>", JSON.parse(JSON.stringify(this._messages)));
        }
        MessagesView.prototype.render = function () {
            var color;
            if (this._summaryType == GenericWorkflowDesigner.MessageType.Error)
                color = "red";
            else {
                color = "orange";
            }
            this.$el.css({ "border-top": color + " 1px solid", "margin": "0px 10px", "max-height": "100px", "overflow-y": "scroll" });
            this.$el.append(this._messageTemplate);
            return this;
        };
        return MessagesView;
    })(Backbone.View);
    GenericWorkflowDesigner.MessagesView = MessagesView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MiniMapView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    "use strict";
    var MiniMapView = (function () {
        function MiniMapView() {
        }
        MiniMapView.prototype.renderMiniMap = function (canvas, selectors, zoomOutDiv) {
            var miniMapId = '#mini-map';
            var processComponents = "stageTileSymbol,conditionTileSymbol,acceptConditionTileSymbol,suggestionTileSymbol,lockUnlockTileSymbol,showErrorMessageTileSymbol,setFieldTileSymbol,setDefaultTileSymbol,setFiledRequiredLevelTileSymbol,setVisiblityTileSymbol,yesBranchSymbol,noBranchSymbol,customJavascriptTileSymbol";
            var closeMiniMapSymbol = "0xE93B";
            var showMiniMapSymbol = "0xE93A";
            var selectorsString = "";
            if (selectors.length > 0) {
                selectorsString = selectors[0];
                for (var i = 1; i < selectors.length; i++)
                    selectorsString = selectorsString + "," + selectors[i];
            }
            $("#mini-map-wrapper").remove();
            var miniMapWrapper = "<div id=\"mini-map-wrapper\">\n\t\t\t\t\t<button id= \"close-mini-map\" title= \"{0}\" aria-label=\"{1}\" type= \"button\" role= \"button\" aria-expanded=\"true\" tabindex=\"{2}\">\n\t\t\t\t\t</button>\n\t\t\t\t\t<canvas id= \"mini-map\" width= \"{3}\" height= \"{4}\" >\n\t\t\t\t\t</canvas>\n\t\t\t\t\t<div id= \"show-mini-map-div\" >\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width=\"33px\">\n\t\t\t\t\t\t\t\t\t\t<button id=\"show-mini-map\" title= \"{5}\" aria- label=\"{6}\" role=\"button\" aria-expanded=\"false\" tabindex=\"{7}\">\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td id=\"miniMapWrapperTD\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"padding-left:8px;padding-top:6px;color:{8}\" title= \"{9}\" >\n\t\t\t\t\t\t\t\t\t\t\t{10}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
            $(canvas).append(CommonTypes.Types.String.Format(miniMapWrapper, GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_CloseMinimap_Tooltip"), GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_CloseMinimap_Tooltip"), GenericWorkflowDesigner.Settings.tabIndexValue, GenericWorkflowDesigner.Settings.layoutProperties.miniMapWidth, GenericWorkflowDesigner.Settings.layoutProperties.miniMapHeight, GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip"), GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip"), GenericWorkflowDesigner.Settings.tabIndexValue, (GenericWorkflowDesigner.designerType === GenericWorkflowDesigner.DesignerType.BpfDesigner) ? '#333333' : 'white', GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip"), GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_Minimap")));
            if (GenericWorkflowDesigner.designerType === GenericWorkflowDesigner.DesignerType.BpfDesigner) {
                $(miniMapId).fracs('outline', {
                    styles: [{
                            selector: selectorsString,
                            strokeWidth: 'auto',
                            strokeStyle: 'rgb(51,51,51)',
                            fillStyle: 'auto'
                        }],
                    viewportStyle: {
                        fillStyle: 'rgba(234,234,234,0.5)'
                    },
                    viewportDragStyle: {
                        fillStyle: 'rgb(234,234,234,0.6)'
                    },
                    zoomOutDiv: zoomOutDiv,
                    closeMiniMapSymbol: closeMiniMapSymbol,
                    showMiniMapSymbol: showMiniMapSymbol,
                    processComponents: processComponents,
                    rerenderMinimapThroughDragDropFlag: GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag,
                    miniMapViewPortLeftPadding: GenericWorkflowDesigner.Settings.layoutProperties.miniMapViewPortLeftPadding,
                    miniMapTileWidthRatio: GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio,
                    miniMapTileHeightRatio: (GenericWorkflowDesigner.Settings.layoutProperties.width * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) / GenericWorkflowDesigner.Settings.layoutProperties.height
                }, $(canvas));
            }
            else {
                $(miniMapId).fracs('outline', {
                    styles: [{
                            selector: selectorsString,
                            strokeWidth: 'auto',
                            strokeStyle: 'rgb(255, 255, 255)',
                            fillStyle: 'auto'
                        }],
                    viewportStyle: {
                        fillStyle: 'rgba(119,119,119,0.5)'
                    },
                    viewportDragStyle: {
                        fillStyle: 'rgba(119,119,119,0.6)'
                    },
                    zoomOutDiv: zoomOutDiv,
                    closeMiniMapSymbol: closeMiniMapSymbol,
                    showMiniMapSymbol: showMiniMapSymbol,
                    processComponents: processComponents,
                    rerenderMinimapThroughDragDropFlag: GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag,
                    miniMapViewPortLeftPadding: GenericWorkflowDesigner.Settings.layoutProperties.miniMapViewPortLeftPadding,
                    miniMapTileWidthRatio: GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio,
                    miniMapTileHeightRatio: (GenericWorkflowDesigner.Settings.layoutProperties.width * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) / GenericWorkflowDesigner.Settings.layoutProperties.height
                }, $(canvas));
            }
            $(window).resize(function () {
                MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible();
            });
            $(window).load(function () {
                MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible();
            });
        };
        MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible = function () {
            var isCloseMiniMapButtonVisible = $("#close-mini-map").offset().top > $("#canvasWrapper").offset().top;
            var isMiniMapWrapperVisible = $("#mini-map-wrapper").css("visibility") === "visible" ? true : false;
            if (isMiniMapWrapperVisible && !isCloseMiniMapButtonVisible) {
                MiniMapView.showMiniMap(false);
                MiniMapView.isMinimapStateChanged = true;
            }
            else if (MiniMapView.isMinimapStateChanged && isCloseMiniMapButtonVisible) {
                MiniMapView.showMiniMap(true);
                MiniMapView.isMinimapStateChanged = false;
            }
        };
        MiniMapView.showMiniMap = function (isVisible) {
            if (isVisible) {
                $("#mini-map-wrapper").css("visibility", "visible");
                $("#show-mini-map-div").css("visibility", "hidden");
            }
            else {
                $("#mini-map-wrapper").css("visibility", "hidden");
                $("#show-mini-map-div").css("visibility", "visible");
            }
        };
        MiniMapView.isMinimapStateChanged = false;
        return MiniMapView;
    })();
    GenericWorkflowDesigner.MiniMapView = MiniMapView;
    ;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="NotificationView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var NotificationView = (function (_super) {
        __extends(NotificationView, _super);
        function NotificationView(notificationContainer, notifications, summary) {
            _super.call(this);
            this._messages = notifications;
            this._summaryMessage = summary;
            this._parent = notificationContainer;
            this._NotificationAreatemplate = _.template("<table class=\"notificationMessages\" style=\"width:100%\" role=\"log\" >"
                + "<tr style=\"height:10px; width:100%;\" >"
                + "<td id=\"summaryMessasge\" style=\"width:85%;text-align:inherit;padding-right:5px\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span></td>"
                + "<td style=\"width:10%\"><button id=\"btnViewDetails\" class=\"notificationbutton\" ><%-viewDetailsText%> <span class=\"CCFSymbolFont moreSymbol \"></span></button></td>"
                + "<td style=\"width:5%\" role=\"presentation\"><button id=\"btnClose\" class=\"notificationbutton\" title=\"" + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_HideNotification_Tooltip") + "\"><span class=\"CCFSymbolFont closeSymbol notification-fontIcons-size\"></button></td>"
                + "</tr>"
                + "<tr>"
                + "<td id=\"allMessages\" colspan=\"3\" role=\"presentation\" ></td>"
                + "</tr>"
                + "</table>")(this.GetTemplateData());
        }
        NotificationView.prototype.initialize = function () {
            this.events = {
                "click #btnViewDetails": this.clickViewDetailsHandler,
                "click #btnClose": this.clickCloseHandler
            };
        };
        NotificationView.prototype.render = function () {
            this.$el.addClass("notification");
            this.$el.append(this._NotificationAreatemplate);
            this.appendChildViews();
            this.applyCSS();
            return this;
        };
        NotificationView.prototype.appendChildViews = function () {
            var summaryMessageDiv = this.$el.find("#summaryMessasge");
            if (this._messages.length == 1) {
                summaryMessageDiv.append(this._messages[0].message);
                summaryMessageDiv.attr("title", this._messages[0].message);
                summaryMessageDiv.attr("aria-label", this._summaryMessage.ariaLabelMessage);
                this.$el.find("#btnViewDetails").hide();
                this.$el.find("#btnViewDetails").attr("role", "presentation");
                this.$el.find("#btnViewDetails").parents('td').attr("role", "presentation");
            }
            else if (this._summaryMessage != undefined) {
                summaryMessageDiv.append(this._summaryMessage.message);
                summaryMessageDiv.attr("title", this._summaryMessage.message);
                summaryMessageDiv.attr("aria-label", this._summaryMessage.ariaLabelMessage);
                if (this._messages.length == 0) {
                    this.$el.find("#btnViewDetails").hide();
                    this.$el.find("#btnViewDetails").attr("role", "presentation");
                    this.$el.find("#btnViewDetails").parents('td').attr("role", "presentation");
                }
                else if (this._messages.length > 1) {
                    this._allmessagesView = new GenericWorkflowDesigner.MessagesView({
                        "SummaryType": this._summaryMessage.messageType,
                        "AllMessages": this._messages
                    });
                    this.$el.find("#allMessages").append(this._allmessagesView.render().$el).hide();
                }
            }
        };
        NotificationView.prototype.clickViewDetailsHandler = function () {
            this.$el.find("#allMessages").toggle();
        };
        NotificationView.prototype.clickCloseHandler = function () {
            this._parent.css("display", "none");
            var workspaceWrapperHeight = parseInt($(".workspaceWrapper").css("height"), 10);
            workspaceWrapperHeight = workspaceWrapperHeight + parseInt($(this._parent).css("height"), 10);
            $(".workspaceWrapper").attr("style", "height:" + workspaceWrapperHeight + "px !important");
            var toolpaneHeight = parseInt($("#toolpane").css("height"), 10);
            toolpaneHeight = toolpaneHeight + parseInt($(this._parent).css("height"), 10);
            $("#toolpane").attr("style", "height:" + toolpaneHeight + "px !important");
            GenericWorkflowDesigner.Settings.notification.activateButtonClicked = false;
        };
        NotificationView.prototype.applyCSS = function () {
            if (this._summaryMessage != undefined) {
                switch (this._summaryMessage.messageType) {
                    case GenericWorkflowDesigner.MessageType.Error:
                        this.$el.find(".notificationMessages").addClass("errorArea");
                        this.$el.find("#summaryMessasge").css("color", "red");
                        if (this.$el.find("#btnClose").length > 0)
                            this.$el.find("#btnClose").remove();
                        break;
                    case GenericWorkflowDesigner.MessageType.Warning:
                        this.$el.find(".notificationMessages").addClass("warningArea");
                        break;
                    case GenericWorkflowDesigner.MessageType.Success:
                        this.$el.find(".notificationMessages").addClass("successArea");
                        break;
                }
            }
        };
        NotificationView.prototype.GetTemplateData = function () {
            var notificationFontIcon = "errorNotificationSymbol";
            switch (this._summaryMessage.messageType) {
                case GenericWorkflowDesigner.MessageType.Success:
                    notificationFontIcon = "successNotificationSymbol";
                    break;
                case GenericWorkflowDesigner.MessageType.Error:
                    notificationFontIcon = "errorNotificationSymbol";
                    break;
                case GenericWorkflowDesigner.MessageType.Warning:
                    notificationFontIcon = "warningNotificationSymbol";
                    break;
            }
            var viewDetailsText = GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ViewDetails");
            return { "notificationFontIcon": notificationFontIcon, "viewDetailsText": viewDetailsText };
        };
        return NotificationView;
    })(Backbone.View);
    GenericWorkflowDesigner.NotificationView = NotificationView;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="Browser.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var Browser = (function () {
        function Browser() {
        }
        Browser.isFireFox = function () {
            return /firefox/i.test(window.navigator.userAgent);
        };
        return Browser;
    })();
    GenericWorkflowDesigner.Browser = Browser;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityPositionCalculator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./PositionCalculator.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityPositionCalculator = (function () {
        function DefaultActivityPositionCalculator() {
        }
        DefaultActivityPositionCalculator.prototype.calculate = function (activityModel, row, column) {
            activityModel.setRow(row);
            activityModel.setCol(column);
            var children = activityModel.getChildActivitiesSorted();
            var step = 0;
            for (var i = 0; i < children.length; i++) {
                DefaultActivityPositionCalculator.maxRow += step;
                step = 1;
                GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory.getCalculator(children[i].getActivityTypeId()).calculate(children[i], DefaultActivityPositionCalculator.maxRow, column + 1);
            }
        };
        DefaultActivityPositionCalculator.prototype.getLineConnectors = function (parentActivity, childActivity) {
            return GenericWorkflowDesigner.Settings.lineConnectorProviderFactory.getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
        };
        return DefaultActivityPositionCalculator;
    })();
    GenericWorkflowDesigner.DefaultActivityPositionCalculator = DefaultActivityPositionCalculator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityPositionCalculatorFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./DefaultActivityPositionCalculator.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityPositionCalculatorFactory = (function () {
        function DefaultActivityPositionCalculatorFactory() {
            this.cachedCalculators = {};
        }
        DefaultActivityPositionCalculatorFactory.prototype.getCalculator = function (activityType) {
            var calculator = this.cachedCalculators[activityType];
            if (calculator == null || calculator == undefined) {
                calculator = this.initializeCalculator(activityType);
                this.cachedCalculators[activityType] = calculator;
            }
            return calculator;
        };
        DefaultActivityPositionCalculatorFactory.prototype.initializeCalculator = function (activityType) {
            return new GenericWorkflowDesigner.DefaultActivityPositionCalculator();
        };
        return DefaultActivityPositionCalculatorFactory;
    })();
    GenericWorkflowDesigner.DefaultActivityPositionCalculatorFactory = DefaultActivityPositionCalculatorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MouseWheelBehavior.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./Browser.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var MouseWheelBehavior = (function () {
        function MouseWheelBehavior() {
        }
        MouseWheelBehavior.calculateMouseWheelScrollOffset = function (e) {
            if (e == null) {
                return 0;
            }
            if (typeof (e.wheelDelta) != "undefined" && e.wheelDelta != null && e.wheelDelta != 0) {
                return GenericWorkflowDesigner.Browser.isFireFox() ? e.wheelDelta * -40 : e.wheelDelta;
            }
            if (typeof (e.detail) != "undefined" && e.detail != null && e.detail != 0) {
                return GenericWorkflowDesigner.Browser.isFireFox() ? e.detail * -40 : e.detail;
            }
            if (typeof (e.originalEvent) != "undefined" && e.originalEvent != null) {
                return this.calculateMouseWheelScrollOffset(e.originalEvent);
            }
            return 0;
        };
        return MouseWheelBehavior;
    })();
    GenericWorkflowDesigner.MouseWheelBehavior = MouseWheelBehavior;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CopyCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var CopyCommand = (function () {
        function CopyCommand() {
        }
        CopyCommand.prototype.execute = function () {
            this.copyActivities();
        };
        CopyCommand.prototype.copyActivities = function () {
            GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities());
        };
        return CopyCommand;
    })();
    GenericWorkflowDesigner.CopyCommand = CopyCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="CutCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var CutCommand = (function () {
        function CutCommand() {
        }
        CutCommand.prototype.execute = function () {
            var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
            if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                return;
            }
            var copiedActivites = [];
            jQuery.each(selectedActivities, function (index, activity) {
                var copiedActivity = activity.getCloneOfActivity();
                copiedActivites.push(copiedActivity);
            });
            GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(copiedActivites);
            GenericWorkflowDesigner.ActivityDeleteHandler.prototype.deleteSelectedActivities();
            CutCommand.cutInProgress = true;
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
        };
        CutCommand.cutInProgress = false;
        return CutCommand;
    })();
    GenericWorkflowDesigner.CutCommand = CutCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DeleteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var DeleteCommand = (function () {
        function DeleteCommand() {
        }
        DeleteCommand.prototype.execute = function () {
            GenericWorkflowDesigner.ActivityDeleteHandler.prototype.deleteSelectedActivities();
        };
        return DeleteCommand;
    })();
    GenericWorkflowDesigner.DeleteCommand = DeleteCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ----------------------------------------------------------------------- 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ZoomItem = (function (_super) {
        __extends(ZoomItem, _super);
        function ZoomItem() {
            _super.apply(this, arguments);
        }
        return ZoomItem;
    })(Backbone.Model);
    GenericWorkflowDesigner.ZoomItem = ZoomItem;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var FitToScreenCommand = (function () {
        function FitToScreenCommand() {
        }
        FitToScreenCommand.prototype.execute = function () {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showHideSeeDetails);
            var currentZoomContainerPadding = parseInt($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
            if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 && GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
            }
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
            var transformMatrix = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).css("transform");
            var currentScale, arrValues, canvasWidth, zoomRatio;
            if (transformMatrix.search('matrix3d') != -1) {
                arrValues = transformMatrix.replace('matrix3d(', '').replace(')', '').split(',');
                currentScale = arrValues[0];
            }
            else {
                arrValues = transformMatrix.replace('matrix(', '').replace(')', '').split(',');
                currentScale = arrValues[3];
            }
            canvasWidth = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width() * currentScale;
            var scaleToAdd = (($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).width() - canvasWidth) / $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width());
            zoomRatio = (canvasWidth / $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width()) + scaleToAdd;
            GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = zoomRatio;
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
            $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top", Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio * GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) + "px");
            GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasFitToScreenEvent, $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
            stopwatch.stop();
            localStorage.setItem("PerfMarker_FitToScreen", stopwatch.elapsedMilliseconds.toString());
        };
        return FitToScreenCommand;
    })();
    GenericWorkflowDesigner.FitToScreenCommand = FitToScreenCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ToolBarItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ----------------------------------------------------------------------- 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var ToolBarItem = (function (_super) {
        __extends(ToolBarItem, _super);
        function ToolBarItem() {
            _super.apply(this, arguments);
        }
        return ToolBarItem;
    })(Backbone.Model);
    GenericWorkflowDesigner.ToolBarItem = ToolBarItem;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="PasteCommand.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var PasteCommand = (function () {
        function PasteCommand() {
            this.currentActivity = null;
        }
        PasteCommand.prototype.execute = function () {
            this.pasteActivities();
        };
        PasteCommand.prototype.pasteActivities = function () {
            var self = this;
            self.currentActivity = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities()[0];
            var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
            if (copiedActivities.length <= 0) {
                return;
            }
            var extractor = new GenericWorkflowDesigner.ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor.getConnectedComponentsFromSelection(copiedActivities);
            var promise = null;
            jQuery.each(connectedComponents, function (index, connectedComponent) {
                if (promise == null) {
                    promise = self.pasteComponent(connectedComponent);
                }
                else {
                    promise = promise.then(function () {
                        return self.pasteComponent(connectedComponent);
                    });
                }
            });
            promise.done(function () {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.trigger(self.currentActivity);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                    GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([]);
                }
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            });
        };
        PasteCommand.prototype.pasteComponent = function (connectedComponent) {
            var self = this;
            var deferred = $.Deferred();
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory.createDropHandler(this.currentActivity);
            var originalActivities = connectedComponent.getNodes();
            var originalRootActivity = connectedComponent.getRoot();
            var originalActivitiesParentsMap = [];
            var pastedToOriginalClientIdMap = [];
            var originalToPastedClientIdMap = [];
            var pastedActivities = [];
            var pastedRootActivity;
            jQuery.each(originalActivities, function (index, originalActivity) {
                var parent = originalActivity.getParent();
                originalActivitiesParentsMap[originalActivity.cid] = parent.cid;
                var pastedActivity = originalActivity.getCloneOfActivity();
                pastedToOriginalClientIdMap[pastedActivity.cid] = originalActivity.cid;
                originalToPastedClientIdMap[originalActivity.cid] = pastedActivity.cid;
                if (originalActivity == originalRootActivity) {
                    pastedRootActivity = pastedActivity;
                }
                pastedActivities.push(pastedActivity);
            });
            var pastedActivitiesParentsMap = self.createPastedActivitiesClientIdsParentMap(pastedActivities, pastedRootActivity, pastedToOriginalClientIdMap, originalToPastedClientIdMap, originalActivitiesParentsMap);
            self.savePastedActivitiesAndSetParentIds(pastedActivities, pastedRootActivity, pastedActivitiesParentsMap)
                .done(function () {
                var componentToDrop = new GenericWorkflowDesigner.ConnectedComponent(pastedRootActivity);
                dropHandler.drop(componentToDrop).done(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise();
        };
        PasteCommand.prototype.createPastedActivitiesClientIdsParentMap = function (pastedActivities, pastedRootActivity, pastedToOriginalClientIdMap, originalToPastedClientIdMap, originalActivitiesParentsMap) {
            var pastedActivitiesParentsMap = [];
            jQuery.each(pastedActivities, function (index, pastedActivity) {
                if (pastedActivity == pastedRootActivity) {
                    return;
                }
                var parentOfOldMatchingActivity = originalActivitiesParentsMap[pastedToOriginalClientIdMap[pastedActivity.cid]];
                pastedActivitiesParentsMap[pastedActivity.cid] = originalToPastedClientIdMap[parentOfOldMatchingActivity];
            });
            return pastedActivitiesParentsMap;
        };
        PasteCommand.prototype.savePastedActivitiesAndSetParentIds = function (pastedActivities, pastedRootActivity, pastedActivitiesParentsMap) {
            var deferred = $.Deferred();
            var promises = [];
            jQuery.each(pastedActivities, function (index, newItem) {
                promises.push(newItem.save());
            });
            var serverIdsMap = [];
            $.when.apply(self, promises).done(function () {
                jQuery.each(pastedActivities, function (index, newItem) {
                    serverIdsMap[newItem.cid] = newItem.getActivityID();
                    GenericWorkflowDesigner.Settings.workflowTree.add(newItem);
                });
                promises = [];
                jQuery.each(pastedActivities, function (index, pastedActivity) {
                    if (pastedActivity == pastedRootActivity) {
                        return;
                    }
                    var realParentId = serverIdsMap[pastedActivitiesParentsMap[pastedActivity.cid]];
                    pastedActivity.setParentActivityID(realParentId);
                    promises.push(pastedActivity.save());
                });
                $.when.apply(self, promises).done(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise();
        };
        return PasteCommand;
    })();
    GenericWorkflowDesigner.PasteCommand = PasteCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ZoomInCommand = (function () {
        function ZoomInCommand() {
        }
        ZoomInCommand.prototype.execute = function () {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            if (GenericWorkflowDesigner.canZoomIn()) {
                var currentZoomContainerPadding = parseInt($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 && GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
                }
                GenericWorkflowDesigner.ZoomConstants.currentZoomRatio += GenericWorkflowDesigner.ZoomConstants.zoomScale;
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio > GenericWorkflowDesigner.ZoomConstants.maxZoomRatio)
                    GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = GenericWorkflowDesigner.ZoomConstants.maxZoomRatio;
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("zoom", GenericWorkflowDesigner.ZoomConstants.zoomScale, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("zoom", GenericWorkflowDesigner.ZoomConstants.zoomScale, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top", Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio * GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) + "px");
                GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasZoomInEvent, $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
            }
            stopwatch.stop();
            localStorage.setItem("PerfMarker_ZoomIn", stopwatch.elapsedMilliseconds.toString());
        };
        return ZoomInCommand;
    })();
    GenericWorkflowDesigner.ZoomInCommand = ZoomInCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ZoomOutCommand = (function () {
        function ZoomOutCommand() {
        }
        ZoomOutCommand.prototype.execute = function () {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            if (GenericWorkflowDesigner.canZoomOut()) {
                var currentZoomContainerPadding = parseInt($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 && GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
                }
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
                GenericWorkflowDesigner.ZoomConstants.currentZoomRatio -= GenericWorkflowDesigner.ZoomConstants.zoomScale;
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio < GenericWorkflowDesigner.ZoomConstants.minZoomRatio)
                    GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = GenericWorkflowDesigner.ZoomConstants.minZoomRatio;
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("zoom", GenericWorkflowDesigner.ZoomConstants.zoomScale * -1, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("zoom", GenericWorkflowDesigner.ZoomConstants.zoomScale * -1, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top", Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio * GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) + "px");
                GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasZoomOutEvent, $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
            }
            stopwatch.stop();
            localStorage.setItem("PerfMarker_ZoomOut", stopwatch.elapsedMilliseconds.toString());
        };
        return ZoomOutCommand;
    })();
    GenericWorkflowDesigner.ZoomOutCommand = ZoomOutCommand;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" /> 
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    'use strict';
    var ZoomConstants = (function () {
        function ZoomConstants() {
        }
        ZoomConstants.zoomAnimateDuration = 100;
        ZoomConstants.zoomScale = 0.1;
        ZoomConstants.currentZoomRatio = 1;
        ZoomConstants.initialCanvasWidth = 0;
        ZoomConstants.initialCanvasHeight = 0;
        ZoomConstants.maxZoomRatio = 3;
        ZoomConstants.minZoomRatio = 0.25;
        ZoomConstants.canvasPaddingAtUnitZoom = 0;
        ZoomConstants.targetZoomId = "canvas";
        ZoomConstants.zoomParentContainerId = "zoomCanvasWrapper";
        ZoomConstants.hiddenTargetZoomId = "zoomoutdiv";
        return ZoomConstants;
    })();
    GenericWorkflowDesigner.ZoomConstants = ZoomConstants;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="DefaultActivityDefinitionFactory.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./EmptyActivity.ts" />
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var DefaultActivityDefinitionFactory = (function () {
        function DefaultActivityDefinitionFactory() {
        }
        DefaultActivityDefinitionFactory.prototype.createActivity = function (activityType) {
            switch (activityType) {
                case GenericWorkflowDesigner.ActivityType.Empty:
                    return new GenericWorkflowDesigner.EmptyActivity();
                default:
                    return new GenericWorkflowDesigner.ActivityDefinitionModel();
            }
        };
        DefaultActivityDefinitionFactory.prototype.convertToConcreteActivity = function (activity) {
            var concreteActivity = this.createActivity(activity.getActivityTypeID());
            concreteActivity.setActivityID(activity.getActivityID());
            concreteActivity.setWorkflowID(activity.getWorkflowID());
            concreteActivity.setParentActivityID(activity.getParentActivityID());
            concreteActivity.setParentBranchID(activity.getParentBranchID());
            concreteActivity.setProperties(activity.getProperties());
            return concreteActivity;
        };
        DefaultActivityDefinitionFactory.prototype.convertToConcreteActivityFromJSON = function (activityJSON) {
            var concreteActivity;
            return concreteActivity;
        };
        return DefaultActivityDefinitionFactory;
    })();
    GenericWorkflowDesigner.DefaultActivityDefinitionFactory = DefaultActivityDefinitionFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AddGlobalButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function (GenericWorkflowDesigner) {
    var GlobalButtonModel = (function () {
        function GlobalButtonModel() {
            this._buttonList = new Array();
        }
        GlobalButtonModel.prototype.addButton = function (newButton) {
            this._buttonList.push(newButton);
        };
        GlobalButtonModel.prototype.renderButtons = function () {
            var globalArea = new GenericWorkflowDesigner.AddGlobalAreaView();
            globalArea.render();
            this._buttonList.forEach(function (button) {
                button.render();
            });
        };
        return GlobalButtonModel;
    })();
    GenericWorkflowDesigner.GlobalButtonModel = GlobalButtonModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
