/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (FormFactor) {
        FormFactor[FormFactor["Unknown"] = 0] = "Unknown";
        FormFactor[FormFactor["Tablet"] = 1] = "Tablet";
        FormFactor[FormFactor["Phone"] = 2] = "Phone";
        FormFactor[FormFactor["Desktop"] = 3] = "Desktop";
    })(Mscrm.FormFactor || (Mscrm.FormFactor = {}));
    var FormFactor = Mscrm.FormFactor;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    (function (ImeMode) {
        ImeMode[ImeMode["Auto"] = 0] = "Auto";
        ImeMode[ImeMode["Inactive"] = 1] = "Inactive";
        ImeMode[ImeMode["Active"] = 2] = "Active";
        ImeMode[ImeMode["Disabled"] = 3] = "Disabled";
    })(Mscrm.ImeMode || (Mscrm.ImeMode = {}));
    var ImeMode = Mscrm.ImeMode;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    (function (RequiredLevel) {
        RequiredLevel[RequiredLevel["Unknown"] = -1] = "Unknown";
        RequiredLevel[RequiredLevel["None"] = 0] = "None";
        RequiredLevel[RequiredLevel["SystemRequired"] = 1] = "SystemRequired";
        RequiredLevel[RequiredLevel["ApplicationRequired"] = 2] = "ApplicationRequired";
        RequiredLevel[RequiredLevel["Recommended"] = 3] = "Recommended";
    })(Mscrm.RequiredLevel || (Mscrm.RequiredLevel = {}));
    var RequiredLevel = Mscrm.RequiredLevel;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * List of error codes used in custom controls.
         */
        var ErrorCode = (function () {
            function ErrorCode() {
            }
            // Value out of range id from the MobileClientResources.xml file
            ErrorCode.ValueOutOfRangeId = "CustomControl_OutOfRange_Error";
            // Value invalid input mask id from the MobileClientResources.xml file
            ErrorCode.InvalidInputMaskId = "CustomControl_InvalidInput_Error";
            // Maximum length exceeded id from the MobileClientResources.xml file
            ErrorCode.MaxLengthExceededId = "CustomControl_MaxLengthExceeded_Error";
            return ErrorCode;
        })();
        ErrorHandling.ErrorCode = ErrorCode;
    })(ErrorHandling = MscrmCommon.ErrorHandling || (MscrmCommon.ErrorHandling = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * Handles the notification of custom control errors to the user
         * @remark the notifications come from XRM and are documented here:
         * https://msdn.microsoft.com/en-us/library/gg334266(v=crm.6).aspx#BKMK_notification
         */
        var NotificationHandler = (function () {
            /**
             * Builds the notification handler
             * @param setNotification: delegate for setting the notification
             * @param clearNotification: delegate for clearing the notification
             */
            function NotificationHandler(setNotification, clearNotification) {
                this.setNotification = setNotification;
                this.clearNotification = clearNotification;
                this.setNotification = setNotification;
                this.clearNotification = clearNotification;
            }
            /**
             * Displays the notification
             * @param notification message
             * @param notification id
            */
            NotificationHandler.prototype.notify = function (message, id) {
                this.setNotification(message, id);
            };
            /**
             * Clears the notification
             * @param notification id
             */
            NotificationHandler.prototype.clear = function (id) {
                this.clearNotification(id);
            };
            return NotificationHandler;
        })();
        ErrorHandling.NotificationHandler = NotificationHandler;
    })(ErrorHandling = MscrmCommon.ErrorHandling || (MscrmCommon.ErrorHandling = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ErrorHandling;
    (function (ErrorHandling) {
        'use strict';
        /**
         * Handles code exceptions
         */
        var ExceptionHandler = (function () {
            function ExceptionHandler() {
            }
            /**
             * Displays the exception message
             * @param error message
             */
            ExceptionHandler.throwException = function (message) {
                throw (message);
            };
            return ExceptionHandler;
        })();
        ErrorHandling.ExceptionHandler = ExceptionHandler;
    })(ErrorHandling = MscrmCommon.ErrorHandling || (MscrmCommon.ErrorHandling = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (FilterOperator) {
        FilterOperator[FilterOperator["And"] = 0] = "And";
        FilterOperator[FilterOperator["Or"] = 1] = "Or";
    })(Mscrm.FilterOperator || (Mscrm.FilterOperator = {}));
    var FilterOperator = Mscrm.FilterOperator;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (ConditionOperator) {
        ConditionOperator[ConditionOperator["None"] = -1] = "None";
        ConditionOperator[ConditionOperator["Equal"] = 0] = "Equal";
        ConditionOperator[ConditionOperator["NotEqual"] = 1] = "NotEqual";
        ConditionOperator[ConditionOperator["GreaterThan"] = 2] = "GreaterThan";
        ConditionOperator[ConditionOperator["LessThan"] = 3] = "LessThan";
        ConditionOperator[ConditionOperator["GreaterEqual"] = 4] = "GreaterEqual";
        ConditionOperator[ConditionOperator["LessEqual"] = 5] = "LessEqual";
        ConditionOperator[ConditionOperator["Like"] = 6] = "Like";
        ConditionOperator[ConditionOperator["Yesterday"] = 14] = "Yesterday";
        ConditionOperator[ConditionOperator["Today"] = 15] = "Today";
        ConditionOperator[ConditionOperator["Tomorrow"] = 16] = "Tomorrow";
        ConditionOperator[ConditionOperator["Last7Days"] = 17] = "Last7Days";
        ConditionOperator[ConditionOperator["Next7Days"] = 18] = "Next7Days";
        ConditionOperator[ConditionOperator["LastWeek"] = 19] = "LastWeek";
        ConditionOperator[ConditionOperator["ThisWeek"] = 20] = "ThisWeek";
        ConditionOperator[ConditionOperator["LastMonth"] = 22] = "LastMonth";
        ConditionOperator[ConditionOperator["ThisMonth"] = 23] = "ThisMonth";
        ConditionOperator[ConditionOperator["On"] = 25] = "On";
        ConditionOperator[ConditionOperator["OnOrBefore"] = 26] = "OnOrBefore";
        ConditionOperator[ConditionOperator["OnOrAfter"] = 27] = "OnOrAfter";
        ConditionOperator[ConditionOperator["LastYear"] = 28] = "LastYear";
        ConditionOperator[ConditionOperator["ThisYear"] = 29] = "ThisYear";
        ConditionOperator[ConditionOperator["Contains"] = 49] = "Contains";
    })(Mscrm.ConditionOperator || (Mscrm.ConditionOperator = {}));
    var ConditionOperator = Mscrm.ConditionOperator;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (DayOfWeek) {
        DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
        DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
        DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
        DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
        DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
        DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
        DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
    })(Mscrm.DayOfWeek || (Mscrm.DayOfWeek = {}));
    var DayOfWeek = Mscrm.DayOfWeek;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    /**
     * Sorting direction for a data set column
     */
    (function (ColumnSortDirection) {
        ColumnSortDirection[ColumnSortDirection["None"] = -1] = "None";
        ColumnSortDirection[ColumnSortDirection["Ascending"] = 0] = "Ascending";
        ColumnSortDirection[ColumnSortDirection["Descending"] = 1] = "Descending";
    })(Mscrm.ColumnSortDirection || (Mscrm.ColumnSortDirection = {}));
    var ColumnSortDirection = Mscrm.ColumnSortDirection;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    /**
     * Source type of a field.
     */
    (function (AttributeSourceType) {
        AttributeSourceType[AttributeSourceType["Unknown"] = -1] = "Unknown";
        AttributeSourceType[AttributeSourceType["Persistent"] = 0] = "Persistent";
        AttributeSourceType[AttributeSourceType["Calculated"] = 1] = "Calculated";
        AttributeSourceType[AttributeSourceType["Rollup"] = 2] = "Rollup";
    })(Mscrm.AttributeSourceType || (Mscrm.AttributeSourceType = {}));
    var AttributeSourceType = Mscrm.AttributeSourceType;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (DateTimeFieldBehavior) {
        DateTimeFieldBehavior[DateTimeFieldBehavior["None"] = 0] = "None";
        DateTimeFieldBehavior[DateTimeFieldBehavior["UserLocal"] = 1] = "UserLocal";
        DateTimeFieldBehavior[DateTimeFieldBehavior["DateOnly"] = 2] = "DateOnly";
        DateTimeFieldBehavior[DateTimeFieldBehavior["TimeZoneIndependent"] = 3] = "TimeZoneIndependent";
    })(Mscrm.DateTimeFieldBehavior || (Mscrm.DateTimeFieldBehavior = {}));
    var DateTimeFieldBehavior = Mscrm.DateTimeFieldBehavior;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
    (function (UpdateEventType) {
        UpdateEventType[UpdateEventType["DataSet"] = 0] = "DataSet";
        UpdateEventType[UpdateEventType["Layout"] = 1] = "Layout";
        UpdateEventType[UpdateEventType["Activation"] = 2] = "Activation";
    })(Mscrm.UpdateEventType || (Mscrm.UpdateEventType = {}));
    var UpdateEventType = Mscrm.UpdateEventType;
    /**
     * Allows a control to guard itself against (multiple) different update events coming from the infra.
     * The default configuration is:
     *   - DataSet: Not ignored
     *   - Layout: Not ignored
     *   - Activation: Ignored
     */
    var UpdateEvents = (function () {
        function UpdateEvents() {
            this.ignoredEvents = {};
            this.ignoredEvents[Mscrm.UpdateEventType.DataSet] = false;
            this.ignoredEvents[Mscrm.UpdateEventType.Layout] = false;
            this.ignoredEvents[Mscrm.UpdateEventType.Activation] = true;
        }
        /**
         * Returns the Mscrm.UpdateEventType enum that is mapped to a given event type code
         * generated by the infra. Returns null if not the code is not found.
         */
        UpdateEvents.getEventType = function (event) {
            switch (event) {
                case "dataset":
                    return Mscrm.UpdateEventType.DataSet;
                case "layout":
                    return Mscrm.UpdateEventType.Layout;
                case "activation":
                    return Mscrm.UpdateEventType.Activation;
                default:
                    return null;
            }
        };
        /**
         * Returns the Mscrm.UpdateEventType enum that is mapped to a given event type code
         * generated by the infra. Returns null if not the code is not found.
         */
        UpdateEvents.getEventCode = function (event) {
            switch (event) {
                case Mscrm.UpdateEventType.DataSet:
                    return "dataset";
                case Mscrm.UpdateEventType.Layout:
                    return "layout";
                case Mscrm.UpdateEventType.Activation:
                    return "activation";
                default:
                    return null;
            }
        };
        /**
         * The event provided in the parameters will be marked as ignorable if and only if
         * shouldIgnore is set to true.
         *
         * @param event {Mscrm.UpdateEventType}: The event to be configured
         * @param shouldIgnore {boolean}: true if the event can be ignored; false otherwise.
         */
        UpdateEvents.prototype.shouldIgnoreEvent = function (event, shouldIgnore) {
            if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(event)) {
                this.ignoredEvents[event] = shouldIgnore;
            }
        };
        /**
         * Returns true if and only if the event provided may be ignored.
         *
         * @param event {Mscrm.UpdateEventType}: The event to be checked.
         */
        UpdateEvents.prototype.isIgnoredEvent = function (event) {
            if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(event)) {
                return this.ignoredEvents[event];
            }
            return false;
        };
        /**
         * Returns true if and only if the updatedProperties array contains the event provided.
         *
         * @param updatedProperties {string[]}: The updated properties array provided by the infra.
         * @param event {Mscrm.UpdateEventType}: The event to be located in the updatedProperties array.
         */
        UpdateEvents.hasEvent = function (updatedProperties, event) {
            var eventCode = UpdateEvents.getEventCode(event);
            return new MscrmCommon.ArrayQuery(updatedProperties).contains(function (item) {
                return item == eventCode;
            });
        };
        return UpdateEvents;
    })();
    Mscrm.UpdateEvents = UpdateEvents;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var AttributeConstants = (function () {
        function AttributeConstants() {
        }
        /** input node checked attribute */
        AttributeConstants.Checked = "checked";
        /** input node readonly attribute**/
        AttributeConstants.ReadOnly = "readonly";
        /** control disabled attribute */
        AttributeConstants.Disabled = "disabled";
        /** control style attribute */
        AttributeConstants.Style = "style";
        /** control framework layout update attribute */
        AttributeConstants.Layout = "layout";
        return AttributeConstants;
    })();
    MscrmCommon.AttributeConstants = AttributeConstants;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmControls;
(function (MscrmControls) {
    var Common;
    (function (Common) {
        'use strict';
        (function (ControlState) {
            ControlState[ControlState["Disabled"] = 0] = "Disabled";
            ControlState[ControlState["Enabled"] = 1] = "Enabled";
        })(Common.ControlState || (Common.ControlState = {}));
        var ControlState = Common.ControlState;
    })(Common = MscrmControls.Common || (MscrmControls.Common = {}));
})(MscrmControls || (MscrmControls = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var CommonControl = (function () {
        /**
         * Empty constructor.
         */
        function CommonControl() {
            this.isInitialized = false;
            this.isEnabled = false;
            this.shouldPreventMultipleEventTypes = true;
            this.isInReadMode = true;
            this.updateEvents = new Mscrm.UpdateEvents();
        }
        Object.defineProperty(CommonControl.prototype, "isControlInitialized", {
            /**
             * Gets a value indicating if the control was initialized.
             */
            get: function () {
                return this.isInitialized;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initializes the control. This function will receive the HTML Div element that will contain your custom control
         * as well as a function to notify the infrastructure that your outputs have changed and that it should call getOutputs()
         * @param container The HTML Element that will contain the control
         * @param notifyOuputChanged A Callback to notify the infrastructure to read the outputs
         * @params context The "Input Bag" containing the parameters and other control metadata.
         * @param state The control state.
         * @param valueContainer The HTML Element that may contain the control value. This container is inline with the control's label container.
         */
        CommonControl.prototype.init = function (container, notifyOutputChanged, context, state, valueContainer) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(container)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.NullOrUndefinedInitContainer);
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(notifyOutputChanged)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.NullOrUndefinedInitNotifyOutputChangedDelegate);
            }
            if (this.isControlInitialized) {
                return;
            }
            this.container = container;
            this.valueContainerElement = valueContainer;
            this.notifyOutputChanged = notifyOutputChanged;
            this.disablePanoramaScroll = context.utils.disablePanoramaScroll;
            this.initializeControl(context, state);
        };
        /**
         * Updates the control with data from the a bag of values currently assigned to the control's manifest parameters
         * @param context The bag of values described above
         */
        CommonControl.prototype.update = function (context) {
            if (this.shouldIgnoreUpdate(context)) {
                return;
            }
            this.throwIfPropertyBagNotValid(context);
            if (!this.isInitialized) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedErrorMessage);
            }
            this.handleEditToReadModeTransition(context);
            if (this.showDefaultLabel(context)) {
                return;
            }
            this.isEnabled = this.isControlEnabled(context);
            this.updateCore(context);
            if (context.mode.isRead || context.mode.isPreview) {
                this.renderReadMode(context);
            }
            else {
                this.renderEditMode(context);
            }
        };
        /**
         * @returns The a bag of output values to pass to the infrastructure
         */
        CommonControl.prototype.getOutputs = function () {
            if (!this.isControlInitialized) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedControl);
            }
            return this.getOutputsCore();
        };
        /**
         * Event handler called when the user triggers a navigation event.
         */
        CommonControl.prototype.onPreNavigation = function () {
            return;
        };
        /**
         * This function destroys the control and cleans up
         */
        CommonControl.prototype.destroy = function () {
            if (this.isControlInitialized) {
                this.eventGuard.destroy();
                this.destroyCore();
            }
            this.cleanup();
        };
        /**
         * Create a wrapper container for the control.
         * @remark this contains the common controls class name
         * @param additional, more specific class name
         */
        CommonControl.prototype.createWrapperContainer = function (className) {
            if (className === void 0) { className = ""; }
            var wrapperContainer = document.createElement("div");
            wrapperContainer.className = MscrmCommon.CommonControl.ClassName;
            wrapperContainer.className += className === "" ? "" : " " + className;
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.container)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.CommonControl.NullOrUndefinedInitContainer);
            }
            this.container.appendChild(wrapperContainer);
            return wrapperContainer;
        };
        /**
         * Handles control specific initialization.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.initCore = function (context, state) {
            MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(CommonControl.MethodNotOverridenFormat, "initCore"));
        };
        /**
         * Handles control specific update.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.updateCore = function (context) {
            MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(CommonControl.MethodNotOverridenFormat, "updateCore"));
        };
        /**
         * Handles control specific destruction.
         */
        CommonControl.prototype.destroyCore = function () {
            MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(CommonControl.MethodNotOverridenFormat, "destroyCore"));
        };
        /**
         * Handles read mode rendering.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.renderReadMode = function (context) {
            this.shouldNotifyOutputChanged = false;
        };
        /**
         * Handles edit mode rendering.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.renderEditMode = function (context) {
            this.shouldNotifyOutputChanged = false;
            // When transitioning from read mode, add the panorama events handlers and disable the transition click
            if (this.isInReadMode) {
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                    this.addPanoramaEventsHandlers();
                }
                this.eventGuard.preventClicksUntilUserInteracted();
            }
            this.isInReadMode = false;
        };
        /**
         * Method should be overridden in the controls specialized classes.
         */
        CommonControl.prototype.getOutputsCore = function () {
            MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(CommonControl.MethodNotOverridenFormat, "getOutputsCore"));
            return null;
        };
        /**
         * Notifies output changed only if the control is enabled or in read/preview mode.
         */
        CommonControl.prototype.notifyEnabledControlOutputChanged = function () {
            if (this.isEnabled) {
                if (this.shouldNotifyOutputChanged) {
                    this.notifyOutputChanged();
                }
            }
        };
        /**
         * Checks whether the control is enabled for changed output notifications.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         */
        CommonControl.prototype.isControlEnabled = function (context) {
            return !context.mode.isRead && !context.mode.isPreview && !context.mode.isControlDisabled;
        };
        /**
         * Checks if the control's bound property is null.
         * Method should be overridden in the controls specialized classes.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         * @returns true if the bound property is null, false otherwise.
         */
        CommonControl.prototype.showDefaultLabelCore = function (context) {
            return false;
        };
        Object.defineProperty(CommonControl.prototype, "valueContainer", {
            /**
             * Returns the controls value container.
             * Throws if value container is undefined.
             * @returns an HTML div element representing the controls value container.
             */
            get: function () {
                if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.valueContainerElement)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.NullOrUndefinedInitValueContainer);
                }
                return this.valueContainerElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Handles the null bound property by hiding the control and showing the default label in the value container.
         * @params context The "Input Bag" containing the parameters and other control metadata.
         * @returns true if the control should render, false if only the valueContainer should render
         */
        CommonControl.prototype.showDefaultLabel = function (context) {
            // Return immediately if there is no value container
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.valueContainerElement)) {
                return false;
            }
            var shouldShowDefaultLabel = this.showDefaultLabelCore(context) && context.mode.isRead;
            if (!shouldShowDefaultLabel) {
                $(this.valueContainer).hide();
                this.toggleContainerVisibility(true);
                return false;
            }
            $(this.valueContainer).text(CommonControl.DefaultValueLabel);
            $(this.valueContainer).show();
            this.toggleContainerVisibility(false);
            return true;
        };
        /**
        * Toggles the container visibility depending on the param
        * @param value - truth value for showing/hiding the container
        * @remark if the control wrapper container exists, it will show/hide that one, else it will show/hide the parent container
        */
        CommonControl.prototype.toggleContainerVisibility = function (value) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.controlWrapperContainer)) {
                value ? $(this.container).show() : $(this.container).hide();
            }
            else {
                value ? $(this.controlWrapperContainer).show() : $(this.controlWrapperContainer).hide();
            }
        };
        /**
        * Handles the internal implementation of the control initialization.
        * @params context The "Input Bag" containing the parameters and other control metadata.
        * @param state The control state.
        */
        CommonControl.prototype.initializeControl = function (context, state) {
            try {
                this.throwIfPropertyBagNotValid(context);
                this.notificationHandler = new MscrmCommon.ErrorHandling.NotificationHandler(context.utils.setNotification, context.utils.clearNotification);
                this.htmlEncode = context.utils.crmHtmlEncode;
                this.eventGuard = new MscrmCommon.EventGuard(this.container, context.client.userAgent);
                this.initCore(context, state);
                if (this.shouldPreventMultipleEventTypes) {
                    this.eventGuard.preventMultipleEventTypes();
                }
                this.isEnabled = this.isControlEnabled(context);
                this.isInitialized = true;
            }
            catch (e) {
                // Ensure that the container is cleaned up if an error occured on control initialization
                if (this.container.hasChildNodes()) {
                    var childCount = this.container.childNodes.length;
                    for (var i = childCount - 1; i >= 0; i--) {
                        this.container.removeChild(this.container.childNodes[i]);
                    }
                }
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(e);
            }
        };
        /**
        * Guards against infra updates due to layout changes.
        * @param context The bag of values described above
        * @returns truth value based on infra properties and the control's decision to ignore the update
        */
        CommonControl.prototype.shouldIgnoreUpdate = function (context) {
            var shouldIgnore = true;
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context) ||
                MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.updatedProperties) ||
                MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.updateEvents) ||
                context.updatedProperties.length == 0) {
                return false;
            }
            for (var i = 0; i < context.updatedProperties.length; i++) {
                var eventType = Mscrm.UpdateEvents.getEventType(context.updatedProperties[i]);
                shouldIgnore = shouldIgnore && this.updateEvents.isIgnoredEvent(eventType);
            }
            return shouldIgnore;
        };
        /**
         * Checks the validity of the property bag and throws if it is invalid.
         * @param context The data bag.
         */
        CommonControl.prototype.throwIfPropertyBagNotValid = function (context) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(CommonControl.UninitializedDataBagMessage);
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.parameters)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.parameters"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils.setNotification)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.setNotification"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils.clearNotification)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.clearNotification"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils.openInBrowser)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.openInBrowser"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils.getServiceUri)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.getServiceUri"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.mode)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.mode.isControlDisabled)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isControlDisabled"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.mode.isRead)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isRead"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.mode.isPreview)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.mode.isPreview"));
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils)) {
                throw MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils");
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(context.utils.crmHtmlEncode)) {
                throw MscrmCommon.ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "dataBag.utils.crmHtmlEncode");
            }
        };
        /**
         * Helper method to clean up container
         */
        CommonControl.prototype.cleanup = function () {
            if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.container)) {
                MscrmCommon.ThemingHelper.removeStyles(this.container);
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                }
            }
            this.isInitialized = false;
            this.notifyOutputChanged = null;
            $(this.container).empty();
            this.container = null;
            $(this.valueContainerElement).empty();
            this.valueContainerElement = null;
        };
        /**
         * Handles the transition from edit to read mode.
         * @param context The context.
         */
        CommonControl.prototype.handleEditToReadModeTransition = function (context) {
            // Remove the event handlers before the label can be shown when transitioning to read mode from edit mode
            if (!this.isInReadMode && context.mode.isRead) {
                // When transitioning from edit mode, remove the panorama events handlers
                if (this.preventEditModePanoramaEvents) {
                    this.removePanoramaEventsHandlers();
                }
                this.eventGuard.stopPreventingClicks();
                this.isInReadMode = true;
            }
        };
        /**
         * Removes the panorama events handlers, which disable panorama scroll.
         */
        CommonControl.prototype.removePanoramaEventsHandlers = function () {
            $(this.container).off(CommonControl.PointerDownEventName);
            $(this.container).off(CommonControl.PointerMoveEventName);
            $(this.container).off(CommonControl.PointerUpEventName);
            $(this.container).off(CommonControl.TouchEndEventName);
        };
        /**
         * Adds the panorama events handlers, which disable panorama scroll.
         */
        CommonControl.prototype.addPanoramaEventsHandlers = function () {
            var _this = this;
            $(this.container).on(CommonControl.PointerDownEventName, function (event) {
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(true);
                    event.stopPropagation();
                }
            });
            $(this.container).on(CommonControl.PointerMoveEventName, function (event) {
                if (_this.isEnabled) {
                    event.stopPropagation();
                }
            });
            $(this.container).on(CommonControl.PointerUpEventName, function (event) {
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(false);
                }
            });
            $(this.container).on(CommonControl.TouchEndEventName, function (event) {
                // This is needed if the event occurs outside of the container (if the touch ends outside the container, no pointerup is fired, however a touchend is)
                if (_this.isEnabled) {
                    _this.disablePanoramaScroll(false);
                }
            });
        };
        // The class name common to the field controls.
        CommonControl.ClassName = "mocaControls";
        // The custom control pointerdown event.
        CommonControl.PointerDownEventName = "pointerdown.CustomControl";
        // The custom control pointermove event.
        CommonControl.PointerMoveEventName = "pointermove.CustomControl";
        // The custom control pointerup event.
        CommonControl.PointerUpEventName = "pointerup.CustomControl";
        // The custom control touchend event.
        CommonControl.TouchEndEventName = "touchend.CustomControl";
        // The label string for the control's default (null) value.
        CommonControl.DefaultValueLabel = "---";
        // This exception message is thrown when initializing a control with a null or undefined container.
        CommonControl.NullOrUndefinedInitContainer = "Null or undefined control container.";
        // This exception message is thrown when initializing a control with a null or undefined value (aux) container.
        CommonControl.NullOrUndefinedInitValueContainer = "Null or undefined control value container.";
        // This exception message is thrown when initializing a control with a null or undefined NotifyOutputChanged delegate.
        CommonControl.NullOrUndefinedInitNotifyOutputChangedDelegate = "Null or undefined NotifyOutputChanged delegate.";
        // This exception message is thrown when updating a control before initialize.
        CommonControl.UninitializedErrorMessage = "init should be called before calling update.";
        // This exception message is thrown when the control is updated with a null or undefined context property.
        CommonControl.UninitializedDataBagMessage = "Null or undefined dataBag property.";
        // This exception message is thrown when the property bag does not contain an expected parameter 
        CommonControl.InvalidDataBagKeyFormat = "Expected key {0} in the input data bag.";
        // This exception message is thrown when the control is used uninitialized
        CommonControl.UninitializedControl = "Control is used uninitialized.";
        // This exception message is thrown when Min or Max values do not bound a valid interval.
        CommonControl.InvalidInputParamMinMax = "Min and max values do not bound a valid interval.";
        // This exception message is thrown when step parameter is less than 0 or not in the min-max interval.
        CommonControl.InvalidInputParamStep = "Step parameter should be greater than 0 and less than the interval bound by min and max.";
        // This exception message is thrown when the value for the control is not within the desired interval.
        CommonControl.InvalidInputParamValue = "Value for the control is not within the desired interval.";
        // This exception message is thrown when an input parameter should have been greater than zero
        CommonControl.NotGreaterThanZeroInputParamValue = "Parameter {0} should be greater than zero.";
        // This is the default error message for invalid parameters.
        CommonControl.InvalidInputParam = "One or more of the input parameters are invalid: {0}";
        // This exception message is thrown when a given method is not overriden.
        CommonControl.MethodNotOverridenFormat = "Method {0} is not overridden in the specialized class.";
        // This exception message is thrown when a given method is not overriden.
        CommonControl.MethodNotImplementedInControl = "Method {0} is not implemented in the control.";
        return CommonControl;
    })();
    MscrmCommon.CommonControl = CommonControl;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
    * Base class for field controls
    */
    var FieldControlBase = (function (_super) {
        __extends(FieldControlBase, _super);
        function FieldControlBase() {
            _super.call(this);
            this.updateEvents.shouldIgnoreEvent(Mscrm.UpdateEventType.Layout, true);
            this.updateEvents.shouldIgnoreEvent(Mscrm.UpdateEventType.Activation, true);
        }
        return FieldControlBase;
    })(MscrmCommon.CommonControl);
    MscrmCommon.FieldControlBase = FieldControlBase;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var EventConstants = (function () {
        function EventConstants() {
        }
        /** JQuery change event */
        EventConstants.Change = "change";
        /** JQuery click event */
        EventConstants.Click = "click";
        /** JQuery knob configure event */
        EventConstants.JQueryKnobConfigure = "configure";
        /** JQuery swipe left event */
        EventConstants.JQuerySwipeLeft = "swipeleft";
        /** JQuery right left event */
        EventConstants.JQuerySwipeRight = "swiperight";
        /** Key raise event */
        EventConstants.KeyUp = "keyup";
        /** JQuery mouseup event */
        EventConstants.MouseUp = "mouseup";
        /** JQuery mousedown event */
        EventConstants.MouseDown = "mousedown";
        /** Mouse Over event */
        EventConstants.MouseOver = "mouseover";
        /** Mouse Move event */
        EventConstants.MouseMove = "mousemove";
        /** Pointer Down event */
        EventConstants.PointerDown = "pointerdown";
        /** Pointer Move event */
        EventConstants.PointerMove = "pointermove";
        /** Pointer Up event */
        EventConstants.PointerUp = "pointerup";
        /** Pointer Out event */
        EventConstants.PointerOut = "pointerout";
        /** MS Pointer Over event */
        EventConstants.MSPointerOver = "MSPointerOver";
        /** MS Pointer Down event */
        EventConstants.MSPointerDown = "MSPointerDown";
        /** MS Pointer Out event */
        EventConstants.MSPointerOut = "MSPointerOut";
        /** MS Pointer Up event */
        EventConstants.MSPointerUp = "MSPointerUp";
        /** MS Pointer Move event */
        EventConstants.MSPointerMove = "MSPointerMove";
        /** Touch Start event */
        EventConstants.TouchStart = "touchstart";
        /** Touch Move event */
        EventConstants.TouchMove = "touchmove";
        /** Touch End event */
        EventConstants.TouchEnd = "touchend";
        /** Wijmo control library value changed event */
        EventConstants.WijmoValueChangedEvent = "valueChanged";
        /** Wijmo control library is dropped down changed event */
        EventConstants.WijmoIsDroppedDownChangedEvent = "isDroppedDownChanged";
        /** Wijmo control library selected index changed event */
        EventConstants.WijmoSelectedIndexChangedEvent = "selectedIndexChanged";
        /** JQuery Mobile Virtual Mouse Move event **/
        EventConstants.VMouseMove = "vmousemove";
        /** Focus event */
        EventConstants.Focus = "focus";
        /** Focus in event */
        EventConstants.FocusIn = "focusin";
        /** Focus out event */
        EventConstants.FocusOut = "focusout";
        /** Focus events */
        EventConstants.FocusEvents = "focusin focusout";
        return EventConstants;
    })();
    MscrmCommon.EventConstants = EventConstants;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var EventGuard = (function () {
        /* Creates a new event guard.
         * @param container The container on which to prevent the focus event.
         * @param userAgent The user agent.
         */
        function EventGuard(container, userAgent) {
            this.container = container;
            this.userAgent = userAgent;
        }
        /**
         * Destroys the event guard.
         */
        EventGuard.prototype.destroy = function () {
            this.stopPreventingClicks();
            this.stopPreventingFocus();
            this.stopPreventingMultipleEventTypes();
            this.container = null;
            this.userAgent = null;
        };
        /*
         * Prevent the next edit mode click event if occuring within the edit mode transition phase, as this is not due to user interaction.
         * Should only be used when first going into read mode from edit mode.
         * @remarks We need to prevent the first click when transitioning from read mode since the infra calls updateCore on pointerup, and the click event might follow.
         *			The extraneous click event can cause unwanted behavior upon our control, however is still needed by the infra to prevent double edit mode, therefore it
         *			will be faked by synthesizing a click event on the container, which will have no side-effects, however will make the infra acknowledge that we're in edit mode.
         *			The user interaction flag can also be set by a pointerdown event, just in case the final click event is not triggered by the browser.
         *			This behavior should be removed when entering read mode by calling the stopPreventingClicks function.
         * @param container The container.
         */
        EventGuard.prototype.preventClicksUntilUserInteracted = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            // Stop preventing clicks in case already preventing and the user has never interacted.
            this.stopPreventingClicks();
            // Mark the container as having been interacted with when a pointerdown event is triggered
            $(this.container).on(EventGuard.hasUserInteractedEventName, function (e) {
                _this.userInteractedInEditMode = true;
            });
            // Prevent the non-user generated click events
            this.removeClickEventHandler = EventGuard.handleEditModeClickEvents(this.container, this);
        };
        /*
         * Stop preventing clicks until user interacted.
         */
        EventGuard.prototype.stopPreventingClicks = function () {
            this.userInteractedInEditMode = false;
            // Remove the click prevention on the next container pointerdown
            $(this.container).off(EventGuard.hasUserInteractedEventName);
            if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.removeClickEventHandler)) {
                this.removeClickEventHandler();
            }
            this.removeClickEventHandler = null;
        };
        /**
         * Prevent the next edit mode focus event, since it will occur during the transition.
         * @remarks We need to prevent input element actions when transitioning from read mode since the infra calls updateCore on pointerUp, and the focus event might follow.
         *			The extraneous focus event can cause unwanted behavior upon our control, so we set the input elements to read-only until we are sure that the user is interacting,
         *			which will happen on the next pointerdown.
         *			This behavior should be removed when entering read mode by calling the stopPreventingFocus function.
         */
        EventGuard.prototype.preventEditModeTransitionFocus = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            // Stop preventing focuses in case already preventing and the user has never interacted.
            this.stopPreventingFocus();
            this.userInteractedInEditModeWithAnInputElement = false;
            var inputElements = $(this.container).find('input');
            inputElements.each(function (index, element) {
                // Set the input elements to readonly until the next pointerdown to prevent focus events
                element.setAttribute(MscrmCommon.AttributeConstants.ReadOnly, MscrmCommon.AttributeConstants.ReadOnly);
                // On Android, also blur on focus to prevent the caret from showing
                if (_this.userAgent.isAndroid) {
                    $(element).on(EventGuard.focusRemoveEvent, function (e) {
                        $(element).blur();
                        $(element).off(EventGuard.focusRemoveEvent);
                    });
                }
                // Remove the readonly on the next element pointerdown
                $(element).on(EventGuard.hasUserInteractedWithElementEventName, function (e) {
                    _this.stopPreventingFocusEvents(element);
                });
            });
        };
        /**
         * Stops preventing the transition edit mode focus event, as the control might not have been interacted with.
         * @param container The container on which to prevent the focus event.
         */
        EventGuard.prototype.stopPreventingFocus = function () {
            var _this = this;
            // Only stop preventing transition focus if the user hasn't interacted with the element in edit mode. Else the event handler cleanup should already have been executed.
            if (!this.userInteractedInEditModeWithAnInputElement) {
                var inputElements = $(this.container).find('input');
                inputElements.each(function (index, element) {
                    _this.stopPreventingFocusEvents(element);
                });
            }
        };
        /*
         * Prevents all mouse events upon an element if a touch event is detected and vice-versa, returning a callback to remove the event handlers.
         * Also prevents the first click and focus events if they occur within a certain timeframe.
         * @return Callback to remove the event handlers.
         */
        EventGuard.prototype.preventMultipleEventTypes = function () {
            var _this = this;
            if (this.container == null || this.userAgent == null) {
                return;
            }
            var resetMultipleEventTypeFlags = function (e) {
                // The click is issued only after all mouse*, touch* and pointer* events are issued, so we can safely set the prevention flags to false
                _this.shouldPreventMouseEvents = false;
                _this.shouldPreventTouchEvents = false;
            };
            var removeTouchEventHandlers = EventGuard.preventTouchEventsAfterMouseDown(this.container, this);
            var removeMouseEventHandlers = EventGuard.preventMouseEventsAfterTouchStart(this.container, this);
            this.container.addEventListener(MscrmCommon.EventConstants.Click, resetMultipleEventTypeFlags, true);
            var removalCallback = function () {
                removeTouchEventHandlers();
                removeMouseEventHandlers();
                _this.container.removeEventListener(MscrmCommon.EventConstants.Click, resetMultipleEventTypeFlags, true);
            };
            this.removeMultipleEventHandlers = removalCallback;
        };
        /**
         * Stops preventing multiple event types.
         * Should be used when destroying the control.
         */
        EventGuard.prototype.stopPreventingMultipleEventTypes = function () {
            if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(this.removeMultipleEventHandlers)) {
                this.removeMultipleEventHandlers();
            }
            this.removeMultipleEventHandlers = null;
        };
        /**
         * Stops preventing focus events on a certain element.
         * @param element The element to stop focus events upon.
         */
        EventGuard.prototype.stopPreventingFocusEvents = function (element) {
            element.removeAttribute(MscrmCommon.AttributeConstants.ReadOnly);
            if (this.userAgent.isAndroid) {
                $(element).off(EventGuard.focusRemoveEvent);
            }
            $(element).off(EventGuard.hasUserInteractedWithElementEventName);
            this.userInteractedInEditModeWithAnInputElement = true;
        };
        EventGuard.handleEditModeClickEvents = function (element, eventGuard) {
            var preventFirstClick = function (e) {
                // The controls should not react upon the first edit mode click event since this is fired almost instantly after entering edit mode.
                if (!eventGuard.userInteractedInEditMode) {
                    e.stopPropagation();
                    // Pre-set this flag since we're handling the transition mode click
                    eventGuard.userInteractedInEditMode = true;
                    // Trigger a synthetic click event so that standard MoCA behavior is not altered.
                    $(element).trigger(MscrmCommon.EventConstants.Click);
                }
                eventGuard.userInteractedInEditMode = true;
            };
            element.addEventListener(MscrmCommon.EventConstants.Click, preventFirstClick, true);
            return function () {
                element.removeEventListener(MscrmCommon.EventConstants.Click, preventFirstClick, true);
            };
        };
        EventGuard.preventTouchEventsAfterMouseDown = function (element, eventGuard) {
            var onTouchStart = function (e) {
                // If touch events are not prevented, it means the touch start was the first event to be called and we must start preventing mouse events.
                if (!eventGuard.shouldPreventTouchEvents) {
                    eventGuard.shouldPreventMouseEvents = true;
                }
                else {
                    e.stopImmediatePropagation();
                }
            };
            var preventTouchEventsIfRequired = function (e) {
                if (eventGuard.shouldPreventTouchEvents) {
                    e.stopImmediatePropagation();
                }
            };
            element.addEventListener(MscrmCommon.EventConstants.TouchStart, onTouchStart, true);
            element.addEventListener(MscrmCommon.EventConstants.TouchMove, preventTouchEventsIfRequired, true);
            element.addEventListener(MscrmCommon.EventConstants.TouchEnd, preventTouchEventsIfRequired, true);
            return function () {
                element.removeEventListener(MscrmCommon.EventConstants.TouchStart, onTouchStart, true);
                element.removeEventListener(MscrmCommon.EventConstants.TouchMove, preventTouchEventsIfRequired, true);
                element.removeEventListener(MscrmCommon.EventConstants.TouchEnd, preventTouchEventsIfRequired, true);
            };
        };
        EventGuard.preventMouseEventsAfterTouchStart = function (element, eventGuard) {
            var onMouseDown = function (e) {
                // If mouse events are not prevented, it means the mouse down was the first event to be called and we must start preventing touch events.
                if (!eventGuard.shouldPreventMouseEvents) {
                    eventGuard.shouldPreventTouchEvents = true;
                }
                else {
                    e.stopImmediatePropagation();
                }
            };
            var preventMouseEventsIfRequired = function (e) {
                if (eventGuard.shouldPreventMouseEvents) {
                    e.stopImmediatePropagation();
                }
            };
            element.addEventListener(MscrmCommon.EventConstants.MouseDown, onMouseDown, true);
            element.addEventListener(MscrmCommon.EventConstants.MouseMove, preventMouseEventsIfRequired, true);
            element.addEventListener(MscrmCommon.EventConstants.MouseUp, preventMouseEventsIfRequired, true);
            return function () {
                element.removeEventListener(MscrmCommon.EventConstants.MouseDown, onMouseDown, true);
                element.removeEventListener(MscrmCommon.EventConstants.MouseMove, preventMouseEventsIfRequired, true);
                element.removeEventListener(MscrmCommon.EventConstants.MouseUp, preventMouseEventsIfRequired, true);
            };
        };
        /* Remove focus event, to prevent Android from showing the caret on a readonly input when switching into edit mode */
        EventGuard.focusRemoveEvent = "focus.RemoveFocus";
        /* Pointerdown event, which signals that the user interacted with the control in edit mode */
        EventGuard.hasUserInteractedEventName = "pointerdown.UserInteracted";
        /* Pointerdown event, which signals that the user interacted with an element in edit mode */
        EventGuard.hasUserInteractedWithElementEventName = "pointerdown.UserInteractedElement";
        return EventGuard;
    })();
    MscrmCommon.EventGuard = EventGuard;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var MethodConstants = (function () {
        function MethodConstants() {
        }
        /** JQuery Mobile destroy method */
        MethodConstants.Destroy = "destroy";
        /** JQuery Mobile refresh method */
        MethodConstants.Refresh = "refresh";
        /** JQuery value method */
        MethodConstants.Value = "value";
        /** JQuery option method */
        MethodConstants.Option = "option";
        /** JQuery disable method */
        MethodConstants.Disable = "disable";
        /** JQuery enable method */
        MethodConstants.Enable = "enable";
        return MethodConstants;
    })();
    MscrmCommon.MethodConstants = MethodConstants;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Control guid generator helper methods.
        */
        var ControlGuidGenerator = (function () {
            function ControlGuidGenerator() {
            }
            ControlGuidGenerator.newGuid = function (controlName) {
                return controlName + 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };
            return ControlGuidGenerator;
        })();
        ControlUtils.ControlGuidGenerator = ControlGuidGenerator;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Enum helper methods.
        */
        var Enum = (function () {
            function Enum() {
            }
            Enum.getFromString = function (enumArray, stringValue) {
                for (var i in enumArray) {
                    if (enumArray[i] == stringValue) {
                        return parseInt(i);
                    }
                }
                return -1;
            };
            return Enum;
        })();
        ControlUtils.Enum = Enum;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Event helper methods.
        */
        var Event = (function () {
            function Event() {
            }
            /**
             * Creates a namespaced event, in order to uniquely identify it.
             * @param eventName The name of an event, e.g. click.
             * @param eventNamespace The namespace of the event, used to uniquely identify the event.
             * @returns The event with the namespace.
             */
            Event.createName = function (eventName, eventNamespace) {
                return ControlUtils.String.Format("{0}.{1}", eventName, eventNamespace);
            };
            return Event;
        })();
        ControlUtils.Event = Event;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Hit target helper methods.
        */
        var HitTarget = (function () {
            function HitTarget() {
            }
            /**
             * Checks if the hit target is already created
             * @param container - the container received from the control framework
             * @param hitTargetClassSelector - CSS selector for the hit target class
             * @returns truth value
             */
            HitTarget.exists = function (container, hitTargetClassSelector) {
                return container.find(hitTargetClassSelector).length > 0;
            };
            /**
             * Creates a hit target around the control
             * @param container - the container received from the control framework
             * @param controlDomElement - the control's host element
             * @param hitTargetClass - the class containing control specific styles
             * @param trackElementClassSelector - the CSS selector that identifies the track element, e.g., actual slider bar
             * @param min - the mimimum value supported by the control
             * @param max - the maximum value supported by the control
             * @param paddingLeftPx - the offset from the container's left border
             * @param setControlValue - delegate that sets the control's value
             */
            HitTarget.create = function (container, controlDomElement, hitTargetClass, trackElementClassSelector, paddingLeftPx, min, max, setControlValue) {
                if (max < min) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException("Expected max to be bigger then min");
                }
                controlDomElement.wrap('<div class="' + hitTargetClass + '"/>');
                var controlNumericRange = max - min;
                var hitTargetElement = container.find("." + hitTargetClass);
                var setValue = function (event) {
                    // get the control's coordinates (offset from 0,0) on page
                    var offset = container.find(trackElementClassSelector).offset();
                    var width = controlDomElement.width();
                    var height = controlDomElement.height();
                    var isClickOutsideControlHeight = event.pageY < offset.top || event.pageY > (offset.top + height);
                    if (!isClickOutsideControlHeight) {
                        return;
                    }
                    var isClickInsideContainer = $(event.target).hasClass(controlDomElement[0].className) || $(event.target).hasClass(hitTargetClass);
                    if (!isClickInsideContainer) {
                        return;
                    }
                    // calculate the click's displacement on the x-axis, relative to the control's width
                    var xAxisDisplacementPercent = Math.abs(((event.pageX + paddingLeftPx) - offset.left)) / width;
                    // guard against clicks outside the control's width
                    if (xAxisDisplacementPercent <= 1) {
                        // calculate new value to set on the control and round it up
                        var newValue = ControlUtils.NumericInterval.trunc(min + (controlNumericRange * xAxisDisplacementPercent));
                        setControlValue(newValue);
                    }
                    if (event.type === MscrmCommon.EventConstants.PointerDown) {
                        // Prevent mouse users from editing the control all the time if they lift the mouse button while not over the hit target.)
                        $(document).on(HitTarget.mouseUpHitTargetEventName, function (e) {
                            // This should only be triggered for users using the mouse in the app (Windows app or Android using mouse)
                            HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                        });
                        // Enable further events (pointermove, pointerup)
                        hitTargetElement.on(HitTarget.subsequentEvents, setValue);
                    }
                    else if (event.type === MscrmCommon.EventConstants.PointerUp) {
                        // If the pointer up event has fired (within the container), it means the mouseup event is not needed and that the user finished a set of interactions.
                        HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                    }
                };
                hitTargetElement.on(HitTarget.initialEvents, setValue);
                hitTargetElement.on(MscrmCommon.EventConstants.TouchEnd, function (event) {
                    // If the touch end event has fired (within or outside of the container), it means the mouseup event is not needed, as the user isn't using a mouse.
                    HitTarget.removeHitTargetSubsequentEvents(hitTargetElement);
                });
            };
            HitTarget.removeHitTargetSubsequentEvents = function (hitTargetElement) {
                $(document).off(HitTarget.mouseUpHitTargetEventName);
                hitTargetElement.off(HitTarget.subsequentEvents);
            };
            HitTarget.initialEvents = "click pointerdown";
            HitTarget.subsequentEvents = "pointermove pointerup";
            HitTarget.mouseUpHitTargetEventName = "mouseup.HitTarget";
            return HitTarget;
        })();
        ControlUtils.HitTarget = HitTarget;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Helper methods for numeric interval controls.
        */
        var NumericInterval = (function () {
            function NumericInterval() {
            }
            /**
             * Checks the parameters in the property bag for null values.
             * @param context object passed by the infra
             * @param hasStep boolean flag
             */
            NumericInterval.throwIfNullDataBagParameters = function (context, hasStep) {
                if (hasStep === void 0) { hasStep = true; }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "value"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value.attributes.minValue)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "value.attributes.minValue"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.value.attributes.maxValue)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "value.attributes.maxValue"));
                }
                if (hasStep && ControlUtils.Object.isNullOrUndefined(context.parameters.step)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "step"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.min)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "min"));
                }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters.max)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ControlUtils.String.Format(MscrmCommon.CommonControl.InvalidDataBagKeyFormat, "max"));
                }
            };
            /**
             * Process the property bag values (set default values, gracefully handle customization error scenarios).
             * @param context object passed by the infra
             * @param notificationHandler object
             * @param hasStep boolean flag
             * @param roundValues boolean flag
             */
            NumericInterval.processPropertyBagValues = function (context, notificationHandler, roundValues) {
                if (roundValues === void 0) { roundValues = true; }
                if (ControlUtils.Object.isNullOrUndefined(context.parameters)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException("Expected context.parameters object");
                }
                var min = context.parameters.min;
                var max = context.parameters.max;
                var value = context.parameters.value;
                var step = context.parameters.step;
                var hasStep = !ControlUtils.Object.isNullOrUndefined(step);
                if (ControlUtils.Object.isNullOrUndefined(notificationHandler)) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException("Expected notificationHandler object");
                }
                notificationHandler.clear(MscrmCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                if (ControlUtils.Object.isNullOrUndefined(min.raw)) {
                    min.raw = context.parameters.value.attributes.minValue;
                }
                if (ControlUtils.Object.isNullOrUndefined(max.raw)) {
                    max.raw = context.parameters.value.attributes.maxValue;
                }
                // swap min / max if wrongly set by the customizer
                if (max.raw < min.raw) {
                    var swap = max.raw;
                    max.raw = min.raw;
                    min.raw = swap;
                }
                // the error flag is set whenever the bound property is outside the range [attributes.minValue, attributes.maxValue]
                if (ControlUtils.Object.isNullOrUndefined(value.raw) || value.error == true) {
                    value.raw = min.raw;
                }
                if (hasStep && ControlUtils.Object.isNullOrUndefined(step.raw)) {
                    step.raw = NumericInterval.StepDefaultValue;
                }
                if (roundValues) {
                    min.raw = Math.round(min.raw);
                    max.raw = Math.round(max.raw);
                    value.raw = Math.round(value.raw);
                    if (hasStep) {
                        step.raw = Math.round(step.raw);
                    }
                }
                if (hasStep && (step.raw > (max.raw - min.raw) || (step.raw <= 0) || (value.raw % step.raw !== 0))) {
                    step.raw = NumericInterval.StepDefaultValue;
                }
                if (value.raw < min.raw || value.raw > max.raw) {
                    var messageFormat = context.resources.getString(MscrmCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                    var message = ControlUtils.String.Format(messageFormat, min.raw, max.raw);
                    notificationHandler.notify(message, MscrmCommon.ErrorHandling.ErrorCode.ValueOutOfRangeId);
                }
            };
            /**
             * Return a optional number propery
             * @param value the raw value
             * @returns a number property.
             */
            NumericInterval.createOptionalNumberPropery = function (value) {
                return {
                    raw: value,
                    type: "Optional",
                    error: null,
                    attributes: null,
                    errorMessage: null
                };
            };
            /**
             * Move the value to its correct step.
             * @param value the raw value
             * @param context the databag
             * @returns the new value
             */
            NumericInterval.moveValueToMultipleOfStep = function (value, context) {
                if (Math.abs(value - context.parameters.min.raw) % context.parameters.step.raw !== 0 && value !== context.parameters.max.raw) {
                    var stepsAfterMinimum = Math.floor(Math.abs(value - context.parameters.min.raw) / context.parameters.step.raw);
                    if (isNaN(stepsAfterMinimum)) {
                        stepsAfterMinimum = 0;
                    }
                    value = context.parameters.min.raw + stepsAfterMinimum * context.parameters.step.raw;
                    if (value > context.parameters.max.raw) {
                        value = context.parameters.max.raw;
                    }
                }
                return value;
            };
            /**
             * Gets the formatted value of the numeric control
             * @param value the NumberProperty object from the context
             * @returns the formatted value as a string
             */
            NumericInterval.getFormattedValue = function (value) {
                var formattedValue = value.formatted;
                if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(formattedValue)
                    || MscrmCommon.ControlUtils.String.isNullOrWhitespace(formattedValue)) {
                    var rawValue = value.raw;
                    formattedValue = !MscrmCommon.ControlUtils.Object.isNullOrUndefined(rawValue) ? rawValue.toString() : MscrmCommon.ControlUtils.String.Empty;
                }
                return formattedValue;
            };
            /**
            * Checks whether the formatted value is a percentage
            * @param formattedValue string
            * @remarks Wijmo does not accept a custom percentage symbol so we need to adhere to the default % symbol.
            */
            NumericInterval.isPercent = function (formattedValue) {
                return !MscrmCommon.ControlUtils.Object.isNullOrUndefined(formattedValue) && formattedValue.indexOf('%') > -1;
            };
            /**
            * Handles the behavior of the value container for numeric controls.
            * @param container for holding the value
            * @param control value as string
            */
            NumericInterval.setValueContainer = function (container, value) {
                var jqueryContainer = $(container);
                jqueryContainer.show();
                jqueryContainer.text(value);
            };
            /**
            * Gets the precision property
            * @remarks The precision is only present for decimals and currencies. Thus, we weakly type the attributes to reach this value.
            * @param property of type Mscrm.NumberProperty (weakly typed)
            * @returns precision attribute as a number
            */
            NumericInterval.getPrecision = function (property) {
                return property.attributes.precision;
            };
            /**
            * Checks if the supplied parameter si a number
            * @param value the value that needs to checked
            * @returns true if the parameter is a number, false otherwise
            */
            NumericInterval.isNumber = function (value) {
                return !MscrmCommon.ControlUtils.Object.isNullOrUndefined(value) && typeof (value) == 'number';
            };
            /**
            * Returns the integral part of a number by removing any fractional digits
            * @param x a number
            */
            NumericInterval.trunc = function (x) {
                return x < 0 ? Math.ceil(x) : Math.floor(x);
            };
            /**
            * Checks to see if the value is a finite number.
            * @returns true if the parameter is a valid number, false otherwise
            */
            NumericInterval.isNumeric = function (value) {
                return !isNaN(value) && isFinite(value);
            };
            NumericInterval.StepDefaultValue = 1;
            return NumericInterval;
        })();
        ControlUtils.NumericInterval = NumericInterval;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
/// <reference path="../../Typings/Wijmo/wijmo.d.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Helper methods for numeric interval controls.
        */
        var WijmoGlobalization = (function () {
            function WijmoGlobalization() {
            }
            /**
            * Gets the Wijmo value format
            * @param context - the data bag object passed by the infra
            * @returns the value format to set in wijmo controls
            */
            WijmoGlobalization.getFormat = function (context) {
                var numberFormattingInfo = context.client.numberFormattingInfo;
                var formattedValue = MscrmCommon.ControlUtils.NumericInterval.getFormattedValue(context.parameters.value);
                var crmNumberType = context.parameters.value.attributes.type;
                var isPercent = MscrmCommon.ControlUtils.NumericInterval.isPercent(formattedValue);
                var overriddenPrecision = MscrmCommon.ControlUtils.NumericInterval.getPrecision(context.parameters.value);
                WijmoGlobalization.setWijmoNumberFormatStructure(numberFormattingInfo, crmNumberType, isPercent, overriddenPrecision);
                var valueFormat = MscrmCommon.Globalization.WijmoNumberFormatFactory.getNumberFormatString(numberFormattingInfo, crmNumberType, isPercent, overriddenPrecision);
                return valueFormat;
            };
            /**
            * Gets the Wijmo formatted value
            * @param value - control value
            * @param format - wijmo number format
            * @returns formatted value as a string
            */
            WijmoGlobalization.getFormattedValue = function (value, format) {
                return wijmo.Globalize.format(value, format);
            };
            /**
            * Sets the wijmo number format structure
            * @param crmNumberFormat NumberFormatting structure passed from infra
            * @param numberType type of the bound field
            * @param isPercent flag indicating if the formatted value is a percentage
            * @param overriddenPrecision precision value if available for the field type
            */
            WijmoGlobalization.setWijmoNumberFormatStructure = function (crmNumberFormat, numberType, isPercent, overriddenPrecision) {
                var wijmoNumberFormat = MscrmCommon.Globalization.WijmoNumberFormatFactory.getWijmoNumberFormatStructure(crmNumberFormat, numberType, isPercent, overriddenPrecision);
                if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(wijmo.culture)) {
                    wijmo.culture = {
                        Globalize: {
                            numberFormat: wijmoNumberFormat
                        }
                    };
                    return;
                }
                wijmo.culture.Globalize.numberFormat = wijmoNumberFormat;
            };
            return WijmoGlobalization;
        })();
        ControlUtils.WijmoGlobalization = WijmoGlobalization;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Object helper methods.
        */
        var Object = (function () {
            function Object() {
            }
            Object.isNullOrUndefined = function (object) {
                return typeof (object) == "undefined" || object == null;
            };
            return Object;
        })();
        ControlUtils.Object = Object;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * Object helper methods.
        */
        var Property = (function () {
            function Property() {
            }
            /**
             * Checks if the bound property is null.
             * @param property The control specific bound property
             * @returns true if the bound property is null, false otherwise.
             */
            Property.isNullOrEmpty = function (property) {
                return MscrmCommon.ControlUtils.Object.isNullOrUndefined(property)
                    || MscrmCommon.ControlUtils.Object.isNullOrUndefined(property.raw)
                    || MscrmCommon.ControlUtils.String.isNullOrEmpty(property.raw);
            };
            return Property;
        })();
        ControlUtils.Property = Property;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var ControlUtils;
    (function (ControlUtils) {
        'use strict';
        /**
        * String helper methods.
        */
        var String = (function () {
            function String() {
            }
            String.isNullOrEmpty = function (s) {
                return s == null || s.length === 0;
            };
            String.isNullOrWhitespace = function (s) {
                return s == null || s.trim().length === 0;
            };
            String.isNullUndefinedOrWhitespace = function (s) {
                return s == null || s == undefined || s.trim().length === 0;
            };
            /**
            * @remarks Limited functionality implemented
            * @returns a formatted string, similar to string.Format in C#.
            */
            String.Format = function (format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var returnValue = format;
                for (var i = 1; i < arguments.length; i++) {
                    var actualValue = typeof (arguments[i]) == "undefined" || arguments[i] == null ? "" : arguments[i].toString();
                    returnValue = returnValue.replace(new RegExp("\\{" + (i - 1) + "\\}", 'g'), actualValue);
                }
                return returnValue;
            };
            /**
             * Compares one string to another string. The result is true if and only if one of the following conditions is true:
             *   <ul>
             *     <li>Both arguments are null</li>
             *     <li>Both arguments are undefined</li>
             *     <li>
             *       Both arguments share the same sequence of characters when ignoring case. Two characters are considered the same if both
             *       are strictly equal after applying the String.prototype.toUpperCase() function.
             *     </li>
             *   </ul>
             * @param string1 The first string to compare
             * @param string2 The second string to compare
             * @returns true if the Strings are equal, ignoring case; false otherwise
             */
            String.EqualsIgnoreCase = function (string1, string2) {
                var isString1Null = string1 == null;
                var isString2Null = string2 == null;
                var isString1Undefined = string1 == undefined;
                var isString2Undefined = string2 == undefined;
                if (isString1Null && isString2Null || isString1Undefined && isString2Undefined) {
                    return true;
                }
                if (isString1Null != isString2Null || isString1Undefined != isString2Undefined) {
                    return false;
                }
                return string1.toUpperCase() === string2.toUpperCase();
            };
            /**
             * Replaces [\r\n, \r, \n] or their respective HTML encoded versions [&#13;&#10;, &#13;, &#10;] with <br /> tags.
             *
             * @param text - The text to have the characters replaced.
             * @returns The text provided after performing the substitutions mentioned.
             */
            String.ReplaceLineBreaksWithBrTags = function (text) {
                return text.replace(/(?:\r\n|&#13;&#10;|\r|&#13;|\n|&#10;)/g, "<br />");
            };
            String.Empty = "";
            return String;
        })();
        ControlUtils.String = String;
    })(ControlUtils = MscrmCommon.ControlUtils || (MscrmCommon.ControlUtils = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var ThemingHelper = (function () {
        function ThemingHelper() {
        }
        /*
         * Creates a style tag inside the control's container, if not already present and injects CSS into the style tag.
         * Before using this method, make sure that the CSS you are about to inject is depending only info in the theming bag.
         * @param container The control's container.
         * @param css The CSS to inject.
         */
        ThemingHelper.injectStyle = function (container, css) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(container)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidContainerMessage);
            }
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(css)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssMessage);
            }
            var styleElements = container.getElementsByTagName("style");
            var styleTag = null;
            if (styleElements.length === 0) {
                styleTag = document.createElement("style");
                container.appendChild(styleTag);
            }
            else {
                styleTag = styleElements.item(0);
            }
            styleTag.innerHTML = css;
        };
        /*
         * Removes the style tags from a control's container.
         * @param container The control's container.
         */
        ThemingHelper.removeStyles = function (container) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(container)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidContainerMessage);
            }
            // the stylesCount must be saved since the length of the styles array changes dynamically after removing an element
            var styles = container.getElementsByTagName("style");
            var stylesCount = styles.length;
            for (var i = stylesCount - 1; i >= 0; i--) {
                container.removeChild(styles.item(i));
            }
        };
        /*
         * Retrieves the process non-selected color in hexadecimal RGB format, prepended with a hash.
         * @param theming The theming bag.
         * @param htmlEncode The encoding function used to HTML encode strings.
         * @return The process non-selected color in hexadecimal RGB format, prepended with a hash.
         */
        ThemingHelper.getProcessNonSelectedColor = function (theming) {
            return "#6F6F6F";
        };
        /*
         * Retrieves the global link color in hexadecimal RGB format, prepended with a hash.
         * @param theming The theming bag.
         * @param htmlEncode The encoding function used to HTML encode strings.
         * @return The process non-selected color in hexadecimal RGB format, prepended with a hash.
         */
        ThemingHelper.getGlobalLinkColor = function (theming) {
            return ThemingHelper.validateCssColor(theming.globallinkcolor);
        };
        /*
         * Retrieves the hover link color in hexadecimal RGB format, prepended with a hash.
         * @param theming The theming bag.
         * @param htmlEncode The encoding function used to HTML encode strings.
         * @return The process non-selected color in hexadecimal RGB format, prepended with a hash.
         */
        ThemingHelper.getHoverLinkColor = function (theming) {
            return ThemingHelper.validateCssColor(theming.hoverlinkeffect);
        };
        /*
         * Retrieves the process color in hexadecimal RGB format, prepended with a hash.
         * @param theming The theming bag.
         * @param htmlEncode The encoding function used to HTML encode strings.
         * @return The accent color in hexadecimal RGB format, prepended with a hash.
         */
        ThemingHelper.getProcessControlColor = function (theming) {
            return ThemingHelper.validateCssColor(theming.processcontrolcolor);
        };
        /* Retrieves the font family.
         * @param theming The theming bag.
         * @return The font family.
         */
        ThemingHelper.getFontFamily = function (theming) {
            return ThemingHelper.validateCssFontFamily(theming.fontfamily);
        };
        /* Retrieves the font color.
         * @param theming The theming bag.
         * @return The font color.
         */
        ThemingHelper.getFontColor = function (theming) {
            return ThemingHelper.validateCssColor(theming.fontcolor);
        };
        /* Retrieves the font size.
         * @param theming The theming bag.
         * @return The font size.
         */
        ThemingHelper.getFontSize = function (theming) {
            return ThemingHelper.validateCssSize(theming.fontsize);
        };
        /*
         * Checks that the color css value is valid. Throws otherwise.
         * @param value The value of the color.
         * @return The unaltered value if valid.
         * @remark The validity only ensures unallowed characters are not injected.
         */
        ThemingHelper.validateCssColor = function (value) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(value)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
            }
            var hexMatch = value.match(/^#[0-9a-fA-F]{6}$/);
            var rgbMatch = value.match(/^rgb\(\d{1,3}%?, ?\d{1,3}%?, ?\d{1,3}%?\)$/);
            var rgbaMatch = value.match(/^rgba\(\d{1,3}%?, ?\d{1,3}%?, ?\d{1,3}%?, ?[0-1]?.[0-9]\)$/);
            var hslMatch = value.match(/^hsl\(\d{1,3}, ?\d{1,3}%, ?\d{1,3}%\)$/);
            var hslaMatch = value.match(/^hsla\(\d{1,3}, ?\d{1,3}%, ?\d{1,3}%, ?[0-1]?.[0-9]\)$/);
            var nameMatch = value.match(/^[a-zA-Z]+$/);
            if (hexMatch && hexMatch.length === 1
                || rgbMatch && rgbMatch.length === 1
                || rgbaMatch && rgbaMatch.length === 1
                || hslMatch && hslMatch.length === 1
                || hslaMatch && hslaMatch.length === 1
                || nameMatch && nameMatch.length === 1) {
                return value;
            }
            MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
        };
        /*
         * Checks that the font family css value is valid. Throws otherwise.
         * @param value The value of the color.
         * @return The unaltered value if valid.
         * @remark The validity only ensures unallowed characters are not injected.
         */
        ThemingHelper.validateCssFontFamily = function (value) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(value)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
            }
            var fontMatch = value.match(/^[a-zA-Z\-\"\', ]+$/);
            if (!fontMatch || fontMatch.length !== 1) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
            }
            return value;
        };
        /*
         * Checks that the size css value is valid. Throws otherwise.
         * @param value The value of the color.
         * @return The unaltered value if valid.
         * @remark The validity only ensures unallowed characters are not injected.
         */
        ThemingHelper.validateCssSize = function (value) {
            if (MscrmCommon.ControlUtils.Object.isNullOrUndefined(value)) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
            }
            var sizeMatch = value.match(/^\d+[%a-z]+$/);
            if (!sizeMatch || sizeMatch.length !== 1) {
                MscrmCommon.ErrorHandling.ExceptionHandler.throwException(ThemingHelper.InvalidCssValueMessage);
            }
            return value;
        };
        ThemingHelper.InvalidContainerMessage = "The supplied container is null or undefined.";
        ThemingHelper.InvalidCssMessage = "The supplied CSS is null or undefined.";
        ThemingHelper.InvalidCssValueMessage = "The supplied CSS value is not valid.";
        // The class name for annotating the read mode of the control.
        ThemingHelper.ReadModeClassName = "readmode";
        // The class name for annotating the edit mode of the control.
        ThemingHelper.EditModeClassName = "editmode";
        return ThemingHelper;
    })();
    MscrmCommon.ThemingHelper = ThemingHelper;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
     * The full screen helper uses the HTML5 Fullscreen API to enable full screen rendering of HTML elements
     */
    var FullscreenHelper = (function () {
        function FullscreenHelper() {
        }
        Object.defineProperty(FullscreenHelper, "supportsFullscreenApi", {
            /**
             * Checks if a browser supports the HTML5 Fullscreen API.
             */
            get: function () {
                var apiTarget = document;
                return apiTarget.fullscreenEnabled ||
                    apiTarget.webkitFullscreenEnabled ||
                    apiTarget.mozFullScreenEnabled ||
                    apiTarget.msFullscreenEnabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FullscreenHelper, "fullscreenElement", {
            /**
             * Gets the current full screen element using the HTML5 Fullscreen API.
             */
            get: function () {
                var apiTarget = document;
                return apiTarget.fullscreenElement ||
                    apiTarget.webkitFullscreenElement ||
                    apiTarget.mozFullScreenElement ||
                    apiTarget.msFullscreenElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Requests an element to go full screen using the HTML5 Fullscreen API.
         * @param fullscreenTarget The element which to display full screen.
         */
        FullscreenHelper.requestFullscreen = function (fullscreenTarget) {
            if (fullscreenTarget.requestFullscreen) {
                fullscreenTarget.requestFullscreen();
            }
            else if (fullscreenTarget.webkitRequestFullscreen) {
                fullscreenTarget.webkitRequestFullscreen();
            }
            else if (fullscreenTarget.mozRequestFullScreen) {
                fullscreenTarget.mozRequestFullScreen();
            }
            else if (fullscreenTarget.msRequestFullscreen) {
                fullscreenTarget.msRequestFullscreen();
            }
        };
        /**
         * Requests an element to go full screen using styling.
         * @param fullscreenTarget The element which to display full screen.
         */
        FullscreenHelper.requestFullscreenUsingStyling = function (fullscreenTarget) {
            $(fullscreenTarget).css("width", "100vw");
            $(fullscreenTarget).css("height", "100vh");
            $(fullscreenTarget).css("overflow", "visible !important");
            $(fullscreenTarget).css("position", "fixed !important");
            $(fullscreenTarget).css("top", "0px");
            $(fullscreenTarget).css("left", "0px");
            $(fullscreenTarget).css("background-color", "#000000");
        };
        /**
         * Removes the element currently occupying the full screen from the full screen using the HTML5 Fullscreen API.
         */
        FullscreenHelper.exitFullscreen = function () {
            var apiTarget = document;
            if (apiTarget.exitFullscreen) {
                apiTarget.exitFullscreen();
            }
            else if (apiTarget.webkitExitFullscreen) {
                apiTarget.webkitExitFullscreen();
            }
            else if (apiTarget.mozCancelFullScreen) {
                apiTarget.mozCancelFullScreen();
            }
            else if (apiTarget.msExitFullscreen) {
                apiTarget.msExitFullscreen();
            }
        };
        /**
         * Removes an element from occupying the full screen using styling.
         * @param fullscreenTarget The element which to remove from the full screen.
         */
        FullscreenHelper.exitFullscreenUsingStyling = function (fullscreenTarget) {
            $(fullscreenTarget).css("width", "");
            $(fullscreenTarget).css("height", "");
            $(fullscreenTarget).css("overflow", "");
            $(fullscreenTarget).css("position", "");
            $(fullscreenTarget).css("top", "");
            $(fullscreenTarget).css("left", "");
            $(fullscreenTarget).css("background-color", "");
        };
        return FullscreenHelper;
    })();
    MscrmCommon.FullscreenHelper = FullscreenHelper;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
     * Current sort status of a data set column
     */
    var DataSetColumnSortStatus = (function () {
        function DataSetColumnSortStatus() {
        }
        return DataSetColumnSortStatus;
    })();
    MscrmCommon.DataSetColumnSortStatus = DataSetColumnSortStatus;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
    * An expression used to represent a filter condition.
    */
    var ConditionExpression = (function () {
        function ConditionExpression() {
        }
        return ConditionExpression;
    })();
    MscrmCommon.ConditionExpression = ConditionExpression;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
    * An expression used to represent a filter.
    */
    var FilterExpression = (function () {
        function FilterExpression() {
        }
        return FilterExpression;
    })();
    MscrmCommon.FilterExpression = FilterExpression;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var PrimitiveValue = (function () {
        function PrimitiveValue(value, dataType) {
            this.value = value;
            this.dataType = dataType;
        }
        return PrimitiveValue;
    })();
    MscrmCommon.PrimitiveValue = PrimitiveValue;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var Globalization;
    (function (Globalization) {
        'use strict';
        /**
        * Exposes type names used by the CRM infrastructure.
        */
        var CrmNumberType = (function () {
            function CrmNumberType() {
            }
            CrmNumberType.CrmDecimalTypeName = "decimal";
            CrmNumberType.CrmDoubleTypeName = "double";
            CrmNumberType.CrmIntegerTypeName = "integer";
            CrmNumberType.CrmMoneyTypeName = "money";
            return CrmNumberType;
        })();
        Globalization.CrmNumberType = CrmNumberType;
    })(Globalization = MscrmCommon.Globalization || (MscrmCommon.Globalization = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var Globalization;
    (function (Globalization) {
        'use strict';
        var ExceptionHandler = MscrmCommon.ErrorHandling.ExceptionHandler;
        /**
        * Number format pattern factory class. This class performs the mappings from .NET-compatible values to string number patterns.
        */
        var NumberPatternFactory = (function () {
            function NumberPatternFactory() {
                this.currencyPositivePatternArray = ["$n", "n$", "$ n", "n $"];
                this.currencyNegativePatternArray = ["($n)", "-$n", "$-n", "$n-", "(n$)", "-n$", "n-$", "n$-", "-n $", "-$ n", "n $-", "$ n-", "$ -n", "n- $", "($ n)", "(n $)"];
                this.percentPositivePatternArray = ["n %", "n%", "%n", "% n"];
                this.percentNegativePatternArray = ["-n %", "-n%", "-%n", "%-n", "%n-", "n-%", "n%-", "-% n", "n %-", "% n-", "% -n", "n- %"];
            }
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.currencypositivepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getCurrencyPositivePattern = function (patternValue) {
                return this.getPattern(this.currencyPositivePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency negative numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.currencynegativepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getCurrencyNegativePattern = function (patternValue) {
                return this.getPattern(this.currencyNegativePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.percentpositivepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getPercentPositivePattern = function (patternValue) {
                return this.getPattern(this.percentPositivePatternArray, patternValue);
            };
            /**
             * Returns the number format pattern having the specified value for currency positive numbers.
             * More info here: https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.percentnegativepattern(v=vs.110).aspx
             * @param patternValue The value of the number formatting pattern. See the documentation above for more info.
             */
            NumberPatternFactory.prototype.getPercentNegativePattern = function (patternValue) {
                return this.getPattern(this.percentNegativePatternArray, patternValue);
            };
            NumberPatternFactory.prototype.getPattern = function (patternArray, patternValue) {
                if (patternValue < 0 || patternValue >= patternArray.length) {
                    ExceptionHandler.throwException(MscrmCommon.ControlUtils.String.Format(NumberPatternFactory.NoSuchPatternError, patternValue));
                }
                return patternArray[patternValue];
            };
            NumberPatternFactory.NoSuchPatternError = "The number formatting pattern value that you specified does not exist: {0}.";
            return NumberPatternFactory;
        })();
        Globalization.NumberPatternFactory = NumberPatternFactory;
    })(Globalization = MscrmCommon.Globalization || (MscrmCommon.Globalization = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    var Globalization;
    (function (Globalization) {
        'use strict';
        /**
        * Wijmo-specific number format factory class. This class takes its data from .NET-compatible values and maps them to constructs recognized by the wijmo library.
        */
        var WijmoNumberFormatFactory = (function () {
            function WijmoNumberFormatFactory() {
            }
            /**
             * This function returns a number format construct recognized by the wijmo control toolkit framework.
             * @params numberFormatInfo The number format info received from the CRM infrastructure.
             * @params crmNumberType The CRM number type for which the formatting info should be prepared.
             * @params isPercent A flag indicating whether the number is a percent.
             * @params overriddenPrecision Optional parameter that overrides the precision in the number formatting info structure.
             */
            WijmoNumberFormatFactory.getWijmoNumberFormatStructure = function (numberFormatInfo, crmNumberType, isPercent, overriddenPrecision) {
                // Wijmo does not have separate constructs for decimal and group separators based on number types, so we need to detect this at runtime.
                var decimalSeparator = numberFormatInfo.NumberDecimalSeparator;
                var groupSeparator = numberFormatInfo.NumberGroupSeparator;
                if (crmNumberType.toLowerCase() == Globalization.CrmNumberType.CrmMoneyTypeName) {
                    decimalSeparator = numberFormatInfo.CurrencyDecimalSeparator;
                    groupSeparator = numberFormatInfo.CurrencyGroupSeparator;
                }
                if (isPercent) {
                    decimalSeparator = numberFormatInfo.PercentDecimalSeparator;
                    groupSeparator = numberFormatInfo.PercentGroupSeparator;
                }
                var patternFactory = new Globalization.NumberPatternFactory();
                var percentNegativePattern = patternFactory.getPercentNegativePattern(numberFormatInfo.PercentNegativePattern);
                var percentPositivePattern = patternFactory.getPercentPositivePattern(numberFormatInfo.PercentPositivePattern);
                var currencyNegativePattern = patternFactory.getCurrencyNegativePattern(numberFormatInfo.CurrencyNegativePattern);
                var currencyPositivePattern = patternFactory.getCurrencyPositivePattern(numberFormatInfo.CurrencyPositivePattern);
                return {
                    '.': WijmoNumberFormatFactory.validateSymbolLength(decimalSeparator, 1),
                    ',': WijmoNumberFormatFactory.validateSymbolLength(groupSeparator, 1),
                    percent: {
                        pattern: [percentNegativePattern, percentPositivePattern]
                    },
                    currency: {
                        decimals: !MscrmCommon.ControlUtils.Object.isNullOrUndefined(overriddenPrecision) ? overriddenPrecision : numberFormatInfo.CurrencyDecimalDigits,
                        symbol: WijmoNumberFormatFactory.validateSymbolLength(numberFormatInfo.CurrencySymbol, 6),
                        pattern: [currencyNegativePattern, currencyPositivePattern]
                    }
                };
            };
            /**
             * This function returns a .NET compatible format string for the wijmo controls.
             * @params numberFormatInfo The number format info received from the CRM infrastructure.
             * @params crmNumberType The CRM number type for which the formatting info should be prepared.
             * @params isPercent A flag indicating whether the number is a percent.
             * @params overriddenPrecision Optional parameter that overrides the precision in the number formatting info structure.
             */
            WijmoNumberFormatFactory.getNumberFormatString = function (numberFormatInfo, crmNumberType, isPercent, overriddenPrecision) {
                crmNumberType = crmNumberType.toLowerCase();
                if (isPercent) {
                    return "p" + (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(overriddenPrecision) ? overriddenPrecision.toString() : numberFormatInfo.PercentDecimalDigits.toString());
                }
                switch (crmNumberType) {
                    case Globalization.CrmNumberType.CrmIntegerTypeName:
                        return "n0";
                    case Globalization.CrmNumberType.CrmMoneyTypeName:
                        return "c";
                    default:
                        return "n" + (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(overriddenPrecision) ? overriddenPrecision.toString() : numberFormatInfo.NumberDecimalDigits.toString());
                }
            };
            WijmoNumberFormatFactory.validateSymbolLength = function (value, maxLength) {
                if (!MscrmCommon.ControlUtils.Object.isNullOrUndefined(value) && value.length > maxLength) {
                    MscrmCommon.ErrorHandling.ExceptionHandler.throwException(WijmoNumberFormatFactory.InvalidSymbolErrorMessage);
                }
                return value;
            };
            WijmoNumberFormatFactory.InvalidSymbolErrorMessage = "An invalid symbol has been provided by the number formatting information infrastructure.";
            return WijmoNumberFormatFactory;
        })();
        Globalization.WijmoNumberFormatFactory = WijmoNumberFormatFactory;
    })(Globalization = MscrmCommon.Globalization || (MscrmCommon.Globalization = {}));
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/**
 * Please read carefully and thoroughly when adding a new file in the CommonControl's CommonReferences.
 *
 * DO NOT reference control/library-specific .ts files in this file.
 * Each control project should be self-contained as far as references go.
 * ONLY add libraries and control files that you want in ALL controls.
 * Make sure to add internal project references to each project's PrivateReferences.ts file.
 */
/// <reference path="../shared/mscrm.d.ts" />
/// <reference path="../shared/mscrmcomponents.d.ts" />
/// <reference path="../typings/jquery.d.ts" />
/// <reference path="mscrm/formfactor.ts" />
/// <reference path="mscrm/imemode.ts" />
/// <reference path="mscrm/requiredlevel.ts" />
/// <reference path="errorhandling/errorcode.ts" />
/// <reference path="errorhandling/notificationhandler.ts" />
/// <reference path="errorhandling/exceptionhandler.ts" />
/// <reference path="mscrm/filteroperator.ts" />
/// <reference path="mscrm/conditionoperator.ts" />
/// <reference path="mscrm/dayofweek.ts" />
/// <reference path="mscrm/columnsortdirection.ts"/>
/// <reference path="mscrm/AttributeSourceType.ts"/>
/// <reference path="mscrm/DateTimeFieldBehavior.ts" />
/// <reference path="mscrm/UpdateEvents.ts" />
/// <reference path="attributeconstants.ts" />
/// <reference path="arrayquery.ts" />
/// <reference path="controlstate.ts" />
/// <reference path="control.ts" />
/// <reference path="fieldcontrolbase.ts" />
/// <reference path="eventconstants.ts" />
/// <reference path="eventguard.ts" />
/// <reference path="methodconstants.ts" />
/// <reference path="utils/controlguidgenerator.ts" />
/// <reference path="utils/enum.ts" />
/// <reference path="utils/event.ts" />
/// <reference path="utils/hittarget.ts" />
/// <reference path="utils/numericinterval.ts" />
/// <reference path="utils/wijmoglobalization.ts" />
/// <reference path="utils/object.ts" />
/// <reference path="utils/property.ts" />
/// <reference path="utils/string.ts" />
/// <reference path="theminghelper.ts" />
/// <reference path="fullscreenhelper.ts" />
/// <reference path="DataSetColumnSortStatus.ts"/>
/// <reference path="ConditionExpression.ts"/>
/// <reference path="FilterExpression.ts"/>
/// <reference path="PrimitiveValue.ts"/>
/// <reference path="globalization/crmnumbertype.ts" />
/// <reference path="globalization/numberpatternfactory.ts" />
/// <reference path="globalization/wijmonumberformatfactory.ts" /> 
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    var ArrayQuery = (function () {
        function ArrayQuery(data) {
            this.data = data;
        }
        ArrayQuery.prototype.select = function (selector) {
            var temp = [];
            for (var i = 0; i < this.data.length; i++) {
                var value = selector(this.data[i], i);
                temp.push(value);
            }
            return new ArrayQuery(temp);
        };
        ArrayQuery.prototype.transform = function (selector) {
            var temp = [];
            for (var i = 0; i < this.data.length; i++) {
                var item = selector(this.data[i], i);
                temp[item.key] = item.value;
            }
            return new ArrayQuery(temp);
        };
        ArrayQuery.prototype.each = function (delegate) {
            for (var i = 0; i < this.data.length; i++) {
                delegate(this.data[i], i);
            }
            return this;
        };
        ArrayQuery.prototype.where = function (selector) {
            var temp = [];
            for (var i = 0; i < this.data.length; i++) {
                if (selector(this.data[i])) {
                    temp.push(this.data[i]);
                }
            }
            return new ArrayQuery(temp);
        };
        ArrayQuery.prototype.firstOrDefault = function (selector) {
            var list = this.where(selector).items();
            if (list.length > 0) {
                return list[0];
            }
            return null;
        };
        ArrayQuery.prototype.contains = function (selector) {
            return this.firstOrDefault(selector) != null;
        };
        ArrayQuery.prototype.items = function () {
            return this.data;
        };
        return ArrayQuery;
    })();
    MscrmCommon.ArrayQuery = ArrayQuery;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var MscrmCommon;
(function (MscrmCommon) {
    'use strict';
    /**
        *Declear all valid modes
    */
    var DisplayMode = (function () {
        function DisplayMode() {
        }
        // UNKNOWN is the initial mode
        DisplayMode.UNKNOWN = "UNKNOWN";
        DisplayMode.READ = "READ";
        DisplayMode.EDIT = "EDIT";
        DisplayMode.EDITHINT = "EDITHINT";
        return DisplayMode;
    })();
    MscrmCommon.DisplayMode = DisplayMode;
    /**
     * Declear all mode switch eventNames
     */
    var ModeSwitchEventName = (function () {
        function ModeSwitchEventName() {
        }
        ModeSwitchEventName.fromReadToEdit = "FROM_READ_TO_EDIT";
        return ModeSwitchEventName;
    })();
    MscrmCommon.ModeSwitchEventName = ModeSwitchEventName;
    /**
     * Display Mode Manager
     */
    var DisplayModeManager = (function () {
        function DisplayModeManager(ins) {
            this.instance = ins;
        }
        DisplayModeManager.prototype.getMode = function () {
            return this.currentMode;
        };
        DisplayModeManager.prototype.setMode = function (newMode, params) {
            var oldMode = this.currentMode;
            if (oldMode == null) {
                oldMode = DisplayMode.UNKNOWN;
            }
            if (oldMode != newMode) {
                switch (newMode) {
                    case DisplayMode.EDIT:
                        switch (oldMode) {
                            case DisplayMode.READ:
                                this.instance.context.utils.fireEvent(ModeSwitchEventName.fromReadToEdit, params);
                                // Not just the event firing. We also needs to do something when control set from READ to EDIT
                                this.instance.context.mode.focus();
                                break;
                        }
                        break;
                }
                this.currentMode = newMode;
            }
        };
        return DisplayModeManager;
    })();
    MscrmCommon.DisplayModeManager = DisplayModeManager;
})(MscrmCommon || (MscrmCommon = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    /**
     * The error source, if known
     */
    (function (ErrorSource) {
        ErrorSource[ErrorSource["Unknown"] = 0] = "Unknown";
        ErrorSource[ErrorSource["Authentication"] = 1] = "Authentication";
        ErrorSource[ErrorSource["LocalStore"] = 2] = "LocalStore";
    })(Mscrm.ErrorSource || (Mscrm.ErrorSource = {}));
    var ErrorSource = Mscrm.ErrorSource;
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/// <reference path="../CommonReferences.ts" />
var Mscrm;
(function (Mscrm) {
    'use strict';
})(Mscrm || (Mscrm = {}));
