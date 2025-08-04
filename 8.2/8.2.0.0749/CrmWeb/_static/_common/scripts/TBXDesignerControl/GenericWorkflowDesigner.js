// -----------------------------------------------------------------------
// <copyright file="WorkflowSyncerConfig.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    'use strict';
    /**Workflow Syncer Config - contains the url endpoints for entity automation service. */
    var appModel = (function() {
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
(function(CommonTypes) {
    'use strict';
    /// <summary>
    /// Common javascript types helper. 
    /// </summary>
    var Types = (function() {
        function Types() {
        }

        Object.defineProperty(Types,
            "String",
            {
                get: function() {
                    return {
                        Empty: "",
                        isNullOrEmpty: function(s) {
                            return s == null || s.length == 0;
                        },
                        htmlDecodeText: function(text) { return $('<div/>').html(text).text(); },
                        /// <summary>Returns a formatted string, similar to string.Format in C#.</summary>
                        /// <remarks>Limited functionality implemented.</remarks>
                        Format: function(format) {
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            var returnValue = format;
                            for (var i = 1; i < arguments.length; i++) {
                                var actualValue = typeof (arguments[i]) == "undefined" || arguments[i] == null
                                    ? ""
                                    : arguments[i].toString();
                                returnValue = returnValue.replace("{" + (i - 1) + "}", actualValue);
                            }
                            return returnValue;
                        },
                        /**
                        * Trims the given string.
                        * @param value: The string to trim.
                        * @param trimChars: The characters that will be trimed.
                        * @return : A trimed string.
                        */
                        Trim: function(value, trimChars) {
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
                                } else {
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
                            };

                            var startPosition = FindPositionToTrim(value, trimChars, TraverseType.Ascending);
                            var endPosition = FindPositionToTrim(value, trimChars, TraverseType.Descending);
                            return value.slice(startPosition, endPosition + 1);
                        }
                    };
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(Types,
            "Object",
            {
                get: function() {
                    return {
                        isNullOrUndefined: function(object) {
                            return typeof (object) == "undefined" || object == null;
                        },
                        clone: function(object) {
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
                        merge: function(originalObject, mergeObject) {
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
                        TranslateToLowerCasePropertyObject: function(object) {
                            if (this.isNullOrUndefined(object)) {
                                return null;
                            }
                            var cloneObject = {};
                            for (var key in object) {
                                if (object.hasOwnProperty(key) &&
                                    !CommonTypes.Types.Object.isNullOrUndefined(object[key])) {
                                    var updatedKey = key.charAt(0).toLowerCase() + key.substring(1, key.length);
                                    if (typeof object[key] === 'object') {
                                        cloneObject[updatedKey] = CommonTypes.Types.Object
                                            .TranslateToLowerCasePropertyObject(object[key]);
                                    } else {
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
// TODO: Replace this with linq.js if we get LCA approval. 
var ArrayQuery = (function() {
    function ArrayQuery(data) {
        'use strict';
        this.data = data;
    }

    ArrayQuery.prototype.select = function(selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            var value = selector(this.data[i], i);
            temp.push(value);
        }
        return new ArrayQuery(temp);
    };
    ArrayQuery.prototype.transform = function(selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            var item = selector(this.data[i], i);
            temp[item.key] = item.value;
        }
        return new ArrayQuery(temp);
    };
    //TODO: Make the index parameter optional once typescript is upgraded to >= 1.0.
    ArrayQuery.prototype.each = function(delegate) {
        'use strict';
        for (var i = 0; i < this.data.length; i++) {
            delegate(this.data[i], i);
        }
        return this;
    };
    ArrayQuery.prototype.where = function(selector) {
        'use strict';
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            if (selector(this.data[i])) {
                temp.push(this.data[i]);
            }
        }
        return new ArrayQuery(temp);
    };
    ArrayQuery.prototype.firstOrDefault = function(selector) {
        'use strict';
        var list = this.where(selector).items();
        if (list.length > 0) {
            return list[0];
        }
        return null;
    };
    ArrayQuery.prototype.items = function() {
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
(function(Collection) {
    /**
    * Collection class to store key value pair
    */
    var KeyValueCollection = (function() {
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
(function(Random) {
    var Guid = (function() {
        function Guid() {
        }

        Guid.NewGuid = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
                function(c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
        };
        Guid.NewGuidWithoutHyphens = function() {
            return Guid.NewGuid().replace(/-/g, '');
        };
        Guid.RandomId = function() {
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
var __extends = (this && this.__extends) ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d; }

        __.prototype = b.prototype;
        d.prototype = new __();
    };
/** Describes the event listener for internal event collection */
var JSEventListener = (function() {
    function JSEventListener() {
    }

    return JSEventListener;
})();
/** Logical event */
var JSEvent = (function() {
    function JSEvent() {
        /** Collection of event listeners */
        this.listeners = [];
    }

    /** Adds an event listener */
    JSEvent.prototype.Add = function(listener, context) {
        if (!(typeof listener === 'function')) {
            return;
        }
        var jsEventListener = new JSEventListener();
        jsEventListener.listener = listener;
        jsEventListener.context = context;
        this.listeners.push(jsEventListener);
    };
    /** Removes provided event listener
    * @param listener - event listener to remove.
    */
    JSEvent.prototype.Remove = function(listener) {
        for (var i = 0; i < this.listeners.length; i++) {
            if (this.listeners[i].listener === listener) {
                this.listeners.splice(i, 1);
            }
        }
    };
    /** Removes all listeners
    */
    JSEvent.prototype.RemoveAllListeners = function() {
        this.listeners = [];
    };
    /** Triggers the event with provided event arguments
    * @param eventArgs - event arguments to be passed to all of the event listeners.
    */
    JSEvent.prototype.Trigger = function(eventArgs) {
        var listenersCopy = this.listeners.slice(0);
        for (var i = 0; i < listenersCopy.length; i++) {
            var currentListener = listenersCopy[i];
            currentListener.listener.apply(currentListener.context, [eventArgs]);
        }
    };
    return JSEvent;
})();
/** Defines the empty event args type */
var EmptyEventArgs = (function() {
    function EmptyEventArgs() {
    }

    return EmptyEventArgs;
})();
/** Defines an event that has no event arguments */
var EmptyEventArgsEvent = (function(_super) {
    __extends(EmptyEventArgsEvent, _super);

    function EmptyEventArgsEvent() {
        _super.apply(this, arguments);
    }

    /** Triggers the event without any arguments */
    EmptyEventArgsEvent.prototype.Trigger = function() {
        _super.prototype.Trigger.call(this, new EmptyEventArgs());
    };
    return EmptyEventArgsEvent;
})(JSEvent);
// -----------------------------------------------------------------------
// <copyright file="Dictionary.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var Dictionary = (function() {
    function Dictionary() {
        this.elements = [];
    }

    Dictionary.prototype.get = function(key) {
        return this.elements[JSON.stringify(key)];
    };
    Dictionary.prototype.set = function(key, value) {
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
(function(GridManagement) {
    'use strict';
})(GridManagement || (GridManagement = {}));
// -----------------------------------------------------------------------
// <copyright file="AsynchoronousGridManager.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="IAsynchoronousGridManager.ts" />
var GridManagement;
(function(GridManagement) {
    "use strict";
    /** Asynchoronous grid manager */
    var AsynchoronousGridManager = (function() {
        function AsynchoronousGridManager(id, spinnerId) {
            this.minSpinnerHeight = 150;
            this.id = id;
            this.spinnerId = spinnerId;
        }

        /** Sets spinner visibility.
        * @param shown: Show spinner or hide.
        */
        AsynchoronousGridManager.prototype.setSpinnerVisibility = function(shown) {
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
            } else {
                spinnerDiv.css('height', this.minSpinnerHeight);
                spinnerDiv.css('background-color', 'transparent');
            }
            spinnerDiv.css('display', 'block');
        };
        /** Shows grid.
        * @param slide: Slide grid animation or not.
        */
        AsynchoronousGridManager.prototype.showGrid = function(slide) {
            this.setSpinnerVisibility(false);
            var gridDiv = $('#' + this.id);
            if (gridDiv.length) {
                if (slide) {
                    gridDiv.css('display', 'none');
                    gridDiv.slideDown();
                } else {
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
(function(UserPreference) {
    'use strict';
    /**
     * Address formatter factory.
     */
    var AddressFormatterFactory = (function() {
        /**
         * Create a Address formatter factory
         */
        function AddressFormatterFactory(japanOid) {
            this.japanOid = japanOid;
        }

        /**
         * Gets address formatter.
         */
        AddressFormatterFactory.prototype.create = function(countryOid, countryText, currentCulture) {
            if (countryOid == this.japanOid) {
                return new UserPreference.JapaneseAddressFormatter();
            }
            if (typeof countryText === "string" && typeof currentCulture === "string") {
                if (currentCulture == UserPreference.CultureInfo.japaneseCulture &&
                    countryOid == CommonTypes.Types.String.Empty &&
                    countryText == CommonTypes.Types.String.Empty) {
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
(function(UserPreference) {
    'use strict';
    /**
     * Culture Info
     */
    var CultureInfo = (function() {
        function CultureInfo() {
        }

        Object.defineProperty(CultureInfo,
            "japaneseCulture",
            {
                /**
                 * Japanese Culture
                 */
                get: function() { return "ja-JP"; },
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
(function(UserPreference) {
    'use strict';
    /**
     * Default Address Formatter
     */
    var DefaultAddressFormatter = (function() {
        function DefaultAddressFormatter() {
        }

        /**
         * Rearrange fields of an address
         */
        DefaultAddressFormatter.prototype.rearrangeFields = function(address, city, stateProvince, postalCode) {
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
(function(UserPreference) {
    'use strict';
    /**
     * Class to format the address
     */
    var FormatAddress = (function() {
        /**
         * Create a FormatAddress object
         */
        function FormatAddress(addressFormatterFactory) {
            this.addressFormatterFactory = addressFormatterFactory;
        }

        /**
         * Register the script to rearrange the address fields on the blur event of the country field
         */
        FormatAddress.prototype
            .registerRearrangeAddressScriptWhenCountryFieldIsBlurred =
            function(countryId, addressId, cityId, stateProvinceId, postalCodeId) {
                var _this = this;
                $("#" + countryId + "txtAutoComplete").blur(function() {
                    var countryOid = $("#" + countryId + "HiddenField").val();
                    var addressFormatter = _this.addressFormatterFactory.create(countryOid);
                    addressFormatter.rearrangeFields(addressId, cityId, stateProvinceId, postalCodeId);
                });
            };
        /**
         * Rearrange the address fields depending on the value of current user culture and country oid
         */
        FormatAddress.prototype
            .rearrangeAddressComponents = function(currentCulture,
                countryId,
                addressId,
                cityId,
                stateProvinceId,
                postalCodeId) {
                var countryTextValue = $("#" + countryId + "txtAutoComplete").val();
                var countryOid = $("#" + countryId + "HiddenField").val();
                var addressFormatter = this.addressFormatterFactory
                    .create(countryOid, countryTextValue, currentCulture);
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
(function(UserPreference) {
    'use strict';
})(UserPreference || (UserPreference = {}));
// -----------------------------------------------------------------------
// <copyright file="JapaneseAddressFormatter.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var UserPreference;
(function(UserPreference) {
    'use strict';
    /**
     * Japanese Address Formator
     */
    var JapaneseAddressFormatter = (function() {
        function JapaneseAddressFormatter() {
        }

        /**
         * Rearrange fields of the Address
         */
        JapaneseAddressFormatter.prototype.rearrangeFields = function(address, city, stateProvince, postalCode) {
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
(function(ExpressionBuilder) {
    /** LogicalOperatorOptionsType Enum */
    "use strict";
    (function(LogicalOperatorOptionsType) {
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
(function(ExpressionBuilder) {
    /** ValueOptionsType Enum */
    "use strict";
    (function(ValueOptionsType) {
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
(function(ExpressionBuilder) {
    /** Clause Context Class */
    "use strict";
    var ClauseContext = (function() {
        /** Clause Context. Initialize the logical, value and field object.
        * @param options_: Set of options that is used for control initialization:
        *       - logicalOperatorOptions: Available options for Logical operator dropdown
        *       - fieldOptions : Available options for Field dropdown
        *       - valueOptions: Available options for Value dropdown
        *       - fieldOptionsMetadata: Extra Info on field options
        */
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
(function(ExpressionBuilder) {
    var CrmEncodeDecode = GenericWorkflowDesigner.CrmEncodeDecode;
    /** ClauseRow Control */
    "use strict";
    var ClauseRow = (function() {
        /** Clause Row control. Creates a DOM div container that displays dropdown for logical, value and field values.
        * @param options_: Set of options that is used for control initialization:
        *       - rootElement: The root DOM element of the control. (Required)
        *       - clauseRowContext : The Clause Context clase instance that contains initialize value for logicaloperator, value and field object.
        *       - model: A single Clause json retrieve from Database to build the dropdowns
        *       - removeClauseRowHandler: The handler for a click on the item remove button. (Optional)
        *       - clauseRowChangeHandler: The handler for a click on the item remove button. (Optional)
        */
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
                removeClauseRowHandler: function(clauseRow) {},
                clauseRowChangeHandler: function() {}
            };
            this.options = $.extend(defaultOptions, options_);
        }

        /** Creates a new Clause Row. It contains Remove button and Clauses dropdown
        */
        ClauseRow.prototype.render = function() {
            var self = this;
            var removeButton = self.generateRemoveControl();
            var logicalClauseRow = self
                .generateLogicalClauseRowDom(self.options.clauseRowContext.logicalOperatorOptions);
            var fieldClauseRow = self
                .generateFieldClauseRowDom(self.options.clauseRowContext.fieldOptions,
                    self.options.clauseRowContext.fieldOptionsMetadata);
            var valueClauseRow = self.generateValueClauseRowDom(self.options.clauseRowContext.valueOptions);
            self.clauseRowDom.append(logicalClauseRow);
            self.clauseRowDom.append(valueClauseRow);
            self.clauseRowDom.append(fieldClauseRow);
            self.clauseRowDom.append(removeButton);
            $(self.options.rootElement).append(self.clauseRowDom);
        };
        /** Remove the clause row DOM */
        ClauseRow.prototype.removeDom = function() {
            this.clauseRowDom.remove();
        };
        ClauseRow.prototype.generateRemoveControl = function() {
            var _this = this;
            var self = this;
            var removeButtonWrapper = $('<div class="' + self.removeButtonWrapperClass + '"></div>');
            var removeButton = $('<a href="javascript:void(0);" title="' +
                CrmEncodeDecode.CrmHtmlEncode(self.options.clauseRowContext.labelPhrase.deleteClauseButton) +
                '" class="' +
                self.removeButtonClass +
                '"><img src="../images/Close_16.png" class="imgHover" alt="Remove" /></a>');
            removeButtonWrapper.append(removeButton);
            removeButton.click(function() {
                _this.removeDom();
                _this.options.removeClauseRowHandler(_this.options.model);
            }).mouseover(function() {
                $(_this).find("img").attr('src', '../images/Close_16_Hover.png');
            }).mouseout(function() {
                $(_this).find("img").attr('src', '../images/Close_16.png');
            });
            return removeButtonWrapper[0];
        };
        ClauseRow.prototype.generateLogicalClauseRowDom = function(logicalOperatorOptions) {
            var self = this;
            var logicalWrapper = $('<div class="' + self.logicalOperatorClass + '">');
            var logicalDropDownList = $('<select>')[0];
            self.populateElementWithOptions(logicalDropDownList, logicalOperatorOptions);
            $(logicalDropDownList).find("option[value=" +
                CrmEncodeDecode.CrmHtmlEncode(self.options.model.logical) +
                "]").attr("selected", 'selected');
            $(logicalDropDownList).on('change',
                function() {
                    self.options.model.logical = parseInt($(this).find('option:selected').val());
                    self.options.clauseRowChangeHandler();
                });
            logicalWrapper.append(logicalDropDownList);
            return logicalWrapper[0];
        };
        ClauseRow.prototype.generateFieldClauseRowDom = function(fieldOptions, fieldOptionsMetadata) {
            var self = this;
            var fieldWrapper = $('<div class="' + self.fieldClass + '">');
            var fieldDropDownList = $('<select>')[0];
            self.populateElementWithOptionGroups(fieldDropDownList, fieldOptions, fieldOptionsMetadata);
            $(fieldDropDownList).find("option[value='" + CrmEncodeDecode.CrmHtmlEncode(self.options.model.field) + "']")
                .attr("selected", 'selected');
            self.options.model.field = $(fieldDropDownList).find('option:selected').val();
            $(fieldDropDownList).on('change',
                function() {
                    self.options.model.field = $(this).find('option:selected').val();
                    self.options.clauseRowChangeHandler();
                });
            fieldWrapper.append(fieldDropDownList);
            return fieldWrapper[0];
        };
        ClauseRow.prototype.generateValueClauseRowDom = function(valueOptions) {
            var self = this;
            var valueWrapper = $('<div class="' + self.valuesClass + '">');
            var valueDropDownList = $('<select>')[0];
            self.populateElementWithOptions(valueDropDownList, valueOptions);
            $(valueDropDownList).find("option[value=" + CrmEncodeDecode.CrmHtmlEncode(self.options.model.value) + "]")
                .attr("selected", 'selected');
            $(valueDropDownList).on('change',
                function() {
                    self.options.model.value = parseInt($(this).find('option:selected').val());
                    self.options.clauseRowChangeHandler();
                });
            valueWrapper.append(valueDropDownList);
            return valueWrapper[0];
        };
        ClauseRow.prototype.populateElementWithOptions = function(element, optionsList) {
            var _this = this;
            jQuery.each(optionsList,
                function(optionKey, optionValue) {
                    return $(element).append(_this
                        .buildSelectOptionElement(optionKey, CommonTypes.Types.String.htmlDecodeText(optionValue)));
                });
        };
        ClauseRow.prototype
            .populateElementWithOptionGroups = function(element, optionsList, fieldOptionsMetadata, hasOptionGroups) {
                var _this = this;
                if (hasOptionGroups === void 0) {
                    hasOptionGroups = false;
                }
                var groups = {};
                jQuery.each(optionsList,
                    function(optionKey, optionValue) {
                        return _this
                            .groupListOptions(optionKey, optionValue, groups);
                    });
                jQuery.each(groups,
                    function(groupKey) {
                        if (groupKey.split(',')[1] !== "0") {
                            var entityName = fieldOptionsMetadata.getEntityName(groupKey);
                            if (!entityName) {
                                return;
                            }
                            var optGroup = _this.buildSelectOptGroupElement(entityName);
                            jQuery.each(groups[groupKey],
                                function(index, selectOption) {
                                    return $(optGroup)
                                        .append(_this.buildSelectOptionElement(selectOption.key, selectOption.value));
                                });
                            $(element).append(optGroup);
                        } else {
                            jQuery.each(groups[groupKey],
                                function(index, selectOption) {
                                    return $(element)
                                        .append(_this.buildSelectOptionElement(selectOption.key, selectOption.value));
                                });
                        }
                    });
            };
        ClauseRow.prototype.buildSelectOptionElement = function(optionKey, optionValue) {
            var option = $('<option>');
            option.text(optionValue);
            option.attr("value", optionKey);
            return option[0];
        };
        ClauseRow.prototype.buildSelectOptGroupElement = function(groupLabel) {
            var optGroup = $('<optgroup>');
            optGroup.attr("label", groupLabel);
            return optGroup[0];
        };
        ClauseRow.prototype.groupListOptions = function(optionKey, optionValue, groups) {
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
(function(ExpressionBuilder) {
    /** ClauseDesigner Control */
    "use strict";
    var ClauseDesigner = (function() {
        /** Clause Designer control. Creates clause row that contains logical, value and field dropdowns.
        * @param rootElement_: The root DOM element of the control. (Required)
        * @param queryContainerDiv_ : The DOM element of clause row container. (Required)
        * @param clausesList_: The clause json retrieve from the database to build the clause row
        * @param clauseContext_: The instance of clause context class that contains initialize value for logicaloperator, value and field object.
        */
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

        /** Renders the Condition Row. */
        ClauseDesigner.prototype.render = function() {
            var _this = this;
            var self = this;
            var clauseRow;
            jQuery.each(self.options.clausesList,
                function(index, clause) {
                    clauseRow = new ExpressionBuilder.ClauseRow(self.clauseRowInitialization(clause));
                    clauseRow.render();
                });
            self.updateQuery();
            var addNewClauseRowButton = self.generateAddNewClauseButton();
            $(self.options.rootElement)
                .append(addNewClauseRowButton);
            $(addNewClauseRowButton)
                .click(function() { return self.addNewClauseRowHandler(); })
                .mouseover(function() { return $(_this).find("img").attr('src', '../images/New_Hover_16.png'); })
                .mouseout(function() { return $(_this).find("img").attr('src', '../images/New_16.png'); });
        };
        /** Get the generated Clause */
        ClauseDesigner.prototype.getClauses = function() {
            var self = this;
            return self.options.clausesList;
        };
        ClauseDesigner.prototype.getFieldOptionsMetadata = function() {
            var self = this;
            return self.options.clauseContext.fieldOptionsMetadata;
        };
        /** Add new clause row Click handler event */
        ClauseDesigner.prototype.addNewClauseRowHandler = function() {
            var self = this;
            if (Object.keys(self.options.clauseContext.fieldOptions).length > 0) {
                var newClauseJson = {
                    logical: ExpressionBuilder.LogicalOperatorOptionsType.And,
                    value: ExpressionBuilder.ValueOptionsType.None,
                    field: FieldOptionsType.None
                };
                self.options.clausesList.push(newClauseJson);
                var newClauseRow = new ExpressionBuilder.ClauseRow(self.clauseRowInitialization(newClauseJson));
                newClauseRow.render();
                self.updateQuery();
            }
        };
        ClauseDesigner.prototype.clauseRowInitialization = function(clauseModel) {
            var self = this;
            return {
                rootElement: self.clauseRowListRootElement[0],
                clauseRowContext: self.options.clauseContext,
                model: clauseModel,
                removeClauseRowHandler: function(clauseRow) { return self.removeClauseRowModel(clauseRow); },
                clauseRowChangeHandler: function() { return self.updateQuery(); }
            };
        };
        ClauseDesigner.prototype.generateAddNewClauseButton = function() {
            var self = this;
            return $('<a href="javascript:void(0);" title="' +
                self.options.clauseContext.labelPhrase.addNewClauseButton +
                '" id="' +
                self.addNewClauseButtonId +
                '"><img src="../images/New_16.png" class="imgHover" alt="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_Add") +
                '" /> ' +
                self.options.clauseContext.labelPhrase.addNewClauseButton +
                '</a>')[0];
        };
        ClauseDesigner.prototype.removeClauseRowModel = function(clauseRowModel) {
            var self = this;
            var index = $.inArray(clauseRowModel, self.options.clausesList);
            self.options.clausesList.splice(index, 1);
            self.updateQuery();
        };
        ClauseDesigner.prototype.updateQuery = function() {
            var self = this;
            $(self.options.queryContainer).html($('<span>')
                .html(ExpressionBuilder.QueryBuilder
                    .formatQueryText(self.options.clausesList, self.options.clauseContext)));
        };
        return ClauseDesigner;
    })();
    ExpressionBuilder.ClauseDesigner = ClauseDesigner;
    var FieldOptionsType;
    (function(FieldOptionsType) {
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
(function(ExpressionBuilder) {
    /** ContraintType Enum */
    "use strict";
    (function(ConstraintType) {
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
(function(ExpressionBuilder) {
    /** QueryBuilder Control */
    "use strict";
    var QueryBuilder = (function() {
        function QueryBuilder() {
        }

        /** Get the formatted query text
        @param: clauseList : array of clause object
        @param: clauseContext : clause context object
        */
        QueryBuilder.formatQueryText = function(clausesList, clauseContext) {
            var queryString = "";
            jQuery.each(clausesList,
                function(index, clause) {
                    var logicalText = QueryBuilder
                        .clauseLogicalOperatorOption(clauseContext.logicalOperatorOptions, clause.logical, index);
                    queryString += logicalText +
                        QueryBuilder.separator +
                        clauseContext.valueOptions[clause.value] +
                        QueryBuilder.clauseFieldName(clauseContext.fieldOptions,
                            clauseContext.fieldOptionsMetadata,
                            clause.field) +
                        QueryBuilder.separator;
                });
            var queryStringArray = queryString.trim().split(QueryBuilder.separator);
            var formattedQueryString = "";
            for (var i = 0; i < queryStringArray.length; i++) {
                if (queryStringArray[i].toLowerCase() ==
                    clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.And]
                    .toLowerCase()) {
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
            var andRegex = new RegExp(clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType
                    .And],
                'g');
            var orRegex = new RegExp(clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType
                    .Or],
                'g');
            var notRegex = new RegExp(clauseContext.valueOptions[ExpressionBuilder.ValueOptionsType.Not], 'g');
            formattedQueryString = formattedQueryString
                .replace(andRegex,
                    "<b>" +
                    clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.And] +
                    "</b>");
            formattedQueryString = formattedQueryString
                .replace(orRegex,
                    "<b>" +
                    clauseContext.logicalOperatorOptions[ExpressionBuilder.LogicalOperatorOptionsType.Or] +
                    "</b>");
            formattedQueryString = formattedQueryString
                .replace(notRegex,
                    "<b>" +
                    clauseContext.valueOptions[ExpressionBuilder.ValueOptionsType.Not
                    ] +
                    " </b>");
            return formattedQueryString;
        };
        QueryBuilder.clauseFieldName = function(fieldOptions, fieldOptionsMetadata, fieldKey) {
            var itemIdKey = this.getItemIdKeyFromFieldKey(fieldKey);
            if (itemIdKey) {
                var entityName = fieldOptionsMetadata.getEntityName(itemIdKey);
                if (entityName)
                    return fieldOptions[fieldKey] + ' - ' + entityName;
            }
            return fieldOptions[fieldKey];
        };
        QueryBuilder.getItemIdKeyFromFieldKey = function(fieldKey) {
            var separatorIndex = fieldKey.indexOf(',');
            if (separatorIndex != -1) {
                return fieldKey.substr(separatorIndex + 1);
            }
            return "";
        };
        QueryBuilder.clauseLogicalOperatorOption = function(logicalOperatorOptions, logicalClause, index) {
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
(function(GenericWorkflowDesigner) {
    function getTimestampMilliseconds() {
        return (new Date()).getTime();
    }

    var StaticStopwatch;
    var Stopwatch = (function() {
        function Stopwatch() {
            this.reset();
        }

        Stopwatch.getTimestampMilliseconds = function() {
            return getTimestampMilliseconds();
        };
        Object.defineProperty(Stopwatch.prototype,
            "isRunning",
            {
                get: function() {
                    return this._isRunning;
                },
                enumerable: true,
                configurable: true
            });
        Stopwatch.prototype.start = function() {
            var watch = this;
            if (!watch._isRunning) {
                watch._startTimeStamp = getTimestampMilliseconds();
                watch._isRunning = true;
            }
        };
        Stopwatch.prototype.stop = function() {
            var watch = this;
            if (watch._isRunning) {
                watch._elapsed += watch.currentLapMilliseconds;
                watch._isRunning = false;
            }
        };
        Stopwatch.prototype.reset = function() {
            var watch = this;
            watch._elapsed = 0;
            watch._isRunning = false;
            watch._startTimeStamp = NaN;
        };
        Object.defineProperty(Stopwatch.prototype,
            "currentLapMilliseconds",
            {
                get: function() {
                    return this._isRunning
                        ? (getTimestampMilliseconds() - this._startTimeStamp)
                        : 0;
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(Stopwatch.prototype,
            "currentLap",
            {
                get: function() {
                    return this._isRunning
                        ? this.currentLapMilliseconds
                        : 0;
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(Stopwatch.prototype,
            "elapsedMilliseconds",
            {
                get: function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var LoadSpinnerItem = (function(_super) {
        __extends(LoadSpinnerItem, _super);

        function LoadSpinnerItem(container, size) {
            _super.call(this, { el: container });
            this.size = size;
        }

        LoadSpinnerItem.prototype.render = function() {
            this.$el.html("...");
            if (!CommonTypes.Types.Object.isNullOrUndefined(GenericWorkflowDesigner.Settings.spinnerItem)) {
                var spinnerImage = '<img id="spinnerImage" class = "search-icon-span" src=" ' +
                    GenericWorkflowDesigner.Settings.spinnerItem +
                    '"/>';
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
(function(GenericWorkflowDesigner) {
    /** Control for generic workflow*/
    'use strict';
    var GenericWorkflowControl = (function() {
        function GenericWorkflowControl() {
            this.appModel = null;
            this.initDefaults();
        }

        GenericWorkflowControl.prototype.initDefaults = function() {
            var canvasOffset = 0;
            GenericWorkflowDesigner.Settings.activityDropHandlerFactory = new GenericWorkflowDesigner
                .ActivityDropHandlerFactory();
            GenericWorkflowDesigner.Settings.graphics = new GenericWorkflowDesigner.Graphics();
            GenericWorkflowDesigner.Settings.workflowTree = new GenericWorkflowDesigner.WorkflowTree();
            GenericWorkflowDesigner.Settings.workflowTree
                .setActivityCollection(new GenericWorkflowDesigner.ActivityDefinitionCollection());
            GenericWorkflowDesigner.Settings.layoutProperties = new GenericWorkflowDesigner
                .LayoutProperties(canvasOffset);
            GenericWorkflowDesigner.Settings.activityDefinitionSyncer = new GenericWorkflowDesigner
                .ActivityDefinitionSyncer();
            GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory = new GenericWorkflowDesigner
                .DefaultActivityPositionCalculatorFactory();
            GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer = new GenericWorkflowDesigner
                .GenericWorkflowEntityDefinitionSyncer();
            GenericWorkflowDesigner.Settings.tileItemsMenu = new GenericWorkflowDesigner
                .FlyoutControlFactory("tileItemsMenu");
            GenericWorkflowDesigner.Settings.slotContextMenu = new GenericWorkflowDesigner
                .FlyoutControlFactory("contextmenu");
            GenericWorkflowDesigner.Settings.workflowTree = new GenericWorkflowDesigner.WorkflowTree();
            GenericWorkflowDesigner.Settings.flyoutLists = new GenericWorkflowDesigner.FlyoutControlCollection();
        };
        /** Renders automation control for the given WorkflowId
        * @param model model to initialize
        */
        GenericWorkflowControl.prototype.Initialize = function(model) {
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
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.hideMenus,
                this.hideMenus,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus,
                this.hideContextMenus,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderDoubleClick,
                function() {
                    toolpane.tabs({ active: propertyTabIndex });
                },
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab,
                function() {
                    toolpane.tabs({ active: propertyTabIndex });
                    if ($("#propertyTab").parent().length > 0) {
                        $("#propertyTab").parent().attr("tabindex", "-1");
                    }
                },
                this);
            var result = GenericWorkflowDesigner.DataAccessEvents.getActivityDefinitions(null);
            GenericWorkflowDesigner.Settings.workflowTree.setActivityCollection(result);
            GenericWorkflowDesigner.Settings.setNextActivityID(result.length);
            var canvas = new GenericWorkflowDesigner.CanvasView($(this.appModel.canvasId));
            var workspaceModeController = new GenericWorkflowDesigner.WorkspaceModeController(canvas);
            // Initializing Library class from config parser
            GenericWorkflowDesigner.Settings.configReader = new GenericWorkflowDesigner
                .ConfigReader(this.getUrl() + libraryTilesDataFileName);
            GenericWorkflowDesigner.Settings.configReader.initializeLibrary(this.appModel.librabryId, canvasContainer);
            var loaderView = new GenericWorkflowDesigner.LoaderView(loader);
            var propertyView = new GenericWorkflowDesigner.PropertyView({ el: $(model.propertyId) });
            this.render(canvas);
            setTimeout(function() {
                    GenericWorkflowDesigner.EventManager
                        .publish(GenericWorkflowDesigner.FrameworkEvents.initializeWidget);
                },
                1);
        };
        GenericWorkflowControl.prototype.getUrl = function() {
            var port = window.location.port;
            var host = window.location.hostname;
            var orgUrl = window.location.protocol + '//' + host;
            if (port) {
                orgUrl += ":" + port;
            }
            return orgUrl;
        };
        GenericWorkflowControl.prototype.render = function(canvas) {
            // Rendering workflow tree view
            var deferred = $.Deferred();
            GenericWorkflowDesigner.Settings.workflowTree.onSuccessFetch().done(function() {
                GenericWorkflowDesigner.Settings.workflowTree.UpdatePositions();
                deferred.resolve();
            });
            // Rendering Library view before Canvas
            GenericWorkflowControl.LibraryObject.render();
            canvas.render();
        };
        /** Hide all menus */
        GenericWorkflowControl.prototype.hideMenus = function() {
            //TODO: Remove dependency on CA module
            GenericWorkflowDesigner.Settings.flyoutLists.hideTileItemFlyoutControl();
        };
        /** Hide all menus */
        GenericWorkflowControl.prototype.hideContextMenus = function() {
            //TODO: Remove dependency on CA module
            GenericWorkflowDesigner.Settings.flyoutLists.hideContextMenuFlyoutControl();
        };
        GenericWorkflowControl.prototype.subscribe = function(type, fn, context) {
            fn = typeof fn === 'function' ? fn : context[fn];
            if (typeof this.subscribers[type] !== "undefined") {
                this.subscribers[type].push({ fn: fn, context: context || this });
            }
        };
        GenericWorkflowControl.prototype.unsubscribe = function(type, fn, context) {
            this.visitSubscribers('unsubscribe', type, fn, context);
        };
        GenericWorkflowControl.prototype.fire = function(type, publication) {
            this.visitSubscribers('publish', type, publication, null);
        };
        GenericWorkflowControl.prototype.visitSubscribers = function(action, type, arg, context) {
            var pubtype = type || 'any',
                subscribers = this.subscribers[pubtype],
                i,
                max = subscribers ? subscribers.length : 0;
            for (i = 0; i < max; i += 1) {
                if (action === 'publish') {
                    // Call our observers, passing along arguments
                    subscribers[i].fn.call(subscribers[i].context, arg);
                } else {
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
(function(GenericWorkflowDesigner) {
    var TriggerClauseOptionsDetailsHandler = (function() {
        function TriggerClauseOptionsDetailsHandler(optionsDetails) {
            this.optionsMetadata = optionsDetails;
        }

        TriggerClauseOptionsDetailsHandler.prototype.getEntityName = function(entityKey) {
            var optionMetadata = this.optionsMetadata[entityKey];
            if (optionMetadata && optionMetadata.EntityName) {
                return optionMetadata.EntityName;
            }
            return null;
        };
        TriggerClauseOptionsDetailsHandler.prototype.getEntityDetails = function(entityKey) {
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
(function(GenericWorkflowDesigner) {
    /** Controller that handles the drop of an activity on another activity */
    'use strict';
    var AbstractActivityDropHandler = (function() {
        function AbstractActivityDropHandler(currentActivity) {
            this.currentActivity = null;
            this.activityValidationRuleSet = new GenericWorkflowDesigner.DefaultActivityValidationRuleSet();
            this.currentActivity = currentActivity;
        }

        /** Executes the drop action. */
        AbstractActivityDropHandler.prototype.drop = function(droppedActivityComponent) {
        };
        /** Returns true if drop is allowed for the given activity component, false otherwise
        *@param activityComponent - activity component that is dropped
        */
        AbstractActivityDropHandler.prototype.dropAllowed = function(activityComponent) {
            // 1. Don't allow to drop on activity that is already contained in the activityComponent
            // 2. Don't allow to drop on components parent.
            if ($.inArray(this.currentActivity, activityComponent.getNodes()) > -1 ||
                activityComponent.getRoot().getParent() == this.currentActivity) {
                return false;
            }
            // also check through the set of validation rules available
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates flyout content provider
    */
    'use strict';
    var AbstractFlyoutContentProvider = (function() {
        function AbstractFlyoutContentProvider() {
            /** Content types for flyout */
            this.flyoutContentType = {
                ContextFlyout: "contextFlyout",
            };
        }

        /** Creates content for flyout based on flyoutcontent type and activity.
        * @param flyoutContentType: The content type for which flyout needs to be build
        * @param activity: The activity.
        */
        AbstractFlyoutContentProvider.prototype.createContent = function(flyoutContentType, activity) {
            throw new Error("method not implemented");
        };
        return AbstractFlyoutContentProvider;
    })();
    GenericWorkflowDesigner.AbstractFlyoutContentProvider = AbstractFlyoutContentProvider;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutControl.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates flyout control
    */
    'use strict';
    var FlyoutControl = (function(_super) {
        __extends(FlyoutControl, _super);

        /**
        * Summary: Creates flyout control
        * @param flyoutStyleClass: Css class to be used to style the flyout control
        */
        function FlyoutControl(context, flyoutStyle) {
            _super.call(this);
            this.isShown = false;
            this.contentToShow = null;
            this.eventArgs = null;
            this.flyoutContainer = null;
            /** Property indicating the time for show flyout animation (in ms) */
            this.ShowTime = 250;
            /** Property indicating the time for hide flyout animation (in ms) */
            this.HideTime = 250;
            this.context = context;
            if (!flyoutStyle) {
                throw "Style is needed.";
            }
            this.flyoutStyle = flyoutStyle;
            this.setupEvents();
        }

        /** Setup events */
        FlyoutControl.prototype.setupEvents = function() {
        };
        FlyoutControl.prototype.getContext = function() {
            return this.context;
        };
        FlyoutControl.prototype.updateTileItemContent = function() {
            if (this.flyoutStyle == FlyoutControl.FlyoutControlStyle.TileItemsMenu) {
                var content = GenericWorkflowDesigner.Settings.flyoutContentProvider
                    .createContent(this.context.getContentType(), this.context.getActivity());
                this.SetContent(content);
                GenericWorkflowDesigner.Settings.flyoutLists.TileItemsMenuList.push(this);
                this.Show();
            }
        };
        FlyoutControl.prototype.ignoreClick = function() {
            return false;
        };
        /**
        * Summary: Sets root element for flyout control
        * @param rootElement: the root element
        */
        FlyoutControl.prototype.SetRootElement = function(rootElement) {
            this.rootElement = rootElement;
        };
        /**
        * Summary: Sets the content that will be shown on the flyout control
        * @param content: the html content to be shown.
        */
        FlyoutControl.prototype.SetContent = function(content) {
            this.contentToShow = $(content);
        };
        /**
        * Summary: Sets the event for which flyout is shown
        * @param event: the UI event
        */
        FlyoutControl.prototype.SetEvent = function(event) {
            this.eventArgs = event;
        };
        /**
        * Summary: True if flyout is shown; false otherwise.
        */
        FlyoutControl.prototype.IsShown = function() {
            return this.isShown;
        };
        /** Summary: Shows the flyout control
        * @returns promise
        */
        FlyoutControl.prototype.Show = function() {
            var deferred = $.Deferred();
            if (this.isShown) {
                this.flyoutContainer.remove();
            }
            this.buildFlyoutContainer();
            if (this.isShown) {
                this.contentToShow.hide();
                this.flyoutContainer.show();
                this.contentToShow.fadeIn(this.ShowTime).promise()
                    .done(function() {
                        deferred.resolve();
                    });
            } else {
                var self = this;
                this.flyoutContainer.slideDown(this.ShowTime).promise()
                    .done(function() {
                        self.bindFlyoutHideOnDocumentAndFrameClick();
                        deferred.resolve();
                    });
            }
            this.isShown = true;
            return deferred.promise();
        };
        FlyoutControl.prototype.buildFlyoutContainer = function() {
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
        FlyoutControl.prototype.hideFlyout = function() {
            if (!this.isShown) {
                return;
            }
            this.Hide();
            $(document).unbind("click", this.hideFlyout);
            jQuery.each($("iframe"),
                function(i, element) {
                    var iframeDoc = $(element).contents().get(0);
                    $(iframeDoc).unbind("click", this.hideFlyout);
                });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentClick = function() {
            var self = this;
            $(document).bind("click",
                function(e) {
                    // Added a additional check for right click 
                    // as Firefox treats right click as a click 
                    // and hides the context menu
                    if (e.button !== 2) {
                        self.hideFlyout();
                    }
                });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentContextMenu = function() {
            var self = this;
            $(document).bind("contextmenu",
                function() {
                    self.hideFlyout();
                });
        };
        FlyoutControl.prototype.bindFlyoutHideOnFrameClick = function() {
            var self = this;
            jQuery.each($("iframe"),
                function(i, element) {
                    self.hideFlyoutOnFrameReadyOrLoaded(element);
                });
        };
        FlyoutControl.prototype.bindFlyoutHideOnDocumentAndFrameClick = function() {
            this.bindFlyoutHideOnDocumentClick();
            this.bindFlyoutHideOnDocumentContextMenu();
            this.bindFlyoutHideOnFrameClick();
        };
        FlyoutControl.prototype.bindHideToiFrameElement = function(iFrameElement) {
            var self = this;
            var iframeDoc = $(iFrameElement).contents().get(0);
            $(iframeDoc).bind("click",
                function() {
                    self.hideFlyout();
                });
        };
        FlyoutControl.prototype.hideFlyoutOnFrameReadyOrLoaded = function(iFrameElement) {
            var self = this;
            $(iFrameElement).ready(function() {
                self.bindHideToiFrameElement(iFrameElement);
            });
            $(iFrameElement).load(function() {
                self.bindHideToiFrameElement(iFrameElement);
            });
        };
        /** Summary: Hides the flyout control
        * @returns promise
        */
        FlyoutControl.prototype.Hide = function() {
            var deferred = $.Deferred();
            if (!this.isShown) {
                deferred.resolve();
                return deferred.promise();
            }
            this.isShown = false;
            this.flyoutContainer.unbind("click", this.ignoreClick);
            var self = this;
            this.flyoutContainer.fadeOut(this.HideTime).promise().done(function() {
                self.flyoutContainer.remove();
                deferred.resolve();
            });
            return deferred.promise();
        };
        // content types for flyout
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
(function(GenericWorkflowDesigner) {
    /** Allows syncing of client models to the server */
    'use strict';
    var ActivityDefinitionSyncer = (function() {
        function ActivityDefinitionSyncer() {
        }

        /** Gets activity defintions based on the provided options
        * @param {collection} collection to be populated with the retrieved definitions
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.GetActivityDefinitions = function(collection, options) {
            var defer = $.Deferred();
            var activityCollection = {
                "d": [
                    {
                        "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition",
                        "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a",
                        "ActivityID": "CustomActivityStep15",
                        "ParentActivityID": null,
                        "ParentBranchID": "0",
                        "ActivityTypeID": 2,
                        "Properties": {
                            "Items": [
                                {
                                    "ItemID": null,
                                    "ActivityTypeID": "2",
                                    "Title": "Undefined",
                                    "EmailSent": "0",
                                    "EmailOpened": "0",
                                    "EmailBounced": "0",
                                    "StatusMessageId": "200",
                                    "State": "4"
                                }
                            ],
                            "UI": { "Row": "0", "Col": "0", "readonlyMode": "False" },
                            "ActiveItemIndex": 0
                        },
                        "Description": null,
                        "WorkflowProviderType": 2
                    }, {
                        "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition",
                        "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a",
                        "ActivityID": "CustomActivityStep17",
                        "ParentActivityID": "CustomActivityStep15",
                        "ParentBranchID": "0",
                        "ActivityTypeID": 5,
                        "Properties": {
                            "Items": [
                                {
                                    "ItemID": "c7e93de4-fe34-e511-80cf-00155ded1a2a",
                                    "ActivityTypeID": "6",
                                    "Title": "sample task flow",
                                    "NumberOfPeople": "0",
                                    "StatusMessageId": "",
                                    "State": "0"
                                }
                            ],
                            "UI": { "Row": "0", "Col": "1", "readonlyMode": "False" },
                            "ActiveItemIndex": 0
                        },
                        "Description": null,
                        "WorkflowProviderType": 2
                    }, {
                        "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition",
                        "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a",
                        "ActivityID": "CustomActivityStep25",
                        "ParentActivityID": "CustomActivityStep17",
                        "ParentBranchID": "0",
                        "ActivityTypeID": 2,
                        "Properties": {
                            "Items": [
                                {
                                    "ItemID": null,
                                    "ActivityTypeID": "2",
                                    "Title": "Undefined",
                                    "EmailSent": "0",
                                    "EmailOpened": "0",
                                    "EmailBounced": "0",
                                    "StatusMessageId": "200",
                                    "State": "4"
                                }
                            ],
                            "UI": { "Row": "0", "Col": "2", "readonlyMode": "False" },
                            "ActiveItemIndex": 0
                        },
                        "Description": null,
                        "WorkflowProviderType": 2
                    }, {
                        "__type": "Microsoft.Crm.Application.WorkflowDataService.ActivityDefinition",
                        "WorkflowID": "646e807d-fe34-e511-80cf-00155ded1a2a",
                        "ActivityID": "CustomActivityStep22",
                        "ParentActivityID": "CustomActivityStep17",
                        "ParentBranchID": "0",
                        "ActivityTypeID": 2,
                        "Properties": {
                            "Items": [
                                {
                                    "ItemID": null,
                                    "ActivityTypeID": "2",
                                    "Title": "Undefined",
                                    "EmailSent": "0",
                                    "EmailOpened": "0",
                                    "EmailBounced": "0",
                                    "StatusMessageId": "200",
                                    "State": "4"
                                }
                            ],
                            "UI": { "Row": "0", "Col": "3", "readonlyMode": "False" },
                            "ActiveItemIndex": 0
                        },
                        "Description": null,
                        "WorkflowProviderType": 2
                    }
                ]
            };
            //var activityCollection = DataAccessEvents.getActivityDefinitions(options.data);
            collection.reset(activityCollection.d);
            defer.resolve(activityCollection.d);
            return defer.promise();
        };
        /** Get the individual activity defintion
        * @param {model} model to be populated with retrieved defintion
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.GetActivityDefinition = function(model, options) {
            // Throw as we are not using get of individual activities
            throw "Invalid operation";
        };
        /** Creates the activity defintion
        * @param {model} model to be used for creating and be populated once creation is complete
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.CreateActivityDefinition = function(model, options) {
            var defer = $.Deferred();
            model.attributes.ActivityID = model.attributes.ParentActivityID +
                "_" +
                GenericWorkflowDesigner.Settings.getNextActivityID();
            model.id = model.attributes.ActivityID;
            var activity = model;
            //var activity = DataAccessEvents.createActivityDefinition(model);
            defer.resolve(activity);
            return defer.promise();
        };
        /** Updates the individual activity defintion
        * @param {model} model that is used to update backend defintion
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.UpdateActivityDefinition = function(model, options) {
            model.set("WorkflowProviderType", GenericWorkflowDesigner.workflowProviderType);
            var defer = $.Deferred();
            var activity = model;
            //var activity = DataAccessEvents.updateActivityDefinition(model);
            defer.resolve(activity);
            return defer.promise();
        };
        /** Deletes the individual activity defintion
        * @param {model} model that will be deleted on the backend
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.DeleteActivityDefinition = function(model, options) {
            model.set("WorkflowProviderType", GenericWorkflowDesigner.workflowProviderType);
            model.set("ActivityID", model.getActivityID());
            model.set("WorkflowID", GenericWorkflowDesigner.workflowOID);
            var defer = $.Deferred();
            var response = GenericWorkflowDesigner.DataAccessEvents.deleteActivityDefinition(model);
            defer.resolve(response);
            return defer.promise();
        };
        /** Gets the dynamic enums
        * @param {model} model to be populated with retrieved defintion
        * @param {options} options to be used
        */
        ActivityDefinitionSyncer.prototype.GetDynamicEnums = function(model, options) {
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
(function(GenericWorkflowDesigner) {
    /** Controller that handles the drop of an activity on another activity */
    'use strict';
    var ActivityDropController = (function() {
        function ActivityDropController(slot) {
            this.slot = slot;
        }

        ActivityDropController.prototype.getMultiDropHandler = function() {
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
        ActivityDropController.prototype.getstartConnector = function(childActivity) {
            if (childActivity.isLeaf()) {
                return childActivity;
            } else {
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
        ActivityDropController.prototype.getEligible = function() {
            return ActivityDropController.eligible;
        };
        ActivityDropController.prototype.getStart = function() {
            return ActivityDropController.startConnector;
        };
        ActivityDropController.prototype.findEligibleEndConnectors = function(dropActivity) {
            var eligibleConnectors = [];
            var childs = dropActivity.getChildActivitiesSorted();
            var isEligible = function(activity) {
                if (activity == null)
                    return;
                var doNotPush = false;
                if (activity.getActivityTypeID() == "condition")
                    doNotPush = true;
                var parentActivity = activity.getParent();
                if (parentActivity.getActivityTypeID() == "condition" &&
                    parentActivity.getActivityID() == dropActivity.getActivityID())
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
                        // this depends if the connector has not been formed
                        // If no connector this is valid.  If connector is present, its not valid to do
                        // isEligible(childs[0]);
                        break;
                    }
                    return;
                case 3:
                    isEligible(childs[0]);
                    break;
                };
            };
            childs.forEach(function(childActivity) {
                if (childActivity.getParentBranchID() == 0 || childActivity.getParentBranchID() == 1)
                    isEligible(childActivity);
            });
            return eligibleConnectors;
        };
        ActivityDropController.prototype.disconnectOldDefault = function() {
            //highlight the old default with different color
            if (ActivityDropController.oldDefaultGlobal) {
                var calc = new GenericWorkflowDesigner
                    .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
                var topOfDefault = calc.computeTop(ActivityDropController.oldDefaultGlobal.getRow());
                var leftOfDefault = calc.computeLeft(ActivityDropController.oldDefaultGlobal.getCol());
                var connectHitIdOfDefault = '#connect-hitOfDefault';
                $(connectHitIdOfDefault).remove();
                var hitOfDefault = '<div id="' +
                    ActivityDropController.oldDefaultGlobal.getActivityID() +
                    '" style=" position: absolute; height: 70px; width: 230px; background-color: red; opacity:0.5; left:' +
                    leftOfDefault +
                    'px; top:' +
                    topOfDefault +
                    'px; "></div>';
                $("#canvas").append(hitOfDefault);
                $("#canvas").on('click',
                    '#' + ActivityDropController.oldDefaultGlobal.getActivityID(),
                    function(event) {
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
                                };
                                break;
                            case 1:
                                ifChild = activity.getParent();
                                if (ifChild.getActivityTypeID() != "condition")
                                    ifChild.setNextActivityID(activity.getActivityID());
                                else
                                    ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                break;
                            };
                            break;
                        case 3:
                            ActivityDropController.inside = false;
                            ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                            break;
                        };
                        ActivityDropController.oldDefaultGlobal.setParentActivityID(ifChild.getActivityID());
                        ActivityDropController.oldDefaultGlobal.setParentBranchID(0);
                        ActivityDropController.startConnector
                            .setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        if (ActivityDropController.startConnector.processStep)
                            ActivityDropController.startConnector.processStep.nextStageId = null;
                        ActivityDropController.oldDefaultGlobal.save();
                        ifChild.save();
                        ActivityDropController.startConnector.save();
                        $("#canvas").off('click');
                        // event.stopImmediatePropagation();
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                        GenericWorkflowDesigner.eventManager
                            .trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                        // ActivityDropController.oldDefaultGlobal = null;
                    });
            }
        };
        ActivityDropController.prototype.drawTargetView = function(activity) {
            var calc = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var top = calc.computeTop(activity.getRow());
            var left = calc.computeLeft(activity.getCol());
            var connectHitId = '#connect-hit';
            $(connectHitId).remove();
            var hit = '<div id="' +
                activity.getActivityID() +
                '" style=" position: absolute; height: 70px; width: 230px; background-color: cyan; opacity:0.5; left:' +
                left +
                'px; top:' +
                top +
                'px; "></div>';
            $("#canvas").append(hit);
            $("#canvas").on('click',
                '#' + activity.getActivityID(),
                function(event) {
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
                            lastNodeDefaultChild = ActivityDropController.prototype
                                .findLastNodeDefaultChild(tempOldDefault, activity);
                            if (lastNodeDefaultChild.getActivityTypeID() == "condition")
                                lastNodeDefaultChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                            else
                                lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                            break;
                        case 1:
                            lastNodeDefaultChild = ActivityDropController.prototype
                                .findLastNodeDefaultChild(childs[0], activity);
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
                                    lastNodeDefaultChild = ActivityDropController.prototype
                                        .findLastNodeDefaultChild(oldDefault, activity);
                                }
                                oldDefault.setParentActivityID(ifChild.getActivityID());
                                oldDefault.setParentBranchID(0);
                                ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                                if (ActivityDropController.inside) {
                                    var parentOfActivity = activity.getParent();
                                    if (parentOfActivity.getActivityTypeID() != "condition")
                                        parentOfActivity.setNextActivityID(activity.getActivityID());
                                    else {
                                        // have next only "IF" part of condition is empty
                                        // make nextstageID has null if it has "IF" part and no else
                                        ActivityDropController.prototype.fillNextStage(parentOfActivity);
                                    }
                                } else {
                                    if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                        lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                    else {
                                        // have next only "IF" part of condition is empty
                                        // make nextstageID has null if it has "IF" part and no else
                                        ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                                    }
                                }
                                break;
                            case 2:
                                lastNodeDefaultChild = ActivityDropController.prototype
                                    .findLastNodeDefaultChild(oldDefault, activity);
                                oldDefault.setParentActivityID(conditionActivity.getActivityID());
                                oldDefault.setParentBranchID(1);
                                if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                    lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                                else {
                                    // have next only "IF" part of condition is empty
                                    // make nextstageID has null if it has "IF" part and no else
                                    ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                                }
                                break;
                            };
                            break;
                        case 1:
                            ifChild = activity.getParent();
                            if (ifChild.getActivityTypeID() != "condition")
                                ifChild.setNextActivityID(activity.getActivityID());
                            else
                                ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                            break;
                        };
                        break;
                    case 3:
                        ActivityDropController.inside = false;
                        ifChild = ActivityDropController.prototype.findIfChild(ifChild, activity);
                        if (!ActivityDropController.inside) {
                            lastNodeDefaultChild = ActivityDropController.prototype
                                .findLastNodeDefaultChild(oldDefault, activity);
                        }
                        // oldDefault would be the default of ifChild which we found in above calculation
                        oldDefault.setParentActivityID(ifChild.getActivityID());
                        oldDefault.setParentBranchID(0);
                        ifChild.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                        if (ActivityDropController.inside) {
                            var parentOfActivity = activity.getParent();
                            if (parentOfActivity.getActivityTypeID() != "condition")
                                parentOfActivity.setNextActivityID(activity.getActivityID());
                            else {
                                // have next only "IF" part of condition is empty
                                // make nextstageID has null if it has "IF" part and no else
                                ActivityDropController.prototype.fillNextStage(parentOfActivity);
                            }
                        } else {
                            if (lastNodeDefaultChild.getActivityTypeID() != "condition")
                                lastNodeDefaultChild.setNextActivityID(activity.getActivityID());
                            else {
                                // have next only "IF" part of condition is empty
                                // make nextstageID has null if it has "IF" part and no else
                                ActivityDropController.prototype.fillNextStage(lastNodeDefaultChild);
                            }
                        }
                        break;
                    };
                    activity.setParentActivityID(conditionActivity.getActivityID());
                    activity.setParentBranchID(0);
                    ActivityDropController.startConnector.setNextActivityID(activity.getActivityID());
                    $("#canvas").off('click');
                    // event.stopImmediatePropagation();
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                });
        };
        ActivityDropController.prototype.fillNextStage = function(activity) {
            if (activity) {
                var childOfParents = activity.getChildActivitiesSorted();
                for (var i = 0; i < 3; ++i) {
                    if (childOfParents[i] && childOfParents[i].getParentBranchID() == 0) {
                        activity.setNextActivityID(GenericWorkflowDesigner.ActivityType.Empty);
                    }
                }
            }
        };
        ActivityDropController.prototype.findIfChild = function(ifChild, activity) {
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
                            // only if child and default child are valid
                            // else child is not valid
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
                                // do nothing
                                break;
                            };
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
                            };
                            break;
                        case 3:
                            ifChild = ifChild.getChildActivitiesSorted()[0];
                            break;
                        }
                    } else {
                        ifChild = ifChild.getChildActivitiesSorted()[0];
                    }
                }
                return lastNodeIfChild;
            } else
                return null;
        };
        ActivityDropController.prototype.findLastNodeDefaultChild = function(oldDefault, activity) {
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
                            // only if child and default child are valid
                            // else child is not valid
                            branchID = tempChilds[0].getParentBranchID();
                            switch (branchID) {
                            case 0:
                                tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                break;
                            case 1:
                                // do nothing
                                break;
                            case 2:
                                // do nothing
                                break;
                            };
                            break;
                        case 2:
                            branchID = tempChilds[0].getParentBranchID();
                            switch (branchID) {
                            case 0:
                                tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                                break;
                            case 1:
                                // do nothing
                                break;
                            case 2:
                                break;
                            };
                            break;
                        case 3:
                            tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                            break;
                        }
                    } else {
                        tempOldDefault = tempOldDefault.getChildActivitiesSorted()[0];
                    }
                }
                return lastNodeDefaultChild;
            } else
                return null;
        };
        ActivityDropController.prototype.findParentCondition = function(currentActivity) {
            var parentActivity = currentActivity.getParent();
            if (parentActivity == null)
                return null;
            if (currentActivity.getParentBranchID() == 2) {
                return parentActivity;
            } else {
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
                    } else {
                        return this.findParentCondition(parentActivity);
                    }
                }
            }
        };
        /** Drop a library element on the specified slot
        * @slot: The slot.
        * @libraryElement: The libraryElement.
        * @return: A promise.
        */
        ActivityDropController.prototype.dropLibraryElement = function(libraryElement) {
            var dropHandler, eligibleConnectors = [];
            if (libraryElement.get("ActivityTypeID") == "connect") {
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                    .createActivity(libraryElement.get("ActivityTypeID"));
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                var dropActivity = dropHandler.currentActivity;
                var childs = dropActivity.getChildActivitiesSorted();
                ActivityDropController.eligible = null;
                if (dropActivity.getActivityTypeID() == "stage") {
                    // ActivityDropController.startConnector = dropActivity.getChildActivitiesSorted()[0];
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
                        ActivityDropController.eligible.forEach(function(activity) {
                            ActivityDropController.prototype.drawTargetView(activity);
                        });
                        //highlight the old default with different color
                        this.disconnectOldDefault();
                    } else {
                        ActivityDropController.prototype.disconnectOldDefault();
                    }
                } else {
                    if (dropActivity.getActivityTypeID() == "condition") {
                        ActivityDropController.startConnector = dropActivity;
                        ActivityDropController.dropActivityGlobal = dropActivity;
                        if (childs[0].getParentBranchID() == 0)
                            ActivityDropController.oldDefaultGlobal = childs[0];
                        else
                            ActivityDropController.oldDefaultGlobal = null;
                        ActivityDropController.eligible = this.findEligibleEndConnectors(dropActivity);
                        if (ActivityDropController.eligible.length > 0) {
                            ActivityDropController.eligible.forEach(function(activity) {
                                ActivityDropController.prototype.drawTargetView(activity);
                            });
                            //highlight the old default with different color
                            this.disconnectOldDefault();
                        } else {
                            ActivityDropController.prototype.disconnectOldDefault();
                        }
                    }
                }
                return dropHandler.drop(component);
            } else {
                var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                    .createActivity(libraryElement.get("ActivityTypeID"));
                var component = new GenericWorkflowDesigner.ConnectedComponent(activity);
                dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
                return dropHandler.drop(component);
            }
        };
        /** Drop multiple components on the specified slot.
        * @slot: The slot.
        * @components: Array of components.
        * @return: A promise.
        */
        ActivityDropController.prototype.dropMultipleComponents = function(components) {
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
(function(GenericWorkflowDesigner) {
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
    var ActivityType = (function() {
        function ActivityType() {
        }

        ActivityType.All = "all";
        ActivityType.Empty = "empty";
        ActivityType.Root = "root";
        return ActivityType;
    })();
    GenericWorkflowDesigner.ActivityType = ActivityType;;

    /** Returns 'right' if RTL is enabled, 'left' if LTR is enabled **/
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
        GenericWorkflowDesigner.EventManager
            .publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateModel, newModel);
        GenericWorkflowDesigner.currentModel = newModel;
        if (newModel) {
            var selectedActivities = [];
            selectedActivities.push(newModel);
            Settings.workflowTree.setSelectedActivities(selectedActivities);
        } else {
            Settings.workflowTree.setSelectedActivities([]);
        }
        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.modelUpdated);
    }

    GenericWorkflowDesigner.updateCurrentModel = updateCurrentModel;
    /** Contains global settings for the GenericWorkflowDesigner module */
    var Settings = (function() {
        function Settings() {
        }

        Settings.getNextActivityID = function() {
            return this.nextActivityID++;
        };;
        Settings.setNextActivityID = function(activityID) {
            this.nextActivityID = activityID;
        };
        /** Specifies the layout properties. */
        Settings.layoutProperties = null;
        /** Specifies the syncer for activity definitions */
        Settings.activityDefinitionSyncer = null;
        /** Specifies the ConfigReader */
        Settings.configReader = null;
        /** Specifies the syncer for workflow entity defintions */
        Settings.workflowEntityDefinitionSyncer = null;
        /** Specifies the Localization for all the activities **/
        Settings.labelKeyValuePhraseCollection = null;
        /** Specifies the not encoded localization for all the activities **/
        Settings.labelKeyValuePlainTextPhraseCollection = null;
        /** Specifies the activityDefinitionFactory */
        Settings.activityDefinitionFactory = null;
        /** Specifies the libraryNodesFactory */
        Settings.libraryNodesFactory = null;
        /** Specifies the slot handler provider. **/
        Settings.slotHandlerProvider = null;
        /** Specifies the item menu */
        Settings.tileItemsMenu = null;
        /** Specifies the context menu */
        Settings.slotContextMenu = null;
        /** Specifies the propertyViewFactory */
        Settings.propertyViewFactory = null;
        /** Specifies the subsequent activity generator */
        Settings.subsequentActivityGenerator = null;
        /** Slot generator provider. */
        Settings.slotGeneratorProvider = null;
        /** Icon factory */
        Settings.iconFactory = null;
        /** Specifies the TileInformation Factory */
        Settings.tileInformationFactory = null;
        /** Specifies the help page base link */
        Settings.helpPageLink = null;
        /** Specifies the workflow ID of the current workflow */
        Settings.workflowId = null;
        /** Specifies the workflow tree */
        Settings.workflowTree = null;
        /** Specifies the flyout content provider */
        Settings.flyoutContentProvider = null;
        /** */
        Settings.flyoutLists = null;
        /** Dynamic Enums model */
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
        /** Specifies the Localization for all the activities **/
        Settings.renderRTL = false;
        /** Specifies if the localized value is Arabic **/
        Settings.isArabic = false;
        Settings.renderMinimapFlag = true;
        Settings.rerenderMinimapThroughDragDropFlag = true;
        /** Flag that represents that a new Stage Tile has been Drag-Dropped to the canvas **/
        Settings.isNewStageAdded = false;
        /** Flag that represents if a tile has been deleted from the canvas **/
        Settings.isStageDeleted = false;
        /** Count of tiles in the selected row **/
        Settings.tileCountInRow = 0;
        /** Count of tiles in the selected column **/
        Settings.tileCountInColumn = 0;
        /** Count of children tiles for the selected parent branch activity to delete **/
        Settings.childCount = 0;
        /** Specifies the path of spinner Icon **/
        Settings.spinnerItem = null;
        Settings.nextActivityID = 1;
        Settings.notification = null;
        Settings.tabIndexValue = 0;
        return Settings;
    })();
    GenericWorkflowDesigner.Settings = Settings;;
    /** Contains the key from properties - the keys specified here, correspond to names of properties from the activity */
    var ItemKeyProperties = (function() {
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

    /** Returns true if ZoomIn Operation will be effective ie if zoom ratio is less than maxZoomRatio */
    function canZoomIn() {
        return GenericWorkflowDesigner.ZoomConstants.currentZoomRatio <
            GenericWorkflowDesigner.ZoomConstants.maxZoomRatio;
    }

    GenericWorkflowDesigner.canZoomIn = canZoomIn;

    /** Returns true if ZoomOut Operation will be effective ie if zoom ratio is greater than minZoomRatio */
    function canZoomOut() {
        return GenericWorkflowDesigner.ZoomConstants.currentZoomRatio >
            GenericWorkflowDesigner.ZoomConstants.minZoomRatio;
    }

    GenericWorkflowDesigner.canZoomOut = canZoomOut;
    /** Contains css class names */
    var CssClass = (function() {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    /**
    * Parser for XML config file
    */
    var ConfigReader = (function() {
        function ConfigReader(configPath) {
            this.configPath = null;
            this.configPath = configPath;
        }

        /** Summary: Loads XML config file
        * @Param - fileName : XML config file name.
        * @Param - libraryId : Library id for setting el.
        * @Param - canvasContainer : Canvas container.
        */
        ConfigReader.prototype.initializeLibrary = function(libraryId, canvasContainer) {
            GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject = new GenericWorkflowDesigner.Library({
                el: $(libraryId),
                canvasContainer: canvasContainer
            });
            this.setLibraryNodes();
        };
        /** Summary: Loads XML config file
        * @Param - fileName : XML config file name.
        */
        ConfigReader.prototype.loadXML = function() {
            try {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", this.configPath, false);
                xhttp.setRequestHeader('Content-Type', 'text/xml');
                xhttp.send();
                return xhttp.response;
            } catch (err) {
                alert(err.message);
            }
        };
        /** Summary: Returns array of attribute values based on xPath
        * @Param - xml : xml structure.
        * @Param - xPath : xPath from which attributes need to be fetched.
        */
        ConfigReader.prototype.getAttributeValues = function(xml, xPath) {
            var xPathNodes, attributeValues = [{}];
            xPathNodes = $(xml).find(xPath);
            for (var i = 0; i < xPathNodes.length; i++) {
                attributeValues[i] = xPathNodes[i].getAttribute("name");
            }
            return attributeValues;
        };
        /** Summary: Sets all Library Tiles with its group
        * @Param - fileName : XML config file name.
        */
        ConfigReader.prototype.setLibraryNodes = function() {
            var xml = this.loadXML();
            var groups = [{}];
            var groupPath = "LibraryGroup";
            //fetch Tile groups
            groups = this.getAttributeValues(xml, groupPath);
            // fetch tiles of specific group
            for (var j = 0; j < groups.length; j++) {
                var xPath = "LibraryGroup[name='" + groups[j] + "'] LibraryTile";
                var groupName = GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetLocalizedString(groups[j].toString());
                this.registerTilesWithGroup(xml, xPath, groupName);
            }
        };
        /** Summary: Returns Tile object with all its properties
        * @Param - xml : xml structure.
        * @Param - xPath : xPath from which attributes need to be fetched.
        */
        ConfigReader.prototype.getTile = function(tileNode) {
            var tile = new GenericWorkflowDesigner.Tile(), tileAttributes;
            tileAttributes = tileNode.attributes;
            for (var i = 0; i < tileAttributes.length; i++) {
                var tileAttribute = tileAttributes[i];
                tile.setProperty(tileAttribute.nodeName,
                    GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetLocalizedString(tileAttribute.nodeValue));
            }
            return tile;
        };
        /** Summary: Retrieves Tile based on LibraryTile name and registeers it
        * with corresponding group by invoking Library's registerLibraryTile() method
        * @Param - xml : xml structure.
        * @Param - xPath : xPath from which attributes need to be fetched.
        * @Param - group : group name to which Tile belongs.
        */
        ConfigReader.prototype.registerTilesWithGroup = function(xml, xPath, group) {
            var tileNodes = $(xml).find(xPath);
            // Fetch tile based on LibraryTile name
            for (var i = 0; i < tileNodes.length; i++) {
                var tileNode = tileNodes[i];
                var tile = this.getTile(tileNode);
                this.setMDDPropertyPageMetadata(xml, tile);
                GenericWorkflowDesigner.GenericWorkflowControl.LibraryObject.registerLibraryTile(group, tile);
                GenericWorkflowDesigner.BaseTileInformation.tileObjects[tile.properties["activitytypeid"]] = tile;
            }
        };
        /** Summary: Sets property page Metadata from config xml for rendering MDD property page
        * @Param - xml : xml structure.
        * @Param - tile : AbstractTile object for setting its PropertyPages.
        */
        ConfigReader.prototype.setMDDPropertyPageMetadata = function(xml, tile) {
            var propertyPage = new GenericWorkflowDesigner.MDDPropertyPage();
            // if propertyPageTyp="html" then fetch property page o.w. fetch MDD properties based on property id.
            if (tile.properties["propertypagetype"] == "html") {
                propertyPage.isMDDPropertyPage = false;
                var xPathForPropertyPageUrl = "PropertyPageGroup propertypage[propertypageid=" +
                    tile.properties["propertypageid"] +
                    "]";
                var propertyPageUrlNode = $(xml).find(xPathForPropertyPageUrl);
                tile.properties["propertypageurl"] = propertyPageUrlNode[0].getAttribute("url");
            } else {
                propertyPage.isMDDPropertyPage = true;
                // Traversing to MDDProperties of corresponding tile
                var xPathForMDDPropertyPage = "LibraryTile[activitytypeid=" +
                    tile.properties["activitytypeid"] +
                    "] MDDProperties";
                var MDDPropertyPageNode = $(xml).find(xPathForMDDPropertyPage);
                propertyPage.title = GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetLocalizedString(MDDPropertyPageNode[0].getAttribute("title"));
                var MDDProperties = MDDPropertyPageNode[0].children;
                var MDDPropertiesArray = {};
                var self = this;
                // Storing property page metadata by traversing all MDDProperties
                jQuery.each(MDDProperties,
                    function(i, MDDProperty) {
                        var xPathForProperties = "MDDPropertyGroup Property[propertyid=" +
                            MDDProperty.getAttribute("propertyid") +
                            "]";
                        var MDDPropertiesForTile = $(xml).find(xPathForProperties);
                        MDDPropertiesArray[i] = self.getAttributesKeyValuePairArray(MDDPropertiesForTile[0]);
                    });
                propertyPage.Metadata = JSON.parse(JSON.stringify(MDDPropertiesArray));
            }
            tile.addPropertyPage(propertyPage);
        };
        /** Summary: Stores attributes in key value pair and returns an array
       * @Param - xml : xml node
       */
        ConfigReader.prototype.getAttributesKeyValuePairArray = function(xmlNode) {
            var xmlNodeAttributes = xmlNode.attributes;
            var attributeValuesArray = {};
            jQuery.each(xmlNodeAttributes,
                function(attribute, xmlNodeAttribute) {
                    attributeValuesArray[xmlNodeAttribute.nodeName] = GenericWorkflowDesigner.Settings
                        .tileInformationFactory.GetLocalizedString(xmlNodeAttribute.nodeValue);
                });
            return attributeValuesArray;
        };
        /** Summary: Retrieves the data for all Toolbar Items from the Config Xml
        */
        ConfigReader.prototype.retrieveToolbarItems = function() {
            var _this = this;
            /* Array the stores the data for each Toolbar item retrieved from the Config Xml */
            var toolbarItemArray = [];
            /* Fetch Toolbar Items from the Config Xml */
            var xml = this.loadXML();
            var toolbarItemPath = "Toolbar ToolBarItem";
            var toolbarItems = $(xml).find(toolbarItemPath);
            /* Iterate over each Toolbar Item */
            jQuery.each(toolbarItems,
                function(item, toolbarItem) {
                    /* Stores the attribute data for the current toolbar item */
                    var toolbarItemAttributeData = _this.getAttributesKeyValuePairArray(toolbarItem);
                    /* Store the attribute data for the given toolbar item inside the toolbarItemArray */
                    toolbarItemArray.push(toolbarItemAttributeData);
                });
            return toolbarItemArray;
        };
        /** Summary: Retrieves the data for all Zoom Icons from Config XML
        */
        ConfigReader.prototype.retrieveZoomItems = function() {
            var _this = this;
            /*TODO: Make sure there's a fallback for when config.xml doesn't specify the icons for the zoom buttons - it should not be mandatory to have the ZoomItems section in the config.xml*/
            var zoomItemArray = [];
            var xml = this.loadXML();
            var zoomItemPath = "ZoomIcons ZoomIconItem";
            var zoomItems = $(xml).find(zoomItemPath);
            jQuery.each(zoomItems,
                function(item, zoomItem) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Builds the slots.
    */
    'use strict';
    var ConnectedComponent = (function() {
        function ConnectedComponent(activity) {
            if (activity) {
                this.root = activity;
                this.nodes = [activity];
                this.nodesWithOrphanChildren = [activity];
                this.orphanChildren = activity.getChildActivitiesSorted();
            }
        }

        /** Get the root of the connected component.
        @return: The root.
        */
        ConnectedComponent.prototype.getRoot = function() {
            return this.root;
        };
        /** Set the root of the connected component.
        @param value: The value.
        */
        ConnectedComponent.prototype.setRoot = function(value) {
            this.root = value;
        };
        /** Get the nodes that are forming the connected component.
        @return: The nodes.
        */
        ConnectedComponent.prototype.getNodes = function() {
            return this.nodes;
        };
        /** Set the nodes that are forming the connected component.
        @param value: The nodes.
        */
        ConnectedComponent.prototype.setNodes = function(value) {
            this.nodes = value;
        };
        /** Get all the orphan children of the connected component.
        @return: The orphanChildren.
        */
        ConnectedComponent.prototype.getOrphanChildren = function() {
            return this.orphanChildren;
        };
        /** Set all the orphan children of the connected component.
        @value: The orphan children.
        */
        ConnectedComponent.prototype.setOrphanChildren = function(value) {
            this.orphanChildren = value;
        };
        /** Get all the nodes with orphan children .
        @return: The orphanChildren.
        */
        ConnectedComponent.prototype.getNodesWithOrphanChildren = function() {
            return this.nodesWithOrphanChildren;
        };
        /** Set all the nodes with orphan children .
        @value: The orphanChildren.
        */
        ConnectedComponent.prototype.setNodesWithOrphanChildren = function(value) {
            this.nodesWithOrphanChildren = value;
        };
        /* String representation of the object*/
        ConnectedComponent.prototype.toString = function(digitsToDisplay) {
            digitsToDisplay = (digitsToDisplay) ? digitsToDisplay : 4;
            var newline = "\n";
            var content = ">> Conex Component <<" + newline;
            content += "root:" + this.root.getActivityID().substring(0, digitsToDisplay) + newline;
            content += "distance:" +
                GenericWorkflowDesigner.Settings.workflowTree.getDistanceFromRoot(this.root) +
                newline;
            var nodesStr = "";
            jQuery.each(this.nodes,
                function(index, node) {
                    nodesStr += "[" + node.getActivityID().substring(0, digitsToDisplay) + "]";
                });
            content += "nodes :" + nodesStr + newline;
            var nodesWithOrphanChildrenStr = "";
            jQuery.each(this.nodesWithOrphanChildren,
                function(index, node) {
                    nodesWithOrphanChildrenStr += "[" + node.getActivityID().substring(0, digitsToDisplay) + "..]";
                });
            content += "Nodes with Orphan Children :" + nodesWithOrphanChildrenStr + newline;
            var orphanChildrenStr = "";
            jQuery.each(this.orphanChildren,
                function(index, child) {
                    var id = (child.getActivityID()) ? child.getActivityID() : "undefined";
                    orphanChildrenStr += "[" + id.substring(0, digitsToDisplay) + "..]";
                });
            content += "orphan Children :" + orphanChildrenStr + newline;
            return content;
        };
        return ConnectedComponent;
    })();
    GenericWorkflowDesigner.ConnectedComponent = ConnectedComponent;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ConnectedComponentsExtractor.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Retrieves connected components in a workflow selection.
    */
    'use strict';
    var ConnectedComponentsExtractor = (function() {
        function ConnectedComponentsExtractor(allConcreteActivities) {
            this.selectedActivitiesDictionary = [];
            this.visitedActivitiesDictionary = [];
            this.allActivities = [];
            this.selectedActivities = [];
            this.allActivities = allConcreteActivities;
        }

        /** Gets all the connected components from the selected activities.
        @return: array of connected components
        */
        ConnectedComponentsExtractor.prototype.getConnectedComponentsFromSelection = function(selectedActivities) {
            var _this = this;
            var connectedComponents = [];
            this.selectedActivities = selectedActivities;
            this.cleanUp();
            jQuery.each(this.selectedActivities,
                function(index, activity) {
                    if (_this.visitedActivitiesDictionary[activity.getActivityID()] == false) {
                        var component = _this.getConnectedComponentForActivity(activity);
                        connectedComponents.push(component);
                    }
                });
            return this.sortComponents(connectedComponents);
        };
        ConnectedComponentsExtractor.prototype.sortComponents = function(connectedComponents) {
            var count = connectedComponents.length;
            // Make sure they are sorted
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
        ConnectedComponentsExtractor.prototype.cleanUp = function() {
            var _this = this;
            jQuery.each(this.allActivities,
                function(index, activity) {
                    _this.visitedActivitiesDictionary[activity.getActivityID()] = false;
                    _this.selectedActivitiesDictionary[activity.getActivityID()] = false;
                });
            jQuery.each(this.selectedActivities,
                function(index, activity) {
                    _this.selectedActivitiesDictionary[activity.getActivityID()] = true;
                });
        };
        ConnectedComponentsExtractor.prototype.getConnectedComponentForActivity = function(activity) {
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
        ConnectedComponentsExtractor.prototype
            .DepthFirstSearch = function(activity, nodesTraversed, orphanChildren, nodesWithOrphanChildren) {
                var _this = this;
                this.visitedActivitiesDictionary[activity.getActivityID()] = true;
                nodesTraversed.push(activity);
                var childrenActivities = activity.getChildActivitiesSorted();
                jQuery.each(childrenActivities,
                    function(index, child) {
                        if (_this.isActivityInSelection(child)) {
                            _this.DepthFirstSearch(child, nodesTraversed, orphanChildren, nodesWithOrphanChildren);
                        } else {
                            orphanChildren.push(child);
                            if ($.inArray(activity, nodesWithOrphanChildren) == -1) {
                                nodesWithOrphanChildren.push(activity);
                            }
                        }
                    });
            };
        ConnectedComponentsExtractor.prototype.getRootActivityForConnectedComponent = function(activity) {
            var root = activity;
            while (this.isActivityInSelection(root.getParent())) {
                root = root.getParent();
            }
            return root;
        };
        ConnectedComponentsExtractor.prototype.isActivityInSelection = function(activity) {
            if (activity && this.selectedActivitiesDictionary[activity.getActivityID()] == true)
                return true;
            return false;
        };
        return ConnectedComponentsExtractor;
    })();
    GenericWorkflowDesigner.ConnectedComponentsExtractor = ConnectedComponentsExtractor;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ContainerEdgeScroller.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
      * This class enables scorlling a container when cursor is close to container's edges.
      */
    'use strict';
    var ContainerEdgeScroller = (function() {
        /** Creates instance of ContainerEdgeScroller
        * @param container The jQuery element which needs to scroll
        * @param scrollOptions Optional, default - step : 10 (px), timer : 25 (msec), scrollTriggerMargin : 60 (px)
        */
        function ContainerEdgeScroller(container, scrollOptions) {
            if (scrollOptions === void 0) {
                scrollOptions = {};
            }
            this.isMovingHorizontal = false;
            this.isMovingVertical = false;
            this.horizontalInterval = 0;
            this.verticalInterval = 0;
            this.oldXPosition = 0;
            // Assigning the canvas parent as the scrollable div.
            this.container = container;
            this.scrollOptions = $.extend({
                    step: 10,
                    timer: 25,
                    scrollTriggerMargin: 60,
                    scrollableHorizontal: true,
                    scrollableVertical: true
                },
                scrollOptions);
        }

        /** Scrolls the container horizontally
          * @param step {number} a number (px) by which the container will scroll
          */
        ContainerEdgeScroller.prototype.scrollHorizontal = function(step) {
            if (this.scrollOptions.scrollableHorizontal) {
                var self = this;
                self.isMovingHorizontal = true;
                self.container.parent().scrollLeft(self.container.parent().scrollLeft() + step);
            }
        };
        /** Scrolls the container vertically
         * @param step {number} a number (px) by which the container will scroll
         */
        ContainerEdgeScroller.prototype.scrollVertical = function(step) {
            if (this.scrollOptions.scrollableVertical) {
                var self = this;
                self.isMovingVertical = true;
                self.container.parent().scrollTop(self.container.parent().scrollTop() + step);
            }
        };
        ContainerEdgeScroller.prototype.clearIntervals = function() {
            if (!this.isMovingHorizontal) {
                clearInterval(this.horizontalInterval);
                this.horizontalInterval = false;
            }
            if (!this.isMovingVertical) {
                clearInterval(this.verticalInterval);
                this.verticalInterval = false;
            }
        };
        /** Initializes the container edge scroller. */
        ContainerEdgeScroller.prototype.initialize = function() {
            this.containerOffset = {};
            this.containerOffset.top = this.container.parent().offset().top;
            this.containerOffset.left = this.container.parent().offset().left;
            this.containerOffset.right = this.containerOffset.left + this.container.parent().width();
            this.containerOffset.bottom = this.containerOffset.top + this.container.parent().height();
        };
        /** Scrolls the container if cursors is on container's edge */
        ContainerEdgeScroller.prototype.scrollIfCursorOnEdge = function(cursorPageX, cursorPageY) {
            this.isMovingHorizontal = false;
            this.isMovingVertical = false;
            if (Math.abs(cursorPageX - this.containerOffset.left) <= this.scrollOptions.scrollTriggerMargin &&
                this.oldXPosition >= cursorPageX) {
                this.scrollHorizontal(this.scrollOptions.step * -1);
            } else if (Math.abs(cursorPageX - this.containerOffset.right) <= this.scrollOptions.scrollTriggerMargin &&
                this.oldXPosition <= cursorPageX) {
                this.scrollHorizontal(this.scrollOptions.step);
            }
            if (Math.abs(cursorPageY - this.containerOffset.top) <= this.scrollOptions.scrollTriggerMargin) {
                this.scrollVertical(this.scrollOptions.step * -1);
            } else if (Math.abs(cursorPageY - this.containerOffset.bottom) <= this.scrollOptions.scrollTriggerMargin) {
                this.scrollVertical(this.scrollOptions.step);
            }
            this.oldXPosition = cursorPageX;
            this.clearIntervals();
        };
        /** Stops the srolling */
        ContainerEdgeScroller.prototype.stopScrolling = function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates ContextMenu Content
    */
    'use strict';
    var BaseItemContextFlyoutContent = (function() {
        /**
        * Summary: Creates ContextMenu Content
        * @param activity: activity for which ContextMenu content has to be set
        */
        function BaseItemContextFlyoutContent(activity) {
            // current activity
            this.currentActivity = null;
            // context menu options list
            this.optionsPropertyList = {};
            this.currentActivity = activity;
            this.initializeOptionsPropertyList();
        }

        /**
        * Summary: Build the context elements
        @return: array of options.
        */
        BaseItemContextFlyoutContent.prototype.buildOptions = function(itemIndex) {
            var self = this;
            var optionsList = [];
            jQuery.each(this.optionsPropertyList,
                function(key, optionProperty) {
                    var option = $('<li id=' + optionProperty.ID + '>' + optionProperty.LABEL + '</li>');
                    option.click(function() {
                        optionProperty.clickHandler.call(self, itemIndex);
                    });
                    optionsList.push(option);
                });
            return optionsList;
        };
        /** Summary: Initializes the options in the context menu. */
        BaseItemContextFlyoutContent.prototype.initializeOptionsPropertyList = function() {
            throw Error(GenericWorkflowDesigner.Exception.InternalError);
        };
        /**
       * Summary: Creates ContextMenu Content
        @param itemIndex: Item index if it's for a specific item.
        @return: content created for context menu
       */
        BaseItemContextFlyoutContent.prototype.createContent = function(itemIndex) {
            if (!this.currentActivity) {
                throw GenericWorkflowDesigner.Exception.NoActivitySet;
            }
            var content = $('<div class="contextmenuitems">');
            var items = $('<ul>');
            var elements = this.buildOptions(itemIndex);
            jQuery.each(elements,
                function(key, element) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates ContextMenu Content
    */
    'use strict';
    var ContextFlyoutContent = (function(_super) {
        __extends(ContextFlyoutContent, _super);

        function ContextFlyoutContent() {
            _super.apply(this, arguments);
        }

        /** Initialize context menu options
        @Virtual
        */
        ContextFlyoutContent.prototype.initializeOptionsPropertyList = function() {
            this.optionsPropertyList = {
                Delete: {
                    ID: 'delete',
                    LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[DELETE]"],
                    clickHandler: this.deleteSelectedActivities
                },
                Copy: {
                    ID: 'copy',
                    LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[COPY]"],
                    clickHandler: this.copyActivities
                },
                Paste: {
                    ID: 'paste',
                    LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[PASTE]"],
                    clickHandler: this.pasteActivities
                }
            };
        };
        /** Handles a delete on activity.
        */
        ContextFlyoutContent.prototype.deleteSelectedActivities = function() {
            var allowDelete = confirm(GenericWorkflowDesigner.Settings
                .labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE DELETE]"]);
            if (allowDelete) {
                this.deleteSelectedActivitiesCore();
            }
        };
        /** Performs core of delete activities */
        ContextFlyoutContent.prototype.deleteSelectedActivitiesCore = function() {
            var _this = this;
            var connectedComponents = GenericWorkflowDesigner.Settings.workflowTree.getConnectedComponents();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            this.removeComponentsFromWorkflowTree(connectedComponents).done(function() {
                _this.deleteComponentsFromServer(connectedComponents).done(function() {
                    GenericWorkflowDesigner.updateCurrentModel(null);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
                });
            });
        };
        ContextFlyoutContent.prototype.removeComponentsFromWorkflowTree = function(connectedComponents) {
            var promise = null;
            jQuery.each(connectedComponents,
                function(index, component) {
                    if (promise == null) {
                        promise = GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(component);
                    } else {
                        promise = promise.then(function() {
                            return GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(component);
                        });
                    }
                });
            return promise;
        };
        ContextFlyoutContent.prototype.deleteComponentsFromServer = function(connectedComponents) {
            var promise = null;
            jQuery.each(connectedComponents,
                function(indexComponent, component) {
                    jQuery.each(component.getNodes(),
                        function(indexNode, node) {
                            GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                            if (promise == null) {
                                promise = node.destroy();
                            } else {
                                promise = promise.then(function() {
                                    return node.destroy();
                                });
                            }
                        });
                });
            return promise;
        };
        /** Copies activities */
        ContextFlyoutContent.prototype.copyActivities = function() {
            if (GenericWorkflowDesigner.Settings.workflowTree.isInSelection(this.currentActivity)) {
                GenericWorkflowDesigner.Settings.workflowTree
                    .setCopiedActivities(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities());
            } else {
                GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([this.currentActivity]);
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        /** Pastes activities */
        ContextFlyoutContent.prototype.pasteActivities = function() {
            var self = this;
            var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
            if (copiedActivities.length <= 0) {
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
                return;
            }
            var extractor = new GenericWorkflowDesigner
                .ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor.getConnectedComponentsFromSelection(copiedActivities);
            var promise = null;
            jQuery.each(connectedComponents,
                function(index, connectedComponent) {
                    if (promise == null) {
                        promise = self.pasteComponent(connectedComponent);
                    } else {
                        promise = promise.then(function() {
                            return self.pasteComponent(connectedComponent);
                        });
                    }
                });
            promise.done(function() {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.trigger(self.currentActivity);
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        ContextFlyoutContent.prototype.pasteComponent = function(connectedComponent) {
            var self = this;
            var deferred = $.Deferred();
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory
                .createDropHandler(this.currentActivity);
            // Create new activities out of the ones present in connectedComponent
            // Remember the client ids parent structure and assign actual parent ids when activities are saved on server
            var originalActivities = connectedComponent.getNodes();
            var originalRootActivity = connectedComponent.getRoot();
            var originalActivitiesParentsMap = [];
            var pastedToOriginalClientIdMap = [];
            var originalToPastedClientIdMap = [];
            var pastedActivities = [];
            var pastedRootActivity;
            jQuery.each(originalActivities,
                function(index, originalActivity) {
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
            var pastedActivitiesParentsMap = self
                .createPastedActivitiesClientIdsParentMap(pastedActivities,
                    pastedRootActivity,
                    pastedToOriginalClientIdMap,
                    originalToPastedClientIdMap,
                    originalActivitiesParentsMap);
            self.savePastedActivitiesAndSetParentIds(pastedActivities, pastedRootActivity, pastedActivitiesParentsMap)
                .done(function() {
                    var componentToDrop = new GenericWorkflowDesigner.ConnectedComponent(pastedRootActivity);
                    dropHandler.drop(componentToDrop).done(function() {
                        deferred.resolve();
                    });
                });
            return deferred.promise();
        };
        ContextFlyoutContent.prototype
            .createPastedActivitiesClientIdsParentMap =
            function(pastedActivities,
                pastedRootActivity,
                pastedToOriginalClientIdMap,
                originalToPastedClientIdMap,
                originalActivitiesParentsMap) {
                var pastedActivitiesParentsMap = [];
                jQuery.each(pastedActivities,
                    function(index, pastedActivity) {
                        if (pastedActivity == pastedRootActivity) {
                            // Not setting a new parent for root activity 
                            return;
                        }
                        var parentOfOldMatchingActivity = originalActivitiesParentsMap[pastedToOriginalClientIdMap[
                            pastedActivity.cid]];
                        pastedActivitiesParentsMap[pastedActivity
                            .cid] = originalToPastedClientIdMap[parentOfOldMatchingActivity];
                    });
                return pastedActivitiesParentsMap;
            };
        ContextFlyoutContent.prototype
            .savePastedActivitiesAndSetParentIds = function(pastedActivities,
                pastedRootActivity,
                pastedActivitiesParentsMap) {
                var deferred = $.Deferred();
                var promises = [];
                jQuery.each(pastedActivities,
                    function(index, newItem) {
                        promises.push(newItem.save());
                    });
                var serverIdsMap = [];
                $.when.apply(self, promises).done(function() {
                    jQuery.each(pastedActivities,
                        function(index, newItem) {
                            // Populate the server ids map to the client ids once activities are saved
                            serverIdsMap[newItem.cid] = newItem.getActivityID();
                            GenericWorkflowDesigner.Settings.workflowTree.add(newItem);
                        });
                    promises = [];
                    jQuery.each(pastedActivities,
                        function(index, pastedActivity) {
                            if (pastedActivity == pastedRootActivity) {
                                return;
                            }
                            var realParentId = serverIdsMap[pastedActivitiesParentsMap[pastedActivity.cid]];
                            pastedActivity.setParentActivityID(realParentId);
                            promises.push(pastedActivity.save());
                        });
                    $.when.apply(self, promises).done(function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Adds support for touch events to draggable ui objects
    */
    'use strict';
    var DragTouchHelper = (function() {
        function DragTouchHelper() {
        }

        /** Maps touch events to supported mouse events
         * @param draggableElement element that supports draggable operations
         */
        DragTouchHelper.mapTouchEvents = function(draggableElement) {
            draggableElement.unbind('touchstart');
            draggableElement.unbind('touchmove');
            draggableElement.unbind('touchend');
            draggableElement.bind('touchstart', DragTouchHelper.touchEventHandler);
            draggableElement.bind('touchmove', DragTouchHelper.touchEventHandler);
            draggableElement.bind('touchend', DragTouchHelper.touchEventHandler);
        };
        DragTouchHelper.dispatchMouseEvent = function(newEventName, touch, originalEvent) {
            var newEvent = document.createEvent('MouseEvent');
            newEvent.initMouseEvent(newEventName,
                true,
                true,
                window,
                1,
                touch.screenX,
                touch.screenY,
                touch.clientX,
                touch.clientY,
                false,
                false,
                false,
                false,
                0,
                null);
            originalEvent.target.dispatchEvent(newEvent);
        };
        DragTouchHelper.longPressTresholdMilliseconds = 1000;
        DragTouchHelper.moveStarted = false;
        DragTouchHelper.touchEventHandler = function(e, ui) {
            e.preventDefault();
            var touch = e.originalEvent.changedTouches[0];
            var newEventName = '';
            if (e.type === 'touchstart') {
                newEventName = 'mousedown';
                DragTouchHelper.startTime = new Date().getTime();
                DragTouchHelper.moveStarted = false;
                DragTouchHelper.startScreenX = touch.screenX;
                DragTouchHelper.startScreenY = touch.screenY;
            } else if (e.type === 'touchmove') {
                newEventName = 'mousemove';
                if (DragTouchHelper.startScreenX == touch.screenX && DragTouchHelper.startScreenY == touch.screenY) {
                    // Skip firing mouse move event on initial touch when location didn't change
                    return true;
                }
                DragTouchHelper.moveStarted = true;
            } else if (e.type === 'touchend') {
                newEventName = 'mouseup';
                DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
                DragTouchHelper.endTime = new Date().getTime();
                if (!DragTouchHelper.moveStarted) {
                    if ((DragTouchHelper.endTime - DragTouchHelper.startTime) >
                        DragTouchHelper.longPressTresholdMilliseconds) {
                        newEventName = 'contextmenu';
                    } else {
                        newEventName = 'click';
                    }
                }
            }
            DragTouchHelper.dispatchMouseEvent(newEventName, touch, e);
            return true;
        };
        return DragTouchHelper;
    })();
    GenericWorkflowDesigner.DragTouchHelper = DragTouchHelper;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutContentProvider.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates flyout content provider
    */
    'use strict';
    var FlyoutContentProvider = (function(_super) {
        __extends(FlyoutContentProvider, _super);

        function FlyoutContentProvider() {
            _super.apply(this, arguments);
        }

        /** Creates content for flyout based on flyoutcontent type and activity.
        * @param flyoutContentType: The content type for which flyout needs to be build
        * @param activity: The activity.
        */
        FlyoutContentProvider.prototype.createContent = function(flyoutContentType, activity) {
            switch (flyoutContentType) {
            case FlyoutContentProvider.flyoutContentType.ContextFlyout:
                var contextFlyoutContent = new GenericWorkflowDesigner.ContextFlyoutContent(activity);
                return contextFlyoutContent.createContent();
            //case FlyoutContentProvider.flyoutContentType.ABTestingContextFlyout:
            //    var abContextFlyoutContent = new ABTestingContextFlyoutContent(activity);
            //    return abContextFlyoutContent.createContent();
            case FlyoutContentProvider.flyoutContentType.SegmentFlyout:
                var segmentFlyoutContent = new GenericWorkflowDesigner
                    .BaseFlyoutContent(activity, new GenericWorkflowDesigner.SegmentItemContextFlyoutContent(activity));
                return segmentFlyoutContent.createContent();
            //case FlyoutContentProvider.flyoutContentType.ABTestingFlyout:
            //    var abTestingFlyoutContent = new ABTestingFlyoutContent(activity, new ABTestingVariantItemContextFlyoutContent(activity));
            //    return abTestingFlyoutContent.createContent();
            case FlyoutContentProvider.flyoutContentType.AttributesFlyout:
                var attributesFlyoutContent = new GenericWorkflowDesigner
                    .BaseFlyoutContent(activity,
                        new GenericWorkflowDesigner.AttributesItemContextFlyoutContent(activity));
                return attributesFlyoutContent.createContent();
            default:
                throw Error("Content type not supported.");
            }
        };
        // content types for flyout
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Contains all the flyout created
    */
    'use strict';
    var FlyoutControlCollection = (function() {
        function FlyoutControlCollection() {
            /** Property indicating the list of all tileItemsMenu */
            this.tileItemsMenuList = [];
            /** Property indicating the list of all contextMenu */
            this.contextMenuList = [];
        }

        Object.defineProperty(FlyoutControlCollection.prototype,
            "TileItemsMenuList",
            {
                /*Getter for tileItemsMenuList*/
                get: function() {
                    return this.tileItemsMenuList;
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(FlyoutControlCollection.prototype,
            "ContextMenuList",
            {
                /*Getter for contextMenuList*/
                get: function() {
                    return this.contextMenuList;
                },
                enumerable: true,
                configurable: true
            });
        /*Add a flyout to tileItemsMenuList */
        FlyoutControlCollection.prototype.addTileItemFlyoutControl = function(flyoutControl) {
            this.tileItemsMenuList.push(flyoutControl);
        };
        /*Add a flyout to contextMenuList */
        FlyoutControlCollection.prototype.addContextMenuFlyoutControl = function(flyoutControl) {
            this.contextMenuList.push(flyoutControl);
        };
        /*Hide all the tileItemsMenu*/
        FlyoutControlCollection.prototype.hideTileItemFlyoutControl = function() {
            this.tileItemsMenuList.forEach(function(f) { return f.Hide(); });
            this.tileItemsMenuList = [];
        };
        /*Hide all the contextMenu*/
        FlyoutControlCollection.prototype.hideContextMenuFlyoutControl = function() {
            this.contextMenuList.forEach(function(f) { return f.Hide(); });
            this.contextMenuList = [];
        };
        return FlyoutControlCollection;
    })();
    GenericWorkflowDesigner.FlyoutControlCollection = FlyoutControlCollection;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="FlyoutControlContext.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates flyout control context
    */
    'use strict';
    var FlyoutControlContext = (function() {
        /**
        * Summary: Creates flyout control context
        * @param activity:
        * @param flyoutContentType:
        */
        function FlyoutControlContext(activity, contentType) {
            this.contentType = contentType;
            this.activity = activity;
        }

        FlyoutControlContext.prototype.getActivity = function() {
            return this.activity;
        };
        FlyoutControlContext.prototype.getContentType = function() {
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
(function(GenericWorkflowDesigner) {
    /** The Workflow tree, providing methods to traverse the tree structure. */
    'use strict';
    var Graphics = (function() {
        function Graphics() {
        }

        /** Create rectangle dom elemet
        @param rectangle: An array of segments representing the rectangle edges.
        @param segmentClass: The class that is added for each segment of the rectangle.
        */
        Graphics.prototype.createRectangleDOM = function(rectangle, segmentClass, lineWidth) {
            lineWidth = (lineWidth == undefined)
                ? GenericWorkflowDesigner.Settings.layoutProperties.lineWidth
                : lineWidth;
            var leftLine = this.createLineDOM(new GenericWorkflowDesigner
                .Point(rectangle.getLeft(), rectangle.getTop()),
                lineWidth,
                rectangle.getHeight(),
                segmentClass);
            var rightLine = this.createLineDOM(new GenericWorkflowDesigner
                .Point(rectangle.getRight(), rectangle.getTop()),
                lineWidth,
                rectangle.getHeight(),
                segmentClass);
            var topLine = this.createLineDOM(new GenericWorkflowDesigner.Point(rectangle.getLeft(), rectangle.getTop()),
                rectangle.getWidth(),
                lineWidth,
                segmentClass);
            var bottomLine = this.createLineDOM(new GenericWorkflowDesigner
                .Point(rectangle.getLeft(), rectangle.getBottom()),
                rectangle.getWidth(),
                lineWidth,
                segmentClass);
            var segments = [];
            segments.push(leftLine);
            segments.push(rightLine);
            segments.push(topLine);
            segments.push(bottomLine);
            return segments;
        };
        /** Creates a line dom element
        @param pointStart: the starting point of the line.
        @param width: The width.
        @param height: The height.
        @param segmentClass: The class that will be added on the line.
        */
        Graphics.prototype.createLineDOM = function(pointStart, width, height, segmentClass) {
            var line = $('<div class="' + segmentClass + '">');
            line.css("position", "absolute");
            line.css("width", width);
            line.css("height", height);
            line.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), pointStart.getX());
            line.css("top", pointStart.getY());
            return line;
        };
        /** Create the connector dom for if case with default case.
        @param startPoint: The starting point.
        @param endPoint: The ending point.
        @param segmentClass: The class that is added to the line, in order to support diferent styles.
        @param parentBranchID: BranchID of that particular stage.
        @param depth: Maximum depth from that particular stage.
        @return: An array of segments.
        */
        Graphics.prototype
            .createConnectorExtendDOM = function(startPoint, endPoint, segmentClass, parentBranchID, depth) {
                var segments = [], p2;
                var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
                var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
                var tileHeight = GenericWorkflowDesigner.Settings.layoutProperties.tileHeight;
                var tileButtonHeight = height - tileHeight;
                var colSpaceing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
                var defaultColSpaceing = colSpaceing / 2;
                var lineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
                var extra = depth * GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing +
                    (depth - 1
                    ) *
                    height;
                var top = startPoint.getY() + height;
                var left = startPoint.getX() + width / 2;
                // Point P1 -- Point where the edge starts from condition
                var p1 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p1, lineWidth, extra, segmentClass));
                // Point P2 -- Point where the horizontal edge start
                var startLoc = left;
                var endLoc = endPoint.getX() - defaultColSpaceing;
                p2 = new GenericWorkflowDesigner.Point(left, top + extra);
                segments.push(this.createLineDOM(p2, endLoc - startLoc, lineWidth, segmentClass));
                // Point P3 -- Point where the vertical edge start to join back to end point
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p3 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p3,
                    lineWidth,
                    extra + lineWidth + tileHeight / 2 + tileButtonHeight,
                    segmentClass));
                // Point P4 -- Point where the horizontal edge start to complete end path
                top = endPoint.getY() + tileHeight / 2;
                left = endPoint.getX() - defaultColSpaceing;
                var p4 = new GenericWorkflowDesigner.Point(left, top);
                segments.push(this.createLineDOM(p4, defaultColSpaceing, lineWidth, segmentClass));
                return segments;
            };
        /** Create the connector dom.
        @param startPoint: The starting point.
        @param endPoint: The ending point.
        @param segmentClass: The class that is added to the line, in order to support diferent styles.
        @return: An array of segments.
        */
        Graphics.prototype.createConnectorDOM = function(startPoint, endPoint, segmentClass, parentBranchID) {
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
            } else {
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
        /** Draws the lines, connecting the tiles.
        */
        Graphics.prototype.drawTileConnectors = function(obj) {
            var self = this;
            var workflowDefinition = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
            $.each(workflowDefinition,
                function(index, activity) {
                    var parentActivity = activity.getParent();
                    if (parentActivity != null &&
                        parentActivity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Root) {
                        self.drawConnector(parentActivity, activity, obj);
                    }
                });
        };
        /** Draws the connector between two activities.
        * @param parentActivity: The parent activity.
        * @param childActivity: The child activity.
        */
        Graphics.prototype.drawConnector = function(parentActivity, childActivity, obj) {
            var row1 = parentActivity.getRow();
            var col1 = parentActivity.getCol();
            var row2 = childActivity.getRow();
            var col2 = childActivity.getCol();
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var startPoint = new GenericWorkflowDesigner
                .Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
            var endPoint = new GenericWorkflowDesigner
                .Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));
            var connectorSegments = this.createConnectorDOM(startPoint, endPoint, "line", null);
            $.each(connectorSegments,
                function(index, segment) {
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
(function(GenericWorkflowDesigner) {
    /**
     *  HTMLControlTemplates class
     */
    "use strict";
    var HTMLControlTemplates = (function(_super) {
        __extends(HTMLControlTemplates, _super);

        function HTMLControlTemplates() {
            _super.apply(this, arguments);
        }

        HTMLControlTemplates.getHTMLControl = function(dataType, id, nameForLabel) {
            switch (dataType) {
            case "text":
                this.controlTemplate = "<label>" +
                    nameForLabel +
                    ": </label><input type='" +
                    dataType +
                    "' id=\"" +
                    id +
                    "\" value=\"<%- " +
                    id +
                    " %>\">";
                break;
            case "checkbox":
                this.controlTemplate = "<label>" +
                    nameForLabel +
                    ": </label><input type='" +
                    dataType +
                    "' id=\"" +
                    id +
                    "\" value=\"<%- " +
                    id +
                    " %>\" <%if(" +
                    id +
                    " == true){%> checked <%}%>>";
                break;
            case "textarea":
                this.controlTemplate = "<label>" +
                    nameForLabel +
                    ": </label><textarea id=\"" +
                    id +
                    "\"><%- " +
                    id +
                    " %></textarea>";
                break;
            case "optionset":
                this.controlTemplate = "<label>" +
                    nameForLabel +
                    ": </label><select id=\"" +
                    id +
                    "\"><option value=\"<%- " +
                    id +
                    " %>\"><%- " +
                    id +
                    " %></option></select>";
                break;
            case "button":
                this.controlTemplate = "<button id='" + id + "'>" + nameForLabel + "</button>";
                break;
            case "list":
                this.controlTemplate = "<label>" +
                    nameForLabel +
                    ": </label><ul id='" +
                    id +
                    "'><li><span></span></li></ul>";
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
(function(GenericWorkflowDesigner) {
    /** Controller that handles message selection change */
    'use strict';
    var MessageSelectClickHandler = (function() {
        function MessageSelectClickHandler(serviceUrl, model, propertyFrame, hiddenEntityIdField) {
            this.propertyFrame = null;
            this.model = model;
            this.propertyFrame = propertyFrame;
            this.hiddenEntityIdField = hiddenEntityIdField;
            this.serviceUrl = serviceUrl;
        }

        /** Get Post Data */
        MessageSelectClickHandler.prototype.generatePostData = function(messageSourceKeyId) {
            var self = this;
            var activeItem = this.model.getActiveItem();
            var preMessageSourceKeyOId = activeItem.get('ItemID');
            var preActivityTypeId = activeItem.get('ActivityTypeID');
            var activityCollection = self.model.getActivities()[0].collection;
            var messageAttachedCount = 0;
            if (preMessageSourceKeyOId === null) {
                messageAttachedCount = 0;
            } else {
                for (var i = 0; i < activityCollection.length; i++) {
                    if (preActivityTypeId == activityCollection.models[i].getActiveItem().get('ActivityTypeID') &&
                        preMessageSourceKeyOId == activityCollection.models[i].getActiveItem().get('ItemID')) {
                        messageAttachedCount++;
                    }
                }
            }
            return {
                messageExistCount: messageAttachedCount,
                previousMessageSourceKeyOId: preMessageSourceKeyOId,
                currentMessageSourceKeyOId: messageSourceKeyId,
                workflowOId: GenericWorkflowDesigner.workflowAssociatedEntityOID
            };
        };
        /** PropertyView select handler. */
        MessageSelectClickHandler.prototype.selectClickHandler = function() {
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
                success: function() {
                    _this.model.setActiveItemProperties(properties);
                    _this.model.save();
                }
            });
        };
        /** Gets the properties set in the PropertyView.
        @return: properties
        */
        MessageSelectClickHandler.prototype.getUpdatedProperties = function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Calculates the offset of an element for the given settings
    */
    'use strict';
    var PositionCalculator = (function() {
        /** Initializes a new instance of the PositionCalculator class.
        * @param settings used for calculations
         */
        function PositionCalculator(layoutProperties) {
            /**
            * Calculates the top position for the given row
            * @param row row to calculate position for
            */
            this.computeTop = function(row) {
                return row * (this.height + this.rowSpaceing) + this.topMargin;
            };
            /**
            * Calculates the left position for the given row
            * @param col column to calculate position for
            */
            this.computeLeft = function(col) {
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
    GenericWorkflowDesigner.PositionCalculator = PositionCalculator;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="RenderType.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Rendering types */
    'use strict';
    (function(RenderType) {
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
(function(GenericWorkflowDesigner) {
    /**
      * This class wraps the jQuery dragdrop extension and extends it further to
      * make the target container scroll if the user is holding the drop target on the
      * edge of the visible area of container
      */
    'use strict';
    var ScrollableDragDrop = (function() {
        function ScrollableDragDrop() {
        }

        /** Makes an element draggable and makes the container scroll if required
         * @param element The jQuery element which needs to be draggable
         * @param container The jQuery element which needs to scroll
         * @param draggableOptions The options required for jQuery draggable
         * @param scrollOptions Optional, default - step : 10 (px), timer : 25 (msec), scrollTriggerMargin : 60 (px)
         */
        ScrollableDragDrop.prototype.makeDraggable = function(element, container, draggableOptions, scrollOptions) {
            if (scrollOptions === void 0) {
                scrollOptions = {};
            }
            var containerEdgeScroller = new GenericWorkflowDesigner.ContainerEdgeScroller(container, scrollOptions);
            var extendedDraggableOptions = $.extend({},
                draggableOptions,
                {
                    start: function() {
                        if (draggableOptions.start) {
                            draggableOptions.start.apply(this, arguments);
                        }
                        containerEdgeScroller.initialize();
                    },
                    drag: function(e) {
                        if (draggableOptions.drag) {
                            draggableOptions.drag.apply(this, arguments);
                        }
                        containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                    },
                    stop: function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Builds the slots.
    */
    'use strict';
    var SubsequentActivityGenerator = (function() {
        function SubsequentActivityGenerator() {
        }

        /** Creates subsequent slots for the given activity.
        * @param activity: The activity.
        * @return : Array of of subsequent activities for the given activity.
        */
        SubsequentActivityGenerator.prototype.createGenerator = function(activity) {
            return new GenericWorkflowDesigner.DefaultSubsequentActivities(activity);
        };
        SubsequentActivityGenerator.prototype.createChildActivities = function(activity) {
            var generator = this.createGenerator(activity);
            return generator.createChildActivities();
        };
        return SubsequentActivityGenerator;
    })();
    GenericWorkflowDesigner.SubsequentActivityGenerator = SubsequentActivityGenerator;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowEntityDefinitionDataSyncer.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /** Allows syncing of client models to the server */
    'use strict';
    var GenericWorkflowEntityDefinitionSyncer = (function() {
        function GenericWorkflowEntityDefinitionSyncer() {
        }

        /** Gets the workflow
        * @param {model} model to be populated with retrieved defintion
        * @param {options} options to be used
        */
        GenericWorkflowEntityDefinitionSyncer.prototype.GetWorkflow = function(model, options) {
            var defer = $.Deferred();
            var workflowObject = GenericWorkflowDesigner.DataAccessEvents.getWorkflowData(model);
            defer.resolve(workflowObject);
            return defer.promise();
        };
        /** Updates the workflow
        * @param {model} model that is used to update backend defintion
        * @param {options} options to be used
        */
        GenericWorkflowEntityDefinitionSyncer.prototype.UpdateWorkflowDefinition = function(model, options) {
            var defer = $.Deferred();
            var workflowObject = GenericWorkflowDesigner.DataAccessEvents.updateWorkflowDefinition(model);
            defer.resolve(workflowObject);
            return defer.promise();
        };
        /** Validates the workflow
        * @param {model} workflow to be validated
        * @param {options} options to be used
        */
        GenericWorkflowEntityDefinitionSyncer.prototype.ValidateWorkflow = function(model, options) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var WorkflowTree = (function() {
        function WorkflowTree() {
            this.activityCollection = null;
            this.selectedActivities = [];
            this.copiedActivities = [];
        }

        /** Sets the activity collection.
        * @param activities: The activity collection.
        */
        WorkflowTree.prototype.setActivityCollection = function(activityCollection) {
            this.activityCollection = activityCollection;
        };
        /** Sets the selected activities.
        * @param activities: The activities.
        */
        WorkflowTree.prototype.setSelectedActivities = function(activities) {
            this.selectedActivities = activities;
        };
        /** Gets the selected activities. */
        WorkflowTree.prototype.getSelectedActivities = function() {
            return this.selectedActivities;
        };
        /** Sets the copied activities.
        * @param activities: The activities.
        */
        WorkflowTree.prototype.setCopiedActivities = function(activities) {
            this.copiedActivities = activities;
        };
        /** Gets the copied activities. */
        WorkflowTree.prototype.getCopiedActivities = function() {
            return this.copiedActivities;
        };
        /** Get parent instance of activity.
        * @param activity: The activity.
        */
        WorkflowTree.prototype.getParent = function(activity) {
            var parentID = activity.getParentActivityID();
            if (parentID == null) {
                return null;
            }
            var parent = null;
            jQuery.each(this.activityCollection.models,
                function(index, currentActivity) {
                    if (currentActivity.getActivityID() == parentID) {
                        parent = currentActivity;
                        return false;
                    }
                });
            return parent;
        };
        /** Get next instance of activity.
        * @param activity: The activity.
        */
        WorkflowTree.prototype.getNextActivity = function(activity) {
            var nextID = activity.getNextActivityID();
            if (nextID == null) {
                return null;
            }
            var next = null;
            jQuery.each(this.activityCollection.models,
                function(index, currentActivity) {
                    if (currentActivity.getActivityID() == nextID) {
                        next = currentActivity;
                        return false;
                    }
                });
            if (CommonTypes.Types.Object.isNullOrUndefined(activity.nextActivity)) {
                activity.nextActivity = next;
            }
            return next;
        };;
        /** Get child activities.
        * @param activity: The activity.
        */
        WorkflowTree.prototype.getChildActivities = function(activity) {
            var childActivities = [];
            if (activity.getActivityID() == undefined)
                return childActivities;
            $(this.activityCollection.models).each(function(index, currentActivity) {
                if (currentActivity.getParentActivityID() == activity.getActivityID()) {
                    childActivities.push(currentActivity);
                }
            });
            return childActivities;
        };
        /** Get all child activities.
        * @param activity: The activity.
        */
        WorkflowTree.prototype.getAllChildActivities = function(activity) {
            var allChildActivities = [];
            $(this.getChildActivities(activity)).each(function(index, childActivity) {
                if (!childActivity.isLeaf()) {
                    allChildActivities.push(childActivity);
                    $(childActivity.getAllChildActivities(childActivity))
                        .each(function(childIndex, childOfCurrentChild) {
                            if (!childOfCurrentChild.isLeaf()) {
                                allChildActivities.push(childOfCurrentChild);
                            }
                        });
                }
            });
            return allChildActivities;
        };
        /** Gets the maximum drift for a given activity.
        * @param activity: The activity.
        */
        WorkflowTree.prototype.getMaxDrift = function(activity) {
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
                return this.getMaxDrift(childActivities[0]) +
                    Math.max(this.getMaxDrift(childActivities[1]), this.getMaxDrift(childActivities[2])) +
                    1;
            }
        };
        /** Gets the maximum depth for a given activity.
        * @param activity: The activity.
        */
        // public getMaxDepth(activity: ActivityDefinitionModel): any {
        WorkflowTree.prototype.getMaxDepth = function(activity) {
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
                    return Math.max(this.getMaxDepth(childActivities[0]),
                            (this.getMaxDepth(childActivities[1])) + this.getMaxDepth(childActivities[2])) +
                        1;
                }
            }
        };
        /** Adds a child activity.
        @param parentActivity: The parent activity.
        @param childActivity: The child activity.
        @return: The child activity.
        */
        WorkflowTree.prototype.addChildActivity = function(parentActivity, childActivity) {
            var deferred = $.Deferred();
            var droppedActivitiesComponent = new GenericWorkflowDesigner.ConnectedComponent(childActivity);
            GenericWorkflowDesigner.Settings.workflowTree
                .insertActivityComponentAfter(parentActivity, droppedActivitiesComponent)
                .done(function(insertedActivity) {
                    insertedActivity.saveActivityWithSubsequentActivities().done(function(activity) {
                        deferred.resolveWith(activity, [activity]);
                    });
                });
            //Commented to see if it works for Copy-Paster
            /*
            var nextParentBranchID = this.getChildActivities(parentActivity).length;
            childActivity.setParentActivityID(parentActivity.getActivityID());
            childActivity.setParentBranchID(nextParentBranchID);

            this.activityCollection.add(childActivity);
            */
        };
        /** Inserts an activity component as a child at the specified location.
        @ param parentActivity: The parent activity.
        @ param childActivityComponent: The child activity component.
        @ param parentBranchID: The location where the activity is inserted.
        @return: A promise with the default selected activity as parameter.
        */
        WorkflowTree.prototype
            .insertChildActivityComponentAtIndex = function(parentActivity, childActivityComponent, parentBranchID) {
                var self = this;
                var childActivities = parentActivity.getChildActivitiesSorted();
                var childActivity = childActivityComponent.getRoot();
                var oldParent = childActivity.getParent();
                var deferred = $.Deferred();
                var promiseList = [];
                childActivity.setParentActivityID(parentActivity.getActivityID());
                childActivity.setParentBranchID(parentBranchID);
                GenericWorkflowDesigner.eventManager
                    .trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting,
                        childActivity,
                        parentActivity,
                        parentBranchID);
                $.each(childActivities,
                    function(index, activity) {
                        var branchID = activity.getParentBranchID();
                        if (branchID >= parentBranchID) {
                            activity.setParentBranchID(branchID + 1);
                            var promise = activity.save();
                            promiseList.push(promise);
                        }
                    });
                childActivity.saveActivityWithSubsequentActivities().done(function(activity) {
                    var savedChildActivity = activity;
                    if (oldParent != null) {
                        promiseList.push(oldParent.createSubsequentActivity());
                    }
                    $.when.apply(self, promiseList).done(function() {
                        deferred.resolveWith(savedChildActivity, [savedChildActivity]);
                    });
                });
                return deferred.promise();
            };
        /** Updates the position for all activities */
        WorkflowTree.prototype.UpdatePositions = function() {
            this.activityCollection.UpdatePositions();
        };
        /** Returns the workflow definition as an array of activities.*/
        WorkflowTree.prototype.getWorkflowDefinition = function() {
            return this.activityCollection.getWorkflowDefinition();
        };
        /** Returns the root node for the workflow definition.*/
        WorkflowTree.prototype.getWorkflowDefinitionRoot = function() {
            return this.activityCollection.getWorkflowDefinitionRoot();
        };
        /** Returns an array of activities that are the leafs of the Workflow. */
        WorkflowTree.prototype.getLeaves = function() {
            return this.activityCollection.getLeaves();
        };
        /** Returns all the activities */
        WorkflowTree.prototype.getActivities = function() {
            if (this.activityCollection != null) {
                return this.activityCollection.models;
            } else {
                return null;
            }
        };
        /** Returns all the activities that are not empty */
        WorkflowTree.prototype.getAllConcreteActivities = function() {
            var list = [];
            jQuery.each(this.activityCollection.models,
                function(index, activity) {
                    if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                        list.push(activity);
                    }
                });
            return list;
        };
        /** Inserts an activity component after the parent activity and reparentes its children to the inserted activitiy component.
        @param parentActivity:The parent activity.
        @param insertActivityComponent: The activity component.
        @return: A promise with the default selected activity as parameter.
        */
        WorkflowTree.prototype.insertActivityComponentAfter = function(parentActivity, insertActivityComponent) {
            var self = this;
            var childActivitiesToMove = parentActivity.getChildActivitiesToReparentForInsertAfter();
            var remainingActivities = $(parentActivity.getChildActivitiesSorted()).not(childActivitiesToMove);
            var deferred = $.Deferred();
            var promiseList = [];
            var insertActivity = insertActivityComponent.getRoot();
            insertActivity.setParentActivityID(parentActivity.getActivityID());
            insertActivity.setParentBranchID(0);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting,
                insertActivity,
                parentActivity,
                0);
            var promise = insertActivity.save().done(function() {
                self.add(insertActivity);
                $.each(childActivitiesToMove,
                    function(index, activity) {
                        activity.setParentActivityID(insertActivity.getActivityID());
                        if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                            promise = activity.save();
                            promiseList.push(promise);
                        }
                    });
                // Reindex remaining activities, starting from 1 (the newly inserted activity is at index 0)
                $.each(remainingActivities,
                    function(index, activity) {
                        activity.setParentBranchID(index + 1);
                        promise = activity.save();
                        promiseList.push(promise);
                    });
                $.when.apply(self, promiseList).done(function() {
                    deferred.resolveWith(insertActivity, [insertActivity]);
                });
            });
            promiseList.push(promise);
            return deferred.promise();
        };
        /** Inserts a new activity component before the specified activity.
         @param activity: The activity.
         @param insertActivity: The activity component that is inserted before the specified activity.
         @return: The promise wich has default select activity as parameter.
        */
        WorkflowTree.prototype.insertActivityComponentBefore = function(activity, insertComponent) {
            var self = this;
            var deferred = $.Deferred();
            var root = insertComponent.getRoot();
            var parentActivity = activity.getParent();
            var parentBranchID = activity.getParentBranchID();
            root.setParentActivityID(parentActivity.getActivityID());
            root.setParentBranchID(activity.getParentBranchID());
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityInserting,
                root,
                parentActivity,
                parentBranchID);
            root.save().done(function() {
                self.add(root);
                var defaultConnectionActivity = insertComponent.getNodesWithOrphanChildren()[0];
                activity.setParentActivityID(defaultConnectionActivity.getActivityID());
                activity.setParentBranchID(0);
                activity.save().done(function() {
                    deferred.resolveWith(root, [root]);
                });
            });
            return deferred.promise();
        };
        /** Cuts the activity from the workflow tree
        @param: The activity to cut.
        @return: A promise with the default selected activity as parameter.
        */
        WorkflowTree.prototype.cutActivity = function(activityToCut) {
            var component = new GenericWorkflowDesigner.ConnectedComponent(activityToCut);
            return this.cutConnectedComponent(component);
        };
        /** Cuts the activity component from the workflow tree.
        @param component: The activity component.
        @return: A promise with the default selected activity as parameter.
        */
        WorkflowTree.prototype.cutConnectedComponent = function(component) {
            var self = this;
            var deferred = $.Deferred();
            var promiseList = [];
            var activityToCut = component.getRoot();
            var branchIndex = activityToCut.getParentBranchID();
            var oldParent = activityToCut.getParent();
            if (oldParent == null) {
                // Return as activity is already cut
                deferred.resolve();
                return deferred.promise();
            }
            var oldParentActivityID = oldParent.getActivityID();
            var oldParentChildren = oldParent.getChildActivitiesSorted();
            var activityToCutBranchId = activityToCut.getParentBranchID();
            $.each(component.getOrphanChildren(),
                function(index, child) {
                    if (child.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                        self.remove(child);
                    }
                });
            var activitiesToMove = self.getActivitiesToMoveOnCut(component);
            var numberOfActivitiesToBeInserted = activitiesToMove.length;
            $.each(oldParentChildren,
                function(index, activity) {
                    var branchID = activity.getParentBranchID();
                    if (branchID > activityToCutBranchId) {
                        activity.setParentBranchID(branchID + numberOfActivitiesToBeInserted - 1);
                        var promise = activity.save();
                        promiseList.push(promise);
                    }
                });
            $.each(activitiesToMove,
                function(index, child) {
                    child.setParentActivityID(oldParentActivityID);
                    child.setParentBranchID(branchIndex);
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.activityParentCutting,
                            child,
                            activityToCut,
                            oldParent);
                    promiseList.push(child.save());
                    branchIndex++;
                });
            // Detach the activity from parent
            activityToCut.setParentActivityID(null);
            $.when.apply(self, promiseList).done(function() {
                deferred.resolve();
            });
            return deferred.promise();
        };
        WorkflowTree.prototype.removeEmptyChildren = function(activity) {
            var self = this;
            var children = activity.getChildActivitiesSorted();
            jQuery.each(children,
                function(index, child) {
                    if (child.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                        self.remove(child);
                    }
                });
        };
        /** Gets the activities to move over to the parent all the child activities of the cut activity and its dependant activities children */
        WorkflowTree.prototype.getActivitiesToMoveOnCut = function(component) {
            var activitiesToMove = component.getOrphanChildren();
            // Do not include empty activities
            activitiesToMove = $.grep(activitiesToMove,
                function(element, index) {
                    if (element.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                        return false;
                    }
                    return true;
                });
            return activitiesToMove;
        };
        /** Fetch activities from the server.
        @param properties: The fetch properties.
        */
        WorkflowTree.prototype.fetch = function(entityOID, workflowProviderType) {
            var self = this;
            var deferred = $.Deferred();
            var workflowEntityDefinition = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            var promise = workflowEntityDefinition.fetch({
                reset: true,
                data: { EntityID: entityOID, WorkflowProviderType: workflowProviderType }
            });
            promise.done(function() {
                var readonlyMode = workflowEntityDefinition.getReadOnlyMode();
                GenericWorkflowDesigner.workflowOID = workflowEntityDefinition.getWorkflowId();
                GenericWorkflowDesigner.workflowStatus = workflowEntityDefinition.getState();
                var fetchActivityCollectionPromise = self.activityCollection.fetch({
                    reset: true,
                    data: {
                        WorkflowID: GenericWorkflowDesigner.workflowOID,
                        WorkflowProviderType: workflowProviderType
                    }
                });
                fetchActivityCollectionPromise.done(function() {
                    jQuery.each(self.activityCollection.models,
                        function(index, currentActivity) {
                            currentActivity.setReadonlyMode(readonlyMode);
                        });
                    self.onSuccessFetch().done(function() {
                        self.UpdatePositions();
                        deferred.resolve();
                    });
                });
                fetchActivityCollectionPromise.fail(function() {
                    self.onErrorFetch();
                    deferred.fail();
                });
            });
            promise.fail(function() {
                self.onErrorFetch();
                deferred.fail();
            });
            return deferred.promise();
        };
        /** Handler for success event on fetch. */
        WorkflowTree.prototype.onSuccessFetch = function() {
            var self = this;
            var deferred = $.Deferred();
            if (this.activityCollection.length == 0) {
                var workflowRootActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                    .createActivity(GenericWorkflowDesigner.ActivityType.Root);
                this.add(workflowRootActivity);
                workflowRootActivity.saveActivityWithSubsequentActivities().done(function() {
                    deferred.resolve();
                });
            } else {
                return this.createSubsequentActivities();
            }
            return deferred.promise();
        };
        /** @deprecated Use createSubsequentActivities instead
        */
        WorkflowTree.prototype.createSubsequentActivitiesForLeafs = function() {
            var deferred = $.Deferred();
            var childPromises = [];
            var activities = this.getLeaves();
            $(activities).each(function(index, activity) {
                var promise = activity.createSubsequentActivity();
                childPromises.push(promise);
            });
            $.when.apply(self, childPromises).done(function() {
                deferred.resolve();
            });
            return deferred.promise();
        };
        /* Creates the subsequent activities for the leaf activities.
        @return: returns a promise.
        */
        WorkflowTree.prototype.createSubsequentActivities = function() {
            var deferred = $.Deferred();
            var childPromises = [];
            var activities = this.activityCollection.getActivitiesForSubsequentActivitiesGeneration();
            $(activities).each(function(index, activity) {
                var promise = activity.createSubsequentActivity();
                childPromises.push(promise);
            });
            $.when.apply(self, childPromises).done(function() {
                deferred.resolve();
            });
            return deferred.promise();
        };
        /* Handler for error event on fetch. */
        WorkflowTree.prototype.onErrorFetch = function() {
            // Skip if error is not required to show.
            if (window.SuppressErrors) {
                return;
            }
            GenericWorkflowDesigner.alertLabelKeyValue("ERROR FETCHING WORKFLOW DEFINITION");
        };
        /** Add activity
        @param : The activity to add.
        */
        WorkflowTree.prototype.add = function(activity) {
            this.activityCollection.add(activity);
        };
        /** Remove activity.
        @param : The activity to remove.
        */
        WorkflowTree.prototype.remove = function(activity) {
            this.activityCollection.remove(activity);
        };
        WorkflowTree.prototype.has = function(activity) {
            var index = $.inArray(activity, this.activityCollection.models);
            return (index >= 0) ? true : false;
        };
        /** Gets the connected components. */
        WorkflowTree.prototype.getConnectedComponents = function() {
            var extractor = new GenericWorkflowDesigner.ConnectedComponentsExtractor(this.getAllConcreteActivities());
            var components = extractor.getConnectedComponentsFromSelection(this.getSelectedActivities());
            return components;
        };
        /** Tests if the specified activity is inside the selection.
        @param activity: The activity.
        */
        WorkflowTree.prototype.isInSelection = function(activity) {
            var index = $.inArray(activity, this.getSelectedActivities());
            return (index > -1) ? true : false;
        };
        /** Returns the distance between the activity and the root.
        @param activity: The activity.
        */
        WorkflowTree.prototype.getDistanceFromRoot = function(activity) {
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
        // get activity by its id
        WorkflowTree.prototype.getActivityById = function(activityId) {
            var activity;
            $(this.activityCollection.models).each(function(index, currentActivity) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates Flyout Content
    */
    'use strict';
    var BaseFlyoutContent = (function() {
        /**
        * Summary: Creates Flyout Content
        * @param activity: activity for which Flyout content has to be set
        */
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

        /** Builds the item view.
        * @param index: The index of the item.
        */
        BaseFlyoutContent.prototype.buildItemView = function(index) {
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
        /**
         * Summary: evaluates if current Flyout instance supports Highlighting.
         */
        BaseFlyoutContent.prototype.supportsHighlighting = function() {
            return this.flyoutItemStartIndex === 1;
        };
        BaseFlyoutContent.prototype.isActiveItemIndex = function(index) {
            return this.currentActivity.getActiveItemIndex() === index;
        };
        /**
        * Summary: Creates Content for Flyout
        */
        BaseFlyoutContent.prototype.createContent = function() {
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
        BaseFlyoutContent.prototype.isNumberOfItemsWithinThreshold = function() {
            return this.currentActivity.attributes.Properties.Items.length <=
                BaseFlyoutContent.maxItemsThreshold + this.flyoutItemStartIndex;
        };
        /** Summary: Performs single selection for active element by applying selection style.
        * @param activeItemElement: the active element to whom selection will be applied
        */
        BaseFlyoutContent.prototype.highlightTileItem = function(tileItemElement) {
            $(tileItemElement).siblings().removeClass(BaseFlyoutContent.selectedClassName);
            $(tileItemElement).addClass(BaseFlyoutContent.selectedClassName);
        };
        /**
        * Summary: Binds click handler to active item
        * @param element: The item dom element.
        * @param activity: The activity.
        * @param index: The item index in the activity.
        */
        BaseFlyoutContent.prototype.setupClickHandlerToUpdateActiveItem = function(element, activity, index) {
            element.click(function(event) {
                activity.setActiveItemIndex(index);
                activity.save();
                GenericWorkflowDesigner.updateCurrentModel(activity);
                event.stopPropagation();
            });
        };
        /**
        * Summary: Binds context menu to specified item.
        * @param element: The item dom element.
        * @param activity: The activity.
        * @param index: The item index in the activity.
        */
        BaseFlyoutContent.prototype.setupContextHandler = function(element, activity, index) {
            var _this = this;
            var self = this;
            element.contextmenu(function(event) {
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
                var flyoutControlContext = new GenericWorkflowDesigner
                    .FlyoutControlContext(_this.currentActivity,
                        GenericWorkflowDesigner.Settings.flyoutContentProvider.flyoutContentType.ContextFlyout);
                var contextMenu = GenericWorkflowDesigner.Settings.slotContextMenu
                    .createFlyoutControl(flyoutControlContext);
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates default ContextMenu Content
    */
    'use strict';
    var DefaultItemContextFlyoutContent = (function(_super) {
        __extends(DefaultItemContextFlyoutContent, _super);

        function DefaultItemContextFlyoutContent() {
            _super.apply(this, arguments);
        }

        DefaultItemContextFlyoutContent.prototype.initializeOptionsPropertyList = function() {
            this.optionsPropertyList = {
                Delete: {
                    ID: 'delete',
                    LABEL: GenericWorkflowDesigner.Settings.labelKeyValuePhraseCollection["[DELETE]"],
                    clickHandler: this.deleteItem
                }
            };
        };
        /** Handles a delete of activity item.
        */
        DefaultItemContextFlyoutContent.prototype.deleteItem = function(itemIndex) {
            var inReadOnly = this.currentActivity.getReadonlyMode();
            if (!inReadOnly) {
                var allowDelete = confirm(GenericWorkflowDesigner.Settings
                    .labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE DELETE]"]);
                if (allowDelete) {
                    this.deleteItemCore(itemIndex);
                }
            }
            // hide the delete context menu after delete
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        DefaultItemContextFlyoutContent.prototype.deleteItemCore = function(itemIndex) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates ContextMenu Content for attribute item.
    */
    'use strict';
    var AttributesItemContextFlyoutContent = (function(_super) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Summary: Creates ContextMenu Content for segment item.
    */
    'use strict';
    var SegmentItemContextFlyoutContent = (function(_super) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Calculates the offset of an element for the given settings
    */
    'use strict';
    var WorkspaceModeController = (function() {
        function WorkspaceModeController(workspace) {
            this.workspace = null;
            // Modes
            this.zoomViewMode = null;
            this.multiSelectMode = null;
            this.workflowSwitchMode = null;
            // Buttons
            this.multiselectButton = null;
            this.zoomViewButton = null;
            this.workflowSwitchButton = null;
            this.workflowValidateButton = null;
            this.workspace = workspace;
            this.multiSelectMode = new GenericWorkflowDesigner.MultiSelectMode(workspace);
            this.zoomViewMode = new GenericWorkflowDesigner.ZoomViewMode(this.workspace);
            this.workflowSwitchMode = new GenericWorkflowDesigner.WorkflowSwitchMode(this.workspace);
        }

        /** Registers the multiselect view button. */
        WorkspaceModeController.prototype.registerMultiselectButton = function(button) {
            this.multiselectButton = button;
        };
        /** Registers the zoom view button. */
        WorkspaceModeController.prototype.registerZoomViewButton = function(button) {
            this.zoomViewButton = button;
        };
        /** Register the workflow switch command button */
        WorkspaceModeController.prototype.registerWorkfowSwitchButton = function(button) {
            this.workflowSwitchButton = button;
        };
        /** Register the workflow validate button */
        WorkspaceModeController.prototype.registerWorkflowValidateButton = function(button) {
            this.workflowValidateButton = button;
        };
        /** Reacts to workflow activate */
        WorkspaceModeController.prototype.activateWorkflow = function() {
            this.workflowSwitchMode.modeChanged();
        };
        /** Reacts to workflow deactivate */
        WorkspaceModeController.prototype.deactivateWorklow = function() {
            this.workflowSwitchMode.modeChanged();
        };
        /** Reacts to workflow validate */
        WorkspaceModeController.prototype.validateWorkflow = function() {
            this.workflowSwitchMode.modeChanged();
        };
        /** Enables the multiselect view mode. */
        WorkspaceModeController.prototype.enableMultiselectView = function() {
            this.multiSelectMode.enableMode();
        };
        /** Disables the multiselect view mode. */
        WorkspaceModeController.prototype.disableMultiselectView = function() {
            this.multiSelectMode.disableMode();
        };
        /** Zoom in. */
        WorkspaceModeController.prototype.zoomIn = function() {
            this.zoomViewMode.ZoomIn();
        };
        /** Zoom out. */
        WorkspaceModeController.prototype.zoomOut = function() {
            this.zoomViewMode.ZoomOut();
        };
        return WorkspaceModeController;
    })();
    GenericWorkflowDesigner.WorkspaceModeController = WorkspaceModeController;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiselectCommandButton.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on multiselect button interaction
    */
    'use strict';
    var MultiselectCommandButton = (function() {
        function MultiselectCommandButton(workspaceModeController, buttonElement) {
            var _this = this;
            this.multiselectEnabled = false;
            this.workspaceModeController = null;
            this.buttonElement = null;
            this.workspaceModeController = workspaceModeController;
            this.buttonElement = buttonElement;
            this.workspaceModeController.registerMultiselectButton(this);
            this.buttonElement.click(function() {
                _this.execute();
            });
        }

        /** Execute the command. */
        MultiselectCommandButton.prototype.execute = function() {
            this.multiselectEnabled = !this.multiselectEnabled;
            if (this.multiselectEnabled) {
                this.workspaceModeController.enableMultiselectView();
                this.enable();
            } else {
                this.workspaceModeController.disableMultiselectView();
                this.disable();
            }
        };
        MultiselectCommandButton.prototype.enable = function() {
            this.buttonElement.addClass("selected");
        };
        MultiselectCommandButton.prototype.disable = function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on zoom button interaction
    */
    'use strict';
    var ZoomViewCommandButton = (function() {
        function ZoomViewCommandButton(workspaceModeController, buttonElement) {
            var _this = this;
            this.zoomIn = true;
            this.workspaceModeController = null;
            this.buttonElement = null;
            this.workspaceModeController = workspaceModeController;
            this.buttonElement = buttonElement;
            this.workspaceModeController.registerZoomViewButton(this);
            this.buttonElement.click(function() {
                _this.execute();
            });
        }

        /** Execute the command. */
        ZoomViewCommandButton.prototype.execute = function() {
            this.zoomIn = !this.zoomIn;
            GenericWorkflowDesigner.zoomOut = !this.zoomIn;
            if (this.zoomIn == true) {
                this.workspaceModeController.zoomIn();
                this.activateZoomIn();
            } else {
                this.workspaceModeController.zoomOut();
                this.activateZoomOut();
            }
        };
        ZoomViewCommandButton.prototype.activateZoomIn = function() {
            this.buttonElement.removeClass("zoomInImage").addClass("zoomOutImage");
        };
        ZoomViewCommandButton.prototype.activateZoomOut = function() {
            this.buttonElement.removeClass("zoomOutImage").addClass("zoomInImage");
        };
        return ZoomViewCommandButton;
    })();
    GenericWorkflowDesigner.ZoomViewCommandButton = ZoomViewCommandButton;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MultiSelectMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Calculates the offset of an element for the given settings
    */
    'use strict';
    var MultiSelectMode = (function() {
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

        /** Enable multi select mode. */
        MultiSelectMode.prototype.enableMode = function() {
            $(this.workspace.el)
                .bind("mousedown", { context: this }, this.mouseDownHandler);
            $(window).bind("mousemove", { context: this }, this.mouseMoveHandler)
                .bind("mouseup", { context: this }, this.mouseUpHandler);
        };
        /** Disable multi select mode. */
        MultiSelectMode.prototype.disableMode = function() {
            this.workspace.$el.unbind('mousedown', this.mouseDownHandler);
            $(window).unbind('mouseup', this.mouseUpHandler);
            $(window).unbind('mousemove', this.mouseMoveHandler);
        };
        MultiSelectMode.prototype.mouseDownHandler = function(event) {
            var self = event.data.context;
            self.containerEdgeScroller.initialize();
            self.pointMouseDown.setX(event.clientX - self.deltaX + self.workspace.el.scrollLeft);
            self.pointMouseDown.setY(event.clientY - self.deltaY + self.workspace.el.scrollTop);
            self.mouseDown = true;
        };
        MultiSelectMode.prototype.mouseMoveHandler = function(event) {
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
        MultiSelectMode.prototype.highlightSelections = function(latticeCoordinatesRectangle) {
            var deselected = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, false);
            var selections = this.getActivitiesDependingOnSelection(latticeCoordinatesRectangle, true);
            GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(selections);
            jQuery.each(deselected,
                function(index, activity) {
                    GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.deselect.trigger(activity);
                });
            jQuery.each(selections,
                function(index, selection) {
                    GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.select.trigger(selection);
                });
            if (selections.length == 1) {
                GenericWorkflowDesigner.updateCurrentModel(selections[0]);
            }
        };
        MultiSelectMode.prototype.mouseUpHandler = function(event) {
            var self = event.data.context;
            self.containerEdgeScroller.stopScrolling();
            self.mouseDown = false;
            $("." + self.selectLineClass).remove();
        };
        MultiSelectMode.prototype.computeRowColumnSelect = function(rectangle) {
            var cellWidth = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing +
                GenericWorkflowDesigner.Settings.layoutProperties.width;
            var cellHeight = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing +
                GenericWorkflowDesigner.Settings.layoutProperties.height;
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
            var latticePointCoordinateRectangle = new GenericWorkflowDesigner
                .Rectangle(new GenericWorkflowDesigner.Point(leftCol, topRow),
                    new GenericWorkflowDesigner.Point(rightCol, bottomRow),
                    false);
            return latticePointCoordinateRectangle;
        };
        MultiSelectMode.prototype.getPixelPositionsForSlotBoundaries = function(column, row) {
            var slotWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var slotHeight = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var spaceingWidth = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var spaceingHeight = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing;
            var leftCol = column * (slotWidth + spaceingWidth);
            var topRow = row * (slotHeight + spaceingHeight);
            var rightCol = leftCol + slotWidth;
            var bottomRow = topRow + slotHeight;
            return new GenericWorkflowDesigner.Rectangle(new GenericWorkflowDesigner.Point(leftCol, topRow),
                new GenericWorkflowDesigner.Point(rightCol, bottomRow));
        };
        MultiSelectMode.prototype.drawRectangle = function(rectangle) {
            var self = this;
            var lineWidth = 0;
            var segments = GenericWorkflowDesigner.Settings.graphics
                .createRectangleDOM(rectangle, this.selectLineClass, lineWidth);
            jQuery.each(segments,
                function(index, segment) {
                    self.workspace.$el.append(segment);
                });
        };
        MultiSelectMode.prototype.isActivityInsideRectangle = function(activity, latticePointRectangle) {
            var row = activity.getRow();
            var col = activity.getCol();
            var point = new GenericWorkflowDesigner.Point(col, row);
            if (latticePointRectangle.isPointInsideWidth(point) && latticePointRectangle.isPointInsideHeight(point)) {
                return true;
            }
            return false;
        };
        /** Gets the activities that have the coordinates by row and column inside/outside the rectangle in lattice point coordinates.
        * @param latticePointRectangle: The rectangle of the selection in lattice point coordinate.
        * @param includedInRectangle: If we want the activities inside the rectangle or outside the rectangle.
        * @return: The activities.
        */
        MultiSelectMode.prototype
            .getActivitiesDependingOnSelection = function(latticePointRectangle, includedInRectangle) {
                var _this = this;
                var outside = 0;
                var inside = 1;
                var selectedActivities = [];
                var activityDictionary = [];
                $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities())
                    .each(function(index, currentActivity) {
                        activityDictionary[currentActivity.getActivityID()] = outside;
                    });
                // Mark the activities that are inside the rectangle and the dependencies.
                $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities())
                    .each(function(indexActivity, currentActivity) {
                        if (_this.isActivityInsideRectangle(currentActivity, latticePointRectangle)) {
                            activityDictionary[currentActivity.getActivityID()] = inside;
                            var dependentActivityList = currentActivity.getDependantActivities();
                            $(dependentActivityList).each(function(indexDependentActivity, dependentActivity) {
                                activityDictionary[dependentActivity.getActivityID()] = inside;
                            });
                        }
                    });
                var toSelect = includedInRectangle ? inside : outside;
                $(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities())
                    .each(function(index, currentActivity) {
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
(function(GenericWorkflowDesigner) {
    /** Mode that reacts on switching the workflow state */
    'use strict';
    var WorkflowSwitchMode = (function() {
        function WorkflowSwitchMode(workspace) {
            this.workspace = null;
            this.workspace = workspace;
        }

        /** Execute changes needed when mode has changed */
        WorkflowSwitchMode.prototype.modeChanged = function() {
            this.workspace.fetchWorkflow();
        };
        return WorkflowSwitchMode;
    })();
    GenericWorkflowDesigner.WorkflowSwitchMode = WorkflowSwitchMode;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ZoomViewMode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Calculates the offset of an element for the given settings
    */
    'use strict';
    var ZoomViewMode = (function() {
        function ZoomViewMode(workspace) {
            this.workspace = null;
            this.workspace = workspace;
        }

        /** Zoom in. */
        ZoomViewMode.prototype.ZoomIn = function() {
            this.workspace.$el.removeClass("zoomOut");
            GenericWorkflowDesigner.Settings.layoutProperties.width = GenericWorkflowDesigner.Settings.layoutProperties
                .zoomInWidth;
            this.refreshWorkspace();
        };
        /** Zoom out. */
        ZoomViewMode.prototype.ZoomOut = function() {
            this.workspace.$el.addClass("zoomOut");
            GenericWorkflowDesigner.Settings.layoutProperties.width = GenericWorkflowDesigner.Settings.layoutProperties
                .zoomOutWidth;
            this.refreshWorkspace();
        };
        ZoomViewMode.prototype.refreshWorkspace = function() {
            this.workspace.render();
            this.workspace.scrollToTile('.slot.selected');
        };
        return ZoomViewMode;
    })();
    GenericWorkflowDesigner.ZoomViewMode = ZoomViewMode;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="MinorContextListForGenericWorkflowDesigner.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    'use strict';
    //Contains Minor Context for Title display at client side.
    var MinorContextListForGenericWorkflowDesigner = (function() {
        function MinorContextListForGenericWorkflowDesigner() {
        }

        // Summary: Return list of Minor Context for which label Phrases are required.
        MinorContextListForGenericWorkflowDesigner.GetMinorContext = function() {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var FlyoutControlFactory = (function() {
        function FlyoutControlFactory(flyoutStyleClass) {
            if (!flyoutStyleClass) {
                throw "Style is needed.";
            }
            this.flyoutStyleClass = flyoutStyleClass;
        }

        /**
        Creates a flyout for the given control context.
        @param flyoutControlContext: The control context.
        @return: An flyout.
        */
        FlyoutControlFactory.prototype.createFlyoutControl = function(flyoutControlContext) {
            switch (flyoutControlContext.getActivity().getActivityTypeID()) {
                //case ActivityType.ABTESTING:
                //    return new ABTestingFlyoutControl(flyoutControlContext);
                //case ActivityType.APPROVALTEAM:
                //    return new ApprovalAutomation.ApprovalTeamFlyoutControl(flyoutControlContext);
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var SlotHandlerProvider = (function() {
        function SlotHandlerProvider() {
            this.slotTileHolderHandlerFactory = GenericWorkflowDesigner.Settings.slotHandlerFactory;
            this.slotInsertHorizontalHandlerFactory = GenericWorkflowDesigner.Settings
                .slotInsertHorizontalHandlerFactory;
            this.slotInsertVerticalHandlerFactory = GenericWorkflowDesigner.Settings.slotInsertVerticalHandlerFactory;
            this.slotIconHolderHandlerFactory = new GenericWorkflowDesigner.SlotIconHolderHandlerFactory();
        }

        SlotHandlerProvider.prototype.createFactory = function(slotModel) {
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
        SlotHandlerProvider.prototype.createDropHandler = function(slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createDropHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createClickHandler = function(slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createClickHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createDblClickHandler = function(slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createDblClickHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createContextHandler = function(slotModel) {
            var slotHandlerFactory = this.createFactory(slotModel);
            return slotHandlerFactory.createContextHandler(slotModel.getActivity());
        };
        SlotHandlerProvider.prototype.createDragHandler = function(slotModel) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var SlotIconHolderHandlerFactory = (function() {
        function SlotIconHolderHandlerFactory() {
        }

        /**Creates a drop handler of the given activity.
        * @param currentActivity: The activity.
        * @return: An activity drop handler.
        */
        SlotIconHolderHandlerFactory.prototype.createDropHandler = function(currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
            default:
                return new GenericWorkflowDesigner.DefaultSlotIconHolderHandler(currentActivity);
            }
        };
        /** Creates an activity handler for clicking on activity elements.
        * @param {currentActivity} : The activity on which click should be performed.
        * @return: An activity click handler.
        */
        SlotIconHolderHandlerFactory.prototype.createClickHandler = function(currentActivity) {
            return null;
        };
        /** Creates an activity handler for double clicking on activity elements.
        * @param {currentActivity} : The activity on which double click should be performed.
        * @return: An activity double click handler.
        */
        SlotIconHolderHandlerFactory.prototype.createDblClickHandler = function(currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        /**
       Creates a context handler of the given activity.
       @param currentActivity: The activity.
       @return: An activity click handler.
       */
        SlotIconHolderHandlerFactory.prototype.createContextHandler = function(currentActivity) {
            return null;
        };
        /**
        Creates a drag handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity drag handler.
        */
        SlotIconHolderHandlerFactory.prototype.createDragHandler = function(currentActivity) {
            return null;
        };
        /**
        Creates a key down handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity key down handler.
        */
        SlotIconHolderHandlerFactory.prototype.createKeyDownHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        /**
        Creates an on focus handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on focus handler.
        */
        SlotIconHolderHandlerFactory.prototype.createFocusHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        /**
        Creates an on blur handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on blur handler.
        */
        SlotIconHolderHandlerFactory.prototype.createBlurHandler = function(currentActivity) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var SlotInsertHorizontalHandlerFactory = (function() {
        function SlotInsertHorizontalHandlerFactory() {
        }

        /**Creates a drop handler of the given activity.
        * @param currentActivity: The activity.
        * @return: An activity drop handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createDropHandler = function(currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
            default:
                return new GenericWorkflowDesigner.DefaultInsertSlotHorizontalDropHandler(currentActivity);
            }
        };
        /** Creates an activity handler for clicking on activity elements.
        * @param {currentActivity} : The activity on which click should be performed.
        * @return: An activity click handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createClickHandler = function(currentActivity) {
            return null;
        };
        /** Creates an activity handler for double clicking on activity elements.
        * @param {currentActivity} : The activity on which double click should be performed.
        * @return: An activity double click handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createDblClickHandler = function(currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        /**
       Creates a context handler of the given activity.
       @param currentActivity: The activity.
       @return: An activity click handler.
       */
        SlotInsertHorizontalHandlerFactory.prototype.createContextHandler = function(currentActivity) {
            return null;
        };
        /**Creates a drag handler of the given activity.
        * @param currentActivity: The activity.
        * @return: An activity drag handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createDragHandler = function(currentActivity) {
            return null;
        };
        /**
        Creates a key down handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity key down handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createKeyDownHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        /**
        Creates an on focus handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on focus handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createFocusHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        /**
        Creates an on blur handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on blur handler.
        */
        SlotInsertHorizontalHandlerFactory.prototype.createBlurHandler = function(currentActivity) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var SlotInsertVerticalHandlerFactory = (function() {
        function SlotInsertVerticalHandlerFactory() {
        }

        /**Creates a drop handler of the given activity.
        * @param currentActivity: The activity.
        * @return: An activity drop handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createDropHandler = function(currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
            default:
                return new GenericWorkflowDesigner.DefaultInsertSlotVerticalDropHandler(currentActivity);
            }
        };
        /** Creates an activity handler for clicking on activity elements.
        * @param {currentActivity} : The activity on which click should be performed.
        * @return: An activity click handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createClickHandler = function(currentActivity) {
            return null;
        };
        /** Creates an activity handler for double clicking on activity elements.
        * @param {currentActivity} : The activity on which double click should be performed.
        * @return: An activity double click handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createDblClickHandler = function(currentActivity) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        /**
        Creates a context handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity click handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createContextHandler = function(currentActivity) {
            return null;
        };
        /**
        Creates a drag handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity drag handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createDragHandler = function(currentActivity) {
            return null;
        };
        /**
        Creates a key down handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity key down handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createKeyDownHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        /**
        Creates an on focus handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on focus handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createFocusHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        /**
        Creates an on blur handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on blur handler.
        */
        SlotInsertVerticalHandlerFactory.prototype.createBlurHandler = function(currentActivity) {
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
(function(GenericWorkflowDesigner) {
    /** Handler for clicking on activity */
    'use strict';
    var BaseActivityClickHandler = (function() {
        function BaseActivityClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        BaseActivityClickHandler.prototype.triggerHideMenusEvents = function() {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
        };
        /** Contains the condition that checks if the flyout should be shown or not.
        @return: true if flyout can be shown, else returns false.
        */
        BaseActivityClickHandler.prototype.canShowFlyout = function() {
            throw new Error("canShowFlyout method is not implmented");
        };
        /** Shows the flyout of activity.
        @param elementClicked: The element that was clicked.
        @return: A promise.
        */
        BaseActivityClickHandler.prototype.showFlyout = function(elementClicked) {
            if (this.flyoutContentType == null || this.flyoutContentType == "") {
                throw new Error("flyoutContentType is not defined");
            }
            var flyoutControlContext = new GenericWorkflowDesigner
                .FlyoutControlContext(this.currentActivity, this.flyoutContentType);
            var flyout = GenericWorkflowDesigner.Settings.tileItemsMenu.createFlyoutControl(flyoutControlContext);
            GenericWorkflowDesigner.Settings.flyoutLists.addTileItemFlyoutControl(flyout);
            var content = GenericWorkflowDesigner.Settings.flyoutContentProvider
                .createContent(this.flyoutContentType, this.currentActivity);
            flyout.SetRootElement(elementClicked);
            flyout.SetContent(content);
            return flyout.Show();
        };
        /** Executes a specific logic on click of the activity.
        @param elementClicked: The element that was clicked.
        */
        BaseActivityClickHandler.prototype.clickCore = function(elementClicked) {
        };
        /** Handles a click on activity.
        @param elementClicked: The element that click should be performed on.
        @return: promise.
        */
        BaseActivityClickHandler.prototype.click = function(elementClicked) {
            if ($("#canvas").find(".stage-detail-container").length > 0 &&
                elementClicked.find(".stage-detail-container").length == 0) {
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
(function(GenericWorkflowDesigner) {
    /** Handler for clicking on attribute activity */
    'use strict';
    var AttributeActivityClickHandler = (function(_super) {
        __extends(AttributeActivityClickHandler, _super);

        function AttributeActivityClickHandler(currentActivity) {
            _super.call(this, currentActivity);
            this.flyoutContentType = GenericWorkflowDesigner.FlyoutContentProvider.flyoutContentType.AttributesFlyout;
        }

        AttributeActivityClickHandler.prototype.canShowFlyout = function() {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for click on activity */
    'use strict';
    var DefaultActivityClickHandler = (function(_super) {
        __extends(DefaultActivityClickHandler, _super);

        function DefaultActivityClickHandler() {
            _super.apply(this, arguments);
        }

        DefaultActivityClickHandler.prototype.canShowFlyout = function() {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for click on activity */
    'use strict';
    var BaseContextFlyoutHandler = (function() {
        function BaseContextFlyoutHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        BaseContextFlyoutHandler.prototype.getContentType = function() {
            throw new Error("Method getContentType not implemented.");
        };
        /** Handles a click on activity.
        @param event: The context event
        @return: promise.
        */
        BaseContextFlyoutHandler.prototype.click = function(event) {
            var flyoutControlContext = new GenericWorkflowDesigner
                .FlyoutControlContext(this.currentActivity,
                    GenericWorkflowDesigner.FlyoutContentProvider.flyoutContentType.ContextFlyout);
            var contextMenu = GenericWorkflowDesigner.Settings.slotContextMenu
                .createFlyoutControl(flyoutControlContext);
            GenericWorkflowDesigner.Settings.flyoutLists.addContextMenuFlyoutControl(contextMenu);
            var content = GenericWorkflowDesigner.Settings.flyoutContentProvider
                .createContent(this.getContentType(), this.currentActivity);
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
(function(GenericWorkflowDesigner) {
    /** Default handler for click on activity */
    'use strict';
    var DefaultContextFlyoutHandler = (function(_super) {
        __extends(DefaultContextFlyoutHandler, _super);

        function DefaultContextFlyoutHandler() {
            _super.apply(this, arguments);
        }

        DefaultContextFlyoutHandler.prototype.getContentType = function() {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for doule click on activity */
    'use strict';
    var DefaultActivityDblClickHandler = (function() {
        function DefaultActivityDblClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles a double click on activity.
        @param elementDblClicked: The element that double click should be performed on.
        @return: promise.
        */
        DefaultActivityDblClickHandler.prototype.dblclick = function(elementDblClicked) {
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents
                .slotTileHolderDoubleClick);
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
(function(GenericWorkflowDesigner) {
    /** Default handler for doule click on activity */
    'use strict';
    var EmptyActivityDblClickHandler = (function() {
        function EmptyActivityDblClickHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles a double click on activity.
        @param elementDblClicked: The element that double click should be performed on.
        @return: promise.
        */
        EmptyActivityDblClickHandler.prototype.dblclick = function(elementDblClicked) {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for click on activity */
    'use strict';
    var DefaultActivityDragHandler = (function() {
        function DefaultActivityDragHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles a click on activity.
        @param elementClicked: The element that click should be performed on.
        @return: promise.
        */
        DefaultActivityDragHandler.prototype.drag = function(elementDragged) {
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
(function(GenericWorkflowDesigner) {
    /** Handler for dropping activity on segment */
    'use strict';
    var BaseStackableActivityDropHandler = (function(_super) {
        __extends(BaseStackableActivityDropHandler, _super);

        function BaseStackableActivityDropHandler() {
            _super.apply(this, arguments);
        }

        /** Get's the allowed stackable activity types.
        @Virtual
        @return: Array of allowed types.
        */
        BaseStackableActivityDropHandler.prototype.getAllowedStackableActivityTypes = function() {
            return [];
        };
        BaseStackableActivityDropHandler.prototype.isDroppedActivityStackable = function(droppedActivityType) {
            var index = $.inArray(droppedActivityType, this.getAllowedStackableActivityTypes());
            return (index >= 0) ? true : false;
        };
        /** Stacking handler.
        @Virtual
        @droppedActivityType: The dropped activity type.
        @return: Array of allowed types.
        */
        BaseStackableActivityDropHandler.prototype.stackingHandler = function(droppedActivityType) {
            var _this = this;
            var deferred = $.Deferred();
            this.currentActivity.addNewItem(droppedActivityType);
            this.currentActivity.save().done(function() {
                deferred.resolveWith(_this, [_this.currentActivity]);
            });
            return deferred.promise();
        };
        /** Non Stacking handler.
        @Virtual
        @droppedActivityComponent: The dropped activity component.
        @return: Array of allowed types.
        */
        BaseStackableActivityDropHandler.prototype.nonStackingHandler = function(droppedActivityComponent) {
            var defaultDropHandler = new GenericWorkflowDesigner.DefaultActivityDropHandler(this.currentActivity);
            return defaultDropHandler.drop(droppedActivityComponent);
        };
        /** Drop an activity component.
        @param droppedActivitiesComponent: The activity component that is dropped.
        @return: A promise with the default selected activity as parameter.
        */
        BaseStackableActivityDropHandler.prototype.drop = function(droppedActivityComponent) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var DefaultActivityDropHandler = (function(_super) {
        __extends(DefaultActivityDropHandler, _super);

        function DefaultActivityDropHandler() {
            _super.apply(this, arguments);
        }

        /** Drop an activity component.
        @param droppedActivitiesComponent: The activity that is dropped.
        @return: A promise with the created activity as parameter.
        */
        DefaultActivityDropHandler.prototype.drop = function(droppedActivitiesComponent) {
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
            //If we drop on an activity with an empty element, remove the empty activity so we don't keep it as a child.
            var childActivities = self.currentActivity.getChildActivitiesSorted();
            if (childActivities.length > 0 &&
                childActivities[0].getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                GenericWorkflowDesigner.Settings.workflowTree.remove(childActivities[0]);
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent)
                .done(function() {
                    var rootActivity = droppedActivitiesComponent.getRoot();
                    GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(self.currentActivity, rootActivity);
                    rootActivity.saveActivityWithSubsequentActivities().done(function(insertedActivity) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var DefaultInsertSlotHorizontalDropHandler = (function(_super) {
        __extends(DefaultInsertSlotHorizontalDropHandler, _super);

        function DefaultInsertSlotHorizontalDropHandler() {
            _super.apply(this, arguments);
        }

        /** Drop an activity component.
        @param droppedActivitiesComponent: The activity that is dropped.
        @return: A promise with the created activity as parameter.
        */
        DefaultInsertSlotHorizontalDropHandler.prototype.drop = function(droppedActivitiesComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(droppedActivitiesComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent)
                .done(function() {
                    GenericWorkflowDesigner.Settings.workflowTree
                        .insertActivityComponentAfter(self.currentActivity, droppedActivitiesComponent)
                        .done(function(insertedActivity) {
                            insertedActivity.saveActivityWithSubsequentActivities().done(function(activity) {
                                deferred.resolveWith(activity, [activity]);
                            });
                        });
                });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped,
                droppedActivitiesComponent.getNodes()[0]);
            return deferred.promise();
        };
        /** Returns true if drop is allowed for the given activity component, false otherwise
        *@param droppedActivitiesComponent - activity that is dropped.
        */
        DefaultInsertSlotHorizontalDropHandler.prototype.dropAllowed = function(droppedActivitiesComponent) {
            // Don't allow activity to be dropped on its own insert slot
            // Don't allow activity to be dropped on insertions slot inside component.
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var DefaultInsertSlotVerticalDropHandler = (function(_super) {
        __extends(DefaultInsertSlotVerticalDropHandler, _super);

        function DefaultInsertSlotVerticalDropHandler() {
            _super.apply(this, arguments);
        }

        /** Drop an activity.
        @param droppedActivity: The activity that is dropped.
        @return: The created activity.
        */
        DefaultInsertSlotVerticalDropHandler.prototype.drop = function(activityComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(activityComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(activityComponent).done(function() {
                self.insertActivityComponent(activityComponent).done(function(activity) {
                    deferred.resolveWith(activity, [activity]);
                });
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped,
                activityComponent.getNodes()[0]);
            return deferred.promise();
        };
        DefaultInsertSlotVerticalDropHandler.prototype.insertActivityComponent = function(droppedActivityComponent) {
            var parent = this.currentActivity.getParent();
            var index = this.currentActivity.getParentBranchID() + 1;
            return GenericWorkflowDesigner.Settings.workflowTree
                .insertChildActivityComponentAtIndex(parent, droppedActivityComponent, index);
        };
        /** Returns true if drop is allowed for the given activity, false otherwise
        *@param droppedActivity - activity that is dropped
        */
        DefaultInsertSlotVerticalDropHandler.prototype.dropAllowed = function(activityComponent) {
            // Don't allow activity to be dropped on its own insert slot
            // Don't allow activity to be dropped on insertions slot inside component.
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var DefaultSlotIconHolderHandler = (function(_super) {
        __extends(DefaultSlotIconHolderHandler, _super);

        function DefaultSlotIconHolderHandler() {
            _super.apply(this, arguments);
        }

        DefaultSlotIconHolderHandler.prototype.drop = function(droppedActivityType) {
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
(function(GenericWorkflowDesigner) {
    /** Handles drop on empty activity */
    'use strict';
    var EmptyActivityDropHandler = (function(_super) {
        __extends(EmptyActivityDropHandler, _super);

        function EmptyActivityDropHandler() {
            _super.apply(this, arguments);
        }

        /** Drop an activity component.
        @param droppedActivitiesComponent: The activity component that is dropped.
        @return: A promise with the default selected activity as parameter.
        */
        EmptyActivityDropHandler.prototype.drop = function(droppedActivitiesComponent) {
            var self = this;
            var deferred = $.Deferred();
            if (!this.dropAllowed(droppedActivitiesComponent)) {
                deferred.resolve();
                return deferred.promise();
            }
            GenericWorkflowDesigner.Settings.workflowTree.cutConnectedComponent(droppedActivitiesComponent)
                .done(function() {
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
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.activityReplacingEmptyTile,
                            rootActivity,
                            self.currentActivity);
                    rootActivity.saveActivityWithSubsequentActivities()
                        .done(function(insertedActivity) {
                            deferred.resolveWith(insertedActivity, [insertedActivity]);
                        });
                    var activities = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
                    activities.forEach(function(childactivity) {
                        if (emptyActivityID != null &&
                            childactivity.getActivityTypeID() == "empty" &&
                            childactivity.getNextActivityID() == emptyActivityID) {
                            childactivity.setNextActivityID(rootActivity.getActivityID());
                        }
                    });
                    if (emptyNextActivityID) {
                        var defaultChild = rootActivity.getChildActivitiesSorted()[0];
                        defaultChild.setNextActivityID(emptyNextActivityID);
                        self.currentActivity.setNextActivityID(null);
                    }
                    //if there is a child to this empty tile, make it the child for newly dropped activity
                    var temp = self.currentActivity.getChildActivitiesSorted();
                    if (temp.length > 0) {
                        var rootChild = rootActivity.getChildActivitiesSorted();
                        if (rootChild.length == 1 && rootChild[0].getActivityTypeID() == "empty") {
                            rootChild[0].setActivityID(rootChild[0].getParentActivityID() +
                                Math.floor((Math.random() * 100) + 1));
                            temp[0].setParentActivityID(rootChild[0].getActivityID());
                        } else {
                            temp[0].setParentActivityID(rootChild[0].getActivityID());
                        }
                        if (rootChild.length == 3) {
                            rootChild[0].setNextActivityID(temp[0].getActivityID());
                        }
                    }
                });
            return deferred.promise();
        };
        /** Returns true if drop is allowed for the given activity, false otherwise
        *@param droppedActivity - activity that is dropped
        */
        EmptyActivityDropHandler.prototype.dropAllowed = function(droppedActivityComponent) {
            // Don't allow parent activity to be dropped on its own empty slot
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Empty multiple components drop handler.*/
    var EmptyMultiDropHandler = (function() {
        function EmptyMultiDropHandler(slot) {
            this.slot = slot;
        }

        /** Drop multiple activity components.
        @param activityComponents: The array of activity components.
        @return: A promise with the created activity as parameter.
        */
        EmptyMultiDropHandler.prototype.drop = function(activityComponents) {
            var promise = null;
            var emptyDropHandler = new GenericWorkflowDesigner.EmptyActivityDropHandler(this.slot.getActivity());
            var firstComponent = activityComponents[0];
            var insertHorizontalDropHandler = new GenericWorkflowDesigner
                .DefaultInsertSlotVerticalDropHandler(firstComponent.getRoot());
            var count = activityComponents.length;
            var preparedComponents = [firstComponent].concat(activityComponents.slice(1, count).reverse());
            jQuery.each(preparedComponents,
                function(index, component) {
                    if (promise == null) {
                        promise = emptyDropHandler.drop(component);
                    } else {
                        promise = promise.then(function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotHorizontalMultiDropHandler = (function() {
        function InsertSlotHorizontalMultiDropHandler(slot) {
            this.slot = slot;
        }

        /** Drop multiple activity components.
        @param activityComponents: The array of activity components.
        @return: A promise with the created activity as parameter.
        */
        InsertSlotHorizontalMultiDropHandler.prototype.drop = function(activityComponents) {
            var promise = null;
            var currentActivity = this.slot.getActivity();
            var parentActivity = currentActivity.getParent();
            var insertSlotHorizontalDropHandler = new GenericWorkflowDesigner
                .DefaultInsertSlotHorizontalDropHandler(currentActivity);
            var isRootActivity = (parentActivity == null);
            var defaultActivityDropHandler = null;
            if (!isRootActivity) {
                defaultActivityDropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory
                    .createDropHandler(parentActivity);
            }
            jQuery.each(activityComponents,
                function(index, component) {
                    if (promise == null) {
                        promise = insertSlotHorizontalDropHandler.drop(component);
                    } else if (!isRootActivity) {
                        promise = promise.then(function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var InsertSlotVerticalMultiDropHandler = (function() {
        function InsertSlotVerticalMultiDropHandler(slot) {
            this.slot = slot;
        }

        /** Drop multiple activity components.
        @param activityComponents: The array of activity components.
        @return: A promise with the created activity as parameter.
        */
        InsertSlotVerticalMultiDropHandler.prototype.drop = function(activityComponents) {
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
            var promise = null;
            jQuery.each(activityComponents.reverse(),
                function(index, component) {
                    if (promise == null) {
                        promise = dropHandler.drop(component);
                    } else {
                        promise = promise.then(function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var TileHolderMultiDropHandler = (function() {
        function TileHolderMultiDropHandler(slot) {
            this.slot = slot;
        }

        TileHolderMultiDropHandler.prototype.getTileHoldeMultiDropHandler = function() {
            switch (this.slot.getActivity().getActivityTypeID()) {
            case GenericWorkflowDesigner.ActivityType.Empty:
                return new GenericWorkflowDesigner.EmptyMultiDropHandler(this.slot);
            default:
                return new GenericWorkflowDesigner.DefaultActivityMultiDropHandler(this.slot);
            }
        };
        /** Drop multiple activity components.
        @param activityComponents: The array of activity components.
        @return: A promise with the created activity as parameter.
        */
        TileHolderMultiDropHandler.prototype.drop = function(activityComponents) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** The Property View Factory */
    var IconFactory = (function() {
        function IconFactory() {
            this.iconTemplate = "";
            this
                .iconTemplate =
                '<div class="iconContainer"><img title="<%- tooltipText %>" src="<%- image %>" alt="<%- alt %>"></div>';
        }

        IconFactory.prototype.getIconAttributes = function(iconType) {
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
        /** Creates a icon.
        * @param iconType: The type of the icon.
        * @return: icon dom element.
        */
        IconFactory.prototype.createIcon = function(iconType) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot icon type */
    (function(SlotIconType) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Landing page link icon attributes. */
    var ActivityLinkIconAttributes = (function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** No branch icon attributes. */
    var NoBranchIconAttributes = (function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Yes branch icon attributes. */
    var YesBranchIconAttributes = (function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /* Abstract activity tile information. */
    var AbstractActivityTileInformation = (function() {
        function AbstractActivityTileInformation(activityModel, itemId) {
            this.activityModel = activityModel;
            this.itemId = itemId;
        }

        /** Get's the item from the activity model. */
        AbstractActivityTileInformation.prototype.GetItem = function() {
            var item = { attributes: {} };
            if (this.activityModel) {
                item = (typeof (this.itemId) === "undefined")
                    ? this.activityModel.getActiveItem()
                    : this.activityModel.getItem(this.itemId);
            }
            return item;
        };
        /** Gets the dynamic attributes. */
        AbstractActivityTileInformation.prototype.GetDynamicAttributes = function() {
            var item = this.GetItem();
            return this.VirtualGetDynamicAttributes(item.attributes);
        };
        /** Gets the dynamic attributes.
        * @protected
        */
        AbstractActivityTileInformation.prototype.VirtualGetDynamicAttributes = function(defaultAttributes) {
            return defaultAttributes;
        };
        /** GetProperties */
        AbstractActivityTileInformation.prototype.GetProperties = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var EmptyActivityTileInformation = (function(_super) {
        __extends(EmptyActivityTileInformation, _super);

        function EmptyActivityTileInformation() {
            _super.apply(this, arguments);
        }

        EmptyActivityTileInformation.prototype.GetProperties = function() {
            var result = {
                template: '',
                tileImageTemplate: '',
                image: null,
                alt: null,
                tileclass: 'emptyTile',
                tooltipText: "Drag Element Activity",
                emptyTitleText: "Drag Element Here",
                emptyTileTemplate:
                    '<span class="slotTile ellipsis" title="<%- tooltipText %>"><%- emptyTitleText %><span>',
                emptyTileImageTemplate: '',
                activityTypeName: null
            };
            return result;
        };
        return EmptyActivityTileInformation;
    })(GenericWorkflowDesigner.AbstractActivityTileInformation);
    GenericWorkflowDesigner.EmptyActivityTileInformation = EmptyActivityTileInformation;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractActivityTree.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Abstract Class for ActivityTree
    */
    var AbstractActivityTree = (function(_super) {
        __extends(AbstractActivityTree, _super);

        function AbstractActivityTree() {
            _super.apply(this, arguments);
        }

        AbstractActivityTree.prototype.init = function() {};;
        AbstractActivityTree.prototype.render = function(div, scale) {};;
        AbstractActivityTree.prototype.serialize = function() { return; };;
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
(function(GenericWorkflowDesigner) {
    /**
    * Abstract class for Library
    */
    var AbstractLibrary = (function(_super) {
        __extends(AbstractLibrary, _super);

        function AbstractLibrary() {
            _super.apply(this, arguments);
            this.groups = [];
        }

        AbstractLibrary.prototype.init = function() {};;
        AbstractLibrary.prototype.registerLibraryTile = function(libraryGroup, tile) {};;
        AbstractLibrary.prototype.render = function() {};;
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
(function(GenericWorkflowDesigner) {
    /**
    * Abstract class for PropertyPage
    */
    var AbstractPropertyPage = (function(_super) {
        __extends(AbstractPropertyPage, _super);

        function AbstractPropertyPage() {
            _super.apply(this, arguments);
            this.events = {
                "change div": "PropertyChanged"
            };
        }

        Object.defineProperty(AbstractPropertyPage.prototype,
            "Metadata",
            {
                get: function() {
                    return this._metadata;
                },
                set: function(theBar) {
                    this._metadata = theBar;
                },
                enumerable: true,
                configurable: true
            });
        AbstractPropertyPage.prototype.init = function() {};;
        AbstractPropertyPage.prototype.render = function(propertyViewModel) {};;
        AbstractPropertyPage.prototype.isValid = function() { return; };;
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
(function(GenericWorkflowDesigner) {
    /**
     *  Abstract Class for Tiles
     */
    var AbstractTile = (function(_super) {
        __extends(AbstractTile, _super);

        function AbstractTile() {
            _super.apply(this, arguments);
            this.properties = {};
        }

        AbstractTile.prototype.init = function() {};
        AbstractTile.prototype.getTitle = function() { return ""; };;
        AbstractTile.prototype.getFontIconChar = function() { return ""; };;
        AbstractTile.prototype.getPropertyPage = function() { return; };;
        AbstractTile.prototype.addPropertyPage = function(propertyPage) {};;
        AbstractTile.prototype.render = function(renderType) {};;
        AbstractTile.prototype.onError = function(e) {};;
        AbstractTile.prototype.setProperty = function(propertyName, propertyValue) {};;
        AbstractTile.prototype.getPropertyValue = function(propertyName) { return; };;
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
(function(GenericWorkflowDesigner) {
    /**
    * Abstract Class for TreeNode
    */
    var AbstractTreeNode = (function(_super) {
        __extends(AbstractTreeNode, _super);

        function AbstractTreeNode() {
            _super.apply(this, arguments);
        }

        AbstractTreeNode.prototype.render = function(div) {};;
        AbstractTreeNode.prototype.serialize = function(JsonString) {};;
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
(function(GenericWorkflowDesigner) {
    /**
     *  Library class
     */
    var Library = (function(_super) {
        __extends(Library, _super);

        function Library(options) {
            _super.call(this, options);
            this.events = {
                "click div.hitarea": "toggleLibraryGroup"
            };
            this.delegateEvents();
        }

        /** Summary: Registering individual tile with its corresponding group
        * @Param - libraryGroup : group name.
        * @Param - tile : Tile object to be registered with libraryGroup.
        */
        Library.prototype.registerLibraryTile = function(libraryGroup, tile) {
            var tileArrayOfSpecificGroup = [];
            var groupExists = false;
            jQuery.each(this.groups,
                function(key, groupValue) {
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
        };;
        /** Summary: Takes care of rendering each group
        */
        Library.prototype.render = function() {
            this.$el.html('');
            var groups = this.groups;
            var componentsListDiv = $('<div class="componentsListDiv"></div>');
            var mainUl = $('<ul id="componentsList" class="list componentsList"></ul>');
            var elementLabelsArray = [];
            /* Render the search bar */
            var searchComponentDiv =
                $('<span class="search-wrapper-span"><span id= "search-icon" class="CCFSymbolFont SearchButton-symbol search-icon-span" title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '"></span><input id="search-criteria" type="text" name="search" tabindex="' + GenericWorkflowDesigner.Settings.tabIndexValue + '" class="search-input searchPlaceholder" placeholder="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '..." title="' + GenericWorkflowDesigner.Settings.tileInformationFactory.GetLocalizedString("GenericWorkflowDesignerControl_ComponentSearchTooltip") + '"/></span>');
            this.$el.append(searchComponentDiv);
            if (groups == null) {
                return;
            }
            if (groups.length > 0) {
                /* Add the unordered list to the componentsList div */
                $(componentsListDiv).append(mainUl);
                /* Add the componentsList div to the parent */
                this.$el.append(componentsListDiv);
            }
            // Render each group
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                var groupName = group.key;
                var groupNode = $("<li class='listitem'><div class='hitarea' title='" +
                    groupName +
                    "'><span class='CCFSymbolFont ExpandList-symbol expaned-symbol-margin'></span></div><span class='folder ellipsis category' tabindex='" +
                    GenericWorkflowDesigner.Settings.tabIndexValue +
                    "' title='" +
                    groupName +
                    "'aria-label='" +
                    groupName +
                    "'>" +
                    groupName +
                    "</span></li>");
                groupNode.keydown(function(event) {
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
                // Call render() method on individual Tile from current group
                for (var j = 0; j < group.value.length; j++) {
                    var tileObject = group.value[j];
                    var typeId = Library.libraryElementPrefix + tileObject.properties["activitytypeid"];
                    var wrapperLi = $("<li class='subitem' id='" + typeId + "'  tabindex='-1'></li>");
                    $(subUl).append(wrapperLi);
                    wrapperLi.keydown(function(event) {
                        // Down Arrow key press
                        if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 38) ||
                            (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 40)) {
                            event.target.nextSibling.focus();
                        }
                        // Up Arrow key press
                        if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 40) ||
                            (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 38)) {
                            event.target.previousSibling.focus();
                        }
                        // Right Arrow key press
                        if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37) ||
                            (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39)) {
                            event.target.nextSibling.focus();
                        }
                        // Left Arrow key press
                        if ((GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 39) ||
                            (!GenericWorkflowDesigner.Settings.renderRTL && event.keyCode == 37)) {
                            event.target.previousSibling.focus();
                        }
                    });
                    // Setting $el, model and canvas container for each Tile to make it draggable
                    tileObject.$el = $(wrapperLi);
                    var imageRenderTypeValues = GenericWorkflowDesigner.BaseTileInformation
                        .SetImageRenderType(tileObject.properties["imagerendertype"], tileObject.properties["icon"]);
                    tileObject.model = new GenericWorkflowDesigner
                        .LibraryElementModel({
                            Title: tileObject.properties["name"],
                            Tooltip: tileObject.properties["tooltip"],
                            Image: imageRenderTypeValues["image"],
                            DataURI: imageRenderTypeValues["dataUri"],
                            FontIconImage: imageRenderTypeValues["fontIcon"],
                            Alt: tileObject.properties["alttext"],
                            ActivityTypeID: tileObject.properties["activitytypeid"]
                        });
                    tileObject.options.canvasContainer = this.options.canvasContainer;
                    $(wrapperLi).attr("title", tileObject.properties["tooltip"]);
                    elementLabelsArray.push(tileObject.properties["name"]);
                    tileObject.render(GenericWorkflowDesigner.RenderType.LibraryView);
                    // Taking root of workflow to get read only mode
                    var isReadOnly = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot()
                        .getReadonlyMode();
                    if (isReadOnly == true) {
                        $(".componentsListDiv").addClass("disabled-components-div");
                    } else {
                        $(".componentsListDiv").removeClass("disabled-components-div");
                    }
                }
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.libraryTabActivated);
            this.attachEventHandlers();
            this.setAutoCompleteArrayForSearch(elementLabelsArray);
        };;
        /** Summary: Expands/Collapses tiles list on click of corresponding group
        */
        Library.prototype.toggleLibraryGroup = function(event) {
            var elementToToggle = $(event.currentTarget).parent().find('ul');
            var arrowButton = $(event.currentTarget);
            if (elementToToggle.length == 0 || $(arrowButton).length == 0) {
                return;
            }
            if (elementToToggle.css('display') == 'block' || elementToToggle.css('display') == '') {
                elementToToggle.css('display', 'none');
                $(arrowButton).find(".CCFSymbolFont").removeClass("ExpandList-symbol");
                $(arrowButton).find(".CCFSymbolFont").addClass("CollapseList-symbol");
            } else {
                elementToToggle.css('display', 'block');
                $(arrowButton).find(".CCFSymbolFont").addClass("ExpandList-symbol");
                $(arrowButton).find(".CCFSymbolFont").removeClass("CollapseList-symbol");
            }
        };
        /** Summary: Attach event handlers to elements
        */
        Library.prototype.attachEventHandlers = function() {
            /* Start search when user starts typing */
            $("#search-criteria").on("keyup",
                function() {
                    var inputBoxText = $(this).val().toLowerCase();
                    $(".lib-rowLabel").each(function() {
                        var labelText = $(this).text().toLowerCase();
                        $(this).closest('li')[labelText.indexOf(inputBoxText) !== -1 ? 'show' : 'hide']();
                    });
                });
            /* Close autocomplete when search bar focus lost */
            $("#search-criteria").on("focusout",
                function() {
                    $("#search-criteria").autocomplete("close");
                });
            $("#search-criteria").on("keydown",
                function(event) {
                    $(".search-wrapper-span").find("#clearSearch").remove();
                    $(".search-wrapper-span").find(".CCFSymbolFont").addClass("SearchButton-symbol search-icon-span");
                    if (event.keyCode == 13) {
                        $(".search-wrapper-span").find(".CCFSymbolFont")
                            .removeClass("SearchButton-symbol search-icon-span");
                        var clearSearchDiv = $('<span id="clearSearch" class="clear-search-span" tabindex="' +
                            GenericWorkflowDesigner.Settings.tabIndexValue +
                            '" title="' +
                            GenericWorkflowDesigner.Settings.tileInformationFactory
                            .GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") +
                            '"aria-label="' +
                            GenericWorkflowDesigner.Settings.tileInformationFactory
                            .GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") +
                            '">x</span>');
                        $(".search-wrapper-span").append(clearSearchDiv);
                        $("#clearSearch").on("click keypress",
                            function() {
                                $("#search-criteria").autocomplete("close");
                                $("#search-criteria").val("");
                                $(".lib-rowLabel").each(function() {
                                    $(this).closest('li')['show']();
                                });
                                $(".search-wrapper-span").find("#clearSearch").remove();
                                $(".search-wrapper-span").find(".CCFSymbolFont")
                                    .addClass("SearchButton-symbol search-icon-span");
                            });
                    }
                });
            $("#search-icon").on("click keypress",
                function() {
                    var input = $("#search-criteria").val();
                    if (input !== "") {
                        var inputBoxText = $("#search-criteria").val().toLowerCase();
                        $(".lib-rowLabel").each(function() {
                            var labelText = $("#search-criteria").val().toLowerCase();
                            $("#search-criteria")
                                .closest('li')[labelText.indexOf(inputBoxText) !== -1 ? 'show' : 'hide']();
                        });
                        $(".search-wrapper-span").find(".CCFSymbolFont")
                            .removeClass("SearchButton-symbol search-icon-span");
                        var clearSearchDiv = $('<span id="clearSearch" class="clear-search-span" tabindex="' +
                            GenericWorkflowDesigner.Settings.tabIndexValue +
                            '" title="' +
                            GenericWorkflowDesigner.Settings.tileInformationFactory
                            .GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") +
                            '"aria-label="' +
                            GenericWorkflowDesigner.Settings.tileInformationFactory
                            .GetLocalizedString("GenericWorkflowDesignerControl_ClearSearchTooltip") +
                            '">x</span>');
                        $(".search-wrapper-span").append(clearSearchDiv);
                        $("#clearSearch").on("click keypress",
                            function() {
                                $("#search-criteria").autocomplete("close");
                                $("#search-criteria").val("");
                                $(".lib-rowLabel").each(function() {
                                    $(this).closest('li')['show']();
                                });
                                $(".search-wrapper-span").find("#clearSearch").remove();
                                $(".search-wrapper-span").find(".CCFSymbolFont")
                                    .addClass("SearchButton-symbol search-icon-span");
                            });
                    }
                });
        };
        /* Add the Tiles and Actions list for autocomplete */
        Library.prototype.setAutoCompleteArrayForSearch = function(elementLabelsArray) {
            $("#search-criteria").autocomplete({
                source: elementLabelsArray,
                appendTo: ".search-wrapper-span",
                select: function(event, ui) {
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
(function(GenericWorkflowDesigner) {
    /**
     *  MDDPropertyPage class
     */
    var MDDPropertyPage = (function(_super) {
        __extends(MDDPropertyPage, _super);

        function MDDPropertyPage() {
            _super.apply(this, arguments);
        }

        MDDPropertyPage.prototype.discardButtonHandler = function(propertyViewModel) {
            var dialogDetails = {
                dialogTitle: "Default Dialog Title",
                dialogMessage: "Default Dialog Mesaage",
                messageType: 1
            };
            GenericWorkflowDesigner.EventManager
                .publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.showDialog, dialogDetails);
            this.render(propertyViewModel);
        };
        MDDPropertyPage.prototype.saveButtonHandler = function(propertyViewModel) {
            var editedItems = {};
            jQuery.each(this.Metadata,
                function(i, properties) {
                    editedItems[properties.id] = $("#" + properties.id + "").val();
                });
            var temp = editedItems;
            GenericWorkflowDesigner.EventManager
                .publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.updateProperty, editedItems);
        };
        MDDPropertyPage.prototype.render = function(propertyViewModel) {
            var self = this;
            this.$el.html('');
            var mainDiv = $('<div></div>');
            var propertyPageTitleDiv = $("<div><h2>" + this.title + "</h2></div>");
            var propertyPageTag = "";
            this.$el.append(mainDiv);
            $(mainDiv).append(propertyPageTitleDiv);
            jQuery.each(this.Metadata,
                function(i, properties) {
                    var startTag = "<br/><div class='propertyForm ellipsis'>";
                    var htmlControl = GenericWorkflowDesigner.HTMLControlTemplates
                        .getHTMLControl(properties.datatype, properties.id, properties.name);
                    propertyPageTag = propertyPageTag + startTag + htmlControl + "</div>";
                });
            var propertyDataFromControl = propertyViewModel.preparePropertyDetails();
            var propertyPageTemplate = _.template(propertyPageTag);
            $(mainDiv).append(propertyPageTemplate(JSON.parse(propertyDataFromControl)));
            this.$el.find("button[id='saveButton']").on("click",
                function(event) {
                    self.saveButtonHandler(propertyViewModel);
                });
            this.$el.find("button[id='discardButton']").on("click",
                function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Tile class
    */
    var Tile = (function(_super) {
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

        /** Summary: Makes Tile draggable
        */
        Tile.prototype.makeDraggable = function() {
            var self = this;
            var scrollableOptions = {
                step: 20,
                timer: 25,
                scrollTriggerMargin: 180
            };
            var draggableOptions = {
                cursorAt: (GenericWorkflowDesigner.Settings.renderRTL === true)
                    ? { bottom: 0, right: 0 }
                    : { bottom: 0, left: 0 },
                appendTo: 'body',
                containment: 'window',
                // Refresh position is needed to correctly recalculate droppable locations when container is being scrolled. 
                // Otherwise upon scrolling container, hovering over droppable locations will highlight incorrect location.
                refreshPositions: true,
                helper: function() {
                    var helperLibraryElement = new GenericWorkflowDesigner
                        .HelperElementView({ model: self.model, el: self.$el.clone() });
                    var helper = helperLibraryElement.render().$el;
                    $(helper).addClass("dragInProgress");
                    $(helper).children(".categoryInner").addClass("dragInProgress");
                    $(helper).removeAttr("title");
                    $(helper).children(".categoryInner").removeAttr("title");
                    return helper;
                },
                start: function(event, ui) {
                    self.$el.addClass("selected");
                },
                stop: function(event, ui) {
                    self.$el.removeClass("selected");
                }
            };
            var dragDrop = new GenericWorkflowDesigner.ScrollableDragDrop();
            dragDrop.makeDraggable(this.$el, this.options.canvasContainer, draggableOptions, scrollableOptions);
        };
        /** Summary: Sets propery page details of specific Tile type
        * @Param - type : Type of Tile.
        * @Param - propertyPage : Object of AbstractPropertyPage.
        */
        Tile.prototype.addPropertyPage = function(propertyPage) {
            this.PropertyPage = propertyPage;
        };
        /** Summary: Returns propery page details of specific Tile type
        * @Param - type : Type of Tile.
        */
        Tile.prototype.getPropertyPage = function() {
            return this.PropertyPage;
        };
        /** Summary: Sets propery of Tile
        * @Param - propertyName : attribute name of Tile.
        * @Param - propertyValue : attribute value of Tile.
        */
        Tile.prototype.setProperty = function(propertyName, propertyValue) {
            this.properties[propertyName] = propertyValue;
        };;
        /** Summary: Takes care of rendering each Tile
        */
        Tile.prototype.render = function(renderType, context) {
            switch (renderType) {
            case GenericWorkflowDesigner.RenderType.LibraryView:
                // don't make library items draggable in case of read only  mode
                if (!GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot().getReadonlyMode()) {
                    this.makeDraggable();
                }
                this.$el.append(this.libraryTileTemplate(this.model.attributes));
                var type = this.properties["activitytypeid"];
                var activityClass = GenericWorkflowDesigner.BaseTileInformation.tileObjects[type]
                    .properties["tileclass"];
                this.$el.addClass(activityClass);
                this.$el.addClass(Tile.className);
                break;
            case GenericWorkflowDesigner.RenderType.TreeView:
                var tileFactory = new GenericWorkflowDesigner.TileFactoryView({ model: this.model });
                this.$el.addClass(Tile.SlotTileClassName);
                this.$el.html(tileFactory.render(context).el);
                return this;
            case GenericWorkflowDesigner.RenderType.Mini:
                // TODO : Rendering of Tile in mini pane
                break;
            }
        };;
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot generator factory provider. */
    var SlotGeneratorProvider = (function() {
        function SlotGeneratorProvider() {
        }

        /** Create a slot generator factory for the specified slot type.
        @param: The slot type.
        @return: The slot generator factory.
        */
        SlotGeneratorProvider.prototype.createGeneratorFactory = function(slotType) {
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
        /** Generates all slots related to the specified activity.
        @param activity: The activity.
        @return: An array of slots.
        */
        SlotGeneratorProvider.prototype.generateSlotsForActivity = function(activity) {
            var slotTypes = [
                GenericWorkflowDesigner.SlotType.TileHolder, GenericWorkflowDesigner.SlotType.InsertHorizontal,
                GenericWorkflowDesigner.SlotType.IconHolder
            ];
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot icon holder generator factory. */
    var SlotIconHolderGeneratorFactory = (function() {
        function SlotIconHolderGeneratorFactory() {
        }

        /** Creates a slot icon holder generator.
        @param activity: The activity.
        @return: The slot generator.
        */
        SlotIconHolderGeneratorFactory.prototype.createSlotGenerator = function(activity) {
            switch (activity.getActivityTypeID()) {
                //case ActivityType.LANDINGPAGE:
                //    return new LandingPageSlotIconHolderGenerator(activity);
                //case ActivityType.WEBINAR:
                //    return new WebinarSlotIconHolderGenerator(activity);
                //case ActivityType.OFFER:
                //    return new OfferSlotIconHolderGenerator(activity);
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot insert horizontal generator factory. */
    var SlotInsertHorizontalGeneratorFactory = (function() {
        function SlotInsertHorizontalGeneratorFactory() {
        }

        /** Creates a slot insert horizontal generator.
        @param activity: The activity.
        @return: The slot generator.
        */
        SlotInsertHorizontalGeneratorFactory.prototype.createSlotGenerator = function(activity) {
            switch (activity.getActivityTypeID()) {
            case GenericWorkflowDesigner.ActivityType.Empty:
                return new GenericWorkflowDesigner.EmptySlotInsertHorizontalGenerator(activity);
            //case ActivityType.SCHEDULERRESPONSE:
            //    return new SchedulerInsertHorizontalGenerator(activity);
            //case ActivityType.LANDINGPAGE:
            //    return new LandingPageSlotInsertHorizontalGenerator(activity);
            //case ActivityType.OFFER:
            //    return new OfferSlotInsertHorizontalGenerator(activity);
            //case ActivityType.WEBINAR:
            //    return new WebinarSlotInsertHorizontalGenerator(activity);
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot insert vertical generator factory. */
    var SlotInsertVerticalGeneratorFactory = (function() {
        function SlotInsertVerticalGeneratorFactory() {
        }

        /** Creates a slot insert vertical generator.
        @param activity: The activity.
        @return: The slot generator.
        */
        SlotInsertVerticalGeneratorFactory.prototype.createSlotGenerator = function(activity) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot details container placeholder generator factory. */
    var SlotDetailsContainerPlaceholderGeneratorFactory = (function() {
        function SlotDetailsContainerPlaceholderGeneratorFactory() {
        }

        /** Creates a details container placeholder generator.
        @param activity: The activity.
        @return: The slot generator.
        */
        SlotDetailsContainerPlaceholderGeneratorFactory.prototype.createSlotGenerator = function(activity) {
            return new GenericWorkflowDesigner.DefaultSlotDetailsContainerPlaceholderGenerator(activity);
        };
        return SlotDetailsContainerPlaceholderGeneratorFactory;
    })();
    GenericWorkflowDesigner
        .SlotDetailsContainerPlaceholderGeneratorFactory = SlotDetailsContainerPlaceholderGeneratorFactory;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotTileHolderGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot tile holder generator factory. */
    var SlotTileHolderGeneratorFactory = (function() {
        function SlotTileHolderGeneratorFactory() {
        }

        /** Creates a slot tile holder generator.
        @param activity: The activity.
        @return: The slot generator.
        */
        SlotTileHolderGeneratorFactory.prototype.createSlotGenerator = function(activity) {
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
(function(GenericWorkflowDesigner) {
    /** Abstract slot generator. */
    "use strict";
    var AbstractSlotGenerator = (function() {
        function AbstractSlotGenerator(activity) {
            this.activity = activity;
        }

        /** Generates slot.
        @return: A slot view.
        */
        AbstractSlotGenerator.prototype.generateSlot = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot icon holder generator. */
    var DefaultSlotIconHolderGenerator = (function(_super) {
        __extends(DefaultSlotIconHolderGenerator, _super);

        function DefaultSlotIconHolderGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot icon holder view.
        */
        DefaultSlotIconHolderGenerator.prototype.generateSlot = function() {
            var parent = this.activity.getParent();
            if (parent == null) {
                return null;
            }
            //if (parent.getActivityTypeID() == ActivityType.TRIGGER) {
            //    if ((<TriggerActivity>parent).getNoBranch() != this.activity) {
            //        return new SlotIconHolderView({ model: new SlotModel(this.activity, SlotType.IconHolder, SlotIconType.YesBranch) });
            //    }
            //    else {
            //        return new SlotIconHolderView({ model: new SlotModel(this.activity, SlotType.IconHolder, SlotIconType.NoBranch) });
            //    }
            //}
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot insert horizontal generator.*/
    var DefaultSlotInsertHorizontalGenerator = (function(_super) {
        __extends(DefaultSlotInsertHorizontalGenerator, _super);

        function DefaultSlotInsertHorizontalGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot insert horizontal view.
        */
        DefaultSlotInsertHorizontalGenerator.prototype.generateSlot = function() {
            return new GenericWorkflowDesigner
                .InsertSlotHorizontalView({
                    model: new GenericWorkflowDesigner
                        .SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertHorizontal)
                });
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Empty slot insert horizontal generator. */
    var EmptySlotInsertHorizontalGenerator = (function(_super) {
        __extends(EmptySlotInsertHorizontalGenerator, _super);

        function EmptySlotInsertHorizontalGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot insert horizontal view.
        */
        EmptySlotInsertHorizontalGenerator.prototype.generateSlot = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot insert vertical generator. */
    var DefaultSlotInsertVerticalGenerator = (function(_super) {
        __extends(DefaultSlotInsertVerticalGenerator, _super);

        function DefaultSlotInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot insert vertical view.
        */
        DefaultSlotInsertVerticalGenerator.prototype.generateSlot = function() {
            return new GenericWorkflowDesigner
                .InsertSlotVerticalView({
                    model: new GenericWorkflowDesigner
                        .SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertVertical)
                });
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot details container placeholder generator. */
    var DefaultSlotDetailsContainerPlaceholderGenerator = (function(_super) {
        __extends(DefaultSlotDetailsContainerPlaceholderGenerator, _super);

        function DefaultSlotDetailsContainerPlaceholderGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot details container placeholder view.
        */
        DefaultSlotDetailsContainerPlaceholderGenerator.prototype.generateSlot = function() {
            return new GenericWorkflowDesigner
                .SlotDetailsContainerPlaceholderView({
                    model: new GenericWorkflowDesigner
                        .SlotModel(this.activity, GenericWorkflowDesigner.SlotType.DetailsContainerPlaceholder)
                });
        };
        return DefaultSlotDetailsContainerPlaceholderGenerator;
    })(GenericWorkflowDesigner.AbstractSlotGenerator);
    GenericWorkflowDesigner
        .DefaultSlotDetailsContainerPlaceholderGenerator = DefaultSlotDetailsContainerPlaceholderGenerator;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="EmptySlotInsertVerticalGenerator.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Empty slot insert vertical generator. */
    var EmptySlotInsertVerticalGenerator = (function(_super) {
        __extends(EmptySlotInsertVerticalGenerator, _super);

        function EmptySlotInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot insert vertical view.
        */
        EmptySlotInsertVerticalGenerator.prototype.generateSlot = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Scheduler insert vertical generator. */
    var SchedulerInsertVerticalGenerator = (function(_super) {
        __extends(SchedulerInsertVerticalGenerator, _super);

        function SchedulerInsertVerticalGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot insert vertical view.
        */
        SchedulerInsertVerticalGenerator.prototype.generateSlot = function() {
            //if ((<SchedulertActivity>this.activity).isNegativeBranchOfTrigger()) {
            //    return null;
            //}
            return new GenericWorkflowDesigner
                .InsertSlotVerticalView({
                    model: new GenericWorkflowDesigner
                        .SlotModel(this.activity, GenericWorkflowDesigner.SlotType.InsertVertical)
                });
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot tile holder generator. */
    var DefaultSlotTileHolderGenerator = (function(_super) {
        __extends(DefaultSlotTileHolderGenerator, _super);

        function DefaultSlotTileHolderGenerator() {
            _super.apply(this, arguments);
        }

        /** Generates slot.
        @return: A slot tile holder view.
        */
        DefaultSlotTileHolderGenerator.prototype.generateSlot = function() {
            return new GenericWorkflowDesigner
                .SlotTileHolderView({ model: new GenericWorkflowDesigner.SlotModel(this.activity) });
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
(function(GenericWorkflowDesigner) {
    /** Use this object to pass more properties for a method */
    'use strict';
    var ItemRenderingContext = (function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Status options for GenericWorkflowDesigner actions */
    'use strict';
    (function(ActivityValidationStatus) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** View for empty status */
    var EmptyStatusView = (function(_super) {
        __extends(EmptyStatusView, _super);

        function EmptyStatusView() {
            _super.apply(this, arguments);
        }

        /** Renders the view */
        EmptyStatusView.prototype.render = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** View for error status */
    var ErrorStatusView = (function(_super) {
        __extends(ErrorStatusView, _super);

        function ErrorStatusView(activity) {
            _super.call(this);
            this._activity = activity;
        }

        ErrorStatusView.prototype.initialize = function() {
            this._template = _
                .template('<span class="tileError" title=\"<%-errorMessage%>\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span><%-errorMessage%></span>');
            this._notificationFontIcon = "errorNotificationSymbol";
        };
        /** Renders the view */
        ErrorStatusView.prototype.render = function() {
            this.setErrorMessage();
            var html = this._template({
                notificationFontIcon: this._notificationFontIcon,
                errorMessage: this._errorMessage
            });
            this.$el = $(html);
            return this;
        };
        ErrorStatusView.prototype.setErrorMessage = function() {
            var count = this._activity.getErrorCount();
            var message = count > 1
                ? GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_ErrorStatus_Message_Plural")
                : GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_ErrorStatus_Message_Singular");
            var activityTileInfo = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetTileInformationForActivityModel(this._activity);
            var activityProps = activityTileInfo.GetProperties();
            var activityType = (typeof activityProps.activityTypeName != 'undefined' && activityProps.activityTypeName)
                ? activityProps.activityTypeName
                : this._activity.getActivityTypeID();
            // So far we will be showing count of errors only. If warning is to be considered then error message 
            // may be modified. Currently we are doing as per wireframes.
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var ActivityDefinitionCollection = (function(_super) {
        __extends(ActivityDefinitionCollection, _super);

        function ActivityDefinitionCollection() {
            _super.call(this, [], { model: GenericWorkflowDesigner.ActivityDefinitionModel });
        }

        /** Convert the received models to concrete implemenations.*/
        ActivityDefinitionCollection.prototype.parse = function(response) {
            var convertedActivities = [];
            _.each(response,
                function(responseActivity) {
                    var activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                        .convertToConcreteActivityFromJSON(responseActivity);
                    convertedActivities.push(activity);
                });
            return convertedActivities;
        };
        /** Overrides the Backbone sync method that determines how the collection will be synced with server. */
        ActivityDefinitionCollection.prototype.sync = function(method, collection, options) {
            options || (options = {});
            switch (method) {
            case 'read':
            {
                return GenericWorkflowDesigner.Settings.activityDefinitionSyncer
                    .GetActivityDefinitions(collection, options);
            }
            }
        };
        /** Updates the position for all activities */
        ActivityDefinitionCollection.prototype.UpdatePositions = function() {
            var row = 0;
            var startColumn = -1;
            var length = 0, maxLength = 0;
            var UpdatePositionsRecursive = function(root, column) {
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
                    } else {
                        UpdatePositionsRecursive(children[i], column + 1);
                    }
                }
            };
            var root = this.getWorkflowDefinitionRoot();
            UpdatePositionsRecursive(root, startColumn);
        };
        /** Returns the workflow definition as an array of activities.*/
        ActivityDefinitionCollection.prototype.getWorkflowDefinition = function() {
            return this.models;
        };
        /** Returns the root node for the workflow definition.*/
        ActivityDefinitionCollection.prototype.getWorkflowDefinitionRoot = function() {
            var root = null;
            this.models.every(function(activity) {
                if (!activity.getParent()) {
                    root = activity;
                    return false;
                }
                return true;
            });
            return root;
        };
        /** Returns an array of activities that are the leafs of the Workflow. */
        ActivityDefinitionCollection.prototype.getLeaves = function() {
            var leafs = [];
            this.forEach(function(activity) {
                if (activity.isLeaf())
                    leafs.push(activity);
            });
            return leafs;
        };
        /** Returns an array of activities that require subsequent activities generation. */
        ActivityDefinitionCollection.prototype.getActivitiesForSubsequentActivitiesGeneration = function() {
            var result = [];
            this.forEach(function(activity) {
                if (activity.needsSubsequentActivitiesGeneration())
                    result.push(activity);
            });
            return result;
        };
        return ActivityDefinitionCollection;
    })(Backbone.Collection);
    GenericWorkflowDesigner.ActivityDefinitionCollection = ActivityDefinitionCollection;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ActivityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /* Activity model for workflow automation. */
    var ActivityDefinitionModel = (function(_super) {
        __extends(ActivityDefinitionModel, _super);

        function ActivityDefinitionModel(options) {
            _super.call(this, options);
            //Variable that stores the name for all types of tiles
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

        Object.defineProperty(ActivityDefinitionModel.prototype,
            "slots",
            {
                get: function() {
                    return this._slots;
                },
                set: function(slots) {
                    this._slots = slots;
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(ActivityDefinitionModel.prototype,
            "displayName",
            {
                //Get and set Activity Name
                get: function() {
                    return this._displayName;
                },
                set: function(value) {
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
        Object.defineProperty(ActivityDefinitionModel.prototype,
            "isValid",
            {
                /* Get isValid */
                get: function() {
                    return this._isValid;
                },
                /* Set isValid */
                set: function(value) {
                    this._isValid = value;
                    this.trigger("change");
                },
                enumerable: true,
                configurable: true
            });
        /* Gets Validation Mode */
        ActivityDefinitionModel.prototype.getValidationMode = function() {
            return this._validationMode;
        };
        /* Sets Validation Mode */
        ActivityDefinitionModel.prototype.setValidationMode = function(validationMode) {
            this._validationMode = validationMode;
        };
        /* Get all Error Messages in this activity */
        ActivityDefinitionModel.prototype.getErrorMessages = function() {
            return this._errorMessages;
        };
        /* Get all Warning Messages in this activity */
        ActivityDefinitionModel.prototype.getwarningMessages = function() {
            return this._warningMessages;
        };
        /* Add error message */
        ActivityDefinitionModel.prototype.addErrorMessage = function(id, errorMessage) {
            this._errorMessages[id] = errorMessage;
        };
        /* Add warning message */
        ActivityDefinitionModel.prototype.addWarningMessage = function(id, warningMessage) {
            this._warningMessages[id] = warningMessage;
        };
        /* Add multiple errors.
            @param: collection of errors to be added
            Create object of type { [id: string]: string; } which act as dictionary where id(attribute for which error to be inserted) would be key.
            Ex: var _errorMessages: { [id: string]: string } = {};
            _errorMessages["name"] = "Name is mandatory field";
        */
        ActivityDefinitionModel.prototype.addMultipleErrorMessages = function(errors) {
            for (var id in errors) {
                this._errorMessages[id] = errors[id];
            }
        };
        /* Add multiple warnings.
            @param: collection of errors to be added
            Create object of type { [id: string]: string; } which act as dictionary where id(attribute for which error to be inserted) would be key.
            Ex: var _warningMessages: { [id: string]: string } = {};
            _warningMessages["name"] = "Name should be entered";
        */
        ActivityDefinitionModel.prototype.addMultipleWarningMessages = function(warnings) {
            for (var id in warnings) {
                this._warningMessages[id] = warnings[id];
            }
        };
        /* Clear all error messages */
        ActivityDefinitionModel.prototype.clearErrorMessages = function() {
            for (var error in this._errorMessages) {
                delete this._errorMessages[error];
            }
        };
        /* Clear all warning messages.*/
        ActivityDefinitionModel.prototype.clearWarningMessages = function() {
            for (var warning in this._warningMessages) {
                delete this._warningMessages[warning];
            }
        };
        /* Validate activity.  Should be implemented by child class. */
        ActivityDefinitionModel.prototype.validateActivity = function(attributeList) {
            throw new Error(GenericWorkflowDesigner.Exception.NotImplemented);
        };
        ActivityDefinitionModel.prototype.highLight = function() {
            if (!CommonTypes.Types.Object.isNullOrUndefined(this.slots)) {
                this.slots.forEach(function(slot) {
                    slot.highLight();
                });
            }
        };
        /* Get Error count. Should be overriden by child class */
        ActivityDefinitionModel.prototype.getErrorCount = function() {
            return 0;
        };
        /* Get Warning count.  Should be overriden by child class */
        ActivityDefinitionModel.prototype.getWarningCount = function() {
            return 0;
        };
        /* Can be used to refresh the current activity */
        ActivityDefinitionModel.prototype.refreshActivity = function() {
        };
        /** Returns the default properties. */
        ActivityDefinitionModel.prototype.getDefaultProperties = function() {
            return {
                Items: [],
                UI: { Row: 0, Col: 0, readonlyMode: false },
                ActiveItemIndex: 0
            };
        };
        ActivityDefinitionModel.prototype.initialize = function(options) {
            this.setWorkflowID(GenericWorkflowDesigner.workflowOID);
            if ($.isEmptyObject(this.get("Properties"))) {
                var properties = this.getDefaultProperties();
                this.set("Properties", properties);
            }
        };
        /*
        * Should be used to reinitialize the activity after it is created
        * Can be used after an activity is inserted/moved in the activity tree
        */
        ActivityDefinitionModel.prototype.reinitialize = function(activity) {
        };
        ActivityDefinitionModel.prototype.sync = function(method, model, options) {
            options || (options = {});
            switch (method) {
            case 'create':
            {
                return GenericWorkflowDesigner.Settings.activityDefinitionSyncer
                    .CreateActivityDefinition(model, options);
            }
            case 'read':
            {
                return GenericWorkflowDesigner.Settings.activityDefinitionSyncer.GetActivityDefinition(model, options);
            }
            case 'update':
            {
                return GenericWorkflowDesigner.Settings.activityDefinitionSyncer
                    .UpdateActivityDefinition(model, options);
            }
            case 'delete':
            {
                return GenericWorkflowDesigner.Settings.activityDefinitionSyncer
                    .DeleteActivityDefinition(model, options);
            }
            }
        };
        // Setters and getter
        ActivityDefinitionModel.prototype.setValue = function(object, key, value) {
            object[key] = value;
            this.trigger("change");
        };
        ActivityDefinitionModel.prototype.getItemCount = function() {
            return this.get("Properties").Items.length;
        };
        /** Gets the item from activity.
        * @param itemId id of the item to get.
        */
        ActivityDefinitionModel.prototype.getItem = function(itemId) {
            var topItem = this.get("Properties").Items[itemId];
            if (topItem == undefined)
                topItem = { ItemID: null, ActivityTypeID: GenericWorkflowDesigner.ActivityType.Empty };
            return new GenericWorkflowDesigner.ItemModel(topItem);
        };
        /* The item that is active */
        ActivityDefinitionModel.prototype.getActiveItem = function() {
            var index = this.getActiveItemIndex();
            return this.getItem(index);
        };
        /* The item index that is on top of the stack */
        ActivityDefinitionModel.prototype.getTopItemIndex = function() {
            return this.getActiveItemIndex();
        };
        ActivityDefinitionModel.prototype.IsEmpty = function(itemId) {
            var item;
            if (typeof (itemId) === "undefined") {
                item = this.getActiveItem();
            } else {
                item = this.getItem(itemId);
            }
            if (item.attributes['ItemID'] == null) {
                return true;
            }
            return false;
        };
        ActivityDefinitionModel.prototype.setActiveItemProperties = function(properties) {
            var index = this.getActiveItemIndex();
            this.setItemProperties(index, properties);
        };
        ActivityDefinitionModel.prototype.setItemProperties = function(itemIndex, properties) {
            var topItem = this.get("Properties").Items[itemIndex];
            $.extend(topItem, properties);
            this.trigger("change");
            this.refreshDependentTriggers();
        };
        ActivityDefinitionModel.prototype.refreshDependentTriggers = function() {
            if (this.canHaveDependentTriggers()) {
                var allChildActivities = this.getAllChildActivities();
                jQuery.each(allChildActivities,
                    function(index, activity) {
                        //if (activity.getActivityTypeID() == ActivityType.TRIGGER) {
                        //    activity.refreshActivity();
                        //}
                    });
            }
        };
        ActivityDefinitionModel.prototype.canHaveDependentTriggers = function() {
            //if (this instanceof TriggerActivity || this instanceof SchedulertActivity) {
            //    return false;
            //}
            return this.GetTriggerOption().length > 0;
        };
        ActivityDefinitionModel.prototype.setActiveItemIndex = function(index) {
            this.get("Properties").ActiveItemIndex = index;
        };
        ActivityDefinitionModel.prototype.getActiveItemIndex = function() {
            return this.get("Properties").ActiveItemIndex;
        };
        ActivityDefinitionModel.prototype.getValidationStatus = function() {
            var activityStatus = GenericWorkflowDesigner.ActivityValidationStatus.Valid;
            jQuery.each(this.get("Properties").Items,
                function(index, item) {
                    if (item[GenericWorkflowDesigner.ItemKeyProperties.stateKey] != null &&
                        parseInt(item[GenericWorkflowDesigner.ItemKeyProperties.stateKey]) ==
                        GenericWorkflowDesigner.ActivityValidationStatus.Error) {
                        activityStatus = GenericWorkflowDesigner.ActivityValidationStatus.Error;
                        return;
                    }
                });
            return activityStatus;
        };
        ActivityDefinitionModel.prototype.getWorkflowID = function() {
            return this.get("WorkflowID");
        };
        ActivityDefinitionModel.prototype.setWorkflowID = function(value) {
            this.set("WorkflowID", value);
        };
        ActivityDefinitionModel.prototype.getActivityID = function() {
            return this.get("ActivityID");
        };
        ActivityDefinitionModel.prototype.setActivityID = function(value) {
            this.set("ActivityID", value);
        };
        ActivityDefinitionModel.prototype.getParentActivityID = function() {
            return this.get("ParentActivityID");
        };
        ActivityDefinitionModel.prototype.setParentActivityID = function(value) {
            this.set("ParentActivityID", value);
        };
        ActivityDefinitionModel.prototype.getParent = function() {
            return GenericWorkflowDesigner.Settings.workflowTree.getParent(this);
        };
        ActivityDefinitionModel.prototype.getParentBranchID = function() {
            return this.get("ParentBranchID");
        };
        ActivityDefinitionModel.prototype.setParentBranchID = function(value) {
            this.set("ParentBranchID", value);
        };
        ActivityDefinitionModel.prototype.getActivities = function() {
            return GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(this);
        };
        /** Get activities sorted by parentBranchOID */
        ActivityDefinitionModel.prototype.getChildActivitiesSorted = function() {
            return _.sortBy(this.getActivities(),
                function(activity) {
                    return activity.getParentBranchID();
                });
        };
        ActivityDefinitionModel.prototype.getActivityTypeID = function() {
            return this.get("ActivityTypeID");
        };
        ActivityDefinitionModel.prototype.setActivityTypeID = function(activityType) {
            this.set("ActivityTypeID", activityType);
        };
        ActivityDefinitionModel.prototype.getNextActivityID = function() {
            return this.get("NextActivityID");
        };
        ActivityDefinitionModel.prototype.setNextActivityID = function(activityType) {
            this.set("NextActivityID", activityType);
        };
        ActivityDefinitionModel.prototype.getProperties = function() {
            return this.get("Properties");
        };
        ActivityDefinitionModel.prototype.setProperties = function(value) {
            this.set("Properties", value);
        };
        ActivityDefinitionModel.prototype.getRow = function() {
            return parseInt(this.get("Properties").UI.Row);
        };
        ActivityDefinitionModel.prototype.setRow = function(value) {
            this.setValue(this.get("Properties").UI, "Row", value);
        };
        ActivityDefinitionModel.prototype.getCol = function() {
            return parseInt(this.get("Properties").UI.Col);
            //return 8;
        };
        ActivityDefinitionModel.prototype.setCol = function(value) {
            this.setValue(this.get("Properties").UI, "Col", value);
        };
        ActivityDefinitionModel.prototype.getReadonlyMode = function() {
            // Return true only if readonlyMode is set to true, false otherwise (if it is false or undefined)
            var readonlyMode = this.get("Properties").UI.readonlyMode;
            return (/^true$/i).test(readonlyMode);
        };
        ActivityDefinitionModel.prototype.setReadonlyMode = function(value) {
            this.setValue(this.get("Properties").UI, "readonlyMode", value);
        };
        ActivityDefinitionModel.prototype.getIsEditMode = function() {
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
        ActivityDefinitionModel.prototype.setIsEditMode = function(value) {
            this.setActiveItemProperties({ isEditMode: value });
        };
        /** Add a child activity.
        * @param childActivity: The child activity.
        */
        ActivityDefinitionModel.prototype.addChildActivity = function(childActivity) {
            GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(this, childActivity);
        };
        /** Get all child activities.
        */
        ActivityDefinitionModel.prototype.getAllChildActivities = function() {
            return GenericWorkflowDesigner.Settings.workflowTree.getAllChildActivities(this);
        };
        /** Add a new item to the activity.
        * @param activityType: Type of the activity to ad to items.
        */
        ActivityDefinitionModel.prototype.addNewItem = function(activityType) {
            var tile = { ItemID: null, ActivityTypeID: activityType, Title: "Undefined" };
            if (this.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty)
                this.setActivityTypeID(activityType);
            this.get("Properties").Items.push(tile);
            this.setActiveItemIndex(this.getItemCount() - 1);
        };
        /** delete a item to the activity.
        * @param itemIndex: ItemIndex of item to be deleted from activity.
        */
        ActivityDefinitionModel.prototype.deleteItem = function(itemIndex) {
            var activeItemIndex = this.getActiveItemIndex();
            var itemCount = this.getItemCount();
            this.get("Properties").Items.splice(itemIndex, 1);
            // if last item is active item, reduce the active item index by 1 after an item delete
            if (activeItemIndex == (itemCount - 1)) {
                this.setActiveItemIndex(activeItemIndex - 1);
            }
        };
        /**
        * Returns true or false if the activity is a leaf.
        */
        ActivityDefinitionModel.prototype.isLeaf = function() {
            var count = this.getActivities().length;
            return count > 0 ? false : true;
        };
        /**
        * Gets the next parent branch id for this activity.
        */
        ActivityDefinitionModel.prototype.getNextParentBranchID = function() {
            var childrenCount = this.getChildActivitiesSorted().length;
            return childrenCount;
        };
        /**
        * Gets the default leaf.
        */
        ActivityDefinitionModel.prototype.getDefaultLeaf = function() {
            var childActivities = this.getChildActivitiesSorted();
            if (childActivities.length > 0) {
                var firstChild = childActivities[0];
                if (firstChild.isLeaf()) {
                    return firstChild;
                }
            }
            return undefined;
        };
        /** Saves the activity and creates it's subsequent activities.
        Note: The instance that calls this method will not be automatically updated. Use the returned promise to do so.
        @return: promise with the new activity as a parameter.
        */
        ActivityDefinitionModel.prototype.saveActivityWithSubsequentActivities = function() {
            var self = this;
            var deferred = $.Deferred();
            if (self.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty) {
                GenericWorkflowDesigner.Settings.workflowTree.add(self);
                deferred.resolveWith(self, [self]);
            } else {
                self.save().done(function() {
                    GenericWorkflowDesigner.Settings.workflowTree.add(self);
                    self.createSubsequentActivity().done(function() {
                        deferred.resolveWith(self, [self]);
                    });
                });
            };
            return deferred.promise();
        };
        /** Creates a new empty slots as chilren of the given activity.
        * @param parentActivity: The parent activity
        */
        ActivityDefinitionModel.prototype.createSubsequentActivity = function() {
            var self = this;
            var childPromises = [];
            var deferred = $.Deferred();
            var activities = GenericWorkflowDesigner.Settings.subsequentActivityGenerator.createChildActivities(self);
            $(activities).each(function(index, activity) {
                if (activity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Empty) {
                    var promise = activity.saveActivityWithSubsequentActivities();
                    childPromises.push(promise);
                } else {
                    GenericWorkflowDesigner.Settings.workflowTree.add(activity);
                }
            });
            $.when.apply(self, childPromises).done(function() {
                deferred.resolve();
            });
            return deferred.promise();
        };
        ActivityDefinitionModel.prototype.convertToConcreteActivity = function() {
            var currentActivity = this;
            var convertedActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                .convertToConcreteActivity(currentActivity);
            if (GenericWorkflowDesigner.Settings.workflowTree.has(currentActivity)) {
                GenericWorkflowDesigner.Settings.workflowTree.remove(currentActivity);
                GenericWorkflowDesigner.Settings.workflowTree.add(convertedActivity);
            }
            return convertedActivity;
        };
        /** Returns true if the activity can be moved. */
        ActivityDefinitionModel.prototype.canMove = function() {
            return true;
        };
        /** Returns the array of activities that this activity is dependant on. */
        ActivityDefinitionModel.prototype.getDependantActivities = function() {
            var self = this;
            var dependentActivities = [];
            var childActivitiesList = this.getChildActivitiesSorted();
            jQuery.each(childActivitiesList,
                function(index, childActivity) {
                    if (self.isDependentActivity(childActivity.getActivityTypeID())) {
                        dependentActivities.push(childActivity);
                    }
                });
            return dependentActivities;
        };
        /** Gets a clone of relevant activities data (doesn't include its ids) */
        ActivityDefinitionModel.prototype.getCloneOfActivity = function() {
            var newActivity = GenericWorkflowDesigner.Settings.activityDefinitionFactory
                .createActivity(this.getActivityTypeID());
            newActivity.setWorkflowID(this.getWorkflowID());
            newActivity.setParentBranchID(this.getParentBranchID());
            var properties = this.getDefaultProperties();
            properties.Items = this.getProperties().Items;
            newActivity.set("Properties", properties);
            return newActivity;
        };
        ActivityDefinitionModel.prototype.toString = function() {
            var newline = "\n";
            var content = ">> Activity <<" + newline;
            content += "ActivityID : " + this.getActivityID() + newline;
            content += "BranchID : " + this.getParentBranchID() + newline;
            content += "ActivityTypeID : " + this.getActivityTypeID() + newline;
            content += "ParentID : " + this.getParentActivityID() + newline;
            content += "Row :" + this.getRow() + " Col :" + this.getCol() + newline;
            return content;
        };
        /**
        Get trigger options as per activity type.
        */
        ActivityDefinitionModel.prototype.GetTriggerOption = function() {
            var triggerOptions = [];
            jQuery.each(this.getProperties().Items,
                function(index, item) {
                    triggerOptions.push(new GenericWorkflowDesigner.TriggerOption(item.ActivityTypeID, item.ItemID));
                });
            return triggerOptions;
        };
        /*this will return allowed/linked activities for the current activity, so that when moving an activity
        the child will be moved with it        */
        ActivityDefinitionModel.prototype.getAllowedDependentActivityTypes = function(position) {
            return [GenericWorkflowDesigner.ActivityType.All];
        };
        /*checks if current activity is allowed to be  linked  on a parent or a child*/
        ActivityDefinitionModel.prototype.isDependentActivity = function(activityType) {
            var index = $.inArray(activityType,
                this.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical));
            return (index >= 0) ? true : false;
        };
        // checks if current activity belongs to condition branch activity
        ActivityDefinitionModel.prototype.isBranchActivity = function() {
            var currentActivity = this;
            if (currentActivity.getActivityTypeID() == "condition") {
                return true;
            } else if (currentActivity.getParent() == null) {
                return false;
            } else if (currentActivity.getParent().getActivityTypeID() == "condition" &&
                currentActivity.getParentBranchID() != 0) {
                return true;
            } else {
                return this.isParentConditionActivity(currentActivity);
            }
        };
        // Returns true if parent activity is condition, it is for conditional branch activities
        ActivityDefinitionModel.prototype.isParentConditionActivity = function(currentActivity) {
            var parent = currentActivity.getParent();
            if (parent == null) {
                return false;
            } else if (parent.getActivityTypeID() == "condition" && currentActivity.getParentBranchID() != 0) {
                return true;
            } else {
                return this.isParentConditionActivity(parent);
            }
        };
        /**
         * Retrieves the sorted collection of child activities to be cut and assigned to the new parent inserted after the current element.
         */
        ActivityDefinitionModel.prototype.getChildActivitiesToReparentForInsertAfter = function() {
            return this.getChildActivitiesSorted();
        };
        /**
         * Determines whether the current instance of the activity requires subsequent activities generation.
         */
        ActivityDefinitionModel.prototype.needsSubsequentActivitiesGeneration = function() {
            return this.isLeaf();
        };
        /**
        /* This is the list of events that activity definition model supports.
        /* Each event in the list has a name and a fire method that triggers the event.
        /* The fire event has a mandatory first parameter context, from which the event will be triggered.
        */
        ActivityDefinitionModel.supportedEvents = {
            /* Notifies when something has been droped on the Slot */
            select: {
                name: "select",
                trigger: function(context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.select.name;
                    self.trigger(eventName);
                }
            },
            deselect: {
                name: "deselect",
                trigger: function(context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.deselect.name;
                    self.trigger(eventName);
                }
            },
            paste: {
                name: "paste",
                trigger: function(context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.paste.name;
                    self.trigger(eventName);
                }
            },
            dragInProgress: {
                name: "dragInProgress",
                trigger: function(context) {
                    var self = context;
                    var eventName = ActivityDefinitionModel.supportedEvents.dragInProgress.name;
                    self.trigger(eventName);
                }
            },
            stopDragInProgress: {
                name: "stopDragInProgress",
                trigger: function(context) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var Point = (function() {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }

        /** Set x coordinate. */
        Point.prototype.setX = function(value) {
            this.x = value;
        };
        /** Get X coordinate. */
        Point.prototype.getX = function() {
            return this.x;
        };
        /** Set y coordinate. */
        Point.prototype.setY = function(value) {
            this.y = value;
        };
        /** Get x coordinate. */
        Point.prototype.getY = function() {
            return this.y;
        };
        /* String representation of the object*/
        Point.prototype.toString = function() {
            var newline = "\n";
            var content = ">> Point <<" + newline;
            content += "x :" + this.x + " y :" + this.y + newline;
            return content;
        };
        return Point;
    })();
    GenericWorkflowDesigner.Point = Point;
    /** Rectangle represenation */
    var Rectangle = (function() {
        /** Create a new instance of Rectangle
        * @param p1: left top point.
        * @param p2: right bottom point.
        * @param autoAdjusts: If set to true or not specified, it changes the coordinates to ensure that the points forming the rectangle are actually left top and right bottom.
        */
        function Rectangle(p1, p2, autoAdjust) {
            autoAdjust = (autoAdjust != false) ? true : false;
            if (autoAdjust) {
                this.autoAdjustCoordinates(p1, p2);
            } else {
                this.left = p1.getX();
                this.right = p2.getX();
                this.top = p1.getY();
                this.bottom = p2.getY();
            }
            this.height = this.bottom - this.top;
            this.width = this.right - this.left;
        }

        Rectangle.prototype.autoAdjustCoordinates = function(p1, p2) {
            this.left = this.min(p1.getX(), p2.getX());
            this.right = this.max(p1.getX(), p2.getX());
            this.top = this.min(p1.getY(), p2.getY());
            this.bottom = this.max(p1.getY(), p2.getY());
        };
        Rectangle.prototype.min = function(a, b) {
            return (a < b) ? a : b;
        };
        Rectangle.prototype.max = function(a, b) {
            return (a > b) ? a : b;
        };
        /** Get left coordinate. */
        Rectangle.prototype.getLeft = function() {
            return this.left;
        };
        /** Get right coordinate. */
        Rectangle.prototype.getRight = function() {
            return this.right;
        };
        /** Get top coordinate. */
        Rectangle.prototype.getTop = function() {
            return this.top;
        };
        /** Get bottom coordinate. */
        Rectangle.prototype.getBottom = function() {
            return this.bottom;
        };
        /** Get height coordiante. */
        Rectangle.prototype.getHeight = function() {
            return this.height;
        };
        /** Get width coordinate. */
        Rectangle.prototype.getWidth = function() {
            return this.width;
        };
        /** Tests if the point is inside the rectangle bounds horizontaly.*/
        Rectangle.prototype.isPointInsideWidth = function(point) {
            var x = point.getX();
            if (x >= this.getLeft() && x <= this.getRight()) {
                return true;
            }
            return false;
        };
        /** Tests if the point is inside the rectangle bounds vertically.*/
        Rectangle.prototype.isPointInsideHeight = function(point) {
            var y = point.getY();
            if (y >= this.getTop() && y <= this.getBottom()) {
                return true;
            }
            return false;
        };
        /* String representation of the object*/
        Rectangle.prototype.toString = function() {
            var newline = "\n";
            var content = ">>> Rectangle <<<" + newline;
            content += "[(" + this.left + ", " + this.top + "),(" + this.right + ", " + this.bottom + ")]" + newline;
            return content;
        };
        return Rectangle;
    })();
    GenericWorkflowDesigner.Rectangle = Rectangle;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="ItemModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** The item model. */
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Canvas model */
    var LayoutProperties = (function() {
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
            /* Height of the tile minus the stage tile button to place the connector */
            this.tileHeight = 53;
            /* Height of the border between tile button and tile details inside stage tile */
            this.borderHeight = 1;
            /* Height of the connector used to indicate branch conditions */
            this.connectorHeight = 22;
            /* Top margin for the yes branch connector */
            this.connectorMargin = 15;
            /* Offset value to be cleared when a tile is deleted*/
            this.clearOffset = 20;
            //Rendering the MiniMap is based drawing element and scaling it based on Hidden div and drawing viewport based on main canvas.
            // Following constants are based on displaying nos of tile icons inside a viewport with respect to main canvas view.
            // Thease constants need to be changed based on UX input.
            this.miniMapViewPortLeftPadding = 16;
            this.miniMapRatio = 0.10;
            this.workspacePositionX = workspacePosition.left;
            this.workspacePositionY = workspacePosition.top;
        }

        return LayoutProperties;
    })();
    GenericWorkflowDesigner.LayoutProperties = LayoutProperties;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LibraryElementModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** The Library Element Model */
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** The Library Tab Model */
    GenericWorkflowDesigner.LibraryModel = Backbone.Model.extend({
        initialize: function(options) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot Model */
    (function(SlotType) {
        SlotType[SlotType["TileHolder"] = 0] = "TileHolder";
        SlotType[SlotType["InsertHorizontal"] = 1] = "InsertHorizontal";
        SlotType[SlotType["InsertVertical"] = 2] = "InsertVertical";
        SlotType[SlotType["IconHolder"] = 3] = "IconHolder";
        SlotType[SlotType["DetailsContainerPlaceholder"] = 4] = "DetailsContainerPlaceholder";
    })(GenericWorkflowDesigner.SlotType || (GenericWorkflowDesigner.SlotType = {}));
    var SlotType = GenericWorkflowDesigner.SlotType;
    var SlotModel = (function(_super) {
        __extends(SlotModel, _super);

        /** Create a new instance of the SlotModel
        * @param activity: The activity for the slot model.
        * @param type: The activity type for the slot model.
        */
        function SlotModel(activity, type, iconType) {
            _super.call(this);
            this.set("activity", activity);
            this.set("type", (type != undefined) ? type : SlotType.TileHolder);
            this.set("iconType", (iconType != undefined) ? iconType : GenericWorkflowDesigner.SlotIconType.Empty);
        }

        /** Get the activity.
        * @return: Activity
        */
        SlotModel.prototype.getActivity = function() {
            return this.get("activity");
        };
        /** Set the activity.
        * @value: The activity.
        */
        SlotModel.prototype.setActivity = function(value) {
            this.set("activity", value);
        };
        /** Get the activity type.
        * @return: The activity type.
        */
        SlotModel.prototype.getType = function() {
            return this.get("type");
        };
        /** Set the activity type.
        * @value: The activity type.
        */
        SlotModel.prototype.setType = function(value) {
            this.set("type", value);
        };
        /** Get the activity type.
        * @return: The activity type.
        */
        SlotModel.prototype.getIconType = function() {
            return this.get("iconType");
        };
        /** Set the activity type.
        * @value: The activity type.
        */
        SlotModel.prototype.setIconType = function(value) {
            this.set("iconType", value);
        };
        return SlotModel;
    })(Backbone.Model);
    GenericWorkflowDesigner.SlotModel = SlotModel;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="TriggerOption.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    var TriggerOption = (function() {
        /** Create a new instance of the TriggerOption
        * @param activity: The activity.
        */
        function TriggerOption(activityTypeId, itemId) {
            this.activityTypeID = activityTypeId;
            this.itemId = itemId;
        }

        /** Get the activity type.
        * @return: The type ID
        */
        TriggerOption.prototype.getActivityTypeID = function() {
            return this.activityTypeID;
        };
        /** Get the item ID..
        * @return: The item ID.
        */
        TriggerOption.prototype.getItemID = function() {
            return this.itemId;
        };
        return TriggerOption;
    })();
    GenericWorkflowDesigner.TriggerOption = TriggerOption;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="WorkflowEntityDefinitionModel.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Workflow state */
    (function(WorkflowState) {
        WorkflowState[WorkflowState["Disabled"] = 0] = "Disabled";
        WorkflowState[WorkflowState["Active"] = 1] = "Active";
    })(GenericWorkflowDesigner.WorkflowState || (GenericWorkflowDesigner.WorkflowState = {}));
    var WorkflowState = GenericWorkflowDesigner.WorkflowState;
    var WorkflowEntityDefinitionModel = (function(_super) {
        __extends(WorkflowEntityDefinitionModel, _super);

        function WorkflowEntityDefinitionModel() {
            _super.apply(this, arguments);
            this.idAttribute = 'WorkflowID';
        }

        /** Get the workflow id
        * @return: workflow id.
        */
        WorkflowEntityDefinitionModel.prototype.getWorkflowId = function() {
            return this.get("WorkflowID");
        };
        /** Get entity oid.
        * @return: The entity oid.
        */
        WorkflowEntityDefinitionModel.prototype.getEntityOid = function() {
            return this.get("EntityOID");
        };
        /** Get message oid.
        * @return: The oid of the message.
        */
        WorkflowEntityDefinitionModel.prototype.getMessageId = function() {
            return this.get("MessageID");
        };
        /** Get state of the workflow.
        * @return: workflow state.
        */
        WorkflowEntityDefinitionModel.prototype.getState = function() {
            return this.get("State");
        };
        /** Set the workflow state
        * @value: state to set.
        */
        WorkflowEntityDefinitionModel.prototype.setState = function(value) {
            this.set("State", value);
        };
        /** Get workflow type id.
        * @return: workflow type id.
        */
        WorkflowEntityDefinitionModel.prototype.getWorkflowTypeID = function() {
            return this.get("WorkflowTypeID");
        };
        /** Get workflow read only mode.
        * @return: workflow read only mode.
        */
        WorkflowEntityDefinitionModel.prototype.getReadOnlyMode = function() {
            return this.get("ReadOnlyMode");
        };
        /** Synchronizes the model.
        * @method: sync method.
        * @model: the model.
        * @options: options.
        * @returns: promise object.
        */
        WorkflowEntityDefinitionModel.prototype.sync = function(method, model, options) {
            options || (options = {});
            switch (method) {
            case 'read':
            {
                //TODO:
                return GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer.GetWorkflow(model, options);
            }
            case 'update':
            {
                //TODO:
                return GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer
                    .UpdateWorkflowDefinition(model, options);
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** The Empty activity class. */
    var EmptyActivity = (function(_super) {
        __extends(EmptyActivity, _super);

        function EmptyActivity(options) {
            _super.call(this, options);
            this.setActivityTypeID(GenericWorkflowDesigner.ActivityType.Empty);
        }

        EmptyActivity.prototype.IsEmpty = function() {
            return true;
        };
        /** Returns true if the activity can be moved. */
        EmptyActivity.prototype.canMove = function() {
            return false;
        };
        /* Get trigger options for activity */
        EmptyActivity.prototype.GetTriggerOption = function() {
            return [];
        };
        EmptyActivity.prototype.getAllowedDependentActivityTypes = function(slotType) {
            var parent = this.getParent();
            if (!parent) {
                return [];
            }
            return parent.getAllowedDependentActivityTypes(GenericWorkflowDesigner.SlotType.InsertVertical);
        };
        return EmptyActivity;
    })(GenericWorkflowDesigner.ActivityDefinitionModel);
    GenericWorkflowDesigner.EmptyActivity = EmptyActivity;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="AbstractSubsequentSlots.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../genericworkflowcommonreferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /**
    * Abstract subsequent slots class.
    */
    "use strict";
    var AbstractSubsequentActivities = (function() {
        function AbstractSubsequentActivities(parentActivity) {
            this.parentActivity = parentActivity;
        }

        /**
        * Creates  the child slots for the given activity.
        */
        AbstractSubsequentActivities.prototype.createChildActivities = function() {
        };
        /**
        * Creates a slot activity.
        * @param parentId: The parent id.
        * @param activityType: The activity type.
        * @return: The slot activity.
        */
        AbstractSubsequentActivities.prototype.createActivity = function(parentId, activityType) {
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
(function(GenericWorkflowDesigner) {
    /**
    * The default subsequent slots class.
    */
    "use strict";
    var DefaultSubsequentActivities = (function(_super) {
        __extends(DefaultSubsequentActivities, _super);

        function DefaultSubsequentActivities() {
            _super.apply(this, arguments);
            this.getConditionActivityForEmptyDrop = function(activity) {
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
                            } else {
                                finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            }
                            break;
                        case 1:
                            finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            break;
                        case 2:
                            finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            break;
                        };
                        break;
                    case 2:
                        branchID = children[0].getParentBranchID();
                        switch (branchID) {
                        case 0:
                            if (children[0] != activity) {
                                finalActivityID = children[0].getActivityID();
                            } else {
                                if (!finalActivityID)
                                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            }
                            break;
                        case 1:
                            finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                            break;
                        };
                        break;
                    case 3:
                        if (children[0] != activity) {
                            finalActivityID = children[0].getActivityID();
                        } else {
                            if (!finalActivityID)
                                finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                        }
                        break;
                    };
                } else {
                    finalActivityID = this.getConditionActivityForEmptyDrop(parent);
                }
                return finalActivityID;
            };
        }

        /**
        * Creates  the child slots for the given activity.
        @return: The created child activities.
        */
        DefaultSubsequentActivities.prototype.createChildActivities = function() {
            // If activity already has some child activities or is an empty activity skip adding default empty activity
            if (this.parentActivity.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty ||
                this.parentActivity.getActivities().length > 0) {
                return [];
            }
            var parentId = this.parentActivity.getActivityID();
            if (this.parentActivity.getNextActivityID() == null || this.parentActivity.getNextActivityID() == "empty")
                this.parentActivity.setNextActivityID(this.getConditionActivity(this.parentActivity));
            return null;
        };;
        /**
        * Gets the condition activity.
        */
        DefaultSubsequentActivities.prototype.getConditionActivity = function(parent) {
            var finalActivityID = null;
            var myActivities = GenericWorkflowDesigner.Settings.workflowTree.getActivities();
            //finding parent activity of condition activity & then finding the next stageID of it
            if (parent.processStep != null && parent.processStep.nextStageId != null) {
                var nextstageID = parent.processStep.nextStageId;
                myActivities.forEach(function(activity1) {
                    if (nextstageID != null &&
                        activity1.processStep != null &&
                        activity1.processStep.stageId == nextstageID) {
                        finalActivityID = activity1.getActivityID();
                    }
                });
            } else {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    GenericWorkflowDesigner.commonTileInformation = {
        commonTemplate:
            '<span class=\"tileTitle\" title=\"<%- Title %>\"><span class=\"tileTableCell\"><span class=\"tileInner ellipsis\"><%- Title %></span></span></span>',
        defaultEmptyTitleTemplate:
            '<span class="emptyTileTitle ellipsis" title="<%- tooltipText %>"><%- emptyTitleText %><span>',
        defaultTileImageTemplate:
            '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span>',
        defaultEmptyTileImageTemplate:
            '<span class="tileImageWrapper" ><%if(typeof(image) !== "undefined"){%><img class="tileImage" src="<%- image %>" alt="<%- alt %>"></img><%}%><%if(typeof(dataURI) !== "undefined"){%><img class="tileImage" src="data:png;base64,<%- dataURI %>" alt="<%- alt %>"></img><%}%><%if(typeof(fontIconImage) !== "undefined"){%><span class="tileFontIcon CCFSymbolFont <%- fontIconImage %>"></span><%}%></span>'
    };
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// ---------------------------------------------------------------------------------------------
//  <copyright file="BaseTileInformation.ts" company="Microsoft">
//         Copyright (c) Microsoft Corporation.  All rights reserved.
//  </copyright>
// 
//  <summary>
//  Represent the tile information of the activity tree
//  </summary>
// ---------------------------------------------------------------------------------------------
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    ///  <summary>
    ///  Represent the tile information of the activity tree
    ///  </summary>
    var BaseTileInformation = (function(_super) {
        __extends(BaseTileInformation, _super);

        function BaseTileInformation(model, itemId) {
            _super.call(this, model, itemId);
        }

        ///  <summary>
        ///  Gets the tile properties for each type of activity. This properties help in rendering the slot tile
        ///  </summary>
        ///  <returns></returns>
        BaseTileInformation.prototype.GetBasicTileProperties = function() {
            var activityType = this.activityModel.getActivityTypeID();
            var activityTypeAttributes = BaseTileInformation.tileObjects[activityType].properties;
            var imageRenderTypeValues = BaseTileInformation
                .SetImageRenderType(activityTypeAttributes["imagerendertype"], activityTypeAttributes["icon"]);
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
        BaseTileInformation.SetImageRenderType = function(renderType, imagePath) {
            var renderTypeValues = [];
            switch (renderType) {
            case "Image":
                renderTypeValues["image"] = imagePath;
                renderTypeValues["dataUri"] = undefined;
                renderTypeValues["fontIcon"] = undefined;
                break;
            case "DataUri":
                renderTypeValues["image"] = undefined;
                renderTypeValues["dataUri"] = GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetDataUriforImagePath(imagePath);
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var CanvasView = (function(_super) {
        __extends(CanvasView, _super);

        function CanvasView(canvasContainer) {
            _super.call(this, { el: canvasContainer });
            this.viewList = [];
            this.$el.addClass(CanvasView.className);
            this.$el.parent().addClass(CanvasView.className);
            //Settings.workflowTree.setActivityCollection(new ActivityDefinitionCollection());
            this.setupEvents();
            //this.fetchWorkflow();
        }

        /** Sets-up the events. */
        CanvasView.prototype.setupEvents = function() {
            this.$el.on("mousedown",
                function(event) {
                    //Removing all highlights when a click on a canvas
                    $("#canvas").children(".hoverOverDroppable").removeClass("hoverOverDroppable");
                    //Remove placeholders inside See Details view, if any visible after a drop fail
                    $('#sortable').children().remove(".place-holder-listitem");
                    //Remove the add dialog if still visible
                    $("#Add.toolbarItem").trigger("mouseleave");
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.resetToolbar);
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                    event.stopPropagation();
                });
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh,
                this.refreshWorkflowTree,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasFitToScreenEvent,
                this.invokeMiniMapView,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasZoomInEvent,
                this.invokeMiniMapView,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.canvasZoomOutEvent,
                this.invokeMiniMapView,
                this);
        };
        /** Fetches the workflow definition from the server. */
        CanvasView.prototype.fetchWorkflow = function() {
            var self = this;
            //TODO:
            var promise = GenericWorkflowDesigner.Settings.workflowTree
                .fetch(GenericWorkflowDesigner.workflowAssociatedEntityOID,
                    GenericWorkflowDesigner.workflowProviderType);
            promise.done(function() {
                self.render();
            });
        };
        /* Renders the activityCollection on the Workspace*/
        CanvasView.prototype.renderSlots = function(activities) {
            var self = this;
            this.cleanOldViews();
            /* Iterate over every activity of the Workflow Tree */
            jQuery.each(activities,
                function(index, activity) {
                    if (activity.getActivityTypeID() == "bpf_root")
                        return;
                    activity.refreshActivity();
                    var slotsList = GenericWorkflowDesigner.Settings.slotGeneratorProvider
                        .generateSlotsForActivity(activity);
                    activity.slots = slotsList;
                    self.viewList.push(slotsList);
                    /* Iterate over every slot of the current activity */
                    jQuery.each(slotsList,
                        function(slotIndex, slot) {
                            /* Render the current slot */
                            self.$el.append(slot.render().$el);
                            /* Except for Icon Holder slot, add event listeners to all other slots */
                            if (slot.model.getType() != GenericWorkflowDesigner.SlotType.IconHolder) {
                                self.listenTo(slot,
                                    GenericWorkflowDesigner.SlotTileHolderView.supportedEvents.paste.name,
                                    self.refreshWorkflowTree);
                                self.listenTo(slot,
                                    GenericWorkflowDesigner.SlotBase.supportedEvents.dropLibraryElement.name,
                                    self.dropLibraryElementHandler);
                                self.listenTo(slot,
                                    GenericWorkflowDesigner.SlotBase.supportedEvents.dropActivity.name,
                                    self.dropActivityHandler);
                            }
                        });
                });
        };
        CanvasView.prototype.cleanOldViews = function() {
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
        //TODO : Need to change the values calculating in this method after UX inputs
        /*Renders the Mini-Map on the canvas.*/
        CanvasView.prototype.invokeMiniMapView = function(zoomOutViewPort) {
            var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
            var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
            /* Modify the zoomOut Div's CSS to align with the miniMapRatio */
            var tilesActualWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            $(".zoomOut .slot").css("height",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $(".zoomOut .slot").css("width",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            /* Make the Horizontal and Vertical Hit Areas Invisible */
            $(".zoomOut .slotInsertHorizontal").css("height", 0);
            $(".zoomOut .slotInsertHorizontal").css("width", 0);
            $(".zoomOut .slotInsertVertical").css("height", 0);
            $(".zoomOut .slotInsertVertical").css("width", 0);
            /* Make the Slot Icon Holders for Yes and No Branch Invisible */
            $(".zoomOut .slotIconHolder").css("height", 0);
            $(".zoomOut .slotIconHolder").css("width", 0);
            /* Make the Condition Footer Div Invisible */
            $(".zoomOut .condition-footer-div").css("height", 0);
            $(".zoomOut .condition-footer-div").css("width", 0);
            /* Make the Icon Container Invisible */
            $(".zoomOut .iconContainer").css("height", 0);
            $(".zoomOut .iconContainer").css("width", 0);
            $("#zoomoutdiv div.tile span.tileImageWrapper")
                .css("height", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile span.tileImageWrapper")
                .css("width", tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile").css("height",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.tile").css("width",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.stageTile").css("height",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.stageTile").css("width",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.conditionTile").css("height",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $("#zoomoutdiv div.conditionTile").css("width",
                tilesActualWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            var minimap = new GenericWorkflowDesigner.MiniMapView();
            var canvasId = '#' + this.el.parentElement.id;
            /* Select only the Lines and Tiles from Hidden Div, eliminate everything else */
            var selectors = ['.line', '.tileImageWrapper'];
            /* Actual Minimap is rendered here */
            minimap.renderMiniMap(canvasId, selectors, zoomOutViewPort);
            $("#mini-map-wrapper").css("visibility", miniMapWrapperVisibility);
            $("#show-mini-map-div").css("visibility", showMiniMapDivVisibility);
        };
        /*Renders the Workspace.*/
        CanvasView.prototype.render = function() {
            if ($("#canvas").find(".stage-detail-container").length === 0) {
                /* Reset the flag if no Stage Details View is open */
                GenericWorkflowDesigner.Settings.isNewStageAdded = false;
            }
            var zoomOutDiv = document.createElement("canvas");
            var miniMapWrapperVisibility = $("#mini-map-wrapper").css("visibility");
            var showMiniMapDivVisibility = $("#show-mini-map-div").css("visibility");
            var tempZoomInWidth = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var tempZoomInHeight = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var tempZoomInTileHeight = GenericWorkflowDesigner.Settings.layoutProperties.tileHeight;
            var tempZoomInLineWidth = GenericWorkflowDesigner.Settings.layoutProperties.lineWidth;
            var tempZoomInColSpacing = GenericWorkflowDesigner.Settings.layoutProperties.colSpaceing;
            var tempZoomInRowSpacing = GenericWorkflowDesigner.Settings.layoutProperties.rowSpaceing;
            var tempZoomInTopMargin = GenericWorkflowDesigner.Settings.layoutProperties.topMargin;
            for (var i = 0; i < 2; i++) {
                if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                    /* Below logic renders the Canvas tiles in the miniMapRatio. This is done to ensure these values are passed on as it is to the Zoom Out Div */
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .width = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .height = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .tileHeight = tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .lineWidth = tempZoomInLineWidth *
                        GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .colSpaceing = tempZoomInColSpacing *
                        GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio;
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .rowSpaceing = tempZoomInRowSpacing *
                        ((tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) /
                            tempZoomInHeight);
                    GenericWorkflowDesigner.Settings.layoutProperties
                        .topMargin = tempZoomInTopMargin *
                        ((tempZoomInWidth * GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) /
                            tempZoomInHeight);
                    this.$el.addClass("zoomOut");
                } else {
                    /* The actual sizes for the Canvas tiles is mentioned here. These sizes result into the tiles that are finally seen on the Canvas. */
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
                //this.$el.border:1px solid black
                /* Clears all the Canvas child divs */
                this.clean();
                /* Render Canvas Slots - Tiles and other droppable slots */
                /* Duration Iteration #1: The CSS for these slots is not properly applied */
                /* Duration Iteration #2: The CSS for the canvas slots is properly applied */
                this.renderSlots(GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition());
                if (GenericWorkflowDesigner.Settings.isStageDeleted) {
                    /* Re-size Canvas Area based on total area occupied by its Child Divs */
                    // This would get applied to both the Zoom Out and Canvas Divs during Iterations #1 and #2 respectively
                    CanvasView.resizeCanvasAreaBasedOnChildDivArea();
                }
                /* Draw line connectors in between the Tiles, css still not applied */
                /* Duration Iteration #1: Line Connector css not visible */
                /* Duration Iteration #2: Line Connector css properly visible */
                GenericWorkflowDesigner.Settings.graphics.drawTileConnectors(this);
                var self = this;
                $(document).one("ajaxStop",
                    function() {
                        self.$el.data("loadState", "completed");
                        self.$el.trigger("loadCompleted");
                    });
                if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                    GenericWorkflowDesigner.Settings.renderMinimapFlag = false;
                    // Seems like the variable zoomOutDiv is being used anywhere
                    zoomOutDiv.innerHTML = this.el.outerHTML;
                    /* zoomOutDivHTML is effectively a copy of the entire Html of the Canvas Div with all its tiles, slots and connector lines */
                    var zoomOutDivHTML = this.el.outerHTML;
                    /* Remove the existing Zoom Out Div present if any */
                    $('div#zoomoutdiv').remove();
                    /* Rename the id zoomoutdiv present in the zoomOutDivHTML */
                    /* Append this new zoomoutdiv to the canvasWrapper */
                    $('div#canvasWrapper').append(zoomOutDivHTML.replace("\"canvas\"", "\"zoomoutdiv\""));
                    /* zoomOutViewPort is the object that gets passed to the invokeMiniMapView() method */
                    var zoomOutViewPort = $('div#zoomoutdiv')[0];
                }
            }
            $("div#canvasWrapper").css("position", "relative");
            /* Zoom Out Div is originally placed at the bottom left of the Zoom Canvas Wrapper after cloning it from Canvas in iteration #1.
                Now this Zoom Out Div is brought to top left of the Zoom Canvas Wrapper */
            $('div#zoomoutdiv').css("position", "absolute");
            $('div#zoomoutdiv').css("top", "0");
            $('div#zoomoutdiv').css("left", "0");
            /* Make the Zoom Out Div invisible */
            $('div#zoomoutdiv').css("visibility", "hidden");
            /* Trim the Width and Height of the Zoom Out Div, such that it only occupies the necessary space as per miniMapRatio */
            $('div#zoomoutdiv').css("width",
                parseInt($('div#canvasWrapper').width()) *
                GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            $('div#zoomoutdiv').css("height",
                parseInt($('div#canvasWrapper').height()) *
                GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio);
            /* Canvas Zoom Event */
            // This hides the Mini map div
            this.setZoomEvent();
            /* Minimap Zoom Event */
            this.setMiniMapZoomEvent();
            /* Remove the unwanted zoomCanvasWrapper div that got added because of second call to smartZoom() from setMiniMapZoomEvent() */
            var firstZoomCanvasWrapper = $(".zoomCanvasWrapper").first();
            if (firstZoomCanvasWrapper != null) {
                var secondZoomCanvasWrapper = firstZoomCanvasWrapper.next();
                if (secondZoomCanvasWrapper != null && secondZoomCanvasWrapper.children().size() === 0) {
                    /* Remove the unwanted div */
                    secondZoomCanvasWrapper.remove();
                }
            }
            this.$el.parent().scrollLeft(this.scrollLeft);
            this.$el.parent().scrollTop(this.scrollTop);
            // At this point, the Zoom Out Div is at the appropriate place.
            /* Render the Minimap */
            GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
            this.invokeMiniMapView(zoomOutViewPort);
            GenericWorkflowDesigner.Settings.renderMinimapFlag = true;
            this.addZoomIcons();
            $("#mini-map-wrapper").css("visibility", miniMapWrapperVisibility);
            $("#show-mini-map-div").css("visibility", showMiniMapDivVisibility);
            // Trigger mousedown and mouseup event programatically on mini-map to render font icons on it in first load
            $(window).on("load",
                function(event) {
                    $("#mini-map").trigger("mousedown");
                    $("#mini-map").trigger("mouseup");
                });
            return this;
        };
        /* Calculate the the total area occupied by the child divs of the Canvas Div */
        CanvasView.calculateCanvasDivChildArea = function(canvasDivChildren, canvasContentRect) {
            /* Represents the leftmost, rightmost, topmost and the bottommost divs of the Canvas Div */
            var leftmost = { left: 0, item: null };
            var rightmost = { right: 0, item: null };
            var topmost = { top: 0, item: null };
            var bottommost = { bottom: 0, item: null };
            var left = 0;
            var right = 0;
            var top = 0;
            var bottom = 0;
            /* Iterate over each child div of the Canvas Div */
            $(canvasDivChildren).each(function() {
                /* Get all position values of the current Child Div with respect to the Canvas Div*/
                var elementRect = CanvasView.Rect.ofElement(this);
                elementRect = elementRect.relativeTo(canvasContentRect);
                /* Get the left and right values for the current Child Div */
                left = elementRect.left;
                right = elementRect.right;
                if (left < leftmost.left) {
                    /* Assign the left value of the current tile as the leftmost div value*/
                    leftmost.left = left;
                    leftmost.item = this;
                }
                if (right > rightmost.right) {
                    /* Assign the right value of the current tile as the rightmost div value*/
                    rightmost.right = right;
                    rightmost.item = this;
                }
                /* Get the top and bottom values for the current Child Div */
                top = elementRect.top;
                bottom = elementRect.bottom;
                if (top < topmost.top) {
                    /* Assign the top value of the current tile as the topmost div value*/
                    topmost.top = top;
                    topmost.item = this;
                }
                if (bottom > bottommost.bottom) {
                    /* Assign the bottom value of the current tile as the bottommost div value*/
                    bottommost.bottom = bottom;
                    bottommost.item = this;
                }
            });
            /* The difference between the rightmost and the leftmost divs will give us the width of the area occupied by all the children of the Canvas Div */
            var canvasDivChildAreaWidth = rightmost.right - leftmost.left;
            /* The difference between the bottommost and the topmost divs will give us the height of the area occupied by all the children of the Canvas Div */
            var canvasDivChildAreaHeight = bottommost.bottom - topmost.top;
            /* Object that represents the canvas div child area */
            var canvasDivChildArea = {
                canvasDivChildAreaWidth: canvasDivChildAreaWidth,
                canvasDivChildAreaHeight: canvasDivChildAreaHeight
            };
            return canvasDivChildArea;
        };
        /* Re-size Canvas Area based on total area occupied by its Child Divs */
        CanvasView.resizeCanvasAreaBasedOnChildDivArea = function() {
            var canvasDiv = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)[0];
            var canvasDivChildren = $(canvasDiv).children();
            if (canvasDivChildren.length > 0) {
                var canvasContentRect = CanvasView.Rect.ofContent(canvasDiv);
                /* Calculate the total area occupied by the child divs of the Canvas Div */
                var canvasDivChildArea = CanvasView.calculateCanvasDivChildArea(canvasDivChildren, canvasContentRect);
                /* Calculate the width of the total area occupied by the child divs of the Canvas Div */
                var canvasDivChildAreaWidth = canvasDivChildArea.canvasDivChildAreaWidth;
                /* Calculate the height of the total area occupied by the child divs of the Canvas Div */
                var canvasDivChildAreaHeight = canvasDivChildArea.canvasDivChildAreaHeight;
                /* Re-assign the width and height for Canvas Div as per the new area occupied by its child divs */
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width(canvasDivChildAreaWidth + "px");
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).height(canvasDivChildAreaHeight + "px");
            }
        };
        CanvasView.prototype.addZoomIcons = function() {
            var zoomIconHolder = new GenericWorkflowDesigner
                .ZoomIconHolderView($(GenericWorkflowDesigner.zoomIconHolderId));
            zoomIconHolder.render();
        };
        /*Sets up plugin for ZoomIn and ZoomOut changes*/
        CanvasView.prototype.setZoomEvent = function() {
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).css("border", "transparent");
            if (GenericWorkflowDesigner.ZoomConstants.initialCanvasWidth == 0)
                GenericWorkflowDesigner.ZoomConstants
                    .initialCanvasWidth = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width();
            if (GenericWorkflowDesigner.ZoomConstants.initialCanvasHeight == 0)
                GenericWorkflowDesigner.ZoomConstants
                    .initialCanvasHeight = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).height();
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom("destroy");
            /* Re-size Canvas Area based on total area occupied by its Child Divs */
            CanvasView.resizeCanvasAreaBasedOnChildDivArea();
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                .width($("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).get(0).scrollWidth);
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                .height($("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).get(0).scrollHeight);
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
            var scaleToAdd = GenericWorkflowDesigner.ZoomConstants.currentZoomRatio - 1;
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                .smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
        };
        CanvasView.prototype.setMiniMapZoomEvent = function() {
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom("destroy");
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                .width($("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).get(0).scrollWidth);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                .height($("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).get(0).scrollHeight);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
            var scaleToAdd = GenericWorkflowDesigner.ZoomConstants.currentZoomRatio - 1;
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                .smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
        };
        /* Cleans the Workspace by removing all the content.*/
        CanvasView.prototype.clean = function() {
            this.$el.children().remove();
        };
        /* Scroll to the selected tile.
        * @param tileSelector: selector for the selected tile
        */
        CanvasView.prototype.scrollToTile = function(tileSelector) {
            var childItem = this.$el.find(tileSelector);
            if (childItem.length == 0)
                return;
            var slotLeftPosition = parseInt(childItem.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName())
                .replace('px', ''));
            var slotTopPosition = parseInt(childItem.css('top').replace('px', ''));
            var canvasWidth = this.$el.width();
            var canvasHeight = this.$el.height();
            var horizontalOffset = 400;
            var verticleOffset = 80;
            if (slotLeftPosition > canvasWidth) {
                if (GenericWorkflowDesigner.Settings.renderRTL) {
                    this.$el.scrollRight((slotLeftPosition - canvasWidth) + horizontalOffset);
                } else {
                    this.$el.scrollLeft((slotLeftPosition - canvasWidth) + horizontalOffset);
                }
            }
            if (slotTopPosition > canvasHeight) {
                this.$el.scrollTop((slotTopPosition - canvasHeight) + verticleOffset);
            }
        };
        /** Handler for libraryElement droped on a slot of the Workspace
        * @slot: The slot.
        * @libraryElement: The libraryElement.
        */
        CanvasView.prototype.dropLibraryElementHandler = function(slot, libraryElement) {
            var _this = this;
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            var activityDropController = GenericWorkflowDesigner.Settings.activityDropHandlerFactory
                .createDropActivityController(slot.model);
            //TODO:
            activityDropController.dropLibraryElement(libraryElement).done(function(activity) {
                if (activity != undefined) {
                    _this.refreshWorkflowTree();
                    GenericWorkflowDesigner.updateCurrentModel(activity);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.runValidation);
                    var selectedItem = _this.$el.find('.slot.selected');
                    if (selectedItem.length > 0) {
                        GenericWorkflowDesigner.eventManager
                            .trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
                    }
                    GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                    activity.highLight();
                    // Make the Property tab active
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
                }
            });
            stopwatch.stop();
            localStorage.setItem("PerfMarker_" +
                libraryElement.attributes.Title.replace("/", "").replace(/ /g, '') +
                "Drop",
                stopwatch.elapsedMilliseconds.toString());
        };
        /** Handler for activity droped on a slot of the Workspace
        * @slot: The slot.
        */
        CanvasView.prototype.dropActivityHandler = function(slot) {
            var _this = this;
            var extractor = new GenericWorkflowDesigner
                .ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor
                .getConnectedComponentsFromSelection(GenericWorkflowDesigner.Settings.workflowTree
                    .getSelectedActivities());
            var activityDropController = new GenericWorkflowDesigner.ActivityDropController(slot.model);
            activityDropController.dropMultipleComponents(connectedComponents).done(function(activity) {
                GenericWorkflowDesigner.updateCurrentModel(activity);
                GenericWorkflowDesigner.eventManager
                    .trigger(GenericWorkflowDesigner.FrameworkEvents.activityDropped, activity);
                _this.refreshWorkflowTree();
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([activity]);
                activity.highLight();
            });
        };
        /** Refreshes the workspace by adding the subsequent slots and updating the positions */
        CanvasView.prototype.refreshWorkflowTree = function() {
            var _this = this;
            GenericWorkflowDesigner.Settings.workflowTree.createSubsequentActivities().done(function() {
                GenericWorkflowDesigner.Settings.workflowTree.UpdatePositions();
                if ($("#canvas").find(".stage-detail-container").length == 1) {
                    _this.render();
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.propertyMessageReceived);
                } else {
                    _this.render();
                }
                if ($('#canvas').children("div .slot").first().length > 0) {
                    $("#canvas").children("div .slot").first().children("div .tile").children("div .stageTile")
                        .attr("tabindex", GenericWorkflowDesigner.Settings.tabIndexValue);
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.setKeyDownEvents);
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
                }
            });
        };
        /** Draws the lines, connecting the tiles.
 */
        CanvasView.prototype.drawTileConnectors = function() {
            var self = this;
            var workflowDefinition = GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinition();
            $.each(workflowDefinition,
                function(index, activity) {
                    var parentActivity = activity.getParent();
                    if (parentActivity != null &&
                        parentActivity.getActivityTypeID() != GenericWorkflowDesigner.ActivityType.Root) {
                        self.drawConnector(parentActivity, activity);
                    }
                });
        };
        /** Draws the connector between two activities.
        * @param parentActivity: The parent activity.
        * @param childActivity: The child activity.
        */
        CanvasView.prototype.drawConnector = function(parentActivity, childActivity) {
            var _this = this;
            var row1 = parentActivity.getRow();
            var col1 = parentActivity.getCol();
            var row2 = childActivity.getRow();
            var col2 = childActivity.getCol();
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var startPoint = new GenericWorkflowDesigner
                .Point(positionCalculator.computeLeft(col1), positionCalculator.computeTop(row1));
            var endPoint = new GenericWorkflowDesigner
                .Point(positionCalculator.computeLeft(col2), positionCalculator.computeTop(row2));
            var connectorSegments = GenericWorkflowDesigner.Settings.graphics
                .createConnectorDOM(startPoint, endPoint, "line", null);
            $.each(connectorSegments,
                function(index, segment) {
                    _this.$el.append(segment);
                });
        };
        CanvasView.className = "canvas";
        /* References to jquery.fracs library */
        CanvasView.fracs = $.fracs;
        CanvasView.Rect = CanvasView.fracs.Rect;
        return CanvasView;
    })(Backbone.View);
    GenericWorkflowDesigner.CanvasView = CanvasView;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="GoalsView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    var GoalsView = (function(_super) {
        __extends(GoalsView, _super);

        function GoalsView(options) {
            _super.call(this, options);
            GoalsView.className = "goals";
            var self = this;
            this.$el.parent().on("tabsactivate",
                function(event, ui) {
                    self.render();
                });
            this.$el.addClass(GoalsView.className);
        }

        GoalsView.prototype.render = function() {
            var self = this;
            var baseUrl = "#";
            this.$el.html("<div class='goals'><iframe id='goals' style='min-height: 459px'></iframe></div>");
            this.taskFrame = this.$el.find('iframe');
            this.taskFrame.attr('src', baseUrl);
            this.taskFrame.load(function() {
                self.$el.data("loadState", "completed");
                self.$el.trigger("loadCompleted");
            });
            return this.$el;
        };
        return GoalsView;
    })(Backbone.View);
    GenericWorkflowDesigner.GoalsView = GoalsView;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="HelperElementView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /** Helper Element - the view for the dragged element */
    "use strict";
    var HelperElementView = (function(_super) {
        __extends(HelperElementView, _super);

        function HelperElementView(options) {
            _super.call(this, options);
            this.$el.data(HelperElementView.modelDataKey, this.model);
            this.$el.addClass(HelperElementView.className);
        }

        HelperElementView.prototype.render = function() {
            var type = this.model.get("ActivityTypeID");
            var activityClass = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetTileInformationForActivityType(type).GetProperties().tileclass;
            if (!this.$el.hasClass(activityClass)) {
                this.$el.html(GenericWorkflowDesigner.TileFactoryView.getImageTileViewHtml(type));
                var activityClass = GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetTileInformationForActivityType(type).GetProperties().tileclass;
                this.$el.addClass(activityClass);
            }
            return this;
        };
        HelperElementView.className = "helper";
        HelperElementView.modelDataKey = GenericWorkflowDesigner.Library.libraryElementPrefix;
        return HelperElementView;
    })(Backbone.View);
    GenericWorkflowDesigner.HelperElementView = HelperElementView;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="SlotBase.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    /** Slot View is the box rendered on the workspace where we can drop items.*/
    "use strict";
    var SlotBase = (function(_super) {
        __extends(SlotBase, _super);

        function SlotBase() {
            _super.apply(this, arguments);
        }

        SlotBase.prototype.initialize = function() {
            if (!this.model.getActivity().getReadonlyMode()) {
                this.makeDroppable();
            }
        };
        /** Renders the slot */
        SlotBase.prototype.render = function() {};
        SlotBase.prototype.highLight = function() {};
        SlotBase.prototype.getValidDroppables = function() {
            var activity = this.model.getActivity();
            if (!activity) {
                return '';
            }
            activity = GenericWorkflowDesigner.Settings.activityDefinitionFactory.convertToConcreteActivity(activity);
            var droppables = activity.getAllowedDependentActivityTypes(this.model.getType())
                .map(function(activityType) {
                    if (activityType == GenericWorkflowDesigner.ActivityType.All) {
                        var emptyTileClassName = GenericWorkflowDesigner.Settings.tileInformationFactory
                            .GetTileInformationForActivityType(GenericWorkflowDesigner.ActivityType.Empty)
                            .GetProperties().tileclass;
                        return '.' +
                            SlotBase.className +
                            ":not(:has(." +
                            emptyTileClassName +
                            "))" +
                            ", ." +
                            SlotBase.acceptLibraryElement;
                    }
                    var tileClass = '.' +
                        GenericWorkflowDesigner.BaseTileInformation.tileObjects[activityType].properties["tileclass"];
                    return tileClass + ", .slot:has(" + tileClass + ")";
                });
            return droppables.join(", ");
        };;
        /* Make the slot accept dropping of elements. */
        SlotBase.prototype.makeDroppable = function() {
            var self = this;
            $.ui.ddmanager.prepareOffsets = function(t, event) {
                var i,
                    j,
                    m = $.ui.ddmanager.droppables[t.options.scope] || [],
                    type = event ? event.type : null,
                    list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                droppablesLoop: for (i = 0; i < m.length; i++) {
                    //No disabled and non-accepted
                    if (m[i].options
                        .disabled ||
                        (t && !m[i].accept.call(m[i].element[0], (t.currentItem || t.element)))) {
                        continue;
                    }
                    // Filter out elements in the current dragged item
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
                    //Activate the droppable if used directly from draggables
                    if (type === "mousedown") {
                        m[i]._activate.call(m[i], event);
                    }
                    m[i].offset = m[i].element.offset();
                    if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio) {
                        m[i].proportions = {
                            width: m[i].element[0].offsetWidth * GenericWorkflowDesigner.ZoomConstants.currentZoomRatio,
                            height: m[i].element[0].offsetHeight *
                                GenericWorkflowDesigner.ZoomConstants.currentZoomRatio
                        };
                    } else {
                        m[i].proportions = { width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight };
                    }
                }
            };
            this.$el.droppable({
                tolerance: "pointer",
                accept: function(element) {
                    // Ensure that the IsValidDropOnCanvas check is not done for See Details steps drag-drop					
                    if (!element.hasClass("step-list-listitem")) {
                        return GenericWorkflowDesigner.SlotBase.isValidDroppable(this.id, element.attr('id'));
                    } else {
                        return false;
                    }
                },
                activate: function(event, ui) {
                    $(this).addClass("hoverOverDroppable");
                },
                deactivate: function(event, ui) {
                    $(this).removeClass("hoverOverDroppable");
                },
                over: function(event, ui) {
                    $(this).addClass("hoverOverDroppableHighlight");
                },
                out: function(event, ui) {
                    $(this).removeClass("hoverOverDroppableHighlight");
                },
                drop: function(event, ui) {
                    // finidng if there are any overlapping droppables
                    if ($(".hoverOverDroppableHighlight").length > 1) {
                        $(this).removeClass("hoverOverDroppableHighlight");
                        return;
                    }
                    $(this).removeClass("hoverOverDroppableHighlight");
                    var droppedElement = ui.helper.data(GenericWorkflowDesigner.HelperElementView.modelDataKey);
                    if (droppedElement.get("ActivityID") == undefined) {
                        SlotBase.supportedEvents.dropLibraryElement.trigger(self, self, droppedElement);
                    } else {
                        SlotBase.supportedEvents.dropActivity.trigger(self, self, droppedElement);
                    }
                }
            });
        };
        SlotBase.isValidDroppable = function(id, element) {
            var result = true;
            if (GenericWorkflowDesigner.Settings.canvasDragDropValidator != null) {
                var draggedElementId = element;
                var targetElementId = id;
                var isHitArea = (targetElementId.indexOf('_hitarea') > -1 ||
                        targetElementId.indexOf('_verticalhitarea') > -1)
                    ? true
                    : false;
                result = GenericWorkflowDesigner.Settings.canvasDragDropValidator
                    .isValidDropOnCanvas(targetElementId, draggedElementId, isHitArea);
            }
            return result;
        };
        SlotBase.className = "slot";
        SlotBase.acceptLibraryElement = "graphicElement";
        /**
        /* This is the list of events that SlotBase supports.
        /* Each event in the list has a name and a fire method that triggers the event.
        /* The fire event has a mantatory first parameter context, from which the event will be triggered.
        */
        SlotBase.supportedEvents = {
            dropLibraryElement: {
                name: "dropLibraryElement",
                trigger: function(context, slot, dropedLibraryElement) {
                    var self = context;
                    var eventName = SlotBase.supportedEvents.dropLibraryElement.name;
                    self.trigger(eventName, slot, dropedLibraryElement);
                }
            },
            dropActivity: {
                name: "dropActivity",
                trigger: function(context, slot, dropActivity) {
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
(function(GenericWorkflowDesigner) {
    /** Slot View is the box rendered on the workspace where we can drop items.*/
    "use strict";
    var InsertSlotHorizontalView = (function(_super) {
        __extends(InsertSlotHorizontalView, _super);

        function InsertSlotHorizontalView() {
            _super.apply(this, arguments);
        }

        /** Renders the slot */
        InsertSlotHorizontalView.prototype.render = function() {
            this.$el.attr("tabindex", "-1");
            this.$el.attr("title",
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
            this.$el.addClass(InsertSlotHorizontalView.className);
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow());
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol()) +
                width +
                GenericWorkflowDesigner.Settings.layoutProperties.insertSlotHorizontalOffset;
            this.$el.css("top", top + "px");
            // add id to horizontal hit area element
            this.$el.attr("id", this.model.getActivity().id + "_hitarea");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
            this.$el.css("position", "");
            return this;
        };
        InsertSlotHorizontalView.prototype.setupEvents = function() {
            var self = this;
            this.$el.on("mousedown",
                function(event) {
                    // This is to prevent parent from takeing mouse down action.
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
(function(GenericWorkflowDesigner) {
    /** Slot View is the box rendered on the workspace where we can drop items.*/
    "use strict";
    var InsertSlotVerticalView = (function(_super) {
        __extends(InsertSlotVerticalView, _super);

        function InsertSlotVerticalView() {
            _super.apply(this, arguments);
        }

        /** Renders the slot */
        InsertSlotVerticalView.prototype.render = function() {
            this.$el.attr("tabindex", "-1");
            this.$el.attr("title",
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("ProcessDesignerControl_BPF_ScreenReader_AddNewTile"));
            this.$el.addClass(InsertSlotVerticalView.className);
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow()) +
                height +
                GenericWorkflowDesigner.Settings.layoutProperties.insertSlotVerticalOffset;
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol());
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            // add id to vertical hit area element
            this.$el.attr("id", this.model.getActivity().id + "_verticalhitarea");
            //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
            this.$el.css("position", "");
            return this;
        };
        InsertSlotVerticalView.prototype.setupEvents = function() {
            var self = this;
            this.$el.on("mousedown",
                function(event) {
                    // This is to prevent parent from takeing mouse down action.
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Slot Details Container Placeholder View is the div rendered below a Tile to act as a placeholder to ensure the entire Stage Tile can always be seen.*/
    var SlotDetailsContainerPlaceholderView = (function(_super) {
        __extends(SlotDetailsContainerPlaceholderView, _super);

        function SlotDetailsContainerPlaceholderView() {
            _super.apply(this, arguments);
        }

        /** Renders the slot */
        SlotDetailsContainerPlaceholderView.prototype.render = function() {
            this.$el.addClass(SlotDetailsContainerPlaceholderView.className);
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var width = GenericWorkflowDesigner.Settings.layoutProperties.width;
            var height = GenericWorkflowDesigner.Settings.layoutProperties.height;
            var top = positionCalculator.computeTop(this.model.getActivity().getRow()) +
                height +
                GenericWorkflowDesigner.Settings.layoutProperties.insertSlotVerticalOffset;
            var left = positionCalculator.computeLeft(this.model.getActivity().getCol());
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
            this.$el.css("position", "");
            return this;
        };
        SlotDetailsContainerPlaceholderView.prototype.setupEvents = function() {
            var self = this;
            this.$el.on("mousedown",
                function(event) {
                    // This is to prevent parent from taking mouse down action.
                    event.stopPropagation();
                });
        };
        /* slotInsertVertical gives it the dimensions of the Vertical Placeholder Slot, slotDetailsContainerPlaceholder makes it invisible and keeps it behind the Vertical Placeholder Slot */
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
(function(GenericWorkflowDesigner) {
    /** The Loader View - blocks user interaction while waiting for data from server and displays spinner if wait last long */
    "use strict";
    var LoaderView = (function(_super) {
        __extends(LoaderView, _super);

        function LoaderView(loaderContainer) {
            _super.call(this, { el: loaderContainer });
            this.$el.addClass(LoaderView.className);
            var self = this;
            this.$el.hide();
            $(document).ajaxStart(function() {
                    // Show loader that blocks user interaction and display spinner if wait is lasting longer
                    self.$el.show().removeClass(LoaderView.spinnerClassName).delay(1000).queue(function(next) {
                        $(this).addClass(LoaderView.spinnerClassName);
                        next();
                    });
                    //Disable draggable and droppable interactions
                    //$('.ui-droppable').droppable("option", "disabled", true);
                    //$('.ui-draggable').draggable("option", "disabled", true);
                })
                .ajaxStop(function() {
                    self.$el.removeClass(LoaderView.spinnerClassName);
                    self.$el.hide();
                    //$('.ui-droppable').droppable("option", "disabled", false);
                    //$('.ui-draggable').draggable("option", "disabled", false);
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
(function(GenericWorkflowDesigner) {
    /** Property tab view - view for properties */
    var PropertyView = (function(_super) {
        __extends(PropertyView, _super);

        function PropertyView() {
            _super.apply(this, arguments);
        }

        PropertyView.getPropertyViewCurrentModel = function() {
            return PropertyView.propertyViewCurrentModel;
        };
        PropertyView.prototype.initialize = function() {
            var self = this;
            self._visible = false;
            PropertyView.propertyViewCurrentModel = '';
            self.previousPropertyView = null;
            self.$el.parent().tabs({
                beforeActivate: function(event, ui) {
                    if (PropertyView.propertyViewCurrentModel != "") {
                        if (ui.newPanel.attr('id') !== self.$el.attr('id') &&
                            PropertyView.propertyViewCurrentModel.getIsEditMode() &&
                            !self.shouldPropogate()) {
                            event.preventDefault();
                        }
                    }
                },
                activate: function(event, ui) {
                    if (ui.newPanel.attr('id') == self.$el.attr('id')) {
                        self._visible = true;
                        self.refreshView();
                    } else {
                        self._visible = false;
                    }
                }
            });
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.modelUpdated,
                this.refreshView,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.clearPanel,
                this.clearPanel,
                this);
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.updateProperty,
                this.updateProperty,
                this);
        };
        PropertyView.prototype.updateProperty = function(data) {
            Object.keys(data).forEach(function(key) {
                GenericWorkflowDesigner.currentModel[key] = data[key];
            });
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
        };
        PropertyView.prototype.refreshView = function() {
            var self = this;
            if (!this._visible) {
                return;
            }
            if (GenericWorkflowDesigner.currentModel == null) {
                if (PropertyView.propertyViewCurrentModel === null || PropertyView.propertyViewCurrentModel === '') {
                    return;
                }
                if (PropertyView.propertyViewCurrentModel.getIsEditMode() && !this.shouldPropogate()) {
                    return;
                } else if (PropertyView.propertyViewCurrentModel.getActivityTypeID() ==
                    GenericWorkflowDesigner.ActivityType.Empty) {
                    this.$el.append("<span>" +
                        GenericWorkflowDesigner.CrmEncodeDecode
                        .CrmHtmlEncode(GenericWorkflowDesigner.Settings
                            .labelKeyValuePhraseCollection["[NO ACTIVITY SELECTED]"]) +
                        "</span>");
                    PropertyView.propertyViewCurrentModel.setIsEditMode(false);
                    PropertyView.propertyViewCurrentModel = '';
                }
                return;
            }
            if (PropertyView.propertyViewCurrentModel !== null &&
                PropertyView.propertyViewCurrentModel !== '' &&
                PropertyView.propertyViewCurrentModel.getIsEditMode() &&
                !this.shouldPropogate()) {
                GenericWorkflowDesigner.currentModel = PropertyView.propertyViewCurrentModel;
                return;
            }
            if (this.previousPropertyView &&
                this.previousPropertyView instanceof GenericWorkflowDesigner.BasePropertyView) {
                this.previousPropertyView.unloadHandler();
            }
            PropertyView.propertyViewCurrentModel = GenericWorkflowDesigner.currentModel;
            if (this.oldModel == PropertyView.propertyViewCurrentModel) {
                return;
            }
            this.$el.html('');
            var propertyView = GenericWorkflowDesigner.Settings.propertyViewFactory
                .createProperty(GenericWorkflowDesigner.currentModel);
            this.previousPropertyView = propertyView;
            this.oldModel = PropertyView.propertyViewCurrentModel;
            if (propertyView) {
                /* Get the Tile of selected Slot Tile type to fetch its property page details. */
                var requiredProperyPageTile = GenericWorkflowDesigner.BaseTileInformation.tileObjects[PropertyView
                    .propertyViewCurrentModel.getActivityTypeID()];
                var propertyPageToBeRendered;
                if (requiredProperyPageTile && requiredProperyPageTile.getPropertyPage().isMDDPropertyPage) {
                    propertyPageToBeRendered = requiredProperyPageTile.getPropertyPage();
                }
                /* If the property page with isMDDPropertyPage="true" then go with MDD driven property page rendering
                o.w. continue with default rendering. */
                if (propertyPageToBeRendered) {
                    this.$el.append(propertyPageToBeRendered.render(PropertyView.propertyViewCurrentModel));
                } else {
                    this.$el.append(propertyView.render());
                }
            }
        };
        PropertyView.prototype.shouldPropogate = function() {
            var returnPropogattion = true;
            var shouldPropogate = confirm(GenericWorkflowDesigner.Settings
                .labelKeyValuePlainTextPhraseCollection["[CONFIRMATION DIALOGUE BEFORE SAVE]"]);
            if (!shouldPropogate) {
                returnPropogattion = false;
            } else {
                PropertyView.propertyViewCurrentModel.setIsEditMode(false);
            }
            return returnPropogattion;
        };
        //clears the panel and sets the firs tab as active
        PropertyView.prototype.clearPanel = function() {
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
(function(GenericWorkflowDesigner) {
    /**Slot icon holder view.*/
    "use strict";
    var SlotIconHolderView = (function(_super) {
        __extends(SlotIconHolderView, _super);

        function SlotIconHolderView() {
            _super.apply(this, arguments);
        }

        /** Renders the slot */
        SlotIconHolderView.prototype.render = function() {
            this.$el.addClass(SlotIconHolderView.className);
            var positionCalculator = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
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
            //Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
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
(function(GenericWorkflowDesigner) {
    /** Slot View is the box rendered on the workspace where we can drop items.*/
    "use strict";
    var SlotTileHolderView = (function(_super) {
        __extends(SlotTileHolderView, _super);

        function SlotTileHolderView() {
            _super.apply(this, arguments);
            this.selectedClassName = "selected";
            this.dragInProgressClass = "dragInProgress";
        }

        SlotTileHolderView.prototype.initialize = function() {
            this.setupEvents();
            if (!this.model.getActivity().getReadonlyMode()) {
                this.makeDroppable();
                //TODO : Enable drag-drop for condition tiles
                // if (!(this.model.getActivity().getActivityTypeID() == "condition" || this.model.getActivity().getActivityTypeID() == "connect")) {
                if (this.model.getActivity().getActivityTypeID() != "condition" &&
                    this.model.getActivity().getActivityID() !=
                    GenericWorkflowDesigner.Settings.workflowTree.getWorkflowDefinitionRoot().getActivityID()) {
                    this.makeDraggable();
                }
                this.listenTo(this.model.getActivity(),
                    'changeConditionModel',
                    function() {
                        if (this.nameView.model != this.model.getActivity().displayName) {
                            var nameHolder = this.$el.find(".canvasAreaTileTitle2");
                            this.nameView = new GenericWorkflowDesigner
                                .EditableTextControl(this.model.getActivity().displayName,
                                    nameHolder,
                                    this.nameEdited,
                                    this.$el);
                            this.nameView.render();
                        }
                    });
            }
        };
        /** Setup events */
        SlotTileHolderView.prototype.setupEvents = function() {
            var self = this;
            var activity = this.model.getActivity();
            activity.on("sync", this.render, this);
            this.$el.on("click",
                function(event) {
                    $("#canvas").children(".slot.selected").removeClass("selected");
                    event.target.focus();
                    self.tileClickedHandler(event);
                    GenericWorkflowDesigner.eventManager
                        .trigger(GenericWorkflowDesigner.FrameworkEvents.slotTileHolderClick);
                });
            this.$el.on("dblclick",
                function(event) {
                    self.tileDblClickedHandler(event);
                });
            this.$el.on("mousedown",
                function(event) {
                    // This is to prevent parent from takeing mouse down action.
                    event.stopPropagation();
                });
            /* Initializes the context click handler*/
            this.$el.on("contextmenu",
                function(event) {
                    self.tileContextMenuClickHandler(event);
                    return false;
                });
            /** Update selection on click of tile */
            GenericWorkflowDesigner.eventManager.on(GenericWorkflowDesigner.FrameworkEvents.modelUpdated,
                function() {
                    self.modelUpdateHandler(GenericWorkflowDesigner.currentModel);
                },
                this);
            this.listenTo(activity,
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.select.name,
                self.selectHandler);
            this.listenTo(activity,
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.deselect.name,
                self.deSelectHandler);
            this.listenTo(activity,
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.name,
                self.pasteHandler);
            this.listenTo(activity,
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.dragInProgress.name,
                self.dragInProgressHandler);
            this.listenTo(activity,
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.stopDragInProgress.name,
                self.stopDragInProgressHandler);
        };
        /** Remove tile elements from the DOM */
        SlotTileHolderView.prototype.clean = function() {
            this.$el.children().remove();
        };
        /** Renders the slot */
        SlotTileHolderView.prototype.render = function() {
            this.clean();
            if (GenericWorkflowDesigner.currentModel != null &&
                GenericWorkflowDesigner.currentModel.cid == this.model.getActivity().cid) {
                this.$el.addClass(this.selectedClassName);
            }
            var tile = new GenericWorkflowDesigner.Tile({ model: this.model.getActivity() });
            var activityStatus = this.model.getActivity().getValidationStatus();
            var topItemIndex = this.model.getActivity().getTopItemIndex();
            if (GenericWorkflowDesigner.Settings.renderMinimapFlag) {
                GenericWorkflowDesigner.zoomOut = true;
            } else {
                GenericWorkflowDesigner.zoomOut = false;
            }
            var context = new GenericWorkflowDesigner
                .ItemRenderingContext(activityStatus.toString(), topItemIndex, GenericWorkflowDesigner.zoomOut);
            this.$el.append(tile.render(GenericWorkflowDesigner.RenderType.TreeView, context).el);
            if (this.model.getActivity().getItemCount() > 1) {
                this.$el.addClass("multipleItems");
            }
            this.$el.attr("tabindex", "-1");
            this.$el.addClass(SlotTileHolderView.className);
            var calc = new GenericWorkflowDesigner
                .PositionCalculator(GenericWorkflowDesigner.Settings.layoutProperties);
            var top = calc.computeTop(this.model.getActivity().getRow());
            var left = calc.computeLeft(this.model.getActivity().getCol());
            //TODO:calc.computeLeft(this.model.getActivity().getCol());
            this.$el.attr("id", this.model.getActivity().id);
            this.$el.css("top", top + "px");
            this.$el.css(GenericWorkflowDesigner.getLeftAlignmentAttributeName(), left + "px");
            // Fix for IE - the offset writes also a inline position relative on IE which overrides the css style position absolute
            this.$el.css("position", "");
            var nameHolder = this.$el.find(".canvasAreaTileTitle2");
            var name = this.model.getActivity().displayName;
            this.nameView = new GenericWorkflowDesigner
                .EditableTextControl(name,
                    nameHolder,
                    this.nameEdited,
                    this.$el,
                    !this.model.getActivity().getReadonlyMode());
            this.nameView.render();
            return this;
        };
        SlotTileHolderView.prototype.nameEdited = function(title) {
            var data = {
                displayName: title
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateProperty, data);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml);
        };
        /** Model update handler. */
        SlotTileHolderView.prototype.modelUpdateHandler = function(currentModel) {
            var self = this;
            var isEditMode = (self.model.getActivity()).getIsEditMode();
            if (!isEditMode) {
                self.deSelectHandler();
                if (this.model.getActivity() == currentModel && !currentModel.getIsEditMode()) {
                    self.selectHandler();
                }
            }
        };
        SlotTileHolderView.prototype.selectHandler = function() {
            this.$el.addClass(this.selectedClassName);
        };
        SlotTileHolderView.prototype.deSelectHandler = function() {
            this.$el.removeClass(this.selectedClassName);
        };
        SlotTileHolderView.prototype.pasteHandler = function() {
            SlotTileHolderView.supportedEvents.paste.trigger(this);
        };
        SlotTileHolderView.prototype.dragInProgressHandler = function() {
            this.$el.addClass(this.dragInProgressClass);
        };
        SlotTileHolderView.prototype.stopDragInProgressHandler = function() {
            this.$el.removeClass(this.dragInProgressClass);
        };
        SlotTileHolderView.prototype.isTileSelected = function() {
            var selectedTiles = $(this.$el).find('.selected');
            if (selectedTiles.length > 0) {
                return true;
            }
            return false;
        };
        /** Hanlder when a tile is clicked*/
        SlotTileHolderView.prototype.tileClickedHandler = function(event) {
            var activeTab = $(GenericWorkflowDesigner.toolpaneId).tabs('option', 'active');
            var propertyTabIndex = 1;
            var selectedTiles = $(this.$el).find('.selected');
            var isTileSelected = false;
            if (selectedTiles.length > 0) {
                isTileSelected = true;
            }
            //When a tile is active and is clicked again, do nothing
            if (isTileSelected &&
                activeTab == propertyTabIndex &&
                !$(GenericWorkflowDesigner.toolpaneId).find("#stageProperty")) {
                return;
            }
            // Clear other selected tiles
            $(".tileButtonDiv").removeClass("selected");
            $(".stageTile").removeClass("selected");
            $(".conditionTile").removeClass("selected");
            // Select a clicked slot
            if (this.$el.children().find(".conditionTile").length == 1) {
                this.$el.children().find(".conditionTile").addClass("selected");
            }
            if (this.$el.children().find(".stageTile").length == 1) {
                this.$el.children().find(".stageTile").addClass("selected");
            }
            // If stage details is open and step is selected remove the selection
            if ((".stage-detail-container")) {
                $(".step-list-listitem.selected").removeClass("selected");
                $('#DownArrow').attr("aria-disabled", true);
                $('#DownArrow').addClass("disableArrowButton");
                $('#UpArrow').attr("aria-disabled", true);
                $('#UpArrow').addClass("disableArrowButton");
            }
            var clickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createClickHandler(this.model);
            clickHandler.click(this.$el);
            // Set focus on the clicked element
            this.$el.focus();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activatePropertyTab);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            event.stopPropagation();
        };
        /** Hanlder when a tile is double clicked*/
        SlotTileHolderView.prototype.tileDblClickedHandler = function(event) {
            var dblClickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider
                .createDblClickHandler(this.model);
            if (!CommonTypes.Types.Object.isNullOrUndefined(dblClickHandler)) {
                dblClickHandler.dblclick(this.$el);
                event.stopPropagation();
            }
        };
        /* Make the slot draggable. */
        SlotTileHolderView.prototype.makeDraggable = function() {
            var self = this;
            var container;
            var containerEdgeScroller;
            this.$el.draggable({
                cursorAt: (GenericWorkflowDesigner.Settings.renderRTL === true)
                    ? { bottom: 0, right: 0 }
                    : { bottom: 0, left: 0 },
                appendTo: 'body',
                containment: 'window',
                // Refresh position is needed to correctly recalculate droppable locations when container is being scrolled. 
                // Otherwise upon scrolling container, hovering over droppable locations will highlight incorrect location.
                refreshPositions: true,
                helper: function() {
                    // Set the dragged activity as the current model
                    GenericWorkflowDesigner.currentModel = self.model.getActivity();
                    var helperElement = GenericWorkflowDesigner.currentModel
                        ? GenericWorkflowDesigner.Library.libraryElementPrefix +
                        GenericWorkflowDesigner.currentModel.getActivityTypeID()
                        : GenericWorkflowDesigner.Library.libraryElementPrefix;
                    if (helperElement != GenericWorkflowDesigner.Library.libraryElementPrefix &&
                        $('#toolpane').find("#" + helperElement)) {
                        var libraryElement = $('#toolpane').find("#" + helperElement);
                        var helperLibraryElement = new GenericWorkflowDesigner
                            .HelperElementView({ model: self.model.getActivity(), el: $(libraryElement).clone() });
                        var helper = helperLibraryElement.render().$el;
                        $(helper).addClass("dragInProgress");
                        $(helper).children(".categoryInner").addClass("dragInProgress");
                        return helper;
                    } else {
                        var helperLibraryElement = new GenericWorkflowDesigner
                            .HelperElementView({ model: self.model.getActivity(), el: $("<div>") });
                        return helperLibraryElement.render().$el;
                    }
                },
                start: function(e, ui) {
                    self.updateSelectedActivitiesOnDrag();
                    jQuery.each(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities(),
                        function(index, activity) {
                            GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.dragInProgress
                                .trigger(activity);
                        });
                    container = self.$el.parent();
                    containerEdgeScroller = new GenericWorkflowDesigner.ContainerEdgeScroller(container);
                    containerEdgeScroller.initialize();
                },
                drag: function(e, ui) {
                    if (!self.model.getActivity().canMove()) {
                        containerEdgeScroller.stopScrolling();
                        return false;
                    }
                    containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                    return true;
                },
                stop: function(e, ui) {
                    containerEdgeScroller.stopScrolling();
                    jQuery.each(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities(),
                        function(index, activity) {
                            GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.stopDragInProgress
                                .trigger(activity);
                        });
                }
            });
        };
        /** Updates selected activites on click*/
        SlotTileHolderView.prototype.updateSelectedActivitiesOnContextMenuClick = function() {
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
        /**Updates selected activites on drag*/
        SlotTileHolderView.prototype.updateSelectedActivitiesOnDrag = function() {
            var self = this;
            if (!GenericWorkflowDesigner.Settings.workflowTree.isInSelection(self.model.getActivity()) ||
                GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities().length <= 1) {
                var dragHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDragHandler(self.model);
                dragHandler.drag(self.$el);
            }
        };
        /** Hanlder when a tile is right clicked*/
        SlotTileHolderView.prototype.tileContextMenuClickHandler = function(event) {
            this.updateSelectedActivitiesOnContextMenuClick();
            var contextClickHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider
                .createContextHandler(this.model);
            if (contextClickHandler != null) {
                contextClickHandler.click(event);
            }
            event.stopPropagation();
        };
        SlotTileHolderView.prototype.highLight = function() {
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
                trigger: function(context) {
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
(function(GenericWorkflowDesigner) {
    /** The Tile Factory View */
    "use strict";
    var TileFactoryView = (function(_super) {
        __extends(TileFactoryView, _super);

        function TileFactoryView(options) {
            _super.call(this);
            this.model = options.model;
            this.model.on("change", this.renderStatus, this);
        }

        /** Renders the view */
        TileFactoryView.prototype.render = function(context) {
            var activity = this.model;
            var tileInformation = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetTileInformationForActivityModel(activity, context.itemIndex);
            var properties = tileInformation.GetProperties();
            var currentItemAttributes = tileInformation.GetDynamicAttributes();
            var itemType = currentItemAttributes.ActivityTypeID;
            this.$el.html(TileFactoryView.getImageTileViewHtml(itemType, activity.IsEmpty(), currentItemAttributes));
            if (!context.zoom) {
                if (activity.IsEmpty(context.itemIndex)) {
                    var emptyTileDescriptionTemplate = _.template(properties.emptyTileTemplate);
                    this.$el.append(emptyTileDescriptionTemplate(properties));
                } else {
                    var tileDescriptionTemplate = _.template(properties.template);
                    this.$el.append(tileDescriptionTemplate(currentItemAttributes));
                }
            }
            this.$el.attr("id", activity.id);
            this.$el.addClass(properties.tileclass);
            this.renderStatus();
            return this;
        };
        TileFactoryView.prototype.renderStatus = function() {
            var activity = this.model;
            var statusView = GenericWorkflowDesigner.Settings.tileInformationFactory.GetTileStatusView(activity);
            // remove if error is already displayed and we are rerendering it.
            this.$el.find(".tileError").remove();
            this.$el.append(statusView.render().$el);
            // errorTile class will add red border to tile
            if (typeof (activity) != "undefined" && (activity.getErrorCount() != 0 || activity.getWarningCount() != 0)
            ) {
                this.$el.addClass("errorTile");
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateTileTitle);
            } else {
                this.$el.removeClass("errorTile");
            }
        };
        /** Gets the image representation of tile view
        * @param activityType - the activity type of the view
        * @param isEmpty - whether the view should be created for empty tile
        * @param optionalAttributes - optional additional attrbutes to be used
        */
        TileFactoryView.getImageTileViewHtml = function(activityType, isEmpty, optionalAttributes) {
            var tileImageTemplate;
            var properties = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetTileInformationForActivityType(activityType).GetProperties();
            if (typeof (isEmpty) === "undefined" || isEmpty) {
                tileImageTemplate = _.template(properties.emptyTileImageTemplate);
            } else {
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
(function(GenericWorkflowDesigner) {
    /** The Tile View */
    "use strict";
    var TileView = (function(_super) {
        __extends(TileView, _super);

        function TileView(options) {
            _super.call(this, options);
            this.$el.addClass(TileView.className);
        }

        /** Renders the tile
        * @param context - properties to know how to render the model
        */
        TileView.prototype.render = function(context) {
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
(function(GenericWorkflowDesigner) {
    /** The WorkflowStateView View */
    'use strict';
    var WorkflowStateView = (function(_super) {
        __extends(WorkflowStateView, _super);

        /** The WrokflowStateView constructor
        * @WorkflowStateViewContext: WorkflowStateViewContext wrapper class
        */
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

        /** Initializes the view */
        WorkflowStateView.prototype.initialize = function() {
            var self = this;
            self.updating = true;
            this.model = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            this.model.fetch({
                reset: true,
                data: {
                    EntityID: GenericWorkflowDesigner.workflowAssociatedEntityOID,
                    WorkflowProviderType: GenericWorkflowDesigner.workflowProviderType
                }
            }).done(function() {
                self.attachEvents(self);
                self.updateControl(self);
            }).always(function() {
                self.updating = false;
            });
        };
        WorkflowStateView.prototype.attachEvents = function(context) {
            context || (context = this);
            context.$el.click(function() {
                context.handleClick(context);
            });
        };
        WorkflowStateView.prototype.handleClick = function(context) {
            context || (context = this);
            if (context.updating == true) {
                return;
            }
            context.updating = true;
            var stateToSet = context.model.getState() == GenericWorkflowDesigner.WorkflowState.Disabled
                ? GenericWorkflowDesigner.WorkflowState.Active
                : GenericWorkflowDesigner.WorkflowState.Disabled;
            context.model.setState(stateToSet);
            context.model.save().done(function() {
                context.updateControl(context);
                if (context.model.getState() == GenericWorkflowDesigner.WorkflowState.Disabled) {
                    context.workspaceModeController.deactivateWorklow();
                } else {
                    context.workspaceModeController.activateWorkflow();
                }
                var messageId = context.model.getMessageId();
                if (messageId) {
                    var errorMessage = GenericWorkflowDesigner
                        .decodeText(GenericWorkflowDesigner.Settings.statusMessageResolver
                            .ResolveMessage(messageId.toString()));
                    alert(errorMessage);
                }
            }).always(function() {
                context.updating = false;
            });
        };
        WorkflowStateView.prototype.updateControl = function(context) {
            context || (context = this);
            var currentState = context.model.getState();
            var imageWrapper = $("." + context.imageWrapperClassName, context.$el);
            var labelWrapper = $("." + context.labelWrapperClassName, context.$el);
            var classToAdd = currentState == GenericWorkflowDesigner.WorkflowState.Disabled ? "activate" : "deactivate";
            var classToRemove = currentState == GenericWorkflowDesigner.WorkflowState.Disabled
                ? "deactivate"
                : "activate";
            var labelToSet;
            var toolTipToSet;
            if (currentState == GenericWorkflowDesigner.WorkflowState.Disabled) {
                labelToSet = GenericWorkflowDesigner.Settings.labelKeyValuePlainTextPhraseCollection["[ACTIVATE]"];
                toolTipToSet = this.activateButtonToolTipToSet;
            } else {
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
(function(GenericWorkflowDesigner) {
    /** The WorkflowStateViewContext View */
    'use strict';
    var WorkflowStateViewContext = (function(_super) {
        __extends(WorkflowStateViewContext, _super);

        /** The WorkflowStateViewContext constructor
        */
        function WorkflowStateViewContext(workspaceModeController,
            imageWrapperClassName,
            labelWrapperClassName,
            workflowAssociatedEntityOID,
            workFlowActivateButtonToolTip,
            workFlowDeActivateButtonToolTip,
            options) {
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
(function(GenericWorkflowDesigner) {
    /** Workflow validate button */
    'use strict';
    var WorkflowValidateButton = (function() {
        /** The WorkflowValidateButton constructor
        * @workspaceModeController: the workspace mode controller
        * @workflowAssociatedEntityOID: associated entity id
        * @validateButtonElement: dom element representing the validate button
        */
        function WorkflowValidateButton(workspaceModeController, workflowAssociatedEntityOID, validateButtonElement) {
            this.updating = false;
            this.workflowAssociatedEntityOID = workflowAssociatedEntityOID;
            this.workspaceModeController = workspaceModeController;
            this.validateButtonElement = validateButtonElement;
            this.initialize();
        }

        /** Initializes the component */
        WorkflowValidateButton.prototype.initialize = function() {
            this.workspaceModeController.registerWorkflowValidateButton(this);
            this.attachEvents();
        };
        WorkflowValidateButton.prototype.attachEvents = function(context) {
            context || (context = this);
            context.validateButtonElement.click(function() {
                context.handleClick(context);
            });
        };
        WorkflowValidateButton.prototype.handleClick = function(context) {
            context || (context = this);
            if (context.updating == true) {
                return;
            }
            context.updating = true;
            var workflowEntityDefinition = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
            var validatedWorkflow = null;
            var requestOptions = {
                success: function(result) {
                    validatedWorkflow = new GenericWorkflowDesigner.WorkflowEntityDefinitionModel();
                    validatedWorkflow.set(result);
                }
            };
            var promise = workflowEntityDefinition.fetch({
                reset: true,
                data: {
                    entityId: context.workflowAssociatedEntityOID,
                    WorkflowProviderType: GenericWorkflowDesigner.workflowProviderType
                }
            });
            promise.done(function() {
                var validationPromise = GenericWorkflowDesigner.Settings.workflowEntityDefinitionSyncer
                    .ValidateWorkflow(workflowEntityDefinition, requestOptions);
                validationPromise.done(function() {
                    if (!validatedWorkflow) {
                        return;
                    }
                    context.workspaceModeController.validateWorkflow();
                });
                validationPromise.always(function() {
                    context.resetUpdatingState(context);
                });
            });
            promise.always(function() {
                context.resetUpdatingState(context);
            });
        };
        WorkflowValidateButton.prototype.resetUpdatingState = function(context) {
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
(function(GenericWorkflowDesigner) {
    /** Base Property View */
    "use strict";
    var BasePropertyView = (function(_super) {
        __extends(BasePropertyView, _super);

        function BasePropertyView() {
            _super.apply(this, arguments);
            this.propertyFrame = null;
            this.btnNewId = "linkNew";
            this.btnEditId = "linkExpand";
            this.btnSelectId = "btnSelect";
        }

        /*
        * @return true if the property page should be rendered inline within the control
        * @return false if the property page should be rendered in an iframe
        */
        BasePropertyView.prototype.isInlinePropertyPage = function() {
            return true;
        };
        /*
        * @param activeItem - Active model
        * @return Property page URL
        * @inheriting property view class from this class should provide the page URL
        */
        BasePropertyView.prototype.getPropertyPageUrl = function(activeItem) {
            throw new Error("Property page URL is not set!");
        };
        /*
        * @return name of the property page container element
        */
        BasePropertyView.prototype.getContainerElementName = function() {
            return 'activityProperty';
        };
        /*
        * @return css classname of the property page container element
        */
        BasePropertyView.prototype.getClassName = function() {
            return '';
        };
        BasePropertyView.prototype.getLoader = function() {
            var loaderHtml = "<img id='loadingImage' src='images/ajax-loader.gif' />";
            return loaderHtml;
        };
        BasePropertyView.prototype.loadPropertyPage = function() {
            //Unsubscribe to the previous updatePropertyHtml event
            GenericWorkflowDesigner.EventManager
                .unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml);
            var propertyPageUrl = this.getPropertyPageUrl(this.model.getActiveItem());
            var htmlData = "";
            var self = this;
            var div = $('<div/>',
            {
                id: self.getContainerElementName()
            });
            div.appendTo(this.$el);
            if (!CommonTypes.Types.Object.isNullOrUndefined(BasePropertyView.propertyPageCache[propertyPageUrl])) {
                htmlData = BasePropertyView.propertyPageCache[propertyPageUrl];
                div.html(htmlData);
                this.loadHandler.bind(this);
            } else {
                div.load(propertyPageUrl + "?rnd=" + new Date().format("yyyyMMddHHmmsssss"),
                    function(data) {
                        BasePropertyView.propertyPageCache[propertyPageUrl] = data;
                        self.loadHandler.bind(self);
                    });
            }
            // Subscribe to a new Update Propery Page event
            GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updatePropertyHtml,
                function() {
                    BasePropertyView.updateHtmlElements();
                },
                null);
        };
        /** Render property view. */
        BasePropertyView.prototype.render = function() {
            var self = this;
            self.$el.addClass(self.getClassName());
            var activeItem = this.model.getActiveItem();
            if (this.isInlinePropertyPage()) {
                this.loadPropertyPage();
            } else {
                $('<iframe/>',
                    {
                        id: self.getContainerElementName(),
                        src: self.getPropertyPageUrl(activeItem)
                    }).appendTo(this.$el)
                    .load(this.loadHandler.bind(self));
            }
            this.propertyFrame = self.$el.find('#' + self.getContainerElementName());
            this.propertyFrame.attr('width', '100%');
            return this.$el;
        };
        /** Gets the properties set in the PropertyView.
        @return: properties
        */
        BasePropertyView.prototype.getUpdatedProperties = function() {
            throw new Error("Method getUpdatedProperties is not implemented");
        };
        /** PropertyView select handler. */
        BasePropertyView.prototype.selectClickHandler = function() {
            var self = this;
            if (self.model.getReadonlyMode()) {
                GenericWorkflowDesigner.alertLabelKeyValue("WARNING READONLY MODE");
                return;
            }
            var properties = self.getUpdatedProperties();
            self.model.setActiveItemProperties(properties);
            self.model.save();
        };
        /** PropertyView load handler. */
        BasePropertyView.prototype.loadHandler = function() {
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
                    btnNew.click(function() {
                        self.newClickHandler(activeItem);
                    });
                }
                if (!btnEdit.attr("disabled")) {
                    btnEdit.click(function() {
                        self.editClickHandler(activeItem, activeItemIndex);
                    });
                }
                btnSelect.click(function() {
                    self.selectClickHandler();
                });
            }
        };
        /** optional dialog content callback to close the expandview.
        @param dialogContent: The dialog content of expandview.
        @return: true : when expandview renders a subpage(socialMedia)
                 false : When expandview renders a completepage
        */
        BasePropertyView.prototype.dialogContentCallback = function(dialogContent) {
            return false;
        };
        /** PropertyView new click handler.
        @param activeItem: The active item.
        */
        BasePropertyView.prototype.newClickHandler = function(activeItem) {
            var _this = this;
            var id = '';
            var expandCallback = function() {
                _this.propertyFrame.attr('src', _this.getPropertyPageUrl(activeItem));
            };
            var optionalExpandCallback = function(dialogContent) { return _this.dialogContentCallback(dialogContent); };
            //var slidingDialog = new Dialogs.SlidingDialog();
            //var slidingDialogActivityType = GenericWorkflowDesigner.prepareActivityTypeForSlidingDialog(activeItem.get('ActivityTypeID'));
            //var slidingDialogContext = this.getSlidingDialogContext();
            //var newLink = Dialogs.SlidingDialogEditorUrlProvider.generateLink(slidingDialogActivityType, id, slidingDialogContext);
            //slidingDialog.openUrl(newLink, expandCallback, optionalExpandCallback);
            return false;
        };
        /** Gets the properties for extendView.
        @return: properties
        */
        BasePropertyView.prototype.getEntityProperties = function() {
            return { mainEntity: "", subMainEntity: "" };
        };
        /** Gets the refreshUrl for extendView.
        @return: url
        */
        BasePropertyView.prototype.buildRefreshUrl = function(propertyHolder, activeItem) {
            var self = this;
            return self.getPropertyPageUrl(activeItem) + "?id=" + propertyHolder.mainEntity;
        };
        /** get the main entity properties(ItemID)
        @return: properties
        */
        BasePropertyView.prototype.getMainEntityProperties = function(propertyHolder) {
            return { ItemID: propertyHolder.mainEntity };
        };
        /** PropertyView edit handler.
        @param activeItem: The active item.
        */
        BasePropertyView.prototype.editClickHandler = function(activeItem, activeItemIndex) {
            var self = this;
            var propertyHolder = self.getEntityProperties();
            var activityTypeId = activeItem.get('ActivityTypeID');
            return false;
        };
        /** Processes the closing of the property view.
        */
        BasePropertyView.prototype.unloadHandler = function() {
        };
        BasePropertyView.checkPropertyViewModified = function(event) {
            if (BasePropertyView.inPromptState) {
                GenericWorkflowDesigner.CapturingEvents
                    .removeCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea,
                        [event.type],
                        BasePropertyView.checkPropertyViewModified);
            } else {
                //If the keydown event is not enter, don't do anything 
                if (event.type == "keydown" && event.keyCode != 13) {
                    return;
                }
                var container = $("#property"); //TODO: abmitt property Tab div
                var isTargetOutside = !container.is(event.target) &&
                    (container.has(event.target).length === 0); // and is not a descendant of the container
                if (isTargetOutside) {
                    if (BasePropertyView.isPropertyViewModified && BasePropertyView.isPropertyViewModified(event)) {
                        event.stopImmediatePropagation();
                        BasePropertyView.inPromptState = true;
                        var yescallback = function() {
                            if (BasePropertyView.yesCallBack)
                                BasePropertyView.yesCallBack();
                            GenericWorkflowDesigner.CapturingEvents
                                .addCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea,
                                    ["click", "mousedown", "mouseup", "keydown"],
                                    BasePropertyView.checkPropertyViewModified);
                            BasePropertyView.inPromptState = false; //reset in prompt state
                        };
                        var nocallback = function() {
                            GenericWorkflowDesigner.CapturingEvents
                                .addCapturingEvent(GenericWorkflowDesigner.BasePropertyView.outsideArea,
                                    ["click", "mousedown", "mouseup", "keydown"],
                                    BasePropertyView.checkPropertyViewModified);
                            BasePropertyView.inPromptState = false; //reset in prompt state
                        };
                        //show dialog box 
                        BasePropertyView.showPropertiesModifiedDialog(yescallback, nocallback);
                    } else {
                        BasePropertyView.resetPrompt();
                    }
                }
            }
        };
        BasePropertyView.resetPrompt = function() {
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
        BasePropertyView.showPropertiesModifiedDialog = function(yescallback, nocallback) {
            //Default Prompt
            var dialogDetails = {
                dialogTitle: "You have unsaved changes",
                dialogMessage: "Do you want to apply changes you just made?",
                confirmButtonLabel: "Apply",
                cancelButtonLabel: "Cancel",
                yesCallbackAction: yescallback,
                noCallbackAction: nocallback
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog,
                dialogDetails);
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
/* Global References */
/// <reference path="../CommonHelper/commontypes.ts" />
/// <reference path="../CommonHelper/CommonReferences.ts" />
/// <reference path="../CommonHelper/ExpressionBuilderCommonReferences.ts" />
/* References for GenericWorkflowDesigner */
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
(function(GenericWorkflowDesigner) {
    var LookupState;
    (function(LookupState) {
        LookupState[LookupState["search"] = 0] = "search";
        LookupState[LookupState["results"] = 1] = "results";
    })(LookupState || (LookupState = {}));
    "use strict";
    var LookupControl = (function(_super) {
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

        LookupControl.prototype.getState = function() {
            return this._state;
        };
        LookupControl.prototype.setState = function(state) {
            this._state = state;
        };
        LookupControl.prototype.setSelectedItem = function(selectedItem) {
            this._model.setSelectedItem(selectedItem);
            this.render();
        };
        LookupControl.prototype.setFocusToLookupElement = function() {
            $(".searchBar.selectedItem.borderedContainer.selected-search-width").focus();
        };
        LookupControl.prototype.getSelectedItem = function() {
            return this._model.getSelectedItem();
        };
        LookupControl.prototype.initialize = function() {
            this.setupEvents();
        };
        LookupControl.prototype.setupEvents = function() {
            var self = this;
            $(document).on('click',
                function() {
                    if (self._state == LookupState.results) {
                        self._state = LookupState.search;
                        self.render();
                    }
                });
        };
        LookupControl.prototype.lookupRecords = function(lookupStirng) {
            var self = this;
            var newSpinner = new GenericWorkflowDesigner.LoadSpinnerItem("#lookupIcon", 16);
            newSpinner.render();
            this._lookupText = (CommonTypes.Types.Object.isNullOrUndefined(lookupStirng)) ? "" : lookupStirng;
            this._context.lookupRecords(lookupStirng,
                function(lookupItems) {
                    self.lookupRecordsCallback(lookupItems);
                });
        };
        LookupControl.prototype.lookupMoreRecords = function() {
            var self = this;
            this._context.lookupMoreRecords(function(lookupItem) {
                self.lookupMoreRecordsCallback(lookupItem);
            });
        };
        LookupControl.prototype.lookupMoreRecordsCallback = function(lookupItem) {
            this.setSelectedItem(lookupItem);
            this.setFocusToLookupElement();
        };
        LookupControl.prototype.lookupRecordsCallback = function(lookupItems) {
            this._state = LookupState.results;
            this._model.setResults(lookupItems);
            this.render();
        };
        LookupControl.prototype.render = function() {
            this.$el.empty();
            this.$el.append('<div id="lookupControlDummydiv"></div>');
            var lookupSearchBarView = new
                LookupSearchBarView(this.$el.find('#lookupControlDummydiv'),
                    this._model.getSelectedItem(),
                    this._lookupText,
                    this);
            lookupSearchBarView.render();
            if (this._state == LookupState.results) {
                var resultsView = new LookupResultsView(this.$el.find('#lookupControlDummydiv'),
                    this._model.getResults(),
                    this);
                resultsView.render();
            }
        };
        return LookupControl;
    })(Backbone.View);
    GenericWorkflowDesigner.LookupControl = LookupControl;
    var LookupSearchBarView = (function(_super) {
        __extends(LookupSearchBarView, _super);

        function LookupSearchBarView(container, selectedItem, lookupText, parentView) {
            _super.call(this, { el: container });
            this._selectedItem = selectedItem;
            this._parentView = parentView;
            this._lookupText = lookupText;
        }

        LookupSearchBarView.prototype.getSelectedItem = function() {
            return this._selectedItem;
        };
        LookupSearchBarView.prototype.setSelectedItem = function(selectedItem) {
            this._selectedItem = selectedItem;
        };
        LookupSearchBarView.prototype.initialize = function() {
            this.setupEvents();
        };
        LookupSearchBarView.prototype.setupEvents = function() {
            var self = this;
            $('#lookupControlDummydiv').on('click',
                '#lookupImg',
                function(event) {
                    var lookupString = self.$el.find('#lookupInput').val();
                    self._parentView.lookupRecords(lookupString);
                    return false;
                });
            $('#lookupControlDummydiv').on('keypress',
                '#lookupInput',
                function(event) {
                    if (event.keyCode == 13) {
                        self._parentView.lookupMoreRecords();
                    }
                });
            $('#lookupControlDummydiv').on('click',
                '#lookupInput',
                function(event) {
                    $('#lookupInput').focus();
                });
            $('#lookupControlDummydiv').on('click',
                '.selectedItemLabel',
                function(event) {
                    window.open(self._selectedItem.getUrl());
                    return false;
                });
            $('#lookupControlDummydiv').on('keypress',
                '.selectedItem',
                function(event) {
                    self._parentView.setState(LookupState.search);
                    self._parentView.setSelectedItem(null);
                    self._parentView.render();
                    $('#lookupInput').val("");
                    $('#lookupInput').focus();
                });
            $('#lookupControlDummydiv').on('keyup',
                '.selectedItem',
                function(event) {
                    if (event.keyCode == 8) {
                        self._parentView.setState(LookupState.search);
                        self._parentView.setSelectedItem(null);
                        self._parentView.render();
                        $('#lookupInput').val("");
                        $('#lookupInput').focus();
                    }
                });
            $('#lookupControlDummydiv').on('keypress',
                '.selectedItem',
                function(event) {
                    if (event.keyCode == 13) {
                        self._parentView.lookupMoreRecords();
                    }
                });
        };
        LookupSearchBarView.prototype.render = function() {
            var searchBarSelectedTemplate = _
                .template('<div class="searchBar selectedItem borderedContainer selected-search-width" tabindex="0">' +
                    '<div id="selectedItemLabel" class="selectedItemLabel"> <%- SelectedItemName %> </div>' +
                    '</div>');
            var searchBarSelected = '<input id="lookupInput" class="searchBar lookup-input" value="' +
                GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(this._lookupText) +
                '"></input>';
            if (!CommonTypes.Types.Object.isNullOrUndefined(this._selectedItem)) {
                var selectedItemName = this._selectedItem.getName();
                var selectedItemImage = this._selectedItem.getImage();
                var selectedItemUrl = this._selectedItem.getUrl();
                searchBarSelected =
                    searchBarSelectedTemplate({
                        SelectedItemImage: selectedItemImage,
                        SelectedItemName: selectedItemName
                    });
            }
            var searchWorkFlowAdd = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("ProcessDesignerControl_BPF_Tooltip_Search_Workflow_Add");
            var searchBarTemplate = _.template('<div id="lookupSearchBar" class="lookupSearchBar">' +
                '<table cellspacing= "0" class="lookup-table"> ' +
                '<tbody> <tr>' +
                '<td>' +
                searchBarSelected +
                '</td>' +
                '<td id="lookupIcon"><span id="lookupImg" class="CCFSymbolFont SearchButton-symbol search-icon-span" title="' +
                searchWorkFlowAdd +
                '"></span></td> ' +
                '</tr></tbody> <table></div>');
            this.$el.append(searchBarTemplate());
        };
        return LookupSearchBarView;
    })(Backbone.View);
    GenericWorkflowDesigner.LookupSearchBarView = LookupSearchBarView;
    var LookupResultsView = (function(_super) {
        __extends(LookupResultsView, _super);

        function LookupResultsView(container, results, parentView) {
            _super.call(this, { el: container });
            this._lookupResults = results;
            this._parentView = parentView;
        }

        LookupResultsView.prototype.getLookupResults = function() {
            return this._lookupResults;
        };
        LookupResultsView.prototype.setLookupResults = function(lookupResults) {
            this._lookupResults = lookupResults;
        };
        LookupResultsView.prototype.initialize = function() {
            this.setupEvents();
        };
        LookupResultsView.prototype.setupEvents = function() {
            var self = this;
            $('#lookupControlDummydiv').on('blur',
                '#lookupResults',
                function() {
                    if (self._parentView.getState() == LookupState.results) {
                        self._parentView.setState(LookupState.search);
                        self._parentView.render();
                    }
                });
            $('#lookupControlDummydiv').on('click',
                '#lookupResults .lookupItem',
                function() {
                    if (!isNaN(parseInt($(this).attr('index')))) {
                        self._parentView.setSelectedItem(self._lookupResults[parseInt($(this).attr('index'))]);
                    }
                });
            $('#lookupControlDummydiv').on('click',
                '#lookupResults .moreRecords',
                function() {
                    self._parentView.lookupMoreRecords();
                });
        };
        LookupResultsView.prototype.renderResults = function() {
            var resultsContainer = this.$el.find('#resultsContainer');
            var resultItems = "";
            $.each(this._lookupResults,
                function(index, lookupItem) {
                    var lookupItemName = lookupItem.getName();
                    var lookupItemImage = lookupItem.getImage();
                    var lookupItemUrl = lookupItem.getUrl();
                    var lookupClass = "\"CCFSymbolFont " + lookupItemImage + " lookupItemImage-size\"";
                    var lookupItemHtml = '<li class="lookupItem" index="' +
                        index +
                        '">' +
                        '<div class="searchBar">' +
                        '<span class=\"lookupItemImageWrapper \"><span class=' +
                        lookupClass +
                        '></span></span>' +
                        '<div id="selectedItemLabel" class="lookupItemLabel">' +
                        GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(lookupItemName) +
                        '</div>' +
                        '</div>' +
                        '</li>';
                    resultItems += lookupItemHtml;
                });
            resultItems += this.getLookupMoreRecords();
            var listHtml = '<ul style="list-style:none; padding:0; margin:0; border:none;">' + resultItems + '</ul>';
            resultsContainer.append(listHtml);
        };
        LookupResultsView.prototype.getLookupMoreRecords = function() {
            var morerecordsHtml = '<li class="moreRecords lookupItem">' +
                '<div class="searchBar">' +
                '<div id="selectedItemLabel" style="padding-left:20px">' +
                LOCID_LOOKMORERECORDS_AMBIGUOUS +
                '</div>' +
                '</div>' +
                '</li>';
            return morerecordsHtml;
        };
        LookupResultsView.prototype.render = function() {
            var resultsCount = this._lookupResults.length;
            var localizedStringToBeDisplayed = (resultsCount == 1)
                ? LOCID_INLINELOOKUP_RESULT
                : LOCID_INLINELOOKUP_RESULTS;
            var resultsHtml = '<div id="lookupResults" class="lookupResults borderedContainer prop-lookup-result">' +
                '<div id= "resultsContainer" class="resultsContainer prop-results-container" > </div>' +
                '<div id="resultsFooter" class="resultsFooter prop-results-footer">' +
                resultsCount +
                ' ' +
                localizedStringToBeDisplayed +
                '</div >' +
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
(function(GenericWorkflowDesigner) {
    "use strict";
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="LookupItem.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="../../Framework/GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    "use strict";
    var LookupItem = (function() {
        function LookupItem(id, name, url, image) {
            this._id = id;
            this._name = name;
            this._url = url;
            this._image = image;
        }

        LookupItem.prototype.getId = function() {
            return this._id;
        };
        LookupItem.prototype.setId = function(id) {
            this._id = id;
        };
        LookupItem.prototype.getName = function() {
            return this._name;
        };
        LookupItem.prototype.setName = function(name) {
            this._name = name;
        };
        LookupItem.prototype.getUrl = function() {
            return this._url;
        };
        LookupItem.prototype.setUrl = function(url) {
            this._url = url;
        };
        LookupItem.prototype.getImage = function() {
            return this._image;
        };
        LookupItem.prototype.setImage = function(image) {
            this._image = image;
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var LookupControlModel = (function() {
        function LookupControlModel() {
        }

        LookupControlModel.prototype.getSelectedItem = function() {
            return this._selectedItem;
        };
        LookupControlModel.prototype.setSelectedItem = function(selectedItem) {
            this._selectedItem = selectedItem;
        };
        LookupControlModel.prototype.getResults = function() {
            return this._results;
        };
        LookupControlModel.prototype.setResults = function(results) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var EditMode;
    (function(EditMode) {
        EditMode[EditMode["Read"] = 0] = "Read";
        EditMode[EditMode["Edit"] = 1] = "Edit";
    })(EditMode || (EditMode = {}));
    var EditableTextControl = (function(_super) {
        __extends(EditableTextControl, _super);

        function EditableTextControl(model, el, editDoneCallback, parent, editableFlag) {
            if (editableFlag === void 0) {
                editableFlag = true;
            }
            _super.call(this,
            {
                model: model,
                el: el,
            });
            this.state = EditMode.Read;
            this.editableFlag = editableFlag;
            this.parent = parent;
            this.editDoneCallback = editDoneCallback;
        }

        EditableTextControl.prototype.initialize = function() {
            this.$el.attr("tabindex", "-1");
            this.editableTextTemplate = _
                .template("<label class=\"no-editing truncateString\" style=\"display:block\"><%- textShown %></label> <input maxlength=\"100\" class=\"edit\" value=\"<%- textShown %>\" style=\"display:none\" onfocus=\"this.value = this.value;\">");
        };
        EditableTextControl.prototype.setupEvents = function() {
            var self = this;
            if (this.eventsSetUp)
                return;
            this.eventsSetUp = true;
            this.$el.find('label').on("dblclick",
                function(event) {
                    self.openEditMode(event);
                    event.stopPropagation();
                });
            this.$el.find('.edit').on("click",
                function(event) {
                    event.stopPropagation();
                });
            this.$el.find('.edit').on("focus",
                function(event) {
                    var self = this;
                    setTimeout(function() { self.selectionStart = self.selectionEnd = 10000; }, 0);
                });
            this.$el.find('.edit').on("mousedown",
                function(event) {
                    event.stopPropagation();
                });
            this.$el.find('.edit').on("focusout blur",
                function() {
                    self.closeEditMode();
                });
            this.$el.find('.edit').on("keyup",
                function(event) {
                    event.stopPropagation();
                    self.updateOnEnter(event);
                });
        };
        EditableTextControl.prototype.render = function() {
            this.$el.html(this.editableTextTemplate({ textShown: this.model }));
            if (this.editableFlag) {
                this.input = this.$('.edit');
                this.setupEvents();
                return this;
            }
        };
        EditableTextControl.prototype.close = function() {
            this.remove();
        };
        EditableTextControl.prototype.openEditMode = function(event) {
            if (this.state == EditMode.Edit) {
                return;
            }
            var self = this;
            this.state = EditMode.Edit;
            this.$el.find('label').css("display", "none");
            this.$el.find('.edit').css("display", "block");
            $("#mini-map").on("click",
                function(event) {
                    self.closeEditMode();
                });
            GenericWorkflowDesigner.EventManager.subscribe(GenericWorkflowDesigner.FrameworkEvents.updateModel,
                function(newModel) {
                    if (newModel != GenericWorkflowDesigner.currentModel)
                        self.closeEditMode();
                },
                null);
            this.input.focus();
        };
        EditableTextControl.prototype.closeEditMode = function() {
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
            //this.render();                      //Use this if the view is not rendered in editDoneCallback()
            $("#mini-map").off("click");
            GenericWorkflowDesigner.EventManager
                .unsubscribeWithoutCallback(GenericWorkflowDesigner.FrameworkEvents.updateModel);
        };
        EditableTextControl.prototype.updateOnEnter = function(e) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var ActivityDeleteHandler = (function() {
        function ActivityDeleteHandler() {
            this.dialogMessageTypes = {
                Information: 0,
                Warning: 1,
                Error: 2
            };
        }

        /**
         * Refresh the canvas and clear all selected activities
         */
        ActivityDeleteHandler.prototype.canvasRefreshUtil = function() {
            GenericWorkflowDesigner.updateCurrentModel(null);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.clearPanel);
        };
        /**
         * Core functionality to delete selected activities.
         *@return list of all deleted activities.
         */
        ActivityDeleteHandler.prototype.deleteSelectedActivitiesCore = function() {
            var targetActivites = GenericWorkflowDesigner.Settings.workflowTree
                .getSelectedActivities(); //Activities going to be deleted
            var connectedComponents = GenericWorkflowDesigner.Settings.workflowTree.getConnectedComponents();
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.hideContextMenus);
            GenericWorkflowDesigner.ContextFlyoutContent.prototype.removeComponentsFromWorkflowTree(connectedComponents)
                .done(function() {
                    jQuery.each(connectedComponents,
                        function(indexComponent, component) {
                            jQuery.each(component.getNodes(),
                                function(indexNode, node) {
                                    GenericWorkflowDesigner.Settings.workflowTree.remove(node);
                                });
                        });
                });
            return targetActivites;
        };
        /**
         * Select all subsequent nodes after a clicked node.
         * @param activity
         */
        ActivityDeleteHandler.prototype.selectEntireBranchAfterNode = function(activity) {
            var _this = GenericWorkflowDesigner.ActivityDeleteHandler.prototype;
            GenericWorkflowDesigner.currentModel = activity;
            if (activity) {
                var selectedActivities = _this.getAllSubsequentActivities(activity);
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(selectedActivities);
            } else {
                GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities([]);
            }
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.modelUpdated);
        };
        /**
         * DFS to return all the subsequent activities.
         * @assumption : Assume there is no merge of branches
         * @param activity
         * @devNote : Need to be modified to support merging scenario
         */
        ActivityDeleteHandler.prototype.getAllSubsequentActivities = function(activity) {
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
        /**
         * Delete entire branch given a BPFCondition node
         * @param activity
         */
        ActivityDeleteHandler.prototype.deleteBranch = function(activity) {
            var _this = GenericWorkflowDesigner.ActivityDeleteHandler.prototype;
            var childActivities = GenericWorkflowDesigner.Settings.workflowTree.getChildActivities(activity);
            var parent = GenericWorkflowDesigner.Settings.workflowTree.getParent(activity);
            var deletableChildren = [];
            var targetActivities = [];
            var defaultAndYesBranches = activity.getYesBranches();
            var defaultBranch = defaultAndYesBranches[0]; //Branch which should be there after deletion
            deletableChildren.push(activity.getNoBranch()); // Branch to be deleted.
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
            //push current Condition Node to target activity because it also need to be deleted
            targetActivities.push(activity);
            GenericWorkflowDesigner.Settings.workflowTree.setSelectedActivities(targetActivities);
            //Redefine the parent of remaining branch
            GenericWorkflowDesigner.Settings.workflowTree.addChildActivity(parent, defaultBranch);
            _this.deleteSelectedActivitiesCore();
            return targetActivities;
        };
        /**
         * Dialog that comes up when user tries to delete the root node/stage.
         */
        ActivityDeleteHandler.prototype.alertDialog = function(title, message) {
            var dialogDetails = {
                dialogTitle: title,
                dialogMessage: message,
                messageType: 1
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog,
                dialogDetails);
        };
        ActivityDeleteHandler.prototype.deleteActivityConfirmationDialog = function(activity) {
            var dialogDetails = {
                dialogTitle: "Warning: Deleting an activity",
                dialogMessage: "Are you sure to delete this " + activity,
                messageType: 1,
                yesCallbackAction: this.DeleteConfirmedCallback,
                noCallbackAction: this.DeleteCanceledCallback
            };
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showDialog,
                dialogDetails);
        };
        ActivityDeleteHandler.prototype.DeleteConfirmedCallback = function() {
            ActivityDeleteHandler.prototype.deleteActivities();
        };
        ActivityDeleteHandler.prototype.DeleteCanceledCallback = function() {
            return;
        };
        ActivityDeleteHandler.prototype.deleteSelectedActivities = function() {
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
        /**
          * Delete the list of selected activities.
          *@return : return an array of deleted activities. If deleted is not allowed return empty array
          */
        ActivityDeleteHandler.prototype.deleteActivities = function() {
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
                } else if (currentActivity.getActivityTypeID() == "step") {
                    deletedActivities.push(currentActivity);
                    _this.deleteStepFromStageActivity(currentActivity);
                } else {
                    stageActivities.push(currentActivity);
                }
            }
            if (stageActivities.length > 0) {
                for (var i = 0; i < stageActivities.length; ++i) {
                    var par = stageActivities[i].getParent();
                    var child = stageActivities[i].getChildActivitiesSorted()[0];
                    if (par &&
                        child &&
                        par.getActivityTypeID() == "condition" &&
                        child.getActivityTypeID() == "condition") {
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
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.activityDeleted,
                deletedActivities);
            return deletedActivities;
        };
        ActivityDeleteHandler.prototype.deleteStepFromStageActivity = function(step) {
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
    GenericWorkflowDesigner.ActivityDeleteHandler = ActivityDeleteHandler; //end of class ActivityDeleteHandler
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {})); //end of module GenericWorkflowDesigner
// -----------------------------------------------------------------------
// <copyright file="CrmEncodeDecode.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
/// <reference path="./GenericWorkflowCommonReferences.ts" />
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    'use strict';
    // Designers are unable to access the Encoding/Decoding methods from CRM.
    // Hence writing this class in order to add duplicates of those methods.
    var CrmEncodeDecode = (function() {
        function CrmEncodeDecode() {
        }

        // This method carries out CRM HTML encoding on the provided string.
        // This method is copied from CrmEncodeDecode.js in order to support HTML encoding across Designers.
        CrmEncodeDecode.CrmHtmlEncode = function(text) {
            if (text == null) {
                return text;
            } else {
                if (typeof (text) != "string") {
                    text = text.toString();
                }
            }
            return this.surrogateAmpersandWorkaround(text);
        };
        CrmEncodeDecode.surrogateAmpersandWorkaround = function(text) {
            // Encode surrogate pairs in Unicode scalar value
            text = text.replace(new RegExp("([\\uD800-\\uDBFF][\\uDC00-\\uDFFF])", "g"),
                function($1) {
                    return "CRMEntityReferenceOpen" +
                        ((($1.charCodeAt(0) - 0xD800) * 0x400) + ($1.charCodeAt(1) & 0x03FF) + 0x10000).toString(16) +
                        "CRMEntityReferenceClose";
                });
            // Fix issue 12224: sometimes the user just puts invalid surrogate pairs (The correct surrogate pair: Low Surrogate followed by High Surrogate). 
            // We need to replace the character with Replacement character #UFFFD. This character is used to replace incoming character whose value is unknown
            text = text.replace(new RegExp("[\\uD800-\\uDFFF]", "g"), '\uFFFD');
            //encode whole string
            text = this.encodingFunction(text);
            text = text.replace(/CRMEntityReferenceOpen/g, "&#x");
            text = text.replace(/CRMEntityReferenceClose/g, ";");
            return text;
        };
        CrmEncodeDecode.encodingFunction = function(strInput) {
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
            // 4330 - buffer the concatenated string in chunks of 500 and then add it to the larger string.
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
                } else {
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
(function(Dialogs) {
    "use strict";
    /**
     * Html properties for sliding dialog
     */
    (function(SlidingDialogProperty) {
        /**
         * The width html property
         */
        SlidingDialogProperty[SlidingDialogProperty["width"] = 0] = "width";
        /**
         * The height html property
         */
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
(function(GenericWorkflowDesigner) {
    'use strict';
    GenericWorkflowDesigner.EventManager = {
        subscribe: function(event, fn, context) {
            GenericWorkflowDesigner.eventManager.on(event, fn, context);
        },
        subscribeWithReturnValue: function(event, fn) {
            $(document).on(event, fn);
        },
        unsubscribe: function(event, fn) {
            GenericWorkflowDesigner.eventManager.off(event, fn);
        },
        unsubscribeWithoutCallback: function(event) {
            GenericWorkflowDesigner.eventManager.off(event);
        },
        unsubscribeWithReturnValue: function(event, fn) {
            $(document).off(event, fn);
        },
        publish: function(event) {
            GenericWorkflowDesigner.eventManager.trigger(event);
        },
        publishWithPayload: function(event, payload) {
            GenericWorkflowDesigner.eventManager.trigger(event, payload);
        }
    };
    GenericWorkflowDesigner.FrameworkEvents = {
        // widget related events
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
        // data access related events
        getWorkflowData: "getWorkflowData",
        updateWorkflowDefinition: "updateWorkflowDefinition",
        validateWorkflow: "validateWorkflow",
        getActivityDefinitions: "getActivityDefinitions",
        createActivityDefinition: "createActivityDefinition",
        updateActivityDefinition: "updateActivityDefinition",
        deleteActivityDefinition: "deleteActivityDefinition",
        getDynamicEnums: "getDynamicEnums",
        // toolpane related events
        activatePropertyTab: "activatePropertyTab",
        libraryTabActivated: "libraryTabActivated",
        //Zooming features related events
        canvasZoomOutEvent: "canvasZoomOutEvent",
        canvasZoomInEvent: "canvasZoomInEvent",
        canvasFitToScreenEvent: "canvasFitToScreenEvent"
    };
    /* Data access events */
    var DataAccessEvents = (function() {
        function DataAccessEvents() {
        }

        // to trigger the getWorkflowData event and return data received from handler
        DataAccessEvents.getWorkflowData = function(model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getWorkflowData, model);
        };
        // to trigger the updateWorkflowDefinition event and return data received from handler
        DataAccessEvents.updateWorkflowDefinition = function(data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.updateWorkflowDefinition, data);
        };
        // to trigger the validateWorkflow event and return data received from handler
        DataAccessEvents.validateWorkflow = function(model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.validateWorkflow, model);
        };
        // to trigger the getActivityDefinitions event and return data received from handler
        DataAccessEvents.getActivityDefinitions = function(model) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getActivityDefinitions, model);
        };
        // to trigger the createActivityDefinition event and return data received from handler
        DataAccessEvents.createActivityDefinition = function(data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.createActivityDefinition, data);
        };
        // to trigger the updateActivityDefinition event and return data received from handler
        DataAccessEvents.updateActivityDefinition = function(data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.updateActivityDefinition, data);
        };
        // to trigger the deleteActivityDefinition event and return data received from handler
        DataAccessEvents.deleteActivityDefinition = function(data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.deleteActivityDefinition, data);
        };
        // to trigger the deleteActivityDefinition event and return data received from handler
        DataAccessEvents.getDynamicEnums = function(data) {
            return $(document).triggerHandler(GenericWorkflowDesigner.FrameworkEvents.getDynamicEnums, data);
        };
        return DataAccessEvents;
    })();
    GenericWorkflowDesigner.DataAccessEvents = DataAccessEvents;
    var CapturingEvents = (function() {
        function CapturingEvents() {
        }

        CapturingEvents.addCapturingEvent = function(element, events, callback) {
            if ($(element).length != 0) {
                element = $(element)[0];
                for (var i = 0; i < events.length; i++) {
                    if (element.addEventListener) {
                        element.addEventListener(events[i], callback, true);
                    } else if (element.attachEvent) {
                        element.attachEvent("on" + events[i], callback);
                    }
                }
            }
        };
        CapturingEvents.removeCapturingEvent = function(element, events, callback) {
            if ($(element).length != 0) {
                element = $(element)[0];
                for (var i = 0; i < events.length; i++) {
                    if (element.removeEventListener) {
                        element.removeEventListener(events[i], callback, true);
                    } else if (element.detachEvent) {
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
(function(GenericWorkflowDesigner) {
    var Exception = (function() {
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
(function(GenericWorkflowDesigner) {
    /**
      * This class wraps the jQuery dragdrop extension and extends it further to
      * make the target containers scroll if the user is holding the drop target on the
      * edge of the visible area of container
      */
    "use strict";
    var ScrollableDragDropExtended = (function() {
        function ScrollableDragDropExtended() {
        }

        /** Makes an element draggable and makes the container scroll if required
         * @param element The jQuery element which needs to be draggable
         * @param container Array of jQuery elements which needs to scroll
         * @param draggableOptions The options required for jQuery draggable
         * @param scrollOptions Optional, default - step : 10 (px), timer : 25 (msec), scrollTriggerMargin : 60 (px) [Array of scrollOptions ]
         */
        ScrollableDragDropExtended.prototype
            .makeDraggable = function(element, container, draggableOptions, scrollOptions) {
                var containerEdgeScrollers = [];
                container.forEach(function(eachContainer, containerIndex) {
                    containerEdgeScrollers.push(new GenericWorkflowDesigner
                        .ContainerEdgeScroller(eachContainer, scrollOptions[containerIndex]));
                });
                var extendedDraggableOptions = $.extend({},
                    draggableOptions,
                    {
                        start: function() {
                            if (draggableOptions.start) {
                                draggableOptions.start.apply(this, arguments);
                            }
                            containerEdgeScrollers.forEach(function(containerEdgeScroller) {
                                containerEdgeScroller.initialize();
                            });
                        },
                        drag: function(e) {
                            if (draggableOptions.drag) {
                                draggableOptions.drag.apply(this, arguments);
                            }
                            containerEdgeScrollers.forEach(function(containerEdgeScroller) {
                                containerEdgeScroller.scrollIfCursorOnEdge(e.pageX, e.pageY);
                            });
                        },
                        stop: function() {
                            if (draggableOptions.stop) {
                                draggableOptions.stop.apply(this, arguments);
                            }
                            containerEdgeScrollers.forEach(function(containerEdgeScroller) {
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
(function(GenericWorkflowDesigner) {
    (function(ValidationMode) {
        ValidationMode[ValidationMode["None"] = 0] = "None";
        ValidationMode[ValidationMode["Warning"] = 1] = "Warning";
        ValidationMode[ValidationMode["Error"] = 2] = "Error";
    })(GenericWorkflowDesigner.ValidationMode || (GenericWorkflowDesigner.ValidationMode = {}));
    var ValidationMode = GenericWorkflowDesigner.ValidationMode;
    var Notification = (function() {
        /* Constructor*/
        function Notification(selector) {
            this._messages = new Array();
            this._selector = selector;
            this.activateButtonClicked = false;
        }

        /* Show notification at specified selector */
        Notification.prototype.ShowNotification = function(summaryMessage, validationMode) {
            if (validationMode == ValidationMode.None) {
                return;
            }
            this._summaryMessage = summaryMessage;
            var notificationView = new GenericWorkflowDesigner
                .NotificationView($(this._selector), this._messages, this._summaryMessage);
            //Show notifications even with summary message
            /*if (this._messages.length > 0)*/
            {
                $(this._selector).css("display", "block");
                $(this._selector).append(notificationView.render().$el);
                if (this.activateButtonClicked == false) {
                    this.activateButtonClicked = true;
                    // Shrink the workspace wrapper to accomodate the notification view
                    var workspaceWrapperHeight = parseInt($(".workspaceWrapper").css("height"), 10);
                    workspaceWrapperHeight = workspaceWrapperHeight - parseInt($(this._selector).css("height"), 10);
                    $(".workspaceWrapper").attr("style", "height:" + workspaceWrapperHeight + "px !important");
                    // Shrink the toolpane height to accomodate the notification view
                    var toolpaneHeight = parseInt($("#toolpane").css("height"), 10);
                    toolpaneHeight = toolpaneHeight - parseInt($(this._selector).css("height"), 10);
                    $("#toolpane").attr("style", "height:" + toolpaneHeight + "px !important");
                }
            }
        };
        /* Append notification in Notification area*/
        Notification.prototype.AppendNotification = function(message) {
            // TODO : <29-Apr-2016> : <v-maj> : Check for scenarios where we need to notify to adder. Like addition of error message along with errors.
            this._messages.push(message);
        };
        /* Get Count of all validation messages inserted */
        Notification.prototype.GetNotifictionCount = function() {
            return this._messages.length;
        };
        /* Clears notification from notification area. */
        Notification.prototype.ClearNotifications = function() {
            $(this._selector).empty();
            $(this._selector).css("display", "none");
            this._messages = new Array();
        };
        return Notification;
    })();
    GenericWorkflowDesigner.Notification = Notification;
    /* Notification message to be displayed in notification.*/
    var NotificationMessage = (function() {
        /* Constructor*/
        function NotificationMessage(messageType, message) {
            this.messageType = messageType;
            this.message = message;
        }

        return NotificationMessage;
    })();
    GenericWorkflowDesigner.NotificationMessage = NotificationMessage;
    /* Types of message that can be added in Notification. */
    (function(MessageType) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot tile holder generator. */
    var DefaultActivityValidationRuleSet = (function() {
        function DefaultActivityValidationRuleSet() {
            this.allSlotRules = [];
        }

        /** Use this function to set the rules from some REST call
        */
        DefaultActivityValidationRuleSet.prototype.setRules = function(rules) {
            this.allSlotRules = rules;
        };
        DefaultActivityValidationRuleSet.prototype.isValid = function(activityComponent, currentActivity) {
            var parentActivity = GenericWorkflowDesigner.Settings.workflowTree.getParent(currentActivity);
            var ruleList = null;
            if (parentActivity) {
                var activityId = parentActivity.getActivityTypeID();
                ruleList = this.getRuleForParentActivity(activityId);
            }
            if (ruleList == null) {
                return true;
            } else {
                return this.isChildAllowed(GenericWorkflowDesigner.Settings.workflowTree.getParent(currentActivity)
                    .getActivityTypeID(),
                    activityComponent.getRoot().getActivityTypeID());
            }
        };
        DefaultActivityValidationRuleSet.prototype.getRuleForParentActivity = function(activityId) {
            var children = null;
            // this should return the slot rule for the parent     
            jQuery.each(this.allSlotRules,
                function(index, rule) {
                    if (rule.getParentId() == activityId) {
                        children = rule.getChildrenNotAllowed(activityId);
                    }
                });
            return children;
        };
        DefaultActivityValidationRuleSet.prototype.isChildAllowed = function(parentActivityId, droppedActivityId) {
            //if dropped is part of the allowed children for parent, then return true
            var childrenNotAllowed = this.getRuleForParentActivity(parentActivityId);
            if ($.inArray(droppedActivityId, childrenNotAllowed) > -1) {
                return false;
            } else
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Default slot tile holder generator. */
    var SlotValidationRule = (function() {
        function SlotValidationRule(parentId, childrenNotAllowed) {
            this.parentId = parentId;
            this.childrenNotAllowed = childrenNotAllowed;
        }

        SlotValidationRule.prototype.getChildrenNotAllowed = function(parentActivityId) {
            return this.childrenNotAllowed;
        };
        SlotValidationRule.prototype.getParentId = function() {
            return this.parentId;
        };
        return SlotValidationRule;
    })();
    GenericWorkflowDesigner.SlotValidationRule = SlotValidationRule;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));;
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
(function(GenericWorkflowDesigner) {
    ///  <summary>
    ///  Factories to instantiate new instance of process activities given the activity type
    ///  </summary>
    var ActivityDropHandlerFactory = (function() {
        function ActivityDropHandlerFactory() {
        }

        ///  <summary>
        ///  Instantiate process activity based on the activity type
        ///  </summary>
        ///  <param name="activityType"></param>
        ///  <returns></returns>
        ActivityDropHandlerFactory.prototype.createDropActivityController = function(slot) {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for focus on activity */
    var DefaultActivityFocusHandler = (function() {
        function DefaultActivityFocusHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles aon on focus on activity.
        @param elementFocused: The element that focus should be performed on.
        @return: promise.
        */
        DefaultActivityFocusHandler.prototype.focus = function(elementFocused) {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for blur on activity */
    var DefaultActivityBlurHandler = (function() {
        function DefaultActivityBlurHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles aon on blur on activity.
        @param elementBlurred: The element that blur should be performed on.
        @return: promise.
        */
        DefaultActivityBlurHandler.prototype.blur = function(elementBlurred) {
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
(function(GenericWorkflowDesigner) {
    /** Default handler for key down on activity */
    var DefaultActivityKeyDownHandler = (function() {
        function DefaultActivityKeyDownHandler(currentActivity) {
            this.currentActivity = currentActivity;
        }

        /** Handles a key down on activity.
        @param element: The element that key down should be performed on.
        @return: promise.
        */
        DefaultActivityKeyDownHandler.prototype.keyDown = function(element, event) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var DefaultActivityMultiDropHandler = (function() {
        function DefaultActivityMultiDropHandler(slot) {
            this.slot = slot;
        }

        /** Drop multiple activity components.
        @param activityComponents: The array of activity components.
        @return: A promise with the created activity as parameter.
        */
        DefaultActivityMultiDropHandler.prototype.drop = function(activityComponents) {
            var promise = null;
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerProvider.createDropHandler(this.slot);
            jQuery.each(activityComponents,
                function(index, component) {
                    if (promise == null) {
                        promise = dropHandler.drop(component);
                    } else {
                        promise = promise.then(function() {
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
(function(GenericWorkflowDesigner) {
    var DefaultSlotTileHolderHandlerFactory = (function() {
        function DefaultSlotTileHolderHandlerFactory() {
            if (DefaultSlotTileHolderHandlerFactory.instance) {
                throw new Error("Error: Instantiantion failed: Use DefaultSlotTileHolderHandlerFactory.getInstance()");
            }
        }

        /** Get the instance of the handler factory
        @return: the instance of the handler factory.
        */
        DefaultSlotTileHolderHandlerFactory.getInstance = function() {
            if (DefaultSlotTileHolderHandlerFactory.instance == null) {
                DefaultSlotTileHolderHandlerFactory.instance = new DefaultSlotTileHolderHandlerFactory();
            }
            return DefaultSlotTileHolderHandlerFactory.instance;
        };
        /**
        Creates a drop handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity drop handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createDropHandler = function(currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
            case GenericWorkflowDesigner.ActivityType.Empty:
                return new GenericWorkflowDesigner.EmptyActivityDropHandler(currentActivity);
            default:
                return new GenericWorkflowDesigner.DefaultActivityDropHandler(currentActivity);
            }
        };
        /**
        Creates a drag handler of the given activity.
        @param currentActivity: The activity being dragged
        @return: An activity drag handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createDragHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityDragHandler(currentActivity);
        };
        /**Creates a drop handler of the given slot.
         * @param slot: The Slot.
         * @return: An drop handler.
         */
        DefaultSlotTileHolderHandlerFactory.prototype.createMultipleDropHandler = function(slot) {
            return new GenericWorkflowDesigner.TileHolderMultiDropHandler(slot);
        };
        /**
        Creates a click handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity click handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createClickHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityClickHandler(currentActivity);
        };
        /**
       Creates a double click handler of the given activity.
       @param currentActivity: The activity.
       @return: An activity double click handler.
       */
        DefaultSlotTileHolderHandlerFactory.prototype.createDblClickHandler = function(currentActivity) {
            switch (currentActivity.getActivityTypeID()) {
            case GenericWorkflowDesigner.ActivityType.Empty:
                return new GenericWorkflowDesigner.EmptyActivityDblClickHandler(currentActivity);
            default:
                return null;
            }
        };
        /**
        Creates a key down handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity key down handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createKeyDownHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityKeyDownHandler(currentActivity);
        };
        /**
        Creates an on focus handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on focus handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createFocusHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityFocusHandler(currentActivity);
        };
        /**
        Creates an on blur handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity on blur handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createBlurHandler = function(currentActivity) {
            return new GenericWorkflowDesigner.DefaultActivityBlurHandler(currentActivity);
        };
        /**
        Creates a context handler of the given activity.
        @param currentActivity: The activity.
        @return: An activity click handler.
        */
        DefaultSlotTileHolderHandlerFactory.prototype.createContextHandler = function(currentActivity) {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    /** Status options for GenericWorkflowDesigner actions */
    'use strict';
    (function(ActionStatus) {
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
(function(GenericWorkflowDesigner) {
    /** Factory providing information about the tile */
    var DefaultTileInformationFactory = (function() {
        function DefaultTileInformationFactory() {
        }

        /** Generates information object of the activity depending on ActivityType.
        @param activityType: The activity Type.
        @return: An information object of activity.
        */
        DefaultTileInformationFactory.prototype.GetTileInformationForActivityType = function(activityType) {
            var activityModel = GenericWorkflowDesigner.Settings.activityDefinitionFactory.createActivity(activityType);
            return this.GetTileInformationForActivityModel(activityModel);
        };
        /** Generates information object of the activity depending on ActivityModel.
        @param activityModel: The activity model.
        @param specificItemId: A specific item id.
        @return: An information object of activity.
        */
        DefaultTileInformationFactory.prototype
            .GetTileInformationForActivityModel = function(activityModel, specificItemId) {
                return new GenericWorkflowDesigner.EmptyActivityTileInformation(activityModel, specificItemId);
            };
        /** Gets the status view for tile based on activity.
            This is shown above the tile.
            @param activity: The activity model.
            @return:  Status view.
        */
        DefaultTileInformationFactory.prototype.GetTileStatusView = function(activity) {
            if (typeof (activity) != "undefined") {
                // Return empty status view if activity type is empty or there are no error or warnings..
                if (activity.getActivityTypeID() == GenericWorkflowDesigner.ActivityType.Empty ||
                    (activity.getErrorCount() == 0 && activity.getWarningCount() == 0)) {
                    return new GenericWorkflowDesigner.EmptyStatusView();
                } else {
                    return new GenericWorkflowDesigner.ErrorStatusView(activity);
                }
            }
        };
        DefaultTileInformationFactory.prototype.GetDataUriforImagePath = function(imagePath) {
            return null;
        };
        DefaultTileInformationFactory.prototype.GetLocalizedString = function(inputString) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var Utilities = (function() {
        function Utilities() {
        }

        Utilities.saveSnapshot = function(divElement, fileName) {
            // get height and width for new canvas to capture full contents of divElement, not just viewport
            var useWidth = divElement.scrollWidth + 100;
            var useHeight = divElement.scrollHeight + 100;
            // tweaked scroll position and CSS to capture complete canvas divElement without border
            var scrlTop = divElement.scrollTop;
            var scrlLeft = divElement.scrollLeft;
            var borderStyle = divElement.style.border;
            divElement.scrollTop = 0;
            divElement.scrollLeft = 0;
            divElement.style.border = "none";
            var backgroundColor = $(divElement).css("background-color");
            html2canvas(divElement,
                    { width: useWidth, height: useHeight, allowTaint: true, type: "view", background: backgroundColor })
                .then(function(canvas) {
                    if (navigator.msSaveBlob) {
                        // For IE and Edge
                        var imgData = canvas.msToBlob('image/png');
                        navigator.msSaveBlob(imgData, fileName + '.png');
                    } else {
                        //Other Brousers
                        var saveImage = document.createElement('a');
                        saveImage.setAttribute('id', 'saveLink');
                        document.body.appendChild(saveImage);
                        var savedImageDisplayName = fileName + '.png';
                        $("#saveLink").attr('download', savedImageDisplayName);
                        $("#saveLink").attr('href',
                            canvas.toDataURL("image/png")
                            .replace(/^data:image\/[^;]/, 'data:application/octet-stream'));
                        $("#saveLink")[0].click();
                        $("#saveLink").remove();
                    }
                });
            divElement.style.border = borderStyle;
            divElement.scrollTop = scrlTop;
            divElement.scrollLeft = scrlLeft;
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var AddGlobalButtonView = (function(_super) {
        __extends(AddGlobalButtonView, _super);

        function AddGlobalButtonView() {
            _super.call(this);
        }

        /* Initialize method */
        AddGlobalButtonView.prototype.initialize = function() {
        };
        AddGlobalButtonView.prototype.render = function() {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var AddGlobalAreaView = (function(_super) {
        __extends(AddGlobalAreaView, _super);

        function AddGlobalAreaView() {
            _super.call(this);
        }

        /* Initialize method */
        AddGlobalAreaView.prototype.initialize = function() {
            this._IsVisibile = false;
            this._ButtonIcon = "expandSymbol";
            this._AddGlobalAreaTemplate = _
                .template("<div id=\"globalbuttonAreaDiv\" class= \"globalButtonDiv\"><table id=\"globalButtonAreaTable\" class=\"globalButtonAreaTable\" > <tr id=\"globalbuttonArea\" ></tr> </table></div>");
            this._ToggleButtonsTemplate = _
                .template('<button id = \"btnToggleButtons\" class= \"showHidebutton\" title=\"' +
                    GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetLocalizedString("GenericWorkflowDesignerControl_GlobalArea") +
                    '\" aria-label=\"' +
                    GenericWorkflowDesigner.Settings.tileInformationFactory
                    .GetLocalizedString("GenericWorkflowDesignerControl_GlobalArea") +
                    '\" tabindex=' +
                    GenericWorkflowDesigner.Settings.tabIndexValue +
                    '><span id=\"spanToggleButtons\" class=\"CCFSymbolFont <%- this._ButtonIcon%> global-fontIcons-size \" style=\"color:white;padding-top:4px;\"></span></button>');
            this._ToggleTemplate = _
                .template('<div id= \"globalButtonVisibility\" class= \"globalButtonVisibility\"> </div>');
        };
        AddGlobalAreaView.prototype.toggleButtons = function() {
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
            } else {
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
        AddGlobalAreaView.prototype.render = function() {
            var self = this;
            $("#globalButtonArea").html("");
            $("#globalButtonArea").addClass("globalAreaDiv");
            $("#globalButtonArea").append(this._AddGlobalAreaTemplate());
            $("#globalbuttonAreaDiv").hide();
            $("#globalButtonArea").append(this._ToggleTemplate());
            $("#globalButtonVisibility").append(this._ToggleButtonsTemplate());
            $("#globalButtonVisibility").on("click",
                function(event) {
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
(function(GenericWorkflowDesigner) {
    var ToolBarView = (function(_super) {
        __extends(ToolBarView, _super);

        function ToolBarView() {
            _super.call(this);
            this.itemArray = new Array();
            this.itemViewArray = new Array();
            this._toolbarTemplate = _
                .template("<div class=\"toolbar\"><table class=\"toolbarContainer\"><tr id=\"toolBarRow\"></tr></table></div>");
        }

        /** Render Tool bar view. */
        ToolBarView.prototype.render = function() {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            this.$el.append(this._toolbarTemplate);
            this.AddItemsInToolBar();
            this.$el.find("button").on("click",
                function(event) {
                    var commandType = event.currentTarget.getAttribute("id");
                    GenericWorkflowDesigner.EventManager
                        .publishWithPayload(GenericWorkflowDesigner.FrameworkEvents.toolBarItemClick, event);
                });
            stopwatch.stop();
            localStorage.setItem("PerfMarker_ToolbarRender", stopwatch.elapsedMilliseconds.toString());
            return this.$el;
        };
        /** Add tool bar items in itemViewArray. All elements inside itemViewArray would then be used to render
         inside toolbar.
        */
        ToolBarView.prototype.AddItemsInToolBar = function() {
            var _this = this;
            this.itemViewArray.forEach(function(itemView) {
                _this.$el.find("#toolBarRow").append(itemView.render());
            });
        };
        /** Prepare collection of ToolBaritems. to be rendered in toolbar.
        */
        ToolBarView.prototype.PrepareItems = function() {
            // TODO(v-mayj): Task 297493: Give correct image to buttons.Localize the string.
            // TODO: Have to collect the image for Add Command and title string "Add" has to be localized.
            // CustomControls\ProcessDesignerControl\DesignerWidget\WidgetDemo\Modern.css has #add class which is affecting the add button if we name it as 'add'. We can't change the modern.css file. Hence used 'Add' instead.
            /* Retrieve toolbar initialization data from Config Xml via Config Reader */
            var toolbarItemData = GenericWorkflowDesigner.Settings.configReader.retrieveToolbarItems();
            /* Toolbar Button Array will hold the Toolbar Buttons which are instantiated inside the below Iterator */
            var toolbarButtonArray = this.itemArray;
            /* Iterate over each toolbar data item and instantiate corresponding ToolBarItem object */
            jQuery.each(toolbarItemData,
                function(item, toolbarData) {
                    /* Instantiate the corresponding toolbar button and populate its properties */
                    var toolbarButton = new GenericWorkflowDesigner.ToolBarItem();
                    toolbarButton.itemId = toolbarData.itemid;
                    toolbarButton.title = toolbarData.title;
                    toolbarButton.tooltip = toolbarData.tooltip;
                    toolbarButton.fontIconSymbol = toolbarData.fonticonsymbol;
                    toolbarButton.section = toolbarData.section;
                    /* Add the toolbarButton to the Toolbar itemArray */
                    toolbarButtonArray.push(toolbarButton);
                });
            /* Reassign the populated toolbarButtonArray back to the itemArray */
            this.itemArray = toolbarButtonArray;
        };
        /** Prepare view corresponding to items in itemArray.*/
        ToolBarView.prototype.PrepareItemViews = function() {
            var _this = this;
            this.itemArray.forEach(function(toolBarItem) {
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
(function(GenericWorkflowDesigner) {
    var ToolBarItemview = (function(_super) {
        __extends(ToolBarItemview, _super);

        function ToolBarItemview(model) {
            _super.call(this, model);
            this.model = model;
            this._buttonTemplate = _
                .template("<button id=\"<%- itemId %>\" class=\"toolbarItem\" type=\"submit\" title=\" <%- tooltip %> \" tabindex=\"" + GenericWorkflowDesigner.Settings.tabIndexValue + "\"><span class=\"CCFSymbolFont " + this.model.fontIconSymbol + " toolbar-fontIcons-size\"></span><div id=\"toolBarItemTitle" + this.model.title + "\" class=\"truncateString utilityBarItem-normal-mode\">" + this.model.title + "</div></button>", this.model);
        }

        ToolBarItemview.prototype.initialize = function() {
            this.events = {
                "mouseover": this.onHover,
                "mouseleave": this.onMouseLeave
            };
        };
        /** Render Tool bar item view. */
        ToolBarItemview.prototype.render = function() {
            var _self = this;
            this.$el.append(_self._buttonTemplate);
            this.$el.addClass("toolbarItemContainer");
            return this.$el;
        };
        ToolBarItemview.prototype.onHover = function(event) {
            this.$el.find("#toolBarItemTitle").removeClass("utilityBarItem-normal-mode");
            this.$el.find("#toolBarItemTitle").addClass("utilityBarItem-selected-mode");
        };
        ToolBarItemview.prototype.onMouseLeave = function(event) {
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
(function(GenericWorkflowDesigner) {
    var ZoomItemView = (function(_super) {
        __extends(ZoomItemView, _super);

        function ZoomItemView(model) {
            _super.call(this, model);
            this.model = model;
            this._buttonTemplate = _
                .template("<button id=\"<%- itemId %>\" class=\"zoomIconItem\" type=\"submit\" role=\"button\" title=\" <%- title %> \" aria-label=\" <%- title %> \" tabindex=\"" + GenericWorkflowDesigner.Settings.tabIndexValue + "\"><span class=\"CCFSymbolFont " + this.model.fontIconSymbol + " zoomIcon-fontIcons-size\"></span></button>", this.model);
        }

        ZoomItemView.prototype.initialize = function() {
        };
        /** Render Tool bar item view. */
        ZoomItemView.prototype.render = function() {
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var ZoomIconHolderView = (function(_super) {
        __extends(ZoomIconHolderView, _super);

        function ZoomIconHolderView(zoomIconHolder) {
            _super.call(this, { el: zoomIconHolder });
            this.$el.empty();
            this.zoomItemArray = new Array();
            this.zoomItemViewArray = new Array();
            this.$el.addClass(ZoomIconHolderView.zoomIconHolderClass);
            this._zoomIconTemplate = _
                .template("<table class=\"zoomIconContainer\"><tr><td id=\"zoomOut\" class=\"zoomIconSection\" ></td><td id=\"zoomIn\" class=\"zoomIconSection\" ></td><td id=\"fitToScreen\" class=\"zoomIconSection\" ></td></tr></table>");
        }

        ZoomIconHolderView.prototype.render = function() {
            var _this = this;
            this.prepareItems();
            this.prepareViews();
            this.$el.append(this._zoomIconTemplate);
            this.zoomItemViewArray.forEach(function(zoomView) {
                _this.$el.find("#" + zoomView.model.itemId).append(zoomView.render());
            });
            this.$el.find("button").on("click",
                function(event) {
                    var commandType = event.currentTarget.getAttribute("id");
                    ZoomIconHolderView.getCommandObject(commandType).execute();
                });
        };
        ZoomIconHolderView.getCommandObject = function(commandType) {
            switch (commandType.toLowerCase()) {
            case "zoomin":
                return new GenericWorkflowDesigner.ZoomInCommand();
            case "zoomout":
                return new GenericWorkflowDesigner.ZoomOutCommand();
            case "fittoscreen":
                return new GenericWorkflowDesigner.FitToScreenCommand();
            }
        };
        ZoomIconHolderView.prototype.prepareItems = function() {
            var zoomItemData = GenericWorkflowDesigner.Settings.configReader.retrieveZoomItems();
            var zoomButtonArray = this.zoomItemArray;
            jQuery.each(zoomItemData,
                function(index, zoomItem) {
                    var zoomButton = new GenericWorkflowDesigner.ZoomItem();
                    zoomButton.title = zoomItem.title;
                    zoomButton.itemId = zoomItem.itemid;
                    zoomButton.fontIconSymbol = zoomItem.fonticonsymbol;
                    zoomButtonArray.push(zoomButton);
                });
            this.zoomItemArray = zoomButtonArray;
        };
        ZoomIconHolderView.prototype.prepareViews = function() {
            var zoomItems = this.zoomItemArray;
            var zoomItemViews = this.zoomItemViewArray;
            jQuery.each(zoomItems,
                function(index, zoomItem) {
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var MessagesView = (function(_super) {
        __extends(MessagesView, _super);

        function MessagesView(model) {
            _super.call(this, model);
            this._messages = model.AllMessages;
            // SummaryType is take to decide what kind of notification we are showing i.e error/warning, this will help in deciding CSS properties.
            this._summaryType = model.SummaryType;
            // Font icon to be used with each message. We can have different icons for error and warnings, currently we are
            // using same icon for both warning and error. 
            this._fontIcon = "errorNotificationSymbol";
            // Template creates messages in unordered list with their corresponding icons and color.
            this._messageTemplate = _.template("<ul style= \"list-style: none;\">" +
                "<%_.each(obj, function (msg) {%>" +
                "<%var color;var notificationFontIcon;if (msg.messageType == 0) {color = \"orange\";notificationFontIcon=\"" +
                this._fontIcon +
                "\"}else if(msg.messageType ==1) {color = \"red\";notificationFontIcon=\"" +
                this._fontIcon +
                "\"} else{color =\"green\";notificationFontIcon=\"" +
                this._fontIcon +
                "\"}%>" +
                "<li style= \"color:<%-color%>\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span> <%- msg.message %> </li>" +
                "<%});%>" +
                "</ul>",
                JSON.parse(JSON.stringify(this._messages)));
        }

        /* render method for MessagesView*/
        MessagesView.prototype.render = function() {
            var color;
            if (this._summaryType == GenericWorkflowDesigner.MessageType.Error)
                color = "red";
            else {
                color = "orange";
            }
            this.$el.css({
                "border-top": color + " 1px solid",
                "margin": "0px 10px",
                "max-height": "100px",
                "overflow-y": "scroll"
            });
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
(function(GenericWorkflowDesigner) {
    "use strict";
    var MiniMapView = (function() {
        function MiniMapView() {
        }

        /*Renders the Mini-Map.*/
        MiniMapView.prototype.renderMiniMap = function(canvas, selectors, zoomOutDiv) {
            var miniMapId = '#mini-map';
            // Lists of all available components tiles symbols css class name. These need to be modify when new tile symbol css class added.
            var processComponents =
                "stageTileSymbol,conditionTileSymbol,acceptConditionTileSymbol,suggestionTileSymbol,lockUnlockTileSymbol,showErrorMessageTileSymbol,setFieldTileSymbol,setDefaultTileSymbol,setFiledRequiredLevelTileSymbol,setVisiblityTileSymbol,yesBranchSymbol,noBranchSymbol,customJavascriptTileSymbol";
            //Constant values of closeMiniMapSymbol and showMiniMapSymbol are not defined as css class attributes because these values are used first time for rendering the mini- map and it can not be read from css while rendering mini-map.
            var closeMiniMapSymbol = "0xE93B";
            var showMiniMapSymbol = "0xE93A";
            var selectorsString = "";
            if (selectors.length > 0) {
                selectorsString = selectors[0];
                for (var i = 1; i < selectors.length; i++)
                    selectorsString = selectorsString + "," + selectors[i];
            }
            $("#mini-map-wrapper").remove();
            $(canvas).append('<div id="mini-map-wrapper"><button id="close-mini-map" title="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_CloseMinimap_Tooltip") +
                '" aria-label="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_CloseMinimap_Tooltip") +
                '" type="button" role="button" aria-expanded="true" tabindex="' +
                GenericWorkflowDesigner.Settings.tabIndexValue +
                '"></button><canvas id="mini-map" width="' +
                GenericWorkflowDesigner.Settings.layoutProperties.miniMapWidth +
                ' " height="' +
                GenericWorkflowDesigner.Settings.layoutProperties.miniMapHeight +
                '"></canvas><div id="show-mini-map-div"><table><tbody><tr><td width="33px"><button id="show-mini-map" title="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip") +
                '" aria-label="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip") +
                '" role="button" aria-expanded="false" tabindex="' +
                GenericWorkflowDesigner.Settings.tabIndexValue +
                '"></button></td><td></td><td id="miniMapWrapperTD"><span style="padding-left:8px;padding-top:6px;color:white" title="' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_Minimap_Tooltip") +
                '">' +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_Minimap") +
                '</span></td></tr></tbody></table></div></div>');
            $(miniMapId).fracs('outline',
                {
                    styles: [
                        {
                            selector: selectorsString,
                            strokeWidth: 'auto',
                            strokeStyle: 'rgb(255, 255, 255)',
                            fillStyle: 'auto'
                        }
                    ],
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
                    rerenderMinimapThroughDragDropFlag: GenericWorkflowDesigner.Settings
                        .rerenderMinimapThroughDragDropFlag,
                    miniMapViewPortLeftPadding: GenericWorkflowDesigner.Settings.layoutProperties
                        .miniMapViewPortLeftPadding,
                    miniMapTileWidthRatio: GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio,
                    miniMapTileHeightRatio: (GenericWorkflowDesigner.Settings.layoutProperties.width *
                            GenericWorkflowDesigner.Settings.layoutProperties.miniMapRatio) /
                        GenericWorkflowDesigner.Settings.layoutProperties.height
                },
                $(canvas));
            /* Browser Window Re-size Event */
            $(window).resize(function() {
                MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible();
            });
            /* Determine to open the MiniMap or Close it on window load as well.
            We need to keep it closed when we reload the page for 175% and above zoom modes. */
            $(window).load(function() {
                MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible();
            });
        };
        /**
         * Hide the Mini-Map if the Close Button of the Mini-Map becomes gets hidden behind canvas wrapper at higher browser zoom levels
         */
        MiniMapView.hideMiniMapWhenCloseMiniMapButtonInvisible = function() {
            /* Determine whether the Close Mini-Map Button is visible or not */
            var isCloseMiniMapButtonVisible = $("#close-mini-map").offset().top > $("#canvasWrapper").offset().top;
            var isMiniMapWrapperVisible = $("#mini-map-wrapper").css("visibility") === "visible" ? true : false;
            /* Hide the Mini-Map if the Close Button of the Mini-Map becomes gets hidden behind canvas wrapper at higher browser zoom levels */
            if (isMiniMapWrapperVisible && !isCloseMiniMapButtonVisible) {
                /* Hide Mini-Map */
                MiniMapView.showMiniMap(false);
                MiniMapView.isMinimapStateChanged = true;
            } else if (MiniMapView.isMinimapStateChanged && isCloseMiniMapButtonVisible) {
                /* Show Mini-Map */
                MiniMapView.showMiniMap(true);
                MiniMapView.isMinimapStateChanged = false;
            }
        };
        /**
         * Displays the MiniMap or Hides it based on the flag passed
         * @param isVisible: If true, displays the Minimap, else hides it
         */
        MiniMapView.showMiniMap = function(isVisible) {
            /* Decide whether to show the minimap or hide it */
            if (isVisible) {
                /* Display the Minimap */
                $("#mini-map-wrapper").css("visibility", "visible");
                $("#show-mini-map-div").css("visibility", "hidden");
            } else {
                /* Hide the Minimap */
                $("#mini-map-wrapper").css("visibility", "hidden");
                $("#show-mini-map-div").css("visibility", "visible");
            }
        };
        /* Denotes whether minimap was hidden by this window re-size event */
        MiniMapView.isMinimapStateChanged = false;
        return MiniMapView;
    })();
    GenericWorkflowDesigner.MiniMapView = MiniMapView;;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));
// -----------------------------------------------------------------------
// <copyright file="NotificationView.ts" company="Microsoft">
//      Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
var GenericWorkflowDesigner;
(function(GenericWorkflowDesigner) {
    'use strict';
    var NotificationView = (function(_super) {
        __extends(NotificationView, _super);

        /* Constructor for NotificationView.
        @param notificationContainer: Container where notification would be displayed.
        @param notifications: Array of NotificationMessages to be displayed.
        @param summary: Summary of notifications. summary will be displayed in case of
            1) Success scenario
            2) There are multiple error/warnings
        Summary must be provided, It helps in deciding CSS.
        */
        function NotificationView(notificationContainer, notifications, summary) {
            _super.call(this);
            this._messages = notifications;
            this._summaryMessage = summary;
            this._parent = notificationContainer;
            /* Template for rendering notification area. */
            this._NotificationAreatemplate = _.template("<table class=\"notificationMessages\" style=\"width:100%\">" +
                "<tr style=\"height:10px; width:100%;\" >" +
                "<td id=\"summaryMessasge\" style=\"width:85%;text-align:inherit;padding-right:5px\"><span class=\"CCFSymbolFont <%-notificationFontIcon%> notification-fontIcons-size \"></span></td>" +
                "<td style=\"width:10%\"><button id=\"btnViewDetails\" class=\"notificationbutton\" ><%-viewDetailsText%> <span class=\"CCFSymbolFont moreSymbol \"></span></button></td>" +
                "<td style=\"width:5%\"><button id=\"btnClose\" class=\"notificationbutton\" title=\"" +
                GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_HideNotification_Tooltip") +
                "\"><span class=\"CCFSymbolFont closeSymbol notification-fontIcons-size\"></button></td>" +
                "</tr>" +
                "<tr>" +
                "<td id=\"allMessages\" colspan=\"3\" ></td>" +
                "</tr>" +
                "</table>",
                this.GetTemplateData());
        }

        /* Initialize method */
        NotificationView.prototype.initialize = function() {
            this.events = {
                "click #btnViewDetails": this.clickViewDetailsHandler,
                "click #btnClose": this.clickCloseHandler
            };
        };
        /* NotificationView render method */
        NotificationView.prototype.render = function() {
            this.$el.addClass("notification");
            this.$el.append(this._NotificationAreatemplate);
            this.appendChildViews();
            this.applyCSS();
            return this;
        };
        /* Append child views depending on number of messages to be displayed.
        If there is only one message then Notification will contain single message with close button
        If there are multiple messages then there will be Notification with summary message at the top and button to view other messages.
        */
        NotificationView.prototype.appendChildViews = function() {
            // If only single message is appended by user, then in summary show that message with close button.
            if (this._messages.length == 1) {
                this.$el.find("#summaryMessasge").append(this._messages[0].message);
                this.$el.find("#summaryMessasge").attr("title", this._messages[0].message);
                this.$el.find("#btnViewDetails").hide();
            } else if (this._summaryMessage != undefined) {
                this.$el.find("#summaryMessasge").append(this._summaryMessage.message);
                this.$el.find("#summaryMessasge").attr("title", this._summaryMessage.message);
                // If there are no messages then, only summary will be displayed with close button(Success scenario)
                if (this._messages.length == 0) {
                    this.$el.find("#btnViewDetails").hide();
                } else if (this._messages.length > 1) {
                    this._allmessagesView = new GenericWorkflowDesigner.MessagesView({
                        "SummaryType": this._summaryMessage.messageType,
                        "AllMessages": this._messages
                    });
                    this.$el.find("#allMessages").append(this._allmessagesView.render().$el).hide();
                }
            }
        };
        /* View Details button handler */
        NotificationView.prototype.clickViewDetailsHandler = function() {
            this.$el.find("#allMessages").toggle();
        };
        /* Close button handler */
        NotificationView.prototype.clickCloseHandler = function() {
            this._parent.css("display", "none");
            // Expand the workspace wrapper after removal of the notification view
            var workspaceWrapperHeight = parseInt($(".workspaceWrapper").css("height"), 10);
            workspaceWrapperHeight = workspaceWrapperHeight + parseInt($(this._parent).css("height"), 10);
            $(".workspaceWrapper").attr("style", "height:" + workspaceWrapperHeight + "px !important");
            // Expand the toolpane height after removal of the notification view
            var toolpaneHeight = parseInt($("#toolpane").css("height"), 10);
            toolpaneHeight = toolpaneHeight + parseInt($(this._parent).css("height"), 10);
            $("#toolpane").attr("style", "height:" + toolpaneHeight + "px !important");
            GenericWorkflowDesigner.Settings.notification.activateButtonClicked = false;
        };
        /* Apply CSS to notification area. */
        NotificationView.prototype.applyCSS = function() {
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
        /* Get template data to be used in displaying notification */
        NotificationView.prototype.GetTemplateData = function() {
            /* Default value would always be errorNotificationSymbol */
            var notificationFontIcon = "errorNotificationSymbol";
            /* Change the notificationFontIcon based on the messageType */
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
            var viewDetailsText = GenericWorkflowDesigner.Settings.tileInformationFactory
                .GetLocalizedString("GenericWorkflowDesignerControl_ViewDetails");
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
(function(GenericWorkflowDesigner) {
    /** class for checking properties of browser */
    var Browser = (function() {
        function Browser() {
        }

        /** Check if the browser is firefox
        */
        Browser.isFireFox = function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Get the position for a given activity
    */
    var DefaultActivityPositionCalculator = (function() {
        function DefaultActivityPositionCalculator() {
        }

        /** Summary: Get the position for a given activity
        */
        DefaultActivityPositionCalculator.prototype.calculate = function(activityModel, row, column) {
            activityModel.setRow(row);
            activityModel.setCol(column);
            var children = activityModel.getChildActivitiesSorted();
            var step = 0;
            for (var i = 0; i < children.length; i++) {
                DefaultActivityPositionCalculator.maxRow += step;
                step = 1;
                GenericWorkflowDesigner.Settings.activityPositionCalculatorFactory
                    .getCalculator(children[i].getActivityTypeId())
                    .calculate(children[i], DefaultActivityPositionCalculator.maxRow, column + 1);
            }
        };
        /** Draws the connector between two activities.
                * @param parentActivity: The parent activity.
                * @param childActivity: The child activity.
                */
        DefaultActivityPositionCalculator.prototype.getLineConnectors = function(parentActivity, childActivity) {
            return GenericWorkflowDesigner.Settings.lineConnectorProviderFactory
                .getLineConnectorProvider(parentActivity, childActivity).getLineConnectors();
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
(function(GenericWorkflowDesigner) {
    /**
    * Get the position calculator for a given activity
    */
    var DefaultActivityPositionCalculatorFactory = (function() {
        function DefaultActivityPositionCalculatorFactory() {
            this.cachedCalculators = {};
        }

        /** Get the position calculator for a given activity. */
        DefaultActivityPositionCalculatorFactory.prototype.getCalculator = function(activityType) {
            var calculator = this.cachedCalculators[activityType];
            if (calculator == null || calculator == undefined) {
                calculator = this.initializeCalculator(activityType);
                this.cachedCalculators[activityType] = calculator;
            }
            return calculator;
        };
        /** Initialize a new calculator for a given activity type. */
        DefaultActivityPositionCalculatorFactory.prototype.initializeCalculator = function(activityType) {
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
(function(GenericWorkflowDesigner) {
    var MouseWheelBehavior = (function() {
        function MouseWheelBehavior() {
        }

        /** Calculate the scroll delta
         */
        MouseWheelBehavior.calculateMouseWheelScrollOffset = function(e) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Copy button interaction
    */
    'use strict';
    var CopyCommand = (function() {
        function CopyCommand() {
        }

        CopyCommand.prototype.execute = function() {
            this.copyActivities();
        };
        /** Copies activities */
        CopyCommand.prototype.copyActivities = function() {
            GenericWorkflowDesigner.Settings.workflowTree
                .setCopiedActivities(GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities());
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Cut button interaction
    */
    'use strict';
    var CutCommand = (function() {
        function CutCommand() {
        }

        CutCommand.prototype.execute = function() {
            var selectedActivities = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities();
            if (CommonTypes.Types.Object.isNullOrUndefined(selectedActivities) || selectedActivities.length <= 0) {
                return;
            }
            // Make a copy the selected activities
            var copiedActivites = [];
            jQuery.each(selectedActivities,
                function(index, activity) {
                    var copiedActivity = activity.getCloneOfActivity();
                    copiedActivites.push(copiedActivity);
                });
            // Set the copiedactivites to newly cloned activities, which will be used for Paste operation
            GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities(copiedActivites);
            GenericWorkflowDesigner.ActivityDeleteHandler.prototype.deleteSelectedActivities();
            CutCommand.cutInProgress = true; // make it false when Paste is done
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Copy button interaction
    */
    'use strict';
    var DeleteCommand = (function() {
        function DeleteCommand() {
        }

        //execute delete
        DeleteCommand.prototype.execute = function() {
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
(function(GenericWorkflowDesigner) {
    var ZoomItem = (function(_super) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Copy button interaction
    */
    'use strict';
    var FitToScreenCommand = (function() {
        function FitToScreenCommand() {
        }

        FitToScreenCommand.prototype.execute = function() {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            // Hide any Tile Details sections present on Canvas, to ensure scrollbars do not appear
            // TODO (v-sacbh) 28th Sept 2016: Once all the changes for Bug 348807 are in place, we will remove the below showHideSeeDetails call
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.showHideSeeDetails);
            // Change the padding level of the zoom container to allow error messages to be displayed
            var currentZoomContainerPadding = parseInt($("#" +
                GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
            // Set the padding value for unit zoom if it has not already been set
            if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 &&
                GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
            }
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
            var transformMatrix = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).css("transform");
            var currentScale, arrValues, canvasWidth, zoomRatio;
            if (transformMatrix.search('matrix3d') != -1) {
                arrValues = transformMatrix.replace('matrix3d(', '').replace(')', '').split(',');
                currentScale = arrValues[0]; // get target current scale
            } else {
                arrValues = transformMatrix.replace('matrix(', '').replace(')', '').split(',');
                currentScale = arrValues[3]; // get target current scale
            }
            canvasWidth = $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width() * currentScale;
            var scaleToAdd = (($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).width() -
                    canvasWidth) /
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width());
            zoomRatio = (canvasWidth / $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).width()
                ) +
                scaleToAdd;
            GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = zoomRatio;
            $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                .smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
            $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                .smartZoom("zoom", scaleToAdd, null, GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
            // Using Math.ceil to avoid a value of zero, which prevents further multiplication/division
            $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId)
                .css("padding-top",
                    Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio *
                        GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) +
                    "px");
            GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
            GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasFitToScreenEvent,
                $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
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
(function(GenericWorkflowDesigner) {
    var ToolBarItem = (function(_super) {
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Paste button interaction
    */
    'use strict';
    var PasteCommand = (function() {
        function PasteCommand() {
            // current activity
            this.currentActivity = null;
        }

        PasteCommand.prototype.execute = function() {
            this.pasteActivities();
        };
        /** Pastes activities */
        PasteCommand.prototype.pasteActivities = function() {
            var self = this;
            self.currentActivity = GenericWorkflowDesigner.Settings.workflowTree.getSelectedActivities()[0];
            var copiedActivities = GenericWorkflowDesigner.Settings.workflowTree.getCopiedActivities();
            if (copiedActivities.length <= 0) {
                return;
            }
            var extractor = new GenericWorkflowDesigner
                .ConnectedComponentsExtractor(GenericWorkflowDesigner.Settings.workflowTree.getAllConcreteActivities());
            var connectedComponents = extractor.getConnectedComponentsFromSelection(copiedActivities);
            var promise = null;
            jQuery.each(connectedComponents,
                function(index, connectedComponent) {
                    if (promise == null) {
                        promise = self.pasteComponent(connectedComponent);
                    } else {
                        promise = promise.then(function() {
                            return self.pasteComponent(connectedComponent);
                        });
                    }
                });
            promise.done(function() {
                GenericWorkflowDesigner.ActivityDefinitionModel.supportedEvents.paste.trigger(self.currentActivity);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.canvasRefresh);
                if (GenericWorkflowDesigner.CutCommand.cutInProgress) {
                    GenericWorkflowDesigner.CutCommand.cutInProgress = false;
                    GenericWorkflowDesigner.Settings.workflowTree.setCopiedActivities([]);
                }
                GenericWorkflowDesigner.eventManager
                    .trigger(GenericWorkflowDesigner.FrameworkEvents.refreshToolbarItems);
            });
        };
        PasteCommand.prototype.pasteComponent = function(connectedComponent) {
            var self = this;
            var deferred = $.Deferred();
            var dropHandler = GenericWorkflowDesigner.Settings.slotHandlerFactory
                .createDropHandler(this.currentActivity);
            // Create new activities out of the ones present in connectedComponent
            // Remember the client ids parent structure and assign actual parent ids when activities are saved on server
            var originalActivities = connectedComponent.getNodes();
            var originalRootActivity = connectedComponent.getRoot();
            var originalActivitiesParentsMap = [];
            var pastedToOriginalClientIdMap = [];
            var originalToPastedClientIdMap = [];
            var pastedActivities = [];
            var pastedRootActivity;
            jQuery.each(originalActivities,
                function(index, originalActivity) {
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
            var pastedActivitiesParentsMap = self
                .createPastedActivitiesClientIdsParentMap(pastedActivities,
                    pastedRootActivity,
                    pastedToOriginalClientIdMap,
                    originalToPastedClientIdMap,
                    originalActivitiesParentsMap);
            self.savePastedActivitiesAndSetParentIds(pastedActivities, pastedRootActivity, pastedActivitiesParentsMap)
                .done(function() {
                    var componentToDrop = new GenericWorkflowDesigner.ConnectedComponent(pastedRootActivity);
                    dropHandler.drop(componentToDrop).done(function() {
                        deferred.resolve();
                    });
                });
            return deferred.promise();
        };
        PasteCommand.prototype
            .createPastedActivitiesClientIdsParentMap =
            function(pastedActivities,
                pastedRootActivity,
                pastedToOriginalClientIdMap,
                originalToPastedClientIdMap,
                originalActivitiesParentsMap) {
                var pastedActivitiesParentsMap = [];
                jQuery.each(pastedActivities,
                    function(index, pastedActivity) {
                        if (pastedActivity == pastedRootActivity) {
                            // Not setting a new parent for root activity 
                            return;
                        }
                        var parentOfOldMatchingActivity = originalActivitiesParentsMap[pastedToOriginalClientIdMap[
                            pastedActivity.cid]];
                        pastedActivitiesParentsMap[pastedActivity
                            .cid] = originalToPastedClientIdMap[parentOfOldMatchingActivity];
                    });
                return pastedActivitiesParentsMap;
            };
        PasteCommand.prototype
            .savePastedActivitiesAndSetParentIds = function(pastedActivities,
                pastedRootActivity,
                pastedActivitiesParentsMap) {
                var deferred = $.Deferred();
                var promises = [];
                jQuery.each(pastedActivities,
                    function(index, newItem) {
                        promises.push(newItem.save());
                    });
                var serverIdsMap = [];
                $.when.apply(self, promises).done(function() {
                    jQuery.each(pastedActivities,
                        function(index, newItem) {
                            // Populate the server ids map to the client ids once activities are saved
                            serverIdsMap[newItem.cid] = newItem.getActivityID();
                            GenericWorkflowDesigner.Settings.workflowTree.add(newItem);
                        });
                    promises = [];
                    jQuery.each(pastedActivities,
                        function(index, pastedActivity) {
                            if (pastedActivity == pastedRootActivity) {
                                return;
                            }
                            var realParentId = serverIdsMap[pastedActivitiesParentsMap[pastedActivity.cid]];
                            pastedActivity.setParentActivityID(realParentId);
                            promises.push(pastedActivity.save());
                        });
                    $.when.apply(self, promises).done(function() {
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Copy button interaction
    */
    'use strict';
    var ZoomInCommand = (function() {
        function ZoomInCommand() {
        }

        ZoomInCommand.prototype.execute = function() {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            if (GenericWorkflowDesigner.canZoomIn()) {
                // Change the padding level of the zoom container to allow error messages to be displayed
                var currentZoomContainerPadding =
                    parseInt($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
                // Set the padding value for unit zoom if it has not already been set
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 &&
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
                }
                GenericWorkflowDesigner.ZoomConstants.currentZoomRatio += GenericWorkflowDesigner.ZoomConstants
                    .zoomScale;
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio >
                    GenericWorkflowDesigner.ZoomConstants.maxZoomRatio)
                    GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = GenericWorkflowDesigner.ZoomConstants
                        .maxZoomRatio;
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                    .smartZoom("zoom",
                        GenericWorkflowDesigner.ZoomConstants.zoomScale,
                        null,
                        GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                    .smartZoom("zoom",
                        GenericWorkflowDesigner.ZoomConstants.zoomScale,
                        null,
                        GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                // Using Math.ceil to avoid a value of zero, which prevents further multiplication
                $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId)
                    .css("padding-top",
                        Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio *
                            GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) +
                        "px");
                GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
                GenericWorkflowDesigner.eventManager
                    .trigger(GenericWorkflowDesigner.FrameworkEvents.canvasZoomInEvent,
                        $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
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
(function(GenericWorkflowDesigner) {
    /**
    * Reacts on Copy button interaction
    */
    'use strict';
    var ZoomOutCommand = (function() {
        function ZoomOutCommand() {
        }

        ZoomOutCommand.prototype.execute = function() {
            var stopwatch = new GenericWorkflowDesigner.Stopwatch();
            stopwatch.start();
            if (GenericWorkflowDesigner.canZoomOut()) {
                // Change the padding level of the zoom container to allow error messages to be displayed
                var currentZoomContainerPadding =
                    parseInt($("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId).css("padding-top"));
                // Set the padding value for unit zoom if it has not already been set
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio == 1 &&
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom == 0) {
                    GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom = currentZoomContainerPadding;
                }
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId).smartZoom();
                GenericWorkflowDesigner.ZoomConstants.currentZoomRatio -= GenericWorkflowDesigner.ZoomConstants
                    .zoomScale;
                if (GenericWorkflowDesigner.ZoomConstants.currentZoomRatio <
                    GenericWorkflowDesigner.ZoomConstants.minZoomRatio)
                    GenericWorkflowDesigner.ZoomConstants.currentZoomRatio = GenericWorkflowDesigner.ZoomConstants
                        .minZoomRatio;
                $("#" + GenericWorkflowDesigner.ZoomConstants.targetZoomId)
                    .smartZoom("zoom",
                        GenericWorkflowDesigner.ZoomConstants.zoomScale * -1,
                        null,
                        GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId).smartZoom();
                $("#" + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)
                    .smartZoom("zoom",
                        GenericWorkflowDesigner.ZoomConstants.zoomScale * -1,
                        null,
                        GenericWorkflowDesigner.ZoomConstants.zoomAnimateDuration);
                // Using Math.ceil to avoid a value of zero, which prevents further multiplication
                $("#" + GenericWorkflowDesigner.ZoomConstants.zoomParentContainerId)
                    .css("padding-top",
                        Math.ceil(GenericWorkflowDesigner.ZoomConstants.currentZoomRatio *
                            GenericWorkflowDesigner.ZoomConstants.canvasPaddingAtUnitZoom) +
                        "px");
                GenericWorkflowDesigner.Settings.rerenderMinimapThroughDragDropFlag = true;
                GenericWorkflowDesigner.eventManager
                    .trigger(GenericWorkflowDesigner.FrameworkEvents.canvasZoomOutEvent,
                        $('div#' + GenericWorkflowDesigner.ZoomConstants.hiddenTargetZoomId)[0]);
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
(function(GenericWorkflowDesigner) {
    'use strict';
    var ZoomConstants = (function() {
        function ZoomConstants() {
        }

        ZoomConstants.zoomAnimateDuration = 100; //milliseconds
        ZoomConstants.zoomScale = 0.1;
        ZoomConstants.currentZoomRatio = 1;
        ZoomConstants.initialCanvasWidth = 0;
        ZoomConstants.initialCanvasHeight = 0;
        ZoomConstants.maxZoomRatio = 3;
        ZoomConstants.minZoomRatio = 0.25;
        // This will be set whenever the padding is changed, and used to set padding after zoom/fit to screen operations
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
(function(GenericWorkflowDesigner) {
    var DefaultActivityDefinitionFactory = (function() {
        function DefaultActivityDefinitionFactory() {
        }

        /** Creates an activity.
        * @param activityType: The type of the activity.
        */
        DefaultActivityDefinitionFactory.prototype.createActivity = function(activityType) {
            switch (activityType) {
            case GenericWorkflowDesigner.ActivityType.Empty:
                return new GenericWorkflowDesigner.EmptyActivity();
            default:
                return new GenericWorkflowDesigner.ActivityDefinitionModel();
            }
        };
        /** Converts an ActivityDefinitionModel to a Concrete Activity
        * @param activity: The activity to convert.
        * @return : The concrete activity.
        */
        DefaultActivityDefinitionFactory.prototype.convertToConcreteActivity = function(activity) {
            var concreteActivity = this.createActivity(activity.getActivityTypeID());
            concreteActivity.setActivityID(activity.getActivityID());
            concreteActivity.setWorkflowID(activity.getWorkflowID());
            concreteActivity.setParentActivityID(activity.getParentActivityID());
            concreteActivity.setParentBranchID(activity.getParentBranchID());
            concreteActivity.setProperties(activity.getProperties());
            return concreteActivity;
        };
        DefaultActivityDefinitionFactory.prototype.convertToConcreteActivityFromJSON = function(activityJSON) {
            // TODO: Implement this correctly
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
(function(GenericWorkflowDesigner) {
    var GlobalButtonModel = (function() {
        /* Constructor*/
        function GlobalButtonModel() {
            this._buttonList = new Array();
        }

        /* add Global component */
        GlobalButtonModel.prototype.addButton = function(newButton) {
            this._buttonList.push(newButton);
        };
        /* show Global component */
        GlobalButtonModel.prototype.renderButtons = function() {
            var globalArea = new GenericWorkflowDesigner.AddGlobalAreaView();
            globalArea.render();
            this._buttonList.forEach(function(button) {
                button.render();
            });
        };
        return GlobalButtonModel;
    })();
    GenericWorkflowDesigner.GlobalButtonModel = GlobalButtonModel;
})(GenericWorkflowDesigner || (GenericWorkflowDesigner = {}));