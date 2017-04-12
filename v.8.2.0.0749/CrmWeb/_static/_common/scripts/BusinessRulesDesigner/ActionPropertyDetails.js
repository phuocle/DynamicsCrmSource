var __extends = (this && this.__extends) ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d; }

        __.prototype = b.prototype;
        d.prototype = new __();
    };
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var ActionViewDescriptor = (function() {
            function ActionViewDescriptor() {
            }

            return ActionViewDescriptor;
        })();
        ActionPropertyPage.ActionViewDescriptor = ActionViewDescriptor;
        var SetAttributeValueViewDescriptor = (function(_super) {
            __extends(SetAttributeValueViewDescriptor, _super);

            function SetAttributeValueViewDescriptor() {
                _super.apply(this, arguments);
            }

            return SetAttributeValueViewDescriptor;
        })(ActionViewDescriptor);
        ActionPropertyPage.SetAttributeValueViewDescriptor = SetAttributeValueViewDescriptor;
        var FinalView = (function() {
            function FinalView() {
            }

            return FinalView;
        })();
        ActionPropertyPage.FinalView = FinalView;
        var Dictionary = (function() {
            function Dictionary() {
            }

            return Dictionary;
        })();
        ActionPropertyPage.Dictionary = Dictionary;
        (function(ActionOperators) {
            ActionOperators[ActionOperators["Value"] = 0] = "Value";
            ActionOperators[ActionOperators["Field"] = 1] = "Field";
            ActionOperators[ActionOperators["Formula"] = 2] = "Formula";
            ActionOperators[ActionOperators["SetMessage"] = 3] = "SetMessage";
            ActionOperators[ActionOperators["Visibility"] = 4] = "Visibility";
            ActionOperators[ActionOperators["FieldRequired"] = 5] = "FieldRequired";
            ActionOperators[ActionOperators["DisplayMode"] = 6] = "DisplayMode";
            ActionOperators[ActionOperators["Clear"] = 7] = "Clear";
        })(ActionPropertyPage.ActionOperators || (ActionPropertyPage.ActionOperators = {}));
        var ActionOperators = ActionPropertyPage.ActionOperators;
        (function(DisplayModeTypes) {
            DisplayModeTypes[DisplayModeTypes["Lock"] = 0] = "Lock";
            DisplayModeTypes[DisplayModeTypes["Unlock"] = 1] = "Unlock";
        })(ActionPropertyPage.DisplayModeTypes || (ActionPropertyPage.DisplayModeTypes = {}));
        var DisplayModeTypes = ActionPropertyPage.DisplayModeTypes;
        (function(FieldRequiredTypes) {
            FieldRequiredTypes[FieldRequiredTypes["Required"] = 0] = "Required";
            FieldRequiredTypes[FieldRequiredTypes["NotRequired"] = 1] = "NotRequired";
        })(ActionPropertyPage.FieldRequiredTypes || (ActionPropertyPage.FieldRequiredTypes = {}));
        var FieldRequiredTypes = ActionPropertyPage.FieldRequiredTypes;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="IValid.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//---------------------------------------------------------------------------------------------
//TODO : Remove this class
var MscrmControls;
(function(MscrmControls) {
    var Common;
    (function(Common) {
        var View;
        (function(View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var EditViewBase = (function(_super) {
                __extends(EditViewBase, _super);

                function EditViewBase(options) {
                    _super.call(this, options);
                    this.get = Util.getValue(options, 'get', this.get_);
                    this.set = Util.getValue(options, 'set', this.set_);
                    var self = this;
                    _.bindAll(this, 'render');
                }

                //Dummy get if not specified
                EditViewBase.prototype.get_ = function() {
                };
                //Dummy set if not specified
                EditViewBase.prototype.set_ = function(any) {
                };
                return EditViewBase;
            })(Backbone.View);
            View.EditViewBase = EditViewBase;
        })(View = Common.View || (Common.View = {}));
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="DateTimeEdit.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// DateTimeEditView for rendering date time
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="./IValid.ts"/>
var MscrmControls;
(function(MscrmControls) {
    var Common;
    (function(Common) {
        var View;
        (function(View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var DateTimeUtil = MscrmControls.ProcessDesigner.DateTimeUtil;
            //TODO : Add date localization
            //TODO : Add ebility to edit time
            var DateTimeEditView = (function(_super) {
                __extends(DateTimeEditView, _super);

                function DateTimeEditView(options) {
                    options.tagName = Util.getStringValue(options, 'tagName', 'div');
                    _super.call(this, options);
                    this.isTimeRendered = Util.getBooleanValue(options, 'isTimeRendered', true);
                    this.timeInterval = Util.getIntValue(options, 'timeInterval', 30);
                    this.dateFormat = Util.getStringValue(options, 'dateFormat', 'm/d/yy');
                    this.isDateValid = true;
                    this.isTimeValid = true;
                    this.dateTimeUtil = new DateTimeUtil(options);
                    _.bindAll(this);
                    this.initializeInlineControl();
                }

                DateTimeEditView.prototype.initialize = function() {
                };
                DateTimeEditView.prototype.render = function() {
                    var self = this;
                    this.$el = this.inlineControlView.get_chromeElement();
                    //Attaching events on control
                    this.$el.find("#DateInput").on('change', this.dateChanged);
                    this.$el.find("#DateInput").on('keydown', this.keyPressedForDate);
                    this.$el.find("#DateInput").addClass("prop-input");
                    this.$el.find("#" + this.dateTimeElementId + "_iimg").attr("tabindex", 0);
                    if (this.isTimeRendered) {
                        var timeElement = this.$el.find("#" + this.dateTimeElementId + "_iTimeInput");
                        timeElement.on('change', this.timeChanged);
                        timeElement.addClass("prop-exp-input");
                        timeElement.attr("tabindex", 0);
                        if (!(timeElement.hasClass("ms-crm-ReadOnly"))) {
                            this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex", 0);
                        }
                        if (timeElement.val().length > 0) {
                            if (timeElement.val() == " ") {
                                timeElement.attr("title",
                                    MscrmControls.ProcessDesigner.MetadataProvider
                                    .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                            } else {
                                timeElement.attr("title", timeElement.val());
                            }
                        } else {
                            timeElement.attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    }
                    if (this.$el.find("#DateInput").val().length > 0) {
                        this.$el.find("#DateInput").attr("title", this.$el.find("#DateInput").val());
                    } else {
                        this.$el.find("#DateInput").attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                    return this;
                };
                DateTimeEditView.prototype.keyPressedForDate = function(event) {
                    if ((event.type == "keydown" && event.keyCode == 13)) {
                        this.dateChanged(event);
                        $("#DateInput").focus();
                    }
                };
                DateTimeEditView.prototype.updateDateTime = function(event) {
                    var dateTimeControlEditView = this.inlineControlView.get_editView();
                    ProcessControl.Configuration.PBLClientProxy.updateDateTimeControl(dateTimeControlEditView);
                    if (this.inlineControlView.get_validateResult().isValid) {
                        var dateTimeStr = dateTimeControlEditView.get_dataContext().get_attribute().get_rawValue();
                        if (dateTimeStr != null) {
                            var dateTimeGMT = ProcessControl.Configuration.PBLClientProxy
                                .getUserSettingTime(dateTimeStr, !this.isTimeRendered);
                            this.set(dateTimeGMT);
                        } else {
                            //Setting " " string for validation. 
                            this.set(" ");
                        }
                    } else {
                        //setting empty string incase of wrong user input
                        this.$el.find("#DateInput").val("");
                        this.inlineControlView.clearValidation();
                        this.$el.find("#DateInput").trigger("change");
                    }
                    event.stopPropagation();
                };
                DateTimeEditView.prototype.dateChanged = function(event) {
                    this.updateDateTime(event);
                    this.$el.find("#" + this.dateTimeElementId + "_iTimeInput").addClass("prop-exp-input");
                    if (!$("#" + this.dateTimeElementId + "_iTimeInput").hasClass("ms-crm-ReadOnly")) {
                        this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex", 0);
                    } else if ($("#" + this.dateTimeElementId + "_iTimeInput").hasClass("ms-crm-ReadOnly")) {
                        if (this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex") == "0") {
                            this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex", "");
                        }
                    }
                    if (event.currentTarget != null && event.currentTarget != undefined) {
                        $("." + $(event.currentTarget).prop("class").split(" ")[1] + "").focus();
                    }
                    if (this.$el.find("#DateInput").val().length > 0) {
                        this.$el.find("#DateInput").attr("title", this.$el.find("#DateInput").val());
                    } else {
                        this.$el.find("#DateInput").attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        this.$el.find("#" + this.dateTimeElementId + "_iTimeInput")
                            .attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                };
                DateTimeEditView.prototype.timeChanged = function(event) {
                    this.updateDateTime(event);
                    if (event.currentTarget != null && event.currentTarget != undefined) {
                        $("." + $(event.currentTarget).prop("class").split(" ")[0] + "").focus();
                    }
                    var timeElement = this.$el.find("#" + this.dateTimeElementId + "_iTimeInput");
                    if (timeElement.val().length > 0) {
                        if (timeElement.val() == " ") {
                            timeElement.attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        } else {
                            timeElement.attr("title", timeElement.val());
                        }
                    } else {
                        timeElement.attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                };
                DateTimeEditView.prototype.initializeInlineControl = function() {
                    var dateTimeContainerId = "dateTimeContainer";
                    if (document.getElementById(dateTimeContainerId) == null) {
                        var dateTimeContainer = document.createElement('div');
                        dateTimeContainer.style.visibility = "hidden";
                        dateTimeContainer.id = dateTimeContainerId;
                        document.body.appendChild(dateTimeContainer);
                    }
                    this.dateTimeElementId = "dateTimeContol_" + this.cid;
                    var element = ProcessControl.Configuration.PBLClientProxy
                        .buildChromeElement(this.dateTimeElementId);
                    $("#dateTimeContainer").html(element.get_jQueryObject());
                    var initialDateTime = null;
                    if (this.get() != null && this.get() != "" && this.get() != " ") {
                        if (this.isTimeRendered) {
                            initialDateTime = new Date(this.get());
                        } else {
                            initialDateTime = ProcessControl.Configuration.PBLClientProxy
                                .parseDateInvariant(this.get());
                        }
                    }
                    this.inlineControlView = ProcessControl.Configuration.PBLClientProxy
                        .createInlineDateTimeControl(element.get_jQueryObject(),
                            this.dateTimeElementId,
                            initialDateTime,
                            dateTimeContainerId,
                            !this.isTimeRendered);
                    this.inlineControlView.clearValidation();
                    var editElementId = this.inlineControlView.get_editView().get_editElement()[0].id;
                    //Removing the edit element label
                    $('label[for=' + editElementId + ']').remove();
                    //removing the control margins to align with Designer
                    $("#" + this.dateTimeElementId + " .ms-crm-Inline-Edit").css("margin-left", "0");
                    $("#" + this.dateTimeElementId + "_warn").css("width", "0");
                    $("#" + this.dateTimeElementId + "_warn").css("height", "0");
                    $("#" + this.dateTimeElementId + " .ms-crm-InlineDateTime-IconCell")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Calendar"));
                    $("#" + this.dateTimeElementId + "_iimg")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Calendar"));
                    $("#" + this.dateTimeElementId + " .ms-crm-InlineDateTime-TimeCell")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                    $("#" + this.dateTimeElementId + " .ms-crm-ImageStrip-inlineedit_time_icon_disabled")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                    $("#" + this.dateTimeElementId + " .ms-crm-ImageStrip-inlineedit_time_icon")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                    $("#" + this.dateTimeElementId + "_iTimeInput")
                        .attr("title",
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                };
                return DateTimeEditView;
            })(View.EditViewBase);
            View.DateTimeEditView = DateTimeEditView;
        })(View = Common.View || (Common.View = {}));
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="TextBoxEditView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Parent for every textbox based views
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="./IValid.ts"/>
var MscrmControls;
(function(MscrmControls) {
    var Common;
    (function(Common) {
        var View;
        (function(View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
            var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
            var ActionOperators = MscrmControls.ActionPropertyPage.ActionOperators;
            var TextBoxEditView = (function(_super) {
                __extends(TextBoxEditView, _super);

                function TextBoxEditView(options) {
                    options.tagName = Util.getStringValue(options, 'tagName', 'input');
                    _super.call(this, options);
                    var self = this;
                    var model = self.model;
                    var attributeType;
                    if (!Util.isNull(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()]))
                        attributeType = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()]
                            .attributeType;
                    this.$el.on("change",
                        function(event) {
                            var value = self.$el.val();
                            var oldValue;
                            var isNumber = false;
                            var model = self.model;
                            var isFormula = (model.pblActionActivity.operator === ActionOperators.Formula);
                            switch (attributeType) {
                            case AttributeType.DateTime:
                                // For date time type attributes with the formula operator, formatting is required
                                if (!isFormula) {
                                    break;
                                }
                            case AttributeType.BigInt:
                            case AttributeType.Decimal:
                            case AttributeType.Double:
                            case AttributeType.Integer:
                            case AttributeType.Money:
                                if (!Util.isNull(value) && value.length > 0 && value != 'NaN') {
                                    oldValue = value;
                                    value = Mscrm.NumberUtility.locStringToFloat(value.trim()).toString();
                                    if (value == "NaN") {
                                        // Restore the old value; this is an error value, but we don't want to display 'NaN'
                                        value = oldValue;
                                    }
                                }
                                isNumber = true;
                                break;
                            }
                            self.set(value);
                            if (isNumber) {
                                switch (attributeType) {
                                case AttributeType.DateTime:
                                    // For date time type attributes with the formula operator, formatting is required
                                    if (!isFormula) {
                                        break;
                                    }
                                case AttributeType.BigInt:
                                case AttributeType.Decimal:
                                case AttributeType.Double:
                                case AttributeType.Integer:
                                case AttributeType.Money:
                                    if (!Util.isNull(value) &&
                                        !Util.isEmptyString(value) &&
                                        value != 'NaN' &&
                                        !isNaN(value) &&
                                        !Util.isNull(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model
                                            .getAttribute()]) &&
                                        MetadataProxy.SourceAttributesMap[model.entityLogicalName][model
                                            .getAttribute()] !=
                                        undefined) {
                                        // Datetime attributes won't have a precision value, so we need to check
                                        var precision = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model
                                            .getAttribute()].precision;
                                        if (!Util.isNull(precision) && precision != undefined) {
                                            precision =
                                                parseInt(MetadataProxy.SourceAttributesMap[model
                                                        .entityLogicalName][model.getAttribute()].precision,
                                                    10);
                                        } else {
                                            precision = 0;
                                        }
                                        value = Mscrm.NumberUtility.addFormatting(parseFloat(value.trim()), precision);
                                        self.$el.val(value);
                                    }
                                    break;
                                }
                            }
                        });
                }

                TextBoxEditView.prototype.initialize = function() {
                };
                TextBoxEditView.prototype.render = function() {
                    var model = this.model;
                    if (model.getValue() == null || model.getValue().length <= 0)
                        return this;
                    var isFormula = (model.pblActionActivity.operator === ActionOperators.Formula);
                    var value = model.getValue();
                    if (value instanceof Array)
                        value = value[0];
                    var attributeType;
                    if (!Util.isNull(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model
                        .getAttribute()])) {
                        attributeType = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()]
                            .attributeType;
                        switch (attributeType) {
                        case AttributeType.DateTime:
                            // For date time type attributes with the formula operator, formatting is required
                            if (!isFormula) {
                                break;
                            }
                        case AttributeType.BigInt:
                        case AttributeType.Decimal:
                        case AttributeType.Double:
                        case AttributeType.Integer:
                        case AttributeType.Money:
                            if (!Util.isNull(value) && !Util.isEmptyString(value) && value != 'NaN' && !isNaN(value)) {
                                // Datetime attributes won't have a precision value, so we need to check
                                var precision = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model
                                    .getAttribute()].precision;
                                if (!Util.isNull(precision) && precision != undefined) {
                                    precision = parseInt(MetadataProxy.SourceAttributesMap[model
                                            .entityLogicalName][model.getAttribute()].precision,
                                        10);
                                } else {
                                    precision = 0;
                                }
                                value = Mscrm.NumberUtility.addFormatting(parseFloat(value.trim()), precision);
                                this.$el.val(value);
                            }
                            break;
                        }
                    }
                    return this;
                };
                return TextBoxEditView;
            })(View.EditViewBase);
            View.TextBoxEditView = TextBoxEditView;
        })(View = Common.View || (Common.View = {}));
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="LookupView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Lookup View for Condition Expression value field
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="./IValid.ts"/>
var MscrmControls;
(function(MscrmControls) {
    var Common;
    (function(Common) {
        var View;
        (function(View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var LookupEditView = (function(_super) {
                __extends(LookupEditView, _super);

                function LookupEditView(options) {
                    _super.call(this, options);
                    this.targetEntity = Util.getValue(options, 'targetEntity', []);
                    this.attribute = options.model.getAttribute();
                    this.entity = options.model.entityLogicalName;
                    this.isMulti = Util.getValue(options, 'isMulti', false);
                    this.getNameCB = Util.getValue(options, 'getNameCB', function() { return ''; });
                    this.setNameCB = Util.getValue(options, 'setNameCB', function() { return ''; });
                    this.enableLookup = Util.getValue(options, 'enableLookup', function() { return ''; });
                    this.setLookupEntity = Util.getValue(options, 'setLookupEntity', function() { return ''; });
                    _.bindAll(this, 'launchLookupDialog', 'lookupDialogCloseCallback');
                }

                LookupEditView.prototype.initialize = function() {
                    this.tagName = 'div';
                };
                /** Renders the lookup control */
                LookupEditView.prototype.render = function() {
                    var self = this;
                    self.$el.append("<input type='text' id='txtLookup_" +
                        this.cid +
                        "' name='lookup' class='field action-prop-lookup-textbox' /><span id='btnSearch_" +
                        this.cid +
                        "' class='prop-CCFSymbolFont prop-findSymbol prop-find-fontIcons-size prop-find' ></span>");
                    //Attaching events on control
                    this.$("#btnSearch_" + this.cid).on('click', this.launchLookupDialog);
                    this.$("#txtLookup_" + this.cid).on('click', this.launchLookupDialog);
                    this.$("#btnSearch_" + this.cid).keydown(function(event) {
                        if (event.which == 13) {
                            $("#" + event.target.id).trigger("click");
                        }
                        event.stopImmediatePropagation();
                    });
                    this.$("#txtLookup_" + this.cid).keydown(function(event) {
                        if (event.which == 13) {
                            $("#" + event.target.id).trigger("click");
                        }
                        event.stopImmediatePropagation();
                    });
                    this.selectedValue = this.get();
                    if (this.selectedValue) {
                        var displayName = this.getNameCB();
                        this.$("#txtLookup_" + this.cid).val(displayName);
                    }
                    if (this.$("#txtLookup_" + this.cid).val() == "") {
                        this.$("#txtLookup_" + this.cid)
                            .attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    } else {
                        this.$("#txtLookup_" + this.cid).attr("title", this.$("#txtLookup_" + this.cid).val());
                    }
                    return this;
                };
                /** Method that launches the lookup dialog */
                LookupEditView.prototype.launchLookupDialog = function(event) {
                    ProcessControl.Configuration.PBLClientProxy
                        .launchLookupDialog(this.entity, this.attribute, this.lookupDialogCloseCallback);
                };
                /** Callback method which fetches the selected item from the lookup dialog */
                LookupEditView.prototype.lookupDialogCloseCallback = function(dialogParams, callbackParams) {
                    var lookupControlItems = dialogParams["items"];
                    if (lookupControlItems.length > 0) {
                        this.enableLookup();
                        this.setLookupEntity([lookupControlItems[0].typename]);
                        this.setNameCB(lookupControlItems[0].name);
                        this.selectedValue = lookupControlItems[0].id;
                        this.set(this.selectedValue);
                    }
                };
                return LookupEditView;
            })(View.EditViewBase);
            View.LookupEditView = LookupEditView;
        })(View = Common.View || (Common.View = {}));
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ActionDetailsModel.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for action properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var formulaOperator = MscrmControls.ProcessDesigner.formulaOperator;
        var Formula = MscrmControls.ProcessDesigner.Formula;
        var FormulaValue = MscrmControls.ProcessDesigner.FormulaValue;
        var Field = MscrmControls.ProcessDesigner.Field;
        var StepLabel = MscrmControls.ProcessDesigner.StepLabel;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var ConditionOperator = MscrmControls.ProcessDesigner.ConditionOperator;
        var ActionDetailsModel = (function(_super) {
            __extends(ActionDetailsModel, _super);

            function ActionDetailsModel(options) {
                _super.call(this, options);
                this.pblActionActivity = options;
                this.entityLogicalName = options.entity.entityName;
                this.lookupProperties = {
                    islookup: false,
                    lookupLabel: "",
                    lookupValue: ""
                };
                if (!(MscrmControls.ProcessDesigner.Util.isNull(options.lookupProperties)) &&
                    options.lookupProperties.islookup &&
                    !options.value.lookup) {
                    this.lookupProperties = options.lookupProperties;
                }
                this.viewDescriptorProvider = new ActionPropertyPage.ViewDescriptorProvider(this.entityLogicalName);
                var self = this;
                this.listenTo(self,
                    "change",
                    function() {
                        self.pblActionActivity.validateOnChange();
                    });
                _.bindAll(this,
                    'getValue',
                    'setValue',
                    'getDisplayName',
                    'setDisplayName',
                    'setLookupDisplayName',
                    'getLookupDisplayName',
                    'setLookupValue',
                    'setLookupEntity',
                    'enableLookup',
                    'disableLookup');
            }

            ActionDetailsModel.prototype.setAttribute = function(value) {
                this.pblActionActivity.field = value;
                switch (this.pblActionActivity.getActivityTypeID()) {
                case "setAttributeValue":
                case "setDefaultValue":
                    this.pblActionActivity.operator = ActionPropertyPage.ActionOperators.Value;
                    this.pblActionActivity.value = "";
                    break;
                case "setMessage":
                    this.pblActionActivity.operator = ActionPropertyPage.ActionOperators.SetMessage;
                    var steplabel = new StepLabel();
                    steplabel.labelId = this.pblActionActivity.value.labelId;
                    steplabel.languageCode = this.pblActionActivity.value.languageCode;
                    steplabel.description = "";
                    this.pblActionActivity.value = steplabel;
                    break;
                case "setVisibility":
                    this.pblActionActivity.operator = ActionPropertyPage.ActionOperators.Visibility;
                    this.pblActionActivity.value = 1;
                    break;
                case "setFieldRequiredLevel":
                    this.pblActionActivity.operator = ActionPropertyPage.ActionOperators.FieldRequired;
                    this.pblActionActivity.value = 0;
                    break;
                case "setDisplayMode":
                    this.pblActionActivity.operator = ActionPropertyPage.ActionOperators.DisplayMode;
                    this.pblActionActivity.value = 1;
                    break;
                }
                this.trigger('change');
            };
            ActionDetailsModel.prototype.setType = function(value) {
                var exp = this.pblActionActivity;
                if (value == ActionPropertyPage.ActionOperators.Field) {
                    exp.operator = value;
                    var field = new Field();
                    field.field = "";
                    field.entity = new Microsoft.Crm.Workflow.Expressions
                        .PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    exp.value = field;
                } else if (value == ActionPropertyPage.ActionOperators.Formula) {
                    var attrField = new Field();
                    attrField.field = "NEW_EXP";
                    attrField.entity = new Microsoft.Crm.Workflow.Expressions
                        .PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    var formulaObj = new Formula();
                    formulaObj.attribute = attrField;
                    formulaObj.operator = formulaOperator.Add;
                    formulaObj.value = "";
                    formulaObj.valueType = ActionPropertyPage.ActionOperators.Value;
                    var valueObj = new FormulaValue(formulaObj);
                    exp.operator = value;
                    exp.value = valueObj;
                } else if (value == ActionPropertyPage.ActionOperators.Clear) {
                    this.disableLookup();
                    exp.operator = ActionPropertyPage.ActionOperators.Value;
                    exp.value = MscrmControls.ProcessDesigner.PBLStringConstants.NullStringForTypeClear;
                } else {
                    exp.operator = value;
                    exp.value = "";
                }
                this.trigger('change');
            };
            ActionDetailsModel.prototype.setValue = function(value) {
                if (this.pblActionActivity.operator == ActionPropertyPage.ActionOperators.Field) {
                    this.pblActionActivity.value.field = value;
                } else if (this.pblActionActivity.operator == ActionPropertyPage.ActionOperators.Visibility ||
                    this.pblActionActivity.operator == ActionPropertyPage.ActionOperators.DisplayMode) {
                    this.pblActionActivity.value = (value == "1") ? true : false;
                } else if (MetadataProxy.SourceAttributesMap[this.entityLogicalName][this.getAttribute()].dateFormat ==
                    "datetime") {
                    this.pblActionActivity.value = value;
                    this.trigger('changeEvent');
                } else {
                    if (this.lookupProperties.islookup == true) {
                        this.pblActionActivity.value.lookup["value"] = value;
                    } else {
                        this.pblActionActivity.value = value;
                    }
                    this.trigger('change');
                }
            };
            ActionDetailsModel.prototype.resetTypeValue = function() {
            };
            ActionDetailsModel.prototype.setFormula = function(value) {
                var newValue = value.value;
                // If this is a datetime or numerical formula value, it might have commas in it, so we need to format it
                if (MetadataProxy.SourceAttributesMap[this.entityLogicalName][this.getAttribute()] != null &&
                    MetadataProxy.SourceAttributesMap[this.entityLogicalName][this.getAttribute()] != undefined) {
                    var attributeType = MetadataProxy.SourceAttributesMap[this.entityLogicalName][this.getAttribute()]
                        .attributeType;
                    if (ActionDetailsModel.fieldTypesNeedingFormatting.indexOf(attributeType) > -1) {
                        if (newValue != null && newValue != undefined && newValue.length > 0) {
                            var oldValue = newValue;
                            newValue = Mscrm.NumberUtility.locStringToFloat(newValue.trim()).toString();
                            if (newValue == "NaN") {
                                // Restore the old value; this is an error value, but we don't want to display 'NaN'
                                newValue = oldValue;
                            }
                        }
                    }
                }
                if (!isNaN(newValue)) {
                    this.pblActionActivity.value = new FormulaValue(value);
                    this.trigger('change');
                }
            };
            ActionDetailsModel.prototype.setFormulaValueType = function(formulaValueType) {
                this.pblActionActivity.value.formula.valueType = formulaValueType;
                if (formulaValueType == ActionPropertyPage.ActionOperators.Field) {
                    var field = new Field();
                    var firstKey = Object.keys(MetadataProxy.NumericAttributesMap)[0];
                    MetadataProxy.getComparableAttributes(this.pblActionActivity.entity.entityName,
                        this.pblActionActivity.field,
                        firstKey).then(function(attributeList) {
                        for (var firstValueKey in attributeList) {
                            // get the first element
                            break;
                        }
                        field.field = attributeList[firstValueKey].logicalName;
                    });
                    field.entity = new Microsoft.Crm.Workflow.Expressions
                        .PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    this.pblActionActivity.value.formula.value = field;
                } else if (formulaValueType == ActionPropertyPage.ActionOperators.Value) {
                    this.pblActionActivity.value.formula.value = "";
                }
                this.trigger('change');
            };
            ActionDetailsModel.prototype.getViewDescriptor = function() {
                switch (this.pblActionActivity.getActivityTypeID()) {
                case "setAttributeValue":
                case "setDefaultValue":
                    return this.viewDescriptorProvider.getExpressionDescriptor(this.pblActionActivity);
                case "setMessage":
                case "setVisibility":
                case "setFieldRequiredLevel":
                case "setDisplayMode":
                    return this.viewDescriptorProvider.getActionExpressionDescriptor(this.pblActionActivity);
                }
            };
            ActionDetailsModel.prototype.updateLookupDisplayName = function(dName) {
                this.lookupProperties["lookupLabel"] = dName;
                this.pblActionActivity.value.lookup["label"] = dName;
            };
            ActionDetailsModel.prototype.updateDisplayName = function(uniqueId, entityNames) {
                if (uniqueId == null || uniqueId == undefined) {
                    return;
                }
                // Get the fieldname to be read
                _.each(entityNames,
                    function(entityName) {
                        var displayFieldName = MetadataProxy.getDisplayFieldName(entityName);
                        var _window = window;
                        var columns = [displayFieldName];
                        // Fetch the display name
                        _window.Xrm.Internal.messages.retrieve(entityName, uniqueId.toString(), columns)
                            .then(function(retrieveResponse) {
                                    if (retrieveResponse) {
                                        var responseEntity = retrieveResponse.entity;
                                        if (responseEntity) {
                                            var displayName = responseEntity.getValue(displayFieldName);
                                            this.lookupProperties["lookupLabel"] = displayName;
                                            this.trigger('change');
                                        }
                                    }
                                    //}.bind(this), Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
                                }.bind(this),
                                function() {});
                    }.bind(this));
            };
            ActionDetailsModel.prototype.getAttribute = function() {
                return this.pblActionActivity.field;
            };
            ActionDetailsModel.prototype.getValue = function() {
                if (this.pblActionActivity.operator == ActionPropertyPage.ActionOperators.Field) {
                    return this.pblActionActivity.value.field;
                } else {
                    return this.pblActionActivity.value;
                }
            };
            ActionDetailsModel.prototype.getErrorMessages = function() {
                return this.pblActionActivity.getErrorMessages();
            };
            ActionDetailsModel.prototype.getDisplayName = function() {
                return this.get('displayname');
            };
            ActionDetailsModel.prototype.setDisplayName = function(dName) {
                this.set("displayname", dName);
            };
            ActionDetailsModel.prototype.modifySource = function(value) {
                this.setSource(value);
                this.trigger('change');
            };
            ActionDetailsModel.prototype.modifyValueSource = function(value) {
                this.setValueSource(value);
                this.trigger('change');
            };
            ActionDetailsModel.prototype.modifyFormulaSource = function(value) {
                this.setFormulaSource(value);
                this.trigger('change');
            };
            ActionDetailsModel.prototype.modifyFormulaValueSource = function(value) {
                this.setFormulaValueSource(value);
                this.trigger('change');
            };
            ActionDetailsModel.prototype.setSource = function(value) {
                var self = this;
                self.pblActionActivity.entity = value;
                self.entityLogicalName = value.get_entityName();
                self.viewDescriptorProvider = new ActionPropertyPage.ViewDescriptorProvider(value.get_entityName());
                // We will need to update the model with the first attribute of the selected source
                MetadataProxy.getAttributeList(value.get_entityName()).then(function(attributeList) {
                    for (var firstKey in attributeList) {
                        // get the first element
                        break;
                    }
                    self.setAttribute(attributeList[firstKey].logicalName);
                });
            };
            ActionDetailsModel.prototype.setValueSource = function(value) {
                var self = this;
                // We will need to update the model with the first attribute of the selected source
                MetadataProxy.getComparableAttributes(self.pblActionActivity.entity.get_entityName(),
                    self.pblActionActivity.field,
                    value.get_entityName()).then(function(attributeList) {
                    for (var firstKey in attributeList) {
                        // get the first element
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        self.pblActionActivity.value.field = [attributeList[firstKey].logicalName];
                        self.pblActionActivity.value.fieldType = MetadataProxy
                            .getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                });
                self.pblActionActivity.value.entity = value;
            };
            ActionDetailsModel.prototype.setFormulaSource = function(value) {
                var self = this;
                // We will need to update the model with the first attribute of the selected source
                MetadataProxy.getComparableAttributes(self.pblActionActivity.entity.entityName,
                    self.pblActionActivity.field,
                    value.get_entityName()).then(function(attributeList) {
                    for (var firstKey in attributeList) {
                        // get the first element
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        //self.setAttribute(attributeList[firstKey].logicalName);
                        self.pblActionActivity.value.formula.attribute.field = attributeList[firstKey].logicalName;
                        self.pblActionActivity.value.formula.attribute.fieldType = MetadataProxy
                            .getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                });
                self.pblActionActivity.value.formula.attribute.entity = value;
            };
            ActionDetailsModel.prototype.setFormulaValueSource = function(value) {
                var self = this;
                // We will need to update the model with the first attribute of the selected source
                MetadataProxy.getComparableAttributes(self.pblActionActivity.entity.entityName,
                    self.pblActionActivity.field,
                    value.get_entityName()).then(function(attributeList) {
                    for (var firstKey in attributeList) {
                        // get the first element
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        self.pblActionActivity.value.formula.value.field = attributeList[firstKey].logicalName;
                        self.pblActionActivity.value.formula.value.fieldType = MetadataProxy
                            .getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                });
                self.pblActionActivity.value.formula.value.entity = value;
            };
            ActionDetailsModel.prototype.getLookupDisplayName = function() {
                return this.lookupProperties["lookupLabel"];
            };
            ActionDetailsModel.prototype.setLookupDisplayName = function(dName) {
                this.lookupProperties["lookupLabel"] = dName;
                this.pblActionActivity.value.lookup["label"] = dName;
                this.trigger('change');
            };
            ActionDetailsModel.prototype.setLookupValue = function(value) {
                this.lookupProperties.lookupValue = value;
                if (typeof (this.pblActionActivity.value) != "string") {
                    this.pblActionActivity.value.lookup["value"] = value;
                } else {
                    this.pblActionActivity.value = {};
                    this.pblActionActivity.value.lookup = {};
                    this.pblActionActivity.value.lookup["value"] = value;
                }
                //this.trigger('change');
            };
            ActionDetailsModel.prototype.setLookupEntity = function(entity) {
                this.lookupProperties.entity = entity;
                this.lookupProperties["lookupEntity"] = entity;
                this.pblActionActivity.value.lookup["entity"] = entity;
            };
            ActionDetailsModel.prototype.enableLookup = function() {
                this.lookupProperties.islookup = true;
                if (this.pblActionActivity.value == null ||
                    this.pblActionActivity.value == "" ||
                    this.pblActionActivity.value == undefined) {
                    this.pblActionActivity.value = {};
                    this.pblActionActivity.value.lookup = {};
                } else if (typeof (this.pblActionActivity.value) == "string") {
                    var guid = this.pblActionActivity.value;
                    this.pblActionActivity.value = {};
                    this.pblActionActivity.value.lookup = {};
                    this.pblActionActivity.value.lookup.value = guid;
                }
            };
            ActionDetailsModel.prototype.disableLookup = function() {
                this.lookupProperties.islookup = false;
                if (this.pblActionActivity.lookupProperties) {
                    this.pblActionActivity.lookupProperties.islookup = false;
                }
                this.pblActionActivity.value = "";
            };
            ActionDetailsModel.lookupFieldTypes = [AttributeType.Lookup, AttributeType.Owner, AttributeType.Customer];
            ActionDetailsModel.lookupStringOperators = [
                ConditionOperator.Contains, ConditionOperator.DoesNotContain, ConditionOperator.BeginsWith,
                ConditionOperator.DoesNotBeginWith, ConditionOperator.EndsWith, ConditionOperator.DoesNotEndWith
            ];
            ActionDetailsModel
                .fieldTypesNeedingFormatting = [
                    AttributeType.BigInt, AttributeType.DateTime, AttributeType.Decimal, AttributeType.Double,
                    AttributeType.Integer, AttributeType.Money
                ];
            return ActionDetailsModel;
        })(Backbone.Model);
        ActionPropertyPage.ActionDetailsModel = ActionDetailsModel;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ActionPropertiesModel.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for action properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var StepLabel = MscrmControls.ProcessDesigner.StepLabel;
        var ActionPropertiesModel = (function(_super) {
            __extends(ActionPropertiesModel, _super);

            function ActionPropertiesModel(options) {
                _super.call(this, options);
                this.entityLogicalName = options.entity.entityName;
                this.pblActionActivity = options;
                this.viewDescriptorProvider = new ActionPropertyPage.ViewDescriptorProvider(this.entityLogicalName);
                if (this.pblActionActivity.field == null &&
                    this.pblActionActivity.operator == null &&
                    this.pblActionActivity.value == null) {
                    this.setDefaultActionValues(this.pblActionActivity);
                }
            }

            ActionPropertiesModel.prototype.getViewDescriptor = function() {
                var finalView = new ActionPropertyPage.FinalView();
                switch (this.pblActionActivity.getActivityTypeID()) {
                case MscrmControls.ProcessDesigner.PblActivityType.customJavascriptStep:
                    finalView.viewDescriptor = this.viewDescriptorProvider
                        .customJavascriptViewDescriptor(this.pblActionActivity);
                    break;
                default:
                    var childView = new ActionPropertyPage.ActionDetailsView({
                        model: new ActionPropertyPage.ActionDetailsModel(this.pblActionActivity)
                    });
                    finalView.childView = childView;
                    finalView.viewDescriptor = this.viewDescriptorProvider.commonDataDescriptor(this.pblActionActivity);
                }
                return finalView;
            };
            ActionPropertiesModel.prototype.setDefaultActionValues = function(pblActionActivity) {
                switch (this.pblActionActivity.getActivityTypeID()) {
                case "setAttributeValue":
                case "setDefaultValue":
                    pblActionActivity.operator = ActionPropertyPage.ActionOperators.Value;
                    pblActionActivity.value = "";
                    break;
                case "setMessage":
                    var steplabel = new StepLabel();
                    steplabel.labelId = Random.Guid.NewGuid();
                    steplabel.languageCode = 1033;
                    steplabel.description = "";
                    pblActionActivity.value = steplabel;
                    pblActionActivity.operator = ActionPropertyPage.ActionOperators.SetMessage;
                    break;
                case "setDisplayMode":
                    pblActionActivity.value = 1;
                    pblActionActivity.operator = ActionPropertyPage.ActionOperators.DisplayMode;
                    break;
                case "setVisibility":
                    pblActionActivity.value = 1;
                    pblActionActivity.operator = ActionPropertyPage.ActionOperators.Visibility;
                    break;
                case "setFieldRequiredLevel":
                    pblActionActivity.value = 0;
                    pblActionActivity.operator = ActionPropertyPage.ActionOperators.FieldRequired;
                    break;
                }
            };
            return ActionPropertiesModel;
        })(Backbone.Model);
        ActionPropertyPage.ActionPropertiesModel = ActionPropertiesModel;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ActionDetailsView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for action properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var StepLabel = MscrmControls.ProcessDesigner.StepLabel;
        var LookupEditView = MscrmControls.Common.View.LookupEditView;
        var TextBoxEditView = MscrmControls.Common.View.TextBoxEditView;
        var DateTimeEditView = MscrmControls.Common.View.DateTimeEditView;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var DateFormat = MscrmControls.ProcessDesigner.Common.DateFormat;
        var DOMUtil = MscrmControls.ProcessDesigner.DOMUtil;
        var Util = MscrmControls.ProcessDesigner.Util;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ActionDetailsView = (function(_super) {
            __extends(ActionDetailsView, _super);

            function ActionDetailsView(options) {
                _super.call(this, options);
                switch (this.model.pblActionActivity.getActivityTypeID()) {
                case "setAttributeValue":
                case "setDefaultValue":
                    this.template = _.template($('#exp-view').html());
                    break;
                case "setMessage":
                case "setVisibility":
                case "setFieldRequiredLevel":
                case "setDisplayMode":
                    this.template = _.template($('#action-view').html());
                    break;
                }
                _.bindAll(this);
                this.model.bind('change', this.render, this);
                ActionDetailsView.self = this;
            }

            ActionDetailsView.prototype.initialize = function() {
                this.tagName = 'div';
                this.events = {
                    'change #attribute': 'attributeChanged',
                    'change #type': 'typeChanged',
                    'change #value': 'valueChanged',
                    'change #messageValue': 'messageChanged',
                    'change #visibilityValue': 'visibilityChanged',
                    'change #attributeSource': 'sourceChanged',
                    'change #valueSource': 'valueSourceChanged',
                    'change #formula-attribute-source': 'formulaSourceChanged',
                    'change #formula-value-field-source': 'formulaValueSourceChanged'
                };
                this._ensureElement();
            };
            ActionDetailsView.prototype.render = function() {
                var deferred = $.Deferred();
                var self = this;
                this.model.getViewDescriptor().then(function(d) {
                    self.$el
                        .html(self.template(d))
                        .addClass('section expression');
                    self.viewDescriptorData = d;
                    var typeVal = self.$('#type').length > 0 ? self.$('#type') : null;
                    if (typeVal && typeVal.val().trim() == ActionPropertyPage.ActionOperators.Formula) {
                        self.$('#formula-attribute').on('change', self.formulaChanged);
                        self.$('#formula-operator').on('change', self.formulaChanged);
                        self.$('#formula-value').on('change', self.formulaChanged);
                        // If the attribute is a datetime or numerical type, the formula value needs to be formatted
                        if (!Util.isNull(MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model
                                .getAttribute()]) &&
                            MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model
                                .getAttribute()] !=
                            undefined) {
                            var attributeType = MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self
                                .model.getAttribute()].attributeType;
                            if (ActionPropertyPage.ActionDetailsModel.fieldTypesNeedingFormatting
                                .indexOf(attributeType) >
                                -1 &&
                                self.model.pblActionActivity.value.formula != undefined &&
                                !Util.isNull(self.model.pblActionActivity.value.formula) &&
                                !isNaN(self.model.pblActionActivity.value.formula.value) &&
                                !Util.isEmptyString(self.model.pblActionActivity.value.formula.value)) {
                                var precision = MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self
                                    .model.getAttribute()].precision;
                                if (!Util.isNull(precision) && precision != undefined) {
                                    precision = parseInt(MetadataProxy.SourceAttributesMap[self.model
                                            .entityLogicalName][self.model.getAttribute()].precision,
                                        10);
                                } else {
                                    precision = 0;
                                }
                                var newValue = Mscrm.NumberUtility
                                    .addFormatting(parseFloat(self.model.pblActionActivity.value.formula.value),
                                        precision);
                                self.$('#formula-value').val(newValue);
                            }
                        }
                        self.$('#formula-type').on('change', self.formulaValueTypeChanged);
                        self.$('#formula-value-field').on('change', self.formulaChanged);
                    } else if (typeVal &&
                        typeVal.val() &&
                        typeVal.val().trim() == ActionPropertyPage.ActionOperators.Value &&
                        self.model.pblActionActivity.field != 'NEW_EXP') {
                        self.renderValue();
                    } else if (typeVal == null) {
                    }
                    if (self.model.pblActionActivity.field == 'NEW_EXP') {
                        self.attributeChanged();
                        self.typeChanged();
                        self.valueChanged();
                    }
                    self.$('#value').on('change', self.valueChanged);
                    DOMUtil.renderErrorMessages(self.model, self.$el, self.model.getErrorMessages());
                    Validation.Errors.refreshErrorMessages = ActionDetailsView.refreshErrorMessages;
                    deferred.resolve(self);
                });
                ActionPropertyPage.ActionPropertiesView.prototype.setLocalizedHTMLStrings();
                ActionPropertyPage.ActionPropertiesView.prototype
                    .setActionPropertiesHeaderText(this.model.pblActionActivity);
                self.$('.prop-findSymbol').attr('tabindex', '0');
                return deferred.promise();
            };
            ActionDetailsView.prototype.renderValue = function() {
                var self = this;
                var attr = this.model.getAttribute();
                if (this.valueView) {
                    this.valueView.remove();
                }
                if (!attr || attr.length == 0) {
                    //New attribute
                    this.$("#valueContainer")
                        .html(new TextBoxEditView({
                            model: this.model,
                            get: this.model.getValue,
                            set: this.model.setValue,
                            attributes: { id: 'value', class: 'field', type: 'text', value: this.model.getValue() }
                        }).render().$el);
                } else {
                    var dataType = MetadataProxy
                        .getAttributeType(this.model.getAttribute(), this.model.entityLogicalName);
                    if (this.model.getValue() == null) {
                        this.model.setValue("");
                    }
                    var attr = this.model.getAttribute();
                    if (!attr || attr.length == 0) {
                    } else if (MetadataProxy
                        .isEnumeratedField(this.model.getAttribute(), this.model.entityLogicalName)) {
                        new ActionPropertyPage.DropdownView({ model: this.model }).render().then(function(view) {
                            self.$("#valueContainer").html(view.$el);
                            self.$("#pblprop-dropdownValue").focus();
                            if ($("#" + $(view.$el).children().attr("id") + " :selected").text() == "") {
                                $(view.$el).children().attr("title",
                                    MscrmControls.ProcessDesigner.MetadataProvider
                                    .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyDropDowntooltip"));
                            } else {
                                $(view.$el).children().attr("title",
                                    $("#" + $(view.$el).children().attr("id") + " :selected").text());
                            }
                        });
                    } else if (dataType == AttributeType.DateTime) {
                        var dateFormat = "";
                        if (MetadataProxy.SourceAttributesMap != null) {
                            dateFormat = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model
                                .getAttribute()].dateFormat;
                        }
                        var isTimeRendered = (dateFormat === (DateFormat[DateFormat.DateTime].toLowerCase()));
                        this
                            .valueView = new
                            DateTimeEditView({
                                model: this.model,
                                get: this.model.getValue,
                                set: this.model.setValue,
                                isTimeRendered: isTimeRendered
                            });
                        this.$("#valueContainer").html(this.valueView.render().$el);
                        $("#valueContainer .hasDatepicker").parent().addClass("prop-exp-input_type_value");
                    } else if (dataType == AttributeType.Lookup ||
                        dataType == AttributeType.Owner ||
                        dataType == AttributeType.Customer) {
                        if (MetadataProxy.SourceAttributesMap != null) {
                            var targetEntity = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this
                                .model.getAttribute()].targetEntityForLookUp;
                            this.model.enableLookup();
                            var isMulti = (targetEntity.length > 1);
                            var displayName = this.model.getLookupDisplayName(); //move to getDisplayName
                            if (Util.isEmptyString(displayName) || typeof displayName === 'undefined') {
                                var guid = self.model.getValue().lookup.value;
                                if (MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model
                                        .getAttribute()].targetEntityForLookUp &&
                                    !Util.isEmptyString(guid)) {
                                    this.model.enableLookup();
                                    this.model.updateLookupDisplayName(self.model.getValue().lookup.label);
                                    this.model.setLookupValue(guid);
                                }
                            } else {
                                this.model.updateLookupDisplayName(displayName);
                            }
                            this
                                .valueView = new
                                LookupEditView({
                                    model: this.model,
                                    get: self.model.getValue,
                                    set: self.model.setValue,
                                    targetEntity: targetEntity,
                                    isMulti: isMulti,
                                    getNameCB: this.model.getLookupDisplayName,
                                    setNameCB: this.model.setLookupDisplayName,
                                    enableLookup: this.model.enableLookup,
                                    setLookupEntity: this.model.setLookupEntity
                                });
                            this.$("#valueContainer").html(this.valueView.render().$el);
                            this.$("#valueContainer .action-prop-lookup-textbox").parent()
                                .addClass("action-prop-lookup-header");
                        }
                        if (this.$("#valueContainer") != null &&
                            this.$("#valueContainer").find(".action-prop-lookup-textbox") != null &&
                            this.$("#valueContainer").find(".action-prop-lookup-textbox").val() != null) {
                            this.$("#valueContainer").find(".action-prop-lookup-textbox").focus();
                        }
                    } else if (MetadataProxy.isTextFieldNoOp(attr, this.model.entityLogicalName) ||
                        MetadataProxy.isNumericField(attr, this.model.entityLogicalName)) {
                        this.$("#valueContainer").html(new TextBoxEditView({
                            model: this.model,
                            get: this.model.getValue,
                            set: this.model.setValue,
                            attributes: { id: 'value', class: 'field', type: 'text', value: this.model.getValue() }
                        }).render().$el);
                        this.$("#valueContainer").find("#value").focus();
                        this.$("#valueContainer").children().attr("aria-labelledby", "actionValueLabel");
                        if (this.$("#valueContainer").children().text() == "") {
                            this.$("#valueContainer").children()
                                .attr("title",
                                    MscrmControls.ProcessDesigner.MetadataProvider
                                    .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        } else {
                            this.$("#valueContainer").children()
                                .attr("title", this.$("#valueContainer").children().text());
                        }
                        if (this.$("#valueContainer").children().val() == "") {
                            this.$("#valueContainer").children()
                                .attr("title",
                                    MscrmControls.ProcessDesigner.MetadataProvider
                                    .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        } else {
                            this.$("#valueContainer").children()
                                .attr("title", this.$("#valueContainer").children().val());
                        }
                    }
                }
            };
            ActionDetailsView.prototype.changedTooltips = function() {
                this.$('#attribute').attr("title", this.$('#attribute :selected').text());
                this.$('#type').attr("title", this.$('#type :selected').text());
                this.$('#source').attr("title", this.$('#source :selected').text());
                if ($('#value').length > 0) {
                    if ($('#value').attr("role") != "combobox") {
                        if (!MscrmControls.ProcessDesigner.Util.isNull($('#value').val()) &&
                            this.$('#value').val().length > 0) {
                            this.$('#value').attr("title", this.$('#value').val());
                        } else {
                            this.$('#value').attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    } else {
                        this.$('#value').attr("title", this.$('#value :selected').text());
                    }
                }
                if (this.$('#messageValue').val() == "") {
                    this.$('#messageValue').attr("title",
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    this.$('#messageValue').attr("aria-label", this.$("#lblMessage").text());
                } else {
                    this.$('#messageValue').attr("title", this.$('#messageValue').val());
                    this.$('#messageValue').attr("aria-label",
                        this.$("#lblMessage").text() + " " + this.$('#messageValue').val());
                }
                this.$('#attributeSource').attr("title", this.$('#attributeSource :selected').text());
                this.$('#valueSource').attr("title", this.$('#valueSource :selected').text());
                this.$('#formula-attribute-source').attr("title", this.$('#formula-attribute-source :selected').text());
                this.$('#formula-value-field-source').attr("title",
                    this.$('#formula-value-field-source :selected').text());
            };
            ActionDetailsView.prototype.attributeChanged = function() {
                var attribute = this.$('#attribute').val().trim();
                var dataType = MetadataProxy.getAttributeType(attribute, this.model.entityLogicalName);
                if (dataType == AttributeType.Lookup ||
                    dataType == AttributeType.Owner ||
                    dataType == AttributeType.Customer) {
                    this.model.lookupProperties["lookupLabel"] = "";
                    this.model.enableLookup();
                } else {
                    this.model.disableLookup();
                }
                this.model.setAttribute(attribute);
                this.changedTooltips();
                this.$('#attribute').focus();
            };
            ActionDetailsView.prototype.typeChanged = function() {
                var typeVal = this.$('#type').val().trim();
                this.model.setType(typeVal);
                if (typeVal == ActionPropertyPage.ActionOperators.Formula) {
                    //Ignore formula value empty
                    this.formulaChanged();
                } else if (typeVal == ActionPropertyPage.ActionOperators.Field) {
                    this.valueChanged();
                }
                this.changedTooltips();
                this.$('#type').focus();
            };
            ActionDetailsView.prototype.formulaChanged = function() {
                var formula = this.model.pblActionActivity.value.formula;
                var attrField = formula.attribute;
                attrField.field = this.$('#formula-attribute').val().trim();
                if (ActionPropertyPage.isTaskFlow && !formula.attribute.entity) {
                    var formulaSourceValue = this.$("#formula-attribute-source").val();
                    if (formulaSourceValue && MetadataProxy.SourceValueToEntityMap[formulaSourceValue]) {
                        attrField.entity = MetadataProxy.SourceValueToEntityMap[formulaSourceValue];
                    } else {
                        attrField.entity = new Microsoft.Crm.Workflow.Expressions
                            .PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    }
                }
                formula.attribute = attrField;
                formula.operator = this.$('#formula-operator').val().trim();
                formula.valueType = this.$('#formula-type').children(':selected').val().trim();
                if (formula.valueType == ActionPropertyPage.ActionOperators.Field) {
                    var valField = formula.value;
                    valField.field = this.$('#formula-value-field').val().trim();
                    formula.value = valField;
                } else if (formula.valueType == ActionPropertyPage.ActionOperators.Value) {
                    // If the field value is blank, add 0 as a default
                    formula.value = this.$('#formula-value').val();
                    if (formula.value == null || formula.value == undefined) {
                        formula.value = '0';
                    } else {
                        formula.value = formula.value.trim();
                    }
                }
                this.model.setFormula(formula);
                $('#typeValueField').addClass('actionprop-controlgroup-head-formula');
                $('#actionValueLabel').hide();
                this.changedTooltips();
                if (arguments[0] != undefined) {
                    var currentAttribute = $(arguments[0].currentTarget).attr("id");
                    if (currentAttribute != undefined) {
                        this.$("#" + currentAttribute).focus();
                    }
                }
            };
            ActionDetailsView.prototype.formulaValueTypeChanged = function() {
                this.model.setFormulaValueType(this.$('#formula-type').children(':selected').val().trim());
                $('[id=typeValueField]:has(#expression1)').find('#actionValueLabel')
                    .attr("style", "display: none !important");
                this.changedTooltips();
                this.$('#formula-type').focus();
            };
            ActionDetailsView.prototype.valueChanged = function() {
                var value = this.$('#value').val();
                var oldValue;
                var typeVal = this.$('#type').val();
                var attributeType = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model
                    .getAttribute()].attributeType;
                var isFormula = (this.model.pblActionActivity.operator === ActionPropertyPage.ActionOperators.Formula);
                if (typeVal == ActionPropertyPage.ActionOperators.Value) {
                    switch (attributeType) {
                    case AttributeType.DateTime:
                        // For date time type attributes with the formula operator, formatting is required
                        if (!isFormula) {
                            break;
                        }
                    case AttributeType.BigInt:
                    case AttributeType.Decimal:
                    case AttributeType.Double:
                    case AttributeType.Integer:
                    case AttributeType.Money:
                        if (!Util.isNull(value) && value.length > 0) {
                            oldValue = value;
                            value = Mscrm.NumberUtility.locStringToFloat(value.trim()).toString();
                            if (value == "NaN") {
                                // Restore the old value; this is an error value, but we don't want to display 'NaN'
                                value = oldValue;
                            }
                        }
                        break;
                    }
                }
                this.model.setValue(value);
                this.changedTooltips();
                this.$('#value').focus();
            };
            ActionDetailsView.prototype.messageChanged = function() {
                var steplabel = new StepLabel();
                steplabel.labelId = this.model.pblActionActivity.value.labelId;
                steplabel.languageCode = this.model.pblActionActivity.value.languageCode;
                steplabel.description = this.$('#messageValue').val().trim();
                this.model.setValue(steplabel);
                this.changedTooltips();
                this.$('#messageValue').focus();
            };
            ActionDetailsView.prototype.visibilityChanged = function() {
                var value = this.$('#visibilityValue')[0].checked;
                this.model.setValue(value);
                $("#lblVisible").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_Visible"));
                this.changedTooltips();
                this.$('#visibilityValue').focus();
            };
            ActionDetailsView.prototype.sourceChanged = function() {
                var sourceValue = this.$("#attributeSource").val();
                this.model.disableLookup();
                if (sourceValue) {
                    this.model.modifySource(MetadataProxy.SourceValueToEntityMap[sourceValue]);
                }
                var dataType = MetadataProxy.getAttributeType(this.model.getAttribute(), this.model.entityLogicalName);
                if (dataType == AttributeType.Lookup ||
                    dataType == AttributeType.Owner ||
                    dataType == AttributeType.Customer) {
                    this.model.setLookupDisplayName("");
                }
                this.changedTooltips();
                this.$("#attributeSource").focus();
            };
            ActionDetailsView.prototype.valueSourceChanged = function() {
                var valueSourceValue = this.$("#valueSource").val();
                if (valueSourceValue) {
                    this.model.modifyValueSource(MetadataProxy.SourceValueToEntityMap[valueSourceValue]);
                }
                this.changedTooltips();
                this.$("#valueSource").focus();
            };
            ActionDetailsView.prototype.formulaSourceChanged = function() {
                var formulaSourceValue = this.$("#formula-attribute-source").val();
                if (formulaSourceValue) {
                    this.model.modifyFormulaSource(MetadataProxy.SourceValueToEntityMap[formulaSourceValue]);
                }
                this.changedTooltips();
                this.$("#formula-attribute-source").focus();
            };
            ActionDetailsView.prototype.formulaValueSourceChanged = function() {
                var formulaValueSourceValue = this.$("#formula-value-field-source").val();
                if (formulaValueSourceValue) {
                    this.model.modifyFormulaValueSource(MetadataProxy.SourceValueToEntityMap[formulaValueSourceValue]);
                }
                this.changedTooltips();
                this.$("#formula-value-field-source").focus();
            };
            ActionDetailsView.prototype.setCurrentTarget = function(event) {
                if (event.srcElement != null && event.srcElement != undefined) {
                    $("#" + event.srcElement.id + "").focus();
                }
            };
            ActionDetailsView.refreshErrorMessages = function() {
                // see if any errors exists in clone model
                if (ActionDetailsView.self.model.pblActionActivity.getErrorCount() > 0) {
                    MscrmControls.ProcessDesigner.DOMUtil
                        .renderErrorMessages(ActionDetailsView.self.model.pblActionActivity,
                            ActionDetailsView.self.$el,
                            ActionDetailsView.self.model.pblActionActivity.getErrorMessages());
                } else if (GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getErrorCount() > 0 &&
                    !ActionDetailsView.self.model.pblActionActivity.isValid) {
                    MscrmControls.ProcessDesigner.DOMUtil
                        .renderErrorMessages(GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel(),
                            ActionDetailsView.self.$el,
                            GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getErrorMessages());
                } else {
                    DOMUtil.renderErrorMessages(ActionDetailsView.self.model,
                        ActionDetailsView.self.$el,
                        ActionDetailsView.self.model.getErrorMessages());
                }
            };
            return ActionDetailsView;
        })(Backbone.View);
        ActionPropertyPage.ActionDetailsView = ActionDetailsView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ActionPropertiesView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for action properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var DOMUtil = MscrmControls.ProcessDesigner.DOMUtil;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ActionPropertiesView = (function(_super) {
            __extends(ActionPropertiesView, _super);

            function ActionPropertiesView(options) {
                _super.call(this, options);
                Validation.Errors.registerPropertyViewCurrentModelClone(this.model.pblActionActivity);
                if (this.model.pblActionActivity.getActivityTypeID() == "customJavascript") {
                    this.template = _.template($('#customJS-view').html());
                } else {
                    this.template = _.template($('#prop-view').html());
                }
                _.bindAll(this, "render");
                ActionPropertiesView.self = this;
            }

            ActionPropertiesView.prototype.initialize = function() {
                this.el = $('#properties-panel');
                this.events = {
                    'change #txtDisplayName': 'displayNameChanged',
                    'click #actionprop-save': 'saveAction',
                    'click #actionprop-discard': 'discardAction',
                    'blur #customJSSourceValue': 'customJSSourceChanged',
                    'change #customJSSourceValue': 'customJSSourceChanged'
                };
                this._ensureElement();
            };
            ActionPropertiesView.prototype.render = function() {
                var view = this.model.getViewDescriptor();
                this.$el.html(this.template(view.viewDescriptor));
                var readOnlyFlag = this.model.pblActionActivity.getReadonlyMode();
                if (this.model.pblActionActivity.getActivityTypeID() == "customJavascript") {
                    DOMUtil.renderErrorMessages(this.model.pblActionActivity,
                        this.$el,
                        this.model.pblActionActivity.getErrorMessages());
                    Validation.Errors.refreshErrorMessages = ActionPropertiesView.refreshErrorMessages;
                    ActionPropertiesView.setReadOnlyMode(readOnlyFlag);
                }
                if (view.childView) {
                    view.childView.render().then(function(v) {
                        $('.actionprop-exp-container').append(v.el);
                        $('[id=typeValueField]:has(#expression1)').find('#actionValueLabel')
                            .attr("style", "display: none !important");
                        ActionPropertiesView.setReadOnlyMode(readOnlyFlag);
                    });
                }
                this.setLocalizedHTMLStrings();
                this.setActionPropertiesHeaderText(this.model.pblActionActivity);
                return this;
            };
            ActionPropertiesView.setReadOnlyMode = function(readOnlyFlag) {
                if (readOnlyFlag) {
                    // disable all input controls
                    $('input[type=text],textarea').attr("disabled", "disabled");
                    $('input[type=text],textarea').addClass("action-disabled-text");
                    // disable all dropdowns
                    $("select").attr("disabled", "disabled");
                    $("select").addClass("action-disabled-text");
                    // disable lookup
                    $("#valueContainer .action-prop-lookup-textbox").parent().css("pointer-events", "none");
                    // disable all buttons
                    $("#actionprop-save").attr("disabled", "disabled");
                    $("#actionprop-save").addClass("action-disabled-buttons");
                    $("#actionprop-discard").attr("disabled", "disabled");
                    $("#actionprop-discard").addClass("action-disabled-buttons");
                    $(".prop-calendar-button").css("pointer-events", "none");
                }
            };
            ActionPropertiesView.prototype.displayNameChanged = function() {
                var value = this.$('#txtDisplayName').val().trim();
                $('#txtDisplayName').attr("title", value);
                this.model.pblActionActivity.displayName = value;
            };
            ActionPropertiesView.prototype.descriptionChanged = function(value) {
            };
            ActionPropertiesView.prototype.customJSSourceChanged = function() {
                var newValue = this.$('#customJSSourceValue').val().trim();
                this.model.pblActionActivity.customJavascript = newValue;
                this.model.pblActionActivity.validateOnChange();
                DOMUtil.renderErrorMessages(this.model.pblActionActivity,
                    this.$el,
                    this.model.pblActionActivity.getErrorMessages());
            };
            ActionPropertiesView.prototype.saveAction = function(event) {
                try {
                    var isValid = this.model.pblActionActivity.validateOnAction(Validation.Level.Apply);
                    if (isValid) {
                        var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                        stopwatch.start();
                        // Indicate to Telemetry that Property Page was saved
                        MscrmControls.ProcessDesigner.isPropertyPageSaved = true;
                        var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView
                            .getPropertyViewCurrentModel();
                        if (!propertyViewCurrentModel) {
                            throw ("Internal : ActionPropertiesControl: Current Action Model is not set!");
                        }
                        if (propertyViewCurrentModel.getActivityTypeID() == "customJavascript") {
                            propertyViewCurrentModel.customJavascript = this.model.pblActionActivity.customJavascript;
                            propertyViewCurrentModel.displayName = this.model.pblActionActivity.displayName;
                        } else {
                            this.updateFieldType(this.model.pblActionActivity);
                            if (this.model.pblActionActivity.getActivityTypeID() == "setMessage" &&
                                !this.model.pblActionActivity.value.labelId) {
                                //Update language code and labelid
                                this.model.pblActionActivity.value.labelId = Random.Guid.NewGuid();
                                this.model.pblActionActivity.value.languageCode = 1033;
                            }
                            propertyViewCurrentModel.field = this.model.pblActionActivity.field;
                            propertyViewCurrentModel.fieldtype = this.model.pblActionActivity.fieldtype;
                            propertyViewCurrentModel.operator = this.model.pblActionActivity.operator;
                            propertyViewCurrentModel.value = this.model.pblActionActivity.value;
                            propertyViewCurrentModel.entity = this.model.pblActionActivity.entity;
                            propertyViewCurrentModel.displayName = this.model.pblActionActivity.displayName;
                            propertyViewCurrentModel.lookupProperties = this.model.pblActionActivity.lookupProperties;
                        }
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                        GenericWorkflowDesigner.eventManager
                            .trigger(MscrmControls.ProcessDesigner.PblEvents.updatePlainTextView);
                        GenericWorkflowDesigner.eventManager
                            .trigger(GenericWorkflowDesigner.FrameworkEvents.updateProperty);
                        stopwatch.stop();
                        localStorage.setItem("PBL_" + propertyViewCurrentModel.attributes.ActivityTypeID + "ApplyTime",
                            stopwatch.elapsedMilliseconds.toString());
                    }
                    //Clear or show errors
                    this.render();
                } catch (ex) {
                    console.log(ex.stack);
                } finally {
                    event.stopPropagation();
                }
            };
            ActionPropertiesView.prototype.changedTooltips = function() {
                $('#attribute').attr("title", $('#attribute :selected').text());
                $('#type').attr("title", $('#type :selected').text());
                $('#source').attr("title", $('#source :selected').text());
                if ($('#value').length > 0) {
                    if ($('#value').attr("role") != "combobox") {
                        if (!MscrmControls.ProcessDesigner.Util.isNull($('#value').val()) &&
                            $('#value').val().length > 0) {
                            $('#value').attr("title", $('#value').val());
                        } else {
                            $('#value').attr("title",
                                MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    } else {
                        $('#value').attr("title", $('#value :selected').text());
                    }
                }
                $('#messageValue').attr("title", $('#messageValue').val());
                $('#attributeSource').attr("title", $('#attributeSource :selected').text());
                $('#valueSource').attr("title", $('#valueSource :selected').text());
                $('#formula-attribute-source').attr("title", $('#formula-attribute-source :selected').text());
                $('#formula-value-field-source').attr("title", $('#formula-value-field-source :selected').text());
            };
            ActionPropertiesView.prototype.discardAction = function(event) {
                try {
                    var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                    stopwatch.start();
                    var self = this;
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (!propertyViewCurrentModel) {
                        throw ("Internal : ConditionPropertiesControl: Current Action Model is not set!");
                    }
                    var propertyViewCurrentModelClone = propertyViewCurrentModel.getPropertyPageClone();
                    new ActionPropertyPage.PropertiesView({ model: propertyViewCurrentModelClone }).render();
                    stopwatch.stop();
                    localStorage.setItem("PBL_" + propertyViewCurrentModel.attributes.ActivityTypeID + "DiscardTime",
                        stopwatch.elapsedMilliseconds.toString());
                    this.changedTooltips();
                } catch (ex) {
                    console.log(ex.stack);
                } finally {
                    event.stopPropagation();
                }
            };
            ActionPropertiesView.prototype.updateFieldType = function(pblActionActivity) {
                var entityName = ActionPropertyPage.isTaskFlow
                    ? pblActionActivity.entity.entityName
                    : this.model.entityLogicalName;
                pblActionActivity.fieldtype = MetadataProxy.SourceAttributesMap[entityName][pblActionActivity.field]
                    .attributeType;
                if (pblActionActivity.operator == ActionPropertyPage.ActionOperators.Field) {
                    entityName = ActionPropertyPage.isTaskFlow
                        ? pblActionActivity.value.entity.entityName
                        : this.model.entityLogicalName;
                    pblActionActivity.value.fieldtype = MetadataProxy.SourceAttributesMap[entityName][pblActionActivity
                        .value.field].attributeType;
                } else if (pblActionActivity.operator == ActionPropertyPage.ActionOperators.Formula) {
                    entityName = ActionPropertyPage.isTaskFlow
                        ? pblActionActivity.value.formula.attribute.entity.entityName
                        : this.model.entityLogicalName;
                    pblActionActivity.value.formula.attribute.fieldtype = MetadataProxy
                        .SourceAttributesMap[entityName][pblActionActivity.value.formula.attribute.field].attributeType;
                    if (pblActionActivity.value.formula.valueType == ActionPropertyPage.ActionOperators.Field) {
                        entityName = ActionPropertyPage.isTaskFlow
                            ? pblActionActivity.value.formula.value.entity.entityName
                            : this.model.entityLogicalName;
                        pblActionActivity.value.formula.value.fieldtype = MetadataProxy
                            .SourceAttributesMap[entityName][pblActionActivity.value.formula.value.field].attributeType;
                    } else {
                        pblActionActivity.value.formula.value.fieldtype = pblActionActivity.value.formula.attribute
                            .fieldtype;
                    }
                } else {
                    pblActionActivity.value.fieldtype = pblActionActivity.fieldtype;
                }
            };
            ActionPropertiesView.prototype.setLocalizedHTMLStrings = function() {
                $("#actionprop-save").val(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString('ProcessDesignerControl_BPF_BranchPropertyDetails_Apply'));
                $("#actionprop-discard").val(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString('ProcessDesignerControl_BPF_BranchPropertyDetails_Discard'));
                $("#EntityHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_StagePropertyDetails_Entity"));
                $("#EntityHeader").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_EntityTooltip"));
                $("#JavascriptHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_CustomJavascriptHeader"));
                $("#DisplayNameHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Header"));
                $("#DisplayNameHeader").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_ActionProperty_ActionDisplayName"));
                $("#lblField").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field"));
                $("#lblField").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_FieldTooltip"));
                $("#lblField1").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field"));
                $("#lblField1").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_FieldTooltip"));
                $("#lblField2").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field"));
                $("#lblField2").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_FieldTooltip"));
                $("#lblType").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Type"));
                $("#lblType").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_TypeTooltip"));
                $("#lblType1").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Type"));
                $("#lblType1").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_TypeTooltip"));
                $("#lblOperator").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Operator"));
                $("#lblOperator").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_OperatorTooltip"));
                $("#lblStatus").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_Status"));
                $("#lblStatus").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_StatusTooltip"));
                $("#lblStatus1").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_Status"));
                $("#lblStatus1").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_StatusTooltip"));
                $("#lblStatus2").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_SetVisibility_Visible"));
                $("#lblStatus2").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_VisibleStatusTooltip"));
                $("#lblMessage").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_Message"));
                $("#lblMessage").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_MessageTooltip"));
                $("#lblVisible").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_Visible"));
                $("#lblVisible").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_VisibleStatusTooltip"));
                $("#actionValueLabel").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_ValueTooltip"));
                $("#lblFieldSource").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source"));
                $("#lblValueSource").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source"));
                $("#lblattributeSource").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source"));
                $("#lblformula-attribute-source").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source"));
                $("#formulaValueLabelSource").text(MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source"));
                if ($('#actionprop-save').attr("disabled") == undefined) {
                    $('#actionprop-save').attr('title',
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Apply_Available"));
                } else {
                    $('#actionprop-save').attr('title',
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Apply_Unavailable"));
                }
                $("#actionprop-discard").attr('title',
                    MscrmControls.ProcessDesigner.MetadataProvider
                    .getLocalizedString("ProcessDesignerControl_BPF_DiscardChangesTooltip"));
            };
            ActionPropertiesView.prototype.setActionPropertiesHeaderText = function(pblActionActivity) {
                switch (pblActionActivity.getActivityTypeID()) {
                case "setAttributeValue":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_SetFieldValue");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    $("#ActionPropertiesSubHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_FieldValue"));
                    break;
                case "setDefaultValue":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_SetDefaultValue");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    $("#ActionPropertiesSubHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DefaultValue"));
                    break;
                case "setMessage":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_ShowError");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    tileTitle = tileTitle.substr(tileTitle.indexOf(" ") + 1);
                    $("#ActionPropertiesSubHeader").text(tileTitle);
                    break;
                case "setDisplayMode":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_Lock_Unlock");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    tileTitle = tileTitle.substr(tileTitle.indexOf(" ") + 1);
                    $("#ActionPropertiesSubHeader").text(tileTitle);
                    break;
                case "setVisibility":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_SetVisibility");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    $("#ActionPropertiesSubHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_Visibility"));
                    break;
                case "setFieldRequiredLevel":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_SetBusinessRequired");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    $("#ActionPropertiesSubHeader").text(MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_BusinessRequired"));
                    break;
                case "customJavascript":
                    var tileTitle = MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_CustomJavascript");
                    $("#ActionPropertiesHeader").text(tileTitle);
                    tileTitle = tileTitle.substr(tileTitle.indexOf(" ") + 1);
                    $("#ActionPropertiesSubHeader").text(tileTitle);
                    break;
                }
            };
            ActionPropertiesView.refreshErrorMessages = function() {
                // see if any errors exists in clone model
                if (ActionPropertiesView.self.model.pblActionActivity.getErrorCount() > 0) {
                    MscrmControls.ProcessDesigner.DOMUtil
                        .renderErrorMessages(ActionPropertiesView.self.model.pblActionActivity,
                            ActionPropertiesView.self.$el,
                            ActionPropertiesView.self.model.pblActionActivity.getErrorMessages());
                } else if (GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getErrorCount() > 0 &&
                    !ActionPropertiesView.self.model.pblActionActivity.isValid) {
                    MscrmControls.ProcessDesigner.DOMUtil
                        .renderErrorMessages(GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel(),
                            ActionPropertiesView.self.$el,
                            GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getErrorMessages());
                } else {
                    DOMUtil.renderErrorMessages(ActionPropertiesView.self.model.pblActionActivity,
                        ActionPropertiesView.self.$el,
                        ActionPropertiesView.self.model.pblActionActivity.getErrorMessages());
                }
            };
            return ActionPropertiesView;
        })(Backbone.View);
        ActionPropertyPage.ActionPropertiesView = ActionPropertiesView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="DateTimeControlView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// DateTimeControlView for rendering date time control
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var DateTimeControlView = (function(_super) {
            __extends(DateTimeControlView, _super);

            function DateTimeControlView(isTimeRendered, options) {
                _super.call(this, options);
                _.bindAll(this);
                this.isTimeRendered = isTimeRendered;
            }

            DateTimeControlView.prototype.initialize = function() {
                this.tagName = 'div';
            };
            DateTimeControlView.prototype.render = function() {
                var self = this;
                if (this.isTimeRendered) {
                    self.$el.append("<div><input type='text' id='datepicker_" +
                        this.cid +
                        "'/><select id='timeDropDown_" +
                        this.cid +
                        "'><option>12:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>12:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>1:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>1:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>2:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>2:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>3:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>3:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>4:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>4:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>5:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>5:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>6:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>6:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>7:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>7:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option selected>8:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>8:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>9:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>9:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>10:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>10:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>11:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>11:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") +
                        "</option><option>12:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>12:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>1:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>1:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>2:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>2:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>3:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>3:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>4:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>4:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>5:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>5:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>6:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>6:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>7:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>7:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>8:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>8:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>9:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>9:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>10:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>10:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>11:00 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option><option>11:30 " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") +
                        "</option></select></div>");
                } else {
                    self.$el.append("<div><input type='text' id='datepicker_" + this.cid + "'/></div>");
                }
                this.$("#datepicker_" + this.cid).datepicker({
                    dateFormat: 'm/d/yy',
                    showOn: "both",
                    buttonText:
                        "<span class='pblprop-calendar-fontIcons-size prop-CCFSymbolFont prop-calendarSymbol'></span>"
                });
                //Attaching events on control
                this.$("#datepicker_" + this.cid).on('change', this.dateChanged);
                this.$("#timeDropDown_" + this.cid).on('change', this.timeChanged);
                //Attaching CSS based on Datetime/Date control is rendered
                if (this.isTimeRendered) {
                    this.$el.find("#datepicker_" + this.cid).addClass('pblprop-datepicker-datetime-input-height-width');
                    this.$el.find("#timeDropDown_" + this.cid).addClass('pblprop-timeDropDown-height-width');
                } else {
                    this.$el.find("#datepicker_" + this.cid).addClass('pblprop-datepicker-dateOnly-input-height-width');
                }
                this.$el.find("#datepicker_" + this.cid).next().addClass('pblprop-calendar-button');
                var values = self.model.getValue();
                if (values.length > 0) {
                    self.selectedDate = values;
                }
                //Setting Date and Time
                if (self.selectedDate) {
                    var d = self.selectedDate;
                    var dd = new Date(d);
                    var dDate = dd.toLocaleDateString();
                    var dtime = dd.toLocaleTimeString();
                    var amOrPm = dtime.split(':')[2].replace('00', ' ').trim();
                    dtime = dtime.split(':').slice(0, 2).join(':');
                    dtime = dtime + " " + amOrPm;
                    this.setDate(dDate);
                    if (this.isTimeRendered) {
                        this.setTime(dtime);
                    }
                }
                return this;
            };
            DateTimeControlView.prototype.updateView = function() {
            };
            DateTimeControlView.prototype.setDate = function(date) {
                this.$("#datepicker_" + this.cid).val(date);
            };
            DateTimeControlView.prototype.setTime = function(time) {
                this.$("#timeDropDown_" + this.cid).val(time);
            };
            DateTimeControlView.prototype.getDate = function() {
                var dateUTC = "";
                var currentDate = this.$("#datepicker_" + this.cid).val();
                if (this.isTimeRendered) {
                    var timeControl = this.$("#timeDropDown_" + this.cid);
                    var currentTime = timeControl.find(":selected").text();
                    var dateString = currentDate + " " + currentTime;
                    var date = new Date(dateString);
                    dateUTC = date.toUTCString();
                    return dateUTC;
                } else {
                    // Called if only Date Control is rendered.Returns date with default value of time as 00:00:00 GMT
                    currentDate = new Date(currentDate);
                    currentDate = currentDate.toString().split(' ').slice(0, 5).join(' ');
                    dateUTC = currentDate +
                        " " +
                        MscrmControls.ProcessDesigner.MetadataProvider
                        .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_GMT");
                    return dateUTC;
                }
            };
            DateTimeControlView.prototype.getTime = function() {
                var time = "";
                if (this.isTimeRendered) {
                    var timeControl = this.$("#timeDropDown_" + this.cid);
                    if (timeControl) {
                        var dateControl = this.$("#datepicker_" + this.cid);
                        var currentDate = dateControl.val();
                        var currentTime = timeControl.find(":selected").text();
                        currentDate = currentDate + " " + currentTime;
                        currentDate = new Date(currentDate);
                        var splitDate = currentDate.toUTCString().split(' ');
                        time = splitDate[splitDate.length - 2];
                        time = time +
                            " " +
                            MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_GMT");
                        return time;
                    }
                }
                return time;
            };
            DateTimeControlView.prototype.dateChanged = function(event) {
                this.selectedDate = this.getDate();
                this.model.setValue(this.selectedDate);
                event.stopPropagation();
            };
            DateTimeControlView.prototype.timeChanged = function(event) {
                var timeControl = event.target;
                var time = timeControl.value;
                this.selectedDate = this.getDate();
                this.model.setValue(this.selectedDate);
                timeControl.value = time;
                event.stopPropagation();
            };
            return DateTimeControlView;
        })(Backbone.View);
        ActionPropertyPage.DateTimeControlView = DateTimeControlView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="DropdownView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Dropdown View for value field
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var DropdownView = (function(_super) {
            __extends(DropdownView, _super);

            function DropdownView(options) {
                _super.call(this, options);
                _.bindAll(this);
            }

            DropdownView.prototype.initialize = function() {
                this.tagName = 'div';
                this.events = {
                    'change #pblprop-dropdownValue': 'valueChanged'
                };
            };
            DropdownView.prototype.render = function() {
                var deferred = $.Deferred();
                var self = this;
                var attributeLogicalName = this.model.getAttribute();
                var picklistValues;
                MetadataProxy.getPickListValues(this.model.entityLogicalName, attributeLogicalName)
                    .then(function(values) {
                        picklistValues = values;
                        self.selectedValue = self.model.getValue();
                        self.$el.append("<select id='pblprop-dropdownValue' class='field'></select>");
                        var dropdownElement = self.$el.find("#pblprop-dropdownValue");
                        _.each(picklistValues,
                            function(item) {
                                var selected = (self.selectedValue == item.pickListValueOrderId) ? 'selected' : '';
                                dropdownElement.append("<option value='" +
                                    item.pickListValueOrderId +
                                    "' " +
                                    selected +
                                    ">" +
                                    item.pickListValue +
                                    "</option>");
                            });
                        //If model value is blank, then set the model value as first picklist value.
                        if (self.model.getValue() == "") {
                            self.model.setValue(self.$('#pblprop-dropdownValue').val().trim());
                        }
                        deferred.resolve(self);
                    });
                return deferred.promise();
            };
            DropdownView.prototype.valueChanged = function(event) {
                var val = this.$('#pblprop-dropdownValue').val().trim();
                this.model.setValue(val);
                event.stopPropagation();
            };
            return DropdownView;
        })(Backbone.View);
        ActionPropertyPage.DropdownView = DropdownView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="LookupView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Lookup View for Condition Expression value field
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var LookupView = (function(_super) {
            __extends(LookupView, _super);

            function LookupView(lookupStyle, targetEntity, options) {
                _super.call(this, options);
                _.bindAll(this);
                this.lookupStyle = lookupStyle;
                this.targetEntity = targetEntity;
            }

            LookupView.prototype.initialize = function() {
                this.tagName = 'div';
            };
            /** Renders the lookup control */
            LookupView.prototype.render = function() {
                var self = this;
                self.$el.append("<input type='text' id='txtLookup_" +
                    this.cid +
                    "' name='lookup' class='bpfprop-lookup-textbox' /><span id='btnSearch_" +
                    this.cid +
                    "' class='bpfprop-CCFSymbolFont bpfprop-findSymbol bpfprop-find-fontIcons-size' ></span>");
                //Attaching events on control
                this.$("#btnSearch_" + this.cid).on('click', this.launchLookupDialog);
                this.$("#txtLookup_" + this.cid).on('click', this.launchLookupDialog);
                this.$("#btnSearch_" + this.cid).keydown(function(event) {
                    if (event.which == 13) {
                        $("#" + event.target.id).trigger("click");
                    }
                    event.stopImmediatePropagation();
                });
                this.$("#txtLookup_" + this.cid).keydown(function(event) {
                    if (event.which == 13) {
                        $("#" + event.target.id).trigger("click");
                    }
                    event.stopImmediatePropagation();
                });
                var values = this.model.getValue()._value;
                if (values.length > 0) {
                    this.selectedValue = values;
                    if (this.selectedValue) {
                        var displayName = this.model.getDisplayName();
                        this.$("#txtLookup_" + this.cid).val(displayName);
                    }
                }
                return this;
            };
            /** Method that launches the lookup dialog */
            LookupView.prototype.launchLookupDialog = function(event) {
                var options = new Xrm.DialogOptions();
                var dialogParams = new ActionPropertyPage.Dictionary();
                dialogParams["isMultiSelect"] = false;
                dialogParams["disableQuickFind"] = false;
                dialogParams["disableViewPicker"] = false;
                dialogParams["isInlineOrAssociateFormLookup"] = false;
                if (this.lookupStyle == 'single') {
                    // Target entity for the lookup field
                    dialogParams["optionset"] = this.targetEntity[0];
                    dialogParams["lookupStyle"] = "single";
                    dialogParams["selectedViewIds"] = null;
                } else if (this.lookupStyle == 'multi') {
                    var entityLogicalNames = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                    var entityDisplayNames = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                    for (var i = 0; i < this.targetEntity.length; i++) {
                        if (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                            .get__securityContext$i()._isOperationEnabled$i(this.targetEntity[i], 1)) {
                            entityLogicalNames.add(this.targetEntity[i]);
                            // TODO: 25/05/2016 v-brbhat: Fetch the display name of the entity
                            entityDisplayNames.add(this.targetEntity[i]);
                        }
                    }
                    if (!entityLogicalNames.get_Count()) {
                        // TODO: 25/05/2016 v-brbhat: Show error message
                        return;
                    }
                    dialogParams['logicalNames'] = entityLogicalNames;
                    dialogParams['displayNames'] = entityDisplayNames;
                    dialogParams['lookupStyle'] = 'multi';
                }
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                    .IsGridDialogContext = true;
                Xrm.Dialog.openDialog("Lookup", options, dialogParams, this.lookupDialogCloseCallback, null);
            };
            /** Callback method which fetches the selected item from the lookup dialog */
            LookupView.prototype.lookupDialogCloseCallback = function(dialogParams, callbackParams) {
                if (dialogParams["lastButtonClicked"] == "add_id") {
                    var selectedViewModels = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel
                        .get_instance()._getAllSelectedViewModelsForLookupDialog$i();
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                        ._clearAllSelectedViewModelsForLookupDialog$i();
                    var lookupControlItems = new (Microsoft.Crm.Client.Core.Framework.List$1
                        .$$(Microsoft.Crm.Client.Core.ViewModels.LookupControlItem))();
                    var itemIdToBool = new ActionPropertyPage.Dictionary();
                    for (var index = 0; index < selectedViewModels.length; index++) {
                        var selectedViewModel = selectedViewModels[index];
                        var modelContext = selectedViewModel.get_ModelContext();
                        var reference = modelContext.get__identifier$i();
                        var guid = reference.get__identifier$i().toLowerCase();
                        if (!itemIdToBool[guid]) {
                            var modelType = reference.get__modelType$i();
                            var identifier = reference.get__identifier$i();
                            var name = modelContext.get__namedReference$i().Name.toString();
                            var item = new Microsoft.Crm.Client.Core.ViewModels
                                .LookupControlItem(modelType, identifier, name);
                            lookupControlItems.add(item);
                        }
                    }
                    if (lookupControlItems.get_Items().length > 0) {
                        this.selectedValue = lookupControlItems.get_Items()[0].id;
                        this.model.setValue([this.selectedValue]);
                        this.model.set("displayname", lookupControlItems.get_Items()[0].name);
                    }
                }
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()
                    .IsGridDialogContext = false;
            };
            return LookupView;
        })(Backbone.View);
        ActionPropertyPage.LookupView = LookupView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionPropertiesView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for condition properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        ActionPropertyPage.isTaskFlow = MscrmControls.ProcessDesigner.ControlManager.isPBLfromTBX;
        var PropertiesView = (function(_super) {
            __extends(PropertiesView, _super);

            function PropertiesView(options) {
                _super.call(this, options);
                this.render();
            }

            PropertiesView.prototype.initialize = function() {
                var self = this;
            };
            PropertiesView.prototype.render = function() {
                var actionPropertiesView = new ActionPropertyPage.ActionPropertiesView({
                    model: new ActionPropertyPage.ActionPropertiesModel(this.model)
                });
                actionPropertiesView.render();
                return this;
            };
            return PropertiesView;
        })(Backbone.View);
        ActionPropertyPage.PropertiesView = PropertiesView;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionViewDescriptor.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for action properties
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function(MscrmControls) {
    var ActionPropertyPage;
    (function(ActionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var AttributeType = MscrmControls.ProcessDesigner.Common.AttributeType;
        var ViewDescriptorProvider = (function() {
            function ViewDescriptorProvider(entityLogicalName) {
                this._entityLogicalName = "";
                this._entityLogicalName = entityLogicalName;
            }

            ViewDescriptorProvider.prototype.getExpressionDescriptor = function(pblActionActivity) {
                var expressionDescriptor = new ActionPropertyPage.SetAttributeValueViewDescriptor();
                expressionDescriptor.errorMessages = pblActionActivity.getErrorMessages();
                expressionDescriptor.isTaskFlow = ActionPropertyPage.isTaskFlow;
                expressionDescriptor.selectedSource = "";
                var deferred = $.Deferred();
                var self = this;
                MetadataProxy.getAttributeList(self._entityLogicalName).then(function(attributeList) {
                    var isNew = (!pblActionActivity.field);
                    var firstKey;
                    var isNewExpr = (!pblActionActivity.field || expressionDescriptor.selectedAttribute == "NEW_EXP");
                    if (ActionPropertyPage.isTaskFlow) {
                        expressionDescriptor.sourceList = MetadataProxy.getSourcesList();
                        expressionDescriptor.sourceList
                            .unshift(MscrmControls.ProcessDesigner.ControlManager.primaryEntityName);
                        // If the selected source is the primary entity, the option's id is the primary entity name, but if it is a related entity, the option's id is the relationship name
                        expressionDescriptor
                            .selectedSource = (pblActionActivity.entity instanceof
                                Microsoft.Crm.Workflow.Expressions.PrimaryEntity)
                            ? pblActionActivity.entity.get_entityName()
                            : pblActionActivity.entity.get_relationshipName();
                    }
                    expressionDescriptor.attributeList = self.filterAttributesForActions(attributeList);
                    for (var attribute in expressionDescriptor.attributeList) {
                        // get the first element
                        firstKey = attribute;
                        break;
                    }
                    expressionDescriptor
                        .selectedAttribute = (isNewExpr || isNew)
                        ? expressionDescriptor.attributeList[firstKey].logicalName
                        : pblActionActivity.field;
                    // Check if attribute mapping exists or not, if not then show/set default attribute to avoid any impact on property page
                    // This was happening in case of composite attributes of related entity, where rule was getting saved using composite attribute but while reloading it was getting lost
                    if (MscrmControls.ProcessDesigner.Util
                        .isNull(MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor
                            .selectedAttribute])) {
                        expressionDescriptor.selectedAttribute = expressionDescriptor.attributeList[firstKey]
                            .logicalName;
                        pblActionActivity.field = expressionDescriptor.selectedAttribute;
                    }
                    expressionDescriptor.isNew_ = isNew;
                    expressionDescriptor.selectedTypeField = ActionPropertyPage.ActionOperators.Field;
                    expressionDescriptor.selectedTypeValue = ActionPropertyPage.ActionOperators.Value;
                    expressionDescriptor.selectedTypeFormula = ActionPropertyPage.ActionOperators.Formula;
                    expressionDescriptor.SetMessage = ActionPropertyPage.ActionOperators.SetMessage;
                    expressionDescriptor.setVisibility = ActionPropertyPage.ActionOperators.Visibility;
                    expressionDescriptor.setFieldRequiredLevel = ActionPropertyPage.ActionOperators.FieldRequired;
                    expressionDescriptor.setDisplayMode = ActionPropertyPage.ActionOperators.DisplayMode;
                    var isFormulaValid = MetadataProxy
                        .isFormulaValidForAttributeType(MetadataProxy.SourceAttributesMap[self
                            ._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType);
                    expressionDescriptor.types = [];
                    expressionDescriptor.types.push({
                        val: ActionPropertyPage.ActionOperators.Value,
                        name: MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value")
                    });
                    //No need to fill other types if the attribute is not selected
                    if (!expressionDescriptor.isNew_) {
                        expressionDescriptor.types.push({
                            val: ActionPropertyPage.ActionOperators.Field,
                            name: MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field")
                        });
                        if (isFormulaValid) {
                            expressionDescriptor.types
                                .push({
                                    val: ActionPropertyPage.ActionOperators.Formula,
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Formula")
                                });
                        }
                        if (pblActionActivity.getActivityTypeID() == "setAttributeValue" &&
                            MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor
                                .selectedAttribute].attributeType !=
                            AttributeType.Boolean &&
                            MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor
                                .selectedAttribute].attributeType !=
                            AttributeType.State &&
                            MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor
                                .selectedAttribute].attributeType !=
                            AttributeType.Status) {
                            expressionDescriptor.types
                                .push({
                                    val: ActionPropertyPage.ActionOperators.Clear,
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Clear")
                                });
                        }
                    }
                    if (pblActionActivity.operator == ActionPropertyPage.ActionOperators.Field) {
                        expressionDescriptor.selectedType = pblActionActivity.operator;
                        expressionDescriptor.actionValueLabelText = MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field");
                        if (!ActionPropertyPage.isTaskFlow) {
                            MetadataProxy
                                .getComparableAttributes(self._entityLogicalName,
                                    expressionDescriptor.selectedAttribute,
                                    self._entityLogicalName).done(function(list) {
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        selectedAttribute: pblActionActivity.value.field
                                    };
                                });
                        } else {
                            var attributeSelectedSource = (pblActionActivity.value.entity instanceof
                                    Microsoft.Crm.Workflow.Expressions.PrimaryEntity)
                                ? pblActionActivity.value.entity.get_entityName()
                                : pblActionActivity.value.entity.get_relationshipName();
                            var targetEntity = pblActionActivity.value.entity.get_entityName();
                            MetadataProxy
                                .getComparableAttributes(self._entityLogicalName,
                                    expressionDescriptor.selectedAttribute,
                                    targetEntity).done(function(list) {
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        attributeSelectedSource: attributeSelectedSource,
                                        selectedAttribute: pblActionActivity._value.field
                                    };
                                });
                        }
                    } else if (pblActionActivity.operator == ActionPropertyPage.ActionOperators.Formula) {
                        expressionDescriptor.selectedType = pblActionActivity.operator;
                        expressionDescriptor.actionValueLabelText = MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Formula");
                        var formulaValue;
                        if (pblActionActivity.value.formula.valueType == ActionPropertyPage.ActionOperators.Value) {
                            formulaValue = pblActionActivity.value.formula.value;
                        } else if (pblActionActivity.value.formula
                            .valueType ==
                            ActionPropertyPage.ActionOperators.Field) {
                            formulaValue = pblActionActivity.value.formula.value.field;
                        }
                        expressionDescriptor.value = {
                            selectedAttribute: pblActionActivity.value.formula.attribute.field,
                            operators: [
                                { name: '+', value: 0 }, { name: '-', value: 1 }, { name: '*', value: 2 },
                                { name: '/', value: 3 }
                            ],
                            selectedOperator: pblActionActivity.value.formula.operator,
                            selectedValue: formulaValue,
                            formulaValueTypes: [
                                {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field"),
                                    value: ActionPropertyPage.ActionOperators.Field
                                }, {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value"),
                                    value: ActionPropertyPage.ActionOperators.Value
                                }
                            ],
                            selectedFormulaValueType: pblActionActivity.value.formula.valueType,
                            formulaValueLabelText: pblActionActivity.value.formula.valueType,
                            dayValueTooltip: MscrmControls.ProcessDesigner.MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Label_Days")
                        };
                        if (!ActionPropertyPage.isTaskFlow) {
                            MetadataProxy
                                .getComparableAttributes(self._entityLogicalName,
                                    expressionDescriptor.selectedAttribute,
                                    self._entityLogicalName).done(function(attrList) {
                                    expressionDescriptor.value.attributeList = attrList;
                                    expressionDescriptor.value.rightAttributeList = attrList;
                                });
                        } else {
                            var leftSelectedSource = (pblActionActivity.value.formula.attribute.entity instanceof
                                    Microsoft.Crm.Workflow.Expressions.PrimaryEntity)
                                ? pblActionActivity.value.formula.attribute.entity.get_entityName()
                                : pblActionActivity.value.formula.attribute.entity.get_relationshipName();
                            var targetEntityLeft = pblActionActivity.value.formula.attribute.entity.get_entityName();
                            // The left and right sides, if both attributes, may be from two different sources, and thus a second retrieval might be necessary
                            MetadataProxy
                                .getComparableAttributes(self._entityLogicalName,
                                    expressionDescriptor.selectedAttribute,
                                    targetEntityLeft).done(function(attrList) {
                                    expressionDescriptor.value.leftSelectedSource = leftSelectedSource;
                                    expressionDescriptor.value.attributeList = attrList;
                                    if (pblActionActivity.value.formula.valueType ==
                                        MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field") &&
                                        pblActionActivity.value.formula.value.entity != null &&
                                        pblActionActivity.value.formula.value.entity != undefined) {
                                        var rightSelectedSource =
                                            (pblActionActivity.value.formula.value.entity instanceof
                                                    Microsoft.Crm.Workflow.Expressions.PrimaryEntity)
                                                ? pblActionActivity.value.formula.value.entity.get_entityName()
                                                : pblActionActivity.value.formula.value.entity.get_relationshipName();
                                        var targetEntityRight = pblActionActivity.value.formula.value.entity
                                            .get_entityName();
                                        MetadataProxy
                                            .getComparableAttributes(self._entityLogicalName,
                                                expressionDescriptor.selectedAttribute,
                                                targetEntityRight).done(function(rightAttrList) {
                                                expressionDescriptor.value.rightSelectedSource = rightSelectedSource;
                                                expressionDescriptor.value.rightAttributeList = rightAttrList;
                                            });
                                    } else {
                                        expressionDescriptor.value.rightAttributeList = attrList;
                                    }
                                });
                        }
                        if (pblActionActivity.value.formula.valueType == ActionPropertyPage.ActionOperators.Value) {
                            expressionDescriptor.value.formulaValueLabelText = MscrmControls.ProcessDesigner
                                .MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value");
                        } else if (pblActionActivity.value.formula
                            .valueType ==
                            ActionPropertyPage.ActionOperators.Field) {
                            expressionDescriptor.value.formulaValueLabelText = MscrmControls.ProcessDesigner
                                .MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field");;
                        }
                        if (expressionDescriptor.value.selectedAttribute == "NEW_EXP") {
                            expressionDescriptor.value.selectedAttribute = expressionDescriptor.value.attributeList[0];
                            expressionDescriptor.value.selectedOperator = 0;
                        }
                        var dataType = MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor
                            .selectedAttribute].attributeType;
                        if (dataType == AttributeType.DateTime) {
                            expressionDescriptor.value.operators = [{ name: '+', value: 0 }, { name: '-', value: 1 }];
                            expressionDescriptor.value
                                .formulaValueTypes = [
                                    {
                                        name: MscrmControls.ProcessDesigner.MetadataProvider
                                            .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value"),
                                        value: ActionPropertyPage.ActionOperators.Value
                                    }
                                ];
                            expressionDescriptor.value.formulaValueLabelText = MscrmControls.ProcessDesigner
                                .MetadataProvider
                                .getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Days");
                        }
                    } else {
                        expressionDescriptor.actionValueLabelText = MscrmControls.ProcessDesigner.MetadataProvider
                            .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value");
                        if (pblActionActivity.getActivityTypeID() == "setAttributeValue" &&
                            pblActionActivity.operator == ActionPropertyPage.ActionOperators.Value &&
                            pblActionActivity.value ==
                            MscrmControls.ProcessDesigner.PBLStringConstants.NullStringForTypeClear) {
                            expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.Clear;
                            expressionDescriptor.value = null;
                        } else {
                            expressionDescriptor.selectedType = pblActionActivity.operator;
                            expressionDescriptor.value = {
                                selectedValue: pblActionActivity.value,
                                isText: false
                            };
                            expressionDescriptor.value
                                .isText = MetadataProxy
                                .isTextFieldNoOp(expressionDescriptor.selectedAttribute, self._entityLogicalName) ||
                                MetadataProxy
                                .isNumericField(expressionDescriptor.selectedAttribute, self._entityLogicalName);
                        }
                    }
                    deferred.resolve(expressionDescriptor);
                    return deferred.promise();
                });
                return deferred.promise();
            };
            ViewDescriptorProvider.prototype.getActionExpressionDescriptor = function(pblActionActivity) {
                var expressionDescriptor = new ActionPropertyPage.ActionViewDescriptor();
                expressionDescriptor.errorMessages = pblActionActivity.getErrorMessages();
                expressionDescriptor.isTaskFlow = ActionPropertyPage.isTaskFlow;
                var deferred = $.Deferred();
                var self = this;
                MetadataProxy.getAttributeList(self._entityLogicalName).then(function(attributeList) {
                    var filteredAttributeList = attributeList;
                    // Filter attributes for these types of actions to comply with legacy behaviour
                    switch (pblActionActivity.getActivityTypeID()) {
                    case "setMessage":
                    case "setFieldRequiredLevel":
                    case "setDisplayMode":
                        filteredAttributeList = self.filterAttributesForActions(attributeList);
                        break;
                    }
                    var isNew = (!pblActionActivity.field);
                    var firstKey;
                    var isNewExpr = (expressionDescriptor.selectedAttribute == "NEW_EXP");
                    expressionDescriptor.attributeList = filteredAttributeList;
                    for (var attribute in expressionDescriptor.attributeList) {
                        // get the first element
                        firstKey = attribute;
                        break;
                    }
                    expressionDescriptor
                        .selectedAttribute = (isNewExpr || isNew)
                        ? expressionDescriptor.attributeList[firstKey].logicalName
                        : pblActionActivity.field;
                    expressionDescriptor.isNew_ = isNew;
                    expressionDescriptor.selectedType = pblActionActivity.getActivityTypeID();
                    expressionDescriptor.selectedTypeField = ActionPropertyPage.ActionOperators.Field;
                    expressionDescriptor.selectedTypeValue = ActionPropertyPage.ActionOperators.Value;
                    expressionDescriptor.selectedTypeFormula = ActionPropertyPage.ActionOperators.Formula;
                    expressionDescriptor.SetMessage = ActionPropertyPage.ActionOperators.SetMessage;
                    expressionDescriptor.setVisibility = ActionPropertyPage.ActionOperators.Visibility;
                    expressionDescriptor.setFieldRequiredLevel = ActionPropertyPage.ActionOperators.FieldRequired;
                    expressionDescriptor.setDisplayMode = ActionPropertyPage.ActionOperators.DisplayMode;
                    if (ActionPropertyPage.isTaskFlow) {
                        expressionDescriptor.sourceList = MetadataProxy.getSourcesList();
                        expressionDescriptor.sourceList
                            .unshift(MscrmControls.ProcessDesigner.ControlManager.primaryEntityName);
                        // If the selected source is the primary entity, the option's id is the primary entity name, but if it is a related entity, the option's id is the relationship name
                        expressionDescriptor
                            .selectedSource = (pblActionActivity.entity instanceof
                                Microsoft.Crm.Workflow.Expressions.PrimaryEntity)
                            ? pblActionActivity.entity.get_entityName()
                            : pblActionActivity.entity.get_relationshipName();
                    }
                    switch (pblActionActivity.getActivityTypeID()) {
                    case "setAttributeValue":
                    case "setDefaultValue":
                        expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.Value;
                        break;
                    case "setFieldRequiredLevel":
                        expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.FieldRequired;
                        expressionDescriptor.value = {
                            setBusinessRequired: [
                                {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_BusinessRequired"),
                                    value: 1
                                }, {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_NotBusinessRequired"),
                                    value: 0
                                }
                            ],
                            selectedValue: pblActionActivity.value
                        };
                        break;
                    case "setDisplayMode":
                        expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.DisplayMode;
                        expressionDescriptor.value = {
                            setDisplayModes: [
                                {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Lock"),
                                    value: 1
                                }, {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Unlock"),
                                    value: 0
                                }
                            ],
                            selectedValue: pblActionActivity.value
                        };
                        break;
                    case "setVisibility":
                        expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.Visibility;
                        expressionDescriptor.value = {
                            setVisibilities: [
                                {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_SetVisibility_Yes"),
                                    value: 1
                                }, {
                                    name: MscrmControls.ProcessDesigner.MetadataProvider
                                        .getLocalizedString("ProcessDesignerControl_PBL_SetVisibility_No"),
                                    value: 0
                                }
                            ],
                            selectedValue: pblActionActivity.value
                        };
                        break;
                    case "setMessage":
                        expressionDescriptor.value = pblActionActivity.value;
                        expressionDescriptor.selectedType = ActionPropertyPage.ActionOperators.SetMessage;
                        break;
                    }
                    deferred.resolve(expressionDescriptor);
                    return deferred.promise();
                });
                return deferred.promise();
            };
            ViewDescriptorProvider.prototype.commonDataDescriptor = function(pblActionActivity) {
                var descriptor = new ActionPropertyPage.ActionViewDescriptor();
                var _window = window;
                descriptor.entityName = pblActionActivity.entity.entityName;
                descriptor.entityDisplayName = MscrmControls.ProcessDesigner.Util
                    .isNull(pblActionActivity.entity.entityName) ||
                    MscrmControls.ProcessDesigner.Util.isEmptyString(pblActionActivity.entity.entityName)
                    ? pblActionActivity.entity.entityName
                    : _window.Xrm.Internal.getEntityDisplayName(pblActionActivity.entity.entityName);
                descriptor.displayName = pblActionActivity.displayName;
                return descriptor;
            };
            ViewDescriptorProvider.prototype.customJavascriptViewDescriptor = function(pblActionActivity) {
                var descriptor = new ActionPropertyPage.ActionViewDescriptor();
                descriptor.errorMessages = pblActionActivity.getErrorMessages();
                descriptor.value = pblActionActivity.customJavascript;
                descriptor.displayName = pblActionActivity.displayName;
                return descriptor;
            };
            // Apply the same filter used by the legacy editor to filter out attributes compatible with actions other than SetVisibility
            ViewDescriptorProvider.prototype.filterAttributesForActions = function(attributeList) {
                var filteredAttributeList = {};
                for (var key in attributeList) {
                    var attributeMetadata = attributeList[key];
                    // Only attributes with sourceType equal to 0 (1 is for calculated and 2 for rollup attributes) are allowed
                    if (!MscrmControls.ProcessDesigner.Util
                        .isNull(attributeMetadata) &&
                        !attributeMetadata.sourceType) {
                        filteredAttributeList[key] = attributeMetadata;
                    }
                }
                return filteredAttributeList;
            };
            ViewDescriptorProvider.prototype.getValueType = function(entityName, attributeName) {
                return "";
            };
            return ViewDescriptorProvider;
        })();
        ActionPropertyPage.ViewDescriptorProvider = ViewDescriptorProvider;;
    })(ActionPropertyPage = MscrmControls.ActionPropertyPage || (MscrmControls.ActionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));