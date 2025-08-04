//---------------------------------------------------------------------------------------------
// <copyright file="IValid.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//---------------------------------------------------------------------------------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MscrmControls;
(function (MscrmControls) {
    var Common;
    (function (Common) {
        var View;
        (function (View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var EditViewBase = (function (_super) {
                __extends(EditViewBase, _super);
                function EditViewBase(options) {
                    _super.call(this, options);
                    this.get = Util.getValue(options, 'get', this.get_);
                    this.set = Util.getValue(options, 'set', this.set_);
                    var self = this;
                    _.bindAll(this, 'render');
                }
                EditViewBase.prototype.get_ = function () {
                };
                EditViewBase.prototype.set_ = function (any) {
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
(function (MscrmControls) {
    var Common;
    (function (Common) {
        var View;
        (function (View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var DateTimeUtil = MscrmControls.ProcessDesigner.DateTimeUtil;
            var DateTimeEditView = (function (_super) {
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
                    _.bindAll(this, "render", "keyPressedForDate", "updateDateTime", "dateChanged", "timeChanged", "initializeInlineControl");
                    this.initializeInlineControl();
                }
                DateTimeEditView.prototype.initialize = function () {
                };
                DateTimeEditView.prototype.render = function () {
                    this.$el = this.inlineControlView.get_chromeElement();
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
                                timeElement.attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                            }
                            else {
                                timeElement.attr("title", timeElement.val());
                            }
                        }
                        else {
                            timeElement.attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    }
                    if (this.$el.find("#DateInput").val().length > 0) {
                        this.$el.find("#DateInput").attr("title", this.$el.find("#DateInput").val());
                    }
                    else {
                        this.$el.find("#DateInput").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                    return this;
                };
                DateTimeEditView.prototype.keyPressedForDate = function (event) {
                    if ((event.type == "keydown" && event.keyCode == 13)) {
                        this.dateChanged(event);
                        $("#DateInput").focus();
                    }
                };
                DateTimeEditView.prototype.updateDateTime = function (event) {
                    var dateTimeControlEditView = this.inlineControlView.get_editView();
                    ProcessControl.Configuration.BPFClientProxy.updateDateTimeControl(dateTimeControlEditView);
                    if (this.inlineControlView.get_validateResult().isValid) {
                        var dateTimeStr = dateTimeControlEditView.get_dataContext().get_attribute().get_rawValue();
                        if (dateTimeStr != null) {
                            var dateTimeGMT = ProcessControl.Configuration.BPFClientProxy.getUserSettingTime(dateTimeStr, !this.isTimeRendered);
                            this.set(dateTimeGMT);
                        }
                        else {
                            this.set(" ");
                        }
                    }
                    else {
                        this.$el.find("#DateInput").val("");
                        this.inlineControlView.clearValidation();
                        this.$el.find("#DateInput").trigger("change");
                    }
                    event.stopPropagation();
                };
                DateTimeEditView.prototype.dateChanged = function (event) {
                    this.updateDateTime(event);
                    this.$el.find("#" + this.dateTimeElementId + "_iTimeInput").addClass("prop-exp-input");
                    if (!$("#" + this.dateTimeElementId + "_iTimeInput").hasClass("ms-crm-ReadOnly")) {
                        this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex", 0);
                    }
                    else if ($("#" + this.dateTimeElementId + "_iTimeInput").hasClass("ms-crm-ReadOnly")) {
                        if (this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex") == "0") {
                            this.$el.find(".ms-crm-InlineDuration-Icon").attr("tabindex", "");
                        }
                    }
                    if (event.currentTarget != null && event.currentTarget != undefined) {
                        $("." + $(event.currentTarget).prop("class").split(" ")[1] + "").focus();
                    }
                    if (this.$el.find("#DateInput").val().length > 0) {
                        this.$el.find("#DateInput").attr("title", this.$el.find("#DateInput").val());
                    }
                    else {
                        this.$el.find("#DateInput").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        this.$el.find("#" + this.dateTimeElementId + "_iTimeInput").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                };
                DateTimeEditView.prototype.timeChanged = function (event) {
                    this.updateDateTime(event);
                    if (event.currentTarget != null && event.currentTarget != undefined) {
                        $("." + $(event.currentTarget).prop("class").split(" ")[0] + "").focus();
                    }
                    var timeElement = this.$el.find("#" + this.dateTimeElementId + "_iTimeInput");
                    if (timeElement.val().length > 0) {
                        if (timeElement.val() == " ") {
                            timeElement.attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                        else {
                            timeElement.attr("title", timeElement.val());
                        }
                    }
                    else {
                        timeElement.attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                    }
                };
                DateTimeEditView.prototype.initializeInlineControl = function () {
                    var dateTimeContainerId = "dateTimeContainer";
                    if (document.getElementById(dateTimeContainerId) == null) {
                        var dateTimeContainer = document.createElement('div');
                        dateTimeContainer.style.visibility = "hidden";
                        dateTimeContainer.id = dateTimeContainerId;
                        document.body.appendChild(dateTimeContainer);
                    }
                    this.dateTimeElementId = "dateTimeContol_" + this.cid;
                    var element = ProcessControl.Configuration.BPFClientProxy.buildChromeElement(this.dateTimeElementId);
                    $("#dateTimeContainer").html(element.get_jQueryObject());
                    var initialDateTime = null;
                    if (this.get() != null && this.get() != "" && this.get() != " ") {
                        if (this.isTimeRendered) {
                            initialDateTime = new Date(this.get());
                        }
                        else {
                            initialDateTime = ProcessControl.Configuration.BPFClientProxy.parseDateInvariant(this.get());
                        }
                    }
                    this.inlineControlView = ProcessControl.Configuration.BPFClientProxy.createInlineDateTimeControl(element.get_jQueryObject(), this.dateTimeElementId, initialDateTime, dateTimeContainerId, !this.isTimeRendered);
                    this.inlineControlView.clearValidation();
                    var editElementId = this.inlineControlView.get_editView().get_editElement()[0].id;
                    $('label[for=' + editElementId + ']').remove();
                    $("#" + this.dateTimeElementId + " .ms-crm-Inline-Edit").css("margin-left", "0");
                    $("#" + this.dateTimeElementId + "_warn").css("width", "0");
                    $("#" + this.dateTimeElementId + "_warn").css("height", "0");
                    $("#" + this.dateTimeElementId + " .ms-crm-InlineDateTime-IconCell").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Calendar"));
                    $("#" + this.dateTimeElementId + " .ms-crm-InlineDateTime-IconCell").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Calendar"));
                    $("#" + this.dateTimeElementId + "_iimg").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Calendar"));
                    $("#" + this.dateTimeElementId + " .ms-crm-InlineDateTime-TimeCell").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                    $("#" + this.dateTimeElementId + " .ms-crm-ImageStrip-inlineedit_time_icon_disabled").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                    $("#" + this.dateTimeElementId + "_iTimeInput").attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Time_Picker"));
                };
                return DateTimeEditView;
            })(View.EditViewBase);
            View.DateTimeEditView = DateTimeEditView;
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
(function (MscrmControls) {
    var Common;
    (function (Common) {
        var View;
        (function (View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var LookupEditView = (function (_super) {
                __extends(LookupEditView, _super);
                function LookupEditView(options) {
                    _super.call(this, options);
                    this.targetEntity = Util.getValue(options, 'targetEntity', []);
                    this.attribute = options.model.getAttribute();
                    this.entity = options.model.entityLogicalName;
                    this.isMulti = Util.getValue(options, 'isMulti', false);
                    this.getNameCB = Util.getValue(options, 'getNameCB', function () { return ''; });
                    this.setNameCB = Util.getValue(options, 'setNameCB', function () { return ''; });
                    _.bindAll(this, 'launchLookupDialog', 'lookupDialogCloseCallback');
                }
                LookupEditView.prototype.initialize = function () {
                    this.tagName = 'div';
                };
                LookupEditView.prototype.render = function () {
                    var self = this;
                    self.$el.append("<input type='text' id='txtLookup_" + this.cid + "' name='lookup' class='prop-lookup-textbox' /><span id='btnSearch_" + this.cid + "' class='prop-CCFSymbolFont prop-findSymbol prop-find-fontIcons-size' ></span>");
                    this.$("#btnSearch_" + this.cid).on('click', this.launchLookupDialog);
                    this.$("#txtLookup_" + this.cid).on('click', this.launchLookupDialog);
                    this.$("#btnSearch_" + this.cid).keydown(function (event) {
                        if (event.which == 13) {
                            $("#" + event.target.id).trigger("click");
                        }
                        event.stopImmediatePropagation();
                    });
                    this.$("#txtLookup_" + this.cid).keydown(function (event) {
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
                    return this;
                };
                LookupEditView.prototype.launchLookupDialog = function (event) {
                    ProcessControl.Configuration.BPFClientProxy.launchLookupDialog(this.entity, this.attribute, this.lookupDialogCloseCallback);
                };
                LookupEditView.prototype.lookupDialogCloseCallback = function (dialogParams, callbackParams) {
                    var lookupControlItems = dialogParams["items"];
                    if (lookupControlItems.length > 0) {
                        this.setNameCB(lookupControlItems[0].name);
                        this.selectedValue = lookupControlItems[0].id;
                        this.$(".prop-lookup-textbox").trigger('change');
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
// <copyright file="PicklistView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Picklist View
// </summary>
//---------------------------------------------------------------------------------------------
/// <reference path="./IValid.ts"/>
var MscrmControls;
(function (MscrmControls) {
    var Common;
    (function (Common) {
        var View;
        (function (View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var PickListEditView = (function (_super) {
                __extends(PickListEditView, _super);
                function PickListEditView(options) {
                    _super.call(this, options);
                    this.options = options;
                    this.selectedValues = [];
                    this.pickListCB = Util.getValue(options, 'pickListCB', this.callBack);
                }
                PickListEditView.prototype.initialize = function () {
                    this.tagName = 'div';
                    this.events = {
                        'click #prop-picklistValue': 'valueChanged'
                    };
                };
                PickListEditView.prototype.callBack = function (options) {
                    var deferred = $.Deferred();
                    deferred.resolve(this);
                    return deferred.promise();
                };
                PickListEditView.prototype.loadPickList = function () {
                    var deferred = $.Deferred();
                    var self = this;
                    this.$el.addClass('headline4 prop-picklist-container');
                    this.pickListCB(this.options).then(function (values) {
                        var pickListValues = values;
                        self.selectedValues = self.get();
                        _.each(pickListValues, function (item) {
                            var checked = (self.selectedValues.indexOf(item.pickListValueOrderId.toString()) >= 0) ? 'checked' : '';
                            self.$el.append("<div><input id='prop-picklistValue' class='prop-picklist-checkbox' tabindex='" + Util.tabIndexValue + "' type='checkbox' value='" + item.pickListValueOrderId + "' " + checked + "><span class='headline2'>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(item.pickListValue) + '</span></div>');
                        });
                        deferred.resolve(self);
                    });
                    return deferred.promise();
                };
                PickListEditView.prototype.render = function () {
                    return this.loadPickList();
                };
                PickListEditView.prototype.updateView = function () {
                };
                PickListEditView.prototype.valueChanged = function (event) {
                    var checkBox = event.target;
                    var value = checkBox.value;
                    if (checkBox.checked && this.selectedValues.indexOf(value) == -1) {
                        this.selectedValues.push(value);
                    }
                    else {
                        for (var i = this.selectedValues.length - 1; i >= 0; i--) {
                            if (this.selectedValues[i] == checkBox.value) {
                                this.selectedValues.splice(i, 1);
                            }
                        }
                    }
                    this.set(this.selectedValues.sort());
                    if (event != null && event.target != null && event.target != undefined) {
                        $("input:checkbox[class=prop-picklist-checkbox]").each(function () {
                            if ($(this).val() == value) {
                                $(".prop-picklist-checkbox").parent().find("[value~= " + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode($(this).val()) + "]").focus();
                            }
                        });
                    }
                    event.stopPropagation();
                };
                return PickListEditView;
            })(View.EditViewBase);
            View.PickListEditView = PickListEditView;
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
(function (MscrmControls) {
    var Common;
    (function (Common) {
        var View;
        (function (View) {
            var Util = MscrmControls.ProcessDesigner.Util;
            var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
            var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
            var TextBoxEditView = (function (_super) {
                __extends(TextBoxEditView, _super);
                function TextBoxEditView(options) {
                    options.tagName = Util.getStringValue(options, 'tagName', 'input');
                    options.attributes.type = Util.getStringValue(options, 'attributes.type', 'text');
                    _super.call(this, options);
                    var self = this;
                    var model = self.model;
                    var attributeType = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].attributeType;
                    this.$el.on("change", function (event) {
                        var value = self.$el.val();
                        var oldValue;
                        var isNumber = false;
                        var model = self.model;
                        var conditionExpression = model.get('_expression');
                        switch (attributeType) {
                            case AttributeType.DateTime:
                                if (!conditionExpression._value._isFormula || Util.isNull(conditionExpression._value._formula) || conditionExpression._value._formula == undefined || conditionExpression._value._formula._isAttribute) {
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
                                    if (!conditionExpression._value._isFormula || Util.isNull(conditionExpression._value._formula) || conditionExpression._value._formula == undefined || conditionExpression._value._formula._isAttribute) {
                                        break;
                                    }
                                case AttributeType.BigInt:
                                case AttributeType.Decimal:
                                case AttributeType.Double:
                                case AttributeType.Integer:
                                case AttributeType.Money:
                                    if (!Util.isNull(value) && !Util.isEmptyString(value) && value != 'NaN' && !isNaN(value)) {
                                        if (!Util.isNull(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()])) {
                                            var precision = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].precision;
                                            if (!Util.isNull(precision) && precision != undefined) {
                                                precision = parseInt(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].precision, 10);
                                            }
                                            else {
                                                precision = 0;
                                            }
                                            value = Mscrm.NumberUtility.addFormatting(parseFloat(value.trim()), precision);
                                            self.$el.val(value);
                                        }
                                    }
                                    break;
                            }
                        }
                    });
                }
                TextBoxEditView.prototype.initialize = function () {
                };
                TextBoxEditView.prototype.render = function () {
                    var model = this.model;
                    var conditionExpression = this.model.get('_expression');
                    var value = null;
                    if (conditionExpression._value._isFormula) {
                        value = model.getFormula()._value;
                    }
                    else {
                        value = model.getValue()._value;
                    }
                    if (value instanceof Array) {
                        if (value.length > 0) {
                            value = value[0];
                        }
                        else {
                            return this;
                        }
                    }
                    var attributeType = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].attributeType;
                    switch (attributeType) {
                        case AttributeType.DateTime:
                            if (!conditionExpression._value._isFormula || Util.isNull(conditionExpression._value._formula) || conditionExpression._value._formula == undefined || conditionExpression._value._formula._isAttribute) {
                                break;
                            }
                        case AttributeType.BigInt:
                        case AttributeType.Decimal:
                        case AttributeType.Double:
                        case AttributeType.Integer:
                        case AttributeType.Money:
                            if (!Util.isNull(value) && !Util.isEmptyString(value) && value != 'NaN' && !isNaN(value) && !Util.isNull(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()])) {
                                var precision = MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].precision;
                                if (!Util.isNull(precision) && precision != undefined) {
                                    precision = parseInt(MetadataProxy.SourceAttributesMap[model.entityLogicalName][model.getAttribute()].precision, 10);
                                }
                                else {
                                    precision = 0;
                                }
                                value = Mscrm.NumberUtility.addFormatting(parseFloat(value.trim()), precision);
                                this.$el.val(value);
                            }
                            break;
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
// <copyright file="ConditionExpressionCollection.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Collection of ConditionExpression Models
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var ConditionExpressionCollection = (function (_super) {
            __extends(ConditionExpressionCollection, _super);
            function ConditionExpressionCollection(options) {
                _super.call(this, [], { model: ConditionPropertyPage.ConditionExpressionModel });
            }
            ConditionExpressionCollection.prototype.comparator = function (model) {
                return model.get("index");
            };
            return ConditionExpressionCollection;
        })(Backbone.Collection);
        ConditionPropertyPage.ConditionExpressionCollection = ConditionExpressionCollection;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionExpressionModel.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Condition Expression Model definition
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var ConditionExpression = MscrmControls.ProcessDesigner.ConditionExpression;
        var ConditionFormula = MscrmControls.ProcessDesigner.ConditionFormula;
        var Util = MscrmControls.ProcessDesigner.Util;
        var formulaOperator = MscrmControls.ProcessDesigner.formulaOperator;
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
        var ConditionOperator = MscrmControls.ProcessDesigner.ConditionOperator;
        var DateFormat = MscrmControls.ProcessDesigner.DateFormat;
        var ConditionExpressionModel = (function (_super) {
            __extends(ConditionExpressionModel, _super);
            function ConditionExpressionModel(attrs, options) {
                _super.call(this, attrs, options);
                this._initDone = false;
                this.defaults = {
                    _expression: new ConditionExpression(),
                    index: 0,
                    displayName: ""
                };
                var self = this;
                this.listenTo(self, "change", function () {
                    if (self._initDone) {
                        self.get('_expression').validateOnChange();
                    }
                });
                _.bindAll(this, 'getValue', 'getValues', 'getSingleValue', 'setValue', 'setSingleValue', 'getDisplayName', 'setDisplayName', 'getFormulaValue', 'setFormulaValue');
                this.id = ConditionPropertyPage.nextId++;
                this.entityLogicalName = options.entityLogicalName;
                this.viewDescriptorProvider = new ConditionPropertyPage.ViewDescriptorProvider(this.entityLogicalName);
                this.errorMessages = attrs.errorMessages;
                this.validationMode = attrs.validationMode;
            }
            ConditionExpressionModel.prototype.initDone = function () {
                this._initDone = true;
            };
            ConditionExpressionModel.prototype.getErrorMessages = function () {
                return this.get('_expression').getErrorMessages();
            };
            ConditionExpressionModel.isUniversalStringOperator = function (operator) {
                return (ConditionExpressionModel.universalStringOperators.indexOf(operator) > -1);
            };
            ConditionExpressionModel.isLookupType = function (attributeType) {
                return (ConditionExpressionModel.lookupFieldTypes.indexOf(attributeType) > -1);
            };
            ConditionExpressionModel.isStatusType = function (attributeType) {
                return (ConditionExpressionModel.statusFieldTypes.indexOf(attributeType) > -1);
            };
            ConditionExpressionModel.prototype.setSource = function (value) {
                var exp = this.get('_expression');
                exp._entity = value;
                exp._attribute = "NEW_EXP";
                this.set('_expression', exp);
                exp._value._isFormula = false;
                exp._value._isAttribute = false;
                exp._value._isLookup = false;
                exp._operator = '';
                this.entityLogicalName = value.get_entityName();
                this.viewDescriptorProvider = new ConditionPropertyPage.ViewDescriptorProvider(value.get_entityName());
                var self = this;
                if (ConditionPropertyPage.isTaskFlow) {
                    MetadataProxy.getAttributeList(value.get_entityName(), value.relationshipName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap[value.get_entityName()] != null)
                            attributeList = MetadataProxy.SourceAttributesMap[value.get_entityName()];
                        for (var firstKey in attributeList) {
                            break;
                        }
                        self.setAttribute(attributeList[firstKey].logicalName);
                    });
                }
            };
            ConditionExpressionModel.prototype.setValueSource = function (value) {
                var exp = this.get('_expression');
                exp._value._entity = value;
                var self = this;
                MetadataProxy.getComparableAttributes(exp._entity.get_entityName(), exp._attribute, value.get_entityName()).then(function (attributeList) {
                    for (var firstKey in attributeList) {
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        exp._value._value = [attributeList[firstKey].logicalName];
                        exp._value._attributeType = MetadataProxy.getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                    self.set('_expression', exp);
                });
            };
            ConditionExpressionModel.prototype.setFormulaSource = function (value) {
                var exp = this.get('_expression');
                exp._value._formula._leftEntity = value;
                var self = this;
                MetadataProxy.getComparableAttributes(exp._entity.get_entityName(), exp._attribute, value.get_entityName()).then(function (attributeList) {
                    for (var firstKey in attributeList) {
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        exp._value._formula._attribute = attributeList[firstKey].logicalName;
                        exp._value._formula._leftAttributeType = MetadataProxy.getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                    self.set('_expression', exp);
                });
            };
            ConditionExpressionModel.prototype.setFormulaValueSource = function (value) {
                var exp = this.get('_expression');
                exp._value._formula._rightEntity = value;
                var self = this;
                MetadataProxy.getComparableAttributes(exp._entity.get_entityName(), exp._attribute, value.get_entityName()).then(function (attributeList) {
                    for (var firstKey in attributeList) {
                        break;
                    }
                    if (firstKey != null && firstKey != undefined) {
                        exp._value._formula._value = attributeList[firstKey].logicalName;
                        exp._value._formula._rightAttributeType = MetadataProxy.getAttributeType(attributeList[firstKey].logicalName, value.get_entityName());
                    }
                    self.set('_expression', exp);
                });
            };
            ConditionExpressionModel.prototype.setAttribute = function (value) {
                var exp = this.get('_expression');
                exp._attribute = value;
                exp._operator = '';
                exp._value._isFormula = false;
                exp._value._isAttribute = false;
                exp._value._isLookup = false;
                exp._attributeType = MetadataProxy.getAttributeType(exp._attribute.trim(), this.entityLogicalName);
                exp._value._attributeType = exp._attributeType;
                if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(value, this.entityLogicalName))) {
                    exp._value._isLookup = true;
                }
                exp._value._value = [];
                exp._value._lookupEntityType = null;
                exp._value._lookupLabel = null;
                this.set('_expression', exp);
                this.set('displayName', "");
            };
            ConditionExpressionModel.prototype.setOperator = function (value) {
                var exp = this.get('_expression').clone();
                exp._operator = value;
                if (MetadataProxy.isUnaryOperator(value))
                    exp._hasConditionExpChanged = true;
                if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName))) {
                    if (ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                        exp._value._attributeType = AttributeType.String;
                        exp._value._isLookup = false;
                        exp._value._lookupEntityType = null;
                        exp._value._lookupLabel = null;
                    }
                    else {
                        exp._value._isLookup = true;
                        exp._value._attributeType = AttributeType.Lookup;
                    }
                }
                else if (ConditionExpressionModel.isStatusType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName)) && ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                    exp._value._attributeType = AttributeType.String;
                }
                else {
                    exp._value._isLookup = false;
                }
                if (this.clearValueOnOperatorChange(exp._attribute, this.entityLogicalName, value)) {
                    exp._value._value = [];
                }
                this.set('_expression', exp);
            };
            ConditionExpressionModel.prototype.clearValueOnOperatorChange = function (attributeName, entityLogicalName, currentOperator) {
                var prevOperator = this.get('_expression')._operator;
                if (MetadataProxy.isTextFieldNoOp(attributeName, entityLogicalName)) {
                    return false;
                }
                else if ((prevOperator == ConditionOperator.Equal && currentOperator == ConditionOperator.NotEqual) || (prevOperator == ConditionOperator.NotEqual && currentOperator == ConditionOperator.Equal)) {
                    return false;
                }
                else if (MetadataProxy.getAttributeType(attributeName, entityLogicalName) == AttributeType.DateTime && !(currentOperator == ConditionOperator.NotOn || currentOperator == ConditionOperator.On)) {
                    return false;
                }
                return true;
            };
            ConditionExpressionModel.prototype.setType = function (value) {
                var exp = this.get('_expression');
                if (value == ConditionPropertyPage.ValueType.Attribute) {
                    exp._value._isAttribute = true;
                    exp._value._isFormula = false;
                    exp._value._isLookup = false;
                    exp._value._value = [];
                    exp._value._attributeType = exp._attributeType;
                    if (ConditionPropertyPage.isTaskFlow) {
                        exp._value._entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    }
                    if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName))) {
                        exp._value._lookupEntityType = null;
                        exp._value._lookupLabel = null;
                    }
                }
                else if (value == ConditionPropertyPage.ValueType.Formula) {
                    exp._value._isFormula = true;
                    exp._value._isAttribute = false;
                    exp._value._isLookup = false;
                    exp._value._value = [];
                    exp._value._attributeType = exp._attributeType;
                    exp._value._formula = new ConditionFormula();
                    exp._value._formula._attribute = "NEW_EXP";
                    exp._value._formula._operator = formulaOperator.Add;
                    exp._value._formula._value = "0";
                    if (ConditionPropertyPage.isTaskFlow) {
                        exp._value._formula._leftEntity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                    }
                }
                else {
                    exp._value._isFormula = false;
                    exp._value._isAttribute = false;
                    if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName)) && !ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                        exp._value._isLookup = true;
                        exp._value._attributeType = MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName);
                    }
                    else {
                        exp._value._isLookup = false;
                        exp._value._attributeType = exp._attributeType;
                    }
                    exp._value._value = [];
                }
                this.set('_expression', exp);
            };
            ConditionExpressionModel.prototype.modifySource = function (value) {
                this.setSource(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.modifyValueSource = function (value) {
                this.setValueSource(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.modifyFormulaSource = function (value) {
                this.setFormulaSource(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.modifyFormulaValueSource = function (value) {
                this.setFormulaValueSource(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.modifyAttribute = function (value) {
                this.setAttribute(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.getAttribute = function () {
                return this.get('_expression')._attribute.trim();
            };
            ConditionExpressionModel.prototype.getValue = function () {
                return this.get('_expression')._value;
            };
            ConditionExpressionModel.prototype.getValues = function () {
                return this.getValue()._value;
            };
            ConditionExpressionModel.prototype.getSingleValue = function () {
                return this.getValue()._value[0];
            };
            ConditionExpressionModel.prototype.modifyOperator = function (value) {
                this.setOperator(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.modifyType = function (value) {
                this.setType(value);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.setValue = function (value) {
                var exp = this.get('_expression');
                exp._value._value = value;
                exp._hasConditionExpChanged = true;
                this.set('_expression', exp);
                this.trigger('change');
            };
            ConditionExpressionModel.prototype.setSingleValue = function (value) {
                var exp = this.get('_expression');
                exp._value._value = [value];
                exp._hasConditionExpChanged = true;
                if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName)) && !ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                    exp._value._lookupEntityType = MetadataProxy.SourceAttributesMap[this.entityLogicalName][this.getAttribute()].targetEntityForLookUp[0];
                    exp._value._lookupLabel = this.getDisplayName();
                    this.set('_expression', exp);
                    this.trigger('changeEvent');
                }
                else {
                    this.set('_expression', exp);
                    this.trigger('change');
                }
            };
            ConditionExpressionModel.prototype.getDisplayName = function () {
                return this.get('displayName');
            };
            ConditionExpressionModel.prototype.setDisplayName = function (dName) {
                this.set("displayName", dName);
            };
            ConditionExpressionModel.prototype.updateDisplayName = function (uniqueId, entityNames) {
                _.each(entityNames, function (entityName) {
                    var displayFieldName = MetadataProxy.getDisplayFieldName(entityName);
                    var _window = window;
                    var columns = [displayFieldName];
                    _window.Xrm.Internal.messages.retrieve(entityName, uniqueId.toString(), columns).then(function (retrieveResponse) {
                        if (retrieveResponse) {
                            var responseEntity = retrieveResponse.entity;
                            if (responseEntity) {
                                var displayName = responseEntity.getValue(displayFieldName);
                                this.set('displayName', displayName);
                            }
                        }
                    }.bind(this), function () { });
                }.bind(this));
            };
            ConditionExpressionModel.prototype.setAttributeValue = function (attribute, value) {
                if (attribute == 'value') {
                    this.get('_expression')._value = value;
                    this.trigger('changeEvent');
                }
            };
            ConditionExpressionModel.prototype.resetTypeValue = function () {
                var exp = this.get('_expression');
                if (exp._value) {
                    exp._value._value = [];
                    exp._value._attributeType = exp._attributeType;
                    exp._value._isAttribute = false;
                    exp._value._isFormula = false;
                    exp._value._isLookup = false;
                    if (ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName))) {
                        if (ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                            exp._value._attributeType = AttributeType.String;
                        }
                        else {
                            exp._value._isLookup = true;
                        }
                    }
                    else if (ConditionExpressionModel.isStatusType(MetadataProxy.getAttributeType(exp._attribute, this.entityLogicalName)) && ConditionExpressionModel.isUniversalStringOperator(exp._operator)) {
                        exp._value._attributeType = AttributeType.String;
                    }
                    this.set('_expression', exp);
                }
            };
            ConditionExpressionModel.prototype.setFormula = function (value) {
                var exp = this.get('_expression');
                exp._value._formula = value;
                this.set('_expression', exp);
                this.trigger('changeEvent');
            };
            ConditionExpressionModel.prototype.getFormula = function () {
                var exp = this.get('_expression');
                if (exp._value) {
                    return exp._value._formula;
                }
                return null;
            };
            ConditionExpressionModel.prototype.getFormulaValue = function () {
                var formula = this.getFormula();
                return formula._value;
            };
            ConditionExpressionModel.prototype.setFormulaValue = function (val) {
                var formula = this.getFormula();
                formula._value = val;
            };
            ConditionExpressionModel.prototype.remove = function () {
                ConditionPropertyPage.PropertiesView.ConditionExpCollection.remove(this);
                ConditionPropertyPage.PropertiesView.ConditionExpCollection.trigger('reset');
            };
            ConditionExpressionModel.prototype.refreshConditionExpression = function (attribute, operator, valueType) {
                this.setAttribute(attribute);
                this.setOperator(operator);
                this.setType(valueType);
            };
            ConditionExpressionModel.prototype.getViewDescriptor = function () {
                return this.viewDescriptorProvider.getExpressionDescriptor(this.get("_expression"), this.get("index"));
            };
            ConditionExpressionModel.prototype.getExpressionText = function () {
                var exp = this.get('_expression');
                var text = '';
                if (exp._attribute == "NEW_EXP") {
                    return '';
                }
                try {
                    var operatorTypes = MetadataProxy.getOperatorList(AttributeType[exp._attributeType]);
                    var operatorType = $.grep(operatorTypes, function (e) { return e.value == exp._operator; });
                    var operatorText = "";
                    if (operatorType.length > 0) {
                        operatorText = operatorType[0].name;
                    }
                    var entityName = (ConditionPropertyPage.isTaskFlow && typeof exp._entity != "undefined") ? exp._entity.get_entityName() : this.entityLogicalName;
                    text = MetadataProxy.SourceAttributesMap[entityName][exp._attribute].displayName + ' ' + operatorText + ' ';
                    if (exp._value) {
                        if (exp._value._isFormula) {
                            var rightEntityName = (ConditionPropertyPage.isTaskFlow && exp._value._formula._rightEntity != undefined && !Util.isNull(exp._value._formula._rightEntity)) ? exp._value._formula._rightEntity.get_entityName() : this.entityLogicalName;
                            var leftEntityName = (ConditionPropertyPage.isTaskFlow && exp._value._formula._leftEntity != undefined && !Util.isNull(exp._value._formula._rightEntity)) ? exp._value._formula._leftEntity.get_entityName() : this.entityLogicalName;
                            var strValue = exp._value._formula._isAttribute ? MetadataProxy.SourceAttributesMap[rightEntityName][exp._value._formula._value].displayName : exp._value._formula._value;
                            text += '[' + MetadataProxy.SourceAttributesMap[leftEntityName][exp._value._formula._attribute].displayName + ' ' + ConditionPropertyPage.FormulaOperatorSymbol[exp._value._formula._operator] + ' ' + strValue + ']';
                        }
                        else if (!(typeof exp._value._value === 'undefined' || exp._value._value == null)) {
                            if (!exp._value._isAttribute && MetadataProxy.SourceAttributesMap && MetadataProxy.isEnumeratedField(this.getAttribute(), this.entityLogicalName) && !(ConditionExpressionModel.isStatusType(exp._attributeType) && ConditionExpressionModel.isUniversalStringOperator(exp._operator))) {
                                text += '[' + MetadataProxy.getPicklistValueNames(this.getAttribute(), exp._value._value).join() + ']';
                            }
                            else if (!exp._value._isAttribute && ConditionExpressionModel.isLookupType(MetadataProxy.getAttributeType(this.getAttribute(), this.entityLogicalName)) && !(ConditionExpressionModel.isUniversalStringOperator(exp._operator))) {
                                text += '[' + this.getDisplayName() + ']';
                            }
                            else {
                                entityName = (ConditionPropertyPage.isTaskFlow && typeof exp._value._entity != "undefined") ? exp._value._entity.get_entityName() : this.entityLogicalName;
                                var strValue;
                                if (exp._value._isAttribute) {
                                    strValue = typeof MetadataProxy.SourceAttributesMap[entityName][exp._value._value.toString()] != "undefined" ? MetadataProxy.SourceAttributesMap[entityName][exp._value._value.toString()].displayName : "";
                                }
                                else {
                                    strValue = exp._value._value.toString();
                                    if (exp._attributeType == 2 && !isNaN(Date.parse(strValue))) {
                                        var isDateOnly = false;
                                        if (MetadataProxy.SourceAttributesMap[entityName][exp._attribute]) {
                                            if ((MetadataProxy.SourceAttributesMap[entityName][exp._attribute].dateFormat == DateFormat[DateFormat.Date].toLowerCase()) || (exp._operator == ConditionOperator.NotOn || exp._operator == ConditionOperator.On)) {
                                                isDateOnly = true;
                                            }
                                        }
                                        var userLang = window.USER_LANGUAGE_TWO_LETTER_NAME;
                                        var dateToBeLocalized;
                                        if (isDateOnly) {
                                            var userTime = ProcessControl.Configuration.BPFClientProxy.convertToUserSettingTime(exp._value._value, isDateOnly);
                                            dateToBeLocalized = ProcessControl.Configuration.BPFClientProxy.parseDateInvariant(userTime.toString());
                                        }
                                        else {
                                            var userTime = ProcessControl.Configuration.BPFClientProxy.convertToUserSettingTime(new Date(exp._value._value), isDateOnly);
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
                                }
                                text += '[' + strValue + ']';
                            }
                        }
                    }
                }
                catch (ex) {
                    console.log(ex.stack);
                    text = '';
                }
                return text;
            };
            ConditionExpressionModel.prototype.sync = function () {
            };
            ConditionExpressionModel.universalStringOperators = [ConditionOperator.Contains, ConditionOperator.DoesNotContain, ConditionOperator.BeginsWith, ConditionOperator.DoesNotBeginWith, ConditionOperator.EndsWith, ConditionOperator.DoesNotEndWith];
            ConditionExpressionModel.lookupFieldTypes = [AttributeType.Lookup, AttributeType.Owner, AttributeType.Customer];
            ConditionExpressionModel.statusFieldTypes = [AttributeType.State, AttributeType.Status];
            return ConditionExpressionModel;
        })(Backbone.Model);
        ConditionPropertyPage.ConditionExpressionModel = ConditionExpressionModel;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionProperties.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Condition properties model definition
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var ConditionExpression = MscrmControls.ProcessDesigner.ConditionExpression;
        var Value = MscrmControls.ProcessDesigner.Value;
        var ConditionProperties = (function (_super) {
            __extends(ConditionProperties, _super);
            function ConditionProperties(options) {
                _super.call(this, options);
                this.defaults = {
                    entityLogicalName: '',
                    conditionName: '',
                    ruleLogic: ConditionPropertyPage.RuleLogic.And,
                    description: '',
                    expressionList: new ConditionPropertyPage.ConditionExpressionCollection()
                };
                this.entityLogicalName = options.entityLogicalName;
                this.viewDescriptorProvider = new ConditionPropertyPage.ViewDescriptorProvider(this.entityLogicalName);
            }
            ConditionProperties.prototype.getViewDescriptor = function () {
                return this.viewDescriptorProvider.getConditionPropertyDescriptor({
                    conditionName: this.get('conditionName'),
                    entityLogicalName: this.entityLogicalName,
                    ruleLogic: this.get('ruleLogic'),
                    description: this.get('description'),
                    conditionExpression: this.getConditionExpressionText()
                });
            };
            ConditionProperties.prototype.addCondition = function () {
                var exp = this.createExpression();
                this.get('expressionList').create(exp, { entityLogicalName: this.get('entityLogicalName') });
            };
            ConditionProperties.prototype.createExpression = function () {
                var exp = new ConditionExpression();
                var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                exp._parentConditionActivity = propertyViewCurrentModel;
                exp._attribute = 'NEW_EXP';
                exp._value = new Value();
                if (ConditionPropertyPage.isTaskFlow) {
                    exp._entity = new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(MscrmControls.ProcessDesigner.processStep);
                }
                exp._value._isAttribute = false;
                exp._value._isFormula = false;
                exp._value._isLookup = false;
                exp._value._value = [];
                return {
                    _expression: exp,
                    index: 1 + this.get('expressionList').length
                };
            };
            ConditionProperties.prototype.getConditionExpressionText = function () {
                var expList = this.get('expressionList');
                if (expList.length > 1) {
                    $("#conditionRuleLogic").show();
                }
                else {
                    $("#conditionRuleLogic").hide();
                }
                var expressionString = expList.map(function (exp) {
                    return '(' + exp.getExpressionText().trim() + ')';
                });
                return expressionString.join(' ' + $('#rule').find(":selected").text().trim() + ' ');
            };
            ConditionProperties.prototype.getConditionExpressionList = function () {
                var expList = this.get('expressionList');
                var expressionList = expList.map(function (exp) {
                    return exp.get("_expression");
                });
                return expressionList;
            };
            ConditionProperties.prototype.getConditionExpressions = function () {
                return this.getConditionExpressionList();
            };
            return ConditionProperties;
        })(Backbone.Model);
        ConditionPropertyPage.ConditionProperties = ConditionProperties;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ValueModel.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Condition Expression Value model
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var ValueModel = (function (_super) {
            __extends(ValueModel, _super);
            function ValueModel(options) {
                _super.call(this, options);
                this.defaults = {
                    attributeName: '',
                    valueType: ''
                };
            }
            ValueModel.prototype.setAttributeName = function (name) {
                this.set('attributeName', name);
            };
            ValueModel.prototype.setValueType = function (type) {
                this.set('valueType', type);
            };
            return ValueModel;
        })(Backbone.Model);
        ConditionPropertyPage.ValueModel = ValueModel;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
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
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var DateTimeControlView = (function (_super) {
            __extends(DateTimeControlView, _super);
            function DateTimeControlView(isTimeRendered, options) {
                _super.call(this, options);
                _.bindAll(this);
                this.isTimeRendered = isTimeRendered;
            }
            DateTimeControlView.prototype.initialize = function () {
                this.tagName = 'div';
            };
            DateTimeControlView.prototype.render = function () {
                var self = this;
                if (this.isTimeRendered) {
                    self.$el.append("<div><input type='text' id='datepicker_" + this.cid + "'/><select id='timeDropDown_" + this.cid + "'><option>12:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>12:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>1:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>1:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>2:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>2:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>3:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>3:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>4:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>4:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>5:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>5:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>6:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>6:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>7:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>7:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option selected>8:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>8:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>9:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>9:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>10:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>10:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>11:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>11:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_AM") + "</option><option>12:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>12:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>1:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>1:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>2:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>2:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>3:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>3:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>4:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>4:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>5:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>5:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>6:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>6:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>7:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>7:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>8:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>8:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>9:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>9:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>10:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>10:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>11:00 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option><option>11:30 " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_PM") + "</option></select></div>");
                }
                else {
                    self.$el.append("<div><input type='text' id='datepicker_" + this.cid + "'/></div>");
                }
                this.$("#datepicker_" + this.cid).datepicker({
                    dateFormat: 'm/d/yy',
                    showOn: "both",
                    buttonText: "<span class='bpfprop-calendar-fontIcons-size bpfprop-CCFSymbolFont bpfprop-calendarSymbol'></span>"
                });
                this.$("#datepicker_" + this.cid).on('change', this.dateChanged);
                this.$("#timeDropDown_" + this.cid).on('change', this.timeChanged);
                if (this.isTimeRendered) {
                    this.$el.find("#datepicker_" + this.cid).addClass('bpfprop-datepicker-datetime-input-height-width');
                    this.$el.find("#timeDropDown_" + this.cid).addClass('bpfprop-timeDropDown-height-width');
                }
                else {
                    this.$el.find("#datepicker_" + this.cid).addClass('bpfprop-datepicker-dateOnly-input-height-width');
                }
                this.$el.find("#datepicker_" + this.cid).next().addClass('bpfprop-calendar-button');
                var values = self.model.getValue()._value;
                if (values.length > 0) {
                    self.selectedDate = values;
                }
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
            DateTimeControlView.prototype.updateView = function () {
            };
            DateTimeControlView.prototype.setDate = function (date) {
                this.$("#datepicker_" + this.cid).val(date);
            };
            DateTimeControlView.prototype.setTime = function (time) {
                this.$("#timeDropDown_" + this.cid).val(time);
            };
            DateTimeControlView.prototype.getDate = function () {
                var dateUTC = "";
                var currentDate = this.$("#datepicker_" + this.cid).val();
                if (this.isTimeRendered) {
                    var timeControl = this.$("#timeDropDown_" + this.cid);
                    var currentTime = timeControl.find(":selected").text();
                    var dateString = currentDate + " " + currentTime;
                    var date = new Date(dateString);
                    dateUTC = date.toUTCString();
                    return dateUTC;
                }
                else {
                    currentDate = new Date(currentDate);
                    currentDate = currentDate.toString().split(' ').slice(0, 5).join(' ');
                    dateUTC = currentDate + " " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_GMT");
                    return dateUTC;
                }
            };
            DateTimeControlView.prototype.getTime = function () {
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
                        time = time + " " + MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_DateTimeUtil_GMT");
                        return time;
                    }
                }
                return time;
            };
            DateTimeControlView.prototype.dateChanged = function (event) {
                this.selectedDate = this.getDate();
                this.model.setValue([this.selectedDate]);
                event.stopPropagation();
            };
            DateTimeControlView.prototype.timeChanged = function (event) {
                var timeControl = event.target;
                var time = timeControl.value;
                this.selectedDate = this.getDate();
                this.model.setValue([this.selectedDate]);
                timeControl.value = time;
                event.stopPropagation();
            };
            return DateTimeControlView;
        })(Backbone.View);
        ConditionPropertyPage.DateTimeControlView = DateTimeControlView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
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
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var LookupView = (function (_super) {
            __extends(LookupView, _super);
            function LookupView(lookupStyle, targetEntity, options) {
                _super.call(this, options);
                _.bindAll(this);
                this.lookupStyle = lookupStyle;
                this.targetEntity = targetEntity;
            }
            LookupView.prototype.initialize = function () {
                this.tagName = 'div';
            };
            LookupView.prototype.render = function () {
                var self = this;
                self.$el.append("<input type='text' id='txtLookup_" + this.cid + "' name='lookup' class='bpfprop-lookup-textbox' /><span id='btnSearch_" + this.cid + "' class='bpfprop-CCFSymbolFont bpfprop-findSymbol bpfprop-find-fontIcons-size' ></span>");
                this.$("#btnSearch_" + this.cid).on('click', this.launchLookupDialog);
                this.$("#txtLookup_" + this.cid).on('click', this.launchLookupDialog);
                this.$("#btnSearch_" + this.cid).keydown(function (event) {
                    if (event.which == 13) {
                        $("#" + event.target.id).trigger("click");
                    }
                    event.stopImmediatePropagation();
                });
                this.$("#txtLookup_" + this.cid).keydown(function (event) {
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
            LookupView.prototype.launchLookupDialog = function (event) {
                var options = new Xrm.DialogOptions();
                var dialogParams = new ConditionPropertyPage.Dictionary();
                dialogParams["isMultiSelect"] = false;
                dialogParams["disableQuickFind"] = false;
                dialogParams["disableViewPicker"] = false;
                dialogParams["isInlineOrAssociateFormLookup"] = false;
                if (this.lookupStyle == 'single') {
                    dialogParams["optionset"] = this.targetEntity[0];
                    dialogParams["lookupStyle"] = "single";
                    dialogParams["selectedViewIds"] = null;
                }
                else if (this.lookupStyle == 'multi') {
                    var entityLogicalNames = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                    var entityDisplayNames = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(String))();
                    for (var i = 0; i < this.targetEntity.length; i++) {
                        if (Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get__securityContext$i()._isOperationEnabled$i(this.targetEntity[i], 1)) {
                            entityLogicalNames.add(this.targetEntity[i]);
                            entityDisplayNames.add(this.targetEntity[i]);
                        }
                    }
                    if (!entityLogicalNames.get_Count()) {
                        return;
                    }
                    dialogParams['logicalNames'] = entityLogicalNames;
                    dialogParams['displayNames'] = entityDisplayNames;
                    dialogParams['lookupStyle'] = 'multi';
                }
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().IsGridDialogContext = true;
                Xrm.Dialog.openDialog("Lookup", options, dialogParams, this.lookupDialogCloseCallback, null);
            };
            LookupView.prototype.lookupDialogCloseCallback = function (dialogParams, callbackParams) {
                if (dialogParams["lastButtonClicked"] == "add_id") {
                    var selectedViewModels = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()._getAllSelectedViewModelsForLookupDialog$i();
                    Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance()._clearAllSelectedViewModelsForLookupDialog$i();
                    var lookupControlItems = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Microsoft.Crm.Client.Core.ViewModels.LookupControlItem))();
                    var itemIdToBool = new ConditionPropertyPage.Dictionary();
                    for (var index = 0; index < selectedViewModels.length; index++) {
                        var selectedViewModel = selectedViewModels[index];
                        var modelContext = selectedViewModel.get_ModelContext();
                        var reference = modelContext.get__identifier$i();
                        var guid = reference.get__identifier$i().toLowerCase();
                        if (!itemIdToBool[guid]) {
                            var modelType = reference.get__modelType$i();
                            var identifier = reference.get__identifier$i();
                            var name = modelContext.get__namedReference$i().Name.toString();
                            var item = new Microsoft.Crm.Client.Core.ViewModels.LookupControlItem(modelType, identifier, name);
                            lookupControlItems.add(item);
                        }
                    }
                    if (lookupControlItems.get_Items().length > 0) {
                        this.selectedValue = lookupControlItems.get_Items()[0].id;
                        this.model.setValue([this.selectedValue]);
                        this.model.set("displayName", lookupControlItems.get_Items()[0].name);
                    }
                }
                Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().IsGridDialogContext = false;
            };
            return LookupView;
        })(Backbone.View);
        ConditionPropertyPage.LookupView = LookupView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="PicklistView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Picklist View for Condition Expression value field
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var PicklistView = (function (_super) {
            __extends(PicklistView, _super);
            function PicklistView(options) {
                _super.call(this, options);
                _.bindAll(this);
            }
            PicklistView.prototype.initialize = function () {
                this.tagName = 'div';
                this.events = {
                    'click #bpfprop-picklistValue': 'valueChanged'
                };
            };
            PicklistView.prototype.render = function () {
                var deferred = $.Deferred();
                var self = this;
                this.$el.addClass('headline4 bpfprop-picklist-container');
                var attributeLogicalName = this.model.getAttribute();
                var picklistValues;
                MetadataProxy.getPickListValues(this.model.entityLogicalName, attributeLogicalName).then(function (values) {
                    picklistValues = values;
                    self.selectedValues = self.model.getValue()._value;
                    _.each(picklistValues, function (item) {
                        var checked = (self.selectedValues.indexOf(item.pickListValueOrderId.toString()) >= 0) ? 'checked' : '';
                        self.$el.append("<div><input id='bpfprop-picklistValue' type='checkbox' value='" + item.pickListValueOrderId + "' " + checked + "><span>" + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode(item.pickListValue) + '</span></div>');
                    });
                    deferred.resolve(self);
                });
                return deferred.promise();
            };
            PicklistView.prototype.updateView = function () {
            };
            PicklistView.prototype.valueChanged = function (event) {
                var checkBox = event.target;
                var value = checkBox.value;
                if (checkBox.checked && this.selectedValues.indexOf(value) == -1) {
                    this.selectedValues.push(value);
                }
                else {
                    for (var i = this.selectedValues.length - 1; i >= 0; i--) {
                        if (this.selectedValues[i] == checkBox.value) {
                            this.selectedValues.splice(i, 1);
                        }
                    }
                }
                this.model.setValue(this.selectedValues.sort());
                if (event != null && event.target != null && event.target != undefined) {
                    $("input:checkbox[class=prop-picklist-checkbox]").each(function () {
                        if ($(this).val() == value) {
                            $(".prop-picklist-checkbox").parent().find("[value~= " + GenericWorkflowDesigner.CrmEncodeDecode.CrmHtmlEncode($(this).val()) + "]").focus();
                        }
                    });
                }
                event.stopPropagation();
            };
            return PicklistView;
        })(Backbone.View);
        ConditionPropertyPage.PicklistView = PicklistView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="PropertiesView.ts" company="Microsoft">
// Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Properties view
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var MetadataProvider = MscrmControls.ProcessDesigner.MetadataProvider;
        var Util = MscrmControls.ProcessDesigner.Util;
        ConditionPropertyPage.isTaskFlow = window["isTaskFlow"];
        var PropertiesView = (function (_super) {
            __extends(PropertiesView, _super);
            function PropertiesView(options) {
                _super.call(this, options);
                this.render();
                this.setToolTips();
                this.setTabIndex();
            }
            PropertiesView.prototype.initialize = function () {
                var self = this;
                PropertiesView.ConditionExpCollection = new ConditionPropertyPage.ConditionExpressionCollection();
                var errorMessages = this.splitByIndex(this.model._errorMessages);
                var validationMode = this.model.validationMode;
                this.expressionsList = [];
                this.model.conditionExpression.forEach(function (exp, idx) {
                    var errors = errorMessages[idx];
                    errors = errors ? errors : {};
                    var entityLogicalNameForConditionExpression = ConditionPropertyPage.isTaskFlow ? exp._entity.get_entityName() : self.model.entityName;
                    var expression = new ConditionPropertyPage.ConditionExpressionModel({
                        _expression: exp,
                        index: idx,
                        displayName: "",
                        errorMessages: errors,
                        validationMode: validationMode
                    }, { entityLogicalName: entityLogicalNameForConditionExpression });
                    self.expressionsList.push(expression);
                });
            };
            PropertiesView.prototype.splitByIndex = function (errorMessages) {
                var errors = {};
                if (errorMessages) {
                    for (var name in errorMessages) {
                        var index = name.split('.')[0];
                        errors[index] = {};
                        errors[index][name.split('.')[1]] = errorMessages[name];
                    }
                }
                return errors;
            };
            PropertiesView.prototype.render = function () {
                var entityName = this.model.entityName;
                var displayName = this.model.displayName;
                var logic = this.model.conditionExpression.length > 1 ? this.model.conditionExpression[1]._prevStepOperator : ConditionPropertyPage.RuleLogic.And;
                var descriptionMessage = MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyView_Description");
                descriptionMessage = window['String'].format(descriptionMessage, entityName);
                PropertiesView.conditionPropertiesView = new ConditionPropertyPage.ConditionPropertiesView({
                    model: new ConditionPropertyPage.ConditionProperties({
                        entityLogicalName: entityName,
                        conditionName: displayName,
                        ruleLogic: logic,
                        description: descriptionMessage,
                        expressionList: PropertiesView.ConditionExpCollection
                    })
                });
                PropertiesView.conditionPropertiesView.render();
                MscrmControls.ProcessDesigner.DOMUtil.renderPropertyPageLevelErrorMessages(this.model, $("#properties-panel"), this.model._errorMessages);
                PropertiesView.ConditionExpCollection.reset(this.expressionsList);
                PropertiesView.conditionPropertiesView.initDone();
                return this;
            };
            PropertiesView.prototype.setToolTips = function () {
                $('#prop-discard').attr('title', MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_DiscardChangesTooltip"));
                if ($('#prop-save').attr("disabled") == undefined) {
                    $('#prop-save').attr('title', MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Apply_Available"));
                }
                else {
                    $('#prop-save').attr('title', MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Apply_Unavailable"));
                }
                $('.prop-addnew').attr('title', MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_AddConditionRuleTooltip"));
            };
            PropertiesView.prototype.setTabIndex = function () {
                $('#name').attr('tabindex', Util.tabIndexValue);
                $('#rule').attr('tabindex', Util.tabIndexValue);
                $('#exptext').attr('tabindex', Util.tabIndexValue);
                $('#prop-discard').attr('tabindex', Util.tabIndexValue);
                $('#prop-save').attr('tabindex', Util.tabIndexValue);
                $('.prop-addnew').attr('tabindex', Util.tabIndexValue);
            };
            return PropertiesView;
        })(Backbone.View);
        ConditionPropertyPage.PropertiesView = PropertiesView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionExpressionView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Condition Expression View
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var ConditionFormula = MscrmControls.ProcessDesigner.ConditionFormula;
        var MetadataProvider = MscrmControls.ProcessDesigner.MetadataProvider;
        var DateTimeEditView = MscrmControls.Common.View.DateTimeEditView;
        var TextBoxEditView = MscrmControls.Common.View.TextBoxEditView;
        var PickListEditView = MscrmControls.Common.View.PickListEditView;
        var LookupEditView = MscrmControls.Common.View.LookupEditView;
        var Util = MscrmControls.ProcessDesigner.Util;
        var DOMUtil = MscrmControls.ProcessDesigner.DOMUtil;
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
        var ConditionOperator = MscrmControls.ProcessDesigner.ConditionOperator;
        var DateFormat = MscrmControls.ProcessDesigner.DateFormat;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var ConditionExpressionView = (function (_super) {
            __extends(ConditionExpressionView, _super);
            function ConditionExpressionView(options) {
                _super.call(this, options);
                this.template = _.template($('#exp-view').html());
                _.bindAll(this, 'formulaChanged');
                this.model.bind('changeEvent', this.render, this);
                this.model.bind('destroy', this.remove, this);
                ConditionExpressionView.self = this;
            }
            ConditionExpressionView.prototype.initialize = function () {
                this.tagName = 'div';
                this.events = {
                    'change #source': 'sourceChanged',
                    'change #attribute': 'attributeChanged',
                    'change #operator': 'operatorChanged',
                    'change #type': 'typeChanged',
                    'change #value': 'valueChanged',
                    'change #value-source': 'valueSourceChanged',
                    'change #formula-source': 'formulaSourceChanged',
                    'change #formula-value-source': 'formulaValueSourceChanged',
                    'keydown .prop-tab-close': 'keyPressed',
                    'click .prop-tab-close': 'removeExpression',
                    'change #formula-value': 'formulaChanged'
                };
                this._ensureElement();
            };
            ConditionExpressionView.prototype.render = function () {
                var deferred = $.Deferred();
                var self = this;
                this.model.getViewDescriptor().then(function (d) {
                    self.$el
                        .html(self.template(d))
                        .addClass('prop-section prop-expression');
                    var operator = self.model.get('_expression')._operator;
                    if (self.model.get('_expression')._attribute == 'NEW_EXP' || Util.isNull(operator) || Util.isEmptyString(operator)) {
                        self.refreshCondition();
                        ConditionPropertyPage.PropertiesView.conditionPropertiesView.updateConditionExpression();
                    }
                    var typeVal = self.$('#type').length > 0 ? self.$('#type') : null;
                    if (typeVal == null) {
                        self.model.resetTypeValue();
                    }
                    else if (typeVal && typeVal.val() && typeVal.val().trim() == ConditionPropertyPage.ValueType.Formula) {
                        self.$('#formula-attribute').on('change', self.formulaChanged);
                        self.$('#formula-operator').on('change', self.formulaChanged);
                        self.$('#formula-type').on('change', self.formulaChanged);
                        self.$('#formula-value').on('change', self.formulaChanged);
                        var formula = self.model.getFormula();
                        if (formula._isAttribute && formula._value == '') {
                            self.refreshFormula();
                        }
                        var attributeType = MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model.getAttribute()].attributeType;
                        if (attributeType == AttributeType.DateTime) {
                            attributeType = AttributeType.Integer;
                        }
                        var valueView = new TextBoxEditView({ model: self.model, attributeType: attributeType, get: self.model.getFormulaValue, set: self.model.setFormulaValue, attributes: { id: 'value', class: 'prop-input', value: self.model.getFormulaValue() } });
                        self.$("#formulaValueContainer").html(valueView.render().$el);
                        $('[id=valueFields]:has(#expression1)').addClass('prop-exp-div-formula');
                        $('[id=valueFields]:has(#expression1)').find('#branchpropertydetails_value').attr("style", "display: none !important");
                    }
                    else if (typeVal && typeVal.val() && typeVal.val().trim() == ConditionPropertyPage.ValueType.Value && self.model.get('_expression')._attribute != 'NEW_EXP') {
                        var displayName = self.model.getDisplayName();
                        if (Util.isEmptyString(displayName) && !Util.isNull(self.model.get("_expression").value)) {
                            displayName = self.model.get("_expression").value._lookupLabel;
                            self.model.setDisplayName(displayName);
                        }
                        if (Util.isEmptyString(displayName) || typeof displayName === 'undefined') {
                            if (MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model.getAttribute()].targetEntityForLookUp && self.model.get('_expression')._value.value.length > 0 && !(ConditionPropertyPage.ConditionExpressionModel.isUniversalStringOperator(self.model.get('_expression').operator))) {
                                self.model.updateDisplayName(self.model.get('_expression')._value.value, MetadataProxy.SourceAttributesMap[self.model.entityLogicalName][self.model.getAttribute()].targetEntityForLookUp);
                            }
                        }
                        self.renderValue();
                    }
                    else if (typeVal && typeVal.val() && typeVal.val().trim() == ConditionPropertyPage.ValueType.Attribute && ConditionPropertyPage.isTaskFlow) {
                        $('[id=valueFields]:has(.taskflow-source)').addClass('prop-exp-div-formula');
                        $('[id=fieldValueControls]:has(.taskflow-source)').addClass('prop-exp-input_type_value-field');
                        $('[id=valueFields]:has(.taskflow-source)').find('#branchpropertydetails_value').attr("style", "display: none !important");
                    }
                    self.setToolTips();
                    self.setTabIndex();
                    self.changedTooltips();
                    DOMUtil.renderErrorMessages(self.model, self.$el, self.model.getErrorMessages());
                    self.model.initDone();
                    Validation.Errors.refreshErrorMessages = ConditionExpressionView.refreshErrorMessages;
                    deferred.resolve(self);
                });
                return deferred.promise();
            };
            ConditionExpressionView.prototype.keyPressed = function (event) {
                if (event.keyCode == 32) {
                    if ($(event.currentTarget).hasClass("prop-close-disabled") == false) {
                        this.removeExpression(event);
                    }
                    return !(event.keyCode == 32);
                }
            };
            ConditionExpressionView.prototype.setToolTips = function () {
                this.$('.prop-addnew').attr('title', MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_AddConditionRuleTooltip"));
                this.$('.prop-tab-close').attr('title', MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_RemoveConditionRuleTooltip"));
            };
            ConditionExpressionView.prototype.setTabIndex = function () {
                this.$('#attribute').attr('tabindex', Util.tabIndexValue);
                this.$('#operator').attr('tabindex', Util.tabIndexValue);
                this.$('#type').attr('tabindex', Util.tabIndexValue);
                this.$('#value').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-addnew').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-tab-close').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-datepicker-datetime-input-height-width').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-timeDropDown-height-width').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-lookup-textbox').attr('tabindex', Util.tabIndexValue);
                this.$('.prop-findSymbol').attr('tabindex', Util.tabIndexValue);
            };
            ConditionExpressionView.prototype.pickListCB = function (options) {
                return MetadataProxy.getPickListValues(options.model.entityLogicalName, this.model.getAttribute());
            };
            ConditionExpressionView.prototype.renderValue = function () {
                var self = this;
                if (this.model.getValue()._value == null) {
                    this.model.setValue([]);
                }
                if (this.valueView) {
                    this.valueView.remove();
                }
                var attributeType = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model.getAttribute()].attributeType;
                var operatorType = ConditionOperator[this.$('#operator').val()];
                var isText = MetadataProxy.isTextField(this.model.getAttribute(), this.model.entityLogicalName, ConditionOperator[this.$('#operator').val()]);
                if (isText) {
                    attributeType = AttributeType.String;
                }
                switch (attributeType) {
                    case AttributeType.Picklist:
                    case AttributeType.State:
                    case AttributeType.Status:
                    case AttributeType.Boolean:
                        this.valueView = new PickListEditView({ model: this.model, get: this.model.getValues, set: this.model.setValue, pickListCB: this.pickListCB });
                        this.valueView.render().then(function (view) {
                            self.$("#valueContainer").html(view.$el);
                            ConditionPropertyPage.PropertiesView.conditionPropertiesView.updateConditionExpression();
                        });
                        break;
                    case AttributeType.Lookup:
                    case AttributeType.Owner:
                    case AttributeType.Customer:
                        if (MetadataProxy.SourceAttributesMap != null) {
                            var targetEntity = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model.getAttribute()].targetEntityForLookUp;
                            var isMulti = (targetEntity.length > 1);
                            this.valueView = new LookupEditView({ model: this.model, get: this.model.getSingleValue, set: this.model.setSingleValue, targetEntity: targetEntity, isMulti: isMulti, getNameCB: this.model.getDisplayName, setNameCB: this.model.setDisplayName });
                            this.$("#valueContainer").html(this.valueView.render().$el);
                            this.$("#valueContainer").find(".prop-lookup-textbox").bind("change", ConditionPropertyPage.PropertiesView.conditionPropertiesView.showUnsavedChangesNote);
                            this.$("#valueContainer .prop-lookup-textbox").addClass("prop-input");
                            this.$("#valueContainer .prop-lookup-textbox").parent().addClass("prop-exp-input_type_value");
                            this.$("#valueContainer .prop-findSymbol").addClass("prop-find");
                        }
                        if (this.$("#valueContainer") != null && this.$("#valueContainer").find(".prop-lookup-textbox") != null && this.$("#valueContainer").find(".prop-lookup-textbox").val() != null) {
                            this.$("#valueContainer").find(".prop-lookup-textbox").bind("change", ConditionPropertyPage.PropertiesView.conditionPropertiesView.showUnsavedChangesNote);
                            this.$("#valueContainer").find(".prop-lookup-textbox").focus();
                        }
                        break;
                    case AttributeType.DateTime:
                        var dateFormat = "";
                        if (MetadataProxy.SourceAttributesMap != null) {
                            dateFormat = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model.getAttribute()].dateFormat;
                        }
                        var isTimeRendered = (dateFormat === (DateFormat[DateFormat.DateTime].toLowerCase()));
                        if (operatorType == ConditionOperator[ConditionOperator.NotOn] || operatorType == ConditionOperator[ConditionOperator.On]) {
                            isTimeRendered = false;
                        }
                        this.valueView = new DateTimeEditView({ model: this.model, get: this.model.getSingleValue, set: this.model.setSingleValue, isTimeRendered: isTimeRendered });
                        this.$("#valueContainer").html(this.valueView.render().$el);
                        break;
                    case AttributeType.BigInt:
                    case AttributeType.Decimal:
                    case AttributeType.Double:
                    case AttributeType.Integer:
                    case AttributeType.Money:
                        this.valueView = new TextBoxEditView({ model: this.model, attributeType: attributeType, get: this.model.getSingleValue, set: this.model.setSingleValue, attributes: { id: 'value', class: 'prop-input headline4', tabindex: Util.tabIndexValue, value: this.model.getSingleValue() } });
                        this.$("#valueContainer").html(this.valueView.render().$el);
                        this.$("#valueContainer").children().attr("aria-labelledby", "branchpropertydetails_value");
                        if (this.$("#valueContainer").children().length > 0) {
                            if (this.$("#valueContainer").children().val() == "") {
                                this.$("#valueContainer").children().attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                            }
                            else {
                                this.$("#valueContainer").children().attr("title", this.$("#valueContainer").children().val());
                            }
                        }
                        break;
                    case AttributeType.String:
                        this.valueView = new TextBoxEditView({ model: this.model, allowEmpty: false, get: this.model.getSingleValue, set: this.model.setSingleValue, attributes: { id: 'value', class: 'prop-input headline4', tabindex: Util.tabIndexValue, value: this.model.getSingleValue() } });
                        this.$("#valueContainer").html(this.valueView.render().$el);
                        this.$("#valueContainer").find("#value").focus();
                        this.$("#valueContainer").children().attr("aria-labelledby", "branchpropertydetails_value");
                        if (this.$("#valueContainer").children().length > 0) {
                            if (this.$("#valueContainer").children().val() == "") {
                                this.$("#valueContainer").children().attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                            }
                            else {
                                this.$("#valueContainer").children().attr("title", this.$("#valueContainer").children().val());
                            }
                        }
                        break;
                }
            };
            ConditionExpressionView.prototype.changedTooltips = function () {
                this.$('#attribute').attr("title", this.$('#attribute :selected').text());
                this.$('#operator').attr("title", this.$('#operator :selected').text());
                this.$('#type').attr("title", this.$('#type :selected').text());
                this.$('#source').attr("title", this.$('#source :selected').text());
                if (this.$('#value').length > 0) {
                    if (this.$('#value').attr("role") != "combobox") {
                        if (!MscrmControls.ProcessDesigner.Util.isNull(this.$('#value').val()) && this.$('#value').val().length > 0) {
                            this.$('#value').attr("title", this.$('#value').val());
                        }
                        else {
                            this.$('#value').attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    }
                    else {
                        this.$('#value').attr("title", this.$('#value :selected').text());
                    }
                }
                this.$('#formula-attribute').attr("title", this.$('#formula-attribute :selected').text());
                this.$('#formula-operator').attr("title", this.$('#formula-operator :selected').text());
                this.$('#formula-type').attr("title", this.$('#formula-type :selected').text());
                this.$('#value-source').attr("title", this.$('#value-source :selected').text());
                this.$('#formula-source').attr("title", this.$('#formula-source :selected').text());
                this.$('#formula-value-source').attr("title", this.$('#formula-value-source :selected').text());
                this.$('#formula-value').attr("title", $('#formula-value :selected').text());
            };
            ConditionExpressionView.prototype.sourceChanged = function () {
                var sourceValue = this.$("#source").val();
                if (sourceValue) {
                    this.model.modifySource(MetadataProxy.SourceValueToEntityMap[sourceValue]);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$("#source").focus();
            };
            ConditionExpressionView.prototype.valueSourceChanged = function () {
                var valueSourceValue = this.$("#value-source").val();
                if (valueSourceValue) {
                    this.model.modifyValueSource(MetadataProxy.SourceValueToEntityMap[valueSourceValue]);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$("#value-source").focus();
            };
            ConditionExpressionView.prototype.formulaSourceChanged = function () {
                var formulaSourceValue = this.$("#formula-source").val();
                if (formulaSourceValue) {
                    this.model.modifyFormulaSource(MetadataProxy.SourceValueToEntityMap[formulaSourceValue]);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$("#formula-source").focus();
            };
            ConditionExpressionView.prototype.formulaValueSourceChanged = function () {
                var formulaValueSourceValue = this.$("#formula-value-source").val();
                if (formulaValueSourceValue) {
                    this.model.modifyFormulaValueSource(MetadataProxy.SourceValueToEntityMap[formulaValueSourceValue]);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$("#formula-value-source").focus();
            };
            ConditionExpressionView.prototype.attributeChanged = function () {
                var attribute = this.$('#attribute').val();
                if (attribute) {
                    this.model.modifyAttribute(attribute.trim());
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$('#attribute').focus();
                var exp = this.model.get("_expression");
                exp.hasConditionExpChanged = true;
                this.model.set("_expression", exp);
            };
            ConditionExpressionView.prototype.operatorChanged = function () {
                var operator = parseInt(this.$('#operator').val());
                if (operator.toString() != "NaN") {
                    this.model.modifyOperator(operator);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$('#operator').focus();
                var exp = this.model.get("_expression");
                exp.hasConditionExpChanged = true;
                this.model.set("_expression", exp);
            };
            ConditionExpressionView.prototype.typeChanged = function () {
                var typeVal = this.$('#type').val();
                if (typeVal) {
                    typeVal = typeVal.trim();
                    this.model.modifyType(typeVal);
                    if (typeVal == ConditionPropertyPage.ValueType.Formula)
                        this.formulaChanged();
                    else
                        this.valueChanged();
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$('#type').focus();
                var exp = this.model.get("_expression");
                exp.hasConditionExpChanged = true;
                this.model.set("_expression", exp);
            };
            ConditionExpressionView.prototype.formulaChanged = function () {
                var formula = this.model.getFormula();
                if (!formula) {
                    formula = new ConditionFormula();
                }
                formula._attribute = this.$('#formula-attribute').val().trim();
                var leftEntityName = (ConditionPropertyPage.isTaskFlow) ? formula._leftEntity.get_entityName() : this.model.entityLogicalName;
                formula._leftAttributeType = MetadataProxy.getAttributeType(formula._attribute, leftEntityName);
                formula._operator = this.$('#formula-operator').val().trim();
                if (this.$('#formula-type').val().trim() == ConditionPropertyPage.ValueType.Attribute) {
                    if (!formula._isAttribute) {
                        formula._value = '';
                        formula._isAttribute = true;
                        formula._rightAttributeType = formula._leftAttributeType;
                    }
                    else {
                        formula._value = this.$('#formula-value').val().trim();
                        var rightEntityName = (ConditionPropertyPage.isTaskFlow) ? formula._rightEntity.get_entityName() : this.model.entityLogicalName;
                        formula._rightAttributeType = MetadataProxy.getAttributeType(formula._value, rightEntityName);
                    }
                }
                else if (formula._isAttribute) {
                    formula._value = '';
                    formula._isAttribute = false;
                }
                else {
                    formula._value = this.$('#formula-value').val();
                    if (formula._value == null || formula._value == undefined) {
                        formula._value = '0';
                    }
                    else {
                        formula._value = formula._value.trim();
                    }
                }
                this.model.setFormula(formula);
                this.refreshConditionHeader();
                this.changedTooltips();
                if (arguments[0] != undefined) {
                    var currentAttribute = $(arguments[0].currentTarget).attr("id");
                    if (currentAttribute != undefined) {
                        this.$("#" + currentAttribute).focus();
                    }
                }
            };
            ConditionExpressionView.prototype.refreshFormula = function () {
                var formula = this.model.getFormula();
                if (this.$('#formula-value').val() != null && this.$('#formula-value').val() != undefined) {
                    formula._value = this.$('#formula-value').val().trim();
                }
                var formulaValueSourceValue = this.$("#formula-value-source").val();
                if (formulaValueSourceValue) {
                    this.model.modifyFormulaValueSource(MetadataProxy.SourceValueToEntityMap[formulaValueSourceValue]);
                }
                this.model.setFormula(formula);
                this.changedTooltips();
                this.$('#formula-value').focus();
            };
            ConditionExpressionView.prototype.valueChanged = function () {
                var value = this.$('#value').val();
                var oldValue;
                var conditionExpression = this.model.get('_expression');
                var typeVal = this.$('#type').val();
                var attributeType = MetadataProxy.SourceAttributesMap[this.model.entityLogicalName][this.model.getAttribute()].attributeType;
                if (typeVal == ConditionPropertyPage.ValueType.Value) {
                    switch (attributeType) {
                        case AttributeType.DateTime:
                            if (!conditionExpression._value._isFormula || Util.isNull(conditionExpression._value._formula) || conditionExpression._value._formula == undefined || conditionExpression._value._formula._isAttribute) {
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
                                    value = oldValue;
                                }
                            }
                            break;
                    }
                }
                if (value && value.length > 0) {
                    this.model.setValue([value.trim()]);
                }
                else {
                    this.model.setValue([]);
                }
                this.refreshConditionHeader();
                this.changedTooltips();
                this.$('#value').focus();
            };
            ConditionExpressionView.prototype.removeExpression = function (event) {
                if ($(event.currentTarget).hasClass("prop-close-disabled") == false) {
                    this.model.remove();
                    event.stopPropagation();
                    ConditionPropertyPage.PropertiesView.conditionPropertiesView.showUnsavedChangesNote();
                }
            };
            ConditionExpressionView.prototype.refreshConditionHeader = function () {
                if ($("[id=ruleHeadLabel]").length > 1) {
                    $(".lib-font-size").removeClass("lib-font-size-disabled");
                    $(".prop-tab-close").removeClass("prop-close-disabled");
                }
                else {
                    $(".lib-font-size").addClass("lib-font-size-disabled");
                    $(".prop-tab-close").addClass("prop-close-disabled");
                }
                $('[id=ruleHeadLabel]').html(function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
                $('[id=ruleHeadLabel]').attr("title", function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
            };
            ConditionExpressionView.prototype.setCurrentTarget = function (event) {
                if (event.srcElement != null && event.srcElement != undefined) {
                    $(event.currentTarget).find("#" + event.srcElement.id).focus();
                }
            };
            ConditionExpressionView.prototype.refreshCondition = function () {
                var attribute = this.$('#attribute').val();
                var operator = parseInt(this.$('#operator').val());
                var valueType = this.$('#type').val();
                this.model.refreshConditionExpression(attribute, operator, valueType);
            };
            ConditionExpressionView.refreshErrorMessages = function () {
                var model = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                if (model == "" || model == undefined || model == null)
                    return;
                if (model.getErrorCount() > 0) {
                    DOMUtil.renderPropertyPageLevelErrorMessages(model, $("#properties-panel"), model.getErrorMessages());
                    model._conditionExpression.forEach(function (exp, idx) {
                        DOMUtil.renderErrorMessages(exp, ConditionExpressionView.self.$el, exp.getErrorMessages());
                    });
                }
                else {
                    DOMUtil.renderPropertyPageLevelErrorMessages(model, $("#properties-panel"), model.getErrorMessages());
                    DOMUtil.renderErrorMessages(ConditionExpressionView.self.model, ConditionExpressionView.self.$el, ConditionExpressionView.self.model.getErrorMessages());
                }
            };
            return ConditionExpressionView;
        })(Backbone.View);
        ConditionPropertyPage.ConditionExpressionView = ConditionExpressionView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ConditionPropertiesView.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Condition properties view
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var Validation = MscrmControls.ProcessDesigner.Validation;
        var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
        var ConditionPropertiesView = (function (_super) {
            __extends(ConditionPropertiesView, _super);
            function ConditionPropertiesView(options) {
                _super.call(this, options);
                this._initDone = false;
                this.template = _.template($('#prop-view').html());
                _.bindAll(this, "errorCount", "copyTo", "saveConditionBranch", "discardCondition");
                this.listenTo(this.model, 'change', this.updateConditionExpression);
                this.listenTo(this.model.get('expressionList'), 'change', this.updateConditionExpression);
                this.listenTo(this.model.get('expressionList'), 'reset', this.addExpressionSet);
                this.listenTo(this.model.get('expressionList'), 'add', this.addCondition);
                this.propertyViewCurrentModelClone = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().clone();
                this.propertyViewCurrentModelClone.addMultipleErrorMessages(GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getErrorMessages());
                this.propertyViewCurrentModelClone._errorCountCB = this.errorCount;
                Validation.Errors.registerPropertyViewCurrentModelClone(this.propertyViewCurrentModelClone);
                this.model = options.model;
            }
            ConditionPropertiesView.prototype.initialize = function () {
                this.el = $('#prop-panel-button-wrapper');
                this.events = {
                    'change #name': 'nameChanged',
                    'change #rule': 'ruleChanged',
                    'click .prop-addnew': 'createCondition',
                    'click #prop-save': 'saveConditionBranch',
                    'click #prop-discard': 'discardCondition',
                    'keydown .prop-addnew': 'keyPressed'
                };
                var self = this;
                $('#properties-panel').ready(function () {
                    $('#prop-save').on('click', self.saveConditionBranch);
                    $('#prop-discard').on('click', self.discardCondition);
                });
                this._ensureElement();
                GenericWorkflowDesigner.BasePropertyView.isPropertyViewModified = function () {
                    return self.isPropertyViewModified();
                };
                GenericWorkflowDesigner.BasePropertyView.yesCallBack = function (event) {
                    $('#prop-save').click();
                };
            };
            ConditionPropertiesView.prototype.isPropertyViewModified = function () {
                try {
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (!propertyViewCurrentModel) {
                        throw ("Internal : Current Condition Model is not set");
                    }
                    var viewConditionExpressions = this.model.getConditionExpressions();
                    var modelConditionExperssions = propertyViewCurrentModel._conditionExpression;
                    if (viewConditionExpressions.length != modelConditionExperssions.length)
                        return true;
                    var len = viewConditionExpressions.length;
                    if (len > 0) {
                        var viewRuleLogic = this.model.get('ruleLogic');
                        var modelRuleLogic = "";
                        var modified = false;
                        modelRuleLogic = modelConditionExperssions[len - 1]._prevStepOperator;
                        for (var i = 0; i < len; i++) {
                            viewConditionExpressions[i]._prevStepOperator = modelConditionExperssions[i]._prevStepOperator = modelRuleLogic;
                        }
                        if (len > 1 && viewRuleLogic != modelRuleLogic)
                            return true;
                        for (var i = 0; i < len; i++) {
                            var isConditionInModel = false;
                            for (var j = 0; j < len && !isConditionInModel; j++) {
                                isConditionInModel = viewConditionExpressions[i].equals(modelConditionExperssions[j]);
                            }
                            modified = isConditionInModel ? modified : true;
                        }
                        return modified;
                    }
                    return false;
                }
                catch (ex) {
                    console.log(ex.stack);
                }
            };
            ConditionPropertiesView.prototype.getParentEntityName = function (propertyViewCurrentModel) {
                var parent = propertyViewCurrentModel.getParent();
                var parentEntityName;
                while (parent.constructor.name != "BPFStageActivity") {
                    parent = parent.getParent();
                }
                parentEntityName = parent.entityName;
                return parentEntityName;
            };
            ConditionPropertiesView.prototype.render = function () {
                if (!MscrmControls.ProcessDesigner.Util.isNull($("#properties-panel"))) {
                    $("#properties-panel").html(this.template(this.model.getViewDescriptor()));
                }
                $("#properties :input:not(:button):not([type=hidden])").on("change", this.showUnsavedChangesNote);
                return this;
            };
            ConditionPropertiesView.prototype.initDone = function () {
                this._initDone = true;
            };
            ConditionPropertiesView.prototype.keyPressed = function (event) {
                if (event.keyCode == 32) {
                    this.createCondition(event);
                }
            };
            ConditionPropertiesView.prototype.nameChanged = function () {
                var value = $('#name').val().trim();
                if (value == "") {
                    $('#name').attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                }
                else {
                    $('#name').attr("title", value);
                }
                this.model.set('conditionName', value);
            };
            ConditionPropertiesView.prototype.ruleChanged = function (value) {
                var value = $('#rule').val();
                this.model.set('ruleLogic', value);
            };
            ConditionPropertiesView.prototype.descriptionChanged = function (value) {
                var value = $('#desc').val().trim();
                this.model.set('description', value);
            };
            ConditionPropertiesView.prototype.validateOnChange = function () {
                var status = true;
                if (this._initDone) {
                    this.copyTo(this.propertyViewCurrentModelClone);
                    this.propertyViewCurrentModelClone.setActivityID(GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel().getActivityID());
                    status = this.propertyViewCurrentModelClone.validateOnChange();
                }
                return status;
            };
            ConditionPropertiesView.prototype.addCondition = function (exp) {
                var view = new ConditionPropertyPage.ConditionExpressionView({ model: exp });
                var self = this;
                this.validateOnChange();
                view.render().then(function (v) {
                    $('.prop-exp-container').append(v.el);
                    if ($('[id=ruleHeadLabel]').length > 1) {
                        $(".lib-font-size").removeClass("lib-font-size-disabled");
                        $(".prop-tab-close").removeClass("prop-close-disabled");
                    }
                    $('[id=ruleHeadLabel]').html(function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
                    $('[id=ruleHeadLabel]').attr("title", function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
                });
                view.changedTooltips();
            };
            ConditionPropertiesView.prototype.addExpressionSet = function () {
                var promises = [];
                var self = this;
                this.validateOnChange();
                this.model.get('expressionList')
                    .each(function (exp) {
                    promises.push(new ConditionPropertyPage.ConditionExpressionView({ model: exp }).render());
                });
                $.when.apply($, promises).then(function () {
                    var d = document.createDocumentFragment();
                    _.each(arguments, function (v) {
                        d.appendChild(v.el);
                    });
                    $('.prop-exp-container').html(d);
                    self.updateConditionExpression();
                });
                if ($("[id=ruleHeadLabel]").length > 1) {
                    $(".lib-font-size").removeClass("lib-font-size-disabled");
                    $(".prop-tab-close").removeClass("prop-close-disabled");
                }
                else {
                    $(".lib-font-size").addClass("lib-font-size-disabled");
                    $(".prop-tab-close").addClass("prop-close-disabled");
                }
                $('[id=ruleHeadLabel]').html(function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
                $('[id=ruleHeadLabel]').attr("title", function (i) { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Rule") + ' ' + (i + 1); });
            };
            ConditionPropertiesView.prototype.createCondition = function (event) {
                this.model.addCondition();
                event.stopPropagation();
                this.showUnsavedChangesNote();
            };
            ConditionPropertiesView.prototype.updateConditionExpression = function () {
                if ($('#rule').val() != this.model.get('ruleLogic')) {
                    $('#rule').val(this.model.get('ruleLogic'));
                    $('#rule').attr("title", $('#rule').val());
                }
                $('#exptext').val(this.model.getConditionExpressionText());
                $('#exptext').attr("title", $('#exptext').val());
            };
            ConditionPropertiesView.prototype.errorCount = function () {
                this.copyTo(this.propertyViewCurrentModelClone);
                return this.propertyViewCurrentModelClone._getErrorCount();
            };
            ConditionPropertiesView.prototype.updateFieldType = function (field) {
                if (field.value != null) {
                    if (field.value.isFormula) {
                        if (field.value.formula.isAttribute) {
                            field.value.formula.rightAttributeType = MetadataProxy.getAttributeType(field.value.formula.value, ConditionPropertyPage.isTaskFlow ? field.value.formula.rightEntity.entityName : this.model.entityLogicalName);
                        }
                        else {
                            field.value.formula.rightAttributeType = field.value.formula.leftAttributeType;
                            if (field.value.formula.leftAttributeType == AttributeType.DateTime) {
                                field.value.formula.rightAttributeType = AttributeType.Integer;
                            }
                        }
                    }
                }
            };
            ConditionPropertiesView.prototype.updateModel = function () {
                var ruleLogic = this.model.get('ruleLogic');
                var conditionExpressions = this.model.getConditionExpressionList();
                if (conditionExpressions[0]) {
                    conditionExpressions[0]._prevStepOperator = null;
                    this.updateFieldType(conditionExpressions[0]);
                }
                for (var i = 1; i < conditionExpressions.length; i++) {
                    conditionExpressions[i]._prevStepOperator = ruleLogic;
                    this.updateFieldType(conditionExpressions[i]);
                }
                var newModelData;
                if (GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel()._conditionExpression[0]._attribute == "NEW_EXP" && conditionExpressions.length == 1 && !conditionExpressions[0]._hasConditionExpChanged) {
                    newModelData = {
                        displayName: this.model.get('conditionName')
                    };
                }
                else {
                    newModelData = {
                        displayName: this.model.get('conditionName'),
                        conditionExpression: conditionExpressions
                    };
                }
                GenericWorkflowDesigner.updateCurrentModel(GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel());
                GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.updateProperty, newModelData);
            };
            ConditionPropertiesView.prototype.copyTo = function (model) {
                var ruleLogic = this.model.get('ruleLogic');
                var conditionExpressions = this.model.getConditionExpressionList();
                if (conditionExpressions[0]) {
                    conditionExpressions[0]._prevStepOperator = null;
                }
                for (var i = 1; i < conditionExpressions.length; i++) {
                    conditionExpressions[i]._prevStepOperator = ruleLogic;
                }
                model._conditionExpression = conditionExpressions;
                model.displayName = this.model.get('conditionName');
            };
            ConditionPropertiesView.prototype.saveConditionBranch = function (event) {
                try {
                    var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                    stopwatch.start();
                    MscrmControls.ProcessDesigner.isPropertyPageSaved = true;
                    var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                    if (!propertyViewCurrentModel) {
                        throw ("Internal : Current Condition Model is not set");
                    }
                    var ruleLogic = this.model.get('ruleLogic');
                    this.copyTo(this.propertyViewCurrentModelClone);
                    this.propertyViewCurrentModelClone.setActivityID(propertyViewCurrentModel.getActivityID());
                    var isValid = this.propertyViewCurrentModelClone.validateOnAction(Validation.Level.Apply);
                    if (isValid) {
                        this.updateModel();
                        GenericWorkflowDesigner.eventManager.trigger(GenericWorkflowDesigner.FrameworkEvents.editDone);
                    }
                    this.renderFromModel(this.propertyViewCurrentModelClone);
                    if (isValid) {
                        this.resetUnsavedChanges();
                    }
                    stopwatch.stop();
                    localStorage.setItem("PerfMarker_BranchApply", stopwatch.elapsedMilliseconds.toString());
                    $('[id=valueFields]:has(#expression1)').find('#branchpropertydetails_value').attr("style", "display: none !important");
                }
                catch (ex) {
                    console.log(ex.stack);
                }
                finally {
                    event.stopPropagation();
                }
            };
            ConditionPropertiesView.prototype.changedTooltips = function () {
                $('#attribute').attr("title", $('#attribute :selected').text());
                $('#operator').attr("title", $('#operator :selected').text());
                $('#type').attr("title", $('#type :selected').text());
                $('#source').attr("title", $('#source :selected').text());
                if ($('#value').length > 0) {
                    if ($('#value').attr("role") != "combobox") {
                        if (!MscrmControls.ProcessDesigner.Util.isNull($('#value').val()) && $('#value').val().length > 0) {
                            $('#value').attr("title", $('#value').val());
                        }
                        else {
                            $('#value').attr("title", MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyTexttooltip"));
                        }
                    }
                    else {
                        $('#value').attr("title", $('#value :selected').text());
                    }
                }
                $('#value-source').attr("title", $('#value-source :selected').text());
                $('#formula-source').attr("title", $('#formula-source :selected').text());
                $('#formula-value-source').attr("title", $('#formula-value-source :selected').text());
            };
            ConditionPropertiesView.prototype.discardCondition = function (event) {
                var propertyViewCurrentModel = GenericWorkflowDesigner.PropertyView.getPropertyViewCurrentModel();
                if (!propertyViewCurrentModel) {
                    throw ("Internal : ConditionPropertiesControl: Current Condition Model is not set!");
                }
                this.renderFromModel(propertyViewCurrentModel);
                this.changedTooltips();
                this.resetUnsavedChanges();
            };
            ConditionPropertiesView.prototype.renderFromModel = function (propertyViewCurrentModel) {
                try {
                    var stopwatch = new GenericWorkflowDesigner.Stopwatch();
                    stopwatch.start();
                    var self = this;
                    if (!propertyViewCurrentModel) {
                        throw ("Internal : Current Condition Model is not set");
                    }
                    $("#name").val(propertyViewCurrentModel.displayName);
                    $("#name").trigger("change", false);
                    var expList = propertyViewCurrentModel._conditionExpression.map(function (exp) {
                        return exp.clone();
                    });
                    var conditionExpressions = [];
                    expList.forEach(function (exp, idx) {
                        var entityLogicalNameForConditionExpression = ConditionPropertyPage.isTaskFlow ? exp._entity.get_entityName() : self.model.entityLogicalName;
                        var expression = new ConditionPropertyPage.ConditionExpressionModel({
                            _expression: exp,
                            index: idx
                        }, { entityLogicalName: entityLogicalNameForConditionExpression });
                        if (ConditionPropertyPage.ConditionExpressionModel.isLookupType(expression.get("_expression").attributeType)) {
                            expression.setDisplayName(expression.get("_expression").value._lookupLabel);
                        }
                        conditionExpressions.push(expression);
                    });
                    ConditionPropertyPage.PropertiesView.ConditionExpCollection.reset(conditionExpressions);
                    var ruleLogic = expList.length > 1 ? expList[1]._prevStepOperator : ConditionPropertyPage.RuleLogic.And;
                    this.model.set('ruleLogic', ruleLogic);
                    $("#properties :input:not(:button):not([type=hidden])").on("change", this.showUnsavedChangesNote);
                    stopwatch.stop();
                    localStorage.setItem("PerfMarker_BranchDiscard", stopwatch.elapsedMilliseconds.toString());
                }
                catch (ex) {
                    console.log(ex.stack);
                }
            };
            ConditionPropertiesView.prototype.showUnsavedChangesNote = function () {
                $("#noteForUnsavedchangesIcon").css("display", "block");
                if ($("#noteForUnsavedchangesIconTooltip").text() === "") {
                    $("#noteForUnsavedchangesIconTooltip").text(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_UnSavePropertyChangesTooltip"));
                }
            };
            ConditionPropertiesView.prototype.resetUnsavedChanges = function () {
                $("#noteForUnsavedchangesIcon").css("display", "none");
                $("#noteForUnsavedchangesIconTooltip").text("");
            };
            return ConditionPropertiesView;
        })(Backbone.View);
        ConditionPropertyPage.ConditionPropertiesView = ConditionPropertiesView;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
//---------------------------------------------------------------------------------------------
// <copyright file="ViewDescriptorProvider.ts" company="Microsoft">
//		Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//
// <summary>
// Generates the view descriptor for condition models
// </summary>
//---------------------------------------------------------------------------------------------
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        var MetadataProxy = MscrmControls.ProcessDesigner.MetadataProxy;
        var AttributeType = MscrmControls.ProcessDesigner.AttributeType;
        var ViewDescriptorProvider = (function () {
            function ViewDescriptorProvider(entityLogicalName) {
                this._entityLogicalName = "";
                this._entityLogicalName = entityLogicalName;
            }
            ViewDescriptorProvider.prototype.getExpressionDescriptor = function (expression, index) {
                var expressionDescriptor = new ConditionPropertyPage.ExpressionViewDescriptor();
                expressionDescriptor.isTaskFlow = ConditionPropertyPage.isTaskFlow;
                var deferred = $.Deferred();
                var self = this;
                var sourceAttributeList;
                if (ConditionPropertyPage.isTaskFlow) {
                    MetadataProxy.getAttributeList(self._entityLogicalName, expression._entity.relationshipName).then(function (attributeList) {
                        if (MetadataProxy.SourceAttributesMap[self._entityLogicalName] != null)
                            attributeList = MetadataProxy.SourceAttributesMap[self._entityLogicalName];
                        expressionDescriptor.attributeList = attributeList;
                        var isNew = (expression._attribute == "NEW_EXP");
                        var ruleLabels = new ConditionPropertyPage.Dictionary();
                        ruleLabels["branchpropertydetails_operator"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Operator");
                        ruleLabels["branchpropertydetails_operatorTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_OperatorTooltip");
                        ruleLabels["branchpropertydetails_field"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Field");
                        ruleLabels["branchpropertydetails_fieldTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_FieldTooltip");
                        ruleLabels["branchpropertydetails_source"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source");
                        ruleLabels["branchpropertydetails_sourceTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_TBX_SourceTooltip");
                        ruleLabels["branchpropertydetails_type"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Type");
                        ruleLabels["branchpropertydetails_typeTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_TypeTooltip");
                        ruleLabels["branchpropertydetails_value"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Value");
                        ruleLabels["branchpropertydetails_valueTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValueTooltip");
                        ruleLabels["branchpropertydetails_days"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Days");
                        ruleLabels["branchpropertydetails_daysTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Label_Days");
                        ruleLabels["empty_dropDownlist"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyDropDowntooltip");
                        expressionDescriptor.conditonRuleLabels = ruleLabels;
                        if (ConditionPropertyPage.isTaskFlow) {
                            expressionDescriptor.sourceList = MetadataProxy.getSourcesList();
                            expressionDescriptor.sourceList.unshift(MscrmControls.ProcessDesigner.primaryEntity);
                        }
                        for (var firstKey in attributeList) {
                            break;
                        }
                        expressionDescriptor.selectedAttribute = isNew ? expressionDescriptor.attributeList[firstKey].logicalName : expression._attribute;
                        expressionDescriptor.selectedAttribute = expressionDescriptor.selectedAttribute.trim();
                        if (ConditionPropertyPage.isTaskFlow) {
                            expressionDescriptor.selectedSource = (expression._entity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._entity.get_entityName() : expression._entity.get_relationshipName();
                        }
                        var attributeTypeName = MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType;
                        expressionDescriptor.operators = MetadataProxy.getOperatorList(AttributeType[attributeTypeName]);
                        expressionDescriptor.selectedOperator = (isNew || expression._operator == null || (expression._operator.toString() == "")) ? expressionDescriptor.operators[0].value : expression._operator;
                        if (MetadataProxy.isUnaryOperator(expressionDescriptor.selectedOperator)) {
                            deferred.resolve(expressionDescriptor);
                            return deferred.promise();
                        }
                        var isFormulaValid = MetadataProxy.isFormulaValidForAttributeType(MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType);
                        expressionDescriptor.types = [];
                        if (expression._value._isAttribute) {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            if (isFormulaValid) {
                                expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            }
                            if (!ConditionPropertyPage.isTaskFlow) {
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, self._entityLogicalName, expressionDescriptor.selectedOperator).done(function (list) {
                                    if (typeof expression._value._value[0] == "undefined") {
                                        for (var firstKey in list) {
                                            break;
                                        }
                                        expression._value._value[0] = list[firstKey].logicalName;
                                    }
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        selectedAttribute: expression._value._value[0],
                                        selectedAttributeType: attributeTypeName
                                    };
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                            else {
                                var attributeSelectedSource = (expression._value._entity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._entity.get_entityName() : expression._value._entity.get_relationshipName();
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, expression._value._entity.get_entityName(), expressionDescriptor.selectedOperator).done(function (list) {
                                    if (typeof expression._value._value[0] == "undefined") {
                                        for (var firstKey in list) {
                                            break;
                                        }
                                        expression._value._value[0] = list[firstKey].logicalName;
                                    }
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        selectedSource: attributeSelectedSource,
                                        selectedAttribute: expression._value._value[0],
                                        selectedAttributeType: attributeTypeName
                                    };
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                        }
                        else if (expression._value._isFormula) {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            var operators = MetadataProxy.getFormulaOperators(attributeTypeName);
                            expressionDescriptor.value = {
                                selectedAttribute: expression._value._formula._attribute,
                                selectedAttributeType: attributeTypeName,
                                operators: operators,
                                selectedOperator: expression._value._formula._operator,
                                selectedValue: expression._value._formula._value
                            };
                            if (expression._value._formula._isAttribute) {
                                expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Attribute, ConditionPropertyPage.ValueType.Value];
                            }
                            else {
                                var attributeTypeName = MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType;
                                if (attributeTypeName == AttributeType.DateTime) {
                                    expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Value];
                                }
                                else {
                                    expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Value, ConditionPropertyPage.ValueType.Attribute];
                                }
                            }
                            if (!ConditionPropertyPage.isTaskFlow) {
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, self._entityLogicalName).done(function (attrList) {
                                    expressionDescriptor.value.attributeList = attrList;
                                    expressionDescriptor.value.rightAttributeList = attrList;
                                    if (expressionDescriptor.value.selectedAttribute == "NEW_EXP") {
                                        for (var firstInnerKey in attrList) {
                                            break;
                                        }
                                        expressionDescriptor.value.selectedAttribute = expressionDescriptor.value.attributeList[firstInnerKey];
                                        expressionDescriptor.value.selectedOperator = '+';
                                    }
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                            else {
                                var leftSelectedSource = (expression._value._formula._leftEntity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._formula._leftEntity.get_entityName() : expression._value._formula._leftEntity.get_relationshipName();
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, expression._value._formula._leftEntity.get_entityName()).done(function (attrList) {
                                    expressionDescriptor.value.selectedSource = leftSelectedSource;
                                    expressionDescriptor.value.attributeList = attrList;
                                    if (expressionDescriptor.value.selectedAttribute == "NEW_EXP") {
                                        for (var firstInnerKey in attrList) {
                                            break;
                                        }
                                        expressionDescriptor.value.selectedAttribute = expressionDescriptor.value.attributeList[firstInnerKey];
                                        expressionDescriptor.value.selectedOperator = '+';
                                    }
                                    if (expression._value._formula._isAttribute && expression._value._formula._rightEntity != null && expression._value._formula._rightEntity != undefined) {
                                        var rightSelectedSource = (expression._value._formula._rightEntity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._formula._rightEntity.get_entityName() : expression._value._formula._rightEntity.get_relationshipName();
                                        MetadataProxy.getComparableAttributes(self._entityLogicalName, expression._attribute, expression._value._formula._rightEntity.get_entityName()).done(function (rightAttrList) {
                                            expressionDescriptor.value.rightSelectedSource = rightSelectedSource;
                                            expressionDescriptor.value.rightAttributeList = rightAttrList;
                                            if (expressionDescriptor.value.rightSelectedAttribute == "NEW_EXP") {
                                                for (var firstInnerKey in rightAttrList) {
                                                    break;
                                                }
                                                expressionDescriptor.value.rightSelectedAttribute = expressionDescriptor.value.rightAttributeList[firstInnerKey];
                                            }
                                            deferred.resolve(expressionDescriptor);
                                            return deferred.promise();
                                        });
                                    }
                                    else {
                                        deferred.resolve(expressionDescriptor);
                                        return deferred.promise();
                                    }
                                });
                            }
                        }
                        else {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            if (isFormulaValid) {
                                expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            }
                            expressionDescriptor.value = {
                                selectedValue: '',
                                isText: false
                            };
                            if (expression._value._value) {
                                expressionDescriptor.value.selectedValue = expression._value._value;
                            }
                            expressionDescriptor.value.isText = MetadataProxy.isTextField(expressionDescriptor.selectedAttribute, self._entityLogicalName, expressionDescriptor.selectedOperator) || MetadataProxy.isNumericField(expressionDescriptor.selectedAttribute, self._entityLogicalName);
                            deferred.resolve(expressionDescriptor);
                            return deferred.promise();
                        }
                    });
                }
                else {
                    MetadataProxy.getAttributeList(self._entityLogicalName).then(function (attributeList) {
                        expressionDescriptor.attributeList = attributeList;
                        var isNew = (expression._attribute == "NEW_EXP");
                        var ruleLabels = new ConditionPropertyPage.Dictionary();
                        ruleLabels["branchpropertydetails_operator"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Operator");
                        ruleLabels["branchpropertydetails_operatorTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_OperatorTooltip");
                        ruleLabels["branchpropertydetails_field"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Field");
                        ruleLabels["branchpropertydetails_fieldTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_FieldTooltip");
                        ruleLabels["branchpropertydetails_source"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_BranchPropertyDetails_Source");
                        ruleLabels["branchpropertydetails_sourceTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_TBX_SourceTooltip");
                        ruleLabels["branchpropertydetails_type"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Type");
                        ruleLabels["branchpropertydetails_typeTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_TypeTooltip");
                        ruleLabels["branchpropertydetails_value"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Value");
                        ruleLabels["branchpropertydetails_valueTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_ValueTooltip");
                        ruleLabels["branchpropertydetails_days"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_BranchPropertyDetails_Days");
                        ruleLabels["branchpropertydetails_daysTooltip"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_Tooltip_Label_Days");
                        ruleLabels["empty_dropDownlist"] = MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_BPF_PropertyPage_EmptyDropDowntooltip");
                        expressionDescriptor.conditonRuleLabels = ruleLabels;
                        if (ConditionPropertyPage.isTaskFlow) {
                            expressionDescriptor.sourceList = MetadataProxy.getSourcesList();
                            expressionDescriptor.sourceList.unshift(MscrmControls.ProcessDesigner.primaryEntity);
                        }
                        for (var firstKey in attributeList) {
                            break;
                        }
                        expressionDescriptor.selectedAttribute = isNew ? expressionDescriptor.attributeList[firstKey].logicalName : expression._attribute;
                        expressionDescriptor.selectedAttribute = expressionDescriptor.selectedAttribute.trim();
                        if (ConditionPropertyPage.isTaskFlow) {
                            expressionDescriptor.selectedSource = (expression._entity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._entity.get_entityName() : expression._entity.get_relationshipName();
                        }
                        var attributeTypeName = MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType;
                        expressionDescriptor.operators = MetadataProxy.getOperatorList(AttributeType[attributeTypeName]);
                        expressionDescriptor.selectedOperator = (isNew || expression._operator == null || (expression._operator.toString() == "")) ? expressionDescriptor.operators[0].value : expression._operator;
                        if (MetadataProxy.isUnaryOperator(expressionDescriptor.selectedOperator)) {
                            deferred.resolve(expressionDescriptor);
                            return deferred.promise();
                        }
                        var isFormulaValid = MetadataProxy.isFormulaValidForAttributeType(MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType);
                        expressionDescriptor.types = [];
                        if (expression._value._isAttribute) {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            if (isFormulaValid) {
                                expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            }
                            if (!ConditionPropertyPage.isTaskFlow) {
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, self._entityLogicalName, expressionDescriptor.selectedOperator).done(function (list) {
                                    if (typeof expression._value._value[0] == "undefined") {
                                        for (var firstKey in list) {
                                            break;
                                        }
                                        expression._value._value[0] = list[firstKey].logicalName;
                                    }
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        selectedAttribute: expression._value._value[0],
                                        selectedAttributeType: attributeTypeName
                                    };
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                            else {
                                var attributeSelectedSource = (expression._value._entity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._entity.get_entityName() : expression._value._entity.get_relationshipName();
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, expression._value._entity.get_entityName(), expressionDescriptor.selectedOperator).done(function (list) {
                                    if (typeof expression._value._value[0] == "undefined") {
                                        for (var firstKey in list) {
                                            break;
                                        }
                                        expression._value._value[0] = list[firstKey].logicalName;
                                    }
                                    expressionDescriptor.value = {
                                        attributeList: list,
                                        selectedSource: attributeSelectedSource,
                                        selectedAttribute: expression._value._value[0],
                                        selectedAttributeType: attributeTypeName
                                    };
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                        }
                        else if (expression._value._isFormula) {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            var operators = MetadataProxy.getFormulaOperators(attributeTypeName);
                            expressionDescriptor.value = {
                                selectedAttribute: expression._value._formula._attribute,
                                selectedAttributeType: attributeTypeName,
                                operators: operators,
                                selectedOperator: expression._value._formula._operator,
                                selectedValue: expression._value._formula._value
                            };
                            if (expression._value._formula._isAttribute) {
                                expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Attribute, ConditionPropertyPage.ValueType.Value];
                            }
                            else {
                                var attributeTypeName = MetadataProxy.SourceAttributesMap[self._entityLogicalName][expressionDescriptor.selectedAttribute].attributeType;
                                if (attributeTypeName == AttributeType.DateTime) {
                                    expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Value];
                                }
                                else {
                                    expressionDescriptor.value.types = [ConditionPropertyPage.ValueType.Value, ConditionPropertyPage.ValueType.Attribute];
                                }
                            }
                            if (!ConditionPropertyPage.isTaskFlow) {
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, self._entityLogicalName).done(function (attrList) {
                                    expressionDescriptor.value.attributeList = attrList;
                                    expressionDescriptor.value.rightAttributeList = attrList;
                                    if (expressionDescriptor.value.selectedAttribute == "NEW_EXP") {
                                        for (var firstInnerKey in attrList) {
                                            break;
                                        }
                                        expressionDescriptor.value.selectedAttribute = expressionDescriptor.value.attributeList[firstInnerKey];
                                        expressionDescriptor.value.selectedOperator = '+';
                                    }
                                    deferred.resolve(expressionDescriptor);
                                    return deferred.promise();
                                });
                            }
                            else {
                                var leftSelectedSource = (expression._value._formula._leftEntity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._formula._leftEntity.get_entityName() : expression._value._formula._leftEntity.get_relationshipName();
                                MetadataProxy.getComparableAttributes(self._entityLogicalName, expressionDescriptor.selectedAttribute, expression._value._formula._leftEntity.get_entityName()).done(function (attrList) {
                                    expressionDescriptor.value.selectedSource = leftSelectedSource;
                                    expressionDescriptor.value.attributeList = attrList;
                                    if (expressionDescriptor.value.selectedAttribute == "NEW_EXP") {
                                        for (var firstInnerKey in attrList) {
                                            break;
                                        }
                                        expressionDescriptor.value.selectedAttribute = expressionDescriptor.value.attributeList[firstInnerKey];
                                        expressionDescriptor.value.selectedOperator = '+';
                                    }
                                    if (expression._value._formula._isAttribute && expression._value._formula._rightEntity != null && expression._value._formula._rightEntity != undefined) {
                                        var rightSelectedSource = (expression._value._formula._rightEntity instanceof Microsoft.Crm.Workflow.Expressions.PrimaryEntity) ? expression._value._formula._rightEntity.get_entityName() : expression._value._formula._rightEntity.get_relationshipName();
                                        MetadataProxy.getComparableAttributes(self._entityLogicalName, expression._attribute, expression._value._formula._rightEntity.get_entityName()).done(function (rightAttrList) {
                                            expressionDescriptor.value.rightSelectedSource = rightSelectedSource;
                                            expressionDescriptor.value.rightAttributeList = rightAttrList;
                                            if (expressionDescriptor.value.rightSelectedAttribute == "NEW_EXP") {
                                                for (var firstInnerKey in rightAttrList) {
                                                    break;
                                                }
                                                expressionDescriptor.value.rightSelectedAttribute = expressionDescriptor.value.rightAttributeList[firstInnerKey];
                                            }
                                            deferred.resolve(expressionDescriptor);
                                            return deferred.promise();
                                        });
                                    }
                                    else {
                                        deferred.resolve(expressionDescriptor);
                                        return deferred.promise();
                                    }
                                });
                            }
                        }
                        else {
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Value'));
                            expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Field'));
                            if (isFormulaValid) {
                                expressionDescriptor.types.push(MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString('ProcessDesignerControl_PBL_PlainTextGenerator_Formula'));
                            }
                            expressionDescriptor.value = {
                                selectedValue: '',
                                isText: false
                            };
                            if (expression._value._value) {
                                expressionDescriptor.value.selectedValue = expression._value._value;
                            }
                            expressionDescriptor.value.isText = MetadataProxy.isTextField(expressionDescriptor.selectedAttribute, self._entityLogicalName, expressionDescriptor.selectedOperator) || MetadataProxy.isNumericField(expressionDescriptor.selectedAttribute, self._entityLogicalName);
                            deferred.resolve(expressionDescriptor);
                            return deferred.promise();
                        }
                    });
                }
                return deferred.promise();
            };
            ViewDescriptorProvider.prototype.getConditionPropertyDescriptor = function (model) {
                var conditionDescriptor = new ConditionPropertyPage.ConditionPropertyViewDescriptor();
                conditionDescriptor.conditionName = model.conditionName;
                conditionDescriptor.description = model.description;
                conditionDescriptor.expressionText = '';
                if (model.ruleLogic == ConditionPropertyPage.RuleLogic.And)
                    conditionDescriptor.ruleLogic = [{ value: ConditionPropertyPage.RuleLogic.And, name: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_And") },
                        { value: ConditionPropertyPage.RuleLogic.Or, name: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Or") }];
                else
                    conditionDescriptor.ruleLogic = [{ value: ConditionPropertyPage.RuleLogic.Or, name: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Or") },
                        { value: ConditionPropertyPage.RuleLogic.And, name: MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_And") }];
                return conditionDescriptor;
            };
            return ViewDescriptorProvider;
        })();
        ConditionPropertyPage.ViewDescriptorProvider = ViewDescriptorProvider;
        ;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
    var ConditionPropertyPage;
    (function (ConditionPropertyPage) {
        ConditionPropertyPage.nextId = 0;
        var ExpressionViewDescriptor = (function () {
            function ExpressionViewDescriptor() {
            }
            return ExpressionViewDescriptor;
        })();
        ConditionPropertyPage.ExpressionViewDescriptor = ExpressionViewDescriptor;
        var ConditionPropertyViewDescriptor = (function () {
            function ConditionPropertyViewDescriptor() {
            }
            return ConditionPropertyViewDescriptor;
        })();
        ConditionPropertyPage.ConditionPropertyViewDescriptor = ConditionPropertyViewDescriptor;
        (function (FormulaOperatorSymbol) {
            FormulaOperatorSymbol[FormulaOperatorSymbol["+"] = 0] = "+";
            FormulaOperatorSymbol[FormulaOperatorSymbol["-"] = 1] = "-";
            FormulaOperatorSymbol[FormulaOperatorSymbol["*"] = 2] = "*";
            FormulaOperatorSymbol[FormulaOperatorSymbol["/"] = 3] = "/";
        })(ConditionPropertyPage.FormulaOperatorSymbol || (ConditionPropertyPage.FormulaOperatorSymbol = {}));
        var FormulaOperatorSymbol = ConditionPropertyPage.FormulaOperatorSymbol;
        (function (RuleLogic) {
            RuleLogic[RuleLogic["And"] = 2] = "And";
            RuleLogic[RuleLogic["Or"] = 3] = "Or";
        })(ConditionPropertyPage.RuleLogic || (ConditionPropertyPage.RuleLogic = {}));
        var RuleLogic = ConditionPropertyPage.RuleLogic;
        var ValueType = (function () {
            function ValueType() {
            }
            Object.defineProperty(ValueType, "Attribute", {
                get: function () { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Field"); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueType, "Formula", {
                get: function () { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Formula"); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ValueType, "Value", {
                get: function () { return MscrmControls.ProcessDesigner.MetadataProvider.getLocalizedString("ProcessDesignerControl_PBL_PlainTextGenerator_Value"); },
                enumerable: true,
                configurable: true
            });
            return ValueType;
        })();
        ConditionPropertyPage.ValueType = ValueType;
        var Dictionary = (function () {
            function Dictionary() {
            }
            return Dictionary;
        })();
        ConditionPropertyPage.Dictionary = Dictionary;
    })(ConditionPropertyPage = MscrmControls.ConditionPropertyPage || (MscrmControls.ConditionPropertyPage = {}));
})(MscrmControls || (MscrmControls = {}));
