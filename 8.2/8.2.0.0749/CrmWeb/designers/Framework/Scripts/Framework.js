var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            "use strict";
            Framework.AccessibilityHelperModule = angular.module("mscrmAccessibilityHelper", [])
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Common;
            (function(Common) {
                var AccessibilityUtility;
                (function(AccessibilityUtility) {
                    var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode,
                        ScriptUtilities = Mscrm.Designers.Common.Utility.ScriptUtilities;

                    function focusElement(element) { element != null && $(element).focus() }

                    AccessibilityUtility.focusElement = focusElement;

                    function toggleTabIndexes(nodes, tabIndexValue) {
                        if (nodes != null && nodes.length > 0)
                            for (var i = 0; i < nodes.length; i++)
                                if (window.navigator.userAgent.indexOf("MSIE 10") > 0) {
                                    var currentTabIndexValue = nodes[i].getAttribute(Constants.TAB_INDEX);
                                    currentTabIndexValue !== tabIndexValue &&
                                        nodes[i].setAttribute(Constants.TAB_INDEX, tabIndexValue)
                                } else nodes[i].setAttribute(Constants.TAB_INDEX, tabIndexValue)
                    }

                    AccessibilityUtility.toggleTabIndexes = toggleTabIndexes;

                    function getEventName(eventPrefix, groupName, id) {
                        return eventPrefix + "-" + groupName + "-" + id
                    }

                    AccessibilityUtility.getEventName = getEventName;

                    function isLastMC(element) {
                        return element[0].hasAttribute("data-islastmc") && element.attr("data-islastmc") == "1"
                    }

                    AccessibilityUtility.isLastMC = isLastMC;

                    function raiseFocusOnFirstMajorComponent(groupName, rootScope) {
                        var eventName = this.getEventName(EventNameConstants.MC_FOCUS_EVENT, groupName, "0");
                        rootScope.$broadcast(eventName)
                    }

                    AccessibilityUtility.raiseFocusOnFirstMajorComponent = raiseFocusOnFirstMajorComponent;

                    function raiseBlurEventOnParentMajorComponent(element, rootScope) {
                        var parent = element.parent(),
                            firstParentMajorComponent = parent.closest("[mscrm-major-component]");
                        if (firstParentMajorComponent != null && firstParentMajorComponent.length != 0) {
                            var parentGroupName = firstParentMajorComponent.attr("data-mcgroupname"),
                                parentDataCTabIndex = firstParentMajorComponent.attr("data-ctabindex"),
                                eventName = getEventName(EventNameConstants.MC_BLUR_EVENT,
                                    parentGroupName,
                                    parentDataCTabIndex);
                            rootScope.$broadcast(eventName)
                        } else
                            element.attr("data-mcgroupname") != null &&
                                raiseFocusOnFirstMajorComponent(element.attr("data-mcgroupname"), rootScope)
                    }

                    AccessibilityUtility.raiseBlurEventOnParentMajorComponent = raiseBlurEventOnParentMajorComponent;

                    function GetFirstVisibleElement(nodeList) {
                        for (var i = 0;
                            i < nodeList.length;
                            i++
                        )
                            if ($(nodeList[i]).is(":visible") &&
                                !$(nodeList[i]).is(":disabled") &&
                                $(nodeList[i]).attr("ng-disabled") !== "true") return nodeList[i]
                    }

                    AccessibilityUtility.GetFirstVisibleElement = GetFirstVisibleElement;

                    function GetLastVisibleElement(nodeList) {
                        for (var i = nodeList
                                .length -
                                1;
                            i >= 0;
                            i--)
                            if ($(nodeList[i]).is(":visible") &&
                                !$(nodeList[i]).is(":disabled") &&
                                $(nodeList[i]).attr("ng-disabled") !== "true") return nodeList[i]
                    }

                    AccessibilityUtility.GetLastVisibleElement = GetLastVisibleElement;

                    function GetTabbableElements(element, isCurrentlyInFocus) {
                        var firstChildMajorComponent = element[0].querySelector("[" + Constants.MAJOR_COMPONENT + "]");
                        if (firstChildMajorComponent != null) {
                            var groupName = firstChildMajorComponent.getAttribute(Constants.MCGROUPNAME);
                            return element[0].querySelectorAll('[data-mcgroupname="' + groupName + '"]')
                        } else if (isCurrentlyInFocus == true
                        )
                            return element[0]
                                .querySelectorAll('[tabindex="-1"]:not([disabled]),[tabindex="0"]:not([disabled])');
                        else return element[0].querySelectorAll('[tabindex="-1"]:not([disabled])')
                    }

                    AccessibilityUtility.GetTabbableElements = GetTabbableElements;

                    function SetAriaExpandedValue(expandStatus, element) {
                        if (expandStatus == true)
                            $(element).closest("[data-treeparentnode]").attr(Constants.ARIA_EXPANDED, "true");
                        else $(element).closest("[data-treeparentnode]").attr(Constants.ARIA_EXPANDED, "false")
                    }

                    AccessibilityUtility.SetAriaExpandedValue = SetAriaExpandedValue;

                    function SetAriaExpandedValueForElement(expandStatus, element) {
                        var expandedState = expandStatus ? "true" : "false";
                        element.setAttribute(Constants.ARIA_EXPANDED, expandedState)
                    }

                    AccessibilityUtility.SetAriaExpandedValueForElement = SetAriaExpandedValueForElement;

                    function CheckIfSectionNavigationShortcutPressed(e) {
                        var keyCode = e.which || e.keyCode;
                        if (ScriptUtilities.IsMacMachine() == true) {
                            if (keyCode == KeyCodes.F6KeyCode && e.metaKey == true) return true
                        } else if (keyCode == KeyCodes.F6KeyCode && e.ctrlKey == true) return true;
                        return false
                    }

                    AccessibilityUtility
                        .CheckIfSectionNavigationShortcutPressed = CheckIfSectionNavigationShortcutPressed;
                    var DirectionConstants = function() {
                        function DirectionConstants() {}

                        Object.defineProperty(DirectionConstants,
                            "HORIZONTAL_DIRECTION",
                            { "get": function() { return "horizontal" }, enumerable: true, configurable: true });
                        Object.defineProperty(DirectionConstants,
                            "VERTICAL_DIRECTION",
                            { "get": function() { return "vertical" }, enumerable: true, configurable: true });
                        Object.defineProperty(DirectionConstants,
                            "WAVE_HORIZONTAL_DIRECTION",
                            { "get": function() { return "wave-horizontal" }, enumerable: true, configurable: true });
                        Object.defineProperty(DirectionConstants,
                            "WAVE_VERTICAL_DIRECTION",
                            { "get": function() { return "wave-vertical" }, enumerable: true, configurable: true });
                        return DirectionConstants
                    }();
                    AccessibilityUtility.DirectionConstants = DirectionConstants;
                    var EventNameConstants = function() {
                        function EventNameConstants() {}

                        Object.defineProperty(EventNameConstants,
                            "MC_BLUR_EVENT",
                            { "get": function() { return "mcblur" }, enumerable: true, configurable: true });
                        Object.defineProperty(EventNameConstants,
                            "MC_FOCUS_EVENT",
                            { "get": function() { return "mcfocus" }, enumerable: true, configurable: true });
                        Object.defineProperty(EventNameConstants,
                            "MC_DEACTIVATE",
                            {
                                "get": function() { return "deactivate_major_component" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(EventNameConstants,
                            "MC_INIT_TELEPORTDEST",
                            {
                                "get": function() { return "mc_init_teleport_dest" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(EventNameConstants,
                            "FOCUSIN_TELEPORTDEST",
                            {
                                "get": function() { return "focusin.TeleportDest" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(EventNameConstants,
                            "DOMAttributeModified",
                            { "get": function() { return "DOMAttrModified" }, enumerable: true, configurable: true });
                        return EventNameConstants
                    }();
                    AccessibilityUtility.EventNameConstants = EventNameConstants;
                    var Constants = function() {
                        function Constants() {}

                        Object.defineProperty(Constants,
                            "TAB_INDEX",
                            { "get": function() { return "tabindex" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "MAJOR_COMPONENT",
                            {
                                "get": function() { return "mscrm-major-component" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "CTABINDEX",
                            { "get": function() { return "data-ctabindex" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "MCGROUPNAME",
                            { "get": function() { return "data-mcgroupname" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "ISLASTMC",
                            { "get": function() { return "data-islastmc" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "PRIMARY_MCGROUPNAME",
                            { "get": function() { return "primary" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "SKIPMCFOCUS",
                            { "get": function() { return "data-skipmcfocus" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "MCTELEPORT_MODE",
                            {
                                "get": function() { return "data-mcteleportmode" },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(Constants,
                            "TELEPORT_ID",
                            { "get": function() { return "data-teleportid" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "DESTINATION_ALWAYS_ONMODE",
                            {
                                "get": function() { return "data-destinationalwaysonmode" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "MCTELEPORT_DESTINATION",
                            {
                                "get": function() { return "data-mcteleport-destination" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "FLYOUTSRC_ID",
                            { "get": function() { return "data-flyoutsrc-id" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "ISFLYOUT_SRC",
                            { "get": function() { return "data-isflyout-src" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "PARENT_TREE_NODE",
                            {
                                "get": function() { return "data-treeparentnode" },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(Constants,
                            "ARIA_EXPANDED",
                            { "get": function() { return "aria-expanded" }, enumerable: true, configurable: true });
                        Object.defineProperty(Constants,
                            "FOCUS_ELEMENT_ID",
                            {
                                "get": function() { return "data-focuselementid" },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(Constants,
                            "DISABLE_FOCUS_CSSCLASS",
                            {
                                "get": function() { return "mscrm-DisableFocusOnKeydown" },
                                enumerable: true,
                                configurable: true
                            });
                        return Constants
                    }();
                    AccessibilityUtility.Constants = Constants
                })(AccessibilityUtility = Common.AccessibilityUtility || (Common.AccessibilityUtility = {}))
            })(Common = Framework.Common || (Framework.Common = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Common;
            (function(Common) {
                var Mutation;
                (function(Mutation) {
                    "use strict";
                    var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                        AttributeMutationObserverUtility = function() {
                            function AttributeMutationObserverUtility() {
                                this.observers = [];
                                this.elements = [];
                                this.attributeFilter = []
                            }

                            AttributeMutationObserverUtility.prototype
                                .observeForMutation = function(elements, mutationCallback, attributeFilter) {
                                    if (attributeFilter === void 0) attributeFilter = null;
                                    this.elements = elements;
                                    this.mutationCallback = mutationCallback;
                                    this.attributeFilter = attributeFilter;
                                    if (window.navigator.userAgent.indexOf("MSIE 10") > 0) this.isIE10Client = true;
                                    else this.isIE10Client = false;
                                    if (this.elements != null) {
                                        this.mutationEventCallback = this.mutationEventsCallBack.bind(this);
                                        for (var i = 0; i < this.elements.length; ++i)
                                            if (this
                                                .isIE10Client ==
                                                true)
                                                this.elements[i]
                                                    .addEventListener(AccessibilityUtility.EventNameConstants
                                                        .DOMAttributeModified,
                                                        this.mutationEventCallback);
                                            else {
                                                var observer = new
                                                    MutationObserver(this.mutationObserverCallback.bind(this));
                                                if (attributeFilter != null
                                                )
                                                    observer
                                                        .observe(elements[i],
                                                            { attributes: true, attributeFilter: attributeFilter });
                                                else observer.observe(elements[i], { attributes: true });
                                                this.observers.push(observer)
                                            }
                                    }
                                };
                            AttributeMutationObserverUtility.prototype.mutationObserverCallback = function(records) {
                                for (var nodes = [], i = 0; i < records.length; i++) nodes.push(records[i].target);
                                this.mutationCallback(nodes)
                            };
                            AttributeMutationObserverUtility.prototype.mutationEventsCallBack = function(e) {
                                for (var nodes = [], i = 0; i < this.attributeFilter.length; i++)
                                    if (e.target.getAttribute(this.attributeFilter[i]) != null) {
                                        nodes.push(e.target);
                                        break
                                    }
                                nodes.length > 0 && this.mutationCallback(nodes)
                            };
                            AttributeMutationObserverUtility.prototype.disconnect = function() {
                                if (this.isIE10Client == true)
                                    for (var i = 0;
                                        i < this.elements.length;
                                        i++
                                    )
                                        this.elements[i]
                                            .removeEventListener(AccessibilityUtility.EventNameConstants
                                                .DOMAttributeModified,
                                                this.mutationEventCallback);
                                else for (var i = 0; i < this.observers.length; i++) this.observers[i].disconnect()
                            };
                            return AttributeMutationObserverUtility
                        }();
                    Mutation.AttributeMutationObserverUtility = AttributeMutationObserverUtility
                })(Mutation = Common.Mutation || (Common.Mutation = {}))
            })(Common = Framework.Common || (Framework.Common = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Common;
            (function(Common) {
                var Mutation;
                (function(Mutation) {
                    "use strict";
                    var Mutationutility = function() {
                        function Mutationutility() {}

                        Mutationutility.prototype.observeForMutation = function(element, mutationCallback) {
                            this.element = element;
                            this.mutationCallback = mutationCallback;
                            this.mutationCallBackEventListener = mutationCallback.bind(this);
                            if (window.navigator.userAgent.indexOf("MSIE 10") > 0) {
                                element[0].addEventListener("DOMNodeInserted",
                                    this.mutationCallBackEventListener,
                                    false);
                                element[0]
                                    .addEventListener("DOMNodeRemoved", this.mutationCallBackEventListener, false);
                                element[0].addEventListener("DOMSubtreeModified",
                                    this.mutationCallBackEventListener,
                                    false)
                            } else {
                                this.observer = new MutationObserver(this.mutationHandler.bind(this));
                                this.observer.observe(element[0], { childList: true, subtree: true })
                            }
                        };
                        Mutationutility.prototype.disconnect = function() {
                            if (window.navigator.userAgent.indexOf("MSIE 10") > 0) {
                                this.element[0]
                                    .removeEventListener("DOMNodeInserted", this.mutationCallBackEventListener);
                                this.element[0]
                                    .removeEventListener("DOMNodeRemoved", this.mutationCallBackEventListener);
                                this.element[0]
                                    .removeEventListener("DOMSubtreeModified", this.mutationCallBackEventListener)
                            } else this.observer.disconnect()
                        };
                        Mutationutility.prototype
                            .mutationHandler = function(records) { this.mutationCallback(records) };
                        return Mutationutility
                    }();
                    Mutation.Mutationutility = Mutationutility
                })(Mutation = Common.Mutation || (Common.Mutation = {}))
            })(Common = Framework.Common || (Framework.Common = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var KeyCode = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    ArrowKeyNavigationController = function() {
                        function ArrowKeyNavigationController() {}

                        ArrowKeyNavigationController.prototype
                            .findElementWithIndexAndFocus = function(arrowKeyCode, currentItemIndex, nodeList) {
                                var nextItemIndex = currentItemIndex, itemToFocus = null;
                                if (arrowKeyCode == KeyCode.RightArrowKeyCode ||
                                    arrowKeyCode == KeyCode.DownArrowKeyCode) {
                                    nextItemIndex = currentItemIndex + 1;
                                    var circularIndex = (nextItemIndex + nodeList.length) % nodeList.length;
                                    itemToFocus = this.findNextVisibleArrowEnabledElement(nodeList, circularIndex)
                                } else {
                                    nextItemIndex = currentItemIndex - 1;
                                    var circularIndex = (nextItemIndex + nodeList.length) % nodeList.length;
                                    itemToFocus = this.findPreviousVisibleArrowEnabledElement(nodeList, circularIndex)
                                }
                                itemToFocus != null && AccessibilityUtility.focusElement(itemToFocus)
                            };
                        ArrowKeyNavigationController.prototype
                            .findNextVisibleArrowEnabledElement =
                            function(nodeList, startIndex) {
                                for (var i = startIndex;
                                    i < nodeList.length;
                                    i++
                                ) if ($(nodeList[i]).is(":visible")) return nodeList[i]
                            };
                        ArrowKeyNavigationController.prototype
                            .findPreviousVisibleArrowEnabledElement =
                            function(nodeList, startIndex) {
                                for (var i = startIndex;
                                    i >= 0;
                                    i--
                                ) if ($(nodeList[i]).is(":visible")) return nodeList[i]
                            };
                        ArrowKeyNavigationController.prototype
                            .findElementValidateAndFocusElement = function(e, arrowKeyCode, element) {
                                var nodeList = element[0].querySelectorAll('[tabindex="0"],[mscrm-major-component]');
                                if (nodeList != null && nodeList.length > 0) {
                                    var currentIndex = $(nodeList).index(e.target);
                                    this.findElementWithIndexAndFocus(arrowKeyCode, currentIndex, nodeList)
                                }
                                e.preventDefault();
                                e.stopImmediatePropagation()
                            };
                        ArrowKeyNavigationController.prototype
                            .findParentValidateAndFocus = function(e, arrowKeyDirection, element) {
                                e.preventDefault();
                                var parentNodes = element[0]
                                    .querySelectorAll('[arrow-parent-node][tabindex="0"],[mscrm-major-component]');
                                if (parentNodes != null && parentNodes.length > 0) {
                                    var currentIndex = $(parentNodes).index($(e.target).closest("[arrow-parent-node]"));
                                    this.findElementWithIndexAndFocus(arrowKeyDirection, currentIndex, parentNodes)
                                }
                            };
                        ArrowKeyNavigationController.prototype.arrowKeyNavigationHandler = function(e, element) {
                            var arrowDirection = element[0].getAttribute("data-arrow-direction"), that = this;
                            if (arrowDirection === AccessibilityUtility.DirectionConstants.WAVE_HORIZONTAL_DIRECTION)
                                element.off("keydown.waveHorizontal").on("keydown.waveHorizontal",
                                    function(e) {
                                        var keyCode = e.which || e.keyCode;
                                        switch (keyCode) {
                                        case KeyCode.LeftArrowKeyCode:
                                            that.findParentValidateAndFocus(e, KeyCode.LeftArrowKeyCode, element);
                                            break;
                                        case KeyCode.RightArrowKeyCode:
                                            that.findParentValidateAndFocus(e, KeyCode.RightArrowKeyCode, element)
                                        }
                                    });
                            else if (arrowDirection === AccessibilityUtility.DirectionConstants.WAVE_VERTICAL_DIRECTION)
                                element.off("keydown.waveVertical").on("keydown.waveVertical",
                                    function(e) {
                                        var keyCode = e.which || e.keyCode;
                                        switch (keyCode) {
                                        case KeyCode.DownArrowKeyCode:
                                            that.findParentValidateAndFocus(e, KeyCode.DownArrowKeyCode, element);
                                            break;
                                        case KeyCode.UpArrowKeyCode:
                                            that.findParentValidateAndFocus(e, KeyCode.UpArrowKeyCode, element)
                                        }
                                    });
                            else if (arrowDirection === AccessibilityUtility.DirectionConstants.HORIZONTAL_DIRECTION)
                                element.off("keydown.horizontal").on("keydown.horizontal",
                                    function(e) {
                                        var keyCode = e.which || e.keyCode;
                                        switch (keyCode) {
                                        case KeyCode.LeftArrowKeyCode:
                                            that
                                                .findElementValidateAndFocusElement(e,
                                                    KeyCode.LeftArrowKeyCode,
                                                    element);
                                            break;
                                        case KeyCode.RightArrowKeyCode:
                                            that
                                                .findElementValidateAndFocusElement(e,
                                                    KeyCode.RightArrowKeyCode,
                                                    element)
                                        }
                                    });
                            else
                                arrowDirection === AccessibilityUtility.DirectionConstants.VERTICAL_DIRECTION &&
                                    element.off("keydown.vertical").on("keydown.vertical",
                                        function(e) {
                                            var keyCode = e.which || e.keyCode;
                                            switch (keyCode) {
                                            case KeyCode.DownArrowKeyCode:
                                                that
                                                    .findElementValidateAndFocusElement(e,
                                                        KeyCode.DownArrowKeyCode,
                                                        element);
                                                break;
                                            case KeyCode.UpArrowKeyCode:
                                                that
                                                    .findElementValidateAndFocusElement(e,
                                                        KeyCode.UpArrowKeyCode,
                                                        element)
                                            }
                                        })
                        };
                        ArrowKeyNavigationController.verticalKeyDownCount = 0;
                        ArrowKeyNavigationController.horizontalKeyDownCount = 0;
                        return ArrowKeyNavigationController
                    }();
                Controllers.ArrowKeyNavigationController = ArrowKeyNavigationController;
                Framework.AccessibilityHelperModule
                    .controller("ArrowKeyNavigationController", ArrowKeyNavigationController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    EventName = Mscrm.Designers.Framework.Common.AccessibilityUtility.EventNameConstants,
                    Constants = Mscrm.Designers.Framework.Common.AccessibilityUtility.Constants,
                    Mutation = Mscrm.Designers.Framework.Common.Mutation;
                (function(TabOrderFocusDirection) {
                    TabOrderFocusDirection[TabOrderFocusDirection["Forward"] = 0] = "Forward";
                    TabOrderFocusDirection[TabOrderFocusDirection["Backward"] = 1] = "Backward"
                })(Controllers.TabOrderFocusDirection || (Controllers.TabOrderFocusDirection = {}));
                var TabOrderFocusDirection = Controllers.TabOrderFocusDirection,
                    MajorComponentController = function() {
                        function MajorComponentController(scope, rootScope) {
                            this.scope = scope;
                            this.rootScope = rootScope;
                            this.currentMCTabOrderDirection = TabOrderFocusDirection.Forward;
                            this.isBlurEventRegistered = false;
                            this.isCurrentlyInFocus = false;
                            this.isTeleportMode = false;
                            this.isDestinationAlwaysOnMode = false;
                            this.scope.$on("$destroy", this.cleanup.bind(this))
                        }

                        MajorComponentController.prototype.readAndInitializeProperties = function(element) {
                            this.element = element;
                            this.tabbableElementsContainer = this.element;
                            if (parseInt(element.attr(Constants.ISLASTMC)) == 1) this.isLastMajorComponent = true;
                            else this.isLastMajorComponent = false;
                            this.groupName = element.attr(Constants.MCGROUPNAME);
                            this.tabindex = parseInt(element.attr(Constants.CTABINDEX));
                            if (this.groupName == Constants.PRIMARY_MCGROUPNAME) this.isPrimaryGroup = true;
                            else this.isPrimaryGroup = false
                        };
                        MajorComponentController.prototype.registerMajorComponentEvents = function() {
                            this.element.off("focus.majorComponentElement")
                                .on("focus.majorComponentElement", this.componentFocusHandler.bind(this));
                            this.element.off("focus.majorComponentChild")
                                .on("focus.majorComponentChild",
                                    "[tabindex],[mscrm-major-component]",
                                    this.componentFocusHandler.bind(this));
                            this.element.off("keydown.majorComponent")
                                .on("keydown.majorComponent", this.handleKeyPressEvent.bind(this));
                            var eventNameToListen = AccessibilityUtility
                                    .getEventName(AccessibilityUtility.EventNameConstants.MC_FOCUS_EVENT,
                                        this.groupName,
                                        this.element.attr(Constants.CTABINDEX)),
                                initTeleportDestEventName = AccessibilityUtility.EventNameConstants
                                    .MC_INIT_TELEPORTDEST +
                                    "-" +
                                    this.element.attr(Constants.TELEPORT_ID);
                            this.focusEventHandler != null && this.focusEventHandler();
                            this.focusEventHandler = this.rootScope
                                .$on(eventNameToListen, this.handleMCFocusEvent.bind(this));
                            this.initTeleportDestHandler != null && this.initTeleportDestHandler();
                            this.initTeleportDestHandler = this.rootScope
                                .$on(initTeleportDestEventName, this.InitTeleportDestEvent.bind(this));
                            if (this.isLastMajorComponent) {
                                var eventName = AccessibilityUtility
                                    .getEventName(AccessibilityUtility.EventNameConstants.MC_FOCUS_EVENT,
                                        this.groupName,
                                        "last");
                                this.lastFocusEventHandler != null && this.lastFocusEventHandler();
                                this.lastFocusEventHandler = this.rootScope
                                    .$on(eventName, this.handleMCFocusEvent.bind(this))
                            }
                            this.deactivateEventHandler != null && this.deactivateEventHandler();
                            this.deactivateEventHandler = this.rootScope
                                .$on(EventName.MC_DEACTIVATE, this.handleDeactivateMajorComponentEvent.bind(this));
                            this.isActive = false;
                            if (this.element.attr(Constants.MCTELEPORT_MODE) != undefined) {
                                this.teleportId = this.element.attr(Constants.TELEPORT_ID);
                                this.isTeleportMode = true;
                                this.teleportSrcElement = this.element;
                                if (this.element.attr(Constants
                                        .DESTINATION_ALWAYS_ONMODE) !=
                                    undefined) this.isDestinationAlwaysOnMode = true
                            }
                            this.registerMutationHandler();
                            this.element[0] == document.activeElement && this.focusSelfMajorComponentContainer()
                        };
                        MajorComponentController.prototype.cleanup = function() {
                            this.focusEventHandler();
                            this.deactivateEventHandler();
                            this.initTeleportDestHandler != null && this.initTeleportDestHandler();
                            this.lastFocusEventHandler != null && this.lastFocusEventHandler();
                            this.lastChildMCFocusOutHandler != null && this.lastChildMCFocusOutHandler();
                            this.deRegisterFocusOutHandlerOnFirstElement();
                            this.deRegisterFocusOutHandlerOnLastElement();
                            this.tabbableContainerMutationObserver != null &&
                                this.tabbableContainerMutationObserver.disconnect()
                        };
                        MajorComponentController.prototype.initializeConfig = function() {
                            this.tabbableElements = this.getTabbableElements(this.tabbableElementsContainer);
                            this.registerFocusOutHandlerOnLastElement();
                            this.registerFocusOutHandlerOnFirstElement();
                            this.registerChildAttributeMutationHandler()
                        };
                        MajorComponentController.prototype.resetConfig = function() {
                            this.deRegisterFocusOutHandlerOnLastElement();
                            this.deRegisterFocusOutHandlerOnFirstElement();
                            this.tabbableElements = null;
                            if (this.ngDisabledAttributeObserver != null) {
                                this.ngDisabledAttributeObserver.disconnect();
                                this.ngDisabledAttributeObserver = null
                            }
                        };
                        MajorComponentController.prototype.registerChildAttributeMutationHandler = function() {
                            var nodeList = this.getTabbableElementsWithNGDisabled();
                            if (this.ngDisabledAttributeObserver != null) {
                                this.ngDisabledAttributeObserver.disconnect();
                                this.ngDisabledAttributeObserver = null
                            }
                            this.ngDisabledAttributeObserver = new Mutation.AttributeMutationObserverUtility;
                            this.ngDisabledAttributeObserver
                                .observeForMutation(nodeList,
                                    this.handleNGDisabledAttributeMutation.bind(this),
                                    ["disabled"])
                        };
                        MajorComponentController.prototype.handleNGDisabledAttributeMutation = function(records) {
                            if (this.isCurrentlyInFocus == true) {
                                this.activateTabbingOfChildren();
                                for (var i = 0;
                                    i < records.length;
                                    i++
                                ) records[i] == document.activeElement && this.focusFirstTabbableElement();
                                this.resetConfig();
                                this.initializeConfig()
                            }
                        };
                        MajorComponentController.prototype.registerMutationHandler = function() {
                            this.tabbableContainerMutationObserver != null &&
                                this.tabbableContainerMutationObserver.disconnect();
                            if (!this.hasChildMajorComponents()) {
                                this.tabbableContainerMutationObserver = new Mutation.Mutationutility;
                                this.tabbableContainerMutationObserver
                                    .observeForMutation(this.tabbableElementsContainer,
                                        this.handleTabbableElementsContainerMutation.bind(this))
                            }
                        };
                        MajorComponentController.prototype.handleTabbableElementsContainerMutation = function(records) {
                            if (this.isCurrentlyInFocus == true) {
                                this.activateTabbingOfChildren();
                                (document.activeElement == null || document.activeElement.nodeName == "BODY") &&
                                    this.focusFirstTabbableElement();
                                this.resetConfig();
                                this.initializeConfig()
                            }
                        };
                        MajorComponentController.prototype.handleKeyPressEvent = function(e) {
                            if (AccessibilityUtility.CheckIfSectionNavigationShortcutPressed(e)) {
                                e.preventDefault();
                                e.stopPropagation();
                                this.deActivateTabbingOfChildren();
                                this.resetConfig();
                                if (e.shiftKey == false) this.focusNextValidMajorComponent();
                                else this.focusPreviousValidMajorComponent(TabOrderFocusDirection.Forward, true)
                            } else if (e.target == this.tabbableElementsContainer[0] ||
                                this.teleportSrcElement != null && e.target == this.teleportSrcElement[0])
                                if (e.keyCode == KeyCodes.TabKeyCode)
                                    if (e.shiftKey == true) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.deActivateTabbingOfChildren();
                                        this.resetConfig();
                                        this.focusPreviousValidMajorComponent()
                                    } else if (this.isTeleportMode == true) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        var teleportDestination = this.getTeleportDestinationElement();
                                        if (teleportDestination != null) {
                                            this.initializeTeleportDestination(teleportDestination);
                                            this.focusFirstTabbableElement()
                                        } else this.focusNextValidMajorComponent()
                                    }
                        };
                        MajorComponentController.prototype.InitTeleportDestEvent = function(e) {
                            var teleportDestination = this.getTeleportDestinationElement();
                            teleportDestination != null &&
                                teleportDestination.length != 0 &&
                                this.initializeTeleportDestination(teleportDestination)
                        };
                        MajorComponentController.prototype.handleMCFocusEvent = function(e, args) {
                            if (args != null && args.length != 0) this.currentMCTabOrderDirection = args[0];
                            else this.currentMCTabOrderDirection = TabOrderFocusDirection.Forward;
                            if (this.isTeleportMode != true &&
                                this.tabbableElementsContainer.length != 0 &&
                                this.tabbableElementsContainer[0].querySelectorAll('[tabindex="-1"]:not([disabled])')
                                .length ==
                                0) {
                                if (args != null && args.length > 1 && args[1] == true
                                ) this.focusPreviousValidMajorComponent(TabOrderFocusDirection.Forward);
                                else if (this
                                    .currentMCTabOrderDirection ==
                                    TabOrderFocusDirection.Forward) this.focusNextValidMajorComponent();
                                else
                                    this.currentMCTabOrderDirection == TabOrderFocusDirection.Backward &&
                                        this.focusPreviousValidMajorComponent();
                                return
                            }
                            this.focusSelfMajorComponentContainer()
                        };
                        MajorComponentController.prototype.componentFocusHandler = function(e) {
                            if (e.type != "focusin" || this.isCurrentlyInFocus == false) {
                                this.isActive = true;
                                if (this.tabbableElementsContainer.find("[" + Constants.MAJOR_COMPONENT + "]")
                                    .length !=
                                    0) {
                                    var firstChildMajorComponent = this.tabbableElementsContainer
                                            .find("[" + Constants.MAJOR_COMPONENT + "]:first"),
                                        groupName = firstChildMajorComponent.attr(Constants.MCGROUPNAME),
                                        majorComponentSelector = '[mscrm-major-component][data-mcgroupname="' +
                                            groupName +
                                            '"][tabindex="-1"]';
                                    this.tabbableElementsContainer.find(majorComponentSelector).length != 0 &&
                                        this.initializeConfig()
                                } else this.initializeConfig();
                                this.activateTabbingOfChildren();
                                (this.isPrimaryGroup ||
                                        parseInt(this.tabbableElementsContainer.attr(Constants.TAB_INDEX)) == 0) &&
                                    this.rootScope.$broadcast(EventName.MC_DEACTIVATE);
                                if (this.currentMCTabOrderDirection ==
                                    Mscrm.Designers.Framework.Controllers.TabOrderFocusDirection
                                    .Backward) this.focusLastTabbableElement();
                                else if (this.tabbableElementsContainer.attr(Constants.SKIPMCFOCUS) != undefined) {
                                    var firstChild = this.tabbableElementsContainer[0].querySelector('[tabindex="0"]');
                                    firstChild.focus()
                                }
                                if (e.type != "focusin")
                                    if (this.tabbableElementsContainer.attr(Constants.SKIPMCFOCUS) != undefined) {
                                        var firstChild = this.tabbableElementsContainer[0]
                                            .querySelector('[tabindex="0"]');
                                        firstChild != null && firstChild.focus()
                                    }
                            }
                        };
                        MajorComponentController.prototype.handleDeactivateMajorComponentEvent = function(e) {
                            if (this.isActive &&
                            (this.tabbableElementsContainer.has(document.activeElement).length == 0 &&
                                !this.element.is(document.activeElement) ||
                                this.teleportSrcElement != null &&
                                this.teleportSrcElement.has(document.activeElement).length == 0 &&
                                !this.teleportSrcElement.is(document.activeElement))) {
                                this.deActivateTabbingOfChildren();
                                this.resetConfig();
                                this.isActive = false
                            }
                        };
                        MajorComponentController.prototype.registerFocusOutHandlerOnLastElement = function() {
                            if (this.tabbableElementsContainer.length != 0 &&
                                this.tabbableElementsContainer[0]
                                .querySelector("[" + Constants.MAJOR_COMPONENT + "]") !=
                                null) {
                                if (this.isBlurEventRegistered == false) {
                                    var eventNameToListen = AccessibilityUtility
                                        .getEventName(EventName
                                            .MC_BLUR_EVENT,
                                            this.groupName,
                                            this.tabindex.toString());
                                    this.lastChildMCFocusOutHandler != null && this.lastChildMCFocusOutHandler();
                                    this.lastChildMCFocusOutHandler = this.rootScope
                                        .$on(eventNameToListen, this.handleLastChildMajorComponentBlur.bind(this));
                                    this.isBlurEventRegistered = true
                                }
                            } else {
                                this.previousLastElement = this.getLastVisibleElement(this.tabbableElements);
                                if (this.previousLastElement != null) {
                                    this.focusOutHandlerOfLastElement = this.handleFocusOutOnLastElement.bind(this);
                                    this.previousLastElement
                                        .addEventListener("keydown", this.focusOutHandlerOfLastElement)
                                }
                            }
                        };
                        MajorComponentController.prototype.deRegisterFocusOutHandlerOnLastElement = function() {
                            if (this.previousLastElement != null) {
                                this.previousLastElement
                                    .removeEventListener("keydown", this.focusOutHandlerOfLastElement);
                                this.previousLastElement = null
                            }
                        };
                        MajorComponentController.prototype.registerFocusOutHandlerOnFirstElement = function() {
                            this.previousFirstElement = this.getFirstVisibleElement(this.tabbableElements);
                            if (this.previousFirstElement != null &&
                                !this.previousFirstElement.hasAttribute(Constants.MAJOR_COMPONENT)) {
                                this.focusOutHandlerOfFirstElement = this.handleFocusOutOnFirstElement.bind(this);
                                this.previousFirstElement
                                    .addEventListener("keydown", this.focusOutHandlerOfFirstElement)
                            }
                        };
                        MajorComponentController.prototype.deRegisterFocusOutHandlerOnFirstElement = function() {
                            if (this.previousFirstElement != null &&
                                !this.previousFirstElement.hasAttribute(Constants.MAJOR_COMPONENT)) {
                                this.previousFirstElement
                                    .removeEventListener("keydown", this.focusOutHandlerOfFirstElement);
                                this.previousFirstElement = null
                            }
                        };
                        MajorComponentController.prototype.handleFocusOutOnLastElement = function(e) {
                            var code = e.keyCode ? e.keyCode : e.which;
                            if (e.target == this.previousLastElement && code == KeyCodes.TabKeyCode)
                                if (e.shiftKey != true) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.deActivateTabbingOfChildren();
                                    this.resetConfig();
                                    this.focusNextValidMajorComponent()
                                }
                        };
                        MajorComponentController.prototype.handleFocusOutOnFirstElement = function(e) {
                            var code = e.keyCode ? e.keyCode : e.which;
                            if (code == KeyCodes.TabKeyCode)
                                if (e.shiftKey == true &&
                                (e
                                    .target ==
                                    this.getFirstVisibleElement(this.tabbableElements) ||
                                    this.isTeleportMode)) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.deActivateTabbingOfChildren();
                                    this.resetConfig();
                                    if (this.element.attr(Constants
                                            .SKIPMCFOCUS) !=
                                        undefined) this.focusPreviousValidMajorComponent();
                                    else this.focusSelfMajorComponentContainer()
                                }
                        };
                        MajorComponentController.prototype.handleLastChildMajorComponentBlur = function() {
                            this.deActivateTabbingOfChildren();
                            this.resetConfig();
                            if (this.isLastMajorComponent)
                                AccessibilityUtility.raiseBlurEventOnParentMajorComponent(this.element, this.rootScope);
                            else {
                                var eventName = AccessibilityUtility
                                    .getEventName(EventName.MC_FOCUS_EVENT,
                                        this.groupName,
                                        (this.tabindex + 1).toString());
                                this.rootScope.$broadcast(eventName)
                            }
                        };
                        MajorComponentController.prototype.focusFirstTabbableElement = function() {
                            if (this.tabbableElementsContainer[0]
                                .querySelector("[" + Constants.MAJOR_COMPONENT + "]") !=
                                null) {
                                var childMajorComponent = this.tabbableElementsContainer[0]
                                        .querySelector("[" + Constants.MAJOR_COMPONENT + "]"),
                                    eventNameToBrodcast = AccessibilityUtility
                                        .getEventName(EventName.MC_FOCUS_EVENT,
                                            childMajorComponent.getAttribute(Constants.MCGROUPNAME),
                                            "0");
                                this.rootScope.$broadcast(eventNameToBrodcast, [TabOrderFocusDirection.Forward])
                            } else {
                                var firstTabbableElement = this.getFirstVisibleElement(this.tabbableElements);
                                firstTabbableElement != null && firstTabbableElement.focus()
                            }
                            this.currentMCTabOrderDirection = TabOrderFocusDirection.Forward
                        };
                        MajorComponentController.prototype
                            .handleTeleportDestinationVisibilityChanges = function(newValue, oldValue) {
                                if (oldValue == false && newValue == true) {
                                    this.initializeTeleportDestination(this.getTeleportDestinationElement());
                                    var lastTabbableElement = this.getLastVisibleElement(this.tabbableElements);
                                    lastTabbableElement != null && lastTabbableElement.focus();
                                    this.currentMCTabOrderDirection = TabOrderFocusDirection.Forward;
                                    this.teleportWatchDeregisterMethod()
                                }
                            };
                        MajorComponentController.prototype
                            .checkMethodForTeleportDestinationVisibility = function(scope) {
                                if ($("[data-mcteleport-destination=" + this.teleportId + "]")
                                    .is(":visible") ==
                                    false) return false;
                                return true
                            };
                        MajorComponentController.prototype.focusLastTabbableElement = function() {
                            if (this.isTeleportMode == true && this.isDestinationAlwaysOnMode == true)
                                if (this
                                    .getTeleportDestinationElement() ==
                                    null)
                                    this.teleportWatchDeregisterMethod = this.scope
                                        .$watch(this.checkMethodForTeleportDestinationVisibility.bind(this),
                                            this.handleTeleportDestinationVisibilityChanges.bind(this));
                                else {
                                    var lastTabbableElement = this.getLastVisibleElement(this.tabbableElements);
                                    lastTabbableElement != null && lastTabbableElement.focus()
                                }
                            else if (this.tabbableElementsContainer[0]
                                .querySelector("[" + Constants.MAJOR_COMPONENT + "]") !=
                                null) {
                                var childMajorComponent = this.tabbableElementsContainer[0]
                                        .querySelectorAll("[" + Constants.MAJOR_COMPONENT + "]"),
                                    lastMajorComponent = childMajorComponent[childMajorComponent.length - 1],
                                    eventNameToBrodcast = null;
                                if (lastMajorComponent
                                    .getAttribute(Constants
                                        .ISLASTMC))
                                    eventNameToBrodcast = AccessibilityUtility
                                        .getEventName(EventName.MC_FOCUS_EVENT,
                                            lastMajorComponent.getAttribute(Constants.MCGROUPNAME),
                                            "last");
                                else
                                    eventNameToBrodcast = AccessibilityUtility
                                        .getEventName(EventName.MC_FOCUS_EVENT,
                                            lastMajorComponent.getAttribute(Constants.MCGROUPNAME),
                                            lastMajorComponent.getAttribute(Constants.CTABINDEX));
                                this.rootScope.$broadcast(eventNameToBrodcast, [TabOrderFocusDirection.Backward])
                            } else {
                                var lastTabbableElement = this.getLastVisibleElement(this.tabbableElements);
                                lastTabbableElement != null && lastTabbableElement.focus()
                            }
                            this.currentMCTabOrderDirection = TabOrderFocusDirection.Forward
                        };
                        MajorComponentController.prototype.focusNextValidMajorComponent = function() {
                            if (this
                                .checkIsLastMajorComponentInItsGroup() !=
                                true) this.raiseFocusOnNextMajorComponent();
                            else if (this
                                .isPrimaryGroup ==
                                true)
                                AccessibilityUtility.raiseFocusOnFirstMajorComponent(this.groupName, this.rootScope);
                            else this.raiseFocusOutFromGroupEvent()
                        };
                        MajorComponentController.prototype
                            .focusPreviousValidMajorComponent =
                            function(tabOrderDirection, isShiftSectionNavigationShortcut) {
                                if (tabOrderDirection === void 0) tabOrderDirection = TabOrderFocusDirection.Backward;
                                if (isShiftSectionNavigationShortcut === void 0
                                ) isShiftSectionNavigationShortcut = false;
                                if (this.tabindex != 0)
                                    this
                                        .raiseFocusOnPreviousMajorComponent([
                                            tabOrderDirection, isShiftSectionNavigationShortcut
                                        ]);
                                else if (this
                                    .isPrimaryGroup ==
                                    true) this.raiseFocusOnLastMajorComponent([tabOrderDirection]);
                                else
                                    this
                                        .raiseFocusOnFirstParentMajorComponent(this.element,
                                            [TabOrderFocusDirection.Forward])
                            };
                        MajorComponentController.prototype.raiseFocusOnNextMajorComponent = function() {
                            var eventName = AccessibilityUtility
                                .getEventName(EventName.MC_FOCUS_EVENT, this.groupName, (this.tabindex + 1).toString());
                            this.rootScope.$broadcast(eventName, [TabOrderFocusDirection.Forward])
                        };
                        MajorComponentController.prototype.raiseFocusOnLastMajorComponent = function(args) {
                            if (args === void 0) args = null;
                            var eventName = AccessibilityUtility
                                .getEventName(EventName.MC_FOCUS_EVENT, this.groupName, "last");
                            this.rootScope.$broadcast(eventName, args)
                        };
                        MajorComponentController.prototype.raiseFocusOnPreviousMajorComponent = function(args) {
                            if (args === void 0) args = null;
                            var eventName = AccessibilityUtility
                                .getEventName(EventName.MC_FOCUS_EVENT, this.groupName, (this.tabindex - 1).toString());
                            this.rootScope.$broadcast(eventName, args)
                        };
                        MajorComponentController.prototype
                            .raiseFocusOnFirstParentMajorComponent = function(element, args) {
                                if (args === void 0) args = null;
                                var parent = element.parent(),
                                    firstParentMajorComponent = parent.closest("[mscrm-major-component]");
                                if (firstParentMajorComponent != null && firstParentMajorComponent.length != 0) {
                                    var parentGroupName = firstParentMajorComponent.attr(Constants.MCGROUPNAME),
                                        parentDataCTabIndex = firstParentMajorComponent.attr(Constants.CTABINDEX),
                                        eventName = AccessibilityUtility
                                            .getEventName(EventName.MC_FOCUS_EVENT,
                                                parentGroupName,
                                                parentDataCTabIndex.toString());
                                    this.rootScope.$broadcast(eventName, args)
                                }
                            };
                        MajorComponentController.prototype
                            .raiseFocusOutFromGroupEvent = function() {
                                AccessibilityUtility.raiseBlurEventOnParentMajorComponent(this.element, this.rootScope)
                            };
                        MajorComponentController.prototype.getTabbableElementsWithNGDisabled = function() {
                            for (var nodeList = [], i = 0;
                                i < this.tabbableElements.length;
                                ++i
                            )
                                this.tabbableElements[i].getAttribute("ng-disabled") &&
                                    nodeList.push(this.tabbableElements[i]);
                            return nodeList
                        };
                        MajorComponentController.prototype.hasChildMajorComponents = function() {
                            if (this.tabbableElementsContainer.find("[" + Constants.MAJOR_COMPONENT + "]")
                                .length ==
                                0) return false;
                            return true
                        };
                        MajorComponentController.prototype
                            .initializeTeleportDestination = function(teleportDestination) {
                                this.teleportSrcElement = this.element;
                                this.tabbableElementsContainer = teleportDestination;
                                this.tabbableElementsContainer.off("keydown.majorComponent")
                                    .on("keydown.majorComponent", this.handleKeyPressEvent.bind(this));
                                this.resetConfig();
                                this.initializeConfig();
                                this.activateTabbingOfChildren();
                                this.tabbableContainerMutationObserver != null &&
                                    this.tabbableContainerMutationObserver.disconnect();
                                this.registerMutationHandler()
                            };
                        MajorComponentController.prototype.getTeleportDestinationElement = function() {
                            if (this.isTeleportMode == false) return null;
                            var destinationElement = $("[data-mcteleport-destination=" + this.teleportId + "]");
                            if ($(destinationElement).is(":visible") == false) return null;
                            return destinationElement
                        };
                        MajorComponentController.prototype.activateTabbingOfChildren = function() {
                            this.isCurrentlyInFocus = true;
                            this.reCalculateTabbableElements();
                            AccessibilityUtility.toggleTabIndexes(this.tabbableElements, "0")
                        };
                        MajorComponentController.prototype.activateMajorComponentElement = function() {
                            if (this
                                .isTeleportMode ==
                                true &&
                                this.teleportSrcElement != null) this.teleportSrcElement.attr(Constants.TAB_INDEX, "0");
                            else this.tabbableElementsContainer.attr(Constants.TAB_INDEX, "0")
                        };
                        MajorComponentController.prototype.deActivateMajorComponentElement = function() {
                            if (this
                                .isTeleportMode ==
                                true &&
                                this
                                .teleportSrcElement !=
                                null) this.teleportSrcElement.attr(Constants.TAB_INDEX, "-1");
                            else this.tabbableElementsContainer.attr(Constants.TAB_INDEX, "-1")
                        };
                        MajorComponentController.prototype.deActivateTabbingOfChildren = function() {
                            this.deActivateMajorComponentElement();
                            this.isCurrentlyInFocus = false;
                            AccessibilityUtility.toggleTabIndexes(this.tabbableElements, "-1")
                        };
                        MajorComponentController.prototype
                            .reCalculateTabbableElements = function() {
                                this.tabbableElements = this.getTabbableElements(this.tabbableElementsContainer)
                            };
                        MajorComponentController.prototype.checkIfAnyTabbableElementsExists = function(element) {
                            var tabbableElements = this.getTabbableElements(element);
                            if (tabbableElements.length == 0) return false;
                            else return true
                        };
                        MajorComponentController.prototype.focusSelfMajorComponentContainer = function() {
                            this.activateMajorComponentElement();
                            if (this
                                .isTeleportMode ==
                                true &&
                                this.teleportSrcElement != null) this.teleportSrcElement.focus();
                            else this.tabbableElementsContainer.focus()
                        };
                        MajorComponentController.prototype.getFirstVisibleElement = function(nodeList) {
                            if (nodeList != null)
                                for (var i = 0;
                                    i < nodeList.length;
                                    ++i
                                ) if ($(nodeList[i]).is(":visible")) return nodeList[i];
                            return null
                        };
                        MajorComponentController.prototype.getLastVisibleElement = function(nodeList) {
                            if (nodeList != null && nodeList.length != 0
                            )
                                for (var i = nodeList
                                        .length -
                                        1;
                                    i >= 0;
                                    i--) if ($(nodeList[i]).is(":visible")) return nodeList[i];
                            return null
                        };
                        MajorComponentController.prototype.checkIsLastMajorComponentInItsGroup = function() {
                            if (this.isLastMajorComponent == true) return true;
                            else {
                                var currentTabIndex = this.tabindex,
                                    majorComponentsOfSameGroup = $("[data-mcgroupname='" + this.groupName + "']")
                                        .filter(function() {
                                            return parseInt($(this).attr("data-ctabindex")) > currentTabIndex
                                        });
                                if (majorComponentsOfSameGroup.length == 0) return true;
                                return false
                            }
                        };
                        MajorComponentController.prototype.getTabbableElements = function(element) {
                            if (element.length != 0) {
                                var firstChildMajorComponent = element[0]
                                    .querySelector("[" + Constants.MAJOR_COMPONENT + "]");
                                if (firstChildMajorComponent != null) {
                                    var groupName = firstChildMajorComponent.getAttribute(Constants.MCGROUPNAME);
                                    return element[0].querySelectorAll('[data-mcgroupname="' + groupName + '"]')
                                } else if (this
                                    .isCurrentlyInFocus ==
                                    true)
                                    return element[0]
                                        .querySelectorAll('[tabindex="-1"]:not([disabled]),[tabindex="0"]:not([disabled])');
                                else return element[0].querySelectorAll('[tabindex="-1"]:not([disabled])')
                            }
                        };
                        MajorComponentController.$inject = ["$scope", "$rootScope"];
                        return MajorComponentController
                    }();
                Controllers.MajorComponentController = MajorComponentController;
                Framework.AccessibilityHelperModule
                    .controller("mscrmMajorComponentController", MajorComponentController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var KeyCode = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    EventName = Mscrm.Designers.Framework.Common.AccessibilityUtility.EventNameConstants,
                    TeleportFocusController = function() {
                        function TeleportFocusController(scope, rootScope) {
                            this.scope = scope;
                            this.rootScope = rootScope
                        }

                        TeleportFocusController.prototype.teleportSourceFocusHandler = function(element) {
                            var teleportId = element[0].getAttribute("data-teleport-source"),
                                destinationElement = $("[data-teleport-destination=" + teleportId + "]");
                            if (destinationElement.find("[tabindex]").length == 0) {
                                var closestParent = element.closest("[mscrm-major-component]");
                                if (AccessibilityUtility
                                    .isLastMC(closestParent))
                                    AccessibilityUtility
                                        .raiseBlurEventOnParentMajorComponent(closestParent, this.rootScope);
                                else {
                                    var currentDataCTabIndex = parseInt(closestParent.attr("data-ctabindex"));
                                    currentDataCTabIndex += 1;
                                    this.findGroupAndBroadcastFocusEvent(closestParent, currentDataCTabIndex.toString())
                                }
                            } else AccessibilityUtility.focusElement(destinationElement[0])
                        };
                        TeleportFocusController.prototype
                            .findGroupAndBroadcastFocusEvent = function(element, currentDataCTabIndex) {
                                var groupName = element.attr("data-mcgroupname"),
                                    eventName = AccessibilityUtility
                                        .getEventName(EventName.MC_FOCUS_EVENT, groupName, currentDataCTabIndex);
                                this.rootScope.$broadcast(eventName)
                            };
                        TeleportFocusController.prototype.getSourceElement = function(element) {
                            var teleportId = element[0].getAttribute("data-teleport-destination");
                            return $("[data-teleport-source=" + teleportId + "]")
                        };
                        TeleportFocusController.prototype.prepareNodeListAndDisableTabIndexes = function(element) {
                            var nodes = element[0].querySelectorAll('[tabindex="0"]');
                            AccessibilityUtility.toggleTabIndexes(nodes, "-1")
                        };
                        TeleportFocusController.prototype.teleportDestinationKeyDownHandler = function(e, element) {
                            var key = e.which || e.keyCode, sourceElement = this.getSourceElement(element);
                            switch (key) {
                            case KeyCode.TabKeyCode:
                                e.stopPropagation();
                                if (e.shiftKey && element[0].isSameNode(e.target)) {
                                    e.preventDefault();
                                    if (sourceElement[0] != null) {
                                        var closestParent = sourceElement.closest("[mscrm-major-component]"),
                                            parentDataCTabIndex = closestParent.attr("data-ctabindex");
                                        this.prepareNodeListAndDisableTabIndexes(element);
                                        this.findGroupAndBroadcastFocusEvent(closestParent, parentDataCTabIndex)
                                    }
                                }
                                break;
                            case KeyCode.F8KeyCode:
                                if (sourceElement[0] != null) {
                                    var closestParent = sourceElement.closest("[mscrm-major-component]"),
                                        currentDataCTabIndex = parseInt(closestParent.attr("data-ctabindex"));
                                    e.stopPropagation();
                                    if (e.shiftKey)
                                        if (currentDataCTabIndex > 0) {
                                            currentDataCTabIndex -= 1;
                                            this.prepareNodeListAndDisableTabIndexes(element);
                                            this
                                                .findGroupAndBroadcastFocusEvent(closestParent,
                                                    currentDataCTabIndex.toString())
                                        } else {
                                            this.prepareNodeListAndDisableTabIndexes(element);
                                            AccessibilityUtility
                                                .raiseBlurEventOnParentMajorComponent(sourceElement, this.rootScope)
                                        }
                                    else if (AccessibilityUtility.isLastMC(closestParent)) {
                                        this.prepareNodeListAndDisableTabIndexes(element);
                                        AccessibilityUtility
                                            .raiseBlurEventOnParentMajorComponent(sourceElement, this.rootScope);
                                        break
                                    } else {
                                        currentDataCTabIndex += 1;
                                        this.prepareNodeListAndDisableTabIndexes(element);
                                        this
                                            .findGroupAndBroadcastFocusEvent(closestParent,
                                                currentDataCTabIndex.toString())
                                    }
                                }
                                break;
                            case KeyCode.EscKeyCode:
                                if (element[0].hasAttribute("data-flyout-pane")) {
                                    this.prepareNodeListAndDisableTabIndexes(element);
                                    AccessibilityUtility.focusElement(sourceElement.parent()[0]);
                                    element.hide()
                                }
                                break
                            }
                        };
                        TeleportFocusController.$inject = ["$scope", "$rootScope"];
                        return TeleportFocusController
                    }();
                Controllers.TeleportFocusController = TeleportFocusController;
                Framework.AccessibilityHelperModule.controller("TeleportFocusController", TeleportFocusController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    DialogAccessibilityController = function() {
                        function DialogAccessibilityController(scope, modalDialogService) {
                            this.scope = scope;
                            this.modalDialogService = modalDialogService
                        }

                        DialogAccessibilityController.prototype.initializeConfig = function() {
                            this.tabbableElements = AccessibilityUtility.GetTabbableElements(this.element, true);
                            if (this.tabbableElements.length != 0) {
                                this.firstTabbableElement = AccessibilityUtility
                                    .GetFirstVisibleElement(this.tabbableElements);
                                this.lastTabbableElement = AccessibilityUtility
                                    .GetLastVisibleElement(this.tabbableElements);
                                this.firstActiveElementKeydownHandler = this.HandleKeydown.bind(this);
                                this.lastActiveElementKeydownHandler = this.HandleKeydown.bind(this);
                                this.firstTabbableElement
                                    .addEventListener("keydown", this.firstActiveElementKeydownHandler);
                                this.lastTabbableElement
                                    .addEventListener("keydown", this.lastActiveElementKeydownHandler);
                                AccessibilityUtility.toggleTabIndexes(this.tabbableElements, "0");
                                this.firstTabbableElement.focus()
                            }
                        };
                        DialogAccessibilityController.prototype.HandleKeydown = function(e) {
                            if (e.keyCode == KeyCodes.TabKeyCode) {
                                if (e.shiftKey != true) {
                                    if (e.target == this.lastTabbableElement) {
                                        this.firstTabbableElement.focus();
                                        e.preventDefault();
                                        e.stopPropagation()
                                    }
                                } else if (e.target == this.firstTabbableElement) {
                                    this.lastTabbableElement.focus();
                                    e.preventDefault()
                                }
                            } else if (e.keyCode == KeyCodes.EscKeyCode) {
                                var dialogParams = this.modalDialogService.ModalDialogParameter;
                                if (dialogParams != null && dialogParams.ShouldCancelOnEsc) {
                                    this.modalDialogService.reject(null);
                                    !this.scope.$$phase && this.scope.$apply();
                                    this.previousActiveElement.focus()
                                }
                            }
                        };
                        DialogAccessibilityController.$inject = ["$scope", "mscrmModalDialogService"];
                        return DialogAccessibilityController
                    }();
                Controllers.DialogAccessibilityController = DialogAccessibilityController;
                Framework.AccessibilityHelperModule
                    .controller("mscrmDialogAccessibilityController", DialogAccessibilityController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    EventName = Mscrm.Designers.Framework.Common.AccessibilityUtility.EventNameConstants,
                    InitTeleportDestController = function() {
                        function InitTeleportDestController(scope, rootScope) {
                            this.scope = scope;
                            this.rootScope = rootScope;
                            this.focusEventHandler = this.HandleFocusInEvent.bind(this);
                            this.scope.$on("$destroy", this.destroy.bind(this))
                        }

                        InitTeleportDestController.prototype
                            .RegisterEventOnTeleportDest = function() {
                                this.element.off(EventName.FOCUSIN_TELEPORTDEST)
                                    .on(EventName.FOCUSIN_TELEPORTDEST, this.focusEventHandler)
                            };
                        InitTeleportDestController.prototype.HandleFocusInEvent = function() {
                            var teleportSrcId = this.element
                                    .attr(AccessibilityUtility.Constants.MCTELEPORT_DESTINATION),
                                eventName = EventName.MC_INIT_TELEPORTDEST + "-" + teleportSrcId;
                            this.rootScope.$broadcast(eventName)
                        };
                        InitTeleportDestController.prototype
                            .destroy = function() {
                                this.element.off(EventName.FOCUSIN_TELEPORTDEST, this.focusEventHandler)
                            };
                        InitTeleportDestController.$inject = ["$scope", "$rootScope"];
                        return InitTeleportDestController
                    }();
                Controllers.InitTeleportDestController = InitTeleportDestController;
                Framework.AccessibilityHelperModule.controller("InitTeleportDestController", InitTeleportDestController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var KeyCode = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    TreeControlAccessibilityController = function() {
                        function TreeControlAccessibilityController() {}

                        TreeControlAccessibilityController.prototype.initializeConfig = function(element) {
                            this.element = element;
                            this.initializeTreeItemsList();
                            this.bindHandlers()
                        };
                        TreeControlAccessibilityController.prototype.initializeTreeItemsList = function() {
                            this.parents = this.element[0].querySelectorAll("[data-treeparentnode]");
                            this.treeItems = this.element[0].querySelectorAll('[role="treeitem"]')
                        };
                        TreeControlAccessibilityController.prototype.bindHandlers = function() {
                            this.element.off("keydown", this.keydownHandler);
                            this.keydownHandler = this.handleKeydownEvent.bind(this);
                            this.element.on("keydown", this.keydownHandler)
                        };
                        TreeControlAccessibilityController.prototype.handleKeydownEvent = function(e) {
                            var keyCode = e.which || e.keyCode;
                            switch (keyCode) {
                            case KeyCode.LeftArrowKeyCode:
                                if (e.target.getAttribute(AccessibilityUtility.Constants.PARENT_TREE_NODE) != null)
                                    if (e.target.getAttribute(AccessibilityUtility.Constants
                                            .ARIA_EXPANDED) ==
                                        "true") this.toggleExpandedStateOfTreeParent(e.target);
                                    else this.focusClosestTreeParentNode(e.target);
                                else this.focusClosestTreeParentNode(e.target);
                                break;
                            case KeyCode.RightArrowKeyCode:
                                if (e.target.getAttribute(AccessibilityUtility.Constants
                                        .PARENT_TREE_NODE) !=
                                    null)
                                    e.target.getAttribute(AccessibilityUtility.Constants.ARIA_EXPANDED) == "false" &&
                                        this.toggleExpandedStateOfTreeParent(e.target);
                                break;
                            case KeyCode.UpArrowKeyCode:
                                this.findElementValidateAndFocusElement(e, KeyCode.UpArrowKeyCode);
                                break;
                            case KeyCode.DownArrowKeyCode:
                                this.findElementValidateAndFocusElement(e, KeyCode.DownArrowKeyCode);
                                break;
                            case KeyCode.HomeKeyCode:
                                this.focusFirstTreeParentNode();
                                break;
                            case KeyCode.EndKeyCode:
                                this.focusLastTreeNode();
                                break
                            }
                        };
                        TreeControlAccessibilityController.prototype
                            .focusLastTreeNode = function() { this.treeItems[this.treeItems.length - 1].focus() };
                        TreeControlAccessibilityController.prototype
                            .focusFirstTreeParentNode = function() { this.parents[0].focus() };
                        TreeControlAccessibilityController.prototype
                            .toggleExpandedStateOfTreeParent = function(treeNode) { treeNode.click() };
                        TreeControlAccessibilityController.prototype
                            .focusClosestTreeParentNode = function(treeNode) {
                                this.findTreeParentNode(treeNode).focus()
                            };
                        TreeControlAccessibilityController.prototype.findTreeParentNode = function(treeNode) {
                            var pseudoParentNode = $(treeNode).closest("[data-pseudotreeparentnode]"),
                                actualParentContainer = pseudoParentNode.prev(),
                                actualParent = null;
                            if (actualParentContainer.attr(AccessibilityUtility.Constants
                                    .PARENT_TREE_NODE) !=
                                null) actualParent = actualParentContainer;
                            else actualParent = actualParentContainer.find("[data-treeparentnode]");
                            return actualParent
                        };
                        TreeControlAccessibilityController.prototype
                            .findElementValidateAndFocusElement = function(e, arrowKeyCode) {
                                e.preventDefault();
                                var nodeList = this.element[0].querySelectorAll("[tabindex]:not([disabled])");
                                if (nodeList != null && nodeList.length > 0) {
                                    var currentIndex = $(nodeList).index(e.target);
                                    this.findElementWithIndexAndFocus(arrowKeyCode, currentIndex, nodeList)
                                }
                            };
                        TreeControlAccessibilityController.prototype
                            .findElementWithIndexAndFocus = function(arrowKeyCode, currentItemIndex, nodeList) {
                                var nextItemIndex = currentItemIndex, itemToFocus = null;
                                if (arrowKeyCode == KeyCode.RightArrowKeyCode ||
                                    arrowKeyCode == KeyCode.DownArrowKeyCode) {
                                    nextItemIndex = currentItemIndex + 1;
                                    itemToFocus = this.findNextVisibleArrowEnabledElement(nodeList, nextItemIndex)
                                } else {
                                    nextItemIndex = currentItemIndex - 1;
                                    itemToFocus = this.findPreviousVisibleArrowEnabledElement(nodeList, nextItemIndex)
                                }
                                itemToFocus != null && AccessibilityUtility.focusElement(itemToFocus)
                            };
                        TreeControlAccessibilityController.prototype
                            .findNextVisibleArrowEnabledElement =
                            function(nodeList, startIndex) {
                                for (var i = startIndex;
                                    i < nodeList.length;
                                    i++
                                ) if ($(nodeList[i]).is(":visible")) return nodeList[i]
                            };
                        TreeControlAccessibilityController.prototype
                            .findPreviousVisibleArrowEnabledElement =
                            function(nodeList, startIndex) {
                                for (var i = startIndex;
                                    i >= 0;
                                    i--
                                ) if ($(nodeList[i]).is(":visible")) return nodeList[i]
                            };
                        return TreeControlAccessibilityController
                    }();
                Controllers.TreeControlAccessibilityController = TreeControlAccessibilityController
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var Mutation = Mscrm.Designers.Framework.Common.Mutation;

                function attachFocusEventToElement(element, controller) {
                    element.on("focus",
                        '[tabindex="0"],[mscrm-major-component]',
                        function(e) { controller.arrowKeyNavigationHandler(e, element) })
                }

                var link = function(scope, element, attrs, controller) {
                    attachFocusEventToElement(element, controller);
                    var observer = new Mutation.Mutationutility;
                    observer.observeForMutation(element, function() { attachFocusEventToElement(element, controller) });
                    scope.$on("$destroy",
                        function() {
                            observer.disconnect();
                            element.off("focus");
                            element.off("keydown")
                        })
                };

                function ArrowKeyNavigationDirective() {
                    return {
                        restrict: "A",
                        link: link,
                        controller: Mscrm.Designers.Framework.Controllers.ArrowKeyNavigationController
                    }
                }

                Framework.AccessibilityHelperModule.directive("mscrmArrowKeyNavigation", ArrowKeyNavigationDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";

                function DisableFocusOnKeyDownDirective() {
                    var link = function(scope, element, attrs, controller) {
                        controller.InitializeConfig(element);
                        element.bind("keyup", controller.TabEventListener);
                        element.bind("mousedown", controller.KeyDownEventListener);
                        scope.$on("$destroy",
                            function() {
                                element.unbind("keyup", controller.TabEventListener);
                                element.unbind("mousedown", controller.KeyDownEventListener)
                            })
                    };
                    return {
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link,
                        controller: Mscrm.Designers.Framework.Controllers.DisableFocusOnKeyDownController
                    }
                }

                Framework.AccessibilityHelperModule
                    .directive("mscrmDisableFocusOnKeydown", DisableFocusOnKeyDownDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility;

                function InitialFocusOnLoadDirective() {
                    var link = function(scope, element, attrs) {
                        if (element.attr(AccessibilityUtility.Constants.FOCUS_ELEMENT_ID) != null) {
                            var elementToBeFocussed = document
                                .getElementById(element.attr(AccessibilityUtility.Constants.FOCUS_ELEMENT_ID));
                            elementToBeFocussed != null && elementToBeFocussed.focus()
                        } else element.focus()
                    };
                    return {
                        replace: false,
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link
                    }
                }

                Framework.AccessibilityHelperModule.directive("mscrmInitialFocusOnLoad", InitialFocusOnLoadDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";

                function MajorComponentDirective($rootScope) {
                    var link = function(scope, element, attrs, controller) {
                        controller.readAndInitializeProperties(element);
                        controller.registerMajorComponentEvents()
                    };
                    return {
                        replace: false,
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link,
                        controller: Mscrm.Designers.Framework.Controllers.MajorComponentController
                    }
                }

                Framework.AccessibilityHelperModule.directive("mscrmMajorComponent", MajorComponentDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var KeyCode = Mscrm.Designers.Common.Constants.KeyCode,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    TeleportController = Mscrm.Designers.Framework.Controllers.TeleportFocusController,
                    Mutation = Mscrm.Designers.Framework.Common.Mutation;

                function TeleportFocusDirective($rootScope) {
                    function attachKeyDownEventToDestination(element, controller) {
                        var nodes = element[0].querySelectorAll('[tabindex="-1"]'),
                            lastTabbableElement = nodes[nodes.length - 1];
                        lastTabbableElement != null &&
                            $(lastTabbableElement).off("keydown.lastTabbableInDestination")
                            .on("keydown.lastTabbableInDestination",
                                function(e) {
                                    var code = e.which || e.keyCode;
                                    if (code == KeyCode.TabKeyCode)
                                        if (!e.shiftKey) {
                                            e.preventDefault();
                                            AccessibilityUtility.toggleTabIndexes(nodes, "-1");
                                            var sourceElement = controller.getSourceElement(element);
                                            AccessibilityUtility
                                                .raiseBlurEventOnParentMajorComponent(sourceElement, $rootScope)
                                        }
                                });
                        AccessibilityUtility.toggleTabIndexes(nodes, "0");
                        element.off("keydown.teleportDestination")
                            .on("keydown.teleportDestination",
                                function(event) { controller.teleportDestinationKeyDownHandler(event, element) })
                    }

                    function attachFocusEventToDestinationElement(element, controller) {
                        element.off("focus.teleportDestination")
                            .on("focus.teleportDestination",
                                "[tabindex],[mscrm-major-component]",
                                function(e) { attachKeyDownEventToDestination(element, controller) })
                    }

                    var link = function(scope, element, attrs, controller) {
                        if (element[0]
                            .hasAttribute("data-teleport-source")
                        )
                            element.off("focus.teleportSource")
                                .on("focus.teleportSource",
                                    function(event) { controller.teleportSourceFocusHandler(element) });
                        else if (element[0].hasAttribute("data-teleport-destination")) {
                            element.off("focus.teleportSourceElement")
                                .on("focus.teleportSourceElement",
                                    function(e) { attachKeyDownEventToDestination(element, controller) });
                            attachFocusEventToDestinationElement(element, controller);
                            var observer = new Mutation.Mutationutility;
                            observer.observeForMutation(element,
                                function() { attachFocusEventToDestinationElement(element, controller) })
                        }
                        scope.$on("$destroy",
                            function() {
                                observer.disconnect();
                                element.off("focus");
                                element.off("keydown")
                            })
                    };
                    return { restrict: "EA", link: link, controller: TeleportController }
                }

                Framework.AccessibilityHelperModule.directive("mscrmTeleportFocus", TeleportFocusDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                var Constants = Mscrm.Designers.Common.Constants,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility;
                "use strict";

                function ActionOnSelectDirective($rootScope, $parse, mscrmActionOnSelectService) {
                    var link = function(scope, element, attrs) {
                        var isDblClickEnabled = element.attr("ng-dblclick") != undefined ? true : false,
                            isElementClicked = false,
                            isActionOnFocusModeEnabled = false;
                        if (element
                            .attr("data-actiononfocusmode") !=
                            undefined ||
                            isDblClickEnabled == true) isActionOnFocusModeEnabled = true;
                        element.on("keydown",
                            function(e) {
                                if (e.isPropagationStopped()) return;
                                if (e.keyCode == Constants.KeyCode.EnterKeyCode ||
                                    e.keyCode == Constants.KeyCode.SpaceKeyCode) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (isDblClickEnabled == true) element.dblclick();
                                    else element.click()
                                } else if (e.keyCode == Constants.KeyCode.TabKeyCode) {
                                    var isFlyoutSrcAttribute = element
                                        .attr(AccessibilityUtility.Constants.ISFLYOUT_SRC);
                                    if (isFlyoutSrcAttribute != null && isFlyoutSrcAttribute === "true") {
                                        var elementId = element.attr("id"),
                                            flyoutDestination =
                                                $("[" +
                                                    AccessibilityUtility.Constants.FLYOUTSRC_ID +
                                                    "='" +
                                                    elementId +
                                                    "']");
                                        if (flyoutDestination != null &&
                                            flyoutDestination.length != 0 &&
                                            $(flyoutDestination).is(":visible") == true) {
                                            var tabbableElements = AccessibilityUtility
                                                .GetTabbableElements(flyoutDestination, true);
                                            (tabbableElements == null || tabbableElements.length == 0) &&
                                                element.click()
                                        }
                                    }
                                }
                            });
                        isActionOnFocusModeEnabled == true &&
                            element.on("focus", function(e) { !isElementClicked && !scope.$$phase && element.click() });
                        element.on("mousedown",
                            function(e) {
                                isElementClicked = true;
                                var id = element.attr("id");
                                id != undefined &&
                                    mscrmActionOnSelectService
                                    .CaptureClickCountForTelemetry(id, Constants.UserInteractionType.MouseClick)
                            });
                        element.on("mouseup", function(e) { isElementClicked = false })
                    };
                    return { link: link, restrict: Constants.DirectiveRestrictTypes.AttributeType }
                }

                Framework.AccessibilityHelperModule.directive("mscrmActionOnSelect", ActionOnSelectDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility;

                function PageLevelSectionNavigationShortcutDirective($rootScope) {
                    var link = function(scope, element, attrs, controller) {
                        var handler = function(e) {
                            if (AccessibilityUtility.CheckIfSectionNavigationShortcutPressed(e)) {
                                e.stopPropagation();
                                e.preventDefault();
                                var eventName = "mcfocus-primary-0";
                                $rootScope.$broadcast(eventName)
                            }
                        };
                        element.bind("keydown", handler);
                        element.focus();
                        element.on("$destroy", function() { element.unbind("keydown", handler) })
                    };
                    return {
                        replace: false,
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link
                    }
                }

                Framework.AccessibilityHelperModule
                    .directive("mscrmPageLevelSectionNavigationShortcut", PageLevelSectionNavigationShortcutDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility;

                function DialogAccessibilityDirective($rootScope) {
                    var initializeDialogConfig = function(element, controller) {
                            controller.element = element;
                            controller.previousActiveElement = document.activeElement;
                            controller.initializeConfig()
                        },
                        link = function(scope, element, attrs, controller) {
                            initializeDialogConfig(element, controller);
                            element.bind("keydown", controller.HandleKeydown.bind(controller));
                            element.on("$destroy",
                                function() {
                                    element.unbind("keydown", controller.HandleKeydown);
                                    AccessibilityUtility.toggleTabIndexes(controller.tabbableElements, "-1");
                                    if (controller.firstTabbableElement != null) {
                                        controller.firstTabbableElement
                                            .removeEventListener("keydown",
                                                controller.firstActiveElementKeydownHandler);
                                        controller.firstActiveElementKeydownHandler = null;
                                        controller.firstTabbableElement = null
                                    }
                                    if (controller.lastTabbableElement != null) {
                                        controller.lastTabbableElement
                                            .removeEventListener("keydown", controller.lastActiveElementKeydownHandler);
                                        controller.lastActiveElementKeydownHandler = null;
                                        controller.lastTabbableElement = null
                                    }
                                })
                        };
                    return {
                        replace: false,
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link,
                        controller: Mscrm.Designers.Framework.Controllers.DialogAccessibilityController
                    }
                }

                Framework.AccessibilityHelperModule.directive("mscrmDialogAccessibility", DialogAccessibilityDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                var Constants = Mscrm.Designers.Common.Constants,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility;
                "use strict";

                function TrapFocusOnErrorDirective($rootScope) {
                    var link = function(scope, element, attrs) {
                        element.on("keydown",
                            function(e) {
                                if (e.keyCode == Constants.KeyCode.TabKeyCode ||
                                    AccessibilityUtility.CheckIfSectionNavigationShortcutPressed(e))
                                    if (element.attr("aria-invalid") === "true") {
                                        e.preventDefault();
                                        element.blur();
                                        element.focus()
                                    }
                            })
                    };
                    return { link: link, restrict: Constants.DirectiveRestrictTypes.AttributeType }
                }

                Framework.AccessibilityHelperModule.directive("mscrmTrapFocusOnError", TrapFocusOnErrorDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var InitTeleportDestController = Mscrm.Designers.Framework.Controllers.InitTeleportDestController;

                function InitTeleportDestDirective($rootScope) {
                    var link = function(scope, element, attrs, controller) {
                        controller.element = element;
                        controller.RegisterEventOnTeleportDest()
                    };
                    return { restrict: "A", link: link, controller: InitTeleportDestController }
                }

                Framework.AccessibilityHelperModule.directive("mscrmInitTeleportDest", InitTeleportDestDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                var Constants = Mscrm.Designers.Common.Constants,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    KeyCodes = Mscrm.Designers.Common.Constants.KeyCode,
                    Mutation = Mscrm.Designers.Framework.Common.Mutation;
                "use strict";

                function FlyoutAccessibleCloseDirective(mscrmFlyoutService, $rootScope) {
                    var _this = this,
                        elementContainer,
                        mutationObserver,
                        isMutationObserverRegistered,
                        hideFlyout = function(scope, e, element) {
                            mscrmFlyoutService.Hide();
                            scope != null && !scope.$$phase && scope.$apply();
                            if (element != null) {
                                var flyoutSrcElementId = element.attr(AccessibilityUtility.Constants.FLYOUTSRC_ID),
                                    flyoutSrcElement = $("[id='" + flyoutSrcElementId + "']");
                                flyoutSrcElement != null && flyoutSrcElement.is(":visible") && flyoutSrcElement.focus();
                                elementContainer = null
                            }
                            e.preventDefault();
                            e.stopImmediatePropagation()
                        },
                        initializeConfig = function(element, scope) {
                            var tabbableElements = AccessibilityUtility.GetTabbableElements(element, true);
                            if (tabbableElements != null && tabbableElements.length != 0) {
                                var firstTabbableElement = AccessibilityUtility
                                        .GetFirstVisibleElement(tabbableElements),
                                    lastTabbableElement = AccessibilityUtility.GetLastVisibleElement(tabbableElements);
                                elementContainer = element;
                                firstTabbableElement != null &&
                                    firstTabbableElement
                                    .addEventListener("keydown",
                                        function(e) {
                                            if (e
                                                .keyCode ==
                                                KeyCodes
                                                .TabKeyCode)
                                                if (e
                                                    .shiftKey ==
                                                    true)
                                                    e.target == firstTabbableElement && hideFlyout(scope, e, element)
                                        });
                                lastTabbableElement != null &&
                                    lastTabbableElement
                                    .addEventListener("keydown",
                                        function(e) {
                                            if (e
                                                .keyCode ==
                                                KeyCodes
                                                .TabKeyCode)
                                                if (e
                                                    .shiftKey !=
                                                    true)
                                                    e.target == lastTabbableElement && hideFlyout(scope, e, element)
                                        })
                            }
                            element[0].addEventListener("keydown",
                                function(e) {
                                    (e.keyCode == KeyCodes.EscKeyCode || e.keyCode == KeyCodes.EnterKeyCode) &&
                                        hideFlyout(scope, e, element)
                                })
                        },
                        link = function(scope, element, attrs) {
                            initializeConfig(element, scope);
                            isMutationObserverRegistered = false;
                            element.on("focusin",
                                function() {
                                    initializeConfig(element, scope);
                                    if (isMutationObserverRegistered == null || isMutationObserverRegistered == false) {
                                        mutationObserver = new Mutation.Mutationutility;
                                        mutationObserver
                                            .observeForMutation(element,
                                                function() { initializeConfig(element, scope) });
                                        isMutationObserverRegistered = true
                                    }
                                });
                            $rootScope.$on("mscrm-flyoutClose",
                                function(event, flyoutSrcElementId) {
                                    var flyoutSrcElement = $("[id='" + flyoutSrcElementId + "']");
                                    flyoutSrcElement != null &&
                                        flyoutSrcElement.is(":visible") &&
                                        flyoutSrcElement.blur()
                                }.bind(_this));
                            element.on("$destroy",
                                function() { mutationObserver != null && mutationObserver.disconnect() })
                        };
                    return { link: link, restrict: Constants.DirectiveRestrictTypes.AttributeType }
                }

                Framework.AccessibilityHelperModule
                    .directive("mscrmFlyoutAccessibleClose", FlyoutAccessibleCloseDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Directives;
            (function(Directives) {
                "use strict";
                var Mutation = Mscrm.Designers.Framework.Common.Mutation,
                    link = function(scope, element, attrs, controller) {
                        controller.initializeConfig(element);
                        var observer = new Mutation.Mutationutility;
                        observer.observeForMutation(element, function() { controller.initializeConfig(element) })
                    };

                function TreeControlAccessibilityDirective() {
                    return {
                        restrict: "A",
                        link: link,
                        controller: Mscrm.Designers.Framework.Controllers.TreeControlAccessibilityController
                    }
                }

                Framework.AccessibilityHelperModule
                    .directive("mscrmTreeControlAccessibility", TreeControlAccessibilityDirective)
            })(Directives = Framework.Directives || (Framework.Directives = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Framework;
        (function(Framework) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode,
                    Constants = Mscrm.Designers.Framework.Common.AccessibilityUtility.Constants,
                    DisableFocusOnKeyDownController = function() {
                        function DisableFocusOnKeyDownController() {
                            this.currentFocusElement = null;
                            this.elementLast = null
                        }

                        DisableFocusOnKeyDownController.prototype.InitializeConfig = function(element) {
                            this.TabEventListener = this.HandleTabEvent.bind(this);
                            this.KeyDownEventListener = this.HandleMouseDownEvent.bind(this)
                        };
                        DisableFocusOnKeyDownController.prototype.HandleTabEvent = function(e) {
                            this.currentFocusElement = $(e.target);
                            if (e
                                .keyCode ==
                                KeyCodes.TabKeyCode ||
                                e
                                .keyCode ==
                                KeyCodes.F6KeyCode)
                                this.currentFocusElement !== undefined &&
                                    this.currentFocusElement.hasClass(Constants.DISABLE_FOCUS_CSSCLASS) &&
                                    this.currentFocusElement.removeClass(Constants.DISABLE_FOCUS_CSSCLASS)
                        };
                        DisableFocusOnKeyDownController.prototype.HandleMouseDownEvent = function(e) {
                            this.currentFocusElement = $(e.target);
                            this.elementLast && this.elementLast.removeClass(Constants.DISABLE_FOCUS_CSSCLASS);
                            this.elementLast = this.currentFocusElement;
                            this.addDisableFocusClassOnKeyDown()
                        };
                        DisableFocusOnKeyDownController.prototype.addDisableFocusClassOnKeyDown = function() {
                            this.currentFocusElement = this.currentFocusElement.closest("[tabindex]");
                            if (this.currentFocusElement[0]) {
                                this.currentFocusElement.addClass(Constants.DISABLE_FOCUS_CSSCLASS);
                                this.currentFocusElement = this.currentFocusElement.parent();
                                this.addDisableFocusClassOnKeyDown()
                            }
                        };
                        return DisableFocusOnKeyDownController
                    }();
                Controllers.DisableFocusOnKeyDownController = DisableFocusOnKeyDownController;
                Framework.AccessibilityHelperModule
                    .controller("DisableFocusOnKeyDownController", DisableFocusOnKeyDownController)
            })(Controllers = Framework.Controllers || (Framework.Controllers = {}))
        })(Framework = Designers.Framework || (Designers.Framework = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))