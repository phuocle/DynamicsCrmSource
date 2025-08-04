/// <reference path="references.ts" />
var Mscrm;
(function(Mscrm) {
    var ContextHelper = (function() {
        function ContextHelper() {
        }

        ContextHelper.createControl = function(props, control) {
            control.crmContext = ContextHelper.generateContext(props);
            return ReactUtils.createComponent(control);
        };
        ContextHelper.generateContext = function(props) {
            return {
                parameters: props
            };
        };
        ContextHelper.prototype.generateLookupContext = function(props) {
            return {
                parameters: props
            };
        };
        return ContextHelper;
    })();
    Mscrm.ContextHelper = ContextHelper;
    Mscrm.ActionCardData;
    Mscrm.ActionCardCommand;
    Mscrm.DateTimeUtility;
    Mscrm.ActionsToDismiss;
})(Mscrm || (Mscrm = {}));
/// <reference path="references.ts" />
var ReactUtils;
(function(ReactUtils) {
    function createComponent(spec) {
        return React.createFactory(React.createClass(extractMembers(spec)));
    }

    ReactUtils.createComponent = createComponent;

    function createMixin(mixin) {
        return extractMembers(mixin);
    }

    ReactUtils.createMixin = createMixin;

    function extractMembers(mixin) {
        var skipList = ['constructor', 'forceUpdate'];
        var indexableMixin = mixin;
        var members = {};
        for (var key in indexableMixin) {
            if (skipList.indexOf(key) === -1) {
                members[key] = indexableMixin[key];
            }
        }
        return members;
    }

    var ComponentBase = (function() {
        function ComponentBase() {
        }

        return ComponentBase;
    })();
    ReactUtils.ComponentBase = ComponentBase;
})(ReactUtils || (ReactUtils = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="references.ts"/> 
var MscrmControls;
(function(MscrmControls) {
    var CRMNow;
    (function(CRMNow) {
        var CardUtils;
        (function(CardUtils) {
            CardUtils.getResources;
            CardUtils.createPerformanceStopwatch;
            CardUtils.createPerformanceMarker;
            CardUtils.isGetStartedClicked = false;
            CardUtils.userUtcOffset;
            CardUtils.ccfContext;

            function checkWhetherGroupPresent(data) {
                var hasGroup = false;
                for (var i in data) {
                    if (data[i].length > 1) {
                        hasGroup = true;
                    }
                }
                return hasGroup;
            }

            CardUtils.checkWhetherGroupPresent = checkWhetherGroupPresent;

            function sortDataSource(source) {
                var keys = [];
                for (var key in source) {
                    keys[keys.length] = key;
                }
                var values = [];
                for (var i = 0; i < keys.length; i++) {
                    values[values.length] = source[keys[i]];
                }
                var sortedValues = values.sort(function(a, b) {
                    return a.length - b.length;
                });
                return sortedValues;
            }

            CardUtils.sortDataSource = sortDataSource;

            function isCCFMode() {
                var win = window;
                return win && win['MscrmComponents'] != undefined && win['MscrmComponents'] != null;
            }

            CardUtils.isCCFMode = isCCFMode;

            function getEntityImage(entityName, entityId) {
                if (Xrm.Internal.messages) {
                    var fetchXML = "<fetch mapping='logical'> <entity name='" +
                        entityName +
                        "'> <attribute name='entityimage_url' /> <filter> <condition attribute='" +
                        entityName +
                        'id' +
                        "' operator='eq' value='" +
                        entityId +
                        "' /> </filter> </entity> </fetch>";
                    return Xrm.Internal.messages.retrieveMultiple(fetchXML);
                } else {
                    return null;
                }
            }

            CardUtils.getEntityImage = getEntityImage;

            function getCardTypeEntities() {
                if (Xrm.Internal.messages) {
                    var fetchXML =
                        "<fetch mapping='logical'> <entity name='cardtype'> <attribute name='cardtypeid' /><attribute name='cardname' />	<attribute name='softtitle' /><attribute name='hassnoozedismiss' /><attribute name='grouptype' /><attribute name='summarytext' /><attribute name='actions' /> </entity> </fetch>";
                    return Xrm.Internal.messages.retrieveMultiple(fetchXML);
                } else {
                    return null;
                }
            }

            CardUtils.getCardTypeEntities = getCardTypeEntities;

            function getEntityReference(entityLogicalName, entityId) {
                return new Xrm.Objects.EntityReference(entityLogicalName,
                    new Microsoft.Crm.Client.Core.Framework.Guid(entityId));
            }

            CardUtils.getEntityReference = getEntityReference;

            function getSnoozeTimeStr(cardData) {
                var snoozeString;
                if (cardData.priority >= 1000) {
                    snoozeString = CardUtils.getResources("ActionCard.CFC.Common.Snooze5m");
                } else if (cardData.cardName.indexOf("AGENDA") != -1) {
                    snoozeString = CardUtils.getResources("ActionCard.CFC.Common.Snooze15m");
                } else {
                    snoozeString = CardUtils.getResources("ActionCard.CFC.Common.Snooze12h");
                }
                return snoozeString;
            }

            CardUtils.getSnoozeTimeStr = getSnoozeTimeStr;

            function formatStringArray(format, array) {
                var returnValue = format;
                if (array != undefined && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        var actualValue = typeof (array[i]) == "undefined" || array[i] == null
                            ? ""
                            : array[i].toString();
                        returnValue = returnValue.replace(new RegExp("\\{" + i + "\\}", 'g'), actualValue);
                    }
                }
                return returnValue;
            }

            CardUtils.formatStringArray = formatStringArray;

            function getLocaleTime(utcTime) {
                if (utcTime != undefined && utcTime != "" && moment(utcTime, moment.ISO_8601).isValid()) {
                    var format = CardUtils.ccfContext.formatting.formatDateLong(new Date(utcTime));
                    return format.substr(format.indexOf(",") + 1).trim();
                }
            }

            CardUtils.getLocaleTime = getLocaleTime;

            function getUserTime(utcTime, format) {
                if (utcTime != undefined && utcTime != "") {
                    if (format != undefined && format != "") {
                        return moment(utcTime).utcOffset(this.userUtcOffset).format(format);
                    } else {
                        return moment(utcTime).utcOffset(this.userUtcOffset);
                    }
                }
            }

            CardUtils.getUserTime = getUserTime;

            function htmlDecoder(htmlString) {
                var decodedHtml = htmlString.replace(/&quot;/g, '\"');
                decodedHtml = decodedHtml.replace(/&apos;/g, '\'');
                decodedHtml = decodedHtml.replace(/&lt;/g, '<');
                decodedHtml = decodedHtml.replace(/&gt;/g, '>');
                decodedHtml = decodedHtml.replace(/&amp;/g, '&');
                return decodedHtml;
            }

            CardUtils.htmlDecoder = htmlDecoder;

            function defaultCardIcon(cardName) {
                var defaultIcon = "generalCard-leftblock CRMMDL2 ";
                switch (cardName) {
                case "CLOSEDATECOMINGSOON":
                {
                    defaultIcon += "icon-closeDate";
                    return defaultIcon;
                }
                case "TOP_RECORD":
                {
                    defaultIcon += "icon-top-record";
                    return defaultIcon;
                }
                case "TOP_PEOPLE":
                {
                    defaultIcon += "icon-top-people";
                    return defaultIcon;
                }
                case "NEARBY_CUSTOMERS":
                {
                    defaultIcon += "icon-nearby";
                    return defaultIcon;
                }
                case "AGENDA:ACTIVITY_EMAIL":
                {
                    defaultIcon += "icon-email";
                    return defaultIcon;
                }
                case "RELEVANT_NEWS":
                {
                    defaultIcon += "icon-relevant-news";
                    return defaultIcon;
                }
                case "STOCK_ACTIVITY":
                {
                    defaultIcon += "icon-stock";
                    return defaultIcon;
                }
                case "UPCOMING_MEETING":
                {
                    defaultIcon += "icon-upcoming-meeting";
                    return defaultIcon;
                }
                case "RECENTMEETING":
                {
                    defaultIcon += "icon-recent-meeting";
                    return defaultIcon;
                }
                case "EMAILOPENED:EMAILOPEN":
                case "REMINDERWITHOUTCALL":
                {
                    defaultIcon += "icon-email-open";
                    return defaultIcon;
                }
                case "REMINDERWITHCALL":
                {
                    defaultIcon += "icon-email-reminder";
                    return defaultIcon;
                }
                case "ATTENDEE":
                {
                    defaultIcon += "icon-attendee";
                    return defaultIcon;
                }
                case "account":
                {
                    defaultIcon += "icon-account";
                    return defaultIcon;
                }
                case "contact":
                {
                    defaultIcon += "icon-contact";
                    return defaultIcon;
                }
                case "appointment":
                {
                    defaultIcon += "icon-appointment";
                    return defaultIcon;
                }
                case "task":
                {
                    defaultIcon += "icon-task";
                    return defaultIcon;
                }
                case "quote":
                {
                    defaultIcon += "icon-quote";
                    return defaultIcon;
                }
                case "opportunity":
                {
                    defaultIcon += "icon-entity-opportunity";
                    return defaultIcon;
                }
                case "invoice":
                {
                    defaultIcon += "icon-invoice";
                    return defaultIcon;
                }
                case "dashboard":
                {
                    defaultIcon += "icon-entity-dashboard";
                    return defaultIcon;
                }
                case "lead":
                {
                    defaultIcon += "icon-entity-lead";
                    return defaultIcon;
                }
                case "LEAD":
                case "LEADDETECTION":
                {
                    defaultIcon += "icon-lead";
                    return defaultIcon;
                }
                case "OPPORTUNITY":
                case "NOACTIVITYWITHOPPORTUNITY":
                {
                    defaultIcon += "icon-opportunity";
                    return defaultIcon;
                }
                case "EMAIL":
                {
                    defaultIcon += "icon-email";
                    return defaultIcon;
                }
                case "CASE":
                case "NOACTIVITYWITHCASE":
                {
                    defaultIcon += "icon-case";
                    return defaultIcon;
                }
                case "COMPETITORMENTIONED":
                {
                    defaultIcon += "icon-competitor-mentioned";
                    return defaultIcon;
                }
                case "MEETING_REQUEST":
                {
                    defaultIcon += "icon-meeting-request";
                    return defaultIcon;
                }
                case "STAKEHOLDER":
                {
                    defaultIcon += "icon-Stakeholder";
                    return defaultIcon;
                }
                case "MISSEDCLOSEDATE":
                {
                    defaultIcon += "icon-missed-closedate";
                    return defaultIcon;
                }
                case "ISSUEDETECTION":
                {
                    defaultIcon += "icon-issue-detection";
                    return defaultIcon;
                }
                case "DEFAULT_EXCHANGE":
                {
                    defaultIcon += "icon-default-exchange";
                    return defaultIcon;
                }
                case "NOACTIVITYWITHACCOUNT":
                case "NOACTIVITYWITHLEAD":
                case "NOACTIVITYWITHCONTACT ":
                {
                    defaultIcon += "icon-no-activity";
                    return defaultIcon;
                }
                case "YES_NO":
                {
                    defaultIcon += "icon-yes-no";
                    return defaultIcon;
                }
                case "MISSEDEMAIL":
                {
                    defaultIcon += "icon-missed-email";
                    return defaultIcon;
                }
                case "AGENDA:ACTIVITY_SERVICEAPPOINTMENT":
                {
                    defaultIcon += "icon-activity-serviceappointment";
                    return defaultIcon;
                }
                case "AGENDA:ACTIVITY_FAX":
                {
                    defaultIcon += "icon-activity-fax";
                    return defaultIcon;
                }
                case "REGARDING":
                {
                    defaultIcon += "icon-regarding";
                    return defaultIcon;
                }
                case "SEND_CONTENT_REQUEST":
                {
                    defaultIcon += "icon-send-content-request";
                    return defaultIcon;
                }
                case "EMAILOPENED:BESTTIMETOCALL":
                {
                    defaultIcon += "icon-best-time-to-call";
                    return defaultIcon;
                }
                case "AGENDA:ACTIVITY_LETTER":
                {
                    defaultIcon += "icon-activity-letter";
                    return defaultIcon;
                }
                case "UPCOMING_FLIGHT":
                {
                    defaultIcon += "icon-flight";
                    return defaultIcon;
                }
                case "AGENDA:ACTIVITY_MEETING":
                case "AGENDA:ACTIVITY_PHONE":
                case "AGENDA:ACTIVITY_TASK":
                default:
                {
                    defaultIcon += "icon-due";
                    return defaultIcon;
                }
                }
            }

            CardUtils.defaultCardIcon = defaultCardIcon;

            function collapseLandingPage() {
                var landingPageInstanse = Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance();
                if (landingPageInstanse) {
                    var landingPageViewModel = landingPageInstanse.get_landingPageViewModel();
                    if (landingPageViewModel)
                        landingPageViewModel.collapse(false);
                }
            }

            CardUtils.collapseLandingPage = collapseLandingPage;

            function isMOCAOffline() {
                var isOffline = false;
                if (Xrm.Page.context && Xrm.Page.context.client && Xrm.Page.context.client.getClientState) {
                    isOffline = Xrm.Page.context.client.getClientState() === 'Offline';
                }
                return isOffline;
            }

            CardUtils.isMOCAOffline = isMOCAOffline;
        })(CardUtils = CRMNow.CardUtils || (CRMNow.CardUtils = {}));
    })(CRMNow = MscrmControls.CRMNow || (MscrmControls.CRMNow = {}));
})(MscrmControls || (MscrmControls = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="references.ts"/> 
var MscrmControls;
(function(MscrmControls) {
    var CRMNow;
    (function(CRMNow) {
        var ActionCommandsManager = (function() {
            function ActionCommandsManager() {
                this._context = {};
                this.commandFetchCompleted = false;
                this.callbackQueue = [];
                this.fetchIsInprogress = false;
                this.fetchCounter = 0;
                this.actionCommands = {};
            }

            ActionCommandsManager.init = function(context) {
                ActionCommandsManager._instance.actionCommands = {};
                ActionCommandsManager._instance._context = context;
                return ActionCommandsManager._instance;
            };
            ActionCommandsManager.getInstance = function() {
                return ActionCommandsManager._instance;
            };
            ActionCommandsManager.prototype.fetchCommands = function(index, callback) {
                var _this = this;
                var commands;
                var self = this;
                if (this.fetchIsInprogress && index == 0) {
                    this.callbackQueue.push(callback);
                } else {
                    this.commandFetchCompleted = false;
                    this.fetchIsInprogress = true;
                    var keys = Object.keys(this._context.parameters.SubGrid.records);
                    if (keys.length > 0) {
                        var curRecord = this._context.parameters.SubGrid.records[keys[index]];
                        if (curRecord) {
                            this._context.parameters.SubGrid.setSelectedRecordId(curRecord["actioncardid"].toString());
                            this._context.parameters.SubGrid.commanding
                                .getRecordCommands(curRecord["actioncardid"].toString()).then(function(data) {
                                        _this.actionCommands[curRecord["actioncardid"].toString()] = data;
                                        if (keys.length - 1 > index) {
                                            self.fetchCommands(index + 1, callback);
                                        } else {
                                            self.fetchActionCommandsCompleted(callback);
                                        }
                                    },
                                    function(e) {
                                        if (keys.length - 1 > index) {
                                            self.fetchCommands(index + 1, callback);
                                        }
                                    });
                        } else {
                            if (keys.length - 1 > index) {
                                self.fetchCommands(index + 1, callback);
                            }
                        }
                    }
                }
            };
            ActionCommandsManager.prototype.getCommandByCardId = function(cardId) {
                if (this.actionCommands)
                    return this.actionCommands[cardId];
                else
                    return [];
            };
            ActionCommandsManager.prototype.fetchActionCommandsCompleted = function(callback) {
                if (this.callbackQueue.length > 0) {
                    this.fetchIsInprogress = false;
                    this.actionCommands = {};
                    var cb = this.callbackQueue[this.callbackQueue.length - 1];
                    this.callbackQueue = [];
                    this.fetchCommands(0, cb);
                } else {
                    this.commandFetchCompleted = true;
                    this.fetchIsInprogress = false;
                    this.callbackQueue = [];
                    callback();
                }
            };
            ActionCommandsManager.prototype.checkCommandAvailable = function(cardId, callback) {
                var commands;
                var self = this;
                var curRecord = this._context.parameters.SubGrid.records[cardId];
                if (curRecord) {
                    this._context.parameters.SubGrid.setSelectedRecordId(curRecord["actioncardid"].toString());
                    this._context.parameters.SubGrid.commanding.getRecordCommands(curRecord["actioncardid"].toString())
                        .then(function(data) {
                                callback(true);
                            },
                            function(e) {
                                if (self.fetchCounter < 3) {
                                    self.fetchCounter++;
                                    window.setTimeout(function() {
                                            self.checkCommandAvailable(cardId, callback);
                                        },
                                        600);
                                } else
                                    callback(false);
                            });
                }
            };
            ActionCommandsManager.prototype.fetchCardCommand = function(cardData, callback) {
                var commands;
                var self = this;
                var curRecord = this._context.parameters.SubGrid.records[cardData.cardId];
                if (curRecord) {
                    this._context.parameters.SubGrid.setSelectedRecordId(curRecord["actioncardid"].toString());
                    this._context.parameters.SubGrid.commanding.getRecordCommands(curRecord["actioncardid"].toString())
                        .then(function(data) {
                                callback(data, cardData);
                            },
                            function(e) {
                                console.error(e);
                            });
                }
            };
            ActionCommandsManager._instance = new ActionCommandsManager();
            return ActionCommandsManager;
        })();
        CRMNow.ActionCommandsManager = ActionCommandsManager;
    })(CRMNow = MscrmControls.CRMNow || (MscrmControls.CRMNow = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="references.ts" />
var __extends = (this && this.__extends) ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d; }

        __.prototype = b.prototype;
        d.prototype = new __();
    };
var Mscrm;
(function(Mscrm) {
    var Controls;
    (function(Controls) {
        var VDOM;
        (function(VDOM) {
            function span(context, properties, children) {
                return React.DOM.span(properties, children);
            }

            VDOM.span = span;

            function div(context, properties, children) {
                return React.DOM.div(properties, children);
            }

            VDOM.div = div;

            function anchor(context, properties, children) {
                return React.DOM.a(properties, children);
            }

            VDOM.anchor = anchor;

            function button(context, properties, children) {
                return React.DOM.button(properties, children);
            }

            VDOM.button = button;

            function input(context, properties, children) {
                return React.DOM.input(properties, children);
            }

            VDOM.input = input;

            function label(context, properties, children) {
                return React.DOM.label(properties, children);
            }

            VDOM.label = label;

            function option(context, properties, children) {
                return React.DOM.option(properties, children);
            }

            VDOM.option = option;

            function select(context, properties, children) {
                return React.DOM.select(properties, children);
            }

            VDOM.select = select;

            function table(context, properties, children) {
                return React.DOM.table(properties, children);
            }

            VDOM.table = table;

            function tr(context, properties, children) {
                return React.DOM.tr(properties, children);
            }

            VDOM.tr = tr;

            function td(context, properties, children) {
                return React.DOM.td(properties, children);
            }

            VDOM.td = td;

            function img(context, properties, children) {
                return React.DOM.img(properties, children);
            }

            VDOM.img = img;

            function ul(context, properties, children) {
                return React.DOM.ul(properties, children);
            }

            VDOM.ul = ul;

            function li(context, properties, children) {
                return React.DOM.li(properties, children);
            }

            VDOM.li = li;

            function br(context, properties, children) {
                return React.DOM.br(properties, children);
            }

            VDOM.br = br;

            function hr(context, properties, children) {
                return React.DOM.hr(properties, children);
            }

            VDOM.hr = hr;
        })(VDOM = Controls.VDOM || (Controls.VDOM = {}));
        var VirtualComponentBase = (function(_super) {
            __extends(VirtualComponentBase, _super);

            function VirtualComponentBase() {
                _super.apply(this, arguments);
                this.observables = [];
            }

            VirtualComponentBase.prototype.render = function() {
                return this.onRender();
            };
            VirtualComponentBase.prototype.getContext = function() {
                return this.crmContext;
            };
            VirtualComponentBase.prototype.createObservable = function(event) {
                if (this.observables == null) {
                    var evt = this.observables[event];
                    if (typeof evt === "undefined") {
                        this.observables[event] = new Rx.Subject();
                    }
                }
                return this.observables[event];
            };
            VirtualComponentBase.prototype.onRender = function() {
            };
            return VirtualComponentBase;
        })(ReactUtils.ComponentBase);
        Controls.VirtualComponentBase = VirtualComponentBase;
    })(Controls = Mscrm.Controls || (Mscrm.Controls = {}));
})(Mscrm || (Mscrm = {}));
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="references.ts"/> 
/**
* @license Copyright (c) Microsoft Corporation.  All rights reserved.
*/
/// <reference path="references.ts"/> 
/// <reference path="../references.ts" />
var MscrmControls;
(function(MscrmControls) {
    var CRMNow;
    (function(CRMNow) {
        var GenericCardView = (function(_super) {
            __extends(GenericCardView, _super);

            function GenericCardView() {
                _super.call(this);
                this.mouseMoved = false;
                this.timerId = 0;
                this.inSwipe = false;
                this.menuItemsString = ["ActionCard.CFC.Common.Snooze", "ActionCard.CFC.Common.Dismiss"];
                this.showMenu = false;
                this.displayName = "GenericCard";
            }

            GenericCardView.prototype.getInitialState = function() {
                return {};
            };
            GenericCardView.prototype.handleMenuBottonClick = function(event) {
                if (this.showMenu) {
                    this.showMenu = false;
                    if (this.refs['menu']) {
                        var ele = $(this.refs['menu']);
                        $(ele).css({ "display": "none" });
                    }
                } else {
                    this.hideMenu(event);
                    this.showMenu = true;
                    if (this.refs['menu']) {
                        var ele = $(this.refs['menu']);
                        $(ele).css({ "display": "block" });
                    }
                }
                this.changeOptionBtnColor();
            };
            GenericCardView.prototype.changeOptionBtnColor = function() {
                if (this.refs['optionBtn']) {
                    var btn = $(this.refs['optionBtn']);
                    var bColor = this.showMenu ? "#BFDFFF" : "transparent";
                    $(btn).css({ "background-color": bColor });
                }
            };
            GenericCardView.prototype.handleMenuItemClick = function(selectedIndex, event) {
                switch (selectedIndex) {
                case 0:
                    this.handleSnooze(this);
                    break;
                case 1:
                    this.handleDismiss(this);
                    break;
                case 2:
                    break;
                }
            };
            GenericCardView.prototype.renderMenu = function() {
                var _this = this;
                var menuItems = this.menuItemsString.map(function(row, index) {
                    var content = Mscrm.Controls.VDOM.span(_this.props.cardData,
                        {
                            key: "menuContent" + index,
                            className: "menuContent"
                        },
                        CRMNow.CardUtils.getResources(row));
                    var item = Mscrm.Controls.VDOM.div(_this.props.cardData,
                        {
                            key: "menuItem" + index,
                            className: "menuItem",
                            onClick: _this.handleMenuItemClick.bind(null, index)
                        },
                        [content]);
                    return item;
                });
                var menu = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        key: "menu",
                        className: "menu",
                        ref: "menu",
                        onBlur: this.hideMenu.bind(null, this)
                    },
                    menuItems);
                var that = this;
                $(document).mouseup(function(e) {
                    if (that.refs['menu']) {
                        var menuEle = $(that.refs['menu']);
                        var optionBtn = $(that.refs['optionBtn']);
                        if (!menuEle.is(e.target) && !optionBtn.is(e.target) && menuEle.has(e.target).length === 0) {
                            that.showMenu = false;
                            that.hideMenu(e);
                        }
                    }
                });
                return menu;
            };
            GenericCardView.prototype.hideMenu = function(event) {
                this.changeOptionBtnColor();
                $(".menu").css({ "display": "none" });
            };
            GenericCardView.prototype.handleDismiss = function(self) {
                if (!CRMNow.CardUtils.isMOCAOffline()) {
                    if (this.props.callbackContainer)
                        this.props.callbackContainer("dismiss",
                            { "cardId": self.props.cardData.cardId, "isGroupSwipe": false });
                } else {
                    this.resetCard();
                    var offlineText = CRMNow.CardUtils.getResources('Error_Message_Generic_Mobile_Client_Offline');
                    Xrm.Utility.alertDialog(offlineText, null);
                }
            };
            GenericCardView.prototype.handleSnooze = function(self) {
                if (!CRMNow.CardUtils.isMOCAOffline()) {
                    if (this.props.callbackContainer)
                        this.props.callbackContainer("snooze",
                            { "cardId": self.props.cardData.cardId, "isGroupSwipe": false });
                } else {
                    this.resetCard();
                    var offlineText = CRMNow.CardUtils.getResources('Error_Message_Generic_Mobile_Client_Offline');
                    Xrm.Utility.alertDialog(offlineText, null);
                }
            };
            GenericCardView.prototype.onCardClick = function(event) {
                var data;
                var action;
                if (!this.mouseMoved) {
                    if (this.props.canShowDetailsView) {
                        action = "CardView";
                        data = {
                            "cardId": this.props.cardData.cardId ? this.props.cardData.cardId : "",
                            "data": this.props.cardData
                        };
                    } else if (!this.props.canShowDetailsView) {
                        if (this.props.cardData.data && this.props.cardData.data.mailweblink) {
                            action = "Navigation";
                            data = {
                                "mailweblink": this.props.cardData.data.mailweblink,
                                "cardData": this.props.cardData
                            };
                        } else {
                            if (this.props.regardingObject) {
                                if (this.props.regardingObject.LogicalName && this.props.regardingObject.Id) {
                                    action = "Navigation";
                                    data = {
                                        "entityName": this.props.regardingObject.LogicalName,
                                        "guid": this.props.regardingObject.Id.toString(),
                                        "cardData": this.props.cardData
                                    };
                                }
                            } else if (this.props.cardData.data &&
                                this.props.cardData.data != null &&
                                this.props.cardData.data.cardContextDetails &&
                                this.props.cardData.data.cardContextDetails.length > 0) {
                                var contextItem = this.props.cardData.data.cardContextDetails[0];
                                var contextObject = contextItem ? contextItem.contextObject : "";
                                if (contextObject &&
                                    contextObject.guid &&
                                    contextObject.guid != null &&
                                    contextObject.entityName &&
                                    contextObject.entityName != null) {
                                    action = "Navigation";
                                    data = {
                                        "entityName": contextObject.entityName,
                                        "guid": contextObject.guid,
                                        "cardData": this.props.cardData
                                    };
                                }
                            }
                        }
                    }
                    if (this.props.callbackContainer && action != undefined && action != null && data && data != null) {
                        this.props.callbackContainer(action, data);
                    }
                }
            };
            GenericCardView.prototype.handleActionClick = function(event, srcElememt, data) {
                if (this.props.callbackContainer) {
                    var actionData = $(this.refs[srcElememt]).attr('content');
                    this.props.callbackContainer("ActionClick",
                        { "actionData": actionData, "cardId": this.props.cardData.cardId });
                }
            };
            GenericCardView.prototype.componentDidMount = function() {
                $(this.refs["actionContainer1"]).attr('content', '');
                $(this.refs["actionContainer2"]).attr('content', '');
                this.commandManager = CRMNow.ActionCommandsManager.getInstance();
                this.fetchActionCommands();
            };
            GenericCardView.prototype.fetchActionCommands = function() {
                var _this = this;
                if (this.commandManager.commandFetchCompleted) {
                    var commands = this.getActionCommands(this.props.cardData);
                    if (commands && commands.length > 0)
                        this.updateCardActions(commands, this.props.cardData);
                } else {
                    window.setTimeout(function() {
                            _this.fetchActionCommands();
                        },
                        600);
                }
            };
            GenericCardView.prototype.getActionCommands = function(cardData) {
                var commands = CRMNow.ActionCommandsManager.getInstance().getCommandByCardId(cardData.cardId);
                if (commands && commands.length > 0) {
                    return commands;
                }
            };
            GenericCardView.prototype.updateCardActions = function(commands, cardData) {
                var container = this.refs["genericCard"];
                var actionData = [];
                var actions = $(container).find("[data-action-cardId=" + cardData.cardId + "]");
                actionData = this.getActionData(cardData);
                var count = [0, 1];
                if (actionData && actionData.length > 0) {
                    for (var i in count) {
                        if (actionData[count[i]] && actions[count[i]]) {
                            $(actions[count[i]]).text(actionData[count[i]].label);
                            $(actions[count[i]]).data('command', actionData[count[i]].label);
                            $(actions[count[i]]).attr('content', actionData[count[i]].command);
                        }
                    }
                }
            };
            GenericCardView.prototype.getActionData = function(card) {
                var cardActions;
                var actionData = [];
                var container = this.refs["genericCard"];
                var actions = $(container).find("[data-action-cardId=" + card.cardId + "]");
                var commands = CRMNow.ActionCommandsManager.getInstance().getCommandByCardId(card.cardId);
                var canShowEmail = true;
                var userAgent = CRMNow.CardUtils.ccfContext.client.userAgent;
                if (userAgent != undefined && userAgent != null) {
                    canShowEmail = userAgent.isWin || userAgent.isWinPhone10 ? false : true;
                }
                if (card.actions && commands && commands.length > 0) {
                    var filteredCommands = _.filter(commands,
                        function(cmd) {
                            return ((cmd.command != "Mscrm.HomepageGrid.actioncard.DismissCommand" &&
                                    cmd.command != "Mscrm.HomepageGrid.actioncard.SnoozeCommand") &&
                                ((cmd.command == "Mscrm.Modern.EmailAttendeesCommand" ||
                                        cmd.command == "Mscrm.Modern.SendEmailCommand")
                                    ? canShowEmail
                                    : true));
                        });
                    if (card.actions.Mobile)
                        cardActions = card.actions.Mobile.Actions;
                    else if (card.actions.WebClient)
                        cardActions = card.actions.WebClient.Actions;
                    if (cardActions) {
                        var actionCount = 0;
                        $.each(cardActions,
                            function(label, command) {
                                if (actionCount < 2) {
                                    var curcommand = _.find(filteredCommands,
                                        function(cmd) {
                                            return cmd.command == command;
                                        });
                                    if (curcommand) {
                                        actionData.push(curcommand);
                                        actionCount++;
                                    }
                                }
                            });
                        return actionData;
                    }
                }
                return actionData;
            };
            GenericCardView.prototype.componentWillMount = function() {
                var _this = this;
                this.swipeStartObserver = new Rx.Subject();
                this.swipeEndObserver = new Rx.Subject();
                this.elementMove = new Rx.Subject();
                var startX;
                var startY;
                var cardBoundary;
                this.swipeStartObserver.subscribe(function(mdEvent) {
                    var swipeEvent = mdEvent;
                    _this.mouseDown = true;
                    _this.mouseMoved = false;
                    cardBoundary = swipeEvent.currentTarget.getBoundingClientRect();
                    if (swipeEvent.type == "mousedown") {
                        startX = swipeEvent.clientX;
                        startY = swipeEvent.clientY;
                    } else if (swipeEvent.type == "touchstart") {
                        startX = swipeEvent.changedTouches[0].clientX;
                        startY = swipeEvent.changedTouches[0].clientY;
                    }
                });
                this.elementMove.subscribe(function(mmEvent) {
                    var currentPosY;
                    var currentPosX;
                    var swipeEvent = mmEvent;
                    var card = _this;
                    var canPerformOp = true;
                    if (_this.mouseDown && cardBoundary && cardBoundary.width) {
                        if (_this.refs['genericCard']) {
                            var swipedElement = _this.refs['genericCard'];
                            var swipedCard = _this.refs["swipe-content"];
                            if (swipeEvent.type == "mousemove") {
                                currentPosX = swipeEvent.clientX;
                                currentPosY = swipeEvent.clientY;
                            } else if (swipeEvent.type == "touchmove") {
                                currentPosX = swipeEvent.changedTouches[0].clientX;
                                currentPosY = swipeEvent.changedTouches[0].clientY;
                            }
                            if ((startX - currentPosX) <= 0) {
                                if (!Boolean(_this.props.cardData.hasSnoozeDismiss)) {
                                    canPerformOp = false;
                                }
                            } else
                                canPerformOp = true;
                            if (!_this.inSwipe && canPerformOp) {
                                var swipediffX = currentPosX - startX;
                                var swipediffY = currentPosY - startY;
                                if (Math.abs(swipediffX) > cardBoundary.width / 2) {
                                    swipedCard.style.opacity = "0.5";
                                } else {
                                    swipedCard.style.opacity = "1";
                                }
                                if (swipediffX != 0)
                                    _this.mouseMoved = true;
                                swipedElement.style.transform = 'translate3d(' + swipediffX + 'px,0,0)';
                                swipedElement.style.webkitTransform = 'translate3d(' + swipediffX + 'px,0,0)';
                                if (!(currentPosX > cardBoundary.left && currentPosX < cardBoundary.right) ||
                                    !(currentPosY > cardBoundary.top && currentPosY < cardBoundary.bottom)) {
                                    _this.resetCard();
                                }
                            }
                        }
                    }
                });
                this.swipeEndObserver.subscribe(function(muEvent) {
                    var endPosX;
                    var endPosY;
                    var swipeEvent = muEvent;
                    var card = _this;
                    var swipedElement = swipeEvent.currentTarget;
                    if (swipeEvent.type == "mouseup") {
                        endPosX = swipeEvent.clientX;
                        endPosY = swipeEvent.clientY;
                    } else if (swipeEvent.type == "touchend") {
                        endPosX = swipeEvent.changedTouches[0].clientX;
                        endPosY = swipeEvent.changedTouches[0].clientY;
                    }
                    _this.mouseDown = false;
                    if (cardBoundary && cardBoundary.width) {
                        if (Math.abs(startX - endPosX) / cardBoundary.width * 100 < 30 &&
                            Math.abs(startX - endPosX) != 0 ||
                            !(endPosY > cardBoundary.top && endPosY < cardBoundary.bottom)) {
                            _this.resetCard();
                        } else if ((endPosX - startX) / cardBoundary.width * 100 > 30) {
                            if ((cardBoundary.right >= endPosX) && Boolean(_this.props.cardData.hasSnoozeDismiss)) {
                                var snoozeStateInfo = _this.refs["snooze-state"];
                                var snoozeCard = _this.refs["snooze-container"];
                                swipedElement.style.transform = 'translate3d(' + cardBoundary.width + 'px,0,0)';
                                swipedElement.style.webkitTransform = 'translate3d(' + cardBoundary.width + 'px,0,0)';
                                snoozeCard.style.display = 'none';
                                snoozeStateInfo.style.display = 'flex';
                                snoozeStateInfo.style.display = '-webkit-flex';
                                _this.inSwipe = true;
                                _this.timerId = setTimeout(function() {
                                        $(swipedElement).fadeOut("slow",
                                            function() {
                                                card.handleSnooze(card);
                                                card.inSwipe = false;
                                            });
                                    },
                                    2000);
                            }
                        } else if ((startX - endPosX) / cardBoundary.width * 100 > 30) {
                            if ((cardBoundary.left <= endPosX)) {
                                var dismissStateInfo = _this.refs["dismiss-state"];
                                var dismissCard = _this.refs["dismiss-container"];
                                dismissCard.style.display = 'none';
                                dismissStateInfo.style.display = 'flex';
                                dismissStateInfo.style.display = '-webkit-flex';
                                _this.inSwipe = true;
                                swipedElement.style.transform = 'translate3d(-' + cardBoundary.width + 'px,0,0)';
                                swipedElement.style.webkitTransform = 'translate3d(-' + cardBoundary.width + 'px,0,0)';
                                _this.timerId = setTimeout(function() {
                                        $(swipedElement).fadeOut("slow",
                                            function() {
                                                card.handleDismiss(card);
                                                card.inSwipe = false;
                                            });
                                    },
                                    2000);
                            }
                        }
                    }
                });
            };
            GenericCardView.prototype.undoClick = function(event) {
                this.inSwipe = false;
                clearTimeout(this.timerId);
                this.resetCard();
            };
            GenericCardView.prototype.resetCard = function() {
                this.mouseDown = false;
                if (!this.inSwipe) {
                    if (this.refs['genericCard']) {
                        var swipedElement = this.refs['genericCard'];
                        var snoozeStateInfo = this.refs["snooze-state"];
                        var snoozeCard = this.refs["snooze-container"];
                        var dismissStateInfo = this.refs["dismiss-state"];
                        var dismissCard = this.refs["dismiss-container"];
                        swipedElement.style.transform = 'translate3d(0px,0px,0px)';
                        swipedElement.style.webkitTransform = 'translate3d(0px,0px,0px)';
                        var swipedCard = this.refs["swipe-content"];
                        swipedCard.style.opacity = "1";
                        swipedElement.style.display = '';
                        dismissCard.style.display = 'flex';
                        dismissCard.style.display = '-webkit-flex';
                        dismissStateInfo.style.display = 'none';
                        snoozeCard.style.display = 'flex';
                        snoozeCard.style.display = '-webkit-flex';
                        snoozeStateInfo.style.display = 'none';
                    }
                }
                if (this.props.callbackContainer)
                    this.props.callbackContainer("SwipeCards",
                        { "currentElement": this.refs["genericCard"], "reset": true });
            };
            GenericCardView.prototype.swipeStartHandler = function(event) {
                if (this.props.showSnooze && this.props.showDismiss)
                    this.swipeStartObserver.onNext(event);
            };
            GenericCardView.prototype.swipeEndHandler = function(event) {
                if (this.props.showSnooze && this.props.showDismiss)
                    this.swipeEndObserver.onNext(event);
            };
            GenericCardView.prototype.elementMoveHandle = function(event) {
                var reset = true;
                if (this.mouseDown) {
                    reset = false;
                    if (this.props.showSnooze && this.props.showDismiss)
                        this.elementMove.onNext(event);
                }
                if (this.props.callbackContainer)
                    this.props.callbackContainer("SwipeCards",
                        { "currentElement": this.refs["genericCard"], "reset": reset });
            };
            GenericCardView.prototype.renderGenericSmallCard = function() {
                var _this = this;
                var content;
                var imgText;
                var description;
                var imgBlock = [];
                var container;
                var defaultIcon;
                if (this.props.showPrimaryInfo) {
                    if (this.props.primaryTemplate == null) {
                        var contextObject = this.props.cardData.data && this.props.cardData.data != null
                            ? this.props.cardData.data.cardContextDetails != null
                            ? this.props.cardData.data.cardContextDetails[0].contextObject
                            : undefined
                            : undefined;
                        if (contextObject &&
                            contextObject.guid != null &&
                            contextObject.guid != undefined &&
                            contextObject.entityName != null &&
                            contextObject.entityName != undefined) {
                            var id = contextObject.guid;
                            id = id.replace(/-/g, "");
                            defaultIcon = Mscrm.Controls.VDOM
                                .div(this.props.cardData.data,
                                {
                                    key: "defaultIcon",
                                    className: CRMNow.CardUtils.defaultCardIcon(contextObject.entityName) +
                                        ' regarding ' +
                                        contextObject.entityName
                                });
                            imgBlock = Mscrm.Controls.VDOM.img(this.props.cardData,
                            {
                                key: "imgBlock",
                                className: "Meeting-AttendeeIcon defaultEntityIcon crmSymbolFont",
                                "data-entityimgid": "img_" + id,
                                src: ""
                            });
                            if (CRMNow.CardUtils.isCCFMode()) {
                                if (contextObject.entityName != "" &&
                                    contextObject.guid != "00000000-0000-0000-0000-000000000000") {
                                    var getEntityImg = CRMNow.CardUtils
                                        .getEntityImage(contextObject.entityName, contextObject.guid);
                                    getEntityImg.then(function(data) {
                                            if (data &&
                                                data.entityCollection &&
                                                data.entityCollection.get_entities().length > 0) {
                                                var fields = data.entityCollection.get_entities()[0].fields;
                                                var img = fields ? fields.entityimage_url : "";
                                                var id = data.entityCollection.get_entities()[0].getObjectData()
                                                    .identifier
                                                    .id.rawguid;
                                                if (img && id && _this.imgBlockRef) {
                                                    $(_this.imgBlockRef)
                                                        .find('*[data-entityimgid="' + "img_" + id + '"]')
                                                        .attr("src", img);
                                                }
                                            }
                                        },
                                        function(failure) {
                                            console.log("Error:" + failure);
                                        });
                                }
                            }
                        } else {
                            defaultIcon = Mscrm.Controls.VDOM
                                .div(this.props.cardData.data,
                                {
                                    key: "defaultIcon",
                                    className: CRMNow.CardUtils.defaultCardIcon(this.props.cardData.cardName)
                                });
                            imgBlock = Mscrm.Controls.VDOM.img(this.props.cardData,
                            {
                                key: "iconCard",
                                src: ""
                            });
                        }
                        var imgBlockDiv = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                {
                                    key: "imgBlockDiv",
                                    className: "imgdiv",
                                    ref: function(r) { return _this.imgBlockRef = r; }
                                },
                                [imgBlock, defaultIcon]);
                        var title = this.props.cardData.title && this.props.cardData.title != null
                            ? this.props.cardData.title
                            : "";
                        if (this.props.cardData.softTitle != undefined && this.props.cardData.softTitle != "") {
                            if (this.props.cardData.softTitle.indexOf(":") != -1) {
                                var titleArray = this.props.cardData.softTitle.split(":");
                                if (titleArray &&
                                    titleArray.length > 0 &&
                                    this.props.cardData.cardName.indexOf("AGENDA") != -1) {
                                    if (titleArray[1] != undefined && titleArray[1] != "" && titleArray[1].length > 0)
                                        title = titleArray[1];
                                    else
                                        title = this.props.cardData.softTitle;
                                    title += " : " +
                                    (this.props.cardData.originalTitle && this.props.cardData.originalTitle != null
                                        ? this.props.cardData.originalTitle
                                        : "");
                                    if (this.props.softTitleGenerator) {
                                        var starttime = this.props.cardData.data.cardRelatedInfo
                                            ? this.props.cardData.data.cardRelatedInfo.starttime
                                            : "";
                                        if (starttime && title)
                                            title = this.props.softTitleGenerator(title, starttime);
                                    } else {
                                        if (this.props.cardData.data &&
                                            this.props.cardData.data.cardRelatedInfo &&
                                            this.props.cardData.data.cardRelatedInfo.starttime) {
                                            title = this
                                                .softTitleGenerator(title,
                                                    this.props.cardData.data.cardRelatedInfo.starttime);
                                        }
                                    }
                                }
                            }
                        }
                        if (title) {
                            var titleElement = Mscrm.Controls.VDOM.div(this.props.cardData,
                                {
                                    key: "cardPrimTitle",
                                    className: "card-primaryTitle" +
                                        (this.props.showIcon == true ? " no-left-margin" : "") +
                                        (this.props.showDescription && this.props.cardData.description
                                            ? " card-primaryTitle-withDescription"
                                            : "")
                                },
                                title);
                        }
                        var descriptionDiv;
                        if (this.props.showDescription && this.props.cardData.description) {
                            descriptionDiv = Mscrm.Controls.VDOM.div(this.props.cardData,
                                {
                                    key: "cardPrimeDescription",
                                    className: this.props.showIcon == true
                                        ? "generalCard-description no-left-margin"
                                        : "generalCard-description"
                                },
                                this.props.cardData.description);
                        }
                        var contentDiv = Mscrm.Controls.VDOM
                            .div(this.props.cardData, { className: "group-attendeeicon" }, [imgBlockDiv, titleElement]);
                        content = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "content",
                                className: "generalCard-maincontent generalCard-maincontent-small" +
                                    (this.props.showIcon != true ? " align-center" : "")
                            },
                            [titleElement, descriptionDiv]);
                    } else {
                        content = this.props.primaryTemplate(this);
                    }
                    if (this.props.callerApp == "WebClient") {
                        var card = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "card",
                                className: this.props.isGroup
                                    ? "generalCard generalCard-small generalCard-small-group"
                                    : "generalCard generalCard-small",
                                onClick: this.onCardClick.bind(null, this)
                            },
                            [imgBlock, content]);
                        container = Mscrm.Controls.VDOM.div(this.props
                            .cardData,
                            { className: "swipe-content" },
                            [card]);
                    } else {
                        var snoozeIcon = Mscrm.Controls.VDOM
                            .div(this.props.cardData, { key: "snoozeIcon", className: "CRMMDL2 icon-snooze" });
                        var snoozeStr = CRMNow.CardUtils.getSnoozeTimeStr(this.props.cardData).split(/\s/);
                        var snoozeFirstWord = Mscrm.Controls.VDOM
                            .div(this.props.cardData, { key: "snoozeWord", className: "first-word" }, snoozeStr[0]);
                        snoozeStr.shift();
                        var snoozeString = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeText ", className: "snooze-text" },
                                [snoozeFirstWord, snoozeStr.join(" ")]);
                        var snooze = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snooze", className: "snooze" },
                                [snoozeIcon, snoozeString]);
                        var defaultSnooze = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeContainer", ref: "snooze-container", className: "snooze-container" },
                                [snooze]);
                        var swipeUndoLabel = Mscrm.Controls.VDOM
                            .span(this.props.cardData,
                                {
                                    onClick: this.undoClick.bind(null, this),
                                    key: "snoozeUndo",
                                    className: "swipe-undo-label"
                                },
                                CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Undo"));
                        var swipeUndoContainer = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeUndoContainer", className: "swipe-undo" },
                                swipeUndoLabel);
                        var snoozed = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeAction", className: "swipedaction" },
                                CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Snoozing"));
                        var snoozedState = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeState", ref: "snooze-state", className: "snooze-state" },
                                [snoozed, swipeUndoContainer]);
                        var snoozeDiv = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "snoozeleft", className: "snooze-left" },
                                [defaultSnooze, snoozedState]);
                        var dismissIcon = Mscrm.Controls.VDOM
                            .div(this.props.cardData, { key: "dismissIcon", className: "CRMMDL2 icon-dismark" });
                        var dismissText = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismissText", className: "dismiss-text" },
                                CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Dismiss"));
                        var dismiss = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismiss", className: "dismiss" },
                                [dismissIcon, dismissText]);
                        var dismissContainer = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismissContainer", ref: "dismiss-container", className: "dismiss-container" },
                                [dismiss]);
                        var dismissed = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismissAction", className: "swipedaction" },
                                CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Dismissing"));
                        var dismissedState = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismissState", ref: "dismiss-state", className: "dismiss-state" },
                                [dismissed, swipeUndoContainer]);
                        var dismissDiv = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { key: "dismissRight", className: "dismiss-right" },
                                [dismissContainer, dismissedState]);
                        var card = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "card",
                                ref: "swipe-content",
                                className: this.props.isGroup
                                    ? "generalCard generalCard-small generalCard-small-group"
                                    : "generalCard generalCard-small generalCard-small-group setborder",
                                onClick: this.onCardClick
                            },
                            this.props.showIcon == true ? [imgBlockDiv, content] : [content]);
                        container = Mscrm.Controls.VDOM.div(this.props.cardData,
                            { key: "swipeContent", className: "swipe-content" },
                            [snoozeDiv, card, dismissDiv]);
                    }
                } else {
                    container = Mscrm.Controls.VDOM.div(this.props.cardData, { key: "swipeContent" }, []);
                }
                return container;
            };
            GenericCardView.prototype.renderGenericCardFooter = function() {
                var actions = [];
                var footer;
                var data = [];
                var actionData = [];
                if (this.props.showActionInfo) {
                    if (this.props.actionTemplate == undefined && this.props.actionTemplate == null) {
                        var cmdManager = CRMNow.ActionCommandsManager.getInstance();
                        if (cmdManager.commandFetchCompleted) {
                            data = this.getActionData(this.props.cardData);
                        } else
                            data = [];
                        var cmd = data && data.length > 0 ? data[0] : "";
                        var actionFirst = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                className: "generalCard-actions",
                                ref: "actionContainer1",
                                key: "actions1",
                                "data-action-cardId": this.props.cardData.cardId,
                                "data-contents": "",
                                onClick: this.handleActionClick.bind(null, this, "actionContainer1", cmd)
                            },
                            cmd && cmd.label ? cmd.label : "");
                        cmd = data && data.length > 1 ? data[1] : "";
                        var actionSecond = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                className: "generalCard-actions",
                                ref: "actionContainer2",
                                key: "actions2",
                                "data-action-cardId": this.props.cardData.cardId,
                                "data-contents": "",
                                onClick: this.handleActionClick.bind(null, this, "actionContainer2", cmd)
                            },
                            cmd && cmd.label ? cmd.label : "");
                        actions = Mscrm.Controls.VDOM.div(this.props.cardData, {}, [actionFirst, actionSecond]);
                    } else {
                        actions = this.props.actionTemplate();
                    }
                    footer = Mscrm.Controls.VDOM.div(this.props.cardData,
                        {
                            key: "cardFooter",
                            className: "generalCard-footer",
                            "data-footer-cardId": this.props.cardData.cardId
                        },
                        actions);
                }
                return footer;
            };
            GenericCardView.prototype.softTitleGenerator = function(softTitle, starttime) {
                var formatedSoftTitle = softTitle ? softTitle : "";
                if (starttime && softTitle) {
                    var formatedMeetingTime = CRMNow.CardUtils.getUserTime(starttime, "hh:mm a");
                    if (CRMNow.CardUtils.isCCFMode())
                        formatedSoftTitle = this.formatSoftTitle(softTitle, formatedMeetingTime);
                }
                return formatedSoftTitle;
            };
            GenericCardView.prototype.formatSoftTitle = function(format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var returnValue = format;
                for (var i = 1; i < arguments.length; i++) {
                    var actualValue = typeof (arguments[i]) == "undefined" || arguments[i] == null
                        ? ""
                        : arguments[i].toString();
                    returnValue = returnValue.replace(new RegExp("\\{" + (i - 1) + "\\}", 'g'), actualValue);
                }
                return returnValue;
            };
            GenericCardView.prototype.renderCardTitle = function() {
                var imgBlock = [];
                var titleContainer;
                var formatedTitle;
                if (this.props.showTitleInfo) {
                    if (!this.props.titleTemplate) {
                        if (this.props.cardTypeIcon != "") {
                            imgBlock = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "imgBlock",
                                className: CRMNow.CardUtils.defaultCardIcon(this.props.cardData.cardName)
                            });
                        }
                        if (this.props.cardData.softTitle != undefined && this.props.cardData.softTitle != "") {
                            var softTitle = this.props.cardData.softTitle;
                            if (softTitle.indexOf(":") != -1) {
                                var titleArray = softTitle.split(":");
                                if (titleArray[1] != undefined && titleArray[1] != "" && titleArray[1].length > 0) {
                                    formatedTitle = titleArray[1];
                                } else {
                                    formatedTitle = softTitle;
                                }
                            } else {
                                formatedTitle = softTitle;
                            }
                            if (this.props.softTitleGenerator) {
                                var starttime = this.props.cardData.data.cardRelatedInfo
                                    ? this.props.cardData.data.cardRelatedInfo.starttime
                                    : "";
                                if (starttime && formatedTitle)
                                    formatedTitle = this.props.softTitleGenerator(formatedTitle, starttime);
                            } else {
                                if (this.props.cardData.data &&
                                    this.props.cardData.data.cardRelatedInfo &&
                                    this.props.cardData.data.cardRelatedInfo.starttime) {
                                    formatedTitle = this
                                        .softTitleGenerator(formatedTitle,
                                            this.props.cardData.data.cardRelatedInfo.starttime);
                                }
                            }
                        }
                        var title = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "cardSoftTitle",
                                className: "generalCard-softTitle"
                            },
                            formatedTitle ? formatedTitle : "");
                        var title_description = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "cardPrimTitle",
                                className: "generic-PrimTitle"
                            },
                            this.props.cardData.title ? this.props.cardData.title : "");
                        var titleContent = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "cardTitleContent",
                                className: "generalCard-maincontent generalCard-maincontent-medium"
                            },
                            [title, title_description]);
                        titleContainer = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "titleContainer",
                                className: "Display-Title",
                                onClick: !this.props.showSuccessCardOverlay ? this.onCardClick.bind(null, this) : ""
                            },
                            [imgBlock, titleContent]);
                    } else {
                        titleContainer = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "titleContainer",
                                className: "Display-Title",
                                onClick: !this.props.showSuccessCardOverlay ? this.onCardClick.bind(null, this) : ""
                            },
                            [this.props.titleTemplate ? this.props.titleTemplate() : ""]);
                    }
                }
                return titleContainer;
            };
            GenericCardView.prototype.renderGenericMediumCard = function() {
                var mainContent;
                var contextContent;
                var relatedContent;
                var optionBtn;
                var menu;
                if (this.props.showMenu != undefined ? this.props.showMenu : true) {
                    if (Boolean(this.props.cardData.hasSnoozeDismiss)) {
                        optionBtn = Mscrm.Controls.VDOM.div(this.props.cardData,
                        {
                            className: "CRMMDL2 icon-dotdotdot",
                            ref: "optionBtn",
                            key: "optionBtn",
                            onClick: this.handleMenuBottonClick.bind(null, this)
                        });
                        menu = this.renderMenu();
                    }
                }
                if (this.props.showPrimaryInfo) {
                    if (this.props.primaryTemplate == null) {
                        var description = Mscrm.Controls.VDOM.div(this.props.cardData,
                        {
                            key: "cardDescription",
                            className: "generalCard-description",
                            dangerouslySetInnerHTML: {
                                __html: this.props.cardData.description
                                    ? CRMNow.CardUtils.htmlDecoder(this.props.cardData.description)
                                    : ""
                            }
                        });
                        mainContent = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "cardTitle",
                                className: "generalCard-contentcontainer"
                            },
                            [this.renderCardTitle(), description, menu, optionBtn]);
                    } else {
                        mainContent = Mscrm.Controls.VDOM.div(this.props.cardData,
                            {
                                key: "cardTitle",
                                className: "generalCard-contentcontainer"
                            },
                            [
                                this.renderCardTitle(), this.props.primaryTemplate
                                ? this.props.primaryTemplate(this)
                                : "",
                                menu, optionBtn
                            ]);
                    }
                }
                if (this.props.showContextInfo && this.props.contextTemplate) {
                    contextContent = this.props.contextTemplate();
                }
                if (this.props.showRelatedInfo && this.props.relatedTemplate) {
                    relatedContent = this.props.relatedTemplate();
                }
                if (this.props.callerApp == "WebClient") {
                    var cardData = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "cardData", className: "swipe-medium-data" },
                        [mainContent, contextContent, relatedContent, this.renderGenericCardFooter()]);
                    var card = Mscrm.Controls.VDOM.div(this.props.cardData,
                        {
                            key: this.props.cardData.cardName,
                            className: "generalCard generalCard-medium"
                        },
                        [cardData]);
                } else {
                    var snoozeIcon = Mscrm.Controls.VDOM
                        .div(this.props.cardData, { key: "snoozeIcon", className: "CRMMDL2 icon-snooze" });
                    var snoozeStr = CRMNow.CardUtils.getSnoozeTimeStr(this.props.cardData).split(/\s/);
                    var snoozeFirstWord = Mscrm.Controls.VDOM
                        .div(this.props.cardData, { key: "snoozeWord", className: "first-word" }, snoozeStr[0]);
                    snoozeStr.shift();
                    var snoozeString = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "snoozeText ", className: "snooze-text" },
                            [snoozeFirstWord, snoozeStr.join(" ")]);
                    var snooze = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "snooze", className: "snooze" },
                        [snoozeIcon, snoozeString]);
                    var defaultSnooze = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "snoozeContainer", ref: "snooze-container", className: "snooze-container" },
                            [snooze]);
                    var swipeUndoLabel = Mscrm.Controls.VDOM
                        .span(this.props.cardData,
                            {
                                onClick: this.undoClick.bind(null, this),
                                key: "snoozeUndo",
                                className: "swipe-undo-label"
                            },
                            CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Undo"));
                    var swipeUndoContainer = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "snoozeUndoContainer", className: "swipe-undo" },
                            swipeUndoLabel);
                    var snoozed = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "snoozeAction", className: "swipedaction" },
                        CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Snoozing"));
                    var snoozedState = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "snoozeState", ref: "snooze-state", className: "snooze-state" },
                            [snoozed, swipeUndoContainer]);
                    var snoozeDiv = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "snoozeleft", className: "snooze-left" },
                        [defaultSnooze, snoozedState]);
                    var dismissIcon = Mscrm.Controls.VDOM
                        .div(this.props.cardData, { key: "dismissIcon", className: "CRMMDL2 icon-dismark" });
                    var dismissText = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "dismissText", className: "dismiss-text" },
                            CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Dismiss"));
                    var dismiss = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "dismiss", className: "dismiss" },
                        [dismissIcon, dismissText]);
                    var dismissContainer = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "dismissContainer", ref: "dismiss-container", className: "dismiss-container" },
                            [dismiss]);
                    var dismissed = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "dismissAction", className: "swipedaction" },
                        CRMNow.CardUtils.getResources("ActionCard.CFC.Common.Dismissing"));
                    var dismissedState = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "dismissState", ref: "dismiss-state", className: "dismiss-state" },
                            [dismissed, swipeUndoContainer]);
                    var dismissDiv = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { key: "dismissRight", className: "dismiss-right" },
                            [dismissContainer, dismissedState]);
                    var cardData = Mscrm.Controls.VDOM.div(this.props.cardData,
                        { key: "cardData", ref: "swipe-content", className: "swipe-medium-data" },
                        [mainContent, contextContent, relatedContent, this.renderGenericCardFooter()]);
                    var card = Mscrm.Controls.VDOM.div(this.props.cardData,
                        {
                            key: this.props.cardData.cardId,
                            className: this.props.showSuccessCardOverlay
                                ? "overlay generalCard generalCard-medium"
                                : "generalCard generalCard-medium",
                            onClick: ((!this.props.showPrimaryInfo) ||
                                    (this.props.showPrimaryInfo && !this.props.showTitleInfo))
                                ? this.onCardClick.bind(null, this)
                                : null
                        },
                        [snoozeDiv, cardData, dismissDiv]);
                }
                return card;
            };
            GenericCardView.prototype.renderCard = function() {
                if (this.props.mode == "small") {
                    return this.renderGenericSmallCard();
                } else {
                    return this.renderGenericMediumCard();
                }
            };
            GenericCardView.prototype.onRender = function() {
                var cardProps = {
                    className: this.props.isGroup ? "carVwidth" : "carVwidth groupcard-spacing",
                    key: this.props.cardData.cardId,
                    ref: "genericCard",
                    onMouseDown: this.swipeStartHandler,
                    onMouseUp: this.swipeEndHandler,
                    onMouseMove: this.elementMoveHandle,
                    onMouseLeave: this.resetCard,
                    onTouchStart: this.swipeStartHandler,
                    onTouchEnd: this.swipeEndHandler,
                    onTouchMove: this.elementMoveHandle,
                    id: this.props.cardData.cardName
                };
                var container;
                if (this.props.callerApp == "WebClient") {
                    var webClientCardProps;
                    if (this.props.cardData.data.cardTypeData.cardtypeid == "{0734FEA3-46B9-4E9C-9001-53E957EC2DD4}") {
                        webClientCardProps = {
                            key: this.props.cardData.cardId,
                            className: "letsGetStartedClass controlBgClass",
                            id: this.props.cardData.cardId
                        };
                    } else {
                        webClientCardProps = {
                            key: this.props.cardData.cardId,
                            className: "actionCardLayout controlBgClass",
                            id: this.props.cardData.cardId,
                            onClick: this.props.defaultActionTemplate
                                ? this.props.defaultActionTemplate.bind(this)
                                : null
                        };
                    }
                    container = Mscrm.Controls.VDOM.div(this.props.cardData, webClientCardProps, [this.renderCard()]);
                } else {
                    container = Mscrm.Controls.VDOM.li(this.props.cardData, cardProps, [this.renderCard()]);
                }
                return container;
            };
            return GenericCardView;
        })(Mscrm.Controls.VirtualComponentBase);
        CRMNow.GenericCardView = GenericCardView;
        CRMNow.GenericCardControl = ReactUtils.createComponent(new GenericCardView());
    })(CRMNow = MscrmControls.CRMNow || (MscrmControls.CRMNow = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../references.ts" />
var MscrmControls;
(function(MscrmControls) {
    var ActionCard;
    (function(ActionCard) {
        var ActionCardControl = (function() {
            function ActionCardControl() {
            }

            ActionCardControl.getCellValue = function(columnName, recordId) {
                var data = Mscrm.ActionCardData;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].actioncardid == recordId) {
                        var columnValue = data[i][columnName];
                        if (columnValue != null && columnValue && columnValue["#text"]) {
                            return columnValue["#text"];
                        }
                        return columnValue != null ? columnValue.toString() : null;
                    }
                }
                return "";
            };
            ActionCardControl.refresh = function() {};
            return ActionCardControl;
        })();
        ActionCard.ActionCardControl = ActionCardControl;
        var id;

        function handleCommand(actionCardId, requestedCommandKey, domElmEvent) {
            id = actionCardId;
            var actualCommand = Mscrm.ActionCardCommand.commands[requestedCommandKey];
            executeCommand(actualCommand);
            if (Mscrm.ActionsToDismiss.indexOf(requestedCommandKey) > -1) {
                eval("Mscrm.CommandBarActions.dismissCardFromUI(id)");
            }
        }

        ActionCard.handleCommand = handleCommand;

        function executeCommand(commandData) {
            for (var actionIndex = 0; actionIndex < commandData.Actions.length; actionIndex++) {
                if (commandData.Actions[actionIndex].ActionType == 3) {
                    executeJavascriptFunction(commandData.Actions[actionIndex]);
                }
            }
        }

        ActionCard.executeCommand = executeCommand;

        function executeJavascriptFunction(commandData) {
            var functionName = parseMethodName(commandData);
            eval(functionName + "(ActionCardControl,[{'Id':id}])");
        }

        ActionCard.executeJavascriptFunction = executeJavascriptFunction;

        function parseMethodName(commandData) {
            return commandData.Attributes.FunctionName;
        }

        ActionCard.parseMethodName = parseMethodName;
    })(ActionCard = MscrmControls.ActionCard || (MscrmControls.ActionCard = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../references.ts" />
var MscrmControls;
(function(MscrmControls) {
    var ActionCard;
    (function(ActionCard) {
        var ActionCardUtil = (function() {
            function ActionCardUtil() {
            }

            ActionCardUtil
                .getSegmentValueFromReferenceTokens =
                function(referenceTokens, referenceTokenType, segment, returnFormat) {
                    var segmentValue;
                    if (returnFormat == "ResourceString") {
                        segmentValue = "";
                    }
                    if (referenceTokens) {
                        var referenceTokenObject = JSON.parse(referenceTokens)["Tokens"];
                        if (referenceTokenObject) {
                            var referenceTokenObject_TokenType = referenceTokenObject[referenceTokenType];
                            if (referenceTokenObject_TokenType) {
                                var referenceTokenObject_TokenType_Segment = referenceTokenObject_TokenType[segment];
                                if (referenceTokenObject_TokenType_Segment) {
                                    if (returnFormat == "ResourceString") {
                                        var _window = window;
                                        segmentValue = _window.Xrm.Internal
                                            .getResourceString(referenceTokenObject_TokenType_Segment, window.top);
                                    } else if (returnFormat == "Object") {
                                        segmentValue = referenceTokenObject_TokenType_Segment;
                                    }
                                }
                            }
                        }
                    }
                    return segmentValue;
                };
            ActionCardUtil.formatString = function(inputString, removables, replacements) {
                var formattedString = inputString;
                if (removables.length == replacements.length) {
                    for (var index = 0; index < removables.length; index++) {
                        if (inputString.indexOf(removables[index]) >= 0) {
                            formattedString = formattedString.replace(removables[index], replacements[index]);
                        }
                    }
                }
                return formattedString;
            };
            ActionCardUtil.retrieveSubString = function(inputString, delimiter) {
                var formattedSubString = inputString;
                if (inputString.indexOf(delimiter) >= 0) {
                    var delimiterIndex = inputString.indexOf(delimiter);
                    var inputStringLength = inputString.length;
                    formattedSubString = inputString.substr(delimiterIndex + 1, inputStringLength);
                }
                return formattedSubString;
            };
            ActionCardUtil.calculateRemainingTime = function(startTime) {
                var remainingTime = "";
                var _window = window;
                if (startTime) {
                    var now = moment(new Date());
                    var start = moment(startTime);
                    var duration = moment.duration(start.diff(now));
                    var timeLeft = "";
                    if (duration.hours() > 0) {
                        var hoursText = _window.Xrm.Internal
                            .getResourceString("ActionCard.CFC.Common.Hours", window.top);
                        remainingTime = duration.hours().toString() + " " + hoursText;
                    } else if (duration.minutes() > 0) {
                        var minutesText = _window.Xrm.Internal
                            .getResourceString("ActionCard.CFC.Common.Minutes", window.top);
                        remainingTime = duration.minutes().toString() + " " + minutesText;
                    } else {
                        var timeExpiredText = _window.Xrm.Internal
                            .getResourceString("ActionCard.CFC.Common.TimeExpired", window.top);
                        remainingTime = " " + timeExpiredText;
                    }
                }
                return remainingTime;
            };
            ActionCardUtil.removeHtmlTags = function(inputString) {
                var refinedString = inputString;
                refinedString = refinedString.replace(/<\/?[^>]+(>|$)/g, "");
                return refinedString;
            };
            return ActionCardUtil;
        })();
        ActionCard.ActionCardUtil = ActionCardUtil;
    })(ActionCard = MscrmControls.ActionCard || (MscrmControls.ActionCard = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="../references.ts" />
var MscrmControls;
(function(MscrmControls) {
    var ActionCard;
    (function(ActionCard) {
        ActionCard.TITLE_TOOL_TIP;
        ActionCard.DESCRIPTION_TOOL_TIP;
        var ActionCardView = (function(_super) {
            __extends(ActionCardView, _super);

            function ActionCardView() {
                _super.call(this);
            }

            ActionCardView.prototype.getInitialState = function() {
                return null;
            };
            ActionCardView.prototype.generateDomElementsFromReferenceTokens = function(referenceTokenType) {
                var toolTip = "";
                var toolTipItems = [];
                var toolTipItemIndex = 0;
                var formattedParams = [];
                var domElements = [];
                var _window = window;
                var options = new _window.Xrm.DialogOptions;
                options.openInNewWindow = true;
                var params = ActionCard.ActionCardUtil
                    .getSegmentValueFromReferenceTokens(this.props.cardData.data.referencetokens,
                        referenceTokenType,
                        "Params",
                        "Object");
                if (!params) {
                    return null;
                }
                var resourceString = ActionCard.ActionCardUtil
                    .getSegmentValueFromReferenceTokens(this.props.cardData.data.referencetokens,
                        referenceTokenType,
                        "ResourceId",
                        "ResourceString");
                var resourceStringSegments = resourceString.split(/\s+/g);
                var regExpr = new RegExp("\{[0-9]*\}");
                var placeholders = [];
                for (var i = 0; i < resourceStringSegments.length; i++) {
                    if (resourceStringSegments[i].match(regExpr)) {
                        placeholders.push(resourceStringSegments[i]);
                    }
                }
                for (var i = 0; i < params.length; i++) {
                    var name = params[i]["Name"];
                    var recordId = params[i]["Id"];
                    var paramsType = params[i]["Type"];
                    if (paramsType == 1) {
                        try {
                            var dateTime = new Date(name);
                            if ((dateTime != null)) {
                                var specifier = "D";
                                if (name.indexOf("T") != -1) {
                                    var timeZoneDifference =
                                        _window.USER_TIMEZONE_OFFSET + dateTime.getTimezoneOffset();
                                    dateTime = new Date(dateTime.getTime() + timeZoneDifference * 60000);
                                    specifier = "f";
                                }
                                name = Mscrm.DateTimeUtility.formatDate(dateTime, specifier);
                            }
                        } catch (Exception) {
                            if (dateTime != null) {
                                name = dateTime.toDateString();
                            }
                        }
                    }
                    var placeholder = placeholders[i]
                        .substring(placeholders[i].indexOf("{"), placeholders[i].indexOf("}") + 1);
                    name = placeholders[i].replace(placeholder, name);
                    if (recordId) {
                        var entityName = _window.Xrm.Internal.getEntityName(params[i]["TypeCode"]);
                        formattedParams[i] = Mscrm.Controls.VDOM
                            .anchor(this.props.cardData,
                                {
                                    href: "javascript:Xrm.Utility.openEntityForm('" +
                                        entityName +
                                        "','{" +
                                        recordId +
                                        "}');",
                                    className: "cardText",
                                    tabIndex: "-1"
                                },
                                " " + name);
                    } else {
                        formattedParams[i] = Mscrm.Controls.VDOM.span(this.props.cardData, {}, " " + name);
                    }
                    toolTipItems[i] = name;
                }
                for (var i = 0, j = 0; i < resourceStringSegments.length; i++) {
                    if (resourceStringSegments[i].match(regExpr)) {
                        domElements[i] = formattedParams[j++];
                        if (toolTipItemIndex < toolTipItems.length) {
                            if (toolTip == "") {
                                toolTip = toolTipItems[toolTipItemIndex];
                            } else {
                                toolTip = toolTip + " " + toolTipItems[toolTipItemIndex];
                            }
                            toolTipItemIndex++;
                        }
                    } else {
                        domElements[i] = Mscrm.Controls.VDOM
                            .span(this.props.cardData, {}, " " + resourceStringSegments[i]);
                        if (toolTip == "") {
                            toolTip = resourceStringSegments[i];
                        } else {
                            toolTip = toolTip + " " + resourceStringSegments[i];
                        }
                    }
                }
                if (referenceTokenType == "title") {
                    ActionCard.TITLE_TOOL_TIP = toolTip;
                } else if (referenceTokenType == "body") {
                    ActionCard.DESCRIPTION_TOOL_TIP = toolTip;
                }
                return domElements;
            };
            ActionCardView.prototype.handleDismissOnClick = function(event) {
                ActionCard.handleCommand(this.props.cardData.cardId,
                    "Mscrm.HomepageGrid.actioncard.DismissCommand",
                    event);
            };
            ActionCardView.prototype.handleDismissOnKeyPress = function(event) {
                if ((event.keyCode == 13) || (event.charCode == 13)) {
                    ActionCard.handleCommand(this.props.cardData.cardId,
                        "Mscrm.HomepageGrid.actioncard.DismissCommand",
                        event);
                }
            };
            ActionCardView.prototype.handleSnoozeOnClick = function(event) {
                ActionCard.handleCommand(this.props.cardData.cardId,
                    "Mscrm.HomepageGrid.actioncard.SnoozeCommand",
                    event);
            };
            ActionCardView.prototype.handleSnoozeOnKeyPress = function(event) {
                if ((event.keyCode == 13) || (event.charCode == 13)) {
                    ActionCard.handleCommand(this.props.cardData.cardId,
                        "Mscrm.HomepageGrid.actioncard.SnoozeCommand",
                        event);
                }
            };
            ActionCardView.prototype.handleSnoozeHover = function(event) {
                var _window = window;
                var element = event.target;
                while (element.className != 'snoozeCard')
                    element = element.firstChild;
                element.src = _window.getAttributeInWindow("CDNURL") +
                    '/_static/_controls/actionhubcontrol/iconsnoozeonfocus.png';
            };
            ActionCardView.prototype.handleDismissHover = function(event) {
                var _window = window;
                var element = event.target;
                while (element.className != 'closeCard')
                    element = element.firstChild;
                element.src = _window.getAttributeInWindow("CDNURL") +
                    '/_static/_controls/actionhubcontrol/icondismissonfocus.png';
            };
            ActionCardView.prototype.handleSnoozeNoHover = function(event) {
                var _window = window;
                var element = event.target;
                while (element.className != 'snoozeCard')
                    element = element.firstChild;
                element.src = _window.getAttributeInWindow("CDNURL") +
                    '/_static/_controls/actionhubcontrol/iconsnoozenofocus.png';
            };
            ActionCardView.prototype.handleDismissNoHover = function(event) {
                var _window = window;
                var element = event.target;
                while (element.className != 'closeCard')
                    element = element.firstChild;
                element.src = _window.getAttributeInWindow("CDNURL") +
                    '/_static/_controls/actionhubcontrol/icondismissnofocus.png';
            };
            ActionCardView.prototype.handleActionCommandOnKeyDown = function(requestedActionCommandKey, event) {
                if ((event.keyCode == 9) || (event.charCode == 9)) {
                    if (($(event.target).next().length == 0) &&
                        ($(event.target).closest('.actionhubcontrol').next().length == 0)) {
                        var notesControl = window.parent.document.getElementById("header_notescontrol");
                        if (notesControl) {
                            var TabElement = notesControl.firstElementChild;
                            TabElement.focus();
                            event.nativeEvent.preventDefault();
                            event.nativeEvent.stopPropagation();
                        }
                    }
                }
            };
            ActionCardView.prototype.executeDefaultAction = function(event) {
                var varDefaultActionJson = this.props.cardData.data.cardTypeData.actions;
                if (varDefaultActionJson) {
                    var actionObject = JSON.parse(varDefaultActionJson);
                    var webClientActions = actionObject["WebClient"];
                    var defaultActions = webClientActions["Default"];
                    var defaultActionKeys = Object.keys(defaultActions);
                    if (defaultActionKeys.length > 0) {
                        ActionCard.handleCommand(this.props.cardData.cardId.toString(),
                            defaultActions[defaultActionKeys[0]],
                            event);
                    }
                }
            };
            ActionCardView.prototype.executeDefaultActionOnClick = function(event) {
                this.executeDefaultAction(event);
            };
            ActionCardView.prototype.executeDefaultActionOnKeyPress = function(event) {
                if ((event.keyCode == 13) || (event.charCode == 13)) {
                    this.executeDefaultAction(event);
                }
            };
            ActionCardView.prototype.showTitleTemplate = function() {
                var imgCardTypeIcon;
                var anchorCardTypeIcon;
                var divCardTypeIcon;
                var divActionCardTitle;
                var divTitleContainer;
                var varTitleToolTip = "";
                var _window = window;
                var highcontrast;
                var url;
                if (!this.props.cardData.title) {
                    if (this.props.cardData.data.referencetokens != undefined) {
                        this.props.cardData.title = this.generateDomElementsFromReferenceTokens("title");
                        if (this.props.cardData.title) {
                            varTitleToolTip = ActionCard.TITLE_TOOL_TIP;
                        }
                    }
                } else {
                    varTitleToolTip = this.props.cardData.title;
                }
                if (this.props.cardTypeIcon != "") {
                    var cardName = this.props.cardData.cardName;
                    if (cardName.indexOf(":") >= 0) {
                        cardName = cardName.replace(":", "_");
                    }
                    var cardNameResourceKey = "CardType_ToolTip_" + cardName;
                    var cardNameToolTip = _window.Xrm.Internal.getResourceString(cardNameResourceKey, window.top);
                    if (cardNameToolTip &&
                        (cardNameToolTip != null) &&
                        (cardNameToolTip != undefined) &&
                        (cardNameToolTip != "[object Object]")) {
                        imgCardTypeIcon = Mscrm.Controls.VDOM.img(this.props.cardData,
                        {
                            src: this.props.cardData.cardTypeIcon,
                            alt: cardNameToolTip
                        });
                        anchorCardTypeIcon = Mscrm.Controls.VDOM.anchor(this.props.cardData,
                            {
                                className: "generalCard-leftblock",
                                onClick: this.executeDefaultActionOnClick.bind(this),
                                onKeyPress: this.executeDefaultActionOnKeyPress.bind(this),
                                href: "#c12",
                                'aria-label': cardNameToolTip,
                                tabIndex: "0",
                                title: cardNameToolTip
                            },
                            imgCardTypeIcon);
                    } else {
                        imgCardTypeIcon = Mscrm.Controls.VDOM.img(this.props.cardData,
                        {
                            src: this.props.cardData.cardTypeIcon
                        });
                        anchorCardTypeIcon = Mscrm.Controls.VDOM.anchor(this.props.cardData,
                            {
                                tabIndex: "0",
                                className: "generalCard-leftblock",
                                onClick: this.executeDefaultActionOnClick.bind(this),
                                onKeyPress: this.executeDefaultActionOnKeyPress.bind(this)
                            },
                            imgCardTypeIcon);
                    }
                }
                var divTitleDescription = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "generic-PrimTitle",
                        title: varTitleToolTip,
                        tabIndex: "0",
                        onKeyPress: this.executeDefaultActionOnKeyPress.bind(this)
                    },
                    this.props.cardData.title ? this.props.cardData.title : "");
                var cardtypeidArrays = [
                    "{64A6C256-E479-41F5-8719-D1AFC4835FE8}", "{CF6BDDD4-E712-4F1D-97B6-68D3A7788A97}",
                    "{DEA00147-C288-49D2-83C8-8B6437868C5A}", "{EEC00A9D-0D1E-445A-83AD-A3A6FB603CD4}",
                    "{7AC21A31-8C11-4239-8505-A9FD748439DC}", "{E9BF7F81-442C-4145-BD43-F68FFC56CD54}",
                    "{8B087B1A-CF01-4203-921C-97DC156225EF}", "{6C54F024-E4DD-40DD-AC05-92667ED7FA3B}",
                    "{FC4EC2E1-7655-4C8C-A518-EA4BF1EF5721}"
                ];
                var snoozeRemovables = ["{0}"];
                var snoozeReplacements = [];
                var snoozeToolTip;
                if (this.props.cardData.data.priority >= 1000) {
                    snoozeToolTip = _window.Xrm.Internal
                        .getResourceString("Ribbon.Tooltip.actioncard.Snooze.Minutes", window.top);
                    snoozeReplacements = ["5"];
                } else if (cardtypeidArrays.indexOf(this.props.cardData.data.cardTypeData.cardtypeid) > -1) {
                    snoozeToolTip = _window.Xrm.Internal
                        .getResourceString("Ribbon.Tooltip.actioncard.Snooze.Minutes", window.top);
                    snoozeReplacements = ["15"];
                } else {
                    snoozeToolTip = _window.Xrm.Internal
                        .getResourceString("Ribbon.Tooltip.actioncard.Snooze.Hours", window.top);
                    snoozeReplacements = ["12"];
                }
                snoozeToolTip = ActionCard.ActionCardUtil
                    .formatString(snoozeToolTip, snoozeRemovables, snoozeReplacements);
                var imgSnoozeIcon = Mscrm.Controls.VDOM.img(this.props.cardData,
                {
                    className: "snoozeCard",
                    alt: snoozeToolTip,
                    src: _window.getAttributeInWindow("CDNURL") +
                        "/_static/_controls/actionhubcontrol/iconsnoozenofocus.png"
                });
                var anchorSnoozeIcon = Mscrm.Controls.VDOM.anchor(this.props.cardData,
                    {
                        className: "snoozeCardIcon",
                        onMouseOver: this.handleSnoozeHover.bind(this),
                        onMouseOut: this.handleSnoozeNoHover.bind(this),
                        onFocus: this.handleSnoozeHover.bind(this),
                        onBlur: this.handleSnoozeNoHover.bind(this),
                        onClick: this.handleSnoozeOnClick.bind(this),
                        onKeyPress: this.handleSnoozeOnKeyPress.bind(this),
                        href: "#c12",
                        'aria-label': snoozeToolTip,
                        tabIndex: "0",
                        title: snoozeToolTip
                    },
                    imgSnoozeIcon);
                var dismissToolTip = _window.Xrm.Internal
                    .getResourceString("Ribbon.Tooltip.actioncard.Dismiss", window.top);
                var imgDismissIcon = Mscrm.Controls.VDOM
                    .img(this.props.cardData,
                    {
                        className: "closeCard",
                        alt: dismissToolTip,
                        src: _window.getAttributeInWindow("CDNURL") +
                            "/_static/_controls/actionhubcontrol/icondismissnofocus.png"
                    });
                var anchorDismissIcon = Mscrm.Controls.VDOM.anchor(this.props.cardData,
                    {
                        onMouseOver: this.handleDismissHover.bind(this),
                        onMouseOut: this.handleDismissNoHover.bind(this),
                        onFocus: this.handleDismissHover.bind(this),
                        onBlur: this.handleDismissNoHover.bind(this),
                        onClick: this.handleDismissOnClick.bind(this),
                        onKeyPress: this.handleDismissOnKeyPress.bind(this),
                        href: "#c12",
                        'aria-label': dismissToolTip,
                        tabIndex: "0",
                        title: dismissToolTip
                    },
                    imgDismissIcon);
                var divIconGroup = Mscrm.Controls.VDOM.div(this.props.cardData,
                    { className: "pullRightClass" },
                    [anchorSnoozeIcon, anchorDismissIcon]);
                var softTitle = _window.Xrm.Internal.getResourceString(this.props.cardData.softTitle, window.top);
                var formattedSoftTitle = softTitle;
                formattedSoftTitle = ActionCard.ActionCardUtil.retrieveSubString(formattedSoftTitle, ":");
                if (formattedSoftTitle.indexOf("{0}") >= 0) {
                    var startDate = this.props.cardData.data.startdate;
                    var cardRelatedData = this.props.cardData.data.data;
                    var cardInfo = JSON.parse(cardRelatedData);
                    var cardRelatedInfo = cardInfo["cardRelatedInfo"];
                    var startTime = cardRelatedInfo["starttime"] ? cardRelatedInfo["starttime"] : "";
                    var startTimeFormatted = new Date(startTime);
                    var timeZoneDifference = _window.USER_TIMEZONE_OFFSET + startTimeFormatted.getTimezoneOffset();
                    startTime = new Date(startTimeFormatted.getTime() + timeZoneDifference * 60000);
                    var removables = ["{0}"];
                    var replacements = [];
                    if (this.props.cardData.cardName == "Upcoming_Meeting") {
                        var remainingTime = ActionCard.ActionCardUtil.calculateRemainingTime(startTime);
                        replacements.push(remainingTime);
                    } else {
                        var formattedStartTime = Mscrm.DateTimeUtility.formatDate(startTime, "t");
                        replacements.push(formattedStartTime);
                    }
                    formattedSoftTitle = ActionCard.ActionCardUtil
                        .formatString(formattedSoftTitle, removables, replacements);
                }
                var divSoftTitle = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "generalCard-softTitle",
                        tabIndex: "0",
                        title: formattedSoftTitle
                    },
                    formattedSoftTitle ? formattedSoftTitle : "");
                var divTitleContent = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "actionCardTitles"
                    },
                    [divSoftTitle, divTitleDescription]);
                divActionCardTitle = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "pullLeftClass"
                    },
                    [anchorCardTypeIcon, divTitleContent]);
                divTitleContainer = Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "Display-Title-Container"
                    },
                    [divActionCardTitle, divIconGroup]);
                return divTitleContainer;
            };
            ActionCardView.prototype.getCardTypeIcon = function(url, highcontrast) {
                var _window = window;
                var imgUrlArr = url.split('/');
                if (imgUrlArr != null) {
                    var highContrastUrl = "";
                    for (var i = 0; i < imgUrlArr.length - 1; i++) {
                        highContrastUrl += imgUrlArr[i] + "/";
                    }
                    highContrastUrl += imgUrlArr[imgUrlArr.length - 1].replace(/_(.+)_/g, '_WHITE_');
                    return _window.getAttributeInWindow("CDNURL") + highContrastUrl;
                } else {
                    return _window.getAttributeInWindow("CDNURL") + url;
                }
            };
            ActionCardView.prototype.showPrimaryTemplate = function() {
                var varDescriptionToolTip = "";
                var divCardDescription;
                if (!this.props.cardData.description) {
                    if (this.props.cardData.data.referencetokens != undefined) {
                        this.props.cardData.description = this.generateDomElementsFromReferenceTokens("body");
                        divCardDescription = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { className: "Prim-Text-Info" },
                                [
                                    Mscrm.Controls.VDOM
                                    .span(this.props.cardData.data, {}, this.props.cardData.description)
                                ]);
                        if (this.props.cardData.description) {
                            varDescriptionToolTip = ActionCard.DESCRIPTION_TOOL_TIP;
                        }
                    }
                } else {
                    divCardDescription = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                        {
                            className: "Prim-Text-Info",
                            dangerouslySetInnerHTML: {
                                __html: this.props.cardData.description ? this.props.cardData.description : ""
                            }
                        });
                    varDescriptionToolTip = ActionCard.ActionCardUtil.removeHtmlTags(this.props.cardData.description);
                }
                return Mscrm.Controls.VDOM.div(this.props.cardData,
                    {
                        className: "cardDescription",
                        tabIndex: "0",
                        title: varDescriptionToolTip,
                        'aria-label': varDescriptionToolTip,
                        onKeyPress: this.executeDefaultActionOnKeyPress.bind(this)
                    },
                    [divCardDescription]);
            };
            ActionCardView.prototype.showActionTemplate = function() {
                var varActionsJson = this.props.cardData.data.cardTypeData.actions;
                var actionComponents = [];
                if (varActionsJson) {
                    var actionObject = JSON.parse(varActionsJson);
                    var webClientActions = actionObject["WebClient"];
                    var actions = webClientActions["Actions"];
                    var actionKeys = Object.keys(actions);
                    var _window = window;
                    var actionCardId = this.props.cardData.cardId.toString();
                    var action1Name = _window.Xrm.Internal.getResourceString(actionKeys[0], window.top);
                    var action1Anchor = Mscrm.Controls.VDOM
                        .anchor(this.props.cardData,
                            {
                                href: "javascript:MscrmControls.ActionCard.handleCommand('" +
                                    actionCardId +
                                    "','" +
                                    actions[actionKeys[0]] +
                                    "');",
                                className: "actionItemsClass generalCardAction",
                                tabIndex: "0",
                                title: action1Name
                            },
                            action1Name);
                    var action1Div = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { onKeyDown: this.handleActionCommandOnKeyDown.bind(this, actions[actionKeys[0]]) },
                            [action1Anchor]);
                    actionComponents.push(action1Div);
                    if (actionKeys[1]) {
                        var action2Name = _window.Xrm.Internal.getResourceString(actionKeys[1], window.top);
                        var action2Anchor = Mscrm.Controls.VDOM
                            .anchor(this.props.cardData,
                                {
                                    href: "javascript:MscrmControls.ActionCard.handleCommand('" +
                                        actionCardId +
                                        "','" +
                                        actions[actionKeys[1]] +
                                        "');",
                                    className: "actionItemsClass generalCardAction",
                                    tabIndex: "0",
                                    title: action2Name
                                },
                                action2Name);
                        var action2Div = Mscrm.Controls.VDOM
                            .div(this.props.cardData,
                                { onKeyDown: this.handleActionCommandOnKeyDown.bind(this, actions[actionKeys[1]]) },
                                [action2Anchor]);
                        actionComponents.push(action2Div);
                    }
                    return Mscrm.Controls.VDOM.div(this.props.cardData,
                        { className: "generalCard-footer-text" },
                        actionComponents);
                }
            };
            ActionCardView.prototype.executeDefaultActionOnCardClick = function(event) {
                var targetele = event.target;
                if (targetele.tagName.toLowerCase() != 'img' &&
                    targetele.tagName.toLowerCase() != 'a' &&
                    targetele.className != "generalCardAction") {
                    this.executeDefaultAction(event);
                }
            };
            ActionCardView.prototype.onRender = function() {
                return MscrmControls.CRMNow.GenericCardControl({
                    callerApp: "WebClient",
                    mode: this.props.cardData.mode,
                    cardData: this.props.cardData,
                    showTitleInfo: true,
                    titleData: null,
                    titleTemplate: this.showTitleTemplate,
                    showPrimaryInfo: true,
                    showPrimaryTemplate: true,
                    showPrimaryTemplateSmall: false,
                    primaryTemplateData: null,
                    primaryTemplate: this.showPrimaryTemplate,
                    showActionInfo: true,
                    actionData: this.props.cardData.data,
                    actionTemplateData: null,
                    actionTemplate: this.showActionTemplate,
                    defaultActionTemplate: this.executeDefaultActionOnCardClick
                });
            };
            return ActionCardView;
        })(Mscrm.Controls.VirtualComponentBase);
        ActionCard.ActionCardView = ActionCardView;
        ActionCard.varActionCardControl = ReactUtils.createComponent(new ActionCardView());
    })(ActionCard = MscrmControls.ActionCard || (MscrmControls.ActionCard = {}));
})(MscrmControls || (MscrmControls = {}));
/// <reference path="typings/jquery.d.ts" />
/// <reference path="typings/rx-lite.d.ts" />
/// <reference path="typings/react.d.ts" />
/// <reference path="typings/react-dom.d.ts" />
/// <reference path="typings/rx.d.ts" />
/// <reference path="typings/underscore.d.ts" />
/// <reference path="typings/moment-node.d.ts" />
/// <reference path="typings/dynamics.d.ts" />
/// <reference path="contexthelper.ts" />
/// <reference path="ReactUtils.ts" />
/// <reference path="CardUtils.ts" />
/// <reference path="ActionCommandsManager.ts" />
/// <reference path="VDOM.ts" />
/// <reference path="ICardData.ts" />
/// <reference path="IGenericContainer.ts" />
/// <reference path="controls/GenericCardView.ts" />
/// <reference path="controls/ActionCommandHandler.ts" />
/// <reference path="controls/ActionCardUtil.ts" />
/// <reference path="controls/ActionCardView.ts" />
/// <reference path="controls/LetsGetStartedCardView.ts" /> 
/// <reference path="../references.ts" />
var MscrmControls;
(function(MscrmControls) {
    var ActionCard;
    (function(ActionCard) {
        var LetsGetStartedCardView = (function(_super) {
            __extends(LetsGetStartedCardView, _super);

            function LetsGetStartedCardView() {
                _super.call(this);
            }

            LetsGetStartedCardView.prototype.getInitialState = function() {
                return null;
            };
            LetsGetStartedCardView.prototype.handleCommandOnClick = function(requestedCommandKey, event) {
                ActionCard.handleCommand(this.props.cardData.cardId, requestedCommandKey, event);
            };
            LetsGetStartedCardView.prototype.renderActions = function() {
                var varActionsJson = this.props.cardData.data.cardTypeData.actions;
                var actionComponents = [];
                if (varActionsJson) {
                    var actionObject = JSON.parse(varActionsJson);
                    var webClientActions = actionObject["WebClient"];
                    var actions = webClientActions["Actions"];
                    var actionKeys = Object.keys(actions);
                    var _window = window;
                    var actionCardId = this.props.cardData.cardId;
                    var action1Name = _window.Xrm.Internal.getResourceString(actionKeys[0], window.top);
                    var action1 = actions[actionKeys[0]];
                    var buttonAction1 = Mscrm.Controls.VDOM
                        .button(this.props.cardData,
                            {
                                className: "startUpCardButton",
                                tabIndex: "0",
                                title: action1Name,
                                onClick: this.handleCommandOnClick.bind(this, action1)
                            },
                            action1Name);
                    var divAction1 = Mscrm.Controls.VDOM
                        .div(this.props.cardData, { className: "startUpCardButtonContainer" }, [buttonAction1]);
                    actionComponents.push(divAction1);
                    return actionComponents;
                }
            };
            LetsGetStartedCardView.prototype.renderCardContentTemplate = function() {
                var _window = window;
                var letsGetStartedIconUrl = "";
                var cardContents = [];
                var letsGetStartedDescription = "";
                var divLetsGetStartedCardContentBody = "";
                var letsGetStartedCardIconAlt = "";
                if (this.props.areActionCardsActive == true) {
                    letsGetStartedIconUrl = _window.getAttributeInWindow("CDNURL") +
                        "/_static/_controls/ActionHubControl/CardsPreview.gif";
                    letsGetStartedCardIconAlt = _window.Xrm.Internal
                        .getResourceString("ActionCard.LetsGetStarted.CardsPreview", window.top);
                    var letsGetStartedCardTitle = _window.Xrm.Internal
                        .getResourceString("ActionCard.LetsGetStarted.ActivatedTitle", window.top);
                    var divLetsGetStartedCardTitle = Mscrm.Controls.VDOM
                        .div(this.props.cardData, { className: "startUpCardTitleText" }, letsGetStartedCardTitle);
                    letsGetStartedDescription = _window.Xrm.Internal
                        .getResourceString("ActionCard.LetsGetStarted.ActivatedBody", window.top);
                    var divLetsGetStartedDescription = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: "startUpCardDescriptionText", "aria-live": "polite" },
                            letsGetStartedDescription);
                    var divLetsGetStartedDescriptionContainer = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: "startupCardDescription" },
                            [divLetsGetStartedDescription]);
                    divLetsGetStartedCardContentBody = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: 'pullLeftClass startupCardDescriptionContainer' },
                            [divLetsGetStartedCardTitle, divLetsGetStartedDescriptionContainer]);
                } else {
                    letsGetStartedIconUrl = _window.getAttributeInWindow("CDNURL") +
                        "/_static/_controls/ActionHubControl/IconLetsGetStarted.png";
                    letsGetStartedCardIconAlt = _window.Xrm.Internal
                        .getResourceString("CardType_ToolTip_LetsGetStarted", window.top);
                    letsGetStartedDescription = ActionCard.ActionCardUtil
                        .getSegmentValueFromReferenceTokens(this.props.cardData.data.referencetokens,
                            "body",
                            "ResourceId",
                            "ResourceString");
                    var divLetsGetStartedDescription = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: "startUpCardDescriptionText" },
                            letsGetStartedDescription);
                    var divLetsGetStartedDescriptionContainer = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: "startupCardDescription" },
                            [divLetsGetStartedDescription]);
                    var divLetsGetStartedAction = this.renderActions();
                    var divLetsGetStartedActionContainer = Mscrm.Controls.VDOM
                        .div(this.props.cardData, {}, [divLetsGetStartedAction]);
                    divLetsGetStartedCardContentBody = Mscrm.Controls.VDOM
                        .div(this.props.cardData,
                            { className: 'pullLeftClass startupCardDescriptionContainer' },
                            [divLetsGetStartedDescriptionContainer, divLetsGetStartedActionContainer]);
                }
                var imgLetsGetsStartedIcon = Mscrm.Controls.VDOM
                    .img(this.props.cardData,
                    {
                        src: letsGetStartedIconUrl,
                        width: '100px',
                        height: '100px',
                        alt: letsGetStartedCardIconAlt,
                        "aria-label": letsGetStartedCardIconAlt
                    });
                var divImgLetsGetsStartedIcon = Mscrm.Controls.VDOM
                    .div(this.props.cardData,
                        { className: "startUpCardIconTips pullLeftClass" },
                        [imgLetsGetsStartedIcon]);
                var divLetsGetStartedCardInnerContent = Mscrm.Controls.VDOM
                    .div(this.props.cardData,
                        { className: "startUpCardInnerLayout" },
                        [divImgLetsGetsStartedIcon, divLetsGetStartedCardContentBody]);
                var divLetsGetStartedCardContent = Mscrm.Controls.VDOM
                    .div(this.props.cardData,
                        { className: "startUpCardLayout swipe-medium-data" },
                        [divLetsGetStartedCardInnerContent]);
                return divLetsGetStartedCardContent;
            };
            LetsGetStartedCardView.prototype.onRender = function() {
                return MscrmControls.CRMNow.GenericCardControl({
                    callerApp: "WebClient",
                    mode: this.props.cardData.mode,
                    cardData: this.props.cardData,
                    showPrimaryInfo: true,
                    showPrimaryTemplate: true,
                    showPrimaryTemplateSmall: false,
                    primaryTemplateData: null,
                    primaryTemplate: this.renderCardContentTemplate
                });
            };
            return LetsGetStartedCardView;
        })(Mscrm.Controls.VirtualComponentBase);
        ActionCard.LetsGetStartedCardView = LetsGetStartedCardView;
        ActionCard.LetsGetStartedCardControl = ReactUtils.createComponent(new LetsGetStartedCardView());
    })(ActionCard = MscrmControls.ActionCard || (MscrmControls.ActionCard = {}));
})(MscrmControls || (MscrmControls = {}));