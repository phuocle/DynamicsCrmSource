(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("../Primitive/ComponentBase");
var Button_1 = require("../Primitive/Button");
var View_1 = require("../Primitive/View");
var ScrollView_1 = require("../Primitive/ScrollView");
var MicrosoftIconSymbol_1 = require("../FontIcon/MicrosoftIconSymbol");
var MicrosoftIcon_1 = require("../FontIcon/MicrosoftIcon");

var FelaConnectHelper_1 = require("../Primitive/FelaConnectHelper");
/**
 * HorizontalScroll component.
 */
var InnerHorizontalScroll = (function (_super) {
    __extends(InnerHorizontalScroll, _super);
    function InnerHorizontalScroll() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific element props.
     */
    InnerHorizontalScroll.prototype.getElementProps = function () {
        var defaultArrowWidth = 20;
        var arrowButtonStyle = this.props.arrowButtonStyle || {};
        var scrollViewStyle = this.props.scrollViewStyle || {};
        var returnElementProps = Object.assign({}, this.props, {
            startChildIndex: this.props.startChildIndex || 0,
            arrowWidth: this.props.arrowWidth || arrowButtonStyle.width || defaultArrowWidth,
            arrowButtonStyle: arrowButtonStyle,
            scrollViewStyle: scrollViewStyle,
        });
        return returnElementProps;
    };
    /**
     * Component did mount lifecycle method
     */
    InnerHorizontalScroll.prototype.componentDidMount = function () {
        var props = this._getElementPropsInternal();
        this._scrolToChildByIndex(props.startChildIndex);
    };
    /**
     * When component did update, we need to set height to the container to hide scroll.
     * I shouldn't be done if height is defined in style.
     */
    InnerHorizontalScroll.prototype.componentDidUpdate = function () {
        var props = this._getElementPropsInternal();
        if (!props.style.height) {
            var scrollableContainer = this._getScollableContainer();
            if (scrollableContainer) {
                scrollableContainer.parentElement.style.height = scrollableContainer.scrollHeight + "px";
            }
        }
    };
    /**
     * Reacts on the scrollview creation.
     */
    InnerHorizontalScroll.prototype._saveScrollViewRefCallback = function (ref) {
        this._scrollView = ref;
    };
    /**
     * Invoked when user press keys when the arrow button is on focus.
     * @param e
     */
    InnerHorizontalScroll.prototype._onPrevKeyDown = function (e) {
        if (this.props.onPrevArrowKeyDown) {
            this.props.onPrevArrowKeyDown(e, this._getFirstChildIndexAfterScroll());
        }
    };
    /**
     * Invoked when user press keys when the arrow button is on focus.
     * @param e
     */
    InnerHorizontalScroll.prototype._onNextKeyDown = function (e) {
        if (this.props.onNextArrowKeyDown) {
            this.props.onNextArrowKeyDown(e, this._getFirstChildIndexAfterScroll());
        }
    };
    /**
     * Invoked when user clicks the arrow button which scrolls left.
     * @param e
     */
    InnerHorizontalScroll.prototype._onPrevClick = function (e) {
        this._slideByArrow(false);
        e.stopPropagation();
        if (this.props.onPrevArrowClick) {
            this.props.onPrevArrowClick(e, this._getFirstChildIndexAfterScroll());
        }
    };
    /**
     * Invoked when user clicks the arrow button which scrolls right.
     * @param e
     */
    InnerHorizontalScroll.prototype._onNextClick = function (e) {
        this._slideByArrow(true);
        e.stopPropagation();
        if (this.props.onNextArrowClick) {
            this.props.onNextArrowClick(e, this._getFirstChildIndexAfterScroll());
        }
    };
    /**
     * Sliding to next set of elements.
     * @param isSlideNext slide direction.
     */
    InnerHorizontalScroll.prototype._slideByArrow = function (isSlideNext) {
        var childIndexToScroll = this._getChildIndexToScroll(isSlideNext);
        this._scrolToChildByIndex(childIndexToScroll);
    };
    /**
     * Get child to scroll to.
     * @param isSlideNext slide direction.
     */
    InnerHorizontalScroll.prototype._getChildIndexToScroll = function (isSlideNext) {
        var scrollableContainer = this._getScollableContainer();
        var scrollWidth = isSlideNext ? scrollableContainer.scrollLeft + scrollableContainer.offsetWidth : scrollableContainer.scrollLeft;
        var children = scrollableContainer.children;
        var childIndex = 0;
        for (var index = 0; index < children.length; index++) {
            var child = children[index];
            if ((child.offsetLeft + child.offsetWidth) >= scrollWidth) {
                childIndex = index;
                break;
            }
        }
        return childIndex;
    };
    /**
     * Gets index of the first child displayed after scroll.
     */
    InnerHorizontalScroll.prototype._getFirstChildIndexAfterScroll = function () {
        var scrollableContainer = this._getScollableContainer();
        var scrollLeft = scrollableContainer.scrollLeft;
        var children = scrollableContainer.children;
        var childIndex = 0;
        for (var index = 0; index < children.length; index++) {
            var child = children[index];
            if (child.offsetLeft >= scrollLeft) {
                childIndex = index;
                break;
            }
        }
        return childIndex;
    };
    /**
     * Recalculates state.
     */
    InnerHorizontalScroll.prototype._recalculateState = function () {
        var scrollableContainer = this._getScollableContainer();
        var scrollLeft = scrollableContainer.scrollLeft;
        this.setState({
            prevArrowDisabled: scrollLeft === 0,
            nextArrowDisabled: scrollLeft + scrollableContainer.offsetWidth === scrollableContainer.scrollWidth,
        });
    };
    /**
     * Scroll to child with some index.
     * @param childIndex child index.
     */
    InnerHorizontalScroll.prototype._scrolToChildByIndex = function (childIndex) {
        var scrollableContainer = this._getScollableContainer();
        childIndex = childIndex && (childIndex > 0) ? childIndex : 0;
        var children = scrollableContainer.children;
        var childToScroll = children ? children[childIndex] : null;
        if (childToScroll) {
            this._scrollView.scrollToChild(childToScroll);
        }
    };
    /**
     * Get DOM element with scrollbar.
     */
    InnerHorizontalScroll.prototype._getScollableContainer = function () {
        return ReactDOM.findDOMNode(this._scrollView);
    };
    /**
     * Renders prev arrow button.
     */
    InnerHorizontalScroll.prototype._renderPrevArrowButton = function () {
        var props = this._getElementPropsInternal();
        var buttonPrevStyle = Object.assign({
            position: "absolute",
            left: "0px",
            top: "0px",
            width: props.arrowWidth + "px",
            boxSizing: "border-box",
        }, this.props.arrowButtonStyle);
        return (React.createElement(Button_1.Button, {id: this.props.id + "_scrollPrevArrow", key: "scrollPrevArrow", accessibilityLabel: "Scroll left the content", accessibilityHasPopup: true, tabIndex: -1, disabled: this.state && this.state.prevArrowDisabled, style: buttonPrevStyle, onFocus: this.props.onFocus, onClick: this._onPrevClick, onKeyDown: this._onPrevKeyDown}, this._renderArrowIcon(props.prevArrowIconType, "<")));
    };
    /**
     * Renders next arrow button.
     */
    InnerHorizontalScroll.prototype._renderNextArrowButton = function () {
        var props = this._getElementPropsInternal();
        var buttonNextStyle = Object.assign({
            position: "absolute",
            right: "0px",
            top: "0px",
            width: props.arrowWidth + "px",
            boxSizing: "border-box",
        }, this.props.arrowButtonStyle);
        return (React.createElement(Button_1.Button, {id: this.props.id + "_scrollNextArrow", key: "scrollNextArrow", accessibilityLabel: "Scroll right the content", accessibilityHasPopup: true, tabIndex: -1, disabled: this.state && this.state.nextArrowDisabled, style: buttonNextStyle, onFocus: this.props.onFocus, onClick: this._onNextClick, onKeyDown: this._onNextKeyDown}, this._renderArrowIcon(props.nextArrowIconType, ">")));
    };
    /**
     * Renders arrow icon.
     * @param arrowIconKey property key to get CrmIconSymbol.
     * @param defaultText default text to show instead of the icon.
     */
    InnerHorizontalScroll.prototype._renderArrowIcon = function (arrowIconType, defaultText) {
        if (arrowIconType) {
            var iconKey = "scroll" + MicrosoftIconSymbol_1.MicrosoftIconSymbol[arrowIconType] + "Icon";
            return (React.createElement(MicrosoftIcon_1.MicrosoftIcon, {key: iconKey, type: arrowIconType}));
        }
        else {
            return defaultText;
        }
    };
    /**
     * React control render method.
     */
    InnerHorizontalScroll.prototype.render = function () {
        var props = this._getElementPropsInternal();
        // Add some defaults to the props.style
        Object.assign(props.style, {
            display: "block",
            position: "relative",
            paddingLeft: this.state && this.state.prevArrowDisabled && this.props.hideDisabledButton ? "0px" : props.arrowWidth + "px",
            paddingRight: this.state && this.state.nextArrowDisabled && this.props.hideDisabledButton ? "0px" : props.arrowWidth + "px",
            oveflow: "hidden",
        }, this.props.style);
        var scrolViewStyle = Object.assign({}, this.props.scrollViewStyle, {
            position: "relative",
        });
        var control = (React.createElement(View_1.View, {style: props.style, isRequestedMeasuring: true, onMeasuring: this._recalculateState}, this._renderPrevArrowButton(), React.createElement(ScrollView_1.ScrollView, {key: "HorizontalScrollContent", refCallback: this._saveScrollViewRefCallback, horizontal: true, style: scrolViewStyle, onScroll: this._recalculateState, role: this.props.role}, this.props.children), this._renderNextArrowButton()));
        return control;
    };
    /**
     * Component name for React Dev Tools.
     */
    InnerHorizontalScroll.displayName = "HorizontalScroll";
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_saveScrollViewRefCallback", null);
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_onPrevKeyDown", null);
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_onNextKeyDown", null);
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_onPrevClick", null);
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_onNextClick", null);
    __decorate([
        Autobind_1.default
    ], InnerHorizontalScroll.prototype, "_recalculateState", null);
    return InnerHorizontalScroll;
}(ComponentBase_1.ComponentBase));
exports.InnerHorizontalScroll = InnerHorizontalScroll;
var HorizontalScroll = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerHorizontalScroll);
exports.HorizontalScroll = HorizontalScroll;

},{"../FontIcon/MicrosoftIcon":6,"../FontIcon/MicrosoftIconSymbol":7,"../Primitive/Button":8,"../Primitive/ComponentBase":11,"../Primitive/FelaConnectHelper":13,"../Primitive/ScrollView":33,"../Primitive/View":47,"../Supplementary/Decorators/Autobind":52,"react":undefined,"react-dom":undefined,"react-fela":undefined}],2:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CCFPerformanceTracker_1 = require("../../../CustomControls/Utilities/CCFPerformanceTracker");
var MeasuringHandler = (function () {
    function MeasuringHandler() {
        this._previousDimensions = new Map();
        this._subscribers = [];
    }
    MeasuringHandler.getInstance = function () {
        if (!MeasuringHandler._instance) {
            MeasuringHandler._instance = new MeasuringHandler();
        }
        return MeasuringHandler._instance;
    };
    Object.defineProperty(MeasuringHandler.prototype, "subscribers", {
        /**
         * Returns all the subscribers for re-measuring service.
         */
        get: function () {
            return this._subscribers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the subscribers.
     * @param subscriber to add
     */
    MeasuringHandler.prototype.addMeasuringSubscribers = function (subscriber) {
        this._subscribers.push(subscriber);
    };
    /**
     * Removes the subscribers
     * @param subscriber to remove
     */
    MeasuringHandler.prototype.removeMeasuringSubscribers = function (subscriber) {
        var index = this._subscribers.indexOf(subscriber);
        if (index > -1) {
            this._subscribers.splice(index, 1);
            this._previousDimensions.delete(subscriber);
        }
    };
    /**
     * Fire the re-measuring event
     */
    MeasuringHandler.prototype.fireEvent = function () {
        if (this._subscribers) {
            var stopMeasuringService = CCFPerformanceTracker_1.default.createPerformanceEvent("MeasuringService", 3 /* Info */).startStopwatch({ subscribers: this.subscribers.length.toString() });
            var actualUpdatedComponent = 0;
            var updatedElements = [];
            for (var i = 0; i < this._subscribers.length; i++) {
                var subscriber = this._subscribers[i];
                var element = subscriber.getComponent();
                if (element) {
                    var elementDimension = this._previousDimensions.get(subscriber);
                    var dimension = element.getBoundingClientRect();
                    var width = dimension.width;
                    var height = dimension.height;
                    if (!elementDimension || elementDimension.Width !== width || elementDimension.Height !== height || this._subscribers[i].forceMeasure) {
                        this._previousDimensions.set(subscriber, { Width: width, Height: height });
                        updatedElements.push(subscriber.onMeasure.bind(subscriber, width, height));
                    }
                }
            }
            for (var i = 0; i < updatedElements.length; i++) {
                updatedElements[i]();
            }
            stopMeasuringService({ subscribers: updatedElements.length.toString() });
        }
    };
    return MeasuringHandler;
}());
exports.MeasuringHandler = MeasuringHandler;

},{"../../../CustomControls/Utilities/CCFPerformanceTracker":69}],3:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/* tslint:disable:crm-prohibit-standard-react-element */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var View_1 = require("../Primitive/View");
var ComboBox_1 = require("../Primitive/ComboBox");
var Text_1 = require("../Primitive/Text");
var ListItem_1 = require("../Primitive/ListItem");
var List_1 = require("../Primitive/List");
var ScrollView_1 = require("../Primitive/ScrollView");
var MicrosoftIcon_1 = require("../FontIcon/MicrosoftIcon");
var MicrosoftIconSymbol_1 = require("../FontIcon/MicrosoftIconSymbol");
var Image_1 = require("../Primitive/Image");
var roles = require("../Supplementary/Accessibility/Attributes/Role");
/**
* Component representing an viewselectorcontrol base control
*/
var ViewSelectorControl = (function (_super) {
    __extends(ViewSelectorControl, _super);
    function ViewSelectorControl(props, context) {
        _super.call(this, props, context);
        //Initialize the state for view selector didn't initialize in combobox
        Object.assign(this.state, {
            hasHover: false,
        });
    }
    ViewSelectorControl.prototype._handleTextMouseOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ hasHover: true });
    };
    ViewSelectorControl.prototype._handleTextMouseOut = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ hasHover: false });
    };
    /**
     * Handles the event of selecting an item in a drop-down.
     * @param item the item being selected
     */
    ViewSelectorControl.prototype._handleItemSelected = function (item) {
        this._selectedListItem = item;
    };
    ViewSelectorControl.prototype._renderListItem = function (option) {
        var iconStyle = option.iconStyle ? option.iconStyle : {
            width: 16,
            height: 16,
            margin: 2,
        };
        var listItemImage = option.imageSource ? React.createElement(View_1.View, null, React.createElement(Image_1.Image, {source: option.imageSource, style: iconStyle, altText: option.altText || ""})) : (option.iconType ? React.createElement(View_1.View, null, React.createElement(MicrosoftIcon_1.MicrosoftIcon, {type: option.iconType, style: iconStyle})) : null);
        return (React.createElement(View_1.View, {style: { display: "flex" }}, listItemImage, React.createElement(Text_1.Text, {style: { marginLeft: "10px" }}, option.text || "\u00a0")));
    };
    ViewSelectorControl.prototype._renderOptions = function (categoryId, indexAddendum) {
        var _this = this;
        var options = this.props.options;
        var selectedStyle = this.props.selectedItemStyle || { backgroundColor: "#0072C6", color: "white" };
        var style = {
            flex: "0 1 auto",
            cursor: "pointer",
            padding: "0.5em 0.75em",
        };
        var selectedTestHooks = null;
        //onPointerOver={this._handleItemHover}
        return options.filter(function (option) { return option.categoryId === categoryId; }).map(function (option, i) {
            var itemId = _this._getListItemId(option);
            var optionTesthooks = _this._getOptionTestHooks(option, i);
            var listItemKey = i + indexAddendum;
            return (React.createElement(ListItem_1.ListItem, {key: listItemKey, id: itemId, role: roles.OPTION, dataText: option.text, dataValue: option.value, onSelected: _this._handleItemSelected, isSelected: _this.state.selectedIndex === listItemKey, style: style, selectedStyle: selectedStyle, ref: _this._saveItemRef, onPointerOver: _this._handleItemHover, onPointerDown: _this._handleItemPointerDown, testhooks: optionTesthooks}, _this._renderListItem(option)));
        });
    };
    ViewSelectorControl.prototype._getOptionTestHooks = function (option, i) {
        if (!this.props.testhooks)
            return null;
        var isSelected = this.state.option.value === option.value;
        var testhooks = Object.assign({}, this.props.testhooks);
        for (var key in testhooks) {
            if (isSelected) {
                testhooks[key] += "-selected-item";
            }
            else {
                testhooks[key] += "-item-" + i;
            }
        }
        return testhooks;
    };
    ViewSelectorControl.prototype._renderCategories = function () {
        var _this = this;
        var categories = this.props.categories;
        var renderedCategories = [];
        if (categories) {
            var indexAddendum_1 = 0;
            categories.map(function (category, i) {
                var categoryOptions = _this._renderOptions(category.id, indexAddendum_1);
                renderedCategories.push(React.createElement(View_1.View, {key: i}, category.name, categoryOptions));
                indexAddendum_1 += categoryOptions.length;
            });
        }
        else {
            renderedCategories.push(React.createElement(View_1.View, null, this._renderOptions()));
        }
        return renderedCategories;
    };
    /**
    * Performs options props array to React.Component mapping
    * @param optionsProps options props array
    */
    ViewSelectorControl.prototype._renderOptionsList = function () {
        var options = this.props.options;
        if (options) {
            var categoriesRendered = this._renderCategories();
            //UX behaviors to be decided
            var visibleItemsAmount = this._getPageSize();
            var showScroll = visibleItemsAmount < options.length;
            var assumedItemHeight = 2.35;
            var scrollStyle = {
                height: showScroll ? (visibleItemsAmount * assumedItemHeight) + "em" : undefined,
                overflowY: showScroll ? "scroll" : "hidden",
                overflowX: "hidden",
                flex: "1 1 auto",
            };
            return (React.createElement(List_1.List, {role: roles.LISTBOX, id: this._getListId(), style: {
                listStyleType: "none",
                width: "100%",
            }}, React.createElement(ScrollView_1.ScrollView, {style: scrollStyle, refCallback: this.refCallback, horizontal: false}, categoriesRendered)));
        }
        return null;
    };
    /**
     * Renders the read-only text holder with the given ID.
     */
    ViewSelectorControl.prototype._renderTextOnly = function (controlId) {
        var textStyle = this.props.textStyle ? this.props.textStyle : {
            borderWidth: 0,
            flex: "0 1 auto",
            outline: "none",
            cursor: "pointer",
            padding: "0.5em 0.75em",
        };
        textStyle = Object.assign({}, textStyle, { maxWidth: "100%" });
        var elementProps;
        var emptyList;
        if (this.state.isExpanded) {
            elementProps =
                {
                    ownsElementId: this._getActiveDescendantId(),
                    activeDescendantId: this._getActiveDescendantId(),
                };
        }
        else {
            elementProps =
                {
                    ownsElementId: "owned_listbox",
                };
            emptyList = (React.createElement("div", {role: "listbox", id: "owned_listbox", style: { display: "none" }}, " "));
        }
        return (React.createElement(Text_1.Text, __assign({id: controlId, key: controlId, accessibilityHasPopup: true, accessibilityExpanded: this.state.isExpanded, ref: this._saveTextRef, role: roles.COMBOBOX, onFocus: this._handleInnerControlFocus, onBlur: this._handleInnerControlBlur, onPointerDown: this._handleTextPointerDown, testhooks: this.props.testhooks}, elementProps, {tabIndex: 0, style: textStyle}), React.createElement("div", {style: { display: "inline-block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}, (this.state.option && this.state.option.text) || "\u00a0"), this._renderCaretButton(), emptyList));
    };
    /**
     * Render the caret fonticon for viewselector dropdown
     */
    ViewSelectorControl.prototype._renderCaretButton = function () {
        var caretStyle = this.props.caretStyle ? this.props.caretStyle : {
            paddingLeft: "5px",
            color: "black",
        };
        var caretType = MicrosoftIconSymbol_1.MicrosoftIconSymbol.DropdownArrow;
        if (this.props.caretType && MicrosoftIconSymbol_1.MicrosoftIconSymbol[this.props.caretType]) {
            caretType = this.props.caretType;
        }
        return (React.createElement("span", {id: "caretIcon", style: caretStyle}, React.createElement(MicrosoftIcon_1.MicrosoftIcon, {type: caretType})));
    };
    /**
     * React control render method.
     */
    ViewSelectorControl.prototype.render = function () {
        var props = this._getElementPropsInternal();
        // Add some defaults to the props.style
        Object.assign(props.style, {
            backgroundColor: "transparent",
            display: "flex",
            flex: "0 1 auto",
        }, this.props.viewSelectorStyle);
        if (this.state.hasHover || this.state.isExpanded) {
            //TODO: remove when fela inline is in place
            if (this.props.hoveredStyle) {
                Object.assign(props.style, this.props.hoveredStyle);
            }
            else {
                props.style.backgroundColor = "#EFEFEF";
            }
        }
        var focusableControlId = this._getInternalId() + "_text";
        // We use outer and inner containers here just for the sake of keeping the original ID in the root element of the component.
        // The uniquity of the original ID is not guaranteed and depends on the consumer, not the component.
        //
        // The internal container has a different (100% unique) ID, so that the drop-down flyout positions itself properly relative to it.
        var control = (React.createElement(View_1.View, __assign({}, props, {ref: this._saveContainerRef}), React.createElement(View_1.View, {style: props.style, id: this._getInternalId(), onPointerOver: this._handleTextMouseOver, onPointerOut: this._handleTextMouseOut}, this._renderTextOnly(focusableControlId), !this.props.readOnly && this._renderFlyout(true), !this.props.readOnly && this._renderAccessibilityComponent(focusableControlId))));
        return control;
    };
    /**
     * Display name for React dev tools
     */
    ViewSelectorControl.displayName = "ViewSelectorControl";
    __decorate([
        Autobind_1.default
    ], ViewSelectorControl.prototype, "_handleTextMouseOver", null);
    __decorate([
        Autobind_1.default
    ], ViewSelectorControl.prototype, "_handleTextMouseOut", null);
    __decorate([
        Autobind_1.default
    ], ViewSelectorControl.prototype, "_handleItemSelected", null);
    __decorate([
        Autobind_1.default
    ], ViewSelectorControl.prototype, "_getOptionTestHooks", null);
    return ViewSelectorControl;
}(ComboBox_1.InnerComboBox));
exports.ViewSelectorControl = ViewSelectorControl;

},{"../FontIcon/MicrosoftIcon":6,"../FontIcon/MicrosoftIconSymbol":7,"../Primitive/ComboBox":10,"../Primitive/Image":23,"../Primitive/List":25,"../Primitive/ListItem":26,"../Primitive/ScrollView":33,"../Primitive/Text":45,"../Primitive/View":47,"../Supplementary/Accessibility/Attributes/Role":50,"../Supplementary/Decorators/Autobind":52,"react":undefined}],4:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FontIcon_1 = require("../Primitive/FontIcon");
var CrmIconSymbol_1 = require("./CrmIconSymbol");

var FelaConnectHelper_1 = require("../Primitive/FelaConnectHelper");
var InnerCrmIcon = (function (_super) {
    __extends(InnerCrmIcon, _super);
    function InnerCrmIcon() {
        _super.apply(this, arguments);
    }
    InnerCrmIcon.prototype.getSymbolClassName = function (type) {
        return CrmIconSymbol_1.getSymbolMapping(type);
    };
    return InnerCrmIcon;
}(FontIcon_1.FontIcon));
exports.InnerCrmIcon = InnerCrmIcon;
var CrmIcon = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerCrmIcon);
exports.CrmIcon = CrmIcon;

},{"../Primitive/FelaConnectHelper":13,"../Primitive/FontIcon":19,"./CrmIconSymbol":5,"react-fela":undefined}],5:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * IMPORTANT!
 * DO NOT MAKE CHANGES TO THIS FILE - THIS FILE IS GENERATED BY A BUILD TASK
 * IF YOU NEED TO MAKE CHANGES THEY MUST BE MADE IN THE JSON CONFIGURATION FILE
 */
"use strict";
var CrmIconSymbol;
(function (CrmIconSymbol) {
    CrmIconSymbol[CrmIconSymbol["Entity"] = 0] = "Entity";
    CrmIconSymbol[CrmIconSymbol["List"] = 1] = "List";
    CrmIconSymbol[CrmIconSymbol["Account"] = 2] = "Account";
    CrmIconSymbol[CrmIconSymbol["Opportunity"] = 3] = "Opportunity";
    CrmIconSymbol[CrmIconSymbol["Sharepointdocument"] = 4] = "Sharepointdocument";
    CrmIconSymbol[CrmIconSymbol["Dashboard"] = 5] = "Dashboard";
    CrmIconSymbol[CrmIconSymbol["WORKSPACE"] = 6] = "WORKSPACE";
    CrmIconSymbol[CrmIconSymbol["Lead"] = 7] = "Lead";
    CrmIconSymbol[CrmIconSymbol["Contact"] = 8] = "Contact";
    CrmIconSymbol[CrmIconSymbol["Activitypointer"] = 9] = "Activitypointer";
    CrmIconSymbol[CrmIconSymbol["Drafts"] = 10] = "Drafts";
    CrmIconSymbol[CrmIconSymbol["Systemuser"] = 11] = "Systemuser";
    CrmIconSymbol[CrmIconSymbol["Letter"] = 12] = "Letter";
    CrmIconSymbol[CrmIconSymbol["Salesorder"] = 13] = "Salesorder";
    CrmIconSymbol[CrmIconSymbol["Competitor"] = 14] = "Competitor";
    CrmIconSymbol[CrmIconSymbol["Task"] = 15] = "Task";
    CrmIconSymbol[CrmIconSymbol["Fax"] = 16] = "Fax";
    CrmIconSymbol[CrmIconSymbol["Email"] = 17] = "Email";
    CrmIconSymbol[CrmIconSymbol["Phonecall"] = 18] = "Phonecall";
    CrmIconSymbol[CrmIconSymbol["Contract"] = 19] = "Contract";
    CrmIconSymbol[CrmIconSymbol["Quote"] = 20] = "Quote";
    CrmIconSymbol[CrmIconSymbol["Incident"] = 21] = "Incident";
    CrmIconSymbol[CrmIconSymbol["Campaign"] = 22] = "Campaign";
    CrmIconSymbol[CrmIconSymbol["Appointment"] = 23] = "Appointment";
    CrmIconSymbol[CrmIconSymbol["Invoice"] = 24] = "Invoice";
    CrmIconSymbol[CrmIconSymbol["Knowledgearticle"] = 25] = "Knowledgearticle";
    CrmIconSymbol[CrmIconSymbol["Product"] = 26] = "Product";
    CrmIconSymbol[CrmIconSymbol["Opportunityproduct"] = 27] = "Opportunityproduct";
    CrmIconSymbol[CrmIconSymbol["Queueitem"] = 28] = "Queueitem";
    CrmIconSymbol[CrmIconSymbol["Socialprofile"] = 29] = "Socialprofile";
    CrmIconSymbol[CrmIconSymbol["ChevronRight"] = 30] = "ChevronRight";
    CrmIconSymbol[CrmIconSymbol["Globe"] = 31] = "Globe";
    CrmIconSymbol[CrmIconSymbol["Ticker"] = 32] = "Ticker";
    CrmIconSymbol[CrmIconSymbol["Duration"] = 33] = "Duration";
    CrmIconSymbol[CrmIconSymbol["Timezone"] = 34] = "Timezone";
    CrmIconSymbol[CrmIconSymbol["Language"] = 35] = "Language";
    CrmIconSymbol[CrmIconSymbol["MultipleUsers"] = 36] = "MultipleUsers";
    CrmIconSymbol[CrmIconSymbol["Regarding"] = 37] = "Regarding";
    CrmIconSymbol[CrmIconSymbol["Checklist"] = 38] = "Checklist";
    CrmIconSymbol[CrmIconSymbol["TwoOptions"] = 39] = "TwoOptions";
    CrmIconSymbol[CrmIconSymbol["Currency"] = 40] = "Currency";
    CrmIconSymbol[CrmIconSymbol["DateTime"] = 41] = "DateTime";
    CrmIconSymbol[CrmIconSymbol["OfficeIcon"] = 42] = "OfficeIcon";
    CrmIconSymbol[CrmIconSymbol["OfficeIconWordFileSharedWithMe"] = 43] = "OfficeIconWordFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconWordFileCheckedOut"] = 44] = "OfficeIconWordFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExcelFile"] = 45] = "OfficeIconExcelFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExcelFileSharedWithMe"] = 46] = "OfficeIconExcelFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExcelFileCheckedOut"] = 47] = "OfficeIconExcelFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPowerPointFile"] = 48] = "OfficeIconPowerPointFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPowerPointFileSharedWithMe"] = 49] = "OfficeIconPowerPointFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPowerPointFileCheckedOut"] = 50] = "OfficeIconPowerPointFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconOneNoteFile"] = 51] = "OfficeIconOneNoteFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconOneNoteFileSharedWithMe"] = 52] = "OfficeIconOneNoteFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconOneNoteFileCheckedOut"] = 53] = "OfficeIconOneNoteFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAccessFile"] = 54] = "OfficeIconAccessFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAccessFileSharedWithMe"] = 55] = "OfficeIconAccessFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAccessFileCheckedOut"] = 56] = "OfficeIconAccessFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconProjectFile"] = 57] = "OfficeIconProjectFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconProjectFileSharedWithMe"] = 58] = "OfficeIconProjectFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconProjectFileCheckedOut"] = 59] = "OfficeIconProjectFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVisioFile"] = 60] = "OfficeIconVisioFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVisioFileSharedWithMe"] = 61] = "OfficeIconVisioFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVisioFileCheckedOut"] = 62] = "OfficeIconVisioFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconHelpFile"] = 63] = "OfficeIconHelpFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconHelpFileSharedWithMe"] = 64] = "OfficeIconHelpFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconHelpFileCheckedOut"] = 65] = "OfficeIconHelpFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconZipFile"] = 66] = "OfficeIconZipFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconZipFileSharedWithMe"] = 67] = "OfficeIconZipFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconZipFileCheckedOut"] = 68] = "OfficeIconZipFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconSetupFile"] = 69] = "OfficeIconSetupFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconSetupFileSharedWithMe"] = 70] = "OfficeIconSetupFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconSetupFileCheckedOut"] = 71] = "OfficeIconSetupFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVideoFile"] = 72] = "OfficeIconVideoFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVideoFileSharedWithMe"] = 73] = "OfficeIconVideoFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconVideoFileCheckedOut"] = 74] = "OfficeIconVideoFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconImageFile"] = 75] = "OfficeIconImageFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconImageFileSharedWithMe"] = 76] = "OfficeIconImageFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconImageFileCheckedOut"] = 77] = "OfficeIconImageFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAudioFile"] = 78] = "OfficeIconAudioFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAudioFileSharedWithMe"] = 79] = "OfficeIconAudioFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconAudioFileCheckedOut"] = 80] = "OfficeIconAudioFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExecutableFile"] = 81] = "OfficeIconExecutableFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExecutableFileSharedWithMe"] = 82] = "OfficeIconExecutableFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconExecutableFileCheckedOut"] = 83] = "OfficeIconExecutableFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPdfFile"] = 84] = "OfficeIconPdfFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPdfFileSharedWithMe"] = 85] = "OfficeIconPdfFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconPdfFileCheckedOut"] = 86] = "OfficeIconPdfFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconWebFile"] = 87] = "OfficeIconWebFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconWebFileSharedWithMe"] = 88] = "OfficeIconWebFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconWebFileCheckedOut"] = 89] = "OfficeIconWebFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconTextFile"] = 90] = "OfficeIconTextFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconTextFileSharedWithMe"] = 91] = "OfficeIconTextFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconTextFileCheckedOut"] = 92] = "OfficeIconTextFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconFolder"] = 93] = "OfficeIconFolder";
    CrmIconSymbol[CrmIconSymbol["OfficeIconFolderSharedWithMe"] = 94] = "OfficeIconFolderSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconFolderCheckedOut"] = 95] = "OfficeIconFolderCheckedOut";
    CrmIconSymbol[CrmIconSymbol["OfficeIconGenericFile"] = 96] = "OfficeIconGenericFile";
    CrmIconSymbol[CrmIconSymbol["OfficeIconGenericFileSharedWithMe"] = 97] = "OfficeIconGenericFileSharedWithMe";
    CrmIconSymbol[CrmIconSymbol["OfficeIconGenericFileCheckedOut"] = 98] = "OfficeIconGenericFileCheckedOut";
    CrmIconSymbol[CrmIconSymbol["Timer"] = 99] = "Timer";
    CrmIconSymbol[CrmIconSymbol["ScanBarcodeButton"] = 100] = "ScanBarcodeButton";
})(CrmIconSymbol || (CrmIconSymbol = {}));
exports.CrmIconSymbol = CrmIconSymbol;
/**
 * Mapping of CrmIconSymbol enum to unicode char that should be used in CrmIcon base control
 */
var CrmIconSymbolMapping = {
    Entity: "crmSymbolFont entity-symbol Entity",
    List: "crmSymbolFont entity-symbol List",
    Account: "crmSymbolFont entity-symbol Account",
    ScanBarcodeButton: "crmSymbolFont entity-symbol ScanBarcodeButton",
    Opportunity: "crmSymbolFont entity-symbol Opportunity",
    Sharepointdocument: "crmSymbolFont entity-symbol Sharepointdocument",
    Dashboard: "crmSymbolFont entity-symbol Dashboard",
    WORKSPACE: "crmSymbolFont entity-symbol WORKSPACE",
    Lead: "crmSymbolFont entity-symbol Lead",
    Contact: "crmSymbolFont entity-symbol Contact",
    Activitypointer: "crmSymbolFont entity-symbol Activitypointer",
    Drafts: "crmSymbolFont entity-symbol Drafts",
    Systemuser: "crmSymbolFont entity-symbol Systemuser",
    Letter: "crmSymbolFont entity-symbol Letter",
    Salesorder: "crmSymbolFont entity-symbol Salesorder",
    Competitor: "crmSymbolFont entity-symbol Competitor",
    Task: "crmSymbolFont entity-symbol Task",
    Fax: "crmSymbolFont entity-symbol Fax",
    Email: "crmSymbolFont entity-symbol Email",
    Phonecall: "crmSymbolFont entity-symbol Phonecall",
    Contract: "crmSymbolFont entity-symbol Contract",
    Quote: "crmSymbolFont entity-symbol Quote",
    Incident: "crmSymbolFont entity-symbol Incident",
    Campaign: "crmSymbolFont entity-symbol Campaign",
    Appointment: "crmSymbolFont entity-symbol Appointment",
    Invoice: "crmSymbolFont entity-symbol Invoice",
    Knowledgearticle: "crmSymbolFont entity-symbol Knowledgearticle",
    Product: "crmSymbolFont entity-symbol Product",
    Opportunityproduct: "crmSymbolFont entity-symbol Opportunityproduct",
    Queueitem: "crmSymbolFont entity-symbol Queueitem",
    Socialprofile: "crmSymbolFont entity-symbol Socialprofile",
    ChevronRight: "crmSymbolFont entity-symbol ChevronRight",
    Globe: "crmSymbolFont entity-symbol Globe",
    Ticker: "crmSymbolFont entity-symbol Ticker",
    Duration: "crmSymbolFont entity-symbol Duration",
    Timezone: "crmSymbolFont entity-symbol Timezone",
    Language: "crmSymbolFont entity-symbol Language",
    MultipleUsers: "crmSymbolFont entity-symbol MultipleUsers",
    Regarding: "crmSymbolFont entity-symbol Regarding",
    Checklist: "crmSymbolFont entity-symbol Checklist",
    TwoOptions: "crmSymbolFont entity-symbol TwoOptions",
    Currency: "crmSymbolFont entity-symbol Currency",
    DateTime: "crmSymbolFont entity-symbol DateTime",
    OfficeIcon: "crmSymbolFont entity-symbol OfficeIcon",
    OfficeIconWordFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconWordFileSharedWithMe",
    OfficeIconWordFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconWordFileCheckedOut",
    OfficeIconExcelFile: "crmSymbolFont entity-symbol OfficeIconExcelFile",
    OfficeIconExcelFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconExcelFileSharedWithMe",
    OfficeIconExcelFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconExcelFileCheckedOut",
    OfficeIconPowerPointFile: "crmSymbolFont entity-symbol OfficeIconPowerPointFile",
    OfficeIconPowerPointFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconPowerPointFileSharedWithMe",
    OfficeIconPowerPointFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconPowerPointFileCheckedOut",
    OfficeIconOneNoteFile: "crmSymbolFont entity-symbol OfficeIconOneNoteFile",
    OfficeIconOneNoteFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconOneNoteFileSharedWithMe",
    OfficeIconOneNoteFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconOneNoteFileCheckedOut",
    OfficeIconAccessFile: "crmSymbolFont entity-symbol OfficeIconAccessFile",
    OfficeIconAccessFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconAccessFileSharedWithMe",
    OfficeIconAccessFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconAccessFileCheckedOut",
    OfficeIconProjectFile: "crmSymbolFont entity-symbol OfficeIconProjectFile",
    OfficeIconProjectFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconProjectFileSharedWithMe",
    OfficeIconProjectFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconProjectFileCheckedOut",
    OfficeIconVisioFile: "crmSymbolFont entity-symbol OfficeIconVisioFile",
    OfficeIconVisioFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconVisioFileSharedWithMe",
    OfficeIconVisioFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconVisioFileCheckedOut",
    OfficeIconHelpFile: "crmSymbolFont entity-symbol OfficeIconHelpFile",
    OfficeIconHelpFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconHelpFileSharedWithMe",
    OfficeIconHelpFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconHelpFileCheckedOut",
    OfficeIconZipFile: "crmSymbolFont entity-symbol OfficeIconZipFile",
    OfficeIconZipFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconZipFileSharedWithMe",
    OfficeIconZipFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconZipFileCheckedOut",
    OfficeIconSetupFile: "crmSymbolFont entity-symbol OfficeIconSetupFile",
    OfficeIconSetupFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconSetupFileSharedWithMe",
    OfficeIconSetupFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconSetupFileCheckedOut",
    OfficeIconVideoFile: "crmSymbolFont entity-symbol OfficeIconVideoFile",
    OfficeIconVideoFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconVideoFileSharedWithMe",
    OfficeIconVideoFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconVideoFileCheckedOut",
    OfficeIconImageFile: "crmSymbolFont entity-symbol OfficeIconImageFile",
    OfficeIconImageFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconImageFileSharedWithMe",
    OfficeIconImageFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconImageFileCheckedOut",
    OfficeIconAudioFile: "crmSymbolFont entity-symbol OfficeIconAudioFile",
    OfficeIconAudioFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconAudioFileSharedWithMe",
    OfficeIconAudioFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconAudioFileCheckedOut",
    OfficeIconExecutableFile: "crmSymbolFont entity-symbol OfficeIconExecutableFile",
    OfficeIconExecutableFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconExecutableFileSharedWithMe",
    OfficeIconExecutableFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconExecutableFileCheckedOut",
    OfficeIconPdfFile: "crmSymbolFont entity-symbol OfficeIconPdfFile",
    OfficeIconPdfFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconPdfFileSharedWithMe",
    OfficeIconPdfFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconPdfFileCheckedOut",
    OfficeIconWebFile: "crmSymbolFont entity-symbol OfficeIconWebFile",
    OfficeIconWebFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconWebFileSharedWithMe",
    OfficeIconWebFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconWebFileCheckedOut",
    OfficeIconTextFile: "crmSymbolFont entity-symbol OfficeIconTextFile",
    OfficeIconTextFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconTextFileSharedWithMe",
    OfficeIconTextFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconTextFileCheckedOut",
    OfficeIconFolder: "crmSymbolFont entity-symbol OfficeIconFolder",
    OfficeIconFolderSharedWithMe: "crmSymbolFont entity-symbol OfficeIconFolderSharedWithMe",
    OfficeIconFolderCheckedOut: "crmSymbolFont entity-symbol OfficeIconFolderCheckedOut",
    OfficeIconGenericFile: "crmSymbolFont entity-symbol OfficeIconGenericFile",
    OfficeIconGenericFileSharedWithMe: "crmSymbolFont entity-symbol OfficeIconGenericFileSharedWithMe",
    OfficeIconGenericFileCheckedOut: "crmSymbolFont entity-symbol OfficeIconGenericFileCheckedOut",
    Timer: "crmSymbolFont entity-symbol Timer",
};
function getSymbolMapping(type) {
    return CrmIconSymbolMapping[CrmIconSymbol[type]];
}
exports.getSymbolMapping = getSymbolMapping;

},{}],6:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FontIcon_1 = require("../Primitive/FontIcon");
var MicrosoftIconSymbol_1 = require("./MicrosoftIconSymbol");

var FelaConnectHelper_1 = require("../Primitive/FelaConnectHelper");
var InnerMicrosoftIcon = (function (_super) {
    __extends(InnerMicrosoftIcon, _super);
    function InnerMicrosoftIcon() {
        _super.apply(this, arguments);
    }
    InnerMicrosoftIcon.prototype.getSymbolClassName = function (type) {
        return MicrosoftIconSymbol_1.getSymbolMapping(type);
    };
    return InnerMicrosoftIcon;
}(FontIcon_1.FontIcon));
exports.InnerMicrosoftIcon = InnerMicrosoftIcon;
/**
 * Icon Display Type enum
 */
var IconPosition;
(function (IconPosition) {
    IconPosition[IconPosition["None"] = 0] = "None";
    IconPosition[IconPosition["Left"] = 1] = "Left";
    IconPosition[IconPosition["Top"] = 2] = "Top";
})(IconPosition || (IconPosition = {}));
exports.IconPosition = IconPosition;
var MicrosoftIcon = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerMicrosoftIcon);
exports.MicrosoftIcon = MicrosoftIcon;

},{"../Primitive/FelaConnectHelper":13,"../Primitive/FontIcon":19,"./MicrosoftIconSymbol":7,"react-fela":undefined}],7:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * IMPORTANT!
 * DO NOT MAKE CHANGES TO THIS FILE - THIS FILE IS GENERATED BY A BUILD TASK
 * IF YOU NEED TO MAKE CHANGES THEY MUST BE MADE IN THE JSON CONFIGURATION FILE
 */
"use strict";
var MicrosoftIconSymbol;
(function (MicrosoftIconSymbol) {
    MicrosoftIconSymbol[MicrosoftIconSymbol["Expanded"] = 0] = "Expanded";
    MicrosoftIconSymbol[MicrosoftIconSymbol["UpArrowHead"] = 1] = "UpArrowHead";
    MicrosoftIconSymbol[MicrosoftIconSymbol["LeftArrowHead"] = 2] = "LeftArrowHead";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Collapsed"] = 3] = "Collapsed";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Edit"] = 4] = "Edit";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Save"] = 5] = "Save";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Delete"] = 6] = "Delete";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Remove"] = 7] = "Remove";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Add"] = 8] = "Add";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Cancel"] = 9] = "Cancel";
    MicrosoftIconSymbol[MicrosoftIconSymbol["HandClick"] = 10] = "HandClick";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Accept"] = 11] = "Accept";
    MicrosoftIconSymbol[MicrosoftIconSymbol["More"] = 12] = "More";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Forward"] = 13] = "Forward";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Favorite"] = 14] = "Favorite";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Placeholder"] = 15] = "Placeholder";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RatingFull"] = 16] = "RatingFull";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RatingEmpty"] = 17] = "RatingEmpty";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Options"] = 18] = "Options";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Manage"] = 19] = "Manage";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Settings"] = 20] = "Settings";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Find"] = 21] = "Find";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Help"] = 22] = "Help";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ViewNotifications"] = 23] = "ViewNotifications";
    MicrosoftIconSymbol[MicrosoftIconSymbol["StageAdvance"] = 24] = "StageAdvance";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CheckMark"] = 25] = "CheckMark";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Locked"] = 26] = "Locked";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Lock"] = 27] = "Lock";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MoreOptions"] = 28] = "MoreOptions";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ContactInfo"] = 29] = "ContactInfo";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Pin"] = 30] = "Pin";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Unpin"] = 31] = "Unpin";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Refresh"] = 32] = "Refresh";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Details"] = 33] = "Details";
    MicrosoftIconSymbol[MicrosoftIconSymbol["VisualFilter"] = 34] = "VisualFilter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilter"] = 35] = "GlobalFilter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Diamond"] = 36] = "Diamond";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ApplyFilter"] = 37] = "ApplyFilter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CancelFilter"] = 38] = "CancelFilter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["StreamView"] = 39] = "StreamView";
    MicrosoftIconSymbol[MicrosoftIconSymbol["TileView"] = 40] = "TileView";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Import"] = 41] = "Import";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Tools"] = 42] = "Tools";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Attach"] = 43] = "Attach";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Filter"] = 44] = "Filter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Copy"] = 45] = "Copy";
    MicrosoftIconSymbol[MicrosoftIconSymbol["HighPriority"] = 46] = "HighPriority";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReduceTile"] = 47] = "ReduceTile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ExpandTile"] = 48] = "ExpandTile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilterExpand"] = 49] = "GlobalFilterExpand";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilterCollapse"] = 50] = "GlobalFilterCollapse";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Clear"] = 51] = "Clear";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Post"] = 52] = "Post";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OneNote"] = 53] = "OneNote";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Home"] = 54] = "Home";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SetAsHome"] = 55] = "SetAsHome";
    MicrosoftIconSymbol[MicrosoftIconSymbol["BackButton"] = 56] = "BackButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["BackButtonWithoutBorder"] = 57] = "BackButtonWithoutBorder";
    MicrosoftIconSymbol[MicrosoftIconSymbol["UpArrow"] = 58] = "UpArrow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DownArrow"] = 59] = "DownArrow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SetActiveButton"] = 60] = "SetActiveButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SearchButton"] = 61] = "SearchButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ForwardButton"] = 62] = "ForwardButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Mail"] = 63] = "Mail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CheckedMail"] = 64] = "CheckedMail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["FailedMail"] = 65] = "FailedMail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Phone"] = 66] = "Phone";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Chat"] = 67] = "Chat";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenPane"] = 68] = "OpenPane";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ClosePane"] = 69] = "ClosePane";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AddFriend"] = 70] = "AddFriend";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Arrow"] = 71] = "Arrow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DropdownArrow"] = 72] = "DropdownArrow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["FlsLocked"] = 73] = "FlsLocked";
    MicrosoftIconSymbol[MicrosoftIconSymbol["LinkArticle"] = 74] = "LinkArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["UnlinkArticle"] = 75] = "UnlinkArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CopyLink"] = 76] = "CopyLink";
    MicrosoftIconSymbol[MicrosoftIconSymbol["EmailLink"] = 77] = "EmailLink";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Share"] = 78] = "Share";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Assign"] = 79] = "Assign";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Connect"] = 80] = "Connect";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Opportunity"] = 81] = "Opportunity";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Appointment"] = 82] = "Appointment";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Task"] = 83] = "Task";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Case"] = 84] = "Case";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PhoneCallIncoming"] = 85] = "PhoneCallIncoming";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PhoneCallOutgoing"] = 86] = "PhoneCallOutgoing";
    MicrosoftIconSymbol[MicrosoftIconSymbol["EmailIncoming"] = 87] = "EmailIncoming";
    MicrosoftIconSymbol[MicrosoftIconSymbol["EmailOutgoing"] = 88] = "EmailOutgoing";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SendEmail"] = 89] = "SendEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ApplyTemplate"] = 90] = "ApplyTemplate";
    MicrosoftIconSymbol[MicrosoftIconSymbol["InsertKbArticle"] = 91] = "InsertKbArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SendSelected"] = 92] = "SendSelected";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SaveAndClose"] = 93] = "SaveAndClose";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReplyEmail"] = 94] = "ReplyEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReplyAllEmail"] = 95] = "ReplyAllEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ForwardEmail"] = 96] = "ForwardEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Close"] = 97] = "Close";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Activate"] = 98] = "Activate";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DeActivate"] = 99] = "DeActivate";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DeleteBulk"] = 100] = "DeleteBulk";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SocialActivityIncoming"] = 101] = "SocialActivityIncoming";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SocialActivityOutgoing"] = 102] = "SocialActivityOutgoing";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CustomActivity"] = 103] = "CustomActivity";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SystemPost"] = 104] = "SystemPost";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Convert"] = 105] = "Convert";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MarkAsWon"] = 106] = "MarkAsWon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MarkAsLost"] = 107] = "MarkAsLost";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SetRegarding"] = 108] = "SetRegarding";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SaveAsComplete"] = 109] = "SaveAsComplete";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SwitchProcess"] = 110] = "SwitchProcess";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Recalculate"] = 111] = "Recalculate";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SendDirectEmail"] = 112] = "SendDirectEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenMailbox"] = 113] = "OpenMailbox";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReOpenOpportunity"] = 114] = "ReOpenOpportunity";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReactivateLead"] = 115] = "ReactivateLead";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Disqualify"] = 116] = "Disqualify";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Qualify"] = 117] = "Qualify";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SelectView"] = 118] = "SelectView";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SelectChart"] = 119] = "SelectChart";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenInBrowser"] = 120] = "OpenInBrowser";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NewAppointment"] = 121] = "NewAppointment";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NewRecurringAppointment"] = 122] = "NewRecurringAppointment";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NewPhoneCall"] = 123] = "NewPhoneCall";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NewTask"] = 124] = "NewTask";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NewEmail"] = 125] = "NewEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AddExisting"] = 126] = "AddExisting";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SaveAndEdit"] = 127] = "SaveAndEdit";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Default"] = 128] = "Default";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ScrollRight"] = 129] = "ScrollRight";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ScrollLeft"] = 130] = "ScrollLeft";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SaveAndRunRoutingRule"] = 131] = "SaveAndRunRoutingRule";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RunRoutingRule"] = 132] = "RunRoutingRule";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ResolveCase"] = 133] = "ResolveCase";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CancelCase"] = 134] = "CancelCase";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ReactivateCase"] = 135] = "ReactivateCase";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AddToQueue"] = 136] = "AddToQueue";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CreateChildCase"] = 137] = "CreateChildCase";
    MicrosoftIconSymbol[MicrosoftIconSymbol["QueueItemRoute"] = 138] = "QueueItemRoute";
    MicrosoftIconSymbol[MicrosoftIconSymbol["QueueItemRelease"] = 139] = "QueueItemRelease";
    MicrosoftIconSymbol[MicrosoftIconSymbol["QueueItemRemove"] = 140] = "QueueItemRemove";
    MicrosoftIconSymbol[MicrosoftIconSymbol["QueueItemPick"] = 141] = "QueueItemPick";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Drilldown"] = 142] = "Drilldown";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PopOverButton"] = 143] = "PopOverButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ExitButton"] = 144] = "ExitButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ExportToExcel"] = 145] = "ExportToExcel";
    MicrosoftIconSymbol[MicrosoftIconSymbol["WordTemplates"] = 146] = "WordTemplates";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DocumentTemplates"] = 147] = "DocumentTemplates";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenInPowerBI"] = 148] = "OpenInPowerBI";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenPowerBIReport"] = 149] = "OpenPowerBIReport";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OpenDelve"] = 150] = "OpenDelve";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ArticleLink"] = 151] = "ArticleLink";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ArchiveArticle"] = 152] = "ArchiveArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ApproveArticle"] = 153] = "ApproveArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DiscardArticle"] = 154] = "DiscardArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Minor"] = 155] = "Minor";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Major"] = 156] = "Major";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PublishKnowledgeArticle"] = 157] = "PublishKnowledgeArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RelateArticle"] = 158] = "RelateArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RelateProduct"] = 159] = "RelateProduct";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RestoreArticle"] = 160] = "RestoreArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RevertToDraftArticle"] = 161] = "RevertToDraftArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Translate"] = 162] = "Translate";
    MicrosoftIconSymbol[MicrosoftIconSymbol["UpdateArticle"] = 163] = "UpdateArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RemoveFilter"] = 164] = "RemoveFilter";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Article"] = 165] = "Article";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Graph"] = 166] = "Graph";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CSR"] = 167] = "CSR";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MembersIcon"] = 168] = "MembersIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["QueueIcon"] = 169] = "QueueIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SiteMap"] = 170] = "SiteMap";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NormalPriority"] = 171] = "NormalPriority";
    MicrosoftIconSymbol[MicrosoftIconSymbol["LowPriority"] = 172] = "LowPriority";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ViewIcon"] = 173] = "ViewIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RecentCases"] = 174] = "RecentCases";
    MicrosoftIconSymbol[MicrosoftIconSymbol["KBRecords"] = 175] = "KBRecords";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NumberOfViews"] = 176] = "NumberOfViews";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ResizeHandle"] = 177] = "ResizeHandle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["TaskBasedFlow"] = 178] = "TaskBasedFlow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["InformationIcon"] = 179] = "InformationIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PencilIcon"] = 180] = "PencilIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ErrorIcon"] = 181] = "ErrorIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SuccessIcon"] = 182] = "SuccessIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OptionsetIcon"] = 183] = "OptionsetIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["NotificationIcon"] = 184] = "NotificationIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PanelHeaderImportDataIcon"] = 185] = "PanelHeaderImportDataIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SidePanelUpload"] = 186] = "SidePanelUpload";
    MicrosoftIconSymbol[MicrosoftIconSymbol["New"] = 187] = "New";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DetailsPageClose"] = 188] = "DetailsPageClose";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SettingsListIcon"] = 189] = "SettingsListIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ListIcon"] = 190] = "ListIcon";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ForwardDisable"] = 191] = "ForwardDisable";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PdfIconFile"] = 192] = "PdfIconFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["PresentationFile"] = 193] = "PresentationFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OneNoteFile"] = 194] = "OneNoteFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AccessFile"] = 195] = "AccessFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["VisioFile"] = 196] = "VisioFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ProjectFile"] = 197] = "ProjectFile";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Plus"] = 198] = "Plus";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ChevronUp"] = 199] = "ChevronUp";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ChevronDown"] = 200] = "ChevronDown";
    MicrosoftIconSymbol[MicrosoftIconSymbol["HappySmiley"] = 201] = "HappySmiley";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SadSmiley"] = 202] = "SadSmiley";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CaseResolution"] = 203] = "CaseResolution";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CampaignResolution"] = 204] = "CampaignResolution";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ServiceActivity"] = 205] = "ServiceActivity";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Notes"] = 206] = "Notes";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Audio"] = 207] = "Audio";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Camera"] = 208] = "Camera";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Video"] = 209] = "Video";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Image"] = 210] = "Image";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Html"] = 211] = "Html";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointEditDocument"] = 212] = "SharePointEditDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointDeleteDocument"] = 213] = "SharePointDeleteDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointCheckoutDocument"] = 214] = "SharePointCheckoutDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointCheckinDocument"] = 215] = "SharePointCheckinDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointEditDocumentProperties"] = 216] = "SharePointEditDocumentProperties";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointDiscardCheckoutDocument"] = 217] = "SharePointDiscardCheckoutDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointNewDocument"] = 218] = "SharePointNewDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointNewWordDocument"] = 219] = "SharePointNewWordDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointNewExcelDocument"] = 220] = "SharePointNewExcelDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointNewPowerPointDocument"] = 221] = "SharePointNewPowerPointDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointNewOneNoteDocument"] = 222] = "SharePointNewOneNoteDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointUploadDocument"] = 223] = "SharePointUploadDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointChangeLocation"] = 224] = "SharePointChangeLocation";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointAddDocumentLocation"] = 225] = "SharePointAddDocumentLocation";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointEditLocation"] = 226] = "SharePointEditLocation";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointOpenLocation"] = 227] = "SharePointOpenLocation";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SharePointOpenDocument"] = 228] = "SharePointOpenDocument";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SendByEmail"] = 229] = "SendByEmail";
    MicrosoftIconSymbol[MicrosoftIconSymbol["CreateQuote"] = 230] = "CreateQuote";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Reply"] = 231] = "Reply";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Warning"] = 232] = "Warning";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Play"] = 233] = "Play";
    MicrosoftIconSymbol[MicrosoftIconSymbol["ExpandButton"] = 234] = "ExpandButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AssociatedArticle"] = 235] = "AssociatedArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["DisassociatedArticle"] = 236] = "DisassociatedArticle";
    MicrosoftIconSymbol[MicrosoftIconSymbol["FormDesign"] = 237] = "FormDesign";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilterClearAll"] = 238] = "GlobalFilterClearAll";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilterExpandedRow"] = 239] = "GlobalFilterExpandedRow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["GlobalFilterCollapsedRow"] = 240] = "GlobalFilterCollapsedRow";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RelationshipAssistant"] = 241] = "RelationshipAssistant";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AutomaticSuggestions"] = 242] = "AutomaticSuggestions";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SemanticZoom"] = 243] = "SemanticZoom";
    MicrosoftIconSymbol[MicrosoftIconSymbol["SemanticZoomMirrored"] = 244] = "SemanticZoomMirrored";
    MicrosoftIconSymbol[MicrosoftIconSymbol["BackwardButton"] = 245] = "BackwardButton";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MultiSelect"] = 246] = "MultiSelect";
    MicrosoftIconSymbol[MicrosoftIconSymbol["MultiSelectMirrored"] = 247] = "MultiSelectMirrored";
    MicrosoftIconSymbol[MicrosoftIconSymbol["Spinning"] = 248] = "Spinning";
    MicrosoftIconSymbol[MicrosoftIconSymbol["RetireProduct"] = 249] = "RetireProduct";
    MicrosoftIconSymbol[MicrosoftIconSymbol["AddProduct"] = 250] = "AddProduct";
    MicrosoftIconSymbol[MicrosoftIconSymbol["OfflineStatus"] = 251] = "OfflineStatus";
})(MicrosoftIconSymbol || (MicrosoftIconSymbol = {}));
exports.MicrosoftIconSymbol = MicrosoftIconSymbol;
/**
 * Mapping of MicrosoftIconSymbol enum to unicode char that should be used in MicrosoftIcon base control
 */
var MicrosoftIconSymbolMapping = {
    Expanded: "symbolFont Expanded-symbol",
    UpArrowHead: "symbolFont UpArrowHead-symbol",
    LeftArrowHead: "symbolFont LeftArrowHead-symbol",
    Collapsed: "symbolFont Collapsed-symbol",
    Edit: "symbolFont Edit-symbol",
    Save: "symbolFont Save-symbol",
    Delete: "symbolFont Delete-symbol",
    Remove: "symbolFont Remove-symbol",
    Add: "symbolFont Add-symbol",
    Cancel: "symbolFont Cancel-symbol",
    HandClick: "symbolFont HandClick-symbol",
    Accept: "symbolFont Accept-symbol",
    More: "symbolFont More-symbol",
    Forward: "symbolFont Forward-symbol",
    Favorite: "symbolFont Favorite-symbol",
    Placeholder: "symbolFont Placeholder-symbol",
    RatingFull: "symbolFont RatingFull-symbol",
    RatingEmpty: "symbolFont RatingEmpty-symbol",
    Options: "symbolFont Options-symbol",
    Manage: "symbolFont Manage-symbol",
    Settings: "symbolFont Settings-symbol",
    Find: "symbolFont Find-symbol",
    Help: "symbolFont Help-symbol",
    ViewNotifications: "symbolFont ViewNotifications-symbol",
    StageAdvance: "symbolFont StageAdvance-symbol",
    CheckMark: "symbolFont CheckMark-symbol",
    Locked: "symbolFont Locked-symbol",
    Lock: "symbolFont Lock-symbol",
    MoreOptions: "symbolFont MoreOptions-symbol",
    ContactInfo: "symbolFont ContactInfo-symbol",
    Pin: "symbolFont Pin-symbol",
    Unpin: "symbolFont Unpin-symbol",
    Refresh: "symbolFont Refresh-symbol",
    Details: "symbolFont Details-symbol",
    VisualFilter: "symbolFont VisualFilter-symbol",
    GlobalFilter: "symbolFont GlobalFilter-symbol",
    Diamond: "symbolFont Diamond-symbol",
    ApplyFilter: "symbolFont ApplyFilter-symbol",
    CancelFilter: "symbolFont CancelFilter-symbol",
    StreamView: "symbolFont StreamView-symbol",
    TileView: "symbolFont TileView-symbol",
    Import: "symbolFont Import-symbol",
    Tools: "symbolFont Tools-symbol",
    Attach: "symbolFont Attach-symbol",
    Filter: "symbolFont Filter-symbol",
    Copy: "symbolFont Copy-symbol",
    HighPriority: "symbolFont HighPriority-symbol",
    ReduceTile: "symbolFont ReduceTile-symbol",
    ExpandTile: "symbolFont ExpandTile-symbol",
    GlobalFilterExpand: "symbolFont GlobalFilterExpand-symbol",
    GlobalFilterCollapse: "symbolFont GlobalFilterCollapse-symbol",
    Clear: "symbolFont Clear-symbol",
    Post: "symbolFont Post-symbol",
    OneNote: "symbolFont OneNote-symbol",
    Home: "symbolFont Home-symbol",
    SetAsHome: "symbolFont SetAsHome-symbol",
    BackButton: "symbolFont BackButton-symbol",
    BackButtonWithoutBorder: "symbolFont BackButtonWithoutBorder-symbol",
    UpArrow: "symbolFont UpArrow-symbol",
    DownArrow: "symbolFont DownArrow-symbol",
    SetActiveButton: "symbolFont SetActiveButton-symbol",
    SearchButton: "symbolFont SearchButton-symbol",
    ForwardButton: "symbolFont ForwardButton-symbol",
    Mail: "symbolFont Mail-symbol",
    CheckedMail: "symbolFont CheckedMail-symbol",
    FailedMail: "symbolFont FailedMail-symbol",
    Phone: "symbolFont Phone-symbol",
    Chat: "symbolFont Chat-symbol",
    OpenPane: "symbolFont OpenPane-symbol",
    ClosePane: "symbolFont ClosePane-symbol",
    AddFriend: "symbolFont AddFriend-symbol",
    Arrow: "symbolFont Arrow-symbol",
    DropdownArrow: "symbolFont DropdownArrow-symbol",
    FlsLocked: "symbolFont FlsLocked-symbol",
    LinkArticle: "symbolFont LinkArticle-symbol",
    UnlinkArticle: "symbolFont UnlinkArticle-symbol",
    CopyLink: "symbolFont CopyLink-symbol",
    EmailLink: "symbolFont EmailLink-symbol",
    Share: "symbolFont Share-symbol",
    Assign: "symbolFont Assign-symbol",
    Connect: "symbolFont Connect-symbol",
    Opportunity: "symbolFont Opportunity-symbol",
    Appointment: "symbolFont Appointment-symbol",
    Task: "symbolFont Task-symbol",
    Case: "symbolFont Case-symbol",
    PhoneCallIncoming: "symbolFont PhoneCallIncoming-symbol",
    PhoneCallOutgoing: "symbolFont PhoneCallOutgoing-symbol",
    EmailIncoming: "symbolFont EmailIncoming-symbol",
    EmailOutgoing: "symbolFont EmailOutgoing-symbol",
    SendEmail: "symbolFont SendEmail-symbol",
    ApplyTemplate: "symbolFont ApplyTemplate-symbol",
    InsertKbArticle: "symbolFont InsertKbArticle-symbol",
    SendSelected: "symbolFont SendSelected-symbol",
    SaveAndClose: "symbolFont SaveAndClose-symbol",
    ReplyEmail: "symbolFont ReplyEmail-symbol",
    ReplyAllEmail: "symbolFont ReplyAllEmail-symbol",
    ForwardEmail: "symbolFont ForwardEmail-symbol",
    Close: "symbolFont Close-symbol",
    Activate: "symbolFont Activate-symbol",
    DeActivate: "symbolFont DeActivate-symbol",
    DeleteBulk: "symbolFont DeleteBulk-symbol",
    SocialActivityIncoming: "symbolFont SocialActivityIncoming-symbol",
    SocialActivityOutgoing: "symbolFont SocialActivityOutgoing-symbol",
    CustomActivity: "symbolFont CustomActivity-symbol",
    SystemPost: "symbolFont SystemPost-symbol",
    Convert: "symbolFont Convert-symbol",
    MarkAsWon: "symbolFont MarkAsWon-symbol",
    MarkAsLost: "symbolFont MarkAsLost-symbol",
    SetRegarding: "symbolFont SetRegarding-symbol",
    SaveAsComplete: "symbolFont SaveAsComplete-symbol",
    SwitchProcess: "symbolFont SwitchProcess-symbol",
    Recalculate: "symbolFont Recalculate-symbol",
    SendDirectEmail: "symbolFont SendDirectEmail-symbol",
    OpenMailbox: "symbolFont OpenMailbox-symbol",
    ReOpenOpportunity: "symbolFont ReOpenOpportunity-symbol",
    ReactivateLead: "symbolFont ReactivateLead-symbol",
    Disqualify: "symbolFont Disqualify-symbol",
    Qualify: "symbolFont Qualify-symbol",
    SelectView: "symbolFont SelectView-symbol",
    SelectChart: "symbolFont SelectChart-symbol",
    OpenInBrowser: "symbolFont OpenInBrowser-symbol",
    NewAppointment: "symbolFont NewAppointment-symbol",
    NewRecurringAppointment: "symbolFont NewRecurringAppointment-symbol",
    NewPhoneCall: "symbolFont NewPhoneCall-symbol",
    NewTask: "symbolFont NewTask-symbol",
    NewEmail: "symbolFont NewEmail-symbol",
    AddExisting: "symbolFont AddExisting-symbol",
    SaveAndEdit: "symbolFont SaveAndEdit-symbol",
    Default: "symbolFont Default-symbol",
    ScrollRight: "symbolFont ScrollRight-symbol",
    ScrollLeft: "symbolFont ScrollLeft-symbol",
    SaveAndRunRoutingRule: "symbolFont SaveAndRunRoutingRule-symbol",
    RunRoutingRule: "symbolFont RunRoutingRule-symbol",
    ResolveCase: "symbolFont ResolveCase-symbol",
    CancelCase: "symbolFont CancelCase-symbol",
    ReactivateCase: "symbolFont ReactivateCase-symbol",
    AddToQueue: "symbolFont AddToQueue-symbol",
    CreateChildCase: "symbolFont CreateChildCase-symbol",
    QueueItemRoute: "symbolFont QueueItemRoute-symbol",
    QueueItemRelease: "symbolFont QueueItemRelease-symbol",
    QueueItemRemove: "symbolFont QueueItemRemove-symbol",
    QueueItemPick: "symbolFont QueueItemPick-symbol",
    Drilldown: "symbolFont Drilldown-symbol",
    PopOverButton: "symbolFont PopOverButton-symbol",
    ExitButton: "symbolFont ExitButton-symbol",
    ExportToExcel: "symbolFont ExportToExcel-symbol",
    WordTemplates: "symbolFont WordTemplates-symbol",
    DocumentTemplates: "symbolFont DocumentTemplates-symbol",
    OpenInPowerBI: "symbolFont OpenInPowerBI-symbol",
    OpenPowerBIReport: "symbolFont OpenPowerBIReport-symbol",
    OpenDelve: "symbolFont OpenDelve-symbol",
    ArticleLink: "symbolFont ArticleLink-symbol",
    ArchiveArticle: "symbolFont ArchiveArticle-symbol",
    ApproveArticle: "symbolFont ApproveArticle-symbol",
    DiscardArticle: "symbolFont DiscardArticle-symbol",
    Minor: "symbolFont Minor-symbol",
    Major: "symbolFont Major-symbol",
    PublishKnowledgeArticle: "symbolFont PublishKnowledgeArticle-symbol",
    RelateArticle: "symbolFont RelateArticle-symbol",
    RelateProduct: "symbolFont RelateProduct-symbol",
    RestoreArticle: "symbolFont RestoreArticle-symbol",
    RevertToDraftArticle: "symbolFont RevertToDraftArticle-symbol",
    Translate: "symbolFont Translate-symbol",
    UpdateArticle: "symbolFont UpdateArticle-symbol",
    RemoveFilter: "symbolFont RemoveFilter-symbol",
    Article: "symbolFont Article-symbol",
    Graph: "symbolFont Graph-symbol",
    CSR: "symbolFont CSR-symbol",
    MembersIcon: "symbolFont MembersIcon-symbol",
    QueueIcon: "symbolFont QueueIcon-symbol",
    SiteMap: "symbolFont SiteMap-symbol",
    NormalPriority: "symbolFont NormalPriority-symbol",
    LowPriority: "symbolFont LowPriority-symbol",
    ViewIcon: "symbolFont ViewIcon-symbol",
    RecentCases: "symbolFont RecentCases-symbol",
    KBRecords: "symbolFont KBRecords-symbol",
    NumberOfViews: "symbolFont NumberOfViews-symbol",
    ResizeHandle: "symbolFont ResizeHandle-symbol",
    TaskBasedFlow: "symbolFont TaskBasedFlow-symbol",
    InformationIcon: "symbolFont InformationIcon-symbol",
    PencilIcon: "symbolFont PencilIcon-symbol",
    ErrorIcon: "symbolFont ErrorIcon-symbol",
    SuccessIcon: "symbolFont SuccessIcon-symbol",
    OptionsetIcon: "symbolFont OptionsetIcon-symbol",
    NotificationIcon: "symbolFont NotificationIcon-symbol",
    PanelHeaderImportDataIcon: "symbolFont PanelHeaderImportDataIcon-symbol",
    SidePanelUpload: "symbolFont SidePanelUpload-symbol",
    New: "symbolFont New-symbol",
    DetailsPageClose: "symbolFont DetailsPageClose-symbol",
    SettingsListIcon: "symbolFont SettingsListIcon-symbol",
    ListIcon: "symbolFont ListIcon-symbol",
    ForwardDisable: "symbolFont ForwardDisable-symbol",
    PdfIconFile: "symbolFont PdfIconFile-symbol",
    PresentationFile: "symbolFont PresentationFile-symbol",
    OneNoteFile: "symbolFont OneNoteFile-symbol",
    AccessFile: "symbolFont AccessFile-symbol",
    VisioFile: "symbolFont VisioFile-symbol",
    ProjectFile: "symbolFont ProjectFile-symbol",
    Plus: "symbolFont Plus-symbol",
    ChevronUp: "symbolFont ChevronUp-symbol",
    ChevronDown: "symbolFont ChevronDown-symbol",
    HappySmiley: "symbolFont HappySmiley-symbol",
    SadSmiley: "symbolFont SadSmiley-symbol",
    CaseResolution: "symbolFont CaseResolution-symbol",
    CampaignResolution: "symbolFont CampaignResolution-symbol",
    ServiceActivity: "symbolFont ServiceActivity-symbol",
    Notes: "symbolFont Notes-symbol",
    Audio: "symbolFont Audio-symbol",
    Camera: "symbolFont Camera-symbol",
    Video: "symbolFont Video-symbol",
    Image: "symbolFont Image-symbol",
    Html: "symbolFont Html-symbol",
    SharePointEditDocument: "symbolFont SharePointEditDocument-symbol",
    SharePointDeleteDocument: "symbolFont SharePointDeleteDocument-symbol",
    SharePointCheckoutDocument: "symbolFont SharePointCheckoutDocument-symbol",
    SharePointCheckinDocument: "symbolFont SharePointCheckinDocument-symbol",
    SharePointEditDocumentProperties: "symbolFont SharePointEditDocumentProperties-symbol",
    SharePointDiscardCheckoutDocument: "symbolFont SharePointDiscardCheckoutDocument-symbol",
    SharePointNewDocument: "symbolFont SharePointNewDocument-symbol",
    SharePointNewWordDocument: "symbolFont SharePointNewWordDocument-symbol",
    SharePointNewExcelDocument: "symbolFont SharePointNewExcelDocument-symbol",
    SharePointNewPowerPointDocument: "symbolFont SharePointNewPowerPointDocument-symbol",
    SharePointNewOneNoteDocument: "symbolFont SharePointNewOneNoteDocument-symbol",
    SharePointUploadDocument: "symbolFont SharePointUploadDocument-symbol",
    SharePointChangeLocation: "symbolFont SharePointChangeLocation-symbol",
    SharePointAddDocumentLocation: "symbolFont SharePointAddDocumentLocation-symbol",
    SharePointEditLocation: "symbolFont SharePointEditLocation-symbol",
    SharePointOpenLocation: "symbolFont SharePointOpenLocation-symbol",
    SharePointOpenDocument: "symbolFont SharePointOpenDocument-symbol",
    SendByEmail: "symbolFont SendByEmail-symbol",
    CreateQuote: "symbolFont CreateQuote-symbol",
    Reply: "symbolFont Reply-symbol",
    Warning: "symbolFont Warning-symbol",
    Play: "symbolFont Play-symbol",
    ExpandButton: "symbolFont ExpandButton-symbol",
    AssociatedArticle: "symbolFont AssociatedArticle-symbol",
    DisassociatedArticle: "symbolFont DisassociatedArticle-symbol",
    FormDesign: "symbolFont FormDesign-symbol",
    GlobalFilterClearAll: "symbolFont GlobalFilterClearAll-symbol",
    GlobalFilterExpandedRow: "symbolFont GlobalFilterExpandedRow-symbol",
    GlobalFilterCollapsedRow: "symbolFont GlobalFilterCollapsedRow-symbol",
    RelationshipAssistant: "symbolFont RelationshipAssistant-symbol",
    AutomaticSuggestions: "symbolFont AutomaticSuggestions-symbol",
    SemanticZoom: "symbolFont SemanticZoom-symbol",
    SemanticZoomMirrored: "symbolFont SemanticZoomMirrored-symbol",
    BackwardButton: "symbolFont BackwardButton-symbol",
    MultiSelect: "symbolFont MultiSelect-symbol",
    MultiSelectMirrored: "symbolFont MultiSelectMirrored-symbol",
    Spinning: "symbolFont Spinning-symbol",
    RetireProduct: "symbolFont RetireProduct-symbol",
    AddProduct: "symbolFont AddProduct-symbol",
    OfflineStatus: "symbolFont OfflineStatus-symbol",
};
function getSymbolMapping(type) {
    return MicrosoftIconSymbolMapping[MicrosoftIconSymbol[type]];
}
exports.getSymbolMapping = getSymbolMapping;

},{}],8:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * A clickable Button control.
 */
var InnerButton = (function (_super) {
    __extends(InnerButton, _super);
    function InnerButton() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerButton.prototype.getElementName = function () {
        return "button";
    };
    /**
     * Returns the specific element props.
     */
    InnerButton.prototype.getElementProps = function () {
        var props = {
            type: "button",
        };
        props[AttributeName.ACCESS_KEY] = this.props.accessKey;
        if (this.props.disabled) {
            props[AttributeName.DISABLED] = true;
        }
        return props;
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    InnerButton.prototype.getFlexClassName = function (style) {
        return IFlexboxContainerStyle_1.getCssClassName(style ? style.display : null);
    };
    /**
     * Returns the specific style for the underlying element.
     */
    InnerButton.prototype.getElementStyle = function () {
        if (this.props.style) {
            return Object.assign({}, IFlexboxContainerStyle_1.applyIFlexboxContainerProp(this.props.style));
        }
    };
    /**
     * Display name for React dev tools
     */
    InnerButton.displayName = "Button";
    return InnerButton;
}(ComponentBase_1.ComponentBase));
exports.InnerButton = InnerButton;
var Button = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerButton);
exports.Button = Button;

},{"../Supplementary/Accessibility/Attributes/AttributeName":49,"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react-fela":undefined}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");
var AccessibilityRole = require("../Supplementary/Accessibility/Attributes/Role");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Checkvox component
 */
var InnerCheckbox = (function (_super) {
    __extends(InnerCheckbox, _super);
    function InnerCheckbox() {
        _super.apply(this, arguments);
    }
    /**
     * Handler for onChange event of checkbox element
     * @param e
     * @private
     */
    InnerCheckbox.prototype._onCheckboxChange = function (e) {
        var checkboxValue = e.target.checked;
        this.props.onChange(checkboxValue);
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerCheckbox.prototype.getElementName = function () {
        return "input";
    };
    /**
     * Returns the specific element props.
     */
    InnerCheckbox.prototype.getElementProps = function () {
        var props = (_a = {
                disabled: this.props.disabled,
                key: this.props.key,
                id: this.props.id ? this.props.id : this.props.key,
                onChange: this._onCheckboxChange,
                role: AccessibilityRole.CHECKBOX,
                type: "checkbox",
                name: this.props.name ? this.props.name : null
            },
            _a[AttributeName.ARIA_CHECKED] = this.props.checked,
            _a.checked = this.props.checked,
            _a
        );
        return props;
        var _a;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerCheckbox.displayName = "Checkbox";
    __decorate([
        Autobind_1.default
    ], InnerCheckbox.prototype, "_onCheckboxChange", null);
    return InnerCheckbox;
}(ComponentBase_1.ComponentBase));
var Checkbox = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerCheckbox);
exports.Checkbox = Checkbox;

},{"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Accessibility/Attributes/Role":50,"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],10:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/* tslint:disable:crm-prohibit-standard-react-element */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");
var List_1 = require("./List");
var ListItem_1 = require("./ListItem");
var View_1 = require("./View");
var Button_1 = require("./Button");
var ScrollView_1 = require("./ScrollView");
var TextInput_1 = require("./TextInput");
var Text_1 = require("./Text");
var Flyout_1 = require("./Flyout");
var KeyCode_1 = require("../Supplementary/Accessibility/KeyCode");
var GuidHelper_1 = require("../../CustomControls/Utilities/GuidHelper");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
* Component representing an combobox base control
*/
var InnerComboBox = (function (_super) {
    __extends(InnerComboBox, _super);
    function InnerComboBox(props, context) {
        _super.call(this, props, context);
        /**
         *  boolean to track if the mouse click was outsode the flyout
        .*. Need for IE 11 as scroll bar click triggers OnBlur event
         */
        this._clickedOutside = false;
        var visibleOptions = this._getVisibleOptions();
        var initialOption = this._getInitialStateOption(props);
        this._internalIdAppendix = GuidHelper_1.guidV4String();
        this._keyboardShortcutsForTextInput = this._createShortcuts(this._getTextInputId(props.id, this._internalIdAppendix));
        this._keyboardShortcutsForTextOnly = this._createShortcuts(this._getTextOnlyId(props.id, this._internalIdAppendix));
        this.state = {
            option: initialOption,
            isExpanded: false,
            freeTextValue: props && props.freeTextMode ? props.value || props.defaultValue : initialOption && initialOption.text,
            selectedIndex: visibleOptions.indexOf(initialOption),
            isAutoCompleting: false,
        };
    }
    /**
     * Returns the unique ID for the internal container.
     * @param sourceId the initial ID of the component set by the consumer.
     * @param internalIdAppendix the appendix to the ID that makes it unique
     */
    InnerComboBox.prototype._getInternalId = function (sourceId, internalIdAppendix) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (internalIdAppendix === void 0) { internalIdAppendix = this._internalIdAppendix; }
        return sourceId + "_" + internalIdAppendix;
    };
    /**
     * Returns the ID for the internal TextInput component.
     * @param sourceId the initial ID of the component set by the consumer.
     * @param internalIdAppendix the appendix to the ID that makes it unique
     */
    InnerComboBox.prototype._getTextInputId = function (sourceId, internalIdAppendix) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (internalIdAppendix === void 0) { internalIdAppendix = this._internalIdAppendix; }
        return this._getInternalId(sourceId, internalIdAppendix) + "_textInput";
    };
    /**
     * Returns the ID for the internal List component.
     * @param sourceId the initial ID of the component set by the consumer.
     * @param internalIdAppendix the appendix to the ID that makes it unique
     */
    InnerComboBox.prototype._getListId = function (sourceId, internalIdAppendix) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (internalIdAppendix === void 0) { internalIdAppendix = this._internalIdAppendix; }
        return this._getInternalId(sourceId, internalIdAppendix) + "_list";
    };
    /**
     * Returns the ID of a list-item DOM element.
     * @param option
     */
    InnerComboBox.prototype._getListItemId = function (option) {
        return this._getListId() + (option.id || option.value);
    };
    /**
     * Returns the ID for the internal Flyout component.
     * @param sourceId the initial ID of the component set by the consumer.
     * @param internalIdAppendix the appendix to the ID that makes it unique
     */
    InnerComboBox.prototype._getFlyoutId = function (sourceId, internalIdAppendix) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (internalIdAppendix === void 0) { internalIdAppendix = this._internalIdAppendix; }
        return this._getInternalId(sourceId, internalIdAppendix) + "_flyout";
    };
    /**
     * Returns the ID for the internal Text readout component.
     * @param sourceId the initial ID of the component set by the consumer.
     * @param internalIdAppendix the appendix to the ID that makes it unique
     */
    InnerComboBox.prototype._getTextOnlyId = function (sourceId, internalIdAppendix) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (internalIdAppendix === void 0) { internalIdAppendix = this._internalIdAppendix; }
        return this._getInternalId(sourceId, internalIdAppendix) + "_text";
    };
    /**
     * Specifies the call back for handling onScroll event of the flyout.
     * @param event event object.
     */
    InnerComboBox.prototype._onFlyoutScroll = function (event) {
        // This is not exposed to outside as a public prop for now. It can only be overriden in descendants.
    };
    /**
     * Returns the ID of the currently selected active list item.
     */
    InnerComboBox.prototype._getActiveDescendantId = function () {
        if (~this.state.selectedIndex) {
            var currentOption = this._getVisibleOptions()[this.state.selectedIndex];
            if (currentOption) {
                return this._getListItemId(currentOption);
            }
        }
        return "";
    };
    /**
     * Returns the current drop-down size.
     */
    InnerComboBox.prototype._getPageSize = function () {
        return this.props.pageSize || InnerComboBox.DEFAULT_PAGE_SIZE;
    };
    /**
     * Returns options that should be selected after initialization
     * @param props - ComboBox props
     */
    InnerComboBox.prototype._getInitialStateOption = function (props) {
        var option = (props.defaultValue)
            ? this._getOptionByValue(props.options, props.defaultValue)
            : this._getOptionByValue(props.options, props.value);
        if (!option && props.options && props.options.length > 0 && !props.freeTextMode) {
            option = props.options[0];
        }
        return option;
    };
    /**
     * Returns IComboBoxOption from options collection by value
     * Returns undefined if there are two or more options with same value
     * @param options - options collection
     * @param value - value to search
     */
    InnerComboBox.prototype._getOptionByValue = function (options, value) {
        if (options) {
            var filteredOpts = options.filter(function (op) { return op.value === value; });
            if (filteredOpts.length > 0) {
                return filteredOpts[0];
            }
        }
        return undefined;
    };
    /**
     * Invoked when the component receiving new props
     * @param nextProps
     */
    InnerComboBox.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps && (!nextProps.defaultValue)) {
            // if we got here, it means the controlled approach used,
            // thus we should update the control value based on the new props
            if (nextProps.value !== this.props.value) {
                var stateNew = void 0;
                if (nextProps.freeTextMode) {
                    stateNew = { freeTextValue: nextProps.value, };
                }
                else {
                    var option = this._getOptionByValue(nextProps.options, nextProps.value);
                    var selectedIndex = nextProps.options && nextProps.options.indexOf(option);
                    stateNew = { option: option, freeTextValue: option && option.text, selectedIndex: selectedIndex };
                }
                this.setState(stateNew);
            }
        }
        // This code should fire up for uncontrolled approach only
        // and it should cover the case when the options were not
        // available to the control from the very beginning.
        // Perhaps the whole approach needs revisiting, but this code
        // is currently here to cover some real-life situations.
        if (nextProps && nextProps.defaultValue
            && (!this.state.option || !this.state.option.value)
            && (nextProps.options !== this.props.options)) {
            if (!nextProps.freeTextMode) {
                var stateNew = void 0;
                var option = this._getOptionByValue(nextProps.options, nextProps.defaultValue);
                var selectedIndex = nextProps.options && nextProps.options.indexOf(option);
                stateNew = { option: option, freeTextValue: option && option.text, selectedIndex: selectedIndex };
                this.setState(stateNew);
            }
        }
    };
    /**
     * Returns true if the given value differs from the current one.
     */
    InnerComboBox.prototype._getIfValueChanged = function (valueNew) {
        var hasChanged = false;
        if (this.props.freeTextMode) {
            hasChanged = valueNew !== this.state.freeTextValue;
        }
        else {
            hasChanged = valueNew !== (this.state.option && this.state.option.value);
        }
        return hasChanged;
    };
    /**
     * Returns the specific element props.
     */
    InnerComboBox.prototype.getElementProps = function () {
        var props = {
            name: this.props.name,
        };
        return props;
    };
    /**
     * Returns the specific style for the underlying element.
     */
    //protected getElementStyle(): React.CSSProperties
    //{
    //	return this._transformStyle(this.props.style);
    //}
    /**
     * Returns the children of the element.
     */
    InnerComboBox.prototype.getElementChildren = function () {
        return undefined;
    };
    /**
     * A shorthand for setting the expanded state.
     * @param isExpanded
     */
    InnerComboBox.prototype._setIsExpanded = function (isExpanded) {
        if (isExpanded) {
            this._updateContainerWidth();
        }
        this.setState({ isExpanded: isExpanded });
    };
    /**
     * A shorthand for toggling the expanded state.
     */
    InnerComboBox.prototype._toggleIsExpanded = function () {
        this._setIsExpanded(!this.state.isExpanded);
    };
    /**
     * Sets the focus to the control.
     */
    InnerComboBox.prototype._setFocus = function () {
        if (this.props.freeTextMode) {
            if (this._textInput) {
                var textInputDom = ReactDOM.findDOMNode(this._textInput);
                textInputDom && textInputDom.focus();
            }
        }
        else {
            if (this._text) {
                var textDom = ReactDOM.findDOMNode(this._text);
                textDom && textDom.focus();
            }
        }
    };
    /**
     * Resets the selected index to the one that corresponds to the current value.
     */
    InnerComboBox.prototype._resetSelectedIndex = function () {
        if (this.props.defaultValue) {
            // The uncontrolled approach is used, thus state has the priority.
            var stateValue = this.state.option && this.state.option.value;
            var option = this._getOptionByValue(this.props.options, stateValue);
            var stateNew = {
                selectedIndex: this._getVisibleOptions().indexOf(option),
            };
            this.setState(stateNew);
        }
        else {
            // The controlled approach is used, thus the props have the priority.
            var value = this.props.freeTextMode ? this.state.freeTextValue || this.props.value : this.props.value;
            var option = this._getOptionByValue(this.props.options, value);
            var stateNew = {
                selectedIndex: this._getVisibleOptions().indexOf(option),
            };
            this.setState(stateNew);
        }
    };
    /**
     * Sets the current control values and state in accordance to the given value.
     */
    InnerComboBox.prototype._setCurrentItemByValue = function (value) {
        if (this._getIfValueChanged(value)) {
            var option = this._getOptionByValue(this.props.options, value);
            var stateNew = {
                option: option,
                freeTextValue: option && option.text,
                selectedIndex: this._getVisibleOptions().indexOf(option),
            };
            this.setState(stateNew);
            this._handleValueChange(option && option.value);
        }
    };
    /**
     * Sets the current control values and state in accordance to the given item index.
     */
    InnerComboBox.prototype._setCurrentItemByVisibleIndex = function (index) {
        var options = this._getVisibleOptions();
        if (~index && index < options.length) {
            this._setCurrentItemByValue(options[index].value);
        }
    };
    /**
     * Creates a set of keyboard shortcuts the control subscribes for.
     */
    InnerComboBox.prototype._createShortcuts = function (ownerId) {
        var _this = this;
        // TODO: localize strings
        var shortcuts = [
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.UpArrow], function (x) { return _this._handleMove(x, -1); }, false, null, "Move selection one element up", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.DownArrow], function (x) { return _this._handleMove(x, 1); }, false, null, "Move selection one element down", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.PageUp], function (x) { return _this._handleMove(x, -1 * _this._getPageSize()); }, false, null, "Move selection one page up", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.PageDown], function (x) { return _this._handleMove(x, _this._getPageSize()); }, false, null, "Move selection one page down", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.Alt, KeyCode_1.KeyCode.UpArrow], function (x) { return _this._setIsExpanded(false); }, false, null, "Collapse the dropdown", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.Alt, KeyCode_1.KeyCode.DownArrow], function (x) { return _this._handleKeyboardExpandRequest(x); }, false, null, "Expand the dropdown", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.Escape], function (x) { return _this._setIsExpanded(false); }, false, null, "Collapse the dropdown", ownerId),
            this.props.createKeyboardShortcut([KeyCode_1.KeyCode.Enter], function (x) { return _this._handleEnterKey(x); }, false, null, "Use selection to set the control value", ownerId),
        ];
        return shortcuts;
    };
    /**
     * Returns the array of items which are currently visible and selectable via the drop-down.
     */
    InnerComboBox.prototype._getVisibleOptions = function (state, options) {
        if (state === void 0) { state = this.state; }
        if (options === void 0) { options = this.props.options; }
        if (options) {
            if (state && state.isAutoCompleting && state.freeTextValue) {
                options = options.filter(function (x) { return x.text && x.text.toLocaleUpperCase().startsWith(state.freeTextValue.toLocaleUpperCase()); });
            }
        }
        return options;
    };
    /**
     * Returns an array of items with text that is the exact match to the given one.
     */
    InnerComboBox.prototype._searchOptions = function (text) {
        return this.props.options.filter(function (x) { return x.text && x.text === text; });
    };
    /**
     * Reacts on the container instance creation.
     */
    InnerComboBox.prototype._saveContainerRef = function (ref) {
        this._container = ref;
        this._updateContainerWidth();
    };
    /**
     * Scrolls the viewport to the position of the given component so that it becomes visible.
     */
    InnerComboBox.prototype.refCallback = function (ref) {
        this._scrollView = ref;
        if (this._scrollView && this._selectedListItem) {
            this._scrollView.scrollToChild(this._selectedListItem);
        }
    };
    /**
     * Handles the event of mounting a list-item within the dropdown.
     * @param component list item mounted
     */
    InnerComboBox.prototype._saveItemRef = function (item) {
        if (item && item.props && item.props.isSelected) {
            this._selectedListItem = item;
        }
    };
    /**
     * Saves the instance of the internal Text Input.
     */
    InnerComboBox.prototype._saveTextInputRef = function (ref) {
        this._textInput = ref;
    };
    /**
     * Saves the instance of the internal Text readable element.
     */
    InnerComboBox.prototype._saveTextRef = function (ref) {
        this._text = ref;
    };
    /**
     * Updates the cached width of the container.
     */
    InnerComboBox.prototype._updateContainerWidth = function () {
        var containerDom = this._container && ReactDOM.findDOMNode(this._container);
        this._containerWidth = containerDom && containerDom.offsetWidth;
    };
    /**
     * ComboBox.onChange event handler
     * @param e Synthetic React event
     */
    InnerComboBox.prototype._handleValueChange = function (valueNew) {
        if (this.props.onChange) {
            this.props.onChange(valueNew);
        }
    };
    /**
     * Handles the event of selecting an item in a drop-down.
     * @param item the item being selected
     */
    InnerComboBox.prototype._handleItemSelected = function (item) {
        this._selectedListItem = item;
    };
    /**
     * Invoked on a drop-down item click.
     */
    InnerComboBox.prototype._handleItemPointerDown = function (e) {
        if (e.button === 0) {
            e.preventDefault();
            e.stopPropagation();
            var listItem = e.currentTarget;
            var value = listItem.dataset.value;
            this._setCurrentItemByValue(value);
            this.setState({ isAutoCompleting: false, isExpanded: false });
        }
    };
    /**
     * Invoked on mouse hover over a drop-down item.
     * @param e
     */
    InnerComboBox.prototype._handleItemHover = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var listItem = e.currentTarget;
        var value = listItem.dataset.value;
        var option = this._getOptionByValue(this.props.options, value ? value : "");
        var selectedIndex = this._getVisibleOptions().indexOf(option);
        this.setState({ selectedIndex: selectedIndex });
    };
    /**
     * Invoked when user changes the content of the text input.
     */
    InnerComboBox.prototype._handleTextInputChange = function (valueNew) {
        var stateNew = {
            freeTextValue: valueNew,
            isAutoCompleting: true,
        };
        if (valueNew || valueNew === "") {
            var applicableOptions = this._searchOptions(valueNew);
            stateNew.option = applicableOptions.length ? applicableOptions[0] : undefined;
        }
        stateNew.isExpanded = !!this._getVisibleOptions(stateNew).length;
        if (this._getIfValueChanged(valueNew)) {
            this.setState(stateNew);
            this._handleValueChange(stateNew.freeTextValue);
        }
    };
    /**
     * Invoked when user clicks the readonly text control in the main area.
     */
    InnerComboBox.prototype._handleTextPointerDown = function (e) {
        if (e.button === 0) {
            e.preventDefault();
            e.stopPropagation();
            this._setFocus();
            this._toggleIsExpanded();
        }
    };
    /**
     * Invoked when user clicks the drop-button in the main area.
     * @param e
     */
    InnerComboBox.prototype._handleButtonPointerDown = function (e) {
        if (e.button === 0) {
            e.preventDefault();
            e.stopPropagation();
            this._resetSelectedIndex();
            this.setState({ isAutoCompleting: false });
            this._setFocus();
            this._toggleIsExpanded();
        }
    };
    InnerComboBox.prototype._handleMove = function (e, amount) {
        e.stopPropagation();
        e.preventDefault();
        var visibleOptions = this._getVisibleOptions();
        // using modulo not remainder to make bounding easier
        function mod(x, m) {
            // For x > 0, x%m is enough.
            // For x < 0 , we need special handling like below which works for the x > 0 case as well.
            return (x % m + m) % m;
        }
        var selectedIndexNew = mod(this.state.selectedIndex + amount, visibleOptions.length);
        if (!this.state.isExpanded) {
            this._setCurrentItemByVisibleIndex(selectedIndexNew);
        }
        else {
            this.setState({ selectedIndex: selectedIndexNew });
        }
        this._scrollView.scrollToChild(this._selectedListItem);
    };
    /**
     * TextInput.onBlur event handler
     * @param e Synthetic React event
     */
    InnerComboBox.prototype._handleBlur = function (e) {
        if (this._clickedOutside) {
            this._clickedOutside = false;
            this._setIsExpanded(false);
            this._setFocus();
            _super.prototype._handleBlur.call(this, e);
        }
    };
    /**
     * Invoked when user presses the Enter key.
     */
    InnerComboBox.prototype._handleEnterKey = function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!this.state.isExpanded) {
            this._handleKeyboardExpandRequest(e);
            return;
        }
        if (this.state.selectedIndex > -1) {
            this._resetSelectedIndex();
            this._setCurrentItemByVisibleIndex(this.state.selectedIndex);
            this.setState({ isAutoCompleting: false, isExpanded: false });
        }
    };
    /**
     * Invoked when user requests expanding the drop-down with the keyboard.
     */
    InnerComboBox.prototype._handleKeyboardExpandRequest = function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!this.state.isExpanded) {
            this._resetSelectedIndex();
            this._setIsExpanded(true);
        }
        else {
            this.setState({ isAutoCompleting: false });
        }
    };
    /**
     * Handles the event of a click outside a flyout.
     */
    InnerComboBox.prototype._handleFlyoutOutsideClick = function (e) {
        this._setIsExpanded(false);
        this._clickedOutside = true;
    };
    /**
     * Invoked when the control receives focus.
     */
    InnerComboBox.prototype._handleInnerControlFocus = function (e) {
        this.setState({ hasFocus: true });
    };
    /**
     * Invoked when the control loses focus.
     */
    InnerComboBox.prototype._handleInnerControlBlur = function (e) {
        this._resetSelectedIndex();
        this.setState({ hasFocus: false });
    };
    /**
     * A helper selector used to get the proper container for the flyout to be
     * relative to.
     */
    InnerComboBox.prototype._handleRelativeToElementSelector = function (element) {
        return element.parentElement;
    };
    /**
    * Performs options props array to React.Component mapping
    * @param optionsProps options props array
    */
    InnerComboBox.prototype._renderOptionsList = function (options) {
        var _this = this;
        if (options) {
            if (options.length) {
                var style_1 = {
                    flex: "0 1 auto",
                    cursor: "pointer",
                    padding: "0.5em 0.75em",
                };
                var selectedStyle_1 = this.props.selectedItemStyle
                    || { backgroundColor: "#0072C6", color: "white" };
                var optionsRendered = options.map(function (option, i) {
                    var itemId = _this._getListItemId(option);
                    return (React.createElement(ListItem_1.ListItem, {key: i, id: itemId, role: "option", dataText: option.text, dataValue: option.value, onSelected: _this._handleItemSelected, isSelected: _this.state.selectedIndex === i, style: style_1, selectedStyle: selectedStyle_1, ref: _this._saveItemRef, onPointerOver: _this._handleItemHover, onPointerDown: _this._handleItemPointerDown}, option.text || "\u00a0"));
                });
                var visibleItemsAmount = this._getPageSize();
                var scrollViewId = this._getListId() + "_scrollView";
                var showScroll = visibleItemsAmount < optionsRendered.length;
                var assumedItemHeight = 2.35;
                var scrollStyle = {
                    height: showScroll ? (visibleItemsAmount * assumedItemHeight) + "em" : undefined,
                    overflowY: showScroll ? "scroll" : "hidden",
                    overflowX: "hidden",
                    flex: "1 1 auto",
                    flexDirection: "column",
                };
                return (React.createElement(List_1.List, {role: "listbox", id: this._getListId(), style: { width: "100%", listStyleType: "none" }}, React.createElement(ScrollView_1.ScrollView, {id: scrollViewId, style: scrollStyle, refCallback: this.refCallback, horizontal: false, onScroll: this._onFlyoutScroll}, optionsRendered)));
            }
        }
        return undefined;
    };
    /**
     * Renders the flyout.
     */
    InnerComboBox.prototype._renderFlyout = function (isViewSelector) {
        if (isViewSelector === void 0) { isViewSelector = false; }
        var flyout = undefined;
        var testhooks = undefined;
        /*
         * Create testhooks for flyout
         */
        if (this.props.testhooks) {
            testhooks = Object.assign({}, this.props.testhooks);
            for (var i in testhooks) {
                testhooks[i] += "-flyout";
            }
        }
        if (!this.props.readOnly && this.state.isExpanded) {
            var optionsRendered = this._renderOptionsList(this._getVisibleOptions());
            ;
            var styleWidth = (this.props.style) ? this.props.style.width : null;
            if (optionsRendered) {
                var flyoutStyle = {
                    borderWidth: "0.1em",
                    borderStyle: "solid",
                    borderColor: "#1E83CD",
                    backgroundColor: "white",
                    //If it's view selector, set the width as 200 for now
                    width: !isViewSelector ? (styleWidth ? styleWidth : this._containerWidth || 50) : (styleWidth ? styleWidth : "200px"),
                };
                flyout = (React.createElement(Flyout_1.Flyout, {id: this._getFlyoutId(), key: "flyout", testhooks: testhooks, flyoutDirection: Flyout_1.FlyoutDirection.down, flyoutStyle: flyoutStyle, positionType: "relative", relativeToElementId: this._getInternalId(), relativeToElementIdSelector: this._handleRelativeToElementSelector, onOutsideClick: this._handleFlyoutOutsideClick, openPopup: this.props.openPopup, closePopup: this.props.closePopup, rootNodes: this.props.rootNodes, parentCustomControlId: this.props.parentCustomControlId}, optionsRendered));
            }
        }
        return flyout;
    };
    /**
     * Renders the text input with the given ID.
     */
    InnerComboBox.prototype._renderTextInput = function (controlId) {
        var textInputStyle = { borderWidth: 0, flex: "1 1 auto", backgroundColor: "transparent", padding: "0.5em 0.75em" };
        return (React.createElement(TextInput_1.TextInput, {id: controlId, key: controlId, readOnly: this.props.readOnly, accessibilityHasPopup: true, accessibilityExpanded: this.state.isExpanded, role: "combobox", ref: this._saveTextInputRef, onFocus: this._handleInnerControlFocus, onBlur: this._handleInnerControlBlur, onChangeText: this._handleTextInputChange, value: this.props.freeTextMode ? this.state.freeTextValue : this.state.option && this.state.option.text, accessibilityLabel: this.props.accessibilityLabel, activeDescendantId: this._getActiveDescendantId(), ownsElementId: this._getListId(), controlsElementId: this._getListId(), style: textInputStyle}));
    };
    /**
     * Renders the read-only text holder with the given ID.
     */
    InnerComboBox.prototype._renderTextOnly = function (controlId) {
        var textStyle = { borderWidth: 0, flex: "1 1 auto", outline: "none", cursor: "default", padding: "0.5em 0.75em" };
        return (React.createElement(Text_1.Text, {id: controlId, key: controlId, accessibilityHasPopup: true, accessibilityExpanded: this.state.isExpanded, accessibilityReadOnly: true, ref: this._saveTextRef, role: "combobox", accessibilityLabel: this.props.accessibilityLabel, onFocus: this._handleInnerControlFocus, onBlur: this._handleInnerControlBlur, onPointerDown: this._handleTextPointerDown, ownsElementId: this._getListId(), activeDescendantId: this._getActiveDescendantId(), tabIndex: 0, style: textStyle}, (this.state.option && this.state.option.text) || "\u00a0"));
    };
    /**
     * Renders the drop-down button.
     */
    InnerComboBox.prototype._renderDropDownButton = function () {
        var buttonStyle = {
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: "0 0 0 0.1em",
            flexDirection: "row",
            padding: "0 0.75em",
            justifyContent: "center",
        };
        if (this.state.hasFocus) {
            buttonStyle.borderColor = "#1E83CD";
        }
        var arrowStyle = {
            width: "0.6em",
            height: "0.6em",
            marginTop: "-0.4em",
            borderColor: "#1E83CD",
            borderWidth: "0em",
            borderRightWidth: "0.1em",
            borderBottomWidth: "0.1em",
            borderStyle: "solid",
            transform: "rotate(45deg)",
            content: "",
            display: "flex",
            alignSelf: "center",
        };
        return (React.createElement(Button_1.Button, {key: "dropButton", accessibilityLabel: "Open up the drop down menu", accessibilityHasPopup: true, tabIndex: -1, style: buttonStyle, onPointerDown: this._handleButtonPointerDown}, React.createElement("div", {style: arrowStyle})));
    };
    /**
     * Renders the accessibility components which is to control an element with the given ID.
     */
    InnerComboBox.prototype._renderAccessibilityComponent = function (controlToHookToId) {
        return this.props.createAccessibilityComponent({
            id: "accessibilityComponent",
            parentComponent: this,
            keyboardShortcuts: this.props.freeTextMode ? this._keyboardShortcutsForTextInput : this._keyboardShortcutsForTextOnly,
            context: this.context,
        }).render();
    };
    /**
     * React control render method.
     */
    InnerComboBox.prototype.render = function () {
        var props = this._getElementPropsInternal();
        // Add some defaults to the props.style
        Object.assign(props.style, {
            backgroundColor: "white",
            display: "flex",
            flex: "1 1 auto",
            borderWidth: "0.1em",
            borderStyle: "solid",
            borderColor: "#1E83CD",
        }, this.props.style);
        if (this.state.hasFocus) {
            if (this.props.focusedStyle) {
                Object.assign(props.style, this.props.focusedStyle);
            }
            else {
                props.style.backgroundColor = "#E8F4FF";
                // Had to cast to any since for some strange reason
                // React of the current version does not have boxShadow style.
                props.style.boxShadow = "0 0 0 0.2em #88BBFF";
            }
        }
        var focusableControlId = this.props.freeTextMode ? this._getInternalId() + "_textInput" : this._getInternalId() + "_text";
        if (this.props.testhooks) {
            props.testhooks = this.props.testhooks;
        }
        // necessary so that when renderFlyout tries to read
        // this.props.style.width, it won't throw exception
        // if style is undefined
        if (!this.props.style) {
            this.props.style = {};
        }
        // We use outer and inner containers here just for the sake of keeping the original ID in the root element of the component.
        // The uniquity of the original ID is not guaranteed and depends on the consumer, not the component.
        //
        // The internal container has a different (100% unique) ID, so that the drop-down flyout positions itself properly relative to it.
        var control = (React.createElement(View_1.View, __assign({}, props, {ref: this._saveContainerRef}), React.createElement(View_1.View, {style: { display: "flex", flex: "1 1 auto" }, id: this._getInternalId()}, this.props.freeTextMode ? this._renderTextInput(focusableControlId) : this._renderTextOnly(focusableControlId), !this.props.readOnly && this._renderDropDownButton(), !this.props.readOnly && this._renderFlyout(), !this.props.readOnly && this._renderAccessibilityComponent(focusableControlId))));
        return control;
    };
    /**
     * Display name for React dev tools
     */
    InnerComboBox.displayName = "ComboBox";
    /**
     * The default amount of items visible within drop-down viewport at once.
     */
    InnerComboBox.DEFAULT_PAGE_SIZE = 7;
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_saveContainerRef", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "refCallback", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_saveItemRef", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_saveTextInputRef", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_saveTextRef", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleValueChange", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleItemSelected", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleItemPointerDown", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleItemHover", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleTextInputChange", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleTextPointerDown", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleButtonPointerDown", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleMove", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleBlur", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleEnterKey", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleKeyboardExpandRequest", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleFlyoutOutsideClick", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleInnerControlFocus", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleInnerControlBlur", null);
    __decorate([
        Autobind_1.default
    ], InnerComboBox.prototype, "_handleRelativeToElementSelector", null);
    return InnerComboBox;
}(ComponentBase_1.ComponentBase));
exports.InnerComboBox = InnerComboBox;
var ComboBox = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerComboBox);
exports.ComboBox = ComboBox;

},{"../../CustomControls/Utilities/GuidHelper":73,"../Supplementary/Accessibility/KeyCode":51,"../Supplementary/Decorators/Autobind":52,"./Button":8,"./ComponentBase":11,"./FelaConnectHelper":13,"./Flyout":16,"./List":25,"./ListItem":26,"./ScrollView":33,"./Text":45,"./TextInput":46,"./View":47,"react":undefined,"react-dom":undefined,"react-fela":undefined}],11:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");
var CustomControlConstants_1 = require("../../CustomControls/Utilities/CustomControlConstants");
/**
 * Base component for all the primitive controls used
 */
var ComponentBase = (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        _super.apply(this, arguments);
    }
    /**
     * Handles the onPointerUp event.
     */
    ComponentBase.prototype._handlePointerUp = function (e) {
        if (this.props.onPointerUp) {
            this.props.onPointerUp(e);
        }
    };
    /**
     * Handles the onPointerDown event.
     */
    ComponentBase.prototype._handlePointerDown = function (e) {
        if (this.props.onPointerDown) {
            this.props.onPointerDown(e);
        }
    };
    /**
     * Handles the onMouseOver event.
     */
    ComponentBase.prototype._handlePointerOver = function (e) {
        if (this.props.onPointerOver) {
            this.props.onPointerOver(e);
        }
    };
    /**
     * Handles the onPointerOut event.
     */
    ComponentBase.prototype._handlePointerOut = function (e) {
        if (this.props.onPointerOut) {
            this.props.onPointerOut(e);
        }
    };
    /**
     * Handles the onPointerEnter event.
     */
    ComponentBase.prototype._handlePointerEnter = function (event) {
        if (this.props.onPointerEnter) {
            this.props.onPointerEnter(event);
        }
    };
    /**
     * Handles the onPointerLeave event.
     */
    ComponentBase.prototype._handlePointerLeave = function (e) {
        if (this.props.onPointerLeave) {
            this.props.onPointerLeave(e);
        }
    };
    /**
     * Handles the onPointerMove event.
     */
    ComponentBase.prototype._handlePointerMove = function (e) {
        if (this.props.onPointerMove) {
            this.props.onPointerMove(e);
        }
    };
    /**
     * Handles the onPointerCancel event.
     */
    ComponentBase.prototype._handlePointerCancel = function (e) {
        if (this.props.onPointerCancel) {
            this.props.onPointerCancel(e);
        }
    };
    /**
     * Click handler for the component
     */
    ComponentBase.prototype._handleClick = function (event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };
    /**
    * Double Click handler for the component
    */
    ComponentBase.prototype._handleDoubleClick = function (event) {
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick(event);
        }
    };
    /**
     * TextInput.onFocus event handler
     * @param e Synthetic React event
     */
    ComponentBase.prototype._handleFocus = function (e) {
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };
    /**
     * TextInput.onBlur event handler
     * @param e Synthetic React event
     */
    ComponentBase.prototype._handleBlur = function (e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };
    /**
     * Mouse enter handler for the component
     */
    ComponentBase.prototype._handleMouseEnter = function (event) {
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    };
    /**
     * Handles the mouseleave event.
     */
    ComponentBase.prototype._handleMouseLeave = function (e) {
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };
    /**
     * Handles the keydown event.
     */
    ComponentBase.prototype._handleKeyDown = function (e) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    };
    /**
     * Handles the keyup event.
     */
    ComponentBase.prototype._handleKeyUp = function (e) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     * If nothing provided, the default tag name is to be used.
     */
    ComponentBase.prototype.getElementName = function () {
        return "div";
    };
    /**
     * Returns the specific element props.
     * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
     */
    ComponentBase.prototype.getElementProps = function () {
        return null;
    };
    /**
     * Returns the full set of props for the underlying component, internal use only.
     */
    ComponentBase.prototype._getElementPropsInternal = function () {
        //const props: React.HTMLAttributes & { ref?: (r: any) => void } = {};
        var props = {};
        if (this.props.id)
            props.id = this.props.id;
        if (this.props.hidden) {
            props[AttributeName.HIDDEN] = true;
        }
        if (this.props.accessibilityLabel) {
            props[AttributeName.ARIA_LABEL] = this.props.accessibilityLabel;
        }
        if (this.props.accessibilityChecked) {
            props[AttributeName.ARIA_CHECKED] = this.props.accessibilityChecked;
        }
        if (this.props.accessibilityLive) {
            props[AttributeName.ARIA_LIVE] = this.props.accessibilityLive;
        }
        if (this.props.accessibilityRelevant) {
            props[AttributeName.ARIA_RELEVANT] = this.props.accessibilityRelevant;
        }
        if (this.props.accessibilityAtomic) {
            props[AttributeName.ARIA_ATOMIC] = this.props.accessibilityAtomic;
        }
        if (this.props.labelledByElementId) {
            props[AttributeName.ARIA_LABELLED_BY] = this.props.labelledByElementId;
        }
        if (this.props.describedByElementId) {
            props[AttributeName.ARIA_DESCRIBED_BY] = this.props.describedByElementId;
        }
        if (this.props.controlsElementId) {
            props[AttributeName.ARIA_CONTROLS] = this.props.controlsElementId;
        }
        if (this.props.ownsElementId) {
            props[AttributeName.ARIA_OWNS] = this.props.ownsElementId;
        }
        if (this.props.accessibilityRequired) {
            props[AttributeName.ARIA_REQUIRED] = this.props.accessibilityRequired;
        }
        if (typeof this.props.accessibilityExpanded === "boolean") {
            props[AttributeName.ARIA_EXPANDED] = this.props.accessibilityExpanded;
        }
        if (typeof this.props.accessibilityHasPopup === "boolean") {
            props[AttributeName.ARIA_HAS_POPUP] = this.props.accessibilityHasPopup;
        }
        if (typeof this.props.accessibilityReadOnly === "boolean") {
            props[AttributeName.ARIA_READONLY] = this.props.accessibilityReadOnly;
        }
        if (typeof this.props.accessibilityDisabled === "boolean") {
            props[AttributeName.ARIA_DISABLED] = this.props.accessibilityDisabled;
        }
        if (typeof this.props.accessibilityLevel === "number") {
            props[AttributeName.ARIA_LEVEL] = this.props.accessibilityLevel;
        }
        if (typeof this.props.accessibilityHidden === "boolean") {
            props[AttributeName.ARIA_HIDDEN] = this.props.accessibilityHidden;
        }
        if (this.props.activeDescendantId) {
            props[AttributeName.ARIA_ACTIVE_DESCENDANT] = this.props.activeDescendantId;
        }
        if (this.props.accessibilityCurrent) {
            props[AttributeName.ARIA_CURRENT] = this.props.accessibilityCurrent;
        }
        if (this.props.role) {
            props[AttributeName.ROLE] = this.props.role;
        }
        if (this.props.title) {
            props[AttributeName.TITLE] = this.props.title;
        }
        if (typeof this.props.tabIndex === "number") {
            props.tabIndex = this.props.tabIndex;
        }
        var learningPathId = this.props[CustomControlConstants_1.CustomControlConstants.LearningPathAttributeName];
        if (learningPathId) {
            props[CustomControlConstants_1.CustomControlConstants.LearningPathAttributeName] = learningPathId;
        }
        if (this.props.testhooks) {
            var testhooks = this.props.testhooks;
            for (var key in testhooks) {
                props["data-" + key] = testhooks[key];
            }
        }
        if (this.props.onClick) {
            props.onClick = this._handleClick;
        }
        if (this.props.onDoubleClick) {
            props.onDoubleClick = this._handleDoubleClick;
        }
        props.onPointerOver = this._handlePointerOver;
        props.onPointerOut = this._handlePointerOut;
        props.onPointerUp = this._handlePointerUp;
        props.onPointerDown = this._handlePointerDown;
        props.onPointerEnter = this._handlePointerEnter;
        props.onPointerLeave = this._handlePointerLeave;
        props.onPointerMove = this._handlePointerMove;
        props.onPointerCancel = this._handlePointerCancel;
        props.onBlur = this._handleBlur;
        props.onFocus = this._handleFocus;
        props.onMouseEnter = this._handleMouseEnter;
        props.onMouseLeave = this._handleMouseLeave;
        props.onKeyDown = this._handleKeyDown;
        props.onKeyUp = this._handleKeyUp;
        Object.assign(props, this.getElementProps());
        Object.assign(props, { children: null });
        props.style = this.getElementStyle();
        var className = this.getElementClassName() + " " + this.getFlexClassName(props.style);
        if (className) {
            Object.assign(props, { className: className });
            var elementType = this.getElementName();
            props.style = {};
        }
        return props;
    };
    /**
     * Returns the specific style for the underlying element.
     */
    ComponentBase.prototype.getElementStyle = function () {
        // By default, pass the original styles to the underlying element.
        return this.props.style;
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    ComponentBase.prototype.getElementClassName = function () {
        return (this.props.styles) ? this.props.styles : "";
    };
    ComponentBase.prototype.getFlexClassName = function (style) {
        return "";
    };
    /**
     * Returns the children of the element.
     */
    ComponentBase.prototype.getElementChildren = function () {
        var children = this.props.children;
        if (Array.isArray(children)) {
            if (children.length === 0) {
                return null;
            }
            else if (children.length > 1 && window.DEBUG) {
                //check for key duplicates, show a warning if a duplicate is found, provide some additional debug info.
                //TODO: make use of some kind of a pre-processing so that this code is not executed in Retail build.
                var validChildren = children.filter(function (x) { return React.isValidElement(x); });
                if (validChildren.length > 1) {
                    var previousNames = {};
                    for (var i = 0; i < validChildren.length; i++) {
                        var child = validChildren[i];
                        if (!child.key) {
                            var key = child.key || child.type.name;
                            if (previousNames[key])
                                console.warn("The React child should have a unique key within the parent's scope:", key, ", current element id/key =", this.props.id, ", this element type:", this.constructor.name);
                            previousNames[key] = key;
                        }
                    }
                }
            }
        }
        if (typeof children === "string" && children.length === 0) {
            return null;
        }
        return children;
    };
    /**
     * Returns true if element has horizontal or vertical scroll
     * @param style
     */
    ComponentBase.isElementScrollable = function (style) {
        return (style.overflow === "auto" || style.overflowX === "auto" || style.overflowY === "auto"
            || style.overflow === "scroll" || style.overflowX === "scroll" || style.overflowY === "scroll");
    };
    /**
     * Renders the component to the virtual DOM.
     */
    ComponentBase.prototype.render = function () {
        return React.createElement(this.getElementName(), this._getElementPropsInternal(), this.getElementChildren());
    };
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerUp", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerDown", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerOver", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerOut", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerEnter", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerLeave", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerMove", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handlePointerCancel", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleClick", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleDoubleClick", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleFocus", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleBlur", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleMouseEnter", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleMouseLeave", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleKeyDown", null);
    __decorate([
        Autobind_1.default
    ], ComponentBase.prototype, "_handleKeyUp", null);
    return ComponentBase;
}(React.Component));
exports.ComponentBase = ComponentBase;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentBase;

},{"../../CustomControls/Utilities/CustomControlConstants":70,"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Decorators/Autobind":52,"react":undefined}],12:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var ComponentBase_1 = require("./ComponentBase");
var View_1 = require("./View");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
var PresenceIndicator_1 = require("../Primitive/PresenceIndicator");
var GuidHelper_1 = require("../../CustomControls/Utilities/GuidHelper");
/**
 * Enum for component mode values
 * @readonly
 */
var EntityImageMode;
(function (EntityImageMode) {
    EntityImageMode[EntityImageMode["Image"] = 0] = "Image";
    EntityImageMode[EntityImageMode["Initials"] = 1] = "Initials";
    EntityImageMode[EntityImageMode["Icon"] = 2] = "Icon";
})(EntityImageMode || (EntityImageMode = {}));
exports.EntityImageMode = EntityImageMode;
/**
 * Control which renders default entity icon for the given entity.
 * It also has a configurable property to render image or initials of the name
 *
 * TODO: Implement relationship health ring. VSO Task#271070
 */
var InnerEntityImage = (function (_super) {
    __extends(InnerEntityImage, _super);
    function InnerEntityImage() {
        _super.apply(this, arguments);
    }
    /**
     * Returns first letters of first two words (or two letters of one word)
     */
    InnerEntityImage._getInitials = function (fullname) {
        var initials = "";
        if (fullname) {
            for (var nameParts = fullname.split(" "), i = 0; i < nameParts.length && initials.length < 2; i++) {
                if (nameParts[i].length > 0) {
                    var chr = nameParts[i].charCodeAt(0);
                    // Restrict to Latin characters only (because we don't know if such initials format is correct for non-English names)
                    if (chr >= 97 && chr <= 122 || chr >= 65 && chr <= 90) {
                        initials += nameParts[i].charAt(0);
                    }
                    else {
                        // In case of non-English name return only the first character of the string
                        // TODO: Get a spec for the general case. VSO Task#271064
                        initials += nameParts[i].charAt(0);
                        break;
                    }
                }
            }
            if (initials.length <= 1) {
                initials = "";
                for (var j = 0; j < fullname.length && initials.length < 2; j++) {
                    var char = fullname.charCodeAt(j);
                    if (char >= 97 && char <= 122 || char >= 65 && char <= 90) {
                        initials += fullname.charAt(j);
                    }
                    else {
                        initials += fullname.charAt(j);
                        break;
                    }
                }
            }
        }
        return initials;
    };
    /**
     * @returns img for image and icon modes or span for initials mode
     */
    InnerEntityImage.prototype.getElementName = function () {
        return this.props.mode === EntityImageMode.Initials ? "span" : "img";
    };
    /**
     * Returns the specific element props.
     */
    InnerEntityImage.prototype.getElementProps = function () {
        var props = {
            alt: this.props.alt ? this.props.alt : "",
        };
        if (this.props.mode === EntityImageMode.Image) {
            props.src = this.props.imageSrc;
        }
        else if (this.props.mode === EntityImageMode.Icon) {
            // TODO: Take entity icon from metadata. VSO Task#271067
            props.src = "/_imgs/ContactPhoto.png";
        }
        else {
            // remove src attribute from span
            props.src = undefined;
        }
        return props;
    };
    InnerEntityImage.prototype._renderHealthCircle = function (node) {
        var _this = this;
        var unit = InnerEntityImage._unitRegex.exec(this.props.style.width + "")[1];
        // We suppose, that our circle has the same width and size. So, we need to get size for render circle
        var size = parseFloat(this.props.style.width + "");
        // Convert 0-100% to 0-360deg
        var scoreDeg = this.props.entityHealthScore * 360 / 100;
        var style = {
            width: size + unit,
            height: size + unit,
            position: "relative",
            display: "block",
        };
        var pieStyle = {
            clip: "rect(0, " + (size + unit) + ", " + (size + unit) + ", " + (size / 2 + unit) + ")",
            height: "100%",
            width: "100%",
            left: "0",
            position: "absolute",
            top: "0",
        };
        var halfCircle = {
            clip: "rect(0, " + (size / 2 + unit) + ", " + (size + unit) + ", 0)",
            transform: "rotate(" + scoreDeg + "deg)",
            height: "100%",
            width: "100%",
            border: "4px solid transparent",
            borderRadius: "50%",
            left: "0",
            position: "absolute",
            top: "0",
            borderColor: "transparent",
            boxSizing: "border-box",
        };
        // Loop for select correct circle color
        InnerEntityImage._healthRanges.forEach(function (range) {
            if (_this.props.entityHealthScore >= range.min && _this.props.entityHealthScore <= range.max) {
                halfCircle.borderColor = range.color;
            }
        });
        var leftCircle = Object.assign({}, halfCircle);
        var rightCircle = Object.assign({ display: "none", }, halfCircle);
        if (scoreDeg > 180) {
            pieStyle.clip = "rect(auto, auto, auto, auto)";
            leftCircle.transform = "rotate(180deg)";
            rightCircle.display = "block";
        }
        return (React.createElement(View_1.View, {style: style}, node, React.createElement(View_1.View, {style: pieStyle}, React.createElement(View_1.View, {style: leftCircle}), React.createElement(View_1.View, {style: rightCircle}))));
    };
    /**
     * Returns the children of the element.
     * @returns Text primitive for initials mode and undefined for all other modes
     */
    InnerEntityImage.prototype.getElementChildren = function () {
        var children = undefined;
        if (this.props.mode === EntityImageMode.Initials) {
            children = InnerEntityImage._getInitials(this.props.entityPrimaryField);
        }
        return children;
    };
    InnerEntityImage.prototype._renderEntityImageWithPresence = function (entityImage) {
        var id = "id_" + GuidHelper_1.guidV4String();
        var positionStyle = {
            position: "relative",
        };
        // Default style for presence indicator in entity Image.
        var presenceIndicatorStyle = {
            right: "0px",
            bottom: "0px",
            position: "absolute",
        };
        var presenceIndicator = React.createElement(PresenceIndicator_1.PresenceIndicator, {key: id + "_presence", id: id + "_presence", parentControlId: id, style: presenceIndicatorStyle, entityReference: this.props.entityReference, sipUrl: this.props.sipUrl, displaySize: this.props.presenceIndicatorSize, accessibilityLabel: this.props.entityPrimaryField});
        return (React.createElement(View_1.View, {id: id, style: positionStyle}, entityImage, presenceIndicator));
    };
    /**
     * Render Entity Image component.
     */
    InnerEntityImage.prototype.render = function () {
        var entityImage = React.createElement(this.getElementName(), this._getElementPropsInternal(), this.getElementChildren());
        if (this.props.entityHealthScore) {
            entityImage = this._renderHealthCircle(entityImage);
        }
        if (this.props.entityReference || this.props.sipUrl) {
            return (this._renderEntityImageWithPresence(entityImage));
        }
        return (entityImage);
    };
    /**
     * Display name for React dev tools
     */
    InnerEntityImage.displayName = "EntityImage";
    /**
     * Regex to get size unit.
     */
    InnerEntityImage._unitRegex = /[0-9]*\.?[0-9]+(px|%|em|rem)?/i;
    /**
     * Health ring color is based on the health score state, which is directly related to the health score.
     */
    InnerEntityImage._healthRanges = [
        {
            min: 1,
            max: 39,
            color: "#FF0000",
        }, {
            min: 40,
            max: 59,
            color: "#FFBB00",
        }, {
            min: 60,
            max: 100,
            color: "#00EE00",
        },
    ];
    return InnerEntityImage;
}(ComponentBase_1.ComponentBase));
exports.InnerEntityImage = InnerEntityImage;
var EntityImage = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerEntityImage);
exports.EntityImage = EntityImage;

},{"../../CustomControls/Utilities/GuidHelper":73,"../Primitive/PresenceIndicator":29,"./ComponentBase":11,"./FelaConnectHelper":13,"./View":47,"react":undefined,"react-fela":undefined}],13:[function(require,module,exports){
"use strict";
function ruleGen(props) {
    if (props.style) {
        Object.assign(props.style, transformStyle(props.style));
        return props.style;
    }
    //Plugin prefixer doesn't take undefined
    return {};
}
exports.ruleGen = ruleGen;
/**
 * Function to transform React Native flex style property into React CSS flex property
 */
function transformFlex(flex) {
    var val = Number(flex);
    return isNaN(val) ? flex : val;
}
function transformStyle(style) {
    // Should stop processing input style if it is null
    if (!style) {
        return {};
    }
    var cssStyle = {};
    if (style.borderBottomWidth != null)
        cssStyle.borderBottomWidth = transformSizeProp(style.borderBottomWidth);
    if (style.borderLeftWidth != null)
        cssStyle.borderLeftWidth = transformSizeProp(style.borderLeftWidth);
    if (style.borderRightWidth != null)
        cssStyle.borderRightWidth = transformSizeProp(style.borderRightWidth);
    if (style.borderTopWidth != null)
        cssStyle.borderTopWidth = transformSizeProp(style.borderTopWidth);
    if (style.borderWidth != null)
        cssStyle.borderWidth = transformSizeProp(style.borderWidth);
    if (style.height != null)
        cssStyle.height = transformSizeProp(style.height);
    if (style.width != null)
        cssStyle.width = transformSizeProp(style.width);
    if (style.minWidth != null)
        cssStyle.minWidth = transformSizeProp(style.minWidth);
    if (style.minHeight != null)
        cssStyle.minHeight = transformSizeProp(style.minHeight);
    if (style.maxWidth != null)
        cssStyle.maxWidth = transformSizeProp(style.maxWidth);
    if (style.maxHeight != null)
        cssStyle.maxHeight = transformSizeProp(style.maxHeight);
    if (style.margin != null)
        cssStyle.margin = transformSizeProp(style.margin);
    if (style.marginBottom != null)
        cssStyle.marginBottom = transformSizeProp(style.marginBottom);
    if (style.marginLeft != null)
        cssStyle.marginLeft = transformSizeProp(style.marginLeft);
    if (style.marginRight != null)
        cssStyle.marginRight = transformSizeProp(style.marginRight);
    if (style.marginTop != null)
        cssStyle.marginTop = transformSizeProp(style.marginTop);
    if (style.padding != null)
        cssStyle.padding = transformSizeProp(style.padding);
    if (style.paddingBottom != null)
        cssStyle.paddingBottom = transformSizeProp(style.paddingBottom);
    if (style.paddingLeft != null)
        cssStyle.paddingLeft = transformSizeProp(style.paddingLeft);
    if (style.paddingRight != null)
        cssStyle.paddingRight = transformSizeProp(style.paddingRight);
    if (style.paddingTop != null)
        cssStyle.paddingTop = transformSizeProp(style.paddingTop);
    if (style.position != null)
        cssStyle.position = transformSizeProp(style.position);
    if (style.bottom != null)
        cssStyle.bottom = transformSizeProp(style.bottom);
    if (style.right != null)
        cssStyle.right = transformSizeProp(style.right);
    if (style.top != null)
        cssStyle.top = transformSizeProp(style.top);
    if (style.left != null)
        cssStyle.left = transformSizeProp(style.left);
    if (style.flex != null)
        cssStyle.flex = transformFlex(style.flex);
    if (style.animationDirection != null)
        cssStyle.animationDirection = style.animationDirection;
    if (style.animationDuration != null)
        cssStyle.animationDuration = style.animationDuration;
    if (style.animationFillMode != null)
        cssStyle.animationFillMode = style.animationFillMode;
    if (style.animationIterationCount != null)
        cssStyle.animationIterationCount = style.animationIterationCount;
    if (style.animationName != null)
        cssStyle.animationName = style.animationName;
    if (style.backgroundColor != null)
        cssStyle.backgroundColor = style.backgroundColor;
    return cssStyle;
}
function transformSizeProp(widthRelatedProp) {
    var newWidthProps = (typeof widthRelatedProp === "number") ? widthRelatedProp.toString() + "px" : widthRelatedProp;
    return newWidthProps;
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(ruleGen, props); }; };
exports.mapStylesToProps = mapStylesToProps;

},{}],14:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var ComponentBase_1 = require("./ComponentBase");
/**
 * FileInput component
 *
 * @class
 */
var FileInput = (function (_super) {
    __extends(FileInput, _super);
    function FileInput() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    FileInput.prototype.getElementName = function () {
        return "input";
    };
    /**
     * Returns the specific element props.
     */
    FileInput.prototype.getElementProps = function () {
        var _this = this;
        var props = {
            type: "file",
        };
        if (this.props.accept && this.props.accept.length) {
            props.accept = this.props.accept.join(",");
        }
        if (this.props.fileSelected) {
            props.onChange = function (e) {
                var inputElement = e.target;
                if (inputElement && inputElement.files && inputElement.files.length > 0) {
                    var file_1 = inputElement.files[0];
                    var reader_1 = new FileReader();
                    reader_1.readAsDataURL(file_1);
                    reader_1.onload = function () {
                        var fileInput = null;
                        if (reader_1.result) {
                            fileInput = _this._parseFileReaderResult(file_1, reader_1.result);
                        }
                        _this.props.fileSelected(fileInput);
                    };
                    reader_1.onerror = function (event) {
                        // TODO: Log an error here without accessing this.context
                    };
                }
                else {
                    if (_this.props.fileUnselected) {
                        _this.props.fileUnselected();
                    }
                }
            };
        }
        return props;
    };
    FileInput.prototype._parseFileReaderResult = function (file, result) {
        var content = null;
        var encoding = null;
        var commaIndex = result.indexOf(",");
        if (commaIndex > -1) {
            content = result.substring(commaIndex + 1);
        }
        var semiColonIndex = result.indexOf(";");
        if (semiColonIndex > -1 && commaIndex > -1) {
            encoding = result.substring(semiColonIndex + 1, commaIndex);
        }
        return {
            content: content,
            mimeType: file.type,
            encoding: encoding,
            name: file.name,
            size: file.size,
        };
    };
    /**
     * Display name for React dev tools
     */
    FileInput.displayName = "FileInput";
    return FileInput;
}(ComponentBase_1.ComponentBase));
exports.FileInput = FileInput;
FileInput.contextTypes = {
    context: React.PropTypes.object,
};

},{"./ComponentBase":11,"react":undefined}],15:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Text_1 = require("./Text");
var Button_1 = require("./Button");
var View_1 = require("./View");
var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");
/*
*  This is for text that wants to be truncated
*/
var FlexibleText = (function (_super) {
    __extends(FlexibleText, _super);
    function FlexibleText() {
        _super.call(this);
        this._firstRender = true;
        this._lineHeight = 0;
        this._totalLineHeight = 0;
        this.state = {
            collapsed: true,
        };
        this._areLinesTruncated = true;
    }
    FlexibleText.prototype.componentDidMount = function () {
        if (this._firstRender && this._textRef && this.props.truncatedlines) {
            this.forceUpdate();
        }
    };
    FlexibleText.prototype._resetCollapseState = function () {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    FlexibleText.prototype.saveItemRef = function (item) {
        this._textRef = item;
    };
    /*
    * Calculate each line height based on rendered out content
    */
    FlexibleText.prototype._calculateLineHeight = function () {
        //Height doesn't have to set specifically if it's not collapsed
        if (!this._textRef || !this.state.collapsed)
            return;
        var element = ReactDOM.findDOMNode(this._textRef);
        if (!element)
            return;
        var computedStyle = window.getComputedStyle(element);
        if (this._firstRender) {
            this._originalHeight = parseInt(computedStyle.height, 10);
            this._firstRender = false;
        }
        var lineHeight = 0;
        if (this.props.lineHeight) {
            lineHeight = this.props.lineHeight;
        }
        else {
            lineHeight = parseInt(computedStyle.lineHeight, 10);
        }
        // Almost everything returns "normal", normal is by default
        if (isNaN(lineHeight)) {
            var clone = element.cloneNode();
            clone.innerHTML = "<br>";
            element.appendChild(clone);
            var singleLineHeight = clone.offsetHeight;
            clone.innerHTML = "<br><br>";
            var doubleLineHeight = clone.offsetHeight;
            element.removeChild(clone);
            lineHeight = doubleLineHeight - singleLineHeight;
        }
        this._areLinesTruncated = this._originalHeight > lineHeight * this.props.truncatedlines;
        // if the original height is less than the truncate height, return the original
        // height as we will not be changing it
        if (!this._areLinesTruncated) {
            return this._originalHeight + "px";
        }
        if (lineHeight !== 0) {
            var totalLineHeight = lineHeight * this.props.truncatedlines;
            this._lineHeight = lineHeight;
            this._totalLineHeight = totalLineHeight;
        }
        return this._totalLineHeight + "px";
    };
    FlexibleText.prototype._renderCollapseButton = function () {
        if (this.props.noExpandable)
            return;
        var collapseButtonStyle = {
            border: "none",
            padding: "0px",
            backgroundColor: "transparent",
        };
        var buttonContent = (this.state.collapsed) ? "Show More" : "Show Less";
        return (React.createElement(View_1.View, {style: { display: "flex", flex: "1 1 auto", }}, React.createElement(Button_1.Button, {style: collapseButtonStyle, onClick: this._resetCollapseState}, React.createElement(Text_1.Text, null, buttonContent))));
    };
    FlexibleText.prototype.render = function () {
        var textStyle = (this.props.singleLineTruncation || this.props.truncatedlines === 1) ?
            {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }
            : {
                overflow: "hidden",
                /* for set '...' in absolute position */
                position: "relative",
                height: this._calculateLineHeight(),
                display: "inline-block",
                /* fix problem when last visible word doesn't adjoin right side  */
                textAlign: "justify",
                /* place for '...' */
                marginRight: "1em",
                paddingRight: "1em",
                ":after": (this._areLinesTruncated) ? { background: (this.props.maskingColor) ? this.props.maskingColor : "#F8F7F6", } : "",
            };
        return (React.createElement(View_1.View, {style: { display: "flex", flexDirection: "Column", }}, React.createElement(Text_1.Text, __assign({}, this.props, {style: textStyle, ref: this.saveItemRef, id: this.props.id, className: this._returnExpandableClassName()}), this.props.children), this._renderCollapseButton()));
    };
    /*
     * returns a class name depending on whether or not the element should be expandable
     */
    FlexibleText.prototype._returnExpandableClassName = function () {
        // if the lines are truncate we set the class name 
        // so that '...' will be displayed
        if (this._areLinesTruncated)
            return "block-with-text-noexpansion";
        else
            return "";
    };
    __decorate([
        Autobind_1.default
    ], FlexibleText.prototype, "_resetCollapseState", null);
    __decorate([
        Autobind_1.default
    ], FlexibleText.prototype, "saveItemRef", null);
    return FlexibleText;
}(ComponentBase_1.ComponentBase));
exports.FlexibleText = FlexibleText;

},{"../Supplementary/Decorators/Autobind":52,"./Button":8,"./ComponentBase":11,"./Text":45,"./View":47,"react":undefined,"react-dom":undefined}],16:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/* tslint:disable:crm-prohibit-react-dom-render */
/* tslint:disable:crm-prohibit-standard-react-element */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var FlyoutDirection_1 = require("./Flyout/FlyoutDirection");
exports.FlyoutDirection = FlyoutDirection_1.default;
var FlyoutUtils = require("./Flyout/Utils");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
var View_1 = require("./View");
var FLYOUT_ROOT_NODE_ID = "__flyoutRootNode";
/**
 * Flyout control that includes an anchor element (which triggers the flyout)
 * and rendering of the flyout itself as well.
 */
var InnerFlyout = (function (_super) {
    __extends(InnerFlyout, _super);
    function InnerFlyout() {
        _super.call(this);
    }
    Object.defineProperty(InnerFlyout.prototype, "flyoutElement", {
        // TODO: get rid of this getter when we get the "readonly" keyword implemented in TypeScript.
        /**
         * Returns the flyout element if rendered. Needed for unit-testing purposes only.
         */
        get: function () {
            return this._flyoutElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the composite identifier for the root container of the flyout group.
     */
    InnerFlyout.prototype._getFlyoutRootId = function () {
        return (this.props.parentCustomControlId ? this.props.parentCustomControlId + "|" : "") + (this.props.groupId ? FLYOUT_ROOT_NODE_ID + "_" + this.props.groupId : FLYOUT_ROOT_NODE_ID);
    };
    /**
     * React life-cycle method, get called once right after the component is added to the virtual DOM.
     */
    InnerFlyout.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.openPopup) {
            this.props.openPopup(this._getFlyoutRootId()).then(function () {
                if (_this.props.rootNodes && _this.props.rootNodes[_this._getFlyoutRootId()] !== undefined && _this.props.rootNodes[_this._getFlyoutRootId()]) {
                    _this._ensureRootNode();
                    _this._updateDom();
                }
            });
        }
        else {
            this._ensureRootNode();
            this._updateDom();
        }
    };
    InnerFlyout.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.rootNodes && nextProps.rootNodes[this._getFlyoutRootId()] !== undefined && nextProps.rootNodes[this._getFlyoutRootId()]) {
            this._ensureRootNode();
            this._updateDom();
        }
    };
    /**
     * React life-cycle method, get called right after the component has re-rendered itself due to state or props change.
     */
    InnerFlyout.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._ensureRootNode();
        this._updateDom();
    };
    /**
     * Component will unmount lifecycle method. Cleaning everything from DOM that we might have left.
     */
    InnerFlyout.prototype.componentWillUnmount = function () {
        this._removeFromDom();
    };
    /**
     * Returns the element the flyout must be relative to.
     */
    InnerFlyout.prototype._getRelativeElement = function () {
        var relativeToElement = document.getElementById(this.props.relativeToElementId);
        if (relativeToElement && this.props.relativeToElementIdSelector)
            relativeToElement = this.props.relativeToElementIdSelector(relativeToElement);
        return relativeToElement;
    };
    /**
     * Calculates the position-related styles for the flyout element.
     */
    InnerFlyout.prototype._calculatePosition = function () {
        var style = {
            position: "absolute",
            visibility: this._isOutOfRange ? "hidden" : "visible",
        };
        var sizeToEnforce = Object.assign({}, this.props.size);
        var positionToSet;
        var enableOverflow = false;
        if (this._getIsAbsolute()) {
            positionToSet = this.props.position;
        }
        else if (this._getIsRelative()) {
            var relativeToElement = this._getRelativeElement();
            if (!relativeToElement)
                throw Error("cannot find any element with the given Id and selector provided: " + this.props.relativeToElementId);
            var sizeForCalc = {
                width: sizeToEnforce.width || (this._actualSize && this._actualSize.width),
                height: sizeToEnforce.height || (this._actualSize && this._actualSize.height),
            };
            var direction = (this.props.flyoutDirection === null || this.props.flyoutDirection === undefined) ? FlyoutDirection_1.default.right : this.props.flyoutDirection;
            positionToSet = this.props.enforceDirection
                ? FlyoutUtils.calculateFlyoutPosition(sizeForCalc, direction, relativeToElement)
                : FlyoutUtils.calculateFlyoutPreferredPosition(sizeForCalc, direction, relativeToElement);
        }
        else {
            throw new Error("Cannot recognize positioning approach");
        }
        // Now, we need to correct the sizeToEnforce depending on whether the flyout needs a scroll.
        if (this._actualSize) {
            if (!sizeToEnforce.width || !sizeToEnforce.height) {
                var clipping = FlyoutUtils.calculateClipping(positionToSet, this._actualSize);
                var documentViewport = FlyoutUtils.getDocumentViewportOffset();
                if (clipping.width && !sizeToEnforce.width) {
                    sizeToEnforce.width = this._actualSize.width - clipping.width;
                    if (positionToSet.left < documentViewport.left)
                        positionToSet.left = documentViewport.left;
                    if (positionToSet.right < documentViewport.right)
                        positionToSet.right = documentViewport.right;
                    enableOverflow = true;
                }
                if (clipping.height && !sizeToEnforce.height && !positionToSet.bottom && positionToSet.bottom !== 0) {
                    sizeToEnforce.height = this._actualSize.height - clipping.height;
                    if (positionToSet.top < documentViewport.top)
                        positionToSet.top = documentViewport.top;
                    if (positionToSet.bottom < documentViewport.bottom)
                        positionToSet.bottom = documentViewport.bottom;
                    enableOverflow = true;
                }
            }
        }
        // Now, assign the styles
        if (enableOverflow) {
            style.overflow = "auto";
        }
        var maximumSize = FlyoutUtils.calculateMaximumSize(positionToSet);
        Object.assign(style, positionToSet, maximumSize);
        // Explicitly assign the size just if it was enforced thru the "size" prop
        // otherwise leave it a free-size container.
        if (sizeToEnforce.height)
            style.height = sizeToEnforce.height;
        if (sizeToEnforce.width)
            style.width = sizeToEnforce.width;
        return style;
    };
    /**
     * Makes sure the root node exists in the document DOM.
     */
    InnerFlyout.prototype._ensureRootNode = function () {
        // make sure the root node exists in DOM.
        if (!this._rootNode) {
            if (this.props.openPopup) {
                this._rootNode = document.getElementById(this._getFlyoutRootId());
            }
            else {
                this._rootNode = document.createElement("div");
                this._rootNode.id = this._getFlyoutRootId();
                document.body.appendChild(this._rootNode);
            }
        }
    };
    /**
     * Handles the event of scrolling the ancestor of the relative-dependency element.
     * @param e
     */
    InnerFlyout.prototype._handleAncestorScroll = function (e) {
        this._isOutOfRange = FlyoutUtils.isOutOfRange(this._flyoutElement, e.target);
        this.forceUpdate();
    };
    /**
     * Handles the event of resizing the device.
     * @param e
     */
    InnerFlyout.prototype._handleDeviceResize = function (e) {
        this.forceUpdate();
    };
    /**
     * Returns true if the relative positioning is enabled for the flyout.
     */
    InnerFlyout.prototype._getIsRelative = function () {
        return this.props.positionType === "relative" || (!this.props.positionType && this.props.relativeToElementId);
    };
    /**
     * Returns true if the absolute positioning is enabled for the flyout.
     */
    InnerFlyout.prototype._getIsAbsolute = function () {
        return this.props.positionType === "absolute" || (!this.props.positionType && this.props.position);
    };
    /**
     * Method for storing reference to flyout element
     */
    InnerFlyout.prototype._setFlyoutRef = function (view) {
        this._flyoutElement = ReactDOM.findDOMNode(view);
    };
    /**
     * Adds or updates the flyout element in actual DOM.
     * @param element anchor element that triggered the action
     * @param hierarchyParent the immediate hierarchy parent for the current flyout
     */
    InnerFlyout.prototype._updateDom = function () {
        var props = {};
        if (this.props.testhooks) {
            props.testhooks = this.props.testhooks;
        }
        if (this.props.children && this._rootNode) {
            // make sure the root node exists in DOM.
            if (!this._parentFlyoutNode) {
                this._parentFlyoutNode = document.createElement("div");
                this._rootNode.appendChild(this._parentFlyoutNode);
            }
            var combinedStyle = Object.assign({}, this.props.flyoutStyle, // the consumer's styles get assigned here.
            this._calculatePosition(), // the optimal calculated position of the flyout is set via styles here.
            { boxSizing: "border-box" } // we need to make sure all the borders are properly aligned to the relative element.
            );
            var isPrerenderRequired = !this._actualSize;
            if (isPrerenderRequired) {
                // Seems like we need to have a "fake" render first, to determine the actual size of the content.
                Object.assign(combinedStyle, { top: -10000, left: -10000, bottom: null, right: null, visibility: "hidden" });
            }
            var flyoutView = (React.createElement(View_1.View, __assign({id: this.props.id, style: combinedStyle, ref: this._setFlyoutRef}, props), this.props.children));
            ReactDOM.unstable_renderSubtreeIntoContainer(this, flyoutView, this._parentFlyoutNode);
            // Here we cache the actual size of the flyout, so that it could be used later for
            // advanced decision-making in flyout positioning.
            this._actualSize = FlyoutUtils.getElementFullSize(this._flyoutElement);
            if (!this._isFlyoutShown) {
                document.addEventListener("mousedown", this._handleDocumentMouseClick);
                if (this._getIsRelative()) {
                    // If the relative element changes its position or size, we need to also reposition/resize the flyout.
                    // However, right now there's no effective way to do that besides reacting to window.onresize.
                    // Probably, later, if we employ a library like "CSS Element Queries", we can cover more cases.
                    window.addEventListener("resize", this._handleDeviceResize);
                    // if any of the ancestors scroll, we inherently need to reposition the flyout
                    this._scrollableAncestors = FlyoutUtils.getScrollableAncestors(this._getRelativeElement(), document.body);
                    for (var _i = 0, _a = this._scrollableAncestors; _i < _a.length; _i++) {
                        var element = _a[_i];
                        element.addEventListener("scroll", this._handleAncestorScroll);
                    }
                }
            }
            this._isFlyoutShown = true;
            if (isPrerenderRequired) {
                this._updateDom();
            }
        }
        else
            this._removeFromDom();
    };
    /**
     * Removes the flyout element from DOM.
     */
    InnerFlyout.prototype._removeFromDom = function () {
        if (this._rootNode && this.props.closePopup) {
            this.props.closePopup(this._getFlyoutRootId());
        }
        if (this._parentFlyoutNode) {
            ReactDOM.unmountComponentAtNode(this._parentFlyoutNode);
            this._rootNode.removeChild(this._parentFlyoutNode);
            this._parentFlyoutNode = undefined;
            if (this._rootNode.childElementCount === 0) {
                ReactDOM.unmountComponentAtNode(this._rootNode);
                this._rootNode = undefined;
            }
        }
        if (this._isFlyoutShown) {
            // Remove the event leftovers we've put before.
            document.removeEventListener("mousedown", this._handleDocumentMouseClick);
            if (this._getIsRelative()) {
                window.removeEventListener("resize", this._handleDeviceResize);
                if (this._scrollableAncestors) {
                    for (var _i = 0, _a = this._scrollableAncestors; _i < _a.length; _i++) {
                        var element = _a[_i];
                        element.removeEventListener("scroll", this._handleAncestorScroll);
                    }
                }
            }
        }
        this._isFlyoutShown = false;
    };
    /**
     * Handles a click outside the flyout chain.
     */
    InnerFlyout.prototype._handleDocumentMouseClick = function (event) {
        this._ensureRootNode();
        if (!this._rootNode.contains(event.target) && this.props.onOutsideClick)
            this.props.onOutsideClick(event);
    };
    /**
     * Renders the anchor control for the flyout.
     */
    InnerFlyout.prototype.render = function () {
        return null;
    };
    /**
     * Display name for React dev tools
     */
    InnerFlyout.displayName = "Flyout";
    __decorate([
        Autobind_1.default
    ], InnerFlyout.prototype, "_handleAncestorScroll", null);
    __decorate([
        Autobind_1.default
    ], InnerFlyout.prototype, "_handleDeviceResize", null);
    __decorate([
        Autobind_1.default
    ], InnerFlyout.prototype, "_setFlyoutRef", null);
    __decorate([
        Autobind_1.default
    ], InnerFlyout.prototype, "_handleDocumentMouseClick", null);
    return InnerFlyout;
}(React.Component));
exports.InnerFlyout = InnerFlyout;
var Flyout = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerFlyout);
exports.Flyout = Flyout;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Flyout;

},{"../Supplementary/Decorators/Autobind":52,"./FelaConnectHelper":13,"./Flyout/FlyoutDirection":17,"./Flyout/Utils":18,"./View":47,"react":undefined,"react-dom":undefined,"react-fela":undefined}],17:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Enum for Flyout Direction
 */
var FlyoutDirection;
(function (FlyoutDirection) {
    FlyoutDirection[FlyoutDirection["left"] = 0] = "left";
    FlyoutDirection[FlyoutDirection["right"] = 1] = "right";
    FlyoutDirection[FlyoutDirection["up"] = 2] = "up";
    FlyoutDirection[FlyoutDirection["down"] = 3] = "down";
    FlyoutDirection[FlyoutDirection["leftup"] = 4] = "leftup";
    FlyoutDirection[FlyoutDirection["rightup"] = 5] = "rightup";
    FlyoutDirection[FlyoutDirection["upleft"] = 6] = "upleft";
    FlyoutDirection[FlyoutDirection["downleft"] = 7] = "downleft";
})(FlyoutDirection || (FlyoutDirection = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FlyoutDirection;

},{}],18:[function(require,module,exports){
"use strict";
var FlyoutDirection_1 = require("./FlyoutDirection");
/**
 * Returns the size of the viewport.
 */
function getDocumentViewportSize() {
    return {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
    };
}
/**
 * Returns the position of the viewport.
 */
function getDocumentViewportOffset() {
    var documentContentSize = getDocumentContentSize();
    var documentSize = getDocumentViewportSize();
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop,
        right: documentContentSize.width - documentSize.width - document.body.scrollLeft,
        bottom: documentContentSize.height - documentSize.height - document.body.scrollTop,
    };
}
exports.getDocumentViewportOffset = getDocumentViewportOffset;
/**
 * Returns the actual document (scrollable) content size.
 */
function getDocumentContentSize() {
    return {
        width: document.body.scrollWidth,
        height: document.body.scrollHeight,
    };
}
/**
 * Returns the full size of the given element (as if it has no content overflow).
 */
function getElementFullSize(element) {
    return {
        width: element.offsetWidth - element.clientWidth + element.scrollWidth,
        height: element.offsetHeight - element.clientHeight + element.scrollHeight,
    };
}
exports.getElementFullSize = getElementFullSize;
/**
 * Calculates the clipping of the given position+size against the document viewport.
 */
function calculateClipping(position, size, documentSize, documentOffset) {
    if (documentSize === void 0) { documentSize = getDocumentViewportSize(); }
    if (documentOffset === void 0) { documentOffset = getDocumentViewportOffset(); }
    var result = {};
    if (typeof position.left === "number") {
        // Clipping to the left
        result.width = Math.max(documentOffset.left - position.left, 0);
        // Clipping to the right
        result.width += Math.max(position.left + size.width - documentSize.width - documentOffset.left, 0);
    }
    else if (typeof position.right === "number") {
        // Clipping to the right
        result.width = Math.max(documentOffset.right - position.right, 0);
        // Clipping to the left
        result.width += Math.max(position.right + size.width - documentSize.width - documentOffset.right, 0);
    }
    if (typeof position.top === "number") {
        // Clipping to the up
        result.height = Math.max(documentOffset.top - position.top, 0);
        // Clipping to the down
        result.height += Math.max(position.top + size.height - documentSize.height - documentOffset.top, 0);
    }
    else if (typeof position.bottom === "number") {
        // Clipping to the down
        result.height = Math.max(documentOffset.bottom - position.bottom, 0);
        // Clipping to the up
        result.height += Math.max(position.bottom + size.height - documentSize.height - documentOffset.bottom, 0);
    }
    return result;
}
exports.calculateClipping = calculateClipping;
/**
 * Returns maximum flyout size within window's bounds
 * @param position
 * @param documentSize
 * @param documentOffset
 * @returns {ISize}
 */
function calculateMaximumSize(position, documentSize, documentOffset) {
    if (documentSize === void 0) { documentSize = getDocumentViewportSize(); }
    if (documentOffset === void 0) { documentOffset = getDocumentViewportOffset(); }
    var result = {};
    if (typeof position.left === "number") {
        // Limiting flyout width within window's bounds
        result.maxWidth = documentSize.width + documentOffset.left - position.left;
    }
    else if (typeof position.right === "number") {
        // Limiting flyout width within window's bounds
        result.maxWidth = documentSize.width + documentOffset.right - position.right;
    }
    if (typeof position.top === "number") {
        // Limiting flyout height within window's bounds
        result.maxHeight = documentSize.height + documentOffset.top - position.top;
    }
    else if (typeof position.bottom === "number") {
        // Limiting flyout height within window's bounds
        result.maxHeight = documentSize.height + documentOffset.top - position.top;
    }
    return result;
}
exports.calculateMaximumSize = calculateMaximumSize;
/**
 * Returns true when flyout is out of range of container
 * @param flyoutNode
 * @param container
 * @returns {boolean}
 */
function isOutOfRange(flyoutNode, container) {
    return flyoutNode.getBoundingClientRect().top < container.getBoundingClientRect().top ||
        flyoutNode.getBoundingClientRect().bottom > container.getBoundingClientRect().bottom;
}
exports.isOutOfRange = isOutOfRange;
/**
 * Returns the list of directions to use to open a flyout, in the order of priority.
 */
function getDirectionPriorities(initialDirection) {
    switch (initialDirection) {
        case FlyoutDirection_1.default.down:
            return [
                FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft,
                FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup,
            ];
        case FlyoutDirection_1.default.downleft:
            return [
                FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.down, FlyoutDirection_1.default.upleft, FlyoutDirection_1.default.up,
                FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup,
            ];
        case FlyoutDirection_1.default.right:
            return [
                FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup,
                FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft,
            ];
        case FlyoutDirection_1.default.rightup:
            return [
                FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.right, FlyoutDirection_1.default.leftup, FlyoutDirection_1.default.left,
                FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft,
            ];
        case FlyoutDirection_1.default.up:
            return [
                FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft, FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft,
                FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup,
            ];
        case FlyoutDirection_1.default.upleft:
            return [
                FlyoutDirection_1.default.upleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.down,
                FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup,
            ];
        case FlyoutDirection_1.default.left:
            return [
                FlyoutDirection_1.default.left, FlyoutDirection_1.default.leftup, FlyoutDirection_1.default.right, FlyoutDirection_1.default.rightup,
                FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft,
            ];
        case FlyoutDirection_1.default.leftup:
            return [
                FlyoutDirection_1.default.leftup, FlyoutDirection_1.default.left, FlyoutDirection_1.default.rightup, FlyoutDirection_1.default.right,
                FlyoutDirection_1.default.down, FlyoutDirection_1.default.downleft, FlyoutDirection_1.default.up, FlyoutDirection_1.default.upleft,
            ];
        default:
            throw new Error("Unexpected initial direction:" + initialDirection);
    }
}
/**
 * Calculates the preferred position for the flyout.
 * @param size forced size of the flyout, could be empty.
 * @param preferredDirection the preferred direction that will be used if no room limitations encountered.
 * @param anchorElement the element used to position the flyout against.
 */
function calculateFlyoutPreferredPosition(size, preferredDirection, anchorElement) {
    if (!size) {
        return calculateFlyoutPosition(size, preferredDirection, anchorElement);
    }
    else {
        var priorityList = getDirectionPriorities(preferredDirection);
        var directionBest = preferredDirection;
        var clippingBest = void 0;
        var positionBest = void 0;
        for (var _i = 0, priorityList_1 = priorityList; _i < priorityList_1.length; _i++) {
            var direction = priorityList_1[_i];
            var position = calculateFlyoutPosition(size, direction, anchorElement);
            var clipping = calculateClipping(position, size);
            if (clipping.height === 0 && clipping.width === 0) {
                positionBest = position;
                directionBest = direction;
                clippingBest = clipping;
                // No need to iterate any further
                break;
            }
            if (!clippingBest) {
                positionBest = position;
                directionBest = direction;
                clippingBest = clipping;
            }
            else {
                var clippingBestSum = clippingBest.width + clippingBest.height;
                var clippingSum = clipping.width + clipping.height;
                if (clippingSum < clippingBestSum) {
                    positionBest = position;
                    directionBest = direction;
                    clippingBest = clipping;
                }
            }
        }
        // By this moment we must have the best position.
        return positionBest;
    }
}
exports.calculateFlyoutPreferredPosition = calculateFlyoutPreferredPosition;
/**
 * Calculates the position for a relatively positioned flyout.
 */
function calculateFlyoutPosition(size, flyoutDirection, anchorElement) {
    var itemOffset = getOffset(anchorElement, document.body);
    var itemRectVp = anchorElement.getBoundingClientRect();
    var bodySize = getDocumentViewportSize();
    var itemRect = {
        top: itemOffset.top,
        left: itemOffset.left,
        width: itemRectVp.width,
        height: itemRectVp.height,
        right: itemOffset.left + itemRectVp.width,
        bottom: itemOffset.top + itemRectVp.height,
    };
    // Default values assume the "right" flyout direction.
    var top = itemRect.top;
    var left = itemRect.right;
    var right = null;
    var bottom = null;
    switch (flyoutDirection) {
        case FlyoutDirection_1.default.rightup:
            if (size && size.height) {
                top = itemRect.bottom - size.height;
            }
            else {
                top = undefined;
                bottom = bodySize.height - itemRect.bottom;
            }
            break;
        case FlyoutDirection_1.default.up:
            if (size && size.height) {
                top = itemRect.top - size.height;
            }
            else {
                bottom = bodySize.height - itemRect.top;
                top = undefined;
            }
            left = itemRect.left;
            break;
        case FlyoutDirection_1.default.upleft:
            if (size && size.height) {
                top = itemRect.top - size.height;
            }
            else {
                bottom = bodySize.height - itemRect.top;
                top = undefined;
            }
            if (size && size.width) {
                left = itemRect.right - size.width;
            }
            else {
                left = undefined;
                right = bodySize.width - itemRect.right;
            }
            break;
        case FlyoutDirection_1.default.down:
            top = itemRect.bottom;
            left = itemRect.left;
            break;
        case FlyoutDirection_1.default.downleft:
            top = itemRect.bottom;
            if (size && size.width) {
                left = itemRect.right - size.width;
            }
            else {
                left = undefined;
                right = bodySize.width - itemRect.right;
            }
            break;
        case FlyoutDirection_1.default.left:
            top = itemRect.top;
            if (size && size.width) {
                left = itemRect.left - size.width;
            }
            else {
                right = bodySize.width - itemRect.left;
            }
            break;
        case FlyoutDirection_1.default.leftup:
            if (size && size.height) {
                top = itemRect.bottom - size.height;
            }
            else {
                top = undefined;
                bottom = bodySize.height - itemRect.bottom;
            }
            if (size && size.width) {
                left = itemRect.left - size.width;
            }
            else {
                right = bodySize.width - itemRect.left;
            }
            break;
    }
    return { left: left, top: top, right: right, bottom: bottom };
}
exports.calculateFlyoutPosition = calculateFlyoutPosition;
/**
 * Returns the offset of the given html element (from the top left corner).
 */
function getOffset(element, topParent) {
    if (topParent === void 0) { topParent = document.body; }
    var topParentRect = topParent.getBoundingClientRect();
    var elementRect = element.getBoundingClientRect();
    return { top: elementRect.top - topParentRect.top, left: elementRect.left - topParentRect.left };
}
/**
 * Returns true if the given element has or could have a scroll bar.
 */
function isScrollable(element) {
    var computedStyle = window.getComputedStyle(element);
    return element && computedStyle
        && (computedStyle.overflow === "auto" || computedStyle.overflow === "scroll"
            || computedStyle.overflowX === "auto" || computedStyle.overflowX === "scroll"
            || computedStyle.overflowY === "auto" || computedStyle.overflowY === "scroll");
}
exports.isScrollable = isScrollable;
/**
 * Returns the list of the scrollable ancestors for the given element.
 */
function getScrollableAncestors(element, topParent) {
    var result = [];
    element = element && element.parentElement;
    while (element && element !== topParent) {
        if (isScrollable(element))
            result.push(element);
        element = element.parentElement;
    }
    return result;
}
exports.getScrollableAncestors = getScrollableAncestors;

},{"./FlyoutDirection":17}],19:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("./ComponentBase");
var FontIcon = (function (_super) {
    __extends(FontIcon, _super);
    function FontIcon(props, context) {
        _super.call(this, props, context);
        if (props && props.type === undefined) {
            throw new Error("FontIcon type property cannot be null");
        }
    }
    /**
     * Returns the specific name of the underlying element.
     */
    FontIcon.prototype.getElementName = function () {
        return "span";
    };
    /**
     * Returns combination of fela classes and icon's symbol class name
     */
    FontIcon.prototype.getElementClassName = function () {
        var styleClasses = this.props.styles ? " " + this.props.styles : "";
        return this.getSymbolClassName(this.props.type) + styleClasses;
    };
    /**
     * Display name for React dev tools
     */
    FontIcon.displayName = "FontIcon";
    return FontIcon;
}(ComponentBase_1.ComponentBase));
exports.FontIcon = FontIcon;

},{"./ComponentBase":11}],20:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Hyperlink component
 */
var InnerHyperlink = (function (_super) {
    __extends(InnerHyperlink, _super);
    function InnerHyperlink() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerHyperlink.prototype.getElementName = function () {
        return "a";
    };
    /**
     * Returns the specific element props.
     */
    InnerHyperlink.prototype.getElementProps = function () {
        return {
            href: this.props.href || "#",
            target: this.props.target,
        };
    };
    return InnerHyperlink;
}(ComponentBase_1.ComponentBase));
exports.InnerHyperlink = InnerHyperlink;
var Hyperlink = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerHyperlink);
exports.Hyperlink = Hyperlink;

},{"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],21:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Transforms IFlexboxContainerStyle to React.CSSProperties
 */
function applyIFlexboxContainerProp(style) {
    if (!style) {
        return null;
    }
    var cssStyle = {};
    cssStyle.display = (style.display) ? style.display : "flex";
    return cssStyle;
}
exports.applyIFlexboxContainerProp = applyIFlexboxContainerProp;
/**
 * returns css class name that should be added to dom element.
 */
function getCssClassName(display) {
    if (display && (display === "flex" || display === "inlineflexbox")) {
        return (display === "flex") ? "flexbox" : "inlineflexbox";
    }
    else {
        return "";
    }
}
exports.getCssClassName = getCssClassName;

},{}],22:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
var InnerIFrame = (function (_super) {
    __extends(InnerIFrame, _super);
    /**
     * Constructor for IFrame
     */
    function InnerIFrame(props) {
        _super.call(this, props);
        /**
         * The underlying iframe element
         */
        this._iframeElement = null;
        /**
         * The origin, derived from src
         */
        this._origin = null;
        this._origin = this._normalizeUrl(props.src);
    }
    /**
     * Standardizes url into this format: http://domain.com:80
     */
    InnerIFrame.prototype._normalizeUrl = function (url) {
        var a = document.createElement("a");
        a.href = url;
        return a.scheme + a.host + a.port;
    };
    /**
     * Handler for onLoad event
     */
    InnerIFrame.prototype._onLoad = function (e) {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerIFrame.prototype.getElementName = function () {
        return "iframe";
    };
    /**
     * Returns the specific element props.
     */
    InnerIFrame.prototype.getElementProps = function () {
        var props = {
            src: this.props.src,
            title: this.props.title,
            onLoad: this._onLoad,
        };
        if (this.props.security) {
            props.security = this.props.security;
            props.sandbox = "";
        }
        if (this.props.scrolling) {
            props.scrolling = this.props.scrolling;
        }
        props.ref = this._registerIframeElement.bind(this);
        return props;
    };
    /**
     * Invoked when the component is receiving new props
     * @param nextProps
     */
    InnerIFrame.prototype.componentWillReceiveProps = function (nextProps) {
        this._resetEventHandlers();
    };
    /**
     * Remove all event handlers
     */
    InnerIFrame.prototype._resetEventHandlers = function () {
        window.removeEventListener("message", this._receiveMessageHandler, false);
        this._receiveMessageHandler = null;
        if (this.props.registerSendMessageHandler) {
            this.props.registerSendMessageHandler(undefined);
        }
    };
    /**
     * Register the iframe dom element and attach event handlers
     */
    InnerIFrame.prototype._registerIframeElement = function (element) {
        this._iframeElement = element;
        if (this._iframeElement) {
            this._receiveMessageHandler = this._receiveMessage.bind(this);
            window.addEventListener("message", this._receiveMessageHandler, false);
            if (this.props.registerSendMessageHandler) {
                this.props.registerSendMessageHandler(this._sendMessage.bind(this));
            }
        }
        else {
            this._resetEventHandlers();
        }
    };
    /**
     * Component will unmount lifecycle method. Cleaning listeners here
     */
    InnerIFrame.prototype.componentWillUnmount = function () {
        this._resetEventHandlers();
    };
    /**
     * Handler for postMessage events
     */
    InnerIFrame.prototype._receiveMessage = function (event) {
        // confirm child iframe element exists and that event came only from that child
        if (!this._iframeElement || event.source !== this._iframeElement.contentWindow) {
            return;
        }
        if (this._normalizeUrl(event.origin) !== this._origin) {
            return;
        }
        if (this.props.onMessage) {
            this.props.onMessage(event);
        }
    };
    /**
     * Handler for sending messages to the child iframe
     */
    InnerIFrame.prototype._sendMessage = function (message) {
        if (!this._iframeElement) {
            return;
        }
        this._iframeElement.contentWindow.postMessage(message, this._origin);
    };
    /**
     * Display name for React dev tools
     */
    InnerIFrame.displayName = "IFrame";
    __decorate([
        Autobind_1.default
    ], InnerIFrame.prototype, "_onLoad", null);
    return InnerIFrame;
}(ComponentBase_1.ComponentBase));
exports.InnerIFrame = InnerIFrame;
var IFrame = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerIFrame);
exports.IFrame = IFrame;

},{"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],23:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
* Component representing an image base control
*/
var InnerImage = (function (_super) {
    __extends(InnerImage, _super);
    function InnerImage() {
        _super.apply(this, arguments);
    }
    /**
     * Handler for onLoad event
     */
    InnerImage.prototype._onLoad = function (e) {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerImage.prototype.getElementName = function () {
        return "img";
    };
    /**
     * Returns the specific element props.
     */
    InnerImage.prototype.getElementProps = function () {
        var props = {
            src: this.props.source,
            onLoad: this._onLoad,
            alt: this.props.altText ? this.props.altText : "",
        };
        return props;
    };
    /**
     * Display name for React dev tools
     */
    InnerImage.displayName = "Image";
    __decorate([
        Autobind_1.default
    ], InnerImage.prototype, "_onLoad", null);
    return InnerImage;
}(ComponentBase_1.ComponentBase));
exports.InnerImage = InnerImage;
var Image = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerImage);
exports.Image = Image;

},{"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],24:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Label component
 */
var InnerLabel = (function (_super) {
    __extends(InnerLabel, _super);
    function InnerLabel() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerLabel.prototype.getElementName = function () {
        return "label";
    };
    /**
     * Returns the specific element props.
     */
    InnerLabel.prototype.getElementProps = function () {
        return {
            htmlFor: this.props.forElementId,
            for: this.props.forElementId,
        };
    };
    /**
     * Component name for React Dev Tools
     */
    InnerLabel.displayName = "Label";
    return InnerLabel;
}(ComponentBase_1.ComponentBase));
exports.InnerLabel = InnerLabel;
var Label = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerLabel);
exports.Label = Label;

},{"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],25:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");
var AriaLive = require("../Supplementary/Accessibility/Attributes/AriaLive");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * List component
 */
var InnerList = (function (_super) {
    __extends(InnerList, _super);
    function InnerList() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerList.prototype.getElementName = function () {
        return "ul";
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    InnerList.prototype.getFlexClassName = function (style) {
        return IFlexboxContainerStyle_1.getCssClassName(style ? style.display : null);
    };
    /**
     * Returns the specific element props.
     */
    InnerList.prototype.getElementProps = function () {
        var options = {};
        if (this.props.announceAccessibilityNotification === true) {
            options[AttributeName.ARIA_LIVE] = this.props.notificationType || AriaLive.POLITE;
        }
        return Object.assign(options, { ref: (this.props.refCallback) ? this._refCallbackTrigger : null });
    };
    /**
     * Triggers the callback function of the list reference.
     * @param list the list reference
     */
    InnerList.prototype._refCallbackTrigger = function (list) {
        this.props.refCallback(list);
    };
    /**
     * Returns the specific style for the underlying element.
     */
    InnerList.prototype.getElementStyle = function () {
        if (this.props.style) {
            return Object.assign({}, IFlexboxContainerStyle_1.applyIFlexboxContainerProp(this.props.style));
        }
    };
    /**
     * Component name for React Dev Tools
     */
    InnerList.displayName = "List";
    __decorate([
        Autobind_1.default
    ], InnerList.prototype, "_refCallbackTrigger", null);
    return InnerList;
}(ComponentBase_1.ComponentBase));
exports.InnerList = InnerList;
var List = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerList);
exports.List = List;

},{"../Supplementary/Accessibility/Attributes/AriaLive":48,"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react-fela":undefined}],26:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Function to transform control inline style properties into React CSS properties
 */
function transformStyle(style) {
    if (!style) {
        return null;
    }
    var flexboxContainerStyle = IFlexboxContainerStyle_1.applyIFlexboxContainerProp(style);
    return Object.assign({}, flexboxContainerStyle);
}
/**
 * ListItem component
 */
var InnerListItem = (function (_super) {
    __extends(InnerListItem, _super);
    function InnerListItem() {
        _super.call(this);
        /**
         * The dangerous identifier for the List Item
         */
        this._dangerousIdentifier = null;
    }
    /**
     * Raised once the component gets selected.
     */
    InnerListItem.prototype._handleSelected = function (component) {
        if (this.props.onSelected) {
            this.props.onSelected(component);
        }
    };
    /**
     * Standard React life-cycle method, fired up when the component receives a new set of props.
     */
    InnerListItem.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.isSelected && nextProps.isSelected !== this.props.isSelected) {
            this._handleSelected(this);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerListItem.prototype.getElementName = function () {
        return "li";
    };
    /**
     * Returns the specific element props.
     */
    InnerListItem.prototype.getElementProps = function () {
        var props = (_a = {},
            _a[AttributeName.ARIA_SELECTED] = this.props.isSelected,
            _a["data-text"] = this.props.dataText,
            _a["data-value"] = this.props.dataValue,
            _a
        );
        return props;
        var _a;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerListItem.displayName = "ListItem";
    return InnerListItem;
}(ComponentBase_1.ComponentBase));
exports.InnerListItem = InnerListItem;
function listItemRuleGen(props) {
    // We prefer the selected style, and then hovered style, and then the default style
    if (props && props.style) {
        if (props.isSelected && props.selectedStyle) {
            return Object.assign({}, Object.assign({}, props.style, props.selectedStyle), FelaConnectHelper_1.ruleGen(props));
            ;
        }
        return Object.assign(props.style, FelaConnectHelper_1.ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(listItemRuleGen, props); }; };
//Need to add prefix
var ListItem = ReactFela.connect(mapStylesToProps)(InnerListItem);
exports.ListItem = ListItem;

},{"../Supplementary/Accessibility/Attributes/AttributeName":49,"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react-fela":undefined}],27:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var View_1 = require("../View");
var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
var RootPopup_1 = require("./RootPopup");
/**
 * Enumeration of possible Popup types.
 */
var PopupType;
(function (PopupType) {
    PopupType[PopupType["Root"] = 1] = "Root";
    PopupType[PopupType["Nested"] = 2] = "Nested";
})(PopupType || (PopupType = {}));
exports.PopupType = PopupType;
/**
 * Method, which toggles Popup visibility.
 */
function getVisibilityStyle(isVisible, style) {
    return {
        display: isVisible ? (style.display ? style.display : "flex") : "none",
    };
}
function getPositioningStyle(style, parent) {
    var result = Object.assign({}, style);
    var parentPosition = parent && parent.getBoundingClientRect();
    if (parentPosition) {
        result.top = (parseInt(result.top, 10) - parentPosition.top) + "px";
        result.left = (parseInt(result.left, 10) - parentPosition.left) + "px";
    }
    return result;
}
/**
 * Default styles for Popup shadow.
 */
var shadowStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    backgroundColor: "rgba(0, 0, 0, 0.3)",
};
/**
 * Default styles for Popup window.
 */
var popupStyle = {
    position: "absolute",
    width: "400px",
    height: "400px",
    backgroundColor: "#fff",
};
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        _super.call(this, props);
        /**
         * Property for root wrapper container. Used to toggle visibility.
         */
        this._rootElement = null;
        this._popupElement = null;
        this.state = {
            forceClose: false,
        };
        this._rootElement = document.getElementById(props.rootPopupId);
    }
    Popup.prototype._getId = function () {
        return this.props.id || "";
    };
    /**
     * Getter method, which takes from popupToOpen only own reference.
     */
    Popup.prototype._getCurrentPopupToOpen = function (forceClose, popupToOpen) {
        var result = "";
        if (!forceClose && popupToOpen) {
            var popupArray = popupToOpen.split(".");
            result = popupArray[0];
        }
        return result;
    };
    /**
     * Getter method, which takes from popupToOpen reference to children.
     */
    Popup.prototype._getNextPopupToOpen = function (forceClose, popupToOpen) {
        var result = "";
        if (!forceClose && popupToOpen) {
            var popupArray = popupToOpen.split(".");
            popupArray.splice(0, 1);
            result = popupArray.join(".");
        }
        return result;
    };
    /**
     * Getter method, which returns props for children.
     */
    Popup.prototype._getChildrenProps = function () {
        return {
            type: PopupType.Nested,
            parent: this._popupElement,
            popupToOpen: this._getNextPopupToOpen(this.state.forceClose, this.props.popupToOpen),
            rootPopupId: this.props.rootPopupId,
        };
    };
    /**
     * Getter method, which maps nested Popups and pass them props.
     */
    Popup.prototype._getChildrenWithProps = function (children) {
        var _this = this;
        if (!children)
            return null;
        var result;
        if (children.map) {
            result = children.map(function (child) {
                return (child.type === Popup) ?
                    React.cloneElement(child, _this._getChildrenProps()) :
                    child;
            });
        }
        else {
            result = (children === Popup) ?
                React.cloneElement(children, this._getChildrenProps()) :
                children;
        }
        return result;
    };
    /**
     * Predicate method, which checks if Popup should be opened.
     */
    Popup.prototype._isVisible = function () {
        return this._getCurrentPopupToOpen(this.state.forceClose, this.props.popupToOpen) === this.props.name;
    };
    Popup.prototype._stopPropagation = function (e) {
        e.stopPropagation();
    };
    /**
     * Handler on outside click.
     */
    Popup.prototype._forceClosePopup = function (e) {
        this._stopPropagation(e);
        if (this.props.closeOnOutsideClick) {
            this.setState({
                forceClose: true,
            });
        }
    };
    Popup.prototype._toggleRootElementVisibility = function () {
        var openedPopups = this._rootElement.getAttribute(RootPopup_1.ROOT_POPUP_ATTRIBUTE);
        if (!openedPopups) {
            this._rootElement.style.display = "none";
        }
        else if (this._rootElement.style.display === "none") {
            this._rootElement.style.display = "flex";
        }
    };
    Popup.prototype._getStaticContent = function () {
        var content = this.props.content;
        var result = null;
        if (content) {
            result = React.createElement(View_1.View, {ref: "staticContent"});
        }
        return result;
    };
    Popup.prototype._registerPopup = function (props, state) {
        var name = props.name, popupToOpen = props.popupToOpen;
        var forceClose = state.forceClose;
        var openedPopups = this._rootElement.getAttribute(RootPopup_1.ROOT_POPUP_ATTRIBUTE);
        openedPopups = !openedPopups ? "" : openedPopups;
        var popupIndex = openedPopups.indexOf(name);
        if (forceClose || name !== this._getCurrentPopupToOpen(forceClose, popupToOpen)) {
            if (~popupIndex) {
                this._rootElement.setAttribute(RootPopup_1.ROOT_POPUP_ATTRIBUTE, openedPopups.replace("." + name, ""));
            }
            return;
        }
        if (!~popupIndex) {
            this._rootElement.setAttribute(RootPopup_1.ROOT_POPUP_ATTRIBUTE, openedPopups.concat("." + name));
        }
    };
    Popup.prototype.componentWillMount = function () {
        this._registerPopup(this.props, this.state);
    };
    Popup.prototype.componentDidMount = function () {
        var _this = this;
        this._popupElement = ReactDOM.findDOMNode(this.refs.popup);
        this.forceUpdate(function () {
            var staticContentRef = _this.refs.staticContent;
            if (staticContentRef) {
                var staticContentElement = ReactDOM.findDOMNode(staticContentRef);
                staticContentElement.appendChild(_this.props.content);
            }
        });
    };
    Popup.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            forceClose: false,
        });
    };
    Popup.prototype.componentWillUpdate = function (nextProps, nextState) {
        this._registerPopup(nextProps, nextState);
    };
    Popup.prototype.render = function () {
        var combinedShadowStyle = Object.assign({}, getPositioningStyle(this.props.shadowStyle, this.props.parent), getVisibilityStyle(this._isVisible(), this.props.shadowStyle));
        var combinedPopupStyle = Object.assign({}, this.props.popupStyle, getVisibilityStyle(this._isVisible(), this.props.popupStyle));
        this._toggleRootElementVisibility();
        return (React.createElement(View_1.View, {id: this._getId(), style: combinedShadowStyle, onClick: this._forceClosePopup}, React.createElement(View_1.View, {style: combinedPopupStyle, onClick: this._stopPropagation, ref: "popup"}, this._getStaticContent(), this._getChildrenWithProps(this.props.children))));
    };
    __decorate([
        Autobind_1.default
    ], Popup.prototype, "_forceClosePopup", null);
    return Popup;
}(React.Component));
exports.Popup = Popup;
Popup.defaultProps = {
    shadowStyle: shadowStyle,
    popupStyle: popupStyle,
    type: PopupType.Root,
    closeOnOutsideClick: false,
};

},{"../../Supplementary/Decorators/Autobind":52,"../View":47,"./RootPopup":28,"react":undefined,"react-dom":undefined}],28:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/* tslint:disable:crm-prohibit-react-dom-render */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var View_1 = require("../View");
var ROOT_POPUP_ATTRIBUTE = "openedPopups";
exports.ROOT_POPUP_ATTRIBUTE = ROOT_POPUP_ATTRIBUTE;
var containerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
};
var RootNodeSuffix = "_popupContainer";
var RootPopup = (function (_super) {
    __extends(RootPopup, _super);
    function RootPopup() {
        _super.apply(this, arguments);
    }
    RootPopup.prototype._getPopupId = function () {
        return (this.props.parentCustomControlId ? this.props.parentCustomControlId + "|" : "") + this.props.id + RootNodeSuffix;
    };
    RootPopup.prototype._initializeRootNode = function () {
        if (!this._rootNode) {
            if (this.props.openPopup) {
                this._rootNode = document.getElementById(this._getPopupId());
            }
            else {
                this._rootNode = document.createElement("section");
                this._rootNode.id = this._getPopupId();
                Object.assign(this._rootNode.style, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                });
                this._rootNode.setAttribute(ROOT_POPUP_ATTRIBUTE, "");
                document.body.appendChild(this._rootNode);
            }
        }
    };
    RootPopup.prototype._getChildrenWithProps = function (children) {
        var _this = this;
        if (!children)
            return null;
        var result;
        if (children.map) {
            result = children.map(function (child) {
                return React.cloneElement(child, { rootPopupId: _this._getPopupId() });
            });
        }
        else {
            result = React.cloneElement(children, { rootPopupId: this._getPopupId() });
        }
        return result;
    };
    RootPopup.prototype._renderToBody = function () {
        if (this.props.children && this._rootNode) {
            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(View_1.View, {style: containerStyle}, this._getChildrenWithProps(this.props.children)), this._rootNode);
        }
    };
    RootPopup.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.rootNodes && nextProps.rootNodes[this._getPopupId()] !== undefined && nextProps.rootNodes[this._getPopupId()]) {
            this._initializeRootNode();
            this._renderToBody();
        }
    };
    RootPopup.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.openPopup) {
            this.props.openPopup(this._getPopupId()).then(function () {
                if (_this.props.rootNodes && _this.props.rootNodes[_this._getPopupId()] !== undefined && _this.props.rootNodes[_this._getPopupId()]) {
                    _this._initializeRootNode();
                    _this._renderToBody();
                }
            });
        }
        else {
            this._initializeRootNode();
            this._renderToBody();
        }
    };
    RootPopup.prototype.componentDidUpdate = function () {
        this._initializeRootNode();
        this._renderToBody();
    };
    RootPopup.prototype.componentWillUnmount = function () {
        if (this.props.closePopup) {
            this.props.closePopup(this._getPopupId());
        }
        else {
            document.body.removeChild(this._rootNode);
        }
        if (this._rootNode) {
            ReactDOM.unmountComponentAtNode(this._rootNode);
        }
        this._rootNode = null;
    };
    RootPopup.prototype.render = function () {
        return null;
    };
    return RootPopup;
}(React.Component));
exports.RootPopup = RootPopup;

},{"../View":47,"react":undefined,"react-dom":undefined}],29:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var View_1 = require("../Primitive/View");
/**
 * Enum for presence indicator size value.
 * @readonly
 */
var PresenceIndicatorSize;
(function (PresenceIndicatorSize) {
    PresenceIndicatorSize[PresenceIndicatorSize["Default"] = 0] = "Default";
    PresenceIndicatorSize[PresenceIndicatorSize["Small"] = 1] = "Small";
    PresenceIndicatorSize[PresenceIndicatorSize["Medium"] = 2] = "Medium";
    PresenceIndicatorSize[PresenceIndicatorSize["Large"] = 3] = "Large";
})(PresenceIndicatorSize || (PresenceIndicatorSize = {}));
exports.PresenceIndicatorSize = PresenceIndicatorSize;
/**
 * Control which renders presence status for the given entity .
 */
var PresenceIndicator = (function (_super) {
    __extends(PresenceIndicator, _super);
    function PresenceIndicator() {
        _super.apply(this, arguments);
        this._renderPresence = false;
    }
    /**
     * Called after the presence component is rendered initially to update its information using sdk.
     */
    PresenceIndicator.prototype._addPresenceInformation = function () {
        // Presence class has constructor with arguments as (elementId, sipUrl, entityReference, displaySize, parentControlId, accessibilityLabel)
        var displaySize = this.props.displaySize ? this.props.displaySize : PresenceIndicatorSize.Default;
        this._presenceInstance = new this._skypeChannelContext.SkypeChannelClient.Presence(this._presenceId, this.props.sipUrl, this.props.entityReference, displaySize, this.props.parentControlId, this.props.accessibilityLabel);
        this._presenceInstance.buildPresence();
    };
    /**
     *  Update presence component once mouting is done.
     */
    PresenceIndicator.prototype.componentDidMount = function () {
        if (this._renderPresence) {
            this._addPresenceInformation();
        }
    };
    /**
     * Destroying presence instance once component unmounted.
     */
    PresenceIndicator.prototype.componentWillUnmount = function () {
        if (this._presenceInstance) {
            // This will unsubscribe all event attached to presence indicator.
            this._presenceInstance.close();
            this._presenceInstance = null;
        }
    };
    /**
     * Check whether Skype channel instance is available or not.
     */
    PresenceIndicator.prototype._isSkypeChannelAvailable = function () {
        // Getting SkypeChannel from UCI Appcontext.
        // Added null check for context, as in web client it will come null/undefined. 
        this._skypeChannelContext = this.context && this.context.context != null ? this.context.context.SkypeChannel : undefined;
        return (this._skypeChannelContext !== undefined);
    };
    /**
     * Check whether to render presence indicator.
     */
    PresenceIndicator.prototype._isPropsAvailable = function () {
        if (this.props.sipUrl) {
            return true;
        }
        else {
            return (this.props.entityReference &&
                this._skypeChannelContext.SkypeChannelClient.PresenceInformation &&
                this._skypeChannelContext.SkypeChannelClient.PresenceInformation.isPresenceEnabledEntity(this.props.entityReference.entityName));
        }
    };
    /**
     * Render presence component.
     */
    PresenceIndicator.prototype.render = function () {
        this._presenceId = this.props.id ? this.props.id : this.props.parentControlId + "_presence";
        this._renderPresence = this._isSkypeChannelAvailable() && this._isPropsAvailable();
        return (this._renderPresence ? React.createElement(View_1.View, {id: this._presenceId, style: this.props.style}) : null);
    };
    PresenceIndicator.displayName = "PresenceIndicator";
    return PresenceIndicator;
}(React.Component));
exports.PresenceIndicator = PresenceIndicator;
PresenceIndicator.contextTypes = {
    context: React.PropTypes.object,
};

},{"../Primitive/View":47,"react":undefined}],30:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
/* tslint:disable:crm-prohibit-standard-react-element */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Progress Indicator component
 */
var InnerProgressIndicator = (function (_super) {
    __extends(InnerProgressIndicator, _super);
    function InnerProgressIndicator() {
        _super.apply(this, arguments);
    }
    /**
     * Determine whether the component needs to be re-rendered.
     * @params nextProps The new component properties.
     * @returns {boolean} Whether to re-render the component.
     */
    InnerProgressIndicator.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.active !== nextProps.active) || (this.props.progressType !== nextProps.progressType);
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerProgressIndicator.prototype.getElementName = function () {
        // It seems that progress html element is not flexible enough to render the "ring" with animated dots 
        // or something similar. That's why div element is used for now. Task 117099 is created to track
        // this accessibility issue in VSO.
        // return this.props.isBrowserSafari === true ? "div" : "progress";
        return "div";
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    InnerProgressIndicator.prototype.getFlexClassName = function (style) {
        var classString = "";
        var styleTemp;
        if (style) {
            styleTemp = Object.assign(IFlexboxContainerStyle_1.applyIFlexboxContainerProp(style));
        }
        else {
            return null;
        }
        if (!this.props.progressType || this.props.progressType === "bar") {
            classString += "indeterminateProgressBar";
        }
        else if (this.props.progressType === "ring") {
            classString += "indeterminateProgressRing";
        }
        if (this.props.active !== true && this.props.animating !== true) {
            classString += " hideProgressBar";
        }
        classString += " " + IFlexboxContainerStyle_1.getCssClassName((styleTemp) ? styleTemp.display : null);
        return classString;
    };
    /**
     * Returns the children of the element.
     */
    InnerProgressIndicator.prototype.getElementChildren = function () {
        if (this.props.progressType === "ring") {
            // TODO: address accessibility issues defined in VSO item 117099. Also please have a look at
            // PR 37639 for details.
            return React.createElement("div", null, React.createElement("div", {className: "progressDot"}), React.createElement("div", {className: "progressDot"}), React.createElement("div", {className: "progressDot"}), React.createElement("div", {className: "progressDot"}), React.createElement("div", {className: "progressDot"}));
        }
        return undefined;
    };
    InnerProgressIndicator.displayName = "ProgressIndicator";
    return InnerProgressIndicator;
}(ComponentBase_1.ComponentBase));
exports.InnerProgressIndicator = InnerProgressIndicator;
var ProgressIndicator = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerProgressIndicator);
exports.ProgressIndicator = ProgressIndicator;

},{"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react":undefined,"react-fela":undefined}],31:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComponentBase_1 = require("../ComponentBase");
var AccessibilityRole = require("../../Supplementary/Accessibility/Attributes/Role");
var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
/**
 * Class that implements option for RadioInput.
 */
var InputOption = (function (_super) {
    __extends(InputOption, _super);
    function InputOption(props, context) {
        _super.call(this, props, context);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InputOption.prototype.getElementName = function () {
        return "input";
    };
    /**
     * Handler for onChange event on input
     */
    InputOption.prototype._onChangeHandler = function (e) {
        var checked = e.target.checked;
        if (checked) {
            if (this.props.onChange) {
                this.props.onChange(this.props.value);
            }
        }
    };
    /**
     * Returns the specific element props.
     */
    InputOption.prototype.getElementProps = function () {
        var props = {
            id: this.props.id,
            key: this.props.id,
            checked: this.props.checked,
            name: this.props.name,
            role: AccessibilityRole.RADIO,
            type: "radio",
            onChange: this._onChangeHandler,
        };
        if (this.props.disabled) {
            props.disabled = true;
        }
        if (this.props.checked) {
            props[InputOption._DATA_CHECKED] = true;
        }
        if (this.props.value) {
            props.value = this.props.value.Label;
        }
        return props;
    };
    InputOption.displayName = "InputOption";
    /**
     * Attribute name for checked option.
     */
    InputOption._DATA_CHECKED = "data-checked";
    __decorate([
        Autobind_1.default
    ], InputOption.prototype, "_onChangeHandler", null);
    return InputOption;
}(ComponentBase_1.ComponentBase));
exports.InputOption = InputOption;

},{"../../Supplementary/Accessibility/Attributes/Role":50,"../../Supplementary/Decorators/Autobind":52,"../ComponentBase":11}],32:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
var CustomControlUtilityPointers_1 = require("../../../CustomControls/Models/CustomControlUtilityPointers");
var ComponentBase_1 = require("../ComponentBase");
var View_1 = require("../View");
var GuidHelper_1 = require("../../../CustomControls/Utilities/GuidHelper");
var InputOption_1 = require("./InputOption");
var Label_1 = require("../Label");
/**
 * Class that implements container for options.
 */
var RadioInput = (function (_super) {
    __extends(RadioInput, _super);
    /**
     * Component's constructor.
     * @param props {IRadioInputProps} Props for the component.
     * @param context {{}} Additional context for initialization.
     */
    function RadioInput(props, context) {
        _super.call(this, props, context);
        this._uuid = GuidHelper_1.guidV4String();
        this.state = {
            value: props.value,
        };
    }
    /**
     * Invoked when the component receiving new props
     * @param nextProps
     */
    RadioInput.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps && !RadioInput._optionsEqual(this.state.value, nextProps.value)) {
            // resetting the value via props has a priority over the component's state
            this.setState({ value: nextProps.value });
        }
    };
    /**
     * Returns the unique ID.
     * @param sourceId {string} Initial ID string to be used for ID creation.
     * Defaults to the id given in props by the consumen.
     * @param supplement {string} Additional part to the ID that should make it unique.
     * Defaults to the uuid generated in constructor of the component.
     * @return {string} ID created using given sourceId and a supplement.
     * @private
     */
    RadioInput.prototype._uniqueId = function (sourceId, supplement) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (supplement === void 0) { supplement = this._uuid; }
        return sourceId + "_" + supplement;
    };
    /**
     * Creates option id that should be unique for component.
     * @param option {IOptionSetValue} OptionSetValue descriptor object.
     * @return {string} Option ID created for given OptionSetValue descriptor.
     * @private
     */
    RadioInput.prototype._optionId = function (option) {
        return "" + this._uniqueId() + option.Value;
    };
    /**
     * Checks if options given in parameters can be considered the same.
     * @param one {IOptionSetValue} Descriptor for the first option of the comparison.
     * @param two {IOptionSetValue} Descriptor for the second option of the comparison.
     * @return {boolean} `true` if options given in parameters can be considered equal, `false` - otherwise.
     * @private
     */
    RadioInput._optionsEqual = function (one, two) {
        if (!one || !two) {
            return false;
        }
        if (CustomControlUtilityPointers_1.IsNullOrUndefined(one.Value) && CustomControlUtilityPointers_1.IsNullOrUndefined(two.Value)) {
            // Decide by labels.
            return (one.Label === two.Label);
        }
        // Decide by values.
        return (one.Value === two.Value);
    };
    /**
     * Gets props for inputOption.
     * @param option {IOptionSetValue} current option for input.
     * @param id {string} id attribute for input.
     * @private
     */
    RadioInput.prototype._getInputOptionProps = function (option, id) {
        var isChecked = (option.Value === this.state.value.Value);
        var props = {
            id: id,
            key: id,
            value: option,
            name: this.props.name,
            checked: isChecked,
            onChange: this._onChangeHandler,
            disabled: this.props.disabled,
        };
        if (this.props.style) {
            props.style = this.props.style.inputOptionStyle || null;
        }
        return props;
    };
    /**
     * Gets props for label.
     * @param id {string} value for forElementId attribute.
     * @private
     */
    RadioInput.prototype._getLabelOptionProps = function (id) {
        var props = {
            forElementId: id,
        };
        if (this.props.style) {
            props.style = this.props.style.inputOptionLabelStyle || null;
        }
        return props;
    };
    /**
     * Bound handler for the `change` event.
     * @param event {Event} Change event wrapper object.
     * @private
     */
    RadioInput.prototype._onChangeHandler = function (option) {
        if (option) {
            this.setState({ value: option });
            if (this.props.onChange) {
                this.props.onChange(option);
            }
        }
    };
    /**
     * Getter for the actual underlying element.
     * @return {string} Actual HTML element name.
     */
    RadioInput.prototype.getElementName = function () {
        return "View";
    };
    /**
     * Converts IRadioInputProps to React.HTMLAttributes.
     * @return {React.HTMLAttributes} Attributes of the select component.
     */
    RadioInput.prototype.getElementProps = function () {
        var props = {};
        if (this.props.style) {
            props.style = this.props.style.viewContainerStyle || null;
        }
        if (this.props.disabled) {
            props.disabled = true;
        }
        return props;
    };
    /**
     * Composes and returns proper children for the select component.
     * It is supposed that Select component will never have other children than its options.
     * @return {any} Properly composed children for the component.
     */
    RadioInput.prototype.getElementChildren = function () {
        var _this = this;
        if (!this.props.options || !this.props.options.length || !this.props.value) {
            return _super.prototype.getElementChildren.call(this); // OR just return `null` here?
        }
        return this.props.options.map(function (option) {
            var id = _this._optionId(option);
            var inputProps = _this._getInputOptionProps(option, id);
            var labelProps = _this._getLabelOptionProps(id);
            return (React.createElement(View_1.View, {key: GuidHelper_1.guidV4String()}, React.createElement(InputOption_1.InputOption, __assign({}, inputProps)), React.createElement(Label_1.Label, __assign({}, labelProps), option.Label)));
        });
    };
    __decorate([
        Autobind_1.default
    ], RadioInput.prototype, "_onChangeHandler", null);
    return RadioInput;
}(ComponentBase_1.ComponentBase));
exports.RadioInput = RadioInput;

},{"../../../CustomControls/Models/CustomControlUtilityPointers":56,"../../../CustomControls/Utilities/GuidHelper":73,"../../Supplementary/Decorators/Autobind":52,"../ComponentBase":11,"../Label":24,"../View":47,"./InputOption":31,"react":undefined}],33:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
var InnerScrollView = (function (_super) {
    __extends(InnerScrollView, _super);
    function InnerScrollView() {
        _super.apply(this, arguments);
    }
    /**
     * Handler for onClick event
     */
    InnerScrollView.prototype._onClickHandler = function (event) {
        if (this.props.onClick !== undefined) {
            this.props.onClick(event);
        }
    };
    /**
     * Handler for onScroll event
     */
    InnerScrollView.prototype._onScrollHandler = function (event) {
        if (this.props.onScroll !== undefined) {
            this.props.onScroll(event);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerScrollView.prototype.getElementName = function () {
        return "div";
    };
    /**
     * Returns the specific element props.
     */
    InnerScrollView.prototype.getElementProps = function () {
        return {
            onClick: this._onClickHandler,
            onScroll: this._onScrollHandler,
            ref: (this.props.refCallback) ? this._setInnerViewRef : null,
        };
    };
    /**
     * Scrolls the viewport to the position of the given component so that it becomes visible.
     */
    InnerScrollView.prototype.scrollToChild = function (child) {
        // Validate the input
        if (!child)
            throw new Error("child must be specified");
        var scrollViewDom = ReactDOM.findDOMNode(this);
        var childDom = ReactDOM.findDOMNode(child);
        if (scrollViewDom && childDom) {
            if (this.props.horizontal) {
                if (scrollViewDom.scrollLeft + scrollViewDom.offsetWidth > childDom.offsetLeft + childDom.offsetWidth) {
                    scrollViewDom.scrollLeft = childDom.offsetLeft + childDom.offsetWidth - scrollViewDom.offsetWidth;
                }
                else if (scrollViewDom.scrollLeft < childDom.offsetLeft) {
                    scrollViewDom.scrollLeft = childDom.offsetLeft;
                }
            }
            else {
                if (scrollViewDom.scrollTop + scrollViewDom.clientHeight < childDom.offsetTop + childDom.clientHeight) {
                    scrollViewDom.scrollTop = childDom.offsetTop + childDom.clientHeight - scrollViewDom.clientHeight;
                }
                else if (childDom.offsetTop < scrollViewDom.scrollTop) {
                    scrollViewDom.scrollTop = childDom.offsetTop;
                }
            }
        }
    };
    InnerScrollView.prototype._setInnerViewRef = function () {
        this.props.refCallback(this);
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    InnerScrollView.prototype.getFlexClassName = function (style) {
        return IFlexboxContainerStyle_1.getCssClassName(style ? style.display : null);
    };
    /**
     * Display name for React dev tools
     */
    InnerScrollView.displayName = "ScrollView";
    __decorate([
        Autobind_1.default
    ], InnerScrollView.prototype, "_onClickHandler", null);
    __decorate([
        Autobind_1.default
    ], InnerScrollView.prototype, "_onScrollHandler", null);
    __decorate([
        Autobind_1.default
    ], InnerScrollView.prototype, "_setInnerViewRef", null);
    return InnerScrollView;
}(ComponentBase_1.ComponentBase));
exports.InnerScrollView = InnerScrollView;
function scrollViewRuleGen(props) {
    // We prefer the selected style, and then hovered style, and then the default style
    if (props && props.style) {
        // In web, the default value for flexDirection property is "row".
        var horizontalStyle = props.horizontal
            ? Object.assign({}, props.style, { overflowX: "scroll", flexDirection: "row" })
            : Object.assign({}, props.style, { overflowY: "scroll", flexDirection: "column" });
        var containerStyle = props.contentContainerStyle
            ? Object.assign({}, props.style, props.contentContainerStyle)
            : props.style;
        // apply momentum-based scrolling for scrollable containers
        var scrollStyle = InnerScrollView.isElementScrollable(props.style)
            ? Object.assign({}, props.style, { "-webkit-overflow-scrolling": "touch" })
            : props.style;
        var style = Object.assign({}, horizontalStyle, containerStyle, scrollStyle);
        return Object.assign(props.style, style, FelaConnectHelper_1.ruleGen(props), IFlexboxContainerStyle_1.applyIFlexboxContainerProp(style));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(scrollViewRuleGen, props); }; };
var ScrollView = ReactFela.connect(mapStylesToProps)(InnerScrollView);
exports.ScrollView = ScrollView;

},{"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react-dom":undefined,"react-fela":undefined}],34:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * Class introducing the select's single option element.
 */
var InnerOption = (function (_super) {
    __extends(InnerOption, _super);
    function InnerOption() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerOption.prototype.getElementName = function () {
        return "option";
    };
    /**
     * Returns the specific element props.
     */
    InnerOption.prototype.getElementProps = function () {
        var props = {
            value: (this.props.value) ? this.props.value.Value.toString() : "-1",
        };
        if (this.props.disabled) {
            props.disabled = true;
        }
        if (this.props.selected) {
            props[InnerOption._DATA_SELECTED] = true;
        }
        return props;
    };
    /**
     * Returns the children of the element.
     * Overrides parent implementation to return props.value.Label as a single child.
     */
    InnerOption.prototype.getElementChildren = function () {
        return (this.props.value) ? this.props.value.Label || "" : "";
    };
    /**
     * Attribute name for selected option.
     */
    InnerOption._DATA_SELECTED = "data-selected";
    return InnerOption;
}(ComponentBase_1.ComponentBase));
exports.InnerOption = InnerOption;
var Option = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerOption);
exports.Option = Option;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],35:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
var CustomControlUtilityPointers_1 = require("../../../CustomControls/Models/CustomControlUtilityPointers");
var ComponentBase_1 = require("../ComponentBase");
var Option_1 = require("./Option");
var GuidHelper_1 = require("../../../CustomControls/Utilities/GuidHelper");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
var AccessibilityRole = require("../../Supplementary/Accessibility/Attributes/Role");
var AttributeName = require("../../Supplementary/Accessibility/Attributes/AttributeName");
/**
 * Class that implements dropdown component based on the select/option elements.
 */
var InnerSelect = (function (_super) {
    __extends(InnerSelect, _super);
    /**
     * Component's constructor.
     * @param props {ISelectProps} Props for the component.
     * @param context {{}} Additional context for initialization.
     */
    function InnerSelect(props, context) {
        _super.call(this, props, context);
        //
        this._uuid = GuidHelper_1.guidV4String();
        this.state = {
            value: props.value,
        };
        // Set the initial selection
        this.props.onChange(props.value);
    }
    /**
     * Invoked when the component receiving new props
     * @param nextProps
     */
    InnerSelect.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps && !InnerSelect._optionsEqual(this.state.value, nextProps.value, this._isMultiple())) {
            // resetting the value via props has a priority over the component's state
            this.setState({ value: nextProps.value });
        }
    };
    /**
     * Returns the unique ID.
     * @param sourceId {string} Initial ID string to be used for ID creation.
     * Defaults to the id given in props by the consumen.
     * @param supplement {string} Additional part to the ID that should make it unique.
     * Defaults to the uuid generated in constructor of the component.
     * @return {string} ID created using given sourceId and a supplement.
     * @private
     */
    InnerSelect.prototype._uniqueId = function (sourceId, supplement) {
        if (sourceId === void 0) { sourceId = this.props.id; }
        if (supplement === void 0) { supplement = this._uuid; }
        return sourceId + "_" + supplement;
    };
    /**
     * Returns true if multiple attribute is set.
     * @return {boolean} True if multiple attribute is set.
     * @private
     */
    InnerSelect.prototype._isMultiple = function () {
        return !!this.props.multiple;
    };
    /**
     * Creates option id that should be unique for given select component.
     * @param option {IOptionSetValue} OptionSetValue descriptor object.
     * @return {string} Option ID created for given OptionSetValue descriptor.
     * @private
     */
    InnerSelect.prototype._optionId = function (option) {
        return "" + this._uniqueId() + option.Value;
    };
    /**
     * Checks if options given in parameters can be considered the same.
     * @param currentValue {IOptionSetValue} Descriptor for the first option of the comparison.
     * @param nextValue {IOptionSetValue} Descriptor for the second option of the comparison.
     * @param isMultiple {boolean} true if select has multiple attribute
     * @return {boolean} `true` if options given in parameters can be considered equal, `false` - otherwise.
     * @private
     */
    InnerSelect._optionsEqual = function (currentValue, nextValue, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        if (!currentValue || !nextValue) {
            return false;
        }
        if (CustomControlUtilityPointers_1.IsNullOrUndefined(currentValue.Value) && CustomControlUtilityPointers_1.IsNullOrUndefined(nextValue.Value)) {
            // Decide by labels.
            return (currentValue.Label === nextValue.Label);
        }
        // Decide by values.
        if (isMultiple) {
            var oneArray = currentValue;
            var twoArray_1 = nextValue;
            return (oneArray.length === twoArray_1.length) && oneArray.every(function (element, index) {
                return element === twoArray_1[index];
            });
        }
        else {
            return (currentValue.Value === nextValue.Value);
        }
    };
    /**
     * Function searches for the option with given value.
     * @param val {number|string} Value to search options array for.
     * @return {IOptionSetValue} OptionSetValue descriptor of the option with given value.
     * @private
     */
    InnerSelect.prototype._optionForValue = function (val) {
        var candidates = this.props.options.filter(function (item) { return item.Value === val; });
        if (candidates && candidates.length) {
            return candidates[0];
        }
        return null;
    };
    /**
     * Bound handler for the `change` event.
     * @param event {Event} Change event wrapper object.
     * @private
     */
    InnerSelect.prototype._onChangeHandler = function (event) {
        var options = Array.from(event.target.options).filter(function (option) {
            return option.selected;
        });
        var values = [];
        var _loop_1 = function(i) {
            var value = options[i].value;
            if (!CustomControlUtilityPointers_1.IsNullOrUndefined(value)) {
                var candidates = this_1.props.options.filter(function (item) { return (!CustomControlUtilityPointers_1.IsNullOrUndefined(item.Value) ? item.Value.toString() : "") === value; });
                if (candidates && candidates.length) {
                    values.push(candidates[0]);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
        if (values.length > 0) {
            var value = this._isMultiple() ? { value: values } : { value: values[0] };
            this.setState(value);
            if (this.props.onChange) {
                this.props.onChange(value.value);
            }
        }
    };
    /**
     * Getter for the actual underlying element.
     * @return {string} Actual HTML element name.
     */
    InnerSelect.prototype.getElementName = function () {
        return "select";
    };
    /**
     * Converts ISelectProps to React.HTMLAttributes.
     * @return {React.HTMLAttributes} Attributes of the select component.
     */
    InnerSelect.prototype.getElementProps = function () {
        var props = (_a = {
                value: this.props.multiple ?
                    ((this.state.value) ? this.state.value.map(function (x) { return x.Value.toString(); }) : ["-1"]) :
                    ((this.state.value) ? this.state.value.Value.toString() : "-1"),
                onChange: this._onChangeHandler,
                role: AccessibilityRole.COMBOBOX
            },
            _a[AttributeName.ARIA_READONLY] = this.props.readOnly !== false,
            _a.describedByElementId = this.props.describedByElementId ? null : this.props.describedByElementId,
            _a
        );
        if (this.props.disabled) {
            props.disabled = true;
        }
        if (this.props.multiple) {
            props.multiple = true;
        }
        return props;
        var _a;
    };
    /**
     * Composes and returns proper children for the select component.
     * It is supposed that Select component will never have other children than its options.
     * @return {any} Properly composed children for the component.
     */
    InnerSelect.prototype.getElementChildren = function () {
        var _this = this;
        if (!this.props.options || !this.props.options.length) {
            return _super.prototype.getElementChildren.call(this); // OR just return `null` here?
        }
        return this.props.options.map(function (option) {
            var id = _this._optionId(option);
            var selected = false;
            if (_this.props.multiple) {
                for (var i = 0; i < _this.props.value.length; i++) {
                    if (_this.props.value[i] === option) {
                        selected = true;
                        break;
                    }
                }
            }
            else {
                selected = _this.props.value === option;
            }
            return (React.createElement(Option_1.Option, {id: id, key: id, value: option, selected: selected, style: _this.props.style.optionStyle}));
        });
    };
    __decorate([
        Autobind_1.default
    ], InnerSelect.prototype, "_onChangeHandler", null);
    return InnerSelect;
}(ComponentBase_1.ComponentBase));
exports.InnerSelect = InnerSelect;
function selectRuleGen(props) {
    var ownCSS = props;
    if (props && props.style) {
        Object.assign(props.style, props.style.selectStyle, FelaConnectHelper_1.ruleGen(props));
    }
    if (props.style.selectStyle.appearance != null) {
        ownCSS.style.selectStyle.appearance = props.style.selectStyle.appearance;
        ownCSS.style.selectStyle.WebkitAppearance = props.style.selectStyle.appearance;
        ownCSS.style.selectStyle.MozAppearance = props.style.selectStyle.appearance;
        ownCSS.style.selectStyle.MsAppearance = props.style.selectStyle.appearance;
    }
    return props.style.selectStyle;
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(selectRuleGen, props); }; };
var Select = ReactFela.connect(mapStylesToProps)(InnerSelect);
exports.Select = Select;

},{"../../../CustomControls/Models/CustomControlUtilityPointers":56,"../../../CustomControls/Utilities/GuidHelper":73,"../../Supplementary/Accessibility/Attributes/AttributeName":49,"../../Supplementary/Accessibility/Attributes/Role":50,"../../Supplementary/Decorators/Autobind":52,"../ComponentBase":11,"../FelaConnectHelper":13,"./Option":34,"react":undefined,"react-fela":undefined}],36:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/

var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var Label_1 = require("./Label");
var ComponentBase_1 = require("./ComponentBase");
var Select_1 = require("./Select/Select");
var Checkbox_1 = require("./Checkbox");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");
var View_1 = require("./View");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Component representing a Switch base control
 */
var InnerSwitch = (function (_super) {
    __extends(InnerSwitch, _super);
    function InnerSwitch(props, context) {
        _super.call(this, props, context);
        this.state = {
            checked: this.props.value || false,
        };
    }
    /**
     * Invoked when the component receiving new props
     * @param nextProps
     */
    InnerSwitch.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value !== null &&
            nextProps.value !== undefined &&
            nextProps.value !== this.state.checked) {
            this.setState({ checked: nextProps.value });
        }
    };
    /**
     * Handler for onChange event on checkbox
     */
    InnerSwitch.prototype._onCheckboxChange = function (checkboxValue) {
        if (this.state.checked !== checkboxValue) {
            this.setState({ checked: checkboxValue });
            if (this.props.onValueChange) {
                this.props.onValueChange(checkboxValue);
            }
        }
        if (this.props.onOptionSetValueChange) {
            if (this.props.options) {
                var currentValue = this.props.options[Number(checkboxValue)];
                this.props.onOptionSetValueChange(currentValue);
            }
        }
    };
    /**
     * Handler for onChange event on optionSet like controls
     * @param option
     */
    InnerSwitch.prototype._optionSetChange = function (option) {
        if (option) {
            if (this.props.onOptionSetValueChange) {
                this.props.onOptionSetValueChange(option);
            }
        }
    };
    /**
     * OnClick handler for toggle control
     * @param event
     * @private
     */
    InnerSwitch.prototype._onClick = function (event) {
        if (this.props.onOptionSetValueChange) {
            if (this.props.options) {
                var currentValue = this.props.options[Number(!this.props.value)];
                this.props.onOptionSetValueChange(currentValue);
            }
        }
    };
    /**
     * Returns the specific element props.
     */
    InnerSwitch.prototype.getCheckboxComponent = function () {
        var props = (_a = {
                disabled: this.props.disabled,
                id: this.props.id || null,
                key: this.props.id || null,
                onChange: this._onCheckboxChange,
                name: this.props.name ? this.props.name : null
            },
            _a[AttributeName.ARIA_CHECKED] = this.props.displayAs ? this.props.value : this.state.checked,
            _a.describedByElementId = this.props.describedByElementId ? null : this.props.describedByElementId,
            _a.style = this.props.style,
            _a.checked = this.props.displayAs ? this.props.value : this.state.checked,
            _a
        );
        return (React.createElement(Checkbox_1.Checkbox, __assign({}, props)));
        var _a;
    };
    /**
     * Returns select element for switch primitive
     * @returns {any}
     */
    InnerSwitch.prototype.getSelectComponent = function () {
        var currentValue = this.props.options[Number(this.props.value)];
        var props = {
            style: this.props.style || {},
            options: this.props.options,
            value: currentValue,
            onChange: this._optionSetChange,
            disabled: this.props.disabled,
            key: this.props.absoluteId,
            name: this.props.id,
            onFocus: this.props.disabled ? null : this.props.onFocus,
            onBlur: this.props.disabled ? null : this.props.onBlur,
            describedByElementId: this.props.describedByElementId ? null : this.props.describedByElementId,
        };
        return React.createElement(Select_1.Select, __assign({}, props));
    };
    /**
     * Returns label element for switch primitive
     * @returns {any}
     */
    InnerSwitch.prototype.getLabelComponent = function () {
        var props = {};
        var label = this.props.displayValue;
        if (this.props.displayAs === InnerSwitch._CHECKBOX_DISPLAY_TAG) {
            props.forElementId = this.props.id || null;
            label = this.props.defaultValue;
        }
        else {
            props.onClick = this._onClick;
        }
        if (this.props.displayValue) {
            return (React.createElement(Label_1.Label, __assign({}, props), label));
        }
        return null;
    };
    InnerSwitch.prototype.render = function () {
        if (!this.props.options && this.props.displayAs) {
            return (React.createElement(Label_1.Label, null));
        }
        if (this.props.displayAs === InnerSwitch._SELECT_DISPLAY_TAG) {
            return this.getSelectComponent();
        }
        if (this.props.displayAs === InnerSwitch._RADIO_DISPLAY_TAG) {
            return this.getLabelComponent();
        }
        return (React.createElement(View_1.View, null, this.getCheckboxComponent(), this.getLabelComponent()));
    };
    /**
     * Display name for React dev tools
     */
    InnerSwitch.displayName = "Switch";
    InnerSwitch._CHECKBOX_DISPLAY_TAG = "checkbox";
    InnerSwitch._SELECT_DISPLAY_TAG = "picklist";
    InnerSwitch._RADIO_DISPLAY_TAG = "radio";
    __decorate([
        Autobind_1.default
    ], InnerSwitch.prototype, "_onCheckboxChange", null);
    __decorate([
        Autobind_1.default
    ], InnerSwitch.prototype, "_optionSetChange", null);
    __decorate([
        Autobind_1.default
    ], InnerSwitch.prototype, "_onClick", null);
    return InnerSwitch;
}(ComponentBase_1.ComponentBase));
exports.InnerSwitch = InnerSwitch;
var Switch = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerSwitch);
exports.Switch = Switch;

},{"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Decorators/Autobind":52,"./Checkbox":9,"./ComponentBase":11,"./FelaConnectHelper":13,"./Label":24,"./Select/Select":35,"./View":47,"react":undefined,"react-fela":undefined}],37:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * Table component
 */
var InnerTable = (function (_super) {
    __extends(InnerTable, _super);
    function InnerTable() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTable.prototype.getElementName = function () {
        return "table";
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTable.displayName = "Table";
    return InnerTable;
}(ComponentBase_1.ComponentBase));
exports.InnerTable = InnerTable;
var Table = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTable);
exports.Table = Table;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],38:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableBody component
 */
var InnerTableBody = (function (_super) {
    __extends(InnerTableBody, _super);
    function InnerTableBody() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableBody.prototype.getElementName = function () {
        return "tbody";
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableBody.displayName = "TableBody";
    return InnerTableBody;
}(ComponentBase_1.ComponentBase));
exports.InnerTableBody = InnerTableBody;
var TableBody = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableBody);
exports.TableBody = TableBody;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],39:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableCaption component
 */
var InnerTableCaption = (function (_super) {
    __extends(InnerTableCaption, _super);
    function InnerTableCaption() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableCaption.prototype.getElementName = function () {
        return "caption";
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableCaption.displayName = "TableCaption";
    return InnerTableCaption;
}(ComponentBase_1.ComponentBase));
exports.InnerTableCaption = InnerTableCaption;
var TableCaption = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableCaption);
exports.TableCaption = TableCaption;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],40:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableCell component
 */
var InnerTableCell = (function (_super) {
    __extends(InnerTableCell, _super);
    function InnerTableCell() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableCell.prototype.getElementName = function () {
        return "td";
    };
    /**
     * Returns the specific element props.
     */
    InnerTableCell.prototype.getElementProps = function () {
        var props = {};
        if (this.props.colSpan)
            props.colSpan = this.props.colSpan;
        if (this.props.rowSpan)
            props.rowSpan = this.props.rowSpan;
        if (this.props.scope)
            props.scope = this.props.scope;
        return props;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableCell.displayName = "TableCell";
    return InnerTableCell;
}(ComponentBase_1.ComponentBase));
exports.InnerTableCell = InnerTableCell;
var TableCell = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableCell);
exports.TableCell = TableCell;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],41:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableFooter component
 */
var InnerTableFooter = (function (_super) {
    __extends(InnerTableFooter, _super);
    function InnerTableFooter() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableFooter.prototype.getElementName = function () {
        return "tfoot";
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableFooter.displayName = "TableFooter";
    return InnerTableFooter;
}(ComponentBase_1.ComponentBase));
exports.InnerTableFooter = InnerTableFooter;
var TableFooter = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableFooter);
exports.TableFooter = TableFooter;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],42:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableHeader component
 */
var InnerTableHeader = (function (_super) {
    __extends(InnerTableHeader, _super);
    function InnerTableHeader() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableHeader.prototype.getElementName = function () {
        return "thead";
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableHeader.displayName = "TableHeader";
    return InnerTableHeader;
}(ComponentBase_1.ComponentBase));
exports.InnerTableHeader = InnerTableHeader;
var TableHeader = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableHeader);
exports.TableHeader = TableHeader;

},{"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],43:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableHeaderCell component
 */
var InnerTableHeaderCell = (function (_super) {
    __extends(InnerTableHeaderCell, _super);
    function InnerTableHeaderCell() {
        _super.apply(this, arguments);
    }
    /**
     * Handler for onClick event
     */
    InnerTableHeaderCell.prototype._onClickWrapper = function (event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableHeaderCell.prototype.getElementName = function () {
        return "th";
    };
    /**
     * Returns the specific element props.
     * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
     */
    InnerTableHeaderCell.prototype.getElementProps = function () {
        var returnElementProps = Object.assign({}, this.props, {
            children: null,
            onClick: this._onClickWrapper,
        });
        if (this.props.rowSpan)
            returnElementProps.rowSpan = this.props.rowSpan;
        if (this.props.colSpan)
            returnElementProps.colSpan = this.props.colSpan;
        if (this.props.scope)
            returnElementProps.scope = this.props.scope;
        return returnElementProps;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableHeaderCell.displayName = "TableHeaderCell";
    __decorate([
        Autobind_1.default
    ], InnerTableHeaderCell.prototype, "_onClickWrapper", null);
    return InnerTableHeaderCell;
}(ComponentBase_1.ComponentBase));
exports.InnerTableHeaderCell = InnerTableHeaderCell;
var TableHeaderCell = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableHeaderCell);
exports.TableHeaderCell = TableHeaderCell;

},{"../../Supplementary/Decorators/Autobind":52,"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],44:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Autobind_1 = require("../../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("../ComponentBase");

var FelaConnectHelper_1 = require("../FelaConnectHelper");
/**
 * TableRow component
 */
var InnerTableRow = (function (_super) {
    __extends(InnerTableRow, _super);
    function InnerTableRow() {
        _super.apply(this, arguments);
    }
    /**
     * Handler for onClick event
     */
    InnerTableRow.prototype._onClickWrapper = function (event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTableRow.prototype.getElementName = function () {
        return "tr";
    };
    /**
     * Returns the specific element props.
     * Note, some of the props still get assigned automatically, like "id", "style", "className", "children" etc.
     */
    InnerTableRow.prototype.getElementProps = function () {
        var returnElementProps = Object.assign({}, this.props, {
            children: null,
            onClick: this._onClickWrapper,
        });
        return returnElementProps;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerTableRow.displayName = "TableRow";
    __decorate([
        Autobind_1.default
    ], InnerTableRow.prototype, "_onClickWrapper", null);
    return InnerTableRow;
}(ComponentBase_1.ComponentBase));
exports.InnerTableRow = InnerTableRow;
var TableRow = ReactFela.connect(FelaConnectHelper_1.mapStylesToProps)(InnerTableRow);
exports.TableRow = TableRow;

},{"../../Supplementary/Decorators/Autobind":52,"../ComponentBase":11,"../FelaConnectHelper":13,"react-fela":undefined}],45:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");
var AccessibilityRole = require("../Supplementary/Accessibility/Attributes/Role");
var AriaLive = require("../Supplementary/Accessibility/Attributes/AriaLive");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Function to transform React Native fontWeight style property into React CSS fontWeight property
 * React Native uses certain number of strings as the fontWeight allowed values.
 * React CSS takes strings (like "normal", "bold", etc.) or number (for all values except strings, like 100, 200, etc.)
 * @param fontWeight cannot be undefined or null.
 */
function transformFontWeight(fontWeight) {
    switch (fontWeight) {
        case "normal":
            return "normal";
        case "bold":
            return "bold";
        default:
            return Number(fontWeight);
    }
}
/**
 * Text component
 */
var InnerText = (function (_super) {
    __extends(InnerText, _super);
    function InnerText() {
        _super.apply(this, arguments);
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerText.prototype.getElementName = function () {
        return this.props.semanticTag || "span";
    };
    /**
 * Returns the class name for the underlying element.
 * @param style the style to be applied to the underlying component, used for readout here.
 */
    InnerText.prototype.getElementClassName = function () {
        var className = (this.props.styles) ? this.props.styles : "";
        return (this.props.className) ? className + " " + this.props.className : className;
    };
    /**
     * Returns the specific element props.
     */
    InnerText.prototype.getElementProps = function () {
        var options = {};
        switch (this.props.role) {
            case AccessibilityRole.ALERT:
                options[AttributeName.ARIA_LIVE] = this.props.notificationType || AriaLive.POLITE;
                break;
        }
        return options;
    };
    /**
     * Component name for React Dev Tools
     */
    InnerText.displayName = "Text";
    return InnerText;
}(ComponentBase_1.ComponentBase));
exports.InnerText = InnerText;
function fontWeightRuleGen(props) {
    if (props && props.style) {
        if (props.style.fontWeight) {
            return Object.assign({}, { fontWeight: transformFontWeight(props.style.fontWeight) }, FelaConnectHelper_1.ruleGen(props));
        }
        return Object.assign(props.style, FelaConnectHelper_1.ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(fontWeightRuleGen, props); }; };
var Text = ReactFela.connect(mapStylesToProps)(InnerText);
exports.Text = Text;

},{"../Supplementary/Accessibility/Attributes/AriaLive":48,"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Accessibility/Attributes/Role":50,"./ComponentBase":11,"./FelaConnectHelper":13,"react-fela":undefined}],46:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var ComponentBase_1 = require("./ComponentBase");
var AttributeName = require("../Supplementary/Accessibility/Attributes/AttributeName");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Enum for keyboardType values.
 * @readonly
 */
var KeyboardType;
(function (KeyboardType) {
    KeyboardType[KeyboardType["default"] = 0] = "default";
    KeyboardType[KeyboardType["emailAddress"] = 1] = "emailAddress";
    KeyboardType[KeyboardType["numeric"] = 2] = "numeric";
    KeyboardType[KeyboardType["phonePad"] = 3] = "phonePad";
    KeyboardType[KeyboardType["asciiCapable"] = 4] = "asciiCapable";
    KeyboardType[KeyboardType["numbersAndPunctuation"] = 5] = "numbersAndPunctuation";
    KeyboardType[KeyboardType["url"] = 6] = "url";
    KeyboardType[KeyboardType["numberPad"] = 7] = "numberPad";
    KeyboardType[KeyboardType["namePhonePad"] = 8] = "namePhonePad";
    KeyboardType[KeyboardType["decimalPad"] = 9] = "decimalPad";
    KeyboardType[KeyboardType["twitter"] = 10] = "twitter";
    KeyboardType[KeyboardType["webSearch"] = 11] = "webSearch";
})(KeyboardType || (KeyboardType = {}));
exports.KeyboardType = KeyboardType;
/**
 * TextInput component
 *
 * @class
 */
var InnerTextInput = (function (_super) {
    __extends(InnerTextInput, _super);
    /**
     * TextInput constructor
     * @param [props] Component props
     * @param [context] Component context
     */
    function InnerTextInput(props, context) {
        _super.call(this, props, context);
        this.state = {
            value: props.value,
        };
    }
    /**
     * Invoked when the component receiving new props
     * @param nextProps
     */
    InnerTextInput.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps && nextProps.value !== this.state.value) {
            // resetting the value via props has a priority over the component's state
            this.setState({ value: nextProps.value });
        }
    };
    InnerTextInput.prototype._selectValue = function () {
        // Note that accordingly to the WHATWG forms spec selectionStart, selectionEnd properties and
        // setSelectionRange method apply only to inputs of types:
        // text, search, URL, tel and password.
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
        if (!this.props.type ||
            this.props.type.toLowerCase() === "text" ||
            this.props.type.toLowerCase() === "search" ||
            this.props.type.toLowerCase() === "url" ||
            this.props.type.toLowerCase() === "tel" ||
            this.props.type.toLowerCase() === "password") {
            var element = (this.props.multiline)
                ? ReactDOM.findDOMNode(this)
                : ReactDOM.findDOMNode(this);
            element.selectionStart = 0;
            element.selectionEnd = element.value.length;
        }
    };
    /**
     * TextInput.onChange & TextInput.onChangeText events handler
     * @param e Synthetic React event
     */
    InnerTextInput.prototype._onChange = function (e) {
        var value = this.props.multiline
            ? e.target.value
            : e.target.value;
        this.setState({ value: value });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        if (this.props.onChangeText) {
            this.props.onChangeText(value);
        }
    };
    /**
     * TextInput.onSubmitEditing event handler
     * @param e Synthetic React event
     */
    InnerTextInput.prototype._onKeyPress = function (e) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(e);
        }
    };
    /**
     * TextInput.onFocus event handler
     * @param e Synthetic React event
     */
    InnerTextInput.prototype._handleFocus = function (e) {
        var _this = this;
        var innerHandleFocus = function () {
            if (_this.props.selectValueOnFocus && _this.state && _this.state.value) {
                _this._selectValue();
            }
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        // Workaround for the bug "Edge fails to auto-select on focus"
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8229660/
        // When the bug is fixed, it can be removed.
        if (window.navigator.userAgent.match(/Edge\/(13|14)/)) {
            return window.setTimeout(innerHandleFocus, 10);
        }
        else {
            innerHandleFocus();
        }
    };
    /**
     * TextInput.onBlur event handler
     * @param e Synthetic React event
     */
    InnerTextInput.prototype._handleBlur = function (e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };
    /**
     * Handles the onPointerDown event.
     */
    InnerTextInput.prototype._handlePointerDown = function (e) {
        if (this.props.onPointerDown) {
            this.props.onPointerDown(e);
        }
    };
    /**
     * Handles the onPointerUp event.
     */
    InnerTextInput.prototype._handlePointerUp = function (e) {
        if (this.props.onPointerUp) {
            this.props.onPointerUp(e);
        }
    };
    /**
     * Handles the keydown event.
     */
    InnerTextInput.prototype._handleKeyDown = function (e) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    };
    /**
     * Handles the keyup event.
     */
    InnerTextInput.prototype._handleKeyUp = function (e) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    };
    /**
     * Returns the specific name of the underlying element.
     */
    InnerTextInput.prototype.getElementName = function () {
        return this.props.multiline
            ? "textarea"
            : "input";
    };
    /**
     * Returns the specific element props.
     */
    InnerTextInput.prototype.getElementProps = function () {
        var props = (_a = {
                value: this.state.value || "",
                onChange: this._onChange,
                placeholder: this.props.placeholder,
                maxLength: this.props.maxLength,
                onKeyPress: this._onKeyPress,
                autoComplete: "off"
            },
            _a[AttributeName.ARIA_READONLY] = this.props.readOnly === true,
            _a[AttributeName.ARIA_MULTILINE] = this.props.multiline === true,
            _a[AttributeName.ARIA_AUTO_COMPLETE] = this.props.autoComplete,
            _a
        );
        if (this.props.readOnly) {
            props.readOnly = true;
        }
        if (this.props.disabled) {
            props.disabled = true;
        }
        if (!this.props.multiline) {
            // For input element
            // If there is no type given in props
            // try to deduct the default one.
            if (!this.props.type) {
                switch (this.props.keyboardType) {
                    case KeyboardType.numeric:
                        props.type = "number";
                        break;
                    case KeyboardType.emailAddress:
                        props.type = "email";
                        break;
                    default:
                        props.type = "text";
                        break;
                }
            }
            else {
                // If there is a type given in props
                // use it.
                props.type = this.props.type;
            }
        }
        else {
            if (this.props.rows) {
                props.rows = Math.max(this.props.rows, InnerTextInput._MIN_TEXTAREA_ROWS);
            }
        }
        return props;
        var _a;
    };
    /**
     * Display name for React dev tools
     */
    InnerTextInput.displayName = "TextInput";
    /**
     * Minimum number of rows that should be displayed by the textarea.
     */
    InnerTextInput._MIN_TEXTAREA_ROWS = 2;
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_onChange", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_onKeyPress", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handleFocus", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handleBlur", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handlePointerDown", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handlePointerUp", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handleKeyDown", null);
    __decorate([
        Autobind_1.default
    ], InnerTextInput.prototype, "_handleKeyUp", null);
    return InnerTextInput;
}(ComponentBase_1.ComponentBase));
exports.InnerTextInput = InnerTextInput;
function textInputRuleGen(props) {
    var customStyles = {};
    if (props && props.style) {
        if (props.isRTL) {
            Object.assign(customStyles, {
                direction: "rtl",
                unicodeBidi: "bidi-override",
            });
        }
        return Object.assign(props.style, customStyles, FelaConnectHelper_1.ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(textInputRuleGen, props); }; };
var TextInput = ReactFela.connect(mapStylesToProps)(InnerTextInput);
exports.TextInput = TextInput;

},{"../Supplementary/Accessibility/Attributes/AttributeName":49,"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"react-dom":undefined,"react-fela":undefined}],47:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Autobind_1 = require("../Supplementary/Decorators/Autobind");
var IFlexboxContainerStyle_1 = require("./IFlexboxContainerStyle");
var ComponentBase_1 = require("./ComponentBase");
var MeasuringHandler_1 = require("../Common/MeasuringHandler/MeasuringHandler");

var FelaConnectHelper_1 = require("./FelaConnectHelper");
/**
 * Abstract View container that gets its semantic meaning by supplying a meaningful
 * role and semanticTag property value.
 */
var InnerView = (function (_super) {
    __extends(InnerView, _super);
    function InnerView() {
        _super.apply(this, arguments);
        /**
         * The dangerous identifier for the List
         */
        this._dangerousIdentifier = null;
        /**
         * Subscriber object to store callback functions for re-measuring service need
         */
        this._subscriber = null;
        /**
         * Ref of the mounted element
         */
        this._mountedElement = null;
    }
    /**
     * Returns the specific name of the underlying element.
     */
    InnerView.prototype.getElementName = function () {
        return this.props.semanticTag || "div";
    };
    /**
     * Returns the class name for the underlying element.
     * @param style the style to be applied to the underlying component, used for readout here.
     */
    InnerView.prototype.getFlexClassName = function (style) {
        return IFlexboxContainerStyle_1.getCssClassName(style ? style.display : null);
    };
    /**
     * Get the reference of react component instance
     */
    InnerView.prototype.getRefCallback = function () {
        return {
            ref: this._getReference,
        };
    };
    /**
     * When container wants to re-measure
     * After component mounted, we subscribe to the measuring service by passing in getComponent and onMeasure callbacks.
     */
    InnerView.prototype.componentDidMount = function () {
        if (this.props.isRequestedMeasuring) {
            this._subscriber = {
                forceMeasure: this.props.forceMeasure,
                getComponent: this.getComponent,
                onMeasure: this.props.onMeasuring,
            };
            MeasuringHandler_1.MeasuringHandler.getInstance().addMeasuringSubscribers(this._subscriber);
        }
    };
    /**
     * When component did update, we need to get the latest instance of the react component
     * This is specially handling cell/cch when it renders out an empty container while waiting for the data
     */
    InnerView.prototype.componentDidUpdate = function () {
        if (this.props.isRequestedMeasuring) {
            this._mountedElement = ReactDOM.findDOMNode(this);
        }
    };
    /**
     * Register the ref callback when container has the need to re-measure when dom changes
     */
    InnerView.prototype._getReference = function (viewRef) {
        if (viewRef && this.props.isRequestedMeasuring) {
            this._mountedElement = ReactDOM.findDOMNode(viewRef);
        }
    };
    /**
     * Return the reference of the react component instance
     */
    InnerView.prototype.getComponent = function () {
        return this._mountedElement;
    };
    /**
     * Unsubscribe the measuring service when component is unmounted
     */
    InnerView.prototype.componentWillUnmount = function () {
        if (this.props.isRequestedMeasuring) {
            MeasuringHandler_1.MeasuringHandler.getInstance().removeMeasuringSubscribers(this._subscriber);
        }
    };
    /**
     * Returns the specific style for the underlying element.
     */
    InnerView.prototype.getElementStyle = function () {
        if (this.props.style) {
            return Object.assign({}, IFlexboxContainerStyle_1.applyIFlexboxContainerProp(this.props.style));
        }
    };
    /**
     * Returns the specific element props.
     */
    InnerView.prototype.getElementProps = function () {
        var props = {
            id: this.props.id,
            accessKey: this.props.accessKey === "" ? null : this.props.accessKey,
        };
        if (typeof this.props.isRTL === "boolean") {
            props.dir = this.props.isRTL ? "rtl" : "ltr";
        }
        if (this.props.isRequestedMeasuring) {
            Object.assign(props, this.getRefCallback());
        }
        return props;
    };
    /**
     * Renders the component to the virtual DOM.
     */
    InnerView.prototype.render = function () {
        return React.createElement(this.getElementName(), this._getElementPropsInternal(), this.getElementChildren());
    };
    /**
     * Display name for React dev tools
     */
    InnerView.displayName = "View";
    __decorate([
        Autobind_1.default
    ], InnerView.prototype, "getRefCallback", null);
    __decorate([
        Autobind_1.default
    ], InnerView.prototype, "_getReference", null);
    __decorate([
        Autobind_1.default
    ], InnerView.prototype, "getComponent", null);
    return InnerView;
}(ComponentBase_1.ComponentBase));
exports.InnerView = InnerView;
function viewRuleGen(props) {
    if (props && props.style) {
        // apply momentum-based scrolling for scrollable containers
        if (InnerView.isElementScrollable(props.style)) {
            return Object.assign({}, { "-webkit-overflow-scrolling": "touch" }, FelaConnectHelper_1.ruleGen(props));
        }
        return Object.assign(props.style, FelaConnectHelper_1.ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(viewRuleGen, props); }; };
var View = ReactFela.connect(mapStylesToProps)(InnerView);
exports.View = View;

},{"../Common/MeasuringHandler/MeasuringHandler":2,"../Supplementary/Decorators/Autobind":52,"./ComponentBase":11,"./FelaConnectHelper":13,"./IFlexboxContainerStyle":21,"react":undefined,"react-dom":undefined,"react-fela":undefined}],48:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
exports.OFF = "off";
exports.POLITE = "polite";
exports.ASSERTIVE = "assertive";

},{}],49:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
exports.ROLE = "role";
exports.TITLE = "title";
exports.FOR = "for";
exports.ALT = "alt";
exports.ACCESS_KEY = "accessKey";
exports.DIR = "dir";
exports.TAB_INDEX = "tabindex";
exports.HIDDEN = "hidden";
exports.DISABLED = "disabled";
exports.REQUIRED = "required";
exports.ARIA_ACTIVE_DESCENDANT = "aria-activedescendant";
exports.ARIA_ATOMIC = "aria-atomic";
exports.ARIA_AUTO_COMPLETE = "aria-autocomplete";
exports.ARIA_BUSY = "aria-busy";
exports.ARIA_CONTROLS = "aria-controls";
exports.ARIA_CHECKED = "aria-checked";
exports.ARIA_DESCRIBED_BY = "aria-describedby";
exports.ARIA_DISABLED = "aria-disabled";
exports.ARIA_DROP_EFFECT = "aria-dropeffect";
exports.ARIA_EXPANDED = "aria-expanded";
exports.ARIA_FLOW_TO = "aria-flowto";
exports.ARIA_GRABBED = "aria-grabbed";
exports.ARIA_HAS_POPUP = "aria-haspopup";
exports.ARIA_HIDDEN = "aria-hidden";
exports.ARIA_INVALID = "aria-invalid";
exports.ARIA_LABEL = "aria-label";
exports.ARIA_LABELLED_BY = "aria-labelledby";
exports.ARIA_LEVEL = "aria-level";
exports.ARIA_LIVE = "aria-live";
exports.ARIA_MULTILINE = "aria-multiline";
exports.ARIA_MULTISELECTABLE = "aria-multiselectable";
exports.ARIA_OWNS = "aria-owns";
exports.ARIA_POS_IN_SET = "aria-posinset";
exports.ARIA_PRESSED = "aria-pressed";
exports.ARIA_RELEVANT = "aria-relevant";
exports.ARIA_READONLY = "aria-readonly";
exports.ARIA_REQUIRED = "aria-required";
exports.ARIA_SELECTED = "aria-selected";
exports.ARIA_SET_SIZE = "aria-setsize";
exports.ARIA_SORT = "aria-sort";
exports.ARIA_CURRENT = "aria-current";
exports.ARIA_VALUE_MAX = "aria-valuemax";
exports.ARIA_VALUE_MIN = "aria-valuemin";
exports.ARIA_VALUE_NOW = "aria-valuenow";
exports.ARIA_VALUE_TEXT = "aria-valuetext";

},{}],50:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
exports.ALERT = "alert";
exports.ALERT_DIALOG = "alertdialog";
exports.ARTICLE = "article";
exports.BUTTON = "button";
exports.CHECKBOX = "checkbox";
exports.DIALOG = "dialog";
exports.GRID_CELL = "gridcell";
exports.LINK = "link";
exports.LOG = "log";
exports.MARQUEE = "marquee";
exports.MENU_ITEM = "menuitem";
exports.MENU_ITEM_CHECKBOX = "menuitemcheckbox";
exports.MENU_ITEM_RADIO = "menuitemradio";
exports.OPTION = "option";
exports.PROGRESSBAR = "progressbar";
exports.RADIO = "radio";
exports.SCROLLBAR = "scrollbar";
exports.SLIDER = "slider";
exports.SPIN_BUTTON = "spinbutton";
exports.STATUS = "status";
exports.TAB = "tab";
exports.TAB_LIST = "tablist";
exports.TAB_PANEL = "tabpanel";
exports.TEXTBOX = "textbox";
exports.TIMER = "timer";
exports.TOOLTIP = "tooltip";
exports.TREE_ITEM = "treeitem";
exports.COMBOBOX = "combobox";
exports.GRID = "grid";
exports.LISTBOX = "listbox";
exports.MENU = "menu";
exports.MENUBAR = "menubar";
exports.RADIO_GROUP = "radiogroup";
exports.TREE = "tree";
exports.TREE_GRID = "treegrid";
exports.COLUMN_HEADER = "columnheader";
exports.DEFINITION = "definition";
exports.DIRECTORY = "directory";
exports.DOCUMENT = "document";
exports.GROUP = "group";
exports.HEADING = "heading";
exports.LIST = "list";
exports.LIST_ITEM = "listitem";
exports.MATH = "math";
exports.NOTE = "note";
exports.PRESENTATION = "presentation";
exports.REGION = "region";
exports.ROW = "row";
exports.ROW_HEADER = "rowheader";
exports.SEPARATOR = "separator";
exports.TOOLBAR = "toolbar";
exports.APPLICATION = "application";
exports.BANNER = "banner";
exports.COMPLEMENTARY = "complementary";
exports.CONTENT_INFO = "contentinfo";
exports.FORM = "form";
exports.MAIN = "main";
exports.NAVIGATION = "navigation";
exports.SEARCH = "search";
exports.IMG = "img";

},{}],51:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Enum to list out all keycodes for html
 */
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Shift"] = 16] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 18] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
    KeyCode[KeyCode["Capslock"] = 20] = "Capslock";
    KeyCode[KeyCode["Escape"] = 27] = "Escape";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
    KeyCode[KeyCode["End"] = 35] = "End";
    KeyCode[KeyCode["Home"] = 36] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 37] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 38] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 39] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 40] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 45] = "Insert";
    KeyCode[KeyCode["Delete"] = 46] = "Delete";
    KeyCode[KeyCode["Num0"] = 48] = "Num0";
    KeyCode[KeyCode["Num1"] = 49] = "Num1";
    KeyCode[KeyCode["Num2"] = 50] = "Num2";
    KeyCode[KeyCode["Num3"] = 51] = "Num3";
    KeyCode[KeyCode["Num4"] = 52] = "Num4";
    KeyCode[KeyCode["Num5"] = 53] = "Num5";
    KeyCode[KeyCode["Num6"] = 54] = "Num6";
    KeyCode[KeyCode["Num7"] = 55] = "Num7";
    KeyCode[KeyCode["Num8"] = 56] = "Num8";
    KeyCode[KeyCode["Num9"] = 57] = "Num9";
    KeyCode[KeyCode["A"] = 65] = "A";
    KeyCode[KeyCode["B"] = 66] = "B";
    KeyCode[KeyCode["C"] = 67] = "C";
    KeyCode[KeyCode["D"] = 68] = "D";
    KeyCode[KeyCode["E"] = 69] = "E";
    KeyCode[KeyCode["F"] = 70] = "F";
    KeyCode[KeyCode["G"] = 71] = "G";
    KeyCode[KeyCode["H"] = 72] = "H";
    KeyCode[KeyCode["I"] = 73] = "I";
    KeyCode[KeyCode["J"] = 74] = "J";
    KeyCode[KeyCode["K"] = 75] = "K";
    KeyCode[KeyCode["L"] = 76] = "L";
    KeyCode[KeyCode["M"] = 77] = "M";
    KeyCode[KeyCode["N"] = 78] = "N";
    KeyCode[KeyCode["O"] = 79] = "O";
    KeyCode[KeyCode["P"] = 80] = "P";
    KeyCode[KeyCode["Q"] = 81] = "Q";
    KeyCode[KeyCode["R"] = 82] = "R";
    KeyCode[KeyCode["S"] = 83] = "S";
    KeyCode[KeyCode["T"] = 84] = "T";
    KeyCode[KeyCode["U"] = 85] = "U";
    KeyCode[KeyCode["V"] = 86] = "V";
    KeyCode[KeyCode["W"] = 87] = "W";
    KeyCode[KeyCode["X"] = 88] = "X";
    KeyCode[KeyCode["Y"] = 89] = "Y";
    KeyCode[KeyCode["Z"] = 90] = "Z";
    KeyCode[KeyCode["LeftWindowKey"] = 91] = "LeftWindowKey";
    KeyCode[KeyCode["RightWindowKey"] = 92] = "RightWindowKey";
    KeyCode[KeyCode["SelectKey"] = 93] = "SelectKey";
    KeyCode[KeyCode["NumPad0"] = 96] = "NumPad0";
    KeyCode[KeyCode["NumPad1"] = 97] = "NumPad1";
    KeyCode[KeyCode["NumPad2"] = 98] = "NumPad2";
    KeyCode[KeyCode["NumPad3"] = 99] = "NumPad3";
    KeyCode[KeyCode["NumPad4"] = 100] = "NumPad4";
    KeyCode[KeyCode["NumPad5"] = 101] = "NumPad5";
    KeyCode[KeyCode["NumPad6"] = 102] = "NumPad6";
    KeyCode[KeyCode["NumPad7"] = 103] = "NumPad7";
    KeyCode[KeyCode["NumPad8"] = 104] = "NumPad8";
    KeyCode[KeyCode["NumPad9"] = 105] = "NumPad9";
    KeyCode[KeyCode["Multiply"] = 106] = "Multiply";
    KeyCode[KeyCode["Add"] = 107] = "Add";
    KeyCode[KeyCode["Subtract"] = 109] = "Subtract";
    KeyCode[KeyCode["DecimalPoint"] = 110] = "DecimalPoint";
    KeyCode[KeyCode["Divide"] = 111] = "Divide";
    KeyCode[KeyCode["F1"] = 112] = "F1";
    KeyCode[KeyCode["F2"] = 113] = "F2";
    KeyCode[KeyCode["F3"] = 114] = "F3";
    KeyCode[KeyCode["F4"] = 115] = "F4";
    KeyCode[KeyCode["F5"] = 116] = "F5";
    KeyCode[KeyCode["F6"] = 117] = "F6";
    KeyCode[KeyCode["F7"] = 118] = "F7";
    KeyCode[KeyCode["F8"] = 119] = "F8";
    KeyCode[KeyCode["F9"] = 120] = "F9";
    KeyCode[KeyCode["F10"] = 121] = "F10";
    KeyCode[KeyCode["F11"] = 122] = "F11";
    KeyCode[KeyCode["F12"] = 123] = "F12";
    KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
    KeyCode[KeyCode["SemiColon"] = 186] = "SemiColon";
    KeyCode[KeyCode["EqualSign"] = 187] = "EqualSign";
    KeyCode[KeyCode["Comma"] = 188] = "Comma";
    KeyCode[KeyCode["Dash"] = 189] = "Dash";
    KeyCode[KeyCode["Period"] = 190] = "Period";
    KeyCode[KeyCode["ForwardSlash"] = 191] = "ForwardSlash";
    KeyCode[KeyCode["GraveAccent"] = 192] = "GraveAccent";
    KeyCode[KeyCode["OpenBracket"] = 219] = "OpenBracket";
    KeyCode[KeyCode["BackSlash"] = 220] = "BackSlash";
    KeyCode[KeyCode["CloseBraket"] = 221] = "CloseBraket";
    KeyCode[KeyCode["SingleQuote"] = 222] = "SingleQuote";
})(KeyCode || (KeyCode = {}));
exports.KeyCode = KeyCode;

},{}],52:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Method decorator that causes the method to always be invoked with `this` referencing the object instance.
 */
function autobind(target, methodName, descriptor) {
    // validate the parameters
    if (!descriptor)
        throw new Error("descriptor must not be null");
    if (typeof descriptor.value !== "function")
        throw new SyntaxError("@autobind must be used on functions");
    // store the actual method implementation
    var methodOriginal = descriptor.value;
    // return a property descriptor that will create a bound method the first time it is invoked
    return {
        configurable: true,
        get: function () {
            if (this === target) {
                // called statically or already defined
                return methodOriginal;
            }
            var methodBound = methodOriginal.bind(this);
            // redefine the method pointing to the bound function.
            // we avoid a call to `bind` on every invocation of the method by redefining it in this manner
            Object.defineProperty(this, methodName, {
                configurable: descriptor.configurable,
                enumerable: descriptor.enumerable,
                writable: descriptor.writable,
                value: methodBound,
            });
            return methodBound;
        },
        set: function (methodNew) {
            // plain assignment of a new method, this way we allow to override the method.
            Object.defineProperty(this, methodName, {
                configurable: descriptor.configurable,
                writable: descriptor.writable,
                enumerable: descriptor.enumerable,
                value: methodNew,
            });
            return methodNew;
        },
    };
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = autobind;

},{}],53:[function(require,module,exports){
"use strict";
var ManifestType_1 = require("../Utilities/ManifestType");
var CCFPerformanceTracker_1 = require("../Utilities/CCFPerformanceTracker");
var COMMANDING_WRAPPER_CREATE_COMMAND_MANAGER = "CommandingWrapper.CreateCommandManager";
/**
 * Commanding Wrapper is a component that manages all commanding manager instances in a page.
 * CommandingWrapper MUST be initialized when a command manager is required.
 * Each control can have 0 or 1 instance of CommandingWrapper, each CommandingWrapper is associated with exactly 1 control.
 * CommandingWrapper will keep track of the command managers associate with the control.
 * For every different entity type in the control, a seperate command manager MUST be created with unique command manager Id when needed.
 * Users SHOULD avoid initialize unnecessary command managers at all time, as it is a very expensive operation.
 */
var CommandingWrapper = (function () {
    function CommandingWrapper(ownProps) {
        //DeferredPromise, created using action from uclient, resolved when request command manager is fully initialized
        this._commandManagerPromises = {};
        //CommandComponenetWrapper
        this._commandManagerInstances = {};
        //Reference to the dataset object wrappers in the current control
        //A custom control may contain multiple datasets, each should have different entity Type name.
        //If this is empty, then command bar of the control is not associate with any dataset
        this._datasetWrappers = {};
        this._ownProps = ownProps;
        this._commandManagerId = ownProps.id + ":" + ownProps.controlId;
        this._externalCommandManagerId = ownProps.externalCommandManagerId;
        this._externalCommandManagerPromise = ownProps.externalCommandPromise;
        //Save the reference during initialization
        CommandingWrapper._commandingWrapperMap[this._commandManagerId] = this;
    }
    /**
     * add datasetwrapper
     * @param datasetWrapper
     */
    CommandingWrapper.prototype.addDataSetWrapper = function (datasetWrapper) {
        var viewId = datasetWrapper.getLatestData().getViewId();
        viewId = viewId ? viewId.toLowerCase() : "";
        var id = viewId + ":" + datasetWrapper.getEntityTypeName();
        this._datasetWrappers[id] = datasetWrapper;
    };
    /**
     * @param context
     */
    CommandingWrapper.prototype.setReactContext = function (context) {
        this._reactContext = context;
    };
    /**
     * Use by control to retrieve command for list of records
     * @param commandManagerId unique id identifies the command manager in state tree
     * @param etn entity type name of the records
     * @param records list of Guid of selected records
     * @param commandButtonIds list of unique command button Ids
     * @param filterByPriority optional value indicating if the command buttons need to be ordered by priority.
     * @returns DeferredPromise
     */
    CommandingWrapper.prototype.retrieveRecordCommandForDatasetWrapper = function (allRecords, etn, records, commandButtonIds, filterByPriority) {
        var commandManagerId = this._commandManagerId + ":" + etn;
        var _me = this;
        var contextToken = this._ownProps.contextToken;
        if (this._externalCommandManagerId) {
            if (this._externalCommandInitialized) {
                return this._ownProps.actions.retrieveRecordCommand(allRecords, this._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority);
            }
            else {
                if (this._externalCommandManagerPromise && this._externalCommandManagerPromise.isResolved()) {
                    this._externalCommandInitialized = true;
                    return _me._ownProps.actions.retrieveRecordCommand(allRecords, _me._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority);
                }
                var returnExternalPromise = this._externalCommandManagerPromise.then(function (resolved) {
                    _me._externalCommandInitialized = true;
                    return _me._ownProps.actions.retrieveRecordCommand(allRecords, _me._externalCommandManagerId, contextToken, records, commandButtonIds, filterByPriority);
                }, function (rejected) {
                    throw new Error("Command bar initialization failed");
                });
                return returnExternalPromise;
            }
        }
        else if (this._commandManagerPromises[etn]) {
            return this._commandManagerPromises[etn].then(function (resolved) {
                return _me._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority);
            });
        }
        else if (this._commandManagerInstances[etn]) {
            //Instance has been created and Command Manager initialization has completed, retrieve record command
            return this._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority);
        }
        else {
            //First time initializing command manager
            //Create a Promise. Promise has to be created from an action call because the DeferredPromise definition is only available in Uclient
            //This Promise is then sent to Command Manager Constructor, to track the completion of initialization
            var stop_1 = CCFPerformanceTracker_1.default.createPerformanceEvent(COMMANDING_WRAPPER_CREATE_COMMAND_MANAGER, 3 /* Info */).startStopwatch({
                controlId: this._ownProps.controlId,
                commandManagerId: commandManagerId,
            });
            var promise = _me._ownProps.actions.initializeCommandManager(commandManagerId);
            _me._commandManagerPromises[etn] = promise;
            var props = {};
            props.isHidden = true;
            this.populateCommandManagerProps(props, this._ownProps, etn);
            props.metaDataLoadedPromise = promise;
            var context = {
                id: this._ownProps.controlId,
                context: this._reactContext,
                props: props,
            };
            var instance = this._ownProps.actions.createHiddenCommandManager(context);
            this._commandManagerInstances[etn] = instance;
            //returning a chaining promise, which will ultimately resolve to CommandObject
            if (instance.forceUpdate) {
                instance.forceUpdate();
            }
            var _returnPromiseResolveAction_1;
            var _returnPromiseRejectAction_1;
            var returnPromise = new Promise(function (resolve, reject) {
                _returnPromiseResolveAction_1 = resolve;
                _returnPromiseRejectAction_1 = reject;
            });
            promise.then(function (resolved) {
                stop_1();
                _me._commandManagerPromises[etn] = null;
                _me._ownProps.actions.retrieveRecordCommand(allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority).then(_returnPromiseResolveAction_1, _returnPromiseRejectAction_1);
            });
            return returnPromise;
        }
    };
    /**
     * Use by control to retrieve command for list of records
     * @param commandManagerId unique id identifies the command manager in state tree
     * @param etn entity type name of the records
     * @param records list of Guid of selected records
     * @param commandButtonIds list of unique command button Ids
     * @param filterByPriority optional value, set to true to only return buttons have priority property.
     * @returns DeferredPromise
     */
    CommandingWrapper.prototype.retrieveRecordCommand = function (viewId, etn, records, commandButtonIds, filterByPriority) {
        var datasetWrapper = this._datasetWrappers[((viewId ? viewId.toLowerCase() : "") + ":" + etn)];
        if (!datasetWrapper) {
            //reject if no associated dataset
            return Promise.reject(0);
        }
        var allRecords = datasetWrapper.getLatestData().records;
        return this.retrieveRecordCommandForDatasetWrapper(allRecords, etn, records, commandButtonIds, filterByPriority);
    };
    /**
     * Generate the RibbonId using provided data.
     * @param etn Entity Type Name (account, contact, etc.)
     * @param areaType Page Type (Form / Grid)
     * @param related SubGrid is related or not
     * @returns well formed RibbonId
     */
    CommandingWrapper.prototype.getRibbonId = function (etn, pageType, related) {
        var HOMEPAGEGRID_RIBBON_CONTEXT = "HomePageGrid:";
        var SUBGRIDSTANDARD_RIBBON_CONTEXT = "SubGridStandard:";
        var SUBGRIDASOCIATED_RIBBON_CONTEXT = "SubGridAssociated:";
        var context;
        if (pageType.toLowerCase() !== "form" && pageType.toLowerCase() !== "editform") {
            context = HOMEPAGEGRID_RIBBON_CONTEXT;
        }
        else if (related) {
            context = SUBGRIDASOCIATED_RIBBON_CONTEXT;
        }
        else {
            context = SUBGRIDSTANDARD_RIBBON_CONTEXT;
        }
        return context + etn;
    };
    /**
     * @param ownProps
     * @returns the default parameter for the control.
     */
    CommandingWrapper.prototype.getDefaultConfigParameters = function (ownProps) {
        var param;
        //If it's a default grid, then use the entityTypeName from parameter to generate RibbonId
        if (ownProps.configuration && ownProps.configuration.Parameters) {
            var parameters = ownProps.configuration.Parameters;
            for (var name_1 in parameters) {
                var parameter = parameters[name_1];
                if (parameter.Type === ManifestType_1.ManifestType.Grid) {
                    var dataSetParam = parameter;
                    return dataSetParam;
                }
            }
        }
    };
    /**
     * Compute RibbonId, CommandManagerId, and update the value to props.
     * @param props commandManagerProps, including user-defined props such as style, key name...
     * @param ownProps props mapped from state tree, contains control information, which is required to generate the custom cotnrol manager Id and ribbon Id
     */
    CommandingWrapper.prototype.populateCommandManagerProps = function (props, ownProps, entityTypeName) {
        var param = this.getDefaultConfigParameters(ownProps);
        var etn = entityTypeName || param ? param.TargetEntityType || param.EntityName : null;
        var related = param ? !!param.RelationshipName : null;
        // set the page id, it will be used as command manager id for HomePageGrid command bar
        props.id = ownProps.id;
        // If ribbonId is not set when creating the virtual component, generate it.
        // If it's explicitly set to null, skip the ribbonId generation and use null ribbonId to create commandbar
        if (props.ribbonId === undefined) {
            if (ownProps.formInfo && ownProps.formInfo.RibbonId) {
                props.ribbonId = ownProps.formInfo.RibbonId;
            }
            else {
                // set ribbon Id, if it's a subgrid inside form, generate command manager id to distinguish different subgrids in the same page
                var type = ownProps.pageType.toLowerCase();
                props.ribbonId = this.getRibbonId(etn, type, related);
            }
        }
        props.commandManagerId = this._commandManagerId + ":" + etn;
        props.key = props.key || this._ownProps.controlId + "-" + etn + "-commandbar";
        props.mainMenuLength = props.mainMenuLength || 3;
    };
    /**
     * Create a command bar, record the initializaion promise and instance
     * Layer between Uclient and Virtual Component Translator, allowing CommandingWrapper to keep track of already initialized command manager.
     * @param props
     * @returns JSX instance of command bar
     */
    CommandingWrapper.prototype.createCommandBar = function (props) {
        var _me = this;
        var deferredPromise = this._ownProps.actions.initializeCommandManager(props.commandManagerId);
        var params = this.getDefaultConfigParameters(this._ownProps);
        var etn = params ? params.TargetEntityType || params.EntityName : null;
        props.metaDataLoadedPromise = deferredPromise;
        if (!this._commandManagerInstances[etn]) {
            //If instance is already created but promise does not exists, then the command bar has already been created before, and command manager has already been initialized
            this._commandManagerPromises[etn] = deferredPromise;
        }
        deferredPromise.then(function (resolved) {
            _me._commandManagerPromises[etn] = null;
        });
        var instance = this._ownProps.actions.createCommandManagerUXComponent(props);
        this._commandManagerInstances[etn] = instance;
        return instance;
    };
    CommandingWrapper.getWrapperByCommandManagerId = function (commandManagerId) {
        return CommandingWrapper._commandingWrapperMap[commandManagerId];
    };
    CommandingWrapper.setWrapperByCommandManagerId = function (commandManagerId, props) {
        if (props) {
            CommandingWrapper._commandingWrapperMap[commandManagerId] = props;
        }
    };
    /**
     * @returns the base commandManager id "pageId:controlId"
     */
    CommandingWrapper.prototype.getCommandManagerId = function () {
        return this._commandManagerId;
    };
    CommandingWrapper.prototype.getInstance = function (etn) {
        return this._commandManagerInstances[etn];
    };
    CommandingWrapper.prototype.linkParameterMethod = function (parameter) {
        parameter.retrieveRecordCommand = this.retrieveRecordCommandForDatasetWrapper.bind(this, parameter.records, parameter.getTargetEntityType());
    };
    CommandingWrapper.prototype.unmountAll = function () {
        for (var instance in this._commandManagerInstances) {
            if (this._commandManagerInstances[instance].componentWillUnmount) {
                this._commandManagerInstances[instance].componentWillUnmount();
            }
        }
    };
    CommandingWrapper.prototype.componentDidMount = function () {
        for (var instance in this._commandManagerInstances) {
            if (this._commandManagerInstances[instance].componentDidMount) {
                this._commandManagerInstances[instance].componentDidMount();
            }
        }
    };
    CommandingWrapper.prototype.componentDidUpdate = function () {
        for (var instance in this._commandManagerInstances) {
            //TODO: command bar rendering in standard way will not have forceUpdate method
            if (this._commandManagerInstances[instance].forceUpdate) {
                this._commandManagerInstances[instance].forceUpdate();
            }
        }
    };
    //Reference to all commanding wrapper created.
    CommandingWrapper._commandingWrapperMap = {};
    return CommandingWrapper;
}());
exports.CommandingWrapper = CommandingWrapper;

},{"../Utilities/CCFPerformanceTracker":69,"../Utilities/ManifestType":75}],54:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * An object that encapsulates an Entity Reference as a plain object suitable for storing in the state tree
 */
var CustomControlEntityReference = (function () {
    /**
     * Creates a new EntityReference instance.
     * @param entityName The entity logical name
     * @param id The record id
     * @param name The optional record display name
     */
    function CustomControlEntityReference(entityName, id, name) {
        this._etn = entityName;
        this._id = id || "";
        this._name = name;
        Object.freeze(this);
    }
    Object.defineProperty(CustomControlEntityReference.prototype, "entityName", {
        /**
         * The entity type name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._etn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "logicalName", {
        /**
         * The entity type name for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._etn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "LogicalName", {
        /**
         * The entity type name for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._etn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "id", {
        /**
         * The record id.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "Id", {
        /**
         * The record id for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "name", {
        /**
         * The record display name.  Read-only. This is public to allow for access to the value as well as to simplify serialization.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomControlEntityReference.prototype, "Name", {
        /**
         * The record display nam for backward compatibility.
         * TODO: Mark as read-only when we adopt TypeScript 2.0
         */
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Output a simplified version of the EntityReference
     * @param reference
     */
    CustomControlEntityReference.toString = function (reference) {
        return reference.entityName + ":" + reference.id;
    };
    /**
     * Determine if two EntityReference objects are the same
     * @param x An EntityReference
     * @param y An EntityReference
     */
    CustomControlEntityReference.equals = function (x, y) {
        if (!x && !y) {
            return true;
        }
        else if (!x || !y) {
            return false;
        }
        else {
            return x.entityName === y.entityName && x.id === y.id && x.name === y.name;
        }
    };
    /**
     * An empty EntityReference
     */
    CustomControlEntityReference.EMPTY = new CustomControlEntityReference("");
    return CustomControlEntityReference;
}());
exports.CustomControlEntityReference = CustomControlEntityReference;

},{}],55:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var PopupType;
(function (PopupType) {
    PopupType[PopupType["Root"] = 1] = "Root";
    PopupType[PopupType["Nested"] = 2] = "Nested";
})(PopupType || (PopupType = {}));
exports.PopupType = PopupType;
/**
 * Indicates the form factor.
 */
var FormFactor;
(function (FormFactor) {
    FormFactor[FormFactor["None"] = 0] = "None";
    FormFactor[FormFactor["Slate"] = 1] = "Slate";
    FormFactor[FormFactor["Phone"] = 2] = "Phone";
    FormFactor[FormFactor["Desktop"] = 3] = "Desktop";
    FormFactor[FormFactor["MailApp"] = 4] = "MailApp";
})(FormFactor || (FormFactor = {}));
exports.FormFactor = FormFactor;
var supportedPrimitives = [
    "CRMICON",
    "BOOLEAN",
    "BUTTON",
    "COMBOBOX",
    "CONTAINER",
    "HYPERLINK",
    "IMG",
    "FILEINPUT",
    "FLYOUT",
    "LABEL",
    "LIST",
    "LISTITEM",
    "MICROSOFTICON",
    "POPUP",
    "SCROLLCONTAINER",
    "TABLE",
    "TABLEBODY",
    "TABLECAPTION",
    "TABLECELL",
    "TABLEFOOTER",
    "TABLEHEADER",
    "TABLEHEADERCELL",
    "TABLEROW",
    "TEXTINPUT",
    "IFRAME",
    "COMMANDBAR",
    "OPTION",
    "SELECT",
    "ENTITYIMAGE",
    "PROGRESSINDICATOR",
    "RADIO",
    "HORIZONTALSCROLL",
    "VIEWSELECTORCONTROL",
    "TEXT",
    "PRESENCEINDICATOR",
];
exports.SupportedPrimitives = supportedPrimitives;

},{}],56:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
/**
 * Utility function. Check if it's Null Or Undefined
 * @param object object to be validated
 * @returns true, if it's null or undefined object. Otherwise, it's false
 */
function IsNullOrUndefined(object) {
    return object === null ||
        object === undefined;
}
exports.IsNullOrUndefined = IsNullOrUndefined;
/**
 * Utility function. Check if it's Null Or Undefined, Or EmptyString
 * @param object object to be validated
 * @returns true, if it's null or undefined object, or empty string. Otherwise, it's false
 */
function IsNullOrEmptyString(object) {
    return IsNullOrUndefined(object) || !object.length;
}
exports.IsNullOrEmptyString = IsNullOrEmptyString;
/**
 * Utility function. Check if it's Array
 * @param object object to be validated
 * @returns true, if it's an array, otherwise false
 */
function IsArray(object) {
    return !IsNullOrUndefined(object) && object.constructor === Array;
}
exports.IsArray = IsArray;

},{}],57:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CCFUtils = require("./CustomControlUtilityPointers");
var MergeObjects_1 = require("../Utilities/MergeObjects");
var VirtualComponent_1 = require("../components/VirtualComponent");
var CCFPerformanceTracker_1 = require("../Utilities/CCFPerformanceTracker");
var CustomControlHelper_1 = require("../Utilities/CustomControlHelper");
var XrmProxy_1 = require("../Utilities/XrmProxy");
var CommandingWrapper_1 = require("./CommandingWrapper");
var LearningPathHelper_1 = require("../Utilities/LearningPathHelper");
var Reporting_1 = require("./PropertyClasses/Reporting");
var Formatting_1 = require("./PropertyClasses/Formatting");
var Factory_1 = require("./PropertyClasses/Factory");
var Diagnostics_1 = require("./PropertyClasses/Diagnostics");
var Utility_1 = require("./PropertyClasses/Utility");
var Performance_1 = require("./PropertyClasses/Performance");
var OrgSettings_1 = require("./PropertyClasses/OrgSettings");
var UserSettings_1 = require("./PropertyClasses/UserSettings");
var Client_1 = require("./PropertyClasses/Client");
var PropertyBagFactory_1 = require("./PropertyInfrastructure/PropertyBagFactory");
/**
 * The PropertyBag generator class for Custom Controls Framework
 */
var PropertyBag = (function () {
    /**
     * Generate an instance of the property bag
     * @param ownProps The associated Custom Control props
     * @param externalUtils External utils, which should be added to Property bag
     */
    function PropertyBag(ownProps, externalUtils) {
        /**
         * The accessibility internal data
         */
        this._accessibilityInternalData = { keyboardShortcuts: [] };
        var bagFactory = new PropertyBagFactory_1.PropertyBagFactory(ownProps, externalUtils);
        var stop = CCFPerformanceTracker_1.default.createPerformanceEvent("PropertyBag.constructor", ownProps.logLevel).startStopwatch({
            controlId: ownProps.controlId,
            parentId: CustomControlHelper_1.getParentIdFromProps(ownProps),
            level: 0 /* Top */ .toString(),
        });
        var paramKey = null;
        if (ownProps.manifest && ownProps.manifest.Properties.DataSetDefinitions !== null) {
            for (var dataSetKey in ownProps.manifest.Properties.DataSetDefinitions) {
                if (ownProps.manifest.Properties.DataSetDefinitions[dataSetKey].Primary) {
                    paramKey = dataSetKey;
                }
            }
        }
        this._bagObject = {
            formatting: bagFactory.getInstance(Formatting_1.Formatting),
            factory: bagFactory.getInstance(Factory_1.Factory),
            navigation: this._getNavBag(ownProps.propBagMethods.navigation, CustomControlHelper_1.getRecordSetQueryFromProps.bind(null, ownProps, paramKey)),
            reporting: bagFactory.getInstance(Reporting_1.Reporting),
            diagnostics: bagFactory.getInstance(Diagnostics_1.Diagnostics),
            resources: this._getResourcesBag(ownProps.manifest, ownProps.actions.getResource, ownProps.propBagData.resourcesData),
            theming: this._getThemingBag(ownProps.propBagData.themingData, ownProps.themingData),
            performance: bagFactory.getInstance(Performance_1.Performance),
            utils: bagFactory.getInstance(Utility_1.Utility),
            orgSettings: bagFactory.getInstance(OrgSettings_1.OrgSettings),
            userSettings: bagFactory.getInstance(UserSettings_1.UserSettings),
            offline: externalUtils.xrmProxy.Offline,
            learningPath: null,
            page: this._getPageBag(ownProps.propBagData.pageData, ownProps.propBagData.modeData, externalUtils),
            webAPI: null,
            client: bagFactory.getInstance(Client_1.Client),
            parameters: {},
            mode: null,
            accessibility: null,
            updatedProperties: [],
            device: this._getDeviceBag(ownProps.propBagMethods.device),
            externalContext: this._getExternalContextBag(),
            communicationChannel: null,
        };
        stop();
    }
    /**
     * Generate the entire bag current
     */
    PropertyBag.prototype.generateBag = function (ownProps, hostData) {
        var stop = CCFPerformanceTracker_1.default.createPerformanceEvent("PropertyBag.generateBag", ownProps.logLevel).startStopwatch({
            controlId: ownProps.controlId,
            parentId: CustomControlHelper_1.getParentIdFromProps(ownProps),
            level: 1 /* Nested */ .toString(),
        });
        this._bagObject.accessibility = this._getAccessibilityBag(ownProps);
        this._bagObject.mode = this._getModeBag(ownProps, hostData);
        this._bagObject.parameters = this._updateLatestParameters(ownProps);
        this._bagObject.children = this._getChildren(ownProps.children);
        this._bagObject.resources = this._getResourcesBag(ownProps.manifest, ownProps.actions.getResource, ownProps.propBagData.resourcesData);
        this._bagObject.webAPI = this._getWebAPIBag();
        this._bagObject.orgSettings = this._getOrganizationSettingsBag(ownProps.propBagData.clientData.orgSettingsData, XrmProxy_1.default);
        this._bagObject.userSettings = this._getUserSettingsBag(ownProps.propBagData.formattingData, ownProps.propBagData.utilsData, XrmProxy_1.default);
        this._bagObject.offline = XrmProxy_1.default.Offline;
        this._bagObject.learningPath = this._getLearningPathBag(ownProps);
        this._bagObject.updatedProperties = this._getUpdatedPropertiesBag(ownProps, hostData);
        this._bagObject.communicationChannel = this._getCommunicationBag(ownProps);
        Object.assign(this._bagObject.client, this._updateClientBag(ownProps.propBagData.formattingData, ownProps.propBagData.clientData, ownProps.propBagData.utilsData, hostData));
        if (ownProps.propBagData.pageData != null) {
            Object.assign(this._bagObject.page, this._updatePageBag(ownProps.propBagData.pageData, ownProps.propBagData.modeData));
        }
        stop();
        return this._bagObject;
    };
    /**
     * Get the virtual component equivalents of the children
     */
    PropertyBag.prototype._getChildren = function (childrenProps) {
        if (this._memoizedChildrenRaw !== childrenProps) {
            this._memoizedChildrenRaw = childrenProps;
            var newChildren = {};
            for (var childKey in this._memoizedChildrenRaw) {
                var child = this._memoizedChildrenRaw[childKey];
                newChildren[childKey] = new VirtualComponent_1.VirtualComponent(child.CustomControlId, childKey, { parameters: child.Parameters }, null);
            }
            this._memoizedChildrenConverted = newChildren;
        }
        return this._memoizedChildrenConverted;
    };
    /**
     * Update and get latest dataset and lookup parameters
     */
    PropertyBag.prototype._updateLatestParameters = function (ownProps) {
        var params = {};
        var _loop_1 = function(paramKey) {
            var parameter = ownProps.dynamicData.parameters[paramKey];
            if (parameter && parameter.attributes && parameter.attributes.SourceType) {
                // If SourceType = Rollup , executing the action for recalculate() for rollup fields.
                if (parameter.attributes.SourceType === 2) {
                    var EntityType_1 = ownProps.propBagData.modeData.entityTypeName;
                    var EntiTyId_1 = ownProps.propBagData.modeData.entityId;
                    var FieldName_1 = parameter.attributes.LogicalName;
                    parameter.attributes.recalculate = function () {
                        ownProps.actions.executeRollupRequest({ entityType: EntityType_1, id: EntiTyId_1 }, FieldName_1);
                    };
                }
            }
            if (ownProps.dynamicData.parameters[paramKey] && ownProps.dynamicData.parameters[paramKey].getLatestData) {
                var wrapper = ownProps.dynamicData.parameters[paramKey];
                var param = wrapper.getLatestData();
                // To retrieve lookup metadata 
                if (wrapper && wrapper.ensureLookupMetaDataInitialization) {
                    var lookupWrapper = wrapper;
                    lookupWrapper.ensureLookupMetaDataInitialization({
                        retrieveLookupMetadataAction: ownProps.actions.retrieveLookupMetadataAction,
                    });
                }
                wrapper.linkToParameter(param, {
                    retrieveAction: ownProps.actions.retrieveLookupData,
                    retrieveViewAction: ownProps.actions.retrieveView,
                    retrieveRelevanceSearchResults: ownProps.actions.retrieveRelevanceSearchData,
                    retrieveTimelineWallData: ownProps.actions.retrieveTimelineWallData,
                    retrieveTimelineCommands: ownProps.actions.retrieveTimelineCommands,
                    retrieveRecordDataForForm: ownProps.actions.retrieveRecordDataForForm,
                    updateFieldValue: ownProps.actions.updateFieldValue,
                    saveEmbeddedEntity: ownProps.actions.saveEmbeddedEntity,
                    refreshDataSetParameter: ownProps.actions.refreshDataSetParameter,
                    retrieveDataSetLookupCellParameter: ownProps.actions.retrieveDataSetLookupCellParameter,
                    executeAddOnLoad: ownProps.actions.executeAddOnLoad,
                    setPowerBISignedInState: ownProps.actions.setPowerBISignedInState,
                    beginSecureSessionForResource: ownProps.actions.beginSecureSessionForResource,
                    executeKbSearch: ownProps.actions.executeFullTextSearchKnowledgeArticle,
                    executeRetrieveKeyPhrasesForKnowledgeSearch: ownProps.actions.executeRetrieveKeyPhrasesForKnowledgeSearch,
                    executeRetrieveFieldFromParentRecord: ownProps.actions.executeRetrieveFieldFromParentRecord,
                    executeSearchWidgetInitialization: ownProps.actions.executeSearchWidgetInitialization,
                    executeSearchWidgetAction: ownProps.actions.executeSearchWidgetAction,
                    executeIncrementKnowledgeArticleViewCount: ownProps.actions.executeIncrementKnowledgeArticleViewCount,
                    executeNotifyHandlersThatEventOccurred: ownProps.actions.executeNotifyHandlersThatEventOccurred,
                    executeUpdateCurrentSearchText: ownProps.actions.executeUpdateCurrentSearchText,
                    openDatasetItem: CustomControlHelper_1.openDatasetItemAction.bind(null, ownProps, param, paramKey),
                    updateControlMemoizedDataSet: ownProps.actions.updateControlMemoizedDataSet,
                    executeRollupRequest: ownProps.actions.executeRollupRequest,
                    loadWebResource: ownProps.actions.loadWebResource,
                });
                var possibleDataSetWrapper = wrapper;
                if (possibleDataSetWrapper.applyDataSetInputs) {
                    var nextAction = possibleDataSetWrapper.applyDataSetInputs(param);
                    var possibleDataSet = param;
                    if (nextAction !== 0 /* None */) {
                        switch (nextAction) {
                            case 1 /* Refresh */:
                                if (possibleDataSet.refresh) {
                                    possibleDataSet.refresh();
                                }
                                break;
                            case 2 /* LoadNextPage */:
                                if (possibleDataSet.paging && possibleDataSet.paging.hasNextPage && possibleDataSet.paging.loadNextPage) {
                                    possibleDataSet.paging.loadNextPage();
                                }
                                break;
                            case 3 /* LoadPreviousPage */:
                                if (possibleDataSet.paging && possibleDataSet.paging.hasPreviousPage && possibleDataSet.paging.loadPreviousPage) {
                                    possibleDataSet.paging.loadPreviousPage();
                                }
                                break;
                        }
                    }
                }
                var commandingWrapper = CommandingWrapper_1.CommandingWrapper.getWrapperByCommandManagerId(ownProps.id + ":" + ownProps.controlId);
                if (commandingWrapper && param.getTargetEntityType) {
                    commandingWrapper.linkParameterMethod(param);
                }
                params[paramKey] = param;
            }
            else {
                params[paramKey] = ownProps.dynamicData.parameters[paramKey];
            }
        };
        for (var paramKey in ownProps.dynamicData.parameters) {
            _loop_1(paramKey);
        }
        return params;
    };
    /**
     * Get accessibility data
     */
    PropertyBag.prototype.getAccessibilityData = function () {
        return this._accessibilityInternalData;
    };
    /**
     * Gets the learning path id from the bag object
     */
    PropertyBag.prototype.getLearningPathBag = function () {
        return this._bagObject.learningPath;
    };
    /**
     * Gets the skype channel info from the bag object
     */
    PropertyBag.prototype.getCommunicationBag = function () {
        return this._bagObject.communicationChannel;
    };
    /**
     * Generate the accessibility bag
     */
    PropertyBag.prototype._getAccessibilityBag = function (bagProps) {
        var _this = this;
        _this._accessibilityInternalData = { keyboardShortcuts: [] };
        return {
            assignedTabIndex: CustomControlHelper_1.buildTabIndexValue(bagProps),
            isHighContrastEnabled: CustomControlHelper_1.getHighContrastEnabled(),
            registerShortcut: function (keyCombination, shortcutHandler, isGlobal, areaName, shortcutDescription, srcElementId) {
                var keyboardShortcut = bagProps.actions.createKeyboardShortcut(keyCombination, shortcutHandler, isGlobal, areaName, shortcutDescription, srcElementId);
                _this._accessibilityInternalData.keyboardShortcuts.push(keyboardShortcut);
            },
            getUniqueId: function (id) {
                return CustomControlHelper_1.buildUniqueCustomControlId(bagProps, id);
            },
            focusElementById: function (id, isAbsoluteId) {
                CustomControlHelper_1.focusElementById(bagProps, id, isAbsoluteId);
            },
            blurElementById: function (id, isAbsoluteId) {
                CustomControlHelper_1.blurElementById(bagProps, id, isAbsoluteId);
            },
        };
    };
    /**
     * Generate the mode bag
     */
    PropertyBag.prototype._getModeBag = function (bagProps, hostData) {
        var descriptor = (bagProps) ? bagProps.descriptor : null;
        var modeData = (bagProps) ? bagProps.propBagData.modeData : null;
        return {
            // TODO Individual control specific
            isControlDisabled: descriptor ? descriptor.Disabled : false,
            isVisible: descriptor ? descriptor.Visible : true,
            label: descriptor ? (descriptor.ShowLabel ? descriptor.Label : "") : "",
            // Rowspan passing (Mutiline textbox-textarea and other cases)
            rowSpan: (bagProps) ? bagProps.rowSpan : 0,
            // TODO : changing this to true, since without this control would always render as "--"
            // because the mode never changes to edit without focus.
            // Once accessibility is in place, the hard coding will go away.
            hasFocus: true,
            blur: function () { },
            focus: function () { },
            // Global, not yet brought down
            isPreview: false,
            isOffline: false,
            // Unknown as of yet whether this value will be relevant
            isActive: false,
            // Hopefully deprecated value, will set with same value as hasFocus during implementation
            isRead: false,
            // ContextInfo contains type, id and recordname of current entity
            contextInfo: {
                entityTypeName: modeData && modeData.entityTypeName,
                entityId: modeData && modeData.entityId,
                /**
                 * EntityRecordName contains record name of a Entity
                 */
                entityRecordName: modeData && modeData.entityRecordName,
            },
            setNotification: function (message, id) {
                // TODO Individual control specific
                var isControlDisabled;
                isControlDisabled = descriptor ? descriptor.Disabled : false;
                var isVisible;
                isVisible = descriptor ? descriptor.Visible : true;
                if (message && message.trim().length > 0 && isVisible && !isControlDisabled) {
                    return bagProps.propBagMethods.mode.setNotification(message, id, bagProps.id, bagProps.controlId, bagProps.contextToken, modeData.entityTypeName, modeData.entityId);
                }
                else
                    return false;
            },
            clearNotification: function (id) {
                return bagProps.propBagMethods.mode.clearNotification(bagProps.id, bagProps.controlId, bagProps.contextToken, modeData.entityTypeName, modeData.entityId, id);
            },
            setControlState: function (state) {
                return null;
            },
            allocatedWidth: CCFUtils.IsNullOrUndefined(hostData.allocatedWidth) ? -1 : hostData.allocatedWidth,
            allocatedHeight: CCFUtils.IsNullOrUndefined(hostData.allocatedHeight) ? -1 : hostData.allocatedHeight,
            trackContainerResize: hostData.trackResize,
            setFullScreen: hostData.updateFullscreen,
        };
    };
    /**
     * Generate the navigation bag
     */
    PropertyBag.prototype._getNavBag = function (bagProps, getRecordSetQueryKey) {
        return {
            openEditForm: function (entityReference, processId, processInstanceId, selectedStageId, isCrossEntityNavigate) {
                if (processId) {
                    return bagProps.openEditForm(entityReference, processId, processInstanceId, selectedStageId, isCrossEntityNavigate);
                }
                else {
                    var entityName = entityReference.entityName || entityReference.LogicalName;
                    var entityReferenceId = entityReference.id || (entityReference.Id && entityReference.Id.toString());
                    var recordSetQueryKey = getRecordSetQueryKey ? getRecordSetQueryKey() : null;
                    return XrmProxy_1.default.openForm({ entityName: entityName, entityId: entityReferenceId, recordSetQueryKey: recordSetQueryKey, processInstanceId: processInstanceId, selectedStageId: selectedStageId, isCrossEntityNavigate: isCrossEntityNavigate });
                }
            },
            openGridPage: function (entityTypeName, viewId, showChart, visualizationId, filterExpression) {
                return bagProps.openGridPage(entityTypeName, viewId, showChart, visualizationId, filterExpression);
            },
            openGrid: function (entityTypeName, viewId, showChart, visualizationId, filterExpression) {
                return bagProps.openGridPage(entityTypeName, viewId, showChart, visualizationId, filterExpression);
            },
            openDashboard: function (id) {
                return bagProps.openDashboard(id);
            },
            openCreateForm: function (logicalName, initialValues, createFromEntity) {
                return bagProps.openCreateForm(logicalName, initialValues, createFromEntity);
            },
            openForm: function (options, parameters) {
                options.recordSetQueryKey = getRecordSetQueryKey && getRecordSetQueryKey();
                return XrmProxy_1.default.openForm(options, parameters);
            },
            openSearch: function (query) {
                return bagProps.openSearch(query);
            },
            openPowerBIFullScreenPage: function (powerBIEmbedUrl, powerBIGroupId, powerBIDashboardId, powerBITileId, powerBIReportId, powerBIReportUrl, powerBIComponentTypeCode) {
                return bagProps.openPowerBIFullScreenPage(powerBIEmbedUrl, powerBIGroupId, powerBIDashboardId, powerBITileId, powerBIReportId, powerBIReportUrl, powerBIComponentTypeCode);
            },
            openUrl: function (url, options) {
                // Needs to call the navigation.openUrl inside CustomControlHost and passing in context
                //return bagProps.openUrl(url);
                return XrmProxy_1.default.openUrl(url, options);
            },
            openUrlWithProtocol: function (url, protocol) {
                return bagProps.openUrlWithProtocol(url, protocol);
            },
            openPhoneNumber: function (phoneNumber) {
                return bagProps.openPhoneNumber(phoneNumber);
            },
            openMaps: function (address) {
                return bagProps.openMaps(address);
            },
            openMap: function (address) {
                return bagProps.openMap(address);
            },
            openAlertDialog: function (alertStrings, options) {
                return XrmProxy_1.default.openAlertDialog(alertStrings, options);
            },
            openConfirmDialog: function (confirmStrings, options) {
                return XrmProxy_1.default.openConfirmDialog(confirmStrings, options);
            },
            openErrorDialog: function (options) {
                return XrmProxy_1.default.openErrorDialog(options);
            },
            openDialog: function (name, options, parameters) {
                return XrmProxy_1.default.openDialog(name, options, parameters);
            },
            openFile: function (file, options) {
                return XrmProxy_1.default.openFile(file, options);
            },
            openTaskFlow: function (name, options, parameters) {
                return XrmProxy_1.default.openTaskFlow(name, options, parameters);
            },
            openWebResource: function (name, options, data) {
                return XrmProxy_1.default.openWebResource(name, options, data);
            },
        };
    };
    /**
     * Generate the device bag
     */
    PropertyBag.prototype._getDeviceBag = function (bagProps) {
        return {
            captureImage: function (options) {
                return XrmProxy_1.default.captureImage(options);
            },
            captureAudio: function () {
                return XrmProxy_1.default.captureAudio();
            },
            captureVideo: function () {
                return XrmProxy_1.default.captureVideo();
            },
            pickFile: function (options) {
                return XrmProxy_1.default.pickFile(options);
            },
            getBarcodeValue: function () {
                return XrmProxy_1.default.getBarcodeValue();
            },
            getCurrentPosition: function () {
                return XrmProxy_1.default.getCurrentPosition();
            },
            isGetBarcodeValueOperationAvailable: function () {
                return bagProps.isGetBarcodeValueOperationAvailable();
            },
            isTakePictureOperationAvailable: function () {
                return bagProps.isTakePictureOperationAvailable();
            },
            isCaptureVideoOperationAvailable: function () {
                return bagProps.isCaptureVideoOperationAvailable();
            },
            isCaptureAudioOperationAvailable: function () {
                return bagProps.isCaptureAudioOperationAvailable();
            },
        };
    };
    /**
     * Generate the external context bag
     */
    PropertyBag.prototype._getExternalContextBag = function () {
        return {
            getAvailableExternalContexts: function () {
                return XrmProxy_1.default.getAvailableExternalContexts();
            },
            getExternalContextProperty: function (externalContextId, externalContextPropertyId, options) {
                return XrmProxy_1.default.getExternalContextProperty(externalContextId, externalContextPropertyId, options);
            },
            invokeExternalContextAction: function (externalContextId, externalContextActionId, options) {
                return XrmProxy_1.default.invokeExternalContextAction(externalContextId, externalContextActionId, options);
            },
        };
    };
    /**
     * Generates the portion of the client bag that calls into Client Api
     */
    PropertyBag.prototype._getClientBag = function (externalUtils) {
        return {
            getClient: function () {
                return externalUtils.xrmProxy.Client.getClient();
            },
            isOffline: function () {
                return externalUtils.xrmProxy.Client.getClientState() === "Offline" ? true : false;
            },
            getFormFactor: function () {
                return externalUtils.xrmProxy.Client.getFormFactor();
            },
        };
    };
    /**
     * Generates the portion of the client bag that is not linked to Client Api
     */
    PropertyBag.prototype._updateClientBag = function (bagPropsFormatting, bagPropsClient, bagPropsUtil, hostData) {
        var formattingData = bagPropsFormatting;
        var clientData = bagPropsClient;
        var utilData = bagPropsUtil;
        return {
            // These will eventually be moved and/or deprecated
            formFactor: clientData.formFactor,
            userAgent: clientData.userAgent,
            languageCode: clientData.languageCode ? clientData.languageCode.toString() : null,
            isRTL: clientData.isRTL,
            locale: clientData.locale,
            orgSettings: clientData.orgSettingsData,
            dateFormattingInfo: formattingData.dateTimeFormatInfo,
            numberFormattingInfo: formattingData.numberFormatInfo,
            userTimeZoneUtcOffsetMinutes: formattingData.timeZoneUtcOffsetMinutes,
            getUserTimeZoneUtcOffset: function (d) {
                return formattingData.timeZoneUtcOffsetMinutes + utilData.dateTimeUtils.getDSTAdjustmentMinutes(d, formattingData.timeZoneAdjusters);
            },
            // Get size info coming from parent container? on Props? Non-static
            allocatedWidth: CCFUtils.IsNullOrUndefined(hostData.allocatedWidth) ? -1 : hostData.allocatedWidth,
            allocatedHeight: CCFUtils.IsNullOrUndefined(hostData.allocatedHeight) ? -1 : hostData.allocatedHeight,
            trackContainerResize: hostData.trackResize,
            disableScroll: clientData.disableScroll || false,
            setFullscreen: hostData.updateFullscreen,
            ignoreSelfUpdates: hostData.ignoreUpdates,
        };
    };
    /**
     * Generate the resources bag
     */
    PropertyBag.prototype._getResourcesBag = function (manifest, getResource, bagPropsResource) {
        return {
            // TODO: Figure out webresource manager, hook up to resource strings in tree
            getString: function (id) {
                return (!id || !bagPropsResource || !bagPropsResource[id]) ? id : bagPropsResource[id];
            },
            getResource: function (id, success, failure) {
                var resource = manifest.Properties.Resources.filter(function (res) {
                    if (res) {
                        return res.Name.endsWith(id);
                    }
                })[0];
                if (resource) {
                    getResource(resource).then(function (data) {
                        success(data);
                    }, function () {
                        failure();
                    });
                }
                else {
                    failure();
                }
            },
        };
    };
    /**
     * Generate the theming bag
     */
    PropertyBag.prototype._getThemingBag = function (themingData, augmentedThemingData) {
        return MergeObjects_1.default({}, themingData.defaultThemingData, {
            getEntityColor: function (entityLogicalName) {
                return (themingData.entitiesColors && themingData.entitiesColors[entityLogicalName]) ? themingData.entitiesColors[entityLogicalName] : "";
            },
            // Candidates for deletion, will likely leave as no-op
            disableUiTransitions: function () { },
            rightAlignEdit: function () { },
            inlineLayout: function (val) { },
        }, (augmentedThemingData) ? augmentedThemingData.defaultThemingData : undefined);
    };
    /**
     * Generate the organization settings bag
     */
    PropertyBag.prototype._getOrganizationSettingsBag = function (customControlExposedOrgSettings, xrmProxy) {
        return {
            languageId: xrmProxy.OrgSettings.languageId,
            attributes: xrmProxy.OrgSettings.attributes,
            uniqueName: xrmProxy.OrgSettings.uniqueName,
            isAutoSaveEnabled: xrmProxy.OrgSettings.isAutoSaveEnabled,
            isRTL: customControlExposedOrgSettings.isRTL,
            fiscalYearStartDate: customControlExposedOrgSettings.fiscalYearStartDate,
            fiscalPeriodFormat: customControlExposedOrgSettings.fiscalPeriodFormat,
            fiscalPeriodType: customControlExposedOrgSettings.fiscalPeriodType,
            fiscalYearFormatYear: customControlExposedOrgSettings.fiscalYearFormatYear,
            fiscalYearFormatPrefix: customControlExposedOrgSettings.fiscalYearFormatPrefix,
            fiscalYearFormatSuffix: customControlExposedOrgSettings.fiscalYearFormatSuffix,
            fiscalYearDisplayCode: customControlExposedOrgSettings.fiscalYearDisplayCode,
            fiscalPeriodConnector: customControlExposedOrgSettings.fiscalPeriodConnector,
            showWeekNumber: customControlExposedOrgSettings.showWeekNumber,
        };
    };
    /**
     * Generate the user settings bag
     */
    PropertyBag.prototype._getUserSettingsBag = function (formattingData, utilsData, xrmProxy) {
        return {
            getTimeZoneOffsetMinutes: function (date) {
                if (!date) {
                    return formattingData.timeZoneUtcOffsetMinutes;
                }
                else {
                    return formattingData.timeZoneUtcOffsetMinutes + utilsData.dateTimeUtils.getDSTAdjustmentMinutes(date, formattingData.timeZoneAdjusters);
                }
            },
            userId: xrmProxy.UserSettings.userId,
            userName: xrmProxy.UserSettings.userName,
            dateFormattingInfo: formattingData.dateTimeFormatInfo,
            numberFormattingInfo: formattingData.numberFormatInfo,
            isRTL: xrmProxy.UserSettings.isRTL,
            languageId: xrmProxy.UserSettings.languageId,
            securityRoles: xrmProxy.UserSettings.securityRoles,
            isHighContrastEnabled: xrmProxy.UserSettings.isHighContrastEnabled,
        };
    };
    /**
     * Generate the page bag
     */
    PropertyBag.prototype._getPageBag = function (pageData, modeData, externalUtils) {
        return {
            appId: pageData.appId,
            entityTypeName: modeData.entityTypeName,
            entityId: modeData.entityId,
            isPageReadOnly: pageData.isPageReadOnly,
            getClientUrl: function () { return externalUtils.xrmProxy.Page.getClientUrl(); },
        };
    };
    /**
     * Generate the LearningPath bag
     */
    PropertyBag.prototype._getLearningPathBag = function (props) {
        var controlId = LearningPathHelper_1.LearningPathHelper.getLearningPathControlId(props);
        return {
            DOMAttributeName: LearningPathHelper_1.LearningPathHelper.LEARNING_PATH_ATTRIBUTE,
            baseControlId: controlId,
        };
    };
    /**
     * Get the UpdatedPropertiesBag
     */
    PropertyBag.prototype._getUpdatedPropertiesBag = function (ownProps, hostData) {
        var returnArray = [];
        if (hostData && hostData.updatedProperties) {
            returnArray = hostData.updatedProperties;
        }
        for (var paramKey in ownProps.dynamicData.parameters) {
            if (ownProps.dynamicData.parameters[paramKey] && ownProps.dynamicData.parameters[paramKey].getUpdatedPropertiesDic) {
                var updatedPropertiesDic = ownProps.dynamicData.parameters[paramKey].getUpdatedPropertiesDic();
                for (var updatedProperty in updatedPropertiesDic) {
                    if (updatedPropertiesDic[updatedProperty] && returnArray.indexOf(updatedProperty) === -1) {
                        returnArray.push(updatedProperty);
                    }
                }
                if (ownProps.dynamicData.parameters[paramKey].clearUpdatedPropertiesDic) {
                    ownProps.dynamicData.parameters[paramKey].clearUpdatedPropertiesDic();
                }
            }
        }
        return returnArray;
    };
    /**
     * Generates communication channel bag.
     */
    PropertyBag.prototype._getCommunicationBag = function (ownProps) {
        return {
            getPresenceMappedField: function (entityName) {
                return ownProps.actions.getPresenceMappedField(entityName);
            },
            isPresenceEnabled: function (entityName) {
                return ownProps.actions.isPresenceEnabledEntity(entityName);
            },
        };
    };
    PropertyBag.prototype._updatePageBag = function (pageData, modeData) {
        return {
            appId: pageData.appId,
            entityTypeName: modeData.entityTypeName,
            entityId: modeData.entityId,
            isPageReadOnly: pageData.isPageReadOnly,
        };
    };
    /**
     * Generate the Web API Bag
     * Note: These functions are called this way so we can put CCF specific telemetry around them
     */
    PropertyBag.prototype._getWebAPIBag = function () {
        return {
            retrieveRecord: function (entityType, id, options) {
                return XrmProxy_1.default.retrieveRecord(entityType, id, options);
            },
            createRecord: function (entityType, data) {
                return XrmProxy_1.default.createRecord(entityType, data);
            },
            updateRecord: function (entityType, id, data) {
                return XrmProxy_1.default.updateRecord(entityType, id, data);
            },
            deleteRecord: function (entityType, id) {
                return XrmProxy_1.default.deleteRecord(entityType, id);
            },
            retrieveMultipleRecords: function (entityType, options, maxPageSize) {
                return XrmProxy_1.default.retrieveMultipleRecords(entityType, options, maxPageSize);
            },
            execute: function (request) {
                return XrmProxy_1.default.execute(request);
            },
            executeMultiple: function (requests) {
                return XrmProxy_1.default.executeMultiple(requests);
            },
        };
    };
    return PropertyBag;
}());
exports.PropertyBag = PropertyBag;

},{"../Utilities/CCFPerformanceTracker":69,"../Utilities/CustomControlHelper":71,"../Utilities/LearningPathHelper":74,"../Utilities/MergeObjects":76,"../Utilities/XrmProxy":80,"../components/VirtualComponent":88,"./CommandingWrapper":53,"./CustomControlUtilityPointers":56,"./PropertyClasses/Client":58,"./PropertyClasses/Diagnostics":59,"./PropertyClasses/Factory":60,"./PropertyClasses/Formatting":61,"./PropertyClasses/OrgSettings":62,"./PropertyClasses/Performance":63,"./PropertyClasses/Reporting":64,"./PropertyClasses/UserSettings":65,"./PropertyClasses/Utility":66,"./PropertyInfrastructure/PropertyBagFactory":67}],58:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var CCFUtils = require("./../CustomControlUtilityPointers");
var Client = (function () {
    function Client(customControlProperties, externalUtils) {
        this._externalUtils = externalUtils;
        this._customControlProperties = customControlProperties;
        this._xrmProxy = externalUtils.xrmProxy;
    }
    Client.prototype.getClient = function () {
        return this._externalUtils.xrmProxy.Client.getClient();
    };
    Client.prototype.isOffline = function () {
        return this._externalUtils.xrmProxy.Client.getClientState() === "Offline" ? true : false;
    };
    Client.prototype.getFormFactor = function () {
        return this._externalUtils.xrmProxy.Client.getFormFactor();
    };
    Client.prototype.getClientState = function () {
        return null;
    };
    Client.prototype.updateClientBag = function (hostData) {
        var formattingData = this._customControlProperties.propBagData.formattingData;
        var clientData = this._customControlProperties.propBagData.clientData;
        var utilsData = this._customControlProperties.propBagData.utilsData;
        this.formFactor = clientData.formFactor;
        this.userAgent = clientData.userAgent;
        this.languageCode = clientData.languageCode ? clientData.languageCode.toString() : null;
        this.isRTL = this._xrmProxy.UserSettings.isRTL;
        this.locale = clientData.locale;
        this.orgSettings = clientData.orgSettingsData;
        this.dateFormattingInfo = formattingData.dateTimeFormatInfo;
        this.numberFormattingInfo = formattingData.numberFormatInfo;
        this.userTimeZoneUtcOffsetMinutes = formattingData.timeZoneUtcOffsetMinutes;
        this.getUserTimeZoneUtcOffset = function (d) {
            return formattingData.timeZoneUtcOffsetMinutes + utilsData.dateTimeUtils.getDSTAdjustmentMinutes(d, formattingData.timeZoneAdjusters);
        };
        // Get size info coming from parent container? on Props? Non-static
        this.allocatedWidth = CCFUtils.IsNullOrUndefined(hostData.allocatedWidth) ? -1 : hostData.allocatedWidth;
        this.allocatedHeight = CCFUtils.IsNullOrUndefined(hostData.allocatedHeight) ? -1 : hostData.allocatedHeight;
        this.trackContainerResize = hostData.trackResize;
        this.setFullScreen = hostData.updateFullscreen;
        this.setFullscreen = hostData.updateFullscreen;
        this.ignoreSelfUpdates = hostData.ignoreUpdates;
        this.disableScroll = clientData.disableScroll || false;
    };
    return Client;
}());
exports.Client = Client;

},{"./../CustomControlUtilityPointers":56}],59:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var Diagnostics = (function () {
    function Diagnostics(customControlProperties, externalUtils) {
        this._traceLocation = "CustomControl.";
        this._externalUtils = externalUtils;
        this._controlId = customControlProperties.controlId;
    }
    Diagnostics.prototype.addControlId = function (message) {
        return message + "[CustomControlId = " + this._controlId + "]";
    };
    Diagnostics.prototype.traceError = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceError(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceWarning = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceWarning(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceInfo = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceInfo(this._traceLocation + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceDebug = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceDebug(this._traceLocation + componentName, this.addControlId(message));
    };
    return Diagnostics;
}());
exports.Diagnostics = Diagnostics;

},{}],60:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var VirtualComponent_1 = require("../../components/VirtualComponent");
var CCFUtils = require("./../CustomControlUtilityPointers");
var DefaultControlMapper_1 = require("../../Utilities/DefaultControlMapper");
var Factory = (function () {
    function Factory(customControlProperties, externalUtils) {
        this._customControlProperties = customControlProperties;
        this._externalUtils = externalUtils;
    }
    Factory.prototype.createElement = function (type, properties, children) {
        return new VirtualComponent_1.VirtualComponent(type, "", properties, children);
    };
    Factory.prototype.createComponent = function (type, id, properties) {
        return new VirtualComponent_1.VirtualComponent(type, id, properties, null);
    };
    Factory.prototype.bindDOMElement = function (virtualComponent, DOMNode) {
        this._externalUtils.bindDOMElement(virtualComponent, DOMNode);
    };
    Factory.prototype.fireEvent = function (eventName, params) {
        var parentDefinedControlProps = this._customControlProperties.parentDefinedControlProps;
        if (!CCFUtils.IsNullOrUndefined(parentDefinedControlProps)
            && !(CCFUtils.IsNullOrUndefined(parentDefinedControlProps.eventListeners))) {
            var index = -1;
            var listeners = parentDefinedControlProps.eventListeners;
            for (var iterator = 0; iterator < listeners.length; iterator++) {
                if (listeners[iterator].eventname === eventName) {
                    index = iterator;
                }
            }
            if (index !== -1) {
                var handlers = parentDefinedControlProps.eventListeners[index];
                for (var iterator in handlers.eventhandler) {
                    if (!CCFUtils.IsNullOrUndefined(handlers.eventhandler[iterator])) {
                        handlers.eventhandler[iterator](params);
                    }
                }
            }
        }
    };
    Factory.prototype.getControlDefaultMapping = function (dataType, attributes) {
        return DefaultControlMapper_1.retrieveDefaultManifestNameByDataType(dataType, attributes);
    };
    Factory.prototype.getPopupService = function () {
        return this._externalUtils.getPopupService();
    };
    Factory.prototype.requestRender = function (callback) {
        this._externalUtils.forceUpdate(callback);
    };
    Factory.prototype.unbindDOMComponent = function (componentId) {
        return this._externalUtils.unbindDOMComponent(componentId);
    };
    Factory.prototype.updateComponent = function (id, props) {
        this._externalUtils.updateComponent(id, props);
    };
    return Factory;
}());
exports.Factory = Factory;

},{"../../Utilities/DefaultControlMapper":72,"../../components/VirtualComponent":88,"./../CustomControlUtilityPointers":56}],61:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var Formatting = (function () {
    function Formatting(customControlProperties, externalUtils) {
        this._formattingData = customControlProperties.propBagData.formattingData;
        this._utilsData = customControlProperties.propBagData.utilsData;
        this._adjusters = this._formattingData.timeZoneAdjusters;
        this._dateTimeFormatInfo = this._formattingData.dateTimeFormatInfo;
        this._currentCultureInfo = new Sys.CultureInfo(this._formattingData.formatInfoCultureName, this._formattingData.numberFormatInfo, this._formattingData.dateTimeFormatInfo);
        this._timeZoneOffsetMinutes = this._formattingData.timeZoneUtcOffsetMinutes;
    }
    Formatting.prototype.formatDateShort = function (value, showTime) {
        if (showTime) {
            return this._formattingData.formatter.formatShortDateTimeValue(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
        }
        else {
            return this._formattingData.formatter.formatShortDateValue(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
        }
    };
    Formatting.prototype.formatDateLongAbbreviated = function (value) {
        return this._formattingData.formatter.formatDateLongAbbreviated(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatDateLong = function (value) {
        return this._formattingData.formatter.formatLongDateValue(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatDateYearMonth = function (value) {
        return this._formattingData.formatter.formatDateYearMonthValue(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.formatInteger = function (value) {
        return this._formattingData.formatter.formatIntegerValue(value, this._currentCultureInfo);
    };
    Formatting.prototype.formatDecimal = function (value, precision) {
        return this._formattingData.formatter.formatDecimalValue(value, this._currentCultureInfo, precision);
    };
    Formatting.prototype.formatCurrency = function (value, precision, symbol) {
        return this._formattingData.formatter.formatCurrencyValue(value, this._currentCultureInfo, symbol, precision);
    };
    Formatting.prototype.formatTime = function (value, behavior) {
        return this._formattingData.formatter.formatShortDateTimeValue(value, this._currentCultureInfo, behavior, this._timeZoneOffsetMinutes, this._adjusters);
    };
    Formatting.prototype.getWeekOfYear = function (value) {
        return this._utilsData.dateTimeUtils.getWeekOfYear(value, this._dateTimeFormatInfo.firstDayOfWeek, this._dateTimeFormatInfo.calendarWeekRule);
    };
    Formatting.prototype.formatDateAsFilterStringInUTC = function (value, showTime) {
        if (showTime) {
            return this._formattingData.formatter.formatSortableDateTimeValue(value, this._currentCultureInfo, 0 /* None */, this._timeZoneOffsetMinutes, this._adjusters);
        }
        else {
            return this._formattingData.formatter.formatSortableDateValue(value, this._currentCultureInfo, 0 /* None */);
        }
    };
    Formatting.prototype.formatLanguage = function (value) {
        return this._formattingData.formatter.formatLanguageValue(value, this._formattingData.languagesByCode);
    };
    return Formatting;
}());
exports.Formatting = Formatting;

},{}],62:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var OrgSettings = (function () {
    function OrgSettings(customControlProperties, externalUtils) {
        this._customControlExposedOrgSettings = customControlProperties.propBagData.clientData.orgSettingsData;
        this._xrmProxy = externalUtils.xrmProxy;
        this.languageId = this._xrmProxy.OrgSettings.languageId;
        this.attributes = this._xrmProxy.OrgSettings.attributes;
        this.uniqueName = this._xrmProxy.OrgSettings.uniqueName;
        this.isAutoSaveEnabled = this._xrmProxy.OrgSettings.isAutoSaveEnabled;
        this.isRTL = this._customControlExposedOrgSettings.isRTL;
        this.fiscalYearStartDate = this._customControlExposedOrgSettings.fiscalYearStartDate;
        this.fiscalPeriodFormat = this._customControlExposedOrgSettings.fiscalPeriodFormat;
        this.fiscalPeriodType = this._customControlExposedOrgSettings.fiscalPeriodType;
        this.fiscalYearFormatYear = this._customControlExposedOrgSettings.fiscalYearFormatYear;
        this.fiscalYearFormatPrefix = this._customControlExposedOrgSettings.fiscalYearFormatPrefix;
        this.fiscalYearFormatSuffix = this._customControlExposedOrgSettings.fiscalYearFormatSuffix;
        this.fiscalYearDisplayCode = this._customControlExposedOrgSettings.fiscalYearDisplayCode;
        this.fiscalPeriodConnector = this._customControlExposedOrgSettings.fiscalPeriodConnector;
        this.showWeekNumber = this._customControlExposedOrgSettings.showWeekNumber;
    }
    return OrgSettings;
}());
exports.OrgSettings = OrgSettings;

},{}],63:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var CCFPerformanceTracker_1 = require("../../Utilities/CCFPerformanceTracker");
var Performance = (function () {
    function Performance(customControlProperties, externalUtils) {
        this._performanceEvents = {};
        this._customControlProperties = customControlProperties;
    }
    Performance.prototype.createPerformanceStopwatch = function (name, parameters, logLevel) {
        if (!this._performanceEvents[name]) {
            this._performanceEvents[name] = CCFPerformanceTracker_1.default.createPerformanceEvent(name, logLevel, this._customControlProperties.configuration.CustomControlId);
        }
        return this._performanceEvents[name].startStopwatch(parameters);
    };
    Performance.prototype.addKeyPerformanceIndicator = function (name, parameters, retroactiveTimestamp) {
        CCFPerformanceTracker_1.default.addKeyPerformanceIndicator(name, parameters, retroactiveTimestamp);
    };
    Performance.prototype.addKeyPerformanceIndicatorOnIdle = function (name, parameters) {
        CCFPerformanceTracker_1.default.addKeyPerformanceIndicatorOnIdle(name, parameters);
    };
    return Performance;
}());
exports.Performance = Performance;

},{"../../Utilities/CCFPerformanceTracker":69}],64:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var Reporting = (function () {
    function Reporting(customControlProperties, externalUtils) {
        this._externalUtils = externalUtils;
        this._controlId = customControlProperties.controlId;
    }
    Reporting.prototype.addControlId = function (params) {
        if (params == null) {
            params = [];
        }
        var controlParameter = {
            name: "CustomControlId",
            value: this._controlId,
        };
        params.push(controlParameter);
        return params;
    };
    Reporting.prototype.reportSuccess = function (componentName, params) {
        return this._externalUtils.xrmProxy.Reporting.reportSuccess(componentName, this.addControlId(params));
    };
    Reporting.prototype.reportFailure = function (componentName, error, suggestedMitigation, params) {
        return this._externalUtils.xrmProxy.Reporting.reportFailure(componentName, error, suggestedMitigation, this.addControlId(params));
    };
    Reporting.prototype.reportEvent = function (event) {
        var controlParam = this.addControlId([]);
        event.eventParameters.push(controlParam[0]);
        return this._externalUtils.xrmProxy.Reporting.reportEvent(event);
    };
    return Reporting;
}());
exports.Reporting = Reporting;

},{}],65:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var UserSettings = (function () {
    function UserSettings(customControlProperties, externalUtils) {
        this._formattingData = customControlProperties.propBagData.formattingData;
        this._xrmProxy = externalUtils.xrmProxy;
        this._utilsData = customControlProperties.propBagData.utilsData;
        this.userId = this._xrmProxy.UserSettings.userId;
        this.userName = this._xrmProxy.UserSettings.userName;
        this.dateFormattingInfo = this._formattingData.dateTimeFormatInfo;
        this.numberFormattingInfo = this._formattingData.numberFormatInfo;
        this.isRTL = this._xrmProxy.UserSettings.isRTL;
        this.languageId = this._xrmProxy.UserSettings.languageId;
        this.securityRoles = this._xrmProxy.UserSettings.securityRoles;
        this.isHighContrastEnabled = this._xrmProxy.UserSettings.isHighContrastEnabled;
        this.timeZoneUtcOffsetMinutes = this._formattingData.timeZoneUtcOffsetMinutes;
    }
    UserSettings.prototype.getTimeZoneOffsetMinutes = function (date) {
        if (!date) {
            return this._formattingData.timeZoneUtcOffsetMinutes;
        }
        else {
            return this._formattingData.timeZoneUtcOffsetMinutes + this._utilsData.dateTimeUtils.getDSTAdjustmentMinutes(date, this._formattingData.timeZoneAdjusters);
        }
    };
    return UserSettings;
}());
exports.UserSettings = UserSettings;

},{}],66:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var XrmProxy_1 = require("../../Utilities/XrmProxy");
var CCFUtils = require("./../CustomControlUtilityPointers");
var DefaultControlMapper_1 = require("../../Utilities/DefaultControlMapper");
var CCFPerformanceTracker_1 = require("../../Utilities/CCFPerformanceTracker");
var PerformanceStopwatch_1 = require("../../Utilities/PerformanceStopwatch");
var CustomControlHelper_1 = require("../../Utilities/CustomControlHelper");
var Utility = (function () {
    function Utility(customControlProperties, externalUtils) {
        this._customControlProperties = customControlProperties;
        this._externalUtils = externalUtils;
        this._commandManagerId = customControlProperties.id + ":" + customControlProperties.controlId;
    }
    Utility.prototype.beginSecureSessionForResource = function (resource, cookieName, cookieDomain) {
        return XrmProxy_1.default.Utils.beginSecureSessionForResource(resource, cookieName, cookieDomain);
    };
    Utility.prototype.createPerformanceMarker = function (id, logLevel) {
        CCFPerformanceTracker_1.default.createPerformanceEvent(id, logLevel, this._customControlProperties.configuration.CustomControlId).createMarker();
    };
    Utility.prototype.createPerformanceStopwatch = function (id, logLevel) {
        return new PerformanceStopwatch_1.PerformanceStopwatch(CCFPerformanceTracker_1.default.createPerformanceEvent(id, logLevel, this._customControlProperties.configuration.CustomControlId));
    };
    Utility.prototype.log = function (customControlName, message, logType) {
        this._customControlProperties.propBagMethods.utils.logMessage(customControlName, message, logType);
    };
    Utility.prototype.getEntityMetadata = function (entityType, attributes) {
        return XrmProxy_1.default.Utils.getEntityMetadata(entityType, attributes);
    };
    Utility.prototype.getResourceString = function (webResourceName, key) {
        return XrmProxy_1.default.Utils.getResourceString(webResourceName, key);
    };
    Utility.prototype.isFeatureEnabled = function (featureName) {
        return XrmProxy_1.default.Utils.isFeatureEnabled(featureName);
    };
    Utility.prototype.lookupObjects = function (lookupOptions) {
        return XrmProxy_1.default.Utils.lookupObjects(lookupOptions);
    };
    Utility.prototype.bindDOMElement = function (virtualComponent, DOMNode) {
        this._externalUtils.bindDOMElement(virtualComponent, DOMNode);
    };
    Utility.prototype.fireEvent = function (eventName, params) {
        var parentDefinedControlProps = this._customControlProperties.parentDefinedControlProps;
        if (!CCFUtils.IsNullOrUndefined(parentDefinedControlProps)
            && !(CCFUtils.IsNullOrUndefined(parentDefinedControlProps.eventListeners))) {
            var index = -1;
            var listeners = parentDefinedControlProps.eventListeners;
            for (var iterator = 0; iterator < listeners.length; iterator++) {
                if (listeners[iterator].eventname === eventName) {
                    index = iterator;
                }
            }
            if (index !== -1) {
                var handlers = parentDefinedControlProps.eventListeners[index];
                for (var iterator in handlers.eventhandler) {
                    if (!CCFUtils.IsNullOrUndefined(handlers.eventhandler[iterator])) {
                        handlers.eventhandler[iterator](params);
                    }
                }
            }
        }
    };
    Utility.prototype.getControlDefaultMapping = function (dataType, attributes) {
        return DefaultControlMapper_1.retrieveDefaultManifestNameByDataType(dataType, attributes);
    };
    Utility.prototype.getPopupService = function () {
        return this._externalUtils.getPopupService();
    };
    Utility.prototype.requestRender = function (callback) {
        this._externalUtils.forceUpdate(callback);
    };
    Utility.prototype.unbindDOMComponent = function (componentId) {
        return this._externalUtils.unbindDOMComponent(componentId);
    };
    Utility.prototype.updateComponent = function (id, props) {
        this._externalUtils.updateComponent(id, props);
    };
    Utility.prototype.createCrmUri = function (url) {
        if (!this._customControlProperties || !this._customControlProperties.propBagData || !this._customControlProperties.propBagData.clientData) {
            return url;
        }
        return CustomControlHelper_1.createCrmUri(url, this._customControlProperties.propBagData.clientData);
    };
    Utility.prototype.createServerUri = function (url) {
        if (!this._customControlProperties || !this._customControlProperties.propBagData || !this._customControlProperties.propBagData.clientData) {
            return url;
        }
        return CustomControlHelper_1.createCrmUri(url, this._customControlProperties.propBagData.clientData);
    };
    // Partially/unimplemented, requires work by non CCF workstreams
    Utility.prototype.openInBrowser = function (url) {
        if (url) {
            // TODO: Native bridge part
            window.open(url);
        }
    };
    Utility.prototype.getServiceUri = function (url) {
        return "";
    };
    // CCF owned, need implementation
    Utility.prototype.setState = function (state) {
        var personalizationConfig = this._customControlProperties.personalizationConfiguration;
        if (personalizationConfig) {
            if (personalizationConfig.areaType === "form") {
                this._customControlProperties.actions.setFieldControlPersonalization(personalizationConfig, state);
            }
            if (personalizationConfig.areaType === "grid") {
                this._customControlProperties.actions.setGridControlPersonalization(personalizationConfig, state);
            }
            if (personalizationConfig.areaType === "dashboard") {
                this._customControlProperties.actions.setDashboardControlPersonalization(personalizationConfig, state);
            }
        }
        return this._customControlProperties.propBagMethods.utils.setState(state);
    };
    Utility.prototype.crmUrlEncode = function (s) {
        return this._customControlProperties.propBagData.utilsData.encoder.CrmUrlEncode(s);
    };
    Utility.prototype.crmHtmlEncode = function (s) {
        return this._customControlProperties.propBagData.utilsData.encoder.CrmHtmlEncode(s);
    };
    Utility.prototype.isNullOrUndefined = function (object) {
        return CCFUtils.IsNullOrUndefined(object);
    };
    Utility.prototype.notifyOutputChanged = function () {
    };
    Utility.prototype.eventListenerExists = function (eventName) {
        var parentDefinedControlProps = this._customControlProperties.parentDefinedControlProps;
        if (!CCFUtils.IsNullOrUndefined(parentDefinedControlProps)
            && !(CCFUtils.IsNullOrUndefined(parentDefinedControlProps.eventListeners))) {
            var listeners = parentDefinedControlProps.eventListeners;
            for (var iterator = 0; iterator < listeners.length; iterator++) {
                if (listeners[iterator].eventname.toLowerCase() === eventName.toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    };
    Utility.prototype.getElementByRef = function (refId) {
        return null;
    };
    // These utils are candidates for deprecation, no-op for now
    Utility.prototype.disablePanoramaScroll = function (value) {
        return false;
    };
    Utility.prototype.scrollToView = function (controlContainer) {
    };
    Utility.prototype.setNotification = function (msg, id) {
        return false;
    };
    Utility.prototype.clearNotification = function (id) {
        return false;
    };
    Utility.prototype.triggerOfflineMetadataSync = function () {
        return this._customControlProperties.actions.triggerOfflineMetadataSync();
    };
    Utility.prototype.addGlobalNotification = function (type, level, message, title, action, onCloseHandler) {
        return XrmProxy_1.default.addGlobalNotification(type, level, message, title, action, onCloseHandler);
    };
    Utility.prototype.clearGlobalNotification = function (id) {
        return XrmProxy_1.default.clearGlobalNotification(id);
    };
    Utility.prototype.retrieveFormWithAttributes = function (entityName, formId, formType) {
        return this._customControlProperties.actions.retrieveFormWithAttributes(entityName, formId, formType);
    };
    return Utility;
}());
exports.Utility = Utility;

},{"../../Utilities/CCFPerformanceTracker":69,"../../Utilities/CustomControlHelper":71,"../../Utilities/DefaultControlMapper":72,"../../Utilities/PerformanceStopwatch":77,"../../Utilities/XrmProxy":80,"./../CustomControlUtilityPointers":56}],67:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var PropertyBagFactory = (function () {
    function PropertyBagFactory(customControlProperties, externalUtils) {
        this._customControlProperties = customControlProperties;
        this._externalUtils = externalUtils;
    }
    PropertyBagFactory.prototype.getInstance = function (instance) {
        return new instance(this._customControlProperties, this._externalUtils);
    };
    return PropertyBagFactory;
}());
exports.PropertyBagFactory = PropertyBagFactory;

},{}],68:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var LAYOUT_PROPERTY = "layout";
exports.LAYOUT_PROPERTY = LAYOUT_PROPERTY;

},{}],69:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Default performance event creator
 */
var DefaultCreatePerformanceEvent = {
    createMarker: function (parameters, retroactiveTimestamp) {
    },
    startStopwatch: function (parameters) {
        return function stop(stopParameters) {
        };
    },
    createRetroactiveStopwatch: function (startTime, duration, parameters) {
    },
};
/**
 * Interface for creating performance events
 */
var CCFPerformanceTracker = (function () {
    function CCFPerformanceTracker() {
        this._creator = null;
    }
    /**
     * Sets the performance event creator
     * @param eventCreator Creator for performance events
     * @param addKpi Function that creates KPIs
     * @param addKpiOnIdle Function that creates a KPI once the app is idle
     * @param trackWork Tracks a block of work in the PerformanceTracker
     */
    CCFPerformanceTracker.prototype.setPerformanceHooks = function (eventCreator, addKpi, addKpiOnIdle, trackWork) {
        this._creator = eventCreator;
        this._addKpi = addKpi;
        this._addKpiOnIdle = addKpiOnIdle;
        this._trackWork = trackWork;
    };
    /**
     * Creates a performance event
     * @param eventName The event name
     * @param logLevel Level of the log message
     * @param zone The event zone. If omitted defaults to "CustomControlsFramework"
     */
    CCFPerformanceTracker.prototype.createPerformanceEvent = function (eventName, logLevel, zone) {
        if (zone === void 0) { zone = "CustomControlsFramework"; }
        if (this._creator && (logLevel > 2 /* Warning */)) {
            return this._creator(eventName, zone);
        }
        return DefaultCreatePerformanceEvent;
    };
    /**
     * Logs a key performance indicator at the current or given time.
     * The indicator will appear as a marker in the timeline.
     * @param name The name of the key performance indicator.
     * @param parameters Additional parameters to attach to the performance indicator, if any.
     * @param retroactiveTimestamp Timestamp for the marker for this KPI. If null, current time will be used.
     */
    CCFPerformanceTracker.prototype.addKeyPerformanceIndicator = function (name, parameters, retroactiveTimestamp) {
        if (this._addKpi) {
            this._addKpi(name, parameters, retroactiveTimestamp);
        }
    };
    /**
     * Logs a key performance indicator at the point when the current block of work ends.
     * The indicator will appear as a marker in the timeline.
     * @param name The name of the key performance indicator.
     * @param parameters Additional parameters to attach to the performance indicator, if any.
     */
    CCFPerformanceTracker.prototype.addKeyPerformanceIndicatorOnIdle = function (name, parameters) {
        if (this._addKpiOnIdle) {
            this._addKpiOnIdle(name, parameters);
        }
    };
    /**
     * Tracks a block of work in the PerformanceTracker.
     * @param diagnosticId A human-readable ID that describes the work.
     */
    CCFPerformanceTracker.prototype.trackWork = function (diagnosticId) {
        if (this._trackWork) {
            return this._trackWork(diagnosticId);
        }
        return function () { };
    };
    return CCFPerformanceTracker;
}());
exports.CCFPerformanceTracker = CCFPerformanceTracker;
/**
 * Singleton instance of the tracker.
 */
var instance = new CCFPerformanceTracker();
exports.default = instance;

},{}],70:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/* tslint:disable:crm-force-fields-private */
/**
 * Custom Control Constants
 */
var CustomControlConstants = (function () {
    function CustomControlConstants() {
    }
    /**
     * LearningPath DOM Attribute Name
     */
    CustomControlConstants.LearningPathAttributeSuffix = "lp-id";
    CustomControlConstants.LearningPathAttributeName = "data-" + CustomControlConstants.LearningPathAttributeSuffix;
    return CustomControlConstants;
}());
exports.CustomControlConstants = CustomControlConstants;
/* tslint:enable:crm-force-fields-private */

},{}],71:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var CCFUtils = require("../Models/CustomControlUtilityPointers");
var XrmProxy_1 = require("./XrmProxy");
var CustomControlUtilityPointers_1 = require("../Models/CustomControlUtilityPointers");
var CUSTOM_CONTROL_ID_SEPARATOR = "-";
var DEFAULT_OPENRECORD_BUTTONID = "Mscrm.OpenRecordItem";
/**
 * Get unique id for custom control
 * @param props The custom control hosts props
 * @param id The id of component
 * @param absoluteId The absolute id of component
 * @returns The unique id for custom control
 */
function buildUniqueCustomControlId(props, id, absoluteId) {
    if (absoluteId) {
        return absoluteId;
    }
    if (!id) {
        return id;
    }
    var childDomId = buildChildDomId(props);
    return (childDomId ? childDomId + CUSTOM_CONTROL_ID_SEPARATOR : "") + id;
}
exports.buildUniqueCustomControlId = buildUniqueCustomControlId;
/**
 * Get child DomId for custom control
 * @param props The custom control hosts props
 * @returns The child unique id prefix for custom control
 */
function buildChildDomId(props) {
    var domId = "";
    if (props.descriptor) {
        domId = props.descriptor.DomId ? props.descriptor.DomId : "";
    }
    var controlId = props.controlId ? props.controlId : "";
    return (domId ? domId + CUSTOM_CONTROL_ID_SEPARATOR : "") + (controlId ? controlId : "");
}
exports.buildChildDomId = buildChildDomId;
/**
 * Get a unique deterministic id for the custom control, to be used as the value for a data attribute for automated tests.
 * @param props The custom control hosts props
 * @param testhookId An id unique to the base custom control to be used as the suffix of the testhook id
 */
function buildTesthookId(props, testhookId) {
    var controlId = (props && props.controlId) ? props.controlId : "";
    if (!testhookId) {
        return controlId || "";
    }
    return (controlId ? controlId + CUSTOM_CONTROL_ID_SEPARATOR : "") + testhookId;
}
exports.buildTesthookId = buildTesthookId;
/**
 * Get tabindex value for the control
 * @param props The custom control hosts props
 * @returns The tabindex value for custom control
 */
function buildTabIndexValue(props) {
    if (!CCFUtils.IsNullOrUndefined(props) && !CCFUtils.IsNullOrUndefined(props.propBagData)
        && !CCFUtils.IsNullOrUndefined(props.propBagData.accessibilityData)
        && !CCFUtils.IsNullOrUndefined(props.propBagData.accessibilityData.assignedTabIndex)) {
        return props.propBagData.accessibilityData.assignedTabIndex;
    }
    return 0;
}
exports.buildTabIndexValue = buildTabIndexValue;
/**
 * Gets whether the high contrast setting is enabled or not
 * @returns The high contrast enabled value
 */
function getHighContrastEnabled() {
    var isHighContrastEnabed = false;
    var highContrastMediaFeatue = "(-ms-high-contrast: active)";
    var mediaQuery = window.matchMedia(highContrastMediaFeatue);
    if (mediaQuery.matches) {
        isHighContrastEnabed = true;
        return isHighContrastEnabed;
    }
    var htmlTag = document.getElementsByTagName("html");
    isHighContrastEnabed = (htmlTag[0].getAttribute("hc") != null);
    return isHighContrastEnabed;
}
exports.getHighContrastEnabled = getHighContrastEnabled;
/**
 * Focus element with required identifier
 * @param props The custom control hosts props
 * @param id The id of component
 * @param isAbsoluteId Flag is "id" parameter it is absolute id or parted accessibility id
 */
function focusElementById(props, id, isAbsoluteId) {
    var identifier = _extractAccessibilityIdentifier(props, id, isAbsoluteId);
    if (!identifier || identifier === null) {
        return;
    }
    var element = document.getElementById(identifier);
    if (!element || element === null) {
        return;
    }
    element.focus();
}
exports.focusElementById = focusElementById;
/**
 * Blur element with required identifier
 * @param props The custom control hosts props
 * @param id The id of component
 * @param isAbsoluteId Flag is "id" parameter it is absolute id or parted accessibility id
 */
function blurElementById(props, id, isAbsoluteId) {
    var identifier = _extractAccessibilityIdentifier(props, id, isAbsoluteId);
    if (!identifier || identifier === null) {
        return;
    }
    var element = document.getElementById(identifier);
    if (!element || element === null) {
        return;
    }
    element.blur();
}
exports.blurElementById = blurElementById;
/**
 * To make decisions about what type of identity we want, and returns it
 * @param props The custom control hosts props
 * @param id The id of component
 * @param isAbsoluteId Flag is "id" parameter it is absolute id or parted accessibility id
 */
function _extractAccessibilityIdentifier(props, id, isAbsoluteId) {
    if (!id) {
        return;
    }
    return (isAbsoluteId === true) ? id : buildUniqueCustomControlId(props, id);
}
/**
 * Create a CRM URI based on a relative path, prepending the org name if necessary
 * @param url The relative path
 * @param data Client data from property bag
 * @return The relative path with the org name prepended if necessary
 */
function createCrmUri(url, data) {
    var organizationUniqueName = (data.organizationUniqueName) ? data.organizationUniqueName : "";
    var usePathBasedUrls = (data.usePathBasedUrls) ? data.usePathBasedUrls : false;
    if (usePathBasedUrls && organizationUniqueName) {
        return "/" + organizationUniqueName + url;
    }
    return url;
}
exports.createCrmUri = createCrmUri;
/**
 * Create an action for openDatasetItem usage
 */
function openDatasetItemAction(ownProps, param, paramKey, entityReference) {
    if (!entityReference) {
        return;
    }
    var entityName = entityReference.entityName || entityReference.LogicalName;
    var entityReferenceId = entityReference.id || (entityReference.Id && entityReference.Id.toString());
    var recordSetQueryKey = getRecordSetQueryFromProps(ownProps, paramKey);
    var openFormAction = function () {
        try {
            XrmProxy_1.default.openForm({ entityName: entityName, entityId: entityReferenceId, recordSetQueryKey: recordSetQueryKey });
        }
        catch (e) {
            if (ownProps.propBagMethods.navigation && ownProps.propBagMethods.navigation.openEditForm) {
                ownProps.propBagMethods.navigation.openEditForm(entityReference);
            }
        }
    };
    if (param.retrieveRecordCommand) {
        var successCallback = function (commandObjectWrappers) {
            if (commandObjectWrappers && commandObjectWrappers.length > 0) {
                commandObjectWrappers[0].execute();
            }
            else {
                openFormAction();
            }
        };
        var failureCallback = function () { openFormAction(); };
        param.retrieveRecordCommand([entityReferenceId], [DEFAULT_OPENRECORD_BUTTONID]).then(successCallback, failureCallback);
    }
    else {
        openFormAction();
    }
}
exports.openDatasetItemAction = openDatasetItemAction;
function getRecordSetQueryFromProps(ownProps, paramKey) {
    var params = paramKey && ownProps.dynamicData ? ownProps.dynamicData.parameters[paramKey] : null;
    return ownProps.actions && ownProps.actions.getRecordSetQueryKey && params !== null
        ? ownProps.actions.getRecordSetQueryKey(params)
        : null;
}
exports.getRecordSetQueryFromProps = getRecordSetQueryFromProps;
/**
     * determines parentId from props
     * @param props custom control props
     */
function getParentIdFromProps(props) {
    var uniqueId = buildChildDomId(props);
    var idComponents = uniqueId.split(CUSTOM_CONTROL_ID_SEPARATOR);
    var i;
    for (i = 0; i < idComponents.length - 1; i++)
        if (idComponents[i] !== "id" && isNaN(Number(idComponents[i]))) {
            return idComponents[i];
        }
    return "";
}
exports.getParentIdFromProps = getParentIdFromProps;
/**
 * Convert FetchXml Snippet to Custom Control Filtering Expression
 * @param inputFetchXmlSnippet
 * @returns Converted String
 */
function convertFetchXmlToFilterExpression(inputFetchXmlSnippet) {
    if (!inputFetchXmlSnippet) {
        return null;
    }
    var domParser = new DOMParser();
    var inputXmlDocument = domParser.parseFromString(inputFetchXmlSnippet, "text/xml");
    if (inputXmlDocument) {
        var filterElements = inputXmlDocument.getElementsByTagName("filter");
        if (!filterElements || filterElements.length === 0) {
            return null;
        }
        return generateFilteringExpression(filterElements[0]);
    }
    return null;
}
exports.convertFetchXmlToFilterExpression = convertFetchXmlToFilterExpression;
/**
 * Convert Custom Control Filtering Expression Snippet to filterXml
 * @param filterExpression The Filter expression to be converted
 * @param xmlEncode XmlEncoding method to be used to xmlEncode the attribute values
 * @returns Converted String
 */
function convertFilterExpressionToFetchXml(filterExpression, xmlEncode) {
    // Check if passed encoding method is not null or defined. If it is, don't encode.
    if (!xmlEncode) {
        xmlEncode = function (s) { return s; };
    }
    var xml = "";
    if (CustomControlUtilityPointers_1.IsNullOrUndefined(filterExpression) ||
        ((CustomControlUtilityPointers_1.IsNullOrUndefined(filterExpression.filters) || filterExpression.filters.length === 0) &&
            (CustomControlUtilityPointers_1.IsNullOrUndefined(filterExpression.conditions) || filterExpression.conditions.length === 0))) {
        return xml;
    }
    else if (!CustomControlUtilityPointers_1.IsNullOrUndefined(filterExpression.conditions) && filterExpression.conditions.length > 0) {
        xml += "<filter type=\"" + getFilterOperator(filterExpression.filterOperator) + "\"";
        xml += ">";
        for (var i = 0; i < filterExpression.conditions.length; i++) {
            var condition = filterExpression.conditions[i];
            xml += "<condition ";
            if (!CustomControlUtilityPointers_1.IsNullOrEmptyString(condition.entityAliasName)) {
                xml += "entityname=\"" + condition.entityAliasName + "\" ";
            }
            if (condition.value == null) {
                xml += "attribute=\"" + condition.attributeName + "\" operator=\"" + getConditionOperator(condition.conditionOperator) + "\"/>";
            }
            else if (typeof condition.value === "string") {
                xml += "attribute=\"" + condition.attributeName + "\" operator=\"" + getConditionOperator(condition.conditionOperator) + "\" value=\"" + xmlEncode(condition.value) + "\" />";
            }
            else {
                var argValues = condition.value;
                xml += "attribute=\"" + condition.attributeName + "\" operator=\"" + getConditionOperator(condition.conditionOperator) + "\">";
                for (var j = 0; j < argValues.length; j++) {
                    xml += "<value>" + xmlEncode(argValues[j]) + "</value>";
                }
                xml += "</condition>";
            }
        }
        xml += "</filter>";
    }
    else {
        if (filterExpression.filters.length > 0) {
            xml += "<filter type=\"" + getFilterOperator(filterExpression.filterOperator) + "\">";
        }
        for (var i = 0; i < filterExpression.filters.length; i++) {
            xml += convertFilterExpressionToFetchXml(filterExpression.filters[i], xmlEncode);
        }
        if (filterExpression.filters.length > 0) {
            xml += "</filter>";
        }
    }
    return xml;
}
exports.convertFilterExpressionToFetchXml = convertFilterExpressionToFetchXml;
/**
 * Convert Filter Operator string value from the CustomControlInterfaces.FilterOperator
 * @param filter operator value defined in CustomControlInterfaces.FilterOperator
 * @return mapped filter opeartor value
 */
function getFilterOperator(filterOperator) {
    switch (filterOperator) {
        case 0:
            return "and";
        case 1:
            return "or";
    }
}
/**
 * Convert Condition Operator string value from the CustomControlInterfaces.ConditionOperator
 * @param condition operator value defined in CustomControlInterfaces.ConditionOperator
 * @return mapped condition opeartor value
 */
function getConditionOperator(conditionOperator) {
    switch (conditionOperator) {
        case 0:
            return "eq";
        case 1:
            return "neq";
        case 2:
            return "gt";
        case 3:
            return "lt";
        case 4:
            return "ge";
        case 5:
            return "le";
        case 6:
            return "like";
        case 8:
            return "in";
        case 12:
            return "null";
        case 14:
            return "yesterday";
        case 15:
            return "today";
        case 16:
            return "tomorrow";
        case 17:
            return "last_seven_days";
        case 18:
            return "next_seven_days";
        case 19:
            return "last_week";
        case 20:
            return "this_week";
        case 22:
            return "last_month";
        case 23:
            return "this_month";
        case 25:
            return "on";
        case 26:
            return "on_or_before";
        case 27:
            return "on_or_after";
        case 28:
            return "last_year";
        case 29:
            return "this_year";
        case 49:
            return "contain_values";
        case 70:
            return "in_fiscal_period_and_year";
        case 75:
            return "above";
        case 76:
            return "under";
        case 77:
            return "not_under";
        case 78:
            return "eq_or_above";
        case 79:
            return "eq_or_under";
    }
}
/**
 * Generate Filtering Expression
 * @param inputFilterElement inputFilterElement
 * @return generated filter expression
 */
function generateFilteringExpression(inputFilterElement) {
    if (!inputFilterElement || typeof inputFilterElement === "string") {
        return null;
    }
    var filterElement = inputFilterElement;
    var filterOperator = getNodeAttributeValueFromName(filterElement, "type");
    var convertedFilterOperator = convertFilterOperator(filterOperator);
    if (convertedFilterOperator === null || !filterElement.childNodes || filterElement.childNodes.length === 0) {
        return null;
    }
    var childFilterExpressions = [];
    var conditionExpressions = [];
    for (var index = 0; index < filterElement.childNodes.length; index++) {
        var currentElement = filterElement.childNodes.item(index);
        if (typeof currentElement === "string" || (currentElement.nodeName !== "filter" && currentElement.nodeName !== "condition")) {
            continue;
        }
        if (currentElement.nodeName === "filter") {
            var generatedChildFilterExpression = generateFilteringExpression(currentElement);
            if (generatedChildFilterExpression) {
                childFilterExpressions.push(generatedChildFilterExpression);
            }
        }
        else if (currentElement.nodeName === "condition") {
            var attributeValue = getNodeAttributeValueFromName(currentElement, "attribute");
            var operatorValue = getNodeAttributeValueFromName(currentElement, "operator");
            var convertedConditionOperator = convertConditionOperator(operatorValue);
            if (convertedConditionOperator !== null && attributeValue) {
                var value = void 0;
                if (isOperatorSupportsMultipleValues(operatorValue)) {
                    value = [];
                    if (currentElement.childNodes) {
                        for (var valueElementIndex = 0; valueElementIndex < currentElement.childNodes.length; valueElementIndex++) {
                            var childValueElement = currentElement.childNodes.item(valueElementIndex);
                            if (typeof childValueElement === "string" || childValueElement.nodeName !== "value") {
                                continue;
                            }
                            var rawValueString = childValueElement.firstChild ? childValueElement.firstChild.nodeValue : null;
                            if (typeof rawValueString !== "string") {
                                continue;
                            }
                            var valueString = rawValueString.toString();
                            value.push(valueString);
                        }
                    }
                }
                else {
                    value = getNodeAttributeValueFromName(currentElement, "value");
                }
                var condtionExpression = {
                    attributeName: attributeValue,
                    conditionOperator: convertedConditionOperator,
                    value: value,
                };
                conditionExpressions.push(condtionExpression);
            }
        }
    }
    return {
        filters: childFilterExpressions,
        filterOperator: convertedFilterOperator,
        conditions: conditionExpressions,
    };
}
/**
 * Return if the operator supports multiple values
 * @param operatorName operator Name
 * @return if the operatorName supports multiple value
 */
function isOperatorSupportsMultipleValues(operatorName) {
    return operatorName === "in" || operatorName === "in-fiscal-period-and-year";
}
/**
 * Convert condition operator to MS CRM number
 * @param conditionOperator conditionOperator name
 * @return Mscrm operator value
 */
function convertConditionOperator(conditionOperator) {
    if (!conditionOperator) {
        return null;
    }
    switch (conditionOperator) {
        case "eq":
            return 0 /* Equal */;
        case "ne":
            return 1 /* NotEqual */;
        case "ge":
            return 4 /* GreaterEqual */;
        case "gt":
            return 2 /* GreaterThan */;
        case "le":
            return 5 /* LessEqual */;
        case "lt":
            return 3 /* LessThan */;
        case "on":
            return 25 /* On */;
        case "on-or-before":
            return 26 /* OnOrBefore */;
        case "on-or-after":
            return 27 /* OnOrAfter */;
        case "like":
            return 6 /* Like */;
        case "in":
            return 8 /* In */;
        case "null":
            return 12 /* Null */;
        case "yesterday":
            return 14 /* Yesterday */;
        case "today":
            return 15 /* Today */;
        case "tomorrow":
            return 16 /* Tomorrow */;
        case "last-seven-days":
            return 17 /* Last7Days */;
        case "next-seven-days":
            return 18 /* Next7Days */;
        case "last-week":
            return 19 /* LastWeek */;
        case "this-week":
            return 20 /* ThisWeek */;
        case "last-month":
            return 22 /* LastMonth */;
        case "this-month":
            return 23 /* ThisMonth */;
        case "last-year":
            return 28 /* LastYear */;
        case "this-year":
            return 29 /* ThisYear */;
        case "last-x-days":
            return 33 /* LastXDays */;
        case "next-x-days":
            return 34 /* NextXDays */;
        case "last-x-months":
            return 37 /* LastXMonths */;
        case "next-x-months":
            return 38 /* NextXMonths */;
        case "in-fiscal-period-and-year":
            return 70 /* InFiscalPeriodAndYear */;
        case "above":
            return 75 /* Above */;
        case "under":
            return 76 /* Under */;
        case "not-under":
            return 77 /* NotUnder */;
        case "eq-or-above":
            return 78 /* AboveOrEqual */;
        case "eq-or-under":
            return 79 /* UnderOrEqual */;
    }
    return null;
}
/**
 * Convert filter operator to MS CRM number
 * @param filterOperator conditionOperator name
 * @return Mscrm operator value
 */
function convertFilterOperator(filterOperator) {
    if (!filterOperator) {
        return null;
    }
    switch (filterOperator) {
        case "and":
            return 0 /* And */;
        case "or":
            return 1 /* Or */;
    }
    return null;
}
/**
 * Get Node attribute value from name
 * @param inputNode input node
 * @param attribuetName attribute name
 * @returns return the attribute value
 */
function getNodeAttributeValueFromName(inputNode, attribuetName) {
    if (!inputNode) {
        return null;
    }
    var nodeAttributeMap = inputNode.attributes.getNamedItem(attribuetName);
    return nodeAttributeMap ? nodeAttributeMap.value : null;
}
function willUpdatePagingIndex(existedFirstPageNumber, existedLastPageNumber, nextFirstPageNumber, nextLastPageNumber) {
    if (pagingInputValid(existedFirstPageNumber, nextFirstPageNumber, existedLastPageNumber, nextLastPageNumber)) {
        return existedFirstPageNumber < nextFirstPageNumber && existedLastPageNumber >= nextLastPageNumber ||
            existedFirstPageNumber <= nextFirstPageNumber && existedLastPageNumber > nextLastPageNumber;
    }
    return false;
}
exports.willUpdatePagingIndex = willUpdatePagingIndex;
function willLoadNextPage(existedFirstPageNumber, nextFirstPageNumber, existedLastPageNumber, nextLastPageNumber) {
    if (pagingInputValid(existedFirstPageNumber, nextFirstPageNumber, existedLastPageNumber, nextLastPageNumber)) {
        return nextLastPageNumber - existedLastPageNumber === 1 && existedFirstPageNumber <= nextFirstPageNumber;
    }
    return false;
}
exports.willLoadNextPage = willLoadNextPage;
function willLoadPrevPage(existedFirstPageNumber, nextFirstPageNumber, existedLastPageNumber, nextLastPageNumber) {
    if (pagingInputValid(existedFirstPageNumber, nextFirstPageNumber, existedLastPageNumber, nextLastPageNumber)) {
        return existedFirstPageNumber - nextFirstPageNumber === 1 && existedLastPageNumber >= nextLastPageNumber;
    }
    return false;
}
exports.willLoadPrevPage = willLoadPrevPage;
function pagingInputValid(pageNumber1, pageNumber2, pageNumber3, pageNumber4) {
    if (pageNumber1 && pageNumber2 && pageNumber3 && pageNumber4 && pageNumber1 > 0 && pageNumber2 > 0 && pageNumber3 > 0 && pageNumber4 > 0) {
        return true;
    }
    return false;
}
exports.pagingInputValid = pagingInputValid;

},{"../Models/CustomControlUtilityPointers":56,"./XrmProxy":80}],72:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var ManifestType_1 = require("./ManifestType");
var GuidHelper_1 = require("./GuidHelper");
/**
 * Name of the field section item
 */
var FIELD_SECTION_ITEM_ID = "MscrmControls.Containers.FieldSectionItem";
var DUMMY_CONTROL_ITEM_ID = "MscrmControls.FieldControls.DummyControl";
var LABEL_CONTROL_ID = "MscrmControls.FieldControls.LabelControl";
var GRID_CONTROL_ID = "MscrmControls.Grid.GridControl";
var READ_ONLY_GRID_CONTROL_ID = "MscrmControls.Grid.ReadOnlyGrid";
var SHAREPOINT_GRID_CONTROL_ID = "MscrmControls.SharepointAssociatedGrid.SharepointControl";
var RELEVANCE_SEARCH_CONTROL_ID = "MscrmControls.Containers.RelevanceSearchControl";
var SEARCH_WIDGET_CONTROL_ID = "MscrmControls.KbSearchControl.KbSearchControl";
var EMAILENGAGEMENT_CONTROL_ID = "MscrmControls.EmailEngagement.EmailView";
var REFERENCE_PANEL_SEARCH_WIDGET_CONTROL_ID = "MscrmControls.KbSearchControl.KbSearchControl";
var TIMER_CONTROL_ID = "MscrmControls.FieldControls.TimerControl";
var NEWEMAILEDITOR_CONTROL_ID = "MscrmControls.ActivityEditorControl.ActivityEditorControl";
var CALENDAR_CONTROL_ID = "MscrmControls.Calendar.CalendarControl";
var TIMELINE_CONTROL_ID = "MscrmControls.Timeline.TimelineControl";
var ACTIONCARD_CONTROL_ID = "MscrmControls.ActionCard.ActionCardView";
var DASHBOARD_CONTROL_ID = "MscrmControls.Containers.DashboardControl";
var CHART_CONTROL_ID = "MscrmControls.Chart.ChartControl";
var GRID_CLASS_ID = "{E7A81278-8635-4D9E-8D4D-59480B391C5B}";
var LABEL_CLASS_ID = "{39354E4A-5015-4D74-8031-EA9EB73A1322}";
var SEARCH_WIDGET_CLASS_ID = "{e616a57f-20e0-4534-8662-a101b5ddf4e0}";
var EMAILENGAGEMENT_CLASS_ID = "{26E9760F-7454-40DE-BB07-F6DCCCB82040}";
var REFERENCE_PANEL_SEARCH_WIDGET_CLASS_ID = "{7CCD1494-1F7A-4E3A-8BDE-F32069DAEB9F}";
var TIMER_CLASS_ID = "{9c5ca0a1-ab4d-4781-be7e-8dfbe867b87e}";
var EMAILEDITOR_CLASS_ID = "{6F3FB987-393B-4d2d-859F-9D0F0349B6AD}";
var ISHEDITOR_CLASS_ID = "{F94DB24F-263D-44A7-B38E-A35E9854812B}";
var TWO_OPTION_PICKLIST = "3ef39988-22bb-4f0b-bbbe-64b5a3748aee";
var TWO_OPTION_RADIO = "67fac785-cd58-4f9f-abb3-4b7ddc6ed5ed";
var TWO_OPTION_CHECKBOX = "b0c6723a-8503-4fd7-bb28-c8a06ac933c2";
var TWO_OPTION_CLASS_ID_MAP = {
    "3ef39988-22bb-4f0b-bbbe-64b5a3748aee": "picklist",
    "67fac785-cd58-4f9f-abb3-4b7ddc6ed5ed": "radio",
    "b0c6723a-8503-4fd7-bb28-c8a06ac933c2": "checkbox",
};
/**
 * Names of the Quick Form controls
 */
var QUICK_FORM_ID = "MscrmControls.Containers.QuickForm";
var QUICK_FORM_CARD_ID = "MscrmControls.Containers.QuickFormCardControl";
var WEBRESOURCEHTML_ID = "MscrmControls.WebResource.WebResourceHtmlControl";
var TIMELINEWALL_ID = "MscrmControls.TimelineWallControl.TimelineWall";
var VALUE_KEY = "value";
/**
 * Memoized configuration
 */
var memoizedProcessControlDefaultConfigs = {};
var memoizedDummyControlDefaultConfigs = {};
var memoizedFieldSectionControlDefaultConfigs = {};
var memoizedQuickFormDefaultConfigs = {};
var memoizedCardDefaultConfigs = {};
var memorizedWebResourceDefaultConfigs = {};
var memoizedLabelControlDefaultConfigs = {};
/**
 * Enum for control modes of component.
 * IMPORTANT: in case of changes please sync them with FieldSectionItem control - it has an equal enum due to impossibility of import this one
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Read"] = 0] = "Read";
    ControlMode[ControlMode["Edit"] = 1] = "Edit";
    ControlMode[ControlMode["Both"] = 2] = "Both";
})(ControlMode || (ControlMode = {}));
/**
 * Enum for displayMode
 */
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Normal"] = 0] = "Normal";
    DisplayMode[DisplayMode["Card"] = 1] = "Card";
})(DisplayMode || (DisplayMode = {}));
/**
 * Enum for labelMode
 */
var LabelMode;
(function (LabelMode) {
    LabelMode[LabelMode["Text"] = 0] = "Text";
    LabelMode[LabelMode["Icon"] = 1] = "Icon";
})(LabelMode || (LabelMode = {}));
var ContainerControlType;
(function (ContainerControlType) {
    ContainerControlType[ContainerControlType["GridContainer"] = 0] = "GridContainer";
    ContainerControlType[ContainerControlType["DashboardContainer"] = 1] = "DashboardContainer";
    ContainerControlType[ContainerControlType["QuickCreateForm"] = 2] = "QuickCreateForm";
    ContainerControlType[ContainerControlType["FieldSectionContainer"] = 3] = "FieldSectionContainer";
    ContainerControlType[ContainerControlType["TimelineContainer"] = 4] = "TimelineContainer";
    ContainerControlType[ContainerControlType["ChartControl"] = 5] = "ChartControl";
    ContainerControlType[ContainerControlType["WebresourceControl"] = 6] = "WebresourceControl";
    ContainerControlType[ContainerControlType["DummyControl"] = 7] = "DummyControl";
    ContainerControlType[ContainerControlType["CalendarControl"] = 8] = "CalendarControl";
})(ContainerControlType || (ContainerControlType = {}));
exports.ContainerControlType = ContainerControlType;
/**
 * Get the primary parameter in a config
 * @param config The config
 * @returns the primary parameter
 */
function _getPrimaryParameter(config) {
    for (var propKey in config.Parameters) {
        var fieldParam = config.Parameters[propKey];
        if (fieldParam.Primary) {
            return fieldParam;
        }
    }
    return null;
}
/**
 * Wrap a form XML defined field config in a fieldSectionItem
 * @param primaryParameter Control primary parameter definition
 * @returns A config for the field section item containing the value specification parameter
 */
function _getValueSpecificationParameterConfig(primaryParameter) {
    return {
        Usage: 1 /* Input */,
        Static: true,
        Type: ManifestType_1.ManifestType.SingleLineText,
        Value: JSON.stringify(primaryParameter),
        Primary: false,
    };
}
/**
 * Wrap a form XML defined field config in a fieldSectionItem
 * @param primaryParameter Control primary parameter definition
 * @returns A config for the field section item containing the value specification parameter
 */
function _getFieldRenderParameterConfig(classId) {
    return {
        Usage: 1 /* Input */,
        Static: true,
        Type: ManifestType_1.ManifestType.SingleLineText,
        Value: TWO_OPTION_CLASS_ID_MAP[classId],
        Primary: false,
    };
}
/**
 * Gets the control ControlMode based on Control DataType
 */
function getControlMode(dataType) {
    return (dataType === ManifestType_1.ManifestType.Timer) ? ControlMode.Read : ControlMode.Both;
}
/**
 * Gets the control PropertyUsage based on Control DataType
 */
function getPropertyUsage(dataType) {
    return (dataType === ManifestType_1.ManifestType.Timer) ? 2 /* Output */ : 1 /* Input */;
}
/**
 * Get DataFieldName for Timer control
 * Timer control is not bound to a DataFieldName but still needs to be used with FieldSection control
 * Hence we explictly set the DataFieldName to FailureTimeField of the Timer
 * @param descriptor
 * @returns A string with DataFieldName
 */
function getDataFieldNameForTimer(descriptor, TIMER_CONTROL_DATAFIELDNAME_KEY) {
    if (descriptor.Parameters != null) {
        if (descriptor.Parameters.hasOwnProperty(TIMER_CONTROL_DATAFIELDNAME_KEY) && descriptor.Parameters[TIMER_CONTROL_DATAFIELDNAME_KEY] != null) {
            return descriptor.Parameters[TIMER_CONTROL_DATAFIELDNAME_KEY];
        }
    }
    return "";
}
exports.getDataFieldNameForTimer = getDataFieldNameForTimer;
/**
 * Wrap a form XML defined field config in a fieldSectionItem
 * @param explicitConfig The form XML config
 * @returns A config for the field section item containing the value specification parameter
 */
function getFieldSectionItemSpecificationParameters(explicitConfig, classId) {
    if (explicitConfig.CustomControlId !== FIELD_SECTION_ITEM_ID) {
        return null;
    }
    var primaryParameter = _getPrimaryParameter(explicitConfig);
    if (isRequiredTwoOptionRenderMode(classId)) {
        return {
            "valueSpecification": _getValueSpecificationParameterConfig(primaryParameter),
            "twoOptionRenderParam": _getFieldRenderParameterConfig(classId),
        };
    }
    else {
        return {
            "valueSpecification": _getValueSpecificationParameterConfig(primaryParameter),
        };
    }
}
exports.getFieldSectionItemSpecificationParameters = getFieldSectionItemSpecificationParameters;
/**
 * Checks if the control with given ID is supposed to be a FieldSectionItem.
 * @param controlId string containing control identifier.
 * @returns True if the control id is the FieldSectionItem known ID, false otherwise.
 */
function isFieldSectionItemControl(controlId) {
    return (controlId === FIELD_SECTION_ITEM_ID || controlId === WEBRESOURCEHTML_ID);
}
exports.isFieldSectionItemControl = isFieldSectionItemControl;
/**
 * Checks if the control need renderMode property to be added.
 * @param classId string containing guid class Id for the given control.
 * @returns True if the control required renderMode property
 */
function isRequiredTwoOptionRenderMode(classId) {
    return (classId &&
        classId === TWO_OPTION_CHECKBOX ||
        classId === TWO_OPTION_RADIO ||
        classId === TWO_OPTION_PICKLIST);
}
/**
 * Wrap a form XML defined field config in a fieldSectionItem
 * @param explicitConfig The form XML config
 * @returns A config for the field section item containing the control config
 */
function wrapFieldLevelConfig(explicitConfig, manifest) {
    var primaryParameter = _getPrimaryParameter(explicitConfig);
    if (!primaryParameter) {
        return explicitConfig;
    }
    return {
        FormFactor: 2,
        CustomControlId: FIELD_SECTION_ITEM_ID,
        Name: name,
        Version: "1.0.0",
        Parameters: {
            "value": primaryParameter,
            "valueSpecification": _getValueSpecificationParameterConfig(primaryParameter),
            "controlMode": {
                Usage: 1 /* Input */,
                Static: true,
                Type: "Enum",
                Value: ControlMode[manifest.ControlMode],
                Primary: false,
            },
            "displayMode": {
                Usage: 1 /* Input */,
                Static: true,
                Type: "Enum",
                Value: DisplayMode.Normal,
                Primary: false,
            },
            "labelMode": {
                Usage: 1 /* Input */,
                Static: true,
                Type: "Enum",
                Value: LabelMode.Text,
                Primary: false,
            },
        },
        ShouldOverrideControlVisible: explicitConfig.ShouldOverrideControlVisible,
        Children: {
            "field": explicitConfig,
        },
    };
}
exports.wrapFieldLevelConfig = wrapFieldLevelConfig;
/**
 * Create Timer Parameter object
 * @param timerParameters with values available as array of objects
 * @return timerParameters constrcuted in the format of ITimerParameter
 */
function constructTimerParameters(timerParameters) {
    var constructedTimerParameters = {};
    constructedTimerParameters.CancelConditionName = timerParameters.CancelConditionName;
    constructedTimerParameters.CancelConditionValue = timerParameters.CancelConditionValue;
    constructedTimerParameters.FailureConditionName = timerParameters.FailureConditionName;
    constructedTimerParameters.FailureConditionValue = timerParameters.FailureConditionValue;
    constructedTimerParameters.FailureTimeField = timerParameters.FailureTimeField;
    constructedTimerParameters.PauseConditionName = timerParameters.PauseConditionName;
    constructedTimerParameters.PauseConditionValue = timerParameters.PauseConditionValue;
    constructedTimerParameters.SuccessConditionName = timerParameters.SuccessConditionName;
    constructedTimerParameters.SuccessConditionValue = timerParameters.SuccessConditionValue;
    constructedTimerParameters.WarningConditionName = timerParameters.WarningConditionName;
    constructedTimerParameters.WarningConditionValue = timerParameters.WarningConditionValue;
    return constructedTimerParameters;
}
exports.constructTimerParameters = constructTimerParameters;
/**
 * Extend default "value" parameter definition by parameter-specific metadata from control manifest. Modifies parameter definition object.
 * @param defaultValueParameter Parameter definition to extend.
 * @param descriptor Control descriptor
 * @returns Returns defaultValueParameter argument.
 */
function extendDefaultValueParameterByControlDescriptor(defaultValueParameter, descriptor) {
    switch (defaultValueParameter.Type) {
        case ManifestType_1.ManifestType.Grid:
            {
                var gridDescriptor = descriptor;
                var parameters = gridDescriptor.Parameters;
                var gridParameter = defaultValueParameter;
                gridParameter.EnableViewPicker = parameters.EnableViewPicker === "true";
                gridParameter.RelationshipName = parameters.RelationshipName;
                gridParameter.TargetEntityType = parameters.TargetEntityType;
                gridParameter.ViewId = parameters.ViewId || parameters.DefaultViewId || parameters.defaultviewid;
                break;
            }
        case ManifestType_1.ManifestType.LookupSimple:
            {
                var lookupDescriptor = descriptor;
                var parameters = lookupDescriptor.Parameters;
                var lookupParameter = defaultValueParameter;
                // DataSet related parameter fields
                lookupParameter.EnableViewPicker = parameters.EnableViewPicker === "true";
                lookupParameter.TargetEntityType = parameters.TargetEntityType;
                lookupParameter.ViewId = parameters.ViewId || parameters.DefaultViewId || parameters.defaultviewid;
                // Lookup specific parameter fields
                lookupParameter.AllowFilterOff = parameters.AllowFilterOff === "true";
                lookupParameter.AvailableViewIds = parameters.AvailableViewIds;
                lookupParameter.DependentAttributeName = parameters.DependentAttributeName;
                lookupParameter.DependentAttributeType = parameters.DependentAttributeType;
                lookupParameter.DisableQuickFind = parameters.DisableQuickFind === "true";
                lookupParameter.ExtraCondition = parameters.ExtraCondition;
                lookupParameter.FilterRelationshipName = parameters.FilterRelationshipName;
                // checking for MDD lookup parameter structure
                for (var i = 0; i < parameters.length; i++) {
                    var parameter = parameters[i];
                    if (parameter && parameter.TargetEntities && parameter.TargetEntities.length) {
                        if (parameter.TargetEntities.length > 1) {
                            lookupParameter.Type = ManifestType_1.ManifestType.LookupMultiEntity;
                        }
                        var targetEntity = parameter.TargetEntities[0];
                        if (!lookupParameter.ViewId && targetEntity.DefaultViewId) {
                            lookupParameter.ViewId = targetEntity.DefaultViewId;
                        }
                        if (!lookupParameter.TargetEntityType && targetEntity.EntityLogicalName) {
                            lookupParameter.TargetEntityType = targetEntity.EntityLogicalName;
                        }
                    }
                }
                break;
            }
        case ManifestType_1.ManifestType.SingleLineText:
            {
                if (GuidHelper_1.areGuidsSame(LABEL_CLASS_ID, descriptor.ClassId.guid)) {
                    var fieldParameter = defaultValueParameter;
                    fieldParameter.Value = descriptor.Label;
                }
                break;
            }
        case ManifestType_1.ManifestType.Timer:
            {
                var timerDescriptor = descriptor;
                var timerParameters = timerDescriptor.Parameters;
                var timerValueParameter = defaultValueParameter;
                timerValueParameter.TimerParameters = constructTimerParameters(timerParameters);
                break;
            }
    }
    return defaultValueParameter;
}
exports.extendDefaultValueParameterByControlDescriptor = extendDefaultValueParameterByControlDescriptor;
function retrieveLookupManifestName(dataType, attributes) {
    if (dataType === "Lookup.Simple" && attributes && attributes.Targets && attributes.Targets.length === 1 && attributes.Targets[0] === "subject") {
        return "MscrmControls.FieldControls.SubjectTreeControl";
    }
    return "MscrmControls.FieldControls.SimpleLookupControl";
}
/**
 * Retrieve a custom control configuration based on the control's type
 * @param name The name of the control
 * @param dataFieldName The field name of the control
 * @param type The type of the control, presented in a "<Main type>.<Format>" fashion
 * @param descriptorParameters The parameters from control descriptor control
 * @param classId string containing guid class Id for the given control. This parameter
 * is used for the scenario when field control is not implemented and DummyControl is shown instead.
 * Dummy control uses class ID to show which exactly control is not implemented. Dummy control is a
 * temporary solution and will be removed at some point, but there is no precise timeline for that.
 * @param descriptor the Descriptor for this control
 * @param auxInfo auxillary info not included elsewhere on the parameters provided
 */
function retrieveDefaultConfigurationForFieldControl(name, dataFieldName, type, classId, descriptor, auxInfo) {
    if (!dataFieldName) {
        if (type === RELEVANCE_SEARCH_CONTROL_ID) {
            if (!memoizedProcessControlDefaultConfigs[name]) {
                memoizedProcessControlDefaultConfigs[name] = {
                    FormFactor: 2,
                    CustomControlId: RELEVANCE_SEARCH_CONTROL_ID,
                    Name: name,
                    Version: "1.0.0",
                    Parameters: {
                        "value": {
                            Type: ManifestType_1.ManifestType.Search,
                            Primary: true,
                        },
                    },
                    ShouldOverrideControlVisible: false,
                };
            }
            return memoizedProcessControlDefaultConfigs[name];
        }
        if (classId && (GuidHelper_1.areGuidsSame(SEARCH_WIDGET_CLASS_ID, classId) || GuidHelper_1.areGuidsSame(REFERENCE_PANEL_SEARCH_WIDGET_CLASS_ID, classId))) {
            if (!memoizedProcessControlDefaultConfigs[name]) {
                /* tslint:disable:no-string-literal */
                var autoSuggestionFieldValue = descriptor && descriptor.Parameters && descriptor.Parameters["EnableAutoSuggestions"] === "true" && descriptor.Parameters["AutoSuggestionSource"] === "0" ? descriptor.Parameters["SearchForAutoSuggestionsUsing"] : undefined;
                /* tslint:enable:no-string-literal */
                memoizedProcessControlDefaultConfigs[name] = {
                    FormFactor: 2,
                    CustomControlId: SEARCH_WIDGET_CONTROL_ID,
                    Name: name,
                    Version: "1.0.0",
                    Parameters: {
                        "value": {
                            Type: ManifestType_1.ManifestType.SearchWidget,
                            Primary: true,
                        },
                        "AutoSuggestionField": {
                            Type: "all",
                            Primary: false,
                            Static: false,
                            Usage: 0 /* Bound*/,
                            Value: autoSuggestionFieldValue,
                        },
                    },
                    ShouldOverrideControlVisible: false,
                };
            }
            return memoizedProcessControlDefaultConfigs[name];
        }
        if (classId && GuidHelper_1.areGuidsSame(EMAILENGAGEMENT_CLASS_ID, classId)) {
            if (!memoizedProcessControlDefaultConfigs[name]) {
                memoizedProcessControlDefaultConfigs[name] = {
                    FormFactor: 2,
                    CustomControlId: EMAILENGAGEMENT_CONTROL_ID,
                    Name: name,
                    Version: "1.0.0",
                    Parameters: {
                        "value": {
                            Type: ManifestType_1.ManifestType.EmailEngagementRecipientActivity,
                            Primary: true,
                        },
                    },
                    ShouldOverrideControlVisible: false,
                };
            }
            return memoizedProcessControlDefaultConfigs[name];
        }
        if (type === ManifestType_1.ManifestType.WebResourceHtmlControl) {
            if (!memorizedWebResourceDefaultConfigs[name]) {
                memorizedWebResourceDefaultConfigs[name] = {
                    FormFactor: 2,
                    CustomControlId: WEBRESOURCEHTML_ID,
                    Name: name,
                    Version: "1.0.0",
                    Parameters: {
                        "value": {
                            Usage: 0 /* Bound */,
                            Type: ManifestType_1.ManifestType.WebResourceHtmlControl,
                            Value: null,
                            Static: false,
                            Primary: true,
                        },
                    },
                    ShouldOverrideControlVisible: false,
                };
            }
            return memorizedWebResourceDefaultConfigs[name];
        }
        if (type === ManifestType_1.ManifestType.TimelineWall) {
            return {
                FormFactor: 2,
                CustomControlId: TIMELINEWALL_ID,
                Name: name,
                Version: "1.0.0",
                Parameters: {
                    "value": {
                        Type: ManifestType_1.ManifestType.TimelineWall,
                        Primary: true,
                    },
                },
                ShouldOverrideControlVisible: false,
            };
        }
        if (!memoizedDummyControlDefaultConfigs[name]) {
            memoizedDummyControlDefaultConfigs[name] = {
                FormFactor: 2,
                CustomControlId: DUMMY_CONTROL_ITEM_ID,
                Name: name,
                Version: "1.0.0",
                Parameters: {
                    "value": {
                        Usage: 1 /* Input */,
                        Static: true,
                        Type: classId || type,
                        Value: null,
                        Primary: true,
                    },
                    "controlMode": {
                        Usage: 1 /* Input */,
                        Static: true,
                        Type: "Enum",
                        Value: ControlMode.Both,
                        Primary: false,
                    },
                },
                ShouldOverrideControlVisible: false,
            };
        }
        return memoizedDummyControlDefaultConfigs[name];
    }
    if (classId && (GuidHelper_1.areGuidsSame(EMAILEDITOR_CLASS_ID, classId) || GuidHelper_1.areGuidsSame(ISHEDITOR_CLASS_ID, classId))) {
        if (type.includes("memo") || type === ManifestType_1.ManifestType.SingleLineText || type === ManifestType_1.ManifestType.SingleLineTextArea || type === ManifestType_1.ManifestType.Multiple) {
            if (!memoizedProcessControlDefaultConfigs[name]) {
                memoizedProcessControlDefaultConfigs[name] = {
                    FormFactor: 2,
                    CustomControlId: NEWEMAILEDITOR_CONTROL_ID,
                    Name: name,
                    Version: "1.0.0",
                    Parameters: {
                        "value": {
                            Usage: 0 /* Bound */,
                            Static: false,
                            Type: type,
                            Value: dataFieldName,
                            Primary: true,
                        },
                    },
                    ShouldOverrideControlVisible: false,
                };
            }
        }
        return memoizedProcessControlDefaultConfigs[name];
    }
    if (classId && GuidHelper_1.areGuidsSame(LABEL_CLASS_ID, classId)) {
        if (!memoizedLabelControlDefaultConfigs[name]) {
            memoizedLabelControlDefaultConfigs[name] = {
                FormFactor: 2,
                CustomControlId: LABEL_CONTROL_ID,
                Name: name,
                Version: "1.0.0",
                Parameters: {
                    "value": {
                        Type: ManifestType_1.ManifestType.SingleLineText,
                        Static: true,
                        Primary: true,
                    },
                },
                ShouldOverrideControlVisible: false,
            };
        }
        return memoizedLabelControlDefaultConfigs[name];
    }
    if (type === ManifestType_1.ManifestType.QuickForm) {
        var value = createQuickViewFormParameterValue(descriptor, auxInfo);
        if (!memoizedQuickFormDefaultConfigs[name] || memoizedQuickFormDefaultConfigs[name].Parameters[VALUE_KEY].Value !== value) {
            memoizedQuickFormDefaultConfigs[name] = {
                FormFactor: 2,
                CustomControlId: QUICK_FORM_ID,
                Name: name,
                Version: "1.0.0",
                Parameters: {
                    "value": {
                        Usage: 0 /* Bound */,
                        Type: ManifestType_1.ManifestType.QuickForm,
                        Value: value,
                        Static: false,
                        Primary: true,
                    },
                },
                ShouldOverrideControlVisible: false,
            };
        }
        return memoizedQuickFormDefaultConfigs[name];
    }
    if (type === ManifestType_1.ManifestType.Card) {
        var value = createQuickViewFormParameterValue(descriptor, auxInfo);
        if (!memoizedQuickFormDefaultConfigs[name] || memoizedQuickFormDefaultConfigs[name].Parameters[VALUE_KEY].Value !== value) {
            memoizedCardDefaultConfigs[name] = {
                FormFactor: 2,
                CustomControlId: QUICK_FORM_CARD_ID,
                Name: name,
                Version: "1.0.0",
                Parameters: {
                    "value": {
                        Usage: 0 /* Bound */,
                        Type: ManifestType_1.ManifestType.QuickForm,
                        Value: value,
                        Static: false,
                        Primary: true,
                    },
                },
                ShouldOverrideControlVisible: false,
            };
        }
        return memoizedCardDefaultConfigs[name];
    }
    var dataType = retrieveDataTypeBySourceTypeForControl(type, classId);
    var controlMode = getControlMode(dataType);
    var propertyUsage = getPropertyUsage(dataType);
    if (!memoizedFieldSectionControlDefaultConfigs[name]) {
        memoizedFieldSectionControlDefaultConfigs[name] = {
            FormFactor: 2,
            CustomControlId: FIELD_SECTION_ITEM_ID,
            Name: name,
            Version: "1.0.0",
            Parameters: {
                "value": {
                    Usage: 0 /* Bound */,
                    Static: false,
                    Type: dataType,
                    Value: dataFieldName,
                    Primary: true,
                },
                "controlMode": {
                    Usage: propertyUsage,
                    Static: true,
                    Type: "Enum",
                    Value: controlMode,
                    Primary: false,
                },
                "displayMode": {
                    Usage: propertyUsage,
                    Static: true,
                    Type: "Enum",
                    Value: DisplayMode.Normal,
                    Primary: false,
                },
                "labelMode": {
                    Usage: propertyUsage,
                    Static: true,
                    Type: "Enum",
                    Value: LabelMode.Text,
                    Primary: false,
                },
            },
            ShouldOverrideControlVisible: false,
        };
    }
    return memoizedFieldSectionControlDefaultConfigs[name];
}
exports.retrieveDefaultConfigurationForFieldControl = retrieveDefaultConfigurationForFieldControl;
/**
 * Gets the default config for BPF controls
 * @param name
 */
function retrieveDefaultBusinessProcessFlowConfig(controlId) {
    return {
        FormFactor: 2,
        CustomControlId: controlId,
        Name: controlId,
        Version: "1.0.0",
        Parameters: {
            "value": {
                Type: ManifestType_1.ManifestType.BusinessProcessFlow,
            },
        },
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultBusinessProcessFlowConfig = retrieveDefaultBusinessProcessFlowConfig;
/**
 * Gets configuration for DataSet lookup column
 * @param controlId The controlid of control that contains DataSet
 * @param formFactor The formfactor of control that contains DataSet
 * @param viewId The DataSet viewid
 * @param targetEntityName The DataSet target name
 * @param parameterName DataSet parameter name
 * @return {{FormFactor: number, CustomControlId: string, Name: string, Version: string, Parameters: {}}}
 */
function retrieveDataSetColumnLookupConfiguration(controlId, formFactor, viewId, targetEntityName, parameterName) {
    return {
        FormFactor: formFactor,
        CustomControlId: controlId,
        Name: controlId,
        Version: "1.0.0",
        Parameters: (_a = {},
            _a[parameterName] = {
                Type: ManifestType_1.ManifestType.Grid,
                ViewId: viewId,
                TargetEntityType: targetEntityName,
            },
            _a
        ),
        ShouldOverrideControlVisible: false,
    };
    var _a;
}
exports.retrieveDataSetColumnLookupConfiguration = retrieveDataSetColumnLookupConfiguration;
/**
 * Gets the default config for a false bound lookup control
 * @param controlId The controlid for the control
 * @param formFactor The formfactor
 * @param viewId The viewid for the lookup control
 * @param callback The callback function to be called on value change
 */
function retrieveFalseBoundLookupConfig(controlId, formFactor, viewId, targetEntityName, callback) {
    return {
        FormFactor: 2,
        CustomControlId: controlId,
        Name: controlId,
        Version: "1.0.0",
        Parameters: {
            "value": {
                Usage: 3,
                Type: ManifestType_1.ManifestType.LookupSimple,
                ViewId: viewId,
                Attributes: {
                    LogicalName: "falseBoundLookup",
                    Targets: new Array(targetEntityName),
                },
                Callback: callback,
            },
        },
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveFalseBoundLookupConfig = retrieveFalseBoundLookupConfig;
/**
 * TODO: merge with retrieveFalseBoundlookupConfig function.
 * Gets the default config for a false bound lookup control
 * @param controlId The controlid for the control
 * @param formFactor The formfactor
 * @param defaultViewId The default viewid for the lookup control
 * @param defaultEntityType The default entity type for the lookup control
 * @param viewIds The available view Ids for change view
 * @param entityTypes The available entity types for multi entity lookup control
 * @param allowMultiSelect WWhether more than one record is allowed to be selected
 * @param lookupType The lookup control type
 * @param callback The callback function to be called on value change
 */
function retrieveFalseBoundLookupConfig2(controlId, formFactor, defaultViewId, defaultEntityType, viewIds, entityTypes, allowMultiSelect, lookupType, callback) {
    var targets;
    if (entityTypes && entityTypes.length !== 0) {
        targets = entityTypes;
    }
    else if (defaultEntityType) {
        targets = [defaultEntityType];
    }
    return {
        FormFactor: 2,
        CustomControlId: controlId,
        Name: controlId,
        Version: "1.0.0",
        Parameters: {
            "value": {
                Usage: 3,
                Type: lookupType,
                ViewId: defaultViewId,
                Attributes: {
                    LogicalName: "falseBoundLookup",
                    Targets: targets,
                },
                Callback: callback,
            },
        },
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveFalseBoundLookupConfig2 = retrieveFalseBoundLookupConfig2;
/**
 * Gets the default config for BPF controls
 * @param name
 */
function retrieveDefaultDashboardConfig(name) {
    return {
        FormFactor: 2,
        CustomControlId: name,
        Name: name,
        Version: "1.0.0",
        Parameters: {
            "value": {
                Usage: 0 /* Bound */,
                Type: ManifestType_1.ManifestType.Dashboard,
                Value: null,
                Static: false,
                Primary: true,
            },
        },
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultDashboardConfig = retrieveDefaultDashboardConfig;
/**
 * Gets the default configuration for a subgrid control
 * @param controlId The id of the control
 * @param parameters The parameters for the control as a datasetParameter list
 * @returns The configuration for the subgrid control
 */
function retrieveDefaultConfigurationForSubgridControl(controlId, parameters) {
    return {
        FormFactor: 1,
        CustomControlId: getSubGridCustomControlId(parameters.TargetEntityType),
        Name: controlId,
        Version: "1.0.0",
        Parameters: getSubGridCustomControlParameters(parameters),
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultConfigurationForSubgridControl = retrieveDefaultConfigurationForSubgridControl;
/**
 * Gets the default configuration for a home page grid control
 * @param controlId The id of the control
 * @returns The configuration for the home page grid control
 */
function retrieveDefaultConfigurationForHomePageGridControl(controlId, entityName, viewId) {
    return {
        FormFactor: 1,
        CustomControlId: READ_ONLY_GRID_CONTROL_ID,
        Name: controlId,
        Version: "1.0.0",
        Parameters: getHomePageCustomControlParameters(entityName, viewId),
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultConfigurationForHomePageGridControl = retrieveDefaultConfigurationForHomePageGridControl;
/**
 * Gets the default configuration for a home page grid control for chart
 * @param controlId The id of the control
 * @returns The configuration for the home page chart + grid control
 */
function retrieveDefaultConfigurationForHomePageGridControlForChart(controlId, entityName, viewId) {
    return {
        FormFactor: 1,
        CustomControlId: READ_ONLY_GRID_CONTROL_ID,
        Name: controlId,
        Version: "1.0.0",
        Parameters: getHomePageCustomControlParametersForChart(entityName, viewId),
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultConfigurationForHomePageGridControlForChart = retrieveDefaultConfigurationForHomePageGridControlForChart;
/**
 * Gets the custom control parameters
 * @parameters custom control descriptor parameters
 * @returns The configuration for the subgrid control
 */
function getSubGridCustomControlParameters(parameters) {
    if (parameters.TargetEntityType === "sharepointdocument") {
        return {
            "Grid": {
                Type: ManifestType_1.ManifestType.Grid,
                ViewId: parameters.DefaultViewId || parameters.ViewId,
                TargetEntityType: parameters.TargetEntityType,
                EnableViewPicker: parameters.EnableViewPicker,
                RelationshipName: parameters.RelationshipName,
                Columns: [],
                Primary: true,
                DataSetHostProps: {
                    quickFindEnabled: false,
                    jumpBarEnabled: false,
                    commandBarEnabled: true,
                    viewSelectorEnabled: true,
                },
            },
            "EnableEditing": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
            "EnableGroupBy": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
            "EnableFiltering": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
        };
    }
    else if (parameters.TargetEntityType === "connection") {
        return {
            "Grid": {
                Type: ManifestType_1.ManifestType.Grid,
                ViewId: parameters.DefaultViewId || parameters.ViewId,
                TargetEntityType: parameters.TargetEntityType,
                EnableViewPicker: parameters.EnableViewPicker,
                RelationshipName: parameters.RelationshipName,
                Columns: [],
                Primary: true,
            },
            "EnableEditing": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "Yes",
                Primary: false,
            },
            "EnableGroupBy": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
            "EnableFiltering": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
        };
    }
    else {
        return {
            "Grid": {
                Type: ManifestType_1.ManifestType.Grid,
                ViewId: parameters.DefaultViewId || parameters.ViewId,
                TargetEntityType: parameters.TargetEntityType,
                EnableViewPicker: parameters.EnableViewPicker,
                RelationshipName: parameters.RelationshipName,
                Columns: [],
                Primary: true,
            },
            "EnableEditing": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
            "EnableGroupBy": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
            "EnableFiltering": {
                Usage: 1,
                Static: true,
                Type: "Enum",
                Value: "No",
                Primary: false,
            },
        };
    }
}
/**
 * Gets the custom control parameters
 * @entityName entity Name
 * @viewId View Id
 * @returns The configuration for the home page grid control
 */
function getHomePageCustomControlParameters(entityName, viewId) {
    return {
        "Grid": {
            Type: ManifestType_1.ManifestType.Grid,
            EntityName: entityName,
            ViewId: viewId,
        },
        "EnableEditing": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
        "EnableGroupBy": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
        "EnableFiltering": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
    };
}
/**
 * Gets the custom control parameters
 * @entityName entity Name
 * @viewId View Id
 * @returns The configuration for the home page grid control  for chart
 */
function getHomePageCustomControlParametersForChart(entityName, viewId) {
    return {
        "Grid": {
            Type: ManifestType_1.ManifestType.Grid,
            EntityName: entityName,
            ViewId: viewId,
        },
        "EnableEditing": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
        "EnableGroupBy": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
        "EnableFiltering": {
            Usage: 1,
            Static: true,
            Type: "Enum",
            Value: "No",
            Primary: false,
        },
    };
}
/**
 * Gets the custom control id
*  @entityName entity Name
 * @returns The configuration for the home page grid control
 */
function getSubGridCustomControlId(entityName) {
    if (entityName === "sharepointdocument") {
        return SHAREPOINT_GRID_CONTROL_ID;
    }
    else {
        return READ_ONLY_GRID_CONTROL_ID;
    }
}
/**
 * Gets the default configuration for the chart control on the grid home page
 * @param name The name of the chart control
 * @param entityName The entity type name
 * @param viewId The view id for the chart
 * @param visualizationId The visualization id for the chart
 * @param filterExpression The filter expresion string used to identify the selected chart series
 * @returns The configuration for the chart control on the grid home page
 */
function retrieveDefaultConfigurationForHomePageChartControl(name, entityName, viewId, visualizationId, filterExpression) {
    var filterExpressionString = filterExpression ? filterExpression : null;
    return {
        FormFactor: 1,
        CustomControlId: name,
        Name: name,
        Version: "1.0.0",
        Parameters: {
            "ChartDataSet": {
                Type: ManifestType_1.ManifestType.Grid,
                EntityName: entityName,
                ViewId: viewId,
                VisualizationId: visualizationId,
                ChartGridMode: "Chart",
                HighchartFilterExpression: filterExpressionString,
            },
            "Parent": {
                Type: "SingleLine.Text",
                Primary: false,
                Static: true,
                Usage: 1,
                Value: "DataSetHost",
            },
            "ChartFilterOutput": {
                Type: "SingleLine.Text",
                Primary: false,
                Static: false,
                Usage: 2,
            },
        },
        ShouldOverrideControlVisible: false,
    };
}
exports.retrieveDefaultConfigurationForHomePageChartControl = retrieveDefaultConfigurationForHomePageChartControl;
/**
 * Retrieve a custom control configuration based on the control's type
 * @param name The name of the control
 * @param dataFieldName The field name of the control
 * @param type The type of the control, presented in a "<Main type>.<Format>" fashion
 * @param descriptor Control descriptor
 * @param classId string containing guid class Id for the given control. This parameter
 * is used for the scenario when field control is not implemented and DummyControl is shown instead.
 * Dummy control uses class ID to show which exactly control is not implemented. Dummy control is a
 * temporary solution and will be removed at some point, but there is no precise timeline for that.
 * @param auxInfo Auxillary info not included elsewhere in the parameters
 */
function retrieveDefaultConfigurationForControl(name, dataFieldName, type, descriptor, classId, auxInfo) {
    var configuration;
    if (classId && GuidHelper_1.areGuidsSame(classId, GRID_CLASS_ID)) {
        configuration = retrieveDefaultConfigurationForSubgridControl(name, descriptor.Parameters);
    }
    else {
        configuration = retrieveDefaultConfigurationForFieldControl(name, dataFieldName, type, classId, descriptor);
    }
    var primaryParameter = _getPrimaryParameter(configuration);
    if (primaryParameter) {
        extendDefaultValueParameterByControlDescriptor(primaryParameter, descriptor);
    }
    // Add specification parameters to default field section item control configuration
    var fieldSectionItemSpecificationParameters = getFieldSectionItemSpecificationParameters(configuration, classId);
    if (fieldSectionItemSpecificationParameters !== null) {
        Object.assign(configuration.Parameters, fieldSectionItemSpecificationParameters);
    }
    return configuration;
}
exports.retrieveDefaultConfigurationForControl = retrieveDefaultConfigurationForControl;
/**
 * Retrieve manifest data type by its source type for controls.
 * @param {string} srcType The source type of the control.
 * @param {string} srcFormat The source format of the control.
 * @returns The ManifestType of its source type.
 */
function retrieveDataTypeBySourceTypeForControl(type, classId) {
    /// For some reason type now looks like "SingleLine.0" instead of "SingleLine.Text".
    /// Need to investigate this later.
    /// Probably this is just enum value serialized as is to string type.
    var _a = type.split("."), srcType = _a[0], srcFormat = _a[1];
    if (!srcType) {
        srcType = "string";
    }
    if (!srcFormat || srcFormat === "null" || srcFormat === "undefined") {
        srcFormat = classId ? (ManifestType_1.ManifestType.ClassIdControlMap[classId] || "text") : "text";
    }
    var dataType;
    switch (srcType) {
        case "boolean":
            dataType = ManifestType_1.ManifestType.TwoOptions;
            break;
        case "customer":
            dataType = ManifestType_1.ManifestType.LookupCustomer;
            break;
        case "datetime":
            switch (srcFormat.toLowerCase()) {
                case "date":
                case "0":
                    // "0", "date"
                    dataType = ManifestType_1.ManifestType.DateAndTimeDateOnly;
                    break;
                case "datetime":
                case "dateandtime":
                case "1":
                    // "1", "datetime":
                    dataType = ManifestType_1.ManifestType.DateAndTimeDateAndTime;
                    break;
                default:
                    dataType = ManifestType_1.ManifestType.DateAndTimeDateOnly;
            }
            break;
        case "decimal":
            dataType = ManifestType_1.ManifestType.Decimal;
            break;
        case "float":
        case "double":
            dataType = ManifestType_1.ManifestType.FP;
            break;
        case "integer":
            switch (srcFormat.toLowerCase()) {
                case "duration":
                case "1":
                    //"1", "duration"
                    dataType = ManifestType_1.ManifestType.WholeDuration;
                    break;
                case "timezone":
                case "2":
                    // "2", "timezone"
                    dataType = ManifestType_1.ManifestType.WholeTimeZone;
                    break;
                case "language":
                case "3":
                    // "3", "language"
                    dataType = ManifestType_1.ManifestType.WholeLanguage;
                    break;
                default:
                    // "0" == "integer.none"
                    dataType = ManifestType_1.ManifestType.WholeNone;
            }
            break;
        /// There is no such CrmDescriptor format...
        case "lookup":
            switch (srcFormat.toLowerCase()) {
                case "connection":
                case "regarding":
                case "1":
                case "2":
                    dataType = ManifestType_1.ManifestType.LookupRegarding;
                    break;
                default:
                    dataType = ManifestType_1.ManifestType.LookupSimple;
            }
            break;
        // type parameter here sometimes looks like "memo.2"
        // So the memo should contain some formats?
        case "memo":
            dataType = ManifestType_1.ManifestType.Multiple;
            break;
        case "money":
            dataType = ManifestType_1.ManifestType.Currency;
            break;
        case "owner":
            dataType = ManifestType_1.ManifestType.LookupOwner;
            break;
        case "partylist":
            dataType = ManifestType_1.ManifestType.LookupPartyList;
            break;
        case "multiselectpicklist":
            dataType = ManifestType_1.ManifestType.MultiSelectPicklist;
            break;
        // CrmDescriptor contain OptionSetFormat, and picklist is a part of it.
        // Possibly should be changed soon.
        case "picklist":
        case "state":
            dataType = ManifestType_1.ManifestType.OptionSet;
            break;
        case "status":
            dataType = ManifestType_1.ManifestType.StatusOptionSet;
            break;
        case "text":
        case "string":
            switch (srcFormat.toLowerCase()) {
                case "email":
                case "0":
                    // "0"
                    dataType = ManifestType_1.ManifestType.SingleLineEmail;
                    break;
                case "textarea":
                case "2":
                    // "2"
                    dataType = ManifestType_1.ManifestType.Multiple;
                    break;
                case "url":
                case "3":
                    // "3"
                    dataType = ManifestType_1.ManifestType.SingleLineURL;
                    break;
                case "tickersymbol":
                case "4":
                    // "4"
                    dataType = ManifestType_1.ManifestType.SingleLineTickerSymbol;
                    break;
                case "phone":
                case "7":
                    // "7":
                    dataType = ManifestType_1.ManifestType.SingleLinePhone;
                    break;
                case "memo":
                    dataType = ManifestType_1.ManifestType.Multiple;
                    break;
                default:
                    // All other formats will be just SingleLine.Text for now.
                    dataType = ManifestType_1.ManifestType.SingleLineText;
            }
            break;
        case "Timer":
            dataType = ManifestType_1.ManifestType.Timer;
            break;
        default:
            dataType = ManifestType_1.ManifestType.SingleLineText;
    }
    return dataType;
}
exports.retrieveDataTypeBySourceTypeForControl = retrieveDataTypeBySourceTypeForControl;
function retrieveContainerControlTypeByControlId(controlId) {
    switch (controlId) {
        case READ_ONLY_GRID_CONTROL_ID:
        case GRID_CONTROL_ID:
            return ContainerControlType.GridContainer;
        case DASHBOARD_CONTROL_ID:
            return ContainerControlType.DashboardContainer;
        case QUICK_FORM_ID:
            return ContainerControlType.QuickCreateForm;
        case FIELD_SECTION_ITEM_ID:
            return ContainerControlType.FieldSectionContainer;
        case TIMELINEWALL_ID:
            return ContainerControlType.TimelineContainer;
        case CHART_CONTROL_ID:
            return ContainerControlType.ChartControl;
        case WEBRESOURCEHTML_ID:
            return ContainerControlType.WebresourceControl;
        case CALENDAR_CONTROL_ID:
            return ContainerControlType.CalendarControl;
        case DUMMY_CONTROL_ITEM_ID:
            return ContainerControlType.DummyControl;
    }
}
exports.retrieveContainerControlTypeByControlId = retrieveContainerControlTypeByControlId;
function retrieveDefaultManifestNameByDataType(dataType, attributes) {
    switch (dataType) {
        case "TwoOptions":
            return "MscrmControls.FieldControls.CheckboxControl";
        case "Currency":
            return "MscrmControls.FieldControls.CurrencyControl";
        case "Decimal":
            return "MscrmControls.FieldControls.DecimalNumberControl";
        case "SingleLine.Email":
            return "MscrmControls.FieldControls.EmailAddressControl";
        case "FP":
            return "MscrmControls.FieldControls.FloatingPointNumberInput";
        case "Whole.Language":
            return "MscrmControls.FieldControls.LanguagePickerControl";
        case "OptionSet":
            return "MscrmControls.FieldControls.OptionSet";
        case "StatusOptionSet":
            return "MscrmControls.FieldControls.PicklistStatusControl";
        case "SingleLine.Phone":
            return "MscrmControls.FieldControls.PhoneNumberControl";
        case "SingleLine.Text":
        case "Multiple":
            return "MscrmControls.FieldControls.TextBoxControl";
        case "SingleLine.Ticker":
            return "MscrmControls.FieldControls.TickerSymbolControl";
        case "Whole.TimeZone":
            return "MscrmControls.FieldControls.TimeZonePickListControl";
        case "SingleLine.URL":
            return "MscrmControls.FieldControls.UrlControl";
        case "Whole.None":
            return "MscrmControls.FieldControls.WholeNumberControl";
        case "Whole.Duration":
            return "MscrmControls.FieldControls.DurationControl";
        case "Lookup.PartyList":
        case "Lookup.Regarding":
        case "Lookup.Simple":
        case "Lookup.Owner":
        case "Lookup.Customer":
        case "Lookup.MultiEntity":
            return retrieveLookupManifestName(dataType, attributes);
        case "MultiSelectPicklist":
            return "MscrmControls.MultiSelectPicklist.MultiSelectPicklistControl";
        case "DateAndTime.DateOnly":
        case "DateAndTime.DateAndTime":
            return "MscrmControls.FieldControls.DateTimeControl";
        case "Grid":
            return "MscrmControls.Grid.GridControl";
        case "SearchWidget":
        case "SearchWidget.SearchWidget":
        case "ReferencePanelSearchWidget":
            return "MscrmControls.KbSearchControl.kbSearchControl";
        case "Timer":
            return "MscrmControls.FieldControls.TimerControl";
        case "SingleLine.TextArea":
        default:
            return "MscrmControls.FieldControls.DummyControl";
    }
}
exports.retrieveDefaultManifestNameByDataType = retrieveDefaultManifestNameByDataType;
function retrieveDefaultManifestByConfiguration(configuration) {
    if (!configuration) {
        return null;
    }
    var primaryParameter = _getPrimaryParameter(configuration);
    if (!primaryParameter) {
        return null;
    }
    return retrieveDefaultManifestNameByDataType(primaryParameter.Type);
}
exports.retrieveDefaultManifestByConfiguration = retrieveDefaultManifestByConfiguration;
/**
 * Check if control should receive legacy DataSet parameter API
 * @param controlManifest Manifest of control to check for legacy support
 */
function isLegacyDataSetControl(controlManifest) {
    //TODO: better way to determine legacy dataset controls
    switch (controlManifest.CustomControlId) {
        case CALENDAR_CONTROL_ID:
        case GRID_CONTROL_ID:
        case READ_ONLY_GRID_CONTROL_ID:
        case TIMELINE_CONTROL_ID:
        case ACTIONCARD_CONTROL_ID:
            {
                return true;
            }
        default:
            {
                return false;
            }
    }
}
exports.isLegacyDataSetControl = isLegacyDataSetControl;
/**
 * Creates a quick view form parameter value
 * @param descriptor the Descriptor for this control
 * @param auxInfo auxillary info not included elsewhere on the parameters provided
 */
function createQuickViewFormParameterValue(descriptor, auxInfo) {
    var formId = auxInfo ? auxInfo.quickFormId : "00000000-0000-0000-0000-000000000000";
    var associatedDataField = descriptor ? descriptor.DataFieldName : "";
    return formId + (associatedDataField ? "|" + associatedDataField : "");
}

},{"./GuidHelper":73,"./ManifestType":75}],73:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
/**
 * Regular expression for validating a guid string
 * Valid Examples: {12345678-1234-1234-1234-123456789abc}, 12345678-1234-1234-1234-123456789abc}, 12345678-1234-1234-1234-123456789abc, 12345678123412341234123456789abc
 * Invalid: {123456781234-1234-1234-123456789abc}, {12345678-1234-1234-1234-123}
 */
var guidRegex = /^\{?([0-9a-f]{8}(-?)[0-9a-f]{4}\2[a-f\d]{4}\2[0-9a-f]{4}\2[0-9a-f]{12})}?$/;
/**
 * Compare 2 guid strings. Case insensitive. Ignores open curvy brace at the start and close curvy brace at the end of both strings.
 * @param a guid string
 * @param b guid string
 * @return {boolean} `true` if guids are the same, `false` - otherwise.
 */
function areGuidsSame(a, b) {
    var aMatch = guidRegex.exec(a.toLocaleLowerCase());
    var bMatch = guidRegex.exec(b.toLocaleLowerCase());
    return aMatch[1] === bMatch[1];
}
exports.areGuidsSame = areGuidsSame;
/**
 * Generates a new V4 GUID string.
 * @return {string} GUIDv4 string generated using `random()`.
 */
function guidV4String() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.guidV4String = guidV4String;

},{}],74:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var ManifestType_1 = require("./ManifestType");
var DefaultControlMapper_1 = require("./DefaultControlMapper");
/**
 * LearningPath related helper functions to be used by CCF infra to register controls to Learning path
 */
var LearningPathHelper = (function () {
    function LearningPathHelper() {
    }
    LearningPathHelper.registerToLearningPath = function (element, domAttribute, controlId) {
        if (element && domAttribute && controlId) {
            element.setAttribute(domAttribute, controlId);
        }
    };
    /**
    * Generate the learning path control Id for the control
    */
    LearningPathHelper.getLearningPathControlId = function (bagProps) {
        if (!bagProps.configuration) {
            return null;
        }
        var lpControlId = bagProps.configuration.CustomControlId + "|" + bagProps.controlId;
        if (bagProps.personalizationConfiguration) {
            lpControlId += "|" + bagProps.personalizationConfiguration.entityTypeName;
        }
        var containerType = DefaultControlMapper_1.retrieveContainerControlTypeByControlId(bagProps.configuration.CustomControlId);
        switch (containerType) {
            case DefaultControlMapper_1.ContainerControlType.GridContainer:
            case DefaultControlMapper_1.ContainerControlType.ChartControl:
            case DefaultControlMapper_1.ContainerControlType.CalendarControl:
                lpControlId += LearningPathHelper._generateLpControlIdForccDataSetControl(bagProps);
                break;
            case DefaultControlMapper_1.ContainerControlType.DashboardContainer:
            case DefaultControlMapper_1.ContainerControlType.QuickCreateForm:
                if (bagProps.personalizationConfiguration && bagProps.personalizationConfiguration.formGuid) {
                    lpControlId += "|" + bagProps.personalizationConfiguration.formGuid.guid;
                }
                break;
            case DefaultControlMapper_1.ContainerControlType.WebresourceControl:
                lpControlId += LearningPathHelper._generateLpControlIdForWebresource(bagProps);
                break;
            case DefaultControlMapper_1.ContainerControlType.FieldSectionContainer: //Ex : CustomControlId | field.owner | account 
            case DefaultControlMapper_1.ContainerControlType.TimelineContainer: //Ex : CustomControlId | Timeline | account 
            case DefaultControlMapper_1.ContainerControlType.DummyControl: //Ex : CustomControlId | mapcontrol | account 
            /*This handles map control as "customControlId | mapControl" and there can only be one mapControl on a page.
            All other field controls will be handled as default since controlId will hold field's unique name*/
            default:
                break;
        }
        return lpControlId;
    };
    LearningPathHelper._generateLpControlIdForWebresource = function (bagProps) {
        var lpControlId = "";
        var parameters = bagProps.configuration.Parameters;
        for (var name_1 in parameters) {
            var parameter = parameters[name_1];
            if (parameter.Type === ManifestType_1.ManifestType.WebResourceHtmlControl) {
                var webresourceParam = parameter;
                lpControlId += "|" + webresourceParam.ControlId;
            }
        }
        return lpControlId;
    };
    LearningPathHelper._generateLpControlIdForccDataSetControl = function (bagProps) {
        var lpControlId = "";
        var parameters = bagProps.configuration.Parameters;
        for (var name_2 in parameters) {
            var parameter = parameters[name_2];
            if (parameter.Type === ManifestType_1.ManifestType.Grid) {
                var dataSetParam = parameter;
                if (dataSetParam.ViewId) {
                    lpControlId += "|" + dataSetParam.ViewId;
                }
                // Dataset/Chart inside a dashboard
                if (dataSetParam.VisualizationId) {
                    lpControlId += "|" + dataSetParam.VisualizationId;
                }
                // Main grid
                if (dataSetParam.EntityName) {
                    lpControlId += "|" + dataSetParam.EntityName;
                }
                // Subgrid
                if (dataSetParam.RelationshipName) {
                    lpControlId += "|" + dataSetParam.RelationshipName;
                }
            }
        }
        return lpControlId;
    };
    LearningPathHelper.LEARNING_PATH_ATTRIBUTE = "data-lp-id";
    return LearningPathHelper;
}());
exports.LearningPathHelper = LearningPathHelper;

},{"./DefaultControlMapper":72,"./ManifestType":75}],75:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/* tslint:disable:crm-force-fields-private */
/**
 * Custom Control ManifestType candidates
 */
var ManifestType = (function () {
    function ManifestType() {
    }
    ManifestType.TwoOptions = "TwoOptions";
    ManifestType.DateAndTimeDateOnly = "DateAndTime.DateOnly";
    ManifestType.DateAndTimeDateAndTime = "DateAndTime.DateAndTime";
    ManifestType.Decimal = "Decimal";
    ManifestType.FP = "FP";
    ManifestType.WholeNone = "Whole.None";
    ManifestType.WholeDuration = "Whole.Duration";
    ManifestType.WholeTimeZone = "Whole.TimeZone";
    ManifestType.WholeLanguage = "Whole.Language";
    ManifestType.LookupSimple = "Lookup.Simple";
    ManifestType.LookupCustomer = "Lookup.Customer";
    ManifestType.LookupOwner = "Lookup.Owner";
    ManifestType.LookupPartyList = "Lookup.PartyList";
    ManifestType.LookupRegarding = "Lookup.Regarding";
    ManifestType.LookupMultiEntity = "Lookup.MultiEntity";
    ManifestType.MultiSelectPicklist = "MultiSelectPicklist";
    ManifestType.Multiple = "Multiple";
    ManifestType.Currency = "Currency";
    ManifestType.OptionSet = "OptionSet";
    ManifestType.StatusOptionSet = "StatusOptionSet";
    ManifestType.SingleLineEmail = "SingleLine.Email";
    ManifestType.SingleLineText = "SingleLine.Text";
    ManifestType.SingleLineTextArea = "SingleLine.TextArea";
    ManifestType.SingleLineURL = "SingleLine.URL";
    ManifestType.SingleLineTickerSymbol = "SingleLine.Ticker";
    ManifestType.SingleLinePhone = "SingleLine.Phone";
    ManifestType.Grid = "Grid";
    ManifestType.BusinessProcessFlow = "BusinessProcessFlow";
    ManifestType.WebResourceHtmlControl = "WebResource.HTML";
    ManifestType.TimelineWall = "TimelineWall";
    ManifestType.QuickForm = "Form.QuickForm";
    ManifestType.Card = "Card";
    ManifestType.Dashboard = "Dashboard";
    ManifestType.Search = "Search";
    ManifestType.SearchWidget = "SearchWidget.SearchWidget";
    ManifestType.PowerBI = "PowerBI";
    ManifestType.MicrosoftFlow = "MicrosoftFlow";
    ManifestType.EmailEngagementRecipientActivity = "emailrecipientactivitycontrol";
    ManifestType.ReferencePanelSearchWidget = "SearchWidget.ReferencePanelSearchWidget";
    ManifestType.Timer = "Timer";
    ManifestType.GlobalFilter = "GlobalFilter";
    ManifestType.AppliedFilters = "AppliedFilters";
    ManifestType.ClassIdControlMap = {
        "fd2a7985-3187-444e-908d-6624b21f69c0": "iframe",
        "270bd3db-d9af-4782-9025-509e298dec0a": "lookup",
        "f3015350-44a2-4aa0-97b5-00166532b5e9": "regarding",
        "cbfb742c-14e7-4a17-96bb-1a13f7f64aa2": "partylist",
        "aa987274-ce4e-4271-a803-66164311a958": "duration",
        "c6d124ca-7eda-4a60-aea9-7fb8d318b68f": "integer",
        "0d2c745a-e5a8-4c8f-ba63-c6d3bb604660": "float",
        "533b9e00-756b-4312-95a0-dc888637ac78": "money",
        "c3efe0c3-0ec6-42be-8349-cbd9079dfd8e": "decimal",
        "ada2203e-b4cd-49be-9ddf-234642b43b52": "email",
        "6f3fb987-393b-4d2d-859f-9d0f0349b6ad": "emailbody",
        "4273edbd-ac1d-40d3-9fb2-095c621b552d": "text",
        "e0dece4b-6fc8-4a8f-a065-082708572369": "memo",
        "71716b6c-711e-476c-8ab8-5d11542bfb47": "url",
        "1e1fc551-f7a8-43af-ac34-a8dc35c7b6d4": "tickersymbol",
        "3ef39988-22bb-4f0b-bbbe-64b5a3748aee": "picklist",
        "5d68b988-0661-4db2-bc3e-17598ad3be6c": "status",
        "5b773807-9fb2-42db-97c3-7a91eff8adff": "datetime",
        "67fac785-cd58-4f9f-abb3-4b7ddc6ed5ed": "boolean",
        "b0c6723a-8503-4fd7-bb28-c8a06ac933c2": "boolean",
        "671a9387-ca5a-4d1e-8ab7-06e39ddcf6b5": "language",
        "e7a81278-8635-4d9e-8d4d-59480b391c5b": "subgrid",
        "7c624a0b-f59e-493d-9583-638d34759266": "timezone",
        "3246f906-1f71-45f7-b11f-d7be0f9d04c9": "connection",
        "821acf1a-7e46-4a0c-965d-fe14a57d78c7": "connectionroleojbjecttypecodelist",
        "9fdf5f91-88b1-47f4-ad53-c11efc01a01d": "webResourceHtml",
        "587cdf98-c1d5-4bde-8473-14a0bc7644a7": "webResourceImage",
        "080677db-86ec-4544-ac42-f927e74b491f": "webResourceSilverlight",
        "8c54228c-1b25-4909-a12a-f2b968bb0d62": "powerBITile",
        "06375649-c143-495e-a496-c962e5b4488e": "notes",
        "5c5600e0-1d6e-4205-a272-be80da87fd42": "quickformcollection",
        "b68b05f0-a46d-43f8-843b-917920af806a": "referencepanelquickformcollection",
        "02d4264b-47e2-4b4c-aa95-f439f3f4d458": "referencepanelsubgrid",
        "1f179106-fa28-4495-961e-f6bd93c21974": "interactionwall",
        "62b0df79-0464-470f-8af7-4483cfea0c7d": "bingmap",
        "86b9e25e-695e-4fef-ac69-f05cfa96739c": "socialInsight",
        "76b9e25e-695e-4fef-ac69-f05cfa96739c": "orgInsights",
        "9c5ca0a1-ab4d-4781-be7e-8dfbe867b87e": "timercontrol",
        "e616a57f-20e0-4534-8662-a101b5ddf4e0": "searchwidget",
        "7ccd1494-1f7a-4e3a-8bde-f32069daeb9f": "referencepanelsearchwidget",
        "ee9078c8-6946-4e2c-b8f8-35e65f4be6a8": "queuecontainer",
        "f130d8ae-ce5b-43c5-bed1-1a6a5856cf3d": "multiplepiechart",
        "6fae836f-fc01-48de-9b63-9b68a8fd86b8": "tagcontrol",
        "f9a8a302-114e-466a-b582-6771b2ae0d92": "customControl",
        "c8bfbbef-6851-4401-a0cc-7450062fe085": "aci",
        "8c10015a-b339-4982-9474-a95fe05631a5": "phone",
        "d2561f53-b292-42d9-b222-478e40ffe29f": "dashboard",
        "7c7059a6-74d9-4b02-80ad-19bc60426393": "search",
        "39354e4a-5015-4d74-8031-ea9eb73a1322": "label",
        "fff0e632-9d7b-4f21-bbc1-05d1567ad144": "globalfilter",
        "9c310a73-a360-42c5-8943-47a06f1b51ea": "appliedfilters",
    };
    return ManifestType;
}());
exports.ManifestType = ManifestType;
/* tslint:enable:crm-force-fields-private */

},{}],76:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Method for recursive copying of object fields
 * @param toObject target object
 * @param fromObject object fron which fields will be copied
 */
function copy(toObject, fromObject) {
    if (toObject === fromObject) {
        return toObject;
    }
    fromObject = Object(fromObject);
    for (var key in fromObject) {
        var val = fromObject[key];
        if (val === undefined || val === null) {
            return;
        }
        var type = typeof val;
        // Avoid bugs when hasOwnProperty is shadowed
        if (!Object.prototype.hasOwnProperty.call(toObject, key) || !(type === "object" || type === "function")) {
            toObject[key] = val;
        }
        else {
            toObject[key] = copy(Object(toObject[key]), fromObject[key]);
        }
    }
    return toObject;
}
;
/**
 * Merging objects. It will return the target object.
 * @param target The target object.
 * @param sources The source object(s).
 */
function mergeObjects(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var to = Object(target);
    for (var index = 0; index < sources.length; index++) {
        copy(to, sources[index]);
    }
    return to;
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mergeObjects;

},{}],77:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Helper class for starting and stopping a performance stopwatch
 */
var PerformanceStopwatch = (function () {
    /**
     * Creates a new PerformanceStopwatch instance.
     * @param event The performance event linked to the stopwatch
     * @param parameters Parameters to pass with the stopwatch
     */
    function PerformanceStopwatch(event, parameters) {
        this._event = event;
        this._parameters = parameters;
    }
    /**
     * Starts the stopwatch
     */
    PerformanceStopwatch.prototype.start = function () {
        this._stop = this._event.startStopwatch(this._parameters);
    };
    /**
     * Stops the stopwatch
     */
    PerformanceStopwatch.prototype.stop = function (params) {
        this._stop(params);
    };
    return PerformanceStopwatch;
}());
exports.PerformanceStopwatch = PerformanceStopwatch;

},{}],78:[function(require,module,exports){
"use strict";
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/

var Popup_1 = require("../../CommonComponents/Primitive/Popup/Popup");
var RootPopup_1 = require("../../CommonComponents/Primitive/Popup/RootPopup");
/*
 * Popup service, which controls all popups, which was created from standard Custom Control.
 */
var PopupService = (function () {
    /*
     * Constructor method.
     * @param host Instance of Custom Controls wrapper.
     */
    function PopupService(host) {
        /*
         * Map which contains all created Popups.
         */
        this._popups = {};
        this._host = host;
    }
    /*
     * Helper method for setting key prop for React components in array.
     * @param name the name of the popup
     * @returns an object with the name mapped to the key "key"
     */
    PopupService.prototype._getKeyName = function (name) {
        return {
            key: name,
        };
    };
    /*
     * Creates new Popup instance.
     * @returns a JSX element of the popup
     */
    PopupService.prototype._createPopup = function (props) {
        return React.createElement(Popup_1.Popup, Object.assign({}, props, this._getKeyName(props.name)));
    };
    /*
     * Create a new popup
     * @param props Properties for Popup.
     */
    PopupService.prototype.createPopup = function (props) {
        if (props.name) {
            this._popups[props.name] = this._createPopup(props);
            this._host.forceUpdate();
        }
    };
    /*
     * Open a new popup
     * @param name Name of a Popup to open.
     */
    PopupService.prototype.openPopup = function (name) {
        if (name === void 0) { name = ""; }
        if (this._popups[name]) {
            var props = this._popups[name].props;
            this._popups[name] = this._createPopup(Object.assign({}, props, { popupToOpen: name }));
            this._host.forceUpdate();
        }
    };
    /*
     * Close a popup
     * @param name Name of a Popup to close.
     */
    PopupService.prototype.closePopup = function (name) {
        if (name === void 0) { name = ""; }
        if (this._popups[name]) {
            var props = this._popups[name].props;
            this._popups[name] = this._createPopup(Object.assign({}, props, { popupToOpen: "" }));
            this._host.forceUpdate();
        }
    };
    /*
     * Update a given popup's props
     * @param name Name of a Popup to update.
     * @param newProps New properties of Popup.
     */
    PopupService.prototype.updatePopup = function (name, newProps) {
        if (name === void 0) { name = ""; }
        if (this._popups[name]) {
            var props = this._popups[name].props;
            this._popups[name] = this._createPopup(Object.assign({}, props, newProps));
            this._host.forceUpdate();
        }
    };
    /*
     * Delete a popup's props
     * @param name Name of a Popup to delete.
     */
    PopupService.prototype.deletePopup = function (name) {
        if (name === void 0) { name = ""; }
        if (this._popups[name]) {
            delete this._popups[name];
            this._host.forceUpdate();
        }
    };
    /*
     * Retrieve all popups for render
     * @returns an array of JSX elements
     */
    PopupService.prototype.getPopups = function () {
        var result = [];
        for (var key in this._popups) {
            result.push(this._popups[key]);
        }
        return result;
    };
    /**
     * Sets the id of this service object
     * @param id the id to set
     */
    PopupService.prototype.setPopupsId = function (id) {
        this._popupsId = id;
    };
    /**
     * Gets the id of this service object
     * @returns the id of this service object
     */
    PopupService.prototype.getPopupsId = function () {
        return this._popupsId;
    };
    /*
     * Render all available popups present in this service object
     */
    PopupService.prototype.renderPopups = function () {
        var result = this.getPopups();
        var popupsId = this.getPopupsId();
        return result.length ? React.createElement(RootPopup_1.RootPopup, {id: popupsId, parentCustomControlId: this._host.props.controlId, openPopup: this._host.props.actions.openPopup, closePopup: this._host.props.actions.closePopup, rootNodes: this._host.props.popupRootNodes}, result) : null;
    };
    return PopupService;
}());
exports.PopupService = PopupService;

},{"../../CommonComponents/Primitive/Popup/Popup":27,"../../CommonComponents/Primitive/Popup/RootPopup":28,"react":undefined}],79:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * TelemetryClient is designed to be a singleton class used across the CCF project to trace errors, warnings, and info.
 * It needs to be properly initialized once CustomControlHostProps is available.
 */
var TelemetryClient = (function () {
    function TelemetryClient() {
        //initially false, set to true once _logMessage is overrided
        this._initialized = false;
    }
    /**
     * To be overrided with propertybag's implementation;
     * @param customControlName Custom Control id
     * @param control name/id for the control
     * @param message information about control to be logged
     */
    TelemetryClient.prototype._logMessage = function (customControlName, message, logType) {
        throw "_logMessage is not overrided by actual implementation";
    };
    /**
     * Override _logMessage with actual implementation
     * @param props, which should have props>propBagMethods>utils>logMessage defined
     */
    TelemetryClient.prototype.setProps = function (props) {
        if (!this._initialized && props && props.propBagMethods && props.propBagMethods.utils && props.propBagMethods.utils.logMessage) {
            this._logMessage = props.propBagMethods.utils.logMessage;
            this._initialized = true;
        }
    };
    /**
     * Log a message
     * @param control name/id for the control
     * @param message information about control to be logged
     */
    TelemetryClient.prototype.log = function (control, message) {
        if (this._initialized) {
            //LogType.Log
            this._logMessage(control, message, 3);
        }
    };
    /**
     * Create a warning message about the control
     * @param control name/id for the control
     * @param message information about control to be logged
     */
    TelemetryClient.prototype.warn = function (control, message) {
        if (this._initialized) {
            this._logMessage(control, message, 2);
        }
    };
    /**
     * Create a error message about the control
     * @param control name/id for the control
     * @param message information about control to be logged
     */
    TelemetryClient.prototype.error = function (control, message) {
        if (this._initialized) {
            this._logMessage(control, message, 1);
        }
    };
    return TelemetryClient;
}());
exports.TelemetryClient = TelemetryClient;
//singleton instance of telemetry
var instance = new TelemetryClient();
exports.default = instance;

},{}],80:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * XrmProxy is designed to be a singleton class used in UClient to get access to Client Api functions without an actions
 */
var XrmProxy = (function () {
    function XrmProxy() {
        this._userSettings = {
            userId: null,
            getTimeZoneOffsetMinutes: null,
            isHighContrastEnabled: null,
            isRTL: null,
            languageId: null,
            userName: null,
            securityRoles: null,
        };
        this._orgSettings = {
            languageId: null,
            uniqueName: null,
            isAutoSaveEnabled: null,
            attributes: null,
        };
        this._utils = {
            beginSecureSessionForResource: null,
            getEntityMetadata: null,
            getResourceString: null,
            isFeatureEnabled: null,
            lookupObjects: null,
        };
        this._page = {
            getClientUrl: null,
        };
        this._reporting = {
            reportSuccess: null,
            reportFailure: null,
            reportEvent: null,
        };
        this._diagnostics = {
            traceError: null,
            traceWarning: null,
            traceInfo: null,
            traceDebug: null,
        };
        this._client = {
            getClient: null,
            getClientState: null,
            getFormFactor: null,
        };
        this._applicationUI = {
            addGlobalNotification: null,
            clearGlobalNotification: null,
        };
        this._webApiContext = {
            retrieveRecord: null,
            retrieveMultipleRecords: null,
            updateRecord: null,
            createRecord: null,
            deleteRecord: null,
            execute: null,
            executeMultiple: null,
        };
        this._initialized = false;
    }
    Object.defineProperty(XrmProxy.prototype, "Initialized", {
        /**
         * Getters and setters
         */
        get: function () {
            return this._initialized;
        },
        set: function (value) {
            this._initialized = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "OrgSettings", {
        get: function () {
            return this._orgSettings;
        },
        set: function (value) {
            this._orgSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "UserSettings", {
        get: function () {
            return this._userSettings;
        },
        set: function (value) {
            this._userSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Offline", {
        get: function () {
            return this._offline;
        },
        set: function (value) {
            this._offline = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Utils", {
        get: function () {
            return this._utils;
        },
        set: function (value) {
            this._utils = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Reporting", {
        get: function () {
            return this._reporting;
        },
        set: function (value) {
            this._reporting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Diagnostics", {
        get: function () {
            return this._diagnostics;
        },
        set: function (value) {
            this._diagnostics = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XrmProxy.prototype, "Client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * set the user settings
     * @param {ControlAndClientApiInterfaces.UserSettings} userSettings the user settings
     */
    XrmProxy.prototype.setUserSettings = function (userSettings) {
        this._userSettings = userSettings;
    };
    /**
     * set the organization settings
     * @param {ControlAndClientApiInterfaces.UserSettings} userSettings the user settings
     */
    XrmProxy.prototype.setOrgSettings = function (orgSettings) {
        this._orgSettings = orgSettings;
    };
    /**
     * set the offline settings
     * @param {ControlAndClientApiInterfaces.OfflineSettings} offlineUtils the offline utils
     */
    XrmProxy.prototype.setOffline = function (offline) {
        this._offline = offline;
    };
    XrmProxy.prototype.setUtils = function (utilities) {
        this._utils = utilities;
    };
    XrmProxy.prototype.setPage = function (page) {
        this._page = page;
    };
    XrmProxy.prototype.setReporting = function (reporting) {
        this._reporting = reporting;
    };
    XrmProxy.prototype.setDiagnostics = function (diagnostics) {
        this._diagnostics = diagnostics;
    };
    XrmProxy.prototype.setClient = function (client) {
        this._client = client;
    };
    /**
     * set the navigation context
     * @param {ControlAndClientApiInterfaces.Navigation} xrmNavigation the navigation context
     */
    XrmProxy.prototype.setNavigationContext = function (xrmNavigation) {
        this._navigationContext = xrmNavigation;
    };
    /**
     * set the Device context
     * @param {ControlAndClientApiInterfaces.Device} xrmDevice the device context
     */
    XrmProxy.prototype.setDeviceContext = function (xrmDevice) {
        this._deviceContext = xrmDevice;
    };
    /**
     * set the External Context context
     * @param {ControlAndClientApiInterfaces.ExternalContext} The external context
     */
    XrmProxy.prototype.setExternalContext = function (xrmExternalContext) {
        this._externalContext = xrmExternalContext;
    };
    XrmProxy.prototype.setApplicationUI = function (applicationUI) {
        this._applicationUI = applicationUI;
    };
    /**
     * sets the web api
     * @param webApi The web api
     */
    XrmProxy.prototype.setWebApi = function (webApi) {
        this._webApiContext = webApi;
    };
    /**
     * Individual functions on the XrmProxy so the 'this' context on the original function can be maintained
     */
    /**
     * Opens an entity form or quick create form.
     * @param options entity form options.
     * @param parameters entity form parameters.
     * @returns promise defining success or failure of operation
     */
    XrmProxy.prototype.openForm = function (options, parameters) {
        return this._navigationContext.openForm(options, parameters);
    };
    /**
     * Open url, including file urls.
     * @param url url to be opened.
     * @param options window options for the url.
     */
    XrmProxy.prototype.openUrl = function (url, options) {
        return this._navigationContext.openUrl(url, options);
    };
    /**
     * Open a file.
     * @param file file to be opened description.
     * @param options Options for openFile.
     */
    XrmProxy.prototype.openFile = function (file, options) {
        return this._navigationContext.openFile(file, options);
    };
    /**
 * Opens Alert Dialog
 * @param alertStrings Strings to be used in alert dialog
 * @param options Dialog options
 * @returns promise defining success or failure of operation
 */
    XrmProxy.prototype.openAlertDialog = function (alertStrings, options) {
        return this._navigationContext.openAlertDialog(alertStrings, options);
    };
    /**
     * Opens Confirm Dialog
     * @param confirmStrings String which will be used in the dialog
     * @param options Options for the dialog
     * @returns promise defining success or failure of operation. the success case returns a boolean specifying if yes or no button where pressed
     */
    XrmProxy.prototype.openConfirmDialog = function (confirmStrings, options) {
        return this._navigationContext.openConfirmDialog(confirmStrings, options);
    };
    /**
     * Opens a Dialog
     * @param dialogName Unique name of the dialog
     * @param dialogArguments Input arguments which needs to be passed
     * @param options Dialog options
     * @returns promise defining success or failure of operation
     */
    XrmProxy.prototype.openDialog = function (name, options, parameters) {
        return this._navigationContext.openDialog(name, options, parameters);
    };
    /**
     * Opens Error Dialog
     * @param options Dialog options
     * @returns promise defining close or cancel response.
     */
    XrmProxy.prototype.openErrorDialog = function (options) {
        return this._navigationContext.openErrorDialog(options);
    };
    /**
     * ClientAPI: Opens a task flow.
     * @param name name of the task flow.
     * @param options task flow options.
     * @param parameters task flow parameters.
     * @returns promise defining success or failure of operation
     */
    XrmProxy.prototype.openTaskFlow = function (name, options, parameters) {
        return this._navigationContext.openTaskFlow(name, options, parameters);
    };
    /**
     * ClientAPI: Opens an HTML web resource.
     * @param name The name of the HTML web resource to open.
     * @param options Window options for the web resource.
     * @param data Data to be passed into the data parameter.
     */
    XrmProxy.prototype.openWebResource = function (name, options, data) {
        return this._navigationContext.openWebResource(name, options, data);
    };
    /**
    * Capture image.
     * @param options capture picture options.
     */
    XrmProxy.prototype.captureImage = function (options) {
        return this._deviceContext.captureImage(options);
    };
    /**
     * Capture audio.
     */
    XrmProxy.prototype.captureAudio = function () {
        return this._deviceContext.captureAudio();
    };
    /**
     * Capture video.
     */
    XrmProxy.prototype.captureVideo = function () {
        return this._deviceContext.captureVideo();
    };
    /**
     * Pick one or more files from device
     * @param options file pick options
     */
    XrmProxy.prototype.pickFile = function (options) {
        return this._deviceContext.pickFile(options);
    };
    /**
     * Invoke camera to scan Barcode and returns the Scanned Barcode value as string
     * In case of error, returns the ErrorResponse.
     * @returns A deferred containing the Scanned Barcode value. Or, error response object.
     */
    XrmProxy.prototype.getBarcodeValue = function () {
        return this._deviceContext.getBarcodeValue();
    };
    /**
     * Returns the current geolocation object.
     * In case of error, returns the error object.
     * @returns A deferred containing cordova geolocation object. Or, the error object.
     */
    XrmProxy.prototype.getCurrentPosition = function () {
        return this._deviceContext.getCurrentPosition();
    };
    /**
     * Retrieves descriptors for all available external contexts.
     * @return {Collection.ItemCollection<ExternalContextDescriptor>} A collection of the available external contexts.
     */
    XrmProxy.prototype.getAvailableExternalContexts = function () {
        return this._externalContext.getAvailableExternalContexts();
    };
    /**
     * Retrieves a property from an external context.
     * @param {string} externalContextId - The context from which to retrieve the property
     * @param {string} string - The property to retrieve
     * @param {ExternalContextPropertyOptions} [options] - Optional. Any additional options for retrieving the property.
     * @return {Promise<ExternalContextResult>} A promise for the external context property
     */
    XrmProxy.prototype.getExternalContextProperty = function (externalContextId, externalContextPropertyId, options) {
        return this._externalContext.getExternalContextProperty(externalContextId, externalContextPropertyId, options);
    };
    /**
     * Invokes an action on an external context.
     * @param {string} externalContextId - The context upon which to invoke the action
     * @param {string} externalContextActionId - The action to invoke
     * @param {ExternalContextActionOptions} [options] - Optional. Any additional options for invoking the action
     * @return {Promise<ExternalContextResult>} A promise for the invocation result
     */
    XrmProxy.prototype.invokeExternalContextAction = function (externalContextId, externalContextActionId, options) {
        return this._externalContext.invokeExternalContextAction(externalContextId, externalContextActionId, options);
    };
    /**
     * Adds the global notification.
     * From ApplicationUI.addGlobalNotification in Client API
     * @param type The type of the notification. GlobalNotificationType in ClientApi.
     * @param level The level of the notification. GlobalNotificationLevel in ClientApi.
     * @param message The message of the notification.
     * @param title The message of the notification.
     * @param action The action of the notification.
     * @param onCloseHandler The onCloseHandler for the notification.
     * @returns promise defining success or failure of operation. the success case returns a boolean specifying if yes or no button where pressed
     */
    XrmProxy.prototype.addGlobalNotification = function (type, level, message, title, action, onCloseHandler) {
        return this._applicationUI.addGlobalNotification(type, level, message, title, action, onCloseHandler);
    };
    /**
     * Clears the global Notification.
     * From ApplicationUI.clearGlobalNotification in Client API
     * @param id The id of a GlobalNotification.
     * @returns promise defining success or failure of operation. the success case returns a boolean specifying if yes or no button where pressed
     */
    XrmProxy.prototype.clearGlobalNotification = function (id) {
        return this._applicationUI.clearGlobalNotification(id);
    };
    /**
     * To retrieve a record from offline db
     * @param id guid to retrieve the record
     * @param entityType schema name of the entity type record to create
     * @param options Options having select and expand conditions
     * @returns The deferred object for the result of the operation
     */
    XrmProxy.prototype.retrieveRecord = function (entityType, id, options) {
        return this._webApiContext.retrieveRecord(entityType, id, options);
    };
    /**
     * To create a new record in mobile offline db
     * @param data dictionary with attribute schema name and value
     * @param entityType logical name of the entity type record to create
     * @returns The deferred object for the result of the operation.
     */
    XrmProxy.prototype.createRecord = function (entityType, data) {
        return this._webApiContext.createRecord(entityType, data);
    };
    /**
     * To update a record in mobile offline db
     * @param id guid to update the record
     * @param data dictionary containing changed attributes with schema name and value
     * @param entityType logical name of the entity type record to update
     * @returns The deferred object for the result of the operation.
     */
    XrmProxy.prototype.updateRecord = function (entityType, id, data) {
        return this._webApiContext.updateRecord(entityType, id, data);
    };
    /**
     * To delete the record mobile offline db
     * @param id guid to delete the record
     * @param entityType logical name of the entity type record to delete
     * @returns The deferred object for the result of the operation.
     */
    XrmProxy.prototype.deleteRecord = function (entityType, id) {
        return this._webApiContext.deleteRecord(entityType, id);
    };
    /**
     * To retrieve the records from mobile offline db
     * @param entityType Schema name of the entity type record to retrieve
     * @param options Record retrieval options
     * @param maxPageSize Records to be retrieved per page
     * @returns The deferred object for the result of the operation.
     */
    XrmProxy.prototype.retrieveMultipleRecords = function (entityType, options, maxPageSize) {
        return this._webApiContext.retrieveMultipleRecords(entityType, options, maxPageSize);
    };
    /**
     * Execute a single request.
     * @param request to be executed
     */
    XrmProxy.prototype.execute = function (request) {
        return this._webApiContext.execute(request);
    };
    /**
     * Execute multiple request.
     * @param requests array containing request to be executed
     */
    XrmProxy.prototype.executeMultiple = function (requests) {
        return this._webApiContext.executeMultiple(requests);
    };
    return XrmProxy;
}());
exports.XrmProxy = XrmProxy;
//singleton instance of telemetry
var instance = new XrmProxy();
exports.default = instance;

},{}],81:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var PopupService_1 = require("../Utilities/PopupService");
var PropertyBag_1 = require("../Models/PropertyBag");
var CCFPerformanceTracker_1 = require("../Utilities/CCFPerformanceTracker");
var VirtualComponentTranslator_1 = require("./VirtualComponentTranslator");
var View_1 = require("../../CommonComponents/Primitive/View");
var MicrosoftIcon_1 = require("../../CommonComponents/FontIcon/MicrosoftIcon");
var MicrosoftIconSymbol_1 = require("../../CommonComponents/FontIcon/MicrosoftIconSymbol");
var ManifestType_1 = require("../Utilities/ManifestType");
var LearningPathHelper_1 = require("../Utilities/LearningPathHelper");
var CCFUtilities = require("../Models/CustomControlUtilityPointers");
var MeasuringHandler_1 = require("../../CommonComponents/Common/MeasuringHandler/MeasuringHandler");
var TelemetryClient_1 = require("../Utilities/TelemetryClient");
var XrmProxy_1 = require("../Utilities/XrmProxy");
var CommandingWrapper_1 = require("../Models/CommandingWrapper");
var CustomControlHelper_1 = require("../Utilities/CustomControlHelper");
var CustomControlMemoizationHelper_1 = require("./Helpers/CustomControlMemoizationHelper");
var CustomControlAnimationHelper_1 = require("./Helpers/Animation/CustomControlAnimationHelper");
var CustomControlEntityReference_1 = require("../Models/CustomControlEntityReference");
var PropertyConstants = require("../Models/UpdatedPropertyConstants");
var CALENDAR_CONTROL_ID = "MscrmControls.Calendar.CalendarControl";
var CUSTOM_CONTROL_INIT = "CustomControlHostRoot.init";
var CUSTOM_CONTROL_UPDATE_VIEW = "CustomControlHostRoot.updateView";
var CUSTOM_CONTROL_GET_OUTPUTS = "CustomControlHostRoot.getOutputs";
var CUSTOM_CONTROL_DESTROY = "CustomControlHostRoot.destroy";
/**
 * Component representing a custom control
 */
var CustomControlHostRoot = (function (_super) {
    __extends(CustomControlHostRoot, _super);
    function CustomControlHostRoot(props, context) {
        _super.call(this, props);
        /**
         * The internal status
         */
        this._internalStatus = 0 /* Uninitialized */;
        /**
         * Debouncer for output change listener
         */
        this._outputChangedDebouncer = -1;
        /**
         * True if metadata were requested once
         */
        this._manifestRequestedOnce = false;
        /**
         * True if dynamic data were requested once through parameters
         */
        this._dynamicDataRequestedOnce = false;
        /**
         * Whether we are currently tracking the dimensions
         */
        this._trackingDimensions = false;
        /**
         * The measuring subscriber object
         */
        this._subscriber = null;
        /**
         * The latest recieved output from this control
         */
        this._latestOutputs = null;
        /**
         * Whether this control should try to ignore updates from itself
         */
        this._ignoreSelfUpdates = false;
        /**
         * Whether this control is currently rendering
         */
        this._currentlyRendering = false;
        /**
        * event params for Reporting Telemetry
         */
        this._EventParams = [];
        /**
         * See more popup info
         */
        this._seeMorePopupInfo = null;
        /**
         * The status of the see more
         */
        this._seeMorePopupStatus = -1 /* NotInUse */;
        /**
         * The reference to the div element necessary to
         */
        this._seeMorePopupAnimDiv = null;
        /**
         * A timeout helper to reset the animation state if our listeners fail
         */
        this._seeMoreTimeoutHelper = -1;
        /**
         * Whether the control should skip it's next update
         */
        this._skipControlUpdate = false;
        /**
         * Constant reference to the animation fade in function
         */
        this._animFadeInReference = this._seeMoreFadeIn.bind(this);
        /**
         * Constant reference to the animation end function
         */
        this._animEndReference = this._seeMoreEnd.bind(this);
        /**
         * An internal state object
         */
        this._internalState = {};
        /**
         * Whether this virtual control composites another control
         */
        this._isVirtualAndCompositing = false;
        /**
         * An internal tracker of updated properties
         */
        this._updateInternalTracker = [];
        /**
         * A memoized version of the host data object sent to children/prop bag
         */
        this._constantHostData = null;
        this.state = {
            _status: 1 /* Ready */,
        };
        TelemetryClient_1.default.setProps(props);
        this._updateInternalTracker = this._updateInternalTracker.concat(props.updatedProperties);
        this._parentId = CustomControlHelper_1.getParentIdFromProps(props);
        this._renderEvent = CCFPerformanceTracker_1.default.createPerformanceEvent("CustomControlHostRoot.render", 3 /* Info */);
        this._memoHelper = new CustomControlMemoizationHelper_1.CustomControlMemoizationHelper();
    }
    CustomControlHostRoot.prototype._getPopupService = function () {
        if (!this._popupService) {
            this._popupService = new PopupService_1.PopupService(this);
        }
        return this._popupService;
    };
    CustomControlHostRoot.prototype._initializeData = function () {
        var _this = this;
        this._internalStatus = 1 /* DataLoading */;
        this._propertyBag = this._createPropertyBag();
        var promises = [];
        var loadRes = this._loadResources();
        if (loadRes) {
            promises.push(loadRes);
        }
        // For Calendar control, the init needs Width & Height info
        if (this.props.manifest.ConstructorName === CALENDAR_CONTROL_ID) {
            var self_1 = this;
            promises.push(new Promise(function (resolve) { self_1.DIMENSION_TRACK_RESOLVE_FUNCTION = resolve; }));
            this._updateTrackResize(true);
        }
        if (this.props.actions.setXrmObject) {
            this._setXrmObject();
        }
        Promise.all(promises).then(function () {
            TelemetryClient_1.default.log(_this.props.controlId, "initialize data success");
            _this.DIMENSION_TRACK_RESOLVE_FUNCTION = null;
            if (_this._internalStatus !== 5 /* Destroyed */) {
                _this._internalStatus = 2 /* DataReady */;
                _this._initializeControl();
            }
        }, function () {
            TelemetryClient_1.default.error(_this.props.controlId, "initialize data failed");
            _this._onControlLoadedError();
            _this.setState({
                _status: 0 /* InError */,
            });
        });
    };
    /**
     * Returns true if the control is a virtual control or the manifest is missing (virtual until proven otherwise for rendering reasons)
     */
    CustomControlHostRoot.prototype._isVirtual = function () {
        return !this.props.manifest || this.props.manifest.IsVirtual;
    };
    /**
     * Returns styles for component dom element
     */
    CustomControlHostRoot.prototype._getDomIdDivStyleProperties = function (descriptor) {
        var styleProperties = {
            width: "100%",
            maxWidth: (this.props.parentDefinedControlProps && !CCFUtilities.IsNullOrUndefined(this.props.parentDefinedControlProps.width) && this.props.parentDefinedControlProps.width > 0) ? this.props.parentDefinedControlProps.width + "px" : null,
            maxHeight: (this.props.parentDefinedControlProps && !CCFUtilities.IsNullOrUndefined(this.props.parentDefinedControlProps.height) && this.props.parentDefinedControlProps.height > 0) ? this.props.parentDefinedControlProps.height + "px" : null,
        };
        if (descriptor && !descriptor.Visible) {
            styleProperties.display = "none";
        }
        /** else if (this.state._fullscreen)
        {
            styleProperties.height = "100%";
            styleProperties.width = "100%";
            styleProperties.position = "absolute";
            styleProperties.top = "0px";
            styleProperties.left = "0px";
            styleProperties.backgroundColor = "white";

            if (this.props.propBagData.themingData.fullScreenOverrideStyle)
            {
                styleProperties = Object.assign(styleProperties, this.props.propBagData.themingData.fullScreenOverrideStyle);
            }
        }**/
        return styleProperties;
    };
    /*
    * Generate the property bag object
    */
    CustomControlHostRoot.prototype._createPropertyBag = function () {
        var externalUtils = {
            getPopupService: this._getPopupService.bind(this),
            forceUpdate: this._forceUpdate.bind(this),
            bindDOMElement: this._bindDOMElement.bind(this),
            unbindDOMComponent: this._unbindDOMComponent.bind(this),
            updateComponent: this._updateChildComponent.bind(this),
            xrmProxy: XrmProxy_1.default,
        };
        return new PropertyBag_1.PropertyBag(this.props, externalUtils);
    };
    /**
     * Toggle ignoring self caused updates on this control
     * @param val the updated value to set whether to toggle resize tracking
     */
    CustomControlHostRoot.prototype._updateSelfUpdateIgnore = function (val) {
        this._ignoreSelfUpdates = val;
    };
    /**
     * Toggle resize tracking for this control
     * @param val the updated value to set whether to toggle resize tracking
     */
    CustomControlHostRoot.prototype._updateTrackResize = function (val) {
        this._trackingDimensions = val;
        if (this.props.parentDefinedControlProps && this.props.parentDefinedControlProps.toggleDimensionListener) {
            this.props.parentDefinedControlProps.toggleDimensionListener(this._trackingDimensions);
        }
        else {
            if (this._trackingDimensions) {
                if (this._subscriber === null) {
                    this._subscriber = {
                        getComponent: this._getComponent.bind(this),
                        onMeasure: this._updateDimensions.bind(this),
                    };
                }
                MeasuringHandler_1.MeasuringHandler.getInstance().addMeasuringSubscribers(this._subscriber);
                if (CCFUtilities.IsNullOrUndefined(this._internalState) || CCFUtilities.IsNullOrUndefined(this._internalState._latestWidth)) {
                    this._internalState = Object.assign(this._internalState, {
                        _latestWidth: this._getComponent().getBoundingClientRect().width,
                        _latestHeight: -1,
                    });
                }
                this._updateInternalTracker.push(PropertyConstants.LAYOUT_PROPERTY);
                this._forceUpdate();
            }
            else {
                if (this._subscriber) {
                    MeasuringHandler_1.MeasuringHandler.getInstance().removeMeasuringSubscribers(this._subscriber);
                }
                this._forceUpdate();
            }
        }
    };
    CustomControlHostRoot.prototype._seeMorePopup = function (value, autosize) {
        if (autosize === void 0) { autosize = false; }
        var componentInfo = this._getComponent().getBoundingClientRect();
        switch (this._seeMorePopupStatus) {
            case -1 /* NotInUse */:
                if (!value)
                    return; // Already unpopped, nothing to do.
                this._seeMorePopupStatus = 0 /* PopFadeOutAndMove */;
                var docWidth = document.body.getBoundingClientRect().width;
                var endWidth = !autosize || componentInfo.width > ((2 / 3) * docWidth) ? docWidth :
                    (componentInfo.width > ((1 / 3) * docWidth) ? (2 / 3) * docWidth : ((1 / 3) * docWidth));
                var fullScreen = (endWidth === docWidth);
                endWidth = endWidth - (fullScreen ? 80 : 0);
                var endHeight = document.body.getBoundingClientRect().height - 80;
                var endTop = 40 + (.5 * endHeight) - (.5 * componentInfo.height);
                var endLeft = (fullScreen ? 40 : 0) + ((fullScreen ? endWidth : docWidth) / 2) - (componentInfo.width / 2);
                this._seeMorePopupInfo = {
                    startHeight: componentInfo.height,
                    startWidth: componentInfo.width,
                    startLeft: componentInfo.left,
                    startTop: componentInfo.top,
                    endTop: endTop,
                    endLeft: endLeft,
                    endWidthInner: endWidth - 48,
                    endHeightInner: endHeight - 48,
                    endWidth: endWidth,
                    endHeight: endHeight,
                };
                this._skipControlUpdate = this._isVirtual();
                this._forceUpdate();
                break;
            case 2 /* PoppedOut */:
                if (value)
                    return; // Already popped out, nothing to do.
                this._seeMorePopupStatus = 3 /* ReturnFadeOutAndMove */;
                this._skipControlUpdate = this._isVirtual();
                this._forceUpdate();
                break;
        }
    };
    CustomControlHostRoot.prototype._getPopupDiv = function () {
        switch (this._seeMorePopupStatus) {
            case 0 /* PopFadeOutAndMove */:
            case 3 /* ReturnFadeOutAndMove */:
                if (this._isVirtual()) {
                    return this._getComponent().lastChild;
                }
                else {
                    return this._getComponent().parentElement.parentElement;
                }
            case 4 /* ReturnFadeIn */:
                if (this._isVirtual()) {
                    if (this._memoHelper.getIsCompositing()) {
                        return this._getComponent().lastChild.lastChild;
                    }
                    return this._getComponent();
                }
                else {
                    return this._getComponent().parentElement.parentElement;
                }
            case 1 /* PopFadeIn */:
                if (this._isVirtual()) {
                    this._getComponent().lastChild.lastChild;
                }
                else {
                    return this._getComponent().parentElement.parentElement;
                }
        }
        return this._getComponent();
    };
    CustomControlHostRoot.prototype._checkOnPopupStatus = function () {
        switch (this._seeMorePopupStatus) {
            case 0 /* PopFadeOutAndMove */:
            case 3 /* ReturnFadeOutAndMove */:
                this._seeMorePopupAnimDiv = this._getPopupDiv();
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 2500);
                break;
            case 4 /* ReturnFadeIn */:
                this._seeMorePopupAnimDiv = this._getPopupDiv();
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animEndReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animEndReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 1000);
                break;
            case 1 /* PopFadeIn */:
                this._seeMorePopupAnimDiv = this._getPopupDiv();
                this._seeMorePopupAnimDiv.addEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.addEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 1000);
                break;
        }
    };
    CustomControlHostRoot.prototype._seeMoreFadeIn = function () {
        if (this._seeMoreTimeoutHelper !== -1) {
            window.clearTimeout(this._seeMoreTimeoutHelper);
            this._seeMoreTimeoutHelper = -1;
        }
        switch (this._seeMorePopupStatus) {
            case 1 /* PopFadeIn */:
                this._seeMorePopupStatus = 2 /* PoppedOut */;
                this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animFadeInReference);
                break;
            case 0 /* PopFadeOutAndMove */:
                this._seeMorePopupStatus = 1 /* PopFadeIn */;
                this._seeMoreTimeoutHelper = window.setTimeout(this._seeMoreFadeIn.bind(this), 1500);
                this._skipControlUpdate = !this._isVirtual();
                this._forceUpdate();
                break;
            case 3 /* ReturnFadeOutAndMove */:
                this._seeMorePopupStatus = 4 /* ReturnFadeIn */;
                this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animFadeInReference);
                this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animFadeInReference);
                this._seeMorePopupAnimDiv = null;
                this._skipControlUpdate = !this._isVirtual();
                this._forceUpdate();
        }
    };
    CustomControlHostRoot.prototype._seeMoreEnd = function () {
        if (this._seeMoreTimeoutHelper !== -1) {
            window.clearTimeout(this._seeMoreTimeoutHelper);
            this._seeMoreTimeoutHelper = -1;
        }
        this._seeMorePopupAnimDiv.removeEventListener("animationend", this._animEndReference);
        this._seeMorePopupAnimDiv.removeEventListener("webkitAnimationEnd", this._animEndReference);
        this._seeMorePopupAnimDiv = null;
        this._seeMorePopupStatus = -1 /* NotInUse */;
        this._seeMorePopupInfo = null;
    };
    /**
     * Retrieve metadata for this custom control
     */
    CustomControlHostRoot.prototype._loadManifest = function () {
        var _this = this;
        if (this.props.manifest || this._manifestRequestedOnce) {
            // manifest available or retrieval already started once
            // This bit should technically never been hit, but leaving as is for redundancy.
            return Promise.resolve(null);
        }
        if (!this.props.actions.loadManifest) {
            // can't load missing manifest
            return Promise.reject("Manifest not found for control with id " + this.props.controlId);
        }
        this._manifestRequestedOnce = true;
        // create new Promise based on the jQuery's (Web Client) or native es6 (UC)
        return new Promise(function (resolve, reject) {
            _this.props.actions.loadManifest(_this.props.configuration.CustomControlId).then(resolve, reject);
        }).then(function () { return null; });
    };
    /**
     * Load the associated resources for this custom control
     */
    CustomControlHostRoot.prototype._loadResources = function () {
        // TODO: hook this into AssetManagement via state tree
        return this.props.actions.loadResources(this.props.manifest);
    };
    /**
     * Creates the Xrm object for the context and saves it if there is not already one
     */
    CustomControlHostRoot.prototype._setXrmObject = function () {
        return this.props.actions.setXrmObject(XrmProxy_1.default);
    };
    /**
     * Bind a new react structure to the given DOMNode
     */
    CustomControlHostRoot.prototype._bindDOMElement = function (virtualComponent, DOMNode) {
        var newChildComponent = VirtualComponentTranslator_1.VirtualComponentTranslator.renderVirtualComponent(virtualComponent, this.props, this._generateHostData(), this._memoHelper, false);
        if (this._childElements == null) {
            this._childElements = {};
        }
        this._childElements[virtualComponent.getComponentId()] = DOMNode;
        this.props.actions.renderReactSubtree(this, newChildComponent, DOMNode);
    };
    CustomControlHostRoot.prototype._updateChildComponent = function (id, props) {
    };
    CustomControlHostRoot.prototype._forceUpdate = function (callback) {
        if (!this._currentlyRendering) {
            var scheduleRender = this.props.propBagData.utilsData.scheduleRender;
            if (scheduleRender) {
                scheduleRender(this.forceUpdate.bind(this, callback));
            }
            else {
                this.forceUpdate(callback);
            }
        }
        else if (this.props.propBagMethods && this.props.propBagMethods.utils && this.props.propBagMethods.utils.logMessage) {
            this.props.propBagMethods.utils.logMessage(this.props.configuration.Name, "You are attempting to force a render during a render of your virtual control, which would cause an infinite loop. Please do not call \"requestRender\" during your control's updateView method", 2 /** Tracer log level warning, but we don't want dependency on that in CCF **/);
        }
    };
    /**
     * Unmounts component from DOM node and removes the corresponding view model from the parent's childViewModels
     * dictionary - for standard controls only
     */
    CustomControlHostRoot.prototype._unbindDOMComponent = function (componentId) {
        var success = false;
        if (this._childElements != null) {
            var DOMElement = this._childElements[componentId];
            if (DOMElement != null) {
                success = ReactDOM.unmountComponentAtNode(DOMElement);
                if (success) {
                    this.props.actions.clearNestedChild(componentId);
                    delete this._childElements[componentId];
                }
            }
        }
        return success;
    };
    /**
     * Clear all the DOM components
     */
    CustomControlHostRoot.prototype._clearAllDOMComponents = function () {
        var success = true;
        for (var domKey in this._childElements) {
            success = success && this._unbindDOMComponent(domKey);
        }
        return success;
    };
    /**
     * Ensure all dynamic data parameters are receiving or already received any data
     * @param props Custom control host props
     */
    CustomControlHostRoot.prototype._ensureParameterDynamicDataInitialization = function (props) {
        if (this._dynamicDataRequestedOnce) {
            return;
        }
        this._dynamicDataRequestedOnce = true;
        for (var paramKey in props.dynamicData.parameters) {
            var wrapper = props.dynamicData.parameters[paramKey];
            if (wrapper && wrapper.ensureDataInitialization) {
                var initializableWrapper = wrapper;
                var manifestType = initializableWrapper.getParameterManifestType();
                if (!this._commandingWrapper && (manifestType === ManifestType_1.ManifestType.Grid || manifestType === ManifestType_1.ManifestType.TimelineWall)) {
                    this._commandingWrapper = new CommandingWrapper_1.CommandingWrapper(props);
                    this._commandingWrapper.setReactContext(this.context);
                }
                if (manifestType === ManifestType_1.ManifestType.Grid) {
                    this._commandingWrapper.addDataSetWrapper(initializableWrapper);
                    initializableWrapper.ensureDataInitialization({
                        retrieveAction: props.actions.retrieveGridData,
                        retrieveViewAction: props.actions.retrieveView,
                        refreshDataSetParameter: props.actions.refreshDataSetParameter,
                        retrieveLookupMetadataAction: props.actions.retrieveLookupMetadataAction,
                        retrieveDataSetLookupCellParameter: props.actions.retrieveDataSetLookupCellParameter,
                        executeAddOnLoad: props.actions.executeAddOnLoad,
                        updateFieldValue: props.actions.updateFieldValue,
                        saveEmbeddedEntity: props.actions.saveEmbeddedEntity,
                        executeKbSearch: props.actions.executeFullTextSearchKnowledgeArticle,
                        executeRetrieveKeyPhrasesForKnowledgeSearch: props.actions.executeRetrieveKeyPhrasesForKnowledgeSearch,
                        executeRetrieveFieldFromParentRecord: props.actions.executeRetrieveFieldFromParentRecord,
                        executeIncrementKnowledgeArticleViewCount: props.actions.executeIncrementKnowledgeArticleViewCount,
                        executeSearchWidgetAction: props.actions.executeSearchWidgetAction,
                        executeSearchWidgetInitialization: props.actions.executeSearchWidgetInitialization,
                        executeNotifyHandlersThatEventOccurred: props.actions.executeNotifyHandlersThatEventOccurred,
                        executeUpdateCurrentSearchText: props.actions.executeUpdateCurrentSearchText,
                        openDatasetItem: null,
                        retrieveEntityData: props.actions.retrieveEntityData,
                        retrieveForm: props.actions.retrieveForm,
                        retrieveRecordForForm: props.actions.retrieveRecordDataForForm,
                        forceUpdate: this._forceUpdate.bind(this),
                        updateControlMemoizedDataSet: props.actions.updateControlMemoizedDataSet,
                        loadWebResource: props.actions.loadWebResource,
                    });
                }
                else if (manifestType === ManifestType_1.ManifestType.QuickForm) {
                    initializableWrapper.ensureDataInitialization({
                        retrieveAction: props.actions.retrieveGridData,
                        retrieveViewAction: props.actions.retrieveView,
                        refreshDataSetParameter: props.actions.refreshDataSetParameter,
                        retrieveLookupMetadataAction: props.actions.retrieveLookupMetadataAction,
                        retrieveDataSetLookupCellParameter: props.actions.retrieveDataSetLookupCellParameter,
                        executeAddOnLoad: props.actions.executeAddOnLoad,
                        updateFieldValue: props.actions.updateFieldValue,
                        saveEmbeddedEntity: props.actions.saveEmbeddedEntity,
                        executeKbSearch: props.actions.executeFullTextSearchKnowledgeArticle,
                        executeRetrieveKeyPhrasesForKnowledgeSearch: props.actions.executeRetrieveKeyPhrasesForKnowledgeSearch,
                        executeRetrieveFieldFromParentRecord: props.actions.executeRetrieveFieldFromParentRecord,
                        executeIncrementKnowledgeArticleViewCount: props.actions.executeIncrementKnowledgeArticleViewCount,
                        executeSearchWidgetAction: props.actions.executeSearchWidgetAction,
                        executeSearchWidgetInitialization: props.actions.executeSearchWidgetInitialization,
                        executeNotifyHandlersThatEventOccurred: props.actions.executeNotifyHandlersThatEventOccurred,
                        executeUpdateCurrentSearchText: props.actions.executeUpdateCurrentSearchText,
                        openDatasetItem: null,
                        retrieveEntityData: props.actions.retrieveEntityData,
                        retrieveForm: props.actions.retrieveForm,
                        retrieveRecordForForm: props.actions.retrieveRecordDataForForm,
                        forceUpdate: this._forceUpdate.bind(this),
                        updateControlMemoizedDataSet: props.actions.updateControlMemoizedDataSet,
                        loadWebResource: props.actions.loadWebResource,
                    });
                }
            }
            if (wrapper && wrapper.ensureLookupMetaDataInitialization) {
                var lookupWrapper = wrapper;
                lookupWrapper.ensureLookupMetaDataInitialization({
                    retrieveLookupMetadataAction: props.actions.retrieveLookupMetadataAction,
                });
            }
            if (wrapper && wrapper.ensureTimelinewallCommandsInitialization) {
                var timelinewallWrapper = wrapper;
                var manifestType = timelinewallWrapper.getParameterManifestType();
                if (manifestType === ManifestType_1.ManifestType.TimelineWall) {
                    wrapper.ensureTimelinewallCommandsInitialization(this.context, props);
                }
            }
            if (wrapper && wrapper.setControlReRender) {
                wrapper.setControlReRender(this._forceUpdate.bind(this));
            }
        }
    };
    /**
     * Initialize a control
     */
    CustomControlHostRoot.prototype._initializeControl = function () {
        this._ensureParameterDynamicDataInitialization(this.props);
        // Do nothing if data is not yet ready or if we're already in the process of initializing the control
        if (!this.props.dynamicData.dataReady || this._internalStatus === 3 /* PreInitialized */) {
            return;
        }
        this._internalStatus = 3 /* PreInitialized */;
        try {
            /* tslint:disable:no-eval */
            this._controlInstance = eval("new " + this.props.manifest.ConstructorName + "()");
            /* tslint:enable:no-eval */
            var generatedPropertyBag = this._propertyBag.generateBag(this.props, this._generateHostDataForPropertyBag());
            var virtualcontrol = this._isVirtual();
            if (virtualcontrol) {
                this._executeAnyOnLoadEventsWhenNeeded();
                var stop = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_INIT, 3 /* Info */).startStopwatch({
                    controlId: this.props.controlId,
                    parentId: this._parentId,
                    level: 2 /* LifeCycle */ .toString(),
                });
                var bindOutput = this._onOutputChanged.bind(this);
                var propPersonalizationState = this.props.personalizationState;
                try {
                    this._controlInstance.init(generatedPropertyBag, bindOutput, propPersonalizationState);
                }
                catch (exception) {
                    var eventParams = this._generateEventParams(CUSTOM_CONTROL_INIT);
                    XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, eventParams);
                    throw exception;
                }
                stop();
            }
            else {
                this._executeAnyOnLoadEventsWhenNeeded();
                var stop = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_INIT, 3 /* Info */).startStopwatch({
                    controlId: this.props.controlId,
                    parentId: this._parentId,
                    level: 2 /* LifeCycle */ .toString(),
                });
                var element = this._rootElement; //ReactDOM.findDOMNode(this) as HTMLDivElement;
                if (!element) {
                    // Somehow this has been called before the ref being resolved, so just shortcircuit and hope things go better next time :)
                    return;
                }
                // Set custom control testhook for standard controls
                element.setAttribute("data-id", this.props.controlId + "_container");
                var bindOutput = this._onOutputChanged.bind(this);
                var propPersonalizationState = this.props.personalizationState;
                ;
                try {
                    this._controlInstance.init(generatedPropertyBag, bindOutput, propPersonalizationState, element);
                }
                catch (exception) {
                    var eventParams = this._generateEventParams(CUSTOM_CONTROL_INIT);
                    XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, eventParams);
                    throw exception;
                }
                stop();
            }
            var accessibilityData = this._propertyBag.getAccessibilityData();
            if (accessibilityData && accessibilityData.keyboardShortcuts && accessibilityData.keyboardShortcuts.length > 0) {
                var props = { id: this.props.controlId, keyboardShortcuts: accessibilityData.keyboardShortcuts, context: this.context };
                this._accessibilityComponent = this.props.actions.createAccessibilityComponent(props);
            }
            else {
                this._accessibilityComponent = null;
            }
            this._internalStatus = 4 /* Initialized */;
            if (virtualcontrol) {
                this.forceUpdate();
            }
            else {
                this._updateControl();
            }
        }
        catch (exception) {
            if (this._internalStatus === 5 /* Destroyed */) {
                TelemetryClient_1.default.error(this.props.controlId, "Initialization called on a destroyed control, " + exception);
            }
            else {
                TelemetryClient_1.default.error(this.props.controlId, "Error occured during initialization, " + exception);
            }
            this._onControlLoadedError();
            this.setState({
                _status: 0 /* InError */,
            });
        }
    };
    /**
     * Update a control
     */
    CustomControlHostRoot.prototype._updateControl = function () {
        if (this._skipControlUpdate) {
            this._skipControlUpdate = false;
            return;
        }
        // Only have to worry about standard controls here, virtual ones are taken care of in render
        if (!this._isVirtual()) {
            var endWork = CCFPerformanceTracker_1.default.trackWork("CCF.updateControl");
            try {
                var instance = this._controlInstance;
                var generateBag = this._propertyBag.generateBag(this.props, this._generateHostDataForPropertyBag());
                this._executeAnyOnLoadEventsWhenNeeded();
                var stop = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_UPDATE_VIEW, 3 /* Info */).startStopwatch({
                    controlId: this.props.controlId,
                    parentId: this._parentId,
                    level: 2 /* LifeCycle */ .toString(),
                });
                this._currentlyRendering = true;
                try {
                    if (this.props.shouldRender === undefined || this.props.shouldRender) {
                        instance.updateView(generateBag);
                    }
                }
                catch (exception) {
                    var eventParams = this._generateEventParams(CUSTOM_CONTROL_UPDATE_VIEW);
                    XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, eventParams);
                }
                this._currentlyRendering = false;
                stop();
            }
            catch (exception) {
                TelemetryClient_1.default.error(this.props.controlId, "Error occured during update, " + exception);
            }
            endWork();
        }
    };
    /**
     *  Execute Any AddOnLoad events
     */
    CustomControlHostRoot.prototype._executeAnyOnLoadEventsWhenNeeded = function () {
        if (this.props.dynamicData && this.props.dynamicData.parameters) {
            for (var paramKey in this.props.dynamicData.parameters) {
                if (this.props.dynamicData.parameters[paramKey] && this.props.dynamicData.parameters[paramKey]) {
                    var wrapper = this.props.dynamicData.parameters[paramKey];
                    var dataSetWrapper = wrapper;
                    if (dataSetWrapper && dataSetWrapper.getParameterManifestType && dataSetWrapper.getUpdateFlag && dataSetWrapper.getParameterManifestType() === ManifestType_1.ManifestType.Grid && dataSetWrapper.getUpdateFlag()) {
                        this.props.actions.executeAddOnLoad(wrapper);
                    }
                }
            }
        }
    };
    /**
     * Dispose the control
     */
    CustomControlHostRoot.prototype._disposeControl = function () {
        try {
            var stop = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_DESTROY, this.props.logLevel).startStopwatch({
                controlId: this.props.controlId,
                parentId: this._parentId,
                level: 2 /* LifeCycle */ .toString(),
            });
            try {
                this._controlInstance.destroy();
            }
            catch (exception) {
                var EventParams = this._generateEventParams(CUSTOM_CONTROL_DESTROY);
                XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, EventParams);
            }
            stop();
            this._clearAllDOMComponents();
        }
        catch (exception) {
            TelemetryClient_1.default.error(this.props.controlId, "Error occured during dispose, " + exception);
        }
    };
    /**
     * Report Error to parent listener
     */
    CustomControlHostRoot.prototype._onControlLoadedError = function () {
        if (this.props.parentDefinedControlProps && this.props.parentDefinedControlProps.onControlLoadedError) {
            this.props.parentDefinedControlProps.onControlLoadedError();
        }
    };
    /**
     * Callback for control to alert framework that its outputs have changed
     */
    CustomControlHostRoot.prototype._onOutputChanged = function () {
        var _this = this;
        if (this._outputChangedDebouncer !== -1) {
            window.clearTimeout(this._outputChangedDebouncer);
        }
        if (this.props.actions.registerOngoingWork && !this._internalWorkPromiseResolve) {
            this.props.actions.registerOngoingWork(new Promise(function (resolve, reject) {
                _this._internalWorkPromiseResolve = resolve;
            }));
        }
        this._outputChangedDebouncer = window.setTimeout(this._onOutputChangedInternal.bind(this), 100);
    };
    ;
    /**
     * Input for output change debouncer
     */
    CustomControlHostRoot.prototype._onOutputChangedInternal = function () {
        var _this = this;
        this._outputChangedDebouncer = -1;
        var outputPerformanceMarker = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_GET_OUTPUTS, this.props.logLevel).startStopwatch({
            controlId: this.props.controlId,
            parentId: this._parentId,
            level: 2 /* LifeCycle */ .toString(),
        });
        var outputs;
        try {
            outputs = this._controlInstance.getOutputs();
        }
        catch (exception) {
            var EventParams = this._generateEventParams(CUSTOM_CONTROL_GET_OUTPUTS);
            XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, EventParams);
        }
        outputPerformanceMarker();
        this._latestOutputs = outputs;
        var formattedOutputs = {};
        var _loop_1 = function(key) {
            var manifestDefinition = void 0;
            // Due to differences in the serializers that provide manifests for uclient vs AIR, this object can be presented as two different interfaces
            // To combat this, we will try the Uclient interface first, then attempt to fall back to the alternate AIR interface if this is unsuccessful
            manifestDefinition = this_1.props.manifest.Properties.Properties[key];
            if (!manifestDefinition && this_1.props.manifest.Properties.Properties instanceof Array) {
                manifestDefinition = this_1.props.manifest.Properties.Properties.find(function (value) { return value.Name === key; });
            }
            if (manifestDefinition) {
                var config = this_1.props.configuration.Parameters[key];
                if (manifestDefinition.Usage === 0 /* Bound */ &&
                    config && config.Usage === 3 /* FalseBound */) {
                    var falseBoundConfig = config;
                    falseBoundConfig.Callback(outputs[key]);
                }
                else if (manifestDefinition.Usage === 0 /* Bound */ ||
                    manifestDefinition.Usage === 2 /* Output */) {
                    var dynamic = this_1.props.dynamicData.parameters[key];
                    var parameter = void 0;
                    if (dynamic.getLatestData) {
                        parameter = dynamic.getLatestData();
                    }
                    else {
                        parameter = dynamic;
                    }
                    var newOutput = {
                        value: outputs[key],
                        type: manifestDefinition.Usage,
                        paramType: parameter.type,
                    };
                    if (parameter.attributes && parameter.attributes.LogicalName) {
                        newOutput.fieldName = parameter.attributes.LogicalName;
                    }
                    if (parameter.type === ManifestType_1.ManifestType.LookupSimple || parameter.type === ManifestType_1.ManifestType.LookupCustomer || parameter.type === ManifestType_1.ManifestType.LookupOwner
                        || parameter.type === ManifestType_1.ManifestType.LookupPartyList || parameter.type === ManifestType_1.ManifestType.LookupRegarding) {
                        if (newOutput.value && newOutput.value instanceof Array && newOutput.value.length > 0) {
                            // Lookup exposed attribute is an array of entityReference, we need deep copy of it
                            var outputValues = newOutput.value;
                            var newValueArray = [];
                            for (var _i = 0, outputValues_1 = outputValues; _i < outputValues_1.length; _i++) {
                                var outputValue = outputValues_1[_i];
                                newValueArray.push(new CustomControlEntityReference_1.CustomControlEntityReference(outputValue.entityName, outputValue.id, outputValue.name));
                            }
                            newOutput.value = newValueArray;
                        }
                    }
                    formattedOutputs[key] = newOutput;
                }
            }
        };
        var this_1 = this;
        for (var key in outputs) {
            _loop_1(key);
        }
        var entityTypeName = this.props.formInfo ? this.props.formInfo.EntityName : null;
        var recordId = this.props.formInfo ? this.props.formInfo.RecordId : null;
        var closestControlParentWithSave = this.props.parentDefinedControlProps && this.props.parentDefinedControlProps.closestParentWithContext;
        var updateProm = this.props.actions.updateOutputs(this.props.id, entityTypeName, recordId, this.props.controlId, closestControlParentWithSave, formattedOutputs, this.props.contextToken);
        // Some clients require the update outputs to be asynchronous. This logic allows us to have our updates wait for that promise to return before we resolve the internal work promise
        // If we update all clients to implement this behavior, this can be removed.
        if (this._internalWorkPromiseResolve) {
            if (updateProm) {
                updateProm.then(function () {
                    _this._internalWorkPromiseResolve(true);
                    _this._internalWorkPromiseResolve = null;
                }, function () {
                    _this._internalWorkPromiseResolve(true);
                    _this._internalWorkPromiseResolve = null;
                });
            }
            else {
                this._internalWorkPromiseResolve(true);
                this._internalWorkPromiseResolve = null;
            }
        }
    };
    ;
    /**
     * Generate Telemetry reporting event parameters
     * @param apiName name of the control lifecycle event
     * @param apiParams parameters of the control lifecycle events
     */
    CustomControlHostRoot.prototype._generateEventParams = function (apiName) {
        var eventParams = [];
        var CustomControlId = {
            name: "CustomControlId",
            value: this.props.controlId,
        };
        var CustomControlName = {
            name: "CustomControlName",
            value: this.props.manifest.CustomControlId,
        };
        var APIName = {
            name: "APIName",
            value: apiName,
        };
        var HostingPage = {
            name: "HostingPage",
            value: this.props.pageType,
        };
        var ParentCCContext = {
            name: "ParentCCContext",
            value: this._parentId,
        };
        var Entity = {
            name: "Entity",
            value: this.props.propBagData ? this.props.propBagData.modeData.entityTypeName : null,
        };
        eventParams.push(CustomControlId);
        eventParams.push(CustomControlName);
        eventParams.push(APIName);
        eventParams.push(HostingPage);
        if (!ParentCCContext) {
            eventParams.push(ParentCCContext);
        }
        if (!Entity) {
            eventParams.push(Entity);
        }
        return eventParams;
    };
    /**
     * Get the allocated height for this control
     */
    CustomControlHostRoot.prototype._getAllocatedHeight = function () {
        if (this._seeMorePopupInfo &&
            this._seeMorePopupStatus !== 0 /* PopFadeOutAndMove */ &&
            this._seeMorePopupStatus !== 4 /* ReturnFadeIn */) {
            return this._seeMorePopupInfo.endHeight;
        }
        return (this.props.parentDefinedControlProps && !CCFUtilities.IsNullOrUndefined(this.props.parentDefinedControlProps.height)) ?
            this.props.parentDefinedControlProps.height :
            (CCFUtilities.IsNullOrUndefined(this._internalState._latestHeight) ? -1 : this._internalState._latestHeight);
    };
    /**
     * Get the allocated width for this control
     */
    CustomControlHostRoot.prototype._getAllocatedWidth = function () {
        if (this._seeMorePopupInfo &&
            this._seeMorePopupStatus !== 0 /* PopFadeOutAndMove */ &&
            this._seeMorePopupStatus !== 4 /* ReturnFadeIn */) {
            return this._seeMorePopupInfo.endWidth;
        }
        return (this.props.parentDefinedControlProps && !CCFUtilities.IsNullOrUndefined(this.props.parentDefinedControlProps.width)) ?
            this.props.parentDefinedControlProps.width :
            (CCFUtilities.IsNullOrUndefined(this._internalState._latestWidth) ? -1 : this._internalState._latestWidth);
    };
    /**
     * Generate the bag of data from this object to pass to the property bag
     */
    CustomControlHostRoot.prototype._generateHostDataForPropertyBag = function () {
        var data = this._generateHostData();
        if (data.updatedProperties !== this._updateInternalTracker) {
            data.updatedProperties = this._updateInternalTracker;
            if (this._updateInternalTracker.length > 0) {
                this._updateInternalTracker = [];
            }
        }
        return data;
    };
    /**
     * Generate the bag of data from this object to helper functions (i.e. property bag, VCT)
     */
    CustomControlHostRoot.prototype._generateHostData = function () {
        if (!this._constantHostData) {
            this._constantHostData = {
                allocatedHeight: -1,
                allocatedWidth: -1,
                trackResize: this._updateTrackResize.bind(this),
                updateFullscreen: this._seeMorePopup.bind(this),
                ignoreUpdates: this._updateSelfUpdateIgnore.bind(this),
                updatedProperties: [],
            };
        }
        if (!this._trackingDimensions) {
            return this._constantHostData;
        }
        return Object.assign({}, this._constantHostData, {
            allocatedHeight: this._getAllocatedHeight(),
            allocatedWidth: this._getAllocatedWidth(),
        });
    };
    /**
     * Gets the root element of this CCHR
     */
    CustomControlHostRoot.prototype._getComponent = function () {
        return this._rootElement ? this._rootElement : ReactDOM.findDOMNode(this);
    };
    /**
     * Set the latest dimensions for this control
     */
    CustomControlHostRoot.prototype._updateDimensions = function (width, height) {
        if (this._trackingDimensions && (width !== this._internalState._latestWidth)) {
            this._internalState = Object.assign(this._internalState, {
                _latestWidth: width,
            });
            this._updateInternalTracker.push(PropertyConstants.LAYOUT_PROPERTY);
            this._forceUpdate();
        }
    };
    /**
     * Called after the component is updated
     */
    CustomControlHostRoot.prototype.componentWillUnmount = function () {
        var stop = CCFPerformanceTracker_1.default.createPerformanceEvent("CustomControlHostRoot.componentWillUnmount", this.props.logLevel).startStopwatch({
            controlId: this.props.controlId,
            parentId: this._parentId,
            level: 2 /* LifeCycle */ .toString(),
        });
        if (this._accessibilityComponent !== undefined && this._accessibilityComponent !== null) {
            this._accessibilityComponent.componentWillUnmount();
        }
        if (this._commandingWrapper) {
            this._commandingWrapper.unmountAll();
        }
        if (this._internalStatus === 4 /* Initialized */) {
            this._disposeControl();
        }
        if (this._subscriber) {
            MeasuringHandler_1.MeasuringHandler.getInstance().removeMeasuringSubscribers(this._subscriber);
        }
        if (this._memoHelper) {
            this._memoHelper.destroy();
        }
        this._internalStatus = 5 /* Destroyed */;
        stop();
    };
    /**
     * Called after the component is rendered initially
     */
    CustomControlHostRoot.prototype.componentDidMount = function () {
        var _this = this;
        var stop = CCFPerformanceTracker_1.default.createPerformanceEvent("CustomControlHostRoot.componentDidMount", this.props.logLevel).startStopwatch({
            controlId: this.props.controlId,
            parentId: this._parentId,
            level: 2 /* LifeCycle */ .toString(),
        });
        if (this._accessibilityComponent !== undefined && this._accessibilityComponent !== null) {
            this._accessibilityComponent.componentDidMount();
        }
        if (this.props.stateToPropsMappingError || this._manifestRetrieveFailed || this.state._status === 0 /* InError */) {
            if (this.state._status !== 0 /* InError */) {
                this._onControlLoadedError();
                this.setState({
                    _status: 0 /* InError */,
                });
            }
            return;
        }
        if (!this.props.manifest) {
            if (!this._manifestRequestedOnce) {
                this._loadManifest().catch(function (err) {
                    _this._onControlLoadedError();
                    _this._manifestRetrieveFailed = true;
                    _this.setState({
                        _status: 0 /* InError */,
                    });
                });
            }
            // manifest not available, but this._manifestRetrieveFailed still false => manifest still being retrieved
            return;
        }
        switch (this._internalStatus) {
            case 0 /* Uninitialized */:
                this._initializeData();
                break;
            case 2 /* DataReady */:
                this._initializeControl();
                break;
            case 4 /* Initialized */:
                this._updateControl();
                break;
            default:
                break;
        }
        stop();
    };
    /**
     * Called when the component gets new props
     */
    CustomControlHostRoot.prototype.componentWillReceiveProps = function (nextProps) {
        this._updateInternalTracker = this._updateInternalTracker.concat(nextProps.updatedProperties);
    };
    /**
     * Called after the component is updated
     */
    CustomControlHostRoot.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this._accessibilityComponent !== undefined && this._accessibilityComponent !== null) {
            this._accessibilityComponent.componentDidUpdate();
        }
        if (this.props.stateToPropsMappingError || this._manifestRetrieveFailed || this.state._status === 0 /* InError */) {
            if (this.state._status !== 0 /* InError */) {
                this._onControlLoadedError();
                this.setState({
                    _status: 0 /* InError */,
                });
            }
            return;
        }
        if (this._seeMorePopupStatus !== -1 /* NotInUse */) {
            this._checkOnPopupStatus();
        }
        if (!this.props.manifest) {
            if (!this._manifestRequestedOnce) {
                this._loadManifest().catch(function (err) {
                    _this._manifestRetrieveFailed = true;
                    _this._onControlLoadedError();
                    _this.setState({
                        _status: 0 /* InError */,
                    });
                });
            }
            // manifest not available, but this._manifestRetrieveFailed still false => manifest still being retrieved
            return;
        }
        switch (this._internalStatus) {
            case 0 /* Uninitialized */:
                this._initializeData();
                break;
            case 2 /* DataReady */:
                this._initializeControl();
                break;
            case 4 /* Initialized */:
                this._updateControl();
                break;
            default:
                break;
        }
        this._registerToLearningPath();
    };
    CustomControlHostRoot.prototype._registerToLearningPath = function () {
        //TODO #488846 - Function being called on every re-render of the control
        if (this._internalStatus === 4 /* Initialized */ && this._propertyBag) {
            var learningPathBag = this._propertyBag.getLearningPathBag();
            LearningPathHelper_1.LearningPathHelper.registerToLearningPath(this._getComponent(), learningPathBag.DOMAttributeName, learningPathBag.baseControlId);
        }
    };
    /**
     * Determine whether the component needs to be re-rendered.
     * @params nextProps The new component properties.
     * @returns {boolean} Whether to re-render the component.
     */
    CustomControlHostRoot.prototype.shouldComponentUpdate = function (nextProps) {
        if (!this._ignoreSelfUpdates || !this._latestOutputs || !nextProps.dynamicData.updated) {
            return true;
        }
        for (var paramKey in nextProps.dynamicData.parameters) {
            if (!nextProps.dynamicData.parameters[paramKey].hasOwnProperty("raw") || !this._latestOutputs.hasOwnProperty(paramKey)) {
                continue;
            }
            var rawVal = nextProps.dynamicData.parameters[paramKey].raw;
            if (!rawVal.equals ? rawVal !== this._latestOutputs[paramKey] : !rawVal.equals(this._latestOutputs[paramKey])) {
                return true;
            }
        }
        return false;
    };
    /* tslint:disable:crm-prohibit-standard-react-element */
    CustomControlHostRoot.prototype._renderMainControlComponent = function (domId) {
        var generateBag;
        if (this._internalStatus === 4 /* Initialized */ && this._isVirtual()) {
            if (this._skipControlUpdate) {
                this._skipControlUpdate = false;
                this._currentlyRendering = false;
                return this._memoHelper.getRoot();
            }
            var virtualControl = void 0;
            var instance = this._controlInstance;
            this._executeAnyOnLoadEventsWhenNeeded();
            var updatePerformanceMarker = CCFPerformanceTracker_1.default.createPerformanceEvent(CUSTOM_CONTROL_UPDATE_VIEW, 3 /* Info */).startStopwatch({
                controlId: this.props.controlId,
                parentId: this._parentId,
                level: 2 /* LifeCycle */ .toString(),
            });
            generateBag = this._propertyBag.generateBag(this.props, this._generateHostDataForPropertyBag());
            if (this.props.shouldRender === undefined || this.props.shouldRender) {
                try {
                    virtualControl = instance.updateView(generateBag);
                    updatePerformanceMarker();
                }
                catch (exception) {
                    var eventParams = this._generateEventParams(CUSTOM_CONTROL_UPDATE_VIEW);
                    XrmProxy_1.default.Reporting.reportFailure("CustomControlFramework", exception, null, eventParams);
                }
                this._currentlyRendering = false;
                var element = VirtualComponentTranslator_1.VirtualComponentTranslator.renderVirtualComponent(virtualControl, this.props, this._generateHostData(), this._memoHelper);
                this._memoHelper.setRoot(element);
                return element;
            }
            else if (this._memoHelper.getRoot()) {
                var element = this._memoHelper.getRoot();
                return element;
            }
        }
        var className = "customControl" + (this.props.manifest ? " " + this.props.manifest.ConstructorName.replace(".", " ") : "");
        this._currentlyRendering = false;
        var standardStyle = { width: "100%" };
        return this._renderGenericDiv(domId, standardStyle);
    };
    CustomControlHostRoot.prototype._renderShadow = function (domId, style) {
        style = style || { display: "none" };
        return React.createElement("div", {key: "shadow", id: domId ? domId + "shadow" : null, style: style});
    };
    CustomControlHostRoot.prototype._renderWrappedMainElement = function (domId, innerStyle) {
        var domIdDivStyleProperties = innerStyle || this._getDomIdDivStyleProperties(this.props.descriptor);
        return React.createElement(View_1.View, {key: "mainControlContainer", id: domId, style: domIdDivStyleProperties}, this._renderCloseButton(), this._renderSpacer(), this._renderMainControlComponent(domId));
    };
    CustomControlHostRoot.prototype._renderSpacer = function () {
        if (this._isVirtual() && !this._memoHelper.getIsCompositing() &&
            (this._seeMorePopupStatus === -1 /* NotInUse */ ||
                this._seeMorePopupStatus === 4 /* ReturnFadeIn */)) {
            return null;
        }
        var outerStyle = (this._seeMorePopupStatus === 1 /* PopFadeIn */ || this._seeMorePopupStatus === 2 /* PoppedOut */ ||
            this._seeMorePopupStatus === 3 /* ReturnFadeOutAndMove */) ?
            {
                height: "24px",
                width: "100%",
                backgroundColor: "#F8F7F6",
            } :
            { display: "none" };
        return React.createElement(View_1.View, {key: "ccf_spacer", style: outerStyle});
    };
    CustomControlHostRoot.prototype._renderCloseButton = function () {
        if (this._isVirtual() && !this._memoHelper.getIsCompositing() &&
            (this._seeMorePopupStatus === -1 /* NotInUse */ ||
                this._seeMorePopupStatus === 4 /* ReturnFadeIn */)) {
            return null;
        }
        var style = {
            fontSize: "16px",
            color: "#333333",
            position: "absolute",
            top: "0px",
            right: "0px",
            height: "48px",
            width: "48px",
            textAlign: "center",
            paddingTop: "16px",
        };
        var outerStyle = (this._seeMorePopupStatus === 1 /* PopFadeIn */ || this._seeMorePopupStatus === 2 /* PoppedOut */ ||
            this._seeMorePopupStatus === 3 /* ReturnFadeOutAndMove */) ?
            {
                height: "48px",
                width: "100%",
                top: "-24px",
                position: "absolute",
            } :
            { display: "none" };
        return React.createElement(View_1.View, {key: "closeButtonContainer", style: outerStyle}, React.createElement(MicrosoftIcon_1.MicrosoftIcon, {key: "closeButton", style: style, type: MicrosoftIconSymbol_1.MicrosoftIconSymbol.Close, onClick: this._seeMorePopup.bind(this, false)}));
    };
    CustomControlHostRoot.prototype._renderContainerWithResizePads = function (mainElement, outerStyle, domId) {
        var outerStyleAdj = outerStyle || { width: "100%" };
        return React.createElement(View_1.View, {key: "mainControlOuterContainer", id: domId + "_outer", style: outerStyleAdj}, mainElement);
    };
    /**
     * Render the generic div
     * @param domId the div's DOM Id
     * @param style The style object
     */
    CustomControlHostRoot.prototype._renderGenericDiv = function (domId, style) {
        var _this = this;
        var className = "customControl " + (this.props.manifest ? this.props.manifest.ConstructorName.replace(".", " ") : "");
        return React.createElement("div", {key: "MainContainerElement", className: className, style: style, ref: function (input) {
            _this._rootElement = input;
        }}, this._getPopupService().renderPopups());
    };
    /**
     * Render the section component.
     */
    CustomControlHostRoot.prototype.render = function () {
        var stop = this._renderEvent.startStopwatch({
            controlId: this.props.controlId,
            parentId: this._parentId,
            level: 0 /* Top */ .toString(),
        });
        this._currentlyRendering = true;
        var domId = "";
        if (this.props.descriptor) {
            domId = this.props.descriptor.DomId ? this.props.descriptor.DomId : "";
        }
        if (this.state._status === 0 /* InError */) {
            // TODO: Localize
            stop();
            this._currentlyRendering = false;
            var errorDataId = this.props.controlId + "_container_error";
            return React.createElement("div", {className: "customControl inError", "data-id": errorDataId}, "Error loading control.");
        }
        if (this._internalStatus === 5 /* Destroyed */) {
            stop();
            this._currentlyRendering = false;
            return React.createElement("div", null);
        }
        if (this.DIMENSION_TRACK_RESOLVE_FUNCTION && this._getAllocatedWidth() && this._getAllocatedWidth() !== -1) {
            this.DIMENSION_TRACK_RESOLVE_FUNCTION();
        }
        if (this._internalStatus !== 4 /* Initialized */) {
            // TODO: render loading dots once it has been generalized
            stop();
            this._currentlyRendering = false;
            var mainElement_1 = this._renderWrappedMainElement(domId, null);
            var mainComponent_1 = this._renderContainerWithResizePads(mainElement_1, null, domId);
            var shadow_1 = this._renderShadow(domId, null);
            return React.createElement(View_1.View, {key: "root", style: { width: "100%" }}, shadow_1, mainComponent_1);
        }
        var styleBits = { shadowStyle: null, innerStyle: null, outerStyle: null };
        var viewStyle = { width: "100%" };
        if (this._seeMorePopupStatus !== -1 /* NotInUse */) {
            styleBits = CustomControlAnimationHelper_1.CustomControlAnimationHelper.getCustomControlFancyPopoutStyles(this.context.renderer, this._seeMorePopupStatus, this._seeMorePopupInfo);
            if (this._seeMorePopupStatus !== 4 /* ReturnFadeIn */) {
                viewStyle = {
                    height: this._seeMorePopupInfo.startHeight,
                    width: this._seeMorePopupInfo.startWidth,
                };
            }
        }
        var mainElement = this._renderWrappedMainElement(domId, styleBits.innerStyle);
        if (this._isVirtual() && !this._memoHelper.getIsCompositing() &&
            (this._seeMorePopupStatus === -1 /* NotInUse */ ||
                this._seeMorePopupStatus === 4 /* ReturnFadeIn */)) {
            return mainElement;
        }
        var mainComponent = this._renderContainerWithResizePads(mainElement, styleBits.outerStyle, domId);
        var shadow = this._renderShadow(domId, styleBits.shadowStyle);
        return React.createElement(View_1.View, {key: "root", style: viewStyle}, shadow, mainComponent);
    };
    /**
     * Display name for React dev tools
     */
    CustomControlHostRoot.displayName = "CustomControlHost";
    return CustomControlHostRoot;
}(React.Component));
exports.CustomControlHostRoot = CustomControlHostRoot;
CustomControlHostRoot.contextTypes = {
    renderer: React.PropTypes.object,
    context: React.PropTypes.object,
    store: React.PropTypes.object,
};

},{"../../CommonComponents/Common/MeasuringHandler/MeasuringHandler":2,"../../CommonComponents/FontIcon/MicrosoftIcon":6,"../../CommonComponents/FontIcon/MicrosoftIconSymbol":7,"../../CommonComponents/Primitive/View":47,"../Models/CommandingWrapper":53,"../Models/CustomControlEntityReference":54,"../Models/CustomControlUtilityPointers":56,"../Models/PropertyBag":57,"../Models/UpdatedPropertyConstants":68,"../Utilities/CCFPerformanceTracker":69,"../Utilities/CustomControlHelper":71,"../Utilities/LearningPathHelper":74,"../Utilities/ManifestType":75,"../Utilities/PopupService":78,"../Utilities/TelemetryClient":79,"../Utilities/XrmProxy":80,"./Helpers/Animation/CustomControlAnimationHelper":83,"./Helpers/CustomControlMemoizationHelper":87,"./VirtualComponentTranslator":89,"react":undefined,"react-dom":undefined}],82:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var CustomControlHostRoot_1 = require("./CustomControlHostRoot");
var MeasuringHandler_1 = require("../../CommonComponents/Common/MeasuringHandler/MeasuringHandler");
var DefaultControlMapper = require("../Utilities/DefaultControlMapper");
/**
 * Component representing a custom control
 */
var CustomControlWebClientWrapper = (function (_super) {
    __extends(CustomControlWebClientWrapper, _super);
    function CustomControlWebClientWrapper(props, context) {
        _super.call(this);
    }
    CustomControlWebClientWrapper.prototype._initializeFela = function () {
        if (!CustomControlWebClientWrapper._FelaInitialized) {
            if (!CustomControlWebClientWrapper._FelaRenderer) {
                CustomControlWebClientWrapper._FelaRenderer = Fela.createRenderer();
            }
            if (!CustomControlWebClientWrapper._FelaElement) {
                CustomControlWebClientWrapper._FelaElement = document.createElement("style");
                CustomControlWebClientWrapper._FelaElement.id = "stylesheet";
                document.head.appendChild(CustomControlWebClientWrapper._FelaElement);
            }
            // Note: the fela typings file does not recognize this, because render is present in "dom-fela" for amd modules.
            // however, since this file is only meant for consumption for non-AMD builds, this cast is here so that it can be
            // referenced properly in this file after our browserify script runs
            Fela.render(CustomControlWebClientWrapper._FelaRenderer, CustomControlWebClientWrapper._FelaElement);
            CustomControlWebClientWrapper._FelaInitialized = true;
        }
    };
    /**
     * falseUpdate wrapper
     * @param callback
     */
    CustomControlWebClientWrapper.prototype._forceUpdate = function (callback) {
        this.forceUpdate(callback);
    };
    CustomControlWebClientWrapper.prototype.getChildContext = function () {
        if (!CustomControlWebClientWrapper._FelaInitialized) {
            this._initializeFela();
        }
        return {
            renderer: CustomControlWebClientWrapper._FelaRenderer,
        };
    };
    /**
     * Called after the component is rendered initially
     */
    CustomControlWebClientWrapper.prototype.componentDidMount = function () {
        this.props.setReRenderCallBack(this._forceUpdate.bind(this));
    };
    /**
     * Render the section component.
     */
    CustomControlWebClientWrapper.prototype.render = function () {
        return React.createElement(CustomControlHostRoot_1.CustomControlHostRoot, __assign({}, this.props.givenHostProps));
    };
    CustomControlWebClientWrapper._FelaInitialized = false;
    CustomControlWebClientWrapper._FelaRenderer = null;
    CustomControlWebClientWrapper._FelaElement = null;
    return CustomControlWebClientWrapper;
}(React.Component));
CustomControlWebClientWrapper.contextTypes = {
    context: React.PropTypes.object,
};
CustomControlWebClientWrapper.childContextTypes = {
    renderer: React.PropTypes.object,
};
window.CustomControls = {};
window.CustomControls.CustomControlHostRoot = CustomControlHostRoot_1.CustomControlHostRoot;
window.CustomControls.CustomControlWebClientWrapper = CustomControlWebClientWrapper;
window.CustomControls.MeasuringHandler = MeasuringHandler_1.MeasuringHandler.getInstance();
window.CustomControls.Utilities = {};
window.CustomControls.Utilities.GetDefaultControlConfig = DefaultControlMapper.retrieveDefaultConfigurationForControl;
window.CustomControls.Utilities.GetDefaultControlManifest = DefaultControlMapper.retrieveDefaultManifestByConfiguration;

},{"../../CommonComponents/Common/MeasuringHandler/MeasuringHandler":2,"../Utilities/DefaultControlMapper":72,"./CustomControlHostRoot":81,"fela":undefined,"react":undefined}],83:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CustomControlOuterPopAnimationHelper_1 = require("./CustomControlOuterPopAnimationHelper");
var CustomControlInnerPopAnimationHelper_1 = require("./CustomControlInnerPopAnimationHelper");
var CustomControlShadowAnimationHelper_1 = require("./CustomControlShadowAnimationHelper");
var CustomControlAnimationHelper = (function () {
    function CustomControlAnimationHelper() {
    }
    CustomControlAnimationHelper.getCustomControlFancyPopoutStyles = function (renderer, status, props) {
        return {
            shadowStyle: CustomControlShadowAnimationHelper_1.CustomControlShadowAnimationHelper.generateShadowClass(renderer, status),
            outerStyle: CustomControlOuterPopAnimationHelper_1.CustomControlOuterPopAnimationHelper.generateOuterClass(renderer, status, props),
            innerStyle: CustomControlInnerPopAnimationHelper_1.CustomControlInnerPopAnimationHelper.generateInnerClass(renderer, status, props),
        };
    };
    return CustomControlAnimationHelper;
}());
exports.CustomControlAnimationHelper = CustomControlAnimationHelper;

},{"./CustomControlInnerPopAnimationHelper":84,"./CustomControlOuterPopAnimationHelper":85,"./CustomControlShadowAnimationHelper":86}],84:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CustomControlInnerPopAnimationHelper = (function () {
    function CustomControlInnerPopAnimationHelper() {
    }
    CustomControlInnerPopAnimationHelper._innerOutKeyframeGen = function (props) {
        return {
            "0%": {
                opacity: 1,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
            "25%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
            "30%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
            "40%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.margLeft + "px",
                paddingTop: props.padTop,
            },
            "100%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.margLeft + "px",
                paddingTop: props.padTop,
            },
        };
    };
    CustomControlInnerPopAnimationHelper._innerInKeyframeGen = function (props) {
        return {
            "0%": {
                opacity: 1,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.margLeft + "px",
                paddingTop: props.padTop,
            },
            "25%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.margLeft + "px",
                paddingTop: props.padTop,
            },
            "60%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(" + props.transX + ") scaleY(" + props.transY + ")",
                marginTop: props.margTop + "px",
                marginLeft: props.margLeft + "px",
                paddingTop: props.padTop,
            },
            "70%": {
                opacity: 0,
                height: props.endHeightInner + "px",
                width: props.endWidthInner + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
            "75%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
            "100%": {
                opacity: 0,
                height: props.startHeight + "px",
                width: props.startWidth + "px",
                transform: "scaleX(1) scaleY(1)",
                marginTop: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
            },
        };
    };
    CustomControlInnerPopAnimationHelper._fadeInAnimation = function (props) {
        return {
            "0%": {
                opacity: 0,
            },
            "100%": {
                opacity: 1,
            },
        };
    };
    CustomControlInnerPopAnimationHelper.generateInnerClass = function (renderer, status, props) {
        var baseStyle = {
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            display: "block",
            backgroundColor: "white",
            opacity: "",
            height: "",
            width: "",
            transform: "",
            marginTop: "",
            marginLeft: "",
            paddingTop: "",
            animationName: "",
            animationDuration: "",
            webkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
        };
        var transY = props.startHeight / props.endHeight;
        var transX = props.startWidth / props.endWidth;
        var margLeft = -1 * (props.endWidthInner - props.startWidth) / 2;
        var margTop = (-1 * (props.endHeightInner - props.startHeight) / 2);
        var padTop = "";
        if (margTop !== Math.floor(margTop)) {
            margTop = Math.floor(margTop);
            padTop = "1px";
        }
        if (margLeft !== Math.floor(margLeft)) {
            margLeft = Math.floor(margLeft);
        }
        var newProps = Object.assign({}, props, {
            margLeft: margLeft,
            margTop: margTop,
            padTop: padTop,
            transX: transX,
            transY: transY,
        });
        switch (status) {
            case 0 /* PopFadeOutAndMove */:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._innerOutKeyframeGen, newProps);
                baseStyle.animationDuration = "1.4s";
                break;
            case 1 /* PopFadeIn */:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._fadeInAnimation, newProps);
                baseStyle.animationDuration = ".5s";
                baseStyle.height = props.endHeightInner + "px";
                baseStyle.width = props.endWidthInner + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                baseStyle.marginTop = margTop + "px";
                baseStyle.paddingTop = padTop;
                baseStyle.marginLeft = margLeft + "px";
                break;
            case 2 /* PoppedOut */:
                baseStyle.height = props.endHeightInner + "px";
                baseStyle.width = props.endWidthInner + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                baseStyle.marginTop = margTop + "px";
                baseStyle.marginLeft = margLeft + "px";
                baseStyle.opacity = "1";
                break;
            case 3 /* ReturnFadeOutAndMove */:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._innerInKeyframeGen, newProps);
                baseStyle.animationDuration = "1.4s";
                break;
            case 4 /* ReturnFadeIn */:
                baseStyle.animationDuration = ".5s";
                baseStyle.width = "100%";
                baseStyle.animationName = renderer.renderKeyframe(CustomControlInnerPopAnimationHelper._fadeInAnimation, newProps);
                break;
        }
        return baseStyle;
    };
    return CustomControlInnerPopAnimationHelper;
}());
exports.CustomControlInnerPopAnimationHelper = CustomControlInnerPopAnimationHelper;

},{}],85:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CustomControlOuterPopAnimationHelper = (function () {
    function CustomControlOuterPopAnimationHelper() {
    }
    CustomControlOuterPopAnimationHelper._outerOutKeyframeGen = function (props) {
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        return {
            "0%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "25%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "65%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "70%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(" + transY + ")",
            },
            "75%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
            "100%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
        };
    };
    CustomControlOuterPopAnimationHelper._outerInKeyframeGen = function (props) {
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        return {
            "100%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "75%": {
                left: props.startLeft + "px",
                top: props.startTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "35%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(1)",
            },
            "30%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(1) scaleY(" + transY + ")",
            },
            "25%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
            "0%": {
                left: props.endLeft + "px",
                top: props.endTop + "px",
                transform: "scaleX(" + transX + ") scaleY(" + transY + ")",
            },
        };
    };
    CustomControlOuterPopAnimationHelper.generateOuterClass = function (renderer, status, props) {
        var baseStyle = {
            animationDuration: "1.5s",
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            animationName: "",
            position: "fixed",
            display: "initial",
            height: props.startHeight + "px",
            width: props.startWidth + "px",
            overflow: "hidden",
            backgroundColor: "#F8F7F6",
            transform: "",
            left: "",
            top: "",
            zIndex: 1,
        };
        var transY = props.endHeight / props.startHeight;
        var transX = props.endWidth / props.startWidth;
        switch (status) {
            case 0 /* PopFadeOutAndMove */:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlOuterPopAnimationHelper._outerOutKeyframeGen, props);
                break;
            case 1 /* PopFadeIn */:
            case 2 /* PoppedOut */:
                baseStyle.left = props.endLeft + "px";
                baseStyle.top = props.endTop + "px";
                baseStyle.transform = "scaleX(" + transX + ") scaleY(" + transY + ")";
                break;
            case 3 /* ReturnFadeOutAndMove */:
                baseStyle.animationName = renderer.renderKeyframe(CustomControlOuterPopAnimationHelper._outerInKeyframeGen, props);
                break;
            case 4 /* ReturnFadeIn */:
            case -1 /* NotInUse */:
                return null;
        }
        return baseStyle;
    };
    return CustomControlOuterPopAnimationHelper;
}());
exports.CustomControlOuterPopAnimationHelper = CustomControlOuterPopAnimationHelper;

},{}],86:[function(require,module,exports){
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
"use strict";
var CustomControlShadowAnimationHelper = (function () {
    function CustomControlShadowAnimationHelper() {
    }
    CustomControlShadowAnimationHelper._shadowOutKeyframeGen = function (props) {
        return {
            "0%": { opacity: 0 },
            "75%": { opacity: .6 },
            "100%": { opacity: .6 },
        };
    };
    CustomControlShadowAnimationHelper._shadowInKeyframeGen = function (props) {
        return {
            "0%": { opacity: .6 },
            "25%": { opacity: .6 },
            "100%": { opacity: 0 },
        };
    };
    CustomControlShadowAnimationHelper.generateFancyShadowInAnimationName = function (renderer) {
        if (!CustomControlShadowAnimationHelper._shadowOutAnimationName) {
            CustomControlShadowAnimationHelper._shadowOutAnimationName = renderer.renderKeyframe(CustomControlShadowAnimationHelper._shadowOutKeyframeGen, null);
        }
        return CustomControlShadowAnimationHelper._shadowOutAnimationName;
    };
    CustomControlShadowAnimationHelper.generateFancyShadowOutAnimationName = function (renderer) {
        if (!CustomControlShadowAnimationHelper._shadowInAnimationName) {
            CustomControlShadowAnimationHelper._shadowInAnimationName = renderer.renderKeyframe(CustomControlShadowAnimationHelper._shadowInKeyframeGen, null);
        }
        return CustomControlShadowAnimationHelper._shadowInAnimationName;
    };
    CustomControlShadowAnimationHelper.generateShadowClass = function (renderer, status) {
        var baseShadowStyle = {
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            backgroundColor: "#FFFFFF",
            position: "fixed",
            animationDuration: "2s",
            animationFillMode: "forwards",
            animationDirection: "normal",
            animationIterationCount: "1",
            zIndex: "1",
            animationName: null,
            opacity: null,
        };
        switch (status) {
            case 0 /* PopFadeOutAndMove */:
                baseShadowStyle.animationName = CustomControlShadowAnimationHelper.generateFancyShadowInAnimationName(renderer);
                break;
            case 1 /* PopFadeIn */:
            case 2 /* PoppedOut */:
                baseShadowStyle.opacity = ".6";
                break;
            case 3 /* ReturnFadeOutAndMove */:
                baseShadowStyle.animationName = CustomControlShadowAnimationHelper.generateFancyShadowOutAnimationName(renderer);
                break;
            case 4 /* ReturnFadeIn */:
            case -1 /* NotInUse */:
                return {
                    display: "none",
                };
        }
        return baseShadowStyle;
    };
    CustomControlShadowAnimationHelper._shadowOutAnimationName = null;
    CustomControlShadowAnimationHelper._shadowInAnimationName = null;
    return CustomControlShadowAnimationHelper;
}());
exports.CustomControlShadowAnimationHelper = CustomControlShadowAnimationHelper;

},{}],87:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var CustomControlMemoizationHelper = (function () {
    function CustomControlMemoizationHelper() {
        /**
         * The currently memoized map (generated on last render pass)
         */
        this._memoizedMap = {};
        /**
         * The in-progress memoized map (generated on current render pass)
         */
        this._newMemoizedMap = {};
        /**
         * Whether the last processed memoized map contains a composited control
         */
        this._isCompositing = false;
        /**
         * Whether the current translation contains a composited control
         */
        this._newIsCompositing = false;
        /**
         * Whether this helper thing it is currently in a render pass
         */
        this._midRender = false;
        /**
         * The memoized JSX root element, for instances where a render needs to be called but we don't want to update view.
         */
        this._memoizedRoot = null;
    }
    /**
     * Alert the memoization helper that a render is starting. Throw an error if it already believes itself to be in one.
     */
    CustomControlMemoizationHelper.prototype.startRenderFunction = function () {
        if (this._midRender) {
            throw new Error("Start render called in middle of render");
        }
        this._isCompositing = false;
        this._midRender = true;
    };
    /**
     * Alert memoziation render funciton is ending. Flush old memoized data
     */
    CustomControlMemoizationHelper.prototype.stopRenderFunction = function () {
        if (!this._midRender) {
            throw new Error("Stop render called without start");
        }
        this._isCompositing = this._newIsCompositing;
        this._memoizedMap = this._newMemoizedMap;
        this._newMemoizedMap = {};
        this._midRender = false;
    };
    /**
     * Clean up this object and release all references
     */
    CustomControlMemoizationHelper.prototype.destroy = function () {
        this._memoizedMap = null;
        this._newMemoizedMap = null;
        this._memoizedRoot = null;
        this._midRender = false;
    };
    /**
     * Get the virtual compopnent associated with a key
     * @param key The key
     * @returns a virtual component
     */
    CustomControlMemoizationHelper.prototype.getVirtualComponentByKey = function (key) {
        if (this._memoizedMap && this._memoizedMap[key]) {
            return this._memoizedMap[key].virtualComponent;
        }
        return null;
    };
    /**
     * Get the react element associated with a key
     * @param key The key
     * @returns a react element
     */
    CustomControlMemoizationHelper.prototype.getReactElementByKey = function (key) {
        if (this._memoizedMap && this._memoizedMap[key]) {
            return this._memoizedMap[key].reactElement;
        }
        return null;
    };
    /**
     * Keep an element from a previous render pass memoized on this one
     * @param key
     */
    CustomControlMemoizationHelper.prototype.retainElement = function (key) {
        if (this._midRender) {
            this._newMemoizedMap[key] = this._memoizedMap[key];
        }
    };
    /**
     * Add an updated entry to the memoization table
     * If we are in a render cycle (e.g. during a virtual component's render function) add it to the temp table
     * If we are not (e.g. a standard control using bindDOMElement) add it to the permanent table.
     * @param key The entry key
     * @param element The entry's react element
     * @param vc The entry's virtual component
     */
    CustomControlMemoizationHelper.prototype.addUpdatedEntry = function (key, element, vc) {
        if (this._midRender) {
            this._newMemoizedMap[key] = {
                reactElement: element,
                virtualComponent: vc,
            };
        }
        else {
            this._memoizedMap[key] = {
                reactElement: element,
                virtualComponent: vc,
            };
        }
    };
    /**
     * Set whether this instance is compositing a control
     * @param value
     */
    CustomControlMemoizationHelper.prototype.setIsCompositing = function (value) {
        this._newIsCompositing = value;
    };
    /**
     * Gets whether this instance is compositing a control
     */
    CustomControlMemoizationHelper.prototype.getIsCompositing = function () {
        return this._isCompositing;
    };
    /**
     * Set the root for memoization
     * @param element
     */
    CustomControlMemoizationHelper.prototype.setRoot = function (element) {
        this._memoizedRoot = element;
    };
    /**
     * Get the root for memoization
     * @param element
     */
    CustomControlMemoizationHelper.prototype.getRoot = function () {
        return this._memoizedRoot;
    };
    return CustomControlMemoizationHelper;
}());
exports.CustomControlMemoizationHelper = CustomControlMemoizationHelper;

},{}],88:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
/**
 * Virtual component class
 */
var VirtualComponent = (function () {
    /**
     * Initializes a new instance of the <see cref="VirtualComponent"/> class.
     * @param type The component type
     * @param componentId The component Id
     * @param properties A dictionary of parameters associated with this entity.
     * @param children An array of child virtual components associated with this entity.
     */
    function VirtualComponent(type, componentId, properties, children) {
        this._type = type;
        this._componentId = componentId;
        this._properties = Object.assign({}, properties);
        this._children = [];
        if (children != null) {
            if (typeof children === "string" || typeof children === "number" || children instanceof VirtualComponent) {
                this._children = children;
            }
            else if (children instanceof Array) {
                this._children = children.filter(function (x) { return typeof x === "string" || typeof x === "number" || x instanceof VirtualComponent; }).slice();
            }
        }
    }
    /**
     * Used to update a VirtualComponent generated from a system-generated complex control
     * @param additionalProps Properties that would be passed in via a parent
     */
    VirtualComponent.prototype.getVirtualRepresentation = function (additionalProps) {
        return new VirtualComponent(this._type, this._componentId, Object.assign(this._properties, additionalProps), null);
    };
    /**
     * Returns the type of this component.
     */
    VirtualComponent.prototype.getType = function () {
        return this._type;
    };
    /**
     * Returns the component Id
     */
    VirtualComponent.prototype.getComponentId = function () {
        return this._componentId;
    };
    /**
     * Returns a dictionary of this component's properties.
     */
    VirtualComponent.prototype.getProperties = function () {
        return this._properties;
    };
    /**
     * Returns an array of child virtual components associated with this component.
     */
    VirtualComponent.prototype.getChildren = function () {
        if (this._children instanceof Array)
            return this._children.slice();
        else
            return this._children;
    };
    /**
     * Sets passed props to virtual component using merge strategy
     */
    VirtualComponent.prototype.setProperties = function (props) {
        Object.assign(this._properties, props);
    };
    return VirtualComponent;
}());
exports.VirtualComponent = VirtualComponent;

},{}],89:[function(require,module,exports){
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var CCFUtilities = require("../Models/CustomControlUtilityPointers");
var ManifestType_1 = require("../Utilities/ManifestType");
var CustomControlExposedInterfaces_1 = require("../Models/CustomControlExposedInterfaces");
var CustomControlHelper_1 = require("../Utilities/CustomControlHelper");
var Button_1 = require("../../CommonComponents/Primitive/Button");
var ComboBox_1 = require("../../CommonComponents/Primitive/ComboBox");
var Hyperlink_1 = require("../../CommonComponents/Primitive/Hyperlink");
var Image_1 = require("../../CommonComponents/Primitive/Image");
var IFrame_1 = require("../../CommonComponents/Primitive/IFrame");
var CrmIcon_1 = require("../../CommonComponents/FontIcon/CrmIcon");
var MicrosoftIcon_1 = require("../../CommonComponents/FontIcon/MicrosoftIcon");
var RootPopup_1 = require("../../CommonComponents/Primitive/Popup/RootPopup");
var Popup_1 = require("../../CommonComponents/Primitive/Popup/Popup");
var Flyout_1 = require("../../CommonComponents/Primitive/Flyout");
var List_1 = require("../../CommonComponents/Primitive/List");
var ListItem_1 = require("../../CommonComponents/Primitive/ListItem");
var ScrollView_1 = require("../../CommonComponents/Primitive/ScrollView");
var Switch_1 = require("../../CommonComponents/Primitive/Switch");
var Text_1 = require("../../CommonComponents/Primitive/Text");
var Label_1 = require("../../CommonComponents/Primitive/Label");
var TextInput_1 = require("../../CommonComponents/Primitive/TextInput");
var FileInput_1 = require("../../CommonComponents/Primitive/FileInput");
var View_1 = require("../../CommonComponents/Primitive/View");
var EntityImage_1 = require("../../CommonComponents/Primitive/EntityImage");
var ProgressIndicator_1 = require("../../CommonComponents/Primitive/ProgressIndicator");
var HorizontalScroll_1 = require("../../CommonComponents/Common/HorizontalScroll");
var ViewSelectorControl_1 = require("../../CommonComponents/Common/ViewSelectorControl");
var PresenceIndicator_1 = require("../../CommonComponents/Primitive/PresenceIndicator");
var Table_1 = require("../../CommonComponents/Primitive/Table/Table");
var TableBody_1 = require("../../CommonComponents/Primitive/Table/TableBody");
var TableCaption_1 = require("../../CommonComponents/Primitive/Table/TableCaption");
var TableCell_1 = require("../../CommonComponents/Primitive/Table/TableCell");
var TableFooter_1 = require("../../CommonComponents/Primitive/Table/TableFooter");
var TableHeader_1 = require("../../CommonComponents/Primitive/Table/TableHeader");
var TableHeaderCell_1 = require("../../CommonComponents/Primitive/Table/TableHeaderCell");
var TableRow_1 = require("../../CommonComponents/Primitive/Table/TableRow");
var Option_1 = require("../../CommonComponents/Primitive/Select/Option");
var Select_1 = require("../../CommonComponents/Primitive/Select/Select");
var RadioInput_1 = require("../../CommonComponents/Primitive/Radio/RadioInput");
var CommandingWrapper_1 = require("../Models/CommandingWrapper");
var CustomControlConstants_1 = require("../Utilities/CustomControlConstants");
var FlexibleText_1 = require("../../CommonComponents/Primitive/FlexibleText");
var VALUE_STRING = "value";
/**
 * Default key for a child that thas no key
 */
var KEYLESS_CHILD_ID = "keylessChild";
/**
 * Default key for a root node with no key
 */
var KEYLESS_ROOT_ID = "root";
/**
 * VirtualComponentTranslator class : helps in translating virtual components to react components
 */
var VirtualComponentTranslator = (function () {
    function VirtualComponentTranslator() {
    }
    /**
     * returns a renderable element for a virtual component
     * @param component the visual component to render
     * @param props custom control props of the parent
     * @param hostData data from the custom control compositing this virtual component
     * @param memHelper the host root's memoization helper
     * @returns a virtual dom element
     */
    VirtualComponentTranslator.renderVirtualComponent = function (component, props, hostData, memHelper, purgeMemHelper) {
        if (purgeMemHelper === void 0) { purgeMemHelper = true; }
        if (purgeMemHelper) {
            memHelper.startRenderFunction();
        }
        if (!component) {
            if (purgeMemHelper) {
                memHelper.stopRenderFunction();
            }
            return null;
        }
        var element = VirtualComponentTranslator.generateReactComponent(component, null, KEYLESS_ROOT_ID, props, hostData, memHelper, VirtualComponentTranslator.generateReactChildren(VirtualComponentTranslator._getComponentKey(component, null, KEYLESS_ROOT_ID), component.getChildren(), props, hostData, memHelper));
        if (purgeMemHelper) {
            memHelper.stopRenderFunction();
        }
        return element;
    };
    /**
     * Returns the JSX element/component based on the type
     * @param elementType the element type
     * @param props the props
     * @param componentProps the component props
     * @param children children
     */
    VirtualComponentTranslator.generateJSXElement = function (elementType, props, children, ownProps) {
        var id = props ? CustomControlHelper_1.buildUniqueCustomControlId(ownProps, props.id, props.absoluteId) : "";
        var testhooks = VirtualComponentTranslator._updateDataIdInTesthooks(ownProps, props);
        var learningPathControlId = props[CustomControlConstants_1.CustomControlConstants.LearningPathAttributeName];
        if (learningPathControlId) {
            testhooks[CustomControlConstants_1.CustomControlConstants.LearningPathAttributeSuffix] = learningPathControlId;
        }
        switch (elementType.toUpperCase()) {
            case "CRMICON":
                {
                    var fontIconProps = props;
                    if (fontIconProps == null) {
                        break;
                    }
                    return React.createElement(CrmIcon_1.CrmIcon, {key: fontIconProps.key, id: id, testhooks: testhooks, type: fontIconProps.type, style: fontIconProps.style, hidden: fontIconProps.hidden, accessibilityHasPopup: fontIconProps.accessibilityHasPopup, accessibilityExpanded: fontIconProps.accessibilityExpanded, accessibilityLabel: fontIconProps.accessibilityLabel, accessibilityHidden: fontIconProps.accessibilityHidden, labelledByElementId: fontIconProps.labelledByElementId, describedByElementId: fontIconProps.describedByElementId, controlsElementId: fontIconProps.controlsElementId, ownsElementId: fontIconProps.ownsElementId, role: fontIconProps.role, tabIndex: fontIconProps.tabIndex, onClick: fontIconProps.onClick, onFocus: fontIconProps.onFocus, onBlur: fontIconProps.onBlur, onPointerDown: fontIconProps.onPointerDown, onPointerUp: fontIconProps.onPointerUp, onKeyDown: fontIconProps.onKeyDown, onKeyUp: fontIconProps.onKeyUp, title: fontIconProps.title});
                }
            case "MICROSOFTICON":
                var microsoftIconProps = props;
                if (microsoftIconProps == null) {
                    break;
                }
                return React.createElement(MicrosoftIcon_1.MicrosoftIcon, {key: microsoftIconProps.key, id: id, testhooks: testhooks, type: microsoftIconProps.type, style: microsoftIconProps.style, hidden: microsoftIconProps.hidden, accessibilityHasPopup: microsoftIconProps.accessibilityHasPopup, accessibilityExpanded: microsoftIconProps.accessibilityExpanded, accessibilityLabel: microsoftIconProps.accessibilityLabel, accessibilityHidden: microsoftIconProps.accessibilityHidden, labelledByElementId: microsoftIconProps.labelledByElementId, describedByElementId: microsoftIconProps.describedByElementId, controlsElementId: microsoftIconProps.controlsElementId, ownsElementId: microsoftIconProps.ownsElementId, role: microsoftIconProps.role, tabIndex: microsoftIconProps.tabIndex, onClick: microsoftIconProps.onClick, onFocus: microsoftIconProps.onFocus, onBlur: microsoftIconProps.onBlur, onPointerDown: microsoftIconProps.onPointerDown, onPointerUp: microsoftIconProps.onPointerUp, onKeyDown: microsoftIconProps.onKeyDown, onKeyUp: microsoftIconProps.onKeyUp, title: microsoftIconProps.title});
            case "BOOLEAN":
                var switchProps = props;
                if (switchProps == null) {
                    break;
                }
                return React.createElement(Switch_1.Switch, {children: children, key: switchProps.key, style: switchProps.style, name: switchProps.name, disabled: switchProps.disabled, value: switchProps.value, id: id, testhooks: testhooks, hidden: switchProps.hidden, accessibilityHasPopup: switchProps.accessibilityHasPopup, accessibilityExpanded: switchProps.accessibilityExpanded, accessibilityLabel: switchProps.accessibilityLabel, accessibilityHidden: switchProps.accessibilityHidden, accessibilityChecked: switchProps.accessibilityChecked, labelledByElementId: switchProps.labelledByElementId, describedByElementId: switchProps.describedByElementId, controlsElementId: switchProps.controlsElementId, ownsElementId: switchProps.ownsElementId, role: switchProps.role, tabIndex: switchProps.tabIndex, onValueChange: switchProps.onValueChange, onClick: switchProps.onClick, onFocus: switchProps.onFocus, onBlur: switchProps.onBlur, title: switchProps.title, displayAs: switchProps.displayAs, displayValue: switchProps.displayValue, defaultValue: switchProps.defaultValue, options: switchProps.options, onOptionSetValueChange: switchProps.onOptionSetValueChange});
            case "BUTTON":
                var buttonProps = props;
                if (buttonProps == null) {
                    break;
                }
                return React.createElement(Button_1.Button, {children: children, key: buttonProps.key, testhooks: testhooks, style: buttonProps.style, ownsElementId: buttonProps.ownsElementId, accessKey: buttonProps.accessKey, accessibilityLabel: buttonProps.accessibilityLabel, id: id, disabled: buttonProps.disabled, hidden: buttonProps.hidden, accessibilityHasPopup: buttonProps.accessibilityHasPopup, accessibilityExpanded: buttonProps.accessibilityExpanded, accessibilityHidden: buttonProps.accessibilityHidden, activeDescendantId: buttonProps.activeDescendantId, labelledByElementId: buttonProps.labelledByElementId, describedByElementId: buttonProps.describedByElementId, controlsElementId: buttonProps.controlsElementId, role: buttonProps.role, tabIndex: buttonProps.tabIndex, onClick: buttonProps.onClick, onPointerDown: buttonProps.onPointerDown, onFocus: buttonProps.onFocus, onBlur: buttonProps.onBlur, onKeyUp: buttonProps.onKeyUp, onKeyDown: buttonProps.onKeyDown, title: buttonProps.title});
            case "COMBOBOX":
                var comboBoxProps = props;
                if (comboBoxProps == null) {
                    break;
                }
                return React.createElement(ComboBox_1.ComboBox, {children: children, key: comboBoxProps.key, id: id, testhooks: testhooks, name: comboBoxProps.name, options: comboBoxProps.options, value: comboBoxProps.value, pageSize: comboBoxProps.pageSize, freeTextMode: comboBoxProps.freeTextMode, defaultValue: comboBoxProps.defaultValue, disabled: comboBoxProps.disabled, readOnly: comboBoxProps.readOnly, onChange: comboBoxProps.onChange, onClick: comboBoxProps.onClick, onBlur: comboBoxProps.onBlur, onFocus: comboBoxProps.onFocus, style: comboBoxProps.style, accessibilityLabel: comboBoxProps.accessibilityLabel, labelledByElementId: comboBoxProps.labelledByElementId, describedByElementId: comboBoxProps.describedByElementId, createAccessibilityComponent: ownProps.actions.createAccessibilityComponent, createKeyboardShortcut: ownProps.actions.createKeyboardShortcut, title: comboBoxProps.title, parentCustomControlId: ownProps.controlId, openPopup: ownProps.actions.openPopup, closePopup: ownProps.actions.closePopup, rootNodes: ownProps.popupRootNodes});
            case "CONTAINER":
                var viewProps = props;
                if (viewProps == null) {
                    break;
                }
                return React.createElement(View_1.View, {children: children, style: viewProps.style, id: id, key: viewProps.key, testhooks: testhooks, role: viewProps.role, semanticTag: viewProps.semanticTag, accessKey: viewProps.accessKey, forceMeasure: viewProps.forceMeasure, onMeasuring: viewProps.onMeasuring, isRequestedMeasuring: viewProps.isRequestedMeasuring, isRTL: viewProps.isRTL, hidden: viewProps.hidden, accessibilityHasPopup: viewProps.accessibilityHasPopup, accessibilityExpanded: viewProps.accessibilityExpanded, accessibilityLabel: viewProps.accessibilityLabel, accessibilityHidden: viewProps.accessibilityHidden, accessibilityLive: viewProps.accessibilityLive, accessibilityRelevant: viewProps.accessibilityRelevant, accessibilityAtomic: viewProps.accessibilityAtomic, labelledByElementId: viewProps.labelledByElementId, describedByElementId: viewProps.describedByElementId, controlsElementId: viewProps.controlsElementId, ownsElementId: viewProps.ownsElementId, tabIndex: viewProps.tabIndex, onClick: viewProps.onClick, onKeyUp: viewProps.onKeyUp, onKeyDown: viewProps.onKeyDown, onPointerUp: viewProps.onPointerUp, onPointerMove: viewProps.onPointerMove, onPointerDown: viewProps.onPointerDown, onPointerEnter: viewProps.onPointerEnter, onPointerLeave: viewProps.onPointerLeave, onFocus: viewProps.onFocus, onBlur: viewProps.onBlur, title: viewProps.title});
            case "HYPERLINK":
                var hyperlinkProps = props;
                if (hyperlinkProps == null) {
                    break;
                }
                return React.createElement(Hyperlink_1.Hyperlink, {children: children, key: hyperlinkProps.key, id: id, testhooks: testhooks, style: hyperlinkProps.style, href: hyperlinkProps.href, target: hyperlinkProps.target, hidden: hyperlinkProps.hidden, accessibilityHasPopup: hyperlinkProps.accessibilityHasPopup, accessibilityExpanded: hyperlinkProps.accessibilityExpanded, accessibilityLabel: hyperlinkProps.accessibilityLabel, accessibilityHidden: hyperlinkProps.accessibilityHidden, labelledByElementId: hyperlinkProps.labelledByElementId, describedByElementId: hyperlinkProps.describedByElementId, controlsElementId: hyperlinkProps.controlsElementId, ownsElementId: hyperlinkProps.ownsElementId, role: hyperlinkProps.role, tabIndex: hyperlinkProps.tabIndex, onClick: hyperlinkProps.onClick, onFocus: hyperlinkProps.onFocus, onBlur: hyperlinkProps.onBlur, onKeyDown: hyperlinkProps.onKeyDown, onKeyUp: hyperlinkProps.onKeyUp, title: hyperlinkProps.title});
            case "IMG":
                var imgProps = props;
                if (imgProps == null) {
                    break;
                }
                return React.createElement(Image_1.Image, {key: imgProps.key, id: id, testhooks: testhooks, style: imgProps.style, altText: imgProps.altText, source: imgProps.source, hidden: imgProps.hidden, accessibilityHasPopup: imgProps.accessibilityHasPopup, accessibilityExpanded: imgProps.accessibilityExpanded, accessibilityLabel: imgProps.accessibilityLabel, accessibilityHidden: imgProps.accessibilityHidden, labelledByElementId: imgProps.labelledByElementId, describedByElementId: imgProps.describedByElementId, controlsElementId: imgProps.controlsElementId, ownsElementId: imgProps.ownsElementId, role: imgProps.role, tabIndex: imgProps.tabIndex, onLoad: imgProps.onLoad, onClick: imgProps.onClick, onFocus: imgProps.onFocus, onBlur: imgProps.onBlur, title: imgProps.title});
            case "IFRAME":
                var iframeProps = props;
                if (iframeProps == null) {
                    break;
                }
                return React.createElement(IFrame_1.IFrame, {id: iframeProps.id, testhooks: testhooks, title: iframeProps.title, style: iframeProps.style, onLoad: iframeProps.onLoad, src: iframeProps.src, scrolling: iframeProps.scrolling, security: iframeProps.security, onMessage: iframeProps.onMessage, tabIndex: iframeProps.tabIndex, accessibilityLabel: iframeProps.accessibilityLabel, registerSendMessageHandler: iframeProps.registerSendMessageHandler});
            case "LABEL":
                var labelProps = props;
                if (labelProps == null) {
                    break;
                }
                return React.createElement(Label_1.Label, {children: children, key: labelProps.key, id: id, style: labelProps.style, role: labelProps.role, forElementId: labelProps.forElementId, hidden: labelProps.hidden, accessibilityHasPopup: labelProps.accessibilityHasPopup, accessibilityExpanded: labelProps.accessibilityExpanded, accessibilityLabel: labelProps.accessibilityLabel, accessibilityHidden: labelProps.accessibilityHidden, accessibilityLive: labelProps.accessibilityLive, accessibilityRelevant: labelProps.accessibilityRelevant, accessibilityAtomic: labelProps.accessibilityAtomic, labelledByElementId: labelProps.labelledByElementId, describedByElementId: labelProps.describedByElementId, controlsElementId: labelProps.controlsElementId, ownsElementId: labelProps.ownsElementId, tabIndex: labelProps.tabIndex, onClick: labelProps.onClick, onFocus: labelProps.onFocus, onKeyUp: labelProps.onKeyUp, onKeyDown: labelProps.onKeyDown, onBlur: labelProps.onBlur, testhooks: testhooks, title: labelProps.title});
            case "LIST":
                var listProps = props;
                if (!listProps) {
                    break;
                }
                return React.createElement(List_1.List, {accessibilityExpanded: listProps.accessibilityExpanded, accessibilityHasPopup: listProps.accessibilityHasPopup, accessibilityLabel: listProps.accessibilityLabel, accessibilityHidden: listProps.accessibilityHidden, accessibilityDisabled: listProps.accessibilityDisabled, accessibilityReadOnly: listProps.accessibilityReadOnly, announceAccessibilityNotification: listProps.announceAccessibilityNotification, children: children, controlsElementId: listProps.controlsElementId, describedByElementId: listProps.describedByElementId, hidden: listProps.hidden, id: id, testhooks: testhooks, key: listProps.key, labelledByElementId: listProps.labelledByElementId, notificationType: listProps.notificationType, onBlur: listProps.onBlur, onClick: listProps.onClick, onFocus: listProps.onFocus, onKeyUp: listProps.onKeyUp, onKeyDown: listProps.onKeyDown, ownsElementId: listProps.ownsElementId, refCallback: listProps.refCallback, role: listProps.role, style: listProps.style, tabIndex: listProps.tabIndex, title: listProps.title, accessibilityRequired: listProps.accessibilityRequired});
            case "LISTITEM":
                var listItemProps = props;
                if (!listItemProps) {
                    break;
                }
                return React.createElement(ListItem_1.ListItem, {accessibilityExpanded: listItemProps.accessibilityExpanded, accessibilityHasPopup: listItemProps.accessibilityHasPopup, accessibilityLabel: listItemProps.accessibilityLabel, accessibilityHidden: listItemProps.accessibilityHidden, accessibilityDisabled: listItemProps.accessibilityDisabled, accessibilityReadOnly: listItemProps.accessibilityReadOnly, accessibilityLevel: listItemProps.accessibilityLevel, accessibilityCurrent: listItemProps.accessibilityCurrent, children: children, controlsElementId: listItemProps.controlsElementId, describedByElementId: listItemProps.describedByElementId, hidden: listItemProps.hidden, id: id, testhooks: testhooks, key: listItemProps.key, labelledByElementId: listItemProps.labelledByElementId, onBlur: listItemProps.onBlur, onClick: listItemProps.onClick, onFocus: listItemProps.onFocus, onPointerOver: listItemProps.onPointerOver, onPointerOut: listItemProps.onPointerOut, onPointerDown: listItemProps.onPointerDown, onKeyUp: listItemProps.onKeyUp, onKeyDown: listItemProps.onKeyDown, ownsElementId: listItemProps.ownsElementId, role: listItemProps.role, style: listItemProps.style, tabIndex: listItemProps.tabIndex, isSelected: listItemProps.isSelected, title: listItemProps.title, accessibilityRequired: listItemProps.accessibilityRequired});
            case "POPUP":
                var popupProps = props;
                if (!popupProps) {
                    break;
                }
                var component = React.createElement(Popup_1.Popup, __assign({}, popupProps, {id: popupProps.id, children: children}));
                var result = null;
                if (popupProps.type === Popup_1.PopupType.Root) {
                    result = (React.createElement(RootPopup_1.RootPopup, {key: popupProps.key, parentCustomControlId: ownProps.controlId, id: popupProps.name, openPopup: ownProps.actions.openPopup, closePopup: ownProps.actions.closePopup, rootNodes: ownProps.popupRootNodes}, component));
                }
                else {
                    result = component;
                }
                return result;
            case "FLYOUT":
                var flyoutProps = props;
                if (flyoutProps == null) {
                    break;
                }
                var prefixedRelativeToElementId = CustomControlHelper_1.buildUniqueCustomControlId(ownProps, flyoutProps.relativeToElementId, props.absoluteId);
                return React.createElement(Flyout_1.Flyout, {id: id, parentCustomControlId: ownProps.controlId, groupId: flyoutProps.groupId, onOutsideClick: flyoutProps.onOutsideClick, children: children, flyoutStyle: flyoutProps.flyoutStyle, position: flyoutProps.position, positionType: flyoutProps.positionType, flyoutDirection: flyoutProps.flyoutDirection, relativeToElementId: prefixedRelativeToElementId, size: flyoutProps.size, key: flyoutProps.key, openPopup: ownProps.actions.openPopup, closePopup: ownProps.actions.closePopup, rootNodes: ownProps.popupRootNodes});
            case "SCROLLCONTAINER":
                var scrollViewProps = props;
                if (scrollViewProps == null) {
                    break;
                }
                return React.createElement(ScrollView_1.ScrollView, {children: children, style: scrollViewProps.style, key: scrollViewProps.key, id: id, testhooks: testhooks, contentContainerStyle: scrollViewProps.contentContainerStyle, horizontal: scrollViewProps.horizontal, onScroll: scrollViewProps.onScroll, hidden: scrollViewProps.hidden, accessibilityHasPopup: scrollViewProps.accessibilityHasPopup, accessibilityExpanded: scrollViewProps.accessibilityExpanded, accessibilityLabel: scrollViewProps.accessibilityLabel, accessibilityHidden: scrollViewProps.accessibilityHidden, labelledByElementId: scrollViewProps.labelledByElementId, describedByElementId: scrollViewProps.describedByElementId, controlsElementId: scrollViewProps.controlsElementId, ownsElementId: scrollViewProps.ownsElementId, role: scrollViewProps.role, tabIndex: scrollViewProps.tabIndex, onClick: scrollViewProps.onClick, onFocus: scrollViewProps.onFocus, onBlur: scrollViewProps.onBlur, title: scrollViewProps.title});
            case "TABLE":
                var tableProps = props;
                if (tableProps == null) {
                    break;
                }
                return React.createElement(Table_1.Table, {children: children, key: tableProps.key, id: id, testhooks: testhooks, style: tableProps.style, hidden: tableProps.hidden, accessibilityHasPopup: tableProps.accessibilityHasPopup, accessibilityExpanded: tableProps.accessibilityExpanded, accessibilityLabel: tableProps.accessibilityLabel, accessibilityHidden: tableProps.accessibilityHidden, labelledByElementId: tableProps.labelledByElementId, describedByElementId: tableProps.describedByElementId, controlsElementId: tableProps.controlsElementId, ownsElementId: tableProps.ownsElementId, role: tableProps.role, tabIndex: tableProps.tabIndex, onClick: tableProps.onClick, onFocus: tableProps.onFocus, onBlur: tableProps.onBlur, title: tableProps.title});
            case "TABLEBODY":
                var tableBodyProps = props;
                if (tableBodyProps == null) {
                    break;
                }
                return React.createElement(TableBody_1.TableBody, {children: children, key: tableBodyProps.key, id: id, testhooks: testhooks, style: tableBodyProps.style, hidden: tableBodyProps.hidden, accessibilityHasPopup: tableBodyProps.accessibilityHasPopup, accessibilityExpanded: tableBodyProps.accessibilityExpanded, accessibilityLabel: tableBodyProps.accessibilityLabel, accessibilityHidden: tableBodyProps.accessibilityHidden, labelledByElementId: tableBodyProps.labelledByElementId, describedByElementId: tableBodyProps.describedByElementId, controlsElementId: tableBodyProps.controlsElementId, ownsElementId: tableBodyProps.ownsElementId, role: tableBodyProps.role, tabIndex: tableBodyProps.tabIndex, onClick: tableBodyProps.onClick, onFocus: tableBodyProps.onFocus, onBlur: tableBodyProps.onBlur, title: tableBodyProps.title});
            case "TABLECAPTION":
                var tableCaptionProps = props;
                if (tableCaptionProps == null) {
                    break;
                }
                return React.createElement(TableCaption_1.TableCaption, {children: children, key: tableCaptionProps.key, id: id, testhooks: testhooks, style: tableCaptionProps.style, hidden: tableCaptionProps.hidden, accessibilityHasPopup: tableCaptionProps.accessibilityHasPopup, accessibilityExpanded: tableCaptionProps.accessibilityExpanded, accessibilityLabel: tableCaptionProps.accessibilityLabel, accessibilityHidden: tableCaptionProps.accessibilityHidden, labelledByElementId: tableCaptionProps.labelledByElementId, describedByElementId: tableCaptionProps.describedByElementId, controlsElementId: tableCaptionProps.controlsElementId, ownsElementId: tableCaptionProps.ownsElementId, role: tableCaptionProps.role, tabIndex: tableCaptionProps.tabIndex, onClick: tableCaptionProps.onClick, onFocus: tableCaptionProps.onFocus, onBlur: tableCaptionProps.onBlur, title: tableCaptionProps.title});
            case "TABLECELL":
                var tableCellProps = props;
                if (tableCellProps == null) {
                    break;
                }
                return React.createElement(TableCell_1.TableCell, {children: children, key: tableCellProps.key, id: id, colSpan: tableCellProps.colSpan, testhooks: testhooks, style: tableCellProps.style, hidden: tableCellProps.hidden, accessibilityHasPopup: tableCellProps.accessibilityHasPopup, accessibilityExpanded: tableCellProps.accessibilityExpanded, accessibilityLabel: tableCellProps.accessibilityLabel, accessibilityHidden: tableCellProps.accessibilityHidden, labelledByElementId: tableCellProps.labelledByElementId, describedByElementId: tableCellProps.describedByElementId, controlsElementId: tableCellProps.controlsElementId, ownsElementId: tableCellProps.ownsElementId, role: tableCellProps.role, tabIndex: tableCellProps.tabIndex, onClick: tableCellProps.onClick, onFocus: tableCellProps.onFocus, onBlur: tableCellProps.onBlur, onKeyDown: tableCellProps.onKeyDown, title: tableCellProps.title, rowSpan: tableCellProps.rowSpan, scope: tableCellProps.scope});
            case "TABLEFOOTER":
                var tableFooterProps = props;
                if (tableFooterProps == null) {
                    break;
                }
                return React.createElement(TableFooter_1.TableFooter, {children: children, key: tableFooterProps.key, id: id, testhooks: testhooks, style: tableFooterProps.style, hidden: tableFooterProps.hidden, accessibilityHasPopup: tableFooterProps.accessibilityHasPopup, accessibilityExpanded: tableFooterProps.accessibilityExpanded, accessibilityLabel: tableFooterProps.accessibilityLabel, accessibilityHidden: tableFooterProps.accessibilityHidden, labelledByElementId: tableFooterProps.labelledByElementId, describedByElementId: tableFooterProps.describedByElementId, controlsElementId: tableFooterProps.controlsElementId, ownsElementId: tableFooterProps.ownsElementId, role: tableFooterProps.role, tabIndex: tableFooterProps.tabIndex, onClick: tableFooterProps.onClick, onFocus: tableFooterProps.onFocus, onBlur: tableFooterProps.onBlur, title: tableFooterProps.title});
            case "TABLEHEADER":
                var tableHeaderProps = props;
                if (tableHeaderProps == null) {
                    break;
                }
                return React.createElement(TableHeader_1.TableHeader, {children: children, key: tableHeaderProps.key, id: id, testhooks: testhooks, style: tableHeaderProps.style, hidden: tableHeaderProps.hidden, accessibilityHasPopup: tableHeaderProps.accessibilityHasPopup, accessibilityExpanded: tableHeaderProps.accessibilityExpanded, accessibilityLabel: tableHeaderProps.accessibilityLabel, accessibilityHidden: tableHeaderProps.accessibilityHidden, labelledByElementId: tableHeaderProps.labelledByElementId, describedByElementId: tableHeaderProps.describedByElementId, controlsElementId: tableHeaderProps.controlsElementId, ownsElementId: tableHeaderProps.ownsElementId, role: tableHeaderProps.role, tabIndex: tableHeaderProps.tabIndex, onClick: tableHeaderProps.onClick, onFocus: tableHeaderProps.onFocus, onBlur: tableHeaderProps.onBlur, title: tableHeaderProps.title});
            case "TABLEHEADERCELL":
                var tableHeaderCellProps = props;
                if (tableHeaderCellProps == null) {
                    break;
                }
                return React.createElement(TableHeaderCell_1.TableHeaderCell, {children: children, key: tableHeaderCellProps.key, id: id, testhooks: testhooks, style: tableHeaderCellProps.style, hidden: tableHeaderCellProps.hidden, accessibilityHasPopup: tableHeaderCellProps.accessibilityHasPopup, accessibilityExpanded: tableHeaderCellProps.accessibilityExpanded, accessibilityLabel: tableHeaderCellProps.accessibilityLabel, accessibilityHidden: tableHeaderCellProps.accessibilityHidden, labelledByElementId: tableHeaderCellProps.labelledByElementId, describedByElementId: tableHeaderCellProps.describedByElementId, controlsElementId: tableHeaderCellProps.controlsElementId, ownsElementId: tableHeaderCellProps.ownsElementId, role: tableHeaderCellProps.role, tabIndex: tableHeaderCellProps.tabIndex, onClick: tableHeaderCellProps.onClick, onFocus: tableHeaderCellProps.onFocus, onBlur: tableHeaderCellProps.onBlur, onKeyDown: tableHeaderCellProps.onKeyDown, title: tableHeaderCellProps.title, colSpan: tableHeaderCellProps.colSpan, rowSpan: tableHeaderCellProps.rowSpan, scope: tableHeaderCellProps.scope});
            case "TABLEROW":
                var tableRowProps = props;
                if (tableRowProps == null) {
                    break;
                }
                return React.createElement(TableRow_1.TableRow, {children: children, key: tableRowProps.key, id: id, testhooks: testhooks, style: tableRowProps.style, hidden: tableRowProps.hidden, accessibilityHasPopup: tableRowProps.accessibilityHasPopup, accessibilityExpanded: tableRowProps.accessibilityExpanded, accessibilityLabel: tableRowProps.accessibilityLabel, accessibilityHidden: tableRowProps.accessibilityHidden, labelledByElementId: tableRowProps.labelledByElementId, describedByElementId: tableRowProps.describedByElementId, controlsElementId: tableRowProps.controlsElementId, ownsElementId: tableRowProps.ownsElementId, role: tableRowProps.role, tabIndex: tableRowProps.tabIndex, onClick: tableRowProps.onClick, onFocus: tableRowProps.onFocus, onBlur: tableRowProps.onBlur, title: tableRowProps.title});
            case "FILEINPUT":
                var fileInputProps = props;
                return React.createElement(FileInput_1.FileInput, {fileSelected: fileInputProps.fileSelected, fileUnselected: fileInputProps.fileUnselected, accept: fileInputProps.accept, id: id, testhooks: testhooks, key: fileInputProps.key, title: fileInputProps.title});
            case "TEXTINPUT":
                var textProps = props;
                if (textProps == null) {
                    break;
                }
                return React.createElement(TextInput_1.TextInput, {readOnly: textProps.readOnly, key: textProps.key, id: id, type: textProps.type, keyboardType: textProps.keyboardType, maxLength: textProps.maxLength, multiline: textProps.multiline, ownsElementId: textProps.ownsElementId, onClick: textProps.onClick, onBlur: textProps.onBlur, onChange: textProps.onChange, onChangeText: textProps.onChangeText, onFocus: textProps.onFocus, onKeyPress: textProps.onKeyPress, onKeyDown: textProps.onKeyDown, onKeyUp: textProps.onKeyUp, onPointerEnter: textProps.onPointerEnter, onPointerLeave: textProps.onPointerLeave, placeholder: textProps.placeholder, style: textProps.style, value: textProps.value, hidden: textProps.hidden, disabled: textProps.disabled, accessibilityHasPopup: textProps.accessibilityHasPopup, accessibilityExpanded: textProps.accessibilityExpanded, accessibilityLabel: textProps.accessibilityLabel, accessibilityHidden: textProps.accessibilityHidden, activeDescendantId: textProps.activeDescendantId, autoComplete: textProps.autoComplete, labelledByElementId: textProps.labelledByElementId, describedByElementId: textProps.describedByElementId, controlsElementId: textProps.controlsElementId, role: textProps.role, tabIndex: textProps.tabIndex, testhooks: testhooks, rows: textProps.rows, selectValueOnFocus: textProps.selectValueOnFocus, title: textProps.title, accessibilityRequired: textProps.accessibilityRequired});
            case "COMMANDBAR":
                var commandManagerProps = props;
                var commandManagerId = ownProps.id + ":" + ownProps.controlId;
                var wrapper = CommandingWrapper_1.CommandingWrapper.getWrapperByCommandManagerId(commandManagerId);
                if (!wrapper) {
                    wrapper = new CommandingWrapper_1.CommandingWrapper(ownProps);
                }
                wrapper.populateCommandManagerProps(commandManagerProps, ownProps);
                commandManagerProps.width = commandManagerProps.width || 1;
                return wrapper.createCommandBar(commandManagerProps);
            case "OPTION":
                var optionProps = props;
                if (optionProps == null) {
                    break;
                }
                return React.createElement(Option_1.Option, {id: id, key: optionProps.key, value: optionProps.value, disabled: optionProps.disabled, style: optionProps.style, testhooks: testhooks});
            case "SELECT":
                var selectProps = props;
                if (selectProps == null) {
                    break;
                }
                return React.createElement(Select_1.Select, {id: id, key: selectProps.key, value: selectProps.value, options: selectProps.options, style: selectProps.style, disabled: selectProps.disabled, tabIndex: selectProps.tabIndex, hidden: selectProps.hidden, accessibilityHasPopup: selectProps.accessibilityHasPopup, accessibilityExpanded: selectProps.accessibilityExpanded, accessibilityLabel: selectProps.accessibilityLabel, labelledByElementId: selectProps.labelledByElementId, describedByElementId: selectProps.describedByElementId, controlsElementId: selectProps.controlsElementId, ownsElementId: selectProps.ownsElementId, testhooks: testhooks, onBlur: selectProps.onBlur, onClick: selectProps.onClick, onDoubleClick: selectProps.onDoubleClick, onFocus: selectProps.onFocus, onChange: selectProps.onChange, onPointerOver: selectProps.onPointerOver, onPointerOut: selectProps.onPointerOut, onPointerEnter: selectProps.onPointerEnter, onPointerLeave: selectProps.onPointerLeave, onPointerDown: selectProps.onPointerDown, onPointerUp: selectProps.onPointerUp, onKeyDown: selectProps.onKeyDown, onKeyUp: selectProps.onKeyUp, multiple: selectProps.multiple, readOnly: selectProps.readOnly, title: selectProps.title, accessibilityRequired: selectProps.accessibilityRequired});
            case "ENTITYIMAGE":
                var entityImgProps = props;
                if (entityImgProps == null) {
                    break;
                }
                return React.createElement(EntityImage_1.EntityImage, {key: entityImgProps.key, id: id, testhooks: testhooks, style: entityImgProps.style, mode: entityImgProps.mode, imageSrc: entityImgProps.imageSrc, alt: entityImgProps.alt, entityPrimaryField: entityImgProps.entityPrimaryField, hidden: entityImgProps.hidden, accessibilityHasPopup: entityImgProps.accessibilityHasPopup, accessibilityExpanded: entityImgProps.accessibilityExpanded, accessibilityLabel: entityImgProps.accessibilityLabel, accessibilityHidden: entityImgProps.accessibilityHidden, labelledByElementId: entityImgProps.labelledByElementId, describedByElementId: entityImgProps.describedByElementId, controlsElementId: entityImgProps.controlsElementId, ownsElementId: entityImgProps.ownsElementId, role: entityImgProps.role, tabIndex: entityImgProps.tabIndex, onClick: entityImgProps.onClick, onFocus: entityImgProps.onFocus, onBlur: entityImgProps.onBlur, title: entityImgProps.title, sipUrl: entityImgProps.sipUrl, presenceIndicatorSize: entityImgProps.presenceIndicatorSize, entityReference: entityImgProps.entityReference, entityHealthScore: entityImgProps.entityHealthScore});
            case "PROGRESSINDICATOR":
                var progressIndicatorProps = props;
                if (progressIndicatorProps == null) {
                    break;
                }
                return React.createElement(ProgressIndicator_1.ProgressIndicator, {id: id, style: progressIndicatorProps.style, hidden: progressIndicatorProps.hidden, accessibilityHasPopup: progressIndicatorProps.accessibilityHasPopup, accessibilityExpanded: progressIndicatorProps.accessibilityExpanded, accessibilityLabel: progressIndicatorProps.accessibilityLabel, accessibilityChecked: progressIndicatorProps.accessibilityChecked, accessibilityReadOnly: progressIndicatorProps.accessibilityReadOnly, accessibilityHidden: progressIndicatorProps.accessibilityHidden, labelledByElementId: progressIndicatorProps.labelledByElementId, describedByElementId: progressIndicatorProps.describedByElementId, controlsElementId: progressIndicatorProps.controlsElementId, ownsElementId: progressIndicatorProps.ownsElementId, activeDescendantId: progressIndicatorProps.activeDescendantId, role: progressIndicatorProps.role, tabIndex: progressIndicatorProps.tabIndex, onClick: progressIndicatorProps.onClick, onFocus: progressIndicatorProps.onFocus, onBlur: progressIndicatorProps.onBlur, onPointerOver: progressIndicatorProps.onPointerOver, onPointerOut: progressIndicatorProps.onPointerOut, onPointerUp: progressIndicatorProps.onPointerUp, onPointerDown: progressIndicatorProps.onPointerDown, onPointerEnter: progressIndicatorProps.onPointerEnter, onPointerLeave: progressIndicatorProps.onPointerLeave, onPointerMove: progressIndicatorProps.onPointerMove, onPointerCancel: progressIndicatorProps.onPointerCancel, onKeyDown: progressIndicatorProps.onKeyDown, onKeyUp: progressIndicatorProps.onKeyUp, onMouseEnter: progressIndicatorProps.onMouseEnter, onMouseLeave: progressIndicatorProps.onMouseLeave, testhooks: testhooks, title: progressIndicatorProps.title, active: progressIndicatorProps.active, progressType: progressIndicatorProps.progressType, progress: progressIndicatorProps.progress, progressDots: progressIndicatorProps.progressDots, className: progressIndicatorProps.className, animating: progressIndicatorProps.animating, animationDelay: progressIndicatorProps.animationDelay, isBrowserSafari: progressIndicatorProps.isBrowserSafari});
            case "RADIO":
                var radioInputProps = props;
                if (radioInputProps == null) {
                    break;
                }
                return React.createElement(RadioInput_1.RadioInput, {id: id, value: radioInputProps.value, options: radioInputProps.options, style: radioInputProps.style, disabled: radioInputProps.disabled, tabIndex: radioInputProps.tabIndex, hidden: radioInputProps.hidden, accessibilityLabel: radioInputProps.accessibilityLabel, labelledByElementId: radioInputProps.labelledByElementId, describedByElementId: radioInputProps.describedByElementId, controlsElementId: radioInputProps.controlsElementId, ownsElementId: radioInputProps.ownsElementId, testhooks: testhooks, onBlur: radioInputProps.onBlur, onClick: radioInputProps.onClick, onFocus: radioInputProps.onFocus, onChange: radioInputProps.onChange, onPointerOver: radioInputProps.onPointerOver, onPointerOut: radioInputProps.onPointerOut, onPointerEnter: radioInputProps.onPointerEnter, onPointerLeave: radioInputProps.onPointerLeave, onPointerDown: radioInputProps.onPointerDown, onPointerUp: radioInputProps.onPointerUp, onKeyDown: radioInputProps.onKeyDown, onKeyUp: radioInputProps.onKeyUp});
            case "HORIZONTALSCROLL":
                var horizontalScrollProps = props;
                if (horizontalScrollProps == null) {
                    break;
                }
                return React.createElement(HorizontalScroll_1.HorizontalScroll, {children: children, scrollViewStyle: horizontalScrollProps.scrollViewStyle, style: horizontalScrollProps.style, key: horizontalScrollProps.key, id: id, startChildIndex: horizontalScrollProps.startChildIndex, hideDisabledButton: horizontalScrollProps.hideDisabledButton, arrowWidth: horizontalScrollProps.arrowWidth, arrowButtonStyle: horizontalScrollProps.arrowButtonStyle, prevArrowIconType: horizontalScrollProps.prevArrowIconType, nextArrowIconType: horizontalScrollProps.nextArrowIconType, onPrevArrowClick: horizontalScrollProps.onPrevArrowClick, onNextArrowClick: horizontalScrollProps.onNextArrowClick, onPrevArrowKeyDown: horizontalScrollProps.onPrevArrowKeyDown, onNextArrowKeyDown: horizontalScrollProps.onNextArrowKeyDown, testhooks: testhooks, hidden: horizontalScrollProps.hidden, accessibilityHasPopup: horizontalScrollProps.accessibilityHasPopup, accessibilityExpanded: horizontalScrollProps.accessibilityExpanded, accessibilityLabel: horizontalScrollProps.accessibilityLabel, accessibilityHidden: horizontalScrollProps.accessibilityHidden, labelledByElementId: horizontalScrollProps.labelledByElementId, describedByElementId: horizontalScrollProps.describedByElementId, controlsElementId: horizontalScrollProps.controlsElementId, ownsElementId: horizontalScrollProps.ownsElementId, role: horizontalScrollProps.role, tabIndex: horizontalScrollProps.tabIndex, onClick: horizontalScrollProps.onClick, onFocus: horizontalScrollProps.onFocus, onBlur: horizontalScrollProps.onBlur, title: horizontalScrollProps.title});
            case "VIEWSELECTORCONTROL":
                var viewSelectorProps = props;
                if (viewSelectorProps == null) {
                    break;
                }
                return React.createElement(ViewSelectorControl_1.ViewSelectorControl, {style: viewSelectorProps.style, id: id, key: viewSelectorProps.key, value: viewSelectorProps.value, title: viewSelectorProps.title, categories: viewSelectorProps.categories, options: viewSelectorProps.options, hoveredStyle: viewSelectorProps.hoveredStyle, caretStyle: viewSelectorProps.caretStyle, caretType: viewSelectorProps.caretType, createAccessibilityComponent: ownProps.actions.createAccessibilityComponent, createKeyboardShortcut: ownProps.actions.createKeyboardShortcut, defaultValue: viewSelectorProps.defaultValue, tabIndex: viewSelectorProps.tabIndex, onChange: viewSelectorProps.onChange, onClick: viewSelectorProps.onClick, onKeyUp: viewSelectorProps.onKeyUp, onKeyDown: viewSelectorProps.onKeyDown, onPointerUp: viewSelectorProps.onPointerUp, onPointerMove: viewSelectorProps.onPointerMove, onPointerDown: viewSelectorProps.onPointerDown, onPointerEnter: viewSelectorProps.onPointerEnter, onPointerLeave: viewSelectorProps.onPointerLeave, onFocus: viewSelectorProps.onFocus, onBlur: viewSelectorProps.onBlur});
            case "TEXT":
                var textProperties = props;
                var flexibleTextProperties = props;
                if (textProperties == null) {
                    break;
                }
                if (flexibleTextProperties.truncatedlines) {
                    return React.createElement(FlexibleText_1.FlexibleText, {children: children, key: flexibleTextProperties.key, id: id, style: flexibleTextProperties.style, role: flexibleTextProperties.role, hidden: flexibleTextProperties.hidden, accessibilityHasPopup: flexibleTextProperties.accessibilityHasPopup, accessibilityExpanded: flexibleTextProperties.accessibilityExpanded, accessibilityLabel: flexibleTextProperties.accessibilityLabel, accessibilityHidden: flexibleTextProperties.accessibilityHidden, accessibilityLive: flexibleTextProperties.accessibilityLive, accessibilityRelevant: flexibleTextProperties.accessibilityRelevant, accessibilityAtomic: flexibleTextProperties.accessibilityAtomic, labelledByElementId: flexibleTextProperties.labelledByElementId, describedByElementId: flexibleTextProperties.describedByElementId, controlsElementId: flexibleTextProperties.controlsElementId, ownsElementId: flexibleTextProperties.ownsElementId, tabIndex: flexibleTextProperties.tabIndex, onClick: flexibleTextProperties.onClick, onFocus: flexibleTextProperties.onFocus, onKeyUp: flexibleTextProperties.onKeyUp, onKeyDown: flexibleTextProperties.onKeyDown, onBlur: flexibleTextProperties.onBlur, testhooks: testhooks, title: flexibleTextProperties.title, semanticTag: flexibleTextProperties.semanticTag, truncatedlines: flexibleTextProperties.truncatedlines, maskingColor: flexibleTextProperties.maskingColor, noExpandable: flexibleTextProperties.noExpandable, singleLineTruncation: flexibleTextProperties.singleLineTruncation});
                }
                ;
                return React.createElement(Text_1.Text, {children: children, key: textProperties.key, id: id, style: textProperties.style, role: textProperties.role, hidden: textProperties.hidden, accessibilityHasPopup: textProperties.accessibilityHasPopup, accessibilityExpanded: textProperties.accessibilityExpanded, accessibilityLabel: textProperties.accessibilityLabel, accessibilityHidden: textProperties.accessibilityHidden, labelledByElementId: textProperties.labelledByElementId, describedByElementId: textProperties.describedByElementId, controlsElementId: textProperties.controlsElementId, ownsElementId: textProperties.ownsElementId, tabIndex: textProperties.tabIndex, onClick: textProperties.onClick, onFocus: textProperties.onFocus, onKeyUp: textProperties.onKeyUp, onKeyDown: textProperties.onKeyDown, onBlur: textProperties.onBlur, testhooks: testhooks, title: textProperties.title, semanticTag: textProperties.semanticTag});
            case "PRESENCEINDICATOR":
                var presenceIndicatorProps = props;
                var parentControlId = CustomControlHelper_1.buildUniqueCustomControlId(ownProps, presenceIndicatorProps.parentControlId, props.absoluteId);
                if (presenceIndicatorProps == null) {
                    break;
                }
                return React.createElement(PresenceIndicator_1.PresenceIndicator, {id: presenceIndicatorProps.id, key: presenceIndicatorProps.key, sipUrl: presenceIndicatorProps.sipUrl, displaySize: presenceIndicatorProps.displaySize, entityReference: presenceIndicatorProps.entityReference, style: presenceIndicatorProps.style, role: presenceIndicatorProps.role, tabIndex: presenceIndicatorProps.tabIndex, title: presenceIndicatorProps.title, parentControlId: parentControlId, accessibilityLabel: presenceIndicatorProps.accessibilityLabel});
        }
        return React.createElement(View_1.View, null, "\"UNKNOWN COMPONENT\"");
    };
    /**
     * Returns the react component based on the type
     * @param component the virtual component
     * @param parentKey the key for this component's parent
     * @param defaultKey the default key to use if this component does not have an obvious defined key
     * @param props custom control host props
     * @param memHelper The memoization helper object
     * @param hostData data from the custom control compositing this virtual component
     * @param children the children array
     * @returns a virtual dom element
     */
    VirtualComponentTranslator.generateReactComponent = function (component, parentKey, defaultKey, props, hostData, memHelper, children) {
        if (!component) {
            return null;
        }
        var element = null;
        var key = VirtualComponentTranslator._getComponentKey(component, parentKey, defaultKey);
        var memoizedComponent = key ? memHelper.getVirtualComponentByKey(key) : null;
        if (memoizedComponent && memoizedComponent === component) {
            element = memHelper.getReactElementByKey(key);
            memHelper.retainElement(key);
        }
        else {
            if (!VirtualComponentTranslator.isComplexComponent(component)) {
                element = VirtualComponentTranslator.generateJSXElement(component.getType(), component.getProperties(), children, props);
            }
            else if (CCFUtilities.IsNullOrUndefined(component.getComponentId())) {
                element = React.createElement(View_1.View, null, "\"UNKNOWN COMPONENT\"");
            }
            else {
                element = VirtualComponentTranslator.generateComplexControl(component, props, hostData);
                memHelper.setIsCompositing(true);
            }
            if (key) {
                memHelper.addUpdatedEntry(key, element, component);
            }
        }
        return element;
    };
    /**
     * Creates the component key for this VC
     * @param component The component
     * @param parentKey The component's parent's key
     * @param defaultKey The default key for this component
     * @returns this component's key
     */
    VirtualComponentTranslator._getComponentKey = function (component, parentKey, defaultKey) {
        return (parentKey ? parentKey + "|" : "") +
            (!VirtualComponentTranslator.isComplexComponent(component) ?
                (component.getProperties().hasOwnProperty("key") ? component.getProperties().key : defaultKey) :
                (component.getComponentId() || defaultKey));
    };
    /**
     * If the testhooks contain a property with name id, it is updated to be a unique identifier for the element.
     * The newly updated testhooks object is returned.
     * If the props don't possess any testhooks, they are generated with a (testhook) id attribute.
     */
    VirtualComponentTranslator._updateDataIdInTesthooks = function (ownProps, props) {
        if (!props || !props.id) {
            return {};
        }
        var idKey = "id";
        if (props.testhooks) {
            var testhookId = CustomControlHelper_1.buildTesthookId(ownProps, props.testhooks[idKey] || props.id);
            var updatedTesthooks = Object.assign({}, props.testhooks);
            updatedTesthooks[idKey] = testhookId; // Overwrite "data-id" if it already exists.
            return updatedTesthooks;
        }
        return { id: CustomControlHelper_1.buildTesthookId(ownProps, props.id) };
    };
    /**
     * generates a complex control from the component
     * @param component the virtual component
     * @param props custom control host props
     * @param hostData data from the custom control compositing this virtual component
     * @returns a virtual dom component
     */
    VirtualComponentTranslator.generateComplexControl = function (component, props, hostData) {
        var componentId = component.getComponentId();
        var properties = component.getProperties();
        var parentProps = {
            toggleDimensionListener: hostData.trackResize,
        };
        var parentControlId = props.descriptor.Id;
        var controlId = parentControlId + "." + componentId;
        var childUnique = props.descriptor.UniqueId + "." + componentId;
        var childDomId = CustomControlHelper_1.buildChildDomId(props);
        // disabling TSLint rules until the typings in this project can be improved
        /* tslint:disable:no-string-literal */
        // parsing properties passed
        var controlStates = properties.controlstates;
        var showLabel = props.descriptor.ShowLabel;
        var label = props.descriptor.Label;
        var hasFocus = false;
        var disabled = false;
        if (!CCFUtilities.IsNullOrUndefined(controlStates)) {
            parentProps.height = !controlStates.hasOwnProperty("height") ? hostData.allocatedHeight : controlStates.height;
            parentProps.width = !controlStates.hasOwnProperty("width") ? hostData.allocatedWidth : controlStates.width;
            parentProps.hasFocus = CCFUtilities.IsNullOrUndefined(controlStates.hasFocus) ? false : controlStates.hasFocus;
            disabled = CCFUtilities.IsNullOrUndefined(controlStates.isControlDisabled) ? false : controlStates.isControlDisabled;
            showLabel = CCFUtilities.IsNullOrUndefined(controlStates.showLabel) ? showLabel : controlStates.showLabel;
            label = CCFUtilities.IsNullOrUndefined(controlStates.label) ? label : controlStates.label;
        }
        else {
            parentProps.height = hostData.allocatedHeight;
            parentProps.width = hostData.allocatedWidth;
        }
        var eventListeners = [];
        var childeventlisteners = properties.childeventlisteners;
        if (!CCFUtilities.IsNullOrUndefined(childeventlisteners)) {
            var _loop_1 = function(listener) {
                var eventName = listener.eventname;
                var eventIndex = eventListeners.findIndex(function (x) { return x.eventname === eventName; });
                var handlers = listener.eventhandler;
                // if the event name already exists, add the listener to the list
                if (eventIndex !== -1) {
                    eventListeners[eventIndex].eventhandler.concat(handlers);
                }
                else {
                    var listener_1 = { eventname: eventName, eventhandler: [handlers] };
                    eventListeners.push(listener_1);
                }
            };
            for (var _i = 0, childeventlisteners_1 = childeventlisteners; _i < childeventlisteners_1.length; _i++) {
                var listener = childeventlisteners_1[_i];
                _loop_1(listener);
            }
            parentProps.eventListeners = eventListeners;
        }
        var params = {};
        if (!CCFUtilities.IsNullOrUndefined(properties.parameters)) {
            params = properties.parameters;
        }
        var descriptor = null;
        var nestedFormProps = null;
        // If there are nestedFormProps specified in the child props, it means the control belongs to a different form than the current form.
        // Do not generate the descriptor for the control here. Get the descriptor from the control attributes
        if (!properties.descriptor) {
            descriptor = {
                Id: controlId,
                Label: label,
                Name: "",
                DomId: childDomId,
                ShowLabel: showLabel,
                Visible: props.descriptor.Visible,
                ClassId: null,
                Disabled: disabled,
                UniqueId: childUnique,
                Parameters: props.descriptor && props.descriptor.Parameters,
            };
        }
        else {
            descriptor = properties.descriptor;
            controlId = componentId;
        }
        // If the parent has specific form props, pass it down to the children as well.
        if (!properties.nestedFormProps) {
            nestedFormProps = props.formInfo;
        }
        else {
            nestedFormProps = properties.nestedFormProps;
        }
        var configuration;
        if (props.children && props.children.hasOwnProperty(componentId)) {
            configuration = props.children[componentId];
        }
        else if (!properties.configuration) {
            // If this is a container control which is a nested form properties, do not add this configuration
            // This will get generated from the attribute
            configuration = {
                FormFactor: 2,
                CustomControlId: component.getType().toString(),
                Name: props.manifest.CustomControlId + "." + controlId,
                Parameters: params,
                Version: "0.0",
                ShouldOverrideControlVisible: false,
            };
        }
        else {
            configuration = properties.configuration;
        }
        /* tslint:enable:no-string-literal */
        VirtualComponentTranslator._parseParameters(configuration.Parameters);
        var extendDatasetHostProps = null;
        if (configuration.Parameters) {
            for (var parameterName in configuration.Parameters) {
                var parameter = configuration.Parameters[parameterName];
                switch (parameter.Type) {
                    case ManifestType_1.ManifestType.Grid:
                        {
                            var dataSetParameter = parameter;
                            if (dataSetParameter.SortingInput) {
                                var sortingParameter = dataSetParameter.SortingInput;
                                if (sortingParameter.ControlLinked && sortingParameter.Value) {
                                    sortingParameter.Value = parentControlId + "." + sortingParameter.Value;
                                }
                            }
                            if (dataSetParameter.FilteringInput) {
                                var filteringParameter = dataSetParameter.FilteringInput;
                                if (filteringParameter.ControlLinked && filteringParameter.Value) {
                                    filteringParameter.Value = parentControlId + "." + filteringParameter.Value;
                                }
                            }
                            if (dataSetParameter.PagingInput) {
                                var pagingParameter = dataSetParameter.PagingInput;
                                if (pagingParameter.ControlLinked && pagingParameter.Value) {
                                    pagingParameter.Value = parentControlId + "." + pagingParameter.Value;
                                }
                            }
                            if (dataSetParameter.DataSetHostProps) {
                                extendDatasetHostProps = dataSetParameter.DataSetHostProps;
                            }
                            break;
                        }
                    default:
                        {
                            var propertyParameter = parameter;
                            if (propertyParameter.Usage === 1 /* Input */ && propertyParameter.ControlLinked && propertyParameter.Value) {
                                configuration.Parameters[parameterName] = Object.assign({}, propertyParameter, {
                                    Value: parentControlId + "." + propertyParameter.Value,
                                });
                            }
                            break;
                        }
                }
            }
        }
        if (props.descriptor.HasContext) {
            parentProps.closestParentWithContext = parentControlId;
        }
        else if (props.parentDefinedControlProps && props.parentDefinedControlProps.closestParentWithContext) {
            parentProps.closestParentWithContext = props.parentDefinedControlProps.closestParentWithContext;
        }
        return props.actions.renderNestedCustomControl(controlId, {
            id: props.id,
            controlId: controlId,
            systemDefinedProperties: props.systemDefinedProperties,
            parentDefinedControlProps: parentProps,
            configuration: configuration,
            descriptor: descriptor,
            formInfo: nestedFormProps,
            rowSpan: props.rowSpan,
            themingData: properties.themingData,
            contextString: properties.contextString || this._buildContextString(props, nestedFormProps),
            parentContextToken: props.contextToken,
            externalCommandManagerId: props.externalCommandManagerId,
            externalCommandPromise: props.externalCommandPromise,
        }, {
            dataSetHostExtendedProps: extendDatasetHostProps,
        });
    };
    /**
     * Parse the parameters given from the parent control
     * @param params The parameters of this config
     */
    VirtualComponentTranslator._parseParameters = function (params) {
        for (var key in params) {
            if (params[key].Usage === 3 /* FalseBound */) {
                params[key].Attributes = Object.assign({}, VirtualComponentTranslator._baseAttributes, params[key].Attributes);
            }
        }
    };
    /**
     * Typeguard check for a Virtual Component.
     */
    VirtualComponentTranslator._isVirtualComponent = function (obj) {
        return !!(obj && obj.getType);
    };
    /**
     * Generated the React child for a Virtual Component.
     */
    VirtualComponentTranslator._generateReactChild = function (parentKey, defaultKey, virtualComponent, props, hostData, memHelper) {
        if (this._isVirtualComponent(virtualComponent)) {
            var elemChildren = virtualComponent.getChildren();
            var component = virtualComponent;
            return this.generateReactComponent(component, parentKey, defaultKey, props, hostData, memHelper, elemChildren !== null ?
                this.generateReactChildren(VirtualComponentTranslator._getComponentKey(component, parentKey, defaultKey), elemChildren, props, hostData, memHelper)
                : null);
        }
        else {
            return virtualComponent;
        }
    };
    /**
     * Generates the react counterparts for the given virtual component children.
     * @param parentKey The key of this parent
     * @param virtualComponents either an array of virtual components, or just a single component
     * @param props properties of the Custom Control host
     * @param hostData Data provided from this VC's parent CustomControlHostRoot
     * @param memHelper this component's associated memoization helper
     */
    VirtualComponentTranslator.generateReactChildren = function (parentKey, virtualComponents, props, hostData, memHelper) {
        if (virtualComponents !== null) {
            if (Array.isArray(virtualComponents)) {
                var childNodes = [];
                for (var index = 0; index < virtualComponents.length; index++) {
                    childNodes.push(this._generateReactChild(parentKey, KEYLESS_CHILD_ID + index, virtualComponents[index], props, hostData, memHelper));
                }
                return childNodes;
            }
            else {
                return this._generateReactChild(parentKey, KEYLESS_CHILD_ID, virtualComponents, props, hostData, memHelper);
            }
        }
    };
    /**
     * Check if the component is Complex Component, a Customized Control Component
     * @param virtualComponent Virtual Component Pass in
    */
    VirtualComponentTranslator.isComplexComponent = function (virtualComponent) {
        if (!virtualComponent) {
            return false;
        }
        var type = virtualComponent.getType();
        if (type && CustomControlExposedInterfaces_1.SupportedPrimitives.indexOf(type.toUpperCase()) !== -1) {
            return false;
        }
        return true;
    };
    VirtualComponentTranslator._buildContextString = function (parentProps, currentFormInfo) {
        var isGrid = false;
        var isQuickForm = false;
        for (var parameter in parentProps.configuration.Parameters) {
            if (parentProps.configuration.Parameters[parameter].Type === ManifestType_1.ManifestType.QuickForm) {
                isQuickForm = true;
            }
            else if (parentProps.configuration.Parameters[parameter].Type === ManifestType_1.ManifestType.Grid) {
                isGrid = true;
            }
        }
        var contextChanged = (!parentProps.formInfo !== !currentFormInfo);
        if (!contextChanged && parentProps.formInfo) {
            contextChanged = (parentProps.formInfo.EntityName !== currentFormInfo.EntityName) ||
                (parentProps.formInfo.FormId !== currentFormInfo.FormId) ||
                (parentProps.formInfo.RecordId !== currentFormInfo.RecordId) ||
                (parentProps.formInfo.RibbonId !== currentFormInfo.RibbonId);
        }
        if (contextChanged) {
            if (isQuickForm) {
                return ManifestType_1.ManifestType.QuickForm + ":" + parentProps.controlId;
            }
            else if (isGrid) {
                return ManifestType_1.ManifestType.Grid;
            }
        }
        return "default";
    };
    /**
     * Base attributes default values
     */
    VirtualComponentTranslator._baseAttributes = {
        DisplayName: "",
        LogicalName: "",
        Type: "string",
        IsSecured: false,
        RequiredLevel: 0,
        MinValue: -100000000000,
        MaxValue: 100000000000,
        ImeMode: 0,
        MaxLength: 100,
        EntityLogicalName: "",
        Precision: 2,
        Format: "1",
        LanguageByCode: {},
        TimeZoneByCode: {},
        Behavior: 0,
        Targets: [],
        Options: [{
                Label: "---",
                Value: 1,
            },],
        DefaultValue: 1,
        lastUpdatedField: null,
        lastUpdatedValue: null,
        rollupStateField: null,
        rollupStateValue: 0,
        calculatedFieldValid: false,
        rollupValid: false,
        SourceType: null,
        recalculate: function () { },
    };
    return VirtualComponentTranslator;
}());
exports.VirtualComponentTranslator = VirtualComponentTranslator;

},{"../../CommonComponents/Common/HorizontalScroll":1,"../../CommonComponents/Common/ViewSelectorControl":3,"../../CommonComponents/FontIcon/CrmIcon":4,"../../CommonComponents/FontIcon/MicrosoftIcon":6,"../../CommonComponents/Primitive/Button":8,"../../CommonComponents/Primitive/ComboBox":10,"../../CommonComponents/Primitive/EntityImage":12,"../../CommonComponents/Primitive/FileInput":14,"../../CommonComponents/Primitive/FlexibleText":15,"../../CommonComponents/Primitive/Flyout":16,"../../CommonComponents/Primitive/Hyperlink":20,"../../CommonComponents/Primitive/IFrame":22,"../../CommonComponents/Primitive/Image":23,"../../CommonComponents/Primitive/Label":24,"../../CommonComponents/Primitive/List":25,"../../CommonComponents/Primitive/ListItem":26,"../../CommonComponents/Primitive/Popup/Popup":27,"../../CommonComponents/Primitive/Popup/RootPopup":28,"../../CommonComponents/Primitive/PresenceIndicator":29,"../../CommonComponents/Primitive/ProgressIndicator":30,"../../CommonComponents/Primitive/Radio/RadioInput":32,"../../CommonComponents/Primitive/ScrollView":33,"../../CommonComponents/Primitive/Select/Option":34,"../../CommonComponents/Primitive/Select/Select":35,"../../CommonComponents/Primitive/Switch":36,"../../CommonComponents/Primitive/Table/Table":37,"../../CommonComponents/Primitive/Table/TableBody":38,"../../CommonComponents/Primitive/Table/TableCaption":39,"../../CommonComponents/Primitive/Table/TableCell":40,"../../CommonComponents/Primitive/Table/TableFooter":41,"../../CommonComponents/Primitive/Table/TableHeader":42,"../../CommonComponents/Primitive/Table/TableHeaderCell":43,"../../CommonComponents/Primitive/Table/TableRow":44,"../../CommonComponents/Primitive/Text":45,"../../CommonComponents/Primitive/TextInput":46,"../../CommonComponents/Primitive/View":47,"../Models/CommandingWrapper":53,"../Models/CustomControlExposedInterfaces":55,"../Models/CustomControlUtilityPointers":56,"../Utilities/CustomControlConstants":70,"../Utilities/CustomControlHelper":71,"../Utilities/ManifestType":75,"react":undefined}]},{},[82]);
